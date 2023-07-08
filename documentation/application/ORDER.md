




##### [Back to Application docs](./README.md)

## Order Methods
Handles Platform websites OMS

* [getCustomerDetailsByShipmentId](#getcustomerdetailsbyshipmentid)
* [getInvoiceByShipmentId](#getinvoicebyshipmentid)
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


### getInvoiceByShipmentId
Get Invoice URL



```javascript
// Promise
const promise = order.getInvoiceByShipmentId({  shipmentId : value });

// Async/Await
const data = await order.getInvoiceByShipmentId({  shipmentId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes | ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID. |  



Use this API to get a generated Invoice URL for viewing or download.

*Returned Response:*




[ResponseGetInvoiceShipment](#ResponseGetInvoiceShipment)

Success, the code is valid and returns a SignedUrl




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


#### [ApefaceApiError](#ApefaceApiError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  |

---

#### [Bags](#Bags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || current_status | [CurrentStatus](#CurrentStatus) |  no  |  || financial_breakup | [[FinancialBreakup](#FinancialBreakup)] |  no  |  || id | number |  no  |  || item | [Item](#Item) |  no  |  || prices | [Prices](#Prices) |  no  |  |

---

#### [BagsForReorder](#BagsForReorder)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || article_assignment | [BagsForReorderArticleAssignment](#BagsForReorderArticleAssignment) |  no  |  || item_id | number |  no  |  || item_size | string |  no  |  || quantity | number |  no  |  || seller_id | number |  no  |  || store_id | number |  no  |  |

---

#### [BagsForReorderArticleAssignment](#BagsForReorderArticleAssignment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || level | string |  no  |  || strategy | string |  no  |  |

---

#### [BreakupValues](#BreakupValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display | string |  no  |  || name | string |  no  |  || value | number |  no  |  |

---

#### [CurrentStatus](#CurrentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || journey_type | string |  no  |  || name | string |  no  |  || status | string |  no  |  || updated_at | string |  no  |  |

---

#### [CustomerDetailsByShipmentId](#CustomerDetailsByShipmentId)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country | string |  yes  |  || name | string |  yes  |  || order_id | string |  yes  |  || phone | string |  yes  |  || shipment_id | string |  yes  |  |

---

#### [DeliveryAddress](#DeliveryAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address | string |  no  |  || address1 | string |  no  |  || address2 | string |  no  |  || address_category | string |  no  |  || address_type | string |  no  |  || area | string |  no  |  || city | string |  no  |  || contact_person | string |  no  |  || country | string |  no  |  || created_at | string |  no  |  || email | string |  no  |  || landmark | string |  no  |  || latitude | number |  no  |  || longitude | number |  no  |  || name | string |  no  |  || phone | string |  no  |  || pincode | string |  no  |  || state | string |  no  |  || updated_at | string |  no  |  || version | string |  no  |  |

---

#### [FinancialBreakup](#FinancialBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || added_to_fynd_cash | boolean |  no  |  || amount_paid | number |  no  |  || amount_paid_roundoff | number |  no  |  || brand_calculated_amount | number |  no  |  || cashback | number |  no  |  || cashback_applied | number |  no  |  || cod_charges | number |  no  |  || coupon_effective_discount | number |  no  |  || coupon_value | number |  no  |  || delivery_charge | number |  no  |  || discount | number |  no  |  || fynd_credits | number |  no  |  || gst_fee | string |  no  |  || gst_tag | string |  no  |  || gst_tax_percentage | number |  no  |  || hsn_code | string |  no  |  || identifiers | [Identifiers](#Identifiers) |  no  |  || item_name | string |  no  |  || price_effective | number |  no  |  || price_marked | number |  no  |  || promotion_effective_discount | number |  no  |  || refund_amount | number |  no  |  || refund_credit | number |  no  |  || size | string |  no  |  || total_units | number |  no  |  || transfer_price | number |  no  |  || value_of_good | number |  no  |  |

---

#### [FulfillingStore](#FulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || code | string |  no  |  || company_id | number |  no  |  || company_name | string |  no  |  || id | number |  no  |  || name | string |  no  |  |

---

#### [Identifiers](#Identifiers)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || ean | string |  no  |  || sku_code | string |  no  |  |

---

#### [Invoice](#Invoice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || invoice_url | string |  no  |  || label_url | string |  no  |  || updated_date | string |  no  |  |

---

#### [Item](#Item)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || brand | [ItemBrand](#ItemBrand) |  no  |  || code | string |  no  |  || id | number |  no  |  || image | [string] |  no  |  || name | string |  no  |  || size | string |  no  |  || slug_key | string |  no  |  |

---

#### [ItemBrand](#ItemBrand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || logo | string |  no  |  || name | string |  no  |  |

---

#### [OrderById](#OrderById)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || order | [OrderSchema](#OrderSchema) |  yes  |  |

---

#### [OrderFilters](#OrderFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || statuses | [[OrderStatuses](#OrderStatuses)] |  no  |  |

---

#### [OrderList](#OrderList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || filters | [OrderFilters](#OrderFilters) |  yes  |  || items | [[OrderSchema](#OrderSchema)] |  yes  |  || page | [OrderPage](#OrderPage) |  yes  |  |

---

#### [OrderPage](#OrderPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || current | number |  no  |  || has_next | boolean |  no  |  || item_total | number |  no  |  || size | number |  no  |  || type | string |  no  |  |

---

#### [OrderSchema](#OrderSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || bags_for_reorder | [[BagsForReorder](#BagsForReorder)] |  no  |  || breakup_values | [[BreakupValues](#BreakupValues)] |  no  |  || order_created_time | string |  no  |  || order_id | string |  no  |  || shipments | [[Shipments](#Shipments)] |  no  |  || total_shipments_in_order | number |  no  |  || user_info | [UserInfo](#UserInfo) |  no  |  |

---

#### [OrderStatuses](#OrderStatuses)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display | string |  no  |  || is_selected | boolean |  no  |  || value | number |  no  |  |

---

#### [PosOrderById](#PosOrderById)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || order | [OrderSchema](#OrderSchema) |  yes  |  |

---

#### [Prices](#Prices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || added_to_fynd_cash | boolean |  no  |  || amount_paid | number |  no  |  || amount_paid_roundoff | number |  no  |  || brand_calculated_amount | number |  no  |  || cashback | number |  no  |  || cashback_applied | number |  no  |  || cod_charges | number |  no  |  || coupon_effective_discount | number |  no  |  || coupon_value | number |  no  |  || delivery_charge | number |  no  |  || discount | number |  no  |  || fynd_credits | number |  no  |  || gst_tax_percentage | number |  no  |  || price_effective | number |  no  |  || price_marked | number |  no  |  || promotion_effective_discount | number |  no  |  || refund_amount | number |  no  |  || refund_credit | number |  no  |  || transfer_price | number |  no  |  || value_of_good | number |  no  |  |

---

#### [Promise](#Promise)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || timestamp | [Timestamp](#Timestamp) |  no  |  |

---

#### [Reasons](#Reasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || feedback_type | string |  no  |  || flow | string |  no  |  || priority | number |  no  |  || reason_id | number |  no  |  || reason_text | string |  no  |  || show_text_area | boolean |  no  |  |

---

#### [ReqBodyVerifyOTPShipment](#ReqBodyVerifyOTPShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || otp_code | string |  yes  |  || request_id | string |  yes  |  |

---

#### [ResponseGetInvoiceShipment](#ResponseGetInvoiceShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || presigned_type | string |  yes  |  || presigned_url | string |  yes  |  || shipment_id | string |  yes  |  || success | boolean |  yes  |  |

---

#### [ResponseVerifyOTPShipment](#ResponseVerifyOTPShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || success | boolean |  yes  |  |

---

#### [sendOTPApplicationResponse](#sendOTPApplicationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  yes  |  || request_id | string |  yes  |  || resend_timer | number |  yes  |  || success | boolean |  yes  |  |

---

#### [ShipmentById](#ShipmentById)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || shipment | [Shipments](#Shipments) |  yes  |  |

---

#### [ShipmentPayment](#ShipmentPayment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || logo | string |  no  |  || mode | string |  no  |  || status | string |  no  |  |

---

#### [ShipmentReasons](#ShipmentReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || reasons | [[Reasons](#Reasons)] |  yes  |  |

---

#### [Shipments](#Shipments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || awb_no | string |  no  |  || bags | [[Bags](#Bags)] |  no  |  || beneficiary_details | boolean |  no  |  || breakup_values | [[BreakupValues](#BreakupValues)] |  no  |  || can_break | string |  no  |  || can_cancel | boolean |  no  |  || can_return | boolean |  no  |  || comment | string |  no  |  || delivery_address | [DeliveryAddress](#DeliveryAddress) |  no  |  || dp_name | string |  no  |  || fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  || invoice | [Invoice](#Invoice) |  no  |  || need_help_url | string |  no  |  || order_id | string |  no  |  || order_type | string |  no  |  || payment | [ShipmentPayment](#ShipmentPayment) |  no  |  || prices | [Prices](#Prices) |  no  |  || promise | [Promise](#Promise) |  no  |  || shipment_created_at | string |  no  |  || shipment_id | string |  no  |  || shipment_status | [ShipmentStatus](#ShipmentStatus) |  no  |  || show_download_invoice | boolean |  no  |  || size_info | string |  no  |  || total_bags | number |  no  |  || total_details | [ShipmentTotalDetails](#ShipmentTotalDetails) |  no  |  || track_url | string |  no  |  || tracking_details | [[TrackingDetails](#TrackingDetails)] |  no  |  || traking_no | string |  no  |  || user_info | [ShipmentUserInfo](#ShipmentUserInfo) |  no  |  |

---

#### [ShipmentStatus](#ShipmentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || hex_code | string |  no  |  || title | string |  no  |  |

---

#### [ShipmentStatusUpdate](#ShipmentStatusUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | [string] |  yes  |  || status | boolean |  yes  |  |

---

#### [ShipmentStatusUpdateBody](#ShipmentStatusUpdateBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || force_transition | boolean |  yes  |  || statuses | [[StatusesBody](#StatusesBody)] |  yes  |  || task | boolean |  no  |  |

---

#### [ShipmentTotalDetails](#ShipmentTotalDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || pieces | number |  no  |  || sizes | number |  no  |  || total_price | number |  no  |  |

---

#### [ShipmentTrack](#ShipmentTrack)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || results | [[Track](#Track)] |  yes  |  |

---

#### [ShipmentUserInfo](#ShipmentUserInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || first_name | string |  no  |  || gender | string |  no  |  || last_name | string |  no  |  || mobile | string |  no  |  |

---

#### [StatusesBody](#StatusesBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || shipments | string |  no  |  || status | string |  no  |  |

---

#### [Timestamp](#Timestamp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || max | string |  no  |  || min | string |  no  |  || show_promise | boolean |  no  |  |

---

#### [Track](#Track)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || account_name | string |  no  |  || awb | string |  no  |  || last_location_recieved_at | string |  no  |  || reason | string |  no  |  || shipment_type | string |  no  |  || status | string |  no  |  || updated_at | string |  no  |  || updated_time | string |  no  |  |

---

#### [TrackingDetails](#TrackingDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_current | boolean |  no  |  || is_passed | boolean |  no  |  || status | string |  no  |  || time | string |  no  |  |

---

#### [UserInfo](#UserInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | string |  no  |  || gender | string |  no  |  || mobile | string |  no  |  || name | string |  no  |  |

---




