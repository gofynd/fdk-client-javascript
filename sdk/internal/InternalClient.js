const FileStorage = require("./FileStorage/FileStorageInternalClient");

const { FDKClientValidationError } = require("../common/FDKError");

class InternalClient {
  constructor(config) {
    this.config = config;

    this.fileStorage = new FileStorage(config);
  }

  setExtraHeaders(header) {
    if (typeof header === "object") {
      this.config.extraHeaders.push(header);
    } else {
      throw new FDKClientValidationError("Context value should be an object");
    }
  }
}

module.exports = InternalClient;
