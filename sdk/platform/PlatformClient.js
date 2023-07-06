const Common = require("./Common/CommonPlatformClient");

const Lead = require("./Lead/LeadPlatformClient");

const Theme = require("./Theme/ThemePlatformClient");

const Billing = require("./Billing/BillingPlatformClient");

const Communication = require("./Communication/CommunicationPlatformClient");

const Payment = require("./Payment/PaymentPlatformClient");

const Order = require("./Order/OrderPlatformClient");

const Catalog = require("./Catalog/CatalogPlatformClient");

const CompanyProfile = require("./CompanyProfile/CompanyProfilePlatformClient");

const FileStorage = require("./FileStorage/FileStoragePlatformClient");

const Configuration = require("./Configuration/ConfigurationPlatformClient");

const Discount = require("./Discount/DiscountPlatformClient");

const Webhook = require("./Webhook/WebhookPlatformClient");

const AuditTrail = require("./AuditTrail/AuditTrailPlatformClient");

const Serviceability = require("./Serviceability/ServiceabilityPlatformClient");

const Finance = require("./Finance/FinancePlatformClient");

const PlatformApplicationClient = require("./PlatformApplicationClient");
const { FDKClientValidationError } = require("../common/FDKError");

/**
 * Represents the client for the platform.
 *
 * @class
 */
class PlatformClient {
  /**
   * Creates an instance of PlatformClient.
   *
   * @param {import("./PlatformConfig")} config - The application configuration.
   */
  constructor(config) {
    this.config = config;

    this.common = new Common(config);

    this.lead = new Lead(config);

    this.theme = new Theme(config);

    this.billing = new Billing(config);

    this.communication = new Communication(config);

    this.payment = new Payment(config);

    this.order = new Order(config);

    this.catalog = new Catalog(config);

    this.companyProfile = new CompanyProfile(config);

    this.fileStorage = new FileStorage(config);

    this.configuration = new Configuration(config);

    this.discount = new Discount(config);

    this.webhook = new Webhook(config);

    this.auditTrail = new AuditTrail(config);

    this.serviceability = new Serviceability(config);

    this.finance = new Finance(config);
  }

  /**
   * Creates an instance of PlatformApplicationClient to interact with a
   * platform's application level api.
   *
   * @param {string} applicationId - The ID of the application.
   * @returns {PlatformApplicationClient} - The PlatformApplicationClient
   *   instance for the specified application.
   * @throws {Error} When the provided applicationId is not a string.
   */
  application(applicationId) {
    if (typeof applicationId == "string") {
      return new PlatformApplicationClient(applicationId, this.config);
    }
    throw new Error(
      `Application Id should be of type string, ${typeof applicationId} provided`
    );
  }

  /**
   * Sets the extra headers for the platform.
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

module.exports = PlatformClient;
