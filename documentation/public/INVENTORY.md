




##### [Back to Public docs](./README.md)

## Inventory Methods


* [getApiKey](#getapikey)
* [getConfigByApiKey](#getconfigbyapikey)
* [getJobByCode](#getjobbycode)
* [getJobCodesMetrics](#getjobcodesmetrics)
* [getJobConfigByIntegrationType](#getjobconfigbyintegrationtype)
* [saveJobCodesMetrics](#savejobcodesmetrics)



## Methods with example and description




### getApiKey
Get apikey  for  Company  to call other Slingshot Configuration APIs 



```javascript
// Promise
const promise = inventory.getApiKey({  userName : value,
 password : value });

// Async/Await
const data = await inventory.getApiKey({  userName : value,
 password : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| userName | string | yes | Integration id |   
| password | string | yes | company/store token |  



REST Endpoint that returns apikey by username by password

*Returned Response:*




[ResponseEnvelopeApikeyModel](#ResponseEnvelopeApikeyModel)

Successful operation




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getConfigByApiKey
Get Slingshot Configuration Of  A Company using API key



```javascript
// Promise
const promise = inventory.getConfigByApiKey({  apikey : value });

// Async/Await
const data = await inventory.getConfigByApiKey({  apikey : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| apikey | string | yes | Api key |  



REST Endpoint that returns all configuration detail of a company

*Returned Response:*




[ResponseEnvelopeSlingshotConfigurationDetail](#ResponseEnvelopeSlingshotConfigurationDetail)

Successful operation




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getJobByCode
Get Job Config By Code



```javascript
// Promise
const promise = inventory.getJobByCode({  code : value });

// Async/Await
const data = await inventory.getJobByCode({  code : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| code | string | yes | Job Code |  



REST Endpoint that returns job config by code

*Returned Response:*




[ResponseEnvelopeJobConfigDTO](#ResponseEnvelopeJobConfigDTO)

Successful operation




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getJobCodesMetrics
Find all the JobCodes from Metrics Collection based on the field Values



```javascript
// Promise
const promise = inventory.getJobCodesMetrics({  dailyJob : value,
 jobCode : value });

// Async/Await
const data = await inventory.getJobCodesMetrics({  dailyJob : value,
 jobCode : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| dailyJob | boolean | no | Daily Job Flag |    
| jobCode | string | no | Email Job Code |  



Endpoint to return all JobCodes present in Metrics Collection

*Returned Response:*




[ResponseEnvelopeObject](#ResponseEnvelopeObject)

Successful operation




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getJobConfigByIntegrationType
Get Job Configs By Integration Type



```javascript
// Promise
const promise = inventory.getJobConfigByIntegrationType({  integrationType : value,
 disable : value });

// Async/Await
const data = await inventory.getJobConfigByIntegrationType({  integrationType : value,
 disable : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| integrationType | string | yes | Integration Type |    
| disable | boolean | no | JobConfig current state |  



REST Endpoint that returns all job Configs by Integration Type

*Returned Response:*




[ResponseEnvelopeListJobConfigDTO](#ResponseEnvelopeListJobConfigDTO)

Successful operation




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### saveJobCodesMetrics
Save JobCode Metrics



```javascript
// Promise
const promise = inventory.saveJobCodesMetrics({  body : value });

// Async/Await
const data = await inventory.saveJobCodesMetrics({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [EmailJobMetrics](#EmailJobMetrics) | yes | Request body |


Endpoint to save JobCode Metrics

*Returned Response:*




[ResponseEnvelopeEmailJobMetrics](#ResponseEnvelopeEmailJobMetrics)

JobCode Metrics entry Created Successfully




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas


#### [ApikeyModel](#ApikeyModel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error_message | string |  no  |  |
 | session_id | string |  no  |  |
 

---

#### [DataTresholdDTO](#DataTresholdDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | min_price | number |  no  |  |
 | period_threshold | number |  no  |  |
 | period_threshold_type | string |  no  |  |
 | period_type_list | [[GenericDTO](#GenericDTO)] |  no  |  |
 | safe_stock | number |  no  |  |
 

---

#### [EmailJobMetrics](#EmailJobMetrics)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | daily_job | boolean |  no  |  |
 | executed | boolean |  no  |  |
 | id | string |  no  |  |
 | job_code | string |  no  |  |
 | last_executed_on | string |  no  |  |
 

---

#### [GCompany](#GCompany)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | gstores | [[GStore](#GStore)] |  no  |  |
 | integration | string |  no  |  |
 | level | string |  no  |  |
 | name | string |  no  |  |
 | opted | boolean |  no  |  |
 | permissions | [string] |  no  |  |
 | stores | [[GStore](#GStore)] |  no  |  |
 | token | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [GenericDTO](#GenericDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [GStore](#GStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | code | string |  no  |  |
 | data | [StoreData](#StoreData) |  no  |  |
 | integration | string |  no  |  |
 | level | string |  no  |  |
 | name | string |  no  |  |
 | opted | boolean |  no  |  |
 | permissions | [string] |  no  |  |
 | token | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [JobConfigDTO](#JobConfigDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | alias | string |  no  |  |
 | company_id | number |  yes  |  |
 | company_name | string |  no  |  |
 | integration | string |  yes  |  |
 | integration_data | string |  no  |  |
 | job_code | string |  no  |  |
 | task_details | [TaskDTO](#TaskDTO) |  no  |  |
 | threshold_details | [DataTresholdDTO](#DataTresholdDTO) |  no  |  |
 

---

#### [Metum](#Metum)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | name | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | has_previous | boolean |  no  |  |
 | item_total | number |  no  |  |
 | next_id | string |  no  |  |
 | size | number |  no  |  |
 | type | string |  yes  |  |
 

---

#### [ResponseEnvelopeApikeyModel](#ResponseEnvelopeApikeyModel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string |  no  |  |
 | exception | string |  no  |  |
 | http_status | string |  no  |  |
 | items | [ApikeyModel](#ApikeyModel) |  no  |  |
 | message | string |  no  |  |
 | page | [Page](#Page) |  no  |  |
 | payload | [ApikeyModel](#ApikeyModel) |  no  |  |
 | status | number |  no  |  |
 | timestamp | string |  no  |  |
 | total_time_taken_in_millis | number |  no  |  |
 | trace_id | string |  no  |  |
 

---

#### [ResponseEnvelopeEmailJobMetrics](#ResponseEnvelopeEmailJobMetrics)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string |  no  |  |
 | exception | string |  no  |  |
 | http_status | string |  no  |  |
 | items | [EmailJobMetrics](#EmailJobMetrics) |  no  |  |
 | message | string |  no  |  |
 | page | [Page](#Page) |  no  |  |
 | payload | [EmailJobMetrics](#EmailJobMetrics) |  no  |  |
 | status | number |  no  |  |
 | timestamp | string |  no  |  |
 | total_time_taken_in_millis | number |  no  |  |
 | trace_id | string |  no  |  |
 

---

#### [ResponseEnvelopeJobConfigDTO](#ResponseEnvelopeJobConfigDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string |  no  |  |
 | exception | string |  no  |  |
 | http_status | string |  no  |  |
 | items | [JobConfigDTO](#JobConfigDTO) |  no  |  |
 | message | string |  no  |  |
 | page | [Page](#Page) |  no  |  |
 | payload | [JobConfigDTO](#JobConfigDTO) |  no  |  |
 | status | number |  no  |  |
 | timestamp | string |  no  |  |
 | total_time_taken_in_millis | number |  no  |  |
 | trace_id | string |  no  |  |
 

---

#### [ResponseEnvelopeListJobConfigDTO](#ResponseEnvelopeListJobConfigDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string |  no  |  |
 | exception | string |  no  |  |
 | http_status | string |  no  |  |
 | items | [[JobConfigDTO](#JobConfigDTO)] |  no  |  |
 | message | string |  no  |  |
 | page | [Page](#Page) |  no  |  |
 | payload | [[JobConfigDTO](#JobConfigDTO)] |  no  |  |
 | status | number |  no  |  |
 | timestamp | string |  no  |  |
 | total_time_taken_in_millis | number |  no  |  |
 | trace_id | string |  no  |  |
 

---

#### [ResponseEnvelopeObject](#ResponseEnvelopeObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string |  no  |  |
 | exception | string |  no  |  |
 | http_status | string |  no  |  |
 | items | string |  no  |  |
 | message | string |  no  |  |
 | page | [Page](#Page) |  no  |  |
 | payload | string |  no  |  |
 | status | number |  no  |  |
 | timestamp | string |  no  |  |
 | total_time_taken_in_millis | number |  no  |  |
 | trace_id | string |  no  |  |
 

---

#### [ResponseEnvelopeSlingshotConfigurationDetail](#ResponseEnvelopeSlingshotConfigurationDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string |  no  |  |
 | exception | string |  no  |  |
 | http_status | string |  no  |  |
 | items | [SlingshotConfigurationDetail](#SlingshotConfigurationDetail) |  no  |  |
 | message | string |  no  |  |
 | page | [Page](#Page) |  no  |  |
 | payload | [SlingshotConfigurationDetail](#SlingshotConfigurationDetail) |  no  |  |
 | status | number |  no  |  |
 | timestamp | string |  no  |  |
 | total_time_taken_in_millis | number |  no  |  |
 | trace_id | string |  no  |  |
 

---

#### [SlingshotConfigurationDetail](#SlingshotConfigurationDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | companies | [[GCompany](#GCompany)] |  no  |  |
 | integration | [SlingshotIntegration](#SlingshotIntegration) |  no  |  |
 

---

#### [SlingshotIntegration](#SlingshotIntegration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | description | string |  no  |  |
 | meta | [[Metum](#Metum)] |  no  |  |
 | name | string |  no  |  |
 | slug | string |  no  |  |
 

---

#### [StoreData](#StoreData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | location_id | string |  no  |  |
 

---

#### [TaskDTO](#TaskDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | group_list | [[GenericDTO](#GenericDTO)] |  no  |  |
 | type | number |  no  |  |
 

---




