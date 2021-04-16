class CredentialValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "CredentialValidationError"; // (2)
  }
}
class ApplicationConfig {
  /**
   * @param  {object} _conf
   * @param  {object} [_opts]
   */
  constructor(_conf, _opts) {
    this.applicationID = _conf.applicationID || "";
    this.applicationToken = _conf.applicationToken || "";
    this.opts = _opts || {};
    this.domain = _conf.domain || "https://api.fyndx0.de";
    this.validate();
  }

  validate() {
    if (!this.applicationID) {
      throw new CredentialValidationError("No Application ID Present");
    }
    if (!this.applicationToken) {
      throw new CredentialValidationError("No Application Token Present");
    }
    if (this.applicationToken.length < 5) {
      throw new CredentialValidationError("Invalid Application Token");
    }
  }
}

module.exports = ApplicationConfig;
