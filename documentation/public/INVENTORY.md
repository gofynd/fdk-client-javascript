



##### [Back to Public docs](./README.md)

## Inventory Methods

* [getJobByCode](#getjobbycode)
* [getJobConfigByIntegrationType](#getjobconfigbyintegrationtype)
* [getJobCodesMetrics](#getjobcodesmetrics)
* [saveJobCodesMetrics](#savejobcodesmetrics)



## Methods with example and description


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

 
 
 #### [DataTresholdDTO](#DataTresholdDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | min_price | number |  no  |  |
 | safe_stock | number |  no  |  |
 | period_threshold | number |  no  |  |
 | period_threshold_type | string |  no  |  |
 | period_type_list | [[GenericDTO](#GenericDTO)] |  no  |  |

---


 
 
 #### [GenericDTO](#GenericDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [JobConfigDTO](#JobConfigDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | integration | string |  yes  |  |
 | integration_data | string |  no  |  |
 | company_name | string |  no  |  |
 | company_id | number |  yes  |  |
 | task_details | [TaskDTO](#TaskDTO) |  no  |  |
 | threshold_details | [DataTresholdDTO](#DataTresholdDTO) |  no  |  |
 | job_code | string |  no  |  |
 | alias | string |  no  |  |

---


 
 
 #### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | size | number |  no  |  |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | item_total | number |  no  |  |
 | next_id | string |  no  |  |
 | has_previous | boolean |  no  |  |

---


 
 
 #### [ResponseEnvelopeJobConfigDTO](#ResponseEnvelopeJobConfigDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | timestamp | string |  no  |  |
 | status | number |  no  |  |
 | error | string |  no  |  |
 | exception | string |  no  |  |
 | message | string |  no  |  |
 | total_time_taken_in_millis | number |  no  |  |
 | http_status | string |  no  |  |
 | items | [JobConfigDTO](#JobConfigDTO) |  no  |  |
 | payload | [JobConfigDTO](#JobConfigDTO) |  no  |  |
 | trace_id | string |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [TaskDTO](#TaskDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | number |  no  |  |
 | group_list | [[GenericDTO](#GenericDTO)] |  no  |  |

---


 
 
 #### [ResponseEnvelopeListJobConfigDTO](#ResponseEnvelopeListJobConfigDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | timestamp | string |  no  |  |
 | status | number |  no  |  |
 | error | string |  no  |  |
 | exception | string |  no  |  |
 | message | string |  no  |  |
 | total_time_taken_in_millis | number |  no  |  |
 | http_status | string |  no  |  |
 | items | [[JobConfigDTO](#JobConfigDTO)] |  no  |  |
 | payload | [[JobConfigDTO](#JobConfigDTO)] |  no  |  |
 | trace_id | string |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [EmailJobMetrics](#EmailJobMetrics)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | executed | boolean |  no  |  |
 | id | string |  no  |  |
 | job_code | string |  no  |  |
 | daily_job | boolean |  no  |  |
 | last_executed_on | string |  no  |  |

---


 
 
 #### [ResponseEnvelopeEmailJobMetrics](#ResponseEnvelopeEmailJobMetrics)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | timestamp | string |  no  |  |
 | status | number |  no  |  |
 | error | string |  no  |  |
 | exception | string |  no  |  |
 | message | string |  no  |  |
 | total_time_taken_in_millis | number |  no  |  |
 | http_status | string |  no  |  |
 | items | [EmailJobMetrics](#EmailJobMetrics) |  no  |  |
 | payload | [EmailJobMetrics](#EmailJobMetrics) |  no  |  |
 | trace_id | string |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [ResponseEnvelopeObject](#ResponseEnvelopeObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | timestamp | string |  no  |  |
 | status | number |  no  |  |
 | error | string |  no  |  |
 | exception | string |  no  |  |
 | message | string |  no  |  |
 | total_time_taken_in_millis | number |  no  |  |
 | http_status | string |  no  |  |
 | items | string |  no  |  |
 | payload | string |  no  |  |
 | trace_id | string |  no  |  |
 | page | [Page](#Page) |  no  |  |

---




