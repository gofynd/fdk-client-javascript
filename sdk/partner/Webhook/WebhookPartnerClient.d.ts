export = Webhook;
declare class Webhook {
    constructor(config: any);
    config: any;
    /**
     * @param {WebhookPartnerValidator.ResponseTimeSummaryParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.ResponseTimeTs>} - Success response
     * @name responseTimeSummary
     * @summary: Response time summary
     * @description: Response time summary - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/responseTimeSummary/).
     */
    responseTimeSummary({ extensionId, startDate, endDate, requestHeaders }?: WebhookPartnerValidator.ResponseTimeSummaryParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.ResponseTimeTs>;
    /**
     * @param {WebhookPartnerValidator.FetchDeliverySummaryParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.DeliverySummaryResult>} - Success response
     * @name fetchDeliverySummary
     * @summary: Webhook delivery summary
     * @description: Webhook delivery summary - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/fetchDeliverySummary/).
     */
    fetchDeliverySummary({ extensionId, startDate, endDate, requestHeaders }?: WebhookPartnerValidator.FetchDeliverySummaryParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.DeliverySummaryResult>;
    /**
     * @param {WebhookPartnerValidator.GetDeliveryDetailInsightsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.DeliveryDetailsResult>} - Success response
     * @name getDeliveryDetailInsights
     * @summary: Get the insights of delivery details of the events that was pushed to subscribers
     * @description: Get the delivery details insights - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/getDeliveryDetailInsights/).
     */
    getDeliveryDetailInsights({ extensionId, body, requestHeaders }?: WebhookPartnerValidator.GetDeliveryDetailInsightsParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.DeliveryDetailsResult>;
    /**
     * @param {WebhookPartnerValidator.FetchDeliveryTsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.DeliveryTsResult>} - Success response
     * @name fetchDeliveryTs
     * @summary: Webhook delivery ts
     * @description: Webhook delivery ts - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/fetchDeliveryTs/).
     */
    fetchDeliveryTs({ extensionId, startDate, endDate, requestHeaders }?: WebhookPartnerValidator.FetchDeliveryTsParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.DeliveryTsResult>;
    /**
     * @param {WebhookPartnerValidator.FetchReportFiltersParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.FilterReportResult[]>} - Success response
     * @name fetchReportFilters
     * @summary: Fetch webhook report filters
     * @description: Fetch webhook report filters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/fetchReportFilters/).
     */
    fetchReportFilters({ extensionId, startDate, endDate, pageNo, pageSize, requestHeaders }?: WebhookPartnerValidator.FetchReportFiltersParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.FilterReportResult[]>;
    /**
     * @param {WebhookPartnerValidator.CancelReportDownloadParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.CancelDownloadResult>} - Success response
     * @name cancelReportDownload
     * @summary: Cancel report download job
     * @description: Cancel report download job - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/cancelReportDownload/).
     */
    cancelReportDownload({ extensionId, filename, requestHeaders }?: WebhookPartnerValidator.CancelReportDownloadParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.CancelDownloadResult>;
    /**
     * @param {WebhookPartnerValidator.GetHistoricalReportsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.HistoryResult>} - Success response
     * @name getHistoricalReports
     * @summary: Get report download history.
     * @description: Retrieve history reports for a specific company based on the provided filters.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/getHistoricalReports/).
     */
    getHistoricalReports({ extensionId, body, requestHeaders }?: WebhookPartnerValidator.GetHistoricalReportsParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.HistoryResult>;
    /**
     * @param {WebhookPartnerValidator.GetInvalidEventListParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.InvalidEventsResult[]>} - Success response
     * @name getInvalidEventList
     * @summary: Get invalid event list
     * @description: Get invalid event list.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/getInvalidEventList/).
     */
    getInvalidEventList({ extensionId, body, requestHeaders }?: WebhookPartnerValidator.GetInvalidEventListParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.InvalidEventsResult[]>;
    /**
     * @param {WebhookPartnerValidator.FetchSubscribersParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.SubscriberConfigDetails>} - Success response
     * @name fetchSubscribers
     * @summary: Fetch subscriber by filters
     * @description: Fetch subscriber by filters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/fetchSubscribers/).
     */
    fetchSubscribers({ extensionId, requestHeaders }?: WebhookPartnerValidator.FetchSubscribersParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.SubscriberConfigDetails>;
    /**
     * @param {WebhookPartnerValidator.UpdateSubscriberParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.SubscriberUpdateResult>} - Success response
     * @name updateSubscriber
     * @summary: Update subscriber status by id.
     * @description: Update subscriber status by id.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/updateSubscriber/).
     */
    updateSubscriber({ extensionId, subscriberId, body, requestHeaders }?: WebhookPartnerValidator.UpdateSubscriberParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.SubscriberUpdateResult>;
}
import WebhookPartnerModel = require("./WebhookPartnerModel");
