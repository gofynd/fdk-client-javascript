



##### [Back to Platform docs](./README.md)

## Orders Methods
Handles all platform order and shipment api(s)
* [getShipmentDetails](#getshipmentdetails)
* [getLaneConfig](#getlaneconfig)
* [getOrderShipmentDetails](#getordershipmentdetails)
* [getShipmentList](#getshipmentlist)
* [getShipmentToManifest](#getshipmenttomanifest)
* [getOrders](#getorders)
* [getfilters](#getfilters)



## Methods with example and description


### getShipmentDetails




```javascript
// Promise
const promise = client.orders.getShipmentDetails({  shipmentId : value });

// Async/Await
const data = await client.orders.getShipmentDetails({  shipmentId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes |  |  





*Returned Response:*




[ShipmentInfoResponse](#ShipmentInfoResponse)

We are processing the report!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "order": {
    "fynd_order_id": "FY62B13E2101810C19E4",
    "shipment_count": 1,
    "order_date": "2022-06-21T09:12:26+00:00"
  },
  "shipments": [
    {
      "shipment_id": "16557829457641286433",
      "payment_mode": "COD",
      "fulfilling_store": {
        "id": 1,
        "code": "HS-468a5",
        "fulfillment_channel": "pulse",
        "store_name": "Reliance Industries Ltd - Jio Market",
        "contact_person": "",
        "phone": "8268108880",
        "address": "high_street WEWORK, VIJAY DIAMONDS, ANDHERI MUMBAI MAHARASHTRA 400093",
        "city": "MUMBAI",
        "state": "MAHARASHTRA",
        "country": "INDIA",
        "pincode": 400093
      },
      "delivery_details": {
        "name": "Manish Prakash",
        "email": "Manish.Prakash@ril.com",
        "phone": "7787051611",
        "address": "home 479 sector3 bokaro Bokaro Jharkhand 827003",
        "city": "Bokaro",
        "state": "Jharkhand",
        "country": "India",
        "pincode": "827003",
        "state_code": 0
      },
      "billing_details": {
        "name": "Manish Prakash",
        "email": "Manish.Prakash@ril.com",
        "phone": "7787051611",
        "address": "home 479 sector3 bokaro Bokaro Jharkhand 827003",
        "city": "Bokaro",
        "state": "Jharkhand",
        "country": "India",
        "pincode": "827003",
        "state_code": 0
      },
      "dp_details": {
        "id": null,
        "name": null,
        "awb_no": null,
        "eway_bill_id": null,
        "track_url": null,
        "gst_tag": "sgst"
      },
      "journey_type": "forward",
      "order": {
        "fynd_order_id": "FY62B13E2101810C19E4",
        "affiliate_id": "000000000000000000000001",
        "ordering_channel": "FYND",
        "source": null,
        "tax_details": {
          "gstin": null
        },
        "order_date": "2022-06-21T09:12:26+00:00"
      },
      "gst_details": {
        "value_of_good": 475.24,
        "gst_fee": 23.76,
        "brand_calculated_amount": 499,
        "tax_collected_at_source": 0,
        "gstin_code": null
      },
      "shipment_quantity": 1,
      "bag_status_history": [
        {
          "status": "pending",
          "updated_at": "2022-06-21T09:12:26+00:00",
          "state_type": "operational",
          "app_display_name": "Pending",
          "display_name": "Pending",
          "forward": null
        },
        {
          "status": "placed",
          "updated_at": "2022-06-21T09:12:32+00:00",
          "state_type": "operational",
          "app_display_name": "Ordered",
          "display_name": "Placed",
          "forward": null
        },
        {
          "status": "bag_confirmed",
          "updated_at": "2022-06-21T09:39:13+00:00",
          "state_type": "operational",
          "app_display_name": "Ordered",
          "display_name": "Bag Confirmed",
          "forward": null
        },
        {
          "status": "dp_assigned",
          "updated_at": "2022-06-21T09:40:04+00:00",
          "state_type": "operational",
          "app_display_name": "DP Assigned",
          "display_name": "DP Assigned",
          "forward": null
        },
        {
          "status": "bag_picked",
          "updated_at": "2022-06-21T09:40:12+00:00",
          "state_type": "operational",
          "app_display_name": "Shipped",
          "display_name": "In Transit",
          "forward": null
        },
        {
          "status": "out_for_delivery",
          "updated_at": "2022-06-21T09:40:29+00:00",
          "state_type": "operational",
          "app_display_name": "Out For Delivery",
          "display_name": "Out For Delivery",
          "forward": null
        },
        {
          "status": "delivery_done",
          "updated_at": "2022-06-21T09:40:37+00:00",
          "state_type": "operational",
          "app_display_name": "Delivered",
          "display_name": "Delivery Done",
          "forward": null
        }
      ],
      "bags": [
        {
          "bag_id": 43880,
          "display_name": "Bag",
          "entity_type": "bag",
          "bag_configs": {
            "is_returnable": true,
            "can_be_cancelled": true,
            "enable_tracking": false,
            "is_customer_return_allowed": true,
            "allow_force_return": false,
            "is_active": false
          },
          "financial_breakup": [
            {
              "price_effective": 499,
              "discount": 0,
              "amount_paid": 549,
              "coupon_effective_discount": 0,
              "delivery_charge": 50,
              "fynd_credits": 0,
              "cod_charges": 0,
              "refund_credit": 0,
              "cashback": 0,
              "refund_amount": 549,
              "added_to_fynd_cash": false,
              "cashback_applied": 0,
              "gst_tax_percentage": 5,
              "value_of_good": 475.24,
              "price_marked": 499,
              "transfer_price": 0,
              "brand_calculated_amount": 499,
              "promotion_effective_discount": 0,
              "coupon_value": 0,
              "pm_price_split": {
                "COD": 549
              },
              "size": "5",
              "total_units": 1,
              "hsn_code": "62050000",
              "identifiers": {
                "sku_code": "CL-001L-L-PRPL-PINK-5"
              },
              "item_name": "Purple Flip Flops",
              "gst_fee": "23.76",
              "gst_tag": "IGST"
            }
          ],
          "current_status": "delivery_done",
          "item": {
            "name": "Purple Flip Flops",
            "brand": "Nike",
            "slug_key": "purple-flip-flops-ezmucvw4d3",
            "images": [
              "https://hdn-1.fynd.com/products/pictures/item/free/270x0/CL-001L-L-PRPL-PINK-6/Rvk5WbGg9Hx-1.jpg"
            ],
            "size": "5",
            "l1_category": "",
            "l3_category": "27"
          },
          "brand": {
            "modified_on": 1655707988,
            "logo": "https://hdn-1.jiomarketx0.de/x0/brands/pictures/square-logo/original/DbhIvd_tB-Logo.jpeg",
            "brand_name": "Nike",
            "company": null,
            "created_on": 1647793418,
            "id": 4
          },
          "gst_details": {
            "gstin_code": null,
            "gst_tag": "IGST",
            "hsn_code": "62050000",
            "value_of_good": 475.24,
            "gst_tax_percentage": 5,
            "is_default_hsn_code": true,
            "brand_calculated_amount": 499,
            "gst_fee": "23.76"
          },
          "article": {
            "uid": "6237fdfec0903e7ae543c201",
            "identifiers": {
              "sku_code": "CL-001L-L-PRPL-PINK-5"
            },
            "return_config": {
              "time": 30,
              "unit": "days",
              "returnable": true
            }
          },
          "quantity": 1
        }
      ],
      "delivery_slot": {
        "slot": "By 03:00 AM",
        "upper_bound": "2022-06-21T03:42:23+00:00",
        "lower_bound": "2022-06-21T03:42:23+00:00",
        "date": "2022-06-21T03:42:23+00:00",
        "type": "order_window"
      },
      "total_items": 1,
      "payment_methods": [
        {
          "slug": "COD",
          "payment_id": "COD",
          "payment_amt": 549,
          "payment_cart": null,
          "payment_desc": "COD",
          "bdcustomer_id": null,
          "order_inv_num": null,
          "mode_of_payment": "COD",
          "payment_gateway_logo": null,
          "transaction_ref_number": ""
        }
      ],
      "vertical": "GROCERIES",
      "payments": {
        "mode": "COD",
        "logo": "https://hdn-1.fynd.com/payment/Pos+Logo.png",
        "source": "Jio Partner Pay"
      },
      "priority_text": null,
      "status": {
        "created_at": 1655804437,
        "shipment_id": "16557829457641286433",
        "status": "delivery_done",
        "bag_list": [
          "43880"
        ],
        "id": 19980
      },
      "prices": {
        "amount_paid": 549,
        "refund_amount": 549,
        "price_marked": 499,
        "cod_charges": 0,
        "discount": 0,
        "cashback_applied": 0,
        "delivery_charge": 50,
        "fynd_credits": 0,
        "cashback": 0,
        "price_effective": 499,
        "refund_credit": 0,
        "value_of_good": 475.24,
        "pm_price_split": {
          "COD": 549
        },
        "brand_calculated_amount": 499,
        "coupon_effective_discount": 0,
        "tax_collected_at_source": 0,
        "promotion_effective_discount": 0
      },
      "picked_date": "",
      "tracking_list": [
        {
          "status": "Order Placed",
          "time": "2022-06-21T09:12:32+00:00",
          "is_passed": true,
          "is_current": false
        },
        {
          "status": "Order Confirmed",
          "time": "2022-06-21T09:39:13+00:00",
          "is_passed": true,
          "is_current": false
        },
        {
          "status": "Invoiced",
          "time": "2022-06-21T09:40:12+00:00",
          "is_passed": true,
          "is_current": false
        },
        {
          "status": "Delivery Partner Assigned",
          "time": "2022-06-21T09:40:12+00:00",
          "is_passed": true,
          "is_current": false
        },
        {
          "status": "Packed",
          "time": "2022-06-21T09:40:12+00:00",
          "is_passed": true,
          "is_current": false
        },
        {
          "status": "In Transit",
          "time": "2022-06-21T09:40:12+00:00",
          "is_passed": true,
          "is_current": false
        },
        {
          "status": "Out For Delivery",
          "time": "2022-06-21T09:40:29+00:00",
          "is_passed": true,
          "is_current": false
        },
        {
          "status": "Delivered",
          "time": "2022-06-21T09:40:37+00:00",
          "is_passed": true,
          "is_current": true
        }
      ],
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
      "platform_logo": "https://fynd-static.s3.amazonaws.com/mode_of_payment/fynd_logo.png",
      "packaging_type": "POLYB_DFLT_L"
    }
  ]
}
```
</details>









---


### getLaneConfig




```javascript
// Promise
const promise = client.orders.getLaneConfig({  superLane : value,
 groupEntity : value,
 fromDate : value,
 toDate : value });

// Async/Await
const data = await client.orders.getLaneConfig({  superLane : value,
 groupEntity : value,
 fromDate : value,
 toDate : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| superLane | string | no |  |    
| groupEntity | string | no |  |    
| fromDate | string | no |  |    
| toDate | string | no |  |  





*Returned Response:*




[LaneConfigResponse](#LaneConfigResponse)

Response containing count of shipments of the given status




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getOrderShipmentDetails




```javascript
// Promise
const promise = client.orders.getOrderShipmentDetails({  orderId : value });

// Async/Await
const data = await client.orders.getOrderShipmentDetails({  orderId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes |  |  





*Returned Response:*




[ShipmentDetailsResponse](#ShipmentDetailsResponse)

We are processing the report!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "order": {
    "fynd_order_id": "FY62B13E2101810C19E4",
    "shipment_count": 1,
    "order_date": "2022-06-21T09:12:26+00:00"
  },
  "shipments": [
    {
      "shipment_id": "16557829457641286433",
      "payment_mode": "COD",
      "fulfilling_store": {
        "id": 1,
        "code": "HS-468a5",
        "fulfillment_channel": "pulse",
        "store_name": "Reliance Industries Ltd - Jio Market",
        "contact_person": "",
        "phone": "8268108880",
        "address": "high_street WEWORK, VIJAY DIAMONDS, ANDHERI MUMBAI MAHARASHTRA 400093",
        "city": "MUMBAI",
        "state": "MAHARASHTRA",
        "country": "INDIA",
        "pincode": 400093
      },
      "delivery_details": {
        "name": "Manish Prakash",
        "email": "Manish.Prakash@ril.com",
        "phone": "7787051611",
        "address": "home 479 sector3 bokaro Bokaro Jharkhand 827003",
        "city": "Bokaro",
        "state": "Jharkhand",
        "country": "India",
        "pincode": "827003",
        "state_code": 0
      },
      "billing_details": {
        "name": "Manish Prakash",
        "email": "Manish.Prakash@ril.com",
        "phone": "7787051611",
        "address": "home 479 sector3 bokaro Bokaro Jharkhand 827003",
        "city": "Bokaro",
        "state": "Jharkhand",
        "country": "India",
        "pincode": "827003",
        "state_code": 0
      },
      "dp_details": {
        "id": null,
        "name": null,
        "awb_no": null,
        "eway_bill_id": null,
        "track_url": null,
        "gst_tag": "sgst"
      },
      "journey_type": "forward",
      "order": {
        "fynd_order_id": "FY62B13E2101810C19E4",
        "affiliate_id": "000000000000000000000001",
        "ordering_channel": "FYND",
        "source": null,
        "tax_details": {
          "gstin": null
        },
        "order_date": "2022-06-21T09:12:26+00:00"
      },
      "gst_details": {
        "value_of_good": 475.24,
        "gst_fee": 23.76,
        "brand_calculated_amount": 499,
        "tax_collected_at_source": 0,
        "gstin_code": null
      },
      "shipment_quantity": 1,
      "bag_status_history": [
        {
          "status": "pending",
          "updated_at": "2022-06-21T09:12:26+00:00",
          "state_type": "operational",
          "app_display_name": "Pending",
          "display_name": "Pending",
          "forward": null
        },
        {
          "status": "placed",
          "updated_at": "2022-06-21T09:12:32+00:00",
          "state_type": "operational",
          "app_display_name": "Ordered",
          "display_name": "Placed",
          "forward": null
        },
        {
          "status": "bag_confirmed",
          "updated_at": "2022-06-21T09:39:13+00:00",
          "state_type": "operational",
          "app_display_name": "Ordered",
          "display_name": "Bag Confirmed",
          "forward": null
        },
        {
          "status": "dp_assigned",
          "updated_at": "2022-06-21T09:40:04+00:00",
          "state_type": "operational",
          "app_display_name": "DP Assigned",
          "display_name": "DP Assigned",
          "forward": null
        },
        {
          "status": "bag_picked",
          "updated_at": "2022-06-21T09:40:12+00:00",
          "state_type": "operational",
          "app_display_name": "Shipped",
          "display_name": "In Transit",
          "forward": null
        },
        {
          "status": "out_for_delivery",
          "updated_at": "2022-06-21T09:40:29+00:00",
          "state_type": "operational",
          "app_display_name": "Out For Delivery",
          "display_name": "Out For Delivery",
          "forward": null
        },
        {
          "status": "delivery_done",
          "updated_at": "2022-06-21T09:40:37+00:00",
          "state_type": "operational",
          "app_display_name": "Delivered",
          "display_name": "Delivery Done",
          "forward": null
        }
      ],
      "bags": [
        {
          "bag_id": 43880,
          "display_name": "Bag",
          "entity_type": "bag",
          "bag_configs": {
            "is_returnable": true,
            "can_be_cancelled": true,
            "enable_tracking": false,
            "is_customer_return_allowed": true,
            "allow_force_return": false,
            "is_active": false
          },
          "financial_breakup": [
            {
              "price_effective": 499,
              "discount": 0,
              "amount_paid": 549,
              "coupon_effective_discount": 0,
              "delivery_charge": 50,
              "fynd_credits": 0,
              "cod_charges": 0,
              "refund_credit": 0,
              "cashback": 0,
              "refund_amount": 549,
              "added_to_fynd_cash": false,
              "cashback_applied": 0,
              "gst_tax_percentage": 5,
              "value_of_good": 475.24,
              "price_marked": 499,
              "transfer_price": 0,
              "brand_calculated_amount": 499,
              "promotion_effective_discount": 0,
              "coupon_value": 0,
              "pm_price_split": {
                "COD": 549
              },
              "size": "5",
              "total_units": 1,
              "hsn_code": "62050000",
              "identifiers": {
                "sku_code": "CL-001L-L-PRPL-PINK-5"
              },
              "item_name": "Purple Flip Flops",
              "gst_fee": "23.76",
              "gst_tag": "IGST"
            }
          ],
          "current_status": "delivery_done",
          "item": {
            "name": "Purple Flip Flops",
            "brand": "Nike",
            "slug_key": "purple-flip-flops-ezmucvw4d3",
            "images": [
              "https://hdn-1.fynd.com/products/pictures/item/free/270x0/CL-001L-L-PRPL-PINK-6/Rvk5WbGg9Hx-1.jpg"
            ],
            "size": "5",
            "l1_category": "",
            "l3_category": "27"
          },
          "brand": {
            "modified_on": 1655707988,
            "logo": "https://hdn-1.jiomarketx0.de/x0/brands/pictures/square-logo/original/DbhIvd_tB-Logo.jpeg",
            "brand_name": "Nike",
            "company": null,
            "created_on": 1647793418,
            "id": 4
          },
          "gst_details": {
            "gstin_code": null,
            "gst_tag": "IGST",
            "hsn_code": "62050000",
            "value_of_good": 475.24,
            "gst_tax_percentage": 5,
            "is_default_hsn_code": true,
            "brand_calculated_amount": 499,
            "gst_fee": "23.76"
          },
          "article": {
            "uid": "6237fdfec0903e7ae543c201",
            "identifiers": {
              "sku_code": "CL-001L-L-PRPL-PINK-5"
            },
            "return_config": {
              "time": 30,
              "unit": "days",
              "returnable": true
            }
          },
          "quantity": 1
        }
      ],
      "delivery_slot": {
        "slot": "By 03:00 AM",
        "upper_bound": "2022-06-21T03:42:23+00:00",
        "lower_bound": "2022-06-21T03:42:23+00:00",
        "date": "2022-06-21T03:42:23+00:00",
        "type": "order_window"
      },
      "total_items": 1,
      "payment_methods": [
        {
          "slug": "COD",
          "payment_id": "COD",
          "payment_amt": 549,
          "payment_cart": null,
          "payment_desc": "COD",
          "bdcustomer_id": null,
          "order_inv_num": null,
          "mode_of_payment": "COD",
          "payment_gateway_logo": null,
          "transaction_ref_number": ""
        }
      ],
      "vertical": "GROCERIES",
      "payments": {
        "mode": "COD",
        "logo": "https://hdn-1.fynd.com/payment/Pos+Logo.png",
        "source": "Jio Partner Pay"
      },
      "priority_text": null,
      "status": {
        "created_at": 1655804437,
        "shipment_id": "16557829457641286433",
        "status": "delivery_done",
        "bag_list": [
          "43880"
        ],
        "id": 19980
      },
      "prices": {
        "amount_paid": 549,
        "refund_amount": 549,
        "price_marked": 499,
        "cod_charges": 0,
        "discount": 0,
        "cashback_applied": 0,
        "delivery_charge": 50,
        "fynd_credits": 0,
        "cashback": 0,
        "price_effective": 499,
        "refund_credit": 0,
        "value_of_good": 475.24,
        "pm_price_split": {
          "COD": 549
        },
        "brand_calculated_amount": 499,
        "coupon_effective_discount": 0,
        "tax_collected_at_source": 0,
        "promotion_effective_discount": 0
      },
      "picked_date": "",
      "tracking_list": [
        {
          "status": "Order Placed",
          "time": "2022-06-21T09:12:32+00:00",
          "is_passed": true,
          "is_current": false
        },
        {
          "status": "Order Confirmed",
          "time": "2022-06-21T09:39:13+00:00",
          "is_passed": true,
          "is_current": false
        },
        {
          "status": "Invoiced",
          "time": "2022-06-21T09:40:12+00:00",
          "is_passed": true,
          "is_current": false
        },
        {
          "status": "Delivery Partner Assigned",
          "time": "2022-06-21T09:40:12+00:00",
          "is_passed": true,
          "is_current": false
        },
        {
          "status": "Packed",
          "time": "2022-06-21T09:40:12+00:00",
          "is_passed": true,
          "is_current": false
        },
        {
          "status": "In Transit",
          "time": "2022-06-21T09:40:12+00:00",
          "is_passed": true,
          "is_current": false
        },
        {
          "status": "Out For Delivery",
          "time": "2022-06-21T09:40:29+00:00",
          "is_passed": true,
          "is_current": false
        },
        {
          "status": "Delivered",
          "time": "2022-06-21T09:40:37+00:00",
          "is_passed": true,
          "is_current": true
        }
      ],
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
      "platform_logo": "https://fynd-static.s3.amazonaws.com/mode_of_payment/fynd_logo.png",
      "packaging_type": "POLYB_DFLT_L"
    }
  ]
}
```
</details>









---


### getShipmentList




```javascript
// Promise
const promise = client.orders.getShipmentList({  lane : value,
 searchType : value,
 searchId : value,
 fromDate : value,
 toDate : value,
 dpIds : value,
 orderingCompanyId : value,
 stores : value,
 salesChannel : value,
 requestByExt : value,
 pageNo : value,
 pageSize : value,
 customerId : value,
 isPrioritySort : value });

// Async/Await
const data = await client.orders.getShipmentList({  lane : value,
 searchType : value,
 searchId : value,
 fromDate : value,
 toDate : value,
 dpIds : value,
 orderingCompanyId : value,
 stores : value,
 salesChannel : value,
 requestByExt : value,
 pageNo : value,
 pageSize : value,
 customerId : value,
 isPrioritySort : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| lane | string | no |  |    
| searchType | string | no |  |    
| searchId | string | no |  |    
| fromDate | string | no |  |    
| toDate | string | no |  |    
| dpIds | string | no |  |    
| orderingCompanyId | string | no |  |    
| stores | string | no |  |    
| salesChannel | string | no |  |    
| requestByExt | string | no |  |    
| pageNo | number | no |  |    
| pageSize | number | no |  |    
| customerId | string | no |  |    
| isPrioritySort | boolean | no |  |  





*Returned Response:*




[ShipmentInternalPlatformViewResponse](#ShipmentInternalPlatformViewResponse)

We are processing the report!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getShipmentToManifest




```javascript
// Promise
const promise = client.orders.getShipmentToManifest({  groupEntity : value,
 salesChannel : value,
 dpIds : value });

// Async/Await
const data = await client.orders.getShipmentToManifest({  groupEntity : value,
 salesChannel : value,
 dpIds : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| groupEntity | string | yes |  |    
| salesChannel | string | no |  |    
| dpIds | string | no |  |  





*Returned Response:*




[ManifestShipmentResponse](#ManifestShipmentResponse)

We are processing the report!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getOrders




```javascript
// Promise
const promise = client.orders.getOrders({  lane : value,
 searchType : value,
 searchValue : value,
 fromDate : value,
 toDate : value,
 dpIds : value,
 stores : value,
 salesChannel : value,
 pageNo : value,
 pageSize : value,
 isPrioritySort : value });

// Async/Await
const data = await client.orders.getOrders({  lane : value,
 searchType : value,
 searchValue : value,
 fromDate : value,
 toDate : value,
 dpIds : value,
 stores : value,
 salesChannel : value,
 pageNo : value,
 pageSize : value,
 isPrioritySort : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| lane | string | no |  |    
| searchType | string | no |  |    
| searchValue | string | no |  |    
| fromDate | string | no |  |    
| toDate | string | no |  |    
| dpIds | string | no |  |    
| stores | string | no |  |    
| salesChannel | string | no |  |    
| pageNo | number | no |  |    
| pageSize | number | no |  |    
| isPrioritySort | boolean | no |  |  





*Returned Response:*




[OrderListingResponse](#OrderListingResponse)

We are processing the report!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getfilters




```javascript
// Promise
const promise = client.orders.getfilters({  view : value });

// Async/Await
const data = await client.orders.getfilters({  view : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| view | string | yes |  |  





*Returned Response:*




[FiltersResponse](#FiltersResponse)

List of filters




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "delivery_partners": [
    {
      "text": "Ecomm",
      "value": 1,
      "name": "ecom_jio"
    },
    {
      "text": "Grab",
      "value": 12,
      "name": "grab_jio"
    },
    {
      "text": "Ecomm Express",
      "value": 13,
      "name": "ecom_express_3P"
    },
    {
      "text": "Delivery Express",
      "value": 14,
      "name": "delhivery_express_3P"
    },
    {
      "text": "Xpressbees Express",
      "value": 15,
      "name": "xpressbees_express_3P"
    },
    {
      "text": "Delhiver Express",
      "value": 19,
      "name": "delhivery_jio_surface"
    }
  ],
  "channels": [
    {
      "text": "JIOMARKET",
      "value": "0000000000000000000000045",
      "name": "JIOMARKET"
    },
    {
      "text": "JIOMART",
      "value": "5ea6821b3425bb07c82a2551",
      "name": "JIOMART"
    }
  ]
}
```
</details>









---



### Schemas

 
 
 #### [ShipmentStatusData](#ShipmentStatusData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |
 | shipment_id | string |  no  |  |
 | bag_list | [number] |  no  |  |
 | created_at | string |  no  |  |
 | id | number |  no  |  |

---


 
 
 #### [Prices](#Prices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cashback | number |  yes  |  |
 | cod_charges | number |  yes  |  |
 | price_marked | number |  yes  |  |
 | discount | number |  yes  |  |
 | cashback_applied | number |  yes  |  |
 | value_of_good | number |  yes  |  |
 | delivery_charge | number |  yes  |  |
 | amount_paid | number |  yes  |  |
 | refund_credit | number |  yes  |  |
 | price_effective | number |  yes  |  |
 | tax_collected_at_source | number |  yes  |  |
 | fynd_credits | number |  yes  |  |
 | promotion_effective_discount | number |  yes  |  |
 | amount_paid_roundoff | number |  yes  |  |
 | coupon_value | number |  yes  |  |
 | refund_amount | number |  yes  |  |

---


 
 
 #### [BagStatusHistory](#BagStatusHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  |  |
 | updated_at | string |  no  |  |
 | state_type | boolean |  no  |  |
 | app_display_name | boolean |  no  |  |
 | forward | boolean |  no  |  |
 | display_name | boolean |  no  |  |

---


 
 
 #### [ShipmentPayments](#ShipmentPayments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string |  no  |  |
 | mode | string |  yes  |  |
 | source | string |  no  |  |

---


 
 
 #### [FinancialBreakup](#FinancialBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst_fee | string |  yes  |  |
 | item_name | string |  yes  |  |
 | pm_price_split | string |  yes  |  |
 | delivery_charge | number |  yes  |  |
 | gst_tax_percentage | number |  yes  |  |
 | amount_paid | number |  yes  |  |
 | gst_tag | string |  yes  |  |
 | size | string |  yes  |  |
 | cashback | number |  yes  |  |
 | discount | number |  yes  |  |
 | total_units | number |  yes  |  |
 | promotion_effective_discount | number |  yes  |  |
 | value_of_good | number |  yes  |  |
 | cashback_applied | number |  yes  |  |
 | price_marked | number |  yes  |  |
 | identifiers | string |  yes  |  |
 | price_effective | number |  yes  |  |
 | added_to_fynd_cash | boolean |  yes  |  |
 | fynd_credits | number |  yes  |  |
 | hsn_code | string |  yes  |  |
 | coupon_effective_discount | number |  yes  |  |
 | coupon_value | number |  yes  |  |
 | cod_charges | number |  yes  |  |
 | brand_calculated_amount | number |  yes  |  |
 | refund_credit | number |  yes  |  |
 | transfer_price | number |  yes  |  |

---


 
 
 #### [OrderBrandName](#OrderBrandName)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string |  yes  |  |
 | created_on | number |  yes  |  |
 | company | string |  yes  |  |
 | id | number |  yes  |  |
 | brand_name | string |  yes  |  |
 | modified_on | number |  no  |  |

---


 
 
 #### [BagConfigs](#BagConfigs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | can_be_cancelled | boolean |  yes  |  |
 | is_active | boolean |  yes  |  |
 | is_returnable | boolean |  yes  |  |
 | enable_tracking | boolean |  yes  |  |
 | allow_force_return | boolean |  yes  |  |
 | is_customer_return_allowed | boolean |  yes  |  |

---


 
 
 #### [OrderBagItem](#OrderBagItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | l3_category | number |  yes  |  |
 | brand | string |  yes  |  |
 | l1_category | [string] |  no  |  |
 | image | [string] |  no  |  |
 | name | string |  yes  |  |
 | slug_key | string |  yes  |  |
 | size | string |  yes  |  |

---


 
 
 #### [OrderBagArticle](#OrderBagArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | string |  no  |  |
 | return_config | string |  no  |  |
 | identifiers | string |  no  |  |

---


 
 
 #### [BagGST](#BagGST)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst_fee | number |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | gst_tax_percentage | number |  no  |  |
 | is_default_hsn_code | boolean |  no  |  |
 | hsn_code | string |  no  |  |
 | gstin_code | string |  no  |  |
 | gst_tag | string |  no  |  |
 | value_of_good | number |  no  |  |

---


 
 
 #### [OrderBags](#OrderBags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | financial_breakup | [[FinancialBreakup](#FinancialBreakup)] |  no  |  |
 | entity_type | string |  yes  |  |
 | brand | [OrderBrandName](#OrderBrandName) |  no  |  |
 | bag_configs | [BagConfigs](#BagConfigs) |  no  |  |
 | current_status | string |  yes  |  |
 | item | [OrderBagItem](#OrderBagItem) |  no  |  |
 | bag_id | number |  yes  |  |
 | display_name | string |  yes  |  |
 | article | [OrderBagArticle](#OrderBagArticle) |  no  |  |
 | gst_details | [BagGST](#BagGST) |  no  |  |
 | quantity | number |  yes  |  |

---


 
 
 #### [DPDetails](#DPDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | track_url | string |  no  |  |
 | gst_tag | string |  no  |  |
 | awb_no | string |  no  |  |
 | pincode | string |  no  |  |
 | eway_bill_id | string |  no  |  |
 | country | string |  no  |  |
 | name | string |  no  |  |
 | id | string |  no  |  |

---


 
 
 #### [GST](#GST)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst_fee | number |  yes  |  |
 | brand_calculated_amount | number |  yes  |  |
 | value_of_good | number |  yes  |  |
 | gstin_code | string |  yes  |  |
 | tax_collected_at_source | number |  yes  |  |

---


 
 
 #### [UserDetailsData](#UserDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  yes  |  |
 | city | string |  yes  |  |
 | pincode | string |  yes  |  |
 | address | string |  yes  |  |
 | country | string |  yes  |  |
 | name | string |  yes  |  |
 | phone | string |  yes  |  |
 | state | string |  yes  |  |

---


 
 
 #### [OrderDetailsData](#OrderDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cod_charges | string |  no  |  |
 | order_value | string |  no  |  |
 | affiliate_id | string |  no  |  |
 | ordering_channel | string |  no  |  |
 | order_date | string |  no  |  |
 | ordering_channel_logo | string |  no  |  |
 | tax_details | string |  no  |  |
 | source | string |  no  |  |
 | fynd_order_id | string |  yes  |  |

---


 
 
 #### [TrackingList](#TrackingList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_passed | boolean |  no  |  |
 | is_current | boolean |  no  |  |
 | time | string |  no  |  |
 | status | string |  yes  |  |

---


 
 
 #### [FulfillingStore](#FulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | city | string |  yes  |  |
 | contact_person | string |  yes  |  |
 | fulfillment_channel | string |  yes  |  |
 | code | string |  yes  |  |
 | address | string |  yes  |  |
 | store_name | string |  yes  |  |
 | country | string |  yes  |  |
 | pincode | string |  yes  |  |
 | meta | string |  yes  |  |
 | id | string |  yes  |  |
 | phone | string |  yes  |  |
 | state | string |  yes  |  |

---


 
 
 #### [ShipmentInfoResponse](#ShipmentInfoResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [string] |  yes  |  |
 | order_status | string |  yes  |  |
 | mid | string |  no  |  |
 | current_shipment_status | string |  yes  |  |
 | status | [ShipmentStatusData](#ShipmentStatusData) |  no  |  |
 | delivery_status | [string] |  yes  |  |
 | packaging_type | string |  yes  |  |
 | can_cancel | boolean |  no  |  |
 | pay_button | string |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | is_fynd_store | string |  no  |  |
 | escalation | string |  no  |  |
 | company | string |  yes  |  |
 | affiliate_shipment_id | string |  yes  |  |
 | bag_status_history | [[BagStatusHistory](#BagStatusHistory)] |  no  |  |
 | payments | [ShipmentPayments](#ShipmentPayments) |  no  |  |
 | forward_tracking_list | [string] |  no  |  |
 | ordering_store | string |  yes  |  |
 | fyndstore_emp | string |  yes  |  |
 | bank_data | string |  no  |  |
 | bags | [OrderBags](#OrderBags) |  no  |  |
 | is_pdsr | string |  no  |  |
 | user_info | string |  no  |  |
 | replacement_details | string |  no  |  |
 | refund_details | string |  no  |  |
 | dp_details | [DPDetails](#DPDetails) |  no  |  |
 | shipment_id | string |  yes  |  |
 | priority_text | string |  no  |  |
 | is_invoiced | boolean |  yes  |  |
 | can_return | boolean |  no  |  |
 | delivery_slot | string |  yes  |  |
 | can_break | string |  yes  |  |
 | status_progress | number |  yes  |  |
 | go_green | boolean |  no  |  |
 | due_date | string |  no  |  |
 | gst_details | [GST](#GST) |  no  |  |
 | coupon | string |  no  |  |
 | billing_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | invoice | string |  yes  |  |
 | enable_dp_tracking | string |  yes  |  |
 | credit_note_id | string |  yes  |  |
 | child_nodes | [string] |  no  |  |
 | is_not_fynd_source | boolean |  yes  |  |
 | secured_delivery_flag | string |  no  |  |
 | lock_status | string |  yes  |  |
 | order_created_time | string |  no  |  |
 | payment_mode | string |  yes  |  |
 | is_packaging_order | boolean |  yes  |  |
 | platform_logo | boolean |  yes  |  |
 | total_items | number |  no  |  |
 | order_type | string |  yes  |  |
 | order | [OrderDetailsData](#OrderDetailsData) |  no  |  |
 | forward_shipment_status | [string] |  no  |  |
 | delivery_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | is_fynd_coupon | boolean |  yes  |  |
 | tracking_url | string |  yes  |  |
 | forward_order_status | [string] |  no  |  |
 | shipment_quantity | number |  yes  |  |
 | email_id | string |  yes  |  |
 | tracking_list | [[TrackingList](#TrackingList)] |  no  |  |
 | journey_type | string |  yes  |  |
 | beneficiary_details | boolean |  no  |  |
 | user_agent | string |  yes  |  |
 | kirana_store_id | string |  no  |  |
 | user_id | string |  yes  |  |
 | vertical | string |  no  |  |
 | enable_tracking | boolean |  no  |  |
 | picked_date | string |  yes  |  |
 | refund_text | string |  no  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  |

---


 
 
 #### [Error](#Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | reason | string |  no  |  |

---


 
 
 #### [SubLane](#SubLane)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | next_state | [string] |  no  |  |
 | text | string |  yes  |  |
 | total_shipments | number |  yes  |  |
 | current_state | [string] |  no  |  |
 | value | string |  yes  |  |
 | index | number |  yes  |  |

---


 
 
 #### [SuperLane](#SuperLane)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  yes  |  |
 | text | string |  yes  |  |
 | options | [[SubLane](#SubLane)] |  no  |  |

---


 
 
 #### [LaneConfigResponse](#LaneConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | super_lanes | [[SuperLane](#SuperLane)] |  no  |  |

---


 
 
 #### [Shipment](#Shipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | [ShipmentStatusData](#ShipmentStatusData) |  no  |  |
 | packaging_type | string |  yes  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | bag_status_history | [[BagStatusHistory](#BagStatusHistory)] |  no  |  |
 | payments | [ShipmentPayments](#ShipmentPayments) |  no  |  |
 | bags | [OrderBags](#OrderBags) |  no  |  |
 | dp_details | [DPDetails](#DPDetails) |  no  |  |
 | shipment_id | string |  yes  |  |
 | priority_text | string |  no  |  |
 | delivery_slot | string |  yes  |  |
 | gst_details | [GST](#GST) |  no  |  |
 | billing_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | enable_dp_tracking | string |  yes  |  |
 | payment_mode | string |  yes  |  |
 | platform_logo | string |  yes  |  |
 | total_items | number |  no  |  |
 | order | [OrderDetailsData](#OrderDetailsData) |  no  |  |
 | delivery_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | shipment_quantity | number |  yes  |  |
 | tracking_list | [[TrackingList](#TrackingList)] |  no  |  |
 | journey_type | string |  yes  |  |
 | user_agent | string |  yes  |  |
 | vertical | string |  no  |  |
 | picked_date | string |  yes  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  |

---


 
 
 #### [OrderDict](#OrderDict)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_date | string |  yes  |  |
 | shipment_count | number |  yes  |  |
 | fynd_order_id | string |  yes  |  |

---


 
 
 #### [ShipmentDetailsResponse](#ShipmentDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | shipments | [[Shipment](#Shipment)] |  no  |  |
 | order | [OrderDict](#OrderDict) |  no  |  |

---


 
 
 #### [Item](#Item)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | l3_category_name | string |  yes  |  |
 | l3_category | number |  yes  |  |
 | can_cancel | boolean |  yes  |  |
 | l1_category | [string] |  no  |  |
 | color | string |  no  |  |
 | code | string |  yes  |  |
 | image | [string] |  no  |  |
 | can_return | boolean |  yes  |  |
 | name | string |  yes  |  |
 | id | number |  yes  |  |
 | size | string |  yes  |  |
 | department_id | number |  yes  |  |

---


 
 
 #### [BagUnit](#BagUnit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  |  |
 | item_quantity | number |  yes  |  |
 | total_shipment_bags | number |  yes  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | ordering_channel | string |  yes  |  |
 | shipment_id | string |  yes  |  |
 | gst | [GST](#GST) |  no  |  |
 | item | [Item](#Item) |  no  |  |
 | bag_id | number |  yes  |  |

---


 
 
 #### [UserDataInfo](#UserDataInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gender | string |  yes  |  |
 | uid | number |  yes  |  |
 | mobile | string |  yes  |  |
 | email | string |  yes  |  |
 | last_name | string |  yes  |  |
 | is_anonymous_user | boolean |  yes  |  |
 | avis_user_id | string |  yes  |  |
 | first_name | string |  yes  |  |

---


 
 
 #### [ShipmentItemFulFillingStore](#ShipmentItemFulFillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  yes  |  |
 | id | string |  yes  |  |

---


 
 
 #### [ShipmentStatus](#ShipmentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ops_status | string |  yes  |  |
 | status | string |  yes  |  |
 | title | string |  yes  |  |
 | actual_status | string |  yes  |  |
 | hex_code | string |  yes  |  |

---


 
 
 #### [PaymentModeInfo](#PaymentModeInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | logo | string |  yes  |  |

---


 
 
 #### [ShipmentItem](#ShipmentItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bags | [[BagUnit](#BagUnit)] |  no  |  |
 | user | [UserDataInfo](#UserDataInfo) |  no  |  |
 | total_shipments_in_order | number |  yes  |  |
 | application | string |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | shipment_created_at | number |  yes  |  |
 | fulfilling_store | [ShipmentItemFulFillingStore](#ShipmentItemFulFillingStore) |  no  |  |
 | total_bags_count | number |  yes  |  |
 | fulfilling_centre | string |  yes  |  |
 | shipment_status | [ShipmentStatus](#ShipmentStatus) |  no  |  |
 | payment_mode_info | [PaymentModeInfo](#PaymentModeInfo) |  no  |  |
 | created_at | string |  yes  |  |
 | id | string |  yes  |  |
 | sla | string |  no  |  |
 | channel | string |  no  |  |

---


 
 
 #### [FilterInfoOption](#FilterInfoOption)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  no  |  |
 | text | string |  yes  |  |

---


 
 
 #### [FiltersInfo](#FiltersInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | value | string |  yes  |  |
 | text | string |  yes  |  |
 | options | [[FilterInfoOption](#FilterInfoOption)] |  no  |  |

---


 
 
 #### [ShipmentInternalPlatformViewResponse](#ShipmentInternalPlatformViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ShipmentItem](#ShipmentItem)] |  no  |  |
 | filters | [[FiltersInfo](#FiltersInfo)] |  no  |  |
 | applied_filters | string |  no  |  |
 | page | string |  no  |  |

---


 
 
 #### [ShipmentPricesDataSet](#ShipmentPricesDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst_fee | number |  no  |  |
 | cashback | number |  no  |  |
 | cod_charges | number |  no  |  |
 | discount | string |  no  |  |
 | price_marked | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | amount_paid | number |  no  |  |
 | refund_credit | number |  no  |  |
 | price_effective | number |  no  |  |
 | tax_collected_at_source | number |  no  |  |
 | fynd_credits | number |  no  |  |
 | coupon_effective_discount | number |  no  |  |
 | value_of_good | number |  no  |  |

---


 
 
 #### [Shipment1](#Shipment1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_items | string |  yes  |  |
 | order_id | string |  yes  |  |
 | prices | [ShipmentPricesDataSet](#ShipmentPricesDataSet) |  no  |  |
 | shipment_id | string |  yes  |  |
 | rtd_done | string |  yes  |  |
 | shipment_status | string |  yes  |  |

---


 
 
 #### [ManifestShipmentResponse](#ManifestShipmentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | shipments | [[Shipment1](#Shipment1)] |  no  |  |

---


 
 
 #### [ErrorSchemaDataSet](#ErrorSchemaDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | reason | string |  no  |  |

---


 
 
 #### [UserDataSet](#UserDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gender | string |  no  |  |
 | mobile | number |  yes  |  |
 | email | string |  no  |  |
 | name | string |  yes  |  |

---


 
 
 #### [ShipmentPricesDataInfo](#ShipmentPricesDataInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cashback | number |  no  |  |
 | cod_charges | number |  no  |  |
 | price_marked | number |  no  |  |
 | discount | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | value_of_good | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | amount_paid | number |  no  |  |
 | refund_credit | number |  no  |  |
 | price_effective | number |  no  |  |
 | fynd_credits | number |  no  |  |
 | coupon_value | string |  no  |  |
 | refund_amount | number |  no  |  |

---


 
 
 #### [ShipmentDataSet](#ShipmentDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cashback | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | total_bags | number |  yes  |  |
 | brand_calculated_amount | number |  no  |  |
 | total_items | number |  yes  |  |
 | delivery_charge | number |  no  |  |
 | prices | [ShipmentPricesDataInfo](#ShipmentPricesDataInfo) |  no  |  |
 | fynd_credits | number |  no  |  |
 | shipment_id | string |  yes  |  |
 | refund_credit | number |  no  |  |
 | shipment_status | string |  yes  |  |
 | price_effective | number |  no  |  |
 | tax_collected_at_source | number |  no  |  |
 | shipment_images | [string] |  no  |  |
 | coupon_effective_discount | number |  no  |  |
 | value_of_good | number |  no  |  |

---


 
 
 #### [OrderDataSet](#OrderDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_info | [UserDataSet](#UserDataSet) |  no  |  |
 | order_id | string |  yes  |  |
 | order_created_time | string |  yes  |  |
 | shipments | [[ShipmentDataSet](#ShipmentDataSet)] |  no  |  |

---


 
 
 #### [OrderListingResponse](#OrderListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | orders | [[OrderDataSet](#OrderDataSet)] |  no  |  |

---


 
 
 #### [OrderErrorSchemaDataSet](#OrderErrorSchemaDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | reason | string |  no  |  |

---


 
 
 #### [FilterDict](#FilterDict)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  yes  |  |
 | text | string |  yes  |  |
 | name | string |  yes  |  |

---


 
 
 #### [Filters](#Filters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | value | string |  yes  |  |
 | text | string |  yes  |  |
 | options | [[FilterDict](#FilterDict)] |  no  |  |

---


 
 
 #### [FiltersResponse](#FiltersResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channels | [[Filters](#Filters)] |  no  |  |
 | delivery_partners | [[Filters](#Filters)] |  no  |  |

---




