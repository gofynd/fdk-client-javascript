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
    /** @returns {createAudience} */
    static createAudience(): createAudience;
    /** @returns {createCampaign} */
    static createCampaign(): createCampaign;
    /** @returns {createEmailProvider} */
    static createEmailProvider(): createEmailProvider;
    /** @returns {createEmailTemplate} */
    static createEmailTemplate(): createEmailTemplate;
    /** @returns {createSmsProvider} */
    static createSmsProvider(): createSmsProvider;
    /** @returns {createSmsTemplate} */
    static createSmsTemplate(): createSmsTemplate;
    /** @returns {createVoiceProvider} */
    static createVoiceProvider(): createVoiceProvider;
    /** @returns {createVoiceTemplate} */
    static createVoiceTemplate(): createVoiceTemplate;
    /** @returns {deleteEmailProviderById} */
    static deleteEmailProviderById(): deleteEmailProviderById;
    /** @returns {deleteEmailTemplateById} */
    static deleteEmailTemplateById(): deleteEmailTemplateById;
    /** @returns {deleteSmsProviderById} */
    static deleteSmsProviderById(): deleteSmsProviderById;
    /** @returns {deleteSmsTemplateById} */
    static deleteSmsTemplateById(): deleteSmsTemplateById;
    /** @returns {deleteVoiceTemplateById} */
    static deleteVoiceTemplateById(): deleteVoiceTemplateById;
    /** @returns {getAppProviders} */
    static getAppProviders(): getAppProviders;
    /** @returns {getAudienceById} */
    static getAudienceById(): getAudienceById;
    /** @returns {getAudiences} */
    static getAudiences(): getAudiences;
    /** @returns {getBigqueryHeaders} */
    static getBigqueryHeaders(): getBigqueryHeaders;
    /** @returns {getCampaignById} */
    static getCampaignById(): getCampaignById;
    /** @returns {getCampaigns} */
    static getCampaigns(): getCampaigns;
    /** @returns {getCommunicationLogs} */
    static getCommunicationLogs(): getCommunicationLogs;
    /** @returns {getDefaultEmailProviders} */
    static getDefaultEmailProviders(): getDefaultEmailProviders;
    /** @returns {getDefaultSmsProviders} */
    static getDefaultSmsProviders(): getDefaultSmsProviders;
    /** @returns {getEmailProviderById} */
    static getEmailProviderById(): getEmailProviderById;
    /** @returns {getEmailProviders} */
    static getEmailProviders(): getEmailProviders;
    /** @returns {getEmailTemplateById} */
    static getEmailTemplateById(): getEmailTemplateById;
    /** @returns {getEmailTemplates} */
    static getEmailTemplates(): getEmailTemplates;
    /** @returns {getEventSubscriptions} */
    static getEventSubscriptions(): getEventSubscriptions;
    /** @returns {getGlobalProviders} */
    static getGlobalProviders(): getGlobalProviders;
    /** @returns {getJobLogs} */
    static getJobLogs(): getJobLogs;
    /** @returns {getJobs} */
    static getJobs(): getJobs;
    /** @returns {getNSampleRecordsFromCsv} */
    static getNSampleRecordsFromCsv(): getNSampleRecordsFromCsv;
    /** @returns {getSmsProviderById} */
    static getSmsProviderById(): getSmsProviderById;
    /** @returns {getSmsProviders} */
    static getSmsProviders(): getSmsProviders;
    /** @returns {getSmsTemplateById} */
    static getSmsTemplateById(): getSmsTemplateById;
    /** @returns {getSmsTemplates} */
    static getSmsTemplates(): getSmsTemplates;
    /** @returns {getStatsOfCampaignById} */
    static getStatsOfCampaignById(): getStatsOfCampaignById;
    /** @returns {getSubscribedEmailTemplates} */
    static getSubscribedEmailTemplates(): getSubscribedEmailTemplates;
    /** @returns {getSubscribedSmsTemplates} */
    static getSubscribedSmsTemplates(): getSubscribedSmsTemplates;
    /** @returns {getSystemEmailTemplates} */
    static getSystemEmailTemplates(): getSystemEmailTemplates;
    /** @returns {getSystemSmsTemplates} */
    static getSystemSmsTemplates(): getSystemSmsTemplates;
    /** @returns {getSystemVoiceTemplates} */
    static getSystemVoiceTemplates(): getSystemVoiceTemplates;
    /** @returns {getVoiceProviderById} */
    static getVoiceProviderById(): getVoiceProviderById;
    /** @returns {getVoiceProviders} */
    static getVoiceProviders(): getVoiceProviders;
    /** @returns {getVoiceTemplateById} */
    static getVoiceTemplateById(): getVoiceTemplateById;
    /** @returns {getVoiceTemplates} */
    static getVoiceTemplates(): getVoiceTemplates;
    /** @returns {sendCommunicationAsynchronously} */
    static sendCommunicationAsynchronously(): sendCommunicationAsynchronously;
    /** @returns {sendCommunicationSynchronously} */
    static sendCommunicationSynchronously(): sendCommunicationSynchronously;
    /** @returns {sendOtp} */
    static sendOtp(): sendOtp;
    /** @returns {triggerCampaignJob} */
    static triggerCampaignJob(): triggerCampaignJob;
    /** @returns {updateAppProviders} */
    static updateAppProviders(): updateAppProviders;
    /** @returns {updateAudienceById} */
    static updateAudienceById(): updateAudienceById;
    /** @returns {updateCampaignById} */
    static updateCampaignById(): updateCampaignById;
    /** @returns {updateEmailProviderById} */
    static updateEmailProviderById(): updateEmailProviderById;
    /** @returns {updateEmailTemplateById} */
    static updateEmailTemplateById(): updateEmailTemplateById;
    /** @returns {updateSmsProviderById} */
    static updateSmsProviderById(): updateSmsProviderById;
    /** @returns {updateSmsTemplateById} */
    static updateSmsTemplateById(): updateSmsTemplateById;
    /** @returns {updateVoiceTemplateById} */
    static updateVoiceTemplateById(): updateVoiceTemplateById;
    /** @returns {verfiyOtp} */
    static verfiyOtp(): verfiyOtp;
}
declare namespace CommunicationPlatformApplicationValidator {
    export { CreateAudienceParam, CreateCampaignParam, CreateEmailProviderParam, CreateEmailTemplateParam, CreateSmsProviderParam, CreateSmsTemplateParam, CreateVoiceProviderParam, CreateVoiceTemplateParam, DeleteEmailProviderByIdParam, DeleteEmailTemplateByIdParam, DeleteSmsProviderByIdParam, DeleteSmsTemplateByIdParam, DeleteVoiceTemplateByIdParam, GetAppProvidersParam, GetAudienceByIdParam, GetAudiencesParam, GetBigqueryHeadersParam, GetCampaignByIdParam, GetCampaignsParam, GetCommunicationLogsParam, GetDefaultEmailProvidersParam, GetDefaultSmsProvidersParam, GetEmailProviderByIdParam, GetEmailProvidersParam, GetEmailTemplateByIdParam, GetEmailTemplatesParam, GetEventSubscriptionsParam, GetGlobalProvidersParam, GetJobLogsParam, GetJobsParam, GetNSampleRecordsFromCsvParam, GetSmsProviderByIdParam, GetSmsProvidersParam, GetSmsTemplateByIdParam, GetSmsTemplatesParam, GetStatsOfCampaignByIdParam, GetSubscribedEmailTemplatesParam, GetSubscribedSmsTemplatesParam, GetSystemEmailTemplatesParam, GetSystemSmsTemplatesParam, GetSystemVoiceTemplatesParam, GetVoiceProviderByIdParam, GetVoiceProvidersParam, GetVoiceTemplateByIdParam, GetVoiceTemplatesParam, SendCommunicationAsynchronouslyParam, SendCommunicationSynchronouslyParam, SendOtpParam, TriggerCampaignJobParam, UpdateAppProvidersParam, UpdateAudienceByIdParam, UpdateCampaignByIdParam, UpdateEmailProviderByIdParam, UpdateEmailTemplateByIdParam, UpdateSmsProviderByIdParam, UpdateSmsTemplateByIdParam, UpdateVoiceTemplateByIdParam, VerfiyOtpParam };
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
type GetAppProvidersParam = any;
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
type GetDefaultEmailProvidersParam = any;
type GetDefaultSmsProvidersParam = any;
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
type GetGlobalProvidersParam = any;
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
type GetSystemEmailTemplatesParam = any;
type GetSystemSmsTemplatesParam = any;
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
import CommunicationPlatformModel = require("./CommunicationPlatformModel");
