



##### [Back to Platform docs](./README.md)

## Finance Methods
Handles all finance related activities
* [companyId](#companyid)
* [companyId](#companyid)
* [companyId](#companyid)
* [companyId](#companyid)
* [companyId](#companyid)



## Methods with example and description


### companyId




```javascript
// Promise
const promise = client.finance.companyId({  body : value });

// Async/Await
const data = await client.finance.companyId({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GenerateReportRequest](#GenerateReportRequest) | yes | Request body |




*Returned Response:*




[GenerateReportJson](#GenerateReportJson)

We are processing the report!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### companyId




```javascript
// Promise
const promise = client.finance.companyId({  body : value });

// Async/Await
const data = await client.finance.companyId({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DownloadReport](#DownloadReport) | yes | Request body |




*Returned Response:*




[DownloadReportList](#DownloadReportList)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### companyId




```javascript
// Promise
const promise = client.finance.companyId({  body : value });

// Async/Await
const data = await client.finance.companyId({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GetEngineRequest](#GetEngineRequest) | yes | Request body |




*Returned Response:*




[GetEngineResponse](#GetEngineResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### companyId




```javascript
// Promise
const promise = client.finance.companyId({  body : value });

// Async/Await
const data = await client.finance.companyId({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GetReasonRequest](#GetReasonRequest) | yes | Request body |




*Returned Response:*




[GetReasonResponse](#GetReasonResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### companyId




```javascript
// Promise
const promise = client.finance.companyId({  body : value });

// Async/Await
const data = await client.finance.companyId({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GetReportListRequest](#GetReportListRequest) | yes | Request body |




*Returned Response:*




[GetEngineResponse](#GetEngineResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas

 
 
 #### [GenerateReportMeta](#GenerateReportMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand | string |  no  |  |
 | company | string |  no  |  |
 | channel | string |  no  |  |

---


 
 
 #### [GenerateReportFilters](#GenerateReportFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand | [string] |  no  |  |
 | company | [string] |  no  |  |
 | channel | [string] |  no  |  |

---


 
 
 #### [GenerateReportPlatform](#GenerateReportPlatform)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | meta | [GenerateReportMeta](#GenerateReportMeta) |  no  |  |
 | filters | [GenerateReportFilters](#GenerateReportFilters) |  no  |  |
 | report_id | string |  no  |  |
 | end_date | string |  no  |  |
 | start_date | string |  no  |  |

---


 
 
 #### [GenerateReportRequest](#GenerateReportRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [GenerateReportPlatform](#GenerateReportPlatform) |  no  |  |

---


 
 
 #### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | size | number |  no  |  |
 | has_next | boolean |  no  |  |
 | type | string |  no  |  |
 | item_total | number |  no  |  |
 | current | number |  no  |  |

---


 
 
 #### [GenerateReportJson](#GenerateReportJson)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [Page](#Page) |  no  |  |
 | item_count | number |  no  |  |
 | items | [[string]] |  no  |  |
 | headers | [string] |  no  |  |
 | end_date | string |  no  |  |
 | start_date | string |  no  |  |

---


 
 
 #### [Error](#Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason | string |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [DownloadReport](#DownloadReport)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pagesize | number |  no  |  |
 | end_date | string |  no  |  |
 | page | number |  no  |  |
 | start_date | string |  no  |  |

---


 
 
 #### [DownloadReportItems](#DownloadReportItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | meta | [GenerateReportMeta](#GenerateReportMeta) |  no  |  |
 | type_of_request | string |  no  |  |
 | filters | [GenerateReportFilters](#GenerateReportFilters) |  no  |  |
 | report_id | string |  no  |  |
 | end_date | string |  no  |  |
 | start_date | string |  no  |  |

---


 
 
 #### [DownloadReportList](#DownloadReportList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_count | number |  no  |  |
 | page | [Page](#Page) |  no  |  |
 | items | [[DownloadReportItems](#DownloadReportItems)] |  no  |  |

---


 
 
 #### [GetEngineFilters](#GetEngineFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | config_field | string |  no  |  |

---


 
 
 #### [GetEngineData](#GetEngineData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | project | [string] |  no  |  |
 | table_name | string |  no  |  |
 | filters | [GetEngineFilters](#GetEngineFilters) |  no  |  |

---


 
 
 #### [GetEngineRequest](#GetEngineRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [GetEngineData](#GetEngineData) |  no  |  |

---


 
 
 #### [GetEngineResponse](#GetEngineResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_count | number |  no  |  |
 | success | boolean |  no  |  |
 | page | [Page](#Page) |  no  |  |
 | items | [string] |  no  |  |

---


 
 
 #### [GetReason](#GetReason)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason_type | string |  no  |  |

---


 
 
 #### [GetReasonRequest](#GetReasonRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [GetReason](#GetReason) |  no  |  |

---


 
 
 #### [GetReasonResponse](#GetReasonResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_count | number |  no  |  |
 | success | boolean |  no  |  |
 | page | [Page](#Page) |  no  |  |
 | items | [string] |  no  |  |

---


 
 
 #### [GetReportListData](#GetReportListData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | role_name | string |  no  |  |
 | listing_enabled | boolean |  no  |  |

---


 
 
 #### [GetReportListRequest](#GetReportListRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [GetReportListData](#GetReportListData) |  no  |  |

---




