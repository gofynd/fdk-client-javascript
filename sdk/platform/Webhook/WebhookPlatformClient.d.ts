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
     * @summary: Cancel job by name
     * @description: It will cancel export job triggerd by user in order to fetch
     * historical delivery summery - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/cancelJobByName/).
     */
    cancelJobByName({ filename, requestHeaders }?: WebhookPlatformValidator.CancelJobByNameParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.CancelResponse>;
    /**
     * @param {WebhookPlatformValidator.DownloadDeliveryReportParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.DownloadReportResponse>} - Success response
     * @name downloadDeliveryReport
     * @summary: Download delivery report
     * @description: Download detailed delivery reports for events. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/downloadDeliveryReport/).
     */
    downloadDeliveryReport({ body, requestHeaders }?: WebhookPlatformValidator.DownloadDeliveryReportParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.DownloadReportResponse>;
    /**
     * @param {WebhookPlatformValidator.FetchAllEventConfigurationsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.EventConfigResponse>} - Success response
     * @name fetchAllEventConfigurations
     * @summary: List event configurations
     * @description: Retrieve all configurations for event handling. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/fetchAllEventConfigurations/).
     */
    fetchAllEventConfigurations({ requestHeaders }?: any, { responseHeaders }?: object): Promise<WebhookPlatformModel.EventConfigResponse>;
    /**
     * @param {WebhookPlatformValidator.GetDeliveryReportsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.EventProcessReports>} - Success response
     * @name getDeliveryReports
     * @summary: Get delivery reports
     * @description: Retrieve reports on the delivery status of events. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getDeliveryReports/).
     */
    getDeliveryReports({ body, requestHeaders }?: WebhookPlatformValidator.GetDeliveryReportsParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.EventProcessReports>;
    /**
     * @param {WebhookPlatformValidator.GetEventCountsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.RetryCountResponse>} - Success response
     * @name getEventCounts
     * @summary: Get event counts
     * @description: Retrieve the counts of events based on their status. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getEventCounts/).
     */
    getEventCounts({ body, requestHeaders }?: WebhookPlatformValidator.GetEventCountsParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.RetryCountResponse>;
    /**
     * @param {WebhookPlatformValidator.GetHistoricalReportsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.HistoryResponse>} - Success response
     * @name getHistoricalReports
     * @summary: Get historical reports
     * @description: Retrieve historical reports of webhook events. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getHistoricalReports/).
     */
    getHistoricalReports({ body, requestHeaders }?: WebhookPlatformValidator.GetHistoricalReportsParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.HistoryResponse>;
    /**
     * @param {WebhookPlatformValidator.GetManualRetryStatusParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.RetryStatusResponse>} - Success response
     * @name getManualRetryStatus
     * @summary: Get manual retry status
     * @description: Check the status of a manual retry operation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getManualRetryStatus/).
     */
    getManualRetryStatus({ requestHeaders }?: any, { responseHeaders }?: object): Promise<WebhookPlatformModel.RetryStatusResponse>;
    /**
     * @param {WebhookPlatformValidator.GetReportFiltersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.ReportFilterResponse[]>} - Success response
     * @name getReportFilters
     * @summary: Get report filters
     * @description: Retrieve filters used for generating reports. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getReportFilters/).
     */
    getReportFilters({ body, requestHeaders }?: WebhookPlatformValidator.GetReportFiltersParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.ReportFilterResponse[]>;
    /**
     * @param {WebhookPlatformValidator.GetSubscriberByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberResponse>} - Success response
     * @name getSubscriberById
     * @summary: Get a subscriber
     * @description: Retrieve a subscriber's details by their unique identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getSubscriberById/).
     */
    getSubscriberById({ subscriberId, requestHeaders }?: WebhookPlatformValidator.GetSubscriberByIdParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberResponse>;
    /**
     * @param {WebhookPlatformValidator.GetSubscribersByCompanyParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberConfigList>} - Success response
     * @name getSubscribersByCompany
     * @summary: List subscribers by company
     * @description: Retrieve subscribers associated with a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getSubscribersByCompany/).
     */
    getSubscribersByCompany({ pageNo, pageSize, extensionId, requestHeaders }?: WebhookPlatformValidator.GetSubscribersByCompanyParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberConfigList>;
    /**
     * @param {WebhookPlatformValidator.GetSubscribersByExtensionIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberConfigList>} - Success response
     * @name getSubscribersByExtensionId
     * @summary: List subscribers by extension ID
     * @description: Retrieve subscribers associated with a specific extension. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getSubscribersByExtensionId/).
     */
    getSubscribersByExtensionId({ extensionId, pageNo, pageSize, requestHeaders }?: WebhookPlatformValidator.GetSubscribersByExtensionIdParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberConfigList>;
    /**
     * @param {WebhookPlatformValidator.ManualRetryCancelParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<string>} - Success response
     * @name manualRetryCancel
     * @summary: Manual retry cancellation
     * @description: Cancel a manual retry operation for a failed event. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/manualRetryCancel/).
     */
    manualRetryCancel({ requestHeaders }?: any, { responseHeaders }?: object): Promise<string>;
    /**
     * @param {WebhookPlatformValidator.ManualRetryOfFailedEventParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.RetrySuccessResponse>} - Success response
     * @name manualRetryOfFailedEvent
     * @summary: Manual retry of failed event
     * @description: Trigger a manual retry for an event that failed to deliver. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/manualRetryOfFailedEvent/).
     */
    manualRetryOfFailedEvent({ body, requestHeaders }?: WebhookPlatformValidator.ManualRetryOfFailedEventParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.RetrySuccessResponse>;
    /**
     * @param {WebhookPlatformValidator.PingWebhookParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.PingWebhookResponse>} - Success response
     * @name pingWebhook
     * @summary: Ping webhook
     * @description: Send a test ping to a webhook for verification. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/pingWebhook/).
     */
    pingWebhook({ body, requestHeaders }?: WebhookPlatformValidator.PingWebhookParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.PingWebhookResponse>;
    /**
     * @param {WebhookPlatformValidator.RegisterSubscriberToEventParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberConfigResponse>} -
     *   Success response
     * @name registerSubscriberToEvent
     * @summary: Register subscriber to event
     * @description: Add a subscriber to receive events of a specific type. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/registerSubscriberToEvent/).
     */
    registerSubscriberToEvent({ body, requestHeaders }?: WebhookPlatformValidator.RegisterSubscriberToEventParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberConfigResponse>;
    /**
     * @param {WebhookPlatformValidator.UpdateSubscriberConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberConfigResponse>} -
     *   Success response
     * @name updateSubscriberConfig
     * @summary: Update a subscriber config
     * @description: Modify and update subscriber configuration settings. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/updateSubscriberConfig/).
     */
    updateSubscriberConfig({ body, requestHeaders }?: WebhookPlatformValidator.UpdateSubscriberConfigParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberConfigResponse>;
}
import WebhookPlatformValidator = require("sdk/output/javascript/code/sdk/platform/Webhook/WebhookPlatformValidator");
import WebhookPlatformModel = require("sdk/output/javascript/code/sdk/platform/Webhook/WebhookPlatformModel");
