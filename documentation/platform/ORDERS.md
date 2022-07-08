



##### [Back to Platform docs](./README.md)

## Orders Methods
Handles all platform order and shipment api(s)
* [getShipmentDetails](#getshipmentdetails)
* [getLaneConfig](#getlaneconfig)
* [getOrderShipmentDetails](#getordershipmentdetails)
* [getShipmentList](#getshipmentlist)
* [getShipmentToManifest](#getshipmenttomanifest)
* [getOrders](#getorders)



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




[ShipmentDetailsResponse](#ShipmentDetailsResponse)

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



### Schemas

 
 
 #### [DPDetails](#DPDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst_tag | string |  no  |  |
 | id | string |  no  |  |
 | country | string |  no  |  |
 | pincode | string |  no  |  |
 | eway_bill_id | string |  no  |  |
 | track_url | string |  no  |  |
 | awb_no | string |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [UserDetailsData](#UserDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string |  yes  |  |
 | phone | string |  yes  |  |
 | email | string |  yes  |  |
 | pincode | string |  yes  |  |
 | address | string |  yes  |  |
 | city | string |  yes  |  |
 | state | string |  yes  |  |
 | name | string |  yes  |  |

---


 
 
 #### [OrderDetailsData](#OrderDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  |  |

---


 
 
 #### [ShipmentPricesData](#ShipmentPricesData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_calculated_amount | number |  no  |  |
 | tax_collected_at_source | number |  no  |  |
 | value_of_good | number |  no  |  |
 | gstin_code | string |  no  |  |
 | gst_fee | number |  no  |  |

---


 
 
 #### [FulfillingStore](#FulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fulfillment_channel | string |  yes  |  |
 | id | string |  yes  |  |
 | country | string |  yes  |  |
 | phone | string |  yes  |  |
 | pincode | string |  yes  |  |
 | address | string |  yes  |  |
 | city | string |  yes  |  |
 | store_name | string |  yes  |  |
 | state | string |  yes  |  |
 | contact_person | string |  yes  |  |
 | code | string |  yes  |  |

---


 
 
 #### [Shipment](#Shipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dp_details | [DPDetails](#DPDetails) |  no  |  |
 | delivery_slot | string |  yes  |  |
 | shipment_quantity | number |  yes  |  |
 | delivery_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | journey_type | string |  yes  |  |
 | shipment_id | string |  yes  |  |
 | payment_mode | string |  yes  |  |
 | order | [OrderDetailsData](#OrderDetailsData) |  no  |  |
 | bag_status_history | [string] |  no  |  |
 | billing_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | shipment_prices | [ShipmentPricesData](#ShipmentPricesData) |  no  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  |
 | bags | string |  yes  |  |

---


 
 
 #### [ShipmentDetailsResponse](#ShipmentDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | shipments | [[Shipment](#Shipment)] |  no  |  |

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
 | text | string |  yes  |  |
 | current_state | [string] |  no  |  |
 | value | string |  yes  |  |
 | next_state | [string] |  no  |  |
 | index | number |  yes  |  |
 | total_shipments | number |  yes  |  |

---


 
 
 #### [SuperLane](#SuperLane)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text | string |  yes  |  |
 | options | [[SubLane](#SubLane)] |  no  |  |
 | value | string |  yes  |  |

---


 
 
 #### [LaneConfigResponse](#LaneConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | super_lanes | [[SuperLane](#SuperLane)] |  no  |  |

---


 
 
 #### [FilterInfoOption](#FilterInfoOption)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text | string |  yes  |  |
 | value | string |  no  |  |

---


 
 
 #### [FiltersInfo](#FiltersInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text | string |  yes  |  |
 | options | [[FilterInfoOption](#FilterInfoOption)] |  no  |  |
 | value | string |  yes  |  |
 | type | string |  yes  |  |

---


 
 
 #### [PaymentModeInfo](#PaymentModeInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string |  yes  |  |
 | type | string |  yes  |  |

---


 
 
 #### [UserDataInfo](#UserDataInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | first_name | string |  yes  |  |
 | email | string |  yes  |  |
 | last_name | string |  yes  |  |
 | mobile | string |  yes  |  |
 | uid | number |  yes  |  |
 | is_anonymous_user | boolean |  yes  |  |
 | gender | string |  yes  |  |
 | avis_user_id | string |  yes  |  |

---


 
 
 #### [FulFillingStore](#FulFillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | code | string |  yes  |  |

---


 
 
 #### [ShipmentStatus](#ShipmentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ops_status | string |  yes  |  |
 | status | string |  yes  |  |
 | actual_status | string |  yes  |  |
 | title | string |  yes  |  |
 | hex_code | string |  yes  |  |

---


 
 
 #### [Prices](#Prices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | refund_credit | number |  yes  |  |
 | fynd_credits | number |  yes  |  |
 | refund_amount | number |  yes  |  |
 | delivery_charge | number |  yes  |  |
 | amount_paid_roundoff | number |  yes  |  |
 | tax_collected_at_source | number |  yes  |  |
 | promotion_effective_discount | number |  yes  |  |
 | price_effective | number |  yes  |  |
 | value_of_good | number |  yes  |  |
 | cashback_applied | number |  yes  |  |
 | discount | number |  yes  |  |
 | coupon_value | number |  yes  |  |
 | amount_paid | number |  yes  |  |
 | price_marked | number |  yes  |  |
 | cashback | number |  yes  |  |
 | cod_charges | number |  yes  |  |

---


 
 
 #### [GST](#GST)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_calculated_amount | number |  yes  |  |
 | tax_collected_at_source | number |  yes  |  |
 | value_of_good | number |  yes  |  |
 | gstin_code | string |  yes  |  |
 | gst_fee | number |  yes  |  |

---


 
 
 #### [Item](#Item)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | l3_category | number |  yes  |  |
 | id | number |  yes  |  |
 | can_cancel | boolean |  yes  |  |
 | image | [string] |  no  |  |
 | color | string |  no  |  |
 | l3_category_name | string |  yes  |  |
 | l1_category | [string] |  no  |  |
 | size | string |  yes  |  |
 | can_return | boolean |  yes  |  |
 | department_id | number |  yes  |  |
 | code | string |  yes  |  |
 | name | string |  yes  |  |

---


 
 
 #### [BagUnit](#BagUnit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_shipment_bags | number |  yes  |  |
 | item_quantity | number |  yes  |  |
 | status | string |  yes  |  |
 | shipment_id | string |  yes  |  |
 | gst | [GST](#GST) |  no  |  |
 | item | [Item](#Item) |  no  |  |
 | ordering_channel | string |  yes  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | bag_id | number |  yes  |  |

---


 
 
 #### [ShipmentItem](#ShipmentItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_bags_count | number |  yes  |  |
 | id | string |  yes  |  |
 | fulfilling_centre | string |  yes  |  |
 | channel | string |  no  |  |
 | payment_mode_info | [PaymentModeInfo](#PaymentModeInfo) |  no  |  |
 | user | [UserDataInfo](#UserDataInfo) |  no  |  |
 | fulfilling_store | [FulFillingStore](#FulFillingStore) |  no  |  |
 | sla | string |  no  |  |
 | shipment_status | [ShipmentStatus](#ShipmentStatus) |  no  |  |
 | total_shipments_in_order | number |  yes  |  |
 | created_at | string |  yes  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | application | string |  no  |  |
 | shipment_created_at | number |  yes  |  |
 | bags | [[BagUnit](#BagUnit)] |  no  |  |

---


 
 
 #### [ShipmentInternalPlatformViewResponse](#ShipmentInternalPlatformViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | string |  no  |  |
 | filters | [[FiltersInfo](#FiltersInfo)] |  no  |  |
 | items | [[ShipmentItem](#ShipmentItem)] |  no  |  |
 | applied_filters | string |  no  |  |

---


 
 
 #### [ShipmentPricesDataSet](#ShipmentPricesDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | refund_credit | number |  no  |  |
 | fynd_credits | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | tax_collected_at_source | number |  no  |  |
 | price_effective | number |  no  |  |
 | value_of_good | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | discount | string |  no  |  |
 | amount_paid | number |  no  |  |
 | price_marked | number |  no  |  |
 | gst_fee | number |  no  |  |
 | cashback | number |  no  |  |
 | cod_charges | number |  no  |  |
 | coupon_effective_discount | number |  no  |  |

---


 
 
 #### [Shipment1](#Shipment1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | rtd_done | string |  yes  |  |
 | shipment_id | string |  yes  |  |
 | prices | [ShipmentPricesDataSet](#ShipmentPricesDataSet) |  no  |  |
 | total_items | string |  yes  |  |
 | shipment_status | string |  yes  |  |
 | order_id | string |  yes  |  |

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


 
 
 #### [ShipmentPricesDataInfo](#ShipmentPricesDataInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cod_charges | number |  no  |  |
 | refund_credit | number |  no  |  |
 | fynd_credits | number |  no  |  |
 | refund_amount | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | price_effective | number |  no  |  |
 | value_of_good | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | discount | number |  no  |  |
 | amount_paid | number |  no  |  |
 | price_marked | number |  no  |  |
 | cashback | number |  no  |  |
 | coupon_value | string |  no  |  |

---


 
 
 #### [ShipmentDataSet](#ShipmentDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_bags | number |  yes  |  |
 | refund_credit | number |  no  |  |
 | fynd_credits | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | shipment_id | string |  yes  |  |
 | tax_collected_at_source | number |  no  |  |
 | price_effective | number |  no  |  |
 | value_of_good | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | prices | [ShipmentPricesDataInfo](#ShipmentPricesDataInfo) |  no  |  |
 | shipment_images | [string] |  no  |  |
 | cashback | number |  no  |  |
 | total_items | number |  yes  |  |
 | shipment_status | string |  yes  |  |
 | coupon_effective_discount | number |  no  |  |

---


 
 
 #### [UserDataSet](#UserDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gender | string |  no  |  |
 | email | string |  no  |  |
 | mobile | number |  yes  |  |
 | name | string |  yes  |  |

---


 
 
 #### [OrderDataSet](#OrderDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipments | [[ShipmentDataSet](#ShipmentDataSet)] |  no  |  |
 | order_created_time | string |  yes  |  |
 | user_info | [UserDataSet](#UserDataSet) |  no  |  |
 | order_id | string |  yes  |  |

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




