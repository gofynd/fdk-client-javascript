const AuditTrail = require("./AuditTrail/AuditTrailPlatformClient");

const Billing = require("./Billing/BillingPlatformClient");

const Catalog = require("./Catalog/CatalogPlatformClient");

const Common = require("./Common/CommonPlatformClient");

const Communication = require("./Communication/CommunicationPlatformClient");

const CompanyProfile = require("./CompanyProfile/CompanyProfilePlatformClient");

const Configuration = require("./Configuration/ConfigurationPlatformClient");

const Content = require("./Content/ContentPlatformClient");

const Discount = require("./Discount/DiscountPlatformClient");

const FileStorage = require("./FileStorage/FileStoragePlatformClient");

const Finance = require("./Finance/FinancePlatformClient");

const Lead = require("./Lead/LeadPlatformClient");

const Serviceability = require("./Serviceability/ServiceabilityPlatformClient");

const Order = require("./Order/OrderPlatformClient");

const Payment = require("./Payment/PaymentPlatformClient");

const Theme = require("./Theme/ThemePlatformClient");

const Webhook = require("./Webhook/WebhookPlatformClient");

const PlatformApplicationClient = require("./PlatformApplicationClient");
const { FDKClientValidationError } = require("../common/FDKError");
const PlatformAPIClient = require("./PlatformAPIClient");

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

    this.auditTrail = new AuditTrail(config);

    this.billing = new Billing(config);

    this.catalog = new Catalog(config);

    this.common = new Common(config);

    this.communication = new Communication(config);

    this.companyProfile = new CompanyProfile(config);

    this.configuration = new Configuration(config);

    this.content = new Content(config);

    this.discount = new Discount(config);

    this.fileStorage = new FileStorage(config);

    this.finance = new Finance(config);

    this.lead = new Lead(config);

    this.serviceability = new Serviceability(config);

    this.order = new Order(config);

    this.payment = new Payment(config);

    this.theme = new Theme(config);

    this.webhook = new Webhook(config);
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

  async request({
    method,
    url,
    query,
    body,
    headers,
    responseHeaders = false,
  }) {
    return await PlatformAPIClient.execute(
      this.config,
      method,
      url,
      query,
      body,
      headers,
      {
        responseHeaders,
      }
    );
  }
}

module.exports = PlatformClient;
