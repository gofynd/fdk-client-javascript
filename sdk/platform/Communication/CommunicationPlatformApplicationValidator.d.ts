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
 * @typedef CreateSmsProviderParam
 * @property {CommunicationPlatformModel.SmsProviderReq} body
 */
/**
 * @typedef CreateSmsTemplateParam
 * @property {CommunicationPlatformModel.SmsTemplateReq} body
 */
/**
 * @typedef CreateVoiceProviderParam
 * @property {CommunicationPlatformModel.VoiceProviderReq} body
 */
/**
 * @typedef CreateVoiceTemplateParam
 * @property {CommunicationPlatformModel.VoiceTemplateReq} body
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
 * @typedef DeleteSmsProviderByIdParam
 * @property {string} id - Sms provider id
 */
/**
 * @typedef DeleteSmsTemplateByIdParam
 * @property {string} id - Sms template id
 */
/**
 * @typedef DeleteVoiceTemplateByIdParam
 * @property {string} id - Voice template id
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
 */
/**
 * @typedef GetBigqueryHeadersParam
 * @property {CommunicationPlatformModel.BigqueryHeadersReq} body
 */
/**
 * @typedef GetCampaignByIdParam
 * @property {string} id - Campaign id
 */
/**
 * @typedef GetCampaignsParam
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
/** @typedef GetDefaultEmailProvidersParam */
/** @typedef GetDefaultSmsProvidersParam */
/**
 * @typedef GetEmailProviderByIdParam
 * @property {string} id - Email provider id
 */
/**
 * @typedef GetEmailProvidersParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
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
 */
/**
 * @typedef GetEventSubscriptionsParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {string[]} [populate] - Populate fields
 * @property {string} [query] - Current request items count
 */
/** @typedef GetGlobalProvidersParam */
/** @typedef GetGlobalVariablesParam */
/**
 * @typedef GetJobLogsParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 */
/**
 * @typedef GetJobsParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 */
/**
 * @typedef GetNSampleRecordsFromCsvParam
 * @property {CommunicationPlatformModel.GetNRecordsCsvReq} body
 */
/**
 * @typedef GetSmsProviderByIdParam
 * @property {string} id - Sms provider id
 */
/**
 * @typedef GetSmsProvidersParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
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
 */
/**
 * @typedef GetStatsOfCampaignByIdParam
 * @property {string} id - Campaign id
 */
/**
 * @typedef GetSubscribedEmailTemplatesParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 */
/**
 * @typedef GetSubscribedSmsTemplatesParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 */
/** @typedef GetSystemEmailTemplatesParam */
/** @typedef GetSystemSmsTemplatesParam */
/**
 * @typedef GetSystemVoiceTemplatesParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 */
/**
 * @typedef GetVoiceProviderByIdParam
 * @property {string} id - Voice provider id
 */
/**
 * @typedef GetVoiceProvidersParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 */
/**
 * @typedef GetVoiceTemplateByIdParam
 * @property {string} id - Voice template id
 */
/**
 * @typedef GetVoiceTemplatesParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 */
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
 * @typedef UpdateVoiceTemplateByIdParam
 * @property {string} id - Voice template id
 * @property {CommunicationPlatformModel.VoiceTemplateReq} body
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
    /** @returns {CreateSmsProviderParam} */
    static createSmsProvider(): CreateSmsProviderParam;
    /** @returns {CreateSmsTemplateParam} */
    static createSmsTemplate(): CreateSmsTemplateParam;
    /** @returns {CreateVoiceProviderParam} */
    static createVoiceProvider(): CreateVoiceProviderParam;
    /** @returns {CreateVoiceTemplateParam} */
    static createVoiceTemplate(): CreateVoiceTemplateParam;
    /** @returns {DeleteEmailProviderByIdParam} */
    static deleteEmailProviderById(): DeleteEmailProviderByIdParam;
    /** @returns {DeleteEmailTemplateByIdParam} */
    static deleteEmailTemplateById(): DeleteEmailTemplateByIdParam;
    /** @returns {DeleteSmsProviderByIdParam} */
    static deleteSmsProviderById(): DeleteSmsProviderByIdParam;
    /** @returns {DeleteSmsTemplateByIdParam} */
    static deleteSmsTemplateById(): DeleteSmsTemplateByIdParam;
    /** @returns {DeleteVoiceTemplateByIdParam} */
    static deleteVoiceTemplateById(): DeleteVoiceTemplateByIdParam;
    /** @returns {GetAppProvidersParam} */
    static getAppProviders(): any;
    /** @returns {GetAudienceByIdParam} */
    static getAudienceById(): GetAudienceByIdParam;
    /** @returns {GetAudiencesParam} */
    static getAudiences(): GetAudiencesParam;
    /** @returns {GetBigqueryHeadersParam} */
    static getBigqueryHeaders(): GetBigqueryHeadersParam;
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
    /** @returns {GetSystemVoiceTemplatesParam} */
    static getSystemVoiceTemplates(): GetSystemVoiceTemplatesParam;
    /** @returns {GetVoiceProviderByIdParam} */
    static getVoiceProviderById(): GetVoiceProviderByIdParam;
    /** @returns {GetVoiceProvidersParam} */
    static getVoiceProviders(): GetVoiceProvidersParam;
    /** @returns {GetVoiceTemplateByIdParam} */
    static getVoiceTemplateById(): GetVoiceTemplateByIdParam;
    /** @returns {GetVoiceTemplatesParam} */
    static getVoiceTemplates(): GetVoiceTemplatesParam;
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
    /** @returns {UpdateSmsProviderByIdParam} */
    static updateSmsProviderById(): UpdateSmsProviderByIdParam;
    /** @returns {UpdateSmsTemplateByIdParam} */
    static updateSmsTemplateById(): UpdateSmsTemplateByIdParam;
    /** @returns {UpdateVoiceTemplateByIdParam} */
    static updateVoiceTemplateById(): UpdateVoiceTemplateByIdParam;
    /** @returns {VerfiyOtpParam} */
    static verfiyOtp(): VerfiyOtpParam;
}
declare namespace CommunicationPlatformApplicationValidator {
    export { CreateAudienceParam, CreateCampaignParam, CreateEmailProviderParam, CreateEmailTemplateParam, CreateSmsProviderParam, CreateSmsTemplateParam, CreateVoiceProviderParam, CreateVoiceTemplateParam, DeleteEmailProviderByIdParam, DeleteEmailTemplateByIdParam, DeleteSmsProviderByIdParam, DeleteSmsTemplateByIdParam, DeleteVoiceTemplateByIdParam, GetAppProvidersParam, GetAudienceByIdParam, GetAudiencesParam, GetBigqueryHeadersParam, GetCampaignByIdParam, GetCampaignsParam, GetCommunicationLogsParam, GetDefaultEmailProvidersParam, GetDefaultSmsProvidersParam, GetEmailProviderByIdParam, GetEmailProvidersParam, GetEmailTemplateByIdParam, GetEmailTemplatesParam, GetEventSubscriptionsParam, GetGlobalProvidersParam, GetGlobalVariablesParam, GetJobLogsParam, GetJobsParam, GetNSampleRecordsFromCsvParam, GetSmsProviderByIdParam, GetSmsProvidersParam, GetSmsTemplateByIdParam, GetSmsTemplatesParam, GetStatsOfCampaignByIdParam, GetSubscribedEmailTemplatesParam, GetSubscribedSmsTemplatesParam, GetSystemEmailTemplatesParam, GetSystemSmsTemplatesParam, GetSystemVoiceTemplatesParam, GetVoiceProviderByIdParam, GetVoiceProvidersParam, GetVoiceTemplateByIdParam, GetVoiceTemplatesParam, PostGlobalVariablesParam, SendCommunicationAsynchronouslyParam, SendCommunicationSynchronouslyParam, SendOtpParam, TriggerCampaignJobParam, UpdateAppProvidersParam, UpdateAudienceByIdParam, UpdateCampaignByIdParam, UpdateEmailProviderByIdParam, UpdateEmailTemplateByIdParam, UpdateSmsProviderByIdParam, UpdateSmsTemplateByIdParam, UpdateVoiceTemplateByIdParam, VerfiyOtpParam };
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
type CreateSmsProviderParam = {
    body: CommunicationPlatformModel.SmsProviderReq;
};
type CreateSmsTemplateParam = {
    body: CommunicationPlatformModel.SmsTemplateReq;
};
type CreateVoiceProviderParam = {
    body: CommunicationPlatformModel.VoiceProviderReq;
};
type CreateVoiceTemplateParam = {
    body: CommunicationPlatformModel.VoiceTemplateReq;
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
type DeleteVoiceTemplateByIdParam = {
    /**
     * - Voice template id
     */
    id: string;
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
};
type GetBigqueryHeadersParam = {
    body: CommunicationPlatformModel.BigqueryHeadersReq;
};
type GetCampaignByIdParam = {
    /**
     * - Campaign id
     */
    id: string;
};
type GetCampaignsParam = {
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
     * - Populate fields
     */
    populate?: string[];
    /**
     * - Current request items count
     */
    query?: string;
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
};
type GetSystemVoiceTemplatesParam = {
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
type GetVoiceProviderByIdParam = {
    /**
     * - Voice provider id
     */
    id: string;
};
type GetVoiceProvidersParam = {
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
type GetVoiceTemplateByIdParam = {
    /**
     * - Voice template id
     */
    id: string;
};
type GetVoiceTemplatesParam = {
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
type UpdateVoiceTemplateByIdParam = {
    /**
     * - Voice template id
     */
    id: string;
    body: CommunicationPlatformModel.VoiceTemplateReq;
};
type VerfiyOtpParam = {
    body: CommunicationPlatformModel.VerifyOtpCommsReq;
};
type GetAppProvidersParam = any;
type GetDefaultEmailProvidersParam = any;
type GetDefaultSmsProvidersParam = any;
type GetGlobalProvidersParam = any;
type GetGlobalVariablesParam = any;
type GetSystemEmailTemplatesParam = any;
type GetSystemSmsTemplatesParam = any;
import CommunicationPlatformModel = require("./CommunicationPlatformModel");
