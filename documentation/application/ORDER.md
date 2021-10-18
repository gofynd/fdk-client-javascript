



##### [Back to Application docs](./README.md)

## Order Methods
Handles Platform websites OMS
* [getOrders](#getorders)
* [getOrderById](#getorderbyid)
* [getShipmentById](#getshipmentbyid)
* [getShipmentReasons](#getshipmentreasons)
* [updateShipmentStatus](#updateshipmentstatus)
* [trackShipment](#trackshipment)
* [getPosOrderById](#getposorderbyid)
* [getCustomerDetailsByShipmentId](#getcustomerdetailsbyshipmentid)
* [sendOtpToShipmentCustomer](#sendotptoshipmentcustomer)
* [verifyOtpShipmentCustomer](#verifyotpshipmentcustomer)



## Methods with example and description


### getOrders
Get all orders



```javascript
// Promise
const promise = order.getOrders({  pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value,
 status : value });

// Async/Await
const data = await order.getOrders({  pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value,
 status : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |    
| fromDate | string | no | The date from which the orders should be retrieved. |    
| toDate | string | no | The date till which the orders should be retrieved. |    
| status | number | no | A filter to retrieve orders by their current status such as _placed_, _delivered_, etc. |  



Use this API to retrieve all the orders.

*Returned Response:*




[OrderList](#OrderList)

Success. Returns all the orders. Check the example shown below or refer `OrderList` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getOrderById
Get details of an order



```javascript
// Promise
const promise = order.getOrderById({  orderId : value });

// Async/Await
const data = await order.getOrderById({  orderId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes | A unique number used for identifying and tracking your orders. |  



Use this API to retrieve order details such as tracking details, shipment, store information using Fynd Order ID.

*Returned Response:*




[OrderById](#OrderById)

Success. Check the example shown below or refer `OrderById` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getShipmentById
Get details of a shipment



```javascript
// Promise
const promise = order.getShipmentById({  shipmentId : value });

// Async/Await
const data = await order.getShipmentById({  shipmentId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes | ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID. |  



Use this API to retrieve shipment details such as price breakup, tracking details, store information, etc. using Shipment ID.

*Returned Response:*




[ShipmentById](#ShipmentById)

Success. Check the example shown below or refer `ShipmentById` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getShipmentReasons
Get reasons behind full or partial cancellation of a shipment



```javascript
// Promise
const promise = order.getShipmentReasons({  shipmentId : value });

// Async/Await
const data = await order.getShipmentReasons({  shipmentId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes | ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID. |  



Use this API to retrieve the issues that led to the cancellation of bags within a shipment.

*Returned Response:*




[ShipmentReasons](#ShipmentReasons)

Success. Check the example shown below or refer `ShipmentReasons` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateShipmentStatus
Update the shipment status



```javascript
// Promise
const promise = order.updateShipmentStatus({  shipmentId : value,
 body : value });

// Async/Await
const data = await order.updateShipmentStatus({  shipmentId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes | ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID. |  
| body | [ShipmentStatusUpdateBody](#ShipmentStatusUpdateBody) | yes | Request body |


Use this API to update the status of a shipment using its shipment ID.

*Returned Response:*




[ShipmentStatusUpdate](#ShipmentStatusUpdate)

Success. Check the example shown below or refer `ShipmentStatusUpdateBody` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### trackShipment
Track shipment



```javascript
// Promise
const promise = order.trackShipment({  shipmentId : value });

// Async/Await
const data = await order.trackShipment({  shipmentId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes | ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID. |  



Use this API to track a shipment using its shipment ID.

*Returned Response:*




[ShipmentTrack](#ShipmentTrack)

Success. Check the example shown below or refer `ShipmentTrack` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getPosOrderById
Get POS Order



```javascript
// Promise
const promise = order.getPosOrderById({  orderId : value });

// Async/Await
const data = await order.getPosOrderById({  orderId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes | A unique number used for identifying and tracking your orders. |  



Use this API to retrieve a POS order and all its details such as tracking details, shipment, store information using Fynd Order ID.

*Returned Response:*




[PosOrderById](#PosOrderById)

Success. Check the example shown below or refer `PosOrderById` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getCustomerDetailsByShipmentId
Get Customer Details by Shipment Id



```javascript
// Promise
const promise = order.getCustomerDetailsByShipmentId({  orderId : value,
 shipmentId : value });

// Async/Await
const data = await order.getCustomerDetailsByShipmentId({  orderId : value,
 shipmentId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes | A unique number used for identifying and tracking your orders. |   
| shipmentId | string | yes | ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID. |  



Use this API to retrieve customer details such as mobileno using Shipment ID.

*Returned Response:*




[CustomerDetailsByShipmentId](#CustomerDetailsByShipmentId)

Success. Check the example shown below or refer `CustomerDetailsByShipmentId` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### sendOtpToShipmentCustomer
Send and Resend Otp code to Order-Shipment customer



```javascript
// Promise
const promise = order.sendOtpToShipmentCustomer({  orderId : value,
 shipmentId : value });

// Async/Await
const data = await order.sendOtpToShipmentCustomer({  orderId : value,
 shipmentId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes | A unique number used for identifying and tracking your orders. |   
| shipmentId | string | yes | ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID. |  



Use this API to send OTP to the customer of the mapped Shipment.

*Returned Response:*




[sendOTPApplicationResponse](#sendOTPApplicationResponse)

Success to acknowledge the service was notified




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### verifyOtpShipmentCustomer
Verify Otp code



```javascript
// Promise
const promise = order.verifyOtpShipmentCustomer({  orderId : value,
 shipmentId : value,
 body : value });

// Async/Await
const data = await order.verifyOtpShipmentCustomer({  orderId : value,
 shipmentId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes | A unique number used for identifying and tracking your orders. |   
| shipmentId | string | yes | ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID. |  
| body | [ReqBodyVerifyOTPShipment](#ReqBodyVerifyOTPShipment) | yes | Request body |


Use this API to verify OTP and create a session token with custom payload.

*Returned Response:*




[ResponseVerifyOTPShipment](#ResponseVerifyOTPShipment)

Success, the code is valid and returns a session token




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas

 
 
 #### [OrderById](#OrderById)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order | [OrderSchema](#OrderSchema) |  yes  |  |

---


 
 
 #### [OrderList](#OrderList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[OrderSchema](#OrderSchema)] |  yes  |  |
 | page | [OrderPage](#OrderPage) |  yes  |  |
 | filters | [OrderFilters](#OrderFilters) |  yes  |  |

---


 
 
 #### [OrderPage](#OrderPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_total | number |  no  |  |
 | type | string |  no  |  |
 | size | number |  no  |  |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |

---


 
 
 #### [OrderFilters](#OrderFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | statuses | [[OrderStatuses](#OrderStatuses)] |  no  |  |

---


 
 
 #### [OrderStatuses](#OrderStatuses)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  |  |
 | value | number |  no  |  |
 | is_selected | boolean |  no  |  |

---


 
 
 #### [ReqBodyVerifyOTPShipment](#ReqBodyVerifyOTPShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | request_id | string |  yes  |  |
 | otp_code | string |  yes  |  |

---


 
 
 #### [ResponseVerifyOTPShipment](#ResponseVerifyOTPShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |

---


 
 
 #### [sendOTPApplicationResponse](#sendOTPApplicationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | request_id | string |  yes  |  |
 | message | string |  yes  |  |
 | resend_timer | number |  yes  |  |

---


 
 
 #### [ShipmentById](#ShipmentById)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment | [Shipments](#Shipments) |  yes  |  |

---


 
 
 #### [CustomerDetailsByShipmentId](#CustomerDetailsByShipmentId)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_id | string |  yes  |  |
 | shipment_id | string |  yes  |  |
 | name | string |  yes  |  |
 | phone | string |  yes  |  |
 | country | string |  yes  |  |

---


 
 
 #### [ShipmentReasons](#ShipmentReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reasons | [[Reasons](#Reasons)] |  yes  |  |

---


 
 
 #### [ShipmentStatusUpdateBody](#ShipmentStatusUpdateBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | statuses | [[StatusesBody](#StatusesBody)] |  yes  |  |
 | force_transition | boolean |  yes  |  |

---


 
 
 #### [StatusesBody](#StatusesBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |
 | shipments | string |  no  |  |

---


 
 
 #### [ShipmentStatusUpdate](#ShipmentStatusUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | [string] |  yes  |  |
 | status | boolean |  yes  |  |

---


 
 
 #### [ShipmentTrack](#ShipmentTrack)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | results | [[Track](#Track)] |  yes  |  |

---


 
 
 #### [OrderSchema](#OrderSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_id | string |  no  |  |
 | breakup_values | [[BreakupValues](#BreakupValues)] |  no  |  |
 | order_created_time | string |  no  |  |
 | shipments | [[Shipments](#Shipments)] |  no  |  |
 | total_shipments_in_order | number |  no  |  |
 | user_info | [UserInfo](#UserInfo) |  no  |  |
 | bags_for_reorder | [[BagsForReorder](#BagsForReorder)] |  no  |  |

---


 
 
 #### [BagsForReorder](#BagsForReorder)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_id | number |  no  |  |
 | item_size | string |  no  |  |
 | store_id | number |  no  |  |
 | seller_id | number |  no  |  |
 | quantity | number |  no  |  |
 | article_assignment | [BagsForReorderArticleAssignment](#BagsForReorderArticleAssignment) |  no  |  |

---


 
 
 #### [BagsForReorderArticleAssignment](#BagsForReorderArticleAssignment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | level | string |  no  |  |
 | strategy | string |  no  |  |

---


 
 
 #### [PosOrderById](#PosOrderById)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order | [OrderSchema](#OrderSchema) |  yes  |  |

---


 
 
 #### [Bags](#Bags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item | [Item](#Item) |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | current_status | [CurrentStatus](#CurrentStatus) |  no  |  |
 | id | number |  no  |  |
 | financial_breakup | [[FinancialBreakup](#FinancialBreakup)] |  no  |  |

---


 
 
 #### [Item](#Item)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand | [ItemBrand](#ItemBrand) |  no  |  |
 | name | string |  no  |  |
 | size | string |  no  |  |
 | slug_key | string |  no  |  |
 | image | [string] |  no  |  |
 | code | string |  no  |  |
 | id | number |  no  |  |

---


 
 
 #### [Prices](#Prices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_paid_roundoff | number |  no  |  |
 | fynd_credits | number |  no  |  |
 | cod_charges | number |  no  |  |
 | cashback | number |  no  |  |
 | added_to_fynd_cash | boolean |  no  |  |
 | price_marked | number |  no  |  |
 | transfer_price | number |  no  |  |
 | coupon_value | number |  no  |  |
 | price_effective | number |  no  |  |
 | refund_credit | number |  no  |  |
 | amount_paid | number |  no  |  |
 | refund_amount | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | gst_tax_percentage | number |  no  |  |
 | value_of_good | number |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | promotion_effective_discount | number |  no  |  |
 | discount | number |  no  |  |
 | coupon_effective_discount | number |  no  |  |
 | delivery_charge | number |  no  |  |

---


 
 
 #### [CurrentStatus](#CurrentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | updated_at | string |  no  |  |
 | status | string |  no  |  |
 | name | string |  no  |  |
 | journey_type | string |  no  |  |

---


 
 
 #### [FinancialBreakup](#FinancialBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_calculated_amount | number |  no  |  |
 | coupon_value | number |  no  |  |
 | amount_paid_roundoff | number |  no  |  |
 | gst_fee | string |  no  |  |
 | refund_credit | number |  no  |  |
 | cashback | number |  no  |  |
 | refund_amount | number |  no  |  |
 | value_of_good | number |  no  |  |
 | promotion_effective_discount | number |  no  |  |
 | size | string |  no  |  |
 | total_units | number |  no  |  |
 | discount | number |  no  |  |
 | amount_paid | number |  no  |  |
 | fynd_credits | number |  no  |  |
 | added_to_fynd_cash | boolean |  no  |  |
 | delivery_charge | number |  no  |  |
 | hsn_code | string |  no  |  |
 | coupon_effective_discount | number |  no  |  |
 | transfer_price | number |  no  |  |
 | identifiers | [Identifiers](#Identifiers) |  no  |  |
 | gst_tag | string |  no  |  |
 | price_marked | number |  no  |  |
 | price_effective | number |  no  |  |
 | cod_charges | number |  no  |  |
 | item_name | string |  no  |  |
 | cashback_applied | number |  no  |  |
 | gst_tax_percentage | number |  no  |  |

---


 
 
 #### [Identifiers](#Identifiers)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ean | string |  no  |  |
 | sku_code | string |  no  |  |

---


 
 
 #### [ItemBrand](#ItemBrand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | logo | string |  no  |  |

---


 
 
 #### [BreakupValues](#BreakupValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  |  |
 | value | number |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [DeliveryAddress](#DeliveryAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pincode | string |  no  |  |
 | landmark | string |  no  |  |
 | contact_person | string |  no  |  |
 | phone | string |  no  |  |
 | state | string |  no  |  |
 | version | string |  no  |  |
 | address1 | string |  no  |  |
 | created_at | string |  no  |  |
 | address_type | string |  no  |  |
 | address_category | string |  no  |  |
 | area | string |  no  |  |
 | city | string |  no  |  |
 | latitude | number |  no  |  |
 | longitude | number |  no  |  |
 | email | string |  no  |  |
 | country | string |  no  |  |
 | address2 | string |  no  |  |
 | updated_at | string |  no  |  |
 | name | string |  no  |  |
 | address | string |  no  |  |

---


 
 
 #### [FulfillingStore](#FulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |
 | id | number |  no  |  |
 | name | string |  no  |  |
 | company_id | number |  no  |  |

---


 
 
 #### [Invoice](#Invoice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | updated_date | string |  no  |  |
 | invoice_url | string |  no  |  |
 | label_url | string |  no  |  |

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


 
 
 #### [Reasons](#Reasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason_text | string |  no  |  |
 | show_text_area | boolean |  no  |  |
 | feedback_type | string |  no  |  |
 | flow | string |  no  |  |
 | reason_id | number |  no  |  |
 | priority | number |  no  |  |

---


 
 
 #### [ShipmentStatus](#ShipmentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | hex_code | string |  no  |  |

---


 
 
 #### [ShipmentUserInfo](#ShipmentUserInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gender | string |  no  |  |
 | mobile | string |  no  |  |
 | first_name | string |  no  |  |
 | last_name | string |  no  |  |

---


 
 
 #### [Shipments](#Shipments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_id | string |  no  |  |
 | breakup_values | [[BreakupValues](#BreakupValues)] |  no  |  |
 | track_url | string |  no  |  |
 | traking_no | string |  no  |  |
 | tracking_details | [[TrackingDetails](#TrackingDetails)] |  no  |  |
 | beneficiary_details | boolean |  no  |  |
 | can_return | boolean |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | need_help_url | string |  no  |  |
 | shipment_id | string |  no  |  |
 | total_bags | number |  no  |  |
 | delivery_address | [DeliveryAddress](#DeliveryAddress) |  no  |  |
 | invoice | [Invoice](#Invoice) |  no  |  |
 | comment | string |  no  |  |
 | order_type | string |  no  |  |
 | promise | [Promise](#Promise) |  no  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  |
 | bags | [[Bags](#Bags)] |  no  |  |
 | can_cancel | boolean |  no  |  |
 | payment | [ShipmentPayment](#ShipmentPayment) |  no  |  |
 | shipment_created_at | string |  no  |  |
 | shipment_status | [ShipmentStatus](#ShipmentStatus) |  no  |  |
 | user_info | [ShipmentUserInfo](#ShipmentUserInfo) |  no  |  |
 | size_info | string |  no  |  |
 | total_details | [ShipmentTotalDetails](#ShipmentTotalDetails) |  no  |  |

---


 
 
 #### [ShipmentTotalDetails](#ShipmentTotalDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_price | number |  no  |  |
 | sizes | number |  no  |  |
 | pieces | number |  no  |  |

---


 
 
 #### [ShipmentPayment](#ShipmentPayment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string |  no  |  |
 | mode | string |  no  |  |
 | status | string |  no  |  |

---


 
 
 #### [Track](#Track)

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


 
 
 #### [TrackingDetails](#TrackingDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_current | boolean |  no  |  |
 | status | string |  no  |  |
 | time | string |  no  |  |
 | is_passed | boolean |  no  |  |

---


 
 
 #### [UserInfo](#UserInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gender | string |  no  |  |
 | mobile | string |  no  |  |
 | name | string |  no  |  |
 | email | string |  no  |  |

---


 
 
 #### [ApefaceApiError](#ApefaceApiError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---




