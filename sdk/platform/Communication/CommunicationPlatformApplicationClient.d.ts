export = Communication;
declare class Communication {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateAudienceParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
     * @name createAudience
     * @summary: Create audience
     * @description: Audience is used to import CSV files containing emails, phone numbers, and other variables in order to populate email/SMS templates for bulk delivery via a Campaign. Use this API to create audience. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createAudience/).
     */
    createAudience({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.CreateAudienceParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.Audience>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateBigQueryHeadersParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name createBigQueryHeaders
     * @summary: Create big query headers
     * @description: Create big query headers - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createBigQueryHeaders/).
     */
    createBigQueryHeaders({ requestHeaders }?: any, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateBigQueryNCountParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name createBigQueryNCount
     * @summary: Create big query n count
     * @description: Create big query n count - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createBigQueryNCount/).
     */
    createBigQueryNCount({ requestHeaders }?: any, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateBigQueryRowCountParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name createBigQueryRowCount
     * @summary: Create big query row count
     * @description: Create big query row count - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createBigQueryRowCount/).
     */
    createBigQueryRowCount({ requestHeaders }?: any, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateCampaignParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
     * @name createCampaign
     * @summary: Create campaign
     * @description: Create campaign - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createCampaign/).
     */
    createCampaign({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.CreateCampaignParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.Campaign>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateEmailProviderParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
     * @name createEmailProvider
     * @summary: Create email provider
     * @description: Create email provider - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createEmailProvider/).
     */
    createEmailProvider({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.CreateEmailProviderParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EmailProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateEmailTemplateParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EmailTemplate>} - Success response
     * @name createEmailTemplate
     * @summary: Create email template
     * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to create an email template. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createEmailTemplate/).
     */
    createEmailTemplate({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.CreateEmailTemplateParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EmailTemplate>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateEventSubscriptionsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EventSubscriptionsBulkUpdateResponse>}
     *   - Success response
     *
     * @name createEventSubscriptions
     * @summary: Create event subscriptions
     * @description: Create event subscriptions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createEventSubscriptions/).
     */
    createEventSubscriptions({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.CreateEventSubscriptionsParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EventSubscriptionsBulkUpdateResponse>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateEventSubscriptionsByBulkParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<
     *   CommunicationPlatformModel.EventSubscriptionsBulkUpdateResponse[]
     * >}
     *   - Success response
     *
     * @name createEventSubscriptionsByBulk
     * @summary: Create event subscriptions by bulk
     * @description: Create event subscriptions by bulk - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createEventSubscriptionsByBulk/).
     */
    createEventSubscriptionsByBulk({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.CreateEventSubscriptionsByBulkParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EventSubscriptionsBulkUpdateResponse[]>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateJobsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.CreateJobsRes>} - Success response
     * @name createJobs
     * @summary: Create jobs
     * @description: Create jobs - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createJobs/).
     */
    createJobs({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.CreateJobsParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.CreateJobsRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateSmsProviderParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name createSmsProvider
     * @summary: Create sms provider
     * @description: Create sms provider - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createSmsProvider/).
     */
    createSmsProvider({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.CreateSmsProviderParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateSmsTemplateParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsTemplate>} - Success response
     * @name createSmsTemplate
     * @summary: Create sms template
     * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to create an sms template. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createSmsTemplate/).
     */
    createSmsTemplate({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.CreateSmsTemplateParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SmsTemplate>;
    /**
     * @param {CommunicationPlatformApplicationValidator.DeleteAudienceByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
     * @name deleteAudienceById
     * @summary: Delete audience by id
     * @description: Audience is used to import CSV files containing emails, phone numbers, and other variables in order to populate email/SMS templates for bulk delivery via a Campaign. Use this API to delete audience by id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/deleteAudienceById/).
     */
    deleteAudienceById({ id, body, requestHeaders }?: CommunicationPlatformApplicationValidator.DeleteAudienceByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.Audience>;
    /**
     * @param {CommunicationPlatformApplicationValidator.DeleteEmailProviderByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.GenericDelete>} - Success response
     * @name deleteEmailProviderById
     * @summary: Delete email provider by id
     * @description: Delete email provider by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/deleteEmailProviderById/).
     */
    deleteEmailProviderById({ id, requestHeaders }?: CommunicationPlatformApplicationValidator.DeleteEmailProviderByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.GenericDelete>;
    /**
     * @param {CommunicationPlatformApplicationValidator.DeleteEmailTemplateByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.GenericDelete>} - Success response
     * @name deleteEmailTemplateById
     * @summary: Delete email template by id
     * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to delete an email template by id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/deleteEmailTemplateById/).
     */
    deleteEmailTemplateById({ id, requestHeaders }?: CommunicationPlatformApplicationValidator.DeleteEmailTemplateByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.GenericDelete>;
    /**
     * @param {CommunicationPlatformApplicationValidator.DeleteEventSubscriptionsByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.GenericDelete>} - Success response
     * @name deleteEventSubscriptionsById
     * @summary: Create event subscriptions
     * @description: Create event subscriptions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/deleteEventSubscriptionsById/).
     */
    deleteEventSubscriptionsById({ id, requestHeaders }?: CommunicationPlatformApplicationValidator.DeleteEventSubscriptionsByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.GenericDelete>;
    /**
     * @param {CommunicationPlatformApplicationValidator.DeleteSmsProviderByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.GenericDelete>} - Success response
     * @name deleteSmsProviderById
     * @summary: Delete sms provider by id
     * @description: Delete sms provider by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/deleteSmsProviderById/).
     */
    deleteSmsProviderById({ id, requestHeaders }?: CommunicationPlatformApplicationValidator.DeleteSmsProviderByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.GenericDelete>;
    /**
     * @param {CommunicationPlatformApplicationValidator.DeleteSmsTemplateByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.GenericDelete>} - Success response
     * @name deleteSmsTemplateById
     * @summary: Delete sms template by id
     * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to delete an sms template by ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/deleteSmsTemplateById/).
     */
    deleteSmsTemplateById({ id, requestHeaders }?: CommunicationPlatformApplicationValidator.DeleteSmsTemplateByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.GenericDelete>;
    /**
     * @param {CommunicationPlatformApplicationValidator.EditEventSubscriptionsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EventSubscriptionsBulkUpdateResponse>}
     *   - Success response
     *
     * @name editEventSubscriptions
     * @summary: Create event subscriptions
     * @description: Create event subscriptions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/editEventSubscriptions/).
     */
    editEventSubscriptions({ id, body, requestHeaders }?: CommunicationPlatformApplicationValidator.EditEventSubscriptionsParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EventSubscriptionsBulkUpdateResponse>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetAppProvidersParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.AppProvider>} - Success response
     * @name getAppProviders
     * @summary: Get app providers
     * @description: Using this API will return a list of application providers. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getAppProviders/).
     */
    getAppProviders({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CommunicationPlatformModel.AppProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetAudienceByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
     * @name getAudienceById
     * @summary: Get audience by id
     * @description: Audience is used to import CSV files containing emails, phone numbers, and other variables in order to populate email/SMS templates for bulk delivery via a Campaign. Use this API to get audiences by Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getAudienceById/).
     */
    getAudienceById({ id, requestHeaders }?: CommunicationPlatformApplicationValidator.GetAudienceByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.Audience>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetAudiencesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Audiences>} - Success response
     * @name getAudiences
     * @summary: Get audiences
     * @description: Audience is used to import CSV files containing emails, phone numbers, and other variables in order to populate email/SMS templates for bulk delivery via a Campaign. Use this API to get audiences. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getAudiences/).
     */
    getAudiences({ pageNo, pageSize, sort, query, requestHeaders }?: CommunicationPlatformApplicationValidator.GetAudiencesParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.Audiences>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @param {Object} [arg.query] - To search based on plain text
     * @returns {Paginator<CommunicationPlatformModel.Audiences>}
     * @summary: Get audiences
     * @description: Audience is used to import CSV files containing emails, phone numbers, and other variables in order to populate email/SMS templates for bulk delivery via a Campaign. Use this API to get audiences.
     */
    getAudiencesPaginator({ companyId, applicationId, pageSize, sort, query, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }): Paginator<CommunicationPlatformModel.Audiences>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetBigQueryHeadersByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getBigQueryHeadersById
     * @summary: Get big query headers by id
     * @description: Get big query headers by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getBigQueryHeadersById/).
     */
    getBigQueryHeadersById({ id, requestHeaders }?: CommunicationPlatformApplicationValidator.GetBigQueryHeadersByIdParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetBigQueryRowCountByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getBigQueryRowCountById
     * @summary: Get big query row count by id
     * @description: Get big query row count by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getBigQueryRowCountById/).
     */
    getBigQueryRowCountById({ id, requestHeaders }?: CommunicationPlatformApplicationValidator.GetBigQueryRowCountByIdParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetCampaignByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
     * @name getCampaignById
     * @summary: Get campaign by id
     * @description: Get campaign by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getCampaignById/).
     */
    getCampaignById({ id, requestHeaders }?: CommunicationPlatformApplicationValidator.GetCampaignByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.Campaign>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetCampaignsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Campaigns>} - Success response
     * @name getCampaigns
     * @summary: Get campaigns
     * @description: Get campaigns - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getCampaigns/).
     */
    getCampaigns({ query, pageNo, pageSize, sort, requestHeaders }?: CommunicationPlatformApplicationValidator.GetCampaignsParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.Campaigns>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetCommunicationLogsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Logs>} - Success response
     * @name getCommunicationLogs
     * @summary: Get communication logs
     * @description: Get communication logs - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getCommunicationLogs/).
     */
    getCommunicationLogs({ pageId, pageSize, sort, query, requestHeaders }?: CommunicationPlatformApplicationValidator.GetCommunicationLogsParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.Logs>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on _id
     * @param {Object} [arg.query] -
     * @returns {Paginator<CommunicationPlatformModel.Logs>}
     * @summary: Get communication logs
     * @description: Get communication logs
     */
    getCommunicationLogsPaginator({ companyId, applicationId, pageSize, sort, query, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }): Paginator<CommunicationPlatformModel.Logs>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetDefaultSmsProvidersParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.DefaultSmsProviders[]>} -
     *   Success response
     * @name getDefaultSmsProviders
     * @summary: Get default sms providers
     * @description: Get default sms providers - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getDefaultSmsProviders/).
     */
    getDefaultSmsProviders({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CommunicationPlatformModel.DefaultSmsProviders[]>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetDummyDatasourcesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.DummyDatasources[]>} -
     *   Success response
     * @name getDummyDatasources
     * @summary: Get dummy data sources
     * @description: Audience is used to import CSV files containing emails, phone numbers, and other variables in order to populate email/SMS templates for bulk delivery via a Campaign. Use this API to get dummy data sources. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getDummyDatasources/).
     */
    getDummyDatasources({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CommunicationPlatformModel.DummyDatasources[]>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetDummyDatasourcesMetaParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.DummyDatasourcesMeta>} -
     *   Success response
     * @name getDummyDatasourcesMeta
     * @summary: Get dummy data sources meta
     * @description: Audience is used to import CSV files containing emails, phone numbers, and other variables in order to populate email/SMS templates for bulk delivery via a Campaign. Use this API to get dummy data sources meta. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getDummyDatasourcesMeta/).
     */
    getDummyDatasourcesMeta({ id, requestHeaders }?: CommunicationPlatformApplicationValidator.GetDummyDatasourcesMetaParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.DummyDatasourcesMeta>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetEmailProviderByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
     * @name getEmailProviderById
     * @summary: Get email provider by id
     * @description: Get email provider by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEmailProviderById/).
     */
    getEmailProviderById({ id, requestHeaders }?: CommunicationPlatformApplicationValidator.GetEmailProviderByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EmailProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetEmailProvidersParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EmailProviders>} - Success response
     * @name getEmailProviders
     * @summary: Get email providers
     * @description: Get email providers - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEmailProviders/).
     */
    getEmailProviders({ pageNo, pageSize, sort, query, requestHeaders }?: CommunicationPlatformApplicationValidator.GetEmailProvidersParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EmailProviders>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @param {Object} [arg.query] - To search based on plain text
     * @returns {Paginator<CommunicationPlatformModel.EmailProviders>}
     * @summary: Get email providers
     * @description: Get email providers
     */
    getEmailProvidersPaginator({ companyId, applicationId, pageSize, sort, query, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }): Paginator<CommunicationPlatformModel.EmailProviders>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetEmailTemplateByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EmailTemplate>} - Success response
     * @name getEmailTemplateById
     * @summary: Get email template by id
     * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to get an email template by id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEmailTemplateById/).
     */
    getEmailTemplateById({ id, requestHeaders }?: CommunicationPlatformApplicationValidator.GetEmailTemplateByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EmailTemplate>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetEmailTemplatesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EmailTemplates>} - Success response
     * @name getEmailTemplates
     * @summary: Get email templates
     * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to get all email templates. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEmailTemplates/).
     */
    getEmailTemplates({ pageNo, pageSize, sort, query, requestHeaders }?: CommunicationPlatformApplicationValidator.GetEmailTemplatesParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EmailTemplates>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @param {Object} [arg.query] - To search based on plain text
     * @returns {Paginator<CommunicationPlatformModel.EmailTemplates>}
     * @summary: Get email templates
     * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to get all email templates.
     */
    getEmailTemplatesPaginator({ companyId, applicationId, pageSize, sort, query, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }): Paginator<CommunicationPlatformModel.EmailTemplates>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetEventSubscriptionsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EventSubscriptions>} -
     *   Success response
     * @name getEventSubscriptions
     * @summary: Get event subscriptions
     * @description: Get event subscriptions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEventSubscriptions/).
     */
    getEventSubscriptions({ pageNo, pageSize, populate, requestHeaders }?: CommunicationPlatformApplicationValidator.GetEventSubscriptionsParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EventSubscriptions>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {string} [arg.populate] - Populate Fields
     * @returns {Paginator<CommunicationPlatformModel.EventSubscriptions>}
     * @summary: Get event subscriptions
     * @description: Get event subscriptions
     */
    getEventSubscriptionsPaginator({ companyId, applicationId, pageSize, populate, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        populate?: string;
    }): Paginator<CommunicationPlatformModel.EventSubscriptions>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetEventSubscriptionsByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EventSubscription>} - Success response
     * @name getEventSubscriptionsById
     * @summary: Get event subscriptions by id
     * @description: Get event subscriptions by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEventSubscriptionsById/).
     */
    getEventSubscriptionsById({ id, populate, requestHeaders }?: CommunicationPlatformApplicationValidator.GetEventSubscriptionsByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EventSubscription>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetGlobalProvidersParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.GlobalProviders>} - Success response
     * @name getGlobalProviders
     * @summary: Get global providers
     * @description: Using this API, will retrieve a list of global providers. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getGlobalProviders/).
     */
    getGlobalProviders({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CommunicationPlatformModel.GlobalProviders>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetGlobalVariablesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.GlobalVariablesGetResponse>}
     *   - Success response
     *
     * @name getGlobalVariables
     * @summary: get global variables
     * @description: get global variables - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getGlobalVariables/).
     */
    getGlobalVariables({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CommunicationPlatformModel.GlobalVariablesGetResponse>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetJobLogsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.JobLogs>} - Success response
     * @name getJobLogs
     * @summary: Get job logs
     * @description: Get job logs - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getJobLogs/).
     */
    getJobLogs({ pageNo, pageSize, sort, query, requestHeaders }?: CommunicationPlatformApplicationValidator.GetJobLogsParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.JobLogs>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @param {Object} [arg.query] - To search based on plain text
     * @returns {Paginator<CommunicationPlatformModel.JobLogs>}
     * @summary: Get job logs
     * @description: Get job logs
     */
    getJobLogsPaginator({ companyId, applicationId, pageSize, sort, query, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }): Paginator<CommunicationPlatformModel.JobLogs>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetJobsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Jobs>} - Success response
     * @name getJobs
     * @summary: Get jobs
     * @description: Get jobs - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getJobs/).
     */
    getJobs({ pageNo, pageSize, sort, query, requestHeaders }?: CommunicationPlatformApplicationValidator.GetJobsParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.Jobs>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @param {Object} [arg.query] - To search based on plain text
     * @returns {Paginator<CommunicationPlatformModel.Jobs>}
     * @summary: Get jobs
     * @description: Get jobs
     */
    getJobsPaginator({ companyId, applicationId, pageSize, sort, query }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }): Paginator<CommunicationPlatformModel.Jobs>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetNSampleRecordsFromCsvParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.GetNRecordsCsvRes>} - Success response
     * @name getNSampleRecordsFromCsv
     * @summary: Get n sample records from csv
     * @description: Audience is used to import CSV files containing emails, phone numbers, and other variables in order to populate email/SMS templates for bulk delivery via a Campaign. Use this API to get n sample records from csv - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getNSampleRecordsFromCsv/).
     */
    getNSampleRecordsFromCsv({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.GetNSampleRecordsFromCsvParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.GetNRecordsCsvRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetNSampleRecordsFromCsvByGetParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.GetNRecordsCsvRes>} - Success response
     * @name getNSampleRecordsFromCsvByGet
     * @summary: Get n sample records from csv
     * @description: Audience is used to import CSV files containing emails, phone numbers, and other variables in order to populate email/SMS templates for bulk delivery via a Campaign. Use this API to get n sample records from csv. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getNSampleRecordsFromCsvByGet/).
     */
    getNSampleRecordsFromCsvByGet({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CommunicationPlatformModel.GetNRecordsCsvRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetOtpConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.OtpConfiguration>} - Success response
     * @name getOtpConfiguration
     * @summary: Get otp-configuration, if not present in db then return default settings
     * @description: Get otp-configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getOtpConfiguration/).
     */
    getOtpConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CommunicationPlatformModel.OtpConfiguration>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSmsProviderByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getSmsProviderById
     * @summary: Get sms provider by id
     * @description: Get sms provider by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSmsProviderById/).
     */
    getSmsProviderById({ id, requestHeaders }?: CommunicationPlatformApplicationValidator.GetSmsProviderByIdParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSmsProvidersParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getSmsProviders
     * @summary: Get sms providers
     * @description: Get sms providers - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSmsProviders/).
     */
    getSmsProviders({ pageNo, pageSize, sort, query, requestHeaders }?: CommunicationPlatformApplicationValidator.GetSmsProvidersParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSmsTemplateByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsTemplate>} - Success response
     * @name getSmsTemplateById
     * @summary: Get sms template by id
     * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to get an sms template by ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSmsTemplateById/).
     */
    getSmsTemplateById({ id, requestHeaders }?: CommunicationPlatformApplicationValidator.GetSmsTemplateByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SmsTemplate>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSmsTemplatesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsTemplates>} - Success response
     * @name getSmsTemplates
     * @summary: Get sms templates
     * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to get all sms templates. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSmsTemplates/).
     */
    getSmsTemplates({ pageNo, pageSize, sort, query, requestHeaders }?: CommunicationPlatformApplicationValidator.GetSmsTemplatesParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SmsTemplates>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @param {Object} [arg.query] - To search based on plain text
     * @returns {Paginator<CommunicationPlatformModel.SmsTemplates>}
     * @summary: Get sms templates
     * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to get all sms templates.
     */
    getSmsTemplatesPaginator({ companyId, applicationId, pageSize, sort, query, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }): Paginator<CommunicationPlatformModel.SmsTemplates>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetStatsOfCampaignByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.GetStats>} - Success response
     * @name getStatsOfCampaignById
     * @summary: Get stats of campaign by id
     * @description: Get stats of campaign by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getStatsOfCampaignById/).
     */
    getStatsOfCampaignById({ id, requestHeaders }?: CommunicationPlatformApplicationValidator.GetStatsOfCampaignByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.GetStats>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSubscribedEmailTemplatesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EmailTemplates>} - Success response
     * @name getSubscribedEmailTemplates
     * @summary: Get subscribed email templates
     * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to get all subscribed email templates. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSubscribedEmailTemplates/).
     */
    getSubscribedEmailTemplates({ pageNo, pageSize, query, requestHeaders }?: CommunicationPlatformApplicationValidator.GetSubscribedEmailTemplatesParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EmailTemplates>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.query] - To search based on plain text
     * @returns {Paginator<CommunicationPlatformModel.EmailTemplates>}
     * @summary: Get subscribed email templates
     * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to get all subscribed email templates.
     */
    getSubscribedEmailTemplatesPaginator({ companyId, applicationId, pageSize, query, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        query?: any;
    }): Paginator<CommunicationPlatformModel.EmailTemplates>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSubscribedSmsTemplatesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsTemplates>} - Success response
     * @name getSubscribedSmsTemplates
     * @summary: Get subscribed sms templates
     * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to get all subscribed sms templates. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSubscribedSmsTemplates/).
     */
    getSubscribedSmsTemplates({ pageNo, pageSize, query, requestHeaders }?: CommunicationPlatformApplicationValidator.GetSubscribedSmsTemplatesParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SmsTemplates>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.query] - To search based on plain text
     * @returns {Paginator<CommunicationPlatformModel.SmsTemplates>}
     * @summary: Get subscribed sms templates
     * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to get all subscribed sms templates.
     */
    getSubscribedSmsTemplatesPaginator({ companyId, applicationId, pageSize, query, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        query?: any;
    }): Paginator<CommunicationPlatformModel.SmsTemplates>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSystemAudiencesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getSystemAudiences
     * @summary: Get system audiences
     * @description: Get system audiences - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSystemAudiences/).
     */
    getSystemAudiences({ requestHeaders }?: any, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSystemEmailTemplatesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SystemEmailTemplates>} -
     *   Success response
     * @name getSystemEmailTemplates
     * @summary: Get system email templates
     * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to get all system email templates. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSystemEmailTemplates/).
     */
    getSystemEmailTemplates({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SystemEmailTemplates>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSystemSmsTemplatesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SystemSmsTemplates[]>} -
     *   Success response
     * @name getSystemSmsTemplates
     * @summary: Get system sms templates
     * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to get all system sms templates. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSystemSmsTemplates/).
     */
    getSystemSmsTemplates({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SystemSmsTemplates[]>;
    /**
     * @param {CommunicationPlatformApplicationValidator.PostGlobalVariablesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.GlobalVariablesPostResponse>}
     *   - Success response
     *
     * @name postGlobalVariables
     * @summary: post global variables
     * @description: psot global variables - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/postGlobalVariables/).
     */
    postGlobalVariables({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.PostGlobalVariablesParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.GlobalVariablesPostResponse>;
    /**
     * @param {CommunicationPlatformApplicationValidator.SendCommunicationAsynchronouslyParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EngineResponse>} - Success response
     * @name sendCommunicationAsynchronously
     * @summary: Send email or sms asynchronously
     * @description: Send email or sms asynchronously - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/sendCommunicationAsynchronously/).
     */
    sendCommunicationAsynchronously({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.SendCommunicationAsynchronouslyParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EngineResponse>;
    /**
     * @param {CommunicationPlatformApplicationValidator.SendCommunicationSynchronouslyParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EngineResponse>} - Success response
     * @name sendCommunicationSynchronously
     * @summary: Send email or sms synchronously
     * @description: Send email or sms synchronously - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/sendCommunicationSynchronously/).
     */
    sendCommunicationSynchronously({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.SendCommunicationSynchronouslyParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EngineResponse>;
    /**
     * @param {CommunicationPlatformApplicationValidator.SendOtpParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SendOtpCommsRes>} - Success response
     * @name sendOtp
     * @summary: Send OTP using email and sms
     * @description: Send OTP Comms via email and sms - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/sendOtp/).
     */
    sendOtp({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.SendOtpParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SendOtpCommsRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.TriggerCampaignJobParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.TriggerJobResponse>} -
     *   Success response
     * @name triggerCampaignJob
     * @summary: Trigger campaign job
     * @description: Trigger campaign job - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/triggerCampaignJob/).
     */
    triggerCampaignJob({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.TriggerCampaignJobParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.TriggerJobResponse>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateAppProvidersParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.AppProvider>} - Success response
     * @name updateAppProviders
     * @summary: update app providers
     * @description: Using this API will update the application providers. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateAppProviders/).
     */
    updateAppProviders({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.UpdateAppProvidersParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.AppProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateAudienceByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
     * @name updateAudienceById
     * @summary: Update audience by id
     * @description: Audience is used to import CSV files containing emails, phone numbers, and other variables in order to populate email/SMS templates for bulk delivery via a Campaign. Use this API to update audience by id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateAudienceById/).
     */
    updateAudienceById({ id, body, requestHeaders }?: CommunicationPlatformApplicationValidator.UpdateAudienceByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.Audience>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateCampaignByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
     * @name updateCampaignById
     * @summary: Update campaign by id
     * @description: Update campaign by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateCampaignById/).
     */
    updateCampaignById({ id, body, requestHeaders }?: CommunicationPlatformApplicationValidator.UpdateCampaignByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.Campaign>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateEmailProviderByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
     * @name updateEmailProviderById
     * @summary: Update email provider by id
     * @description: Update email provider by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateEmailProviderById/).
     */
    updateEmailProviderById({ id, body, requestHeaders }?: CommunicationPlatformApplicationValidator.UpdateEmailProviderByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EmailProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateEmailTemplateByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EmailTemplate>} - Success response
     * @name updateEmailTemplateById
     * @summary: Update email template by id
     * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to update an email template by id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateEmailTemplateById/).
     */
    updateEmailTemplateById({ id, body, requestHeaders }?: CommunicationPlatformApplicationValidator.UpdateEmailTemplateByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EmailTemplate>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateOtpConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.OtpConfiguration>} - Success response
     * @name updateOtpConfiguration
     * @summary: Update/insert otp configurations
     * @description: Update otp-configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateOtpConfiguration/).
     */
    updateOtpConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CommunicationPlatformModel.OtpConfiguration>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateSmsProviderByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name updateSmsProviderById
     * @summary: Update sms provider by id
     * @description: Update sms provider by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateSmsProviderById/).
     */
    updateSmsProviderById({ id, body, requestHeaders }?: CommunicationPlatformApplicationValidator.UpdateSmsProviderByIdParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateSmsTemplateByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsTemplate>} - Success response
     * @name updateSmsTemplateById
     * @summary: Update sms template by id
     * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to update an sms template by ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateSmsTemplateById/).
     */
    updateSmsTemplateById({ id, body, requestHeaders }?: CommunicationPlatformApplicationValidator.UpdateSmsTemplateByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SmsTemplate>;
    /**
     * @param {CommunicationPlatformApplicationValidator.VerfiyOtpParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.VerifyOtpCommsSuccessRes>}
     *   - Success response
     *
     * @name verfiyOtp
     * @summary: Verify OTP sent via email and sms
     * @description: Verify OTP sent via email and sms - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/verfiyOtp/).
     */
    verfiyOtp({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.VerfiyOtpParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.VerifyOtpCommsSuccessRes>;
}
import CommunicationPlatformApplicationValidator = require("./CommunicationPlatformApplicationValidator");
import CommunicationPlatformModel = require("./CommunicationPlatformModel");
import Paginator = require("../../common/Paginator");
