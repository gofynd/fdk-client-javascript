




##### [Back to Platform docs](./README.md)

## Finance Methods
Handles all finance related activities

* [downloadCreditDebitNote](#downloadcreditdebitnote)
* [downloadReport](#downloadreport)
* [generateReport](#generatereport)
* [getAffiliate](#getaffiliate)
* [getData](#getdata)
* [getInvoiceType](#getinvoicetype)
* [getReason](#getreason)
* [getReportList](#getreportlist)
* [invoiceListing](#invoicelisting)
* [invoicePDF](#invoicepdf)
* [paymentProcess](#paymentprocess)



## Methods with example and description




### downloadCreditDebitNote




```javascript
// Promise
const promise = platformClient.finance.downloadCreditDebitNote({  body : value });

// Async/Await
const data = await platformClient.finance.downloadCreditDebitNote({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DownloadCreditDebitNoteRequest](#DownloadCreditDebitNoteRequest) | yes | Request body |




*Returned Response:*




[DownloadCreditDebitNoteResponse](#DownloadCreditDebitNoteResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### downloadReport




```javascript
// Promise
const promise = platformClient.finance.downloadReport({  body : value });

// Async/Await
const data = await platformClient.finance.downloadReport({  body : value });
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


### generateReport




```javascript
// Promise
const promise = platformClient.finance.generateReport({  body : value });

// Async/Await
const data = await platformClient.finance.generateReport({  body : value });
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


### getAffiliate




```javascript
// Promise
const promise = platformClient.finance.getAffiliate({  body : value });

// Async/Await
const data = await platformClient.finance.getAffiliate({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GetAffiliate](#GetAffiliate) | yes | Request body |




*Returned Response:*




[GetAffiliateResponse](#GetAffiliateResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getData




```javascript
// Promise
const promise = platformClient.finance.getData({  body : value });

// Async/Await
const data = await platformClient.finance.getData({  body : value });
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


### getInvoiceType




```javascript
// Promise
const promise = platformClient.finance.getInvoiceType({  body : value });

// Async/Await
const data = await platformClient.finance.getInvoiceType({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GetInvoiceListRequest](#GetInvoiceListRequest) | yes | Request body |




*Returned Response:*




[GetInvoiceListResponse](#GetInvoiceListResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getReason




```javascript
// Promise
const promise = platformClient.finance.getReason({  body : value });

// Async/Await
const data = await platformClient.finance.getReason({  body : value });
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


### getReportList




```javascript
// Promise
const promise = platformClient.finance.getReportList({  body : value });

// Async/Await
const data = await platformClient.finance.getReportList({  body : value });
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


### invoiceListing




```javascript
// Promise
const promise = platformClient.finance.invoiceListing({  body : value });

// Async/Await
const data = await platformClient.finance.invoiceListing({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [InvoiceListingRequest](#InvoiceListingRequest) | yes | Request body |




*Returned Response:*




[InvoiceListingResponse](#InvoiceListingResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### invoicePDF




```javascript
// Promise
const promise = platformClient.finance.invoicePDF({  body : value });

// Async/Await
const data = await platformClient.finance.invoicePDF({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [InvoicePdfRequest](#InvoicePdfRequest) | yes | Request body |




*Returned Response:*




[InvoicePdfResponse](#InvoicePdfResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### paymentProcess




```javascript
// Promise
const promise = platformClient.finance.paymentProcess({  body : value });

// Async/Await
const data = await platformClient.finance.paymentProcess({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PaymentProcessRequest](#PaymentProcessRequest) | yes | Request body |




*Returned Response:*




[PaymentProcessResponse](#PaymentProcessResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas


#### [DownloadCreditDebitNote](#DownloadCreditDebitNote)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | note_id | [string]? |  yes  |  |
 

---

#### [DownloadCreditDebitNoteRequest](#DownloadCreditDebitNoteRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [DownloadCreditDebitNote](#DownloadCreditDebitNote)? |  yes  |  |
 

---

#### [DownloadCreditDebitNoteResponse](#DownloadCreditDebitNoteResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[DownloadCreditDebitNoteResponseData](#DownloadCreditDebitNoteResponseData)]? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [DownloadCreditDebitNoteResponseData](#DownloadCreditDebitNoteResponseData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string? |  yes  |  |
 | pdf_s3_url | string? |  yes  |  |
 

---

#### [DownloadReport](#DownloadReport)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end_date | string? |  yes  |  |
 | page | number? |  yes  |  |
 | pagesize | number? |  yes  |  |
 | start_date | string? |  yes  |  |
 

---

#### [DownloadReportItems](#DownloadReportItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end_date | string? |  yes  |  |
 | filters | [GenerateReportFilters](#GenerateReportFilters)? |  yes  |  |
 | meta | [GenerateReportMeta](#GenerateReportMeta)? |  yes  |  |
 | report_id | string? |  yes  |  |
 | start_date | string? |  yes  |  |
 | type_of_request | string? |  yes  |  |
 

---

#### [DownloadReportList](#DownloadReportList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_count | number? |  yes  |  |
 | items | [[DownloadReportItems](#DownloadReportItems)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [Error](#Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [GenerateReportFilters](#GenerateReportFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand | [string]? |  yes  |  |
 | channel | [string]? |  yes  |  |
 | company | [string]? |  yes  |  |
 

---

#### [GenerateReportJson](#GenerateReportJson)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end_date | string? |  yes  |  |
 | headers | [string]? |  yes  |  |
 | item_count | number? |  yes  |  |
 | items | [[string]]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | start_date | string? |  yes  |  |
 

---

#### [GenerateReportMeta](#GenerateReportMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand | string? |  yes  |  |
 | channel | string? |  yes  |  |
 | company | string? |  yes  |  |
 

---

#### [GenerateReportPlatform](#GenerateReportPlatform)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end_date | string? |  yes  |  |
 | filters | [GenerateReportFilters](#GenerateReportFilters)? |  yes  |  |
 | meta | [GenerateReportMeta](#GenerateReportMeta)? |  yes  |  |
 | report_id | string? |  yes  |  |
 | start_date | string? |  yes  |  |
 

---

#### [GenerateReportRequest](#GenerateReportRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [GenerateReportPlatform](#GenerateReportPlatform)? |  yes  |  |
 

---

#### [GetAffiliate](#GetAffiliate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number? |  yes  |  |
 

---

#### [GetAffiliateResponse](#GetAffiliateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | docs | [string]? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [GetDocs](#GetDocs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | docs | [string]? |  yes  |  |
 | items | [string]? |  yes  |  |
 

---

#### [GetEngineData](#GetEngineData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [GetEngineFilters](#GetEngineFilters)? |  yes  |  |
 | project | [string]? |  yes  |  |
 | table_name | string? |  yes  |  |
 

---

#### [GetEngineFilters](#GetEngineFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | config_field | string? |  yes  |  |
 

---

#### [GetEngineRequest](#GetEngineRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [GetEngineData](#GetEngineData)? |  yes  |  |
 

---

#### [GetEngineResponse](#GetEngineResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_count | number? |  yes  |  |
 | items | [string]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [GetInvoiceListPayloadData](#GetInvoiceListPayloadData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_active | boolean? |  yes  |  |
 

---

#### [GetInvoiceListRequest](#GetInvoiceListRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [GetInvoiceListPayloadData](#GetInvoiceListPayloadData)? |  yes  |  |
 

---

#### [GetInvoiceListResponse](#GetInvoiceListResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | invoice_type_list | [string]? |  yes  |  |
 | payment_status_list | [string]? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [GetReason](#GetReason)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason_type | string? |  yes  |  |
 

---

#### [GetReasonRequest](#GetReasonRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [GetReason](#GetReason)? |  yes  |  |
 

---

#### [GetReasonResponse](#GetReasonResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [GetDocs](#GetDocs)? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [GetReportListData](#GetReportListData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | listing_enabled | boolean? |  yes  |  |
 | role_name | string? |  yes  |  |
 

---

#### [GetReportListRequest](#GetReportListRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [GetReportListData](#GetReportListData)? |  yes  |  |
 

---

#### [InoviceListingPayloadDataFilters](#InoviceListingPayloadDataFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | [string]? |  yes  |  |
 | invoice_type | [string]? |  yes  |  |
 | payment_status | [string]? |  yes  |  |
 

---

#### [InvoiceListingPayloadData](#InvoiceListingPayloadData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end_date | string? |  yes  |  |
 | filters | [InoviceListingPayloadDataFilters](#InoviceListingPayloadDataFilters)? |  yes  |  |
 | page | number? |  yes  |  |
 | pagesize | number? |  yes  |  |
 | search | string? |  yes  |  |
 | start_date | string? |  yes  |  |
 

---

#### [InvoiceListingRequest](#InvoiceListingRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [InvoiceListingPayloadData](#InvoiceListingPayloadData)? |  yes  |  |
 

---

#### [InvoiceListingResponse](#InvoiceListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_count | number? |  yes  |  |
 | items | [[InvoiceListingResponseItems](#InvoiceListingResponseItems)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [InvoiceListingResponseItems](#InvoiceListingResponseItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number? |  yes  |  |
 | company | string? |  yes  |  |
 | due_date | string? |  yes  |  |
 | invoice_date | string? |  yes  |  |
 | invoice_id | string? |  yes  |  |
 | invoice_number | string? |  yes  |  |
 | invoice_type | string? |  yes  |  |
 | is_downloadable | boolean? |  yes  |  |
 | period | string? |  yes  |  |
 | status | string? |  yes  |  |
 

---

#### [InvoicePdfPayloadData](#InvoicePdfPayloadData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | invoice_number | [string]? |  yes  |  |
 

---

#### [InvoicePdfRequest](#InvoicePdfRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [InvoicePdfPayloadData](#InvoicePdfPayloadData)? |  yes  |  |
 

---

#### [InvoicePdfResponse](#InvoicePdfResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [string]? |  yes  |  |
 | error | [string]? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | item_total | number? |  yes  |  |
 | size | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [PaymentProcessPayload](#PaymentProcessPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string? |  yes  |  |
 | currency | string? |  yes  |  |
 | invoice_number | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | mode_of_payment | string? |  yes  |  |
 | platform | string? |  yes  |  |
 | seller_id | string? |  yes  |  |
 | source_reference | string? |  yes  |  |
 | total_amount | string? |  yes  |  |
 | transaction_type | string? |  yes  |  |
 

---

#### [PaymentProcessRequest](#PaymentProcessRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [PaymentProcessPayload](#PaymentProcessPayload)? |  yes  |  |
 

---

#### [PaymentProcessResponse](#PaymentProcessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | number? |  yes  |  |
 | message | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | redirect_url | string? |  yes  |  |
 | transaction_id | string? |  yes  |  |
 

---




