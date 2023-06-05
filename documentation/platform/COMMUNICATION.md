




##### [Back to Platform docs](./README.md)

## Communication Methods
Manages email, sms, push notifications sent to users

* [createAudience](#createaudience)
* [createCampaign](#createcampaign)
* [createEmailProvider](#createemailprovider)
* [createEmailTemplate](#createemailtemplate)
* [createSmsProvider](#createsmsprovider)
* [createSmsTemplate](#createsmstemplate)
* [deleteEmailTemplateById](#deleteemailtemplatebyid)
* [deleteSmsTemplateById](#deletesmstemplatebyid)
* [getAudienceById](#getaudiencebyid)
* [getAudiences](#getaudiences)
* [getBigqueryHeaders](#getbigqueryheaders)
* [getCampaignById](#getcampaignbyid)
* [getCampaigns](#getcampaigns)
* [getCommunicationLogs](#getcommunicationlogs)
* [getEmailProviderById](#getemailproviderbyid)
* [getEmailProviders](#getemailproviders)
* [getEmailTemplateById](#getemailtemplatebyid)
* [getEmailTemplates](#getemailtemplates)
* [getEventSubscriptions](#geteventsubscriptions)
* [getJobLogs](#getjoblogs)
* [getJobs](#getjobs)
* [getNSampleRecordsFromCsv](#getnsamplerecordsfromcsv)
* [getSmsProviderById](#getsmsproviderbyid)
* [getSmsProviders](#getsmsproviders)
* [getSmsTemplateById](#getsmstemplatebyid)
* [getSmsTemplates](#getsmstemplates)
* [getStatsOfCampaignById](#getstatsofcampaignbyid)
* [getSystemEmailTemplates](#getsystememailtemplates)
* [getSystemNotifications](#getsystemnotifications)
* [getSystemSystemTemplates](#getsystemsystemtemplates)
* [sendCommunicationAsynchronously](#sendcommunicationasynchronously)
* [sendCommunicationSynchronously](#sendcommunicationsynchronously)
* [sendOtp](#sendotp)
* [triggerCampaignJob](#triggercampaignjob)
* [updateAudienceById](#updateaudiencebyid)
* [updateCampaignById](#updatecampaignbyid)
* [updateEmailProviderById](#updateemailproviderbyid)
* [updateEmailTemplateById](#updateemailtemplatebyid)
* [updateSmsProviderById](#updatesmsproviderbyid)
* [updateSmsTemplateById](#updatesmstemplatebyid)
* [verfiyOtp](#verfiyotp)



## Methods with example and description




### createAudience
Create audience



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.createAudience({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.createAudience({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
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
  "value": {
    "description": "test description",
    "tags": [
      "csv"
    ],
    "headers": [
      "phone_number",
      "email",
      "firstname",
      "lastname",
      "orderid"
    ],
    "is_active": true,
    "_id": "5fb6675c09fd901023917a5f",
    "name": "Test csv",
    "file_url": "https://hdn-1.addsale.com/x0/application/000000000000000000000004/datasources/2_r_D1jt6-test-1-entries.csv",
    "type": "raw_csv",
    "records_count": 3,
    "application": "000000000000000000000004",
    "created_at": "2020-11-19T12:38:52.580Z",
    "updated_at": "2020-11-19T12:38:52.580Z",
    "slug": "Test-csv",
    "__v": 0
  }
}
```
</details>

</details>









---


### createCampaign
Create campaign



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.createCampaign({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.createCampaign({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
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
  "value": {
    "recipient_headers": {
      "email": "email"
    },
    "email": {
      "template": {
        "key": "_id",
        "value": "5fb6757a09fd90ca91917a60"
      },
      "provider": {
        "_id": "5e560652b5eb4b1f13b4d601",
        "from_name": "Fynd",
        "from_email": "hey@gofynd.com"
      }
    },
    "description": "",
    "tags": [],
    "is_active": true,
    "_id": "6009a1ea1f6a61d88e80a867",
    "datasource": "6009a1be1f6a61a13180a866",
    "type": "email",
    "name": "testing bq email",
    "application": "000000000000000000000004",
    "created_at": "2021-01-21T15:46:50.357Z",
    "updated_at": "2021-01-21T15:46:50.357Z",
    "slug": "testing-bq-email-vPyAd1YB1",
    "__v": 0
  }
}
```
</details>

</details>









---


### createEmailProvider
Create email provider



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.createEmailProvider({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.createEmailProvider({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
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
  "value": {
    "type": "application",
    "provider": "falconide",
    "from_address": [
      {
        "is_default": true,
        "name": "abc",
        "email": "abc@test.com"
      }
    ],
    "_id": "5fd9fd44c474a7e3d5d376d6",
    "name": "test falconide",
    "description": "test",
    "api_key": "testtttt",
    "application": "000000000000000000000004",
    "created_at": "2020-12-16T12:27:48.051Z",
    "updated_at": "2020-12-16T12:27:48.051Z",
    "slug": "test-falconide-application-falconide-ZTD-D7wbB",
    "__v": 0
  }
}
```
</details>

</details>









---


### createEmailTemplate
Create email template



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.createEmailTemplate({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.createEmailTemplate({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
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
  "value": {
    "is_system": false,
    "is_internal": false,
    "description": "test template",
    "static_to": [
      "abc@gofynd.com"
    ],
    "static_cc": [
      "abc@gofynd.com"
    ],
    "static_bcc": [
      "abc@gofynd.com"
    ],
    "tags": [],
    "priority": "low",
    "published": false,
    "_id": "5ef42a49c8b67d279c27a980",
    "name": "test",
    "keys": {
      "bcc": "abc@gofynd.com"
    },
    "reply_to": "abc@gofynd.com",
    "headers": [
      {
        "key": "x-test-header",
        "value": "test123"
      }
    ],
    "subject": {
      "template_type": "static",
      "template": "This is test email"
    },
    "html": {
      "template_type": "static",
      "template": "This is test email"
    },
    "text": {
      "template_type": "static",
      "template": "This is test email"
    },
    "attachments": [],
    "created_at": "2021-02-08T03:33:42.103Z",
    "updated_at": "2021-02-08T03:33:42.103Z",
    "slug": "test-fZfGq0lSQ",
    "__v": 0
  }
}
```
</details>

</details>









---


### createSmsProvider
Create sms provider



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.createSmsProvider({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.createSmsProvider({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
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
  "value": {
    "rpt": 1,
    "type": "application",
    "provider": "telspiel",
    "_id": "5fd9fd07c474a7710dd376d5",
    "name": "test telspiel",
    "description": "test",
    "sender": "test",
    "username": "test",
    "authkey": "test",
    "application": "000000000000000000000004",
    "created_at": "2020-12-16T12:26:47.794Z",
    "updated_at": "2020-12-16T12:26:47.794Z",
    "slug": "test-telspiel-application-telspiel-p9UY1r7nG",
    "__v": 0
  }
}
```
</details>

</details>









---


### createSmsTemplate
Create sms template



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.createSmsTemplate({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.createSmsTemplate({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
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
  "value": {
    "is_system": false,
    "is_internal": true,
    "description": "This is a test sms template",
    "priority": "high",
    "tags": [],
    "published": true,
    "_id": "5fd447728394dbf0d21329b3",
    "slug": "test-sms",
    "name": "Test sms",
    "message": {
      "template_type": "nunjucks",
      "template": "This is a test sms for order - {{ orderId }}"
    },
    "template_variables": {
      "orderId": "12345"
    },
    "created_at": "2020-12-12T04:30:42.456Z",
    "updated_at": "2020-12-24T15:13:20.558Z",
    "__v": 0
  }
}
```
</details>

</details>









---


### deleteEmailTemplateById
Delete email template by id



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.deleteEmailTemplateById({  id : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.deleteEmailTemplateById({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
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
  "value": {
    "success": true,
    "message": "Deleted successfully"
  }
}
```
</details>

</details>









---


### deleteSmsTemplateById
Delete sms template by id



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.deleteSmsTemplateById({  id : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.deleteSmsTemplateById({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
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
  "value": {
    "success": true,
    "message": "Deleted successfully"
  }
}
```
</details>

</details>









---


### getAudienceById
Get audience by id



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getAudienceById({  id : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getAudienceById({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
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
  "value": {
    "description": "test description",
    "tags": [
      "csv"
    ],
    "headers": [
      "phone_number",
      "email",
      "firstname",
      "lastname",
      "orderid"
    ],
    "is_active": true,
    "_id": "5fb6675c09fd901023917a5f",
    "name": "Test csv",
    "file_url": "https://hdn-1.addsale.com/x0/application/000000000000000000000004/datasources/2_r_D1jt6-test-1-entries.csv",
    "type": "raw_csv",
    "records_count": 3,
    "application": "000000000000000000000004",
    "created_at": "2020-11-19T12:38:52.580Z",
    "updated_at": "2020-11-19T12:38:52.580Z",
    "slug": "Test-csv",
    "__v": 0
  }
}
```
</details>

</details>









---


### getAudiences
Get audiences



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getAudiences({  pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getAudiences({  pageNo : value,
 pageSize : value,
 sort : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
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
  "value": {
    "items": [
      {
        "description": "test description",
        "tags": [
          "csv"
        ],
        "headers": [
          "phone_number",
          "email",
          "firstname",
          "lastname",
          "orderid"
        ],
        "is_active": true,
        "_id": "5fb6675c09fd901023917a5f",
        "name": "Test csv",
        "file_url": "https://hdn-1.addsale.com/x0/application/000000000000000000000004/datasources/2_r_D1jt6-test-1-entries.csv",
        "type": "raw_csv",
        "records_count": 3,
        "application": "000000000000000000000004",
        "created_at": "2020-11-19T12:38:52.580Z",
        "updated_at": "2020-11-19T12:38:52.580Z",
        "slug": "Test-csv",
        "__v": 0
      }
    ],
    "page": {
      "type": "number",
      "current": 1,
      "size": 1,
      "item_total": 1,
      "has_next": false
    }
  }
}
```
</details>

</details>









---


### getBigqueryHeaders
Get bigquery headers



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getBigqueryHeaders({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getBigqueryHeaders({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
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
  "value": {
    "headers": [
      {
        "name": "firstname",
        "type": "STRING"
      },
      {
        "name": "lastname",
        "type": "STRING"
      },
      {
        "name": "email",
        "type": "STRING"
      },
      {
        "name": "phone",
        "type": "STRING"
      },
      {
        "name": "countryCode",
        "type": "STRING"
      },
      {
        "name": "application",
        "type": "STRING"
      }
    ]
  }
}
```
</details>

</details>









---


### getCampaignById
Get campaign by id



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getCampaignById({  id : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getCampaignById({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
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
  "value": {
    "recipient_headers": {
      "email": "email"
    },
    "email": {
      "template": {
        "key": "_id",
        "value": "5fb6757a09fd90ca91917a60"
      },
      "provider": {
        "_id": "5e560652b5eb4b1f13b4d601",
        "from_name": "Fynd",
        "from_email": "hey@gofynd.com"
      }
    },
    "description": "",
    "tags": [],
    "is_active": true,
    "_id": "6009a1ea1f6a61d88e80a867",
    "datasource": "6009a1be1f6a61a13180a866",
    "type": "email",
    "name": "testing bq email",
    "application": "000000000000000000000004",
    "created_at": "2021-01-21T15:46:50.357Z",
    "updated_at": "2021-01-21T15:46:50.357Z",
    "slug": "testing-bq-email-vPyAd1YB1",
    "__v": 0
  }
}
```
</details>

</details>









---


### getCampaigns
Get campaigns



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getCampaigns({  pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getCampaigns({  pageNo : value,
 pageSize : value,
 sort : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
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
  "value": {
    "items": [
      {
        "recipient_headers": {
          "email": "email"
        },
        "email": {
          "template": {
            "key": "_id",
            "value": "5fb6757a09fd90ca91917a60"
          },
          "provider": {
            "_id": "5e560652b5eb4b1f13b4d601",
            "from_name": "Fynd",
            "from_email": "hey@gofynd.com"
          }
        },
        "description": "",
        "tags": [],
        "is_active": true,
        "_id": "6009a1ea1f6a61d88e80a867",
        "datasource": "6009a1be1f6a61a13180a866",
        "type": "email",
        "name": "testing bq email",
        "application": "000000000000000000000004",
        "created_at": "2021-01-21T15:46:50.357Z",
        "updated_at": "2021-01-21T15:46:50.357Z",
        "slug": "testing-bq-email-vPyAd1YB1",
        "__v": 0
      },
      {
        "recipient_headers": {
          "sms": "phone_number"
        },
        "sms": {
          "template": {
            "key": "_id",
            "value": "5fb675d009fd903196917a61"
          },
          "provider": {
            "_id": "5e560652b5eb4b06f3b4d5ff"
          }
        },
        "description": "",
        "tags": [],
        "is_active": true,
        "_id": "600981561f6a612c6080a85e",
        "datasource": "600981461f6a614b2c80a85d",
        "type": "sms",
        "name": "test",
        "application": "000000000000000000000004",
        "created_at": "2021-01-21T13:27:50.848Z",
        "updated_at": "2021-01-21T13:27:50.848Z",
        "slug": "test-ipLO3c8Jh",
        "__v": 0
      }
    ],
    "page": {
      "type": "number",
      "current": 1,
      "size": 2,
      "item_total": 2,
      "has_next": false
    }
  }
}
```
</details>

</details>









---


### getCommunicationLogs
Get communication logs



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getCommunicationLogs({  pageId : value,
 pageSize : value,
 sort : value,
 query : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getCommunicationLogs({  pageId : value,
 pageSize : value,
 sort : value,
 query : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
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
  "value": {
    "items": [
      {
        "sms": {
          "phone_number": "1234567890",
          "country_code": "+91",
          "template": "603e00649014219f87943213",
          "provider": "5f8ee2234d70f7c5624f0413"
        },
        "pushnotification": {
          "pushtokens": []
        },
        "meta": {
          "type": "job",
          "job": "603e021f171b19ee5a4324f4",
          "campaign": "603e0217171b19556e4324f3",
          "identifier": "pointblank.00395d65-c0a9-f9dc-0c46-5d65c0aa0c46"
        },
        "_id": "603e02300b9f817e1592fcbd",
        "application": "000000000000000000000004",
        "service": "sms-consumer",
        "step": "MSG_SENT",
        "status": "success",
        "pod": "fynd-core-pointblank-smslow-cnsmr-dply-d6dbf9d7f-b6h2f",
        "expire_at": "2021-04-01T09:15:28.526Z",
        "created_at": "2021-03-02T09:15:28.527Z"
      }
    ],
    "page": {
      "type": "cursor",
      "next_id": null,
      "has_previous": false,
      "has_next": false
    }
  }
}
```
</details>

</details>









---


### getEmailProviderById
Get email provider by id



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getEmailProviderById({  id : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getEmailProviderById({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
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
  "value": {
    "type": "application",
    "provider": "falconide",
    "from_address": [
      {
        "is_default": true,
        "name": "abc",
        "email": "abc@test.com"
      }
    ],
    "_id": "5fd9fd44c474a7e3d5d376d6",
    "name": "test falconide",
    "description": "test",
    "api_key": "testtttt",
    "application": "000000000000000000000004",
    "created_at": "2020-12-16T12:27:48.051Z",
    "updated_at": "2020-12-16T12:27:48.051Z",
    "slug": "test-falconide-application-falconide-ZTD-D7wbB",
    "__v": 0
  }
}
```
</details>

</details>









---


### getEmailProviders
Get email providers



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getEmailProviders({  pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getEmailProviders({  pageNo : value,
 pageSize : value,
 sort : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
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
  "value": {
    "items": [
      {
        "type": "application",
        "provider": "falconide",
        "from_address": [
          {
            "is_default": true,
            "name": "abc",
            "email": "abc@test.com"
          }
        ],
        "_id": "5fd9fd44c474a7e3d5d376d6",
        "name": "test falconide",
        "description": "test",
        "api_key": "testtttt",
        "application": "000000000000000000000004",
        "created_at": "2020-12-16T12:27:48.051Z",
        "updated_at": "2020-12-16T12:27:48.051Z",
        "slug": "test-falconide-application-falconide-ZTD-D7wbB",
        "__v": 0
      }
    ],
    "page": {
      "type": "number",
      "current": 1,
      "size": 10,
      "item_total": 1,
      "has_next": false
    }
  }
}
```
</details>

</details>









---


### getEmailTemplateById
Get email template by id



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getEmailTemplateById({  id : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getEmailTemplateById({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
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
  "value": {
    "is_system": false,
    "is_internal": true,
    "description": "Application creation",
    "static_to": [],
    "static_cc": [],
    "static_bcc": [],
    "tags": [],
    "priority": "high",
    "published": true,
    "_id": "5ef42a49c8b67d279c27a980",
    "slug": "application-creation",
    "name": "Application creation",
    "from_name": "Fynd",
    "subject": {
      "template_type": "nunjucks",
      "template": "This is a test email subject"
    },
    "html": {
      "template_type": "nunjucks",
      "template": "This is a test email body"
    },
    "text": {
      "template_type": "nunjucks",
      "template": "This is a test email body"
    },
    "headers": [],
    "attachments": [],
    "created_at": "2020-06-25T04:38:34.003Z",
    "updated_at": "2020-08-10T12:27:43.583Z",
    "__v": 0
  }
}
```
</details>

</details>









---


### getEmailTemplates
Get email templates



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getEmailTemplates({  pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getEmailTemplates({  pageNo : value,
 pageSize : value,
 sort : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
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
  "value": {
    "items": [
      {
        "is_system": false,
        "is_internal": true,
        "description": "Application creation",
        "static_to": [],
        "static_cc": [],
        "static_bcc": [],
        "tags": [],
        "priority": "high",
        "published": true,
        "_id": "5ef42a49c8b67d279c27a980",
        "slug": "application-creation",
        "name": "Application creation",
        "from_name": "Fynd",
        "subject": {
          "template_type": "nunjucks",
          "template": "This is a test email subject"
        },
        "html": {
          "template_type": "nunjucks",
          "template": "This is a test email body"
        },
        "text": {
          "template_type": "nunjucks",
          "template": "This is a test email body"
        },
        "headers": [],
        "attachments": [],
        "created_at": "2020-06-25T04:38:34.003Z",
        "updated_at": "2020-08-10T12:27:43.583Z",
        "__v": 0
      }
    ],
    "page": {
      "type": "number",
      "current": 1,
      "size": 1,
      "item_total": 66,
      "has_next": true
    }
  }
}
```
</details>

</details>









---


### getEventSubscriptions
Get event subscriptions



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getEventSubscriptions({  pageNo : value,
 pageSize : value,
 populate : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getEventSubscriptions({  pageNo : value,
 pageSize : value,
 populate : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
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
  "value": {
    "items": [
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": null
          },
          "email": {
            "subscribed": true,
            "template": "5e5653c1d503e0038407fc16"
          }
        },
        "is_default": true,
        "_id": "5e56598f2bfda9050ccaa8e8",
        "application": "000000000000000000000004",
        "event": "5e5653c1d503e0038407fc10",
        "slug": "reset-password-event",
        "created_at": "2020-02-26T11:42:08.164Z",
        "updated_at": "2021-03-03T09:00:47.871Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": null
          },
          "email": {
            "subscribed": true,
            "template": "5e5653c1d503e0038407fc17"
          }
        },
        "is_default": true,
        "_id": "5e56598f2bfda9050ccaa911",
        "application": "000000000000000000000004",
        "event": "5e5653c1d503e0038407fc11",
        "slug": "invite-email-event",
        "created_at": "2020-02-26T11:42:08.174Z",
        "updated_at": "2021-03-03T09:00:47.871Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": null
          },
          "email": {
            "subscribed": true,
            "template": "5e5653c1d503e0038407fc14"
          }
        },
        "is_default": true,
        "_id": "5e56598f2bfda9050ccaa8f2",
        "application": "000000000000000000000004",
        "event": "5e5653c1d503e0038407fc12",
        "slug": "verify-email-event",
        "created_at": "2020-02-26T11:42:08.172Z",
        "updated_at": "2021-03-03T09:00:47.953Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": null
          },
          "email": {
            "subscribed": true,
            "template": "5e5653c1d503e0038407fc15"
          }
        },
        "is_default": true,
        "_id": "5e56598f2bfda9050ccaa8fd",
        "application": "000000000000000000000004",
        "event": "5e5653c1d503e0038407fc13",
        "slug": "verify-otp-event",
        "created_at": "2020-02-26T11:42:08.172Z",
        "updated_at": "2021-03-03T09:00:47.953Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5e565a10343582051d211d1c"
          },
          "email": {
            "subscribed": true,
            "template": "5e565a10343582051d211d1b"
          }
        },
        "is_default": true,
        "_id": "5e565a16343582051d211d68",
        "application": "000000000000000000000004",
        "event": "5e565a10343582051d211d1d",
        "slug": "cancelled_customer-event",
        "created_at": "2020-02-26T11:44:22.246Z",
        "updated_at": "2021-03-03T09:00:47.953Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5e565a10343582051d211d1f"
          },
          "email": {
            "subscribed": true,
            "template": "5e565a10343582051d211d1e"
          }
        },
        "is_default": true,
        "_id": "5e565a16343582051d211d6c",
        "application": "000000000000000000000004",
        "event": "5e565a11343582051d211d20",
        "slug": "cancelled_fynd-event",
        "created_at": "2020-02-26T11:44:22.314Z",
        "updated_at": "2021-03-03T09:00:47.953Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5e565a11343582051d211d22"
          },
          "email": {
            "subscribed": true,
            "template": "5e565a11343582051d211d21"
          }
        },
        "is_default": true,
        "_id": "5e565a16343582051d211d65",
        "application": "000000000000000000000004",
        "event": "5e565a11343582051d211d23",
        "slug": "delivery_done-event",
        "created_at": "2020-02-26T11:44:22.246Z",
        "updated_at": "2021-03-03T09:00:47.972Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5e565a11343582051d211d25"
          },
          "email": {
            "subscribed": true,
            "template": "5e565a11343582051d211d24"
          }
        },
        "is_default": true,
        "_id": "5e565a16343582051d211d61",
        "application": "000000000000000000000004",
        "event": "5e565a11343582051d211d26",
        "slug": "out_for_delivery-event",
        "created_at": "2020-02-26T11:44:22.171Z",
        "updated_at": "2021-03-03T09:00:47.972Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5e565a12343582051d211d28"
          },
          "email": {
            "subscribed": true,
            "template": "5e565a11343582051d211d27"
          }
        },
        "is_default": true,
        "_id": "5e565a16343582051d211d62",
        "application": "000000000000000000000004",
        "event": "5e565a12343582051d211d29",
        "slug": "out_for_pickup-event",
        "created_at": "2020-02-26T11:44:22.171Z",
        "updated_at": "2021-03-03T09:00:47.972Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5e565a12343582051d211d2b"
          },
          "email": {
            "subscribed": true,
            "template": "5e565a12343582051d211d2a"
          }
        },
        "is_default": true,
        "_id": "5e565a16343582051d211d69",
        "application": "000000000000000000000004",
        "event": "5e565a12343582051d211d2c",
        "slug": "placed-event",
        "created_at": "2020-02-26T11:44:22.246Z",
        "updated_at": "2021-03-03T09:00:47.953Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5e565a12343582051d211d2e"
          },
          "email": {
            "subscribed": true,
            "template": "5e565a12343582051d211d2d"
          }
        },
        "is_default": true,
        "_id": "5e565a16343582051d211d66",
        "application": "000000000000000000000004",
        "event": "5e565a12343582051d211d2f",
        "slug": "refund_completed-event",
        "created_at": "2020-02-26T11:44:22.246Z",
        "updated_at": "2021-03-03T09:00:48.052Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5e565a13343582051d211d31"
          },
          "email": {
            "subscribed": true,
            "template": "5e565a12343582051d211d30"
          }
        },
        "is_default": true,
        "_id": "5e565a16343582051d211d64",
        "application": "000000000000000000000004",
        "event": "5e565a13343582051d211d32",
        "slug": "refund_initiated-event",
        "created_at": "2020-02-26T11:44:22.246Z",
        "updated_at": "2021-03-03T09:00:47.972Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5e565a13343582051d211d34"
          },
          "email": {
            "subscribed": true,
            "template": "5e565a13343582051d211d33"
          }
        },
        "is_default": true,
        "_id": "5e565a16343582051d211d6d",
        "application": "000000000000000000000004",
        "event": "5e565a13343582051d211d35",
        "slug": "rejected_by_customer-event",
        "created_at": "2020-02-26T11:44:22.314Z",
        "updated_at": "2021-03-03T09:00:47.972Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5e565a13343582051d211d37"
          },
          "email": {
            "subscribed": true,
            "template": "5e565a13343582051d211d36"
          }
        },
        "is_default": true,
        "_id": "5e565a16343582051d211d63",
        "application": "000000000000000000000004",
        "event": "5e565a13343582051d211d38",
        "slug": "return_accepted-event",
        "created_at": "2020-02-26T11:44:22.178Z",
        "updated_at": "2021-03-03T09:00:48.052Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5e565a14343582051d211d3a"
          },
          "email": {
            "subscribed": true,
            "template": "5e565a13343582051d211d39"
          }
        },
        "is_default": true,
        "_id": "5e565a16343582051d211d6a",
        "application": "000000000000000000000004",
        "event": "5e565a14343582051d211d3b",
        "slug": "return_bag_picked_by_dp-event",
        "created_at": "2020-02-26T11:44:22.246Z",
        "updated_at": "2021-03-03T09:00:48.052Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5e565a14343582051d211d3d"
          },
          "email": {
            "subscribed": true,
            "template": "5e565a14343582051d211d3c"
          }
        },
        "is_default": true,
        "_id": "5e565a16343582051d211d67",
        "application": "000000000000000000000004",
        "event": "5e565a14343582051d211d3e",
        "slug": "return_initiated-event",
        "created_at": "2020-02-26T11:44:22.246Z",
        "updated_at": "2021-03-03T09:00:48.052Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5e565a14343582051d211d40"
          },
          "email": {
            "subscribed": true,
            "template": "5e565a14343582051d211d3f"
          }
        },
        "is_default": true,
        "_id": "5e565a16343582051d211d6b",
        "application": "000000000000000000000004",
        "event": "5e565a14343582051d211d41",
        "slug": "return_not_accepted-event",
        "created_at": "2020-02-26T11:44:22.314Z",
        "updated_at": "2021-03-03T09:00:48.052Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5e565a15343582051d211d43"
          },
          "email": {
            "subscribed": true,
            "template": "5e565a15343582051d211d42"
          }
        },
        "is_default": true,
        "_id": "5e565a16343582051d211d6e",
        "application": "000000000000000000000004",
        "event": "5e565a15343582051d211d44",
        "slug": "return_request_cancelled-event",
        "created_at": "2020-02-26T11:44:22.314Z",
        "updated_at": "2021-03-03T09:00:48.052Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5e6a4b6d610dbf44166e74ba"
          },
          "email": {
            "subscribed": true,
            "template": null
          }
        },
        "is_default": true,
        "_id": "5e6a4b6e610dbf6b2a6e74c4",
        "application": "000000000000000000000004",
        "event": "5e6a4b6d610dbf3b146e74bb",
        "slug": "handed_over_to_customer-event",
        "created_at": "2020-03-12T14:47:10.453Z",
        "updated_at": "2021-03-03T09:00:48.141Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5e6a4b6d610dbf01326e74b6"
          },
          "email": {
            "subscribed": true,
            "template": null
          }
        },
        "is_default": true,
        "_id": "5e6a4b6e610dbf907e6e74c2",
        "application": "000000000000000000000004",
        "event": "5e6a4b6d610dbf454e6e74b7",
        "slug": "arrived_at_store-event",
        "created_at": "2020-03-12T14:47:10.453Z",
        "updated_at": "2021-03-03T09:00:48.052Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5e6a4b6d610dbf69b16e74b8"
          },
          "email": {
            "subscribed": true,
            "template": null
          }
        },
        "is_default": true,
        "_id": "5e6a4b6e610dbf28086e74c3",
        "application": "000000000000000000000004",
        "event": "5e6a4b6d610dbf91c76e74b9",
        "slug": "bag_packed-event",
        "created_at": "2020-03-12T14:47:10.453Z",
        "updated_at": "2021-03-03T09:00:48.052Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": null
          },
          "email": {
            "subscribed": true,
            "template": "5ed72116ccc0c408fbb5a404"
          }
        },
        "is_default": true,
        "_id": "5ed72117ccc0c48f29b5a408",
        "application": "000000000000000000000004",
        "event": "5ed72116ccc0c4e240b5a405",
        "slug": "order-review-reminder-event",
        "created_at": "2020-06-03T04:03:35.394Z",
        "updated_at": "2021-03-03T09:00:48.052Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5f633b15b490eaf13f494bf4"
          },
          "email": {
            "subscribed": true,
            "template": null
          }
        },
        "is_default": true,
        "_id": "5f633b16b490ea31eb494bfd",
        "application": "000000000000000000000004",
        "event": "5f633b15b490ea3c9b494bf5",
        "slug": "referral-code-applied-to-referrer",
        "created_at": "2020-09-17T10:31:50.204Z",
        "updated_at": "2021-03-03T09:00:48.141Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5f633b15b490ea465b494bf2"
          },
          "email": {
            "subscribed": true,
            "template": null
          }
        },
        "is_default": true,
        "_id": "5f633b16b490eada59494bfc",
        "application": "000000000000000000000004",
        "event": "5f633b15b490ea40dd494bf3",
        "slug": "referral-code-applied-to-referred-friend",
        "created_at": "2020-09-17T10:31:50.204Z",
        "updated_at": "2021-03-03T09:00:48.141Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5fe2e7da09c5fc047172e830"
          },
          "email": {
            "subscribed": true,
            "template": null
          }
        },
        "is_default": true,
        "_id": "5fe2e7dc09c5fc657372e841",
        "application": "000000000000000000000004",
        "event": "5fe2e7da09c5fc3da372e831",
        "slug": "return_dp_out_for_pickup-event",
        "created_at": "2020-12-23T06:46:52.214Z",
        "updated_at": "2021-03-03T09:00:48.141Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5fe2e7da09c5fcef0a72e82b"
          },
          "email": {
            "subscribed": true,
            "template": "5ff841fd864df30915c416e9"
          }
        },
        "is_default": true,
        "_id": "600951fb0e9745637d2e5081",
        "application": "000000000000000000000004",
        "event": "5fe2e7da09c5fc524f72e82c",
        "slug": "delivery_attempt_failed-event",
        "created_at": "2021-01-21T10:05:47.315Z",
        "updated_at": "2021-03-03T09:00:48.141Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5fe2e7da09c5fc6c5272e82e"
          },
          "email": {
            "subscribed": true,
            "template": "5fe2e7da09c5fc7fee72e82d"
          }
        },
        "is_default": true,
        "_id": "5fe2e7dc09c5fc10fe72e840",
        "application": "000000000000000000000004",
        "event": "5fe2e7da09c5fc611c72e82f",
        "slug": "return_bag_picked-event",
        "created_at": "2020-12-23T06:46:52.214Z",
        "updated_at": "2021-03-03T09:00:48.141Z",
        "__v": 0
      },
      {
        "template": {
          "sms": {
            "subscribed": true,
            "template": "5fe2e7da09c5fc4cde72e829"
          },
          "email": {
            "subscribed": true,
            "template": null
          }
        },
        "is_default": true,
        "_id": "5fe2e7dc09c5fcf4fc72e83e",
        "application": "000000000000000000000004",
        "event": "5fe2e7da09c5fc72d272e82a",
        "slug": "bag_picked-event",
        "created_at": "2020-12-23T06:46:52.214Z",
        "updated_at": "2021-03-03T09:00:48.141Z",
        "__v": 0
      }
    ],
    "page": {
      "type": "number",
      "current": 1,
      "size": 200,
      "item_total": 28,
      "has_next": false
    }
  }
}
```
</details>

</details>









---


### getJobLogs
Get job logs



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getJobLogs({  pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getJobLogs({  pageNo : value,
 pageSize : value,
 sort : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
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
  "value": {
    "items": [
      {
        "imported": {
          "count": 61135
        },
        "processed": {
          "email": {
            "success": 0,
            "failed": 0,
            "suppressed": 0
          },
          "sms": {
            "success": 61313,
            "failed": 85,
            "suppressed": 87
          }
        },
        "_id": "6044be30bc5f4b79aae7b29f",
        "job": "6044be260c92a7be0624f1cf",
        "campaign": "6044be1e0c92a7026924f1ce",
        "created_at": "2021-03-07T11:51:12.778Z",
        "updated_at": "2021-03-07T12:14:11.475Z",
        "__v": 0
      }
    ],
    "page": {
      "type": "number",
      "current": 1,
      "size": 50,
      "item_total": 1,
      "has_next": false
    }
  }
}
```
</details>

</details>









---


### getJobs
Get jobs



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getJobs({  pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getJobs({  pageNo : value,
 pageSize : value,
 sort : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
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
  "value": {
    "items": [
      {
        "completed": true,
        "is_active": false,
        "_id": "6044be260c92a7be0624f1cf",
        "campaign": "6044be1e0c92a7026924f1ce",
        "application": "000000000000000000000001",
        "created_at": "2021-03-07T11:51:02.234Z",
        "updated_at": "2021-03-07T12:12:36.587Z",
        "__v": 0
      }
    ],
    "page": {
      "type": "number",
      "current": 1,
      "size": 50,
      "item_total": 1,
      "has_next": false
    }
  }
}
```
</details>

</details>









---


### getNSampleRecordsFromCsv
Get n sample records from csv



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getNSampleRecordsFromCsv({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getNSampleRecordsFromCsv({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
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
  "value": [
    {
      "phone_number": "1234567890",
      "email": "abcxyz@gofynd.com",
      "firstname": "Abc",
      "lastname": "Xyz",
      "orderid": "1"
    }
  ]
}
```
</details>

</details>









---


### getSmsProviderById
Get sms provider by id



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getSmsProviderById({  id : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getSmsProviderById({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
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
  "value": {
    "rpt": 1,
    "type": "application",
    "provider": "telspiel",
    "_id": "5fd9fd07c474a7710dd376d5",
    "name": "test telspiel",
    "description": "test",
    "sender": "test",
    "username": "test",
    "authkey": "test",
    "application": "000000000000000000000004",
    "created_at": "2020-12-16T12:26:47.794Z",
    "updated_at": "2020-12-16T12:26:47.794Z",
    "slug": "test-telspiel-application-telspiel-p9UY1r7nG",
    "__v": 0
  }
}
```
</details>

</details>









---


### getSmsProviders
Get sms providers



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getSmsProviders({  pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getSmsProviders({  pageNo : value,
 pageSize : value,
 sort : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
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
  "value": {
    "items": [
      {
        "rpt": 1,
        "type": "application",
        "provider": "telspiel",
        "_id": "5fd9fd07c474a7710dd376d5",
        "name": "test telspiel",
        "description": "test",
        "sender": "test",
        "username": "test",
        "authkey": "test",
        "application": "000000000000000000000004",
        "created_at": "2020-12-16T12:26:47.794Z",
        "updated_at": "2020-12-16T12:26:47.794Z",
        "slug": "test-telspiel-application-telspiel-p9UY1r7nG",
        "__v": 0
      }
    ],
    "page": {
      "type": "number",
      "current": 1,
      "size": 1,
      "item_total": 1,
      "has_next": false
    }
  }
}
```
</details>

</details>









---


### getSmsTemplateById
Get sms template by id



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getSmsTemplateById({  id : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getSmsTemplateById({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
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
  "value": {
    "is_system": false,
    "is_internal": true,
    "description": "This is a test sms template",
    "priority": "high",
    "tags": [],
    "published": true,
    "_id": "5fd447728394dbf0d21329b3",
    "slug": "test-sms",
    "name": "Test sms",
    "message": {
      "template_type": "nunjucks",
      "template": "This is a test sms for order - {{ orderId }}"
    },
    "template_variables": {
      "orderId": "12345"
    },
    "created_at": "2020-12-12T04:30:42.456Z",
    "updated_at": "2020-12-24T15:13:20.558Z",
    "__v": 0
  }
}
```
</details>

</details>









---


### getSmsTemplates
Get sms templates



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getSmsTemplates({  pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getSmsTemplates({  pageNo : value,
 pageSize : value,
 sort : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
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
  "value": {
    "items": [
      {
        "is_system": false,
        "is_internal": true,
        "description": "This is a test sms template",
        "priority": "high",
        "tags": [],
        "published": true,
        "_id": "5fd447728394dbf0d21329b3",
        "slug": "test-sms",
        "name": "Test sms",
        "message": {
          "template_type": "nunjucks",
          "template": "This is a test sms for order - {{ orderId }}"
        },
        "template_variables": {
          "orderId": "12345"
        },
        "created_at": "2020-12-12T04:30:42.456Z",
        "updated_at": "2020-12-24T15:13:20.558Z",
        "__v": 0
      }
    ],
    "page": {
      "type": "number",
      "current": 1,
      "size": 1,
      "item_total": 66,
      "has_next": true
    }
  }
}
```
</details>

</details>









---


### getStatsOfCampaignById
Get stats of campaign by id



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getStatsOfCampaignById({  id : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getStatsOfCampaignById({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
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
  "value": [
    {
      "_id": "6009a1ea1f6a61d88e80a867",
      "imported": {
        "count": 2
      },
      "processed": {
        "email": {
          "success": 2,
          "failed": 0,
          "suppressed": 0
        },
        "sms": {
          "success": 0,
          "failed": 0,
          "suppressed": 0
        }
      }
    }
  ]
}
```
</details>

</details>









---


### getSystemEmailTemplates
Get system email templates



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getSystemEmailTemplates({  pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getSystemEmailTemplates({  pageNo : value,
 pageSize : value,
 sort : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
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
  "value": {
    "items": [
      {
        "is_system": true,
        "is_internal": true,
        "description": "Application creation",
        "static_to": [],
        "static_cc": [],
        "static_bcc": [],
        "tags": [],
        "priority": "high",
        "published": true,
        "_id": "5ef42a49c8b67d279c27a980",
        "slug": "application-creation",
        "name": "Application creation",
        "from_name": "Fynd",
        "subject": {
          "template_type": "nunjucks",
          "template": "This is a test email subject"
        },
        "html": {
          "template_type": "nunjucks",
          "template": "This is a test email body"
        },
        "text": {
          "template_type": "nunjucks",
          "template": "This is a test email body"
        },
        "headers": [],
        "attachments": [],
        "created_at": "2020-06-25T04:38:34.003Z",
        "updated_at": "2020-08-10T12:27:43.583Z",
        "__v": 0
      }
    ],
    "page": {
      "type": "number",
      "current": 1,
      "size": 1,
      "item_total": 66,
      "has_next": true
    }
  }
}
```
</details>

</details>









---


### getSystemNotifications
Get system notifications



```javascript
// Promise
const promise = platformClient.communication.getSystemNotifications({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.communication.getSystemNotifications({  pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
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
  "value": {
    "items": [
      {
        "notification": {
          "title": "Xyz Company is verified!",
          "body": "",
          "subtitle": "",
          "icon": "icon.png",
          "deeplink": "",
          "click_action": ""
        },
        "user": {
          "type": "company",
          "value": "1"
        },
        "settings": {
          "sound": true,
          "priority": "normal",
          "time_to_live": "60"
        },
        "_id": "60619f167dbd13ff0722f6dd",
        "group": "fynd-platform",
        "created_at": "2021-03-29T09:34:14.182Z"
      }
    ],
    "last_read_anchor": 1616748860,
    "page": {
      "type": "number",
      "current": 1,
      "size": 1,
      "item_total": 1,
      "has_next": false
    }
  }
}
```
</details>

</details>









---


### getSystemSystemTemplates
Get system sms templates



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.getSystemSystemTemplates({  pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.getSystemSystemTemplates({  pageNo : value,
 pageSize : value,
 sort : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
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
  "value": {
    "items": [
      {
        "is_system": true,
        "is_internal": true,
        "description": "This is a test sms template",
        "priority": "high",
        "tags": [],
        "published": true,
        "_id": "5fd447728394dbf0d21329b3",
        "slug": "test-sms",
        "name": "Test sms",
        "message": {
          "template_type": "nunjucks",
          "template": "This is a test sms for order - {{ orderId }}"
        },
        "template_variables": {
          "orderId": "12345"
        },
        "created_at": "2020-12-12T04:30:42.456Z",
        "updated_at": "2020-12-24T15:13:20.558Z",
        "__v": 0
      }
    ],
    "page": {
      "type": "number",
      "current": 1,
      "size": 1,
      "item_total": 66,
      "has_next": true
    }
  }
}
```
</details>

</details>









---


### sendCommunicationAsynchronously
Send email or sms asynchronously



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.sendCommunicationAsynchronously({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.sendCommunicationAsynchronously({  body : value });
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


### sendCommunicationSynchronously
Send email or sms synchronously



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.sendCommunicationSynchronously({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.sendCommunicationSynchronously({  body : value });
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


### sendOtp
Send OTP using email and sms



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.sendOtp({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.sendOtp({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [SendOtpCommsReq](#SendOtpCommsReq) | yes | Request body |


Send OTP Comms via email and sms

*Returned Response:*




[SendOtpCommsRes](#SendOtpCommsRes)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "sms": {
      "success": true,
      "request_id": "c8d1bd63d56a2d368aae9dbd4e7d8326",
      "message": "OTP sent",
      "mobile": "9096686804",
      "country_code": "91",
      "resend_timer": 30
    },
    "email": {
      "success": true,
      "request_id": "1cc79c911923971580d903039ea9ee05",
      "message": "OTP sent",
      "to": "parvezshaikh@gofynd.com",
      "resend_timer": 30
    }
  }
}
```
</details>

</details>









---


### triggerCampaignJob
Trigger campaign job



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.triggerCampaignJob({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.triggerCampaignJob({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
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
  "value": {
    "status": 200
  }
}
```
</details>

</details>









---


### updateAudienceById
Update audience by id



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.updateAudienceById({  id : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.updateAudienceById({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
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
  "value": {
    "description": "test description",
    "tags": [
      "csv"
    ],
    "headers": [
      "phone_number",
      "email",
      "firstname",
      "lastname",
      "orderid"
    ],
    "is_active": true,
    "_id": "5fb6675c09fd901023917a5f",
    "name": "Test csv",
    "file_url": "https://hdn-1.addsale.com/x0/application/000000000000000000000004/datasources/2_r_D1jt6-test-1-entries.csv",
    "type": "raw_csv",
    "records_count": 3,
    "application": "000000000000000000000004",
    "created_at": "2020-11-19T12:38:52.580Z",
    "updated_at": "2020-11-19T12:38:52.580Z",
    "slug": "Test-csv",
    "__v": 0
  }
}
```
</details>

</details>









---


### updateCampaignById
Update campaign by id



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.updateCampaignById({  id : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.updateCampaignById({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
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
  "value": {
    "recipient_headers": {
      "email": "email"
    },
    "email": {
      "template": {
        "key": "_id",
        "value": "5fb6757a09fd90ca91917a60"
      },
      "provider": {
        "_id": "5e560652b5eb4b1f13b4d601",
        "from_name": "Fynd",
        "from_email": "hey@gofynd.com"
      }
    },
    "description": "",
    "tags": [],
    "is_active": true,
    "_id": "6009a1ea1f6a61d88e80a867",
    "datasource": "6009a1be1f6a61a13180a866",
    "type": "email",
    "name": "testing bq email",
    "application": "000000000000000000000004",
    "created_at": "2021-01-21T15:46:50.357Z",
    "updated_at": "2021-01-21T15:46:50.357Z",
    "slug": "testing-bq-email-vPyAd1YB1",
    "__v": 0
  }
}
```
</details>

</details>









---


### updateEmailProviderById
Update email provider by id



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.updateEmailProviderById({  id : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.updateEmailProviderById({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
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
  "value": {
    "type": "application",
    "provider": "falconide",
    "from_address": [
      {
        "is_default": true,
        "name": "abc",
        "email": "abc@test.com"
      }
    ],
    "_id": "5fd9fd44c474a7e3d5d376d6",
    "name": "test falconide",
    "description": "test",
    "api_key": "testtttt",
    "application": "000000000000000000000004",
    "created_at": "2020-12-16T12:27:48.051Z",
    "updated_at": "2020-12-16T12:27:48.051Z",
    "slug": "test-falconide-application-falconide-ZTD-D7wbB",
    "__v": 0
  }
}
```
</details>

</details>









---


### updateEmailTemplateById
Update email template by id



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.updateEmailTemplateById({  id : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.updateEmailTemplateById({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
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
  "value": {
    "is_system": false,
    "is_internal": false,
    "description": "test template",
    "static_to": [
      "abc@gofynd.com"
    ],
    "static_cc": [
      "abc@gofynd.com"
    ],
    "static_bcc": [
      "abc@gofynd.com"
    ],
    "tags": [],
    "priority": "low",
    "published": false,
    "_id": "5ef42a49c8b67d279c27a980",
    "name": "test",
    "keys": {
      "bcc": "abc@gofynd.com"
    },
    "reply_to": "abc@gofynd.com",
    "headers": [
      {
        "key": "x-test-header",
        "value": "test123"
      }
    ],
    "subject": {
      "template_type": "static",
      "template": "This is test email"
    },
    "html": {
      "template_type": "static",
      "template": "This is test email"
    },
    "text": {
      "template_type": "static",
      "template": "This is test email"
    },
    "attachments": [],
    "created_at": "2021-02-08T03:33:42.103Z",
    "updated_at": "2021-02-08T03:33:42.103Z",
    "slug": "test-fZfGq0lSQ",
    "__v": 0
  }
}
```
</details>

</details>









---


### updateSmsProviderById
Update sms provider by id



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.updateSmsProviderById({  id : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.updateSmsProviderById({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
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
  "value": {
    "rpt": 1,
    "type": "application",
    "provider": "telspiel",
    "_id": "5fd9fd07c474a7710dd376d5",
    "name": "test telspiel",
    "description": "test",
    "sender": "test",
    "username": "test",
    "authkey": "test",
    "application": "000000000000000000000004",
    "created_at": "2020-12-16T12:26:47.794Z",
    "updated_at": "2020-12-16T12:26:47.794Z",
    "slug": "test-telspiel-application-telspiel-p9UY1r7nG",
    "__v": 0
  }
}
```
</details>

</details>









---


### updateSmsTemplateById
Update sms template by id



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.updateSmsTemplateById({  id : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.updateSmsTemplateById({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
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
  "value": {
    "is_system": false,
    "is_internal": true,
    "description": "This is a test sms template",
    "priority": "high",
    "tags": [],
    "published": true,
    "_id": "5fd447728394dbf0d21329b3",
    "slug": "test-sms",
    "name": "Test sms",
    "message": {
      "template_type": "nunjucks",
      "template": "This is a test sms for order - {{ orderId }}"
    },
    "template_variables": {
      "orderId": "12345"
    },
    "created_at": "2020-12-12T04:30:42.456Z",
    "updated_at": "2020-12-24T15:13:20.558Z",
    "__v": 0
  }
}
```
</details>

</details>









---


### verfiyOtp
Verify OTP sent via email and sms



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").communication.verfiyOtp({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").communication.verfiyOtp({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [VerifyOtpCommsReq](#VerifyOtpCommsReq) | yes | Request body |


Verify OTP sent via email and sms

*Returned Response:*




[VerifyOtpCommsSuccessRes](#VerifyOtpCommsSuccessRes)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "success": true,
    "mobile": "9096686804",
    "country_code": "91",
    "message": "OTP verified"
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




