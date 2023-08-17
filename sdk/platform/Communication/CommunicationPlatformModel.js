const Joi = require("joi");

/**
 * @typedef Audience
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [file_url]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {number} [records_count]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [updated_at]
 */

/**
 * @typedef AudienceReq
 * @property {string} [application]
 * @property {string} [description]
 * @property {string} [file_url]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {number} [records_count]
 * @property {string[]} [tags]
 * @property {string} [type]
 */

/**
 * @typedef Audiences
 * @property {Audience[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BadRequestSchema
 * @property {string} [message] - Failure message.
 * @property {string} [status] - Response status.
 */

/**
 * @typedef BigqueryHeadersReq
 * @property {string} [query]
 * @property {string} [type]
 */

/**
 * @typedef BigqueryHeadersRes
 * @property {BigqueryHeadersResHeaders[]} [headers]
 */

/**
 * @typedef BigqueryHeadersResHeaders
 * @property {string} [name]
 * @property {string} [type]
 */

/**
 * @typedef Campaign
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [datasource]
 * @property {string} [description]
 * @property {CampaignEmail} [email]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {RecipientHeaders} [recipient_headers]
 * @property {string} [slug]
 * @property {Object[]} [tags]
 * @property {string} [type]
 * @property {string} [updated_at]
 */

/**
 * @typedef CampaignEmail
 * @property {CampignEmailProvider} [provider]
 * @property {CampaignEmailTemplate} [template]
 */

/**
 * @typedef CampaignEmailTemplate
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef CampaignReq
 * @property {string} [application]
 * @property {string} [description]
 * @property {string} [file_url]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {number} [records_count]
 * @property {string[]} [tags]
 * @property {string} [type]
 */

/**
 * @typedef Campaigns
 * @property {Campaign[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CampignEmailProvider
 * @property {string} [_id]
 * @property {string} [from_email]
 * @property {string} [from_name]
 */

/**
 * @typedef EmailProvider
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [api_key]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {EmailProviderReqFrom[]} [from_address]
 * @property {string} [name]
 * @property {string} [provider]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {string} [updated_at]
 */

/**
 * @typedef EmailProviderReq
 * @property {string} [api_key]
 * @property {string} [description]
 * @property {EmailProviderReqFrom[]} [from_address]
 * @property {string} [name]
 * @property {string} [provider]
 * @property {string} [type]
 */

/**
 * @typedef EmailProviderReqFrom
 * @property {string} [email]
 * @property {boolean} [is_default]
 * @property {string} [name]
 */

/**
 * @typedef EmailProviders
 * @property {EmailProvider[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef EmailTemplate
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [from_name]
 * @property {Object[]} [headers]
 * @property {TemplateAndType} [html]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_system]
 * @property {string} [name]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {Object[]} [static_bcc]
 * @property {Object[]} [static_cc]
 * @property {Object[]} [static_to]
 * @property {TemplateAndType} [subject]
 * @property {Object[]} [tags]
 * @property {TemplateAndType} [text]
 * @property {string} [updated_at]
 */

/**
 * @typedef EmailTemplateDeleteFailureRes
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef EmailTemplateDeleteSuccessRes
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef EmailTemplateHeaders
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef EmailTemplateKeys
 * @property {string} [bcc]
 * @property {string} [cc]
 * @property {string} [to]
 */

/**
 * @typedef EmailTemplateReq
 * @property {Object[]} [attachments]
 * @property {string} [description]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [html]
 * @property {EmailTemplateKeys} [keys]
 * @property {string} [name]
 * @property {string} [priority]
 * @property {string} [reply_to]
 * @property {string[]} [static_bcc]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_to]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [text]
 */

/**
 * @typedef EmailTemplateRes
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [html]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_system]
 * @property {EmailTemplateKeys} [keys]
 * @property {string} [name]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [reply_to]
 * @property {string} [slug]
 * @property {string[]} [static_bcc]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_to]
 * @property {TemplateAndType} [subject]
 * @property {Object[]} [tags]
 * @property {TemplateAndType} [text]
 * @property {string} [updated_at]
 */

/**
 * @typedef EmailTemplates
 * @property {EmailTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef EngineRequest
 * @property {MetaStructure} [meta]
 * @property {PayloadStructure} [payload]
 */

/**
 * @typedef EngineResponse
 * @property {boolean} [success]
 */

/**
 * @typedef EventSubscription
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [event]
 * @property {boolean} [is_default]
 * @property {string} [slug]
 * @property {EventSubscriptionTemplate} [template]
 * @property {string} [updated_at]
 */

/**
 * @typedef EventSubscriptions
 * @property {EventSubscription[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef EventSubscriptionTemplate
 * @property {EventSubscriptionTemplateEmail} [email]
 * @property {EventSubscriptionTemplateSms} [sms]
 */

/**
 * @typedef EventSubscriptionTemplateEmail
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */

/**
 * @typedef EventSubscriptionTemplateSms
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */

/**
 * @typedef GetNRecordsCsvReq
 * @property {number} [count]
 * @property {boolean} [header]
 * @property {string} [url]
 */

/**
 * @typedef GetNRecordsCsvRes
 * @property {GetNRecordsCsvResItems[]} [items]
 */

/**
 * @typedef GetNRecordsCsvResItems
 * @property {string} [email]
 * @property {string} [firstname]
 * @property {string} [lastname]
 * @property {string} [orderid]
 * @property {string} [phone_number]
 */

/**
 * @typedef GetStats
 * @property {Stats[]} [items]
 */

/**
 * @typedef Job
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [campaign]
 * @property {boolean} [completed]
 * @property {string} [created_at]
 * @property {boolean} [is_active]
 * @property {string} [updated_at]
 */

/**
 * @typedef JobLog
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [campaign]
 * @property {string} [created_at]
 * @property {Object} [imported]
 * @property {string} [job]
 * @property {Object} [processed]
 * @property {string} [updated_at]
 */

/**
 * @typedef JobLogs
 * @property {JobLog[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Jobs
 * @property {Job[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Log
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [channel_type]
 * @property {string} [created_at]
 * @property {Object} [data]
 * @property {LogEmail} [email]
 * @property {string} [expire_at]
 * @property {LogMeta} [meta]
 * @property {LogPushnotification} [pushnotification]
 * @property {string} [service]
 * @property {string} [source]
 * @property {string} [status]
 * @property {string} [step]
 */

/**
 * @typedef LogEmail
 * @property {string} [template]
 */

/**
 * @typedef LogMeta
 * @property {string} [identifier]
 * @property {string} [key]
 * @property {string} [offset]
 * @property {string} [partition]
 * @property {string} [topic]
 * @property {string} [type]
 */

/**
 * @typedef LogPushnotification
 * @property {string[]} [pushtokens]
 */

/**
 * @typedef Logs
 * @property {Log[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef MetaStructure
 * @property {string} [action]
 * @property {string} [job_type]
 * @property {string} [timestamp]
 * @property {string} [trace]
 */

/**
 * @typedef NotFound
 * @property {string} [message] - Failure message.
 */

/**
 * @typedef Notification
 * @property {string} [body]
 * @property {string} [click_action]
 * @property {string} [deeplink]
 * @property {string} [icon]
 * @property {string} [subtitle]
 * @property {string} [title]
 */

/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */

/**
 * @typedef PayloadEmailProviderStructure
 * @property {string} [_id]
 */

/**
 * @typedef PayloadEmailStructure
 * @property {PayloadEmailProviderStructure} [provider]
 * @property {PayloadEmailTemplateStructure} [template]
 */

/**
 * @typedef PayloadEmailTemplateStructure
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef PayloadSmsProviderStructure
 * @property {string} [_id]
 */

/**
 * @typedef PayloadSmsStructure
 * @property {PayloadSmsProviderStructure} [provider]
 * @property {PayloadSmsTemplateStructure} [template]
 */

/**
 * @typedef PayloadSmsTemplateStructure
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef PayloadStructure
 * @property {string} [application]
 * @property {Object[]} [data]
 * @property {PayloadEmailStructure} [email]
 * @property {PayloadSmsStructure} [sms]
 */

/**
 * @typedef PushtokenReq
 * @property {string} [action]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 */

/**
 * @typedef PushtokenRes
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {string} [bundle_identifier]
 * @property {string} [created_at]
 * @property {string} [expired_at]
 * @property {string} [platform]
 * @property {string} [push_token]
 * @property {string} [type]
 * @property {string} [unique_device_id]
 * @property {string} [updated_at]
 * @property {string} [user_id]
 */

/**
 * @typedef RecipientHeaders
 * @property {string} [email]
 */

/**
 * @typedef SendOtpCommsReq
 * @property {SendOtpCommsReqData} [data]
 * @property {SendOtpCommsReqEmail} [email]
 * @property {SendOtpCommsReqSms} [sms]
 */

/**
 * @typedef SendOtpCommsReqData
 * @property {string} [country_code]
 * @property {string} [mobile]
 * @property {boolean} [send_same_otp_to_channel]
 * @property {string} [to]
 */

/**
 * @typedef SendOtpCommsReqEmail
 * @property {number} [expiry]
 * @property {number} [otp_length]
 * @property {SendOtpEmailCommsProvider} [provider]
 * @property {SendOtpEmailCommsTemplate} [template]
 */

/**
 * @typedef SendOtpCommsReqSms
 * @property {number} [expiry]
 * @property {number} [otp_length]
 * @property {SendOtpSmsCommsProvider} [provider]
 * @property {SendOtpSmsCommsTemplate} [template]
 */

/**
 * @typedef SendOtpCommsRes
 * @property {SendOtpCommsResEmail} [email]
 * @property {SendOtpCommsResSms} [sms]
 */

/**
 * @typedef SendOtpCommsResEmail
 * @property {string} [message]
 * @property {string} [request_id]
 * @property {number} [resend_timer]
 * @property {boolean} [success]
 * @property {string} [to]
 */

/**
 * @typedef SendOtpCommsResSms
 * @property {string} [country_code]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [request_id]
 * @property {number} [resend_timer]
 * @property {boolean} [success]
 */

/**
 * @typedef SendOtpEmailCommsProvider
 * @property {string} [_id]
 * @property {string} [slug]
 */

/**
 * @typedef SendOtpEmailCommsTemplate
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef SendOtpSmsCommsProvider
 * @property {string} [_id]
 * @property {string} [slug]
 */

/**
 * @typedef SendOtpSmsCommsTemplate
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef SmsProvider
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [authkey]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [provider]
 * @property {number} [rpt]
 * @property {string} [sender]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [username]
 */

/**
 * @typedef SmsProviderReq
 * @property {string} [authkey]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [provider]
 * @property {string} [sender]
 * @property {string} [type]
 * @property {string} [username]
 */

/**
 * @typedef SmsProviders
 * @property {SmsProvider[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SmsTemplate
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_system]
 * @property {SmsTemplateMessage} [message]
 * @property {string} [name]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {Object[]} [tags]
 * @property {Object} [template_variables]
 * @property {string} [updated_at]
 */

/**
 * @typedef SmsTemplateDeleteFailureRes
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef SmsTemplateDeleteSuccessRes
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef SmsTemplateMessage
 * @property {string} [template]
 * @property {string} [template_type]
 */

/**
 * @typedef SmsTemplateReq
 * @property {Object[]} [attachments]
 * @property {string} [description]
 * @property {SmsTemplateMessage} [message]
 * @property {string} [name]
 * @property {string} [priority]
 * @property {Object} [template_variables]
 */

/**
 * @typedef SmsTemplateRes
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_system]
 * @property {SmsTemplateMessage} [message]
 * @property {string} [name]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {Object[]} [tags]
 * @property {Object} [template_variables]
 * @property {string} [updated_at]
 */

/**
 * @typedef SmsTemplates
 * @property {SmsTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Stats
 * @property {string} [_id]
 * @property {Object} [imported]
 * @property {Object} [processed]
 */

/**
 * @typedef StatsImported
 * @property {number} [count]
 */

/**
 * @typedef StatsProcessed
 * @property {StatsProcessedEmail} [email]
 * @property {StatsProcessedSms} [sms]
 */

/**
 * @typedef StatsProcessedEmail
 * @property {number} [failed]
 * @property {number} [success]
 * @property {number} [suppressed]
 */

/**
 * @typedef StatsProcessedSms
 * @property {number} [failed]
 * @property {number} [success]
 * @property {number} [suppressed]
 */

/**
 * @typedef SystemEmailTemplate
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [from_name]
 * @property {Object[]} [headers]
 * @property {TemplateAndType} [html]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_system]
 * @property {string} [name]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {Object[]} [static_bcc]
 * @property {Object[]} [static_cc]
 * @property {Object[]} [static_to]
 * @property {TemplateAndType} [subject]
 * @property {Object[]} [tags]
 * @property {TemplateAndType} [text]
 * @property {string} [updated_at]
 */

/**
 * @typedef SystemEmailTemplates
 * @property {SystemEmailTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SystemNotification
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [group]
 * @property {Notification} [notification]
 * @property {SystemNotificationUser} [settings]
 * @property {SystemNotificationUser} [user]
 */

/**
 * @typedef SystemNotifications
 * @property {SystemNotification[]} [items]
 * @property {number} [last_read_anchor]
 * @property {Page} [page]
 */

/**
 * @typedef SystemNotificationSettings
 * @property {string} [priority]
 * @property {boolean} [sound]
 * @property {string} [time_to_live]
 */

/**
 * @typedef SystemNotificationsPage
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */

/**
 * @typedef SystemNotificationUser
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef SystemSmsTemplate
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_system]
 * @property {SmsTemplateMessage} [message]
 * @property {string} [name]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {Object[]} [tags]
 * @property {Object} [template_variables]
 * @property {string} [updated_at]
 */

/**
 * @typedef SystemSmsTemplates
 * @property {SystemSmsTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef TemplateAndType
 * @property {string} [template]
 * @property {string} [template_type]
 */

/**
 * @typedef TriggerJobRequest
 * @property {string} [job_id]
 */

/**
 * @typedef TriggerJobResponse
 * @property {number} [status]
 */

/**
 * @typedef VerifyOtpCommsErrorRes
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef VerifyOtpCommsReq
 * @property {string} [otp]
 * @property {string} [request_id]
 */

/**
 * @typedef VerifyOtpCommsSuccessRes
 * @property {string} [country_code]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {boolean} [success]
 */

class CommunicationPlatformModel {
  /** @returns {Audience} */
  static Audience() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      file_url: Joi.string().allow(""),
      headers: Joi.array().items(Joi.string().allow("")),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      records_count: Joi.number(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {AudienceReq} */
  static AudienceReq() {
    return Joi.object({
      application: Joi.string().allow(""),
      description: Joi.string().allow(""),
      file_url: Joi.string().allow(""),
      headers: Joi.array().items(Joi.string().allow("")),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      records_count: Joi.number(),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {Audiences} */
  static Audiences() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.Audience()),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {BadRequestSchema} */
  static BadRequestSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {BigqueryHeadersReq} */
  static BigqueryHeadersReq() {
    return Joi.object({
      query: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {BigqueryHeadersRes} */
  static BigqueryHeadersRes() {
    return Joi.object({
      headers: Joi.array().items(
        CommunicationPlatformModel.BigqueryHeadersResHeaders()
      ),
    });
  }

  /** @returns {BigqueryHeadersResHeaders} */
  static BigqueryHeadersResHeaders() {
    return Joi.object({
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {Campaign} */
  static Campaign() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      datasource: Joi.string().allow(""),
      description: Joi.string().allow(""),
      email: CommunicationPlatformModel.CampaignEmail(),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      recipient_headers: CommunicationPlatformModel.RecipientHeaders(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.any()),
      type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {CampaignEmail} */
  static CampaignEmail() {
    return Joi.object({
      provider: CommunicationPlatformModel.CampignEmailProvider(),
      template: CommunicationPlatformModel.CampaignEmailTemplate(),
    });
  }

  /** @returns {CampaignEmailTemplate} */
  static CampaignEmailTemplate() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {CampaignReq} */
  static CampaignReq() {
    return Joi.object({
      application: Joi.string().allow(""),
      description: Joi.string().allow(""),
      file_url: Joi.string().allow(""),
      headers: Joi.array().items(Joi.string().allow("")),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      records_count: Joi.number(),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {Campaigns} */
  static Campaigns() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.Campaign()),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {CampignEmailProvider} */
  static CampignEmailProvider() {
    return Joi.object({
      _id: Joi.string().allow(""),
      from_email: Joi.string().allow(""),
      from_name: Joi.string().allow(""),
    });
  }

  /** @returns {EmailProvider} */
  static EmailProvider() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      api_key: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      from_address: Joi.array().items(
        CommunicationPlatformModel.EmailProviderReqFrom()
      ),
      name: Joi.string().allow(""),
      provider: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {EmailProviderReq} */
  static EmailProviderReq() {
    return Joi.object({
      api_key: Joi.string().allow(""),
      description: Joi.string().allow(""),
      from_address: Joi.array().items(
        CommunicationPlatformModel.EmailProviderReqFrom()
      ),
      name: Joi.string().allow(""),
      provider: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {EmailProviderReqFrom} */
  static EmailProviderReqFrom() {
    return Joi.object({
      email: Joi.string().allow(""),
      is_default: Joi.boolean(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {EmailProviders} */
  static EmailProviders() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.EmailProvider()),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {EmailTemplate} */
  static EmailTemplate() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      attachments: Joi.array().items(Joi.any()),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      from_name: Joi.string().allow(""),
      headers: Joi.array().items(Joi.any()),
      html: CommunicationPlatformModel.TemplateAndType(),
      is_internal: Joi.boolean(),
      is_system: Joi.boolean(),
      name: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      published: Joi.boolean(),
      slug: Joi.string().allow(""),
      static_bcc: Joi.array().items(Joi.any()),
      static_cc: Joi.array().items(Joi.any()),
      static_to: Joi.array().items(Joi.any()),
      subject: CommunicationPlatformModel.TemplateAndType(),
      tags: Joi.array().items(Joi.any()),
      text: CommunicationPlatformModel.TemplateAndType(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {EmailTemplateDeleteFailureRes} */
  static EmailTemplateDeleteFailureRes() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {EmailTemplateDeleteSuccessRes} */
  static EmailTemplateDeleteSuccessRes() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {EmailTemplateHeaders} */
  static EmailTemplateHeaders() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {EmailTemplateKeys} */
  static EmailTemplateKeys() {
    return Joi.object({
      bcc: Joi.string().allow(""),
      cc: Joi.string().allow(""),
      to: Joi.string().allow(""),
    });
  }

  /** @returns {EmailTemplateReq} */
  static EmailTemplateReq() {
    return Joi.object({
      attachments: Joi.array().items(Joi.any()),
      description: Joi.string().allow(""),
      headers: Joi.array().items(
        CommunicationPlatformModel.EmailTemplateHeaders()
      ),
      html: CommunicationPlatformModel.TemplateAndType(),
      keys: CommunicationPlatformModel.EmailTemplateKeys(),
      name: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      reply_to: Joi.string().allow(""),
      static_bcc: Joi.array().items(Joi.string().allow("")),
      static_cc: Joi.array().items(Joi.string().allow("")),
      static_to: Joi.array().items(Joi.string().allow("")),
      subject: CommunicationPlatformModel.TemplateAndType(),
      text: CommunicationPlatformModel.TemplateAndType(),
    });
  }

  /** @returns {EmailTemplateRes} */
  static EmailTemplateRes() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      attachments: Joi.array().items(Joi.any()),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      headers: Joi.array().items(
        CommunicationPlatformModel.EmailTemplateHeaders()
      ),
      html: CommunicationPlatformModel.TemplateAndType(),
      is_internal: Joi.boolean(),
      is_system: Joi.boolean(),
      keys: CommunicationPlatformModel.EmailTemplateKeys(),
      name: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      published: Joi.boolean(),
      reply_to: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      static_bcc: Joi.array().items(Joi.string().allow("")),
      static_cc: Joi.array().items(Joi.string().allow("")),
      static_to: Joi.array().items(Joi.string().allow("")),
      subject: CommunicationPlatformModel.TemplateAndType(),
      tags: Joi.array().items(Joi.any()),
      text: CommunicationPlatformModel.TemplateAndType(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {EmailTemplates} */
  static EmailTemplates() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.EmailTemplate()),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {EngineRequest} */
  static EngineRequest() {
    return Joi.object({
      meta: CommunicationPlatformModel.MetaStructure(),
      payload: CommunicationPlatformModel.PayloadStructure(),
    });
  }

  /** @returns {EngineResponse} */
  static EngineResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {EventSubscription} */
  static EventSubscription() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      event: Joi.string().allow(""),
      is_default: Joi.boolean(),
      slug: Joi.string().allow(""),
      template: CommunicationPlatformModel.EventSubscriptionTemplate(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {EventSubscriptions} */
  static EventSubscriptions() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.EventSubscription()),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {EventSubscriptionTemplate} */
  static EventSubscriptionTemplate() {
    return Joi.object({
      email: CommunicationPlatformModel.EventSubscriptionTemplateEmail(),
      sms: CommunicationPlatformModel.EventSubscriptionTemplateSms(),
    });
  }

  /** @returns {EventSubscriptionTemplateEmail} */
  static EventSubscriptionTemplateEmail() {
    return Joi.object({
      subscribed: Joi.boolean(),
      template: Joi.string().allow(""),
    });
  }

  /** @returns {EventSubscriptionTemplateSms} */
  static EventSubscriptionTemplateSms() {
    return Joi.object({
      subscribed: Joi.boolean(),
      template: Joi.string().allow(""),
    });
  }

  /** @returns {GetNRecordsCsvReq} */
  static GetNRecordsCsvReq() {
    return Joi.object({
      count: Joi.number(),
      header: Joi.boolean(),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {GetNRecordsCsvRes} */
  static GetNRecordsCsvRes() {
    return Joi.object({
      items: Joi.array().items(
        CommunicationPlatformModel.GetNRecordsCsvResItems()
      ),
    });
  }

  /** @returns {GetNRecordsCsvResItems} */
  static GetNRecordsCsvResItems() {
    return Joi.object({
      email: Joi.string().allow(""),
      firstname: Joi.string().allow(""),
      lastname: Joi.string().allow(""),
      orderid: Joi.string().allow(""),
      phone_number: Joi.string().allow(""),
    });
  }

  /** @returns {GetStats} */
  static GetStats() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.Stats()),
    });
  }

  /** @returns {Job} */
  static Job() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      campaign: Joi.string().allow(""),
      completed: Joi.boolean(),
      created_at: Joi.string().allow(""),
      is_active: Joi.boolean(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {JobLog} */
  static JobLog() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      campaign: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      imported: Joi.any(),
      job: Joi.string().allow(""),
      processed: Joi.any(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {JobLogs} */
  static JobLogs() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.JobLog()),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {Jobs} */
  static Jobs() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.Job()),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {Log} */
  static Log() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      channel_type: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      data: Joi.any(),
      email: CommunicationPlatformModel.LogEmail(),
      expire_at: Joi.string().allow(""),
      meta: CommunicationPlatformModel.LogMeta(),
      pushnotification: CommunicationPlatformModel.LogPushnotification(),
      service: Joi.string().allow(""),
      source: Joi.string().allow(""),
      status: Joi.string().allow(""),
      step: Joi.string().allow(""),
    });
  }

  /** @returns {LogEmail} */
  static LogEmail() {
    return Joi.object({
      template: Joi.string().allow(""),
    });
  }

  /** @returns {LogMeta} */
  static LogMeta() {
    return Joi.object({
      identifier: Joi.string().allow(""),
      key: Joi.string().allow(""),
      offset: Joi.string().allow(""),
      partition: Joi.string().allow(""),
      topic: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {LogPushnotification} */
  static LogPushnotification() {
    return Joi.object({
      pushtokens: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Logs} */
  static Logs() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.Log()),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {MetaStructure} */
  static MetaStructure() {
    return Joi.object({
      action: Joi.string().allow(""),
      job_type: Joi.string().allow(""),
      timestamp: Joi.string().allow(""),
      trace: Joi.string().allow(""),
    });
  }

  /** @returns {NotFound} */
  static NotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {Notification} */
  static Notification() {
    return Joi.object({
      body: Joi.string().allow(""),
      click_action: Joi.string().allow(""),
      deeplink: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      subtitle: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {PayloadEmailProviderStructure} */
  static PayloadEmailProviderStructure() {
    return Joi.object({
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {PayloadEmailStructure} */
  static PayloadEmailStructure() {
    return Joi.object({
      provider: CommunicationPlatformModel.PayloadEmailProviderStructure(),
      template: CommunicationPlatformModel.PayloadEmailTemplateStructure(),
    });
  }

  /** @returns {PayloadEmailTemplateStructure} */
  static PayloadEmailTemplateStructure() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.any(),
    });
  }

  /** @returns {PayloadSmsProviderStructure} */
  static PayloadSmsProviderStructure() {
    return Joi.object({
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {PayloadSmsStructure} */
  static PayloadSmsStructure() {
    return Joi.object({
      provider: CommunicationPlatformModel.PayloadSmsProviderStructure(),
      template: CommunicationPlatformModel.PayloadSmsTemplateStructure(),
    });
  }

  /** @returns {PayloadSmsTemplateStructure} */
  static PayloadSmsTemplateStructure() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.any(),
    });
  }

  /** @returns {PayloadStructure} */
  static PayloadStructure() {
    return Joi.object({
      application: Joi.string().allow(""),
      data: Joi.array().items(Joi.any()),
      email: CommunicationPlatformModel.PayloadEmailStructure(),
      sms: CommunicationPlatformModel.PayloadSmsStructure(),
    });
  }

  /** @returns {PushtokenReq} */
  static PushtokenReq() {
    return Joi.object({
      action: Joi.string().allow(""),
      bundle_identifier: Joi.string().allow(""),
      push_token: Joi.string().allow(""),
      unique_device_id: Joi.string().allow(""),
    });
  }

  /** @returns {PushtokenRes} */
  static PushtokenRes() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      bundle_identifier: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      expired_at: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      push_token: Joi.string().allow(""),
      type: Joi.string().allow(""),
      unique_device_id: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {RecipientHeaders} */
  static RecipientHeaders() {
    return Joi.object({
      email: Joi.string().allow(""),
    });
  }

  /** @returns {SendOtpCommsReq} */
  static SendOtpCommsReq() {
    return Joi.object({
      data: CommunicationPlatformModel.SendOtpCommsReqData(),
      email: CommunicationPlatformModel.SendOtpCommsReqEmail(),
      sms: CommunicationPlatformModel.SendOtpCommsReqSms(),
    });
  }

  /** @returns {SendOtpCommsReqData} */
  static SendOtpCommsReqData() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      send_same_otp_to_channel: Joi.boolean(),
      to: Joi.string().allow(""),
    });
  }

  /** @returns {SendOtpCommsReqEmail} */
  static SendOtpCommsReqEmail() {
    return Joi.object({
      expiry: Joi.number(),
      otp_length: Joi.number(),
      provider: CommunicationPlatformModel.SendOtpEmailCommsProvider(),
      template: CommunicationPlatformModel.SendOtpEmailCommsTemplate(),
    });
  }

  /** @returns {SendOtpCommsReqSms} */
  static SendOtpCommsReqSms() {
    return Joi.object({
      expiry: Joi.number(),
      otp_length: Joi.number(),
      provider: CommunicationPlatformModel.SendOtpSmsCommsProvider(),
      template: CommunicationPlatformModel.SendOtpSmsCommsTemplate(),
    });
  }

  /** @returns {SendOtpCommsRes} */
  static SendOtpCommsRes() {
    return Joi.object({
      email: CommunicationPlatformModel.SendOtpCommsResEmail(),
      sms: CommunicationPlatformModel.SendOtpCommsResSms(),
    });
  }

  /** @returns {SendOtpCommsResEmail} */
  static SendOtpCommsResEmail() {
    return Joi.object({
      message: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      resend_timer: Joi.number(),
      success: Joi.boolean(),
      to: Joi.string().allow(""),
    });
  }

  /** @returns {SendOtpCommsResSms} */
  static SendOtpCommsResSms() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      message: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      resend_timer: Joi.number(),
      success: Joi.boolean(),
    });
  }

  /** @returns {SendOtpEmailCommsProvider} */
  static SendOtpEmailCommsProvider() {
    return Joi.object({
      _id: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {SendOtpEmailCommsTemplate} */
  static SendOtpEmailCommsTemplate() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.any(),
    });
  }

  /** @returns {SendOtpSmsCommsProvider} */
  static SendOtpSmsCommsProvider() {
    return Joi.object({
      _id: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {SendOtpSmsCommsTemplate} */
  static SendOtpSmsCommsTemplate() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.any(),
    });
  }

  /** @returns {SmsProvider} */
  static SmsProvider() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      authkey: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      name: Joi.string().allow(""),
      provider: Joi.string().allow(""),
      rpt: Joi.number(),
      sender: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {SmsProviderReq} */
  static SmsProviderReq() {
    return Joi.object({
      authkey: Joi.string().allow(""),
      description: Joi.string().allow(""),
      name: Joi.string().allow(""),
      provider: Joi.string().allow(""),
      sender: Joi.string().allow(""),
      type: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {SmsProviders} */
  static SmsProviders() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.SmsProvider()),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {SmsTemplate} */
  static SmsTemplate() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      is_internal: Joi.boolean(),
      is_system: Joi.boolean(),
      message: CommunicationPlatformModel.SmsTemplateMessage(),
      name: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      published: Joi.boolean(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.any()),
      template_variables: Joi.any(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {SmsTemplateDeleteFailureRes} */
  static SmsTemplateDeleteFailureRes() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {SmsTemplateDeleteSuccessRes} */
  static SmsTemplateDeleteSuccessRes() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {SmsTemplateMessage} */
  static SmsTemplateMessage() {
    return Joi.object({
      template: Joi.string().allow(""),
      template_type: Joi.string().allow(""),
    });
  }

  /** @returns {SmsTemplateReq} */
  static SmsTemplateReq() {
    return Joi.object({
      attachments: Joi.array().items(Joi.any()),
      description: Joi.string().allow(""),
      message: CommunicationPlatformModel.SmsTemplateMessage(),
      name: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      template_variables: Joi.any(),
    });
  }

  /** @returns {SmsTemplateRes} */
  static SmsTemplateRes() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      is_internal: Joi.boolean(),
      is_system: Joi.boolean(),
      message: CommunicationPlatformModel.SmsTemplateMessage(),
      name: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      published: Joi.boolean(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.any()),
      template_variables: Joi.any(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {SmsTemplates} */
  static SmsTemplates() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.SmsTemplate()),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {Stats} */
  static Stats() {
    return Joi.object({
      _id: Joi.string().allow(""),
      imported: Joi.any(),
      processed: Joi.any(),
    });
  }

  /** @returns {StatsImported} */
  static StatsImported() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  /** @returns {StatsProcessed} */
  static StatsProcessed() {
    return Joi.object({
      email: CommunicationPlatformModel.StatsProcessedEmail(),
      sms: CommunicationPlatformModel.StatsProcessedSms(),
    });
  }

  /** @returns {StatsProcessedEmail} */
  static StatsProcessedEmail() {
    return Joi.object({
      failed: Joi.number(),
      success: Joi.number(),
      suppressed: Joi.number(),
    });
  }

  /** @returns {StatsProcessedSms} */
  static StatsProcessedSms() {
    return Joi.object({
      failed: Joi.number(),
      success: Joi.number(),
      suppressed: Joi.number(),
    });
  }

  /** @returns {SystemEmailTemplate} */
  static SystemEmailTemplate() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      attachments: Joi.array().items(Joi.any()),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      from_name: Joi.string().allow(""),
      headers: Joi.array().items(Joi.any()),
      html: CommunicationPlatformModel.TemplateAndType(),
      is_internal: Joi.boolean(),
      is_system: Joi.boolean(),
      name: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      published: Joi.boolean(),
      slug: Joi.string().allow(""),
      static_bcc: Joi.array().items(Joi.any()),
      static_cc: Joi.array().items(Joi.any()),
      static_to: Joi.array().items(Joi.any()),
      subject: CommunicationPlatformModel.TemplateAndType(),
      tags: Joi.array().items(Joi.any()),
      text: CommunicationPlatformModel.TemplateAndType(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {SystemEmailTemplates} */
  static SystemEmailTemplates() {
    return Joi.object({
      items: Joi.array().items(
        CommunicationPlatformModel.SystemEmailTemplate()
      ),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {SystemNotification} */
  static SystemNotification() {
    return Joi.object({
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      group: Joi.string().allow(""),
      notification: CommunicationPlatformModel.Notification(),
      settings: CommunicationPlatformModel.SystemNotificationUser(),
      user: CommunicationPlatformModel.SystemNotificationUser(),
    });
  }

  /** @returns {SystemNotifications} */
  static SystemNotifications() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.SystemNotification()),
      last_read_anchor: Joi.number(),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {SystemNotificationSettings} */
  static SystemNotificationSettings() {
    return Joi.object({
      priority: Joi.string().allow(""),
      sound: Joi.boolean(),
      time_to_live: Joi.string().allow(""),
    });
  }

  /** @returns {SystemNotificationsPage} */
  static SystemNotificationsPage() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {SystemNotificationUser} */
  static SystemNotificationUser() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {SystemSmsTemplate} */
  static SystemSmsTemplate() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      is_internal: Joi.boolean(),
      is_system: Joi.boolean(),
      message: CommunicationPlatformModel.SmsTemplateMessage(),
      name: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      published: Joi.boolean(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.any()),
      template_variables: Joi.any(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {SystemSmsTemplates} */
  static SystemSmsTemplates() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.SystemSmsTemplate()),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {TemplateAndType} */
  static TemplateAndType() {
    return Joi.object({
      template: Joi.string().allow(""),
      template_type: Joi.string().allow(""),
    });
  }

  /** @returns {TriggerJobRequest} */
  static TriggerJobRequest() {
    return Joi.object({
      job_id: Joi.string().allow(""),
    });
  }

  /** @returns {TriggerJobResponse} */
  static TriggerJobResponse() {
    return Joi.object({
      status: Joi.number(),
    });
  }

  /** @returns {VerifyOtpCommsErrorRes} */
  static VerifyOtpCommsErrorRes() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {VerifyOtpCommsReq} */
  static VerifyOtpCommsReq() {
    return Joi.object({
      otp: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
    });
  }

  /** @returns {VerifyOtpCommsSuccessRes} */
  static VerifyOtpCommsSuccessRes() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      message: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
}
module.exports = CommunicationPlatformModel;
