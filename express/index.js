'use strict';

const {initExtension} = require('./extension');
const setupRoutes = require("./routes");

function setupFdk(data) {
    data.prefix = data.prefix ? data.prefix : "/callback";
    let extension = initExtension(data);
    let router = setupRoutes(extension);

    return {
        fdkHandler: router,
        extension: extension
    };
}

module.exports = {
    setupFdk: setupFdk
};