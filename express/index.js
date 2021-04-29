'use strict';

const {initExtension} = require('./extension');
const setupRoutes = require("./routes");
const { setupProxyRoutes } = require("./api_routes");
const FdkHelper = require("./fdk_helper");
const Session = require("./session/session");
const SessionStorage = require("./session/session_storage");
const { PlatformConfig, PlatformClient, ApplicationConfig, ApplicationClient } = require("fdk-client-javascript");


function setupFdk(data) {
    data.prefix = data.prefix ? data.prefix : "/callback";
    let extension = initExtension(data);
    let router = setupRoutes(extension);
    let { apiRoutes, applicationProxyRoutes } = setupProxyRoutes();


    async function getPlatformClient(cluster, companyId) {
        let fdkHelper = FdkHelper.getInstance(cluster, extension);
        let platformConfig = await fdkHelper.getPlatformConfigInstance(companyId);
        let client = null;
        if(!extension.isOnlineAccessMode()) {
            let sid = Session.generateSessionId(false, {
                cluster: cluster,
                companyId: companyId
            });
            let session = await SessionStorage.getSession(sid);
            platformConfig.oauthClient.setToken(session);
            await platformConfig.oauthClient.renewAccessToken();
            client = new PlatformClient(platformConfig);
        }
        return client;
    }

    async function getApplicationClient(cluster, applicationId, applicationToken) {
        let applicationConfig = new ApplicationConfig({
            applicationID: applicationId,
            applicationToken: applicationToken,
            domain: cluster
        });
        let applicationClient = new ApplicationClient(applicationConfig);
        return applicationClient;
    }

    return {
        fdkHandler: router,
        extension: extension,
        apiRoutes: apiRoutes,
        applicationProxyRoutes: applicationProxyRoutes,
        getPlatformClient: getPlatformClient,
        getApplicationClient: getApplicationClient
    };
}

module.exports = {
    setupFdk: setupFdk
};