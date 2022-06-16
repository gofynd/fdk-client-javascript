'use strict';

async function auth(req) {
    // Write you code here to return initial launch url
    return req.extension.base_url + `?company_id=${req.query.company_id}`;
}

async function autoInstall(req) {
    // Write you code here to do any special handling on auto install event is received. 
    // Here any handling on auth call back should under here as well since this event will be called when extension is installed
    // but auth callback won't be triggered until user launches extension
}

async function uninstall(req) {
    // Write your code here to cleanup data related to extension
    // If task is time taking then process it async on other process.
}

module.exports = {
    auth: auth,
    uninstall: uninstall,
    auto_install: autoInstall
};