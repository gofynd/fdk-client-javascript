




##### [Back to Platform docs](./README.md)

## Serviceability Methods
Logistics Configuration API's allows you to configure zone, application logistics and many more useful features. 

* [getApplicationServiceability](#getapplicationserviceability)
* [getEntityRegionView](#getentityregionview)
* [getListView](#getlistview)
* [getCompanyStoreView](#getcompanystoreview)
* [updateZoneControllerView](#updatezonecontrollerview)
* [getZoneDataView](#getzonedataview)
* [insertZoneControllerView](#insertzonecontrollerview)
* [upsertZoneControllerView](#upsertzonecontrollerview)
* [getStore](#getstore)
* [getAllStores](#getallstores)



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
const promise = client.serviceability.getCompanyStoreView({  pageNumber : value,
 pageSize : value });

// Async/Await
const data = await client.serviceability.getCompanyStoreView({  pageNumber : value,
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


### insertZoneControllerView
Insertion of zone in database.



```javascript
// Promise
const promise = client.serviceability.insertZoneControllerView({  body : value });

// Async/Await
const data = await client.serviceability.insertZoneControllerView({  body : value });
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


### getStore
GET stores data



```javascript
// Promise
const promise = client.serviceability.getStore({  storeUid : value });

// Async/Await
const data = await client.serviceability.getStore({  storeUid : value });
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


### getAllStores
GET stores data



```javascript
// Promise
const promise = client.serviceability.getAllStores();

// Async/Await
const data = await client.serviceability.getAllStores();
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



### Schemas

 
 
 #### [ServiceabilityrErrorResponse](#ServiceabilityrErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  yes  |  |
 | type | string |  yes  |  |
 | message | string |  yes  |  |

---


 
 
 #### [ApplicationServiceabilityConfig](#ApplicationServiceabilityConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_id | string |  yes  |  |
 | serviceability_type | string |  yes  |  |
 | channel_type | string |  yes  |  |

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
 | parent_id | [string] |  no  |  |
 | sub_type | [string] |  yes  |  |

---


 
 
 #### [EntityRegionView_Error](#EntityRegionView_Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  no  |  |
 | type | string |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [EntityRegionView_Items](#EntityRegionView_Items)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sub_type | string |  yes  |  |
 | name | string |  yes  |  |
 | uid | string |  yes  |  |

---


 
 
 #### [EntityRegionView_page](#EntityRegionView_page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  yes  |  |
 | type | string |  yes  |  |
 | item_total | number |  yes  |  |
 | size | number |  yes  |  |
 | has_next | boolean |  yes  |  |

---


 
 
 #### [EntityRegionView_Response](#EntityRegionView_Response)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | [EntityRegionView_Error](#EntityRegionView_Error) |  yes  |  |
 | data | [[EntityRegionView_Items](#EntityRegionView_Items)] |  yes  |  |
 | success | boolean |  yes  |  |
 | page | [EntityRegionView_page](#EntityRegionView_page) |  yes  |  |

---


 
 
 #### [ListViewSummary](#ListViewSummary)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_pincodes_served | number |  yes  |  |
 | total_zones | number |  yes  |  |
 | total_active_zones | number |  yes  |  |

---


 
 
 #### [ZoneDataItem](#ZoneDataItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  yes  |  |
 | item_total | number |  yes  |  |
 | size | number |  yes  |  |
 | has_next | boolean |  yes  |  |
 | type | string |  yes  |  |

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
 | channel_id | string |  yes  |  |
 | channel_type | string |  yes  |  |

---


 
 
 #### [ListViewItems](#ListViewItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_active | boolean |  yes  |  |
 | name | string |  yes  |  |
 | company_id | number |  yes  |  |
 | slug | string |  yes  |  |
 | stores_count | number |  yes  |  |
 | product | [ListViewProduct](#ListViewProduct) |  yes  |  |
 | zone_id | string |  yes  |  |
 | pincodes_count | number |  yes  |  |
 | channels | [ListViewChannels](#ListViewChannels) |  yes  |  |

---


 
 
 #### [ListViewResponse](#ListViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | summary | [[ListViewSummary](#ListViewSummary)] |  yes  |  |
 | page | [[ZoneDataItem](#ZoneDataItem)] |  yes  |  |
 | items | [[ListViewItems](#ListViewItems)] |  yes  |  |

---


 
 
 #### [CompanyStoreView_PageItems](#CompanyStoreView_PageItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  yes  |  |
 | type | string |  yes  |  |
 | item_total | number |  yes  |  |
 | size | number |  yes  |  |
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
 | channel_id | string |  yes  |  |
 | channel_type | string |  yes  |  |

---


 
 
 #### [ZoneProductTypes](#ZoneProductTypes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tags | [string] |  yes  |  |
 | type | string |  yes  |  |

---


 
 
 #### [ZoneMappingType](#ZoneMappingType)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | state | [string] |  no  |  |
 | country | string |  yes  |  |
 | pincode | [string] |  no  |  |

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
 | zones | [string] |  yes  |  |
 | serviceability_type | string |  yes  |  |

---


 
 
 #### [PageResponse](#PageResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | type | string |  no  |  |
 | item_total | number |  no  |  |
 | size | number |  no  |  |
 | has_next | boolean |  no  |  |

---


 
 
 #### [OpeningClosing](#OpeningClosing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | minute | number |  no  |  |
 | hour | number |  no  |  |

---


 
 
 #### [TimmingResponse](#TimmingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | opening | [OpeningClosing](#OpeningClosing) |  no  |  |
 | open | boolean |  no  |  |
 | weekday | string |  no  |  |
 | closing | [OpeningClosing](#OpeningClosing) |  no  |  |

---


 
 
 #### [ModifiedByResponse](#ModifiedByResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_id | string |  no  |  |
 | username | string |  no  |  |

---


 
 
 #### [Dp](#Dp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | internal_account_id | string |  no  |  |
 | operations | [string] |  no  |  |
 | assign_dp_from_sb | boolean |  no  |  |
 | lm_priority | number |  no  |  |
 | fm_priority | number |  no  |  |
 | area_code | number |  no  |  |
 | external_account_id | string |  no  |  |
 | payment_mode | string |  no  |  |
 | rvp_priority | number |  no  |  |
 | transport_mode | string |  no  |  |

---


 
 
 #### [LogisticsResponse](#LogisticsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | override | boolean |  no  |  |
 | dp | [Dp](#Dp) |  no  |  |

---


 
 
 #### [MobileNo](#MobileNo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | number | string |  no  |  |
 | country_code | number |  no  |  |

---


 
 
 #### [ManagerResponse](#ManagerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mobile_no | [MobileNo](#MobileNo) |  no  |  |
 | email | string |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [DocumentsResponse](#DocumentsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  no  |  |
 | legal_name | string |  no  |  |
 | type | string |  no  |  |
 | verified | boolean |  no  |  |

---


 
 
 #### [IntegrationTypeResponse](#IntegrationTypeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order | string |  no  |  |
 | inventory | string |  no  |  |

---


 
 
 #### [ContactNumberResponse](#ContactNumberResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | number | string |  no  |  |
 | country_code | number |  no  |  |

---


 
 
 #### [WarningsResponse](#WarningsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store_address | string |  no  |  |

---


 
 
 #### [AddressResponse](#AddressResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | latitude | number |  no  |  |
 | longitude | number |  no  |  |
 | landmark | string |  no  |  |
 | country | string |  no  |  |
 | address1 | string |  no  |  |
 | city | string |  no  |  |
 | address2 | string |  no  |  |
 | pincode | number |  no  |  |
 | state | string |  no  |  |

---


 
 
 #### [EinvoiceResponse](#EinvoiceResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |

---


 
 
 #### [EwayBillResponse](#EwayBillResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |

---


 
 
 #### [GstCredentialsResponse](#GstCredentialsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | e_invoice | [EinvoiceResponse](#EinvoiceResponse) |  no  |  |
 | e_waybill | [EwayBillResponse](#EwayBillResponse) |  no  |  |

---


 
 
 #### [CreatedByResponse](#CreatedByResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_id | string |  no  |  |
 | username | string |  no  |  |

---


 
 
 #### [ProductReturnConfigResponse](#ProductReturnConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | on_same_store | boolean |  no  |  |

---


 
 
 #### [ItemResponse](#ItemResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | modified_on | string |  no  |  |
 | display_name | string |  no  |  |
 | _cls | string |  no  |  |
 | created_on | string |  no  |  |
 | timing | [[TimmingResponse](#TimmingResponse)] |  no  |  |
 | verified_by | [ModifiedByResponse](#ModifiedByResponse) |  no  |  |
 | logistics | [LogisticsResponse](#LogisticsResponse) |  no  |  |
 | stage | string |  no  |  |
 | code | string |  no  |  |
 | manager | [ManagerResponse](#ManagerResponse) |  no  |  |
 | documents | [[DocumentsResponse](#DocumentsResponse)] |  no  |  |
 | integration_type | [IntegrationTypeResponse](#IntegrationTypeResponse) |  no  |  |
 | contact_numbers | [[ContactNumberResponse](#ContactNumberResponse)] |  no  |  |
 | warnings | [WarningsResponse](#WarningsResponse) |  no  |  |
 | store_type | string |  no  |  |
 | address | [AddressResponse](#AddressResponse) |  no  |  |
 | company_id | number |  no  |  |
 | verified_on | string |  no  |  |
 | gst_credentials | [GstCredentialsResponse](#GstCredentialsResponse) |  no  |  |
 | notification_emails | [string] |  no  |  |
 | _custom_json | string |  no  |  |
 | sub_type | string |  no  |  |
 | company | number |  no  |  |
 | created_by | [CreatedByResponse](#CreatedByResponse) |  no  |  |
 | uid | number |  no  |  |
 | modified_by | [ModifiedByResponse](#ModifiedByResponse) |  no  |  |
 | product_return_config | [ProductReturnConfigResponse](#ProductReturnConfigResponse) |  no  |  |

---


 
 
 #### [GetStoresViewResponse](#GetStoresViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [PageResponse](#PageResponse) |  yes  |  |
 | items | [[ItemResponse](#ItemResponse)] |  no  |  |

---




