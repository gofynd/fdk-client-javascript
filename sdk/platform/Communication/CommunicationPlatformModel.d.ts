export = CommunicationPlatformModel;
/**
 * @typedef GroupMapping
 * @property {EventGroup[]} items
 */
/**
 * @typedef EventGroup
 * @property {string} name - Event group identifier
 * @property {string} display - Human-readable group name
 * @property {EventSubgroup[]} subgroups
 */
/**
 * @typedef EventSubgroup
 * @property {string} name - Sub-group identifier
 * @property {string} display - Human-readable sub-group name
 */
/**
 * @typedef EventSubscriptionsBulkUpdatePayload
 * @property {SubscriptionsObject[]} [subscriptions]
 */
/**
 * @typedef EventSubscriptionsBulkUpdateResult
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
 * @typedef SubscriptionsObject
 * @property {string} [_id] - Subscription ID
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
 * @property {Object} [imported]
 * @property {Object} [processed]
 */
/**
 * @typedef GetStats
 * @property {Stats[]} [items]
 */
/**
 * @typedef CampaignReq
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {string} [datasource_type] - Type of the datasource (audience or user_group)
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
 * @property {Object[]} [tags]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [datasource]
 * @property {string} [type]
 * @property {string} [datasource_type] - Type of the datasource (audience or user_group)
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
 * @typedef BadRequestSchema
 * @property {string} [status] - Response status.
 * @property {string} [message] - Failure message.
 */
/**
 * @typedef NotFound
 * @property {string} [message] - Failure message.
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
 * @typedef SystemEmailTemplates
 * @property {SystemEmailTemplate[]} [items]
 */
/**
 * @typedef PayloadEmailTemplateStructure
 * @property {string} [key]
 * @property {Object} [value]
 */
/**
 * @typedef PayloadEmailProviderStructure
 * @property {string} [_id]
 */
/**
 * @typedef PayloadEmailStructure
 * @property {PayloadEmailTemplateStructure} [template]
 * @property {PayloadEmailProviderStructure} [provider]
 */
/**
 * @typedef PayloadSmsTemplateStructure
 * @property {string} [key]
 * @property {Object} [value]
 */
/**
 * @typedef PayloadSmsProviderStructure
 * @property {string} [_id]
 */
/**
 * @typedef PayloadSmsStructure
 * @property {PayloadSmsTemplateStructure} [template]
 * @property {PayloadSmsProviderStructure} [provider]
 */
/**
 * @typedef PayloadStructure
 * @property {Object[]} [data]
 * @property {PayloadEmailStructure} [email]
 * @property {PayloadSmsStructure} [sms]
 * @property {string} [application]
 */
/**
 * @typedef MetaStructure
 * @property {string} [job_type]
 * @property {string} [action]
 * @property {string} [trace]
 * @property {string} [timestamp]
 */
/**
 * @typedef EnginePayload
 * @property {PayloadStructure} [payload]
 * @property {MetaStructure} [meta]
 */
/**
 * @typedef EngineResult
 * @property {boolean} [success]
 */
/**
 * @typedef EventSubscriptionTemplateSms
 * @property {boolean} [subscribed]
 * @property {SmsTemplate} [template]
 */
/**
 * @typedef EventSubscriptionTemplateEmail
 * @property {boolean} [subscribed]
 * @property {EmailTemplate} [template]
 */
/**
 * @typedef EventSubscriptionTemplate
 * @property {EventSubscriptionTemplateSms} [sms]
 * @property {EventSubscriptionTemplateEmail} [email]
 */
/**
 * @typedef EventSubscription
 * @property {EventSubscriptionTemplate} [template]
 * @property {boolean} [is_default]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {EventSubscriptionEvents} [event]
 * @property {string} [slug]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef EventSubscriptionEvents
 * @property {string} [category]
 * @property {string} [event_name]
 * @property {string} [group]
 * @property {string} [slug]
 * @property {EventTemplate} [template]
 */
/**
 * @typedef EventTemplate
 * @property {EventProviderTemplates} [email]
 * @property {EventProviderTemplates} [pushnotification]
 * @property {EventProviderTemplates} [sms]
 */
/**
 * @typedef EventProviderTemplates
 * @property {string} [provider_type] - Provider type for the event template
 * @property {string} [template] - This is the unique id of the template
 */
/**
 * @typedef EventSubscriptions
 * @property {EventSubscription[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef TriggerJobResult
 * @property {number} [status]
 */
/**
 * @typedef TriggerJobPayload
 * @property {string} [job_id]
 */
/**
 * @typedef GetGlobalVariablesResult
 * @property {Object} [read_only]
 * @property {Object} [editable]
 */
/**
 * @typedef CreateGlobalVariablesResult
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
 * @property {Object} [imported]
 * @property {Object} [processed]
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
 */
/**
 * @typedef LogPushnotification
 * @property {string[]} [pushtokens]
 */
/**
 * @typedef LogMeta
 * @property {string} [type]
 * @property {string} [identifier]
 * @property {string} [key]
 * @property {string} [offset]
 * @property {string} [partition]
 * @property {string} [topic]
 */
/**
 * @typedef Log
 * @property {LogEmail} [email]
 * @property {LogPushnotification} [pushnotification]
 * @property {LogMeta} [meta]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [service]
 * @property {string} [step]
 * @property {string} [status]
 * @property {Object} [data]
 * @property {string} [expire_at]
 * @property {string} [created_at]
 */
/**
 * @typedef Logs
 * @property {Log[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SendOtpSmsCommsTemplate
 * @property {string} [key]
 * @property {Object} [value]
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
 * @property {SendOtpSmsCommsTemplate} [template]
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
 * @typedef VerifyOtpCommsErrorRes
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef SmsProviderReq
 * @property {string} [name]
 * @property {string} [token]
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
 * @property {string} [tenant_name_1] - First part of jiocx url.
 * @property {string} [tenant_name_2] - Second part of jiocx url.
 */
/**
 * @typedef SmsProvider
 * @property {string} [token]
 * @property {string} [sender_id]
 * @property {string} [api_key]
 * @property {number} [expiry_date]
 * @property {number} [rpt]
 * @property {string} [type]
 * @property {string} [provider]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [sender]
 * @property {string} [username]
 * @property {string} [authkey]
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
 * @property {SystemSmsTemplate[]} [items] - An array of system SMS templates
 */
/**
 * @typedef SystemSmsTemplate
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
 * @typedef SystemNotificationUser
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef SystemNotification
 * @property {Notification} [notification]
 * @property {SystemNotificationUser} [user]
 * @property {SystemNotificationUser} [settings]
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
 * @property {number} [item_total] - The total number of all items across all pages.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, can be 'cursor' or 'number'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [page_size] - The number of items per page.
 */
/**
 * @typedef GenericError
 * @property {Message} [message]
 * @property {string} [sentry]
 */
/**
 * @typedef GenericDelete
 * @property {string} [message]
 * @property {boolean} [acknowledged]
 * @property {number} [affected]
 * @property {string} [operation]
 */
/**
 * @typedef Message
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {string} [info]
 * @property {string} [operation]
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
 * @typedef OtpConfiguration
 * @property {number} otp_length
 * @property {string} type
 * @property {OtpConfigurationExpiry} expiry
 * @property {string} [application_id]
 * @property {string} [company_id]
 */
declare class CommunicationPlatformModel {
}
declare namespace CommunicationPlatformModel {
    export { GroupMapping, EventGroup, EventSubgroup, EventSubscriptionsBulkUpdatePayload, EventSubscriptionsBulkUpdateResult, SubscriptionsObject, TemplateObject, CommunicationTemplate, AppProvider, AppProviderRes, AppProviderResVoice, AppProviderResObj, GlobalProviders, GlobalProvidersResObj, AppProviderReq, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, NotFound, AudienceReq, Audience, Audiences, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, DummyDatasources, DummyDatasourcesMeta, DummyDatasourcesMetaObj, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EnginePayload, EngineResult, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptionEvents, EventTemplate, EventProviderTemplates, EventSubscriptions, TriggerJobResult, TriggerJobPayload, GetGlobalVariablesResult, CreateGlobalVariablesResult, GlobalVariablesReq, Job, Jobs, CreateJobsRes, CreateJobsReq, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, SmsProviderReq, SmsProvider, SmsProviders, DefaultSmsProviders, SmsTemplateMessage, SmsTemplates, SmsTemplate, SystemSmsTemplates, SystemSmsTemplate, metaObj, SmsTemplateReq, Notification, SystemNotificationUser, SystemNotification, SystemNotifications, Page, GenericError, GenericDelete, Message, EnabledObj, OtpConfigurationExpiryDuration, OtpConfigurationExpiry, OtpConfiguration };
}
/** @returns {GroupMapping} */
declare function GroupMapping(): GroupMapping;
type GroupMapping = {
    items: EventGroup[];
};
/** @returns {EventGroup} */
declare function EventGroup(): EventGroup;
type EventGroup = {
    /**
     * - Event group identifier
     */
    name: string;
    /**
     * - Human-readable group name
     */
    display: string;
    subgroups: EventSubgroup[];
};
/** @returns {EventSubgroup} */
declare function EventSubgroup(): EventSubgroup;
type EventSubgroup = {
    /**
     * - Sub-group identifier
     */
    name: string;
    /**
     * - Human-readable sub-group name
     */
    display: string;
};
/** @returns {EventSubscriptionsBulkUpdatePayload} */
declare function EventSubscriptionsBulkUpdatePayload(): EventSubscriptionsBulkUpdatePayload;
type EventSubscriptionsBulkUpdatePayload = {
    subscriptions?: SubscriptionsObject[];
};
/** @returns {EventSubscriptionsBulkUpdateResult} */
declare function EventSubscriptionsBulkUpdateResult(): EventSubscriptionsBulkUpdateResult;
type EventSubscriptionsBulkUpdateResult = {
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
/** @returns {SubscriptionsObject} */
declare function SubscriptionsObject(): SubscriptionsObject;
type SubscriptionsObject = {
    /**
     * - Subscription ID
     */
    _id?: string;
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
    imported?: any;
    processed?: any;
};
/** @returns {GetStats} */
declare function GetStats(): GetStats;
type GetStats = {
    items?: Stats[];
};
/** @returns {CampaignReq} */
declare function CampaignReq(): CampaignReq;
type CampaignReq = {
    description?: string;
    tags?: string[];
    headers?: string[];
    is_active?: boolean;
    name?: string;
    file_url?: string;
    type?: string;
    /**
     * - Type of the datasource (audience or user_group)
     */
    datasource_type?: string;
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
    tags?: any[];
    is_active?: boolean;
    _id?: string;
    datasource?: string;
    type?: string;
    /**
     * - Type of the datasource (audience or user_group)
     */
    datasource_type?: string;
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
/** @returns {BadRequestSchema} */
declare function BadRequestSchema(): BadRequestSchema;
type BadRequestSchema = {
    /**
     * - Response status.
     */
    status?: string;
    /**
     * - Failure message.
     */
    message?: string;
};
/** @returns {NotFound} */
declare function NotFound(): NotFound;
type NotFound = {
    /**
     * - Failure message.
     */
    message?: string;
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
/** @returns {SystemEmailTemplates} */
declare function SystemEmailTemplates(): SystemEmailTemplates;
type SystemEmailTemplates = {
    items?: SystemEmailTemplate[];
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
    _id?: string;
};
/** @returns {PayloadEmailStructure} */
declare function PayloadEmailStructure(): PayloadEmailStructure;
type PayloadEmailStructure = {
    template?: PayloadEmailTemplateStructure;
    provider?: PayloadEmailProviderStructure;
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
    _id?: string;
};
/** @returns {PayloadSmsStructure} */
declare function PayloadSmsStructure(): PayloadSmsStructure;
type PayloadSmsStructure = {
    template?: PayloadSmsTemplateStructure;
    provider?: PayloadSmsProviderStructure;
};
/** @returns {PayloadStructure} */
declare function PayloadStructure(): PayloadStructure;
type PayloadStructure = {
    data?: any[];
    email?: PayloadEmailStructure;
    sms?: PayloadSmsStructure;
    application?: string;
};
/** @returns {MetaStructure} */
declare function MetaStructure(): MetaStructure;
type MetaStructure = {
    job_type?: string;
    action?: string;
    trace?: string;
    timestamp?: string;
};
/** @returns {EnginePayload} */
declare function EnginePayload(): EnginePayload;
type EnginePayload = {
    payload?: PayloadStructure;
    meta?: MetaStructure;
};
/** @returns {EngineResult} */
declare function EngineResult(): EngineResult;
type EngineResult = {
    success?: boolean;
};
/** @returns {EventSubscriptionTemplateSms} */
declare function EventSubscriptionTemplateSms(): EventSubscriptionTemplateSms;
type EventSubscriptionTemplateSms = {
    subscribed?: boolean;
    template?: SmsTemplate;
};
/** @returns {EventSubscriptionTemplateEmail} */
declare function EventSubscriptionTemplateEmail(): EventSubscriptionTemplateEmail;
type EventSubscriptionTemplateEmail = {
    subscribed?: boolean;
    template?: EmailTemplate;
};
/** @returns {EventSubscriptionTemplate} */
declare function EventSubscriptionTemplate(): EventSubscriptionTemplate;
type EventSubscriptionTemplate = {
    sms?: EventSubscriptionTemplateSms;
    email?: EventSubscriptionTemplateEmail;
};
/** @returns {EventSubscription} */
declare function EventSubscription(): EventSubscription;
type EventSubscription = {
    template?: EventSubscriptionTemplate;
    is_default?: boolean;
    _id?: string;
    application?: string;
    event?: EventSubscriptionEvents;
    slug?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
/** @returns {EventSubscriptionEvents} */
declare function EventSubscriptionEvents(): EventSubscriptionEvents;
type EventSubscriptionEvents = {
    category?: string;
    event_name?: string;
    group?: string;
    slug?: string;
    template?: EventTemplate;
};
/** @returns {EventTemplate} */
declare function EventTemplate(): EventTemplate;
type EventTemplate = {
    email?: EventProviderTemplates;
    pushnotification?: EventProviderTemplates;
    sms?: EventProviderTemplates;
};
/** @returns {EventProviderTemplates} */
declare function EventProviderTemplates(): EventProviderTemplates;
type EventProviderTemplates = {
    /**
     * - Provider type for the event template
     */
    provider_type?: string;
    /**
     * - This is the unique id of the template
     */
    template?: string;
};
/** @returns {EventSubscriptions} */
declare function EventSubscriptions(): EventSubscriptions;
type EventSubscriptions = {
    items?: EventSubscription[];
    page?: Page;
};
/** @returns {TriggerJobResult} */
declare function TriggerJobResult(): TriggerJobResult;
type TriggerJobResult = {
    status?: number;
};
/** @returns {TriggerJobPayload} */
declare function TriggerJobPayload(): TriggerJobPayload;
type TriggerJobPayload = {
    job_id?: string;
};
/** @returns {GetGlobalVariablesResult} */
declare function GetGlobalVariablesResult(): GetGlobalVariablesResult;
type GetGlobalVariablesResult = {
    read_only?: any;
    editable?: any;
};
/** @returns {CreateGlobalVariablesResult} */
declare function CreateGlobalVariablesResult(): CreateGlobalVariablesResult;
type CreateGlobalVariablesResult = {
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
    imported?: any;
    processed?: any;
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
};
/** @returns {LogPushnotification} */
declare function LogPushnotification(): LogPushnotification;
type LogPushnotification = {
    pushtokens?: string[];
};
/** @returns {LogMeta} */
declare function LogMeta(): LogMeta;
type LogMeta = {
    type?: string;
    identifier?: string;
    key?: string;
    offset?: string;
    partition?: string;
    topic?: string;
};
/** @returns {Log} */
declare function Log(): Log;
type Log = {
    email?: LogEmail;
    pushnotification?: LogPushnotification;
    meta?: LogMeta;
    _id?: string;
    application?: string;
    service?: string;
    step?: string;
    status?: string;
    data?: any;
    expire_at?: string;
    created_at?: string;
};
/** @returns {Logs} */
declare function Logs(): Logs;
type Logs = {
    items?: Log[];
    page?: Page;
};
/** @returns {SendOtpSmsCommsTemplate} */
declare function SendOtpSmsCommsTemplate(): SendOtpSmsCommsTemplate;
type SendOtpSmsCommsTemplate = {
    key?: string;
    value?: any;
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
    template?: SendOtpSmsCommsTemplate;
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
/** @returns {VerifyOtpCommsErrorRes} */
declare function VerifyOtpCommsErrorRes(): VerifyOtpCommsErrorRes;
type VerifyOtpCommsErrorRes = {
    success?: boolean;
    message?: string;
};
/** @returns {SmsProviderReq} */
declare function SmsProviderReq(): SmsProviderReq;
type SmsProviderReq = {
    name?: string;
    token?: string;
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
    /**
     * - First part of jiocx url.
     */
    tenant_name_1?: string;
    /**
     * - Second part of jiocx url.
     */
    tenant_name_2?: string;
};
/** @returns {SmsProvider} */
declare function SmsProvider(): SmsProvider;
type SmsProvider = {
    token?: string;
    sender_id?: string;
    api_key?: string;
    expiry_date?: number;
    rpt?: number;
    type?: string;
    provider?: string;
    _id?: string;
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
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
    /**
     * - An array of system SMS templates
     */
    items?: SystemSmsTemplate[];
};
/** @returns {SystemSmsTemplate} */
declare function SystemSmsTemplate(): SystemSmsTemplate;
type SystemSmsTemplate = {
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
    settings?: SystemNotificationUser;
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
     * - The total number of all items across all pages.
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
     * - The type of the page, can be 'cursor' or 'number'.
     */
    type: string;
    /**
     * - The number of items per page.
     */
    size?: number;
    /**
     * - The number of items per page.
     */
    page_size?: number;
};
/** @returns {GenericError} */
declare function GenericError(): GenericError;
type GenericError = {
    message?: Message;
    sentry?: string;
};
/** @returns {GenericDelete} */
declare function GenericDelete(): GenericDelete;
type GenericDelete = {
    message?: string;
    acknowledged?: boolean;
    affected?: number;
    operation?: string;
};
/** @returns {Message} */
declare function Message(): Message;
type Message = {
    message?: string;
    success?: boolean;
    info?: string;
    operation?: string;
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
/** @returns {OtpConfiguration} */
declare function OtpConfiguration(): OtpConfiguration;
type OtpConfiguration = {
    otp_length: number;
    type: string;
    expiry: OtpConfigurationExpiry;
    application_id?: string;
    company_id?: string;
};
