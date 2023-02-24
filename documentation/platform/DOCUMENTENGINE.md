



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




