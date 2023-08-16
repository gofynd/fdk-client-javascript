const {
  FDKInvalidCredentialError,
  FDKClientValidationError,
} = require("../common/FDKError");
const { Logger, setLoggerLevel } = require("../common/Logger");
const { LocationValidator } = require("./ApplicationModels");

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
   * @param {import("./ApplicationModels").LocationObject} [_conf.locationDetails]
   *   - The location details.
   *
   * @param {string} [_conf.currencyCode='INR'] - The currency code. Default is `'INR'`
   * @param {object} [_opts] - Additional options.
   */
  constructor(_conf, _opts) {
    this.applicationID = _conf.applicationID || "";
    this.applicationToken = _conf.applicationToken || "";
    this.opts = _opts || {};
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
   * @throws {FDKClientValidationError} When the locationDetails validation fails.
   * @throws {FDKInvalidCredentialError} When the credentials are invalid or missing.
   */
  validate() {
    const { error } = LocationValidator.validateLocationObj().validate(
      this.locationDetails,
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      throw new FDKClientValidationError(error);
    }
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
  }
}

module.exports = ApplicationConfig;
