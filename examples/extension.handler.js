'use strict';

async function auth(req) {
    // Writee you code here to return initial launch url
   return req.extension.base_url;
}

async function uninstall(req) {
    // Write your code here to cleanup data related to extension
    // If task is time taking then process it async on other process.
}

module.exports = {
    auth: auth,
    uninstall: uninstall
};