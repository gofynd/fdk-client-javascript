const {
  Payment,
  Catalog,
  CompanyProfile,
  Assets,
} = require("./PlatformModels");
const Application = require("./PlatformApplicationClient");

class PlatformClient {
  constructor(config) {
    this.config = config;
    this.payment = new Payment(config);
    this.catalog = new Catalog(config);
    this.companyProfile = new CompanyProfile(config);
    this.assets = new Assets(config);
  }
  application(applicationId) {
    return new Application(applicationId, this.config);
  }
}

module.exports = PlatformClient;
