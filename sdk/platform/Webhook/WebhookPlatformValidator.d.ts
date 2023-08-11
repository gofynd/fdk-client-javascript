export = WebhookPlatformValidator;
/**
 * @typedef CancelJobByNameParam
 * @property {string} filename - Filename of the specific report export to cancel.
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
 * @typedef GetEventCountsParam
 * @property {WebhookPlatformModel.EventProcessRequest} body
 */
/**
 * @typedef GetHistoricalReportsParam
 * @property {WebhookPlatformModel.HistoryPayload} body
 */
/** @typedef GetManualRetryStatusParam */
/**
 * @typedef GetReportFiltersParam
 * @property {WebhookPlatformModel.ReportFiltersPayload} body
 */
/**
 * @typedef GetSubscriberByIdParam
 * @property {number} subscriberId - The ID of the company for which manual
 *   retry is to be initiated.
 */
/**
 * @typedef GetSubscribersByCompanyParam
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 * @property {number} [extensionId] - Extension_id
 */
/**
 * @typedef GetSubscribersByExtensionIdParam
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 * @property {number} extensionId - The ID of the company for which manual retry
 *   is to be initiated.
 */
/** @typedef ManualRetryCancelParam */
/**
 * @typedef ManualRetryOfFailedEventParam
 * @property {WebhookPlatformModel.EventProcessRequest} body
 */
/**
 * @typedef PingWebhookParam
 * @property {WebhookPlatformModel.PingWebhook} body
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
    /** @returns {CancelJobByNameParam} */
    static cancelJobByName(): CancelJobByNameParam;
    /** @returns {DownloadDeliveryReportParam} */
    static downloadDeliveryReport(): DownloadDeliveryReportParam;
    /** @returns {FetchAllEventConfigurationsParam} */
    static fetchAllEventConfigurations(): any;
    /** @returns {GetDeliveryReportsParam} */
    static getDeliveryReports(): GetDeliveryReportsParam;
    /** @returns {GetEventCountsParam} */
    static getEventCounts(): GetEventCountsParam;
    /** @returns {GetHistoricalReportsParam} */
    static getHistoricalReports(): GetHistoricalReportsParam;
    /** @returns {GetManualRetryStatusParam} */
    static getManualRetryStatus(): any;
    /** @returns {GetReportFiltersParam} */
    static getReportFilters(): GetReportFiltersParam;
    /** @returns {GetSubscriberByIdParam} */
    static getSubscriberById(): GetSubscriberByIdParam;
    /** @returns {GetSubscribersByCompanyParam} */
    static getSubscribersByCompany(): GetSubscribersByCompanyParam;
    /** @returns {GetSubscribersByExtensionIdParam} */
    static getSubscribersByExtensionId(): GetSubscribersByExtensionIdParam;
    /** @returns {ManualRetryCancelParam} */
    static manualRetryCancel(): any;
    /** @returns {ManualRetryOfFailedEventParam} */
    static manualRetryOfFailedEvent(): ManualRetryOfFailedEventParam;
    /** @returns {PingWebhookParam} */
    static pingWebhook(): PingWebhookParam;
    /** @returns {RegisterSubscriberToEventParam} */
    static registerSubscriberToEvent(): RegisterSubscriberToEventParam;
    /** @returns {UpdateSubscriberConfigParam} */
    static updateSubscriberConfig(): UpdateSubscriberConfigParam;
}
declare namespace WebhookPlatformValidator {
    export { CancelJobByNameParam, DownloadDeliveryReportParam, FetchAllEventConfigurationsParam, GetDeliveryReportsParam, GetEventCountsParam, GetHistoricalReportsParam, GetManualRetryStatusParam, GetReportFiltersParam, GetSubscriberByIdParam, GetSubscribersByCompanyParam, GetSubscribersByExtensionIdParam, ManualRetryCancelParam, ManualRetryOfFailedEventParam, PingWebhookParam, RegisterSubscriberToEventParam, UpdateSubscriberConfigParam };
}
type CancelJobByNameParam = {
    /**
     * - Filename of the specific report export to cancel.
     */
    filename: string;
};
type DownloadDeliveryReportParam = {
    body: WebhookPlatformModel.EventProcessRequest;
};
type GetDeliveryReportsParam = {
    body: WebhookPlatformModel.EventProcessRequest;
};
type GetEventCountsParam = {
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
     * - The ID of the company for which manual
     * retry is to be initiated.
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
    extensionId?: number;
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
     * - The ID of the company for which manual retry
     * is to be initiated.
     */
    extensionId: number;
};
type ManualRetryOfFailedEventParam = {
    body: WebhookPlatformModel.EventProcessRequest;
};
type PingWebhookParam = {
    body: WebhookPlatformModel.PingWebhook;
};
type RegisterSubscriberToEventParam = {
    body: WebhookPlatformModel.SubscriberConfig;
};
type UpdateSubscriberConfigParam = {
    body: WebhookPlatformModel.SubscriberConfig;
};
type FetchAllEventConfigurationsParam = any;
type GetManualRetryStatusParam = any;
type ManualRetryCancelParam = any;
import WebhookPlatformModel = require("./WebhookPlatformModel");
