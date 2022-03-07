class FDKServerResponseError extends Error {
  /**
   * @param {string} message
   * @param {string} stackTrace
   * @param {string} [status]
   * @param {string} [code]
   */
  constructor(message, stackTrace, status = null, code = null, details = null) {
    super(message);
    this.name = "FDKServerResponseError";
    this.stackTrace = stackTrace;
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

class FDKClientValidationError extends Error {
  constructor(errObj) {
    super(errObj.message);
    this.name = "FDKClientValidationError";
    this.details = errObj.details;
  }
}

class FDKInvalidCredentialError extends Error {
  constructor(message) {
    super(message);
    this.name = "FDKInvalidCredentialError";
  }
}
class FDKTokenIssueError extends Error {
  constructor(message) {
    super(message);
    this.name = "FDKTokenIssueError";
  }
}
class FDKOAuthCodeError extends Error {
  constructor(message) {
    super(message);
    this.name = "FDKOAuthCodeError";
  }
}

module.exports = {
  FDKServerResponseError,
  FDKClientValidationError,
  FDKInvalidCredentialError,
  FDKTokenIssueError,
  FDKOAuthCodeError,
};
