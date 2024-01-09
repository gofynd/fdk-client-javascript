export = CommunicationPlatformModel;
/**
 * @typedef AppProvider
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {AppProviderRes} [email]
 * @property {AppProviderRes} [sms]
 * @property {string} [updated_at]
 * @property {AppProviderResVoice} [voice]
 */
/**
 * @typedef AppProviderReq
 * @property {AppProviderRes} [email]
 * @property {AppProviderRes} [sms]
 * @property {AppProviderResVoice} [voice]
 */
/**
 * @typedef AppProviderRes
 * @property {AppProviderResObj} [otp]
 * @property {AppProviderResObj} [promotional]
 * @property {AppProviderResObj} [transaction]
 */
/**
 * @typedef AppProviderResObj
 * @property {string} [provider]
 */
/**
 * @typedef AppProviderResVoice
 * @property {AppProviderResObj} [otp]
 * @property {AppProviderResObj} [transaction]
 */
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
 * @property {string} [description]
 * @property {string} [file_url]
 * @property {string[]} [headers]
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
 * @typedef DefaultSmsProviders
 * @property {string} [_id]
 * @property {boolean} [is_default]
 * @property {string} [name]
 */
/**
 * @typedef DummyDatasources
 * @property {number} [id]
 * @property {string} [name]
 */
/**
 * @typedef DummyDatasourcesMeta
 * @property {DummyDatasourcesMetaObj} [data]
 * @property {number} [id]
 */
/**
 * @typedef DummyDatasourcesMetaObj
 * @property {number} [b]
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
 * @property {string} [application]
 * @property {number[]} [attachments]
 * @property {string} [category]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [editor_meta]
 * @property {string} [editor_type]
 * @property {string} [from_name]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [html]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_system]
 * @property {string} [name]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [reply_to]
 * @property {string} [slug]
 * @property {string[]} [static_bcc]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_to]
 * @property {TemplateAndType} [subject]
 * @property {string[]} [tags]
 * @property {Object} [template_variables]
 * @property {TemplateAndType} [text]
 * @property {string} [updated_at]
 * @property {EnabledObj} [url_shorten]
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
 * @property {number[]} [attachments]
 * @property {string} [description]
 * @property {string} [editor_meta]
 * @property {string} [editor_type]
 * @property {string} [from_name]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [html]
 * @property {EmailTemplateKeys} [keys]
 * @property {string} name
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [reply_to]
 * @property {string[]} [static_bcc]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_to]
 * @property {TemplateAndType} [subject]
 * @property {string[]} [tags]
 * @property {Object} [template_variables]
 * @property {TemplateAndType} [text]
 */
/**
 * @typedef EmailTemplates
 * @property {EmailTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EnabledObj
 * @property {boolean} [enabled]
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
 * @typedef GenericDelete
 * @property {boolean} [acknowledged]
 * @property {number} [affected]
 * @property {string} [message]
 * @property {string} [operation]
 */
/**
 * @typedef GenericError
 * @property {Message} [message]
 * @property {string} [sentry]
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
 * @typedef GlobalProviders
 * @property {GlobalProvidersResObj[]} [email]
 * @property {GlobalProvidersResObj[]} [sms]
 * @property {GlobalProvidersResObj[]} [voice]
 */
/**
 * @typedef GlobalProvidersResObj
 * @property {string} [_id]
 * @property {string} [name]
 */
/**
 * @typedef GlobalVariablesGetResponse
 * @property {Object} [editable]
 * @property {Object} [read_only]
 */
/**
 * @typedef GlobalVariablesPostResponse
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [category]
 * @property {string} [created_at]
 * @property {Object} [global_variables]
 */
/**
 * @typedef GlobalVariablesReq
 * @property {Object} [global_variables]
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
 * @property {string} [created_at]
 * @property {Object} [data]
 * @property {LogEmail} [email]
 * @property {string} [expire_at]
 * @property {LogMeta} [meta]
 * @property {LogPushnotification} [pushnotification]
 * @property {string} [service]
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
 * @typedef Message
 * @property {string} [info]
 * @property {string} [message]
 * @property {string} [operation]
 * @property {boolean} [success]
 */
/**
 * @typedef metaObj
 * @property {boolean} [is_system]
 * @property {string} [template]
 * @property {string} [type]
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
 * @property {string} [api_key] - The api_key for the test.
 * @property {string} [apikey] - The apikey for the test.
 * @property {string} [authkey]
 * @property {string} [description]
 * @property {string} [entity_id] - The entity ID for the test.
 * @property {string} [entityid] - The entity ID for the test.
 * @property {string} [feedid] - The feed ID for the test.
 * @property {string} [host] - The host for the test.
 * @property {string} [name]
 * @property {boolean} [override_dnd] - Whether to override Do Not Disturb.
 * @property {string} [password] - The password for the test.
 * @property {number} [port] - The port for the test.
 * @property {string} [provider]
 * @property {string} [sender]
 * @property {string} [sender_id] - The sender ID for the test.
 * @property {string} [senderid] - The sender ID for the test.
 * @property {string} [type]
 * @property {string} [username]
 * @property {number} [version_id] - The version ID for the test.
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
 * @property {string} [application]
 * @property {string} [category]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_system]
 * @property {SmsTemplateMessage} [message]
 * @property {metaObj} [meta]
 * @property {string} [name]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [template_id]
 * @property {Object} [template_variables]
 * @property {string} [updated_at]
 * @property {EnabledObj} [url_shorten]
 */
/**
 * @typedef SmsTemplateMessage
 * @property {string} [template]
 * @property {string} [template_type]
 */
/**
 * @typedef SmsTemplateReq
 * @property {string} [description]
 * @property {SmsTemplateMessage} [message]
 * @property {metaObj} [meta]
 * @property {string} name
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [template_id]
 * @property {Object} [template_variables]
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
 * @property {number[]} [attachments]
 * @property {string} [category]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [html]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_system]
 * @property {string} [name]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {string[]} [static_bcc]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_to]
 * @property {TemplateAndType} [subject]
 * @property {string[]} [tags]
 * @property {Object} [template_variables]
 * @property {TemplateAndType} [text]
 * @property {string} [updated_at]
 * @property {EnabledObj} [url_shorten]
 */
/**
 * @typedef SystemEmailTemplates
 * @property {SystemEmailTemplate[]} [items]
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
 * @typedef SystemNotificationUser
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef SystemSmsTemplates
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [category]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_system]
 * @property {SmsTemplateMessage} [message]
 * @property {string} [name]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [template_id]
 * @property {Object} [template_variables]
 * @property {string} [updated_at]
 * @property {EnabledObj} [url_shorten]
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
declare class CommunicationPlatformModel {
}
declare namespace CommunicationPlatformModel {
    export { AppProvider, AppProviderReq, AppProviderRes, AppProviderResObj, AppProviderResVoice, Audience, AudienceReq, Audiences, BadRequestSchema, Campaign, CampaignEmail, CampaignEmailTemplate, CampaignReq, Campaigns, CampignEmailProvider, DefaultSmsProviders, DummyDatasources, DummyDatasourcesMeta, DummyDatasourcesMetaObj, EmailProvider, EmailProviderReq, EmailProviderReqFrom, EmailProviders, EmailTemplate, EmailTemplateHeaders, EmailTemplateKeys, EmailTemplateReq, EmailTemplates, EnabledObj, EngineRequest, EngineResponse, EventSubscription, EventSubscriptions, EventSubscriptionTemplate, EventSubscriptionTemplateEmail, EventSubscriptionTemplateSms, GenericDelete, GenericError, GetNRecordsCsvReq, GetNRecordsCsvRes, GetNRecordsCsvResItems, GetStats, GlobalProviders, GlobalProvidersResObj, GlobalVariablesGetResponse, GlobalVariablesPostResponse, GlobalVariablesReq, Job, JobLog, JobLogs, Jobs, Log, LogEmail, LogMeta, LogPushnotification, Logs, Message, metaObj, MetaStructure, NotFound, Notification, Page, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadEmailTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadSmsTemplateStructure, PayloadStructure, RecipientHeaders, SendOtpCommsReq, SendOtpCommsReqData, SendOtpCommsReqEmail, SendOtpCommsReqSms, SendOtpCommsRes, SendOtpCommsResEmail, SendOtpCommsResSms, SendOtpEmailCommsProvider, SendOtpEmailCommsTemplate, SendOtpSmsCommsProvider, SendOtpSmsCommsTemplate, SmsProvider, SmsProviderReq, SmsProviders, SmsTemplate, SmsTemplateMessage, SmsTemplateReq, SmsTemplates, Stats, StatsImported, StatsProcessed, StatsProcessedEmail, StatsProcessedSms, SystemEmailTemplate, SystemEmailTemplates, SystemNotification, SystemNotifications, SystemNotificationUser, SystemSmsTemplates, TemplateAndType, TriggerJobRequest, TriggerJobResponse, VerifyOtpCommsErrorRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes };
}
/** @returns {AppProvider} */
declare function AppProvider(): AppProvider;
type AppProvider = {
    __v?: number;
    _id?: string;
    application?: string;
    created_at?: string;
    email?: AppProviderRes;
    sms?: AppProviderRes;
    updated_at?: string;
    voice?: AppProviderResVoice;
};
/** @returns {AppProviderReq} */
declare function AppProviderReq(): AppProviderReq;
type AppProviderReq = {
    email?: AppProviderRes;
    sms?: AppProviderRes;
    voice?: AppProviderResVoice;
};
/** @returns {AppProviderRes} */
declare function AppProviderRes(): AppProviderRes;
type AppProviderRes = {
    otp?: AppProviderResObj;
    promotional?: AppProviderResObj;
    transaction?: AppProviderResObj;
};
/** @returns {AppProviderResObj} */
declare function AppProviderResObj(): AppProviderResObj;
type AppProviderResObj = {
    provider?: string;
};
/** @returns {AppProviderResVoice} */
declare function AppProviderResVoice(): AppProviderResVoice;
type AppProviderResVoice = {
    otp?: AppProviderResObj;
    transaction?: AppProviderResObj;
};
/** @returns {Audience} */
declare function Audience(): Audience;
type Audience = {
    __v?: number;
    _id?: string;
    application?: string;
    created_at?: string;
    description?: string;
    file_url?: string;
    headers?: string[];
    is_active?: boolean;
    name?: string;
    records_count?: number;
    slug?: string;
    tags?: string[];
    type?: string;
    updated_at?: string;
};
/** @returns {AudienceReq} */
declare function AudienceReq(): AudienceReq;
type AudienceReq = {
    description?: string;
    file_url?: string;
    headers?: string[];
    name?: string;
    records_count?: number;
    tags?: string[];
    type?: string;
};
/** @returns {Audiences} */
declare function Audiences(): Audiences;
type Audiences = {
    items?: Audience[];
    page?: Page;
};
/** @returns {BadRequestSchema} */
declare function BadRequestSchema(): BadRequestSchema;
type BadRequestSchema = {
    /**
     * - Failure message.
     */
    message?: string;
    /**
     * - Response status.
     */
    status?: string;
};
/** @returns {Campaign} */
declare function Campaign(): Campaign;
type Campaign = {
    __v?: number;
    _id?: string;
    application?: string;
    created_at?: string;
    datasource?: string;
    description?: string;
    email?: CampaignEmail;
    is_active?: boolean;
    name?: string;
    recipient_headers?: RecipientHeaders;
    slug?: string;
    tags?: any[];
    type?: string;
    updated_at?: string;
};
/** @returns {CampaignEmail} */
declare function CampaignEmail(): CampaignEmail;
type CampaignEmail = {
    provider?: CampignEmailProvider;
    template?: CampaignEmailTemplate;
};
/** @returns {CampaignEmailTemplate} */
declare function CampaignEmailTemplate(): CampaignEmailTemplate;
type CampaignEmailTemplate = {
    key?: string;
    value?: string;
};
/** @returns {CampaignReq} */
declare function CampaignReq(): CampaignReq;
type CampaignReq = {
    application?: string;
    description?: string;
    file_url?: string;
    headers?: string[];
    is_active?: boolean;
    name?: string;
    records_count?: number;
    tags?: string[];
    type?: string;
};
/** @returns {Campaigns} */
declare function Campaigns(): Campaigns;
type Campaigns = {
    items?: Campaign[];
    page?: Page;
};
/** @returns {CampignEmailProvider} */
declare function CampignEmailProvider(): CampignEmailProvider;
type CampignEmailProvider = {
    _id?: string;
    from_email?: string;
    from_name?: string;
};
/** @returns {DefaultSmsProviders} */
declare function DefaultSmsProviders(): DefaultSmsProviders;
type DefaultSmsProviders = {
    _id?: string;
    is_default?: boolean;
    name?: string;
};
/** @returns {DummyDatasources} */
declare function DummyDatasources(): DummyDatasources;
type DummyDatasources = {
    id?: number;
    name?: string;
};
/** @returns {DummyDatasourcesMeta} */
declare function DummyDatasourcesMeta(): DummyDatasourcesMeta;
type DummyDatasourcesMeta = {
    data?: DummyDatasourcesMetaObj;
    id?: number;
};
/** @returns {DummyDatasourcesMetaObj} */
declare function DummyDatasourcesMetaObj(): DummyDatasourcesMetaObj;
type DummyDatasourcesMetaObj = {
    b?: number;
};
/** @returns {EmailProvider} */
declare function EmailProvider(): EmailProvider;
type EmailProvider = {
    __v?: number;
    _id?: string;
    api_key?: string;
    application?: string;
    created_at?: string;
    description?: string;
    from_address?: EmailProviderReqFrom[];
    name?: string;
    provider?: string;
    slug?: string;
    type?: string;
    updated_at?: string;
};
/** @returns {EmailProviderReq} */
declare function EmailProviderReq(): EmailProviderReq;
type EmailProviderReq = {
    api_key?: string;
    description?: string;
    from_address?: EmailProviderReqFrom[];
    name?: string;
    provider?: string;
    type?: string;
};
/** @returns {EmailProviderReqFrom} */
declare function EmailProviderReqFrom(): EmailProviderReqFrom;
type EmailProviderReqFrom = {
    email?: string;
    is_default?: boolean;
    name?: string;
};
/** @returns {EmailProviders} */
declare function EmailProviders(): EmailProviders;
type EmailProviders = {
    items?: EmailProvider[];
    page?: Page;
};
/** @returns {EmailTemplate} */
declare function EmailTemplate(): EmailTemplate;
type EmailTemplate = {
    __v?: number;
    _id?: string;
    application?: string;
    attachments?: number[];
    category?: string;
    created_at?: string;
    description?: string;
    editor_meta?: string;
    editor_type?: string;
    from_name?: string;
    headers?: EmailTemplateHeaders[];
    html?: TemplateAndType;
    is_internal?: boolean;
    is_system?: boolean;
    name?: string;
    priority?: string;
    published?: boolean;
    reply_to?: string;
    slug?: string;
    static_bcc?: string[];
    static_cc?: string[];
    static_to?: string[];
    subject?: TemplateAndType;
    tags?: string[];
    template_variables?: any;
    text?: TemplateAndType;
    updated_at?: string;
    url_shorten?: EnabledObj;
};
/** @returns {EmailTemplateHeaders} */
declare function EmailTemplateHeaders(): EmailTemplateHeaders;
type EmailTemplateHeaders = {
    key?: string;
    value?: string;
};
/** @returns {EmailTemplateKeys} */
declare function EmailTemplateKeys(): EmailTemplateKeys;
type EmailTemplateKeys = {
    bcc?: string;
    cc?: string;
    to?: string;
};
/** @returns {EmailTemplateReq} */
declare function EmailTemplateReq(): EmailTemplateReq;
type EmailTemplateReq = {
    attachments?: number[];
    description?: string;
    editor_meta?: string;
    editor_type?: string;
    from_name?: string;
    headers?: EmailTemplateHeaders[];
    html?: TemplateAndType;
    keys?: EmailTemplateKeys;
    name: string;
    priority?: string;
    published?: boolean;
    reply_to?: string;
    static_bcc?: string[];
    static_cc?: string[];
    static_to?: string[];
    subject?: TemplateAndType;
    tags?: string[];
    template_variables?: any;
    text?: TemplateAndType;
};
/** @returns {EmailTemplates} */
declare function EmailTemplates(): EmailTemplates;
type EmailTemplates = {
    items?: EmailTemplate[];
    page?: Page;
};
/** @returns {EnabledObj} */
declare function EnabledObj(): EnabledObj;
type EnabledObj = {
    enabled?: boolean;
};
/** @returns {EngineRequest} */
declare function EngineRequest(): EngineRequest;
type EngineRequest = {
    meta?: MetaStructure;
    payload?: PayloadStructure;
};
/** @returns {EngineResponse} */
declare function EngineResponse(): EngineResponse;
type EngineResponse = {
    success?: boolean;
};
/** @returns {EventSubscription} */
declare function EventSubscription(): EventSubscription;
type EventSubscription = {
    __v?: number;
    _id?: string;
    application?: string;
    created_at?: string;
    event?: string;
    is_default?: boolean;
    slug?: string;
    template?: EventSubscriptionTemplate;
    updated_at?: string;
};
/** @returns {EventSubscriptions} */
declare function EventSubscriptions(): EventSubscriptions;
type EventSubscriptions = {
    items?: EventSubscription[];
    page?: Page;
};
/** @returns {EventSubscriptionTemplate} */
declare function EventSubscriptionTemplate(): EventSubscriptionTemplate;
type EventSubscriptionTemplate = {
    email?: EventSubscriptionTemplateEmail;
    sms?: EventSubscriptionTemplateSms;
};
/** @returns {EventSubscriptionTemplateEmail} */
declare function EventSubscriptionTemplateEmail(): EventSubscriptionTemplateEmail;
type EventSubscriptionTemplateEmail = {
    subscribed?: boolean;
    template?: string;
};
/** @returns {EventSubscriptionTemplateSms} */
declare function EventSubscriptionTemplateSms(): EventSubscriptionTemplateSms;
type EventSubscriptionTemplateSms = {
    subscribed?: boolean;
    template?: string;
};
/** @returns {GenericDelete} */
declare function GenericDelete(): GenericDelete;
type GenericDelete = {
    acknowledged?: boolean;
    affected?: number;
    message?: string;
    operation?: string;
};
/** @returns {GenericError} */
declare function GenericError(): GenericError;
type GenericError = {
    message?: Message;
    sentry?: string;
};
/** @returns {GetNRecordsCsvReq} */
declare function GetNRecordsCsvReq(): GetNRecordsCsvReq;
type GetNRecordsCsvReq = {
    count?: number;
    header?: boolean;
    url?: string;
};
/** @returns {GetNRecordsCsvRes} */
declare function GetNRecordsCsvRes(): GetNRecordsCsvRes;
type GetNRecordsCsvRes = {
    items?: GetNRecordsCsvResItems[];
};
/** @returns {GetNRecordsCsvResItems} */
declare function GetNRecordsCsvResItems(): GetNRecordsCsvResItems;
type GetNRecordsCsvResItems = {
    email?: string;
    firstname?: string;
    lastname?: string;
    orderid?: string;
    phone_number?: string;
};
/** @returns {GetStats} */
declare function GetStats(): GetStats;
type GetStats = {
    items?: Stats[];
};
/** @returns {GlobalProviders} */
declare function GlobalProviders(): GlobalProviders;
type GlobalProviders = {
    email?: GlobalProvidersResObj[];
    sms?: GlobalProvidersResObj[];
    voice?: GlobalProvidersResObj[];
};
/** @returns {GlobalProvidersResObj} */
declare function GlobalProvidersResObj(): GlobalProvidersResObj;
type GlobalProvidersResObj = {
    _id?: string;
    name?: string;
};
/** @returns {GlobalVariablesGetResponse} */
declare function GlobalVariablesGetResponse(): GlobalVariablesGetResponse;
type GlobalVariablesGetResponse = {
    editable?: any;
    read_only?: any;
};
/** @returns {GlobalVariablesPostResponse} */
declare function GlobalVariablesPostResponse(): GlobalVariablesPostResponse;
type GlobalVariablesPostResponse = {
    _id?: string;
    application?: string;
    category?: string;
    created_at?: string;
    global_variables?: any;
};
/** @returns {GlobalVariablesReq} */
declare function GlobalVariablesReq(): GlobalVariablesReq;
type GlobalVariablesReq = {
    global_variables?: any;
};
/** @returns {Job} */
declare function Job(): Job;
type Job = {
    __v?: number;
    _id?: string;
    application?: string;
    campaign?: string;
    completed?: boolean;
    created_at?: string;
    is_active?: boolean;
    updated_at?: string;
};
/** @returns {JobLog} */
declare function JobLog(): JobLog;
type JobLog = {
    __v?: number;
    _id?: string;
    campaign?: string;
    created_at?: string;
    imported?: any;
    job?: string;
    processed?: any;
    updated_at?: string;
};
/** @returns {JobLogs} */
declare function JobLogs(): JobLogs;
type JobLogs = {
    items?: JobLog[];
    page?: Page;
};
/** @returns {Jobs} */
declare function Jobs(): Jobs;
type Jobs = {
    items?: Job[];
    page?: Page;
};
/** @returns {Log} */
declare function Log(): Log;
type Log = {
    _id?: string;
    application?: string;
    created_at?: string;
    data?: any;
    email?: LogEmail;
    expire_at?: string;
    meta?: LogMeta;
    pushnotification?: LogPushnotification;
    service?: string;
    status?: string;
    step?: string;
};
/** @returns {LogEmail} */
declare function LogEmail(): LogEmail;
type LogEmail = {
    template?: string;
};
/** @returns {LogMeta} */
declare function LogMeta(): LogMeta;
type LogMeta = {
    identifier?: string;
    key?: string;
    offset?: string;
    partition?: string;
    topic?: string;
    type?: string;
};
/** @returns {LogPushnotification} */
declare function LogPushnotification(): LogPushnotification;
type LogPushnotification = {
    pushtokens?: string[];
};
/** @returns {Logs} */
declare function Logs(): Logs;
type Logs = {
    items?: Log[];
    page?: Page;
};
/** @returns {Message} */
declare function Message(): Message;
type Message = {
    info?: string;
    message?: string;
    operation?: string;
    success?: boolean;
};
/** @returns {metaObj} */
declare function metaObj(): metaObj;
type metaObj = {
    is_system?: boolean;
    template?: string;
    type?: string;
};
/** @returns {MetaStructure} */
declare function MetaStructure(): MetaStructure;
type MetaStructure = {
    action?: string;
    job_type?: string;
    timestamp?: string;
    trace?: string;
};
/** @returns {NotFound} */
declare function NotFound(): NotFound;
type NotFound = {
    /**
     * - Failure message.
     */
    message?: string;
};
/** @returns {Notification} */
declare function Notification(): Notification;
type Notification = {
    body?: string;
    click_action?: string;
    deeplink?: string;
    icon?: string;
    subtitle?: string;
    title?: string;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size?: number;
    type: string;
};
/** @returns {PayloadEmailProviderStructure} */
declare function PayloadEmailProviderStructure(): PayloadEmailProviderStructure;
type PayloadEmailProviderStructure = {
    _id?: string;
};
/** @returns {PayloadEmailStructure} */
declare function PayloadEmailStructure(): PayloadEmailStructure;
type PayloadEmailStructure = {
    provider?: PayloadEmailProviderStructure;
    template?: PayloadEmailTemplateStructure;
};
/** @returns {PayloadEmailTemplateStructure} */
declare function PayloadEmailTemplateStructure(): PayloadEmailTemplateStructure;
type PayloadEmailTemplateStructure = {
    key?: string;
    value?: any;
};
/** @returns {PayloadSmsProviderStructure} */
declare function PayloadSmsProviderStructure(): PayloadSmsProviderStructure;
type PayloadSmsProviderStructure = {
    _id?: string;
};
/** @returns {PayloadSmsStructure} */
declare function PayloadSmsStructure(): PayloadSmsStructure;
type PayloadSmsStructure = {
    provider?: PayloadSmsProviderStructure;
    template?: PayloadSmsTemplateStructure;
};
/** @returns {PayloadSmsTemplateStructure} */
declare function PayloadSmsTemplateStructure(): PayloadSmsTemplateStructure;
type PayloadSmsTemplateStructure = {
    key?: string;
    value?: any;
};
/** @returns {PayloadStructure} */
declare function PayloadStructure(): PayloadStructure;
type PayloadStructure = {
    application?: string;
    data?: any[];
    email?: PayloadEmailStructure;
    sms?: PayloadSmsStructure;
};
/** @returns {RecipientHeaders} */
declare function RecipientHeaders(): RecipientHeaders;
type RecipientHeaders = {
    email?: string;
};
/** @returns {SendOtpCommsReq} */
declare function SendOtpCommsReq(): SendOtpCommsReq;
type SendOtpCommsReq = {
    data?: SendOtpCommsReqData;
    email?: SendOtpCommsReqEmail;
    sms?: SendOtpCommsReqSms;
};
/** @returns {SendOtpCommsReqData} */
declare function SendOtpCommsReqData(): SendOtpCommsReqData;
type SendOtpCommsReqData = {
    country_code?: string;
    mobile?: string;
    send_same_otp_to_channel?: boolean;
    to?: string;
};
/** @returns {SendOtpCommsReqEmail} */
declare function SendOtpCommsReqEmail(): SendOtpCommsReqEmail;
type SendOtpCommsReqEmail = {
    expiry?: number;
    otp_length?: number;
    provider?: SendOtpEmailCommsProvider;
    template?: SendOtpEmailCommsTemplate;
};
/** @returns {SendOtpCommsReqSms} */
declare function SendOtpCommsReqSms(): SendOtpCommsReqSms;
type SendOtpCommsReqSms = {
    expiry?: number;
    otp_length?: number;
    provider?: SendOtpSmsCommsProvider;
    template?: SendOtpSmsCommsTemplate;
};
/** @returns {SendOtpCommsRes} */
declare function SendOtpCommsRes(): SendOtpCommsRes;
type SendOtpCommsRes = {
    email?: SendOtpCommsResEmail;
    sms?: SendOtpCommsResSms;
};
/** @returns {SendOtpCommsResEmail} */
declare function SendOtpCommsResEmail(): SendOtpCommsResEmail;
type SendOtpCommsResEmail = {
    message?: string;
    request_id?: string;
    resend_timer?: number;
    success?: boolean;
    to?: string;
};
/** @returns {SendOtpCommsResSms} */
declare function SendOtpCommsResSms(): SendOtpCommsResSms;
type SendOtpCommsResSms = {
    country_code?: string;
    message?: string;
    mobile?: string;
    request_id?: string;
    resend_timer?: number;
    success?: boolean;
};
/** @returns {SendOtpEmailCommsProvider} */
declare function SendOtpEmailCommsProvider(): SendOtpEmailCommsProvider;
type SendOtpEmailCommsProvider = {
    _id?: string;
    slug?: string;
};
/** @returns {SendOtpEmailCommsTemplate} */
declare function SendOtpEmailCommsTemplate(): SendOtpEmailCommsTemplate;
type SendOtpEmailCommsTemplate = {
    key?: string;
    value?: any;
};
/** @returns {SendOtpSmsCommsProvider} */
declare function SendOtpSmsCommsProvider(): SendOtpSmsCommsProvider;
type SendOtpSmsCommsProvider = {
    _id?: string;
    slug?: string;
};
/** @returns {SendOtpSmsCommsTemplate} */
declare function SendOtpSmsCommsTemplate(): SendOtpSmsCommsTemplate;
type SendOtpSmsCommsTemplate = {
    key?: string;
    value?: any;
};
/** @returns {SmsProvider} */
declare function SmsProvider(): SmsProvider;
type SmsProvider = {
    __v?: number;
    _id?: string;
    application?: string;
    authkey?: string;
    created_at?: string;
    description?: string;
    name?: string;
    provider?: string;
    rpt?: number;
    sender?: string;
    slug?: string;
    type?: string;
    updated_at?: string;
    username?: string;
};
/** @returns {SmsProviderReq} */
declare function SmsProviderReq(): SmsProviderReq;
type SmsProviderReq = {
    /**
     * - The api_key for the test.
     */
    api_key?: string;
    /**
     * - The apikey for the test.
     */
    apikey?: string;
    authkey?: string;
    description?: string;
    /**
     * - The entity ID for the test.
     */
    entity_id?: string;
    /**
     * - The entity ID for the test.
     */
    entityid?: string;
    /**
     * - The feed ID for the test.
     */
    feedid?: string;
    /**
     * - The host for the test.
     */
    host?: string;
    name?: string;
    /**
     * - Whether to override Do Not Disturb.
     */
    override_dnd?: boolean;
    /**
     * - The password for the test.
     */
    password?: string;
    /**
     * - The port for the test.
     */
    port?: number;
    provider?: string;
    sender?: string;
    /**
     * - The sender ID for the test.
     */
    sender_id?: string;
    /**
     * - The sender ID for the test.
     */
    senderid?: string;
    type?: string;
    username?: string;
    /**
     * - The version ID for the test.
     */
    version_id?: number;
};
/** @returns {SmsProviders} */
declare function SmsProviders(): SmsProviders;
type SmsProviders = {
    items?: SmsProvider[];
    page?: Page;
};
/** @returns {SmsTemplate} */
declare function SmsTemplate(): SmsTemplate;
type SmsTemplate = {
    __v?: number;
    _id?: string;
    application?: string;
    category?: string;
    created_at?: string;
    description?: string;
    is_internal?: boolean;
    is_system?: boolean;
    message?: SmsTemplateMessage;
    meta?: metaObj;
    name?: string;
    priority?: string;
    published?: boolean;
    slug?: string;
    tags?: string[];
    template_id?: string;
    template_variables?: any;
    updated_at?: string;
    url_shorten?: EnabledObj;
};
/** @returns {SmsTemplateMessage} */
declare function SmsTemplateMessage(): SmsTemplateMessage;
type SmsTemplateMessage = {
    template?: string;
    template_type?: string;
};
/** @returns {SmsTemplateReq} */
declare function SmsTemplateReq(): SmsTemplateReq;
type SmsTemplateReq = {
    description?: string;
    message?: SmsTemplateMessage;
    meta?: metaObj;
    name: string;
    priority?: string;
    published?: boolean;
    template_id?: string;
    template_variables?: any;
};
/** @returns {SmsTemplates} */
declare function SmsTemplates(): SmsTemplates;
type SmsTemplates = {
    items?: SmsTemplate[];
    page?: Page;
};
/** @returns {Stats} */
declare function Stats(): Stats;
type Stats = {
    _id?: string;
    imported?: any;
    processed?: any;
};
/** @returns {StatsImported} */
declare function StatsImported(): StatsImported;
type StatsImported = {
    count?: number;
};
/** @returns {StatsProcessed} */
declare function StatsProcessed(): StatsProcessed;
type StatsProcessed = {
    email?: StatsProcessedEmail;
    sms?: StatsProcessedSms;
};
/** @returns {StatsProcessedEmail} */
declare function StatsProcessedEmail(): StatsProcessedEmail;
type StatsProcessedEmail = {
    failed?: number;
    success?: number;
    suppressed?: number;
};
/** @returns {StatsProcessedSms} */
declare function StatsProcessedSms(): StatsProcessedSms;
type StatsProcessedSms = {
    failed?: number;
    success?: number;
    suppressed?: number;
};
/** @returns {SystemEmailTemplate} */
declare function SystemEmailTemplate(): SystemEmailTemplate;
type SystemEmailTemplate = {
    __v?: number;
    _id?: string;
    attachments?: number[];
    category?: string;
    created_at?: string;
    description?: string;
    headers?: EmailTemplateHeaders[];
    html?: TemplateAndType;
    is_internal?: boolean;
    is_system?: boolean;
    name?: string;
    priority?: string;
    published?: boolean;
    slug?: string;
    static_bcc?: string[];
    static_cc?: string[];
    static_to?: string[];
    subject?: TemplateAndType;
    tags?: string[];
    template_variables?: any;
    text?: TemplateAndType;
    updated_at?: string;
    url_shorten?: EnabledObj;
};
/** @returns {SystemEmailTemplates} */
declare function SystemEmailTemplates(): SystemEmailTemplates;
type SystemEmailTemplates = {
    items?: SystemEmailTemplate[];
};
/** @returns {SystemNotification} */
declare function SystemNotification(): SystemNotification;
type SystemNotification = {
    _id?: string;
    created_at?: string;
    group?: string;
    notification?: Notification;
    settings?: SystemNotificationUser;
    user?: SystemNotificationUser;
};
/** @returns {SystemNotifications} */
declare function SystemNotifications(): SystemNotifications;
type SystemNotifications = {
    items?: SystemNotification[];
    last_read_anchor?: number;
    page?: Page;
};
/** @returns {SystemNotificationUser} */
declare function SystemNotificationUser(): SystemNotificationUser;
type SystemNotificationUser = {
    type?: string;
    value?: string;
};
/** @returns {SystemSmsTemplates} */
declare function SystemSmsTemplates(): SystemSmsTemplates;
type SystemSmsTemplates = {
    __v?: number;
    _id?: string;
    category?: string;
    created_at?: string;
    description?: string;
    is_internal?: boolean;
    is_system?: boolean;
    message?: SmsTemplateMessage;
    name?: string;
    priority?: string;
    published?: boolean;
    slug?: string;
    tags?: string[];
    template_id?: string;
    template_variables?: any;
    updated_at?: string;
    url_shorten?: EnabledObj;
};
/** @returns {TemplateAndType} */
declare function TemplateAndType(): TemplateAndType;
type TemplateAndType = {
    template?: string;
    template_type?: string;
};
/** @returns {TriggerJobRequest} */
declare function TriggerJobRequest(): TriggerJobRequest;
type TriggerJobRequest = {
    job_id?: string;
};
/** @returns {TriggerJobResponse} */
declare function TriggerJobResponse(): TriggerJobResponse;
type TriggerJobResponse = {
    status?: number;
};
/** @returns {VerifyOtpCommsErrorRes} */
declare function VerifyOtpCommsErrorRes(): VerifyOtpCommsErrorRes;
type VerifyOtpCommsErrorRes = {
    message?: string;
    success?: boolean;
};
/** @returns {VerifyOtpCommsReq} */
declare function VerifyOtpCommsReq(): VerifyOtpCommsReq;
type VerifyOtpCommsReq = {
    otp?: string;
    request_id?: string;
};
/** @returns {VerifyOtpCommsSuccessRes} */
declare function VerifyOtpCommsSuccessRes(): VerifyOtpCommsSuccessRes;
type VerifyOtpCommsSuccessRes = {
    country_code?: string;
    message?: string;
    mobile?: string;
    success?: boolean;
};
