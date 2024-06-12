




##### [Back to Platform docs](./README.md)

## Finance Methods
Handles all finance related activities


Default
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
* [isCnRefundMethod](#iscnrefundmethod)
* [isCreditlinePlatform](#iscreditlineplatform)
* [paymentProcess](#paymentprocess)




## Methods with example and description





### channelDisplayName
Provide channel display name dict.



```javascript
// Promise
const promise = platformClient.finance.channelDisplayName({  filterKey : value });

// Async/Await
const data = await platformClient.finance.channelDisplayName({  filterKey : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| filterKey | string | yes | gives display name for channel. |  



Provide channel display name dict.

*Returned Response:*




[ChannelDisplayNameResponse](#ChannelDisplayNameResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": {
    "platform-pos": "POS"
  }
}
```
</details>









---


### createSellerCreditNoteConfig
Creates credit note config.



```javascript
// Promise
const promise = platformClient.finance.createSellerCreditNoteConfig({  body : value });

// Async/Await
const data = await platformClient.finance.createSellerCreditNoteConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateSellerCreditNoteConfigRequest](#CreateSellerCreditNoteConfigRequest) | yes | Request body |


Creates credit note config.

*Returned Response:*




[CreateSellerCreditNoteConfigResponse](#CreateSellerCreditNoteConfigResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "message": "Credit Note Config created."
}
```
</details>









---


### creditNoteDetails
Gives credit note details.



```javascript
// Promise
const promise = platformClient.finance.creditNoteDetails({  body : value });

// Async/Await
const data = await platformClient.finance.creditNoteDetails({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreditNoteDetailsRequest](#CreditNoteDetailsRequest) | yes | Request body |


Gives credit note details.

*Returned Response:*




[CreditNoteDetailsResponse](#CreditNoteDetailsResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": {
    "cn_reference_number": "test_cn_1",
    "customer_mobile_number": "1234567890",
    "cn_amount": 200,
    "remaining_cn_amount": 200,
    "cn_status": "unutilised",
    "cn_details": {
      "ordering_channel": "POS",
      "channel_of_issuance": "POS",
      "order_id": "11111",
      "shipment_id": "11111",
      "invoice_number": "invoice_1",
      "date_issued": "2023-03-08 17:47:20",
      "expiry_date": "2023-03-08 17:47:20",
      "staff_id": "staff_1",
      "store_id": "111"
    },
    "available_cn_balance": 500,
    "redemption_details": [
      {
        "order_id": "111",
        "shipment_id": "111",
        "invoice_number": "invoice_1",
        "store_id": "11",
        "staff_id": "staff_1",
        "ordering_channel": "POS",
        "created_at": "2023-03-08 17:47:20",
        "amount_debited": 100
      },
      {
        "order_id": "111",
        "shipment_id": "111",
        "invoice_number": "invoice_1",
        "store_id": "11",
        "staff_id": "staff_1",
        "ordering_channel": "POS",
        "created_at": "2023-03-08 17:47:20",
        "amount_debited": 100
      }
    ]
  }
}
```
</details>









---


### creditlineDataplatform
Used to fetch creditline data.



```javascript
// Promise
const promise = platformClient.finance.creditlineDataplatform({  body : value });

// Async/Await
const data = await platformClient.finance.creditlineDataplatform({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreditlineDataPlatformRequest](#CreditlineDataPlatformRequest) | yes | Request body |


Used to fetch creditline data.

*Returned Response:*




[CreditlineDataPlatformResponse](#CreditlineDataPlatformResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
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
          "date": "2023-07-14",
          "purpose": "Monthly Credit Limit Reset",
          "transaction_type": "Debit",
          "amount": "₹1295.25",
          "credit_balance": "₹0.00",
          "mr_balance": "₹0.00"
        },
        {
          "date": "2023-07-27",
          "purpose": "Advance Reciept Offline",
          "transaction_type": "Credit",
          "amount": "₹120.50",
          "credit_balance": "₹1295.25",
          "mr_balance": "₹0.00"
        },
        {
          "date": "2023-07-25",
          "purpose": "Commission Deduction",
          "transaction_type": "Debit",
          "amount": "₹1825.25",
          "credit_balance": "₹1174.75",
          "mr_balance": "₹0.00"
        },
        {
          "date": "2023-07-26",
          "purpose": "Credits Added",
          "transaction_type": "Credit",
          "amount": "₹2000.00",
          "credit_balance": "₹2000.00",
          "mr_balance": "₹1000.00"
        },
        {
          "date": "2023-07-26",
          "purpose": "Minimum Retainership",
          "transaction_type": "Credit",
          "amount": "₹1000.00",
          "credit_balance": "₹0.00",
          "mr_balance": "₹1000.00"
        }
      ],
      "creditline": {
        "total_amount": 2000,
        "used_amount": 2000,
        "balance": 0
      },
      "minimum_retainership": {
        "total_amount": 1000,
        "used_amount": 1000,
        "balance": 0
      },
      "show_mr": true
    }
  ],
  "item_count": 5,
  "page": {
    "type": "number",
    "size": 10,
    "current": 1,
    "has_next": false,
    "item_count": 5
  }
}
```
</details>









---


### deleteConfig
Deletes credit note config.



```javascript
// Promise
const promise = platformClient.finance.deleteConfig({  body : value });

// Async/Await
const data = await platformClient.finance.deleteConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DeleteConfigRequest](#DeleteConfigRequest) | yes | Request body |


Deletes credit note config.

*Returned Response:*




[DeleteConfigResponse](#DeleteConfigResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "message": "Seller configuration deleted successfully."
}
```
</details>









---


### downloadCreditDebitNote
Download credit debit note pdf.



```javascript
// Promise
const promise = platformClient.finance.downloadCreditDebitNote({  body : value });

// Async/Await
const data = await platformClient.finance.downloadCreditDebitNote({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DownloadCreditDebitNoteRequest](#DownloadCreditDebitNoteRequest) | yes | Request body |


Download credit debit note pdf.

*Returned Response:*




[DownloadCreditDebitNoteResponse](#DownloadCreditDebitNoteResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": [
    {
      "id": "2b9c0729-3fa0-4565-8fcb-e822c87a95f9",
      "pdf_s3_url": "https://fynd-staging-assets-private.s3-accelerate.amazonaws.com/addsale/documents/daytrader/PDFs/123/07-2023/FS/FS-C27-A00003-24_123_07-2023.pdf"
    }
  ]
}
```
</details>









---


### downloadReport
Gives list of all downloaded reports.



```javascript
// Promise
const promise = platformClient.finance.downloadReport({  body : value });

// Async/Await
const data = await platformClient.finance.downloadReport({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DownloadReport](#DownloadReport) | yes | Request body |


Gives list of all downloaded reports.

*Returned Response:*




[DownloadReportList](#DownloadReportList)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "request_dict": {},
      "report_config_id": "ff4cdb27-d674-4086-b982-1cdf9f17a5d7",
      "report_name": "settlement_report",
      "requested_by": "jayeshfansamkar_gofynd_com_17506",
      "full_name": "jayesh fansamkar",
      "display_name": "Settlement Report",
      "created_at": "2023-07-26 22:38:04",
      "filters": {
        "brand": [],
        "channel": [],
        "company": [
          "61"
        ]
      },
      "meta": {
        "brand": "",
        "channel": "",
        "company": "sumeetest",
        "job_id": "export_1690391284747"
      },
      "status": "In Process",
      "start_date": "2023-07-19",
      "end_date": "2023-07-26",
      "msg": null,
      "download_link": null
    }
  ],
  "item_count": 1,
  "page": {
    "type": "number",
    "size": 10,
    "current": 1,
    "has_next": true,
    "item_count": 1
  }
}
```
</details>









---


### downloadReportCustomerCn
Gives list of downloaded reports.



```javascript
// Promise
const promise = platformClient.finance.downloadReportCustomerCn({  body : value });

// Async/Await
const data = await platformClient.finance.downloadReportCustomerCn({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DownloadReportCustomerCnRequest](#DownloadReportCustomerCnRequest) | yes | Request body |


Gives list of downloaded reports.

*Returned Response:*




[DownloadReportCustomerCnResponse](#DownloadReportCustomerCnResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": [
    {
      "request_dict": {},
      "report_config_id": "0c09c7e7-0839-43c1-a2bf-76e08478fa99",
      "report_name": "credit note report",
      "requested_by": "app",
      "full_name": "app",
      "display_name": "Credit Note Report",
      "created_at": "2023-04-18 06:29:11",
      "filters": {},
      "meta": {},
      "status": "Completed",
      "start_date": "2023-04-21",
      "end_date": "2023-04-22",
      "msg": "",
      "download_link": "https://opex-test-bucket.s3.amazonaws.com/csv/credit%20note%20report_2023-04-21_2023-04-22_1681799353.csv.gz"
    },
    {
      "request_dict": {},
      "report_config_id": "0c09c7e7-0839-43c1-a2bf-76e08478fa99",
      "report_name": "credit note report",
      "requested_by": "app",
      "full_name": "app",
      "display_name": "Credit Note Report",
      "created_at": "2023-04-18 06:15:39",
      "filters": {},
      "meta": {},
      "status": "In Process",
      "start_date": "2023-04-21",
      "end_date": "2023-04-22",
      "msg": "",
      "download_link": "https://opex-test-bucket.s3.amazonaws.com/csv/credit%20note%20report_2023-04-21_2023-04-22_1681799353.csv.gz"
    }
  ],
  "item_count": 1,
  "page": {
    "type": "number",
    "size": 10,
    "current": 1,
    "has_next": true,
    "item_count": 2
  }
}
```
</details>









---


### generateReport
Generate finance reports.



```javascript
// Promise
const promise = platformClient.finance.generateReport({  body : value });

// Async/Await
const data = await platformClient.finance.generateReport({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GenerateReportRequest](#GenerateReportRequest) | yes | Request body |


Generate finance reports.

*Returned Response:*




[GenerateReportJson](#GenerateReportJson)

We are processing the report!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": {
    "start_date": "2023-07-26",
    "end_date": "2023-07-31",
    "headers": [
      "Company Id",
      "Company",
      "Brand",
      "Ordering Channel",
      "Bag ID",
      "Sale Type",
      "Recon Date",
      "Settlement Date",
      "Payout Date",
      "Finance Status",
      "ESP",
      "Value Of Good",
      "Transfer Price",
      "Brand calculated Amount",
      "Commission %",
      "Flat Delivery Fee",
      "Flat Cod Fee",
      "Commission",
      "Processing Fee",
      "Closing Fee",
      "Packaging Fee",
      "Cancellation Fee",
      "Return charges",
      "Net Charges",
      "Total GST",
      "Total Charges",
      "TDS",
      "TCS",
      "Net Payout"
    ],
    "items": [
      [
        "123",
        "Supply RTI",
        "Puma",
        "ecomm",
        "1865",
        "sale",
        "28-07-2023",
        "01-08-2023",
        "28-07-2023",
        "reconciled",
        "12.00",
        "10.71",
        "0.00",
        "12.00",
        "15",
        "0.00",
        "0.00",
        "-1.80",
        "0.00",
        "0.00",
        "-0.48",
        null,
        "0.00",
        "-4.08",
        "-0.72",
        "-4.80",
        "0.00",
        "0.00",
        "7.20"
      ],
      [
        "2",
        "auto_company_120720232155193",
        "Dreamworks",
        "ecomm",
        "1708",
        "return",
        "28-07-2023",
        "01-08-2023",
        "29-07-2023",
        "reconciled",
        "-3356.00",
        "-3258.25",
        "0.00",
        "-3356.00",
        "5",
        "15.20",
        "0.00",
        "0.00",
        "0.00",
        "0.00",
        "0.00",
        null,
        "0.00",
        "0.00",
        "0.00",
        "0.00",
        "0.00",
        "0.00",
        "-3356.00"
      ],
      [
        "..."
      ]
    ],
    "primary_headers": [
      "Company Id",
      "Company",
      "Brand",
      "Ordering Channel",
      "Bag ID",
      "Sale Type",
      "Recon Date",
      "Settlement Date",
      "Payout Date",
      "Finance Status"
    ],
    "allowed_filters": [
      "brand",
      "channel",
      "company",
      "finance_status"
    ],
    "item_count": 35,
    "page": {
      "type": "number",
      "size": 10,
      "current": 1,
      "has_next": true,
      "item_count": 35
    }
  }
}
```
</details>









---


### generateReportCustomerCn
Generate Credit Note report and gives Note details.



```javascript
// Promise
const promise = platformClient.finance.generateReportCustomerCn({  body : value });

// Async/Await
const data = await platformClient.finance.generateReportCustomerCn({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GenerateReportCustomerCnRequest](#GenerateReportCustomerCnRequest) | yes | Request body |


Generate Credit Note report and gives Note details.

*Returned Response:*




[GenerateReportCustomerCnResponse](#GenerateReportCustomerCnResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": {
    "start_date": "2023-04-26",
    "end_date": "2023-07-31",
    "headers": [
      "Credit Reference Number",
      "Amount",
      "Order ID",
      "Shipment ID",
      "Invoice No",
      "Date and Time of Issuance",
      "Date and Time of Expiry",
      "Status"
    ],
    "items": [],
    "primary_headers": [
      "Credit Reference Number",
      "Amount",
      "Order ID",
      "Shipment ID",
      "Invoice No",
      "Date and Time of Issuance",
      "Date and Time of Expiry"
    ],
    "allowed_filters": [
      "company",
      "staff_id",
      "store_id",
      "utilisation",
      "affiliate_id",
      "issuance_channel",
      "ordering_channel",
      "type_of_transaction"
    ],
    "row_header_display_order": {},
    "item_count": 0,
    "page": {
      "type": "number",
      "size": 10,
      "current": 1,
      "has_next": true,
      "item_count": 0
    }
  }
}
```
</details>









---


### getAffiliate
Gives list of affiliates for company.



```javascript
// Promise
const promise = platformClient.finance.getAffiliate({  body : value });

// Async/Await
const data = await platformClient.finance.getAffiliate({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GetAffiliate](#GetAffiliate) | yes | Request body |


Gives list of affiliates for company.

*Returned Response:*




[GetAffiliateResponse](#GetAffiliateResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": {
    "page": {
      "type": "number",
      "current": 1,
      "size": 10,
      "item_total": 11,
      "has_next": true
    },
    "docs": [
      {
        "website": {
          "enabled": true,
          "basepath": "/"
        },
        "cors": {
          "domains": []
        },
        "auth": {
          "enabled": true
        },
        "_id": "5dd3aaeca6df502428f9341d",
        "description": "fyndstore-dummy-test",
        "channel_type": "store",
        "cache_ttl": -1,
        "is_active": true,
        "company_id": 20,
        "name": "fyndstore-dummy-test",
        "owner": "5ee7770fae42c3c2687884b5",
        "token": "uXOl0kQ8",
        "meta": [],
        "__v": 2,
        "domains": [
          {
            "_id": "5ec2536328ac771a0af4fd90",
            "verified": true,
            "name": "fyndstore-dummy-test-mp0s.hostx1.de",
            "is_primary": true,
            "is_default": true,
            "is_shortlink": true
          }
        ],
        "internal": false,
        "redirections": [],
        "tokens": [
          {
            "token": "uXOl0kQ8",
            "created_at": "2019-11-19T08:42:20.438Z"
          }
        ],
        "created_at": "2019-11-19T08:42:20.438Z",
        "modified_at": "2021-04-02T18:31:41.610Z",
        "logo": {
          "secure_url": ""
        },
        "mobile_logo": {
          "secure_url": ""
        },
        "slug": "fyndstore-dummy-test-txh-37",
        "mode": "live",
        "status": "active",
        "domain": {
          "_id": "5ec2536328ac771a0af4fd90",
          "verified": true,
          "name": "fyndstore-dummy-test-mp0s.hostx1.de",
          "is_primary": true,
          "is_default": true,
          "is_shortlink": true
        },
        "id": "5dd3aaeca6df502428f9341d"
      }
    ],
    "success": true
  }
}
```
</details>









---


### getCnConfig
Gives credit note config.



```javascript
// Promise
const promise = platformClient.finance.getCnConfig({  body : value });

// Async/Await
const data = await platformClient.finance.getCnConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GetCnConfigRequest](#GetCnConfigRequest) | yes | Request body |


Gives credit note config.

*Returned Response:*




[GetCnConfigResponse](#GetCnConfigResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": {
    "is_cn_as_refund_method": true,
    "validity": 365,
    "currency_type": "Indian Rupees",
    "seller_id": 25,
    "affiliate_id": "5ea82cc2b496555b51caafa3",
    "notification_events": {
      "repeat": "once per day",
      "expiration_reminder_to_customer": 5
    },
    "meta": {
      "reason": "",
      "source_channel": [
        "POS",
        "ECOMM"
      ]
    },
    "redemption_ordering_channel": [
      "ECOMM",
      "POS"
    ]
  }
}
```
</details>









---


### getCustomerCreditBalance
Gives customer credit balance.



```javascript
// Promise
const promise = platformClient.finance.getCustomerCreditBalance({  body : value });

// Async/Await
const data = await platformClient.finance.getCustomerCreditBalance({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GetCustomerCreditBalanceRequest](#GetCustomerCreditBalanceRequest) | yes | Request body |


Gives customer credit balance.

*Returned Response:*




[GetCustomerCreditBalanceResponse](#GetCustomerCreditBalanceResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": {
    "customer_mobile_number": "1234567890",
    "total_credited_balance": 500
  }
}
```
</details>









---


### getData
Gives list of columns for table provided.



```javascript
// Promise
const promise = platformClient.finance.getData({  body : value });

// Async/Await
const data = await platformClient.finance.getData({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GetEngineRequest](#GetEngineRequest) | yes | Request body |


Gives list of columns for table provided.

*Returned Response:*




[GetEngineResponse](#GetEngineResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "items": [
    {
      "id": "53f18a1b-cbce-44a9-b2e0-69a7f144611a",
      "name": "fynd_store",
      "display_name": "Fynd Store"
    },
    {
      "id": "881fd2bc-ba55-4706-9371-438c06399765",
      "name": "uniket",
      "display_name": "Uniket"
    },
    {
      "id": "9a7d8e1c-4669-4905-9046-2e9518ae2f4b",
      "name": "affiliate",
      "display_name": "Affiliate"
    },
    {
      "id": "a945f1b3-1723-4a06-b6d6-a36c9db1e801",
      "name": "ecomm",
      "display_name": "Ecomm"
    },
    {
      "id": "ba839e34-d4cd-40f1-986e-ef276bc949da",
      "name": "fynd",
      "display_name": "Fynd"
    },
    {
      "id": "c6b07060-2d95-4f51-a9f8-5cd0976209a2",
      "name": "marketplace",
      "display_name": "Market Place"
    }
  ],
  "item_count": 6,
  "page": {
    "type": "number",
    "size": 10,
    "current": 1,
    "has_next": true,
    "item_count": 6
  }
}
```
</details>









---


### getPdfUrlView
Gives cn pdf url.



```javascript
// Promise
const promise = platformClient.finance.getPdfUrlView({  body : value });

// Async/Await
const data = await platformClient.finance.getPdfUrlView({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GetPdfUrlViewRequest](#GetPdfUrlViewRequest) | yes | Request body |


Gives cn pdf url.

*Returned Response:*




[GetPdfUrlViewResponse](#GetPdfUrlViewResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": {
    "cn_reference_number": "6078OMR000006-23",
    "s3_pdf_link": "https://fynd-staging-assets-private.s3-accelerate.amazonaws.com/addsale/documents/invoice_a4/PDFs/16814985547851457553_invoice_a4.pdf"
  }
}
```
</details>









---


### getReason
Gives list of the reasons.



```javascript
// Promise
const promise = platformClient.finance.getReason({  body : value });

// Async/Await
const data = await platformClient.finance.getReason({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GetReasonRequest](#GetReasonRequest) | yes | Request body |


Gives list of the reasons.

*Returned Response:*




[GetReasonResponse](#GetReasonResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "item_list": [
    {
      "id": "82d68950-5bdd-4a2b-a179-afc83454bde3",
      "name": "DS01",
      "display_name": "Bag Lost Reimbursement"
    },
    {
      "id": "8f90e0a1-c082-4c0e-b6e1-3640a4dfc69c",
      "name": "DS02",
      "display_name": "Wrong Product Reimbursement"
    }
  ],
  "item_count": 16,
  "page": {
    "type": "number",
    "size": 10,
    "current": 1,
    "has_next": true,
    "item_count": 16
  }
}
```
</details>









---


### getReportList
Get the list of available reports for a company.



```javascript
// Promise
const promise = platformClient.finance.getReportList({  body : value });

// Async/Await
const data = await platformClient.finance.getReportList({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GetReportListRequest](#GetReportListRequest) | yes | Request body |


Gives list of reports.

*Returned Response:*




[GetReportListResponse](#GetReportListResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "items": [
    {
      "id": "5565ed40-3265-40d8-9813-790efffa1091",
      "name": "Ledger Report",
      "description": "Ledger report",
      "allowed_filters": [
        "brand",
        "channel",
        "company",
        "finance_status"
      ],
      "config_meta": {},
      "report_type": "csv",
      "display_date": null
    },
    {
      "id": "18161a3e-05ff-4e18-851b-d462225de333",
      "name": "Lost Report",
      "description": "It provides recon for bags on which claim is raised by seller",
      "allowed_filters": [
        "brand",
        "channel",
        "company"
      ],
      "config_meta": {},
      "report_type": "csv",
      "display_date": "Recon Date"
    },
    {
      "id": "ff4cdb27-d674-4086-b982-1cdf9f17a5d7",
      "name": "Settlement Report",
      "description": "It provides recon for bags on which commercials are applied by Fynd & which are settled or will be settled in future date",
      "allowed_filters": [
        "brand",
        "channel",
        "company"
      ],
      "config_meta": {
        "brand": "name",
        "channel": "text"
      },
      "report_type": "csv",
      "display_date": null
    },
    {
      "id": "e0d07dcb-74bb-425d-884d-d41426c005fa",
      "name": "Supporting Settlement Report V1",
      "description": "It provides bag's info related to order, company, application, item, store, value & customer which can be further use as reference in other reports",
      "allowed_filters": [
        "brand",
        "channel",
        "company"
      ],
      "config_meta": {
        "brand": "name",
        "channel": "text"
      },
      "report_type": "csv",
      "display_date": null
    }
  ],
  "page": {
    "type": "number",
    "size": 10,
    "current": 1,
    "has_next": true,
    "item_count": 4
  },
  "total_count": 4
}
```
</details>









---


### getReportingFilters
Gets all customer Cn filters and search.



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



Gets all customer Cn filters and search.

*Returned Response:*




[GetReportingFiltersResponse](#GetReportingFiltersResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "search": {
    "text": "Search Types",
    "type": "single_select",
    "value": "search_type",
    "options": [
      {
        "text": "Order ID",
        "value": "order_id",
        "placeholder_text": "Search by Order ID"
      },
      {
        "text": "Invoice No.",
        "value": "invoice_number",
        "placeholder_text": "Search by Invoice Number"
      },
      {
        "text": "CN Reference No.",
        "value": "credit_note_number",
        "placeholder_text": "Search by CN Reference Number"
      },
      {
        "text": "Customer Mobile No.",
        "value": "customer_mobile_number",
        "placeholder_text": "Search by Customer Mobile Number"
      }
    ]
  },
  "status": {
    "text": "Status",
    "type": "multi_select",
    "value": "status",
    "options": [
      {
        "text": "Success",
        "value": "Success"
      },
      {
        "text": "Inprogress",
        "value": "In Process"
      },
      {
        "text": "Failed",
        "value": "Failed"
      },
      {
        "text": "Pending",
        "value": "Pending"
      }
    ]
  },
  "filters": [
    {
      "text": "Store ID",
      "type": "multi_select",
      "value": "store_id",
      "options": [],
      "placeholder_text": "Select Store ID"
    },
    {
      "text": "Ordering Channel",
      "type": "multi_select",
      "value": "ordering_channel",
      "options": [
        {
          "text": "POS",
          "value": "platform-pos"
        }
      ],
      "required": false,
      "placeholder_text": "Select Ordering Channel"
    },
    {
      "text": "Issuance Channel",
      "type": "multi_select",
      "value": "issuance_channel",
      "options": [
        {
          "text": "POS",
          "value": "platform-pos"
        }
      ],
      "required": false,
      "placeholder_text": "Select Issuance Channel"
    }
  ]
}
```
</details>









---


### invoiceListing
Gives list of invoices.



```javascript
// Promise
const promise = platformClient.finance.invoiceListing({  body : value });

// Async/Await
const data = await platformClient.finance.invoiceListing({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [InvoiceListingRequest](#InvoiceListingRequest) | yes | Request body |


Gives list of invoices.

*Returned Response:*




[InvoiceListingResponse](#InvoiceListingResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "items": [
    {
      "company": "(61) sumeetest",
      "invoice_number": "FY-I-A23004-FY24",
      "invoice_type": "Seller Invoice Fynd",
      "invoice_date": "20-07-23",
      "period": "01-05-23 - 31-05-23",
      "amount": "₹247.8",
      "due_date": "22-07-23",
      "status": "UNPAID",
      "is_downloadable": true,
      "invoice_id": "622c45ae-70e1-4222-9f4f-69dde51ad870",
      "source_id": ""
    },
    {
      "company": "(61) sumeetest",
      "invoice_number": "FY-I-A23003-FY24",
      "invoice_type": "Seller Invoice Fynd",
      "invoice_date": "20-07-23",
      "period": "01-05-23 - 31-05-23",
      "amount": "₹247.8",
      "due_date": "22-07-23",
      "status": "UNPAID",
      "is_downloadable": true,
      "invoice_id": "18d6bf81-21f8-4dd7-9c37-72751173a24a",
      "source_id": ""
    }
  ],
  "unpaid_invoice_data": {
    "total_unpaid_amount": 495.6,
    "total_unpaid_invoice_count": 2,
    "currency": "INR"
  },
  "headers": [
    "Company",
    "Invoice No",
    "Type",
    "Date",
    "Period",
    "Amount",
    "Due Date",
    "Status"
  ],
  "item_count": 26,
  "page": {
    "type": "number",
    "size": 10,
    "current": 1,
    "has_next": true,
    "item_count": 2
  }
}
```
</details>









---


### invoicePDF
Gives pdf view of invoice.



```javascript
// Promise
const promise = platformClient.finance.invoicePDF({  body : value });

// Async/Await
const data = await platformClient.finance.invoicePDF({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [InvoicePdfRequest](#InvoicePdfRequest) | yes | Request body |


Gives pdf view of invoice.

*Returned Response:*




[InvoicePdfResponse](#InvoicePdfResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": [
    "https://fynd-staging-assets-private.s3-accelerate.amazonaws.com/addsale/documents/daytrader/PDFs/61/07-2023/FY/FY-I-A23004-FY24_61_07-2023.pdf"
  ],
  "error": []
}
```
</details>









---


### invoiceType
Gives list of active invoice type.



```javascript
// Promise
const promise = platformClient.finance.invoiceType({  body : value });

// Async/Await
const data = await platformClient.finance.invoiceType({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [InvoiceTypeRequest](#InvoiceTypeRequest) | yes | Request body |


Gives list of active invoice type.

*Returned Response:*




[InvoiceTypeResponse](#InvoiceTypeResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "invoice_type_list": [
    {
      "text": "Creditline Minimum Gaurantee",
      "value": "0ebf0c84-2577-4374-a48c-bcbec5afbbd3"
    },
    {
      "text": "Platform Subscription",
      "value": "fc912415-0e32-4de9-9c46-7b21543747c3"
    },
    {
      "text": "Seller Invoice Fynd",
      "value": "1ec78cf4-2d25-4bba-9d42-6515dfaf1751"
    },
    {
      "text": "Seller Invoice Fynd Store",
      "value": "e6d8a752-1691-4b2d-9327-a0a4ea2f7dfd"
    },
    {
      "text": "Seller Invoice OpenAPI Ecom",
      "value": "5ef45de7-388a-460a-a5ba-ab2de8fcc632"
    },
    {
      "text": "Seller Invoice Uniket",
      "value": "8d85b574-17b7-4ddd-8d0a-e3a79cbd0659"
    }
  ],
  "payment_status_list": [
    {
      "text": "In Process",
      "value": "in_process"
    },
    {
      "text": "Paid",
      "value": "paid"
    },
    {
      "text": "Unpaid",
      "value": "unpaid"
    }
  ]
}
```
</details>









---


### isCnRefundMethod
Checks if seller has obtained cn as refund method or not.



```javascript
// Promise
const promise = platformClient.finance.isCnRefundMethod({  body : value });

// Async/Await
const data = await platformClient.finance.isCnRefundMethod({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [IsCnRefundMethodRequest](#IsCnRefundMethodRequest) | yes | Request body |


Checks if seller has obtained cn as refund method or not.

*Returned Response:*




[IsCnRefundMethodResponse](#IsCnRefundMethodResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": {
    "is_first_time_user": false
  }
}
```
</details>









---


### isCreditlinePlatform
Checks if seller has opted for creditline or not.



```javascript
// Promise
const promise = platformClient.finance.isCreditlinePlatform({  body : value });

// Async/Await
const data = await platformClient.finance.isCreditlinePlatform({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [IsCreditlinePlatformRequest](#IsCreditlinePlatformRequest) | yes | Request body |


Checks if seller has opted for creditline or not.

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
Payment Processing API.



```javascript
// Promise
const promise = platformClient.finance.paymentProcess({  body : value });

// Async/Await
const data = await platformClient.finance.paymentProcess({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PaymentProcessRequest](#PaymentProcessRequest) | yes | Request body |


Payment Processing API.

*Returned Response:*




[PaymentProcessResponse](#PaymentProcessResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "code": 200,
  "message": "success",
  "transaction_id": "64c2386821617314bf24c3d2",
  "redirect_url": "https://platform.fyndx1.de/company/123/subscription/renew-plan?plan_id=64c0ffe4770e21b533114912&transaction_id=64c2386821617314bf24c3d2&renew=true&callback_url=http://localdev.fyndx1.de:8087/company/123/billing/bills?activeTab=invoices&meta={\"remarks\":\"Invoice Payment\",\"seller_id\":\"123\",\"callback_url\":\"http://localdev.fyndx1.de:8087/company/123/billing/bills?activeTab=invoices\",\"invoice_number\":\"UN-I-A00355-FY24\",\"mode_of_payment\":\"online\",\"paid_amount_key\":\"total_payable\",\"isInvoicePayment\":true,\"source_reference\":\"invoice\"}",
  "meta": {
    "callback_url": "http://localdev.fyndx1.de:8087/company/123/billing/bills?activeTab=invoices",
    "remarks": "Invoice Payment",
    "isInvoicePayment": true,
    "paid_amount_key": "total_payable",
    "seller_id": "123",
    "invoice_number": "UN-I-A00355-FY24",
    "source_reference": "invoice",
    "mode_of_payment": "online",
    "source": "website"
  }
}
```
</details>









---




### Schemas


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
 | cn_details | string? |  yes  |  |
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
 | data | [GenerateReportCustomerCnResponseData](#GenerateReportCustomerCnResponseData)? |  yes  |  |
 

---

#### [GenerateReportCustomerCnResponseData](#GenerateReportCustomerCnResponseData)

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

#### [GetEngineData](#GetEngineData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | string? |  yes  |  |
 | project | [string]? |  yes  |  |
 | table_name | string? |  yes  |  |
 

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
 | item_count | number? |  yes  |  |
 | item_list | [[ReasonItem](#ReasonItem)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
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

#### [GetReportListResponse](#GetReportListResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ReportItem](#ReportItem)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | success | boolean? |  yes  |  |
 | total_count | number? |  yes  |  |
 

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

#### [IsCnRefundMethodData](#IsCnRefundMethodData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string? |  yes  |  |
 | seller_id | number? |  yes  |  |
 | toggle_edit_required | boolean? |  yes  |  |
 

---

#### [IsCnRefundMethodRequest](#IsCnRefundMethodRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [IsCnRefundMethodData](#IsCnRefundMethodData)? |  yes  |  |
 

---

#### [IsCnRefundMethodResponse](#IsCnRefundMethodResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [IsCnRefundMethodResponseData](#IsCnRefundMethodResponseData)? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [IsCnRefundMethodResponseData](#IsCnRefundMethodResponseData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_first_time_user | boolean? |  yes  |  |
 

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

#### [ReasonItem](#ReasonItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | id | string? |  yes  |  |
 | name | string? |  yes  |  |
 

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

#### [ReportItem](#ReportItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | allowed_filters | [string]? |  yes  |  |
 | config_meta | string? |  yes  |  |
 | description | string? |  yes  |  |
 | display_date | string? |  yes  |  |
 | id | string? |  yes  |  |
 | name | string? |  yes  |  |
 | report_type | string? |  yes  |  |
 

---

#### [UnpaidInvoiceDataItems](#UnpaidInvoiceDataItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency | string? |  yes  |  |
 | total_unpaid_amount | number? |  yes  |  |
 | total_unpaid_invoice_count | number? |  yes  |  |
 

---




