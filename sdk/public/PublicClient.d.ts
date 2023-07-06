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
    configuration: Configuration;
    webhook: Webhook;
    inventory: Inventory;
    partner: Partner;
    /**
     * Sets the extra headers for the public client.
     *
     * @param {object} header - The header object to set.
     * @throws {FDKClientValidationError} When the provided header is not an object.
     */
    setExtraHeaders(header: object): void;
}
import Configuration = require("./Configuration/ConfigurationPublicClient");
import Webhook = require("./Webhook/WebhookPublicClient");
import Inventory = require("./Inventory/InventoryPublicClient");
import Partner = require("./Partner/PartnerPublicClient");
