




##### [Back to Partner docs](./README.md)

## Webhook Methods
Webhook dispatcher with retry and one event to many subscriber vice versa


Default
* [cancelReportDownload](#cancelreportdownload)
* [fetchDeliverySummary](#fetchdeliverysummary)
* [fetchDeliveryTs](#fetchdeliveryts)
* [fetchReportFilters](#fetchreportfilters)
* [fetchSubscribers](#fetchsubscribers)
* [getDeliveryDetailInsights](#getdeliverydetailinsights)
* [getHistoricalReports](#gethistoricalreports)
* [getInvalidEventList](#getinvalideventlist)
* [updateSubscriber](#updatesubscriber)




## Methods with example and description





### cancelReportDownload
Cancel report download job



```javascript
// Promise
const promise = partnerClient.webhook.cancelReportDownload({  organizationId : value,
 extensionId : value,
 filename : value });

// Async/Await
const data = await partnerClient.webhook.cancelReportDownload({  organizationId : value,
 extensionId : value,
 filename : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | organization_id |   
| extensionId | string | yes | extension_id |   
| filename | string | yes | filename |  



Cancel report download job

*Returned Response:*




[CancelDownloadResponse](#CancelDownloadResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "message": "Job cancelled successfully",
    "result": "SUCCESS"
  }
}
```
</details>

</details>









---


### fetchDeliverySummary
Webhook delivery summary



```javascript
// Promise
const promise = partnerClient.webhook.fetchDeliverySummary({  organizationId : value,
 extensionId : value,
 startDate : value,
 endDate : value });

// Async/Await
const data = await partnerClient.webhook.fetchDeliverySummary({  organizationId : value,
 extensionId : value,
 startDate : value,
 endDate : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | organization_id |   
| extensionId | string | yes | extension_id |   
| startDate | string | yes | start_date |   
| endDate | string | yes | end_date |  



Webhook delivery summary

*Returned Response:*




[DeliverySummaryResponse](#DeliverySummaryResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "delivery_event_level": [
      {
        "event": "product-size",
        "success": 1121,
        "failed": 0,
        "failed_percentage": 0,
        "removed_webhooks": 0,
        "total": 1121,
        "response_time": 95.08
      }
    ],
    "delivery_summary": {
      "success": 1121,
      "response_time": 95.08,
      "failed_percentage": 0,
      "removed_webhooks": 0
    }
  }
}
```
</details>

</details>









---


### fetchDeliveryTs
Webhook delivery ts



```javascript
// Promise
const promise = partnerClient.webhook.fetchDeliveryTs({  organizationId : value,
 extensionId : value,
 startDate : value,
 endDate : value });

// Async/Await
const data = await partnerClient.webhook.fetchDeliveryTs({  organizationId : value,
 extensionId : value,
 startDate : value,
 endDate : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | organization_id |   
| extensionId | string | yes | extension_id |   
| startDate | string | yes | start_date |   
| endDate | string | yes | end_date |  



Webhook delivery ts

*Returned Response:*




[DeliveryTsResponse](#DeliveryTsResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "delivery_ts": [
      {
        "timestamp": {
          "value": "2023-11-01T05:02:51.000Z"
        },
        "failed": 0,
        "removed_webhooks": 0,
        "success": 1121
      }
    ]
  }
}
```
</details>

</details>









---


### fetchReportFilters
Fetch webhook report filters



```javascript
// Promise
const promise = partnerClient.webhook.fetchReportFilters({  organizationId : value,
 extensionId : value,
 startDate : value,
 endDate : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await partnerClient.webhook.fetchReportFilters({  organizationId : value,
 extensionId : value,
 startDate : value,
 endDate : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | organization_id |   
| extensionId | string | yes | extension_id |   
| startDate | string | yes | start_date |   
| endDate | string | yes | end_date |   
| pageNo | number | yes | page_no |   
| pageSize | number | yes | page_size |  



Fetch webhook report filters

*Returned Response:*




[Array<FilterReportResponse>](#Array<FilterReportResponse>)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": [
    {
      "filter_name": "Event",
      "values": null
    },
    {
      "text": "article.delete-v1 (company)",
      "value": {
        "event_name": "article",
        "event_type": "delete",
        "event_category": "company",
        "version": "1"
      }
    },
    {
      "filter_name": "Subscriber Name",
      "values": null
    },
    {
      "text": "64206a45609cb12dd02310eb",
      "value": 1604
    },
    {
      "filter_name": "Company Name",
      "values": []
    }
  ]
}
```
</details>

</details>









---


### fetchSubscribers
Fetch subscriber by filters



```javascript
// Promise
const promise = partnerClient.webhook.fetchSubscribers({  organizationId : value,
 extensionId : value });

// Async/Await
const data = await partnerClient.webhook.fetchSubscribers({  organizationId : value,
 extensionId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | organization_id |   
| extensionId | string | yes | extension_id |  



Fetch subscriber by filters

*Returned Response:*




[SubscriberConfigResponse](#SubscriberConfigResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": [
    {
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
  ]
}
```
</details>

</details>









---


### getDeliveryDetailInsights
Get the insights of delivery details of the events that was pushed to subscribers



```javascript
// Promise
const promise = partnerClient.webhook.getDeliveryDetailInsights({  organizationId : value,
 extensionId : value,
 body : value });

// Async/Await
const data = await partnerClient.webhook.getDeliveryDetailInsights({  organizationId : value,
 extensionId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | organization_id |   
| extensionId | string | yes | extension_id |  
| body | [DeliveryDetailsRequest](#DeliveryDetailsRequest) | yes | Request body |


Get the delivery details insights

*Returned Response:*




[DeliveryDetailsResponse](#DeliveryDetailsResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "rows": [
      {
        "event_name": "product-size.create.v2.company",
        "response_code": 200,
        "response_message": "OK",
        "data": {
          "company_id": 327
        },
        "attempt": 1,
        "last_attempted_on": 1700472182926,
        "status": "SUCCESS",
        "name": "64b0b865c35f9905188806fe",
        "webhook_url": "https://unicommerce.connect.fyndx1.de/event/webhook",
        "response_time": 139,
        "message_id": "5TFWXZ5p2sEHpbGAEHEgiUfsMEACgRpePrjlld+J3+I=",
        "event_trace_id": "[\"silverbolt.6791e276-8786-11ee-a387-46ec7da68c2f\"]"
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
const promise = partnerClient.webhook.getHistoricalReports({  organizationId : value,
 extensionId : value,
 body : value });

// Async/Await
const data = await partnerClient.webhook.getHistoricalReports({  organizationId : value,
 extensionId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | organization_id |   
| extensionId | string | yes | extension_id |  
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


### getInvalidEventList
Get invalid event list



```javascript
// Promise
const promise = partnerClient.webhook.getInvalidEventList({  organizationId : value,
 extensionId : value,
 body : value });

// Async/Await
const data = await partnerClient.webhook.getInvalidEventList({  organizationId : value,
 extensionId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | organization_id |   
| extensionId | string | yes | extension_id |  
| body | [InvalidEventsRequest](#InvalidEventsRequest) | yes | Request body |


Get invalid event list.


*Returned Response:*




[Array<InvalidEventsResponse>](#Array<InvalidEventsResponse>)

It will give list of all the invalid events that was failed to pushed to subscribers due to its schema mismatched.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": [
    {
      "event_name": "test",
      "event_type": "test",
      "version": "1",
      "category": "company",
      "count": 10
    }
  ]
}
```
</details>

</details>









---


### updateSubscriber
Update subscriber status by id.



```javascript
// Promise
const promise = partnerClient.webhook.updateSubscriber({  organizationId : value,
 extensionId : value,
 subscriberId : value,
 body : value });

// Async/Await
const data = await partnerClient.webhook.updateSubscriber({  organizationId : value,
 extensionId : value,
 subscriberId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | organization_id |   
| extensionId | string | yes | extension_id |   
| subscriberId | number | yes | subscriber_id |  
| body | [UpdateSubscriberRequest](#UpdateSubscriberRequest) | yes | Request body |


Update subscriber status by id.


*Returned Response:*




[UpdateSubscriberResponse](#UpdateSubscriberResponse)

It will give you subscriber config details of a selected subscribers.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "message": "Subscriber with id 1 with extension id 64affd97cbddb85348ca8f93 updated successfully"
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

#### [CancelDownloadResponse](#CancelDownloadResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | result | string? |  yes  |  |
 

---

#### [CdnObject](#CdnObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | urls | [[Url](#Url)]? |  yes  |  |
 

---

#### [DeliveryDetailsRequest](#DeliveryDetailsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | string? |  yes  |  |
 | end_date | string? |  yes  |  |
 | event | [[EventDeliveryDetailSchema](#EventDeliveryDetailSchema)]? |  yes  |  |
 | page_no | number? |  yes  |  |
 | page_size | number? |  yes  |  |
 | start_date | string? |  yes  |  |
 | status | string? |  yes  |  |
 

---

#### [DeliveryDetailsResponse](#DeliveryDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [Page](#Page)? |  yes  |  |
 | rows | [[EventProcessReportObject](#EventProcessReportObject)]? |  yes  |  |
 

---

#### [DeliveryEventLevelSchema](#DeliveryEventLevelSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | event | string? |  yes  |  |
 | failed | number? |  yes  |  |
 | failed_percentage | number? |  yes  |  |
 | removed_webhooks | number? |  yes  |  |
 | response_time | number? |  yes  |  |
 | success | number? |  yes  |  |
 | total | number? |  yes  |  |
 

---

#### [DeliverySummaryResponse](#DeliverySummaryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | delivery_event_level | [[DeliveryEventLevelSchema](#DeliveryEventLevelSchema)]? |  yes  |  |
 | delivery_summary | [DeliverySummarySchema](#DeliverySummarySchema)? |  yes  |  |
 

---

#### [DeliverySummarySchema](#DeliverySummarySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | failed_percentage | number? |  yes  |  |
 | removed_webhooks | number? |  yes  |  |
 | response_time | number? |  yes  |  |
 | success | number? |  yes  |  |
 

---

#### [DeliveryTsResponse](#DeliveryTsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | delivery_ts | [[DeliveryTsSchema](#DeliveryTsSchema)]? |  yes  |  |
 

---

#### [DeliveryTsSchema](#DeliveryTsSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | failed | number? |  yes  |  |
 | removed_webhooks | number? |  yes  |  |
 | success | number? |  yes  |  |
 | timestamp | string? |  yes  |  |
 

---

#### [DownloadReponse](#DownloadReponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | file_name | string? |  yes  |  |
 

---

#### [EventConfigResponse](#EventConfigResponse)

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

#### [EventDeliveryDetailSchema](#EventDeliveryDetailSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | event_category | string? |  yes  |  |
 | event_name | string? |  yes  |  |
 | event_type | string? |  yes  |  |
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

#### [FilterReportResponse](#FilterReportResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filter_name | string? |  yes  |  |
 | values | [string]? |  yes  |  |
 

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
 | company_id | number? |  yes  |  |
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

#### [InvalidEventsRequest](#InvalidEventsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | string? |  yes  |  |
 | end_date | string? |  yes  |  |
 | event_name | string? |  yes  |  |
 | start_date | string? |  yes  |  |
 | version | string? |  yes  |  |
 

---

#### [InvalidEventsResponse](#InvalidEventsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | string? |  yes  |  |
 | count | number? |  yes  |  |
 | event_name | string? |  yes  |  |
 | event_type | string? |  yes  |  |
 | version | string? |  yes  |  |
 

---

#### [ItemSchema](#ItemSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | association | [Association](#Association)? |  yes  |  |
 | auth_meta | [AuthMeta](#AuthMeta)? |  yes  |  |
 | created_on | string? |  yes  |  |
 | custom_headers | string? |  yes  |  |
 | email_id | string? |  yes  |  |
 | event_configs | [[EventConfigResponse](#EventConfigResponse)]? |  yes  |  |
 | event_id | [number]? |  yes  |  |
 | id | number? |  yes  |  |
 | modified_by | string? |  yes  |  |
 | name | string? |  yes  |  |
 | status | string? |  yes  |  |
 | type | string? |  yes  |  |
 | updated_on | string? |  yes  |  |
 | webhook_url | string? |  yes  |  |
 

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

#### [SubscriberConfigResponse](#SubscriberConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ItemSchema](#ItemSchema)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [SubscriberEventMapping](#SubscriberEventMapping)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string? |  yes  |  |
 | event_id | number? |  yes  |  |
 | id | number? |  yes  |  |
 | subscriber_id | number? |  yes  |  |
 

---

#### [UpdateSubscriberRequest](#UpdateSubscriberRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string? |  yes  |  |
 

---

#### [UpdateSubscriberResponse](#UpdateSubscriberResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

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




