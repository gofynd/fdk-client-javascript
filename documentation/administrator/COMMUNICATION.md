




##### [Back to Administrator docs](./README.md)

## Communication Methods
Manages email, sms, push notifications sent to users

* [sendSellerCommunicationAsynchronously](#sendsellercommunicationasynchronously)
* [sendSellerCommunicationSynchronously](#sendsellercommunicationsynchronously)



## Methods with example and description




### sendSellerCommunicationAsynchronously
Send email or sms asynchronously



```javascript
// Promise
const promise = communication.sendSellerCommunicationAsynchronously({  body : value });

// Async/Await
const data = await communication.sendSellerCommunicationAsynchronously({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [EngineRequest](#EngineRequest) | yes | Request body |


Send email or sms asynchronously

*Returned Response:*




[EngineResponse](#EngineResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "success": true
  }
}
```
</details>

</details>









---


### sendSellerCommunicationSynchronously
Send email or sms synchronously



```javascript
// Promise
const promise = communication.sendSellerCommunicationSynchronously({  body : value });

// Async/Await
const data = await communication.sendSellerCommunicationSynchronously({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [EngineRequest](#EngineRequest) | yes | Request body |


Send email or sms synchronously

*Returned Response:*




[EngineResponse](#EngineResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "success": true
  }
}
```
</details>

</details>









---



### Schemas


#### [Audience](#Audience)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || __v | number |  no  |  || _id | string |  no  |  || application | string |  no  |  || created_at | string |  no  |  || description | string |  no  |  || file_url | string |  no  |  || headers | [string] |  no  |  || is_active | boolean |  no  |  || name | string |  no  |  || records_count | number |  no  |  || slug | string |  no  |  || tags | [string] |  no  |  || type | string |  no  |  || updated_at | string |  no  |  |

---

#### [AudienceReq](#AudienceReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || application | string |  no  |  || description | string |  no  |  || file_url | string |  no  |  || headers | [string] |  no  |  || is_active | boolean |  no  |  || name | string |  no  |  || records_count | number |  no  |  || tags | [string] |  no  |  || type | string |  no  |  |

---

#### [Audiences](#Audiences)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[Audience](#Audience)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [BadRequestSchema](#BadRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  || status | string |  no  |  |

---

#### [BigqueryHeadersReq](#BigqueryHeadersReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || query | string |  no  |  || type | string |  no  |  |

---

#### [BigqueryHeadersRes](#BigqueryHeadersRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || headers | [[BigqueryHeadersResHeaders](#BigqueryHeadersResHeaders)] |  no  |  |

---

#### [BigqueryHeadersResHeaders](#BigqueryHeadersResHeaders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || name | string |  no  |  || type | string |  no  |  |

---

#### [Campaign](#Campaign)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || __v | number |  no  |  || _id | string |  no  |  || application | string |  no  |  || created_at | string |  no  |  || datasource | string |  no  |  || description | string |  no  |  || email | [CampaignEmail](#CampaignEmail) |  no  |  || is_active | boolean |  no  |  || name | string |  no  |  || recipient_headers | [RecipientHeaders](#RecipientHeaders) |  no  |  || slug | string |  no  |  || tags | [any] |  no  |  || type | string |  no  |  || updated_at | string |  no  |  |

---

#### [CampaignEmail](#CampaignEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || provider | [CampignEmailProvider](#CampignEmailProvider) |  no  |  || template | [CampaignEmailTemplate](#CampaignEmailTemplate) |  no  |  |

---

#### [CampaignEmailTemplate](#CampaignEmailTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || key | string |  no  |  || value | string |  no  |  |

---

#### [CampaignReq](#CampaignReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || application | string |  no  |  || description | string |  no  |  || file_url | string |  no  |  || headers | [string] |  no  |  || is_active | boolean |  no  |  || name | string |  no  |  || records_count | number |  no  |  || tags | [string] |  no  |  || type | string |  no  |  |

---

#### [Campaigns](#Campaigns)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[Campaign](#Campaign)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [CampignEmailProvider](#CampignEmailProvider)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || from_email | string |  no  |  || from_name | string |  no  |  |

---

#### [EmailProvider](#EmailProvider)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || __v | number |  no  |  || _id | string |  no  |  || api_key | string |  no  |  || application | string |  no  |  || created_at | string |  no  |  || description | string |  no  |  || from_address | [[EmailProviderReqFrom](#EmailProviderReqFrom)] |  no  |  || name | string |  no  |  || provider | string |  no  |  || slug | string |  no  |  || type | string |  no  |  || updated_at | string |  no  |  |

---

#### [EmailProviderReq](#EmailProviderReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || api_key | string |  no  |  || description | string |  no  |  || from_address | [[EmailProviderReqFrom](#EmailProviderReqFrom)] |  no  |  || name | string |  no  |  || provider | string |  no  |  || type | string |  no  |  |

---

#### [EmailProviderReqFrom](#EmailProviderReqFrom)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | string |  no  |  || is_default | boolean |  no  |  || name | string |  no  |  |

---

#### [EmailProviders](#EmailProviders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[EmailProvider](#EmailProvider)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [EmailTemplate](#EmailTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || __v | number |  no  |  || _id | string |  no  |  || attachments | [any] |  no  |  || created_at | string |  no  |  || description | string |  no  |  || from_name | string |  no  |  || headers | [any] |  no  |  || html | [TemplateAndType](#TemplateAndType) |  no  |  || is_internal | boolean |  no  |  || is_system | boolean |  no  |  || name | string |  no  |  || priority | string |  no  |  || published | boolean |  no  |  || slug | string |  no  |  || static_bcc | [any] |  no  |  || static_cc | [any] |  no  |  || static_to | [any] |  no  |  || subject | [TemplateAndType](#TemplateAndType) |  no  |  || tags | [any] |  no  |  || text | [TemplateAndType](#TemplateAndType) |  no  |  || updated_at | string |  no  |  |

---

#### [EmailTemplateDeleteFailureRes](#EmailTemplateDeleteFailureRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  || success | boolean |  no  |  |

---

#### [EmailTemplateDeleteSuccessRes](#EmailTemplateDeleteSuccessRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  || success | boolean |  no  |  |

---

#### [EmailTemplateHeaders](#EmailTemplateHeaders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || key | string |  no  |  || value | string |  no  |  |

---

#### [EmailTemplateKeys](#EmailTemplateKeys)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || bcc | string |  no  |  || cc | string |  no  |  || to | string |  no  |  |

---

#### [EmailTemplateReq](#EmailTemplateReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || attachments | [any] |  no  |  || description | string |  no  |  || headers | [[EmailTemplateHeaders](#EmailTemplateHeaders)] |  no  |  || html | [TemplateAndType](#TemplateAndType) |  no  |  || keys | [EmailTemplateKeys](#EmailTemplateKeys) |  no  |  || name | string |  no  |  || priority | string |  no  |  || reply_to | string |  no  |  || static_bcc | [string] |  no  |  || static_cc | [string] |  no  |  || static_to | [string] |  no  |  || subject | [TemplateAndType](#TemplateAndType) |  no  |  || text | [TemplateAndType](#TemplateAndType) |  no  |  |

---

#### [EmailTemplateRes](#EmailTemplateRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || __v | number |  no  |  || _id | string |  no  |  || attachments | [any] |  no  |  || created_at | string |  no  |  || description | string |  no  |  || headers | [[EmailTemplateHeaders](#EmailTemplateHeaders)] |  no  |  || html | [TemplateAndType](#TemplateAndType) |  no  |  || is_internal | boolean |  no  |  || is_system | boolean |  no  |  || keys | [EmailTemplateKeys](#EmailTemplateKeys) |  no  |  || name | string |  no  |  || priority | string |  no  |  || published | boolean |  no  |  || reply_to | string |  no  |  || slug | string |  no  |  || static_bcc | [string] |  no  |  || static_cc | [string] |  no  |  || static_to | [string] |  no  |  || subject | [TemplateAndType](#TemplateAndType) |  no  |  || tags | [any] |  no  |  || text | [TemplateAndType](#TemplateAndType) |  no  |  || updated_at | string |  no  |  |

---

#### [EmailTemplates](#EmailTemplates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[EmailTemplate](#EmailTemplate)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [EngineRequest](#EngineRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || meta | [MetaStructure](#MetaStructure) |  no  |  || payload | [PayloadStructure](#PayloadStructure) |  no  |  |

---

#### [EngineResponse](#EngineResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || success | boolean |  no  |  |

---

#### [EventSubscription](#EventSubscription)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || __v | number |  no  |  || _id | string |  no  |  || application | string |  no  |  || created_at | string |  no  |  || event | string |  no  |  || is_default | boolean |  no  |  || slug | string |  no  |  || template | [EventSubscriptionTemplate](#EventSubscriptionTemplate) |  no  |  || updated_at | string |  no  |  |

---

#### [EventSubscriptions](#EventSubscriptions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[EventSubscription](#EventSubscription)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [EventSubscriptionTemplate](#EventSubscriptionTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | [EventSubscriptionTemplateEmail](#EventSubscriptionTemplateEmail) |  no  |  || sms | [EventSubscriptionTemplateSms](#EventSubscriptionTemplateSms) |  no  |  |

---

#### [EventSubscriptionTemplateEmail](#EventSubscriptionTemplateEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || subscribed | boolean |  no  |  || template | string |  no  |  |

---

#### [EventSubscriptionTemplateSms](#EventSubscriptionTemplateSms)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || subscribed | boolean |  no  |  || template | string |  no  |  |

---

#### [GetNRecordsCsvReq](#GetNRecordsCsvReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || count | number |  no  |  || header | boolean |  no  |  || url | string |  no  |  |

---

#### [GetNRecordsCsvRes](#GetNRecordsCsvRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[GetNRecordsCsvResItems](#GetNRecordsCsvResItems)] |  no  |  |

---

#### [GetNRecordsCsvResItems](#GetNRecordsCsvResItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | string |  no  |  || firstname | string |  no  |  || lastname | string |  no  |  || orderid | string |  no  |  || phone_number | string |  no  |  |

---

#### [GetStats](#GetStats)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[Stats](#Stats)] |  no  |  |

---

#### [Job](#Job)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || __v | number |  no  |  || _id | string |  no  |  || application | string |  no  |  || campaign | string |  no  |  || completed | boolean |  no  |  || created_at | string |  no  |  || is_active | boolean |  no  |  || updated_at | string |  no  |  |

---

#### [JobLog](#JobLog)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || __v | number |  no  |  || _id | string |  no  |  || campaign | string |  no  |  || created_at | string |  no  |  || imported | any |  no  |  || job | string |  no  |  || processed | any |  no  |  || updated_at | string |  no  |  |

---

#### [JobLogs](#JobLogs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[JobLog](#JobLog)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [Jobs](#Jobs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[Job](#Job)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [Log](#Log)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || application | string |  no  |  || created_at | string |  no  |  || data | any |  no  |  || email | [LogEmail](#LogEmail) |  no  |  || expire_at | string |  no  |  || meta | [LogMeta](#LogMeta) |  no  |  || pushnotification | [LogPushnotification](#LogPushnotification) |  no  |  || service | string |  no  |  || status | string |  no  |  || step | string |  no  |  |

---

#### [LogEmail](#LogEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || template | string |  no  |  |

---

#### [LogMeta](#LogMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || identifier | string |  no  |  || key | string |  no  |  || offset | string |  no  |  || partition | string |  no  |  || topic | string |  no  |  || type | string |  no  |  |

---

#### [LogPushnotification](#LogPushnotification)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || pushtokens | [string] |  no  |  |

---

#### [Logs](#Logs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[Log](#Log)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [MetaStructure](#MetaStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || action | string |  no  |  || job_type | string |  no  |  || timestamp | string |  no  |  || trace | string |  no  |  |

---

#### [NotFound](#NotFound)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  |

---

#### [Notification](#Notification)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || body | string |  no  |  || click_action | string |  no  |  || deeplink | string |  no  |  || icon | string |  no  |  || subtitle | string |  no  |  || title | string |  no  |  |

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || current | number |  no  |  || has_next | boolean |  no  |  || has_previous | boolean |  no  |  || item_total | number |  no  |  || next_id | string |  no  |  || size | number |  no  |  || type | string |  yes  |  |

---

#### [PayloadEmailProviderStructure](#PayloadEmailProviderStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  |

---

#### [PayloadEmailStructure](#PayloadEmailStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || provider | [PayloadEmailProviderStructure](#PayloadEmailProviderStructure) |  no  |  || template | [PayloadEmailTemplateStructure](#PayloadEmailTemplateStructure) |  no  |  |

---

#### [PayloadEmailTemplateStructure](#PayloadEmailTemplateStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || key | string |  no  |  || value | any |  no  |  |

---

#### [PayloadSmsProviderStructure](#PayloadSmsProviderStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  |

---

#### [PayloadSmsStructure](#PayloadSmsStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || provider | [PayloadSmsProviderStructure](#PayloadSmsProviderStructure) |  no  |  || template | [PayloadSmsTemplateStructure](#PayloadSmsTemplateStructure) |  no  |  |

---

#### [PayloadSmsTemplateStructure](#PayloadSmsTemplateStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || key | string |  no  |  || value | any |  no  |  |

---

#### [PayloadStructure](#PayloadStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || application | string |  no  |  || data | [string] |  no  |  || email | [PayloadEmailStructure](#PayloadEmailStructure) |  no  |  || sms | [PayloadSmsStructure](#PayloadSmsStructure) |  no  |  |

---

#### [PushtokenReq](#PushtokenReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || action | string |  no  |  || bundle_identifier | string |  no  |  || push_token | string |  no  |  || unique_device_id | string |  no  |  |

---

#### [PushtokenRes](#PushtokenRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || application_id | string |  no  |  || bundle_identifier | string |  no  |  || created_at | string |  no  |  || expired_at | string |  no  |  || platform | string |  no  |  || push_token | string |  no  |  || type | string |  no  |  || unique_device_id | string |  no  |  || updated_at | string |  no  |  || user_id | string |  no  |  |

---

#### [RecipientHeaders](#RecipientHeaders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | string |  no  |  |

---

#### [SendOtpCommsReq](#SendOtpCommsReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [SendOtpCommsReqData](#SendOtpCommsReqData) |  no  |  || email | [SendOtpCommsReqEmail](#SendOtpCommsReqEmail) |  no  |  || sms | [SendOtpCommsReqSms](#SendOtpCommsReqSms) |  no  |  |

---

#### [SendOtpCommsReqData](#SendOtpCommsReqData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | string |  no  |  || mobile | string |  no  |  || send_same_otp_to_channel | boolean |  no  |  || to | string |  no  |  |

---

#### [SendOtpCommsReqEmail](#SendOtpCommsReqEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || expiry | number |  no  |  || otp_length | number |  no  |  || provider | [SendOtpEmailCommsProvider](#SendOtpEmailCommsProvider) |  no  |  || template | [SendOtpEmailCommsTemplate](#SendOtpEmailCommsTemplate) |  no  |  |

---

#### [SendOtpCommsReqSms](#SendOtpCommsReqSms)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || expiry | number |  no  |  || otp_length | number |  no  |  || provider | [SendOtpSmsCommsProvider](#SendOtpSmsCommsProvider) |  no  |  || template | [SendOtpSmsCommsTemplate](#SendOtpSmsCommsTemplate) |  no  |  |

---

#### [SendOtpCommsRes](#SendOtpCommsRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | [SendOtpCommsResEmail](#SendOtpCommsResEmail) |  no  |  || sms | [SendOtpCommsResSms](#SendOtpCommsResSms) |  no  |  |

---

#### [SendOtpCommsResEmail](#SendOtpCommsResEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  || request_id | string |  no  |  || resend_timer | number |  no  |  || success | boolean |  no  |  || to | string |  no  |  |

---

#### [SendOtpCommsResSms](#SendOtpCommsResSms)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | string |  no  |  || message | string |  no  |  || mobile | string |  no  |  || request_id | string |  no  |  || resend_timer | number |  no  |  || success | boolean |  no  |  |

---

#### [SendOtpEmailCommsProvider](#SendOtpEmailCommsProvider)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || slug | string |  no  |  |

---

#### [SendOtpEmailCommsTemplate](#SendOtpEmailCommsTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || key | string |  no  |  || value | any |  no  |  |

---

#### [SendOtpSmsCommsProvider](#SendOtpSmsCommsProvider)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || slug | string |  no  |  |

---

#### [SendOtpSmsCommsTemplate](#SendOtpSmsCommsTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || key | string |  no  |  || value | any |  no  |  |

---

#### [SmsProvider](#SmsProvider)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || __v | number |  no  |  || _id | string |  no  |  || application | string |  no  |  || authkey | string |  no  |  || created_at | string |  no  |  || description | string |  no  |  || name | string |  no  |  || provider | string |  no  |  || rpt | number |  no  |  || sender | string |  no  |  || slug | string |  no  |  || type | string |  no  |  || updated_at | string |  no  |  || username | string |  no  |  |

---

#### [SmsProviderReq](#SmsProviderReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || authkey | string |  no  |  || description | string |  no  |  || name | string |  no  |  || provider | string |  no  |  || sender | string |  no  |  || type | string |  no  |  || username | string |  no  |  |

---

#### [SmsProviders](#SmsProviders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[SmsProvider](#SmsProvider)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [SmsTemplate](#SmsTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || __v | number |  no  |  || _id | string |  no  |  || created_at | string |  no  |  || description | string |  no  |  || is_internal | boolean |  no  |  || is_system | boolean |  no  |  || message | [SmsTemplateMessage](#SmsTemplateMessage) |  no  |  || name | string |  no  |  || priority | string |  no  |  || published | boolean |  no  |  || slug | string |  no  |  || tags | [any] |  no  |  || template_variables | any |  no  |  || updated_at | string |  no  |  |

---

#### [SmsTemplateDeleteFailureRes](#SmsTemplateDeleteFailureRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  || success | boolean |  no  |  |

---

#### [SmsTemplateDeleteSuccessRes](#SmsTemplateDeleteSuccessRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  || success | boolean |  no  |  |

---

#### [SmsTemplateMessage](#SmsTemplateMessage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || template | string |  no  |  || template_type | string |  no  |  |

---

#### [SmsTemplateReq](#SmsTemplateReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || attachments | [any] |  no  |  || description | string |  no  |  || message | [SmsTemplateMessage](#SmsTemplateMessage) |  no  |  || name | string |  no  |  || priority | string |  no  |  || template_variables | any |  no  |  |

---

#### [SmsTemplateRes](#SmsTemplateRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || __v | number |  no  |  || _id | string |  no  |  || created_at | string |  no  |  || description | string |  no  |  || is_internal | boolean |  no  |  || is_system | boolean |  no  |  || message | [SmsTemplateMessage](#SmsTemplateMessage) |  no  |  || name | string |  no  |  || priority | string |  no  |  || published | boolean |  no  |  || slug | string |  no  |  || tags | [any] |  no  |  || template_variables | any |  no  |  || updated_at | string |  no  |  |

---

#### [SmsTemplates](#SmsTemplates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[SmsTemplate](#SmsTemplate)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [Stats](#Stats)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || imported | any |  no  |  || processed | any |  no  |  |

---

#### [StatsImported](#StatsImported)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || count | number |  no  |  |

---

#### [StatsProcessed](#StatsProcessed)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | [StatsProcessedEmail](#StatsProcessedEmail) |  no  |  || sms | [StatsProcessedSms](#StatsProcessedSms) |  no  |  |

---

#### [StatsProcessedEmail](#StatsProcessedEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || failed | number |  no  |  || success | number |  no  |  || suppressed | number |  no  |  |

---

#### [StatsProcessedSms](#StatsProcessedSms)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || failed | number |  no  |  || success | number |  no  |  || suppressed | number |  no  |  |

---

#### [SystemEmailTemplate](#SystemEmailTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || __v | number |  no  |  || _id | string |  no  |  || attachments | [any] |  no  |  || created_at | string |  no  |  || description | string |  no  |  || from_name | string |  no  |  || headers | [any] |  no  |  || html | [TemplateAndType](#TemplateAndType) |  no  |  || is_internal | boolean |  no  |  || is_system | boolean |  no  |  || name | string |  no  |  || priority | string |  no  |  || published | boolean |  no  |  || slug | string |  no  |  || static_bcc | [any] |  no  |  || static_cc | [any] |  no  |  || static_to | [any] |  no  |  || subject | [TemplateAndType](#TemplateAndType) |  no  |  || tags | [any] |  no  |  || text | [TemplateAndType](#TemplateAndType) |  no  |  || updated_at | string |  no  |  |

---

#### [SystemEmailTemplates](#SystemEmailTemplates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[SystemEmailTemplate](#SystemEmailTemplate)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [SystemNotification](#SystemNotification)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || created_at | string |  no  |  || group | string |  no  |  || notification | [Notification](#Notification) |  no  |  || settings | [SystemNotificationUser](#SystemNotificationUser) |  no  |  || user | [SystemNotificationUser](#SystemNotificationUser) |  no  |  |

---

#### [SystemNotifications](#SystemNotifications)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[SystemNotification](#SystemNotification)] |  no  |  || last_read_anchor | number |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [SystemNotificationSettings](#SystemNotificationSettings)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || priority | string |  no  |  || sound | boolean |  no  |  || time_to_live | string |  no  |  |

---

#### [SystemNotificationsPage](#SystemNotificationsPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || current | number |  no  |  || has_next | boolean |  no  |  || item_total | number |  no  |  || size | number |  no  |  || type | string |  no  |  |

---

#### [SystemNotificationUser](#SystemNotificationUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || type | string |  no  |  || value | string |  no  |  |

---

#### [SystemSmsTemplate](#SystemSmsTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || __v | number |  no  |  || _id | string |  no  |  || created_at | string |  no  |  || description | string |  no  |  || is_internal | boolean |  no  |  || is_system | boolean |  no  |  || message | [SmsTemplateMessage](#SmsTemplateMessage) |  no  |  || name | string |  no  |  || priority | string |  no  |  || published | boolean |  no  |  || slug | string |  no  |  || tags | [any] |  no  |  || template_variables | any |  no  |  || updated_at | string |  no  |  |

---

#### [SystemSmsTemplates](#SystemSmsTemplates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[SystemSmsTemplate](#SystemSmsTemplate)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [TemplateAndType](#TemplateAndType)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || template | string |  no  |  || template_type | string |  no  |  |

---

#### [TriggerJobRequest](#TriggerJobRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || job_id | string |  no  |  |

---

#### [TriggerJobResponse](#TriggerJobResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || status | number |  no  |  |

---

#### [VerifyOtpCommsErrorRes](#VerifyOtpCommsErrorRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  || success | boolean |  no  |  |

---

#### [VerifyOtpCommsReq](#VerifyOtpCommsReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || otp | string |  no  |  || request_id | string |  no  |  |

---

#### [VerifyOtpCommsSuccessRes](#VerifyOtpCommsSuccessRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | string |  no  |  || message | string |  no  |  || mobile | string |  no  |  || success | boolean |  no  |  |

---




