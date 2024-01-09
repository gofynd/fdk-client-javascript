




##### [Back to Platform docs](./README.md)

## FileStorage Methods
This service provides functionality to manage assets and generate pdf. You can upload the assets, get the cdn link for the assets, proxy the assets and many more things.


* [upload](#upload)


Default
* [appCompleteUpload](#appcompleteupload)
* [appCopyFiles](#appcopyfiles)
* [appStartUpload](#appstartupload)
* [appbrowse](#appbrowse)
* [browse](#browse)
* [completeUpload](#completeupload)
* [copyFiles](#copyfiles)
* [generatePaymentReceipt](#generatepaymentreceipt)
* [getDefaultHtmlTemplate](#getdefaulthtmltemplate)
* [getDefaultPdfData](#getdefaultpdfdata)
* [getDefaultPdfTemplate](#getdefaultpdftemplate)
* [getPdfTypes](#getpdftypes)
* [getSignUrls](#getsignurls)
* [proxy](#proxy)
* [saveHtmlTemplate](#savehtmltemplate)
* [startUpload](#startupload)
* [updateHtmlTemplate](#updatehtmltemplate)




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
    "modified_on": "2020-02-03T09:50:04.240Z"
  }
}
```
</details>

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
| body | [CopyFiles](#CopyFiles) | yes | Request body |


Copy Files

*Returned Response:*




[Object](#Object)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; nonSyncMode</i></summary>

```json
{
  "value": {
    "tracking_url": "https://api.fynd.com/public/assets/v1.0/status/copy-files/1.0",
    "task": {
      "id": "1.0",
      "name": "__default__",
      "data": {
        "urls": [
          "https://hdn-1.fynd.com/platform/pictures/free-logo/original/7qdHNTFe--platform-logo.png"
        ],
        "destination": {
          "namespace": "test",
          "basepath": "/test/general/free/original"
        }
      },
      "opts": {
        "attempts": 2,
        "backoff": {
          "type": "fixed",
          "delay": 1000
        },
        "delay": 0,
        "timestamp": 1694812055325
      },
      "progress": 0,
      "delay": 0,
      "timestamp": 1694812055325,
      "attemptsMade": 0,
      "stacktrace": [],
      "returnvalue": null,
      "finishedOn": null,
      "processedOn": null
    }
  }
}
```
</details>

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


### appbrowse
Browse Files



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").fileStorage.appbrowse({  namespace : value,
 page : value,
 limit : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").fileStorage.appbrowse({  namespace : value,
 page : value,
 limit : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | Segregation of different types of files(products, orders, logistics etc), Required for validating the data of the file being uploaded, decides where exactly the file will be stored inside the storage bucket. |    
| page | number | no | page no |    
| limit | number | no | Limit |  



Browse Files

*Returned Response:*




[Object](#Object)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "items": [
      {
        "_id": "64e1e6fe0153e1a6d3e101f4",
        "file_name": "logo.png",
        "file_path": "/brands/pictures/square-logo/original/uY0P_ZtIz-logo.png",
        "success": true,
        "namespace": "brand-square-logo",
        "content_type": "image/png",
        "size": 3298,
        "operation": "putObject",
        "tags": [],
        "cdn": {
          "url": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/brands/pictures/square-logo/original/uY0P_ZtIz-logo.png",
          "absolute_url": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/brands/pictures/square-logo/original/uY0P_ZtIz-logo.png",
          "relative_url": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/brands/pictures/square-logo/original/uY0P_ZtIz-logo.png"
        },
        "upload": {
          "url": "https://fynd-staging-assets.s3-accelerate.amazonaws.com/addsale/brands/pictures/square-logo/original/uY0P_ZtIz-logo.png?Content-Type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=%2F20230820%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230820T101213Z&X-Amz-Expires=1800&X-Amz-Signature=04915b14aec15712abdea3c340d5dc43729e7c982a4994650488c0150c22b0ae&X-Amz-SignedHeaders=host%3Bx-amz-acl&x-amz-acl=public-read",
          "expiry": 1800
        },
        "created_by": {
          "username": "fp_sdet_gofynd_com_65071"
        },
        "company_id": 6520,
        "bucket_key": "addsale/brands/pictures/square-logo/original/uY0P_ZtIz-logo.png",
        "createdAt": "2023-08-20T10:12:14.118Z",
        "updatedAt": "2023-08-20T10:12:14.118Z",
        "__v": 0
      }
    ],
    "page": {
      "current": 1,
      "has_previous": false,
      "has_next": true,
      "item_total": 481,
      "type": "number"
    }
  }
}
```
</details>

</details>









---


### browse
Browse Files



```javascript
// Promise
const promise = platformClient.fileStorage.browse({  namespace : value,
 page : value,
 limit : value });

// Async/Await
const data = await platformClient.fileStorage.browse({  namespace : value,
 page : value,
 limit : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | Segregation of different types of files(products, orders, logistics etc), Required for validating the data of the file being uploaded, decides where exactly the file will be stored inside the storage bucket. |    
| page | number | no | page no |    
| limit | number | no | Limit |  



Browse Files

*Returned Response:*




[Object](#Object)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "items": [
      {
        "_id": "64e1e6fe0153e1a6d3e101f4",
        "file_name": "logo.png",
        "file_path": "/brands/pictures/square-logo/original/uY0P_ZtIz-logo.png",
        "success": true,
        "namespace": "brand-square-logo",
        "content_type": "image/png",
        "size": 3298,
        "operation": "putObject",
        "tags": [],
        "cdn": {
          "url": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/brands/pictures/square-logo/original/uY0P_ZtIz-logo.png",
          "absolute_url": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/brands/pictures/square-logo/original/uY0P_ZtIz-logo.png",
          "relative_url": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/brands/pictures/square-logo/original/uY0P_ZtIz-logo.png"
        },
        "upload": {
          "url": "https://fynd-staging-assets.s3-accelerate.amazonaws.com/addsale/brands/pictures/square-logo/original/uY0P_ZtIz-logo.png?Content-Type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=%2F20230820%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230820T101213Z&X-Amz-Expires=1800&X-Amz-Signature=04915b14aec15712abdea3c340d5dc43729e7c982a4994650488c0150c22b0ae&X-Amz-SignedHeaders=host%3Bx-amz-acl&x-amz-acl=public-read",
          "expiry": 1800
        },
        "created_by": {
          "username": "fp_sdet_gofynd_com_65071"
        },
        "company_id": 6520,
        "bucket_key": "addsale/brands/pictures/square-logo/original/uY0P_ZtIz-logo.png",
        "createdAt": "2023-08-20T10:12:14.118Z",
        "updatedAt": "2023-08-20T10:12:14.118Z",
        "__v": 0
      }
    ],
    "page": {
      "current": 1,
      "has_previous": false,
      "has_next": true,
      "item_total": 481,
      "type": "number"
    }
  }
}
```
</details>

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
    "modified_on": "2020-02-03T09:50:04.240Z"
  }
}
```
</details>

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
| sync | boolean | no |  |  
| body | [CopyFiles](#CopyFiles) | yes | Request body |


Copy Files

*Returned Response:*




[Object](#Object)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; nonSyncMode</i></summary>

```json
{
  "value": {
    "tracking_url": "https://api.fynd.com/public/assets/v1.0/status/copy-files/1.0",
    "task": {
      "id": "1.0",
      "name": "__default__",
      "data": {
        "urls": [
          "https://hdn-1.fynd.com/platform/pictures/free-logo/original/7qdHNTFe--platform-logo.png"
        ],
        "destination": {
          "namespace": "test",
          "basepath": "/test/general/free/original"
        }
      },
      "opts": {
        "attempts": 2,
        "backoff": {
          "type": "fixed",
          "delay": 1000
        },
        "delay": 0,
        "timestamp": 1694812055325
      },
      "progress": 0,
      "delay": 0,
      "timestamp": 1694812055325,
      "attemptsMade": 0,
      "stacktrace": [],
      "returnvalue": null,
      "finishedOn": null,
      "processedOn": null
    }
  }
}
```
</details>

</details>









---


### generatePaymentReceipt
Generate Payment Receipt for Jiomart Digital



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").fileStorage.generatePaymentReceipt({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").fileStorage.generatePaymentReceipt({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PaymentReceiptRequestBody](#PaymentReceiptRequestBody) | yes | Request body |


Generate Payment Receipt for Jiomart Digital

*Returned Response:*




[Object](#Object)

Kafka response published to generate payment receipt




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "success": true
  }
}
```
</details>

</details>









---


### getDefaultHtmlTemplate
Get html template for sales channel



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").fileStorage.getDefaultHtmlTemplate({  pdfTypeId : value,
 format : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").fileStorage.getDefaultHtmlTemplate({  pdfTypeId : value,
 format : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| pdfTypeId | number | yes |  |   
| format | string | yes |  |  



Get default html template for invoice or label

*Returned Response:*




[PdfConfigSuccess](#PdfConfigSuccess)

Get last saved html template for invoice




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "data": [
      {
        "_id": "64b7f52d56a0cba5231964b0",
        "company_id": 1,
        "application_id": "64aed475db2cfb5b8a9f623d",
        "pdf_type_id": 1,
        "format": "A4",
        "template": "<p>Hello world</p>",
        "__v": 0
      }
    ],
    "success": true
  }
}
```
</details>

<details>
<summary><i>&nbsp; failure</i></summary>

```json
{
  "value": {
    "data": [],
    "success": true
  }
}
```
</details>

</details>









---


### getDefaultPdfData
Get Dummy pdf data for invoice or label



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").fileStorage.getDefaultPdfData({  pdfTypeId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").fileStorage.getDefaultPdfData({  pdfTypeId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| pdfTypeId | number | yes |  |  



Get Dummy pdf data for invoice or label

*Returned Response:*




[DummyTemplateDataItems](#DummyTemplateDataItems)

Get dummy json data for invoice




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "data": [
      {
        "_id": "64b7f52d56a0cba5231964b0",
        "pdf_type_id": 1,
        "payload": {
          "is_international": false,
          "app_domain_name": "https://shop.fynd.com",
          "conversion_rate": {
            "base": "INR",
            "rates": {
              "inr": {
                "name": "Indian Rupee",
                "value": 1,
                "symbol": "₹",
                "sub_unit": ""
              },
              "usd": {
                "name": "United States Dollar",
                "value": 0.01176,
                "symbol": "$",
                "sub_unit": ""
              }
            },
            "timestamp": 1681117200000
          },
          "currency_code": "inr",
          "shipment_id": "16915832909421966006",
          "delivery_partner_detail": {
            "name": "fyndr",
            "awb_number_barcode": "",
            "awb_number": "7028792719409",
            "eway_bill_number": null
          },
          "image": {
            "sales_channel_logo": ""
          },
          "payments": [
            {
              "payment_type": "Cash on Delivery",
              "amount": 3010,
              "date": "2023-08-09",
              "transaction_id": "TR64D383390EAD429ED3"
            }
          ],
          "invoice_detail": {
            "invoice_id": "C00003929A000011",
            "invoice_date": "09/08/2023",
            "irn": "",
            "external_order_id": "FY64D383390EBB4D847B",
            "shipment_id": "16915832909421966006",
            "signed_qrcode": "",
            "upi_qrcode": ""
          },
          "company_detail": {
            "name": "auto_company_120720232155193",
            "address": "561,1430 NICO VIADUCT",
            "city": "NICOBAR",
            "state": "ANDAMAN AND NICOBAR ISLANDS",
            "country": "INDIA",
            "zip_code": 739599,
            "state_code": "35",
            "country_code": "IN",
            "gstin": "27AALCA0442L1ZM",
            "pan": null,
            "phone_no": "9823245916",
            "cin": "",
            "website_url": "https://autocompany120720232155193.hostx1.de/",
            "email": "test@gmail.com"
          },
          "store_detail": {
            "store_name": "Khan Ltd lmitited",
            "address": "52936,235 Desai Club, Thane - 127040",
            "city": "Thane",
            "state": "Maharashtra",
            "country": "India",
            "country_code": "India",
            "zip_code": "127040",
            "state_code": "27",
            "gstin": "27AALCA0442L1ZM"
          },
          "customer_billing_detail": {
            "name": "Sonal Nalawade",
            "phone_no": "XXXXXXX144",
            "address": "OFFICE 101/Railway Police Quarters  Wing-D  Railway Police Quarters Sbi Bank Mumbai Maharashtra India 400093",
            "city": "MUMBAI",
            "state": "MAHARASHTRA",
            "country": "India",
            "country_code": "IND",
            "zip_code": "400093",
            "state_code": "27",
            "gstin": null
          },
          "customer_shipping_detail": {
            "name": "Sonal Nalawade",
            "phone_no": "XXXXXXX144",
            "address": "OFFICE 101/Railway Police Quarters,  Wing-D,  Railway Police Quarters, Sbi Bank, Mumbai, Maharashtra, India, 400093",
            "city": "MUMBAI",
            "state": "MAHARASHTRA",
            "country": "India",
            "country_code": "IND",
            "zip_code": "400093",
            "state_code": "27",
            "gstin": null
          },
          "return_detail": {
            "address": "52936,235 Desai Club",
            "city": "Thane",
            "state": "Maharashtra",
            "country": "India",
            "country_code": null,
            "zip_code": "127040",
            "state_code": "27",
            "gstin": "27AALCA0442L1ZM"
          },
          "product_table": {
            "total_items": 1,
            "products": [
              {
                "name": "kuldeep testing webhook",
                "seller_identifier": "DK78JSKKDJ",
                "total": 3000,
                "brand": {
                  "logo": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/brands/pictures/square-logo/original/Wj9obvYLS-Logo.jpeg",
                  "name": "play clan555"
                },
                "hsn_code": "64011234",
                "item_code": "123abc",
                "total_units": 1,
                "size": "OS",
                "mrp": 3000,
                "discount": 0,
                "taxable_amount": 2678.57,
                "total_taxable_amount": 2678.57,
                "tax": {
                  "cgst": {
                    "value": 160.715,
                    "percent": 6
                  },
                  "sgst": {
                    "value": 160.715,
                    "percent": 6
                  },
                  "igst": {
                    "value": 0,
                    "percent": 0
                  }
                }
              }
            ],
            "grand_total": 3010,
            "delivery_charges": 0,
            "delivery_charge_text": "Standard Delivery Charges (Incl of gst)",
            "cod_charges": 10,
            "fynd_discounts": 0,
            "total_in_words": "Three Thousand Ten Rupees Only"
          },
          "tax_table": {
            "taxes": [
              {
                "hsn_code": "64011234",
                "tax": {
                  "cgst": {
                    "value": 160.715,
                    "percent": 6
                  },
                  "sgst": {
                    "value": 160.715,
                    "percent": 6
                  },
                  "igst": {
                    "value": 0,
                    "percent": 0
                  }
                },
                "total_tax_value": 321.43
              },
              {
                "hsn_code": "996819",
                "tax": {
                  "cgst": {
                    "value": 0,
                    "percent": 1.5
                  },
                  "sgst": {
                    "value": 0,
                    "percent": 1.5
                  },
                  "igst": {
                    "value": 0,
                    "percent": 0
                  }
                },
                "total_tax_value": 0
              }
            ],
            "total_tax": 321.43,
            "tax_in_words": "Three Hundred Twenty One Rupees and Forty Three Paise Only"
          },
          "declaration_texts": [
            "1. Products being sent under this invoice are for personal consumption for the customer             and not for resale or commercial purposes.",
            "2. Whether tax is payable under reverse charge - No",
            "3. This invoice shows the actual price of the goods described             above and that all particulars are true and accurate.",
            "4. In case of any queries, please reach out to care@gofynd.com.",
            "5. The product is sold by seller via E-commerce platform i.e Fynd/Fyndstore/Fynd Platform,                            who doesn't represent or warrant or have any responsibility for claims relating to the                            products including its use",
            "6. In the event of any loss or non-delivery, the goods                       shall be returned to the address specified below.",
            "7. 52936,235 Desai Club, Thane, Maharashtra, India, 127040"
          ],
          "registered_company_detail": {
            "address": "561,1430 NICO VIADUCT, NICOBAR, ANDAMAN AND NICOBAR ISLANDS, INDIA, 739599",
            "city": "NICOBAR",
            "state": "ANDAMAN AND NICOBAR ISLANDS",
            "country": "INDIA",
            "country_code": "IN",
            "zip_code": 739599,
            "state_code": "35"
          },
          "disclaimer": "An Electronic document issued in accordance with the provisions of the Information         Technology Act, 2000 (21 of 2000)",
          "meta": {
            "generator": {
              "shipment_id_barcode_generator": {
                "method": "barcode",
                "kwargs": {
                  "value": "16915832909421966006"
                }
              },
              "signed_qrcode_generator": {
                "method": "signedqrcode",
                "kwargs": {
                  "value": ""
                }
              },
              "upi_qrcode_generator": {
                "method": "qrcode",
                "kwargs": {
                  "qr_data": "",
                  "qr_url": ""
                }
              },
              "digitalsignature_generator": {
                "method": "digital_signature",
                "kwargs": {
                  "value": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/company/2/self/legal/documents/free/original/QMx2H6a7o-deelipphoto.jpeg"
                }
              },
              "awb_number_label_barcode_generator": {
                "method": "barcode",
                "kwargs": {
                  "value": []
                }
              }
            }
          },
          "is_self_ship": false,
          "mode": "live",
          "is_self_pickup": false,
          "platform_name": "ECOMM",
          "amount_to_be_collected": 3010,
          "amount_paid": 3010,
          "waybills": [],
          "total_items": 1,
          "brand_logo": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/brands/pictures/square-logo/original/Wj9obvYLS-Logo.jpeg",
          "shipment_id_barcode": "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",
          "signed_qrcode": "",
          "upi_qrcode": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/logistics/qr-code/Delhivery/original/Hv0blbPtA-16830153113571272087.png",
          "digitalsignature": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/brands/pictures/square-logo/original/Wj9obvYLS-Logo.jpeg",
          "awb_number_barcode": "data:image/png;base64,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",
          "uid": "16915832909421966006"
        },
        "__v": 0
      }
    ],
    "success": true
  }
}
```
</details>

<details>
<summary><i>&nbsp; successEmptyValue</i></summary>

```json
{
  "value": {
    "data": [],
    "success": true
  }
}
```
</details>

</details>









---


### getDefaultPdfTemplate
Default html template



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").fileStorage.getDefaultPdfTemplate({  pdfTypeId : value,
 format : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").fileStorage.getDefaultPdfTemplate({  pdfTypeId : value,
 format : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| pdfTypeId | number | yes |  |   
| format | string | yes |  |  



Get default html template data for invoice or label

*Returned Response:*




[PdfDefaultTemplateSuccess](#PdfDefaultTemplateSuccess)

Get rendered html with dummy json payload




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "data": [
      {
        "_id": "64b7f52d56a0cba5231964b0",
        "pdf_type_id": 1,
        "format": "A4",
        "template": "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Invoice A4</title>\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link href='https://fonts.googleapis.com/css?family=Noto Sans' rel='stylesheet'>\n    <style>\n        :root {\n            --black: #000;\n        }\n\n        html {\n            font-size: 10px;\n            display: flex;\n            justify-content: center;\n            word-break: break-all;\n        }\n\n        body {\n            width: 297mm;\n        }\n\n        * {\n            margin: 0;\n            padding: 0;\n            font-family: \"Montserrat\", sans-serif;\n            color: black;\n        }\n\n        p,\n        span {\n            font-size: 1.4rem;\n            line-height: 1.5;\n        }\n\n        .bold {\n            font-weight: bold;\n        }\n\n        .invoice-a4.wrapper {\n            padding: 1em;\n        }\n\n        .invoice-heading {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .invoice-heading .heading {\n            margin: 0.5rem 0;\n            font-size: 3rem;\n        }\n\n        #qrcode {\n            margin: auto;\n            width: 12rem;\n            height: 12rem;\n        }\n\n        .payment-qr-code {\n            display: flex;\n            flex-direction: column;\n            align-items: flex-end;\n            justify-content: flex-end;\n        }\n\n        .invoice-heading .sub-heading {\n            margin: 0.25rem 0;\n            font-size: 1.5rem;\n            font-weight: normal;\n        }\n\n        .invoice-heading .amount-to-be-collected {\n            margin: 0.25rem 0;\n        }\n\n        .invoice-heading .shipment-id {\n            margin: 0.25rem 0;\n        }\n\n        .invoice-heading .center-block {\n            margin-right: 10rem;\n        }\n\n        .center-block {\n            height: 53px;\n            width: 100px;\n        }\n\n        .center-block img {\n            max-width: 100%;\n            max-height: 100%;\n        }\n\n        .seller-customer-details {\n            margin: 1em 0;\n        }\n\n        .seller-customer-details h2 {\n            font-size: 1.5rem;\n            margin-bottom: 0.5rem;\n        }\n\n        .seller-customer-details .seller-customer-details-block {\n            width: 30%;\n            padding-right: 3%;\n            margin-top: 0.5rem;\n        }\n\n        .seller-customer-details .seller-customer-details-block p {\n            line-height: 1.5;\n        }\n\n        .seller-customer-details .primary-details {\n            display: flex;\n            flex-direction: row;\n        }\n\n        .seller-customer-details .secondary-details {\n            display: flex;\n            flex-direction: row;\n            margin-top: 0.5rem;\n        }\n\n        .product-breakup {\n            margin: 0.5rem 0;\n        }\n\n        .product-breakup table {\n            border: 0.15rem solid var(--black);\n            font-size: 1.5rem;\n            width: 100%;\n            border-collapse: collapse;\n        }\n\n        .product-breakup table td,\n        .product-breakup table th {\n            border: 0.15rem solid var(--black);\n            padding: 0.1rem;\n            font-size: 13px;\n        }\n\n        .product-breakup .product-finance-breakup {\n            text-align: center;\n        }\n\n        .product-breakup .product-finance-breakup .cod-charges .left-block,\n        .product-breakup .product-finance-breakup .delivery-charges .left-block,\n        .product-breakup .product-finance-breakup .total .left-block {\n            text-align: left;\n        }\n\n        .total-in-words {\n            text-align: right;\n        }\n\n        .product-hsn-table-breakup {\n            margin-top: 2rem;\n            text-align: center;\n        }\n\n        .product-hsn-table-breakup .products {\n            text-align: center;\n        }\n\n        .total-text {\n            text-align: left;\n            padding-left: 35px;\n        }\n\n        .declarations {\n            margin: 0.5rem 0;\n            font-size: 1.3rem;\n        }\n\n        .declarations .pointers {\n            margin-top: 0.5rem;\n            margin-left: 0.5rem;\n        }\n\n        .invoice-footer-section {\n            display: flex;\n            justify-content: space-between;\n            max-width: 75%;\n            margin-top: 1rem;\n        }\n\n        .invoice-footer-section .company-registered-address {\n            padding-left: 1rem;\n            margin-right: 1.5rem;\n        }\n        \n        .company-registered-address, .company-contact-number, .brand-logo{\n            max-width: 33%;\n        }\n\n        .invoice-disclaimer {\n            margin-top: 0.5rem;\n        }\n\n        .qr-code-size {\n            max-width: 100px;\n            margin-left: 15px;\n        }\n\n        .primary-details {\n            font-size: 5px;\n        }\n\n        .sign-text {\n            font-size: 1rem;\n            margin-top: 5px;\n        }\n        .brand_logo>img , .digital-signature>img{\n            height: 100px;\n            width: 100px;\n        }\n\n        @media print {\n            table {\n                page-break-after: auto;\n            }\n\n            tr {\n                page-break-inside: avoid;\n                page-break-after: auto;\n            }\n\n            td {\n                page-break-inside: avoid;\n                page-break-after: auto;\n            }\n\n            thead {\n                display: table-header-group;\n            }\n\n            tfoot {\n                display: table-footer-group;\n            }\n        }\n    </style>\n</head>\n\n<body>\n    {% if is_international %}\n    <div class=\"invoice-a4 wrapper\">\n        <div class=\"invoice-heading\">\n            <div class=\"left-block\">\n                <h1 class=\"heading\">Tax Invoice</h1>\n                {% if payload.mode === \"development\" %}\n                <h3 class=\"sub-heading\">Original for Recipient | Test Order</h3>\n                {% else %}\n                <h3 class=\"sub-heading\">Original for Recipient</h3>\n                {% endif %}\n                <p class=\"delivery-partner-name-awb-number-block\">\n                    {% if is_self_ship or is_self_pickup %}\n                    <span class=\"dp-name\">\n                        {{ delivery_partner_detail.name | upper }}\n                    </span>\n                    {% else %}\n                    <span class=\"dp-name\">\n                        {{ delivery_partner_detail.name | upper }} | AWB:\n                        {{ delivery_partner_detail.awb_number }}\n                    </span>\n                    {% endif %}\n                </p>\n                <p class=\"amount-to-be-collected\">\n                    <span>Amount to be collected:\n                    </span>\n                    <span class=\"bold\">{{ currency_code }}{{ (conversion_rate.rates[currency_code].value*amount_to_be_collected).toFixed(2) }}</span>\n                </p>\n                <p>\n                    <span class=\"invoice-no\">\n                        Invoice ID: {{ invoice_detail.invoice_id }}</span>\n                    <span class=\"horizontal-divider\">\n                        |\n                    </span>\n                    <span class=\"payment-type\">\n                        {% for payment in payments %}\n                        {% if loop.last %}\n                        {{ payment.payment_type }}\n                        {% else %}\n                        {{ payment.payment_type }},\n                        {% endif %}\n                        {% endfor %}\n                    </span>\n                <p>Invoice Date: {{ invoice_detail.invoice_date }}</p>\n                </p>\n                <p class=\"shipment-id\">\n                    Shipment Id - {{ invoice_detail.shipment_id }}\n                </p>\n                {% if invoice_detail.irn %}\n                <p class=\"irn-number\">IRN - {{ invoice_detail.irn }}</p>\n                {% endif %}\n            </div>\n            {% if image.sales_channel_logo %}\n            <div class=\"center-block\">\n                <img src=\"{{ image.sales_channel_logo }}\" alt=\"Platform Logo\" width=\"54px\" />\n            </div>\n            {% endif %}\n            <div class=\"right-block\">\n                {% if not is_self_ship and not is_self_pickup %}\n                <div class=\"awb-barcode\">\n                    <img src=\"{{ awb_number_barcode }}\" alt=\"{{ delivery_partner_detail.awb_number }}\" />\n                </div>\n                {% endif %}\n                {% if signed_qrcode %}\n                <div id=\"qrcode\">\n                    <img src=\"{{ signed_qrcode }}\" alt=\"IRN QR Code\" width=\"120px\" height=\"120px\" />\n                </div>\n                <div style=\"text-align: center; margin-top: 5px; margin-left: 10px; margin-bottom:5px\">\n                    IRN QR\n                </div>\n                {% endif %}\n            </div>\n        </div>\n        <hr />\n        <div class=\"seller-customer-details\">\n            <div class=\"first-row primary-details\">\n                <div class=\"sold-by seller-details seller-customer-details-block\">\n                    <h2>Sold By</h2>\n                    <p class=\"name\">{{ company_detail.name }}</p>\n                    <p class=\"address\">{{ store_detail.address }}</p>\n                    <p class=\"state-code\">State Code - {{ store_detail.state_code }}</p>\n                    {% if store_detail.gstin %}\n                    <p class=\"gst-number\">GSTIN - {{ store_detail.gstin }}</p>\n                    {% endif %}\n                    {% if company_detail.pan %}\n                    <p class=\"pan-no\">PAN - {{ company_detail.pan }}</p>\n                    {% endif %}\n                    {% if company_detail.phone_no %}\n                    <p class=\"phone_no\">Phone No: {{ company_detail.phone_no }}</p>\n                    {% endif %}\n                    {% if company_detail.cin %}\n                    <p>CIN: {{ company_detail.cin }}</p>\n                    {% endif %}\n                </div>\n                <div class=\"seller-customer-details-block fulfilling-store-details\">\n                    <h2>Ship From</h2>\n                    <p class=\"company-name\">{{ company_detail.name }}</p>\n                    <p class=\"address\">C/o {{ store_detail.address }}</p>\n                    <p class=\"state-code\">State Code - {{ store_detail.state_code }}</p>\n                    {% if store_detail.gstin %}\n                    <p class=\"gst-number\">GSTIN - {{ store_detail.gstin }}</p>\n                    {% endif %}\n                </div>\n            </div>\n            <div class=\"second-row secondary-details\">\n                <div class=\"billing-details seller-customer-details-block\">\n                    <h2>Bill To</h2>\n                    <p class=\"name\">\n                        {{ customer_billing_detail.name }} | Mobile:\n                        {{ customer_billing_detail.phone_no }}\n                    </p>\n                    <p class=\"address\">{{ customer_billing_detail.address }}</p>\n                </div>\n                <div class=\"customer-details ship-to seller-customer-details-block\">\n                    <h2>Ship To</h2>\n                    <p class=\"name\">\n                        {{ customer_shipping_detail.name }} | Mobile:\n                        {{ customer_shipping_detail.phone_no }}\n                    </p>\n                    <p class=\"address\">{{ customer_shipping_detail.address }}</p>\n                    {% if customer_shipping_detail.state_code %}\n                    <p class=\"place-of-supply\">\n                        Place of Supply: {{ customer_shipping_detail.state }}, {{ customer_shipping_detail.state_code }}\n                    </p>\n                    {% else %}\n                    <p class=\"place-of-supply\">\n                        Place of Supply: {{ customer_shipping_detail.state }}\n                    </p>\n                    {% endif %}\n                </div>\n            </div>\n        </div>\n        <p style=\"text-align: right\">\n            Total Items: {{ product_table.total_items }}\n        </p>\n        <div class=\"product-breakup\">\n            <table class=\"product-finance-breakup\">\n                <tr class=\"heading-row\">\n                    <th>Product</th>\n                    <th>Size</th>\n                    <th>Seller Identifier</th>\n                    <th>HSN Code</th>\n                    <th>Total Units</th>\n                    <th>MRP (Unit)</th>\n                    <th>Discount (Unit)</th>\n                    <th>Taxable Amount (Unit)</th>\n                    <th>Total Taxable Amount</th>\n                    {% if product_table.products[0].tax.igst.value>0 %}\n                    <th>Total IGST</th>\n                    {% else %}\n                    <th>Total CGST</th>\n                    <th>Total SGST</th>\n                    {% endif %}\n                    <th>Total</th>\n                </tr>\n                {% for product in product_table.products %}\n                <tr>\n                    <td>{{ product.name }}</td>\n                    <td>{{ product.size }}</td>\n                    <td>{{ product.seller_identifier }}</td>\n                    <td>{{ product.hsn_code }}</td>\n                    <td>{{ product.total_units }}</td>\n                    <td>{{ currency_code }}{{ (conversion_rate.rates[currency_code].value*product.mrp).toFixed(2) }}</td>\n                    <td>{{ currency_code }}{{ (conversion_rate.rates[currency_code].value*product.discount).toFixed(2) }}</td>\n                    <td>{{ currency_code }}{{ (conversion_rate.rates[currency_code].value*product.taxable_amount).toFixed(2) }}</td>\n                    <td>{{ currency_code }}{{ (conversion_rate.rates[currency_code].value*product.total_taxable_amount).toFixed(2) }}</td>\n                    {% if product.tax.igst.value>0 %}\n                    <td>\n                        {{ currency_code }}{{ (conversion_rate.rates[currency_code].value*product.tax.igst.value).toFixed(2) }} ({{ product.tax.igst.percent.toFixed(2) }}%)\n                    </td>\n                    {% else %}\n                    <td>\n                        {{ currency_code }}{{ (conversion_rate.rates[currency_code].value*product.tax.cgst.value).toFixed(2) }} ({{ product.tax.cgst.percent.toFixed(2) }}%)\n                    </td>\n                    <td>\n                        {{ currency_code }}{{ (conversion_rate.rates[currency_code].value*product.tax.sgst.value).toFixed(2) }} ({{ product.tax.sgst.percent.toFixed(2) }}%)\n                    </td>\n                    {% endif %}\n                    <td>{{ currency_code }}{{ (conversion_rate.rates[currency_code].value*product.total).toFixed(2) }}</td>\n                </tr>\n                {% endfor %}\n                {% if product_table.delivery_charges > 0 %}\n                <tr class=\"delivery-charges\">\n                    <td class=\"left-block\" colspan=\"3\" style=\"padding-left: 5px;\">{{product_table.delivery_charge_text}}\n                    </td>\n                    <td colspan=\"1\">996819</td>\n                    {% if product_table.products[0].tax.igst.value >0 %}\n                    <td colspan=\"6\"></td>\n                    {% else %}\n                    <td colspan=\"7\"></td>\n                    {% endif %}\n                    <td class=\"right-block\" colspan=\"1\">\n                        {{ currency_code }}{{ (conversion_rate.rates[currency_code].value*product_table.delivery_charges).toFixed(2) }}\n                    </td>\n                </tr>\n                {% endif %}\n                {% if product_table.cod_charges > 0 %}\n                <tr class=\"cod-charges\">\n                    {% if product_table.products[0].tax.igst.value >0 %}\n                    <td class=\"left-block\" colspan=\"10\" style=\"padding-left: 5px;\">COD Charges</td>\n                    {% else %}\n                    <td class=\"left-block\" colspan=\"11\" style=\"padding-left: 5px;\">COD Charges</td>\n                    {% endif %}\n                    <td class=\"right-block\">\n                        {{ currency_code }}{{ (conversion_rate.rates[currency_code].value*product_table.cod_charges).toFixed(2) }}\n                    </td>\n                </tr>\n                {% endif %}\n                <tr class=\"total\">\n                    {% if product_table.products[0].tax.igst.value >0 %}\n                    <td class=\"left-block\" colspan=\"10\" style=\"padding-left: 5px;\">Total</td>\n                    {% else %}\n                    <td class=\"left-block\" colspan=\"11\" style=\"padding-left: 5px;\">Total</td>\n                    {% endif %}\n                    <td class=\"right-block\">\n                        {{ currency_code }}{{ (conversion_rate.rates[currency_code].value*product_table.grand_total).toFixed(2) }}\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"declarations\">\n            <p class=\"bold\">Declaration</p>\n            <ol class=\"pointers\">\n                {% for declaration in declaration_texts %}\n                <li class=\"pointer\">{{ declaration }}</li>\n                {% endfor %}\n            </ol>\n        </div>\n        <div style=\"\n                          display: flex;\n                          justify-content: space-between;\n                          align-items: center;\n                        \">\n            <div class=\"invoice-footer-section\">\n                <div class=\"brand-logo\">\n                    <img src=\"{{ product_table.products[0].brand.logo }}\" alt=\"Brand Logo\" width=\"100px\" />\n                </div>\n                <div class=\"company-registered-address\">\n                    <p class=\"address\">\n                        Registered Address:\n                    </p>\n                    <p>{{ company_detail.name}}</p>\n                    <p> {{ registered_company_detail.address }}</p>\n                    {% if company_detail.cin %}\n                    <p>CIN - {{ company_detail.cin }}</p>\n                    {% endif %}\n                    {% if company_detail.website_url %}\n                    <p>\n                        {{company_detail.website_url}}\n                    </p>\n                    {% endif %}\n                </div>\n                <div class=\"company-contact-number\">\n                    {% if company_detail.email %}\n                    <p class=\"email\">Email: {{ company_detail.email }}</p>\n                    {% endif %}\n                    {% if company_detail.phone_no %}\n                    <p class=\"phone\">Phone No: {{ company_detail.phone_no }}</p>\n                    {% endif %}\n                    {% if app_domain_name %}\n                    <p class=\"phone\">{{app_domain_name}}</p>\n                    {% endif %}\n                </div>\n                {% if digitalsignature %}\n                <div class=\"digital-signature\">\n                    <img src=\"{{ digitalsignature }}\" alt=\"signature-image\" />\n                    <p class=\"sign-text\">Authorised Signatory</p>\n                </div>\n                {% endif %}\n            </div>\n            {% if upi_qrcode %}\n            <div>\n                <img src=\"{{ upi_qrcode }}\" alt=\"Payment QR Code\" class=\"qr-code-size\" />\n                <p>Scan to pay delivery partner</p>\n            </div>\n            {% endif %}\n        </div>\n        {% if payments[0].payment_type | upper !== \"CASH ON DELIVERY\" and payments[0].payment_type | upper !== \"COD\" %}\n        <div class=\"invoice-details\">\n            <span>\n                Payment Date: {{ payments[0].date }}\n            </span>\n            <span>\n                |\n            </span>\n            <span>\n                Transaction Id: {{ payments[0].transaction_id }}\n            </span>\n            <span>\n                |\n            </span>\n            <span>\n                Payment Amount: {{ currency_code }}{{ (conversion_rate.rates[currency_code].value*amount_paid).toFixed(2) }}\n            </span>\n            <span>\n                |\n            </span>\n            <span>\n                Mode of Payment:\n                {% for payment in payments %}\n                {% if loop.last %}\n                {{ payment.payment_type }}\n                {% else %}\n                {{ payment.payment_type }},\n                {% endif %}\n                {% endfor %}\n            </span>\n        </div>\n        {% endif %}\n        <div class=\"invoice-disclaimer\">\n            <p class=\"bold\">{{ disclaimer }}</p>\n        </div>\n    </div>\n    {% else %}\n    <div class=\"invoice-a4 wrapper\">\n        <div class=\"invoice-heading\">\n            <div class=\"left-block\">\n                <h1 class=\"heading\">Tax Invoice</h1>\n                {% if payload.mode === \"development\" %}\n                <h3 class=\"sub-heading\">Original for Recipient | Test Order</h3>\n                {% else %}\n                <h3 class=\"sub-heading\">Original for Recipient</h3>\n                {% endif %}\n                <p class=\"delivery-partner-name-awb-number-block\">\n                    {% if is_self_ship or is_self_pickup %}\n                    <span class=\"dp-name\">\n                        {{ delivery_partner_detail.name | upper }}\n                    </span>\n                    {% else %}\n                    <span class=\"dp-name\">\n                        {{ delivery_partner_detail.name | upper }} | AWB:\n                        {{ delivery_partner_detail.awb_number }}\n                    </span>\n                    {% endif %}\n                </p>\n                <p class=\"amount-to-be-collected\">\n                    <span>Amount to be collected:\n                    </span>\n                    <span class=\"bold\">{{ currency_code }}{{ amount_to_be_collected.toFixed(2) }}</span>\n                </p>\n                <p>\n                    <span class=\"invoice-no\">\n                        Invoice ID: {{ invoice_detail.invoice_id }}</span>\n                    <span class=\"horizontal-divider\">\n                        |\n                    </span>\n                    <span class=\"payment-type\">\n                        {% for payment in payments %}\n                        {% if loop.last %}\n                        {{ payment.payment_type }}\n                        {% else %}\n                        {{ payment.payment_type }},\n                        {% endif %}\n                        {% endfor %}\n                    </span>\n                <p>Invoice Date: {{ invoice_detail.invoice_date }}</p>\n                </p>\n                <p class=\"shipment-id\">\n                    Shipment Id - {{ invoice_detail.shipment_id }}\n                </p>\n                {% if invoice_detail.irn %}\n                <p class=\"irn-number\">IRN - {{ invoice_detail.irn }}</p>\n                {% endif %}\n            </div>\n            {% if image.sales_channel_logo %}\n            <div class=\"center-block\">\n                <img src=\"{{ image.sales_channel_logo }}\" alt=\"Platform Logo\" width=\"54px\" />\n            </div>\n            {% endif %}\n            <div class=\"right-block\">\n                {% if not is_self_ship and not is_self_pickup %}\n                <div class=\"awb-barcode\">\n                    <img src=\"{{ awb_number_barcode }}\" alt=\"{{ delivery_partner_detail.awb_number }}\" />\n                </div>\n                {% endif %}\n                {% if signed_qrcode %}\n                <div id=\"qrcode\">\n                    <img src=\"{{ signed_qrcode }}\" alt=\"IRN QR Code\" width=\"120px\" height=\"120px\" />\n                </div>\n                <div style=\"text-align: center; margin-top: 5px; margin-left: 10px; margin-bottom:5px\">\n                    IRN QR\n                </div>\n                {% endif %}\n            </div>\n        </div>\n        <hr />\n        <div class=\"seller-customer-details\">\n            <div class=\"first-row primary-details\">\n                <div class=\"sold-by seller-details seller-customer-details-block\">\n                    <h2>Sold By</h2>\n                    <p class=\"name\">{{ company_detail.name }}</p>\n                    <p class=\"address\">{{ store_detail.address }}</p>\n                    <p class=\"state-code\">State Code - {{ store_detail.state_code }}</p>\n                    {% if store_detail.gstin %}\n                    <p class=\"gst-number\">GSTIN - {{ store_detail.gstin }}</p>\n                    {% endif %}\n                    {% if company_detail.pan %}\n                    <p class=\"pan-no\">PAN - {{ company_detail.pan }}</p>\n                    {% endif %}\n                    {% if company_detail.phone_no %}\n                    <p class=\"phone_no\">Phone No: {{ company_detail.phone_no }}</p>\n                    {% endif %}\n                    {% if company_detail.cin %}\n                    <p>CIN: {{ company_detail.cin }}</p>\n                    {% endif %}\n                </div>\n                <div class=\"seller-customer-details-block fulfilling-store-details\">\n                    <h2>Ship From</h2>\n                    <p class=\"company-name\">{{ company_detail.name }}</p>\n                    <p class=\"address\">C/o {{ store_detail.address }}</p>\n                    <p class=\"state-code\">State Code - {{ store_detail.state_code }}</p>\n                    {% if store_detail.gstin %}\n                    <p class=\"gst-number\">GSTIN - {{ store_detail.gstin }}</p>\n                    {% endif %}\n                </div>\n            </div>\n            <div class=\"second-row secondary-details\">\n                <div class=\"billing-details seller-customer-details-block\">\n                    <h2>Bill To</h2>\n                    <p class=\"name\">\n                        {{ customer_billing_detail.name }} | Mobile:\n                        {{ customer_billing_detail.phone_no }}\n                    </p>\n                    <p class=\"address\">{{ customer_billing_detail.address }}</p>\n                    <p class=\"state-code\">\n                        State Code - {{ customer_billing_detail.state_code }}\n                    </p>\n                    {% if customer_billing_detail.gstin %}\n                    <p class=\"gst-no\">GSTIN - {{ customer_billing_detail.gstin }}</p>\n                    {% endif %}\n                </div>\n                <div class=\"customer-details ship-to seller-customer-details-block\">\n                    <h2>Ship To</h2>\n                    <p class=\"name\">\n                        {{ customer_shipping_detail.name }} | Mobile:\n                        {{ customer_shipping_detail.phone_no }}\n                    </p>\n                    <p class=\"address\">{{ customer_shipping_detail.address }}</p>\n                    <p class=\"state-code\">\n                        State Code - {{ customer_shipping_detail.state_code }}\n                    </p>\n                    {% if customer_shipping_detail.gstin %}\n                    <p class=\"gst-no\">GSTIN - {{ customer_shipping_detail.gstin }}</p>\n                    {% endif %}\n                    <p class=\"place-of-supply\">\n                        Place of Supply: {{ customer_shipping_detail.state }}, {{ customer_shipping_detail.state_code }}\n                    </p>\n                </div>\n            </div>\n        </div>\n        <p style=\"text-align: right\">\n            Total Items: {{ product_table.total_items }}\n        </p>\n        <div class=\"product-breakup\">\n            <table class=\"product-finance-breakup\">\n                <tr class=\"heading-row\">\n                    <th>Product</th>\n                    <th>Size</th>\n                    <th>Seller Identifier</th>\n                    <th>HSN Code</th>\n                    <th>Total Units</th>\n                    <th>MRP (Unit)</th>\n                    <th>Discount (Unit)</th>\n                    <th>Taxable Amount (Unit)</th>\n                    <th>Total Taxable Amount</th>\n                    {% if product_table.products[0].tax.igst.value>0 %}\n                    <th>Total IGST</th>\n                    {% else %}\n                    <th>Total CGST</th>\n                    <th>Total SGST</th>\n                    {% endif %}\n                    <th>Total</th>\n                </tr>\n                {% for product in product_table.products %}\n                <tr>\n                    <td>{{ product.name }}</td>\n                    <td>{{ product.size }}</td>\n                    <td>{{ product.seller_identifier }}</td>\n                    <td>{{ product.hsn_code }}</td>\n                    <td>{{ product.total_units }}</td>\n                    <td>{{ currency_code }}{{ product.mrp.toFixed(2) }}</td>\n                    <td>{{ currency_code }}{{ product.discount.toFixed(2) }}</td>\n                    <td>{{ currency_code }}{{ product.taxable_amount.toFixed(2) }}</td>\n                    <td>{{ currency_code }}{{ product.total_taxable_amount.toFixed(2) }}</td>\n                    {% if product.tax.igst.value>0 %}\n                    <td>\n                        {{ currency_code }}{{ product.tax.igst.value.toFixed(2) }} ({{ product.tax.igst.percent.toFixed(2) }}%)\n                    </td>\n                    {% else %}\n                    <td>\n                        {{ currency_code }}{{ product.tax.cgst.value.toFixed(2) }} ({{ product.tax.cgst.percent.toFixed(2) }}%)\n                    </td>\n                    <td>\n                        {{ currency_code }}{{ product.tax.sgst.value.toFixed(2) }} ({{ product.tax.sgst.percent.toFixed(2) }}%)\n                    </td>\n                    {% endif %}\n                    <td>{{ currency_code }}{{ product.total.toFixed(2) }}</td>\n                </tr>\n                {% endfor %}\n                {% if product_table.delivery_charges > 0 %}\n                <tr class=\"delivery-charges\">\n                    <td class=\"left-block\" colspan=\"3\" style=\"padding-left: 5px;\">{{product_table.delivery_charge_text}}\n                    </td>\n                    <td colspan=\"1\">996819</td>\n                    {% if product_table.products[0].tax.igst.value >0 %}\n                    <td colspan=\"6\"></td>\n                    {% else %}\n                    <td colspan=\"7\"></td>\n                    {% endif %}\n                    <td class=\"right-block\" colspan=\"1\">\n                        {{ currency_code }}{{ product_table.delivery_charges.toFixed(2) }}\n                    </td>\n                </tr>\n                {% endif %}\n                {% if product_table.cod_charges > 0 %}\n                <tr class=\"cod-charges\">\n                    {% if product_table.products[0].tax.igst.value >0 %}\n                    <td class=\"left-block\" colspan=\"10\" style=\"padding-left: 5px;\">COD Charges</td>\n                    {% else %}\n                    <td class=\"left-block\" colspan=\"11\" style=\"padding-left: 5px;\">COD Charges</td>\n                    {% endif %}\n                    <td class=\"right-block\">\n                        {{ currency_code }}{{ product_table.cod_charges.toFixed(2) }}\n                    </td>\n                </tr>\n                {% endif %}\n                <tr class=\"total\">\n                    {% if product_table.products[0].tax.igst.value >0 %}\n                    <td class=\"left-block\" colspan=\"10\" style=\"padding-left: 5px;\">Total</td>\n                    {% else %}\n                    <td class=\"left-block\" colspan=\"11\" style=\"padding-left: 5px;\">Total</td>\n                    {% endif %}\n                    <td class=\"right-block\">\n                        {{ currency_code }}{{ product_table.grand_total.toFixed(2) }}\n                    </td>\n                </tr>\n                <tr class=\"total-in-words\">\n                    {% if product_table.products[0].tax.igst.value >0 %}\n                    <td class=\"right-block\" colspan=\"11\">\n                        {{ product_table.total_in_words }}\n                    </td>\n                    {% else %}\n                    <td class=\"right-block\" colspan=\"12\">\n                        {{ product_table.total_in_words }}\n                    </td>\n                    {% endif %}\n                </tr>\n            </table>\n            <table class=\"product-hsn-table-breakup\">\n                <th colspan=\"5\" style=\"font-weight: normal\">Tax Summary</th>\n                <tr class=\"heading-row\">\n                    <th>HSN CODE</th>\n                    <th>CGST</th>\n                    <th>SGST</th>\n                    <th>IGST</th>\n                    <th>Total Tax Value</th>\n                </tr>\n                {% for taxes in tax_table.taxes %}\n                <tr class=\"products\">\n                    <td>{{ taxes.hsn_code }}</td>\n                    <td>\n                        {{ currency_code }}{{ taxes.tax.cgst.value.toFixed(2) }} ({{ taxes.tax.cgst.percent.toFixed(2) }}%)\n                    </td>\n                    <td>\n                        {{ currency_code }}{{ taxes.tax.sgst.value.toFixed(2) }} ({{ taxes.tax.sgst.percent.toFixed(2) }}%)\n                    </td>\n                    <td>\n                        {{ currency_code }}{{ taxes.tax.igst.value.toFixed(2) }} ({{ taxes.tax.igst.percent.toFixed(2) }}%)\n                    </td>\n                    <td>{{ currency_code }}{{ taxes.total_tax_value.toFixed(2) }}</td>\n                </tr>\n                {% endfor %}\n                <tr class=\"total-row\">\n                    <td class=\"total-text\" colspan=\"4\" style=\"padding-left: 35px;\">Total Tax</td>\n                    <td>{{ currency_code }}{{ tax_table.total_tax.toFixed(2) }}</td>\n                </tr>\n                <tr class=\"total-in-words\">\n                    <td class=\"right-block\" colspan=\"5\">\n                        {{ tax_table.tax_in_words }}\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"declarations\">\n            <p class=\"bold\">Declaration</p>\n            <ol class=\"pointers\">\n                {% for declaration in declaration_texts %}\n                <li class=\"pointer\">{{ declaration }}</li>\n                {% endfor %}\n            </ol>\n        </div>\n        <div style=\"\n                          display: flex;\n                          justify-content: space-between;\n                          align-items: center;\n                        \">\n            <div class=\"invoice-footer-section\">\n                <div class=\"brand-logo\">\n                    <img src=\"{{ product_table.products[0].brand.logo }}\" alt=\"Brand Logo\" width=\"100px\" />\n                </div>\n                <div class=\"company-registered-address\">\n                    <p class=\"address\">\n                        Registered Address:\n                    </p>\n                    <p>{{ company_detail.name}}</p>\n                    <p> {{ registered_company_detail.address }}</p>\n                    {% if company_detail.cin %}\n                    <p>CIN - {{ company_detail.cin }}</p>\n                    {% endif %}\n                    {% if company_detail.website_url %}\n                    <p>\n                        {{company_detail.website_url}}\n                    </p>\n                    {% endif %}\n                </div>\n                <div class=\"company-contact-number\">\n                    {% if company_detail.email %}\n                    <p class=\"email\">Email: {{ company_detail.email }}</p>\n                    {% endif %}\n                    {% if company_detail.phone_no %}\n                    <p class=\"phone\">Phone No: {{ company_detail.phone_no }}</p>\n                    {% endif %}\n                    {% if app_domain_name %}\n                    <p class=\"phone\">{{app_domain_name}}</p>\n                    {% endif %}\n                </div>\n                {% if digitalsignature %}\n                <div class=\"digital-signature\">\n                    <img src=\"{{ digitalsignature }}\" alt=\"signature-image\" />\n                    <p class=\"sign-text\">Authorised Signatory</p>\n                </div>\n                {% endif %}\n            </div>\n            {% if upi_qrcode %}\n            <div>\n                <img src=\"{{ upi_qrcode }}\" alt=\"Payment QR Code\" class=\"qr-code-size\" />\n                <p>Scan to pay delivery partner</p>\n            </div>\n            {% endif %}\n        </div>\n        {% if payments[0].payment_type | upper !== \"CASH ON DELIVERY\" and payments[0].payment_type | upper !== \"COD\" %}\n        <div class=\"invoice-details\">\n            <span>\n                Payment Date: {{ payments[0].date }}\n            </span>\n            <span>\n                |\n            </span>\n            <span>\n                Transaction Id: {{ payments[0].transaction_id }}\n            </span>\n            <span>\n                |\n            </span>\n            <span>\n                Payment Amount: {{ currency_code }}{{ amount_paid.toFixed(2) }}\n            </span>\n            <span>\n                |\n            </span>\n            <span>\n                Mode of Payment:\n                {% for payment in payments %}\n                {% if loop.last %}\n                {{ payment.payment_type }}\n                {% else %}\n                {{ payment.payment_type }},\n                {% endif %}\n                {% endfor %}\n            </span>\n        </div>\n        {% endif %}\n        <div class=\"invoice-disclaimer\">\n            <p class=\"bold\">{{ disclaimer }}</p>\n        </div>\n    </div>\n    {% endif %}\n</body>\n\n</html>",
        "country_code": "IN",
        "__v": 0
      }
    ],
    "success": true
  }
}
```
</details>

<details>
<summary><i>&nbsp; failure</i></summary>

```json
{
  "value": {
    "data": [],
    "success": true
  }
}
```
</details>

</details>









---


### getPdfTypes
Get all the supported invoice pdf types



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").fileStorage.getPdfTypes();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").fileStorage.getPdfTypes();
```






Get all the supported invoice pdf types such as Invoice, Label, Deliver challan

*Returned Response:*




[InvoiceTypesResponse](#InvoiceTypesResponse)

Get all the invoice types and its format




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "data": [
      {
        "_id": "64d0cc5cc59e3f7b4ba8a246",
        "pdf_type_id": 1,
        "name": "invoice",
        "format": [
          "A4",
          "A6",
          "POS"
        ],
        "visibility": true,
        "country_code": "IN",
        "__v": 0
      }
    ],
    "success": true
  }
}
```
</details>

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
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": "Binary stream data"
}
```
</details>

</details>









---


### saveHtmlTemplate
Update html template for invoice or label



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").fileStorage.saveHtmlTemplate({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").fileStorage.saveHtmlTemplate({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PdfConfig](#PdfConfig) | yes | Request body |


Update html template for invoice such as Invoice, Label, Deliver challan

*Returned Response:*




[PdfConfigSaveSuccess](#PdfConfigSaveSuccess)

Saved html template for invoice




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "data": {
      "_id": "64dfd8fc8f3b8b5ae5beb72c",
      "format": "A4",
      "pdf_type_id": 1,
      "template": "<div>\n  \n</div>",
      "__v": 0
    },
    "success": true
  }
}
```
</details>

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


### updateHtmlTemplate
Update html template for invoice or label



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").fileStorage.updateHtmlTemplate({  id : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").fileStorage.updateHtmlTemplate({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes |  |  
| body | [PdfConfig](#PdfConfig) | yes | Request body |


Update html template for invoice such as Invoice, Label, Deliver challan

*Returned Response:*




[PdfConfigSaveSuccess](#PdfConfigSaveSuccess)

Update html template for invoice




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "data": {
      "_id": "64dfd8fc8f3b8b5ae5beb72c",
      "format": "A4",
      "pdf_type_id": 1,
      "template": "<div>\n  \n</div>",
      "__v": 0
    },
    "success": true
  }
}
```
</details>

</details>









---




### Schemas


#### [AwbNumberLabelBarcodeGenerator](#AwbNumberLabelBarcodeGenerator)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kwargs | [KwargsAwbNumber](#KwargsAwbNumber)? |  yes  |  |
 | method | string? |  yes  |  |
 

---

#### [Brand](#Brand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [CDN](#CDN)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | absolute_url | string |  no  |  |
 | relative_url | string |  no  |  |
 | url | string |  no  |  |
 

---

#### [Cgst](#Cgst)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | percent | number? |  yes  |  |
 | value | number? |  yes  |  |
 

---

#### [CompanyDetail](#CompanyDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string? |  yes  |  |
 | cin | string? |  yes  |  |
 | city | string? |  yes  |  |
 | country | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | email | string? |  yes  |  |
 | gstin | string? |  yes  |  |
 | name | string? |  yes  |  |
 | pan | string? |  yes  |  |
 | phone_no | string? |  yes  |  |
 | state | string? |  yes  |  |
 | state_code | string? |  yes  |  |
 | website_url | string? |  yes  |  |
 | zip_code | number? |  yes  |  |
 

---

#### [CompleteResponse](#CompleteResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | cdn | [CDN](#CDN) |  no  |  |
 | company_id | number |  no  |  |
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

#### [ConversionRate](#ConversionRate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | base | string? |  yes  |  |
 | rates | [Rates](#Rates)? |  yes  |  |
 | timestamp | number? |  yes  |  |
 

---

#### [CopyFiles](#CopyFiles)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | destination | [DestinationNamespace](#DestinationNamespace) |  no  |  |
 | urls | [string]? |  yes  |  |
 

---

#### [CreatedBy](#CreatedBy)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | username | string? |  yes  |  |
 

---

#### [CustomerBillingDetail](#CustomerBillingDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string? |  yes  |  |
 | city | string? |  yes  |  |
 | country | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | gstin | string? |  yes  |  |
 | name | string? |  yes  |  |
 | phone_no | string? |  yes  |  |
 | state | string? |  yes  |  |
 | state_code | string? |  yes  |  |
 | zip_code | string? |  yes  |  |
 

---

#### [CustomerShippingDetail](#CustomerShippingDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string? |  yes  |  |
 | city | string? |  yes  |  |
 | country | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | gstin | string? |  yes  |  |
 | name | string? |  yes  |  |
 | phone_no | string? |  yes  |  |
 | state | string? |  yes  |  |
 | state_code | string? |  yes  |  |
 | zip_code | string? |  yes  |  |
 

---

#### [DeliveryPartnerDetail](#DeliveryPartnerDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | awb_number | string? |  yes  |  |
 | awb_number_barcode | string? |  yes  |  |
 | eway_bill_number | string? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [DestinationNamespace](#DestinationNamespace)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | namespace | string? |  yes  |  |
 

---

#### [DigitalsignatureGenerator](#DigitalsignatureGenerator)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kwargs | [Kwargs](#Kwargs)? |  yes  |  |
 | method | string? |  yes  |  |
 

---

#### [Document](#Document)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | format | string? |  yes  |  |
 | pdf_type_id | number? |  yes  |  |
 | template | string? |  yes  |  |
 

---

#### [DummyTemplateData](#DummyTemplateData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | payload | [DummyTemplateDataPayload](#DummyTemplateDataPayload) |  no  |  |
 | pdf_type_id | number? |  yes  |  |
 

---

#### [DummyTemplateDataItems](#DummyTemplateDataItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[DummyTemplateData](#DummyTemplateData)] |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [DummyTemplateDataPayload](#DummyTemplateDataPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_paid | number? |  yes  |  |
 | amount_to_be_collected | number? |  yes  |  |
 | app_domain_name | string? |  yes  |  |
 | awb_number_barcode | string? |  yes  |  |
 | brand_logo | string? |  yes  |  |
 | company_detail | [CompanyDetail](#CompanyDetail)? |  yes  |  |
 | conversion_rate | [ConversionRate](#ConversionRate)? |  yes  |  |
 | currency_code | string? |  yes  |  |
 | customer_billing_detail | [CustomerBillingDetail](#CustomerBillingDetail)? |  yes  |  |
 | customer_shipping_detail | [CustomerShippingDetail](#CustomerShippingDetail)? |  yes  |  |
 | declaration_texts | [string]? |  yes  |  |
 | delivery_partner_detail | [DeliveryPartnerDetail](#DeliveryPartnerDetail)? |  yes  |  |
 | digitalsignature | string? |  yes  |  |
 | disclaimer | string? |  yes  |  |
 | image | [Image](#Image)? |  yes  |  |
 | invoice_detail | [InvoiceDetail](#InvoiceDetail)? |  yes  |  |
 | is_international | boolean? |  yes  |  |
 | is_self_pickup | boolean? |  yes  |  |
 | is_self_ship | boolean? |  yes  |  |
 | meta | [Meta](#Meta)? |  yes  |  |
 | mode | string? |  yes  |  |
 | payments | [[PaymentData](#PaymentData)]? |  yes  |  |
 | platform_name | string? |  yes  |  |
 | product_table | [ProductTable](#ProductTable)? |  yes  |  |
 | registered_company_detail | [RegisteredCompanyDetail](#RegisteredCompanyDetail)? |  yes  |  |
 | return_detail | [ReturnDetail](#ReturnDetail)? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | shipment_id_barcode | string? |  yes  |  |
 | signed_qrcode | string? |  yes  |  |
 | store_detail | [StoreDetail](#StoreDetail)? |  yes  |  |
 | tax_table | [TaxTable](#TaxTable)? |  yes  |  |
 | total_items | number? |  yes  |  |
 | uid | string? |  yes  |  |
 | upi_qrcode | string? |  yes  |  |
 | waybills | [string]? |  yes  |  |
 

---

#### [FailedResponse](#FailedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 

---

#### [Igst](#Igst)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | percent | number? |  yes  |  |
 | value | number? |  yes  |  |
 

---

#### [Image](#Image)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sales_channel_logo | string? |  yes  |  |
 

---

#### [Inr](#Inr)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 | sub_unit | string? |  yes  |  |
 | symbol | string? |  yes  |  |
 | value | number? |  yes  |  |
 

---

#### [InvoiceDetail](#InvoiceDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | external_order_id | string? |  yes  |  |
 | invoice_date | string? |  yes  |  |
 | invoice_id | string? |  yes  |  |
 | irn | string? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | signed_qrcode | string? |  yes  |  |
 | upi_qrcode | string? |  yes  |  |
 

---

#### [InvoiceTypesDataResponse](#InvoiceTypesDataResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number |  no  |  |
 | _id | string |  no  |  |
 | country_code | string? |  yes  |  |
 | format | [string] |  no  |  |
 | name | string |  no  |  |
 | pdf_type_id | number |  no  |  |
 | status | boolean? |  yes  |  |
 | visibility | boolean |  no  |  |
 

---

#### [InvoiceTypesResponse](#InvoiceTypesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[InvoiceTypesDataResponse](#InvoiceTypesDataResponse)] |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [ItemsProductTable](#ItemsProductTable)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand | [Brand](#Brand)? |  yes  |  |
 | discount | number? |  yes  |  |
 | hsn_code | string? |  yes  |  |
 | item_code | string? |  yes  |  |
 | mrp | number? |  yes  |  |
 | name | string? |  yes  |  |
 | seller_identifier | string? |  yes  |  |
 | size | string? |  yes  |  |
 | tax | [Tax](#Tax)? |  yes  |  |
 | taxable_amount | number? |  yes  |  |
 | total | number? |  yes  |  |
 | total_taxable_amount | number? |  yes  |  |
 | total_units | number? |  yes  |  |
 

---

#### [Kwargs](#Kwargs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string? |  yes  |  |
 

---

#### [KwargsAwbNumber](#KwargsAwbNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | [string]? |  yes  |  |
 

---

#### [KwargsUpiQrcode](#KwargsUpiQrcode)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | qr_data | string? |  yes  |  |
 | qr_url | string? |  yes  |  |
 

---

#### [Meta](#Meta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | generator | [MetaProperty](#MetaProperty)? |  yes  |  |
 

---

#### [MetaProperty](#MetaProperty)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | awb_number_label_barcode_generator | [AwbNumberLabelBarcodeGenerator](#AwbNumberLabelBarcodeGenerator)? |  yes  |  |
 | digitalsignature_generator | [DigitalsignatureGenerator](#DigitalsignatureGenerator)? |  yes  |  |
 | shipment_id_barcode_generator | [ShipmentIdBarcodeGenerator](#ShipmentIdBarcodeGenerator)? |  yes  |  |
 | signed_qrcode_generator | [SignedQrcodeGenerator](#SignedQrcodeGenerator)? |  yes  |  |
 | upi_qrcode_generator | [UpiQrcodeGenerator](#UpiQrcodeGenerator)? |  yes  |  |
 

---

#### [Params](#Params)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | subpath | string? |  yes  | The subpath for the file. |
 

---

#### [PaymentData](#PaymentData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number? |  yes  |  |
 | date | string? |  yes  |  |
 | payment_type | string? |  yes  |  |
 | transaction_id | string? |  yes  |  |
 

---

#### [PaymentReceiptCustomerDetails](#PaymentReceiptCustomerDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email_id | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | id | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | mobile_number | string? |  yes  |  |
 

---

#### [PaymentReceiptFormat](#PaymentReceiptFormat)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_receipt | [string]? |  yes  |  |
 

---

#### [PaymentReceiptMeta](#PaymentReceiptMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string? |  yes  |  |
 | application_id | [string]? |  yes  |  |
 | company_id | number? |  yes  |  |
 | created_timestamp | number? |  yes  |  |
 | event | string? |  yes  |  |
 | event_trace_info | string? |  yes  |  |
 | format | [PaymentReceiptFormat](#PaymentReceiptFormat)? |  yes  |  |
 | job_type | string? |  yes  |  |
 | organizaton_id | string? |  yes  |  |
 | service | [PaymentReceiptService](#PaymentReceiptService)? |  yes  |  |
 | trace | string? |  yes  |  |
 | trace_id | [string]? |  yes  |  |
 

---

#### [PaymentReceiptOrderDetails](#PaymentReceiptOrderDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | final_amount | number? |  yes  |  |
 | final_amount_in_words | string? |  yes  |  |
 | jiomart_order_id | string? |  yes  |  |
 | order_created_date | string? |  yes  |  |
 | order_created_time | string? |  yes  |  |
 | prm_id | string? |  yes  |  |
 | receipt_no | string? |  yes  |  |
 | taxes | [PaymentReceiptTaxes](#PaymentReceiptTaxes)? |  yes  |  |
 | total_items | number? |  yes  |  |
 

---

#### [PaymentReceiptPayload](#PaymentReceiptPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | customer_detail | [PaymentReceiptCustomerDetails](#PaymentReceiptCustomerDetails)? |  yes  |  |
 | order_detail | [PaymentReceiptOrderDetails](#PaymentReceiptOrderDetails)? |  yes  |  |
 | payments | [[PaymentReceiptPayments](#PaymentReceiptPayments)]? |  yes  |  |
 | uid | string? |  yes  |  |
 

---

#### [PaymentReceiptPayments](#PaymentReceiptPayments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_desc | string? |  yes  |  |
 | txn_date | string? |  yes  |  |
 

---

#### [PaymentReceiptRequestBody](#PaymentReceiptRequestBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | meta | [PaymentReceiptMeta](#PaymentReceiptMeta)? |  yes  |  |
 | payload | [PaymentReceiptPayload](#PaymentReceiptPayload)? |  yes  |  |
 

---

#### [PaymentReceiptService](#PaymentReceiptService)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 

---

#### [PaymentReceiptTaxes](#PaymentReceiptTaxes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gstin | string? |  yes  |  |
 | pancard | string? |  yes  |  |
 

---

#### [PdfConfig](#PdfConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | format | string? |  yes  | This is invoice document format such as A4, A6, POS |
 | pdf_type_id | number? |  yes  |  |
 | template | string? |  yes  | This is html template string |
 

---

#### [PdfConfigSaveSuccess](#PdfConfigSaveSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [PdfConfigSaveSuccessData](#PdfConfigSaveSuccessData)? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [PdfConfigSaveSuccessData](#PdfConfigSaveSuccessData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | application_id | string? |  yes  |  |
 | company_id | number? |  yes  |  |
 | format | string? |  yes  |  |
 | pdf_type_id | number? |  yes  |  |
 | template | string? |  yes  |  |
 

---

#### [PdfConfigSuccess](#PdfConfigSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[PdfConfigSuccessData](#PdfConfigSuccessData)]? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [PdfConfigSuccessData](#PdfConfigSuccessData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | application_id | string? |  yes  |  |
 | company_id | number? |  yes  |  |
 | country_code | string? |  yes  |  |
 | format | string? |  yes  |  |
 | pdf_type_id | number? |  yes  |  |
 | template | string? |  yes  |  |
 

---

#### [PdfDefaultTemplateSuccess](#PdfDefaultTemplateSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[Document](#Document)]? |  yes  |  |
 | success | boolean? |  yes  | Indicates if the request was successful. |
 

---

#### [ProductTable](#ProductTable)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cod_charges | number? |  yes  |  |
 | delivery_charge_text | string? |  yes  |  |
 | delivery_charges | number? |  yes  |  |
 | fynd_discounts | number? |  yes  |  |
 | grand_total | number? |  yes  |  |
 | products | [[ItemsProductTable](#ItemsProductTable)]? |  yes  |  |
 | total_in_words | string? |  yes  |  |
 | total_items | number? |  yes  |  |
 

---

#### [Rates](#Rates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | inr | [Inr](#Inr)? |  yes  |  |
 | usd | [Usd](#Usd)? |  yes  |  |
 

---

#### [RegisteredCompanyDetail](#RegisteredCompanyDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string? |  yes  |  |
 | city | string? |  yes  |  |
 | country | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | state | string? |  yes  |  |
 | state_code | string? |  yes  |  |
 | zip_code | number? |  yes  |  |
 

---

#### [ReturnDetail](#ReturnDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string? |  yes  |  |
 | city | string? |  yes  |  |
 | country | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | gstin | string? |  yes  |  |
 | state | string? |  yes  |  |
 | state_code | string? |  yes  |  |
 | zip_code | string? |  yes  |  |
 

---

#### [Sgst](#Sgst)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | percent | number? |  yes  |  |
 | value | number? |  yes  |  |
 

---

#### [ShipmentIdBarcodeGenerator](#ShipmentIdBarcodeGenerator)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kwargs | [Kwargs](#Kwargs)? |  yes  |  |
 | method | string? |  yes  |  |
 

---

#### [SignedQrcodeGenerator](#SignedQrcodeGenerator)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kwargs | [Kwargs](#Kwargs)? |  yes  |  |
 | method | string? |  yes  |  |
 

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

#### [StoreDetail](#StoreDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string? |  yes  |  |
 | city | string? |  yes  |  |
 | country | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | gstin | string? |  yes  |  |
 | state | string? |  yes  |  |
 | state_code | string? |  yes  |  |
 | store_name | string? |  yes  |  |
 | zip_code | string? |  yes  |  |
 

---

#### [Tax](#Tax)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cgst | [Cgst](#Cgst)? |  yes  |  |
 | igst | [Igst](#Igst)? |  yes  |  |
 | sgst | [Sgst](#Sgst)? |  yes  |  |
 

---

#### [Taxes](#Taxes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hsn_code | string? |  yes  |  |
 | tax | [Tax](#Tax)? |  yes  |  |
 | total_tax_value | number? |  yes  |  |
 

---

#### [TaxTable](#TaxTable)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tax_in_words | string? |  yes  |  |
 | taxes | [[Taxes](#Taxes)]? |  yes  |  |
 | total_tax | number? |  yes  |  |
 

---

#### [UpiQrcodeGenerator](#UpiQrcodeGenerator)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kwargs | [KwargsUpiQrcode](#KwargsUpiQrcode)? |  yes  |  |
 | method | string? |  yes  |  |
 

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

#### [Usd](#Usd)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 | sub_unit | string? |  yes  |  |
 | symbol | string? |  yes  |  |
 | value | number? |  yes  |  |
 

---




