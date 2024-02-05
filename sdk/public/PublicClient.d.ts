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
    config: import("sdk/output/javascript/code/sdk/public/PublicConfig");
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
import Billing = require("sdk/output/javascript/code/sdk/public/Billing/BillingPublicClient");
import Configuration = require("sdk/output/javascript/code/sdk/public/Configuration/ConfigurationPublicClient");
import Content = require("sdk/output/javascript/code/sdk/public/Content/ContentPublicClient");
import Inventory = require("sdk/output/javascript/code/sdk/public/Inventory/InventoryPublicClient");
import Partner = require("sdk/output/javascript/code/sdk/public/Partner/PartnerPublicClient");
import Webhook = require("sdk/output/javascript/code/sdk/public/Webhook/WebhookPublicClient");
