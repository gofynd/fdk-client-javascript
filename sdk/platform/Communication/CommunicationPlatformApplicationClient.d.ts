export = Communication;
declare class Communication {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateAudienceParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
     * @name createAudience
     * @summary: Create audience
     * @description: Create audience - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createAudience/).
     */
    createAudience({ body }?: CommunicationPlatformApplicationValidator.CreateAudienceParam): Promise<CommunicationPlatformModel.Audience>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateCampaignParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
     * @name createCampaign
     * @summary: Create campaign
     * @description: Create campaign - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createCampaign/).
     */
    createCampaign({ body }?: CommunicationPlatformApplicationValidator.CreateCampaignParam): Promise<CommunicationPlatformModel.Campaign>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateEmailProviderParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
     * @name createEmailProvider
     * @summary: Create email provider
     * @description: Create email provider - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createEmailProvider/).
     */
    createEmailProvider({ body }?: CommunicationPlatformApplicationValidator.CreateEmailProviderParam): Promise<CommunicationPlatformModel.EmailProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateEmailTemplateParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailTemplateRes>} - Success response
     * @name createEmailTemplate
     * @summary: Create email template
     * @description: Create email template - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createEmailTemplate/).
     */
    createEmailTemplate({ body }?: CommunicationPlatformApplicationValidator.CreateEmailTemplateParam): Promise<CommunicationPlatformModel.EmailTemplateRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateSmsProviderParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
     * @name createSmsProvider
     * @summary: Create sms provider
     * @description: Create sms provider - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createSmsProvider/).
     */
    createSmsProvider({ body }?: CommunicationPlatformApplicationValidator.CreateSmsProviderParam): Promise<CommunicationPlatformModel.SmsProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateSmsTemplateParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsTemplateRes>} - Success response
     * @name createSmsTemplate
     * @summary: Create sms template
     * @description: Create sms template - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createSmsTemplate/).
     */
    createSmsTemplate({ body }?: CommunicationPlatformApplicationValidator.CreateSmsTemplateParam): Promise<CommunicationPlatformModel.SmsTemplateRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.DeleteEmailTemplateByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailTemplateDeleteSuccessRes>}
     *   - Success response
     *
     * @name deleteEmailTemplateById
     * @summary: Delete email template by id
     * @description: Delete email template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/deleteEmailTemplateById/).
     */
    deleteEmailTemplateById({ id }?: CommunicationPlatformApplicationValidator.DeleteEmailTemplateByIdParam): Promise<CommunicationPlatformModel.EmailTemplateDeleteSuccessRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.DeleteSmsTemplateByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsTemplateDeleteSuccessRes>}
     *   - Success response
     *
     * @name deleteSmsTemplateById
     * @summary: Delete sms template by id
     * @description: Delete sms template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/deleteSmsTemplateById/).
     */
    deleteSmsTemplateById({ id }?: CommunicationPlatformApplicationValidator.DeleteSmsTemplateByIdParam): Promise<CommunicationPlatformModel.SmsTemplateDeleteSuccessRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetAudienceByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
     * @name getAudienceById
     * @summary: Get audience by id
     * @description: Get audience by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getAudienceById/).
     */
    getAudienceById({ id }?: CommunicationPlatformApplicationValidator.GetAudienceByIdParam): Promise<CommunicationPlatformModel.Audience>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetAudiencesParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.Audiences>} - Success response
     * @name getAudiences
     * @summary: Get audiences
     * @description: Get audiences - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getAudiences/).
     */
    getAudiences({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetAudiencesParam): Promise<CommunicationPlatformModel.Audiences>;
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
     * @returns {Promise<CommunicationPlatformModel.BigqueryHeadersRes>} -
     *   Success response
     * @name getBigqueryHeaders
     * @summary: Get bigquery headers
     * @description: Get bigquery headers - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getBigqueryHeaders/).
     */
    getBigqueryHeaders({ body }?: CommunicationPlatformApplicationValidator.GetBigqueryHeadersParam): Promise<CommunicationPlatformModel.BigqueryHeadersRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetCampaignByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
     * @name getCampaignById
     * @summary: Get campaign by id
     * @description: Get campaign by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getCampaignById/).
     */
    getCampaignById({ id }?: CommunicationPlatformApplicationValidator.GetCampaignByIdParam): Promise<CommunicationPlatformModel.Campaign>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetCampaignsParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.Campaigns>} - Success response
     * @name getCampaigns
     * @summary: Get campaigns
     * @description: Get campaigns - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getCampaigns/).
     */
    getCampaigns({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetCampaignsParam): Promise<CommunicationPlatformModel.Campaigns>;
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
     * @returns {Promise<CommunicationPlatformModel.Logs>} - Success response
     * @name getCommunicationLogs
     * @summary: Get communication logs
     * @description: Get communication logs - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getCommunicationLogs/).
     */
    getCommunicationLogs({ pageId, pageSize, sort, query }?: CommunicationPlatformApplicationValidator.GetCommunicationLogsParam): Promise<CommunicationPlatformModel.Logs>;
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
     * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
     * @name getEmailProviderById
     * @summary: Get email provider by id
     * @description: Get email provider by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEmailProviderById/).
     */
    getEmailProviderById({ id }?: CommunicationPlatformApplicationValidator.GetEmailProviderByIdParam): Promise<CommunicationPlatformModel.EmailProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetEmailProvidersParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailProviders>} - Success response
     * @name getEmailProviders
     * @summary: Get email providers
     * @description: Get email providers - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEmailProviders/).
     */
    getEmailProviders({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetEmailProvidersParam): Promise<CommunicationPlatformModel.EmailProviders>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetEmailTemplateByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailTemplate>} - Success response
     * @name getEmailTemplateById
     * @summary: Get email template by id
     * @description: Get email template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEmailTemplateById/).
     */
    getEmailTemplateById({ id }?: CommunicationPlatformApplicationValidator.GetEmailTemplateByIdParam): Promise<CommunicationPlatformModel.EmailTemplate>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetEmailTemplatesParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailTemplates>} - Success response
     * @name getEmailTemplates
     * @summary: Get email templates
     * @description: Get email templates - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEmailTemplates/).
     */
    getEmailTemplates({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetEmailTemplatesParam): Promise<CommunicationPlatformModel.EmailTemplates>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetEventSubscriptionsParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EventSubscriptions>} -
     *   Success response
     * @name getEventSubscriptions
     * @summary: Get event subscriptions
     * @description: Get event subscriptions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEventSubscriptions/).
     */
    getEventSubscriptions({ pageNo, pageSize, populate }?: CommunicationPlatformApplicationValidator.GetEventSubscriptionsParam): Promise<CommunicationPlatformModel.EventSubscriptions>;
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
     * @returns {Promise<CommunicationPlatformModel.JobLogs>} - Success response
     * @name getJobLogs
     * @summary: Get job logs
     * @description: Get job logs - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getJobLogs/).
     */
    getJobLogs({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetJobLogsParam): Promise<CommunicationPlatformModel.JobLogs>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetJobsParam} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.Jobs>} - Success response
     * @name getJobs
     * @summary: Get jobs
     * @description: Get jobs - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getJobs/).
     */
    getJobs({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetJobsParam): Promise<CommunicationPlatformModel.Jobs>;
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
     * @returns {Promise<CommunicationPlatformModel.GetNRecordsCsvRes>} - Success response
     * @name getNSampleRecordsFromCsv
     * @summary: Get n sample records from csv
     * @description: Get n sample records from csv - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getNSampleRecordsFromCsv/).
     */
    getNSampleRecordsFromCsv({ body }?: CommunicationPlatformApplicationValidator.GetNSampleRecordsFromCsvParam): Promise<CommunicationPlatformModel.GetNRecordsCsvRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSmsProviderByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
     * @name getSmsProviderById
     * @summary: Get sms provider by id
     * @description: Get sms provider by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSmsProviderById/).
     */
    getSmsProviderById({ id }?: CommunicationPlatformApplicationValidator.GetSmsProviderByIdParam): Promise<CommunicationPlatformModel.SmsProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSmsProvidersParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsProviders>} - Success response
     * @name getSmsProviders
     * @summary: Get sms providers
     * @description: Get sms providers - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSmsProviders/).
     */
    getSmsProviders({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetSmsProvidersParam): Promise<CommunicationPlatformModel.SmsProviders>;
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
     * @returns {Promise<CommunicationPlatformModel.SmsTemplate>} - Success response
     * @name getSmsTemplateById
     * @summary: Get sms template by id
     * @description: Get sms template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSmsTemplateById/).
     */
    getSmsTemplateById({ id }?: CommunicationPlatformApplicationValidator.GetSmsTemplateByIdParam): Promise<CommunicationPlatformModel.SmsTemplate>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSmsTemplatesParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsTemplates>} - Success response
     * @name getSmsTemplates
     * @summary: Get sms templates
     * @description: Get sms templates - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSmsTemplates/).
     */
    getSmsTemplates({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetSmsTemplatesParam): Promise<CommunicationPlatformModel.SmsTemplates>;
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
     * @returns {Promise<CommunicationPlatformModel.GetStats>} - Success response
     * @name getStatsOfCampaignById
     * @summary: Get stats of campaign by id
     * @description: Get stats of campaign by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getStatsOfCampaignById/).
     */
    getStatsOfCampaignById({ id }?: CommunicationPlatformApplicationValidator.GetStatsOfCampaignByIdParam): Promise<CommunicationPlatformModel.GetStats>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSystemEmailTemplatesParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SystemEmailTemplates>} -
     *   Success response
     * @name getSystemEmailTemplates
     * @summary: Get system email templates
     * @description: Get system email templates - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSystemEmailTemplates/).
     */
    getSystemEmailTemplates({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetSystemEmailTemplatesParam): Promise<CommunicationPlatformModel.SystemEmailTemplates>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSystemSystemTemplatesParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SystemSmsTemplates>} -
     *   Success response
     * @name getSystemSystemTemplates
     * @summary: Get system sms templates
     * @description: Get system sms templates - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSystemSystemTemplates/).
     */
    getSystemSystemTemplates({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetSystemSystemTemplatesParam): Promise<CommunicationPlatformModel.SystemSmsTemplates>;
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
     * @returns {Promise<CommunicationPlatformModel.EngineResponse>} - Success response
     * @name sendCommunicationAsynchronously
     * @summary: Send email or sms asynchronously
     * @description: Send email or sms asynchronously - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/sendCommunicationAsynchronously/).
     */
    sendCommunicationAsynchronously({ body }?: CommunicationPlatformApplicationValidator.SendCommunicationAsynchronouslyParam): Promise<CommunicationPlatformModel.EngineResponse>;
    /**
     * @param {CommunicationPlatformApplicationValidator.SendCommunicationSynchronouslyParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EngineResponse>} - Success response
     * @name sendCommunicationSynchronously
     * @summary: Send email or sms synchronously
     * @description: Send email or sms synchronously - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/sendCommunicationSynchronously/).
     */
    sendCommunicationSynchronously({ body }?: CommunicationPlatformApplicationValidator.SendCommunicationSynchronouslyParam): Promise<CommunicationPlatformModel.EngineResponse>;
    /**
     * @param {CommunicationPlatformApplicationValidator.SendOtpParam} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.SendOtpCommsRes>} - Success response
     * @name sendOtp
     * @summary: Send OTP using email and sms
     * @description: Send OTP Comms via email and sms - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/sendOtp/).
     */
    sendOtp({ body }?: CommunicationPlatformApplicationValidator.SendOtpParam): Promise<CommunicationPlatformModel.SendOtpCommsRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.TriggerCampaignJobParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.TriggerJobResponse>} -
     *   Success response
     * @name triggerCampaignJob
     * @summary: Trigger campaign job
     * @description: Trigger campaign job - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/triggerCampaignJob/).
     */
    triggerCampaignJob({ body }?: CommunicationPlatformApplicationValidator.TriggerCampaignJobParam): Promise<CommunicationPlatformModel.TriggerJobResponse>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateAudienceByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
     * @name updateAudienceById
     * @summary: Update audience by id
     * @description: Update audience by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateAudienceById/).
     */
    updateAudienceById({ id, body }?: CommunicationPlatformApplicationValidator.UpdateAudienceByIdParam): Promise<CommunicationPlatformModel.Audience>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateCampaignByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
     * @name updateCampaignById
     * @summary: Update campaign by id
     * @description: Update campaign by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateCampaignById/).
     */
    updateCampaignById({ id, body }?: CommunicationPlatformApplicationValidator.UpdateCampaignByIdParam): Promise<CommunicationPlatformModel.Campaign>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateEmailProviderByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
     * @name updateEmailProviderById
     * @summary: Update email provider by id
     * @description: Update email provider by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateEmailProviderById/).
     */
    updateEmailProviderById({ id, body }?: CommunicationPlatformApplicationValidator.UpdateEmailProviderByIdParam): Promise<CommunicationPlatformModel.EmailProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateEmailTemplateByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailTemplateRes>} - Success response
     * @name updateEmailTemplateById
     * @summary: Update email template by id
     * @description: Update email template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateEmailTemplateById/).
     */
    updateEmailTemplateById({ id, body }?: CommunicationPlatformApplicationValidator.UpdateEmailTemplateByIdParam): Promise<CommunicationPlatformModel.EmailTemplateRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateSmsProviderByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
     * @name updateSmsProviderById
     * @summary: Update sms provider by id
     * @description: Update sms provider by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateSmsProviderById/).
     */
    updateSmsProviderById({ id, body }?: CommunicationPlatformApplicationValidator.UpdateSmsProviderByIdParam): Promise<CommunicationPlatformModel.SmsProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateSmsTemplateByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsTemplateRes>} - Success response
     * @name updateSmsTemplateById
     * @summary: Update sms template by id
     * @description: Update sms template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateSmsTemplateById/).
     */
    updateSmsTemplateById({ id, body }?: CommunicationPlatformApplicationValidator.UpdateSmsTemplateByIdParam): Promise<CommunicationPlatformModel.SmsTemplateRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.VerfiyOtpParam} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.VerifyOtpCommsSuccessRes>}
     *   - Success response
     *
     * @name verfiyOtp
     * @summary: Verify OTP sent via email and sms
     * @description: Verify OTP sent via email and sms - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/verfiyOtp/).
     */
    verfiyOtp({ body }?: CommunicationPlatformApplicationValidator.VerfiyOtpParam): Promise<CommunicationPlatformModel.VerifyOtpCommsSuccessRes>;
}
import CommunicationPlatformApplicationValidator = require("./CommunicationPlatformApplicationValidator");
import CommunicationPlatformModel = require("./CommunicationPlatformModel");
import Paginator = require("../../common/Paginator");
