export = PartnerConfig;
declare class PartnerConfig {
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
    organizationId: any;
    domain: string;
    apiKey: string;
    apiSecret: string;
    scope: any;
    useAutoRenewTimer: boolean;
    oauthClient: OauthClient;
    logLevel: any;
    extraHeaders: any[];
    setLogLevel(level: any): void;
    getAccessToken(): Promise<any>;
}
import OauthClient = require("./OAuthClient");
