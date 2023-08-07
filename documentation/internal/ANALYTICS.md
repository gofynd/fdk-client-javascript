




##### [Back to Internal docs](./README.md)

## Analytics Methods
This node js service provides 3 servers, Platform - which contains APIs to power platform analytics. Internal which contains APIs to interact with BQ and Admin which contains APIs to power dunzo dashboard analytics


* [checkJobStatusByName](#checkjobstatusbyname)
* [executeJobForProvidedParameters](#executejobforprovidedparameters)
* [startDownloadForQuery](#startdownloadforquery)



## Methods with example and description




### checkJobStatusByName
check export status



```javascript
// Promise
const promise = internalClient.analytics.checkJobStatusByName({  exportJobName : value });

// Async/Await
const data = await internalClient.analytics.checkJobStatusByName({  exportJobName : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| exportJobName | string | yes | Export job name |  



Takes job id in path param to check the status of job Returns file URL if downloading is done else returns status of job

*Returned Response:*




[FileStatusModel](#FileStatusModel)

Returns export job running status if job is running else returns file download url




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### executeJobForProvidedParameters
Execute given query and returns paginated data



```javascript
// Promise
const promise = internalClient.analytics.executeJobForProvidedParameters({  body : value });

// Async/Await
const data = await internalClient.analytics.executeJobForProvidedParameters({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [InternalReqBody](#InternalReqBody) | yes | Request body |


accepts query, current page number, total page size and required headers as an request body returns paginated JSON response alog with page object

*Returned Response:*




[TableResponseModel](#TableResponseModel)

Returns the response with pagination information




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### startDownloadForQuery
start_download Copy



```javascript
// Promise
const promise = internalClient.analytics.startDownloadForQuery({  body : value });

// Async/Await
const data = await internalClient.analytics.startDownloadForQuery({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [FileDownloadRequestBody](#FileDownloadRequestBody) | yes | Request body |


accepts query as an argument and create job for exporting result to csv file and returns job id as a response

*Returned Response:*




[string](#string)

Returns unique job name




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas


#### [FileDownloadRequestBody](#FileDownloadRequestBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | query | string? |  yes  |  |
 | split_files | string? |  yes  |  |
 | use_compression | string? |  yes  |  |
 

---

#### [FileStatusModel](#FileStatusModel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end_date | string? |  yes  |  |
 | message | string? |  yes  |  |
 | start_date | string? |  yes  |  |
 | status | string? |  yes  |  |
 

---

#### [InternalReqBody](#InternalReqBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current_page | number? |  yes  |  |
 | page_size | number? |  yes  |  |
 | query | string? |  yes  |  |
 

---

#### [InternalServerError](#InternalServerError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | Internal server Server error |
 | timestamp | string? |  yes  | Timestamp |
 

---

#### [TableResponseModel](#TableResponseModel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | string? |  yes  |  |
 | rows | [string]? |  yes  |  |
 

---




