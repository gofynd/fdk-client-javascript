export = PlatformConfig;
declare class PlatformConfig {
    /**
     * @param  {Object} config
     * @param  {string} config.apiKey
     * @param  {string} config.company
     * @param  {string} config.baseUrl
     */
    constructor(config: {
        apiKey: string;
        company: string;
        baseUrl: string;
    });
    apiKey: string;
    apiSecret: any;
    company: string;
    baseUrl: string;
    oauthClient: OauthClient;
    getAccessToken(): Promise<any>;
}
import OauthClient = require("./OAuthClient");
