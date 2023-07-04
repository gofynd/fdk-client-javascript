export = CommunicationPlatformApplicationValidator;
/**
 * @typedef createAudience
 * @property {CommunicationPlatformModel.AudienceReq} body
 */
/**
 * @typedef createCampaign
 * @property {CommunicationPlatformModel.CampaignReq} body
 */
/**
 * @typedef createEmailProvider
 * @property {CommunicationPlatformModel.EmailProviderReq} body
 */
/**
 * @typedef createEmailTemplate
 * @property {CommunicationPlatformModel.EmailTemplateReq} body
 */
/**
 * @typedef createSmsProvider
 * @property {CommunicationPlatformModel.SmsProviderReq} body
 */
/**
 * @typedef createSmsTemplate
 * @property {CommunicationPlatformModel.SmsTemplateReq} body
 */
/**
 * @typedef createVoiceProvider
 * @property {CommunicationPlatformModel.VoiceProviderReq} body
 */
/**
 * @typedef createVoiceTemplate
 * @property {CommunicationPlatformModel.VoiceTemplateReq} body
 */
/**
 * @typedef deleteEmailProviderById
 * @property {string} id - Email provider id
 */
/**
 * @typedef deleteEmailTemplateById
 * @property {string} id - Email template id
 */
/**
 * @typedef deleteSmsProviderById
 * @property {string} id - Sms provider id
 */
/**
 * @typedef deleteSmsTemplateById
 * @property {string} id - Sms template id
 */
/**
 * @typedef deleteVoiceTemplateById
 * @property {string} id - Voice template id
 */
/** @typedef getAppProviders */
/**
 * @typedef getAudienceById
 * @property {string} id - Audience id
 */
/**
 * @typedef getAudiences
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 */
/**
 * @typedef getBigqueryHeaders
 * @property {CommunicationPlatformModel.BigqueryHeadersReq} body
 */
/**
 * @typedef getCampaignById
 * @property {string} id - Campaign id
 */
/**
 * @typedef getCampaigns
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 */
/**
 * @typedef getCommunicationLogs
 * @property {string} [pageId] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on _id
 * @property {Object} [query]
 */
/** @typedef getDefaultEmailProviders */
/** @typedef getDefaultSmsProviders */
/**
 * @typedef getEmailProviderById
 * @property {string} id - Email provider id
 */
/**
 * @typedef getEmailProviders
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 */
/**
 * @typedef getEmailTemplateById
 * @property {string} id - Email template id
 */
/**
 * @typedef getEmailTemplates
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 */
/**
 * @typedef getEventSubscriptions
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {string[]} [populate] - Populate fields
 * @property {string} [query] - Current request items count
 */
/** @typedef getGlobalProviders */
/**
 * @typedef getJobLogs
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 */
/**
 * @typedef getJobs
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 */
/**
 * @typedef getNSampleRecordsFromCsv
 * @property {CommunicationPlatformModel.GetNRecordsCsvReq} body
 */
/**
 * @typedef getSmsProviderById
 * @property {string} id - Sms provider id
 */
/**
 * @typedef getSmsProviders
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 */
/**
 * @typedef getSmsTemplateById
 * @property {string} id - Sms template id
 */
/**
 * @typedef getSmsTemplates
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 */
/**
 * @typedef getStatsOfCampaignById
 * @property {string} id - Campaign id
 */
/**
 * @typedef getSubscribedEmailTemplates
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 */
/**
 * @typedef getSubscribedSmsTemplates
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 */
/** @typedef getSystemEmailTemplates */
/** @typedef getSystemSmsTemplates */
/**
 * @typedef getSystemVoiceTemplates
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 */
/**
 * @typedef getVoiceProviderById
 * @property {string} id - Voice provider id
 */
/**
 * @typedef getVoiceProviders
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 */
/**
 * @typedef getVoiceTemplateById
 * @property {string} id - Voice template id
 */
/**
 * @typedef getVoiceTemplates
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 */
/**
 * @typedef sendCommunicationAsynchronously
 * @property {CommunicationPlatformModel.EngineRequest} body
 */
/**
 * @typedef sendCommunicationSynchronously
 * @property {CommunicationPlatformModel.EngineRequest} body
 */
/**
 * @typedef sendOtp
 * @property {CommunicationPlatformModel.SendOtpCommsReq} body
 */
/**
 * @typedef triggerCampaignJob
 * @property {CommunicationPlatformModel.TriggerJobRequest} body
 */
/**
 * @typedef updateAppProviders
 * @property {CommunicationPlatformModel.AppProviderReq} body
 */
/**
 * @typedef updateAudienceById
 * @property {string} id - Audience id
 * @property {CommunicationPlatformModel.AudienceReq} body
 */
/**
 * @typedef updateCampaignById
 * @property {string} id - Campaign id
 * @property {CommunicationPlatformModel.CampaignReq} body
 */
/**
 * @typedef updateEmailProviderById
 * @property {string} id - Email provider id
 * @property {CommunicationPlatformModel.EmailProviderReq} body
 */
/**
 * @typedef updateEmailTemplateById
 * @property {string} id - Email template id
 * @property {CommunicationPlatformModel.EmailTemplateReq} body
 */
/**
 * @typedef updateSmsProviderById
 * @property {string} id - Sms provider id
 * @property {CommunicationPlatformModel.SmsProviderReq} body
 */
/**
 * @typedef updateSmsTemplateById
 * @property {string} id - Sms template id
 * @property {CommunicationPlatformModel.SmsTemplateReq} body
 */
/**
 * @typedef updateVoiceTemplateById
 * @property {string} id - Voice template id
 * @property {CommunicationPlatformModel.VoiceTemplateReq} body
 */
/**
 * @typedef verfiyOtp
 * @property {CommunicationPlatformModel.VerifyOtpCommsReq} body
 */
declare class CommunicationPlatformApplicationValidator {
}
declare namespace CommunicationPlatformApplicationValidator {
    export { createAudience, createCampaign, createEmailProvider, createEmailTemplate, createSmsProvider, createSmsTemplate, createVoiceProvider, createVoiceTemplate, deleteEmailProviderById, deleteEmailTemplateById, deleteSmsProviderById, deleteSmsTemplateById, deleteVoiceTemplateById, getAppProviders, getAudienceById, getAudiences, getBigqueryHeaders, getCampaignById, getCampaigns, getCommunicationLogs, getDefaultEmailProviders, getDefaultSmsProviders, getEmailProviderById, getEmailProviders, getEmailTemplateById, getEmailTemplates, getEventSubscriptions, getGlobalProviders, getJobLogs, getJobs, getNSampleRecordsFromCsv, getSmsProviderById, getSmsProviders, getSmsTemplateById, getSmsTemplates, getStatsOfCampaignById, getSubscribedEmailTemplates, getSubscribedSmsTemplates, getSystemEmailTemplates, getSystemSmsTemplates, getSystemVoiceTemplates, getVoiceProviderById, getVoiceProviders, getVoiceTemplateById, getVoiceTemplates, sendCommunicationAsynchronously, sendCommunicationSynchronously, sendOtp, triggerCampaignJob, updateAppProviders, updateAudienceById, updateCampaignById, updateEmailProviderById, updateEmailTemplateById, updateSmsProviderById, updateSmsTemplateById, updateVoiceTemplateById, verfiyOtp };
}
/** @returns {createAudience} */
declare function createAudience(): createAudience;
type createAudience = {
    body: CommunicationPlatformModel.AudienceReq;
};
/** @returns {createCampaign} */
declare function createCampaign(): createCampaign;
type createCampaign = {
    body: CommunicationPlatformModel.CampaignReq;
};
/** @returns {createEmailProvider} */
declare function createEmailProvider(): createEmailProvider;
type createEmailProvider = {
    body: CommunicationPlatformModel.EmailProviderReq;
};
/** @returns {createEmailTemplate} */
declare function createEmailTemplate(): createEmailTemplate;
type createEmailTemplate = {
    body: CommunicationPlatformModel.EmailTemplateReq;
};
/** @returns {createSmsProvider} */
declare function createSmsProvider(): createSmsProvider;
type createSmsProvider = {
    body: CommunicationPlatformModel.SmsProviderReq;
};
/** @returns {createSmsTemplate} */
declare function createSmsTemplate(): createSmsTemplate;
type createSmsTemplate = {
    body: CommunicationPlatformModel.SmsTemplateReq;
};
/** @returns {createVoiceProvider} */
declare function createVoiceProvider(): createVoiceProvider;
type createVoiceProvider = {
    body: CommunicationPlatformModel.VoiceProviderReq;
};
/** @returns {createVoiceTemplate} */
declare function createVoiceTemplate(): createVoiceTemplate;
type createVoiceTemplate = {
    body: CommunicationPlatformModel.VoiceTemplateReq;
};
/** @returns {deleteEmailProviderById} */
declare function deleteEmailProviderById(): deleteEmailProviderById;
type deleteEmailProviderById = {
    /**
     * - Email provider id
     */
    id: string;
};
/** @returns {deleteEmailTemplateById} */
declare function deleteEmailTemplateById(): deleteEmailTemplateById;
type deleteEmailTemplateById = {
    /**
     * - Email template id
     */
    id: string;
};
/** @returns {deleteSmsProviderById} */
declare function deleteSmsProviderById(): deleteSmsProviderById;
type deleteSmsProviderById = {
    /**
     * - Sms provider id
     */
    id: string;
};
/** @returns {deleteSmsTemplateById} */
declare function deleteSmsTemplateById(): deleteSmsTemplateById;
type deleteSmsTemplateById = {
    /**
     * - Sms template id
     */
    id: string;
};
/** @returns {deleteVoiceTemplateById} */
declare function deleteVoiceTemplateById(): deleteVoiceTemplateById;
type deleteVoiceTemplateById = {
    /**
     * - Voice template id
     */
    id: string;
};
/** @returns {getAppProviders} */
declare function getAppProviders(): any;
type getAppProviders = any;
/** @returns {getAudienceById} */
declare function getAudienceById(): getAudienceById;
type getAudienceById = {
    /**
     * - Audience id
     */
    id: string;
};
/** @returns {getAudiences} */
declare function getAudiences(): getAudiences;
type getAudiences = {
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
/** @returns {getBigqueryHeaders} */
declare function getBigqueryHeaders(): getBigqueryHeaders;
type getBigqueryHeaders = {
    body: CommunicationPlatformModel.BigqueryHeadersReq;
};
/** @returns {getCampaignById} */
declare function getCampaignById(): getCampaignById;
type getCampaignById = {
    /**
     * - Campaign id
     */
    id: string;
};
/** @returns {getCampaigns} */
declare function getCampaigns(): getCampaigns;
type getCampaigns = {
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
/** @returns {getCommunicationLogs} */
declare function getCommunicationLogs(): getCommunicationLogs;
type getCommunicationLogs = {
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
/** @returns {getDefaultEmailProviders} */
declare function getDefaultEmailProviders(): any;
type getDefaultEmailProviders = any;
/** @returns {getDefaultSmsProviders} */
declare function getDefaultSmsProviders(): any;
type getDefaultSmsProviders = any;
/** @returns {getEmailProviderById} */
declare function getEmailProviderById(): getEmailProviderById;
type getEmailProviderById = {
    /**
     * - Email provider id
     */
    id: string;
};
/** @returns {getEmailProviders} */
declare function getEmailProviders(): getEmailProviders;
type getEmailProviders = {
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
/** @returns {getEmailTemplateById} */
declare function getEmailTemplateById(): getEmailTemplateById;
type getEmailTemplateById = {
    /**
     * - Email template id
     */
    id: string;
};
/** @returns {getEmailTemplates} */
declare function getEmailTemplates(): getEmailTemplates;
type getEmailTemplates = {
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
/** @returns {getEventSubscriptions} */
declare function getEventSubscriptions(): getEventSubscriptions;
type getEventSubscriptions = {
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
/** @returns {getGlobalProviders} */
declare function getGlobalProviders(): any;
type getGlobalProviders = any;
/** @returns {getJobLogs} */
declare function getJobLogs(): getJobLogs;
type getJobLogs = {
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
/** @returns {getJobs} */
declare function getJobs(): getJobs;
type getJobs = {
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
/** @returns {getNSampleRecordsFromCsv} */
declare function getNSampleRecordsFromCsv(): getNSampleRecordsFromCsv;
type getNSampleRecordsFromCsv = {
    body: CommunicationPlatformModel.GetNRecordsCsvReq;
};
/** @returns {getSmsProviderById} */
declare function getSmsProviderById(): getSmsProviderById;
type getSmsProviderById = {
    /**
     * - Sms provider id
     */
    id: string;
};
/** @returns {getSmsProviders} */
declare function getSmsProviders(): getSmsProviders;
type getSmsProviders = {
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
/** @returns {getSmsTemplateById} */
declare function getSmsTemplateById(): getSmsTemplateById;
type getSmsTemplateById = {
    /**
     * - Sms template id
     */
    id: string;
};
/** @returns {getSmsTemplates} */
declare function getSmsTemplates(): getSmsTemplates;
type getSmsTemplates = {
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
/** @returns {getStatsOfCampaignById} */
declare function getStatsOfCampaignById(): getStatsOfCampaignById;
type getStatsOfCampaignById = {
    /**
     * - Campaign id
     */
    id: string;
};
/** @returns {getSubscribedEmailTemplates} */
declare function getSubscribedEmailTemplates(): getSubscribedEmailTemplates;
type getSubscribedEmailTemplates = {
    /**
     * - Current page no
     */
    pageNo?: number;
    /**
     * - Current request items count
     */
    pageSize?: number;
};
/** @returns {getSubscribedSmsTemplates} */
declare function getSubscribedSmsTemplates(): getSubscribedSmsTemplates;
type getSubscribedSmsTemplates = {
    /**
     * - Current page no
     */
    pageNo?: number;
    /**
     * - Current request items count
     */
    pageSize?: number;
};
/** @returns {getSystemEmailTemplates} */
declare function getSystemEmailTemplates(): any;
type getSystemEmailTemplates = any;
/** @returns {getSystemSmsTemplates} */
declare function getSystemSmsTemplates(): any;
type getSystemSmsTemplates = any;
/** @returns {getSystemVoiceTemplates} */
declare function getSystemVoiceTemplates(): getSystemVoiceTemplates;
type getSystemVoiceTemplates = {
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
/** @returns {getVoiceProviderById} */
declare function getVoiceProviderById(): getVoiceProviderById;
type getVoiceProviderById = {
    /**
     * - Voice provider id
     */
    id: string;
};
/** @returns {getVoiceProviders} */
declare function getVoiceProviders(): getVoiceProviders;
type getVoiceProviders = {
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
/** @returns {getVoiceTemplateById} */
declare function getVoiceTemplateById(): getVoiceTemplateById;
type getVoiceTemplateById = {
    /**
     * - Voice template id
     */
    id: string;
};
/** @returns {getVoiceTemplates} */
declare function getVoiceTemplates(): getVoiceTemplates;
type getVoiceTemplates = {
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
/** @returns {sendCommunicationAsynchronously} */
declare function sendCommunicationAsynchronously(): sendCommunicationAsynchronously;
type sendCommunicationAsynchronously = {
    body: CommunicationPlatformModel.EngineRequest;
};
/** @returns {sendCommunicationSynchronously} */
declare function sendCommunicationSynchronously(): sendCommunicationSynchronously;
type sendCommunicationSynchronously = {
    body: CommunicationPlatformModel.EngineRequest;
};
/** @returns {sendOtp} */
declare function sendOtp(): sendOtp;
type sendOtp = {
    body: CommunicationPlatformModel.SendOtpCommsReq;
};
/** @returns {triggerCampaignJob} */
declare function triggerCampaignJob(): triggerCampaignJob;
type triggerCampaignJob = {
    body: CommunicationPlatformModel.TriggerJobRequest;
};
/** @returns {updateAppProviders} */
declare function updateAppProviders(): updateAppProviders;
type updateAppProviders = {
    body: CommunicationPlatformModel.AppProviderReq;
};
/** @returns {updateAudienceById} */
declare function updateAudienceById(): updateAudienceById;
type updateAudienceById = {
    /**
     * - Audience id
     */
    id: string;
    body: CommunicationPlatformModel.AudienceReq;
};
/** @returns {updateCampaignById} */
declare function updateCampaignById(): updateCampaignById;
type updateCampaignById = {
    /**
     * - Campaign id
     */
    id: string;
    body: CommunicationPlatformModel.CampaignReq;
};
/** @returns {updateEmailProviderById} */
declare function updateEmailProviderById(): updateEmailProviderById;
type updateEmailProviderById = {
    /**
     * - Email provider id
     */
    id: string;
    body: CommunicationPlatformModel.EmailProviderReq;
};
/** @returns {updateEmailTemplateById} */
declare function updateEmailTemplateById(): updateEmailTemplateById;
type updateEmailTemplateById = {
    /**
     * - Email template id
     */
    id: string;
    body: CommunicationPlatformModel.EmailTemplateReq;
};
/** @returns {updateSmsProviderById} */
declare function updateSmsProviderById(): updateSmsProviderById;
type updateSmsProviderById = {
    /**
     * - Sms provider id
     */
    id: string;
    body: CommunicationPlatformModel.SmsProviderReq;
};
/** @returns {updateSmsTemplateById} */
declare function updateSmsTemplateById(): updateSmsTemplateById;
type updateSmsTemplateById = {
    /**
     * - Sms template id
     */
    id: string;
    body: CommunicationPlatformModel.SmsTemplateReq;
};
/** @returns {updateVoiceTemplateById} */
declare function updateVoiceTemplateById(): updateVoiceTemplateById;
type updateVoiceTemplateById = {
    /**
     * - Voice template id
     */
    id: string;
    body: CommunicationPlatformModel.VoiceTemplateReq;
};
/** @returns {verfiyOtp} */
declare function verfiyOtp(): verfiyOtp;
type verfiyOtp = {
    body: CommunicationPlatformModel.VerifyOtpCommsReq;
};
import CommunicationPlatformModel = require("./CommunicationPlatformModel");
