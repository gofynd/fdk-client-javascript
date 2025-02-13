const Joi = require("joi");

const CommunicationPlatformModel = require("./CommunicationPlatformModel");

/**
 * @typedef CreateAppPushtokenParam
 * @property {CommunicationPlatformModel.PushtokenReq} body
 */

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
 * @property {CommunicationPlatformModel.EventSubscriptionsBulkUpdateRequest} body
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
 * @property {string} id - Event subscription id
 * @property {CommunicationPlatformModel.AudienceReq} body
 */

/**
 * @typedef DeleteCampaignByIdParam
 * @property {string} id - Event subscription id
 */

/**
 * @typedef DeleteEmailProviderByIdParam
 * @property {string} id - Event subscription id
 */

/**
 * @typedef DeleteEmailTemplateByIdParam
 * @property {string} id - Event subscription id
 */

/**
 * @typedef DeleteEventSubscriptionsByIdParam
 * @property {string} id - Event subscription id
 */

/**
 * @typedef DeleteSmsProviderByIdParam
 * @property {string} id - Event subscription id
 */

/**
 * @typedef DeleteSmsTemplateByIdParam
 * @property {string} id - Event subscription id
 */

/**
 * @typedef EditEventSubscriptionsParam
 * @property {string} id - Event subscription id
 * @property {CommunicationPlatformModel.SubscriptionsObjectRequest} body
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

/** @typedef GetDummyDatasourcesParam */

/**
 * @typedef GetDummyDatasourcesMetaParam
 * @property {number} id - Dummy datasources meta ID
 */

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

/**
 * @typedef GetEventSubscriptionsByIdParam
 * @property {string} [populate] - Populate Fields
 * @property {string} id - Event subscription id
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

/**
 * @typedef GetNSampleRecordsFromCsvByGetParam
 * @property {number} [count] - Number or records
 * @property {boolean} [header] - Header needed
 * @property {string} [url] - Url of file
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
 * @property {CommunicationPlatformModel.EngineRequest} body
 */

/**
 * @typedef SendCommunicationSynchronouslyParam
 * @property {CommunicationPlatformModel.EngineRequest} body
 */

/**
 * @typedef SendEngineCommunicationSynchronouslyParam
 * @property {CommunicationPlatformModel.EngineRequest} body
 */

/**
 * @typedef SendOtpParam
 * @property {boolean} [ci] - Common Information
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
 * @typedef UpdateAppProvidersGlobalProviderParam
 * @property {CommunicationPlatformModel.AppProvidersGlobalProviderRequest} body
 */

/**
 * @typedef UpdateAudienceByIdParam
 * @property {string} id - Event subscription id
 * @property {CommunicationPlatformModel.AudienceReq} body
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

class CommunicationPlatformApplicationValidator {
  /** @returns {CreateAppPushtokenParam} */
  static createAppPushtoken() {
    return Joi.object({
      body: CommunicationPlatformModel.PushtokenReq().required(),
    }).required();
  }

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

  /** @returns {CreateEventSubscriptionsParam} */
  static createEventSubscriptions() {
    return Joi.object({
      body: CommunicationPlatformModel.SubscriptionsObject().required(),
    }).required();
  }

  /** @returns {CreateEventSubscriptionsByBulkParam} */
  static createEventSubscriptionsByBulk() {
    return Joi.object({
      body: CommunicationPlatformModel.EventSubscriptionsBulkUpdateRequest().required(),
    }).required();
  }

  /** @returns {CreateJobsParam} */
  static createJobs() {
    return Joi.object({
      body: CommunicationPlatformModel.CreateJobsReq().required(),
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

  /** @returns {DeleteAudienceByIdParam} */
  static deleteAudienceById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationPlatformModel.AudienceReq().required(),
    }).required();
  }

  /** @returns {DeleteCampaignByIdParam} */
  static deleteCampaignById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
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

  /** @returns {DeleteEventSubscriptionsByIdParam} */
  static deleteEventSubscriptionsById() {
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

  /** @returns {EditEventSubscriptionsParam} */
  static editEventSubscriptions() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CommunicationPlatformModel.SubscriptionsObjectRequest().required(),
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
      sort: Joi.string().allow(""),
      query: Joi.string().allow(""),
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
      query: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetCommunicationLogsParam} */
  static getCommunicationLogs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.string().allow(""),
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

  /** @returns {GetDummyDatasourcesParam} */
  static getDummyDatasources() {
    return Joi.object({}).required();
  }

  /** @returns {GetDummyDatasourcesMetaParam} */
  static getDummyDatasourcesMeta() {
    return Joi.object({
      id: Joi.number().required(),
    }).required();
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
      sort: Joi.string().allow(""),
      query: Joi.string().allow(""),
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
      sort: Joi.string().allow(""),
      query: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetEventSubscriptionsParam} */
  static getEventSubscriptions() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      populate: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetEventSubscriptionsByIdParam} */
  static getEventSubscriptionsById() {
    return Joi.object({
      populate: Joi.string().allow(""),
      id: Joi.string().allow("").required(),
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
      sort: Joi.string().allow(""),
      query: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetJobsParam} */
  static getJobs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.string().allow(""),
      query: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetNSampleRecordsFromCsvParam} */
  static getNSampleRecordsFromCsv() {
    return Joi.object({
      body: CommunicationPlatformModel.GetNRecordsCsvReq().required(),
    }).required();
  }

  /** @returns {GetNSampleRecordsFromCsvByGetParam} */
  static getNSampleRecordsFromCsvByGet() {
    return Joi.object({
      count: Joi.number(),
      header: Joi.boolean(),
      url: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetOtpConfigurationParam} */
  static getOtpConfiguration() {
    return Joi.object({}).required();
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
      sort: Joi.string().allow(""),
      query: Joi.string().allow(""),
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
      sort: Joi.string().allow(""),
      query: Joi.string().allow(""),
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
      query: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetSubscribedSmsTemplatesParam} */
  static getSubscribedSmsTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      query: Joi.string().allow(""),
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

  /** @returns {SendEngineCommunicationSynchronouslyParam} */
  static sendEngineCommunicationSynchronously() {
    return Joi.object({
      body: CommunicationPlatformModel.EngineRequest().required(),
    }).required();
  }

  /** @returns {SendOtpParam} */
  static sendOtp() {
    return Joi.object({
      ci: Joi.boolean(),
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

  /** @returns {UpdateAppProvidersGlobalProviderParam} */
  static updateAppProvidersGlobalProvider() {
    return Joi.object({
      body: CommunicationPlatformModel.AppProvidersGlobalProviderRequest().required(),
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

  /** @returns {UpdateOtpConfigurationParam} */
  static updateOtpConfiguration() {
    return Joi.object({
      body: CommunicationPlatformModel.OtpConfiguration().required(),
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

  /** @returns {VerfiyOtpParam} */
  static verfiyOtp() {
    return Joi.object({
      body: CommunicationPlatformModel.VerifyOtpCommsReq().required(),
    }).required();
  }
}

module.exports = CommunicationPlatformApplicationValidator;
