export = Webhook;
declare class Webhook {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.filename - Filename of the specific report export to cancel.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CancelResponse>} - Success response
     * @summary: Cancel a report export
     * @description: Cancel the export of a specific report for a company.
     */
    cancelJobByName({ filename }?: {
        filename: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CancelResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EventProcessRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @summary: Download processed events report for a company
     * @description: Download reports for a specific company based on the provided filters.
     */
    downloadDeliveryReport({ body }?: {
        body: EventProcessRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EventConfigResponse>} - Success response
     * @summary:
     * @description: Get All Webhook Events
     */
    fetchAllEventConfigurations({ headers }?: any): Promise<EventConfigResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EventProcessRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EventProcessReports>} - Success response
     * @summary: Get processed events report for a company
     * @description: Retrieve a list of processed events for a specific company based on the provided filters.
     */
    getDeliveryReports({ body }?: {
        body: EventProcessRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<EventProcessReports>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EventProcessRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FailedEventsCountSuccessResponse>} - Success response
     * @summary: Get the count of failed events for a company within a specified date range.
     * @description: Retrieves the count of failed events for a specific company within the specified date range. The user can filter the count based on specific event types if provided.
     */
    getEventCounts({ body }?: {
        body: EventProcessRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<FailedEventsCountSuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {HistoryPayload} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<HistoryResponse>} - Success response
     * @summary: Get report download history
     * @description: Retrieve history reports for a specific company based on the provided filters.
     */
    getHistoricalReports({ body }?: {
        body: HistoryPayload;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<HistoryResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RetryStatusResponse>} - Success response
     * @summary: Get the retry status for a company's failed events.
     * @description: Retrieves the status of retry for a specific company's failed events. This endpoint returns the total number of events, the count of successfully retried events, the count of failed retry attempts, and the overall status of the retry process.
     */
    getManualRetryStatus({ headers }?: any): Promise<RetryStatusResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ReportFiltersPayload} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ReportFilterResponse>} - Success response
     * @summary: Get filters for a company
     * @description: Retrieve filters for a specific company based on the provided subscriber IDs.
     */
    getReportFilters({ body }?: {
        body: ReportFiltersPayload;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ReportFilterResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.subscriberId - The ID of the company for which manual
     *   retry is to be initiated.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SubscriberResponse>} - Success response
     * @summary: Get Subscriber By Subscriber ID
     * @description: Get Subscriber By Subscriber ID
     */
    getSubscriberById({ subscriberId }?: {
        subscriberId: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SubscriberResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Page Number
     * @param {number} [arg.pageSize] - Page Size
     * @param {number} [arg.extensionId] - Extension_id
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SubscriberResponse>} - Success response
     * @summary: Get Subscribers By Company ID
     * @description: Get Subscribers By CompanyId
     */
    getSubscribersByCompany({ pageNo, pageSize, extensionId }?: {
        pageNo?: number;
        pageSize?: number;
        extensionId?: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SubscriberResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Page Number
     * @param {number} [arg.pageSize] - Page Size
     * @param {number} arg.extensionId - The ID of the company for which manual
     *   retry is to be initiated.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SubscriberConfigList>} - Success response
     * @summary: Get Subscribers By Extension ID
     * @description: Get Subscribers By ExtensionID
     */
    getSubscribersByExtensionId({ extensionId, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        extensionId: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SubscriberConfigList>;
    /**
     * @param {Object} arg - Arg object.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EventSuccessResponse>} - Success response
     * @summary: Cancel the active manual retry for a company's failed events.
     * @description: Cancels the active manual retry for a specific company's failed events. If a manual retry is currently in progress, it will be cancelled.
     */
    manualRetryCancel({ headers }?: any): Promise<EventSuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EventProcessRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EventProcessedSuccessResponse>} - Success response
     * @summary: Initiate a manual retry for event processing.
     * @description: Initiates a manual retry for event processing for a specific company. This endpoint allows the user to specify the date range (start_date and end_date) within which the events should be retried.
     */
    manualRetryOfFailedEvent({ body }?: {
        body: EventProcessRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<EventProcessedSuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PingWebhook} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PingWebhookResponse>} - Success response
     * @summary: Ping and validate webhook url
     * @description: Ping and validate webhook url
     */
    pingWebhook({ body }?: {
        body: PingWebhook;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PingWebhookResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SubscriberConfig} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SubscriberConfig>} - Success response
     * @summary: Register Subscriber
     * @description: Register Subscriber
     */
    registerSubscriberToEvent({ body }?: {
        body: SubscriberConfig;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SubscriberConfig>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SubscriberConfig} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SubscriberConfig>} - Success response
     * @summary: Update Subscriber
     * @description: Update Subscriber
     */
    updateSubscriberConfig({ body }?: {
        body: SubscriberConfig;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SubscriberConfig>;
}
