const {
  Lead,
  Theme,
  User,
  Content,
  Communication,
  CompanyProfile,
  Inventory,
} = require("./PlatformModels");

class PlatformClient {
  constructor(config) {
    this.lead = new Lead(config);
    this.theme = new Theme(config);
    this.user = new User(config);
    this.content = new Content(config);
    this.communication = new Communication(config);
    this.companyProfile = new CompanyProfile(config);
    this.inventory = new Inventory(config);
  }
}

module.exports = PlatformClient;
