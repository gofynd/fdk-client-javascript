export = PlatformConfig;
declare class PlatformConfig {
    /**
     * @param {Object} config
     * @param {string} config.companyId
     * @param {string} config.domain
     * @param {string} config.apiKey
     * @param {string} config.apiSecret
     * @param {boolean} config.useAutoRenewTimer
     */
    constructor(config: {
        companyId: string;
        domain: string;
        apiKey: string;
        apiSecret: string;
        useAutoRenewTimer: boolean;
    });
    companyId: string;
    domain: string;
    apiKey: string;
    apiSecret: string;
    useAutoRenewTimer: boolean;
    oauthClient: OauthClient;
    getAccessToken(): Promise<any>;
}
import OauthClient = require("./OAuthClient");
