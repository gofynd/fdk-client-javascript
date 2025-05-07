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
 * @typedef CreateEventSubscriptionsByBulkParam
 * @property {CommunicationPlatformModel.EventSubscriptionsBulkUpdateReq} body
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
 * @typedef DeleteEmailTemplateByIdParam
 * @property {string} id - Event subscription id
 */
/**
 * @typedef DeleteSmsTemplateByIdParam
 * @property {string} id - Event subscription id
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
 * @property {CommunicationPlatformModel.EngineReq} body
 */
/**
 * @typedef SendCommunicationSynchronouslyParam
 * @property {CommunicationPlatformModel.EngineReq} body
 */
/**
 * @typedef SendOtpParam
 * @property {boolean} [ci] - Common Information
 * @property {CommunicationPlatformModel.SendOtpCommsReq} body
 */
/**
 * @typedef TriggerCampaignJobParam
 * @property {CommunicationPlatformModel.TriggerJobReq} body
 */
/**
 * @typedef UpdateAppProvidersParam
 * @property {CommunicationPlatformModel.AppProviderReq} body
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
    /** @returns {CreateAudienceParam} */
    static createAudience(): CreateAudienceParam;
    /** @returns {CreateCampaignParam} */
    static createCampaign(): CreateCampaignParam;
    /** @returns {CreateEmailProviderParam} */
    static createEmailProvider(): CreateEmailProviderParam;
    /** @returns {CreateEmailTemplateParam} */
    static createEmailTemplate(): CreateEmailTemplateParam;
    /** @returns {CreateEventSubscriptionsByBulkParam} */
    static createEventSubscriptionsByBulk(): CreateEventSubscriptionsByBulkParam;
    /** @returns {CreateSmsProviderParam} */
    static createSmsProvider(): CreateSmsProviderParam;
    /** @returns {CreateSmsTemplateParam} */
    static createSmsTemplate(): CreateSmsTemplateParam;
    /** @returns {DeleteEmailTemplateByIdParam} */
    static deleteEmailTemplateById(): DeleteEmailTemplateByIdParam;
    /** @returns {DeleteSmsTemplateByIdParam} */
    static deleteSmsTemplateById(): DeleteSmsTemplateByIdParam;
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
    export { CreateAudienceParam, CreateCampaignParam, CreateEmailProviderParam, CreateEmailTemplateParam, CreateEventSubscriptionsByBulkParam, CreateSmsProviderParam, CreateSmsTemplateParam, DeleteEmailTemplateByIdParam, DeleteSmsTemplateByIdParam, GetAppProvidersParam, GetAudienceByIdParam, GetAudiencesParam, GetCampaignByIdParam, GetCampaignsParam, GetCommunicationLogsParam, GetDefaultEmailProvidersParam, GetDefaultSmsProvidersParam, GetEmailProviderByIdParam, GetEmailProvidersParam, GetEmailTemplateByIdParam, GetEmailTemplatesParam, GetEventSubscriptionsParam, GetGlobalProvidersParam, GetGlobalVariablesParam, GetJobLogsParam, GetJobsParam, GetNSampleRecordsFromCsvParam, GetOtpConfigurationParam, GetSmsProviderByIdParam, GetSmsProvidersParam, GetSmsTemplateByIdParam, GetSmsTemplatesParam, GetStatsOfCampaignByIdParam, GetSubscribedEmailTemplatesParam, GetSubscribedSmsTemplatesParam, GetSystemEmailTemplatesParam, GetSystemSmsTemplatesParam, PostGlobalVariablesParam, SendCommunicationAsynchronouslyParam, SendCommunicationSynchronouslyParam, SendOtpParam, TriggerCampaignJobParam, UpdateAppProvidersParam, UpdateCampaignByIdParam, UpdateEmailProviderByIdParam, UpdateEmailTemplateByIdParam, UpdateOtpConfigurationParam, UpdateSmsProviderByIdParam, UpdateSmsTemplateByIdParam, VerfiyOtpParam };
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
type CreateEventSubscriptionsByBulkParam = {
    body: CommunicationPlatformModel.EventSubscriptionsBulkUpdateReq;
};
type CreateSmsProviderParam = {
    body: CommunicationPlatformModel.SmsProviderReq;
};
type CreateSmsTemplateParam = {
    body: CommunicationPlatformModel.SmsTemplateReq;
};
type DeleteEmailTemplateByIdParam = {
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
    body: CommunicationPlatformModel.EngineReq;
};
type SendCommunicationSynchronouslyParam = {
    body: CommunicationPlatformModel.EngineReq;
};
type SendOtpParam = {
    /**
     * - Common Information
     */
    ci?: boolean;
    body: CommunicationPlatformModel.SendOtpCommsReq;
};
type TriggerCampaignJobParam = {
    body: CommunicationPlatformModel.TriggerJobReq;
};
type UpdateAppProvidersParam = {
    body: CommunicationPlatformModel.AppProviderReq;
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
type GetGlobalProvidersParam = any;
type GetGlobalVariablesParam = any;
type GetOtpConfigurationParam = any;
type GetSystemEmailTemplatesParam = any;
type GetSystemSmsTemplatesParam = any;
import CommunicationPlatformModel = require("./CommunicationPlatformModel");
