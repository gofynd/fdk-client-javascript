const {
  Catalog,
  Cart,
  Lead,
  Theme,
  User,
  Content,
  Communication,
  Share,
  FileStorage,
  Configuration,
  Payment,
  Order,
  Rewards,
  Feedback,
  PosCart,
  Logistic,
} = require("./ApplicationModels");

class ApplicationClient {
  constructor(config) {
    this.catalog = new Catalog(config);
    this.cart = new Cart(config);
    this.lead = new Lead(config);
    this.theme = new Theme(config);
    this.user = new User(config);
    this.content = new Content(config);
    this.communication = new Communication(config);
    this.share = new Share(config);
    this.fileStorage = new FileStorage(config);
    this.configuration = new Configuration(config);
    this.payment = new Payment(config);
    this.order = new Order(config);
    this.rewards = new Rewards(config);
    this.feedback = new Feedback(config);
    this.posCart = new PosCart(config);
    this.logistic = new Logistic(config);
  }
}

module.exports = ApplicationClient;
