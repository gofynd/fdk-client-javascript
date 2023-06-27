export = Communication;
declare class Communication {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {CommunicationPlatformApplicationValidator.createAudience} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
     * @name createAudience
     * @summary: Create audience
     * @description: Create audience
     */
    createAudience({ body }?: CommunicationPlatformApplicationValidator.createAudience): Promise<CommunicationPlatformModel.Audience>;
    /**
     * @param {CommunicationPlatformApplicationValidator.createCampaign} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
     * @name createCampaign
     * @summary: Create campaign
     * @description: Create campaign
     */
    createCampaign({ body }?: CommunicationPlatformApplicationValidator.createCampaign): Promise<CommunicationPlatformModel.Campaign>;
    /**
     * @param {CommunicationPlatformApplicationValidator.createEmailProvider} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
     * @name createEmailProvider
     * @summary: Create email provider
     * @description: By using this API, a new email provider will be created based on the user's customised definitions.
     */
    createEmailProvider({ body }?: CommunicationPlatformApplicationValidator.createEmailProvider): Promise<CommunicationPlatformModel.EmailProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.createEmailTemplate} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailTemplateRes>} - Success response
     * @name createEmailTemplate
     * @summary: Create email template
     * @description: Create email template
     */
    createEmailTemplate({ body }?: CommunicationPlatformApplicationValidator.createEmailTemplate): Promise<CommunicationPlatformModel.EmailTemplateRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.createSmsProvider} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
     * @name createSmsProvider
     * @summary: Create sms provider
     * @description: By using this API, a new SMS provider will be created based on the user's customised definitions.
     */
    createSmsProvider({ body }?: CommunicationPlatformApplicationValidator.createSmsProvider): Promise<CommunicationPlatformModel.SmsProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.createSmsTemplate} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsTemplateRes>} - Success response
     * @name createSmsTemplate
     * @summary: Create sms template
     * @description: Create sms template
     */
    createSmsTemplate({ body }?: CommunicationPlatformApplicationValidator.createSmsTemplate): Promise<CommunicationPlatformModel.SmsTemplateRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.createVoiceProvider} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.VoiceProvider>} - Success response
     * @name createVoiceProvider
     * @summary: Create voice provider
     * @description: Create voice provider
     */
    createVoiceProvider({ body }?: CommunicationPlatformApplicationValidator.createVoiceProvider): Promise<CommunicationPlatformModel.VoiceProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.createVoiceTemplate} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.VoiceTemplateRes>} - Success response
     * @name createVoiceTemplate
     * @summary: Create voice template
     * @description: Create voice template
     */
    createVoiceTemplate({ body }?: CommunicationPlatformApplicationValidator.createVoiceTemplate): Promise<CommunicationPlatformModel.VoiceTemplateRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.deleteEmailProviderById} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.GenericSuccess>} - Success response
     * @name deleteEmailProviderById
     * @summary: delete email provider by id
     * @description: By using this api, you can delete a certain email provider based on its ID.
     */
    deleteEmailProviderById({ id }?: CommunicationPlatformApplicationValidator.deleteEmailProviderById): Promise<CommunicationPlatformModel.GenericSuccess>;
    /**
     * @param {CommunicationPlatformApplicationValidator.deleteEmailTemplateById} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailTemplateDeleteSuccessRes>}
     *   - Success response
     *
     * @name deleteEmailTemplateById
     * @summary: Delete email template by id
     * @description: Delete email template by id
     */
    deleteEmailTemplateById({ id }?: CommunicationPlatformApplicationValidator.deleteEmailTemplateById): Promise<CommunicationPlatformModel.EmailTemplateDeleteSuccessRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.deleteSmsProviderById} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.GenericSuccess>} - Success response
     * @name deleteSmsProviderById
     * @summary: delete sms provider by id
     * @description: By using this api, you can delete a certain SMS provider based on its ID.
     */
    deleteSmsProviderById({ id }?: CommunicationPlatformApplicationValidator.deleteSmsProviderById): Promise<CommunicationPlatformModel.GenericSuccess>;
    /**
     * @param {CommunicationPlatformApplicationValidator.deleteSmsTemplateById} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsTemplateDeleteSuccessRes>}
     *   - Success response
     *
     * @name deleteSmsTemplateById
     * @summary: Delete sms template by id
     * @description: Delete sms template by id
     */
    deleteSmsTemplateById({ id }?: CommunicationPlatformApplicationValidator.deleteSmsTemplateById): Promise<CommunicationPlatformModel.SmsTemplateDeleteSuccessRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.deleteVoiceTemplateById} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.VoiceTemplateDeleteSuccessRes>}
     *   - Success response
     *
     * @name deleteVoiceTemplateById
     * @summary: Delete voice template by id
     * @description: Delete voice template by id
     */
    deleteVoiceTemplateById({ id }?: CommunicationPlatformApplicationValidator.deleteVoiceTemplateById): Promise<CommunicationPlatformModel.VoiceTemplateDeleteSuccessRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getAppProviders} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.AppProvider>} - Success response
     * @name getAppProviders
     * @summary: Get app providers
     * @description: Using this API will return a list of application providers.
     */
    getAppProviders({}?: any): Promise<CommunicationPlatformModel.AppProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getAudienceById} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
     * @name getAudienceById
     * @summary: Get audience by id
     * @description: Get audience by id
     */
    getAudienceById({ id }?: CommunicationPlatformApplicationValidator.getAudienceById): Promise<CommunicationPlatformModel.Audience>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getAudiences} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.Audiences>} - Success response
     * @name getAudiences
     * @summary: Get audiences
     * @description: Get audiences
     */
    getAudiences({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.getAudiences): Promise<CommunicationPlatformModel.Audiences>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getBigqueryHeaders} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.BigqueryHeadersRes>} -
     *   Success response
     * @name getBigqueryHeaders
     * @summary: Get bigquery headers
     * @description: Get bigquery headers
     */
    getBigqueryHeaders({ body }?: CommunicationPlatformApplicationValidator.getBigqueryHeaders): Promise<CommunicationPlatformModel.BigqueryHeadersRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getCampaignById} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
     * @name getCampaignById
     * @summary: Get campaign by id
     * @description: Get campaign by id
     */
    getCampaignById({ id }?: CommunicationPlatformApplicationValidator.getCampaignById): Promise<CommunicationPlatformModel.Campaign>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getCampaigns} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.Campaigns>} - Success response
     * @name getCampaigns
     * @summary: Get campaigns
     * @description: Get campaigns
     */
    getCampaigns({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.getCampaigns): Promise<CommunicationPlatformModel.Campaigns>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getCommunicationLogs} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.Logs>} - Success response
     * @name getCommunicationLogs
     * @summary: Get communication logs
     * @description: Get communication logs
     */
    getCommunicationLogs({ pageId, pageSize, sort, query }?: CommunicationPlatformApplicationValidator.getCommunicationLogs): Promise<CommunicationPlatformModel.Logs>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getDefaultEmailProviders} arg
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
     * @param {CommunicationPlatformApplicationValidator.getDefaultSmsProviders} arg
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
     * @param {CommunicationPlatformApplicationValidator.getEmailProviderById} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
     * @name getEmailProviderById
     * @summary: Get email provider by id
     * @description: By using this API, a specific email provider will be returned that was retrieved based on the provider's id.
     */
    getEmailProviderById({ id }?: CommunicationPlatformApplicationValidator.getEmailProviderById): Promise<CommunicationPlatformModel.EmailProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getEmailProviders} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailProviders>} - Success response
     * @name getEmailProviders
     * @summary: Get email providers
     * @description: By using this api, you may retrieve all the email providers that the user has setup. The outcome will be in a paginated form, fetching providers according to the current page and page number parameters.
     */
    getEmailProviders({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.getEmailProviders): Promise<CommunicationPlatformModel.EmailProviders>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getEmailTemplateById} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailTemplate>} - Success response
     * @name getEmailTemplateById
     * @summary: Get email template by id
     * @description: Get email template by id
     */
    getEmailTemplateById({ id }?: CommunicationPlatformApplicationValidator.getEmailTemplateById): Promise<CommunicationPlatformModel.EmailTemplate>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getEmailTemplates} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailTemplates>} - Success response
     * @name getEmailTemplates
     * @summary: Get email templates
     * @description: Get email templates
     */
    getEmailTemplates({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.getEmailTemplates): Promise<CommunicationPlatformModel.EmailTemplates>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getEventSubscriptions} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EventSubscriptions>} -
     *   Success response
     * @name getEventSubscriptions
     * @summary: Get event subscriptions
     * @description: Get event subscriptions
     */
    getEventSubscriptions({ pageNo, pageSize, populate }?: CommunicationPlatformApplicationValidator.getEventSubscriptions): Promise<CommunicationPlatformModel.EventSubscriptions>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getGlobalProviders} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.GlobalProviders>} - Success response
     * @name getGlobalProviders
     * @summary: Get global providers
     * @description: Using this API, will retrieve a list of global providers.
     */
    getGlobalProviders({}?: any): Promise<CommunicationPlatformModel.GlobalProviders>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getJobLogs} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.JobLogs>} - Success response
     * @name getJobLogs
     * @summary: Get job logs
     * @description: Get job logs
     */
    getJobLogs({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.getJobLogs): Promise<CommunicationPlatformModel.JobLogs>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getJobs} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.Jobs>} - Success response
     * @name getJobs
     * @summary: Get jobs
     * @description: Get jobs
     */
    getJobs({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.getJobs): Promise<CommunicationPlatformModel.Jobs>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getNSampleRecordsFromCsv} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.GetNRecordsCsvRes>} - Success response
     * @name getNSampleRecordsFromCsv
     * @summary: Get n sample records from csv
     * @description: Get n sample records from csv
     */
    getNSampleRecordsFromCsv({ body }?: CommunicationPlatformApplicationValidator.getNSampleRecordsFromCsv): Promise<CommunicationPlatformModel.GetNRecordsCsvRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getSmsProviderById} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
     * @name getSmsProviderById
     * @summary: Get sms provider by id
     * @description: By using this API, a specific SMS provider will be returned that was retrieved based on the provider's id.
     */
    getSmsProviderById({ id }?: CommunicationPlatformApplicationValidator.getSmsProviderById): Promise<CommunicationPlatformModel.SmsProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getSmsProviders} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.SmsProviders>} - Success response
     * @name getSmsProviders
     * @summary: Get sms providers
     * @description: By using this api, you may retrieve all the SMS providers that the user has setup. The outcome will be in a paginated form, fetching providers according to the current page and page number parameters.
     */
    getSmsProviders({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.getSmsProviders): Promise<CommunicationPlatformModel.SmsProviders>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getSmsTemplateById} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsTemplate>} - Success response
     * @name getSmsTemplateById
     * @summary: Get sms template by id
     * @description: Get sms template by id
     */
    getSmsTemplateById({ id }?: CommunicationPlatformApplicationValidator.getSmsTemplateById): Promise<CommunicationPlatformModel.SmsTemplate>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getSmsTemplates} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.SmsTemplates>} - Success response
     * @name getSmsTemplates
     * @summary: Get sms templates
     * @description: Get sms templates
     */
    getSmsTemplates({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.getSmsTemplates): Promise<CommunicationPlatformModel.SmsTemplates>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getStatsOfCampaignById} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.GetStats>} - Success response
     * @name getStatsOfCampaignById
     * @summary: Get stats of campaign by id
     * @description: Get stats of campaign by id
     */
    getStatsOfCampaignById({ id }?: CommunicationPlatformApplicationValidator.getStatsOfCampaignById): Promise<CommunicationPlatformModel.GetStats>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getSystemEmailTemplates} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SystemEmailTemplates>} -
     *   Success response
     * @name getSystemEmailTemplates
     * @summary: Get system email templates
     * @description: Get system email templates
     */
    getSystemEmailTemplates({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.getSystemEmailTemplates): Promise<CommunicationPlatformModel.SystemEmailTemplates>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getSystemSystemTemplates} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SystemSmsTemplates>} -
     *   Success response
     * @name getSystemSystemTemplates
     * @summary: Get system sms templates
     * @description: Get system sms templates
     */
    getSystemSystemTemplates({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.getSystemSystemTemplates): Promise<CommunicationPlatformModel.SystemSmsTemplates>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getSystemVoiceTemplates} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SystemVoiceTemplates>} -
     *   Success response
     * @name getSystemVoiceTemplates
     * @summary: Get system voice templates
     * @description: Get system voice templates
     */
    getSystemVoiceTemplates({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.getSystemVoiceTemplates): Promise<CommunicationPlatformModel.SystemVoiceTemplates>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getVoiceProviderById} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.VoiceProvider>} - Success response
     * @name getVoiceProviderById
     * @summary: Get voice provider by id
     * @description: Get voice provider by id
     */
    getVoiceProviderById({ id }?: CommunicationPlatformApplicationValidator.getVoiceProviderById): Promise<CommunicationPlatformModel.VoiceProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getVoiceProviders} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.VoiceProviders>} - Success response
     * @name getVoiceProviders
     * @summary: Get voice providers
     * @description: Get voice providers
     */
    getVoiceProviders({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.getVoiceProviders): Promise<CommunicationPlatformModel.VoiceProviders>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getVoiceTemplateById} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.VoiceTemplate>} - Success response
     * @name getVoiceTemplateById
     * @summary: Get voice template by id
     * @description: Get voice template by id
     */
    getVoiceTemplateById({ id }?: CommunicationPlatformApplicationValidator.getVoiceTemplateById): Promise<CommunicationPlatformModel.VoiceTemplate>;
    /**
     * @param {CommunicationPlatformApplicationValidator.getVoiceTemplates} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.VoiceTemplates>} - Success response
     * @name getVoiceTemplates
     * @summary: Get voice templates
     * @description: Get voice templates
     */
    getVoiceTemplates({ pageNo, pageSize, sort }?: CommunicationPlatformApplicationValidator.getVoiceTemplates): Promise<CommunicationPlatformModel.VoiceTemplates>;
    /**
     * @param {CommunicationPlatformApplicationValidator.sendCommunicationAsynchronously} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EngineResponse>} - Success response
     * @name sendCommunicationAsynchronously
     * @summary: Send email or sms asynchronously
     * @description: Send email or sms asynchronously
     */
    sendCommunicationAsynchronously({ body }?: CommunicationPlatformApplicationValidator.sendCommunicationAsynchronously): Promise<CommunicationPlatformModel.EngineResponse>;
    /**
     * @param {CommunicationPlatformApplicationValidator.sendCommunicationSynchronously} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EngineResponse>} - Success response
     * @name sendCommunicationSynchronously
     * @summary: Send email or sms synchronously
     * @description: Send email or sms synchronously
     */
    sendCommunicationSynchronously({ body }?: CommunicationPlatformApplicationValidator.sendCommunicationSynchronously): Promise<CommunicationPlatformModel.EngineResponse>;
    /**
     * @param {CommunicationPlatformApplicationValidator.sendOtp} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.SendOtpCommsRes>} - Success response
     * @name sendOtp
     * @summary: Send OTP using email and sms
     * @description: Send OTP Comms via email and sms
     */
    sendOtp({ body }?: CommunicationPlatformApplicationValidator.sendOtp): Promise<CommunicationPlatformModel.SendOtpCommsRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.triggerCampaignJob} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.TriggerJobResponse>} -
     *   Success response
     * @name triggerCampaignJob
     * @summary: Trigger campaign job
     * @description: Trigger campaign job
     */
    triggerCampaignJob({ body }?: CommunicationPlatformApplicationValidator.triggerCampaignJob): Promise<CommunicationPlatformModel.TriggerJobResponse>;
    /**
     * @param {CommunicationPlatformApplicationValidator.updateAppProviders} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.AppProvider>} - Success response
     * @name updateAppProviders
     * @summary: update app providers
     * @description: Using this API will update the application providers.
     */
    updateAppProviders({ body }?: CommunicationPlatformApplicationValidator.updateAppProviders): Promise<CommunicationPlatformModel.AppProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.updateAudienceById} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
     * @name updateAudienceById
     * @summary: Update audience by id
     * @description: Update audience by id
     */
    updateAudienceById({ id, body }?: CommunicationPlatformApplicationValidator.updateAudienceById): Promise<CommunicationPlatformModel.Audience>;
    /**
     * @param {CommunicationPlatformApplicationValidator.updateCampaignById} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
     * @name updateCampaignById
     * @summary: Update campaign by id
     * @description: Update campaign by id
     */
    updateCampaignById({ id, body }?: CommunicationPlatformApplicationValidator.updateCampaignById): Promise<CommunicationPlatformModel.Campaign>;
    /**
     * @param {CommunicationPlatformApplicationValidator.updateEmailProviderById} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
     * @name updateEmailProviderById
     * @summary: Update email provider by id
     * @description: By using this API, you can modify a certain email provider's definitions based on it's ID.
     */
    updateEmailProviderById({ id, body }?: CommunicationPlatformApplicationValidator.updateEmailProviderById): Promise<CommunicationPlatformModel.EmailProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.updateEmailTemplateById} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.EmailTemplateRes>} - Success response
     * @name updateEmailTemplateById
     * @summary: Update email template by id
     * @description: Update email template by id
     */
    updateEmailTemplateById({ id, body }?: CommunicationPlatformApplicationValidator.updateEmailTemplateById): Promise<CommunicationPlatformModel.EmailTemplateRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.updateSmsProviderById} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
     * @name updateSmsProviderById
     * @summary: Update sms provider by id
     * @description: By using this API, you can modify a certain SMS provider's definitions based on it's ID.
     */
    updateSmsProviderById({ id, body }?: CommunicationPlatformApplicationValidator.updateSmsProviderById): Promise<CommunicationPlatformModel.SmsProvider>;
    /**
     * @param {CommunicationPlatformApplicationValidator.updateSmsTemplateById} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SmsTemplateRes>} - Success response
     * @name updateSmsTemplateById
     * @summary: Update sms template by id
     * @description: Update sms template by id
     */
    updateSmsTemplateById({ id, body }?: CommunicationPlatformApplicationValidator.updateSmsTemplateById): Promise<CommunicationPlatformModel.SmsTemplateRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.updateVoiceTemplateById} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.VoiceTemplateRes>} - Success response
     * @name updateVoiceTemplateById
     * @summary: Update voice template by id
     * @description: Update voice template by id
     */
    updateVoiceTemplateById({ id, body }?: CommunicationPlatformApplicationValidator.updateVoiceTemplateById): Promise<CommunicationPlatformModel.VoiceTemplateRes>;
    /**
     * @param {CommunicationPlatformApplicationValidator.verfiyOtp} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.VerifyOtpCommsSuccessRes>}
     *   - Success response
     *
     * @name verfiyOtp
     * @summary: Verify OTP sent via email and sms
     * @description: Verify OTP sent via email and sms
     */
    verfiyOtp({ body }?: CommunicationPlatformApplicationValidator.verfiyOtp): Promise<CommunicationPlatformModel.VerifyOtpCommsSuccessRes>;
}
import CommunicationPlatformApplicationValidator = require("./CommunicationPlatformApplicationValidator");
import CommunicationPlatformModel = require("./CommunicationPlatformModel");
