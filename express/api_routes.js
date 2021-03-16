'use strict';
const { extension } = require('./extension');
const express = require('express');
const { sessionMiddleware } = require('./middleware/session_middleware');
const FdkHelper = require("./fdk_helper");
const { PlatformClient, ApplicationConfig, ApplicationClient } = require("fdk-client-javascript");


function setupProxyRoutes() {
    const apiRoutes = express.Router({  mergeParams: true });
    const applicationProxyRoutes = express.Router({  mergeParams: true });

    // applicationProxyRoutes :: add handling of x-user-data and api routes 

    apiRoutes.use(sessionMiddleware(true), async (req, res, next) => {
        try {
            let fdkHelper = FdkHelper.getInstance(req.fdkSession.cluster, extension);
            let platformConfig = await fdkHelper.getPlatformConfigInstance(req.fdkSession.company_id);
            platformConfig.oauthClient.setToken(req.fdkSession);
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