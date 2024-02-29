export = PartnerConfig;
/**
 * Represents the configuration for the partner.
 *
 * @class
 */
declare class PartnerConfig {
    /** @typedef {"TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR"} logLevelEnum */
    /**
     * Creates an instance of PartnerConfig.
     *
     * @param {Object} config - The partner configuration.
     * @param {string} config.organizationId - The ID of the organization.
     * @param {string} [config.domain='https://api.fynd.com'] - The domain for
     *   API. Write the full domain. Default is `'https://api.fynd.com'`
     * @param {string} config.apiKey - The API key for authentication.
     * @param {string} config.apiSecret - The API secret for authentication.
     * @param {string} [config.scope] - The scope of the partner.
     * @param {boolean} [config.useAutoRenewTimer=true] - Flag indicating whether
     *   to use the auto-renew timer. Default is `true`
     * @param {logLevelEnum} [config.logLevel='ERROR'] - The log level. Available
     *   options: TRACE, DEBUG, INFO, WARN, ERROR. Default is `'ERROR'`
     * @param {object} [options] - Additional options.
     * @param {boolean} [options.strictResponseCheck=false] - Strict check for
     *   response schema validation. Passing this `true` will check response
     *   against response schema and throw FDKResponseValidationError if it
     *   doesn't match. Default is `false`
     */
    constructor(config: {
        organizationId: string;
        domain?: string;
        apiKey: string;
        apiSecret: string;
        scope?: string;
        useAutoRenewTimer?: boolean;
        logLevel?: "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR";
    }, options?: {
        strictResponseCheck?: boolean;
    });
    organizationId: string;
    domain: string;
    apiKey: string;
    apiSecret: string;
    scope: string;
    useAutoRenewTimer: boolean;
    oauthClient: OauthClient;
    logLevel: "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR";
    extraHeaders: any[];
    options: {
        strictResponseCheck: boolean;
    };
    /**
     * Sets the log level for the partner.
     *
     * @param {logLevelEnum} level - The log level to set.
     */
    setLogLevel(level: "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR"): void;
    /**
     * Retrieves the access token from the OAuth client.
     *
     * @async
     * @returns {Promise<string>} - The access token.
     */
    getAccessToken(): Promise<string>;
}
import OauthClient = require("./OAuthClient");
