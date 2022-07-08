



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

 
 
 #### [UserDetailsData](#UserDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  yes  |  |
 | address | string |  yes  |  |
 | city | string |  yes  |  |
 | pincode | string |  yes  |  |
 | phone | string |  yes  |  |
 | state | string |  yes  |  |
 | country | string |  yes  |  |
 | name | string |  yes  |  |

---


 
 
 #### [DPDetails](#DPDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | awb_no | string |  no  |  |
 | eway_bill_id | string |  no  |  |
 | gst_tag | string |  no  |  |
 | pincode | string |  no  |  |
 | track_url | string |  no  |  |
 | country | string |  no  |  |
 | name | string |  no  |  |
 | id | string |  no  |  |

---


 
 
 #### [OrderDetailsData](#OrderDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  |  |

---


 
 
 #### [FulfillingStore](#FulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string |  yes  |  |
 | city | string |  yes  |  |
 | pincode | string |  yes  |  |
 | phone | string |  yes  |  |
 | country | string |  yes  |  |
 | store_name | string |  yes  |  |
 | fulfillment_channel | string |  yes  |  |
 | code | string |  yes  |  |
 | state | string |  yes  |  |
 | id | string |  yes  |  |
 | contact_person | string |  yes  |  |

---


 
 
 #### [ShipmentPricesData](#ShipmentPricesData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tax_collected_at_source | number |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | gst_fee | number |  no  |  |
 | value_of_good | number |  no  |  |
 | gstin_code | string |  no  |  |

---


 
 
 #### [Shipment](#Shipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | delivery_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | dp_details | [DPDetails](#DPDetails) |  no  |  |
 | order | [OrderDetailsData](#OrderDetailsData) |  no  |  |
 | journey_type | string |  yes  |  |
 | delivery_slot | string |  yes  |  |
 | payment_mode | string |  yes  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  |
 | bags | string |  yes  |  |
 | shipment_prices | [ShipmentPricesData](#ShipmentPricesData) |  no  |  |
 | billing_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | bag_status_history | [string] |  no  |  |
 | shipment_quantity | number |  yes  |  |
 | shipment_id | string |  yes  |  |

---


 
 
 #### [ShipmentDetailsResponse](#ShipmentDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipments | [[Shipment](#Shipment)] |  no  |  |
 | success | boolean |  yes  |  |

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
 | index | number |  yes  |  |
 | display_name | string |  yes  |  |
 | total_shipments | number |  yes  |  |
 | current_state | [string] |  no  |  |
 | next_state | [string] |  no  |  |
 | name | string |  yes  |  |

---


 
 
 #### [SuperLane](#SuperLane)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string |  yes  |  |
 | options | [[SubLane](#SubLane)] |  no  |  |

---


 
 
 #### [LaneConfigResponse](#LaneConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | super_lanes | [[SuperLane](#SuperLane)] |  no  |  |

---


 
 
 #### [PaymentModeInfo](#PaymentModeInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | logo | string |  yes  |  |

---


 
 
 #### [FulFillingStore](#FulFillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  yes  |  |
 | id | string |  yes  |  |

---


 
 
 #### [Item](#Item)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | size | string |  yes  |  |
 | l3_category | number |  yes  |  |
 | l1_category | [string] |  no  |  |
 | l3_category_name | string |  yes  |  |
 | can_return | boolean |  yes  |  |
 | department_id | number |  yes  |  |
 | image | [string] |  no  |  |
 | code | string |  yes  |  |
 | can_cancel | boolean |  yes  |  |
 | color | string |  no  |  |
 | name | string |  yes  |  |
 | id | number |  yes  |  |

---


 
 
 #### [GST](#GST)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tax_collected_at_source | number |  yes  |  |
 | brand_calculated_amount | number |  yes  |  |
 | gst_fee | number |  yes  |  |
 | value_of_good | number |  yes  |  |
 | gstin_code | string |  yes  |  |

---


 
 
 #### [Prices](#Prices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tax_collected_at_source | number |  yes  |  |
 | cod_charges | number |  yes  |  |
 | discount | number |  yes  |  |
 | cashback_applied | number |  yes  |  |
 | price_marked | number |  yes  |  |
 | coupon_value | number |  yes  |  |
 | promotion_effective_discount | number |  yes  |  |
 | refund_credit | number |  yes  |  |
 | value_of_good | number |  yes  |  |
 | amount_paid | number |  yes  |  |
 | refund_amount | number |  yes  |  |
 | price_effective | number |  yes  |  |
 | amount_paid_roundoff | number |  yes  |  |
 | cashback | number |  yes  |  |
 | fynd_credits | number |  yes  |  |
 | delivery_charge | number |  yes  |  |

---


 
 
 #### [BagUnit](#BagUnit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ordering_channel | string |  yes  |  |
 | item | [Item](#Item) |  no  |  |
 | bag_id | number |  yes  |  |
 | gst | [GST](#GST) |  no  |  |
 | item_quantity | number |  yes  |  |
 | total_shipment_bags | number |  yes  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | status | string |  yes  |  |
 | shipment_id | string |  yes  |  |

---


 
 
 #### [UserDataInfo](#UserDataInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mobile | string |  yes  |  |
 | uid | number |  yes  |  |
 | email | string |  yes  |  |
 | last_name | string |  yes  |  |
 | is_anonymous_user | boolean |  yes  |  |
 | gender | string |  yes  |  |
 | first_name | string |  yes  |  |
 | avis_user_id | string |  yes  |  |

---


 
 
 #### [ShipmentStatus](#ShipmentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ops_status | string |  yes  |  |
 | hex_code | string |  yes  |  |
 | title | string |  yes  |  |
 | actual_status | string |  yes  |  |
 | status | string |  yes  |  |

---


 
 
 #### [ShipmentItem](#ShipmentItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_bags_count | number |  yes  |  |
 | payment_mode_info | [PaymentModeInfo](#PaymentModeInfo) |  no  |  |
 | fulfilling_store | [FulFillingStore](#FulFillingStore) |  no  |  |
 | sla | string |  no  |  |
 | bags | [[BagUnit](#BagUnit)] |  no  |  |
 | shipment_created_at | number |  yes  |  |
 | user | [UserDataInfo](#UserDataInfo) |  no  |  |
 | shipment_status | [ShipmentStatus](#ShipmentStatus) |  no  |  |
 | application | string |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | created_at | string |  yes  |  |
 | fulfilling_centre | string |  yes  |  |
 | total_shipments_in_order | number |  yes  |  |
 | channel | string |  no  |  |
 | id | string |  yes  |  |

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
 | type | string |  yes  |  |
 | text | string |  yes  |  |
 | value | string |  yes  |  |
 | options | [[FilterInfoOption](#FilterInfoOption)] |  no  |  |

---


 
 
 #### [ShipmentInternalPlatformViewResponse](#ShipmentInternalPlatformViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ShipmentItem](#ShipmentItem)] |  no  |  |
 | applied_filters | string |  no  |  |
 | page | string |  no  |  |
 | filters | [[FiltersInfo](#FiltersInfo)] |  no  |  |

---


 
 
 #### [ShipmentPricesDataSet](#ShipmentPricesDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tax_collected_at_source | number |  no  |  |
 | cod_charges | number |  no  |  |
 | discount | string |  no  |  |
 | cashback_applied | number |  no  |  |
 | price_marked | number |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | refund_credit | number |  no  |  |
 | gst_fee | number |  no  |  |
 | value_of_good | number |  no  |  |
 | coupon_effective_discount | number |  no  |  |
 | amount_paid | number |  no  |  |
 | price_effective | number |  no  |  |
 | cashback | number |  no  |  |
 | fynd_credits | number |  no  |  |
 | delivery_charge | number |  no  |  |

---


 
 
 #### [Shipment1](#Shipment1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_id | string |  yes  |  |
 | shipment_status | string |  yes  |  |
 | total_items | string |  yes  |  |
 | prices | [ShipmentPricesDataSet](#ShipmentPricesDataSet) |  no  |  |
 | rtd_done | string |  yes  |  |
 | shipment_id | string |  yes  |  |

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
 | cod_charges | number |  no  |  |
 | discount | number |  no  |  |
 | coupon_value | string |  no  |  |
 | price_marked | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | refund_credit | number |  no  |  |
 | value_of_good | number |  no  |  |
 | amount_paid | number |  no  |  |
 | refund_amount | number |  no  |  |
 | price_effective | number |  no  |  |
 | cashback | number |  no  |  |
 | fynd_credits | number |  no  |  |
 | delivery_charge | number |  no  |  |

---


 
 
 #### [ShipmentDataSet](#ShipmentDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tax_collected_at_source | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | refund_credit | number |  no  |  |
 | coupon_effective_discount | number |  no  |  |
 | value_of_good | number |  no  |  |
 | shipment_status | string |  yes  |  |
 | price_effective | number |  no  |  |
 | cashback | number |  no  |  |
 | total_items | number |  yes  |  |
 | prices | [ShipmentPricesDataInfo](#ShipmentPricesDataInfo) |  no  |  |
 | total_bags | number |  yes  |  |
 | fynd_credits | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | shipment_images | [string] |  no  |  |
 | shipment_id | string |  yes  |  |

---


 
 
 #### [UserDataSet](#UserDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mobile | number |  yes  |  |
 | gender | string |  no  |  |
 | name | string |  yes  |  |
 | email | string |  no  |  |

---


 
 
 #### [OrderDataSet](#OrderDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_created_time | string |  yes  |  |
 | shipments | [[ShipmentDataSet](#ShipmentDataSet)] |  no  |  |
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




