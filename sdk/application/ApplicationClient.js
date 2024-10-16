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

/**
 * Represents the client for the application.
 *
 * @class
 */
class ApplicationClient {
  /** @param {import("./ApplicationConfig")} config - The application configuration. */
  constructor(config) {
    this.config = config;
    this.cart = new Cart(config);
    this.catalog = new Catalog(config);
    this.common = new Common(config);
    this.communication = new Communication(config);
    this.configuration = new Configuration(config);
    this.content = new Content(config);
    this.fileStorage = new FileStorage(config);
    this.finance = new Finance(config);
    this.lead = new Lead(config);
    this.logistic = new Logistic(config);
    this.order = new Order(config);
    this.payment = new Payment(config);
    this.rewards = new Rewards(config);
    this.share = new Share(config);
    this.theme = new Theme(config);
    this.user = new User(config);
    this.webhook = new Webhook(config);
    if (
      typeof window != "undefined" &&
      config.options &&
      config.options.enable_clickstream
    ) {
      const Clickstream = require("@gofynd/flick");
      Logger({
        level: "DEBUG",
        message: `initializing clickstream with base url ${config.domain}`,
      });
      Clickstream.initialize(
        config.domain,
        convertStringToBase64(
          config.applicationID + ":" + config.applicationToken
        )
      );
      require("../common/Clickstream");
    }
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
