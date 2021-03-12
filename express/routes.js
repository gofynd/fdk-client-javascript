'use strict';
const express = require('express');
const { v4 : uuidv4} = require("uuid");
const FdkHelper = require("./fdk_helper");
const Session = require("./session/session");
const SessionStorage = require("./session/session_storage");
const { FdkSessionNotFoundError, FdkInvalidOAuthError } = require("./error_code");
const { SESSION_COOKIE_NAME } = require('./constants');
const { sessionMiddleware } = require('./middleware/session_middleware');
const { extension } = require('./extension');
const FdkRoutes = express.Router();

FdkRoutes.use(async (req, res, next) => {
    req.query.cluster = "https://api.fyndx0.de";
    next();
});
function setupRoutes(ext) {

    let storage = ext.storage;
    let callbacks = ext.callbacks;

    FdkRoutes.get(`/extension.json`, async (req, res) => {
        let data = ext.toJson();
        res.json(data);
    });

    FdkRoutes.post(`${ext.prefix_path}/setup`, async (req, res, next) => {
        /**
         *  {
                "client_id": "5f0dd8939d35180069468a70",
                "secret": ["jjdlajdkjaksjdlkaslkdkalsdj"],
                "cluster": "https://api.fynd.com"
            }
         */
        try {
            let cluster = req.body.cluster;
            let fpHelper = await FdkHelper.getInstance(cluster, ext);
            await fpHelper.setClusterMeta(req.body);
            await callbacks.setup(req.body);
            res.json({sucess: true});
        } catch (error) {
            console.error(error);
            res.status(500, { message: error.message});
        }
    });

    FdkRoutes.get(`${ext.prefix_path}/install`, async (req, res, next) => {
        // ?company_id=1&cluster=https://api.fynd.com&client_id=123313112122
        try {
            let cluster = req.query.cluster;
            let companyId = parseInt(req.query.company_id);

            if(!cluster) {
                res.status(400).json({"message": "cluster not found"});
            }

            let fdkHelper = FdkHelper.getInstance(cluster, ext);
            let platformConfig = await fdkHelper.getPlatformClientInstance(companyId);

            let session;
            if(ext.isOnlineAccessMode()) {
                session = new Session(Session.generateSessionId(true));
            } else {
                let sid = Session.generateSessionId(false, {
                    cluster: cluster,
                    companyId: companyId
                });
                session = await SessionStorage.getSession(sid);
                if(!session) {
                    session = new Session(sid);
                }
            }

            if(session.isNew) {
                session.cluster = cluster;
                session.company_id = companyId;
                session.scope = ext.scopes;
                session.expires = new Date(Date.now() + 100000);
            }

            req.fdkSession = session;
            req.extension = extension;

            res.cookie(SESSION_COOKIE_NAME, session.id, { 
                secure: true,
                httpOnly: true,
                expires: session.expires,
                signed: true,
                sameSite: true
            });
            
            let redirectUrl;
            if(!session.accessToken) {
                session.state = uuidv4();
                // start authorization flow
                redirectUrl = platformConfig.oauthClient.startAuthorization({
                    scope: session.scope,
                    redirectUri: ext.getAuthCallback(),
                    state: session.state,
                    access_mode: ext.access_mode
                });
            } else {
                redirectUrl = await ext.callbacks.install(req);
            }
            await SessionStorage.saveSession(session);
            res.redirect(redirectUrl);
        } catch (error) {
            next(error);
        }
    });

    FdkRoutes.get(`${ext.prefix_path}/auth`, sessionMiddleware(false), async (req, res, next) => {
        // ?code=ddjfhdsjfsfh&client_id=jsfnsajfhkasf&company_id=1&cluster=https://api.fynd.com&state=jashoh
        try {
            if(!req.fdkSession) {
                throw new FdkSessionNotFoundError("Can not complete oauth process as session not found");
            }

            if(req.fdkSession.state !== req.query.state) {
                throw new FdkInvalidOAuthError("Invalid oauth call");
            }

            let fdkHelper = FdkHelper.getInstance(req.fdkSession.cluster, ext);
            let platformConfig = await fdkHelper.getPlatformClientInstance(req.fdkSession.company_id);
            await platformConfig.oauthClient.verifyCallback(req.query);
            let token = platformConfig.oauthClient.token;

            req.fdkSession.expires = new Date(Date.now() + token.expires_in * 1000);
            req.fdkSession.access_token = token.access_token;
            req.fdkSession.current_user = token.current_user;
            req.fdkSession.refresh_token = token.refresh_token;
            await SessionStorage.saveSession(req.fdkSession);

            req.extension = extension;
            let redirectUrl = await ext.callbacks.auth(req);
            res.redirect(redirectUrl);
        } catch (error) {
            next(error);
        }
    });

    FdkRoutes.post(`${ext.prefix_path}/uninstall`, async (req, res, next) => {
        try {
            await ext.callbacks.uninstall(req);
            res.json({success: true});
        } catch (error) {
            res.status(500).json({success: false, message: error});
        }
    });

    return FdkRoutes;
}


module.exports = setupRoutes;