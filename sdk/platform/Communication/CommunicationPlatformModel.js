const Joi = require("joi");

/**
 * @typedef AppProvidersGlobalProviderRequestObjProvider
 * @property {string} [provider]
 */

/**
 * @typedef AppProvidersGlobalProviderRequestObj
 * @property {AppProvidersGlobalProviderRequestObjProvider} [transaction]
 * @property {AppProvidersGlobalProviderRequestObjProvider} [otp]
 */

/**
 * @typedef AppProvidersGlobalProviderReq
 * @property {AppProvidersGlobalProviderRequestObj} [email]
 * @property {AppProvidersGlobalProviderRequestObj} [sms]
 */

/**
 * @typedef UpdateAppProvidersGlobalProviderResEmailSmsObj
 * @property {string} [default_provider]
 * @property {string} [otp_provider]
 */

/**
 * @typedef UpdateAppProvidersGlobalProviderRes
 * @property {UpdateAppProvidersGlobalProviderResEmailSmsObj} [email]
 * @property {UpdateAppProvidersGlobalProviderResEmailSmsObj} [sms]
 * @property {string} [_id]
 * @property {string} [slug]
 */

/**
 * @typedef DefaultEmailProvidersFromAddresses
 * @property {string} [name]
 * @property {string} [email]
 * @property {boolean} [is_default]
 */

/**
 * @typedef DefaultEmailProviders
 * @property {string} [_id]
 * @property {DefaultEmailProvidersFromAddresses[]} [from_address]
 * @property {string} [name]
 * @property {boolean} [is_default]
 */

/**
 * @typedef PushtokenReq
 * @property {string} [action]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 * @property {string} [type]
 */

/**
 * @typedef PushtokenRes
 * @property {string} [_id]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 * @property {string} [type]
 * @property {string} [platform]
 * @property {string} [application_id]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [expired_at]
 */

/**
 * @typedef SendInstantRes
 * @property {boolean} [success]
 * @property {string} [provider]
 * @property {boolean} [response]
 */

/**
 * @typedef MetaStructure
 * @property {string} [job_type]
 * @property {string} [action]
 * @property {string} [trace]
 * @property {string} [timestamp]
 */

/**
 * @typedef PayloadSmsTemplateStructure
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef PayloadSmsProviderStructure
 * @property {string} [slug]
 */

/**
 * @typedef PayloadEmailTemplateStructure
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef PayloadEmailProviderStructure
 * @property {string} [slug]
 */

/**
 * @typedef PayloadEmailStructure
 * @property {PayloadEmailTemplateStructure} [template]
 * @property {PayloadEmailProviderStructure} [provider]
 */

/**
 * @typedef PayloadSmsStructure
 * @property {PayloadSmsTemplateStructure} [template]
 * @property {PayloadSmsProviderStructure} [provider]
 */

/**
 * @typedef SendSyncData
 * @property {string} [phone_number]
 * @property {string} [country_code]
 * @property {string} [to]
 */

/**
 * @typedef SendSyncReq
 * @property {SendSyncData[]} [data]
 * @property {PayloadEmailStructure} [email]
 * @property {PayloadSmsStructure} [sms]
 */

/**
 * @typedef EngineReq
 * @property {SendSyncReq} [payload]
 * @property {MetaStructure} [meta]
 */

/**
 * @typedef EngineRes
 * @property {boolean} [success]
 */

/**
 * @typedef EventSubscriptionsBulkUpdateReq
 * @property {SubscriptionsObject[]} [subscriptions]
 */

/**
 * @typedef EventSubscriptionsBulkUpdateRes
 * @property {EventSubscriptionTemplate} [template]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [event]
 * @property {string} [slug]
 * @property {string} [category]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef SubscriptionsObjectReq
 * @property {string} [event]
 * @property {string} [slug]
 * @property {TemplateObject} [template]
 */

/**
 * @typedef SubscriptionsObject
 * @property {string} [_id] - Subscription ID
 * @property {string} [event]
 * @property {string} [slug]
 * @property {TemplateObject} [template]
 */

/**
 * @typedef TemplateObject
 * @property {CommunicationTemplate} [sms]
 * @property {CommunicationTemplate} [email]
 * @property {CommunicationTemplate} [pushnotification]
 */

/**
 * @typedef CommunicationTemplate
 * @property {boolean} [subscribed] - Whether the user is subscribed or not
 * @property {string} [template] - Template ID
 */

/**
 * @typedef AppProvider
 * @property {AppProviderRes} [email]
 * @property {AppProviderRes} [sms]
 * @property {AppProviderResVoice} [voice]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef AppProviderRes
 * @property {AppProviderResObj} [transaction]
 * @property {AppProviderResObj} [promotional]
 * @property {AppProviderResObj} [otp]
 */

/**
 * @typedef AppProviderResVoice
 * @property {AppProviderResObj} [transaction]
 * @property {AppProviderResObj} [otp]
 */

/**
 * @typedef AppProviderResObj
 * @property {string} [provider]
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
 * @typedef AppProviderReq
 * @property {AppProviderRes} [email]
 * @property {AppProviderRes} [sms]
 * @property {AppProviderResVoice} [voice]
 */

/**
 * @typedef StatsImported
 * @property {number} [count]
 */

/**
 * @typedef StatsProcessedEmail
 * @property {number} [success]
 * @property {number} [failed]
 * @property {number} [suppressed]
 */

/**
 * @typedef StatsProcessedSms
 * @property {number} [success]
 * @property {number} [failed]
 * @property {number} [suppressed]
 */

/**
 * @typedef StatsProcessed
 * @property {StatsProcessedEmail} [email]
 * @property {StatsProcessedSms} [sms]
 */

/**
 * @typedef Stats
 * @property {string} [_id]
 * @property {StatsImported} [imported]
 * @property {StatsProcessed} [processed]
 */

/**
 * @typedef GetStats
 * @property {Stats[]} [items]
 */

/**
 * @typedef CampaignReq
 * @property {RecipientHeaders} [recipient_headers]
 * @property {CampaignEmail} [email]
 * @property {string} [datasource]
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 */

/**
 * @typedef RecipientHeaders
 * @property {string} [email]
 */

/**
 * @typedef CampaignEmailTemplate
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef CampignEmailProvider
 * @property {string} [_id]
 * @property {string} [from_name]
 * @property {string} [from_email]
 */

/**
 * @typedef CampaignEmail
 * @property {CampaignEmailTemplate} [template]
 * @property {CampignEmailProvider} [provider]
 */

/**
 * @typedef Campaign
 * @property {RecipientHeaders} [recipient_headers]
 * @property {CampaignEmail} [email]
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [datasource]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef Campaigns
 * @property {Campaign[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AudienceReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string[]} [headers]
 */

/**
 * @typedef Audience
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [records_count]
 * @property {string} [type]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {string} [file_url]
 * @property {boolean} [is_active]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef Audiences
 * @property {Audience[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef GetNRecordsCsvReq
 * @property {string} [url]
 * @property {boolean} [header]
 * @property {number} [count]
 */

/**
 * @typedef GetNRecordsCsvResItems
 * @property {string} [phone_number]
 * @property {string} [email]
 * @property {string} [firstname]
 * @property {string} [lastname]
 * @property {string} [orderid]
 */

/**
 * @typedef GetNRecordsCsvRes
 * @property {GetNRecordsCsvResItems[]} [items]
 */

/**
 * @typedef DummyDatasources
 * @property {number} [id]
 * @property {string} [name]
 */

/**
 * @typedef DummyDatasourcesMeta
 * @property {number} [id]
 * @property {DummyDatasourcesMetaObj} [data]
 */

/**
 * @typedef DummyDatasourcesMetaObj
 * @property {number} [b]
 */

/**
 * @typedef EmailProviderReqFrom
 * @property {string} [name]
 * @property {string} [email]
 * @property {boolean} [is_default]
 */

/**
 * @typedef EmailProviderReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [api_key]
 * @property {string} [type]
 * @property {string} [provider]
 * @property {EmailProviderReqFrom[]} [from_address]
 */

/**
 * @typedef EmailProvider
 * @property {string} [type]
 * @property {string} [provider]
 * @property {EmailProviderReqFrom[]} [from_address]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [api_key]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef EmailProviders
 * @property {EmailProvider[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef EmailTemplateKeys
 * @property {string} [to]
 * @property {string} [cc]
 * @property {string} [bcc]
 */

/**
 * @typedef EmailTemplateHeaders
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef EmailTemplateReq
 * @property {string} name
 * @property {string} [description]
 * @property {string} [from_name]
 * @property {string[]} [static_to]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_bcc]
 * @property {string} [reply_to]
 * @property {string} [priority]
 * @property {string[]} [tags]
 * @property {Object} [template_variables]
 * @property {boolean} [published]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {string} [editor_type]
 * @property {string} [editor_meta]
 * @property {number[]} [attachments]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {EmailTemplateKeys} [keys]
 * @property {TemplateAndType} [text]
 */

/**
 * @typedef TemplateAndType
 * @property {string} [template_type]
 * @property {string} [template]
 */

/**
 * @typedef TemplateKeys
 * @property {string} [to]
 * @property {string} [cc]
 * @property {string} [bcc]
 */

/**
 * @typedef EmailTemplate
 * @property {string} [application]
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [editor_type]
 * @property {string} [editor_meta]
 * @property {string[]} [static_to]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_bcc]
 * @property {string} [reply_to]
 * @property {string[]} [tags]
 * @property {TemplateAndType} [subject]
 * @property {TemplateKeys} [keys]
 * @property {TemplateAndType} [html]
 * @property {EnabledObj} [url_shorten]
 * @property {string} [priority]
 * @property {Object} [template_variables]
 * @property {boolean} [published]
 * @property {string} [category]
 * @property {string} [_id]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {number[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 * @property {string} [from_name]
 * @property {TemplateAndType} [text]
 */

/**
 * @typedef SystemEmailTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string[]} [static_to]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_bcc]
 * @property {string[]} [tags]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {EnabledObj} [url_shorten]
 * @property {string} [priority]
 * @property {Object} [template_variables]
 * @property {boolean} [published]
 * @property {string} [category]
 * @property {string} [_id]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {number[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 * @property {TemplateAndType} [text]
 */

/**
 * @typedef EmailTemplates
 * @property {EmailTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SubscribedSmsTemplates
 * @property {SmsTemplates[]} [items]
 */

/**
 * @typedef SubscribedEmailTemplates
 * @property {EmailTemplate[]} [items]
 */

/**
 * @typedef EventSubscriptionTemplateSms
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */

/**
 * @typedef EventSubscriptionTemplateEmail
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */

/**
 * @typedef EventSubscriptionTemplatePushnotification
 * @property {boolean} [subscribed]
 */

/**
 * @typedef EventSubscriptionTemplate
 * @property {EventSubscriptionTemplateSms} [sms]
 * @property {EventSubscriptionTemplateEmail} [email]
 * @property {EventSubscriptionTemplatePushnotification} [pushnotification]
 */

/**
 * @typedef EventSubscription
 * @property {EventSubscriptionTemplate} [template]
 * @property {boolean} [is_default]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [category]
 * @property {Object} [event]
 * @property {string} [slug]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef EventSubscriptionTemplateSmsObj
 * @property {boolean} [subscribed]
 * @property {Object} [template]
 */

/**
 * @typedef EventSubscriptionTemplateEmailObj
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */

/**
 * @typedef EventSubscriptionTemplateObj
 * @property {EventSubscriptionTemplateSmsObj} [sms]
 * @property {EventSubscriptionTemplateEmailObj} [email]
 * @property {EventSubscriptionTemplatePushnotification} [pushnotification]
 */

/**
 * @typedef EventSubscriptionObj
 * @property {EventSubscriptionTemplateObj} [template]
 * @property {boolean} [is_default]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [category]
 * @property {Object} [event]
 * @property {string} [slug]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef EventSubscriptions
 * @property {EventSubscriptionObj[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef TriggerJobRes
 * @property {number} [status]
 */

/**
 * @typedef TriggerJobReq
 * @property {string} [job_id]
 */

/**
 * @typedef GlobalVariablesGetRes
 * @property {Object} [read_only]
 * @property {Object} [editable]
 */

/**
 * @typedef GlobalVariablesPostRes
 * @property {string} [_id]
 * @property {string} [category]
 * @property {string} [application]
 * @property {Object} [global_variables]
 * @property {string} [created_at]
 */

/**
 * @typedef GlobalVariablesReq
 * @property {Object} [global_variables]
 */

/**
 * @typedef Job
 * @property {boolean} [completed]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [campaign]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef Jobs
 * @property {Job[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CreateJobsRes
 * @property {string} [application]
 * @property {string} [campaign]
 * @property {boolean} [completed]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef CreateJobsReq
 * @property {string} [campaign]
 */

/**
 * @typedef JobLog
 * @property {StatsImported} [imported]
 * @property {StatsProcessed} [processed]
 * @property {string} [_id]
 * @property {string} [job]
 * @property {string} [campaign]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef JobLogs
 * @property {JobLog[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef LogEmail
 * @property {string} [template]
 * @property {string} [provider]
 * @property {string} [to]
 */

/**
 * @typedef LogSms
 * @property {string} [template]
 * @property {string} [provider]
 * @property {string} [phone_number]
 * @property {string} [country_code]
 */

/**
 * @typedef LogPushnotification
 * @property {string[]} [pushtokens]
 */

/**
 * @typedef LogMeta
 * @property {string} [identifier]
 * @property {string} [type]
 * @property {string} [job]
 * @property {string} [campaign]
 * @property {string} [key]
 * @property {string} [offset]
 * @property {string} [partition]
 * @property {string} [topic]
 */

/**
 * @typedef Log
 * @property {LogEmail} [email]
 * @property {LogSms} [sms]
 * @property {LogPushnotification} [pushnotification]
 * @property {string} [_id]
 * @property {string} [pod]
 * @property {string} [service]
 * @property {string} [step]
 * @property {string} [source]
 * @property {string} [status]
 * @property {string} [expire_at]
 * @property {string} [created_at]
 * @property {LogMeta} [meta]
 * @property {string} [application]
 */

/**
 * @typedef Logs
 * @property {Log[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SendOtpSmsCommsProvider
 * @property {string} [slug]
 * @property {string} [_id]
 */

/**
 * @typedef SendOtpEmailCommsProvider
 * @property {string} [slug]
 * @property {string} [_id]
 */

/**
 * @typedef SendOtpEmailCommsTemplate
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef SendOtpCommsReqData
 * @property {boolean} [send_same_otp_to_channel]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [to]
 */

/**
 * @typedef SendOtpCommsReqSms
 * @property {number} [otp_length]
 * @property {number} [expiry]
 * @property {Object} [template]
 * @property {SendOtpSmsCommsProvider} [provider]
 */

/**
 * @typedef SendOtpCommsReqEmail
 * @property {number} [otp_length]
 * @property {number} [expiry]
 * @property {SendOtpEmailCommsTemplate} [template]
 * @property {SendOtpEmailCommsProvider} [provider]
 */

/**
 * @typedef SendOtpCommsResSms
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {number} [resend_timer]
 */

/**
 * @typedef SendOtpCommsResEmail
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [to]
 * @property {number} [resend_timer]
 */

/**
 * @typedef SendOtpCommsReq
 * @property {SendOtpCommsReqData} [data]
 * @property {SendOtpCommsReqSms} [sms]
 * @property {SendOtpCommsReqEmail} [email]
 */

/**
 * @typedef SendOtpCommsRes
 * @property {SendOtpCommsResSms} [sms]
 * @property {SendOtpCommsResEmail} [email]
 */

/**
 * @typedef VerifyOtpCommsReq
 * @property {string} [request_id]
 * @property {string} [otp]
 */

/**
 * @typedef VerifyOtpCommsSuccessRes
 * @property {boolean} [success]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [message]
 * @property {string} [email]
 */

/**
 * @typedef SmsProviderReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [sender]
 * @property {string} [username]
 * @property {string} [authkey]
 * @property {string} [type]
 * @property {string} [provider]
 * @property {string} [password] - The password for the test.
 * @property {string} [senderid] - The sender ID for the test.
 * @property {string} [feedid] - The feed ID for the test.
 * @property {string} [entityid] - The entity ID for the test.
 * @property {boolean} [override_dnd] - Whether to override Do Not Disturb.
 * @property {string} [host] - The host for the test.
 * @property {number} [port] - The port for the test.
 * @property {string} [entity_id] - The entity ID for the test.
 * @property {string} [apikey] - The apikey for the test.
 * @property {number} [version_id] - The version ID for the test.
 * @property {string} [sender_id] - The sender ID for the test.
 * @property {string} [api_key] - The api_key for the test.
 */

/**
 * @typedef SmsProvider
 * @property {number} [rpt]
 * @property {string} [type]
 * @property {string} [provider]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [sender]
 * @property {string} [username]
 * @property {string} [authkey]
 * @property {string} [entity_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef SmsProviders
 * @property {SmsProvider[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef DefaultSmsProviders
 * @property {string} [_id]
 * @property {string} [name]
 * @property {boolean} [is_default]
 */

/**
 * @typedef SmsTemplateMessage
 * @property {string} [template_type]
 * @property {string} [template]
 */

/**
 * @typedef SmsTemplates
 * @property {SmsTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SmsTemplate
 * @property {EnabledObj} [url_shorten]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {metaObj} [meta]
 * @property {string} [name]
 * @property {string} [description]
 * @property {SmsTemplateMessage} [message]
 * @property {string} [priority]
 * @property {string[]} [tags]
 * @property {Object} [template_variables]
 * @property {string} [template_id]
 * @property {boolean} [published]
 * @property {string} [category]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef SystemSmsTemplates
 * @property {EnabledObj} [url_shorten]
 * @property {string} [_id]
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [name]
 * @property {string} [description]
 * @property {SmsTemplateMessage} [message]
 * @property {string} [priority]
 * @property {string[]} [tags]
 * @property {Object} [template_variables]
 * @property {string} [template_id]
 * @property {boolean} [published]
 * @property {string} [category]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef metaObj
 * @property {string} [type]
 * @property {boolean} [is_system]
 * @property {string} [template]
 */

/**
 * @typedef SmsTemplateReq
 * @property {string} name
 * @property {string} [description]
 * @property {string} [priority]
 * @property {string} [template_id]
 * @property {metaObj} [meta]
 * @property {Object} [template_variables]
 * @property {boolean} [published]
 * @property {SmsTemplateMessage} [message]
 */

/**
 * @typedef Notification
 * @property {string} [title]
 * @property {string} [body]
 * @property {string} [subtitle]
 * @property {string} [icon]
 * @property {string} [deeplink]
 * @property {string} [click_action]
 */

/**
 * @typedef SystemNotificationSetting
 * @property {boolean} [sound]
 * @property {string} [priority]
 * @property {string} [time_to_live]
 */

/**
 * @typedef SystemNotificationUser
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef SystemNotification
 * @property {Notification} [notification]
 * @property {SystemNotificationUser} [user]
 * @property {SystemNotificationSetting} [settings]
 * @property {string} [_id]
 * @property {string} [group]
 * @property {string} [created_at]
 */

/**
 * @typedef SystemNotifications
 * @property {SystemNotification[]} [items]
 * @property {number} [last_read_anchor]
 * @property {Page} [page]
 */

/**
 * @typedef Page
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [total] - Total number of items.
 */

/**
 * @typedef BasicDelete
 * @property {boolean} [acknowledged]
 * @property {number} [deleted_count]
 */

/**
 * @typedef EnabledObj
 * @property {boolean} [enabled]
 */

/**
 * @typedef OtpConfigurationExpiryDuration
 * @property {number} time
 * @property {string} denomination
 */

/**
 * @typedef OtpConfigurationExpiry
 * @property {OtpConfigurationExpiryDuration} duration
 * @property {string} type
 */

/**
 * @typedef OtpConfigRateLimit
 * @property {number} [duration]
 * @property {number} [limit]
 */

/**
 * @typedef OtpConfiguration
 * @property {number} otp_length
 * @property {string} type
 * @property {OtpConfigurationExpiry} expiry
 * @property {OtpConfigRateLimit} rate_limit
 * @property {string} [application_id]
 * @property {string} [company_id]
 */

class CommunicationPlatformModel {
  /** @returns {AppProvidersGlobalProviderRequestObjProvider} */
  static AppProvidersGlobalProviderRequestObjProvider() {
    return Joi.object({
      provider: Joi.string().allow(""),
    });
  }

  /** @returns {AppProvidersGlobalProviderRequestObj} */
  static AppProvidersGlobalProviderRequestObj() {
    return Joi.object({
      transaction: CommunicationPlatformModel.AppProvidersGlobalProviderRequestObjProvider(),
      otp: CommunicationPlatformModel.AppProvidersGlobalProviderRequestObjProvider(),
    });
  }

  /** @returns {AppProvidersGlobalProviderReq} */
  static AppProvidersGlobalProviderReq() {
    return Joi.object({
      email: CommunicationPlatformModel.AppProvidersGlobalProviderRequestObj(),
      sms: CommunicationPlatformModel.AppProvidersGlobalProviderRequestObj(),
    });
  }

  /** @returns {UpdateAppProvidersGlobalProviderResEmailSmsObj} */
  static UpdateAppProvidersGlobalProviderResEmailSmsObj() {
    return Joi.object({
      default_provider: Joi.string().allow("").allow(null),
      otp_provider: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {UpdateAppProvidersGlobalProviderRes} */
  static UpdateAppProvidersGlobalProviderRes() {
    return Joi.object({
      email: CommunicationPlatformModel.UpdateAppProvidersGlobalProviderResEmailSmsObj(),
      sms: CommunicationPlatformModel.UpdateAppProvidersGlobalProviderResEmailSmsObj(),
      _id: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {DefaultEmailProvidersFromAddresses} */
  static DefaultEmailProvidersFromAddresses() {
    return Joi.object({
      name: Joi.string().allow(""),
      email: Joi.string().allow(""),
      is_default: Joi.boolean(),
    });
  }

  /** @returns {DefaultEmailProviders} */
  static DefaultEmailProviders() {
    return Joi.object({
      _id: Joi.string().allow(""),
      from_address: Joi.array().items(
        CommunicationPlatformModel.DefaultEmailProvidersFromAddresses()
      ),
      name: Joi.string().allow(""),
      is_default: Joi.boolean(),
    });
  }

  /** @returns {PushtokenReq} */
  static PushtokenReq() {
    return Joi.object({
      action: Joi.string().allow(""),
      bundle_identifier: Joi.string().allow(""),
      push_token: Joi.string().allow(""),
      unique_device_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {PushtokenRes} */
  static PushtokenRes() {
    return Joi.object({
      _id: Joi.string().allow(""),
      bundle_identifier: Joi.string().allow(""),
      push_token: Joi.string().allow(""),
      unique_device_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      expired_at: Joi.string().allow(""),
    });
  }

  /** @returns {SendInstantRes} */
  static SendInstantRes() {
    return Joi.object({
      success: Joi.boolean(),
      provider: Joi.string().allow("").allow(null),
      response: Joi.boolean().allow(null),
    });
  }

  /** @returns {MetaStructure} */
  static MetaStructure() {
    return Joi.object({
      job_type: Joi.string().allow(""),
      action: Joi.string().allow(""),
      trace: Joi.string().allow(""),
      timestamp: Joi.string().allow(""),
    });
  }

  /** @returns {PayloadSmsTemplateStructure} */
  static PayloadSmsTemplateStructure() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.any(),
    });
  }

  /** @returns {PayloadSmsProviderStructure} */
  static PayloadSmsProviderStructure() {
    return Joi.object({
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {PayloadEmailTemplateStructure} */
  static PayloadEmailTemplateStructure() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.any(),
    });
  }

  /** @returns {PayloadEmailProviderStructure} */
  static PayloadEmailProviderStructure() {
    return Joi.object({
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {PayloadEmailStructure} */
  static PayloadEmailStructure() {
    return Joi.object({
      template: CommunicationPlatformModel.PayloadEmailTemplateStructure(),
      provider: CommunicationPlatformModel.PayloadEmailProviderStructure(),
    });
  }

  /** @returns {PayloadSmsStructure} */
  static PayloadSmsStructure() {
    return Joi.object({
      template: CommunicationPlatformModel.PayloadSmsTemplateStructure(),
      provider: CommunicationPlatformModel.PayloadSmsProviderStructure(),
    });
  }

  /** @returns {SendSyncData} */
  static SendSyncData() {
    return Joi.object({
      phone_number: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      to: Joi.string().allow(""),
    });
  }

  /** @returns {SendSyncReq} */
  static SendSyncReq() {
    return Joi.object({
      data: Joi.array().items(CommunicationPlatformModel.SendSyncData()),
      email: CommunicationPlatformModel.PayloadEmailStructure(),
      sms: CommunicationPlatformModel.PayloadSmsStructure(),
    });
  }

  /** @returns {EngineReq} */
  static EngineReq() {
    return Joi.object({
      payload: CommunicationPlatformModel.SendSyncReq(),
      meta: CommunicationPlatformModel.MetaStructure(),
    });
  }

  /** @returns {EngineRes} */
  static EngineRes() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {EventSubscriptionsBulkUpdateReq} */
  static EventSubscriptionsBulkUpdateReq() {
    return Joi.object({
      subscriptions: Joi.array().items(
        CommunicationPlatformModel.SubscriptionsObject()
      ),
    });
  }

  /** @returns {EventSubscriptionsBulkUpdateRes} */
  static EventSubscriptionsBulkUpdateRes() {
    return Joi.object({
      template: CommunicationPlatformModel.EventSubscriptionTemplate(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      event: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      category: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {SubscriptionsObjectReq} */
  static SubscriptionsObjectReq() {
    return Joi.object({
      event: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      template: CommunicationPlatformModel.TemplateObject(),
    });
  }

  /** @returns {SubscriptionsObject} */
  static SubscriptionsObject() {
    return Joi.object({
      _id: Joi.string().allow(""),
      event: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      template: CommunicationPlatformModel.TemplateObject(),
    });
  }

  /** @returns {TemplateObject} */
  static TemplateObject() {
    return Joi.object({
      sms: CommunicationPlatformModel.CommunicationTemplate(),
      email: CommunicationPlatformModel.CommunicationTemplate(),
      pushnotification: CommunicationPlatformModel.CommunicationTemplate(),
    });
  }

  /** @returns {CommunicationTemplate} */
  static CommunicationTemplate() {
    return Joi.object({
      subscribed: Joi.boolean(),
      template: Joi.string().allow(""),
    });
  }

  /** @returns {AppProvider} */
  static AppProvider() {
    return Joi.object({
      email: CommunicationPlatformModel.AppProviderRes(),
      sms: CommunicationPlatformModel.AppProviderRes(),
      voice: CommunicationPlatformModel.AppProviderResVoice(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {AppProviderRes} */
  static AppProviderRes() {
    return Joi.object({
      transaction: CommunicationPlatformModel.AppProviderResObj(),
      promotional: CommunicationPlatformModel.AppProviderResObj(),
      otp: CommunicationPlatformModel.AppProviderResObj(),
    });
  }

  /** @returns {AppProviderResVoice} */
  static AppProviderResVoice() {
    return Joi.object({
      transaction: CommunicationPlatformModel.AppProviderResObj(),
      otp: CommunicationPlatformModel.AppProviderResObj(),
    });
  }

  /** @returns {AppProviderResObj} */
  static AppProviderResObj() {
    return Joi.object({
      provider: Joi.string().allow(""),
    });
  }

  /** @returns {GlobalProviders} */
  static GlobalProviders() {
    return Joi.object({
      email: Joi.array().items(
        CommunicationPlatformModel.GlobalProvidersResObj()
      ),
      sms: Joi.array().items(
        CommunicationPlatformModel.GlobalProvidersResObj()
      ),
      voice: Joi.array().items(
        CommunicationPlatformModel.GlobalProvidersResObj()
      ),
    });
  }

  /** @returns {GlobalProvidersResObj} */
  static GlobalProvidersResObj() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {AppProviderReq} */
  static AppProviderReq() {
    return Joi.object({
      email: CommunicationPlatformModel.AppProviderRes(),
      sms: CommunicationPlatformModel.AppProviderRes(),
      voice: CommunicationPlatformModel.AppProviderResVoice(),
    });
  }

  /** @returns {StatsImported} */
  static StatsImported() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  /** @returns {StatsProcessedEmail} */
  static StatsProcessedEmail() {
    return Joi.object({
      success: Joi.number(),
      failed: Joi.number(),
      suppressed: Joi.number(),
    });
  }

  /** @returns {StatsProcessedSms} */
  static StatsProcessedSms() {
    return Joi.object({
      success: Joi.number(),
      failed: Joi.number(),
      suppressed: Joi.number(),
    });
  }

  /** @returns {StatsProcessed} */
  static StatsProcessed() {
    return Joi.object({
      email: CommunicationPlatformModel.StatsProcessedEmail(),
      sms: CommunicationPlatformModel.StatsProcessedSms(),
    });
  }

  /** @returns {Stats} */
  static Stats() {
    return Joi.object({
      _id: Joi.string().allow(""),
      imported: CommunicationPlatformModel.StatsImported(),
      processed: CommunicationPlatformModel.StatsProcessed(),
    });
  }

  /** @returns {GetStats} */
  static GetStats() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.Stats()),
    });
  }

  /** @returns {CampaignReq} */
  static CampaignReq() {
    return Joi.object({
      recipient_headers: CommunicationPlatformModel.RecipientHeaders(),
      email: CommunicationPlatformModel.CampaignEmail(),
      datasource: Joi.string().allow(""),
      description: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      headers: Joi.array().items(Joi.string().allow("")),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      file_url: Joi.string().allow(""),
      type: Joi.string().allow(""),
      records_count: Joi.number(),
      application: Joi.string().allow(""),
    });
  }

  /** @returns {RecipientHeaders} */
  static RecipientHeaders() {
    return Joi.object({
      email: Joi.string().allow(""),
    });
  }

  /** @returns {CampaignEmailTemplate} */
  static CampaignEmailTemplate() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {CampignEmailProvider} */
  static CampignEmailProvider() {
    return Joi.object({
      _id: Joi.string().allow(""),
      from_name: Joi.string().allow(""),
      from_email: Joi.string().allow(""),
    });
  }

  /** @returns {CampaignEmail} */
  static CampaignEmail() {
    return Joi.object({
      template: CommunicationPlatformModel.CampaignEmailTemplate(),
      provider: CommunicationPlatformModel.CampignEmailProvider(),
    });
  }

  /** @returns {Campaign} */
  static Campaign() {
    return Joi.object({
      recipient_headers: CommunicationPlatformModel.RecipientHeaders(),
      email: CommunicationPlatformModel.CampaignEmail(),
      description: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      is_active: Joi.boolean(),
      _id: Joi.string().allow(""),
      datasource: Joi.string().allow(""),
      type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {Campaigns} */
  static Campaigns() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.Campaign()),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {AudienceReq} */
  static AudienceReq() {
    return Joi.object({
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      file_url: Joi.string().allow(""),
      type: Joi.string().allow(""),
      records_count: Joi.number(),
      headers: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Audience} */
  static Audience() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      records_count: Joi.number(),
      type: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      headers: Joi.array().items(Joi.string().allow("")),
      file_url: Joi.string().allow(""),
      is_active: Joi.boolean(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {Audiences} */
  static Audiences() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.Audience()),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {GetNRecordsCsvReq} */
  static GetNRecordsCsvReq() {
    return Joi.object({
      url: Joi.string().allow(""),
      header: Joi.boolean(),
      count: Joi.number(),
    });
  }

  /** @returns {GetNRecordsCsvResItems} */
  static GetNRecordsCsvResItems() {
    return Joi.object({
      phone_number: Joi.string().allow(""),
      email: Joi.string().allow(""),
      firstname: Joi.string().allow(""),
      lastname: Joi.string().allow(""),
      orderid: Joi.string().allow(""),
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

  /** @returns {DummyDatasources} */
  static DummyDatasources() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {DummyDatasourcesMeta} */
  static DummyDatasourcesMeta() {
    return Joi.object({
      id: Joi.number(),
      data: CommunicationPlatformModel.DummyDatasourcesMetaObj(),
    });
  }

  /** @returns {DummyDatasourcesMetaObj} */
  static DummyDatasourcesMetaObj() {
    return Joi.object({
      b: Joi.number(),
    });
  }

  /** @returns {EmailProviderReqFrom} */
  static EmailProviderReqFrom() {
    return Joi.object({
      name: Joi.string().allow(""),
      email: Joi.string().allow(""),
      is_default: Joi.boolean(),
    });
  }

  /** @returns {EmailProviderReq} */
  static EmailProviderReq() {
    return Joi.object({
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      api_key: Joi.string().allow(""),
      type: Joi.string().allow(""),
      provider: Joi.string().allow(""),
      from_address: Joi.array().items(
        CommunicationPlatformModel.EmailProviderReqFrom()
      ),
    });
  }

  /** @returns {EmailProvider} */
  static EmailProvider() {
    return Joi.object({
      type: Joi.string().allow(""),
      provider: Joi.string().allow(""),
      from_address: Joi.array().items(
        CommunicationPlatformModel.EmailProviderReqFrom()
      ),
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      api_key: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {EmailProviders} */
  static EmailProviders() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.EmailProvider()),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {EmailTemplateKeys} */
  static EmailTemplateKeys() {
    return Joi.object({
      to: Joi.string().allow(""),
      cc: Joi.string().allow(""),
      bcc: Joi.string().allow(""),
    });
  }

  /** @returns {EmailTemplateHeaders} */
  static EmailTemplateHeaders() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {EmailTemplateReq} */
  static EmailTemplateReq() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      description: Joi.string().allow(""),
      from_name: Joi.string().allow(""),
      static_to: Joi.array().items(Joi.string().allow("")),
      static_cc: Joi.array().items(Joi.string().allow("")),
      static_bcc: Joi.array().items(Joi.string().allow("")),
      reply_to: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      template_variables: Joi.object().pattern(/\S/, Joi.any()),
      published: Joi.boolean(),
      subject: CommunicationPlatformModel.TemplateAndType(),
      html: CommunicationPlatformModel.TemplateAndType(),
      editor_type: Joi.string().allow(""),
      editor_meta: Joi.string().allow(""),
      attachments: Joi.array().items(Joi.number()),
      headers: Joi.array().items(
        CommunicationPlatformModel.EmailTemplateHeaders()
      ),
      keys: CommunicationPlatformModel.EmailTemplateKeys(),
      text: CommunicationPlatformModel.TemplateAndType(),
    });
  }

  /** @returns {TemplateAndType} */
  static TemplateAndType() {
    return Joi.object({
      template_type: Joi.string().allow(""),
      template: Joi.string().allow(""),
    });
  }

  /** @returns {TemplateKeys} */
  static TemplateKeys() {
    return Joi.object({
      to: Joi.string().allow(""),
      cc: Joi.string().allow(""),
      bcc: Joi.string().allow(""),
    });
  }

  /** @returns {EmailTemplate} */
  static EmailTemplate() {
    return Joi.object({
      application: Joi.string().allow(""),
      is_system: Joi.boolean(),
      is_internal: Joi.boolean(),
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      editor_type: Joi.string().allow(""),
      editor_meta: Joi.string().allow(""),
      static_to: Joi.array().items(Joi.string().allow("")),
      static_cc: Joi.array().items(Joi.string().allow("")),
      static_bcc: Joi.array().items(Joi.string().allow("")),
      reply_to: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      subject: CommunicationPlatformModel.TemplateAndType(),
      keys: CommunicationPlatformModel.TemplateKeys(),
      html: CommunicationPlatformModel.TemplateAndType(),
      url_shorten: CommunicationPlatformModel.EnabledObj(),
      priority: Joi.string().allow(""),
      template_variables: Joi.object().pattern(/\S/, Joi.any()),
      published: Joi.boolean(),
      category: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      headers: Joi.array().items(
        CommunicationPlatformModel.EmailTemplateHeaders()
      ),
      attachments: Joi.array().items(Joi.number()),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      __v: Joi.number(),
      from_name: Joi.string().allow(""),
      text: CommunicationPlatformModel.TemplateAndType(),
    });
  }

  /** @returns {SystemEmailTemplate} */
  static SystemEmailTemplate() {
    return Joi.object({
      is_system: Joi.boolean(),
      is_internal: Joi.boolean(),
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      static_to: Joi.array().items(Joi.string().allow("")),
      static_cc: Joi.array().items(Joi.string().allow("")),
      static_bcc: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      subject: CommunicationPlatformModel.TemplateAndType(),
      html: CommunicationPlatformModel.TemplateAndType(),
      url_shorten: CommunicationPlatformModel.EnabledObj(),
      priority: Joi.string().allow(""),
      template_variables: Joi.object().pattern(/\S/, Joi.any()),
      published: Joi.boolean(),
      category: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      headers: Joi.array().items(
        CommunicationPlatformModel.EmailTemplateHeaders()
      ),
      attachments: Joi.array().items(Joi.number()),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      __v: Joi.number(),
      text: CommunicationPlatformModel.TemplateAndType(),
    });
  }

  /** @returns {EmailTemplates} */
  static EmailTemplates() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.EmailTemplate()),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {SubscribedSmsTemplates} */
  static SubscribedSmsTemplates() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.SmsTemplates()),
    });
  }

  /** @returns {SubscribedEmailTemplates} */
  static SubscribedEmailTemplates() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.EmailTemplate()),
    });
  }

  /** @returns {EventSubscriptionTemplateSms} */
  static EventSubscriptionTemplateSms() {
    return Joi.object({
      subscribed: Joi.boolean(),
      template: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {EventSubscriptionTemplateEmail} */
  static EventSubscriptionTemplateEmail() {
    return Joi.object({
      subscribed: Joi.boolean(),
      template: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {EventSubscriptionTemplatePushnotification} */
  static EventSubscriptionTemplatePushnotification() {
    return Joi.object({
      subscribed: Joi.boolean(),
    });
  }

  /** @returns {EventSubscriptionTemplate} */
  static EventSubscriptionTemplate() {
    return Joi.object({
      sms: CommunicationPlatformModel.EventSubscriptionTemplateSms(),
      email: CommunicationPlatformModel.EventSubscriptionTemplateEmail(),
      pushnotification: CommunicationPlatformModel.EventSubscriptionTemplatePushnotification(),
    });
  }

  /** @returns {EventSubscription} */
  static EventSubscription() {
    return Joi.object({
      template: CommunicationPlatformModel.EventSubscriptionTemplate(),
      is_default: Joi.boolean(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      category: Joi.string().allow(""),
      event: Joi.any(),
      slug: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {EventSubscriptionTemplateSmsObj} */
  static EventSubscriptionTemplateSmsObj() {
    return Joi.object({
      subscribed: Joi.boolean(),
      template: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
    });
  }

  /** @returns {EventSubscriptionTemplateEmailObj} */
  static EventSubscriptionTemplateEmailObj() {
    return Joi.object({
      subscribed: Joi.boolean(),
      template: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {EventSubscriptionTemplateObj} */
  static EventSubscriptionTemplateObj() {
    return Joi.object({
      sms: CommunicationPlatformModel.EventSubscriptionTemplateSmsObj(),
      email: CommunicationPlatformModel.EventSubscriptionTemplateEmailObj(),
      pushnotification: CommunicationPlatformModel.EventSubscriptionTemplatePushnotification(),
    });
  }

  /** @returns {EventSubscriptionObj} */
  static EventSubscriptionObj() {
    return Joi.object({
      template: CommunicationPlatformModel.EventSubscriptionTemplateObj(),
      is_default: Joi.boolean(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      category: Joi.string().allow(""),
      event: Joi.any(),
      slug: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {EventSubscriptions} */
  static EventSubscriptions() {
    return Joi.object({
      items: Joi.array().items(
        CommunicationPlatformModel.EventSubscriptionObj()
      ),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {TriggerJobRes} */
  static TriggerJobRes() {
    return Joi.object({
      status: Joi.number(),
    });
  }

  /** @returns {TriggerJobReq} */
  static TriggerJobReq() {
    return Joi.object({
      job_id: Joi.string().allow(""),
    });
  }

  /** @returns {GlobalVariablesGetRes} */
  static GlobalVariablesGetRes() {
    return Joi.object({
      read_only: Joi.object().pattern(/\S/, Joi.any()),
      editable: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {GlobalVariablesPostRes} */
  static GlobalVariablesPostRes() {
    return Joi.object({
      _id: Joi.string().allow(""),
      category: Joi.string().allow(""),
      application: Joi.string().allow(""),
      global_variables: Joi.object().pattern(/\S/, Joi.any()),
      created_at: Joi.string().allow(""),
    });
  }

  /** @returns {GlobalVariablesReq} */
  static GlobalVariablesReq() {
    return Joi.object({
      global_variables: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {Job} */
  static Job() {
    return Joi.object({
      completed: Joi.boolean(),
      is_active: Joi.boolean(),
      _id: Joi.string().allow(""),
      campaign: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {Jobs} */
  static Jobs() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.Job()),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {CreateJobsRes} */
  static CreateJobsRes() {
    return Joi.object({
      application: Joi.string().allow(""),
      campaign: Joi.string().allow(""),
      completed: Joi.boolean(),
      is_active: Joi.boolean(),
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {CreateJobsReq} */
  static CreateJobsReq() {
    return Joi.object({
      campaign: Joi.string().allow(""),
    });
  }

  /** @returns {JobLog} */
  static JobLog() {
    return Joi.object({
      imported: CommunicationPlatformModel.StatsImported(),
      processed: CommunicationPlatformModel.StatsProcessed(),
      _id: Joi.string().allow(""),
      job: Joi.string().allow(""),
      campaign: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {JobLogs} */
  static JobLogs() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.JobLog()),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {LogEmail} */
  static LogEmail() {
    return Joi.object({
      template: Joi.string().allow(""),
      provider: Joi.string().allow(""),
      to: Joi.string().allow(""),
    });
  }

  /** @returns {LogSms} */
  static LogSms() {
    return Joi.object({
      template: Joi.string().allow(""),
      provider: Joi.string().allow(""),
      phone_number: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
    });
  }

  /** @returns {LogPushnotification} */
  static LogPushnotification() {
    return Joi.object({
      pushtokens: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {LogMeta} */
  static LogMeta() {
    return Joi.object({
      identifier: Joi.string().allow(""),
      type: Joi.string().allow(""),
      job: Joi.string().allow(""),
      campaign: Joi.string().allow(""),
      key: Joi.string().allow(""),
      offset: Joi.string().allow(""),
      partition: Joi.string().allow(""),
      topic: Joi.string().allow(""),
    });
  }

  /** @returns {Log} */
  static Log() {
    return Joi.object({
      email: CommunicationPlatformModel.LogEmail(),
      sms: CommunicationPlatformModel.LogSms(),
      pushnotification: CommunicationPlatformModel.LogPushnotification(),
      _id: Joi.string().allow(""),
      pod: Joi.string().allow(""),
      service: Joi.string().allow(""),
      step: Joi.string().allow(""),
      source: Joi.string().allow(""),
      status: Joi.string().allow(""),
      expire_at: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      meta: CommunicationPlatformModel.LogMeta(),
      application: Joi.string().allow(""),
    });
  }

  /** @returns {Logs} */
  static Logs() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.Log()),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {SendOtpSmsCommsProvider} */
  static SendOtpSmsCommsProvider() {
    return Joi.object({
      slug: Joi.string().allow(""),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {SendOtpEmailCommsProvider} */
  static SendOtpEmailCommsProvider() {
    return Joi.object({
      slug: Joi.string().allow(""),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {SendOtpEmailCommsTemplate} */
  static SendOtpEmailCommsTemplate() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.any(),
    });
  }

  /** @returns {SendOtpCommsReqData} */
  static SendOtpCommsReqData() {
    return Joi.object({
      send_same_otp_to_channel: Joi.boolean(),
      mobile: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      to: Joi.string().allow(""),
    });
  }

  /** @returns {SendOtpCommsReqSms} */
  static SendOtpCommsReqSms() {
    return Joi.object({
      otp_length: Joi.number(),
      expiry: Joi.number(),
      template: Joi.object().pattern(/\S/, Joi.any()),
      provider: CommunicationPlatformModel.SendOtpSmsCommsProvider(),
    });
  }

  /** @returns {SendOtpCommsReqEmail} */
  static SendOtpCommsReqEmail() {
    return Joi.object({
      otp_length: Joi.number(),
      expiry: Joi.number(),
      template: CommunicationPlatformModel.SendOtpEmailCommsTemplate(),
      provider: CommunicationPlatformModel.SendOtpEmailCommsProvider(),
    });
  }

  /** @returns {SendOtpCommsResSms} */
  static SendOtpCommsResSms() {
    return Joi.object({
      success: Joi.boolean(),
      request_id: Joi.string().allow(""),
      message: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      resend_timer: Joi.number(),
    });
  }

  /** @returns {SendOtpCommsResEmail} */
  static SendOtpCommsResEmail() {
    return Joi.object({
      success: Joi.boolean(),
      request_id: Joi.string().allow(""),
      message: Joi.string().allow(""),
      to: Joi.string().allow(""),
      resend_timer: Joi.number(),
    });
  }

  /** @returns {SendOtpCommsReq} */
  static SendOtpCommsReq() {
    return Joi.object({
      data: CommunicationPlatformModel.SendOtpCommsReqData(),
      sms: CommunicationPlatformModel.SendOtpCommsReqSms(),
      email: CommunicationPlatformModel.SendOtpCommsReqEmail(),
    });
  }

  /** @returns {SendOtpCommsRes} */
  static SendOtpCommsRes() {
    return Joi.object({
      sms: CommunicationPlatformModel.SendOtpCommsResSms(),
      email: CommunicationPlatformModel.SendOtpCommsResEmail(),
    });
  }

  /** @returns {VerifyOtpCommsReq} */
  static VerifyOtpCommsReq() {
    return Joi.object({
      request_id: Joi.string().allow(""),
      otp: Joi.string().allow(""),
    });
  }

  /** @returns {VerifyOtpCommsSuccessRes} */
  static VerifyOtpCommsSuccessRes() {
    return Joi.object({
      success: Joi.boolean(),
      mobile: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      message: Joi.string().allow(""),
      email: Joi.string().allow(""),
    });
  }

  /** @returns {SmsProviderReq} */
  static SmsProviderReq() {
    return Joi.object({
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      sender: Joi.string().allow(""),
      username: Joi.string().allow(""),
      authkey: Joi.string().allow(""),
      type: Joi.string().allow(""),
      provider: Joi.string().allow(""),
      password: Joi.string().allow(""),
      senderid: Joi.string().allow(""),
      feedid: Joi.string().allow(""),
      entityid: Joi.string().allow(""),
      override_dnd: Joi.boolean(),
      host: Joi.string().allow(""),
      port: Joi.number(),
      entity_id: Joi.string().allow(""),
      apikey: Joi.string().allow(""),
      version_id: Joi.number(),
      sender_id: Joi.string().allow(""),
      api_key: Joi.string().allow(""),
    });
  }

  /** @returns {SmsProvider} */
  static SmsProvider() {
    return Joi.object({
      rpt: Joi.number(),
      type: Joi.string().allow(""),
      provider: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      sender: Joi.string().allow(""),
      username: Joi.string().allow(""),
      authkey: Joi.string().allow(""),
      entity_id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {SmsProviders} */
  static SmsProviders() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.SmsProvider()),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {DefaultSmsProviders} */
  static DefaultSmsProviders() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      is_default: Joi.boolean(),
    });
  }

  /** @returns {SmsTemplateMessage} */
  static SmsTemplateMessage() {
    return Joi.object({
      template_type: Joi.string().allow(""),
      template: Joi.string().allow(""),
    });
  }

  /** @returns {SmsTemplates} */
  static SmsTemplates() {
    return Joi.object({
      items: Joi.array().items(CommunicationPlatformModel.SmsTemplate()),
      page: CommunicationPlatformModel.Page(),
    });
  }

  /** @returns {SmsTemplate} */
  static SmsTemplate() {
    return Joi.object({
      url_shorten: CommunicationPlatformModel.EnabledObj(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      is_system: Joi.boolean(),
      is_internal: Joi.boolean(),
      meta: CommunicationPlatformModel.metaObj(),
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      message: CommunicationPlatformModel.SmsTemplateMessage(),
      priority: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      template_variables: Joi.object().pattern(/\S/, Joi.any()),
      template_id: Joi.string().allow(""),
      published: Joi.boolean(),
      category: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {SystemSmsTemplates} */
  static SystemSmsTemplates() {
    return Joi.object({
      url_shorten: CommunicationPlatformModel.EnabledObj(),
      _id: Joi.string().allow(""),
      is_system: Joi.boolean(),
      is_internal: Joi.boolean(),
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      message: CommunicationPlatformModel.SmsTemplateMessage(),
      priority: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      template_variables: Joi.object().pattern(/\S/, Joi.any()),
      template_id: Joi.string().allow(""),
      published: Joi.boolean(),
      category: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {metaObj} */
  static metaObj() {
    return Joi.object({
      type: Joi.string().allow(""),
      is_system: Joi.boolean(),
      template: Joi.string().allow(""),
    });
  }

  /** @returns {SmsTemplateReq} */
  static SmsTemplateReq() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      description: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      template_id: Joi.string().allow(""),
      meta: CommunicationPlatformModel.metaObj(),
      template_variables: Joi.object().pattern(/\S/, Joi.any()),
      published: Joi.boolean(),
      message: CommunicationPlatformModel.SmsTemplateMessage(),
    });
  }

  /** @returns {Notification} */
  static Notification() {
    return Joi.object({
      title: Joi.string().allow(""),
      body: Joi.string().allow(""),
      subtitle: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      deeplink: Joi.string().allow(""),
      click_action: Joi.string().allow(""),
    });
  }

  /** @returns {SystemNotificationSetting} */
  static SystemNotificationSetting() {
    return Joi.object({
      sound: Joi.boolean(),
      priority: Joi.string().allow(""),
      time_to_live: Joi.string().allow(""),
    });
  }

  /** @returns {SystemNotificationUser} */
  static SystemNotificationUser() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {SystemNotification} */
  static SystemNotification() {
    return Joi.object({
      notification: CommunicationPlatformModel.Notification(),
      user: CommunicationPlatformModel.SystemNotificationUser(),
      settings: CommunicationPlatformModel.SystemNotificationSetting(),
      _id: Joi.string().allow(""),
      group: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
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

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      has_previous: Joi.boolean(),
      has_next: Joi.boolean(),
      current: Joi.number(),
      type: Joi.string().allow("").required(),
      size: Joi.number(),
      total: Joi.number(),
    });
  }

  /** @returns {BasicDelete} */
  static BasicDelete() {
    return Joi.object({
      acknowledged: Joi.boolean(),
      deleted_count: Joi.number(),
    });
  }

  /** @returns {EnabledObj} */
  static EnabledObj() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {OtpConfigurationExpiryDuration} */
  static OtpConfigurationExpiryDuration() {
    return Joi.object({
      time: Joi.number().required(),
      denomination: Joi.string().allow("").required(),
    });
  }

  /** @returns {OtpConfigurationExpiry} */
  static OtpConfigurationExpiry() {
    return Joi.object({
      duration: CommunicationPlatformModel.OtpConfigurationExpiryDuration().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {OtpConfigRateLimit} */
  static OtpConfigRateLimit() {
    return Joi.object({
      duration: Joi.number(),
      limit: Joi.number(),
    });
  }

  /** @returns {OtpConfiguration} */
  static OtpConfiguration() {
    return Joi.object({
      otp_length: Joi.number().required(),
      type: Joi.string().allow("").required(),
      expiry: CommunicationPlatformModel.OtpConfigurationExpiry().required(),
      rate_limit: CommunicationPlatformModel.OtpConfigRateLimit().required(),
      application_id: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
    });
  }
}
module.exports = CommunicationPlatformModel;
