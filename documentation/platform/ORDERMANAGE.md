



##### [Back to Platform docs](./README.md)

## OrderManage Methods
Update Status all platform shipment api(s)
* [statusInternalUpdate](#statusinternalupdate)
* [getShipmentHistory](#getshipmenthistory)
* [manualStoreReassignment](#manualstorereassignment)



## Methods with example and description


### statusInternalUpdate




```javascript
// Promise
const promise = client.orderManage.statusInternalUpdate({  body : value });

// Async/Await
const data = await client.orderManage.statusInternalUpdate({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PlatformShipmentStatusInternal](#PlatformShipmentStatusInternal) | yes | Request body |




*Returned Response:*




[ResponseDetail](#ResponseDetail)

We are processing the report!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getShipmentHistory




```javascript
// Promise
const promise = client.orderManage.getShipmentHistory({  bagId : value });

// Async/Await
const data = await client.orderManage.getShipmentHistory({  bagId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| bagId | number | yes |  |  





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


### manualStoreReassignment




```javascript
// Promise
const promise = client.orderManage.manualStoreReassignment({  body : value });

// Async/Await
const data = await client.orderManage.manualStoreReassignment({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ManualStoreReassign](#ManualStoreReassign) | yes | Request body |


Manual Store Reassignment

*Returned Response:*




[ManualStoreReassignResponse](#ManualStoreReassignResponse)

Successfully reassigned store!




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas

 
 
 #### [ProductDetail](#ProductDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier | string |  no  |  |
 | quantity | number |  no  |  |

---


 
 
 #### [ShipmentBody](#ShipmentBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason | [number] |  no  |  |
 | store_invoice_id | string |  no  |  |
 | data_update | string |  no  |  |
 | products | [[ProductDetail](#ProductDetail)] |  no  |  |

---


 
 
 #### [ShipmentDetail](#ShipmentDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_id | [ShipmentBody](#ShipmentBody) |  no  |  |

---


 
 
 #### [Statuses](#Statuses)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  |  |
 | shipments | [ShipmentDetail](#ShipmentDetail) |  no  |  |
 | exclude_bags_next_state | string |  yes  |  |

---


 
 
 #### [PlatformShipmentStatusInternal](#PlatformShipmentStatusInternal)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | statuses | [Statuses](#Statuses) |  no  |  |
 | task | boolean |  no  |  |
 | force_transition | boolean |  no  |  |

---


 
 
 #### [ResponseDetail](#ResponseDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | message | [string] |  no  |  |

---


 
 
 #### [ErrorDetail](#ErrorDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [HistoryDict](#HistoryDict)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | l2_detail | string |  no  |  |
 | ticket_id | string |  no  |  |
 | type | string |  yes  |  |
 | ticket_url | string |  no  |  |
 | user | string |  yes  |  |
 | createdat | string |  yes  |  |
 | message | string |  yes  |  |
 | l3_detail | string |  no  |  |
 | l1_detail | string |  no  |  |

---


 
 
 #### [ShipmentHistoryResponse](#ShipmentHistoryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | activity_history | [[HistoryDict](#HistoryDict)] |  no  |  |

---


 
 
 #### [ManualStoreReassign](#ManualStoreReassign)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason_id | [number] |  no  |  |
 | store_id | number |  yes  |  |
 | reason_text | string |  no  |  |
 | shipment_id | string |  yes  |  |

---


 
 
 #### [ManualStoreReassignResponse](#ManualStoreReassignResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | message | string |  no  |  |

---



