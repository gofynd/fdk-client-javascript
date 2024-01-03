'use strict';

const { extension } = require('./extension');
const setupRoutes = require("./routes");
const { setupProxyRoutes } = require("./api_routes");
const Session = require("./session/session");
const SessionStorage = require("./session/session_storage");
const { ApplicationConfig, ApplicationClient } = require("@gofynd/fdk-client-javascript");
const logger = require('./logger');

function setupFdk(data, syncInitialization) {
    if (data.debug) {
        logger.transports[0].level = 'debug';
    }
    const promiseInit = extension.initialize(data)
        .catch(err=>{
            logger.error(err);
            throw err;
        });
    let router = setupRoutes(extension);
    let { apiRoutes, applicationProxyRoutes, partnerApiRoutes } = setupProxyRoutes();

    async function getPlatformClient(companyId) {
        let client = null;
        if (!extension.isOnlineAccessMode()) {
            let sid = Session.generateSessionId(false, {
                cluster: extension.cluster,
                id: companyId
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

    const configInstance =  {
        fdkHandler: router,
        extension: extension,
        apiRoutes: apiRoutes,
        partnerApiRoutes: partnerApiRoutes,
        webhookRegistry: extension.webhookRegistry,
        applicationProxyRoutes: applicationProxyRoutes,
        getPlatformClient: getPlatformClient,
        getApplicationClient: getApplicationClient
    };

    return syncInitialization? promiseInit.then(()=>configInstance).catch(()=>configInstance): configInstance;
}

module.exports = {
    setupFdk: setupFdk
};