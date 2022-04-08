



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
* [getZoneFromPincode](#getzonefrompincode)



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
const promise = client.serviceability.getListView({  pageNumber : value,
 pageSize : value,
 name : value,
 isActive : value,
 channelIds : value });

// Async/Await
const data = await client.serviceability.getListView({  pageNumber : value,
 pageSize : value,
 name : value,
 isActive : value,
 channelIds : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNumber | number | no | index of the item to start returning with |    
| pageSize | number | no | determines the items to be displayed in a page |    
| name | string | no | Name of particular zone in the seller account |    
| isActive | boolean | no | status of  zone whether active or inactive |    
| channelIds | string | no | zones associated with the given channel ids' |  



This API returns Zone List View of the application.

*Returned Response:*




[ListViewResponse](#ListViewResponse)

Zone List of application in descending order of their last modified date.




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
| body | [ZoneUpdateRequest](#ZoneUpdateRequest) | yes | Request body |


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
const promise = client.serviceability.upsertZoneControllerView({  body : value });

// Async/Await
const data = await client.serviceability.upsertZoneControllerView({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ZoneRequest](#ZoneRequest) | yes | Request body |


This API returns response of insertion of zone in mongo database.<br>Correction- `zone_id` in the path must be removed.<br> path is `/service/platform/logistics-internal/v1.0/company/{company_id}/zone/`

*Returned Response:*




[ZoneResponse](#ZoneResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getZoneFromPincode
GET zone from the Pincode.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").serviceability.getZoneFromPincode({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").serviceability.getZoneFromPincode({  body : value });
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

 
 
 #### [ApplicationServiceabilityConfig](#ApplicationServiceabilityConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_id | string |  yes  |  |
 | serviceability_type | string |  yes  |  |
 | channel_type | string |  yes  |  |

---


 
 
 #### [ServiceabilityrErrorResponse](#ServiceabilityrErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  |  |
 | value | string |  yes  |  |
 | type | string |  yes  |  |

---


 
 
 #### [ApplicationServiceabilityConfigResponse](#ApplicationServiceabilityConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | data | [ApplicationServiceabilityConfig](#ApplicationServiceabilityConfig) |  no  |  |
 | error | [ServiceabilityrErrorResponse](#ServiceabilityrErrorResponse) |  no  |  |

---


 
 
 #### [EntityRegionView_Request](#EntityRegionView_Request)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sub_type | [string] |  yes  |  |
 | parent_id | [string] |  no  |  |

---


 
 
 #### [EntityRegionView_Items](#EntityRegionView_Items)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | sub_type | string |  yes  |  |
 | uid | string |  yes  |  |

---


 
 
 #### [EntityRegionView_Error](#EntityRegionView_Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | value | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [EntityRegionView_page](#EntityRegionView_page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | has_next | boolean |  yes  |  |
 | type | string |  yes  |  |
 | size | number |  yes  |  |
 | item_total | number |  yes  |  |
 | current | number |  yes  |  |

---


 
 
 #### [EntityRegionView_Response](#EntityRegionView_Response)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | data | [[EntityRegionView_Items](#EntityRegionView_Items)] |  yes  |  |
 | error | [EntityRegionView_Error](#EntityRegionView_Error) |  yes  |  |
 | page | [EntityRegionView_page](#EntityRegionView_page) |  yes  |  |

---


 
 
 #### [ListViewChannels](#ListViewChannels)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_id | string |  yes  |  |
 | channel_type | string |  yes  |  |

---


 
 
 #### [ListViewProduct](#ListViewProduct)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | count | number |  yes  |  |

---


 
 
 #### [ListViewItems](#ListViewItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number |  yes  |  |
 | slug | string |  yes  |  |
 | name | string |  yes  |  |
 | channels | [ListViewChannels](#ListViewChannels) |  yes  |  |
 | zone_id | string |  yes  |  |
 | pincodes_count | number |  yes  |  |
 | product | [ListViewProduct](#ListViewProduct) |  yes  |  |
 | is_active | boolean |  yes  |  |
 | stores_count | number |  yes  |  |

---


 
 
 #### [ZoneDataItem](#ZoneDataItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | has_next | boolean |  yes  |  |
 | size | number |  yes  |  |
 | item_total | number |  yes  |  |
 | type | string |  yes  |  |
 | current | number |  yes  |  |

---


 
 
 #### [ListViewSummary](#ListViewSummary)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_zones | number |  yes  |  |
 | total_pincodes_served | number |  yes  |  |
 | total_active_zones | number |  yes  |  |

---


 
 
 #### [ListViewResponse](#ListViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ListViewItems](#ListViewItems)] |  yes  |  |
 | page | [[ZoneDataItem](#ZoneDataItem)] |  yes  |  |
 | summary | [[ListViewSummary](#ListViewSummary)] |  yes  |  |

---


 
 
 #### [CompanyStoreView_PageItems](#CompanyStoreView_PageItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | has_next | boolean |  yes  |  |
 | type | string |  yes  |  |
 | size | number |  yes  |  |
 | item_total | number |  yes  |  |
 | current | number |  yes  |  |

---


 
 
 #### [CompanyStoreView_Response](#CompanyStoreView_Response)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [string] |  no  |  |
 | page | [[CompanyStoreView_PageItems](#CompanyStoreView_PageItems)] |  yes  |  |

---


 
 
 #### [ZoneMappingType](#ZoneMappingType)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string |  yes  |  |
 | state | [string] |  no  |  |
 | pincode | [string] |  no  |  |

---


 
 
 #### [GetZoneDataViewChannels](#GetZoneDataViewChannels)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_id | string |  yes  |  |
 | channel_type | string |  yes  |  |

---


 
 
 #### [ZoneProductTypes](#ZoneProductTypes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tags | [string] |  yes  |  |
 | type | string |  yes  |  |

---


 
 
 #### [GetZoneDataViewItems](#GetZoneDataViewItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number |  yes  |  |
 | slug | string |  yes  |  |
 | region_type | string |  yes  |  |
 | mapping | [[ZoneMappingType](#ZoneMappingType)] |  yes  |  |
 | name | string |  yes  |  |
 | channels | [[GetZoneDataViewChannels](#GetZoneDataViewChannels)] |  yes  |  |
 | zone_id | string |  yes  |  |
 | pincodes_count | number |  yes  |  |
 | product | [ZoneProductTypes](#ZoneProductTypes) |  yes  |  |
 | is_active | boolean |  yes  |  |
 | stores_count | number |  yes  |  |
 | store_ids | [number] |  yes  |  |

---


 
 
 #### [GetSingleZoneDataViewResponse](#GetSingleZoneDataViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [GetZoneDataViewItems](#GetZoneDataViewItems) |  yes  |  |

---


 
 
 #### [UpdateZoneData](#UpdateZoneData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number |  yes  |  |
 | slug | string |  yes  |  |
 | region_type | string |  yes  |  |
 | mapping | [[ZoneMappingType](#ZoneMappingType)] |  yes  |  |
 | name | string |  yes  |  |
 | channels | [[GetZoneDataViewChannels](#GetZoneDataViewChannels)] |  yes  |  |
 | zone_id | string |  yes  |  |
 | product | [ZoneProductTypes](#ZoneProductTypes) |  yes  |  |
 | is_active | boolean |  yes  |  |
 | store_ids | [number] |  yes  |  |

---


 
 
 #### [ZoneUpdateRequest](#ZoneUpdateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [UpdateZoneData](#UpdateZoneData) |  yes  |  |
 | identifier | string |  yes  |  |

---


 
 
 #### [ZoneSuccessResponse](#ZoneSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | status_code | number |  yes  |  |

---


 
 
 #### [CreateZoneData](#CreateZoneData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number |  yes  |  |
 | slug | string |  yes  |  |
 | region_type | string |  yes  |  |
 | mapping | [[ZoneMappingType](#ZoneMappingType)] |  yes  |  |
 | name | string |  yes  |  |
 | channels | [[GetZoneDataViewChannels](#GetZoneDataViewChannels)] |  yes  |  |
 | product | [ZoneProductTypes](#ZoneProductTypes) |  yes  |  |
 | is_active | boolean |  yes  |  |
 | store_ids | [number] |  yes  |  |

---


 
 
 #### [ZoneRequest](#ZoneRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [CreateZoneData](#CreateZoneData) |  yes  |  |
 | identifier | string |  yes  |  |

---


 
 
 #### [ZoneResponse](#ZoneResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | zone_id | string |  yes  |  |
 | status_code | number |  yes  |  |

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




