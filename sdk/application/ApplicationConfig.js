class CredentialValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "CredentialValidationError"; // (2)
  }
}

const MongoIDRegExp = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;

const DEFAULT_DOMAIN = "https://api.fynd.com";

class ApplicationConfig {
  /**
   * @param  {object} _conf
   * @param  {object} _opts
   */
  constructor(_conf, _opts) {
    this.applicationID = _conf.applicationID || "";
    this.applicationToken = _conf.applicationToken || "";
    this.opts = _opts || {};
    this.domain = _conf.domain || DEFAULT_DOMAIN;
    this.validate();
  }

  validate() {
    if (!this.applicationID) {
      throw new CredentialValidationError("No Application ID Present");
    }
    if (!this.applicationToken) {
      throw new CredentialValidationError("No Application Token Present");
    }
    if (!MongoIDRegExp.test(this.applicationID)) {
      throw new CredentialValidationError(
        "Invalid Application ID. It should be Mongo ID"
      );
    }
    if (this.applicationToken.length < 5) {
      throw new CredentialValidationError("Invalid Application Token");
    }
  }
}

module.exports = ApplicationConfig;
