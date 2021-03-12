'use strict';

async function setup(data) {
    /**
     * {
            "client_id": "5f0dd8939d35180069468a70",
            "secret": ["jjdlajdkjaksjdlkaslkdkalsdj"],
            "cluster": "https://api.fynd.com"
        }
     */
    // write your code here to process this data
}

async function install(req) {
    // Writee you code here to return initial launch url
   return req.extension.base_url;
}

async function auth(req) {
    // Writee you code here to return initial launch url
   return req.extension.base_url;
}

async function uninstall(req) {
    // Write your code here to cleanup data related to extension
    // If task is time taking then process it async on other process.
}

module.exports = {
    setup: setup,
    install: install,
    auth: auth,
    uninstall: uninstall
};