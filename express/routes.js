'use strict';
const express = require('express');
const { v4 : uuidv4} = require("uuid");
const Session = require("./session/session");
const SessionStorage = require("./session/session_storage");
const { FdkSessionNotFoundError, FdkInvalidOAuthError } = require("./error_code");
const { SESSION_COOKIE_NAME } = require('./constants');
const { sessionMiddleware } = require('./middleware/session_middleware');
const logger = require('./logger');
const FdkRoutes = express.Router();


function setupRoutes(ext) {

    let storage = ext.storage;
    let callbacks = ext.callbacks;

    FdkRoutes.get("/fp/install", async (req, res, next) => {
        // ?company_id=1&client_id=123313112122
        try {
            let companyId = parseInt(req.query.company_id);
            let platformConfig = ext.getPlatformConfig(companyId);
            let session;
        
            session = new Session(Session.generateSessionId(true));

            let sessionExpires = new Date(Date.now() + 900000); // 15 min

            if(session.isNew) {
                session.company_id = companyId;
                session.scope = ext.scopes;
                session.expires = sessionExpires;
                session.access_mode = 'online'; // Always generate online mode token for extension launch
                session.extension_id = ext.api_key;
            } else {
                if(session.expires) {
                    session.expires = new Date(session.expires);
                }
            }

            req.fdkSession = session;
            req.extension = ext;

            const compCookieName = `${SESSION_COOKIE_NAME}_${companyId}`
            res.header['x-company-id'] = companyId;
            res.cookie(compCookieName, session.id, { 
                secure: true,
                httpOnly: true,
                expires: session.expires,
                signed: true,
                sameSite: "None"
            });
            
            let redirectUrl;

            session.state = uuidv4();

            // pass application id if received
            let authCallback = ext.getAuthCallback();
            if(req.query.application_id) {
                authCallback += "?application_id="+req.query.application_id;
            }

            // start authorization flow 
            redirectUrl = platformConfig.oauthClient.startAuthorization({
                scope: session.scope,
                redirectUri: authCallback,
                state: session.state,
                access_mode: 'online' // Always generate online mode token for extension launch
            });
            await SessionStorage.saveSession(session);
            logger.debug(`Redirecting after install callback to url: ${redirectUrl}`);
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
            let companyId = req.fdkSession.company_id
            let platformConfig = ext.getPlatformConfig(req.fdkSession.company_id);
            await platformConfig.oauthClient.verifyCallback(req.query);
            let token = platformConfig.oauthClient.raw_token;
            
            // TODO: check what happens when token expires
            let sessionExpires = new Date(Date.now() + token.expires_in * 1000);
        
            if(!ext.isOnlineAccessMode()) {
                
                let sid = Session.generateSessionId(false, {
                    cluster: ext.cluster,
                    companyId: companyId
                });
                let session;
                session = await SessionStorage.getSession(sid);
                if(!session) {
                    let offlineToken = await ext.getOfflineOAuthToken(companyId, req.query.code);
                    
                    if(ext.scopes.every(val => offlineToken.scope.indexOf(val) >= 0)){
                        session = new Session(sid);

                        session.company_id = companyId;
                        session.scope = ext.scopes;
                        session.state = req.fdkSession.state;
                        session.expires_in = offlineToken.expires_in;
                        session.access_mode = 'offline';
                        session.extension_id = ext.api_key;
                        session.access_token = offlineToken.access_token;
                        session.refresh_token = offlineToken.refresh_token;
                        session.access_token_validity =  new Date(Date.now() + offlineToken.expires_in * 1000).getTime();
                        session.current_user = offlineToken.current_user;
                        
                        await SessionStorage.saveSession(session);
                    }

                } else if(session.extension_id !== ext.api_key) {
                    session = new Session(sid);
                }
                
                
            } 

            req.fdkSession.expires = sessionExpires;
            req.fdkSession.access_token = token.access_token;
            req.fdkSession.expires_in = token.expires_in;
            req.fdkSession.access_token_validity = sessionExpires.getTime();
            req.fdkSession.current_user = token.current_user;

            await SessionStorage.saveSession(req.fdkSession);

            const compCookieName = `${SESSION_COOKIE_NAME}_${companyId}`
            res.cookie(compCookieName, req.fdkSession.id, { 
                secure: true,
                httpOnly: true,
                expires: sessionExpires,
                signed: true,
                sameSite: "None"
            });
            res.header['x-company-id'] = companyId;

            req.extension = ext;
            if(ext.webhookRegistry.isInitialized()) {
                const client = await ext.getPlatformClient(companyId, req.fdkSession);
                await ext.webhookRegistry.syncEvents(client, null, true);
            }
            let redirectUrl = await ext.callbacks.auth(req);
            logger.debug(`Redirecting after auth callback to url: ${redirectUrl}`);
            res.redirect(redirectUrl);
        } catch (error) {
            next(error);
        }
    });

    FdkRoutes.post("/fp/uninstall", async (req, res, next) => {
        try {
            let {client_id, company_id} = req.body;
            // TODO: Need to discuss - clear session after uninstall, platformClient in not found in request
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