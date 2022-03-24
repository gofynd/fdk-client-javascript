



##### [Back to Platform docs](./README.md)

## Serviceability Methods
Logistics Configuration API's allows you to configure zone, application logistics and many more useful features. 
* [getApplicationServiceability](#getapplicationserviceability)
* [getEntityRegionView](#getentityregionview)
* [getListView](#getlistview)
* [getCompanyStoreView](#getcompanystoreview)
* [getZoneDataView](#getzonedataview)
* [updateZoneControllerView](#updatezonecontrollerview)
* [upsertZoneControllerView](#upsertzonecontrollerview)
* [upsertZoneControllerView](#upsertzonecontrollerview)



## Methods with example and description


### getApplicationServiceability
Zone configuration of application.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").serviceability.getApplicationServiceability();

// Async/Await
const data = await client.application("<APPLICATION_ID>").serviceability.getApplicationServiceability();
```






This API returns serviceability config of the application.

*Returned Response:*




[ApplicationServiceabilityConfigResponse](#ApplicationServiceabilityConfigResponse)

Response Data




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "error": {
    "type": null,
    "value": null,
    "message": null
  },
  "success": true,
  "data": {
    "channel_id": "5d656121a81320c2e6ee2a72",
    "channel_type": "application",
    "serviceability_type": "all"
  }
}
```
</details>









---


### getEntityRegionView
Get country and state list



```javascript
// Promise
const promise = client.serviceability.getEntityRegionView({  body : value });

// Async/Await
const data = await client.serviceability.getEntityRegionView({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [EntityRegionView_Request](#EntityRegionView_Request) | yes | Request body |


This API returns response for Entity Region View.

*Returned Response:*




[EntityRegionView_Response](#EntityRegionView_Response)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getListView
Zone List of application.



```javascript
// Promise
const promise = client.serviceability.getListView();

// Async/Await
const data = await client.serviceability.getListView();
```






This API returns Zone List View of the application.

*Returned Response:*




[ListViewResponse](#ListViewResponse)

Zone List of application.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getCompanyStoreView
Company Store View of application.



```javascript
// Promise
const promise = client.serviceability.getCompanyStoreView();

// Async/Await
const data = await client.serviceability.getCompanyStoreView();
```






This API returns Company Store View of the application.

*Returned Response:*




[CompanyStoreView_Response](#CompanyStoreView_Response)

Get Company Store View Data




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getZoneDataView
Zone Data View of application.



```javascript
// Promise
const promise = client.serviceability.getZoneDataView({  zoneId : value });

// Async/Await
const data = await client.serviceability.getZoneDataView({  zoneId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| zoneId | string | yes | A `zone_id` is a unique identifier for a particular zone. |  



This API returns Zone Data View of the application.

*Returned Response:*




[GetSingleZoneDataViewResponse](#GetSingleZoneDataViewResponse)

Get Application Zone Data




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateZoneControllerView
Updation of zone collections in database.



```javascript
// Promise
const promise = client.serviceability.updateZoneControllerView({  zoneId : value,
 body : value });

// Async/Await
const data = await client.serviceability.updateZoneControllerView({  zoneId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| zoneId | string | yes | A `zone_id` is a unique identifier for a particular zone. |  
| body | [ZoneRequest](#ZoneRequest) | yes | Request body |


This API returns response of updation of zone in mongo database.

*Returned Response:*




[ZoneSuccessResponse](#ZoneSuccessResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### upsertZoneControllerView
Insertion of zone in database.



```javascript
// Promise
const promise = client.serviceability.upsertZoneControllerView({  zoneId : value,
 body : value });

// Async/Await
const data = await client.serviceability.upsertZoneControllerView({  zoneId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| zoneId | string | yes | A `zone_id` is a unique identifier for a particular zone. |  
| body | [ZoneRequest](#ZoneRequest) | yes | Request body |


This API returns response of insertation of zone in mongo database.<br>Correction- `zone_id` in the path must be removed.<br> path is `/service/platform/logistics-internal/v1.0/company/{company_id}/zone/`

*Returned Response:*




[ZoneResponse](#ZoneResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### upsertZoneControllerView
GET zone from the Pincode.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").serviceability.upsertZoneControllerView({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").serviceability.upsertZoneControllerView({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GetZoneFromPincodeViewRequest](#GetZoneFromPincodeViewRequest) | yes | Request body |


This API returns zone from the Pincode View.

*Returned Response:*




[GetZoneFromPincodeViewResponse](#GetZoneFromPincodeViewResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas

 
 
 #### [ServiceabilityrErrorResponse](#ServiceabilityrErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | message | string |  yes  |  |
 | value | string |  yes  |  |

---


 
 
 #### [ApplicationServiceabilityConfig](#ApplicationServiceabilityConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_type | string |  yes  |  |
 | serviceability_type | string |  yes  |  |
 | channel_id | string |  yes  |  |

---


 
 
 #### [ApplicationServiceabilityConfigResponse](#ApplicationServiceabilityConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | [ServiceabilityrErrorResponse](#ServiceabilityrErrorResponse) |  no  |  |
 | data | [ApplicationServiceabilityConfig](#ApplicationServiceabilityConfig) |  no  |  |
 | success | boolean |  yes  |  |

---


 
 
 #### [EntityRegionView_Request](#EntityRegionView_Request)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sub_type | [string] |  yes  |  |
 | parent_id | [string] |  no  |  |

---


 
 
 #### [EntityRegionView_Error](#EntityRegionView_Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | message | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [EntityRegionView_Items](#EntityRegionView_Items)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sub_type | string |  yes  |  |
 | uid | string |  yes  |  |
 | name | string |  yes  |  |

---


 
 
 #### [EntityRegionView_page](#EntityRegionView_page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_total | number |  yes  |  |
 | has_next | boolean |  yes  |  |
 | size | number |  yes  |  |
 | type | string |  yes  |  |
 | current | number |  yes  |  |

---


 
 
 #### [EntityRegionView_Response](#EntityRegionView_Response)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | [EntityRegionView_Error](#EntityRegionView_Error) |  yes  |  |
 | data | [[EntityRegionView_Items](#EntityRegionView_Items)] |  yes  |  |
 | page | [EntityRegionView_page](#EntityRegionView_page) |  yes  |  |
 | success | boolean |  yes  |  |

---


 
 
 #### [ListViewProduct](#ListViewProduct)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | count | number |  yes  |  |

---


 
 
 #### [ListViewChannels](#ListViewChannels)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_type | string |  yes  |  |
 | channel_id | string |  yes  |  |

---


 
 
 #### [ListViewItems](#ListViewItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | pincodes_count | number |  yes  |  |
 | product | [ListViewProduct](#ListViewProduct) |  yes  |  |
 | channels | [ListViewChannels](#ListViewChannels) |  yes  |  |
 | company_id | number |  yes  |  |
 | is_active | boolean |  yes  |  |
 | slug | string |  yes  |  |
 | stores_count | number |  yes  |  |
 | name | string |  yes  |  |

---


 
 
 #### [ListViewSummary](#ListViewSummary)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_active_zones | number |  yes  |  |
 | total_pincodes_served | number |  yes  |  |
 | total_zones | number |  yes  |  |

---


 
 
 #### [ZoneDataItem](#ZoneDataItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_total | number |  yes  |  |
 | has_next | boolean |  yes  |  |
 | size | number |  yes  |  |
 | type | string |  yes  |  |
 | current | number |  yes  |  |

---


 
 
 #### [ListViewResponse](#ListViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ListViewItems](#ListViewItems)] |  yes  |  |
 | summary | [[ListViewSummary](#ListViewSummary)] |  yes  |  |
 | page | [[ZoneDataItem](#ZoneDataItem)] |  yes  |  |

---


 
 
 #### [CompanyStoreView_PageItems](#CompanyStoreView_PageItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_total | number |  yes  |  |
 | has_next | boolean |  yes  |  |
 | size | number |  yes  |  |
 | type | string |  yes  |  |
 | current | number |  yes  |  |

---


 
 
 #### [CompanyStoreView_Response](#CompanyStoreView_Response)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [string] |  no  |  |
 | page | [[CompanyStoreView_PageItems](#CompanyStoreView_PageItems)] |  yes  |  |

---


 
 
 #### [GetZoneDataViewProduct](#GetZoneDataViewProduct)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | count | number |  yes  |  |

---


 
 
 #### [GetZoneDataViewChannels](#GetZoneDataViewChannels)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_type | string |  yes  |  |
 | channel_id | string |  yes  |  |

---


 
 
 #### [GetZoneDataViewItems](#GetZoneDataViewItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pincodes_count | number |  yes  |  |
 | product | [GetZoneDataViewProduct](#GetZoneDataViewProduct) |  yes  |  |
 | channels | [GetZoneDataViewChannels](#GetZoneDataViewChannels) |  yes  |  |
 | company_id | number |  yes  |  |
 | is_active | boolean |  yes  |  |
 | zone_id | string |  yes  |  |
 | slug | string |  yes  |  |
 | stores_count | number |  yes  |  |
 | name | string |  yes  |  |

---


 
 
 #### [GetSingleZoneDataViewResponse](#GetSingleZoneDataViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [GetZoneDataViewItems](#GetZoneDataViewItems) |  yes  |  |

---


 
 
 #### [ZoneRequest](#ZoneRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channels | [string] |  yes  |  |
 | data | string |  yes  |  |
 | identifier | string |  yes  |  |

---


 
 
 #### [ZoneSuccessResponse](#ZoneSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status_code | number |  yes  |  |
 | success | boolean |  yes  |  |

---


 
 
 #### [ZoneResponse](#ZoneResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status_code | number |  yes  |  |
 | zone_id | string |  yes  |  |
 | success | boolean |  yes  |  |

---


 
 
 #### [GetZoneFromPincodeViewRequest](#GetZoneFromPincodeViewRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string |  yes  |  |
 | pincode | string |  yes  |  |

---


 
 
 #### [GetZoneFromPincodeViewResponse](#GetZoneFromPincodeViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | serviceability_type | string |  yes  |  |
 | zones | [string] |  yes  |  |

---




