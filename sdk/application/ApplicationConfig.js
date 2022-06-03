const {
  FDKInvalidCredentialError,
  FDKClientValidationError,
} = require("../common/FDKError");
const { LocationValidator } = require("../application/ApplicationModels");
class ApplicationConfig {
  /**
   * @param {object} _conf
   * @param {object} [_opts]
   */
  constructor(_conf, _opts) {
    this.applicationID = _conf.applicationID || "";
    this.applicationToken = _conf.applicationToken || "";
    this.opts = _opts || {};
    this.domain = _conf.domain || "https://api.fynd.com";
    this.extraHeaders = [];
    this.locationDetails = _conf.locationDetails;
    this.validate();
  }

  setCookie(cookie) {
    this.cookie = cookie;
  }

  validate() {
    const { error } = LocationValidator.validateLocationObj().validate(
      this.locationDetails,
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      throw new FDKClientValidationError(error);
    }
    if (!this.applicationID) {
      throw new FDKInvalidCredentialError("No Application ID Present");
    }
    if (!this.applicationToken) {
      throw new FDKInvalidCredentialError("No Application Token Present");
    }
    if (this.applicationToken.length < 5) {
      throw new FDKInvalidCredentialError("Invalid Application Token");
    }
  }
}

module.exports = ApplicationConfig;
