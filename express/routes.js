'use strict';
const express = require('express');
const { v4: uuidv4 } = require("uuid");
const Session = require("./session/session");
const SessionStorage = require("./session/session_storage");
const { FdkSessionNotFoundError, FdkInvalidOAuthError } = require("./error_code");
const { SESSION_COOKIE_NAME, ADMIN_SESSION_COOKIE_NAME } = require('./constants');
const { sessionMiddleware, partnerSessionMiddleware } = require('./middleware/session_middleware');
const logger = require('./logger');
const urljoin = require('url-join');
const FdkRoutes = express.Router();


function setupRoutes(ext) {

    let storage = ext.storage;
    let callbacks = ext.callbacks;

    FdkRoutes.get("/fp/install", async (req, res, next) => {
        // ?company_id=1&client_id=123313112122
        try {
            let companyId = parseInt(req.query.company_id);
            let platformConfig = await ext.getPlatformConfig(companyId);
            let session;

            session = new Session(Session.generateSessionId(true));

            let sessionExpires = new Date(Date.now() + 900000); // 15 min

            if (session.isNew) {
                session.company_id = companyId;
                session.scope = ext.scopes;
                session.expires = sessionExpires;
                session.access_mode = 'online'; // Always generate online mode token for extension launch
                session.extension_id = ext.api_key;
            } else {
                if (session.expires) {
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
            if (req.query.application_id) {
                authCallback += "?application_id=" + req.query.application_id;
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
            if (!req.fdkSession) {
                throw new FdkSessionNotFoundError("Can not complete oauth process as session not found");
            }

            if (req.fdkSession.state !== req.query.state) {
                throw new FdkInvalidOAuthError("Invalid oauth call");
            }
            const companyId = req.fdkSession.company_id

            const platformConfig = await ext.getPlatformConfig(req.fdkSession.company_id);
            await platformConfig.oauthClient.verifyCallback(req.query);

            let token = platformConfig.oauthClient.raw_token;
            let sessionExpires = new Date(Date.now() + token.expires_in * 1000);

            req.fdkSession.expires = sessionExpires;
            token.access_token_validity = sessionExpires.getTime();
            req.fdkSession.updateToken(token);

            await SessionStorage.saveSession(req.fdkSession);

            // Generate separate access token for offline mode
            if (!ext.isOnlineAccessMode()) {

                let sid = Session.generateSessionId(false, {
                    cluster: ext.cluster,
                    id: companyId
                });
                let session = await SessionStorage.getSession(sid);
                if (!session) {
                    session = new Session(sid);
                } else if (session.extension_id !== ext.api_key) {
                    session = new Session(sid);
                }

                let offlineTokenRes = await platformConfig.oauthClient.getOfflineAccessToken(ext.scopes, req.query.code);

                session.company_id = companyId;
                session.scope = ext.scopes;
                session.state = req.fdkSession.state;
                session.extension_id = ext.api_key;
                offlineTokenRes.access_token_validity = platformConfig.oauthClient.token_expires_at;
                offlineTokenRes.access_mode = 'offline';
                session.updateToken(offlineTokenRes);

                await SessionStorage.saveSession(session);

            }

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
            if (ext.webhookRegistry.isInitialized && ext.webhookRegistry.isSubscribeOnInstall) {
                const client = await ext.getPlatformClient(companyId, req.fdkSession);
                await ext.webhookRegistry.syncEvents(client, null, true).catch((err) => {
                    logger.error(err);
                });
            }
            let redirectUrl = await ext.callbacks.auth(req);
            logger.debug(`Redirecting after auth callback to url: ${redirectUrl}`);
            res.redirect(redirectUrl);
        } catch (error) {
            logger.error(error);
            next(error);
        }
    });


    FdkRoutes.post("/fp/auto_install", sessionMiddleware(false), async (req, res, next) => {
        try {

            let { company_id, code } = req.body;

            logger.debug(`Extension auto install started for company: ${company_id} on company creation.`);

            let platformConfig = await ext.getPlatformConfig(company_id);
            let sid = Session.generateSessionId(false, {
                cluster: ext.cluster,
                id: company_id
            });
            
            let session = await SessionStorage.getSession(sid);
            if (!session) {
                session = new Session(sid);
            } else if (session.extension_id !== ext.api_key) {
                session = new Session(sid);
            }

            let offlineTokenRes = await platformConfig.oauthClient.getOfflineAccessToken(ext.scopes, code);

            session.company_id = company_id;
            session.scope = ext.scopes;
            session.state = uuidv4();
            session.extension_id = ext.api_key;
            offlineTokenRes.access_token_validity = platformConfig.oauthClient.token_expires_at;
            offlineTokenRes.access_mode = 'offline';
            session.updateToken(offlineTokenRes);

            if (!ext.isOnlineAccessMode()) {
                await SessionStorage.saveSession(session);  
            }
            
            if (ext.webhookRegistry.isInitialized && ext.webhookRegistry.isSubscribeOnInstall) {
                const client = await ext.getPlatformClient(company_id, session);
                await ext.webhookRegistry.syncEvents(client, null, true).catch((err) => {
                    logger.error(err);
                });
            }
            logger.debug(`Extension installed for company: ${company_id} on company creation.`);
            if (ext.callbacks.auto_install) {
                await ext.callbacks.auto_install(req);
            }            
            res.json({ message: "success" });
        } catch (error) {
            logger.error(error);
            next(error);
        }
    });

    FdkRoutes.post("/fp/uninstall", async (req, res, next) => {
        try {
            let { company_id } = req.body;
            let sid;
            if (!ext.isOnlineAccessMode()) {
                sid = Session.generateSessionId(false, {
                    cluster: ext.cluster,
                    id: company_id
                });
                await SessionStorage.deleteSession(sid);
            }
            req.extension = ext;
            await ext.callbacks.uninstall(req);
            res.json({ success: true });
        } catch (error) {
            logger.error(error);
            next(error);
        }
    });

    FdkRoutes.get("/adm/install", async (req, res, next) => {
        try {
            let organizationId = req.query.organization_id;
            let partnerConfig = ext.getPartnerConfig(organizationId);
            let session;

            session = new Session(Session.generateSessionId(true));
            let sessionExpires = new Date(Date.now() + 900000);

            if (session.isNew) {
                session.organization_id = organizationId;
                session.scope = ext.scopes;
                session.expires = sessionExpires;
                session.access_mode = 'online';
                session.extension_id = ext.api_key;
            } else {
                if (session.expires) {
                    session.expires = new Date(session.expires);
                }
            }

            req.fdkSession = session;
            req.extension = ext;

            const cookieName = ADMIN_SESSION_COOKIE_NAME;
            res.cookie(cookieName, session.id, {
                secure: true,
                httpOnly: true,
                expires: session.expires,
                signed: true,
                sameSite: "none"
            });

            session.state = uuidv4();

            let authCallback = urljoin(ext.base_url, "/adm/auth");

            let redirectUrl = partnerConfig.oauthClient.startAuthorization({
                scope: session.scope,
                redirectUri: authCallback,
                state: session.state,
                access_mode: 'online'
            })

            await SessionStorage.saveSession(session);
            logger.debug(`Redirect after partner install callback to url: ${redirectUrl}`);
            res.redirect(redirectUrl);

        } catch(error) {
            logger.error(error);
            next(error);
        }
    })

    FdkRoutes.get("/adm/auth", partnerSessionMiddleware(false), async (req, res, next) => {
        try {
            if (!req.fdkSession) {
                throw new FdkSessionNotFoundError("Can not complete oauth process as session not found");
            }

            if (req.fdkSession.state !== req.query.state) {
                throw new FdkInvalidOAuthError('Invalid oauth call');
            }
            
            const organizationId = req.fdkSession.organization_id;

            const partnerConfig = ext.getPartnerConfig(req.fdkSession.organization_id);
            await partnerConfig.oauthClient.verifyCallback(req.query);

            let token = partnerConfig.oauthClient.raw_token;
            let sessionExpires = new Date(Date.now() + token.expires_in * 1000);
            
            req.fdkSession.expires = sessionExpires;
            token.access_token_validity = sessionExpires.getTime();
            req.fdkSession.updateToken(token);

            await SessionStorage.saveSession(req.fdkSession);

            // offline token
            if (!ext.isOnlineAccessMode()) {
                let sid = Session.generateSessionId(false, {
                    cluster: ext.cluster,
                    id: organizationId
                });

                let session = await SessionStorage.getSession(sid);

                if (!session) {
                    session = new Session(sid);
                } else if (session.extension_id !== ext.api_key) {
                    session = new Session(sid);
                }
                
                let offlineTokenRes = await partnerConfig.oauthClient.getOfflineAccessToken(ext.scopes, req.query.code);

                session.organization_id = organizationId;
                session.scope = ext.scopes;
                session.state = req.fdkSession.state;
                session.extension_id = ext.api_key;
                offlineTokenRes.access_token_validity = partnerConfig.oauthClient.token_expires_at;
                offlineTokenRes.access_mode = 'offline';
                session.updateToken(offlineTokenRes);

                await SessionStorage.saveSession(session);
            }

            const cookieName = ADMIN_SESSION_COOKIE_NAME;

            res.cookie(cookieName, req.fdkSession.id, {
                secure: true,
                httpOnly: true, 
                expires: sessionExpires,
                signed: true,
                sameSite: 'none'
            })

            let redirectUrl = urljoin(ext.base_url, '/admin')
            logger.debug(`Redirecting after auth callback to url: ${redirectUrl}`)
            res.redirect(redirectUrl);

        } catch(error) {
            logger.error(error);
            next(error);
        }
    })

    return FdkRoutes;
}


module.exports = setupRoutes;