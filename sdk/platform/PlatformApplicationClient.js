const {
  Lead,
  Theme,
  User,
  Content,
  Communication,
  CompanyProfile,
  Inventory,
} = require("./PlatformApplicationModels");

class Application {
  constructor(applicationId, config) {
    this.config = config;
    this.companyId = config.companyId;
    this.applicationId = applicationId;

    this.lead = new Lead(config, applicationId);
    this.theme = new Theme(config, applicationId);
    this.user = new User(config, applicationId);
    this.content = new Content(config, applicationId);
    this.communication = new Communication(config, applicationId);
    this.companyProfile = new CompanyProfile(config, applicationId);
    this.inventory = new Inventory(config, applicationId);
  }
}

module.exports = Application;
