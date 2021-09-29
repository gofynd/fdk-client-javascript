



##### [Back to Platform docs](./README.md)

## Order Methods
Handles Platform websites OMS
* [shipmentStatusUpdate](#shipmentstatusupdate)
* [activityStatus](#activitystatus)
* [storeProcessShipmentUpdate](#storeprocessshipmentupdate)
* [checkRefund](#checkrefund)
* [ShipmentBagsCanBreak](#shipmentbagscanbreak)
* [getOrdersByCompanyId](#getordersbycompanyid)
* [getOrderLanesCountByCompanyId](#getorderlanescountbycompanyid)
* [getOrderDetails](#getorderdetails)
* [getPicklistOrdersByCompanyId](#getpicklistordersbycompanyid)
* [trackShipmentPlatform](#trackshipmentplatform)
* [trackOrder](#trackorder)
* [failedOrders](#failedorders)
* [reprocessOrder](#reprocessorder)
* [updateShipment](#updateshipment)
* [getPlatformShipmentReasons](#getplatformshipmentreasons)
* [getShipmentTrackDetails](#getshipmenttrackdetails)
* [getShipmentAddress](#getshipmentaddress)
* [updateShipmentAddress](#updateshipmentaddress)
* [getPing](#getping)
* [voiceCallback](#voicecallback)
* [voiceClickToCall](#voiceclicktocall)



## Methods with example and description


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
| companyId | string | yes | Company Id |  
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
| companyId | string | yes | Company Id |   
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
| companyId | string | yes | Company Id |  
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
| companyId | string | yes | Company Id |   
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


### ShipmentBagsCanBreak
Decides if Shipment bags can break



```javascript
// Promise
const promise = client.order.ShipmentBagsCanBreak({  body : value });

// Async/Await
const data = await client.order.ShipmentBagsCanBreak({  body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |  
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


### getOrdersByCompanyId
Get Orders for company based on Company Id



```javascript
// Promise
const promise = client.order.getOrdersByCompanyId({  pageNo : value,
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
const data = await client.order.getOrdersByCompanyId({  pageNo : value,
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
| companyId | string | yes | Company Id |    
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
| companyId | string | yes | Company Id |    
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
| companyId | string | yes | Company Id |    
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
| companyId | string | yes | Company Id |    
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
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
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
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
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


### failedOrders
Get all failed orders application wise



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").order.failedOrders();

// Async/Await
const data = await client.application("<APPLICATION_ID>").order.failedOrders();
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |  



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
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
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
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
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
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
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
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
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
| companyId | string | yes | Company Id |   
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
| companyId | string | yes | Company Id |   
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


### getPing
Get Ping



```javascript
// Promise
const promise = client.order.getPing();

// Async/Await
const data = await client.order.getPing();
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |  



Get Ping

*Returned Response:*




[GetPingResponse](#GetPingResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### voiceCallback
Get Voice Callback



```javascript
// Promise
const promise = client.order.voiceCallback();

// Async/Await
const data = await client.order.voiceCallback();
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |  



Voice Callback

*Returned Response:*




[GetVoiceCallbackResponse](#GetVoiceCallbackResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### voiceClickToCall
Get Voice Click to Call



```javascript
// Promise
const promise = client.order.voiceClickToCall({  caller : value,
 receiver : value });

// Async/Await
const data = await client.order.voiceClickToCall({  caller : value,
 receiver : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| caller | string | yes | Caller contact number |   
| receiver | string | yes | Receiver contact number |  



Voice Click to Call

*Returned Response:*




[GetClickToCallResponse](#GetClickToCallResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas

 
 
 #### [GetActivityStatus](#GetActivityStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | activity_history | [ActivityHistory](#ActivityHistory) |  yes  |  |

---


 
 
 #### [ActivityHistory](#ActivityHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | createdat | string |  no  |  |
 | message | string |  no  |  |
 | type | string |  no  |  |
 | user | string |  no  |  |

---


 
 
 #### [CanBreakRequestBody](#CanBreakRequestBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_ids | [string] |  yes  |  |

---


 
 
 #### [CanBreakResponse](#CanBreakResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | boolean |  yes  |  |
 | valid_actions | string |  yes  |  |

---


 
 
 #### [FailedOrders](#FailedOrders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | orders | [FailOrder](#FailOrder) |  yes  |  |

---


 
 
 #### [FailOrder](#FailOrder)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | updated_at | string |  no  |  |
 | _id | string |  no  |  |
 | reason | string |  no  |  |
 | marketplace_order | [MarketplaceOrder](#MarketplaceOrder) |  no  |  |
 | marketplace_order_id | string |  no  |  |
 | created_at | string |  no  |  |
 | app_id | string |  no  |  |
 | marketplace | string |  no  |  |
 | company_id | number |  no  |  |

---


 
 
 #### [MarketplaceOrder](#MarketplaceOrder)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_status_url | string |  no  |  |
 | admin_graphql_api_id | string |  no  |  |
 | email | string |  no  |  |
 | test | boolean |  no  |  |
 | note | string |  no  |  |
 | total_price | string |  no  |  |
 | app_id | number |  no  |  |
 | total_discounts_set | [TotalDiscountsSet](#TotalDiscountsSet) |  no  |  |
 | total_price_set | [TotalPriceSet](#TotalPriceSet) |  no  |  |
 | total_tax_set | [TotalTaxSet](#TotalTaxSet) |  no  |  |
 | gateway | string |  no  |  |
 | name | string |  no  |  |
 | subtotal_price_set | [SubtotalPriceSet](#SubtotalPriceSet) |  no  |  |
 | number | number |  no  |  |
 | buyer_accepts_marketing | boolean |  no  |  |
 | contact_email | string |  no  |  |
 | token | string |  no  |  |
 | source_name | string |  no  |  |
 | payment_gateway_names | [any] |  no  |  |
 | presentment_currency | string |  no  |  |
 | subtotal_price | string |  no  |  |
 | processed_at | string |  no  |  |
 | order_number | number |  no  |  |
 | total_tip_received | string |  no  |  |
 | id | number |  no  |  |
 | confirmed | boolean |  no  |  |
 | currency | string |  no  |  |
 | total_line_items_price | string |  no  |  |
 | line_items | [LineItems](#LineItems) |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | total_weight | number |  no  |  |
 | billing_address | [BillingAddress](#BillingAddress) |  no  |  |
 | total_shipping_price_set | [TotalShippingPriceSet](#TotalShippingPriceSet) |  no  |  |
 | customer | [Customer](#Customer) |  no  |  |
 | total_discounts | string |  no  |  |
 | total_line_items_price_set | [TotalLineItemsPriceSet](#TotalLineItemsPriceSet) |  no  |  |
 | tags | string |  no  |  |
 | total_price_usd | string |  no  |  |
 | user_id | number |  no  |  |
 | total_tax | string |  no  |  |
 | processing_method | string |  no  |  |
 | shipping_address | [OrderShippingAddress](#OrderShippingAddress) |  no  |  |
 | taxes_included | boolean |  no  |  |
 | financial_status | string |  no  |  |

---


 
 
 #### [TotalDiscountsSet](#TotalDiscountsSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | presentment_money | [PresentmentMoney](#PresentmentMoney) |  no  |  |
 | shop_money | [ShopMoney](#ShopMoney) |  no  |  |

---


 
 
 #### [PresentmentMoney](#PresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [ShopMoney](#ShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [TotalPriceSet](#TotalPriceSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shop_money | [TotalPriceSetShopMoney](#TotalPriceSetShopMoney) |  no  |  |
 | presentment_money | [TotalPriceSetPresentmentMoney](#TotalPriceSetPresentmentMoney) |  no  |  |

---


 
 
 #### [TotalPriceSetShopMoney](#TotalPriceSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [TotalPriceSetPresentmentMoney](#TotalPriceSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [TotalTaxSet](#TotalTaxSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shop_money | [TotalTaxSetShopMoney](#TotalTaxSetShopMoney) |  no  |  |
 | presentment_money | [TotalTaxSetPresentmentMoney](#TotalTaxSetPresentmentMoney) |  no  |  |

---


 
 
 #### [TotalTaxSetShopMoney](#TotalTaxSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [TotalTaxSetPresentmentMoney](#TotalTaxSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [SubtotalPriceSet](#SubtotalPriceSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shop_money | [SubtotalPriceSetShopMoney](#SubtotalPriceSetShopMoney) |  no  |  |
 | presentment_money | [SubtotalPriceSetPresentmentMoney](#SubtotalPriceSetPresentmentMoney) |  no  |  |

---


 
 
 #### [SubtotalPriceSetShopMoney](#SubtotalPriceSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [SubtotalPriceSetPresentmentMoney](#SubtotalPriceSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [LineItems](#LineItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sku | string |  no  |  |
 | fulfillable_quantity | number |  no  |  |
 | grams | number |  no  |  |
 | total_discount | string |  no  |  |
 | article | [LineItemsArticle](#LineItemsArticle) |  no  |  |
 | title | string |  no  |  |
 | variant_inventory_management | string |  no  |  |
 | id | number |  no  |  |
 | variant_id | number |  no  |  |
 | variant_title | string |  no  |  |
 | product_exists | boolean |  no  |  |
 | price | string |  no  |  |
 | admin_graphql_api_id | string |  no  |  |
 | quantity | number |  no  |  |
 | vendor | string |  no  |  |
 | fulfillment_service | string |  no  |  |
 | taxable | boolean |  no  |  |
 | name | string |  no  |  |
 | product_id | number |  no  |  |
 | price_set | [PriceSet](#PriceSet) |  no  |  |
 | tax_lines | [TaxLines](#TaxLines) |  no  |  |
 | requires_shipping | boolean |  no  |  |
 | gift_card | boolean |  no  |  |
 | total_discount_set | [TotalDiscountSet](#TotalDiscountSet) |  no  |  |

---


 
 
 #### [LineItemsArticle](#LineItemsArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | quantities | [Quantities](#Quantities) |  no  |  |
 | old_article_uid | string |  no  |  |
 | total_quantity | number |  no  |  |
 | manufacturer | [Manufacturer](#Manufacturer) |  no  |  |
 | price | [ArticlePrice](#ArticlePrice) |  no  |  |
 | track_inventory | boolean |  no  |  |
 | company | [Company](#Company) |  no  |  |
 | is_active | boolean |  no  |  |
 | date_meta | [FailOrderDateMeta](#FailOrderDateMeta) |  no  |  |
 | fragile | boolean |  no  |  |
 | marketplace_identifiers | [MarketplaceIdentifiers](#MarketplaceIdentifiers) |  no  |  |
 | size | string |  no  |  |
 | is_set | boolean |  no  |  |
 | dimension | [Dimension](#Dimension) |  no  |  |
 | weight | [Weight](#Weight) |  no  |  |
 | store | [Store](#Store) |  no  |  |
 | meta | [ArticleMeta](#ArticleMeta) |  no  |  |
 | uid | string |  no  |  |
 | brand | [ArticleBrand](#ArticleBrand) |  no  |  |
 | item_id | number |  no  |  |
 | fynd_article_code | string |  no  |  |
 | _id | string |  no  |  |
 | identifier | [LineItemsArticleIdentifier](#LineItemsArticleIdentifier) |  no  |  |
 | seller_identifier | string |  no  |  |
 | fynd_item_code | string |  no  |  |
 | country_of_origin | string |  no  |  |

---


 
 
 #### [Quantities](#Quantities)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | not_available | [NotAvailable](#NotAvailable) |  no  |  |
 | sellable | [Sellable](#Sellable) |  no  |  |
 | order_committed | [OrderCommitted](#OrderCommitted) |  no  |  |
 | damaged | [Damaged](#Damaged) |  no  |  |

---


 
 
 #### [NotAvailable](#NotAvailable)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number |  no  |  |
 | updated_at | string |  no  |  |

---


 
 
 #### [Sellable](#Sellable)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number |  no  |  |
 | updated_at | string |  no  |  |

---


 
 
 #### [OrderCommitted](#OrderCommitted)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number |  no  |  |
 | updated_at | string |  no  |  |

---


 
 
 #### [Damaged](#Damaged)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | updated_at | string |  no  |  |
 | count | number |  no  |  |

---


 
 
 #### [Manufacturer](#Manufacturer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_default | boolean |  no  |  |
 | address | string |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [ArticlePrice](#ArticlePrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | marked | number |  no  |  |
 | currency | string |  no  |  |
 | effective | number |  no  |  |
 | transfer | number |  no  |  |

---


 
 
 #### [Company](#Company)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | company_type | string |  no  |  |
 | business_type | string |  no  |  |
 | company_name | string |  no  |  |
 | created_on | string |  no  |  |
 | pan_no | string |  no  |  |
 | return_allowed | boolean |  no  |  |
 | meta | string |  no  |  |
 | exchange_allowed | boolean |  no  |  |
 | agreement_start_date | string |  no  |  |
 | exchange_within_days | number |  no  |  |
 | payment_procesing_charge | number |  no  |  |
 | fynd_a_fit_available | boolean |  no  |  |
 | modified_on | string |  no  |  |
 | return_within_days | number |  no  |  |

---


 
 
 #### [FailOrderDateMeta](#FailOrderDateMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | added_on_store | string |  no  |  |
 | inventory_updated_on | string |  no  |  |
 | created_on | string |  no  |  |
 | modified_on | string |  no  |  |

---


 
 
 #### [MarketplaceIdentifiers](#MarketplaceIdentifiers)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tatacliq_luxury | [TatacliqLuxury](#TatacliqLuxury) |  no  |  |

---


 
 
 #### [TatacliqLuxury](#TatacliqLuxury)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sku | string |  no  |  |

---


 
 
 #### [Dimension](#Dimension)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | height | number |  no  |  |
 | width | number |  no  |  |
 | unit | string |  no  |  |
 | length | number |  no  |  |
 | is_default | boolean |  no  |  |

---


 
 
 #### [Weight](#Weight)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_default | boolean |  no  |  |
 | unit | string |  no  |  |
 | shipping | number |  no  |  |

---


 
 
 #### [Store](#Store)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |

---


 
 
 #### [ArticleMeta](#ArticleMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | service | string |  no  |  |

---


 
 
 #### [ArticleBrand](#ArticleBrand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | id | number |  no  |  |

---


 
 
 #### [LineItemsArticleIdentifier](#LineItemsArticleIdentifier)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sku_code | string |  no  |  |

---


 
 
 #### [PriceSet](#PriceSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shop_money | [PriceSetShopMoney](#PriceSetShopMoney) |  no  |  |
 | presentment_money | [PriceSetPresentmentMoney](#PriceSetPresentmentMoney) |  no  |  |

---


 
 
 #### [PriceSetShopMoney](#PriceSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [PriceSetPresentmentMoney](#PriceSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [TaxLines](#TaxLines)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | price | string |  no  |  |
 | rate | number |  no  |  |
 | price_set | [TaxLinesPriceSet](#TaxLinesPriceSet) |  no  |  |

---


 
 
 #### [TaxLinesPriceSet](#TaxLinesPriceSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shop_money | [TaxLinesPriceSetShopMoney](#TaxLinesPriceSetShopMoney) |  no  |  |
 | presentment_money | [TaxLinesPriceSetPresentmentMoney](#TaxLinesPriceSetPresentmentMoney) |  no  |  |

---


 
 
 #### [TaxLinesPriceSetShopMoney](#TaxLinesPriceSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [TaxLinesPriceSetPresentmentMoney](#TaxLinesPriceSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency_code | string |  no  |  |
 | amount | string |  no  |  |

---


 
 
 #### [TotalDiscountSet](#TotalDiscountSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | presentment_money | [TotalDiscountSetPresentmentMoney](#TotalDiscountSetPresentmentMoney) |  no  |  |
 | shop_money | [TotalDiscountSetShopMoney](#TotalDiscountSetShopMoney) |  no  |  |

---


 
 
 #### [TotalDiscountSetPresentmentMoney](#TotalDiscountSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [TotalDiscountSetShopMoney](#TotalDiscountSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [BillingAddress](#BillingAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string |  no  |  |
 | city | string |  no  |  |
 | zip | string |  no  |  |
 | last_name | string |  no  |  |
 | address2 | string |  no  |  |
 | latitude | number |  no  |  |
 | longitude | number |  no  |  |
 | province_code | string |  no  |  |
 | phone | string |  no  |  |
 | company | string |  no  |  |
 | name | string |  no  |  |
 | country | string |  no  |  |
 | country_code | string |  no  |  |
 | first_name | string |  no  |  |
 | province | string |  no  |  |

---


 
 
 #### [TotalShippingPriceSet](#TotalShippingPriceSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shop_money | [TotalShippingPriceSetShopMoney](#TotalShippingPriceSetShopMoney) |  no  |  |
 | presentment_money | [TotalShippingPriceSetPresentmentMoney](#TotalShippingPriceSetPresentmentMoney) |  no  |  |

---


 
 
 #### [TotalShippingPriceSetShopMoney](#TotalShippingPriceSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [TotalShippingPriceSetPresentmentMoney](#TotalShippingPriceSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [Customer](#Customer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_at | string |  no  |  |
 | id | number |  no  |  |
 | last_name | string |  no  |  |
 | state | string |  no  |  |
 | last_order_id | number |  no  |  |
 | note | string |  no  |  |
 | verified_email | boolean |  no  |  |
 | phone | string |  no  |  |
 | accepts_marketing | boolean |  no  |  |
 | first_name | string |  no  |  |
 | tags | string |  no  |  |
 | last_order_name | string |  no  |  |
 | orders_count | number |  no  |  |
 | total_spent | string |  no  |  |
 | tax_exempt | boolean |  no  |  |
 | currency | string |  no  |  |
 | accepts_marketing_updated_at | string |  no  |  |
 | email | string |  no  |  |
 | updated_at | string |  no  |  |
 | admin_graphql_api_id | string |  no  |  |
 | default_address | [DefaultAddress](#DefaultAddress) |  no  |  |

---


 
 
 #### [DefaultAddress](#DefaultAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | last_name | string |  no  |  |
 | name | string |  no  |  |
 | province_code | string |  no  |  |
 | country_code | string |  no  |  |
 | is_default | boolean |  no  |  |
 | id | number |  no  |  |
 | customer_id | number |  no  |  |
 | first_name | string |  no  |  |
 | address1 | string |  no  |  |
 | phone | string |  no  |  |
 | country_name | string |  no  |  |
 | company | string |  no  |  |
 | address2 | string |  no  |  |
 | city | string |  no  |  |
 | province | string |  no  |  |
 | country | string |  no  |  |
 | zip | string |  no  |  |

---


 
 
 #### [TotalLineItemsPriceSet](#TotalLineItemsPriceSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shop_money | [TotalLineItemsPriceSetShopMoney](#TotalLineItemsPriceSetShopMoney) |  no  |  |
 | presentment_money | [TotalLineItemsPriceSetPresentmentMoney](#TotalLineItemsPriceSetPresentmentMoney) |  no  |  |

---


 
 
 #### [TotalLineItemsPriceSetShopMoney](#TotalLineItemsPriceSetShopMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [TotalLineItemsPriceSetPresentmentMoney](#TotalLineItemsPriceSetPresentmentMoney)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [OrderShippingAddress](#OrderShippingAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string |  no  |  |
 | zip | string |  no  |  |
 | address2 | string |  no  |  |
 | country_code | string |  no  |  |
 | country | string |  no  |  |
 | last_name | string |  no  |  |
 | province_code | string |  no  |  |
 | first_name | string |  no  |  |
 | phone | string |  no  |  |
 | province | string |  no  |  |
 | latitude | number |  no  |  |
 | longitude | number |  no  |  |
 | city | string |  no  |  |
 | company | string |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [OrderListing](#OrderListing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[OrderItems](#OrderItems)] |  yes  |  |
 | filters | [Filters](#Filters) |  yes  |  |
 | next_order_status | string |  yes  |  |
 | page | [PlatformOrderPage](#PlatformOrderPage) |  yes  |  |
 | applied_filters | [AppliedFilters](#AppliedFilters) |  yes  |  |

---


 
 
 #### [OrderItems](#OrderItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [PlatformOrderUserInfo](#PlatformOrderUserInfo) |  no  |  |
 | delivery_address | [PlatformDeliveryAddress](#PlatformDeliveryAddress) |  no  |  |
 | channel | [Channel](#Channel) |  no  |  |
 | id | string |  no  |  |
 | application | [PlatformApplication](#PlatformApplication) |  no  |  |
 | shipments | [PlatformShipment](#PlatformShipment) |  no  |  |
 | created_at | string |  no  |  |
 | total_shipments_in_order | number |  no  |  |

---


 
 
 #### [PlatformOrderUserInfo](#PlatformOrderUserInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mobile | string |  no  |  |
 | first_name | string |  no  |  |
 | gender | string |  no  |  |
 | email | string |  no  |  |
 | last_name | string |  no  |  |
 | is_anonymous_user | boolean |  no  |  |
 | uid | number |  no  |  |
 | avis_user_id | string |  no  |  |

---


 
 
 #### [PlatformDeliveryAddress](#PlatformDeliveryAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | area | string |  no  |  |
 | state | string |  no  |  |
 | country | string |  no  |  |
 | version | string |  no  |  |
 | address1 | string |  no  |  |
 | updated_at | string |  no  |  |
 | city | string |  no  |  |
 | landmark | string |  no  |  |
 | created_at | string |  no  |  |
 | name | string |  no  |  |
 | address | string |  no  |  |
 | phone | string |  no  |  |
 | latitude | number |  no  |  |
 | longitude | number |  no  |  |
 | address_type | string |  no  |  |
 | email | string |  no  |  |
 | pincode | string |  no  |  |
 | address2 | string |  no  |  |
 | contact_person | string |  no  |  |
 | address_category | string |  no  |  |

---


 
 
 #### [Channel](#Channel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | logo | string |  no  |  |

---


 
 
 #### [PlatformApplication](#PlatformApplication)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |

---


 
 
 #### [PlatformShipment](#PlatformShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | [PlatformShipmentStatus](#PlatformShipmentStatus) |  no  |  |
 | bags | [Bags](#Bags) |  no  |  |
 | prices | [ShipmentPrices](#ShipmentPrices) |  no  |  |
 | id | string |  no  |  |
 | gst | [ShipmentGst](#ShipmentGst) |  no  |  |
 | total_shipment_bags | number |  no  |  |

---


 
 
 #### [PlatformShipmentStatus](#PlatformShipmentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | bag_list | [number] |  no  |  |
 | created_at | string |  no  |  |
 | status | string |  no  |  |
 | name | string |  no  |  |
 | progress | number |  no  |  |
 | shipment_id | string |  no  |  |
 | current_shipment_status | string |  no  |  |
 | color_code | string |  no  |  |

---


 
 
 #### [Bags](#Bags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item | [BagItem](#BagItem) |  no  |  |
 | id | number |  no  |  |

---


 
 
 #### [BagItem](#BagItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | size | string |  no  |  |
 | slug_key | string |  no  |  |
 | can_return | boolean |  no  |  |
 | brand_id | number |  no  |  |
 | l2_category | [string] |  no  |  |
 | name | string |  no  |  |
 | code | string |  no  |  |
 | can_cancel | boolean |  no  |  |
 | attributes | [BagItemAttributes](#BagItemAttributes) |  no  |  |
 | l3_category_name | string |  no  |  |
 | l3_category | number |  no  |  |
 | l1_category | [string] |  no  |  |
 | image | [string] |  no  |  |
 | brand | string |  no  |  |
 | last_updated_at | string |  no  |  |

---


 
 
 #### [BagItemAttributes](#BagItemAttributes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_code | string |  no  |  |
 | brand_name | string |  no  |  |
 | country_of_origin | string |  no  |  |

---


 
 
 #### [ShipmentPrices](#ShipmentPrices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | refund_amount | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | transfer_price | number |  no  |  |
 | coupon_value | number |  no  |  |
 | amount_paid | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | coupon_effective_discount | number |  no  |  |
 | cod_charges | number |  no  |  |
 | refund_credit | number |  no  |  |
 | added_to_fynd_cash | boolean |  no  |  |
 | gst_tax_percentage | number |  no  |  |
 | price_marked | number |  no  |  |
 | price_effective | number |  no  |  |
 | discount | number |  no  |  |
 | promotion_effective_discount | number |  no  |  |
 | amount_paid_roundoff | number |  no  |  |
 | fynd_credits | number |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | cashback | number |  no  |  |
 | value_of_good | number |  no  |  |

---


 
 
 #### [Payments](#Payments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_active | boolean |  no  |  |
 | display_name | string |  no  |  |
 | logo | string |  no  |  |
 | source | string |  no  |  |
 | source_nickname | string |  no  |  |
 | display_priority | number |  no  |  |
 | id | number |  no  |  |
 | mode | string |  no  |  |
 | payment_identifier | string |  no  |  |

---


 
 
 #### [Filters](#Filters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | stage | [Stage](#Stage) |  no  |  |
 | stages | [Stages](#Stages) |  no  |  |

---


 
 
 #### [Stage](#Stage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text | string |  no  |  |
 | value | string |  no  |  |
 | is_default | boolean |  no  |  |
 | filters | [StagesFilters](#StagesFilters) |  no  |  |

---


 
 
 #### [StagesFilters](#StagesFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text | string |  no  |  |
 | value | string |  no  |  |
 | type | string |  no  |  |
 | options | [Options](#Options) |  no  |  |

---


 
 
 #### [Options](#Options)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [PlatformOrderPage](#PlatformOrderPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | next | string |  no  |  |
 | previous | string |  no  |  |
 | type | string |  no  |  |
 | size | number |  no  |  |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | total | number |  no  |  |
 | item_total | [ItemTotal](#ItemTotal) |  no  |  |

---


 
 
 #### [AppliedFilters](#AppliedFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | stage | string |  no  |  |
 | stores | [string] |  no  |  |
 | dp | [number] |  no  |  |
 | from_date | string |  no  |  |
 | to_date | string |  no  |  |

---


 
 
 #### [OrderDetails](#OrderDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[OrderPicklistListing](#OrderPicklistListing)] |  yes  |  |
 | page | [PlatformOrderPage](#PlatformOrderPage) |  yes  |  |
 | filters | [Filters](#Filters) |  yes  |  |
 | next_order_status | string |  yes  |  |
 | applied_filters | [AppliedFilters](#AppliedFilters) |  yes  |  |

---


 
 
 #### [OrderDetailsItem](#OrderDetailsItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [PlatformOrderUserInfo](#PlatformOrderUserInfo) |  no  |  |
 | delivery_address | [PlatformDeliveryAddress](#PlatformDeliveryAddress) |  no  |  |
 | channel | [Channel](#Channel) |  no  |  |
 | fyndstore_emp | string |  no  |  |
 | ordering_store | string |  no  |  |
 | breakup_values | [PlatformBreakupValues](#PlatformBreakupValues) |  no  |  |
 | id | string |  no  |  |
 | application | [PlatformApplication](#PlatformApplication) |  no  |  |
 | shipments | [PlatformShipmentDetails](#PlatformShipmentDetails) |  no  |  |
 | created_at | string |  no  |  |
 | total_shipments_in_order | number |  no  |  |
 | payments | [ItemsPayments](#ItemsPayments) |  no  |  |

---


 
 
 #### [PlatformBreakupValues](#PlatformBreakupValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  |  |
 | value | number |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [ArticleAssignment](#ArticleAssignment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | strategy | string |  no  |  |
 | level | string |  no  |  |

---


 
 
 #### [PlatformShipmentDetails](#PlatformShipmentDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | [PlatformShipmentDetailsStatus](#PlatformShipmentDetailsStatus) |  no  |  |
 | bags | [BagsDetails](#BagsDetails) |  no  |  |
 | prices | [ShipmentPrices](#ShipmentPrices) |  no  |  |
 | breakup_values | [ShipmentBreakupValues](#ShipmentBreakupValues) |  no  |  |
 | id | string |  no  |  |
 | dp_details | [DpDetails](#DpDetails) |  no  |  |
 | invoice | [ShipmentInvoice](#ShipmentInvoice) |  no  |  |
 | fulfilling_store | [PlatformFulfillingStore](#PlatformFulfillingStore) |  no  |  |
 | payments | [Payments](#Payments) |  no  |  |
 | gst | [ShipmentGst](#ShipmentGst) |  no  |  |
 | company | [Company](#Company) |  no  |  |
 | brand | [PlatformShipmentDetailsBrand](#PlatformShipmentDetailsBrand) |  no  |  |
 | coupon | string |  no  |  |
 | order_source | string |  no  |  |
 | is_not_fynd_source | boolean |  no  |  |
 | comment | string |  no  |  |
 | promise | [Promise](#Promise) |  no  |  |
 | tracking_details | [ShipmentTrackingDetails](#ShipmentTrackingDetails) |  no  |  |
 | is_fynd_coupon | boolean |  no  |  |
 | order_type | string |  no  |  |
 | total_shipment_bags | number |  no  |  |
 | pod | string |  no  |  |
 | lock_status | boolean |  no  |  |
 | ordering_channel | string |  no  |  |
 | credit_note_id | string |  no  |  |
 | auto_trigger_dp_assignment | boolean |  no  |  |
 | packaging_type | string |  no  |  |
 | dates | [ShipmentDates](#ShipmentDates) |  no  |  |

---


 
 
 #### [PlatformShipmentDetailsStatus](#PlatformShipmentDetailsStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | bag_list | [number] |  no  |  |
 | created_at | string |  no  |  |
 | status | string |  no  |  |
 | name | string |  no  |  |
 | progress | number |  no  |  |
 | shipment_id | string |  no  |  |
 | current_shipment_status | string |  no  |  |
 | color_code | string |  no  |  |

---


 
 
 #### [BagsDetails](#BagsDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | financial_breakup | [[BagFinancialBreakup](#BagFinancialBreakup)] |  no  |  |
 | status | [BagCurrStatus](#BagCurrStatus) |  no  |  |
 | item | [BagItem](#BagItem) |  no  |  |
 | article | [BagArticle](#BagArticle) |  no  |  |
 | id | number |  no  |  |
 | prices | [BagPrices](#BagPrices) |  no  |  |
 | gst_details | [GstDetails](#GstDetails) |  no  |  |
 | breakup_values | [BagBreakupValues](#BagBreakupValues) |  no  |  |
 | update_time | number |  no  |  |
 | current_status | [BagCurrentStatus](#BagCurrentStatus) |  no  |  |
 | bag_status | [BagStatus](#BagStatus) |  no  |  |

---


 
 
 #### [BagFinancialBreakup](#BagFinancialBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value_of_good | number |  no  |  |
 | hsn_code | string |  no  |  |
 | price_effective | number |  no  |  |
 | cod_charges | number |  no  |  |
 | gst_fee | string |  no  |  |
 | fynd_credits | number |  no  |  |
 | refund_amount | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | transfer_price | number |  no  |  |
 | amount_paid_roundoff | number |  no  |  |
 | coupon_value | number |  no  |  |
 | amount_paid | number |  no  |  |
 | gst_tax_percentage | number |  no  |  |
 | size | string |  no  |  |
 | total_units | number |  no  |  |
 | discount | number |  no  |  |
 | coupon_effective_discount | number |  no  |  |
 | cashback | number |  no  |  |
 | promotion_effective_discount | number |  no  |  |
 | gst_tag | string |  no  |  |
 | delivery_charge | number |  no  |  |
 | refund_credit | number |  no  |  |
 | price_marked | number |  no  |  |
 | identifiers | [Identifiers](#Identifiers) |  no  |  |
 | item_name | string |  no  |  |
 | added_to_fynd_cash | boolean |  no  |  |
 | brand_calculated_amount | number |  no  |  |

---


 
 
 #### [Identifiers](#Identifiers)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ean | string |  no  |  |

---


 
 
 #### [BagCurrStatus](#BagCurrStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enable_tracking | boolean |  no  |  |
 | is_customer_return_allowed | boolean |  no  |  |
 | is_active | boolean |  no  |  |
 | is_returnable | boolean |  no  |  |
 | can_be_cancelled | boolean |  no  |  |

---


 
 
 #### [BagArticle](#BagArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifiers | [ArticleIdentifiers](#ArticleIdentifiers) |  no  |  |
 | esp_modified | boolean |  no  |  |
 | is_set | boolean |  no  |  |
 | size | string |  no  |  |
 | code | string |  no  |  |
 | set | [Set](#Set) |  no  |  |
 | seller_identifier | string |  no  |  |
 | return_config | [BagArticleReturnConfig](#BagArticleReturnConfig) |  no  |  |
 | _id | string |  no  |  |
 | uid | string |  no  |  |
 | child_details | string |  no  |  |

---


 
 
 #### [ArticleIdentifiers](#ArticleIdentifiers)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ean | string |  no  |  |

---


 
 
 #### [Set](#Set)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | quantity | number |  no  |  |
 | size_distribution | [SetSizeDistribution](#SetSizeDistribution) |  no  |  |

---


 
 
 #### [SetSizeDistribution](#SetSizeDistribution)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sizes | [Sizes](#Sizes) |  no  |  |

---


 
 
 #### [Sizes](#Sizes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | size | string |  no  |  |
 | pieces | number |  no  |  |

---


 
 
 #### [BagArticleReturnConfig](#BagArticleReturnConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | time | number |  no  |  |
 | unit | string |  no  |  |
 | returnable | boolean |  no  |  |

---


 
 
 #### [GstDetails](#GstDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_calculated_amount | number |  no  |  |
 | gst_fee | string |  no  |  |
 | gst_tag | string |  no  |  |
 | hsn_code | string |  no  |  |
 | value_of_good | number |  no  |  |
 | gst_tax_percentage | number |  no  |  |
 | is_default_hsn_code | boolean |  no  |  |

---


 
 
 #### [BagBreakupValues](#BagBreakupValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | display | string |  no  |  |
 | value | number |  no  |  |

---


 
 
 #### [BagCurrentStatus](#BagCurrentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | updated_at | string |  no  |  |
 | bag_state_mapper | [BagStateMapper](#BagStateMapper) |  no  |  |
 | status | string |  no  |  |
 | state_type | string |  no  |  |

---


 
 
 #### [BagStateMapper](#BagStateMapper)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_state_name | string |  no  |  |
 | is_active | boolean |  no  |  |
 | display_name | string |  no  |  |
 | name | string |  no  |  |
 | app_display_name | string |  no  |  |

---


 
 
 #### [BagStatus](#BagStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |
 | state_type | string |  no  |  |
 | updated_at | string |  no  |  |
 | bag_state_mapper | [BagStatusBagStateMapper](#BagStatusBagStateMapper) |  no  |  |

---


 
 
 #### [BagStatusBagStateMapper](#BagStatusBagStateMapper)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_active | boolean |  no  |  |
 | display_name | string |  no  |  |
 | name | string |  no  |  |
 | app_display_name | string |  no  |  |
 | app_state_name | string |  no  |  |

---


 
 
 #### [BagPrices](#BagPrices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cashback | number |  no  |  |
 | refund_credit | number |  no  |  |
 | coupon_value | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | fynd_credits | number |  no  |  |
 | price_marked | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | value_of_good | number |  no  |  |
 | amount_paid_roundoff | number |  no  |  |
 | amount_paid | number |  no  |  |
 | cod_charges | number |  no  |  |
 | price_effective | number |  no  |  |
 | refund_amount | number |  no  |  |
 | discount | number |  no  |  |

---


 
 
 #### [ShipmentBreakupValues](#ShipmentBreakupValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | display | string |  no  |  |
 | value | number |  no  |  |

---


 
 
 #### [DpDetails](#DpDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst_tag | string |  no  |  |

---


 
 
 #### [ShipmentInvoice](#ShipmentInvoice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_type | string |  no  |  |
 | updated_date | string |  no  |  |
 | invoice_url | string |  no  |  |
 | label_url | string |  no  |  |
 | payment_mode | string |  no  |  |
 | amount_to_collect | number |  no  |  |
 | rto_address | [RtoAddress](#RtoAddress) |  no  |  |

---


 
 
 #### [RtoAddress](#RtoAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | id | number |  no  |  |
 | phone | string |  no  |  |
 | location_type | string |  no  |  |
 | store_address_json | [StoreAddressJson](#StoreAddressJson) |  no  |  |
 | code | string |  no  |  |
 | address1 | string |  no  |  |
 | city | string |  no  |  |
 | country | string |  no  |  |
 | pincode | string |  no  |  |
 | company_id | number |  no  |  |
 | contact_person | string |  no  |  |
 | state | string |  no  |  |
 | store_email | string |  no  |  |
 | address2 | string |  no  |  |

---


 
 
 #### [StoreAddressJson](#StoreAddressJson)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string |  no  |  |
 | updated_at | string |  no  |  |
 | area | string |  no  |  |
 | state | string |  no  |  |
 | address_type | string |  no  |  |
 | city | string |  no  |  |
 | pincode | string |  no  |  |
 | address1 | string |  no  |  |
 | address2 | string |  no  |  |
 | latitude | number |  no  |  |
 | longitude | number |  no  |  |
 | email | string |  no  |  |
 | phone | string |  no  |  |
 | created_at | string |  no  |  |
 | contact_person | string |  no  |  |
 | address_category | string |  no  |  |
 | version | string |  no  |  |
 | landmark | string |  no  |  |

---


 
 
 #### [PlatformFulfillingStore](#PlatformFulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | packaging_material_count | number |  no  |  |
 | location_type | string |  no  |  |
 | code | string |  no  |  |
 | city | string |  no  |  |
 | meta | [FulfillingStoreMeta](#FulfillingStoreMeta) |  no  |  |
 | name | string |  no  |  |
 | is_active | boolean |  no  |  |
 | address1 | string |  no  |  |
 | store_email | string |  no  |  |
 | is_archived | boolean |  no  |  |
 | state | string |  no  |  |
 | address2 | string |  no  |  |
 | contact_person | string |  no  |  |
 | phone | string |  no  |  |
 | is_enabled_for_recon | boolean |  no  |  |
 | fulfillment_channel | string |  no  |  |
 | created_at | string |  no  |  |
 | id | number |  no  |  |
 | pincode | string |  no  |  |
 | brand_store_tags | [string] |  no  |  |
 | company_id | number |  no  |  |
 | store_address_json | [FulfillingStoreStoreAddressJson](#FulfillingStoreStoreAddressJson) |  no  |  |
 | updated_at | string |  no  |  |
 | login_username | string |  no  |  |
 | country | string |  no  |  |

---


 
 
 #### [FulfillingStoreMeta](#FulfillingStoreMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | additional_contact_details | [AdditionalContactDetails](#AdditionalContactDetails) |  no  |  |
 | documents | [Documents](#Documents) |  no  |  |
 | gst_number | string |  no  |  |
 | display_name | string |  no  |  |
 | product_return_config | [ProductReturnConfig](#ProductReturnConfig) |  no  |  |
 | allow_dp_assignment_from_fynd | boolean |  no  |  |
 | stage | string |  no  |  |
 | timing | [Timing](#Timing) |  no  |  |

---


 
 
 #### [AdditionalContactDetails](#AdditionalContactDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | number | [string] |  no  |  |

---


 
 
 #### [Documents](#Documents)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst | [Gst](#Gst) |  no  |  |

---


 
 
 #### [Gst](#Gst)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | legal_name | string |  no  |  |
 | type | string |  no  |  |
 | value | string |  no  |  |
 | verified | boolean |  no  |  |

---


 
 
 #### [ProductReturnConfig](#ProductReturnConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | on_same_store | boolean |  no  |  |

---


 
 
 #### [Timing](#Timing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | opening | [Opening](#Opening) |  no  |  |
 | weekday | string |  no  |  |
 | open | boolean |  no  |  |
 | closing | [Closing](#Closing) |  no  |  |

---


 
 
 #### [Opening](#Opening)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | minute | number |  no  |  |
 | hour | number |  no  |  |

---


 
 
 #### [Closing](#Closing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hour | number |  no  |  |
 | minute | number |  no  |  |

---


 
 
 #### [FulfillingStoreStoreAddressJson](#FulfillingStoreStoreAddressJson)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address2 | string |  no  |  |
 | area | string |  no  |  |
 | email | string |  no  |  |
 | phone | string |  no  |  |
 | state | string |  no  |  |
 | contact_person | string |  no  |  |
 | country | string |  no  |  |
 | pincode | string |  no  |  |
 | version | string |  no  |  |
 | created_at | string |  no  |  |
 | address_type | string |  no  |  |
 | city | string |  no  |  |
 | address1 | string |  no  |  |
 | landmark | string |  no  |  |
 | latitude | number |  no  |  |
 | longitude | number |  no  |  |
 | updated_at | string |  no  |  |
 | address_category | string |  no  |  |

---


 
 
 #### [ShipmentGst](#ShipmentGst)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_calculated_amount | number |  no  |  |
 | value_of_good | number |  no  |  |
 | gst_fee | number |  no  |  |

---


 
 
 #### [PlatformShipmentDetailsBrand](#PlatformShipmentDetailsBrand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credit_note_allowed | boolean |  no  |  |
 | brand_name | string |  no  |  |
 | modified_on | string |  no  |  |
 | id | number |  no  |  |
 | is_virtual_invoice | boolean |  no  |  |
 | created_on | string |  no  |  |
 | logo | string |  no  |  |

---


 
 
 #### [Promise](#Promise)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | timestamp | [Timestamp](#Timestamp) |  no  |  |

---


 
 
 #### [Timestamp](#Timestamp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | min | string |  no  |  |
 | max | string |  no  |  |

---


 
 
 #### [ShipmentTrackingDetails](#ShipmentTrackingDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |
 | time | string |  no  |  |
 | is_passed | boolean |  no  |  |
 | is_current | boolean |  no  |  |

---


 
 
 #### [ItemsPayments](#ItemsPayments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_priority | number |  no  |  |
 | id | number |  no  |  |
 | is_active | boolean |  no  |  |
 | display_name | string |  no  |  |
 | logo | string |  no  |  |
 | payment_identifier | string |  no  |  |
 | source_nickname | string |  no  |  |
 | mode | string |  no  |  |
 | source | string |  no  |  |

---


 
 
 #### [PlatformOrderDetailsPage](#PlatformOrderDetailsPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | next | string |  no  |  |
 | previous | string |  no  |  |

---


 
 
 #### [ShipmentDates](#ShipmentDates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | due_date | string |  no  |  |

---


 
 
 #### [OrderLanesCount](#OrderLanesCount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | stages | [[StageItem](#StageItem)] |  yes  |  |

---


 
 
 #### [StageItem](#StageItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number |  no  |  |
 | text | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [UpdateOrderReprocessResponse](#UpdateOrderReprocessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  |  |

---


 
 
 #### [PlatformOrderTrack](#PlatformOrderTrack)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | request_id | string |  yes  |  |
 | message | string |  yes  |  |
 | mobile | string |  yes  |  |
 | country_code | string |  yes  |  |
 | resend_timer | number |  yes  |  |
 | resend_token | string |  no  |  |

---


 
 
 #### [OrderPicklistListing](#OrderPicklistListing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [PlatformOrderUserInfo](#PlatformOrderUserInfo) |  no  |  |
 | delivery_address | [PlatformDeliveryAddress](#PlatformDeliveryAddress) |  no  |  |
 | channel | [Channel](#Channel) |  no  |  |
 | fyndstore_emp | string |  no  |  |
 | ordering_store | string |  no  |  |
 | breakup_values | [PlatformBreakupValues](#PlatformBreakupValues) |  no  |  |
 | id | string |  no  |  |
 | application | [PlatformApplication](#PlatformApplication) |  no  |  |
 | shipments | [PlatformShipmentDetails](#PlatformShipmentDetails) |  no  |  |
 | created_at | string |  no  |  |
 | total_shipments_in_order | number |  no  |  |
 | payments | [ItemsPayments](#ItemsPayments) |  no  |  |

---


 
 
 #### [Stages](#Stages)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text | string |  no  |  |
 | value | string |  no  |  |
 | is_default | boolean |  no  |  |
 | filters | [StagesFilters](#StagesFilters) |  no  |  |

---


 
 
 #### [ItemTotal](#ItemTotal)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | new | number |  no  |  |
 | processing | number |  no  |  |
 | returns | number |  no  |  |
 | all | number |  no  |  |

---


 
 
 #### [GetPingResponse](#GetPingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ping | string |  yes  |  |

---


 
 
 #### [GetShipmentAddressResponse](#GetShipmentAddressResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  |  |
 | data | [DataShipmentAddress](#DataShipmentAddress) |  yes  |  |
 | success | boolean |  yes  |  |

---


 
 
 #### [DataShipmentAddress](#DataShipmentAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | city | string |  no  |  |
 | country | string |  no  |  |
 | pincode | string |  no  |  |
 | phone | string |  no  |  |
 | area | string |  no  |  |
 | address | string |  no  |  |
 | landmark | string |  no  |  |
 | state | string |  no  |  |
 | address_type | string |  no  |  |
 | address_category | string |  no  |  |
 | email | string |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [UpdateShipmentAddressRequest](#UpdateShipmentAddressRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  yes  |  |
 | address | string |  yes  |  |
 | pincode | string |  yes  |  |
 | state | string |  yes  |  |
 | address_type | string |  yes  |  |
 | country | string |  yes  |  |
 | name | string |  yes  |  |
 | phone | string |  yes  |  |
 | area | string |  yes  |  |
 | landmark | string |  yes  |  |
 | city | string |  yes  |  |

---


 
 
 #### [UpdateShipmentAddressResponse](#UpdateShipmentAddressResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | message | string |  yes  |  |

---


 
 
 #### [ShipmentTrackResponse](#ShipmentTrackResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_list | [[ShipmentTrackResponseBagListItem](#ShipmentTrackResponseBagListItem)] |  yes  |  |
 | message | string |  yes  |  |
 | order_value | number |  yes  |  |

---


 
 
 #### [ShipmentTrackResponseBagListItem](#ShipmentTrackResponseBagListItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enable_tracking | boolean |  no  |  |
 | price | string |  no  |  |
 | time_slot | string |  no  |  |
 | product_name | string |  no  |  |
 | can_return | boolean |  no  |  |
 | order_date | string |  no  |  |
 | is_try_at_home | boolean |  no  |  |
 | breakup_values | [[ShipmentTrackResponseBagListItemBreakValues](#ShipmentTrackResponseBagListItemBreakValues)] |  no  |  |
 | statuses | [[ShipmentTrackResponseBagListItemStatuses](#ShipmentTrackResponseBagListItemStatuses)] |  no  |  |
 | is_active | boolean |  no  |  |
 | bag_id | string |  no  |  |
 | order_id | string |  no  |  |
 | size | string |  no  |  |
 | payment_mode_source | string |  no  |  |
 | dp_details | [ShipmentTrackResponseBagListItemDpDetails](#ShipmentTrackResponseBagListItemDpDetails) |  no  |  |
 | product_id | number |  no  |  |
 | product_image | [ShipmentTrackResponseBagListItemsProductImage](#ShipmentTrackResponseBagListItemsProductImage) |  no  |  |
 | brand_name | string |  no  |  |
 | price_marked | string |  no  |  |
 | status | string |  no  |  |
 | can_cancel | boolean |  no  |  |
 | payment_mode | string |  no  |  |
 | fynd_cash_msg | string |  no  |  |
 | delivery_address | string |  no  |  |

---


 
 
 #### [ShipmentTrackResponseBagListItemBreakValues](#ShipmentTrackResponseBagListItemBreakValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | display | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [ShipmentTrackResponseBagListItemStatuses](#ShipmentTrackResponseBagListItemStatuses)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | nps_rating | number |  no  |  |
 | nps_string | string |  no  |  |
 | progress_status | [[ShipmentTrackResponseBagListItemStatusesProgress](#ShipmentTrackResponseBagListItemStatusesProgress)] |  no  |  |
 | flow_type | string |  no  |  |
 | status_progress | number |  no  |  |
 | is_nps_done | boolean |  no  |  |
 | header_message | string |  no  |  |
 | is_delayed | string |  no  |  |
 | tracking_list | [[ShipmentTrackResponseBagListItemStatusesTrack](#ShipmentTrackResponseBagListItemStatusesTrack)] |  no  |  |

---


 
 
 #### [ShipmentTrackResponseBagListItemStatusesProgress](#ShipmentTrackResponseBagListItemStatusesProgress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | type | string |  no  |  |
 | state | boolean |  no  |  |

---


 
 
 #### [ShipmentTrackResponseBagListItemStatusesTrack](#ShipmentTrackResponseBagListItemStatusesTrack)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |
 | time | string |  no  |  |
 | is_passed | boolean |  no  |  |
 | is_current | boolean |  no  |  |

---


 
 
 #### [ShipmentTrackResponseBagListItemDpDetails](#ShipmentTrackResponseBagListItemDpDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tracking_no | string |  no  |  |
 | courier | string |  no  |  |

---


 
 
 #### [ShipmentTrackResponseBagListItemsProductImage](#ShipmentTrackResponseBagListItemsProductImage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aspect_ratio | string |  no  |  |
 | url | string |  no  |  |

---


 
 
 #### [UpdateShipmentStatusResponse](#UpdateShipmentStatusResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipments | string |  yes  |  |
 | error_shipments | [any] |  no  |  |

---


 
 
 #### [UpdateShipmentStatusBody](#UpdateShipmentStatusBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipments | string |  yes  |  |
 | force_transition | boolean |  yes  |  |
 | task | boolean |  yes  |  |

---


 
 
 #### [ShipmentReasonsResponse](#ShipmentReasonsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | message | string |  yes  |  |
 | reasons | [[ShipmentResponseReasons](#ShipmentResponseReasons)] |  yes  |  |

---


 
 
 #### [ShipmentResponseReasons](#ShipmentResponseReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason_id | number |  no  |  |
 | reason | string |  no  |  |

---


 
 
 #### [PlatformShipmentTrack](#PlatformShipmentTrack)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | results | [Results](#Results) |  yes  |  |

---


 
 
 #### [Results](#Results)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | awb | string |  no  |  |
 | updated_at | string |  no  |  |
 | last_location_recieved_at | string |  no  |  |
 | reason | string |  no  |  |
 | shipment_type | string |  no  |  |
 | status | string |  no  |  |
 | updated_time | string |  no  |  |
 | account_name | string |  no  |  |

---


 
 
 #### [ShipmentUpdateRequest](#ShipmentUpdateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bags | [string] |  yes  |  |
 | reason | string |  yes  |  |
 | comments | string |  yes  |  |
 | action | string |  yes  |  |

---


 
 
 #### [ShipmentUpdateResponse](#ShipmentUpdateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | message | string |  yes  |  |

---


 
 
 #### [UpdateProcessShipmenstRequestBody](#UpdateProcessShipmenstRequestBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_ids | [string] |  yes  |  |
 | expected_status | string |  yes  |  |

---


 
 
 #### [UpdateProcessShipmenstRequestResponse](#UpdateProcessShipmenstRequestResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | message | string |  yes  |  |

---


 
 
 #### [GetVoiceCallbackResponse](#GetVoiceCallbackResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  |  |

---


 
 
 #### [GetClickToCallResponse](#GetClickToCallResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  |  |

---


 
 
 #### [ApefaceApiError](#ApefaceApiError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---




