export = Webhook;
declare class Webhook {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        fetchAllWebhookEvents: string;
        queryWebhookEventDetails: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<EventConfigResponse>} - Success response
     * @summary: Get All Webhook Events
     * @description: Get All Webhook Events
     */
    fetchAllWebhookEvents({ headers }?: any): Promise<EventConfigResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EventConfigBase[]} arg.body
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<EventConfigResponse>} - Success response
     * @summary: Send webhook event name, type, version, category in request body to get complete details of event from server
     * @description: Get Webhook Event Details for provided events
     */
    queryWebhookEventDetails({ body }?: {
        body: EventConfigBase[];
    }, { headers }?: any): Promise<EventConfigResponse>;
}
