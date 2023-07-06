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
     * @description: Create audience
     */
    createAudience({ body }?: CommunicationPlatformApplicationValidator.CreateAudienceParam): Promise<CommunicationPlatformModel.Audience>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateCampaignParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
     * @name createCampaign
     * @summary: Create campaign
     * @description: Create campaign
     */
    createCampaign({ body }?: CommunicationPlatformApplicationValidator.CreateCampaignParam): Promise<CommunicationPlatformModel.Campaign>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateEmailProviderParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
     * @name createEmailProvider
     * @summary: Create email provider
     * @description: By using this API, a new email provider will be created based on the user's customised definitions.
     */
    createEmailProvider({ body }?: CommunicationPlatformApplicationValidator.CreateEmailProviderParam): Promise<CommunicationPlatformModel.EmailProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateEmailTemplateParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailTemplate>} - Success response
     * @name createEmailTemplate
     * @summary: Create email template
     * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to create an email template.
     */
    createEmailTemplate({ body }?: CommunicationPlatformApplicationValidator.CreateEmailTemplateParam): Promise<CommunicationPlatformModel.EmailTemplate>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateSmsProviderParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
     * @name createSmsProvider
     * @summary: Create sms provider
     * @description: By using this API, a new SMS provider will be created based on the user's customised definitions.
     */
    createSmsProvider({ body }?: CommunicationPlatformApplicationValidator.CreateSmsProviderParam): Promise<CommunicationPlatformModel.SmsProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateSmsTemplateParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsTemplate>} - Success response
     * @name createSmsTemplate
     * @summary: Create sms template
     * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to create an sms template.
     */
    createSmsTemplate({ body }?: CommunicationPlatformApplicationValidator.CreateSmsTemplateParam): Promise<CommunicationPlatformModel.SmsTemplate>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateVoiceProviderParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.VoiceProvider>} - Success response
     * @name createVoiceProvider
     * @summary: Create voice provider
     * @description: Create voice provider
     */
    createVoiceProvider({ body }?: CommunicationPlatformApplicationValidator.CreateVoiceProviderParam): Promise<CommunicationPlatformModel.VoiceProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.CreateVoiceTemplateParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.VoiceTemplateRes>} - Success response
     * @name createVoiceTemplate
     * @summary: Create voice template
     * @description: Create voice template
     */
    createVoiceTemplate({ body }?: CommunicationPlatformApplicationValidator.CreateVoiceTemplateParam): Promise<CommunicationPlatformModel.VoiceTemplateRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.DeleteEmailProviderByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.GenericSuccess>} - Success response
     * @name deleteEmailProviderById
     * @summary: delete email provider by id
     * @description: By using this api, you can delete a certain email provider based on its ID.
     */
    deleteEmailProviderById({ id }?: CommunicationPlatformApplicationValidator.DeleteEmailProviderByIdParam): Promise<CommunicationPlatformModel.GenericSuccess>;
    /**
     * @param {CommunicationPlatformApplicationValidator.DeleteEmailTemplateByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.GenericDelete>} - Success response
     * @name deleteEmailTemplateById
     * @summary: Delete email template by id
     * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to delete an email template by id.
     */
    deleteEmailTemplateById({ id }?: CommunicationPlatformApplicationValidator.DeleteEmailTemplateByIdParam): Promise<CommunicationPlatformModel.GenericDelete>;
    /**
     * @param {CommunicationPlatformApplicationValidator.DeleteSmsProviderByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.GenericSuccess>} - Success response
     * @name deleteSmsProviderById
     * @summary: delete sms provider by id
     * @description: By using this api, you can delete a certain SMS provider based on its ID.
     */
    deleteSmsProviderById({ id }?: CommunicationPlatformApplicationValidator.DeleteSmsProviderByIdParam): Promise<CommunicationPlatformModel.GenericSuccess>;
    /**
     * @param {CommunicationPlatformApplicationValidator.DeleteSmsTemplateByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.GenericDelete>} - Success response
     * @name deleteSmsTemplateById
     * @summary: Delete sms template by id
     * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to delete an sms template by ID.
     */
    deleteSmsTemplateById({ id }?: CommunicationPlatformApplicationValidator.DeleteSmsTemplateByIdParam): Promise<CommunicationPlatformModel.GenericDelete>;
    /**
     * @param {CommunicationPlatformApplicationValidator.DeleteVoiceTemplateByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.VoiceTemplateDeleteSuccessRes>}
     *   - Success response
     *
     * @name deleteVoiceTemplateById
     * @summary: Delete voice template by id
     * @description: Delete voice template by id
     */
    deleteVoiceTemplateById({ id }?: CommunicationPlatformApplicationValidator.DeleteVoiceTemplateByIdParam): Promise<CommunicationPlatformModel.VoiceTemplateDeleteSuccessRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetAppProvidersParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.AppProvider>} - Success response
     * @name getAppProviders
     * @summary: Get app providers
     * @description: Using this API will return a list of application providers.
     */
    getAppProviders({}?: any): Promise<CommunicationPlatformModel.AppProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetAudienceByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
     * @name getAudienceById
     * @summary: Get audience by id
     * @description: Get audience by id
     */
    getAudienceById({ id }?: CommunicationPlatformApplicationValidator.GetAudienceByIdParam): Promise<CommunicationPlatformModel.Audience>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetAudiencesParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.Audiences>} - Success response
     * @name getAudiences
     * @summary: Get audiences
     * @description: Get audiences
     */
    getAudiences({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetAudiencesParam): Promise<CommunicationPlatformModel.Audiences>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetBigqueryHeadersParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.BigqueryHeadersRes>} -
     *   Success response
     * @name getBigqueryHeaders
     * @summary: Get bigquery headers
     * @description: Get bigquery headers
     */
    getBigqueryHeaders({ body }?: CommunicationPlatformApplicationValidator.GetBigqueryHeadersParam): Promise<CommunicationPlatformModel.BigqueryHeadersRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetCampaignByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
     * @name getCampaignById
     * @summary: Get campaign by id
     * @description: Get campaign by id
     */
    getCampaignById({ id }?: CommunicationPlatformApplicationValidator.GetCampaignByIdParam): Promise<CommunicationPlatformModel.Campaign>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetCampaignsParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.Campaigns>} - Success response
     * @name getCampaigns
     * @summary: Get campaigns
     * @description: Get campaigns
     */
    getCampaigns({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetCampaignsParam): Promise<CommunicationPlatformModel.Campaigns>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetCommunicationLogsParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.Logs>} - Success response
     * @name getCommunicationLogs
     * @summary: Get communication logs
     * @description: Get communication logs
     */
    getCommunicationLogs({ pageId, pageSize, sort, query }?: CommunicationPlatformApplicationValidator.GetCommunicationLogsParam): Promise<CommunicationPlatformModel.Logs>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetDefaultEmailProvidersParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.DefaultEmailProviders[]>} -
     *   Success response
     * @name getDefaultEmailProviders
     * @summary: Get default email providers
     * @description: Using this api will fetch a list of email providers provided by the system i.e the default providers.
     */
    getDefaultEmailProviders({}?: any): Promise<CommunicationPlatformModel.DefaultEmailProviders[]>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetDefaultSmsProvidersParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.DefaultSmsProviders[]>} -
     *   Success response
     * @name getDefaultSmsProviders
     * @summary: Get default sms providers
     * @description: Using this api will fetch a list of SMS providers provided by the system i.e the default providers.
     */
    getDefaultSmsProviders({}?: any): Promise<CommunicationPlatformModel.DefaultSmsProviders[]>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetEmailProviderByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
     * @name getEmailProviderById
     * @summary: Get email provider by id
     * @description: By using this API, a specific email provider will be returned that was retrieved based on the provider's id.
     */
    getEmailProviderById({ id }?: CommunicationPlatformApplicationValidator.GetEmailProviderByIdParam): Promise<CommunicationPlatformModel.EmailProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetEmailProvidersParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailProviders>} - Success response
     * @name getEmailProviders
     * @summary: Get email providers
     * @description: By using this api, you may retrieve all the email providers that the user has setup. The outcome will be in a paginated form, fetching providers according to the current page and page number parameters.
     */
    getEmailProviders({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetEmailProvidersParam): Promise<CommunicationPlatformModel.EmailProviders>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetEmailTemplateByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailTemplate>} - Success response
     * @name getEmailTemplateById
     * @summary: Get email template by id
     * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to get an email template by id.
     */
    getEmailTemplateById({ id }?: CommunicationPlatformApplicationValidator.GetEmailTemplateByIdParam): Promise<CommunicationPlatformModel.EmailTemplate>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetEmailTemplatesParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailTemplates>} - Success response
     * @name getEmailTemplates
     * @summary: Get email templates
     * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to get all email templates.
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
     * @description: Get event subscriptions
     */
    getEventSubscriptions({ pageNo, pageSize, populate, query }?: CommunicationPlatformApplicationValidator.GetEventSubscriptionsParam): Promise<CommunicationPlatformModel.EventSubscriptions>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetGlobalProvidersParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.GlobalProviders>} - Success response
     * @name getGlobalProviders
     * @summary: Get global providers
     * @description: Using this API, will retrieve a list of global providers.
     */
    getGlobalProviders({}?: any): Promise<CommunicationPlatformModel.GlobalProviders>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetJobLogsParam} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.JobLogs>} - Success response
     * @name getJobLogs
     * @summary: Get job logs
     * @description: Get job logs
     */
    getJobLogs({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetJobLogsParam): Promise<CommunicationPlatformModel.JobLogs>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetJobsParam} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.Jobs>} - Success response
     * @name getJobs
     * @summary: Get jobs
     * @description: Get jobs
     */
    getJobs({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetJobsParam): Promise<CommunicationPlatformModel.Jobs>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetNSampleRecordsFromCsvParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.GetNRecordsCsvRes>} - Success response
     * @name getNSampleRecordsFromCsv
     * @summary: Get n sample records from csv
     * @description: Get n sample records from csv
     */
    getNSampleRecordsFromCsv({ body }?: CommunicationPlatformApplicationValidator.GetNSampleRecordsFromCsvParam): Promise<CommunicationPlatformModel.GetNRecordsCsvRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSmsProviderByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
     * @name getSmsProviderById
     * @summary: Get sms provider by id
     * @description: By using this API, a specific SMS provider will be returned that was retrieved based on the provider's id.
     */
    getSmsProviderById({ id }?: CommunicationPlatformApplicationValidator.GetSmsProviderByIdParam): Promise<CommunicationPlatformModel.SmsProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSmsProvidersParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsProviders>} - Success response
     * @name getSmsProviders
     * @summary: Get sms providers
     * @description: By using this api, you may retrieve all the SMS providers that the user has setup. The outcome will be in a paginated form, fetching providers according to the current page and page number parameters.
     */
    getSmsProviders({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetSmsProvidersParam): Promise<CommunicationPlatformModel.SmsProviders>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSmsTemplateByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsTemplate>} - Success response
     * @name getSmsTemplateById
     * @summary: Get sms template by id
     * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to get an sms template by ID.
     */
    getSmsTemplateById({ id }?: CommunicationPlatformApplicationValidator.GetSmsTemplateByIdParam): Promise<CommunicationPlatformModel.SmsTemplate>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSmsTemplatesParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsTemplates>} - Success response
     * @name getSmsTemplates
     * @summary: Get sms templates
     * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to get all sms templates.
     */
    getSmsTemplates({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetSmsTemplatesParam): Promise<CommunicationPlatformModel.SmsTemplates>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetStatsOfCampaignByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.GetStats>} - Success response
     * @name getStatsOfCampaignById
     * @summary: Get stats of campaign by id
     * @description: Get stats of campaign by id
     */
    getStatsOfCampaignById({ id }?: CommunicationPlatformApplicationValidator.GetStatsOfCampaignByIdParam): Promise<CommunicationPlatformModel.GetStats>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSubscribedEmailTemplatesParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailTemplates>} - Success response
     * @name getSubscribedEmailTemplates
     * @summary: Get subscribed email templates
     * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to get all subscribed email templates.
     */
    getSubscribedEmailTemplates({ pageNo, pageSize }?: CommunicationPlatformApplicationValidator.GetSubscribedEmailTemplatesParam): Promise<CommunicationPlatformModel.EmailTemplates>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSubscribedSmsTemplatesParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsTemplates>} - Success response
     * @name getSubscribedSmsTemplates
     * @summary: Get subscribed sms templates
     * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to get all subscribed sms templates.
     */
    getSubscribedSmsTemplates({ pageNo, pageSize }?: CommunicationPlatformApplicationValidator.GetSubscribedSmsTemplatesParam): Promise<CommunicationPlatformModel.SmsTemplates>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSystemEmailTemplatesParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SystemEmailTemplates>} -
     *   Success response
     * @name getSystemEmailTemplates
     * @summary: Get system email templates
     * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to get all system email templates.
     */
    getSystemEmailTemplates({}?: any): Promise<CommunicationPlatformModel.SystemEmailTemplates>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSystemSmsTemplatesParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SystemSmsTemplates[]>} -
     *   Success response
     * @name getSystemSmsTemplates
     * @summary: Get system sms templates
     * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to get all system sms templates.
     */
    getSystemSmsTemplates({}?: any): Promise<CommunicationPlatformModel.SystemSmsTemplates[]>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetSystemVoiceTemplatesParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SystemVoiceTemplates>} -
     *   Success response
     * @name getSystemVoiceTemplates
     * @summary: Get system voice templates
     * @description: Get system voice templates
     */
    getSystemVoiceTemplates({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetSystemVoiceTemplatesParam): Promise<CommunicationPlatformModel.SystemVoiceTemplates>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetVoiceProviderByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.VoiceProvider>} - Success response
     * @name getVoiceProviderById
     * @summary: Get voice provider by id
     * @description: Get voice provider by id
     */
    getVoiceProviderById({ id }?: CommunicationPlatformApplicationValidator.GetVoiceProviderByIdParam): Promise<CommunicationPlatformModel.VoiceProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetVoiceProvidersParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.VoiceProviders>} - Success response
     * @name getVoiceProviders
     * @summary: Get voice providers
     * @description: Get voice providers
     */
    getVoiceProviders({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetVoiceProvidersParam): Promise<CommunicationPlatformModel.VoiceProviders>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetVoiceTemplateByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.VoiceTemplate>} - Success response
     * @name getVoiceTemplateById
     * @summary: Get voice template by id
     * @description: Get voice template by id
     */
    getVoiceTemplateById({ id }?: CommunicationPlatformApplicationValidator.GetVoiceTemplateByIdParam): Promise<CommunicationPlatformModel.VoiceTemplate>;
    /**
     * @param {CommunicationPlatformApplicationValidator.GetVoiceTemplatesParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.VoiceTemplates>} - Success response
     * @name getVoiceTemplates
     * @summary: Get voice templates
     * @description: Get voice templates
     */
    getVoiceTemplates({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.GetVoiceTemplatesParam): Promise<CommunicationPlatformModel.VoiceTemplates>;
    /**
     * @param {CommunicationPlatformApplicationValidator.SendCommunicationAsynchronouslyParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EngineResponse>} - Success response
     * @name sendCommunicationAsynchronously
     * @summary: Send email or sms asynchronously
     * @description: Send email or sms asynchronously
     */
    sendCommunicationAsynchronously({ body }?: CommunicationPlatformApplicationValidator.SendCommunicationAsynchronouslyParam): Promise<CommunicationPlatformModel.EngineResponse>;
    /**
     * @param {CommunicationPlatformApplicationValidator.SendCommunicationSynchronouslyParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EngineResponse>} - Success response
     * @name sendCommunicationSynchronously
     * @summary: Send email or sms synchronously
     * @description: Send email or sms synchronously
     */
    sendCommunicationSynchronously({ body }?: CommunicationPlatformApplicationValidator.SendCommunicationSynchronouslyParam): Promise<CommunicationPlatformModel.EngineResponse>;
    /**
     * @param {CommunicationPlatformApplicationValidator.SendOtpParam} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.SendOtpCommsRes>} - Success response
     * @name sendOtp
     * @summary: Send OTP using email and sms
     * @description: Send OTP Comms via email and sms
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
     * @description: Trigger campaign job
     */
    triggerCampaignJob({ body }?: CommunicationPlatformApplicationValidator.TriggerCampaignJobParam): Promise<CommunicationPlatformModel.TriggerJobResponse>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateAppProvidersParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.AppProvider>} - Success response
     * @name updateAppProviders
     * @summary: update app providers
     * @description: Using this API will update the application providers.
     */
    updateAppProviders({ body }?: CommunicationPlatformApplicationValidator.UpdateAppProvidersParam): Promise<CommunicationPlatformModel.AppProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateAudienceByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
     * @name updateAudienceById
     * @summary: Update audience by id
     * @description: Update audience by id
     */
    updateAudienceById({ id, body }?: CommunicationPlatformApplicationValidator.UpdateAudienceByIdParam): Promise<CommunicationPlatformModel.Audience>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateCampaignByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
     * @name updateCampaignById
     * @summary: Update campaign by id
     * @description: Update campaign by id
     */
    updateCampaignById({ id, body }?: CommunicationPlatformApplicationValidator.UpdateCampaignByIdParam): Promise<CommunicationPlatformModel.Campaign>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateEmailProviderByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
     * @name updateEmailProviderById
     * @summary: Update email provider by id
     * @description: By using this API, you can modify a certain email provider's definitions based on it's ID.
     */
    updateEmailProviderById({ id, body }?: CommunicationPlatformApplicationValidator.UpdateEmailProviderByIdParam): Promise<CommunicationPlatformModel.EmailProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateEmailTemplateByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailTemplate>} - Success response
     * @name updateEmailTemplateById
     * @summary: Update email template by id
     * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to update an email template by id.
     */
    updateEmailTemplateById({ id, body }?: CommunicationPlatformApplicationValidator.UpdateEmailTemplateByIdParam): Promise<CommunicationPlatformModel.EmailTemplate>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateSmsProviderByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
     * @name updateSmsProviderById
     * @summary: Update sms provider by id
     * @description: By using this API, you can modify a certain SMS provider's definitions based on it's ID.
     */
    updateSmsProviderById({ id, body }?: CommunicationPlatformApplicationValidator.UpdateSmsProviderByIdParam): Promise<CommunicationPlatformModel.SmsProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateSmsTemplateByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsTemplate>} - Success response
     * @name updateSmsTemplateById
     * @summary: Update sms template by id
     * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to update an sms template by ID.
     */
    updateSmsTemplateById({ id, body }?: CommunicationPlatformApplicationValidator.UpdateSmsTemplateByIdParam): Promise<CommunicationPlatformModel.SmsTemplate>;
    /**
     * @param {CommunicationPlatformApplicationValidator.UpdateVoiceTemplateByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.VoiceTemplateRes>} - Success response
     * @name updateVoiceTemplateById
     * @summary: Update voice template by id
     * @description: Update voice template by id
     */
    updateVoiceTemplateById({ id, body }?: CommunicationPlatformApplicationValidator.UpdateVoiceTemplateByIdParam): Promise<CommunicationPlatformModel.VoiceTemplateRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.VerfiyOtpParam} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.VerifyOtpCommsSuccessRes>}
     *   - Success response
     *
     * @name verfiyOtp
     * @summary: Verify OTP sent via email and sms
     * @description: Verify OTP sent via email and sms
     */
    verfiyOtp({ body }?: CommunicationPlatformApplicationValidator.VerfiyOtpParam): Promise<CommunicationPlatformModel.VerifyOtpCommsSuccessRes>;
}
import CommunicationPlatformApplicationValidator = require("./CommunicationPlatformApplicationValidator");
import CommunicationPlatformModel = require("./CommunicationPlatformModel");
