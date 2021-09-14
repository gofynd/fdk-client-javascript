



##### [Back to Platform docs](./README.md)

## Analytics Methods
Perceptor analytics
* [getStatiscticsGroups](#getstatiscticsgroups)
* [getStatiscticsGroupComponents](#getstatiscticsgroupcomponents)
* [getComponentStatsCSV](#getcomponentstatscsv)
* [getComponentStatsPDF](#getcomponentstatspdf)
* [getComponentStats](#getcomponentstats)
* [getAbandonCartList](#getabandoncartlist)
* [getAbandonCartsCSV](#getabandoncartscsv)
* [getAbandonCartDetail](#getabandoncartdetail)
* [createExportJob](#createexportjob)
* [getExportJobStatus](#getexportjobstatus)
* [getLogsList](#getlogslist)
* [searchLogs](#searchlogs)



## Methods with example and description


### getStatiscticsGroups
Get statistics groups



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").analytics.getStatiscticsGroups();

// Async/Await
const data = await client.application("<APPLICATION_ID>").analytics.getStatiscticsGroups();
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |  



Get statistics groups

*Returned Response:*




[StatsGroups](#StatsGroups)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "groups": [
    {
      "key": "general",
      "url": "/v1/group/general",
      "title": "General"
    }
  ]
}
```
</details>









---


### getStatiscticsGroupComponents
Get statistics group components



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").analytics.getStatiscticsGroupComponents({  groupName : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").analytics.getStatiscticsGroupComponents({  groupName : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| groupName | string | yes | Group name |  



Get statistics group components

*Returned Response:*




[StatsGroupComponents](#StatsGroupComponents)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "title": "Catalogue & Inventory",
  "components": [
    {
      "key": "catalogue-basic",
      "title": "Catalogue Basic",
      "type": "text-blocks",
      "url": "/stats/component/catalogue-basic",
      "filters": {}
    }
  ]
}
```
</details>









---


### getComponentStatsCSV
Get component statistics csv



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").analytics.getComponentStatsCSV({  componentName : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").analytics.getComponentStatsCSV({  componentName : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| componentName | string | yes | Component name |  



Get component statistics csv

*Returned Response:*




[string](#string)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getComponentStatsPDF
Get component statistics pdf



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").analytics.getComponentStatsPDF({  componentName : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").analytics.getComponentStatsPDF({  componentName : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| componentName | string | yes | Component name |  



Get component statistics pdf

*Returned Response:*




[string](#string)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getComponentStats
Get component statistics



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").analytics.getComponentStats({  componentName : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").analytics.getComponentStats({  componentName : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| componentName | string | yes | Component name |  



Get component statistics

*Returned Response:*




[StatsRes](#StatsRes)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "key": "article-distribution",
  "title": "Inventory Distribution",
  "type": "chart.pie",
  "data": {
    "raw": [
      {
        "name": "Fatimah Logero",
        "available_articles": 8,
        "total_articles": 9,
        "available_sizes": 3,
        "total_sizes": 3,
        "article_freshness": 9,
        "count": 0,
        "percent": "NaN"
      }
    ],
    "type": "pie",
    "data": {
      "datasets": [
        {
          "label": "# of products",
          "backgroundColor": [
            "#7986CB",
            "#3F51B5"
          ],
          "data": [
            8,
            1
          ],
          "percent": [
            "88.89",
            "11.11"
          ]
        }
      ],
      "labels": [
        "Available Articles",
        "Articles Out Of Stock"
      ]
    },
    "options": {
      "responsive": true,
      "display": false
    },
    "cache_hit": false
  }
}
```
</details>









---


### getAbandonCartList
Get abandon carts list



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").analytics.getAbandonCartList({  fromDate : value,
 toDate : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").analytics.getAbandonCartList({  fromDate : value,
 toDate : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| fromDate | string | yes | From date |   
| toDate | string | yes | To date |    
| pageNo | number | no | Current page number |    
| pageSize | number | no | Current page size |  



Get abandon carts list

*Returned Response:*




[AbandonCartsList](#AbandonCartsList)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": {
    "properties_cart_id": 11517,
    "context_traits_first_name": "Ahmed",
    "context_traits_last_name": "Sakri",
    "context_traits_phone_number": "8433859662",
    "context_traits_email": "ahmedsakri@gofynd.com",
    "context_app_application_id": "000000000000000000000001",
    "properties_breakup_values_raw_total": 4020,
    "received_at": {
      "value": "2021-03-09T05:09:06.840Z"
    }
  },
  "page": {
    "type": "number",
    "size": 10,
    "current": 1,
    "has_next": true,
    "item_total": 15
  }
}
```
</details>









---


### getAbandonCartsCSV
Get abandon carts csv



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").analytics.getAbandonCartsCSV({  fromDate : value,
 toDate : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").analytics.getAbandonCartsCSV({  fromDate : value,
 toDate : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| fromDate | string | yes | From date |   
| toDate | string | yes | To date |  



Get abandon carts csv

*Returned Response:*




[string](#string)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getAbandonCartDetail
Get abandon carts details



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").analytics.getAbandonCartDetail({  cartId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").analytics.getAbandonCartDetail({  cartId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| cartId | string | yes | Cart Id |  



Get abandon cart details

*Returned Response:*




[AbandonCartDetail](#AbandonCartDetail)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createExportJob
Create data export job in required format



```javascript
// Promise
const promise = client.analytics.createExportJob({  exportType : value,
 body : value });

// Async/Await
const data = await client.analytics.createExportJob({  exportType : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| exportType | string | yes | Export type / format |  
| body | [ExportJobReq](#ExportJobReq) | yes | Request body |


Create data export job in required format

*Returned Response:*




[ExportJobRes](#ExportJobRes)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "status": "queued",
  "job_id": "6047c67060ad8241a948ee42"
}
```
</details>









---


### getExportJobStatus
Get data export job status



```javascript
// Promise
const promise = client.analytics.getExportJobStatus({  exportType : value,
 jobId : value });

// Async/Await
const data = await client.analytics.getExportJobStatus({  exportType : value,
 jobId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| exportType | string | yes | Export type / format |   
| jobId | string | yes | Export job id |  



Get data export job status

*Returned Response:*




[ExportJobStatusRes](#ExportJobStatusRes)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "download_url": "https://marketplace-sync-logs-production.s3.ap-south-1.amazonaws.com/inv-log-37-flipkartAssured-Full_Inventory_Update.csv",
  "status": "success",
  "job_id": "6047c67060ad8241a948ee42"
}
```
</details>









---


### getLogsList
Get logs list



```javascript
// Promise
const promise = client.analytics.getLogsList({  logType : value,
 body : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.analytics.getLogsList({  logType : value,
 body : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| logType | string | yes | Log type |    
| pageNo | number | no | Current page number |    
| pageSize | number | no | Current page size |  
| body | [GetLogsListReq](#GetLogsListReq) | yes | Request body |


Get logs list

*Returned Response:*




[GetLogsListRes](#GetLogsListRes)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "start_time_iso": "2021-04-06T19:00:17.013Z",
      "end_time_iso": "2021-04-06T19:00:17.015Z",
      "event_type": "FULL_PRICE_UPDATE",
      "trace_id": "marketplaces.aa18fa48-b3e8-4e1e-8396-69488e254ace",
      "count": 17,
      "status": "failed"
    }
  ],
  "page": {
    "type": "number",
    "size": 10,
    "current": 1,
    "has_next": true,
    "item_total": 88
  }
}
```
</details>









---


### searchLogs
Search logs



```javascript
// Promise
const promise = client.analytics.searchLogs({  logType : value,
 body : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.analytics.searchLogs({  logType : value,
 body : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |    
| pageNo | number | no | Current page number |    
| pageSize | number | no | Current page size |   
| logType | string | yes | Log type |  
| body | [SearchLogReq](#SearchLogReq) | yes | Request body |


Search logs

*Returned Response:*




[SearchLogRes](#SearchLogRes)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "_id": "606cafc19c2c466b24098437",
      "status": "failed",
      "event_type": "FULL_PRICE_UPDATE",
      "marketplace_name": "myntra",
      "event": "APPLICATION_FULL_INVENTORY",
      "trace_id": "marketplaces.aa18fa48-b3e8-4e1e-8396-69488e254ace",
      "company_id": 28,
      "brand_id": 44,
      "store_id": 57,
      "item_id": 882857,
      "article_id": "57_sku_102831159-TBUCKBEIGE_301066XL",
      "seller_identifier": "SKU_102831159-TBUCKBEIGE_392826XL"
    }
  ],
  "page": {
    "type": "number",
    "size": 10,
    "current": 1,
    "has_next": true,
    "item_total": 88
  }
}
```
</details>









---



### Schemas

 
 
 #### [StatGroup](#StatGroup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | url | string |  no  |  |
 | title | string |  no  |  |

---


 
 
 #### [ErrorRes](#ErrorRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [StatsGroups](#StatsGroups)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | groups | [[StatGroup](#StatGroup)] |  no  |  |

---


 
 
 #### [StatsGroupComponent](#StatsGroupComponent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | url | string |  no  |  |
 | title | string |  no  |  |
 | type | string |  no  |  |
 | filters | string |  no  |  |

---


 
 
 #### [StatsGroupComponents](#StatsGroupComponents)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | components | [[StatsGroupComponent](#StatsGroupComponent)] |  no  |  |

---


 
 
 #### [StatsRes](#StatsRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | title | string |  no  |  |
 | type | string |  no  |  |
 | data | string |  no  |  |

---


 
 
 #### [ReceivedAt](#ReceivedAt)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  no  |  |

---


 
 
 #### [AbandonCartsDetail](#AbandonCartsDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | properties_cart_id | string |  no  |  |
 | context_traits_first_name | string |  no  |  |
 | context_traits_last_name | string |  no  |  |
 | context_traits_phone_number | string |  no  |  |
 | context_traits_email | string |  no  |  |
 | context_app_application_id | string |  no  |  |
 | properties_breakup_values_raw_total | string |  no  |  |
 | received_at | [ReceivedAt](#ReceivedAt) |  no  |  |

---


 
 
 #### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_total | number |  no  |  |
 | next_id | string |  no  |  |
 | has_previous | boolean |  no  |  |
 | has_next | boolean |  no  |  |
 | current | number |  no  |  |
 | type | string |  yes  |  |
 | size | number |  no  |  |

---


 
 
 #### [AbandonCartsList](#AbandonCartsList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[AbandonCartsDetail](#AbandonCartsDetail)] |  no  |  |
 | cart_total | string |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [AbandonCartDetail](#AbandonCartDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | user_id | string |  no  |  |
 | cart_value | string |  no  |  |
 | articles | [string] |  no  |  |
 | breakup | string |  no  |  |
 | address | string |  no  |  |

---


 
 
 #### [ExportJobReq](#ExportJobReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | marketplace_name | string |  no  |  |
 | start_time | string |  no  |  |
 | end_time | string |  no  |  |
 | event_type | string |  no  |  |
 | trace_id | string |  no  |  |

---


 
 
 #### [ExportJobRes](#ExportJobRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |
 | job_id | string |  no  |  |

---


 
 
 #### [ExportJobStatusRes](#ExportJobStatusRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |
 | job_id | string |  no  |  |
 | download_url | string |  no  |  |

---


 
 
 #### [GetLogsListReq](#GetLogsListReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | marketplace_name | string |  no  |  |
 | start_date | string |  no  |  |
 | company_id | string |  no  |  |
 | end_date | string |  no  |  |

---


 
 
 #### [MkpLogsResp](#MkpLogsResp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | start_time_iso | string |  no  |  |
 | end_time_iso | string |  no  |  |
 | event_type | string |  no  |  |
 | trace_id | string |  no  |  |
 | count | string |  no  |  |
 | status | string |  no  |  |

---


 
 
 #### [GetLogsListRes](#GetLogsListRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[MkpLogsResp](#MkpLogsResp)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [SearchLogReq](#SearchLogReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | marketplace_name | string |  no  |  |
 | start_date | string |  no  |  |
 | company_id | string |  no  |  |
 | end_date | string |  no  |  |
 | identifier | string |  no  |  |
 | identifier_value | string |  no  |  |

---


 
 
 #### [LogInfo](#LogInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | status | string |  no  |  |
 | event_type | string |  no  |  |
 | marketplace_name | string |  no  |  |
 | event | string |  no  |  |
 | trace_id | string |  no  |  |
 | company_id | number |  no  |  |
 | brand_id | number |  no  |  |
 | store_code | string |  no  |  |
 | store_id | number |  no  |  |
 | item_id | number |  no  |  |
 | article_id | string |  no  |  |
 | seller_identifier | string |  no  |  |

---


 
 
 #### [SearchLogRes](#SearchLogRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[LogInfo](#LogInfo)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---




