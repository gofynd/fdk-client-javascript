export = Webhook;
declare class Webhook {
    constructor(config: any);
    config: any;
    /**
     * @param {WebhookPlatformValidator.CancelJobByNameParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.CancelResponse>} - Success response
     * @name cancelJobByName
     * @summary: Cancel a report export
     * @description: Cancel the export of a specific report for a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/cancelJobByName/).
     */
    cancelJobByName({ filename, requestHeaders }?: WebhookPlatformValidator.CancelJobByNameParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.CancelResponse>;
    /**
     * @param {WebhookPlatformValidator.DownloadDeliveryReportParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name downloadDeliveryReport
     * @summary: Download processed events report for a company
     * @description: Download reports for a specific company based on the provided filters. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/downloadDeliveryReport/).
     */
    downloadDeliveryReport({ body, requestHeaders }?: WebhookPlatformValidator.DownloadDeliveryReportParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {WebhookPlatformValidator.FetchAllEventConfigurationsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.EventConfigResponse>} - Success response
     * @name fetchAllEventConfigurations
     * @summary:
     * @description: Get All Webhook Events - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/fetchAllEventConfigurations/).
     */
    fetchAllEventConfigurations({ requestHeaders }?: any, { responseHeaders }?: object): Promise<WebhookPlatformModel.EventConfigResponse>;
    /**
     * @param {WebhookPlatformValidator.GetDeliveryReportsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.EventProcessReports>} - Success response
     * @name getDeliveryReports
     * @summary: Get processed events report for a company
     * @description: Retrieve a list of processed events for a specific company based on the provided filters. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getDeliveryReports/).
     */
    getDeliveryReports({ body, requestHeaders }?: WebhookPlatformValidator.GetDeliveryReportsParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.EventProcessReports>;
    /**
     * @param {WebhookPlatformValidator.GetEventCountsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.FailedEventsCountSuccessResponse>}
     *   - Success response
     *
     * @name getEventCounts
     * @summary: Get the count of failed events for a company within a specified date range.
     * @description: Retrieves the count of failed events for a specific company within the specified date range. The user can filter the count based on specific event types if provided.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getEventCounts/).
     */
    getEventCounts({ body, requestHeaders }?: WebhookPlatformValidator.GetEventCountsParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.FailedEventsCountSuccessResponse>;
    /**
     * @param {WebhookPlatformValidator.GetHistoricalReportsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.HistoryResponse>} - Success response
     * @name getHistoricalReports
     * @summary: Get report download history
     * @description: Retrieve history reports for a specific company based on the provided filters. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getHistoricalReports/).
     */
    getHistoricalReports({ body, requestHeaders }?: WebhookPlatformValidator.GetHistoricalReportsParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.HistoryResponse>;
    /**
     * @param {WebhookPlatformValidator.GetManualRetryStatusParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.RetryStatusResponse>} - Success response
     * @name getManualRetryStatus
     * @summary: Get the retry status for a company's failed events.
     * @description: Retrieves the status of retry for a specific company's failed events. This endpoint returns the total number of events, the count of successfully retried events, the count of failed retry attempts, and the overall status of the retry process.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getManualRetryStatus/).
     */
    getManualRetryStatus({ requestHeaders }?: any, { responseHeaders }?: object): Promise<WebhookPlatformModel.RetryStatusResponse>;
    /**
     * @param {WebhookPlatformValidator.GetReportFiltersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.ReportFilterResponse>} - Success response
     * @name getReportFilters
     * @summary: Get filters for a company
     * @description: Retrieve filters for a specific company based on the provided subscriber IDs. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getReportFilters/).
     */
    getReportFilters({ body, requestHeaders }?: WebhookPlatformValidator.GetReportFiltersParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.ReportFilterResponse>;
    /**
     * @param {WebhookPlatformValidator.GetSubscriberByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberResponse>} - Success response
     * @name getSubscriberById
     * @summary: Get Subscriber By Subscriber ID
     * @description: Get Subscriber By Subscriber ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getSubscriberById/).
     */
    getSubscriberById({ subscriberId, requestHeaders }?: WebhookPlatformValidator.GetSubscriberByIdParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberResponse>;
    /**
     * @param {WebhookPlatformValidator.GetSubscribersByCompanyParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberResponse>} - Success response
     * @name getSubscribersByCompany
     * @summary: Get Subscribers By Company ID
     * @description: Get Subscribers By CompanyId - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getSubscribersByCompany/).
     */
    getSubscribersByCompany({ pageNo, pageSize, extensionId, requestHeaders }?: WebhookPlatformValidator.GetSubscribersByCompanyParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberResponse>;
    /**
     * @param {WebhookPlatformValidator.GetSubscribersByExtensionIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberConfigList>} - Success response
     * @name getSubscribersByExtensionId
     * @summary: Get Subscribers By Extension ID
     * @description: Get Subscribers By ExtensionID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getSubscribersByExtensionId/).
     */
    getSubscribersByExtensionId({ extensionId, pageNo, pageSize, requestHeaders }?: WebhookPlatformValidator.GetSubscribersByExtensionIdParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberConfigList>;
    /**
     * @param {WebhookPlatformValidator.ManualRetryCancelParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.EventSuccessResponse>} - Success response
     * @name manualRetryCancel
     * @summary: Cancel the active manual retry for a company's failed events.
     * @description: Cancels the active manual retry for a specific company's failed events. If a manual retry is currently in progress, it will be cancelled.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/manualRetryCancel/).
     */
    manualRetryCancel({ requestHeaders }?: any, { responseHeaders }?: object): Promise<WebhookPlatformModel.EventSuccessResponse>;
    /**
     * @param {WebhookPlatformValidator.ManualRetryOfFailedEventParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.EventProcessedSuccessResponse>} -
     *   Success response
     * @name manualRetryOfFailedEvent
     * @summary: Initiate a manual retry for event processing.
     * @description: Initiates a manual retry for event processing for a specific company. This endpoint allows the user to specify the date range (start_date and end_date) within which the events should be retried.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/manualRetryOfFailedEvent/).
     */
    manualRetryOfFailedEvent({ body, requestHeaders }?: WebhookPlatformValidator.ManualRetryOfFailedEventParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.EventProcessedSuccessResponse>;
    /**
     * @param {WebhookPlatformValidator.PingWebhookParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.PingWebhookResponse>} - Success response
     * @name pingWebhook
     * @summary: Ping and validate webhook url
     * @description: Ping and validate webhook url - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/pingWebhook/).
     */
    pingWebhook({ body, requestHeaders }?: WebhookPlatformValidator.PingWebhookParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.PingWebhookResponse>;
    /**
     * @param {WebhookPlatformValidator.RegisterSubscriberToEventParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberConfig>} - Success response
     * @name registerSubscriberToEvent
     * @summary: Register Subscriber
     * @description: Register Subscriber - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/registerSubscriberToEvent/).
     */
    registerSubscriberToEvent({ body, requestHeaders }?: WebhookPlatformValidator.RegisterSubscriberToEventParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberConfig>;
    /**
     * @param {WebhookPlatformValidator.UpdateSubscriberConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberConfig>} - Success response
     * @name updateSubscriberConfig
     * @summary: Update Subscriber
     * @description: Update Subscriber - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/updateSubscriberConfig/).
     */
    updateSubscriberConfig({ body, requestHeaders }?: WebhookPlatformValidator.UpdateSubscriberConfigParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberConfig>;
}
import WebhookPlatformValidator = require("./WebhookPlatformValidator");
import WebhookPlatformModel = require("./WebhookPlatformModel");
