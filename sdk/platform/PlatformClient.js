const { Lead, Payment } = require("./PlatformModels");
const Application = require("./PlatformApplicationClient");

class PlatformClient {
  constructor(config) {
    this.config = config;
    this.lead = new Lead(config);
    this.payment = new Payment(config);
  }
  application(applicationId) {
    return new Application(applicationId, this.config);
  }
}

module.exports = PlatformClient;
