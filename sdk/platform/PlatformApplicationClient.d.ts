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
    config: import("./PlatformConfig");
    companyId: string;
    applicationId: string;
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
import Cart = require("./Cart/CartPlatformApplicationClient");
import Catalog = require("./Catalog/CatalogPlatformApplicationClient");
import Communication = require("./Communication/CommunicationPlatformApplicationClient");
import Configuration = require("./Configuration/ConfigurationPlatformApplicationClient");
import Content = require("./Content/ContentPlatformApplicationClient");
import FileStorage = require("./FileStorage/FileStoragePlatformApplicationClient");
import Lead = require("./Lead/LeadPlatformApplicationClient");
import Serviceability = require("./Serviceability/ServiceabilityPlatformApplicationClient");
import Order = require("./Order/OrderPlatformApplicationClient");
import Partner = require("./Partner/PartnerPlatformApplicationClient");
import Payment = require("./Payment/PaymentPlatformApplicationClient");
import Rewards = require("./Rewards/RewardsPlatformApplicationClient");
import Share = require("./Share/SharePlatformApplicationClient");
import Theme = require("./Theme/ThemePlatformApplicationClient");
import User = require("./User/UserPlatformApplicationClient");
