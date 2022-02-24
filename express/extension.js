'use strict';
const validator = require('validator');
const {FdkInvalidExtensionJson} = require("./error_code");
const urljoin = require('url-join');
const { PlatformConfig, PlatformClient, ApplicationConfig, ApplicationClient } = require("fdk-client-javascript");
const { WebhookRegistry } = require('./webhook');
const logger = require('./logger');
const { fdkAxios } = require('fdk-client-javascript/sdk/common/AxiosHelper');
const querystring = require("query-string");
class Extension {
    constructor() {
        this.api_key = null;
        this.api_secret = null;
        this.storage = null;
        this.base_url = null;
        this.callbacks = null;
        this.access_mode = null;
        this.cluster = "https://api.fynd.com";
        this.webhookRegistry = null;
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

        if(!data.callbacks || ( data.callbacks && ( !data.callbacks.auth || !data.callbacks.uninstall))) {
            throw new FdkInvalidExtensionJson("Missing some of callbacks. Please add all `auth` and `uninstall` callbacks.");
        }

        this.callbacks = data.callbacks;
        this.access_mode = data.access_mode || "offline";
        
        if(data.cluster) {
            if(!validator.isURL(data.cluster)) {
                throw new FdkInvalidExtensionJson("Invalid cluster");
            }
            this.cluster = data.cluster;
        }
        logger.debug(`Extension initialized`);
        this.webhookRegistry = new WebhookRegistry();

        if (data.webhook_config && Object.keys(data.webhook_config)) {
            this.webhookRegistry.initialize(data.webhook_config, data);
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

    async getPlatformClient(companyId, session) {
        let platformConfig =  this.getPlatformConfig(companyId);
        platformConfig.oauthClient.setToken(session);
        if(session.access_token_validity) {
            let ac_nr_expired = ((session.access_token_validity - new Date().getTime())/ 1000) <= 120;
            if(ac_nr_expired) {
                logger.debug(`Renewing access token for company ${companyId}`);
                await platformConfig.oauthClient.renewAccessToken();
                logger.debug(`Access token renewed for company ${companyId}`);
            }
        }
        return new PlatformClient(platformConfig);
    }

    async getOfflineOAuthToken(companyId, code){
        let url = `${this.cluster}/service/panel/authentication/v1.0/company/${companyId}/oauth/offline-token`;
        let data = { client_id: this.api_key, client_secret: this.api_secret, grant_type: 'client_credentials', scope: this.scopes, code: code };
        const token = Buffer.from(
            `${this.api_key}:${this.api_secret}`,
            "utf8"
        ).toString("base64");
        const rawRequest = {
            method: "post",
            url: url,
            data: querystring.stringify(data),
            headers: {
              Authorization: `Basic ${token}`,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          };
        return fdkAxios.request(rawRequest);
    }
}

const extension = new Extension();

module.exports = {
    extension
};