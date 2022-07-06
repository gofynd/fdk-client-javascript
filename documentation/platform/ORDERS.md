



##### [Back to Platform docs](./README.md)

## Orders Methods
Handles all platform order and shipment api(s)
* [getShipmentDetails](#getshipmentdetails)
* [getOrderShipmentDetails](#getordershipmentdetails)



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



### Schemas

 
 
 #### [OrderDetailsData](#OrderDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  |  |

---


 
 
 #### [FulfillingStore](#FulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store_name | string |  yes  |  |
 | country | string |  yes  |  |
 | code | string |  yes  |  |
 | address | string |  yes  |  |
 | city | string |  yes  |  |
 | id | string |  yes  |  |
 | state | string |  yes  |  |
 | pincode | string |  yes  |  |
 | fulfillment_channel | string |  yes  |  |
 | contact_person | string |  yes  |  |
 | phone | string |  yes  |  |

---


 
 
 #### [DPDetails](#DPDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string |  no  |  |
 | awb_no | string |  no  |  |
 | name | string |  no  |  |
 | gst_tag | string |  no  |  |
 | eway_bill_id | string |  no  |  |
 | id | string |  no  |  |
 | pincode | string |  no  |  |
 | track_url | string |  no  |  |

---


 
 
 #### [UserDetailsData](#UserDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string |  yes  |  |
 | address | string |  yes  |  |
 | phone | string |  yes  |  |
 | name | string |  yes  |  |
 | email | string |  yes  |  |
 | state | string |  yes  |  |
 | pincode | string |  yes  |  |
 | city | string |  yes  |  |

---


 
 
 #### [ShipmentPricesData](#ShipmentPricesData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value_of_good | number |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | gstin_code | string |  no  |  |
 | gst_fee | number |  no  |  |
 | tax_collected_at_source | number |  no  |  |

---


 
 
 #### [Shipment](#Shipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order | [OrderDetailsData](#OrderDetailsData) |  no  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  |
 | bags | string |  yes  |  |
 | journey_type | string |  yes  |  |
 | payment_mode | string |  yes  |  |
 | dp_details | [DPDetails](#DPDetails) |  no  |  |
 | delivery_slot | string |  yes  |  |
 | billing_details | [UserDetailsData](#UserDetailsData) |  no  |  |
 | shipment_prices | [ShipmentPricesData](#ShipmentPricesData) |  no  |  |
 | shipment_quantity | number |  yes  |  |
 | bag_status_history | [string] |  no  |  |
 | shipment_id | string |  yes  |  |
 | delivery_details | [UserDetailsData](#UserDetailsData) |  no  |  |

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




