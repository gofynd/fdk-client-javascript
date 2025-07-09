const Cart = require("./Cart/CartApplicationClient");
const Catalog = require("./Catalog/CatalogApplicationClient");
const Common = require("./Common/CommonApplicationClient");
const Communication = require("./Communication/CommunicationApplicationClient");
const Configuration = require("./Configuration/ConfigurationApplicationClient");
const Content = require("./Content/ContentApplicationClient");
const FileStorage = require("./FileStorage/FileStorageApplicationClient");
const Finance = require("./Finance/FinanceApplicationClient");
const Lead = require("./Lead/LeadApplicationClient");
const Logistic = require("./Logistic/LogisticApplicationClient");
const Order = require("./Order/OrderApplicationClient");
const Payment = require("./Payment/PaymentApplicationClient");
const Rewards = require("./Rewards/RewardsApplicationClient");
const Share = require("./Share/ShareApplicationClient");
const Theme = require("./Theme/ThemeApplicationClient");
const User = require("./User/UserApplicationClient");
const Webhook = require("./Webhook/WebhookApplicationClient");
const { FDKClientValidationError } = require("../common/FDKError");
const { Logger } = require("../common/Logger");
const { convertStringToBase64 } = require("../common/utils");
const { execute } = require("./ApplicationAPIClient");
const ApplicationConfig = require("./ApplicationConfig");

/**
 * Represents the client for the application.
 *
 * @class
 */
class ApplicationClient {
  /** @param {import("./ApplicationConfig")} config - The application configuration. */
  constructor(config, options) {
    if (config instanceof ApplicationConfig) {
      this.config = config;
    } else {
      let applicationConfig = new ApplicationConfig(config, options);
      this.config = applicationConfig;
    }
    this.cart = new Cart(this.config);
    this.catalog = new Catalog(this.config);
    this.common = new Common(this.config);
    this.communication = new Communication(this.config);
    this.configuration = new Configuration(this.config);
    this.content = new Content(this.config);
    this.fileStorage = new FileStorage(this.config);
    this.finance = new Finance(this.config);
    this.lead = new Lead(this.config);
    this.logistic = new Logistic(this.config);
    this.order = new Order(this.config);
    this.payment = new Payment(this.config);
    this.rewards = new Rewards(this.config);
    this.share = new Share(this.config);
    this.theme = new Theme(this.config);
    this.user = new User(this.config);
    this.webhook = new Webhook(this.config);
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
   * @param {import("./ApplicationConfig").LocationObject} locationDetails -
   *   The location details to set.
   * @param {boolean} [isNew=false] - If passed `true`, it will flush all the
   *   old data and assign new one. if passed `false` it will update only new
   *   passed values and keep old values for other data. Default is `false`
   */
  setLocationDetails(locationDetails, isNew = false) {
    if (isNew === true) {
      this.config.locationDetails = locationDetails;
    } else {
      this.config.locationDetails = {
        ...this.config.locationDetails,
        ...locationDetails,
      };
    }
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

  async request({
    method,
    url,
    query,
    body,
    headers,
    responseHeaders = false,
  }) {
    return await execute(this.config, method, url, query, body, headers, {
      responseHeaders,
    });
  }
}

module.exports = ApplicationClient;
