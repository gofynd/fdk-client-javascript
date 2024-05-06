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
    config: import("sdk/output/javascript/code/sdk/platform/PlatformConfig");
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
import AuditTrail = require("sdk/output/javascript/code/sdk/platform/AuditTrail/AuditTrailPlatformClient");
import Billing = require("sdk/output/javascript/code/sdk/platform/Billing/BillingPlatformClient");
import Catalog = require("sdk/output/javascript/code/sdk/platform/Catalog/CatalogPlatformClient");
import Common = require("sdk/output/javascript/code/sdk/platform/Common/CommonPlatformClient");
import Communication = require("sdk/output/javascript/code/sdk/platform/Communication/CommunicationPlatformClient");
import CompanyProfile = require("sdk/output/javascript/code/sdk/platform/CompanyProfile/CompanyProfilePlatformClient");
import Configuration = require("sdk/output/javascript/code/sdk/platform/Configuration/ConfigurationPlatformClient");
import Content = require("sdk/output/javascript/code/sdk/platform/Content/ContentPlatformClient");
import Discount = require("sdk/output/javascript/code/sdk/platform/Discount/DiscountPlatformClient");
import FileStorage = require("sdk/output/javascript/code/sdk/platform/FileStorage/FileStoragePlatformClient");
import Finance = require("sdk/output/javascript/code/sdk/platform/Finance/FinancePlatformClient");
import Lead = require("sdk/output/javascript/code/sdk/platform/Lead/LeadPlatformClient");
import Serviceability = require("sdk/output/javascript/code/sdk/platform/Serviceability/ServiceabilityPlatformClient");
import Order = require("sdk/output/javascript/code/sdk/platform/Order/OrderPlatformClient");
import Payment = require("sdk/output/javascript/code/sdk/platform/Payment/PaymentPlatformClient");
import Theme = require("sdk/output/javascript/code/sdk/platform/Theme/ThemePlatformClient");
import Webhook = require("sdk/output/javascript/code/sdk/platform/Webhook/WebhookPlatformClient");
import PlatformApplicationClient = require("sdk/output/javascript/code/sdk/platform/PlatformApplicationClient");
