export = Webhook;
declare class Webhook {
    constructor(config: any);
    config: any;
    /**
     * @param {WebhookPartnerValidator.FetchDeliverySummaryParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.DeliverySummaryResponse>} - Success response
     * @name fetchDeliverySummary
     * @summary: Webhook delivery summary
     * @description: Webhook delivery summary - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/fetchDeliverySummary/).
     */
    fetchDeliverySummary({ extensionId, startDate, endDate, requestHeaders }?: WebhookPartnerValidator.FetchDeliverySummaryParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.DeliverySummaryResponse>;
    /**
     * @param {WebhookPartnerValidator.GetDeliveryDetailInsightsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.DeliveryDetailsResponse>} - Success response
     * @name getDeliveryDetailInsights
     * @summary: Get the insights of delivery details of the events that was pushed to subscribers
     * @description: Get the delivery details insights - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/getDeliveryDetailInsights/).
     */
    getDeliveryDetailInsights({ extensionId, body, requestHeaders }?: WebhookPartnerValidator.GetDeliveryDetailInsightsParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.DeliveryDetailsResponse>;
    /**
     * @param {WebhookPartnerValidator.FetchDeliveryTsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.DeliveryTsResponse>} - Success response
     * @name fetchDeliveryTs
     * @summary: Webhook delivery ts
     * @description: Webhook delivery ts - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/fetchDeliveryTs/).
     */
    fetchDeliveryTs({ extensionId, startDate, endDate, requestHeaders }?: WebhookPartnerValidator.FetchDeliveryTsParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.DeliveryTsResponse>;
    /**
     * @param {WebhookPartnerValidator.FetchReportFiltersParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.FilterReportResponse[]>} - Success response
     * @name fetchReportFilters
     * @summary: Fetch webhook report filters
     * @description: Fetch webhook report filters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/fetchReportFilters/).
     */
    fetchReportFilters({ extensionId, startDate, endDate, pageNo, pageSize, requestHeaders }?: WebhookPartnerValidator.FetchReportFiltersParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.FilterReportResponse[]>;
    /**
     * @param {WebhookPartnerValidator.CancelReportDownloadParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.CancelDownloadResponse>} - Success response
     * @name cancelReportDownload
     * @summary: Cancel report download job
     * @description: Cancel report download job - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/cancelReportDownload/).
     */
    cancelReportDownload({ extensionId, filename, requestHeaders }?: WebhookPartnerValidator.CancelReportDownloadParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.CancelDownloadResponse>;
    /**
     * @param {WebhookPartnerValidator.GetHistoricalReportsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.HistoryResponse>} - Success response
     * @name getHistoricalReports
     * @summary: Get report download history.
     * @description: Retrieve history reports for a specific company based on the provided filters.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/getHistoricalReports/).
     */
    getHistoricalReports({ extensionId, body, requestHeaders }?: WebhookPartnerValidator.GetHistoricalReportsParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.HistoryResponse>;
    /**
     * @param {WebhookPartnerValidator.GetInvalidEventListParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.InvalidEventsResponse[]>} - Success response
     * @name getInvalidEventList
     * @summary: Get invalid event list
     * @description: Get invalid event list.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/getInvalidEventList/).
     */
    getInvalidEventList({ extensionId, body, requestHeaders }?: WebhookPartnerValidator.GetInvalidEventListParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.InvalidEventsResponse[]>;
    /**
     * @param {WebhookPartnerValidator.FetchSubscribersParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.SubscriberConfigResponse>} - Success response
     * @name fetchSubscribers
     * @summary: Fetch subscriber by filters
     * @description: Fetch subscriber by filters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/fetchSubscribers/).
     */
    fetchSubscribers({ extensionId, requestHeaders }?: WebhookPartnerValidator.FetchSubscribersParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.SubscriberConfigResponse>;
    /**
     * @param {WebhookPartnerValidator.UpdateSubscriberParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.UpdateSubscriberResponse>} - Success response
     * @name updateSubscriber
     * @summary: Update subscriber status by id.
     * @description: Update subscriber status by id.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/updateSubscriber/).
     */
    updateSubscriber({ extensionId, subscriberId, body, requestHeaders }?: WebhookPartnerValidator.UpdateSubscriberParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.UpdateSubscriberResponse>;
    /**
     * @param {WebhookPartnerValidator.CreateKafkaConfigurationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.KafkaConfigResponse>} - Success response
     * @name createKafkaConfiguration
     * @summary: Create Kafka configuration.
     * @description: Create kafka configuration which will be used by sureshot to push event to corresponding kafka broker.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/createKafkaConfiguration/).
     */
    createKafkaConfiguration({ extensionId, body, requestHeaders }?: WebhookPartnerValidator.CreateKafkaConfigurationParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.KafkaConfigResponse>;
    /**
     * @param {WebhookPartnerValidator.FetchKafkaConfigurationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.KafkaConfigResponse>} - Success response
     * @name fetchKafkaConfiguration
     * @summary: Fetch Kafka configuration.
     * @description: Fetch kafka configuration which will be used by sureshot to push event to corresponding kafka broker.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/fetchKafkaConfiguration/).
     */
    fetchKafkaConfiguration({ extensionId, requestHeaders }?: WebhookPartnerValidator.FetchKafkaConfigurationParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.KafkaConfigResponse>;
    /**
     * @param {WebhookPartnerValidator.UpdateKafkaConfigurationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.KafkaConfigResponse>} - Success response
     * @name updateKafkaConfiguration
     * @summary: Update Kafka configuration.
     * @description: Update kafka configuration which will be used by sureshot to push event to corresponding kafka broker.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/updateKafkaConfiguration/).
     */
    updateKafkaConfiguration({ extensionId, body, requestHeaders }?: WebhookPartnerValidator.UpdateKafkaConfigurationParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.KafkaConfigResponse>;
    /**
     * @param {WebhookPartnerValidator.ValidateKafkaConfigurationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<WebhookPartnerModel.KafkaConfigValidateResponse>} -
     *   Success response
     * @name validateKafkaConfiguration
     * @summary: Validate Kafka configuration.
     * @description: Validate kafka configuration which will be used by sureshot to push event to corresponding kafka broker.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/validateKafkaConfiguration/).
     */
    validateKafkaConfiguration({ extensionId, body, requestHeaders }?: WebhookPartnerValidator.ValidateKafkaConfigurationParam, { responseHeaders }?: object): Promise<WebhookPartnerModel.KafkaConfigValidateResponse>;
}
import WebhookPartnerModel = require("sdk/output/javascript/code/sdk/partner/Webhook/WebhookPartnerModel");
