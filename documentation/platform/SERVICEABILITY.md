




##### [Back to Platform docs](./README.md)

## Serviceability Methods
Logistics Configuration API's allows you to configure zone, application logistics and many more useful features. 

* [postApplicationServiceability](#postapplicationserviceability)
* [getApplicationServiceability](#getapplicationserviceability)
* [getEntityRegionView](#getentityregionview)
* [getListView](#getlistview)
* [getCompanyStoreView](#getcompanystoreview)
* [getZoneDataView](#getzonedataview)
* [updateZoneControllerView](#updatezonecontrollerview)
* [upsertZoneControllerView](#upsertzonecontrollerview)
* [getZoneFromPincodeView](#getzonefrompincodeview)
* [getZonesFromApplicationIdView](#getzonesfromapplicationidview)
* [getZoneListView](#getzonelistview)
* [updatePincodeMopView](#updatepincodemopview)
* [updatePincodeBulkView](#updatepincodebulkview)
* [updatePincodeCoDListing](#updatepincodecodlisting)
* [updatePincodeAuditHistory](#updatepincodeaudithistory)



## Methods with example and description




### postApplicationServiceability
Zone configuration of application.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").serviceability.postApplicationServiceability({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").serviceability.postApplicationServiceability({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ApplicationServiceabilityConfig](#ApplicationServiceabilityConfig) | yes | Request body |


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
| body | [EntityRegionViewRequest](#EntityRegionViewRequest) | yes | Request body |


This API returns response for Entity Region View.

*Returned Response:*




[EntityRegionViewResponse](#EntityRegionViewResponse)

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
 pageNo : value,
 pageSize : value,
 name : value,
 isActive : value,
 channelIds : value,
 q : value,
 zoneId : value });

// Async/Await
const data = await client.serviceability.getListView({  pageNumber : value,
 pageNo : value,
 pageSize : value,
 name : value,
 isActive : value,
 channelIds : value,
 q : value,
 zoneId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNumber | number | no | index of the item to start returning with |    
| pageNo | number | no | index of the item to start returning with |    
| pageSize | number | no | determines the items to be displayed in a page |    
| name | string | no | Name of particular zone in the seller account |    
| isActive | boolean | no | status of  zone whether active or inactive |    
| channelIds | string | no | zones associated with the given channel ids' |    
| q | string | no | search with name as a free text |    
| zoneId | Array<string> | no | list of zones to query for |  



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


### getZoneFromPincodeView
GET zone from the Pincode.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").serviceability.getZoneFromPincodeView({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").serviceability.getZoneFromPincodeView({  body : value });
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


### getZonesFromApplicationIdView
GET zones from the application_id.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").serviceability.getZonesFromApplicationIdView({  pageNo : value,
 pageSize : value,
 zoneId : value,
 q : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").serviceability.getZonesFromApplicationIdView({  pageNo : value,
 pageSize : value,
 zoneId : value,
 q : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | index of the item to start returning with |    
| pageSize | number | no | determines the items to be displayed in a page |    
| zoneId | Array<string> | no | list of zones to query for |    
| q | string | no | search with name as a free text |  



This API returns zones from the application_id View.

*Returned Response:*




[GetZoneFromApplicationIdViewResponse](#GetZoneFromApplicationIdViewResponse)

List of zones for the given application_id




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getZoneListView
Zone List of application.



```javascript
// Promise
const promise = client.serviceability.getZoneListView({  pageNumber : value,
 pageNo : value,
 pageSize : value,
 name : value,
 isActive : value,
 channelIds : value,
 q : value,
 zoneId : value });

// Async/Await
const data = await client.serviceability.getZoneListView({  pageNumber : value,
 pageNo : value,
 pageSize : value,
 name : value,
 isActive : value,
 channelIds : value,
 q : value,
 zoneId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNumber | number | no | index of the item to start returning with |    
| pageNo | number | no | index of the item to start returning with |    
| pageSize | number | no | determines the items to be displayed in a page |    
| name | string | no | Name of particular zone in the seller account |    
| isActive | boolean | no | status of  zone whether active or inactive |    
| channelIds | string | no | zones associated with the given channel ids' |    
| q | string | no | search with name as a free text |    
| zoneId | Array<string> | no | list of zones to query for |  



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


### updatePincodeMopView
PincodeView update of MOP.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").serviceability.updatePincodeMopView({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").serviceability.updatePincodeMopView({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PincodeMopData](#PincodeMopData) | yes | Request body |


This API updates Pincode method of payment.

*Returned Response:*




[PincodeMOPresponse](#PincodeMOPresponse)

Response Data




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updatePincodeBulkView
Bulk Update of pincode in the application.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").serviceability.updatePincodeBulkView({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").serviceability.updatePincodeBulkView({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PincodeMopBulkData](#PincodeMopBulkData) | yes | Request body |


This API constructs bulk write operations to update the MOP data for each pincode in the payload.

*Returned Response:*




[PincodeBulkViewResponse](#PincodeBulkViewResponse)

Response Data




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "batch_id": "string",
  "s3_url": "string"
}
```
</details>









---


### updatePincodeCoDListing
Pincode count view of application.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").serviceability.updatePincodeCoDListing({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").serviceability.updatePincodeCoDListing({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PincodeCodStatusListingRequest](#PincodeCodStatusListingRequest) | yes | Request body |


This API returns count of active pincode.

*Returned Response:*




[PincodeCodStatusListingResponse](#PincodeCodStatusListingResponse)

Response Data




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updatePincodeAuditHistory
Auditlog configuration of application.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").serviceability.updatePincodeAuditHistory({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").serviceability.updatePincodeAuditHistory({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PincodeMopUpdateAuditHistoryRequest](#PincodeMopUpdateAuditHistoryRequest) | yes | Request body |


This API returns Audit logs of Pincode.

*Returned Response:*




[PincodeMopUpdateAuditHistoryResponseData](#PincodeMopUpdateAuditHistoryResponseData)

Response Data




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
 | serviceability_type | string |  yes  |  |

---


 
 
 #### [ServiceabilityErrorResponse](#ServiceabilityErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | value | string |  yes  |  |
 | message | string |  yes  |  |

---


 
 
 #### [ApplicationServiceabilityResponse](#ApplicationServiceabilityResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_type | string |  yes  |  |
 | channel_id | string |  yes  |  |
 | serviceability_type | string |  yes  |  |

---


 
 
 #### [ApplicationServiceabilityConfigResponse](#ApplicationServiceabilityConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | [ServiceabilityErrorResponse](#ServiceabilityErrorResponse) |  no  |  |
 | success | boolean |  yes  |  |
 | data | [ApplicationServiceabilityResponse](#ApplicationServiceabilityResponse) |  no  |  |

---


 
 
 #### [EntityRegionViewRequest](#EntityRegionViewRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sub_type | [string] |  yes  |  |
 | parent_id | [string] |  no  |  |

---


 
 
 #### [EntityRegionViewPage](#EntityRegionViewPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | size | number |  yes  |  |
 | current | number |  yes  |  |
 | item_total | number |  yes  |  |
 | has_next | boolean |  yes  |  |

---


 
 
 #### [EntityRegionViewError](#EntityRegionViewError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | value | string |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [EntityRegionViewItems](#EntityRegionViewItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | string |  yes  |  |
 | sub_type | string |  yes  |  |
 | name | string |  yes  |  |

---


 
 
 #### [EntityRegionViewResponse](#EntityRegionViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [EntityRegionViewPage](#EntityRegionViewPage) |  yes  |  |
 | error | [EntityRegionViewError](#EntityRegionViewError) |  yes  |  |
 | success | boolean |  yes  |  |
 | data | [[EntityRegionViewItems](#EntityRegionViewItems)] |  yes  |  |

---


 
 
 #### [ZoneDataItem](#ZoneDataItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | size | number |  yes  |  |
 | current | number |  yes  |  |
 | item_total | number |  yes  |  |
 | has_next | boolean |  yes  |  |
 | type | string |  yes  |  |

---


 
 
 #### [ListViewSummary](#ListViewSummary)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_active_zones | number |  yes  |  |
 | total_zones | number |  yes  |  |
 | total_pincodes_served | number |  yes  |  |

---


 
 
 #### [ListViewChannels](#ListViewChannels)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_type | string |  yes  |  |
 | channel_id | string |  yes  |  |

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
 | slug | string |  yes  |  |
 | channels | [ListViewChannels](#ListViewChannels) |  yes  |  |
 | pincodes_count | number |  yes  |  |
 | product | [ListViewProduct](#ListViewProduct) |  yes  |  |
 | name | string |  yes  |  |
 | stores_count | number |  yes  |  |
 | is_active | boolean |  yes  |  |
 | zone_id | string |  yes  |  |
 | company_id | number |  yes  |  |

---


 
 
 #### [ListViewResponse](#ListViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [[ZoneDataItem](#ZoneDataItem)] |  yes  |  |
 | summary | [[ListViewSummary](#ListViewSummary)] |  yes  |  |
 | items | [[ListViewItems](#ListViewItems)] |  yes  |  |

---


 
 
 #### [CompanyStoreView_PageItems](#CompanyStoreView_PageItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | size | number |  yes  |  |
 | current | number |  yes  |  |
 | item_total | number |  yes  |  |
 | has_next | boolean |  yes  |  |

---


 
 
 #### [CompanyStoreView_Response](#CompanyStoreView_Response)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [[CompanyStoreView_PageItems](#CompanyStoreView_PageItems)] |  yes  |  |
 | items | [string] |  no  |  |

---


 
 
 #### [GetZoneDataViewChannels](#GetZoneDataViewChannels)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_type | string |  yes  |  |
 | channel_id | string |  yes  |  |

---


 
 
 #### [ZoneProductTypes](#ZoneProductTypes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | tags | [string] |  yes  |  |

---


 
 
 #### [ZoneMappingType](#ZoneMappingType)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | state | [string] |  no  |  |
 | pincode | [string] |  no  |  |
 | country | string |  yes  |  |

---


 
 
 #### [GetZoneDataViewItems](#GetZoneDataViewItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | zone_id | string |  yes  |  |
 | name | string |  yes  |  |
 | slug | string |  yes  |  |
 | company_id | number |  yes  |  |
 | is_active | boolean |  yes  |  |
 | channels | [[GetZoneDataViewChannels](#GetZoneDataViewChannels)] |  yes  |  |
 | product | [ZoneProductTypes](#ZoneProductTypes) |  yes  |  |
 | store_ids | [number] |  yes  |  |
 | region_type | string |  yes  |  |
 | mapping | [[ZoneMappingType](#ZoneMappingType)] |  yes  |  |
 | assignment_preference | string |  no  |  |
 | stores_count | number |  yes  |  |
 | pincodes_count | number |  yes  |  |

---


 
 
 #### [GetSingleZoneDataViewResponse](#GetSingleZoneDataViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [GetZoneDataViewItems](#GetZoneDataViewItems) |  yes  |  |

---


 
 
 #### [UpdateZoneData](#UpdateZoneData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | zone_id | string |  yes  |  |
 | name | string |  yes  |  |
 | slug | string |  yes  |  |
 | company_id | number |  yes  |  |
 | is_active | boolean |  yes  |  |
 | channels | [[GetZoneDataViewChannels](#GetZoneDataViewChannels)] |  yes  |  |
 | product | [ZoneProductTypes](#ZoneProductTypes) |  yes  |  |
 | store_ids | [number] |  yes  |  |
 | region_type | string |  yes  |  |
 | mapping | [[ZoneMappingType](#ZoneMappingType)] |  yes  |  |
 | assignment_preference | string |  no  |  |

---


 
 
 #### [ZoneUpdateRequest](#ZoneUpdateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier | string |  yes  |  |
 | data | [UpdateZoneData](#UpdateZoneData) |  yes  |  |

---


 
 
 #### [ZoneSuccessResponse](#ZoneSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status_code | number |  yes  |  |
 | success | boolean |  yes  |  |

---


 
 
 #### [CreateZoneData](#CreateZoneData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | slug | string |  yes  |  |
 | company_id | number |  yes  |  |
 | is_active | boolean |  yes  |  |
 | channels | [[GetZoneDataViewChannels](#GetZoneDataViewChannels)] |  yes  |  |
 | product | [ZoneProductTypes](#ZoneProductTypes) |  yes  |  |
 | store_ids | [number] |  yes  |  |
 | region_type | string |  yes  |  |
 | mapping | [[ZoneMappingType](#ZoneMappingType)] |  yes  |  |
 | assignment_preference | string |  no  |  |

---


 
 
 #### [ZoneRequest](#ZoneRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier | string |  yes  |  |
 | data | [CreateZoneData](#CreateZoneData) |  yes  |  |

---


 
 
 #### [ZoneResponse](#ZoneResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status_code | number |  yes  |  |
 | success | boolean |  yes  |  |
 | zone_id | string |  yes  |  |

---


 
 
 #### [GetZoneFromPincodeViewRequest](#GetZoneFromPincodeViewRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pincode | string |  yes  |  |
 | country | string |  yes  |  |

---


 
 
 #### [GetZoneFromPincodeViewResponse](#GetZoneFromPincodeViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | serviceability_type | string |  yes  |  |
 | zones | [string] |  yes  |  |

---


 
 
 #### [GetZoneFromApplicationIdViewResponse](#GetZoneFromApplicationIdViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [[ZoneDataItem](#ZoneDataItem)] |  yes  |  |
 | items | [[ListViewItems](#ListViewItems)] |  yes  |  |

---


 
 
 #### [PincodeMopData](#PincodeMopData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pincodes | [number] |  yes  |  |
 | country | string |  yes  |  |
 | action | string |  yes  |  |

---


 
 
 #### [PincodeMopUpdateResponse](#PincodeMopUpdateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pincode | number |  yes  |  |
 | channel_id | string |  yes  |  |
 | country | string |  yes  |  |
 | is_active | boolean |  yes  |  |

---


 
 
 #### [PincodeMOPresponse](#PincodeMOPresponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | status_code | number |  yes  |  |
 | batch_id | string |  yes  |  |
 | country | string |  yes  |  |
 | action | string |  yes  |  |
 | pincodes | [number] |  no  |  |
 | updated_pincodes | [[PincodeMopUpdateResponse](#PincodeMopUpdateResponse)] |  no  |  |

---


 
 
 #### [PincodeMopBulkData](#PincodeMopBulkData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | batch_id | string |  yes  |  |
 | s3_url | string |  yes  |  |

---


 
 
 #### [PincodeBulkViewResponse](#PincodeBulkViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | batch_id | string |  yes  |  |
 | s3_url | string |  yes  |  |

---


 
 
 #### [PincodeCodStatusListingRequest](#PincodeCodStatusListingRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string |  no  |  |
 | is_active | boolean |  no  |  |
 | pincode | number |  no  |  |
 | current_page_number | number |  no  |  |
 | page_size | number |  no  |  |

---


 
 
 #### [PincodeCodStatusListingResponse](#PincodeCodStatusListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string |  yes  |  |
 | data | [[PincodeCodStatusListingResponse](#PincodeCodStatusListingResponse)] |  yes  |  |
 | success | boolean |  yes  |  |
 | errors | [[Error](#Error)] |  no  |  |
 | page | [PincodeCodStatusListingPage](#PincodeCodStatusListingPage) |  yes  |  |
 | summary | [PincodeCodStatusListingSummary](#PincodeCodStatusListingSummary) |  yes  |  |

---


 
 
 #### [Error](#Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | value | string |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [PincodeCodStatusListingPage](#PincodeCodStatusListingPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | size | number |  yes  |  |
 | current_page_number | number |  yes  |  |
 | item_total | number |  yes  |  |
 | has_next | boolean |  yes  |  |

---


 
 
 #### [PincodeCodStatusListingSummary](#PincodeCodStatusListingSummary)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_active_pincodes | number |  yes  |  |
 | total_inactive_pincodes | number |  yes  |  |

---


 
 
 #### [PincodeMopUpdateAuditHistoryRequest](#PincodeMopUpdateAuditHistoryRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entity_type | string |  yes  |  |
 | file_name | string |  no  |  |

---


 
 
 #### [PincodeMopUpdateAuditHistoryPaging](#PincodeMopUpdateAuditHistoryPaging)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | size | number |  no  |  |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | item_total | number |  no  |  |

---


 
 
 #### [PincodeMopUpdateAuditHistoryResponse](#PincodeMopUpdateAuditHistoryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | batch_id | string |  no  |  |
 | entity_type | string |  no  |  |
 | error_file_s3_url | string |  no  |  |
 | s3_url | string |  no  |  |
 | file_name | string |  no  |  |
 | updated_at | string |  no  |  |
 | updated_by | string |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [PincodeMopUpdateAuditHistoryResponseData](#PincodeMopUpdateAuditHistoryResponseData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entity_type | string |  no  |  |
 | page | [PincodeMopUpdateAuditHistoryPaging](#PincodeMopUpdateAuditHistoryPaging) |  yes  |  |
 | data | [[PincodeMopUpdateAuditHistoryResponse](#PincodeMopUpdateAuditHistoryResponse)] |  yes  |  |

---




