class FDKError extends Error {
  /**
   * @param  {string} message
   * @param  {string} stackTrace
   * @param  {string} [status]
   * @param  {string} [code]
   */
  constructor(message, stackTrace, status = null, code = null) {
    super(message);
    this.stackTrace = stackTrace;
    this.status = status;
    this.code = code;
  }
}

module.exports = FDKError;
