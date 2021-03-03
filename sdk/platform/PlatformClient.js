const { Lead } = require("./PlatformModels");

class PlatformClient {
  constructor(config) {
    this.lead = new Lead(config);
  }
}

module.exports = PlatformClient;
