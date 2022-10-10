const { LocationValidator } = require("./ApplicationModels");

const Catalog = require("./client/CatalogApplicationClient");

const Cart = require("./client/CartApplicationClient");

const Common = require("./client/CommonApplicationClient");

const Lead = require("./client/LeadApplicationClient");

const Theme = require("./client/ThemeApplicationClient");

const User = require("./client/UserApplicationClient");

const Content = require("./client/ContentApplicationClient");

const Communication = require("./client/CommunicationApplicationClient");

const Share = require("./client/ShareApplicationClient");

const FileStorage = require("./client/FileStorageApplicationClient");

const Configuration = require("./client/ConfigurationApplicationClient");

const Payment = require("./client/PaymentApplicationClient");

const Order = require("./client/OrderApplicationClient");

const Rewards = require("./client/RewardsApplicationClient");

const PosCart = require("./client/PosCartApplicationClient");

const Logistic = require("./client/LogisticApplicationClient");

const DocumentEngine = require("./client/DocumentEngineApplicationClient");

const { FDKClientValidationError } = require("../common/FDKError");

class ApplicationClient {
  constructor(config) {
    this.config = config;
    this.catalog = new Catalog(config);
    this.cart = new Cart(config);
    this.common = new Common(config);
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
    this.posCart = new PosCart(config);
    this.logistic = new Logistic(config);
    this.documentEngine = new DocumentEngine(config);
  }

  setCookie(cookie) {
    this.config.cookie = cookie;
  }

  setLocationDetails(locationDetails) {
    const {
      error,
    } = LocationValidator.validateLocationObj().validate(locationDetails, {
      abortEarly: false,
      allowUnknown: true,
    });
    if (error) {
      throw new FDKClientValidationError(error);
    }
    this.config.locationDetails = locationDetails;
  }

  setExtraHeaders(header) {
    if (typeof header === "object") {
      this.config.extraHeaders.push(header);
    } else {
      throw new FDKClientValidationError("Context value should be an object");
    }
  }
}

module.exports = ApplicationClient;
