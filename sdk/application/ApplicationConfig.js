const { FDKInvalidCredentialError } = require("../common/FDKError");
const { Logger, setLoggerLevel } = require("../common/Logger");

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
class ApplicationConfig {
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
  constructor(_conf, options) {
    this.applicationID = _conf.applicationID || "";
    this.applicationToken = _conf.applicationToken || "";
    this.options = {
      ...{ strictResponseCheck: false },
      ...options,
    };
    this.domain = _conf.domain || "https://api.fynd.com";
    this.logLevel = _conf.logLevel || "ERROR";
    this.setLogLevel(this.logLevel);
    this.extraHeaders = [];
    this.locationDetails = _conf.locationDetails;
    this.currencyCode = _conf.currencyCode || "INR";
    this.validate();
  }

  /**
   * Sets the log level for the application.
   *
   * @param {logLevelEnum} level - The log level to set.
   */
  setLogLevel(level) {
    setLoggerLevel(level.toUpperCase());
    this.logLevel = level.toUpperCase();
  }

  /**
   * Sets the cookie for the application.
   *
   * @param {string} cookie - The cookie to set, This cookie will be included
   *   in the headers of every subsequent request.
   */
  setCookie(cookie) {
    this.cookie = cookie;
  }

  /**
   * Validates the application configuration.
   *
   * @throws {FDKInvalidCredentialError} When the credentials are invalid or missing.
   */
  validate() {
    if (!this.applicationID) {
      Logger({ level: "ERROR", message: "No Application ID Present" });
      throw new FDKInvalidCredentialError("No Application ID Present");
    }
    if (!this.applicationToken) {
      Logger({ level: "ERROR", message: "No Application Token Present" });
      throw new FDKInvalidCredentialError("No Application Token Present");
    }
    if (this.applicationToken.length < 5) {
      Logger({ level: "ERROR", message: "Invalid Application Token" });
      throw new FDKInvalidCredentialError("Invalid Application Token");
    }
    if (typeof this.options.strictResponseCheck !== "boolean") {
      Logger({ level: "ERROR", message: "Invalid Application Token" });
      Logger({
        level: "ERROR",
        message:
          "Invalid Value for options.strictResponseCheck, provide boolean value",
      });
      throw new FDKInvalidCredentialError(
        "Invalid Value for options.strictResponseCheck, provide boolean value"
      );
    }
  }
}

module.exports = ApplicationConfig;
