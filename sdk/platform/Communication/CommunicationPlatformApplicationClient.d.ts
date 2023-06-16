export = Communication;
declare class Communication {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {AudienceReq} arg.body
     * @returns {Promise<Audience>} - Success response
     * @summary: Create audience
     * @description: Create audience
     */
    createAudience({ body }?: {
        body: AudienceReq;
    }): Promise<Audience>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CampaignReq} arg.body
     * @returns {Promise<Campaign>} - Success response
     * @summary: Create campaign
     * @description: Create campaign
     */
    createCampaign({ body }?: {
        body: CampaignReq;
    }): Promise<Campaign>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EmailProviderReq} arg.body
     * @returns {Promise<EmailProvider>} - Success response
     * @summary: Create email provider
     * @description: By using this API, a new email provider will be created based on the user's customised definitions.
     */
    createEmailProvider({ body }?: {
        body: EmailProviderReq;
    }): Promise<EmailProvider>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EmailTemplateReq} arg.body
     * @returns {Promise<EmailTemplateRes>} - Success response
     * @summary: Create email template
     * @description: Create email template
     */
    createEmailTemplate({ body }?: {
        body: EmailTemplateReq;
    }): Promise<EmailTemplateRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SmsProviderReq} arg.body
     * @returns {Promise<SmsProvider>} - Success response
     * @summary: Create sms provider
     * @description: By using this API, a new SMS provider will be created based on the user's customised definitions.
     */
    createSmsProvider({ body }?: {
        body: SmsProviderReq;
    }): Promise<SmsProvider>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SmsTemplateReq} arg.body
     * @returns {Promise<SmsTemplateRes>} - Success response
     * @summary: Create sms template
     * @description: Create sms template
     */
    createSmsTemplate({ body }?: {
        body: SmsTemplateReq;
    }): Promise<SmsTemplateRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {VoiceProviderReq} arg.body
     * @returns {Promise<VoiceProvider>} - Success response
     * @summary: Create voice provider
     * @description: Create voice provider
     */
    createVoiceProvider({ body }?: {
        body: VoiceProviderReq;
    }): Promise<VoiceProvider>;
    /**
     * @param {Object} arg - Arg object.
     * @param {VoiceTemplateReq} arg.body
     * @returns {Promise<VoiceTemplateRes>} - Success response
     * @summary: Create voice template
     * @description: Create voice template
     */
    createVoiceTemplate({ body }?: {
        body: VoiceTemplateReq;
    }): Promise<VoiceTemplateRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email provider id
     * @returns {Promise<GenericSuccess>} - Success response
     * @summary: delete email provider by id
     * @description: By using this api, you can delete a certain email provider based on its ID.
     */
    deleteEmailProviderById({ id }?: {
        id: string;
    }): Promise<GenericSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email template id
     * @returns {Promise<EmailTemplateDeleteSuccessRes>} - Success response
     * @summary: Delete email template by id
     * @description: Delete email template by id
     */
    deleteEmailTemplateById({ id }?: {
        id: string;
    }): Promise<EmailTemplateDeleteSuccessRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms provider id
     * @returns {Promise<GenericSuccess>} - Success response
     * @summary: delete sms provider by id
     * @description: By using this api, you can delete a certain SMS provider based on its ID.
     */
    deleteSmsProviderById({ id }?: {
        id: string;
    }): Promise<GenericSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms template id
     * @returns {Promise<SmsTemplateDeleteSuccessRes>} - Success response
     * @summary: Delete sms template by id
     * @description: Delete sms template by id
     */
    deleteSmsTemplateById({ id }?: {
        id: string;
    }): Promise<SmsTemplateDeleteSuccessRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Voice template id
     * @returns {Promise<VoiceTemplateDeleteSuccessRes>} - Success response
     * @summary: Delete voice template by id
     * @description: Delete voice template by id
     */
    deleteVoiceTemplateById({ id }?: {
        id: string;
    }): Promise<VoiceTemplateDeleteSuccessRes>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<AppProvider>} - Success response
     * @summary: Get app providers
     * @description: Using this API will return a list of application providers.
     */
    getAppProviders({}?: any): Promise<AppProvider>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Audience id
     * @returns {Promise<Audience>} - Success response
     * @summary: Get audience by id
     * @description: Get audience by id
     */
    getAudienceById({ id }?: {
        id: string;
    }): Promise<Audience>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Promise<Audiences>} - Success response
     * @summary: Get audiences
     * @description: Get audiences
     */
    getAudiences({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<Audiences>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BigqueryHeadersReq} arg.body
     * @returns {Promise<BigqueryHeadersRes>} - Success response
     * @summary: Get bigquery headers
     * @description: Get bigquery headers
     */
    getBigqueryHeaders({ body }?: {
        body: BigqueryHeadersReq;
    }): Promise<BigqueryHeadersRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Campaign id
     * @returns {Promise<Campaign>} - Success response
     * @summary: Get campaign by id
     * @description: Get campaign by id
     */
    getCampaignById({ id }?: {
        id: string;
    }): Promise<Campaign>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Promise<Campaigns>} - Success response
     * @summary: Get campaigns
     * @description: Get campaigns
     */
    getCampaigns({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<Campaigns>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.pageId] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on _id
     * @param {Object} [arg.query] -
     * @returns {Promise<Logs>} - Success response
     * @summary: Get communication logs
     * @description: Get communication logs
     */
    getCommunicationLogs({ pageId, pageSize, sort, query }?: {
        pageId?: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }): Promise<Logs>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<DefaultEmailProviders[]>} - Success response
     * @summary: Get default email providers
     * @description: Using this api will fetch a list of email providers provided by the system i.e the default providers.
     */
    getDefaultEmailProviders({}?: any): Promise<DefaultEmailProviders[]>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<DefaultSmsProviders[]>} - Success response
     * @summary: Get default sms providers
     * @description: Using this api will fetch a list of SMS providers provided by the system i.e the default providers.
     */
    getDefaultSmsProviders({}?: any): Promise<DefaultSmsProviders[]>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email provider id
     * @returns {Promise<EmailProvider>} - Success response
     * @summary: Get email provider by id
     * @description: By using this API, a specific email provider will be returned that was retrieved based on the provider's id.
     */
    getEmailProviderById({ id }?: {
        id: string;
    }): Promise<EmailProvider>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Promise<EmailProviders>} - Success response
     * @summary: Get email providers
     * @description: By using this api, you may retrieve all the email providers that the user has setup. The outcome will be in a paginated form, fetching providers according to the current page and page number parameters.
     */
    getEmailProviders({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<EmailProviders>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email template id
     * @returns {Promise<EmailTemplate>} - Success response
     * @summary: Get email template by id
     * @description: Get email template by id
     */
    getEmailTemplateById({ id }?: {
        id: string;
    }): Promise<EmailTemplate>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Promise<EmailTemplates>} - Success response
     * @summary: Get email templates
     * @description: Get email templates
     */
    getEmailTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<EmailTemplates>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {string} [arg.populate] - Populate fields
     * @returns {Promise<EventSubscriptions>} - Success response
     * @summary: Get event subscriptions
     * @description: Get event subscriptions
     */
    getEventSubscriptions({ pageNo, pageSize, populate }?: {
        pageNo?: number;
        pageSize?: number;
        populate?: string;
    }): Promise<EventSubscriptions>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<GlobalProviders>} - Success response
     * @summary: Get global providers
     * @description: Using this API, will retrieve a list of global providers.
     */
    getGlobalProviders({}?: any): Promise<GlobalProviders>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Promise<JobLogs>} - Success response
     * @summary: Get job logs
     * @description: Get job logs
     */
    getJobLogs({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<JobLogs>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Promise<Jobs>} - Success response
     * @summary: Get jobs
     * @description: Get jobs
     */
    getJobs({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<Jobs>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetNRecordsCsvReq} arg.body
     * @returns {Promise<GetNRecordsCsvRes>} - Success response
     * @summary: Get n sample records from csv
     * @description: Get n sample records from csv
     */
    getNSampleRecordsFromCsv({ body }?: {
        body: GetNRecordsCsvReq;
    }): Promise<GetNRecordsCsvRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms provider id
     * @returns {Promise<SmsProvider>} - Success response
     * @summary: Get sms provider by id
     * @description: By using this API, a specific SMS provider will be returned that was retrieved based on the provider's id.
     */
    getSmsProviderById({ id }?: {
        id: string;
    }): Promise<SmsProvider>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Promise<SmsProviders>} - Success response
     * @summary: Get sms providers
     * @description: By using this api, you may retrieve all the SMS providers that the user has setup. The outcome will be in a paginated form, fetching providers according to the current page and page number parameters.
     */
    getSmsProviders({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<SmsProviders>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms template id
     * @returns {Promise<SmsTemplate>} - Success response
     * @summary: Get sms template by id
     * @description: Get sms template by id
     */
    getSmsTemplateById({ id }?: {
        id: string;
    }): Promise<SmsTemplate>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Promise<SmsTemplates>} - Success response
     * @summary: Get sms templates
     * @description: Get sms templates
     */
    getSmsTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<SmsTemplates>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Campaign id
     * @returns {Promise<GetStats>} - Success response
     * @summary: Get stats of campaign by id
     * @description: Get stats of campaign by id
     */
    getStatsOfCampaignById({ id }?: {
        id: string;
    }): Promise<GetStats>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Promise<SystemEmailTemplates>} - Success response
     * @summary: Get system email templates
     * @description: Get system email templates
     */
    getSystemEmailTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<SystemEmailTemplates>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Promise<SystemSmsTemplates>} - Success response
     * @summary: Get system sms templates
     * @description: Get system sms templates
     */
    getSystemSystemTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<SystemSmsTemplates>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Promise<SystemVoiceTemplates>} - Success response
     * @summary: Get system voice templates
     * @description: Get system voice templates
     */
    getSystemVoiceTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<SystemVoiceTemplates>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Voice provider id
     * @returns {Promise<VoiceProvider>} - Success response
     * @summary: Get voice provider by id
     * @description: Get voice provider by id
     */
    getVoiceProviderById({ id }?: {
        id: string;
    }): Promise<VoiceProvider>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Promise<VoiceProviders>} - Success response
     * @summary: Get voice providers
     * @description: Get voice providers
     */
    getVoiceProviders({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<VoiceProviders>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Voice template id
     * @returns {Promise<VoiceTemplate>} - Success response
     * @summary: Get voice template by id
     * @description: Get voice template by id
     */
    getVoiceTemplateById({ id }?: {
        id: string;
    }): Promise<VoiceTemplate>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @returns {Promise<VoiceTemplates>} - Success response
     * @summary: Get voice templates
     * @description: Get voice templates
     */
    getVoiceTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<VoiceTemplates>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EngineRequest} arg.body
     * @returns {Promise<EngineResponse>} - Success response
     * @summary: Send email or sms asynchronously
     * @description: Send email or sms asynchronously
     */
    sendCommunicationAsynchronously({ body }?: {
        body: EngineRequest;
    }): Promise<EngineResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EngineRequest} arg.body
     * @returns {Promise<EngineResponse>} - Success response
     * @summary: Send email or sms synchronously
     * @description: Send email or sms synchronously
     */
    sendCommunicationSynchronously({ body }?: {
        body: EngineRequest;
    }): Promise<EngineResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SendOtpCommsReq} arg.body
     * @returns {Promise<SendOtpCommsRes>} - Success response
     * @summary: Send OTP using email and sms
     * @description: Send OTP Comms via email and sms
     */
    sendOtp({ body }?: {
        body: SendOtpCommsReq;
    }): Promise<SendOtpCommsRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {TriggerJobRequest} arg.body
     * @returns {Promise<TriggerJobResponse>} - Success response
     * @summary: Trigger campaign job
     * @description: Trigger campaign job
     */
    triggerCampaignJob({ body }?: {
        body: TriggerJobRequest;
    }): Promise<TriggerJobResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppProviderReq} arg.body
     * @returns {Promise<AppProvider>} - Success response
     * @summary: update app providers
     * @description: Using this API will update the application providers.
     */
    updateAppProviders({ body }?: {
        body: AppProviderReq;
    }): Promise<AppProvider>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Audience id
     * @param {AudienceReq} arg.body
     * @returns {Promise<Audience>} - Success response
     * @summary: Update audience by id
     * @description: Update audience by id
     */
    updateAudienceById({ id, body }?: {
        id: string;
        body: AudienceReq;
    }): Promise<Audience>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Campaign id
     * @param {CampaignReq} arg.body
     * @returns {Promise<Campaign>} - Success response
     * @summary: Update campaign by id
     * @description: Update campaign by id
     */
    updateCampaignById({ id, body }?: {
        id: string;
        body: CampaignReq;
    }): Promise<Campaign>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email provider id
     * @param {EmailProviderReq} arg.body
     * @returns {Promise<EmailProvider>} - Success response
     * @summary: Update email provider by id
     * @description: By using this API, you can modify a certain email provider's definitions based on it's ID.
     */
    updateEmailProviderById({ id, body }?: {
        id: string;
        body: EmailProviderReq;
    }): Promise<EmailProvider>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email template id
     * @param {EmailTemplateReq} arg.body
     * @returns {Promise<EmailTemplateRes>} - Success response
     * @summary: Update email template by id
     * @description: Update email template by id
     */
    updateEmailTemplateById({ id, body }?: {
        id: string;
        body: EmailTemplateReq;
    }): Promise<EmailTemplateRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms provider id
     * @param {SmsProviderReq} arg.body
     * @returns {Promise<SmsProvider>} - Success response
     * @summary: Update sms provider by id
     * @description: By using this API, you can modify a certain SMS provider's definitions based on it's ID.
     */
    updateSmsProviderById({ id, body }?: {
        id: string;
        body: SmsProviderReq;
    }): Promise<SmsProvider>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms template id
     * @param {SmsTemplateReq} arg.body
     * @returns {Promise<SmsTemplateRes>} - Success response
     * @summary: Update sms template by id
     * @description: Update sms template by id
     */
    updateSmsTemplateById({ id, body }?: {
        id: string;
        body: SmsTemplateReq;
    }): Promise<SmsTemplateRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Voice template id
     * @param {VoiceTemplateReq} arg.body
     * @returns {Promise<VoiceTemplateRes>} - Success response
     * @summary: Update voice template by id
     * @description: Update voice template by id
     */
    updateVoiceTemplateById({ id, body }?: {
        id: string;
        body: VoiceTemplateReq;
    }): Promise<VoiceTemplateRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {VerifyOtpCommsReq} arg.body
     * @returns {Promise<VerifyOtpCommsSuccessRes>} - Success response
     * @summary: Verify OTP sent via email and sms
     * @description: Verify OTP sent via email and sms
     */
    verfiyOtp({ body }?: {
        body: VerifyOtpCommsReq;
    }): Promise<VerifyOtpCommsSuccessRes>;
}
