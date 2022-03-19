'use strict';
const validator = require('validator');
const { FdkInvalidExtensionConfig } = require("./error_code");
const urljoin = require('url-join');
const { PlatformConfig, PlatformClient } = require("fdk-client-javascript");
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
        this._isInitialized = false;
    }

    async initialize(data) {

        this._isInitialized = false;

        this.storage = data.storage;

        if (!data.api_key) {
            throw new FdkInvalidExtensionConfig("Invalid api_key");
        }
        this.api_key = data.api_key;

        if (!data.api_secret) {
            throw new FdkInvalidExtensionConfig("Invalid api_secret");
        }
        this.api_secret = data.api_secret;

        if (!data.callbacks || (data.callbacks && (!data.callbacks.auth || !data.callbacks.uninstall))) {
            throw new FdkInvalidExtensionConfig("Missing some of callbacks. Please add all `auth` and `uninstall` callbacks.");
        }

        this.callbacks = data.callbacks;
        this.access_mode = data.access_mode || "offline";

        if (data.cluster) {
            if (!validator.isURL(data.cluster)) {
                throw new FdkInvalidExtensionConfig("Invalid cluster value. Invalid value: " + data.cluster);
            }
            this.cluster = data.cluster;
        }

        let extensionData = await this.getExtensionDetails();

        if (data.base_url && !validator.isURL(data.base_url)) {
            throw new FdkInvalidExtensionConfig("Invalid base_url value. Invalid value: " + data.base_url);
        }
        else if (!data.base_url) {
            data.base_url = extensionData.base_url;
        }
        this.base_url = data.base_url;

        if (data.scopes) {
            data.scopes = this.verifyScopes(data.scopes, extensionData);
        }
        this.scopes = data.scopes || extensionData.scope;

        logger.debug(`Extension initialized`);
        this.webhookRegistry = new WebhookRegistry();

        if (data.webhook_config && Object.keys(data.webhook_config)) {
            await this.webhookRegistry.initialize(data.webhook_config, data);
        }

        this._isInitialized = true;
    }

    get isInitialized(){
        return this._isInitialized;
    }

    verifyScopes(scopes, extensionData) {
        const missingScopes = scopes.filter(val => extensionData.scope.indexOf(val) === -1);
        if (!scopes || scopes.length <= 0 || missingScopes.length) {
            throw new FdkInvalidExtensionConfig("Invalid scopes in extension config. Invalid scopes: " + missingScopes.join(", "));
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
        if (!this._isInitialized){
            throw new FdkInvalidExtensionConfig('Extension not initialized due to invalid data')    
        }
        let platformConfig = new PlatformConfig({
            companyId: parseInt(companyId),
            domain: this.cluster,
            apiKey: this.api_key,
            apiSecret: this.api_secret,
            useAutoRenewTimer: false
        });
        return platformConfig;
        
    }

    async getPlatformClient(companyId, session) {
        if (!this._isInitialized){
            throw new FdkInvalidExtensionConfig('Extension not initialized due to invalid data')    
        }
        const SessionStorage = require('./session/session_storage');
        
        let platformConfig = this.getPlatformConfig(companyId);
        platformConfig.oauthClient.setToken(session);
        platformConfig.oauthClient.token_expires_at = session.access_token_validity;
        
        if (session.access_token_validity && session.refresh_token) {
            let ac_nr_expired = ((session.access_token_validity - new Date().getTime()) / 1000) <= 120;
            if (ac_nr_expired) {
                logger.debug(`Renewing access token for company ${companyId}`);
                const renewTokenRes = await platformConfig.oauthClient.renewAccessToken();
                renewTokenRes.access_token_validity = platformConfig.oauthClient.token_expires_at;
                session.updateToken(renewTokenRes);
                await SessionStorage.saveSession(session);
                logger.debug(`Access token renewed for company ${companyId}`);
            }
        }
       
        return new PlatformClient(platformConfig);
    }

    async getExtensionDetails() {
        try {
            let url = `${this.cluster}/service/panel/partners/v1.0/extensions/details/${this.api_key}`;
            const token = Buffer.from(
                `${this.api_key}:${this.api_secret}`,
                "utf8"
            ).toString("base64");
            const rawRequest = {
                method: "get",
                url: url,
                headers: {
                    Authorization: `Basic ${token}`,
                    "Content-Type": "application/json",
                },
            };
            let extensionData = await fdkAxios.request(rawRequest);
            return extensionData;
        } catch (err) {
            throw new FdkInvalidExtensionConfig("Invalid api_key or api_secret");
        }
    }
}


const extension = new Extension();

module.exports = {
    extension
};
