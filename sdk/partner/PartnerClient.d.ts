export = PartnerClient;
/**
 * Represents the client for the partner APIs.
 *
 * @class
 */
declare class PartnerClient {
    /**
     * Creates an instance of PartnerClient.
     *
     * @param {import("./PartnerConfig")} config - The configuration for the
     *   partner client.
     */
    constructor(config: import("./PartnerConfig"));
    config: import("sdk/output/javascript/code/sdk/partner/PartnerConfig");
    fileStorage: FileStorage;
    lead: Lead;
    logistics: Logistics;
    theme: Theme;
    webhook: Webhook;
    /**
     * Sets the extra headers for the partner client.
     *
     * @param {object} header - The header object to set.
     * @throws {FDKClientValidationError} When the provided header is not an object.
     */
    setExtraHeaders(header: object): void;
}
import FileStorage = require("sdk/output/javascript/code/sdk/partner/FileStorage/FileStoragePartnerClient");
import Lead = require("sdk/output/javascript/code/sdk/partner/Lead/LeadPartnerClient");
import Logistics = require("sdk/output/javascript/code/sdk/partner/Logistics/LogisticsPartnerClient");
import Theme = require("sdk/output/javascript/code/sdk/partner/Theme/ThemePartnerClient");
import Webhook = require("sdk/output/javascript/code/sdk/partner/Webhook/WebhookPartnerClient");
