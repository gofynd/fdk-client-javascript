'use strict';
const { extension } = require('./extension');
const express = require('express');
const { sessionMiddleware } = require('./middleware/session_middleware');
const { PlatformClient, ApplicationConfig, ApplicationClient } = require("fdk-client-javascript");


function setupProxyRoutes() {
    const apiRoutes = express.Router({  mergeParams: true });
    const applicationProxyRoutes = express.Router({  mergeParams: true });

    applicationProxyRoutes.use(async (req, res, next) => {
        try {
            if(req.headers["x-user-data"]) {
                req.user = JSON.parse(req.headers["x-user-data"]);
                req.user.user_id = req.user._id;
            }
            if(req.headers["x-application-data"]) {
                req.application = JSON.parse(req.headers["x-application-data"]);
                req.applicationConfig = new ApplicationConfig({
                    applicationID: req.application._id,
                    applicationToken: req.application.token,
                });
                req.applicationClient = new ApplicationClient(req.applicationConfig);
            }
            next();
        } catch (error) {
            next(error);
        }
    });
    
    apiRoutes.use(sessionMiddleware(true), async (req, res, next) => {
        try {
            const client = extension.getPlatformClient(req.fdkSession.company_id, req.fdkSession);
            req.platformClient = client;
            req.extension = extension;
            next();
        } catch (error) {
            next(error);
        }
    });
    
    return {
        platformApiRoutes: apiRoutes,
        apiRoutes: apiRoutes, // this is deprecated use platformApiRoutes
        applicationProxyRoutes: applicationProxyRoutes
    };
}

module.exports = {
    setupProxyRoutes: setupProxyRoutes
};