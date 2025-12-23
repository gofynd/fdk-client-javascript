export = CommunicationPlatformApplicationValidator;
/**
 * @typedef CreateAudienceParam
 * @property {CommunicationPlatformModel.AudienceReq} body
 */
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
 * @property {CommunicationPlatformModel.EventSubscriptionsBulkUpdatePayload} body
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
 * @property {string} [group] - An event group is a collection of email and SMS
 *   templates. Filtering by event group lets you view or manage all related
 *   communication templates together.
 * @property {string} [subGroup] - Filter by event subgroup. Here, a subgroup is
 *   a subset within a group, containing specific email and SMS templates for
 *   more detailed organization.
 * @property {string} [fulfillmentOptionSlug] - Filter by fulfillment option
 *   slug. Indicates the delivery choice selected, e.g., standard-delivery or
 *   homedelivery.
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
/** @typedef GetSystemEmailTemplatesParam */
/** @typedef GetSystemSmsTemplatesParam */
/**
 * @typedef PostGlobalVariablesParam
 * @property {CommunicationPlatformModel.GlobalVariablesReq} body
 */
/**
 * @typedef SendCommunicationAsynchronouslyParam
 * @property {CommunicationPlatformModel.EnginePayload} body
 */
/**
 * @typedef SendCommunicationSynchronouslyParam
 * @property {CommunicationPlatformModel.EnginePayload} body
 */
/**
 * @typedef SendOtpParam
 * @property {CommunicationPlatformModel.SendOtpCommsReq} body
 */
/**
 * @typedef TriggerCampaignJobParam
 * @property {CommunicationPlatformModel.TriggerJobPayload} body
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
    export { CreateAudienceParam, CreateCampaignParam, CreateEmailProviderParam, CreateEmailTemplateParam, CreateEventSubscriptionsParam, CreateEventSubscriptionsByBulkParam, CreateJobsParam, CreateSmsProviderParam, CreateSmsTemplateParam, DeleteAudienceByIdParam, DeleteEmailProviderByIdParam, DeleteEmailTemplateByIdParam, DeleteEventSubscriptionsByIdParam, DeleteSmsProviderByIdParam, DeleteSmsTemplateByIdParam, EditEventSubscriptionsParam, GetAppProvidersParam, GetAudienceByIdParam, GetAudiencesParam, GetCampaignByIdParam, GetCampaignsParam, GetCommunicationLogsParam, GetDefaultSmsProvidersParam, GetDummyDatasourcesParam, GetDummyDatasourcesMetaParam, GetEmailProviderByIdParam, GetEmailProvidersParam, GetEmailTemplateByIdParam, GetEmailTemplatesParam, GetEventSubscriptionsParam, GetEventSubscriptionsByIdParam, GetGlobalProvidersParam, GetGlobalVariablesParam, GetJobLogsParam, GetJobsParam, GetNSampleRecordsFromCsvParam, GetNSampleRecordsFromCsvByGetParam, GetOtpConfigurationParam, GetSmsProviderByIdParam, GetSmsProvidersParam, GetSmsTemplateByIdParam, GetSmsTemplatesParam, GetStatsOfCampaignByIdParam, GetSubscribedEmailTemplatesParam, GetSubscribedSmsTemplatesParam, GetSystemEmailTemplatesParam, GetSystemSmsTemplatesParam, PostGlobalVariablesParam, SendCommunicationAsynchronouslyParam, SendCommunicationSynchronouslyParam, SendOtpParam, TriggerCampaignJobParam, UpdateAppProvidersParam, UpdateAudienceByIdParam, UpdateCampaignByIdParam, UpdateEmailProviderByIdParam, UpdateEmailTemplateByIdParam, UpdateOtpConfigurationParam, UpdateSmsProviderByIdParam, UpdateSmsTemplateByIdParam, VerfiyOtpParam };
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
    body: CommunicationPlatformModel.EventSubscriptionsBulkUpdatePayload;
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
    /**
     * - An event group is a collection of email and SMS
     * templates. Filtering by event group lets you view or manage all related
     * communication templates together.
     */
    group?: string;
    /**
     * - Filter by event subgroup. Here, a subgroup is
     * a subset within a group, containing specific email and SMS templates for
     * more detailed organization.
     */
    subGroup?: string;
    /**
     * - Filter by fulfillment option
     * slug. Indicates the delivery choice selected, e.g., standard-delivery or
     * homedelivery.
     */
    fulfillmentOptionSlug?: string;
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
    body: CommunicationPlatformModel.EnginePayload;
};
type SendCommunicationSynchronouslyParam = {
    body: CommunicationPlatformModel.EnginePayload;
};
type SendOtpParam = {
    body: CommunicationPlatformModel.SendOtpCommsReq;
};
type TriggerCampaignJobParam = {
    body: CommunicationPlatformModel.TriggerJobPayload;
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
type GetAppProvidersParam = any;
type GetDefaultSmsProvidersParam = any;
type GetDummyDatasourcesParam = any;
type GetGlobalProvidersParam = any;
type GetGlobalVariablesParam = any;
type GetNSampleRecordsFromCsvByGetParam = any;
type GetOtpConfigurationParam = any;
type GetSystemEmailTemplatesParam = any;
type GetSystemSmsTemplatesParam = any;
type UpdateOtpConfigurationParam = any;
import CommunicationPlatformModel = require("./CommunicationPlatformModel");
