const Cart = require("./Cart/CartPlatformApplicationClient");

const Catalog = require("./Catalog/CatalogPlatformApplicationClient");

const Communication = require("./Communication/CommunicationPlatformApplicationClient");

const Configuration = require("./Configuration/ConfigurationPlatformApplicationClient");

const Content = require("./Content/ContentPlatformApplicationClient");

const FileStorage = require("./FileStorage/FileStoragePlatformApplicationClient");

const Lead = require("./Lead/LeadPlatformApplicationClient");

const Order = require("./Order/OrderPlatformApplicationClient");

const Partner = require("./Partner/PartnerPlatformApplicationClient");

const Payment = require("./Payment/PaymentPlatformApplicationClient");

const Rewards = require("./Rewards/RewardsPlatformApplicationClient");

const Serviceability = require("./Serviceability/ServiceabilityPlatformApplicationClient");

const Share = require("./Share/SharePlatformApplicationClient");

const Theme = require("./Theme/ThemePlatformApplicationClient");

const User = require("./User/UserPlatformApplicationClient");

const { FDKClientValidationError } = require("../common/FDKError");

/**
 * Represents the client for a platform's application level APIs.
 *
 * @class
 */
class PlatformApplicationClient {
  /**
   * Creates an instance of PlatformApplicationClient.
   *
   * @param {string} applicationId - The ID of the application.
   * @param {import("./PlatformConfig")} config - The platform configuration.
   */
  constructor(applicationId, config) {
    this.config = config;
    this.companyId = config.companyId;
    this.applicationId = applicationId;

    this.cart = new Cart(config, applicationId);

    this.catalog = new Catalog(config, applicationId);

    this.communication = new Communication(config, applicationId);

    this.configuration = new Configuration(config, applicationId);

    this.content = new Content(config, applicationId);

    this.fileStorage = new FileStorage(config, applicationId);

    this.lead = new Lead(config, applicationId);

    this.order = new Order(config, applicationId);

    this.partner = new Partner(config, applicationId);

    this.payment = new Payment(config, applicationId);

    this.rewards = new Rewards(config, applicationId);

    this.serviceability = new Serviceability(config, applicationId);

    this.share = new Share(config, applicationId);

    this.theme = new Theme(config, applicationId);

    this.user = new User(config, applicationId);
  }

  /**
   * Sets the extra headers for the platform application.
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

module.exports = PlatformApplicationClient;
