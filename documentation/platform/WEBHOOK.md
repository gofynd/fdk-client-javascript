




##### [Back to Platform docs](./README.md)

## Webhook Methods
This service provides functionality to emits different events to the subscribed webhook url's. It auto retry three times for all the failed events after certain interval as well as you can also retry manually the failed events and can view the reports.


Default
* [cancelJobByName](#canceljobbyname)
* [downloadDeliveryReport](#downloaddeliveryreport)
* [fetchAllEventConfigurations](#fetchalleventconfigurations)
* [getDeliveryReports](#getdeliveryreports)
* [getEventCounts](#geteventcounts)
* [getHistoricalReports](#gethistoricalreports)
* [getManualRetryStatus](#getmanualretrystatus)
* [getReportFilters](#getreportfilters)
* [getSubscriberById](#getsubscriberbyid)
* [getSubscribersByCompany](#getsubscribersbycompany)
* [getSubscribersByExtensionId](#getsubscribersbyextensionid)
* [manualRetryCancel](#manualretrycancel)
* [manualRetryOfFailedEvent](#manualretryoffailedevent)
* [pingWebhook](#pingwebhook)
* [registerSubscriberToEvent](#registersubscribertoevent)
* [updateSubscriberConfig](#updatesubscriberconfig)




## Methods with example and description





### cancelJobByName
Cancel a report export.



```javascript
// Promise
const promise = platformClient.webhook.cancelJobByName({  filename : value });

// Async/Await
const data = await platformClient.webhook.cancelJobByName({  filename : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| filename | string | yes |  |  



Cancel the export of a specific report for a company.


*Returned Response:*




[CancelResponse](#CancelResponse)

Report export canceled successfully.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "code": 200
  }
}
```
</details>

</details>









---


### downloadDeliveryReport
Download processed events report for a company.



```javascript
// Promise
const promise = platformClient.webhook.downloadDeliveryReport({  body : value });

// Async/Await
const data = await platformClient.webhook.downloadDeliveryReport({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [EventProcessRequest](#EventProcessRequest) | yes | Request body |


Download reports for a specific company based on the provided filters.


*Returned Response:*




[DownloadReportResponse](#DownloadReportResponse)

Successfully downloaded the report.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "file_name": "exportJMehD_1689675047609"
  }
}
```
</details>

</details>









---


### fetchAllEventConfigurations
Get All Webhook Events.



```javascript
// Promise
const promise = platformClient.webhook.fetchAllEventConfigurations();

// Async/Await
const data = await platformClient.webhook.fetchAllEventConfigurations();
```






To fetch all webhook events.


*Returned Response:*




[EventConfigResponse](#EventConfigResponse)

Successfully received ping for the provided webhook url.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "event_configs": [
      {
        "id": 1,
        "event_name": "article",
        "event_type": "create",
        "event_category": "application",
        "version": "1",
        "display_name": "article",
        "description": "This event gets triggered when an article is created",
        "event_schema": null,
        "created_on": "2021-12-20T17:38:22.922Z",
        "updated_on": "2023-07-26T12:30:30.930Z"
      }
    ]
  }
}
```
</details>

</details>









---


### getDeliveryReports
Get processed events report for a company.



```javascript
// Promise
const promise = platformClient.webhook.getDeliveryReports({  body : value });

// Async/Await
const data = await platformClient.webhook.getDeliveryReports({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [EventProcessRequest](#EventProcessRequest) | yes | Request body |


Retrieve a list of processed events for a specific company based on the provided filters.


*Returned Response:*




[EventProcessReports](#EventProcessReports)

Successfully retrieved the processed events report.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "rows": [
      {
        "event_name": "article.create.v1.application",
        "response_code": 404,
        "response_message": "Not Found",
        "data": "{}",
        "attempt": 3,
        "last_attempted_on": 1696835661617,
        "status": "FAILED",
        "name": "sub23",
        "webhook_url": "https://webhook.site/512b843c-4a3b-4263-9acf-6fc9ad50c042",
        "response_time": "20000,",
        "message_id": "tYYGTlhqxW7byvmDEIqTXOMmGoF8O5zAZ87IT3TV8DA=",
        "event_trace_id": "[\"wildrider.c6a8c2b0-659f-11ee-b7f8-ba52e867b4c8\"]"
      }
    ]
  }
}
```
</details>

</details>









---


### getEventCounts
Get the count of failed events for a company within a specified date range.



```javascript
// Promise
const promise = platformClient.webhook.getEventCounts({  body : value });

// Async/Await
const data = await platformClient.webhook.getEventCounts({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [RetryEventRequest](#RetryEventRequest) | yes | Request body |


Retrieves the count of failed events for a specific company within the specified date range. The user can filter the count based on specific event types if provided.


*Returned Response:*




[RetryCountResponse](#RetryCountResponse)

Initiates a manual retry for event processing for a specific company. This endpoint allows the user to specify the date range (start_date and end_date) within which the events should be retried.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "items": [
      {
        "status": "FAILED",
        "count": 10
      }
    ]
  }
}
```
</details>

</details>









---


### getHistoricalReports
Get report download history.



```javascript
// Promise
const promise = platformClient.webhook.getHistoricalReports({  body : value });

// Async/Await
const data = await platformClient.webhook.getHistoricalReports({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [HistoryPayload](#HistoryPayload) | yes | Request body |


Retrieve history reports for a specific company based on the provided filters.


*Returned Response:*




[HistoryResponse](#HistoryResponse)

It will give list of all the reports that was downloaded.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": [
    {
      "id": 25,
      "association": {
        "company_id": 24
      },
      "filters": {
        "status": "FAILED",
        "end_date": "2023-07-18T09:38:07.000Z",
        "start_date": "2023-07-17T09:38:07.000Z",
        "subscribers": [
          40
        ]
      },
      "filename": "exportJMehD_1689675047609",
      "status": "COMPLETED",
      "upload_service_response": {
        "cdn": {
          "urls": [
            {
              "url": "https://storage.googleapis.com/fynd-data-platform-fynd-x0/fp-analytics-query-result/exportJMehD_1689675047609/000000000000.csv.gz?GoogleAccessId=dms-to-bq%40fynd-1088.iam.gserviceaccount.com&Expires=1692267060&Signature=aPhTRMOJswVhx5jTYF7JV42aPQKJ4Mkzv9vJr8zqrbpso00GytuhmBnpP1Gxt%2BoTnIINyWUWAuchlm6paS9yKFrjCXemsqSM0hqTA8T0MUjng3swZAtZuWK4dVK2jMyOv88l1Xn8tkrwOFo7ohG3scFwgjplrU%2FkMUNZqxw4fdgdUUXZ%2BJrnGC5jlGkz5PTooRtForUXtTkA8Kf9mJvX3F6f6p5I2VvhzmXHGMabavEjgZ56JUe2%2B0o5POs4jN0s%2F6fZGOz4hhLa9hMIyQpjoodbcGO%2BRCKukxRbY1s00%2F1WNGLLYYuU4bvqtME60rCnj0FHEmbte4Tr73SmOU4xwg%3D%3D",
              "name": "000000000000.csv.gz"
            }
          ]
        }
      },
      "created_on": "2023-07-18T10:10:49.189Z",
      "updated_on": "2023-07-18T10:10:50.798Z",
      "message": "Completed in less than 1 min"
    }
  ]
}
```
</details>

</details>









---


### getManualRetryStatus
Get the retry status for a company's failed events.



```javascript
// Promise
const promise = platformClient.webhook.getManualRetryStatus();

// Async/Await
const data = await platformClient.webhook.getManualRetryStatus();
```






Retrieves the status of retry for a specific company's failed events. This endpoint returns the total number of events, the count of successfully retried events, the count of failed retry attempts, and the overall status of the retry process.


*Returned Response:*




[RetryStatusResponse](#RetryStatusResponse)

Successful response with the retry status.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "total_event": 100,
    "success_count": 60,
    "failure_count": 40,
    "status": "in_progress"
  }
}
```
</details>

</details>









---


### getReportFilters
Get filters for a company.



```javascript
// Promise
const promise = platformClient.webhook.getReportFilters({  body : value });

// Async/Await
const data = await platformClient.webhook.getReportFilters({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ReportFiltersPayload](#ReportFiltersPayload) | yes | Request body |


Retrieve filters for a specific company based on the provided subscriber IDs.


*Returned Response:*




[Array<ReportFilterResponse>](#Array<ReportFilterResponse>)

Successfully retrieved the filters.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": [
    {
      "filter_name": "Event",
      "values": [
        {
          "text": "article.create-v1 (company)",
          "value": {
            "event_name": "article",
            "event_type": "create",
            "event_category": "company",
            "version": "1"
          }
        }
      ]
    }
  ]
}
```
</details>

</details>









---


### getSubscriberById
Get Subscriber By Subscriber ID



```javascript
// Promise
const promise = platformClient.webhook.getSubscriberById({  subscriberId : value });

// Async/Await
const data = await platformClient.webhook.getSubscriberById({  subscriberId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| subscriberId | number | yes | subscriber id |  



Get Subscriber By Subscriber ID

*Returned Response:*




[SubscriberResponse](#SubscriberResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "id": 1,
    "name": "praveen's webhook",
    "webhook_url": "https://webhook.site/67493d35-6468-4c0a-8226-9a50954eb4c3",
    "association": {
      "company_id": 1,
      "application_id": [],
      "criteria": "EMPTY"
    },
    "status": "active",
    "custom_headers": {},
    "auth_meta": {},
    "email_id": "abc@gofynd.com",
    "type": null,
    "created_on": "2023-06-07T06:57:24.567Z",
    "updated_on": "2023-06-07T06:57:24.567Z",
    "modified_by": "praveen",
    "event_configs": [
      {
        "id": 10,
        "event_name": "article",
        "event_type": "create",
        "event_category": "company",
        "version": "1",
        "display_name": "article",
        "description": "This event gets triggered when article is created",
        "type": null,
        "event_schema": {},
        "created_on": "2021-07-05T11:16:18.175Z",
        "updated_on": "2023-01-02T05:04:24.492Z",
        "modified_by": "praveen",
        "subscriber_event_mapping": {
          "id": 77,
          "event_id": 10,
          "subscriber_id": 35,
          "created_on": "2023-06-07T06:57:24.592Z"
        }
      }
    ]
  }
}
```
</details>

</details>









---


### getSubscribersByCompany
Get Subscribers By CompanyId.



```javascript
// Promise
const promise = platformClient.webhook.getSubscribersByCompany({  pageNo : value,
 pageSize : value,
 extensionId : value });

// Async/Await
const data = await platformClient.webhook.getSubscribersByCompany({  pageNo : value,
 pageSize : value,
 extensionId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | Page Number |    
| pageSize | number | no | Page Size |    
| extensionId | string | no | extension_id |  



Get Subscribers By Company ID.


*Returned Response:*




[SubscriberConfigList](#SubscriberConfigList)

Subscribers By Company ID.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "items": [
      {
        "id": 1,
        "name": "sub23",
        "webhook_url": "https://webhook.site/512b843c-4a3b-4263-9acf-6fc9ad50c042",
        "association": {
          "company_id": 1,
          "application_id": [
            "64aed377b1fd04565d0dff30",
            "64c00b72c07acacc1357503b",
            "64c0ff70eb99eb4a878a7f81",
            "64c117dbeb99eb4a878a9621",
            "000000000000000000000001",
            "000000000000000000000004"
          ],
          "criteria": "SPECIFIC-EVENTS"
        },
        "status": "inactive",
        "custom_headers": {},
        "auth_meta": {
          "type": "hmac",
          "secret": "test1234"
        },
        "email_id": "nikhil@gmail112.com",
        "type": null,
        "created_on": "2023-07-26T12:30:30.235Z",
        "updated_on": "2023-07-31T14:45:50.860Z",
        "modified_by": "Shailendrapal Shekhawat",
        "event_configs": [
          {
            "id": 1,
            "event_name": "article",
            "event_type": "create",
            "event_category": "application",
            "version": "1",
            "display_name": "article",
            "description": "This event gets triggered when an article is created",
            "event_schema": {},
            "created_on": "2021-12-20T17:38:22.922Z",
            "updated_on": "2023-07-26T12:30:30.930Z",
            "subscriber_event_mapping": {
              "id": 765,
              "event_id": 1,
              "subscriber_id": 1,
              "created_on": "2023-07-26T12:30:30.305Z"
            }
          }
        ]
      }
    ],
    "page": {
      "current": 1,
      "has_next": false,
      "has_previous": false,
      "item_total": 1,
      "size": 10,
      "type": "number"
    }
  }
}
```
</details>

</details>









---


### getSubscribersByExtensionId
Get Subscribers By Extension ID



```javascript
// Promise
const promise = platformClient.webhook.getSubscribersByExtensionId({  extensionId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.webhook.getSubscribersByExtensionId({  extensionId : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | Page Number |    
| pageSize | number | no | Page Size |   
| extensionId | string | yes | extension_id |  



Get Subscribers By ExtensionID

*Returned Response:*




[SubscriberConfigList](#SubscriberConfigList)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "items": [
      {
        "id": 3,
        "name": "64b3dc661a1b16dea7fadc22",
        "webhook_url": "https://reviews.extensions.fyndx1.de/ext/reviews-webhook",
        "association": {
          "company_id": 47,
          "extension_id": "64b3dc661a1b16dea7fadc22",
          "application_id": [],
          "criteria": "ALL"
        },
        "status": "active",
        "custom_headers": {},
        "auth_meta": {
          "type": "hmac",
          "secret": "9gX_S6e28DY1mRP"
        },
        "email_id": "devas@gofynd.com",
        "type": null,
        "created_on": "2023-07-26T12:30:41.525Z",
        "updated_on": "2023-08-01T07:21:33.982Z",
        "modified_by": "Sneha Mohite",
        "event_configs": [
          {
            "id": 84,
            "event_name": "shipment",
            "event_type": "update",
            "event_category": "application",
            "version": "1",
            "display_name": "shipment",
            "description": "This event gets triggered when shipment is update",
            "event_schema": {},
            "created_on": "2021-07-02T13:25:34.804Z",
            "updated_on": "2021-07-02T13:25:34.804Z",
            "subscriber_event_mapping": {
              "id": 779,
              "event_id": 84,
              "subscriber_id": 3,
              "created_on": "2023-07-26T12:30:41.532Z"
            }
          }
        ]
      }
    ],
    "page": {
      "current": 1,
      "has_next": false,
      "has_previous": false,
      "item_total": 1,
      "size": 10,
      "type": "number"
    }
  }
}
```
</details>

</details>









---


### manualRetryCancel
Cancel the active manual retry for a company's failed events.



```javascript
// Promise
const promise = platformClient.webhook.manualRetryCancel();

// Async/Await
const data = await platformClient.webhook.manualRetryCancel();
```






Cancels the active manual retry for a specific company's failed events. If a manual retry is currently in progress, it will be cancelled.


*Returned Response:*




[string](#string)

Manual retry cancelled successfully.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": "Events cancelled successfully"
}
```
</details>

</details>









---


### manualRetryOfFailedEvent
Initiate a manual retry for event processing.



```javascript
// Promise
const promise = platformClient.webhook.manualRetryOfFailedEvent({  body : value });

// Async/Await
const data = await platformClient.webhook.manualRetryOfFailedEvent({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [RetryEventRequest](#RetryEventRequest) | yes | Request body |


Initiates a manual retry for event processing for a specific company. This endpoint allows the user to specify the date range (start_date and end_date) within which the events should be retried.


*Returned Response:*




[RetrySuccessResponse](#RetrySuccessResponse)

Initiates a manual retry for event processing for a specific company. This endpoint allows the user to specify the date range (start_date and end_date) within which the events should be retried.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "message": "Manual Retry Processed Started Successfully"
  }
}
```
</details>

</details>









---


### pingWebhook
Ping and validate webhook url.



```javascript
// Promise
const promise = platformClient.webhook.pingWebhook({  body : value });

// Async/Await
const data = await platformClient.webhook.pingWebhook({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PingWebhook](#PingWebhook) | yes | Request body |


Ping and validate webhook url.


*Returned Response:*




[PingWebhookResponse](#PingWebhookResponse)

Successfully received ping for the provided webhook url.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "status": "FAILED",
    "message": "Request failed with status code 429",
    "code": 200
  }
}
```
</details>

</details>









---


### registerSubscriberToEvent
Register Subscriber.



```javascript
// Promise
const promise = platformClient.webhook.registerSubscriberToEvent({  body : value });

// Async/Await
const data = await platformClient.webhook.registerSubscriberToEvent({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [SubscriberConfig](#SubscriberConfig) | yes | Request body |


Register Subscriber.


*Returned Response:*




[SubscriberConfigResponse](#SubscriberConfigResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "name": "xyz webhook",
    "webhook_url": "https://xyz.requestcatcher.com/test",
    "association": {
      "company_id": 1,
      "extension_id": "64affd97cbddb85348ca8f93",
      "application_id": [
        "63a0490757475baff6154585",
        "63a42b512df5d4731c5eb601"
      ]
    },
    "custom_headers": {},
    "status": "active",
    "email_id": "axyz@gofynd.com",
    "auth_meta": {},
    "event_id": [
      10,
      11,
      17
    ]
  }
}
```
</details>

</details>









---


### updateSubscriberConfig
Update Subscriber



```javascript
// Promise
const promise = platformClient.webhook.updateSubscriberConfig({  body : value });

// Async/Await
const data = await platformClient.webhook.updateSubscriberConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [SubscriberConfig](#SubscriberConfig) | yes | Request body |


Update Subscriber

*Returned Response:*




[SubscriberConfigResponse](#SubscriberConfigResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "id": 35,
    "name": "xyz webhook",
    "webhook_url": "https://xyz.requestcatcher.com/test",
    "association": {
      "company_id": 2,
      "application_id": [
        "63a0490757475baff6154585",
        "63a42b512df5d4731c5eb601"
      ]
    },
    "custom_headers": {},
    "status": "active",
    "email_id": "axyz@gofynd.com",
    "auth_meta": {},
    "event_id": [
      10,
      11,
      17
    ]
  }
}
```
</details>

</details>









---




### Schemas


#### [Association](#Association)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application_id | [string]? |  yes  |  |
 | company_id | number? |  yes  |  |
 | criteria | string? |  yes  |  |
 | extension_id | string? |  yes  |  |
 

---

#### [AuthMeta](#AuthMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | secret | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [CancelResponse](#CancelResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | The HTTP status code of the response (e.g., 200). |
 

---

#### [CdnObject](#CdnObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | urls | [[Url](#Url)]? |  yes  |  |
 

---

#### [DownloadReportResponse](#DownloadReportResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | file_name | string? |  yes  |  |
 

---

#### [Err](#Err)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | location | string? |  yes  |  |
 | msg | string? |  yes  |  |
 | param | string? |  yes  |  |
 

---

#### [Error](#Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string? |  yes  | Error message describing the reason for the failure. |
 

---

#### [Event](#Event)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | event_category | string? |  yes  |  |
 | event_name | string? |  yes  |  |
 | event_type | string? |  yes  |  |
 | version | string? |  yes  |  |
 

---

#### [EventConfig](#EventConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string? |  yes  |  |
 | description | string? |  yes  |  |
 | display_name | string? |  yes  |  |
 | event_category | string? |  yes  |  |
 | event_name | string? |  yes  |  |
 | event_schema | string? |  yes  |  |
 | event_type | string? |  yes  |  |
 | id | number? |  yes  |  |
 | updated_on | string? |  yes  |  |
 | version | string? |  yes  |  |
 

---

#### [EventConfigResponse](#EventConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | event_configs | [[EventConfig](#EventConfig)]? |  yes  |  |
 

---

#### [EventConfigs](#EventConfigs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string? |  yes  |  |
 | description | string? |  yes  |  |
 | display_name | string? |  yes  |  |
 | event_category | string? |  yes  |  |
 | event_name | string? |  yes  |  |
 | event_schema | string? |  yes  |  |
 | event_type | string? |  yes  |  |
 | id | number? |  yes  |  |
 | subscriber_event_mapping | [SubscriberEventMapping](#SubscriberEventMapping)? |  yes  |  |
 | updated_on | string? |  yes  |  |
 | version | string? |  yes  |  |
 

---

#### [EventProcessReportObject](#EventProcessReportObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attempt | number? |  yes  | The attempt number of the event. |
 | data | string? |  yes  | The data associated with the event. |
 | event_name | string? |  yes  | The name of the processed event. |
 | event_trace_id | string? |  yes  |  |
 | last_attempted_on | number? |  yes  | The timestamp of the last attempted event. |
 | message_id | string? |  yes  |  |
 | name | string? |  yes  | The name of the event. |
 | response_code | number? |  yes  | The response code of the event. |
 | response_message | string? |  yes  | The response message of the event. |
 | response_time | number? |  yes  | The response time of the event. |
 | status | string? |  yes  | The status of the event (e.g., "FAILED"). |
 | webhook_url | string? |  yes  | The webhook URL associated with the event. |
 

---

#### [EventProcessReports](#EventProcessReports)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [Page](#Page)? |  yes  |  |
 | rows | [[EventProcessReportObject](#EventProcessReportObject)]? |  yes  |  |
 

---

#### [EventProcessRequest](#EventProcessRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end_date | string? |  yes  |  |
 | event | [[Event](#Event)]? |  yes  |  |
 | search_text | string? |  yes  |  |
 | start_date | string? |  yes  |  |
 | status | string? |  yes  |  |
 | subscriber_ids | [number]? |  yes  |  |
 

---

#### [HistoryAssociation](#HistoryAssociation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number? |  yes  |  |
 | subscriber_ids | [number]? |  yes  |  |
 

---

#### [HistoryFilters](#HistoryFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end_date | string? |  yes  | The end date and time of the history report. |
 | events | [string]? |  yes  |  |
 | search_text | string? |  yes  |  |
 | start_date | string? |  yes  | The start date and time of the history report. |
 | status | string? |  yes  | The status of the history report (e.g., "FAILED"). |
 | subscribers | [number]? |  yes  | An array of subscriber IDs associated with the history report. |
 

---

#### [HistoryItems](#HistoryItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | association | [HistoryAssociation](#HistoryAssociation)? |  yes  |  |
 | created_on | string? |  yes  | The date and time when the history report was created. |
 | filename | string? |  yes  | The filename of the history report. |
 | filters | [HistoryFilters](#HistoryFilters)? |  yes  |  |
 | id | number? |  yes  | The ID of the history report. |
 | message | string? |  yes  | A message related to the history report. |
 | status | string? |  yes  | The status of the history report (e.g., "COMPLETED"). |
 | updated_on | string? |  yes  | The date and time when the history report was last updated. |
 | upload_service_response | [UploadServiceObject](#UploadServiceObject)? |  yes  |  |
 

---

#### [HistoryPayload](#HistoryPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page_no | number? |  yes  | The page number of the history report. |
 | page_size | number? |  yes  | The number of records per page. |
 | type | string? |  yes  | The type of history report (e.g., "platform"). |
 

---

#### [HistoryResponse](#HistoryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[HistoryItems](#HistoryItems)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [Item](#Item)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number? |  yes  |  |
 | status | string? |  yes  |  |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  | The current page number. |
 | has_next | boolean? |  yes  | Indicates if there is a next page. |
 | has_previous | boolean? |  yes  | Indicates if there is a previous page. |
 | item_total | number? |  yes  | The total number of items. |
 | size | number? |  yes  | The number of items per page. |
 | total_page | number? |  yes  |  |
 | type | string? |  yes  | Type of the response (e.g., "number"). |
 

---

#### [PingWebhook](#PingWebhook)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | auth_meta | string? |  yes  | Authentication metadata (if required by the subscriber). |
 | custom_headers | string? |  yes  | Custom headers to include in the ping request. |
 | webhook_url | string? |  yes  | The URL of the subscriber's webhook to ping. |
 

---

#### [PingWebhookResponse](#PingWebhookResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | number? |  yes  | The HTTP status code of the ping response (e.g., 200). |
 | message | string? |  yes  | An optional message related to the ping. |
 | status | string? |  yes  | The status of the ping (e.g., "SUCCESS"). |
 

---

#### [ReportFilterResponse](#ReportFilterResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filter_name | string? |  yes  | The name of the filter. |
 | values | [string]? |  yes  |  |
 

---

#### [ReportFiltersPayload](#ReportFiltersPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | subscriber_ids | [number]? |  yes  | An array of subscriber IDs for filtering filters (optional). |
 

---

#### [RetryCountResponse](#RetryCountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Item](#Item)]? |  yes  |  |
 

---

#### [RetryEventRequest](#RetryEventRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end_date | string? |  yes  |  |
 | event | [[Event](#Event)]? |  yes  |  |
 | search_text | string? |  yes  |  |
 | start_date | string? |  yes  |  |
 | status | string? |  yes  |  |
 | subscriber_ids | [number]? |  yes  |  |
 

---

#### [RetryFailureResponse](#RetryFailureResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | err | [[Err](#Err)]? |  yes  |  |
 

---

#### [RetryStatusResponse](#RetryStatusResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | failure_count | number? |  yes  | The count of failed retry attempts. |
 | status | string? |  yes  | The overall status of the retry process (e.g., "completed"). |
 | success_count | number? |  yes  | The count of successfully retried events. |
 | total_event | number? |  yes  | The total number of events that require retry. |
 

---

#### [RetrySuccessResponse](#RetrySuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [SubscriberConfig](#SubscriberConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | association | [Association](#Association)? |  yes  |  |
 | auth_meta | [AuthMeta](#AuthMeta)? |  yes  |  |
 | custom_headers | string? |  yes  |  |
 | email_id | string? |  yes  |  |
 | event_id | [number]? |  yes  |  |
 | id | number? |  yes  |  |
 | name | string? |  yes  |  |
 | status | [SubscriberStatus](#SubscriberStatus)? |  yes  |  |
 | webhook_url | string? |  yes  |  |
 

---

#### [SubscriberConfigList](#SubscriberConfigList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SubscriberResponse](#SubscriberResponse)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [SubscriberConfigResponse](#SubscriberConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | association | [Association](#Association)? |  yes  |  |
 | auth_meta | [AuthMeta](#AuthMeta)? |  yes  |  |
 | created_on | string? |  yes  |  |
 | custom_headers | string? |  yes  |  |
 | email_id | string? |  yes  |  |
 | event_id | [number]? |  yes  |  |
 | id | number? |  yes  |  |
 | modified_by | string? |  yes  |  |
 | name | string? |  yes  |  |
 | status | [SubscriberStatus](#SubscriberStatus)? |  yes  |  |
 | type | string? |  yes  |  |
 | updated_on | string? |  yes  |  |
 | webhook_url | string? |  yes  |  |
 

---

#### [SubscriberEventMapping](#SubscriberEventMapping)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string? |  yes  |  |
 | event_id | number? |  yes  |  |
 | id | number? |  yes  |  |
 | subscriber_id | number? |  yes  |  |
 

---

#### [SubscriberFailureResponse](#SubscriberFailureResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | message | string? |  yes  |  |
 | stack | string? |  yes  |  |
 

---

#### [SubscriberResponse](#SubscriberResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | association | [Association](#Association)? |  yes  |  |
 | auth_meta | [AuthMeta](#AuthMeta)? |  yes  |  |
 | created_on | string? |  yes  |  |
 | custom_headers | string? |  yes  |  |
 | email_id | string? |  yes  |  |
 | event_configs | [[EventConfigs](#EventConfigs)]? |  yes  |  |
 | id | number? |  yes  |  |
 | modified_by | string? |  yes  |  |
 | name | string? |  yes  |  |
 | status | [SubscriberStatus](#SubscriberStatus)? |  yes  |  |
 | type | string? |  yes  |  |
 | updated_on | string? |  yes  |  |
 | webhook_url | string? |  yes  |  |
 

---

#### [UploadServiceObject](#UploadServiceObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cdn | [CdnObject](#CdnObject)? |  yes  |  |
 

---

#### [Url](#Url)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  | The name of the uploaded report file. |
 | url | string? |  yes  | The URL of the uploaded report file. |
 

---




### Enums





 #### [SubscriberStatus](#SubscriberStatus)
 Type : string

 | Name | Value | Description |
 | ---- | ----- | ----------- |
 | active | active | Status is active |
 | inactive | inactive | Status is inactive |
 | blocked | blocked | Subscriber is blocked by system due to multiple failed delivery attempts. |

---






