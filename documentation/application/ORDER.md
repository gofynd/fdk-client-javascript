



##### [Back to Application docs](./README.md)

## Order Methods
Handles all platform order and shipment api(s)
* [getShipmentById](#getshipmentbyid)
* [getCustomerDetailsByShipmentId](#getcustomerdetailsbyshipmentid)
* [sendOtpToShipmentCustomer](#sendotptoshipmentcustomer)
* [getReasons](#getreasons)
* [verifyOtp](#verifyotp)
* [getOrders](#getorders)
* [getOrderById](#getorderbyid)
* [getPosOrderById](#getposorderbyid)
* [trackShipment](#trackshipment)



## Methods with example and description


### getShipmentById




```javascript
// Promise
const promise = order.getShipmentById({  shipmentId : value });

// Async/Await
const data = await order.getShipmentById({  shipmentId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes |  |  





*Returned Response:*




[ShipmentById](#ShipmentById)

We are processing the report!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "shipment": {
    "order_id": "FY62F3B8290150D13E36",
    "breakup_values": [
      {
        "name": "mrp_total",
        "display": "MRP Total",
        "value": 50
      },
      {
        "name": "sub_total",
        "display": "Sub Total",
        "value": 50
      },
      {
        "name": "coupon",
        "display": "Coupon",
        "value": 0
      },
      {
        "name": "discount",
        "display": "Discount",
        "value": 0
      },
      {
        "name": "promotion",
        "display": "Promotion",
        "value": 0
      },
      {
        "name": "reward_points",
        "display": "Reward Points",
        "value": 0
      },
      {
        "name": "cashback_applied",
        "display": "Cashback Applied",
        "value": 0
      },
      {
        "name": "delivery_charges",
        "display": "Delivery Charges",
        "value": 0
      },
      {
        "name": "cod_charges",
        "display": "COD Charges",
        "value": 0
      },
      {
        "name": "total",
        "display": "Total",
        "value": 50
      }
    ],
    "beneficiary_details": false,
    "need_help_url": "https://fynd.freshdesk.com/support/solutions/33000003306",
    "shipment_created_at": "2022-08-10T19:22:42.000Z",
    "shipment_id": "16601395620321798247K",
    "shipment_status": {
      "title": "DP Assigned",
      "value": "dp_assigned",
      "hex_code": "#FE8F46"
    },
    "track_url": "",
    "traking_no": "Tracking No.: 5923410031146",
    "awb_no": "5923410031146",
    "dp_name": "delhivery_jio_surface",
    "tracking_details": [
      {
        "status": "Order Placed",
        "time": "2022-08-10T19:22:55.000Z",
        "is_passed": true,
        "value": "processing"
      },
      {
        "status": "Order Confirmed",
        "time": "2022-08-18T19:11:02.000Z",
        "is_passed": true,
        "value": "confirmed"
      },
      {
        "status": "Delivery Partner Assigned",
        "time": "2022-08-18T19:11:38.000Z",
        "is_passed": true,
        "value": "dp_assigned"
      },
      {
        "status": "In Transit",
        "time": "",
        "is_passed": false,
        "value": "in_transit"
      },
      {
        "status": "Out For Delivery",
        "time": "",
        "is_passed": false,
        "value": "out_for_delivery"
      },
      {
        "status": "Delivered",
        "time": "",
        "is_passed": false,
        "value": "delivered"
      }
    ],
    "total_bags": 1,
    "promise": {
      "show_promise": false,
      "timestamp": {
        "min": "2022-08-14T13:52:37+00:00",
        "max": "2022-08-17T13:52:37+00:00",
        "dp_promise": null
      }
    },
    "bags": [
      {
        "id": 59624,
        "current_status": {
          "status": "bag_not_picked",
          "updated_at": "2022-08-18T23:46:11+00:00",
          "name": "Bag Not Picked",
          "journey_type": "forward"
        },
        "prices": {
          "price_effective": 50,
          "discount": 0,
          "amount_paid": 50,
          "coupon_effective_discount": 0,
          "delivery_charge": 0,
          "fynd_credits": 0,
          "cod_charges": 0,
          "refund_credit": 0,
          "cashback": 0,
          "refund_amount": 50,
          "added_to_fynd_cash": false,
          "cashback_applied": 0,
          "gst_tax_percentage": 18,
          "value_of_good": 42.37,
          "price_marked": 50,
          "transfer_price": 0,
          "brand_calculated_amount": 50,
          "promotion_effective_discount": 0,
          "coupon_value": 0,
          "pm_price_split": {
            "COD": 50
          }
        },
        "item": {
          "name": "Tissues",
          "brand": {
            "name": "Zepto",
            "logo": "https://hdn-1.jiomarketx0.de/x0/brands/pictures/square-logo/original/5XLRHXC5H-Logo.png"
          },
          "image": [
            "https://hdn-1.jiomarketx0.de/x0/products/pictures/item/free/270x0/hGov80Pbv-411yLXtNYNL._SL1000_.jpg",
            "https://hdn-1.jiomarketx0.de/x0/products/pictures/item/free/270x0/U-6bpneFP-Tissues.jpeg",
            "https://hdn-1.jiomarketx0.de/x0/products/pictures/item/free/270x0/U-6bpneFP-Tissues.jpeg",
            "https://hdn-1.jiomarketx0.de/x0/products/pictures/item/free/270x0/U-6bpneFP-Tissues.jpeg",
            "https://hdn-1.jiomarketx0.de/x0/products/pictures/item/free/270x0/U-6bpneFP-Tissues.jpeg",
            "https://hdn-1.jiomarketx0.de/x0/products/pictures/item/free/270x0/U-6bpneFP-Tissues.jpeg",
            "https://hdn-1.jiomarketx0.de/x0/products/pictures/item/free/270x0/U-6bpneFP-Tissues.jpeg",
            "https://hdn-1.jiomarketx0.de/x0/products/pictures/item/free/270x0/U-6bpneFP-Tissues.jpeg",
            "https://hdn-1.jiomarketx0.de/x0/products/pictures/item/free/270x0/U-6bpneFP-Tissues.jpeg",
            "https://hdn-1.jiomarketx0.de/x0/products/pictures/item/free/270x0/U-6bpneFP-Tissues.jpeg",
            "https://hdn-1.jiomarketx0.de/x0/products/pictures/item/free/270x0/U-6bpneFP-Tissues.jpeg"
          ],
          "slug_key": "tissues",
          "size": "OS",
          "code": "TIS-102",
          "id": 7500474,
          "seller_identifier": "987432134"
        },
        "financial_breakup": [
          {
            "price_effective": 50,
            "discount": 0,
            "amount_paid": 50,
            "coupon_effective_discount": 0,
            "delivery_charge": 0,
            "fynd_credits": 0,
            "cod_charges": 0,
            "refund_credit": 0,
            "cashback": 0,
            "refund_amount": 50,
            "added_to_fynd_cash": false,
            "cashback_applied": 0,
            "gst_tax_percentage": 18,
            "value_of_good": 42.37,
            "price_marked": 50,
            "transfer_price": 0,
            "brand_calculated_amount": 50,
            "promotion_effective_discount": 0,
            "coupon_value": 0,
            "pm_price_split": {
              "COD": 50
            },
            "size": "OS",
            "total_units": 1,
            "hsn_code": "70099200",
            "identifiers": {
              "sku_code": "987432134"
            },
            "item_name": "Tissues",
            "gst_fee": "7.62",
            "gst_tag": "SGST"
          }
        ],
        "quantity": 1,
        "departments": [
          31
        ],
        "can_cancel": false,
        "can_return": false
      }
    ],
    "size_info": {
      "TIS-102": {
        "quantity": 1,
        "price_effective": 50,
        "amount_paid": 50,
        "price_marked": 50,
        "margin": 0
      }
    },
    "total_details": {
      "sizes": 1,
      "total_price": 50,
      "pieces": 1
    },
    "fulfilling_store": {
      "name": "Jio-market-store3",
      "company_id": 33,
      "id": 50,
      "code": "store3"
    },
    "fulfilling_company": {
      "id": 33,
      "name": "RELIANCE JIO INFOCOMM LIMITED"
    },
    "delivery_address": {
      "id": "62e8fc91c1700b808fe528bd",
      "uid": 745,
      "area": "test",
      "city": "Mumbai",
      "name": "Neha",
      "email": "nehashetye@gofynd.com",
      "phone": "8691908585",
      "state": "Maharashtra",
      "address": "1234",
      "country": "India",
      "pincode": "400074",
      "version": "1.0",
      "address1": " test",
      "address2": "",
      "landmark": "test",
      "latitude": 19.0653252,
      "address_1": " test",
      "area_code": "400074",
      "longitude": 72.8423802,
      "created_at": "2022-08-10T18:52:38+00:00",
      "updated_at": "2022-08-10T18:52:38+00:00",
      "address_type": "home",
      "country_code": "91",
      "geo_location": {
        "latitude": 19.0653252,
        "longitude": 72.8423802
      },
      "area_code_slug": "pincode",
      "delivery_address_id": 745,
      "addressee_name": "Neha",
      "delivery_code_required": 1
    },
    "can_cancel": false,
    "can_return": false,
    "delivery_date": null,
    "returnable_date": null,
    "show_download_invoice": true,
    "show_track_link": true,
    "prices": {
      "amount_paid": 50,
      "refund_amount": 50,
      "price_marked": 50,
      "cod_charges": 0,
      "coupon_value": 0,
      "discount": 0,
      "cashback_applied": 0,
      "delivery_charge": 0,
      "fynd_credits": 0,
      "cashback": 0,
      "price_effective": 50,
      "refund_credit": 0,
      "value_of_good": 42.37
    },
    "can_break": {
      "bag_not_picked": {
        "can_break_entity": false
      },
      "cancelled_customer": {
        "can_break_entity": true
      },
      "bag_picked": {
        "can_break_entity": false
      },
      "cancelled_fynd": {
        "can_break_entity": true
      },
      "bag_rescheduled": {
        "can_break_entity": false
      },
      "cancelled_at_dp": {
        "can_break_entity": false
      },
      "handed_over_to_dg": {
        "can_break_entity": false
      },
      "dp_assigned": {
        "can_break_entity": false
      },
      "cancelled_operations": {
        "can_break_entity": false
      },
      "cancelled_seller": {
        "can_break_entity": false
      },
      "out_for_pickup": {
        "can_break_entity": false
      },
      "bag_pick_failed": {
        "can_break_entity": false
      },
      "update_qr_code": {
        "can_break_entity": false
      }
    },
    "payment": {
      "logo": "https://hdn-1.fynd.com/payment/Pos+Logo.png",
      "mode": "Jio Partner Pay",
      "mop": "COD",
      "status": "Unpaid"
    },
    "user_info": {
      "email": "paymentsdummy@gofynd.com",
      "gender": "male",
      "mobile": "8691908585",
      "name": "User -"
    },
    "comment": "",
    "invoice": {
      "updated_date": "2022-08-18T19:11:02.000Z",
      "store_invoice_id": "00000050AA000147",
      "invoice_url": "",
      "label_url": ""
    },
    "refund_details": {
      "rrn": ""
    }
  }
}
```
</details>









---


### getCustomerDetailsByShipmentId




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
| orderId | string | yes |  |   
| shipmentId | string | yes |  |  





*Returned Response:*




[CustomerDetailsResponse](#CustomerDetailsResponse)

We render Customer details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "order_id": "FYMP629D972D01B6BD76",
  "shipment_id": "16544950215681060915J",
  "name": "sagar Kulkarni",
  "phone": "XXX-XXX-6780",
  "country": "India"
}
```
</details>









---


### sendOtpToShipmentCustomer




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
| orderId | string | yes |  |   
| shipmentId | string | yes |  |  





*Returned Response:*




[SendOtpToCustomerResponse](#SendOtpToCustomerResponse)

We render shipment details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "request_id": "0fe0d6e16205ddc57d212e947ee31896",
  "message": "OTP sent",
  "resend_timer": 30
}
```
</details>









---


### getReasons




```javascript
// Promise
const promise = order.getReasons({  shipmentId : value,
 bagId : value });

// Async/Await
const data = await order.getReasons({  shipmentId : value,
 bagId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | number | yes |  |   
| bagId | string | yes |  |  





*Returned Response:*




[ShipmentReasonsResponse](#ShipmentReasonsResponse)

Provide the reason for given bag!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "reason_id": 195,
  "priority": 1,
  "reason_text": "Expected delivery time is long",
  "show_text_area": false,
  "feedback_type": "bag",
  "flow": "cancel"
}
```
</details>









---


### verifyOtp




```javascript
// Promise
const promise = order.verifyOtp({  orderId : value,
 shipmentId : value,
 body : value });

// Async/Await
const data = await order.verifyOtp({  orderId : value,
 shipmentId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes |  |   
| shipmentId | number | yes |  |  
| body | [VerifyOtp](#VerifyOtp) | yes | Request body |




*Returned Response:*




[VerifyOtpResponse](#VerifyOtpResponse)

Provide the reason for given bag!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### getOrders




```javascript
// Promise
const promise = order.getOrders({  status : value,
 pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value });

// Async/Await
const data = await order.getOrders({  status : value,
 pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| status | number | no |  |    
| pageNo | number | no |  |    
| pageSize | number | no |  |    
| fromDate | string | no |  |    
| toDate | string | no |  |  





*Returned Response:*




[OrderList](#OrderList)

Successfully listed orders!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getOrderById




```javascript
// Promise
const promise = order.getOrderById({  orderId : value });

// Async/Await
const data = await order.getOrderById({  orderId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes | A unique number used for identifying and tracking your orders. |  





*Returned Response:*




[OrderList](#OrderList)

Successfully listed orders!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getPosOrderById




```javascript
// Promise
const promise = order.getPosOrderById({  orderId : value });

// Async/Await
const data = await order.getPosOrderById({  orderId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes | A unique number used for identifying and tracking your orders. |  





*Returned Response:*




[OrderList](#OrderList)

Successfully listed orders!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### trackShipment




```javascript
// Promise
const promise = order.trackShipment({  shipmentId : value });

// Async/Await
const data = await order.trackShipment({  shipmentId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes |  |  





*Returned Response:*




[TrackShipmentResponse](#TrackShipmentResponse)

We render Customer details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "results": [
    {
      "awb": "string",
      "updated_at": "string",
      "last_location_recieved_at": "string",
      "reason": "string",
      "shipment_type": "string",
      "status": "string",
      "updated_time": "string",
      "account_name": "string"
    }
  ]
}
```
</details>









---



### Schemas

 
 
 #### [UserInfo](#UserInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gender | string |  no  |  |
 | name | string |  no  |  |
 | mobile | string |  no  |  |
 | email | string |  no  |  |

---


 
 
 #### [FulfillingStore](#FulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number |  no  |  |
 | code | string |  no  |  |
 | name | string |  no  |  |
 | id | number |  no  |  |

---


 
 
 #### [PaymentInfo](#PaymentInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string |  no  |  |
 | status | string |  no  |  |
 | mop | string |  no  |  |
 | mode | string |  no  |  |

---


 
 
 #### [CurrentStatus](#CurrentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | updated_at | string |  no  |  |
 | journey_type | string |  no  |  |
 | status | string |  no  |  |

---


 
 
 #### [ItemBrand](#ItemBrand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [Item](#Item)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug_key | string |  no  |  |
 | code | string |  no  |  |
 | brand | [ItemBrand](#ItemBrand) |  no  |  |
 | seller_identifier | string |  no  |  |
 | size | string |  no  |  |
 | name | string |  no  |  |
 | id | number |  no  |  |
 | image | [string] |  no  |  |

---


 
 
 #### [Prices](#Prices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | price_marked | number |  no  |  |
 | price_effective | number |  no  |  |
 | value_of_good | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | coupon_value | number |  no  |  |
 | added_to_fynd_cash | number |  no  |  |
 | promotion_effective_discount | number |  no  |  |
 | discount | number |  no  |  |
 | pm_price_split | string |  no  |  |
 | refund_amount | number |  no  |  |
 | amount_paid | number |  no  |  |
 | gst_tax_percentage | number |  no  |  |
 | cod_charges | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | coupon_effective_discount | number |  no  |  |
 | transfer_price | number |  no  |  |
 | refund_credit | number |  no  |  |
 | cashback | number |  no  |  |
 | fynd_credits | number |  no  |  |

---


 
 
 #### [BagsData](#BagsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current_status | [CurrentStatus](#CurrentStatus) |  no  |  |
 | can_cancel | boolean |  no  |  |
 | quantity | number |  no  |  |
 | financial_breakup | [string] |  no  |  |
 | can_return | boolean |  no  |  |
 | item | [Item](#Item) |  no  |  |
 | id | number |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |

---


 
 
 #### [FulfillingCompany](#FulfillingCompany)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | id | number |  no  |  |

---


 
 
 #### [PricesBreakup](#PricesBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | number |  no  |  |
 | name | string |  no  |  |
 | display | string |  no  |  |

---


 
 
 #### [ShipmentResponse](#ShipmentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | can_break | string |  no  |  |
 | promise | string |  no  |  |
 | refund_details | string |  no  |  |
 | shipment_status | string |  no  |  |
 | need_help_url | string |  no  |  |
 | can_return | boolean |  no  |  |
 | user_info | [UserInfo](#UserInfo) |  no  |  |
 | shipment_created_at | string |  no  |  |
 | show_download_invoice | boolean |  no  |  |
 | total_bags | number |  no  |  |
 | dp_name | string |  no  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  |
 | beneficiary_details | boolean |  no  |  |
 | order_id | string |  no  |  |
 | show_track_link | boolean |  no  |  |
 | traking_no | string |  no  |  |
 | can_cancel | boolean |  no  |  |
 | awb_no | string |  no  |  |
 | delivery_date | string |  no  |  |
 | shipment_id | string |  no  |  |
 | invoice | string |  no  |  |
 | delivery_address | string |  no  |  |
 | payment | [PaymentInfo](#PaymentInfo) |  no  |  |
 | tracking_details | string |  no  |  |
 | total_details | string |  no  |  |
 | bags | [[BagsData](#BagsData)] |  no  |  |
 | fulfilling_company | [FulfillingCompany](#FulfillingCompany) |  no  |  |
 | returnable_date | string |  no  |  |
 | breakup_values | [[PricesBreakup](#PricesBreakup)] |  no  |  |
 | size_info | string |  no  |  |
 | track_url | string |  no  |  |
 | prices | string |  no  |  |
 | comment | string |  no  |  |

---


 
 
 #### [ShipmentById](#ShipmentById)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment | [ShipmentResponse](#ShipmentResponse) |  no  |  |

---


 
 
 #### [Error](#Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [CustomerDetailsResponse](#CustomerDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | phone | string |  no  |  |
 | shipment_id | string |  no  |  |
 | country | string |  no  |  |
 | name | string |  no  |  |
 | order_id | string |  no  |  |

---


 
 
 #### [SendOtpToCustomerResponse](#SendOtpToCustomerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | request_id | string |  no  |  |
 | message | string |  no  |  |
 | resend_timer | number |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [ShipmentReasonsResponse](#ShipmentReasonsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | priority | number |  no  |  |
 | show_text_area | boolean |  no  |  |
 | reason_id | number |  no  |  |
 | reason_text | string |  no  |  |
 | feedback_type | string |  no  |  |
 | flow | string |  no  |  |

---


 
 
 #### [VerifyOtp](#VerifyOtp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | request_id | string |  no  |  |
 | otp_code | number |  no  |  |

---


 
 
 #### [VerifyOtpResponse](#VerifyOtpResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |

---


 
 
 #### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | item_total | number |  no  |  |
 | has_next | boolean |  no  |  |
 | size | number |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [OrderItems](#OrderItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_shipments_in_order | number |  no  |  |
 | bags_for_reorder | [string] |  no  |  |
 | shipments | [[ShipmentResponse](#ShipmentResponse)] |  no  |  |
 | order_created_time | string |  no  |  |
 | order_id | string |  no  |  |
 | user_info | string |  no  |  |

---


 
 
 #### [Statuses](#Statuses)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | number |  no  |  |
 | is_selected | boolean |  no  |  |
 | display | string |  no  |  |

---


 
 
 #### [Filters](#Filters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | statuses | [[Statuses](#Statuses)] |  no  |  |

---


 
 
 #### [OrderList](#OrderList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [Page](#Page) |  no  |  |
 | items | [[OrderItems](#OrderItems)] |  no  |  |
 | filters | [Filters](#Filters) |  no  |  |

---


 
 
 #### [TrackShipmentResults](#TrackShipmentResults)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | awb | string |  no  |  |
 | account_name | string |  no  |  |
 | reason | string |  no  |  |
 | status | string |  no  |  |
 | last_location_recieved_at | string |  no  |  |
 | updated_time | string |  no  |  |
 | updated_at | string |  no  |  |
 | shipment_type | string |  no  |  |

---


 
 
 #### [TrackShipmentResponse](#TrackShipmentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | results | [[TrackShipmentResults](#TrackShipmentResults)] |  no  |  |

---




