const {
  Lead,
  Theme,
  User,
  Content,
  Communication,
  CompanyProfile,
  Inventory,
} = require("./PlatformModels");
const Application = require("./PlatformApplicationClient");

class PlatformClient {
  constructor(config) {
    this.config = config;
    this.lead = new Lead(config);
    this.theme = new Theme(config);
    this.user = new User(config);
    this.content = new Content(config);
    this.communication = new Communication(config);
    this.companyProfile = new CompanyProfile(config);
    this.inventory = new Inventory(config);
  }
  application(applicationId) {
    return new Application(applicationId, this.config);
  }
}

module.exports = PlatformClient;
