




##### [Back to Application docs](./README.md)

## Order Methods
Handles Platform websites OMS

* [getCustomerDetailsByShipmentId](#getcustomerdetailsbyshipmentid)
* [getOrderById](#getorderbyid)
* [getOrders](#getorders)
* [getPosOrderById](#getposorderbyid)
* [getShipmentById](#getshipmentbyid)
* [getShipmentReasons](#getshipmentreasons)
* [sendOtpToShipmentCustomer](#sendotptoshipmentcustomer)
* [trackShipment](#trackshipment)
* [updateShipmentStatus](#updateshipmentstatus)
* [verifyOtpShipmentCustomer](#verifyotpshipmentcustomer)



## Methods with example and description




### getCustomerDetailsByShipmentId
Get Customer Details by Shipment Id



```javascript
// Promise
const promise = applicationClient.order.getCustomerDetailsByShipmentId({  orderId : value,
 shipmentId : value });

// Async/Await
const data = await applicationClient.order.getCustomerDetailsByShipmentId({  orderId : value,
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


### getOrderById
Get details of an order



```javascript
// Promise
const promise = applicationClient.order.getOrderById({  orderId : value });

// Async/Await
const data = await applicationClient.order.getOrderById({  orderId : value });
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


### getOrders
Get all orders



```javascript
// Promise
const promise = applicationClient.order.getOrders({  pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value,
 status : value });

// Async/Await
const data = await applicationClient.order.getOrders({  pageNo : value,
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


### getPosOrderById
Get POS Order



```javascript
// Promise
const promise = applicationClient.order.getPosOrderById({  orderId : value });

// Async/Await
const data = await applicationClient.order.getPosOrderById({  orderId : value });
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


### getShipmentById
Get details of a shipment



```javascript
// Promise
const promise = applicationClient.order.getShipmentById({  shipmentId : value });

// Async/Await
const data = await applicationClient.order.getShipmentById({  shipmentId : value });
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
const promise = applicationClient.order.getShipmentReasons({  shipmentId : value });

// Async/Await
const data = await applicationClient.order.getShipmentReasons({  shipmentId : value });
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


### sendOtpToShipmentCustomer
Send and Resend Otp code to Order-Shipment customer



```javascript
// Promise
const promise = applicationClient.order.sendOtpToShipmentCustomer({  orderId : value,
 shipmentId : value });

// Async/Await
const data = await applicationClient.order.sendOtpToShipmentCustomer({  orderId : value,
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


### trackShipment
Track shipment



```javascript
// Promise
const promise = applicationClient.order.trackShipment({  shipmentId : value });

// Async/Await
const data = await applicationClient.order.trackShipment({  shipmentId : value });
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


### updateShipmentStatus
Update the shipment status



```javascript
// Promise
const promise = applicationClient.order.updateShipmentStatus({  shipmentId : value,
 body : value });

// Async/Await
const data = await applicationClient.order.updateShipmentStatus({  shipmentId : value,
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


### verifyOtpShipmentCustomer
Verify Otp code



```javascript
// Promise
const promise = applicationClient.order.verifyOtpShipmentCustomer({  orderId : value,
 shipmentId : value,
 body : value });

// Async/Await
const data = await applicationClient.order.verifyOtpShipmentCustomer({  orderId : value,
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


#### [ApefaceApiError](#ApefaceApiError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [Bags](#Bags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current_status | [CurrentStatus](#CurrentStatus)? |  yes  |  |
 | financial_breakup | [[FinancialBreakup](#FinancialBreakup)]? |  yes  |  |
 | id | number? |  yes  |  |
 | item | [Item](#Item)? |  yes  |  |
 | prices | [Prices](#Prices)? |  yes  |  |
 

---

#### [BagsForReorder](#BagsForReorder)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article_assignment | [BagsForReorderArticleAssignment](#BagsForReorderArticleAssignment)? |  yes  |  |
 | item_id | number? |  yes  |  |
 | item_size | string? |  yes  |  |
 | quantity | number? |  yes  |  |
 | seller_id | number? |  yes  |  |
 | store_id | number? |  yes  |  |
 

---

#### [BagsForReorderArticleAssignment](#BagsForReorderArticleAssignment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | level | string? |  yes  |  |
 | strategy | string? |  yes  |  |
 

---

#### [BreakupValues](#BreakupValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string? |  yes  |  |
 | name | string? |  yes  |  |
 | value | number? |  yes  |  |
 

---

#### [CurrentStatus](#CurrentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | journey_type | string? |  yes  |  |
 | name | string? |  yes  |  |
 | status | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [CustomerDetailsByShipmentId](#CustomerDetailsByShipmentId)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string |  no  |  |
 | name | string |  no  |  |
 | order_id | string |  no  |  |
 | phone | string |  no  |  |
 | shipment_id | string |  no  |  |
 

---

#### [DeliveryAddress](#DeliveryAddress)

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

#### [FinancialBreakup](#FinancialBreakup)

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

#### [FulfillingStore](#FulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | company_id | number? |  yes  |  |
 | company_name | string? |  yes  |  |
 | id | number? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [Identifiers](#Identifiers)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ean | string? |  yes  |  |
 | sku_code | string? |  yes  |  |
 

---

#### [Invoice](#Invoice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | invoice_url | string? |  yes  |  |
 | label_url | string? |  yes  |  |
 | updated_date | string? |  yes  |  |
 

---

#### [Item](#Item)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand | [ItemBrand](#ItemBrand)? |  yes  |  |
 | code | string? |  yes  |  |
 | id | number? |  yes  |  |
 | image | [string]? |  yes  |  |
 | name | string? |  yes  |  |
 | size | string? |  yes  |  |
 | slug_key | string? |  yes  |  |
 

---

#### [ItemBrand](#ItemBrand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [OrderById](#OrderById)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order | [OrderSchema](#OrderSchema) |  no  |  |
 

---

#### [OrderFilters](#OrderFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | statuses | [[OrderStatuses](#OrderStatuses)]? |  yes  |  |
 

---

#### [OrderList](#OrderList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [OrderFilters](#OrderFilters) |  no  |  |
 | items | [[OrderSchema](#OrderSchema)] |  no  |  |
 | page | [OrderPage](#OrderPage) |  no  |  |
 

---

#### [OrderPage](#OrderPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | item_total | number? |  yes  |  |
 | size | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [OrderSchema](#OrderSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bags_for_reorder | [[BagsForReorder](#BagsForReorder)]? |  yes  |  |
 | breakup_values | [[BreakupValues](#BreakupValues)]? |  yes  |  |
 | order_created_time | string? |  yes  |  |
 | order_id | string? |  yes  |  |
 | shipments | [[Shipments](#Shipments)]? |  yes  |  |
 | total_shipments_in_order | number? |  yes  |  |
 | user_info | [UserInfo](#UserInfo)? |  yes  |  |
 

---

#### [OrderStatuses](#OrderStatuses)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string? |  yes  |  |
 | is_selected | boolean? |  yes  |  |
 | value | number? |  yes  |  |
 

---

#### [PosOrderById](#PosOrderById)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order | [OrderSchema](#OrderSchema) |  no  |  |
 

---

#### [Prices](#Prices)

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

#### [Promise](#Promise)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | timestamp | [Timestamp](#Timestamp)? |  yes  |  |
 

---

#### [Reasons](#Reasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | feedback_type | string? |  yes  |  |
 | flow | string? |  yes  |  |
 | priority | number? |  yes  |  |
 | reason_id | number? |  yes  |  |
 | reason_text | string? |  yes  |  |
 | show_text_area | boolean? |  yes  |  |
 

---

#### [ReqBodyVerifyOTPShipment](#ReqBodyVerifyOTPShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | otp_code | string |  no  |  |
 | request_id | string |  no  |  |
 

---

#### [ResponseVerifyOTPShipment](#ResponseVerifyOTPShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 

---

#### [sendOTPApplicationResponse](#sendOTPApplicationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | request_id | string |  no  |  |
 | resend_timer | number |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [ShipmentById](#ShipmentById)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment | [Shipments](#Shipments) |  no  |  |
 

---

#### [ShipmentPayment](#ShipmentPayment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string? |  yes  |  |
 | mode | string? |  yes  |  |
 | status | string? |  yes  |  |
 

---

#### [ShipmentReasons](#ShipmentReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reasons | [[Reasons](#Reasons)] |  no  |  |
 

---

#### [Shipments](#Shipments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | awb_no | string? |  yes  |  |
 | bags | [[Bags](#Bags)]? |  yes  |  |
 | beneficiary_details | boolean? |  yes  |  |
 | breakup_values | [[BreakupValues](#BreakupValues)]? |  yes  |  |
 | can_break | string? |  yes  |  |
 | can_cancel | boolean? |  yes  |  |
 | can_return | boolean? |  yes  |  |
 | comment | string? |  yes  |  |
 | delivery_address | [DeliveryAddress](#DeliveryAddress)? |  yes  |  |
 | dp_name | string? |  yes  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore)? |  yes  |  |
 | invoice | [Invoice](#Invoice)? |  yes  |  |
 | need_help_url | string? |  yes  |  |
 | order_id | string? |  yes  |  |
 | order_type | string? |  yes  |  |
 | payment | [ShipmentPayment](#ShipmentPayment)? |  yes  |  |
 | prices | [Prices](#Prices)? |  yes  |  |
 | promise | [Promise](#Promise)? |  yes  |  |
 | shipment_created_at | string? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | shipment_status | [ShipmentStatus](#ShipmentStatus)? |  yes  |  |
 | size_info | string? |  yes  |  |
 | total_bags | number? |  yes  |  |
 | total_details | [ShipmentTotalDetails](#ShipmentTotalDetails)? |  yes  |  |
 | track_url | string? |  yes  |  |
 | tracking_details | [[TrackingDetails](#TrackingDetails)]? |  yes  |  |
 | traking_no | string? |  yes  |  |
 | user_info | [ShipmentUserInfo](#ShipmentUserInfo)? |  yes  |  |
 

---

#### [ShipmentStatus](#ShipmentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hex_code | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [ShipmentStatusUpdate](#ShipmentStatusUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | [string] |  no  |  |
 | status | boolean |  no  |  |
 

---

#### [ShipmentStatusUpdateBody](#ShipmentStatusUpdateBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | force_transition | boolean |  no  |  |
 | statuses | [[StatusesBody](#StatusesBody)] |  no  |  |
 

---

#### [ShipmentTotalDetails](#ShipmentTotalDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pieces | number? |  yes  |  |
 | sizes | number? |  yes  |  |
 | total_price | number? |  yes  |  |
 

---

#### [ShipmentTrack](#ShipmentTrack)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | results | [[Track](#Track)] |  no  |  |
 

---

#### [ShipmentUserInfo](#ShipmentUserInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | first_name | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 

---

#### [StatusesBody](#StatusesBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipments | string? |  yes  |  |
 | status | string? |  yes  |  |
 

---

#### [Timestamp](#Timestamp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | string? |  yes  |  |
 | min | string? |  yes  |  |
 

---

#### [Track](#Track)

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

#### [TrackingDetails](#TrackingDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_current | boolean? |  yes  |  |
 | is_passed | boolean? |  yes  |  |
 | status | string? |  yes  |  |
 | time | string? |  yes  |  |
 

---

#### [UserInfo](#UserInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 | name | string? |  yes  |  |
 

---




