



##### [Back to Platform docs](./README.md)

## OrderInvoiceEngine Methods
Handles financial pdf generation of Fulfilment
* [generateBulkPackageLabel](#generatebulkpackagelabel)
* [generateBulkBoxLabel](#generatebulkboxlabel)
* [getLabelStatus](#getlabelstatus)
* [getLabelPresignedURL](#getlabelpresignedurl)



## Methods with example and description


### generateBulkPackageLabel
Generate Labels for Packages



```javascript
// Promise
const promise = client.orderInvoiceEngine.generateBulkPackageLabel({  body : value });

// Async/Await
const data = await client.orderInvoiceEngine.generateBulkPackageLabel({  body : value });
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
const promise = client.orderInvoiceEngine.generateBulkBoxLabel({  body : value });

// Async/Await
const data = await client.orderInvoiceEngine.generateBulkBoxLabel({  body : value });
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


### getLabelStatus
Get Staus of Label generations



```javascript
// Promise
const promise = client.orderInvoiceEngine.getLabelStatus();

// Async/Await
const data = await client.orderInvoiceEngine.getLabelStatus();
```






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


### getLabelPresignedURL
Get Presigned URL to download labels



```javascript
// Promise
const promise = client.orderInvoiceEngine.getLabelPresignedURL();

// Async/Await
const data = await client.orderInvoiceEngine.getLabelPresignedURL();
```






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



### Schemas

 
 
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
 | error_message | string |  no  |  |

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


 
 
 #### [BoxDetails](#BoxDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | box_id | string |  no  |  |
 | total_quantity | string |  no  |  |
 | package_count | string |  no  |  |
 | dimension | string |  no  |  |
 | weight | string |  no  |  |

---


 
 
 #### [GenerateBulkBoxLabel](#GenerateBulkBoxLabel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | stock_transfer_id | string |  no  |  |
 | label_type | string |  no  |  |
 | uid | string |  no  |  |
 | seller_name | string |  no  |  |
 | template_id | number |  no  |  |
 | box_details | [[BoxDetails](#BoxDetails)] |  no  |  |

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
 | uid | boolean |  no  |  |
 | url | string |  no  |  |
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


 
 
 #### [OrderInvoiceEngineError](#OrderInvoiceEngineError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  no  |  |

---




