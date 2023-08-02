




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
const promise = publicClient.inventory.getApiKey({  userName : value,
 password : value });

// Async/Await
const data = await publicClient.inventory.getApiKey({  userName : value,
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
const promise = publicClient.inventory.getConfigByApiKey({  apikey : value });

// Async/Await
const data = await publicClient.inventory.getConfigByApiKey({  apikey : value });
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
const promise = publicClient.inventory.getJobByCode({  code : value });

// Async/Await
const data = await publicClient.inventory.getJobByCode({  code : value });
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
const promise = publicClient.inventory.getJobCodesMetrics({  dailyJob : value,
 jobCode : value });

// Async/Await
const data = await publicClient.inventory.getJobCodesMetrics({  dailyJob : value,
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
const promise = publicClient.inventory.getJobConfigByIntegrationType({  integrationType : value,
 disable : value });

// Async/Await
const data = await publicClient.inventory.getJobConfigByIntegrationType({  integrationType : value,
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
const promise = publicClient.inventory.saveJobCodesMetrics({  body : value });

// Async/Await
const data = await publicClient.inventory.saveJobCodesMetrics({  body : value });
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
 | error_message | string? |  yes  |  |
 | session_id | string? |  yes  |  |
 

---

#### [DataTresholdDTO](#DataTresholdDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | min_price | number? |  yes  |  |
 | period_threshold | number? |  yes  |  |
 | period_threshold_type | string? |  yes  |  |
 | period_type_list | [[GenericDTO](#GenericDTO)]? |  yes  |  |
 | safe_stock | number? |  yes  |  |
 

---

#### [EmailJobMetrics](#EmailJobMetrics)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | daily_job | boolean? |  yes  |  |
 | executed | boolean? |  yes  |  |
 | id | string? |  yes  |  |
 | job_code | string? |  yes  |  |
 | last_executed_on | string? |  yes  |  |
 

---

#### [GCompany](#GCompany)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | integration | string? |  yes  |  |
 | level | string? |  yes  |  |
 | name | string? |  yes  |  |
 | opted | boolean? |  yes  |  |
 | permissions | [string]? |  yes  |  |
 | stores | [[GStore](#GStore)]? |  yes  |  |
 | token | string? |  yes  |  |
 | uid | number? |  yes  |  |
 

---

#### [GenericDTO](#GenericDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [GStore](#GStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | code | string? |  yes  |  |
 | data | [StoreData](#StoreData)? |  yes  |  |
 | integration | string? |  yes  |  |
 | level | string? |  yes  |  |
 | name | string? |  yes  |  |
 | opted | boolean? |  yes  |  |
 | permissions | [string]? |  yes  |  |
 | token | string? |  yes  |  |
 | uid | number? |  yes  |  |
 

---

#### [JobConfigDTO](#JobConfigDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | alias | string? |  yes  |  |
 | company_id | number |  no  |  |
 | company_name | string? |  yes  |  |
 | integration | string |  no  |  |
 | integration_data | string? |  yes  |  |
 | job_code | string? |  yes  |  |
 | task_details | [TaskDTO](#TaskDTO)? |  yes  |  |
 | threshold_details | [DataTresholdDTO](#DataTresholdDTO)? |  yes  |  |
 

---

#### [Metum](#Metum)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | name | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | has_previous | boolean? |  yes  |  |
 | item_total | number? |  yes  |  |
 | next_id | string? |  yes  |  |
 | size | number? |  yes  |  |
 | type | string |  no  |  |
 

---

#### [ResponseEnvelopeApikeyModel](#ResponseEnvelopeApikeyModel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string? |  yes  |  |
 | exception | string? |  yes  |  |
 | http_status | string? |  yes  |  |
 | items | [ApikeyModel](#ApikeyModel)? |  yes  |  |
 | message | string? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | payload | [ApikeyModel](#ApikeyModel)? |  yes  |  |
 | status | number? |  yes  |  |
 | timestamp | string? |  yes  |  |
 | total_time_taken_in_millis | number? |  yes  |  |
 | trace_id | string? |  yes  |  |
 

---

#### [ResponseEnvelopeEmailJobMetrics](#ResponseEnvelopeEmailJobMetrics)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string? |  yes  |  |
 | exception | string? |  yes  |  |
 | http_status | string? |  yes  |  |
 | items | [EmailJobMetrics](#EmailJobMetrics)? |  yes  |  |
 | message | string? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | payload | [EmailJobMetrics](#EmailJobMetrics)? |  yes  |  |
 | status | number? |  yes  |  |
 | timestamp | string? |  yes  |  |
 | total_time_taken_in_millis | number? |  yes  |  |
 | trace_id | string? |  yes  |  |
 

---

#### [ResponseEnvelopeJobConfigDTO](#ResponseEnvelopeJobConfigDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string? |  yes  |  |
 | exception | string? |  yes  |  |
 | http_status | string? |  yes  |  |
 | items | [JobConfigDTO](#JobConfigDTO)? |  yes  |  |
 | message | string? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | payload | [JobConfigDTO](#JobConfigDTO)? |  yes  |  |
 | status | number? |  yes  |  |
 | timestamp | string? |  yes  |  |
 | total_time_taken_in_millis | number? |  yes  |  |
 | trace_id | string? |  yes  |  |
 

---

#### [ResponseEnvelopeListJobConfigDTO](#ResponseEnvelopeListJobConfigDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string? |  yes  |  |
 | exception | string? |  yes  |  |
 | http_status | string? |  yes  |  |
 | items | [[JobConfigDTO](#JobConfigDTO)]? |  yes  |  |
 | message | string? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | payload | [[JobConfigDTO](#JobConfigDTO)]? |  yes  |  |
 | status | number? |  yes  |  |
 | timestamp | string? |  yes  |  |
 | total_time_taken_in_millis | number? |  yes  |  |
 | trace_id | string? |  yes  |  |
 

---

#### [ResponseEnvelopeObject](#ResponseEnvelopeObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string? |  yes  |  |
 | exception | string? |  yes  |  |
 | http_status | string? |  yes  |  |
 | items | string? |  yes  |  |
 | message | string? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | payload | string? |  yes  |  |
 | status | number? |  yes  |  |
 | timestamp | string? |  yes  |  |
 | total_time_taken_in_millis | number? |  yes  |  |
 | trace_id | string? |  yes  |  |
 

---

#### [ResponseEnvelopeSlingshotConfigurationDetail](#ResponseEnvelopeSlingshotConfigurationDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string? |  yes  |  |
 | exception | string? |  yes  |  |
 | http_status | string? |  yes  |  |
 | items | [SlingshotConfigurationDetail](#SlingshotConfigurationDetail)? |  yes  |  |
 | message | string? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | payload | [SlingshotConfigurationDetail](#SlingshotConfigurationDetail)? |  yes  |  |
 | status | number? |  yes  |  |
 | timestamp | string? |  yes  |  |
 | total_time_taken_in_millis | number? |  yes  |  |
 | trace_id | string? |  yes  |  |
 

---

#### [SlingshotConfigurationDetail](#SlingshotConfigurationDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | companies | [[GCompany](#GCompany)]? |  yes  |  |
 | integration | [SlingshotIntegration](#SlingshotIntegration)? |  yes  |  |
 

---

#### [SlingshotIntegration](#SlingshotIntegration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | description | string? |  yes  |  |
 | meta | [[Metum](#Metum)]? |  yes  |  |
 | name | string? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [StoreData](#StoreData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | location_id | string? |  yes  |  |
 

---

#### [TaskDTO](#TaskDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | group_list | [[GenericDTO](#GenericDTO)]? |  yes  |  |
 | type | number? |  yes  |  |
 

---




