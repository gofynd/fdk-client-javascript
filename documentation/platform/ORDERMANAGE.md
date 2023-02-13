



##### [Back to Platform docs](./README.md)

## OrderManage Methods
Handles all platform order and shipment api(s)
* [invalidateShipmentCache](#invalidateshipmentcache)
* [reassignLocation](#reassignlocation)
* [updateShipmentLock](#updateshipmentlock)
* [getAnnouncements](#getannouncements)
* [updateAddress](#updateaddress)
* [click2Call](#click2call)
* [updateShipmentStatus](#updateshipmentstatus)
* [processManifest](#processmanifest)
* [dispatchManifest](#dispatchmanifest)
* [getRoleBasedActions](#getrolebasedactions)
* [getShipmentHistory](#getshipmenthistory)
* [sendSmsNinja](#sendsmsninja)
* [platformManualAssignDPToShipment](#platformmanualassigndptoshipment)
* [updatePackagingDimensions](#updatepackagingdimensions)
* [createOrder](#createorder)
* [getChannelConfig](#getchannelconfig)
* [createChannelConfig](#createchannelconfig)
* [uploadConsent](#uploadconsent)
* [orderUpdate](#orderupdate)
* [checkOrderStatus](#checkorderstatus)
* [sendSmsNinjaPlatform](#sendsmsninjaplatform)



## Methods with example and description


### invalidateShipmentCache




```javascript
// Promise
const promise = client.orderManage.invalidateShipmentCache({  body : value });

// Async/Await
const data = await client.orderManage.invalidateShipmentCache({  body : value });
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


### reassignLocation




```javascript
// Promise
const promise = client.orderManage.reassignLocation({  body : value });

// Async/Await
const data = await client.orderManage.reassignLocation({  body : value });
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


### updateShipmentLock




```javascript
// Promise
const promise = client.orderManage.updateShipmentLock({  body : value });

// Async/Await
const data = await client.orderManage.updateShipmentLock({  body : value });
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


### getAnnouncements




```javascript
// Promise
const promise = client.orderManage.getAnnouncements({  date : value });

// Async/Await
const data = await client.orderManage.getAnnouncements({  date : value });
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


### updateAddress




```javascript
// Promise
const promise = client.orderManage.updateAddress({  shipmentId : value,
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
const data = await client.orderManage.updateAddress({  shipmentId : value,
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


### click2Call




```javascript
// Promise
const promise = client.orderManage.click2Call({  caller : value,
 receiver : value,
 bagId : value,
 callingTo : value,
 callerId : value });

// Async/Await
const data = await client.orderManage.click2Call({  caller : value,
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


### updateShipmentStatus




```javascript
// Promise
const promise = client.orderManage.updateShipmentStatus({  body : value });

// Async/Await
const data = await client.orderManage.updateShipmentStatus({  body : value });
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


### processManifest




```javascript
// Promise
const promise = client.orderManage.processManifest({  body : value });

// Async/Await
const data = await client.orderManage.processManifest({  body : value });
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


### dispatchManifest




```javascript
// Promise
const promise = client.orderManage.dispatchManifest({  body : value });

// Async/Await
const data = await client.orderManage.dispatchManifest({  body : value });
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


### getRoleBasedActions




```javascript
// Promise
const promise = client.orderManage.getRoleBasedActions();

// Async/Await
const data = await client.orderManage.getRoleBasedActions();
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


### getShipmentHistory




```javascript
// Promise
const promise = client.orderManage.getShipmentHistory({  shipmentId : value,
 bagId : value });

// Async/Await
const data = await client.orderManage.getShipmentHistory({  shipmentId : value,
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


### sendSmsNinja




```javascript
// Promise
const promise = client.orderManage.sendSmsNinja({  body : value });

// Async/Await
const data = await client.orderManage.sendSmsNinja({  body : value });
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


### platformManualAssignDPToShipment




```javascript
// Promise
const promise = client.orderManage.platformManualAssignDPToShipment({  body : value });

// Async/Await
const data = await client.orderManage.platformManualAssignDPToShipment({  body : value });
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


### updatePackagingDimensions




```javascript
// Promise
const promise = client.orderManage.updatePackagingDimensions({  body : value });

// Async/Await
const data = await client.orderManage.updatePackagingDimensions({  body : value });
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


### createOrder




```javascript
// Promise
const promise = client.orderManage.createOrder({  body : value });

// Async/Await
const data = await client.orderManage.createOrder({  body : value });
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


### getChannelConfig




```javascript
// Promise
const promise = client.orderManage.getChannelConfig();

// Async/Await
const data = await client.orderManage.getChannelConfig();
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


### createChannelConfig




```javascript
// Promise
const promise = client.orderManage.createChannelConfig({  body : value });

// Async/Await
const data = await client.orderManage.createChannelConfig({  body : value });
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


### uploadConsent




```javascript
// Promise
const promise = client.orderManage.uploadConsent({  body : value });

// Async/Await
const data = await client.orderManage.uploadConsent({  body : value });
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


### orderUpdate




```javascript
// Promise
const promise = client.orderManage.orderUpdate({  body : value });

// Async/Await
const data = await client.orderManage.orderUpdate({  body : value });
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


### checkOrderStatus




```javascript
// Promise
const promise = client.orderManage.checkOrderStatus({  body : value });

// Async/Await
const data = await client.orderManage.checkOrderStatus({  body : value });
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


### sendSmsNinjaPlatform




```javascript
// Promise
const promise = client.orderManage.sendSmsNinjaPlatform();

// Async/Await
const data = await client.orderManage.sendSmsNinjaPlatform();
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



### Schemas

 
 
 #### [InvalidateShipmentCachePayload](#InvalidateShipmentCachePayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_ids | [string] |  yes  |  |

---


 
 
 #### [InvalidateShipmentCacheNestedResponse](#InvalidateShipmentCacheNestedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_id | string |  no  |  |
 | error | string |  no  |  |
 | status | number |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [InvalidateShipmentCacheResponse](#InvalidateShipmentCacheResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | response | [[InvalidateShipmentCacheNestedResponse](#InvalidateShipmentCacheNestedResponse)] |  no  |  |

---


 
 
 #### [ErrorResponse](#ErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error_trace | string |  no  |  |
 | status | number |  yes  |  |
 | message | string |  yes  |  |

---


 
 
 #### [StoreReassign](#StoreReassign)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store_id | number |  yes  |  |
 | affiliate_bag_id | string |  no  |  |
 | item_id | string |  no  |  |
 | bag_id | number |  no  |  |
 | fynd_order_id | string |  no  |  |
 | mongo_article_id | string |  no  |  |
 | reason_ids | [number] |  no  |  |
 | set_id | string |  no  |  |
 | affiliate_id | string |  no  |  |
 | affiliate_order_id | string |  no  |  |

---


 
 
 #### [StoreReassignResponse](#StoreReassignResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [Entities](#Entities)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_bag_id | string |  no  |  |
 | affiliate_shipment_id | string |  no  |  |
 | reason_text | string |  yes  |  |
 | id | string |  no  |  |
 | affiliate_id | string |  no  |  |
 | affiliate_order_id | string |  no  |  |

---


 
 
 #### [UpdateShipmentLockPayload](#UpdateShipmentLockPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entity_type | string |  yes  |  |
 | action | string |  yes  |  |
 | action_type | string |  yes  |  |
 | entities | [[Entities](#Entities)] |  yes  |  |

---


 
 
 #### [Bags](#Bags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_bag_id | string |  no  |  |
 | affiliate_order_id | string |  no  |  |
 | is_locked | boolean |  no  |  |
 | bag_id | number |  no  |  |

---


 
 
 #### [OriginalFilter](#OriginalFilter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_shipment_id | string |  no  |  |
 | affiliate_id | string |  no  |  |

---


 
 
 #### [CheckResponse](#CheckResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bags | [[Bags](#Bags)] |  no  |  |
 | is_bag_locked | boolean |  no  |  |
 | is_shipment_locked | boolean |  no  |  |
 | status | string |  no  |  |
 | shipment_id | string |  no  |  |
 | affiliate_shipment_id | string |  no  |  |
 | original_filter | [OriginalFilter](#OriginalFilter) |  no  |  |
 | lock_status | boolean |  no  |  |
 | affiliate_id | string |  no  |  |

---


 
 
 #### [UpdateShipmentLockResponse](#UpdateShipmentLockResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | check_response | [[CheckResponse](#CheckResponse)] |  no  |  |
 | success | boolean |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [AnnouncementResponse](#AnnouncementResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo_url | string |  no  |  |
 | description | string |  no  |  |
 | company_id | number |  no  |  |
 | created_at | string |  no  |  |
 | to_datetime | string |  no  |  |
 | platform_id | string |  no  |  |
 | from_datetime | string |  no  |  |
 | title | string |  no  |  |
 | id | number |  yes  |  |
 | platform_name | string |  no  |  |

---


 
 
 #### [AnnouncementsResponse](#AnnouncementsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | announcements | [[AnnouncementResponse](#AnnouncementResponse)] |  no  |  |

---


 
 
 #### [BaseResponse](#BaseResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | message | string |  yes  |  |

---


 
 
 #### [Click2CallResponse](#Click2CallResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | call_id | string |  yes  |  |
 | status | boolean |  yes  |  |

---


 
 
 #### [ProductsDataUpdatesFilters](#ProductsDataUpdatesFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | line_number | number |  no  |  |
 | identifier | string |  no  |  |

---


 
 
 #### [ProductsDataUpdates](#ProductsDataUpdates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  |  |
 | filters | [[ProductsDataUpdatesFilters](#ProductsDataUpdatesFilters)] |  no  |  |

---


 
 
 #### [EntitiesDataUpdates](#EntitiesDataUpdates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  |  |
 | filters | [string] |  no  |  |

---


 
 
 #### [DataUpdates](#DataUpdates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | products | [[ProductsDataUpdates](#ProductsDataUpdates)] |  no  |  |
 | entities | [[EntitiesDataUpdates](#EntitiesDataUpdates)] |  no  |  |

---


 
 
 #### [Products](#Products)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | line_number | number |  no  |  |
 | identifier | string |  no  |  |
 | quantity | number |  no  |  |

---


 
 
 #### [ProductsReasonsData](#ProductsReasonsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason_text | string |  no  |  |
 | reason_id | number |  no  |  |

---


 
 
 #### [ProductsReasonsFilters](#ProductsReasonsFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | line_number | number |  no  |  |
 | identifier | string |  no  |  |
 | quantity | number |  no  |  |

---


 
 
 #### [ProductsReasons](#ProductsReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [ProductsReasonsData](#ProductsReasonsData) |  no  |  |
 | filters | [[ProductsReasonsFilters](#ProductsReasonsFilters)] |  no  |  |

---


 
 
 #### [EntityReasonData](#EntityReasonData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason_text | string |  no  |  |
 | reason_id | number |  no  |  |

---


 
 
 #### [EntitiesReasons](#EntitiesReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [EntityReasonData](#EntityReasonData) |  no  |  |
 | filters | [string] |  no  |  |

---


 
 
 #### [ReasonsData](#ReasonsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | products | [[ProductsReasons](#ProductsReasons)] |  no  |  |
 | entities | [[EntitiesReasons](#EntitiesReasons)] |  no  |  |

---


 
 
 #### [ShipmentsRequest](#ShipmentsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data_updates | [DataUpdates](#DataUpdates) |  no  |  |
 | products | [[Products](#Products)] |  no  |  |
 | identifier | string |  yes  |  |
 | reasons | [ReasonsData](#ReasonsData) |  no  |  |

---


 
 
 #### [StatuesRequest](#StatuesRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | exclude_bags_next_state | string |  no  |  |
 | shipments | [[ShipmentsRequest](#ShipmentsRequest)] |  no  |  |
 | status | string |  no  |  |

---


 
 
 #### [UpdateShipmentStatusRequest](#UpdateShipmentStatusRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | task | boolean |  no  |  |
 | force_transition | boolean |  no  |  |
 | statuses | [[StatuesRequest](#StatuesRequest)] |  no  |  |
 | unlock_before_transition | boolean |  no  |  |
 | lock_after_transition | boolean |  no  |  |

---


 
 
 #### [ShipmentsResponse](#ShipmentsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | stack_trace | string |  no  |  |
 | code | string |  no  |  |
 | message | string |  no  |  |
 | identifier | string |  no  |  |
 | meta | string |  no  |  |
 | exception | string |  no  |  |
 | final_state | string |  no  |  |
 | status | number |  no  |  |

---


 
 
 #### [StatuesResponse](#StatuesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipments | [[ShipmentsResponse](#ShipmentsResponse)] |  no  |  |

---


 
 
 #### [UpdateShipmentStatusResponseBody](#UpdateShipmentStatusResponseBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | statuses | [[StatuesResponse](#StatuesResponse)] |  no  |  |

---


 
 
 #### [MarketPlacePdf](#MarketPlacePdf)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | label | string |  no  |  |
 | invoice | string |  no  |  |

---


 
 
 #### [AffiliateBag](#AffiliateBag)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | avl_qty | number |  yes  |  |
 | hsn_code_id | string |  yes  |  |
 | pdf_links | [MarketPlacePdf](#MarketPlacePdf) |  no  |  |
 | item_size | string |  yes  |  |
 | transfer_price | number |  yes  |  |
 | store_id | number |  yes  |  |
 | item_id | number |  yes  |  |
 | affiliate_store_id | string |  yes  |  |
 | affiliate_meta | string |  yes  |  |
 | price_marked | number |  yes  |  |
 | fynd_store_id | string |  yes  |  |
 | identifier | string |  yes  |  |
 | discount | number |  yes  |  |
 | seller_identifier | string |  yes  |  |
 | delivery_charge | number |  yes  |  |
 | unit_price | number |  yes  |  |
 | price_effective | number |  yes  |  |
 | company_id | number |  yes  |  |
 | quantity | number |  yes  |  |
 | sku | string |  yes  |  |
 | amount_paid | number |  yes  |  |
 | _id | string |  yes  |  |
 | modified_on | string |  yes  |  |

---


 
 
 #### [OrderUser](#OrderUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string |  yes  |  |
 | mobile | number |  yes  |  |
 | last_name | string |  yes  |  |
 | phone | number |  yes  |  |
 | email | string |  yes  |  |
 | first_name | string |  yes  |  |
 | city | string |  yes  |  |
 | pincode | string |  yes  |  |
 | address2 | string |  no  |  |
 | address1 | string |  no  |  |
 | state | string |  yes  |  |

---


 
 
 #### [UserData](#UserData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipping_user | [OrderUser](#OrderUser) |  no  |  |
 | billing_user | [OrderUser](#OrderUser) |  no  |  |

---


 
 
 #### [OrderPriority](#OrderPriority)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fulfilment_priority | number |  no  |  |
 | affiliate_priority_code | string |  no  |  |
 | fulfilment_priority_text | string |  no  |  |

---


 
 
 #### [ArticleDetails](#ArticleDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  yes  |  |
 | brand_id | number |  yes  |  |
 | attributes | string |  yes  |  |
 | category | string |  yes  |  |
 | quantity | number |  yes  |  |
 | dimension | string |  yes  |  |
 | weight | string |  yes  |  |

---


 
 
 #### [LocationDetails](#LocationDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fulfillment_id | number |  yes  |  |
 | fulfillment_type | string |  yes  |  |
 | articles | [[ArticleDetails](#ArticleDetails)] |  yes  |  |

---


 
 
 #### [ShipmentDetails](#ShipmentDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dp_id | number |  no  |  |
 | affiliate_shipment_id | string |  yes  |  |
 | box_type | string |  no  |  |
 | fulfillment_id | number |  yes  |  |
 | meta | string |  no  |  |
 | articles | [[ArticleDetails](#ArticleDetails)] |  yes  |  |
 | shipments | number |  yes  |  |

---


 
 
 #### [ShipmentConfig](#ShipmentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | to_pincode | string |  yes  |  |
 | identifier | string |  yes  |  |
 | location_details | [LocationDetails](#LocationDetails) |  no  |  |
 | shipment | [[ShipmentDetails](#ShipmentDetails)] |  yes  |  |
 | journey | string |  yes  |  |
 | action | string |  yes  |  |
 | source | string |  yes  |  |
 | payment_mode | string |  yes  |  |

---


 
 
 #### [ShipmentData](#ShipmentData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_data | [ShipmentConfig](#ShipmentConfig) |  yes  |  |

---


 
 
 #### [OrderInfo](#OrderInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bags | [[AffiliateBag](#AffiliateBag)] |  yes  |  |
 | payment | string |  no  |  |
 | user | [UserData](#UserData) |  yes  |  |
 | order_priority | [OrderPriority](#OrderPriority) |  no  |  |
 | cod_charges | number |  yes  |  |
 | items | string |  yes  |  |
 | coupon | string |  no  |  |
 | shipment | [ShipmentData](#ShipmentData) |  no  |  |
 | order_value | number |  yes  |  |
 | discount | number |  yes  |  |
 | delivery_charges | number |  yes  |  |
 | billing_address | [OrderUser](#OrderUser) |  yes  |  |
 | shipping_address | [OrderUser](#OrderUser) |  yes  |  |
 | payment_mode | string |  yes  |  |
 | affiliate_order_id | string |  no  |  |

---


 
 
 #### [AffiliateStoreIdMapping](#AffiliateStoreIdMapping)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | marketplace_store_id | string |  yes  |  |
 | store_id | number |  yes  |  |

---


 
 
 #### [AffiliateAppConfigMeta](#AffiliateAppConfigMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  yes  |  |
 | name | string |  yes  |  |

---


 
 
 #### [AffiliateAppConfig](#AffiliateAppConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | secret | string |  yes  |  |
 | description | string |  no  |  |
 | created_at | string |  yes  |  |
 | token | string |  yes  |  |
 | meta | [[AffiliateAppConfigMeta](#AffiliateAppConfigMeta)] |  no  |  |
 | name | string |  yes  |  |
 | updated_at | string |  yes  |  |
 | id | string |  yes  |  |
 | owner | string |  yes  |  |

---


 
 
 #### [AffiliateInventoryOrderConfig](#AffiliateInventoryOrderConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | force_reassignment | boolean |  no  |  |

---


 
 
 #### [AffiliateInventoryPaymentConfig](#AffiliateInventoryPaymentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | source | string |  no  |  |
 | mode_of_payment | string |  no  |  |

---


 
 
 #### [AffiliateInventoryLogisticsConfig](#AffiliateInventoryLogisticsConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dp_assignment | boolean |  no  |  |

---


 
 
 #### [AffiliateInventoryStoreConfig](#AffiliateInventoryStoreConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store | string |  no  |  |

---


 
 
 #### [AffiliateInventoryArticleAssignmentConfig](#AffiliateInventoryArticleAssignmentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | post_order_reassignment | boolean |  no  |  |

---


 
 
 #### [AffiliateInventoryConfig](#AffiliateInventoryConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order | [AffiliateInventoryOrderConfig](#AffiliateInventoryOrderConfig) |  no  |  |
 | payment | [AffiliateInventoryPaymentConfig](#AffiliateInventoryPaymentConfig) |  no  |  |
 | logistics | [AffiliateInventoryLogisticsConfig](#AffiliateInventoryLogisticsConfig) |  no  |  |
 | inventory | [AffiliateInventoryStoreConfig](#AffiliateInventoryStoreConfig) |  no  |  |
 | article_assignment | [AffiliateInventoryArticleAssignmentConfig](#AffiliateInventoryArticleAssignmentConfig) |  no  |  |

---


 
 
 #### [AffiliateConfig](#AffiliateConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app | [AffiliateAppConfig](#AffiliateAppConfig) |  no  |  |
 | inventory | [AffiliateInventoryConfig](#AffiliateInventoryConfig) |  no  |  |

---


 
 
 #### [Affiliate](#Affiliate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | config | [AffiliateConfig](#AffiliateConfig) |  no  |  |
 | token | string |  yes  |  |
 | id | string |  yes  |  |

---


 
 
 #### [OrderConfig](#OrderConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | create_user | boolean |  no  |  |
 | article_lookup | string |  no  |  |
 | bag_end_state | string |  no  |  |
 | affiliate_store_id_mapping | [[AffiliateStoreIdMapping](#AffiliateStoreIdMapping)] |  yes  |  |
 | affiliate | [Affiliate](#Affiliate) |  yes  |  |
 | store_lookup | string |  no  |  |

---


 
 
 #### [CreateOrderPayload](#CreateOrderPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_info | [OrderInfo](#OrderInfo) |  yes  |  |
 | order_config | [OrderConfig](#OrderConfig) |  yes  |  |
 | affiliate_id | string |  yes  |  |

---


 
 
 #### [CreateOrderResponse](#CreateOrderResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_order_id | string |  yes  |  |

---


 
 
 #### [DispatchManifest](#DispatchManifest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | manifest_id | string |  yes  |  |

---


 
 
 #### [SuccessResponse](#SuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [ActionInfo](#ActionInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  yes  |  |
 | id | number |  yes  |  |
 | display_text | string |  yes  |  |
 | description | string |  yes  |  |

---


 
 
 #### [GetActionsResponse](#GetActionsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | permissions | [ActionInfo](#ActionInfo) |  yes  |  |

---


 
 
 #### [HistoryDict](#HistoryDict)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | createdat | string |  yes  |  |
 | bag_id | number |  no  |  |
 | type | string |  yes  |  |
 | user | string |  yes  |  |
 | message | string |  yes  |  |
 | l2_detail | string |  no  |  |
 | l3_detail | string |  no  |  |
 | ticket_id | string |  no  |  |
 | l1_detail | string |  no  |  |
 | ticket_url | string |  no  |  |

---


 
 
 #### [ShipmentHistoryResponse](#ShipmentHistoryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | activity_history | [[HistoryDict](#HistoryDict)] |  no  |  |

---


 
 
 #### [ErrorDetail](#ErrorDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [SmsDataPayload](#SmsDataPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | customer_name | string |  yes  |  |
 | phone_number | number |  yes  |  |
 | payment_mode | string |  yes  |  |
 | message | string |  yes  |  |
 | shipment_id | number |  yes  |  |
 | order_id | string |  yes  |  |
 | amount_paid | number |  yes  |  |
 | brand_name | string |  yes  |  |
 | country_code | string |  yes  |  |

---


 
 
 #### [SendSmsPayload](#SendSmsPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [SmsDataPayload](#SmsDataPayload) |  no  |  |
 | slug | string |  yes  |  |
 | bag_id | number |  yes  |  |

---


 
 
 #### [Meta](#Meta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kafka_emission_status | number |  no  |  |
 | state_manager_used | string |  no  |  |

---


 
 
 #### [ShipmentDetail](#ShipmentDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  yes  |  |
 | remarks | string |  no  |  |
 | shipment_id | string |  no  |  |
 | meta | [Meta](#Meta) |  yes  |  |
 | bag_list | [number] |  no  |  |
 | status | string |  no  |  |

---


 
 
 #### [OrderDetails](#OrderDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_order_id | string |  no  |  |
 | created_at | string |  no  |  |

---


 
 
 #### [OrderStatusData](#OrderStatusData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_details | [[ShipmentDetail](#ShipmentDetail)] |  no  |  |
 | errors | [string] |  no  |  |
 | order_details | [OrderDetails](#OrderDetails) |  yes  |  |

---


 
 
 #### [OrderStatusResult](#OrderStatusResult)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | result | [[OrderStatusData](#OrderStatusData)] |  no  |  |
 | success | string |  yes  |  |

---


 
 
 #### [ManualAssignDPToShipment](#ManualAssignDPToShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | qc_required | string |  yes  |  |
 | shipment_ids | [string] |  no  |  |
 | order_type | string |  yes  |  |
 | dp_id | number |  yes  |  |

---


 
 
 #### [ManualAssignDPToShipmentResponse](#ManualAssignDPToShipmentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | errors | [string] |  no  |  |
 | success | string |  yes  |  |

---


 
 
 #### [PaymentMethod](#PaymentMethod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | collect_by | string |  yes  |  |
 | mode | string |  yes  |  |
 | transaction_data | string |  no  |  |
 | meta | string |  no  |  |
 | name | string |  yes  |  |
 | amount | number |  yes  |  |
 | refund_by | string |  yes  |  |

---


 
 
 #### [PaymentInfo](#PaymentInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | primary_mode | string |  yes  |  |
 | payment_methods | [[PaymentMethod](#PaymentMethod)] |  no  |  |

---


 
 
 #### [TaxInfo](#TaxInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gstin | string |  no  |  |
 | b2b_gstin_number | string |  no  |  |

---


 
 
 #### [Tax](#Tax)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | rate | number |  yes  |  |
 | amount | string |  yes  |  |
 | breakup | [string] |  no  |  |
 | name | string |  yes  |  |

---


 
 
 #### [Charge](#Charge)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | tax | [Tax](#Tax) |  no  |  |
 | code | string |  no  |  |
 | name | string |  yes  |  |
 | amount | string |  yes  |  |

---


 
 
 #### [LineItem](#LineItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | charges | [[Charge](#Charge)] |  yes  |  |
 | quantity | number |  no  |  |
 | meta | string |  no  |  |
 | seller_identifier | string |  yes  |  |
 | external_line_id | string |  no  |  |
 | custom_messasge | string |  no  |  |

---


 
 
 #### [ProcessingDates](#ProcessingDates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dispatch_after_date | string |  no  |  |
 | dispatch_by_date | string |  no  |  |
 | confirm_by_date | string |  no  |  |
 | pack_by_date | string |  no  |  |
 | dp_pickup_slot | string |  no  |  |
 | customer_pickup_slot | string |  no  |  |

---


 
 
 #### [Shipment](#Shipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | line_items | [[LineItem](#LineItem)] |  yes  |  |
 | priority | number |  no  |  |
 | external_shipment_id | number |  no  |  |
 | meta | string |  no  |  |
 | processing_dates | [ProcessingDates](#ProcessingDates) |  no  |  |
 | location_id | number |  yes  |  |

---


 
 
 #### [ShippingInfo](#ShippingInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gender | string |  no  |  |
 | last_name | string |  no  |  |
 | state_code | string |  no  |  |
 | first_name | string |  yes  |  |
 | title | string |  no  |  |
 | address2 | string |  no  |  |
 | alternate_mobile_number | string |  no  |  |
 | country_code | string |  no  |  |
 | alternate_email | string |  no  |  |
 | address1 | string |  yes  |  |
 | state | string |  yes  |  |
 | primary_mobile_number | string |  yes  |  |
 | middle_name | string |  no  |  |
 | external_customer_code | string |  no  |  |
 | floor_no | string |  no  |  |
 | slot | [string] |  no  |  |
 | city | string |  yes  |  |
 | pincode | string |  yes  |  |
 | customer_code | string |  no  |  |
 | shipping_type | string |  no  |  |
 | country | string |  yes  |  |
 | landmark | string |  no  |  |
 | geo_location | string |  no  |  |
 | house_no | string |  no  |  |
 | address_type | string |  no  |  |
 | primary_email | string |  yes  |  |

---


 
 
 #### [BillingInfo](#BillingInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gender | string |  no  |  |
 | last_name | string |  no  |  |
 | state_code | string |  no  |  |
 | first_name | string |  yes  |  |
 | title | string |  no  |  |
 | address2 | string |  no  |  |
 | alternate_mobile_number | string |  no  |  |
 | country_code | string |  no  |  |
 | alternate_email | string |  no  |  |
 | address1 | string |  yes  |  |
 | primary_mobile_number | string |  yes  |  |
 | state | string |  yes  |  |
 | middle_name | string |  no  |  |
 | external_customer_code | string |  no  |  |
 | floor_no | string |  no  |  |
 | city | string |  yes  |  |
 | pincode | string |  yes  |  |
 | customer_code | string |  no  |  |
 | country | string |  yes  |  |
 | house_no | string |  no  |  |
 | primary_email | string |  yes  |  |

---


 
 
 #### [CreateOrderAPI](#CreateOrderAPI)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_info | [PaymentInfo](#PaymentInfo) |  yes  |  |
 | tax_info | [TaxInfo](#TaxInfo) |  no  |  |
 | external_creation_date | string |  no  |  |
 | charges | [[Charge](#Charge)] |  yes  |  |
 | meta | string |  no  |  |
 | external_order_id | string |  no  |  |
 | shipments | [[Shipment](#Shipment)] |  yes  |  |
 | currency_info | string |  no  |  |
 | shipping_info | [ShippingInfo](#ShippingInfo) |  yes  |  |
 | billing_info | [BillingInfo](#BillingInfo) |  yes  |  |

---


 
 
 #### [CreateOrderErrorReponse](#CreateOrderErrorReponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | request_id | string |  no  |  |
 | info | any |  no  |  |
 | stack_trace | string |  no  |  |
 | code | string |  no  |  |
 | message | string |  yes  |  |
 | meta | string |  no  |  |
 | exception | string |  no  |  |
 | status | number |  yes  |  |

---


 
 
 #### [PaymentMethods](#PaymentMethods)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | collect_by | string |  no  |  |
 | mode | string |  no  |  |
 | refund_by | string |  no  |  |

---


 
 
 #### [CreateChannelPaymentInfo](#CreateChannelPaymentInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | source | string |  no  |  |
 | mode_of_payment | string |  no  |  |
 | payment_methods | [[PaymentMethods](#PaymentMethods)] |  no  |  |

---


 
 
 #### [DpConfiguration](#DpConfiguration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipping_by | string |  no  |  |

---


 
 
 #### [CreateChannelConfig](#CreateChannelConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo_url | string |  no  |  |
 | lock_states | [string] |  no  |  |
 | payment_info | [CreateChannelPaymentInfo](#CreateChannelPaymentInfo) |  no  |  |
 | location_reassignment | boolean |  no  |  |
 | dp_configuration | [DpConfiguration](#DpConfiguration) |  no  |  |
 | shipment_assignment | string |  no  |  |

---


 
 
 #### [CreateChannelConfigData](#CreateChannelConfigData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | config_data | [CreateChannelConfig](#CreateChannelConfig) |  no  |  |

---


 
 
 #### [CreateChannelConifgErrorResponse](#CreateChannelConifgErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string |  no  |  |

---


 
 
 #### [CreateChannelConfigResponse](#CreateChannelConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_inserted | boolean |  no  |  |
 | is_upserted | boolean |  no  |  |
 | acknowledged | boolean |  no  |  |

---


 
 
 #### [UploadConsent](#UploadConsent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | manifest_id | string |  yes  |  |
 | consent_url | string |  yes  |  |

---


 
 
 #### [PlatformOrderUpdate](#PlatformOrderUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_id | string |  yes  |  |

---


 
 
 #### [ResponseDetail](#ResponseDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | message | [string] |  no  |  |

---


 
 
 #### [FyndOrderIdList](#FyndOrderIdList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_order_id | [string] |  no  |  |

---


 
 
 #### [OrderStatus](#OrderStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mobile | number |  yes  |  |
 | order_details | [[FyndOrderIdList](#FyndOrderIdList)] |  no  |  |
 | end_date | string |  yes  |  |
 | start_date | string |  yes  |  |

---




