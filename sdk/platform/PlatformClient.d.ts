export = PlatformClient;
/**
 * Represents the client for the platform.
 *
 * @class
 */
declare class PlatformClient {
    /**
     * Creates an instance of PlatformClient.
     *
     * @param {import("./PlatformConfig")} config - The application configuration.
     */
    constructor(config: import("./PlatformConfig"));
    config: import("./PlatformConfig");
    common: Common;
    lead: Lead;
    theme: Theme;
    billing: Billing;
    communication: Communication;
    payment: Payment;
    order: Order;
    catalog: Catalog;
    companyProfile: CompanyProfile;
    fileStorage: FileStorage;
    configuration: Configuration;
    discount: Discount;
    webhook: Webhook;
    auditTrail: AuditTrail;
    serviceability: Serviceability;
    finance: Finance;
    /**
     * Creates an instance of PlatformApplicationClient to interact with a
     * platform's application level api.
     *
     * @param {string} applicationId - The ID of the application.
     * @returns {PlatformApplicationClient} - The PlatformApplicationClient
     *   instance for the specified application.
     * @throws {Error} When the provided applicationId is not a string.
     */
    application(applicationId: string): PlatformApplicationClient;
    /**
     * Sets the extra headers for the platform.
     *
     * @param {object} header - The header object to set.
     * @throws {FDKClientValidationError} When the provided header is not an object.
     */
    setExtraHeaders(header: object): void;
}
import Common = require("./Common/CommonPlatformClient");
import Lead = require("./Lead/LeadPlatformClient");
import Theme = require("./Theme/ThemePlatformClient");
import Billing = require("./Billing/BillingPlatformClient");
import Communication = require("./Communication/CommunicationPlatformClient");
import Payment = require("./Payment/PaymentPlatformClient");
import Order = require("./Order/OrderPlatformClient");
import Catalog = require("./Catalog/CatalogPlatformClient");
import CompanyProfile = require("./CompanyProfile/CompanyProfilePlatformClient");
import FileStorage = require("./FileStorage/FileStoragePlatformClient");
import Configuration = require("./Configuration/ConfigurationPlatformClient");
import Discount = require("./Discount/DiscountPlatformClient");
import Webhook = require("./Webhook/WebhookPlatformClient");
import AuditTrail = require("./AuditTrail/AuditTrailPlatformClient");
import Serviceability = require("./Serviceability/ServiceabilityPlatformClient");
import Finance = require("./Finance/FinancePlatformClient");
import PlatformApplicationClient = require("./PlatformApplicationClient");
