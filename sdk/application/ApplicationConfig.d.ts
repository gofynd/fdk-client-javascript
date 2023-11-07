export = ApplicationConfig;
/**
 * Represents the location object for validation.
 *
 * @typedef {Object} LocationObject
 * @property {string} pincode - The pincode of the location.
 * @property {string} country - The country of the location.
 * @property {string} country_iso_code - The ISO code of the country.
 * @property {string} city - The city of the location.
 * @property {Object} location - The geographical coordinates of the location.
 * @property {string} location.longitude - The longitude of the location.
 * @property {string} location.latitude - The latitude of the location.
 */
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
     * @param {LocationObject} [_conf.locationDetails] - The location details.
     * @param {string} [_conf.currencyCode='INR'] - The currency code. Default is `'INR'`
     * @param {object} [options] - Additional options.
     * @param {boolean} [options.strictResponseCheck=false] - Strict check for
     *   response schema validation. Passing this `true` will check response
     *   against response schema and throw FDKResponseValidationError if it
     *   doesn't match. Default is `false`
     */
    constructor(_conf: {
        applicationID: string;
        applicationToken?: string;
        domain?: string;
        logLevel?: "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR";
        locationDetails?: LocationObject;
        currencyCode?: string;
    }, options?: {
        strictResponseCheck?: boolean;
    });
    applicationID: string;
    applicationToken: string;
    options: {
        strictResponseCheck: boolean;
    };
    domain: string;
    logLevel: "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR";
    extraHeaders: any[];
    locationDetails: LocationObject;
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
     * @throws {FDKInvalidCredentialError} When the credentials are invalid or missing.
     */
    validate(): void;
}
declare namespace ApplicationConfig {
    export { LocationObject };
}
/**
 * Represents the location object for validation.
 */
type LocationObject = {
    /**
     * - The pincode of the location.
     */
    pincode: string;
    /**
     * - The country of the location.
     */
    country: string;
    /**
     * - The ISO code of the country.
     */
    country_iso_code: string;
    /**
     * - The city of the location.
     */
    city: string;
    /**
     * - The geographical coordinates of the location.
     */
    location: {
        longitude: string;
        latitude: string;
    };
};
