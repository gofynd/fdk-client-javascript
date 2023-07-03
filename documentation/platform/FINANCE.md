




##### [Back to Platform docs](./README.md)

## Finance Methods
Handles all finance related activities

* [asCnRefund](#ascnrefund)
* [channelDisplayName](#channeldisplayname)
* [createSellerCreditNoteConfig](#createsellercreditnoteconfig)
* [creditNoteDetails](#creditnotedetails)
* [creditlineDataplatform](#creditlinedataplatform)
* [deleteConfig](#deleteconfig)
* [downloadCreditDebitNote](#downloadcreditdebitnote)
* [downloadReport](#downloadreport)
* [downloadReportCustomerCn](#downloadreportcustomercn)
* [generateReport](#generatereport)
* [generateReportCustomerCn](#generatereportcustomercn)
* [getAffiliate](#getaffiliate)
* [getCnConfig](#getcnconfig)
* [getCustomerCreditBalance](#getcustomercreditbalance)
* [getData](#getdata)
* [getPdfUrlView](#getpdfurlview)
* [getReason](#getreason)
* [getReportList](#getreportlist)
* [getReportingFilters](#getreportingfilters)
* [invoiceListing](#invoicelisting)
* [invoicePDF](#invoicepdf)
* [invoiceType](#invoicetype)
* [isCreditlinePlatform](#iscreditlineplatform)
* [paymentProcess](#paymentprocess)



## Methods with example and description




### asCnRefund




```javascript
// Promise
const promise = platformClient.finance.asCnRefund({  body : value });

// Async/Await
const data = await platformClient.finance.asCnRefund({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AsCnRefundRequest](#AsCnRefundRequest) | yes | Request body |




*Returned Response:*




[AsCnRefundResponse](#AsCnRefundResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### channelDisplayName




```javascript
// Promise
const promise = platformClient.finance.channelDisplayName({  filterKey : value });

// Async/Await
const data = await platformClient.finance.channelDisplayName({  filterKey : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| filterKey | string | yes | gives display name for channel. |  





*Returned Response:*




[ChannelDisplayNameResponse](#ChannelDisplayNameResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createSellerCreditNoteConfig




```javascript
// Promise
const promise = platformClient.finance.createSellerCreditNoteConfig({  body : value });

// Async/Await
const data = await platformClient.finance.createSellerCreditNoteConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateSellerCreditNoteConfigRequest](#CreateSellerCreditNoteConfigRequest) | yes | Request body |




*Returned Response:*




[CreateSellerCreditNoteConfigResponse](#CreateSellerCreditNoteConfigResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### creditNoteDetails




```javascript
// Promise
const promise = platformClient.finance.creditNoteDetails({  body : value });

// Async/Await
const data = await platformClient.finance.creditNoteDetails({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreditNoteDetailsRequest](#CreditNoteDetailsRequest) | yes | Request body |




*Returned Response:*




[CreditNoteDetailsResponse](#CreditNoteDetailsResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### creditlineDataplatform




```javascript
// Promise
const promise = platformClient.finance.creditlineDataplatform({  body : value });

// Async/Await
const data = await platformClient.finance.creditlineDataplatform({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreditlineDataPlatformRequest](#CreditlineDataPlatformRequest) | yes | Request body |




*Returned Response:*




[CreditlineDataPlatformResponse](#CreditlineDataPlatformResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "summary": "Example Response",
  "value": {
    "headers": [
      "Date",
      "Purpose",
      "Transaction Type",
      "Amount",
      "Credit Balance",
      "MR Balance"
    ],
    "items": [
      {
        "table_data": [
          {
            "date": "2023-06-03",
            "purpose": "Variable Commission Adjustment",
            "transaction_type": "Credit",
            "amount": "₹5.00",
            "credit_balance": "₹3080.00",
            "mr_balance": "₹1955.00"
          }
        ]
      }
    ],
    "creditline": {
      "total_amount": 3010,
      "used_amount": -70,
      "balance": 3080
    },
    "minimum_retainership": {
      "total_amount": 2000,
      "used_amount": 45,
      "balance": 1955
    },
    "show_mr": true,
    "item_count": 46,
    "page": {
      "type": "number",
      "size": 10,
      "current": 1,
      "has_next": true,
      "item_count": 46
    }
  }
}
```
</details>









---


### deleteConfig




```javascript
// Promise
const promise = platformClient.finance.deleteConfig({  body : value });

// Async/Await
const data = await platformClient.finance.deleteConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DeleteConfigRequest](#DeleteConfigRequest) | yes | Request body |




*Returned Response:*




[DeleteConfigResponse](#DeleteConfigResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


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


### downloadReportCustomerCn




```javascript
// Promise
const promise = platformClient.finance.downloadReportCustomerCn({  body : value });

// Async/Await
const data = await platformClient.finance.downloadReportCustomerCn({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DownloadReportCustomerCnRequest](#DownloadReportCustomerCnRequest) | yes | Request body |




*Returned Response:*




[DownloadReportCustomerCnResponse](#DownloadReportCustomerCnResponse)

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


### generateReportCustomerCn




```javascript
// Promise
const promise = platformClient.finance.generateReportCustomerCn({  body : value });

// Async/Await
const data = await platformClient.finance.generateReportCustomerCn({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GenerateReportCustomerCnRequest](#GenerateReportCustomerCnRequest) | yes | Request body |




*Returned Response:*




[GenerateReportCustomerCnResponse](#GenerateReportCustomerCnResponse)

Success




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


### getCnConfig




```javascript
// Promise
const promise = platformClient.finance.getCnConfig({  body : value });

// Async/Await
const data = await platformClient.finance.getCnConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GetCnConfigRequest](#GetCnConfigRequest) | yes | Request body |




*Returned Response:*




[GetCnConfigResponse](#GetCnConfigResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getCustomerCreditBalance




```javascript
// Promise
const promise = platformClient.finance.getCustomerCreditBalance({  body : value });

// Async/Await
const data = await platformClient.finance.getCustomerCreditBalance({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GetCustomerCreditBalanceRequest](#GetCustomerCreditBalanceRequest) | yes | Request body |




*Returned Response:*




[GetCustomerCreditBalanceResponse](#GetCustomerCreditBalanceResponse)

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


### getPdfUrlView




```javascript
// Promise
const promise = platformClient.finance.getPdfUrlView({  body : value });

// Async/Await
const data = await platformClient.finance.getPdfUrlView({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GetPdfUrlViewRequest](#GetPdfUrlViewRequest) | yes | Request body |




*Returned Response:*




[GetPdfUrlViewResponse](#GetPdfUrlViewResponse)

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


### getReportingFilters




```javascript
// Promise
const promise = platformClient.finance.getReportingFilters({  filterKey : value,
 affiliateId : value });

// Async/Await
const data = await platformClient.finance.getReportingFilters({  filterKey : value,
 affiliateId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| filterKey | string | yes | filter type. |    
| affiliateId | string | no | affiliate id. |  





*Returned Response:*




[GetReportingFiltersResponse](#GetReportingFiltersResponse)

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
{
  "summary": "Example Response",
  "value": {
    "items": [
      {
        "company": "(1)Example Company 1",
        "invoice_number": "INV-001",
        "invoice_type": "Example Type",
        "invoice_date": "05-05-23",
        "period": "02-05-23 - 05-05-23",
        "amount": 100,
        "status": "UNPAID",
        "due_date": "07-05-23",
        "is_downloadable": false,
        "invoice_id": 12345
      },
      {
        "company": "(2)Example Company 2",
        "invoice_number": "INV-002",
        "invoice_type": "Example Type",
        "invoice_date": "05-06-23",
        "period": "02-05-23 - 05-05-23",
        "amount": 200,
        "status": "PAID",
        "due_date": "07-05-23",
        "is_downloadable": true,
        "invoice_id": 67890
      }
    ],
    "unpaid_invoice_data": {
      "total_unpaid_amount": 500,
      "total_unpaid_invoice_count": 5,
      "currency": "INR",
      "item_count": 10
    },
    "page": {
      "page_number": 1,
      "page_size": 10,
      "total_pages": 2
    }
  }
}
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
{
  "summary": "Example Response",
  "value": {
    "success": true,
    "data": [
      "example1.pdf",
      "example2.pdf"
    ],
    "error": [
      "invoice_no1",
      "invoice_no2"
    ]
  }
}
```
</details>









---


### invoiceType




```javascript
// Promise
const promise = platformClient.finance.invoiceType({  body : value });

// Async/Await
const data = await platformClient.finance.invoiceType({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [InvoiceTypeRequest](#InvoiceTypeRequest) | yes | Request body |




*Returned Response:*




[InvoiceTypeResponse](#InvoiceTypeResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "summary": "Example Response",
  "value": {
    "success": true,
    "invoice_type_list": [
      {
        "text": "Creditline Invoice",
        "value": "1zz78cf4-2d25-4bba-9d42-6515dfaf1751"
      },
      {
        "text": "Seller Invoice",
        "value": "1ec78cf4-2d25-4bba-9d42-6515dfaf1751"
      }
    ],
    "payment_status_list": [
      {
        "text": "Paid",
        "value": "paid"
      },
      {
        "text": "Unpaid",
        "value": "unaid"
      }
    ]
  }
}
```
</details>









---


### isCreditlinePlatform




```javascript
// Promise
const promise = platformClient.finance.isCreditlinePlatform({  body : value });

// Async/Await
const data = await platformClient.finance.isCreditlinePlatform({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [IsCreditlinePlatformRequest](#IsCreditlinePlatformRequest) | yes | Request body |




*Returned Response:*




[IsCreditlinePlatformResponse](#IsCreditlinePlatformResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "code": 200,
  "is_creditline_opted": true
}
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


#### [AsCnRefundData](#AsCnRefundData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string? |  yes  |  |
 | seller_id | number? |  yes  |  |
 | toggle_edit_required | boolean? |  yes  |  |
 

---

#### [AsCnRefundRequest](#AsCnRefundRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [AsCnRefundData](#AsCnRefundData)? |  yes  |  |
 

---

#### [AsCnRefundResponse](#AsCnRefundResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [AsCnRefundResponseData](#AsCnRefundResponseData)? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [AsCnRefundResponseData](#AsCnRefundResponseData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_first_time_user | boolean? |  yes  |  |
 

---

#### [ChannelDisplayName](#ChannelDisplayName)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | platform_pos | string? |  yes  |  |
 

---

#### [ChannelDisplayNameResponse](#ChannelDisplayNameResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [ChannelDisplayName](#ChannelDisplayName)? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [CnDetails](#CnDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_of_issuance | string? |  yes  |  |
 | date_issued | string? |  yes  |  |
 | expiry_date | string? |  yes  |  |
 | invoice_number | string? |  yes  |  |
 | order_id | string? |  yes  |  |
 | ordering_channel | string? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | staff_id | string? |  yes  |  |
 | store_id | string? |  yes  |  |
 

---

#### [CnDownloadReport](#CnDownloadReport)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string? |  yes  |  |
 | end_date | string? |  yes  |  |
 | page | number? |  yes  |  |
 | pagesize | number? |  yes  |  |
 | search | string? |  yes  |  |
 | search_type | string? |  yes  |  |
 | start_date | string? |  yes  |  |
 | status | [string]? |  yes  |  |
 

---

#### [CnGenerateReport](#CnGenerateReport)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string? |  yes  |  |
 | end_date | string? |  yes  |  |
 | filters | [CnGenerateReportFilters](#CnGenerateReportFilters)? |  yes  |  |
 | meta | [GenerateReportFilters](#GenerateReportFilters)? |  yes  |  |
 | page | number? |  yes  |  |
 | pagesize | number? |  yes  |  |
 | report_id | string? |  yes  |  |
 | search | string? |  yes  |  |
 | search_type | string? |  yes  |  |
 | start_date | string? |  yes  |  |
 

---

#### [CnGenerateReportFilters](#CnGenerateReportFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_of_issuance | [string]? |  yes  |  |
 | ordering_channel | [string]? |  yes  |  |
 | staff_id | [string]? |  yes  |  |
 | store_id | [number]? |  yes  |  |
 | types_of_transaction | [string]? |  yes  |  |
 | utilisation | [string]? |  yes  |  |
 

---

#### [CnGenerateReportItems](#CnGenerateReportItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credit_note_number | string? |  yes  |  |
 | date_issued | string? |  yes  |  |
 | expiry_date | string? |  yes  |  |
 | invoice_number | string? |  yes  |  |
 | order_id | string? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | status | string? |  yes  |  |
 | total_amount | number? |  yes  |  |
 

---

#### [CnReferenceNumber](#CnReferenceNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cn_reference_number | string? |  yes  |  |
 

---

#### [CreateSellerCreditNoteConfig](#CreateSellerCreditNoteConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string? |  yes  |  |
 | currency_type | string? |  yes  |  |
 | is_cn_as_refund_method | boolean? |  yes  |  |
 | notification_events | [CreditNoteConfigNotificationEvents](#CreditNoteConfigNotificationEvents)? |  yes  |  |
 | ordering_channel | [string]? |  yes  |  |
 | sales_channel_name | string? |  yes  |  |
 | seller_id | number? |  yes  |  |
 | slug_values | [string]? |  yes  |  |
 | source_channel | [string]? |  yes  |  |
 | validity | number? |  yes  |  |
 

---

#### [CreateSellerCreditNoteConfigRequest](#CreateSellerCreditNoteConfigRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [CreateSellerCreditNoteConfig](#CreateSellerCreditNoteConfig)? |  yes  |  |
 

---

#### [CreateSellerCreditNoteConfigResponse](#CreateSellerCreditNoteConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [CreditlineDataPlatformPayload](#CreditlineDataPlatformPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end_end | string? |  yes  |  |
 | page | number? |  yes  |  |
 | pagesize | number? |  yes  |  |
 | seller_id | string? |  yes  |  |
 | start_end | string? |  yes  |  |
 

---

#### [CreditlineDataPlatformRequest](#CreditlineDataPlatformRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [CreditlineDataPlatformPayload](#CreditlineDataPlatformPayload)? |  yes  |  |
 

---

#### [CreditlineDataPlatformResponse](#CreditlineDataPlatformResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | number? |  yes  |  |
 | headers | [string]? |  yes  |  |
 | item_count | number? |  yes  |  |
 | items | [string]? |  yes  |  |
 | message | string? |  yes  |  |
 | page | string? |  yes  |  |
 | show_mr | boolean? |  yes  |  |
 

---

#### [CreditNoteConfigNotificationEvents](#CreditNoteConfigNotificationEvents)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | expiration_reminder_to_customer | number? |  yes  |  |
 

---

#### [CreditNoteDetails](#CreditNoteDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | available_cn_balance | number? |  yes  |  |
 | cn_amount | number? |  yes  |  |
 | cn_details | [[CnDetails](#CnDetails)]? |  yes  |  |
 | cn_reference_number | string? |  yes  |  |
 | cn_status | string? |  yes  |  |
 | customer_mobile_number | string? |  yes  |  |
 | redemption_details | [[RedemptionDetails](#RedemptionDetails)]? |  yes  |  |
 | remaining_cn_amount | number? |  yes  |  |
 

---

#### [CreditNoteDetailsRequest](#CreditNoteDetailsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [CnReferenceNumber](#CnReferenceNumber)? |  yes  |  |
 

---

#### [CreditNoteDetailsResponse](#CreditNoteDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [CreditNoteDetails](#CreditNoteDetails)? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [DeleteConfig](#DeleteConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string? |  yes  |  |
 | seller_id | number? |  yes  |  |
 | slug_values | [string]? |  yes  |  |
 

---

#### [DeleteConfigRequest](#DeleteConfigRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [DeleteConfig](#DeleteConfig)? |  yes  |  |
 

---

#### [DeleteConfigResponse](#DeleteConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

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

#### [DownloadReportCustomerCnRequest](#DownloadReportCustomerCnRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [CnDownloadReport](#CnDownloadReport)? |  yes  |  |
 

---

#### [DownloadReportCustomerCnResponse](#DownloadReportCustomerCnResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[DownloadReportResponseData](#DownloadReportResponseData)]? |  yes  |  |
 

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

#### [DownloadReportResponseData](#DownloadReportResponseData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_at | string? |  yes  |  |
 | display_name | string? |  yes  |  |
 | download_link | string? |  yes  |  |
 | end_date | string? |  yes  |  |
 | filters | string? |  yes  |  |
 | full_name | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | msg | string? |  yes  |  |
 | report_config_id | string? |  yes  |  |
 | report_name | string? |  yes  |  |
 | request_dict | string? |  yes  |  |
 | requested_by | string? |  yes  |  |
 | start_date | string? |  yes  |  |
 | status | string? |  yes  |  |
 

---

#### [Error](#Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [GenerateReportCustomerCnRequest](#GenerateReportCustomerCnRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [CnGenerateReport](#CnGenerateReport)? |  yes  |  |
 

---

#### [GenerateReportCustomerCnResponse](#GenerateReportCustomerCnResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | allowed_filters | [string]? |  yes  |  |
 | end_date | string? |  yes  |  |
 | headers | [string]? |  yes  |  |
 | item_count | number? |  yes  |  |
 | items | [[CnGenerateReportItems](#CnGenerateReportItems)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | primary_headers | [string]? |  yes  |  |
 | row_header_display_order | string? |  yes  |  |
 | start_date | string? |  yes  |  |
 

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

#### [GetCnConfigRequest](#GetCnConfigRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [DeleteConfig](#DeleteConfig)? |  yes  |  |
 

---

#### [GetCnConfigResponse](#GetCnConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [GetCnConfigResponseData](#GetCnConfigResponseData)? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [GetCnConfigResponseData](#GetCnConfigResponseData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string? |  yes  |  |
 | currency_type | string? |  yes  |  |
 | is_cn_as_refund_method | boolean? |  yes  |  |
 | meta | [GetCnConfigResponseMeta](#GetCnConfigResponseMeta)? |  yes  |  |
 | notification_events | [CreditNoteConfigNotificationEvents](#CreditNoteConfigNotificationEvents)? |  yes  |  |
 | redemption_ordering_channel | [string]? |  yes  |  |
 | seller_id | number? |  yes  |  |
 | validity | number? |  yes  |  |
 

---

#### [GetCnConfigResponseMeta](#GetCnConfigResponseMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason | string? |  yes  |  |
 | source_channel | [string]? |  yes  |  |
 

---

#### [GetCustomerCreditBalance](#GetCustomerCreditBalance)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string? |  yes  |  |
 | customer_mobile_number | string? |  yes  |  |
 | seller_id | number? |  yes  |  |
 

---

#### [GetCustomerCreditBalanceRequest](#GetCustomerCreditBalanceRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [GetCustomerCreditBalance](#GetCustomerCreditBalance)? |  yes  |  |
 

---

#### [GetCustomerCreditBalanceResponse](#GetCustomerCreditBalanceResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [GetCustomerCreditBalanceResponseData](#GetCustomerCreditBalanceResponseData)? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [GetCustomerCreditBalanceResponseData](#GetCustomerCreditBalanceResponseData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | customer_mobile_number | string? |  yes  |  |
 | total_credited_balance | number? |  yes  |  |
 

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

#### [GetPdfUrlViewRequest](#GetPdfUrlViewRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [CnReferenceNumber](#CnReferenceNumber)? |  yes  |  |
 

---

#### [GetPdfUrlViewResponse](#GetPdfUrlViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [GetPdfUrlViewResponseData](#GetPdfUrlViewResponseData)? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [GetPdfUrlViewResponseData](#GetPdfUrlViewResponseData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cn_reference_number | string? |  yes  |  |
 | s3_pdf_link | string? |  yes  |  |
 

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

#### [GetReportingFilters](#GetReportingFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | options | [string]? |  yes  |  |
 | text | string? |  yes  |  |
 | type | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [GetReportingFiltersResponse](#GetReportingFiltersResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [[GetReportingNestedFilters](#GetReportingNestedFilters)]? |  yes  |  |
 | search | [GetReportingFilters](#GetReportingFilters)? |  yes  |  |
 | status | [GetReportingFilters](#GetReportingFilters)? |  yes  |  |
 

---

#### [GetReportingNestedFilters](#GetReportingNestedFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | options | [string]? |  yes  |  |
 | placeholder_text | string? |  yes  |  |
 | required | boolean? |  yes  |  |
 | text | string? |  yes  |  |
 | type | string? |  yes  |  |
 | value | string? |  yes  |  |
 

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
 | page_size | number? |  yes  |  |
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
 | unpaid_invoice_data | [UnpaidInvoiceDataItems](#UnpaidInvoiceDataItems)? |  yes  |  |
 

---

#### [InvoiceListingResponseItems](#InvoiceListingResponseItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string? |  yes  |  |
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

#### [InvoiceTypePayloadData](#InvoiceTypePayloadData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_active | boolean? |  yes  |  |
 

---

#### [InvoiceTypeRequest](#InvoiceTypeRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [InvoiceTypePayloadData](#InvoiceTypePayloadData)? |  yes  |  |
 

---

#### [InvoiceTypeResponse](#InvoiceTypeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | invoice_type_list | [[InvoiceTypeResponseItems](#InvoiceTypeResponseItems)]? |  yes  |  |
 | payment_status_list | [[InvoiceTypeResponseItems](#InvoiceTypeResponseItems)]? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [InvoiceTypeResponseItems](#InvoiceTypeResponseItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [IsCreditlinePayload](#IsCreditlinePayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | seller_id | string? |  yes  |  |
 

---

#### [IsCreditlinePlatformRequest](#IsCreditlinePlatformRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [IsCreditlinePayload](#IsCreditlinePayload)? |  yes  |  |
 

---

#### [IsCreditlinePlatformResponse](#IsCreditlinePlatformResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | number? |  yes  |  |
 | is_creditline_opted | boolean? |  yes  |  |
 

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

#### [RedemptionDetails](#RedemptionDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_debited | number? |  yes  |  |
 | created_at | string? |  yes  |  |
 | invoice_number | string? |  yes  |  |
 | order_id | string? |  yes  |  |
 | ordering_channel | string? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | staff_id | string? |  yes  |  |
 | store_id | string? |  yes  |  |
 

---

#### [UnpaidInvoiceDataItems](#UnpaidInvoiceDataItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency | string? |  yes  |  |
 | total_unpaid_amount | number? |  yes  |  |
 | total_unpaid_invoice_count | number? |  yes  |  |
 

---




