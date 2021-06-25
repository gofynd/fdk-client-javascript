'use strict';
const express = require('express');
const { v4 : uuidv4} = require("uuid");
const Session = require("./session/session");
const SessionStorage = require("./session/session_storage");
const { FdkSessionNotFoundError, FdkInvalidOAuthError } = require("./error_code");
const { SESSION_COOKIE_NAME } = require('./constants');
const { sessionMiddleware } = require('./middleware/session_middleware');
const FdkRoutes = express.Router();
const { PlatformConfig, PlatformClient, ApplicationConfig, ApplicationClient } = require("fdk-client-javascript");
const sha256 = require('crypto-js/sha256');


function setupRoutes(ext) {

    let storage = ext.storage;
    let callbacks = ext.callbacks;

    FdkRoutes.get("/fp/install", async (req, res, next) => {
        // ?company_id=1&client_id=123313112122
        try {
            let companyId = parseInt(req.query.company_id);
            let platformConfig = ext.getPlatformConfig(companyId);
            let session;
            if(ext.isOnlineAccessMode()) {
                session = new Session(Session.generateSessionId(true));
            } else {
                let sid = Session.generateSessionId(false, {
                    cluster: ext.cluster,
                    companyId: companyId
                });
                session = await SessionStorage.getSession(sid);
                if(!session) {
                    session = new Session(sid);
                } else if(session.extension_id !== ext.api_key) {
                    session = new Session(sid);
                }
            }

            let sessionExpires = new Date(Date.now() + 900000);

            if(session.isNew) {
                session.company_id = companyId;
                session.scope = ext.scopes;
                session.expires = sessionExpires;
                session.access_mode = ext.access_mode;
                session.extension_id = ext.api_key;
            } else {
                if(session.expires) {
                    session.expires = new Date(session.expires);
                }
            }

            req.fdkSession = session;
            req.extension = ext;

            res.cookie(SESSION_COOKIE_NAME, session.id, { 
                secure: true,
                httpOnly: true,
                expires: session.expires,
                signed: true,
                sameSite: "None"
            });
            
            let redirectUrl;

            session.state = uuidv4();
            // start authorization flow
            redirectUrl = platformConfig.oauthClient.startAuthorization({
                scope: session.scope,
                redirectUri: ext.getAuthCallback(),
                state: session.state,
                access_mode: ext.access_mode
            });
            await SessionStorage.saveSession(session);
            res.redirect(redirectUrl);
        } catch (error) {
            next(error);
        }
    });

    FdkRoutes.get("/fp/auth", sessionMiddleware(false), async (req, res, next) => {
        // ?code=ddjfhdsjfsfh&client_id=jsfnsajfhkasf&company_id=1&state=jashoh
        try {
            if(!req.fdkSession) {
                throw new FdkSessionNotFoundError("Can not complete oauth process as session not found");
            }

            if(req.fdkSession.state !== req.query.state) {
                throw new FdkInvalidOAuthError("Invalid oauth call");
            }

            let platformConfig = ext.getPlatformConfig(req.fdkSession.company_id);
            await platformConfig.oauthClient.verifyCallback(req.query);
            let token = platformConfig.oauthClient.raw_token;

            let sessionExpires = new Date(Date.now() + token.expires_in * 1000);
            
            if(ext.isOnlineAccessMode()) {
                req.fdkSession.expires = sessionExpires;
            } else {
                req.fdkSession.expires = null;
            }

            req.fdkSession.access_token = token.access_token;
            req.fdkSession.expires_in = token.expires_in;
            req.fdkSession.access_token_validity = sessionExpires.getTime();
            req.fdkSession.current_user = token.current_user;
            req.fdkSession.refresh_token = token.refresh_token;
            await SessionStorage.saveSession(req.fdkSession);

            res.cookie(SESSION_COOKIE_NAME, req.fdkSession.id, { 
                secure: true,
                httpOnly: true,
                expires: sessionExpires,
                signed: true,
                sameSite: "None"
            });

            req.extension = ext;
            let redirectUrl = await ext.callbacks.auth(req);
            res.redirect(redirectUrl);
        } catch (error) {
            next(error);
        }
    });

    FdkRoutes.post("/fp/uninstall", async (req, res, next) => {
        try {
            let {client_id, company_id} = req.body;
            if(!ext.isOnlineAccessMode()) {
                let sid = Session.generateSessionId(false, {
                    cluster: ext.cluster,
                    companyId: company_id
                });
                let session = await SessionStorage.getSession(sid);
                const client = await ext.getPlatformClient(company_id, session);
                req.platformClient = client;
            }
            req.extension = ext;
            await ext.callbacks.uninstall(req);
            res.json({success: true});
        } catch (error) {
            res.status(500).json({success: false, message: error});
        }
    });

    return FdkRoutes;
}


module.exports = setupRoutes;