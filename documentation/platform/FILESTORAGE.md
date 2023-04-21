




##### [Back to Platform docs](./README.md)

## FileStorage Methods
File Storage

* [upload](#upload)

* [appCompleteUpload](#appcompleteupload)
* [appCopyFiles](#appcopyfiles)
* [appStartUpload](#appstartupload)
* [browse](#browse)
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
| namespace | string | yes | bucket name |  
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
| namespace | string | yes | bucket name |  
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


### browse
Browse Files



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").fileStorage.browse({  namespace : value,
 pageNo : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").fileStorage.browse({  namespace : value,
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
| namespace | string | yes | bucket name |  
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
| namespace | string | yes | bucket name |  
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
 | items | [[DbRecord](#DbRecord)] |  yes  |  |
 | page | [Page](#Page) |  yes  |  |
 

---

#### [BulkRequest](#BulkRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | configuration | [ReqConfiguration](#ReqConfiguration) |  no  |  |
 | destination | [Destination](#Destination) |  yes  |  |
 | urls | [string] |  yes  |  |
 

---

#### [BulkUploadResponse](#BulkUploadResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | task | [CopyFileTask](#CopyFileTask) |  yes  |  |
 | tracking_url | string |  yes  |  |
 

---

#### [CDN](#CDN)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | absolute_url | string |  no  |  |
 | relative_url | string |  no  |  |
 | url | string |  yes  |  |
 

---

#### [CompleteResponse](#CompleteResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  yes  |  |
 | cdn | [CDN](#CDN) |  yes  |  |
 | content_type | string |  yes  |  |
 | created_on | string |  yes  |  |
 | file_name | string |  yes  |  |
 | file_path | string |  yes  |  |
 | modified_on | string |  yes  |  |
 | namespace | string |  yes  |  |
 | operation | string |  yes  |  |
 | size | number |  yes  |  |
 | success | boolean |  yes  |  |
 | tags | [string] |  no  |  |
 | upload | [Upload](#Upload) |  yes  |  |
 

---

#### [CopyFileTask](#CopyFileTask)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attempts_made | number |  yes  |  |
 | data | [BulkRequest](#BulkRequest) |  yes  |  |
 | delay | number |  yes  |  |
 | finished_on | number |  yes  |  |
 | id | string |  yes  |  |
 | name | string |  yes  |  |
 | opts | [Opts](#Opts) |  yes  |  |
 | processed_on | number |  yes  |  |
 | progress | number |  yes  |  |
 | stacktrace | [string] |  no  |  |
 | timestamp | number |  yes  |  |
 

---

#### [DbRecord](#DbRecord)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  yes  |  |
 | cdn | [CDN](#CDN) |  yes  |  |
 | content_type | string |  yes  |  |
 | created_on | string |  yes  |  |
 | file_name | string |  yes  |  |
 | file_path | string |  yes  |  |
 | modified_on | string |  yes  |  |
 | namespace | string |  yes  |  |
 | operation | string |  no  |  |
 | success | boolean |  yes  |  |
 | tags | [string] |  yes  |  |
 | upload | [Upload](#Upload) |  yes  |  |
 

---

#### [Destination](#Destination)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | basepath | string |  no  |  |
 | namespace | string |  yes  |  |
 | rewrite | string |  yes  |  |
 

---

#### [FailedResponse](#FailedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  |  |
 

---

#### [Opts](#Opts)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attempts | number |  no  |  |
 | delay | number |  no  |  |
 | timestamp | number |  no  |  |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | has_previous | boolean |  no  |  |
 | item_total | number |  no  |  |
 | next_id | string |  no  |  |
 | size | number |  no  |  |
 | type | number |  yes  |  |
 

---

#### [ReqConfiguration](#ReqConfiguration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | concurrency | number |  no  |  |
 

---

#### [SignUrlRequest](#SignUrlRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | expiry | number |  yes  |  |
 | urls | [string] |  yes  |  |
 

---

#### [SignUrlResponse](#SignUrlResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | urls | [[Urls](#Urls)] |  yes  |  |
 

---

#### [StartRequest](#StartRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | content_type | string |  yes  |  |
 | file_name | string |  yes  |  |
 | params | string |  no  |  |
 | size | number |  yes  |  |
 | tags | [string] |  no  |  |
 

---

#### [StartResponse](#StartResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cdn | [CDN](#CDN) |  yes  |  |
 | content_type | string |  yes  |  |
 | file_name | string |  yes  |  |
 | file_path | string |  yes  |  |
 | method | string |  no  |  |
 | namespace | string |  yes  |  |
 | operation | string |  yes  |  |
 | size | number |  yes  |  |
 | tags | [string] |  no  |  |
 | upload | [Upload](#Upload) |  yes  |  |
 

---

#### [Upload](#Upload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | expiry | number |  yes  |  |
 | url | string |  yes  |  |
 

---

#### [Urls](#Urls)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | expiry | number |  yes  |  |
 | signed_url | string |  yes  |  |
 | url | string |  yes  |  |
 

---




