const {
  Lead,
  Theme,
  User,
  Payment,
  Order,
  Assets,
  Share,
  Analytics,
} = require("./PlatformApplicationModels");

class Application {
  constructor(applicationId, config) {
    this.config = config;
    this.companyId = config.companyId;
    this.applicationId = applicationId;

    this.lead = new Lead(config, applicationId);
    this.theme = new Theme(config, applicationId);
    this.user = new User(config, applicationId);
    this.payment = new Payment(config, applicationId);
    this.order = new Order(config, applicationId);
    this.assets = new Assets(config, applicationId);
    this.share = new Share(config, applicationId);
    this.analytics = new Analytics(config, applicationId);
  }
}

module.exports = Application;
