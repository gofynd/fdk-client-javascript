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

const Lead = require("./Lead/LeadPlatformClient");

const Serviceability = require("./Serviceability/ServiceabilityPlatformClient");

const Order = require("./Order/OrderPlatformClient");

const Payment = require("./Payment/PaymentPlatformClient");

const Theme = require("./Theme/ThemePlatformClient");

const Webhook = require("./Webhook/WebhookPlatformClient");

const PlatformApplicationClient = require("./PlatformApplicationClient");
const { FDKClientValidationError } = require("../common/FDKError");
const { execute } = require("./PlatformAPIClient");
const PlatformConfig = require("./PlatformConfig");

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
  constructor(config, options) {
    if (config instanceof PlatformConfig) {
      this.config = config;
    } else {
      let platformConfig = new PlatformConfig(config, options);
      this.config = platformConfig;
    }

    this.auditTrail = new AuditTrail(this.config);

    this.billing = new Billing(this.config);

    this.catalog = new Catalog(this.config);

    this.common = new Common(this.config);

    this.communication = new Communication(this.config);

    this.companyProfile = new CompanyProfile(this.config);

    this.configuration = new Configuration(this.config);

    this.content = new Content(this.config);

    this.discount = new Discount(this.config);

    this.fileStorage = new FileStorage(this.config);

    this.lead = new Lead(this.config);

    this.serviceability = new Serviceability(this.config);

    this.order = new Order(this.config);

    this.payment = new Payment(this.config);

    this.theme = new Theme(this.config);

    this.webhook = new Webhook(this.config);
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
    return await execute(this.config, method, url, query, body, headers, {
      responseHeaders,
    });
  }

  getAccesstokenObj(options) {
    return this.config.oauthClient.getAccesstokenObj(options);
  }

  setToken(token) {
    this.config.oauthClient.setToken(token);
  }
}

module.exports = PlatformClient;
