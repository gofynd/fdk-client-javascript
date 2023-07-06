export = WebhookPlatformValidator;
/** @typedef FetchAllEventConfigurationsParam */
/**
 * @typedef GetSubscriberByIdParam
 * @property {number} subscriberId - Subscriber ID
 */
/**
 * @typedef GetSubscribersByCompanyParam
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 * @property {string} [extensionId] - Extension ID
 */
/**
 * @typedef GetSubscribersByExtensionIdParam
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 * @property {string} extensionId - Extension ID
 */
/**
 * @typedef RegisterSubscriberToEventParam
 * @property {WebhookPlatformModel.SubscriberConfig} body
 */
/**
 * @typedef UpdateSubscriberConfigParam
 * @property {WebhookPlatformModel.SubscriberConfig} body
 */
declare class WebhookPlatformValidator {
    /** @returns {fetchAllEventConfigurations} */
    static fetchAllEventConfigurations(): fetchAllEventConfigurations;
    /** @returns {getSubscriberById} */
    static getSubscriberById(): getSubscriberById;
    /** @returns {getSubscribersByCompany} */
    static getSubscribersByCompany(): getSubscribersByCompany;
    /** @returns {getSubscribersByExtensionId} */
    static getSubscribersByExtensionId(): getSubscribersByExtensionId;
    /** @returns {registerSubscriberToEvent} */
    static registerSubscriberToEvent(): registerSubscriberToEvent;
    /** @returns {updateSubscriberConfig} */
    static updateSubscriberConfig(): updateSubscriberConfig;
}
declare namespace WebhookPlatformValidator {
    export { FetchAllEventConfigurationsParam, GetSubscriberByIdParam, GetSubscribersByCompanyParam, GetSubscribersByExtensionIdParam, RegisterSubscriberToEventParam, UpdateSubscriberConfigParam };
}
type FetchAllEventConfigurationsParam = any;
type GetSubscriberByIdParam = {
    /**
     * - Subscriber ID
     */
    subscriberId: number;
};
type GetSubscribersByCompanyParam = {
    /**
     * - Page Number
     */
    pageNo?: number;
    /**
     * - Page Size
     */
    pageSize?: number;
    /**
     * - Extension ID
     */
    extensionId?: string;
};
type GetSubscribersByExtensionIdParam = {
    /**
     * - Page Number
     */
    pageNo?: number;
    /**
     * - Page Size
     */
    pageSize?: number;
    /**
     * - Extension ID
     */
    extensionId: string;
};
type RegisterSubscriberToEventParam = {
    body: WebhookPlatformModel.SubscriberConfig;
};
type UpdateSubscriberConfigParam = {
    body: WebhookPlatformModel.SubscriberConfig;
};
import WebhookPlatformModel = require("./WebhookPlatformModel");
