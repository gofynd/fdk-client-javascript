const {
  Lead,
  Theme,
  User,
  Content,
  CompanyProfile,
  Inventory,
} = require("./PlatformModels");

class PlatformClient {
  constructor(config) {
    this.lead = new Lead(config);
    this.theme = new Theme(config);
    this.user = new User(config);
    this.content = new Content(config);
    this.companyProfile = new CompanyProfile(config);
    this.inventory = new Inventory(config);
  }
}

module.exports = PlatformClient;
