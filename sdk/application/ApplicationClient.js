const {
  Catalog,
  Cart,
  FileStorage,
  Feedback,
  PosCart,
} = require("./ApplicationModels");

class ApplicationClient {
  constructor(config) {
    this.catalog = new Catalog(config);
    this.cart = new Cart(config);
    this.fileStorage = new FileStorage(config);
    this.feedback = new Feedback(config);
    this.posCart = new PosCart(config);
  }
}

module.exports = ApplicationClient;
