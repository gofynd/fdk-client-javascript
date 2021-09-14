



##### [Back to Platform docs](./README.md)

## FileStorage Methods
File Storage
* [startUpload](#startupload)
* [completeUpload](#completeupload)
* [appStartUpload](#appstartupload)
* [appCompleteUpload](#appcompleteupload)
* [getSignUrls](#getsignurls)
* [copyFiles](#copyfiles)
* [appCopyFiles](#appcopyfiles)
* [browse](#browse)
* [browse](#browse)
* [proxy](#proxy)



## Methods with example and description


### startUpload
This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.



```javascript
// Promise
const promise = client.filestorage.startUpload({  namespace : value,
 body : value });

// Async/Await
const data = await client.filestorage.startUpload({  namespace : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | bucket name |   
| companyId | number | yes | company_id |  
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


### completeUpload
This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.



```javascript
// Promise
const promise = client.filestorage.completeUpload({  namespace : value,
 body : value });

// Async/Await
const data = await client.filestorage.completeUpload({  namespace : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | bucket name |   
| companyId | number | yes | company_id |  
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


### appStartUpload
This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").filestorage.appStartUpload({  namespace : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").filestorage.appStartUpload({  namespace : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | bucket name |   
| companyId | number | yes | company_id |   
| applicationId | string | yes | application id |  
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


### appCompleteUpload
This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").filestorage.appCompleteUpload({  namespace : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").filestorage.appCompleteUpload({  namespace : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | bucket name |   
| companyId | number | yes | company_id |   
| applicationId | string | yes | application id |  
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


### getSignUrls
Explain here



```javascript
// Promise
const promise = client.filestorage.getSignUrls({  body : value });

// Async/Await
const data = await client.filestorage.getSignUrls({  body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | company_id |  
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


### copyFiles
Copy Files



```javascript
// Promise
const promise = client.filestorage.copyFiles({  body : value,
 sync : value });

// Async/Await
const data = await client.filestorage.copyFiles({  body : value,
 sync : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| sync | boolean | no | sync |   
| companyId | number | yes | company_id |  
| body | [BulkRequest](#BulkRequest) | yes | Request body |


Copy Files

*Returned Response:*




[BulkResponse](#BulkResponse)

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


### appCopyFiles
Copy Files



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").filestorage.appCopyFiles({  body : value,
 sync : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").filestorage.appCopyFiles({  body : value,
 sync : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| sync | boolean | no | sync |   
| companyId | number | yes | company_id |   
| applicationId | number | yes | application_id |  
| body | [BulkRequest](#BulkRequest) | yes | Request body |


Copy Files

*Returned Response:*




[BulkResponse](#BulkResponse)

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


### browse
Browse Files



```javascript
// Promise
const promise = client.filestorage.browse({  namespace : value,
 pageNo : value });

// Async/Await
const data = await client.filestorage.browse({  namespace : value,
 pageNo : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | bucket name |   
| companyId | number | yes | company_id |    
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
const promise = client.application("<APPLICATION_ID>").filestorage.browse({  namespace : value,
 pageNo : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").filestorage.browse({  namespace : value,
 pageNo : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | bucket name |   
| companyId | number | yes | company_id |   
| applicationId | number | yes | application_id |    
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


### proxy
Proxy



```javascript
// Promise
const promise = client.filestorage.proxy({  url : value });

// Async/Await
const data = await client.filestorage.proxy({  url : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | company_id |   
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



### Schemas

 
 
 #### [FailedResponse](#FailedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  |  |

---


 
 
 #### [CDN](#CDN)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  yes  |  |

---


 
 
 #### [Upload](#Upload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | expiry | number |  yes  |  |
 | url | string |  yes  |  |

---


 
 
 #### [StartResponse](#StartResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | file_name | string |  yes  |  |
 | file_path | string |  yes  |  |
 | content_type | string |  yes  |  |
 | method | string |  yes  |  |
 | namespace | string |  yes  |  |
 | operation | string |  yes  |  |
 | size | number |  yes  |  |
 | upload | [Upload](#Upload) |  yes  |  |
 | cdn | [CDN](#CDN) |  yes  |  |
 | tags | [string] |  no  |  |

---


 
 
 #### [StartRequest](#StartRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | file_name | string |  yes  |  |
 | content_type | string |  yes  |  |
 | size | number |  yes  |  |
 | tags | [string] |  no  |  |
 | params | string |  no  |  |

---


 
 
 #### [CompleteResponse](#CompleteResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  yes  |  |
 | file_name | string |  yes  |  |
 | file_path | string |  yes  |  |
 | content_type | string |  yes  |  |
 | method | string |  yes  |  |
 | namespace | string |  yes  |  |
 | operation | string |  yes  |  |
 | size | number |  yes  |  |
 | upload | [Upload](#Upload) |  yes  |  |
 | cdn | [CDN](#CDN) |  yes  |  |
 | success | string |  yes  |  |
 | tags | [string] |  no  |  |
 | created_on | string |  yes  |  |
 | modified_on | string |  yes  |  |

---


 
 
 #### [Opts](#Opts)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attempts | number |  no  |  |
 | timestamp | number |  no  |  |
 | delay | number |  no  |  |

---


 
 
 #### [CopyFileTask](#CopyFileTask)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | name | string |  yes  |  |
 | data | [BulkRequest](#BulkRequest) |  yes  |  |
 | opts | [Opts](#Opts) |  yes  |  |
 | progress | number |  yes  |  |
 | delay | number |  yes  |  |
 | timestamp | number |  yes  |  |
 | attempts_made | number |  yes  |  |
 | stacktrace | [string] |  no  |  |
 | finished_on | number |  yes  |  |
 | processed_on | number |  yes  |  |

---


 
 
 #### [BulkResponse](#BulkResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tracking_url | string |  yes  |  |
 | task | [CopyFileTask](#CopyFileTask) |  yes  |  |

---


 
 
 #### [ReqConfiguration](#ReqConfiguration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | concurrency | number |  no  |  |

---


 
 
 #### [Destination](#Destination)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | namespace | string |  yes  |  |
 | rewrite | string |  yes  |  |
 | basepath | string |  no  |  |

---


 
 
 #### [BulkRequest](#BulkRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | urls | [string] |  yes  |  |
 | destination | [Destination](#Destination) |  yes  |  |
 | configuration | [ReqConfiguration](#ReqConfiguration) |  no  |  |

---


 
 
 #### [Urls](#Urls)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  yes  |  |
 | signed_url | string |  yes  |  |
 | expiry | number |  yes  |  |

---


 
 
 #### [SignUrlResponse](#SignUrlResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | urls | [[Urls](#Urls)] |  yes  |  |

---


 
 
 #### [SignUrlRequest](#SignUrlRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | expiry | number |  yes  |  |
 | urls | [string] |  yes  |  |

---


 
 
 #### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_total | number |  no  |  |
 | next_id | string |  no  |  |
 | has_previous | boolean |  no  |  |
 | has_next | boolean |  no  |  |
 | current | number |  no  |  |
 | type | number |  yes  |  |
 | size | number |  no  |  |

---


 
 
 #### [DbRecord](#DbRecord)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | tags | [string] |  yes  |  |
 | _id | string |  yes  |  |
 | file_name | string |  yes  |  |
 | operation | string |  no  |  |
 | namespace | string |  yes  |  |
 | content_type | string |  yes  |  |
 | file_path | string |  yes  |  |
 | upload | [Upload](#Upload) |  yes  |  |
 | cdn | [CDN](#CDN) |  yes  |  |
 | created_on | string |  yes  |  |
 | modified_on | string |  yes  |  |

---


 
 
 #### [BrowseResponse](#BrowseResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[DbRecord](#DbRecord)] |  yes  |  |
 | page | [Page](#Page) |  yes  |  |

---




