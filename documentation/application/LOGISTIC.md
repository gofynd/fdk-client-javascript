




##### [Back to Application docs](./README.md)

## Logistic Methods
Handles Platform websites OMS

* [getPincodeCity](#getpincodecity)
* [getTatProduct](#gettatproduct)



## Methods with example and description




### getPincodeCity
Get city from PIN Code



```javascript
// Promise
const promise = applicationClient.logistic.getPincodeCity({  pincode : value });

// Async/Await
const data = await applicationClient.logistic.getPincodeCity({  pincode : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| pincode | string | yes | The PIN Code of the area, e.g. 400059 |  



Use this API to retrieve a city by its PIN Code.

*Returned Response:*




[GetPincodeCityResponse](#GetPincodeCityResponse)

Success. Returns a JSON object containing the city name, state and country identified by its PIN Code. Check the example shown below or refer `GetPincodeCityResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getTatProduct
Get TAT of a product



```javascript
// Promise
const promise = applicationClient.logistic.getTatProduct({  body : value });

// Async/Await
const data = await applicationClient.logistic.getTatProduct({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GetTatProductReqBody](#GetTatProductReqBody) | yes | Request body |


Use this API to know the delivery turnaround time (TAT) by entering the product details along with the PIN Code of the location.

*Returned Response:*




[GetTatProductResponse](#GetTatProductResponse)

Success. Check the example shown below or refer `GetTatProductResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas


#### [ApefaceApiError](#ApefaceApiError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [Formatted](#Formatted)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | string? |  yes  |  |
 | min | string? |  yes  |  |
 

---

#### [GetPincodeCityResponse](#GetPincodeCityResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[LogisticPincodeData](#LogisticPincodeData)] |  no  |  |
 | request_uuid | string |  no  |  |
 | stormbreaker_uuid | string |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [GetTatProductReqBody](#GetTatProductReqBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string? |  yes  |  |
 | location_details | [[LocationDetailsReq](#LocationDetailsReq)] |  no  |  |
 | to_pincode | string |  no  |  |
 

---

#### [GetTatProductResponse](#GetTatProductResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  |  |
 | error | string |  no  |  |
 | identifier | string |  no  |  |
 | journey | string |  no  |  |
 | location_details | [[LocationDetails](#LocationDetails)] |  no  |  |
 | request_uuid | string |  no  |  |
 | source | string |  no  |  |
 | stormbreaker_uuid | string |  no  |  |
 | success | boolean |  no  |  |
 | to_city | string |  no  |  |
 | to_pincode | string |  no  |  |
 

---

#### [LocationDetails](#LocationDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[TatProductArticles](#TatProductArticles)]? |  yes  |  |
 | from_pincode | string? |  yes  |  |
 | fulfillment_id | number? |  yes  |  |
 

---

#### [LocationDetailsReq](#LocationDetailsReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[TatReqProductArticles](#TatReqProductArticles)]? |  yes  |  |
 | from_pincode | string? |  yes  |  |
 | fulfillment_id | number? |  yes  |  |
 

---

#### [LogisticError](#LogisticError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | type | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [LogisticMeta](#LogisticMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | deliverables | [any]? |  yes  |  |
 | zone | string? |  yes  |  |
 

---

#### [LogisticParents](#LogisticParents)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | name | string? |  yes  |  |
 | sub_type | string? |  yes  |  |
 | uid | string? |  yes  |  |
 

---

#### [LogisticPincodeData](#LogisticPincodeData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | error | [LogisticError](#LogisticError)? |  yes  |  |
 | meta | [LogisticMeta](#LogisticMeta)? |  yes  |  |
 | name | string? |  yes  |  |
 | parents | [[LogisticParents](#LogisticParents)]? |  yes  |  |
 | sub_type | string? |  yes  |  |
 | uid | string? |  yes  |  |
 

---

#### [LogisticPromise](#LogisticPromise)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | formatted | [Formatted](#Formatted)? |  yes  |  |
 | timestamp | [LogisticTimestamp](#LogisticTimestamp)? |  yes  |  |
 

---

#### [LogisticRequestCategory](#LogisticRequestCategory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number? |  yes  |  |
 | level | string? |  yes  |  |
 

---

#### [LogisticResponseCategory](#LogisticResponseCategory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number? |  yes  |  |
 | level | string? |  yes  |  |
 

---

#### [LogisticTimestamp](#LogisticTimestamp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | number? |  yes  |  |
 | min | number? |  yes  |  |
 

---

#### [TatProductArticles](#TatProductArticles)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [LogisticResponseCategory](#LogisticResponseCategory)? |  yes  |  |
 | error | string? |  yes  |  |
 | promise | [LogisticPromise](#LogisticPromise)? |  yes  |  |
 

---

#### [TatReqProductArticles](#TatReqProductArticles)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [LogisticRequestCategory](#LogisticRequestCategory)? |  yes  |  |
 

---




