



##### [Back to Platform docs](./README.md)

## Orders Methods
Handles all platform order and shipment api(s)
* [getShipmentDetails](#getshipmentdetails)
* [getLaneConfig](#getlaneconfig)
* [getOrderShipmentDetails](#getordershipmentdetails)
* [getShipmentList](#getshipmentlist)
* [getShipmentToManifest](#getshipmenttomanifest)
* [getOrders](#getorders)
* [getMetricCount](#getmetriccount)
* [getfilters](#getfilters)



## Methods with example and description


### getShipmentDetails




```javascript
// Promise
const promise = client.orders.getShipmentDetails({  shipmentId : value,
 orderingCompanyId : value,
 requestByExt : value });

// Async/Await
const data = await client.orders.getShipmentDetails({  shipmentId : value,
 orderingCompanyId : value,
 requestByExt : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes |  |    
| orderingCompanyId | string | no |  |    
| requestByExt | string | no |  |  





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
 toDate : value,
 dpIds : value,
 stores : value,
 salesChannel : value,
 paymentMode : value,
 bagStatus : value });

// Async/Await
const data = await client.orders.getLaneConfig({  superLane : value,
 groupEntity : value,
 fromDate : value,
 toDate : value,
 dpIds : value,
 stores : value,
 salesChannel : value,
 paymentMode : value,
 bagStatus : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| superLane | string | no |  |    
| groupEntity | string | no |  |    
| fromDate | string | no |  |    
| toDate | string | no |  |    
| dpIds | string | no |  |    
| stores | string | no |  |    
| salesChannel | string | no |  |    
| paymentMode | string | no |  |    
| bagStatus | string | no |  |  





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


### getMetricCount




```javascript
// Promise
const promise = client.orders.getMetricCount();

// Async/Await
const data = await client.orders.getMetricCount();
```








*Returned Response:*




[MetricCountResponse](#MetricCountResponse)

Response containing count of shipments of the given metrics




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

 
 
 #### [FulfillingStore](#FulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | city | string |  yes  |  |
 | address | string |  yes  |  |
 | contact_person | string |  yes  |  |
 | meta | string |  yes  |  |
 | fulfillment_channel | string |  yes  |  |
 | code | string |  yes  |  |
 | store_name | string |  yes  |  |
 | phone | string |  yes  |  |
 | id | string |  yes  |  |
 | pincode | string |  yes  |  |
 | state | string |  yes  |  |
 | country | string |  yes  |  |

---


 
 
 #### [GST](#GST)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst_fee | number |  yes  |  |
 | value_of_good | number |  yes  |  |
 | tax_collected_at_source | number |  yes  |  |
 | gstin_code | string |  yes  |  |
 | brand_calculated_amount | number |  yes  |  |

---


 
 
 #### [Prices](#Prices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | price_effective | number |  yes  |  |
 | value_of_good | number |  yes  |  |
 | discount | number |  yes  |  |
 | refund_amount | number |  yes  |  |
 | tax_collected_at_source | number |  yes  |  |
 | promotion_effective_discount | number |  yes  |  |
 | amount_paid_roundoff | number |  yes  |  |
 | delivery_charge | number |  yes  |  |
 | amount_paid | number |  yes  |  |
 | cod_charges | number |  yes  |  |
 | cashback_applied | number |  yes  |  |
 | coupon_value | number |  yes  |  |
 | refund_credit | number |  yes  |  |
 | cashback | number |  yes  |  |
 | price_marked | number |  yes  |  |
 | fynd_credits | number |  yes  |  |

---


 
 
 #### [UserDetailsData](#UserDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | city | string |  yes  |  |
 | address | string |  yes  |  |
 | name | string |  yes  |  |
 | phone | string |  yes  |  |
 | pincode | string |  yes  |  |
 | state | string |  yes  |  |
 | country | string |  yes  |  |
 | email | string |  yes  |  |

---


 
 
 #### [OrderDetailsData](#OrderDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ordering_channel_logo | string |  no  |  |
 | order_value | string |  no  |  |
 | ordering_channel | string |  no  |  |
 | fynd_order_id | string |  yes  |  |
 | order_date | string |  no  |  |
 | tax_details | string |  no  |  |
 | cod_charges | string |  no  |  |
 | affiliate_id | string |  no  |  |
 | source | string |  no  |  |

---


 
 
 #### [DPDetails](#DPDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pincode | string |  no  |  |
 | id | string |  no  |  |
 | eway_bill_id | string |  no  |  |
 | awb_no | string |  no  |  |
 | gst_tag | string |  no  |  |
 | country | string |  no  |  |
 | track_url | string |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [BagStatusHistory](#BagStatusHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  |  |
 | app_display_name | boolean |  no  |  |
 | state_type | boolean |  no  |  |
 | updated_at | string |  no  |  |
 | forward | boolean |  no  |  |
 | display_name | boolean |  no  |  |

---


 
 
 #### [ShipmentStatusData](#ShipmentStatusData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_at | string |  no  |  |
 | status | string |  no  |  |
 | bag_list | [number] |  no  |  |
 | id | number |  no  |  |
 | shipment_id | string |  no  |  |

---


 
 
 #### [ShipmentPayments](#ShipmentPayments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | source | string |  no  |  |
 | logo | string |  no  |  |
 | mode | string |  yes  |  |

---


 
 
 #### [TrackingList](#TrackingList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_passed | boolean |  no  |  |
 | is_current | boolean |  no  |  |
 | time | string |  no  |  |
 | status | string |  yes  |  |

---


 
 
 #### [OrderBrandName](#OrderBrandName)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_name | string |  yes  |  |
 | logo | string |  yes  |  |
 | created_on | number |  yes  |  |
 | id | number |  yes  |  |
 | company | string |  yes  |  |
 | modified_on | number |  no  |  |

---


 
 
 #### [FinancialBreakup](#FinancialBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cod_charges | number |  yes  |  |
 | brand_calculated_amount | number |  yes  |  |
 | refund_credit | number |  yes  |  |
 | size | string |  yes  |  |
 | cashback_applied | number |  yes  |  |
 | gst_fee | string |  yes  |  |
 | added_to_fynd_cash | boolean |  yes  |  |
 | hsn_code | string |  yes  |  |
 | promotion_effective_discount | number |  yes  |  |
 | delivery_charge | number |  yes  |  |
 | item_name | string |  yes  |  |
 | gst_tax_percentage | number |  yes  |  |
 | coupon_effective_discount | number |  yes  |  |
 | fynd_credits | number |  yes  |  |
 | price_effective | number |  yes  |  |
 | value_of_good | number |  yes  |  |
 | discount | number |  yes  |  |
 | total_units | number |  yes  |  |
 | amount_paid | number |  yes  |  |
 | cashback | number |  yes  |  |
 | price_marked | number |  yes  |  |
 | pm_price_split | string |  yes  |  |
 | identifiers | string |  yes  |  |
 | transfer_price | number |  yes  |  |
 | coupon_value | number |  yes  |  |
 | gst_tag | string |  yes  |  |

---


 
 
 #### [OrderBagArticle](#OrderBagArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | string |  no  |  |
 | identifiers | string |  no  |  |
 | return_config | string |  no  |  |

---


 
 
 #### [BagConfigs](#BagConfigs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_active | boolean |  yes  |  |
 | can_be_cancelled | boolean |  yes  |  |
 | is_customer_return_allowed | boolean |  yes  |  |
 | enable_tracking | boolean |  yes  |  |
 | allow_force_return | boolean |  yes  |  |
 | is_returnable | boolean |  yes  |  |

---


 
 
 #### [OrderBagItem](#OrderBagItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand | string |  yes  |  |
 | l1_category | [string] |  no  |  |
 | image | [string] |  no  |  |
 | l3_category | number |  yes  |  |
 | slug_key | string |  yes  |  |
 | size | string |  yes  |  |
 | name | string |  yes  |  |

---


 
 
 #### [BagGST](#BagGST)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst_fee | number |  no  |  |
 | value_of_good | number |  no  |  |
 | is_default_hsn_code | boolean |  no  |  |
 | hsn_code | string |  no  |  |
 | gst_tax_percentage | number |  no  |  |
 | gstin_code | string |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | gst_tag | string |  no  |  |

---


 
 
 #### [OrderBags](#OrderBags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entity_type | string |  yes  |  |
 | current_status | string |  yes  |  |
 | brand | [OrderBrandName](#OrderBrandName) |  no  |  |
 | financial_breakup | [[FinancialBreakup](#FinancialBreakup)] |  no  |  |
 | article | [OrderBagArticle](#OrderBagArticle) |  no  |  |
 | quantity | number |  yes  |  |
 | bag_configs | [BagConfigs](#BagConfigs) |  no  |  |
 | item | [OrderBagItem](#OrderBagItem) |  no  |  |
 | bag_id | number |  yes  |  |
 | gst_details | [BagGST](#BagGST) |  no  |  |
 | display_name | string |  yes  |  |

---


 
 
 #### [ShipmentInfoResponse](#ShipmentInfoResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | packaging_type | string |  yes  |  |
 | pay_button | string |  no  |  |
 | kirana_store_id | string |  no  |  |
 | journey_type | string |  yes  |  |
 | bank_data | string |  no  |  |
 | delivery_status | [string] |  yes  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  |
 | invoice | string |  yes  |  |
 | forward_order_status | [string] |  no  |  |
 | company | string |  yes  |  |
 | vertical | string |  no  |  |
 | child_nodes | [string] |  no  |  |
 | gst_details | [GST](#GST) |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | affiliate_shipment_id | string |  yes  |  |
 | is_packaging_order | boolean |  yes  |  |
 | forward_tracking_list | [string] |  no  |  |
 | user_agent | string |  yes  |  |
 | enable_dp_tracking | string |  yes  |  |
 | user_id | string |  yes  |  |
 | secured_delivery_flag | string |  no  |  |
 | billing_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | ordering_store | string |  yes  |  |
 | is_invoiced | boolean |  yes  |  |
 | due_date | string |  no  |  |
 | order | [OrderDetailsData](#OrderDetailsData) |  no  |  |
 | priority_text | string |  no  |  |
 | coupon | string |  no  |  |
 | beneficiary_details | boolean |  no  |  |
 | mid | string |  no  |  |
 | order_status | string |  yes  |  |
 | can_return | boolean |  no  |  |
 | delivery_slot | string |  yes  |  |
 | user_info | string |  no  |  |
 | dp_details | [DPDetails](#DPDetails) |  no  |  |
 | delivery_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | bag_status_history | [[BagStatusHistory](#BagStatusHistory)] |  no  |  |
 | status | [ShipmentStatusData](#ShipmentStatusData) |  no  |  |
 | can_cancel | boolean |  no  |  |
 | tracking_url | string |  yes  |  |
 | payments | [ShipmentPayments](#ShipmentPayments) |  no  |  |
 | shipment_quantity | number |  yes  |  |
 | total_items | number |  no  |  |
 | refund_text | string |  no  |  |
 | is_pdsr | string |  no  |  |
 | order_type | string |  yes  |  |
 | shipment_id | string |  yes  |  |
 | replacement_details | string |  no  |  |
 | fyndstore_emp | string |  yes  |  |
 | status_progress | number |  yes  |  |
 | go_green | boolean |  no  |  |
 | is_fynd_store | string |  no  |  |
 | payment_mode | string |  yes  |  |
 | is_not_fynd_source | boolean |  yes  |  |
 | items | [string] |  yes  |  |
 | credit_note_id | string |  yes  |  |
 | tracking_list | [[TrackingList](#TrackingList)] |  no  |  |
 | order_created_time | string |  no  |  |
 | enable_tracking | boolean |  no  |  |
 | bags | [OrderBags](#OrderBags) |  no  |  |
 | escalation | string |  no  |  |
 | refund_details | string |  no  |  |
 | picked_date | string |  yes  |  |
 | can_break | string |  yes  |  |
 | lock_status | string |  yes  |  |
 | forward_shipment_status | [string] |  no  |  |
 | current_shipment_status | string |  yes  |  |
 | is_fynd_coupon | boolean |  yes  |  |
 | platform_logo | boolean |  yes  |  |
 | email_id | string |  yes  |  |

---


 
 
 #### [Error](#Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason | string |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [SubLane](#SubLane)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | next_state | [string] |  no  |  |
 | text | string |  yes  |  |
 | index | number |  yes  |  |
 | value | string |  yes  |  |
 | total_shipments | number |  yes  |  |
 | current_state | [string] |  no  |  |

---


 
 
 #### [SuperLane](#SuperLane)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  yes  |  |
 | options | [[SubLane](#SubLane)] |  no  |  |
 | text | string |  yes  |  |

---


 
 
 #### [LaneConfigResponse](#LaneConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | super_lanes | [[SuperLane](#SuperLane)] |  no  |  |

---


 
 
 #### [OrderDict](#OrderDict)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_date | string |  yes  |  |
 | shipment_count | number |  yes  |  |
 | fynd_order_id | string |  yes  |  |

---


 
 
 #### [Shipment](#Shipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | packaging_type | string |  yes  |  |
 | journey_type | string |  yes  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  |
 | vertical | string |  no  |  |
 | gst_details | [GST](#GST) |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | user_agent | string |  yes  |  |
 | enable_dp_tracking | string |  yes  |  |
 | billing_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | order | [OrderDetailsData](#OrderDetailsData) |  no  |  |
 | priority_text | string |  no  |  |
 | delivery_slot | string |  yes  |  |
 | dp_details | [DPDetails](#DPDetails) |  no  |  |
 | delivery_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | bag_status_history | [[BagStatusHistory](#BagStatusHistory)] |  no  |  |
 | status | [ShipmentStatusData](#ShipmentStatusData) |  no  |  |
 | payments | [ShipmentPayments](#ShipmentPayments) |  no  |  |
 | shipment_quantity | number |  yes  |  |
 | total_items | number |  no  |  |
 | shipment_id | string |  yes  |  |
 | payment_mode | string |  yes  |  |
 | tracking_list | [[TrackingList](#TrackingList)] |  no  |  |
 | bags | [OrderBags](#OrderBags) |  no  |  |
 | picked_date | string |  yes  |  |
 | platform_logo | string |  yes  |  |

---


 
 
 #### [ShipmentDetailsResponse](#ShipmentDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order | [OrderDict](#OrderDict) |  no  |  |
 | shipments | [[Shipment](#Shipment)] |  no  |  |
 | success | boolean |  yes  |  |

---


 
 
 #### [ShipmentStatus](#ShipmentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  |  |
 | actual_status | string |  yes  |  |
 | title | string |  yes  |  |
 | hex_code | string |  yes  |  |
 | ops_status | string |  yes  |  |

---


 
 
 #### [Item](#Item)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | l3_category_name | string |  yes  |  |
 | can_cancel | boolean |  yes  |  |
 | l1_category | [string] |  no  |  |
 | image | [string] |  no  |  |
 | code | string |  yes  |  |
 | size | string |  yes  |  |
 | l3_category | number |  yes  |  |
 | department_id | number |  yes  |  |
 | id | number |  yes  |  |
 | can_return | boolean |  yes  |  |
 | color | string |  no  |  |
 | name | string |  yes  |  |

---


 
 
 #### [BagUnit](#BagUnit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_shipment_bags | number |  yes  |  |
 | gst | [GST](#GST) |  no  |  |
 | ordering_channel | string |  yes  |  |
 | status | string |  yes  |  |
 | item_quantity | number |  yes  |  |
 | item | [Item](#Item) |  no  |  |
 | shipment_id | string |  yes  |  |
 | bag_id | number |  yes  |  |
 | prices | [Prices](#Prices) |  no  |  |

---


 
 
 #### [UserDataInfo](#UserDataInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | last_name | string |  yes  |  |
 | mobile | string |  yes  |  |
 | is_anonymous_user | boolean |  yes  |  |
 | avis_user_id | string |  yes  |  |
 | first_name | string |  yes  |  |
 | gender | string |  yes  |  |
 | uid | number |  yes  |  |
 | email | string |  yes  |  |

---


 
 
 #### [ShipmentItemFulFillingStore](#ShipmentItemFulFillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | code | string |  yes  |  |

---


 
 
 #### [PaymentModeInfo](#PaymentModeInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string |  yes  |  |
 | type | string |  yes  |  |

---


 
 
 #### [ShipmentItem](#ShipmentItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fulfilling_centre | string |  yes  |  |
 | total_bags_count | number |  yes  |  |
 | channel | string |  no  |  |
 | shipment_created_at | number |  yes  |  |
 | shipment_status | [ShipmentStatus](#ShipmentStatus) |  no  |  |
 | created_at | string |  yes  |  |
 | sla | string |  no  |  |
 | bags | [[BagUnit](#BagUnit)] |  no  |  |
 | user | [UserDataInfo](#UserDataInfo) |  no  |  |
 | fulfilling_store | [ShipmentItemFulFillingStore](#ShipmentItemFulFillingStore) |  no  |  |
 | id | string |  yes  |  |
 | payment_mode_info | [PaymentModeInfo](#PaymentModeInfo) |  no  |  |
 | application | string |  no  |  |
 | total_shipments_in_order | number |  yes  |  |
 | prices | [Prices](#Prices) |  no  |  |

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
 | options | [[FilterInfoOption](#FilterInfoOption)] |  no  |  |
 | text | string |  yes  |  |

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
 | price_effective | number |  no  |  |
 | value_of_good | number |  no  |  |
 | discount | string |  no  |  |
 | tax_collected_at_source | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | amount_paid | number |  no  |  |
 | cod_charges | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | refund_credit | number |  no  |  |
 | cashback | number |  no  |  |
 | price_marked | number |  no  |  |
 | coupon_effective_discount | number |  no  |  |
 | fynd_credits | number |  no  |  |

---


 
 
 #### [Shipment1](#Shipment1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | rtd_done | string |  yes  |  |
 | shipment_status | string |  yes  |  |
 | total_items | string |  yes  |  |
 | order_id | string |  yes  |  |
 | shipment_id | string |  yes  |  |
 | prices | [ShipmentPricesDataSet](#ShipmentPricesDataSet) |  no  |  |

---


 
 
 #### [ManifestShipmentResponse](#ManifestShipmentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipments | [[Shipment1](#Shipment1)] |  no  |  |
 | success | boolean |  yes  |  |

---


 
 
 #### [ErrorSchemaDataSet](#ErrorSchemaDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason | string |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [ShipmentPricesDataInfo](#ShipmentPricesDataInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | price_effective | number |  no  |  |
 | value_of_good | number |  no  |  |
 | discount | number |  no  |  |
 | refund_amount | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | amount_paid | number |  no  |  |
 | cod_charges | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | coupon_value | string |  no  |  |
 | refund_credit | number |  no  |  |
 | cashback | number |  no  |  |
 | price_marked | number |  no  |  |
 | fynd_credits | number |  no  |  |

---


 
 
 #### [ShipmentDataSet](#ShipmentDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | price_effective | number |  no  |  |
 | shipment_status | string |  yes  |  |
 | value_of_good | number |  no  |  |
 | shipment_images | [string] |  no  |  |
 | tax_collected_at_source | number |  no  |  |
 | total_items | number |  yes  |  |
 | delivery_charge | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | shipment_id | string |  yes  |  |
 | brand_calculated_amount | number |  no  |  |
 | refund_credit | number |  no  |  |
 | cashback | number |  no  |  |
 | total_bags | number |  yes  |  |
 | coupon_effective_discount | number |  no  |  |
 | prices | [ShipmentPricesDataInfo](#ShipmentPricesDataInfo) |  no  |  |
 | fynd_credits | number |  no  |  |

---


 
 
 #### [UserDataSet](#UserDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mobile | number |  yes  |  |
 | email | string |  no  |  |
 | name | string |  yes  |  |
 | gender | string |  no  |  |

---


 
 
 #### [OrderDataSet](#OrderDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipments | [[ShipmentDataSet](#ShipmentDataSet)] |  no  |  |
 | order_created_time | string |  yes  |  |
 | order_id | string |  yes  |  |
 | user_info | [UserDataSet](#UserDataSet) |  no  |  |

---


 
 
 #### [OrderListingResponse](#OrderListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | orders | [[OrderDataSet](#OrderDataSet)] |  no  |  |
 | success | boolean |  yes  |  |

---


 
 
 #### [OrderErrorSchemaDataSet](#OrderErrorSchemaDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason | string |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [PendingAcceptance](#PendingAcceptance)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | prepaid | number |  yes  |  |
 | total | number |  yes  |  |
 | cod | number |  yes  |  |

---


 
 
 #### [MetricsCount](#MetricsCount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | returned | number |  yes  |  |
 | cancelled | number |  yes  |  |
 | pending_rtd | number |  yes  |  |
 | pending_pickup | number |  yes  |  |
 | pending_acceptance | [[PendingAcceptance](#PendingAcceptance)] |  no  |  |

---


 
 
 #### [MetricCountResponse](#MetricCountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | result | [[MetricsCount](#MetricsCount)] |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [FilterDict](#FilterDict)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  yes  |  |
 | name | string |  yes  |  |
 | text | string |  yes  |  |

---


 
 
 #### [Filters](#Filters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | value | string |  yes  |  |
 | options | [[FilterDict](#FilterDict)] |  no  |  |
 | text | string |  yes  |  |

---


 
 
 #### [FiltersResponse](#FiltersResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channels | [[Filters](#Filters)] |  no  |  |
 | delivery_partners | [[Filters](#Filters)] |  no  |  |

---




