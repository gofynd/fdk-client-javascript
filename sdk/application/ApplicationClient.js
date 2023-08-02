const { LocationValidator } = require("./ApplicationModels");

const Cart = require("./Cart/CartApplicationClient");

const Catalog = require("./Catalog/CatalogApplicationClient");

const Common = require("./Common/CommonApplicationClient");

const Communication = require("./Communication/CommunicationApplicationClient");

const Configuration = require("./Configuration/ConfigurationApplicationClient");

const Content = require("./Content/ContentApplicationClient");

const FileStorage = require("./FileStorage/FileStorageApplicationClient");

const Lead = require("./Lead/LeadApplicationClient");

const Logistic = require("./Logistic/LogisticApplicationClient");

const Order = require("./Order/OrderApplicationClient");

const Payment = require("./Payment/PaymentApplicationClient");

const PosCart = require("./PosCart/PosCartApplicationClient");

const Rewards = require("./Rewards/RewardsApplicationClient");

const Share = require("./Share/ShareApplicationClient");

const Theme = require("./Theme/ThemeApplicationClient");

const User = require("./User/UserApplicationClient");

const { FDKClientValidationError } = require("../common/FDKError");

class ApplicationClient {
  constructor(config) {
    this.config = config;

    this.cart = new Cart(config);

    this.catalog = new Catalog(config);

    this.common = new Common(config);

    this.communication = new Communication(config);

    this.configuration = new Configuration(config);

    this.content = new Content(config);

    this.fileStorage = new FileStorage(config);

    this.lead = new Lead(config);

    this.logistic = new Logistic(config);

    this.order = new Order(config);

    this.payment = new Payment(config);

    this.posCart = new PosCart(config);

    this.rewards = new Rewards(config);

    this.share = new Share(config);

    this.theme = new Theme(config);

    this.user = new User(config);
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
    this.config.locationDetails = {
      ...this.config.locationDetails,
      ...locationDetails,
    };
  }

  setCurrencyCode(currencyCode) {
    if (typeof currencyCode !== "string") {
      throw new FDKClientValidationError("Currency code should be string only");
    }
    this.config.currencyCode = currencyCode;
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
