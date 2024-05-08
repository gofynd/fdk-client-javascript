export = PublicClient;
/**
 * Represents the client for the public APIs.
 *
 * @class
 */
declare class PublicClient {
    /**
     * Creates an instance of PublicClient.
     *
     * @param {import("./PublicConfig")} config - The configuration for the public client.
     */
    constructor(config: import("./PublicConfig"));
    config: import("./PublicConfig");
    billing: Billing;
    configuration: Configuration;
    content: Content;
    inventory: Inventory;
    partner: Partner;
    webhook: Webhook;
    /**
     * Sets the extra headers for the public client.
     *
     * @param {object} header - The header object to set.
     * @throws {FDKClientValidationError} When the provided header is not an object.
     */
    setExtraHeaders(header: object): void;
}
import Billing = require("./Billing/BillingPublicClient");
import Configuration = require("./Configuration/ConfigurationPublicClient");
import Content = require("./Content/ContentPublicClient");
import Inventory = require("./Inventory/InventoryPublicClient");
import Partner = require("./Partner/PartnerPublicClient");
import Webhook = require("./Webhook/WebhookPublicClient");
