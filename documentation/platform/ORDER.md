




##### [Back to Platform docs](./README.md)

## Order Methods
Handles all platform order and shipment api(s)

* [getShipments](#getshipments)
* [getShipmentById](#getshipmentbyid)
* [getOrderById](#getorderbyid)
* [getLaneConfig](#getlaneconfig)
* [getApplicationShipments](#getapplicationshipments)
* [getOrders](#getorders)
* [getMetricCount](#getmetriccount)
* [getAppOrderShipmentDetails](#getappordershipmentdetails)
* [trackPlatformShipment](#trackplatformshipment)
* [getfilters](#getfilters)
* [createShipmentReport](#createshipmentreport)
* [getReportsShipmentListing](#getreportsshipmentlisting)
* [upsertJioCode](#upsertjiocode)
* [getBulkInvoice](#getbulkinvoice)
* [getBulkInvoiceLabel](#getbulkinvoicelabel)
* [getBulkShipmentExcelFile](#getbulkshipmentexcelfile)
* [getBulkList](#getbulklist)
* [getManifestList](#getmanifestlist)
* [getManifestDetailsWithShipments](#getmanifestdetailswithshipments)
* [getBulkActionFailedReport](#getbulkactionfailedreport)
* [getShipmentReasons](#getshipmentreasons)
* [bulkActionProcessXlsxFile](#bulkactionprocessxlsxfile)
* [bulkActionDetails](#bulkactiondetails)
* [getBagById](#getbagbyid)
* [getBags](#getbags)
* [invalidateShipmentCache](#invalidateshipmentcache)
* [reassignLocation](#reassignlocation)
* [updateShipmentLock](#updateshipmentlock)
* [getAnnouncements](#getannouncements)
* [updateAddress](#updateaddress)
* [click2Call](#click2call)
* [updateShipmentStatus](#updateshipmentstatus)
* [processManifest](#processmanifest)
* [dispatchManifest](#dispatchmanifest)
* [getRoleBasedActions](#getrolebasedactions)
* [getShipmentHistory](#getshipmenthistory)
* [sendSmsNinja](#sendsmsninja)
* [platformManualAssignDPToShipment](#platformmanualassigndptoshipment)
* [updatePackagingDimensions](#updatepackagingdimensions)
* [createOrder](#createorder)
* [createChannelConfig](#createchannelconfig)
* [getChannelConfig](#getchannelconfig)
* [uploadConsent](#uploadconsent)
* [orderUpdate](#orderupdate)
* [checkOrderStatus](#checkorderstatus)
* [sendSmsNinjaPlatform](#sendsmsninjaplatform)



## Methods with example and description




### getShipments




```javascript
// Promise
const promise = client.order.getShipments({  lane : value,
 searchType : value,
 searchValue : value,
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
 isPrioritySort : value,
 excludeLockedShipments : value,
 paymentMethods : value,
 channelShipmentId : value,
 channelOrderId : value,
 customMeta : value });

// Async/Await
const data = await client.order.getShipments({  lane : value,
 searchType : value,
 searchValue : value,
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
 isPrioritySort : value,
 excludeLockedShipments : value,
 paymentMethods : value,
 channelShipmentId : value,
 channelOrderId : value,
 customMeta : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| lane | string | no |  |    
| searchType | string | no |  |    
| searchValue | string | no |  |    
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
| isPrioritySort | boolean | no |  |    
| excludeLockedShipments | boolean | no |  |    
| paymentMethods | string | no |  |    
| channelShipmentId | string | no |  |    
| channelOrderId | string | no |  |    
| customMeta | string | no |  |  





*Returned Response:*




[ShipmentInternalPlatformViewResponse](#ShipmentInternalPlatformViewResponse)

We are processing the report!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getShipmentById




```javascript
// Promise
const promise = client.order.getShipmentById({  channelShipmentId : value,
 shipmentId : value,
 orderingCompanyId : value,
 requestByExt : value });

// Async/Await
const data = await client.order.getShipmentById({  channelShipmentId : value,
 shipmentId : value,
 orderingCompanyId : value,
 requestByExt : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| channelShipmentId | string | no |  |    
| shipmentId | string | no |  |    
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


### getOrderById




```javascript
// Promise
const promise = client.order.getOrderById({  orderId : value });

// Async/Await
const data = await client.order.getOrderById({  orderId : value });
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
    "fynd_order_id": "FY637CFCC00177713D47",
    "meta": {
      "files": [],
      "staff": {},
      "cart_id": 1835,
      "comment": "",
      "extra_meta": {},
      "order_tags": null,
      "order_type": "HomeDelivery",
      "employee_id": null,
      "payment_type": "self",
      "mongo_cart_id": 1835,
      "order_platform": "platform-site",
      "ordering_store": null,
      "order_child_entities": [
        "bag",
        "shipment"
      ]
    },
    "affiliate_id": "62f35968d101a6d38c886d85",
    "ordering_channel": "Ecomm",
    "source": "uniket-desktop",
    "tax_details": {
      "gstin": null
    },
    "order_date": "2022-11-22T22:15:53+00:00",
    "prices": {
      "amount_paid": 948.5,
      "refund_amount": 948.5,
      "price_marked": 1398,
      "cod_charges": 0,
      "discount": 349.5,
      "cashback_applied": 0,
      "delivery_charge": 0,
      "fynd_credits": 0,
      "cashback": 0,
      "price_effective": 1048.5,
      "refund_credit": 0,
      "value_of_good": 803.82,
      "coupon_value": 0,
      "tax_collected_at_source": 0,
      "promotion_effective_discount": 100,
      "amount_paid_roundoff": 948
    },
    "raw_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
    "comment": ""
  },
  "shipments": [
    {
      "shipment_id": "16691355532841431595",
      "fulfilling_store": {
        "id": 5,
        "code": "SF94",
        "fulfillment_channel": "pulse",
        "store_name": "RELIANCE RETAIL LTD - Beauty & Personal care",
        "contact_person": "Anju Abraham",
        "phone": "918898846722",
        "address": "store 1ST FLOOR, WEWORK VIJAY DIAMOND, CROSS RD B, AJIT NAGAR, KONDIVITA, ANDHERI EAST, MUMBAI, MAHARASHTR Mumbai Maharashtra 400093",
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "pincode": "400093",
        "meta": {
          "stage": "verified",
          "timing": [
            {
              "open": true,
              "closing": {
                "hour": 22,
                "minute": 0
              },
              "opening": {
                "hour": 11,
                "minute": 0
              },
              "weekday": "monday"
            },
            {
              "open": true,
              "closing": {
                "hour": 22,
                "minute": 0
              },
              "opening": {
                "hour": 11,
                "minute": 0
              },
              "weekday": "tuesday"
            },
            {
              "open": true,
              "closing": {
                "hour": 22,
                "minute": 0
              },
              "opening": {
                "hour": 11,
                "minute": 0
              },
              "weekday": "wednesday"
            },
            {
              "open": true,
              "closing": {
                "hour": 22,
                "minute": 0
              },
              "opening": {
                "hour": 11,
                "minute": 0
              },
              "weekday": "thursday"
            },
            {
              "open": true,
              "closing": {
                "hour": 22,
                "minute": 0
              },
              "opening": {
                "hour": 11,
                "minute": 0
              },
              "weekday": "friday"
            },
            {
              "open": true,
              "closing": {
                "hour": 22,
                "minute": 0
              },
              "opening": {
                "hour": 11,
                "minute": 0
              },
              "weekday": "saturday"
            },
            {
              "open": true,
              "closing": {
                "hour": 22,
                "minute": 0
              },
              "opening": {
                "hour": 11,
                "minute": 0
              },
              "weekday": "sunday"
            }
          ],
          "documents": {},
          "gst_number": null,
          "display_name": "RELIANCE RETAIL LTD - Beauty & Personal care",
          "gst_credentials": {
            "e_invoice": {
              "enabled": false
            },
            "e_waybill": {
              "enabled": false
            }
          },
          "notification_emails": [
            "anjuabraham@gofynd.com"
          ],
          "product_return_config": {
            "on_same_store": true
          },
          "additional_contact_details": {
            "number": [
              "91 - 8898846722"
            ]
          },
          "ewaybill_portal_details": null
        },
        "fulfilment_type": null
      },
      "delivery_details": {
        "name": "Vaishakh Shetty",
        "email": "",
        "phone": "9892133001",
        "address": "home Asd,Mumbai,Maharashtra,Mumbai,Maharashtra,India Asd,Mumbai,Maharashtra,Mumbai,Maharashtra,India Mumbai,Maharashtra Mumbai Maharashtra 400083",
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "pincode": "400083",
        "state_code": "27"
      },
      "billing_details": {
        "name": "Vaishakh Shetty",
        "email": "",
        "phone": "9892133001",
        "address": "home Asd,Mumbai,Maharashtra,Mumbai,Maharashtra,India Mumbai,Maharashtra Mumbai Maharashtra 400083",
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "pincode": "400083",
        "state_code": "27"
      },
      "dp_details": {
        "id": null,
        "name": null,
        "awb_no": null,
        "eway_bill_id": null,
        "track_url": null,
        "gst_tag": "sgst",
        "dp_otp": ""
      },
      "journey_type": "forward",
      "order": {
        "fynd_order_id": "FY637CFCC00177713D47",
        "meta": {
          "files": [],
          "staff": {},
          "cart_id": 1835,
          "comment": "",
          "extra_meta": {},
          "order_tags": null,
          "order_type": "HomeDelivery",
          "employee_id": null,
          "payment_type": "self",
          "mongo_cart_id": 1835,
          "order_platform": "platform-site",
          "ordering_store": null,
          "order_child_entities": [
            "bag",
            "shipment"
          ]
        },
        "affiliate_id": "62f35968d101a6d38c886d85",
        "ordering_channel": "Ecomm",
        "source": "uniket-desktop",
        "tax_details": {
          "gstin": null
        },
        "order_date": "2022-11-22T22:15:53+00:00",
        "prices": {
          "amount_paid": 948.5,
          "refund_amount": 948.5,
          "price_marked": 1398,
          "cod_charges": 0,
          "discount": 349.5,
          "cashback_applied": 0,
          "delivery_charge": 0,
          "fynd_credits": 0,
          "cashback": 0,
          "price_effective": 1048.5,
          "refund_credit": 0,
          "value_of_good": 803.82,
          "coupon_value": 0,
          "tax_collected_at_source": 0,
          "promotion_effective_discount": 100,
          "amount_paid_roundoff": 948
        },
        "raw_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
        "comment": ""
      },
      "gst_details": {
        "value_of_good": 401.91,
        "gst_fee": 72.34,
        "brand_calculated_amount": 474.25,
        "tax_collected_at_source": 0,
        "gstin_code": "null"
      },
      "shipment_quantity": 1,
      "bag_status_history": [
        {
          "status": "pending",
          "updated_at": "2022-11-22T22:15:54+00:00",
          "state_type": "operational",
          "app_display_name": "Pending",
          "display_name": "Pending",
          "forward": null
        },
        {
          "status": "placed",
          "updated_at": "2022-11-22T22:15:59+00:00",
          "state_type": "operational",
          "app_display_name": "Ordered",
          "display_name": "Placed",
          "forward": null
        },
        {
          "status": "bag_confirmed",
          "updated_at": "2022-11-22T22:54:50+00:00",
          "state_type": "operational",
          "app_display_name": "Ordered",
          "display_name": "Bag Confirmed",
          "forward": null
        }
      ],
      "bags": [
        {
          "bag_id": 20472628,
          "display_name": "Bag",
          "entity_type": "bag",
          "meta": {
            "custom_message": "Please send the shipment as soon as possible."
          },
          "bag_configs": {
            "is_returnable": true,
            "can_be_cancelled": true,
            "enable_tracking": true,
            "is_customer_return_allowed": false,
            "is_active": true
          },
          "financial_breakup": [
            {
              "price_effective": 524.25,
              "discount": 174.75,
              "amount_paid": 474.25,
              "coupon_effective_discount": 0,
              "delivery_charge": 0,
              "fynd_credits": 0,
              "cod_charges": 0,
              "refund_credit": 0,
              "cashback": 0,
              "refund_amount": 474.25,
              "added_to_fynd_cash": false,
              "cashback_applied": 0,
              "gst_tax_percentage": 18,
              "value_of_good": 401.91,
              "price_marked": 699,
              "transfer_price": 0,
              "brand_calculated_amount": 474.25,
              "tax_collected_at_source": 0,
              "tcs_percentage": 0,
              "promotion_effective_discount": 50,
              "coupon_value": 0,
              "amount_paid_roundoff": 474,
              "size": "OS",
              "total_units": 1,
              "hsn_code": "20472574",
              "identifiers": {
                "ean": "6902395784364",
                "sku_code": "1020820"
              },
              "item_name": "L'Oreal Paris Rouge Signature Matte Liquid Lipstick, 146 I Enlight",
              "gst_fee": 72.34,
              "gst_tag": "SGST"
            }
          ],
          "current_status": "bag_confirmed",
          "item": {
            "name": "L'Oreal Paris Rouge Signature Matte Liquid Lipstick, 146 I Enlight",
            "brand": "L'Oreal Paris",
            "slug_key": "loreal-paris-rouge-signature-matte-liquid-lipstick-146-i-enlight-96a1wferol05",
            "images": [
              "https://cdn.pixelbin.io/v2/super-fire-62c344/tirabz/wrkr/tiraz0/products/pictures/item/free/270x0/1020820/shj00c0H4T-1020820_1.jpg",
              "https://cdn.pixelbin.io/v2/super-fire-62c344/tirabz/wrkr/tiraz0/products/pictures/item/free/270x0/1020820/iM7wvxxxT5-1020820_2.jpg",
              "https://cdn.pixelbin.io/v2/super-fire-62c344/tirabz/wrkr/tiraz0/products/pictures/item/free/270x0/1020820/TcPMevsr6O-1020820_3.jpg",
              "https://cdn.pixelbin.io/v2/super-fire-62c344/tirabz/wrkr/tiraz0/products/pictures/item/free/270x0/1020820/BAiV5xox57-1020820_4.jpg",
              "https://cdn.pixelbin.io/v2/super-fire-62c344/tirabz/wrkr/tiraz0/products/pictures/item/free/270x0/1020820/6wXPvugMto-1020820_5.jpg",
              "https://cdn.pixelbin.io/v2/super-fire-62c344/tirabz/wrkr/tiraz0/products/pictures/item/free/270x0/1020820/LvlirqfHho-1020820_6.jpg",
              "https://cdn.pixelbin.io/v2/super-fire-62c344/tirabz/wrkr/tiraz0/products/pictures/item/free/270x0/1020820/KKnZHIJwO-1020820_7.jpg",
              "https://cdn.pixelbin.io/v2/super-fire-62c344/tirabz/wrkr/tiraz0/products/pictures/item/free/270x0/1020820/NheQB3HLlq-1020820_8.jpg"
            ],
            "size": "OS",
            "l1_category": [
              "Makeup"
            ],
            "l3_category": 134
          },
          "brand": {
            "credit_note_expiry_days": null,
            "modified_on": "2022-11-22T09:08:25",
            "id": 2,
            "logo": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/tira-n/wrkr/tiraz0/brands/pictures/square-logo/original/iCMr3gmUF-Logo.jpeg",
            "created_on": "2022-08-09T13:17:41",
            "credit_note_allowed": false,
            "start_date": null,
            "company": null,
            "script_last_ran": null,
            "pickup_location": null,
            "brand_name": "L'Oreal Paris",
            "invoice_prefix": null,
            "is_virtual_invoice": false
          },
          "gst_details": {
            "gstin_code": "null",
            "gst_tag": "SGST",
            "hsn_code": "20472574",
            "value_of_good": 401.91,
            "gst_tax_percentage": 18,
            "is_default_hsn_code": true,
            "brand_calculated_amount": 474.25,
            "tax_collected_at_source": 0,
            "hsn_code_id": "62f3ad402cbb29a3a1c9186b",
            "gst_fee": 72.34,
            "igst_tax_percentage": 0,
            "sgst_tax_percentage": 9,
            "cgst_tax_percentage": 9,
            "igst_gst_fee": "0",
            "cgst_gst_fee": "36.17",
            "sgst_gst_fee": "36.17"
          },
          "article": {
            "uid": "62f495f2a604499934540c69",
            "identifiers": {
              "ean": "6902395784364",
              "sku_code": "1020820"
            },
            "return_config": {
              "time": 7,
              "unit": "days",
              "returnable": true
            }
          },
          "affiliate_bag_details": {
            "coupon_code": null
          },
          "quantity": 1,
          "identifier": null,
          "applied_promos": [
            {
              "amount": 50,
              "promo_id": "637cfcb19d43e76334b9fb6c",
              "buy_rules": [
                {
                  "item_criteria": {
                    "item_brand": [
                      2
                    ]
                  },
                  "cart_conditions": {}
                }
              ],
              "mrp_promotion": false,
              "discount_rules": [
                {
                  "type": "amount",
                  "value": 100
                }
              ],
              "promotion_name": "VS",
              "promotion_type": "amount",
              "article_quantity": 2
            }
          ],
          "mark_as_returnable": false
        }
      ],
      "custom_message": "Please send the shipment as soon as possible.",
      "company_id": 2,
      "user": {
        "user_oid": "637cbf77e7706fbc79baa669",
        "gender": "female",
        "first_name": "Vaishakh",
        "id": 18052704,
        "mobile": "9892133001",
        "mongo_user_id": "637cbf77e7706fbc79baa669",
        "email": "vaishakhshetty@gofynd.com",
        "last_name": "Shetty",
        "is_anonymous_user": false
      },
      "pickup_slot": {},
      "delivery_slot": {
        "slot": "By 16:00 PM",
        "upper_bound": "2022-11-25T16:45:50+00:00",
        "lower_bound": "2022-11-23T16:45:50+00:00",
        "date": "2022-11-25T16:45:50+00:00",
        "type": "order_window"
      },
      "total_items": 1,
      "payment_methods": {
        "PP": {
          "amount": 474.25,
          "mode": "PP",
          "name": "PartnerPay",
          "collect_by": "seller",
          "refund_by": "seller",
          "meta": {}
        }
      },
      "vertical": null,
      "priority_text": null,
      "status": {
        "created_at": "2022-11-22T22:54:50+00:00",
        "id": 88117778,
        "meta": {
          "request_meta": {},
          "state_manager_used": "entity",
          "kafka_emission_status": 1
        },
        "status": "bag_confirmed",
        "shipment_id": "16691355532841431595",
        "bag_list": [
          "20472628"
        ],
        "current_shipment_status": "bag_confirmed",
        "status_created_at": "2022-11-22T22:54:50"
      },
      "prices": {
        "amount_paid": 474.25,
        "refund_amount": 474.25,
        "price_marked": 699,
        "cod_charges": 0,
        "discount": 174.75,
        "cashback_applied": 0,
        "delivery_charge": 0,
        "fynd_credits": 0,
        "cashback": 0,
        "price_effective": 524.25,
        "refund_credit": 0,
        "value_of_good": 401.91,
        "coupon_value": 0,
        "tax_collected_at_source": 0,
        "promotion_effective_discount": 50,
        "amount_paid_roundoff": 474
      },
      "tracking_list": [
        {
          "text": "Placed",
          "status": "processing",
          "is_passed": true,
          "time": "2022-11-22T22:15:59+00:00"
        },
        {
          "text": "Bag Confirmed",
          "status": "confirmed",
          "is_passed": true,
          "time": "2022-11-22T22:54:50+00:00"
        },
        {
          "text": "Dp Assigned",
          "status": "dp_assigned",
          "is_passed": false,
          "time": ""
        },
        {
          "text": "In Transit",
          "status": "in_transit",
          "is_passed": false,
          "time": ""
        },
        {
          "text": "Out For Delivery",
          "status": "out_for_delivery",
          "is_passed": false,
          "time": ""
        },
        {
          "text": "Delivered",
          "status": "delivered",
          "is_passed": false,
          "time": ""
        }
      ],
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
      "platform_logo": "https://fynd-static.s3.amazonaws.com/mode_of_payment/ecomm_logo.png",
      "packaging_type": "POLYB_DFLT_L",
      "enable_dp_tracking": false,
      "invoice": {
        "updated_date": "1970-01-01T00:00:00",
        "store_invoice_id": null,
        "invoice_url": "",
        "label_url": "",
        "external_invoice_id": ""
      },
      "can_process": true,
      "estimated_sla_time": null,
      "tracking_url": "",
      "meta": {
        "dp_id": "9",
        "weight": 300,
        "external": {},
        "formatted": {
          "max": "Fri, 25 Nov",
          "min": "Wed, 23 Nov"
        },
        "timestamp": {
          "max": 1669394750,
          "min": 1669221950
        },
        "bag_weight": {
          "20472628": 300
        },
        "debug_info": {
          "stormbreaker_uuid": "998171bb-67af-412a-a00a-12d436418ff2"
        },
        "dp_options": {},
        "order_type": null,
        "dp_sort_key": "fm_priority",
        "packaging_name": "POLYB_DFLT_L",
        "assign_dp_from_sb": true,
        "same_store_available": true,
        "fulfill_virtual_invoice": false,
        "fulfilment_priority_text": null,
        "auto_trigger_dp_assignment_ACF": true
      },
      "shipment_created_at": "2022-11-22T22:15:53+00:00",
      "mark_as_returnable": false,
      "ordering_store": {
        "id": 5,
        "code": "SF94",
        "fulfillment_channel": "pulse",
        "store_name": "RELIANCE RETAIL LTD - Beauty & Personal care",
        "contact_person": "Anju Abraham",
        "phone": "918898846722",
        "address": "store 1ST FLOOR, WEWORK VIJAY DIAMOND, CROSS RD B, AJIT NAGAR, KONDIVITA, ANDHERI EAST, MUMBAI, MAHARASHTR Mumbai Maharashtra 400093",
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "pincode": "400093",
        "meta": {
          "stage": "verified",
          "timing": [
            {
              "open": true,
              "closing": {
                "hour": 22,
                "minute": 0
              },
              "opening": {
                "hour": 11,
                "minute": 0
              },
              "weekday": "monday"
            },
            {
              "open": true,
              "closing": {
                "hour": 22,
                "minute": 0
              },
              "opening": {
                "hour": 11,
                "minute": 0
              },
              "weekday": "tuesday"
            },
            {
              "open": true,
              "closing": {
                "hour": 22,
                "minute": 0
              },
              "opening": {
                "hour": 11,
                "minute": 0
              },
              "weekday": "wednesday"
            },
            {
              "open": true,
              "closing": {
                "hour": 22,
                "minute": 0
              },
              "opening": {
                "hour": 11,
                "minute": 0
              },
              "weekday": "thursday"
            },
            {
              "open": true,
              "closing": {
                "hour": 22,
                "minute": 0
              },
              "opening": {
                "hour": 11,
                "minute": 0
              },
              "weekday": "friday"
            },
            {
              "open": true,
              "closing": {
                "hour": 22,
                "minute": 0
              },
              "opening": {
                "hour": 11,
                "minute": 0
              },
              "weekday": "saturday"
            },
            {
              "open": true,
              "closing": {
                "hour": 22,
                "minute": 0
              },
              "opening": {
                "hour": 11,
                "minute": 0
              },
              "weekday": "sunday"
            }
          ],
          "documents": {},
          "gst_number": null,
          "display_name": "RELIANCE RETAIL LTD - Beauty & Personal care",
          "gst_credentials": {
            "e_invoice": {
              "enabled": false
            },
            "e_waybill": {
              "enabled": false
            }
          },
          "notification_emails": [
            "anjuabraham@gofynd.com"
          ],
          "product_return_config": {
            "on_same_store": true
          },
          "additional_contact_details": {
            "number": [
              "91 - 8898846722"
            ]
          },
          "ewaybill_portal_details": null
        },
        "fulfilment_type": null
      },
      "custom_meta": {}
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
{
  "super_lanes": [
    {
      "text": "Unfulfilled",
      "value": "unfulfilled",
      "options": [
        {
          "text": "New",
          "value": "new",
          "total_items": 18,
          "index": 1,
          "actions": []
        },
        {
          "text": "Confirmed",
          "value": "confirmed",
          "total_items": 0,
          "index": 2,
          "actions": []
        },
        {
          "text": "To Be Packed",
          "value": "to_be_packed",
          "total_items": 0,
          "index": 3,
          "actions": []
        },
        {
          "text": "Ready To Dispatch",
          "value": "ready_for_dispatch",
          "total_items": 0,
          "index": 4,
          "actions": []
        }
      ],
      "total_items": 18
    },
    {
      "text": "Return",
      "value": "return",
      "options": [
        {
          "text": "Return Initiated",
          "value": "return_initiated",
          "total_items": 0,
          "index": 9,
          "actions": []
        },
        {
          "text": "Return In Transit",
          "value": "return_in_transit",
          "total_items": 0,
          "index": 10,
          "actions": []
        },
        {
          "text": "Return Delivered",
          "value": "return_delivered",
          "total_items": 0,
          "index": 11,
          "actions": []
        },
        {
          "text": "Return Accepted",
          "value": "return_accepted",
          "total_items": 0,
          "index": 12,
          "actions": []
        }
      ],
      "total_items": 0
    }
  ]
}
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
 isPrioritySort : value,
 customMeta : value });

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
 isPrioritySort : value,
 customMeta : value });
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
| customMeta | string | no |  |  





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


### trackPlatformShipment
Track shipment



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").order.trackPlatformShipment({  shipmentId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").order.trackPlatformShipment({  shipmentId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes |  |  



Track Shipment by shipment id, for application based on application Id

*Returned Response:*




[PlatformShipmentTrack](#PlatformShipmentTrack)

Success. Check the example shown below or refer `PlatformShipmentTrack` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "meta": {},
  "results": [
    {
      "updated_at": "24 Nov, 12:39 PM",
      "last_location_recieved_at": "Thane",
      "reason": "Fyndr",
      "shipment_type": "forward",
      "status": "dp_assigned",
      "updated_time": "2022-11-24T12:39:38+05:30",
      "account_name": "fyndr",
      "awb": "2125658183710",
      "raw_status": "dp_assigned",
      "meta": null
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
  "global": [
    {
      "text": "Fulfilling Stores",
      "value": "stores",
      "type": "single_select",
      "options": null
    },
    {
      "text": "Search Types",
      "value": "search_type",
      "type": "single_select",
      "options": [
        {
          "text": "Auto",
          "value": "auto",
          "placeholder_text": "Search by Shipment ID, Order ID & Customer Email",
          "min_search_size": 5,
          "show_ui": true
        },
        {
          "text": "Shipment ID",
          "value": "shipment_id",
          "placeholder_text": "Search by Shipment ID",
          "min_search_size": 6,
          "show_ui": true
        },
        {
          "text": "Order ID",
          "value": "order_id",
          "placeholder_text": "Search by Order ID",
          "min_search_size": 6,
          "show_ui": true
        },
        {
          "text": "Customer Name",
          "value": "name",
          "placeholder_text": "Search by Customer Name",
          "min_search_size": 3,
          "show_ui": true
        },
        {
          "text": "Customer Email",
          "value": "email",
          "placeholder_text": "Search by Customer Email",
          "min_search_size": 5,
          "show_ui": true
        },
        {
          "text": "AWB Number",
          "value": "awb_no",
          "placeholder_text": "Search by AWB Number",
          "min_search_size": 10,
          "show_ui": true
        },
        {
          "text": "Invoice Id",
          "value": "invoice_id",
          "placeholder_text": "Search by Invoice Id",
          "min_search_size": 5,
          "show_ui": true
        },
        {
          "text": "EAN",
          "value": "ean",
          "placeholder_text": "Search by EAN",
          "min_search_size": 3,
          "show_ui": true
        },
        {
          "text": "SKU",
          "value": "sku",
          "placeholder_text": "Search by SKU",
          "min_search_size": 3,
          "show_ui": true
        }
      ]
    }
  ],
  "advance": {
    "Unfulfilled": [
      {
        "text": "Store Type",
        "value": "store_type",
        "type": "single_select",
        "options": [
          {
            "name": "Warehouse",
            "value": "warehouse"
          },
          {
            "name": "High Street",
            "value": "high_street"
          },
          {
            "name": "Mall",
            "value": "mall"
          },
          {
            "name": "Web Store",
            "value": "webstore"
          }
        ]
      },
      {
        "text": "Order Source",
        "value": "order_source",
        "type": "single_select",
        "options": [
          {
            "name": "Uniket",
            "value": "uniket"
          },
          {
            "name": "Fynd",
            "value": "fynd"
          },
          {
            "name": "Fynd Store",
            "value": "fynd_store"
          },
          {
            "name": "Affiliate",
            "value": "affiliate"
          }
        ]
      },
      {
        "text": "Time to Dispatch",
        "value": "time_to_dispatch",
        "type": "single_select",
        "options": [
          {
            "text": "Breached",
            "value": 1
          },
          {
            "text": "Not Breached",
            "value": -1
          }
        ]
      },
      {
        "text": "Payment Methods",
        "value": "payment_methods",
        "type": "single_select",
        "options": [
          {
            "text": "COD",
            "value": "COD"
          },
          {
            "text": "Prepaid",
            "value": "PREPAID"
          }
        ]
      }
    ],
    "Processed": [
      {
        "text": "Store Type",
        "value": "store_type",
        "type": "single_select",
        "options": [
          {
            "name": "Warehouse",
            "value": "warehouse"
          },
          {
            "name": "High Street",
            "value": "high_street"
          },
          {
            "name": "Mall",
            "value": "mall"
          },
          {
            "name": "Web Store",
            "value": "webstore"
          }
        ]
      },
      {
        "text": "Order Source",
        "value": "order_source",
        "type": "single_select",
        "options": [
          {
            "name": "Uniket",
            "value": "uniket"
          },
          {
            "name": "Fynd",
            "value": "fynd"
          },
          {
            "name": "Fynd Store",
            "value": "fynd_store"
          },
          {
            "name": "Affiliate",
            "value": "affiliate"
          }
        ]
      },
      {
        "text": "Payment Methods",
        "value": "payment_methods",
        "type": "single_select",
        "options": [
          {
            "text": "COD",
            "value": "COD"
          },
          {
            "text": "Prepaid",
            "value": "PREPAID"
          }
        ]
      }
    ],
    "Return": [
      {
        "text": "Store Type",
        "value": "store_type",
        "type": "single_select",
        "options": [
          {
            "name": "Warehouse",
            "value": "warehouse"
          },
          {
            "name": "High Street",
            "value": "high_street"
          },
          {
            "name": "Mall",
            "value": "mall"
          },
          {
            "name": "Web Store",
            "value": "webstore"
          }
        ]
      },
      {
        "text": "Order Source",
        "value": "order_source",
        "type": "single_select",
        "options": [
          {
            "name": "Uniket",
            "value": "uniket"
          },
          {
            "name": "Fynd",
            "value": "fynd"
          },
          {
            "name": "Fynd Store",
            "value": "fynd_store"
          },
          {
            "name": "Affiliate",
            "value": "affiliate"
          }
        ]
      },
      {
        "text": "Payment Methods",
        "value": "payment_methods",
        "type": "single_select",
        "options": [
          {
            "text": "COD",
            "value": "COD"
          },
          {
            "text": "Prepaid",
            "value": "PREPAID"
          }
        ]
      }
    ],
    "ActionCentre": [
      {
        "text": "Store Type",
        "value": "store_type",
        "type": "single_select",
        "options": [
          {
            "name": "Warehouse",
            "value": "warehouse"
          },
          {
            "name": "High Street",
            "value": "high_street"
          },
          {
            "name": "Mall",
            "value": "mall"
          },
          {
            "name": "Web Store",
            "value": "webstore"
          }
        ]
      },
      {
        "text": "Order Source",
        "value": "order_source",
        "type": "single_select",
        "options": [
          {
            "name": "Uniket",
            "value": "uniket"
          },
          {
            "name": "Fynd",
            "value": "fynd"
          },
          {
            "name": "Fynd Store",
            "value": "fynd_store"
          },
          {
            "name": "Affiliate",
            "value": "affiliate"
          }
        ]
      },
      {
        "text": "Payment Methods",
        "value": "payment_methods",
        "type": "single_select",
        "options": [
          {
            "text": "COD",
            "value": "COD"
          },
          {
            "text": "Prepaid",
            "value": "PREPAID"
          }
        ]
      }
    ]
  }
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
const promise = client.order.getBulkInvoice({  batchId : value,
 docType : value });

// Async/Await
const data = await client.order.getBulkInvoice({  batchId : value,
 docType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| batchId | string | yes |  |   
| docType | string | yes |  |  





*Returned Response:*




[BulkInvoicingResponse](#BulkInvoicingResponse)

We are processing the file!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getBulkInvoiceLabel




```javascript
// Promise
const promise = client.order.getBulkInvoiceLabel({  batchId : value });

// Async/Await
const data = await client.order.getBulkInvoiceLabel({  batchId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| batchId | string | yes |  |  





*Returned Response:*




[BulkInvoiceLabelResponse](#BulkInvoiceLabelResponse)

We are processing the file!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getBulkShipmentExcelFile




```javascript
// Promise
const promise = client.order.getBulkShipmentExcelFile({  lane : value,
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
const data = await client.order.getBulkShipmentExcelFile({  lane : value,
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




[FileResponse](#FileResponse)

We are processing the file!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "file_name": "placed_352_1668856953.7936668.xlsx",
  "operation": "putObject",
  "size": 13245,
  "namespace": "misc",
  "content_type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "file_path": "/misc/general/free/original/0Ex0-zTyw-placed_352_1668856953.7936668.xlsx",
  "method": "PUT",
  "tags": [],
  "upload": {
    "url": "https://fynd-staging-assets.s3-accelerate.amazonaws.com/x0/misc/general/free/original/0Ex0-zTyw-placed_352_1668856953.7936668.xlsx?Content-Type=application%2Fvnd.openxmlformats-officedocument.spreadsheetml.sheet&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJUADR2WMPQT6ZJ2Q%2F20221119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221119T112233Z&X-Amz-Expires=1800&X-Amz-Signature=3408400dbe95ff12d0ea5487846aab74b0f2ae6963a58ac980fb46c11cd0b7be&X-Amz-SignedHeaders=host%3Bx-amz-acl&x-amz-acl=public-read",
    "expiry": 1800
  },
  "cdn": {
    "url": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x0/misc/general/free/original/0Ex0-zTyw-placed_352_1668856953.7936668.xlsx"
  }
}
```
</details>









---


### getBulkList




```javascript
// Promise
const promise = client.order.getBulkList({  lane : value,
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
const data = await client.order.getBulkList({  lane : value,
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




[BulkListingResponse](#BulkListingResponse)

We are processing the file!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{}
```
</details>









---


### getManifestList




```javascript
// Promise
const promise = client.order.getManifestList({  status : value,
 storeId : value,
 pageNo : value,
 pageSize : value,
 searchValue : value,
 fromDate : value,
 toDate : value });

// Async/Await
const data = await client.order.getManifestList({  status : value,
 storeId : value,
 pageNo : value,
 pageSize : value,
 searchValue : value,
 fromDate : value,
 toDate : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| status | string | no |  |    
| storeId | number | no |  |    
| pageNo | number | no |  |    
| pageSize | number | no |  |    
| searchValue | string | no |  |    
| fromDate | string | no |  |    
| toDate | string | no |  |  





*Returned Response:*




[GeneratedManifestResponse](#GeneratedManifestResponse)

We are processing the file!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "is_active": true,
      "manifest_id": "5d1d753a-6af9-11ed-8b97-1a715b71f832",
      "company_id": 1,
      "created_at": "26-11-2022",
      "created_by": "nehashetye_gofynd_com_71847",
      "filters": {
        "lane": "ready_for_dispatch",
        "dp_ids": 30,
        "stores": 357,
        "dp_name": "Delhivery",
        "date_range": {
          "to_date": "18-11-2022",
          "from_date": "20-05-2022"
        },
        "store_name": "reliance",
        "sales_channels": "62186fce51e60369e2b093e6",
        "sales_channel_name": "fynd"
      },
      "status": "process"
    }
  ],
  "page": {
    "current": "1",
    "total": 1,
    "has_previous": false,
    "has_next": false,
    "type": "number",
    "size": "100"
  }
}
```
</details>









---


### getManifestDetailsWithShipments




```javascript
// Promise
const promise = client.order.getManifestDetailsWithShipments({  manifestId : value,
 storeId : value,
 fromDate : value,
 toDate : value,
 page : value,
 pageSize : value,
 lane : value,
 dpIds : value,
 searchType : value,
 searchValue : value });

// Async/Await
const data = await client.order.getManifestDetailsWithShipments({  manifestId : value,
 storeId : value,
 fromDate : value,
 toDate : value,
 page : value,
 pageSize : value,
 lane : value,
 dpIds : value,
 searchType : value,
 searchValue : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| manifestId | string | yes |  |    
| fromDate | string | no |  |    
| toDate | string | no |  |   
| storeId | number | yes |  |    
| page | number | no |  |    
| pageSize | number | no |  |    
| lane | string | no |  |    
| dpIds | number | no |  |    
| searchType | string | no |  |    
| searchValue | string | no |  |  





*Returned Response:*




[ManifestDetailResponse](#ManifestDetailResponse)

We are processing the file!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "manifest_details": [
    {
      "is_active": true,
      "manifest_id": "5d1d753a-6af9-11ed-8b97-1a715b71f832",
      "company_id": 1,
      "created_at": "26-11-2022",
      "created_by": "nehashetye_gofynd_com_71847",
      "filters": {
        "lane": "ready_for_dispatch",
        "dp_ids": 30,
        "stores": 357,
        "dp_name": "Delhivery",
        "date_range": {
          "to_date": "18-11-2022",
          "from_date": "20-05-2022"
        },
        "store_name": "reliance",
        "sales_channels": "62186fce51e60369e2b093e6",
        "sales_channel_name": "fynd"
      },
      "meta": {
        "filters": {
          "lane": "ready_for_dispatch",
          "dp_ids": 30,
          "stores": 357,
          "dp_name": "Delhivery",
          "date_range": {
            "to_date": "18-11-2022",
            "from_date": "20-05-2022"
          },
          "store_name": "reliance",
          "sales_channels": "62186fce51e60369e2b093e6",
          "sales_channel_name": "fynd"
        },
        "total_shipment_prices_count": {
          "total_price": 4792,
          "shipment_count": 8
        }
      },
      "status": "process",
      "uid": 11,
      "user_id": "5f23c85bf4439a812561443a",
      "id": "6381ca603a81bc8a08f340de"
    }
  ],
  "items": [
    {
      "shipment_id": "16631665711791409923",
      "order_id": "FYMP6321E86B01D585CA",
      "invoice_id": "1111111111111112",
      "awb": null,
      "item_qty": 1
    }
  ],
  "page": {
    "current": 1,
    "total": 1,
    "has_previous": false,
    "has_next": false,
    "type": "number",
    "size": 10
  },
  "additional_shipment_count": 0
}
```
</details>









---


### getBulkActionFailedReport




```javascript
// Promise
const promise = client.order.getBulkActionFailedReport({  batchId : value,
 reportType : value });

// Async/Await
const data = await client.order.getBulkActionFailedReport({  batchId : value,
 reportType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| batchId | string | yes |  |    
| reportType | string | no |  |  





*Returned Response:*




[FileResponse](#FileResponse)

File Processed!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "file_name": "requirements.txt",
  "operation": "putObject",
  "size": 8493,
  "namespace": "misc",
  "content_type": "text/plain",
  "file_path": "/misc/general/free/original/CEQ64hj8--requirements.txt",
  "method": "PUT",
  "tags": [],
  "upload": {
    "url": "https://fynd-staging-assets.s3-accelerate.amazonaws.com/x0/misc/general/free/original/CEQ64hj8--requirements.txt?Content-Type=text%2Fplain&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJUADR2WMPQT6ZJ2Q%2F20221118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221118T064720Z&X-Amz-Expires=1800&X-Amz-Signature=088ae87da27ef49644176f751ad2e642ab6cfad015cf01564ab5201c404000ec&X-Amz-SignedHeaders=host%3Bx-amz-acl&x-amz-acl=public-read",
    "expiry": 1800
  },
  "cdn": {
    "url": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x0/misc/general/free/original/CEQ64hj8--requirements.txt"
  }
}
```
</details>









---


### getShipmentReasons
Get reasons behind full or partial cancellation of a shipment



```javascript
// Promise
const promise = client.order.getShipmentReasons({  shipmentId : value,
 bagId : value,
 state : value });

// Async/Await
const data = await client.order.getShipmentReasons({  shipmentId : value,
 bagId : value,
 state : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes | ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID. |   
| bagId | string | yes | ID of the bag. An order may contain multiple items and may get divided into one or more shipment, each having its own ID. |   
| state | string | yes | State for which reasons are required. |  



Use this API to retrieve the issues that led to the cancellation of bags within a shipment.

*Returned Response:*




[PlatformShipmentReasonsResponse](#PlatformShipmentReasonsResponse)

Success. Check the example shown below or refer `PlatformShipmentReasonsResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "reasons": [
    {
      "id": 84,
      "display_name": "Not Available to accept the Order",
      "qc_type": [],
      "question_set": []
    },
    {
      "id": 85,
      "display_name": "Store Bulk Order",
      "qc_type": [],
      "question_set": []
    },
    {
      "id": 86,
      "display_name": "Cancelled due to delayed delivery",
      "qc_type": [],
      "question_set": []
    },
    {
      "id": 87,
      "display_name": "Others",
      "qc_type": [],
      "question_set": []
    }
  ]
}
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


### getBagById




```javascript
// Promise
const promise = client.order.getBagById({  bagId : value,
 channelBagId : value,
 channelId : value });

// Async/Await
const data = await client.order.getBagById({  bagId : value,
 channelBagId : value,
 channelId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| bagId | string | no |  |    
| channelBagId | string | no |  |    
| channelId | string | no |  |  





*Returned Response:*




[BagDetailsPlatformResponse](#BagDetailsPlatformResponse)

Successfully retrived shipment details!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getBags




```javascript
// Promise
const promise = client.order.getBags({  bagIds : value,
 shipmentIds : value,
 orderIds : value,
 channelBagIds : value,
 channelShipmentIds : value,
 channelOrderIds : value,
 channelId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.order.getBags({  bagIds : value,
 shipmentIds : value,
 orderIds : value,
 channelBagIds : value,
 channelShipmentIds : value,
 channelOrderIds : value,
 channelId : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| bagIds | string | no |  |    
| shipmentIds | string | no |  |    
| orderIds | string | no |  |    
| channelBagIds | string | no |  |    
| channelShipmentIds | string | no |  |    
| channelOrderIds | string | no |  |    
| channelId | string | no |  |    
| pageNo | number | no |  |    
| pageSize | number | no |  |  





*Returned Response:*




[GetBagsPlatformResponse](#GetBagsPlatformResponse)

Successfully retrived all the given shipments details!




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


### updateShipmentStatus




```javascript
// Promise
const promise = client.order.updateShipmentStatus({  body : value });

// Async/Await
const data = await client.order.updateShipmentStatus({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UpdateShipmentStatusRequest](#UpdateShipmentStatusRequest) | yes | Request body |


Update shipment status

*Returned Response:*




[UpdateShipmentStatusResponseBody](#UpdateShipmentStatusResponseBody)

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


### dispatchManifest




```javascript
// Promise
const promise = client.order.dispatchManifest({  body : value });

// Async/Await
const data = await client.order.dispatchManifest({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DispatchManifest](#DispatchManifest) | yes | Request body |




*Returned Response:*




[SuccessResponse](#SuccessResponse)

Shipment Dispatched mapped with manifest!




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


### platformManualAssignDPToShipment




```javascript
// Promise
const promise = client.order.platformManualAssignDPToShipment({  body : value });

// Async/Await
const data = await client.order.platformManualAssignDPToShipment({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ManualAssignDPToShipment](#ManualAssignDPToShipment) | yes | Request body |




*Returned Response:*




[ManualAssignDPToShipmentResponse](#ManualAssignDPToShipmentResponse)

DP Assigned for the given shipment Ids.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updatePackagingDimensions




```javascript
// Promise
const promise = client.order.updatePackagingDimensions({  body : value });

// Async/Await
const data = await client.order.updatePackagingDimensions({  body : value });
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


### createOrder




```javascript
// Promise
const promise = client.order.createOrder({  body : value });

// Async/Await
const data = await client.order.createOrder({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateOrderAPI](#CreateOrderAPI) | yes | Request body |




*Returned Response:*




[CreateOrderResponse](#CreateOrderResponse)

Successfully created an order!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createChannelConfig




```javascript
// Promise
const promise = client.order.createChannelConfig({  body : value });

// Async/Await
const data = await client.order.createChannelConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateChannelConfigData](#CreateChannelConfigData) | yes | Request body |


createChannelConfig

*Returned Response:*




[CreateChannelConfigResponse](#CreateChannelConfigResponse)

Successfully updateShipmentStatus!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": {
    "acknowledged": true,
    "is_upserted": false,
    "is_inserted": false
  }
}
```
</details>









---


### getChannelConfig




```javascript
// Promise
const promise = client.order.getChannelConfig();

// Async/Await
const data = await client.order.getChannelConfig();
```






getChannelConfig

*Returned Response:*




[CreateChannelConfigData](#CreateChannelConfigData)

Successfully created the config data




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "config_data": {
    "payment_info": {
      "payment_methods": [
        {
          "mode": "COD",
          "collect_by": "gringotts",
          "refund_by": "gringotts"
        }
      ],
      "source": "fynd",
      "mode_of_payment": "COD"
    },
    "dp_configuration": {
      "shipping_by": "fynd"
    },
    "logo_url": {},
    "location_reassignment": false,
    "lock_states": [
      "bag_packed"
    ],
    "shipment_assignment": "16703096324891701814"
  }
}
```
</details>









---


### uploadConsent




```javascript
// Promise
const promise = client.order.uploadConsent({  body : value });

// Async/Await
const data = await client.order.uploadConsent({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UploadConsent](#UploadConsent) | yes | Request body |




*Returned Response:*




[SuccessResponse](#SuccessResponse)

Successful Manifest upload!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### orderUpdate




```javascript
// Promise
const promise = client.order.orderUpdate({  body : value });

// Async/Await
const data = await client.order.orderUpdate({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PlatformOrderUpdate](#PlatformOrderUpdate) | yes | Request body |




*Returned Response:*




[ResponseDetail](#ResponseDetail)

We are processing the order!




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


### sendSmsNinjaPlatform




```javascript
// Promise
const promise = client.order.sendSmsNinjaPlatform({  body : value });

// Async/Await
const data = await client.order.sendSmsNinjaPlatform({  body : value });
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



### Schemas

 
 
 #### [PaymentModeInfo](#PaymentModeInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string |  yes  |  |
 | type | string |  yes  |  |

---


 
 
 #### [ShipmentStatus](#ShipmentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  yes  |  |
 | ops_status | string |  yes  |  |
 | hex_code | string |  yes  |  |
 | actual_status | string |  yes  |  |
 | status | string |  yes  |  |

---


 
 
 #### [UserDataInfo](#UserDataInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  no  |  |
 | last_name | string |  no  |  |
 | avis_user_id | string |  no  |  |
 | mobile | string |  no  |  |
 | name | string |  no  |  |
 | gender | string |  no  |  |
 | is_anonymous_user | boolean |  no  |  |
 | first_name | string |  no  |  |
 | uid | number |  no  |  |

---


 
 
 #### [Prices](#Prices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cashback | number |  no  |  |
 | promotion_effective_discount | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | cod_charges | number |  no  |  |
 | discount | number |  no  |  |
 | refund_credit | number |  no  |  |
 | amount_paid_roundoff | number |  no  |  |
 | amount_paid | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | tax_collected_at_source | number |  no  |  |
 | price_effective | number |  no  |  |
 | refund_amount | number |  no  |  |
 | coupon_value | number |  no  |  |
 | value_of_good | number |  no  |  |
 | price_marked | number |  no  |  |
 | fynd_credits | number |  no  |  |

---


 
 
 #### [ShipmentItemFulFillingStore](#ShipmentItemFulFillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | code | string |  yes  |  |

---


 
 
 #### [PlatformItem](#PlatformItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | l1_category | [string] |  no  |  |
 | l3_category_name | string |  no  |  |
 | color | string |  no  |  |
 | name | string |  no  |  |
 | can_cancel | boolean |  no  |  |
 | department_id | number |  no  |  |
 | size | string |  no  |  |
 | images | [string] |  no  |  |
 | code | string |  no  |  |
 | image | [string] |  no  |  |
 | can_return | boolean |  no  |  |
 | l3_category | number |  no  |  |

---


 
 
 #### [GSTDetailsData](#GSTDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst_fee | number |  yes  |  |
 | tax_collected_at_source | number |  yes  |  |
 | brand_calculated_amount | number |  yes  |  |
 | gstin_code | string |  yes  |  |
 | value_of_good | number |  yes  |  |

---


 
 
 #### [BagUnit](#BagUnit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | applied_promos | string |  no  |  |
 | total_shipment_bags | number |  yes  |  |
 | identifier | string |  yes  |  |
 | quantity | number |  yes  |  |
 | line_number | number |  yes  |  |
 | ordering_channel | string |  yes  |  |
 | can_cancel | boolean |  no  |  |
 | group_id | string |  no  |  |
 | shipment_id | string |  yes  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | can_return | boolean |  no  |  |
 | parent_promo_bags | string |  no  |  |
 | bag_id | number |  yes  |  |
 | status | string |  yes  |  |
 | item | [PlatformItem](#PlatformItem) |  no  |  |
 | gst | [GSTDetailsData](#GSTDetailsData) |  no  |  |

---


 
 
 #### [ShipmentItem](#ShipmentItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | payment_methods | string |  no  |  |
 | application | string |  no  |  |
 | payment_mode_info | [PaymentModeInfo](#PaymentModeInfo) |  no  |  |
 | channel | string |  no  |  |
 | shipment_status | [ShipmentStatus](#ShipmentStatus) |  no  |  |
 | created_at | string |  yes  |  |
 | total_bags_count | number |  yes  |  |
 | user | [UserDataInfo](#UserDataInfo) |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | shipment_created_at | number |  yes  |  |
 | sla | string |  no  |  |
 | fulfilling_store | [ShipmentItemFulFillingStore](#ShipmentItemFulFillingStore) |  no  |  |
 | total_shipments_in_order | number |  yes  |  |
 | fulfilling_centre | string |  yes  |  |
 | bags | [[BagUnit](#BagUnit)] |  no  |  |

---


 
 
 #### [FilterInfoOption](#FilterInfoOption)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  no  |  |
 | name | string |  no  |  |
 | text | string |  yes  |  |

---


 
 
 #### [FiltersInfo](#FiltersInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  yes  |  |
 | type | string |  yes  |  |
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


 
 
 #### [Error](#Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [UserDetailsData](#UserDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  yes  |  |
 | address | string |  yes  |  |
 | pincode | string |  yes  |  |
 | name | string |  yes  |  |
 | state | string |  yes  |  |
 | phone | string |  yes  |  |
 | city | string |  yes  |  |
 | country | string |  yes  |  |

---


 
 
 #### [TrackingList](#TrackingList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | time | string |  no  |  |
 | is_passed | boolean |  no  |  |
 | text | string |  yes  |  |
 | is_current | boolean |  no  |  |
 | status | string |  yes  |  |

---


 
 
 #### [BagStateMapper](#BagStateMapper)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_display_name | string |  no  |  |
 | name | string |  yes  |  |
 | journey_type | string |  yes  |  |
 | display_name | string |  yes  |  |
 | app_state_name | string |  no  |  |
 | notify_customer | boolean |  no  |  |
 | is_active | boolean |  no  |  |
 | app_facing | boolean |  no  |  |
 | state_type | string |  yes  |  |
 | bs_id | number |  yes  |  |

---


 
 
 #### [BagStatusHistory](#BagStatusHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | updated_at | string |  no  |  |
 | kafka_sync | boolean |  no  |  |
 | store_id | number |  yes  |  |
 | delivery_awb_number | string |  no  |  |
 | app_display_name | boolean |  no  |  |
 | bsh_id | number |  yes  |  |
 | bag_state_mapper | [BagStateMapper](#BagStateMapper) |  yes  |  |
 | created_at | string |  yes  |  |
 | state_id | number |  yes  |  |
 | state_type | string |  no  |  |
 | shipment_id | string |  yes  |  |
 | display_name | boolean |  no  |  |
 | forward | boolean |  no  |  |
 | delivery_partner_id | number |  no  |  |
 | bag_id | number |  yes  |  |
 | status | string |  yes  |  |
 | reasons | [string] |  no  |  |

---


 
 
 #### [OrderDetailsData](#OrderDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_order_id | string |  yes  |  |
 | tax_details | string |  no  |  |
 | cod_charges | string |  no  |  |
 | order_date | string |  no  |  |
 | ordering_channel_logo | string |  no  |  |
 | order_value | string |  no  |  |
 | ordering_channel | string |  no  |  |
 | source | string |  no  |  |
 | affiliate_id | string |  no  |  |

---


 
 
 #### [ItemCriterias](#ItemCriterias)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_brand | [number] |  no  |  |

---


 
 
 #### [BuyRules](#BuyRules)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_criteria | [ItemCriterias](#ItemCriterias) |  no  |  |
 | cart_conditions | string |  no  |  |

---


 
 
 #### [DiscountRules](#DiscountRules)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | number |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [AppliedPromos](#AppliedPromos)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mrp_promotion | boolean |  no  |  |
 | promo_id | string |  no  |  |
 | article_quantity | number |  no  |  |
 | promotion_name | string |  no  |  |
 | amount | number |  no  |  |
 | buy_rules | [[BuyRules](#BuyRules)] |  no  |  |
 | promotion_type | string |  no  |  |
 | discount_rules | [[DiscountRules](#DiscountRules)] |  no  |  |

---


 
 
 #### [BagGST](#BagGST)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst_fee | number |  no  |  |
 | gst_tax_percentage | number |  no  |  |
 | hsn_code | string |  no  |  |
 | is_default_hsn_code | boolean |  no  |  |
 | gst_tag | string |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | gstin_code | string |  no  |  |
 | value_of_good | number |  no  |  |

---


 
 
 #### [OrderBrandName](#OrderBrandName)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  yes  |  |
 | logo | string |  yes  |  |
 | created_on | number |  yes  |  |
 | company | string |  yes  |  |
 | brand_name | string |  yes  |  |
 | modified_on | number |  no  |  |

---


 
 
 #### [BagConfigs](#BagConfigs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_returnable | boolean |  yes  |  |
 | allow_force_return | boolean |  yes  |  |
 | can_be_cancelled | boolean |  yes  |  |
 | enable_tracking | boolean |  yes  |  |
 | is_active | boolean |  yes  |  |
 | is_customer_return_allowed | boolean |  yes  |  |

---


 
 
 #### [PlatformDeliveryAddress](#PlatformDeliveryAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | updated_at | string |  no  |  |
 | landmark | string |  no  |  |
 | email | string |  no  |  |
 | pincode | string |  no  |  |
 | address_type | string |  no  |  |
 | version | string |  no  |  |
 | address1 | string |  no  |  |
 | state | string |  no  |  |
 | longitude | number |  no  |  |
 | created_at | string |  no  |  |
 | phone | string |  no  |  |
 | latitude | number |  no  |  |
 | contact_person | string |  no  |  |
 | address_category | string |  no  |  |
 | address2 | string |  no  |  |
 | area | string |  no  |  |
 | city | string |  no  |  |
 | country | string |  no  |  |

---


 
 
 #### [OrderBagArticle](#OrderBagArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | return_config | string |  no  |  |
 | identifiers | string |  no  |  |
 | uid | string |  no  |  |

---


 
 
 #### [Identifier](#Identifier)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ean | string |  no  |  |

---


 
 
 #### [FinancialBreakup](#FinancialBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_paid | number |  yes  |  |
 | hsn_code | string |  yes  |  |
 | fynd_credits | number |  yes  |  |
 | gst_fee | string |  yes  |  |
 | cashback | number |  yes  |  |
 | pm_price_split | string |  yes  |  |
 | promotion_effective_discount | number |  yes  |  |
 | coupon_effective_discount | number |  yes  |  |
 | price_effective | number |  yes  |  |
 | total_units | number |  yes  |  |
 | brand_calculated_amount | number |  yes  |  |
 | cashback_applied | number |  yes  |  |
 | cod_charges | number |  yes  |  |
 | discount | number |  yes  |  |
 | item_name | string |  yes  |  |
 | size | string |  yes  |  |
 | value_of_good | number |  yes  |  |
 | price_marked | number |  yes  |  |
 | transfer_price | number |  yes  |  |
 | refund_credit | number |  yes  |  |
 | gst_tax_percentage | number |  yes  |  |
 | amount_paid_roundoff | number |  no  |  |
 | delivery_charge | number |  yes  |  |
 | added_to_fynd_cash | boolean |  yes  |  |
 | tax_collected_at_source | number |  no  |  |
 | gst_tag | string |  yes  |  |
 | coupon_value | number |  yes  |  |
 | identifiers | [Identifier](#Identifier) |  yes  |  |

---


 
 
 #### [OrderBags](#OrderBags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | applied_promos | [[AppliedPromos](#AppliedPromos)] |  no  |  |
 | identifier | string |  no  |  |
 | line_number | number |  no  |  |
 | seller_identifier | string |  no  |  |
 | gst_details | [BagGST](#BagGST) |  no  |  |
 | brand | [OrderBrandName](#OrderBrandName) |  no  |  |
 | bag_configs | [BagConfigs](#BagConfigs) |  no  |  |
 | bag_id | number |  yes  |  |
 | delivery_address | [PlatformDeliveryAddress](#PlatformDeliveryAddress) |  no  |  |
 | can_cancel | boolean |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | parent_promo_bags | string |  no  |  |
 | item | [PlatformItem](#PlatformItem) |  no  |  |
 | article | [OrderBagArticle](#OrderBagArticle) |  no  |  |
 | entity_type | string |  no  |  |
 | quantity | number |  no  |  |
 | display_name | string |  no  |  |
 | financial_breakup | [[FinancialBreakup](#FinancialBreakup)] |  no  |  |
 | can_return | boolean |  no  |  |
 | current_status | string |  no  |  |

---


 
 
 #### [ShipmentPayments](#ShipmentPayments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string |  no  |  |
 | mode | string |  yes  |  |
 | source | string |  no  |  |

---


 
 
 #### [FulfillingStore](#FulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | store_name | string |  yes  |  |
 | address | string |  yes  |  |
 | pincode | string |  yes  |  |
 | fulfillment_channel | string |  yes  |  |
 | state | string |  yes  |  |
 | code | string |  yes  |  |
 | meta | string |  yes  |  |
 | country | string |  yes  |  |
 | phone | string |  yes  |  |
 | city | string |  yes  |  |
 | contact_person | string |  yes  |  |

---


 
 
 #### [ShipmentStatusData](#ShipmentStatusData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | created_at | string |  no  |  |
 | shipment_id | string |  no  |  |
 | bag_list | [number] |  no  |  |
 | status | string |  no  |  |

---


 
 
 #### [DPDetailsData](#DPDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | awb_no | string |  no  |  |
 | pincode | string |  no  |  |
 | eway_bill_id | string |  no  |  |
 | name | string |  no  |  |
 | gst_tag | string |  no  |  |
 | track_url | string |  no  |  |
 | country | string |  no  |  |

---


 
 
 #### [ShipmentInfoResponse](#ShipmentInfoResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_not_fynd_source | boolean |  yes  |  |
 | delivery_status | [string] |  yes  |  |
 | delivery_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | credit_note_id | string |  yes  |  |
 | forward_order_status | [string] |  no  |  |
 | lock_status | string |  yes  |  |
 | email_id | string |  yes  |  |
 | order_type | string |  yes  |  |
 | pay_button | string |  no  |  |
 | total_bags | number |  no  |  |
 | gst_details | [GSTDetailsData](#GSTDetailsData) |  no  |  |
 | operational_status | string |  no  |  |
 | tracking_list | [[TrackingList](#TrackingList)] |  no  |  |
 | refund_text | string |  no  |  |
 | due_date | string |  no  |  |
 | beneficiary_details | boolean |  no  |  |
 | bank_data | string |  no  |  |
 | status_progress | number |  yes  |  |
 | items | [string] |  yes  |  |
 | picked_date | string |  no  |  |
 | shipment_quantity | number |  no  |  |
 | user_info | string |  no  |  |
 | payment_mode | string |  no  |  |
 | billing_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | can_cancel | boolean |  no  |  |
 | bag_status_history | [[BagStatusHistory](#BagStatusHistory)] |  no  |  |
 | priority_text | string |  no  |  |
 | invoice | string |  yes  |  |
 | refund_details | string |  no  |  |
 | secured_delivery_flag | string |  no  |  |
 | is_pdsr | string |  no  |  |
 | is_invoiced | boolean |  yes  |  |
 | shipment_id | string |  yes  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | delivery_slot | string |  no  |  |
 | order_status | string |  yes  |  |
 | tracking_url | string |  yes  |  |
 | escalation | string |  no  |  |
 | enable_tracking | boolean |  no  |  |
 | forward_tracking_list | [string] |  no  |  |
 | order | [OrderDetailsData](#OrderDetailsData) |  no  |  |
 | bags | [[OrderBags](#OrderBags)] |  no  |  |
 | is_packaging_order | boolean |  yes  |  |
 | forward_shipment_status | [string] |  no  |  |
 | fyndstore_emp | string |  yes  |  |
 | vertical | string |  no  |  |
 | is_fynd_store | string |  no  |  |
 | kirana_store_id | string |  no  |  |
 | can_break | string |  yes  |  |
 | payments | [ShipmentPayments](#ShipmentPayments) |  no  |  |
 | child_nodes | [string] |  no  |  |
 | platform_logo | boolean |  yes  |  |
 | custom_meta | [string] |  no  |  |
 | company | string |  yes  |  |
 | total_items | number |  no  |  |
 | current_shipment_status | string |  yes  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  |
 | shipment_images | [string] |  no  |  |
 | status | [ShipmentStatusData](#ShipmentStatusData) |  no  |  |
 | coupon | string |  no  |  |
 | enable_dp_tracking | string |  no  |  |
 | ordering_store | string |  yes  |  |
 | dp_details | [DPDetailsData](#DPDetailsData) |  no  |  |
 | is_fynd_coupon | boolean |  yes  |  |
 | order_created_time | string |  no  |  |
 | user_id | string |  yes  |  |
 | affiliate_shipment_id | string |  yes  |  |
 | go_green | boolean |  no  |  |
 | shipment_status | string |  no  |  |
 | replacement_details | string |  no  |  |
 | packaging_type | string |  no  |  |
 | mid | string |  no  |  |
 | journey_type | string |  no  |  |
 | can_return | boolean |  no  |  |
 | user_agent | string |  no  |  |

---


 
 
 #### [OrderDict](#OrderDict)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_order_id | string |  yes  |  |
 | order_date | string |  yes  |  |
 | shipment_count | number |  yes  |  |

---


 
 
 #### [PlatformShipment](#PlatformShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | delivery_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | total_bags | number |  no  |  |
 | gst_details | [GSTDetailsData](#GSTDetailsData) |  no  |  |
 | operational_status | string |  no  |  |
 | tracking_list | [[TrackingList](#TrackingList)] |  no  |  |
 | picked_date | string |  no  |  |
 | shipment_quantity | number |  no  |  |
 | payment_mode | string |  no  |  |
 | billing_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | bag_status_history | [[BagStatusHistory](#BagStatusHistory)] |  no  |  |
 | priority_text | string |  no  |  |
 | shipment_id | string |  yes  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | delivery_slot | string |  no  |  |
 | order | [OrderDetailsData](#OrderDetailsData) |  no  |  |
 | bags | [[OrderBags](#OrderBags)] |  no  |  |
 | vertical | string |  no  |  |
 | payments | [ShipmentPayments](#ShipmentPayments) |  no  |  |
 | platform_logo | string |  no  |  |
 | custom_meta | [string] |  no  |  |
 | total_items | number |  no  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  |
 | shipment_images | [string] |  no  |  |
 | status | [ShipmentStatusData](#ShipmentStatusData) |  no  |  |
 | enable_dp_tracking | string |  no  |  |
 | dp_details | [DPDetailsData](#DPDetailsData) |  no  |  |
 | shipment_status | string |  no  |  |
 | packaging_type | string |  no  |  |
 | journey_type | string |  no  |  |
 | user_agent | string |  no  |  |

---


 
 
 #### [ShipmentDetailsResponse](#ShipmentDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | custom_meta | [string] |  no  |  |
 | order | [OrderDict](#OrderDict) |  no  |  |
 | shipments | [[PlatformShipment](#PlatformShipment)] |  no  |  |

---


 
 
 #### [SubLane](#SubLane)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | actions | [string] |  no  |  |
 | value | string |  no  |  |
 | text | string |  no  |  |
 | total_items | number |  no  |  |
 | index | number |  no  |  |

---


 
 
 #### [SuperLane](#SuperLane)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_items | number |  no  |  |
 | value | string |  yes  |  |
 | options | [[SubLane](#SubLane)] |  no  |  |
 | text | string |  yes  |  |

---


 
 
 #### [LaneConfigResponse](#LaneConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | super_lanes | [[SuperLane](#SuperLane)] |  no  |  |

---


 
 
 #### [PlatformBreakupValues](#PlatformBreakupValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  no  |  |
 | name | string |  no  |  |
 | display | string |  no  |  |

---


 
 
 #### [PlatformChannel](#PlatformChannel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [PlatformOrderItems](#PlatformOrderItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_order_value | number |  no  |  |
 | order_created_time | string |  no  |  |
 | breakup_values | [[PlatformBreakupValues](#PlatformBreakupValues)] |  no  |  |
 | user_info | [UserDataInfo](#UserDataInfo) |  no  |  |
 | channel | [PlatformChannel](#PlatformChannel) |  no  |  |
 | payment_mode | string |  no  |  |
 | order_id | string |  no  |  |
 | meta | string |  no  |  |
 | order_value | number |  no  |  |
 | shipments | [[PlatformShipment](#PlatformShipment)] |  no  |  |

---


 
 
 #### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_previous | boolean |  no  |  |
 | size | number |  no  |  |
 | type | string |  no  |  |
 | total | number |  no  |  |
 | has_next | boolean |  no  |  |

---


 
 
 #### [OrderListingResponse](#OrderListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[PlatformOrderItems](#PlatformOrderItems)] |  no  |  |
 | success | boolean |  no  |  |
 | total_count | number |  no  |  |
 | lane | string |  no  |  |
 | message | string |  no  |  |
 | page | [Page](#Page) |  no  |  |

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
 | value | number |  yes  |  |
 | key | string |  yes  |  |
 | options | [[Options](#Options)] |  no  |  |
 | text | string |  yes  |  |

---


 
 
 #### [MetricCountResponse](#MetricCountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[MetricsCount](#MetricsCount)] |  no  |  |

---


 
 
 #### [PlatformTrack](#PlatformTrack)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | updated_at | string |  no  |  |
 | updated_time | string |  no  |  |
 | account_name | string |  no  |  |
 | reason | string |  no  |  |
 | awb | string |  no  |  |
 | shipment_type | string |  no  |  |
 | raw_status | string |  no  |  |
 | last_location_recieved_at | string |  no  |  |
 | meta | string |  no  |  |
 | status | string |  no  |  |

---


 
 
 #### [PlatformShipmentTrack](#PlatformShipmentTrack)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | results | [[PlatformTrack](#PlatformTrack)] |  no  |  |
 | meta | string |  no  |  |

---


 
 
 #### [FiltersResponse](#FiltersResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | advance | [string] |  no  |  |

---


 
 
 #### [Success](#Success)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [OmsReports](#OmsReports)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | report_id | string |  no  |  |
 | report_name | string |  no  |  |
 | request_details | string |  no  |  |
 | s3_key | string |  no  |  |
 | display_name | string |  no  |  |
 | report_type | string |  no  |  |
 | report_requested_at | string |  no  |  |
 | report_created_at | string |  no  |  |
 | status | string |  no  |  |

---


 
 
 #### [JioCodeUpsertDataSet](#JioCodeUpsertDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | jio_code | string |  no  |  |
 | company_id | string |  no  |  |
 | item_id | string |  no  |  |
 | article_id | string |  no  |  |

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
 | value | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [JioCodeUpsertResponse](#JioCodeUpsertResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | identifier | string |  no  |  |
 | trace_id | string |  no  |  |
 | error | [[NestedErrorSchemaDataSet](#NestedErrorSchemaDataSet)] |  no  |  |
 | data | [string] |  no  |  |

---


 
 
 #### [BulkInvoicingResponse](#BulkInvoicingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | message | string |  no  |  |

---


 
 
 #### [BulkInvoiceLabelResponse](#BulkInvoiceLabelResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store_id | string |  no  |  |
 | store_name | string |  no  |  |
 | company_id | string |  no  |  |
 | invoice_status | string |  no  |  |
 | store_code | string |  no  |  |
 | do_invoice_label_generated | boolean |  yes  |  |
 | label | string |  no  |  |
 | batch_id | string |  yes  |  |
 | invoice | string |  no  |  |
 | data | string |  no  |  |

---


 
 
 #### [URL](#URL)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  no  |  |

---


 
 
 #### [FileUploadResponse](#FileUploadResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | expiry | number |  no  |  |
 | url | string |  no  |  |

---


 
 
 #### [FileResponse](#FileResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | method | string |  no  |  |
 | content_type | string |  no  |  |
 | cdn | [URL](#URL) |  no  |  |
 | file_path | string |  no  |  |
 | file_name | string |  no  |  |
 | size | number |  no  |  |
 | namespace | string |  no  |  |
 | upload | [FileUploadResponse](#FileUploadResponse) |  no  |  |
 | operation | string |  no  |  |
 | tags | [string] |  no  |  |

---


 
 
 #### [bulkListingData](#bulkListingData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store_name | string |  no  |  |
 | successful | number |  no  |  |
 | total | number |  no  |  |
 | processing_shipments | [string] |  no  |  |
 | id | string |  no  |  |
 | store_code | string |  no  |  |
 | processing | number |  no  |  |
 | failed_shipments | [string] |  no  |  |
 | failed | number |  no  |  |
 | store_id | number |  no  |  |
 | uploaded_on | string |  no  |  |
 | user_id | string |  no  |  |
 | status | string |  no  |  |
 | user_name | string |  no  |  |
 | excel_url | string |  no  |  |
 | company_id | number |  no  |  |
 | file_name | string |  no  |  |
 | batch_id | string |  no  |  |
 | successful_shipments | [string] |  no  |  |

---


 
 
 #### [BulkListingPage](#BulkListingPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | total | number |  no  |  |
 | has_previous | boolean |  no  |  |
 | size | number |  no  |  |
 | type | string |  no  |  |
 | has_next | boolean |  no  |  |

---


 
 
 #### [BulkListingResponse](#BulkListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | data | [[bulkListingData](#bulkListingData)] |  no  |  |
 | error | string |  no  |  |
 | page | [BulkListingPage](#BulkListingPage) |  no  |  |

---


 
 
 #### [DateRange](#DateRange)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | to_date | string |  no  |  |
 | from_date | string |  no  |  |

---


 
 
 #### [ManifestFilter](#ManifestFilter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | date_range | [DateRange](#DateRange) |  no  |  |
 | store_name | string |  no  |  |
 | sales_channel_name | string |  no  |  |
 | dp_name | string |  no  |  |
 | dp_ids | string |  no  |  |
 | lane | string |  no  |  |
 | sales_channels | string |  no  |  |
 | stores | string |  no  |  |

---


 
 
 #### [GeneratedManifestItem](#GeneratedManifestItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_by | string |  no  |  |
 | manifest_id | string |  no  |  |
 | company_id | number |  no  |  |
 | created_at | string |  no  |  |
 | filters | [ManifestFilter](#ManifestFilter) |  no  |  |
 | is_active | boolean |  no  |  |
 | status | string |  no  |  |

---


 
 
 #### [ManifestPage](#ManifestPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | string |  no  |  |
 | has_previous | boolean |  no  |  |
 | size | string |  no  |  |
 | type | string |  no  |  |
 | total | number |  no  |  |
 | has_next | boolean |  no  |  |

---


 
 
 #### [GeneratedManifestResponse](#GeneratedManifestResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[GeneratedManifestItem](#GeneratedManifestItem)] |  no  |  |
 | page | [ManifestPage](#ManifestPage) |  no  |  |

---


 
 
 #### [ManifestDetailItem](#ManifestDetailItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_qty | number |  no  |  |
 | invoice_id | string |  no  |  |
 | awb | string |  no  |  |
 | order_id | string |  no  |  |
 | shipment_id | string |  no  |  |

---


 
 
 #### [ManifestDetailTotalShipmentPricesCount](#ManifestDetailTotalShipmentPricesCount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_count | number |  no  |  |
 | total_price | number |  no  |  |

---


 
 
 #### [ManifestDetailMeta](#ManifestDetailMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [ManifestFilter](#ManifestFilter) |  no  |  |
 | total_shipment_prices_count | [ManifestDetailTotalShipmentPricesCount](#ManifestDetailTotalShipmentPricesCount) |  no  |  |

---


 
 
 #### [ManifestDetail](#ManifestDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_by | string |  no  |  |
 | id | number |  no  |  |
 | manifest_id | string |  no  |  |
 | company_id | number |  no  |  |
 | created_at | string |  no  |  |
 | meta | [ManifestDetailMeta](#ManifestDetailMeta) |  no  |  |
 | filters | [ManifestFilter](#ManifestFilter) |  no  |  |
 | is_active | boolean |  no  |  |
 | user_id | number |  no  |  |
 | status | string |  no  |  |
 | uid | number |  no  |  |

---


 
 
 #### [ManifestDetailResponse](#ManifestDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ManifestDetailItem](#ManifestDetailItem)] |  no  |  |
 | additional_shipment_count | number |  no  |  |
 | manifest_details | [[ManifestDetail](#ManifestDetail)] |  no  |  |
 | page | [ManifestPage](#ManifestPage) |  no  |  |

---


 
 
 #### [QuestionSet](#QuestionSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | display_name | string |  no  |  |

---


 
 
 #### [Reason](#Reason)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | question_set | [[QuestionSet](#QuestionSet)] |  no  |  |
 | id | number |  no  |  |
 | display_name | string |  no  |  |
 | qc_type | [string] |  no  |  |

---


 
 
 #### [PlatformShipmentReasonsResponse](#PlatformShipmentReasonsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | reasons | [[Reason](#Reason)] |  no  |  |

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
 | successful_shipments_count | number |  no  |  |
 | company_id | string |  no  |  |
 | total_shipments_count | number |  no  |  |
 | batch_id | string |  no  |  |
 | processing_shipments_count | number |  no  |  |
 | successful_shipment_ids | [string] |  no  |  |
 | failed_shipments_count | number |  no  |  |

---


 
 
 #### [BulkActionDetailsResponse](#BulkActionDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | string |  no  |  |
 | uploaded_by | string |  no  |  |
 | error | [string] |  no  |  |
 | message | string |  no  |  |
 | failed_records | [string] |  no  |  |
 | uploaded_on | string |  no  |  |
 | data | [[BulkActionDetailsDataField](#BulkActionDetailsDataField)] |  no  |  |
 | user_id | string |  no  |  |
 | status | boolean |  no  |  |

---


 
 
 #### [ArticleDetails](#ArticleDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |

---


 
 
 #### [AffiliateMeta](#AffiliateMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | employee_discount | number |  no  |  |
 | is_priority | boolean |  no  |  |
 | loyalty_discount | number |  no  |  |
 | order_item_id | string |  no  |  |
 | channel_shipment_id | string |  no  |  |
 | quantity | number |  no  |  |
 | size_level_total_qty | number |  no  |  |
 | coupon_code | string |  no  |  |
 | channel_order_id | string |  no  |  |
 | box_type | string |  no  |  |
 | due_date | string |  no  |  |

---


 
 
 #### [AffiliateBagDetails](#AffiliateBagDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_order_id | string |  yes  |  |
 | loyalty_discount | number |  no  |  |
 | employee_discount | number |  no  |  |
 | affiliate_bag_id | string |  yes  |  |
 | affiliate_meta | [AffiliateMeta](#AffiliateMeta) |  yes  |  |

---


 
 
 #### [BagGSTDetails](#BagGSTDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst_fee | number |  yes  |  |
 | hsn_code_id | string |  yes  |  |
 | igst_tax_percentage | number |  yes  |  |
 | sgst_tax_percentage | number |  yes  |  |
 | sgst_gst_fee | string |  yes  |  |
 | gst_tax_percentage | number |  yes  |  |
 | cgst_gst_fee | string |  yes  |  |
 | tax_collected_at_source | number |  yes  |  |
 | hsn_code | string |  yes  |  |
 | cgst_tax_percentage | number |  yes  |  |
 | igst_gst_fee | string |  yes  |  |
 | is_default_hsn_code | boolean |  no  |  |
 | gst_tag | string |  yes  |  |
 | brand_calculated_amount | number |  yes  |  |
 | gstin_code | string |  no  |  |
 | value_of_good | number |  yes  |  |

---


 
 
 #### [Brand](#Brand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | start_date | string |  no  |  |
 | logo | string |  no  |  |
 | invoice_prefix | string |  no  |  |
 | credit_note_allowed | boolean |  no  |  |
 | pickup_location | string |  no  |  |
 | brand_name | string |  yes  |  |
 | created_on | number |  no  |  |
 | company | string |  yes  |  |
 | brand_id | number |  yes  |  |
 | script_last_ran | string |  no  |  |
 | is_virtual_invoice | boolean |  no  |  |
 | modified_on | number |  no  |  |
 | credit_note_expiry_days | number |  no  |  |

---


 
 
 #### [Dates](#Dates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | delivery_date | any |  no  |  |
 | order_created | string |  no  |  |

---


 
 
 #### [Attributes](#Attributes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | essential | string |  no  |  |
 | marketer_name | string |  no  |  |
 | name | string |  no  |  |
 | primary_color | string |  no  |  |
 | primary_color_hex | string |  no  |  |
 | primary_material | string |  no  |  |
 | gender | [string] |  no  |  |
 | brand_name | string |  no  |  |
 | marketer_address | string |  no  |  |

---


 
 
 #### [Item](#Item)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | branch_url | string |  no  |  |
 | l2_category | [string] |  no  |  |
 | brand | string |  yes  |  |
 | last_updated_at | string |  no  |  |
 | attributes | [Attributes](#Attributes) |  yes  |  |
 | slug_key | string |  yes  |  |
 | l1_category_id | number |  no  |  |
 | can_cancel | boolean |  no  |  |
 | department_id | number |  no  |  |
 | webstore_product_url | string |  no  |  |
 | image | [string] |  yes  |  |
 | l2_category_id | number |  no  |  |
 | color | string |  no  |  |
 | name | string |  yes  |  |
 | size | string |  yes  |  |
 | meta | string |  no  |  |
 | code | string |  no  |  |
 | l1_category | [string] |  no  |  |
 | l3_category_name | string |  no  |  |
 | item_id | number |  yes  |  |
 | brand_id | number |  yes  |  |
 | gender | string |  no  |  |
 | can_return | boolean |  no  |  |
 | l3_category | number |  no  |  |

---


 
 
 #### [PDFLinks](#PDFLinks)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | label_type | string |  yes  |  |
 | label_a6 | string |  no  |  |
 | credit_note_url | string |  no  |  |
 | invoice_a4 | string |  no  |  |
 | invoice_a6 | string |  no  |  |
 | invoice_pos | string |  no  |  |
 | invoice_type | string |  yes  |  |
 | label | string |  no  |  |
 | label_a4 | string |  no  |  |
 | b2b | string |  no  |  |
 | invoice | string |  no  |  |
 | po_invoice | string |  no  |  |
 | label_pos | string |  no  |  |

---


 
 
 #### [ShipmentTimeStamp](#ShipmentTimeStamp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | t_min | string |  no  |  |
 | t_max | string |  no  |  |

---


 
 
 #### [LockData](#LockData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | lock_message | string |  no  |  |
 | mto | boolean |  no  |  |
 | locked | boolean |  no  |  |

---


 
 
 #### [DebugInfo](#DebugInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | stormbreaker_uuid | string |  no  |  |

---


 
 
 #### [Formatted](#Formatted)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | f_min | string |  no  |  |
 | f_max | string |  no  |  |

---


 
 
 #### [BuyerDetails](#BuyerDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string |  yes  |  |
 | pincode | number |  yes  |  |
 | name | string |  yes  |  |
 | state | string |  yes  |  |
 | ajio_site_id | string |  no  |  |
 | city | string |  yes  |  |
 | gstin | string |  yes  |  |

---


 
 
 #### [EInvoice](#EInvoice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error_message | string |  no  |  |
 | acknowledge_no | number |  no  |  |
 | irn | string |  no  |  |
 | signed_qr_code | string |  no  |  |
 | signed_invoice | string |  no  |  |
 | error_code | string |  no  |  |
 | acknowledge_date | string |  no  |  |

---


 
 
 #### [EinvoiceInfo](#EinvoiceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | invoice | [EInvoice](#EInvoice) |  no  |  |
 | credit_note | [EInvoice](#EInvoice) |  no  |  |

---


 
 
 #### [ShipmentMeta](#ShipmentMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | weight | number |  yes  |  |
 | marketplace_store_id | string |  no  |  |
 | return_awb_number | string |  no  |  |
 | dp_options | string |  no  |  |
 | dp_name | string |  no  |  |
 | order_type | string |  no  |  |
 | awb_number | string |  no  |  |
 | b2c_buyer_details | string |  no  |  |
 | forward_affiliate_order_id | string |  no  |  |
 | due_date | string |  no  |  |
 | po_number | string |  no  |  |
 | external | string |  no  |  |
 | timestamp | [ShipmentTimeStamp](#ShipmentTimeStamp) |  no  |  |
 | lock_data | [LockData](#LockData) |  no  |  |
 | auto_trigger_dp_assignment_acf | boolean |  yes  |  |
 | debug_info | [DebugInfo](#DebugInfo) |  no  |  |
 | dp_sort_key | string |  no  |  |
 | formatted | [Formatted](#Formatted) |  no  |  |
 | b2b_buyer_details | [BuyerDetails](#BuyerDetails) |  no  |  |
 | shipment_volumetric_weight | number |  no  |  |
 | return_details | string |  no  |  |
 | return_affiliate_order_id | string |  no  |  |
 | assign_dp_from_sb | boolean |  no  |  |
 | bag_weight | string |  no  |  |
 | return_affiliate_shipment_id | string |  no  |  |
 | return_store_node | number |  no  |  |
 | same_store_available | boolean |  yes  |  |
 | shipment_weight | number |  no  |  |
 | packaging_name | string |  no  |  |
 | forward_affiliate_shipment_id | string |  no  |  |
 | einvoice_info | [EinvoiceInfo](#EinvoiceInfo) |  no  |  |
 | fulfilment_priority_text | string |  no  |  |
 | ewaybill_info | string |  no  |  |
 | dp_id | string |  no  |  |
 | store_invoice_updated_date | string |  no  |  |
 | box_type | string |  no  |  |

---


 
 
 #### [AffiliateDetails](#AffiliateDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_order_id | string |  yes  |  |
 | ad_id | string |  no  |  |
 | company_affiliate_tag | string |  no  |  |
 | affiliate_store_id | string |  yes  |  |
 | pdf_links | [PDFLinks](#PDFLinks) |  no  |  |
 | shipment_meta | [ShipmentMeta](#ShipmentMeta) |  yes  |  |
 | affiliate_bag_id | string |  yes  |  |
 | affiliate_meta | [AffiliateMeta](#AffiliateMeta) |  yes  |  |
 | affiliate_id | string |  no  |  |
 | affiliate_shipment_id | string |  yes  |  |

---


 
 
 #### [B2BPODetails](#B2BPODetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | docker_number | string |  no  |  |
 | partial_can_ret | boolean |  no  |  |
 | po_line_amount | number |  no  |  |
 | item_base_price | number |  no  |  |
 | total_gst_percentage | number |  no  |  |
 | po_tax_amount | number |  no  |  |

---


 
 
 #### [BagMeta](#BagMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | b2b_po_details | [B2BPODetails](#B2BPODetails) |  no  |  |

---


 
 
 #### [Dimensions](#Dimensions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | unit | string |  no  |  |
 | height | number |  no  |  |
 | width | number |  no  |  |
 | length | number |  no  |  |
 | is_default | boolean |  no  |  |

---


 
 
 #### [Weight](#Weight)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_default | boolean |  no  |  |
 | shipping | number |  no  |  |
 | unit | string |  no  |  |

---


 
 
 #### [ReturnConfig](#ReturnConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | time | number |  no  |  |
 | returnable | boolean |  no  |  |
 | unit | string |  no  |  |

---


 
 
 #### [Article](#Article)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | raw_meta | any |  no  |  |
 | dimensions | [Dimensions](#Dimensions) |  no  |  |
 | weight | [Weight](#Weight) |  no  |  |
 | uid | string |  yes  |  |
 | a_set | string |  no  |  |
 | size | string |  yes  |  |
 | esp_modified | any |  no  |  |
 | seller_identifier | string |  yes  |  |
 | return_config | [ReturnConfig](#ReturnConfig) |  no  |  |
 | code | string |  no  |  |
 | is_set | boolean |  no  |  |
 | child_details | string |  no  |  |
 | identifiers | [Identifier](#Identifier) |  yes  |  |
 | _id | string |  yes  |  |

---


 
 
 #### [StoreAddress](#StoreAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | landmark | string |  no  |  |
 | longitude | number |  yes  |  |
 | city | string |  yes  |  |
 | pincode | number |  yes  |  |
 | version | string |  no  |  |
 | country_code | string |  yes  |  |
 | phone | string |  yes  |  |
 | address_type | string |  yes  |  |
 | contact_person | string |  yes  |  |
 | updated_at | string |  yes  |  |
 | country | string |  yes  |  |
 | email | string |  no  |  |
 | address1 | string |  yes  |  |
 | latitude | number |  yes  |  |
 | state | string |  yes  |  |
 | created_at | string |  yes  |  |
 | address_category | string |  yes  |  |
 | address2 | string |  no  |  |
 | area | string |  no  |  |

---


 
 
 #### [EInvoicePortalDetails](#EInvoicePortalDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | string |  no  |  |
 | password | string |  no  |  |
 | username | string |  no  |  |

---


 
 
 #### [Document](#Document)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | legal_name | string |  yes  |  |
 | verified | boolean |  yes  |  |
 | value | string |  yes  |  |
 | ds_type | string |  yes  |  |
 | url | string |  no  |  |

---


 
 
 #### [StoreDocuments](#StoreDocuments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst | [Document](#Document) |  no  |  |

---


 
 
 #### [StoreEwaybill](#StoreEwaybill)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |

---


 
 
 #### [StoreEinvoice](#StoreEinvoice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | username | string |  no  |  |
 | enabled | boolean |  yes  |  |
 | password | string |  no  |  |
 | user | string |  no  |  |

---


 
 
 #### [StoreGstCredentials](#StoreGstCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | e_waybill | [StoreEwaybill](#StoreEwaybill) |  no  |  |
 | e_invoice | [StoreEinvoice](#StoreEinvoice) |  no  |  |

---


 
 
 #### [StoreMeta](#StoreMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst_number | string |  no  |  |
 | einvoice_portal_details | [EInvoicePortalDetails](#EInvoicePortalDetails) |  no  |  |
 | ewaybill_portal_details | string |  no  |  |
 | additional_contact_details | string |  no  |  |
 | timing | [string] |  no  |  |
 | documents | [StoreDocuments](#StoreDocuments) |  no  |  |
 | notification_emails | [string] |  no  |  |
 | display_name | string |  yes  |  |
 | gst_credentials | [StoreGstCredentials](#StoreGstCredentials) |  yes  |  |
 | stage | string |  yes  |  |
 | product_return_config | string |  no  |  |

---


 
 
 #### [Store](#Store)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store_address_json | [StoreAddress](#StoreAddress) |  no  |  |
 | s_id | string |  yes  |  |
 | store_email | string |  yes  |  |
 | packaging_material_count | number |  no  |  |
 | vat_no | string |  no  |  |
 | longitude | number |  yes  |  |
 | city | string |  yes  |  |
 | alohomora_user_id | number |  no  |  |
 | login_username | string |  yes  |  |
 | pincode | string |  yes  |  |
 | is_archived | boolean |  no  |  |
 | brand_store_tags | [string] |  no  |  |
 | is_active | boolean |  no  |  |
 | mall_area | string |  no  |  |
 | phone | number |  yes  |  |
 | country | string |  yes  |  |
 | contact_person | string |  yes  |  |
 | updated_at | string |  no  |  |
 | store_active_from | string |  no  |  |
 | address1 | string |  yes  |  |
 | name | string |  yes  |  |
 | is_enabled_for_recon | boolean |  no  |  |
 | code | string |  no  |  |
 | meta | [StoreMeta](#StoreMeta) |  yes  |  |
 | latitude | number |  yes  |  |
 | parent_store_id | number |  no  |  |
 | order_integration_id | string |  no  |  |
 | company_id | number |  yes  |  |
 | fulfillment_channel | string |  yes  |  |
 | state | string |  yes  |  |
 | created_at | string |  yes  |  |
 | location_type | string |  yes  |  |
 | mall_name | string |  no  |  |
 | brand_id | any |  no  |  |
 | address2 | string |  no  |  |

---


 
 
 #### [BagReturnableCancelableStatus](#BagReturnableCancelableStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_returnable | boolean |  yes  |  |
 | can_be_cancelled | boolean |  yes  |  |
 | enable_tracking | boolean |  yes  |  |
 | is_active | boolean |  yes  |  |
 | is_customer_return_allowed | boolean |  yes  |  |

---


 
 
 #### [BagDetailsPlatformResponse](#BagDetailsPlatformResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | applied_promos | [string] |  no  |  |
 | b_type | string |  no  |  |
 | article_details | [ArticleDetails](#ArticleDetails) |  no  |  |
 | original_bag_list | [number] |  no  |  |
 | identifier | string |  no  |  |
 | line_number | number |  no  |  |
 | seller_identifier | string |  no  |  |
 | affiliate_bag_details | [AffiliateBagDetails](#AffiliateBagDetails) |  yes  |  |
 | bag_status | [[BagStatusHistory](#BagStatusHistory)] |  yes  |  |
 | gst_details | [BagGSTDetails](#BagGSTDetails) |  yes  |  |
 | operational_status | string |  no  |  |
 | brand | [Brand](#Brand) |  yes  |  |
 | bag_update_time | number |  no  |  |
 | dates | [Dates](#Dates) |  no  |  |
 | b_id | number |  yes  |  |
 | bag_status_history | [BagStatusHistory](#BagStatusHistory) |  no  |  |
 | qc_required | any |  no  |  |
 | no_of_bags_order | number |  no  |  |
 | shipment_id | string |  no  |  |
 | prices | [Prices](#Prices) |  yes  |  |
 | parent_promo_bags | string |  no  |  |
 | tags | [string] |  no  |  |
 | item | [Item](#Item) |  yes  |  |
 | affiliate_details | [AffiliateDetails](#AffiliateDetails) |  no  |  |
 | current_operational_status | [BagStatusHistory](#BagStatusHistory) |  yes  |  |
 | meta | [BagMeta](#BagMeta) |  no  |  |
 | restore_coupon | boolean |  no  |  |
 | article | [Article](#Article) |  yes  |  |
 | restore_promos | string |  no  |  |
 | order_integration_id | string |  no  |  |
 | ordering_store | [Store](#Store) |  no  |  |
 | status | [BagReturnableCancelableStatus](#BagReturnableCancelableStatus) |  yes  |  |
 | reasons | [string] |  no  |  |
 | entity_type | string |  no  |  |
 | quantity | number |  no  |  |
 | display_name | string |  no  |  |
 | journey_type | string |  yes  |  |
 | financial_breakup | [[FinancialBreakup](#FinancialBreakup)] |  yes  |  |
 | current_status | [BagStatusHistory](#BagStatusHistory) |  yes  |  |

---


 
 
 #### [ErrorResponse](#ErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  |  |
 | error | string |  yes  |  |

---


 
 
 #### [Page1](#Page1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page_type | string |  yes  |  |
 | current | number |  yes  |  |
 | size | number |  yes  |  |
 | item_total | number |  yes  |  |
 | has_next | boolean |  yes  |  |

---


 
 
 #### [GetBagsPlatformResponse](#GetBagsPlatformResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[BagDetailsPlatformResponse](#BagDetailsPlatformResponse)] |  yes  |  |
 | page | [Page1](#Page1) |  yes  |  |

---


 
 
 #### [InvalidateShipmentCachePayload](#InvalidateShipmentCachePayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_ids | [string] |  yes  |  |

---


 
 
 #### [InvalidateShipmentCacheNestedResponse](#InvalidateShipmentCacheNestedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_id | string |  no  |  |
 | status | number |  no  |  |
 | message | string |  no  |  |
 | error | string |  no  |  |

---


 
 
 #### [InvalidateShipmentCacheResponse](#InvalidateShipmentCacheResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | response | [[InvalidateShipmentCacheNestedResponse](#InvalidateShipmentCacheNestedResponse)] |  no  |  |

---


 
 
 #### [ErrorResponse1](#ErrorResponse1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error_trace | string |  no  |  |
 | status | number |  yes  |  |
 | message | string |  yes  |  |

---


 
 
 #### [StoreReassign](#StoreReassign)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string |  no  |  |
 | set_id | string |  no  |  |
 | affiliate_order_id | string |  no  |  |
 | fynd_order_id | string |  no  |  |
 | mongo_article_id | string |  no  |  |
 | bag_id | number |  no  |  |
 | affiliate_bag_id | string |  no  |  |
 | item_id | string |  no  |  |
 | store_id | number |  yes  |  |
 | reason_ids | [number] |  no  |  |

---


 
 
 #### [StoreReassignResponse](#StoreReassignResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [Entities](#Entities)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string |  no  |  |
 | affiliate_order_id | string |  no  |  |
 | affiliate_shipment_id | string |  no  |  |
 | affiliate_bag_id | string |  no  |  |
 | id | string |  no  |  |
 | reason_text | string |  yes  |  |

---


 
 
 #### [UpdateShipmentLockPayload](#UpdateShipmentLockPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entities | [[Entities](#Entities)] |  yes  |  |
 | action_type | string |  yes  |  |
 | action | string |  yes  |  |
 | entity_type | string |  yes  |  |

---


 
 
 #### [Bags](#Bags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_locked | boolean |  no  |  |
 | affiliate_bag_id | string |  no  |  |
 | affiliate_order_id | string |  no  |  |
 | bag_id | number |  no  |  |

---


 
 
 #### [OriginalFilter](#OriginalFilter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_shipment_id | string |  no  |  |
 | affiliate_id | string |  no  |  |

---


 
 
 #### [CheckResponse](#CheckResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string |  no  |  |
 | shipment_id | string |  no  |  |
 | is_shipment_locked | boolean |  no  |  |
 | bags | [[Bags](#Bags)] |  no  |  |
 | affiliate_shipment_id | string |  no  |  |
 | is_bag_locked | boolean |  no  |  |
 | original_filter | [OriginalFilter](#OriginalFilter) |  no  |  |
 | lock_status | boolean |  no  |  |
 | status | string |  no  |  |

---


 
 
 #### [UpdateShipmentLockResponse](#UpdateShipmentLockResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | check_response | [[CheckResponse](#CheckResponse)] |  no  |  |
 | message | string |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [AnnouncementResponse](#AnnouncementResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number |  no  |  |
 | description | string |  no  |  |
 | to_datetime | string |  no  |  |
 | platform_id | string |  no  |  |
 | id | number |  yes  |  |
 | title | string |  no  |  |
 | created_at | string |  no  |  |
 | logo_url | string |  no  |  |
 | from_datetime | string |  no  |  |
 | platform_name | string |  no  |  |

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
 | call_id | string |  yes  |  |
 | status | boolean |  yes  |  |

---


 
 
 #### [EntitiesDataUpdates](#EntitiesDataUpdates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [string] |  no  |  |
 | data | string |  no  |  |

---


 
 
 #### [ProductsDataUpdatesFilters](#ProductsDataUpdatesFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | line_number | number |  no  |  |
 | identifier | string |  no  |  |

---


 
 
 #### [ProductsDataUpdates](#ProductsDataUpdates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [[ProductsDataUpdatesFilters](#ProductsDataUpdatesFilters)] |  no  |  |
 | data | string |  no  |  |

---


 
 
 #### [DataUpdates](#DataUpdates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entities | [[EntitiesDataUpdates](#EntitiesDataUpdates)] |  no  |  |
 | products | [[ProductsDataUpdates](#ProductsDataUpdates)] |  no  |  |

---


 
 
 #### [Products](#Products)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | line_number | number |  no  |  |
 | identifier | string |  no  |  |
 | quantity | number |  no  |  |

---


 
 
 #### [EntityReasonData](#EntityReasonData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason_text | string |  no  |  |
 | reason_id | number |  no  |  |

---


 
 
 #### [EntitiesReasons](#EntitiesReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [string] |  no  |  |
 | data | [EntityReasonData](#EntityReasonData) |  no  |  |

---


 
 
 #### [ProductsReasonsFilters](#ProductsReasonsFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | line_number | number |  no  |  |
 | identifier | string |  no  |  |
 | quantity | number |  no  |  |

---


 
 
 #### [ProductsReasonsData](#ProductsReasonsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason_text | string |  no  |  |
 | reason_id | number |  no  |  |

---


 
 
 #### [ProductsReasons](#ProductsReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [[ProductsReasonsFilters](#ProductsReasonsFilters)] |  no  |  |
 | data | [ProductsReasonsData](#ProductsReasonsData) |  no  |  |

---


 
 
 #### [ReasonsData](#ReasonsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entities | [[EntitiesReasons](#EntitiesReasons)] |  no  |  |
 | products | [[ProductsReasons](#ProductsReasons)] |  no  |  |

---


 
 
 #### [ShipmentsRequest](#ShipmentsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data_updates | [DataUpdates](#DataUpdates) |  no  |  |
 | identifier | string |  yes  |  |
 | products | [[Products](#Products)] |  no  |  |
 | reasons | [ReasonsData](#ReasonsData) |  no  |  |

---


 
 
 #### [StatuesRequest](#StatuesRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | exclude_bags_next_state | string |  no  |  |
 | status | string |  no  |  |
 | shipments | [[ShipmentsRequest](#ShipmentsRequest)] |  no  |  |

---


 
 
 #### [UpdateShipmentStatusRequest](#UpdateShipmentStatusRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | force_transition | boolean |  no  |  |
 | statuses | [[StatuesRequest](#StatuesRequest)] |  no  |  |
 | unlock_before_transition | boolean |  no  |  |
 | task | boolean |  no  |  |
 | lock_after_transition | boolean |  no  |  |

---


 
 
 #### [ShipmentsResponse](#ShipmentsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |
 | identifier | string |  no  |  |
 | final_state | string |  no  |  |
 | message | string |  no  |  |
 | meta | string |  no  |  |
 | exception | string |  no  |  |
 | stack_trace | string |  no  |  |
 | status | number |  no  |  |

---


 
 
 #### [StatuesResponse](#StatuesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipments | [[ShipmentsResponse](#ShipmentsResponse)] |  no  |  |

---


 
 
 #### [UpdateShipmentStatusResponseBody](#UpdateShipmentStatusResponseBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | statuses | [[StatuesResponse](#StatuesResponse)] |  no  |  |

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
 | item_size | string |  yes  |  |
 | price_marked | number |  yes  |  |
 | seller_identifier | string |  yes  |  |
 | sku | string |  yes  |  |
 | identifier | string |  yes  |  |
 | avl_qty | number |  yes  |  |
 | modified_on | string |  yes  |  |
 | _id | string |  yes  |  |
 | discount | number |  yes  |  |
 | pdf_links | [MarketPlacePdf](#MarketPlacePdf) |  no  |  |
 | affiliate_store_id | string |  yes  |  |
 | transfer_price | number |  yes  |  |
 | unit_price | number |  yes  |  |
 | company_id | number |  yes  |  |
 | item_id | number |  yes  |  |
 | quantity | number |  yes  |  |
 | affiliate_meta | string |  yes  |  |
 | fynd_store_id | string |  yes  |  |
 | price_effective | number |  yes  |  |
 | amount_paid | number |  yes  |  |
 | store_id | number |  yes  |  |
 | hsn_code_id | string |  yes  |  |
 | delivery_charge | number |  yes  |  |

---


 
 
 #### [OrderUser](#OrderUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | first_name | string |  yes  |  |
 | pincode | string |  yes  |  |
 | city | string |  yes  |  |
 | address2 | string |  no  |  |
 | address1 | string |  no  |  |
 | country | string |  yes  |  |
 | mobile | number |  yes  |  |
 | last_name | string |  yes  |  |
 | phone | number |  yes  |  |
 | state | string |  yes  |  |
 | email | string |  yes  |  |

---


 
 
 #### [UserData](#UserData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipping_user | [OrderUser](#OrderUser) |  no  |  |
 | billing_user | [OrderUser](#OrderUser) |  no  |  |

---


 
 
 #### [OrderPriority](#OrderPriority)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fulfilment_priority | number |  no  |  |
 | affiliate_priority_code | string |  no  |  |
 | fulfilment_priority_text | string |  no  |  |

---


 
 
 #### [ArticleDetails1](#ArticleDetails1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  yes  |  |
 | attributes | string |  yes  |  |
 | weight | string |  yes  |  |
 | dimension | string |  yes  |  |
 | category | string |  yes  |  |
 | brand_id | number |  yes  |  |
 | quantity | number |  yes  |  |

---


 
 
 #### [LocationDetails](#LocationDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[ArticleDetails1](#ArticleDetails1)] |  yes  |  |
 | fulfillment_type | string |  yes  |  |
 | fulfillment_id | number |  yes  |  |

---


 
 
 #### [ShipmentDetails](#ShipmentDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dp_id | number |  no  |  |
 | shipments | number |  yes  |  |
 | affiliate_shipment_id | string |  yes  |  |
 | box_type | string |  no  |  |
 | meta | string |  no  |  |
 | articles | [[ArticleDetails1](#ArticleDetails1)] |  yes  |  |
 | fulfillment_id | number |  yes  |  |

---


 
 
 #### [ShipmentConfig](#ShipmentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | journey | string |  yes  |  |
 | to_pincode | string |  yes  |  |
 | identifier | string |  yes  |  |
 | payment_mode | string |  yes  |  |
 | source | string |  yes  |  |
 | action | string |  yes  |  |
 | location_details | [LocationDetails](#LocationDetails) |  no  |  |
 | shipment | [[ShipmentDetails](#ShipmentDetails)] |  yes  |  |

---


 
 
 #### [ShipmentData](#ShipmentData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_data | [ShipmentConfig](#ShipmentConfig) |  yes  |  |

---


 
 
 #### [OrderInfo](#OrderInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_order_id | string |  no  |  |
 | bags | [[AffiliateBag](#AffiliateBag)] |  yes  |  |
 | payment_mode | string |  yes  |  |
 | order_value | number |  yes  |  |
 | coupon | string |  no  |  |
 | user | [UserData](#UserData) |  yes  |  |
 | billing_address | [OrderUser](#OrderUser) |  yes  |  |
 | order_priority | [OrderPriority](#OrderPriority) |  no  |  |
 | discount | number |  yes  |  |
 | shipping_address | [OrderUser](#OrderUser) |  yes  |  |
 | cod_charges | number |  yes  |  |
 | items | string |  yes  |  |
 | delivery_charges | number |  yes  |  |
 | payment | string |  no  |  |
 | shipment | [ShipmentData](#ShipmentData) |  no  |  |

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


 
 
 #### [AffiliateInventoryPaymentConfig](#AffiliateInventoryPaymentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | source | string |  no  |  |
 | mode_of_payment | string |  no  |  |

---


 
 
 #### [AffiliateInventoryArticleAssignmentConfig](#AffiliateInventoryArticleAssignmentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | post_order_reassignment | boolean |  no  |  |

---


 
 
 #### [AffiliateInventoryStoreConfig](#AffiliateInventoryStoreConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store | string |  no  |  |

---


 
 
 #### [AffiliateInventoryConfig](#AffiliateInventoryConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logistics | [AffiliateInventoryLogisticsConfig](#AffiliateInventoryLogisticsConfig) |  no  |  |
 | order | [AffiliateInventoryOrderConfig](#AffiliateInventoryOrderConfig) |  no  |  |
 | payment | [AffiliateInventoryPaymentConfig](#AffiliateInventoryPaymentConfig) |  no  |  |
 | article_assignment | [AffiliateInventoryArticleAssignmentConfig](#AffiliateInventoryArticleAssignmentConfig) |  no  |  |
 | inventory | [AffiliateInventoryStoreConfig](#AffiliateInventoryStoreConfig) |  no  |  |

---


 
 
 #### [AffiliateAppConfigMeta](#AffiliateAppConfigMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  yes  |  |
 | name | string |  yes  |  |

---


 
 
 #### [AffiliateAppConfig](#AffiliateAppConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | secret | string |  yes  |  |
 | description | string |  no  |  |
 | name | string |  yes  |  |
 | token | string |  yes  |  |
 | meta | [[AffiliateAppConfigMeta](#AffiliateAppConfigMeta)] |  no  |  |
 | id | string |  yes  |  |
 | owner | string |  yes  |  |
 | created_at | string |  yes  |  |
 | updated_at | string |  yes  |  |

---


 
 
 #### [AffiliateConfig](#AffiliateConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | inventory | [AffiliateInventoryConfig](#AffiliateInventoryConfig) |  no  |  |
 | app | [AffiliateAppConfig](#AffiliateAppConfig) |  no  |  |

---


 
 
 #### [Affiliate](#Affiliate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | config | [AffiliateConfig](#AffiliateConfig) |  no  |  |
 | token | string |  yes  |  |

---


 
 
 #### [AffiliateStoreIdMapping](#AffiliateStoreIdMapping)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | marketplace_store_id | string |  yes  |  |
 | store_id | number |  yes  |  |

---


 
 
 #### [OrderConfig](#OrderConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article_lookup | string |  no  |  |
 | bag_end_state | string |  no  |  |
 | affiliate | [Affiliate](#Affiliate) |  yes  |  |
 | store_lookup | string |  no  |  |
 | affiliate_store_id_mapping | [[AffiliateStoreIdMapping](#AffiliateStoreIdMapping)] |  yes  |  |
 | create_user | boolean |  no  |  |

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


 
 
 #### [DispatchManifest](#DispatchManifest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | manifest_id | string |  yes  |  |

---


 
 
 #### [SuccessResponse](#SuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [ActionInfo](#ActionInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  yes  |  |
 | description | string |  yes  |  |
 | slug | string |  yes  |  |
 | display_text | string |  yes  |  |

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
 | l1_detail | string |  no  |  |
 | ticket_id | string |  no  |  |
 | createdat | string |  yes  |  |
 | message | string |  yes  |  |
 | ticket_url | string |  no  |  |
 | bag_id | number |  no  |  |
 | type | string |  yes  |  |
 | l2_detail | string |  no  |  |
 | user | string |  yes  |  |

---


 
 
 #### [ShipmentHistoryResponse](#ShipmentHistoryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | activity_history | [[HistoryDict](#HistoryDict)] |  no  |  |

---


 
 
 #### [ErrorDetail](#ErrorDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [SmsDataPayload](#SmsDataPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_id | number |  yes  |  |
 | payment_mode | string |  yes  |  |
 | customer_name | string |  yes  |  |
 | message | string |  yes  |  |
 | brand_name | string |  yes  |  |
 | country_code | string |  yes  |  |
 | amount_paid | number |  yes  |  |
 | order_id | string |  yes  |  |
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
 | shipment_id | string |  no  |  |
 | remarks | string |  no  |  |
 | meta | [Meta](#Meta) |  yes  |  |
 | id | number |  yes  |  |
 | bag_list | [number] |  no  |  |
 | status | string |  no  |  |

---


 
 
 #### [OrderDetails](#OrderDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_order_id | string |  no  |  |
 | created_at | string |  no  |  |

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


 
 
 #### [ManualAssignDPToShipment](#ManualAssignDPToShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dp_id | number |  yes  |  |
 | shipment_ids | [string] |  no  |  |
 | qc_required | string |  yes  |  |
 | order_type | string |  yes  |  |

---


 
 
 #### [ManualAssignDPToShipmentResponse](#ManualAssignDPToShipmentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | errors | [string] |  no  |  |
 | success | string |  yes  |  |

---


 
 
 #### [BillingInfo](#BillingInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | house_no | string |  yes  |  |
 | state | string |  yes  |  |
 | address2 | string |  no  |  |
 | alternate_mobile_number | string |  no  |  |
 | country_code | string |  yes  |  |
 | title | string |  no  |  |
 | alternate_email | string |  no  |  |
 | pincode | string |  yes  |  |
 | customer_code | string |  no  |  |
 | primary_email | string |  yes  |  |
 | floor_no | string |  yes  |  |
 | first_name | string |  yes  |  |
 | city | string |  yes  |  |
 | gender | string |  no  |  |
 | address1 | string |  yes  |  |
 | country | string |  yes  |  |
 | external_customer_code | string |  no  |  |
 | last_name | string |  no  |  |
 | state_code | string |  yes  |  |
 | middle_name | string |  no  |  |
 | primary_mobile_number | string |  yes  |  |

---


 
 
 #### [TaxInfo](#TaxInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gstin | string |  no  |  |
 | b2b_gstin_number | string |  no  |  |

---


 
 
 #### [ShippingInfo](#ShippingInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address_type | string |  no  |  |
 | slot | [string] |  no  |  |
 | house_no | string |  no  |  |
 | state | string |  yes  |  |
 | address2 | string |  no  |  |
 | alternate_mobile_number | string |  no  |  |
 | country_code | string |  yes  |  |
 | shipping_type | string |  no  |  |
 | title | string |  no  |  |
 | alternate_email | string |  no  |  |
 | pincode | string |  yes  |  |
 | customer_code | string |  no  |  |
 | primary_email | string |  yes  |  |
 | floor_no | string |  no  |  |
 | first_name | string |  yes  |  |
 | landmark | string |  no  |  |
 | city | string |  yes  |  |
 | gender | string |  no  |  |
 | address1 | string |  yes  |  |
 | country | string |  yes  |  |
 | external_customer_code | string |  no  |  |
 | geo_location | string |  no  |  |
 | last_name | string |  no  |  |
 | state_code | string |  yes  |  |
 | middle_name | string |  no  |  |
 | primary_mobile_number | string |  yes  |  |

---


 
 
 #### [Tax](#Tax)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  yes  |  |
 | tax_exempt | boolean |  yes  |  |
 | name | string |  yes  |  |
 | breakup | [string] |  yes  |  |

---


 
 
 #### [Charge](#Charge)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |
 | name | string |  yes  |  |
 | amount | string |  yes  |  |
 | type | string |  yes  |  |
 | tax | [Tax](#Tax) |  yes  |  |

---


 
 
 #### [LineItem](#LineItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | custom_messasge | string |  no  |  |
 | external_line_id | string |  no  |  |
 | charges | [[Charge](#Charge)] |  yes  |  |
 | meta | string |  no  |  |
 | seller_identifier | string |  yes  |  |
 | quantity | number |  no  |  |

---


 
 
 #### [ProcessingDates](#ProcessingDates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pack_by_date | string |  no  |  |
 | confirm_by_date | string |  no  |  |
 | customer_pickup_slot | string |  no  |  |
 | dispatch_after_date | string |  no  |  |
 | dispatch_by_date | string |  no  |  |
 | dp_pickup_slot | string |  no  |  |

---


 
 
 #### [Shipment](#Shipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | location_id | number |  yes  |  |
 | line_items | [[LineItem](#LineItem)] |  yes  |  |
 | processing_dates | [ProcessingDates](#ProcessingDates) |  no  |  |
 | meta | string |  no  |  |
 | priority | number |  no  |  |
 | external_shipment_id | number |  no  |  |

---


 
 
 #### [PaymentMethod](#PaymentMethod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | transaction_data | string |  no  |  |
 | name | string |  yes  |  |
 | meta | string |  no  |  |
 | amount | number |  yes  |  |
 | refund_by | string |  yes  |  |
 | collect_by | string |  yes  |  |
 | mode | string |  yes  |  |

---


 
 
 #### [PaymentInfo](#PaymentInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | primary_mode | string |  yes  |  |
 | payment_methods | [[PaymentMethod](#PaymentMethod)] |  no  |  |

---


 
 
 #### [CreateOrderAPI](#CreateOrderAPI)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency_info | string |  yes  |  |
 | billing_info | [BillingInfo](#BillingInfo) |  yes  |  |
 | tax_info | [TaxInfo](#TaxInfo) |  no  |  |
 | shipping_info | [ShippingInfo](#ShippingInfo) |  yes  |  |
 | charges | [[Charge](#Charge)] |  yes  |  |
 | external_creation_date | string |  no  |  |
 | meta | string |  no  |  |
 | shipments | [[Shipment](#Shipment)] |  yes  |  |
 | application_id | string |  no  |  |
 | external_order_id | string |  no  |  |
 | payment_info | [PaymentInfo](#PaymentInfo) |  yes  |  |

---


 
 
 #### [CreateOrderErrorReponse](#CreateOrderErrorReponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |
 | request_id | string |  no  |  |
 | message | string |  yes  |  |
 | meta | string |  no  |  |
 | exception | string |  no  |  |
 | stack_trace | string |  no  |  |
 | status | number |  yes  |  |
 | info | any |  no  |  |

---


 
 
 #### [DpConfiguration](#DpConfiguration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipping_by | string |  no  |  |

---


 
 
 #### [PaymentMethods](#PaymentMethods)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | refund_by | string |  no  |  |
 | collect_by | string |  no  |  |
 | mode | string |  no  |  |

---


 
 
 #### [CreateChannelPaymentInfo](#CreateChannelPaymentInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | source | string |  no  |  |
 | mode_of_payment | string |  no  |  |
 | payment_methods | [[PaymentMethods](#PaymentMethods)] |  no  |  |

---


 
 
 #### [CreateChannelConfig](#CreateChannelConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_assignment | string |  no  |  |
 | dp_configuration | [DpConfiguration](#DpConfiguration) |  no  |  |
 | logo_url | string |  no  |  |
 | lock_states | [string] |  no  |  |
 | location_reassignment | boolean |  no  |  |
 | payment_info | [CreateChannelPaymentInfo](#CreateChannelPaymentInfo) |  no  |  |

---


 
 
 #### [CreateChannelConfigData](#CreateChannelConfigData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | config_data | [CreateChannelConfig](#CreateChannelConfig) |  no  |  |

---


 
 
 #### [CreateChannelConfigResponse](#CreateChannelConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_upserted | boolean |  no  |  |
 | is_inserted | boolean |  no  |  |
 | acknowledged | boolean |  no  |  |

---


 
 
 #### [CreateChannelConifgErrorResponse](#CreateChannelConifgErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string |  no  |  |

---


 
 
 #### [UploadConsent](#UploadConsent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | manifest_id | string |  yes  |  |
 | consent_url | string |  yes  |  |

---


 
 
 #### [PlatformOrderUpdate](#PlatformOrderUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_id | string |  yes  |  |

---


 
 
 #### [ResponseDetail](#ResponseDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | [string] |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [FyndOrderIdList](#FyndOrderIdList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_order_id | [string] |  no  |  |

---


 
 
 #### [OrderStatus](#OrderStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end_date | string |  yes  |  |
 | mobile | number |  yes  |  |
 | start_date | string |  yes  |  |
 | order_details | [[FyndOrderIdList](#FyndOrderIdList)] |  no  |  |

---




