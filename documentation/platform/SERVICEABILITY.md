




##### [Back to Platform docs](./README.md)

## Serviceability Methods
Logistics Configuration API's allows you to configure zone, application logistics and many more useful features. 

* [addAppDp](#addappdp)
* [createZone](#createzone)
* [deleteAppDp](#deleteappdp)
* [getAllStores](#getallstores)
* [getApplicationServiceability](#getapplicationserviceability)
* [getCompanyStoreView](#getcompanystoreview)
* [getDpApplicationRules](#getdpapplicationrules)
* [getDpCompanyRules](#getdpcompanyrules)
* [getDpRuleInsert](#getdpruleinsert)
* [getDpRules](#getdprules)
* [getEntityRegionView](#getentityregionview)
* [getListView](#getlistview)
* [getOptimalLocations](#getoptimallocations)
* [getStore](#getstore)
* [getZoneDataView](#getzonedataview)
* [getZoneFromPincodeView](#getzonefrompincodeview)
* [getZonesFromApplicationIdView](#getzonesfromapplicationidview)
* [updateDpRule](#updatedprule)
* [updatePincodeAuditHistory](#updatepincodeaudithistory)
* [updatePincodeBulkView](#updatepincodebulkview)
* [updatePincodeCoDListing](#updatepincodecodlisting)
* [updatePincodeMopView](#updatepincodemopview)
* [updateZoneControllerView](#updatezonecontrollerview)
* [upsertDpAccount](#upsertdpaccount)
* [upsertDpApplicationRules](#upsertdpapplicationrules)
* [upsertDpCompanyRules](#upsertdpcompanyrules)
* [upsertDpRules](#upsertdprules)



## Methods with example and description




### addAppDp
Add application dp data



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.addAppDp({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.addAppDp({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ApplicationCompanyDpViewRequest](#ApplicationCompanyDpViewRequest) | yes | Request body |


This API add application dp data.

*Returned Response:*




[ApplicationCompanyDpViewResponse](#ApplicationCompanyDpViewResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createZone
Creation of a new zone



```javascript
// Promise
const promise = platformClient.serviceability.createZone({  body : value });

// Async/Await
const data = await platformClient.serviceability.createZone({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ZoneRequest](#ZoneRequest) | yes | Request body |


This API allows you to create a new zone with the specified information. A zone enables serviceability based on given pincodes or regions. By creating a zone and including specific pincodes or regions, you can ensure that the stores associated with the zone are serviceable for those added pincodes or regions. This functionality is particularly useful when you need to ensure serviceability for multiple pincodes or regions by grouping them into a single zone.

*Returned Response:*




[ZoneResponse](#ZoneResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "status_code": 200,
  "zone_id": "64809f27f2b8f575d5cb9c56"
}
```
</details>









---


### deleteAppDp
Delete application dp data



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.deleteAppDp({  courierPartnerId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.deleteAppDp({  courierPartnerId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| courierPartnerId | number | yes | A `courier_partner_id` is a unique identifier of a particular delivery partner. |  



This API remove application dp data.

*Returned Response:*




[ApplicationCompanyDpViewResponse](#ApplicationCompanyDpViewResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


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


### getDpApplicationRules
Get All DpApplicationRules rules added at application level from database.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.getDpApplicationRules();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.getDpApplicationRules();
```






This API returns response of all rules of DpApplicationRules from mongo database.

*Returned Response:*




[DPApplicationRuleResponse](#DPApplicationRuleResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getDpCompanyRules
Get All DpCompanyRules applied to company from database.



```javascript
// Promise
const promise = platformClient.serviceability.getDpCompanyRules();

// Async/Await
const data = await platformClient.serviceability.getDpCompanyRules();
```






This API returns response of all DpCompanyRules from mongo database.

*Returned Response:*




[DPCompanyRuleResponse](#DPCompanyRuleResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getDpRuleInsert
Fetching of DpRules from database.



```javascript
// Promise
const promise = platformClient.serviceability.getDpRuleInsert();

// Async/Await
const data = await platformClient.serviceability.getDpRuleInsert();
```






This API returns response of DpRules from mongo database.

*Returned Response:*




[DpMultipleRuleSuccessResponse](#DpMultipleRuleSuccessResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getDpRules
Fetching of DpRules from database.



```javascript
// Promise
const promise = platformClient.serviceability.getDpRules({  ruleUid : value });

// Async/Await
const data = await platformClient.serviceability.getDpRules({  ruleUid : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| ruleUid | string | yes | A `rule_uid` is a unique identifier for a particular Dp. |  



This API returns response of DpRules from mongo database.

*Returned Response:*




[DpRuleSuccessResponse](#DpRuleSuccessResponse)

Response status_code




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
 channelIds : value,
 q : value });

// Async/Await
const data = await platformClient.serviceability.getListView({  pageNumber : value,
 pageSize : value,
 name : value,
 isActive : value,
 channelIds : value,
 q : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNumber | number | no | index of the item to start returning with |    
| pageSize | number | no | determines the items to be displayed in a page |    
| name | string | no | Name of particular zone in the seller account |    
| isActive | boolean | no | status of  zone whether active or inactive |    
| channelIds | string | no | zones associated with the given channel ids' |    
| q | string | no | search with name as a free text |  



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


### getZoneFromPincodeView
GET zone from the Pincode.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.getZoneFromPincodeView({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.getZoneFromPincodeView({  body : value });
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
const promise = platformClient.application("<APPLICATION_ID>").serviceability.getZonesFromApplicationIdView({  pageNo : value,
 pageSize : value,
 zoneId : value,
 q : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.getZonesFromApplicationIdView({  pageNo : value,
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


### updateDpRule
Updating of DpRules from database.



```javascript
// Promise
const promise = platformClient.serviceability.updateDpRule({  ruleUid : value,
 body : value });

// Async/Await
const data = await platformClient.serviceability.updateDpRule({  ruleUid : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| ruleUid | string | yes | A `rule_uid` is a unique identifier for a particular Dp. |  
| body | [DpRulesUpdateRequest](#DpRulesUpdateRequest) | yes | Request body |


This API updates and returns response of DpRules from mongo database.

*Returned Response:*




[DpRuleUpdateSuccessResponse](#DpRuleUpdateSuccessResponse)

Response status_code




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
const promise = platformClient.application("<APPLICATION_ID>").serviceability.updatePincodeAuditHistory({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.updatePincodeAuditHistory({  body : value });
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


### updatePincodeBulkView
Bulk Update of pincode in the application.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.updatePincodeBulkView({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.updatePincodeBulkView({  body : value });
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
const promise = platformClient.application("<APPLICATION_ID>").serviceability.updatePincodeCoDListing({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.updatePincodeCoDListing({  body : value });
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


### updatePincodeMopView
PincodeView update of MOP.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.updatePincodeMopView({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.updatePincodeMopView({  body : value });
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


### upsertDpAccount
Upsertion of DpAccount in database.



```javascript
// Promise
const promise = platformClient.serviceability.upsertDpAccount({  body : value });

// Async/Await
const data = await platformClient.serviceability.upsertDpAccount({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CompanyDpAccountRequest](#CompanyDpAccountRequest) | yes | Request body |


This API returns response of upsertion of DpAccount in mongo database.

*Returned Response:*




[CompanyDpAccountResponse](#CompanyDpAccountResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### upsertDpApplicationRules
Upsert of DpApplicationRules in database.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.upsertDpApplicationRules({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.upsertDpApplicationRules({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DPApplicationRuleRequest](#DPApplicationRuleRequest) | yes | Request body |


This API returns response of upsert of DpApplicationRules in mongo database.

*Returned Response:*




[DPApplicationRuleResponse](#DPApplicationRuleResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### upsertDpCompanyRules
Upsert of DpCompanyRules in database.



```javascript
// Promise
const promise = platformClient.serviceability.upsertDpCompanyRules({  body : value });

// Async/Await
const data = await platformClient.serviceability.upsertDpCompanyRules({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DPCompanyRuleRequest](#DPCompanyRuleRequest) | yes | Request body |


This API returns response of upsert of DpCompanyRules in mongo database.

*Returned Response:*




[DPCompanyRuleResponse](#DPCompanyRuleResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### upsertDpRules
Upsert of DpRules in database.



```javascript
// Promise
const promise = platformClient.serviceability.upsertDpRules({  body : value });

// Async/Await
const data = await platformClient.serviceability.upsertDpRules({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DpRuleRequest](#DpRuleRequest) | yes | Request body |


This API returns response of upsert of DpRules in mongo database.

*Returned Response:*




[DpRuleSuccessResponse](#DpRuleSuccessResponse)

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

#### [ApplicationCompanyDpViewRequest](#ApplicationCompanyDpViewRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dp_id | string? |  yes  |  |
 

---

#### [ApplicationCompanyDpViewResponse](#ApplicationCompanyDpViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application_id | string |  no  |  |
 | company_id | number |  no  |  |
 | courier_partner_id | number? |  yes  |  |
 | success | boolean |  no  |  |
 

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

#### [CommonError](#CommonError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | any? |  yes  |  |
 | status_code | string? |  yes  |  |
 | success | string? |  yes  |  |
 

---

#### [CompanyDpAccountRequest](#CompanyDpAccountRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[Dp1](#Dp1)] |  no  |  |
 

---

#### [CompanyDpAccountResponse](#CompanyDpAccountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
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

#### [Dp1](#Dp1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | account_id | string |  no  |  |
 | dp_id | string |  no  |  |
 | is_self_ship | boolean |  no  |  |
 | plan_id | string |  no  |  |
 | plan_rules | string |  no  |  |
 | stage | string |  no  |  |
 

---

#### [DpAccountFailureResponse](#DpAccountFailureResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | [[ErrorResponse](#ErrorResponse)] |  no  |  |
 | status_code | number |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [DPApplicationRuleRequest](#DPApplicationRuleRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipping_rules | [string] |  no  |  |
 

---

#### [DPApplicationRuleResponse](#DPApplicationRuleResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[DpRuleResponse](#DpRuleResponse)] |  no  |  |
 | status_code | boolean |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [DPCompanyRuleRequest](#DPCompanyRuleRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | rule_ids | [string] |  no  |  |
 

---

#### [DPCompanyRuleResponse](#DPCompanyRuleResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[DpRuleResponse](#DpRuleResponse)] |  no  |  |
 | status_code | number |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [DpIds](#DpIds)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |
 | meta | string? |  yes  |  |
 | priority | number |  no  |  |
 

---

#### [DpMultipleRuleSuccessResponse](#DpMultipleRuleSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[DpRuleResponse](#DpRuleResponse)] |  no  |  |
 | page | [Page](#Page) |  no  |  |
 | success | boolean |  no  |  |
 | total_count | number |  no  |  |
 

---

#### [DpRuleRequest](#DpRuleRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number? |  yes  |  |
 | conditions | [string] |  no  |  |
 | dp_ids | [String: [DpIds](#DpIds)] |  no  |  |
 | is_active | boolean? |  yes  |  |
 | name | string |  no  |  |
 

---

#### [DpRuleResponse](#DpRuleResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number |  no  |  |
 | conditions | [string] |  no  |  |
 | created_by | string? |  yes  |  |
 | created_on | string? |  yes  |  |
 | dp_ids | string |  no  |  |
 | is_active | boolean? |  yes  |  |
 | modified_by | string? |  yes  |  |
 | modified_on | string? |  yes  |  |
 | name | string |  no  |  |
 | uid | string |  no  |  |
 

---

#### [DpRuleSuccessResponse](#DpRuleSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [DpRuleResponse](#DpRuleResponse) |  no  |  |
 | status_code | number |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [DpRulesUpdateRequest](#DpRulesUpdateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | conditions | [string] |  no  |  |
 | dp_ids | string |  no  |  |
 | is_active | boolean |  no  |  |
 | name | string |  no  |  |
 

---

#### [DpRuleUpdateSuccessResponse](#DpRuleUpdateSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [DpRuleResponse](#DpRuleResponse) |  no  |  |
 | status_code | number |  no  |  |
 | success | boolean |  no  |  |
 

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

#### [Error](#Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | type | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [ErrorResponse](#ErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | type | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [ErrorResponse1](#ErrorResponse1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | type | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [EwayBillResponse](#EwayBillResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 

---

#### [FailureResponse](#FailureResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | [[ErrorResponse1](#ErrorResponse1)] |  no  |  |
 | status_code | number |  no  |  |
 | success | boolean |  no  |  |
 

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
 | company_id | number? |  yes  |  |
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

#### [GetZoneFromApplicationIdViewResponse](#GetZoneFromApplicationIdViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ListViewItems](#ListViewItems)] |  no  |  |
 | page | [[ZoneDataItem](#ZoneDataItem)] |  no  |  |
 

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

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | has_previous | boolean |  no  |  |
 | size | number |  no  |  |
 | total | number |  no  |  |
 | type | string |  no  |  |
 

---

#### [PincodeBulkViewResponse](#PincodeBulkViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | batch_id | string |  no  |  |
 | s3_url | string |  no  |  |
 

---

#### [PincodeCodStatusListingPage](#PincodeCodStatusListingPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | item_total | number |  no  |  |
 | size | number |  no  |  |
 | type | string |  no  |  |
 

---

#### [PincodeCodStatusListingRequest](#PincodeCodStatusListingRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string? |  yes  |  |
 | current | number? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | page_size | number? |  yes  |  |
 | pincode | number? |  yes  |  |
 

---

#### [PincodeCodStatusListingResponse](#PincodeCodStatusListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string |  no  |  |
 | data | [[PincodeCodStatusListingResponse](#PincodeCodStatusListingResponse)] |  no  |  |
 | errors | [[Error](#Error)]? |  yes  |  |
 | page | [PincodeCodStatusListingPage](#PincodeCodStatusListingPage) |  no  |  |
 | success | boolean |  no  |  |
 | summary | [PincodeCodStatusListingSummary](#PincodeCodStatusListingSummary) |  no  |  |
 

---

#### [PincodeCodStatusListingSummary](#PincodeCodStatusListingSummary)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_active_pincodes | number |  no  |  |
 | total_inactive_pincodes | number |  no  |  |
 

---

#### [PincodeMopBulkData](#PincodeMopBulkData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | batch_id | string |  no  |  |
 | s3_url | string |  no  |  |
 

---

#### [PincodeMopData](#PincodeMopData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  |  |
 | country | string |  no  |  |
 | pincodes | [number] |  no  |  |
 

---

#### [PincodeMOPresponse](#PincodeMOPresponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  |  |
 | batch_id | string |  no  |  |
 | country | string |  no  |  |
 | pincodes | [number]? |  yes  |  |
 | status_code | number |  no  |  |
 | success | boolean |  no  |  |
 | updated_pincodes | [[PincodeMopUpdateResponse](#PincodeMopUpdateResponse)]? |  yes  |  |
 

---

#### [PincodeMopUpdateAuditHistoryPaging](#PincodeMopUpdateAuditHistoryPaging)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | item_total | number? |  yes  |  |
 | size | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [PincodeMopUpdateAuditHistoryRequest](#PincodeMopUpdateAuditHistoryRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entity_type | string |  no  |  |
 | file_name | string? |  yes  |  |
 

---

#### [PincodeMopUpdateAuditHistoryResponse](#PincodeMopUpdateAuditHistoryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | batch_id | string? |  yes  |  |
 | entity_type | string? |  yes  |  |
 | error_file_s3_url | string? |  yes  |  |
 | file_name | string? |  yes  |  |
 | s3_url | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | updated_by | string? |  yes  |  |
 

---

#### [PincodeMopUpdateAuditHistoryResponseData](#PincodeMopUpdateAuditHistoryResponseData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[PincodeMopUpdateAuditHistoryResponse](#PincodeMopUpdateAuditHistoryResponse)] |  no  |  |
 | entity_type | string? |  yes  |  |
 | page | [PincodeMopUpdateAuditHistoryPaging](#PincodeMopUpdateAuditHistoryPaging) |  no  |  |
 

---

#### [PincodeMopUpdateResponse](#PincodeMopUpdateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | channel_id | string |  no  |  |
 | country | string |  no  |  |
 | is_active | boolean |  no  |  |
 | pincode | number |  no  |  |
 

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

#### [ServiceabilityErrorResponse](#ServiceabilityErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | type | string |  no  |  |
 | value | string |  no  |  |
 

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




