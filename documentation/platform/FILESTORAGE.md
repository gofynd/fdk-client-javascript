




##### [Back to Platform docs](./README.md)

## FileStorage Methods
File Storage

* [upload](#upload)

* [appCompleteUpload](#appcompleteupload)
* [appCopyFiles](#appcopyfiles)
* [appStartUpload](#appstartupload)
* [appbrowse](#appbrowse)
* [browse](#browse)
* [completeUpload](#completeupload)
* [copyFiles](#copyfiles)
* [getSignUrls](#getsignurls)
* [proxy](#proxy)
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





### appCompleteUpload
This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").fileStorage.appCompleteUpload({  namespace : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").fileStorage.appCompleteUpload({  namespace : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | Segregation of different types of files(products, orders, logistics etc), Required for validating the data of the file being uploaded, decides where exactly the file will be stored inside the storage bucket. |  
| body | [StartResponse](#StartResponse) | yes | Request body |


Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `appStartUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `appCompleteUpload` api to complete the upload process.
This operation will return the url for the uploaded file.


*Returned Response:*




[CompleteResponse](#CompleteResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### appCopyFiles
Copy Files



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").fileStorage.appCopyFiles({  body : value,
 sync : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").fileStorage.appCopyFiles({  body : value,
 sync : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| sync | boolean | no | sync |  
| body | [BulkRequest](#BulkRequest) | yes | Request body |


Copy Files

*Returned Response:*




[BulkUploadResponse](#BulkUploadResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "tracking_url": "https://xxx.xxx.xxx/2",
  "task": {
    "id": "2",
    "name": "__default__",
    "data": {
      "urls": [
        "https://xxx.xxx.xxx/files.csv"
      ],
      "destination": {
        "namespace": "/domaine/path",
        "rewrite": "{{namespace}}/bar/{{dest.path}}"
      }
    },
    "opts": {
      "attempts": 1,
      "delay": 0,
      "timestamp": 1613534206645
    },
    "progress": 0,
    "delay": 0,
    "timestamp": 1613534206645,
    "attempts_made": 0,
    "stacktrace": [],
    "finished_on": 1613534206645,
    "processed_on": 1613534206645
  }
}
```
</details>









---


### appStartUpload
This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").fileStorage.appStartUpload({  namespace : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").fileStorage.appStartUpload({  namespace : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | Segregation of different types of files(products, orders, logistics etc), Required for validating the data of the file being uploaded, decides where exactly the file will be stored inside the storage bucket. |  
| body | [StartRequest](#StartRequest) | yes | Request body |


Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `appStartUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `appCompleteUpload` api to complete the upload process.
This operation will return the url for the uploaded file.


*Returned Response:*




[StartResponse](#StartResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### appbrowse
Browse Files



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").fileStorage.appbrowse({  namespace : value,
 pageNo : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").fileStorage.appbrowse({  namespace : value,
 pageNo : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | bucket name |    
| pageNo | number | no | page no |  



Browse Files

*Returned Response:*




[BrowseResponse](#BrowseResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### browse
Browse Files



```javascript
// Promise
const promise = platformClient.fileStorage.browse({  namespace : value,
 pageNo : value });

// Async/Await
const data = await platformClient.fileStorage.browse({  namespace : value,
 pageNo : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | bucket name |    
| pageNo | number | no | page no |  



Browse Files

*Returned Response:*




[BrowseResponse](#BrowseResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### completeUpload
This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.



```javascript
// Promise
const promise = platformClient.fileStorage.completeUpload({  namespace : value,
 body : value });

// Async/Await
const data = await platformClient.fileStorage.completeUpload({  namespace : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | Segregation of different types of files(products, orders, logistics etc), Required for validating the data of the file being uploaded, decides where exactly the file will be stored inside the storage bucket. |  
| body | [StartResponse](#StartResponse) | yes | Request body |


Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `startUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `completeUpload` api to complete the upload process.
This operation will return the url for the uploaded file.


*Returned Response:*




[CompleteResponse](#CompleteResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### copyFiles
Copy Files



```javascript
// Promise
const promise = platformClient.fileStorage.copyFiles({  body : value,
 sync : value });

// Async/Await
const data = await platformClient.fileStorage.copyFiles({  body : value,
 sync : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| sync | boolean | no | sync |  
| body | [BulkRequest](#BulkRequest) | yes | Request body |


Copy Files

*Returned Response:*




[BulkUploadResponse](#BulkUploadResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "tracking_url": "https://xxx.xxx.xxx/2",
  "task": {
    "id": "2",
    "name": "__default__",
    "data": {
      "urls": [
        "https://xxx.xxx.xxx/files.csv"
      ],
      "destination": {
        "namespace": "/domaine/path",
        "rewrite": "{{namespace}}/bar/{{dest.path}}"
      }
    },
    "opts": {
      "attempts": 1,
      "delay": 0,
      "timestamp": 1613534206645
    },
    "progress": 0,
    "delay": 0,
    "timestamp": 1613534206645,
    "attempts_made": 0,
    "stacktrace": [],
    "finished_on": 1613534206645,
    "processed_on": 1613534206645
  }
}
```
</details>









---


### getSignUrls
Gives signed urls to access private files



```javascript
// Promise
const promise = platformClient.fileStorage.getSignUrls({  body : value });

// Async/Await
const data = await platformClient.fileStorage.getSignUrls({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [SignUrlRequest](#SignUrlRequest) | yes | Request body |


Describe here

*Returned Response:*




[SignUrlResponse](#SignUrlResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### proxy
Proxy



```javascript
// Promise
const promise = platformClient.fileStorage.proxy({  url : value });

// Async/Await
const data = await platformClient.fileStorage.proxy({  url : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| url | string | yes | url |  



Proxy

*Returned Response:*




[string](#string)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### startUpload
This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.



```javascript
// Promise
const promise = platformClient.fileStorage.startUpload({  namespace : value,
 body : value });

// Async/Await
const data = await platformClient.fileStorage.startUpload({  namespace : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | Segregation of different types of files(products, orders, logistics etc), Required for validating the data of the file being uploaded, decides where exactly the file will be stored inside the storage bucket. |  
| body | [StartRequest](#StartRequest) | yes | Request body |


Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `startUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `completeUpload` api to complete the upload process.
This operation will return the url for the uploaded file.


*Returned Response:*




[StartResponse](#StartResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas


#### [BrowseResponse](#BrowseResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[DbRecord](#DbRecord)] |  no  |  |
 | page | [Page](#Page) |  no  |  |
 

---

#### [BulkRequest](#BulkRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | configuration | [ReqConfiguration](#ReqConfiguration)? |  yes  |  |
 | destination | [Destination](#Destination) |  no  |  |
 | urls | [string] |  no  |  |
 

---

#### [BulkUploadResponse](#BulkUploadResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | task | [CopyFileTask](#CopyFileTask) |  no  |  |
 | tracking_url | string |  no  |  |
 

---

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

#### [CopyFileTask](#CopyFileTask)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attempts_made | number |  no  |  |
 | data | [BulkRequest](#BulkRequest) |  no  |  |
 | delay | number |  no  |  |
 | finished_on | number |  no  |  |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | opts | [Opts](#Opts) |  no  |  |
 | processed_on | number |  no  |  |
 | progress | number |  no  |  |
 | stacktrace | [string]? |  yes  |  |
 | timestamp | number |  no  |  |
 

---

#### [DbRecord](#DbRecord)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | cdn | [CDN](#CDN) |  no  |  |
 | content_type | string |  no  |  |
 | created_on | string |  no  |  |
 | file_name | string |  no  |  |
 | file_path | string |  no  |  |
 | modified_on | string |  no  |  |
 | namespace | string |  no  |  |
 | operation | string? |  yes  |  |
 | success | boolean |  no  |  |
 | tags | [string] |  no  |  |
 | upload | [Upload](#Upload) |  no  |  |
 

---

#### [Destination](#Destination)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | basepath | string? |  yes  |  |
 | namespace | string |  no  |  |
 | rewrite | string |  no  |  |
 

---

#### [FailedResponse](#FailedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 

---

#### [Opts](#Opts)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attempts | number? |  yes  |  |
 | delay | number? |  yes  |  |
 | timestamp | number? |  yes  |  |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | has_previous | boolean? |  yes  |  |
 | item_total | number? |  yes  |  |
 | next_id | string? |  yes  |  |
 | size | number? |  yes  |  |
 | type | number |  no  |  |
 

---

#### [ReqConfiguration](#ReqConfiguration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | concurrency | number? |  yes  |  |
 

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
 | params | string? |  yes  |  |
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




