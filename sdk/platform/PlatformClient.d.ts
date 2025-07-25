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
    constructor(config: import("./PlatformConfig"), options: any);
    config: PlatformConfig;
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
    request({ method, url, query, body, headers, responseHeaders, }: {
        method: any;
        url: any;
        query: any;
        body: any;
        headers: any;
        responseHeaders?: boolean;
    }): Promise<import("axios").AxiosResponse<any, any>>;
    getAccesstokenObj(options: any): Promise<import("axios").AxiosResponse<any, any>>;
    setToken(token: any): void;
}
import PlatformConfig = require("./PlatformConfig");
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
import Lead = require("./Lead/LeadPlatformClient");
import Serviceability = require("./Serviceability/ServiceabilityPlatformClient");
import Order = require("./Order/OrderPlatformClient");
import Payment = require("./Payment/PaymentPlatformClient");
import Theme = require("./Theme/ThemePlatformClient");
import Webhook = require("./Webhook/WebhookPlatformClient");
import PlatformApplicationClient = require("./PlatformApplicationClient");
