




##### [Back to Platform docs](./README.md)

## Serviceability Methods
Logistics Configuration API's allows you to configure zone, application logistics and many more useful features. 

* [getAllStores](#getallstores)
* [getApplicationServiceability](#getapplicationserviceability)
* [getCompanyStoreView](#getcompanystoreview)
* [getEntityRegionView](#getentityregionview)
* [getListView](#getlistview)
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
const promise = platformClient.serviceability.getCompanyStoreView({  pageNumber : value,
 pageSize : value });

// Async/Await
const data = await platformClient.serviceability.getCompanyStoreView({  pageNumber : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNumber | number | no | index of the item to start returning with |    
| pageSize | number | no | determines the items to be displayed in a page |  



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
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; items</i></summary>

```json
[
  {
    "uid": 2,
    "_cls": "Store",
    "address": {
      "city": "MUMBAI",
      "country": "INDIA",
      "address2": "",
      "address1": "POLARIS 2ND FLOOR, ANDHERI",
      "landmark": "",
      "state": "MAHARASHTRA",
      "pincode": 400001,
      "longitude": 72.8776559,
      "latitude": 19.0759837
    },
    "code": "HS-a0c85",
    "company_id": 2,
    "contact_numbers": [
      {
        "country_code": 91,
        "number": "9096686804"
      }
    ],
    "created_by": {
      "user_id": "605e8e86493f54a9ccaa47be",
      "username": "parvezshaikh_gofynd_com_07710"
    },
    "created_on": "2021-08-07T06:21:25.293000",
    "display_name": "Test",
    "documents": [
      {
        "type": "gst",
        "verified": true,
        "value": "27AALCA0442L1ZM",
        "legal_name": "SHOPSENSE RETAIL TECHNOLOGIES PRIVATE LIMITED"
      }
    ],
    "gst_credentials": {
      "e_waybill": {
        "enabled": false
      },
      "e_invoice": {
        "enabled": false
      }
    },
    "integration_type": {
      "order": "pulse",
      "inventory": "pulse"
    },
    "logistics": {
      "dp": {
        "1": {
          "fm_priority": 1,
          "lm_priority": 1,
          "rvp_priority": 1,
          "payment_mode": "all",
          "operations": [
            "inter_city"
          ],
          "area_code": null,
          "assign_dp_from_sb": true,
          "transport_mode": "air",
          "external_account_id": null,
          "internal_account_id": "1"
        },
        "19": {
          "fm_priority": 2,
          "lm_priority": 2,
          "rvp_priority": 2,
          "payment_mode": "all",
          "operations": "inter_city",
          "area_code": null,
          "assign_dp_from_sb": true,
          "transport_mode": "air",
          "external_account_id": null,
          "internal_account_id": "19"
        }
      },
      "override": false
    },
    "manager": {
      "name": "Parvez Shaikh",
      "mobile_no": {
        "country_code": 91,
        "number": "9096686804"
      },
      "email": "parvezshaikh@gofynd.com"
    },
    "modified_by": {
      "user_id": "38ac93a8a5495305fc794e76",
      "username": "919594495254_32111"
    },
    "modified_on": "2021-08-17T14:18:10.788000",
    "name": "Test",
    "notification_emails": [
      "parvezshaikh@gofynd.com"
    ],
    "product_return_config": {
      "on_same_store": true
    },
    "stage": "verified",
    "store_type": "high_street",
    "sub_type": "store",
    "timing": [
      {
        "open": true,
        "opening": {
          "hour": 11,
          "minute": 0
        },
        "closing": {
          "hour": 21,
          "minute": 30
        },
        "weekday": "monday"
      },
      {
        "open": true,
        "opening": {
          "hour": 11,
          "minute": 0
        },
        "closing": {
          "hour": 21,
          "minute": 30
        },
        "weekday": "tuesday"
      },
      {
        "open": true,
        "opening": {
          "hour": 11,
          "minute": 0
        },
        "closing": {
          "hour": 21,
          "minute": 30
        },
        "weekday": "wednesday"
      },
      {
        "open": true,
        "opening": {
          "hour": 11,
          "minute": 0
        },
        "closing": {
          "hour": 21,
          "minute": 30
        },
        "weekday": "thursday"
      },
      {
        "open": true,
        "opening": {
          "hour": 11,
          "minute": 0
        },
        "closing": {
          "hour": 21,
          "minute": 30
        },
        "weekday": "friday"
      },
      {
        "open": true,
        "opening": {
          "hour": 11,
          "minute": 0
        },
        "closing": {
          "hour": 21,
          "minute": 30
        },
        "weekday": "saturday"
      },
      {
        "open": true,
        "opening": {
          "hour": 11,
          "minute": 0
        },
        "closing": {
          "hour": 21,
          "minute": 30
        },
        "weekday": "sunday"
      }
    ],
    "verified_by": {
      "user_id": "0",
      "username": "Silverbolt"
    },
    "verified_on": "2022-03-23T13:35:46.869000",
    "warnings": {
      "store_address": "Address: Address seems to be inappropriate this might affect the delivery."
    },
    "_custom_json": {},
    "company": 2
  }
]
```
</details>

<details>
<summary><i>&nbsp; page</i></summary>

```json
{
  "type": "number",
  "size": 2,
  "current": 1,
  "has_next": true,
  "item_total": 3276
}
```
</details>

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
 | address1 | string |  no  |  |
 | address2 | string |  no  |  |
 | city | string |  no  |  |
 | country | string |  no  |  |
 | landmark | string |  no  |  |
 | latitude | number |  no  |  |
 | longitude | number |  no  |  |
 | pincode | number |  no  |  |
 | state | string |  no  |  |
 

---

#### [ApplicationServiceabilityConfig](#ApplicationServiceabilityConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_id | string |  yes  |  |
 | channel_type | string |  yes  |  |
 | serviceability_type | string |  yes  |  |
 

---

#### [ApplicationServiceabilityConfigResponse](#ApplicationServiceabilityConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [ApplicationServiceabilityConfig](#ApplicationServiceabilityConfig) |  no  |  |
 | error | [ServiceabilityrErrorResponse](#ServiceabilityrErrorResponse) |  no  |  |
 | success | boolean |  yes  |  |
 

---

#### [CompanyStoreView_PageItems](#CompanyStoreView_PageItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  yes  |  |
 | has_next | boolean |  yes  |  |
 | item_total | number |  yes  |  |
 | size | number |  yes  |  |
 | type | string |  yes  |  |
 

---

#### [CompanyStoreView_Response](#CompanyStoreView_Response)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [string] |  no  |  |
 | page | [[CompanyStoreView_PageItems](#CompanyStoreView_PageItems)] |  yes  |  |
 

---

#### [ContactNumberResponse](#ContactNumberResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | number |  no  |  |
 | number | string |  no  |  |
 

---

#### [CreatedByResponse](#CreatedByResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_id | string |  no  |  |
 | username | string |  no  |  |
 

---

#### [CreateZoneData](#CreateZoneData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | assignment_preference | string |  no  |  |
 | channels | [[GetZoneDataViewChannels](#GetZoneDataViewChannels)] |  yes  |  |
 | company_id | number |  yes  |  |
 | is_active | boolean |  yes  |  |
 | mapping | [[ZoneMappingType](#ZoneMappingType)] |  yes  |  |
 | name | string |  yes  |  |
 | product | [ZoneProductTypes](#ZoneProductTypes) |  yes  |  |
 | region_type | string |  yes  |  |
 | slug | string |  yes  |  |
 | store_ids | [number] |  yes  |  |
 

---

#### [DocumentsResponse](#DocumentsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | legal_name | string |  no  |  |
 | type | string |  no  |  |
 | value | string |  no  |  |
 | verified | boolean |  no  |  |
 

---

#### [Dp](#Dp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | area_code | number |  no  |  |
 | assign_dp_from_sb | boolean |  no  |  |
 | external_account_id | string |  no  |  |
 | fm_priority | number |  no  |  |
 | internal_account_id | string |  no  |  |
 | lm_priority | number |  no  |  |
 | operations | [string] |  no  |  |
 | payment_mode | string |  no  |  |
 | rvp_priority | number |  no  |  |
 | transport_mode | string |  no  |  |
 

---

#### [EinvoiceResponse](#EinvoiceResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |
 

---

#### [EntityRegionView_Error](#EntityRegionView_Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | type | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [EntityRegionView_Items](#EntityRegionView_Items)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | sub_type | string |  yes  |  |
 | uid | string |  yes  |  |
 

---

#### [EntityRegionView_page](#EntityRegionView_page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  yes  |  |
 | has_next | boolean |  yes  |  |
 | item_total | number |  yes  |  |
 | size | number |  yes  |  |
 | type | string |  yes  |  |
 

---

#### [EntityRegionView_Request](#EntityRegionView_Request)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | parent_id | [string] |  no  |  |
 | sub_type | [string] |  yes  |  |
 

---

#### [EntityRegionView_Response](#EntityRegionView_Response)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[EntityRegionView_Items](#EntityRegionView_Items)] |  yes  |  |
 | error | [EntityRegionView_Error](#EntityRegionView_Error) |  yes  |  |
 | page | [EntityRegionView_page](#EntityRegionView_page) |  yes  |  |
 | success | boolean |  yes  |  |
 

---

#### [EwayBillResponse](#EwayBillResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |
 

---

#### [GetSingleZoneDataViewResponse](#GetSingleZoneDataViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [GetZoneDataViewItems](#GetZoneDataViewItems) |  yes  |  |
 

---

#### [GetStoresViewResponse](#GetStoresViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ItemResponse](#ItemResponse)] |  no  |  |
 | page | [PageResponse](#PageResponse) |  yes  |  |
 

---

#### [GetZoneDataViewChannels](#GetZoneDataViewChannels)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_id | string |  yes  |  |
 | channel_type | string |  yes  |  |
 

---

#### [GetZoneDataViewItems](#GetZoneDataViewItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | assignment_preference | string |  no  |  |
 | channels | [[GetZoneDataViewChannels](#GetZoneDataViewChannels)] |  yes  |  |
 | company_id | number |  yes  |  |
 | is_active | boolean |  yes  |  |
 | mapping | [[ZoneMappingType](#ZoneMappingType)] |  yes  |  |
 | name | string |  yes  |  |
 | pincodes_count | number |  yes  |  |
 | product | [ZoneProductTypes](#ZoneProductTypes) |  yes  |  |
 | region_type | string |  yes  |  |
 | slug | string |  yes  |  |
 | store_ids | [number] |  yes  |  |
 | stores_count | number |  yes  |  |
 | zone_id | string |  yes  |  |
 

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

#### [GstCredentialsResponse](#GstCredentialsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | e_invoice | [EinvoiceResponse](#EinvoiceResponse) |  no  |  |
 | e_waybill | [EwayBillResponse](#EwayBillResponse) |  no  |  |
 

---

#### [IntegrationTypeResponse](#IntegrationTypeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | inventory | string |  no  |  |
 | order | string |  no  |  |
 

---

#### [ItemResponse](#ItemResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _cls | string |  no  |  |
 | _custom_json | string |  no  |  |
 | address | [AddressResponse](#AddressResponse) |  no  |  |
 | code | string |  no  |  |
 | company | number |  no  |  |
 | company_id | number |  no  |  |
 | contact_numbers | [[ContactNumberResponse](#ContactNumberResponse)] |  no  |  |
 | created_by | [CreatedByResponse](#CreatedByResponse) |  no  |  |
 | created_on | string |  no  |  |
 | display_name | string |  no  |  |
 | documents | [[DocumentsResponse](#DocumentsResponse)] |  no  |  |
 | gst_credentials | [GstCredentialsResponse](#GstCredentialsResponse) |  no  |  |
 | integration_type | [IntegrationTypeResponse](#IntegrationTypeResponse) |  no  |  |
 | logistics | [LogisticsResponse](#LogisticsResponse) |  no  |  |
 | manager | [ManagerResponse](#ManagerResponse) |  no  |  |
 | modified_by | [ModifiedByResponse](#ModifiedByResponse) |  no  |  |
 | modified_on | string |  no  |  |
 | name | string |  no  |  |
 | notification_emails | [string] |  no  |  |
 | product_return_config | [ProductReturnConfigResponse](#ProductReturnConfigResponse) |  no  |  |
 | stage | string |  no  |  |
 | store_type | string |  no  |  |
 | sub_type | string |  no  |  |
 | timing | [[TimmingResponse](#TimmingResponse)] |  no  |  |
 | uid | number |  no  |  |
 | verified_by | [ModifiedByResponse](#ModifiedByResponse) |  no  |  |
 | verified_on | string |  no  |  |
 | warnings | [WarningsResponse](#WarningsResponse) |  no  |  |
 

---

#### [ListViewChannels](#ListViewChannels)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_id | string |  yes  |  |
 | channel_type | string |  yes  |  |
 

---

#### [ListViewItems](#ListViewItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channels | [ListViewChannels](#ListViewChannels) |  yes  |  |
 | company_id | number |  yes  |  |
 | is_active | boolean |  yes  |  |
 | name | string |  yes  |  |
 | pincodes_count | number |  yes  |  |
 | product | [ListViewProduct](#ListViewProduct) |  yes  |  |
 | slug | string |  yes  |  |
 | stores_count | number |  yes  |  |
 | zone_id | string |  yes  |  |
 

---

#### [ListViewProduct](#ListViewProduct)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number |  yes  |  |
 | type | string |  yes  |  |
 

---

#### [ListViewResponse](#ListViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ListViewItems](#ListViewItems)] |  yes  |  |
 | page | [[ZoneDataItem](#ZoneDataItem)] |  yes  |  |
 | summary | [[ListViewSummary](#ListViewSummary)] |  yes  |  |
 

---

#### [ListViewSummary](#ListViewSummary)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_active_zones | number |  yes  |  |
 | total_pincodes_served | number |  yes  |  |
 | total_zones | number |  yes  |  |
 

---

#### [LogisticsResponse](#LogisticsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dp | [Dp](#Dp) |  no  |  |
 | override | boolean |  no  |  |
 

---

#### [ManagerResponse](#ManagerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  no  |  |
 | mobile_no | [MobileNo](#MobileNo) |  no  |  |
 | name | string |  no  |  |
 

---

#### [MobileNo](#MobileNo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | number |  no  |  |
 | number | string |  no  |  |
 

---

#### [ModifiedByResponse](#ModifiedByResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_id | string |  no  |  |
 | username | string |  no  |  |
 

---

#### [OpeningClosing](#OpeningClosing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hour | number |  no  |  |
 | minute | number |  no  |  |
 

---

#### [PageResponse](#PageResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | item_total | number |  no  |  |
 | size | number |  no  |  |
 | type | string |  no  |  |
 

---

#### [ProductReturnConfigResponse](#ProductReturnConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | on_same_store | boolean |  no  |  |
 

---

#### [ServiceabilityrErrorResponse](#ServiceabilityrErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  |  |
 | type | string |  yes  |  |
 | value | string |  yes  |  |
 

---

#### [TimmingResponse](#TimmingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | closing | [OpeningClosing](#OpeningClosing) |  no  |  |
 | open | boolean |  no  |  |
 | opening | [OpeningClosing](#OpeningClosing) |  no  |  |
 | weekday | string |  no  |  |
 

---

#### [UpdateZoneData](#UpdateZoneData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | assignment_preference | string |  no  |  |
 | channels | [[GetZoneDataViewChannels](#GetZoneDataViewChannels)] |  yes  |  |
 | company_id | number |  yes  |  |
 | is_active | boolean |  yes  |  |
 | mapping | [[ZoneMappingType](#ZoneMappingType)] |  yes  |  |
 | name | string |  yes  |  |
 | product | [ZoneProductTypes](#ZoneProductTypes) |  yes  |  |
 | region_type | string |  yes  |  |
 | slug | string |  yes  |  |
 | store_ids | [number] |  yes  |  |
 | zone_id | string |  yes  |  |
 

---

#### [WarningsResponse](#WarningsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store_address | string |  no  |  |
 

---

#### [ZoneDataItem](#ZoneDataItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  yes  |  |
 | has_next | boolean |  yes  |  |
 | item_total | number |  yes  |  |
 | size | number |  yes  |  |
 | type | string |  yes  |  |
 

---

#### [ZoneMappingType](#ZoneMappingType)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string |  yes  |  |
 | pincode | [string] |  no  |  |
 | state | [string] |  no  |  |
 

---

#### [ZoneProductTypes](#ZoneProductTypes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tags | [string] |  yes  |  |
 | type | string |  yes  |  |
 

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
 | status_code | number |  yes  |  |
 | success | boolean |  yes  |  |
 | zone_id | string |  yes  |  |
 

---

#### [ZoneSuccessResponse](#ZoneSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status_code | number |  yes  |  |
 | success | boolean |  yes  |  |
 

---

#### [ZoneUpdateRequest](#ZoneUpdateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [UpdateZoneData](#UpdateZoneData) |  yes  |  |
 | identifier | string |  yes  |  |
 

---




