



##### [Back to Platform docs](./README.md)

## Orders Methods
Handles all platform order and shipment api(s)
* [getOrderShipmentDetails](#getordershipmentdetails)
* [getShipmentDetails](#getshipmentdetails)



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



### Schemas

 
 
 #### [OrderDetails](#OrderDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  |  |

---


 
 
 #### [FulfillingStore](#FulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string |  yes  |  |
 | store_name | string |  yes  |  |
 | city | string |  yes  |  |
 | phone | string |  yes  |  |
 | contact_person | string |  yes  |  |
 | code | string |  yes  |  |
 | id | string |  yes  |  |
 | state | string |  yes  |  |
 | fulfillment_channel | string |  yes  |  |
 | country | string |  yes  |  |
 | pincode | string |  yes  |  |

---


 
 
 #### [UserDetails](#UserDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | city | string |  yes  |  |
 | address | string |  yes  |  |
 | phone | string |  yes  |  |
 | state | string |  yes  |  |
 | email | string |  yes  |  |
 | country | string |  yes  |  |
 | pincode | string |  yes  |  |

---


 
 
 #### [ShipmentPrices](#ShipmentPrices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_calculated_amount | number |  no  |  |
 | tax_collected_at_source | number |  no  |  |
 | gstin_code | string |  no  |  |
 | value_of_good | number |  no  |  |
 | gst_fee | number |  no  |  |

---


 
 
 #### [DPDetails](#DPDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | awb_no | string |  no  |  |
 | gst_tag | string |  no  |  |
 | pincode | string |  no  |  |
 | track_url | string |  no  |  |
 | id | string |  no  |  |
 | country | string |  no  |  |
 | eway_bill_id | string |  no  |  |

---


 
 
 #### [Shipment](#Shipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order | [OrderDetails](#OrderDetails) |  no  |  |
 | payment_mode | string |  yes  |  |
 | bag_status_history | [string] |  no  |  |
 | delivery_slot | string |  yes  |  |
 | shipment_quantity | number |  yes  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  |
 | shipment_id | string |  yes  |  |
 | delivery_details | [UserDetails](#UserDetails) |  no  |  |
 | shipment_prices | [ShipmentPrices](#ShipmentPrices) |  no  |  |
 | billing_details | [UserDetails](#UserDetails) |  no  |  |
 | journey_type | string |  yes  |  |
 | dp_details | [DPDetails](#DPDetails) |  no  |  |
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




