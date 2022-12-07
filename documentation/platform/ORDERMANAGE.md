



##### [Back to Platform docs](./README.md)

## OrderManage Methods
Handles all platform order and shipment api(s)
* [invalidateShipmentCache](#invalidateshipmentcache)
* [reassignLocation](#reassignlocation)
* [updateShipmentLock](#updateshipmentlock)
* [getAnnouncements](#getannouncements)
* [updateAddress](#updateaddress)
* [click2Call](#click2call)
* [statusUpdateInternalV4](#statusupdateinternalv4)
* [processManifest](#processmanifest)
* [getRoleBasedActions](#getrolebasedactions)
* [getShipmentHistory](#getshipmenthistory)
* [sendSmsNinja](#sendsmsninja)
* [platformManualAssignDPToShipment](#platformmanualassigndptoshipment)
* [updatePackagingDimensions](#updatepackagingdimensions)
* [createOrder](#createorder)
* [checkOrderStatus](#checkorderstatus)



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


### statusUpdateInternalV4




```javascript
// Promise
const promise = client.orderManage.statusUpdateInternalV4({  body : value });

// Async/Await
const data = await client.orderManage.statusUpdateInternalV4({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [StatusUpdateInternalRequest](#StatusUpdateInternalRequest) | yes | Request body |


Reassign Location

*Returned Response:*




[StatusUpdateInternalResponse](#StatusUpdateInternalResponse)

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



### Schemas

 
 
 #### [InvalidateShipmentCachePayload](#InvalidateShipmentCachePayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_ids | [string] |  yes  |  |

---


 
 
 #### [InvalidateShipmentCacheNestedResponse](#InvalidateShipmentCacheNestedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | error | string |  no  |  |
 | status | number |  no  |  |
 | shipment_id | string |  no  |  |

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
 | message | string |  yes  |  |
 | status | number |  yes  |  |

---


 
 
 #### [StoreReassign](#StoreReassign)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | set_id | string |  no  |  |
 | reason_ids | [number] |  no  |  |
 | store_id | number |  yes  |  |
 | item_id | string |  no  |  |
 | affiliate_bag_id | string |  no  |  |
 | affiliate_id | string |  no  |  |
 | bag_id | number |  no  |  |
 | mongo_article_id | string |  no  |  |
 | affiliate_order_id | string |  no  |  |
 | fynd_order_id | string |  no  |  |

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
 | id | string |  no  |  |
 | affiliate_bag_id | string |  no  |  |
 | affiliate_id | string |  no  |  |
 | affiliate_order_id | string |  no  |  |
 | reason_text | string |  yes  |  |
 | affiliate_shipment_id | string |  no  |  |

---


 
 
 #### [UpdateShipmentLockPayload](#UpdateShipmentLockPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entities | [[Entities](#Entities)] |  yes  |  |
 | entity_type | string |  yes  |  |
 | action | string |  yes  |  |
 | action_type | string |  yes  |  |

---


 
 
 #### [Bags](#Bags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_bag_id | string |  no  |  |
 | bag_id | number |  no  |  |
 | is_locked | boolean |  no  |  |
 | affiliate_order_id | string |  no  |  |

---


 
 
 #### [OriginalFilter](#OriginalFilter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string |  no  |  |
 | affiliate_shipment_id | string |  no  |  |

---


 
 
 #### [CheckResponse](#CheckResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_bag_locked | boolean |  no  |  |
 | affiliate_shipment_id | string |  no  |  |
 | status | string |  no  |  |
 | affiliate_id | string |  no  |  |
 | shipment_id | string |  no  |  |
 | is_shipment_locked | boolean |  no  |  |
 | bags | [[Bags](#Bags)] |  no  |  |
 | lock_status | boolean |  no  |  |
 | original_filter | [OriginalFilter](#OriginalFilter) |  no  |  |

---


 
 
 #### [UpdateShipmentLockResponse](#UpdateShipmentLockResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | message | string |  no  |  |
 | check_response | [[CheckResponse](#CheckResponse)] |  no  |  |

---


 
 
 #### [AnnouncementResponse](#AnnouncementResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | from_datetime | string |  no  |  |
 | description | string |  no  |  |
 | to_datetime | string |  no  |  |
 | platform_name | string |  no  |  |
 | platform_id | string |  no  |  |
 | created_at | string |  no  |  |
 | title | string |  no  |  |
 | id | number |  yes  |  |
 | logo_url | string |  no  |  |
 | company_id | number |  no  |  |

---


 
 
 #### [AnnouncementsResponse](#AnnouncementsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | announcements | [[AnnouncementResponse](#AnnouncementResponse)] |  no  |  |

---


 
 
 #### [BaseResponse](#BaseResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  |  |
 | success | boolean |  yes  |  |

---


 
 
 #### [Click2CallResponse](#Click2CallResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | call_id | string |  yes  |  |
 | status | boolean |  yes  |  |

---


 
 
 #### [EntitiesReasons](#EntitiesReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  |  |
 | filters | [string] |  no  |  |

---


 
 
 #### [ProductsReasons](#ProductsReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  |  |
 | filters | [string] |  no  |  |

---


 
 
 #### [ReasonsData](#ReasonsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entities | [[EntitiesReasons](#EntitiesReasons)] |  no  |  |
 | products | [[ProductsReasons](#ProductsReasons)] |  no  |  |

---


 
 
 #### [Products](#Products)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | quantity | number |  no  |  |
 | line_number | number |  no  |  |
 | identifier | string |  no  |  |

---


 
 
 #### [EntitiesDataUpdates](#EntitiesDataUpdates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  |  |
 | filters | [string] |  no  |  |

---


 
 
 #### [ProductsDataUpdates](#ProductsDataUpdates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  |  |
 | filters | [string] |  no  |  |

---


 
 
 #### [DataUpdates](#DataUpdates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entities | [[EntitiesDataUpdates](#EntitiesDataUpdates)] |  no  |  |
 | products | [[ProductsDataUpdates](#ProductsDataUpdates)] |  no  |  |

---


 
 
 #### [ShipmentsRequest](#ShipmentsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reasons | [ReasonsData](#ReasonsData) |  no  |  |
 | products | [[Products](#Products)] |  no  |  |
 | identifier | string |  yes  |  |
 | data_updates | [DataUpdates](#DataUpdates) |  no  |  |

---


 
 
 #### [StatuesRequest](#StatuesRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | exclude_bags_next_state | string |  no  |  |
 | shipments | [[ShipmentsRequest](#ShipmentsRequest)] |  no  |  |
 | status | string |  no  |  |

---


 
 
 #### [StatusUpdateInternalRequest](#StatusUpdateInternalRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | force_transition | boolean |  no  |  |
 | lock_after_transition | boolean |  no  |  |
 | unlock_before_transition | boolean |  no  |  |
 | task | boolean |  no  |  |
 | statues | [[StatuesRequest](#StatuesRequest)] |  no  |  |

---


 
 
 #### [ShipmentsResponse](#ShipmentsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | exception | string |  no  |  |
 | identifier | string |  yes  |  |
 | status | number |  no  |  |
 | message | string |  no  |  |
 | code | string |  no  |  |
 | stack_trace | string |  no  |  |
 | final_state | string |  no  |  |

---


 
 
 #### [StatuesResponse](#StatuesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipments | [[ShipmentsResponse](#ShipmentsResponse)] |  no  |  |

---


 
 
 #### [StatusUpdateInternalResponse](#StatusUpdateInternalResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | statuses | [[StatuesResponse](#StatuesResponse)] |  no  |  |

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
 | description | string |  no  |  |
 | created_at | string |  yes  |  |
 | id | string |  yes  |  |
 | meta | [[AffiliateAppConfigMeta](#AffiliateAppConfigMeta)] |  no  |  |
 | secret | string |  yes  |  |
 | name | string |  yes  |  |
 | token | string |  yes  |  |
 | updated_at | string |  yes  |  |
 | owner | string |  yes  |  |

---


 
 
 #### [AffiliateInventoryStoreConfig](#AffiliateInventoryStoreConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store | string |  no  |  |

---


 
 
 #### [AffiliateInventoryPaymentConfig](#AffiliateInventoryPaymentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | source | string |  no  |  |
 | mode_of_payment | string |  no  |  |

---


 
 
 #### [AffiliateInventoryArticleAssignmentConfig](#AffiliateInventoryArticleAssignmentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | post_order_reassignment | boolean |  no  |  |

---


 
 
 #### [AffiliateInventoryOrderConfig](#AffiliateInventoryOrderConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | force_reassignment | boolean |  no  |  |

---


 
 
 #### [AffiliateInventoryLogisticsConfig](#AffiliateInventoryLogisticsConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dp_assignment | boolean |  no  |  |

---


 
 
 #### [AffiliateInventoryConfig](#AffiliateInventoryConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | inventory | [AffiliateInventoryStoreConfig](#AffiliateInventoryStoreConfig) |  no  |  |
 | payment | [AffiliateInventoryPaymentConfig](#AffiliateInventoryPaymentConfig) |  no  |  |
 | article_assignment | [AffiliateInventoryArticleAssignmentConfig](#AffiliateInventoryArticleAssignmentConfig) |  no  |  |
 | order | [AffiliateInventoryOrderConfig](#AffiliateInventoryOrderConfig) |  no  |  |
 | logistics | [AffiliateInventoryLogisticsConfig](#AffiliateInventoryLogisticsConfig) |  no  |  |

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
 | token | string |  yes  |  |
 | config | [AffiliateConfig](#AffiliateConfig) |  no  |  |
 | id | string |  yes  |  |

---


 
 
 #### [AffiliateStoreIdMapping](#AffiliateStoreIdMapping)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | marketplace_store_id | string |  yes  |  |
 | store_id | number |  yes  |  |

---


 
 
 #### [OrderConfig](#OrderConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bag_end_state | string |  no  |  |
 | affiliate | [Affiliate](#Affiliate) |  yes  |  |
 | create_user | boolean |  no  |  |
 | affiliate_store_id_mapping | [[AffiliateStoreIdMapping](#AffiliateStoreIdMapping)] |  yes  |  |
 | store_lookup | string |  no  |  |
 | article_lookup | string |  no  |  |

---


 
 
 #### [OrderUser](#OrderUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | phone | number |  yes  |  |
 | last_name | string |  yes  |  |
 | state | string |  yes  |  |
 | address1 | string |  no  |  |
 | mobile | number |  yes  |  |
 | address2 | string |  no  |  |
 | city | string |  yes  |  |
 | first_name | string |  yes  |  |
 | country | string |  yes  |  |
 | email | string |  yes  |  |
 | pincode | string |  yes  |  |

---


 
 
 #### [OrderPriority](#OrderPriority)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_priority_code | string |  no  |  |
 | fulfilment_priority_text | string |  no  |  |
 | fulfilment_priority | number |  no  |  |

---


 
 
 #### [MarketPlacePdf](#MarketPlacePdf)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | invoice | string |  no  |  |
 | label | string |  no  |  |

---


 
 
 #### [AffiliateBag](#AffiliateBag)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | price_marked | number |  yes  |  |
 | identifier | string |  yes  |  |
 | amount_paid | number |  yes  |  |
 | item_size | string |  yes  |  |
 | transfer_price | number |  yes  |  |
 | delivery_charge | number |  yes  |  |
 | pdf_links | [MarketPlacePdf](#MarketPlacePdf) |  no  |  |
 | discount | number |  yes  |  |
 | _id | string |  yes  |  |
 | company_id | number |  yes  |  |
 | quantity | number |  yes  |  |
 | seller_identifier | string |  yes  |  |
 | affiliate_store_id | string |  yes  |  |
 | modified_on | string |  yes  |  |
 | fynd_store_id | string |  yes  |  |
 | store_id | number |  yes  |  |
 | hsn_code_id | string |  yes  |  |
 | price_effective | number |  yes  |  |
 | item_id | number |  yes  |  |
 | affiliate_meta | string |  yes  |  |
 | avl_qty | number |  yes  |  |
 | unit_price | number |  yes  |  |
 | sku | string |  yes  |  |

---


 
 
 #### [ArticleDetails](#ArticleDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | quantity | number |  yes  |  |
 | attributes | string |  yes  |  |
 | dimension | string |  yes  |  |
 | category | string |  yes  |  |
 | _id | string |  yes  |  |
 | brand_id | number |  yes  |  |
 | weight | string |  yes  |  |

---


 
 
 #### [ShipmentDetails](#ShipmentDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[ArticleDetails](#ArticleDetails)] |  yes  |  |
 | box_type | string |  no  |  |
 | dp_id | number |  no  |  |
 | meta | string |  no  |  |
 | shipments | number |  yes  |  |
 | fulfillment_id | number |  yes  |  |
 | affiliate_shipment_id | string |  yes  |  |

---


 
 
 #### [LocationDetails](#LocationDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fulfillment_id | number |  yes  |  |
 | articles | [[ArticleDetails](#ArticleDetails)] |  yes  |  |
 | fulfillment_type | string |  yes  |  |

---


 
 
 #### [ShipmentConfig](#ShipmentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_mode | string |  yes  |  |
 | action | string |  yes  |  |
 | journey | string |  yes  |  |
 | identifier | string |  yes  |  |
 | source | string |  yes  |  |
 | shipment | [[ShipmentDetails](#ShipmentDetails)] |  yes  |  |
 | to_pincode | string |  yes  |  |
 | location_details | [LocationDetails](#LocationDetails) |  no  |  |

---


 
 
 #### [ShipmentData](#ShipmentData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_data | [ShipmentConfig](#ShipmentConfig) |  yes  |  |

---


 
 
 #### [UserData](#UserData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | billing_user | [OrderUser](#OrderUser) |  no  |  |
 | shipping_user | [OrderUser](#OrderUser) |  no  |  |

---


 
 
 #### [OrderInfo](#OrderInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_mode | string |  yes  |  |
 | billing_address | [OrderUser](#OrderUser) |  yes  |  |
 | payment | string |  no  |  |
 | discount | number |  yes  |  |
 | cod_charges | number |  yes  |  |
 | shipping_address | [OrderUser](#OrderUser) |  yes  |  |
 | delivery_charges | number |  yes  |  |
 | affiliate_order_id | string |  no  |  |
 | coupon | string |  no  |  |
 | items | string |  yes  |  |
 | order_value | number |  yes  |  |
 | order_priority | [OrderPriority](#OrderPriority) |  no  |  |
 | bags | [[AffiliateBag](#AffiliateBag)] |  yes  |  |
 | shipment | [ShipmentData](#ShipmentData) |  no  |  |
 | user | [UserData](#UserData) |  yes  |  |

---


 
 
 #### [CreateOrderPayload](#CreateOrderPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_id | string |  yes  |  |
 | order_config | [OrderConfig](#OrderConfig) |  yes  |  |
 | order_info | [OrderInfo](#OrderInfo) |  yes  |  |

---


 
 
 #### [CreateOrderResponse](#CreateOrderResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_order_id | string |  yes  |  |

---


 
 
 #### [ActionInfo](#ActionInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  yes  |  |
 | description | string |  yes  |  |
 | display_text | string |  yes  |  |
 | id | number |  yes  |  |

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
 | l3_detail | string |  no  |  |
 | ticket_url | string |  no  |  |
 | l2_detail | string |  no  |  |
 | message | string |  yes  |  |
 | type | string |  yes  |  |
 | ticket_id | string |  no  |  |
 | bag_id | number |  no  |  |
 | l1_detail | string |  no  |  |
 | user | string |  yes  |  |

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
 | payment_mode | string |  yes  |  |
 | customer_name | string |  yes  |  |
 | country_code | string |  yes  |  |
 | order_id | string |  yes  |  |
 | message | string |  yes  |  |
 | shipment_id | number |  yes  |  |
 | amount_paid | number |  yes  |  |
 | brand_name | string |  yes  |  |
 | phone_number | number |  yes  |  |

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
 | state_manager_used | string |  no  |  |
 | kafka_emission_status | number |  no  |  |

---


 
 
 #### [ShipmentDetail](#ShipmentDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |
 | id | number |  yes  |  |
 | meta | [Meta](#Meta) |  yes  |  |
 | shipment_id | string |  no  |  |
 | bag_list | [number] |  no  |  |
 | remarks | string |  no  |  |

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
 | success | string |  yes  |  |
 | result | [[OrderStatusData](#OrderStatusData)] |  no  |  |

---


 
 
 #### [ManualAssignDPToShipment](#ManualAssignDPToShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_ids | [string] |  no  |  |
 | qc_required | string |  yes  |  |
 | order_type | string |  yes  |  |
 | dp_id | number |  yes  |  |

---


 
 
 #### [ManualAssignDPToShipmentResponse](#ManualAssignDPToShipmentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | string |  yes  |  |
 | errors | [string] |  no  |  |

---


 
 
 #### [Tax](#Tax)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tax_exempt | boolean |  yes  |  |
 | breakup | [string] |  yes  |  |
 | name | string |  yes  |  |
 | amount | string |  yes  |  |

---


 
 
 #### [Charge](#Charge)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  yes  |  |
 | tax | [Tax](#Tax) |  yes  |  |
 | type | string |  yes  |  |
 | name | string |  yes  |  |
 | code | string |  no  |  |

---


 
 
 #### [ShippingInfo](#ShippingInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipping_type | string |  no  |  |
 | address1 | string |  yes  |  |
 | alternate_mobile_number | string |  no  |  |
 | first_name | string |  yes  |  |
 | primary_mobile_number | string |  yes  |  |
 | country | string |  yes  |  |
 | middle_name | string |  no  |  |
 | gender | string |  no  |  |
 | floor_no | string |  no  |  |
 | city | string |  yes  |  |
 | address_type | string |  no  |  |
 | pincode | string |  yes  |  |
 | last_name | string |  no  |  |
 | landmark | string |  no  |  |
 | state_code | string |  yes  |  |
 | customer_code | string |  no  |  |
 | state | string |  yes  |  |
 | title | string |  no  |  |
 | address2 | string |  no  |  |
 | alternate_email | string |  no  |  |
 | external_customer_code | string |  no  |  |
 | house_no | string |  no  |  |
 | primary_email | string |  yes  |  |
 | country_code | string |  yes  |  |
 | slot | [string] |  no  |  |
 | geo_location | string |  no  |  |

---


 
 
 #### [TaxInfo](#TaxInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | b2b_gstin_number | string |  no  |  |
 | gstin | string |  no  |  |

---


 
 
 #### [ProcessingDates](#ProcessingDates)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | confirm_by_date | string |  no  |  |
 | dp_pickup_slot | string |  no  |  |
 | dispatch_by_date | string |  no  |  |
 | dispatch_after_date | string |  no  |  |
 | pack_by_date | string |  no  |  |
 | customer_pickup_slot | string |  no  |  |

---


 
 
 #### [LineItem](#LineItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | charges | [[Charge](#Charge)] |  yes  |  |
 | quantity | number |  no  |  |
 | seller_identifier | string |  yes  |  |
 | custom_messasge | string |  no  |  |
 | external_line_id | string |  no  |  |
 | meta | string |  no  |  |

---


 
 
 #### [Shipment](#Shipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | location_id | number |  yes  |  |
 | processing_dates | [ProcessingDates](#ProcessingDates) |  no  |  |
 | external_shipment_id | number |  no  |  |
 | meta | string |  no  |  |
 | priority | number |  no  |  |
 | line_items | [[LineItem](#LineItem)] |  yes  |  |

---


 
 
 #### [BillingInfo](#BillingInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string |  yes  |  |
 | alternate_mobile_number | string |  no  |  |
 | first_name | string |  yes  |  |
 | primary_mobile_number | string |  yes  |  |
 | country | string |  yes  |  |
 | middle_name | string |  no  |  |
 | gender | string |  no  |  |
 | floor_no | string |  yes  |  |
 | city | string |  yes  |  |
 | pincode | string |  yes  |  |
 | last_name | string |  no  |  |
 | state_code | string |  yes  |  |
 | customer_code | string |  no  |  |
 | state | string |  yes  |  |
 | title | string |  no  |  |
 | address2 | string |  no  |  |
 | alternate_email | string |  no  |  |
 | external_customer_code | string |  no  |  |
 | house_no | string |  yes  |  |
 | primary_email | string |  yes  |  |
 | country_code | string |  yes  |  |

---


 
 
 #### [PaymentMethod](#PaymentMethod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | transaction_data | string |  no  |  |
 | amount | number |  yes  |  |
 | collect_by | string |  yes  |  |
 | refund_by | string |  yes  |  |
 | mode | string |  yes  |  |
 | meta | string |  no  |  |
 | name | string |  yes  |  |

---


 
 
 #### [PaymentInfo](#PaymentInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | primary_mode | string |  yes  |  |
 | payment_methods | [[PaymentMethod](#PaymentMethod)] |  no  |  |

---


 
 
 #### [CreateOrderAPI](#CreateOrderAPI)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | charges | [[Charge](#Charge)] |  yes  |  |
 | shipping_info | [ShippingInfo](#ShippingInfo) |  yes  |  |
 | external_order_id | string |  no  |  |
 | external_creation_date | string |  no  |  |
 | tax_info | [TaxInfo](#TaxInfo) |  no  |  |
 | application_id | string |  yes  |  |
 | currency_info | string |  yes  |  |
 | meta | string |  no  |  |
 | shipments | [[Shipment](#Shipment)] |  yes  |  |
 | billing_info | [BillingInfo](#BillingInfo) |  yes  |  |
 | payment_info | [PaymentInfo](#PaymentInfo) |  yes  |  |

---


 
 
 #### [CreateOrderErrorReponse](#CreateOrderErrorReponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | exception | string |  no  |  |
 | info | any |  no  |  |
 | status | number |  yes  |  |
 | message | string |  yes  |  |
 | meta | string |  no  |  |
 | request_id | string |  no  |  |
 | code | string |  no  |  |
 | stack_trace | string |  no  |  |

---


 
 
 #### [FyndOrderIdList](#FyndOrderIdList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_order_id | [string] |  no  |  |

---


 
 
 #### [OrderStatus](#OrderStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end_date | string |  yes  |  |
 | mobile | number |  yes  |  |
 | order_details | [[FyndOrderIdList](#FyndOrderIdList)] |  no  |  |
 | start_date | string |  yes  |  |

---




