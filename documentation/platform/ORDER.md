



##### [Back to Platform docs](./README.md)

## Order Methods
Handles all platform order and shipment api(s)
* [getShipmentList](#getshipmentlist)
* [getShipmentDetails](#getshipmentdetails)
* [getOrderShipmentDetails](#getordershipmentdetails)
* [getLaneConfig](#getlaneconfig)
* [getApplicationShipments](#getapplicationshipments)
* [getOrders](#getorders)
* [getMetricCount](#getmetriccount)
* [getAppOrderShipmentDetails](#getappordershipmentdetails)
* [getfilters](#getfilters)
* [createShipmentReport](#createshipmentreport)
* [getReportsShipmentListing](#getreportsshipmentlisting)
* [upsertJioCode](#upsertjiocode)
* [getBulkInvoice](#getbulkinvoice)
* [bulkActionProcessXlsxFile](#bulkactionprocessxlsxfile)
* [bulkActionDetails](#bulkactiondetails)
* [createOrder](#createorder)
* [invalidateShipmentCache](#invalidateshipmentcache)
* [reassignLocation](#reassignlocation)
* [updateShipmentLock](#updateshipmentlock)
* [getAnnouncements](#getannouncements)
* [updateAddress](#updateaddress)
* [click2Call](#click2call)
* [statusUpdateInternalV4](#statusupdateinternalv4)
* [processManifest](#processmanifest)
* [getRoleBasedActions](#getrolebasedactions)
* [getShipmentHistory](#getshipmenthistory)
* [sendSmsNinja](#sendsmsninja)
* [checkOrderStatus](#checkorderstatus)



## Methods with example and description


### getShipmentList




```javascript
// Promise
const promise = client.order.getShipmentList({  lane : value,
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
 isPrioritySort : value,
 excludeLockedShipments : value });

// Async/Await
const data = await client.order.getShipmentList({  lane : value,
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
 isPrioritySort : value,
 excludeLockedShipments : value });
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
| excludeLockedShipments | boolean | no |  |  





*Returned Response:*




[ShipmentInternalPlatformViewResponse](#ShipmentInternalPlatformViewResponse)

We are processing the report!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getShipmentDetails




```javascript
// Promise
const promise = client.order.getShipmentDetails({  shipmentId : value,
 orderingCompanyId : value,
 requestByExt : value });

// Async/Await
const data = await client.order.getShipmentDetails({  shipmentId : value,
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


### getOrderShipmentDetails




```javascript
// Promise
const promise = client.order.getOrderShipmentDetails({  orderId : value });

// Async/Await
const data = await client.order.getOrderShipmentDetails({  orderId : value });
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


### getLaneConfig




```javascript
// Promise
const promise = client.order.getLaneConfig({  superLane : value,
 groupEntity : value,
 fromDate : value,
 toDate : value,
 dpIds : value,
 stores : value,
 salesChannel : value,
 paymentMode : value,
 bagStatus : value });

// Async/Await
const data = await client.order.getLaneConfig({  superLane : value,
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


### getApplicationShipments




```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").order.getApplicationShipments({  lane : value,
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
const data = await client.application("<APPLICATION_ID>").order.getApplicationShipments({  lane : value,
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


### getOrders




```javascript
// Promise
const promise = client.order.getOrders({  lane : value,
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
const data = await client.order.getOrders({  lane : value,
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
const promise = client.order.getMetricCount({  fromDate : value,
 toDate : value });

// Async/Await
const data = await client.order.getMetricCount({  fromDate : value,
 toDate : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| fromDate | string | no |  |    
| toDate | string | no |  |  





*Returned Response:*




[MetricCountResponse](#MetricCountResponse)

Response containing count of shipments of the given metrics




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getAppOrderShipmentDetails




```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").order.getAppOrderShipmentDetails({  orderId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").order.getAppOrderShipmentDetails({  orderId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes |  |  





*Returned Response:*




[ShipmentDetailsResponse](#ShipmentDetailsResponse)

We render shipment details.




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


### getfilters




```javascript
// Promise
const promise = client.order.getfilters({  view : value,
 groupEntity : value });

// Async/Await
const data = await client.order.getfilters({  view : value,
 groupEntity : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| view | string | yes |  |    
| groupEntity | string | no |  |  





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


### createShipmentReport




```javascript
// Promise
const promise = client.order.createShipmentReport({  fromDate : value,
 toDate : value });

// Async/Await
const data = await client.order.createShipmentReport({  fromDate : value,
 toDate : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| fromDate | string | no |  |    
| toDate | string | no |  |  





*Returned Response:*




[Success](#Success)

We have accepted report generation request.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getReportsShipmentListing




```javascript
// Promise
const promise = client.order.getReportsShipmentListing({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.order.getReportsShipmentListing({  pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no |  |    
| pageSize | number | no |  |  





*Returned Response:*




[OmsReports](#OmsReports)

We have are getting the info.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### upsertJioCode




```javascript
// Promise
const promise = client.order.upsertJioCode({  body : value });

// Async/Await
const data = await client.order.upsertJioCode({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [JioCodeUpsertPayload](#JioCodeUpsertPayload) | yes | Request body |




*Returned Response:*




[JioCodeUpsertResponse](#JioCodeUpsertResponse)

We are processing the report!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getBulkInvoice




```javascript
// Promise
const promise = client.order.getBulkInvoice({  batchId : value });

// Async/Await
const data = await client.order.getBulkInvoice({  batchId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| batchId | string | yes |  |  





*Returned Response:*




[BulkInvoicingResponse](#BulkInvoicingResponse)

We are processing the file!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{}
```
</details>









---


### bulkActionProcessXlsxFile
emits uuid to kafka topic.



```javascript
// Promise
const promise = client.order.bulkActionProcessXlsxFile({  body : value });

// Async/Await
const data = await client.order.bulkActionProcessXlsxFile({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [BulkActionPayload](#BulkActionPayload) | yes | Request body |


Use this API to start processing Xlsx file.

*Returned Response:*




[BulkActionResponse](#BulkActionResponse)

Success to acknowledge the service was notified




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "status": true,
  "message": "Successful"
}
```
</details>









---


### bulkActionDetails
Returns failed, processing and successfully processed shipments.



```javascript
// Promise
const promise = client.order.bulkActionDetails({  batchId : value });

// Async/Await
const data = await client.order.bulkActionDetails({  batchId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| batchId | string | yes |  |  



Returns failed, processing and successfully processed shipments along with their counts and failed reasons.

*Returned Response:*




[BulkActionDetailsResponse](#BulkActionDetailsResponse)

Success to acknowledge the service was notified




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": [
    {
      "batch_id": "d219af50-d37d-421b-b804-db2c51fa554a",
      "company_id": "1",
      "total_shipment_count": 1,
      "successful_shipment_ids": [],
      "successful_shipments_count": 0,
      "failed_shipments_count": 0,
      "processing_shipments_count": 1
    }
  ],
  "error": [],
  "message": "",
  "failed_records": [],
  "uploaded_by": "Neha Shetye",
  "user_id": "5f23c85bf4439a812561443a",
  "uploaded_on": "08 Nov 2022, 01:09 PM",
  "status": false
}
```
</details>









---


### createOrder




```javascript
// Promise
const promise = client.order.createOrder({  body : value });

// Async/Await
const data = await client.order.createOrder({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateOrderPayload](#CreateOrderPayload) | yes | Request body |




*Returned Response:*




[CreateOrderResponse](#CreateOrderResponse)

Successfully created an order!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### invalidateShipmentCache




```javascript
// Promise
const promise = client.order.invalidateShipmentCache({  body : value });

// Async/Await
const data = await client.order.invalidateShipmentCache({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [InvalidateShipmentCachePayload](#InvalidateShipmentCachePayload) | yes | Request body |


Invalidate shipment Cache

*Returned Response:*




[InvalidateShipmentCacheResponse](#InvalidateShipmentCacheResponse)

Successfully updated shipment cache!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### reassignLocation




```javascript
// Promise
const promise = client.order.reassignLocation({  body : value });

// Async/Await
const data = await client.order.reassignLocation({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [StoreReassign](#StoreReassign) | yes | Request body |


Reassign Location

*Returned Response:*




[StoreReassignResponse](#StoreReassignResponse)

Successfully reassigned location!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateShipmentLock




```javascript
// Promise
const promise = client.order.updateShipmentLock({  body : value });

// Async/Await
const data = await client.order.updateShipmentLock({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UpdateShipmentLockPayload](#UpdateShipmentLockPayload) | yes | Request body |


update shipment lock

*Returned Response:*




[UpdateShipmentLockResponse](#UpdateShipmentLockResponse)

Successfully updated shipment cache!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getAnnouncements




```javascript
// Promise
const promise = client.order.getAnnouncements({  date : value });

// Async/Await
const data = await client.order.getAnnouncements({  date : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| date | string | no |  |  





*Returned Response:*




[AnnouncementsResponse](#AnnouncementsResponse)

Announcements retrieved successfully




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateAddress




```javascript
// Promise
const promise = client.order.updateAddress({  shipmentId : value,
 addressCategory : value,
 name : value,
 address : value,
 addressType : value,
 pincode : value,
 phone : value,
 email : value,
 landmark : value,
 city : value,
 state : value,
 country : value });

// Async/Await
const data = await client.order.updateAddress({  shipmentId : value,
 addressCategory : value,
 name : value,
 address : value,
 addressType : value,
 pincode : value,
 phone : value,
 email : value,
 landmark : value,
 city : value,
 state : value,
 country : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes |  |    
| name | string | no |  |    
| address | string | no |  |    
| addressType | string | no |  |    
| pincode | string | no |  |    
| phone | string | no |  |    
| email | string | no |  |    
| landmark | string | no |  |   
| addressCategory | string | yes |  |    
| city | string | no |  |    
| state | string | no |  |    
| country | string | no |  |  





*Returned Response:*




[BaseResponse](#BaseResponse)

Update Address will be processed!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### click2Call




```javascript
// Promise
const promise = client.order.click2Call({  caller : value,
 receiver : value,
 bagId : value,
 callingTo : value,
 callerId : value });

// Async/Await
const data = await client.order.click2Call({  caller : value,
 receiver : value,
 bagId : value,
 callingTo : value,
 callerId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| caller | string | yes |  |   
| receiver | string | yes |  |   
| bagId | string | yes |  |    
| callingTo | string | no |  |    
| callerId | string | no |  |  





*Returned Response:*




[Click2CallResponse](#Click2CallResponse)

Process call on request!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### statusUpdateInternalV4




```javascript
// Promise
const promise = client.order.statusUpdateInternalV4({  body : value });

// Async/Await
const data = await client.order.statusUpdateInternalV4({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [StatusUpdateInternalRequest](#StatusUpdateInternalRequest) | yes | Request body |


Reassign Location

*Returned Response:*




[StatusUpdateInternalResponse](#StatusUpdateInternalResponse)

Successfully reassigned location!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### processManifest




```javascript
// Promise
const promise = client.order.processManifest({  body : value });

// Async/Await
const data = await client.order.processManifest({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateOrderPayload](#CreateOrderPayload) | yes | Request body |




*Returned Response:*




[CreateOrderResponse](#CreateOrderResponse)

Manifest will be processed!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getRoleBasedActions




```javascript
// Promise
const promise = client.order.getRoleBasedActions();

// Async/Await
const data = await client.order.getRoleBasedActions();
```








*Returned Response:*




[GetActionsResponse](#GetActionsResponse)

You will get an array of actions allowed for that particular user based on their role




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getShipmentHistory




```javascript
// Promise
const promise = client.order.getShipmentHistory({  shipmentId : value,
 bagId : value });

// Async/Await
const data = await client.order.getShipmentHistory({  shipmentId : value,
 bagId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| shipmentId | number | no |  |    
| bagId | number | no |  |  





*Returned Response:*




[ShipmentHistoryResponse](#ShipmentHistoryResponse)

It shows the journey of the shipment!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "activity_history": [
    {
      "message": {
        "message": "Bag status changed to pending",
        "store_id": 10,
        "store_code": "SF94",
        "store_name": "shub",
        "reason": {},
        "type": "activity_status"
      },
      "createdat": "01 Apr 2022, 17:57:PM",
      "user": "system",
      "type": "activity_status",
      "l1_detail": null,
      "l2_detail": null,
      "l3_detail": null,
      "ticket_id": null,
      "ticket_url": null
    },
    {
      "message": {
        "message": "Bag status changed to placed",
        "store_id": 10,
        "store_code": "SF94",
        "store_name": "shub",
        "reason": {},
        "type": "activity_status"
      },
      "createdat": "01 Apr 2022, 17:57:PM",
      "user": "system",
      "type": "activity_status",
      "l1_detail": null,
      "l2_detail": null,
      "l3_detail": null,
      "ticket_id": null,
      "ticket_url": null
    }
  ]
}
```
</details>









---


### sendSmsNinja




```javascript
// Promise
const promise = client.order.sendSmsNinja({  body : value });

// Async/Await
const data = await client.order.sendSmsNinja({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [SendSmsPayload](#SendSmsPayload) | yes | Request body |




*Returned Response:*




[OrderStatusResult](#OrderStatusResult)

Sms Sent successfully




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### checkOrderStatus




```javascript
// Promise
const promise = client.order.checkOrderStatus({  body : value });

// Async/Await
const data = await client.order.checkOrderStatus({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [OrderStatus](#OrderStatus) | yes | Request body |




*Returned Response:*




[OrderStatusResult](#OrderStatusResult)

Order Status retrieved successfully




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas

 
 
 #### [ShipmentItemFulFillingStore](#ShipmentItemFulFillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | code | string |  yes  |  |

---


 
 
 #### [PaymentModeInfo](#PaymentModeInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | logo | string |  yes  |  |

---


 
 
 #### [Prices](#Prices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_credits | number |  yes  |  |
 | discount | number |  yes  |  |
 | price_effective | number |  yes  |  |
 | refund_credit | number |  yes  |  |
 | coupon_value | number |  yes  |  |
 | cod_charges | number |  yes  |  |
 | refund_amount | number |  yes  |  |
 | tax_collected_at_source | number |  yes  |  |
 | price_marked | number |  yes  |  |
 | promotion_effective_discount | number |  yes  |  |
 | cashback_applied | number |  yes  |  |
 | cashback | number |  yes  |  |
 | delivery_charge | number |  yes  |  |
 | amount_paid | number |  yes  |  |
 | value_of_good | number |  yes  |  |
 | amount_paid_roundoff | number |  yes  |  |

---


 
 
 #### [UserDataInfo](#UserDataInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gender | string |  yes  |  |
 | first_name | string |  yes  |  |
 | avis_user_id | string |  yes  |  |
 | is_anonymous_user | boolean |  yes  |  |
 | uid | number |  yes  |  |
 | mobile | string |  yes  |  |
 | last_name | string |  yes  |  |
 | email | string |  yes  |  |

---


 
 
 #### [Item](#Item)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | image | [string] |  no  |  |
 | can_return | boolean |  yes  |  |
 | id | number |  yes  |  |
 | can_cancel | boolean |  yes  |  |
 | l3_category | number |  yes  |  |
 | size | string |  yes  |  |
 | color | string |  no  |  |
 | l3_category_name | string |  yes  |  |
 | name | string |  yes  |  |
 | code | string |  yes  |  |
 | l1_category | [string] |  no  |  |
 | department_id | number |  yes  |  |

---


 
 
 #### [GST](#GST)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tax_collected_at_source | number |  yes  |  |
 | brand_calculated_amount | number |  yes  |  |
 | gstin_code | string |  yes  |  |
 | value_of_good | number |  yes  |  |
 | gst_fee | number |  yes  |  |

---


 
 
 #### [BagUnit](#BagUnit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_quantity | number |  yes  |  |
 | bag_id | number |  yes  |  |
 | item | [Item](#Item) |  no  |  |
 | total_shipment_bags | number |  yes  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | shipment_id | string |  yes  |  |
 | gst | [GST](#GST) |  no  |  |
 | ordering_channel | string |  yes  |  |
 | status | string |  yes  |  |

---


 
 
 #### [ShipmentStatus](#ShipmentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hex_code | string |  yes  |  |
 | ops_status | string |  yes  |  |
 | actual_status | string |  yes  |  |
 | status | string |  yes  |  |
 | title | string |  yes  |  |

---


 
 
 #### [ShipmentItem](#ShipmentItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fulfilling_store | [ShipmentItemFulFillingStore](#ShipmentItemFulFillingStore) |  no  |  |
 | total_bags_count | number |  yes  |  |
 | fulfilling_centre | string |  yes  |  |
 | payment_mode_info | [PaymentModeInfo](#PaymentModeInfo) |  no  |  |
 | created_at | string |  yes  |  |
 | total_shipments_in_order | number |  yes  |  |
 | id | string |  yes  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | user | [UserDataInfo](#UserDataInfo) |  no  |  |
 | shipment_created_at | number |  yes  |  |
 | sla | string |  no  |  |
 | application | string |  no  |  |
 | bags | [[BagUnit](#BagUnit)] |  no  |  |
 | channel | string |  no  |  |
 | shipment_status | [ShipmentStatus](#ShipmentStatus) |  no  |  |

---


 
 
 #### [FilterInfoOption](#FilterInfoOption)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | value | string |  no  |  |
 | text | string |  yes  |  |

---


 
 
 #### [FiltersInfo](#FiltersInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | options | [[FilterInfoOption](#FilterInfoOption)] |  no  |  |
 | value | string |  yes  |  |
 | text | string |  yes  |  |

---


 
 
 #### [ShipmentInternalPlatformViewResponse](#ShipmentInternalPlatformViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | string |  no  |  |
 | items | [[ShipmentItem](#ShipmentItem)] |  no  |  |
 | filters | [[FiltersInfo](#FiltersInfo)] |  no  |  |
 | applied_filters | string |  no  |  |

---


 
 
 #### [Error](#Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [FulfillingStore](#FulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | meta | string |  yes  |  |
 | phone | string |  yes  |  |
 | fulfillment_channel | string |  yes  |  |
 | id | string |  yes  |  |
 | city | string |  yes  |  |
 | store_name | string |  yes  |  |
 | pincode | string |  yes  |  |
 | state | string |  yes  |  |
 | country | string |  yes  |  |
 | contact_person | string |  yes  |  |
 | code | string |  yes  |  |
 | address | string |  yes  |  |

---


 
 
 #### [ShipmentPayments](#ShipmentPayments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mode | string |  yes  |  |
 | source | string |  no  |  |
 | logo | string |  no  |  |

---


 
 
 #### [UserDetailsData](#UserDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | phone | string |  yes  |  |
 | city | string |  yes  |  |
 | email | string |  yes  |  |
 | country | string |  yes  |  |
 | pincode | string |  yes  |  |
 | state | string |  yes  |  |
 | name | string |  yes  |  |
 | address | string |  yes  |  |

---


 
 
 #### [ShipmentStatusData](#ShipmentStatusData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_list | [number] |  no  |  |
 | created_at | string |  no  |  |
 | id | number |  no  |  |
 | shipment_id | string |  no  |  |
 | status | string |  no  |  |

---


 
 
 #### [TrackingList](#TrackingList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | time | string |  no  |  |
 | is_current | boolean |  no  |  |
 | status | string |  yes  |  |
 | is_passed | boolean |  no  |  |

---


 
 
 #### [DPDetails](#DPDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | gst_tag | string |  no  |  |
 | track_url | string |  no  |  |
 | country | string |  no  |  |
 | pincode | string |  no  |  |
 | eway_bill_id | string |  no  |  |
 | name | string |  no  |  |
 | awb_no | string |  no  |  |

---


 
 
 #### [OrderBagItem](#OrderBagItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | image | [string] |  no  |  |
 | name | string |  yes  |  |
 | l3_category | number |  yes  |  |
 | size | string |  yes  |  |
 | slug_key | string |  yes  |  |
 | brand | string |  yes  |  |
 | l1_category | [string] |  no  |  |

---


 
 
 #### [FinancialBreakup](#FinancialBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | refund_credit | number |  yes  |  |
 | total_units | number |  yes  |  |
 | price_marked | number |  yes  |  |
 | size | string |  yes  |  |
 | cashback | number |  yes  |  |
 | brand_calculated_amount | number |  yes  |  |
 | cod_charges | number |  yes  |  |
 | gst_tax_percentage | number |  yes  |  |
 | gst_tag | string |  yes  |  |
 | identifiers | string |  yes  |  |
 | hsn_code | string |  yes  |  |
 | gst_fee | string |  yes  |  |
 | fynd_credits | number |  yes  |  |
 | coupon_effective_discount | number |  yes  |  |
 | promotion_effective_discount | number |  yes  |  |
 | coupon_value | number |  yes  |  |
 | pm_price_split | string |  yes  |  |
 | cashback_applied | number |  yes  |  |
 | item_name | string |  yes  |  |
 | price_effective | number |  yes  |  |
 | amount_paid | number |  yes  |  |
 | discount | number |  yes  |  |
 | transfer_price | number |  yes  |  |
 | delivery_charge | number |  yes  |  |
 | added_to_fynd_cash | boolean |  yes  |  |
 | value_of_good | number |  yes  |  |

---


 
 
 #### [BagGST](#BagGST)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst_tax_percentage | number |  no  |  |
 | is_default_hsn_code | boolean |  no  |  |
 | gst_tag | string |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | hsn_code | string |  no  |  |
 | gstin_code | string |  no  |  |
 | value_of_good | number |  no  |  |
 | gst_fee | number |  no  |  |

---


 
 
 #### [BagConfigs](#BagConfigs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enable_tracking | boolean |  yes  |  |
 | is_customer_return_allowed | boolean |  yes  |  |
 | is_returnable | boolean |  yes  |  |
 | is_active | boolean |  yes  |  |
 | allow_force_return | boolean |  yes  |  |
 | can_be_cancelled | boolean |  yes  |  |

---


 
 
 #### [OrderBrandName](#OrderBrandName)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company | string |  yes  |  |
 | modified_on | number |  no  |  |
 | created_on | number |  yes  |  |
 | id | number |  yes  |  |
 | logo | string |  yes  |  |
 | brand_name | string |  yes  |  |

---


 
 
 #### [OrderBagArticle](#OrderBagArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifiers | string |  no  |  |
 | uid | string |  no  |  |
 | return_config | string |  no  |  |

---


 
 
 #### [OrderBags](#OrderBags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | quantity | number |  yes  |  |
 | bag_id | number |  yes  |  |
 | item | [OrderBagItem](#OrderBagItem) |  no  |  |
 | financial_breakup | [[FinancialBreakup](#FinancialBreakup)] |  no  |  |
 | gst_details | [BagGST](#BagGST) |  no  |  |
 | display_name | string |  yes  |  |
 | bag_configs | [BagConfigs](#BagConfigs) |  no  |  |
 | current_status | string |  yes  |  |
 | brand | [OrderBrandName](#OrderBrandName) |  no  |  |
 | entity_type | string |  yes  |  |
 | article | [OrderBagArticle](#OrderBagArticle) |  no  |  |

---


 
 
 #### [BagStatusHistory](#BagStatusHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | state_type | boolean |  no  |  |
 | app_display_name | boolean |  no  |  |
 | forward | boolean |  no  |  |
 | display_name | boolean |  no  |  |
 | status | string |  yes  |  |
 | updated_at | string |  no  |  |

---


 
 
 #### [OrderDetailsData](#OrderDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ordering_channel_logo | string |  no  |  |
 | tax_details | string |  no  |  |
 | cod_charges | string |  no  |  |
 | order_value | string |  no  |  |
 | ordering_channel | string |  no  |  |
 | source | string |  no  |  |
 | fynd_order_id | string |  yes  |  |
 | order_date | string |  no  |  |
 | affiliate_id | string |  no  |  |

---


 
 
 #### [ShipmentInfoResponse](#ShipmentInfoResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ordering_store | string |  yes  |  |
 | priority_text | string |  no  |  |
 | can_return | boolean |  no  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  |
 | refund_details | string |  no  |  |
 | order_type | string |  yes  |  |
 | go_green | boolean |  no  |  |
 | enable_dp_tracking | string |  yes  |  |
 | lock_status | string |  yes  |  |
 | bank_data | string |  no  |  |
 | forward_tracking_list | [string] |  no  |  |
 | gst_details | [GST](#GST) |  no  |  |
 | forward_order_status | [string] |  no  |  |
 | escalation | string |  no  |  |
 | picked_date | string |  yes  |  |
 | platform_logo | boolean |  yes  |  |
 | user_agent | string |  yes  |  |
 | credit_note_id | string |  yes  |  |
 | is_pdsr | string |  no  |  |
 | journey_type | string |  yes  |  |
 | user_id | string |  yes  |  |
 | refund_text | string |  no  |  |
 | replacement_details | string |  no  |  |
 | is_fynd_store | string |  no  |  |
 | tracking_url | string |  yes  |  |
 | email_id | string |  yes  |  |
 | items | [string] |  yes  |  |
 | shipment_id | string |  yes  |  |
 | beneficiary_details | boolean |  no  |  |
 | packaging_type | string |  yes  |  |
 | due_date | string |  no  |  |
 | payments | [ShipmentPayments](#ShipmentPayments) |  no  |  |
 | shipment_quantity | number |  yes  |  |
 | affiliate_shipment_id | string |  yes  |  |
 | vertical | string |  no  |  |
 | forward_shipment_status | [string] |  no  |  |
 | is_packaging_order | boolean |  yes  |  |
 | company | string |  yes  |  |
 | order_status | string |  yes  |  |
 | secured_delivery_flag | string |  no  |  |
 | invoice | string |  yes  |  |
 | delivery_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | is_invoiced | boolean |  yes  |  |
 | coupon | string |  no  |  |
 | mid | string |  no  |  |
 | status | [ShipmentStatusData](#ShipmentStatusData) |  no  |  |
 | pay_button | string |  no  |  |
 | order_created_time | string |  no  |  |
 | status_progress | number |  yes  |  |
 | delivery_status | [string] |  yes  |  |
 | current_shipment_status | string |  yes  |  |
 | billing_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | user_info | string |  no  |  |
 | kirana_store_id | string |  no  |  |
 | total_items | number |  no  |  |
 | tracking_list | [[TrackingList](#TrackingList)] |  no  |  |
 | delivery_slot | string |  yes  |  |
 | is_fynd_coupon | boolean |  yes  |  |
 | enable_tracking | boolean |  no  |  |
 | dp_details | [DPDetails](#DPDetails) |  no  |  |
 | payment_mode | string |  yes  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | fyndstore_emp | string |  yes  |  |
 | can_break | string |  yes  |  |
 | child_nodes | [string] |  no  |  |
 | can_cancel | boolean |  no  |  |
 | is_not_fynd_source | boolean |  yes  |  |
 | bags | [OrderBags](#OrderBags) |  no  |  |
 | bag_status_history | [[BagStatusHistory](#BagStatusHistory)] |  no  |  |
 | order | [OrderDetailsData](#OrderDetailsData) |  no  |  |

---


 
 
 #### [OrderDict](#OrderDict)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_count | number |  yes  |  |
 | order_date | string |  yes  |  |
 | fynd_order_id | string |  yes  |  |

---


 
 
 #### [Shipment](#Shipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | priority_text | string |  no  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  |
 | enable_dp_tracking | string |  yes  |  |
 | gst_details | [GST](#GST) |  no  |  |
 | picked_date | string |  yes  |  |
 | platform_logo | string |  yes  |  |
 | user_agent | string |  yes  |  |
 | journey_type | string |  yes  |  |
 | shipment_id | string |  yes  |  |
 | packaging_type | string |  yes  |  |
 | payments | [ShipmentPayments](#ShipmentPayments) |  no  |  |
 | shipment_quantity | number |  yes  |  |
 | vertical | string |  no  |  |
 | delivery_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | status | [ShipmentStatusData](#ShipmentStatusData) |  no  |  |
 | billing_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | total_items | number |  no  |  |
 | tracking_list | [[TrackingList](#TrackingList)] |  no  |  |
 | delivery_slot | string |  yes  |  |
 | dp_details | [DPDetails](#DPDetails) |  no  |  |
 | payment_mode | string |  yes  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | bags | [OrderBags](#OrderBags) |  no  |  |
 | bag_status_history | [[BagStatusHistory](#BagStatusHistory)] |  no  |  |
 | order | [OrderDetailsData](#OrderDetailsData) |  no  |  |

---


 
 
 #### [ShipmentDetailsResponse](#ShipmentDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order | [OrderDict](#OrderDict) |  no  |  |
 | shipments | [[Shipment](#Shipment)] |  no  |  |
 | success | boolean |  yes  |  |

---


 
 
 #### [SubLane](#SubLane)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_shipments | number |  yes  |  |
 | current_state | [string] |  no  |  |
 | text | string |  yes  |  |
 | index | number |  yes  |  |
 | value | string |  yes  |  |
 | next_state | [string] |  no  |  |

---


 
 
 #### [SuperLane](#SuperLane)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | options | [[SubLane](#SubLane)] |  no  |  |
 | value | string |  yes  |  |
 | text | string |  yes  |  |

---


 
 
 #### [LaneConfigResponse](#LaneConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | super_lanes | [[SuperLane](#SuperLane)] |  no  |  |

---


 
 
 #### [OrderListingResponse](#OrderListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | lane | string |  yes  |  |
 | message | string |  no  |  |
 | items | [string] |  yes  |  |
 | success | boolean |  yes  |  |
 | page | string |  yes  |  |
 | total_count | number |  yes  |  |

---


 
 
 #### [Options](#Options)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | number |  no  |  |
 | text | string |  no  |  |

---


 
 
 #### [MetricsCount](#MetricsCount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | options | [[Options](#Options)] |  no  |  |
 | key | string |  yes  |  |
 | value | number |  yes  |  |
 | text | string |  yes  |  |

---


 
 
 #### [MetricCountResponse](#MetricCountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[MetricsCount](#MetricsCount)] |  no  |  |

---


 
 
 #### [FiltersResponse](#FiltersResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channels | [[FiltersInfo](#FiltersInfo)] |  no  |  |
 | delivery_partners | [[FiltersInfo](#FiltersInfo)] |  no  |  |

---


 
 
 #### [Success](#Success)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [OmsReports](#OmsReports)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | report_type | string |  no  |  |
 | s3_key | string |  no  |  |
 | report_requested_at | string |  no  |  |
 | request_details | string |  no  |  |
 | display_name | string |  no  |  |
 | report_created_at | string |  no  |  |
 | status | string |  no  |  |
 | report_name | string |  no  |  |
 | report_id | string |  no  |  |

---


 
 
 #### [JioCodeUpsertDataSet](#JioCodeUpsertDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article_id | string |  no  |  |
 | company_id | string |  no  |  |
 | jio_code | string |  no  |  |
 | item_id | string |  no  |  |

---


 
 
 #### [JioCodeUpsertPayload](#JioCodeUpsertPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[JioCodeUpsertDataSet](#JioCodeUpsertDataSet)] |  no  |  |

---


 
 
 #### [NestedErrorSchemaDataSet](#NestedErrorSchemaDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | type | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [JioCodeUpsertResponse](#JioCodeUpsertResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [string] |  no  |  |
 | success | boolean |  no  |  |
 | error | [[NestedErrorSchemaDataSet](#NestedErrorSchemaDataSet)] |  no  |  |
 | trace_id | string |  no  |  |
 | identifier | string |  no  |  |

---


 
 
 #### [BulkInvoicingResponse](#BulkInvoicingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  yes  |  |

---


 
 
 #### [BulkActionPayload](#BulkActionPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  yes  |  |

---


 
 
 #### [BulkActionResponse](#BulkActionResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | status | boolean |  no  |  |

---


 
 
 #### [BulkActionDetailsDataField](#BulkActionDetailsDataField)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | processing_shipments_count | number |  no  |  |
 | total_shipments_count | number |  no  |  |
 | successful_shipments_count | number |  no  |  |
 | batch_id | string |  no  |  |
 | failed_shipments_count | number |  no  |  |
 | successful_shipment_ids | [string] |  no  |  |
 | company_id | string |  no  |  |

---


 
 
 #### [BulkActionDetailsResponse](#BulkActionDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_id | string |  no  |  |
 | uploaded_on | string |  no  |  |
 | data | [[BulkActionDetailsDataField](#BulkActionDetailsDataField)] |  no  |  |
 | message | string |  no  |  |
 | uploaded_by | string |  no  |  |
 | success | string |  no  |  |
 | error | [string] |  no  |  |
 | status | boolean |  no  |  |
 | failed_records | [string] |  no  |  |

---


 
 
 #### [OrderPriority](#OrderPriority)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fulfilment_priority | number |  no  |  |
 | affiliate_priority_code | string |  no  |  |
 | fulfilment_priority_text | string |  no  |  |

---


 
 
 #### [OrderUser](#OrderUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  yes  |  |
 | address2 | string |  no  |  |
 | phone | number |  yes  |  |
 | last_name | string |  yes  |  |
 | city | string |  yes  |  |
 | country | string |  yes  |  |
 | state | string |  yes  |  |
 | first_name | string |  yes  |  |
 | address1 | string |  no  |  |
 | pincode | string |  yes  |  |
 | mobile | number |  yes  |  |

---


 
 
 #### [UserData](#UserData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | billing_user | [OrderUser](#OrderUser) |  no  |  |
 | shipping_user | [OrderUser](#OrderUser) |  no  |  |

---


 
 
 #### [ArticleDetails](#ArticleDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dimension | string |  yes  |  |
 | quantity | number |  yes  |  |
 | weight | string |  yes  |  |
 | attributes | string |  yes  |  |
 | category | string |  yes  |  |
 | brand_id | number |  yes  |  |
 | _id | string |  yes  |  |

---


 
 
 #### [LocationDetails](#LocationDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[ArticleDetails](#ArticleDetails)] |  yes  |  |
 | fulfillment_id | number |  yes  |  |
 | fulfillment_type | string |  yes  |  |

---


 
 
 #### [ShipmentDetails](#ShipmentDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dp_id | number |  no  |  |
 | box_type | string |  no  |  |
 | affiliate_shipment_id | string |  yes  |  |
 | fulfillment_id | number |  yes  |  |
 | articles | [[ArticleDetails](#ArticleDetails)] |  yes  |  |
 | meta | string |  no  |  |
 | shipments | number |  yes  |  |

---


 
 
 #### [ShipmentConfig](#ShipmentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | to_pincode | string |  yes  |  |
 | location_details | [LocationDetails](#LocationDetails) |  no  |  |
 | identifier | string |  yes  |  |
 | source | string |  yes  |  |
 | payment_mode | string |  yes  |  |
 | shipment | [[ShipmentDetails](#ShipmentDetails)] |  yes  |  |
 | action | string |  yes  |  |
 | journey | string |  yes  |  |

---


 
 
 #### [ShipmentData](#ShipmentData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_data | [ShipmentConfig](#ShipmentConfig) |  yes  |  |

---


 
 
 #### [MarketPlacePdf](#MarketPlacePdf)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | label | string |  no  |  |
 | invoice | string |  no  |  |

---


 
 
 #### [AffiliateBag](#AffiliateBag)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | quantity | number |  yes  |  |
 | identifier | string |  yes  |  |
 | delivery_charge | number |  yes  |  |
 | price_marked | number |  yes  |  |
 | seller_identifier | string |  yes  |  |
 | transfer_price | number |  yes  |  |
 | hsn_code_id | string |  yes  |  |
 | affiliate_meta | string |  yes  |  |
 | avl_qty | number |  yes  |  |
 | store_id | number |  yes  |  |
 | item_size | string |  yes  |  |
 | price_effective | number |  yes  |  |
 | item_id | number |  yes  |  |
 | fynd_store_id | string |  yes  |  |
 | amount_paid | number |  yes  |  |
 | unit_price | number |  yes  |  |
 | pdf_links | [MarketPlacePdf](#MarketPlacePdf) |  no  |  |
 | _id | string |  yes  |  |
 | company_id | number |  yes  |  |
 | modified_on | string |  yes  |  |
 | affiliate_store_id | string |  yes  |  |
 | sku | string |  yes  |  |
 | discount | number |  yes  |  |

---


 
 
 #### [OrderInfo](#OrderInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | delivery_charges | number |  yes  |  |
 | order_priority | [OrderPriority](#OrderPriority) |  no  |  |
 | user | [UserData](#UserData) |  yes  |  |
 | items | string |  yes  |  |
 | cod_charges | number |  yes  |  |
 | coupon | string |  no  |  |
 | order_value | number |  yes  |  |
 | payment_mode | string |  yes  |  |
 | shipment | [ShipmentData](#ShipmentData) |  no  |  |
 | bags | [[AffiliateBag](#AffiliateBag)] |  yes  |  |
 | billing_address | [OrderUser](#OrderUser) |  yes  |  |
 | discount | number |  yes  |  |
 | affiliate_order_id | string |  no  |  |
 | shipping_address | [OrderUser](#OrderUser) |  yes  |  |
 | payment | string |  no  |  |

---


 
 
 #### [AffiliateStoreIdMapping](#AffiliateStoreIdMapping)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | marketplace_store_id | string |  yes  |  |
 | store_id | number |  yes  |  |

---


 
 
 #### [AffiliateAppConfigMeta](#AffiliateAppConfigMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | value | string |  yes  |  |

---


 
 
 #### [AffiliateAppConfig](#AffiliateAppConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | id | string |  yes  |  |
 | secret | string |  yes  |  |
 | description | string |  no  |  |
 | created_at | string |  yes  |  |
 | owner | string |  yes  |  |
 | updated_at | string |  yes  |  |
 | meta | [[AffiliateAppConfigMeta](#AffiliateAppConfigMeta)] |  no  |  |
 | token | string |  yes  |  |

---


 
 
 #### [AffiliateInventoryStoreConfig](#AffiliateInventoryStoreConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store | string |  no  |  |

---


 
 
 #### [AffiliateInventoryLogisticsConfig](#AffiliateInventoryLogisticsConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dp_assignment | boolean |  no  |  |

---


 
 
 #### [AffiliateInventoryOrderConfig](#AffiliateInventoryOrderConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | force_reassignment | boolean |  no  |  |

---


 
 
 #### [AffiliateInventoryArticleAssignmentConfig](#AffiliateInventoryArticleAssignmentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | post_order_reassignment | boolean |  no  |  |

---


 
 
 #### [AffiliateInventoryPaymentConfig](#AffiliateInventoryPaymentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | source | string |  no  |  |
 | mode_of_payment | string |  no  |  |

---


 
 
 #### [AffiliateInventoryConfig](#AffiliateInventoryConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | inventory | [AffiliateInventoryStoreConfig](#AffiliateInventoryStoreConfig) |  no  |  |
 | logistics | [AffiliateInventoryLogisticsConfig](#AffiliateInventoryLogisticsConfig) |  no  |  |
 | order | [AffiliateInventoryOrderConfig](#AffiliateInventoryOrderConfig) |  no  |  |
 | article_assignment | [AffiliateInventoryArticleAssignmentConfig](#AffiliateInventoryArticleAssignmentConfig) |  no  |  |
 | payment | [AffiliateInventoryPaymentConfig](#AffiliateInventoryPaymentConfig) |  no  |  |

---


 
 
 #### [AffiliateConfig](#AffiliateConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app | [AffiliateAppConfig](#AffiliateAppConfig) |  no  |  |
 | inventory | [AffiliateInventoryConfig](#AffiliateInventoryConfig) |  no  |  |

---


 
 
 #### [Affiliate](#Affiliate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | token | string |  yes  |  |
 | config | [AffiliateConfig](#AffiliateConfig) |  no  |  |

---


 
 
 #### [OrderConfig](#OrderConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_end_state | string |  no  |  |
 | article_lookup | string |  no  |  |
 | affiliate_store_id_mapping | [[AffiliateStoreIdMapping](#AffiliateStoreIdMapping)] |  yes  |  |
 | affiliate | [Affiliate](#Affiliate) |  yes  |  |
 | create_user | boolean |  no  |  |
 | store_lookup | string |  no  |  |

---


 
 
 #### [CreateOrderPayload](#CreateOrderPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_info | [OrderInfo](#OrderInfo) |  yes  |  |
 | order_config | [OrderConfig](#OrderConfig) |  yes  |  |
 | affiliate_id | string |  yes  |  |

---


 
 
 #### [CreateOrderResponse](#CreateOrderResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_order_id | string |  yes  |  |

---


 
 
 #### [ErrorResponse](#ErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  |  |
 | status | number |  yes  |  |
 | error_trace | string |  no  |  |

---


 
 
 #### [InvalidateShipmentCachePayload](#InvalidateShipmentCachePayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_ids | [string] |  yes  |  |

---


 
 
 #### [InvalidateShipmentCacheNestedResponse](#InvalidateShipmentCacheNestedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | status | number |  no  |  |
 | error | string |  no  |  |
 | shipment_id | string |  no  |  |

---


 
 
 #### [InvalidateShipmentCacheResponse](#InvalidateShipmentCacheResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | response | [[InvalidateShipmentCacheNestedResponse](#InvalidateShipmentCacheNestedResponse)] |  no  |  |

---


 
 
 #### [StoreReassign](#StoreReassign)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store_id | number |  yes  |  |
 | bag_id | number |  no  |  |
 | fynd_order_id | string |  no  |  |
 | item_id | string |  no  |  |
 | mongo_article_id | string |  no  |  |
 | set_id | string |  no  |  |
 | affiliate_bag_id | string |  no  |  |
 | affiliate_id | string |  no  |  |
 | affiliate_order_id | string |  no  |  |
 | reason_ids | [number] |  no  |  |

---


 
 
 #### [StoreReassignResponse](#StoreReassignResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [Entities](#Entities)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | reason_text | string |  yes  |  |
 | affiliate_shipment_id | string |  no  |  |
 | affiliate_bag_id | string |  no  |  |
 | affiliate_id | string |  no  |  |
 | affiliate_order_id | string |  no  |  |

---


 
 
 #### [UpdateShipmentLockPayload](#UpdateShipmentLockPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entities | [[Entities](#Entities)] |  yes  |  |
 | entity_type | string |  yes  |  |
 | action | string |  yes  |  |
 | action_type | string |  yes  |  |

---


 
 
 #### [OriginalFilter](#OriginalFilter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string |  no  |  |
 | affiliate_shipment_id | string |  no  |  |

---


 
 
 #### [Bags](#Bags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_order_id | string |  no  |  |
 | affiliate_bag_id | string |  no  |  |
 | is_locked | boolean |  no  |  |
 | bag_id | number |  no  |  |

---


 
 
 #### [CheckResponse](#CheckResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | original_filter | [OriginalFilter](#OriginalFilter) |  no  |  |
 | is_bag_locked | boolean |  no  |  |
 | is_shipment_locked | boolean |  no  |  |
 | status | string |  no  |  |
 | affiliate_shipment_id | string |  no  |  |
 | bags | [[Bags](#Bags)] |  no  |  |
 | affiliate_id | string |  no  |  |
 | shipment_id | string |  no  |  |
 | lock_status | boolean |  no  |  |

---


 
 
 #### [UpdateShipmentLockResponse](#UpdateShipmentLockResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | check_response | [[CheckResponse](#CheckResponse)] |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [AnnouncementResponse](#AnnouncementResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  yes  |  |
 | description | string |  no  |  |
 | created_at | string |  no  |  |
 | platform_name | string |  no  |  |
 | logo_url | string |  no  |  |
 | platform_id | string |  no  |  |
 | from_datetime | string |  no  |  |
 | to_datetime | string |  no  |  |
 | title | string |  no  |  |
 | company_id | number |  no  |  |

---


 
 
 #### [AnnouncementsResponse](#AnnouncementsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | announcements | [[AnnouncementResponse](#AnnouncementResponse)] |  no  |  |

---


 
 
 #### [BaseResponse](#BaseResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  |  |
 | success | boolean |  yes  |  |

---


 
 
 #### [Click2CallResponse](#Click2CallResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | boolean |  yes  |  |
 | call_id | string |  yes  |  |

---


 
 
 #### [Products](#Products)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier | string |  no  |  |
 | quantity | number |  no  |  |
 | line_number | number |  no  |  |

---


 
 
 #### [ShipmentsRequest](#ShipmentsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | products | [[Products](#Products)] |  no  |  |
 | reasons | [string] |  no  |  |

---


 
 
 #### [StatuesRequest](#StatuesRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | exclude_bags_next_state | string |  no  |  |
 | status | string |  no  |  |
 | shipments | [ShipmentsRequest](#ShipmentsRequest) |  no  |  |

---


 
 
 #### [StatusUpdateInternalRequest](#StatusUpdateInternalRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | task | boolean |  no  |  |
 | unlock_before_transition | boolean |  no  |  |
 | statues | [[StatuesRequest](#StatuesRequest)] |  no  |  |
 | force_transition | boolean |  no  |  |
 | lock_after_transition | boolean |  no  |  |

---


 
 
 #### [ShipmentidResponse](#ShipmentidResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | number |  no  |  |
 | message | string |  no  |  |
 | exception | string |  no  |  |
 | code | string |  no  |  |
 | stack_trace | string |  no  |  |

---


 
 
 #### [ShipmentsResponse](#ShipmentsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_id | [ShipmentidResponse](#ShipmentidResponse) |  no  |  |

---


 
 
 #### [StatuesResponse](#StatuesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipments | [ShipmentsResponse](#ShipmentsResponse) |  no  |  |

---


 
 
 #### [StatusUpdateInternalResponse](#StatusUpdateInternalResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | statuses | [[StatuesResponse](#StatuesResponse)] |  no  |  |

---


 
 
 #### [ActionInfo](#ActionInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  yes  |  |
 | id | number |  yes  |  |
 | display_text | string |  yes  |  |
 | slug | string |  yes  |  |

---


 
 
 #### [GetActionsResponse](#GetActionsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | permissions | [ActionInfo](#ActionInfo) |  yes  |  |

---


 
 
 #### [HistoryDict](#HistoryDict)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | l3_detail | string |  no  |  |
 | user | string |  yes  |  |
 | l1_detail | string |  no  |  |
 | bag_id | number |  no  |  |
 | l2_detail | string |  no  |  |
 | type | string |  yes  |  |
 | message | string |  yes  |  |
 | ticket_id | string |  no  |  |
 | createdat | string |  yes  |  |
 | ticket_url | string |  no  |  |

---


 
 
 #### [ShipmentHistoryResponse](#ShipmentHistoryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | activity_history | [[HistoryDict](#HistoryDict)] |  no  |  |

---


 
 
 #### [ErrorDetail](#ErrorDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [SmsDataPayload](#SmsDataPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_id | string |  yes  |  |
 | payment_mode | string |  yes  |  |
 | brand_name | string |  yes  |  |
 | message | string |  yes  |  |
 | customer_name | string |  yes  |  |
 | country_code | string |  yes  |  |
 | shipment_id | number |  yes  |  |
 | amount_paid | number |  yes  |  |
 | phone_number | number |  yes  |  |

---


 
 
 #### [SendSmsPayload](#SendSmsPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [SmsDataPayload](#SmsDataPayload) |  no  |  |
 | slug | string |  yes  |  |
 | bag_id | number |  yes  |  |

---


 
 
 #### [Meta](#Meta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | state_manager_used | string |  no  |  |
 | kafka_emission_status | number |  no  |  |

---


 
 
 #### [ShipmentDetail](#ShipmentDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  yes  |  |
 | status | string |  no  |  |
 | bag_list | [number] |  no  |  |
 | remarks | string |  no  |  |
 | shipment_id | string |  no  |  |
 | meta | [Meta](#Meta) |  yes  |  |

---


 
 
 #### [OrderDetails](#OrderDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_at | string |  no  |  |
 | fynd_order_id | string |  no  |  |

---


 
 
 #### [OrderStatusData](#OrderStatusData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | errors | [string] |  no  |  |
 | shipment_details | [[ShipmentDetail](#ShipmentDetail)] |  no  |  |
 | order_details | [OrderDetails](#OrderDetails) |  yes  |  |

---


 
 
 #### [OrderStatusResult](#OrderStatusResult)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | string |  yes  |  |
 | result | [[OrderStatusData](#OrderStatusData)] |  no  |  |

---


 
 
 #### [FyndOrderIdList](#FyndOrderIdList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_order_id | [string] |  no  |  |

---


 
 
 #### [OrderStatus](#OrderStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | start_date | string |  yes  |  |
 | order_details | [[FyndOrderIdList](#FyndOrderIdList)] |  no  |  |
 | end_date | string |  yes  |  |
 | mobile | number |  yes  |  |

---




