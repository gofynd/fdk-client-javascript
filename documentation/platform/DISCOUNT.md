




##### [Back to Platform docs](./README.md)

## Discount Methods
Discount


Discount Management
* [createDiscount](#creatediscount)
* [getDiscount](#getdiscount)
* [getDiscounts](#getdiscounts)
* [updateDiscount](#updatediscount)


Discount Items Management
* [upsertDiscountItems](#upsertdiscountitems)


Discount File Validation
* [cancelValidationJob](#cancelvalidationjob)
* [getValidationJob](#getvalidationjob)
* [validateDiscountFile](#validatediscountfile)


Discount File Download
* [cancelDownloadJob](#canceldownloadjob)
* [downloadDiscountFile](#downloaddiscountfile)
* [getDownloadJob](#getdownloadjob)




## Methods with example and description





### createDiscount
Create discount.



```javascript
// Promise
const promise = platformClient.discount.createDiscount({  body : value });

// Async/Await
const data = await platformClient.discount.createDiscount({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateUpdateDiscount](#CreateUpdateDiscount) | yes | Request body |


Create discount.

*Returned Response:*




[DiscountJob](#DiscountJob)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success_basic</i></summary>

```json
{
  "value": {
    "_id": "64a7c915c160922f34ba4f12",
    "name": "Contract Discount Name",
    "company_id": 90,
    "is_active": true,
    "app_ids": [
      "646f43ee3b7f8c2847e31fb0"
    ],
    "job_type": "app",
    "discount_type": "flat",
    "discount_level": "application",
    "value": 10,
    "brand_ids": [
      90
    ],
    "store_ids": [
      1001
    ],
    "discount_meta": {
      "timer": true,
      "hours": 20,
      "minutes": 35
    },
    "validity": {
      "start": "2090-04-07T08:19:12.007Z",
      "end": "2090-04-10T08:19:12.007Z"
    },
    "created_on": "2021-04-06T08:19:12.007Z",
    "modified_on": "2021-04-06T08:19:12.007Z",
    "created_by": {
      "username": "narutouzumaki",
      "user_id": "0"
    },
    "modified_by": {
      "username": "narutouzumaki",
      "user_id": "0"
    }
  }
}
```
</details>

<details>
<summary><i>&nbsp; success_custom</i></summary>

```json
{
  "value": {
    "_id": "64a7c915c160922f34ba4f12",
    "name": "Contract Discount Name",
    "company_id": 90,
    "is_active": true,
    "app_ids": [
      "646f43ee3b7f8c2847e31fb0"
    ],
    "job_type": "app",
    "discount_type": "flat",
    "discount_level": "application",
    "value": 10,
    "brand_ids": [
      90
    ],
    "store_ids": [
      1001
    ],
    "discount_meta": {
      "timer": true,
      "hours": 20,
      "minutes": 35
    },
    "validity": {
      "start": "2090-04-07T08:19:12.007Z",
      "end": "2090-04-10T08:19:12.007Z"
    },
    "created_on": "2021-04-06T08:19:12.007Z",
    "modified_on": "2021-04-06T08:19:12.007Z",
    "created_by": {
      "username": "narutouzumaki",
      "user_id": "0"
    },
    "modified_by": {
      "username": "narutouzumaki",
      "user_id": "0"
    }
  }
}
```
</details>

</details>









---


### getDiscount
Get discount by ID.



```javascript
// Promise
const promise = platformClient.discount.getDiscount({  id : value });

// Async/Await
const data = await platformClient.discount.getDiscount({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | unique id. |  



Retrieve detailed information about a specific discount.

*Returned Response:*




[DiscountJob](#DiscountJob)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success_basic</i></summary>

```json
{
  "value": {
    "_id": "64a7c915c160922f34ba4f12",
    "name": "Discount Name",
    "company_id": 90,
    "is_active": true,
    "app_ids": [
      "646f43ee3b7f8c2847e31fb0"
    ],
    "job_type": "app",
    "discount_type": "flat",
    "discount_level": "application",
    "value": 10,
    "brand_ids": [
      90
    ],
    "store_ids": [
      1001
    ],
    "discount_meta": {
      "timer": true,
      "hours": 20,
      "minutes": 35
    },
    "validity": {
      "start": "2021-04-07T08:19:12.007Z",
      "end": "2021-04-10T08:19:12.007Z"
    },
    "created_on": "2021-04-06T08:19:12.007Z",
    "modified_on": "2021-04-06T08:19:12.007Z",
    "created_by": {
      "username": "narutouzumaki",
      "user_id": "0"
    },
    "modified_by": {
      "username": "narutouzumaki",
      "user_id": "0"
    }
  }
}
```
</details>

<details>
<summary><i>&nbsp; success_custom</i></summary>

```json
{
  "value": {
    "_id": "62c538dd6c0f710007ac6dbf",
    "name": "Discount Name",
    "company_id": 90,
    "is_active": true,
    "app_ids": [
      "646f43ee3b7f8c2847e31fb0"
    ],
    "job_type": "app|brand|product",
    "file_path": "https://xxx.xxx.xxx/file.xlsx",
    "discount_type": "flat",
    "discount_level": "application",
    "value": 10,
    "brand_ids": [
      90
    ],
    "store_ids": [
      1001
    ],
    "discount_meta": {
      "timer": true,
      "hours": 20,
      "minutes": 35
    },
    "validity": {
      "start": "2021-04-07T08:19:12.007Z",
      "end": "2021-04-10T08:19:12.007Z"
    },
    "created_on": "2021-04-06T08:19:12.007Z",
    "modified_on": "2021-04-06T08:19:12.007Z",
    "created_by": {
      "username": "narutouzumaki",
      "user_id": "0"
    },
    "modified_by": {
      "username": "narutouzumaki",
      "user_id": "0"
    }
  }
}
```
</details>

</details>









---


### getDiscounts
Get discounts.



```javascript
// Promise
const promise = platformClient.discount.getDiscounts({  view : value,
 q : value,
 pageNo : value,
 pageSize : value,
 archived : value,
 month : value,
 year : value,
 type : value,
 appIds : value });

// Async/Await
const data = await platformClient.discount.getDiscounts({  view : value,
 q : value,
 pageNo : value,
 pageSize : value,
 archived : value,
 month : value,
 year : value,
 type : value,
 appIds : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| view | string | no | listing or calender.  Default is listing. |    
| q | string | no | The search query. This can be a partial or complete name of a discount. |    
| pageNo | number | no | page number. Default is 1. |    
| pageSize | number | no | page size. Default is 12. |    
| archived | boolean | no | archived. Default is false. |    
| month | number | no | month. Default is current month. |    
| year | number | no | year. Default is current year. |    
| type | string | no | basic or custom. |    
| appIds | Array<string> | no | application ids. |  



Retrieve a list of available discounts.

*Returned Response:*




[ListOrCalender](#ListOrCalender)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success_basic</i></summary>

```json
{
  "value": {
    "items": [
      {
        "is_active": false,
        "app_ids": [
          "646f43ee3b7f8c2847e31fb0"
        ],
        "_id": "xxxxxxxxxxxx",
        "name": "Discount Basic",
        "job_type": "app",
        "discount_type": "percentage",
        "discount_level": "application",
        "company_id": 90,
        "validity": {
          "start": "2021-04-06T08:25:34.110Z",
          "end": "2021-04-22T18:30:00.000Z"
        },
        "value": 0,
        "created_by": {
          "username": "narutouzumaki",
          "user_id": "0"
        },
        "modified_by": {
          "username": "narutouzumaki",
          "user_id": "0"
        },
        "created_on": "2021-04-06T08:10:16.609Z",
        "modified_on": "2021-04-07T08:19:12.007Z",
        "brand_ids": [
          90
        ],
        "store_ids": [
          1001
        ]
      }
    ],
    "page": {
      "current": 1,
      "item_total": 1,
      "type": "number",
      "size": 1,
      "has_previous": true,
      "has_next": false
    }
  }
}
```
</details>

<details>
<summary><i>&nbsp; success_custom</i></summary>

```json
{
  "value": {
    "items": [
      {
        "is_active": false,
        "app_ids": [
          "646f43ee3b7f8c2847e31fb0"
        ],
        "_id": "xxxxxxxxxxxx",
        "name": "Discount",
        "job_type": "app|brand|product",
        "discount_type": "percentage",
        "discount_level": "application",
        "company_id": 90,
        "validity": {
          "start": "2021-04-06T08:25:34.110Z",
          "end": "2021-04-22T18:30:00.000Z"
        },
        "value": 0,
        "file_path": "https://xxx.xxx.xxx/file.xlsx",
        "created_by": {
          "username": "narutouzumaki",
          "user_id": "0"
        },
        "modified_by": {
          "username": "narutouzumaki",
          "user_id": "0"
        },
        "created_on": "2021-04-06T08:10:16.609Z",
        "modified_on": "2021-04-07T08:19:12.007Z",
        "brand_ids": [
          90
        ],
        "store_ids": [
          1001
        ]
      }
    ],
    "page": {
      "current": 1,
      "item_total": 1,
      "type": "number",
      "size": 1,
      "has_previous": true,
      "has_next": false
    }
  }
}
```
</details>

</details>









---


### updateDiscount
Update discount.



```javascript
// Promise
const promise = platformClient.discount.updateDiscount({  id : value,
 body : value });

// Async/Await
const data = await platformClient.discount.updateDiscount({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | id |  
| body | [CreateUpdateDiscount](#CreateUpdateDiscount) | yes | Request body |


Create discount.

*Returned Response:*




[DiscountJob](#DiscountJob)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success_basic</i></summary>

```json
{
  "value": {
    "_id": "64a7c915c160922f34ba4f12",
    "name": "Discount Name",
    "company_id": 90,
    "is_active": true,
    "app_ids": [
      "646f43ee3b7f8c2847e31fb0"
    ],
    "job_type": "app",
    "discount_type": "flat",
    "discount_level": "application",
    "value": 10,
    "brand_ids": [
      90
    ],
    "store_ids": [
      1001
    ],
    "discount_meta": {
      "timer": true,
      "hours": 20,
      "minutes": 35
    },
    "validity": {
      "start": "2021-04-07T08:19:12.007Z",
      "end": "2021-04-10T08:19:12.007Z"
    },
    "created_by": {
      "username": "narutouzumaki",
      "user_id": "0"
    },
    "modified_by": {
      "username": "narutouzumaki",
      "user_id": "0"
    }
  }
}
```
</details>

<details>
<summary><i>&nbsp; success_custom</i></summary>

```json
{
  "value": {
    "_id": "64a7c915c160922f34ba4f12",
    "name": "Discount Name",
    "company_id": 90,
    "is_active": true,
    "app_ids": [
      "646f43ee3b7f8c2847e31fb0"
    ],
    "job_type": "app",
    "discount_type": "flat",
    "discount_level": "application",
    "file_path": "https://xxx.xxx.xxx/file.xlsx",
    "value": 10,
    "brand_ids": [
      90
    ],
    "store_ids": [
      1001
    ],
    "discount_meta": {
      "timer": true,
      "hours": 20,
      "minutes": 35
    },
    "validity": {
      "start": "2021-04-07T08:19:12.007Z",
      "end": "2021-04-10T08:19:12.007Z"
    },
    "created_by": {
      "username": "narutouzumaki",
      "user_id": "0"
    },
    "modified_by": {
      "username": "narutouzumaki",
      "user_id": "0"
    }
  }
}
```
</details>

</details>









---




### upsertDiscountItems
Upsert discount items.



```javascript
// Promise
const promise = platformClient.discount.upsertDiscountItems({  id : value,
 body : value });

// Async/Await
const data = await platformClient.discount.upsertDiscountItems({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Job ID of the discount. |  
| body | [BulkDiscount](#BulkDiscount) | yes | Request body |


Create custom discounts.

*Returned Response:*




[Object](#Object)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success_product</i></summary>

```json
{
  "value": {
    "success": true
  }
}
```
</details>

<details>
<summary><i>&nbsp; success_inventory</i></summary>

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




### cancelValidationJob
Cancel validation job.



```javascript
// Promise
const promise = platformClient.discount.cancelValidationJob({  id : value });

// Async/Await
const data = await platformClient.discount.cancelValidationJob({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | id |  



Validate file.

*Returned Response:*




[CancelJobResponse](#CancelJobResponse)

Success




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


### getValidationJob
Get validation job.



```javascript
// Promise
const promise = platformClient.discount.getValidationJob({  id : value });

// Async/Await
const data = await platformClient.discount.getValidationJob({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | id |  



Validate file.

*Returned Response:*




[FileJobResponse](#FileJobResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "_id": "6519669e7fc0cd03ce111ab9",
    "stage": "processing",
    "total": 10,
    "failed": 0,
    "company_id": 90,
    "file_path": "https://xxx.xxx.xxx/file.xlsx",
    "body": {
      "is_active": false,
      "app_ids": [
        "646f43ee3b7f8c2847e31fb0"
      ],
      "_id": "64a7c915c160922f34ba4f12",
      "name": "Discount",
      "job_type": "app",
      "discount_type": "percentage",
      "discount_level": "application",
      "company_id": 90,
      "file_path": "https://xxx.xxx.xxx/file.xlsx",
      "validity": {
        "start": "2021-04-06T08:25:34.110Z",
        "end": "2021-04-22T18:30:00.000Z"
      },
      "value": null,
      "created_by": {
        "username": "narutouzumaki",
        "user_id": "0"
      },
      "modified_by": {
        "username": "narutouzumaki",
        "user_id": "0"
      },
      "created_on": "2021-04-06T08:10:16.609Z",
      "modified_on": "2021-04-07T08:19:12.007Z",
      "brand_ids": [
        90
      ],
      "store_ids": [
        1001
      ]
    },
    "type": "download",
    "file_type": "product"
  }
}
```
</details>

</details>









---


### validateDiscountFile
Validate discount file.



```javascript
// Promise
const promise = platformClient.discount.validateDiscountFile({  body : value,
 discount : value });

// Async/Await
const data = await platformClient.discount.validateDiscountFile({  body : value,
 discount : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| discount | string | no | discount |  
| body | [FileJobRequest](#FileJobRequest) | yes | Request body |


Validate file.

*Returned Response:*




[FileJobResponse](#FileJobResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "_id": "xxxxxxxxxxxx",
    "stage": "processing",
    "total": 10,
    "failed": 0,
    "company_id": 90,
    "file_path": "https://xxx.xxx.xxx/file.xlsx",
    "body": {
      "is_active": false,
      "app_ids": [
        "646f43ee3b7f8c2847e31fb0"
      ],
      "_id": "xxxxxxxxxxxx",
      "name": "Discount",
      "job_type": "app|brand|product",
      "discount_type": "percentage",
      "discount_level": "application",
      "company_id": 90,
      "file_path": "https://xxx.xxx.xxx/file.xlsx",
      "validity": {
        "start": "2090-04-06T08:25:34.110Z",
        "end": "2090-04-22T18:30:00.000Z"
      },
      "value": null,
      "created_by": {
        "username": "narutouzumaki",
        "user_id": "0"
      },
      "modified_by": {
        "username": "narutouzumaki",
        "user_id": "0"
      },
      "created_on": "2021-04-06T08:10:16.609Z",
      "modified_on": "2021-04-07T08:19:12.007Z",
      "brand_ids": [
        90
      ],
      "store_ids": [
        1001
      ]
    },
    "type": "download",
    "file_type": "product"
  }
}
```
</details>

</details>









---




### cancelDownloadJob
Cancel download job.



```javascript
// Promise
const promise = platformClient.discount.cancelDownloadJob({  id : value });

// Async/Await
const data = await platformClient.discount.cancelDownloadJob({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | id |  



Cancel download Job.

*Returned Response:*




[CancelJobResponse](#CancelJobResponse)

Success




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


### downloadDiscountFile
Download discount file.



```javascript
// Promise
const promise = platformClient.discount.downloadDiscountFile({  type : value,
 body : value });

// Async/Await
const data = await platformClient.discount.downloadDiscountFile({  type : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| type | string | yes | type |  
| body | [DownloadFileJob](#DownloadFileJob) | yes | Request body |


Validate file.

*Returned Response:*




[FileJobResponse](#FileJobResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "_id": "xxxxxxxxxxxx",
    "stage": "processing",
    "total": 10,
    "failed": 0,
    "company_id": 90,
    "file_path": "https://xxx.xxx.xxx/file.xlsx",
    "body": {
      "is_active": false,
      "app_ids": [
        "646f43ee3b7f8c2847e31fb0"
      ],
      "_id": "xxxxxxxxxxxx",
      "name": "Discount",
      "job_type": "app",
      "discount_type": "percentage",
      "discount_level": "application",
      "company_id": 90,
      "file_path": "https://xxx.xxx.xxx/file.xlsx",
      "validity": {
        "start": "2021-04-06T08:25:34.110Z",
        "end": "2021-04-22T18:30:00.000Z"
      },
      "value": null,
      "created_by": {
        "username": "narutouzumaki",
        "user_id": "0"
      },
      "modified_by": {
        "username": "narutouzumaki",
        "user_id": "0"
      },
      "created_on": "2021-04-06T08:10:16.609Z",
      "modified_on": "2021-04-07T08:19:12.007Z",
      "brand_ids": [
        90
      ],
      "store_ids": [
        1001
      ]
    },
    "type": "download",
    "file_type": "product"
  }
}
```
</details>

</details>









---


### getDownloadJob
Get download job.



```javascript
// Promise
const promise = platformClient.discount.getDownloadJob({  id : value });

// Async/Await
const data = await platformClient.discount.getDownloadJob({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | id |  



Download file Job.

*Returned Response:*




[FileJobResponse](#FileJobResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "_id": "651b00ef29aedf98f98a8cbd",
    "stage": "processing",
    "total": 10,
    "failed": 0,
    "company_id": 90,
    "file_path": "https://xxx.xxx.xxx/file.xlsx",
    "body": {
      "is_active": false,
      "app_ids": [
        "646f43ee3b7f8c2847e31fb0"
      ],
      "_id": "64a7c915c160922f34ba4f12",
      "name": "Discount",
      "job_type": "app",
      "discount_type": "percentage",
      "discount_level": "application",
      "company_id": 90,
      "file_path": "https://xxx.xxx.xxx/file.xlsx",
      "validity": {
        "start": "2021-04-06T08:25:34.110Z",
        "end": "2021-04-22T18:30:00.000Z"
      },
      "value": null,
      "created_by": {
        "username": "narutouzumaki",
        "user_id": "0"
      },
      "modified_by": {
        "username": "narutouzumaki",
        "user_id": "0"
      },
      "created_on": "2021-04-06T08:10:16.609Z",
      "modified_on": "2021-04-07T08:19:12.007Z",
      "brand_ids": [
        90
      ],
      "store_ids": [
        1001
      ]
    },
    "type": "download",
    "file_type": "product"
  }
}
```
</details>

</details>









---




### Schemas


#### [BadRequestData](#BadRequestData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [BadRequestObject](#BadRequestObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 

---

#### [BadRequestObjectGet](#BadRequestObjectGet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [BadRequestData](#BadRequestData)? |  yes  |  |
 | error | string? |  yes  |  |
 | message | string? |  yes  |  |
 

---

#### [BulkDiscount](#BulkDiscount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number |  no  |  |
 | items | [[DiscountItems](#DiscountItems)] |  no  |  |
 

---

#### [CancelJobResponse](#CancelJobResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 

---

#### [CreateUpdateDiscount](#CreateUpdateDiscount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_ids | [string] |  no  |  |
 | brand_ids | [number]? |  yes  |  |
 | company_id | number |  no  |  |
 | discount_level | string |  no  |  |
 | discount_meta | [DiscountMeta](#DiscountMeta)? |  yes  |  |
 | discount_type | string |  no  |  |
 | extension_ids | [string]? |  yes  |  |
 | file_path | string? |  yes  |  |
 | is_active | boolean |  no  |  |
 | job_type | string |  no  |  |
 | name | string |  no  |  |
 | store_ids | [number]? |  yes  |  |
 | validity | [ValidityObject](#ValidityObject) |  no  |  |
 | value | number? |  yes  |  |
 | zone_ids | [string]? |  yes  |  |
 

---

#### [DiscountItems](#DiscountItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_name | string? |  yes  |  |
 | discount_meta | [DiscountMeta](#DiscountMeta)? |  yes  |  |
 | discount_type | string |  no  |  |
 | item_code | string? |  yes  |  |
 | seller_identifier | string? |  yes  |  |
 | value | number |  no  |  |
 

---

#### [DiscountJob](#DiscountJob)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | app_ids | [string]? |  yes  |  |
 | brand_ids | [number]? |  yes  |  |
 | company_id | number |  no  |  |
 | created_by | [UserDetails](#UserDetails) |  no  |  |
 | created_on | string |  no  |  |
 | discount_level | string? |  yes  |  |
 | discount_meta | [DiscountMeta](#DiscountMeta)? |  yes  |  |
 | discount_type | string? |  yes  |  |
 | file_path | string? |  yes  |  |
 | is_active | boolean |  no  |  |
 | job_type | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | modified_by | [UserDetails](#UserDetails) |  no  |  |
 | modified_on | string |  no  |  |
 | name | string |  no  |  |
 | store_ids | [number]? |  yes  |  |
 | validity | [ValidityObject](#ValidityObject) |  no  |  |
 | value | number? |  yes  |  |
 | zone_ids | [string]? |  yes  |  |
 

---

#### [DiscountMeta](#DiscountMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hours | number? |  yes  | The time in hours before the discount ends when the countdown timer should start. |
 | minutes | number? |  yes  | The time in minutes before the discount ends when the countdown timer should start. |
 | timer | boolean |  no  | Determines whether the discount countdown is visible or not. |
 

---

#### [DownloadFileJob](#DownloadFileJob)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_ids | [number]? |  yes  |  |
 | store_ids | [number]? |  yes  |  |
 

---

#### [FileJobBody](#FileJobBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_ids | [string]? |  yes  |  |
 | brand_ids | [number]? |  yes  |  |
 | company_id | number? |  yes  |  |
 | created_by | [UserDetails](#UserDetails)? |  yes  |  |
 | created_on | string? |  yes  |  |
 | discount_level | string? |  yes  |  |
 | discount_meta | [DiscountMeta](#DiscountMeta)? |  yes  |  |
 | discount_type | string? |  yes  |  |
 | extension_ids | [string]? |  yes  |  |
 | file_path | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | job_type | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | modified_by | [UserDetails](#UserDetails)? |  yes  |  |
 | modified_on | string? |  yes  |  |
 | name | string? |  yes  |  |
 | store_ids | [number]? |  yes  |  |
 | validity | [ValidityObject](#ValidityObject)? |  yes  |  |
 | value | number? |  yes  |  |
 | zone_ids | [string]? |  yes  |  |
 

---

#### [FileJobRequest](#FileJobRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_ids | [string]? |  yes  |  |
 | brand_ids | [number]? |  yes  |  |
 | company_id | number |  no  |  |
 | discount_level | string? |  yes  |  |
 | discount_type | string? |  yes  |  |
 | file_path | string? |  yes  |  |
 | is_active | boolean |  no  |  |
 | job_type | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | name | string |  no  |  |
 | store_ids | [number]? |  yes  |  |
 | validity | [ValidityObject](#ValidityObject) |  no  |  |
 

---

#### [FileJobResponse](#FileJobResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  | A unique identifier to distinguish and identify a job. |
 | body | [FileJobBody](#FileJobBody)? |  yes  |  |
 | company_id | number |  no  |  |
 | created_by | [UserDetails](#UserDetails)? |  yes  |  |
 | created_on | string? |  yes  |  |
 | extension_ids | [string]? |  yes  |  |
 | failed | number |  no  |  |
 | file_path | string? |  yes  |  |
 | file_type | string? |  yes  |  |
 | modified_on | string? |  yes  |  |
 | progress | number? |  yes  |  |
 | stage | string |  no  |  |
 | total | number |  no  |  |
 | type | string |  no  |  |
 | zone_ids | [string]? |  yes  |  |
 

---

#### [ListOrCalender](#ListOrCalender)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[DiscountJob](#DiscountJob)] |  no  |  |
 | page | [Page](#Page) |  no  |  |
 

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
 | type | string |  no  |  |
 

---

#### [UserDetails](#UserDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_id | string |  no  |  |
 | username | string |  no  |  |
 

---

#### [ValidityObject](#ValidityObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end | string |  no  |  |
 | start | string |  no  |  |
 

---




