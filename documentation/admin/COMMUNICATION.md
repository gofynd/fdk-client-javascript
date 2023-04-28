




##### [Back to Admin docs](./README.md)

## Communication Methods
Manages email, sms, push notifications sent to users

* [sendSellerCommunicationAsynchronously](#sendsellercommunicationasynchronously)
* [sendSellerCommunicationSynchronously](#sendsellercommunicationsynchronously)



## Methods with example and description




### sendSellerCommunicationAsynchronously
Send email or sms asynchronously



```javascript
// Promise
const promise = adminClient.communication.sendSellerCommunicationAsynchronously({  body : value });

// Async/Await
const data = await adminClient.communication.sendSellerCommunicationAsynchronously({  body : value });
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
const promise = adminClient.communication.sendSellerCommunicationSynchronously({  body : value });

// Async/Await
const data = await adminClient.communication.sendSellerCommunicationSynchronously({  body : value });
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
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | description | string? |  yes  |  |
 | file_url | string? |  yes  |  |
 | headers | [string]? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 | records_count | number? |  yes  |  |
 | slug | string? |  yes  |  |
 | tags | [string]? |  yes  |  |
 | type | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [AudienceReq](#AudienceReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string? |  yes  |  |
 | description | string? |  yes  |  |
 | file_url | string? |  yes  |  |
 | headers | [string]? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 | records_count | number? |  yes  |  |
 | tags | [string]? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [Audiences](#Audiences)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Audience](#Audience)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [BadRequestSchema](#BadRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | Failure message. |
 | status | string? |  yes  | Response status. |
 

---

#### [BigqueryHeadersReq](#BigqueryHeadersReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | query | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [BigqueryHeadersRes](#BigqueryHeadersRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | headers | [[BigqueryHeadersResHeaders](#BigqueryHeadersResHeaders)]? |  yes  |  |
 

---

#### [BigqueryHeadersResHeaders](#BigqueryHeadersResHeaders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [Campaign](#Campaign)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | datasource | string? |  yes  |  |
 | description | string? |  yes  |  |
 | email | [CampaignEmail](#CampaignEmail)? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 | recipient_headers | [RecipientHeaders](#RecipientHeaders)? |  yes  |  |
 | slug | string? |  yes  |  |
 | tags | [any]? |  yes  |  |
 | type | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [CampaignEmail](#CampaignEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | provider | [CampignEmailProvider](#CampignEmailProvider)? |  yes  |  |
 | template | [CampaignEmailTemplate](#CampaignEmailTemplate)? |  yes  |  |
 

---

#### [CampaignEmailTemplate](#CampaignEmailTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [CampaignReq](#CampaignReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string? |  yes  |  |
 | description | string? |  yes  |  |
 | file_url | string? |  yes  |  |
 | headers | [string]? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 | records_count | number? |  yes  |  |
 | tags | [string]? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [Campaigns](#Campaigns)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Campaign](#Campaign)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [CampignEmailProvider](#CampignEmailProvider)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | from_email | string? |  yes  |  |
 | from_name | string? |  yes  |  |
 

---

#### [EmailProvider](#EmailProvider)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | api_key | string? |  yes  |  |
 | application | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | description | string? |  yes  |  |
 | from_address | [[EmailProviderReqFrom](#EmailProviderReqFrom)]? |  yes  |  |
 | name | string? |  yes  |  |
 | provider | string? |  yes  |  |
 | slug | string? |  yes  |  |
 | type | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [EmailProviderReq](#EmailProviderReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api_key | string? |  yes  |  |
 | description | string? |  yes  |  |
 | from_address | [[EmailProviderReqFrom](#EmailProviderReqFrom)]? |  yes  |  |
 | name | string? |  yes  |  |
 | provider | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [EmailProviderReqFrom](#EmailProviderReqFrom)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 | is_default | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [EmailProviders](#EmailProviders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[EmailProvider](#EmailProvider)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [EmailTemplate](#EmailTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | attachments | [any]? |  yes  |  |
 | created_at | string? |  yes  |  |
 | description | string? |  yes  |  |
 | from_name | string? |  yes  |  |
 | headers | [any]? |  yes  |  |
 | html | [TemplateAndType](#TemplateAndType)? |  yes  |  |
 | is_internal | boolean? |  yes  |  |
 | is_system | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 | priority | string? |  yes  |  |
 | published | boolean? |  yes  |  |
 | slug | string? |  yes  |  |
 | static_bcc | [any]? |  yes  |  |
 | static_cc | [any]? |  yes  |  |
 | static_to | [any]? |  yes  |  |
 | subject | [TemplateAndType](#TemplateAndType)? |  yes  |  |
 | tags | [any]? |  yes  |  |
 | text | [TemplateAndType](#TemplateAndType)? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [EmailTemplateDeleteFailureRes](#EmailTemplateDeleteFailureRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [EmailTemplateDeleteSuccessRes](#EmailTemplateDeleteSuccessRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [EmailTemplateHeaders](#EmailTemplateHeaders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [EmailTemplateKeys](#EmailTemplateKeys)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bcc | string? |  yes  |  |
 | cc | string? |  yes  |  |
 | to | string? |  yes  |  |
 

---

#### [EmailTemplateReq](#EmailTemplateReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attachments | [any]? |  yes  |  |
 | description | string? |  yes  |  |
 | headers | [[EmailTemplateHeaders](#EmailTemplateHeaders)]? |  yes  |  |
 | html | [TemplateAndType](#TemplateAndType)? |  yes  |  |
 | keys | [EmailTemplateKeys](#EmailTemplateKeys)? |  yes  |  |
 | name | string? |  yes  |  |
 | priority | string? |  yes  |  |
 | reply_to | string? |  yes  |  |
 | static_bcc | [string]? |  yes  |  |
 | static_cc | [string]? |  yes  |  |
 | static_to | [string]? |  yes  |  |
 | subject | [TemplateAndType](#TemplateAndType)? |  yes  |  |
 | text | [TemplateAndType](#TemplateAndType)? |  yes  |  |
 

---

#### [EmailTemplateRes](#EmailTemplateRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | attachments | [any]? |  yes  |  |
 | created_at | string? |  yes  |  |
 | description | string? |  yes  |  |
 | headers | [[EmailTemplateHeaders](#EmailTemplateHeaders)]? |  yes  |  |
 | html | [TemplateAndType](#TemplateAndType)? |  yes  |  |
 | is_internal | boolean? |  yes  |  |
 | is_system | boolean? |  yes  |  |
 | keys | [EmailTemplateKeys](#EmailTemplateKeys)? |  yes  |  |
 | name | string? |  yes  |  |
 | priority | string? |  yes  |  |
 | published | boolean? |  yes  |  |
 | reply_to | string? |  yes  |  |
 | slug | string? |  yes  |  |
 | static_bcc | [string]? |  yes  |  |
 | static_cc | [string]? |  yes  |  |
 | static_to | [string]? |  yes  |  |
 | subject | [TemplateAndType](#TemplateAndType)? |  yes  |  |
 | tags | [any]? |  yes  |  |
 | text | [TemplateAndType](#TemplateAndType)? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [EmailTemplates](#EmailTemplates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[EmailTemplate](#EmailTemplate)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [EngineRequest](#EngineRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | meta | [MetaStructure](#MetaStructure)? |  yes  |  |
 | payload | [PayloadStructure](#PayloadStructure)? |  yes  |  |
 

---

#### [EngineResponse](#EngineResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean? |  yes  |  |
 

---

#### [EventSubscription](#EventSubscription)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | event | string? |  yes  |  |
 | is_default | boolean? |  yes  |  |
 | slug | string? |  yes  |  |
 | template | [EventSubscriptionTemplate](#EventSubscriptionTemplate)? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [EventSubscriptions](#EventSubscriptions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[EventSubscription](#EventSubscription)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [EventSubscriptionTemplate](#EventSubscriptionTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | [EventSubscriptionTemplateEmail](#EventSubscriptionTemplateEmail)? |  yes  |  |
 | sms | [EventSubscriptionTemplateSms](#EventSubscriptionTemplateSms)? |  yes  |  |
 

---

#### [EventSubscriptionTemplateEmail](#EventSubscriptionTemplateEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | subscribed | boolean? |  yes  |  |
 | template | string? |  yes  |  |
 

---

#### [EventSubscriptionTemplateSms](#EventSubscriptionTemplateSms)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | subscribed | boolean? |  yes  |  |
 | template | string? |  yes  |  |
 

---

#### [GetNRecordsCsvReq](#GetNRecordsCsvReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number? |  yes  |  |
 | header | boolean? |  yes  |  |
 | url | string? |  yes  |  |
 

---

#### [GetNRecordsCsvRes](#GetNRecordsCsvRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[GetNRecordsCsvResItems](#GetNRecordsCsvResItems)]? |  yes  |  |
 

---

#### [GetNRecordsCsvResItems](#GetNRecordsCsvResItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 | firstname | string? |  yes  |  |
 | lastname | string? |  yes  |  |
 | orderid | string? |  yes  |  |
 | phone_number | string? |  yes  |  |
 

---

#### [GetStats](#GetStats)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Stats](#Stats)]? |  yes  |  |
 

---

#### [Job](#Job)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | campaign | string? |  yes  |  |
 | completed | boolean? |  yes  |  |
 | created_at | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [JobLog](#JobLog)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | campaign | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | imported | any? |  yes  |  |
 | job | string? |  yes  |  |
 | processed | any? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [JobLogs](#JobLogs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[JobLog](#JobLog)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [Jobs](#Jobs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Job](#Job)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [Log](#Log)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | data | any? |  yes  |  |
 | email | [LogEmail](#LogEmail)? |  yes  |  |
 | expire_at | string? |  yes  |  |
 | meta | [LogMeta](#LogMeta)? |  yes  |  |
 | pushnotification | [LogPushnotification](#LogPushnotification)? |  yes  |  |
 | service | string? |  yes  |  |
 | status | string? |  yes  |  |
 | step | string? |  yes  |  |
 

---

#### [LogEmail](#LogEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | template | string? |  yes  |  |
 

---

#### [LogMeta](#LogMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier | string? |  yes  |  |
 | key | string? |  yes  |  |
 | offset | string? |  yes  |  |
 | partition | string? |  yes  |  |
 | topic | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [LogPushnotification](#LogPushnotification)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pushtokens | [string]? |  yes  |  |
 

---

#### [Logs](#Logs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Log](#Log)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [MetaStructure](#MetaStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string? |  yes  |  |
 | job_type | string? |  yes  |  |
 | timestamp | string? |  yes  |  |
 | trace | string? |  yes  |  |
 

---

#### [NotFound](#NotFound)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | Failure message. |
 

---

#### [Notification](#Notification)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | body | string? |  yes  |  |
 | click_action | string? |  yes  |  |
 | deeplink | string? |  yes  |  |
 | icon | string? |  yes  |  |
 | subtitle | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | has_previous | boolean? |  yes  |  |
 | item_total | number? |  yes  |  |
 | next_id | string? |  yes  |  |
 | size | number? |  yes  |  |
 | type | string |  no  |  |
 

---

#### [PayloadEmailProviderStructure](#PayloadEmailProviderStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 

---

#### [PayloadEmailStructure](#PayloadEmailStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | provider | [PayloadEmailProviderStructure](#PayloadEmailProviderStructure)? |  yes  |  |
 | template | [PayloadEmailTemplateStructure](#PayloadEmailTemplateStructure)? |  yes  |  |
 

---

#### [PayloadEmailTemplateStructure](#PayloadEmailTemplateStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string? |  yes  |  |
 | value | any? |  yes  |  |
 

---

#### [PayloadSmsProviderStructure](#PayloadSmsProviderStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 

---

#### [PayloadSmsStructure](#PayloadSmsStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | provider | [PayloadSmsProviderStructure](#PayloadSmsProviderStructure)? |  yes  |  |
 | template | [PayloadSmsTemplateStructure](#PayloadSmsTemplateStructure)? |  yes  |  |
 

---

#### [PayloadSmsTemplateStructure](#PayloadSmsTemplateStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string? |  yes  |  |
 | value | any? |  yes  |  |
 

---

#### [PayloadStructure](#PayloadStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string? |  yes  |  |
 | data | [string]? |  yes  |  |
 | email | [PayloadEmailStructure](#PayloadEmailStructure)? |  yes  |  |
 | sms | [PayloadSmsStructure](#PayloadSmsStructure)? |  yes  |  |
 

---

#### [PushtokenReq](#PushtokenReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string? |  yes  |  |
 | bundle_identifier | string? |  yes  |  |
 | push_token | string? |  yes  |  |
 | unique_device_id | string? |  yes  |  |
 

---

#### [PushtokenRes](#PushtokenRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | application_id | string? |  yes  |  |
 | bundle_identifier | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | expired_at | string? |  yes  |  |
 | platform | string? |  yes  |  |
 | push_token | string? |  yes  |  |
 | type | string? |  yes  |  |
 | unique_device_id | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [RecipientHeaders](#RecipientHeaders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 

---

#### [SendOtpCommsReq](#SendOtpCommsReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [SendOtpCommsReqData](#SendOtpCommsReqData)? |  yes  |  |
 | email | [SendOtpCommsReqEmail](#SendOtpCommsReqEmail)? |  yes  |  |
 | sms | [SendOtpCommsReqSms](#SendOtpCommsReqSms)? |  yes  |  |
 

---

#### [SendOtpCommsReqData](#SendOtpCommsReqData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 | send_same_otp_to_channel | boolean? |  yes  |  |
 | to | string? |  yes  |  |
 

---

#### [SendOtpCommsReqEmail](#SendOtpCommsReqEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | expiry | number? |  yes  |  |
 | otp_length | number? |  yes  |  |
 | template | [SendOtpEmailCommsTemplate](#SendOtpEmailCommsTemplate)? |  yes  |  |
 

---

#### [SendOtpCommsReqSms](#SendOtpCommsReqSms)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | expiry | number? |  yes  |  |
 | otp_length | number? |  yes  |  |
 | provider | [SendOtpSmsCommsProvider](#SendOtpSmsCommsProvider)? |  yes  |  |
 | template | [SendOtpSmsCommsTemplate](#SendOtpSmsCommsTemplate)? |  yes  |  |
 

---

#### [SendOtpCommsRes](#SendOtpCommsRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | [SendOtpCommsResEmail](#SendOtpCommsResEmail)? |  yes  |  |
 | sms | [SendOtpCommsResSms](#SendOtpCommsResSms)? |  yes  |  |
 

---

#### [SendOtpCommsResEmail](#SendOtpCommsResEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | resend_timer | number? |  yes  |  |
 | success | boolean? |  yes  |  |
 | to | string? |  yes  |  |
 

---

#### [SendOtpCommsResSms](#SendOtpCommsResSms)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | message | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | resend_timer | number? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [SendOtpEmailCommsTemplate](#SendOtpEmailCommsTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string? |  yes  |  |
 | value | any? |  yes  |  |
 

---

#### [SendOtpSmsCommsProvider](#SendOtpSmsCommsProvider)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [SendOtpSmsCommsTemplate](#SendOtpSmsCommsTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string? |  yes  |  |
 | value | any? |  yes  |  |
 

---

#### [SmsProvider](#SmsProvider)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | authkey | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | description | string? |  yes  |  |
 | name | string? |  yes  |  |
 | provider | string? |  yes  |  |
 | rpt | number? |  yes  |  |
 | sender | string? |  yes  |  |
 | slug | string? |  yes  |  |
 | type | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | username | string? |  yes  |  |
 

---

#### [SmsProviderReq](#SmsProviderReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | authkey | string? |  yes  |  |
 | description | string? |  yes  |  |
 | name | string? |  yes  |  |
 | provider | string? |  yes  |  |
 | sender | string? |  yes  |  |
 | type | string? |  yes  |  |
 | username | string? |  yes  |  |
 

---

#### [SmsProviders](#SmsProviders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SmsProvider](#SmsProvider)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [SmsTemplate](#SmsTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | description | string? |  yes  |  |
 | is_internal | boolean? |  yes  |  |
 | is_system | boolean? |  yes  |  |
 | message | [SmsTemplateMessage](#SmsTemplateMessage)? |  yes  |  |
 | name | string? |  yes  |  |
 | priority | string? |  yes  |  |
 | published | boolean? |  yes  |  |
 | slug | string? |  yes  |  |
 | tags | [any]? |  yes  |  |
 | template_variables | any? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [SmsTemplateDeleteFailureRes](#SmsTemplateDeleteFailureRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [SmsTemplateDeleteSuccessRes](#SmsTemplateDeleteSuccessRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [SmsTemplateMessage](#SmsTemplateMessage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | template | string? |  yes  |  |
 | template_type | string? |  yes  |  |
 

---

#### [SmsTemplateReq](#SmsTemplateReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attachments | [any]? |  yes  |  |
 | description | string? |  yes  |  |
 | message | [SmsTemplateMessage](#SmsTemplateMessage)? |  yes  |  |
 | name | string? |  yes  |  |
 | priority | string? |  yes  |  |
 | template_variables | any? |  yes  |  |
 

---

#### [SmsTemplateRes](#SmsTemplateRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | description | string? |  yes  |  |
 | is_internal | boolean? |  yes  |  |
 | is_system | boolean? |  yes  |  |
 | message | [SmsTemplateMessage](#SmsTemplateMessage)? |  yes  |  |
 | name | string? |  yes  |  |
 | priority | string? |  yes  |  |
 | published | boolean? |  yes  |  |
 | slug | string? |  yes  |  |
 | tags | [any]? |  yes  |  |
 | template_variables | any? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [SmsTemplates](#SmsTemplates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SmsTemplate](#SmsTemplate)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [Stats](#Stats)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | imported | any? |  yes  |  |
 | processed | any? |  yes  |  |
 

---

#### [StatsImported](#StatsImported)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number? |  yes  |  |
 

---

#### [StatsProcessed](#StatsProcessed)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | [StatsProcessedEmail](#StatsProcessedEmail)? |  yes  |  |
 | sms | [StatsProcessedSms](#StatsProcessedSms)? |  yes  |  |
 

---

#### [StatsProcessedEmail](#StatsProcessedEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | failed | number? |  yes  |  |
 | success | number? |  yes  |  |
 | suppressed | number? |  yes  |  |
 

---

#### [StatsProcessedSms](#StatsProcessedSms)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | failed | number? |  yes  |  |
 | success | number? |  yes  |  |
 | suppressed | number? |  yes  |  |
 

---

#### [SystemEmailTemplate](#SystemEmailTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | attachments | [any]? |  yes  |  |
 | created_at | string? |  yes  |  |
 | description | string? |  yes  |  |
 | from_name | string? |  yes  |  |
 | headers | [any]? |  yes  |  |
 | html | [TemplateAndType](#TemplateAndType)? |  yes  |  |
 | is_internal | boolean? |  yes  |  |
 | is_system | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 | priority | string? |  yes  |  |
 | published | boolean? |  yes  |  |
 | slug | string? |  yes  |  |
 | static_bcc | [any]? |  yes  |  |
 | static_cc | [any]? |  yes  |  |
 | static_to | [any]? |  yes  |  |
 | subject | [TemplateAndType](#TemplateAndType)? |  yes  |  |
 | tags | [any]? |  yes  |  |
 | text | [TemplateAndType](#TemplateAndType)? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [SystemEmailTemplates](#SystemEmailTemplates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SystemEmailTemplate](#SystemEmailTemplate)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [SystemNotification](#SystemNotification)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | group | string? |  yes  |  |
 | notification | [Notification](#Notification)? |  yes  |  |
 | settings | [SystemNotificationUser](#SystemNotificationUser)? |  yes  |  |
 | user | [SystemNotificationUser](#SystemNotificationUser)? |  yes  |  |
 

---

#### [SystemNotifications](#SystemNotifications)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SystemNotification](#SystemNotification)]? |  yes  |  |
 | last_read_anchor | number? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [SystemNotificationSettings](#SystemNotificationSettings)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | priority | string? |  yes  |  |
 | sound | boolean? |  yes  |  |
 | time_to_live | string? |  yes  |  |
 

---

#### [SystemNotificationsPage](#SystemNotificationsPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | item_total | number? |  yes  |  |
 | size | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [SystemNotificationUser](#SystemNotificationUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [SystemSmsTemplate](#SystemSmsTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | description | string? |  yes  |  |
 | is_internal | boolean? |  yes  |  |
 | is_system | boolean? |  yes  |  |
 | message | [SmsTemplateMessage](#SmsTemplateMessage)? |  yes  |  |
 | name | string? |  yes  |  |
 | priority | string? |  yes  |  |
 | published | boolean? |  yes  |  |
 | slug | string? |  yes  |  |
 | tags | [any]? |  yes  |  |
 | template_variables | any? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [SystemSmsTemplates](#SystemSmsTemplates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SystemSmsTemplate](#SystemSmsTemplate)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [TemplateAndType](#TemplateAndType)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | template | string? |  yes  |  |
 | template_type | string? |  yes  |  |
 

---

#### [TriggerJobRequest](#TriggerJobRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | job_id | string? |  yes  |  |
 

---

#### [TriggerJobResponse](#TriggerJobResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | number? |  yes  |  |
 

---

#### [VerifyOtpCommsErrorRes](#VerifyOtpCommsErrorRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [VerifyOtpCommsReq](#VerifyOtpCommsReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | otp | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 

---

#### [VerifyOtpCommsSuccessRes](#VerifyOtpCommsSuccessRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | message | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---




