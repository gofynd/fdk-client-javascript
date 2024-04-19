




##### [Back to Application docs](./README.md)

## FileStorage Methods
File Storage

* [upload](#upload)


Default
* [completeUpload](#completeupload)
* [signUrls](#signurls)
* [startUpload](#startupload)




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






### completeUpload
Completes the upload process. After successfully uploading a file, call this API to finish the upload process.



```javascript
// Promise
const promise = applicationClient.fileStorage.completeUpload({  namespace : value,
 body : value });

// Async/Await
const data = await applicationClient.fileStorage.completeUpload({  namespace : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | Segregation of different types of files(products, orders, logistics etc), Required for validating the data of the file being uploaded, decides where exactly the file will be stored inside the storage bucket. |  
| body | [StartResponse](#StartResponse) | yes | Request body |


Use this API to perform the third step of uploading (i.e. **Complete**) an arbitrarily sized buffer or blob.

The three major steps are:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `startUpload`.
It returns a storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` API with the file (Buffer or Blob) in the request body.

### Complete
After successfully upload, call the `completeUpload` API to finish the upload process.
This operation will return the URL of the uploaded file.


*Returned Response:*




[CompleteResponse](#CompleteResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "success": true,
    "_id": "xxxxxxxxxxxxxxxxxxxxxx",
    "file_name": "shirt.png",
    "file_path": "/path/qwertyuiop-shirt.png",
    "content_type": "image/png",
    "namespace": "products-item-images",
    "operation": "putObject",
    "company_id": 2,
    "tags": [
      "clothing",
      "shirt"
    ],
    "size": 9999,
    "cdn": {
      "url": "https://xxx.xxx.xxx/products/pictures/free/original/qwertyuiop-shirt.png",
      "absolute_url": "https://xxx.xxx.xxx/products/pictures/free/original/qwertyuiop-shirt.png",
      "relative_url": "products/pictures/free/original/qwertyuiop-shirt.png"
    },
    "upload": {
      "expiry": 5000,
      "url": "https://xxx.xxx.xxx/products/pictures/free/original/qwertyuiop-shirt.png?AWSAccessKeyId=xxx&Content-Type=image%2Fpng&Expires=5000&Signature=xxx&x-amz-acl=public-read"
    },
    "created_on": "2020-02-03T09:50:04.240Z",
    "modified_on": "2020-02-03T09:50:04.240Z",
    "created_by": {
      "username": "app@fynd.com"
    }
  }
}
```
</details>

</details>









---


### signUrls
Explain here



```javascript
// Promise
const promise = applicationClient.fileStorage.signUrls({  body : value });

// Async/Await
const data = await applicationClient.fileStorage.signUrls({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [SignUrlRequest](#SignUrlRequest) | yes | Request body |


Describe here

*Returned Response:*




[SignUrlResponse](#SignUrlResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "urls": [
      {
        "url": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x0/documents/manifest/PDFs/test/s3EtYk5p9-new_fee.pdf",
        "signed_url": "https://fynd-staging-assets-private.s3-accelerate.amazonaws.com/addsale/v2/falling-surf-7c8bb8/fyndnp/wrkr/x0/documents/manifest/PDFs/test/s3EtYk5p9-new_fee.pdf",
        "expiry": 1800
      }
    ]
  }
}
```
</details>

</details>









---


### startUpload
Initiates an upload and returns a storage link that is valid for 30 minutes. You can use the storage link to make subsequent upload request with file buffer or blob.



```javascript
// Promise
const promise = applicationClient.fileStorage.startUpload({  namespace : value,
 body : value });

// Async/Await
const data = await applicationClient.fileStorage.startUpload({  namespace : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | Segregation of different types of files(products, orders, logistics etc), Required for validating the data of the file being uploaded, decides where exactly the file will be stored inside the storage bucket. |  
| body | [StartRequest](#StartRequest) | yes | Request body |


Use this API to perform the first step of uploading (i.e. **Start**) an arbitrarily sized buffer or blob.

The three major steps are:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `startUpload`.
It returns a storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` API with the file (Buffer or Blob) in the request body.

### Complete
After successfully upload, call the `completeUpload` API to finish the upload process.
This operation will return the URL of the uploaded file.


*Returned Response:*




[StartResponse](#StartResponse)

Success. Returns a response containing relaving and absolute_url of storage service




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "file_name": "shirt.png",
    "file_path": "/path/qwertyuiop-shirt.png",
    "content_type": "image/png",
    "method": "PUT",
    "namespace": "products-item-images",
    "operation": "putObject",
    "tags": [
      "clothing",
      "shirt"
    ],
    "size": 9999,
    "cdn": {
      "url": "https://xxx.xxx.xxx/products/pictures/free/original/qwertyuiop-shirt.png",
      "absolute_url": "https://xxx.xxx.xxx/products/pictures/free/original/qwertyuiop-shirt.png",
      "relative_url": "products/pictures/free/original/qwertyuiop-shirt.png"
    },
    "upload": {
      "expiry": 5000,
      "url": "https://xxx.xxx.xxx/products/pictures/free/original/qwertyuiop-shirt.png?AWSAccessKeyId=xxx&Content-Type=image%2Fpng&Expires=5000&Signature=xxx&x-amz-acl=public-read"
    }
  }
}
```
</details>

</details>









---




### Schemas


#### [CDN](#CDN)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | absolute_url | string |  no  |  |
 | relative_url | string |  no  |  |
 | url | string |  no  |  |
 

---

#### [CompleteResponse](#CompleteResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | cdn | [CDN](#CDN) |  no  |  |
 | content_type | string |  no  |  |
 | created_by | [CreatedBy](#CreatedBy)? |  yes  |  |
 | created_on | string |  no  |  |
 | file_name | string |  no  |  |
 | file_path | string |  no  |  |
 | modified_on | string |  no  |  |
 | namespace | string |  no  |  |
 | operation | string |  no  |  |
 | size | number |  no  |  |
 | success | boolean |  no  |  |
 | tags | [string]? |  yes  |  |
 | upload | [Upload](#Upload) |  no  |  |
 

---

#### [CreatedBy](#CreatedBy)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | username | string? |  yes  |  |
 

---

#### [Params](#Params)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | subpath | string? |  yes  | The subpath for the file. |
 

---

#### [SignUrlRequest](#SignUrlRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | expiry | number |  no  |  |
 | urls | [string] |  no  |  |
 

---

#### [SignUrlResponse](#SignUrlResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | urls | [[Urls](#Urls)] |  no  |  |
 

---

#### [StartRequest](#StartRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | content_type | string |  no  |  |
 | file_name | string |  no  |  |
 | params | [Params](#Params)? |  yes  |  |
 | size | number |  no  |  |
 | tags | [string]? |  yes  |  |
 

---

#### [StartResponse](#StartResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cdn | [CDN](#CDN) |  no  |  |
 | content_type | string |  no  |  |
 | file_name | string |  no  |  |
 | file_path | string |  no  |  |
 | method | string? |  yes  |  |
 | namespace | string |  no  |  |
 | operation | string |  no  |  |
 | size | number |  no  |  |
 | tags | [string]? |  yes  |  |
 | upload | [Upload](#Upload) |  no  |  |
 

---

#### [Upload](#Upload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | expiry | number |  no  |  |
 | url | string |  no  |  |
 

---

#### [Urls](#Urls)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | expiry | number |  no  |  |
 | signed_url | string |  no  |  |
 | url | string |  no  |  |
 

---




