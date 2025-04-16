export = WebhookPlatformValidator;
/**
 * @typedef CancelJobByNameParam
 * @property {string} filename
 */
/**
 * @typedef DownloadDeliveryReportParam
 * @property {WebhookPlatformModel.EventProcessRequest} body
 */
/** @typedef FetchAllEventConfigurationsParam */
/**
 * @typedef GetDeliveryReportsParam
 * @property {WebhookPlatformModel.EventProcessRequest} body
 */
/**
 * @typedef GetHistoricalReportsParam
 * @property {WebhookPlatformModel.HistoryPayload} body
 */
/**
 * @typedef GetReportFiltersParam
 * @property {WebhookPlatformModel.ReportFiltersPayload} body
 */
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
 * @typedef PingWebhookParam
 * @property {WebhookPlatformModel.PingWebhook} body
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
declare class WebhookPlatformValidator {
    /** @returns {CancelJobByNameParam} */
    static cancelJobByName(): CancelJobByNameParam;
    /** @returns {DownloadDeliveryReportParam} */
    static downloadDeliveryReport(): DownloadDeliveryReportParam;
    /** @returns {FetchAllEventConfigurationsParam} */
    static fetchAllEventConfigurations(): any;
    /** @returns {GetDeliveryReportsParam} */
    static getDeliveryReports(): GetDeliveryReportsParam;
    /** @returns {GetHistoricalReportsParam} */
    static getHistoricalReports(): GetHistoricalReportsParam;
    /** @returns {GetReportFiltersParam} */
    static getReportFilters(): GetReportFiltersParam;
    /** @returns {GetSubscriberByIdParam} */
    static getSubscriberById(): GetSubscriberByIdParam;
    /** @returns {GetSubscribersByCompanyParam} */
    static getSubscribersByCompany(): GetSubscribersByCompanyParam;
    /** @returns {GetSubscribersByExtensionIdParam} */
    static getSubscribersByExtensionId(): GetSubscribersByExtensionIdParam;
    /** @returns {PingWebhookParam} */
    static pingWebhook(): PingWebhookParam;
    /** @returns {RegisterSubscriberToEventParam} */
    static registerSubscriberToEvent(): RegisterSubscriberToEventParam;
    /** @returns {RegisterSubscriberToEventV2Param} */
    static registerSubscriberToEventV2(): RegisterSubscriberToEventV2Param;
    /** @returns {UpdateSubscriberConfigParam} */
    static updateSubscriberConfig(): UpdateSubscriberConfigParam;
    /** @returns {UpdateSubscriberV2Param} */
    static updateSubscriberV2(): UpdateSubscriberV2Param;
}
declare namespace WebhookPlatformValidator {
    export { CancelJobByNameParam, DownloadDeliveryReportParam, FetchAllEventConfigurationsParam, GetDeliveryReportsParam, GetHistoricalReportsParam, GetReportFiltersParam, GetSubscriberByIdParam, GetSubscribersByCompanyParam, GetSubscribersByExtensionIdParam, PingWebhookParam, RegisterSubscriberToEventParam, RegisterSubscriberToEventV2Param, UpdateSubscriberConfigParam, UpdateSubscriberV2Param };
}
type CancelJobByNameParam = {
    filename: string;
};
type DownloadDeliveryReportParam = {
    body: WebhookPlatformModel.EventProcessRequest;
};
type GetDeliveryReportsParam = {
    body: WebhookPlatformModel.EventProcessRequest;
};
type GetHistoricalReportsParam = {
    body: WebhookPlatformModel.HistoryPayload;
};
type GetReportFiltersParam = {
    body: WebhookPlatformModel.ReportFiltersPayload;
};
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
type PingWebhookParam = {
    body: WebhookPlatformModel.PingWebhook;
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
type FetchAllEventConfigurationsParam = any;
import WebhookPlatformModel = require("./WebhookPlatformModel");
