



##### [Back to Platform docs](./README.md)

## Communication Methods
Manages email, sms, push notifications sent to users
* [getCampaigns](#getcampaigns)
* [createCampaign](#createcampaign)
* [getCampaignById](#getcampaignbyid)
* [updateCampaignById](#updatecampaignbyid)
* [getStatsOfCampaignById](#getstatsofcampaignbyid)
* [getAudiences](#getaudiences)
* [createAudience](#createaudience)
* [getBigqueryHeaders](#getbigqueryheaders)
* [getAudienceById](#getaudiencebyid)
* [updateAudienceById](#updateaudiencebyid)
* [getNSampleRecordsFromCsv](#getnsamplerecordsfromcsv)
* [getEmailProviders](#getemailproviders)
* [createEmailProvider](#createemailprovider)
* [getEmailProviderById](#getemailproviderbyid)
* [updateEmailProviderById](#updateemailproviderbyid)
* [getEmailTemplates](#getemailtemplates)
* [createEmailTemplate](#createemailtemplate)
* [getSystemEmailTemplates](#getsystememailtemplates)
* [getEmailTemplateById](#getemailtemplatebyid)
* [updateEmailTemplateById](#updateemailtemplatebyid)
* [deleteEmailTemplateById](#deleteemailtemplatebyid)
* [getEventSubscriptions](#geteventsubscriptions)
* [getJobs](#getjobs)
* [triggerCampaignJob](#triggercampaignjob)
* [getJobLogs](#getjoblogs)
* [getCommunicationLogs](#getcommunicationlogs)
* [getSystemNotifications](#getsystemnotifications)
* [getSmsProviders](#getsmsproviders)
* [createSmsProvider](#createsmsprovider)
* [getSmsProviderById](#getsmsproviderbyid)
* [updateSmsProviderById](#updatesmsproviderbyid)
* [getSmsTemplates](#getsmstemplates)
* [createSmsTemplate](#createsmstemplate)
* [getSmsTemplateById](#getsmstemplatebyid)
* [updateSmsTemplateById](#updatesmstemplatebyid)
* [deleteSmsTemplateById](#deletesmstemplatebyid)
* [getSystemSystemTemplates](#getsystemsystemtemplates)



## Methods with example and description


### getCampaigns
Get campaigns



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getCampaigns({  pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getCampaigns({  pageNo : value,
 pageSize : value,
 sort : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on created_at |  



Get campaigns

*Returned Response:*




[Campaigns](#Campaigns)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/Campaigns"
}
```
</details>

</details>









---


### createCampaign
Create campaign



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.createCampaign({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.createCampaign({  body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |  
| body | [CampaignReq](#CampaignReq) | yes | Request body |


Create campaign

*Returned Response:*




[Campaign](#Campaign)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/Campaign"
}
```
</details>

</details>









---


### getCampaignById
Get campaign by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getCampaignById({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getCampaignById({  id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Campaign id |  



Get campaign by id

*Returned Response:*




[Campaign](#Campaign)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/Campaign"
}
```
</details>

</details>









---


### updateCampaignById
Update campaign by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.updateCampaignById({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.updateCampaignById({  id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Campaign id |  
| body | [CampaignReq](#CampaignReq) | yes | Request body |


Update campaign by id

*Returned Response:*




[Campaign](#Campaign)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/Campaign"
}
```
</details>

</details>









---


### getStatsOfCampaignById
Get stats of campaign by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getStatsOfCampaignById({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getStatsOfCampaignById({  id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Campaign id |  



Get stats of campaign by id

*Returned Response:*




[GetStats](#GetStats)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/GetStats"
}
```
</details>

</details>









---


### getAudiences
Get audiences



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getAudiences({  pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getAudiences({  pageNo : value,
 pageSize : value,
 sort : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on created_at |  



Get audiences

*Returned Response:*




[Audiences](#Audiences)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/Audiences"
}
```
</details>

</details>









---


### createAudience
Create audience



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.createAudience({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.createAudience({  body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |  
| body | [AudienceReq](#AudienceReq) | yes | Request body |


Create audience

*Returned Response:*




[Audience](#Audience)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/Audience"
}
```
</details>

</details>









---


### getBigqueryHeaders
Get bigquery headers



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getBigqueryHeaders({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getBigqueryHeaders({  body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |  
| body | [BigqueryHeadersReq](#BigqueryHeadersReq) | yes | Request body |


Get bigquery headers

*Returned Response:*




[BigqueryHeadersRes](#BigqueryHeadersRes)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/BigqueryHeadersRes"
}
```
</details>

</details>









---


### getAudienceById
Get audience by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getAudienceById({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getAudienceById({  id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Audience id |  



Get audience by id

*Returned Response:*




[Audience](#Audience)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/Audience"
}
```
</details>

</details>









---


### updateAudienceById
Update audience by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.updateAudienceById({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.updateAudienceById({  id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Audience id |  
| body | [AudienceReq](#AudienceReq) | yes | Request body |


Update audience by id

*Returned Response:*




[Audience](#Audience)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/Audience"
}
```
</details>

</details>









---


### getNSampleRecordsFromCsv
Get n sample records from csv



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getNSampleRecordsFromCsv({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getNSampleRecordsFromCsv({  body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |  
| body | [GetNRecordsCsvReq](#GetNRecordsCsvReq) | yes | Request body |


Get n sample records from csv

*Returned Response:*




[GetNRecordsCsvRes](#GetNRecordsCsvRes)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/GetNRecordsCsvRes"
}
```
</details>

</details>









---


### getEmailProviders
Get email providers



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getEmailProviders({  pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getEmailProviders({  pageNo : value,
 pageSize : value,
 sort : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on created_at |  



Get email providers

*Returned Response:*




[EmailProviders](#EmailProviders)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/EmailProviders"
}
```
</details>

</details>









---


### createEmailProvider
Create email provider



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.createEmailProvider({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.createEmailProvider({  body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |  
| body | [EmailProviderReq](#EmailProviderReq) | yes | Request body |


Create email provider

*Returned Response:*




[EmailProvider](#EmailProvider)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/EmailProvider"
}
```
</details>

</details>









---


### getEmailProviderById
Get email provider by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getEmailProviderById({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getEmailProviderById({  id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Email provider id |  



Get email provider by id

*Returned Response:*




[EmailProvider](#EmailProvider)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/EmailProvider"
}
```
</details>

</details>









---


### updateEmailProviderById
Update email provider by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.updateEmailProviderById({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.updateEmailProviderById({  id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Email provider id |  
| body | [EmailProviderReq](#EmailProviderReq) | yes | Request body |


Update email provider by id

*Returned Response:*




[EmailProvider](#EmailProvider)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/EmailProvider"
}
```
</details>

</details>









---


### getEmailTemplates
Get email templates



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getEmailTemplates({  pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getEmailTemplates({  pageNo : value,
 pageSize : value,
 sort : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on created_at |  



Get email templates

*Returned Response:*




[EmailTemplates](#EmailTemplates)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/EmailTemplates"
}
```
</details>

</details>









---


### createEmailTemplate
Create email template



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.createEmailTemplate({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.createEmailTemplate({  body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |  
| body | [EmailTemplateReq](#EmailTemplateReq) | yes | Request body |


Create email template

*Returned Response:*




[EmailTemplateRes](#EmailTemplateRes)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/EmailTemplateRes"
}
```
</details>

</details>









---


### getSystemEmailTemplates
Get system email templates



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getSystemEmailTemplates({  pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getSystemEmailTemplates({  pageNo : value,
 pageSize : value,
 sort : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on created_at |  



Get system email templates

*Returned Response:*




[SystemEmailTemplates](#SystemEmailTemplates)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/SystemEmailTemplates"
}
```
</details>

</details>









---


### getEmailTemplateById
Get email template by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getEmailTemplateById({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getEmailTemplateById({  id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Email template id |  



Get email template by id

*Returned Response:*




[EmailTemplate](#EmailTemplate)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/EmailTemplate"
}
```
</details>

</details>









---


### updateEmailTemplateById
Update email template by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.updateEmailTemplateById({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.updateEmailTemplateById({  id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Email template id |  
| body | [EmailTemplateReq](#EmailTemplateReq) | yes | Request body |


Update email template by id

*Returned Response:*




[EmailTemplateRes](#EmailTemplateRes)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/EmailTemplateRes"
}
```
</details>

</details>









---


### deleteEmailTemplateById
Delete email template by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.deleteEmailTemplateById({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.deleteEmailTemplateById({  id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Email template id |  



Delete email template by id

*Returned Response:*




[EmailTemplateDeleteSuccessRes](#EmailTemplateDeleteSuccessRes)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/EmailTemplateDeleteSuccessRes"
}
```
</details>

</details>









---


### getEventSubscriptions
Get event subscriptions



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getEventSubscriptions({  pageNo : value,
 pageSize : value,
 populate : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getEventSubscriptions({  pageNo : value,
 pageSize : value,
 populate : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| populate | string | no | populate fields |  



Get event subscriptions

*Returned Response:*




[EventSubscriptions](#EventSubscriptions)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/EventSubscriptions"
}
```
</details>

</details>









---


### getJobs
Get jobs



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getJobs({  pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getJobs({  pageNo : value,
 pageSize : value,
 sort : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on created_at |  



Get jobs

*Returned Response:*




[Jobs](#Jobs)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/Jobs"
}
```
</details>

</details>









---


### triggerCampaignJob
Trigger campaign job



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.triggerCampaignJob({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.triggerCampaignJob({  body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |  
| body | [TriggerJobRequest](#TriggerJobRequest) | yes | Request body |


Trigger campaign job

*Returned Response:*




[TriggerJobResponse](#TriggerJobResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/TriggerJobResponse"
}
```
</details>

</details>









---


### getJobLogs
Get job logs



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getJobLogs({  pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getJobLogs({  pageNo : value,
 pageSize : value,
 sort : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on created_at |  



Get job logs

*Returned Response:*




[JobLogs](#JobLogs)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/JobLogs"
}
```
</details>

</details>









---


### getCommunicationLogs
Get communication logs



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getCommunicationLogs({  pageId : value,
 pageSize : value,
 sort : value,
 query : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getCommunicationLogs({  pageId : value,
 pageSize : value,
 sort : value,
 query : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageId | string | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on _id |    
| query | Object | no |  |  



Get communication logs

*Returned Response:*




[Logs](#Logs)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/Logs"
}
```
</details>

</details>









---


### getSystemNotifications
Get system notifications



```javascript
// Promise
const promise = client.communication.getSystemNotifications({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.communication.getSystemNotifications({  pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |    
| pageNo | number | no |  |    
| pageSize | number | no |  |  



Get system notifications

*Returned Response:*




[SystemNotifications](#SystemNotifications)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/SystemNotifications"
}
```
</details>

</details>









---


### getSmsProviders
Get sms providers



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getSmsProviders({  pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getSmsProviders({  pageNo : value,
 pageSize : value,
 sort : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on created_at |  



Get sms providers

*Returned Response:*




[SmsProviders](#SmsProviders)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/SmsProviders"
}
```
</details>

</details>









---


### createSmsProvider
Create sms provider



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.createSmsProvider({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.createSmsProvider({  body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |  
| body | [SmsProviderReq](#SmsProviderReq) | yes | Request body |


Create sms provider

*Returned Response:*




[SmsProvider](#SmsProvider)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/SmsProvider"
}
```
</details>

</details>









---


### getSmsProviderById
Get sms provider by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getSmsProviderById({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getSmsProviderById({  id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Sms provider id |  



Get sms provider by id

*Returned Response:*




[SmsProvider](#SmsProvider)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/SmsProvider"
}
```
</details>

</details>









---


### updateSmsProviderById
Update sms provider by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.updateSmsProviderById({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.updateSmsProviderById({  id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Sms provider id |  
| body | [SmsProviderReq](#SmsProviderReq) | yes | Request body |


Update sms provider by id

*Returned Response:*




[SmsProvider](#SmsProvider)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/SmsProvider"
}
```
</details>

</details>









---


### getSmsTemplates
Get sms templates



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getSmsTemplates({  pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getSmsTemplates({  pageNo : value,
 pageSize : value,
 sort : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on created_at |  



Get sms templates

*Returned Response:*




[SmsTemplates](#SmsTemplates)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/SmsTemplates"
}
```
</details>

</details>









---


### createSmsTemplate
Create sms template



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.createSmsTemplate({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.createSmsTemplate({  body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |  
| body | [SmsTemplateReq](#SmsTemplateReq) | yes | Request body |


Create sms template

*Returned Response:*




[SmsTemplateRes](#SmsTemplateRes)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/SmsTemplateRes"
}
```
</details>

</details>









---


### getSmsTemplateById
Get sms template by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getSmsTemplateById({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getSmsTemplateById({  id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Sms template id |  



Get sms template by id

*Returned Response:*




[SmsTemplate](#SmsTemplate)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/SmsTemplate"
}
```
</details>

</details>









---


### updateSmsTemplateById
Update sms template by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.updateSmsTemplateById({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.updateSmsTemplateById({  id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Sms template id |  
| body | [SmsTemplateReq](#SmsTemplateReq) | yes | Request body |


Update sms template by id

*Returned Response:*




[SmsTemplateRes](#SmsTemplateRes)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/SmsTemplateRes"
}
```
</details>

</details>









---


### deleteSmsTemplateById
Delete sms template by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.deleteSmsTemplateById({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.deleteSmsTemplateById({  id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Sms template id |  



Delete sms template by id

*Returned Response:*




[SmsTemplateDeleteSuccessRes](#SmsTemplateDeleteSuccessRes)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/SmsTemplateDeleteSuccessRes"
}
```
</details>

</details>









---


### getSystemSystemTemplates
Get system sms templates



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.getSystemSystemTemplates({  pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.getSystemSystemTemplates({  pageNo : value,
 pageSize : value,
 sort : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on created_at |  



Get system sms templates

*Returned Response:*




[SystemSmsTemplates](#SystemSmsTemplates)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "$ref": "#/components/examples/SystemSmsTemplates"
}
```
</details>

</details>









---



### Schemas

 
 
 #### [StatsImported](#StatsImported)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number |  no  |  |

---


 
 
 #### [StatsProcessedEmail](#StatsProcessedEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | number |  no  |  |
 | failed | number |  no  |  |
 | suppressed | number |  no  |  |

---


 
 
 #### [StatsProcessedSms](#StatsProcessedSms)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | number |  no  |  |
 | failed | number |  no  |  |
 | suppressed | number |  no  |  |

---


 
 
 #### [StatsProcessed](#StatsProcessed)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | [StatsProcessedEmail](#StatsProcessedEmail) |  no  |  |
 | sms | [StatsProcessedSms](#StatsProcessedSms) |  no  |  |

---


 
 
 #### [Stats](#Stats)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | imported | any |  no  |  |
 | processed | any |  no  |  |

---


 
 
 #### [GetStats](#GetStats)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Stats](#Stats)] |  no  |  |

---


 
 
 #### [CampaignReq](#CampaignReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | tags | [string] |  no  |  |
 | headers | [string] |  no  |  |
 | is_active | boolean |  no  |  |
 | name | string |  no  |  |
 | file_url | string |  no  |  |
 | type | string |  no  |  |
 | records_count | number |  no  |  |
 | application | string |  no  |  |

---


 
 
 #### [RecipientHeaders](#RecipientHeaders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  no  |  |

---


 
 
 #### [CampaignEmailTemplate](#CampaignEmailTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [CampignEmailProvider](#CampignEmailProvider)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | from_name | string |  no  |  |
 | from_email | string |  no  |  |

---


 
 
 #### [CampaignEmail](#CampaignEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | template | [CampaignEmailTemplate](#CampaignEmailTemplate) |  no  |  |
 | provider | [CampignEmailProvider](#CampignEmailProvider) |  no  |  |

---


 
 
 #### [Campaign](#Campaign)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | recipient_headers | [RecipientHeaders](#RecipientHeaders) |  no  |  |
 | email | [CampaignEmail](#CampaignEmail) |  no  |  |
 | description | string |  no  |  |
 | tags | [any] |  no  |  |
 | is_active | boolean |  no  |  |
 | _id | string |  no  |  |
 | datasource | string |  no  |  |
 | type | string |  no  |  |
 | name | string |  no  |  |
 | application | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | slug | string |  no  |  |
 | __v | number |  no  |  |

---


 
 
 #### [Campaigns](#Campaigns)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Campaign](#Campaign)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [BigqueryHeadersReq](#BigqueryHeadersReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | query | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [BigqueryHeadersResHeaders](#BigqueryHeadersResHeaders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [BigqueryHeadersRes](#BigqueryHeadersRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | headers | [[BigqueryHeadersResHeaders](#BigqueryHeadersResHeaders)] |  no  |  |

---


 
 
 #### [GetNRecordsCsvReq](#GetNRecordsCsvReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  no  |  |
 | header | boolean |  no  |  |
 | count | number |  no  |  |

---


 
 
 #### [GetNRecordsCsvResItems](#GetNRecordsCsvResItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | phone_number | string |  no  |  |
 | email | string |  no  |  |
 | firstname | string |  no  |  |
 | lastname | string |  no  |  |
 | orderid | string |  no  |  |

---


 
 
 #### [GetNRecordsCsvRes](#GetNRecordsCsvRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[GetNRecordsCsvResItems](#GetNRecordsCsvResItems)] |  no  |  |

---


 
 
 #### [AudienceReq](#AudienceReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | tags | [string] |  no  |  |
 | headers | [string] |  no  |  |
 | is_active | boolean |  no  |  |
 | name | string |  no  |  |
 | file_url | string |  no  |  |
 | type | string |  no  |  |
 | records_count | number |  no  |  |
 | application | string |  no  |  |

---


 
 
 #### [Audience](#Audience)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | tags | [string] |  no  |  |
 | headers | [string] |  no  |  |
 | is_active | boolean |  no  |  |
 | _id | string |  no  |  |
 | name | string |  no  |  |
 | file_url | string |  no  |  |
 | type | string |  no  |  |
 | records_count | number |  no  |  |
 | application | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | slug | string |  no  |  |
 | __v | number |  no  |  |

---


 
 
 #### [Audiences](#Audiences)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Audience](#Audience)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [EmailProviderReqFrom](#EmailProviderReqFrom)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | email | string |  no  |  |
 | is_default | boolean |  no  |  |

---


 
 
 #### [EmailProviderReq](#EmailProviderReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | description | string |  no  |  |
 | api_key | string |  no  |  |
 | type | string |  no  |  |
 | provider | string |  no  |  |
 | from | [[EmailProviderReqFrom](#EmailProviderReqFrom)] |  no  |  |

---


 
 
 #### [EmailProvider](#EmailProvider)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | provider | string |  no  |  |
 | from | [[EmailProviderReqFrom](#EmailProviderReqFrom)] |  no  |  |
 | _id | string |  no  |  |
 | name | string |  no  |  |
 | description | string |  no  |  |
 | api_key | string |  no  |  |
 | application | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | slug | string |  no  |  |
 | __v | number |  no  |  |

---


 
 
 #### [EmailProviders](#EmailProviders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[EmailProvider](#EmailProvider)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [EmailTemplateDeleteSuccessRes](#EmailTemplateDeleteSuccessRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [EmailTemplateDeleteFailureRes](#EmailTemplateDeleteFailureRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [EmailTemplateKeys](#EmailTemplateKeys)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | to | string |  no  |  |
 | cc | string |  no  |  |
 | bcc | string |  no  |  |

---


 
 
 #### [EmailTemplateHeaders](#EmailTemplateHeaders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [EmailTemplateReq](#EmailTemplateReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | description | string |  no  |  |
 | keys | [EmailTemplateKeys](#EmailTemplateKeys) |  no  |  |
 | from | string |  no  |  |
 | static_to | [string] |  no  |  |
 | static_cc | [string] |  no  |  |
 | static_bcc | [string] |  no  |  |
 | reply_to | string |  no  |  |
 | headers | [[EmailTemplateHeaders](#EmailTemplateHeaders)] |  no  |  |
 | subject | [TemplateAndType](#TemplateAndType) |  no  |  |
 | html | [TemplateAndType](#TemplateAndType) |  no  |  |
 | text | [TemplateAndType](#TemplateAndType) |  no  |  |
 | attachments | [any] |  no  |  |
 | priority | string |  no  |  |

---


 
 
 #### [TemplateAndType](#TemplateAndType)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | template_type | string |  no  |  |
 | template | string |  no  |  |

---


 
 
 #### [EmailTemplateRes](#EmailTemplateRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_system | boolean |  no  |  |
 | is_internal | boolean |  no  |  |
 | description | string |  no  |  |
 | static_to | [string] |  no  |  |
 | static_cc | [string] |  no  |  |
 | static_bcc | [string] |  no  |  |
 | tags | [any] |  no  |  |
 | priority | string |  no  |  |
 | published | boolean |  no  |  |
 | _id | string |  no  |  |
 | name | string |  no  |  |
 | keys | [EmailTemplateKeys](#EmailTemplateKeys) |  no  |  |
 | from | string |  no  |  |
 | reply_to | string |  no  |  |
 | headers | [[EmailTemplateHeaders](#EmailTemplateHeaders)] |  no  |  |
 | subject | [TemplateAndType](#TemplateAndType) |  no  |  |
 | html | [TemplateAndType](#TemplateAndType) |  no  |  |
 | text | [TemplateAndType](#TemplateAndType) |  no  |  |
 | attachments | [any] |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | slug | string |  no  |  |
 | __v | number |  no  |  |

---


 
 
 #### [EmailTemplate](#EmailTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_system | boolean |  no  |  |
 | is_internal | boolean |  no  |  |
 | description | string |  no  |  |
 | static_to | [any] |  no  |  |
 | static_cc | [any] |  no  |  |
 | static_bcc | [any] |  no  |  |
 | tags | [any] |  no  |  |
 | priority | string |  no  |  |
 | published | boolean |  no  |  |
 | _id | string |  no  |  |
 | slug | string |  no  |  |
 | name | string |  no  |  |
 | from | string |  no  |  |
 | from_name | string |  no  |  |
 | subject | [TemplateAndType](#TemplateAndType) |  no  |  |
 | html | [TemplateAndType](#TemplateAndType) |  no  |  |
 | text | [TemplateAndType](#TemplateAndType) |  no  |  |
 | headers | [any] |  no  |  |
 | attachments | [any] |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | __v | number |  no  |  |

---


 
 
 #### [SystemEmailTemplate](#SystemEmailTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_system | boolean |  no  |  |
 | is_internal | boolean |  no  |  |
 | description | string |  no  |  |
 | static_to | [any] |  no  |  |
 | static_cc | [any] |  no  |  |
 | static_bcc | [any] |  no  |  |
 | tags | [any] |  no  |  |
 | priority | string |  no  |  |
 | published | boolean |  no  |  |
 | _id | string |  no  |  |
 | slug | string |  no  |  |
 | name | string |  no  |  |
 | from | string |  no  |  |
 | from_name | string |  no  |  |
 | subject | [TemplateAndType](#TemplateAndType) |  no  |  |
 | html | [TemplateAndType](#TemplateAndType) |  no  |  |
 | text | [TemplateAndType](#TemplateAndType) |  no  |  |
 | headers | [any] |  no  |  |
 | attachments | [any] |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | __v | number |  no  |  |

---


 
 
 #### [EmailTemplates](#EmailTemplates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[EmailTemplate](#EmailTemplate)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [SystemEmailTemplates](#SystemEmailTemplates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SystemEmailTemplate](#SystemEmailTemplate)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [EventSubscriptionTemplateSms](#EventSubscriptionTemplateSms)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | subscribed | boolean |  no  |  |
 | template | string |  no  |  |

---


 
 
 #### [EventSubscriptionTemplateEmail](#EventSubscriptionTemplateEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | subscribed | boolean |  no  |  |
 | template | string |  no  |  |

---


 
 
 #### [EventSubscriptionTemplate](#EventSubscriptionTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sms | [EventSubscriptionTemplateSms](#EventSubscriptionTemplateSms) |  no  |  |
 | email | [EventSubscriptionTemplateEmail](#EventSubscriptionTemplateEmail) |  no  |  |

---


 
 
 #### [EventSubscription](#EventSubscription)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | template | [EventSubscriptionTemplate](#EventSubscriptionTemplate) |  no  |  |
 | is_default | boolean |  no  |  |
 | _id | string |  no  |  |
 | application | string |  no  |  |
 | event | string |  no  |  |
 | slug | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | __v | number |  no  |  |

---


 
 
 #### [EventSubscriptions](#EventSubscriptions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[EventSubscription](#EventSubscription)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [TriggerJobResponse](#TriggerJobResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | number |  no  |  |

---


 
 
 #### [TriggerJobRequest](#TriggerJobRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | job_id | string |  no  |  |

---


 
 
 #### [Job](#Job)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | completed | boolean |  no  |  |
 | is_active | boolean |  no  |  |
 | _id | string |  no  |  |
 | campaign | string |  no  |  |
 | application | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | __v | number |  no  |  |

---


 
 
 #### [Jobs](#Jobs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Job](#Job)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [JobLog](#JobLog)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | imported | any |  no  |  |
 | processed | any |  no  |  |
 | _id | string |  no  |  |
 | job | string |  no  |  |
 | campaign | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | __v | number |  no  |  |

---


 
 
 #### [JobLogs](#JobLogs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[JobLog](#JobLog)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [LogEmail](#LogEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | template | string |  no  |  |

---


 
 
 #### [LogPushnotification](#LogPushnotification)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pushtokens | [string] |  no  |  |

---


 
 
 #### [LogMeta](#LogMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | identifier | string |  no  |  |
 | key | string |  no  |  |
 | offset | string |  no  |  |
 | partition | string |  no  |  |
 | topic | string |  no  |  |

---


 
 
 #### [Log](#Log)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | [LogEmail](#LogEmail) |  no  |  |
 | pushnotification | [LogPushnotification](#LogPushnotification) |  no  |  |
 | meta | [LogMeta](#LogMeta) |  no  |  |
 | _id | string |  no  |  |
 | application | string |  no  |  |
 | service | string |  no  |  |
 | step | string |  no  |  |
 | status | string |  no  |  |
 | data | any |  no  |  |
 | expire_at | string |  no  |  |
 | created_at | string |  no  |  |

---


 
 
 #### [Logs](#Logs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Log](#Log)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [PushtokenReq](#PushtokenReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  |  |
 | bundle_identifier | string |  no  |  |
 | push_token | string |  no  |  |
 | unique_device_id | string |  no  |  |

---


 
 
 #### [PushtokenRes](#PushtokenRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | bundle_identifier | string |  no  |  |
 | push_token | string |  no  |  |
 | unique_device_id | string |  no  |  |
 | type | string |  no  |  |
 | platform | string |  no  |  |
 | application_id | string |  no  |  |
 | user_id | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | expired_at | string |  no  |  |

---


 
 
 #### [SmsProviderReq](#SmsProviderReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | description | string |  no  |  |
 | sender | string |  no  |  |
 | username | string |  no  |  |
 | authkey | string |  no  |  |
 | type | string |  no  |  |
 | provider | string |  no  |  |

---


 
 
 #### [SmsProvider](#SmsProvider)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | rpt | number |  no  |  |
 | type | string |  no  |  |
 | provider | string |  no  |  |
 | _id | string |  no  |  |
 | name | string |  no  |  |
 | description | string |  no  |  |
 | sender | string |  no  |  |
 | username | string |  no  |  |
 | authkey | string |  no  |  |
 | application | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | slug | string |  no  |  |
 | __v | number |  no  |  |

---


 
 
 #### [SmsProviders](#SmsProviders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SmsProvider](#SmsProvider)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [SmsTemplateDeleteSuccessRes](#SmsTemplateDeleteSuccessRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [SmsTemplateDeleteFailureRes](#SmsTemplateDeleteFailureRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [SmsTemplateMessage](#SmsTemplateMessage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | template_type | string |  no  |  |
 | template | string |  no  |  |

---


 
 
 #### [SmsTemplateReq](#SmsTemplateReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | description | string |  no  |  |
 | message | [SmsTemplateMessage](#SmsTemplateMessage) |  no  |  |
 | template_variables | any |  no  |  |
 | attachments | [any] |  no  |  |
 | priority | string |  no  |  |

---


 
 
 #### [SmsTemplateRes](#SmsTemplateRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_system | boolean |  no  |  |
 | is_internal | boolean |  no  |  |
 | description | string |  no  |  |
 | tags | [any] |  no  |  |
 | priority | string |  no  |  |
 | published | boolean |  no  |  |
 | _id | string |  no  |  |
 | name | string |  no  |  |
 | message | [SmsTemplateMessage](#SmsTemplateMessage) |  no  |  |
 | template_variables | any |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | slug | string |  no  |  |
 | __v | number |  no  |  |

---


 
 
 #### [SmsTemplate](#SmsTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_system | boolean |  no  |  |
 | is_internal | boolean |  no  |  |
 | description | string |  no  |  |
 | priority | string |  no  |  |
 | tags | [any] |  no  |  |
 | published | boolean |  no  |  |
 | _id | string |  no  |  |
 | slug | string |  no  |  |
 | name | string |  no  |  |
 | message | [SmsTemplateMessage](#SmsTemplateMessage) |  no  |  |
 | template_variables | any |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | __v | number |  no  |  |

---


 
 
 #### [SystemSmsTemplate](#SystemSmsTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_system | boolean |  no  |  |
 | is_internal | boolean |  no  |  |
 | description | string |  no  |  |
 | tags | [any] |  no  |  |
 | priority | string |  no  |  |
 | published | boolean |  no  |  |
 | _id | string |  no  |  |
 | slug | string |  no  |  |
 | name | string |  no  |  |
 | message | [SmsTemplateMessage](#SmsTemplateMessage) |  no  |  |
 | template_variables | any |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | __v | number |  no  |  |

---


 
 
 #### [SmsTemplates](#SmsTemplates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SmsTemplate](#SmsTemplate)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [SystemSmsTemplates](#SystemSmsTemplates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SystemSmsTemplate](#SystemSmsTemplate)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [Notification](#Notification)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | body | string |  no  |  |
 | subtitle | string |  no  |  |
 | icon | string |  no  |  |
 | deeplink | string |  no  |  |
 | click_action | string |  no  |  |

---


 
 
 #### [SystemNotificationUser](#SystemNotificationUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [SystemNotificationSettings](#SystemNotificationSettings)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sound | boolean |  no  |  |
 | priority | string |  no  |  |
 | time_to_live | string |  no  |  |

---


 
 
 #### [SystemNotification](#SystemNotification)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | notification | [Notification](#Notification) |  no  |  |
 | user | [SystemNotificationUser](#SystemNotificationUser) |  no  |  |
 | settings | [SystemNotificationUser](#SystemNotificationUser) |  no  |  |
 | _id | string |  no  |  |
 | group | string |  no  |  |
 | created_at | string |  no  |  |

---


 
 
 #### [SystemNotificationsPage](#SystemNotificationsPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | current | number |  no  |  |
 | size | number |  no  |  |
 | item_total | number |  no  |  |
 | has_next | boolean |  no  |  |

---


 
 
 #### [SystemNotifications](#SystemNotifications)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SystemNotification](#SystemNotification)] |  no  |  |
 | last_read_anchor | number |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | size | number |  no  |  |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | item_total | number |  no  |  |
 | next_id | string |  no  |  |
 | has_previous | boolean |  no  |  |

---




