const {
  Lead,
  Billing,
  Payment,
  Order,
  CompanyProfile,
  Assets,
  Inventory,
} = require("./PlatformModels");
const Application = require("./PlatformApplicationClient");

class PlatformClient {
  constructor(config) {
    this.config = config;
    this.lead = new Lead(config);
    this.billing = new Billing(config);
    this.payment = new Payment(config);
    this.order = new Order(config);
    this.companyProfile = new CompanyProfile(config);
    this.assets = new Assets(config);
    this.inventory = new Inventory(config);
  }
  application(applicationId) {
    return new Application(applicationId, this.config);
  }
}

module.exports = PlatformClient;
