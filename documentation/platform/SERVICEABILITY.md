




##### [Back to Platform docs](./README.md)

## Serviceability Methods
Logistics Configuration API's allows you to configure zone, application logistics and many more useful features. 

* [getApplicationServiceability](#getapplicationserviceability)
* [getEntityRegionView](#getentityregionview)
* [getListView](#getlistview)
* [getCompanyStoreView](#getcompanystoreview)
* [updateZoneControllerView](#updatezonecontrollerview)
* [getZoneDataView](#getzonedataview)
* [createZone](#createzone)
* [getZonesFromApplicationIdView](#getzonesfromapplicationidview)
* [getZoneFromPincodeView](#getzonefrompincodeview)
* [getStore](#getstore)
* [getAllStores](#getallstores)
* [updatePincodeMopView](#updatepincodemopview)
* [updatePincodeBulkView](#updatepincodebulkview)
* [updatePincodeCoDListing](#updatepincodecodlisting)
* [updatePincodeAuditHistory](#updatepincodeaudithistory)



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


### createZone
Insertion of zone in database.



```javascript
// Promise
const promise = client.serviceability.createZone({  body : value });

// Async/Await
const data = await client.serviceability.createZone({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ZoneRequest](#ZoneRequest) | yes | Request body |


This API returns response of insertion of zone in mongo database.<br>Correction- `zone_id` in the path must be removed.<br> path is `/service/platform/logistics-internal/v1.0/company/{}/zone/`

*Returned Response:*




[ZoneResponse](#ZoneResponse)

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
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
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
  ],
  "page": {
    "type": "number",
    "size": 2,
    "current": 1,
    "has_next": true,
    "item_total": 3276
  }
}
```
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
 | channel_type | string |  yes  |  |
 | channel_id | string |  yes  |  |
 | serviceability_type | string |  yes  |  |

---


 
 
 #### [ServiceabilityrErrorResponse](#ServiceabilityrErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | value | string |  yes  |  |
 | message | string |  yes  |  |

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
 | parent_id | [string] |  no  |  |
 | sub_type | [string] |  yes  |  |

---


 
 
 #### [EntityRegionView_Error](#EntityRegionView_Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | value | string |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [EntityRegionView_page](#EntityRegionView_page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_total | number |  yes  |  |
 | size | number |  yes  |  |
 | type | string |  yes  |  |
 | current | number |  yes  |  |
 | has_next | boolean |  yes  |  |

---


 
 
 #### [EntityRegionView_Items](#EntityRegionView_Items)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | uid | string |  yes  |  |
 | sub_type | string |  yes  |  |

---


 
 
 #### [EntityRegionView_Response](#EntityRegionView_Response)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | [EntityRegionView_Error](#EntityRegionView_Error) |  yes  |  |
 | success | boolean |  yes  |  |
 | page | [EntityRegionView_page](#EntityRegionView_page) |  yes  |  |
 | data | [[EntityRegionView_Items](#EntityRegionView_Items)] |  yes  |  |

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
 | count | number |  yes  |  |
 | type | string |  yes  |  |

---


 
 
 #### [ListViewItems](#ListViewItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | stores_count | number |  yes  |  |
 | is_active | boolean |  yes  |  |
 | company_id | number |  yes  |  |
 | zone_id | string |  yes  |  |
 | channels | [ListViewChannels](#ListViewChannels) |  yes  |  |
 | pincodes_count | number |  yes  |  |
 | slug | string |  yes  |  |
 | product | [ListViewProduct](#ListViewProduct) |  yes  |  |

---


 
 
 #### [ZoneDataItem](#ZoneDataItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_total | number |  yes  |  |
 | type | string |  yes  |  |
 | size | number |  yes  |  |
 | current | number |  yes  |  |
 | has_next | boolean |  yes  |  |

---


 
 
 #### [ListViewSummary](#ListViewSummary)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_active_zones | number |  yes  |  |
 | total_zones | number |  yes  |  |
 | total_pincodes_served | number |  yes  |  |

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
 | item_total | number |  yes  |  |
 | size | number |  yes  |  |
 | type | string |  yes  |  |
 | current | number |  yes  |  |
 | has_next | boolean |  yes  |  |

---


 
 
 #### [CompanyStoreView_Response](#CompanyStoreView_Response)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [string] |  no  |  |
 | page | [[CompanyStoreView_PageItems](#CompanyStoreView_PageItems)] |  yes  |  |

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
 | success | boolean |  yes  |  |
 | status_code | number |  yes  |  |

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
 | success | boolean |  yes  |  |
 | status_code | number |  yes  |  |
 | zone_id | string |  yes  |  |

---


 
 
 #### [GetZoneFromApplicationIdViewResponse](#GetZoneFromApplicationIdViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ListViewItems](#ListViewItems)] |  yes  |  |
 | page | [[ZoneDataItem](#ZoneDataItem)] |  yes  |  |

---


 
 
 #### [ServiceabilityErrorResponse](#ServiceabilityErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | value | string |  yes  |  |
 | message | string |  yes  |  |

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


 
 
 #### [CreatedByResponse](#CreatedByResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | username | string |  no  |  |
 | user_id | string |  no  |  |

---


 
 
 #### [EwayBillResponse](#EwayBillResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |

---


 
 
 #### [EinvoiceResponse](#EinvoiceResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |

---


 
 
 #### [GstCredentialsResponse](#GstCredentialsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | e_waybill | [EwayBillResponse](#EwayBillResponse) |  no  |  |
 | e_invoice | [EinvoiceResponse](#EinvoiceResponse) |  no  |  |

---


 
 
 #### [OpeningClosing](#OpeningClosing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hour | number |  no  |  |
 | minute | number |  no  |  |

---


 
 
 #### [TimmingResponse](#TimmingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | opening | [OpeningClosing](#OpeningClosing) |  no  |  |
 | weekday | string |  no  |  |
 | open | boolean |  no  |  |
 | closing | [OpeningClosing](#OpeningClosing) |  no  |  |

---


 
 
 #### [Dp](#Dp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | external_account_id | string |  no  |  |
 | fm_priority | number |  no  |  |
 | internal_account_id | string |  no  |  |
 | operations | [string] |  no  |  |
 | area_code | number |  no  |  |
 | transport_mode | string |  no  |  |
 | payment_mode | string |  no  |  |
 | assign_dp_from_sb | boolean |  no  |  |
 | lm_priority | number |  no  |  |
 | rvp_priority | number |  no  |  |

---


 
 
 #### [LogisticsResponse](#LogisticsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | override | boolean |  no  |  |
 | dp | [Dp](#Dp) |  no  |  |

---


 
 
 #### [ProductReturnConfigResponse](#ProductReturnConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | on_same_store | boolean |  no  |  |

---


 
 
 #### [DocumentsResponse](#DocumentsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | value | string |  no  |  |
 | verified | boolean |  no  |  |
 | legal_name | string |  no  |  |

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
 | name | string |  no  |  |
 | email | string |  no  |  |
 | mobile_no | [MobileNo](#MobileNo) |  no  |  |

---


 
 
 #### [ContactNumberResponse](#ContactNumberResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | number | string |  no  |  |
 | country_code | number |  no  |  |

---


 
 
 #### [AddressResponse](#AddressResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | landmark | string |  no  |  |
 | pincode | number |  no  |  |
 | city | string |  no  |  |
 | country | string |  no  |  |
 | address2 | string |  no  |  |
 | latitude | number |  no  |  |
 | state | string |  no  |  |
 | longitude | number |  no  |  |
 | address1 | string |  no  |  |

---


 
 
 #### [ModifiedByResponse](#ModifiedByResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | username | string |  no  |  |
 | user_id | string |  no  |  |

---


 
 
 #### [IntegrationTypeResponse](#IntegrationTypeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order | string |  no  |  |
 | inventory | string |  no  |  |

---


 
 
 #### [WarningsResponse](#WarningsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store_address | string |  no  |  |

---


 
 
 #### [ItemResponse](#ItemResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_by | [CreatedByResponse](#CreatedByResponse) |  no  |  |
 | gst_credentials | [GstCredentialsResponse](#GstCredentialsResponse) |  no  |  |
 | timing | [[TimmingResponse](#TimmingResponse)] |  no  |  |
 | logistics | [LogisticsResponse](#LogisticsResponse) |  no  |  |
 | product_return_config | [ProductReturnConfigResponse](#ProductReturnConfigResponse) |  no  |  |
 | documents | [[DocumentsResponse](#DocumentsResponse)] |  no  |  |
 | manager | [ManagerResponse](#ManagerResponse) |  no  |  |
 | _cls | string |  no  |  |
 | display_name | string |  no  |  |
 | company | number |  no  |  |
 | company_id | number |  no  |  |
 | contact_numbers | [[ContactNumberResponse](#ContactNumberResponse)] |  no  |  |
 | address | [AddressResponse](#AddressResponse) |  no  |  |
 | modified_on | string |  no  |  |
 | sub_type | string |  no  |  |
 | store_type | string |  no  |  |
 | created_on | string |  no  |  |
 | verified_by | [ModifiedByResponse](#ModifiedByResponse) |  no  |  |
 | integration_type | [IntegrationTypeResponse](#IntegrationTypeResponse) |  no  |  |
 | warnings | [WarningsResponse](#WarningsResponse) |  no  |  |
 | code | string |  no  |  |
 | name | string |  no  |  |
 | verified_on | string |  no  |  |
 | uid | number |  no  |  |
 | _custom_json | string |  no  |  |
 | notification_emails | [string] |  no  |  |
 | stage | string |  no  |  |
 | modified_by | [ModifiedByResponse](#ModifiedByResponse) |  no  |  |

---


 
 
 #### [PageResponse](#PageResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_total | number |  no  |  |
 | size | number |  no  |  |
 | type | string |  no  |  |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |

---


 
 
 #### [GetStoresViewResponse](#GetStoresViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ItemResponse](#ItemResponse)] |  no  |  |
 | page | [PageResponse](#PageResponse) |  yes  |  |

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
 | item_total | number |  yes  |  |
 | size | number |  yes  |  |
 | type | string |  yes  |  |
 | has_next | boolean |  yes  |  |
 | current_page_number | number |  yes  |  |

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




