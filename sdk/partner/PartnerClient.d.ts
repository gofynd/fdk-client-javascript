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
    config: import("./PartnerConfig");
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
    request({ method, url, query, body, headers, responseHeaders, }: {
        method: any;
        url: any;
        query: any;
        body: any;
        headers: any;
        responseHeaders?: boolean;
    }): Promise<import("axios").AxiosResponse<any, any>>;
}
import FileStorage = require("./FileStorage/FileStoragePartnerClient");
import Lead = require("./Lead/LeadPartnerClient");
import Logistics = require("./Logistics/LogisticsPartnerClient");
import Theme = require("./Theme/ThemePartnerClient");
import Webhook = require("./Webhook/WebhookPartnerClient");
