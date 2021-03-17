const {
  Lead,
  Theme,
  User,
  Content,
  Communication,
  Payment,
  Order,
  Share,
  Cart,
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
    this.payment = new Payment(config, applicationId);
    this.order = new Order(config, applicationId);
    this.share = new Share(config, applicationId);
    this.cart = new Cart(config, applicationId);
  }
}

module.exports = Application;
