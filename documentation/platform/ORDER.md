




##### [Back to Platform docs](./README.md)

## Order Methods
Handles Platform websites OMS

* [activityStatus](#activitystatus)
* [checkRefund](#checkrefund)
* [failedOrders](#failedorders)
* [getOrderDetails](#getorderdetails)
* [getOrderDetails](#getorderdetails)
* [getOrderLanesCountByCompanyId](#getorderlanescountbycompanyid)
* [getOrdersByApplicationId](#getordersbyapplicationid)
* [getOrdersByCompanyId](#getordersbycompanyid)
* [getPicklistOrdersByCompanyId](#getpicklistordersbycompanyid)
* [getPlatformShipmentReasons](#getplatformshipmentreasons)
* [getShipmentAddress](#getshipmentaddress)
* [getShipmentTrackDetails](#getshipmenttrackdetails)
* [reprocessOrder](#reprocessorder)
* [shipmentBagsCanBreak](#shipmentbagscanbreak)
* [shipmentStatusUpdate](#shipmentstatusupdate)
* [storeProcessShipmentUpdate](#storeprocessshipmentupdate)
* [trackOrder](#trackorder)
* [trackShipmentPlatform](#trackshipmentplatform)
* [updateShipment](#updateshipment)
* [updateShipmentAddress](#updateshipmentaddress)



## Methods with example and description




### activityStatus
Get Activity Status



```javascript
// Promise
const promise = client.order.activityStatus({  bagId : value });

// Async/Await
const data = await client.order.activityStatus({  bagId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| bagId | string | yes | Bag Id |  



Get Activity Status

*Returned Response:*




[GetActivityStatus](#GetActivityStatus)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### checkRefund
Check Refund is available or not



```javascript
// Promise
const promise = client.order.checkRefund({  shipmentId : value });

// Async/Await
const data = await client.order.checkRefund({  shipmentId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes | Shipment Id |  



Check Refund is available or not

*Returned Response:*




[Object](#Object)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### failedOrders
Get all failed orders application wise



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").order.failedOrders();

// Async/Await
const data = await client.application("<APPLICATION_ID>").order.failedOrders();
```






Failed Orders

*Returned Response:*




[FailedOrders](#FailedOrders)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getOrderDetails
Get Order Details for company based on Company Id and Order Id



```javascript
// Promise
const promise = client.order.getOrderDetails({  orderId : value,
 next : value,
 previous : value });

// Async/Await
const data = await client.order.getOrderDetails({  orderId : value,
 next : value,
 previous : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| orderId | string | no | Order Id |    
| next | string | no | Next |    
| previous | string | no | Previous |  



Get Orders

*Returned Response:*




[OrderDetails](#OrderDetails)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getOrderDetails
Get Order Details for company based on Company Id and Order Id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").order.getOrderDetails({  orderId : value,
 next : value,
 previous : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").order.getOrderDetails({  orderId : value,
 next : value,
 previous : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| orderId | string | no | Order Id |    
| next | string | no | Next |    
| previous | string | no | Previous |  



Get Orders

*Returned Response:*




[OrderDetails](#OrderDetails)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getOrderLanesCountByCompanyId
Get Order Lanes Count for company based on Company Id



```javascript
// Promise
const promise = client.order.getOrderLanesCountByCompanyId({  pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value,
 q : value,
 stage : value,
 salesChannels : value,
 orderId : value,
 stores : value,
 status : value,
 shortenUrls : value,
 filterType : value });

// Async/Await
const data = await client.order.getOrderLanesCountByCompanyId({  pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value,
 q : value,
 stage : value,
 salesChannels : value,
 orderId : value,
 stores : value,
 status : value,
 shortenUrls : value,
 filterType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | string | no | Current page number |    
| pageSize | string | no | Page limit |    
| fromDate | string | no | From Date |    
| toDate | string | no | To Date |    
| q | string | no | Keyword for Search |    
| stage | string | no | Specefic Order Stage |    
| salesChannels | string | no | Selected Sales Channel |    
| orderId | string | no | Order Id |    
| stores | string | no | Selected Stores |    
| status | string | no | Status of order |    
| shortenUrls | boolean | no | Shorten URL option |    
| filterType | string | no | Filters |  



Get Orders Seperate Lane Count

*Returned Response:*




[OrderLanesCount](#OrderLanesCount)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getOrdersByApplicationId
Get Orders for company based on Company Id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").order.getOrdersByApplicationId({  pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value,
 q : value,
 stage : value,
 salesChannels : value,
 orderId : value,
 stores : value,
 status : value,
 dp : value,
 shortenUrls : value,
 filterType : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").order.getOrdersByApplicationId({  pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value,
 q : value,
 stage : value,
 salesChannels : value,
 orderId : value,
 stores : value,
 status : value,
 dp : value,
 shortenUrls : value,
 filterType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | string | no | Current page number |    
| pageSize | string | no | Page limit |    
| fromDate | string | no | From Date |    
| toDate | string | no | To Date |    
| q | string | no | Keyword for Search |    
| stage | string | no | Specefic Order Stage |    
| salesChannels | string | no | Selected Sales Channel |    
| orderId | string | no | Order Id |    
| stores | string | no | Selected Stores |    
| status | string | no | Status of order |    
| dp | string | no | Delivery Partners |    
| shortenUrls | boolean | no | Shorten URL option |    
| filterType | string | no | Filters |  



Get Orders at Application Level

*Returned Response:*




[OrderListing](#OrderListing)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getOrdersByCompanyId
Get Orders for company based on Company Id



```javascript
// Promise
const promise = client.order.getOrdersByCompanyId({  pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value,
 isPrioritySort : value,
 lockStatus : value,
 q : value,
 stage : value,
 salesChannels : value,
 orderId : value,
 stores : value,
 deploymentStores : value,
 status : value,
 dp : value,
 shortenUrls : value,
 filterType : value });

// Async/Await
const data = await client.order.getOrdersByCompanyId({  pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value,
 isPrioritySort : value,
 lockStatus : value,
 q : value,
 stage : value,
 salesChannels : value,
 orderId : value,
 stores : value,
 deploymentStores : value,
 status : value,
 dp : value,
 shortenUrls : value,
 filterType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | string | no | Current page number |    
| pageSize | string | no | Page limit |    
| fromDate | string | no | From Date |    
| toDate | string | no | To Date |    
| isPrioritySort | boolean | no | Sorting Order |    
| lockStatus | boolean | no | Hide Lock Status |    
| q | string | no | Keyword for Search |    
| stage | string | no | Specefic Order Stage |    
| salesChannels | string | no | Selected Sales Channel |    
| orderId | string | no | Order Id |    
| stores | string | no | Selected Stores |    
| deploymentStores | string | no | Selected Deployment Stores |    
| status | string | no | Status of order |    
| dp | string | no | Delivery Partners |    
| shortenUrls | boolean | no | Shorten URL option |    
| filterType | string | no | Filters |  



Get Orders

*Returned Response:*




[OrderListing](#OrderListing)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getPicklistOrdersByCompanyId
Get Orders for company based on Company Id



```javascript
// Promise
const promise = client.order.getPicklistOrdersByCompanyId({  pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value,
 q : value,
 stage : value,
 salesChannels : value,
 orderId : value,
 stores : value,
 status : value,
 shortenUrls : value,
 filterType : value });

// Async/Await
const data = await client.order.getPicklistOrdersByCompanyId({  pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value,
 q : value,
 stage : value,
 salesChannels : value,
 orderId : value,
 stores : value,
 status : value,
 shortenUrls : value,
 filterType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | string | no | Current page number |    
| pageSize | string | no | Page limit |    
| fromDate | string | no | From Date |    
| toDate | string | no | To Date |    
| q | string | no | Keyword for Search |    
| stage | string | no | Specefic Order Stage |    
| salesChannels | string | no | Selected Sales Channel |    
| orderId | string | no | Order Id |    
| stores | string | no | Selected Stores |    
| status | string | no | Status of order |    
| shortenUrls | boolean | no | Shorten URL option |    
| filterType | string | no | Filters |  



Get Orders

*Returned Response:*




[OrderPicklistListing](#OrderPicklistListing)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getPlatformShipmentReasons
Use this API to retrieve the issues that led to the cancellation of bags within a shipment.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").order.getPlatformShipmentReasons({  action : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").order.getPlatformShipmentReasons({  action : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| action | string | yes | Action |  



Get reasons behind full or partial cancellation of a shipment

*Returned Response:*




[ShipmentReasonsResponse](#ShipmentReasonsResponse)

Success. Check the example shown below or refer `ShipmentReasonsResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getShipmentAddress
Use this API to get address of a shipment using its shipment ID and Address Category.



```javascript
// Promise
const promise = client.order.getShipmentAddress({  shipmentId : value,
 addressCategory : value });

// Async/Await
const data = await client.order.getShipmentAddress({  shipmentId : value,
 addressCategory : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes | ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID. |   
| addressCategory | string | yes | Category of the address it falls into(billing or delivery). |  



Get Shipment Address

*Returned Response:*




[GetShipmentAddressResponse](#GetShipmentAddressResponse)

Success. Check the example shown below or refer `GetShipmentAddressResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getShipmentTrackDetails
Use this API to track a shipment using its shipment ID.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").order.getShipmentTrackDetails({  orderId : value,
 shipmentId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").order.getShipmentTrackDetails({  orderId : value,
 shipmentId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes | ID of the order. |   
| shipmentId | string | yes | ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID. |  



Track shipment

*Returned Response:*




[ShipmentTrackResponse](#ShipmentTrackResponse)

Success. Check the example shown below or refer `ShipmentTrackResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### reprocessOrder
Reprocess order by order id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").order.reprocessOrder({  orderId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").order.reprocessOrder({  orderId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes | Order Id |  



Order Reprocess

*Returned Response:*




[UpdateOrderReprocessResponse](#UpdateOrderReprocessResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### shipmentBagsCanBreak
Decides if Shipment bags can break



```javascript
// Promise
const promise = client.order.shipmentBagsCanBreak({  body : value });

// Async/Await
const data = await client.order.shipmentBagsCanBreak({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CanBreakRequestBody](#CanBreakRequestBody) | yes | Request body |


Decides if Shipment bags can break

*Returned Response:*




[CanBreakResponse](#CanBreakResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### shipmentStatusUpdate
Update status of Shipment



```javascript
// Promise
const promise = client.order.shipmentStatusUpdate({  body : value });

// Async/Await
const data = await client.order.shipmentStatusUpdate({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UpdateShipmentStatusBody](#UpdateShipmentStatusBody) | yes | Request body |


Update Shipment Status

*Returned Response:*




[UpdateShipmentStatusResponse](#UpdateShipmentStatusResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### storeProcessShipmentUpdate
Update Store Process-Shipment



```javascript
// Promise
const promise = client.order.storeProcessShipmentUpdate({  body : value });

// Async/Await
const data = await client.order.storeProcessShipmentUpdate({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UpdateProcessShipmenstRequestBody](#UpdateProcessShipmenstRequestBody) | yes | Request body |


Update Store Process-Shipment

*Returned Response:*




[UpdateProcessShipmenstRequestResponse](#UpdateProcessShipmenstRequestResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### trackOrder
Track Order by order id, for application based on application Id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").order.trackOrder({  orderId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").order.trackOrder({  orderId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes | Order Id |  



Order Track

*Returned Response:*




[PlatformOrderTrack](#PlatformOrderTrack)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### trackShipmentPlatform
Track Shipment by shipment id, for application based on application Id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").order.trackShipmentPlatform({  shipmentId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").order.trackShipmentPlatform({  shipmentId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes | Shipment Id |  



Shipment Track

*Returned Response:*




[PlatformShipmentTrack](#PlatformShipmentTrack)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateShipment
Use this API to update the shipment using its shipment ID.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").order.updateShipment({  shipmentId : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").order.updateShipment({  shipmentId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes | ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID. |  
| body | [ShipmentUpdateRequest](#ShipmentUpdateRequest) | yes | Request body |


Update the shipment

*Returned Response:*




[ShipmentUpdateResponse](#ShipmentUpdateResponse)

Success. Check the example shown below or refer `ShipmentUpdateRequest` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateShipmentAddress
Use this API to update address of a shipment using its shipment ID and Address Category.



```javascript
// Promise
const promise = client.order.updateShipmentAddress({  shipmentId : value,
 addressCategory : value,
 body : value });

// Async/Await
const data = await client.order.updateShipmentAddress({  shipmentId : value,
 addressCategory : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes | ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID. |   
| addressCategory | string | yes | Category of the address it falls into(billing or delivery). |  
| body | [UpdateShipmentAddressRequest](#UpdateShipmentAddressRequest) | yes | Request body |


Update Shipment Address

*Returned Response:*




[UpdateShipmentAddressResponse](#UpdateShipmentAddressResponse)

Success. Check the example shown below or refer `UpdateShipmentAddressResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas


#### [ActivityHistory](#ActivityHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || createdat | string |  no  |  || message | string |  no  |  || type | string |  no  |  || user | string |  no  |  |

---

#### [AdditionalContactDetails](#AdditionalContactDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || number | [string] |  no  |  |

---

#### [ApefaceApiError](#ApefaceApiError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  |

---

#### [AppliedFilters](#AppliedFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || deployment_stores | [string] |  no  |  || dp | [number] |  no  |  || from_date | string |  no  |  || stage | string |  no  |  || stores | [string] |  no  |  || to_date | string |  no  |  |

---

#### [ArticleAssignment](#ArticleAssignment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || level | string |  no  |  || strategy | string |  no  |  |

---

#### [ArticleBrand](#ArticleBrand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || id | number |  no  |  || name | string |  no  |  |

---

#### [ArticleIdentifiers](#ArticleIdentifiers)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || ean | string |  no  |  |

---

#### [ArticleMeta](#ArticleMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || service | string |  no  |  |

---

#### [ArticlePrice](#ArticlePrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || currency | string |  no  |  || effective | number |  no  |  || marked | number |  no  |  || transfer | number |  no  |  |

---

#### [BagArticle](#BagArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || child_details | string |  no  |  || code | string |  no  |  || esp_modified | boolean |  no  |  || identifiers | [ArticleIdentifiers](#ArticleIdentifiers) |  no  |  || is_set | boolean |  no  |  || return_config | [BagArticleReturnConfig](#BagArticleReturnConfig) |  no  |  || seller_identifier | string |  no  |  || set | [Set](#Set) |  no  |  || size | string |  no  |  || uid | string |  no  |  |

---

#### [BagArticleReturnConfig](#BagArticleReturnConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || returnable | boolean |  no  |  || time | number |  no  |  || unit | string |  no  |  |

---

#### [BagBreakupValues](#BagBreakupValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display | string |  no  |  || name | string |  no  |  || value | number |  no  |  |

---

#### [BagCurrentStatus](#BagCurrentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || bag_state_mapper | [BagStateMapper](#BagStateMapper) |  no  |  || state_type | string |  no  |  || status | string |  no  |  || updated_at | string |  no  |  |

---

#### [BagCurrStatus](#BagCurrStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || can_be_cancelled | boolean |  no  |  || enable_tracking | boolean |  no  |  || is_active | boolean |  no  |  || is_customer_return_allowed | boolean |  no  |  || is_returnable | boolean |  no  |  |

---

#### [BagFinancialBreakup](#BagFinancialBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || added_to_fynd_cash | boolean |  no  |  || amount_paid | number |  no  |  || amount_paid_roundoff | number |  no  |  || brand_calculated_amount | number |  no  |  || cashback | number |  no  |  || cashback_applied | number |  no  |  || cod_charges | number |  no  |  || coupon_effective_discount | number |  no  |  || coupon_value | number |  no  |  || delivery_charge | number |  no  |  || discount | number |  no  |  || fynd_credits | number |  no  |  || gst_fee | string |  no  |  || gst_tag | string |  no  |  || gst_tax_percentage | number |  no  |  || hsn_code | string |  no  |  || identifiers | [Identifiers](#Identifiers) |  no  |  || item_name | string |  no  |  || price_effective | number |  no  |  || price_marked | number |  no  |  || promotion_effective_discount | number |  no  |  || refund_amount | number |  no  |  || refund_credit | number |  no  |  || size | string |  no  |  || total_units | number |  no  |  || transfer_price | number |  no  |  || value_of_good | number |  no  |  |

---

#### [BagItem](#BagItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || attributes | [BagItemAttributes](#BagItemAttributes) |  no  |  || brand | string |  no  |  || brand_id | number |  no  |  || can_cancel | boolean |  no  |  || can_return | boolean |  no  |  || code | string |  no  |  || id | number |  no  |  || image | [string] |  no  |  || l1_category | [string] |  no  |  || l2_category | [string] |  no  |  || l3_category | number |  no  |  || l3_category_name | string |  no  |  || last_updated_at | string |  no  |  || name | string |  no  |  || size | string |  no  |  || slug_key | string |  no  |  |

---

#### [BagItemAttributes](#BagItemAttributes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || brand_name | string |  no  |  || country_of_origin | string |  no  |  || item_code | string |  no  |  |

---

#### [BagPrices](#BagPrices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount_paid | number |  no  |  || amount_paid_roundoff | number |  no  |  || cashback | number |  no  |  || cashback_applied | number |  no  |  || cod_charges | number |  no  |  || coupon_value | number |  no  |  || delivery_charge | number |  no  |  || discount | number |  no  |  || fynd_credits | number |  no  |  || price_effective | number |  no  |  || price_marked | number |  no  |  || refund_amount | number |  no  |  || refund_credit | number |  no  |  || value_of_good | number |  no  |  |

---

#### [Bags](#Bags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || id | number |  no  |  || item | [BagItem](#BagItem) |  no  |  |

---

#### [BagsDetails](#BagsDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || article | [BagArticle](#BagArticle) |  no  |  || bag_status | [BagStatus](#BagStatus) |  no  |  || breakup_values | [BagBreakupValues](#BagBreakupValues) |  no  |  || can_cancel | boolean |  no  |  || can_return | boolean |  no  |  || current_status | [BagCurrentStatus](#BagCurrentStatus) |  no  |  || financial_breakup | [[BagFinancialBreakup](#BagFinancialBreakup)] |  no  |  || gst_details | [GstDetails](#GstDetails) |  no  |  || id | number |  no  |  || item | [BagItem](#BagItem) |  no  |  || payment_methods | string |  no  |  || prices | [BagPrices](#BagPrices) |  no  |  || status | [BagCurrStatus](#BagCurrStatus) |  no  |  || update_time | number |  no  |  |

---

#### [BagStateMapper](#BagStateMapper)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || app_display_name | string |  no  |  || app_state_name | string |  no  |  || display_name | string |  no  |  || is_active | boolean |  no  |  || name | string |  no  |  |

---

#### [BagStatus](#BagStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || bag_state_mapper | [BagStatusBagStateMapper](#BagStatusBagStateMapper) |  no  |  || state_type | string |  no  |  || status | string |  no  |  || updated_at | string |  no  |  |

---

#### [BagStatusBagStateMapper](#BagStatusBagStateMapper)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || app_display_name | string |  no  |  || app_state_name | string |  no  |  || display_name | string |  no  |  || is_active | boolean |  no  |  || name | string |  no  |  |

---

#### [BillingAddress](#BillingAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address1 | string |  no  |  || address2 | string |  no  |  || city | string |  no  |  || company | string |  no  |  || country | string |  no  |  || country_code | string |  no  |  || first_name | string |  no  |  || last_name | string |  no  |  || latitude | number |  no  |  || longitude | number |  no  |  || name | string |  no  |  || phone | string |  no  |  || province | string |  no  |  || province_code | string |  no  |  || zip | string |  no  |  |

---

#### [CanBreakRequestBody](#CanBreakRequestBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || shipment_ids | [string] |  yes  |  |

---

#### [CanBreakResponse](#CanBreakResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || status | boolean |  yes  |  || valid_actions | string |  yes  |  |

---

#### [Channel](#Channel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || logo | string |  no  |  || name | string |  no  |  |

---

#### [Closing](#Closing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || hour | number |  no  |  || minute | number |  no  |  |

---

#### [Company](#Company)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || agreement_start_date | string |  no  |  || business_type | string |  no  |  || company_name | string |  no  |  || company_type | string |  no  |  || created_on | string |  no  |  || exchange_allowed | boolean |  no  |  || exchange_within_days | number |  no  |  || fynd_a_fit_available | boolean |  no  |  || id | number |  no  |  || meta | string |  no  |  || modified_on | string |  no  |  || pan_no | string |  no  |  || payment_procesing_charge | number |  no  |  || return_allowed | boolean |  no  |  || return_within_days | number |  no  |  |

---

#### [Customer](#Customer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || accepts_marketing | boolean |  no  |  || accepts_marketing_updated_at | string |  no  |  || admin_graphql_api_id | string |  no  |  || created_at | string |  no  |  || currency | string |  no  |  || default_address | [DefaultAddress](#DefaultAddress) |  no  |  || email | string |  no  |  || first_name | string |  no  |  || id | number |  no  |  || last_name | string |  no  |  || last_order_id | number |  no  |  || last_order_name | string |  no  |  || note | string |  no  |  || orders_count | number |  no  |  || phone | string |  no  |  || state | string |  no  |  || tags | string |  no  |  || tax_exempt | boolean |  no  |  || total_spent | string |  no  |  || updated_at | string |  no  |  || verified_email | boolean |  no  |  |

---

#### [Damaged](#Damaged)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || count | number |  no  |  || updated_at | string |  no  |  |

---

#### [DataShipmentAddress](#DataShipmentAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address | string |  no  |  || address_category | string |  no  |  || address_type | string |  no  |  || area | string |  no  |  || city | string |  no  |  || country | string |  no  |  || email | string |  no  |  || landmark | string |  no  |  || name | string |  no  |  || phone | string |  no  |  || pincode | string |  no  |  || state | string |  no  |  |

---

#### [DefaultAddress](#DefaultAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address1 | string |  no  |  || address2 | string |  no  |  || city | string |  no  |  || company | string |  no  |  || country | string |  no  |  || country_code | string |  no  |  || country_name | string |  no  |  || customer_id | number |  no  |  || first_name | string |  no  |  || id | number |  no  |  || is_default | boolean |  no  |  || last_name | string |  no  |  || name | string |  no  |  || phone | string |  no  |  || province | string |  no  |  || province_code | string |  no  |  || zip | string |  no  |  |

---

#### [Dimension](#Dimension)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || height | number |  no  |  || is_default | boolean |  no  |  || length | number |  no  |  || unit | string |  no  |  || width | number |  no  |  |

---

#### [Documents](#Documents)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || gst | [Gst](#Gst) |  no  |  |

---

#### [DpDetails](#DpDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || gst_tag | string |  no  |  |

---

#### [FailedOrders](#FailedOrders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || orders | [FailOrder](#FailOrder) |  yes  |  |

---

#### [FailOrder](#FailOrder)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || app_id | string |  no  |  || company_id | number |  no  |  || created_at | string |  no  |  || marketplace | string |  no  |  || marketplace_order | [MarketplaceOrder](#MarketplaceOrder) |  no  |  || marketplace_order_id | string |  no  |  || reason | string |  no  |  || updated_at | string |  no  |  |

---

#### [FailOrderDateMeta](#FailOrderDateMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || added_on_store | string |  no  |  || created_on | string |  no  |  || inventory_updated_on | string |  no  |  || modified_on | string |  no  |  |

---

#### [Filters](#Filters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || stage | [Stage](#Stage) |  no  |  || stages | [Stages](#Stages) |  no  |  |

---

#### [FulfillingStoreMeta](#FulfillingStoreMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || additional_contact_details | [AdditionalContactDetails](#AdditionalContactDetails) |  no  |  || allow_dp_assignment_from_fynd | boolean |  no  |  || display_name | string |  no  |  || documents | [Documents](#Documents) |  no  |  || gst_number | string |  no  |  || product_return_config | [ProductReturnConfig](#ProductReturnConfig) |  no  |  || stage | string |  no  |  || timing | [Timing](#Timing) |  no  |  |

---

#### [FulfillingStoreStoreAddressJson](#FulfillingStoreStoreAddressJson)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address1 | string |  no  |  || address2 | string |  no  |  || address_category | string |  no  |  || address_type | string |  no  |  || area | string |  no  |  || city | string |  no  |  || contact_person | string |  no  |  || country | string |  no  |  || created_at | string |  no  |  || email | string |  no  |  || landmark | string |  no  |  || latitude | number |  no  |  || longitude | number |  no  |  || phone | string |  no  |  || pincode | string |  no  |  || state | string |  no  |  || updated_at | string |  no  |  || version | string |  no  |  |

---

#### [GetActivityStatus](#GetActivityStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || activity_history | [ActivityHistory](#ActivityHistory) |  yes  |  |

---

#### [GetClickToCallResponse](#GetClickToCallResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  yes  |  |

---

#### [GetPingResponse](#GetPingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || ping | string |  yes  |  |

---

#### [GetShipmentAddressResponse](#GetShipmentAddressResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [DataShipmentAddress](#DataShipmentAddress) |  yes  |  || message | string |  yes  |  || success | boolean |  yes  |  |

---

#### [GetVoiceCallbackResponse](#GetVoiceCallbackResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  yes  |  |

---

#### [Gst](#Gst)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || legal_name | string |  no  |  || type | string |  no  |  || value | string |  no  |  || verified | boolean |  no  |  |

---

#### [GstDetails](#GstDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || brand_calculated_amount | number |  no  |  || gst_fee | string |  no  |  || gst_tag | string |  no  |  || gst_tax_percentage | number |  no  |  || hsn_code | string |  no  |  || is_default_hsn_code | boolean |  no  |  || value_of_good | number |  no  |  |

---

#### [Identifiers](#Identifiers)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || ean | string |  no  |  |

---

#### [ItemsPayments](#ItemsPayments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display_name | string |  no  |  || display_priority | number |  no  |  || id | number |  no  |  || is_active | boolean |  no  |  || logo | string |  no  |  || mode | string |  no  |  || payment_identifier | string |  no  |  || source | string |  no  |  || source_nickname | string |  no  |  |

---

#### [ItemTotal](#ItemTotal)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || all | number |  no  |  || new | number |  no  |  || processing | number |  no  |  || returns | number |  no  |  |

---

#### [LineItems](#LineItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || admin_graphql_api_id | string |  no  |  || article | [LineItemsArticle](#LineItemsArticle) |  no  |  || fulfillable_quantity | number |  no  |  || fulfillment_service | string |  no  |  || gift_card | boolean |  no  |  || grams | number |  no  |  || id | number |  no  |  || name | string |  no  |  || price | string |  no  |  || price_set | [PriceSet](#PriceSet) |  no  |  || product_exists | boolean |  no  |  || product_id | number |  no  |  || quantity | number |  no  |  || requires_shipping | boolean |  no  |  || sku | string |  no  |  || tax_lines | [TaxLines](#TaxLines) |  no  |  || taxable | boolean |  no  |  || title | string |  no  |  || total_discount | string |  no  |  || total_discount_set | [TotalDiscountSet](#TotalDiscountSet) |  no  |  || variant_id | number |  no  |  || variant_inventory_management | string |  no  |  || variant_title | string |  no  |  || vendor | string |  no  |  |

---

#### [LineItemsArticle](#LineItemsArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || brand | [ArticleBrand](#ArticleBrand) |  no  |  || company | [Company](#Company) |  no  |  || country_of_origin | string |  no  |  || date_meta | [FailOrderDateMeta](#FailOrderDateMeta) |  no  |  || dimension | [Dimension](#Dimension) |  no  |  || fragile | boolean |  no  |  || fynd_article_code | string |  no  |  || fynd_item_code | string |  no  |  || identifier | [LineItemsArticleIdentifier](#LineItemsArticleIdentifier) |  no  |  || is_active | boolean |  no  |  || is_set | boolean |  no  |  || item_id | number |  no  |  || manufacturer | [Manufacturer](#Manufacturer) |  no  |  || marketplace_identifiers | [MarketplaceIdentifiers](#MarketplaceIdentifiers) |  no  |  || meta | [ArticleMeta](#ArticleMeta) |  no  |  || old_article_uid | string |  no  |  || price | [ArticlePrice](#ArticlePrice) |  no  |  || quantities | [Quantities](#Quantities) |  no  |  || seller_identifier | string |  no  |  || size | string |  no  |  || store | [Store](#Store) |  no  |  || total_quantity | number |  no  |  || track_inventory | boolean |  no  |  || uid | string |  no  |  || weight | [Weight](#Weight) |  no  |  |

---

#### [LineItemsArticleIdentifier](#LineItemsArticleIdentifier)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || sku_code | string |  no  |  |

---

#### [Manufacturer](#Manufacturer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address | string |  no  |  || is_default | boolean |  no  |  || name | string |  no  |  |

---

#### [MarketplaceIdentifiers](#MarketplaceIdentifiers)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || tatacliq_luxury | [TatacliqLuxury](#TatacliqLuxury) |  no  |  |

---

#### [MarketplaceOrder](#MarketplaceOrder)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || admin_graphql_api_id | string |  no  |  || app_id | number |  no  |  || billing_address | [BillingAddress](#BillingAddress) |  no  |  || buyer_accepts_marketing | boolean |  no  |  || confirmed | boolean |  no  |  || contact_email | string |  no  |  || created_at | string |  no  |  || currency | string |  no  |  || customer | [Customer](#Customer) |  no  |  || email | string |  no  |  || financial_status | string |  no  |  || gateway | string |  no  |  || id | number |  no  |  || line_items | [LineItems](#LineItems) |  no  |  || name | string |  no  |  || note | string |  no  |  || number | number |  no  |  || order_number | number |  no  |  || order_status_url | string |  no  |  || payment_gateway_names | [any] |  no  |  || presentment_currency | string |  no  |  || processed_at | string |  no  |  || processing_method | string |  no  |  || shipping_address | [OrderShippingAddress](#OrderShippingAddress) |  no  |  || source_name | string |  no  |  || subtotal_price | string |  no  |  || subtotal_price_set | [SubtotalPriceSet](#SubtotalPriceSet) |  no  |  || tags | string |  no  |  || taxes_included | boolean |  no  |  || test | boolean |  no  |  || token | string |  no  |  || total_discounts | string |  no  |  || total_discounts_set | [TotalDiscountsSet](#TotalDiscountsSet) |  no  |  || total_line_items_price | string |  no  |  || total_line_items_price_set | [TotalLineItemsPriceSet](#TotalLineItemsPriceSet) |  no  |  || total_price | string |  no  |  || total_price_set | [TotalPriceSet](#TotalPriceSet) |  no  |  || total_price_usd | string |  no  |  || total_shipping_price_set | [TotalShippingPriceSet](#TotalShippingPriceSet) |  no  |  || total_tax | string |  no  |  || total_tax_set | [TotalTaxSet](#TotalTaxSet) |  no  |  || total_tip_received | string |  no  |  || total_weight | number |  no  |  || updated_at | string |  no  |  || user_id | number |  no  |  |

---

#### [NotAvailable](#NotAvailable)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || count | number |  no  |  || updated_at | string |  no  |  |

---

#### [Opening](#Opening)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || hour | number |  no  |  || minute | number |  no  |  |

---

#### [Options](#Options)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || text | string |  no  |  || value | string |  no  |  |

---

#### [OrderCommitted](#OrderCommitted)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || count | number |  no  |  || updated_at | string |  no  |  |

---

#### [OrderDetails](#OrderDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || applied_filters | [AppliedFilters](#AppliedFilters) |  yes  |  || filters | [Filters](#Filters) |  yes  |  || items | [[OrderPicklistListing](#OrderPicklistListing)] |  yes  |  || next_order_status | string |  yes  |  || page | [PlatformOrderPage](#PlatformOrderPage) |  yes  |  |

---

#### [OrderDetailsItem](#OrderDetailsItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || application | [PlatformApplication](#PlatformApplication) |  no  |  || breakup_values | [PlatformBreakupValues](#PlatformBreakupValues) |  no  |  || channel | [Channel](#Channel) |  no  |  || created_at | string |  no  |  || delivery_address | [PlatformDeliveryAddress](#PlatformDeliveryAddress) |  no  |  || fyndstore_emp | string |  no  |  || id | string |  no  |  || ordering_store | string |  no  |  || payment_methods | string |  no  |  || payments | [ItemsPayments](#ItemsPayments) |  no  |  || shipments | [PlatformShipmentDetails](#PlatformShipmentDetails) |  no  |  || total_shipments_in_order | number |  no  |  || user | [PlatformOrderUserInfo](#PlatformOrderUserInfo) |  no  |  |

---

#### [OrderItems](#OrderItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || application | [PlatformApplication](#PlatformApplication) |  no  |  || channel | [Channel](#Channel) |  no  |  || created_at | string |  no  |  || delivery_address | [PlatformDeliveryAddress](#PlatformDeliveryAddress) |  no  |  || id | string |  no  |  || shipments | [PlatformShipment](#PlatformShipment) |  no  |  || total_shipments_in_order | number |  no  |  || user | [PlatformOrderUserInfo](#PlatformOrderUserInfo) |  no  |  |

---

#### [OrderLanesCount](#OrderLanesCount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || stages | [[StageItem](#StageItem)] |  yes  |  |

---

#### [OrderListing](#OrderListing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || applied_filters | [AppliedFilters](#AppliedFilters) |  yes  |  || filters | [Filters](#Filters) |  yes  |  || items | [[OrderItems](#OrderItems)] |  yes  |  || next_order_status | string |  yes  |  || page | [PlatformOrderPage](#PlatformOrderPage) |  yes  |  |

---

#### [OrderPicklistListing](#OrderPicklistListing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || application | [PlatformApplication](#PlatformApplication) |  no  |  || breakup_values | [PlatformBreakupValues](#PlatformBreakupValues) |  no  |  || channel | [Channel](#Channel) |  no  |  || created_at | string |  no  |  || delivery_address | [PlatformDeliveryAddress](#PlatformDeliveryAddress) |  no  |  || fyndstore_emp | string |  no  |  || id | string |  no  |  || ordering_store | string |  no  |  || payment_methods | string |  no  |  || payments | [ItemsPayments](#ItemsPayments) |  no  |  || shipments | [PlatformShipmentDetails](#PlatformShipmentDetails) |  no  |  || total_shipments_in_order | number |  no  |  || user | [PlatformOrderUserInfo](#PlatformOrderUserInfo) |  no  |  |

---

#### [OrderShippingAddress](#OrderShippingAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address1 | string |  no  |  || address2 | string |  no  |  || city | string |  no  |  || company | string |  no  |  || country | string |  no  |  || country_code | string |  no  |  || first_name | string |  no  |  || last_name | string |  no  |  || latitude | number |  no  |  || longitude | number |  no  |  || name | string |  no  |  || phone | string |  no  |  || province | string |  no  |  || province_code | string |  no  |  || zip | string |  no  |  |

---

#### [Payments](#Payments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display_name | string |  no  |  || display_priority | number |  no  |  || id | number |  no  |  || is_active | boolean |  no  |  || logo | string |  no  |  || mode | string |  no  |  || payment_identifier | string |  no  |  || source | string |  no  |  || source_nickname | string |  no  |  |

---

#### [PlatformApplication](#PlatformApplication)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || id | string |  no  |  |

---

#### [PlatformBreakupValues](#PlatformBreakupValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display | string |  no  |  || name | string |  no  |  || value | number |  no  |  |

---

#### [PlatformDeliveryAddress](#PlatformDeliveryAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address | string |  no  |  || address1 | string |  no  |  || address2 | string |  no  |  || address_category | string |  no  |  || address_type | string |  no  |  || area | string |  no  |  || city | string |  no  |  || contact_person | string |  no  |  || country | string |  no  |  || created_at | string |  no  |  || email | string |  no  |  || landmark | string |  no  |  || latitude | number |  no  |  || longitude | number |  no  |  || name | string |  no  |  || phone | string |  no  |  || pincode | string |  no  |  || state | string |  no  |  || updated_at | string |  no  |  || version | string |  no  |  |

---

#### [PlatformFulfillingStore](#PlatformFulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address1 | string |  no  |  || address2 | string |  no  |  || brand_store_tags | [string] |  no  |  || city | string |  no  |  || code | string |  no  |  || company_id | number |  no  |  || contact_person | string |  no  |  || country | string |  no  |  || created_at | string |  no  |  || fulfillment_channel | string |  no  |  || id | number |  no  |  || is_active | boolean |  no  |  || is_archived | boolean |  no  |  || is_enabled_for_recon | boolean |  no  |  || location_type | string |  no  |  || login_username | string |  no  |  || meta | [FulfillingStoreMeta](#FulfillingStoreMeta) |  no  |  || name | string |  no  |  || packaging_material_count | number |  no  |  || phone | string |  no  |  || pincode | string |  no  |  || state | string |  no  |  || store_address_json | [FulfillingStoreStoreAddressJson](#FulfillingStoreStoreAddressJson) |  no  |  || store_email | string |  no  |  || updated_at | string |  no  |  |

---

#### [PlatformOrderDetailsPage](#PlatformOrderDetailsPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || next | string |  no  |  || previous | string |  no  |  |

---

#### [PlatformOrderPage](#PlatformOrderPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || current | number |  no  |  || has_next | boolean |  no  |  || item_total | [ItemTotal](#ItemTotal) |  no  |  || next | string |  no  |  || previous | string |  no  |  || size | number |  no  |  || total | number |  no  |  || type | string |  no  |  |

---

#### [PlatformOrderTrack](#PlatformOrderTrack)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | string |  yes  |  || message | string |  yes  |  || mobile | string |  yes  |  || request_id | string |  yes  |  || resend_timer | number |  yes  |  || resend_token | string |  no  |  || success | boolean |  yes  |  |

---

#### [PlatformOrderUserInfo](#PlatformOrderUserInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || avis_user_id | string |  no  |  || email | string |  no  |  || first_name | string |  no  |  || gender | string |  no  |  || is_anonymous_user | boolean |  no  |  || last_name | string |  no  |  || mobile | string |  no  |  || uid | number |  no  |  |

---

#### [PlatformShipment](#PlatformShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || bags | [Bags](#Bags) |  no  |  || gst | [ShipmentGst](#ShipmentGst) |  no  |  || id | string |  no  |  || lock_status | boolean |  no  |  || ordering_channel | string |  no  |  || prices | [ShipmentPrices](#ShipmentPrices) |  no  |  || priority | number |  no  |  || priority_text | string |  no  |  || status | [PlatformShipmentStatus](#PlatformShipmentStatus) |  no  |  || total_shipment_bags | number |  no  |  |

---

#### [PlatformShipmentDetails](#PlatformShipmentDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || auto_trigger_dp_assignment | boolean |  no  |  || bags | [BagsDetails](#BagsDetails) |  no  |  || brand | [PlatformShipmentDetailsBrand](#PlatformShipmentDetailsBrand) |  no  |  || breakup_values | [ShipmentBreakupValues](#ShipmentBreakupValues) |  no  |  || can_break | string |  no  |  || comment | string |  no  |  || company | [Company](#Company) |  no  |  || coupon | string |  no  |  || credit_note_id | string |  no  |  || dates | [ShipmentDates](#ShipmentDates) |  no  |  || dp_details | [DpDetails](#DpDetails) |  no  |  || fulfilling_store | [PlatformFulfillingStore](#PlatformFulfillingStore) |  no  |  || gst | [ShipmentGst](#ShipmentGst) |  no  |  || id | string |  no  |  || invoice | [ShipmentInvoice](#ShipmentInvoice) |  no  |  || is_fynd_coupon | boolean |  no  |  || is_not_fynd_source | boolean |  no  |  || lock_status | boolean |  no  |  || order_source | string |  no  |  || order_type | string |  no  |  || ordering_channel | string |  no  |  || packaging_type | string |  no  |  || payment_methods | string |  no  |  || payments | [Payments](#Payments) |  no  |  || pod | string |  no  |  || prices | [ShipmentPrices](#ShipmentPrices) |  no  |  || priority | number |  no  |  || priority_text | string |  no  |  || promise | [Promise](#Promise) |  no  |  || status | [PlatformShipmentDetailsStatus](#PlatformShipmentDetailsStatus) |  no  |  || total_shipment_bags | number |  no  |  || tracking_details | [ShipmentTrackingDetails](#ShipmentTrackingDetails) |  no  |  |

---

#### [PlatformShipmentDetailsBrand](#PlatformShipmentDetailsBrand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || brand_name | string |  no  |  || created_on | string |  no  |  || credit_note_allowed | boolean |  no  |  || id | number |  no  |  || is_virtual_invoice | boolean |  no  |  || logo | string |  no  |  || modified_on | string |  no  |  |

---

#### [PlatformShipmentDetailsStatus](#PlatformShipmentDetailsStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || bag_list | [number] |  no  |  || color_code | string |  no  |  || created_at | string |  no  |  || current_shipment_status | string |  no  |  || id | number |  no  |  || name | string |  no  |  || progress | number |  no  |  || shipment_id | string |  no  |  || status | string |  no  |  |

---

#### [PlatformShipmentStatus](#PlatformShipmentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || bag_list | [number] |  no  |  || color_code | string |  no  |  || created_at | string |  no  |  || current_shipment_status | string |  no  |  || id | number |  no  |  || name | string |  no  |  || progress | number |  no  |  || shipment_id | string |  no  |  || status | string |  no  |  |

---

#### [PlatformShipmentTrack](#PlatformShipmentTrack)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || results | [Results](#Results) |  yes  |  |

---

#### [PresentmentMoney](#PresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | string |  no  |  || currency_code | string |  no  |  |

---

#### [PriceSet](#PriceSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || presentment_money | [PriceSetPresentmentMoney](#PriceSetPresentmentMoney) |  no  |  || shop_money | [PriceSetShopMoney](#PriceSetShopMoney) |  no  |  |

---

#### [PriceSetPresentmentMoney](#PriceSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | string |  no  |  || currency_code | string |  no  |  |

---

#### [PriceSetShopMoney](#PriceSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | string |  no  |  || currency_code | string |  no  |  |

---

#### [ProductReturnConfig](#ProductReturnConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || on_same_store | boolean |  no  |  |

---

#### [Promise](#Promise)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || timestamp | [Timestamp](#Timestamp) |  no  |  |

---

#### [Quantities](#Quantities)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || damaged | [Damaged](#Damaged) |  no  |  || not_available | [NotAvailable](#NotAvailable) |  no  |  || order_committed | [OrderCommitted](#OrderCommitted) |  no  |  || sellable | [Sellable](#Sellable) |  no  |  |

---

#### [Results](#Results)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || account_name | string |  no  |  || awb | string |  no  |  || last_location_recieved_at | string |  no  |  || reason | string |  no  |  || shipment_type | string |  no  |  || status | string |  no  |  || updated_at | string |  no  |  || updated_time | string |  no  |  |

---

#### [RtoAddress](#RtoAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address1 | string |  no  |  || address2 | string |  no  |  || city | string |  no  |  || code | string |  no  |  || company_id | number |  no  |  || contact_person | string |  no  |  || country | string |  no  |  || id | number |  no  |  || location_type | string |  no  |  || name | string |  no  |  || phone | string |  no  |  || pincode | string |  no  |  || state | string |  no  |  || store_address_json | [StoreAddressJson](#StoreAddressJson) |  no  |  || store_email | string |  no  |  |

---

#### [Sellable](#Sellable)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || count | number |  no  |  || updated_at | string |  no  |  |

---

#### [Set](#Set)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || quantity | number |  no  |  || size_distribution | [SetSizeDistribution](#SetSizeDistribution) |  no  |  |

---

#### [SetSizeDistribution](#SetSizeDistribution)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || sizes | [Sizes](#Sizes) |  no  |  |

---

#### [ShipmentBreakupValues](#ShipmentBreakupValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display | string |  no  |  || name | string |  no  |  || value | number |  no  |  |

---

#### [ShipmentDates](#ShipmentDates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || due_date | string |  no  |  |

---

#### [ShipmentGst](#ShipmentGst)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || brand_calculated_amount | number |  no  |  || gst_fee | number |  no  |  || value_of_good | number |  no  |  |

---

#### [ShipmentInvoice](#ShipmentInvoice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount_to_collect | number |  no  |  || invoice_url | string |  no  |  || label_url | string |  no  |  || payment_mode | string |  no  |  || payment_type | string |  no  |  || rto_address | [RtoAddress](#RtoAddress) |  no  |  || updated_date | string |  no  |  |

---

#### [ShipmentPrices](#ShipmentPrices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || added_to_fynd_cash | boolean |  no  |  || amount_paid | number |  no  |  || amount_paid_roundoff | number |  no  |  || brand_calculated_amount | number |  no  |  || cashback | number |  no  |  || cashback_applied | number |  no  |  || cod_charges | number |  no  |  || coupon_effective_discount | number |  no  |  || coupon_value | number |  no  |  || delivery_charge | number |  no  |  || discount | number |  no  |  || fynd_credits | number |  no  |  || gst_tax_percentage | number |  no  |  || price_effective | number |  no  |  || price_marked | number |  no  |  || promotion_effective_discount | number |  no  |  || refund_amount | number |  no  |  || refund_credit | number |  no  |  || transfer_price | number |  no  |  || value_of_good | number |  no  |  |

---

#### [ShipmentReasonsResponse](#ShipmentReasonsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  yes  |  || reasons | [[ShipmentResponseReasons](#ShipmentResponseReasons)] |  yes  |  || success | boolean |  yes  |  |

---

#### [ShipmentResponseReasons](#ShipmentResponseReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || reason | string |  no  |  || reason_id | number |  no  |  |

---

#### [ShipmentTrackingDetails](#ShipmentTrackingDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_current | boolean |  no  |  || is_passed | boolean |  no  |  || status | string |  no  |  || time | string |  no  |  |

---

#### [ShipmentTrackResponse](#ShipmentTrackResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || bag_list | [[ShipmentTrackResponseBagListItem](#ShipmentTrackResponseBagListItem)] |  yes  |  || message | string |  yes  |  || order_value | number |  yes  |  |

---

#### [ShipmentTrackResponseBagListItem](#ShipmentTrackResponseBagListItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || bag_id | string |  no  |  || brand_name | string |  no  |  || breakup_values | [[ShipmentTrackResponseBagListItemBreakValues](#ShipmentTrackResponseBagListItemBreakValues)] |  no  |  || can_cancel | boolean |  no  |  || can_return | boolean |  no  |  || delivery_address | string |  no  |  || dp_details | [ShipmentTrackResponseBagListItemDpDetails](#ShipmentTrackResponseBagListItemDpDetails) |  no  |  || enable_tracking | boolean |  no  |  || fynd_cash_msg | string |  no  |  || is_active | boolean |  no  |  || is_try_at_home | boolean |  no  |  || order_date | string |  no  |  || order_id | string |  no  |  || payment_mode | string |  no  |  || payment_mode_source | string |  no  |  || price | string |  no  |  || price_marked | string |  no  |  || product_id | number |  no  |  || product_image | [ShipmentTrackResponseBagListItemsProductImage](#ShipmentTrackResponseBagListItemsProductImage) |  no  |  || product_name | string |  no  |  || size | string |  no  |  || status | string |  no  |  || statuses | [[ShipmentTrackResponseBagListItemStatuses](#ShipmentTrackResponseBagListItemStatuses)] |  no  |  || time_slot | string |  no  |  |

---

#### [ShipmentTrackResponseBagListItemBreakValues](#ShipmentTrackResponseBagListItemBreakValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display | string |  no  |  || name | string |  no  |  || value | string |  no  |  |

---

#### [ShipmentTrackResponseBagListItemDpDetails](#ShipmentTrackResponseBagListItemDpDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || courier | string |  no  |  || tracking_no | string |  no  |  |

---

#### [ShipmentTrackResponseBagListItemsProductImage](#ShipmentTrackResponseBagListItemsProductImage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aspect_ratio | string |  no  |  || url | string |  no  |  |

---

#### [ShipmentTrackResponseBagListItemStatuses](#ShipmentTrackResponseBagListItemStatuses)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || flow_type | string |  no  |  || header_message | string |  no  |  || is_delayed | string |  no  |  || is_nps_done | boolean |  no  |  || nps_rating | number |  no  |  || nps_string | string |  no  |  || progress_status | [[ShipmentTrackResponseBagListItemStatusesProgress](#ShipmentTrackResponseBagListItemStatusesProgress)] |  no  |  || status_progress | number |  no  |  || tracking_list | [[ShipmentTrackResponseBagListItemStatusesTrack](#ShipmentTrackResponseBagListItemStatusesTrack)] |  no  |  |

---

#### [ShipmentTrackResponseBagListItemStatusesProgress](#ShipmentTrackResponseBagListItemStatusesProgress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || state | boolean |  no  |  || title | string |  no  |  || type | string |  no  |  |

---

#### [ShipmentTrackResponseBagListItemStatusesTrack](#ShipmentTrackResponseBagListItemStatusesTrack)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_current | boolean |  no  |  || is_passed | boolean |  no  |  || status | string |  no  |  || time | string |  no  |  |

---

#### [ShipmentUpdateRequest](#ShipmentUpdateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || action | string |  yes  |  || bags | [string] |  yes  |  || comments | string |  yes  |  || reason | string |  yes  |  |

---

#### [ShipmentUpdateResponse](#ShipmentUpdateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  yes  |  || success | boolean |  yes  |  |

---

#### [ShopMoney](#ShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | string |  no  |  || currency_code | string |  no  |  |

---

#### [Sizes](#Sizes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || pieces | number |  no  |  || size | string |  no  |  |

---

#### [Stage](#Stage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || filters | [StagesFilters](#StagesFilters) |  no  |  || is_default | boolean |  no  |  || text | string |  no  |  || value | string |  no  |  |

---

#### [StageItem](#StageItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || count | number |  no  |  || text | string |  no  |  || value | string |  no  |  |

---

#### [Stages](#Stages)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || filters | [StagesFilters](#StagesFilters) |  no  |  || is_default | boolean |  no  |  || text | string |  no  |  || value | string |  no  |  |

---

#### [StagesFilters](#StagesFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || options | [Options](#Options) |  no  |  || text | string |  no  |  || type | string |  no  |  || value | string |  no  |  |

---

#### [Store](#Store)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || id | number |  no  |  |

---

#### [StoreAddressJson](#StoreAddressJson)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address1 | string |  no  |  || address2 | string |  no  |  || address_category | string |  no  |  || address_type | string |  no  |  || area | string |  no  |  || city | string |  no  |  || contact_person | string |  no  |  || country | string |  no  |  || created_at | string |  no  |  || email | string |  no  |  || landmark | string |  no  |  || latitude | number |  no  |  || longitude | number |  no  |  || phone | string |  no  |  || pincode | string |  no  |  || state | string |  no  |  || updated_at | string |  no  |  || version | string |  no  |  |

---

#### [SubtotalPriceSet](#SubtotalPriceSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || presentment_money | [SubtotalPriceSetPresentmentMoney](#SubtotalPriceSetPresentmentMoney) |  no  |  || shop_money | [SubtotalPriceSetShopMoney](#SubtotalPriceSetShopMoney) |  no  |  |

---

#### [SubtotalPriceSetPresentmentMoney](#SubtotalPriceSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | string |  no  |  || currency_code | string |  no  |  |

---

#### [SubtotalPriceSetShopMoney](#SubtotalPriceSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | string |  no  |  || currency_code | string |  no  |  |

---

#### [TatacliqLuxury](#TatacliqLuxury)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || sku | string |  no  |  |

---

#### [TaxLines](#TaxLines)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || price | string |  no  |  || price_set | [TaxLinesPriceSet](#TaxLinesPriceSet) |  no  |  || rate | number |  no  |  || title | string |  no  |  |

---

#### [TaxLinesPriceSet](#TaxLinesPriceSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || presentment_money | [TaxLinesPriceSetPresentmentMoney](#TaxLinesPriceSetPresentmentMoney) |  no  |  || shop_money | [TaxLinesPriceSetShopMoney](#TaxLinesPriceSetShopMoney) |  no  |  |

---

#### [TaxLinesPriceSetPresentmentMoney](#TaxLinesPriceSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | string |  no  |  || currency_code | string |  no  |  |

---

#### [TaxLinesPriceSetShopMoney](#TaxLinesPriceSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | string |  no  |  || currency_code | string |  no  |  |

---

#### [Timestamp](#Timestamp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || max | string |  no  |  || min | string |  no  |  |

---

#### [Timing](#Timing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || closing | [Closing](#Closing) |  no  |  || open | boolean |  no  |  || opening | [Opening](#Opening) |  no  |  || weekday | string |  no  |  |

---

#### [TotalDiscountSet](#TotalDiscountSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || presentment_money | [TotalDiscountSetPresentmentMoney](#TotalDiscountSetPresentmentMoney) |  no  |  || shop_money | [TotalDiscountSetShopMoney](#TotalDiscountSetShopMoney) |  no  |  |

---

#### [TotalDiscountSetPresentmentMoney](#TotalDiscountSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | string |  no  |  || currency_code | string |  no  |  |

---

#### [TotalDiscountSetShopMoney](#TotalDiscountSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | string |  no  |  || currency_code | string |  no  |  |

---

#### [TotalDiscountsSet](#TotalDiscountsSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || presentment_money | [PresentmentMoney](#PresentmentMoney) |  no  |  || shop_money | [ShopMoney](#ShopMoney) |  no  |  |

---

#### [TotalLineItemsPriceSet](#TotalLineItemsPriceSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || presentment_money | [TotalLineItemsPriceSetPresentmentMoney](#TotalLineItemsPriceSetPresentmentMoney) |  no  |  || shop_money | [TotalLineItemsPriceSetShopMoney](#TotalLineItemsPriceSetShopMoney) |  no  |  |

---

#### [TotalLineItemsPriceSetPresentmentMoney](#TotalLineItemsPriceSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | string |  no  |  || currency_code | string |  no  |  |

---

#### [TotalLineItemsPriceSetShopMoney](#TotalLineItemsPriceSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | string |  no  |  || currency_code | string |  no  |  |

---

#### [TotalPriceSet](#TotalPriceSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || presentment_money | [TotalPriceSetPresentmentMoney](#TotalPriceSetPresentmentMoney) |  no  |  || shop_money | [TotalPriceSetShopMoney](#TotalPriceSetShopMoney) |  no  |  |

---

#### [TotalPriceSetPresentmentMoney](#TotalPriceSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | string |  no  |  || currency_code | string |  no  |  |

---

#### [TotalPriceSetShopMoney](#TotalPriceSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | string |  no  |  || currency_code | string |  no  |  |

---

#### [TotalShippingPriceSet](#TotalShippingPriceSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || presentment_money | [TotalShippingPriceSetPresentmentMoney](#TotalShippingPriceSetPresentmentMoney) |  no  |  || shop_money | [TotalShippingPriceSetShopMoney](#TotalShippingPriceSetShopMoney) |  no  |  |

---

#### [TotalShippingPriceSetPresentmentMoney](#TotalShippingPriceSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | string |  no  |  || currency_code | string |  no  |  |

---

#### [TotalShippingPriceSetShopMoney](#TotalShippingPriceSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | string |  no  |  || currency_code | string |  no  |  |

---

#### [TotalTaxSet](#TotalTaxSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || presentment_money | [TotalTaxSetPresentmentMoney](#TotalTaxSetPresentmentMoney) |  no  |  || shop_money | [TotalTaxSetShopMoney](#TotalTaxSetShopMoney) |  no  |  |

---

#### [TotalTaxSetPresentmentMoney](#TotalTaxSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | string |  no  |  || currency_code | string |  no  |  |

---

#### [TotalTaxSetShopMoney](#TotalTaxSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | string |  no  |  || currency_code | string |  no  |  |

---

#### [UpdateOrderReprocessResponse](#UpdateOrderReprocessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || status | string |  yes  |  |

---

#### [UpdateProcessShipmenstRequestBody](#UpdateProcessShipmenstRequestBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || expected_status | string |  yes  |  || shipment_ids | [string] |  yes  |  |

---

#### [UpdateProcessShipmenstRequestResponse](#UpdateProcessShipmenstRequestResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  yes  |  || success | boolean |  yes  |  |

---

#### [UpdateShipmentAddressRequest](#UpdateShipmentAddressRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address | string |  yes  |  || address_type | string |  yes  |  || area | string |  yes  |  || city | string |  yes  |  || country | string |  yes  |  || email | string |  yes  |  || landmark | string |  yes  |  || name | string |  yes  |  || phone | string |  yes  |  || pincode | string |  yes  |  || state | string |  yes  |  |

---

#### [UpdateShipmentAddressResponse](#UpdateShipmentAddressResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  yes  |  || success | boolean |  yes  |  |

---

#### [UpdateShipmentStatusBody](#UpdateShipmentStatusBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || force_transition | boolean |  yes  |  || shipments | string |  yes  |  || task | boolean |  yes  |  |

---

#### [UpdateShipmentStatusResponse](#UpdateShipmentStatusResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error_shipments | [any] |  no  |  || shipments | string |  yes  |  |

---

#### [Weight](#Weight)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_default | boolean |  no  |  || shipping | number |  no  |  || unit | string |  no  |  |

---




