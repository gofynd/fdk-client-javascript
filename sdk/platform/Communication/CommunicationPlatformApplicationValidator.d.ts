export = CommunicationPlatformApplicationValidator;
/**
 * @typedef CreateAudienceParam
 * @property {CommunicationPlatformModel.AudienceReq} body
 */
/** @typedef CreateBigQueryHeadersParam */
/** @typedef CreateBigQueryNCountParam */
/** @typedef CreateBigQueryRowCountParam */
/**
 * @typedef CreateCampaignParam
 * @property {CommunicationPlatformModel.CampaignReq} body
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
 * @property {string} id - Audience id
 * @property {CommunicationPlatformModel.AudienceReq} body
 */
/**
 * @typedef DeleteEmailProviderByIdParam
 * @property {string} id - Email provider id
 */
/**
 * @typedef DeleteEmailTemplateByIdParam
 * @property {string} id - Email template id
 */
/**
 * @typedef DeleteEventSubscriptionsByIdParam
 * @property {string} id - Event subscription id
 */
/**
 * @typedef DeleteSmsProviderByIdParam
 * @property {string} id - Sms provider id
 */
/**
 * @typedef DeleteSmsTemplateByIdParam
 * @property {string} id - Sms template id
 */
/**
 * @typedef EditEventSubscriptionsParam
 * @property {string} id - Event subscription id
 * @property {CommunicationPlatformModel.SubscriptionsObject} body
 */
/** @typedef GetAppProvidersParam */
/**
 * @typedef GetAudienceByIdParam
 * @property {string} id - Audience id
 */
/**
 * @typedef GetAudiencesParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 * @property {Object} [query] - To search based on plain text
 */
/**
 * @typedef GetBigQueryHeadersByIdParam
 * @property {string} id - Audience id
 */
/**
 * @typedef GetBigQueryRowCountByIdParam
 * @property {string} id - Audience id
 */
/**
 * @typedef GetCampaignByIdParam
 * @property {string} id - Campaign id
 */
/**
 * @typedef GetCampaignsParam
 * @property {Object} [query] - To search based on plain text
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 */
/**
 * @typedef GetCommunicationLogsParam
 * @property {string} [pageId] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on _id
 * @property {Object} [query]
 */
/** @typedef GetDefaultSmsProvidersParam */
/** @typedef GetDummyDatasourcesParam */
/**
 * @typedef GetDummyDatasourcesMetaParam
 * @property {number} id - Dummy datasources meta ID
 */
/**
 * @typedef GetEmailProviderByIdParam
 * @property {string} id - Email provider id
 */
/**
 * @typedef GetEmailProvidersParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 * @property {Object} [query] - To search based on plain text
 */
/**
 * @typedef GetEmailTemplateByIdParam
 * @property {string} id - Email template id
 */
/**
 * @typedef GetEmailTemplatesParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 * @property {Object} [query] - To search based on plain text
 */
/**
 * @typedef GetEventSubscriptionsParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {string} [populate] - Populate Fields
 */
/**
 * @typedef GetEventSubscriptionsByIdParam
 * @property {string} id - Event subscription id
 * @property {string} [populate] - Populate Fields
 */
/** @typedef GetGlobalProvidersParam */
/** @typedef GetGlobalVariablesParam */
/**
 * @typedef GetJobLogsParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 * @property {Object} [query] - To search based on plain text
 */
/**
 * @typedef GetJobsParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 * @property {Object} [query] - To search based on plain text
 */
/**
 * @typedef GetNSampleRecordsFromCsvParam
 * @property {CommunicationPlatformModel.GetNRecordsCsvReq} body
 */
/** @typedef GetNSampleRecordsFromCsvByGetParam */
/** @typedef GetOtpConfigurationParam */
/**
 * @typedef GetSmsProviderByIdParam
 * @property {string} id - Sms provider id
 */
/**
 * @typedef GetSmsProvidersParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 * @property {Object} [query] - To search based on plain text
 */
/**
 * @typedef GetSmsTemplateByIdParam
 * @property {string} id - Sms template id
 */
/**
 * @typedef GetSmsTemplatesParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 * @property {Object} [query] - To search based on plain text
 */
/**
 * @typedef GetStatsOfCampaignByIdParam
 * @property {string} id - Campaign id
 */
/**
 * @typedef GetSubscribedEmailTemplatesParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [query] - To search based on plain text
 */
/**
 * @typedef GetSubscribedSmsTemplatesParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [query] - To search based on plain text
 */
/** @typedef GetSystemAudiencesParam */
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
 * @typedef UpdateAudienceByIdParam
 * @property {string} id - Audience id
 * @property {CommunicationPlatformModel.AudienceReq} body
 */
/**
 * @typedef UpdateCampaignByIdParam
 * @property {string} id - Campaign id
 * @property {CommunicationPlatformModel.CampaignReq} body
 */
/**
 * @typedef UpdateEmailProviderByIdParam
 * @property {string} id - Email provider id
 * @property {CommunicationPlatformModel.EmailProviderReq} body
 */
/**
 * @typedef UpdateEmailTemplateByIdParam
 * @property {string} id - Email template id
 * @property {CommunicationPlatformModel.EmailTemplateReq} body
 */
/** @typedef UpdateOtpConfigurationParam */
/**
 * @typedef UpdateSmsProviderByIdParam
 * @property {string} id - Sms provider id
 * @property {CommunicationPlatformModel.SmsProviderReq} body
 */
/**
 * @typedef UpdateSmsTemplateByIdParam
 * @property {string} id - Sms template id
 * @property {CommunicationPlatformModel.SmsTemplateReq} body
 */
/**
 * @typedef VerfiyOtpParam
 * @property {CommunicationPlatformModel.VerifyOtpCommsReq} body
 */
declare class CommunicationPlatformApplicationValidator {
    /** @returns {CreateAudienceParam} */
    static createAudience(): CreateAudienceParam;
    /** @returns {CreateBigQueryHeadersParam} */
    static createBigQueryHeaders(): any;
    /** @returns {CreateBigQueryNCountParam} */
    static createBigQueryNCount(): any;
    /** @returns {CreateBigQueryRowCountParam} */
    static createBigQueryRowCount(): any;
    /** @returns {CreateCampaignParam} */
    static createCampaign(): CreateCampaignParam;
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
    /** @returns {GetBigQueryHeadersByIdParam} */
    static getBigQueryHeadersById(): GetBigQueryHeadersByIdParam;
    /** @returns {GetBigQueryRowCountByIdParam} */
    static getBigQueryRowCountById(): GetBigQueryRowCountByIdParam;
    /** @returns {GetCampaignByIdParam} */
    static getCampaignById(): GetCampaignByIdParam;
    /** @returns {GetCampaignsParam} */
    static getCampaigns(): GetCampaignsParam;
    /** @returns {GetCommunicationLogsParam} */
    static getCommunicationLogs(): GetCommunicationLogsParam;
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
    static getNSampleRecordsFromCsvByGet(): any;
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
    /** @returns {GetSystemAudiencesParam} */
    static getSystemAudiences(): any;
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
    /** @returns {SendOtpParam} */
    static sendOtp(): SendOtpParam;
    /** @returns {TriggerCampaignJobParam} */
    static triggerCampaignJob(): TriggerCampaignJobParam;
    /** @returns {UpdateAppProvidersParam} */
    static updateAppProviders(): UpdateAppProvidersParam;
    /** @returns {UpdateAudienceByIdParam} */
    static updateAudienceById(): UpdateAudienceByIdParam;
    /** @returns {UpdateCampaignByIdParam} */
    static updateCampaignById(): UpdateCampaignByIdParam;
    /** @returns {UpdateEmailProviderByIdParam} */
    static updateEmailProviderById(): UpdateEmailProviderByIdParam;
    /** @returns {UpdateEmailTemplateByIdParam} */
    static updateEmailTemplateById(): UpdateEmailTemplateByIdParam;
    /** @returns {UpdateOtpConfigurationParam} */
    static updateOtpConfiguration(): any;
    /** @returns {UpdateSmsProviderByIdParam} */
    static updateSmsProviderById(): UpdateSmsProviderByIdParam;
    /** @returns {UpdateSmsTemplateByIdParam} */
    static updateSmsTemplateById(): UpdateSmsTemplateByIdParam;
    /** @returns {VerfiyOtpParam} */
    static verfiyOtp(): VerfiyOtpParam;
}
declare namespace CommunicationPlatformApplicationValidator {
    export { CreateAudienceParam, CreateBigQueryHeadersParam, CreateBigQueryNCountParam, CreateBigQueryRowCountParam, CreateCampaignParam, CreateEmailProviderParam, CreateEmailTemplateParam, CreateEventSubscriptionsParam, CreateEventSubscriptionsByBulkParam, CreateJobsParam, CreateSmsProviderParam, CreateSmsTemplateParam, DeleteAudienceByIdParam, DeleteEmailProviderByIdParam, DeleteEmailTemplateByIdParam, DeleteEventSubscriptionsByIdParam, DeleteSmsProviderByIdParam, DeleteSmsTemplateByIdParam, EditEventSubscriptionsParam, GetAppProvidersParam, GetAudienceByIdParam, GetAudiencesParam, GetBigQueryHeadersByIdParam, GetBigQueryRowCountByIdParam, GetCampaignByIdParam, GetCampaignsParam, GetCommunicationLogsParam, GetDefaultSmsProvidersParam, GetDummyDatasourcesParam, GetDummyDatasourcesMetaParam, GetEmailProviderByIdParam, GetEmailProvidersParam, GetEmailTemplateByIdParam, GetEmailTemplatesParam, GetEventSubscriptionsParam, GetEventSubscriptionsByIdParam, GetGlobalProvidersParam, GetGlobalVariablesParam, GetJobLogsParam, GetJobsParam, GetNSampleRecordsFromCsvParam, GetNSampleRecordsFromCsvByGetParam, GetOtpConfigurationParam, GetSmsProviderByIdParam, GetSmsProvidersParam, GetSmsTemplateByIdParam, GetSmsTemplatesParam, GetStatsOfCampaignByIdParam, GetSubscribedEmailTemplatesParam, GetSubscribedSmsTemplatesParam, GetSystemAudiencesParam, GetSystemEmailTemplatesParam, GetSystemSmsTemplatesParam, PostGlobalVariablesParam, SendCommunicationAsynchronouslyParam, SendCommunicationSynchronouslyParam, SendOtpParam, TriggerCampaignJobParam, UpdateAppProvidersParam, UpdateAudienceByIdParam, UpdateCampaignByIdParam, UpdateEmailProviderByIdParam, UpdateEmailTemplateByIdParam, UpdateOtpConfigurationParam, UpdateSmsProviderByIdParam, UpdateSmsTemplateByIdParam, VerfiyOtpParam };
}
type CreateAudienceParam = {
    body: CommunicationPlatformModel.AudienceReq;
};
type CreateCampaignParam = {
    body: CommunicationPlatformModel.CampaignReq;
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
     * - Audience id
     */
    id: string;
    body: CommunicationPlatformModel.AudienceReq;
};
type DeleteEmailProviderByIdParam = {
    /**
     * - Email provider id
     */
    id: string;
};
type DeleteEmailTemplateByIdParam = {
    /**
     * - Email template id
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
     * - Sms provider id
     */
    id: string;
};
type DeleteSmsTemplateByIdParam = {
    /**
     * - Sms template id
     */
    id: string;
};
type EditEventSubscriptionsParam = {
    /**
     * - Event subscription id
     */
    id: string;
    body: CommunicationPlatformModel.SubscriptionsObject;
};
type GetAudienceByIdParam = {
    /**
     * - Audience id
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
    sort?: any;
    /**
     * - To search based on plain text
     */
    query?: any;
};
type GetBigQueryHeadersByIdParam = {
    /**
     * - Audience id
     */
    id: string;
};
type GetBigQueryRowCountByIdParam = {
    /**
     * - Audience id
     */
    id: string;
};
type GetCampaignByIdParam = {
    /**
     * - Campaign id
     */
    id: string;
};
type GetCampaignsParam = {
    /**
     * - To search based on plain text
     */
    query?: any;
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
    sort?: any;
};
type GetCommunicationLogsParam = {
    /**
     * - Current page no
     */
    pageId?: string;
    /**
     * - Current request items count
     */
    pageSize?: number;
    /**
     * - To sort based on _id
     */
    sort?: any;
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
     * - Email provider id
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
    sort?: any;
    /**
     * - To search based on plain text
     */
    query?: any;
};
type GetEmailTemplateByIdParam = {
    /**
     * - Email template id
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
    sort?: any;
    /**
     * - To search based on plain text
     */
    query?: any;
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
     * - Event subscription id
     */
    id: string;
    /**
     * - Populate Fields
     */
    populate?: string;
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
    sort?: any;
    /**
     * - To search based on plain text
     */
    query?: any;
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
    sort?: any;
    /**
     * - To search based on plain text
     */
    query?: any;
};
type GetNSampleRecordsFromCsvParam = {
    body: CommunicationPlatformModel.GetNRecordsCsvReq;
};
type GetSmsProviderByIdParam = {
    /**
     * - Sms provider id
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
    sort?: any;
    /**
     * - To search based on plain text
     */
    query?: any;
};
type GetSmsTemplateByIdParam = {
    /**
     * - Sms template id
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
    sort?: any;
    /**
     * - To search based on plain text
     */
    query?: any;
};
type GetStatsOfCampaignByIdParam = {
    /**
     * - Campaign id
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
    query?: any;
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
    query?: any;
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
type UpdateAudienceByIdParam = {
    /**
     * - Audience id
     */
    id: string;
    body: CommunicationPlatformModel.AudienceReq;
};
type UpdateCampaignByIdParam = {
    /**
     * - Campaign id
     */
    id: string;
    body: CommunicationPlatformModel.CampaignReq;
};
type UpdateEmailProviderByIdParam = {
    /**
     * - Email provider id
     */
    id: string;
    body: CommunicationPlatformModel.EmailProviderReq;
};
type UpdateEmailTemplateByIdParam = {
    /**
     * - Email template id
     */
    id: string;
    body: CommunicationPlatformModel.EmailTemplateReq;
};
type UpdateSmsProviderByIdParam = {
    /**
     * - Sms provider id
     */
    id: string;
    body: CommunicationPlatformModel.SmsProviderReq;
};
type UpdateSmsTemplateByIdParam = {
    /**
     * - Sms template id
     */
    id: string;
    body: CommunicationPlatformModel.SmsTemplateReq;
};
type VerfiyOtpParam = {
    body: CommunicationPlatformModel.VerifyOtpCommsReq;
};
type CreateBigQueryHeadersParam = any;
type CreateBigQueryNCountParam = any;
type CreateBigQueryRowCountParam = any;
type GetAppProvidersParam = any;
type GetDefaultSmsProvidersParam = any;
type GetDummyDatasourcesParam = any;
type GetGlobalProvidersParam = any;
type GetGlobalVariablesParam = any;
type GetNSampleRecordsFromCsvByGetParam = any;
type GetOtpConfigurationParam = any;
type GetSystemAudiencesParam = any;
type GetSystemEmailTemplatesParam = any;
type GetSystemSmsTemplatesParam = any;
type UpdateOtpConfigurationParam = any;
import CommunicationPlatformModel = require("sdk/output/javascript/code/sdk/platform/Communication/CommunicationPlatformModel");
