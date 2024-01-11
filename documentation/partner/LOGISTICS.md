




##### [Back to Partner docs](./README.md)

## Logistics Methods
Serviceability API's


Default
* [bulkServiceability](#bulkserviceability)
* [bulkTat](#bulktat)
* [createCourierPartnerAccount](#createcourierpartneraccount)
* [createCourierPartnerScheme](#createcourierpartnerscheme)
* [getBulkServiceability](#getbulkserviceability)
* [getBulkTat](#getbulktat)
* [getCountries](#getcountries)
* [getCourierPartnerAccount](#getcourierpartneraccount)
* [getCourierPartnerAccounts](#getcourierpartneraccounts)
* [getSampleFileServiceabilityStatus](#getsamplefileserviceabilitystatus)
* [sampleFileServiceability](#samplefileserviceability)
* [updateCourierPartnerAccount](#updatecourierpartneraccount)
* [updateCourierPartnerScheme](#updatecourierpartnerscheme)




## Methods with example and description





### bulkServiceability
Serviceability Import or Export



```javascript
// Promise
const promise = partnerClient.logistics.bulkServiceability({  organizationId : value,
 extensionId : value,
 schemeId : value,
 body : value });

// Async/Await
const data = await partnerClient.logistics.bulkServiceability({  organizationId : value,
 extensionId : value,
 schemeId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | Unique Identifier of Organization |   
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
const promise = partnerClient.logistics.bulkTat({  organizationId : value,
 extensionId : value,
 schemeId : value,
 body : value });

// Async/Await
const data = await partnerClient.logistics.bulkTat({  organizationId : value,
 extensionId : value,
 schemeId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | Unique Identifier of Organization |   
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
const promise = partnerClient.logistics.createCourierPartnerAccount({  organizationId : value,
 body : value });

// Async/Await
const data = await partnerClient.logistics.createCourierPartnerAccount({  organizationId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | Unique Identifier of Organization |  
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


### createCourierPartnerScheme
Create Scheme for courier partner extension



```javascript
// Promise
const promise = partnerClient.logistics.createCourierPartnerScheme({  organizationId : value,
 body : value });

// Async/Await
const data = await partnerClient.logistics.createCourierPartnerScheme({  organizationId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | Unique Identifier of Organization |  
| body | [CourierPartnerSchemeModel](#CourierPartnerSchemeModel) | yes | Request body |


Create Scheme for courier partner extension

*Returned Response:*




[CourierPartnerSchemeModel](#CourierPartnerSchemeModel)

Success Response Status




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getBulkServiceability
Get Region Serviceability Bulk History



```javascript
// Promise
const promise = partnerClient.logistics.getBulkServiceability({  organizationId : value,
 extensionId : value,
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
const data = await partnerClient.logistics.getBulkServiceability({  organizationId : value,
 extensionId : value,
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
| organizationId | string | yes | Unique Identifier of Organization |   
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
const promise = partnerClient.logistics.getBulkTat({  organizationId : value,
 extensionId : value,
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
const data = await partnerClient.logistics.getBulkTat({  organizationId : value,
 extensionId : value,
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
| organizationId | string | yes | Unique Identifier of Organization |   
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


### getCountries
Get all countries and associated data.



```javascript
// Promise
const promise = partnerClient.logistics.getCountries({  organizationId : value,
 onboarding : value,
 pageNo : value,
 pageSize : value,
 q : value });

// Async/Await
const data = await partnerClient.logistics.getCountries({  organizationId : value,
 onboarding : value,
 pageNo : value,
 pageSize : value,
 q : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | Unique Identifier of Organization |    
| onboarding | boolean | no | Only fetch countries which allowed for onboard on Platform. |    
| pageNo | number | no | page number. |    
| pageSize | number | no | page size. |    
| q | string | no | search. |  



Retrieve of all countries.

*Returned Response:*




[GetCountries](#GetCountries)

Successfully retrieved all countries with associated data.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Country List 1</i></summary>

```json
{
  "value": {
    "items": [
      {
        "name": "INDIA",
        "sub_type": "country",
        "display_name": "India",
        "uid": "64c6ac280000000000000000",
        "iso2": "IN",
        "iso3": "IND",
        "timezones": [
          "Asia/Kolkata"
        ],
        "currency": "INR",
        "phone_code": "+91",
        "hierarchy": [
          {
            "display_name": "State",
            "slug": "state"
          },
          {
            "display_name": "City",
            "slug": "city"
          },
          {
            "display_name": "Pincode",
            "slug": "pincode"
          }
        ]
      },
      {
        "name": "UNITED STATES",
        "sub_type": "country",
        "uid": "66a931280000000000000000",
        "iso2": "US",
        "iso3": "USA",
        "timezones": [
          "America/St_Johns",
          "America/Halifax",
          "America/Glace_Bay",
          "America/Moncton",
          "America/Goose_Bay",
          "America/Blanc-Sablon",
          "America/Toronto",
          "America/Iqaluit",
          "America/Atikokan",
          "America/Winnipeg",
          "America/Resolute",
          "America/Rankin_Inlet",
          "America/Regina",
          "America/Swift_Current",
          "America/Edmonton",
          "America/Cambridge_Bay",
          "America/Inuvik",
          "America/Creston",
          "America/Dawson_Creek",
          "America/Fort_Nelson",
          "America/Whitehorse",
          "America/Dawson",
          "America/Vancouver"
        ],
        "currency": "USD",
        "phone_code": "+1",
        "hierarchy": [
          {
            "display_name": "State",
            "slug": "state"
          },
          {
            "display_name": "City",
            "slug": "city"
          },
          {
            "display_name": "Zipcode",
            "slug": "pincode"
          }
        ]
      }
    ],
    "page": {
      "current": 1,
      "has_next": true,
      "has_previous": false,
      "item_total": 2,
      "size": 1,
      "type": "number"
    }
  }
}
```
</details>

<details>
<summary><i>&nbsp; Country List 2</i></summary>

```json
{
  "value": {
    "items": [
      {
        "name": "United Arab Emirates",
        "display_name": "United Arab Emirates",
        "sub_type": "country",
        "uid": "669ea5280000000000000000",
        "iso2": "AE",
        "iso3": "ARE",
        "timezones": [
          "Asia/Dubai"
        ],
        "currency": "DIR",
        "phone_code": "+971",
        "hierarchy": [
          {
            "display_name": "City",
            "slug": "city"
          },
          {
            "display_name": "Area",
            "slug": "sector"
          }
        ]
      }
    ],
    "page": {
      "current": 1,
      "has_next": true,
      "has_previous": false,
      "item_total": 1,
      "size": 1,
      "type": "number"
    }
  }
}
```
</details>

</details>









---


### getCourierPartnerAccount
Getting Courier Account of a company from database.



```javascript
// Promise
const promise = partnerClient.logistics.getCourierPartnerAccount({  organizationId : value,
 accountId : value });

// Async/Await
const data = await partnerClient.logistics.getCourierPartnerAccount({  organizationId : value,
 accountId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | Unique Identifier of Organization |   
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
const promise = partnerClient.logistics.getCourierPartnerAccounts({  organizationId : value,
 pageNo : value,
 pageSize : value,
 stage : value,
 paymentMode : value,
 transportType : value });

// Async/Await
const data = await partnerClient.logistics.getCourierPartnerAccounts({  organizationId : value,
 pageNo : value,
 pageSize : value,
 stage : value,
 paymentMode : value,
 transportType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | Unique Identifier of Organization |    
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


### getSampleFileServiceabilityStatus
Get Serviceability TAT sample files generator status



```javascript
// Promise
const promise = partnerClient.logistics.getSampleFileServiceabilityStatus({  organizationId : value,
 pageNo : value,
 pageSize : value,
 batchId : value });

// Async/Await
const data = await partnerClient.logistics.getSampleFileServiceabilityStatus({  organizationId : value,
 pageNo : value,
 pageSize : value,
 batchId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | Unique Identifier of Organization |    
| pageNo | number | no | index of the item to start returning with |    
| pageSize | number | no | determines the items to be displayed in a page |    
| batchId | string | no | Batch id of the execution |  



Get Serviceability TAT sample file generator status

*Returned Response:*




[BulkRegionServiceabilityTatResponse](#BulkRegionServiceabilityTatResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### sampleFileServiceability
Sample File Download



```javascript
// Promise
const promise = partnerClient.logistics.sampleFileServiceability({  organizationId : value,
 body : value });

// Async/Await
const data = await partnerClient.logistics.sampleFileServiceability({  organizationId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | Unique Identifier of Organization |  
| body | [BulkRegionServiceabilityTatRequest](#BulkRegionServiceabilityTatRequest) | yes | Request body |


Sample File Download

*Returned Response:*




[BulkRegionServiceabilityTatResponseItemData](#BulkRegionServiceabilityTatResponseItemData)

Success Response Status




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
const promise = partnerClient.logistics.updateCourierPartnerAccount({  organizationId : value,
 accountId : value,
 body : value });

// Async/Await
const data = await partnerClient.logistics.updateCourierPartnerAccount({  organizationId : value,
 accountId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | Unique Identifier of Organization |   
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


### updateCourierPartnerScheme
Update Scheme for courier partner extension



```javascript
// Promise
const promise = partnerClient.logistics.updateCourierPartnerScheme({  organizationId : value,
 schemeId : value,
 body : value });

// Async/Await
const data = await partnerClient.logistics.updateCourierPartnerScheme({  organizationId : value,
 schemeId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | Unique Identifier of Organization |   
| schemeId | string | yes | Unique Identifier of Scheme |  
| body | [CourierPartnerSchemeUpdateRequest](#CourierPartnerSchemeUpdateRequest) | yes | Request body |


Update Scheme for courier partner extension

*Returned Response:*




[CourierPartnerSchemeUpdateRequest](#CourierPartnerSchemeUpdateRequest)

Success Response Status




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---




### Schemas


#### [ArithmeticOperations](#ArithmeticOperations)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gt | number? |  yes  |  |
 | gte | number? |  yes  |  |
 | lt | number? |  yes  |  |
 | lte | number? |  yes  |  |
 

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

#### [BulkRegionServiceabilityTatRequest](#BulkRegionServiceabilityTatRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string |  no  |  |
 | region | string |  no  |  |
 | type | string |  no  |  |
 

---

#### [BulkRegionServiceabilityTatResponse](#BulkRegionServiceabilityTatResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[BulkRegionServiceabilityTatResponseItemData](#BulkRegionServiceabilityTatResponseItemData)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [BulkRegionServiceabilityTatResponseItemData](#BulkRegionServiceabilityTatResponseItemData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | batch_id | string? |  yes  |  |
 | country | string? |  yes  |  |
 | failed_records | [string]? |  yes  |  |
 | file_path | string? |  yes  |  |
 | region | string? |  yes  |  |
 | status | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [CompanyCourierPartnerAccountListResponse](#CompanyCourierPartnerAccountListResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[CourierAccountResponse](#CourierAccountResponse)] |  no  |  |
 | page | [Page](#Page) |  no  |  |
 

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
 | name | string |  no  |  |
 | payment_mode | [string] |  no  |  |
 | region | string |  no  |  |
 | scheme_id | string |  no  |  |
 | stage | string |  no  |  |
 | transport_type | string |  no  |  |
 | weight | [ArithmeticOperations](#ArithmeticOperations) |  no  |  |
 

---

#### [CourierPartnerSchemeUpdateRequest](#CourierPartnerSchemeUpdateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | delivery_type | string |  no  |  |
 | feature | [CourierPartnerSchemeFeatures](#CourierPartnerSchemeFeatures) |  no  |  |
 | name | string |  no  |  |
 | payment_mode | [string] |  no  |  |
 | region | string |  no  |  |
 | stage | string |  no  |  |
 | transport_type | string |  no  |  |
 | weight | [ArithmeticOperations](#ArithmeticOperations) |  no  |  |
 

---

#### [ErrorResponse](#ErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | type | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [FailureResponse](#FailureResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | [[ErrorResponse](#ErrorResponse)] |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [GetCountries](#GetCountries)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[GetCountriesItems](#GetCountriesItems)] |  no  |  |
 | page | [Page](#Page) |  no  |  |
 

---

#### [GetCountriesItems](#GetCountriesItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency | string? |  yes  |  |
 | display_name | string? |  yes  |  |
 | hierarchy | [[HierarchyItems](#HierarchyItems)]? |  yes  |  |
 | id | string? |  yes  |  |
 | iso2 | string? |  yes  |  |
 | iso3 | string? |  yes  |  |
 | latitude | string? |  yes  |  |
 | longitude | string? |  yes  |  |
 | name | string? |  yes  |  |
 | phone_code | string? |  yes  |  |
 | timezones | [string]? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [HierarchyItems](#HierarchyItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  | Current page number |
 | has_next | boolean? |  yes  | Next page available |
 | has_previous | boolean? |  yes  | Previous page available |
 | item_total | number? |  yes  | total records |
 | size | number? |  yes  | Current page size |
 

---




