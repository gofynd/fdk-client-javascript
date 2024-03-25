export = PlatformApplicationClient;
/**
 * Represents the client for a platform's application level APIs.
 *
 * @class
 */
declare class PlatformApplicationClient {
    /**
     * Creates an instance of PlatformApplicationClient.
     *
     * @param {string} applicationId - The ID of the application.
     * @param {import("./PlatformConfig")} config - The platform configuration.
     */
    constructor(applicationId: string, config: import("./PlatformConfig"));
    config: import("sdk/output/javascript/code/sdk/platform/PlatformConfig");
    companyId: string;
    applicationId: string;
    analytics: Analytics;
    cart: Cart;
    catalog: Catalog;
    communication: Communication;
    configuration: Configuration;
    content: Content;
    fileStorage: FileStorage;
    lead: Lead;
    serviceability: Serviceability;
    order: Order;
    partner: Partner;
    payment: Payment;
    rewards: Rewards;
    share: Share;
    theme: Theme;
    user: User;
    /**
     * Sets the extra headers for the platform application.
     *
     * @param {object} header - The header object to set.
     * @throws {FDKClientValidationError} When the provided header is not an object.
     */
    setExtraHeaders(header: object): void;
}
import Analytics = require("sdk/output/javascript/code/sdk/platform/Analytics/AnalyticsPlatformApplicationClient");
import Cart = require("sdk/output/javascript/code/sdk/platform/Cart/CartPlatformApplicationClient");
import Catalog = require("sdk/output/javascript/code/sdk/platform/Catalog/CatalogPlatformApplicationClient");
import Communication = require("sdk/output/javascript/code/sdk/platform/Communication/CommunicationPlatformApplicationClient");
import Configuration = require("sdk/output/javascript/code/sdk/platform/Configuration/ConfigurationPlatformApplicationClient");
import Content = require("sdk/output/javascript/code/sdk/platform/Content/ContentPlatformApplicationClient");
import FileStorage = require("sdk/output/javascript/code/sdk/platform/FileStorage/FileStoragePlatformApplicationClient");
import Lead = require("sdk/output/javascript/code/sdk/platform/Lead/LeadPlatformApplicationClient");
import Serviceability = require("sdk/output/javascript/code/sdk/platform/Serviceability/ServiceabilityPlatformApplicationClient");
import Order = require("sdk/output/javascript/code/sdk/platform/Order/OrderPlatformApplicationClient");
import Partner = require("sdk/output/javascript/code/sdk/platform/Partner/PartnerPlatformApplicationClient");
import Payment = require("sdk/output/javascript/code/sdk/platform/Payment/PaymentPlatformApplicationClient");
import Rewards = require("sdk/output/javascript/code/sdk/platform/Rewards/RewardsPlatformApplicationClient");
import Share = require("sdk/output/javascript/code/sdk/platform/Share/SharePlatformApplicationClient");
import Theme = require("sdk/output/javascript/code/sdk/platform/Theme/ThemePlatformApplicationClient");
import User = require("sdk/output/javascript/code/sdk/platform/User/UserPlatformApplicationClient");
