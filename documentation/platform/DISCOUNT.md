




##### [Back to Platform docs](./README.md)

## Discount Methods
Discount

* [cancelDownloadJob](#canceldownloadjob)
* [cancelValidationJob](#cancelvalidationjob)
* [createDiscount](#creatediscount)
* [downloadDiscountFile](#downloaddiscountfile)
* [getDiscount](#getdiscount)
* [getDiscounts](#getdiscounts)
* [getDownloadJob](#getdownloadjob)
* [getValidationJob](#getvalidationjob)
* [updateDiscount](#updatediscount)
* [upsertDiscountItems](#upsertdiscountitems)
* [validateDiscountFile](#validatediscountfile)



## Methods with example and description




### cancelDownloadJob
Cancel Download Job.



```javascript
// Promise
const promise = platformClient.discount.cancelDownloadJob({  id : value });

// Async/Await
const data = await platformClient.discount.cancelDownloadJob({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | id |  



Cancel Download Job.

*Returned Response:*




[CancelJobResponse](#CancelJobResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### cancelValidationJob
Cancel Validation Job.



```javascript
// Promise
const promise = platformClient.discount.cancelValidationJob({  id : value });

// Async/Await
const data = await platformClient.discount.cancelValidationJob({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | id |  



Cancel Validation Job.

*Returned Response:*




[CancelJobResponse](#CancelJobResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createDiscount
Create Discount.



```javascript
// Promise
const promise = platformClient.discount.createDiscount({  body : value });

// Async/Await
const data = await platformClient.discount.createDiscount({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateUpdateDiscount](#CreateUpdateDiscount) | yes | Request body |


Create Discount.

*Returned Response:*




[DiscountJob](#DiscountJob)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### downloadDiscountFile
Validate File.



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


Validate File.

*Returned Response:*




[FileJobResponse](#FileJobResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getDiscount
Fetch discount.



```javascript
// Promise
const promise = platformClient.discount.getDiscount({  id : value });

// Async/Await
const data = await platformClient.discount.getDiscount({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | unique id. |  



Fetch discount.

*Returned Response:*




[DiscountJob](#DiscountJob)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getDiscounts
Fetch discount list.



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



Fetch discount list.

*Returned Response:*




[ListOrCalender](#ListOrCalender)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getDownloadJob
Download File Job.



```javascript
// Promise
const promise = platformClient.discount.getDownloadJob({  id : value });

// Async/Await
const data = await platformClient.discount.getDownloadJob({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | id |  



Download File Job.

*Returned Response:*




[FileJobResponse](#FileJobResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getValidationJob
Validate File Job.



```javascript
// Promise
const promise = platformClient.discount.getValidationJob({  id : value });

// Async/Await
const data = await platformClient.discount.getValidationJob({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | id |  



Validate File Job.

*Returned Response:*




[FileJobResponse](#FileJobResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateDiscount
Create Discount.



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


Create Discount.

*Returned Response:*




[DiscountJob](#DiscountJob)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### upsertDiscountItems
Create custom discount from bulk.



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


Create custom discounts through API.

*Returned Response:*




[Object](#Object)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### validateDiscountFile
Validate File.



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


Validate File.

*Returned Response:*




[FileJobResponse](#FileJobResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas


#### [BadRequestObject](#BadRequestObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 

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
 | discount_type | string |  no  |  |
 | extension_ids | [string] |  no  |  |
 | file_path | string? |  yes  |  |
 | is_active | boolean |  no  |  |
 | job_type | string |  no  |  |
 | name | string |  no  |  |
 | store_ids | [number]? |  yes  |  |
 | validity | [ValidityObject](#ValidityObject) |  no  |  |
 | value | number? |  yes  |  |
 

---

#### [DiscountItems](#DiscountItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_uid | number? |  yes  |  |
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
 

---

#### [DownloadFileJob](#DownloadFileJob)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_ids | [number]? |  yes  |  |
 | store_ids | [number]? |  yes  |  |
 

---

#### [FileJobRequest](#FileJobRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_ids | [string]? |  yes  |  |
 | brand_ids | [number]? |  yes  |  |
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
 | body | string? |  yes  |  |
 | company_id | number |  no  |  |
 | failed | number |  no  |  |
 | file_type | string |  no  |  |
 | stage | string |  no  |  |
 | total | number |  no  |  |
 | type | string |  no  |  |
 

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
 | type | number |  no  |  |
 

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




