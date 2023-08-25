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
     * @description: Create audience - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createAudience/).
     */
    createAudience({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.CreateAudienceParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.Audience>;
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
     * @returns {Promise<CommunicationPlatformModel.EmailTemplateRes>} - Success response
     * @name createEmailTemplate
     * @summary: Create email template
     * @description: Create email template - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createEmailTemplate/).
     */
    createEmailTemplate({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.CreateEmailTemplateParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EmailTemplateRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateSmsProviderParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
     * @name createSmsProvider
     * @summary: Create sms provider
     * @description: Create sms provider - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createSmsProvider/).
     */
    createSmsProvider({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.CreateSmsProviderParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SmsProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateSmsTemplateParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsTemplateRes>} - Success response
     * @name createSmsTemplate
     * @summary: Create sms template
     * @description: Create sms template - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createSmsTemplate/).
     */
    createSmsTemplate({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.CreateSmsTemplateParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SmsTemplateRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.DeleteEmailTemplateByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EmailTemplateDeleteSuccessRes>}
     *   - Success response
     *
     * @name deleteEmailTemplateById
     * @summary: Delete email template by id
     * @description: Delete email template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/deleteEmailTemplateById/).
     */
    deleteEmailTemplateById({ id, requestHeaders }?: CommunicationPlatformApplicationValidator.DeleteEmailTemplateByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EmailTemplateDeleteSuccessRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.DeleteSmsTemplateByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsTemplateDeleteSuccessRes>}
     *   - Success response
     *
     * @name deleteSmsTemplateById
     * @summary: Delete sms template by id
     * @description: Delete sms template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/deleteSmsTemplateById/).
     */
    deleteSmsTemplateById({ id, requestHeaders }?: CommunicationPlatformApplicationValidator.DeleteSmsTemplateByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SmsTemplateDeleteSuccessRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetAudienceByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
     * @name getAudienceById
     * @summary: Get audience by id
     * @description: Get audience by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getAudienceById/).
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
     * @description: Get audiences - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getAudiences/).
     */
    getAudiences({ pageNo, pageSize, sort, requestHeaders }?: CommunicationPlatformApplicationValidator.GetAudiencesParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.Audiences>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Paginator<CommunicationPlatformModel.Audiences>}
     * @summary: Get audiences
     * @description: Get audiences
     */
    getAudiencesPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator<CommunicationPlatformModel.Audiences>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetBigqueryHeadersParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.BigqueryHeadersRes>} -
     *   Success response
     * @name getBigqueryHeaders
     * @summary: Get bigquery headers
     * @description: Get bigquery headers - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getBigqueryHeaders/).
     */
    getBigqueryHeaders({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.GetBigqueryHeadersParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.BigqueryHeadersRes>;
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
    getCampaigns({ pageNo, pageSize, sort, requestHeaders }?: CommunicationPlatformApplicationValidator.GetCampaignsParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.Campaigns>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Paginator<CommunicationPlatformModel.Campaigns>}
     * @summary: Get campaigns
     * @description: Get campaigns
     */
    getCampaignsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator<CommunicationPlatformModel.Campaigns>;
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
    getEmailProviders({ pageNo, pageSize, sort, requestHeaders }?: CommunicationPlatformApplicationValidator.GetEmailProvidersParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EmailProviders>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Paginator<CommunicationPlatformModel.EmailProviders>}
     * @summary: Get email providers
     * @description: Get email providers
     */
    getEmailProvidersPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
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
     * @description: Get email template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEmailTemplateById/).
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
     * @description: Get email templates - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEmailTemplates/).
     */
    getEmailTemplates({ pageNo, pageSize, sort, requestHeaders }?: CommunicationPlatformApplicationValidator.GetEmailTemplatesParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EmailTemplates>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Paginator<CommunicationPlatformModel.EmailTemplates>}
     * @summary: Get email templates
     * @description: Get email templates
     */
    getEmailTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
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
     * @param {string} [arg.populate] - Populate fields
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
     * @param {CommunicationPlatformApplicationValidator.GetJobLogsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.JobLogs>} - Success response
     * @name getJobLogs
     * @summary: Get job logs
     * @description: Get job logs - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getJobLogs/).
     */
    getJobLogs({ pageNo, pageSize, sort, requestHeaders }?: CommunicationPlatformApplicationValidator.GetJobLogsParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.JobLogs>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Paginator<CommunicationPlatformModel.JobLogs>}
     * @summary: Get job logs
     * @description: Get job logs
     */
    getJobLogsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
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
    getJobs({ pageNo, pageSize, sort, requestHeaders }?: CommunicationPlatformApplicationValidator.GetJobsParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.Jobs>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Paginator<CommunicationPlatformModel.Jobs>}
     * @summary: Get jobs
     * @description: Get jobs
     */
    getJobsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
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
     * @description: Get n sample records from csv - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getNSampleRecordsFromCsv/).
     */
    getNSampleRecordsFromCsv({ body, requestHeaders }?: CommunicationPlatformApplicationValidator.GetNSampleRecordsFromCsvParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.GetNRecordsCsvRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSmsProviderByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
     * @name getSmsProviderById
     * @summary: Get sms provider by id
     * @description: Get sms provider by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSmsProviderById/).
     */
    getSmsProviderById({ id, requestHeaders }?: CommunicationPlatformApplicationValidator.GetSmsProviderByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SmsProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSmsProvidersParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsProviders>} - Success response
     * @name getSmsProviders
     * @summary: Get sms providers
     * @description: Get sms providers - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSmsProviders/).
     */
    getSmsProviders({ pageNo, pageSize, sort, requestHeaders }?: CommunicationPlatformApplicationValidator.GetSmsProvidersParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SmsProviders>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Paginator<CommunicationPlatformModel.SmsProviders>}
     * @summary: Get sms providers
     * @description: Get sms providers
     */
    getSmsProvidersPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator<CommunicationPlatformModel.SmsProviders>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSmsTemplateByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsTemplate>} - Success response
     * @name getSmsTemplateById
     * @summary: Get sms template by id
     * @description: Get sms template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSmsTemplateById/).
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
     * @description: Get sms templates - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSmsTemplates/).
     */
    getSmsTemplates({ pageNo, pageSize, sort, requestHeaders }?: CommunicationPlatformApplicationValidator.GetSmsTemplatesParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SmsTemplates>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Paginator<CommunicationPlatformModel.SmsTemplates>}
     * @summary: Get sms templates
     * @description: Get sms templates
     */
    getSmsTemplatesPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
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
     * @param {CommunicationPlatformApplicationValidator.GetSystemEmailTemplatesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SystemEmailTemplates>} -
     *   Success response
     * @name getSystemEmailTemplates
     * @summary: Get system email templates
     * @description: Get system email templates - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSystemEmailTemplates/).
     */
    getSystemEmailTemplates({ pageNo, pageSize, sort, requestHeaders }?: CommunicationPlatformApplicationValidator.GetSystemEmailTemplatesParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SystemEmailTemplates>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Paginator<CommunicationPlatformModel.SystemEmailTemplates>}
     * @summary: Get system email templates
     * @description: Get system email templates
     */
    getSystemEmailTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator<CommunicationPlatformModel.SystemEmailTemplates>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSystemSystemTemplatesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SystemSmsTemplates>} -
     *   Success response
     * @name getSystemSystemTemplates
     * @summary: Get system sms templates
     * @description: Get system sms templates - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSystemSystemTemplates/).
     */
    getSystemSystemTemplates({ pageNo, pageSize, sort, requestHeaders }?: CommunicationPlatformApplicationValidator.GetSystemSystemTemplatesParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SystemSmsTemplates>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Paginator<CommunicationPlatformModel.SystemSmsTemplates>}
     * @summary: Get system sms templates
     * @description: Get system sms templates
     */
    getSystemSystemTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator<CommunicationPlatformModel.SystemSmsTemplates>;
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
     * @param {CommunicationPlatformApplicationValidator.UpdateAudienceByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
     * @name updateAudienceById
     * @summary: Update audience by id
     * @description: Update audience by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateAudienceById/).
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
     * @returns {Promise<CommunicationPlatformModel.EmailTemplateRes>} - Success response
     * @name updateEmailTemplateById
     * @summary: Update email template by id
     * @description: Update email template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateEmailTemplateById/).
     */
    updateEmailTemplateById({ id, body, requestHeaders }?: CommunicationPlatformApplicationValidator.UpdateEmailTemplateByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EmailTemplateRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateSmsProviderByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
     * @name updateSmsProviderById
     * @summary: Update sms provider by id
     * @description: Update sms provider by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateSmsProviderById/).
     */
    updateSmsProviderById({ id, body, requestHeaders }?: CommunicationPlatformApplicationValidator.UpdateSmsProviderByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SmsProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateSmsTemplateByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsTemplateRes>} - Success response
     * @name updateSmsTemplateById
     * @summary: Update sms template by id
     * @description: Update sms template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateSmsTemplateById/).
     */
    updateSmsTemplateById({ id, body, requestHeaders }?: CommunicationPlatformApplicationValidator.UpdateSmsTemplateByIdParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SmsTemplateRes>;
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
