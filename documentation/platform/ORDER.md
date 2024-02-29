




##### [Back to Platform docs](./README.md)

## Order Methods
Handles all platform order and shipment api(s)


Default
* [attachOrderUser](#attachorderuser)
* [bulkListing](#bulklisting)
* [bulkStateTransistion](#bulkstatetransistion)
* [checkOrderStatus](#checkorderstatus)
* [click2Call](#click2call)
* [createChannelConfig](#createchannelconfig)
* [createOrder](#createorder)
* [dispatchManifests](#dispatchmanifests)
* [downloadBulkActionTemplate](#downloadbulkactiontemplate)
* [downloadLanesReport](#downloadlanesreport)
* [eInvoiceRetry](#einvoiceretry)
* [failedOrderLogDetails](#failedorderlogdetails)
* [failedOrderLogs](#failedorderlogs)
* [fetchCreditBalanceDetail](#fetchcreditbalancedetail)
* [fetchRefundModeConfig](#fetchrefundmodeconfig)
* [generateInvoiceID](#generateinvoiceid)
* [generatePOSReceiptByOrderId](#generateposreceiptbyorderid)
* [getAllowedStateTransition](#getallowedstatetransition)
* [getAllowedTemplatesForBulk](#getallowedtemplatesforbulk)
* [getAnnouncements](#getannouncements)
* [getApplicationShipments](#getapplicationshipments)
* [getBagById](#getbagbyid)
* [getBags](#getbags)
* [getBulkActionTemplate](#getbulkactiontemplate)
* [getBulkShipmentExcelFile](#getbulkshipmentexcelfile)
* [getChannelConfig](#getchannelconfig)
* [getFileByStatus](#getfilebystatus)
* [getLaneConfig](#getlaneconfig)
* [getManifestDetails](#getmanifestdetails)
* [getManifestShipments](#getmanifestshipments)
* [getManifestfilters](#getmanifestfilters)
* [getManifests](#getmanifests)
* [getOrderById](#getorderbyid)
* [getOrders](#getorders)
* [getPlatformShipmentReasons](#getplatformshipmentreasons)
* [getRoleBasedActions](#getrolebasedactions)
* [getShipmentBagReasons](#getshipmentbagreasons)
* [getShipmentById](#getshipmentbyid)
* [getShipmentHistory](#getshipmenthistory)
* [getShipmentReasons](#getshipmentreasons)
* [getShipments](#getshipments)
* [getStateTransitionMap](#getstatetransitionmap)
* [getTemplate](#gettemplate)
* [getfilters](#getfilters)
* [invalidateShipmentCache](#invalidateshipmentcache)
* [jobDetails](#jobdetails)
* [orderUpdate](#orderupdate)
* [postShipmentHistory](#postshipmenthistory)
* [processManifests](#processmanifests)
* [reassignLocation](#reassignlocation)
* [sendSmsNinja](#sendsmsninja)
* [sendUserMobileOTP](#sendusermobileotp)
* [trackShipment](#trackshipment)
* [trackShipmentPlatform](#trackshipmentplatform)
* [updateAddress](#updateaddress)
* [updatePackagingDimensions](#updatepackagingdimensions)
* [updateShipmentLock](#updateshipmentlock)
* [updateShipmentStatus](#updateshipmentstatus)
* [updateShipmentTracking](#updateshipmenttracking)
* [uploadConsents](#uploadconsents)
* [verifyMobileOTP](#verifymobileotp)




## Methods with example and description





### attachOrderUser
Attach order user.



```javascript
// Promise
const promise = platformClient.order.attachOrderUser({  body : value });

// Async/Await
const data = await platformClient.order.attachOrderUser({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AttachOrderUser](#AttachOrderUser) | yes | Request body |


Attach order User

*Returned Response:*




[AttachOrderUserResponse](#AttachOrderUserResponse)

Attach user to order




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### bulkListing




```javascript
// Promise
const promise = platformClient.order.bulkListing({  pageSize : value,
 pageNo : value,
 startDate : value,
 endDate : value,
 status : value,
 bulkActionType : value,
 searchKey : value });

// Async/Await
const data = await platformClient.order.bulkListing({  pageSize : value,
 pageNo : value,
 startDate : value,
 endDate : value,
 status : value,
 bulkActionType : value,
 searchKey : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| pageSize | number | yes | page size |   
| pageNo | number | yes | page number |   
| startDate | string | yes | UTC start date in ISO format |   
| endDate | string | yes | UTC end date in ISO format |    
| status | string | no | status for which to fetch the jobs. |    
| bulkActionType | string | no | job type. |    
| searchKey | string | no | search_key. |  



Fetches of previous or running  bulk jobs.


*Returned Response:*




[BulkListingResponse](#BulkListingResponse)

Fetches Bulk Action Listing




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; BulkListingPartiallyCompletedEventSample</i></summary>

```json
{
  "value": {
    "success": true,
    "page": [
      {
        "current": 1,
        "has_previous": false,
        "has_next": false,
        "total": 1,
        "item_total": 1,
        "type": "number",
        "size": 10
      }
    ],
    "total_count": 1,
    "data": [
      {
        "store_id": 1462,
        "uploaded_on": "2023-09-05T15:01:28+00:00",
        "company_id": 2,
        "shipments_action_info": {
          "label": [],
          "invoice": [],
          "failed_shipments": [
            {
              "16938979620571207303": "got error for tag_loops: Field cannot be empty."
            }
          ],
          "processing_shipments": [],
          "successful_shipments": [
            "16939056920921266090",
            "16939056919331910027"
          ],
          "invoiceable_shipments": [],
          "failed_invoiced_shipments": {},
          "processing_invoice_shipments": [],
          "successful_invoiced_shipments": []
        },
        "is_invoiceable": false,
        "user_name": "sonalnalawade_gofynd_com_18670",
        "file_url": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/general/free/original/fTPuVwPj2-store_reassigned_and_placed_and__1462_1693905700.6916761.xlsx",
        "meta": null,
        "invoice_document_type": "",
        "file_name": "store_reassigned_and_placed_and__1462_1693905700.6916761.xlsx",
        "store_name": "DK Store",
        "label_document_type": "",
        "updated_ts": 1693906287,
        "status": "PARTIALLY COMPLETED",
        "store_code": "28",
        "bulk_action_type": "order_processing",
        "created_ts": "2023-09-12T06:05:53.395Z",
        "invoice_status": "yet_to_initiate",
        "do_invoice_label_generated": false,
        "id": 340,
        "user_id": "eaad334a6fc2a3f6fd004e88",
        "last_selected_invoice_label_type": "a4",
        "batch_id": "d2cd3858-a4f2-4faa-bb86-f7dbc228d277",
        "uploaded_by": null,
        "failed_sh_count": 1,
        "successful_sh_count": 2,
        "total_count": 3,
        "failed_shipments": [
          {
            "16938979620571207303": "got error for tag_loops: Field cannot be empty."
          }
        ],
        "successful_invoiced_count": 0,
        "failed_invoiced_count": 0,
        "total_invoiced_count": 0
      }
    ]
  }
}
```
</details>

<details>
<summary><i>&nbsp; BulkListingCompletedEventSample</i></summary>

```json
{
  "value": {
    "success": true,
    "page": {
      "current": 1,
      "has_previous": false,
      "has_next": false,
      "total": 1,
      "item_total": 1,
      "type": "number",
      "size": 10
    },
    "total_count": 1,
    "data": [
      {
        "store_id": 2,
        "uploaded_on": "2023-09-07T13:10:14+00:00",
        "company_id": 2,
        "shipments_action_info": {
          "label": [],
          "invoice": [],
          "failed_shipments": [],
          "processing_shipments": [],
          "successful_shipments": [
            "16940656109321358201",
            "16940123806821572491"
          ],
          "invoiceable_shipments": [],
          "failed_invoiced_shipments": {},
          "processing_invoice_shipments": [],
          "successful_invoiced_shipments": []
        },
        "is_invoiceable": false,
        "user_name": "hansrajdeghun_gofynd_com_07968",
        "file_url": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/general/free/original/50sqxcYl3-gM0qwREGq-store_reassigned_and_placed_and__2_1694072387.2223.csv",
        "meta": null,
        "invoice_document_type": "",
        "file_name": "gM0qwREGq-store_reassigned_and_placed_and__2_1694072387.2223.csv",
        "store_name": "Maryam2948442024720231628917",
        "label_document_type": "",
        "updated_ts": 1694072414,
        "status": "COMPLETED",
        "store_code": "Maryam2948442024720231628917",
        "bulk_action_type": "order_processing",
        "created_ts": "2023-09-12T06:05:53.395Z",
        "invoice_status": "yet_to_initiate",
        "do_invoice_label_generated": false,
        "id": 385,
        "user_id": "a735b8f3fe2200e3de562c63",
        "last_selected_invoice_label_type": "a4",
        "batch_id": "4552cc62-688d-45f3-a5e4-dd5c9367daf0",
        "uploaded_by": null,
        "failed_sh_count": 0,
        "successful_sh_count": 2,
        "total_count": 2,
        "failed_shipments": [],
        "successful_invoiced_count": 0,
        "failed_invoiced_count": 0,
        "total_invoiced_count": 0
      }
    ]
  }
}
```
</details>

<details>
<summary><i>&nbsp; BulkListingFailedEventSample</i></summary>

```json
{
  "value": {
    "success": true,
    "data": [
      {
        "store_id": 1,
        "uploaded_on": "2023-09-07T13:07:13+00:00",
        "company_id": 2,
        "shipments_action_info": {
          "label": [],
          "invoice": [],
          "failed_shipments": [
            {
              "all": "due to no of rows being less than 2 or greater than 5000"
            }
          ],
          "processing_shipments": [],
          "successful_shipments": [],
          "invoiceable_shipments": [],
          "failed_invoiced_shipments": {},
          "processing_invoice_shipments": [],
          "successful_invoiced_shipments": []
        },
        "is_invoiceable": false,
        "user_name": "hansrajdeghun_gofynd_com_07968",
        "file_url": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/general/free/original/1IWqTaL6e-rZjSQ5aR0-store_reassigned_and_placed_and__3935_1694072101.4739661.csv",
        "meta": null,
        "invoice_document_type": "",
        "file_name": "rZjSQ5aR0-store_reassigned_and_placed_and__3935_1694072101.4739661.csv",
        "store_name": null,
        "label_document_type": "",
        "updated_ts": 1694072233,
        "status": "FAILED",
        "store_code": null,
        "bulk_action_type": "order_processing",
        "created_ts": "2023-09-12T06:05:53.395Z",
        "invoice_status": "yet_to_initiate",
        "do_invoice_label_generated": false,
        "id": 384,
        "user_id": "a735b8f3fe2200e3de562c63",
        "last_selected_invoice_label_type": "a4",
        "batch_id": "219bfed9-6347-4b7f-96cf-9b7f528c57a1",
        "uploaded_by": null,
        "failed_sh_count": 1,
        "successful_sh_count": 0,
        "total_count": 1,
        "failed_shipments": [
          {
            "all": "due to no of rows being less than 2 or greater than 5000"
          }
        ],
        "successful_invoiced_count": 0,
        "failed_invoiced_count": 0,
        "total_invoiced_count": 0
      }
    ],
    "page": {
      "current": 1,
      "has_previous": false,
      "has_next": false,
      "total": 1,
      "item_total": 1,
      "type": "number",
      "size": 10
    },
    "total_count": 1
  }
}
```
</details>

</details>









---


### bulkStateTransistion




```javascript
// Promise
const promise = platformClient.order.bulkStateTransistion({  body : value });

// Async/Await
const data = await platformClient.order.bulkStateTransistion({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [BulkStateTransistionRequest](#BulkStateTransistionRequest) | yes | Request body |


Performs State Transisiton in Bulk for the given shipments in the excel/csv file url.

*Returned Response:*




[BulkStateTransistionResponse](#BulkStateTransistionResponse)

Bulk State Transistion Sucessfully Initiated Response.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; BulkReportsSucessfulEventSample</i></summary>

```json
{
  "value": {
    "status": true,
    "message": "Successfully started processing with batch_id: 0000-1111-2222-3333",
    "batch_id": "0000-1111-2222-3333"
  }
}
```
</details>

</details>









---


### checkOrderStatus
Check order status.



```javascript
// Promise
const promise = platformClient.order.checkOrderStatus({  body : value });

// Async/Await
const data = await platformClient.order.checkOrderStatus({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [OrderStatus](#OrderStatus) | yes | Request body |


Verify the current status of an order.

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
Click to call.



```javascript
// Promise
const promise = platformClient.order.click2Call({  caller : value,
 receiver : value,
 bagId : value,
 callerId : value,
 method : value });

// Async/Await
const data = await platformClient.order.click2Call({  caller : value,
 receiver : value,
 bagId : value,
 callerId : value,
 method : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| caller | string | yes | Call Number |   
| receiver | string | yes | Receiver Number |   
| bagId | string | yes | Bag Id for the query |    
| callerId | string | no | Caller Id |    
| method | string | no | Provider Method to Call |  



Click to call. 

*Returned Response:*




[Click2CallResponse](#Click2CallResponse)

Process call on request!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "call_id": "c2c_646b00bc-984c-4c10-bb8d-0e850a1e0022"
}
```
</details>









---


### createChannelConfig
Create channel configuration.



```javascript
// Promise
const promise = platformClient.order.createChannelConfig({  body : value });

// Async/Await
const data = await platformClient.order.createChannelConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateChannelConfigData](#CreateChannelConfigData) | yes | Request body |


Set up configuration for a channel.

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
Create order.



```javascript
// Promise
const promise = platformClient.order.createOrder({  body : value });

// Async/Await
const data = await platformClient.order.createOrder({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateOrderAPI](#CreateOrderAPI) | yes | Request body |


Create order.

*Returned Response:*




[CreateOrderResponse](#CreateOrderResponse)

Successfully created an order!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### dispatchManifests




```javascript
// Promise
const promise = platformClient.order.dispatchManifests({  manifestId : value,
 body : value });

// Async/Await
const data = await platformClient.order.dispatchManifests({  manifestId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| manifestId | string | yes |  |  
| body | [DispatchManifest](#DispatchManifest) | yes | Request body |


Dispatch Manifest

*Returned Response:*




[SuccessResponse](#SuccessResponse)

Shipment Dispatched mapped with manifest!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### downloadBulkActionTemplate
Download bulk action template.



```javascript
// Promise
const promise = platformClient.order.downloadBulkActionTemplate({  templateSlug : value });

// Async/Await
const data = await platformClient.order.downloadBulkActionTemplate({  templateSlug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| templateSlug | string | no | Slug name of template to be downloaded |  



Download bulk actions seller templates.

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


### downloadLanesReport
Download lanes report.



```javascript
// Promise
const promise = platformClient.order.downloadLanesReport({  body : value });

// Async/Await
const data = await platformClient.order.downloadLanesReport({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [BulkReportsDownloadRequest](#BulkReportsDownloadRequest) | yes | Request body |


Downloads lanes shipment/orders.

*Returned Response:*




[BulkReportsDownloadResponse](#BulkReportsDownloadResponse)

Bulk Report creation initiated.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; BulkReportsSucessfulEventSample</i></summary>

```json
{
  "value": {
    "success": true,
    "batch_id": "0000-1111-2222-3333"
  }
}
```
</details>

</details>









---


### eInvoiceRetry
E-invoice retry.



```javascript
// Promise
const promise = platformClient.order.eInvoiceRetry({  body : value });

// Async/Await
const data = await platformClient.order.eInvoiceRetry({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [EInvoiceRetry](#EInvoiceRetry) | yes | Request body |


Retry e-invoice after failure

*Returned Response:*




[EInvoiceRetryResponse](#EInvoiceRetryResponse)

E-invoice generated successfully for all/few shipments from given list of shipments.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; sample1</i></summary>

```json
{
  "value": {
    "response_data": [
      {
        "shipment_id": "16342342342343423",
        "einvoice_type": "invoice",
        "status": 200,
        "message": "E-invoice generated for given shipment",
        "einvoice_info": {
          "irn_details": {
            "ack_no": "172313559180590",
            "ack_dt": "2023-10-01 12:09:00",
            "irn": "5ac2752f161c356d6957d5e7e52759343acfa516638b92718a1309dc25ee0015",
            "signed_invoice": "d6GXwwhz86_aRlXmueRHboFRB8UhnWGU3CREZKesJkYz42e2HduZ5_d29zoh7yhIiIDC5TLueWHIMHE0UJ5C1z5i0QQSdjMrqBcamu7rpS6wOVIEt6RMs2CZulKt",
            "signed_qr_code": "d6GXwwhz86_aRlXmueRHboFRB8UhnWGU3CREZKesJkYz42e2HduZ5_d29zoh7yhIiIDC5TLueWHIMHE0UJ5C1z5i0QQSdjMrqBcamu7rpS6wOVIEt6RMs2CZulKt"
          }
        }
      },
      {
        "shipment_id": "16342342342343424",
        "einvoice_type": "invoice",
        "status": 200,
        "message": "E-invoice generated for given shipment",
        "einvoice_info": {
          "irn_details": {
            "ack_no": "172313559180590",
            "ack_dt": "2023-10-01 12:09:00",
            "irn": "5ac2752f161c356d6957d5e7e52759343acfa516638b92718a1309dc25ee0015",
            "signed_invoice": "d6GXwwhz86_aRlXmueRHboFRB8UhnWGU3CREZKesJkYz42e2HduZ5_d29zoh7yhIiIDC5TLueWHIMHE0UJ5C1z5i0QQSdjMrqBcamu7rpS6wOVIEt6RMs2CZulKt",
            "signed_qr_code": "d6GXwwhz86_aRlXmueRHboFRB8UhnWGU3CREZKesJkYz42e2HduZ5_d29zoh7yhIiIDC5TLueWHIMHE0UJ5C1z5i0QQSdjMrqBcamu7rpS6wOVIEt6RMs2CZulKt"
          }
        }
      }
    ]
  }
}
```
</details>

<details>
<summary><i>&nbsp; sample2</i></summary>

```json
{
  "value": {
    "response_data": [
      {
        "shipment_id": "16342342342343423",
        "einvoice_type": "invoice",
        "status": 200,
        "message": "E-invoice generated for given shipment",
        "einvoice_info": {
          "irn_details": null,
          "ack_no": "172313559180590",
          "ack_dt": "2023-10-01 12:09:00",
          "irn": "5ac2752f161c356d6957d5e7e52759343acfa516638b92718a1309dc25ee0015",
          "signed_invoice": "d6GXwwhz86_aRlXmueRHboFRB8UhnWGU3CREZKesJkYz42e2HduZ5_d29zoh7yhIiIDC5TLueWHIMHE0UJ5C1z5i0QQSdjMrqBcamu7rpS6wOVIEt6RMs2CZulKt",
          "signed_qr_code": "d6GXwwhz86_aRlXmueRHboFRB8UhnWGU3CREZKesJkYz42e2HduZ5_d29zoh7yhIiIDC5TLueWHIMHE0UJ5C1z5i0QQSdjMrqBcamu7rpS6wOVIEt6RMs2CZulKt"
        }
      },
      {
        "shipment_id": "16342342342343424",
        "einvoice_type": "invoice",
        "status": 400,
        "message": "E-invoice generation failed for shipment",
        "einvoice_info": {
          "error_details": [
            {
              "error_code": "3028",
              "error_message": "GSTIN -22AQDPK3837A1Z5 is invalid."
            },
            {
              "error_code": "2265",
              "error_message": "Recipient GSTIN state code does not match with the state code passed in recipient details"
            }
          ]
        }
      }
    ]
  }
}
```
</details>

<details>
<summary><i>&nbsp; sample3</i></summary>

```json
{
  "value": {
    "response_data": [
      {
        "shipment_id": "16342342342343423",
        "einvoice_type": "invoice",
        "status": 200,
        "message": "E-invoice generated for given shipment",
        "einvoice_info": {
          "irn_details": null,
          "ack_no": "172313559180590",
          "ack_dt": "2023-10-01 12:09:00",
          "irn": "5ac2752f161c356d6957d5e7e52759343acfa516638b92718a1309dc25ee0015",
          "signed_invoice": "d6GXwwhz86_aRlXmueRHboFRB8UhnWGU3CREZKesJkYz42e2HduZ5_d29zoh7yhIiIDC5TLueWHIMHE0UJ5C1z5i0QQSdjMrqBcamu7rpS6wOVIEt6RMs2CZulKt",
          "signed_qr_code": "d6GXwwhz86_aRlXmueRHboFRB8UhnWGU3CREZKesJkYz42e2HduZ5_d29zoh7yhIiIDC5TLueWHIMHE0UJ5C1z5i0QQSdjMrqBcamu7rpS6wOVIEt6RMs2CZulKt"
        }
      },
      {
        "shipment_id": "16342342342343424",
        "einvoice_type": "invoice",
        "status": 400,
        "message": "E-invoice generation cannot processed because invoice id is not present in shipment",
        "einvoice_info": {}
      },
      {
        "shipment_id": "16342342342343425",
        "einvoice_type": "invoice",
        "status": 500,
        "message": "Error while generatin E-invoice for shipment, please contact platform support team for assistance",
        "einvoice_info": {}
      }
    ]
  }
}
```
</details>

</details>









---


### failedOrderLogDetails
Get failed order logs according to the filter provided



```javascript
// Promise
const promise = platformClient.order.failedOrderLogDetails({  logId : value });

// Async/Await
const data = await platformClient.order.failedOrderLogDetails({  logId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| logId | string | yes | Log Error ID |  



This endpoint allows users to get the exact error trace from the log id provided

*Returned Response:*




[FailedOrderLogDetails](#FailedOrderLogDetails)

Order Logs listing fetched successfully




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### failedOrderLogs
Get failed order logs according to the filter provided



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").order.failedOrderLogs({  pageNo : value,
 pageSize : value,
 searchType : value,
 searchValue : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").order.failedOrderLogs({  pageNo : value,
 pageSize : value,
 searchType : value,
 searchValue : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | Page Number |    
| pageSize | number | no | Page Size |    
| searchType | string | no | Search type for filter |    
| searchValue | string | no | Search value for filter |  



This endpoint allows users to get failed order logs listing for filters based on order id, user contact number, user email id and sales channel id.

*Returned Response:*




[FailedOrderLogs](#FailedOrderLogs)

Order Logs listing fetched successfully




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### fetchCreditBalanceDetail
Fetch credit balance detail.



```javascript
// Promise
const promise = platformClient.order.fetchCreditBalanceDetail({  body : value });

// Async/Await
const data = await platformClient.order.fetchCreditBalanceDetail({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [FetchCreditBalanceRequestPayload](#FetchCreditBalanceRequestPayload) | yes | Request body |


Retrieve details about credit balance.

*Returned Response:*




[FetchCreditBalanceResponsePayload](#FetchCreditBalanceResponsePayload)

Credit Balance will be fetched




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### fetchRefundModeConfig
Fetch refund mode config.



```javascript
// Promise
const promise = platformClient.order.fetchRefundModeConfig({  body : value });

// Async/Await
const data = await platformClient.order.fetchRefundModeConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [RefundModeConfigRequestPayload](#RefundModeConfigRequestPayload) | yes | Request body |


Retrieve configuration for refund modes.

*Returned Response:*




[RefundModeConfigResponsePayload](#RefundModeConfigResponsePayload)

Refund mode config is returned based on input parameter




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### generateInvoiceID




```javascript
// Promise
const promise = platformClient.order.generateInvoiceID({  invoiceType : value,
 body : value });

// Async/Await
const data = await platformClient.order.generateInvoiceID({  invoiceType : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| invoiceType | string | yes | mention the type of invoice id to generate |  
| body | [GenerateInvoiceIDRequest](#GenerateInvoiceIDRequest) | yes | Request body |


This API is used to manually generate Invoice ID against shipments.

*Returned Response:*




[GenerateInvoiceIDResponse](#GenerateInvoiceIDResponse)

NOTE success response can contains success and failed result as well




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "shipment_id": "16838049724111283577",
      "success": true,
      "invoice_id": "A0B1C2D3",
      "error_message": null
    }
  ]
}
```
</details>









---


### generatePOSReceiptByOrderId
Generate POS receipt by order ID.



```javascript
// Promise
const promise = platformClient.order.generatePOSReceiptByOrderId({  orderId : value,
 shipmentId : value,
 documentType : value });

// Async/Await
const data = await platformClient.order.generatePOSReceiptByOrderId({  orderId : value,
 shipmentId : value,
 documentType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes |  |    
| shipmentId | string | no |  |    
| documentType | string | no |  |  



Create a point-of-sale (POS) receipt for a specific order by order ID.

*Returned Response:*




[GeneratePosOrderReceiptResponse](#GeneratePosOrderReceiptResponse)

We are processing the request!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getAllowedStateTransition
Get allowed state transition.



```javascript
// Promise
const promise = platformClient.order.getAllowedStateTransition({  orderingChannel : value,
 status : value });

// Async/Await
const data = await platformClient.order.getAllowedStateTransition({  orderingChannel : value,
 status : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderingChannel | string | yes | Ordering channel |   
| status | string | yes | current status of a shipment |  



Retrieve next possible states based on logged in user.

*Returned Response:*




[RoleBaseStateTransitionMapping](#RoleBaseStateTransitionMapping)

Role wise state transition mapping, for next possible state




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; send state transition success</i></summary>

```json
{
  "value": {
    "success": true,
    "next_statuses": [
      "bag_picked",
      "delivery_done",
      "rto_bag_delivered",
      "rto_in_transit"
    ]
  }
}
```
</details>

</details>









---


### getAllowedTemplatesForBulk




```javascript
// Promise
const promise = platformClient.order.getAllowedTemplatesForBulk();

// Async/Await
const data = await platformClient.order.getAllowedTemplatesForBulk();
```






Gets All the allowed Templates to perform Bulk Operations.

*Returned Response:*




[AllowedTemplatesResponse](#AllowedTemplatesResponse)

Successfully Found the templates.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; AllowedTemplatesResponseExample</i></summary>

```json
{
  "value": {
    "template_x_slug": [
      {
        "text": "DP Assignment",
        "value": "MANUAL_DP_ASSIGNMENT"
      },
      {
        "text": "Fluid",
        "value": "MOVE_TO_FLUID_STATE"
      },
      {
        "text": "Cancellation"
      }
    ]
  }
}
```
</details>

</details>









---


### getAnnouncements
Get announcements.



```javascript
// Promise
const promise = platformClient.order.getAnnouncements({  date : value });

// Async/Await
const data = await platformClient.order.getAnnouncements({  date : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| date | string | no | Date On which the announcement is Active (Date should in ISO Datetime format IST Time) |  



Retrieve announcements related to orders or shipments.

*Returned Response:*




[AnnouncementsResponse](#AnnouncementsResponse)

Announcements retrieved successfully




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
 isPrioritySort : value,
 excludeLockedShipments : value });

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



Get cross selling platform shipments

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
Get bag by ID.



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
| bagId | string | no | Id of bag |    
| channelBagId | string | no | Id of application bag |    
| channelId | string | no | Id of application |  



Retrieve detailed information about a specific bag.

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
Get bags.



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
| bagIds | string | no | Comma separated values of bag ids |    
| shipmentIds | string | no | Comma separated values of shipment ids |    
| orderIds | string | no | Comma separated values of order ids |    
| channelBagIds | string | no | Comma separated values of app bag ids |    
| channelShipmentIds | string | no | Comma separated values of app shipment ids |    
| channelOrderIds | string | no | Comma separated values of app order ids |    
| channelId | string | no | Comma separated values of app ids |    
| pageNo | number | no | Page number for paginated data |    
| pageSize | number | no | Page size of data received per page |  



Retrieve Bags for the order.

*Returned Response:*




[GetBagsPlatformResponse](#GetBagsPlatformResponse)

Successfully retrived all the given shipments details!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getBulkActionTemplate
Get bulk action template.



```javascript
// Promise
const promise = platformClient.order.getBulkActionTemplate();

// Async/Await
const data = await platformClient.order.getBulkActionTemplate();
```






Retrieve bulk action seller templates.

*Returned Response:*




[BulkActionTemplateResponse](#BulkActionTemplateResponse)

Slug names




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "template_x_slug": [
    {
      "text": "Partial Cancellation",
      "value": "PARTIAL_CANCELLATION"
    }
  ]
}
```
</details>









---


### getBulkShipmentExcelFile
Get bulk shipment Excel file.



```javascript
// Promise
const promise = platformClient.order.getBulkShipmentExcelFile({  salesChannels : value,
 dpIds : value,
 startDate : value,
 endDate : value,
 stores : value,
 tags : value,
 bagStatus : value,
 paymentMethods : value,
 fileType : value,
 timeToDispatch : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.order.getBulkShipmentExcelFile({  salesChannels : value,
 dpIds : value,
 startDate : value,
 endDate : value,
 stores : value,
 tags : value,
 bagStatus : value,
 paymentMethods : value,
 fileType : value,
 timeToDispatch : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| salesChannels | string | no | Comma separated values of sales channel ids |    
| dpIds | string | no | Comma separated values of delivery partner ids |    
| startDate | string | no | UTC start date in ISO format |    
| endDate | string | no | UTC end date in ISO format |    
| stores | string | no | Comma separated values of store ids |    
| tags | string | no | Comma separated values of tags |    
| bagStatus | string | no | Comma separated values of bag statuses |    
| paymentMethods | string | no | Comma separated values of payment methods |    
| fileType | string | no | File type to be downloaded |    
| timeToDispatch | number | no | Sla breached or not breached |    
| pageNo | number | no |  |    
| pageSize | number | no |  |  



Retrieve a bulk shipment Excel report.

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
Get channel configuration.



```javascript
// Promise
const promise = platformClient.order.getChannelConfig();

// Async/Await
const data = await platformClient.order.getChannelConfig();
```






Retrieve configuration settings for a channel.

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


### getFileByStatus




```javascript
// Promise
const promise = platformClient.order.getFileByStatus({  batchId : value,
 status : value,
 fileType : value,
 reportType : value });

// Async/Await
const data = await platformClient.order.getFileByStatus({  batchId : value,
 status : value,
 fileType : value,
 reportType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| batchId | string | yes |  |   
| status | string | yes |  |   
| fileType | string | yes |  |    
| reportType | string | no |  |  



Get the file URL consisting Records of the provided status.

*Returned Response:*




[JobFailedResponse](#JobFailedResponse)

Job details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; DetailsForFailedJobResponse</i></summary>

```json
{
  "value": {
    "file_name": "failed_reason.csv",
    "url": "www.fynd.com/excelfile.csv"
  }
}
```
</details>

</details>









---


### getLaneConfig
Get lane configuration.



```javascript
// Promise
const promise = platformClient.order.getLaneConfig({  superLane : value,
 groupEntity : value,
 fromDate : value,
 toDate : value,
 startDate : value,
 endDate : value,
 dpIds : value,
 stores : value,
 salesChannels : value,
 paymentMode : value,
 bagStatus : value,
 searchType : value,
 searchValue : value,
 tags : value,
 timeToDispatch : value,
 paymentMethods : value,
 myOrders : value,
 showCrossCompanyData : value,
 orderType : value });

// Async/Await
const data = await platformClient.order.getLaneConfig({  superLane : value,
 groupEntity : value,
 fromDate : value,
 toDate : value,
 startDate : value,
 endDate : value,
 dpIds : value,
 stores : value,
 salesChannels : value,
 paymentMode : value,
 bagStatus : value,
 searchType : value,
 searchValue : value,
 tags : value,
 timeToDispatch : value,
 paymentMethods : value,
 myOrders : value,
 showCrossCompanyData : value,
 orderType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| superLane | string | no | Name of lane for which data is to be fetched |    
| groupEntity | string | no | Name of group entity |    
| fromDate | string | no | Start Date in DD-MM-YYYY format |    
| toDate | string | no | End Date in DD-MM-YYYY format |    
| startDate | string | no | UTC Start Date in ISO format |    
| endDate | string | no | UTC End Date in ISO format |    
| dpIds | string | no | Comma separated values of delivery partner ids |    
| stores | string | no | Comma separated values of store ids |    
| salesChannels | string | no |  |    
| paymentMode | string | no | Comma separated values of payment modes |    
| bagStatus | string | no | Comma separated values of bag statuses |    
| searchType | string | no |  |    
| searchValue | string | no |  |    
| tags | string | no |  |    
| timeToDispatch | number | no |  |    
| paymentMethods | string | no |  |    
| myOrders | boolean | no |  |    
| showCrossCompanyData | boolean | no | Flag to view cross & non-cross company order |    
| orderType | string | no |  |  



Retrieve configuration settings for lanes.

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


### getManifestDetails




```javascript
// Promise
const promise = platformClient.order.getManifestDetails({  manifestId : value });

// Async/Await
const data = await platformClient.order.getManifestDetails({  manifestId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| manifestId | string | yes |  |  



get Manifest Details.

*Returned Response:*




[ManifestDetails](#ManifestDetails)

Successful Manifest upload!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getManifestShipments




```javascript
// Promise
const promise = platformClient.order.getManifestShipments({  dpIds : value,
 stores : value,
 toDate : value,
 fromDate : value,
 dpName : value,
 salesChannels : value,
 searchType : value,
 searchValue : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.order.getManifestShipments({  dpIds : value,
 stores : value,
 toDate : value,
 fromDate : value,
 dpName : value,
 salesChannels : value,
 searchType : value,
 searchValue : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| dpIds | number | yes |  |   
| stores | string | yes |  |   
| toDate | string | yes |  |   
| fromDate | string | yes |  |    
| dpName | string | no |  |    
| salesChannels | string | no |  |    
| searchType | string | no |  |    
| searchValue | string | no |  |    
| pageNo | string | no |  |    
| pageSize | string | no |  |  



get Manifest Shipments.

*Returned Response:*




[ManifestShipmentListing](#ManifestShipmentListing)

Successful Manifest upload!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getManifestfilters




```javascript
// Promise
const promise = platformClient.order.getManifestfilters({  view : value });

// Async/Await
const data = await platformClient.order.getManifestfilters({  view : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| view | string | yes | Name of View |  



get Manifest Filters.

*Returned Response:*




[ManifestFiltersResponse](#ManifestFiltersResponse)

List of filters




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{}
```
</details>









---


### getManifests




```javascript
// Promise
const promise = platformClient.order.getManifests({  status : value,
 startDate : value,
 endDate : value,
 searchType : value,
 storeId : value,
 searchValue : value,
 dpIds : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.order.getManifests({  status : value,
 startDate : value,
 endDate : value,
 searchType : value,
 storeId : value,
 searchValue : value,
 dpIds : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| status | string | no | Possible Status [ active, closed ] |    
| startDate | string | no | UTC Start Date in ISO format |    
| endDate | string | no | UTC End Date in ISO format |    
| searchType | string | no | Search type options [ fynd_order_id, shipment_id, manifest_id, dp_name, awb_no ] |    
| storeId | number | no | Fetch manifests for a Store. |    
| searchValue | string | no | Search value for selected search type |    
| dpIds | string | no | DP Ids separated by ',' (comma) |    
| pageNo | number | no |  |    
| pageSize | number | no |  |  



Fetch Manifests

*Returned Response:*




[ManifestList](#ManifestList)

Successful Manifest upload!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getOrderById
Get order by ID.



```javascript
// Promise
const promise = platformClient.order.getOrderById({  orderId : value,
 myOrders : value,
 allowInactive : value });

// Async/Await
const data = await platformClient.order.getOrderById({  orderId : value,
 myOrders : value,
 allowInactive : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes |  |    
| myOrders | boolean | no |  |    
| allowInactive | boolean | no | Flag to allow inactive shipments |  



Retrieve detailed information about a specific order.

*Returned Response:*




[OrderDetailsResponse](#OrderDetailsResponse)

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
      "ordering_store": 1,
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
      "amount_paid_roundoff": 948,
      "amount_to_be_collected": 0
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
          "ordering_store": 1,
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
          "amount_paid_roundoff": 948,
          "amount_to_be_collected": 0
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
            "is_active": true,
            "allow_force_return": true
          },
          "financial_breakup": {
            "price_effective": 524,
            "discount": 174,
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
            "amount_to_be_collected": 0,
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
          },
          "current_status": {
            "id": 1
          },
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
            "igst_gst_fee": 0,
            "cgst_gst_fee": 36.17,
            "sgst_gst_fee": 36.17
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
            },
            "tags": [
              "1P"
            ]
          },
          "affiliate_bag_details": {
            "coupon_code": null
          },
          "quantity": 1,
          "identifier": "",
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
      "payment_info": [
        {
          "amount": 474.25,
          "mode": "PP",
          "name": "PartnerPay",
          "collect_by": "seller",
          "refund_by": "seller",
          "meta": {}
        }
      ],
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
        "amount_paid_roundoff": 474,
        "amount_to_be_collected": 0
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
      "estimated_sla_time": "null",
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
      "custom_meta": []
    }
  ]
}
```
</details>









---


### getOrders
Get orders.



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
 startDate : value,
 endDate : value,
 dpIds : value,
 stores : value,
 salesChannels : value,
 pageNo : value,
 pageSize : value,
 isPrioritySort : value,
 customMeta : value,
 myOrders : value,
 showCrossCompanyData : value,
 customerId : value,
 orderType : value });

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
 startDate : value,
 endDate : value,
 dpIds : value,
 stores : value,
 salesChannels : value,
 pageNo : value,
 pageSize : value,
 isPrioritySort : value,
 customMeta : value,
 myOrders : value,
 showCrossCompanyData : value,
 customerId : value,
 orderType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| lane | string | no | lane refers to a section where orders are assigned, indicating its grouping |    
| searchType | string | no | search_type refers to the field that will be used as the target for the search operation |    
| bagStatus | string | no | bag_status refers to status of the entity. Filters orders based on the status. |    
| timeToDispatch | number | no | time_to_dispatch refers to estimated SLA time. |    
| paymentMethods | string | no |  |    
| tags | string | no | tags refers to additional descriptive labels associated with the order |    
| searchValue | string | no | search_value is matched against the field specified by the search_type |    
| fromDate | string | no |  |    
| toDate | string | no |  |    
| startDate | string | no |  |    
| endDate | string | no |  |    
| dpIds | string | no | Delivery Partner IDs to which shipments are assigned. |    
| stores | string | no |  |    
| salesChannels | string | no |  |    
| pageNo | number | no |  |    
| pageSize | number | no |  |    
| isPrioritySort | boolean | no |  |    
| customMeta | string | no |  |    
| myOrders | boolean | no |  |    
| showCrossCompanyData | boolean | no | Flag to view cross & non-cross company order |    
| customerId | string | no |  |    
| orderType | string | no |  |  



Retrieve a list of available orders.

*Returned Response:*




[OrderListingResponse](#OrderListingResponse)

We are processing the report!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getPlatformShipmentReasons
Get platform shipment reasons.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").order.getPlatformShipmentReasons({  action : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").order.getPlatformShipmentReasons({  action : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| action | string | yes |  |  



Retrieve reasons behind full or partial cancellation of a shipment

*Returned Response:*




[ShipmentReasonsResponse](#ShipmentReasonsResponse)

Success. Check the example shown below or refer `ShipmentReasonsResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getRoleBasedActions
Get role-based actions.



```javascript
// Promise
const promise = platformClient.order.getRoleBasedActions();

// Async/Await
const data = await platformClient.order.getRoleBasedActions();
```






Retrieve role based actions.

*Returned Response:*




[GetActionsResponse](#GetActionsResponse)

You will get an array of actions allowed for that particular user based on their role




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "permissions": [
    {
      "slug": "create_invoice_s3",
      "display_text": "Create Invoice (s3)",
      "id": 2,
      "description": "Create Invoice (s3)"
    },
    {
      "slug": "call",
      "display_text": "Call",
      "id": 3,
      "description": "Call"
    }
  ]
}
```
</details>









---


### getShipmentBagReasons
Get reasons behind full or partial cancellation of a shipment



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").order.getShipmentBagReasons({  shipmentId : value,
 lineNumber : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").order.getShipmentBagReasons({  shipmentId : value,
 lineNumber : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes | ID of the bag. An order may contain multiple items and may get divided into one or more shipment, each having its own ID. |   
| lineNumber | number | yes | line number of bag. |  



Use this API to retrieve the issues that led to the cancellation of bags within a shipment.

*Returned Response:*




[ShipmentBagReasons](#ShipmentBagReasons)

Success. Check the example shown below or refer `ShipmentBagReasons` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "reasons": [
    {
      "id": 1,
      "display_name": "Not available",
      "qc_type": [],
      "question_set": []
    },
    {
      "reasons": [
        {
          "id": 2,
          "display_name": "Processing other orders",
          "qc_type": [],
          "question_set": []
        },
        {
          "id": 3,
          "display_name": "Printer not working",
          "qc_type": [],
          "question_set": []
        },
        {
          "reasons": [
            {
              "id": 4,
              "display_name": "Card issues",
              "qc_type": [],
              "question_set": []
            }
          ]
        }
      ]
    },
    {
      "id": 4,
      "display_name": "Card issues",
      "qc_type": [],
      "question_set": []
    }
  ]
}
```
</details>









---


### getShipmentById
Get shipment by ID.



```javascript
// Promise
const promise = platformClient.order.getShipmentById({  channelShipmentId : value,
 shipmentId : value,
 fetchActiveShipment : value });

// Async/Await
const data = await platformClient.order.getShipmentById({  channelShipmentId : value,
 shipmentId : value,
 fetchActiveShipment : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| channelShipmentId | string | no | App Shipment Id |    
| shipmentId | string | no | Shipment Id |    
| fetchActiveShipment | boolean | no | flag to fetch active or deactivated shipments |  



Retrieve detailed information about a specific shipment.

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
        "meta": {},
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
        "pincode": "400093",
        "tags": [
          "infibeam"
        ]
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
        "source": "null",
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
          "financial_breakup": {
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
            "gst_fee": 23.76,
            "gst_tag": "IGST"
          },
          "current_status": {
            "id": 1
          },
          "item": {
            "name": "Purple Flip Flops",
            "brand": "Nike",
            "slug_key": "purple-flip-flops-ezmucvw4d3",
            "images": [
              "https://hdn-1.fynd.com/products/pictures/item/free/270x0/CL-001L-L-PRPL-PINK-6/Rvk5WbGg9Hx-1.jpg"
            ],
            "size": "5",
            "l1_category": [],
            "l3_category": 27
          },
          "brand": {
            "modified_on": "1655707988",
            "logo": "https://hdn-1.jiomarketx0.de/x0/brands/pictures/square-logo/original/DbhIvd_tB-Logo.jpeg",
            "brand_name": "Nike",
            "company": null,
            "created_on": "1647793418",
            "id": 4
          },
          "gst_details": {
            "gstin_code": "null",
            "gst_tag": "IGST",
            "hsn_code": "62050000",
            "value_of_good": 475.24,
            "gst_tax_percentage": 5,
            "is_default_hsn_code": true,
            "brand_calculated_amount": 499,
            "gst_fee": 23.76,
            "tax_collected_at_source": 0
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
            },
            "tags": [
              "1P"
            ]
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
      "payment_methods": {
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
      },
      "vertical": "GROCERIES",
      "payments": {
        "mode": "COD",
        "logo": "https://hdn-1.fynd.com/payment/Pos+Logo.png",
        "source": "Jio Partner Pay"
      },
      "priority_text": null,
      "status": {
        "created_at": "1655804437",
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
        "pm_price_split": 500,
        "COD": 549,
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
          "is_current": false,
          "text": ""
        },
        {
          "status": "Order Confirmed",
          "time": "2022-06-21T09:39:13+00:00",
          "is_passed": true,
          "is_current": false,
          "text": ""
        },
        {
          "status": "Invoiced",
          "time": "2022-06-21T09:40:12+00:00",
          "is_passed": true,
          "is_current": false,
          "text": ""
        },
        {
          "status": "Delivery Partner Assigned",
          "time": "2022-06-21T09:40:12+00:00",
          "is_passed": true,
          "is_current": false,
          "text": ""
        },
        {
          "status": "Packed",
          "time": "2022-06-21T09:40:12+00:00",
          "is_passed": true,
          "is_current": false,
          "text": ""
        },
        {
          "status": "In Transit",
          "time": "2022-06-21T09:40:12+00:00",
          "is_passed": true,
          "is_current": false,
          "text": ""
        },
        {
          "status": "Out For Delivery",
          "time": "2022-06-21T09:40:29+00:00",
          "is_passed": true,
          "is_current": false,
          "text": ""
        },
        {
          "status": "Delivered",
          "time": "2022-06-21T09:40:37+00:00",
          "is_passed": true,
          "is_current": true,
          "text": ""
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
Get shipment history.



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
| shipmentId | string | no | Shipment Id |    
| bagId | number | no | Bag/Product Id |  



Retrieve the shipment history.

*Returned Response:*




[ShipmentHistoryResponse](#ShipmentHistoryResponse)

It shows the journey of the shipment!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "activity_history": [
    {
      "message": "Bag status changed to pending",
      "store_id": 10,
      "store_code": "SF94",
      "store_name": "shub",
      "reason": {},
      "createdat": "01 Apr 2022, 17:57:PM",
      "user": "system",
      "type": "activity_status",
      "l1_detail": "",
      "l2_detail": "",
      "l3_detail": "",
      "ticket_id": "",
      "ticket_url": ""
    },
    {
      "message": "Bag status changed to placed",
      "store_id": 10,
      "store_code": "SF94",
      "store_name": "shub",
      "reason": {},
      "createdat": "01 Apr 2022, 17:57:PM",
      "user": "system",
      "type": "activity_status",
      "l1_detail": "",
      "l2_detail": "",
      "l3_detail": "",
      "ticket_id": "",
      "ticket_url": ""
    }
  ]
}
```
</details>









---


### getShipmentReasons
Get shipment reasons.



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



Retrieve the issues that led to the cancellation of bags within a shipment.

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
Get shipments.



```javascript
// Promise
const promise = platformClient.order.getShipments({  lane : value,
 bagStatus : value,
 statusOverrideLane : value,
 timeToDispatch : value,
 searchType : value,
 searchValue : value,
 fromDate : value,
 toDate : value,
 startDate : value,
 endDate : value,
 dpIds : value,
 stores : value,
 salesChannels : value,
 pageNo : value,
 pageSize : value,
 fetchActiveShipment : value,
 allowInactive : value,
 excludeLockedShipments : value,
 paymentMethods : value,
 channelShipmentId : value,
 channelOrderId : value,
 customMeta : value,
 orderingChannel : value,
 companyAffiliateTag : value,
 myOrders : value,
 platformUserId : value,
 sortType : value,
 showCrossCompanyData : value,
 tags : value,
 customerId : value,
 orderType : value });

// Async/Await
const data = await platformClient.order.getShipments({  lane : value,
 bagStatus : value,
 statusOverrideLane : value,
 timeToDispatch : value,
 searchType : value,
 searchValue : value,
 fromDate : value,
 toDate : value,
 startDate : value,
 endDate : value,
 dpIds : value,
 stores : value,
 salesChannels : value,
 pageNo : value,
 pageSize : value,
 fetchActiveShipment : value,
 allowInactive : value,
 excludeLockedShipments : value,
 paymentMethods : value,
 channelShipmentId : value,
 channelOrderId : value,
 customMeta : value,
 orderingChannel : value,
 companyAffiliateTag : value,
 myOrders : value,
 platformUserId : value,
 sortType : value,
 showCrossCompanyData : value,
 tags : value,
 customerId : value,
 orderType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| lane | string | no | Name of lane for which data is to be fetched |    
| bagStatus | string | no | Comma separated values of bag statuses |    
| statusOverrideLane | boolean | no | Use this flag to fetch by bag_status and override lane |    
| timeToDispatch | number | no |  |    
| searchType | string | no | Search type key |    
| searchValue | string | no | Search type value |    
| fromDate | string | no | Start Date in DD-MM-YYYY format |    
| toDate | string | no | End Date in DD-MM-YYYY format |    
| startDate | string | no | UTC Start Date in ISO format |    
| endDate | string | no | UTC End Date in ISO format |    
| dpIds | string | no | Comma separated values of delivery partner ids |    
| stores | string | no | Comma separated values of store ids |    
| salesChannels | string | no | Comma separated values of sales channel ids |    
| pageNo | number | no | Page number for paginated data |    
| pageSize | number | no | Page size of data received per page |    
| fetchActiveShipment | boolean | no | flag to fetch active shipments |    
| allowInactive | boolean | no | Flag to allow inactive shipments |    
| excludeLockedShipments | boolean | no | flag to fetch locked shipments |    
| paymentMethods | string | no | Comma separated values of payment methods |    
| channelShipmentId | string | no | App Shipment Id |    
| channelOrderId | string | no | App Order Id |    
| customMeta | string | no |  |    
| orderingChannel | string | no |  |    
| companyAffiliateTag | string | no |  |    
| myOrders | boolean | no |  |    
| platformUserId | string | no |  |    
| sortType | string | no | Sort the result data on basis of input |    
| showCrossCompanyData | boolean | no | Flag to view cross & non-cross company order |    
| tags | string | no | Comma separated values of tags |    
| customerId | string | no |  |    
| orderType | string | no |  |  



Retrieve a list of available shipments.

*Returned Response:*




[ShipmentInternalPlatformViewResponse](#ShipmentInternalPlatformViewResponse)

We are processing the report!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getStateTransitionMap
Get state transition map.



```javascript
// Promise
const promise = platformClient.order.getStateTransitionMap();

// Async/Await
const data = await platformClient.order.getStateTransitionMap();
```






Retrieve a map of state transitions for orders.

*Returned Response:*




[BagStateTransitionMap](#BagStateTransitionMap)

State Transition Mapping, for next possible state




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "fynd": {
    "placed": [
      "bag_not_confirmed",
      "cancelled_customer",
      "cancelled_fynd",
      "bag_confirmed",
      "store_reassigned"
    ],
    "bag_confirmed": [
      "handed_over_to_customer",
      "bag_invoiced"
    ],
    "dp_assigned": [
      "handed_over_to_customer",
      "bag_packed"
    ],
    "bag_packed": [
      "bag_not_picked",
      "cancelled_customer"
    ],
    "handed_over_to_dg": [
      "cancelled_at_dp",
      "credit_note_generated"
    ],
    "out_for_delivery": [
      "delivery_done"
    ],
    "delivery_done": [
      "bag_lost",
      "return_initiated"
    ],
    "return_initiated": [
      "return_accepted"
    ],
    "bag_picked": [
      "refund_completed",
      "out_for_delivery",
      "delivery_done"
    ],
    "pending": [
      "pending",
      "placed",
      "payment_failed",
      "manual_refund"
    ],
    "payment_failed": [
      "awaiting_payment_confirmation",
      "placed",
      "manual_refund"
    ],
    "return_pre_qc": [
      "return_initiated",
      "return_request_cancelled",
      "manual_refund"
    ],
    "bag_not_packed": [
      "manual_refund"
    ],
    "bag_rescheduled": [
      "manual_refund"
    ],
    "fluid_state": [
      "manual_refund"
    ],
    "handed_over_to_customer": [
      "manual_refund",
      "return_initiated"
    ],
    "hold": [
      "manual_refund"
    ],
    "product_not_available": [
      "manual_refund"
    ],
    "qc_fail": [
      "manual_refund"
    ],
    "qc_pass": [
      "manual_refund"
    ],
    "refund_done": [
      "manual_refund"
    ],
    "refund_processing": [
      "manual_refund"
    ],
    "return_assigning_dp": [
      "manual_refund"
    ],
    "return_bag_packed": [
      "manual_refund"
    ],
    "return_dp_cancelled": [
      "manual_refund"
    ],
    "unhold": [
      "manual_refund"
    ],
    "web_store_rescheduled": [
      "manual_refund"
    ],
    "credit_note_cancelled": [
      "refund_initiated"
    ]
  },
  "affiliate": {
    "placed": [
      "bag_not_confirmed",
      "store_reassigned",
      "product_not_available"
    ],
    "store_reassigned": [
      "bag_not_confirmed"
    ],
    "bag_confirmed": [
      "bag_invoiced",
      "cancelled_fynd"
    ],
    "dp_assigned": [
      "bag_packed"
    ],
    "pending": [
      "payment_failed",
      "placed",
      "manual_refund"
    ],
    "ready_for_dp_assignment": [
      "dp_assigned"
    ],
    "credit_note_generated": [
      "refund_pending",
      "refund_initiated"
    ],
    "assigning_return_dp": [
      "manual_refund"
    ],
    "bag_not_packed": [
      "manual_refund"
    ],
    "bag_rescheduled": [
      "manual_refund"
    ],
    "fluid_state": [
      "manual_refund"
    ],
    "handed_over_to_customer": [
      "manual_refund",
      "return_initiated"
    ],
    "hold": [
      "manual_refund"
    ],
    "product_not_available": [
      "manual_refund"
    ],
    "qc_fail": [
      "manual_refund"
    ],
    "qc_pass": [
      "manual_refund"
    ],
    "refund_done": [
      "manual_refund"
    ],
    "refund_processing": [
      "manual_refund"
    ],
    "return_assigning_dp": [
      "manual_refund"
    ],
    "return_bag_packed": [
      "manual_refund"
    ],
    "return_dp_cancelled": [
      "manual_refund"
    ],
    "unhold": [
      "manual_refund"
    ],
    "web_store_rescheduled": [
      "manual_refund"
    ],
    "credit_note_cancelled": [
      "refund_initiated"
    ]
  }
}
```
</details>









---


### getTemplate




```javascript
// Promise
const promise = platformClient.order.getTemplate({  templateName : value });

// Async/Await
const data = await platformClient.order.getTemplate({  templateName : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| templateName | string | yes |  |  



Get the Excel file URL for the Template.

*Returned Response:*




[TemplateDownloadResponse](#TemplateDownloadResponse)

Sucessfully Created the Template Url.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; AllowedTemplatesResponseExample</i></summary>

```json
{
  "value": {
    "file_name": "template.xlsx",
    "url": "www.fynd.com/excelfile.xlsx"
  }
}
```
</details>

</details>









---


### getfilters
Get filters.



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
| view | string | yes | Name of view |    
| groupEntity | string | no | Name of group entity |  



Retrieve listing filters.

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
Invalidate shipment cache.



```javascript
// Promise
const promise = platformClient.order.invalidateShipmentCache({  body : value });

// Async/Await
const data = await platformClient.order.invalidateShipmentCache({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [InvalidateShipmentCachePayload](#InvalidateShipmentCachePayload) | yes | Request body |


Invalidate shipment Cache.

*Returned Response:*




[InvalidateShipmentCacheResponse](#InvalidateShipmentCacheResponse)

Successfully updated shipment cache!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "response": [
    {
      "message": "Shipment sync initiated",
      "status": 200,
      "shipment_id": "16838049724111283577",
      "error": ""
    },
    {
      "message": "Cannot update cache if shipment in pending, payment_failed or awaiting_payment_confirmation",
      "status": 400,
      "shipment_id": "16836368409661507353",
      "error": ""
    },
    {
      "message": "Problem while deleting the cache",
      "status": 500,
      "shipment_id": "16838049724111283577",
      "error": "Internal Exception"
    }
  ]
}
```
</details>









---


### jobDetails




```javascript
// Promise
const promise = platformClient.order.jobDetails({  batchId : value });

// Async/Await
const data = await platformClient.order.jobDetails({  batchId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| batchId | string | yes |  |  



Fetches details for the job of the provided batch_id

*Returned Response:*




[JobDetailsResponse](#JobDetailsResponse)

Job details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; JobDetailsSucessfulEventSample</i></summary>

```json
{
  "value": {
    "success": true,
    "data": [
      {
        "batch_id": "1dc51db3-89fc-4985-9237-d96efb9060ae",
        "total_shipments_count": 1,
        "successful_shipment_ids": [],
        "successful_shipments_count": 0,
        "failed_shipments_count": 1,
        "processing_shipments_count": 0,
        "company_id": "2"
      }
    ],
    "file_url": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/general/free/original/kctNhcXxX-UV71fzH2U-store_reassigned_and_placed_and__3809_1694082156.8009899.csv",
    "failed_records": [
      {
        "all": "due to no of rows being less than 2 or greater than 5000"
      }
    ],
    "uploaded_by": "mohitmahatme_gofynd_com_31814",
    "user_id": "d7595ec4e390849545a68c92",
    "uploaded_on": "2023-09-07T15:55:24+00:00",
    "status": "FAILED"
  }
}
```
</details>

</details>









---


### orderUpdate
Order update.



```javascript
// Promise
const promise = platformClient.order.orderUpdate({  body : value });

// Async/Await
const data = await platformClient.order.orderUpdate({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PlatformOrderUpdate](#PlatformOrderUpdate) | yes | Request body |


Modify the details and status of an order. 

*Returned Response:*




[ResponseDetail](#ResponseDetail)

We are processing the order!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### postShipmentHistory
Post shipment history.



```javascript
// Promise
const promise = platformClient.order.postShipmentHistory({  body : value });

// Async/Await
const data = await platformClient.order.postShipmentHistory({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PostShipmentHistory](#PostShipmentHistory) | yes | Request body |


Add history records for a shipment.

*Returned Response:*




[ShipmentHistoryResponse](#ShipmentHistoryResponse)

It shows the journey of the shipment!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "activity_history": [
    {
      "message": "Bag status changed to pending",
      "store_id": 10,
      "store_code": "SF94",
      "store_name": "shub",
      "reason": {},
      "createdat": "01 Apr 2022, 17:57:PM",
      "user": "system",
      "type": "activity_status",
      "l1_detail": "",
      "l2_detail": "",
      "l3_detail": "",
      "ticket_id": "",
      "ticket_url": ""
    },
    {
      "message": "Bag status changed to placed",
      "store_id": 10,
      "store_code": "SF94",
      "store_name": "shub",
      "reason": {},
      "type": "activity_status",
      "createdat": "01 Apr 2022, 17:57:PM",
      "user": "system",
      "l1_detail": "",
      "l2_detail": "",
      "l3_detail": "",
      "ticket_id": "",
      "ticket_url": ""
    }
  ],
  "success": true
}
```
</details>









---


### processManifests




```javascript
// Promise
const promise = platformClient.order.processManifests({  body : value });

// Async/Await
const data = await platformClient.order.processManifests({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ProcessManifest](#ProcessManifest) | yes | Request body |


Process Manifest.

*Returned Response:*




[ProcessManifestItemResponse](#ProcessManifestItemResponse)

Manifest will be processed!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### reassignLocation
Reassign location.



```javascript
// Promise
const promise = platformClient.order.reassignLocation({  body : value });

// Async/Await
const data = await platformClient.order.reassignLocation({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [StoreReassign](#StoreReassign) | yes | Request body |


Change the assigned location for an order or shipment.

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
Send SMS via Ninja.



```javascript
// Promise
const promise = platformClient.order.sendSmsNinja({  body : value });

// Async/Await
const data = await platformClient.order.sendSmsNinja({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [SendSmsPayload](#SendSmsPayload) | yes | Request body |


Send SMS Ninja Panel.

*Returned Response:*




[OrderStatusResult](#OrderStatusResult)

Sms Sent successfully




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": "true",
  "message": "Successfully emitted aldaviz-delayed-shipment-event"
}
```
</details>









---


### sendUserMobileOTP
Send user mobile OTP.



```javascript
// Promise
const promise = platformClient.order.sendUserMobileOTP({  body : value });

// Async/Await
const data = await platformClient.order.sendUserMobileOTP({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [SendUserMobileOTP](#SendUserMobileOTP) | yes | Request body |


Send a one-time OTP to a users mobile device.

*Returned Response:*




[SendUserMobileOtpResponse](#SendUserMobileOtpResponse)

Send OTP to user mobile




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": {
    "request_id": "112312312",
    "message": "Text",
    "resend_timer": 600,
    "mobile": 99990000
  },
  "message": "Text"
}
```
</details>









---


### trackShipment
Track shipment.



```javascript
// Promise
const promise = platformClient.order.trackShipment({  shipmentId : value,
 awb : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.order.trackShipment({  shipmentId : value,
 awb : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| shipmentId | string | no | Shipment ID |    
| awb | string | no | AWB number |    
| pageNo | number | no | Page number |    
| pageSize | number | no | Page size |  



Retrieve courier partner tracking details for a given shipment id or awb no.

*Returned Response:*




[CourierPartnerTrackingResponse](#CourierPartnerTrackingResponse)

Shipment Tracking fetched successfully




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "items": [
      {
        "awb": "713191641",
        "dp_location": "Mumbai",
        "dp_name": "Ecom b2b",
        "dp_status": "dp_assigned",
        "dp_status_updated_at": "2023-07-12T20:17:46.384Z",
        "estimated_delivery_date": "2023-07-12T20:17:46.384Z",
        "id": 370,
        "journey": "forward",
        "operational_status": "dp_assigned",
        "promised_delivery_date": "2023-07-12T20:17:46.384Z",
        "remark": "UD -Manifested",
        "shipment_id": "16908065964581066182"
      }
    ],
    "page": {
      "current": 1,
      "has_next": true,
      "item_total": 3,
      "size": 200,
      "type": "number"
    }
  }
}
```
</details>

</details>









---


### trackShipmentPlatform
Track shipment on the platform.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").order.trackShipmentPlatform({  shipmentId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").order.trackShipmentPlatform({  shipmentId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| shipmentId | string | yes | Shipment Id |  



Track shipment by Shipment ID for application based on application Id

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
      "meta": {}
    }
  ]
}
```
</details>









---


### updateAddress
Update address.



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



Modify the shipping address for an order.

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
Update packaging dimensions.



```javascript
// Promise
const promise = platformClient.order.updatePackagingDimensions({  body : value });

// Async/Await
const data = await platformClient.order.updatePackagingDimensions({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UpdatePackagingDimensionsPayload](#UpdatePackagingDimensionsPayload) | yes | Request body |


Modify the dimensions of packaging.

*Returned Response:*




[UpdatePackagingDimensionsResponse](#UpdatePackagingDimensionsResponse)

Manifest will be processed!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateShipmentLock
Update shipment lock.



```javascript
// Promise
const promise = platformClient.order.updateShipmentLock({  body : value });

// Async/Await
const data = await platformClient.order.updateShipmentLock({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UpdateShipmentLockPayload](#UpdateShipmentLockPayload) | yes | Request body |


Modify shipment/bag lock and check status.

*Returned Response:*




[UpdateShipmentLockResponse](#UpdateShipmentLockResponse)

Successfully update the Lock and get check status of the shipment/Bag




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "message": "shipments checked successfully",
  "check_response": [
    {
      "bags": [
        {
          "bag_id": 175644,
          "is_locked": false,
          "affiliate_bag_id": "def134",
          "affiliate_order_id": "def134"
        }
      ],
      "lock_status": "complete",
      "is_bag_locked": false,
      "is_shipment_locked": true,
      "shipment_id": "16189206454951802898",
      "affiliate_id": "5c764a6534add21972ef7b08",
      "affiliate_shipment_id": "def134",
      "original_filter": {
        "shipment_id": "16189206454951802898"
      },
      "status": "dp_assigned"
    }
  ]
}
```
</details>









---


### updateShipmentStatus
Update shipment status.



```javascript
// Promise
const promise = platformClient.order.updateShipmentStatus({  body : value });

// Async/Await
const data = await platformClient.order.updateShipmentStatus({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UpdateShipmentStatusRequest](#UpdateShipmentStatusRequest) | yes | Request body |


Shipment state transition or Shipment data update or both.

*Returned Response:*




[UpdateShipmentStatusResponseBody](#UpdateShipmentStatusResponseBody)

NOTE success response can contains success and failed result as well




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "statuses": [
    {
      "shipments": [
        {
          "status": 200,
          "final_state": {
            "bag_confirmed": "bag_confirmed",
            "shipment_id": "16836279770211860494"
          },
          "identifier": "16836279770211860494"
        }
      ]
    },
    {
      "shipments": [
        {
          "status": 400,
          "message": "Invalid State Transition bag_confirmed detected for given entity",
          "code": "",
          "exception": "ValidationError",
          "stack_trace": "",
          "meta": {},
          "identifier": "16836279770211860494"
        }
      ]
    }
  ]
}
```
</details>









---


### updateShipmentTracking
Update shipment tracking.



```javascript
// Promise
const promise = platformClient.order.updateShipmentTracking({  body : value });

// Async/Await
const data = await platformClient.order.updateShipmentTracking({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CourierPartnerTrackingDetails](#CourierPartnerTrackingDetails) | yes | Request body |


Modify courier partner tracking details for a given shipment id or awb no.

*Returned Response:*




[CourierPartnerTrackingDetails](#CourierPartnerTrackingDetails)

Shipment Tracking updated successfully




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "awb": "713191641",
    "dp_location": "Mumbai",
    "dp_name": "Ecom b2b",
    "dp_status": "dp_assigned",
    "dp_status_updated_at": "2023-07-12T20:17:46.384Z",
    "estimated_delivery_date": "2023-07-12T20:17:46.384Z",
    "id": 370,
    "journey": "forward",
    "operational_status": "dp_assigned",
    "promised_delivery_date": "2023-07-12T20:17:46.384Z",
    "remark": "UD -Manifested",
    "shipment_id": "16908065964581066182"
  }
}
```
</details>

</details>









---


### uploadConsents




```javascript
// Promise
const promise = platformClient.order.uploadConsents({  manifestId : value,
 body : value });

// Async/Await
const data = await platformClient.order.uploadConsents({  manifestId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| manifestId | string | yes |  |  
| body | [UploadConsent](#UploadConsent) | yes | Request body |


Upload Consent

*Returned Response:*




[SuccessResponse](#SuccessResponse)

Successful Manifest upload!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### verifyMobileOTP
Verify mobile OTP.



```javascript
// Promise
const promise = platformClient.order.verifyMobileOTP({  body : value });

// Async/Await
const data = await platformClient.order.verifyMobileOTP({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [VerifyMobileOTP](#VerifyMobileOTP) | yes | Request body |


Verify Mobile OTP

*Returned Response:*




[VerifyOtpResponse](#VerifyOtpResponse)

Verify OTP




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

#### [AdvanceFilterInfo](#AdvanceFilterInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action_centre | [[FiltersInfo](#FiltersInfo)]? |  yes  |  |
 | applied_filters | string? |  yes  |  |
 | filters | [[FiltersInfo](#FiltersInfo)]? |  yes  |  |
 | page | string? |  yes  |  |
 | processed | [[FiltersInfo](#FiltersInfo)]? |  yes  |  |
 | returned | [[FiltersInfo](#FiltersInfo)]? |  yes  |  |
 | unfulfilled | [[FiltersInfo](#FiltersInfo)]? |  yes  |  |
 

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

#### [AffiliateBagsDetails](#AffiliateBagsDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_bag_id | string? |  yes  |  |
 | affiliate_meta | [AffiliateMeta](#AffiliateMeta)? |  yes  |  |
 | coupon_code | string? |  yes  |  |
 

---

#### [AffiliateConfig](#AffiliateConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app | [AffiliateAppConfig](#AffiliateAppConfig)? |  yes  |  |
 | app_company_id | number? |  yes  |  |
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
 | config | [AffiliateConfig](#AffiliateConfig)? |  yes  |  |
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
 | customer_selling_price | number? |  yes  |  |
 | due_date | string? |  yes  |  |
 | employee_discount | number? |  yes  |  |
 | fulfilment_priority | number? |  yes  |  |
 | is_priority | boolean? |  yes  |  |
 | is_serial_number_required | boolean? |  yes  |  |
 | loyalty_discount | number? |  yes  |  |
 | marketplace_invoice_id | string? |  yes  |  |
 | order_item_id | string? |  yes  |  |
 | quantity | number? |  yes  |  |
 | replacement_details | [ReplacementDetails](#ReplacementDetails)? |  yes  |  |
 | size_level_total_qty | number? |  yes  |  |
 

---

#### [AffiliateStoreIdMapping](#AffiliateStoreIdMapping)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | marketplace_store_id | string |  no  |  |
 | store_id | number |  no  |  |
 

---

#### [AllowedTemplatesResponse](#AllowedTemplatesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | template_x_slug | [[Templates](#Templates)]? |  yes  |  |
 

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
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

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
 | currency | string? |  yes  |  |
 | dimensions | [Dimensions](#Dimensions)? |  yes  |  |
 | esp_modified | boolean? |  yes  |  |
 | identifiers | string |  no  |  |
 | is_set | boolean? |  yes  |  |
 | raw_meta | string? |  yes  |  |
 | return_config | [ReturnConfig](#ReturnConfig)? |  yes  |  |
 | seller_identifier | string |  no  |  |
 | size | string |  no  |  |
 | tags | [string]? |  yes  |  |
 | uid | string |  no  |  |
 | weight | [Weight](#Weight)? |  yes  |  |
 

---

#### [ArticleDetails](#ArticleDetails)

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

#### [ArticleStatusDetails](#ArticleStatusDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string? |  yes  |  |
 

---

#### [AttachOrderUser](#AttachOrderUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_order_id | string |  no  |  |
 | otp_data | [AttachUserOtpData](#AttachUserOtpData) |  no  |  |
 | user_info | [AttachUserInfo](#AttachUserInfo) |  no  |  |
 

---

#### [AttachOrderUserResponse](#AttachOrderUserResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [AttachUserInfo](#AttachUserInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | first_name | string |  no  |  |
 | last_name | string |  no  |  |
 | mobile | string |  no  |  |
 

---

#### [AttachUserOtpData](#AttachUserOtpData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | request_id | string |  no  |  |
 

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

#### [BagData](#BagData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[BagDetails](#BagDetails)]? |  yes  |  |
 | page | [BagsPage](#BagsPage)? |  yes  |  |
 

---

#### [BagDetails](#BagDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_bag_details | [AffiliateBagDetails](#AffiliateBagDetails)? |  yes  |  |
 | affiliate_details | [AffiliateDetails](#AffiliateDetails)? |  yes  |  |
 | applied_promos | [string]? |  yes  |  |
 | article | [Article](#Article)? |  yes  |  |
 | article_details | [ArticleStatusDetails](#ArticleStatusDetails)? |  yes  |  |
 | bag_id | number? |  yes  |  |
 | bag_status | [[BagStatusHistory](#BagStatusHistory)]? |  yes  |  |
 | bag_status_history | [BagStatusHistory](#BagStatusHistory)? |  yes  |  |
 | bag_update_time | number? |  yes  |  |
 | brand | [Brand](#Brand)? |  yes  |  |
 | company | [Company](#Company)? |  yes  |  |
 | current_operational_status | [BagStatusHistory](#BagStatusHistory)? |  yes  |  |
 | current_status | [BagStatusHistory](#BagStatusHistory)? |  yes  |  |
 | dates | [Dates](#Dates)? |  yes  |  |
 | delivery_address | [PlatformDeliveryAddress](#PlatformDeliveryAddress)? |  yes  |  |
 | delivery_slot | [DeliverySlotDetails](#DeliverySlotDetails)? |  yes  |  |
 | display_name | string? |  yes  |  |
 | dp_details | string? |  yes  |  |
 | einvoice_info | string? |  yes  |  |
 | entity_type | string? |  yes  |  |
 | fallback_user | string? |  yes  |  |
 | financial_breakup | [[FinancialBreakup](#FinancialBreakup)]? |  yes  |  |
 | fulfilling_store | [Store](#Store)? |  yes  |  |
 | fyndstore_emp | string? |  yes  |  |
 | gst_details | [GSTDetailsData](#GSTDetailsData)? |  yes  |  |
 | id | string? |  yes  |  |
 | identifier | string? |  yes  |  |
 | invoice | [InvoiceDetails](#InvoiceDetails)? |  yes  |  |
 | item | [Item](#Item)? |  yes  |  |
 | journey_type | string? |  yes  |  |
 | line_number | number? |  yes  |  |
 | lock_status | boolean? |  yes  |  |
 | manifest_id | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | mode_of_payment | string? |  yes  |  |
 | no_of_bags_order | number? |  yes  |  |
 | operational_status | string? |  yes  |  |
 | order | [OrderDetails](#OrderDetails)? |  yes  |  |
 | order_integration_id | string? |  yes  |  |
 | order_type | string? |  yes  |  |
 | order_value | number? |  yes  |  |
 | ordering_store | [Store](#Store)? |  yes  |  |
 | original_bag_list | [number]? |  yes  |  |
 | parent_promo_bags | string? |  yes  |  |
 | payment_methods | string? |  yes  |  |
 | payment_type | string? |  yes  |  |
 | payments | string? |  yes  |  |
 | prices | [Prices](#Prices)? |  yes  |  |
 | qc_required | boolean? |  yes  |  |
 | quantity | number? |  yes  |  |
 | reasons | [string]? |  yes  |  |
 | restore_coupon | boolean? |  yes  |  |
 | restore_promos | string? |  yes  |  |
 | rto_address | [PlatformDeliveryAddress](#PlatformDeliveryAddress)? |  yes  |  |
 | seller_identifier | string? |  yes  |  |
 | shipment | [Shipment](#Shipment)? |  yes  |  |
 | shipment_details | [ShipmentDetails](#ShipmentDetails)? |  yes  |  |
 | shipment_gst | [ShipmentGstDetails](#ShipmentGstDetails)? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | shipment_status | [ShipmentStatusData](#ShipmentStatusData)? |  yes  |  |
 | shipment_status_history | [[ShipmentStatusData](#ShipmentStatusData)]? |  yes  |  |
 | status | [BagReturnableCancelableStatus](#BagReturnableCancelableStatus)? |  yes  |  |
 | tags | [string]? |  yes  |  |
 | total_shipment_bags | number? |  yes  |  |
 | total_shipments_in_order | number? |  yes  |  |
 | transaction_type | string? |  yes  |  |
 | type | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | user | [UserDetails](#UserDetails)? |  yes  |  |
 | weight | [WeightData](#WeightData)? |  yes  |  |
 

---

#### [BagDetailsPlatformResponse](#BagDetailsPlatformResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [BagDetails](#BagDetails)? |  yes  |  |
 | status_code | number? |  yes  |  |
 

---

#### [BagPaymentMethods](#BagPaymentMethods)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number? |  yes  |  |
 | mode | string? |  yes  |  |
 

---

#### [BagReasonMeta](#BagReasonMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | show_text_area | boolean? |  yes  |  |
 

---

#### [BagReasons](#BagReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | id | number? |  yes  |  |
 | meta | [BagReasonMeta](#BagReasonMeta)? |  yes  |  |
 | qc_type | [string]? |  yes  |  |
 | question_set | [[QuestionSet](#QuestionSet)]? |  yes  |  |
 | reasons | [[BagReasons](#BagReasons)]? |  yes  |  |
 

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
 | affiliate_bag_id | string? |  yes  | Application/Affiliate Bag ID, Required if the ID is missing |
 | affiliate_order_id | string? |  yes  | Application/Affiliate Order ID, Required if the ID is missing |
 | bag_id | number? |  yes  | Bag Id |
 | is_locked | boolean? |  yes  | Is Bag Locked |
 

---

#### [BagsPage](#BagsPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | item_total | number |  no  |  |
 | page_type | string |  no  |  |
 | size | number |  no  |  |
 

---

#### [BagStateMapper](#BagStateMapper)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_display_name | string? |  yes  |  |
 | app_facing | boolean? |  yes  |  |
 | app_state_name | string? |  yes  |  |
 | display_name | string |  no  |  |
 | id | number |  no  |  |
 | is_active | boolean? |  yes  |  |
 | journey_type | string |  no  |  |
 | name | string |  no  |  |
 | notify_customer | boolean? |  yes  |  |
 | state_type | string |  no  |  |
 

---

#### [BagStateTransitionMap](#BagStateTransitionMap)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate | string? |  yes  |  |
 | fynd | string? |  yes  |  |
 

---

#### [BagStatusHistory](#BagStatusHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_display_name | string? |  yes  |  |
 | bag_id | number? |  yes  |  |
 | bag_state_mapper | [BagStateMapper](#BagStateMapper)? |  yes  |  |
 | bsh_id | number? |  yes  |  |
 | created_at | string? |  yes  |  |
 | created_ts | string? |  yes  |  |
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
 | updated_ts | string? |  yes  |  |
 

---

#### [BagUnit](#BagUnit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_bag_details | [AffiliateBagDetails](#AffiliateBagDetails)? |  yes  |  |
 | article | [Article](#Article)? |  yes  |  |
 | bag_expiry_date | string? |  yes  |  |
 | bag_id | number |  no  |  |
 | bag_status | [[BagStatusHistory](#BagStatusHistory)]? |  yes  |  |
 | bag_type | string? |  yes  |  |
 | brand | [ShipmentListingBrand](#ShipmentListingBrand)? |  yes  |  |
 | can_cancel | boolean? |  yes  |  |
 | can_return | boolean? |  yes  |  |
 | current_operational_status | [BagStatusHistory](#BagStatusHistory) |  no  |  |
 | current_status | [BagStatusHistory](#BagStatusHistory) |  no  |  |
 | dates | [Dates](#Dates)? |  yes  |  |
 | display_name | string? |  yes  |  |
 | entity_type | string? |  yes  |  |
 | financial_breakup | [[FinancialBreakup](#FinancialBreakup)] |  no  |  |
 | gst | [GSTDetailsData](#GSTDetailsData)? |  yes  |  |
 | item | [PlatformItem](#PlatformItem)? |  yes  |  |
 | line_number | number? |  yes  |  |
 | meta | string? |  yes  |  |
 | prices | [Prices](#Prices)? |  yes  |  |
 | product_quantity | number |  no  |  |
 | reasons | [string]? |  yes  |  |
 | size | string? |  yes  |  |
 | status | [BagReturnableCancelableStatus](#BagReturnableCancelableStatus) |  no  |  |
 

---

#### [BaseResponse](#BaseResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [BillingInfo](#BillingInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string? |  yes  |  |
 | address1 | string? |  yes  |  |
 | address2 | string? |  yes  |  |
 | alternate_email | string? |  yes  |  |
 | alternate_mobile_number | string? |  yes  |  |
 | area | string? |  yes  |  |
 | city | string? |  yes  |  |
 | country | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | country_iso_code | string? |  yes  | Country Code in ISO 2 format (e.g. US, IN) |
 | customer_code | string? |  yes  |  |
 | external_customer_code | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | floor_no | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | house_no | string? |  yes  |  |
 | landmark | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | middle_name | string? |  yes  |  |
 | pincode | string? |  yes  |  |
 | primary_email | string? |  yes  |  |
 | primary_mobile_number | string? |  yes  |  |
 | state | string? |  yes  |  |
 | state_code | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [Brand](#Brand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_id | number? |  yes  |  |
 | brand_name | string |  no  |  |
 | company | string? |  yes  |  |
 | created_on | string? |  yes  |  |
 | credit_note_allowed | boolean? |  yes  |  |
 | credit_note_expiry_days | number? |  yes  |  |
 | id | number? |  yes  |  |
 | invoice_prefix | string? |  yes  |  |
 | is_virtual_invoice | boolean? |  yes  |  |
 | logo | string? |  yes  |  |
 | modified_on | string? |  yes  |  |
 | pickup_location | string? |  yes  |  |
 | script_last_ran | string? |  yes  |  |
 | start_date | string? |  yes  |  |
 

---

#### [BulkActionListingData](#BulkActionListingData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | batch_id | string? |  yes  |  |
 | bulk_action_type | string? |  yes  |  |
 | company_id | number? |  yes  |  |
 | created_ts | string? |  yes  |  |
 | do_invoice_label_generated | boolean? |  yes  |  |
 | file_name | string? |  yes  |  |
 | file_url | string? |  yes  |  |
 | id | number? |  yes  |  |
 | invoice_document_type | string? |  yes  |  |
 | invoice_status | string? |  yes  |  |
 | is_invoiceable | boolean? |  yes  |  |
 | label_document_type | string? |  yes  |  |
 | last_selected_invoice_label_type | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | shipments_action_info | [ShipmentActionInfo](#ShipmentActionInfo)? |  yes  |  |
 | status | boolean? |  yes  |  |
 | store_code | string? |  yes  |  |
 | store_id | number? |  yes  |  |
 | store_name | string? |  yes  |  |
 | updated_ts | number? |  yes  |  |
 | uploaded_by | string? |  yes  |  |
 | uploaded_on | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 | user_name | string? |  yes  |  |
 

---

#### [BulkActionTemplate](#BulkActionTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [BulkActionTemplateResponse](#BulkActionTemplateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | template_x_slug | [[BulkActionTemplate](#BulkActionTemplate)]? |  yes  | Allowed bulk action template slugs |
 

---

#### [BulkFailedResponse](#BulkFailedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string? |  yes  |  |
 | status | boolean? |  yes  |  |
 

---

#### [BulkListingResponse](#BulkListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[BulkActionListingData](#BulkActionListingData)]? |  yes  |  |
 | page | [BulkListinPage](#BulkListinPage)? |  yes  |  |
 | success | boolean? |  yes  |  |
 | total_count | number? |  yes  |  |
 

---

#### [BulkListinPage](#BulkListinPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | has_previous | boolean? |  yes  |  |
 | item_total | number? |  yes  |  |
 | size | number? |  yes  |  |
 | total | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [BulkReportsDownloadRequest](#BulkReportsDownloadRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | custom_filters_for_lane | string? |  yes  |  |
 | custom_headers | string? |  yes  | Download report with specific headers |
 | end_date | string? |  yes  | UTC end date in ISO format |
 | entities | [string]? |  yes  | Download for specific enitites, entities can be bag, shipment or order_id, etc. |
 | filter_type | string? |  yes  |  |
 | is_cross_company_enabled | boolean? |  yes  | Download lanes for cross company. |
 | lane_type | string? |  yes  |  |
 | report_type | string? |  yes  | Type of report |
 | start_date | string? |  yes  | UTC start date in ISO format |
 | store_ids | [string]? |  yes  | Download for specific store ids. |
 

---

#### [BulkReportsDownloadResponse](#BulkReportsDownloadResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | batch_id | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [BulkStateTransistionRequest](#BulkStateTransistionRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | file_name | string? |  yes  |  |
 | url | string? |  yes  |  |
 

---

#### [BulkStateTransistionResponse](#BulkStateTransistionResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | batch_id | string? |  yes  |  |
 | message | string? |  yes  |  |
 | status | boolean? |  yes  |  |
 

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
 | affiliate_id | string? |  yes  | Affiliate ID |
 | affiliate_shipment_id | string? |  yes  | Affiliate Shipment ID |
 | bags | [[Bags](#Bags)]? |  yes  |  |
 | is_bag_locked | boolean? |  yes  | Is Bag Locked |
 | is_shipment_locked | boolean? |  yes  | Is Shipment Locked |
 | lock_status | string? |  yes  | Lock Status: Expected lock_status: [complete, operational, financial] |
 | original_filter | [OriginalFilter](#OriginalFilter)? |  yes  | Filter |
 | shipment_id | string? |  yes  | Shipment ID |
 | status | string? |  yes  | Status |
 

---

#### [Click2CallResponse](#Click2CallResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | call_id | string |  no  | Call ID from the provider |
 | success | boolean |  no  | Success |
 

---

#### [Company](#Company)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | agreement_start_date | string? |  yes  |  |
 | business_type | string? |  yes  |  |
 | company_name | string? |  yes  |  |
 | company_type | string? |  yes  |  |
 | created_on | string? |  yes  |  |
 | gst_number | string? |  yes  |  |
 | id | number? |  yes  |  |
 | meta | string? |  yes  |  |
 | modified_on | string? |  yes  |  |
 | pan_no | string? |  yes  |  |
 

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

#### [ConversionRate](#ConversionRate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | base | string? |  yes  |  |
 | rates | string? |  yes  |  |
 

---

#### [CourierPartnerTrackingDetails](#CourierPartnerTrackingDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | awb | string |  no  | AWB Number |
 | dp_location | string? |  yes  | Current location of Courier partner |
 | dp_name | string |  no  | Courier Partner name |
 | dp_status | string |  no  | Status at Courier partner end |
 | dp_status_updated_at | string |  no  | Date Time at which status was updated at Courier partner |
 | estimated_delivery_date | string? |  yes  | Estimated delivery date received from Courier partner |
 | id | number? |  yes  | Id of Tracking history |
 | journey | string |  no  | Journey type of the shipment |
 | meta | string? |  yes  | Meta field to store Courier partner's meta data |
 | operational_status | string |  no  | Operational status of OMS |
 | promised_delivery_date | string? |  yes  | Promised delivery date received from Courier partner |
 | remark | string? |  yes  | Remark from courier partner |
 | shipment_id | string |  no  | Shipment ID |
 

---

#### [CourierPartnerTrackingResponse](#CourierPartnerTrackingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[CourierPartnerTrackingDetails](#CourierPartnerTrackingDetails)]? |  yes  |  |
 | page | [PageDetails](#PageDetails)? |  yes  |  |
 

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
 | user_info | [UserInfo](#UserInfo)? |  yes  |  |
 

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

#### [CreditBalanceInfo](#CreditBalanceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | customer_mobile_number | string? |  yes  |  |
 | reason | string? |  yes  |  |
 | total_credited_balance | string? |  yes  |  |
 

---

#### [Currency](#Currency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency_code | string? |  yes  |  |
 | currency_symbol | string? |  yes  |  |
 

---

#### [CurrencyInfo](#CurrencyInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | conversion_rate | [ConversionRate](#ConversionRate)? |  yes  |  |
 | ordering_currency | [OrderingCurrency](#OrderingCurrency)? |  yes  |  |
 

---

#### [CurrentStatus](#CurrentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_id | number? |  yes  |  |
 | bag_state_mapper | [BagStateMapper](#BagStateMapper)? |  yes  |  |
 | created_at | string? |  yes  |  |
 | created_ts | string? |  yes  |  |
 | delivery_awb_number | string? |  yes  |  |
 | delivery_partner_id | number? |  yes  |  |
 | id | number |  no  |  |
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
 | order_item_status | [[OrderItemDataUpdates](#OrderItemDataUpdates)]? |  yes  |  |
 | products | [[ProductsDataUpdates](#ProductsDataUpdates)]? |  yes  |  |
 

---

#### [DateRange](#DateRange)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | from_date | string? |  yes  |  |
 | to_date | string? |  yes  |  |
 

---

#### [Dates](#Dates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | delivery_date | string? |  yes  |  |
 | order_created | string? |  yes  |  |
 

---

#### [DebugInfo](#DebugInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | stormbreaker_uuid | string? |  yes  |  |
 

---

#### [DeliverySlotDetails](#DeliverySlotDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | date | string? |  yes  |  |
 | lower_bound | string? |  yes  |  |
 | slot | string? |  yes  |  |
 | type | string? |  yes  |  |
 | upper_bound | string? |  yes  |  |
 

---

#### [Dimension](#Dimension)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | height | string? |  yes  |  |
 | length | number? |  yes  |  |
 | packaging_type | string? |  yes  |  |
 | weight | string? |  yes  |  |
 | width | number? |  yes  |  |
 

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

#### [EInvoiceDetails](#EInvoiceDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error_details | [[EInvoiceErrorDetails](#EInvoiceErrorDetails)]? |  yes  |  |
 | irn_details | [EInvoiceIrnDetails](#EInvoiceIrnDetails)? |  yes  |  |
 

---

#### [EInvoiceErrorDetails](#EInvoiceErrorDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error_code | string? |  yes  |  |
 | error_message | string |  no  |  |
 

---

#### [EInvoiceErrorInfo](#EInvoiceErrorInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error_details | [[EInvoiceErrorDetails](#EInvoiceErrorDetails)]? |  yes  |  |
 

---

#### [EInvoiceErrorResponse](#EInvoiceErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | response_data | [[EInvoiceErrorResponseData](#EInvoiceErrorResponseData)]? |  yes  |  |
 

---

#### [EInvoiceErrorResponseData](#EInvoiceErrorResponseData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | einvoice_info | [EInvoiceErrorInfo](#EInvoiceErrorInfo)? |  yes  |  |
 | einvoice_type | string |  no  |  |
 | message | string |  no  |  |
 | shipment_id | string |  no  |  |
 | status | number |  no  |  |
 

---

#### [EInvoiceErrorResponseDetails](#EInvoiceErrorResponseDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | response_data | [[EInvoiceErrorResponseData](#EInvoiceErrorResponseData)] |  no  |  |
 

---

#### [EinvoiceInfo](#EinvoiceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credit_note | string? |  yes  |  |
 | invoice | string? |  yes  |  |
 

---

#### [EInvoiceIrnDetails](#EInvoiceIrnDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ack_dt | string |  no  |  |
 | ack_no | string |  no  |  |
 | irn | string |  no  |  |
 | signed_invoice | string |  no  |  |
 | signed_qr_code | string |  no  |  |
 

---

#### [EInvoicePortalDetails](#EInvoicePortalDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | password | string? |  yes  |  |
 | user | string? |  yes  |  |
 | username | string? |  yes  |  |
 

---

#### [EInvoiceResponseData](#EInvoiceResponseData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | einvoice_info | [EInvoiceDetails](#EInvoiceDetails)? |  yes  |  |
 | einvoice_type | string |  no  |  |
 | message | string |  no  |  |
 | shipment_id | string |  no  |  |
 | status | number |  no  |  |
 

---

#### [EInvoiceRetry](#EInvoiceRetry)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipments_data | [[EInvoiceRetryShipmentData](#EInvoiceRetryShipmentData)]? |  yes  |  |
 

---

#### [EInvoiceRetryResponse](#EInvoiceRetryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | response_data | [[EInvoiceResponseData](#EInvoiceResponseData)] |  no  |  |
 

---

#### [EInvoiceRetryShipmentData](#EInvoiceRetryShipmentData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | einvoice_type | string |  no  |  |
 | shipment_id | string |  no  |  |
 

---

#### [Entities](#Entities)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_bag_id | string? |  yes  | Application/Affiliate Bag ID, Required if the ID is missing |
 | affiliate_id | string? |  yes  | Application/Affiliate ID, Required if the ID is missing |
 | affiliate_order_id | string? |  yes  | Application/Affiliate Order ID, Required if the ID is missing |
 | affiliate_shipment_id | string? |  yes  | Application/Affiliate Shipment ID, Required if the ID is missing |
 | id | string? |  yes  | Shipment ID if 'entity_type': shipments \| Bag Id if 'entity_type': bags |
 | reason_text | string |  no  | Reason For Shipment/Bag Action |
 

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
 | error | string? |  yes  |  |
 | error_trace | string? |  yes  |  |
 | message | string |  no  |  |
 | status | number? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [FailedOrderLogDetails](#FailedOrderLogDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error_trace | string |  no  |  |
 | exception | string |  no  |  |
 

---

#### [FailedOrderLogs](#FailedOrderLogs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [FailedOrdersItem](#FailedOrdersItem) |  no  |  |
 | page | [PageDetails](#PageDetails) |  no  |  |
 

---

#### [FailedOrdersItem](#FailedOrdersItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel | [LogsChannelDetails](#LogsChannelDetails) |  no  |  |
 | created_at | string |  no  |  |
 | display_message | string |  no  |  |
 | error_message | string |  no  |  |
 | log_id | number |  no  |  |
 | meta | string |  no  |  |
 | method_name | string |  no  |  |
 | order_id | string |  no  |  |
 | payment | [LogPaymentDetails](#LogPaymentDetails) |  no  |  |
 

---

#### [FetchCreditBalanceRequestPayload](#FetchCreditBalanceRequestPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string |  no  |  |
 | customer_mobile_number | string |  no  |  |
 | seller_id | string |  no  |  |
 

---

#### [FetchCreditBalanceResponsePayload](#FetchCreditBalanceResponsePayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [CreditBalanceInfo](#CreditBalanceInfo) |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [FileResponse](#FileResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cdn | [URL](#URL)? |  yes  |  |
 | file_name | string? |  yes  | Name of the file |
 

---

#### [FilterInfoOption](#FilterInfoOption)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | min_search_size | number? |  yes  |  |
 | name | string? |  yes  |  |
 | placeholder_text | string? |  yes  |  |
 | show_ui | boolean? |  yes  |  |
 | text | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [Filters](#Filters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | date_range | [DateRange](#DateRange)? |  yes  |  |
 | dp_ids | number? |  yes  |  |
 | dp_name | string? |  yes  |  |
 | from_date | string? |  yes  |  |
 | lane | string? |  yes  |  |
 | logo | string? |  yes  |  |
 | selected_shipments | string? |  yes  |  |
 | store_name | string? |  yes  |  |
 | stores | number? |  yes  |  |
 | to_date | string? |  yes  |  |
 

---

#### [FiltersInfo](#FiltersInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | options | [[FilterInfoOption](#FilterInfoOption)]? |  yes  |  |
 | placeholder_text | string? |  yes  |  |
 | required | boolean? |  yes  |  |
 | text | string |  no  |  |
 | type | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [FiltersRequest](#FiltersRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | date_range | [DateRange](#DateRange)? |  yes  |  |
 | dp_ids | number |  no  |  |
 | dp_name | string |  no  |  |
 | lane | string |  no  |  |
 | logo | string? |  yes  |  |
 | store_name | string |  no  |  |
 | stores | number |  no  |  |
 

---

#### [FiltersResponse](#FiltersResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | advance_filter | [AdvanceFilterInfo](#AdvanceFilterInfo)? |  yes  |  |
 | global_filter | [[FiltersInfo](#FiltersInfo)]? |  yes  |  |
 

---

#### [FinancialBreakup](#FinancialBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | added_to_fynd_cash | boolean |  no  |  |
 | amount_paid | number |  no  |  |
 | amount_paid_roundoff | number? |  yes  |  |
 | amount_to_be_collected | number? |  yes  |  |
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
 | max | string? |  yes  |  |
 | min | string? |  yes  |  |
 

---

#### [FulfillingStore](#FulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string |  no  |  |
 | address1 | string? |  yes  |  |
 | city | string |  no  |  |
 | code | string |  no  |  |
 | contact_person | string |  no  |  |
 | country | string |  no  |  |
 | display_address | string? |  yes  |  |
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

#### [GenerateInvoiceIDErrorResponse](#GenerateInvoiceIDErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[GenerateInvoiceIDErrorResponseData](#GenerateInvoiceIDErrorResponseData)]? |  yes  |  |
 

---

#### [GenerateInvoiceIDErrorResponseData](#GenerateInvoiceIDErrorResponseData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error_message | string? |  yes  |  |
 | invoice_id | boolean? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [GenerateInvoiceIDRequest](#GenerateInvoiceIDRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_ids | [string] |  no  |  |
 

---

#### [GenerateInvoiceIDResponse](#GenerateInvoiceIDResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[GenerateInvoiceIDResponseData](#GenerateInvoiceIDResponseData)]? |  yes  |  |
 

---

#### [GenerateInvoiceIDResponseData](#GenerateInvoiceIDResponseData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error_message | boolean? |  yes  |  |
 | invoice_id | string? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [GeneratePosOrderReceiptResponse](#GeneratePosOrderReceiptResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | customer_cn_receipt | string? |  yes  |  |
 | customer_cn_receipt_template | string? |  yes  |  |
 | invoice_receipt | string? |  yes  |  |
 | invoice_receipt_template | string? |  yes  |  |
 | merchant_cn_receipt | string? |  yes  |  |
 | order_id | string? |  yes  |  |
 | payment_receipt | string? |  yes  |  |
 | payment_receipt_template | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [GetActionsResponse](#GetActionsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | permissions | [[ActionInfo](#ActionInfo)]? |  yes  |  |
 

---

#### [GetBagsPlatformResponse](#GetBagsPlatformResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [BagData](#BagData)? |  yes  |  |
 | status_code | number? |  yes  |  |
 

---

#### [GSTDetailsData](#GSTDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_calculated_amount | number |  no  |  |
 | cgst_gst_fee | number? |  yes  |  |
 | cgst_tax_percentage | number? |  yes  |  |
 | gst_fee | number |  no  |  |
 | gst_tag | string? |  yes  |  |
 | gst_tax_percentage | number? |  yes  |  |
 | gstin_code | string? |  yes  |  |
 | hsn_code | string? |  yes  |  |
 | hsn_code_id | string? |  yes  |  |
 | igst_gst_fee | number? |  yes  |  |
 | igst_tax_percentage | number? |  yes  |  |
 | is_default_hsn_code | boolean? |  yes  |  |
 | sgst_gst_fee | number? |  yes  |  |
 | sgst_tax_percentage | number? |  yes  |  |
 | tax_collected_at_source | number |  no  |  |
 | value_of_good | number |  no  |  |
 

---

#### [HistoryDict](#HistoryDict)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | assigned_agent | string? |  yes  | Assigned Agent |
 | bag_id | number? |  yes  | Bag ID |
 | createdat | string |  no  | Create date |
 | display_message | string? |  yes  | Display Message |
 | l1_detail | string? |  yes  | L1 details of bag |
 | l2_detail | string? |  yes  | L2 details of bag |
 | l3_detail | string? |  yes  | L3 details of bag |
 | message | string |  no  | History Message or comment |
 | meta | [HistoryMeta](#HistoryMeta)? |  yes  | meta |
 | ticket_id | string? |  yes  | Ticket ID |
 | ticket_url | string? |  yes  | Ticket URL |
 | type | string |  no  | type of history, Expected Values:             [ activity_status, activity_escalation, activity_comment, outbound_notification, outbound_voice ] |
 | user | string |  no  | User who created the history |
 

---

#### [HistoryMeta](#HistoryMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | activity_comment | string? |  yes  |  |
 | activity_type | string? |  yes  |  |
 | billsec | string? |  yes  |  |
 | call_id | string? |  yes  |  |
 | caller | string? |  yes  |  |
 | callerid | string? |  yes  |  |
 | channel_type | string? |  yes  |  |
 | duration | string? |  yes  |  |
 | endtime | string? |  yes  |  |
 | message | string? |  yes  |  |
 | reason | [HistoryReason](#HistoryReason)? |  yes  |  |
 | receiver | string? |  yes  |  |
 | recipient | string? |  yes  |  |
 | recordpath | string? |  yes  |  |
 | short_link | string? |  yes  |  |
 | slug | string? |  yes  |  |
 | starttime | string? |  yes  |  |
 | status | string? |  yes  |  |
 | status1 | string? |  yes  |  |
 | status2 | string? |  yes  |  |
 | store_code | string? |  yes  |  |
 | store_id | number? |  yes  |  |
 | store_name | string? |  yes  |  |
 

---

#### [HistoryReason](#HistoryReason)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | string? |  yes  |  |
 | code | number? |  yes  |  |
 | dislay_name | string? |  yes  |  |
 | quantity | number? |  yes  |  |
 | state | string? |  yes  |  |
 | text | string? |  yes  |  |
 

---

#### [Identifier](#Identifier)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | alu | string? |  yes  |  |
 | ean | string? |  yes  |  |
 | isbn | string? |  yes  |  |
 | sku_code | string? |  yes  |  |
 | upc | string? |  yes  |  |
 

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
 | affiliate_bag_ids | [string]? |  yes  | Affiliate Bag Ids to clear cache of shipment Ids mapped to it |
 | bag_ids | [string]? |  yes  | Bag Ids to clear cache of shipment Ids mapped to it |
 | shipment_ids | [string]? |  yes  | Shipment Ids to clear cache |
 

---

#### [InvalidateShipmentCacheResponse](#InvalidateShipmentCacheResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | response | [[InvalidateShipmentCacheNestedResponse](#InvalidateShipmentCacheNestedResponse)]? |  yes  |  |
 

---

#### [InvoiceDetails](#InvoiceDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | invoice_url | string? |  yes  |  |
 | label_url | string? |  yes  |  |
 | store_invoice_id | string? |  yes  |  |
 | updated_date | string? |  yes  |  |
 

---

#### [InvoiceInfo](#InvoiceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credit_note_id | string? |  yes  |  |
 | external_invoice_id | string? |  yes  |  |
 | invoice_url | string? |  yes  |  |
 | label_url | string? |  yes  |  |
 | links | string? |  yes  |  |
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

#### [JobDetailsData](#JobDetailsData)

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

#### [JobDetailsResponse](#JobDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_ts | string? |  yes  |  |
 | data | [[JobDetailsData](#JobDetailsData)]? |  yes  |  |
 | failed_records | [[String: string]]? |  yes  |  |
 | file_url | string? |  yes  |  |
 | message | string? |  yes  |  |
 | status | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 | uploaded_by | string? |  yes  |  |
 | uploaded_on | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [JobFailedResponse](#JobFailedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | file_name | string? |  yes  |  |
 | url | string? |  yes  |  |
 

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
 | custom_message | string? |  yes  |  |
 | external_line_id | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | quantity | number? |  yes  |  |
 | seller_identifier | string |  no  |  |
 

---

#### [LocationDetails](#LocationDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[ArticleDetails](#ArticleDetails)] |  no  |  |
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

#### [LogPaymentDetails](#LogPaymentDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_paid | string? |  yes  |  |
 | payment_mode | string? |  yes  |  |
 

---

#### [LogsChannelDetails](#LogsChannelDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_id | string? |  yes  |  |
 | channel_shipment_id | string? |  yes  |  |
 | logo | string? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [Manifest](#Manifest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number |  no  |  |
 | created_at | string |  no  |  |
 | created_by | string |  no  |  |
 | created_ts | string? |  yes  |  |
 | filters | [Filters](#Filters)? |  yes  |  |
 | id | number |  no  |  |
 | is_active | boolean |  no  |  |
 | manifest_id | string |  no  |  |
 | meta | [ManifestMeta](#ManifestMeta)? |  yes  |  |
 | pdf_meta | [PDFMeta](#PDFMeta)? |  yes  |  |
 | status | string |  no  |  |
 | uid | string |  no  |  |
 | user_id | string |  no  |  |
 

---

#### [ManifestDetails](#ManifestDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | additional_shipment_count | number? |  yes  |  |
 | items | [[ManifestItemDetails](#ManifestItemDetails)]? |  yes  |  |
 | manifest_details | [[Manifest](#Manifest)]? |  yes  |  |
 | page | [ManifestPageInfo](#ManifestPageInfo)? |  yes  |  |
 

---

#### [ManifestFile](#ManifestFile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bucket | string? |  yes  |  |
 | key | string? |  yes  |  |
 | region | string? |  yes  |  |
 

---

#### [ManifestFiltersResponse](#ManifestFiltersResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | advance_filter | [[FiltersInfo](#FiltersInfo)]? |  yes  |  |
 | global_filter | [[FiltersInfo](#FiltersInfo)]? |  yes  |  |
 

---

#### [ManifestItemDetails](#ManifestItemDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | awb_number | string? |  yes  |  |
 | invoice_id | string? |  yes  |  |
 | order_id | string |  no  |  |
 | quantity | number? |  yes  |  |
 | shipment_created_at | string? |  yes  |  |
 | shipment_id | string |  no  |  |
 

---

#### [ManifestList](#ManifestList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Manifest](#Manifest)]? |  yes  |  |
 | page | [ManifestPageInfo](#ManifestPageInfo)? |  yes  |  |
 

---

#### [ManifestMediaUpdate](#ManifestMediaUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | number? |  yes  |  |
 | entity | string? |  yes  |  |
 | file | [ManifestFile](#ManifestFile)? |  yes  |  |
 | link | string? |  yes  |  |
 | media_type | string? |  yes  |  |
 | status | boolean? |  yes  |  |
 

---

#### [ManifestMeta](#ManifestMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [Filters](#Filters)? |  yes  |  |
 | total_shipment_prices_count | [TotalShipmentPricesCount](#TotalShipmentPricesCount)? |  yes  |  |
 

---

#### [ManifestPageInfo](#ManifestPageInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | has_previous | boolean |  no  |  |
 | size | number |  no  |  |
 | total | number |  no  |  |
 | type | string |  no  |  |
 

---

#### [ManifestShipmentListing](#ManifestShipmentListing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ManifestItemDetails](#ManifestItemDetails)]? |  yes  |  |
 | lane | string? |  yes  |  |
 | message | string? |  yes  |  |
 | page | [ManifestPageInfo](#ManifestPageInfo) |  no  |  |
 | status | number |  no  |  |
 | success | boolean |  no  |  |
 | total_count | number |  no  |  |
 

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
 | kafka_emission_status | number? |  yes  |  |
 | state_manager_used | string? |  yes  |  |
 

---

#### [OrderBagArticle](#OrderBagArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifiers | string? |  yes  |  |
 | return_config | [ReturnConfig](#ReturnConfig)? |  yes  |  |
 | size | string? |  yes  |  |
 | tags | [string]? |  yes  |  |
 | uid | string? |  yes  |  |
 

---

#### [OrderBags](#OrderBags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_bag_details | [AffiliateBagsDetails](#AffiliateBagsDetails)? |  yes  |  |
 | applied_promos | [[AppliedPromos](#AppliedPromos)]? |  yes  |  |
 | article | [OrderBagArticle](#OrderBagArticle)? |  yes  |  |
 | bag_configs | [BagConfigs](#BagConfigs)? |  yes  |  |
 | bag_id | number |  no  |  |
 | bag_status | [[BagStatusHistory](#BagStatusHistory)]? |  yes  |  |
 | brand | [OrderBrandName](#OrderBrandName)? |  yes  |  |
 | can_cancel | boolean? |  yes  |  |
 | can_return | boolean? |  yes  |  |
 | current_status | [CurrentStatus](#CurrentStatus)? |  yes  |  |
 | delivery_address | [PlatformDeliveryAddress](#PlatformDeliveryAddress)? |  yes  |  |
 | display_name | string? |  yes  |  |
 | entity_type | string? |  yes  |  |
 | financial_breakup | [FinancialBreakup](#FinancialBreakup)? |  yes  |  |
 | group_id | string? |  yes  |  |
 | gst_details | [GSTDetailsData](#GSTDetailsData)? |  yes  |  |
 | identifier | string? |  yes  |  |
 | is_parent | boolean? |  yes  |  |
 | item | [PlatformItem](#PlatformItem)? |  yes  |  |
 | line_number | number? |  yes  |  |
 | meta | string? |  yes  |  |
 | parent_promo_bags | string? |  yes  |  |
 | payment_info | [[BagPaymentMethods](#BagPaymentMethods)]? |  yes  |  |
 | payment_methods | [[BagPaymentMethods](#BagPaymentMethods)]? |  yes  |  |
 | prices | [Prices](#Prices)? |  yes  |  |
 | quantity | number? |  yes  |  |
 | seller_identifier | string? |  yes  |  |
 

---

#### [OrderBrandName](#OrderBrandName)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_name | string? |  yes  |  |
 | company | number? |  yes  |  |
 | created_on | string? |  yes  |  |
 | id | number |  no  |  |
 | logo | string? |  yes  |  |
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

#### [OrderData](#OrderData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_ts | string? |  yes  |  |
 | fynd_order_id | string |  no  |  |
 | meta | string? |  yes  |  |
 | order_date | string |  no  |  |
 | payment_info | [[PaymentInfoData](#PaymentInfoData)]? |  yes  |  |
 | payment_methods | string? |  yes  |  |
 | prices | [Prices](#Prices)? |  yes  |  |
 | tax_details | [TaxDetails](#TaxDetails)? |  yes  |  |
 

---

#### [OrderDetails](#OrderDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string? |  yes  |  |
 | affiliate_order_date | string? |  yes  |  |
 | affiliate_order_id | string? |  yes  |  |
 | cashback_applied | number? |  yes  |  |
 | cashback_value | number? |  yes  |  |
 | cod_charges | number? |  yes  |  |
 | collect_by | string? |  yes  |  |
 | coupon_value | number? |  yes  |  |
 | created_at | string? |  yes  |  |
 | created_time | string? |  yes  |  |
 | currency | string? |  yes  |  |
 | delivery_charges | number? |  yes  |  |
 | discount | number? |  yes  |  |
 | fynd_credits | number? |  yes  |  |
 | fynd_order_id | string? |  yes  |  |
 | headers | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | mode_of_payment | string? |  yes  |  |
 | mongo_cart_id | number? |  yes  |  |
 | order_value | number? |  yes  |  |
 | ordering_channel | string? |  yes  |  |
 | ordering_channel_logo | string? |  yes  |  |
 | payment_methods | string? |  yes  |  |
 | payment_mode_id | number? |  yes  |  |
 | prices | [Prices](#Prices)? |  yes  |  |
 | promotion_effective_discount | number? |  yes  |  |
 | refund_by | string? |  yes  |  |
 | tax_details | [TaxDetails](#TaxDetails)? |  yes  |  |
 | total_order_value | number? |  yes  |  |
 | transaction_id | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [OrderDetailsData](#OrderDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string? |  yes  |  |
 | affiliate_order_id | string? |  yes  |  |
 | cod_charges | string? |  yes  |  |
 | created_ts | string? |  yes  |  |
 | fynd_order_id | string |  no  |  |
 | meta | string? |  yes  |  |
 | order_date | string? |  yes  |  |
 | order_value | string? |  yes  |  |
 | ordering_channel | string? |  yes  |  |
 | ordering_channel_logo | string? |  yes  |  |
 | source | string? |  yes  |  |
 | tax_details | string? |  yes  |  |
 

---

#### [OrderDetailsResponse](#OrderDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order | [OrderData](#OrderData)? |  yes  |  |
 | shipments | [[PlatformShipment](#PlatformShipment)]? |  yes  |  |
 | success | boolean |  no  |  |
 

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

#### [OrderingCurrency](#OrderingCurrency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency_code | string? |  yes  |  |
 | currency_name | string? |  yes  |  |
 | currency_sub_unit | string? |  yes  |  |
 | currency_symbol | string? |  yes  |  |
 

---

#### [OrderingStoreDetails](#OrderingStoreDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string? |  yes  |  |
 | address1 | string? |  yes  |  |
 | city | string? |  yes  |  |
 | code | string? |  yes  |  |
 | contact_person | string? |  yes  |  |
 | country | string? |  yes  |  |
 | display_address | string? |  yes  |  |
 | id | number? |  yes  |  |
 | meta | string? |  yes  |  |
 | phone | string? |  yes  |  |
 | pincode | string? |  yes  |  |
 | state | string? |  yes  |  |
 | store_name | string? |  yes  |  |
 

---

#### [OrderItemDataUpdates](#OrderItemDataUpdates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string? |  yes  |  |
 

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
 | affiliate_id | string? |  yes  | Affiliate ID |
 | affiliate_shipment_id | string? |  yes  | Affiliate Shipment ID |
 

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

#### [PageDetails](#PageDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  | Current page number |
 | has_next | boolean? |  yes  | if next page contains any result |
 | has_previous | boolean? |  yes  | if previous page contains any result |
 | item_total | number |  no  | Total count of the results present in the requested filter |
 | size | number? |  yes  | Page size |
 | type | string? |  yes  | Type of the page |
 

---

#### [PaymentInfo](#PaymentInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_methods | [[PaymentMethod](#PaymentMethod)]? |  yes  |  |
 | primary_mode | string |  no  |  |
 

---

#### [PaymentInfoData](#PaymentInfoData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number? |  yes  |  |
 | collect_by | string? |  yes  |  |
 | collected | boolean? |  yes  |  |
 | display_name | string? |  yes  |  |
 | merchant_transaction_id | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | mode | string? |  yes  |  |
 | name | string? |  yes  |  |
 | refund_by | string? |  yes  |  |
 

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

#### [PDFLinks](#PDFLinks)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | b2b | string? |  yes  |  |
 | credit_note_url | string? |  yes  |  |
 | delivery_challan_a4 | string? |  yes  |  |
 | invoice | string? |  yes  |  |
 | invoice_a4 | string? |  yes  |  |
 | invoice_a6 | string? |  yes  |  |
 | invoice_export | string? |  yes  |  |
 | invoice_pos | string? |  yes  |  |
 | invoice_type | string |  no  |  |
 | label | string? |  yes  |  |
 | label_a4 | string? |  yes  |  |
 | label_a6 | string? |  yes  |  |
 | label_export | string? |  yes  |  |
 | label_pos | string? |  yes  |  |
 | label_type | string |  no  |  |
 | po_invoice | string? |  yes  |  |
 

---

#### [PDFMeta](#PDFMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | consent | string? |  yes  |  |
 | media_updates | [[ManifestMediaUpdate](#ManifestMediaUpdate)]? |  yes  |  |
 

---

#### [PhoneDetails](#PhoneDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | number? |  yes  |  |
 | number | string? |  yes  |  |
 

---

#### [PlatformArticleAttributes](#PlatformArticleAttributes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency | string? |  yes  |  |
 

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
 | display_address | string? |  yes  |  |
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
 | attributes | [PlatformArticleAttributes](#PlatformArticleAttributes)? |  yes  |  |
 | branch_url | string? |  yes  |  |
 | brand | string? |  yes  |  |
 | brand_id | number? |  yes  |  |
 | can_cancel | boolean? |  yes  |  |
 | can_return | boolean? |  yes  |  |
 | code | string? |  yes  |  |
 | color | string? |  yes  |  |
 | department_id | number? |  yes  |  |
 | id | number? |  yes  |  |
 | image | [string]? |  yes  |  |
 | images | [string]? |  yes  |  |
 | l1_category | [string]? |  yes  |  |
 | l2_category | [string]? |  yes  |  |
 | l3_category | number? |  yes  |  |
 | l3_category_name | string? |  yes  |  |
 | last_updated_at | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | name | string? |  yes  |  |
 | size | string? |  yes  |  |
 | slug_key | string? |  yes  |  |
 

---

#### [PlatformOrderItems](#PlatformOrderItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | breakup_values | [[PlatformBreakupValues](#PlatformBreakupValues)]? |  yes  |  |
 | channel | [PlatformChannel](#PlatformChannel)? |  yes  |  |
 | currency | [Currency](#Currency)? |  yes  |  |
 | currency_info | [CurrencyInfo](#CurrencyInfo)? |  yes  |  |
 | meta | string? |  yes  |  |
 | order_created_time | string? |  yes  |  |
 | order_created_ts | string? |  yes  |  |
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
 | can_update_dimension | boolean? |  yes  |  |
 | company_details | [CompanyDetails](#CompanyDetails)? |  yes  |  |
 | coupon | string? |  yes  |  |
 | credit_note_id | string? |  yes  |  |
 | currency | [Currency](#Currency)? |  yes  |  |
 | currency_info | [CurrencyInfo](#CurrencyInfo)? |  yes  |  |
 | custom_message | string? |  yes  |  |
 | custom_meta | [string]? |  yes  |  |
 | delivery_details | [UserDetailsData](#UserDetailsData)? |  yes  |  |
 | delivery_slot | string? |  yes  |  |
 | dp_assignment | boolean? |  yes  |  |
 | dp_details | [DPDetailsData](#DPDetailsData)? |  yes  |  |
 | enable_dp_tracking | boolean? |  yes  |  |
 | estimated_sla_time | string? |  yes  |  |
 | estimated_sla_ts | string? |  yes  |  |
 | forward_shipment_id | string? |  yes  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore)? |  yes  |  |
 | fulfilment_priority | number? |  yes  |  |
 | gst_details | [GSTDetailsData](#GSTDetailsData)? |  yes  |  |
 | invoice | [InvoiceInfo](#InvoiceInfo)? |  yes  |  |
 | invoice_id | string? |  yes  |  |
 | is_dp_assign_enabled | boolean? |  yes  |  |
 | is_self_ship | boolean? |  yes  |  |
 | journey_type | string? |  yes  |  |
 | lock_status | boolean? |  yes  |  |
 | meta | string? |  yes  |  |
 | mode_of_payment | string? |  yes  |  |
 | operational_status | string? |  yes  |  |
 | order | [OrderDetailsData](#OrderDetailsData)? |  yes  |  |
 | ordering_store | [OrderingStoreDetails](#OrderingStoreDetails)? |  yes  |  |
 | packaging_type | string? |  yes  |  |
 | payment_info | [string]? |  yes  |  |
 | payment_methods | string? |  yes  |  |
 | payment_mode | string? |  yes  |  |
 | payments | [ShipmentPayments](#ShipmentPayments)? |  yes  |  |
 | pdf_links | string? |  yes  |  |
 | picked_date | string? |  yes  |  |
 | platform_logo | string? |  yes  |  |
 | previous_shipment_id | string? |  yes  |  |
 | prices | [Prices](#Prices)? |  yes  |  |
 | priority_text | string? |  yes  |  |
 | rto_address | [PlatformDeliveryAddress](#PlatformDeliveryAddress)? |  yes  |  |
 | shipment_created_at | string? |  yes  |  |
 | shipment_created_ts | string? |  yes  |  |
 | shipment_details | [ShipmentLockDetails](#ShipmentLockDetails)? |  yes  |  |
 | shipment_id | string |  no  |  |
 | shipment_images | [string]? |  yes  |  |
 | shipment_quantity | number? |  yes  |  |
 | shipment_status | string? |  yes  |  |
 | shipment_update_time | number? |  yes  |  |
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

#### [PointBlankOtpData](#PointBlankOtpData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | mobile | number? |  yes  |  |
 | request_id | string? |  yes  |  |
 | resend_timer | number? |  yes  |  |
 

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
 | data | [PostHistoryData](#PostHistoryData) |  no  |  |
 | filters | [[PostHistoryFilters](#PostHistoryFilters)] |  no  |  |
 

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
 | amount_to_be_collected | number? |  yes  |  |
 | brand_calculated_amount | number? |  yes  |  |
 | cashback | number? |  yes  |  |
 | cashback_applied | number? |  yes  |  |
 | cod_charges | number? |  yes  |  |
 | coupon_effective_discount | number? |  yes  |  |
 | coupon_value | number? |  yes  |  |
 | delivery_charge | number? |  yes  |  |
 | discount | number? |  yes  |  |
 | fynd_credits | number? |  yes  |  |
 | gift_price | number? |  yes  |  |
 | pm_price_split | number? |  yes  |  |
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

#### [ProcessManifest](#ProcessManifest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  |  |
 | filters | [FiltersRequest](#FiltersRequest) |  no  |  |
 | manifest_id | string? |  yes  |  |
 | unique_id | string |  no  |  |
 

---

#### [ProcessManifestItemResponse](#ProcessManifestItemResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [ProcessManifestResponse](#ProcessManifestResponse)? |  yes  |  |
 

---

#### [ProcessManifestResponse](#ProcessManifestResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string? |  yes  |  |
 | company_id | number? |  yes  |  |
 | created_by | string? |  yes  |  |
 | filters | [Filters](#Filters)? |  yes  |  |
 | manifest_id | string? |  yes  |  |
 | uid | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [Products](#Products)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier | string? |  yes  | Product/Bag Article/Item Identifier |
 | line_number | number? |  yes  | Product/Bag Line number for the Product/Bag Identifier |
 | quantity | number? |  yes  |  |
 

---

#### [ProductsDataUpdates](#ProductsDataUpdates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string? |  yes  |  |
 | filters | [[ProductsDataUpdatesFilters](#ProductsDataUpdatesFilters)]? |  yes  | Filter for the Product/Bag |
 

---

#### [ProductsDataUpdatesFilters](#ProductsDataUpdatesFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier | string? |  yes  | Product/Bag Article/Item Identifier |
 | line_number | number? |  yes  | Product/Bag Line number for the Product/Bag Identifier |
 

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
 | identifier | string? |  yes  | Product/Bag Article/Item Identifier |
 | line_number | number? |  yes  | Product/Bag Line number for the Product/Bag Identifier |
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

#### [RefundModeConfigRequestPayload](#RefundModeConfigRequestPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string |  no  |  |
 | customer_mobile_number | string? |  yes  |  |
 | fynd_order_id | string |  no  |  |
 | seller_id | number |  no  |  |
 

---

#### [RefundModeConfigResponsePayload](#RefundModeConfigResponsePayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[RefundModeInfo](#RefundModeInfo)] |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [RefundModeInfo](#RefundModeInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | options | [[RefundOption](#RefundOption)]? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [RefundOption](#RefundOption)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 | slug | string? |  yes  |  |
 | type | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [ReplacementDetails](#ReplacementDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | original_affiliate_order_id | string? |  yes  |  |
 | replacement_type | string? |  yes  |  |
 

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

#### [RoleBaseStateTransitionMapping](#RoleBaseStateTransitionMapping)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | next_statuses | [string]? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [SendSmsPayload](#SendSmsPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_id | number |  no  | bag_id for the activity history track |
 | data | [SmsDataPayload](#SmsDataPayload)? |  yes  | SMS Data |
 | slug | string |  no  | slug name for the template mapped in pointblank |
 

---

#### [SendUserMobileOTP](#SendUserMobileOTP)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | mobile | string |  no  |  |
 

---

#### [SendUserMobileOtpResponse](#SendUserMobileOtpResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [PointBlankOtpData](#PointBlankOtpData)? |  yes  |  |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [Shipment](#Shipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string? |  yes  |  |
 | affiliate_shipment_id | string? |  yes  |  |
 | billing_address_json | [PlatformDeliveryAddress](#PlatformDeliveryAddress)? |  yes  |  |
 | created_at | string? |  yes  |  |
 | credit_note_id | string? |  yes  |  |
 | delivery_address_json | [PlatformDeliveryAddress](#PlatformDeliveryAddress)? |  yes  |  |
 | delivery_awb_number | string? |  yes  |  |
 | eway_bill_id | string? |  yes  |  |
 | external_shipment_id | string? |  yes  |  |
 | fulfilment_priority | number? |  yes  |  |
 | fynd_order_id | string? |  yes  |  |
 | gst | [ShipmentGstDetails](#ShipmentGstDetails)? |  yes  |  |
 | hand_over_contact_json | [PlatformDeliveryAddress](#PlatformDeliveryAddress)? |  yes  |  |
 | id | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | line_items | [[LineItem](#LineItem)] |  no  |  |
 | location_id | number |  no  |  |
 | lock_status | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | order_type | string? |  yes  |  |
 | packaging_type | string? |  yes  |  |
 | parent_id | string? |  yes  |  |
 | parent_type | string? |  yes  |  |
 | pdf_links | string? |  yes  |  |
 | previous_shipment_id | string? |  yes  |  |
 | price | [Prices](#Prices)? |  yes  |  |
 | priority | number? |  yes  |  |
 | processing_dates | [ProcessingDates](#ProcessingDates)? |  yes  |  |
 | quantity | number? |  yes  |  |
 | status | [ShipmentStatusData](#ShipmentStatusData)? |  yes  |  |
 | store_invoice_id | string? |  yes  |  |
 | tags | [string]? |  yes  |  |
 | type | string? |  yes  |  |
 | vertical | string? |  yes  |  |
 

---

#### [ShipmentActionInfo](#ShipmentActionInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | failed_invoiced_shipments | [String: string]? |  yes  |  |
 | failed_shipments | [[String: string]]? |  yes  |  |
 | invoice | [string]? |  yes  |  |
 | invoiceable_shipments | [string]? |  yes  |  |
 | label | [string]? |  yes  |  |
 | processing_invoice_shipments | [string]? |  yes  |  |
 | processing_shipments | [string]? |  yes  |  |
 | successful_invoiced_shipments | [string]? |  yes  |  |
 | successful_shipments | [string]? |  yes  |  |
 

---

#### [ShipmentBagReasons](#ShipmentBagReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reasons | [[BagReasons](#BagReasons)]? |  yes  |  |
 | success | boolean? |  yes  |  |
 

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
 | meta | [Meta](#Meta) |  no  |  |
 | remarks | string? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | status | string? |  yes  |  |
 

---

#### [ShipmentDetails](#ShipmentDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action_to_status | string? |  yes  |  |
 | affiliate_shipment_id | string |  no  |  |
 | articles | [[ArticleDetails](#ArticleDetails)] |  no  |  |
 | box_type | string? |  yes  |  |
 | dp_id | string? |  yes  |  |
 | dp_options | string? |  yes  |  |
 | fulfillment_id | number |  no  |  |
 | lock_status | boolean? |  yes  |  |
 | meta | string? |  yes  |  |
 | shipments | number |  no  |  |
 

---

#### [ShipmentGstDetails](#ShipmentGstDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_calculated_amount | number? |  yes  |  |
 | gst_fee | number? |  yes  |  |
 | gstin_code | string? |  yes  |  |
 | tax_collected_at_source | number? |  yes  |  |
 | value_of_good | number? |  yes  |  |
 

---

#### [ShipmentHistoryResponse](#ShipmentHistoryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | activity_history | [[HistoryDict](#HistoryDict)] |  no  |  |
 | success | boolean? |  yes  |  |
 

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
 | items | [[ShipmentItem](#ShipmentItem)]? |  yes  |  |
 | lane | string? |  yes  |  |
 | message | string? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | success | boolean? |  yes  |  |
 | total_count | number? |  yes  |  |
 

---

#### [ShipmentItem](#ShipmentItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bags | [[BagUnit](#BagUnit)]? |  yes  |  |
 | can_process | boolean? |  yes  |  |
 | channel | [ShipmentListingChannel](#ShipmentListingChannel)? |  yes  |  |
 | currency | [Currency](#Currency)? |  yes  |  |
 | currency_info | [CurrencyInfo](#CurrencyInfo)? |  yes  |  |
 | customer_note | string? |  yes  |  |
 | delivery_address | [PlatformDeliveryAddress](#PlatformDeliveryAddress)? |  yes  |  |
 | display_name | string? |  yes  |  |
 | estimated_sla_time | string? |  yes  |  |
 | estimated_sla_ts | string? |  yes  |  |
 | fulfilling_store | [ShipmentItemFulFillingStore](#ShipmentItemFulFillingStore)? |  yes  |  |
 | invoice_id | string? |  yes  |  |
 | lock_status | boolean? |  yes  |  |
 | meta | string? |  yes  |  |
 | mode_of_payment | string? |  yes  |  |
 | order_created_ts | string? |  yes  |  |
 | order_date | string? |  yes  |  |
 | order_id | string |  no  |  |
 | ordering_channnel | string? |  yes  |  |
 | payment_info | [string]? |  yes  |  |
 | payment_methods | string? |  yes  |  |
 | payment_mode | string? |  yes  |  |
 | previous_shipment_id | string? |  yes  |  |
 | prices | [Prices](#Prices)? |  yes  |  |
 | shipment_created_at | string |  no  |  |
 | shipment_created_ts | string? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | shipment_status | [ShipmentStatus](#ShipmentStatus)? |  yes  |  |
 | status_created_at | string? |  yes  |  |
 | status_created_ts | string? |  yes  |  |
 | total_bags | number |  no  |  |
 | user | [UserDataInfo](#UserDataInfo)? |  yes  |  |
 

---

#### [ShipmentItemFulFillingStore](#ShipmentItemFulFillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string? |  yes  |  |
 | address1 | string? |  yes  |  |
 | brand_store_tags | [string]? |  yes  |  |
 | city | string? |  yes  |  |
 | code | string |  no  |  |
 | display_address | string? |  yes  |  |
 | id | number |  no  |  |
 | location_type | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | name | string? |  yes  |  |
 | phone | string? |  yes  |  |
 | pincode | string? |  yes  |  |
 | state | string? |  yes  |  |
 | store_email | string? |  yes  |  |
 | tags | [string]? |  yes  |  |
 

---

#### [ShipmentListingBrand](#ShipmentListingBrand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string? |  yes  |  |
 | logo | string? |  yes  |  |
 | logo_base64 | string? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [ShipmentListingChannel](#ShipmentListingChannel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_shipment_id | string? |  yes  |  |
 | is_affiliate | boolean? |  yes  |  |
 | logo | string? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [ShipmentLockDetails](#ShipmentLockDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action_to_status | string? |  yes  |  |
 | lock_message | string? |  yes  |  |
 | lock_status | boolean? |  yes  |  |
 

---

#### [ShipmentMeta](#ShipmentMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | assign_dp_from_sb | boolean? |  yes  |  |
 | auto_trigger_dp_assignment_acf | boolean? |  yes  |  |
 | awb_number | string? |  yes  |  |
 | b2b_buyer_details | [BuyerDetails](#BuyerDetails)? |  yes  |  |
 | b2c_buyer_details | string? |  yes  |  |
 | bag_weight | string? |  yes  |  |
 | box_type | string? |  yes  |  |
 | debug_info | [DebugInfo](#DebugInfo)? |  yes  |  |
 | dimension | [Dimensions](#Dimensions)? |  yes  |  |
 | dp_id | string? |  yes  |  |
 | dp_name | string? |  yes  |  |
 | dp_options | string? |  yes  |  |
 | dp_sort_key | string? |  yes  |  |
 | due_date | string? |  yes  |  |
 | einvoice_info | [EinvoiceInfo](#EinvoiceInfo)? |  yes  |  |
 | estimated_delivery_date | string? |  yes  |  |
 | ewaybill_info | string? |  yes  |  |
 | external | string? |  yes  |  |
 | formatted | [Formatted](#Formatted)? |  yes  |  |
 | forward_affiliate_order_id | string? |  yes  |  |
 | forward_affiliate_shipment_id | string? |  yes  |  |
 | fulfilment_priority_text | string? |  yes  |  |
 | is_self_ship | boolean? |  yes  |  |
 | lock_data | [LockData](#LockData)? |  yes  |  |
 | marketplace_store_id | string? |  yes  |  |
 | order_type | string? |  yes  |  |
 | packaging_name | string? |  yes  |  |
 | parent_dp_id | string? |  yes  |  |
 | po_number | string? |  yes  |  |
 | refund_to | string? |  yes  |  |
 | return_affiliate_order_id | string? |  yes  |  |
 | return_affiliate_shipment_id | string? |  yes  |  |
 | return_awb_number | string? |  yes  |  |
 | return_details | string? |  yes  |  |
 | return_store_node | number? |  yes  |  |
 | same_store_available | boolean |  no  |  |
 | shipment_tags | [[ShipmentTags](#ShipmentTags)]? |  yes  |  |
 | shipment_volumetric_weight | number? |  yes  |  |
 | shipment_weight | number? |  yes  |  |
 | store_invoice_updated_date | string? |  yes  |  |
 | timestamp | [ShipmentTimeStamp](#ShipmentTimeStamp)? |  yes  |  |
 | tracking_url | string? |  yes  |  |
 | weight | number |  no  |  |
 

---

#### [ShipmentPayments](#ShipmentPayments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string? |  yes  |  |
 | mode | string? |  yes  |  |
 | source | string? |  yes  |  |
 

---

#### [ShipmentReasonsResponse](#ShipmentReasonsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | reasons | [[ShipmentResponseReasons](#ShipmentResponseReasons)] |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [ShipmentResponseReasons](#ShipmentResponseReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason | string? |  yes  |  |
 | reason_id | number? |  yes  |  |
 

---

#### [ShipmentsRequest](#ShipmentsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data_updates | [DataUpdates](#DataUpdates)? |  yes  |  |
 | identifier | string |  no  | Shipment ID |
 | products | [[Products](#Products)]? |  yes  | Product/Bag to be updated |
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
 | bag_list | [string]? |  yes  |  |
 | created_at | string? |  yes  |  |
 | created_ts | string? |  yes  |  |
 | current_shipment_status | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | shipment_status_id | number? |  yes  |  |
 | status | string |  no  |  |
 | status_created_at | string? |  yes  |  |
 | status_created_ts | string? |  yes  |  |
 | title | string |  no  |  |
 

---

#### [ShipmentStatusData](#ShipmentStatusData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_list | [string]? |  yes  |  |
 | created_at | string? |  yes  |  |
 | created_ts | string? |  yes  |  |
 | current_shipment_status | string? |  yes  |  |
 | display_name | string? |  yes  |  |
 | id | number? |  yes  |  |
 | meta | string? |  yes  |  |
 | shipment_id | string? |  yes  |  |
 | status | string? |  yes  |  |
 | status_created_at | string? |  yes  |  |
 

---

#### [ShipmentTags](#ShipmentTags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_text | string? |  yes  |  |
 | entity_type | string? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [ShipmentTimeStamp](#ShipmentTimeStamp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | number? |  yes  |  |
 | min | number? |  yes  |  |
 

---

#### [ShippingInfo](#ShippingInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string? |  yes  |  |
 | address1 | string? |  yes  |  |
 | address2 | string? |  yes  |  |
 | address_type | string? |  yes  |  |
 | alternate_email | string? |  yes  |  |
 | alternate_mobile_number | string? |  yes  |  |
 | area | string? |  yes  |  |
 | city | string? |  yes  |  |
 | country | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | country_iso_code | string? |  yes  | Country Code in ISO 2 format (e.g. US, IN) |
 | customer_code | string? |  yes  |  |
 | external_customer_code | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | floor_no | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | geo_location | string? |  yes  |  |
 | house_no | string? |  yes  |  |
 | landmark | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | middle_name | string? |  yes  |  |
 | pincode | string? |  yes  |  |
 | primary_email | string? |  yes  |  |
 | primary_mobile_number | string? |  yes  |  |
 | shipping_type | string? |  yes  |  |
 | slot | [string]? |  yes  |  |
 | state | string? |  yes  |  |
 | state_code | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [SmsDataPayload](#SmsDataPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_paid | number? |  yes  | Data mapped in Communication template: amount_paid |
 | brand_name | string? |  yes  | Data mapped in Communication template: brand_name |
 | country_code | string |  no  | country code for SMS |
 | customer_name | string? |  yes  | Data mapped in Communication template: customer_name |
 | message | string |  no  | message to be send in SMS |
 | order_id | string |  no  | orderId |
 | payment_mode | string? |  yes  | Data mapped in Communication template: payment_mode |
 | phone_number | number |  no  | phone number for communication |
 | shipment_id | number |  no  | ShipmentId |
 

---

#### [StatuesRequest](#StatuesRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | exclude_bags_next_state | string? |  yes  | State to be change for Remaining Bag/Products |
 | shipments | [[ShipmentsRequest](#ShipmentsRequest)]? |  yes  |  |
 | split_shipment | boolean? |  yes  | Flag to split shipment |
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
 | brand_store_tags | [string]? |  yes  |  |
 | city | string |  no  |  |
 | code | string? |  yes  |  |
 | company_id | number |  no  |  |
 | contact_person | string |  no  |  |
 | country | string |  no  |  |
 | created_at | string |  no  |  |
 | display_address | string? |  yes  |  |
 | fulfillment_channel | string |  no  |  |
 | is_active | boolean? |  yes  |  |
 | is_archived | boolean? |  yes  |  |
 | is_enabled_for_recon | boolean? |  yes  |  |
 | latitude | number? |  yes  |  |
 | location_type | string |  no  |  |
 | login_username | string? |  yes  |  |
 | longitude | number? |  yes  |  |
 | mall_area | string? |  yes  |  |
 | mall_name | string? |  yes  |  |
 | meta | [StoreMeta](#StoreMeta) |  no  |  |
 | name | string |  no  |  |
 | order_integration_id | string? |  yes  |  |
 | packaging_material_count | number? |  yes  |  |
 | parent_store_id | number? |  yes  |  |
 | phone | string |  no  |  |
 | pincode | string |  no  |  |
 | s_id | string? |  yes  |  |
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
 | display_address | string? |  yes  |  |
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
 | pan_no | string? |  yes  |  |
 

---

#### [TemplateDownloadResponse](#TemplateDownloadResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | file_name | string? |  yes  |  |
 | url | string? |  yes  |  |
 

---

#### [Templates](#Templates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [TotalShipmentPricesCount](#TotalShipmentPricesCount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_count | number? |  yes  |  |
 | total_price | number? |  yes  |  |
 

---

#### [TrackingList](#TrackingList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_ts | string? |  yes  |  |
 | is_current | boolean? |  yes  |  |
 | is_passed | boolean? |  yes  |  |
 | status | string |  no  |  |
 | text | string |  no  |  |
 | time | string? |  yes  |  |
 

---

#### [UpdatePackagingDimensionsPayload](#UpdatePackagingDimensionsPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current_status | string |  no  |  |
 | dimension | [[Dimension](#Dimension)] |  no  |  |
 | shipment_id | string |  no  |  |
 

---

#### [UpdatePackagingDimensionsResponse](#UpdatePackagingDimensionsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [UpdateShipmentLockPayload](#UpdateShipmentLockPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  | Expected Actions: [lock, unlock, check] |
 | action_type | string |  no  | Expected action_type: [complete, operational, financial] |
 | entities | [[Entities](#Entities)] |  no  | Shipment/Entity |
 | entity_type | string |  no  | Expected entity_type: [bags, shipments] |
 | resume_tasks_after_unlock | boolean? |  yes  |  |
 

---

#### [UpdateShipmentLockResponse](#UpdateShipmentLockResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | check_response | [[CheckResponse](#CheckResponse)]? |  yes  | Entity Lock Status, If the action input as 'check' |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [UpdateShipmentStatusRequest](#UpdateShipmentStatusRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | force_transition | boolean? |  yes  | Force Transition |
 | lock_after_transition | boolean? |  yes  | Lock Shipment After Transition |
 | statuses | [[StatuesRequest](#StatuesRequest)]? |  yes  |  |
 | task | boolean? |  yes  | To Run Status Update as a background Task |
 | unlock_before_transition | boolean? |  yes  | Unlock Shipment After Transition |
 

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
 | external_customer_id | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | is_anonymous_user | boolean? |  yes  |  |
 | last_name | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 | name | string? |  yes  |  |
 | uid | number? |  yes  |  |
 | user_oid | string? |  yes  |  |
 

---

#### [UserDetails](#UserDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 | external_customer_id | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | is_anonymous_user | boolean? |  yes  |  |
 | last_name | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 | mongo_user_id | string? |  yes  |  |
 | user_oid | string? |  yes  |  |
 

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
 | country_iso_code | string? |  yes  |  |
 | country_phone_code | string? |  yes  |  |
 | display_address | string? |  yes  |  |
 | email | string? |  yes  |  |
 | landmark | string? |  yes  |  |
 | name | string |  no  |  |
 | phone | string |  no  |  |
 | pincode | string |  no  |  |
 | state | string |  no  |  |
 | state_code | string? |  yes  |  |
 

---

#### [UserInfo](#UserInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | first_name | string |  no  |  |
 | gender | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | primary_email | string |  no  |  |
 | primary_mobile_number | string |  no  |  |
 | user_id | string? |  yes  |  |
 | user_type | string? |  yes  |  |
 

---

#### [VerifyMobileOTP](#VerifyMobileOTP)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_order_id | string |  no  |  |
 | otp_data | [VerifyOtpData](#VerifyOtpData) |  no  |  |
 

---

#### [VerifyOtpData](#VerifyOtpData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mobile | string |  no  |  |
 | otp_code | number |  no  |  |
 | request_id | string |  no  |  |
 

---

#### [VerifyOtpResponse](#VerifyOtpResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [VerifyOtpResponseData](#VerifyOtpResponseData)? |  yes  |  |
 | message | string? |  yes  |  |
 | status | number? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [VerifyOtpResponseData](#VerifyOtpResponseData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | fynd_order_id | string? |  yes  |  |
 | message | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 

---

#### [Weight](#Weight)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_default | boolean? |  yes  |  |
 | shipping | number? |  yes  |  |
 | unit | string? |  yes  |  |
 

---

#### [WeightData](#WeightData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | unit | string? |  yes  |  |
 | value | number? |  yes  |  |
 

---




