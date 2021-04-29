'use strict';
const { extension } = require('./extension');
const express = require('express');
const { sessionMiddleware } = require('./middleware/session_middleware');
const FdkHelper = require("./fdk_helper");
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
            let fdkHelper = FdkHelper.getInstance(req.fdkSession.cluster, extension);
            let platformConfig = await fdkHelper.getPlatformConfigInstance(req.fdkSession.company_id);
            platformConfig.oauthClient.setToken(req.fdkSession);
            await platformConfig.oauthClient.renewAccessToken();
            const client = new PlatformClient(platformConfig);
            req.platformClient = client;
            req.extension = extension;
            next();
        } catch (error) {
            next(error);
        }
    });
    
    return {
        apiRoutes,
        applicationProxyRoutes
    };
}

module.exports = {
    setupProxyRoutes
};