




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
const promise = client.inventory.createJob({  body : value });

// Async/Await
const data = await client.inventory.createJob({  body : value });
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
const promise = client.inventory.disable({  integrationId : value });

// Async/Await
const data = await client.inventory.disable({  integrationId : value });
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
const promise = client.inventory.getConfigByCompany();

// Async/Await
const data = await client.inventory.getConfigByCompany();
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
const promise = client.inventory.getJobByCode({  code : value });

// Async/Await
const data = await client.inventory.getJobByCode({  code : value });
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
const promise = client.inventory.getJobByCompanyAndIntegration({  integrationId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.inventory.getJobByCompanyAndIntegration({  integrationId : value,
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
const promise = client.inventory.getJobCodeMetrics({  code : value,
 pageNo : value,
 pageSize : value,
 status : value,
 date : value });

// Async/Await
const data = await client.inventory.getJobCodeMetrics({  code : value,
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
const promise = client.inventory.getJobCodesByCompanyAndIntegration({  integrationId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.inventory.getJobCodesByCompanyAndIntegration({  integrationId : value,
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
const promise = client.inventory.getJobConfigDefaults();

// Async/Await
const data = await client.inventory.getJobConfigDefaults();
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
const promise = client.inventory.getJobSteps({  jobId : value });

// Async/Await
const data = await client.inventory.getJobSteps({  jobId : value });
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
const promise = client.inventory.getJobsByCompany({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.inventory.getJobsByCompany({  pageNo : value,
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
const promise = client.inventory.suppressStores({  body : value });

// Async/Await
const data = await client.inventory.suppressStores({  body : value });
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
const promise = client.inventory.updateJob({  body : value });

// Async/Await
const data = await client.inventory.updateJob({  body : value });
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
 | ---------- | ---- | -------- | ----------- || archive | boolean |  no  |  || archive_dir | string |  no  |  || delete | boolean |  no  |  |

---

#### [Audit](#Audit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || created_by | string |  no  |  || created_on | string |  no  |  || modified_by | string |  no  |  || modified_on | string |  no  |  |

---

#### [AWSS3config](#AWSS3config)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || access_key | string |  no  |  || archive | boolean |  no  |  || archive_config | [ArchiveConfig](#ArchiveConfig) |  no  |  || archive_path | string |  no  |  || bucket | string |  no  |  || delete | boolean |  no  |  || dir | string |  no  |  || file_regex | string |  no  |  || local_file_path | string |  no  |  || region | string |  no  |  || secret_key | string |  no  |  || unzip | boolean |  no  |  || zip_format | string |  no  |  |

---

#### [CatalogMasterConfig](#CatalogMasterConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || source_slug | string |  no  |  |

---

#### [CompanyConfig](#CompanyConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || company_id | number |  no  |  || delete_quantity_threshold | number |  no  |  || exclude_steps | [number] |  no  |  || hidden_closet_keys | [string] |  no  |  || open_tags | string |  no  |  || tax_identifiers | [string] |  no  |  |

---

#### [DataTresholdDTO](#DataTresholdDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || min_price | number |  no  |  || period_threshold | number |  no  |  || period_threshold_type | string |  no  |  || period_type_list | [[GenericDTO](#GenericDTO)] |  no  |  || safe_stock | number |  no  |  |

---

#### [DBConfig](#DBConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || dbname | string |  no  |  || driver_class | string |  no  |  || host | string |  no  |  || jdbc_url | string |  no  |  || optional_properties | [String: string] |  no  |  || password | string |  no  |  || port | number |  no  |  || procedure | boolean |  no  |  || query | string |  no  |  || username | string |  no  |  || vendor | string |  no  |  |

---

#### [DBConnectionProfile](#DBConnectionProfile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || inventory | string |  no  |  |

---

#### [DBParamConfig](#DBParamConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || params | string |  no  |  |

---

#### [DefaultHeadersDTO](#DefaultHeadersDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || intf_article_id | [PropBeanDTO](#PropBeanDTO) |  no  |  || price_effective | [PropBeanDTO](#PropBeanDTO) |  no  |  || quantity | [PropBeanDTO](#PropBeanDTO) |  no  |  || store | [PropBeanDTO](#PropBeanDTO) |  no  |  |

---

#### [DocMappingConfig](#DocMappingConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || default_headers | [DefaultHeadersDTO](#DefaultHeadersDTO) |  no  |  || junk_data_threshold_count | number |  no  |  || prop_bean_configs | [[PropBeanConfig](#PropBeanConfig)] |  no  |  || properties | string |  no  |  || unwind_field | string |  no  |  |

---

#### [EmailConfig](#EmailConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || archive_config | [ArchiveConfig](#ArchiveConfig) |  no  |  || attachment_mandate | boolean |  no  |  || attachment_regex | string |  no  |  || body_content_regex | string |  no  |  || content_type | string |  no  |  || downloadable_link | boolean |  no  |  || filter_based_on_recepients | boolean |  no  |  || filter_files_after_extraction | boolean |  no  |  || folder_name_hierarchies | [string] |  no  |  || host | string |  no  |  || local_dir | string |  no  |  || password | string |  no  |  || password_protected | boolean |  no  |  || pcol | string |  no  |  || properties | [String: string] |  no  |  || read_all_unread_mails | boolean |  no  |  || read_from_content | boolean |  no  |  || recepient | string |  no  |  || sender_address | string |  no  |  || subject_line_regex | string |  no  |  || unzip | boolean |  no  |  || username | string |  no  |  || zip_format | string |  no  |  |

---

#### [FileConfig](#FileConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || charset | string |  no  |  || data_start_index | number |  no  |  || default_headers | [DefaultHeadersDTO](#DefaultHeadersDTO) |  no  |  || delimiter | string |  no  |  || escape_char | string |  no  |  || file_has_header | boolean |  no  |  || file_type | string |  no  |  || header_array | [string] |  no  |  || header_index | number |  no  |  || junk_data_threshold_count | number |  no  |  || line_validity_check | boolean |  no  |  || prop_bean_configs | [[PropBeanConfig](#PropBeanConfig)] |  no  |  || properties | string |  no  |  || quote_char | string |  no  |  || read_all_sheets | boolean |  no  |  || sheet_names | [string] |  no  |  |

---

#### [FTPConfig](#FTPConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || archive_config | [ArchiveConfig](#ArchiveConfig) |  no  |  || file_regex | string |  no  |  || host | string |  no  |  || interval | number |  no  |  || local_dir | string |  no  |  || password | string |  no  |  || port | number |  no  |  || read_all_files | boolean |  no  |  || remote_dir | string |  no  |  || retries | number |  no  |  || unzip | boolean |  no  |  || username | string |  no  |  || zip_file_regex | string |  no  |  || zip_format | string |  no  |  |

---

#### [GCompany](#GCompany)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || integration | string |  no  |  || level | string |  no  |  || name | string |  no  |  || opted | boolean |  no  |  || permissions | [string] |  no  |  || stores | [[GStore](#GStore)] |  no  |  || token | string |  no  |  || uid | number |  no  |  |

---

#### [GenericDTO](#GenericDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || text | string |  no  |  || value | string |  no  |  |

---

#### [GoogleSpreadSheetConfig](#GoogleSpreadSheetConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || archive_config | [ArchiveConfig](#ArchiveConfig) |  no  |  || client_secret_location | string |  no  |  || cred_storage_directory | string |  no  |  || local_dir | string |  no  |  || range | string |  no  |  || sheet_id | string |  no  |  |

---

#### [GStore](#GStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || code | string |  no  |  || data | [StoreData](#StoreData) |  no  |  || integration | string |  no  |  || level | string |  no  |  || name | string |  no  |  || opted | boolean |  no  |  || permissions | [string] |  no  |  || token | string |  no  |  || uid | number |  no  |  |

---

#### [HttpConfig](#HttpConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || archive_config | [ArchiveConfig](#ArchiveConfig) |  no  |  || hosturl | string |  no  |  || http_method | string |  no  |  || local_path | string |  no  |  || password | string |  no  |  || request_params | [String: string] |  no  |  || request_payload | string |  no  |  || username | string |  no  |  |

---

#### [JobConfig](#JobConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | number |  no  |  || aggregator_types | [string] |  no  |  || alias | string |  no  |  || audit | [Audit](#Audit) |  no  |  || catalog_master_config | [CatalogMasterConfig](#CatalogMasterConfig) |  no  |  || company_config | [[CompanyConfig](#CompanyConfig)] |  no  |  || company_ids | [number] |  no  |  || cron_expression | string |  no  |  || db_connection_profile | [DBConnectionProfile](#DBConnectionProfile) |  no  |  || delete_quantity_threshold | number |  no  |  || dependent_job_codes | [string] |  no  |  || disable | boolean |  no  |  || immediate_first_run | boolean |  no  |  || integration_type | string |  no  |  || job_code | string |  no  |  || min_price | number |  no  |  || open_tags | string |  no  |  || params | string |  no  |  || period_threshold | number |  no  |  || period_threshold_type | string |  no  |  || priority | string |  no  |  || process_config | [ProcessConfig](#ProcessConfig) |  no  |  || properties | [String: string] |  no  |  || store_config | [[StoreConfig](#StoreConfig)] |  no  |  || store_filter | [StoreFilter](#StoreFilter) |  no  |  || sync_delay | number |  no  |  || task_type | string |  no  |  || tax_identifiers | [string] |  no  |  || version | number |  no  |  |

---

#### [JobConfigDTO](#JobConfigDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || alias | string |  no  |  || company_id | number |  yes  |  || company_name | string |  no  |  || integration | string |  yes  |  || integration_data | string |  no  |  || job_code | string |  no  |  || task_details | [TaskDTO](#TaskDTO) |  no  |  || threshold_details | [DataTresholdDTO](#DataTresholdDTO) |  no  |  |

---

#### [JobConfigListDTO](#JobConfigListDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || active | boolean |  no  |  || alias | string |  no  |  || code | string |  no  |  || created_by | string |  no  |  || created_on | string |  no  |  || modified_by | string |  no  |  || modified_on | string |  no  |  || type | string |  no  |  |

---

#### [JobConfigRawDTO](#JobConfigRawDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || company_id | number |  yes  |  || company_name | string |  yes  |  || data | [JobConfig](#JobConfig) |  no  |  || integration | string |  yes  |  |

---

#### [JobHistoryDto](#JobHistoryDto)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error_type | string |  no  |  || filename | [string] |  no  |  || job_code | string |  no  |  || job_id | number |  no  |  || message | string |  no  |  || processed_on | string |  no  |  || status | string |  no  |  || total_added_count | number |  no  |  || total_initial_count | number |  no  |  || total_suppressed_count | number |  no  |  || total_updated_count | number |  no  |  |

---

#### [JobMetricsDto](#JobMetricsDto)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_run_more_than_usual | string |  no  |  || job_code | string |  no  |  || job_history | [[JobHistoryDto](#JobHistoryDto)] |  no  |  || total_failure_count | number |  no  |  || total_job_runs | number |  no  |  || total_success_count | number |  no  |  || total_suppressed_count | number |  no  |  || total_warning_count | number |  no  |  |

---

#### [JobStepsDTO](#JobStepsDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || deleted_count | number |  no  |  || end_count | number |  no  |  || processed_at | string |  no  |  || processed_start_time | string |  no  |  || start_count | number |  no  |  || step_execution_time | number |  no  |  || step_name | string |  no  |  || type | string |  no  |  |

---

#### [JsonDocConfig](#JsonDocConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || prop_bean_configs | [[PropBeanConfig](#PropBeanConfig)] |  no  |  |

---

#### [KafkaMetaModel](#KafkaMetaModel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || action | string |  no  |  || batch_id | number |  no  |  || created_on | string |  no  |  || created_timestamp | number |  no  |  || job_type | string |  no  |  || trace | [string] |  no  |  |

---

#### [KafkaResponse](#KafkaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || offset | number |  no  |  || partition | number |  no  |  |

---

#### [LocalFileConfig](#LocalFileConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || archive_config | [ArchiveConfig](#ArchiveConfig) |  no  |  || file_regex | string |  no  |  || interval | number |  no  |  || local_dir | string |  no  |  || read_all_files | boolean |  no  |  || retries | number |  no  |  || unzip | boolean |  no  |  || working_dir | string |  no  |  || zip_file_regex | string |  no  |  || zip_format | string |  no  |  |

---

#### [Metum](#Metum)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || name | string |  no  |  || value | string |  no  |  |

---

#### [MongoDocConfig](#MongoDocConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aggregate_pipeline | [string] |  no  |  || collection_name | string |  no  |  || find_query | string |  no  |  || projection_query | string |  no  |  || prop_bean_configs | [[PropBeanConfig](#PropBeanConfig)] |  no  |  || skip_save | boolean |  no  |  |

---

#### [OAuthConfig](#OAuthConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || consumer_key | string |  no  |  || consumer_secret | string |  no  |  || function_name | string |  no  |  || interval | number |  no  |  || limit | number |  no  |  || pages | number |  no  |  || rest_base_url | string |  no  |  || rest_url | string |  no  |  || token | string |  no  |  || token_secret | string |  no  |  |

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || current | number |  no  |  || has_next | boolean |  no  |  || has_previous | boolean |  no  |  || item_total | number |  no  |  || next_id | string |  no  |  || size | number |  no  |  || type | string |  yes  |  |

---

#### [ProcessConfig](#ProcessConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aws_s3_config | [AWSS3config](#AWSS3config) |  no  |  || db_config | [DBConfig](#DBConfig) |  no  |  || db_param_config | [DBParamConfig](#DBParamConfig) |  no  |  || doc_mapping_config | [DocMappingConfig](#DocMappingConfig) |  no  |  || email_config | [EmailConfig](#EmailConfig) |  no  |  || file_config | [FileConfig](#FileConfig) |  no  |  || ftp_config | [FTPConfig](#FTPConfig) |  no  |  || google_spreadsheet_config | [GoogleSpreadSheetConfig](#GoogleSpreadSheetConfig) |  no  |  || http_config | [HttpConfig](#HttpConfig) |  no  |  || json_doc_config | [JsonDocConfig](#JsonDocConfig) |  no  |  || local_file_config | [LocalFileConfig](#LocalFileConfig) |  no  |  || mongo_doc_config | [MongoDocConfig](#MongoDocConfig) |  no  |  || oauth_config | [OAuthConfig](#OAuthConfig) |  no  |  || sftp_config | [SFTPConfig](#SFTPConfig) |  no  |  || task_step_config | [TaskStepConfig](#TaskStepConfig) |  no  |  |

---

#### [PropBeanConfig](#PropBeanConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || all_param_function_name | string |  no  |  || concat_str | string |  no  |  || const_value | string |  no  |  || data_type | string |  no  |  || default_value | string |  no  |  || destination_field | string |  no  |  || enrich_from_master | boolean |  no  |  || function_name | string |  no  |  || identifier_type | string |  no  |  || ignore_if_not_exists | boolean |  no  |  || include | boolean |  no  |  || index_field | string |  no  |  || optional | boolean |  no  |  || projection_query | string |  no  |  || required | boolean |  no  |  || send | [Send](#Send) |  no  |  || source_field | string |  no  |  || source_fields | [string] |  no  |  || sub_separator | string |  no  |  || transformer_name | string |  no  |  || validations | [string] |  no  |  || values | [string] |  no  |  |

---

#### [PropBeanDTO](#PropBeanDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || all_param_function_name | string |  no  |  || concat_str | string |  no  |  || const_value | string |  no  |  || data_type | string |  no  |  || default_value | string |  no  |  || destination_field | string |  no  |  || enrich_from_master | boolean |  no  |  || function_name | string |  no  |  || identifier_type | string |  no  |  || ignore_if_not_exists | boolean |  no  |  || include | boolean |  no  |  || index_field | string |  no  |  || optional | boolean |  no  |  || projection_query | string |  no  |  || required | boolean |  no  |  || source_field | string |  no  |  || source_fields | [string] |  no  |  || sub_separator | string |  no  |  || transformer_name | string |  no  |  |

---

#### [ResponseEnvelopeJobConfigDTO](#ResponseEnvelopeJobConfigDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error | string |  no  |  || exception | string |  no  |  || http_status | string |  no  |  || items | [JobConfigDTO](#JobConfigDTO) |  no  |  || message | string |  no  |  || page | [Page](#Page) |  no  |  || payload | [JobConfigDTO](#JobConfigDTO) |  no  |  || status | number |  no  |  || timestamp | string |  no  |  || total_time_taken_in_millis | number |  no  |  || trace_id | string |  no  |  |

---

#### [ResponseEnvelopeJobMetricsDto](#ResponseEnvelopeJobMetricsDto)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error | string |  no  |  || exception | string |  no  |  || http_status | string |  no  |  || items | [JobMetricsDto](#JobMetricsDto) |  no  |  || message | string |  no  |  || page | [Page](#Page) |  no  |  || payload | [JobMetricsDto](#JobMetricsDto) |  no  |  || status | number |  no  |  || timestamp | string |  no  |  || total_time_taken_in_millis | number |  no  |  || trace_id | string |  no  |  |

---

#### [ResponseEnvelopeKafkaResponse](#ResponseEnvelopeKafkaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error | string |  no  |  || exception | string |  no  |  || http_status | string |  no  |  || items | [KafkaResponse](#KafkaResponse) |  no  |  || message | string |  no  |  || page | [Page](#Page) |  no  |  || payload | [KafkaResponse](#KafkaResponse) |  no  |  || status | number |  no  |  || timestamp | string |  no  |  || total_time_taken_in_millis | number |  no  |  || trace_id | string |  no  |  |

---

#### [ResponseEnvelopeListJobConfigDTO](#ResponseEnvelopeListJobConfigDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error | string |  no  |  || exception | string |  no  |  || http_status | string |  no  |  || items | [[JobConfigDTO](#JobConfigDTO)] |  no  |  || message | string |  no  |  || page | [Page](#Page) |  no  |  || payload | [[JobConfigDTO](#JobConfigDTO)] |  no  |  || status | number |  no  |  || timestamp | string |  no  |  || total_time_taken_in_millis | number |  no  |  || trace_id | string |  no  |  |

---

#### [ResponseEnvelopeListJobConfigListDTO](#ResponseEnvelopeListJobConfigListDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error | string |  no  |  || exception | string |  no  |  || http_status | string |  no  |  || items | [[JobConfigListDTO](#JobConfigListDTO)] |  no  |  || message | string |  no  |  || page | [Page](#Page) |  no  |  || payload | [[JobConfigListDTO](#JobConfigListDTO)] |  no  |  || status | number |  no  |  || timestamp | string |  no  |  || total_time_taken_in_millis | number |  no  |  || trace_id | string |  no  |  |

---

#### [ResponseEnvelopeListJobConfigRawDTO](#ResponseEnvelopeListJobConfigRawDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error | string |  no  |  || exception | string |  no  |  || http_status | string |  no  |  || items | [[JobConfigRawDTO](#JobConfigRawDTO)] |  no  |  || message | string |  no  |  || page | [Page](#Page) |  no  |  || payload | [[JobConfigRawDTO](#JobConfigRawDTO)] |  no  |  || status | number |  no  |  || timestamp | string |  no  |  || total_time_taken_in_millis | number |  no  |  || trace_id | string |  no  |  |

---

#### [ResponseEnvelopeListJobStepsDTO](#ResponseEnvelopeListJobStepsDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error | string |  no  |  || exception | string |  no  |  || http_status | string |  no  |  || items | [[JobStepsDTO](#JobStepsDTO)] |  no  |  || message | string |  no  |  || page | [Page](#Page) |  no  |  || payload | [[JobStepsDTO](#JobStepsDTO)] |  no  |  || status | number |  no  |  || timestamp | string |  no  |  || total_time_taken_in_millis | number |  no  |  || trace_id | string |  no  |  |

---

#### [ResponseEnvelopeListSlingshotConfigurationDetail](#ResponseEnvelopeListSlingshotConfigurationDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error | string |  no  |  || exception | string |  no  |  || http_status | string |  no  |  || items | [[SlingshotConfigurationDetail](#SlingshotConfigurationDetail)] |  no  |  || message | string |  no  |  || page | [Page](#Page) |  no  |  || payload | [[SlingshotConfigurationDetail](#SlingshotConfigurationDetail)] |  no  |  || status | number |  no  |  || timestamp | string |  no  |  || total_time_taken_in_millis | number |  no  |  || trace_id | string |  no  |  |

---

#### [ResponseEnvelopeString](#ResponseEnvelopeString)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error | string |  no  |  || exception | string |  no  |  || http_status | string |  no  |  || items | string |  no  |  || message | string |  no  |  || page | [Page](#Page) |  no  |  || payload | string |  no  |  || status | number |  no  |  || timestamp | string |  no  |  || total_time_taken_in_millis | number |  no  |  || trace_id | string |  no  |  |

---

#### [Send](#Send)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || processed | boolean |  no  |  || raw | boolean |  no  |  |

---

#### [SFTPConfig](#SFTPConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || archive_config | [ArchiveConfig](#ArchiveConfig) |  no  |  || file_regex | string |  no  |  || host | string |  no  |  || interval | number |  no  |  || local_dir | string |  no  |  || password | string |  no  |  || password_protected | boolean |  no  |  || port | number |  no  |  || private_key_path | string |  no  |  || read_all_files | boolean |  no  |  || remote_dir | string |  no  |  || retries | number |  no  |  || strict_host_key_checking | boolean |  no  |  || unzip | boolean |  no  |  || username | string |  no  |  || zip_file_regex | string |  no  |  || zip_format | string |  no  |  |

---

#### [SlingshotConfigurationDetail](#SlingshotConfigurationDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || companies | [[GCompany](#GCompany)] |  no  |  || integration | [SlingshotIntegration](#SlingshotIntegration) |  no  |  |

---

#### [SlingshotIntegration](#SlingshotIntegration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || description | string |  no  |  || meta | [[Metum](#Metum)] |  no  |  || name | string |  no  |  || slug | string |  no  |  |

---

#### [StoreConfig](#StoreConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || job_code | string |  no  |  || process_config | [ProcessConfig](#ProcessConfig) |  no  |  || properties | [String: string] |  no  |  || store_alias | string |  no  |  || store_file_name | string |  no  |  || store_file_regex | string |  no  |  || storeid | string |  no  |  |

---

#### [StoreData](#StoreData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || location_id | string |  no  |  |

---

#### [StoreFilter](#StoreFilter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || exclude_tags | [string] |  no  |  || include_tags | [string] |  no  |  || query | string |  no  |  |

---

#### [SuppressStoreModel](#SuppressStoreModel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || stores | [number] |  no  |  |

---

#### [SuppressStorePayload](#SuppressStorePayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || meta | [KafkaMetaModel](#KafkaMetaModel) |  no  |  || payload | [[SuppressStoreModel](#SuppressStoreModel)] |  no  |  |

---

#### [TaskConfig](#TaskConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || name | string |  no  |  || task_config_id | number |  no  |  || task_params | [[TaskParam](#TaskParam)] |  no  |  |

---

#### [TaskDTO](#TaskDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || group_list | [[GenericDTO](#GenericDTO)] |  no  |  || type | number |  no  |  |

---

#### [TaskParam](#TaskParam)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || name | string |  no  |  || value | string |  no  |  |

---

#### [TaskStepConfig](#TaskStepConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || task_config_group_ids | [number] |  no  |  || task_config_ids | [number] |  no  |  || task_configs | [[TaskConfig](#TaskConfig)] |  no  |  |

---




