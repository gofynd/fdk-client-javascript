export = WebhookPlatformValidator;
/** @typedef FetchAllEventConfigurationsParam */
/**
 * @typedef GetSubscriberByIdParam
 * @property {number} subscriberId - Subscriber id
 */
/**
 * @typedef GetSubscribersByCompanyParam
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 * @property {string} [extensionId] - Extension_id
 */
/**
 * @typedef GetSubscribersByExtensionIdParam
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 * @property {string} extensionId - Extension_id
 */
/**
 * @typedef RegisterSubscriberToEventParam
 * @property {WebhookPlatformModel.SubscriberConfigPost} body
 */
/**
 * @typedef RegisterSubscriberToEventV2Param
 * @property {WebhookPlatformModel.SubscriberConfigPostRequestV2} body
 */
/**
 * @typedef UpdateSubscriberConfigParam
 * @property {WebhookPlatformModel.SubscriberConfigUpdate} body
 */
/**
 * @typedef UpdateSubscriberV2Param
 * @property {WebhookPlatformModel.SubscriberConfigUpdateRequestV2} body
 */
/**
 * @typedef UpsertSubscriberEventParam
 * @property {WebhookPlatformModel.UpsertSubscriberConfig} body
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
    /** @returns {RegisterSubscriberToEventV2Param} */
    static registerSubscriberToEventV2(): RegisterSubscriberToEventV2Param;
    /** @returns {UpdateSubscriberConfigParam} */
    static updateSubscriberConfig(): UpdateSubscriberConfigParam;
    /** @returns {UpdateSubscriberV2Param} */
    static updateSubscriberV2(): UpdateSubscriberV2Param;
    /** @returns {UpsertSubscriberEventParam} */
    static upsertSubscriberEvent(): UpsertSubscriberEventParam;
}
declare namespace WebhookPlatformValidator {
    export { FetchAllEventConfigurationsParam, GetSubscriberByIdParam, GetSubscribersByCompanyParam, GetSubscribersByExtensionIdParam, RegisterSubscriberToEventParam, RegisterSubscriberToEventV2Param, UpdateSubscriberConfigParam, UpdateSubscriberV2Param, UpsertSubscriberEventParam };
}
type GetSubscriberByIdParam = {
    /**
     * - Subscriber id
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
     * - Extension_id
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
     * - Extension_id
     */
    extensionId: string;
};
type RegisterSubscriberToEventParam = {
    body: WebhookPlatformModel.SubscriberConfigPost;
};
type RegisterSubscriberToEventV2Param = {
    body: WebhookPlatformModel.SubscriberConfigPostRequestV2;
};
type UpdateSubscriberConfigParam = {
    body: WebhookPlatformModel.SubscriberConfigUpdate;
};
type UpdateSubscriberV2Param = {
    body: WebhookPlatformModel.SubscriberConfigUpdateRequestV2;
};
type UpsertSubscriberEventParam = {
    body: WebhookPlatformModel.UpsertSubscriberConfig;
};
type FetchAllEventConfigurationsParam = any;
import WebhookPlatformModel = require("./WebhookPlatformModel");
