




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




[ResponseGetInvoiceShipment](#ResponseGetInvoiceShipment)

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




[ResponseGetInvoiceShipment](#ResponseGetInvoiceShipment)

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


 
 
 #### [ResponseGetInvoiceShipment](#ResponseGetInvoiceShipment)

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
 | expires_in | number |  no  |  |

---


 
 
 #### [ResponsePresignedGETURL](#ResponsePresignedGETURL)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | presigned_type | string |  yes  |  |
 | shipment_id | string |  yes  |  |
 | presigned_url | string |  yes  |  |

---


 
 
 #### [ErrorResponsePresignedUrl](#ErrorResponsePresignedUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | message | string |  yes  |  |
 | request_id | string |  no  |  |
 | exception | string |  no  |  |
 | stack_trace | string |  no  |  |
 | meta | string |  no  |  |

---




