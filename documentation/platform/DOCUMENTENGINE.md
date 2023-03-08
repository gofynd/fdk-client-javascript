




##### [Back to Platform docs](./README.md)

## DocumentEngine Methods
Handles financial pdf generation of Fulfilment

* [generateBulkPackageLabel](#generatebulkpackagelabel)
* [generateBulkBoxLabel](#generatebulkboxlabel)
* [generateBulkShipmentLabel](#generatebulkshipmentlabel)
* [generateNoc](#generatenoc)
* [getLabelStatus](#getlabelstatus)
* [getNocStatus](#getnocstatus)
* [getPresignedURL](#getpresignedurl)
* [getLabelPresignedURL](#getlabelpresignedurl)
* [getNocPresignedURL](#getnocpresignedurl)
* [generatePOSReceipts](#generateposreceipts)



## Methods with example and description




### generateBulkPackageLabel
Generate Labels for Packages



```javascript
// Promise
const promise = client.documentEngine.generateBulkPackageLabel({  body : value });

// Async/Await
const data = await client.documentEngine.generateBulkPackageLabel({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GenerateBulkPackageLabel](#GenerateBulkPackageLabel) | yes | Request body |


Use this API to generate label for Packages

*Returned Response:*




[SuccessResponseGenerateBulk](#SuccessResponseGenerateBulk)

Sucsess Response, Labels will be generated




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### generateBulkBoxLabel
Generate Labels for Boxes which will go inside package



```javascript
// Promise
const promise = client.documentEngine.generateBulkBoxLabel({  body : value });

// Async/Await
const data = await client.documentEngine.generateBulkBoxLabel({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GenerateBulkBoxLabel](#GenerateBulkBoxLabel) | yes | Request body |


Use this API to generate label for Boxes

*Returned Response:*




[SuccessResponseGenerateBulk](#SuccessResponseGenerateBulk)

Sucsess Response, Labels will be generated




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### generateBulkShipmentLabel
Generate Labels for Shipments which contains packaged



```javascript
// Promise
const promise = client.documentEngine.generateBulkShipmentLabel({  body : value });

// Async/Await
const data = await client.documentEngine.generateBulkShipmentLabel({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GenerateBulkShipmentLabel](#GenerateBulkShipmentLabel) | yes | Request body |


Use this API to generate label for Shipments

*Returned Response:*




[SuccessResponseGenerateBulk](#SuccessResponseGenerateBulk)

Sucsess Response, Labels will be generated




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### generateNoc
Generate NOC for Seller having access to a fullfillment center



```javascript
// Promise
const promise = client.documentEngine.generateNoc({  body : value });

// Async/Await
const data = await client.documentEngine.generateNoc({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GenerateNoc](#GenerateNoc) | yes | Request body |


Use this API to generate NOC for Seller

*Returned Response:*




[SuccessResponseGenerateBulk](#SuccessResponseGenerateBulk)

Sucsess Response, NOC Pdf will be generated




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success response</i></summary>

```json
{
  "value": {
    "status": true
  }
}
```
</details>

</details>









---


### getLabelStatus
Get Staus of Label generations



```javascript
// Promise
const promise = client.documentEngine.getLabelStatus({  uid : value });

// Async/Await
const data = await client.documentEngine.getLabelStatus({  uid : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| uid | string | yes | UID given at time of generate request |  



Use this API to fetch status of PDF generation of Labels

*Returned Response:*




[StatusSuccessResponse](#StatusSuccessResponse)

Sucess Response, Status Of Label generation




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getNocStatus
Get Staus of NOC generation



```javascript
// Promise
const promise = client.documentEngine.getNocStatus({  uid : value });

// Async/Await
const data = await client.documentEngine.getNocStatus({  uid : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| uid | string | yes | UID given at time of generate request |  



Use this API to fetch status of PDF generation of NOC

*Returned Response:*




[StatusSuccessResponse](#StatusSuccessResponse)

Sucess Response, Status Of NOC Pdf generation




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success response</i></summary>

```json
{
  "value": {
    "success": true,
    "status": "created"
  }
}
```
</details>

</details>









---


### getPresignedURL
Get Presigned URL to download PDFs



```javascript
// Promise
const promise = client.documentEngine.getPresignedURL({  body : value });

// Async/Await
const data = await client.documentEngine.getPresignedURL({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [InvoiceLabelPresignedRequestBody](#InvoiceLabelPresignedRequestBody) | yes | Request body |


Use this API to generate Presigned URLs for downloading PDFs

*Returned Response:*




[SignedSuccessResponse](#SignedSuccessResponse)

Sucess Response, Presigned URL of PDFs




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getLabelPresignedURL
Get Presigned URL to download labels



```javascript
// Promise
const promise = client.documentEngine.getLabelPresignedURL({  uid : value });

// Async/Await
const data = await client.documentEngine.getLabelPresignedURL({  uid : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| uid | string | yes | UID given at time of generate request |  



Use this API to generate Presigned URLs for downloading labels

*Returned Response:*




[SignedSuccessResponse](#SignedSuccessResponse)

Sucess Response, Presigned URL of Labels




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getNocPresignedURL
Get Presigned URL to download NOC Pdf



```javascript
// Promise
const promise = client.documentEngine.getNocPresignedURL({  uid : value });

// Async/Await
const data = await client.documentEngine.getNocPresignedURL({  uid : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| uid | string | yes | UID given at time of generate request |  



Use this API to generate Presigned URL for downloading NOC Pdf

*Returned Response:*




[SignedSuccessResponse](#SignedSuccessResponse)

Sucess Response, Presigned URL of NOC Pdf




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success response</i></summary>

```json
{
  "value": {
    "uid": "l27h38uy",
    "expires_in": 300,
    "url": "presigned-url"
  }
}
```
</details>

</details>









---


### generatePOSReceipts
Generate Receipts for an order



```javascript
// Promise
const promise = client.documentEngine.generatePOSReceipts({  body : value });

// Async/Await
const data = await client.documentEngine.generatePOSReceipts({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GeneratePOSReceipts](#GeneratePOSReceipts) | yes | Request body |


Use this API to generate Payment Receipts and Invoice Receipts

*Returned Response:*




[SuccessResponseGeneratePOSReceipts](#SuccessResponseGeneratePOSReceipts)

Success Response, Template string will be generated for receipts




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas

 
 
 #### [GenerateBulkInvoiceLabelShipment](#GenerateBulkInvoiceLabelShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store_id | number |  yes  |  |
 | from_date | string |  yes  |  |
 | to_date | string |  yes  |  |
 | document_type | string |  yes  |  |
 | shipment_ids | [string] |  no  |  |

---


 
 
 #### [GenerateBulkInvoiceOrLabelUrl](#GenerateBulkInvoiceOrLabelUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | string |  yes  |  |
 | document_type | string |  yes  |  |
 | batch_id | number |  yes  |  |

---


 
 
 #### [DocumentType](#DocumentType)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | invoice | string |  yes  |  |
 | label | string |  yes  |  |

---


 
 
 #### [BulkListBadRequestResponse](#BulkListBadRequestResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | error | string |  no  |  |

---


 
 
 #### [BulkListFailedResponse](#BulkListFailedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | error | string |  no  |  |

---


 
 
 #### [SuccessResponseGenerateBulkShipment](#SuccessResponseGenerateBulkShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | job_id | number |  yes  |  |
 | trace_id | string |  no  |  |

---


 
 
 #### [SuccessResponseBulkStatus](#SuccessResponseBulkStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | status | string |  yes  |  |
 | trace_id | string |  no  |  |

---


 
 
 #### [GenerateBulkUrlSuccessResponse](#GenerateBulkUrlSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  yes  |  |
 | uid | string |  yes  |  |
 | expires_in | number |  yes  |  |
 | presigned_type | string |  yes  |  |

---


 
 
 #### [InternalErrorResponseGenerateBulkShipment](#InternalErrorResponseGenerateBulkShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | error | string |  yes  |  |

---


 
 
 #### [BadRequestResponseGenerateBulkUrl](#BadRequestResponseGenerateBulkUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | message | string |  yes  |  |
 | request_id | string |  no  |  |
 | exception | string |  no  |  |
 | stack_trace | string |  no  |  |
 | meta | string |  no  |  |

---


 
 
 #### [InternalErrorResponseGenerateBulkUrl](#InternalErrorResponseGenerateBulkUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | message | string |  yes  |  |

---


 
 
 #### [GenerateBulkShipment](#GenerateBulkShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | string |  yes  |  |
 | store_code | string |  yes  |  |
 | batch_id | string |  yes  |  |
 | document_type | string |  yes  |  |

---


 
 
 #### [GenerateBulkUrl](#GenerateBulkUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | expires_in | number |  no  |  |
 | document_type | string |  yes  |  |
 | batch_id | string |  yes  |  |

---


 
 
 #### [GetBulkStatusRequest](#GetBulkStatusRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | batch_id | string |  yes  |  |

---


 
 
 #### [BadRequestResponseGenerateBulkItemParameters](#BadRequestResponseGenerateBulkItemParameters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | missing_property | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [BadRequestResponseGenerateBulkItem](#BadRequestResponseGenerateBulkItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | keyword | string |  no  |  |
 | data_path | string |  no  |  |
 | schema_path | string |  no  |  |
 | parameters | [BadRequestResponseGenerateBulkItemParameters](#BadRequestResponseGenerateBulkItemParameters) |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [SuccessResponseGenerateBulk](#SuccessResponseGenerateBulk)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |

---


 
 
 #### [BadRequestResponseGenerateBulk](#BadRequestResponseGenerateBulk)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | error_message | [[BadRequestResponseGenerateBulkItem](#BadRequestResponseGenerateBulkItem)] |  yes  |  |

---


 
 
 #### [InternalErrorResponseGenerateBulk](#InternalErrorResponseGenerateBulk)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | error_message | string |  no  |  |

---


 
 
 #### [ShippingToAddress](#ShippingToAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string |  yes  |  |
 | city | string |  yes  |  |
 | state | string |  yes  |  |
 | country | string |  yes  |  |
 | pincode | string |  yes  |  |

---


 
 
 #### [SellerAddress](#SellerAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string |  yes  |  |
 | city | string |  yes  |  |
 | state | string |  yes  |  |
 | country | string |  yes  |  |
 | pincode | string |  yes  |  |

---


 
 
 #### [BoxDetails](#BoxDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | box_id | string |  yes  |  |
 | total_quantity | string |  yes  |  |
 | package_count | string |  yes  |  |
 | dimension | string |  yes  |  |
 | weight | string |  yes  |  |

---


 
 
 #### [ShipmentDetails](#ShipmentDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_no | string |  yes  |  |
 | appointment_no | string |  yes  |  |
 | total_sku | string |  yes  |  |
 | item_qty | string |  yes  |  |
 | no_of_boxes | string |  yes  |  |
 | shipping_to | string |  yes  |  |
 | seller_name | string |  yes  |  |
 | gstin_number | string |  yes  |  |
 | shipping_address | [ShippingToAddress](#ShippingToAddress) |  yes  |  |
 | seller_address | [SellerAddress](#SellerAddress) |  yes  |  |

---


 
 
 #### [GenerateBulkBoxLabel](#GenerateBulkBoxLabel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | stock_transfer_id | string |  yes  |  |
 | label_type | string |  yes  |  |
 | uid | string |  yes  |  |
 | seller_name | string |  yes  |  |
 | template_id | number |  yes  |  |
 | box_details | [[BoxDetails](#BoxDetails)] |  yes  |  |

---


 
 
 #### [GenerateBulkShipmentLabel](#GenerateBulkShipmentLabel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | label_type | string |  yes  |  |
 | uid | string |  yes  |  |
 | template_id | number |  yes  |  |
 | shipments | [[ShipmentDetails](#ShipmentDetails)] |  yes  |  |

---


 
 
 #### [GenerateNoc](#GenerateNoc)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | string |  yes  |  |
 | seller_name | string |  yes  |  |
 | seller_gstin | string |  yes  |  |
 | fc_gstin | string |  yes  |  |
 | template_id | number |  yes  |  |
 | fc_address | [SellerAddress](#SellerAddress) |  yes  |  |
 | seller_address | [SellerAddress](#SellerAddress) |  yes  |  |

---


 
 
 #### [PackageDetails](#PackageDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | package_id | string |  yes  |  |
 | item_quantity | string |  yes  |  |
 | package_type | string |  yes  |  |
 | packaging_type | string |  yes  |  |
 | dimension | string |  yes  |  |
 | weight | string |  yes  |  |

---


 
 
 #### [PackageItemDetails](#PackageItemDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | jio_code | string |  yes  |  |
 | item_name | string |  yes  |  |
 | mrp | string |  yes  |  |
 | country_of_origin | string |  yes  |  |
 | best_before_date | string |  yes  |  |
 | ean | string |  yes  |  |
 | package_details | [[PackageDetails](#PackageDetails)] |  yes  |  |

---


 
 
 #### [GenerateBulkPackageLabel](#GenerateBulkPackageLabel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | stock_transfer_id | string |  yes  |  |
 | label_type | string |  yes  |  |
 | uid | string |  yes  |  |
 | seller_name | string |  yes  |  |
 | template_id | number |  yes  |  |
 | item_details | [[PackageItemDetails](#PackageItemDetails)] |  yes  |  |

---


 
 
 #### [SignedSuccessResponse](#SignedSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | string |  no  |  |
 | url | string |  no  |  |
 | expires_in | number |  no  |  |

---


 
 
 #### [BulkPresignedSuccessResponse](#BulkPresignedSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | string |  yes  |  |
 | batch_id | string |  no  |  |
 | presigned_type | string |  no  |  |
 | presigned_url | string |  yes  |  |
 | expires_in | number |  no  |  |

---


 
 
 #### [SignedBadRequestResponse](#SignedBadRequestResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | error_message | string |  no  |  |

---


 
 
 #### [SignedFailedResponse](#SignedFailedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | error_message | string |  no  |  |

---


 
 
 #### [StatusSuccessResponse](#StatusSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | status | string |  no  |  |

---


 
 
 #### [StatusBadRequestResponse](#StatusBadRequestResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | error_message | string |  no  |  |

---


 
 
 #### [StatusFailedResponse](#StatusFailedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | error_message | string |  no  |  |

---


 
 
 #### [GenerateManifest](#GenerateManifest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store_id | number |  yes  |  |
 | from_date | string |  yes  |  |
 | to_date | string |  yes  |  |
 | shipment_ids | [string] |  no  |  |

---


 
 
 #### [GeneratePresignedManifestUrl](#GeneratePresignedManifestUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | manifest_id | string |  yes  |  |
 | uid | string |  yes  |  |

---


 
 
 #### [ManifestLink](#ManifestLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | manifest_id | string |  yes  |  |

---


 
 
 #### [GenerateManifestUrlSuccessResponse](#GenerateManifestUrlSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  yes  |  |
 | uid | string |  yes  |  |
 | manifest_id | string |  yes  |  |
 | expires_in | number |  yes  |  |
 | presigned_type | string |  yes  |  |

---


 
 
 #### [ManifestListFailedResponse](#ManifestListFailedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | error | string |  no  |  |

---


 
 
 #### [InvoiceLabelPresignedRequestBody](#InvoiceLabelPresignedRequestBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | document_type | string |  yes  |  |
 | entity_id | string |  yes  |  |
 | expires_in | number |  no  |  |

---


 
 
 #### [GeneratePOSReceipts](#GeneratePOSReceipts)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order | [OrderDict](#OrderDict) |  yes  |  |
 | shipments | [[PlatformShipment](#PlatformShipment)] |  yes  |  |

---


 
 
 #### [SuccessResponseGeneratePOSReceipts](#SuccessResponseGeneratePOSReceipts)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | order_id | string |  yes  |  |
 | invoice_receipt | string |  yes  |  |
 | payment_receipt | string |  yes  |  |

---


 
 
 #### [BadRequestResponseGeneratePOSReceipts](#BadRequestResponseGeneratePOSReceipts)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | error | [string] |  yes  |  |

---


 
 
 #### [InternalErrorResponseGeneratePOSReceipts](#InternalErrorResponseGeneratePOSReceipts)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | message | string |  yes  |  |
 | error | string |  yes  |  |

---


 
 
 #### [UserDetailsData](#UserDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | city | string |  yes  |  |
 | name | string |  yes  |  |
 | country | string |  yes  |  |
 | state | string |  yes  |  |
 | address | string |  yes  |  |
 | email | string |  no  |  |
 | pincode | string |  yes  |  |
 | phone | string |  yes  |  |

---


 
 
 #### [LockData](#LockData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mto | boolean |  no  |  |
 | locked | boolean |  no  |  |
 | lock_message | string |  no  |  |

---


 
 
 #### [ShipmentTimeStamp](#ShipmentTimeStamp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | t_min | string |  no  |  |
 | t_max | string |  no  |  |

---


 
 
 #### [BuyerDetails](#BuyerDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ajio_site_id | string |  no  |  |
 | name | string |  yes  |  |
 | city | string |  yes  |  |
 | state | string |  yes  |  |
 | gstin | string |  yes  |  |
 | address | string |  yes  |  |
 | pincode | number |  yes  |  |

---


 
 
 #### [EInvoice](#EInvoice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | signed_qr_code | string |  no  |  |
 | signed_invoice | string |  no  |  |
 | error_code | string |  no  |  |
 | acknowledge_no | number |  no  |  |
 | error_message | string |  no  |  |
 | irn | string |  no  |  |
 | acknowledge_date | string |  no  |  |

---


 
 
 #### [EinvoiceInfo](#EinvoiceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credit_note | [EInvoice](#EInvoice) |  no  |  |
 | invoice | [EInvoice](#EInvoice) |  no  |  |

---


 
 
 #### [DebugInfo](#DebugInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | stormbreaker_uuid | string |  no  |  |

---


 
 
 #### [Formatted](#Formatted)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | f_max | string |  no  |  |
 | f_min | string |  no  |  |

---


 
 
 #### [ShipmentMeta](#ShipmentMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | assign_dp_from_sb | boolean |  no  |  |
 | shipment_volumetric_weight | number |  no  |  |
 | lock_data | [LockData](#LockData) |  no  |  |
 | shipment_weight | number |  no  |  |
 | auto_trigger_dp_assignment_acf | boolean |  yes  |  |
 | dp_id | string |  no  |  |
 | timestamp | [ShipmentTimeStamp](#ShipmentTimeStamp) |  no  |  |
 | return_affiliate_shipment_id | string |  no  |  |
 | store_invoice_updated_date | string |  no  |  |
 | bag_weight | string |  no  |  |
 | forward_affiliate_order_id | string |  no  |  |
 | b2b_buyer_details | [BuyerDetails](#BuyerDetails) |  no  |  |
 | external | string |  no  |  |
 | dp_sort_key | string |  no  |  |
 | ewaybill_info | string |  no  |  |
 | dp_options | string |  no  |  |
 | return_awb_number | string |  no  |  |
 | dp_name | string |  no  |  |
 | po_number | string |  no  |  |
 | weight | number |  yes  |  |
 | due_date | string |  no  |  |
 | same_store_available | boolean |  yes  |  |
 | packaging_name | string |  no  |  |
 | fulfilment_priority_text | string |  no  |  |
 | einvoice_info | [EinvoiceInfo](#EinvoiceInfo) |  no  |  |
 | forward_affiliate_shipment_id | string |  no  |  |
 | marketplace_store_id | string |  no  |  |
 | return_affiliate_order_id | string |  no  |  |
 | debug_info | [DebugInfo](#DebugInfo) |  no  |  |
 | awb_number | string |  no  |  |
 | b2c_buyer_details | string |  no  |  |
 | order_type | string |  no  |  |
 | formatted | [Formatted](#Formatted) |  no  |  |
 | return_details | string |  no  |  |
 | return_store_node | number |  no  |  |
 | box_type | string |  no  |  |

---


 
 
 #### [PDFLinks](#PDFLinks)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credit_note_url | string |  no  |  |
 | b2b | string |  no  |  |
 | invoice_a4 | string |  no  |  |
 | invoice | string |  no  |  |
 | invoice_type | string |  yes  |  |
 | label_type | string |  yes  |  |
 | po_invoice | string |  no  |  |
 | label | string |  no  |  |
 | label_a6 | string |  no  |  |
 | label_pos | string |  no  |  |
 | label_a4 | string |  no  |  |
 | invoice_pos | string |  no  |  |
 | invoice_a6 | string |  no  |  |

---


 
 
 #### [AffiliateMeta](#AffiliateMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | coupon_code | string |  no  |  |
 | loyalty_discount | number |  no  |  |
 | size_level_total_qty | number |  no  |  |
 | due_date | string |  no  |  |
 | employee_discount | number |  no  |  |
 | channel_shipment_id | string |  no  |  |
 | is_priority | boolean |  no  |  |
 | quantity | number |  no  |  |
 | box_type | string |  no  |  |
 | channel_order_id | string |  no  |  |
 | order_item_id | string |  no  |  |

---


 
 
 #### [AffiliateDetails](#AffiliateDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ad_id | string |  no  |  |
 | affiliate_shipment_id | string |  yes  |  |
 | shipment_meta | [ShipmentMeta](#ShipmentMeta) |  yes  |  |
 | pdf_links | [PDFLinks](#PDFLinks) |  no  |  |
 | affiliate_order_id | string |  yes  |  |
 | affiliate_id | string |  no  |  |
 | company_affiliate_tag | string |  no  |  |
 | affiliate_store_id | string |  yes  |  |
 | affiliate_meta | [AffiliateMeta](#AffiliateMeta) |  yes  |  |
 | affiliate_bag_id | string |  yes  |  |

---


 
 
 #### [PlatformItem](#PlatformItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | size | string |  no  |  |
 | color | string |  no  |  |
 | l1_category | [string] |  no  |  |
 | name | string |  no  |  |
 | l3_category_name | string |  no  |  |
 | image | [string] |  no  |  |
 | id | number |  no  |  |
 | l3_category | number |  no  |  |
 | department_id | number |  no  |  |
 | can_return | boolean |  no  |  |
 | images | [string] |  no  |  |
 | can_cancel | boolean |  no  |  |
 | code | string |  no  |  |

---


 
 
 #### [GSTDetailsData](#GSTDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_calculated_amount | number |  yes  |  |
 | value_of_good | number |  yes  |  |
 | gstin_code | string |  yes  |  |
 | tax_collected_at_source | number |  yes  |  |
 | gst_fee | number |  yes  |  |

---


 
 
 #### [Prices](#Prices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cod_charges | number |  no  |  |
 | fynd_credits | number |  no  |  |
 | refund_credit | number |  no  |  |
 | discount | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | value_of_good | number |  no  |  |
 | amount_paid | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | cashback | number |  no  |  |
 | amount_paid_roundoff | number |  no  |  |
 | promotion_effective_discount | number |  no  |  |
 | price_effective | number |  no  |  |
 | price_marked | number |  no  |  |
 | tax_collected_at_source | number |  no  |  |
 | refund_amount | number |  no  |  |
 | coupon_value | number |  no  |  |

---


 
 
 #### [BagStateMapper](#BagStateMapper)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | display_name | string |  yes  |  |
 | notify_customer | boolean |  no  |  |
 | state_type | string |  yes  |  |
 | app_display_name | string |  no  |  |
 | journey_type | string |  yes  |  |
 | app_state_name | string |  no  |  |
 | app_facing | boolean |  no  |  |
 | is_active | boolean |  no  |  |
 | bs_id | number |  yes  |  |

---


 
 
 #### [DPDetailsData](#DPDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | awb_no | string |  no  |  |
 | name | string |  no  |  |
 | country | string |  no  |  |
 | amount_handling_charges | number |  no  |  |
 | id | number |  no  |  |
 | dp_charges | number |  no  |  |
 | dp_return_charges | number |  no  |  |
 | gst_tag | string |  no  |  |
 | track_url | string |  no  |  |
 | eway_bill_number | number |  no  |  |
 | pincode | string |  no  |  |
 | eway_bill_id | string |  no  |  |

---


 
 
 #### [Dimensions](#Dimensions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_default | boolean |  no  |  |
 | length | number |  no  |  |
 | unit | string |  no  |  |
 | height | number |  no  |  |
 | width | number |  no  |  |

---


 
 
 #### [Meta](#Meta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dimension | [Dimensions](#Dimensions) |  no  |  |

---


 
 
 #### [OrderingStore](#OrderingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | meta | string |  yes  |  |
 | city | string |  yes  |  |
 | country | string |  yes  |  |
 | id | string |  yes  |  |
 | state | string |  yes  |  |
 | address | string |  yes  |  |
 | code | string |  yes  |  |
 | contact_person | string |  yes  |  |
 | pincode | string |  yes  |  |
 | store_name | string |  yes  |  |
 | phone | string |  yes  |  |

---


 
 
 #### [FulfillingStore](#FulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | meta | string |  yes  |  |
 | city | string |  yes  |  |
 | country | string |  yes  |  |
 | id | number |  yes  |  |
 | fulfillment_channel | string |  yes  |  |
 | state | string |  yes  |  |
 | address | string |  yes  |  |
 | code | string |  yes  |  |
 | contact_person | string |  yes  |  |
 | fulfillment_type | string |  no  |  |
 | pincode | string |  yes  |  |
 | store_name | string |  yes  |  |
 | phone | string |  yes  |  |

---


 
 
 #### [OrderBagArticle](#OrderBagArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifiers | string |  no  |  |
 | uid | string |  no  |  |
 | return_config | string |  no  |  |

---


 
 
 #### [CurrentStatus](#CurrentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kafka_sync | boolean |  no  |  |
 | store_id | number |  no  |  |
 | state_id | number |  no  |  |
 | delivery_awb_number | string |  no  |  |
 | delivery_partner_id | number |  no  |  |
 | bag_state_mapper | [BagStateMapper](#BagStateMapper) |  no  |  |
 | bag_id | number |  no  |  |
 | created_at | string |  no  |  |
 | status | string |  no  |  |
 | updated_at | string |  no  |  |
 | current_status_id | number |  yes  |  |
 | state_type | string |  no  |  |
 | shipment_id | string |  no  |  |

---


 
 
 #### [BagGST](#BagGST)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hsn_code | string |  no  |  |
 | gst_tax_percentage | number |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | value_of_good | number |  no  |  |
 | gst_tag | string |  no  |  |
 | gstin_code | string |  no  |  |
 | gst_fee | number |  no  |  |
 | is_default_hsn_code | boolean |  no  |  |

---


 
 
 #### [PlatformDeliveryAddress](#PlatformDeliveryAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | longitude | number |  no  |  |
 | address_category | string |  no  |  |
 | latitude | number |  no  |  |
 | city | string |  no  |  |
 | address_type | string |  no  |  |
 | country | string |  no  |  |
 | area | string |  no  |  |
 | address2 | string |  no  |  |
 | landmark | string |  no  |  |
 | contact_person | string |  no  |  |
 | state | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | version | string |  no  |  |
 | email | string |  no  |  |
 | pincode | string |  no  |  |
 | address1 | string |  no  |  |
 | phone | string |  no  |  |

---


 
 
 #### [Identifier](#Identifier)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ean | string |  no  |  |

---


 
 
 #### [FinancialBreakup](#FinancialBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_name | string |  yes  |  |
 | added_to_fynd_cash | boolean |  yes  |  |
 | coupon_effective_discount | number |  yes  |  |
 | value_of_good | number |  yes  |  |
 | promotion_effective_discount | number |  yes  |  |
 | price_effective | number |  yes  |  |
 | price_marked | number |  yes  |  |
 | fynd_credits | number |  yes  |  |
 | hsn_code | string |  yes  |  |
 | refund_credit | number |  yes  |  |
 | amount_paid | number |  yes  |  |
 | cashback | number |  yes  |  |
 | tax_collected_at_source | number |  no  |  |
 | cashback_applied | number |  yes  |  |
 | discount | number |  yes  |  |
 | gst_tag | string |  yes  |  |
 | amount_paid_roundoff | number |  no  |  |
 | total_units | number |  yes  |  |
 | coupon_value | number |  yes  |  |
 | gst_fee | number |  yes  |  |
 | cod_charges | number |  yes  |  |
 | size | string |  yes  |  |
 | identifiers | [Identifier](#Identifier) |  yes  |  |
 | gst_tax_percentage | number |  yes  |  |
 | brand_calculated_amount | number |  yes  |  |
 | transfer_price | number |  yes  |  |
 | delivery_charge | number |  yes  |  |

---


 
 
 #### [BagConfigs](#BagConfigs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enable_tracking | boolean |  yes  |  |
 | can_be_cancelled | boolean |  yes  |  |
 | allow_force_return | boolean |  yes  |  |
 | is_returnable | boolean |  yes  |  |
 | is_customer_return_allowed | boolean |  yes  |  |
 | is_active | boolean |  yes  |  |

---


 
 
 #### [DiscountRules](#DiscountRules)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | number |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ItemCriterias](#ItemCriterias)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_brand | [number] |  no  |  |

---


 
 
 #### [BuyRules](#BuyRules)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_criteria | [ItemCriterias](#ItemCriterias) |  no  |  |
 | cart_conditions | string |  no  |  |

---


 
 
 #### [AppliedPromos](#AppliedPromos)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | promotion_name | string |  no  |  |
 | promotion_type | string |  no  |  |
 | discount_rules | [[DiscountRules](#DiscountRules)] |  no  |  |
 | promo_id | string |  no  |  |
 | amount | number |  no  |  |
 | buy_rules | [[BuyRules](#BuyRules)] |  no  |  |
 | mrp_promotion | boolean |  no  |  |
 | article_quantity | number |  no  |  |

---


 
 
 #### [OrderBrandName](#OrderBrandName)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | modified_on | string |  no  |  |
 | company | string |  yes  |  |
 | id | number |  yes  |  |
 | logo | string |  yes  |  |
 | brand_name | string |  yes  |  |
 | created_on | string |  yes  |  |

---


 
 
 #### [OrderBags](#OrderBags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_id | number |  yes  |  |
 | article | [OrderBagArticle](#OrderBagArticle) |  no  |  |
 | current_status | [CurrentStatus](#CurrentStatus) |  no  |  |
 | line_number | number |  no  |  |
 | gst_details | [BagGST](#BagGST) |  no  |  |
 | entity_type | string |  no  |  |
 | display_name | string |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | quantity | number |  no  |  |
 | delivery_address | [PlatformDeliveryAddress](#PlatformDeliveryAddress) |  no  |  |
 | parent_promo_bags | string |  no  |  |
 | financial_breakup | [FinancialBreakup](#FinancialBreakup) |  no  |  |
 | seller_identifier | string |  no  |  |
 | item | [PlatformItem](#PlatformItem) |  no  |  |
 | bag_configs | [BagConfigs](#BagConfigs) |  no  |  |
 | identifier | string |  no  |  |
 | applied_promos | [[AppliedPromos](#AppliedPromos)] |  no  |  |
 | can_return | boolean |  no  |  |
 | can_cancel | boolean |  no  |  |
 | brand | [OrderBrandName](#OrderBrandName) |  no  |  |

---


 
 
 #### [BagStatusHistory](#BagStatusHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kafka_sync | boolean |  no  |  |
 | store_id | number |  no  |  |
 | state_id | number |  no  |  |
 | delivery_awb_number | string |  no  |  |
 | delivery_partner_id | number |  no  |  |
 | bag_state_mapper | [BagStateMapper](#BagStateMapper) |  no  |  |
 | bag_id | number |  no  |  |
 | display_name | string |  no  |  |
 | updated_at | string |  no  |  |
 | status | string |  yes  |  |
 | created_at | string |  no  |  |
 | reasons | [string] |  no  |  |
 | app_display_name | string |  no  |  |
 | state_type | string |  no  |  |
 | bsh_id | number |  no  |  |
 | forward | boolean |  no  |  |
 | shipment_id | string |  no  |  |

---


 
 
 #### [InvoiceInfo](#InvoiceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store_invoice_id | string |  no  |  |
 | credit_note_id | string |  no  |  |
 | updated_date | string |  no  |  |
 | label_url | string |  no  |  |
 | invoice_url | string |  no  |  |

---


 
 
 #### [TrackingList](#TrackingList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | time | string |  no  |  |
 | is_passed | boolean |  no  |  |
 | text | string |  yes  |  |
 | status | string |  yes  |  |
 | is_current | boolean |  no  |  |

---


 
 
 #### [ShipmentPayments](#ShipmentPayments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | source | string |  no  |  |
 | mode | string |  no  |  |
 | logo | string |  no  |  |

---


 
 
 #### [OrderDetailsData](#OrderDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cod_charges | string |  no  |  |
 | order_value | string |  no  |  |
 | tax_details | string |  no  |  |
 | order_date | string |  no  |  |
 | source | string |  no  |  |
 | fynd_order_id | string |  yes  |  |
 | affiliate_id | string |  no  |  |
 | ordering_channel_logo | string |  no  |  |
 | ordering_channel | string |  no  |  |

---


 
 
 #### [ShipmentStatusData](#ShipmentStatusData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | created_at | string |  no  |  |
 | status | string |  no  |  |
 | bag_list | [string] |  no  |  |
 | shipment_id | string |  no  |  |

---


 
 
 #### [PlatformShipment](#PlatformShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_status | string |  no  |  |
 | platform_logo | string |  no  |  |
 | operational_status | string |  no  |  |
 | ordering_store | [OrderingStore](#OrderingStore) |  no  |  |
 | billing_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | delivery_slot | string |  no  |  |
 | affiliate_details | [AffiliateDetails](#AffiliateDetails) |  no  |  |
 | invoice_id | string |  no  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  |
 | delivery_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | bags | [[OrderBags](#OrderBags)] |  no  |  |
 | gst_details | [GSTDetailsData](#GSTDetailsData) |  no  |  |
 | bag_status_history | [[BagStatusHistory](#BagStatusHistory)] |  no  |  |
 | packaging_type | string |  no  |  |
 | shipment_quantity | number |  no  |  |
 | invoice | [InvoiceInfo](#InvoiceInfo) |  no  |  |
 | dp_details | [DPDetailsData](#DPDetailsData) |  no  |  |
 | lock_status | boolean |  no  |  |
 | enable_dp_tracking | boolean |  no  |  |
 | total_items | number |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | custom_meta | [string] |  no  |  |
 | user_agent | string |  no  |  |
 | vertical | string |  no  |  |
 | journey_type | string |  no  |  |
 | priority_text | string |  no  |  |
 | shipment_images | [string] |  no  |  |
 | tracking_list | [[TrackingList](#TrackingList)] |  no  |  |
 | payments | [ShipmentPayments](#ShipmentPayments) |  no  |  |
 | fulfilment_priority | number |  no  |  |
 | coupon | string |  no  |  |
 | meta | [Meta](#Meta) |  no  |  |
 | picked_date | string |  no  |  |
 | total_bags | number |  no  |  |
 | order | [OrderDetailsData](#OrderDetailsData) |  no  |  |
 | status | [ShipmentStatusData](#ShipmentStatusData) |  no  |  |
 | payment_mode | string |  no  |  |
 | shipment_id | string |  yes  |  |

---


 
 
 #### [OrderMeta](#OrderMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cart_id | number |  no  |  |
 | order_platform | string |  no  |  |
 | mongo_cart_id | number |  no  |  |
 | ordering_store | number |  no  |  |
 | payment_type | string |  no  |  |
 | order_child_entities | [string] |  no  |  |
 | order_tags | [string] |  no  |  |
 | files | [string] |  no  |  |
 | order_type | string |  no  |  |
 | employee_id | number |  no  |  |
 | currency_symbol | string |  no  |  |
 | extra_meta | string |  no  |  |
 | customer_note | string |  no  |  |
 | comment | string |  no  |  |
 | staff | string |  no  |  |

---


 
 
 #### [OrderDict](#OrderDict)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | meta | [OrderMeta](#OrderMeta) |  no  |  |
 | payment_methods | string |  no  |  |
 | tax_details | string |  no  |  |
 | order_date | string |  yes  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | fynd_order_id | string |  yes  |  |

---




