export = ApplicationConfig;
/**
 * Represents the configuration for an application.
 *
 * @class
 */
declare class ApplicationConfig {
    /** @typedef {"TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR"} logLevelEnum */
    /**
     * @param {object} _conf - The application configuration.
     * @param {string} _conf.applicationID - The ID of the application.
     * @param {string} [_conf.applicationToken] - The token for the application.
     * @param {string} [_conf.domain='https://api.fynd.com'] - The domain for
     *   API. \n Write full domain. Default is `'https://api.fynd.com'`
     * @param {logLevelEnum} [_conf.logLevel='ERROR'] - The log level. Available
     *   options: TRACE, DEBUG, INFO, WARN, ERROR. Default is `'ERROR'`
     * @param {import("./ApplicationModels").LocationObject} [_conf.locationDetails]
     *   - The location details.
     *
     * @param {string} [_conf.currencyCode='INR'] - The currency code. Default is `'INR'`
     * @param {object} [_opts] - Additional options.
     */
    constructor(_conf: {
        applicationID: string;
        applicationToken?: string;
        domain?: string;
        logLevel?: "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR";
        locationDetails?: import("./ApplicationModels").LocationObject;
        currencyCode?: string;
    }, _opts?: object);
    applicationID: string;
    applicationToken: string;
    opts: any;
    domain: string;
    logLevel: "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR";
    extraHeaders: any[];
    locationDetails: import("./ApplicationModels").LocationObject;
    currencyCode: string;
    /**
     * Sets the log level for the application.
     *
     * @param {logLevelEnum} level - The log level to set.
     */
    setLogLevel(level: "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR"): void;
    /**
     * Sets the cookie for the application.
     *
     * @param {string} cookie - The cookie to set, This cookie will be included
     *   in the headers of every subsequent request.
     */
    setCookie(cookie: string): void;
    cookie: string;
    /**
     * Validates the application configuration.
     *
     * @throws {FDKClientValidationError} When the locationDetails validation fails.
     * @throws {FDKInvalidCredentialError} When the credentials are invalid or missing.
     */
    validate(): void;
}
