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
    /** @returns {FetchAllEventConfigurationsParam} */
    static fetchAllEventConfigurations(): any;
    /** @returns {GetSubscriberByIdParam} */
    static getSubscriberById(): GetSubscriberByIdParam;
    /** @returns {GetSubscribersByCompanyParam} */
    static getSubscribersByCompany(): GetSubscribersByCompanyParam;
    /** @returns {GetSubscribersByExtensionIdParam} */
    static getSubscribersByExtensionId(): GetSubscribersByExtensionIdParam;
    /** @returns {RegisterSubscriberToEventParam} */
    static registerSubscriberToEvent(): RegisterSubscriberToEventParam;
    /** @returns {UpdateSubscriberConfigParam} */
    static updateSubscriberConfig(): UpdateSubscriberConfigParam;
}
declare namespace WebhookPlatformValidator {
    export { FetchAllEventConfigurationsParam, GetSubscriberByIdParam, GetSubscribersByCompanyParam, GetSubscribersByExtensionIdParam, RegisterSubscriberToEventParam, UpdateSubscriberConfigParam };
}
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
type FetchAllEventConfigurationsParam = any;
import WebhookPlatformModel = require("./WebhookPlatformModel");
