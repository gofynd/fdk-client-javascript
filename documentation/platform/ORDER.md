




##### [Back to Platform docs](./README.md)

## Order Methods
Handles all platform order and shipment api(s)

* [bulkActionDetails](#bulkactiondetails)
* [bulkActionProcessXlsxFile](#bulkactionprocessxlsxfile)
* [checkOrderStatus](#checkorderstatus)
* [click2Call](#click2call)
* [createChannelConfig](#createchannelconfig)
* [createOrder](#createorder)
* [createShipmentReport](#createshipmentreport)
* [dispatchManifest](#dispatchmanifest)
* [getAnnouncements](#getannouncements)
* [getAppOrderShipmentDetails](#getappordershipmentdetails)
* [getApplicationShipments](#getapplicationshipments)
* [getBagById](#getbagbyid)
* [getBags](#getbags)
* [getBulkActionFailedReport](#getbulkactionfailedreport)
* [getBulkInvoice](#getbulkinvoice)
* [getBulkInvoiceLabel](#getbulkinvoicelabel)
* [getBulkList](#getbulklist)
* [getBulkShipmentExcelFile](#getbulkshipmentexcelfile)
* [getChannelConfig](#getchannelconfig)
* [getLaneConfig](#getlaneconfig)
* [getMetricCount](#getmetriccount)
* [getOrderById](#getorderbyid)
* [getOrders](#getorders)
* [getReportsShipmentListing](#getreportsshipmentlisting)
* [getRoleBasedActions](#getrolebasedactions)
* [getShipmentById](#getshipmentbyid)
* [getShipmentHistory](#getshipmenthistory)
* [getShipmentReasons](#getshipmentreasons)
* [getShipments](#getshipments)
* [getfilters](#getfilters)
* [invalidateShipmentCache](#invalidateshipmentcache)
* [orderUpdate](#orderupdate)
* [platformManualAssignDPToShipment](#platformmanualassigndptoshipment)
* [postShipmentHistory](#postshipmenthistory)
* [processManifest](#processmanifest)
* [reassignLocation](#reassignlocation)
* [sendSmsNinja](#sendsmsninja)
* [sendSmsNinjaPlatform](#sendsmsninjaplatform)
* [trackPlatformShipment](#trackplatformshipment)
* [updateAddress](#updateaddress)
* [updatePackagingDimensions](#updatepackagingdimensions)
* [updateShipmentLock](#updateshipmentlock)
* [updateShipmentStatus](#updateshipmentstatus)
* [uploadConsent](#uploadconsent)
* [upsertJioCode](#upsertjiocode)



## Methods with example and description




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


### getOrders




```javascript
// Promise
const promise = client.order.getOrders({  lane : value,
 searchType : value,
 bagStatus : value,
 timeToDispatch : value,
 paymentMethods : value,
 tags : value,
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
 bagStatus : value,
 timeToDispatch : value,
 paymentMethods : value,
 tags : value,
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
| bagStatus | string | no |  |    
| timeToDispatch | string | no |  |    
| paymentMethods | string | no |  |    
| tags | string | no |  |    
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


### getShipments




```javascript
// Promise
const promise = client.order.getShipments({  lane : value,
 bagStatus : value,
 statusOverrideLane : value,
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
 fetchActiveShipment : value,
 excludeLockedShipments : value,
 paymentMethods : value,
 channelShipmentId : value,
 channelOrderId : value,
 customMeta : value,
 orderingChannel : value,
 companyAffiliateTag : value });

// Async/Await
const data = await client.order.getShipments({  lane : value,
 bagStatus : value,
 statusOverrideLane : value,
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
 fetchActiveShipment : value,
 excludeLockedShipments : value,
 paymentMethods : value,
 channelShipmentId : value,
 channelOrderId : value,
 customMeta : value,
 orderingChannel : value,
 companyAffiliateTag : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| lane | string | no |  |    
| bagStatus | string | no |  |    
| statusOverrideLane | boolean | no |  |    
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
| fetchActiveShipment | boolean | no |  |    
| excludeLockedShipments | boolean | no |  |    
| paymentMethods | string | no |  |    
| channelShipmentId | string | no |  |    
| channelOrderId | string | no |  |    
| customMeta | string | no |  |    
| orderingChannel | string | no |  |    
| companyAffiliateTag | string | no |  |  





*Returned Response:*




[ShipmentInternalPlatformViewResponse](#ShipmentInternalPlatformViewResponse)

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


### postShipmentHistory




```javascript
// Promise
const promise = client.order.postShipmentHistory({  body : value });

// Async/Await
const data = await client.order.postShipmentHistory({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PostShipmentHistory](#PostShipmentHistory) | yes | Request body |




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


### sendSmsNinjaPlatform




```javascript
// Promise
const promise = client.order.sendSmsNinjaPlatform();

// Async/Await
const data = await client.order.sendSmsNinjaPlatform();
```








*Returned Response:*




[OrderStatusResult](#OrderStatusResult)

Sms Sent successfully




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

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



### Schemas


#### [ActionInfo](#ActionInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  yes  |  |
 | display_text | string |  yes  |  |
 | id | number |  yes  |  |
 | slug | string |  yes  |  |
 

---

#### [Affiliate](#Affiliate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | config | [AffiliateConfig](#AffiliateConfig) |  no  |  |
 | id | string |  yes  |  |
 | token | string |  yes  |  |
 

---

#### [AffiliateAppConfig](#AffiliateAppConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_at | string |  yes  |  |
 | description | string |  no  |  |
 | id | string |  yes  |  |
 | meta | [[AffiliateAppConfigMeta](#AffiliateAppConfigMeta)] |  no  |  |
 | name | string |  yes  |  |
 | owner | string |  yes  |  |
 | secret | string |  yes  |  |
 | token | string |  yes  |  |
 | updated_at | string |  yes  |  |
 

---

#### [AffiliateAppConfigMeta](#AffiliateAppConfigMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | value | string |  yes  |  |
 

---

#### [AffiliateBag](#AffiliateBag)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  yes  |  |
 | affiliate_meta | string |  yes  |  |
 | affiliate_store_id | string |  yes  |  |
 | amount_paid | number |  yes  |  |
 | avl_qty | number |  yes  |  |
 | company_id | number |  yes  |  |
 | delivery_charge | number |  yes  |  |
 | discount | number |  yes  |  |
 | fynd_store_id | string |  yes  |  |
 | hsn_code_id | string |  yes  |  |
 | identifier | string |  yes  |  |
 | item_id | number |  yes  |  |
 | item_size | string |  yes  |  |
 | modified_on | string |  yes  |  |
 | pdf_links | [MarketPlacePdf](#MarketPlacePdf) |  no  |  |
 | price_effective | number |  yes  |  |
 | price_marked | number |  yes  |  |
 | quantity | number |  yes  |  |
 | seller_identifier | string |  yes  |  |
 | sku | string |  yes  |  |
 | store_id | number |  yes  |  |
 | transfer_price | number |  yes  |  |
 | unit_price | number |  yes  |  |
 

---

#### [AffiliateBagDetails](#AffiliateBagDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_bag_id | string |  yes  |  |
 | affiliate_meta | [AffiliateMeta](#AffiliateMeta) |  yes  |  |
 | affiliate_order_id | string |  yes  |  |
 | employee_discount | number |  no  |  |
 | loyalty_discount | number |  no  |  |
 

---

#### [AffiliateConfig](#AffiliateConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app | [AffiliateAppConfig](#AffiliateAppConfig) |  no  |  |
 | inventory | [AffiliateInventoryConfig](#AffiliateInventoryConfig) |  no  |  |
 

---

#### [AffiliateDetails](#AffiliateDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ad_id | string |  no  |  |
 | affiliate_bag_id | string |  yes  |  |
 | affiliate_id | string |  no  |  |
 | affiliate_meta | [AffiliateMeta](#AffiliateMeta) |  yes  |  |
 | affiliate_order_id | string |  yes  |  |
 | affiliate_shipment_id | string |  yes  |  |
 | affiliate_store_id | string |  yes  |  |
 | company_affiliate_tag | string |  no  |  |
 | pdf_links | [PDFLinks](#PDFLinks) |  no  |  |
 | shipment_meta | [ShipmentMeta](#ShipmentMeta) |  yes  |  |
 

---

#### [AffiliateInventoryArticleAssignmentConfig](#AffiliateInventoryArticleAssignmentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | post_order_reassignment | boolean |  no  |  |
 

---

#### [AffiliateInventoryConfig](#AffiliateInventoryConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article_assignment | [AffiliateInventoryArticleAssignmentConfig](#AffiliateInventoryArticleAssignmentConfig) |  no  |  |
 | inventory | [AffiliateInventoryStoreConfig](#AffiliateInventoryStoreConfig) |  no  |  |
 | logistics | [AffiliateInventoryLogisticsConfig](#AffiliateInventoryLogisticsConfig) |  no  |  |
 | order | [AffiliateInventoryOrderConfig](#AffiliateInventoryOrderConfig) |  no  |  |
 | payment | [AffiliateInventoryPaymentConfig](#AffiliateInventoryPaymentConfig) |  no  |  |
 

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
 | mode_of_payment | string |  no  |  |
 | source | string |  no  |  |
 

---

#### [AffiliateInventoryStoreConfig](#AffiliateInventoryStoreConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store | string |  no  |  |
 

---

#### [AffiliateMeta](#AffiliateMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | box_type | string |  no  |  |
 | channel_order_id | string |  no  |  |
 | channel_shipment_id | string |  no  |  |
 | coupon_code | string |  no  |  |
 | due_date | string |  no  |  |
 | employee_discount | number |  no  |  |
 | is_priority | boolean |  no  |  |
 | loyalty_discount | number |  no  |  |
 | order_item_id | string |  no  |  |
 | quantity | number |  no  |  |
 | size_level_total_qty | number |  no  |  |
 

---

#### [AffiliateStoreIdMapping](#AffiliateStoreIdMapping)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | marketplace_store_id | string |  yes  |  |
 | store_id | number |  yes  |  |
 

---

#### [AnnouncementResponse](#AnnouncementResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number |  no  |  |
 | created_at | string |  no  |  |
 | description | string |  no  |  |
 | from_datetime | string |  no  |  |
 | id | number |  yes  |  |
 | logo_url | string |  no  |  |
 | platform_id | string |  no  |  |
 | platform_name | string |  no  |  |
 | title | string |  no  |  |
 | to_datetime | string |  no  |  |
 

---

#### [AnnouncementsResponse](#AnnouncementsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | announcements | [[AnnouncementResponse](#AnnouncementResponse)] |  no  |  |
 

---

#### [AppliedPromos](#AppliedPromos)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number |  no  |  |
 | article_quantity | number |  no  |  |
 | buy_rules | [[BuyRules](#BuyRules)] |  no  |  |
 | discount_rules | [[DiscountRules](#DiscountRules)] |  no  |  |
 | mrp_promotion | boolean |  no  |  |
 | promo_id | string |  no  |  |
 | promotion_name | string |  no  |  |
 | promotion_type | string |  no  |  |
 

---

#### [Article](#Article)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  yes  |  |
 | a_set | string |  no  |  |
 | child_details | string |  no  |  |
 | code | string |  no  |  |
 | dimensions | [Dimensions](#Dimensions) |  no  |  |
 | esp_modified | any |  no  |  |
 | identifiers | [Identifier](#Identifier) |  yes  |  |
 | is_set | boolean |  no  |  |
 | raw_meta | any |  no  |  |
 | return_config | [ReturnConfig](#ReturnConfig) |  no  |  |
 | seller_identifier | string |  yes  |  |
 | size | string |  yes  |  |
 | uid | string |  yes  |  |
 | weight | [Weight](#Weight) |  no  |  |
 

---

#### [ArticleDetails](#ArticleDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |
 

---

#### [ArticleDetails1](#ArticleDetails1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  yes  |  |
 | attributes | string |  yes  |  |
 | brand_id | number |  yes  |  |
 | category | string |  yes  |  |
 | dimension | string |  yes  |  |
 | quantity | number |  yes  |  |
 | weight | string |  yes  |  |
 

---

#### [Attributes](#Attributes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_name | string |  no  |  |
 | essential | string |  no  |  |
 | gender | [string] |  no  |  |
 | marketer_address | string |  no  |  |
 | marketer_name | string |  no  |  |
 | name | string |  no  |  |
 | primary_color | string |  no  |  |
 | primary_color_hex | string |  no  |  |
 | primary_material | string |  no  |  |
 

---

#### [B2BPODetails](#B2BPODetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | docker_number | string |  no  |  |
 | item_base_price | number |  no  |  |
 | partial_can_ret | boolean |  no  |  |
 | po_line_amount | number |  no  |  |
 | po_tax_amount | number |  no  |  |
 | total_gst_percentage | number |  no  |  |
 

---

#### [BagConfigs](#BagConfigs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | allow_force_return | boolean |  yes  |  |
 | can_be_cancelled | boolean |  yes  |  |
 | enable_tracking | boolean |  yes  |  |
 | is_active | boolean |  yes  |  |
 | is_customer_return_allowed | boolean |  yes  |  |
 | is_returnable | boolean |  yes  |  |
 

---

#### [BagDetailsPlatformResponse](#BagDetailsPlatformResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_bag_details | [AffiliateBagDetails](#AffiliateBagDetails) |  yes  |  |
 | affiliate_details | [AffiliateDetails](#AffiliateDetails) |  no  |  |
 | applied_promos | [string] |  no  |  |
 | article | [Article](#Article) |  yes  |  |
 | article_details | [ArticleDetails](#ArticleDetails) |  no  |  |
 | b_id | number |  yes  |  |
 | b_type | string |  no  |  |
 | bag_status | [[BagStatusHistory](#BagStatusHistory)] |  yes  |  |
 | bag_status_history | [BagStatusHistory](#BagStatusHistory) |  no  |  |
 | bag_update_time | number |  no  |  |
 | brand | [Brand](#Brand) |  yes  |  |
 | current_operational_status | [BagStatusHistory](#BagStatusHistory) |  yes  |  |
 | current_status | [BagStatusHistory](#BagStatusHistory) |  yes  |  |
 | dates | [Dates](#Dates) |  no  |  |
 | display_name | string |  no  |  |
 | entity_type | string |  no  |  |
 | financial_breakup | [[FinancialBreakup](#FinancialBreakup)] |  yes  |  |
 | gst_details | [BagGSTDetails](#BagGSTDetails) |  yes  |  |
 | identifier | string |  no  |  |
 | item | [Item](#Item) |  yes  |  |
 | journey_type | string |  yes  |  |
 | line_number | number |  no  |  |
 | meta | [BagMeta](#BagMeta) |  no  |  |
 | no_of_bags_order | number |  no  |  |
 | operational_status | string |  no  |  |
 | order_integration_id | string |  no  |  |
 | ordering_store | [Store](#Store) |  no  |  |
 | original_bag_list | [number] |  no  |  |
 | parent_promo_bags | string |  no  |  |
 | prices | [Prices](#Prices) |  yes  |  |
 | qc_required | any |  no  |  |
 | quantity | number |  no  |  |
 | reasons | [string] |  no  |  |
 | restore_coupon | boolean |  no  |  |
 | restore_promos | string |  no  |  |
 | seller_identifier | string |  no  |  |
 | shipment_id | string |  no  |  |
 | status | [BagReturnableCancelableStatus](#BagReturnableCancelableStatus) |  yes  |  |
 | tags | [string] |  no  |  |
 

---

#### [BagGST](#BagGST)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_calculated_amount | number |  no  |  |
 | gst_fee | number |  no  |  |
 | gst_tag | string |  no  |  |
 | gst_tax_percentage | number |  no  |  |
 | gstin_code | string |  no  |  |
 | hsn_code | string |  no  |  |
 | is_default_hsn_code | boolean |  no  |  |
 | value_of_good | number |  no  |  |
 

---

#### [BagGSTDetails](#BagGSTDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_calculated_amount | number |  yes  |  |
 | cgst_gst_fee | string |  yes  |  |
 | cgst_tax_percentage | number |  yes  |  |
 | gst_fee | number |  yes  |  |
 | gst_tag | string |  yes  |  |
 | gst_tax_percentage | number |  yes  |  |
 | gstin_code | string |  no  |  |
 | hsn_code | string |  yes  |  |
 | hsn_code_id | string |  yes  |  |
 | igst_gst_fee | string |  yes  |  |
 | igst_tax_percentage | number |  yes  |  |
 | is_default_hsn_code | boolean |  no  |  |
 | sgst_gst_fee | string |  yes  |  |
 | sgst_tax_percentage | number |  yes  |  |
 | tax_collected_at_source | number |  yes  |  |
 | value_of_good | number |  yes  |  |
 

---

#### [BagMeta](#BagMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | b2b_po_details | [B2BPODetails](#B2BPODetails) |  no  |  |
 

---

#### [BagReturnableCancelableStatus](#BagReturnableCancelableStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | can_be_cancelled | boolean |  yes  |  |
 | enable_tracking | boolean |  yes  |  |
 | is_active | boolean |  yes  |  |
 | is_customer_return_allowed | boolean |  yes  |  |
 | is_returnable | boolean |  yes  |  |
 

---

#### [Bags](#Bags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_bag_id | string |  no  |  |
 | affiliate_order_id | string |  no  |  |
 | bag_id | number |  no  |  |
 | is_locked | boolean |  no  |  |
 

---

#### [BagStateMapper](#BagStateMapper)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_display_name | string |  no  |  |
 | app_facing | boolean |  no  |  |
 | app_state_name | string |  no  |  |
 | bs_id | number |  yes  |  |
 | display_name | string |  yes  |  |
 | is_active | boolean |  no  |  |
 | journey_type | string |  yes  |  |
 | name | string |  yes  |  |
 | notify_customer | boolean |  no  |  |
 | state_type | string |  yes  |  |
 

---

#### [BagStatusHistory](#BagStatusHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_display_name | string |  no  |  |
 | bag_id | number |  no  |  |
 | bag_state_mapper | [BagStateMapper](#BagStateMapper) |  no  |  |
 | bsh_id | number |  no  |  |
 | created_at | string |  no  |  |
 | delivery_awb_number | string |  no  |  |
 | delivery_partner_id | number |  no  |  |
 | display_name | string |  no  |  |
 | forward | boolean |  no  |  |
 | kafka_sync | boolean |  no  |  |
 | reasons | [string] |  no  |  |
 | shipment_id | string |  no  |  |
 | state_id | number |  no  |  |
 | state_type | string |  no  |  |
 | status | string |  yes  |  |
 | store_id | number |  no  |  |
 | updated_at | string |  no  |  |
 

---

#### [BagUnit](#BagUnit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_id | number |  yes  |  |
 | can_cancel | boolean |  no  |  |
 | can_return | boolean |  no  |  |
 | gst | [GSTDetailsData](#GSTDetailsData) |  no  |  |
 | item | [PlatformItem](#PlatformItem) |  no  |  |
 | item_quantity | number |  yes  |  |
 | ordering_channel | string |  yes  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | shipment_id | string |  yes  |  |
 | status | string |  yes  |  |
 | total_shipment_bags | number |  yes  |  |
 

---

#### [BaseResponse](#BaseResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  |  |
 | success | boolean |  yes  |  |
 

---

#### [BillingInfo](#BillingInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string |  yes  |  |
 | address2 | string |  no  |  |
 | alternate_email | string |  no  |  |
 | alternate_mobile_number | string |  no  |  |
 | city | string |  yes  |  |
 | country | string |  yes  |  |
 | country_code | string |  no  |  |
 | customer_code | string |  no  |  |
 | external_customer_code | string |  no  |  |
 | first_name | string |  yes  |  |
 | floor_no | string |  no  |  |
 | gender | string |  no  |  |
 | house_no | string |  no  |  |
 | last_name | string |  no  |  |
 | middle_name | string |  no  |  |
 | pincode | string |  yes  |  |
 | primary_email | string |  yes  |  |
 | primary_mobile_number | string |  yes  |  |
 | state | string |  yes  |  |
 | state_code | string |  no  |  |
 | title | string |  no  |  |
 

---

#### [BillingStaffDetails](#BillingStaffDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | employee_code | string |  no  |  |
 | first_name | string |  no  |  |
 | last_name | string |  no  |  |
 | staff_id | number |  no  |  |
 | user | string |  no  |  |
 

---

#### [Brand](#Brand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_id | number |  yes  |  |
 | brand_name | string |  yes  |  |
 | company | string |  yes  |  |
 | created_on | number |  no  |  |
 | credit_note_allowed | boolean |  no  |  |
 | credit_note_expiry_days | number |  no  |  |
 | invoice_prefix | string |  no  |  |
 | is_virtual_invoice | boolean |  no  |  |
 | logo | string |  no  |  |
 | modified_on | number |  no  |  |
 | pickup_location | string |  no  |  |
 | script_last_ran | string |  no  |  |
 | start_date | string |  no  |  |
 

---

#### [BulkActionDetailsDataField](#BulkActionDetailsDataField)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | batch_id | string |  no  |  |
 | company_id | string |  no  |  |
 | failed_shipments_count | number |  no  |  |
 | processing_shipments_count | number |  no  |  |
 | successful_shipment_ids | [string] |  no  |  |
 | successful_shipments_count | number |  no  |  |
 | total_shipments_count | number |  no  |  |
 

---

#### [BulkActionDetailsResponse](#BulkActionDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[BulkActionDetailsDataField](#BulkActionDetailsDataField)] |  no  |  |
 | error | [string] |  no  |  |
 | failed_records | [string] |  no  |  |
 | message | string |  no  |  |
 | status | boolean |  no  |  |
 | success | string |  no  |  |
 | uploaded_by | string |  no  |  |
 | uploaded_on | string |  no  |  |
 | user_id | string |  no  |  |
 

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

#### [BulkInvoiceLabelResponse](#BulkInvoiceLabelResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | batch_id | string |  yes  |  |
 | company_id | string |  no  |  |
 | data | string |  no  |  |
 | do_invoice_label_generated | boolean |  yes  |  |
 | invoice | string |  no  |  |
 | invoice_status | string |  no  |  |
 | label | string |  no  |  |
 | store_code | string |  no  |  |
 | store_id | string |  no  |  |
 | store_name | string |  no  |  |
 

---

#### [BulkInvoicingResponse](#BulkInvoicingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  yes  |  |
 

---

#### [bulkListingData](#bulkListingData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | batch_id | string |  no  |  |
 | company_id | number |  no  |  |
 | excel_url | string |  no  |  |
 | failed | number |  no  |  |
 | failed_shipments | [string] |  no  |  |
 | file_name | string |  no  |  |
 | id | string |  no  |  |
 | processing | number |  no  |  |
 | processing_shipments | [string] |  no  |  |
 | status | string |  no  |  |
 | store_code | string |  no  |  |
 | store_id | number |  no  |  |
 | store_name | string |  no  |  |
 | successful | number |  no  |  |
 | successful_shipments | [string] |  no  |  |
 | total | number |  no  |  |
 | uploaded_on | string |  no  |  |
 | user_id | string |  no  |  |
 | user_name | string |  no  |  |
 

---

#### [BulkListingPage](#BulkListingPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | has_previous | boolean |  no  |  |
 | size | number |  no  |  |
 | total | number |  no  |  |
 | type | string |  no  |  |
 

---

#### [BulkListingResponse](#BulkListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[bulkListingData](#bulkListingData)] |  no  |  |
 | error | string |  no  |  |
 | page | [BulkListingPage](#BulkListingPage) |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [BuyerDetails](#BuyerDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string |  yes  |  |
 | ajio_site_id | string |  no  |  |
 | city | string |  yes  |  |
 | gstin | string |  yes  |  |
 | name | string |  yes  |  |
 | pincode | number |  yes  |  |
 | state | string |  yes  |  |
 

---

#### [BuyRules](#BuyRules)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cart_conditions | string |  no  |  |
 | item_criteria | [ItemCriterias](#ItemCriterias) |  no  |  |
 

---

#### [Charge](#Charge)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  yes  |  |
 | code | string |  no  |  |
 | name | string |  yes  |  |
 | tax | [Tax](#Tax) |  no  |  |
 | type | string |  yes  |  |
 

---

#### [CheckResponse](#CheckResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string |  no  |  |
 | affiliate_shipment_id | string |  no  |  |
 | bags | [[Bags](#Bags)] |  no  |  |
 | is_bag_locked | boolean |  no  |  |
 | is_shipment_locked | boolean |  no  |  |
 | lock_status | boolean |  no  |  |
 | original_filter | [OriginalFilter](#OriginalFilter) |  no  |  |
 | shipment_id | string |  no  |  |
 | status | string |  no  |  |
 

---

#### [Click2CallResponse](#Click2CallResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | call_id | string |  yes  |  |
 | status | boolean |  yes  |  |
 

---

#### [CompanyDetails](#CompanyDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string |  no  |  |
 | company_cin | string |  no  |  |
 | company_contact | [ContactDetails](#ContactDetails) |  no  |  |
 | company_gst | string |  no  |  |
 | company_id | number |  no  |  |
 | company_name | string |  no  |  |
 

---

#### [ContactDetails](#ContactDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | emails | [string] |  no  |  |
 | phone | [[PhoneDetails](#PhoneDetails)] |  no  |  |
 

---

#### [CreateChannelConfig](#CreateChannelConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dp_configuration | [DpConfiguration](#DpConfiguration) |  no  |  |
 | location_reassignment | boolean |  no  |  |
 | lock_states | [string] |  no  |  |
 | logo_url | string |  no  |  |
 | payment_info | [CreateChannelPaymentInfo](#CreateChannelPaymentInfo) |  no  |  |
 | shipment_assignment | string |  no  |  |
 

---

#### [CreateChannelConfigData](#CreateChannelConfigData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | config_data | [CreateChannelConfig](#CreateChannelConfig) |  no  |  |
 

---

#### [CreateChannelConfigResponse](#CreateChannelConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | acknowledged | boolean |  no  |  |
 | is_inserted | boolean |  no  |  |
 | is_upserted | boolean |  no  |  |
 

---

#### [CreateChannelConifgErrorResponse](#CreateChannelConifgErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string |  no  |  |
 

---

#### [CreateChannelPaymentInfo](#CreateChannelPaymentInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mode_of_payment | string |  no  |  |
 | payment_methods | [[PaymentMethods](#PaymentMethods)] |  no  |  |
 | source | string |  no  |  |
 

---

#### [CreateOrderAPI](#CreateOrderAPI)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | billing_info | [BillingInfo](#BillingInfo) |  yes  |  |
 | charges | [[Charge](#Charge)] |  no  |  |
 | config | string |  no  |  |
 | currency_info | string |  no  |  |
 | external_creation_date | string |  no  |  |
 | external_order_id | string |  no  |  |
 | meta | string |  no  |  |
 | payment_info | [PaymentInfo](#PaymentInfo) |  yes  |  |
 | shipments | [[Shipment](#Shipment)] |  yes  |  |
 | shipping_info | [ShippingInfo](#ShippingInfo) |  yes  |  |
 | tax_info | [TaxInfo](#TaxInfo) |  no  |  |
 

---

#### [CreateOrderErrorReponse](#CreateOrderErrorReponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |
 | exception | string |  no  |  |
 | info | any |  no  |  |
 | message | string |  yes  |  |
 | meta | string |  no  |  |
 | request_id | string |  no  |  |
 | stack_trace | string |  no  |  |
 | status | number |  yes  |  |
 

---

#### [CreateOrderPayload](#CreateOrderPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string |  yes  |  |
 | order_config | [OrderConfig](#OrderConfig) |  yes  |  |
 | order_info | [OrderInfo](#OrderInfo) |  yes  |  |
 

---

#### [CreateOrderResponse](#CreateOrderResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_order_id | string |  yes  |  |
 

---

#### [CurrentStatus](#CurrentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_id | number |  no  |  |
 | bag_state_mapper | [BagStateMapper](#BagStateMapper) |  no  |  |
 | created_at | string |  no  |  |
 | current_status_id | number |  yes  |  |
 | delivery_awb_number | string |  no  |  |
 | delivery_partner_id | number |  no  |  |
 | kafka_sync | boolean |  no  |  |
 | shipment_id | string |  no  |  |
 | state_id | number |  no  |  |
 | state_type | string |  no  |  |
 | status | string |  no  |  |
 | store_id | number |  no  |  |
 | updated_at | string |  no  |  |
 

---

#### [DataUpdates](#DataUpdates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entities | [[EntitiesDataUpdates](#EntitiesDataUpdates)] |  no  |  |
 | products | [[ProductsDataUpdates](#ProductsDataUpdates)] |  no  |  |
 

---

#### [Dates](#Dates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | delivery_date | any |  no  |  |
 | order_created | string |  no  |  |
 

---

#### [DebugInfo](#DebugInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | stormbreaker_uuid | string |  no  |  |
 

---

#### [Dimensions](#Dimensions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | height | number |  no  |  |
 | is_default | boolean |  no  |  |
 | length | number |  no  |  |
 | unit | string |  no  |  |
 | width | number |  no  |  |
 

---

#### [DiscountRules](#DiscountRules)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | value | number |  no  |  |
 

---

#### [DispatchManifest](#DispatchManifest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | manifest_id | string |  yes  |  |
 

---

#### [Document](#Document)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ds_type | string |  yes  |  |
 | legal_name | string |  yes  |  |
 | url | string |  no  |  |
 | value | string |  yes  |  |
 | verified | boolean |  yes  |  |
 

---

#### [DpConfiguration](#DpConfiguration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipping_by | string |  no  |  |
 

---

#### [DPDetailsData](#DPDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | awb_no | string |  no  |  |
 | country | string |  no  |  |
 | eway_bill_id | string |  no  |  |
 | gst_tag | string |  no  |  |
 | id | number |  no  |  |
 | name | string |  no  |  |
 | pincode | string |  no  |  |
 | track_url | string |  no  |  |
 

---

#### [EinvoiceInfo](#EinvoiceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credit_note | string |  no  |  |
 | invoice | string |  no  |  |
 

---

#### [EInvoicePortalDetails](#EInvoicePortalDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | password | string |  no  |  |
 | user | string |  no  |  |
 | username | string |  no  |  |
 

---

#### [Entities](#Entities)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_bag_id | string |  no  |  |
 | affiliate_id | string |  no  |  |
 | affiliate_order_id | string |  no  |  |
 | affiliate_shipment_id | string |  no  |  |
 | id | string |  no  |  |
 | reason_text | string |  yes  |  |
 

---

#### [EntitiesDataUpdates](#EntitiesDataUpdates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  |  |
 | filters | [string] |  no  |  |
 

---

#### [EntitiesReasons](#EntitiesReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [EntityReasonData](#EntityReasonData) |  no  |  |
 | filters | [string] |  no  |  |
 

---

#### [EntityReasonData](#EntityReasonData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason_id | number |  no  |  |
 | reason_text | string |  no  |  |
 

---

#### [Error](#Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [ErrorDetail](#ErrorDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [ErrorResponse](#ErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string |  yes  |  |
 | message | string |  yes  |  |
 

---

#### [ErrorResponse1](#ErrorResponse1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error_trace | string |  no  |  |
 | message | string |  yes  |  |
 | status | number |  yes  |  |
 

---

#### [FileResponse](#FileResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cdn | [URL](#URL) |  no  |  |
 | content_type | string |  no  |  |
 | file_name | string |  no  |  |
 | file_path | string |  no  |  |
 | method | string |  no  |  |
 | namespace | string |  no  |  |
 | operation | string |  no  |  |
 | size | number |  no  |  |
 | tags | [string] |  no  |  |
 | upload | [FileUploadResponse](#FileUploadResponse) |  no  |  |
 

---

#### [FileUploadResponse](#FileUploadResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | expiry | number |  no  |  |
 | url | string |  no  |  |
 

---

#### [FilterInfoOption](#FilterInfoOption)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | text | string |  yes  |  |
 | value | string |  no  |  |
 

---

#### [FiltersInfo](#FiltersInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | options | [[FilterInfoOption](#FilterInfoOption)] |  no  |  |
 | text | string |  yes  |  |
 | type | string |  yes  |  |
 | value | string |  yes  |  |
 

---

#### [FiltersResponse](#FiltersResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | advance | [string] |  no  |  |
 

---

#### [FinancialBreakup](#FinancialBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | added_to_fynd_cash | boolean |  yes  |  |
 | amount_paid | number |  yes  |  |
 | amount_paid_roundoff | number |  no  |  |
 | brand_calculated_amount | number |  yes  |  |
 | cashback | number |  yes  |  |
 | cashback_applied | number |  yes  |  |
 | cod_charges | number |  yes  |  |
 | coupon_effective_discount | number |  yes  |  |
 | coupon_value | number |  yes  |  |
 | delivery_charge | number |  yes  |  |
 | discount | number |  yes  |  |
 | fynd_credits | number |  yes  |  |
 | gst_fee | number |  yes  |  |
 | gst_tag | string |  yes  |  |
 | gst_tax_percentage | number |  yes  |  |
 | hsn_code | string |  yes  |  |
 | identifiers | [Identifier](#Identifier) |  yes  |  |
 | item_name | string |  yes  |  |
 | price_effective | number |  yes  |  |
 | price_marked | number |  yes  |  |
 | promotion_effective_discount | number |  yes  |  |
 | refund_credit | number |  yes  |  |
 | size | string |  yes  |  |
 | tax_collected_at_source | number |  no  |  |
 | total_units | number |  yes  |  |
 | transfer_price | number |  yes  |  |
 | value_of_good | number |  yes  |  |
 

---

#### [Formatted](#Formatted)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | f_max | string |  no  |  |
 | f_min | string |  no  |  |
 

---

#### [FulfillingStore](#FulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string |  yes  |  |
 | city | string |  yes  |  |
 | code | string |  yes  |  |
 | contact_person | string |  yes  |  |
 | country | string |  yes  |  |
 | fulfillment_channel | string |  yes  |  |
 | id | number |  yes  |  |
 | meta | string |  yes  |  |
 | phone | string |  yes  |  |
 | pincode | string |  yes  |  |
 | state | string |  yes  |  |
 | store_name | string |  yes  |  |
 

---

#### [FyndOrderIdList](#FyndOrderIdList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_order_id | [string] |  no  |  |
 

---

#### [GetActionsResponse](#GetActionsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | permissions | [ActionInfo](#ActionInfo) |  yes  |  |
 

---

#### [GetBagsPlatformResponse](#GetBagsPlatformResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[BagDetailsPlatformResponse](#BagDetailsPlatformResponse)] |  yes  |  |
 | page | [Page1](#Page1) |  yes  |  |
 

---

#### [GSTDetailsData](#GSTDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_calculated_amount | number |  yes  |  |
 | gst_fee | number |  yes  |  |
 | gstin_code | string |  yes  |  |
 | tax_collected_at_source | number |  yes  |  |
 | value_of_good | number |  yes  |  |
 

---

#### [HistoryDict](#HistoryDict)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_id | number |  no  |  |
 | createdat | string |  yes  |  |
 | l1_detail | string |  no  |  |
 | l2_detail | string |  no  |  |
 | l3_detail | string |  no  |  |
 | message | string |  yes  |  |
 | ticket_id | string |  no  |  |
 | ticket_url | string |  no  |  |
 | type | string |  yes  |  |
 | user | string |  yes  |  |
 

---

#### [Identifier](#Identifier)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ean | string |  no  |  |
 

---

#### [InvalidateShipmentCacheNestedResponse](#InvalidateShipmentCacheNestedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string |  no  |  |
 | message | string |  no  |  |
 | shipment_id | string |  no  |  |
 | status | number |  no  |  |
 

---

#### [InvalidateShipmentCachePayload](#InvalidateShipmentCachePayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_ids | [string] |  yes  |  |
 

---

#### [InvalidateShipmentCacheResponse](#InvalidateShipmentCacheResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | response | [[InvalidateShipmentCacheNestedResponse](#InvalidateShipmentCacheNestedResponse)] |  no  |  |
 

---

#### [InvoiceInfo](#InvoiceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credit_note_id | string |  no  |  |
 | invoice_url | string |  no  |  |
 | label_url | string |  no  |  |
 | store_invoice_id | string |  no  |  |
 | updated_date | string |  no  |  |
 

---

#### [Item](#Item)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attributes | [Attributes](#Attributes) |  yes  |  |
 | branch_url | string |  no  |  |
 | brand | string |  yes  |  |
 | brand_id | number |  yes  |  |
 | can_cancel | boolean |  no  |  |
 | can_return | boolean |  no  |  |
 | code | string |  no  |  |
 | color | string |  no  |  |
 | department_id | number |  no  |  |
 | gender | string |  no  |  |
 | image | [string] |  yes  |  |
 | item_id | number |  yes  |  |
 | l1_category | [string] |  no  |  |
 | l1_category_id | number |  no  |  |
 | l2_category | [string] |  no  |  |
 | l2_category_id | number |  no  |  |
 | l3_category | number |  no  |  |
 | l3_category_name | string |  no  |  |
 | last_updated_at | string |  no  |  |
 | meta | string |  no  |  |
 | name | string |  yes  |  |
 | size | string |  yes  |  |
 | slug_key | string |  yes  |  |
 | webstore_product_url | string |  no  |  |
 

---

#### [ItemCriterias](#ItemCriterias)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_brand | [number] |  no  |  |
 

---

#### [JioCodeUpsertDataSet](#JioCodeUpsertDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article_id | string |  no  |  |
 | company_id | string |  no  |  |
 | item_id | string |  no  |  |
 | jio_code | string |  no  |  |
 

---

#### [JioCodeUpsertPayload](#JioCodeUpsertPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[JioCodeUpsertDataSet](#JioCodeUpsertDataSet)] |  no  |  |
 

---

#### [JioCodeUpsertResponse](#JioCodeUpsertResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [string] |  no  |  |
 | error | [[NestedErrorSchemaDataSet](#NestedErrorSchemaDataSet)] |  no  |  |
 | identifier | string |  no  |  |
 | success | boolean |  no  |  |
 | trace_id | string |  no  |  |
 

---

#### [LaneConfigResponse](#LaneConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | super_lanes | [[SuperLane](#SuperLane)] |  no  |  |
 

---

#### [LineItem](#LineItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | charges | [[Charge](#Charge)] |  no  |  |
 | custom_messasge | string |  no  |  |
 | external_line_id | string |  no  |  |
 | meta | string |  no  |  |
 | quantity | number |  no  |  |
 | seller_identifier | string |  yes  |  |
 

---

#### [LocationDetails](#LocationDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[ArticleDetails1](#ArticleDetails1)] |  yes  |  |
 | fulfillment_id | number |  yes  |  |
 | fulfillment_type | string |  yes  |  |
 

---

#### [LockData](#LockData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | lock_message | string |  no  |  |
 | locked | boolean |  no  |  |
 | mto | boolean |  no  |  |
 

---

#### [ManualAssignDPToShipment](#ManualAssignDPToShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dp_id | number |  yes  |  |
 | order_type | string |  yes  |  |
 | qc_required | string |  yes  |  |
 | shipment_ids | [string] |  no  |  |
 

---

#### [ManualAssignDPToShipmentResponse](#ManualAssignDPToShipmentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | errors | [string] |  no  |  |
 | success | string |  yes  |  |
 

---

#### [MarketPlacePdf](#MarketPlacePdf)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | invoice | string |  no  |  |
 | label | string |  no  |  |
 

---

#### [Meta](#Meta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dimension | [Dimensions](#Dimensions) |  no  |  |
 

---

#### [Meta1](#Meta1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kafka_emission_status | number |  no  |  |
 | state_manager_used | string |  no  |  |
 

---

#### [MetricCountResponse](#MetricCountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[MetricsCount](#MetricsCount)] |  no  |  |
 

---

#### [MetricsCount](#MetricsCount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  yes  |  |
 | options | [[Options](#Options)] |  no  |  |
 | text | string |  yes  |  |
 | value | number |  yes  |  |
 

---

#### [NestedErrorSchemaDataSet](#NestedErrorSchemaDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | type | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [OmsReports](#OmsReports)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string |  no  |  |
 | report_created_at | string |  no  |  |
 | report_id | string |  no  |  |
 | report_name | string |  no  |  |
 | report_requested_at | string |  no  |  |
 | report_type | string |  no  |  |
 | request_details | string |  no  |  |
 | s3_key | string |  no  |  |
 | status | string |  no  |  |
 

---

#### [Options](#Options)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text | string |  no  |  |
 | value | number |  no  |  |
 

---

#### [OrderBagArticle](#OrderBagArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifiers | string |  no  |  |
 | return_config | string |  no  |  |
 | uid | string |  no  |  |
 

---

#### [OrderBags](#OrderBags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | applied_promos | [[AppliedPromos](#AppliedPromos)] |  no  |  |
 | article | [OrderBagArticle](#OrderBagArticle) |  no  |  |
 | bag_configs | [BagConfigs](#BagConfigs) |  no  |  |
 | bag_id | number |  yes  |  |
 | brand | [OrderBrandName](#OrderBrandName) |  no  |  |
 | can_cancel | boolean |  no  |  |
 | can_return | boolean |  no  |  |
 | current_status | [CurrentStatus](#CurrentStatus) |  no  |  |
 | delivery_address | [PlatformDeliveryAddress](#PlatformDeliveryAddress) |  no  |  |
 | display_name | string |  no  |  |
 | entity_type | string |  no  |  |
 | financial_breakup | [FinancialBreakup](#FinancialBreakup) |  no  |  |
 | gst_details | [BagGST](#BagGST) |  no  |  |
 | identifier | string |  no  |  |
 | item | [PlatformItem](#PlatformItem) |  no  |  |
 | line_number | number |  no  |  |
 | parent_promo_bags | string |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | quantity | number |  no  |  |
 | seller_identifier | string |  no  |  |
 

---

#### [OrderBrandName](#OrderBrandName)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_name | string |  yes  |  |
 | company | string |  yes  |  |
 | created_on | string |  yes  |  |
 | id | number |  yes  |  |
 | logo | string |  yes  |  |
 | modified_on | string |  no  |  |
 

---

#### [OrderConfig](#OrderConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate | [Affiliate](#Affiliate) |  yes  |  |
 | affiliate_store_id_mapping | [[AffiliateStoreIdMapping](#AffiliateStoreIdMapping)] |  yes  |  |
 | article_lookup | string |  no  |  |
 | bag_end_state | string |  no  |  |
 | create_user | boolean |  no  |  |
 | store_lookup | string |  no  |  |
 

---

#### [OrderDetails](#OrderDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_at | string |  no  |  |
 | fynd_order_id | string |  no  |  |
 

---

#### [OrderDetailsData](#OrderDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string |  no  |  |
 | cod_charges | string |  no  |  |
 | fynd_order_id | string |  yes  |  |
 | order_date | string |  no  |  |
 | order_value | string |  no  |  |
 | ordering_channel | string |  no  |  |
 | ordering_channel_logo | string |  no  |  |
 | source | string |  no  |  |
 | tax_details | string |  no  |  |
 

---

#### [OrderDict](#OrderDict)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_order_id | string |  yes  |  |
 | meta | [OrderMeta](#OrderMeta) |  no  |  |
 | order_date | string |  yes  |  |
 | payment_methods | string |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | tax_details | [TaxDetails](#TaxDetails) |  no  |  |
 

---

#### [OrderInfo](#OrderInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_order_id | string |  no  |  |
 | bags | [[AffiliateBag](#AffiliateBag)] |  yes  |  |
 | billing_address | [OrderUser](#OrderUser) |  yes  |  |
 | cod_charges | number |  yes  |  |
 | coupon | string |  no  |  |
 | delivery_charges | number |  yes  |  |
 | discount | number |  yes  |  |
 | items | string |  yes  |  |
 | order_priority | [OrderPriority](#OrderPriority) |  no  |  |
 | order_value | number |  yes  |  |
 | payment | string |  no  |  |
 | payment_mode | string |  yes  |  |
 | shipment | [ShipmentData](#ShipmentData) |  no  |  |
 | shipping_address | [OrderUser](#OrderUser) |  yes  |  |
 | user | [UserData](#UserData) |  yes  |  |
 

---

#### [OrderingStoreDetails](#OrderingStoreDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string |  yes  |  |
 | city | string |  yes  |  |
 | code | string |  yes  |  |
 | contact_person | string |  yes  |  |
 | country | string |  yes  |  |
 | meta | string |  yes  |  |
 | ordering_store_id | number |  yes  |  |
 | phone | string |  yes  |  |
 | pincode | string |  yes  |  |
 | state | string |  yes  |  |
 | store_name | string |  yes  |  |
 

---

#### [OrderListingResponse](#OrderListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[PlatformOrderItems](#PlatformOrderItems)] |  no  |  |
 | lane | string |  no  |  |
 | message | string |  no  |  |
 | page | [Page](#Page) |  no  |  |
 | success | boolean |  no  |  |
 | total_count | number |  no  |  |
 

---

#### [OrderMeta](#OrderMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | billing_staff_details | [BillingStaffDetails](#BillingStaffDetails) |  no  |  |
 | cart_id | number |  no  |  |
 | comment | string |  no  |  |
 | company_logo | string |  no  |  |
 | currency_symbol | string |  no  |  |
 | customer_note | string |  no  |  |
 | employee_id | number |  no  |  |
 | extra_meta | string |  no  |  |
 | files | [string] |  no  |  |
 | mongo_cart_id | number |  no  |  |
 | order_child_entities | [string] |  no  |  |
 | order_platform | string |  no  |  |
 | order_tags | [string] |  no  |  |
 | order_type | string |  no  |  |
 | ordering_store | number |  no  |  |
 | payment_type | string |  no  |  |
 | platform_user_details | [PlatformUserDetails](#PlatformUserDetails) |  no  |  |
 | staff | string |  no  |  |
 | transaction_data | [TransactionData](#TransactionData) |  no  |  |
 

---

#### [OrderPriority](#OrderPriority)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_priority_code | string |  no  |  |
 | fulfilment_priority | number |  no  |  |
 | fulfilment_priority_text | string |  no  |  |
 

---

#### [OrderStatus](#OrderStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end_date | string |  yes  |  |
 | mobile | number |  yes  |  |
 | order_details | [[FyndOrderIdList](#FyndOrderIdList)] |  no  |  |
 | start_date | string |  yes  |  |
 

---

#### [OrderStatusData](#OrderStatusData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | errors | [string] |  no  |  |
 | order_details | [OrderDetails](#OrderDetails) |  yes  |  |
 | shipment_details | [[ShipmentDetail](#ShipmentDetail)] |  no  |  |
 

---

#### [OrderStatusResult](#OrderStatusResult)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | result | [[OrderStatusData](#OrderStatusData)] |  no  |  |
 | success | string |  yes  |  |
 

---

#### [OrderUser](#OrderUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string |  no  |  |
 | address2 | string |  no  |  |
 | city | string |  yes  |  |
 | country | string |  yes  |  |
 | email | string |  yes  |  |
 | first_name | string |  yes  |  |
 | last_name | string |  yes  |  |
 | mobile | number |  yes  |  |
 | phone | number |  yes  |  |
 | pincode | string |  yes  |  |
 | state | string |  yes  |  |
 

---

#### [OriginalFilter](#OriginalFilter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string |  no  |  |
 | affiliate_shipment_id | string |  no  |  |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | has_previous | boolean |  no  |  |
 | size | number |  no  |  |
 | total | number |  no  |  |
 | type | string |  no  |  |
 

---

#### [Page1](#Page1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  yes  |  |
 | has_next | boolean |  yes  |  |
 | item_total | number |  yes  |  |
 | page_type | string |  yes  |  |
 | size | number |  yes  |  |
 

---

#### [PaymentInfo](#PaymentInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_methods | [[PaymentMethod](#PaymentMethod)] |  no  |  |
 | primary_mode | string |  yes  |  |
 

---

#### [PaymentMethod](#PaymentMethod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number |  yes  |  |
 | collect_by | string |  yes  |  |
 | meta | string |  no  |  |
 | mode | string |  yes  |  |
 | name | string |  yes  |  |
 | refund_by | string |  yes  |  |
 | transaction_data | string |  no  |  |
 

---

#### [PaymentMethods](#PaymentMethods)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | collect_by | string |  no  |  |
 | mode | string |  no  |  |
 | refund_by | string |  no  |  |
 

---

#### [PaymentModeInfo](#PaymentModeInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string |  yes  |  |
 | type | string |  yes  |  |
 

---

#### [PDFLinks](#PDFLinks)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | b2b | string |  no  |  |
 | credit_note_url | string |  no  |  |
 | delivery_challan_a4 | string |  no  |  |
 | invoice | string |  no  |  |
 | invoice_a4 | string |  no  |  |
 | invoice_a6 | string |  no  |  |
 | invoice_pos | string |  no  |  |
 | invoice_type | string |  yes  |  |
 | label | string |  no  |  |
 | label_a4 | string |  no  |  |
 | label_a6 | string |  no  |  |
 | label_pos | string |  no  |  |
 | label_type | string |  yes  |  |
 | po_invoice | string |  no  |  |
 

---

#### [PhoneDetails](#PhoneDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | number |  no  |  |
 | mobile_number | string |  no  |  |
 

---

#### [PlatformBreakupValues](#PlatformBreakupValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  |  |
 | name | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [PlatformChannel](#PlatformChannel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string |  no  |  |
 | name | string |  no  |  |
 

---

#### [PlatformDeliveryAddress](#PlatformDeliveryAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string |  no  |  |
 | address2 | string |  no  |  |
 | address_category | string |  no  |  |
 | address_type | string |  no  |  |
 | area | string |  no  |  |
 | city | string |  no  |  |
 | contact_person | string |  no  |  |
 | country | string |  no  |  |
 | created_at | string |  no  |  |
 | email | string |  no  |  |
 | landmark | string |  no  |  |
 | latitude | number |  no  |  |
 | longitude | number |  no  |  |
 | phone | string |  no  |  |
 | pincode | string |  no  |  |
 | state | string |  no  |  |
 | updated_at | string |  no  |  |
 | version | string |  no  |  |
 

---

#### [PlatformItem](#PlatformItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | can_cancel | boolean |  no  |  |
 | can_return | boolean |  no  |  |
 | code | string |  no  |  |
 | color | string |  no  |  |
 | department_id | number |  no  |  |
 | id | number |  no  |  |
 | image | [string] |  no  |  |
 | images | [string] |  no  |  |
 | l1_category | [string] |  no  |  |
 | l3_category | number |  no  |  |
 | l3_category_name | string |  no  |  |
 | name | string |  no  |  |
 | size | string |  no  |  |
 

---

#### [PlatformOrderItems](#PlatformOrderItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | breakup_values | [[PlatformBreakupValues](#PlatformBreakupValues)] |  no  |  |
 | channel | [PlatformChannel](#PlatformChannel) |  no  |  |
 | meta | string |  no  |  |
 | order_created_time | string |  no  |  |
 | order_id | string |  no  |  |
 | order_value | number |  no  |  |
 | payment_mode | string |  no  |  |
 | shipments | [[PlatformShipment](#PlatformShipment)] |  no  |  |
 | total_order_value | number |  no  |  |
 | user_info | [UserDataInfo](#UserDataInfo) |  no  |  |
 

---

#### [PlatformOrderUpdate](#PlatformOrderUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_id | string |  yes  |  |
 

---

#### [PlatformShipment](#PlatformShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_details | [AffiliateDetails](#AffiliateDetails) |  no  |  |
 | bag_status_history | [[BagStatusHistory](#BagStatusHistory)] |  no  |  |
 | bags | [[OrderBags](#OrderBags)] |  no  |  |
 | billing_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | company_details | [CompanyDetails](#CompanyDetails) |  no  |  |
 | coupon | string |  no  |  |
 | custom_meta | [string] |  no  |  |
 | delivery_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | delivery_slot | string |  no  |  |
 | dp_details | [DPDetailsData](#DPDetailsData) |  no  |  |
 | enable_dp_tracking | boolean |  no  |  |
 | forward_shipment_id | string |  no  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  |
 | fulfilment_priority | number |  no  |  |
 | gst_details | [GSTDetailsData](#GSTDetailsData) |  no  |  |
 | invoice | [InvoiceInfo](#InvoiceInfo) |  no  |  |
 | invoice_id | string |  no  |  |
 | journey_type | string |  no  |  |
 | lock_status | boolean |  no  |  |
 | meta | [Meta](#Meta) |  no  |  |
 | operational_status | string |  no  |  |
 | order | [OrderDetailsData](#OrderDetailsData) |  no  |  |
 | ordering_store | [OrderingStoreDetails](#OrderingStoreDetails) |  no  |  |
 | packaging_type | string |  no  |  |
 | payment_methods | string |  no  |  |
 | payment_mode | string |  no  |  |
 | payments | [ShipmentPayments](#ShipmentPayments) |  no  |  |
 | picked_date | string |  no  |  |
 | platform_logo | string |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | priority_text | string |  no  |  |
 | shipment_id | string |  yes  |  |
 | shipment_images | [string] |  no  |  |
 | shipment_quantity | number |  no  |  |
 | shipment_status | string |  no  |  |
 | status | [ShipmentStatusData](#ShipmentStatusData) |  no  |  |
 | total_bags | number |  no  |  |
 | total_items | number |  no  |  |
 | tracking_list | [[TrackingList](#TrackingList)] |  no  |  |
 | user | [UserDataInfo](#UserDataInfo) |  no  |  |
 | user_agent | string |  no  |  |
 | vertical | string |  no  |  |
 

---

#### [PlatformShipmentReasonsResponse](#PlatformShipmentReasonsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reasons | [[Reason](#Reason)] |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [PlatformShipmentTrack](#PlatformShipmentTrack)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | meta | string |  no  |  |
 | results | [[PlatformTrack](#PlatformTrack)] |  no  |  |
 

---

#### [PlatformTrack](#PlatformTrack)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | account_name | string |  no  |  |
 | awb | string |  no  |  |
 | last_location_recieved_at | string |  no  |  |
 | meta | string |  no  |  |
 | raw_status | string |  no  |  |
 | reason | string |  no  |  |
 | shipment_type | string |  no  |  |
 | status | string |  no  |  |
 | updated_at | string |  no  |  |
 | updated_time | string |  no  |  |
 

---

#### [PlatformUserDetails](#PlatformUserDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | platform_user_employee_code | string |  no  |  |
 | platform_user_first_name | string |  no  |  |
 | platform_user_id | string |  no  |  |
 | platform_user_last_name | string |  no  |  |
 

---

#### [PostActivityHistory](#PostActivityHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [PostHistoryData](#PostHistoryData) |  yes  |  |
 | filters | [[PostHistoryFilters](#PostHistoryFilters)] |  yes  |  |
 

---

#### [PostHistoryData](#PostHistoryData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  |  |
 | user_name | string |  yes  |  |
 

---

#### [PostHistoryDict](#PostHistoryDict)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | activity_history | [PostActivityHistory](#PostActivityHistory) |  yes  |  |
 

---

#### [PostHistoryFilters](#PostHistoryFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier | string |  no  |  |
 | line_number | string |  no  |  |
 | shipment_id | string |  yes  |  |
 

---

#### [PostShipmentHistory](#PostShipmentHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | activity_history | [[PostHistoryDict](#PostHistoryDict)] |  no  |  |
 

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
 | transfer_price | number |  no  |  |
 | value_of_good | number |  no  |  |
 

---

#### [ProcessingDates](#ProcessingDates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | confirm_by_date | string |  no  |  |
 | customer_pickup_slot | string |  no  |  |
 | dispatch_after_date | string |  no  |  |
 | dispatch_by_date | string |  no  |  |
 | dp_pickup_slot | string |  no  |  |
 | pack_by_date | string |  no  |  |
 

---

#### [Products](#Products)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier | string |  no  |  |
 | line_number | number |  no  |  |
 | quantity | number |  no  |  |
 

---

#### [ProductsDataUpdates](#ProductsDataUpdates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  |  |
 | filters | [[ProductsDataUpdatesFilters](#ProductsDataUpdatesFilters)] |  no  |  |
 

---

#### [ProductsDataUpdatesFilters](#ProductsDataUpdatesFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier | string |  no  |  |
 | line_number | number |  no  |  |
 

---

#### [ProductsReasons](#ProductsReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [ProductsReasonsData](#ProductsReasonsData) |  no  |  |
 | filters | [[ProductsReasonsFilters](#ProductsReasonsFilters)] |  no  |  |
 

---

#### [ProductsReasonsData](#ProductsReasonsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason_id | number |  no  |  |
 | reason_text | string |  no  |  |
 

---

#### [ProductsReasonsFilters](#ProductsReasonsFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier | string |  no  |  |
 | line_number | number |  no  |  |
 | quantity | number |  no  |  |
 

---

#### [QuestionSet](#QuestionSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string |  no  |  |
 | id | number |  no  |  |
 

---

#### [Reason](#Reason)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string |  no  |  |
 | id | number |  no  |  |
 | qc_type | [string] |  no  |  |
 | question_set | [[QuestionSet](#QuestionSet)] |  no  |  |
 

---

#### [ReasonsData](#ReasonsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entities | [[EntitiesReasons](#EntitiesReasons)] |  no  |  |
 | products | [[ProductsReasons](#ProductsReasons)] |  no  |  |
 

---

#### [ResponseDetail](#ResponseDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | [string] |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [ReturnConfig](#ReturnConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | returnable | boolean |  no  |  |
 | time | number |  no  |  |
 | unit | string |  no  |  |
 

---

#### [SendSmsPayload](#SendSmsPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_id | number |  yes  |  |
 | data | [SmsDataPayload](#SmsDataPayload) |  no  |  |
 | slug | string |  yes  |  |
 

---

#### [Shipment](#Shipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | external_shipment_id | string |  no  |  |
 | line_items | [[LineItem](#LineItem)] |  yes  |  |
 | location_id | number |  yes  |  |
 | meta | string |  no  |  |
 | priority | number |  no  |  |
 | processing_dates | [ProcessingDates](#ProcessingDates) |  no  |  |
 

---

#### [ShipmentConfig](#ShipmentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  yes  |  |
 | identifier | string |  yes  |  |
 | journey | string |  yes  |  |
 | location_details | [LocationDetails](#LocationDetails) |  no  |  |
 | payment_mode | string |  yes  |  |
 | shipment | [[ShipmentDetails](#ShipmentDetails)] |  yes  |  |
 | source | string |  yes  |  |
 | to_pincode | string |  yes  |  |
 

---

#### [ShipmentData](#ShipmentData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_data | [ShipmentConfig](#ShipmentConfig) |  yes  |  |
 

---

#### [ShipmentDetail](#ShipmentDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_list | [number] |  no  |  |
 | id | number |  yes  |  |
 | meta | [Meta1](#Meta1) |  yes  |  |
 | remarks | string |  no  |  |
 | shipment_id | string |  no  |  |
 | status | string |  no  |  |
 

---

#### [ShipmentDetails](#ShipmentDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_shipment_id | string |  yes  |  |
 | articles | [[ArticleDetails1](#ArticleDetails1)] |  yes  |  |
 | box_type | string |  no  |  |
 | dp_id | number |  no  |  |
 | fulfillment_id | number |  yes  |  |
 | meta | string |  no  |  |
 | shipments | number |  yes  |  |
 

---

#### [ShipmentDetailsResponse](#ShipmentDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order | [OrderDict](#OrderDict) |  no  |  |
 | shipments | [[PlatformShipment](#PlatformShipment)] |  no  |  |
 | success | boolean |  yes  |  |
 

---

#### [ShipmentHistoryResponse](#ShipmentHistoryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | activity_history | [[HistoryDict](#HistoryDict)] |  yes  |  |
 

---

#### [ShipmentInfoResponse](#ShipmentInfoResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | shipments | [[PlatformShipment](#PlatformShipment)] |  no  |  |
 | success | boolean |  yes  |  |
 

---

#### [ShipmentInternalPlatformViewResponse](#ShipmentInternalPlatformViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | applied_filters | string |  no  |  |
 | filters | [[FiltersInfo](#FiltersInfo)] |  no  |  |
 | items | [[ShipmentItem](#ShipmentItem)] |  no  |  |
 | page | string |  no  |  |
 

---

#### [ShipmentItem](#ShipmentItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string |  no  |  |
 | bags | [[BagUnit](#BagUnit)] |  no  |  |
 | channel | string |  no  |  |
 | created_at | string |  yes  |  |
 | fulfilling_centre | string |  yes  |  |
 | fulfilling_store | [ShipmentItemFulFillingStore](#ShipmentItemFulFillingStore) |  no  |  |
 | id | string |  yes  |  |
 | payment_methods | string |  no  |  |
 | payment_mode_info | [PaymentModeInfo](#PaymentModeInfo) |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | shipment_created_at | string |  yes  |  |
 | shipment_id | string |  no  |  |
 | shipment_status | [ShipmentStatus](#ShipmentStatus) |  no  |  |
 | sla | string |  no  |  |
 | total_bags_count | number |  yes  |  |
 | total_shipments_in_order | number |  yes  |  |
 | user | [UserDataInfo](#UserDataInfo) |  no  |  |
 

---

#### [ShipmentItemFulFillingStore](#ShipmentItemFulFillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  yes  |  |
 | id | string |  yes  |  |
 

---

#### [ShipmentMeta](#ShipmentMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | assign_dp_from_sb | boolean |  no  |  |
 | auto_trigger_dp_assignment_acf | boolean |  yes  |  |
 | awb_number | string |  no  |  |
 | b2b_buyer_details | [BuyerDetails](#BuyerDetails) |  no  |  |
 | b2c_buyer_details | string |  no  |  |
 | bag_weight | string |  no  |  |
 | box_type | string |  no  |  |
 | debug_info | [DebugInfo](#DebugInfo) |  no  |  |
 | dp_id | string |  no  |  |
 | dp_name | string |  no  |  |
 | dp_options | string |  no  |  |
 | dp_sort_key | string |  no  |  |
 | due_date | string |  no  |  |
 | einvoice_info | [EinvoiceInfo](#EinvoiceInfo) |  no  |  |
 | ewaybill_info | string |  no  |  |
 | external | string |  no  |  |
 | formatted | [Formatted](#Formatted) |  no  |  |
 | forward_affiliate_order_id | string |  no  |  |
 | forward_affiliate_shipment_id | string |  no  |  |
 | fulfilment_priority_text | string |  no  |  |
 | lock_data | [LockData](#LockData) |  no  |  |
 | marketplace_store_id | string |  no  |  |
 | order_type | string |  no  |  |
 | packaging_name | string |  no  |  |
 | po_number | string |  no  |  |
 | return_affiliate_order_id | string |  no  |  |
 | return_affiliate_shipment_id | string |  no  |  |
 | return_awb_number | string |  no  |  |
 | return_details | string |  no  |  |
 | return_store_node | number |  no  |  |
 | same_store_available | boolean |  yes  |  |
 | shipment_volumetric_weight | number |  no  |  |
 | shipment_weight | number |  no  |  |
 | store_invoice_updated_date | string |  no  |  |
 | timestamp | [ShipmentTimeStamp](#ShipmentTimeStamp) |  no  |  |
 | weight | number |  yes  |  |
 

---

#### [ShipmentPayments](#ShipmentPayments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string |  no  |  |
 | mode | string |  no  |  |
 | source | string |  no  |  |
 

---

#### [ShipmentsRequest](#ShipmentsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data_updates | [DataUpdates](#DataUpdates) |  no  |  |
 | identifier | string |  yes  |  |
 | products | [[Products](#Products)] |  no  |  |
 | reasons | [ReasonsData](#ReasonsData) |  no  |  |
 

---

#### [ShipmentsResponse](#ShipmentsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |
 | exception | string |  no  |  |
 | final_state | string |  no  |  |
 | identifier | string |  no  |  |
 | message | string |  no  |  |
 | meta | string |  no  |  |
 | stack_trace | string |  no  |  |
 | status | number |  no  |  |
 

---

#### [ShipmentStatus](#ShipmentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | actual_status | string |  yes  |  |
 | hex_code | string |  yes  |  |
 | ops_status | string |  yes  |  |
 | status | string |  yes  |  |
 | title | string |  yes  |  |
 

---

#### [ShipmentStatusData](#ShipmentStatusData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_list | [string] |  no  |  |
 | created_at | string |  no  |  |
 | id | number |  no  |  |
 | shipment_id | string |  no  |  |
 | status | string |  no  |  |
 

---

#### [ShipmentTimeStamp](#ShipmentTimeStamp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | t_max | string |  no  |  |
 | t_min | string |  no  |  |
 

---

#### [ShippingInfo](#ShippingInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string |  yes  |  |
 | address2 | string |  no  |  |
 | address_type | string |  no  |  |
 | alternate_email | string |  no  |  |
 | alternate_mobile_number | string |  no  |  |
 | city | string |  yes  |  |
 | country | string |  yes  |  |
 | country_code | string |  no  |  |
 | customer_code | string |  no  |  |
 | external_customer_code | string |  no  |  |
 | first_name | string |  yes  |  |
 | floor_no | string |  no  |  |
 | gender | string |  no  |  |
 | geo_location | string |  no  |  |
 | house_no | string |  no  |  |
 | landmark | string |  no  |  |
 | last_name | string |  no  |  |
 | middle_name | string |  no  |  |
 | pincode | string |  yes  |  |
 | primary_email | string |  yes  |  |
 | primary_mobile_number | string |  yes  |  |
 | shipping_type | string |  no  |  |
 | slot | [string] |  no  |  |
 | state | string |  yes  |  |
 | state_code | string |  no  |  |
 | title | string |  no  |  |
 

---

#### [SmsDataPayload](#SmsDataPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_paid | number |  yes  |  |
 | brand_name | string |  yes  |  |
 | country_code | string |  yes  |  |
 | customer_name | string |  yes  |  |
 | message | string |  yes  |  |
 | order_id | string |  yes  |  |
 | payment_mode | string |  yes  |  |
 | phone_number | number |  yes  |  |
 | shipment_id | number |  yes  |  |
 

---

#### [StatuesRequest](#StatuesRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | exclude_bags_next_state | string |  no  |  |
 | shipments | [[ShipmentsRequest](#ShipmentsRequest)] |  no  |  |
 | status | string |  no  |  |
 

---

#### [StatuesResponse](#StatuesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipments | [[ShipmentsResponse](#ShipmentsResponse)] |  no  |  |
 

---

#### [Store](#Store)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string |  yes  |  |
 | address2 | string |  no  |  |
 | alohomora_user_id | number |  no  |  |
 | brand_id | any |  no  |  |
 | brand_store_tags | [string] |  no  |  |
 | city | string |  yes  |  |
 | code | string |  no  |  |
 | company_id | number |  yes  |  |
 | contact_person | string |  yes  |  |
 | country | string |  yes  |  |
 | created_at | string |  yes  |  |
 | fulfillment_channel | string |  yes  |  |
 | is_active | boolean |  no  |  |
 | is_archived | boolean |  no  |  |
 | is_enabled_for_recon | boolean |  no  |  |
 | latitude | number |  yes  |  |
 | location_type | string |  yes  |  |
 | login_username | string |  yes  |  |
 | longitude | number |  yes  |  |
 | mall_area | string |  no  |  |
 | mall_name | string |  no  |  |
 | meta | [StoreMeta](#StoreMeta) |  yes  |  |
 | name | string |  yes  |  |
 | order_integration_id | string |  no  |  |
 | packaging_material_count | number |  no  |  |
 | parent_store_id | number |  no  |  |
 | phone | number |  yes  |  |
 | pincode | string |  yes  |  |
 | s_id | string |  yes  |  |
 | state | string |  yes  |  |
 | store_active_from | string |  no  |  |
 | store_address_json | [StoreAddress](#StoreAddress) |  no  |  |
 | store_email | string |  yes  |  |
 | updated_at | string |  no  |  |
 | vat_no | string |  no  |  |
 

---

#### [StoreAddress](#StoreAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string |  yes  |  |
 | address2 | string |  no  |  |
 | address_category | string |  yes  |  |
 | address_type | string |  yes  |  |
 | area | string |  no  |  |
 | city | string |  yes  |  |
 | contact_person | string |  yes  |  |
 | country | string |  yes  |  |
 | country_code | string |  yes  |  |
 | created_at | string |  yes  |  |
 | email | string |  no  |  |
 | landmark | string |  no  |  |
 | latitude | number |  yes  |  |
 | longitude | number |  yes  |  |
 | phone | string |  yes  |  |
 | pincode | number |  yes  |  |
 | state | string |  yes  |  |
 | updated_at | string |  yes  |  |
 | version | string |  no  |  |
 

---

#### [StoreDocuments](#StoreDocuments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst | [Document](#Document) |  no  |  |
 

---

#### [StoreEinvoice](#StoreEinvoice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  yes  |  |
 | password | string |  no  |  |
 | user | string |  no  |  |
 | username | string |  no  |  |
 

---

#### [StoreEwaybill](#StoreEwaybill)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |
 

---

#### [StoreGstCredentials](#StoreGstCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | e_invoice | [StoreEinvoice](#StoreEinvoice) |  no  |  |
 | e_waybill | [StoreEwaybill](#StoreEwaybill) |  no  |  |
 

---

#### [StoreMeta](#StoreMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | additional_contact_details | string |  no  |  |
 | display_name | string |  yes  |  |
 | documents | [StoreDocuments](#StoreDocuments) |  no  |  |
 | einvoice_portal_details | [EInvoicePortalDetails](#EInvoicePortalDetails) |  no  |  |
 | ewaybill_portal_details | string |  no  |  |
 | gst_credentials | [StoreGstCredentials](#StoreGstCredentials) |  yes  |  |
 | gst_number | string |  no  |  |
 | notification_emails | [string] |  no  |  |
 | product_return_config | string |  no  |  |
 | stage | string |  yes  |  |
 | timing | [string] |  no  |  |
 

---

#### [StoreReassign](#StoreReassign)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_bag_id | string |  no  |  |
 | affiliate_id | string |  no  |  |
 | affiliate_order_id | string |  no  |  |
 | bag_id | number |  no  |  |
 | fynd_order_id | string |  no  |  |
 | item_id | string |  no  |  |
 | mongo_article_id | string |  no  |  |
 | reason_ids | [number] |  no  |  |
 | set_id | string |  no  |  |
 | store_id | number |  yes  |  |
 

---

#### [StoreReassignResponse](#StoreReassignResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [SubLane](#SubLane)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | actions | [string] |  no  |  |
 | index | number |  no  |  |
 | text | string |  no  |  |
 | total_items | number |  no  |  |
 | value | string |  no  |  |
 

---

#### [Success](#Success)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [SuccessResponse](#SuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [SuperLane](#SuperLane)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | options | [[SubLane](#SubLane)] |  no  |  |
 | text | string |  yes  |  |
 | total_items | number |  no  |  |
 | value | string |  yes  |  |
 

---

#### [Tax](#Tax)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  yes  |  |
 | breakup | [string] |  no  |  |
 | name | string |  yes  |  |
 | rate | number |  yes  |  |
 

---

#### [TaxDetails](#TaxDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gstin | string |  no  |  |
 | pan_no | string |  no  |  |
 

---

#### [TaxInfo](#TaxInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | b2b_gstin_number | string |  no  |  |
 | gstin | string |  no  |  |
 

---

#### [TrackingList](#TrackingList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_current | boolean |  no  |  |
 | is_passed | boolean |  no  |  |
 | status | string |  yes  |  |
 | text | string |  yes  |  |
 | time | string |  no  |  |
 

---

#### [TransactionData](#TransactionData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_paid | string |  no  |  |
 | currency | string |  no  |  |
 | entity | string |  no  |  |
 | payment_id | string |  no  |  |
 | status | string |  no  |  |
 | terminal_id | string |  no  |  |
 | transaction_id | string |  no  |  |
 | unique_reference_number | string |  no  |  |
 

---

#### [UpdateShipmentLockPayload](#UpdateShipmentLockPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  yes  |  |
 | action_type | string |  yes  |  |
 | entities | [[Entities](#Entities)] |  yes  |  |
 | entity_type | string |  yes  |  |
 

---

#### [UpdateShipmentLockResponse](#UpdateShipmentLockResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | check_response | [[CheckResponse](#CheckResponse)] |  no  |  |
 | message | string |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [UpdateShipmentStatusRequest](#UpdateShipmentStatusRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | force_transition | boolean |  no  |  |
 | lock_after_transition | boolean |  no  |  |
 | statuses | [[StatuesRequest](#StatuesRequest)] |  no  |  |
 | task | boolean |  no  |  |
 | unlock_before_transition | boolean |  no  |  |
 

---

#### [UpdateShipmentStatusResponseBody](#UpdateShipmentStatusResponseBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | statuses | [[StatuesResponse](#StatuesResponse)] |  no  |  |
 

---

#### [UploadConsent](#UploadConsent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | consent_url | string |  yes  |  |
 | manifest_id | string |  yes  |  |
 

---

#### [URL](#URL)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  no  |  |
 

---

#### [UserData](#UserData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | billing_user | [OrderUser](#OrderUser) |  no  |  |
 | shipping_user | [OrderUser](#OrderUser) |  no  |  |
 

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
 | name | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [UserDetailsData](#UserDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string |  yes  |  |
 | address1 | string |  no  |  |
 | address_type | string |  no  |  |
 | area | string |  no  |  |
 | city | string |  yes  |  |
 | country | string |  yes  |  |
 | email | string |  no  |  |
 | landmark | string |  no  |  |
 | name | string |  yes  |  |
 | phone | string |  yes  |  |
 | pincode | string |  yes  |  |
 | state | string |  yes  |  |
 

---

#### [Weight](#Weight)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_default | boolean |  no  |  |
 | shipping | number |  no  |  |
 | unit | string |  no  |  |
 

---




