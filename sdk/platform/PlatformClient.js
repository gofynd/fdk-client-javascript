const {
  Lead,
  Payment,
  Order,
  CompanyProfile,
  Inventory,
} = require("./PlatformModels");
const Application = require("./PlatformApplicationClient");

class PlatformClient {
  constructor(config) {
    this.config = config;
    this.lead = new Lead(config);
    this.payment = new Payment(config);
    this.order = new Order(config);
    this.companyProfile = new CompanyProfile(config);
    this.inventory = new Inventory(config);
  }
  application(applicationId) {
    return new Application(applicationId, this.config);
  }
}

module.exports = PlatformClient;
