



##### [Back to Application docs](./README.md)

## DocumentEngine Methods
Handles financial pdf generation of Fulfilment
* [getInvoiceByShipmentId](#getinvoicebyshipmentid)
* [getCreditNoteByShipmentId](#getcreditnotebyshipmentid)



## Methods with example and description


### getInvoiceByShipmentId
Get Presigned URL to download Invoice



```javascript
// Promise
const promise = documentEngine.getInvoiceByShipmentId({  shipmentId : value,
 parameters : value });

// Async/Await
const data = await documentEngine.getInvoiceByShipmentId({  shipmentId : value,
 parameters : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes | Shiment ID |    
| parameters | invoiceParameter | no |  |  



Use this API to generate Presigned URLs for downloading Invoice

*Returned Response:*




[getInvoiceByShipmentId200Response](#getInvoiceByShipmentId200Response)

Success Response, Presigned URL of Invoice




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getCreditNoteByShipmentId
Get Presigned URL to download Invoice



```javascript
// Promise
const promise = documentEngine.getCreditNoteByShipmentId({  shipmentId : value,
 parameters : value });

// Async/Await
const data = await documentEngine.getCreditNoteByShipmentId({  shipmentId : value,
 parameters : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes | Shiment ID |    
| parameters | creditNoteParameter | no |  |  



Use this API to generate Presigned URLs for downloading Invoice

*Returned Response:*




[getInvoiceByShipmentId200Response](#getInvoiceByShipmentId200Response)

Success Response, Presigned URL of Invoice




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas

 
 
 #### [creditNoteParameter](#creditNoteParameter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | expires_in | number |  no  |  |

---


 
 
 #### [invoiceParameter](#invoiceParameter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | document_type | string |  no  |  |
 | expires_in | number |  no  |  |

---


 
 
 #### [getInvoiceByShipmentId200Response](#getInvoiceByShipmentId200Response)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | presigned_type | string |  yes  |  |
 | shipment_id | string |  yes  |  |
 | presigned_url | string |  yes  |  |

---


 
 
 #### [getInvoiceByShipmentId400Response](#getInvoiceByShipmentId400Response)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | message | string |  yes  |  |

---


 
 
 #### [getInvoiceByShipmentId500Response](#getInvoiceByShipmentId500Response)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | presigned_type | string |  no  |  |

---


 
 
 #### [ReqBodyPresignedPOST](#ReqBodyPresignedPOST)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | event | string |  yes  |  |
 | media_type | [any] |  yes  |  |

---


 
 
 #### [ResponsePresignedPOST](#ResponsePresignedPOST)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | method | string |  yes  |  |
 | event | string |  yes  |  |
 | payload | [any] |  yes  |  |

---


 
 
 #### [SignedSuccessResponse](#SignedSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | string |  no  |  |
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


 
 
 #### [ResponsePresignedGETURL](#ResponsePresignedGETURL)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | presigned_type | string |  yes  |  |
 | shipment_id | string |  yes  |  |
 | presigned_url | string |  yes  |  |

---


 
 
 #### [OrderInvoiceEngineError](#OrderInvoiceEngineError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  no  |  |

---




