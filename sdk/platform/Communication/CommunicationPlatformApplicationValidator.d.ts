export = CommunicationPlatformApplicationValidator;
/**
 * @typedef CreateAppPushtokenParam
 * @property {CommunicationPlatformModel.PushtokenReq} body
 */
/**
 * @typedef CreateAudienceParam
 * @property {CommunicationPlatformModel.AudienceReq} body
 */
/**
 * @typedef CreateCampaignParam
 * @property {CommunicationPlatformModel.CampaignReq} body
 */
/**
 * @typedef CreateCommunicationLogsParam
 * @property {CommunicationPlatformModel.Log} body
 */
/**
 * @typedef CreateEmailProviderParam
 * @property {CommunicationPlatformModel.EmailProviderReq} body
 */
/**
 * @typedef CreateEmailTemplateParam
 * @property {CommunicationPlatformModel.EmailTemplateReq} body
 */
/**
 * @typedef CreateEventSubscriptionsParam
 * @property {CommunicationPlatformModel.SubscriptionsObject} body
 */
/**
 * @typedef CreateEventSubscriptionsByBulkParam
 * @property {CommunicationPlatformModel.EventSubscriptionsBulkUpdateRequest} body
 */
/**
 * @typedef CreateJobsParam
 * @property {CommunicationPlatformModel.CreateJobsReq} body
 */
/**
 * @typedef CreateSmsProviderParam
 * @property {CommunicationPlatformModel.SmsProviderReq} body
 */
/**
 * @typedef CreateSmsTemplateParam
 * @property {CommunicationPlatformModel.SmsTemplateReq} body
 */
/**
 * @typedef DeleteAudienceByIdParam
 * @property {string} id - Event subscription id
 * @property {CommunicationPlatformModel.AudienceReq} body
 */
/**
 * @typedef DeleteCampaignByIdParam
 * @property {string} id - Event subscription id
 */
/**
 * @typedef DeleteEmailProviderByIdParam
 * @property {string} id - Event subscription id
 */
/**
 * @typedef DeleteEmailTemplateByIdParam
 * @property {string} id - Event subscription id
 */
/**
 * @typedef DeleteEventSubscriptionsByIdParam
 * @property {string} id - Event subscription id
 */
/**
 * @typedef DeleteSmsProviderByIdParam
 * @property {string} id - Event subscription id
 */
/**
 * @typedef DeleteSmsTemplateByIdParam
 * @property {string} id - Event subscription id
 */
/**
 * @typedef EditEventSubscriptionsParam
 * @property {string} id - Event subscription id
 * @property {CommunicationPlatformModel.SubscriptionsObjectRequest} body
 */
/** @typedef GetAppProvidersParam */
/**
 * @typedef GetAudienceByIdParam
 * @property {string} id - Event subscription id
 */
/**
 * @typedef GetAudiencesParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {string} [sort] - To sort based on created_at
 * @property {string} [query] - To search based on plain text
 */
/**
 * @typedef GetCampaignByIdParam
 * @property {string} id - Event subscription id
 */
/**
 * @typedef GetCampaignsParam
 * @property {string} [query] - To search based on plain text
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {string} [sort] - To sort based on created_at
 */
/**
 * @typedef GetCommunicationLogsParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {string} [sort] - To sort based on created_at
 * @property {Object} [query]
 */
/** @typedef GetDefaultEmailProvidersParam */
/** @typedef GetDefaultSmsProvidersParam */
/** @typedef GetDummyDatasourcesParam */
/**
 * @typedef GetDummyDatasourcesMetaParam
 * @property {number} id - Dummy datasources meta ID
 */
/**
 * @typedef GetEmailProviderByIdParam
 * @property {string} id - Event subscription id
 */
/**
 * @typedef GetEmailProvidersParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {string} [sort] - To sort based on created_at
 * @property {string} [query] - To search based on plain text
 */
/**
 * @typedef GetEmailTemplateByIdParam
 * @property {string} id - Event subscription id
 */
/**
 * @typedef GetEmailTemplatesParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {string} [sort] - To sort based on created_at
 * @property {string} [query] - To search based on plain text
 */
/**
 * @typedef GetEventSubscriptionsParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {string} [populate] - Populate Fields
 */
/**
 * @typedef GetEventSubscriptionsByIdParam
 * @property {string} [populate] - Populate Fields
 * @property {string} id - Event subscription id
 */
/** @typedef GetGlobalProvidersParam */
/** @typedef GetGlobalVariablesParam */
/**
 * @typedef GetJobLogsParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {string} [sort] - To sort based on created_at
 * @property {string} [query] - To search based on plain text
 */
/**
 * @typedef GetJobsParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {string} [sort] - To sort based on created_at
 * @property {string} [query] - To search based on plain text
 */
/**
 * @typedef GetNSampleRecordsFromCsvParam
 * @property {CommunicationPlatformModel.GetNRecordsCsvReq} body
 */
/**
 * @typedef GetNSampleRecordsFromCsvByGetParam
 * @property {number} [count] - Number or records
 * @property {boolean} [header] - Header needed
 * @property {string} [url] - Url of file
 */
/** @typedef GetOtpConfigurationParam */
/**
 * @typedef GetSmsProviderByIdParam
 * @property {string} id - Event subscription id
 */
/**
 * @typedef GetSmsProvidersParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {string} [sort] - To sort based on created_at
 * @property {string} [query] - To search based on plain text
 */
/**
 * @typedef GetSmsTemplateByIdParam
 * @property {string} id - Event subscription id
 */
/**
 * @typedef GetSmsTemplatesParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {string} [sort] - To sort based on created_at
 * @property {string} [query] - To search based on plain text
 */
/**
 * @typedef GetStatsOfCampaignByIdParam
 * @property {string} id - Event subscription id
 */
/**
 * @typedef GetSubscribedEmailTemplatesParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {string} [query] - To search based on plain text
 */
/**
 * @typedef GetSubscribedSmsTemplatesParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {string} [query] - To search based on plain text
 */
/** @typedef GetSystemEmailTemplatesParam */
/** @typedef GetSystemSmsTemplatesParam */
/**
 * @typedef PostGlobalVariablesParam
 * @property {CommunicationPlatformModel.GlobalVariablesReq} body
 */
/**
 * @typedef SendCommunicationAsynchronouslyParam
 * @property {CommunicationPlatformModel.EngineRequest} body
 */
/**
 * @typedef SendCommunicationSynchronouslyParam
 * @property {CommunicationPlatformModel.EngineRequest} body
 */
/**
 * @typedef SendEngineCommunicationSynchronouslyParam
 * @property {CommunicationPlatformModel.EngineRequest} body
 */
/**
 * @typedef SendOtpParam
 * @property {boolean} [ci] - Common Information
 * @property {CommunicationPlatformModel.SendOtpCommsReq} body
 */
/**
 * @typedef TriggerCampaignJobParam
 * @property {CommunicationPlatformModel.TriggerJobRequest} body
 */
/**
 * @typedef UpdateAppProvidersParam
 * @property {CommunicationPlatformModel.AppProviderReq} body
 */
/**
 * @typedef UpdateAppProvidersGlobalProviderParam
 * @property {CommunicationPlatformModel.AppProvidersGlobalProviderRequest} body
 */
/**
 * @typedef UpdateAudienceByIdParam
 * @property {string} id - Event subscription id
 * @property {CommunicationPlatformModel.AudienceReq} body
 */
/**
 * @typedef UpdateCampaignByIdParam
 * @property {string} id - Event subscription id
 * @property {CommunicationPlatformModel.CampaignReq} body
 */
/**
 * @typedef UpdateEmailProviderByIdParam
 * @property {string} id - Event subscription id
 * @property {CommunicationPlatformModel.EmailProviderReq} body
 */
/**
 * @typedef UpdateEmailTemplateByIdParam
 * @property {string} id - Event subscription id
 * @property {CommunicationPlatformModel.EmailTemplateReq} body
 */
/**
 * @typedef UpdateOtpConfigurationParam
 * @property {CommunicationPlatformModel.OtpConfiguration} body
 */
/**
 * @typedef UpdateSmsProviderByIdParam
 * @property {string} id - Event subscription id
 * @property {CommunicationPlatformModel.SmsProviderReq} body
 */
/**
 * @typedef UpdateSmsTemplateByIdParam
 * @property {string} id - Event subscription id
 * @property {CommunicationPlatformModel.SmsTemplateReq} body
 */
/**
 * @typedef VerfiyOtpParam
 * @property {CommunicationPlatformModel.VerifyOtpCommsReq} body
 */
declare class CommunicationPlatformApplicationValidator {
    /** @returns {CreateAppPushtokenParam} */
    static createAppPushtoken(): CreateAppPushtokenParam;
    /** @returns {CreateAudienceParam} */
    static createAudience(): CreateAudienceParam;
    /** @returns {CreateCampaignParam} */
    static createCampaign(): CreateCampaignParam;
    /** @returns {CreateCommunicationLogsParam} */
    static createCommunicationLogs(): CreateCommunicationLogsParam;
    /** @returns {CreateEmailProviderParam} */
    static createEmailProvider(): CreateEmailProviderParam;
    /** @returns {CreateEmailTemplateParam} */
    static createEmailTemplate(): CreateEmailTemplateParam;
    /** @returns {CreateEventSubscriptionsParam} */
    static createEventSubscriptions(): CreateEventSubscriptionsParam;
    /** @returns {CreateEventSubscriptionsByBulkParam} */
    static createEventSubscriptionsByBulk(): CreateEventSubscriptionsByBulkParam;
    /** @returns {CreateJobsParam} */
    static createJobs(): CreateJobsParam;
    /** @returns {CreateSmsProviderParam} */
    static createSmsProvider(): CreateSmsProviderParam;
    /** @returns {CreateSmsTemplateParam} */
    static createSmsTemplate(): CreateSmsTemplateParam;
    /** @returns {DeleteAudienceByIdParam} */
    static deleteAudienceById(): DeleteAudienceByIdParam;
    /** @returns {DeleteCampaignByIdParam} */
    static deleteCampaignById(): DeleteCampaignByIdParam;
    /** @returns {DeleteEmailProviderByIdParam} */
    static deleteEmailProviderById(): DeleteEmailProviderByIdParam;
    /** @returns {DeleteEmailTemplateByIdParam} */
    static deleteEmailTemplateById(): DeleteEmailTemplateByIdParam;
    /** @returns {DeleteEventSubscriptionsByIdParam} */
    static deleteEventSubscriptionsById(): DeleteEventSubscriptionsByIdParam;
    /** @returns {DeleteSmsProviderByIdParam} */
    static deleteSmsProviderById(): DeleteSmsProviderByIdParam;
    /** @returns {DeleteSmsTemplateByIdParam} */
    static deleteSmsTemplateById(): DeleteSmsTemplateByIdParam;
    /** @returns {EditEventSubscriptionsParam} */
    static editEventSubscriptions(): EditEventSubscriptionsParam;
    /** @returns {GetAppProvidersParam} */
    static getAppProviders(): any;
    /** @returns {GetAudienceByIdParam} */
    static getAudienceById(): GetAudienceByIdParam;
    /** @returns {GetAudiencesParam} */
    static getAudiences(): GetAudiencesParam;
    /** @returns {GetCampaignByIdParam} */
    static getCampaignById(): GetCampaignByIdParam;
    /** @returns {GetCampaignsParam} */
    static getCampaigns(): GetCampaignsParam;
    /** @returns {GetCommunicationLogsParam} */
    static getCommunicationLogs(): GetCommunicationLogsParam;
    /** @returns {GetDefaultEmailProvidersParam} */
    static getDefaultEmailProviders(): any;
    /** @returns {GetDefaultSmsProvidersParam} */
    static getDefaultSmsProviders(): any;
    /** @returns {GetDummyDatasourcesParam} */
    static getDummyDatasources(): any;
    /** @returns {GetDummyDatasourcesMetaParam} */
    static getDummyDatasourcesMeta(): GetDummyDatasourcesMetaParam;
    /** @returns {GetEmailProviderByIdParam} */
    static getEmailProviderById(): GetEmailProviderByIdParam;
    /** @returns {GetEmailProvidersParam} */
    static getEmailProviders(): GetEmailProvidersParam;
    /** @returns {GetEmailTemplateByIdParam} */
    static getEmailTemplateById(): GetEmailTemplateByIdParam;
    /** @returns {GetEmailTemplatesParam} */
    static getEmailTemplates(): GetEmailTemplatesParam;
    /** @returns {GetEventSubscriptionsParam} */
    static getEventSubscriptions(): GetEventSubscriptionsParam;
    /** @returns {GetEventSubscriptionsByIdParam} */
    static getEventSubscriptionsById(): GetEventSubscriptionsByIdParam;
    /** @returns {GetGlobalProvidersParam} */
    static getGlobalProviders(): any;
    /** @returns {GetGlobalVariablesParam} */
    static getGlobalVariables(): any;
    /** @returns {GetJobLogsParam} */
    static getJobLogs(): GetJobLogsParam;
    /** @returns {GetJobsParam} */
    static getJobs(): GetJobsParam;
    /** @returns {GetNSampleRecordsFromCsvParam} */
    static getNSampleRecordsFromCsv(): GetNSampleRecordsFromCsvParam;
    /** @returns {GetNSampleRecordsFromCsvByGetParam} */
    static getNSampleRecordsFromCsvByGet(): GetNSampleRecordsFromCsvByGetParam;
    /** @returns {GetOtpConfigurationParam} */
    static getOtpConfiguration(): any;
    /** @returns {GetSmsProviderByIdParam} */
    static getSmsProviderById(): GetSmsProviderByIdParam;
    /** @returns {GetSmsProvidersParam} */
    static getSmsProviders(): GetSmsProvidersParam;
    /** @returns {GetSmsTemplateByIdParam} */
    static getSmsTemplateById(): GetSmsTemplateByIdParam;
    /** @returns {GetSmsTemplatesParam} */
    static getSmsTemplates(): GetSmsTemplatesParam;
    /** @returns {GetStatsOfCampaignByIdParam} */
    static getStatsOfCampaignById(): GetStatsOfCampaignByIdParam;
    /** @returns {GetSubscribedEmailTemplatesParam} */
    static getSubscribedEmailTemplates(): GetSubscribedEmailTemplatesParam;
    /** @returns {GetSubscribedSmsTemplatesParam} */
    static getSubscribedSmsTemplates(): GetSubscribedSmsTemplatesParam;
    /** @returns {GetSystemEmailTemplatesParam} */
    static getSystemEmailTemplates(): any;
    /** @returns {GetSystemSmsTemplatesParam} */
    static getSystemSmsTemplates(): any;
    /** @returns {PostGlobalVariablesParam} */
    static postGlobalVariables(): PostGlobalVariablesParam;
    /** @returns {SendCommunicationAsynchronouslyParam} */
    static sendCommunicationAsynchronously(): SendCommunicationAsynchronouslyParam;
    /** @returns {SendCommunicationSynchronouslyParam} */
    static sendCommunicationSynchronously(): SendCommunicationSynchronouslyParam;
    /** @returns {SendEngineCommunicationSynchronouslyParam} */
    static sendEngineCommunicationSynchronously(): SendEngineCommunicationSynchronouslyParam;
    /** @returns {SendOtpParam} */
    static sendOtp(): SendOtpParam;
    /** @returns {TriggerCampaignJobParam} */
    static triggerCampaignJob(): TriggerCampaignJobParam;
    /** @returns {UpdateAppProvidersParam} */
    static updateAppProviders(): UpdateAppProvidersParam;
    /** @returns {UpdateAppProvidersGlobalProviderParam} */
    static updateAppProvidersGlobalProvider(): UpdateAppProvidersGlobalProviderParam;
    /** @returns {UpdateAudienceByIdParam} */
    static updateAudienceById(): UpdateAudienceByIdParam;
    /** @returns {UpdateCampaignByIdParam} */
    static updateCampaignById(): UpdateCampaignByIdParam;
    /** @returns {UpdateEmailProviderByIdParam} */
    static updateEmailProviderById(): UpdateEmailProviderByIdParam;
    /** @returns {UpdateEmailTemplateByIdParam} */
    static updateEmailTemplateById(): UpdateEmailTemplateByIdParam;
    /** @returns {UpdateOtpConfigurationParam} */
    static updateOtpConfiguration(): UpdateOtpConfigurationParam;
    /** @returns {UpdateSmsProviderByIdParam} */
    static updateSmsProviderById(): UpdateSmsProviderByIdParam;
    /** @returns {UpdateSmsTemplateByIdParam} */
    static updateSmsTemplateById(): UpdateSmsTemplateByIdParam;
    /** @returns {VerfiyOtpParam} */
    static verfiyOtp(): VerfiyOtpParam;
}
declare namespace CommunicationPlatformApplicationValidator {
    export { CreateAppPushtokenParam, CreateAudienceParam, CreateCampaignParam, CreateCommunicationLogsParam, CreateEmailProviderParam, CreateEmailTemplateParam, CreateEventSubscriptionsParam, CreateEventSubscriptionsByBulkParam, CreateJobsParam, CreateSmsProviderParam, CreateSmsTemplateParam, DeleteAudienceByIdParam, DeleteCampaignByIdParam, DeleteEmailProviderByIdParam, DeleteEmailTemplateByIdParam, DeleteEventSubscriptionsByIdParam, DeleteSmsProviderByIdParam, DeleteSmsTemplateByIdParam, EditEventSubscriptionsParam, GetAppProvidersParam, GetAudienceByIdParam, GetAudiencesParam, GetCampaignByIdParam, GetCampaignsParam, GetCommunicationLogsParam, GetDefaultEmailProvidersParam, GetDefaultSmsProvidersParam, GetDummyDatasourcesParam, GetDummyDatasourcesMetaParam, GetEmailProviderByIdParam, GetEmailProvidersParam, GetEmailTemplateByIdParam, GetEmailTemplatesParam, GetEventSubscriptionsParam, GetEventSubscriptionsByIdParam, GetGlobalProvidersParam, GetGlobalVariablesParam, GetJobLogsParam, GetJobsParam, GetNSampleRecordsFromCsvParam, GetNSampleRecordsFromCsvByGetParam, GetOtpConfigurationParam, GetSmsProviderByIdParam, GetSmsProvidersParam, GetSmsTemplateByIdParam, GetSmsTemplatesParam, GetStatsOfCampaignByIdParam, GetSubscribedEmailTemplatesParam, GetSubscribedSmsTemplatesParam, GetSystemEmailTemplatesParam, GetSystemSmsTemplatesParam, PostGlobalVariablesParam, SendCommunicationAsynchronouslyParam, SendCommunicationSynchronouslyParam, SendEngineCommunicationSynchronouslyParam, SendOtpParam, TriggerCampaignJobParam, UpdateAppProvidersParam, UpdateAppProvidersGlobalProviderParam, UpdateAudienceByIdParam, UpdateCampaignByIdParam, UpdateEmailProviderByIdParam, UpdateEmailTemplateByIdParam, UpdateOtpConfigurationParam, UpdateSmsProviderByIdParam, UpdateSmsTemplateByIdParam, VerfiyOtpParam };
}
type CreateAppPushtokenParam = {
    body: CommunicationPlatformModel.PushtokenReq;
};
type CreateAudienceParam = {
    body: CommunicationPlatformModel.AudienceReq;
};
type CreateCampaignParam = {
    body: CommunicationPlatformModel.CampaignReq;
};
type CreateCommunicationLogsParam = {
    body: CommunicationPlatformModel.Log;
};
type CreateEmailProviderParam = {
    body: CommunicationPlatformModel.EmailProviderReq;
};
type CreateEmailTemplateParam = {
    body: CommunicationPlatformModel.EmailTemplateReq;
};
type CreateEventSubscriptionsParam = {
    body: CommunicationPlatformModel.SubscriptionsObject;
};
type CreateEventSubscriptionsByBulkParam = {
    body: CommunicationPlatformModel.EventSubscriptionsBulkUpdateRequest;
};
type CreateJobsParam = {
    body: CommunicationPlatformModel.CreateJobsReq;
};
type CreateSmsProviderParam = {
    body: CommunicationPlatformModel.SmsProviderReq;
};
type CreateSmsTemplateParam = {
    body: CommunicationPlatformModel.SmsTemplateReq;
};
type DeleteAudienceByIdParam = {
    /**
     * - Event subscription id
     */
    id: string;
    body: CommunicationPlatformModel.AudienceReq;
};
type DeleteCampaignByIdParam = {
    /**
     * - Event subscription id
     */
    id: string;
};
type DeleteEmailProviderByIdParam = {
    /**
     * - Event subscription id
     */
    id: string;
};
type DeleteEmailTemplateByIdParam = {
    /**
     * - Event subscription id
     */
    id: string;
};
type DeleteEventSubscriptionsByIdParam = {
    /**
     * - Event subscription id
     */
    id: string;
};
type DeleteSmsProviderByIdParam = {
    /**
     * - Event subscription id
     */
    id: string;
};
type DeleteSmsTemplateByIdParam = {
    /**
     * - Event subscription id
     */
    id: string;
};
type EditEventSubscriptionsParam = {
    /**
     * - Event subscription id
     */
    id: string;
    body: CommunicationPlatformModel.SubscriptionsObjectRequest;
};
type GetAudienceByIdParam = {
    /**
     * - Event subscription id
     */
    id: string;
};
type GetAudiencesParam = {
    /**
     * - Current page no
     */
    pageNo?: number;
    /**
     * - Current request items count
     */
    pageSize?: number;
    /**
     * - To sort based on created_at
     */
    sort?: string;
    /**
     * - To search based on plain text
     */
    query?: string;
};
type GetCampaignByIdParam = {
    /**
     * - Event subscription id
     */
    id: string;
};
type GetCampaignsParam = {
    /**
     * - To search based on plain text
     */
    query?: string;
    /**
     * - Current page no
     */
    pageNo?: number;
    /**
     * - Current request items count
     */
    pageSize?: number;
    /**
     * - To sort based on created_at
     */
    sort?: string;
};
type GetCommunicationLogsParam = {
    /**
     * - Current page no
     */
    pageNo?: number;
    /**
     * - Current request items count
     */
    pageSize?: number;
    /**
     * - To sort based on created_at
     */
    sort?: string;
    query?: any;
};
type GetDummyDatasourcesMetaParam = {
    /**
     * - Dummy datasources meta ID
     */
    id: number;
};
type GetEmailProviderByIdParam = {
    /**
     * - Event subscription id
     */
    id: string;
};
type GetEmailProvidersParam = {
    /**
     * - Current page no
     */
    pageNo?: number;
    /**
     * - Current request items count
     */
    pageSize?: number;
    /**
     * - To sort based on created_at
     */
    sort?: string;
    /**
     * - To search based on plain text
     */
    query?: string;
};
type GetEmailTemplateByIdParam = {
    /**
     * - Event subscription id
     */
    id: string;
};
type GetEmailTemplatesParam = {
    /**
     * - Current page no
     */
    pageNo?: number;
    /**
     * - Current request items count
     */
    pageSize?: number;
    /**
     * - To sort based on created_at
     */
    sort?: string;
    /**
     * - To search based on plain text
     */
    query?: string;
};
type GetEventSubscriptionsParam = {
    /**
     * - Current page no
     */
    pageNo?: number;
    /**
     * - Current request items count
     */
    pageSize?: number;
    /**
     * - Populate Fields
     */
    populate?: string;
};
type GetEventSubscriptionsByIdParam = {
    /**
     * - Populate Fields
     */
    populate?: string;
    /**
     * - Event subscription id
     */
    id: string;
};
type GetJobLogsParam = {
    /**
     * - Current page no
     */
    pageNo?: number;
    /**
     * - Current request items count
     */
    pageSize?: number;
    /**
     * - To sort based on created_at
     */
    sort?: string;
    /**
     * - To search based on plain text
     */
    query?: string;
};
type GetJobsParam = {
    /**
     * - Current page no
     */
    pageNo?: number;
    /**
     * - Current request items count
     */
    pageSize?: number;
    /**
     * - To sort based on created_at
     */
    sort?: string;
    /**
     * - To search based on plain text
     */
    query?: string;
};
type GetNSampleRecordsFromCsvParam = {
    body: CommunicationPlatformModel.GetNRecordsCsvReq;
};
type GetNSampleRecordsFromCsvByGetParam = {
    /**
     * - Number or records
     */
    count?: number;
    /**
     * - Header needed
     */
    header?: boolean;
    /**
     * - Url of file
     */
    url?: string;
};
type GetSmsProviderByIdParam = {
    /**
     * - Event subscription id
     */
    id: string;
};
type GetSmsProvidersParam = {
    /**
     * - Current page no
     */
    pageNo?: number;
    /**
     * - Current request items count
     */
    pageSize?: number;
    /**
     * - To sort based on created_at
     */
    sort?: string;
    /**
     * - To search based on plain text
     */
    query?: string;
};
type GetSmsTemplateByIdParam = {
    /**
     * - Event subscription id
     */
    id: string;
};
type GetSmsTemplatesParam = {
    /**
     * - Current page no
     */
    pageNo?: number;
    /**
     * - Current request items count
     */
    pageSize?: number;
    /**
     * - To sort based on created_at
     */
    sort?: string;
    /**
     * - To search based on plain text
     */
    query?: string;
};
type GetStatsOfCampaignByIdParam = {
    /**
     * - Event subscription id
     */
    id: string;
};
type GetSubscribedEmailTemplatesParam = {
    /**
     * - Current page no
     */
    pageNo?: number;
    /**
     * - Current request items count
     */
    pageSize?: number;
    /**
     * - To search based on plain text
     */
    query?: string;
};
type GetSubscribedSmsTemplatesParam = {
    /**
     * - Current page no
     */
    pageNo?: number;
    /**
     * - Current request items count
     */
    pageSize?: number;
    /**
     * - To search based on plain text
     */
    query?: string;
};
type PostGlobalVariablesParam = {
    body: CommunicationPlatformModel.GlobalVariablesReq;
};
type SendCommunicationAsynchronouslyParam = {
    body: CommunicationPlatformModel.EngineRequest;
};
type SendCommunicationSynchronouslyParam = {
    body: CommunicationPlatformModel.EngineRequest;
};
type SendEngineCommunicationSynchronouslyParam = {
    body: CommunicationPlatformModel.EngineRequest;
};
type SendOtpParam = {
    /**
     * - Common Information
     */
    ci?: boolean;
    body: CommunicationPlatformModel.SendOtpCommsReq;
};
type TriggerCampaignJobParam = {
    body: CommunicationPlatformModel.TriggerJobRequest;
};
type UpdateAppProvidersParam = {
    body: CommunicationPlatformModel.AppProviderReq;
};
type UpdateAppProvidersGlobalProviderParam = {
    body: CommunicationPlatformModel.AppProvidersGlobalProviderRequest;
};
type UpdateAudienceByIdParam = {
    /**
     * - Event subscription id
     */
    id: string;
    body: CommunicationPlatformModel.AudienceReq;
};
type UpdateCampaignByIdParam = {
    /**
     * - Event subscription id
     */
    id: string;
    body: CommunicationPlatformModel.CampaignReq;
};
type UpdateEmailProviderByIdParam = {
    /**
     * - Event subscription id
     */
    id: string;
    body: CommunicationPlatformModel.EmailProviderReq;
};
type UpdateEmailTemplateByIdParam = {
    /**
     * - Event subscription id
     */
    id: string;
    body: CommunicationPlatformModel.EmailTemplateReq;
};
type UpdateOtpConfigurationParam = {
    body: CommunicationPlatformModel.OtpConfiguration;
};
type UpdateSmsProviderByIdParam = {
    /**
     * - Event subscription id
     */
    id: string;
    body: CommunicationPlatformModel.SmsProviderReq;
};
type UpdateSmsTemplateByIdParam = {
    /**
     * - Event subscription id
     */
    id: string;
    body: CommunicationPlatformModel.SmsTemplateReq;
};
type VerfiyOtpParam = {
    body: CommunicationPlatformModel.VerifyOtpCommsReq;
};
type GetAppProvidersParam = any;
type GetDefaultEmailProvidersParam = any;
type GetDefaultSmsProvidersParam = any;
type GetDummyDatasourcesParam = any;
type GetGlobalProvidersParam = any;
type GetGlobalVariablesParam = any;
type GetOtpConfigurationParam = any;
type GetSystemEmailTemplatesParam = any;
type GetSystemSmsTemplatesParam = any;
import CommunicationPlatformModel = require("sdk/output/javascript/code/sdk/platform/Communication/CommunicationPlatformModel");
