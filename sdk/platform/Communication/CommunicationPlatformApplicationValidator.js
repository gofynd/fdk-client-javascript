const Joi = require("joi");

const CommunicationModel = require("./CommunicationPlatformModel");
class CommunicationValidator {
  static createAudience() {
    return Joi.object({
      body: CommunicationModel.AudienceReq().required(),
    }).required();
  }

  static createCampaign() {
    return Joi.object({
      body: CommunicationModel.CampaignReq().required(),
    }).required();
  }

  static createEmailProvider() {
    return Joi.object({
      body: CommunicationModel.EmailProviderReq().required(),
    }).required();
  }

  static createEmailTemplate() {
    return Joi.object({
      body: CommunicationModel.EmailTemplateReq().required(),
    }).required();
  }

  static createSmsProvider() {
    return Joi.object({
      body: CommunicationModel.SmsProviderReq().required(),
    }).required();
  }

  static createSmsTemplate() {
    return Joi.object({
      body: CommunicationModel.SmsTemplateReq().required(),
    }).required();
  }

  static createVoiceProvider() {
    return Joi.object({
      body: CommunicationModel.VoiceProviderReq().required(),
    }).required();
  }

  static createVoiceTemplate() {
    return Joi.object({
      body: CommunicationModel.VoiceTemplateReq().required(),
    }).required();
  }

  static deleteEmailProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static deleteEmailTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static deleteSmsProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static deleteSmsTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static deleteVoiceTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getAppProviders() {
    return Joi.object({}).required();
  }

  static getAudienceById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getAudiences() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static getBigqueryHeaders() {
    return Joi.object({
      body: CommunicationModel.BigqueryHeadersReq().required(),
    }).required();
  }

  static getCampaignById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getCampaigns() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static getCommunicationLogs() {
    return Joi.object({
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
      sort: Joi.any(),
      query: Joi.any(),
    }).required();
  }

  static getDefaultEmailProviders() {
    return Joi.object({}).required();
  }

  static getDefaultSmsProviders() {
    return Joi.object({}).required();
  }

  static getEmailProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getEmailProviders() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static getEmailTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getEmailTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static getEventSubscriptions() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      populate: Joi.string().allow(""),
    }).required();
  }

  static getGlobalProviders() {
    return Joi.object({}).required();
  }

  static getJobLogs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static getJobs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static getNSampleRecordsFromCsv() {
    return Joi.object({
      body: CommunicationModel.GetNRecordsCsvReq().required(),
    }).required();
  }

  static getSmsProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getSmsProviders() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static getSmsTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getSmsTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static getStatsOfCampaignById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getSystemEmailTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static getSystemSystemTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static getSystemVoiceTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static getVoiceProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getVoiceProviders() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static getVoiceTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getVoiceTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static sendCommunicationAsynchronously() {
    return Joi.object({
      body: CommunicationModel.EngineRequest().required(),
    }).required();
  }

  static sendCommunicationSynchronously() {
    return Joi.object({
      body: CommunicationModel.EngineRequest().required(),
    }).required();
  }

  static sendOtp() {
    return Joi.object({
      body: CommunicationModel.SendOtpCommsReq().required(),
    }).required();
  }

  static triggerCampaignJob() {
    return Joi.object({
      body: CommunicationModel.TriggerJobRequest().required(),
    }).required();
  }

  static updateAppProviders() {
    return Joi.object({
      body: CommunicationModel.AppProviderReq().required(),
    }).required();
  }

  static updateAudienceById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationModel.AudienceReq().required(),
    }).required();
  }

  static updateCampaignById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationModel.CampaignReq().required(),
    }).required();
  }

  static updateEmailProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationModel.EmailProviderReq().required(),
    }).required();
  }

  static updateEmailTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationModel.EmailTemplateReq().required(),
    }).required();
  }

  static updateSmsProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationModel.SmsProviderReq().required(),
    }).required();
  }

  static updateSmsTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationModel.SmsTemplateReq().required(),
    }).required();
  }

  static updateVoiceTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationModel.VoiceTemplateReq().required(),
    }).required();
  }

  static verfiyOtp() {
    return Joi.object({
      body: CommunicationModel.VerifyOtpCommsReq().required(),
    }).required();
  }
}

module.exports = CommunicationValidator;
