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
    auditTrail: AuditTrail;
    billing: Billing;
    catalog: Catalog;
    common: Common;
    communication: Communication;
    companyProfile: CompanyProfile;
    configuration: Configuration;
    content: Content;
    discount: Discount;
    fileStorage: FileStorage;
    finance: Finance;
    inventory: Inventory;
    lead: Lead;
    serviceability: Serviceability;
    order: Order;
    payment: Payment;
    theme: Theme;
    webhook: Webhook;
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
import AuditTrail = require("./AuditTrail/AuditTrailPlatformClient");
import Billing = require("./Billing/BillingPlatformClient");
import Catalog = require("./Catalog/CatalogPlatformClient");
import Common = require("./Common/CommonPlatformClient");
import Communication = require("./Communication/CommunicationPlatformClient");
import CompanyProfile = require("./CompanyProfile/CompanyProfilePlatformClient");
import Configuration = require("./Configuration/ConfigurationPlatformClient");
import Content = require("./Content/ContentPlatformClient");
import Discount = require("./Discount/DiscountPlatformClient");
import FileStorage = require("./FileStorage/FileStoragePlatformClient");
import Finance = require("./Finance/FinancePlatformClient");
import Inventory = require("./Inventory/InventoryPlatformClient");
import Lead = require("./Lead/LeadPlatformClient");
import Serviceability = require("./Serviceability/ServiceabilityPlatformClient");
import Order = require("./Order/OrderPlatformClient");
import Payment = require("./Payment/PaymentPlatformClient");
import Theme = require("./Theme/ThemePlatformClient");
import Webhook = require("./Webhook/WebhookPlatformClient");
import PlatformApplicationClient = require("./PlatformApplicationClient");
