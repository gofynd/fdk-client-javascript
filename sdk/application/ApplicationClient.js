const {
  Catalog,
  Cart,
  Lead,
  Theme,
  Content,
  Communication,
  Share,
  FileStorage,
  Payment,
  Order,
  Rewards,
  Feedback,
  PosCart,
} = require("./Models");

class ApplicationClient {
  constructor(config) {
    this.catalog = new Catalog(config);
    this.cart = new Cart(config);
    this.lead = new Lead(config);
    this.theme = new Theme(config);
    this.content = new Content(config);
    this.communication = new Communication(config);
    this.share = new Share(config);
    this.fileStorage = new FileStorage(config);
    this.payment = new Payment(config);
    this.order = new Order(config);
    this.rewards = new Rewards(config);
    this.feedback = new Feedback(config);
    this.posCart = new PosCart(config);
  }
}

module.exports = ApplicationClient;
