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
 * @typedef DeleteEmailTemplateByIdParam
 * @property {string} id - Email template id
 */
/**
 * @typedef DeleteSmsTemplateByIdParam
 * @property {string} id - Sms template id
 */
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
 * @property {string} [populate] - Populate fields
 */
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
 * @typedef GetSystemEmailTemplatesParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 */
/**
 * @typedef GetSystemSystemTemplatesParam
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
    /** @returns {DeleteEmailTemplateByIdParam} */
    static deleteEmailTemplateById(): DeleteEmailTemplateByIdParam;
    /** @returns {DeleteSmsTemplateByIdParam} */
    static deleteSmsTemplateById(): DeleteSmsTemplateByIdParam;
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
    /** @returns {GetSystemEmailTemplatesParam} */
    static getSystemEmailTemplates(): GetSystemEmailTemplatesParam;
    /** @returns {GetSystemSystemTemplatesParam} */
    static getSystemSystemTemplates(): GetSystemSystemTemplatesParam;
    /** @returns {SendCommunicationAsynchronouslyParam} */
    static sendCommunicationAsynchronously(): SendCommunicationAsynchronouslyParam;
    /** @returns {SendCommunicationSynchronouslyParam} */
    static sendCommunicationSynchronously(): SendCommunicationSynchronouslyParam;
    /** @returns {SendOtpParam} */
    static sendOtp(): SendOtpParam;
    /** @returns {TriggerCampaignJobParam} */
    static triggerCampaignJob(): TriggerCampaignJobParam;
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
    /** @returns {VerfiyOtpParam} */
    static verfiyOtp(): VerfiyOtpParam;
}
declare namespace CommunicationPlatformApplicationValidator {
    export { CreateAudienceParam, CreateCampaignParam, CreateEmailProviderParam, CreateEmailTemplateParam, CreateSmsProviderParam, CreateSmsTemplateParam, DeleteEmailTemplateByIdParam, DeleteSmsTemplateByIdParam, GetAudienceByIdParam, GetAudiencesParam, GetBigqueryHeadersParam, GetCampaignByIdParam, GetCampaignsParam, GetCommunicationLogsParam, GetEmailProviderByIdParam, GetEmailProvidersParam, GetEmailTemplateByIdParam, GetEmailTemplatesParam, GetEventSubscriptionsParam, GetJobLogsParam, GetJobsParam, GetNSampleRecordsFromCsvParam, GetSmsProviderByIdParam, GetSmsProvidersParam, GetSmsTemplateByIdParam, GetSmsTemplatesParam, GetStatsOfCampaignByIdParam, GetSystemEmailTemplatesParam, GetSystemSystemTemplatesParam, SendCommunicationAsynchronouslyParam, SendCommunicationSynchronouslyParam, SendOtpParam, TriggerCampaignJobParam, UpdateAudienceByIdParam, UpdateCampaignByIdParam, UpdateEmailProviderByIdParam, UpdateEmailTemplateByIdParam, UpdateSmsProviderByIdParam, UpdateSmsTemplateByIdParam, VerfiyOtpParam };
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
type DeleteEmailTemplateByIdParam = {
    /**
     * - Email template id
     */
    id: string;
};
type DeleteSmsTemplateByIdParam = {
    /**
     * - Sms template id
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
type GetSystemEmailTemplatesParam = {
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
type GetSystemSystemTemplatesParam = {
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
import CommunicationPlatformModel = require("./CommunicationPlatformModel");
