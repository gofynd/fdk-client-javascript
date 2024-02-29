




##### [Back to Platform docs](./README.md)

## Serviceability Methods
Logistics Configuration API's allows you to configure zone, application logistics and many more useful features. 


Default
* [bulkServiceability](#bulkserviceability)
* [bulkTat](#bulktat)
* [createCourierPartnerAccount](#createcourierpartneraccount)
* [createCourierPartnerRule](#createcourierpartnerrule)
* [createPackageMaterial](#createpackagematerial)
* [createPackageMaterialRule](#createpackagematerialrule)
* [createStoreRules](#createstorerules)
* [getApplicationConfig](#getapplicationconfig)
* [getApplicationConfiguration](#getapplicationconfiguration)
* [getApplicationServiceabilitySelfShipment](#getapplicationserviceabilityselfshipment)
* [getBulkServiceability](#getbulkserviceability)
* [getBulkTat](#getbulktat)
* [getCompanyConfiguration](#getcompanyconfiguration)
* [getCourierPartnerAccount](#getcourierpartneraccount)
* [getCourierPartnerAccounts](#getcourierpartneraccounts)
* [getCourierPartnerRule](#getcourierpartnerrule)
* [getCourierPartnerRules](#getcourierpartnerrules)
* [getPackageMaterialList](#getpackagemateriallist)
* [getPackageMaterialRule](#getpackagematerialrule)
* [getPackageMaterialRules](#getpackagematerialrules)
* [getPackageMaterials](#getpackagematerials)
* [getServiceability](#getserviceability)
* [getStoreRule](#getstorerule)
* [getStoreRules](#getstorerules)
* [getZoneById](#getzonebyid)
* [getZones](#getzones)
* [insertApplicationConfig](#insertapplicationconfig)
* [patchApplicationServiceabilitySelfShipment](#patchapplicationserviceabilityselfshipment)
* [updateApplicationConfiguration](#updateapplicationconfiguration)
* [updateCompanyConfiguration](#updatecompanyconfiguration)
* [updateCourierPartnerAccount](#updatecourierpartneraccount)
* [updateCourierPartnerRulePriority](#updatecourierpartnerrulepriority)
* [updateCourierRule](#updatecourierrule)
* [updatePackageMaterialRule](#updatepackagematerialrule)
* [updatePackageMaterials](#updatepackagematerials)
* [updateServiceability](#updateserviceability)
* [updateStoreRules](#updatestorerules)
* [updateStoreRulesConfig](#updatestorerulesconfig)
* [updateZoneById](#updatezonebyid)


Zone Management
* [createZone](#createzone)


Store Management
* [getAllStores](#getallstores)
* [getOptimalLocations](#getoptimallocations)


Delivery Partners (DP) and Rules Managemen
* [updatePincodeAuditHistory](#updatepincodeaudithistory)
* [updatePincodeBulkView](#updatepincodebulkview)
* [updatePincodeCoDListing](#updatepincodecodlisting)
* [updatePincodeMopView](#updatepincodemopview)




## Methods with example and description





### bulkServiceability
Serviceability Import or Export



```javascript
// Promise
const promise = platformClient.serviceability.bulkServiceability({  extensionId : value,
 schemeId : value,
 body : value });

// Async/Await
const data = await platformClient.serviceability.bulkServiceability({  extensionId : value,
 schemeId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| extensionId | string | yes | Unique Identifier of CP Extension |   
| schemeId | string | yes | Unique identifier of a scheme |  
| body | [BulkRegionJobSerializer](#BulkRegionJobSerializer) | yes | Request body |


Serviceability Import or Export

*Returned Response:*




[BulkRegionResponseItemData](#BulkRegionResponseItemData)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### bulkTat
Region TAT Import or Export



```javascript
// Promise
const promise = platformClient.serviceability.bulkTat({  extensionId : value,
 schemeId : value,
 body : value });

// Async/Await
const data = await platformClient.serviceability.bulkTat({  extensionId : value,
 schemeId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| extensionId | string | yes | Unique Identifier of CP Extension |   
| schemeId | string | yes | Unique identifier of a scheme |  
| body | [BulkRegionJobSerializer](#BulkRegionJobSerializer) | yes | Request body |


Region TAT Import or Export

*Returned Response:*




[BulkRegionResponseItemData](#BulkRegionResponseItemData)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createCourierPartnerAccount
Creation of Courier Account



```javascript
// Promise
const promise = platformClient.serviceability.createCourierPartnerAccount({  body : value });

// Async/Await
const data = await platformClient.serviceability.createCourierPartnerAccount({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CourierAccount](#CourierAccount) | yes | Request body |


This API Creates a new Courier Account

*Returned Response:*




[CourierAccount](#CourierAccount)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createCourierPartnerRule
Create Courier Rules.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.createCourierPartnerRule({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.createCourierPartnerRule({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CourierPartnerRule](#CourierPartnerRule) | yes | Request body |


Creates Courier Rules with rule configuration and dp priority

*Returned Response:*




[CourierPartnerRule](#CourierPartnerRule)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createPackageMaterial
Upsert of PackageMaterial in database.



```javascript
// Promise
const promise = platformClient.serviceability.createPackageMaterial({  body : value });

// Async/Await
const data = await platformClient.serviceability.createPackageMaterial({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PackageMaterial](#PackageMaterial) | yes | Request body |


This API returns response of upsert of PackageMaterial in mongo database.

*Returned Response:*




[PackageMaterialResponse](#PackageMaterialResponse)

Response status_code




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; PackageMaterial</i></summary>

```json
{
  "value": {
    "id": "64b8526e5ca47d41582b9fa1",
    "name": "Package1",
    "item_id": 1234,
    "company_id": 1,
    "length": 1,
    "height": 1,
    "width": 1,
    "weight": 1,
    "error_rate": 0,
    "store_ids": [
      1,
      9,
      5
    ],
    "rules": [
      {
        "rule_id": "64b4337a0c607fbfbcd0156b",
        "quantity": {
          "min": 1,
          "max": 2
        },
        "weight": 100
      }
    ],
    "channels": [
      {
        "id": "64b4337a0c607fbfbcd0190b",
        "type": "application"
      }
    ],
    "media": [
      "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/sandbx/wrkr/sandeepmaale/products/pictures/bundle/free/original/LOc5XW0cc-Logo.png"
    ],
    "package_type": "box",
    "size": "small",
    "status": "active",
    "track_inventory": false,
    "max_weight": 100,
    "package_vol_weight": 100,
    "auto_calculate": true
  }
}
```
</details>

</details>









---


### createPackageMaterialRule
Upsert of Package Material Rule in database.



```javascript
// Promise
const promise = platformClient.serviceability.createPackageMaterialRule({  body : value });

// Async/Await
const data = await platformClient.serviceability.createPackageMaterialRule({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PackageRule](#PackageRule) | yes | Request body |


This API returns response of upsert of Package Material Rule in mongo database.

*Returned Response:*




[PackageRuleResponse](#PackageRuleResponse)

Response status_code




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; PackageRule</i></summary>

```json
{
  "value": {
    "id": "64b4337a0c607fbfbcd0156b",
    "company_id": 1,
    "name": "Rule For Dev Contract",
    "category_id": {
      "includes": [
        1,
        2
      ]
    },
    "product_tag": {
      "includes": [
        "abc",
        "xyz"
      ]
    },
    "product_id": {
      "includes": [
        1,
        2
      ]
    },
    "type": "package",
    "is_active": true
  }
}
```
</details>

</details>









---


### createStoreRules
Create Store Rule



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.createStoreRules({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.createStoreRules({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateStoreRuleRequestSchema](#CreateStoreRuleRequestSchema) | yes | Request body |


Create Store Rule

*Returned Response:*




[StoreRuleResponseSchema](#StoreRuleResponseSchema)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getApplicationConfig
Get Application Configuration



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.getApplicationConfig();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.getApplicationConfig();
```






Get Application Configuration

*Returned Response:*




[StoreRuleConfigData](#StoreRuleConfigData)

Successful Response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getApplicationConfiguration
Get All Courier Rules applied to application



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.getApplicationConfiguration();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.getApplicationConfiguration();
```






This API returns all the Courier Rules applied to an application

*Returned Response:*




[ApplicationConfig](#ApplicationConfig)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getApplicationServiceabilitySelfShipment
Self-ship configuration of application.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.getApplicationServiceabilitySelfShipment();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.getApplicationServiceabilitySelfShipment();
```






This API returns Self-ship configuration of the application.

*Returned Response:*




[ApplicationSelfShipConfigResponse](#ApplicationSelfShipConfigResponse)

Response Data




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": {
    "is_active": true,
    "tat": 3
  },
  "success": true,
  "error": {
    "type": "",
    "value": "",
    "message": ""
  }
}
```
</details>









---


### getBulkServiceability
Get Region Serviceability Bulk History



```javascript
// Promise
const promise = platformClient.serviceability.getBulkServiceability({  extensionId : value,
 schemeId : value,
 pageNo : value,
 pageSize : value,
 batchId : value,
 action : value,
 status : value,
 country : value,
 region : value,
 startDate : value,
 endDate : value });

// Async/Await
const data = await platformClient.serviceability.getBulkServiceability({  extensionId : value,
 schemeId : value,
 pageNo : value,
 pageSize : value,
 batchId : value,
 action : value,
 status : value,
 country : value,
 region : value,
 startDate : value,
 endDate : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| extensionId | string | yes | Unique Identifier of CP Extension |   
| schemeId | string | yes | Unique identifier of a scheme |    
| pageNo | number | no | index of the item to start returning with |    
| pageSize | number | no | determines the items to be displayed in a page |    
| batchId | string | no | Unique identifier of bulk job |    
| action | string | no | import or export bulk type |    
| status | string | no | Status of the bulk actions |    
| country | string | no | Country for which bulk job is initiated |    
| region | string | no | Region for which bulk job is initiated |    
| startDate | string | no | Fetch job history after a particule date |    
| endDate | string | no | Fetch job history before a particule date |  



Get Region Serviceability Bulk History

*Returned Response:*




[BulkRegionResponse](#BulkRegionResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getBulkTat
Get region tat bulk history



```javascript
// Promise
const promise = platformClient.serviceability.getBulkTat({  extensionId : value,
 schemeId : value,
 pageNo : value,
 pageSize : value,
 batchId : value,
 action : value,
 status : value,
 country : value,
 region : value,
 startDate : value,
 endDate : value });

// Async/Await
const data = await platformClient.serviceability.getBulkTat({  extensionId : value,
 schemeId : value,
 pageNo : value,
 pageSize : value,
 batchId : value,
 action : value,
 status : value,
 country : value,
 region : value,
 startDate : value,
 endDate : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| extensionId | string | yes | Unique Identifier of CP Extension |   
| schemeId | string | yes | Unique identifier of a scheme |    
| pageNo | number | no | index of the item to start returning with |    
| pageSize | number | no | determines the items to be displayed in a page |    
| batchId | string | no | Unique identifier of bulk job |    
| action | string | no | import or export bulk type |    
| status | string | no | Status of the bulk actions |    
| country | string | no | Country for which bulk job is initiated |    
| region | string | no | Region for which bulk job is initiated |    
| startDate | string | no | Fetch job history after a particule date |    
| endDate | string | no | Fetch job history before a particule date |  



Get region tat bulk history

*Returned Response:*




[BulkRegionResponse](#BulkRegionResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getCompanyConfiguration
Get All Courier Rules applied to company.



```javascript
// Promise
const promise = platformClient.serviceability.getCompanyConfiguration();

// Async/Await
const data = await platformClient.serviceability.getCompanyConfiguration();
```






This API returns all Courier Rules applied for company.

*Returned Response:*




[CompanyConfig](#CompanyConfig)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getCourierPartnerAccount
Getting Courier Account of a company from database.



```javascript
// Promise
const promise = platformClient.serviceability.getCourierPartnerAccount({  accountId : value });

// Async/Await
const data = await platformClient.serviceability.getCourierPartnerAccount({  accountId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| accountId | string | yes | Unique ID of courier account |  



This API returns response DpAccount of a company from mongo database.

*Returned Response:*




[CourierAccountResponse](#CourierAccountResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getCourierPartnerAccounts
Getting Courier Account list of a company.



```javascript
// Promise
const promise = platformClient.serviceability.getCourierPartnerAccounts({  pageNo : value,
 pageSize : value,
 stage : value,
 paymentMode : value,
 transportType : value });

// Async/Await
const data = await platformClient.serviceability.getCourierPartnerAccounts({  pageNo : value,
 pageSize : value,
 stage : value,
 paymentMode : value,
 transportType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | index of the item to start returning with |    
| pageSize | number | no | determines the items to be displayed in a page |    
| stage | string | no | stage of the account. enabled/disabled |    
| paymentMode | string | no | Filters dp accounts based on payment mode |    
| transportType | string | no | Filters dp accounts based on transport_type |  



This API returns Courier Account of a company.

*Returned Response:*




[CompanyCourierPartnerAccountListResponse](#CompanyCourierPartnerAccountListResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getCourierPartnerRule
Fetch of Courier Rule.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.getCourierPartnerRule({  ruleId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.getCourierPartnerRule({  ruleId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| ruleId | string | yes | A `rule_id` is a unique identifier for a rule. |  



This API returns Courier Rule.

*Returned Response:*




[CourierPartnerRule](#CourierPartnerRule)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getCourierPartnerRules
Fetch Courier Rules List



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.getCourierPartnerRules({  pageNo : value,
 pageSize : value,
 status : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.getCourierPartnerRules({  pageNo : value,
 pageSize : value,
 status : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | index of the item to start returning with |    
| pageSize | number | no | determines the items to be displayed in a page |    
| status | string | no | Filter rules based on rule status |  



This API returns Courier Rules List

*Returned Response:*




[CourierPartnerRulesListResponse](#CourierPartnerRulesListResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getPackageMaterialList
Fetching of PackageMaterials from database.



```javascript
// Promise
const promise = platformClient.serviceability.getPackageMaterialList({  pageNo : value,
 pageSize : value,
 q : value,
 size : value,
 packageType : value });

// Async/Await
const data = await platformClient.serviceability.getPackageMaterialList({  pageNo : value,
 pageSize : value,
 q : value,
 size : value,
 packageType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | index of the item to start returning with |    
| pageSize | number | no | determines the items to be displayed in a page |    
| q | string | no | perform regex search on items matching name for given value |    
| size | string | no | filters items based on given size |    
| packageType | string | no | filters items based on given package_type |  



This API returns response of PackageMaterials from mongo database.

*Returned Response:*




[PackageMaterialList](#PackageMaterialList)

Response status_code




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; PackageMaterialList</i></summary>

```json
{
  "value": {
    "items": {
      "id": "64b8526e5ca47d41582b9fa1",
      "name": "Package1",
      "item_id": 1234,
      "company_id": 1,
      "length": 1,
      "height": 1,
      "width": 1,
      "weight": 1,
      "error_rate": 0,
      "store_ids": [
        1,
        9,
        5
      ],
      "rules": [
        {
          "rule_id": "64b4337a0c607fbfbcd0156b",
          "quantity": {
            "min": 1,
            "max": 2
          },
          "weight": 100
        }
      ],
      "channels": [
        {
          "id": "64b4337a0c607fbfbcd0190b",
          "type": "application"
        }
      ],
      "media": [
        "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/sandbx/wrkr/sandeepmaale/products/pictures/bundle/free/original/LOc5XW0cc-Logo.png"
      ],
      "package_type": "box",
      "size": "small",
      "status": "active",
      "track_inventory": true,
      "max_weight": 100,
      "package_vol_weight": 100,
      "auto_calculate": true
    },
    "page": {
      "type": "number",
      "size": 1,
      "current": 1,
      "has_next": false,
      "has_previous": false,
      "item_total": 1
    }
  }
}
```
</details>

</details>









---


### getPackageMaterialRule
Fetching of Package Material from database.



```javascript
// Promise
const promise = platformClient.serviceability.getPackageMaterialRule({  ruleId : value });

// Async/Await
const data = await platformClient.serviceability.getPackageMaterialRule({  ruleId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| ruleId | string | yes | A `package_material_rule_id` is a unique identifier for a Package Material Rule |  



This API returns response of Package Material from mongo database.

*Returned Response:*




[PackageRuleResponse](#PackageRuleResponse)

Response status_code




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; PackageRule</i></summary>

```json
{
  "value": {
    "id": "64b4337a0c607fbfbcd0156b",
    "company_id": 1,
    "name": "Rule For Dev Contract",
    "category_id": {
      "includes": [
        1,
        2
      ]
    },
    "product_tag": {
      "includes": [
        "abc",
        "xyz"
      ]
    },
    "product_id": {
      "includes": [
        1,
        2
      ]
    },
    "type": "package",
    "is_active": true
  }
}
```
</details>

</details>









---


### getPackageMaterialRules
Fetching of Package Material Rules from database.



```javascript
// Promise
const promise = platformClient.serviceability.getPackageMaterialRules({  pageNo : value,
 pageSize : value,
 isActive : value });

// Async/Await
const data = await platformClient.serviceability.getPackageMaterialRules({  pageNo : value,
 pageSize : value,
 isActive : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | index of the item to start returning with |    
| pageSize | number | no | determines the items to be displayed in a page |    
| isActive | string | no | filters items based on given is_active |  



This API returns response of Package Materials Rules from mongo database.

*Returned Response:*




[PackageMaterialRuleList](#PackageMaterialRuleList)

Response status_code




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; PackageMaterialRuleList</i></summary>

```json
{
  "value": {
    "items": {
      "id": "64b4337a0c607fbfbcd0156b",
      "company_id": 1,
      "name": "Rule For Dev Contract",
      "category_id": {
        "includes": [
          1,
          2
        ]
      },
      "product_tag": {
        "includes": [
          "abc",
          "xyz"
        ]
      },
      "product_id": {
        "includes": [
          1,
          2
        ]
      },
      "type": "package",
      "is_active": true
    },
    "page": {
      "type": "number",
      "size": 1,
      "current": 1,
      "has_next": false,
      "has_previous": false,
      "item_total": 1
    }
  }
}
```
</details>

</details>









---


### getPackageMaterials
Fetching of Package Material from database.



```javascript
// Promise
const promise = platformClient.serviceability.getPackageMaterials({  packageMaterialId : value });

// Async/Await
const data = await platformClient.serviceability.getPackageMaterials({  packageMaterialId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| packageMaterialId | string | yes | A `package_material_id` is a unique identifier for a Package Material |  



This API returns response of Package Material from mongo database.

*Returned Response:*




[PackageMaterialResponse](#PackageMaterialResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getServiceability
Get Serviceability of a region



```javascript
// Promise
const promise = platformClient.serviceability.getServiceability({  extensionId : value,
 schemeId : value,
 regionId : value });

// Async/Await
const data = await platformClient.serviceability.getServiceability({  extensionId : value,
 schemeId : value,
 regionId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| extensionId | string | yes | Unique Identifier of CP Extension |   
| schemeId | string | yes | Unique identifier of a scheme |   
| regionId | string | yes | Unique identifier of a region |  



Get Serviceability of a region

*Returned Response:*




[ServiceabilityModel](#ServiceabilityModel)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getStoreRule
Get Single Store Rule



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.getStoreRule({  ruleUid : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.getStoreRule({  ruleUid : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| ruleUid | string | yes | A `rule_uid` is a unique identifier for a particular rule object. |  



Get Single Store Rule

*Returned Response:*




[StoreRuleDataSchema](#StoreRuleDataSchema)

Successful Response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getStoreRules
Get Multiple Store Rules



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.getStoreRules({  pageNo : value,
 pageSize : value,
 status : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.getStoreRules({  pageNo : value,
 pageSize : value,
 status : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no |  |    
| pageSize | number | no |  |    
| status | string | no |  |  



Get Multiple Store Rules

*Returned Response:*




[GetStoreRulesApiResponse](#GetStoreRulesApiResponse)

Successful Response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getZoneById
Get details of the Zone



```javascript
// Promise
const promise = platformClient.serviceability.getZoneById({  zoneId : value });

// Async/Await
const data = await platformClient.serviceability.getZoneById({  zoneId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| zoneId | string | yes | A `zone_id` is a unique identifier for a particular zone. |  



Returns the region, application, store mapping and other details in the Zone.

*Returned Response:*




[GetZoneByIdSchema](#GetZoneByIdSchema)

Get details of the Zone




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Gujarat Zone</i></summary>

```json
{
  "value": {
    "name": "Test Zone",
    "slug": "test-zone",
    "is_active": false,
    "channels": [
      {
        "channel_id": "64aed475db2cfb5b8a9f623d",
        "channel_type": "application"
      },
      {
        "channel_id": "64ba6650932a416fb67557fa",
        "channel_type": "application"
      }
    ],
    "product": {
      "type": "all",
      "tags": []
    },
    "store_ids": [
      2,
      1462,
      3470,
      3471,
      3475,
      3742,
      3748,
      3751,
      3752,
      3753
    ],
    "region_type": "non-pincode",
    "mapping": [
      {
        "country": "64aec5a93a079bd328537835",
        "regions": [
          "64aec5a93a079bd328537838"
        ]
      }
    ],
    "zone_id": "64d22858f8aafe61d79f07ea",
    "stores_count": 10,
    "display_name_mapping": {
      "64aec5a93a079bd328537835": "India",
      "64aec5a93a079bd328537838": "GUJARAT"
    }
  }
}
```
</details>

</details>









---


### getZones
Shows zones defined at the company level



```javascript
// Promise
const promise = platformClient.serviceability.getZones({  pageNo : value,
 pageSize : value,
 isActive : value,
 channelId : value,
 q : value,
 country : value,
 state : value,
 city : value,
 pincode : value,
 sector : value });

// Async/Await
const data = await platformClient.serviceability.getZones({  pageNo : value,
 pageSize : value,
 isActive : value,
 channelId : value,
 q : value,
 country : value,
 state : value,
 city : value,
 pincode : value,
 sector : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | index of the item to start returning with |    
| pageSize | number | no | determines the items to be displayed in a page |    
| isActive | boolean | no | Status of Zone (either active or inactive) |    
| channelId | string | no | Zones filtered by an application |    
| q | string | no | search with name as a free text |    
| country | string | no | ISO2 code of the country |    
| state | string | no | State name |    
| city | string | no | City name |    
| pincode | string | no | Pincode value to search zones |    
| sector | string | no | Sector value to search zones |  



Return the list of zones that are defined at the company level.

*Returned Response:*




[ListViewResponse](#ListViewResponse)

Zone List of application in descending order of their last modified date.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Zone Listing with q=zone</i></summary>

```json
{
  "value": {
    "items": [
      {
        "name": "company2 zone",
        "slug": "company2-zone",
        "company_id": 2,
        "is_active": true,
        "channels": [
          {
            "channel_id": "64c22ef872985245a6334afa",
            "channel_type": "application"
          }
        ],
        "zone_id": "64c3a0926ea670363c8e2e3d",
        "stores_count": 2,
        "regions_count": 4242,
        "product": {
          "count": 0,
          "type": "all"
        }
      }
    ],
    "page": [
      {
        "type": "number",
        "size": 1,
        "current": 1,
        "has_next": false,
        "item_total": 1
      }
    ]
  }
}
```
</details>

</details>









---


### insertApplicationConfig
Insert Application Configuration



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.insertApplicationConfig({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.insertApplicationConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [StoreRuleConfigData](#StoreRuleConfigData) | yes | Request body |


Insert Application Configuration

*Returned Response:*




[StoreRuleConfigData](#StoreRuleConfigData)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### patchApplicationServiceabilitySelfShipment
Self-ship configuration of application.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.patchApplicationServiceabilitySelfShipment({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.patchApplicationServiceabilitySelfShipment({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [SelfShipResponse](#SelfShipResponse) | yes | Request body |


This API updates Self-ship configuration of the application.

*Returned Response:*




[ApplicationSelfShipConfigResponse](#ApplicationSelfShipConfigResponse)

Response Data




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": {
    "is_active": true,
    "tat": 3
  },
  "success": true,
  "error": {
    "type": "",
    "value": "",
    "message": ""
  }
}
```
</details>









---


### updateApplicationConfiguration
Apply configuration to an application



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.updateApplicationConfiguration({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.updateApplicationConfiguration({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ApplicationConfig](#ApplicationConfig) | yes | Request body |


Apply configuration to application to set DP rules and Zone configuration

*Returned Response:*




[ApplicationConfig](#ApplicationConfig)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateCompanyConfiguration
Apply Courier Rule to company.



```javascript
// Promise
const promise = platformClient.serviceability.updateCompanyConfiguration({  body : value });

// Async/Await
const data = await platformClient.serviceability.updateCompanyConfiguration({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CompanyConfig](#CompanyConfig) | yes | Request body |


Apply Courier Rule to company with rules priority

*Returned Response:*




[CompanyConfig](#CompanyConfig)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateCourierPartnerAccount
Update Courier Account in database.



```javascript
// Promise
const promise = platformClient.serviceability.updateCourierPartnerAccount({  accountId : value,
 body : value });

// Async/Await
const data = await platformClient.serviceability.updateCourierPartnerAccount({  accountId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| accountId | string | yes | Unique ID of courier account |  
| body | [CourierAccount](#CourierAccount) | yes | Request body |


Updates Courier Account

*Returned Response:*




[CourierAccountResponse](#CourierAccountResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateCourierPartnerRulePriority
Updates Courier Partner Rules Priority for a sales channel



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.updateCourierPartnerRulePriority({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.updateCourierPartnerRulePriority({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [RulePriorityRequest](#RulePriorityRequest) | yes | Request body |


Updates Courier Partner Rules Priority for a sales channel

*Returned Response:*




[RulePriorityResponse](#RulePriorityResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateCourierRule
Updating of Courier Rule.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.updateCourierRule({  ruleId : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.updateCourierRule({  ruleId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| ruleId | string | yes | A `rule_id` is a unique identifier for a particular Dp. |  
| body | [CourierPartnerRule](#CourierPartnerRule) | yes | Request body |


This API updates and returns Courier Rule.

*Returned Response:*




[CourierPartnerRule](#CourierPartnerRule)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updatePackageMaterialRule
Fetching of Package Material Rules into database.



```javascript
// Promise
const promise = platformClient.serviceability.updatePackageMaterialRule({  ruleId : value,
 body : value });

// Async/Await
const data = await platformClient.serviceability.updatePackageMaterialRule({  ruleId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| ruleId | string | yes | A `package_material_rule_id` is a unique identifier for a Package Material Rule |  
| body | [PackageRule](#PackageRule) | yes | Request body |


This API updates Package Material Rules into mongo database.

*Returned Response:*




[PackageRuleResponse](#PackageRuleResponse)

Response status_code




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; PackageRule</i></summary>

```json
{
  "value": {
    "id": "64b4337a0c607fbfbcd0156b",
    "company_id": 1,
    "name": "Rule For Dev Contract",
    "category_id": {
      "includes": [
        1,
        2
      ]
    },
    "product_tag": {
      "includes": [
        "abc",
        "xyz"
      ]
    },
    "product_id": {
      "includes": [
        1,
        2
      ]
    },
    "type": "package",
    "is_active": true
  }
}
```
</details>

</details>









---


### updatePackageMaterials
Update Package Material to database.



```javascript
// Promise
const promise = platformClient.serviceability.updatePackageMaterials({  packageMaterialId : value,
 body : value });

// Async/Await
const data = await platformClient.serviceability.updatePackageMaterials({  packageMaterialId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| packageMaterialId | string | yes | A `package_material_id` is a unique identifier for a Package Material |  
| body | [PackageMaterial](#PackageMaterial) | yes | Request body |


This API updates Package Materials from into mongo database.

*Returned Response:*




[PackageMaterialResponse](#PackageMaterialResponse)

Response status_code




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; PackageMaterial</i></summary>

```json
{
  "value": {
    "id": "64b8526e5ca47d41582b9fa1",
    "name": "Package1",
    "item_id": 1234,
    "company_id": 1,
    "length": 1,
    "height": 1,
    "width": 1,
    "weight": 1,
    "error_rate": 0,
    "store_ids": [
      1,
      9,
      5
    ],
    "rules": [
      {
        "rule_id": "64b4337a0c607fbfbcd0156b",
        "quantity": {
          "min": 1,
          "max": 2
        },
        "weight": 100
      }
    ],
    "channels": [
      {
        "id": "64b4337a0c607fbfbcd0190b",
        "type": "application"
      }
    ],
    "media": [
      "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/sandbx/wrkr/sandeepmaale/products/pictures/bundle/free/original/LOc5XW0cc-Logo.png"
    ],
    "package_type": "box",
    "size": "small",
    "status": "active",
    "track_inventory": false,
    "max_weight": 100,
    "package_vol_weight": 100,
    "auto_calculate": true
  }
}
```
</details>

</details>









---


### updateServiceability
Serviceability Update for a region



```javascript
// Promise
const promise = platformClient.serviceability.updateServiceability({  extensionId : value,
 schemeId : value,
 regionId : value,
 body : value });

// Async/Await
const data = await platformClient.serviceability.updateServiceability({  extensionId : value,
 schemeId : value,
 regionId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| extensionId | string | yes | Unique Identifier of CP Extension |   
| schemeId | string | yes | Unique identifier of a scheme |   
| regionId | string | yes | Unique identifier of a region |  
| body | [ServiceabilityModel](#ServiceabilityModel) | yes | Request body |


Serviceability Update for a region

*Returned Response:*




[ServiceabilityModel](#ServiceabilityModel)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateStoreRules
Update Store Rule



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.updateStoreRules({  ruleUid : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.updateStoreRules({  ruleUid : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| ruleUid | string | yes | A `rule_uid` is a unique identifier for a particular rule object. |  
| body | [CreateStoreRuleRequestSchema](#CreateStoreRuleRequestSchema) | yes | Request body |


Update Store Rule

*Returned Response:*




[StoreRuleUpdateResponseSchema](#StoreRuleUpdateResponseSchema)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateStoreRulesConfig
Update Store Rule Configuration



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.updateStoreRulesConfig({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.updateStoreRulesConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [StoreRuleConfigData](#StoreRuleConfigData) | yes | Request body |


Update Store Rule Configuration

*Returned Response:*




[StoreRuleConfigData](#StoreRuleConfigData)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateZoneById
Update details of a Zone



```javascript
// Promise
const promise = platformClient.serviceability.updateZoneById({  zoneId : value,
 body : value });

// Async/Await
const data = await platformClient.serviceability.updateZoneById({  zoneId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| zoneId | string | yes | A `zone_id` is a unique identifier for a particular zone. |  
| body | [UpdateZoneData](#UpdateZoneData) | yes | Request body |


Updates the region, application, store mapping and other details in the Zone.

*Returned Response:*




[ZoneSuccessResponse](#ZoneSuccessResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---




### createZone
Create zone.



```javascript
// Promise
const promise = platformClient.serviceability.createZone({  body : value });

// Async/Await
const data = await platformClient.serviceability.createZone({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateZoneData](#CreateZoneData) | yes | Request body |


Generate and add a new zone.

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




### getAllStores
Get all stores.



```javascript
// Promise
const promise = platformClient.serviceability.getAllStores();

// Async/Await
const data = await platformClient.serviceability.getAllStores();
```






Retrieve a list of all available stores data.

*Returned Response:*




[GetStoresViewResponse](#GetStoresViewResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getOptimalLocations
Retrieve optimal locations



```javascript
// Promise
const promise = platformClient.serviceability.getOptimalLocations({  body : value });

// Async/Await
const data = await platformClient.serviceability.getOptimalLocations({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [OptimlLocationsRequestSchema](#OptimlLocationsRequestSchema) | yes | Request body |


Retrieve optimal locations based on the specific criteria

*Returned Response:*




[OptimalLocationsResponse](#OptimalLocationsResponse)

Optimal Locations Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---




### updatePincodeAuditHistory
Update pincode audit history.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.updatePincodeAuditHistory({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.updatePincodeAuditHistory({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PincodeMopUpdateAuditHistoryRequest](#PincodeMopUpdateAuditHistoryRequest) | yes | Request body |


Modify and update audit history records for pincode-related activities.

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
Update pincode bulk view.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.updatePincodeBulkView({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.updatePincodeBulkView({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PincodeMopBulkData](#PincodeMopBulkData) | yes | Request body |


Modify and update views related to bulk operations on pincode.

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
Update pincode CoD (Cash on Delivery) listing.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.updatePincodeCoDListing({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.updatePincodeCoDListing({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PincodeCodStatusListingRequest](#PincodeCodStatusListingRequest) | yes | Request body |


Modify and update listings for CoD based on pincode.

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
Update pincode MOP (Mode of Payment) view.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").serviceability.updatePincodeMopView({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").serviceability.updatePincodeMopView({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PincodeMopData](#PincodeMopData) | yes | Request body |


Modify and update views related to pincode MOP.

*Returned Response:*




[PincodeMOPresponse](#PincodeMOPresponse)

Response Data




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

#### [ApplicationConfig](#ApplicationConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | rule_ids | [string]? |  yes  |  |
 | sort | [string]? |  yes  |  |
 | zones | [ZoneConfig](#ZoneConfig)? |  yes  |  |
 

---

#### [ApplicationSelfShipConfig](#ApplicationSelfShipConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | self_ship | [SelfShipResponse](#SelfShipResponse)? |  yes  |  |
 

---

#### [ApplicationSelfShipConfigResponse](#ApplicationSelfShipConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [ApplicationSelfShipConfig](#ApplicationSelfShipConfig)? |  yes  |  |
 | error | [ServiceabilityErrorResponse](#ServiceabilityErrorResponse)? |  yes  |  |
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
 | error | [ServiceabilityErrorResponse](#ServiceabilityErrorResponse)? |  yes  |  |
 | success | boolean |  no  |  |
 

---

#### [ArithmeticOperations](#ArithmeticOperations)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gt | number? |  yes  |  |
 | gte | number? |  yes  |  |
 | lt | number? |  yes  |  |
 | lte | number? |  yes  |  |
 

---

#### [ArticleAssignment](#ArticleAssignment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | level | string? |  yes  |  |
 | strategy | string? |  yes  | The strategy parameter allows users to specify the desired approach or criteria for selecting optimal locations. |
 

---

#### [BulkRegionJobSerializer](#BulkRegionJobSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  |  |
 | country | string |  no  |  |
 | file_path | string? |  yes  |  |
 | region | string |  no  |  |
 

---

#### [BulkRegionResponse](#BulkRegionResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[BulkRegionResponseItemData](#BulkRegionResponseItemData)] |  no  |  |
 | page | [Page](#Page) |  no  |  |
 

---

#### [BulkRegionResponseItemData](#BulkRegionResponseItemData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  |  |
 | batch_id | string |  no  |  |
 | country | string |  no  |  |
 | error_file_path | string? |  yes  |  |
 | failed | number? |  yes  |  |
 | failed_records | [string]? |  yes  |  |
 | file_path | string |  no  |  |
 | region | string |  no  |  |
 | status | string |  no  |  |
 | success | number? |  yes  |  |
 | total | number? |  yes  |  |
 

---

#### [Channel](#Channel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [CommonError](#CommonError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | any? |  yes  |  |
 | status_code | string? |  yes  |  |
 | success | string? |  yes  |  |
 

---

#### [CompanyConfig](#CompanyConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logistics_as_actual | boolean? |  yes  |  |
 | rule_ids | [string] |  no  |  |
 | sort | [string] |  no  |  |
 

---

#### [CompanyCourierPartnerAccountListResponse](#CompanyCourierPartnerAccountListResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[CourierAccountResponse](#CourierAccountResponse)] |  no  |  |
 | page | [Page](#Page) |  no  |  |
 

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

#### [CourierAccount](#CourierAccount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | account_id | string |  no  |  |
 | extension_id | string |  no  |  |
 | is_own_account | boolean |  no  |  |
 | is_self_ship | boolean |  no  |  |
 | scheme_id | string |  no  |  |
 | stage | string |  no  |  |
 

---

#### [CourierAccountResponse](#CourierAccountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | account_id | string |  no  |  |
 | is_own_account | boolean |  no  |  |
 | is_self_ship | boolean |  no  |  |
 | scheme_id | string |  no  |  |
 | scheme_rules | [CourierPartnerSchemeModel](#CourierPartnerSchemeModel) |  no  |  |
 | stage | string |  no  |  |
 

---

#### [CourierPartnerAccountFailureResponse](#CourierPartnerAccountFailureResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | [[ErrorResponse](#ErrorResponse)] |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [CourierPartnerList](#CourierPartnerList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | account_id | string |  no  |  |
 | extension_id | string |  no  |  |
 | is_self_ship | boolean |  no  |  |
 | name | string |  no  |  |
 

---

#### [CourierPartnerRule](#CourierPartnerRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | conditions | [CourierPartnerRuleConditions](#CourierPartnerRuleConditions) |  no  |  |
 | cp_list | [[CourierPartnerList](#CourierPartnerList)]? |  yes  |  |
 | is_active | boolean |  no  |  |
 | name | string |  no  |  |
 | sort | [string] |  no  |  |
 

---

#### [CourierPartnerRuleConditions](#CourierPartnerRuleConditions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_ids | [IntComparisonOperations](#IntComparisonOperations)? |  yes  |  |
 | category_ids | [IntComparisonOperations](#IntComparisonOperations)? |  yes  |  |
 | department_ids | [IntComparisonOperations](#IntComparisonOperations)? |  yes  |  |
 | forward | [LocationRule](#LocationRule)? |  yes  |  |
 | order_place_date | [ArithmeticOperations](#ArithmeticOperations)? |  yes  |  |
 | payment_mode | [StringComparisonOperations](#StringComparisonOperations)? |  yes  |  |
 | product_ids | [IntComparisonOperations](#IntComparisonOperations)? |  yes  |  |
 | product_tags | [StringComparisonOperations](#StringComparisonOperations)? |  yes  |  |
 | reverse | [LocationRule](#LocationRule)? |  yes  |  |
 | shipment_cost | [ArithmeticOperations](#ArithmeticOperations)? |  yes  |  |
 | shipment_volumetric_weight | [ArithmeticOperations](#ArithmeticOperations)? |  yes  |  |
 | shipment_weight | [ArithmeticOperations](#ArithmeticOperations)? |  yes  |  |
 | store_ids | [IntComparisonOperations](#IntComparisonOperations)? |  yes  |  |
 | store_tags | [StringComparisonOperations](#StringComparisonOperations)? |  yes  |  |
 | store_type | [StringComparisonOperations](#StringComparisonOperations)? |  yes  |  |
 | zone_ids | [StringComparisonOperations](#StringComparisonOperations)? |  yes  |  |
 

---

#### [CourierPartnerRulesListResponse](#CourierPartnerRulesListResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[CourierPartnerRule](#CourierPartnerRule)] |  no  |  |
 | page | [Page](#Page) |  no  |  |
 

---

#### [CourierPartnerSchemeFeatures](#CourierPartnerSchemeFeatures)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cold_storage_goods | boolean? |  yes  |  |
 | dangerous_goods | boolean? |  yes  |  |
 | doorstep_exchange | boolean? |  yes  |  |
 | doorstep_qc | boolean? |  yes  |  |
 | doorstep_return | boolean? |  yes  |  |
 | ewaybill | boolean? |  yes  |  |
 | fragile_goods | boolean? |  yes  |  |
 | mps | boolean? |  yes  |  |
 | multi_pick_multi_drop | boolean? |  yes  |  |
 | multi_pick_single_drop | boolean? |  yes  |  |
 | ndr | boolean? |  yes  |  |
 | ndr_attempts | number? |  yes  |  |
 | openbox_delivery | boolean? |  yes  |  |
 | product_installation | boolean? |  yes  |  |
 | qr | boolean? |  yes  |  |
 | restricted_goods | boolean? |  yes  |  |
 | single_pick_multi_drop | boolean? |  yes  |  |
 | status_updates | string? |  yes  |  |
 

---

#### [CourierPartnerSchemeModel](#CourierPartnerSchemeModel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | delivery_type | string |  no  |  |
 | extension_id | string |  no  |  |
 | feature | [CourierPartnerSchemeFeatures](#CourierPartnerSchemeFeatures) |  no  |  |
 | payment_mode | [string] |  no  |  |
 | region | string |  no  |  |
 | scheme_id | string |  no  |  |
 | stage | string |  no  |  |
 | transport_type | string |  no  |  |
 | weight | [ArithmeticOperations](#ArithmeticOperations) |  no  |  |
 

---

#### [CreatedByResponse](#CreatedByResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_id | string? |  yes  |  |
 | username | string? |  yes  |  |
 

---

#### [CreateStoreRuleRequestSchema](#CreateStoreRuleRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | conditions | [StoreRuleConditionSchema](#StoreRuleConditionSchema)? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 | sort | [string]? |  yes  |  |
 | store_priority | [[StorePrioritySchema](#StorePrioritySchema)]? |  yes  |  |
 | tag_based_priority | [string]? |  yes  |  |
 | type_based_priority | [string]? |  yes  |  |
 

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
 | region_type | string |  no  |  |
 | slug | string |  no  |  |
 | store_ids | [number] |  no  |  |
 

---

#### [CustomerRadiusSchema](#CustomerRadiusSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gt | number? |  yes  |  |
 | gte | number? |  yes  |  |
 | lt | number? |  yes  |  |
 | lte | number? |  yes  |  |
 | unit | string |  no  |  |
 

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

#### [EwayBillResponse](#EwayBillResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 

---

#### [FailureResponse](#FailureResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | [[ErrorResponse](#ErrorResponse)] |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [getAppRegionZonesResponse](#getAppRegionZonesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ListViewItems](#ListViewItems)] |  no  |  |
 | page | [[PageSchema](#PageSchema)] |  no  |  |
 

---

#### [GetSingleZoneDataViewResponse](#GetSingleZoneDataViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [GetZoneDataViewItems](#GetZoneDataViewItems) |  no  |  |
 

---

#### [GetStoreRulesApiResponse](#GetStoreRulesApiResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[StoreRuleDataSchema](#StoreRuleDataSchema)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [GetStoresViewResponse](#GetStoresViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ItemResponse](#ItemResponse)]? |  yes  |  |
 | page | [ServiceabilityPageResponse](#ServiceabilityPageResponse) |  no  |  |
 

---

#### [GetZoneByIdSchema](#GetZoneByIdSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | assignment_preference | string? |  yes  |  |
 | channels | [[GetZoneDataViewChannels](#GetZoneDataViewChannels)] |  no  |  |
 | company_id | number? |  yes  |  |
 | is_active | boolean |  no  |  |
 | mapping | [[ZoneMappingType](#ZoneMappingType)] |  no  |  |
 | name | string |  no  |  |
 | product | [ZoneProductTypes](#ZoneProductTypes) |  no  |  |
 | region_type | string |  no  |  |
 | slug | string |  no  |  |
 | store_ids | [number] |  no  |  |
 | stores_count | number |  no  |  |
 | zone_id | string |  no  |  |
 

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
 | product | [ZoneProductTypes](#ZoneProductTypes) |  no  |  |
 | region_type | string? |  yes  |  |
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
 | zones | [[Zone](#Zone)] |  no  |  |
 

---

#### [GstCredentialsResponse](#GstCredentialsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | e_invoice | [EinvoiceResponse](#EinvoiceResponse)? |  yes  |  |
 | e_waybill | [EwayBillResponse](#EwayBillResponse)? |  yes  |  |
 

---

#### [IntComparisonOperations](#IntComparisonOperations)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | includes | [number]? |  yes  |  |
 

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
 | channels | [[ListViewChannels](#ListViewChannels)] |  no  |  |
 | company_id | number |  no  |  |
 | is_active | boolean |  no  |  |
 | name | string |  no  |  |
 | regions_count | number |  no  |  |
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
 | page | [ZoneDataItem](#ZoneDataItem) |  no  |  |
 

---

#### [ListViewSummary](#ListViewSummary)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_active_zones | number |  no  |  |
 | total_pincodes_served | number |  no  |  |
 | total_zones | number |  no  |  |
 

---

#### [LocationDetailsServiceability](#LocationDetailsServiceability)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | city | string? |  yes  | The city of the serviceability location. |
 | country | string |  no  | The country of the serviceability location. |
 | country_iso_code | string |  no  | The ISO code of the country. |
 | location | [ServiceabilityLocation](#ServiceabilityLocation)? |  yes  |  |
 | pincode | string? |  yes  | The pincode of the serviceability location. |
 | sector | string? |  yes  | The sector of the serviceability location. |
 | state | string? |  yes  | The state of the serviceability location. |
 

---

#### [LocationRule](#LocationRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | includes | [[LocationRuleValues](#LocationRuleValues)]? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [LocationRuleValues](#LocationRuleValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | id | string |  no  |  |
 | name | string? |  yes  |  |
 | parent_id | string? |  yes  |  |
 | parent_ids | [string]? |  yes  |  |
 | sub_type | string? |  yes  |  |
 

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

#### [OptimalLocationArticlesResponse](#OptimalLocationArticlesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | article_assignment | [ArticleAssignment](#ArticleAssignment) |  no  |  |
 | assign_locations | [number] |  no  |  |
 | group_id | string? |  yes  |  |
 | ignore_locations | [number] |  no  |  |
 | is_primary_item | boolean? |  yes  |  |
 | item_id | number |  no  |  |
 | meta | string? |  yes  |  |
 | mto_quantity | number |  no  |  |
 | price_effective | number |  no  |  |
 | quantity | number |  no  |  |
 | seller_id | number? |  yes  |  |
 | size | string |  no  |  |
 | uid | string |  no  |  |
 

---

#### [OptimalLocationAssignedStoresResponse](#OptimalLocationAssignedStoresResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[OptimalLocationArticlesResponse](#OptimalLocationArticlesResponse)] |  no  |  |
 | store_id | number |  no  |  |
 

---

#### [OptimalLocationsArticles](#OptimalLocationsArticles)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article_assignment | [ArticleAssignment](#ArticleAssignment) |  no  |  |
 | assign_locations | [number] |  no  |  |
 | group_id | string? |  yes  |  |
 | ignore_locations | [number] |  no  |  |
 | is_primary_item | boolean? |  yes  |  |
 | item_id | number |  no  |  |
 | meta | string? |  yes  |  |
 | quantity | string |  no  |  |
 | seller_id | number? |  yes  |  |
 | size | string |  no  |  |
 | store_id | number? |  yes  |  |
 

---

#### [OptimalLocationsResponse](#OptimalLocationsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | assigned_stores | [[OptimalLocationAssignedStoresResponse](#OptimalLocationAssignedStoresResponse)] |  no  |  |
 

---

#### [OptimlLocationsRequestSchema](#OptimlLocationsRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article | [OptimalLocationsArticles](#OptimalLocationsArticles)? |  yes  |  |
 | channel_id | string |  no  |  |
 | channel_identifier | string? |  yes  |  |
 | channel_type | string |  no  |  |
 | to_serviceability | [LocationDetailsServiceability](#LocationDetailsServiceability) |  no  |  |
 

---

#### [PackageMaterial](#PackageMaterial)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | auto_calculate | boolean? |  yes  |  |
 | channels | [[Channel](#Channel)] |  no  |  |
 | error_rate | number |  no  |  |
 | height | number |  no  |  |
 | length | number |  no  |  |
 | max_weight | number? |  yes  |  |
 | media | [string]? |  yes  |  |
 | name | string |  no  |  |
 | package_type | string |  no  |  |
 | package_vol_weight | number? |  yes  |  |
 | rules | [[PackageMaterialRule](#PackageMaterialRule)]? |  yes  |  |
 | size | string |  no  |  |
 | status | string |  no  |  |
 | store_ids | [number] |  no  |  |
 | track_inventory | boolean? |  yes  |  |
 | weight | number |  no  |  |
 | width | number |  no  |  |
 

---

#### [PackageMaterialList](#PackageMaterialList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [PackageMaterialResponse](#PackageMaterialResponse)? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [PackageMaterialResponse](#PackageMaterialResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | auto_calculate | boolean? |  yes  |  |
 | channels | [[Channel](#Channel)] |  no  |  |
 | error_rate | number |  no  |  |
 | height | number |  no  |  |
 | id | string? |  yes  |  |
 | item_id | number? |  yes  |  |
 | length | number |  no  |  |
 | max_weight | number? |  yes  |  |
 | media | [string]? |  yes  |  |
 | name | string |  no  |  |
 | package_type | string |  no  |  |
 | package_vol_weight | number? |  yes  |  |
 | rules | [[PackageMaterialRule](#PackageMaterialRule)]? |  yes  |  |
 | size | string |  no  |  |
 | status | string |  no  |  |
 | store_ids | [number] |  no  |  |
 | track_inventory | boolean? |  yes  |  |
 | weight | number |  no  |  |
 | width | number |  no  |  |
 

---

#### [PackageMaterialRule](#PackageMaterialRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | quantity | [PackageMaterialRuleQuantity](#PackageMaterialRuleQuantity)? |  yes  |  |
 | rule_id | string? |  yes  |  |
 | weight | number? |  yes  |  |
 

---

#### [PackageMaterialRuleList](#PackageMaterialRuleList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [PackageRuleResponse](#PackageRuleResponse)? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [PackageMaterialRuleQuantity](#PackageMaterialRuleQuantity)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | number? |  yes  |  |
 | min | number? |  yes  |  |
 

---

#### [PackageRule](#PackageRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category_id | [PackageRuleCategory](#PackageRuleCategory)? |  yes  |  |
 | company_id | number |  no  |  |
 | is_active | boolean? |  yes  |  |
 | name | string |  no  |  |
 | product_id | [PackageRuleProduct](#PackageRuleProduct)? |  yes  |  |
 | product_tag | [PackageRuleProductTag](#PackageRuleProductTag)? |  yes  |  |
 | type | string |  no  |  |
 

---

#### [PackageRuleCategory](#PackageRuleCategory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | includes | [number]? |  yes  |  |
 

---

#### [PackageRuleProduct](#PackageRuleProduct)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | includes | [number]? |  yes  |  |
 

---

#### [PackageRuleProductTag](#PackageRuleProductTag)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | includes | [string]? |  yes  |  |
 

---

#### [PackageRuleResponse](#PackageRuleResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category_id | [PackageRuleCategory](#PackageRuleCategory)? |  yes  |  |
 | company_id | number |  no  |  |
 | id | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | name | string |  no  |  |
 | product_id | [PackageRuleProduct](#PackageRuleProduct)? |  yes  |  |
 | product_tag | [PackageRuleProductTag](#PackageRuleProductTag)? |  yes  |  |
 | type | string |  no  |  |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | has_previous | boolean |  no  |  |
 | item_total | number |  no  |  |
 | size | number |  no  |  |
 | type | string |  no  |  |
 

---

#### [PageSchema](#PageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | item_total | number |  no  |  |
 | size | number |  no  |  |
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

#### [RulePriorityRequest](#RulePriorityRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | priority | number |  no  |  |
 | rule_id | string |  no  |  |
 

---

#### [RulePriorityResponse](#RulePriorityResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean? |  yes  |  |
 

---

#### [SchemeRules](#SchemeRules)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | feature | [SchemeRulesFeatures](#SchemeRulesFeatures)? |  yes  |  |
 | payment_mode | [string]? |  yes  |  |
 | region | string? |  yes  |  |
 | transport_type | [string]? |  yes  |  |
 | weight | [ArithmeticOperations](#ArithmeticOperations)? |  yes  |  |
 

---

#### [SchemeRulesFeatures](#SchemeRulesFeatures)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | battery_operated | boolean? |  yes  |  |
 | e_waybill | boolean? |  yes  |  |
 | flammable | boolean? |  yes  |  |
 | hazmat | boolean? |  yes  |  |
 | multi_part_shipments | boolean? |  yes  |  |
 | quality_check | boolean? |  yes  |  |
 | quick_response_code | boolean? |  yes  |  |
 

---

#### [SelfShipResponse](#SelfShipResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_active | boolean |  no  |  |
 | tat | number |  no  |  |
 

---

#### [ServiceabilityErrorResponse](#ServiceabilityErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | type | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [ServiceabilityLocation](#ServiceabilityLocation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | latitude | string |  no  | The latitude of the serviceability location. |
 | longitude | string |  no  | The longitude of the serviceability location. |
 

---

#### [ServiceabilityModel](#ServiceabilityModel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_first_mile | boolean |  no  |  |
 | is_installation | boolean |  no  |  |
 | is_last_mile | boolean |  no  |  |
 | is_qc | boolean |  no  |  |
 | is_return | boolean |  no  |  |
 | lm_cod_limit | number |  no  |  |
 | pickup_cutoff | string |  no  |  |
 | route_code | string |  no  |  |
 

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

#### [StorePrioritySchema](#StorePrioritySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [StoreRuleConditionSchema](#StoreRuleConditionSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_ids | [IntComparisonOperations](#IntComparisonOperations)? |  yes  |  |
 | category_ids | [IntComparisonOperations](#IntComparisonOperations)? |  yes  |  |
 | customer_radius | [CustomerRadiusSchema](#CustomerRadiusSchema)? |  yes  |  |
 | department_ids | [IntComparisonOperations](#IntComparisonOperations)? |  yes  |  |
 | order_place_date | [ArithmeticOperations](#ArithmeticOperations)? |  yes  |  |
 | product_ids | [IntComparisonOperations](#IntComparisonOperations)? |  yes  |  |
 | product_tags | [StringComparisonOperations](#StringComparisonOperations)? |  yes  |  |
 | store_tags | [StringComparisonOperations](#StringComparisonOperations)? |  yes  |  |
 | store_type | [StringComparisonOperations](#StringComparisonOperations)? |  yes  |  |
 | to_location | [LocationRule](#LocationRule)? |  yes  |  |
 | zone_ids | [StringComparisonOperations](#StringComparisonOperations)? |  yes  |  |
 

---

#### [StoreRuleConfigData](#StoreRuleConfigData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | rule_ids | [string]? |  yes  |  |
 | sort | [string]? |  yes  |  |
 | store_priority | [[StorePrioritySchema](#StorePrioritySchema)]? |  yes  |  |
 | tag_based_priority | [string]? |  yes  |  |
 | type_based_priority | [string]? |  yes  |  |
 

---

#### [StoreRuleDataSchema](#StoreRuleDataSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application_id | string? |  yes  |  |
 | company_id | number? |  yes  |  |
 | conditions | [StoreRuleConditionSchema](#StoreRuleConditionSchema)? |  yes  |  |
 | id | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 | sort | [string]? |  yes  |  |
 | store_priority | [[StorePrioritySchema](#StorePrioritySchema)]? |  yes  |  |
 | tag_based_priority | [string]? |  yes  |  |
 | type_based_priority | [string]? |  yes  |  |
 

---

#### [StoreRuleResponseSchema](#StoreRuleResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | conditions | [StoreRuleConditionSchema](#StoreRuleConditionSchema)? |  yes  |  |
 | id | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 | sort | [string]? |  yes  |  |
 | store_priority | [[StorePrioritySchema](#StorePrioritySchema)]? |  yes  |  |
 | tag_based_priority | [string]? |  yes  |  |
 | type | string? |  yes  |  |
 | type_based_priority | [string]? |  yes  |  |
 

---

#### [StoreRuleUpdateResponseSchema](#StoreRuleUpdateResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application_id | string? |  yes  |  |
 | company_id | number? |  yes  |  |
 | conditions | [StoreRuleConditionSchema](#StoreRuleConditionSchema)? |  yes  |  |
 | id | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 | sort | [string]? |  yes  |  |
 | store_priority | [[StorePrioritySchema](#StorePrioritySchema)]? |  yes  |  |
 | tag_based_priority | [string]? |  yes  |  |
 | type | string? |  yes  |  |
 | type_based_priority | [string]? |  yes  |  |
 

---

#### [StringComparisonOperations](#StringComparisonOperations)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | includes | [string]? |  yes  |  |
 

---

#### [TimmingResponse](#TimmingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | closing | [OpeningClosing](#OpeningClosing)? |  yes  |  |
 | open | boolean? |  yes  |  |
 | opening | [OpeningClosing](#OpeningClosing)? |  yes  |  |
 | weekday | string? |  yes  |  |
 

---

#### [UpdateZoneConfigRequest](#UpdateZoneConfigRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | serviceability_type | string? |  yes  |  |
 

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

#### [Zone](#Zone)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | assignment_preference | string |  no  |  |
 | is_active | boolean |  no  |  |
 | name | string |  no  |  |
 | slug | string |  no  |  |
 | store_ids | [number] |  no  |  |
 | tags | [string] |  no  |  |
 | type | string |  no  |  |
 | zone_id | string |  no  |  |
 

---

#### [ZoneConfig](#ZoneConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | serviceability_type | string? |  yes  |  |
 

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




