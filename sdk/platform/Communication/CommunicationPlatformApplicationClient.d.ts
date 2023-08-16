export = Communication;
declare class Communication {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {AudienceReq} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Audience>} - Success response
     * @summary: Create audience
     * @description: Create audience
     */
    createAudience({ body }?: {
        body: AudienceReq;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<Audience>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CampaignReq} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Campaign>} - Success response
     * @summary: Create campaign
     * @description: Create campaign
     */
    createCampaign({ body }?: {
        body: CampaignReq;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<Campaign>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EmailProviderReq} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EmailProvider>} - Success response
     * @summary: Create email provider
     * @description: Create email provider
     */
    createEmailProvider({ body }?: {
        body: EmailProviderReq;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<EmailProvider>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EmailTemplateReq} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EmailTemplateRes>} - Success response
     * @summary: Create email template
     * @description: Create email template
     */
    createEmailTemplate({ body }?: {
        body: EmailTemplateReq;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<EmailTemplateRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SmsProviderReq} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SmsProvider>} - Success response
     * @summary: Create sms provider
     * @description: Create sms provider
     */
    createSmsProvider({ body }?: {
        body: SmsProviderReq;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SmsProvider>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SmsTemplateReq} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SmsTemplateRes>} - Success response
     * @summary: Create sms template
     * @description: Create sms template
     */
    createSmsTemplate({ body }?: {
        body: SmsTemplateReq;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SmsTemplateRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email template id
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EmailTemplateDeleteSuccessRes>} - Success response
     * @summary: Delete email template by id
     * @description: Delete email template by id
     */
    deleteEmailTemplateById({ id }?: {
        id: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<EmailTemplateDeleteSuccessRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms template id
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SmsTemplateDeleteSuccessRes>} - Success response
     * @summary: Delete sms template by id
     * @description: Delete sms template by id
     */
    deleteSmsTemplateById({ id }?: {
        id: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SmsTemplateDeleteSuccessRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Audience id
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Audience>} - Success response
     * @summary: Get audience by id
     * @description: Get audience by id
     */
    getAudienceById({ id }?: {
        id: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<Audience>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Audiences>} - Success response
     * @summary: Get audiences
     * @description: Get audiences
     */
    getAudiences({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<Audiences>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BigqueryHeadersReq} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BigqueryHeadersRes>} - Success response
     * @summary: Get bigquery headers
     * @description: Get bigquery headers
     */
    getBigqueryHeaders({ body }?: {
        body: BigqueryHeadersReq;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<BigqueryHeadersRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Campaign id
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Campaign>} - Success response
     * @summary: Get campaign by id
     * @description: Get campaign by id
     */
    getCampaignById({ id }?: {
        id: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<Campaign>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Campaigns>} - Success response
     * @summary: Get campaigns
     * @description: Get campaigns
     */
    getCampaigns({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<Campaigns>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.pageId] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on _id
     * @param {Object} [arg.query] -
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Logs>} - Success response
     * @summary: Get communication logs
     * @description: Get communication logs
     */
    getCommunicationLogs({ pageId, pageSize, sort, query }?: {
        pageId?: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<Logs>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email provider id
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EmailProvider>} - Success response
     * @summary: Get email provider by id
     * @description: Get email provider by id
     */
    getEmailProviderById({ id }?: {
        id: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<EmailProvider>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EmailProviders>} - Success response
     * @summary: Get email providers
     * @description: Get email providers
     */
    getEmailProviders({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<EmailProviders>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email template id
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EmailTemplate>} - Success response
     * @summary: Get email template by id
     * @description: Get email template by id
     */
    getEmailTemplateById({ id }?: {
        id: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<EmailTemplate>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EmailTemplates>} - Success response
     * @summary: Get email templates
     * @description: Get email templates
     */
    getEmailTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<EmailTemplates>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {string} [arg.populate] - Populate fields
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EventSubscriptions>} - Success response
     * @summary: Get event subscriptions
     * @description: Get event subscriptions
     */
    getEventSubscriptions({ pageNo, pageSize, populate }?: {
        pageNo?: number;
        pageSize?: number;
        populate?: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<EventSubscriptions>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<JobLogs>} - Success response
     * @summary: Get job logs
     * @description: Get job logs
     */
    getJobLogs({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<JobLogs>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Jobs>} - Success response
     * @summary: Get jobs
     * @description: Get jobs
     */
    getJobs({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<Jobs>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetNRecordsCsvReq} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<GetNRecordsCsvRes>} - Success response
     * @summary: Get n sample records from csv
     * @description: Get n sample records from csv
     */
    getNSampleRecordsFromCsv({ body }?: {
        body: GetNRecordsCsvReq;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<GetNRecordsCsvRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms provider id
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SmsProvider>} - Success response
     * @summary: Get sms provider by id
     * @description: Get sms provider by id
     */
    getSmsProviderById({ id }?: {
        id: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SmsProvider>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SmsProviders>} - Success response
     * @summary: Get sms providers
     * @description: Get sms providers
     */
    getSmsProviders({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SmsProviders>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms template id
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SmsTemplate>} - Success response
     * @summary: Get sms template by id
     * @description: Get sms template by id
     */
    getSmsTemplateById({ id }?: {
        id: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SmsTemplate>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SmsTemplates>} - Success response
     * @summary: Get sms templates
     * @description: Get sms templates
     */
    getSmsTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SmsTemplates>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Campaign id
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<GetStats>} - Success response
     * @summary: Get stats of campaign by id
     * @description: Get stats of campaign by id
     */
    getStatsOfCampaignById({ id }?: {
        id: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<GetStats>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SystemEmailTemplates>} - Success response
     * @summary: Get system email templates
     * @description: Get system email templates
     */
    getSystemEmailTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SystemEmailTemplates>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SystemSmsTemplates>} - Success response
     * @summary: Get system sms templates
     * @description: Get system sms templates
     */
    getSystemSystemTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SystemSmsTemplates>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EngineRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EngineResponse>} - Success response
     * @summary: Send email or sms asynchronously
     * @description: Send email or sms asynchronously
     */
    sendCommunicationAsynchronously({ body }?: {
        body: EngineRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<EngineResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EngineRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EngineResponse>} - Success response
     * @summary: Send email or sms synchronously
     * @description: Send email or sms synchronously
     */
    sendCommunicationSynchronously({ body }?: {
        body: EngineRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<EngineResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SendOtpCommsReq} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SendOtpCommsRes>} - Success response
     * @summary: Send OTP using email and sms
     * @description: Send OTP Comms via email and sms
     */
    sendOtp({ body }?: {
        body: SendOtpCommsReq;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SendOtpCommsRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {TriggerJobRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<TriggerJobResponse>} - Success response
     * @summary: Trigger campaign job
     * @description: Trigger campaign job
     */
    triggerCampaignJob({ body }?: {
        body: TriggerJobRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<TriggerJobResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Audience id
     * @param {AudienceReq} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Audience>} - Success response
     * @summary: Update audience by id
     * @description: Update audience by id
     */
    updateAudienceById({ id, body }?: {
        id: string;
        body: AudienceReq;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<Audience>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Campaign id
     * @param {CampaignReq} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Campaign>} - Success response
     * @summary: Update campaign by id
     * @description: Update campaign by id
     */
    updateCampaignById({ id, body }?: {
        id: string;
        body: CampaignReq;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<Campaign>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email provider id
     * @param {EmailProviderReq} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EmailProvider>} - Success response
     * @summary: Update email provider by id
     * @description: Update email provider by id
     */
    updateEmailProviderById({ id, body }?: {
        id: string;
        body: EmailProviderReq;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<EmailProvider>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email template id
     * @param {EmailTemplateReq} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EmailTemplateRes>} - Success response
     * @summary: Update email template by id
     * @description: Update email template by id
     */
    updateEmailTemplateById({ id, body }?: {
        id: string;
        body: EmailTemplateReq;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<EmailTemplateRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms provider id
     * @param {SmsProviderReq} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SmsProvider>} - Success response
     * @summary: Update sms provider by id
     * @description: Update sms provider by id
     */
    updateSmsProviderById({ id, body }?: {
        id: string;
        body: SmsProviderReq;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SmsProvider>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms template id
     * @param {SmsTemplateReq} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SmsTemplateRes>} - Success response
     * @summary: Update sms template by id
     * @description: Update sms template by id
     */
    updateSmsTemplateById({ id, body }?: {
        id: string;
        body: SmsTemplateReq;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SmsTemplateRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {VerifyOtpCommsReq} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<VerifyOtpCommsSuccessRes>} - Success response
     * @summary: Verify OTP sent via email and sms
     * @description: Verify OTP sent via email and sms
     */
    verfiyOtp({ body }?: {
        body: VerifyOtpCommsReq;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<VerifyOtpCommsSuccessRes>;
}
