const Joi = require("joi");

const CommunicationPlatformModel = require("./CommunicationPlatformModel");

/**
 * @typedef CreateAudienceParam
 * @property {CommunicationPlatformModel.AudienceReq} body
 */

/** @typedef CreateBigQueryHeadersParam */

/** @typedef CreateBigQueryNCountParam */

/** @typedef CreateBigQueryRowCountParam */

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
 * @property {string} id - Audience id
 * @property {CommunicationPlatformModel.AudienceReq} body
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
 * @typedef DeleteEventSubscriptionsByIdParam
 * @property {string} id - Event subscription id
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
 * @typedef EditEventSubscriptionsParam
 * @property {string} id - Event subscription id
 * @property {CommunicationPlatformModel.SubscriptionsObject} body
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
 * @property {Object} [query] - To search based on plain text
 */

/**
 * @typedef GetBigQueryHeadersByIdParam
 * @property {string} id - Audience id
 */

/**
 * @typedef GetBigQueryRowCountByIdParam
 * @property {string} id - Audience id
 */

/**
 * @typedef GetCampaignByIdParam
 * @property {string} id - Campaign id
 */

/**
 * @typedef GetCampaignsParam
 * @property {Object} [query] - To search based on plain text
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

/** @typedef GetDefaultSmsProvidersParam */

/** @typedef GetDummyDatasourcesParam */

/**
 * @typedef GetDummyDatasourcesMetaParam
 * @property {number} id - Dummy datasources meta ID
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
 * @property {Object} [query] - To search based on plain text
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
 * @property {Object} [query] - To search based on plain text
 */

/**
 * @typedef GetEventSubscriptionsParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {string} [populate] - Populate Fields
 */

/**
 * @typedef GetEventSubscriptionsByIdParam
 * @property {string} id - Event subscription id
 * @property {string} [populate] - Populate Fields
 */

/** @typedef GetGlobalProvidersParam */

/** @typedef GetGlobalVariablesParam */

/**
 * @typedef GetJobLogsParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 * @property {Object} [query] - To search based on plain text
 */

/**
 * @typedef GetJobsParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 * @property {Object} [query] - To search based on plain text
 */

/**
 * @typedef GetNSampleRecordsFromCsvParam
 * @property {CommunicationPlatformModel.GetNRecordsCsvReq} body
 */

/** @typedef GetNSampleRecordsFromCsvByGetParam */

/** @typedef GetOtpConfigurationParam */

/**
 * @typedef GetSmsProviderByIdParam
 * @property {string} id - Sms provider id
 */

/**
 * @typedef GetSmsProvidersParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [sort] - To sort based on created_at
 * @property {Object} [query] - To search based on plain text
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
 * @property {Object} [query] - To search based on plain text
 */

/**
 * @typedef GetStatsOfCampaignByIdParam
 * @property {string} id - Campaign id
 */

/**
 * @typedef GetSubscribedEmailTemplatesParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [query] - To search based on plain text
 */

/**
 * @typedef GetSubscribedSmsTemplatesParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {Object} [query] - To search based on plain text
 */

/** @typedef GetSystemAudiencesParam */

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

/** @typedef UpdateOtpConfigurationParam */

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

class CommunicationPlatformApplicationValidator {
  /** @returns {CreateAudienceParam} */
  static createAudience() {
    return Joi.object({
      body: CommunicationPlatformModel.AudienceReq().required(),
    }).required();
  }

  /** @returns {CreateBigQueryHeadersParam} */
  static createBigQueryHeaders() {
    return Joi.object({}).required();
  }

  /** @returns {CreateBigQueryNCountParam} */
  static createBigQueryNCount() {
    return Joi.object({}).required();
  }

  /** @returns {CreateBigQueryRowCountParam} */
  static createBigQueryRowCount() {
    return Joi.object({}).required();
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
      body: CommunicationPlatformModel.SubscriptionsObject().required(),
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
      query: Joi.any(),
    }).required();
  }

  /** @returns {GetBigQueryHeadersByIdParam} */
  static getBigQueryHeadersById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetBigQueryRowCountByIdParam} */
  static getBigQueryRowCountById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
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
      query: Joi.any(),
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
      sort: Joi.any(),
      query: Joi.any(),
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
      query: Joi.any(),
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
      id: Joi.string().allow("").required(),
      populate: Joi.string().allow(""),
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
      query: Joi.any(),
    }).required();
  }

  /** @returns {GetJobsParam} */
  static getJobs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
      query: Joi.any(),
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
    return Joi.object({}).required();
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
      sort: Joi.any(),
      query: Joi.any(),
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
      query: Joi.any(),
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
      query: Joi.any(),
    }).required();
  }

  /** @returns {GetSubscribedSmsTemplatesParam} */
  static getSubscribedSmsTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      query: Joi.any(),
    }).required();
  }

  /** @returns {GetSystemAudiencesParam} */
  static getSystemAudiences() {
    return Joi.object({}).required();
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
    return Joi.object({}).required();
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
