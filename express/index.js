'use strict';

const Extension = require('./extension');
const setupRoutes = require("./routes");

function setupFdk(data) {
    data.prefix = data.prefix ? data.prefix : "/callback";
    let extension = new Extension(data);
    let router = setupRoutes(extension);

    return {
        fdkHandler: router,
        extension: extension
    };
}

module.exports = {
    setupFdk: setupFdk
};