export = WebhookPlatformValidator;
/** @typedef fetchAllEventConfigurations */
/**
 * @typedef getSubscriberById
 * @property {number} subscriberId - Subscriber ID
 */
/**
 * @typedef getSubscribersByCompany
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 * @property {string} [extensionId] - Extension ID
 */
/**
 * @typedef getSubscribersByExtensionId
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 * @property {string} extensionId - Extension ID
 */
/**
 * @typedef registerSubscriberToEvent
 * @property {WebhookPlatformModel.SubscriberConfig} body
 */
/**
 * @typedef updateSubscriberConfig
 * @property {WebhookPlatformModel.SubscriberConfig} body
 */
declare class WebhookPlatformValidator {
}
declare namespace WebhookPlatformValidator {
    export { fetchAllEventConfigurations, getSubscriberById, getSubscribersByCompany, getSubscribersByExtensionId, registerSubscriberToEvent, updateSubscriberConfig };
}
/** @returns {fetchAllEventConfigurations} */
declare function fetchAllEventConfigurations(): any;
type fetchAllEventConfigurations = any;
/** @returns {getSubscriberById} */
declare function getSubscriberById(): getSubscriberById;
type getSubscriberById = {
    /**
     * - Subscriber ID
     */
    subscriberId: number;
};
/** @returns {getSubscribersByCompany} */
declare function getSubscribersByCompany(): getSubscribersByCompany;
type getSubscribersByCompany = {
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
/** @returns {getSubscribersByExtensionId} */
declare function getSubscribersByExtensionId(): getSubscribersByExtensionId;
type getSubscribersByExtensionId = {
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
/** @returns {registerSubscriberToEvent} */
declare function registerSubscriberToEvent(): registerSubscriberToEvent;
type registerSubscriberToEvent = {
    body: WebhookPlatformModel.SubscriberConfig;
};
/** @returns {updateSubscriberConfig} */
declare function updateSubscriberConfig(): updateSubscriberConfig;
type updateSubscriberConfig = {
    body: WebhookPlatformModel.SubscriberConfig;
};
import WebhookPlatformModel = require("./WebhookPlatformModel");
