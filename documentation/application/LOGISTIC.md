




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
const promise = logistic.getPincodeCity({  pincode : value });

// Async/Await
const data = await logistic.getPincodeCity({  pincode : value });
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
const promise = logistic.getTatProduct({  body : value });

// Async/Await
const data = await logistic.getTatProduct({  body : value });
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
 | message | string |  no  |  |
 

---

#### [Formatted](#Formatted)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | string |  no  |  |
 | min | string |  no  |  |
 

---

#### [GetPincodeCityResponse](#GetPincodeCityResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[LogisticPincodeData](#LogisticPincodeData)] |  yes  |  |
 | request_uuid | string |  yes  |  |
 | stormbreaker_uuid | string |  yes  |  |
 | success | boolean |  yes  |  |
 

---

#### [GetTatProductReqBody](#GetTatProductReqBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  |  |
 | location_details | [[LocationDetailsReq](#LocationDetailsReq)] |  yes  |  |
 | to_pincode | string |  yes  |  |
 

---

#### [GetTatProductResponse](#GetTatProductResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  yes  |  |
 | error | string |  yes  |  |
 | identifier | string |  yes  |  |
 | journey | string |  yes  |  |
 | location_details | [[LocationDetails](#LocationDetails)] |  yes  |  |
 | request_uuid | string |  yes  |  |
 | source | string |  yes  |  |
 | stormbreaker_uuid | string |  yes  |  |
 | success | boolean |  yes  |  |
 | to_city | string |  yes  |  |
 | to_pincode | string |  yes  |  |
 

---

#### [LocationDetails](#LocationDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[TatProductArticles](#TatProductArticles)] |  no  |  |
 | from_pincode | string |  no  |  |
 | fulfillment_id | number |  no  |  |
 

---

#### [LocationDetailsReq](#LocationDetailsReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[TatReqProductArticles](#TatReqProductArticles)] |  no  |  |
 | from_pincode | string |  no  |  |
 | fulfillment_id | number |  no  |  |
 

---

#### [LogisticError](#LogisticError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | type | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [LogisticMeta](#LogisticMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | deliverables | [any] |  no  |  |
 | zone | string |  no  |  |
 

---

#### [LogisticParents](#LogisticParents)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string |  no  |  |
 | name | string |  no  |  |
 | sub_type | string |  no  |  |
 | uid | string |  no  |  |
 

---

#### [LogisticPincodeData](#LogisticPincodeData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string |  no  |  |
 | error | [LogisticError](#LogisticError) |  no  |  |
 | meta | [LogisticMeta](#LogisticMeta) |  no  |  |
 | name | string |  no  |  |
 | parents | [[LogisticParents](#LogisticParents)] |  no  |  |
 | sub_type | string |  no  |  |
 | uid | string |  no  |  |
 

---

#### [LogisticPromise](#LogisticPromise)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | formatted | [Formatted](#Formatted) |  no  |  |
 | timestamp | [LogisticTimestamp](#LogisticTimestamp) |  no  |  |
 

---

#### [LogisticRequestCategory](#LogisticRequestCategory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | level | string |  no  |  |
 

---

#### [LogisticResponseCategory](#LogisticResponseCategory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | level | string |  no  |  |
 

---

#### [LogisticTimestamp](#LogisticTimestamp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | number |  no  |  |
 | min | number |  no  |  |
 

---

#### [TatProductArticles](#TatProductArticles)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [LogisticResponseCategory](#LogisticResponseCategory) |  no  |  |
 | error | string |  no  |  |
 | promise | [LogisticPromise](#LogisticPromise) |  no  |  |
 

---

#### [TatReqProductArticles](#TatReqProductArticles)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [LogisticRequestCategory](#LogisticRequestCategory) |  no  |  |
 

---




