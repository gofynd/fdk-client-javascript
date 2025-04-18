export = CommunicationPlatformModel;
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
 * @typedef AppProvidersGlobalProviderRequest
 * @property {AppProvidersGlobalProviderRequestObj} [email]
 * @property {AppProvidersGlobalProviderRequestObj} [sms]
 */
/**
 * @typedef UpdateAppProvidersGlobalProviderResponseEmailSmsObj
 * @property {string} [default_provider]
 * @property {string} [otp_provider]
 */
/**
 * @typedef UpdateAppProvidersGlobalProviderResponse
 * @property {UpdateAppProvidersGlobalProviderResponseEmailSmsObj} [email]
 * @property {UpdateAppProvidersGlobalProviderResponseEmailSmsObj} [sms]
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
 * @typedef SendInstantResponse
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
 * @typedef SendSyncRequest
 * @property {SendSyncData[]} [data]
 * @property {PayloadEmailStructure} [email]
 * @property {PayloadSmsStructure} [sms]
 */
/**
 * @typedef EngineRequest
 * @property {SendSyncRequest} [payload]
 * @property {MetaStructure} [meta]
 */
/**
 * @typedef EngineResponse
 * @property {boolean} [success]
 */
/**
 * @typedef EventSubscriptionsBulkUpdateRequest
 * @property {SubscriptionsObject[]} [subscriptions]
 */
/**
 * @typedef EventSubscriptionsBulkUpdateResponse
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
 * @typedef SubscriptionsObjectRequest
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
 * @typedef TriggerJobResponse
 * @property {number} [status]
 */
/**
 * @typedef TriggerJobRequest
 * @property {string} [job_id]
 */
/**
 * @typedef GlobalVariablesGetResponse
 * @property {Object} [read_only]
 * @property {Object} [editable]
 */
/**
 * @typedef GlobalVariablesPostResponse
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
declare class CommunicationPlatformModel {
}
declare namespace CommunicationPlatformModel {
    export { AppProvidersGlobalProviderRequestObjProvider, AppProvidersGlobalProviderRequestObj, AppProvidersGlobalProviderRequest, UpdateAppProvidersGlobalProviderResponseEmailSmsObj, UpdateAppProvidersGlobalProviderResponse, DefaultEmailProvidersFromAddresses, DefaultEmailProviders, PushtokenReq, PushtokenRes, SendInstantResponse, MetaStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsStructure, SendSyncData, SendSyncRequest, EngineRequest, EngineResponse, EventSubscriptionsBulkUpdateRequest, EventSubscriptionsBulkUpdateResponse, SubscriptionsObjectRequest, SubscriptionsObject, TemplateObject, CommunicationTemplate, AppProvider, AppProviderRes, AppProviderResVoice, AppProviderResObj, GlobalProviders, GlobalProvidersResObj, AppProviderReq, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, AudienceReq, Audience, Audiences, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, DummyDatasources, DummyDatasourcesMeta, DummyDatasourcesMetaObj, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, TemplateKeys, EmailTemplate, SystemEmailTemplate, EmailTemplates, SubscribedSmsTemplates, SubscribedEmailTemplates, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplatePushnotification, EventSubscriptionTemplate, EventSubscription, EventSubscriptionTemplateSmsObj, EventSubscriptionTemplateEmailObj, EventSubscriptionTemplateObj, EventSubscriptionObj, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, GlobalVariablesGetResponse, GlobalVariablesPostResponse, GlobalVariablesReq, Job, Jobs, CreateJobsRes, CreateJobsReq, JobLog, JobLogs, LogEmail, LogSms, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsProvider, SendOtpEmailCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, SmsProviderReq, SmsProvider, SmsProviders, DefaultSmsProviders, SmsTemplateMessage, SmsTemplates, SmsTemplate, SystemSmsTemplates, metaObj, SmsTemplateReq, Notification, SystemNotificationSetting, SystemNotificationUser, SystemNotification, SystemNotifications, Page, BasicDelete, EnabledObj, OtpConfigurationExpiryDuration, OtpConfigurationExpiry, OtpConfigRateLimit, OtpConfiguration };
}
/** @returns {AppProvidersGlobalProviderRequestObjProvider} */
declare function AppProvidersGlobalProviderRequestObjProvider(): AppProvidersGlobalProviderRequestObjProvider;
type AppProvidersGlobalProviderRequestObjProvider = {
    provider?: string;
};
/** @returns {AppProvidersGlobalProviderRequestObj} */
declare function AppProvidersGlobalProviderRequestObj(): AppProvidersGlobalProviderRequestObj;
type AppProvidersGlobalProviderRequestObj = {
    transaction?: AppProvidersGlobalProviderRequestObjProvider;
    otp?: AppProvidersGlobalProviderRequestObjProvider;
};
/** @returns {AppProvidersGlobalProviderRequest} */
declare function AppProvidersGlobalProviderRequest(): AppProvidersGlobalProviderRequest;
type AppProvidersGlobalProviderRequest = {
    email?: AppProvidersGlobalProviderRequestObj;
    sms?: AppProvidersGlobalProviderRequestObj;
};
/** @returns {UpdateAppProvidersGlobalProviderResponseEmailSmsObj} */
declare function UpdateAppProvidersGlobalProviderResponseEmailSmsObj(): UpdateAppProvidersGlobalProviderResponseEmailSmsObj;
type UpdateAppProvidersGlobalProviderResponseEmailSmsObj = {
    default_provider?: string;
    otp_provider?: string;
};
/** @returns {UpdateAppProvidersGlobalProviderResponse} */
declare function UpdateAppProvidersGlobalProviderResponse(): UpdateAppProvidersGlobalProviderResponse;
type UpdateAppProvidersGlobalProviderResponse = {
    email?: UpdateAppProvidersGlobalProviderResponseEmailSmsObj;
    sms?: UpdateAppProvidersGlobalProviderResponseEmailSmsObj;
    _id?: string;
    slug?: string;
};
/** @returns {DefaultEmailProvidersFromAddresses} */
declare function DefaultEmailProvidersFromAddresses(): DefaultEmailProvidersFromAddresses;
type DefaultEmailProvidersFromAddresses = {
    name?: string;
    email?: string;
    is_default?: boolean;
};
/** @returns {DefaultEmailProviders} */
declare function DefaultEmailProviders(): DefaultEmailProviders;
type DefaultEmailProviders = {
    _id?: string;
    from_address?: DefaultEmailProvidersFromAddresses[];
    name?: string;
    is_default?: boolean;
};
/** @returns {PushtokenReq} */
declare function PushtokenReq(): PushtokenReq;
type PushtokenReq = {
    action?: string;
    bundle_identifier?: string;
    push_token?: string;
    unique_device_id?: string;
    type?: string;
};
/** @returns {PushtokenRes} */
declare function PushtokenRes(): PushtokenRes;
type PushtokenRes = {
    _id?: string;
    bundle_identifier?: string;
    push_token?: string;
    unique_device_id?: string;
    type?: string;
    platform?: string;
    application_id?: string;
    user_id?: string;
    created_at?: string;
    updated_at?: string;
    expired_at?: string;
};
/** @returns {SendInstantResponse} */
declare function SendInstantResponse(): SendInstantResponse;
type SendInstantResponse = {
    success?: boolean;
    provider?: string;
    response?: boolean;
};
/** @returns {MetaStructure} */
declare function MetaStructure(): MetaStructure;
type MetaStructure = {
    job_type?: string;
    action?: string;
    trace?: string;
    timestamp?: string;
};
/** @returns {PayloadSmsTemplateStructure} */
declare function PayloadSmsTemplateStructure(): PayloadSmsTemplateStructure;
type PayloadSmsTemplateStructure = {
    key?: string;
    value?: any;
};
/** @returns {PayloadSmsProviderStructure} */
declare function PayloadSmsProviderStructure(): PayloadSmsProviderStructure;
type PayloadSmsProviderStructure = {
    slug?: string;
};
/** @returns {PayloadEmailTemplateStructure} */
declare function PayloadEmailTemplateStructure(): PayloadEmailTemplateStructure;
type PayloadEmailTemplateStructure = {
    key?: string;
    value?: any;
};
/** @returns {PayloadEmailProviderStructure} */
declare function PayloadEmailProviderStructure(): PayloadEmailProviderStructure;
type PayloadEmailProviderStructure = {
    slug?: string;
};
/** @returns {PayloadEmailStructure} */
declare function PayloadEmailStructure(): PayloadEmailStructure;
type PayloadEmailStructure = {
    template?: PayloadEmailTemplateStructure;
    provider?: PayloadEmailProviderStructure;
};
/** @returns {PayloadSmsStructure} */
declare function PayloadSmsStructure(): PayloadSmsStructure;
type PayloadSmsStructure = {
    template?: PayloadSmsTemplateStructure;
    provider?: PayloadSmsProviderStructure;
};
/** @returns {SendSyncData} */
declare function SendSyncData(): SendSyncData;
type SendSyncData = {
    phone_number?: string;
    country_code?: string;
    to?: string;
};
/** @returns {SendSyncRequest} */
declare function SendSyncRequest(): SendSyncRequest;
type SendSyncRequest = {
    data?: SendSyncData[];
    email?: PayloadEmailStructure;
    sms?: PayloadSmsStructure;
};
/** @returns {EngineRequest} */
declare function EngineRequest(): EngineRequest;
type EngineRequest = {
    payload?: SendSyncRequest;
    meta?: MetaStructure;
};
/** @returns {EngineResponse} */
declare function EngineResponse(): EngineResponse;
type EngineResponse = {
    success?: boolean;
};
/** @returns {EventSubscriptionsBulkUpdateRequest} */
declare function EventSubscriptionsBulkUpdateRequest(): EventSubscriptionsBulkUpdateRequest;
type EventSubscriptionsBulkUpdateRequest = {
    subscriptions?: SubscriptionsObject[];
};
/** @returns {EventSubscriptionsBulkUpdateResponse} */
declare function EventSubscriptionsBulkUpdateResponse(): EventSubscriptionsBulkUpdateResponse;
type EventSubscriptionsBulkUpdateResponse = {
    template?: EventSubscriptionTemplate;
    _id?: string;
    application?: string;
    event?: string;
    slug?: string;
    category?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
/** @returns {SubscriptionsObjectRequest} */
declare function SubscriptionsObjectRequest(): SubscriptionsObjectRequest;
type SubscriptionsObjectRequest = {
    event?: string;
    slug?: string;
    template?: TemplateObject;
};
/** @returns {SubscriptionsObject} */
declare function SubscriptionsObject(): SubscriptionsObject;
type SubscriptionsObject = {
    /**
     * - Subscription ID
     */
    _id?: string;
    event?: string;
    slug?: string;
    template?: TemplateObject;
};
/** @returns {TemplateObject} */
declare function TemplateObject(): TemplateObject;
type TemplateObject = {
    sms?: CommunicationTemplate;
    email?: CommunicationTemplate;
    pushnotification?: CommunicationTemplate;
};
/** @returns {CommunicationTemplate} */
declare function CommunicationTemplate(): CommunicationTemplate;
type CommunicationTemplate = {
    /**
     * - Whether the user is subscribed or not
     */
    subscribed?: boolean;
    /**
     * - Template ID
     */
    template?: string;
};
/** @returns {AppProvider} */
declare function AppProvider(): AppProvider;
type AppProvider = {
    email?: AppProviderRes;
    sms?: AppProviderRes;
    voice?: AppProviderResVoice;
    _id?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
/** @returns {AppProviderRes} */
declare function AppProviderRes(): AppProviderRes;
type AppProviderRes = {
    transaction?: AppProviderResObj;
    promotional?: AppProviderResObj;
    otp?: AppProviderResObj;
};
/** @returns {AppProviderResVoice} */
declare function AppProviderResVoice(): AppProviderResVoice;
type AppProviderResVoice = {
    transaction?: AppProviderResObj;
    otp?: AppProviderResObj;
};
/** @returns {AppProviderResObj} */
declare function AppProviderResObj(): AppProviderResObj;
type AppProviderResObj = {
    provider?: string;
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
/** @returns {AppProviderReq} */
declare function AppProviderReq(): AppProviderReq;
type AppProviderReq = {
    email?: AppProviderRes;
    sms?: AppProviderRes;
    voice?: AppProviderResVoice;
};
/** @returns {StatsImported} */
declare function StatsImported(): StatsImported;
type StatsImported = {
    count?: number;
};
/** @returns {StatsProcessedEmail} */
declare function StatsProcessedEmail(): StatsProcessedEmail;
type StatsProcessedEmail = {
    success?: number;
    failed?: number;
    suppressed?: number;
};
/** @returns {StatsProcessedSms} */
declare function StatsProcessedSms(): StatsProcessedSms;
type StatsProcessedSms = {
    success?: number;
    failed?: number;
    suppressed?: number;
};
/** @returns {StatsProcessed} */
declare function StatsProcessed(): StatsProcessed;
type StatsProcessed = {
    email?: StatsProcessedEmail;
    sms?: StatsProcessedSms;
};
/** @returns {Stats} */
declare function Stats(): Stats;
type Stats = {
    _id?: string;
    imported?: StatsImported;
    processed?: StatsProcessed;
};
/** @returns {GetStats} */
declare function GetStats(): GetStats;
type GetStats = {
    items?: Stats[];
};
/** @returns {CampaignReq} */
declare function CampaignReq(): CampaignReq;
type CampaignReq = {
    recipient_headers?: RecipientHeaders;
    email?: CampaignEmail;
    datasource?: string;
    description?: string;
    tags?: string[];
    headers?: string[];
    is_active?: boolean;
    name?: string;
    file_url?: string;
    type?: string;
    records_count?: number;
    application?: string;
};
/** @returns {RecipientHeaders} */
declare function RecipientHeaders(): RecipientHeaders;
type RecipientHeaders = {
    email?: string;
};
/** @returns {CampaignEmailTemplate} */
declare function CampaignEmailTemplate(): CampaignEmailTemplate;
type CampaignEmailTemplate = {
    key?: string;
    value?: string;
};
/** @returns {CampignEmailProvider} */
declare function CampignEmailProvider(): CampignEmailProvider;
type CampignEmailProvider = {
    _id?: string;
    from_name?: string;
    from_email?: string;
};
/** @returns {CampaignEmail} */
declare function CampaignEmail(): CampaignEmail;
type CampaignEmail = {
    template?: CampaignEmailTemplate;
    provider?: CampignEmailProvider;
};
/** @returns {Campaign} */
declare function Campaign(): Campaign;
type Campaign = {
    recipient_headers?: RecipientHeaders;
    email?: CampaignEmail;
    description?: string;
    tags?: string[];
    is_active?: boolean;
    _id?: string;
    datasource?: string;
    type?: string;
    name?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
/** @returns {Campaigns} */
declare function Campaigns(): Campaigns;
type Campaigns = {
    items?: Campaign[];
    page?: Page;
};
/** @returns {AudienceReq} */
declare function AudienceReq(): AudienceReq;
type AudienceReq = {
    name?: string;
    description?: string;
    tags?: string[];
    file_url?: string;
    type?: string;
    records_count?: number;
    headers?: string[];
};
/** @returns {Audience} */
declare function Audience(): Audience;
type Audience = {
    _id?: string;
    application?: string;
    name?: string;
    description?: string;
    records_count?: number;
    type?: string;
    tags?: string[];
    headers?: string[];
    file_url?: string;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
/** @returns {Audiences} */
declare function Audiences(): Audiences;
type Audiences = {
    items?: Audience[];
    page?: Page;
};
/** @returns {GetNRecordsCsvReq} */
declare function GetNRecordsCsvReq(): GetNRecordsCsvReq;
type GetNRecordsCsvReq = {
    url?: string;
    header?: boolean;
    count?: number;
};
/** @returns {GetNRecordsCsvResItems} */
declare function GetNRecordsCsvResItems(): GetNRecordsCsvResItems;
type GetNRecordsCsvResItems = {
    phone_number?: string;
    email?: string;
    firstname?: string;
    lastname?: string;
    orderid?: string;
};
/** @returns {GetNRecordsCsvRes} */
declare function GetNRecordsCsvRes(): GetNRecordsCsvRes;
type GetNRecordsCsvRes = {
    items?: GetNRecordsCsvResItems[];
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
    id?: number;
    data?: DummyDatasourcesMetaObj;
};
/** @returns {DummyDatasourcesMetaObj} */
declare function DummyDatasourcesMetaObj(): DummyDatasourcesMetaObj;
type DummyDatasourcesMetaObj = {
    b?: number;
};
/** @returns {EmailProviderReqFrom} */
declare function EmailProviderReqFrom(): EmailProviderReqFrom;
type EmailProviderReqFrom = {
    name?: string;
    email?: string;
    is_default?: boolean;
};
/** @returns {EmailProviderReq} */
declare function EmailProviderReq(): EmailProviderReq;
type EmailProviderReq = {
    name?: string;
    description?: string;
    api_key?: string;
    type?: string;
    provider?: string;
    from_address?: EmailProviderReqFrom[];
};
/** @returns {EmailProvider} */
declare function EmailProvider(): EmailProvider;
type EmailProvider = {
    type?: string;
    provider?: string;
    from_address?: EmailProviderReqFrom[];
    _id?: string;
    name?: string;
    description?: string;
    api_key?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
/** @returns {EmailProviders} */
declare function EmailProviders(): EmailProviders;
type EmailProviders = {
    items?: EmailProvider[];
    page?: Page;
};
/** @returns {EmailTemplateKeys} */
declare function EmailTemplateKeys(): EmailTemplateKeys;
type EmailTemplateKeys = {
    to?: string;
    cc?: string;
    bcc?: string;
};
/** @returns {EmailTemplateHeaders} */
declare function EmailTemplateHeaders(): EmailTemplateHeaders;
type EmailTemplateHeaders = {
    key?: string;
    value?: string;
};
/** @returns {EmailTemplateReq} */
declare function EmailTemplateReq(): EmailTemplateReq;
type EmailTemplateReq = {
    name: string;
    description?: string;
    from_name?: string;
    static_to?: string[];
    static_cc?: string[];
    static_bcc?: string[];
    reply_to?: string;
    priority?: string;
    tags?: string[];
    template_variables?: any;
    published?: boolean;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    editor_type?: string;
    editor_meta?: string;
    attachments?: number[];
    headers?: EmailTemplateHeaders[];
    keys?: EmailTemplateKeys;
    text?: TemplateAndType;
};
/** @returns {TemplateAndType} */
declare function TemplateAndType(): TemplateAndType;
type TemplateAndType = {
    template_type?: string;
    template?: string;
};
/** @returns {TemplateKeys} */
declare function TemplateKeys(): TemplateKeys;
type TemplateKeys = {
    to?: string;
    cc?: string;
    bcc?: string;
};
/** @returns {EmailTemplate} */
declare function EmailTemplate(): EmailTemplate;
type EmailTemplate = {
    application?: string;
    is_system?: boolean;
    is_internal?: boolean;
    name?: string;
    description?: string;
    editor_type?: string;
    editor_meta?: string;
    static_to?: string[];
    static_cc?: string[];
    static_bcc?: string[];
    reply_to?: string;
    tags?: string[];
    subject?: TemplateAndType;
    keys?: TemplateKeys;
    html?: TemplateAndType;
    url_shorten?: EnabledObj;
    priority?: string;
    template_variables?: any;
    published?: boolean;
    category?: string;
    _id?: string;
    headers?: EmailTemplateHeaders[];
    attachments?: number[];
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
    from_name?: string;
    text?: TemplateAndType;
};
/** @returns {SystemEmailTemplate} */
declare function SystemEmailTemplate(): SystemEmailTemplate;
type SystemEmailTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    name?: string;
    description?: string;
    static_to?: string[];
    static_cc?: string[];
    static_bcc?: string[];
    tags?: string[];
    subject?: TemplateAndType;
    html?: TemplateAndType;
    url_shorten?: EnabledObj;
    priority?: string;
    template_variables?: any;
    published?: boolean;
    category?: string;
    _id?: string;
    headers?: EmailTemplateHeaders[];
    attachments?: number[];
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
    text?: TemplateAndType;
};
/** @returns {EmailTemplates} */
declare function EmailTemplates(): EmailTemplates;
type EmailTemplates = {
    items?: EmailTemplate[];
    page?: Page;
};
/** @returns {SubscribedSmsTemplates} */
declare function SubscribedSmsTemplates(): SubscribedSmsTemplates;
type SubscribedSmsTemplates = {
    items?: SmsTemplates[];
};
/** @returns {SubscribedEmailTemplates} */
declare function SubscribedEmailTemplates(): SubscribedEmailTemplates;
type SubscribedEmailTemplates = {
    items?: EmailTemplate[];
};
/** @returns {EventSubscriptionTemplateSms} */
declare function EventSubscriptionTemplateSms(): EventSubscriptionTemplateSms;
type EventSubscriptionTemplateSms = {
    subscribed?: boolean;
    template?: string;
};
/** @returns {EventSubscriptionTemplateEmail} */
declare function EventSubscriptionTemplateEmail(): EventSubscriptionTemplateEmail;
type EventSubscriptionTemplateEmail = {
    subscribed?: boolean;
    template?: string;
};
/** @returns {EventSubscriptionTemplatePushnotification} */
declare function EventSubscriptionTemplatePushnotification(): EventSubscriptionTemplatePushnotification;
type EventSubscriptionTemplatePushnotification = {
    subscribed?: boolean;
};
/** @returns {EventSubscriptionTemplate} */
declare function EventSubscriptionTemplate(): EventSubscriptionTemplate;
type EventSubscriptionTemplate = {
    sms?: EventSubscriptionTemplateSms;
    email?: EventSubscriptionTemplateEmail;
    pushnotification?: EventSubscriptionTemplatePushnotification;
};
/** @returns {EventSubscription} */
declare function EventSubscription(): EventSubscription;
type EventSubscription = {
    template?: EventSubscriptionTemplate;
    is_default?: boolean;
    _id?: string;
    application?: string;
    category?: string;
    event?: any;
    slug?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
/** @returns {EventSubscriptionTemplateSmsObj} */
declare function EventSubscriptionTemplateSmsObj(): EventSubscriptionTemplateSmsObj;
type EventSubscriptionTemplateSmsObj = {
    subscribed?: boolean;
    template?: any;
};
/** @returns {EventSubscriptionTemplateEmailObj} */
declare function EventSubscriptionTemplateEmailObj(): EventSubscriptionTemplateEmailObj;
type EventSubscriptionTemplateEmailObj = {
    subscribed?: boolean;
    template?: string;
};
/** @returns {EventSubscriptionTemplateObj} */
declare function EventSubscriptionTemplateObj(): EventSubscriptionTemplateObj;
type EventSubscriptionTemplateObj = {
    sms?: EventSubscriptionTemplateSmsObj;
    email?: EventSubscriptionTemplateEmailObj;
    pushnotification?: EventSubscriptionTemplatePushnotification;
};
/** @returns {EventSubscriptionObj} */
declare function EventSubscriptionObj(): EventSubscriptionObj;
type EventSubscriptionObj = {
    template?: EventSubscriptionTemplateObj;
    is_default?: boolean;
    _id?: string;
    application?: string;
    category?: string;
    event?: any;
    slug?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
/** @returns {EventSubscriptions} */
declare function EventSubscriptions(): EventSubscriptions;
type EventSubscriptions = {
    items?: EventSubscriptionObj[];
    page?: Page;
};
/** @returns {TriggerJobResponse} */
declare function TriggerJobResponse(): TriggerJobResponse;
type TriggerJobResponse = {
    status?: number;
};
/** @returns {TriggerJobRequest} */
declare function TriggerJobRequest(): TriggerJobRequest;
type TriggerJobRequest = {
    job_id?: string;
};
/** @returns {GlobalVariablesGetResponse} */
declare function GlobalVariablesGetResponse(): GlobalVariablesGetResponse;
type GlobalVariablesGetResponse = {
    read_only?: any;
    editable?: any;
};
/** @returns {GlobalVariablesPostResponse} */
declare function GlobalVariablesPostResponse(): GlobalVariablesPostResponse;
type GlobalVariablesPostResponse = {
    _id?: string;
    category?: string;
    application?: string;
    global_variables?: any;
    created_at?: string;
};
/** @returns {GlobalVariablesReq} */
declare function GlobalVariablesReq(): GlobalVariablesReq;
type GlobalVariablesReq = {
    global_variables?: any;
};
/** @returns {Job} */
declare function Job(): Job;
type Job = {
    completed?: boolean;
    is_active?: boolean;
    _id?: string;
    campaign?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
/** @returns {Jobs} */
declare function Jobs(): Jobs;
type Jobs = {
    items?: Job[];
    page?: Page;
};
/** @returns {CreateJobsRes} */
declare function CreateJobsRes(): CreateJobsRes;
type CreateJobsRes = {
    application?: string;
    campaign?: string;
    completed?: boolean;
    is_active?: boolean;
    _id?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
/** @returns {CreateJobsReq} */
declare function CreateJobsReq(): CreateJobsReq;
type CreateJobsReq = {
    campaign?: string;
};
/** @returns {JobLog} */
declare function JobLog(): JobLog;
type JobLog = {
    imported?: StatsImported;
    processed?: StatsProcessed;
    _id?: string;
    job?: string;
    campaign?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
/** @returns {JobLogs} */
declare function JobLogs(): JobLogs;
type JobLogs = {
    items?: JobLog[];
    page?: Page;
};
/** @returns {LogEmail} */
declare function LogEmail(): LogEmail;
type LogEmail = {
    template?: string;
    provider?: string;
    to?: string;
};
/** @returns {LogSms} */
declare function LogSms(): LogSms;
type LogSms = {
    template?: string;
    provider?: string;
    phone_number?: string;
    country_code?: string;
};
/** @returns {LogPushnotification} */
declare function LogPushnotification(): LogPushnotification;
type LogPushnotification = {
    pushtokens?: string[];
};
/** @returns {LogMeta} */
declare function LogMeta(): LogMeta;
type LogMeta = {
    identifier?: string;
    type?: string;
    job?: string;
    campaign?: string;
    key?: string;
    offset?: string;
    partition?: string;
    topic?: string;
};
/** @returns {Log} */
declare function Log(): Log;
type Log = {
    email?: LogEmail;
    sms?: LogSms;
    pushnotification?: LogPushnotification;
    _id?: string;
    pod?: string;
    service?: string;
    step?: string;
    source?: string;
    status?: string;
    expire_at?: string;
    created_at?: string;
    meta?: LogMeta;
    application?: string;
};
/** @returns {Logs} */
declare function Logs(): Logs;
type Logs = {
    items?: Log[];
    page?: Page;
};
/** @returns {SendOtpSmsCommsProvider} */
declare function SendOtpSmsCommsProvider(): SendOtpSmsCommsProvider;
type SendOtpSmsCommsProvider = {
    slug?: string;
    _id?: string;
};
/** @returns {SendOtpEmailCommsProvider} */
declare function SendOtpEmailCommsProvider(): SendOtpEmailCommsProvider;
type SendOtpEmailCommsProvider = {
    slug?: string;
    _id?: string;
};
/** @returns {SendOtpEmailCommsTemplate} */
declare function SendOtpEmailCommsTemplate(): SendOtpEmailCommsTemplate;
type SendOtpEmailCommsTemplate = {
    key?: string;
    value?: any;
};
/** @returns {SendOtpCommsReqData} */
declare function SendOtpCommsReqData(): SendOtpCommsReqData;
type SendOtpCommsReqData = {
    send_same_otp_to_channel?: boolean;
    mobile?: string;
    country_code?: string;
    to?: string;
};
/** @returns {SendOtpCommsReqSms} */
declare function SendOtpCommsReqSms(): SendOtpCommsReqSms;
type SendOtpCommsReqSms = {
    otp_length?: number;
    expiry?: number;
    template?: any;
    provider?: SendOtpSmsCommsProvider;
};
/** @returns {SendOtpCommsReqEmail} */
declare function SendOtpCommsReqEmail(): SendOtpCommsReqEmail;
type SendOtpCommsReqEmail = {
    otp_length?: number;
    expiry?: number;
    template?: SendOtpEmailCommsTemplate;
    provider?: SendOtpEmailCommsProvider;
};
/** @returns {SendOtpCommsResSms} */
declare function SendOtpCommsResSms(): SendOtpCommsResSms;
type SendOtpCommsResSms = {
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
    resend_timer?: number;
};
/** @returns {SendOtpCommsResEmail} */
declare function SendOtpCommsResEmail(): SendOtpCommsResEmail;
type SendOtpCommsResEmail = {
    success?: boolean;
    request_id?: string;
    message?: string;
    to?: string;
    resend_timer?: number;
};
/** @returns {SendOtpCommsReq} */
declare function SendOtpCommsReq(): SendOtpCommsReq;
type SendOtpCommsReq = {
    data?: SendOtpCommsReqData;
    sms?: SendOtpCommsReqSms;
    email?: SendOtpCommsReqEmail;
};
/** @returns {SendOtpCommsRes} */
declare function SendOtpCommsRes(): SendOtpCommsRes;
type SendOtpCommsRes = {
    sms?: SendOtpCommsResSms;
    email?: SendOtpCommsResEmail;
};
/** @returns {VerifyOtpCommsReq} */
declare function VerifyOtpCommsReq(): VerifyOtpCommsReq;
type VerifyOtpCommsReq = {
    request_id?: string;
    otp?: string;
};
/** @returns {VerifyOtpCommsSuccessRes} */
declare function VerifyOtpCommsSuccessRes(): VerifyOtpCommsSuccessRes;
type VerifyOtpCommsSuccessRes = {
    success?: boolean;
    mobile?: string;
    country_code?: string;
    message?: string;
    email?: string;
};
/** @returns {SmsProviderReq} */
declare function SmsProviderReq(): SmsProviderReq;
type SmsProviderReq = {
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
    type?: string;
    provider?: string;
    /**
     * - The password for the test.
     */
    password?: string;
    /**
     * - The sender ID for the test.
     */
    senderid?: string;
    /**
     * - The feed ID for the test.
     */
    feedid?: string;
    /**
     * - The entity ID for the test.
     */
    entityid?: string;
    /**
     * - Whether to override Do Not Disturb.
     */
    override_dnd?: boolean;
    /**
     * - The host for the test.
     */
    host?: string;
    /**
     * - The port for the test.
     */
    port?: number;
    /**
     * - The entity ID for the test.
     */
    entity_id?: string;
    /**
     * - The apikey for the test.
     */
    apikey?: string;
    /**
     * - The version ID for the test.
     */
    version_id?: number;
    /**
     * - The sender ID for the test.
     */
    sender_id?: string;
    /**
     * - The api_key for the test.
     */
    api_key?: string;
};
/** @returns {SmsProvider} */
declare function SmsProvider(): SmsProvider;
type SmsProvider = {
    rpt?: number;
    type?: string;
    provider?: string;
    _id?: string;
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
    entity_id?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
/** @returns {SmsProviders} */
declare function SmsProviders(): SmsProviders;
type SmsProviders = {
    items?: SmsProvider[];
    page?: Page;
};
/** @returns {DefaultSmsProviders} */
declare function DefaultSmsProviders(): DefaultSmsProviders;
type DefaultSmsProviders = {
    _id?: string;
    name?: string;
    is_default?: boolean;
};
/** @returns {SmsTemplateMessage} */
declare function SmsTemplateMessage(): SmsTemplateMessage;
type SmsTemplateMessage = {
    template_type?: string;
    template?: string;
};
/** @returns {SmsTemplates} */
declare function SmsTemplates(): SmsTemplates;
type SmsTemplates = {
    items?: SmsTemplate[];
    page?: Page;
};
/** @returns {SmsTemplate} */
declare function SmsTemplate(): SmsTemplate;
type SmsTemplate = {
    url_shorten?: EnabledObj;
    _id?: string;
    application?: string;
    is_system?: boolean;
    is_internal?: boolean;
    meta?: metaObj;
    name?: string;
    description?: string;
    message?: SmsTemplateMessage;
    priority?: string;
    tags?: string[];
    template_variables?: any;
    template_id?: string;
    published?: boolean;
    category?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
/** @returns {SystemSmsTemplates} */
declare function SystemSmsTemplates(): SystemSmsTemplates;
type SystemSmsTemplates = {
    url_shorten?: EnabledObj;
    _id?: string;
    is_system?: boolean;
    is_internal?: boolean;
    name?: string;
    description?: string;
    message?: SmsTemplateMessage;
    priority?: string;
    tags?: string[];
    template_variables?: any;
    template_id?: string;
    published?: boolean;
    category?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
/** @returns {metaObj} */
declare function metaObj(): metaObj;
type metaObj = {
    type?: string;
    is_system?: boolean;
    template?: string;
};
/** @returns {SmsTemplateReq} */
declare function SmsTemplateReq(): SmsTemplateReq;
type SmsTemplateReq = {
    name: string;
    description?: string;
    priority?: string;
    template_id?: string;
    meta?: metaObj;
    template_variables?: any;
    published?: boolean;
    message?: SmsTemplateMessage;
};
/** @returns {Notification} */
declare function Notification(): Notification;
type Notification = {
    title?: string;
    body?: string;
    subtitle?: string;
    icon?: string;
    deeplink?: string;
    click_action?: string;
};
/** @returns {SystemNotificationSetting} */
declare function SystemNotificationSetting(): SystemNotificationSetting;
type SystemNotificationSetting = {
    sound?: boolean;
    priority?: string;
    time_to_live?: string;
};
/** @returns {SystemNotificationUser} */
declare function SystemNotificationUser(): SystemNotificationUser;
type SystemNotificationUser = {
    type?: string;
    value?: string;
};
/** @returns {SystemNotification} */
declare function SystemNotification(): SystemNotification;
type SystemNotification = {
    notification?: Notification;
    user?: SystemNotificationUser;
    settings?: SystemNotificationSetting;
    _id?: string;
    group?: string;
    created_at?: string;
};
/** @returns {SystemNotifications} */
declare function SystemNotifications(): SystemNotifications;
type SystemNotifications = {
    items?: SystemNotification[];
    last_read_anchor?: number;
    page?: Page;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    /**
     * - The total number of items on the page.
     */
    item_total?: number;
    /**
     * - The identifier for the next page.
     */
    next_id?: string;
    /**
     * - Indicates whether there is a previous page.
     */
    has_previous?: boolean;
    /**
     * - Indicates whether there is a next page.
     */
    has_next?: boolean;
    /**
     * - The current page number.
     */
    current?: number;
    /**
     * - The type of the page, such as 'PageType'.
     */
    type: string;
    /**
     * - The number of items per page.
     */
    size?: number;
    /**
     * - Total number of items.
     */
    total?: number;
};
/** @returns {BasicDelete} */
declare function BasicDelete(): BasicDelete;
type BasicDelete = {
    acknowledged?: boolean;
    deleted_count?: number;
};
/** @returns {EnabledObj} */
declare function EnabledObj(): EnabledObj;
type EnabledObj = {
    enabled?: boolean;
};
/** @returns {OtpConfigurationExpiryDuration} */
declare function OtpConfigurationExpiryDuration(): OtpConfigurationExpiryDuration;
type OtpConfigurationExpiryDuration = {
    time: number;
    denomination: string;
};
/** @returns {OtpConfigurationExpiry} */
declare function OtpConfigurationExpiry(): OtpConfigurationExpiry;
type OtpConfigurationExpiry = {
    duration: OtpConfigurationExpiryDuration;
    type: string;
};
/** @returns {OtpConfigRateLimit} */
declare function OtpConfigRateLimit(): OtpConfigRateLimit;
type OtpConfigRateLimit = {
    duration?: number;
    limit?: number;
};
/** @returns {OtpConfiguration} */
declare function OtpConfiguration(): OtpConfiguration;
type OtpConfiguration = {
    otp_length: number;
    type: string;
    expiry: OtpConfigurationExpiry;
    rate_limit: OtpConfigRateLimit;
    application_id?: string;
    company_id?: string;
};
