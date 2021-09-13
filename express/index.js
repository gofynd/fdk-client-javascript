'use strict';

const {extension} = require('./extension');
const setupRoutes = require("./routes");
const { setupProxyRoutes } = require("./api_routes");
const Session = require("./session/session");
const SessionStorage = require("./session/session_storage");
const { ApplicationConfig, ApplicationClient } = require("fdk-client-javascript");
const { webhookHandler } = require('./webhook');


function setupFdk(data) {
    extension.initialize(data);
    let router = setupRoutes(extension, webhookHandler);
    let { apiRoutes, applicationProxyRoutes } = setupProxyRoutes();
    if (data.webhook_config && Object.keys(data.webhook_config)) {
        webhookHandler.initialize(data.webhook_config, data);
    }

    async function getPlatformClient(companyId) {
        let client = null;
        if(!extension.isOnlineAccessMode()) {
            let sid = Session.generateSessionId(false, {
                cluster: extension.cluster,
                companyId: companyId
            });
            let session = await SessionStorage.getSession(sid);
            client = await extension.getPlatformClient(companyId, session);
        }
        return client;
    }

    async function getApplicationClient(applicationId, applicationToken) {
        let applicationConfig = new ApplicationConfig({
            applicationID: applicationId,
            applicationToken: applicationToken,
            domain: extension.cluster
        });
        let applicationClient = new ApplicationClient(applicationConfig);
        return applicationClient;
    }

    return {
        fdkHandler: router,
        extension: extension,
        apiRoutes: apiRoutes,
        webhookHandler: webhookHandler,
        applicationProxyRoutes: applicationProxyRoutes,
        getPlatformClient: getPlatformClient,
        getApplicationClient: getApplicationClient
    };
}

module.exports = {
    setupFdk: setupFdk
};