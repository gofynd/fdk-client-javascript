



##### [Back to Platform docs](./README.md)

## Orders Methods
Handles all platform order and shipment api(s)
* [getOrderShipmentDetails](#getordershipmentdetails)
* [getShipmentDetails](#getshipmentdetails)
* [getShipmentToManifest](#getshipmenttomanifest)



## Methods with example and description


### getOrderShipmentDetails




```javascript
// Promise
const promise = client.orders.getOrderShipmentDetails({  shipmentId : value });

// Async/Await
const data = await client.orders.getOrderShipmentDetails({  shipmentId : value });
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


### getShipmentDetails




```javascript
// Promise
const promise = client.orders.getShipmentDetails({  orderId : value });

// Async/Await
const data = await client.orders.getShipmentDetails({  orderId : value });
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

 
 
 #### [OrderDetailsData](#OrderDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  |  |

---


 
 
 #### [UserDetailsData](#UserDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | state | string |  yes  |  |
 | phone | string |  yes  |  |
 | address | string |  yes  |  |
 | country | string |  yes  |  |
 | email | string |  yes  |  |
 | name | string |  yes  |  |
 | pincode | string |  yes  |  |
 | city | string |  yes  |  |

---


 
 
 #### [ShipmentPricesData](#ShipmentPricesData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst_fee | number |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | value_of_good | number |  no  |  |
 | tax_collected_at_source | number |  no  |  |
 | gstin_code | string |  no  |  |

---


 
 
 #### [DPDetails](#DPDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | eway_bill_id | string |  no  |  |
 | id | string |  no  |  |
 | track_url | string |  no  |  |
 | country | string |  no  |  |
 | awb_no | string |  no  |  |
 | name | string |  no  |  |
 | pincode | string |  no  |  |
 | gst_tag | string |  no  |  |

---


 
 
 #### [FulfillingStore](#FulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fulfillment_channel | string |  yes  |  |
 | state | string |  yes  |  |
 | phone | string |  yes  |  |
 | id | string |  yes  |  |
 | contact_person | string |  yes  |  |
 | address | string |  yes  |  |
 | country | string |  yes  |  |
 | store_name | string |  yes  |  |
 | pincode | string |  yes  |  |
 | city | string |  yes  |  |
 | code | string |  yes  |  |

---


 
 
 #### [Shipment](#Shipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | journey_type | string |  yes  |  |
 | delivery_slot | string |  yes  |  |
 | order | [OrderDetailsData](#OrderDetailsData) |  no  |  |
 | delivery_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | payment_mode | string |  yes  |  |
 | billing_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | shipment_prices | [ShipmentPricesData](#ShipmentPricesData) |  no  |  |
 | dp_details | [DPDetails](#DPDetails) |  no  |  |
 | bag_status_history | [string] |  no  |  |
 | shipment_id | string |  yes  |  |
 | shipment_quantity | number |  yes  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  |
 | bags | string |  yes  |  |

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


 
 
 #### [ShipmentPricesDataSet](#ShipmentPricesDataSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst_fee | number |  no  |  |
 | coupon_effective_discount | number |  no  |  |
 | refund_credit | number |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | value_of_good | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | tax_collected_at_source | number |  no  |  |
 | discount | string |  no  |  |
 | cod_charges | number |  no  |  |
 | fynd_credits | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | price_marked | number |  no  |  |
 | amount_paid | number |  no  |  |
 | price_effective | number |  no  |  |
 | cashback | number |  no  |  |

---


 
 
 #### [Shipment1](#Shipment1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_status | string |  yes  |  |
 | prices | [ShipmentPricesDataSet](#ShipmentPricesDataSet) |  no  |  |
 | rtd_done | string |  yes  |  |
 | order_id | string |  yes  |  |
 | shipment_id | string |  yes  |  |
 | total_items | string |  yes  |  |

---


 
 
 #### [ManifestShipmentResponse](#ManifestShipmentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipments | [[Shipment1](#Shipment1)] |  no  |  |
 | success | boolean |  yes  |  |

---




