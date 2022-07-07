



##### [Back to Platform docs](./README.md)

## Orders Methods
Handles all platform order and shipment api(s)
* [getShipmentDetails](#getshipmentdetails)
* [getLaneConfig](#getlaneconfig)
* [getOrderShipmentDetails](#getordershipmentdetails)
* [getShipmentList](#getshipmentlist)
* [getShipmentToManifest](#getshipmenttomanifest)



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
 fromDate : value,
 toDate : value });

// Async/Await
const data = await client.orders.getLaneConfig({  superLane : value,
 fromDate : value,
 toDate : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| superLane | string | no |  |    
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
 toDate : value });

// Async/Await
const data = await client.orders.getShipmentList({  lane : value,
 searchType : value,
 searchId : value,
 fromDate : value,
 toDate : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| lane | string | no |  |    
| searchType | string | no |  |    
| searchId | string | no |  |    
| fromDate | string | no |  |    
| toDate | string | no |  |  





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



### Schemas

 
 
 #### [UserDetailsData](#UserDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string |  yes  |  |
 | phone | string |  yes  |  |
 | pincode | string |  yes  |  |
 | state | string |  yes  |  |
 | email | string |  yes  |  |
 | country | string |  yes  |  |
 | name | string |  yes  |  |
 | city | string |  yes  |  |

---


 
 
 #### [FulfillingStore](#FulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | contact_person | string |  yes  |  |
 | fulfillment_channel | string |  yes  |  |
 | address | string |  yes  |  |
 | store_name | string |  yes  |  |
 | phone | string |  yes  |  |
 | code | string |  yes  |  |
 | id | string |  yes  |  |
 | state | string |  yes  |  |
 | pincode | string |  yes  |  |
 | country | string |  yes  |  |
 | city | string |  yes  |  |

---


 
 
 #### [ShipmentPricesData](#ShipmentPricesData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst_fee | number |  no  |  |
 | tax_collected_at_source | number |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | gstin_code | string |  no  |  |
 | value_of_good | number |  no  |  |

---


 
 
 #### [DPDetails](#DPDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | track_url | string |  no  |  |
 | eway_bill_id | string |  no  |  |
 | id | string |  no  |  |
 | pincode | string |  no  |  |
 | country | string |  no  |  |
 | name | string |  no  |  |
 | gst_tag | string |  no  |  |
 | awb_no | string |  no  |  |

---


 
 
 #### [OrderDetailsData](#OrderDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  |  |

---


 
 
 #### [Shipment](#Shipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | billing_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | bag_status_history | [string] |  no  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  |
 | shipment_prices | [ShipmentPricesData](#ShipmentPricesData) |  no  |  |
 | dp_details | [DPDetails](#DPDetails) |  no  |  |
 | journey_type | string |  yes  |  |
 | shipment_id | string |  yes  |  |
 | bags | string |  yes  |  |
 | delivery_slot | string |  yes  |  |
 | order | [OrderDetailsData](#OrderDetailsData) |  no  |  |
 | payment_mode | string |  yes  |  |
 | delivery_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | shipment_quantity | number |  yes  |  |

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
 | display_name | string |  yes  |  |
 | current_state | [string] |  no  |  |
 | index | number |  yes  |  |
 | next_state | [string] |  no  |  |
 | name | string |  yes  |  |
 | total_shipments | number |  yes  |  |

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


 
 
 #### [FilterOption](#FilterOption)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text | string |  yes  |  |
 | value | string |  no  |  |

---


 
 
 #### [Filters](#Filters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | text | string |  yes  |  |
 | value | string |  yes  |  |
 | options | [[FilterOption](#FilterOption)] |  no  |  |

---


 
 
 #### [FulFillingStore](#FulFillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  yes  |  |
 | id | string |  yes  |  |

---


 
 
 #### [Channel](#Channel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | logo | string |  yes  |  |

---


 
 
 #### [UserInfo](#UserInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | first_name | string |  yes  |  |
 | is_anonymous_user | boolean |  yes  |  |
 | last_name | string |  yes  |  |
 | gender | string |  yes  |  |
 | avis_user_id | string |  yes  |  |
 | mobile | string |  yes  |  |
 | email | string |  yes  |  |
 | uid | number |  yes  |  |

---


 
 
 #### [Prices](#Prices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_credits | number |  yes  |  |
 | discount | number |  yes  |  |
 | cashback | number |  yes  |  |
 | promotion_effective_discount | number |  yes  |  |
 | tax_collected_at_source | number |  yes  |  |
 | amount_paid | number |  yes  |  |
 | amount_paid_roundoff | number |  yes  |  |
 | delivery_charge | number |  yes  |  |
 | coupon_value | number |  yes  |  |
 | cod_charges | number |  yes  |  |
 | price_effective | number |  yes  |  |
 | refund_credit | number |  yes  |  |
 | cashback_applied | number |  yes  |  |
 | refund_amount | number |  yes  |  |
 | price_marked | number |  yes  |  |
 | value_of_good | number |  yes  |  |

---


 
 
 #### [ShipmentStatus](#ShipmentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | actual_status | string |  yes  |  |
 | hex_code | string |  yes  |  |
 | ops_status | string |  yes  |  |
 | title | string |  yes  |  |
 | status | string |  yes  |  |

---


 
 
 #### [PaymentModeInfo](#PaymentModeInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | logo | string |  yes  |  |

---


 
 
 #### [Item](#Item)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | department_id | number |  yes  |  |
 | can_cancel | boolean |  yes  |  |
 | l3_category | number |  yes  |  |
 | l1_category | [string] |  no  |  |
 | code | string |  yes  |  |
 | size | string |  yes  |  |
 | id | number |  yes  |  |
 | l3_category_name | string |  yes  |  |
 | image | [string] |  no  |  |
 | can_return | boolean |  yes  |  |
 | name | string |  yes  |  |
 | color | string |  no  |  |

---


 
 
 #### [GST](#GST)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst_fee | number |  yes  |  |
 | tax_collected_at_source | number |  yes  |  |
 | brand_calculated_amount | number |  yes  |  |
 | gstin_code | string |  yes  |  |
 | value_of_good | number |  yes  |  |

---


 
 
 #### [BagItem](#BagItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_quantity | number |  yes  |  |
 | total_shipment_bags | number |  yes  |  |
 | item | [Item](#Item) |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | gst | [GST](#GST) |  no  |  |
 | shipment_id | string |  yes  |  |
 | status | string |  yes  |  |
 | bag_id | number |  yes  |  |
 | ordering_channel | string |  yes  |  |

---


 
 
 #### [Application](#Application)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |

---


 
 
 #### [ShipmentItem](#ShipmentItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sla | string |  no  |  |
 | fulfilling_store | [FulFillingStore](#FulFillingStore) |  no  |  |
 | channel | [Channel](#Channel) |  no  |  |
 | user | [UserInfo](#UserInfo) |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | fulfilling_centre | string |  yes  |  |
 | created_at | string |  yes  |  |
 | id | string |  yes  |  |
 | shipment_status | [ShipmentStatus](#ShipmentStatus) |  no  |  |
 | payment_mode_info | [PaymentModeInfo](#PaymentModeInfo) |  no  |  |
 | bags | [[BagItem](#BagItem)] |  no  |  |
 | total_bags_count | number |  yes  |  |
 | total_shipments_in_order | number |  yes  |  |
 | application | [Application](#Application) |  no  |  |
 | shipment_created_at | number |  yes  |  |

---


 
 
 #### [ShipmentInternalPlatformViewResponse](#ShipmentInternalPlatformViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | string |  no  |  |
 | filters | [[Filters](#Filters)] |  no  |  |
 | items | [[ShipmentItem](#ShipmentItem)] |  no  |  |
 | applied_filters | string |  no  |  |

---


 
 
 #### [ShipmentPricesDataSet](#ShipmentPricesDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_credits | number |  no  |  |
 | gst_fee | number |  no  |  |
 | coupon_effective_discount | number |  no  |  |
 | discount | string |  no  |  |
 | cashback | number |  no  |  |
 | tax_collected_at_source | number |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | amount_paid | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | cod_charges | number |  no  |  |
 | price_effective | number |  no  |  |
 | refund_credit | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | price_marked | number |  no  |  |
 | value_of_good | number |  no  |  |

---


 
 
 #### [Shipment1](#Shipment1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | rtd_done | string |  yes  |  |
 | prices | [ShipmentPricesDataSet](#ShipmentPricesDataSet) |  no  |  |
 | total_items | string |  yes  |  |
 | shipment_status | string |  yes  |  |
 | shipment_id | string |  yes  |  |
 | order_id | string |  yes  |  |

---


 
 
 #### [ManifestShipmentResponse](#ManifestShipmentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | shipments | [[Shipment1](#Shipment1)] |  no  |  |

---




