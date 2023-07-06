const { LocationValidator } = require("./ApplicationModels");

const Catalog = require("./Catalog/CatalogApplicationClient");

const Cart = require("./Cart/CartApplicationClient");

const Common = require("./Common/CommonApplicationClient");

const Lead = require("./Lead/LeadApplicationClient");

const Theme = require("./Theme/ThemeApplicationClient");

const User = require("./User/UserApplicationClient");

const Content = require("./Content/ContentApplicationClient");

const Communication = require("./Communication/CommunicationApplicationClient");

const Share = require("./Share/ShareApplicationClient");

const FileStorage = require("./FileStorage/FileStorageApplicationClient");

const Configuration = require("./Configuration/ConfigurationApplicationClient");

const Payment = require("./Payment/PaymentApplicationClient");

const Order = require("./Order/OrderApplicationClient");

const Rewards = require("./Rewards/RewardsApplicationClient");

const PosCart = require("./PosCart/PosCartApplicationClient");

const Logistic = require("./Logistic/LogisticApplicationClient");

const { FDKClientValidationError } = require("../common/FDKError");

/**
 * Represents the client for the application.
 *
 * @class
 */
class ApplicationClient {
  /** @param {import("./ApplicationConfig")} config - The application configuration. */
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
  }

  /**
   * Sets the cookie for the application.
   *
   * @param {string} cookie - The cookie to set, This cookie will be included
   *   in the headers of every subsequent request.
   */
  setCookie(cookie) {
    this.config.cookie = cookie;
  }

  /**
   * Sets the location details for the application.
   *
   * @param {import("./ApplicationModels").LocationObject} locationDetails -
   *   The location details to set.
   * @throws {FDKClientValidationError} When the location details validation fails.
   */
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

  /**
   * Sets the currency code in ApplicationConfig.
   *
   * @param {string} currencyCode - The currency code to set.
   * @throws {FDKClientValidationError} When the provided currency code is not a string.
   */
  setCurrencyCode(currencyCode) {
    if (typeof currencyCode !== "string") {
      throw new FDKClientValidationError("Currency code should be string only");
    }
    this.config.currencyCode = currencyCode;
  }

  /**
   * Sets the extra headers for the application.
   *
   * @param {object} header - The header object to set.
   * @throws {FDKClientValidationError} When the provided header is not an object.
   */
  setExtraHeaders(header) {
    if (typeof header === "object") {
      this.config.extraHeaders.push(header);
    } else {
      throw new FDKClientValidationError("Context value should be an object");
    }
  }
}

module.exports = ApplicationClient;
