export = Webhook;
declare class Webhook {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<EventConfigResponse>} - Success response
     * @summary:
     * @description: Get All Webhook Events
     */
    fetchAllEventConfigurations({}?: any): Promise<EventConfigResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.subscriberId - Subscriber ID
     * @returns {Promise<SubscriberResponse>} - Success response
     * @summary: Get Subscriber By Subscriber ID
     * @description: Get Subscriber By Subscriber ID
     */
    getSubscriberById({ subscriberId }?: {
        subscriberId: number;
    }): Promise<SubscriberResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Page Number
     * @param {number} [arg.pageSize] - Page Size
     * @param {string} [arg.extensionId] - Extension ID
     * @returns {Promise<SubscriberResponse>} - Success response
     * @summary: Get Subscribers By Company ID
     * @description: Get Subscribers By CompanyId
     */
    getSubscribersByCompany({ pageNo, pageSize, extensionId }?: {
        pageNo?: number;
        pageSize?: number;
        extensionId?: string;
    }): Promise<SubscriberResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Page Number
     * @param {number} [arg.pageSize] - Page Size
     * @param {string} arg.extensionId - Extension ID
     * @returns {Promise<SubscriberConfigList>} - Success response
     * @summary: Get Subscribers By Extension ID
     * @description: Get Subscribers By ExtensionID
     */
    getSubscribersByExtensionId({ extensionId, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        extensionId: string;
    }): Promise<SubscriberConfigList>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SubscriberConfig} arg.body
     * @returns {Promise<SubscriberConfig>} - Success response
     * @summary: Register Subscriber
     * @description: Register Subscriber
     */
    registerSubscriberToEvent({ body }?: {
        body: SubscriberConfig;
    }): Promise<SubscriberConfig>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SubscriberConfig} arg.body
     * @returns {Promise<SubscriberConfig>} - Success response
     * @summary: Update Subscriber
     * @description: Update Subscriber
     */
    updateSubscriberConfig({ body }?: {
        body: SubscriberConfig;
    }): Promise<SubscriberConfig>;
}
