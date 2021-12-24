



##### [Back to Platform docs](./README.md)

## Discount Methods
Discount
* [getDiscounts](#getdiscounts)
* [createDiscount](#creatediscount)
* [getDiscount](#getdiscount)
* [updateDiscount](#updatediscount)
* [fetchDiscountJobs](#fetchdiscountjobs)
* [getDiscountDetails](#getdiscountdetails)
* [validateDiscountFile](#validatediscountfile)
* [downloadDiscountFile](#downloaddiscountfile)
* [getValidationJob](#getvalidationjob)
* [cancelValidationJob](#cancelvalidationjob)
* [getDownloadJob](#getdownloadjob)
* [cancelDownloadJob](#canceldownloadjob)



## Methods with example and description


### getDiscounts
Fetch discount list.



```javascript
// Promise
const promise = client.discount.getDiscounts({  view : value,
 q : value,
 pageNo : value,
 pageSize : value,
 archived : value,
 month : value,
 year : value,
 type : value,
 appIds : value });

// Async/Await
const data = await client.discount.getDiscounts({  view : value,
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


### createDiscount
Create Discount.



```javascript
// Promise
const promise = client.discount.createDiscount({  body : value });

// Async/Await
const data = await client.discount.createDiscount({  body : value });
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


### getDiscount
Fetch discount.



```javascript
// Promise
const promise = client.discount.getDiscount({  id : value });

// Async/Await
const data = await client.discount.getDiscount({  id : value });
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


### updateDiscount
Create Discount.



```javascript
// Promise
const promise = client.discount.updateDiscount({  id : value,
 body : value });

// Async/Await
const data = await client.discount.updateDiscount({  id : value,
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


### fetchDiscountJobs
Fetch Discount Jobs.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").discount.fetchDiscountJobs();

// Async/Await
const data = await client.application("<APPLICATION_ID>").discount.fetchDiscountJobs();
```






Fetch Discount Jobs.

*Returned Response:*




[ListOrCalender](#ListOrCalender)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getDiscountDetails
Get Discounts.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").discount.getDiscountDetails({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").discount.getDiscountDetails({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [InternalDiscountQuery](#InternalDiscountQuery) | yes | Request body |


Get Discounts.

*Returned Response:*




[DiscountList](#DiscountList)

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
const promise = client.discount.validateDiscountFile({  body : value,
 discount : value });

// Async/Await
const data = await client.discount.validateDiscountFile({  body : value,
 discount : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| discount | string | no | discount |  
| body | [DiscountJob](#DiscountJob) | yes | Request body |


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


### downloadDiscountFile
Validate File.



```javascript
// Promise
const promise = client.discount.downloadDiscountFile({  type : value,
 body : value });

// Async/Await
const data = await client.discount.downloadDiscountFile({  type : value,
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


### getValidationJob
Validate File Job.



```javascript
// Promise
const promise = client.discount.getValidationJob({  id : value });

// Async/Await
const data = await client.discount.getValidationJob({  id : value });
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


### cancelValidationJob
Cancel Validation Job.



```javascript
// Promise
const promise = client.discount.cancelValidationJob({  id : value });

// Async/Await
const data = await client.discount.cancelValidationJob({  id : value });
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


### getDownloadJob
Download File Job.



```javascript
// Promise
const promise = client.discount.getDownloadJob({  id : value });

// Async/Await
const data = await client.discount.getDownloadJob({  id : value });
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


### cancelDownloadJob
Cancel Download Job.



```javascript
// Promise
const promise = client.discount.cancelDownloadJob({  id : value });

// Async/Await
const data = await client.discount.cancelDownloadJob({  id : value });
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



### Schemas

 
 
 #### [ValidityObject](#ValidityObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | start | string |  yes  |  |
 | end | string |  yes  |  |

---


 
 
 #### [CreateUpdateDiscount](#CreateUpdateDiscount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | company_id | number |  yes  |  |
 | is_active | boolean |  yes  |  |
 | app_ids | [string] |  yes  |  |
 | extension_ids | [string] |  yes  |  |
 | job_type | string |  yes  |  |
 | discount_type | string |  yes  |  |
 | discount_level | string |  yes  |  |
 | value | number |  no  |  |
 | file_path | string |  no  |  |
 | brand_ids | [number] |  no  |  |
 | store_ids | [number] |  no  |  |
 | validity | [ValidityObject](#ValidityObject) |  yes  |  |

---


 
 
 #### [DiscountJob](#DiscountJob)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  yes  |  |
 | name | string |  yes  |  |
 | company_id | number |  yes  |  |
 | is_active | boolean |  yes  |  |
 | app_ids | [string] |  no  |  |
 | job_type | string |  no  |  |
 | discount_type | string |  no  |  |
 | discount_level | string |  no  |  |
 | value | number |  no  |  |
 | file_path | string |  no  |  |
 | brand_ids | [number] |  no  |  |
 | store_ids | [number] |  no  |  |
 | validity | [ValidityObject](#ValidityObject) |  yes  |  |
 | created_on | string |  yes  |  |
 | modified_on | string |  yes  |  |
 | created_by | [UserDetails](#UserDetails) |  yes  |  |
 | modified_by | [UserDetails](#UserDetails) |  yes  |  |
 | meta | string |  no  |  |

---


 
 
 #### [ListOrCalender](#ListOrCalender)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[DiscountJob](#DiscountJob)] |  yes  |  |
 | page | [Page](#Page) |  yes  |  |

---


 
 
 #### [InternalDiscountQuery](#InternalDiscountQuery)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | job_ids | [string] |  yes  |  |
 | item_ids | [number] |  no  |  |
 | seller_identifiers | [string] |  no  |  |
 | brand_ids | [number] |  no  |  |
 | store_ids | [number] |  no  |  |

---


 
 
 #### [DiscountValueObject](#DiscountValueObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | min_items | number |  yes  |  |
 | value | number |  yes  |  |

---


 
 
 #### [DiscountDetail](#DiscountDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  yes  |  |
 | job_id | string |  yes  |  |
 | company_id | number |  yes  |  |
 | app_ids | [string] |  no  |  |
 | discount_type | string |  no  |  |
 | discount | [[DiscountValueObject](#DiscountValueObject)] |  no  |  |
 | brand_ids | [number] |  no  |  |
 | store_ids | [number] |  no  |  |
 | item_id | number |  no  |  |
 | seller_identifier | string |  no  |  |
 | created_on | string |  yes  |  |
 | modified_on | string |  yes  |  |

---


 
 
 #### [DiscountList](#DiscountList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[DiscountDetail](#DiscountDetail)] |  yes  |  |
 | page | [Page](#Page) |  yes  |  |

---


 
 
 #### [FileJobResponse](#FileJobResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | stage | string |  yes  |  |
 | total | number |  yes  |  |
 | failed | number |  yes  |  |
 | company_id | number |  yes  |  |
 | body | string |  no  |  |
 | type | string |  yes  |  |
 | file_type | string |  yes  |  |

---


 
 
 #### [DownloadFileJob](#DownloadFileJob)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_ids | [number] |  no  |  |
 | store_ids | [number] |  no  |  |

---


 
 
 #### [CancelJobResponse](#CancelJobResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |

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


 
 
 #### [UserDetails](#UserDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | username | string |  yes  |  |
 | user_id | string |  yes  |  |

---


 
 
 #### [BadRequestObject](#BadRequestObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  |  |

---




