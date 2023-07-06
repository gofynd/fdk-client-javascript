const Joi = require("joi");

const CommunicationPlatformModel = require("./CommunicationPlatformModel");

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

class CommunicationPlatformApplicationValidator {
  /** @returns {createAudience} */
  static createAudience() {
    return Joi.object({
      body: CommunicationPlatformModel.AudienceReq().required(),
    }).required();
  }

  /** @returns {createCampaign} */
  static createCampaign() {
    return Joi.object({
      body: CommunicationPlatformModel.CampaignReq().required(),
    }).required();
  }

  /** @returns {createEmailProvider} */
  static createEmailProvider() {
    return Joi.object({
      body: CommunicationPlatformModel.EmailProviderReq().required(),
    }).required();
  }

  /** @returns {createEmailTemplate} */
  static createEmailTemplate() {
    return Joi.object({
      body: CommunicationPlatformModel.EmailTemplateReq().required(),
    }).required();
  }

  /** @returns {createSmsProvider} */
  static createSmsProvider() {
    return Joi.object({
      body: CommunicationPlatformModel.SmsProviderReq().required(),
    }).required();
  }

  /** @returns {createSmsTemplate} */
  static createSmsTemplate() {
    return Joi.object({
      body: CommunicationPlatformModel.SmsTemplateReq().required(),
    }).required();
  }

  /** @returns {createVoiceProvider} */
  static createVoiceProvider() {
    return Joi.object({
      body: CommunicationPlatformModel.VoiceProviderReq().required(),
    }).required();
  }

  /** @returns {createVoiceTemplate} */
  static createVoiceTemplate() {
    return Joi.object({
      body: CommunicationPlatformModel.VoiceTemplateReq().required(),
    }).required();
  }

  /** @returns {deleteEmailProviderById} */
  static deleteEmailProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deleteEmailTemplateById} */
  static deleteEmailTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deleteSmsProviderById} */
  static deleteSmsProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deleteSmsTemplateById} */
  static deleteSmsTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deleteVoiceTemplateById} */
  static deleteVoiceTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getAppProviders} */
  static getAppProviders() {
    return Joi.object({}).required();
  }

  /** @returns {getAudienceById} */
  static getAudienceById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getAudiences} */
  static getAudiences() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {getBigqueryHeaders} */
  static getBigqueryHeaders() {
    return Joi.object({
      body: CommunicationPlatformModel.BigqueryHeadersReq().required(),
    }).required();
  }

  /** @returns {getCampaignById} */
  static getCampaignById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getCampaigns} */
  static getCampaigns() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {getCommunicationLogs} */
  static getCommunicationLogs() {
    return Joi.object({
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
      sort: Joi.any(),
      query: Joi.any(),
    }).required();
  }

  /** @returns {getDefaultEmailProviders} */
  static getDefaultEmailProviders() {
    return Joi.object({}).required();
  }

  /** @returns {getDefaultSmsProviders} */
  static getDefaultSmsProviders() {
    return Joi.object({}).required();
  }

  /** @returns {getEmailProviderById} */
  static getEmailProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getEmailProviders} */
  static getEmailProviders() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {getEmailTemplateById} */
  static getEmailTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getEmailTemplates} */
  static getEmailTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {getEventSubscriptions} */
  static getEventSubscriptions() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      populate: Joi.array().items(Joi.string().allow("")),
      query: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getGlobalProviders} */
  static getGlobalProviders() {
    return Joi.object({}).required();
  }

  /** @returns {getJobLogs} */
  static getJobLogs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {getJobs} */
  static getJobs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {getNSampleRecordsFromCsv} */
  static getNSampleRecordsFromCsv() {
    return Joi.object({
      body: CommunicationPlatformModel.GetNRecordsCsvReq().required(),
    }).required();
  }

  /** @returns {getSmsProviderById} */
  static getSmsProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getSmsProviders} */
  static getSmsProviders() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {getSmsTemplateById} */
  static getSmsTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getSmsTemplates} */
  static getSmsTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {getStatsOfCampaignById} */
  static getStatsOfCampaignById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getSubscribedEmailTemplates} */
  static getSubscribedEmailTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getSubscribedSmsTemplates} */
  static getSubscribedSmsTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getSystemEmailTemplates} */
  static getSystemEmailTemplates() {
    return Joi.object({}).required();
  }

  /** @returns {getSystemSmsTemplates} */
  static getSystemSmsTemplates() {
    return Joi.object({}).required();
  }

  /** @returns {getSystemVoiceTemplates} */
  static getSystemVoiceTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {getVoiceProviderById} */
  static getVoiceProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getVoiceProviders} */
  static getVoiceProviders() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {getVoiceTemplateById} */
  static getVoiceTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getVoiceTemplates} */
  static getVoiceTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {sendCommunicationAsynchronously} */
  static sendCommunicationAsynchronously() {
    return Joi.object({
      body: CommunicationPlatformModel.EngineRequest().required(),
    }).required();
  }

  /** @returns {sendCommunicationSynchronously} */
  static sendCommunicationSynchronously() {
    return Joi.object({
      body: CommunicationPlatformModel.EngineRequest().required(),
    }).required();
  }

  /** @returns {sendOtp} */
  static sendOtp() {
    return Joi.object({
      body: CommunicationPlatformModel.SendOtpCommsReq().required(),
    }).required();
  }

  /** @returns {triggerCampaignJob} */
  static triggerCampaignJob() {
    return Joi.object({
      body: CommunicationPlatformModel.TriggerJobRequest().required(),
    }).required();
  }

  /** @returns {updateAppProviders} */
  static updateAppProviders() {
    return Joi.object({
      body: CommunicationPlatformModel.AppProviderReq().required(),
    }).required();
  }

  /** @returns {updateAudienceById} */
  static updateAudienceById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationPlatformModel.AudienceReq().required(),
    }).required();
  }

  /** @returns {updateCampaignById} */
  static updateCampaignById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationPlatformModel.CampaignReq().required(),
    }).required();
  }

  /** @returns {updateEmailProviderById} */
  static updateEmailProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationPlatformModel.EmailProviderReq().required(),
    }).required();
  }

  /** @returns {updateEmailTemplateById} */
  static updateEmailTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationPlatformModel.EmailTemplateReq().required(),
    }).required();
  }

  /** @returns {updateSmsProviderById} */
  static updateSmsProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationPlatformModel.SmsProviderReq().required(),
    }).required();
  }

  /** @returns {updateSmsTemplateById} */
  static updateSmsTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationPlatformModel.SmsTemplateReq().required(),
    }).required();
  }

  /** @returns {updateVoiceTemplateById} */
  static updateVoiceTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationPlatformModel.VoiceTemplateReq().required(),
    }).required();
  }

  /** @returns {verfiyOtp} */
  static verfiyOtp() {
    return Joi.object({
      body: CommunicationPlatformModel.VerifyOtpCommsReq().required(),
    }).required();
  }
}

module.exports = CommunicationPlatformApplicationValidator;
