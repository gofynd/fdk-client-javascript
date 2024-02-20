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
 * @typedef GetEventCountsParam
 * @property {WebhookPlatformModel.RetryEventRequest} body
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
/** @typedef ManualRetryCancelParam */
/**
 * @typedef ManualRetryOfFailedEventParam
 * @property {WebhookPlatformModel.RetryEventRequest} body
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
 * @typedef RegisterSubscriberToEventV2Param
 * @property {WebhookPlatformModel.SubscriberConfigRequestV2} body
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
    /** @returns {RegisterSubscriberToEventV2Param} */
    static registerSubscriberToEventV2(): RegisterSubscriberToEventV2Param;
    /** @returns {UpdateSubscriberConfigParam} */
    static updateSubscriberConfig(): UpdateSubscriberConfigParam;
}
declare namespace WebhookPlatformValidator {
    export { CancelJobByNameParam, DownloadDeliveryReportParam, FetchAllEventConfigurationsParam, GetDeliveryReportsParam, GetEventCountsParam, GetHistoricalReportsParam, GetManualRetryStatusParam, GetReportFiltersParam, GetSubscriberByIdParam, GetSubscribersByCompanyParam, GetSubscribersByExtensionIdParam, ManualRetryCancelParam, ManualRetryOfFailedEventParam, PingWebhookParam, RegisterSubscriberToEventParam, RegisterSubscriberToEventV2Param, UpdateSubscriberConfigParam };
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
type GetEventCountsParam = {
    body: WebhookPlatformModel.RetryEventRequest;
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
type ManualRetryOfFailedEventParam = {
    body: WebhookPlatformModel.RetryEventRequest;
};
type PingWebhookParam = {
    body: WebhookPlatformModel.PingWebhook;
};
type RegisterSubscriberToEventParam = {
    body: WebhookPlatformModel.SubscriberConfig;
};
type RegisterSubscriberToEventV2Param = {
    body: WebhookPlatformModel.SubscriberConfigRequestV2;
};
type UpdateSubscriberConfigParam = {
    body: WebhookPlatformModel.SubscriberConfig;
};
type FetchAllEventConfigurationsParam = any;
type GetManualRetryStatusParam = any;
type ManualRetryCancelParam = any;
import WebhookPlatformModel = require("sdk/output/javascript/code/sdk/platform/Webhook/WebhookPlatformModel");
