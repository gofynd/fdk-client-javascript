




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
const promise = platformClient.order.bulkActionDetails({  batchId : value });

// Async/Await
const data = await platformClient.order.bulkActionDetails({  batchId : value });
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
const promise = platformClient.order.bulkActionProcessXlsxFile({  body : value });

// Async/Await
const data = await platformClient.order.bulkActionProcessXlsxFile({  body : value });
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
const promise = platformClient.order.checkOrderStatus({  body : value });

// Async/Await
const data = await platformClient.order.checkOrderStatus({  body : value });
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
const promise = platformClient.order.click2Call({  caller : value,
 receiver : value,
 bagId : value,
 callingTo : value,
 callerId : value });

// Async/Await
const data = await platformClient.order.click2Call({  caller : value,
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
const promise = platformClient.order.createChannelConfig({  body : value });

// Async/Await
const data = await platformClient.order.createChannelConfig({  body : value });
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
const promise = platformClient.order.createOrder({  body : value });

// Async/Await
const data = await platformClient.order.createOrder({  body : value });
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


### dispatchManifest




```javascript
// Promise
const promise = platformClient.order.dispatchManifest({  body : value });

// Async/Await
const data = await platformClient.order.dispatchManifest({  body : value });
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
const promise = platformClient.order.getAnnouncements({  date : value });

// Async/Await
const data = await platformClient.order.getAnnouncements({  date : value });
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
const promise = platformClient.application("<APPLICATION_ID>").order.getAppOrderShipmentDetails({  orderId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").order.getAppOrderShipmentDetails({  orderId : value });
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


### getBagById




```javascript
// Promise
const promise = platformClient.order.getBagById({  bagId : value,
 channelBagId : value,
 channelId : value });

// Async/Await
const data = await platformClient.order.getBagById({  bagId : value,
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
const promise = platformClient.order.getBags({  bagIds : value,
 shipmentIds : value,
 orderIds : value,
 channelBagIds : value,
 channelShipmentIds : value,
 channelOrderIds : value,
 channelId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.order.getBags({  bagIds : value,
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
const promise = platformClient.order.getBulkActionFailedReport({  batchId : value,
 reportType : value });

// Async/Await
const data = await platformClient.order.getBulkActionFailedReport({  batchId : value,
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
const promise = platformClient.order.getBulkInvoice({  batchId : value,
 docType : value });

// Async/Await
const data = await platformClient.order.getBulkInvoice({  batchId : value,
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
const promise = platformClient.order.getBulkInvoiceLabel({  batchId : value });

// Async/Await
const data = await platformClient.order.getBulkInvoiceLabel({  batchId : value });
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
const promise = platformClient.order.getBulkList({  lane : value,
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
const data = await platformClient.order.getBulkList({  lane : value,
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
const promise = platformClient.order.getBulkShipmentExcelFile({  lane : value,
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
const data = await platformClient.order.getBulkShipmentExcelFile({  lane : value,
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
const promise = platformClient.order.getChannelConfig();

// Async/Await
const data = await platformClient.order.getChannelConfig();
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


### getOrderById




```javascript
// Promise
const promise = platformClient.order.getOrderById({  orderId : value });

// Async/Await
const data = await platformClient.order.getOrderById({  orderId : value });
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
const promise = platformClient.order.getOrders({  lane : value,
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
const data = await platformClient.order.getOrders({  lane : value,
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


### getRoleBasedActions




```javascript
// Promise
const promise = platformClient.order.getRoleBasedActions();

// Async/Await
const data = await platformClient.order.getRoleBasedActions();
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
const promise = platformClient.order.getShipmentById({  channelShipmentId : value,
 shipmentId : value,
 orderingCompanyId : value,
 requestByExt : value });

// Async/Await
const data = await platformClient.order.getShipmentById({  channelShipmentId : value,
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
const promise = platformClient.order.getShipmentHistory({  shipmentId : value,
 bagId : value });

// Async/Await
const data = await platformClient.order.getShipmentHistory({  shipmentId : value,
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
const promise = platformClient.order.getShipmentReasons({  shipmentId : value,
 bagId : value,
 state : value });

// Async/Await
const data = await platformClient.order.getShipmentReasons({  shipmentId : value,
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
const promise = platformClient.order.getShipments({  lane : value,
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
const data = await platformClient.order.getShipments({  lane : value,
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
const promise = platformClient.order.getfilters({  view : value,
 groupEntity : value });

// Async/Await
const data = await platformClient.order.getfilters({  view : value,
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
const promise = platformClient.order.invalidateShipmentCache({  body : value });

// Async/Await
const data = await platformClient.order.invalidateShipmentCache({  body : value });
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


### platformManualAssignDPToShipment




```javascript
// Promise
const promise = platformClient.order.platformManualAssignDPToShipment({  body : value });

// Async/Await
const data = await platformClient.order.platformManualAssignDPToShipment({  body : value });
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
const promise = platformClient.order.postShipmentHistory({  body : value });

// Async/Await
const data = await platformClient.order.postShipmentHistory({  body : value });
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
const promise = platformClient.order.processManifest({  body : value });

// Async/Await
const data = await platformClient.order.processManifest({  body : value });
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
const promise = platformClient.order.reassignLocation({  body : value });

// Async/Await
const data = await platformClient.order.reassignLocation({  body : value });
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
const promise = platformClient.order.sendSmsNinja({  body : value });

// Async/Await
const data = await platformClient.order.sendSmsNinja({  body : value });
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
const promise = platformClient.order.sendSmsNinjaPlatform();

// Async/Await
const data = await platformClient.order.sendSmsNinjaPlatform();
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
const promise = platformClient.application("<APPLICATION_ID>").order.trackPlatformShipment({  shipmentId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").order.trackPlatformShipment({  shipmentId : value });
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
const promise = platformClient.order.updateAddress({  shipmentId : value,
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
const data = await platformClient.order.updateAddress({  shipmentId : value,
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
const promise = platformClient.order.updatePackagingDimensions({  body : value });

// Async/Await
const data = await platformClient.order.updatePackagingDimensions({  body : value });
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
const promise = platformClient.order.updateShipmentLock({  body : value });

// Async/Await
const data = await platformClient.order.updateShipmentLock({  body : value });
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
const promise = platformClient.order.updateShipmentStatus({  body : value });

// Async/Await
const data = await platformClient.order.updateShipmentStatus({  body : value });
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
const promise = platformClient.order.uploadConsent({  body : value });

// Async/Await
const data = await platformClient.order.uploadConsent({  body : value });
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


#### [ActionInfo](#ActionInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | display_text | string |  no  |  |
 | id | number |  no  |  |
 | slug | string |  no  |  |
 

---

#### [Affiliate](#Affiliate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | config | [AffiliateConfig](#AffiliateConfig)? |  yes  |  |
 | id | string |  no  |  |
 | token | string |  no  |  |
 

---

#### [AffiliateAppConfig](#AffiliateAppConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_at | string |  no  |  |
 | description | string? |  yes  |  |
 | id | string |  no  |  |
 | meta | [[AffiliateAppConfigMeta](#AffiliateAppConfigMeta)]? |  yes  |  |
 | name | string |  no  |  |
 | owner | string |  no  |  |
 | secret | string |  no  |  |
 | token | string |  no  |  |
 | updated_at | string |  no  |  |
 

---

#### [AffiliateAppConfigMeta](#AffiliateAppConfigMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [AffiliateBag](#AffiliateBag)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | affiliate_meta | string |  no  |  |
 | affiliate_store_id | string |  no  |  |
 | amount_paid | number |  no  |  |
 | avl_qty | number |  no  |  |
 | company_id | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | discount | number |  no  |  |
 | fynd_store_id | string |  no  |  |
 | hsn_code_id | string |  no  |  |
 | identifier | string |  no  |  |
 | item_id | number |  no  |  |
 | item_size | string |  no  |  |
 | modified_on | string |  no  |  |
 | pdf_links | [MarketPlacePdf](#MarketPlacePdf)? |  yes  |  |
 | price_effective | number |  no  |  |
 | price_marked | number |  no  |  |
 | quantity | number |  no  |  |
 | seller_identifier | string |  no  |  |
 | sku | string |  no  |  |
 | store_id | number |  no  |  |
 | transfer_price | number |  no  |  |
 | unit_price | number |  no  |  |
 

---

#### [AffiliateBagDetails](#AffiliateBagDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_bag_id | string |  no  |  |
 | affiliate_meta | [AffiliateMeta](#AffiliateMeta) |  no  |  |
 | affiliate_order_id | string |  no  |  |
 | employee_discount | number? |  yes  |  |
 | loyalty_discount | number? |  yes  |  |
 

---

#### [AffiliateConfig](#AffiliateConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app | [AffiliateAppConfig](#AffiliateAppConfig)? |  yes  |  |
 | inventory | [AffiliateInventoryConfig](#AffiliateInventoryConfig)? |  yes  |  |
 

---

#### [AffiliateDetails](#AffiliateDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ad_id | string? |  yes  |  |
 | affiliate_bag_id | string |  no  |  |
 | affiliate_id | string? |  yes  |  |
 | affiliate_meta | [AffiliateMeta](#AffiliateMeta) |  no  |  |
 | affiliate_order_id | string |  no  |  |
 | affiliate_shipment_id | string |  no  |  |
 | affiliate_store_id | string |  no  |  |
 | company_affiliate_tag | string? |  yes  |  |
 | pdf_links | [PDFLinks](#PDFLinks)? |  yes  |  |
 | shipment_meta | [ShipmentMeta](#ShipmentMeta) |  no  |  |
 

---

#### [AffiliateInventoryArticleAssignmentConfig](#AffiliateInventoryArticleAssignmentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | post_order_reassignment | boolean? |  yes  |  |
 

---

#### [AffiliateInventoryConfig](#AffiliateInventoryConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article_assignment | [AffiliateInventoryArticleAssignmentConfig](#AffiliateInventoryArticleAssignmentConfig)? |  yes  |  |
 | inventory | [AffiliateInventoryStoreConfig](#AffiliateInventoryStoreConfig)? |  yes  |  |
 | logistics | [AffiliateInventoryLogisticsConfig](#AffiliateInventoryLogisticsConfig)? |  yes  |  |
 | order | [AffiliateInventoryOrderConfig](#AffiliateInventoryOrderConfig)? |  yes  |  |
 | payment | [AffiliateInventoryPaymentConfig](#AffiliateInventoryPaymentConfig)? |  yes  |  |
 

---

#### [AffiliateInventoryLogisticsConfig](#AffiliateInventoryLogisticsConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dp_assignment | boolean? |  yes  |  |
 

---

#### [AffiliateInventoryOrderConfig](#AffiliateInventoryOrderConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | force_reassignment | boolean? |  yes  |  |
 

---

#### [AffiliateInventoryPaymentConfig](#AffiliateInventoryPaymentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mode_of_payment | string? |  yes  |  |
 | source | string? |  yes  |  |
 

---

#### [AffiliateInventoryStoreConfig](#AffiliateInventoryStoreConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store | string? |  yes  |  |
 

---

#### [AffiliateMeta](#AffiliateMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | box_type | string? |  yes  |  |
 | channel_order_id | string? |  yes  |  |
 | channel_shipment_id | string? |  yes  |  |
 | coupon_code | string? |  yes  |  |
 | due_date | string? |  yes  |  |
 | employee_discount | number? |  yes  |  |
 | is_priority | boolean? |  yes  |  |
 | loyalty_discount | number? |  yes  |  |
 | order_item_id | string? |  yes  |  |
 | quantity | number? |  yes  |  |
 | size_level_total_qty | number? |  yes  |  |
 

---

#### [AffiliateStoreIdMapping](#AffiliateStoreIdMapping)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | marketplace_store_id | string |  no  |  |
 | store_id | number |  no  |  |
 

---

#### [AnnouncementResponse](#AnnouncementResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number? |  yes  |  |
 | created_at | string? |  yes  |  |
 | description | string? |  yes  |  |
 | from_datetime | string? |  yes  |  |
 | id | number |  no  |  |
 | logo_url | string? |  yes  |  |
 | platform_id | string? |  yes  |  |
 | platform_name | string? |  yes  |  |
 | title | string? |  yes  |  |
 | to_datetime | string? |  yes  |  |
 

---

#### [AnnouncementsResponse](#AnnouncementsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | announcements | [[AnnouncementResponse](#AnnouncementResponse)]? |  yes  |  |
 

---

#### [AppliedPromos](#AppliedPromos)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number? |  yes  |  |
 | article_quantity | number? |  yes  |  |
 | buy_rules | [[BuyRules](#BuyRules)]? |  yes  |  |
 | discount_rules | [[DiscountRules](#DiscountRules)]? |  yes  |  |
 | mrp_promotion | boolean? |  yes  |  |
 | promo_id | string? |  yes  |  |
 | promotion_name | string? |  yes  |  |
 | promotion_type | string? |  yes  |  |
 

---

#### [Article](#Article)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | a_set | string? |  yes  |  |
 | child_details | string? |  yes  |  |
 | code | string? |  yes  |  |
 | dimensions | [Dimensions](#Dimensions)? |  yes  |  |
 | esp_modified | any? |  yes  |  |
 | identifiers | [Identifier](#Identifier) |  no  |  |
 | is_set | boolean? |  yes  |  |
 | raw_meta | any? |  yes  |  |
 | return_config | [ReturnConfig](#ReturnConfig)? |  yes  |  |
 | seller_identifier | string |  no  |  |
 | size | string |  no  |  |
 | uid | string |  no  |  |
 | weight | [Weight](#Weight)? |  yes  |  |
 

---

#### [ArticleDetails](#ArticleDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string? |  yes  |  |
 

---

#### [ArticleDetails1](#ArticleDetails1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | attributes | string |  no  |  |
 | brand_id | number |  no  |  |
 | category | string |  no  |  |
 | dimension | string |  no  |  |
 | quantity | number |  no  |  |
 | weight | string |  no  |  |
 

---

#### [Attributes](#Attributes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_name | string? |  yes  |  |
 | essential | string? |  yes  |  |
 | gender | [string]? |  yes  |  |
 | marketer_address | string? |  yes  |  |
 | marketer_name | string? |  yes  |  |
 | name | string? |  yes  |  |
 | primary_color | string? |  yes  |  |
 | primary_color_hex | string? |  yes  |  |
 | primary_material | string? |  yes  |  |
 

---

#### [B2BPODetails](#B2BPODetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | docker_number | string? |  yes  |  |
 | item_base_price | number? |  yes  |  |
 | partial_can_ret | boolean? |  yes  |  |
 | po_line_amount | number? |  yes  |  |
 | po_tax_amount | number? |  yes  |  |
 | total_gst_percentage | number? |  yes  |  |
 

---

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

#### [BagDetailsPlatformResponse](#BagDetailsPlatformResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_bag_details | [AffiliateBagDetails](#AffiliateBagDetails) |  no  |  |
 | affiliate_details | [AffiliateDetails](#AffiliateDetails)? |  yes  |  |
 | applied_promos | [string]? |  yes  |  |
 | article | [Article](#Article) |  no  |  |
 | article_details | [ArticleDetails](#ArticleDetails)? |  yes  |  |
 | b_id | number |  no  |  |
 | b_type | string? |  yes  |  |
 | bag_status | [[BagStatusHistory](#BagStatusHistory)] |  no  |  |
 | bag_status_history | [BagStatusHistory](#BagStatusHistory)? |  yes  |  |
 | bag_update_time | number? |  yes  |  |
 | brand | [Brand](#Brand) |  no  |  |
 | current_operational_status | [BagStatusHistory](#BagStatusHistory) |  no  |  |
 | current_status | [BagStatusHistory](#BagStatusHistory) |  no  |  |
 | dates | [Dates](#Dates)? |  yes  |  |
 | display_name | string? |  yes  |  |
 | entity_type | string? |  yes  |  |
 | financial_breakup | [[FinancialBreakup](#FinancialBreakup)] |  no  |  |
 | gst_details | [BagGSTDetails](#BagGSTDetails) |  no  |  |
 | identifier | string? |  yes  |  |
 | item | [Item](#Item) |  no  |  |
 | journey_type | string |  no  |  |
 | line_number | number? |  yes  |  |
 | meta | [BagMeta](#BagMeta)? |  yes  |  |
 | no_of_bags_order | number? |  yes  |  |
 | operational_status | string? |  yes  |  |
 | order_integration_id | string? |  yes  |  |
 | ordering_store | [Store](#Store)? |  yes  |  |
 | original_bag_list | [number]? |  yes  |  |
 | parent_promo_bags | string? |  yes  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | qc_required | any? |  yes  |  |
 | quantity | number? |  yes  |  |
 | reasons | [string]? |  yes  |  |
 | restore_coupon | boolean? |  yes  |  |
 | restore_promos | string? |  yes  |  |
 | seller_identifier | string? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | status | [BagReturnableCancelableStatus](#BagReturnableCancelableStatus) |  no  |  |
 | tags | [string]? |  yes  |  |
 

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

#### [BagGSTDetails](#BagGSTDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_calculated_amount | number |  no  |  |
 | cgst_gst_fee | string |  no  |  |
 | cgst_tax_percentage | number |  no  |  |
 | gst_fee | number |  no  |  |
 | gst_tag | string |  no  |  |
 | gst_tax_percentage | number |  no  |  |
 | gstin_code | string? |  yes  |  |
 | hsn_code | string |  no  |  |
 | hsn_code_id | string |  no  |  |
 | igst_gst_fee | string |  no  |  |
 | igst_tax_percentage | number |  no  |  |
 | is_default_hsn_code | boolean? |  yes  |  |
 | sgst_gst_fee | string |  no  |  |
 | sgst_tax_percentage | number |  no  |  |
 | tax_collected_at_source | number |  no  |  |
 | value_of_good | number |  no  |  |
 

---

#### [BagMeta](#BagMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | b2b_po_details | [B2BPODetails](#B2BPODetails)? |  yes  |  |
 

---

#### [BagReturnableCancelableStatus](#BagReturnableCancelableStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | can_be_cancelled | boolean |  no  |  |
 | enable_tracking | boolean |  no  |  |
 | is_active | boolean |  no  |  |
 | is_customer_return_allowed | boolean |  no  |  |
 | is_returnable | boolean |  no  |  |
 

---

#### [Bags](#Bags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_bag_id | string? |  yes  |  |
 | affiliate_order_id | string? |  yes  |  |
 | bag_id | number? |  yes  |  |
 | is_locked | boolean? |  yes  |  |
 

---

#### [BagStateMapper](#BagStateMapper)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_display_name | string? |  yes  |  |
 | app_facing | boolean? |  yes  |  |
 | app_state_name | string? |  yes  |  |
 | bs_id | number |  no  |  |
 | display_name | string |  no  |  |
 | is_active | boolean? |  yes  |  |
 | journey_type | string |  no  |  |
 | name | string |  no  |  |
 | notify_customer | boolean? |  yes  |  |
 | state_type | string |  no  |  |
 

---

#### [BagStatusHistory](#BagStatusHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_display_name | string? |  yes  |  |
 | bag_id | number? |  yes  |  |
 | bag_state_mapper | [BagStateMapper](#BagStateMapper)? |  yes  |  |
 | bsh_id | number? |  yes  |  |
 | created_at | string? |  yes  |  |
 | delivery_awb_number | string? |  yes  |  |
 | delivery_partner_id | number? |  yes  |  |
 | display_name | string? |  yes  |  |
 | forward | boolean? |  yes  |  |
 | kafka_sync | boolean? |  yes  |  |
 | reasons | [string]? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | state_id | number? |  yes  |  |
 | state_type | string? |  yes  |  |
 | status | string |  no  |  |
 | store_id | number? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [BagUnit](#BagUnit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_id | number |  no  |  |
 | can_cancel | boolean? |  yes  |  |
 | can_return | boolean? |  yes  |  |
 | gst | [GSTDetailsData](#GSTDetailsData)? |  yes  |  |
 | item | [PlatformItem](#PlatformItem)? |  yes  |  |
 | item_quantity | number |  no  |  |
 | ordering_channel | string |  no  |  |
 | prices | [Prices](#Prices)? |  yes  |  |
 | shipment_id | string |  no  |  |
 | status | string |  no  |  |
 | total_shipment_bags | number |  no  |  |
 

---

#### [BaseResponse](#BaseResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [BillingInfo](#BillingInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string |  no  |  |
 | address2 | string? |  yes  |  |
 | alternate_email | string? |  yes  |  |
 | alternate_mobile_number | string? |  yes  |  |
 | city | string |  no  |  |
 | country | string |  no  |  |
 | country_code | string? |  yes  |  |
 | customer_code | string? |  yes  |  |
 | external_customer_code | string? |  yes  |  |
 | first_name | string |  no  |  |
 | floor_no | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | house_no | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | middle_name | string? |  yes  |  |
 | pincode | string |  no  |  |
 | primary_email | string |  no  |  |
 | primary_mobile_number | string |  no  |  |
 | state | string |  no  |  |
 | state_code | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [BillingStaffDetails](#BillingStaffDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | employee_code | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | staff_id | number? |  yes  |  |
 | user | string? |  yes  |  |
 

---

#### [Brand](#Brand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_id | number |  no  |  |
 | brand_name | string |  no  |  |
 | company | string |  no  |  |
 | created_on | number? |  yes  |  |
 | credit_note_allowed | boolean? |  yes  |  |
 | credit_note_expiry_days | number? |  yes  |  |
 | invoice_prefix | string? |  yes  |  |
 | is_virtual_invoice | boolean? |  yes  |  |
 | logo | string? |  yes  |  |
 | modified_on | number? |  yes  |  |
 | pickup_location | string? |  yes  |  |
 | script_last_ran | string? |  yes  |  |
 | start_date | string? |  yes  |  |
 

---

#### [BulkActionDetailsDataField](#BulkActionDetailsDataField)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | batch_id | string? |  yes  |  |
 | company_id | string? |  yes  |  |
 | failed_shipments_count | number? |  yes  |  |
 | processing_shipments_count | number? |  yes  |  |
 | successful_shipment_ids | [string]? |  yes  |  |
 | successful_shipments_count | number? |  yes  |  |
 | total_shipments_count | number? |  yes  |  |
 

---

#### [BulkActionDetailsResponse](#BulkActionDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[BulkActionDetailsDataField](#BulkActionDetailsDataField)]? |  yes  |  |
 | error | [string]? |  yes  |  |
 | failed_records | [string]? |  yes  |  |
 | message | string? |  yes  |  |
 | status | boolean? |  yes  |  |
 | success | string? |  yes  |  |
 | uploaded_by | string? |  yes  |  |
 | uploaded_on | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [BulkActionPayload](#BulkActionPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  no  |  |
 

---

#### [BulkActionResponse](#BulkActionResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | status | boolean? |  yes  |  |
 

---

#### [BulkInvoiceLabelResponse](#BulkInvoiceLabelResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | batch_id | string |  no  |  |
 | company_id | string? |  yes  |  |
 | data | string? |  yes  |  |
 | do_invoice_label_generated | boolean |  no  |  |
 | invoice | string? |  yes  |  |
 | invoice_status | string? |  yes  |  |
 | label | string? |  yes  |  |
 | store_code | string? |  yes  |  |
 | store_id | string? |  yes  |  |
 | store_name | string? |  yes  |  |
 

---

#### [BulkInvoicingResponse](#BulkInvoicingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | success | boolean |  no  |  |
 

---

#### [bulkListingData](#bulkListingData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | batch_id | string? |  yes  |  |
 | company_id | number? |  yes  |  |
 | excel_url | string? |  yes  |  |
 | failed | number? |  yes  |  |
 | failed_shipments | [string]? |  yes  |  |
 | file_name | string? |  yes  |  |
 | id | string? |  yes  |  |
 | processing | number? |  yes  |  |
 | processing_shipments | [string]? |  yes  |  |
 | status | string? |  yes  |  |
 | store_code | string? |  yes  |  |
 | store_id | number? |  yes  |  |
 | store_name | string? |  yes  |  |
 | successful | number? |  yes  |  |
 | successful_shipments | [string]? |  yes  |  |
 | total | number? |  yes  |  |
 | uploaded_on | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 | user_name | string? |  yes  |  |
 

---

#### [BulkListingPage](#BulkListingPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | has_previous | boolean? |  yes  |  |
 | size | number? |  yes  |  |
 | total | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [BulkListingResponse](#BulkListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[bulkListingData](#bulkListingData)]? |  yes  |  |
 | error | string? |  yes  |  |
 | page | [BulkListingPage](#BulkListingPage)? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [BuyerDetails](#BuyerDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string |  no  |  |
 | ajio_site_id | string? |  yes  |  |
 | city | string |  no  |  |
 | gstin | string |  no  |  |
 | name | string |  no  |  |
 | pincode | number |  no  |  |
 | state | string |  no  |  |
 

---

#### [BuyRules](#BuyRules)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cart_conditions | string? |  yes  |  |
 | item_criteria | [ItemCriterias](#ItemCriterias)? |  yes  |  |
 

---

#### [Charge](#Charge)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  no  |  |
 | code | string? |  yes  |  |
 | name | string |  no  |  |
 | tax | [Tax](#Tax)? |  yes  |  |
 | type | string |  no  |  |
 

---

#### [CheckResponse](#CheckResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string? |  yes  |  |
 | affiliate_shipment_id | string? |  yes  |  |
 | bags | [[Bags](#Bags)]? |  yes  |  |
 | is_bag_locked | boolean? |  yes  |  |
 | is_shipment_locked | boolean? |  yes  |  |
 | lock_status | boolean? |  yes  |  |
 | original_filter | [OriginalFilter](#OriginalFilter)? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | status | string? |  yes  |  |
 

---

#### [Click2CallResponse](#Click2CallResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | call_id | string |  no  |  |
 | status | boolean |  no  |  |
 

---

#### [CompanyDetails](#CompanyDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string? |  yes  |  |
 | company_cin | string? |  yes  |  |
 | company_contact | [ContactDetails](#ContactDetails)? |  yes  |  |
 | company_gst | string? |  yes  |  |
 | company_id | number? |  yes  |  |
 | company_name | string? |  yes  |  |
 

---

#### [ContactDetails](#ContactDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | emails | [string]? |  yes  |  |
 | phone | [[PhoneDetails](#PhoneDetails)]? |  yes  |  |
 

---

#### [CreateChannelConfig](#CreateChannelConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dp_configuration | [DpConfiguration](#DpConfiguration)? |  yes  |  |
 | location_reassignment | boolean? |  yes  |  |
 | lock_states | [string]? |  yes  |  |
 | logo_url | string? |  yes  |  |
 | payment_info | [CreateChannelPaymentInfo](#CreateChannelPaymentInfo)? |  yes  |  |
 | shipment_assignment | string? |  yes  |  |
 

---

#### [CreateChannelConfigData](#CreateChannelConfigData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | config_data | [CreateChannelConfig](#CreateChannelConfig)? |  yes  |  |
 

---

#### [CreateChannelConfigResponse](#CreateChannelConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | acknowledged | boolean? |  yes  |  |
 | is_inserted | boolean? |  yes  |  |
 | is_upserted | boolean? |  yes  |  |
 

---

#### [CreateChannelConifgErrorResponse](#CreateChannelConifgErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string? |  yes  |  |
 

---

#### [CreateChannelPaymentInfo](#CreateChannelPaymentInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mode_of_payment | string? |  yes  |  |
 | payment_methods | [[PaymentMethods](#PaymentMethods)]? |  yes  |  |
 | source | string? |  yes  |  |
 

---

#### [CreateOrderAPI](#CreateOrderAPI)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | billing_info | [BillingInfo](#BillingInfo) |  no  |  |
 | charges | [[Charge](#Charge)]? |  yes  |  |
 | config | string? |  yes  |  |
 | currency_info | string? |  yes  |  |
 | external_creation_date | string? |  yes  |  |
 | external_order_id | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | payment_info | [PaymentInfo](#PaymentInfo) |  no  |  |
 | shipments | [[Shipment](#Shipment)] |  no  |  |
 | shipping_info | [ShippingInfo](#ShippingInfo) |  no  |  |
 | tax_info | [TaxInfo](#TaxInfo)? |  yes  |  |
 

---

#### [CreateOrderErrorReponse](#CreateOrderErrorReponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | exception | string? |  yes  |  |
 | info | any? |  yes  |  |
 | message | string |  no  |  |
 | meta | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | stack_trace | string? |  yes  |  |
 | status | number |  no  |  |
 

---

#### [CreateOrderPayload](#CreateOrderPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string |  no  |  |
 | order_config | [OrderConfig](#OrderConfig) |  no  |  |
 | order_info | [OrderInfo](#OrderInfo) |  no  |  |
 

---

#### [CreateOrderResponse](#CreateOrderResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_order_id | string |  no  |  |
 

---

#### [CurrentStatus](#CurrentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_id | number? |  yes  |  |
 | bag_state_mapper | [BagStateMapper](#BagStateMapper)? |  yes  |  |
 | created_at | string? |  yes  |  |
 | current_status_id | number |  no  |  |
 | delivery_awb_number | string? |  yes  |  |
 | delivery_partner_id | number? |  yes  |  |
 | kafka_sync | boolean? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | state_id | number? |  yes  |  |
 | state_type | string? |  yes  |  |
 | status | string? |  yes  |  |
 | store_id | number? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [DataUpdates](#DataUpdates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entities | [[EntitiesDataUpdates](#EntitiesDataUpdates)]? |  yes  |  |
 | products | [[ProductsDataUpdates](#ProductsDataUpdates)]? |  yes  |  |
 

---

#### [Dates](#Dates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | delivery_date | any? |  yes  |  |
 | order_created | string? |  yes  |  |
 

---

#### [DebugInfo](#DebugInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | stormbreaker_uuid | string? |  yes  |  |
 

---

#### [Dimensions](#Dimensions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | height | number? |  yes  |  |
 | is_default | boolean? |  yes  |  |
 | length | number? |  yes  |  |
 | unit | string? |  yes  |  |
 | width | number? |  yes  |  |
 

---

#### [DiscountRules](#DiscountRules)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string? |  yes  |  |
 | value | number? |  yes  |  |
 

---

#### [DispatchManifest](#DispatchManifest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | manifest_id | string |  no  |  |
 

---

#### [Document](#Document)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ds_type | string |  no  |  |
 | legal_name | string |  no  |  |
 | url | string? |  yes  |  |
 | value | string |  no  |  |
 | verified | boolean |  no  |  |
 

---

#### [DpConfiguration](#DpConfiguration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipping_by | string? |  yes  |  |
 

---

#### [DPDetailsData](#DPDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | awb_no | string? |  yes  |  |
 | country | string? |  yes  |  |
 | eway_bill_id | string? |  yes  |  |
 | gst_tag | string? |  yes  |  |
 | id | number? |  yes  |  |
 | name | string? |  yes  |  |
 | pincode | string? |  yes  |  |
 | track_url | string? |  yes  |  |
 

---

#### [EinvoiceInfo](#EinvoiceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credit_note | string? |  yes  |  |
 | invoice | string? |  yes  |  |
 

---

#### [EInvoicePortalDetails](#EInvoicePortalDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | password | string? |  yes  |  |
 | user | string? |  yes  |  |
 | username | string? |  yes  |  |
 

---

#### [Entities](#Entities)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_bag_id | string? |  yes  |  |
 | affiliate_id | string? |  yes  |  |
 | affiliate_order_id | string? |  yes  |  |
 | affiliate_shipment_id | string? |  yes  |  |
 | id | string? |  yes  |  |
 | reason_text | string |  no  |  |
 

---

#### [EntitiesDataUpdates](#EntitiesDataUpdates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string? |  yes  |  |
 | filters | [string]? |  yes  |  |
 

---

#### [EntitiesReasons](#EntitiesReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [EntityReasonData](#EntityReasonData)? |  yes  |  |
 | filters | [string]? |  yes  |  |
 

---

#### [EntityReasonData](#EntityReasonData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason_id | number? |  yes  |  |
 | reason_text | string? |  yes  |  |
 

---

#### [Error](#Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [ErrorDetail](#ErrorDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [ErrorResponse](#ErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string |  no  |  |
 | message | string |  no  |  |
 

---

#### [ErrorResponse1](#ErrorResponse1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error_trace | string? |  yes  |  |
 | message | string |  no  |  |
 | status | number |  no  |  |
 

---

#### [FileResponse](#FileResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cdn | [URL](#URL)? |  yes  |  |
 | content_type | string? |  yes  |  |
 | file_name | string? |  yes  |  |
 | file_path | string? |  yes  |  |
 | method | string? |  yes  |  |
 | namespace | string? |  yes  |  |
 | operation | string? |  yes  |  |
 | size | number? |  yes  |  |
 | tags | [string]? |  yes  |  |
 | upload | [FileUploadResponse](#FileUploadResponse)? |  yes  |  |
 

---

#### [FileUploadResponse](#FileUploadResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | expiry | number? |  yes  |  |
 | url | string? |  yes  |  |
 

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
 | advance | [string]? |  yes  |  |
 

---

#### [FinancialBreakup](#FinancialBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | added_to_fynd_cash | boolean |  no  |  |
 | amount_paid | number |  no  |  |
 | amount_paid_roundoff | number? |  yes  |  |
 | brand_calculated_amount | number |  no  |  |
 | cashback | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | cod_charges | number |  no  |  |
 | coupon_effective_discount | number |  no  |  |
 | coupon_value | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | discount | number |  no  |  |
 | fynd_credits | number |  no  |  |
 | gst_fee | number |  no  |  |
 | gst_tag | string |  no  |  |
 | gst_tax_percentage | number |  no  |  |
 | hsn_code | string |  no  |  |
 | identifiers | [Identifier](#Identifier) |  no  |  |
 | item_name | string |  no  |  |
 | price_effective | number |  no  |  |
 | price_marked | number |  no  |  |
 | promotion_effective_discount | number |  no  |  |
 | refund_credit | number |  no  |  |
 | size | string |  no  |  |
 | tax_collected_at_source | number? |  yes  |  |
 | total_units | number |  no  |  |
 | transfer_price | number |  no  |  |
 | value_of_good | number |  no  |  |
 

---

#### [Formatted](#Formatted)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | f_max | string? |  yes  |  |
 | f_min | string? |  yes  |  |
 

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
 | id | number |  no  |  |
 | meta | string |  no  |  |
 | phone | string |  no  |  |
 | pincode | string |  no  |  |
 | state | string |  no  |  |
 | store_name | string |  no  |  |
 

---

#### [FyndOrderIdList](#FyndOrderIdList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_order_id | [string]? |  yes  |  |
 

---

#### [GetActionsResponse](#GetActionsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | permissions | [ActionInfo](#ActionInfo) |  no  |  |
 

---

#### [GetBagsPlatformResponse](#GetBagsPlatformResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[BagDetailsPlatformResponse](#BagDetailsPlatformResponse)] |  no  |  |
 | page | [Page1](#Page1) |  no  |  |
 

---

#### [GSTDetailsData](#GSTDetailsData)

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
 | bag_id | number? |  yes  |  |
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

#### [Identifier](#Identifier)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ean | string? |  yes  |  |
 

---

#### [InvalidateShipmentCacheNestedResponse](#InvalidateShipmentCacheNestedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string? |  yes  |  |
 | message | string? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | status | number? |  yes  |  |
 

---

#### [InvalidateShipmentCachePayload](#InvalidateShipmentCachePayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_ids | [string] |  no  |  |
 

---

#### [InvalidateShipmentCacheResponse](#InvalidateShipmentCacheResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | response | [[InvalidateShipmentCacheNestedResponse](#InvalidateShipmentCacheNestedResponse)]? |  yes  |  |
 

---

#### [InvoiceInfo](#InvoiceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credit_note_id | string? |  yes  |  |
 | invoice_url | string? |  yes  |  |
 | label_url | string? |  yes  |  |
 | store_invoice_id | string? |  yes  |  |
 | updated_date | string? |  yes  |  |
 

---

#### [Item](#Item)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attributes | [Attributes](#Attributes) |  no  |  |
 | branch_url | string? |  yes  |  |
 | brand | string |  no  |  |
 | brand_id | number |  no  |  |
 | can_cancel | boolean? |  yes  |  |
 | can_return | boolean? |  yes  |  |
 | code | string? |  yes  |  |
 | color | string? |  yes  |  |
 | department_id | number? |  yes  |  |
 | gender | string? |  yes  |  |
 | image | [string] |  no  |  |
 | item_id | number |  no  |  |
 | l1_category | [string]? |  yes  |  |
 | l1_category_id | number? |  yes  |  |
 | l2_category | [string]? |  yes  |  |
 | l2_category_id | number? |  yes  |  |
 | l3_category | number? |  yes  |  |
 | l3_category_name | string? |  yes  |  |
 | last_updated_at | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | name | string |  no  |  |
 | size | string |  no  |  |
 | slug_key | string |  no  |  |
 | webstore_product_url | string? |  yes  |  |
 

---

#### [ItemCriterias](#ItemCriterias)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_brand | [number]? |  yes  |  |
 

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

#### [LineItem](#LineItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | charges | [[Charge](#Charge)]? |  yes  |  |
 | custom_messasge | string? |  yes  |  |
 | external_line_id | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | quantity | number? |  yes  |  |
 | seller_identifier | string |  no  |  |
 

---

#### [LocationDetails](#LocationDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[ArticleDetails1](#ArticleDetails1)] |  no  |  |
 | fulfillment_id | number |  no  |  |
 | fulfillment_type | string |  no  |  |
 

---

#### [LockData](#LockData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | lock_message | string? |  yes  |  |
 | locked | boolean? |  yes  |  |
 | mto | boolean? |  yes  |  |
 

---

#### [ManualAssignDPToShipment](#ManualAssignDPToShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dp_id | number |  no  |  |
 | order_type | string |  no  |  |
 | qc_required | string |  no  |  |
 | shipment_ids | [string]? |  yes  |  |
 

---

#### [ManualAssignDPToShipmentResponse](#ManualAssignDPToShipmentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | errors | [string]? |  yes  |  |
 | success | string |  no  |  |
 

---

#### [MarketPlacePdf](#MarketPlacePdf)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | invoice | string? |  yes  |  |
 | label | string? |  yes  |  |
 

---

#### [Meta](#Meta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dimension | [Dimensions](#Dimensions)? |  yes  |  |
 

---

#### [Meta1](#Meta1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kafka_emission_status | number? |  yes  |  |
 | state_manager_used | string? |  yes  |  |
 

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

#### [OrderBags](#OrderBags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | applied_promos | [[AppliedPromos](#AppliedPromos)]? |  yes  |  |
 | article | [OrderBagArticle](#OrderBagArticle)? |  yes  |  |
 | bag_configs | [BagConfigs](#BagConfigs)? |  yes  |  |
 | bag_id | number |  no  |  |
 | brand | [OrderBrandName](#OrderBrandName)? |  yes  |  |
 | can_cancel | boolean? |  yes  |  |
 | can_return | boolean? |  yes  |  |
 | current_status | [CurrentStatus](#CurrentStatus)? |  yes  |  |
 | delivery_address | [PlatformDeliveryAddress](#PlatformDeliveryAddress)? |  yes  |  |
 | display_name | string? |  yes  |  |
 | entity_type | string? |  yes  |  |
 | financial_breakup | [FinancialBreakup](#FinancialBreakup)? |  yes  |  |
 | gst_details | [BagGST](#BagGST)? |  yes  |  |
 | identifier | string? |  yes  |  |
 | item | [PlatformItem](#PlatformItem)? |  yes  |  |
 | line_number | number? |  yes  |  |
 | parent_promo_bags | string? |  yes  |  |
 | prices | [Prices](#Prices)? |  yes  |  |
 | quantity | number? |  yes  |  |
 | seller_identifier | string? |  yes  |  |
 

---

#### [OrderBrandName](#OrderBrandName)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_name | string |  no  |  |
 | company | string |  no  |  |
 | created_on | string |  no  |  |
 | id | number |  no  |  |
 | logo | string |  no  |  |
 | modified_on | string? |  yes  |  |
 

---

#### [OrderConfig](#OrderConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate | [Affiliate](#Affiliate) |  no  |  |
 | affiliate_store_id_mapping | [[AffiliateStoreIdMapping](#AffiliateStoreIdMapping)] |  no  |  |
 | article_lookup | string? |  yes  |  |
 | bag_end_state | string? |  yes  |  |
 | create_user | boolean? |  yes  |  |
 | store_lookup | string? |  yes  |  |
 

---

#### [OrderDetails](#OrderDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_at | string? |  yes  |  |
 | fynd_order_id | string? |  yes  |  |
 

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
 | meta | [OrderMeta](#OrderMeta)? |  yes  |  |
 | order_date | string |  no  |  |
 | payment_methods | string? |  yes  |  |
 | prices | [Prices](#Prices)? |  yes  |  |
 | tax_details | [TaxDetails](#TaxDetails)? |  yes  |  |
 

---

#### [OrderInfo](#OrderInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_order_id | string? |  yes  |  |
 | bags | [[AffiliateBag](#AffiliateBag)] |  no  |  |
 | billing_address | [OrderUser](#OrderUser) |  no  |  |
 | cod_charges | number |  no  |  |
 | coupon | string? |  yes  |  |
 | delivery_charges | number |  no  |  |
 | discount | number |  no  |  |
 | items | string |  no  |  |
 | order_priority | [OrderPriority](#OrderPriority)? |  yes  |  |
 | order_value | number |  no  |  |
 | payment | string? |  yes  |  |
 | payment_mode | string |  no  |  |
 | shipment | [ShipmentData](#ShipmentData)? |  yes  |  |
 | shipping_address | [OrderUser](#OrderUser) |  no  |  |
 | user | [UserData](#UserData) |  no  |  |
 

---

#### [OrderingStoreDetails](#OrderingStoreDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string |  no  |  |
 | city | string |  no  |  |
 | code | string |  no  |  |
 | contact_person | string |  no  |  |
 | country | string |  no  |  |
 | meta | string |  no  |  |
 | ordering_store_id | number |  no  |  |
 | phone | string |  no  |  |
 | pincode | string |  no  |  |
 | state | string |  no  |  |
 | store_name | string |  no  |  |
 

---

#### [OrderListingResponse](#OrderListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[PlatformOrderItems](#PlatformOrderItems)]? |  yes  |  |
 | lane | string? |  yes  |  |
 | message | string? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | success | boolean? |  yes  |  |
 | total_count | number? |  yes  |  |
 

---

#### [OrderMeta](#OrderMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | billing_staff_details | [BillingStaffDetails](#BillingStaffDetails)? |  yes  |  |
 | cart_id | number? |  yes  |  |
 | comment | string? |  yes  |  |
 | company_logo | string? |  yes  |  |
 | currency_symbol | string? |  yes  |  |
 | customer_note | string? |  yes  |  |
 | employee_id | number? |  yes  |  |
 | extra_meta | string? |  yes  |  |
 | files | [string]? |  yes  |  |
 | mongo_cart_id | number? |  yes  |  |
 | order_child_entities | [string]? |  yes  |  |
 | order_platform | string? |  yes  |  |
 | order_tags | [string]? |  yes  |  |
 | order_type | string? |  yes  |  |
 | ordering_store | number? |  yes  |  |
 | payment_type | string? |  yes  |  |
 | platform_user_details | [PlatformUserDetails](#PlatformUserDetails)? |  yes  |  |
 | staff | string? |  yes  |  |
 | transaction_data | [TransactionData](#TransactionData)? |  yes  |  |
 

---

#### [OrderPriority](#OrderPriority)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_priority_code | string? |  yes  |  |
 | fulfilment_priority | number? |  yes  |  |
 | fulfilment_priority_text | string? |  yes  |  |
 

---

#### [OrderStatus](#OrderStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end_date | string |  no  |  |
 | mobile | number |  no  |  |
 | order_details | [[FyndOrderIdList](#FyndOrderIdList)]? |  yes  |  |
 | start_date | string |  no  |  |
 

---

#### [OrderStatusData](#OrderStatusData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | errors | [string]? |  yes  |  |
 | order_details | [OrderDetails](#OrderDetails) |  no  |  |
 | shipment_details | [[ShipmentDetail](#ShipmentDetail)]? |  yes  |  |
 

---

#### [OrderStatusResult](#OrderStatusResult)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | result | [[OrderStatusData](#OrderStatusData)]? |  yes  |  |
 | success | string |  no  |  |
 

---

#### [OrderUser](#OrderUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string? |  yes  |  |
 | address2 | string? |  yes  |  |
 | city | string |  no  |  |
 | country | string |  no  |  |
 | email | string |  no  |  |
 | first_name | string |  no  |  |
 | last_name | string |  no  |  |
 | mobile | number |  no  |  |
 | phone | number |  no  |  |
 | pincode | string |  no  |  |
 | state | string |  no  |  |
 

---

#### [OriginalFilter](#OriginalFilter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string? |  yes  |  |
 | affiliate_shipment_id | string? |  yes  |  |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | has_previous | boolean? |  yes  |  |
 | size | number? |  yes  |  |
 | total | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [Page1](#Page1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | item_total | number |  no  |  |
 | page_type | string |  no  |  |
 | size | number |  no  |  |
 

---

#### [PaymentInfo](#PaymentInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_methods | [[PaymentMethod](#PaymentMethod)]? |  yes  |  |
 | primary_mode | string |  no  |  |
 

---

#### [PaymentMethod](#PaymentMethod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number |  no  |  |
 | collect_by | string |  no  |  |
 | meta | string? |  yes  |  |
 | mode | string |  no  |  |
 | name | string |  no  |  |
 | refund_by | string |  no  |  |
 | transaction_data | string? |  yes  |  |
 

---

#### [PaymentMethods](#PaymentMethods)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | collect_by | string? |  yes  |  |
 | mode | string? |  yes  |  |
 | refund_by | string? |  yes  |  |
 

---

#### [PaymentModeInfo](#PaymentModeInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string |  no  |  |
 | type | string |  no  |  |
 

---

#### [PDFLinks](#PDFLinks)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | b2b | string? |  yes  |  |
 | credit_note_url | string? |  yes  |  |
 | delivery_challan_a4 | string? |  yes  |  |
 | invoice | string? |  yes  |  |
 | invoice_a4 | string? |  yes  |  |
 | invoice_a6 | string? |  yes  |  |
 | invoice_pos | string? |  yes  |  |
 | invoice_type | string |  no  |  |
 | label | string? |  yes  |  |
 | label_a4 | string? |  yes  |  |
 | label_a6 | string? |  yes  |  |
 | label_pos | string? |  yes  |  |
 | label_type | string |  no  |  |
 | po_invoice | string? |  yes  |  |
 

---

#### [PhoneDetails](#PhoneDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | number? |  yes  |  |
 | mobile_number | string? |  yes  |  |
 

---

#### [PlatformBreakupValues](#PlatformBreakupValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string? |  yes  |  |
 | name | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [PlatformChannel](#PlatformChannel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [PlatformDeliveryAddress](#PlatformDeliveryAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
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
 | phone | string? |  yes  |  |
 | pincode | string? |  yes  |  |
 | state | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | version | string? |  yes  |  |
 

---

#### [PlatformItem](#PlatformItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | can_cancel | boolean? |  yes  |  |
 | can_return | boolean? |  yes  |  |
 | code | string? |  yes  |  |
 | color | string? |  yes  |  |
 | department_id | number? |  yes  |  |
 | id | number? |  yes  |  |
 | image | [string]? |  yes  |  |
 | images | [string]? |  yes  |  |
 | l1_category | [string]? |  yes  |  |
 | l3_category | number? |  yes  |  |
 | l3_category_name | string? |  yes  |  |
 | name | string? |  yes  |  |
 | size | string? |  yes  |  |
 

---

#### [PlatformOrderItems](#PlatformOrderItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | breakup_values | [[PlatformBreakupValues](#PlatformBreakupValues)]? |  yes  |  |
 | channel | [PlatformChannel](#PlatformChannel)? |  yes  |  |
 | meta | string? |  yes  |  |
 | order_created_time | string? |  yes  |  |
 | order_id | string? |  yes  |  |
 | order_value | number? |  yes  |  |
 | payment_mode | string? |  yes  |  |
 | shipments | [[PlatformShipment](#PlatformShipment)]? |  yes  |  |
 | total_order_value | number? |  yes  |  |
 | user_info | [UserDataInfo](#UserDataInfo)? |  yes  |  |
 

---

#### [PlatformOrderUpdate](#PlatformOrderUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_id | string |  no  |  |
 

---

#### [PlatformShipment](#PlatformShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_details | [AffiliateDetails](#AffiliateDetails)? |  yes  |  |
 | bag_status_history | [[BagStatusHistory](#BagStatusHistory)]? |  yes  |  |
 | bags | [[OrderBags](#OrderBags)]? |  yes  |  |
 | billing_details | [UserDetailsData](#UserDetailsData)? |  yes  |  |
 | company_details | [CompanyDetails](#CompanyDetails)? |  yes  |  |
 | coupon | string? |  yes  |  |
 | custom_meta | [string]? |  yes  |  |
 | delivery_details | [UserDetailsData](#UserDetailsData)? |  yes  |  |
 | delivery_slot | string? |  yes  |  |
 | dp_details | [DPDetailsData](#DPDetailsData)? |  yes  |  |
 | enable_dp_tracking | boolean? |  yes  |  |
 | forward_shipment_id | string? |  yes  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore)? |  yes  |  |
 | fulfilment_priority | number? |  yes  |  |
 | gst_details | [GSTDetailsData](#GSTDetailsData)? |  yes  |  |
 | invoice | [InvoiceInfo](#InvoiceInfo)? |  yes  |  |
 | invoice_id | string? |  yes  |  |
 | journey_type | string? |  yes  |  |
 | lock_status | boolean? |  yes  |  |
 | meta | [Meta](#Meta)? |  yes  |  |
 | operational_status | string? |  yes  |  |
 | order | [OrderDetailsData](#OrderDetailsData)? |  yes  |  |
 | ordering_store | [OrderingStoreDetails](#OrderingStoreDetails)? |  yes  |  |
 | packaging_type | string? |  yes  |  |
 | payment_methods | string? |  yes  |  |
 | payment_mode | string? |  yes  |  |
 | payments | [ShipmentPayments](#ShipmentPayments)? |  yes  |  |
 | picked_date | string? |  yes  |  |
 | platform_logo | string? |  yes  |  |
 | prices | [Prices](#Prices)? |  yes  |  |
 | priority_text | string? |  yes  |  |
 | shipment_id | string |  no  |  |
 | shipment_images | [string]? |  yes  |  |
 | shipment_quantity | number? |  yes  |  |
 | shipment_status | string? |  yes  |  |
 | status | [ShipmentStatusData](#ShipmentStatusData)? |  yes  |  |
 | total_bags | number? |  yes  |  |
 | total_items | number? |  yes  |  |
 | tracking_list | [[TrackingList](#TrackingList)]? |  yes  |  |
 | user | [UserDataInfo](#UserDataInfo)? |  yes  |  |
 | user_agent | string? |  yes  |  |
 | vertical | string? |  yes  |  |
 

---

#### [PlatformShipmentReasonsResponse](#PlatformShipmentReasonsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reasons | [[Reason](#Reason)]? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [PlatformShipmentTrack](#PlatformShipmentTrack)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | meta | string? |  yes  |  |
 | results | [[PlatformTrack](#PlatformTrack)]? |  yes  |  |
 

---

#### [PlatformTrack](#PlatformTrack)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | account_name | string? |  yes  |  |
 | awb | string? |  yes  |  |
 | last_location_recieved_at | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | raw_status | string? |  yes  |  |
 | reason | string? |  yes  |  |
 | shipment_type | string? |  yes  |  |
 | status | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | updated_time | string? |  yes  |  |
 

---

#### [PlatformUserDetails](#PlatformUserDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | platform_user_employee_code | string? |  yes  |  |
 | platform_user_first_name | string? |  yes  |  |
 | platform_user_id | string? |  yes  |  |
 | platform_user_last_name | string? |  yes  |  |
 

---

#### [PostActivityHistory](#PostActivityHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [PostHistoryData](#PostHistoryData) |  no  |  |
 | filters | [[PostHistoryFilters](#PostHistoryFilters)] |  no  |  |
 

---

#### [PostHistoryData](#PostHistoryData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | user_name | string |  no  |  |
 

---

#### [PostHistoryDict](#PostHistoryDict)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | activity_history | [PostActivityHistory](#PostActivityHistory) |  no  |  |
 

---

#### [PostHistoryFilters](#PostHistoryFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier | string? |  yes  |  |
 | line_number | string? |  yes  |  |
 | shipment_id | string |  no  |  |
 

---

#### [PostShipmentHistory](#PostShipmentHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | activity_history | [[PostHistoryDict](#PostHistoryDict)]? |  yes  |  |
 

---

#### [Prices](#Prices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_paid | number? |  yes  |  |
 | amount_paid_roundoff | number? |  yes  |  |
 | cashback | number? |  yes  |  |
 | cashback_applied | number? |  yes  |  |
 | cod_charges | number? |  yes  |  |
 | coupon_value | number? |  yes  |  |
 | delivery_charge | number? |  yes  |  |
 | discount | number? |  yes  |  |
 | fynd_credits | number? |  yes  |  |
 | price_effective | number? |  yes  |  |
 | price_marked | number? |  yes  |  |
 | promotion_effective_discount | number? |  yes  |  |
 | refund_amount | number? |  yes  |  |
 | refund_credit | number? |  yes  |  |
 | tax_collected_at_source | number? |  yes  |  |
 | transfer_price | number? |  yes  |  |
 | value_of_good | number? |  yes  |  |
 

---

#### [ProcessingDates](#ProcessingDates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | confirm_by_date | string? |  yes  |  |
 | customer_pickup_slot | string? |  yes  |  |
 | dispatch_after_date | string? |  yes  |  |
 | dispatch_by_date | string? |  yes  |  |
 | dp_pickup_slot | string? |  yes  |  |
 | pack_by_date | string? |  yes  |  |
 

---

#### [Products](#Products)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier | string? |  yes  |  |
 | line_number | number? |  yes  |  |
 | quantity | number? |  yes  |  |
 

---

#### [ProductsDataUpdates](#ProductsDataUpdates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string? |  yes  |  |
 | filters | [[ProductsDataUpdatesFilters](#ProductsDataUpdatesFilters)]? |  yes  |  |
 

---

#### [ProductsDataUpdatesFilters](#ProductsDataUpdatesFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier | string? |  yes  |  |
 | line_number | number? |  yes  |  |
 

---

#### [ProductsReasons](#ProductsReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [ProductsReasonsData](#ProductsReasonsData)? |  yes  |  |
 | filters | [[ProductsReasonsFilters](#ProductsReasonsFilters)]? |  yes  |  |
 

---

#### [ProductsReasonsData](#ProductsReasonsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason_id | number? |  yes  |  |
 | reason_text | string? |  yes  |  |
 

---

#### [ProductsReasonsFilters](#ProductsReasonsFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier | string? |  yes  |  |
 | line_number | number? |  yes  |  |
 | quantity | number? |  yes  |  |
 

---

#### [QuestionSet](#QuestionSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | id | number? |  yes  |  |
 

---

#### [Reason](#Reason)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | id | number? |  yes  |  |
 | qc_type | [string]? |  yes  |  |
 | question_set | [[QuestionSet](#QuestionSet)]? |  yes  |  |
 

---

#### [ReasonsData](#ReasonsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entities | [[EntitiesReasons](#EntitiesReasons)]? |  yes  |  |
 | products | [[ProductsReasons](#ProductsReasons)]? |  yes  |  |
 

---

#### [ResponseDetail](#ResponseDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | [string]? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [ReturnConfig](#ReturnConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | returnable | boolean? |  yes  |  |
 | time | number? |  yes  |  |
 | unit | string? |  yes  |  |
 

---

#### [SendSmsPayload](#SendSmsPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_id | number |  no  |  |
 | data | [SmsDataPayload](#SmsDataPayload)? |  yes  |  |
 | slug | string |  no  |  |
 

---

#### [Shipment](#Shipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | external_shipment_id | string? |  yes  |  |
 | line_items | [[LineItem](#LineItem)] |  no  |  |
 | location_id | number |  no  |  |
 | meta | string? |  yes  |  |
 | priority | number? |  yes  |  |
 | processing_dates | [ProcessingDates](#ProcessingDates)? |  yes  |  |
 

---

#### [ShipmentConfig](#ShipmentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  |  |
 | identifier | string |  no  |  |
 | journey | string |  no  |  |
 | location_details | [LocationDetails](#LocationDetails)? |  yes  |  |
 | payment_mode | string |  no  |  |
 | shipment | [[ShipmentDetails](#ShipmentDetails)] |  no  |  |
 | source | string |  no  |  |
 | to_pincode | string |  no  |  |
 

---

#### [ShipmentData](#ShipmentData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_data | [ShipmentConfig](#ShipmentConfig) |  no  |  |
 

---

#### [ShipmentDetail](#ShipmentDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_list | [number]? |  yes  |  |
 | id | number |  no  |  |
 | meta | [Meta1](#Meta1) |  no  |  |
 | remarks | string? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | status | string? |  yes  |  |
 

---

#### [ShipmentDetails](#ShipmentDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_shipment_id | string |  no  |  |
 | articles | [[ArticleDetails1](#ArticleDetails1)] |  no  |  |
 | box_type | string? |  yes  |  |
 | dp_id | number? |  yes  |  |
 | fulfillment_id | number |  no  |  |
 | meta | string? |  yes  |  |
 | shipments | number |  no  |  |
 

---

#### [ShipmentDetailsResponse](#ShipmentDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order | [OrderDict](#OrderDict)? |  yes  |  |
 | shipments | [[PlatformShipment](#PlatformShipment)]? |  yes  |  |
 | success | boolean |  no  |  |
 

---

#### [ShipmentHistoryResponse](#ShipmentHistoryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | activity_history | [[HistoryDict](#HistoryDict)] |  no  |  |
 

---

#### [ShipmentInfoResponse](#ShipmentInfoResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | shipments | [[PlatformShipment](#PlatformShipment)]? |  yes  |  |
 | success | boolean |  no  |  |
 

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
 | payment_methods | string? |  yes  |  |
 | payment_mode_info | [PaymentModeInfo](#PaymentModeInfo)? |  yes  |  |
 | prices | [Prices](#Prices)? |  yes  |  |
 | shipment_created_at | string |  no  |  |
 | shipment_id | string? |  yes  |  |
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

#### [ShipmentMeta](#ShipmentMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | assign_dp_from_sb | boolean? |  yes  |  |
 | auto_trigger_dp_assignment_acf | boolean |  no  |  |
 | awb_number | string? |  yes  |  |
 | b2b_buyer_details | [BuyerDetails](#BuyerDetails)? |  yes  |  |
 | b2c_buyer_details | string? |  yes  |  |
 | bag_weight | string? |  yes  |  |
 | box_type | string? |  yes  |  |
 | debug_info | [DebugInfo](#DebugInfo)? |  yes  |  |
 | dp_id | string? |  yes  |  |
 | dp_name | string? |  yes  |  |
 | dp_options | string? |  yes  |  |
 | dp_sort_key | string? |  yes  |  |
 | due_date | string? |  yes  |  |
 | einvoice_info | [EinvoiceInfo](#EinvoiceInfo)? |  yes  |  |
 | ewaybill_info | string? |  yes  |  |
 | external | string? |  yes  |  |
 | formatted | [Formatted](#Formatted)? |  yes  |  |
 | forward_affiliate_order_id | string? |  yes  |  |
 | forward_affiliate_shipment_id | string? |  yes  |  |
 | fulfilment_priority_text | string? |  yes  |  |
 | lock_data | [LockData](#LockData)? |  yes  |  |
 | marketplace_store_id | string? |  yes  |  |
 | order_type | string? |  yes  |  |
 | packaging_name | string? |  yes  |  |
 | po_number | string? |  yes  |  |
 | return_affiliate_order_id | string? |  yes  |  |
 | return_affiliate_shipment_id | string? |  yes  |  |
 | return_awb_number | string? |  yes  |  |
 | return_details | string? |  yes  |  |
 | return_store_node | number? |  yes  |  |
 | same_store_available | boolean |  no  |  |
 | shipment_volumetric_weight | number? |  yes  |  |
 | shipment_weight | number? |  yes  |  |
 | store_invoice_updated_date | string? |  yes  |  |
 | timestamp | [ShipmentTimeStamp](#ShipmentTimeStamp)? |  yes  |  |
 | weight | number |  no  |  |
 

---

#### [ShipmentPayments](#ShipmentPayments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string? |  yes  |  |
 | mode | string? |  yes  |  |
 | source | string? |  yes  |  |
 

---

#### [ShipmentsRequest](#ShipmentsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data_updates | [DataUpdates](#DataUpdates)? |  yes  |  |
 | identifier | string |  no  |  |
 | products | [[Products](#Products)]? |  yes  |  |
 | reasons | [ReasonsData](#ReasonsData)? |  yes  |  |
 

---

#### [ShipmentsResponse](#ShipmentsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | exception | string? |  yes  |  |
 | final_state | string? |  yes  |  |
 | identifier | string? |  yes  |  |
 | message | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | stack_trace | string? |  yes  |  |
 | status | number? |  yes  |  |
 

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
 | bag_list | [string]? |  yes  |  |
 | created_at | string? |  yes  |  |
 | id | number? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | status | string? |  yes  |  |
 

---

#### [ShipmentTimeStamp](#ShipmentTimeStamp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | t_max | string? |  yes  |  |
 | t_min | string? |  yes  |  |
 

---

#### [ShippingInfo](#ShippingInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string |  no  |  |
 | address2 | string? |  yes  |  |
 | address_type | string? |  yes  |  |
 | alternate_email | string? |  yes  |  |
 | alternate_mobile_number | string? |  yes  |  |
 | city | string |  no  |  |
 | country | string |  no  |  |
 | country_code | string? |  yes  |  |
 | customer_code | string? |  yes  |  |
 | external_customer_code | string? |  yes  |  |
 | first_name | string |  no  |  |
 | floor_no | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | geo_location | string? |  yes  |  |
 | house_no | string? |  yes  |  |
 | landmark | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | middle_name | string? |  yes  |  |
 | pincode | string |  no  |  |
 | primary_email | string |  no  |  |
 | primary_mobile_number | string |  no  |  |
 | shipping_type | string? |  yes  |  |
 | slot | [string]? |  yes  |  |
 | state | string |  no  |  |
 | state_code | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [SmsDataPayload](#SmsDataPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_paid | number |  no  |  |
 | brand_name | string |  no  |  |
 | country_code | string |  no  |  |
 | customer_name | string |  no  |  |
 | message | string |  no  |  |
 | order_id | string |  no  |  |
 | payment_mode | string |  no  |  |
 | phone_number | number |  no  |  |
 | shipment_id | number |  no  |  |
 

---

#### [StatuesRequest](#StatuesRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | exclude_bags_next_state | string? |  yes  |  |
 | shipments | [[ShipmentsRequest](#ShipmentsRequest)]? |  yes  |  |
 | status | string? |  yes  |  |
 

---

#### [StatuesResponse](#StatuesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipments | [[ShipmentsResponse](#ShipmentsResponse)]? |  yes  |  |
 

---

#### [Store](#Store)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string |  no  |  |
 | address2 | string? |  yes  |  |
 | alohomora_user_id | number? |  yes  |  |
 | brand_id | any? |  yes  |  |
 | brand_store_tags | [string]? |  yes  |  |
 | city | string |  no  |  |
 | code | string? |  yes  |  |
 | company_id | number |  no  |  |
 | contact_person | string |  no  |  |
 | country | string |  no  |  |
 | created_at | string |  no  |  |
 | fulfillment_channel | string |  no  |  |
 | is_active | boolean? |  yes  |  |
 | is_archived | boolean? |  yes  |  |
 | is_enabled_for_recon | boolean? |  yes  |  |
 | latitude | number |  no  |  |
 | location_type | string |  no  |  |
 | login_username | string |  no  |  |
 | longitude | number |  no  |  |
 | mall_area | string? |  yes  |  |
 | mall_name | string? |  yes  |  |
 | meta | [StoreMeta](#StoreMeta) |  no  |  |
 | name | string |  no  |  |
 | order_integration_id | string? |  yes  |  |
 | packaging_material_count | number? |  yes  |  |
 | parent_store_id | number? |  yes  |  |
 | phone | number |  no  |  |
 | pincode | string |  no  |  |
 | s_id | string |  no  |  |
 | state | string |  no  |  |
 | store_active_from | string? |  yes  |  |
 | store_address_json | [StoreAddress](#StoreAddress)? |  yes  |  |
 | store_email | string |  no  |  |
 | updated_at | string? |  yes  |  |
 | vat_no | string? |  yes  |  |
 

---

#### [StoreAddress](#StoreAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string |  no  |  |
 | address2 | string? |  yes  |  |
 | address_category | string |  no  |  |
 | address_type | string |  no  |  |
 | area | string? |  yes  |  |
 | city | string |  no  |  |
 | contact_person | string |  no  |  |
 | country | string |  no  |  |
 | country_code | string |  no  |  |
 | created_at | string |  no  |  |
 | email | string? |  yes  |  |
 | landmark | string? |  yes  |  |
 | latitude | number |  no  |  |
 | longitude | number |  no  |  |
 | phone | string |  no  |  |
 | pincode | number |  no  |  |
 | state | string |  no  |  |
 | updated_at | string |  no  |  |
 | version | string? |  yes  |  |
 

---

#### [StoreDocuments](#StoreDocuments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst | [Document](#Document)? |  yes  |  |
 

---

#### [StoreEinvoice](#StoreEinvoice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |
 | password | string? |  yes  |  |
 | user | string? |  yes  |  |
 | username | string? |  yes  |  |
 

---

#### [StoreEwaybill](#StoreEwaybill)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 

---

#### [StoreGstCredentials](#StoreGstCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | e_invoice | [StoreEinvoice](#StoreEinvoice)? |  yes  |  |
 | e_waybill | [StoreEwaybill](#StoreEwaybill)? |  yes  |  |
 

---

#### [StoreMeta](#StoreMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | additional_contact_details | string? |  yes  |  |
 | display_name | string |  no  |  |
 | documents | [StoreDocuments](#StoreDocuments)? |  yes  |  |
 | einvoice_portal_details | [EInvoicePortalDetails](#EInvoicePortalDetails)? |  yes  |  |
 | ewaybill_portal_details | string? |  yes  |  |
 | gst_credentials | [StoreGstCredentials](#StoreGstCredentials) |  no  |  |
 | gst_number | string? |  yes  |  |
 | notification_emails | [string]? |  yes  |  |
 | product_return_config | string? |  yes  |  |
 | stage | string |  no  |  |
 | timing | [string]? |  yes  |  |
 

---

#### [StoreReassign](#StoreReassign)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_bag_id | string? |  yes  |  |
 | affiliate_id | string? |  yes  |  |
 | affiliate_order_id | string? |  yes  |  |
 | bag_id | number? |  yes  |  |
 | fynd_order_id | string? |  yes  |  |
 | item_id | string? |  yes  |  |
 | mongo_article_id | string? |  yes  |  |
 | reason_ids | [number]? |  yes  |  |
 | set_id | string? |  yes  |  |
 | store_id | number |  no  |  |
 

---

#### [StoreReassignResponse](#StoreReassignResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [SubLane](#SubLane)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | actions | [string]? |  yes  |  |
 | index | number? |  yes  |  |
 | text | string? |  yes  |  |
 | total_items | number? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [Success](#Success)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [SuccessResponse](#SuccessResponse)

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
 | total_items | number? |  yes  |  |
 | value | string |  no  |  |
 

---

#### [Tax](#Tax)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  no  |  |
 | breakup | [string]? |  yes  |  |
 | name | string |  no  |  |
 | rate | number |  no  |  |
 

---

#### [TaxDetails](#TaxDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gstin | string? |  yes  |  |
 | pan_no | string? |  yes  |  |
 

---

#### [TaxInfo](#TaxInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | b2b_gstin_number | string? |  yes  |  |
 | gstin | string? |  yes  |  |
 

---

#### [TrackingList](#TrackingList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_current | boolean? |  yes  |  |
 | is_passed | boolean? |  yes  |  |
 | status | string |  no  |  |
 | text | string |  no  |  |
 | time | string? |  yes  |  |
 

---

#### [TransactionData](#TransactionData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_paid | string? |  yes  |  |
 | currency | string? |  yes  |  |
 | entity | string? |  yes  |  |
 | payment_id | string? |  yes  |  |
 | status | string? |  yes  |  |
 | terminal_id | string? |  yes  |  |
 | transaction_id | string? |  yes  |  |
 | unique_reference_number | string? |  yes  |  |
 

---

#### [UpdateShipmentLockPayload](#UpdateShipmentLockPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  |  |
 | action_type | string |  no  |  |
 | entities | [[Entities](#Entities)] |  no  |  |
 | entity_type | string |  no  |  |
 

---

#### [UpdateShipmentLockResponse](#UpdateShipmentLockResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | check_response | [[CheckResponse](#CheckResponse)]? |  yes  |  |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [UpdateShipmentStatusRequest](#UpdateShipmentStatusRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | force_transition | boolean? |  yes  |  |
 | lock_after_transition | boolean? |  yes  |  |
 | statuses | [[StatuesRequest](#StatuesRequest)]? |  yes  |  |
 | task | boolean? |  yes  |  |
 | unlock_before_transition | boolean? |  yes  |  |
 

---

#### [UpdateShipmentStatusResponseBody](#UpdateShipmentStatusResponseBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | statuses | [[StatuesResponse](#StatuesResponse)]? |  yes  |  |
 

---

#### [UploadConsent](#UploadConsent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | consent_url | string |  no  |  |
 | manifest_id | string |  no  |  |
 

---

#### [URL](#URL)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string? |  yes  |  |
 

---

#### [UserData](#UserData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | billing_user | [OrderUser](#OrderUser)? |  yes  |  |
 | shipping_user | [OrderUser](#OrderUser)? |  yes  |  |
 

---

#### [UserDataInfo](#UserDataInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | avis_user_id | string? |  yes  |  |
 | email | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | is_anonymous_user | boolean? |  yes  |  |
 | last_name | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 | name | string? |  yes  |  |
 | uid | number? |  yes  |  |
 

---

#### [UserDetailsData](#UserDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string |  no  |  |
 | address1 | string? |  yes  |  |
 | address_type | string? |  yes  |  |
 | area | string? |  yes  |  |
 | city | string |  no  |  |
 | country | string |  no  |  |
 | email | string? |  yes  |  |
 | landmark | string? |  yes  |  |
 | name | string |  no  |  |
 | phone | string |  no  |  |
 | pincode | string |  no  |  |
 | state | string |  no  |  |
 

---

#### [Weight](#Weight)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_default | boolean? |  yes  |  |
 | shipping | number? |  yes  |  |
 | unit | string? |  yes  |  |
 

---




