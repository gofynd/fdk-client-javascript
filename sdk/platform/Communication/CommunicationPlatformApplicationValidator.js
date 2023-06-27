const Joi = require("joi");

const CommunicationPlatformModel = require("./CommunicationPlatformModel");

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
 * @property {string} [populate] - Populate fields
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
 * @typedef getSystemEmailTemplates
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 */

/**
 * @typedef getSystemSystemTemplates
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 */

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
      populate: Joi.string().allow(""),
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

  /** @returns {getSystemEmailTemplates} */
  static getSystemEmailTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {getSystemSystemTemplates} */
  static getSystemSystemTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
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
