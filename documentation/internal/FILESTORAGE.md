




##### [Back to Internal docs](./README.md)

## FileStorage Methods
This service provides functionality to manage assets and generate pdf. You can upload the assets, get the cdn link for the assets, proxy the assets and many more things. It also generate a single pdf for multiple shipments invoices and label's


* [upload](#upload)

* [generateBulkPdf](#generatebulkpdf)



## Methods with example and description




### upload
method which internally calls `startUpload` and `completeUpload` method to handle the whole file upload flow.


```javascript
// Promise
const promise = fileStorage.upload({
    data,
    file_name,
    content_type,
    namespace,
    size,
    tags,
});

// Async/Await
const data = await fileStorage.upload({
    data,
    file_name,
    content_type,
    namespace,
    size,
    tags,
});
```
| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| data | file | yes | File which needs to be uploaded |
| file_name | string | yes | Name of the file |
| content_type | string | yes | type of file |
| namespace | string | yes | Name of the bucket created for storing objects |
| size | number | yes | File size |
| tags | [string] | yes |  |


Use this API to perform the upload of an arbitrarily sized buffer or blob.



*Returned Response:*

[CompleteResponse](#CompleteResponse)



<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
    "file_name":"logo.png",
    "file_path":"/path/to/file/logo.png",
    "success":true,
    "namespace":"namespace",
    "content_type":"image/png",
    "size":1024,
    "operation":"putObject",
    "tags":[],
    "cdn":{
        "url":"https://cdn.pixelbin.io/v2/logo.png",
        "absolute_url":"https://cdn.pixelbin.io/v2/logo.png",
        "relative_url":"logo.png"
    },
    "_id":"63dbbxxxxxxxxxxxxdecc69f",
    "created_by":{
        "username":"username_gofynd_com"
    },
    "created_on":"2023-01-01T12:00:00.000Z",
    "modified_on":"2023-01-01T00:00:00.000Z"
}
```
</details>

---





### generateBulkPdf
Generate single PDFs for bulk shipments



```javascript
// Promise
const promise = internalClient.fileStorage.generateBulkPdf({  body : value });

// Async/Await
const data = await internalClient.fileStorage.generateBulkPdf({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GenerateShipmentRequestBody](#GenerateShipmentRequestBody) | yes | Request body |


Generate single PDFs for bulk shipments for invoices, label's and Delivery challan

*Returned Response:*




[GenerateShipment200](#GenerateShipment200)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "success": true,
    "job_id": "312432edfg",
    "trace_id": 16898479557521107000
  }
}
```
</details>

</details>









---



### Schemas


#### [GenerateShipment200](#GenerateShipment200)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | job_id | string |  no  |  |
 | success | boolean |  no  |  |
 | trace_id | number |  no  |  |
 

---

#### [GenerateShipment400](#GenerateShipment400)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [GenerateShipment500](#GenerateShipment500)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | stack_trace | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [GenerateShipmentRequestBody](#GenerateShipmentRequestBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | batch_id | string |  no  |  |
 | document | [any]? |  yes  |  |
 | document_type | string? |  yes  |  |
 | invoice_document_type | string? |  yes  |  |
 | label_document_type | string? |  yes  |  |
 | shipment_ids | [any] |  no  |  |
 | store_code | string |  no  |  |
 | uid | string |  no  |  |
 

---




