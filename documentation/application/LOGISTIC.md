



##### [Back to Application docs](./README.md)

## Logistic Methods
Handles Platform websites OMS
* [getTatProduct](#gettatproduct)
* [getPincodeCity](#getpincodecity)



## Methods with example and description


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



### Schemas

 
 
 #### [GetPincodeCityResponse](#GetPincodeCityResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | request_uuid | string |  yes  |  |
 | stormbreaker_uuid | string |  yes  |  |
 | success | boolean |  yes  |  |
 | data | [[LogisticPincodeData](#LogisticPincodeData)] |  yes  |  |

---


 
 
 #### [LogisticPincodeData](#LogisticPincodeData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | meta | [LogisticMeta](#LogisticMeta) |  no  |  |
 | parents | [[LogisticParents](#LogisticParents)] |  no  |  |
 | sub_type | string |  no  |  |
 | name | string |  no  |  |
 | error | [LogisticError](#LogisticError) |  no  |  |
 | uid | string |  no  |  |
 | display_name | string |  no  |  |

---


 
 
 #### [LogisticMeta](#LogisticMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | zone | string |  no  |  |
 | deliverables | [any] |  no  |  |

---


 
 
 #### [LogisticParents](#LogisticParents)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sub_type | string |  no  |  |
 | name | string |  no  |  |
 | display_name | string |  no  |  |
 | uid | string |  no  |  |

---


 
 
 #### [LogisticError](#LogisticError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | value | string |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [GetTatProductReqBody](#GetTatProductReqBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | location_details | [[LocationDetailsReq](#LocationDetailsReq)] |  yes  |  |
 | to_pincode | string |  yes  |  |
 | action | string |  no  |  |

---


 
 
 #### [LocationDetailsReq](#LocationDetailsReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | from_pincode | string |  no  |  |
 | articles | [[TatReqProductArticles](#TatReqProductArticles)] |  no  |  |
 | fulfillment_id | number |  no  |  |

---


 
 
 #### [TatReqProductArticles](#TatReqProductArticles)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [LogisticRequestCategory](#LogisticRequestCategory) |  no  |  |

---


 
 
 #### [LogisticRequestCategory](#LogisticRequestCategory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | level | string |  no  |  |

---


 
 
 #### [GetTatProductResponse](#GetTatProductResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | location_details | [[LocationDetails](#LocationDetails)] |  yes  |  |
 | request_uuid | string |  yes  |  |
 | error | string |  yes  |  |
 | to_city | string |  yes  |  |
 | source | string |  yes  |  |
 | to_pincode | string |  yes  |  |
 | action | string |  yes  |  |
 | stormbreaker_uuid | string |  yes  |  |
 | success | boolean |  yes  |  |
 | identifier | string |  yes  |  |
 | journey | string |  yes  |  |

---


 
 
 #### [LocationDetails](#LocationDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | from_pincode | string |  no  |  |
 | articles | [[TatProductArticles](#TatProductArticles)] |  no  |  |
 | fulfillment_id | number |  no  |  |

---


 
 
 #### [TatProductArticles](#TatProductArticles)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string |  no  |  |
 | category | [LogisticResponseCategory](#LogisticResponseCategory) |  no  |  |
 | promise | [LogisticPromise](#LogisticPromise) |  no  |  |

---


 
 
 #### [LogisticResponseCategory](#LogisticResponseCategory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | level | string |  no  |  |

---


 
 
 #### [LogisticPromise](#LogisticPromise)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | timestamp | [LogisticTimestamp](#LogisticTimestamp) |  no  |  |
 | formatted | [Formatted](#Formatted) |  no  |  |

---


 
 
 #### [LogisticTimestamp](#LogisticTimestamp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | min | number |  no  |  |
 | max | number |  no  |  |

---


 
 
 #### [Formatted](#Formatted)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | min | string |  no  |  |
 | max | string |  no  |  |

---


 
 
 #### [ApefaceApiError](#ApefaceApiError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---




