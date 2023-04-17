




##### [Back to Platform docs](./README.md)

## DocumentEngine Methods
Handles financial pdf generation of Fulfilment

* [generateBulkBoxLabel](#generatebulkboxlabel)
* [generateBulkPackageLabel](#generatebulkpackagelabel)
* [generateBulkShipmentLabel](#generatebulkshipmentlabel)
* [generateNoc](#generatenoc)
* [getLabelPresignedURL](#getlabelpresignedurl)
* [getLabelStatus](#getlabelstatus)
* [getNocPresignedURL](#getnocpresignedurl)
* [getNocStatus](#getnocstatus)
* [getPresignedURL](#getpresignedurl)



## Methods with example and description




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



### Schemas


#### [BadRequestResponseGenerateBulk](#BadRequestResponseGenerateBulk)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error_message | [[BadRequestResponseGenerateBulkItem](#BadRequestResponseGenerateBulkItem)] |  yes  |  || success | boolean |  yes  |  |

---

#### [BadRequestResponseGenerateBulkItem](#BadRequestResponseGenerateBulkItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data_path | string |  no  |  || keyword | string |  no  |  || message | string |  no  |  || parameters | [BadRequestResponseGenerateBulkItemParameters](#BadRequestResponseGenerateBulkItemParameters) |  no  |  || schema_path | string |  no  |  |

---

#### [BadRequestResponseGenerateBulkItemParameters](#BadRequestResponseGenerateBulkItemParameters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || missing_property | string |  no  |  || type | string |  no  |  |

---

#### [BadRequestResponseGenerateBulkUrl](#BadRequestResponseGenerateBulkUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || exception | string |  no  |  || message | string |  yes  |  || meta | string |  no  |  || request_id | string |  no  |  || stack_trace | string |  no  |  || success | boolean |  yes  |  |

---

#### [BoxDetails](#BoxDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || box_id | string |  yes  |  || dimension | string |  yes  |  || package_count | string |  yes  |  || total_quantity | string |  yes  |  || weight | string |  yes  |  |

---

#### [BulkListBadRequestResponse](#BulkListBadRequestResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error | string |  no  |  || success | boolean |  no  |  |

---

#### [BulkListFailedResponse](#BulkListFailedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error | string |  no  |  || success | boolean |  no  |  |

---

#### [BulkPresignedSuccessResponse](#BulkPresignedSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || batch_id | string |  no  |  || expires_in | number |  no  |  || presigned_type | string |  no  |  || presigned_url | string |  yes  |  || success | string |  yes  |  |

---

#### [DocumentType](#DocumentType)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || invoice | string |  yes  |  || label | string |  yes  |  |

---

#### [GenerateBulkBoxLabel](#GenerateBulkBoxLabel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || box_details | [[BoxDetails](#BoxDetails)] |  yes  |  || label_type | string |  yes  |  || seller_name | string |  yes  |  || stock_transfer_id | string |  yes  |  || template_id | number |  yes  |  || uid | string |  yes  |  |

---

#### [GenerateBulkInvoiceLabelShipment](#GenerateBulkInvoiceLabelShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || document_type | string |  yes  |  || from_date | string |  yes  |  || shipment_ids | [string] |  no  |  || store_id | number |  yes  |  || to_date | string |  yes  |  |

---

#### [GenerateBulkInvoiceOrLabelUrl](#GenerateBulkInvoiceOrLabelUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || batch_id | number |  yes  |  || document_type | string |  yes  |  || uid | string |  yes  |  |

---

#### [GenerateBulkPackageLabel](#GenerateBulkPackageLabel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || item_details | [[PackageItemDetails](#PackageItemDetails)] |  yes  |  || label_type | string |  yes  |  || seller_name | string |  yes  |  || stock_transfer_id | string |  yes  |  || template_id | number |  yes  |  || uid | string |  yes  |  |

---

#### [GenerateBulkShipment](#GenerateBulkShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || batch_id | string |  yes  |  || document_type | string |  yes  |  || store_code | string |  yes  |  || uid | string |  yes  |  |

---

#### [GenerateBulkShipmentLabel](#GenerateBulkShipmentLabel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || label_type | string |  yes  |  || shipments | [[ShipmentDetails](#ShipmentDetails)] |  yes  |  || template_id | number |  yes  |  || uid | string |  yes  |  |

---

#### [GenerateBulkUrl](#GenerateBulkUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || batch_id | string |  yes  |  || document_type | string |  yes  |  || expires_in | number |  no  |  |

---

#### [GenerateBulkUrlSuccessResponse](#GenerateBulkUrlSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || expires_in | number |  yes  |  || presigned_type | string |  yes  |  || uid | string |  yes  |  || url | string |  yes  |  |

---

#### [GenerateManifest](#GenerateManifest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || from_date | string |  yes  |  || shipment_ids | [string] |  no  |  || store_id | number |  yes  |  || to_date | string |  yes  |  |

---

#### [GenerateManifestUrlSuccessResponse](#GenerateManifestUrlSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || expires_in | number |  yes  |  || manifest_id | string |  yes  |  || presigned_type | string |  yes  |  || uid | string |  yes  |  || url | string |  yes  |  |

---

#### [GenerateNoc](#GenerateNoc)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || fc_address | [SellerAddress](#SellerAddress) |  yes  |  || fc_gstin | string |  yes  |  || seller_address | [SellerAddress](#SellerAddress) |  yes  |  || seller_gstin | string |  yes  |  || seller_name | string |  yes  |  || template_id | number |  yes  |  || uid | string |  yes  |  |

---

#### [GeneratePresignedManifestUrl](#GeneratePresignedManifestUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || manifest_id | string |  yes  |  || uid | string |  yes  |  |

---

#### [GetBulkStatusRequest](#GetBulkStatusRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || batch_id | string |  yes  |  |

---

#### [InternalErrorResponseGenerateBulk](#InternalErrorResponseGenerateBulk)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error_message | string |  no  |  || success | boolean |  yes  |  |

---

#### [InternalErrorResponseGenerateBulkShipment](#InternalErrorResponseGenerateBulkShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error | string |  yes  |  || success | boolean |  yes  |  |

---

#### [InternalErrorResponseGenerateBulkUrl](#InternalErrorResponseGenerateBulkUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  yes  |  || success | boolean |  yes  |  |

---

#### [InvoiceLabelPresignedRequestBody](#InvoiceLabelPresignedRequestBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || document_type | string |  yes  |  || entity_id | string |  yes  |  || expires_in | number |  no  |  |

---

#### [ManifestLink](#ManifestLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || manifest_id | string |  yes  |  || name | string |  yes  |  |

---

#### [ManifestListFailedResponse](#ManifestListFailedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error | string |  no  |  || success | boolean |  no  |  |

---

#### [PackageDetails](#PackageDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || dimension | string |  yes  |  || item_quantity | string |  yes  |  || package_id | string |  yes  |  || package_type | string |  yes  |  || packaging_type | string |  yes  |  || weight | string |  yes  |  |

---

#### [PackageItemDetails](#PackageItemDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || best_before_date | string |  yes  |  || country_of_origin | string |  yes  |  || ean | string |  yes  |  || item_name | string |  yes  |  || jio_code | string |  yes  |  || mrp | string |  yes  |  || package_details | [[PackageDetails](#PackageDetails)] |  yes  |  |

---

#### [SellerAddress](#SellerAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address | string |  yes  |  || city | string |  yes  |  || country | string |  yes  |  || pincode | string |  yes  |  || state | string |  yes  |  |

---

#### [ShipmentDetails](#ShipmentDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || appointment_no | string |  yes  |  || gstin_number | string |  yes  |  || item_qty | string |  yes  |  || no_of_boxes | string |  yes  |  || seller_address | [SellerAddress](#SellerAddress) |  yes  |  || seller_name | string |  yes  |  || shipment_no | string |  yes  |  || shipping_address | [ShippingToAddress](#ShippingToAddress) |  yes  |  || shipping_to | string |  yes  |  || total_sku | string |  yes  |  |

---

#### [ShippingToAddress](#ShippingToAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address | string |  yes  |  || city | string |  yes  |  || country | string |  yes  |  || pincode | string |  yes  |  || state | string |  yes  |  |

---

#### [SignedBadRequestResponse](#SignedBadRequestResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error_message | string |  no  |  || success | boolean |  no  |  |

---

#### [SignedFailedResponse](#SignedFailedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error_message | string |  no  |  || success | boolean |  no  |  |

---

#### [SignedSuccessResponse](#SignedSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || expires_in | number |  no  |  || uid | string |  no  |  || url | string |  no  |  |

---

#### [StatusBadRequestResponse](#StatusBadRequestResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error_message | string |  no  |  || success | boolean |  no  |  |

---

#### [StatusFailedResponse](#StatusFailedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error_message | string |  no  |  || success | boolean |  no  |  |

---

#### [StatusSuccessResponse](#StatusSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || status | string |  no  |  || success | boolean |  no  |  |

---

#### [SuccessResponseBulkStatus](#SuccessResponseBulkStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || status | string |  yes  |  || success | boolean |  yes  |  || trace_id | string |  no  |  |

---

#### [SuccessResponseGenerateBulk](#SuccessResponseGenerateBulk)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || success | boolean |  yes  |  |

---

#### [SuccessResponseGenerateBulkShipment](#SuccessResponseGenerateBulkShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || job_id | number |  yes  |  || success | boolean |  yes  |  || trace_id | string |  no  |  |

---




