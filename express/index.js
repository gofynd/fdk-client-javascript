'use strict';

const {initExtension} = require('./extension');
const setupRoutes = require("./routes");
const { setupProxyRoutes } = require("./api_routes");

function setupFdk(data) {
    data.prefix = data.prefix ? data.prefix : "/callback";
    let extension = initExtension(data);
    let router = setupRoutes(extension);
    let { apiRoutes, applicationProxyRoutes } = setupProxyRoutes();
    return {
        fdkHandler: router,
        extension: extension,
        apiRoutes: apiRoutes,
        applicationProxyRoutes: applicationProxyRoutes
    };
}

module.exports = {
    setupFdk: setupFdk
};