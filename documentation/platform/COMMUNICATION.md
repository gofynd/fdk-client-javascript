



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
* [sendCommunicationSynchronously](#sendcommunicationsynchronously)
* [sendCommunicationAsynchronously](#sendcommunicationasynchronously)
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


### sendCommunicationSynchronously
Send email or sms synchronously



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.sendCommunicationSynchronously({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.sendCommunicationSynchronously({  body : value });
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


### sendCommunicationAsynchronously
Send email or sms asynchronously



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").communication.sendCommunicationAsynchronously({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").communication.sendCommunicationAsynchronously({  body : value });
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
 | from_address | [[EmailProviderReqFrom](#EmailProviderReqFrom)] |  no  |  |

---


 
 
 #### [EmailProvider](#EmailProvider)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | provider | string |  no  |  |
 | from_address | [[EmailProviderReqFrom](#EmailProviderReqFrom)] |  no  |  |
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


 
 
 #### [PayloadEmailTemplateStructure](#PayloadEmailTemplateStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [PayloadEmailProviderStructure](#PayloadEmailProviderStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |

---


 
 
 #### [PayloadEmailStructure](#PayloadEmailStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | template | [PayloadEmailTemplateStructure](#PayloadEmailTemplateStructure) |  no  |  |
 | provider | [PayloadEmailProviderStructure](#PayloadEmailProviderStructure) |  no  |  |

---


 
 
 #### [PayloadSmsTemplateStructure](#PayloadSmsTemplateStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [PayloadSmsProviderStructure](#PayloadSmsProviderStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |

---


 
 
 #### [PayloadSmsStructure](#PayloadSmsStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | template | [PayloadSmsTemplateStructure](#PayloadSmsTemplateStructure) |  no  |  |
 | provider | [PayloadSmsProviderStructure](#PayloadSmsProviderStructure) |  no  |  |

---


 
 
 #### [PayloadStructure](#PayloadStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [string] |  no  |  |
 | email | [PayloadEmailStructure](#PayloadEmailStructure) |  no  |  |
 | sms | [PayloadSmsStructure](#PayloadSmsStructure) |  no  |  |
 | application | string |  no  |  |

---


 
 
 #### [MetaStructure](#MetaStructure)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | job_type | string |  no  |  |
 | action | string |  no  |  |
 | trace | string |  no  |  |
 | timestamp | string |  no  |  |

---


 
 
 #### [EngineRequest](#EngineRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payload | [PayloadStructure](#PayloadStructure) |  no  |  |
 | meta | [MetaStructure](#MetaStructure) |  no  |  |

---


 
 
 #### [EngineResponse](#EngineResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |

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




