



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

 
 
 #### [DPDetails](#DPDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string |  no  |  |
 | awb_no | string |  no  |  |
 | id | string |  no  |  |
 | gst_tag | string |  no  |  |
 | track_url | string |  no  |  |
 | pincode | string |  no  |  |
 | eway_bill_id | string |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [OrderDetailsData](#OrderDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  |  |

---


 
 
 #### [ShipmentPricesData](#ShipmentPricesData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gstin_code | string |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | tax_collected_at_source | number |  no  |  |
 | value_of_good | number |  no  |  |
 | gst_fee | number |  no  |  |

---


 
 
 #### [FulfillingStore](#FulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fulfillment_channel | string |  yes  |  |
 | state | string |  yes  |  |
 | country | string |  yes  |  |
 | id | string |  yes  |  |
 | code | string |  yes  |  |
 | city | string |  yes  |  |
 | store_name | string |  yes  |  |
 | pincode | string |  yes  |  |
 | phone | string |  yes  |  |
 | address | string |  yes  |  |
 | contact_person | string |  yes  |  |

---


 
 
 #### [UserDetailsData](#UserDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | state | string |  yes  |  |
 | country | string |  yes  |  |
 | city | string |  yes  |  |
 | pincode | string |  yes  |  |
 | phone | string |  yes  |  |
 | address | string |  yes  |  |
 | name | string |  yes  |  |
 | email | string |  yes  |  |

---


 
 
 #### [Shipment](#Shipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_id | string |  yes  |  |
 | dp_details | [DPDetails](#DPDetails) |  no  |  |
 | order | [OrderDetailsData](#OrderDetailsData) |  no  |  |
 | shipment_quantity | number |  yes  |  |
 | payment_mode | string |  yes  |  |
 | delivery_slot | string |  yes  |  |
 | journey_type | string |  yes  |  |
 | shipment_prices | [ShipmentPricesData](#ShipmentPricesData) |  no  |  |
 | bag_status_history | [string] |  no  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  |
 | delivery_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | billing_details | [UserDetailsData](#UserDetailsData) |  no  |  |
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
 | reason | string |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [SubLane](#SubLane)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string |  yes  |  |
 | total_shipments | number |  yes  |  |
 | next_state | [string] |  no  |  |
 | current_state | [string] |  no  |  |
 | index | number |  yes  |  |
 | name | string |  yes  |  |

---


 
 
 #### [SuperLane](#SuperLane)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | options | [[SubLane](#SubLane)] |  no  |  |
 | display_name | string |  yes  |  |

---


 
 
 #### [LaneConfigResponse](#LaneConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | super_lanes | [[SuperLane](#SuperLane)] |  no  |  |

---


 
 
 #### [FilterOption](#FilterOption)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  no  |  |
 | text | string |  yes  |  |

---


 
 
 #### [Filters](#Filters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  yes  |  |
 | options | [[FilterOption](#FilterOption)] |  no  |  |
 | type | string |  yes  |  |
 | text | string |  yes  |  |

---


 
 
 #### [PaymentModeInfo](#PaymentModeInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string |  yes  |  |
 | type | string |  yes  |  |

---


 
 
 #### [UserInfo](#UserInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | first_name | string |  yes  |  |
 | last_name | string |  yes  |  |
 | mobile | string |  yes  |  |
 | is_anonymous_user | boolean |  yes  |  |
 | email | string |  yes  |  |
 | uid | number |  yes  |  |
 | gender | string |  yes  |  |
 | avis_user_id | string |  yes  |  |

---


 
 
 #### [ShipmentStatus](#ShipmentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  |  |
 | hex_code | string |  yes  |  |
 | title | string |  yes  |  |
 | ops_status | string |  yes  |  |
 | actual_status | string |  yes  |  |

---


 
 
 #### [FulFillingStore](#FulFillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | code | string |  yes  |  |

---


 
 
 #### [Prices](#Prices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_paid_roundoff | number |  yes  |  |
 | cashback_applied | number |  yes  |  |
 | refund_credit | number |  yes  |  |
 | promotion_effective_discount | number |  yes  |  |
 | coupon_value | number |  yes  |  |
 | delivery_charge | number |  yes  |  |
 | discount | number |  yes  |  |
 | cod_charges | number |  yes  |  |
 | price_effective | number |  yes  |  |
 | amount_paid | number |  yes  |  |
 | price_marked | number |  yes  |  |
 | refund_amount | number |  yes  |  |
 | tax_collected_at_source | number |  yes  |  |
 | fynd_credits | number |  yes  |  |
 | cashback | number |  yes  |  |
 | value_of_good | number |  yes  |  |

---


 
 
 #### [Item](#Item)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | color | string |  no  |  |
 | department_id | number |  yes  |  |
 | can_return | boolean |  yes  |  |
 | l3_category_name | string |  yes  |  |
 | id | number |  yes  |  |
 | code | string |  yes  |  |
 | can_cancel | boolean |  yes  |  |
 | size | string |  yes  |  |
 | image | [string] |  no  |  |
 | l3_category | number |  yes  |  |
 | l1_category | [string] |  no  |  |
 | name | string |  yes  |  |

---


 
 
 #### [GST](#GST)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gstin_code | string |  yes  |  |
 | brand_calculated_amount | number |  yes  |  |
 | tax_collected_at_source | number |  yes  |  |
 | value_of_good | number |  yes  |  |
 | gst_fee | number |  yes  |  |

---


 
 
 #### [BagItem](#BagItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  |  |
 | shipment_id | string |  yes  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | item | [Item](#Item) |  no  |  |
 | bag_id | number |  yes  |  |
 | ordering_channel | string |  yes  |  |
 | gst | [GST](#GST) |  no  |  |
 | item_quantity | number |  yes  |  |
 | total_shipment_bags | number |  yes  |  |

---


 
 
 #### [Channel](#Channel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string |  yes  |  |
 | name | string |  yes  |  |

---


 
 
 #### [Application](#Application)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |

---


 
 
 #### [ShipmentItem](#ShipmentItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_bags_count | number |  yes  |  |
 | shipment_created_at | number |  yes  |  |
 | sla | string |  no  |  |
 | payment_mode_info | [PaymentModeInfo](#PaymentModeInfo) |  no  |  |
 | id | string |  yes  |  |
 | total_shipments_in_order | number |  yes  |  |
 | user | [UserInfo](#UserInfo) |  no  |  |
 | shipment_status | [ShipmentStatus](#ShipmentStatus) |  no  |  |
 | created_at | string |  yes  |  |
 | fulfilling_store | [FulFillingStore](#FulFillingStore) |  no  |  |
 | fulfilling_centre | string |  yes  |  |
 | bags | [[BagItem](#BagItem)] |  no  |  |
 | channel | [Channel](#Channel) |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | application | [Application](#Application) |  no  |  |

---


 
 
 #### [ShipmentInternalPlatformViewResponse](#ShipmentInternalPlatformViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | applied_filters | string |  no  |  |
 | filters | [[Filters](#Filters)] |  no  |  |
 | items | [[ShipmentItem](#ShipmentItem)] |  no  |  |
 | page | string |  no  |  |

---


 
 
 #### [ShipmentPricesDataSet](#ShipmentPricesDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cashback_applied | number |  no  |  |
 | coupon_effective_discount | number |  no  |  |
 | value_of_good | number |  no  |  |
 | refund_credit | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | cod_charges | number |  no  |  |
 | price_effective | number |  no  |  |
 | price_marked | number |  no  |  |
 | amount_paid | number |  no  |  |
 | discount | string |  no  |  |
 | tax_collected_at_source | number |  no  |  |
 | fynd_credits | number |  no  |  |
 | cashback | number |  no  |  |
 | gst_fee | number |  no  |  |

---


 
 
 #### [Shipment1](#Shipment1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | rtd_done | string |  yes  |  |
 | shipment_id | string |  yes  |  |
 | order_id | string |  yes  |  |
 | total_items | string |  yes  |  |
 | shipment_status | string |  yes  |  |
 | prices | [ShipmentPricesDataSet](#ShipmentPricesDataSet) |  no  |  |

---


 
 
 #### [ManifestShipmentResponse](#ManifestShipmentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | shipments | [[Shipment1](#Shipment1)] |  no  |  |

---




