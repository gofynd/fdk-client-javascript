export = PublicConfig;
/**
 * Represents the configuration for the public APIs.
 *
 * @class
 */
declare class PublicConfig {
    /**
     * Creates an instance of PublicConfig.
     *
     * @param {object} _conf - The configuration for the public APIs.
     * @param {string} [_conf.domain='https://api.fynd.com'] - The domain for
     *   API. Write the full domain. Default is `'https://api.fynd.com'`
     * @param {string} [_conf.userAgent=''] - The user agent for the API
     *   requests. Default is `''`
     * @param {string} [_conf.language] - The language for localization.
     * @param {string} [_conf.currency] - The currency for pricing and financial
     *   calculations.
     */
    constructor(_conf: {
        domain?: string;
        userAgent?: string;
        language?: string;
        currency?: string;
    }, _opts: any);
    domain: string;
    userAgent: string;
    language: string;
    currency: string;
    extraHeaders: any[];
}
