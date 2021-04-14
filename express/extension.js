'use strict';
const validator = require('validator');
const {FdkInvalidExtensionJson} = require("./error_code");
const urljoin = require('url-join');
const { PlatformConfig, PlatformClient, ApplicationConfig, ApplicationClient } = require("fdk-client-javascript");

class Extension {
    constructor() {
        this.api_key = null;
        this.api_secret = null;
        this.storage = null;
        this.base_url = null;
        this.callbacks = null;
        this.access_mode = null;
        this.cluster = "https://api.fynd.com";
    }

    initialize(data) {
        this.storage = data.storage;

        if(!data.api_key){
            throw new FdkInvalidExtensionJson("Invalid api_key");
        }
        this.api_key = data.api_key;

        if(!data.api_secret){
            throw new FdkInvalidExtensionJson("Invalid api_secret");
        }
        this.api_secret = data.api_secret;

        if(!validator.isURL(data.base_url)) {
            throw new FdkInvalidExtensionJson("Invalid base_url");
        }
        
        this.base_url = data.base_url;
        this.scopes = this.verifyScopes(data.scopes);

        if(!data.callbacks || ( data.callbacks && (!data.callbacks.setup || !data.callbacks.auth || !data.callbacks.install || !data.callbacks.uninstall))) {
            throw new FdkInvalidExtensionJson("Missing some of callbacks. Please add all  `setup`, `auth`, `install` and `uninstall` callbacks.");
        }

        this.callbacks = data.callbacks;
        this.access_mode = data.access_mode || "offline";
        
        if(data.cluster) {
            if(!validator.isURL(data.cluster)) {
                throw new FdkInvalidExtensionJson("Invalid cluster");
            }
            this.cluster = data.cluster;
        }
    }

    verifyScopes(scopes) {
        if(!scopes || scopes.length <= 0 ) {
            throw new FdkInvalidExtensionJson("Invalid scopes in extension.json");
        }
        return scopes;
    }

    getAuthCallback() {
        return urljoin(this.base_url, "/fp/auth");
    }

    isOnlineAccessMode() {
        return this.access_mode === 'online';
    }

    getPlatformConfig(companyId) {
        let platformConfig = new PlatformConfig({
            companyId: parseInt(companyId),
            domain: this.cluster,
            apiKey: this.api_key,
            apiSecret: this.api_secret
        });
        return platformConfig;
    }

    getPlatformClient(companyId, session) {
        let platformConfig =  this.getPlatformConfig(companyId);
        platformConfig.oauthClient.setToken(session);
        return new PlatformClient(platformConfig);
    }
}

const extension = new Extension();

module.exports = {
    extension
};