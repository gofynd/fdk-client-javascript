




##### [Back to Platform docs](./README.md)

## Inventory Methods


* [createJob](#createjob)
* [disable](#disable)
* [getConfigByCompany](#getconfigbycompany)
* [getJobByCode](#getjobbycode)
* [getJobByCompanyAndIntegration](#getjobbycompanyandintegration)
* [getJobCodeMetrics](#getjobcodemetrics)
* [getJobCodesByCompanyAndIntegration](#getjobcodesbycompanyandintegration)
* [getJobConfigDefaults](#getjobconfigdefaults)
* [getJobSteps](#getjobsteps)
* [getJobsByCompany](#getjobsbycompany)
* [suppressStores](#suppressstores)
* [updateJob](#updatejob)



## Methods with example and description




### createJob
Creates A New Job Config



```javascript
// Promise
const promise = platformClient.inventory.createJob({  body : value });

// Async/Await
const data = await platformClient.inventory.createJob({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [JobConfigDTO](#JobConfigDTO) | yes | Request body |


REST Endpoint that creates a new job config

*Returned Response:*




[ResponseEnvelopeString](#ResponseEnvelopeString)

Job Config Created Successfully




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### disable
Disable Job Config



```javascript
// Promise
const promise = platformClient.inventory.disable({  integrationId : value });

// Async/Await
const data = await platformClient.inventory.disable({  integrationId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| integrationId | string | yes | IntegrationId |  



REST Endpoint that disables Inventory Job Config

*Returned Response:*




[ResponseEnvelopeString](#ResponseEnvelopeString)

Successful operation




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getConfigByCompany
Get Slingshot Configuration Of  A Company



```javascript
// Promise
const promise = platformClient.inventory.getConfigByCompany();

// Async/Await
const data = await platformClient.inventory.getConfigByCompany();
```






REST Endpoint that returns all configuration detail of a company

*Returned Response:*




[ResponseEnvelopeListSlingshotConfigurationDetail](#ResponseEnvelopeListSlingshotConfigurationDetail)

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
const promise = platformClient.inventory.getJobByCode({  code : value });

// Async/Await
const data = await platformClient.inventory.getJobByCode({  code : value });
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


### getJobByCompanyAndIntegration
Get Job Configs By Company And Integration



```javascript
// Promise
const promise = platformClient.inventory.getJobByCompanyAndIntegration({  integrationId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.inventory.getJobByCompanyAndIntegration({  integrationId : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| integrationId | string | yes | Integration Id |    
| pageNo | number | no | Page Number |    
| pageSize | number | no | Page Size |  



REST Endpoint that returns all job configs by company And integration

*Returned Response:*




[ResponseEnvelopeListJobConfigDTO](#ResponseEnvelopeListJobConfigDTO)

Successful operation




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getJobCodeMetrics
Get Job Metrics



```javascript
// Promise
const promise = platformClient.inventory.getJobCodeMetrics({  code : value,
 pageNo : value,
 pageSize : value,
 status : value,
 date : value });

// Async/Await
const data = await platformClient.inventory.getJobCodeMetrics({  code : value,
 pageNo : value,
 pageSize : value,
 status : value,
 date : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| code | string | yes | Code |    
| pageNo | number | no | Page Number |    
| pageSize | number | no | Page Size |    
| status | string | no | Status |    
| date | string | no | From Date |  



REST Endpoint that returns Inventory Run History For A Job Code

*Returned Response:*




[ResponseEnvelopeJobMetricsDto](#ResponseEnvelopeJobMetricsDto)

Successful operation




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getJobCodesByCompanyAndIntegration
Get Job Codes By Company And Integration



```javascript
// Promise
const promise = platformClient.inventory.getJobCodesByCompanyAndIntegration({  integrationId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.inventory.getJobCodesByCompanyAndIntegration({  integrationId : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| integrationId | string | yes | Integration Id |    
| pageNo | number | no | Page Number |    
| pageSize | number | no | Page Size |  



REST Endpoint that returns all job codes by company And integration

*Returned Response:*




[ResponseEnvelopeListJobConfigListDTO](#ResponseEnvelopeListJobConfigListDTO)

Successful operation




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getJobConfigDefaults
Get Job Configs Defaults



```javascript
// Promise
const promise = platformClient.inventory.getJobConfigDefaults();

// Async/Await
const data = await platformClient.inventory.getJobConfigDefaults();
```






REST Endpoint that returns default fields job configs by company And integration

*Returned Response:*




[ResponseEnvelopeJobConfigDTO](#ResponseEnvelopeJobConfigDTO)

Successful operation




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getJobSteps
Get Job Code Steps



```javascript
// Promise
const promise = platformClient.inventory.getJobSteps({  jobId : value });

// Async/Await
const data = await platformClient.inventory.getJobSteps({  jobId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| jobId | number | yes | Job Id |  



REST Endpoint that returns Inventory Job Steps

*Returned Response:*




[ResponseEnvelopeListJobStepsDTO](#ResponseEnvelopeListJobStepsDTO)

Successful operation




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getJobsByCompany
Get Job Configs For A Company



```javascript
// Promise
const promise = platformClient.inventory.getJobsByCompany({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.inventory.getJobsByCompany({  pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | Page Number |    
| pageSize | number | no | Page Size |  



REST Endpoint that returns all job configs for a company

*Returned Response:*




[ResponseEnvelopeListJobConfigRawDTO](#ResponseEnvelopeListJobConfigRawDTO)

Successful operation




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### suppressStores
Get Slingshot Configuration Of  A Company



```javascript
// Promise
const promise = platformClient.inventory.suppressStores({  body : value });

// Async/Await
const data = await platformClient.inventory.suppressStores({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [SuppressStorePayload](#SuppressStorePayload) | yes | Request body |


REST Endpoint that returns all configuration detail of a company

*Returned Response:*




[ResponseEnvelopeKafkaResponse](#ResponseEnvelopeKafkaResponse)

Successful operation




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateJob
Updates An Existing Job Config



```javascript
// Promise
const promise = platformClient.inventory.updateJob({  body : value });

// Async/Await
const data = await platformClient.inventory.updateJob({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [JobConfigDTO](#JobConfigDTO) | yes | Request body |


REST Endpoint that updates a job config

*Returned Response:*




[ResponseEnvelopeString](#ResponseEnvelopeString)

Job Config Updated Successfully




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas


#### [ArchiveConfig](#ArchiveConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | archive | boolean? |  yes  |  |
 | archive_dir | string? |  yes  |  |
 | delete | boolean? |  yes  |  |
 

---

#### [Audit](#Audit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_by | string? |  yes  |  |
 | created_on | string? |  yes  |  |
 | modified_by | string? |  yes  |  |
 | modified_on | string? |  yes  |  |
 

---

#### [AWSS3config](#AWSS3config)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | access_key | string? |  yes  |  |
 | archive | boolean? |  yes  |  |
 | archive_config | [ArchiveConfig](#ArchiveConfig)? |  yes  |  |
 | archive_path | string? |  yes  |  |
 | bucket | string? |  yes  |  |
 | delete | boolean? |  yes  |  |
 | dir | string? |  yes  |  |
 | file_regex | string? |  yes  |  |
 | local_file_path | string? |  yes  |  |
 | region | string? |  yes  |  |
 | secret_key | string? |  yes  |  |
 | unzip | boolean? |  yes  |  |
 | zip_format | string? |  yes  |  |
 

---

#### [CatalogMasterConfig](#CatalogMasterConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | source_slug | string? |  yes  |  |
 

---

#### [CompanyConfig](#CompanyConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number? |  yes  |  |
 | delete_quantity_threshold | number? |  yes  |  |
 | exclude_steps | [number]? |  yes  |  |
 | hidden_closet_keys | [string]? |  yes  |  |
 | open_tags | string? |  yes  |  |
 | tax_identifiers | [string]? |  yes  |  |
 

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

#### [DBConfig](#DBConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dbname | string? |  yes  |  |
 | driver_class | string? |  yes  |  |
 | host | string? |  yes  |  |
 | jdbc_url | string? |  yes  |  |
 | optional_properties | [String: string]? |  yes  |  |
 | password | string? |  yes  |  |
 | port | number? |  yes  |  |
 | procedure | boolean? |  yes  |  |
 | query | string? |  yes  |  |
 | username | string? |  yes  |  |
 | vendor | string? |  yes  |  |
 

---

#### [DBConnectionProfile](#DBConnectionProfile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | inventory | string? |  yes  |  |
 

---

#### [DBParamConfig](#DBParamConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | params | string? |  yes  |  |
 

---

#### [DefaultHeadersDTO](#DefaultHeadersDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | intf_article_id | [PropBeanDTO](#PropBeanDTO)? |  yes  |  |
 | price_effective | [PropBeanDTO](#PropBeanDTO)? |  yes  |  |
 | quantity | [PropBeanDTO](#PropBeanDTO)? |  yes  |  |
 | store | [PropBeanDTO](#PropBeanDTO)? |  yes  |  |
 

---

#### [DocMappingConfig](#DocMappingConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | default_headers | [DefaultHeadersDTO](#DefaultHeadersDTO)? |  yes  |  |
 | junk_data_threshold_count | number? |  yes  |  |
 | prop_bean_configs | [[PropBeanConfig](#PropBeanConfig)]? |  yes  |  |
 | properties | string? |  yes  |  |
 | unwind_field | string? |  yes  |  |
 

---

#### [EmailConfig](#EmailConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | archive_config | [ArchiveConfig](#ArchiveConfig)? |  yes  |  |
 | attachment_mandate | boolean? |  yes  |  |
 | attachment_regex | string? |  yes  |  |
 | body_content_regex | string? |  yes  |  |
 | content_type | string? |  yes  |  |
 | downloadable_link | boolean? |  yes  |  |
 | filter_based_on_recepients | boolean? |  yes  |  |
 | filter_files_after_extraction | boolean? |  yes  |  |
 | folder_name_hierarchies | [string]? |  yes  |  |
 | host | string? |  yes  |  |
 | local_dir | string? |  yes  |  |
 | password | string? |  yes  |  |
 | password_protected | boolean? |  yes  |  |
 | pcol | string? |  yes  |  |
 | properties | [String: string]? |  yes  |  |
 | read_all_unread_mails | boolean? |  yes  |  |
 | read_from_content | boolean? |  yes  |  |
 | recepient | string? |  yes  |  |
 | sender_address | string? |  yes  |  |
 | subject_line_regex | string? |  yes  |  |
 | unzip | boolean? |  yes  |  |
 | username | string? |  yes  |  |
 | zip_format | string? |  yes  |  |
 

---

#### [FileConfig](#FileConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | charset | string? |  yes  |  |
 | data_start_index | number? |  yes  |  |
 | default_headers | [DefaultHeadersDTO](#DefaultHeadersDTO)? |  yes  |  |
 | delimiter | string? |  yes  |  |
 | escape_char | string? |  yes  |  |
 | file_has_header | boolean? |  yes  |  |
 | file_type | string? |  yes  |  |
 | header_array | [string]? |  yes  |  |
 | header_index | number? |  yes  |  |
 | junk_data_threshold_count | number? |  yes  |  |
 | line_validity_check | boolean? |  yes  |  |
 | prop_bean_configs | [[PropBeanConfig](#PropBeanConfig)]? |  yes  |  |
 | properties | string? |  yes  |  |
 | quote_char | string? |  yes  |  |
 | read_all_sheets | boolean? |  yes  |  |
 | sheet_names | [string]? |  yes  |  |
 

---

#### [FTPConfig](#FTPConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | archive_config | [ArchiveConfig](#ArchiveConfig)? |  yes  |  |
 | file_regex | string? |  yes  |  |
 | host | string? |  yes  |  |
 | interval | number? |  yes  |  |
 | local_dir | string? |  yes  |  |
 | password | string? |  yes  |  |
 | port | number? |  yes  |  |
 | read_all_files | boolean? |  yes  |  |
 | remote_dir | string? |  yes  |  |
 | retries | number? |  yes  |  |
 | unzip | boolean? |  yes  |  |
 | username | string? |  yes  |  |
 | zip_file_regex | string? |  yes  |  |
 | zip_format | string? |  yes  |  |
 

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

#### [GoogleSpreadSheetConfig](#GoogleSpreadSheetConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | archive_config | [ArchiveConfig](#ArchiveConfig)? |  yes  |  |
 | client_secret_location | string? |  yes  |  |
 | cred_storage_directory | string? |  yes  |  |
 | local_dir | string? |  yes  |  |
 | range | string? |  yes  |  |
 | sheet_id | string? |  yes  |  |
 

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

#### [HttpConfig](#HttpConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | archive_config | [ArchiveConfig](#ArchiveConfig)? |  yes  |  |
 | hosturl | string? |  yes  |  |
 | http_method | string? |  yes  |  |
 | local_path | string? |  yes  |  |
 | password | string? |  yes  |  |
 | request_params | [String: string]? |  yes  |  |
 | request_payload | string? |  yes  |  |
 | username | string? |  yes  |  |
 

---

#### [JobConfig](#JobConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | number? |  yes  |  |
 | aggregator_types | [string]? |  yes  |  |
 | alias | string? |  yes  |  |
 | audit | [Audit](#Audit)? |  yes  |  |
 | catalog_master_config | [CatalogMasterConfig](#CatalogMasterConfig)? |  yes  |  |
 | company_config | [[CompanyConfig](#CompanyConfig)]? |  yes  |  |
 | company_ids | [number]? |  yes  |  |
 | cron_expression | string? |  yes  |  |
 | db_connection_profile | [DBConnectionProfile](#DBConnectionProfile)? |  yes  |  |
 | delete_quantity_threshold | number? |  yes  |  |
 | dependent_job_codes | [string]? |  yes  |  |
 | disable | boolean? |  yes  |  |
 | immediate_first_run | boolean? |  yes  |  |
 | integration_type | string? |  yes  |  |
 | job_code | string? |  yes  |  |
 | min_price | number? |  yes  |  |
 | open_tags | string? |  yes  |  |
 | params | string? |  yes  |  |
 | period_threshold | number? |  yes  |  |
 | period_threshold_type | string? |  yes  |  |
 | priority | string? |  yes  |  |
 | process_config | [ProcessConfig](#ProcessConfig)? |  yes  |  |
 | properties | [String: string]? |  yes  |  |
 | store_config | [[StoreConfig](#StoreConfig)]? |  yes  |  |
 | store_filter | [StoreFilter](#StoreFilter)? |  yes  |  |
 | sync_delay | number? |  yes  |  |
 | task_type | string? |  yes  |  |
 | tax_identifiers | [string]? |  yes  |  |
 | version | number? |  yes  |  |
 

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

#### [JobConfigListDTO](#JobConfigListDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | alias | string? |  yes  |  |
 | code | string? |  yes  |  |
 | created_by | string? |  yes  |  |
 | created_on | string? |  yes  |  |
 | modified_by | string? |  yes  |  |
 | modified_on | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [JobConfigRawDTO](#JobConfigRawDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number |  no  |  |
 | company_name | string |  no  |  |
 | data | [JobConfig](#JobConfig)? |  yes  |  |
 | integration | string |  no  |  |
 

---

#### [JobHistoryDto](#JobHistoryDto)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error_type | string? |  yes  |  |
 | filename | [string]? |  yes  |  |
 | job_code | string? |  yes  |  |
 | job_id | number? |  yes  |  |
 | message | string? |  yes  |  |
 | processed_on | string? |  yes  |  |
 | status | string? |  yes  |  |
 | total_added_count | number? |  yes  |  |
 | total_initial_count | number? |  yes  |  |
 | total_suppressed_count | number? |  yes  |  |
 | total_updated_count | number? |  yes  |  |
 

---

#### [JobMetricsDto](#JobMetricsDto)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_run_more_than_usual | string? |  yes  |  |
 | job_code | string? |  yes  |  |
 | job_history | [[JobHistoryDto](#JobHistoryDto)]? |  yes  |  |
 | total_failure_count | number? |  yes  |  |
 | total_job_runs | number? |  yes  |  |
 | total_success_count | number? |  yes  |  |
 | total_suppressed_count | number? |  yes  |  |
 | total_warning_count | number? |  yes  |  |
 

---

#### [JobStepsDTO](#JobStepsDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | deleted_count | number? |  yes  |  |
 | end_count | number? |  yes  |  |
 | processed_at | string? |  yes  |  |
 | processed_start_time | string? |  yes  |  |
 | start_count | number? |  yes  |  |
 | step_execution_time | number? |  yes  |  |
 | step_name | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [JsonDocConfig](#JsonDocConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | prop_bean_configs | [[PropBeanConfig](#PropBeanConfig)]? |  yes  |  |
 

---

#### [KafkaMetaModel](#KafkaMetaModel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string? |  yes  |  |
 | batch_id | number? |  yes  |  |
 | created_on | string? |  yes  |  |
 | created_timestamp | number? |  yes  |  |
 | job_type | string? |  yes  |  |
 | trace | [string]? |  yes  |  |
 

---

#### [KafkaResponse](#KafkaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | offset | number? |  yes  |  |
 | partition | number? |  yes  |  |
 

---

#### [LocalFileConfig](#LocalFileConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | archive_config | [ArchiveConfig](#ArchiveConfig)? |  yes  |  |
 | file_regex | string? |  yes  |  |
 | interval | number? |  yes  |  |
 | local_dir | string? |  yes  |  |
 | read_all_files | boolean? |  yes  |  |
 | retries | number? |  yes  |  |
 | unzip | boolean? |  yes  |  |
 | working_dir | string? |  yes  |  |
 | zip_file_regex | string? |  yes  |  |
 | zip_format | string? |  yes  |  |
 

---

#### [Metum](#Metum)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | name | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [MongoDocConfig](#MongoDocConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregate_pipeline | [string]? |  yes  |  |
 | collection_name | string? |  yes  |  |
 | find_query | string? |  yes  |  |
 | projection_query | string? |  yes  |  |
 | prop_bean_configs | [[PropBeanConfig](#PropBeanConfig)]? |  yes  |  |
 | skip_save | boolean? |  yes  |  |
 

---

#### [OAuthConfig](#OAuthConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | consumer_key | string? |  yes  |  |
 | consumer_secret | string? |  yes  |  |
 | function_name | string? |  yes  |  |
 | interval | number? |  yes  |  |
 | limit | number? |  yes  |  |
 | pages | number? |  yes  |  |
 | rest_base_url | string? |  yes  |  |
 | rest_url | string? |  yes  |  |
 | token | string? |  yes  |  |
 | token_secret | string? |  yes  |  |
 

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

#### [ProcessConfig](#ProcessConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aws_s3_config | [AWSS3config](#AWSS3config)? |  yes  |  |
 | db_config | [DBConfig](#DBConfig)? |  yes  |  |
 | db_param_config | [DBParamConfig](#DBParamConfig)? |  yes  |  |
 | doc_mapping_config | [DocMappingConfig](#DocMappingConfig)? |  yes  |  |
 | email_config | [EmailConfig](#EmailConfig)? |  yes  |  |
 | file_config | [FileConfig](#FileConfig)? |  yes  |  |
 | ftp_config | [FTPConfig](#FTPConfig)? |  yes  |  |
 | google_spreadsheet_config | [GoogleSpreadSheetConfig](#GoogleSpreadSheetConfig)? |  yes  |  |
 | http_config | [HttpConfig](#HttpConfig)? |  yes  |  |
 | json_doc_config | [JsonDocConfig](#JsonDocConfig)? |  yes  |  |
 | local_file_config | [LocalFileConfig](#LocalFileConfig)? |  yes  |  |
 | mongo_doc_config | [MongoDocConfig](#MongoDocConfig)? |  yes  |  |
 | oauth_config | [OAuthConfig](#OAuthConfig)? |  yes  |  |
 | sftp_config | [SFTPConfig](#SFTPConfig)? |  yes  |  |
 | task_step_config | [TaskStepConfig](#TaskStepConfig)? |  yes  |  |
 

---

#### [PropBeanConfig](#PropBeanConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | all_param_function_name | string? |  yes  |  |
 | concat_str | string? |  yes  |  |
 | const_value | string? |  yes  |  |
 | data_type | string? |  yes  |  |
 | default_value | string? |  yes  |  |
 | destination_field | string? |  yes  |  |
 | enrich_from_master | boolean? |  yes  |  |
 | function_name | string? |  yes  |  |
 | identifier_type | string? |  yes  |  |
 | ignore_if_not_exists | boolean? |  yes  |  |
 | include | boolean? |  yes  |  |
 | index_field | string? |  yes  |  |
 | optional | boolean? |  yes  |  |
 | projection_query | string? |  yes  |  |
 | required | boolean? |  yes  |  |
 | send | [Send](#Send)? |  yes  |  |
 | source_field | string? |  yes  |  |
 | source_fields | [string]? |  yes  |  |
 | sub_separator | string? |  yes  |  |
 | transformer_name | string? |  yes  |  |
 | validations | [string]? |  yes  |  |
 | values | [string]? |  yes  |  |
 

---

#### [PropBeanDTO](#PropBeanDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | all_param_function_name | string? |  yes  |  |
 | concat_str | string? |  yes  |  |
 | const_value | string? |  yes  |  |
 | data_type | string? |  yes  |  |
 | default_value | string? |  yes  |  |
 | destination_field | string? |  yes  |  |
 | enrich_from_master | boolean? |  yes  |  |
 | function_name | string? |  yes  |  |
 | identifier_type | string? |  yes  |  |
 | ignore_if_not_exists | boolean? |  yes  |  |
 | include | boolean? |  yes  |  |
 | index_field | string? |  yes  |  |
 | optional | boolean? |  yes  |  |
 | projection_query | string? |  yes  |  |
 | required | boolean? |  yes  |  |
 | source_field | string? |  yes  |  |
 | source_fields | [string]? |  yes  |  |
 | sub_separator | string? |  yes  |  |
 | transformer_name | string? |  yes  |  |
 

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

#### [ResponseEnvelopeJobMetricsDto](#ResponseEnvelopeJobMetricsDto)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string? |  yes  |  |
 | exception | string? |  yes  |  |
 | http_status | string? |  yes  |  |
 | items | [JobMetricsDto](#JobMetricsDto)? |  yes  |  |
 | message | string? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | payload | [JobMetricsDto](#JobMetricsDto)? |  yes  |  |
 | status | number? |  yes  |  |
 | timestamp | string? |  yes  |  |
 | total_time_taken_in_millis | number? |  yes  |  |
 | trace_id | string? |  yes  |  |
 

---

#### [ResponseEnvelopeKafkaResponse](#ResponseEnvelopeKafkaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string? |  yes  |  |
 | exception | string? |  yes  |  |
 | http_status | string? |  yes  |  |
 | items | [KafkaResponse](#KafkaResponse)? |  yes  |  |
 | message | string? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | payload | [KafkaResponse](#KafkaResponse)? |  yes  |  |
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

#### [ResponseEnvelopeListJobConfigListDTO](#ResponseEnvelopeListJobConfigListDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string? |  yes  |  |
 | exception | string? |  yes  |  |
 | http_status | string? |  yes  |  |
 | items | [[JobConfigListDTO](#JobConfigListDTO)]? |  yes  |  |
 | message | string? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | payload | [[JobConfigListDTO](#JobConfigListDTO)]? |  yes  |  |
 | status | number? |  yes  |  |
 | timestamp | string? |  yes  |  |
 | total_time_taken_in_millis | number? |  yes  |  |
 | trace_id | string? |  yes  |  |
 

---

#### [ResponseEnvelopeListJobConfigRawDTO](#ResponseEnvelopeListJobConfigRawDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string? |  yes  |  |
 | exception | string? |  yes  |  |
 | http_status | string? |  yes  |  |
 | items | [[JobConfigRawDTO](#JobConfigRawDTO)]? |  yes  |  |
 | message | string? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | payload | [[JobConfigRawDTO](#JobConfigRawDTO)]? |  yes  |  |
 | status | number? |  yes  |  |
 | timestamp | string? |  yes  |  |
 | total_time_taken_in_millis | number? |  yes  |  |
 | trace_id | string? |  yes  |  |
 

---

#### [ResponseEnvelopeListJobStepsDTO](#ResponseEnvelopeListJobStepsDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string? |  yes  |  |
 | exception | string? |  yes  |  |
 | http_status | string? |  yes  |  |
 | items | [[JobStepsDTO](#JobStepsDTO)]? |  yes  |  |
 | message | string? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | payload | [[JobStepsDTO](#JobStepsDTO)]? |  yes  |  |
 | status | number? |  yes  |  |
 | timestamp | string? |  yes  |  |
 | total_time_taken_in_millis | number? |  yes  |  |
 | trace_id | string? |  yes  |  |
 

---

#### [ResponseEnvelopeListSlingshotConfigurationDetail](#ResponseEnvelopeListSlingshotConfigurationDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string? |  yes  |  |
 | exception | string? |  yes  |  |
 | http_status | string? |  yes  |  |
 | items | [[SlingshotConfigurationDetail](#SlingshotConfigurationDetail)]? |  yes  |  |
 | message | string? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | payload | [[SlingshotConfigurationDetail](#SlingshotConfigurationDetail)]? |  yes  |  |
 | status | number? |  yes  |  |
 | timestamp | string? |  yes  |  |
 | total_time_taken_in_millis | number? |  yes  |  |
 | trace_id | string? |  yes  |  |
 

---

#### [ResponseEnvelopeString](#ResponseEnvelopeString)

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

#### [Send](#Send)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | processed | boolean? |  yes  |  |
 | raw | boolean? |  yes  |  |
 

---

#### [SFTPConfig](#SFTPConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | archive_config | [ArchiveConfig](#ArchiveConfig)? |  yes  |  |
 | file_regex | string? |  yes  |  |
 | host | string? |  yes  |  |
 | interval | number? |  yes  |  |
 | local_dir | string? |  yes  |  |
 | password | string? |  yes  |  |
 | password_protected | boolean? |  yes  |  |
 | port | number? |  yes  |  |
 | private_key_path | string? |  yes  |  |
 | read_all_files | boolean? |  yes  |  |
 | remote_dir | string? |  yes  |  |
 | retries | number? |  yes  |  |
 | strict_host_key_checking | boolean? |  yes  |  |
 | unzip | boolean? |  yes  |  |
 | username | string? |  yes  |  |
 | zip_file_regex | string? |  yes  |  |
 | zip_format | string? |  yes  |  |
 

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

#### [StoreConfig](#StoreConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | job_code | string? |  yes  |  |
 | process_config | [ProcessConfig](#ProcessConfig)? |  yes  |  |
 | properties | [String: string]? |  yes  |  |
 | store_alias | string? |  yes  |  |
 | store_file_name | string? |  yes  |  |
 | store_file_regex | string? |  yes  |  |
 | storeid | string? |  yes  |  |
 

---

#### [StoreData](#StoreData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | location_id | string? |  yes  |  |
 

---

#### [StoreFilter](#StoreFilter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | exclude_tags | [string]? |  yes  |  |
 | include_tags | [string]? |  yes  |  |
 | query | string? |  yes  |  |
 

---

#### [SuppressStoreModel](#SuppressStoreModel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | stores | [number]? |  yes  |  |
 

---

#### [SuppressStorePayload](#SuppressStorePayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | meta | [KafkaMetaModel](#KafkaMetaModel)? |  yes  |  |
 | payload | [[SuppressStoreModel](#SuppressStoreModel)]? |  yes  |  |
 

---

#### [TaskConfig](#TaskConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 | task_config_id | number? |  yes  |  |
 | task_params | [[TaskParam](#TaskParam)]? |  yes  |  |
 

---

#### [TaskDTO](#TaskDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | group_list | [[GenericDTO](#GenericDTO)]? |  yes  |  |
 | type | number? |  yes  |  |
 

---

#### [TaskParam](#TaskParam)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [TaskStepConfig](#TaskStepConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | task_config_group_ids | [number]? |  yes  |  |
 | task_config_ids | [number]? |  yes  |  |
 | task_configs | [[TaskConfig](#TaskConfig)]? |  yes  |  |
 

---




