




##### [Back to Platform docs](./README.md)

## Order Methods
Handles all platform order and shipment api(s)

* [createShipmentReport](#createshipmentreport)
* [getApplicationShipments](#getapplicationshipments)
* [getLaneConfig](#getlaneconfig)
* [getMetricCount](#getmetriccount)
* [getOrderShipmentDetails](#getordershipmentdetails)
* [getOrders](#getorders)
* [getReportsShipmentListing](#getreportsshipmentlisting)
* [getShipmentDetails](#getshipmentdetails)
* [getShipmentHistory](#getshipmenthistory)
* [getShipmentList](#getshipmentlist)
* [getShipmentToManifest](#getshipmenttomanifest)
* [getfilters](#getfilters)
* [orderUpdate](#orderupdate)
* [statusInternalUpdate](#statusinternalupdate)
* [upsertJioCode](#upsertjiocode)



## Methods with example and description




### createShipmentReport




```javascript
// Promise
const promise = platformClient.order.createShipmentReport({  fromDate : value,
 toDate : value });

// Async/Await
const data = await platformClient.order.createShipmentReport({  fromDate : value,
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


### getApplicationShipments




```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").order.getApplicationShipments({  lane : value,
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
const data = await platformClient.application("<APPLICATION_ID>").order.getApplicationShipments({  lane : value,
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


### getLaneConfig




```javascript
// Promise
const promise = platformClient.order.getLaneConfig({  superLane : value,
 groupEntity : value,
 fromDate : value,
 toDate : value,
 dpIds : value,
 stores : value,
 salesChannel : value,
 paymentMode : value,
 bagStatus : value });

// Async/Await
const data = await platformClient.order.getLaneConfig({  superLane : value,
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


### getMetricCount




```javascript
// Promise
const promise = platformClient.order.getMetricCount({  fromDate : value,
 toDate : value });

// Async/Await
const data = await platformClient.order.getMetricCount({  fromDate : value,
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


### getOrderShipmentDetails




```javascript
// Promise
const promise = platformClient.order.getOrderShipmentDetails({  orderId : value });

// Async/Await
const data = await platformClient.order.getOrderShipmentDetails({  orderId : value });
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


### getOrders




```javascript
// Promise
const promise = platformClient.order.getOrders({  lane : value,
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
const data = await platformClient.order.getOrders({  lane : value,
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


### getReportsShipmentListing




```javascript
// Promise
const promise = platformClient.order.getReportsShipmentListing({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.order.getReportsShipmentListing({  pageNo : value,
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


### getShipmentDetails




```javascript
// Promise
const promise = platformClient.order.getShipmentDetails({  shipmentId : value,
 orderingCompanyId : value,
 requestByExt : value });

// Async/Await
const data = await platformClient.order.getShipmentDetails({  shipmentId : value,
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


### getShipmentHistory




```javascript
// Promise
const promise = platformClient.order.getShipmentHistory({  bagId : value });

// Async/Await
const data = await platformClient.order.getShipmentHistory({  bagId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| bagId | number | yes |  |  





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


### getShipmentList




```javascript
// Promise
const promise = platformClient.order.getShipmentList({  lane : value,
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
const data = await platformClient.order.getShipmentList({  lane : value,
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
const promise = platformClient.order.getShipmentToManifest({  groupEntity : value,
 salesChannel : value,
 dpIds : value });

// Async/Await
const data = await platformClient.order.getShipmentToManifest({  groupEntity : value,
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


### getfilters




```javascript
// Promise
const promise = platformClient.order.getfilters({  view : value });

// Async/Await
const data = await platformClient.order.getfilters({  view : value });
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


### orderUpdate




```javascript
// Promise
const promise = platformClient.order.orderUpdate({  body : value });

// Async/Await
const data = await platformClient.order.orderUpdate({  body : value });
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


### statusInternalUpdate




```javascript
// Promise
const promise = platformClient.order.statusInternalUpdate({  body : value });

// Async/Await
const data = await platformClient.order.statusInternalUpdate({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PlatformShipmentStatusInternal](#PlatformShipmentStatusInternal) | yes | Request body |




*Returned Response:*




[ResponseDetail](#ResponseDetail)

We are processing the report!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### upsertJioCode




```javascript
// Promise
const promise = platformClient.order.upsertJioCode({  body : value });

// Async/Await
const data = await platformClient.order.upsertJioCode({  body : value });
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



### Schemas


#### [BagConfigs](#BagConfigs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | allow_force_return | boolean |  no  |  |
 | can_be_cancelled | boolean |  no  |  |
 | enable_tracking | boolean |  no  |  |
 | is_active | boolean |  no  |  |
 | is_customer_return_allowed | boolean |  no  |  |
 | is_returnable | boolean |  no  |  |
 

---

#### [BagGST](#BagGST)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_calculated_amount | number? |  yes  |  |
 | gst_fee | number? |  yes  |  |
 | gst_tag | string? |  yes  |  |
 | gst_tax_percentage | number? |  yes  |  |
 | gstin_code | string? |  yes  |  |
 | hsn_code | string? |  yes  |  |
 | is_default_hsn_code | boolean? |  yes  |  |
 | value_of_good | number? |  yes  |  |
 

---

#### [BagStatusHistory](#BagStatusHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_display_name | boolean? |  yes  |  |
 | display_name | boolean? |  yes  |  |
 | forward | boolean? |  yes  |  |
 | state_type | boolean? |  yes  |  |
 | status | string |  no  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [BagUnit](#BagUnit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_id | number |  no  |  |
 | gst | [GST](#GST)? |  yes  |  |
 | item | [Item](#Item)? |  yes  |  |
 | item_quantity | number |  no  |  |
 | ordering_channel | string |  no  |  |
 | prices | [Prices](#Prices)? |  yes  |  |
 | shipment_id | string |  no  |  |
 | status | string |  no  |  |
 | total_shipment_bags | number |  no  |  |
 

---

#### [DPDetails](#DPDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | awb_no | string? |  yes  |  |
 | country | string? |  yes  |  |
 | eway_bill_id | string? |  yes  |  |
 | gst_tag | string? |  yes  |  |
 | id | string? |  yes  |  |
 | name | string? |  yes  |  |
 | pincode | string? |  yes  |  |
 | track_url | string? |  yes  |  |
 

---

#### [Error](#Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [ErrorDetail](#ErrorDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [ErrorSchemaDataSet](#ErrorSchemaDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [FilterInfoOption](#FilterInfoOption)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 | text | string |  no  |  |
 | value | string? |  yes  |  |
 

---

#### [FiltersInfo](#FiltersInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | options | [[FilterInfoOption](#FilterInfoOption)]? |  yes  |  |
 | text | string |  no  |  |
 | type | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [FiltersResponse](#FiltersResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channels | [[FiltersInfo](#FiltersInfo)]? |  yes  |  |
 | delivery_partners | [[FiltersInfo](#FiltersInfo)]? |  yes  |  |
 

---

#### [FinancialBreakup](#FinancialBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | added_to_fynd_cash | boolean |  no  |  |
 | amount_paid | number |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | cashback | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | cod_charges | number |  no  |  |
 | coupon_effective_discount | number |  no  |  |
 | coupon_value | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | discount | number |  no  |  |
 | fynd_credits | number |  no  |  |
 | gst_fee | string |  no  |  |
 | gst_tag | string |  no  |  |
 | gst_tax_percentage | number |  no  |  |
 | hsn_code | string |  no  |  |
 | identifiers | string |  no  |  |
 | item_name | string |  no  |  |
 | pm_price_split | string |  no  |  |
 | price_effective | number |  no  |  |
 | price_marked | number |  no  |  |
 | promotion_effective_discount | number |  no  |  |
 | refund_credit | number |  no  |  |
 | size | string |  no  |  |
 | total_units | number |  no  |  |
 | transfer_price | number |  no  |  |
 | value_of_good | number |  no  |  |
 

---

#### [FulfillingStore](#FulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string |  no  |  |
 | city | string |  no  |  |
 | code | string |  no  |  |
 | contact_person | string |  no  |  |
 | country | string |  no  |  |
 | fulfillment_channel | string |  no  |  |
 | id | string |  no  |  |
 | meta | string |  no  |  |
 | phone | string |  no  |  |
 | pincode | string |  no  |  |
 | state | string |  no  |  |
 | store_name | string |  no  |  |
 

---

#### [GST](#GST)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_calculated_amount | number |  no  |  |
 | gst_fee | number |  no  |  |
 | gstin_code | string |  no  |  |
 | tax_collected_at_source | number |  no  |  |
 | value_of_good | number |  no  |  |
 

---

#### [HistoryDict](#HistoryDict)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | createdat | string |  no  |  |
 | l1_detail | string? |  yes  |  |
 | l2_detail | string? |  yes  |  |
 | l3_detail | string? |  yes  |  |
 | message | string |  no  |  |
 | ticket_id | string? |  yes  |  |
 | ticket_url | string? |  yes  |  |
 | type | string |  no  |  |
 | user | string |  no  |  |
 

---

#### [Item](#Item)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | can_cancel | boolean |  no  |  |
 | can_return | boolean |  no  |  |
 | code | string |  no  |  |
 | color | string? |  yes  |  |
 | department_id | number |  no  |  |
 | id | number |  no  |  |
 | image | [string]? |  yes  |  |
 | l1_category | [string]? |  yes  |  |
 | l3_category | number |  no  |  |
 | l3_category_name | string |  no  |  |
 | name | string |  no  |  |
 | size | string |  no  |  |
 

---

#### [JioCodeUpsertDataSet](#JioCodeUpsertDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article_id | string? |  yes  |  |
 | company_id | string? |  yes  |  |
 | item_id | string? |  yes  |  |
 | jio_code | string? |  yes  |  |
 

---

#### [JioCodeUpsertPayload](#JioCodeUpsertPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[JioCodeUpsertDataSet](#JioCodeUpsertDataSet)]? |  yes  |  |
 

---

#### [JioCodeUpsertResponse](#JioCodeUpsertResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [string]? |  yes  |  |
 | error | [[NestedErrorSchemaDataSet](#NestedErrorSchemaDataSet)]? |  yes  |  |
 | identifier | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 | trace_id | string? |  yes  |  |
 

---

#### [LaneConfigResponse](#LaneConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | super_lanes | [[SuperLane](#SuperLane)]? |  yes  |  |
 

---

#### [ManifestShipmentResponse](#ManifestShipmentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipments | [[Shipment1](#Shipment1)]? |  yes  |  |
 | success | boolean |  no  |  |
 

---

#### [MetricCountResponse](#MetricCountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[MetricsCount](#MetricsCount)]? |  yes  |  |
 

---

#### [MetricsCount](#MetricsCount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | options | [[Options](#Options)]? |  yes  |  |
 | text | string |  no  |  |
 | value | number |  no  |  |
 

---

#### [NestedErrorSchemaDataSet](#NestedErrorSchemaDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | type | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [OmsReports](#OmsReports)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | report_created_at | string? |  yes  |  |
 | report_id | string? |  yes  |  |
 | report_name | string? |  yes  |  |
 | report_requested_at | string? |  yes  |  |
 | report_type | string? |  yes  |  |
 | request_details | string? |  yes  |  |
 | s3_key | string? |  yes  |  |
 | status | string? |  yes  |  |
 

---

#### [Options](#Options)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text | string? |  yes  |  |
 | value | number? |  yes  |  |
 

---

#### [OrderBagArticle](#OrderBagArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifiers | string? |  yes  |  |
 | return_config | string? |  yes  |  |
 | uid | string? |  yes  |  |
 

---

#### [OrderBagItem](#OrderBagItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand | string |  no  |  |
 | image | [string]? |  yes  |  |
 | l1_category | [string]? |  yes  |  |
 | l3_category | number |  no  |  |
 | name | string |  no  |  |
 | size | string |  no  |  |
 | slug_key | string |  no  |  |
 

---

#### [OrderBags](#OrderBags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article | [OrderBagArticle](#OrderBagArticle)? |  yes  |  |
 | bag_configs | [BagConfigs](#BagConfigs)? |  yes  |  |
 | bag_id | number |  no  |  |
 | brand | [OrderBrandName](#OrderBrandName)? |  yes  |  |
 | current_status | string |  no  |  |
 | display_name | string |  no  |  |
 | entity_type | string |  no  |  |
 | financial_breakup | [[FinancialBreakup](#FinancialBreakup)]? |  yes  |  |
 | gst_details | [BagGST](#BagGST)? |  yes  |  |
 | item | [OrderBagItem](#OrderBagItem)? |  yes  |  |
 | quantity | number |  no  |  |
 

---

#### [OrderBrandName](#OrderBrandName)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_name | string |  no  |  |
 | company | string |  no  |  |
 | created_on | number |  no  |  |
 | id | number |  no  |  |
 | logo | string |  no  |  |
 | modified_on | number? |  yes  |  |
 

---

#### [OrderDataSet](#OrderDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_created_time | string |  no  |  |
 | order_id | string |  no  |  |
 | shipments | [[ShipmentDataSet](#ShipmentDataSet)]? |  yes  |  |
 | user_info | [UserDataSet](#UserDataSet)? |  yes  |  |
 

---

#### [OrderDetailsData](#OrderDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string? |  yes  |  |
 | cod_charges | string? |  yes  |  |
 | fynd_order_id | string |  no  |  |
 | order_date | string? |  yes  |  |
 | order_value | string? |  yes  |  |
 | ordering_channel | string? |  yes  |  |
 | ordering_channel_logo | string? |  yes  |  |
 | source | string? |  yes  |  |
 | tax_details | string? |  yes  |  |
 

---

#### [OrderDict](#OrderDict)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_order_id | string |  no  |  |
 | is_validated | boolean? |  yes  |  |
 | order_date | string |  no  |  |
 | shipment_count | number |  no  |  |
 

---

#### [OrderErrorSchemaDataSet](#OrderErrorSchemaDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [OrderListingResponse](#OrderListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | orders | [[OrderDataSet](#OrderDataSet)]? |  yes  |  |
 | success | boolean |  no  |  |
 

---

#### [PaymentModeInfo](#PaymentModeInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string |  no  |  |
 | type | string |  no  |  |
 

---

#### [PlatformOrderUpdate](#PlatformOrderUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_id | string |  no  |  |
 

---

#### [PlatformShipmentStatusInternal](#PlatformShipmentStatusInternal)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | force_transition | boolean? |  yes  |  |
 | statuses | [Statuses](#Statuses)? |  yes  |  |
 | task | boolean? |  yes  |  |
 

---

#### [Prices](#Prices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_paid | number |  no  |  |
 | amount_paid_roundoff | number |  no  |  |
 | cashback | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | cod_charges | number |  no  |  |
 | coupon_value | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | discount | number |  no  |  |
 | fynd_credits | number |  no  |  |
 | price_effective | number |  no  |  |
 | price_marked | number |  no  |  |
 | promotion_effective_discount | number |  no  |  |
 | refund_amount | number |  no  |  |
 | refund_credit | number |  no  |  |
 | tax_collected_at_source | number |  no  |  |
 | value_of_good | number |  no  |  |
 

---

#### [ProductDetail](#ProductDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier | string? |  yes  |  |
 | quantity | number? |  yes  |  |
 

---

#### [ResponseDetail](#ResponseDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | [string]? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [Shipment](#Shipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_status_history | [[BagStatusHistory](#BagStatusHistory)]? |  yes  |  |
 | bags | [OrderBags](#OrderBags)? |  yes  |  |
 | billing_details | [UserDetailsData](#UserDetailsData)? |  yes  |  |
 | delivery_details | [UserDetailsData](#UserDetailsData)? |  yes  |  |
 | delivery_slot | string |  no  |  |
 | dp_details | [DPDetails](#DPDetails)? |  yes  |  |
 | enable_dp_tracking | string |  no  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore)? |  yes  |  |
 | gst_details | [GST](#GST)? |  yes  |  |
 | journey_type | string |  no  |  |
 | order | [OrderDetailsData](#OrderDetailsData)? |  yes  |  |
 | packaging_type | string |  no  |  |
 | payment_mode | string |  no  |  |
 | payments | [ShipmentPayments](#ShipmentPayments)? |  yes  |  |
 | picked_date | string |  no  |  |
 | platform_logo | string |  no  |  |
 | prices | [Prices](#Prices)? |  yes  |  |
 | priority_text | string? |  yes  |  |
 | shipment_id | string |  no  |  |
 | shipment_quantity | number |  no  |  |
 | status | [ShipmentStatusData](#ShipmentStatusData)? |  yes  |  |
 | total_items | number? |  yes  |  |
 | tracking_list | [[TrackingList](#TrackingList)]? |  yes  |  |
 | user_agent | string |  no  |  |
 | vertical | string? |  yes  |  |
 

---

#### [Shipment1](#Shipment1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_id | string |  no  |  |
 | prices | [ShipmentPricesDataSet](#ShipmentPricesDataSet)? |  yes  |  |
 | rtd_done | string |  no  |  |
 | shipment_id | string |  no  |  |
 | shipment_status | string |  no  |  |
 | total_items | string |  no  |  |
 

---

#### [ShipmentBody](#ShipmentBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bags | [number]? |  yes  |  |
 | data_update | string? |  yes  |  |
 | products | [[ProductDetail](#ProductDetail)]? |  yes  |  |
 | reason | [number]? |  yes  |  |
 | store_invoice_id | string? |  yes  |  |
 

---

#### [ShipmentDataSet](#ShipmentDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_calculated_amount | number? |  yes  |  |
 | cashback | number? |  yes  |  |
 | cashback_applied | number? |  yes  |  |
 | coupon_effective_discount | number? |  yes  |  |
 | delivery_charge | number? |  yes  |  |
 | fynd_credits | number? |  yes  |  |
 | price_effective | number? |  yes  |  |
 | prices | [ShipmentPricesDataInfo](#ShipmentPricesDataInfo)? |  yes  |  |
 | refund_credit | number? |  yes  |  |
 | shipment_id | string |  no  |  |
 | shipment_images | [string]? |  yes  |  |
 | shipment_status | string |  no  |  |
 | tax_collected_at_source | number? |  yes  |  |
 | total_bags | number |  no  |  |
 | total_items | number |  no  |  |
 | value_of_good | number? |  yes  |  |
 

---

#### [ShipmentDetail](#ShipmentDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_id | [ShipmentBody](#ShipmentBody)? |  yes  |  |
 

---

#### [ShipmentDetailsResponse](#ShipmentDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_validated | boolean? |  yes  |  |
 | order | [OrderDict](#OrderDict)? |  yes  |  |
 | shipments | [[Shipment](#Shipment)]? |  yes  |  |
 | success | boolean |  no  |  |
 

---

#### [ShipmentHistoryResponse](#ShipmentHistoryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | activity_history | [[HistoryDict](#HistoryDict)]? |  yes  |  |
 

---

#### [ShipmentInfoResponse](#ShipmentInfoResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_shipment_id | string |  no  |  |
 | bag_status_history | [[BagStatusHistory](#BagStatusHistory)]? |  yes  |  |
 | bags | [OrderBags](#OrderBags)? |  yes  |  |
 | bank_data | string? |  yes  |  |
 | beneficiary_details | boolean? |  yes  |  |
 | billing_details | [UserDetailsData](#UserDetailsData)? |  yes  |  |
 | can_break | string |  no  |  |
 | can_cancel | boolean? |  yes  |  |
 | can_return | boolean? |  yes  |  |
 | child_nodes | [string]? |  yes  |  |
 | company | string |  no  |  |
 | coupon | string? |  yes  |  |
 | credit_note_id | string |  no  |  |
 | current_shipment_status | string |  no  |  |
 | delivery_details | [UserDetailsData](#UserDetailsData)? |  yes  |  |
 | delivery_slot | string |  no  |  |
 | delivery_status | [string] |  no  |  |
 | dp_details | [DPDetails](#DPDetails)? |  yes  |  |
 | due_date | string? |  yes  |  |
 | email_id | string |  no  |  |
 | enable_dp_tracking | string |  no  |  |
 | enable_tracking | boolean? |  yes  |  |
 | escalation | string? |  yes  |  |
 | forward_order_status | [string]? |  yes  |  |
 | forward_shipment_status | [string]? |  yes  |  |
 | forward_tracking_list | [string]? |  yes  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore)? |  yes  |  |
 | fyndstore_emp | string |  no  |  |
 | go_green | boolean? |  yes  |  |
 | gst_details | [GST](#GST)? |  yes  |  |
 | invoice | string |  no  |  |
 | is_fynd_coupon | boolean |  no  |  |
 | is_fynd_store | string? |  yes  |  |
 | is_invoiced | boolean |  no  |  |
 | is_not_fynd_source | boolean |  no  |  |
 | is_packaging_order | boolean |  no  |  |
 | is_pdsr | string? |  yes  |  |
 | items | [string] |  no  |  |
 | journey_type | string |  no  |  |
 | kirana_store_id | string? |  yes  |  |
 | lock_status | string |  no  |  |
 | mid | string? |  yes  |  |
 | order | [OrderDetailsData](#OrderDetailsData)? |  yes  |  |
 | order_created_time | string? |  yes  |  |
 | order_status | string |  no  |  |
 | order_type | string |  no  |  |
 | ordering_store | string |  no  |  |
 | packaging_type | string |  no  |  |
 | pay_button | string? |  yes  |  |
 | payment_mode | string |  no  |  |
 | payments | [ShipmentPayments](#ShipmentPayments)? |  yes  |  |
 | picked_date | string |  no  |  |
 | platform_logo | boolean |  no  |  |
 | prices | [Prices](#Prices)? |  yes  |  |
 | priority_text | string? |  yes  |  |
 | refund_details | string? |  yes  |  |
 | refund_text | string? |  yes  |  |
 | replacement_details | string? |  yes  |  |
 | secured_delivery_flag | string? |  yes  |  |
 | shipment_id | string |  no  |  |
 | shipment_quantity | number |  no  |  |
 | status | [ShipmentStatusData](#ShipmentStatusData)? |  yes  |  |
 | status_progress | number |  no  |  |
 | total_items | number? |  yes  |  |
 | tracking_list | [[TrackingList](#TrackingList)]? |  yes  |  |
 | tracking_url | string |  no  |  |
 | user_agent | string |  no  |  |
 | user_id | string |  no  |  |
 | user_info | string? |  yes  |  |
 | vertical | string? |  yes  |  |
 

---

#### [ShipmentInternalPlatformViewResponse](#ShipmentInternalPlatformViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | applied_filters | string? |  yes  |  |
 | filters | [[FiltersInfo](#FiltersInfo)]? |  yes  |  |
 | items | [[ShipmentItem](#ShipmentItem)]? |  yes  |  |
 | page | string? |  yes  |  |
 

---

#### [ShipmentItem](#ShipmentItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string? |  yes  |  |
 | bags | [[BagUnit](#BagUnit)]? |  yes  |  |
 | channel | string? |  yes  |  |
 | created_at | string |  no  |  |
 | fulfilling_centre | string |  no  |  |
 | fulfilling_store | [ShipmentItemFulFillingStore](#ShipmentItemFulFillingStore)? |  yes  |  |
 | id | string |  no  |  |
 | payment_mode_info | [PaymentModeInfo](#PaymentModeInfo)? |  yes  |  |
 | prices | [Prices](#Prices)? |  yes  |  |
 | shipment_created_at | number |  no  |  |
 | shipment_status | [ShipmentStatus](#ShipmentStatus)? |  yes  |  |
 | sla | string? |  yes  |  |
 | total_bags_count | number |  no  |  |
 | total_shipments_in_order | number |  no  |  |
 | user | [UserDataInfo](#UserDataInfo)? |  yes  |  |
 

---

#### [ShipmentItemFulFillingStore](#ShipmentItemFulFillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |
 | id | string |  no  |  |
 

---

#### [ShipmentPayments](#ShipmentPayments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string? |  yes  |  |
 | mode | string |  no  |  |
 | source | string? |  yes  |  |
 

---

#### [ShipmentPricesDataInfo](#ShipmentPricesDataInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_paid | number? |  yes  |  |
 | cashback | number? |  yes  |  |
 | cashback_applied | number? |  yes  |  |
 | cod_charges | number? |  yes  |  |
 | coupon_value | string? |  yes  |  |
 | delivery_charge | number? |  yes  |  |
 | discount | number? |  yes  |  |
 | fynd_credits | number? |  yes  |  |
 | price_effective | number? |  yes  |  |
 | price_marked | number? |  yes  |  |
 | refund_amount | number? |  yes  |  |
 | refund_credit | number? |  yes  |  |
 | value_of_good | number? |  yes  |  |
 

---

#### [ShipmentPricesDataSet](#ShipmentPricesDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_paid | number? |  yes  |  |
 | brand_calculated_amount | number? |  yes  |  |
 | cashback | number? |  yes  |  |
 | cashback_applied | number? |  yes  |  |
 | cod_charges | number? |  yes  |  |
 | coupon_effective_discount | number? |  yes  |  |
 | delivery_charge | number? |  yes  |  |
 | discount | string? |  yes  |  |
 | fynd_credits | number? |  yes  |  |
 | gst_fee | number? |  yes  |  |
 | price_effective | number? |  yes  |  |
 | price_marked | number? |  yes  |  |
 | refund_credit | number? |  yes  |  |
 | tax_collected_at_source | number? |  yes  |  |
 | value_of_good | number? |  yes  |  |
 

---

#### [ShipmentStatus](#ShipmentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | actual_status | string |  no  |  |
 | hex_code | string |  no  |  |
 | ops_status | string |  no  |  |
 | status | string |  no  |  |
 | title | string |  no  |  |
 

---

#### [ShipmentStatusData](#ShipmentStatusData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_list | [number]? |  yes  |  |
 | created_at | string? |  yes  |  |
 | id | number? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | status | string? |  yes  |  |
 

---

#### [Statuses](#Statuses)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | exclude_bags_next_state | string? |  yes  |  |
 | shipments | [ShipmentDetail](#ShipmentDetail)? |  yes  |  |
 | status | string |  no  |  |
 

---

#### [SubLane](#SubLane)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current_state | [string]? |  yes  |  |
 | index | number |  no  |  |
 | next_state | [string]? |  yes  |  |
 | text | string |  no  |  |
 | total_shipments | number |  no  |  |
 | value | string |  no  |  |
 

---

#### [Success](#Success)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [SuperLane](#SuperLane)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | options | [[SubLane](#SubLane)]? |  yes  |  |
 | text | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [TrackingList](#TrackingList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_current | boolean? |  yes  |  |
 | is_passed | boolean? |  yes  |  |
 | status | string |  no  |  |
 | time | string? |  yes  |  |
 

---

#### [UserDataInfo](#UserDataInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | avis_user_id | string |  no  |  |
 | email | string |  no  |  |
 | first_name | string |  no  |  |
 | gender | string |  no  |  |
 | is_anonymous_user | boolean |  no  |  |
 | last_name | string |  no  |  |
 | mobile | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [UserDataSet](#UserDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | mobile | number |  no  |  |
 | name | string |  no  |  |
 

---

#### [UserDetailsData](#UserDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string |  no  |  |
 | city | string |  no  |  |
 | country | string |  no  |  |
 | email | string |  no  |  |
 | name | string |  no  |  |
 | phone | string |  no  |  |
 | pincode | string |  no  |  |
 | state | string |  no  |  |
 

---




