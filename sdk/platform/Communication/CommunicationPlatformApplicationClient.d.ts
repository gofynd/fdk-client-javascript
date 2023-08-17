export = Communication;
declare class Communication {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateAudienceParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
     * @name createAudience
     * @summary: Create audience
     * @description: Create audience - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createAudience/).
     */
    createAudience({ body }?: CommunicationPlatformApplicationValidator.CreateAudienceParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.Audience>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateCampaignParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
     * @name createCampaign
     * @summary: Create campaign
     * @description: Create campaign - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createCampaign/).
     */
    createCampaign({ body }?: CommunicationPlatformApplicationValidator.CreateCampaignParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.Campaign>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateEmailProviderParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
     * @name createEmailProvider
     * @summary: Create email provider
     * @description: Create email provider - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createEmailProvider/).
     */
    createEmailProvider({ body }?: CommunicationPlatformApplicationValidator.CreateEmailProviderParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.EmailProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateEmailTemplateParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EmailTemplateRes>} - Success response
     * @name createEmailTemplate
     * @summary: Create email template
     * @description: Create email template - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createEmailTemplate/).
     */
    createEmailTemplate({ body }?: CommunicationPlatformApplicationValidator.CreateEmailTemplateParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.EmailTemplateRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateSmsProviderParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
     * @name createSmsProvider
     * @summary: Create sms provider
     * @description: Create sms provider - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createSmsProvider/).
     */
    createSmsProvider({ body }?: CommunicationPlatformApplicationValidator.CreateSmsProviderParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.SmsProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateSmsTemplateParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsTemplateRes>} - Success response
     * @name createSmsTemplate
     * @summary: Create sms template
     * @description: Create sms template - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createSmsTemplate/).
     */
    createSmsTemplate({ body }?: CommunicationPlatformApplicationValidator.CreateSmsTemplateParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.SmsTemplateRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.DeleteEmailTemplateByIdParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EmailTemplateDeleteSuccessRes>}
     *   - Success response
     *
     * @name deleteEmailTemplateById
     * @summary: Delete email template by id
     * @description: Delete email template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/deleteEmailTemplateById/).
     */
    deleteEmailTemplateById({ id }?: CommunicationPlatformApplicationValidator.DeleteEmailTemplateByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.EmailTemplateDeleteSuccessRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.DeleteSmsTemplateByIdParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsTemplateDeleteSuccessRes>}
     *   - Success response
     *
     * @name deleteSmsTemplateById
     * @summary: Delete sms template by id
     * @description: Delete sms template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/deleteSmsTemplateById/).
     */
    deleteSmsTemplateById({ id }?: CommunicationPlatformApplicationValidator.DeleteSmsTemplateByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.SmsTemplateDeleteSuccessRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetAudienceByIdParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
     * @name getAudienceById
     * @summary: Get audience by id
     * @description: Get audience by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getAudienceById/).
     */
    getAudienceById({ id }?: CommunicationPlatformApplicationValidator.GetAudienceByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.Audience>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetAudiencesParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Audiences>} - Success response
     * @name getAudiences
     * @summary: Get audiences
     * @description: Get audiences - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getAudiences/).
     */
    getAudiences({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetAudiencesParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.Audiences>;
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
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.BigqueryHeadersRes>} -
     *   Success response
     * @name getBigqueryHeaders
     * @summary: Get bigquery headers
     * @description: Get bigquery headers - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getBigqueryHeaders/).
     */
    getBigqueryHeaders({ body }?: CommunicationPlatformApplicationValidator.GetBigqueryHeadersParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.BigqueryHeadersRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetCampaignByIdParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
     * @name getCampaignById
     * @summary: Get campaign by id
     * @description: Get campaign by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getCampaignById/).
     */
    getCampaignById({ id }?: CommunicationPlatformApplicationValidator.GetCampaignByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.Campaign>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetCampaignsParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Campaigns>} - Success response
     * @name getCampaigns
     * @summary: Get campaigns
     * @description: Get campaigns - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getCampaigns/).
     */
    getCampaigns({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetCampaignsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.Campaigns>;
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
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Logs>} - Success response
     * @name getCommunicationLogs
     * @summary: Get communication logs
     * @description: Get communication logs - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getCommunicationLogs/).
     */
    getCommunicationLogs({ pageId, pageSize, sort, query }?: CommunicationPlatformApplicationValidator.GetCommunicationLogsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.Logs>;
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
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
     * @name getEmailProviderById
     * @summary: Get email provider by id
     * @description: Get email provider by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEmailProviderById/).
     */
    getEmailProviderById({ id }?: CommunicationPlatformApplicationValidator.GetEmailProviderByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.EmailProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetEmailProvidersParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EmailProviders>} - Success response
     * @name getEmailProviders
     * @summary: Get email providers
     * @description: Get email providers - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEmailProviders/).
     */
    getEmailProviders({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetEmailProvidersParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.EmailProviders>;
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
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EmailTemplate>} - Success response
     * @name getEmailTemplateById
     * @summary: Get email template by id
     * @description: Get email template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEmailTemplateById/).
     */
    getEmailTemplateById({ id }?: CommunicationPlatformApplicationValidator.GetEmailTemplateByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.EmailTemplate>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetEmailTemplatesParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EmailTemplates>} - Success response
     * @name getEmailTemplates
     * @summary: Get email templates
     * @description: Get email templates - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEmailTemplates/).
     */
    getEmailTemplates({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetEmailTemplatesParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.EmailTemplates>;
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
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EventSubscriptions>} -
     *   Success response
     * @name getEventSubscriptions
     * @summary: Get event subscriptions
     * @description: Get event subscriptions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEventSubscriptions/).
     */
    getEventSubscriptions({ pageNo, pageSize, populate }?: CommunicationPlatformApplicationValidator.GetEventSubscriptionsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.EventSubscriptions>;
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
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.JobLogs>} - Success response
     * @name getJobLogs
     * @summary: Get job logs
     * @description: Get job logs - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getJobLogs/).
     */
    getJobLogs({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetJobLogsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.JobLogs>;
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
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Jobs>} - Success response
     * @name getJobs
     * @summary: Get jobs
     * @description: Get jobs - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getJobs/).
     */
    getJobs({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetJobsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.Jobs>;
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
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.GetNRecordsCsvRes>} - Success response
     * @name getNSampleRecordsFromCsv
     * @summary: Get n sample records from csv
     * @description: Get n sample records from csv - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getNSampleRecordsFromCsv/).
     */
    getNSampleRecordsFromCsv({ body }?: CommunicationPlatformApplicationValidator.GetNSampleRecordsFromCsvParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.GetNRecordsCsvRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSmsProviderByIdParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
     * @name getSmsProviderById
     * @summary: Get sms provider by id
     * @description: Get sms provider by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSmsProviderById/).
     */
    getSmsProviderById({ id }?: CommunicationPlatformApplicationValidator.GetSmsProviderByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.SmsProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSmsProvidersParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsProviders>} - Success response
     * @name getSmsProviders
     * @summary: Get sms providers
     * @description: Get sms providers - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSmsProviders/).
     */
    getSmsProviders({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetSmsProvidersParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.SmsProviders>;
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
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsTemplate>} - Success response
     * @name getSmsTemplateById
     * @summary: Get sms template by id
     * @description: Get sms template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSmsTemplateById/).
     */
    getSmsTemplateById({ id }?: CommunicationPlatformApplicationValidator.GetSmsTemplateByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.SmsTemplate>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSmsTemplatesParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsTemplates>} - Success response
     * @name getSmsTemplates
     * @summary: Get sms templates
     * @description: Get sms templates - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSmsTemplates/).
     */
    getSmsTemplates({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetSmsTemplatesParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.SmsTemplates>;
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
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.GetStats>} - Success response
     * @name getStatsOfCampaignById
     * @summary: Get stats of campaign by id
     * @description: Get stats of campaign by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getStatsOfCampaignById/).
     */
    getStatsOfCampaignById({ id }?: CommunicationPlatformApplicationValidator.GetStatsOfCampaignByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.GetStats>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSystemEmailTemplatesParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SystemEmailTemplates>} -
     *   Success response
     * @name getSystemEmailTemplates
     * @summary: Get system email templates
     * @description: Get system email templates - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSystemEmailTemplates/).
     */
    getSystemEmailTemplates({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetSystemEmailTemplatesParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.SystemEmailTemplates>;
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
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SystemSmsTemplates>} -
     *   Success response
     * @name getSystemSystemTemplates
     * @summary: Get system sms templates
     * @description: Get system sms templates - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSystemSystemTemplates/).
     */
    getSystemSystemTemplates({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetSystemSystemTemplatesParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.SystemSmsTemplates>;
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
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EngineResponse>} - Success response
     * @name sendCommunicationAsynchronously
     * @summary: Send email or sms asynchronously
     * @description: Send email or sms asynchronously - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/sendCommunicationAsynchronously/).
     */
    sendCommunicationAsynchronously({ body }?: CommunicationPlatformApplicationValidator.SendCommunicationAsynchronouslyParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.EngineResponse>;
    /**
     * @param {CommunicationPlatformApplicationValidator.SendCommunicationSynchronouslyParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EngineResponse>} - Success response
     * @name sendCommunicationSynchronously
     * @summary: Send email or sms synchronously
     * @description: Send email or sms synchronously - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/sendCommunicationSynchronously/).
     */
    sendCommunicationSynchronously({ body }?: CommunicationPlatformApplicationValidator.SendCommunicationSynchronouslyParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.EngineResponse>;
    /**
     * @param {CommunicationPlatformApplicationValidator.SendOtpParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SendOtpCommsRes>} - Success response
     * @name sendOtp
     * @summary: Send OTP using email and sms
     * @description: Send OTP Comms via email and sms - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/sendOtp/).
     */
    sendOtp({ body }?: CommunicationPlatformApplicationValidator.SendOtpParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.SendOtpCommsRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.TriggerCampaignJobParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.TriggerJobResponse>} -
     *   Success response
     * @name triggerCampaignJob
     * @summary: Trigger campaign job
     * @description: Trigger campaign job - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/triggerCampaignJob/).
     */
    triggerCampaignJob({ body }?: CommunicationPlatformApplicationValidator.TriggerCampaignJobParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.TriggerJobResponse>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateAudienceByIdParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
     * @name updateAudienceById
     * @summary: Update audience by id
     * @description: Update audience by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateAudienceById/).
     */
    updateAudienceById({ id, body }?: CommunicationPlatformApplicationValidator.UpdateAudienceByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.Audience>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateCampaignByIdParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
     * @name updateCampaignById
     * @summary: Update campaign by id
     * @description: Update campaign by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateCampaignById/).
     */
    updateCampaignById({ id, body }?: CommunicationPlatformApplicationValidator.UpdateCampaignByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.Campaign>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateEmailProviderByIdParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
     * @name updateEmailProviderById
     * @summary: Update email provider by id
     * @description: Update email provider by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateEmailProviderById/).
     */
    updateEmailProviderById({ id, body }?: CommunicationPlatformApplicationValidator.UpdateEmailProviderByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.EmailProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateEmailTemplateByIdParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EmailTemplateRes>} - Success response
     * @name updateEmailTemplateById
     * @summary: Update email template by id
     * @description: Update email template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateEmailTemplateById/).
     */
    updateEmailTemplateById({ id, body }?: CommunicationPlatformApplicationValidator.UpdateEmailTemplateByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.EmailTemplateRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateSmsProviderByIdParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
     * @name updateSmsProviderById
     * @summary: Update sms provider by id
     * @description: Update sms provider by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateSmsProviderById/).
     */
    updateSmsProviderById({ id, body }?: CommunicationPlatformApplicationValidator.UpdateSmsProviderByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.SmsProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateSmsTemplateByIdParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SmsTemplateRes>} - Success response
     * @name updateSmsTemplateById
     * @summary: Update sms template by id
     * @description: Update sms template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateSmsTemplateById/).
     */
    updateSmsTemplateById({ id, body }?: CommunicationPlatformApplicationValidator.UpdateSmsTemplateByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.SmsTemplateRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.VerfiyOtpParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.VerifyOtpCommsSuccessRes>}
     *   - Success response
     *
     * @name verfiyOtp
     * @summary: Verify OTP sent via email and sms
     * @description: Verify OTP sent via email and sms - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/verfiyOtp/).
     */
    verfiyOtp({ body }?: CommunicationPlatformApplicationValidator.VerfiyOtpParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommunicationPlatformModel.VerifyOtpCommsSuccessRes>;
}
import CommunicationPlatformApplicationValidator = require("./CommunicationPlatformApplicationValidator");
import CommunicationPlatformModel = require("./CommunicationPlatformModel");
import Paginator = require("../../common/Paginator");
