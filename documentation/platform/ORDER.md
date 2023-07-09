




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
const promise = platformClient.order.activityStatus({  bagId : value });

// Async/Await
const data = await platformClient.order.activityStatus({  bagId : value });
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
const promise = platformClient.order.checkRefund({  shipmentId : value });

// Async/Await
const data = await platformClient.order.checkRefund({  shipmentId : value });
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
const promise = platformClient.application("<APPLICATION_ID>").order.failedOrders();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").order.failedOrders();
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
const promise = platformClient.order.getOrderDetails({  orderId : value,
 next : value,
 previous : value });

// Async/Await
const data = await platformClient.order.getOrderDetails({  orderId : value,
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
const promise = platformClient.application("<APPLICATION_ID>").order.getOrderDetails({  orderId : value,
 next : value,
 previous : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").order.getOrderDetails({  orderId : value,
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
const promise = platformClient.order.getOrderLanesCountByCompanyId({  pageNo : value,
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
const data = await platformClient.order.getOrderLanesCountByCompanyId({  pageNo : value,
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
const promise = platformClient.application("<APPLICATION_ID>").order.getOrdersByApplicationId({  pageNo : value,
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
const data = await platformClient.application("<APPLICATION_ID>").order.getOrdersByApplicationId({  pageNo : value,
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
const promise = platformClient.order.getOrdersByCompanyId({  pageNo : value,
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
const data = await platformClient.order.getOrdersByCompanyId({  pageNo : value,
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
const promise = platformClient.order.getPicklistOrdersByCompanyId({  pageNo : value,
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
const data = await platformClient.order.getPicklistOrdersByCompanyId({  pageNo : value,
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
const promise = platformClient.application("<APPLICATION_ID>").order.getPlatformShipmentReasons({  action : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").order.getPlatformShipmentReasons({  action : value });
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
const promise = platformClient.order.getShipmentAddress({  shipmentId : value,
 addressCategory : value });

// Async/Await
const data = await platformClient.order.getShipmentAddress({  shipmentId : value,
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
const promise = platformClient.application("<APPLICATION_ID>").order.getShipmentTrackDetails({  orderId : value,
 shipmentId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").order.getShipmentTrackDetails({  orderId : value,
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
const promise = platformClient.application("<APPLICATION_ID>").order.reprocessOrder({  orderId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").order.reprocessOrder({  orderId : value });
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
const promise = platformClient.order.shipmentBagsCanBreak({  body : value });

// Async/Await
const data = await platformClient.order.shipmentBagsCanBreak({  body : value });
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
const promise = platformClient.order.shipmentStatusUpdate({  body : value });

// Async/Await
const data = await platformClient.order.shipmentStatusUpdate({  body : value });
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
const promise = platformClient.order.storeProcessShipmentUpdate({  body : value });

// Async/Await
const data = await platformClient.order.storeProcessShipmentUpdate({  body : value });
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
const promise = platformClient.application("<APPLICATION_ID>").order.trackOrder({  orderId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").order.trackOrder({  orderId : value });
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
const promise = platformClient.application("<APPLICATION_ID>").order.trackShipmentPlatform({  shipmentId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").order.trackShipmentPlatform({  shipmentId : value });
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
const promise = platformClient.application("<APPLICATION_ID>").order.updateShipment({  shipmentId : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").order.updateShipment({  shipmentId : value,
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
const promise = platformClient.order.updateShipmentAddress({  shipmentId : value,
 addressCategory : value,
 body : value });

// Async/Await
const data = await platformClient.order.updateShipmentAddress({  shipmentId : value,
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
 | ---------- | ---- | -------- | ----------- |
 | createdat | string? |  yes  |  |
 | message | string? |  yes  |  |
 | type | string? |  yes  |  |
 | user | string? |  yes  |  |
 

---

#### [AdditionalContactDetails](#AdditionalContactDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | number | [string]? |  yes  |  |
 

---

#### [ApefaceApiError](#ApefaceApiError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [AppliedFilters](#AppliedFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | deployment_stores | [string]? |  yes  |  |
 | dp | [number]? |  yes  |  |
 | from_date | string? |  yes  |  |
 | stage | string? |  yes  |  |
 | stores | [string]? |  yes  |  |
 | to_date | string? |  yes  |  |
 

---

#### [ArticleAssignment](#ArticleAssignment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | level | string? |  yes  |  |
 | strategy | string? |  yes  |  |
 

---

#### [ArticleBrand](#ArticleBrand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [ArticleIdentifiers](#ArticleIdentifiers)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ean | string? |  yes  |  |
 

---

#### [ArticleMeta](#ArticleMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | service | string? |  yes  |  |
 

---

#### [ArticlePrice](#ArticlePrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency | string? |  yes  |  |
 | effective | number? |  yes  |  |
 | marked | number? |  yes  |  |
 | transfer | number? |  yes  |  |
 

---

#### [BagArticle](#BagArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | child_details | string? |  yes  |  |
 | code | string? |  yes  |  |
 | esp_modified | boolean? |  yes  |  |
 | identifiers | [ArticleIdentifiers](#ArticleIdentifiers)? |  yes  |  |
 | is_set | boolean? |  yes  |  |
 | return_config | [BagArticleReturnConfig](#BagArticleReturnConfig)? |  yes  |  |
 | seller_identifier | string? |  yes  |  |
 | set | [Set](#Set)? |  yes  |  |
 | size | string? |  yes  |  |
 | uid | string? |  yes  |  |
 

---

#### [BagArticleReturnConfig](#BagArticleReturnConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | returnable | boolean? |  yes  |  |
 | time | number? |  yes  |  |
 | unit | string? |  yes  |  |
 

---

#### [BagBreakupValues](#BagBreakupValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string? |  yes  |  |
 | name | string? |  yes  |  |
 | value | number? |  yes  |  |
 

---

#### [BagCurrentStatus](#BagCurrentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_state_mapper | [BagStateMapper](#BagStateMapper)? |  yes  |  |
 | state_type | string? |  yes  |  |
 | status | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [BagCurrStatus](#BagCurrStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | can_be_cancelled | boolean? |  yes  |  |
 | enable_tracking | boolean? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | is_customer_return_allowed | boolean? |  yes  |  |
 | is_returnable | boolean? |  yes  |  |
 

---

#### [BagFinancialBreakup](#BagFinancialBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | added_to_fynd_cash | boolean? |  yes  |  |
 | amount_paid | number? |  yes  |  |
 | amount_paid_roundoff | number? |  yes  |  |
 | brand_calculated_amount | number? |  yes  |  |
 | cashback | number? |  yes  |  |
 | cashback_applied | number? |  yes  |  |
 | cod_charges | number? |  yes  |  |
 | coupon_effective_discount | number? |  yes  |  |
 | coupon_value | number? |  yes  |  |
 | delivery_charge | number? |  yes  |  |
 | discount | number? |  yes  |  |
 | fynd_credits | number? |  yes  |  |
 | gst_fee | string? |  yes  |  |
 | gst_tag | string? |  yes  |  |
 | gst_tax_percentage | number? |  yes  |  |
 | hsn_code | string? |  yes  |  |
 | identifiers | [Identifiers](#Identifiers)? |  yes  |  |
 | item_name | string? |  yes  |  |
 | price_effective | number? |  yes  |  |
 | price_marked | number? |  yes  |  |
 | promotion_effective_discount | number? |  yes  |  |
 | refund_amount | number? |  yes  |  |
 | refund_credit | number? |  yes  |  |
 | size | string? |  yes  |  |
 | total_units | number? |  yes  |  |
 | transfer_price | number? |  yes  |  |
 | value_of_good | number? |  yes  |  |
 

---

#### [BagItem](#BagItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attributes | [BagItemAttributes](#BagItemAttributes)? |  yes  |  |
 | brand | string? |  yes  |  |
 | brand_id | number? |  yes  |  |
 | can_cancel | boolean? |  yes  |  |
 | can_return | boolean? |  yes  |  |
 | code | string? |  yes  |  |
 | id | number? |  yes  |  |
 | image | [string]? |  yes  |  |
 | l1_category | [string]? |  yes  |  |
 | l2_category | [string]? |  yes  |  |
 | l3_category | number? |  yes  |  |
 | l3_category_name | string? |  yes  |  |
 | last_updated_at | string? |  yes  |  |
 | name | string? |  yes  |  |
 | size | string? |  yes  |  |
 | slug_key | string? |  yes  |  |
 

---

#### [BagItemAttributes](#BagItemAttributes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_name | string? |  yes  |  |
 | country_of_origin | string? |  yes  |  |
 | item_code | string? |  yes  |  |
 

---

#### [BagPrices](#BagPrices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_paid | number? |  yes  |  |
 | amount_paid_roundoff | number? |  yes  |  |
 | cashback | number? |  yes  |  |
 | cashback_applied | number? |  yes  |  |
 | cod_charges | number? |  yes  |  |
 | coupon_value | number? |  yes  |  |
 | delivery_charge | number? |  yes  |  |
 | discount | number? |  yes  |  |
 | fynd_credits | number? |  yes  |  |
 | price_effective | number? |  yes  |  |
 | price_marked | number? |  yes  |  |
 | refund_amount | number? |  yes  |  |
 | refund_credit | number? |  yes  |  |
 | value_of_good | number? |  yes  |  |
 

---

#### [Bags](#Bags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number? |  yes  |  |
 | item | [BagItem](#BagItem)? |  yes  |  |
 

---

#### [BagsDetails](#BagsDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article | [BagArticle](#BagArticle)? |  yes  |  |
 | bag_status | [BagStatus](#BagStatus)? |  yes  |  |
 | breakup_values | [BagBreakupValues](#BagBreakupValues)? |  yes  |  |
 | can_cancel | boolean? |  yes  |  |
 | can_return | boolean? |  yes  |  |
 | current_status | [BagCurrentStatus](#BagCurrentStatus)? |  yes  |  |
 | financial_breakup | [[BagFinancialBreakup](#BagFinancialBreakup)]? |  yes  |  |
 | gst_details | [GstDetails](#GstDetails)? |  yes  |  |
 | id | number? |  yes  |  |
 | item | [BagItem](#BagItem)? |  yes  |  |
 | payment_methods | string? |  yes  |  |
 | prices | [BagPrices](#BagPrices)? |  yes  |  |
 | status | [BagCurrStatus](#BagCurrStatus)? |  yes  |  |
 | update_time | number? |  yes  |  |
 

---

#### [BagStateMapper](#BagStateMapper)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_display_name | string? |  yes  |  |
 | app_state_name | string? |  yes  |  |
 | display_name | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [BagStatus](#BagStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_state_mapper | [BagStatusBagStateMapper](#BagStatusBagStateMapper)? |  yes  |  |
 | state_type | string? |  yes  |  |
 | status | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [BagStatusBagStateMapper](#BagStatusBagStateMapper)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_display_name | string? |  yes  |  |
 | app_state_name | string? |  yes  |  |
 | display_name | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [BillingAddress](#BillingAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string? |  yes  |  |
 | address2 | string? |  yes  |  |
 | city | string? |  yes  |  |
 | company | string? |  yes  |  |
 | country | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | latitude | number? |  yes  |  |
 | longitude | number? |  yes  |  |
 | name | string? |  yes  |  |
 | phone | string? |  yes  |  |
 | province | string? |  yes  |  |
 | province_code | string? |  yes  |  |
 | zip | string? |  yes  |  |
 

---

#### [CanBreakRequestBody](#CanBreakRequestBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_ids | [string] |  no  |  |
 

---

#### [CanBreakResponse](#CanBreakResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | boolean |  no  |  |
 | valid_actions | string |  no  |  |
 

---

#### [Channel](#Channel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [Closing](#Closing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hour | number? |  yes  |  |
 | minute | number? |  yes  |  |
 

---

#### [Company](#Company)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | agreement_start_date | string? |  yes  |  |
 | business_type | string? |  yes  |  |
 | company_name | string? |  yes  |  |
 | company_type | string? |  yes  |  |
 | created_on | string? |  yes  |  |
 | exchange_allowed | boolean? |  yes  |  |
 | exchange_within_days | number? |  yes  |  |
 | fynd_a_fit_available | boolean? |  yes  |  |
 | id | number? |  yes  |  |
 | meta | string? |  yes  |  |
 | modified_on | string? |  yes  |  |
 | pan_no | string? |  yes  |  |
 | payment_procesing_charge | number? |  yes  |  |
 | return_allowed | boolean? |  yes  |  |
 | return_within_days | number? |  yes  |  |
 

---

#### [Customer](#Customer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | accepts_marketing | boolean? |  yes  |  |
 | accepts_marketing_updated_at | string? |  yes  |  |
 | admin_graphql_api_id | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | currency | string? |  yes  |  |
 | default_address | [DefaultAddress](#DefaultAddress)? |  yes  |  |
 | email | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | id | number? |  yes  |  |
 | last_name | string? |  yes  |  |
 | last_order_id | number? |  yes  |  |
 | last_order_name | string? |  yes  |  |
 | note | string? |  yes  |  |
 | orders_count | number? |  yes  |  |
 | phone | string? |  yes  |  |
 | state | string? |  yes  |  |
 | tags | string? |  yes  |  |
 | tax_exempt | boolean? |  yes  |  |
 | total_spent | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | verified_email | boolean? |  yes  |  |
 

---

#### [Damaged](#Damaged)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [DataShipmentAddress](#DataShipmentAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string? |  yes  |  |
 | address_category | string? |  yes  |  |
 | address_type | string? |  yes  |  |
 | area | string? |  yes  |  |
 | city | string? |  yes  |  |
 | country | string? |  yes  |  |
 | email | string? |  yes  |  |
 | landmark | string? |  yes  |  |
 | name | string? |  yes  |  |
 | phone | string? |  yes  |  |
 | pincode | string? |  yes  |  |
 | state | string? |  yes  |  |
 

---

#### [DefaultAddress](#DefaultAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string? |  yes  |  |
 | address2 | string? |  yes  |  |
 | city | string? |  yes  |  |
 | company | string? |  yes  |  |
 | country | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | country_name | string? |  yes  |  |
 | customer_id | number? |  yes  |  |
 | first_name | string? |  yes  |  |
 | id | number? |  yes  |  |
 | is_default | boolean? |  yes  |  |
 | last_name | string? |  yes  |  |
 | name | string? |  yes  |  |
 | phone | string? |  yes  |  |
 | province | string? |  yes  |  |
 | province_code | string? |  yes  |  |
 | zip | string? |  yes  |  |
 

---

#### [Dimension](#Dimension)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | height | number? |  yes  |  |
 | is_default | boolean? |  yes  |  |
 | length | number? |  yes  |  |
 | unit | string? |  yes  |  |
 | width | number? |  yes  |  |
 

---

#### [Documents](#Documents)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst | [Gst](#Gst)? |  yes  |  |
 

---

#### [DpDetails](#DpDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst_tag | string? |  yes  |  |
 

---

#### [FailedOrders](#FailedOrders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | orders | [FailOrder](#FailOrder) |  no  |  |
 

---

#### [FailOrder](#FailOrder)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | app_id | string? |  yes  |  |
 | company_id | number? |  yes  |  |
 | created_at | string? |  yes  |  |
 | marketplace | string? |  yes  |  |
 | marketplace_order | [MarketplaceOrder](#MarketplaceOrder)? |  yes  |  |
 | marketplace_order_id | string? |  yes  |  |
 | reason | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [FailOrderDateMeta](#FailOrderDateMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | added_on_store | string? |  yes  |  |
 | created_on | string? |  yes  |  |
 | inventory_updated_on | string? |  yes  |  |
 | modified_on | string? |  yes  |  |
 

---

#### [Filters](#Filters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | stage | [Stage](#Stage)? |  yes  |  |
 | stages | [Stages](#Stages)? |  yes  |  |
 

---

#### [FulfillingStoreMeta](#FulfillingStoreMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | additional_contact_details | [AdditionalContactDetails](#AdditionalContactDetails)? |  yes  |  |
 | allow_dp_assignment_from_fynd | boolean? |  yes  |  |
 | display_name | string? |  yes  |  |
 | documents | [Documents](#Documents)? |  yes  |  |
 | gst_number | string? |  yes  |  |
 | product_return_config | [ProductReturnConfig](#ProductReturnConfig)? |  yes  |  |
 | stage | string? |  yes  |  |
 | timing | [Timing](#Timing)? |  yes  |  |
 

---

#### [FulfillingStoreStoreAddressJson](#FulfillingStoreStoreAddressJson)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string? |  yes  |  |
 | address2 | string? |  yes  |  |
 | address_category | string? |  yes  |  |
 | address_type | string? |  yes  |  |
 | area | string? |  yes  |  |
 | city | string? |  yes  |  |
 | contact_person | string? |  yes  |  |
 | country | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | email | string? |  yes  |  |
 | landmark | string? |  yes  |  |
 | latitude | number? |  yes  |  |
 | longitude | number? |  yes  |  |
 | phone | string? |  yes  |  |
 | pincode | string? |  yes  |  |
 | state | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | version | string? |  yes  |  |
 

---

#### [GetActivityStatus](#GetActivityStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | activity_history | [ActivityHistory](#ActivityHistory) |  no  |  |
 

---

#### [GetClickToCallResponse](#GetClickToCallResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 

---

#### [GetPingResponse](#GetPingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ping | string |  no  |  |
 

---

#### [GetShipmentAddressResponse](#GetShipmentAddressResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [DataShipmentAddress](#DataShipmentAddress) |  no  |  |
 | message | string |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [GetVoiceCallbackResponse](#GetVoiceCallbackResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 

---

#### [Gst](#Gst)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | legal_name | string? |  yes  |  |
 | type | string? |  yes  |  |
 | value | string? |  yes  |  |
 | verified | boolean? |  yes  |  |
 

---

#### [GstDetails](#GstDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_calculated_amount | number? |  yes  |  |
 | gst_fee | string? |  yes  |  |
 | gst_tag | string? |  yes  |  |
 | gst_tax_percentage | number? |  yes  |  |
 | hsn_code | string? |  yes  |  |
 | is_default_hsn_code | boolean? |  yes  |  |
 | value_of_good | number? |  yes  |  |
 

---

#### [Identifiers](#Identifiers)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ean | string? |  yes  |  |
 

---

#### [ItemsPayments](#ItemsPayments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | display_priority | number? |  yes  |  |
 | id | number? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | logo | string? |  yes  |  |
 | mode | string? |  yes  |  |
 | payment_identifier | string? |  yes  |  |
 | source | string? |  yes  |  |
 | source_nickname | string? |  yes  |  |
 

---

#### [ItemTotal](#ItemTotal)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | all | number? |  yes  |  |
 | new | number? |  yes  |  |
 | processing | number? |  yes  |  |
 | returns | number? |  yes  |  |
 

---

#### [LineItems](#LineItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | admin_graphql_api_id | string? |  yes  |  |
 | article | [LineItemsArticle](#LineItemsArticle)? |  yes  |  |
 | fulfillable_quantity | number? |  yes  |  |
 | fulfillment_service | string? |  yes  |  |
 | gift_card | boolean? |  yes  |  |
 | grams | number? |  yes  |  |
 | id | number? |  yes  |  |
 | name | string? |  yes  |  |
 | price | string? |  yes  |  |
 | price_set | [PriceSet](#PriceSet)? |  yes  |  |
 | product_exists | boolean? |  yes  |  |
 | product_id | number? |  yes  |  |
 | quantity | number? |  yes  |  |
 | requires_shipping | boolean? |  yes  |  |
 | sku | string? |  yes  |  |
 | tax_lines | [TaxLines](#TaxLines)? |  yes  |  |
 | taxable | boolean? |  yes  |  |
 | title | string? |  yes  |  |
 | total_discount | string? |  yes  |  |
 | total_discount_set | [TotalDiscountSet](#TotalDiscountSet)? |  yes  |  |
 | variant_id | number? |  yes  |  |
 | variant_inventory_management | string? |  yes  |  |
 | variant_title | string? |  yes  |  |
 | vendor | string? |  yes  |  |
 

---

#### [LineItemsArticle](#LineItemsArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | brand | [ArticleBrand](#ArticleBrand)? |  yes  |  |
 | company | [Company](#Company)? |  yes  |  |
 | country_of_origin | string? |  yes  |  |
 | date_meta | [FailOrderDateMeta](#FailOrderDateMeta)? |  yes  |  |
 | dimension | [Dimension](#Dimension)? |  yes  |  |
 | fragile | boolean? |  yes  |  |
 | fynd_article_code | string? |  yes  |  |
 | fynd_item_code | string? |  yes  |  |
 | identifier | [LineItemsArticleIdentifier](#LineItemsArticleIdentifier)? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | is_set | boolean? |  yes  |  |
 | item_id | number? |  yes  |  |
 | manufacturer | [Manufacturer](#Manufacturer)? |  yes  |  |
 | marketplace_identifiers | [MarketplaceIdentifiers](#MarketplaceIdentifiers)? |  yes  |  |
 | meta | [ArticleMeta](#ArticleMeta)? |  yes  |  |
 | old_article_uid | string? |  yes  |  |
 | price | [ArticlePrice](#ArticlePrice)? |  yes  |  |
 | quantities | [Quantities](#Quantities)? |  yes  |  |
 | seller_identifier | string? |  yes  |  |
 | size | string? |  yes  |  |
 | store | [Store](#Store)? |  yes  |  |
 | total_quantity | number? |  yes  |  |
 | track_inventory | boolean? |  yes  |  |
 | uid | string? |  yes  |  |
 | weight | [Weight](#Weight)? |  yes  |  |
 

---

#### [LineItemsArticleIdentifier](#LineItemsArticleIdentifier)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sku_code | string? |  yes  |  |
 

---

#### [Manufacturer](#Manufacturer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string? |  yes  |  |
 | is_default | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [MarketplaceIdentifiers](#MarketplaceIdentifiers)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tatacliq_luxury | [TatacliqLuxury](#TatacliqLuxury)? |  yes  |  |
 

---

#### [MarketplaceOrder](#MarketplaceOrder)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | admin_graphql_api_id | string? |  yes  |  |
 | app_id | number? |  yes  |  |
 | billing_address | [BillingAddress](#BillingAddress)? |  yes  |  |
 | buyer_accepts_marketing | boolean? |  yes  |  |
 | confirmed | boolean? |  yes  |  |
 | contact_email | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | currency | string? |  yes  |  |
 | customer | [Customer](#Customer)? |  yes  |  |
 | email | string? |  yes  |  |
 | financial_status | string? |  yes  |  |
 | gateway | string? |  yes  |  |
 | id | number? |  yes  |  |
 | line_items | [LineItems](#LineItems)? |  yes  |  |
 | name | string? |  yes  |  |
 | note | string? |  yes  |  |
 | number | number? |  yes  |  |
 | order_number | number? |  yes  |  |
 | order_status_url | string? |  yes  |  |
 | payment_gateway_names | [any]? |  yes  |  |
 | presentment_currency | string? |  yes  |  |
 | processed_at | string? |  yes  |  |
 | processing_method | string? |  yes  |  |
 | shipping_address | [OrderShippingAddress](#OrderShippingAddress)? |  yes  |  |
 | source_name | string? |  yes  |  |
 | subtotal_price | string? |  yes  |  |
 | subtotal_price_set | [SubtotalPriceSet](#SubtotalPriceSet)? |  yes  |  |
 | tags | string? |  yes  |  |
 | taxes_included | boolean? |  yes  |  |
 | test | boolean? |  yes  |  |
 | token | string? |  yes  |  |
 | total_discounts | string? |  yes  |  |
 | total_discounts_set | [TotalDiscountsSet](#TotalDiscountsSet)? |  yes  |  |
 | total_line_items_price | string? |  yes  |  |
 | total_line_items_price_set | [TotalLineItemsPriceSet](#TotalLineItemsPriceSet)? |  yes  |  |
 | total_price | string? |  yes  |  |
 | total_price_set | [TotalPriceSet](#TotalPriceSet)? |  yes  |  |
 | total_price_usd | string? |  yes  |  |
 | total_shipping_price_set | [TotalShippingPriceSet](#TotalShippingPriceSet)? |  yes  |  |
 | total_tax | string? |  yes  |  |
 | total_tax_set | [TotalTaxSet](#TotalTaxSet)? |  yes  |  |
 | total_tip_received | string? |  yes  |  |
 | total_weight | number? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | user_id | number? |  yes  |  |
 

---

#### [NotAvailable](#NotAvailable)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [Opening](#Opening)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hour | number? |  yes  |  |
 | minute | number? |  yes  |  |
 

---

#### [Options](#Options)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [OrderCommitted](#OrderCommitted)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [OrderDetails](#OrderDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | applied_filters | [AppliedFilters](#AppliedFilters) |  no  |  |
 | filters | [Filters](#Filters) |  no  |  |
 | items | [[OrderPicklistListing](#OrderPicklistListing)] |  no  |  |
 | next_order_status | string |  no  |  |
 | page | [PlatformOrderPage](#PlatformOrderPage) |  no  |  |
 

---

#### [OrderDetailsItem](#OrderDetailsItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | [PlatformApplication](#PlatformApplication)? |  yes  |  |
 | breakup_values | [PlatformBreakupValues](#PlatformBreakupValues)? |  yes  |  |
 | channel | [Channel](#Channel)? |  yes  |  |
 | created_at | string? |  yes  |  |
 | delivery_address | [PlatformDeliveryAddress](#PlatformDeliveryAddress)? |  yes  |  |
 | fyndstore_emp | string? |  yes  |  |
 | id | string? |  yes  |  |
 | ordering_store | string? |  yes  |  |
 | payment_methods | string? |  yes  |  |
 | payments | [ItemsPayments](#ItemsPayments)? |  yes  |  |
 | shipments | [PlatformShipmentDetails](#PlatformShipmentDetails)? |  yes  |  |
 | total_shipments_in_order | number? |  yes  |  |
 | user | [PlatformOrderUserInfo](#PlatformOrderUserInfo)? |  yes  |  |
 

---

#### [OrderItems](#OrderItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | [PlatformApplication](#PlatformApplication)? |  yes  |  |
 | channel | [Channel](#Channel)? |  yes  |  |
 | created_at | string? |  yes  |  |
 | delivery_address | [PlatformDeliveryAddress](#PlatformDeliveryAddress)? |  yes  |  |
 | id | string? |  yes  |  |
 | shipments | [PlatformShipment](#PlatformShipment)? |  yes  |  |
 | total_shipments_in_order | number? |  yes  |  |
 | user | [PlatformOrderUserInfo](#PlatformOrderUserInfo)? |  yes  |  |
 

---

#### [OrderLanesCount](#OrderLanesCount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | stages | [[StageItem](#StageItem)] |  no  |  |
 

---

#### [OrderListing](#OrderListing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | applied_filters | [AppliedFilters](#AppliedFilters) |  no  |  |
 | filters | [Filters](#Filters) |  no  |  |
 | items | [[OrderItems](#OrderItems)] |  no  |  |
 | next_order_status | string |  no  |  |
 | page | [PlatformOrderPage](#PlatformOrderPage) |  no  |  |
 

---

#### [OrderPicklistListing](#OrderPicklistListing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | [PlatformApplication](#PlatformApplication)? |  yes  |  |
 | breakup_values | [PlatformBreakupValues](#PlatformBreakupValues)? |  yes  |  |
 | channel | [Channel](#Channel)? |  yes  |  |
 | created_at | string? |  yes  |  |
 | delivery_address | [PlatformDeliveryAddress](#PlatformDeliveryAddress)? |  yes  |  |
 | fyndstore_emp | string? |  yes  |  |
 | id | string? |  yes  |  |
 | ordering_store | string? |  yes  |  |
 | payment_methods | string? |  yes  |  |
 | payments | [ItemsPayments](#ItemsPayments)? |  yes  |  |
 | shipments | [PlatformShipmentDetails](#PlatformShipmentDetails)? |  yes  |  |
 | total_shipments_in_order | number? |  yes  |  |
 | user | [PlatformOrderUserInfo](#PlatformOrderUserInfo)? |  yes  |  |
 

---

#### [OrderShippingAddress](#OrderShippingAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string? |  yes  |  |
 | address2 | string? |  yes  |  |
 | city | string? |  yes  |  |
 | company | string? |  yes  |  |
 | country | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | latitude | number? |  yes  |  |
 | longitude | number? |  yes  |  |
 | name | string? |  yes  |  |
 | phone | string? |  yes  |  |
 | province | string? |  yes  |  |
 | province_code | string? |  yes  |  |
 | zip | string? |  yes  |  |
 

---

#### [Payments](#Payments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | display_priority | number? |  yes  |  |
 | id | number? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | logo | string? |  yes  |  |
 | mode | string? |  yes  |  |
 | payment_identifier | string? |  yes  |  |
 | source | string? |  yes  |  |
 | source_nickname | string? |  yes  |  |
 

---

#### [PlatformApplication](#PlatformApplication)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string? |  yes  |  |
 

---

#### [PlatformBreakupValues](#PlatformBreakupValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string? |  yes  |  |
 | name | string? |  yes  |  |
 | value | number? |  yes  |  |
 

---

#### [PlatformDeliveryAddress](#PlatformDeliveryAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string? |  yes  |  |
 | address1 | string? |  yes  |  |
 | address2 | string? |  yes  |  |
 | address_category | string? |  yes  |  |
 | address_type | string? |  yes  |  |
 | area | string? |  yes  |  |
 | city | string? |  yes  |  |
 | contact_person | string? |  yes  |  |
 | country | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | email | string? |  yes  |  |
 | landmark | string? |  yes  |  |
 | latitude | number? |  yes  |  |
 | longitude | number? |  yes  |  |
 | name | string? |  yes  |  |
 | phone | string? |  yes  |  |
 | pincode | string? |  yes  |  |
 | state | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | version | string? |  yes  |  |
 

---

#### [PlatformFulfillingStore](#PlatformFulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string? |  yes  |  |
 | address2 | string? |  yes  |  |
 | brand_store_tags | [string]? |  yes  |  |
 | city | string? |  yes  |  |
 | code | string? |  yes  |  |
 | company_id | number? |  yes  |  |
 | contact_person | string? |  yes  |  |
 | country | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | fulfillment_channel | string? |  yes  |  |
 | id | number? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | is_archived | boolean? |  yes  |  |
 | is_enabled_for_recon | boolean? |  yes  |  |
 | location_type | string? |  yes  |  |
 | login_username | string? |  yes  |  |
 | meta | [FulfillingStoreMeta](#FulfillingStoreMeta)? |  yes  |  |
 | name | string? |  yes  |  |
 | packaging_material_count | number? |  yes  |  |
 | phone | string? |  yes  |  |
 | pincode | string? |  yes  |  |
 | state | string? |  yes  |  |
 | store_address_json | [FulfillingStoreStoreAddressJson](#FulfillingStoreStoreAddressJson)? |  yes  |  |
 | store_email | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [PlatformOrderDetailsPage](#PlatformOrderDetailsPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | next | string? |  yes  |  |
 | previous | string? |  yes  |  |
 

---

#### [PlatformOrderPage](#PlatformOrderPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | item_total | [ItemTotal](#ItemTotal)? |  yes  |  |
 | next | string? |  yes  |  |
 | previous | string? |  yes  |  |
 | size | number? |  yes  |  |
 | total | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [PlatformOrderTrack](#PlatformOrderTrack)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string |  no  |  |
 | message | string |  no  |  |
 | mobile | string |  no  |  |
 | request_id | string |  no  |  |
 | resend_timer | number |  no  |  |
 | resend_token | string? |  yes  |  |
 | success | boolean |  no  |  |
 

---

#### [PlatformOrderUserInfo](#PlatformOrderUserInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | avis_user_id | string? |  yes  |  |
 | email | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | is_anonymous_user | boolean? |  yes  |  |
 | last_name | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 | uid | number? |  yes  |  |
 

---

#### [PlatformShipment](#PlatformShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bags | [Bags](#Bags)? |  yes  |  |
 | gst | [ShipmentGst](#ShipmentGst)? |  yes  |  |
 | id | string? |  yes  |  |
 | lock_status | boolean? |  yes  |  |
 | ordering_channel | string? |  yes  |  |
 | prices | [ShipmentPrices](#ShipmentPrices)? |  yes  |  |
 | priority | number? |  yes  |  |
 | priority_text | string? |  yes  |  |
 | status | [PlatformShipmentStatus](#PlatformShipmentStatus)? |  yes  |  |
 | total_shipment_bags | number? |  yes  |  |
 

---

#### [PlatformShipmentDetails](#PlatformShipmentDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | auto_trigger_dp_assignment | boolean? |  yes  |  |
 | bags | [BagsDetails](#BagsDetails)? |  yes  |  |
 | brand | [PlatformShipmentDetailsBrand](#PlatformShipmentDetailsBrand)? |  yes  |  |
 | breakup_values | [ShipmentBreakupValues](#ShipmentBreakupValues)? |  yes  |  |
 | can_break | string? |  yes  |  |
 | comment | string? |  yes  |  |
 | company | [Company](#Company)? |  yes  |  |
 | coupon | string? |  yes  |  |
 | credit_note_id | string? |  yes  |  |
 | dates | [ShipmentDates](#ShipmentDates)? |  yes  |  |
 | dp_details | [DpDetails](#DpDetails)? |  yes  |  |
 | fulfilling_store | [PlatformFulfillingStore](#PlatformFulfillingStore)? |  yes  |  |
 | gst | [ShipmentGst](#ShipmentGst)? |  yes  |  |
 | id | string? |  yes  |  |
 | invoice | [ShipmentInvoice](#ShipmentInvoice)? |  yes  |  |
 | is_fynd_coupon | boolean? |  yes  |  |
 | is_not_fynd_source | boolean? |  yes  |  |
 | lock_status | boolean? |  yes  |  |
 | order_source | string? |  yes  |  |
 | order_type | string? |  yes  |  |
 | ordering_channel | string? |  yes  |  |
 | packaging_type | string? |  yes  |  |
 | payment_methods | string? |  yes  |  |
 | payments | [Payments](#Payments)? |  yes  |  |
 | pod | string? |  yes  |  |
 | prices | [ShipmentPrices](#ShipmentPrices)? |  yes  |  |
 | priority | number? |  yes  |  |
 | priority_text | string? |  yes  |  |
 | promise | [Promise](#Promise)? |  yes  |  |
 | status | [PlatformShipmentDetailsStatus](#PlatformShipmentDetailsStatus)? |  yes  |  |
 | total_shipment_bags | number? |  yes  |  |
 | tracking_details | [ShipmentTrackingDetails](#ShipmentTrackingDetails)? |  yes  |  |
 

---

#### [PlatformShipmentDetailsBrand](#PlatformShipmentDetailsBrand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_name | string? |  yes  |  |
 | created_on | string? |  yes  |  |
 | credit_note_allowed | boolean? |  yes  |  |
 | id | number? |  yes  |  |
 | is_virtual_invoice | boolean? |  yes  |  |
 | logo | string? |  yes  |  |
 | modified_on | string? |  yes  |  |
 

---

#### [PlatformShipmentDetailsStatus](#PlatformShipmentDetailsStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_list | [number]? |  yes  |  |
 | color_code | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | current_shipment_status | string? |  yes  |  |
 | id | number? |  yes  |  |
 | name | string? |  yes  |  |
 | progress | number? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | status | string? |  yes  |  |
 

---

#### [PlatformShipmentStatus](#PlatformShipmentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_list | [number]? |  yes  |  |
 | color_code | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | current_shipment_status | string? |  yes  |  |
 | id | number? |  yes  |  |
 | name | string? |  yes  |  |
 | progress | number? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | status | string? |  yes  |  |
 

---

#### [PlatformShipmentTrack](#PlatformShipmentTrack)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | results | [Results](#Results) |  no  |  |
 

---

#### [PresentmentMoney](#PresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string? |  yes  |  |
 | currency_code | string? |  yes  |  |
 

---

#### [PriceSet](#PriceSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | presentment_money | [PriceSetPresentmentMoney](#PriceSetPresentmentMoney)? |  yes  |  |
 | shop_money | [PriceSetShopMoney](#PriceSetShopMoney)? |  yes  |  |
 

---

#### [PriceSetPresentmentMoney](#PriceSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string? |  yes  |  |
 | currency_code | string? |  yes  |  |
 

---

#### [PriceSetShopMoney](#PriceSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string? |  yes  |  |
 | currency_code | string? |  yes  |  |
 

---

#### [ProductReturnConfig](#ProductReturnConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | on_same_store | boolean? |  yes  |  |
 

---

#### [Promise](#Promise)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | timestamp | [Timestamp](#Timestamp)? |  yes  |  |
 

---

#### [Quantities](#Quantities)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | damaged | [Damaged](#Damaged)? |  yes  |  |
 | not_available | [NotAvailable](#NotAvailable)? |  yes  |  |
 | order_committed | [OrderCommitted](#OrderCommitted)? |  yes  |  |
 | sellable | [Sellable](#Sellable)? |  yes  |  |
 

---

#### [Results](#Results)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | account_name | string? |  yes  |  |
 | awb | string? |  yes  |  |
 | last_location_recieved_at | string? |  yes  |  |
 | reason | string? |  yes  |  |
 | shipment_type | string? |  yes  |  |
 | status | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | updated_time | string? |  yes  |  |
 

---

#### [RtoAddress](#RtoAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string? |  yes  |  |
 | address2 | string? |  yes  |  |
 | city | string? |  yes  |  |
 | code | string? |  yes  |  |
 | company_id | number? |  yes  |  |
 | contact_person | string? |  yes  |  |
 | country | string? |  yes  |  |
 | id | number? |  yes  |  |
 | location_type | string? |  yes  |  |
 | name | string? |  yes  |  |
 | phone | string? |  yes  |  |
 | pincode | string? |  yes  |  |
 | state | string? |  yes  |  |
 | store_address_json | [StoreAddressJson](#StoreAddressJson)? |  yes  |  |
 | store_email | string? |  yes  |  |
 

---

#### [Sellable](#Sellable)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [Set](#Set)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | quantity | number? |  yes  |  |
 | size_distribution | [SetSizeDistribution](#SetSizeDistribution)? |  yes  |  |
 

---

#### [SetSizeDistribution](#SetSizeDistribution)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sizes | [Sizes](#Sizes)? |  yes  |  |
 

---

#### [ShipmentBreakupValues](#ShipmentBreakupValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string? |  yes  |  |
 | name | string? |  yes  |  |
 | value | number? |  yes  |  |
 

---

#### [ShipmentDates](#ShipmentDates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | due_date | string? |  yes  |  |
 

---

#### [ShipmentGst](#ShipmentGst)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_calculated_amount | number? |  yes  |  |
 | gst_fee | number? |  yes  |  |
 | value_of_good | number? |  yes  |  |
 

---

#### [ShipmentInvoice](#ShipmentInvoice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_to_collect | number? |  yes  |  |
 | invoice_url | string? |  yes  |  |
 | label_url | string? |  yes  |  |
 | payment_mode | string? |  yes  |  |
 | payment_type | string? |  yes  |  |
 | rto_address | [RtoAddress](#RtoAddress)? |  yes  |  |
 | updated_date | string? |  yes  |  |
 

---

#### [ShipmentPrices](#ShipmentPrices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | added_to_fynd_cash | boolean? |  yes  |  |
 | amount_paid | number? |  yes  |  |
 | amount_paid_roundoff | number? |  yes  |  |
 | brand_calculated_amount | number? |  yes  |  |
 | cashback | number? |  yes  |  |
 | cashback_applied | number? |  yes  |  |
 | cod_charges | number? |  yes  |  |
 | coupon_effective_discount | number? |  yes  |  |
 | coupon_value | number? |  yes  |  |
 | delivery_charge | number? |  yes  |  |
 | discount | number? |  yes  |  |
 | fynd_credits | number? |  yes  |  |
 | gst_tax_percentage | number? |  yes  |  |
 | price_effective | number? |  yes  |  |
 | price_marked | number? |  yes  |  |
 | promotion_effective_discount | number? |  yes  |  |
 | refund_amount | number? |  yes  |  |
 | refund_credit | number? |  yes  |  |
 | transfer_price | number? |  yes  |  |
 | value_of_good | number? |  yes  |  |
 

---

#### [ShipmentReasonsResponse](#ShipmentReasonsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | reasons | [[ShipmentResponseReasons](#ShipmentResponseReasons)] |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [ShipmentResponseReasons](#ShipmentResponseReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason | string? |  yes  |  |
 | reason_id | number? |  yes  |  |
 

---

#### [ShipmentTrackingDetails](#ShipmentTrackingDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_current | boolean? |  yes  |  |
 | is_passed | boolean? |  yes  |  |
 | status | string? |  yes  |  |
 | time | string? |  yes  |  |
 

---

#### [ShipmentTrackResponse](#ShipmentTrackResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_list | [[ShipmentTrackResponseBagListItem](#ShipmentTrackResponseBagListItem)] |  no  |  |
 | message | string |  no  |  |
 | order_value | number |  no  |  |
 

---

#### [ShipmentTrackResponseBagListItem](#ShipmentTrackResponseBagListItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_id | string? |  yes  |  |
 | brand_name | string? |  yes  |  |
 | breakup_values | [[ShipmentTrackResponseBagListItemBreakValues](#ShipmentTrackResponseBagListItemBreakValues)]? |  yes  |  |
 | can_cancel | boolean? |  yes  |  |
 | can_return | boolean? |  yes  |  |
 | delivery_address | string? |  yes  |  |
 | dp_details | [ShipmentTrackResponseBagListItemDpDetails](#ShipmentTrackResponseBagListItemDpDetails)? |  yes  |  |
 | enable_tracking | boolean? |  yes  |  |
 | fynd_cash_msg | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | is_try_at_home | boolean? |  yes  |  |
 | order_date | string? |  yes  |  |
 | order_id | string? |  yes  |  |
 | payment_mode | string? |  yes  |  |
 | payment_mode_source | string? |  yes  |  |
 | price | string? |  yes  |  |
 | price_marked | string? |  yes  |  |
 | product_id | number? |  yes  |  |
 | product_image | [ShipmentTrackResponseBagListItemsProductImage](#ShipmentTrackResponseBagListItemsProductImage)? |  yes  |  |
 | product_name | string? |  yes  |  |
 | size | string? |  yes  |  |
 | status | string? |  yes  |  |
 | statuses | [[ShipmentTrackResponseBagListItemStatuses](#ShipmentTrackResponseBagListItemStatuses)]? |  yes  |  |
 | time_slot | string? |  yes  |  |
 

---

#### [ShipmentTrackResponseBagListItemBreakValues](#ShipmentTrackResponseBagListItemBreakValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string? |  yes  |  |
 | name | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [ShipmentTrackResponseBagListItemDpDetails](#ShipmentTrackResponseBagListItemDpDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | courier | string? |  yes  |  |
 | tracking_no | string? |  yes  |  |
 

---

#### [ShipmentTrackResponseBagListItemsProductImage](#ShipmentTrackResponseBagListItemsProductImage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aspect_ratio | string? |  yes  |  |
 | url | string? |  yes  |  |
 

---

#### [ShipmentTrackResponseBagListItemStatuses](#ShipmentTrackResponseBagListItemStatuses)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | flow_type | string? |  yes  |  |
 | header_message | string? |  yes  |  |
 | is_delayed | string? |  yes  |  |
 | is_nps_done | boolean? |  yes  |  |
 | nps_rating | number? |  yes  |  |
 | nps_string | string? |  yes  |  |
 | progress_status | [[ShipmentTrackResponseBagListItemStatusesProgress](#ShipmentTrackResponseBagListItemStatusesProgress)]? |  yes  |  |
 | status_progress | number? |  yes  |  |
 | tracking_list | [[ShipmentTrackResponseBagListItemStatusesTrack](#ShipmentTrackResponseBagListItemStatusesTrack)]? |  yes  |  |
 

---

#### [ShipmentTrackResponseBagListItemStatusesProgress](#ShipmentTrackResponseBagListItemStatusesProgress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | state | boolean? |  yes  |  |
 | title | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [ShipmentTrackResponseBagListItemStatusesTrack](#ShipmentTrackResponseBagListItemStatusesTrack)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_current | boolean? |  yes  |  |
 | is_passed | boolean? |  yes  |  |
 | status | string? |  yes  |  |
 | time | string? |  yes  |  |
 

---

#### [ShipmentUpdateRequest](#ShipmentUpdateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  |  |
 | bags | [string] |  no  |  |
 | comments | string |  no  |  |
 | reason | string |  no  |  |
 

---

#### [ShipmentUpdateResponse](#ShipmentUpdateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [ShopMoney](#ShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string? |  yes  |  |
 | currency_code | string? |  yes  |  |
 

---

#### [Sizes](#Sizes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pieces | number? |  yes  |  |
 | size | string? |  yes  |  |
 

---

#### [Stage](#Stage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [StagesFilters](#StagesFilters)? |  yes  |  |
 | is_default | boolean? |  yes  |  |
 | text | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [StageItem](#StageItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number? |  yes  |  |
 | text | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [Stages](#Stages)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [StagesFilters](#StagesFilters)? |  yes  |  |
 | is_default | boolean? |  yes  |  |
 | text | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [StagesFilters](#StagesFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | options | [Options](#Options)? |  yes  |  |
 | text | string? |  yes  |  |
 | type | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [Store](#Store)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number? |  yes  |  |
 

---

#### [StoreAddressJson](#StoreAddressJson)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string? |  yes  |  |
 | address2 | string? |  yes  |  |
 | address_category | string? |  yes  |  |
 | address_type | string? |  yes  |  |
 | area | string? |  yes  |  |
 | city | string? |  yes  |  |
 | contact_person | string? |  yes  |  |
 | country | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | email | string? |  yes  |  |
 | landmark | string? |  yes  |  |
 | latitude | number? |  yes  |  |
 | longitude | number? |  yes  |  |
 | phone | string? |  yes  |  |
 | pincode | string? |  yes  |  |
 | state | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | version | string? |  yes  |  |
 

---

#### [SubtotalPriceSet](#SubtotalPriceSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | presentment_money | [SubtotalPriceSetPresentmentMoney](#SubtotalPriceSetPresentmentMoney)? |  yes  |  |
 | shop_money | [SubtotalPriceSetShopMoney](#SubtotalPriceSetShopMoney)? |  yes  |  |
 

---

#### [SubtotalPriceSetPresentmentMoney](#SubtotalPriceSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string? |  yes  |  |
 | currency_code | string? |  yes  |  |
 

---

#### [SubtotalPriceSetShopMoney](#SubtotalPriceSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string? |  yes  |  |
 | currency_code | string? |  yes  |  |
 

---

#### [TatacliqLuxury](#TatacliqLuxury)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sku | string? |  yes  |  |
 

---

#### [TaxLines](#TaxLines)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | price | string? |  yes  |  |
 | price_set | [TaxLinesPriceSet](#TaxLinesPriceSet)? |  yes  |  |
 | rate | number? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [TaxLinesPriceSet](#TaxLinesPriceSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | presentment_money | [TaxLinesPriceSetPresentmentMoney](#TaxLinesPriceSetPresentmentMoney)? |  yes  |  |
 | shop_money | [TaxLinesPriceSetShopMoney](#TaxLinesPriceSetShopMoney)? |  yes  |  |
 

---

#### [TaxLinesPriceSetPresentmentMoney](#TaxLinesPriceSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string? |  yes  |  |
 | currency_code | string? |  yes  |  |
 

---

#### [TaxLinesPriceSetShopMoney](#TaxLinesPriceSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string? |  yes  |  |
 | currency_code | string? |  yes  |  |
 

---

#### [Timestamp](#Timestamp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | string? |  yes  |  |
 | min | string? |  yes  |  |
 

---

#### [Timing](#Timing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | closing | [Closing](#Closing)? |  yes  |  |
 | open | boolean? |  yes  |  |
 | opening | [Opening](#Opening)? |  yes  |  |
 | weekday | string? |  yes  |  |
 

---

#### [TotalDiscountSet](#TotalDiscountSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | presentment_money | [TotalDiscountSetPresentmentMoney](#TotalDiscountSetPresentmentMoney)? |  yes  |  |
 | shop_money | [TotalDiscountSetShopMoney](#TotalDiscountSetShopMoney)? |  yes  |  |
 

---

#### [TotalDiscountSetPresentmentMoney](#TotalDiscountSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string? |  yes  |  |
 | currency_code | string? |  yes  |  |
 

---

#### [TotalDiscountSetShopMoney](#TotalDiscountSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string? |  yes  |  |
 | currency_code | string? |  yes  |  |
 

---

#### [TotalDiscountsSet](#TotalDiscountsSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | presentment_money | [PresentmentMoney](#PresentmentMoney)? |  yes  |  |
 | shop_money | [ShopMoney](#ShopMoney)? |  yes  |  |
 

---

#### [TotalLineItemsPriceSet](#TotalLineItemsPriceSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | presentment_money | [TotalLineItemsPriceSetPresentmentMoney](#TotalLineItemsPriceSetPresentmentMoney)? |  yes  |  |
 | shop_money | [TotalLineItemsPriceSetShopMoney](#TotalLineItemsPriceSetShopMoney)? |  yes  |  |
 

---

#### [TotalLineItemsPriceSetPresentmentMoney](#TotalLineItemsPriceSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string? |  yes  |  |
 | currency_code | string? |  yes  |  |
 

---

#### [TotalLineItemsPriceSetShopMoney](#TotalLineItemsPriceSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string? |  yes  |  |
 | currency_code | string? |  yes  |  |
 

---

#### [TotalPriceSet](#TotalPriceSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | presentment_money | [TotalPriceSetPresentmentMoney](#TotalPriceSetPresentmentMoney)? |  yes  |  |
 | shop_money | [TotalPriceSetShopMoney](#TotalPriceSetShopMoney)? |  yes  |  |
 

---

#### [TotalPriceSetPresentmentMoney](#TotalPriceSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string? |  yes  |  |
 | currency_code | string? |  yes  |  |
 

---

#### [TotalPriceSetShopMoney](#TotalPriceSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string? |  yes  |  |
 | currency_code | string? |  yes  |  |
 

---

#### [TotalShippingPriceSet](#TotalShippingPriceSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | presentment_money | [TotalShippingPriceSetPresentmentMoney](#TotalShippingPriceSetPresentmentMoney)? |  yes  |  |
 | shop_money | [TotalShippingPriceSetShopMoney](#TotalShippingPriceSetShopMoney)? |  yes  |  |
 

---

#### [TotalShippingPriceSetPresentmentMoney](#TotalShippingPriceSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string? |  yes  |  |
 | currency_code | string? |  yes  |  |
 

---

#### [TotalShippingPriceSetShopMoney](#TotalShippingPriceSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string? |  yes  |  |
 | currency_code | string? |  yes  |  |
 

---

#### [TotalTaxSet](#TotalTaxSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | presentment_money | [TotalTaxSetPresentmentMoney](#TotalTaxSetPresentmentMoney)? |  yes  |  |
 | shop_money | [TotalTaxSetShopMoney](#TotalTaxSetShopMoney)? |  yes  |  |
 

---

#### [TotalTaxSetPresentmentMoney](#TotalTaxSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string? |  yes  |  |
 | currency_code | string? |  yes  |  |
 

---

#### [TotalTaxSetShopMoney](#TotalTaxSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string? |  yes  |  |
 | currency_code | string? |  yes  |  |
 

---

#### [UpdateOrderReprocessResponse](#UpdateOrderReprocessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |
 

---

#### [UpdateProcessShipmenstRequestBody](#UpdateProcessShipmenstRequestBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | expected_status | string |  no  |  |
 | shipment_ids | [string] |  no  |  |
 

---

#### [UpdateProcessShipmenstRequestResponse](#UpdateProcessShipmenstRequestResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [UpdateShipmentAddressRequest](#UpdateShipmentAddressRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string |  no  |  |
 | address_type | string |  no  |  |
 | area | string |  no  |  |
 | city | string |  no  |  |
 | country | string |  no  |  |
 | email | string |  no  |  |
 | landmark | string |  no  |  |
 | name | string |  no  |  |
 | phone | string |  no  |  |
 | pincode | string |  no  |  |
 | state | string |  no  |  |
 

---

#### [UpdateShipmentAddressResponse](#UpdateShipmentAddressResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [UpdateShipmentStatusBody](#UpdateShipmentStatusBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | force_transition | boolean |  no  |  |
 | shipments | string |  no  |  |
 | task | boolean |  no  |  |
 

---

#### [UpdateShipmentStatusResponse](#UpdateShipmentStatusResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error_shipments | [any]? |  yes  |  |
 | shipments | string |  no  |  |
 

---

#### [Weight](#Weight)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_default | boolean? |  yes  |  |
 | shipping | number? |  yes  |  |
 | unit | string? |  yes  |  |
 

---




