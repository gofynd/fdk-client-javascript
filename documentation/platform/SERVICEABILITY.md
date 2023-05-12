




##### [Back to Platform docs](./README.md)

## Serviceability Methods
Logistics Configuration API's allows you to configure zone, application logistics and many more useful features. 

* [getAllStores](#getallstores)
* [getApplicationServiceability](#getapplicationserviceability)
* [getCompanyStoreView](#getcompanystoreview)
* [getEntityRegionView](#getentityregionview)
* [getListView](#getlistview)
* [getOptimalLocations](#getoptimallocations)
* [getStore](#getstore)
* [getZoneDataView](#getzonedataview)
* [insertZoneControllerView](#insertzonecontrollerview)
* [updateZoneControllerView](#updatezonecontrollerview)
* [upsertZoneControllerView](#upsertzonecontrollerview)



## Methods with example and description




### getAllStores
GET stores data



```javascript
// Promise
const promise = platformClient.serviceability.getAllStores();

// Async/Await
const data = await platformClient.serviceability.getAllStores();
```






This API returns stores data.

*Returned Response:*




[GetStoresViewResponse](#GetStoresViewResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getApplicationServiceability
Zone configuration of application.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.getApplicationServiceability();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.getApplicationServiceability();
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


### getCompanyStoreView
Company Store View of application.



```javascript
// Promise
const promise = platformClient.serviceability.getCompanyStoreView();

// Async/Await
const data = await platformClient.serviceability.getCompanyStoreView();
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


### getEntityRegionView
Get country and state list



```javascript
// Promise
const promise = platformClient.serviceability.getEntityRegionView({  body : value });

// Async/Await
const data = await platformClient.serviceability.getEntityRegionView({  body : value });
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
const promise = platformClient.serviceability.getListView({  pageNumber : value,
 pageSize : value,
 name : value,
 isActive : value,
 channelIds : value });

// Async/Await
const data = await platformClient.serviceability.getListView({  pageNumber : value,
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


### getOptimalLocations
Get serviceable store of the item



```javascript
// Promise
const promise = platformClient.serviceability.getOptimalLocations({  body : value });

// Async/Await
const data = await platformClient.serviceability.getOptimalLocations({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ReAssignStoreRequest](#ReAssignStoreRequest) | yes | Request body |


This API returns serviceable store of the item.

*Returned Response:*




[ReAssignStoreResponse](#ReAssignStoreResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getStore
GET stores data



```javascript
// Promise
const promise = platformClient.serviceability.getStore({  storeUid : value });

// Async/Await
const data = await platformClient.serviceability.getStore({  storeUid : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| storeUid | number | yes | A `store_uid` contains a specific ID of a store. |  



This API returns stores data.

*Returned Response:*




[GetStoresViewResponse](#GetStoresViewResponse)

Response status_code




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
const promise = platformClient.serviceability.getZoneDataView({  zoneId : value });

// Async/Await
const data = await platformClient.serviceability.getZoneDataView({  zoneId : value });
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


### insertZoneControllerView
Insertion of zone in database.



```javascript
// Promise
const promise = platformClient.serviceability.insertZoneControllerView({  body : value });

// Async/Await
const data = await platformClient.serviceability.insertZoneControllerView({  body : value });
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


### updateZoneControllerView
Updation of zone collections in database.



```javascript
// Promise
const promise = platformClient.serviceability.updateZoneControllerView({  zoneId : value,
 body : value });

// Async/Await
const data = await platformClient.serviceability.updateZoneControllerView({  zoneId : value,
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
GET zone from the Pincode.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.upsertZoneControllerView({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.upsertZoneControllerView({  body : value });
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


#### [AddressResponse](#AddressResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string? |  yes  |  |
 | address2 | string? |  yes  |  |
 | city | string? |  yes  |  |
 | country | string? |  yes  |  |
 | landmark | string? |  yes  |  |
 | latitude | number? |  yes  |  |
 | longitude | number? |  yes  |  |
 | pincode | number? |  yes  |  |
 | state | string? |  yes  |  |
 

---

#### [ApplicationServiceabilityConfig](#ApplicationServiceabilityConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_id | string |  no  |  |
 | channel_type | string |  no  |  |
 | serviceability_type | string |  no  |  |
 

---

#### [ApplicationServiceabilityConfigResponse](#ApplicationServiceabilityConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [ApplicationServiceabilityConfig](#ApplicationServiceabilityConfig)? |  yes  |  |
 | error | [ServiceabilityrErrorResponse](#ServiceabilityrErrorResponse)? |  yes  |  |
 | success | boolean |  no  |  |
 

---

#### [CompanyStoreView_PageItems](#CompanyStoreView_PageItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | item_total | number |  no  |  |
 | size | number |  no  |  |
 | type | string |  no  |  |
 

---

#### [CompanyStoreView_Response](#CompanyStoreView_Response)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [string]? |  yes  |  |
 | page | [[CompanyStoreView_PageItems](#CompanyStoreView_PageItems)] |  no  |  |
 

---

#### [ContactNumberResponse](#ContactNumberResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | number? |  yes  |  |
 | number | string? |  yes  |  |
 

---

#### [CreatedByResponse](#CreatedByResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_id | string? |  yes  |  |
 | username | string? |  yes  |  |
 

---

#### [CreateZoneData](#CreateZoneData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | assignment_preference | string? |  yes  |  |
 | channels | [[GetZoneDataViewChannels](#GetZoneDataViewChannels)] |  no  |  |
 | company_id | number |  no  |  |
 | is_active | boolean |  no  |  |
 | mapping | [[ZoneMappingType](#ZoneMappingType)] |  no  |  |
 | name | string |  no  |  |
 | product | [ZoneProductTypes](#ZoneProductTypes) |  no  |  |
 | region_type | string |  no  |  |
 | slug | string |  no  |  |
 | store_ids | [number] |  no  |  |
 

---

#### [DocumentsResponse](#DocumentsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | legal_name | string? |  yes  |  |
 | type | string? |  yes  |  |
 | value | string? |  yes  |  |
 | verified | boolean? |  yes  |  |
 

---

#### [Dp](#Dp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | area_code | number? |  yes  |  |
 | assign_dp_from_sb | boolean? |  yes  |  |
 | external_account_id | string? |  yes  |  |
 | fm_priority | number? |  yes  |  |
 | internal_account_id | string? |  yes  |  |
 | lm_priority | number? |  yes  |  |
 | operations | [string]? |  yes  |  |
 | payment_mode | string? |  yes  |  |
 | rvp_priority | number? |  yes  |  |
 | transport_mode | string? |  yes  |  |
 

---

#### [EinvoiceResponse](#EinvoiceResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 

---

#### [EntityRegionView_Error](#EntityRegionView_Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | type | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [EntityRegionView_Items](#EntityRegionView_Items)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | sub_type | string |  no  |  |
 | uid | string |  no  |  |
 

---

#### [EntityRegionView_page](#EntityRegionView_page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | item_total | number |  no  |  |
 | size | number |  no  |  |
 | type | string |  no  |  |
 

---

#### [EntityRegionView_Request](#EntityRegionView_Request)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | parent_id | [string]? |  yes  |  |
 | sub_type | [string] |  no  |  |
 

---

#### [EntityRegionView_Response](#EntityRegionView_Response)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[EntityRegionView_Items](#EntityRegionView_Items)] |  no  |  |
 | error | [EntityRegionView_Error](#EntityRegionView_Error) |  no  |  |
 | page | [EntityRegionView_page](#EntityRegionView_page) |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [EwayBillResponse](#EwayBillResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 

---

#### [GetSingleZoneDataViewResponse](#GetSingleZoneDataViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [GetZoneDataViewItems](#GetZoneDataViewItems) |  no  |  |
 

---

#### [GetStoresViewResponse](#GetStoresViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ItemResponse](#ItemResponse)]? |  yes  |  |
 | page | [ServiceabilityPageResponse](#ServiceabilityPageResponse) |  no  |  |
 

---

#### [GetZoneDataViewChannels](#GetZoneDataViewChannels)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_id | string |  no  |  |
 | channel_type | string |  no  |  |
 

---

#### [GetZoneDataViewItems](#GetZoneDataViewItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | assignment_preference | string? |  yes  |  |
 | channels | [[GetZoneDataViewChannels](#GetZoneDataViewChannels)] |  no  |  |
 | company_id | number |  no  |  |
 | is_active | boolean |  no  |  |
 | mapping | [[ZoneMappingType](#ZoneMappingType)] |  no  |  |
 | name | string |  no  |  |
 | pincodes_count | number |  no  |  |
 | product | [ZoneProductTypes](#ZoneProductTypes) |  no  |  |
 | region_type | string |  no  |  |
 | slug | string |  no  |  |
 | store_ids | [number] |  no  |  |
 | stores_count | number |  no  |  |
 | zone_id | string |  no  |  |
 

---

#### [GetZoneFromPincodeViewRequest](#GetZoneFromPincodeViewRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string |  no  |  |
 | pincode | string |  no  |  |
 

---

#### [GetZoneFromPincodeViewResponse](#GetZoneFromPincodeViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | serviceability_type | string |  no  |  |
 | zones | [string] |  no  |  |
 

---

#### [GstCredentialsResponse](#GstCredentialsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | e_invoice | [EinvoiceResponse](#EinvoiceResponse)? |  yes  |  |
 | e_waybill | [EwayBillResponse](#EwayBillResponse)? |  yes  |  |
 

---

#### [IntegrationTypeResponse](#IntegrationTypeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | inventory | string? |  yes  |  |
 | order | string? |  yes  |  |
 

---

#### [ItemResponse](#ItemResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _cls | string? |  yes  |  |
 | _custom_json | string? |  yes  |  |
 | address | [AddressResponse](#AddressResponse)? |  yes  |  |
 | code | string? |  yes  |  |
 | company | number? |  yes  |  |
 | company_id | number? |  yes  |  |
 | contact_numbers | [[ContactNumberResponse](#ContactNumberResponse)]? |  yes  |  |
 | created_by | [CreatedByResponse](#CreatedByResponse)? |  yes  |  |
 | created_on | string? |  yes  |  |
 | display_name | string? |  yes  |  |
 | documents | [[DocumentsResponse](#DocumentsResponse)]? |  yes  |  |
 | gst_credentials | [GstCredentialsResponse](#GstCredentialsResponse)? |  yes  |  |
 | integration_type | [IntegrationTypeResponse](#IntegrationTypeResponse)? |  yes  |  |
 | logistics | [LogisticsResponse](#LogisticsResponse)? |  yes  |  |
 | manager | [ManagerResponse](#ManagerResponse)? |  yes  |  |
 | modified_by | [ModifiedByResponse](#ModifiedByResponse)? |  yes  |  |
 | modified_on | string? |  yes  |  |
 | name | string? |  yes  |  |
 | notification_emails | [string]? |  yes  |  |
 | product_return_config | [ProductReturnConfigResponse](#ProductReturnConfigResponse)? |  yes  |  |
 | stage | string? |  yes  |  |
 | store_type | string? |  yes  |  |
 | sub_type | string? |  yes  |  |
 | timing | [[TimmingResponse](#TimmingResponse)]? |  yes  |  |
 | uid | number? |  yes  |  |
 | verified_by | [ModifiedByResponse](#ModifiedByResponse)? |  yes  |  |
 | verified_on | string? |  yes  |  |
 | warnings | [WarningsResponse](#WarningsResponse)? |  yes  |  |
 

---

#### [ListViewChannels](#ListViewChannels)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_id | string |  no  |  |
 | channel_type | string |  no  |  |
 

---

#### [ListViewItems](#ListViewItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channels | [ListViewChannels](#ListViewChannels) |  no  |  |
 | company_id | number |  no  |  |
 | is_active | boolean |  no  |  |
 | name | string |  no  |  |
 | pincodes_count | number |  no  |  |
 | product | [ListViewProduct](#ListViewProduct) |  no  |  |
 | slug | string |  no  |  |
 | stores_count | number |  no  |  |
 | zone_id | string |  no  |  |
 

---

#### [ListViewProduct](#ListViewProduct)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number |  no  |  |
 | type | string |  no  |  |
 

---

#### [ListViewResponse](#ListViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ListViewItems](#ListViewItems)] |  no  |  |
 | page | [[ZoneDataItem](#ZoneDataItem)] |  no  |  |
 | summary | [[ListViewSummary](#ListViewSummary)] |  no  |  |
 

---

#### [ListViewSummary](#ListViewSummary)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_active_zones | number |  no  |  |
 | total_pincodes_served | number |  no  |  |
 | total_zones | number |  no  |  |
 

---

#### [LogisticsResponse](#LogisticsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dp | [Dp](#Dp)? |  yes  |  |
 | override | boolean? |  yes  |  |
 

---

#### [ManagerResponse](#ManagerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 | mobile_no | [MobileNo](#MobileNo)? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [MobileNo](#MobileNo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | number? |  yes  |  |
 | number | string? |  yes  |  |
 

---

#### [ModifiedByResponse](#ModifiedByResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_id | string? |  yes  |  |
 | username | string? |  yes  |  |
 

---

#### [OpeningClosing](#OpeningClosing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hour | number? |  yes  |  |
 | minute | number? |  yes  |  |
 

---

#### [ProductReturnConfigResponse](#ProductReturnConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | on_same_store | boolean? |  yes  |  |
 

---

#### [ReAssignStoreRequest](#ReAssignStoreRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [string] |  no  |  |
 | configuration | string |  no  |  |
 | identifier | string |  no  |  |
 | ignored_locations | [string] |  no  |  |
 | to_pincode | string |  no  |  |
 

---

#### [ReAssignStoreResponse](#ReAssignStoreResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [string]? |  yes  |  |
 | error | string |  no  |  |
 | success | boolean |  no  |  |
 | to_pincode | string |  no  |  |
 

---

#### [ServiceabilityPageResponse](#ServiceabilityPageResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | item_total | number? |  yes  |  |
 | size | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [ServiceabilityrErrorResponse](#ServiceabilityrErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | type | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [TimmingResponse](#TimmingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | closing | [OpeningClosing](#OpeningClosing)? |  yes  |  |
 | open | boolean? |  yes  |  |
 | opening | [OpeningClosing](#OpeningClosing)? |  yes  |  |
 | weekday | string? |  yes  |  |
 

---

#### [UpdateZoneData](#UpdateZoneData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | assignment_preference | string? |  yes  |  |
 | channels | [[GetZoneDataViewChannels](#GetZoneDataViewChannels)] |  no  |  |
 | company_id | number |  no  |  |
 | is_active | boolean |  no  |  |
 | mapping | [[ZoneMappingType](#ZoneMappingType)] |  no  |  |
 | name | string |  no  |  |
 | product | [ZoneProductTypes](#ZoneProductTypes) |  no  |  |
 | region_type | string |  no  |  |
 | slug | string |  no  |  |
 | store_ids | [number] |  no  |  |
 | zone_id | string |  no  |  |
 

---

#### [WarningsResponse](#WarningsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store_address | string? |  yes  |  |
 

---

#### [ZoneDataItem](#ZoneDataItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | item_total | number |  no  |  |
 | size | number |  no  |  |
 | type | string |  no  |  |
 

---

#### [ZoneMappingType](#ZoneMappingType)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string |  no  |  |
 | pincode | [string]? |  yes  |  |
 | state | [string]? |  yes  |  |
 

---

#### [ZoneProductTypes](#ZoneProductTypes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tags | [string] |  no  |  |
 | type | string |  no  |  |
 

---

#### [ZoneRequest](#ZoneRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [CreateZoneData](#CreateZoneData) |  no  |  |
 | identifier | string |  no  |  |
 

---

#### [ZoneResponse](#ZoneResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status_code | number |  no  |  |
 | success | boolean |  no  |  |
 | zone_id | string |  no  |  |
 

---

#### [ZoneSuccessResponse](#ZoneSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status_code | number |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [ZoneUpdateRequest](#ZoneUpdateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [UpdateZoneData](#UpdateZoneData) |  no  |  |
 | identifier | string |  no  |  |
 

---




