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

class CommunicationPlatformApplicationValidator {
  /** @returns {CreateAudienceParam} */
  static createAudience() {
    return Joi.object({
      body: CommunicationPlatformModel.AudienceReq().required(),
    }).required();
  }

  /** @returns {CreateCampaignParam} */
  static createCampaign() {
    return Joi.object({
      body: CommunicationPlatformModel.CampaignReq().required(),
    }).required();
  }

  /** @returns {CreateEmailProviderParam} */
  static createEmailProvider() {
    return Joi.object({
      body: CommunicationPlatformModel.EmailProviderReq().required(),
    }).required();
  }

  /** @returns {CreateEmailTemplateParam} */
  static createEmailTemplate() {
    return Joi.object({
      body: CommunicationPlatformModel.EmailTemplateReq().required(),
    }).required();
  }

  /** @returns {CreateSmsProviderParam} */
  static createSmsProvider() {
    return Joi.object({
      body: CommunicationPlatformModel.SmsProviderReq().required(),
    }).required();
  }

  /** @returns {CreateSmsTemplateParam} */
  static createSmsTemplate() {
    return Joi.object({
      body: CommunicationPlatformModel.SmsTemplateReq().required(),
    }).required();
  }

  /** @returns {CreateVoiceProviderParam} */
  static createVoiceProvider() {
    return Joi.object({
      body: CommunicationPlatformModel.VoiceProviderReq().required(),
    }).required();
  }

  /** @returns {CreateVoiceTemplateParam} */
  static createVoiceTemplate() {
    return Joi.object({
      body: CommunicationPlatformModel.VoiceTemplateReq().required(),
    }).required();
  }

  /** @returns {DeleteEmailProviderByIdParam} */
  static deleteEmailProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteEmailTemplateByIdParam} */
  static deleteEmailTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteSmsProviderByIdParam} */
  static deleteSmsProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteSmsTemplateByIdParam} */
  static deleteSmsTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteVoiceTemplateByIdParam} */
  static deleteVoiceTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetAppProvidersParam} */
  static getAppProviders() {
    return Joi.object({}).required();
  }

  /** @returns {GetAudienceByIdParam} */
  static getAudienceById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetAudiencesParam} */
  static getAudiences() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {GetBigqueryHeadersParam} */
  static getBigqueryHeaders() {
    return Joi.object({
      body: CommunicationPlatformModel.BigqueryHeadersReq().required(),
    }).required();
  }

  /** @returns {GetCampaignByIdParam} */
  static getCampaignById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCampaignsParam} */
  static getCampaigns() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {GetCommunicationLogsParam} */
  static getCommunicationLogs() {
    return Joi.object({
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
      sort: Joi.any(),
      query: Joi.any(),
    }).required();
  }

  /** @returns {GetDefaultEmailProvidersParam} */
  static getDefaultEmailProviders() {
    return Joi.object({}).required();
  }

  /** @returns {GetDefaultSmsProvidersParam} */
  static getDefaultSmsProviders() {
    return Joi.object({}).required();
  }

  /** @returns {GetEmailProviderByIdParam} */
  static getEmailProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetEmailProvidersParam} */
  static getEmailProviders() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {GetEmailTemplateByIdParam} */
  static getEmailTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetEmailTemplatesParam} */
  static getEmailTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {GetEventSubscriptionsParam} */
  static getEventSubscriptions() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      populate: Joi.array().items(Joi.string().allow("")),
      query: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetGlobalProvidersParam} */
  static getGlobalProviders() {
    return Joi.object({}).required();
  }

  /** @returns {GetGlobalVariablesParam} */
  static getGlobalVariables() {
    return Joi.object({}).required();
  }

  /** @returns {GetJobLogsParam} */
  static getJobLogs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {GetJobsParam} */
  static getJobs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {GetNSampleRecordsFromCsvParam} */
  static getNSampleRecordsFromCsv() {
    return Joi.object({
      body: CommunicationPlatformModel.GetNRecordsCsvReq().required(),
    }).required();
  }

  /** @returns {GetSmsProviderByIdParam} */
  static getSmsProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetSmsProvidersParam} */
  static getSmsProviders() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {GetSmsTemplateByIdParam} */
  static getSmsTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetSmsTemplatesParam} */
  static getSmsTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {GetStatsOfCampaignByIdParam} */
  static getStatsOfCampaignById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetSubscribedEmailTemplatesParam} */
  static getSubscribedEmailTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetSubscribedSmsTemplatesParam} */
  static getSubscribedSmsTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetSystemEmailTemplatesParam} */
  static getSystemEmailTemplates() {
    return Joi.object({}).required();
  }

  /** @returns {GetSystemSmsTemplatesParam} */
  static getSystemSmsTemplates() {
    return Joi.object({}).required();
  }

  /** @returns {GetSystemVoiceTemplatesParam} */
  static getSystemVoiceTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {GetVoiceProviderByIdParam} */
  static getVoiceProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetVoiceProvidersParam} */
  static getVoiceProviders() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {GetVoiceTemplateByIdParam} */
  static getVoiceTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetVoiceTemplatesParam} */
  static getVoiceTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {PostGlobalVariablesParam} */
  static postGlobalVariables() {
    return Joi.object({
      body: CommunicationPlatformModel.GlobalVariablesReq().required(),
    }).required();
  }

  /** @returns {SendCommunicationAsynchronouslyParam} */
  static sendCommunicationAsynchronously() {
    return Joi.object({
      body: CommunicationPlatformModel.EngineRequest().required(),
    }).required();
  }

  /** @returns {SendCommunicationSynchronouslyParam} */
  static sendCommunicationSynchronously() {
    return Joi.object({
      body: CommunicationPlatformModel.EngineRequest().required(),
    }).required();
  }

  /** @returns {SendOtpParam} */
  static sendOtp() {
    return Joi.object({
      body: CommunicationPlatformModel.SendOtpCommsReq().required(),
    }).required();
  }

  /** @returns {TriggerCampaignJobParam} */
  static triggerCampaignJob() {
    return Joi.object({
      body: CommunicationPlatformModel.TriggerJobRequest().required(),
    }).required();
  }

  /** @returns {UpdateAppProvidersParam} */
  static updateAppProviders() {
    return Joi.object({
      body: CommunicationPlatformModel.AppProviderReq().required(),
    }).required();
  }

  /** @returns {UpdateAudienceByIdParam} */
  static updateAudienceById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationPlatformModel.AudienceReq().required(),
    }).required();
  }

  /** @returns {UpdateCampaignByIdParam} */
  static updateCampaignById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationPlatformModel.CampaignReq().required(),
    }).required();
  }

  /** @returns {UpdateEmailProviderByIdParam} */
  static updateEmailProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationPlatformModel.EmailProviderReq().required(),
    }).required();
  }

  /** @returns {UpdateEmailTemplateByIdParam} */
  static updateEmailTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationPlatformModel.EmailTemplateReq().required(),
    }).required();
  }

  /** @returns {UpdateSmsProviderByIdParam} */
  static updateSmsProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationPlatformModel.SmsProviderReq().required(),
    }).required();
  }

  /** @returns {UpdateSmsTemplateByIdParam} */
  static updateSmsTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationPlatformModel.SmsTemplateReq().required(),
    }).required();
  }

  /** @returns {UpdateVoiceTemplateByIdParam} */
  static updateVoiceTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationPlatformModel.VoiceTemplateReq().required(),
    }).required();
  }

  /** @returns {VerfiyOtpParam} */
  static verfiyOtp() {
    return Joi.object({
      body: CommunicationPlatformModel.VerifyOtpCommsReq().required(),
    }).required();
  }
}

module.exports = CommunicationPlatformApplicationValidator;
