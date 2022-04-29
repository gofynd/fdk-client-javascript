



##### [Back to Platform docs](./README.md)

## Inventory Methods

* [getJobsByCompany](#getjobsbycompany)
* [updateJob](#updatejob)
* [createJob](#createjob)
* [getJobSteps](#getjobsteps)
* [getJobByCompanyAndIntegration](#getjobbycompanyandintegration)
* [disable](#disable)
* [getJobConfigDefaults](#getjobconfigdefaults)
* [getJobByCode](#getjobbycode)
* [getJobCodeMetrics](#getjobcodemetrics)
* [getJobCodesByCompanyAndIntegration](#getjobcodesbycompanyandintegration)



## Methods with example and description


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


 
 
 #### [TaskDTO](#TaskDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | number |  no  |  |
 | group_list | [[GenericDTO](#GenericDTO)] |  no  |  |

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


 
 
 #### [ResponseEnvelopeString](#ResponseEnvelopeString)

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


 
 
 #### [AWSS3config](#AWSS3config)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bucket | string |  no  |  |
 | region | string |  no  |  |
 | dir | string |  no  |  |
 | access_key | string |  no  |  |
 | secret_key | string |  no  |  |
 | local_file_path | string |  no  |  |
 | archive_path | string |  no  |  |
 | archive | boolean |  no  |  |
 | delete | boolean |  no  |  |
 | unzip | boolean |  no  |  |
 | zip_format | string |  no  |  |
 | file_regex | string |  no  |  |
 | archive_config | [ArchiveConfig](#ArchiveConfig) |  no  |  |

---


 
 
 #### [ArchiveConfig](#ArchiveConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | delete | boolean |  no  |  |
 | archive | boolean |  no  |  |
 | archive_dir | string |  no  |  |

---


 
 
 #### [Audit](#Audit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_by | string |  no  |  |
 | modified_by | string |  no  |  |
 | created_on | string |  no  |  |
 | modified_on | string |  no  |  |

---


 
 
 #### [CatalogMasterConfig](#CatalogMasterConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | source_slug | string |  no  |  |

---


 
 
 #### [CompanyConfig](#CompanyConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number |  no  |  |
 | exclude_steps | [number] |  no  |  |
 | hidden_closet_keys | [string] |  no  |  |
 | open_tags | string |  no  |  |
 | tax_identifiers | [string] |  no  |  |
 | delete_quantity_threshold | number |  no  |  |

---


 
 
 #### [DBConfig](#DBConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | vendor | string |  no  |  |
 | host | string |  no  |  |
 | port | number |  no  |  |
 | username | string |  no  |  |
 | password | string |  no  |  |
 | dbname | string |  no  |  |
 | query | string |  no  |  |
 | procedure | boolean |  no  |  |
 | driver_class | string |  no  |  |
 | jdbc_url | string |  no  |  |
 | optional_properties | [String: string] |  no  |  |

---


 
 
 #### [DBConnectionProfile](#DBConnectionProfile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | inventory | string |  no  |  |

---


 
 
 #### [DBParamConfig](#DBParamConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | params | string |  no  |  |

---


 
 
 #### [DefaultHeadersDTO](#DefaultHeadersDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store | [PropBeanDTO](#PropBeanDTO) |  no  |  |
 | intf_article_id | [PropBeanDTO](#PropBeanDTO) |  no  |  |
 | price_effective | [PropBeanDTO](#PropBeanDTO) |  no  |  |
 | quantity | [PropBeanDTO](#PropBeanDTO) |  no  |  |

---


 
 
 #### [DocMappingConfig](#DocMappingConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | properties | string |  no  |  |
 | junk_data_threshold_count | number |  no  |  |
 | prop_bean_configs | [[PropBeanConfig](#PropBeanConfig)] |  no  |  |
 | unwind_field | string |  no  |  |
 | default_headers | [DefaultHeadersDTO](#DefaultHeadersDTO) |  no  |  |

---


 
 
 #### [EmailConfig](#EmailConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | recepient | string |  no  |  |
 | host | string |  no  |  |
 | username | string |  no  |  |
 | password | string |  no  |  |
 | unzip | boolean |  no  |  |
 | read_from_content | boolean |  no  |  |
 | filter_based_on_recepients | boolean |  no  |  |
 | pcol | string |  no  |  |
 | subject_line_regex | string |  no  |  |
 | sender_address | string |  no  |  |
 | local_dir | string |  no  |  |
 | folder_name_hierarchies | [string] |  no  |  |
 | attachment_regex | string |  no  |  |
 | body_content_regex | string |  no  |  |
 | password_protected | boolean |  no  |  |
 | zip_format | string |  no  |  |
 | attachment_mandate | boolean |  no  |  |
 | filter_files_after_extraction | boolean |  no  |  |
 | archive_config | [ArchiveConfig](#ArchiveConfig) |  no  |  |
 | read_all_unread_mails | boolean |  no  |  |
 | content_type | string |  no  |  |
 | downloadable_link | boolean |  no  |  |
 | properties | [String: string] |  no  |  |

---


 
 
 #### [FTPConfig](#FTPConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | host | string |  no  |  |
 | port | number |  no  |  |
 | username | string |  no  |  |
 | password | string |  no  |  |
 | unzip | boolean |  no  |  |
 | retries | number |  no  |  |
 | interval | number |  no  |  |
 | local_dir | string |  no  |  |
 | remote_dir | string |  no  |  |
 | zip_file_regex | string |  no  |  |
 | archive_config | [ArchiveConfig](#ArchiveConfig) |  no  |  |
 | file_regex | string |  no  |  |
 | zip_format | string |  no  |  |
 | read_all_files | boolean |  no  |  |

---


 
 
 #### [FileConfig](#FileConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | delimiter | string |  no  |  |
 | charset | string |  no  |  |
 | properties | string |  no  |  |
 | file_has_header | boolean |  no  |  |
 | header_index | number |  no  |  |
 | header_array | [string] |  no  |  |
 | data_start_index | number |  no  |  |
 | prop_bean_configs | [[PropBeanConfig](#PropBeanConfig)] |  no  |  |
 | junk_data_threshold_count | number |  no  |  |
 | file_type | string |  no  |  |
 | line_validity_check | boolean |  no  |  |
 | sheet_names | [string] |  no  |  |
 | read_all_sheets | boolean |  no  |  |
 | quote_char | string |  no  |  |
 | escape_char | string |  no  |  |
 | default_headers | [DefaultHeadersDTO](#DefaultHeadersDTO) |  no  |  |

---


 
 
 #### [GoogleSpreadSheetConfig](#GoogleSpreadSheetConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | range | string |  no  |  |
 | sheet_id | string |  no  |  |
 | client_secret_location | string |  no  |  |
 | cred_storage_directory | string |  no  |  |
 | local_dir | string |  no  |  |
 | archive_config | [ArchiveConfig](#ArchiveConfig) |  no  |  |

---


 
 
 #### [HttpConfig](#HttpConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hosturl | string |  no  |  |
 | username | string |  no  |  |
 | password | string |  no  |  |
 | request_params | [String: string] |  no  |  |
 | http_method | string |  no  |  |
 | request_payload | string |  no  |  |
 | local_path | string |  no  |  |
 | archive_config | [ArchiveConfig](#ArchiveConfig) |  no  |  |

---


 
 
 #### [JobConfig](#JobConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | number |  no  |  |
 | job_code | string |  no  |  |
 | task_type | string |  no  |  |
 | sync_delay | number |  no  |  |
 | cron_expression | string |  no  |  |
 | store_filter | [StoreFilter](#StoreFilter) |  no  |  |
 | process_config | [ProcessConfig](#ProcessConfig) |  no  |  |
 | store_config | [[StoreConfig](#StoreConfig)] |  no  |  |
 | properties | [String: string] |  no  |  |
 | immediate_first_run | boolean |  no  |  |
 | disable | boolean |  no  |  |
 | dependent_job_codes | [string] |  no  |  |
 | company_config | [[CompanyConfig](#CompanyConfig)] |  no  |  |
 | company_ids | [number] |  no  |  |
 | tax_identifiers | [string] |  no  |  |
 | priority | string |  no  |  |
 | period_threshold | number |  no  |  |
 | period_threshold_type | string |  no  |  |
 | db_connection_profile | [DBConnectionProfile](#DBConnectionProfile) |  no  |  |
 | params | string |  no  |  |
 | open_tags | string |  no  |  |
 | delete_quantity_threshold | number |  no  |  |
 | catalog_master_config | [CatalogMasterConfig](#CatalogMasterConfig) |  no  |  |
 | aggregator_types | [string] |  no  |  |
 | integration_type | string |  no  |  |
 | min_price | number |  no  |  |
 | audit | [Audit](#Audit) |  no  |  |
 | version | number |  no  |  |
 | alias | string |  no  |  |

---


 
 
 #### [JobConfigRawDTO](#JobConfigRawDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | integration | string |  yes  |  |
 | company_name | string |  yes  |  |
 | company_id | number |  yes  |  |
 | data | [JobConfig](#JobConfig) |  no  |  |

---


 
 
 #### [JsonDocConfig](#JsonDocConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | prop_bean_configs | [[PropBeanConfig](#PropBeanConfig)] |  no  |  |

---


 
 
 #### [LocalFileConfig](#LocalFileConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | retries | number |  no  |  |
 | interval | number |  no  |  |
 | local_dir | string |  no  |  |
 | working_dir | string |  no  |  |
 | unzip | boolean |  no  |  |
 | zip_file_regex | string |  no  |  |
 | file_regex | string |  no  |  |
 | zip_format | string |  no  |  |
 | archive_config | [ArchiveConfig](#ArchiveConfig) |  no  |  |
 | read_all_files | boolean |  no  |  |

---


 
 
 #### [MongoDocConfig](#MongoDocConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | collection_name | string |  no  |  |
 | find_query | string |  no  |  |
 | projection_query | string |  no  |  |
 | prop_bean_configs | [[PropBeanConfig](#PropBeanConfig)] |  no  |  |
 | aggregate_pipeline | [string] |  no  |  |
 | skip_save | boolean |  no  |  |

---


 
 
 #### [OAuthConfig](#OAuthConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | limit | number |  no  |  |
 | pages | number |  no  |  |
 | interval | number |  no  |  |
 | consumer_key | string |  no  |  |
 | consumer_secret | string |  no  |  |
 | token | string |  no  |  |
 | token_secret | string |  no  |  |
 | rest_url | string |  no  |  |
 | rest_base_url | string |  no  |  |
 | function_name | string |  no  |  |

---


 
 
 #### [ProcessConfig](#ProcessConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | db_config | [DBConfig](#DBConfig) |  no  |  |
 | db_param_config | [DBParamConfig](#DBParamConfig) |  no  |  |
 | sftp_config | [SFTPConfig](#SFTPConfig) |  no  |  |
 | aws_s3_config | [AWSS3config](#AWSS3config) |  no  |  |
 | mongo_doc_config | [MongoDocConfig](#MongoDocConfig) |  no  |  |
 | ftp_config | [FTPConfig](#FTPConfig) |  no  |  |
 | email_config | [EmailConfig](#EmailConfig) |  no  |  |
 | file_config | [FileConfig](#FileConfig) |  no  |  |
 | json_doc_config | [JsonDocConfig](#JsonDocConfig) |  no  |  |
 | doc_mapping_config | [DocMappingConfig](#DocMappingConfig) |  no  |  |
 | task_step_config | [TaskStepConfig](#TaskStepConfig) |  no  |  |
 | http_config | [HttpConfig](#HttpConfig) |  no  |  |
 | local_file_config | [LocalFileConfig](#LocalFileConfig) |  no  |  |
 | oauth_config | [OAuthConfig](#OAuthConfig) |  no  |  |
 | google_spreadsheet_config | [GoogleSpreadSheetConfig](#GoogleSpreadSheetConfig) |  no  |  |

---


 
 
 #### [PropBeanConfig](#PropBeanConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | required | boolean |  no  |  |
 | mapping | [String: [PropBeanConfig](#PropBeanConfig)] |  no  |  |
 | optional | boolean |  no  |  |
 | send | [Send](#Send) |  no  |  |
 | validations | [string] |  no  |  |
 | values | [string] |  no  |  |
 | include | boolean |  no  |  |
 | source_field | string |  no  |  |
 | source_fields | [string] |  no  |  |
 | destination_field | string |  no  |  |
 | data_type | string |  no  |  |
 | default_value | string |  no  |  |
 | const_value | string |  no  |  |
 | concat_str | string |  no  |  |
 | function_name | string |  no  |  |
 | transformer_name | string |  no  |  |
 | all_param_function_name | string |  no  |  |
 | sub_separator | string |  no  |  |
 | index_field | string |  no  |  |
 | ignore_if_not_exists | boolean |  no  |  |
 | identifier_type | string |  no  |  |
 | projection_query | string |  no  |  |
 | enrich_from_master | boolean |  no  |  |

---


 
 
 #### [PropBeanDTO](#PropBeanDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | required | boolean |  no  |  |
 | optional | boolean |  no  |  |
 | include | boolean |  no  |  |
 | source_field | string |  no  |  |
 | source_fields | [string] |  no  |  |
 | destination_field | string |  no  |  |
 | data_type | string |  no  |  |
 | default_value | string |  no  |  |
 | const_value | string |  no  |  |
 | concat_str | string |  no  |  |
 | function_name | string |  no  |  |
 | transformer_name | string |  no  |  |
 | all_param_function_name | string |  no  |  |
 | sub_separator | string |  no  |  |
 | index_field | string |  no  |  |
 | ignore_if_not_exists | boolean |  no  |  |
 | identifier_type | string |  no  |  |
 | projection_query | string |  no  |  |
 | enrich_from_master | boolean |  no  |  |

---


 
 
 #### [ResponseEnvelopeListJobConfigRawDTO](#ResponseEnvelopeListJobConfigRawDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | timestamp | string |  no  |  |
 | status | number |  no  |  |
 | error | string |  no  |  |
 | exception | string |  no  |  |
 | message | string |  no  |  |
 | total_time_taken_in_millis | number |  no  |  |
 | http_status | string |  no  |  |
 | items | [[JobConfigRawDTO](#JobConfigRawDTO)] |  no  |  |
 | payload | [[JobConfigRawDTO](#JobConfigRawDTO)] |  no  |  |
 | trace_id | string |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [SFTPConfig](#SFTPConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | host | string |  no  |  |
 | port | number |  no  |  |
 | username | string |  no  |  |
 | password | string |  no  |  |
 | unzip | boolean |  no  |  |
 | retries | number |  no  |  |
 | interval | number |  no  |  |
 | private_key_path | string |  no  |  |
 | strict_host_key_checking | boolean |  no  |  |
 | local_dir | string |  no  |  |
 | remote_dir | string |  no  |  |
 | password_protected | boolean |  no  |  |
 | zip_file_regex | string |  no  |  |
 | file_regex | string |  no  |  |
 | zip_format | string |  no  |  |
 | archive_config | [ArchiveConfig](#ArchiveConfig) |  no  |  |
 | read_all_files | boolean |  no  |  |

---


 
 
 #### [Send](#Send)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | raw | boolean |  no  |  |
 | processed | boolean |  no  |  |

---


 
 
 #### [StoreConfig](#StoreConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | job_code | string |  no  |  |
 | storeid | string |  no  |  |
 | store_alias | string |  no  |  |
 | store_file_regex | string |  no  |  |
 | store_file_name | string |  no  |  |
 | process_config | [ProcessConfig](#ProcessConfig) |  no  |  |
 | properties | [String: string] |  no  |  |

---


 
 
 #### [StoreFilter](#StoreFilter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | include_tags | [string] |  no  |  |
 | exclude_tags | [string] |  no  |  |
 | query | string |  no  |  |

---


 
 
 #### [TaskConfig](#TaskConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | task_config_id | number |  no  |  |
 | task_params | [[TaskParam](#TaskParam)] |  no  |  |

---


 
 
 #### [TaskParam](#TaskParam)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [TaskStepConfig](#TaskStepConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | task_configs | [[TaskConfig](#TaskConfig)] |  no  |  |
 | task_config_ids | [number] |  no  |  |
 | task_config_group_ids | [number] |  no  |  |

---


 
 
 #### [JobStepsDTO](#JobStepsDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | step_name | string |  no  |  |
 | type | string |  no  |  |
 | step_execution_time | number |  no  |  |
 | start_count | number |  no  |  |
 | end_count | number |  no  |  |
 | deleted_count | number |  no  |  |
 | processed_start_time | string |  no  |  |
 | processed_at | string |  no  |  |

---


 
 
 #### [ResponseEnvelopeListJobStepsDTO](#ResponseEnvelopeListJobStepsDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | timestamp | string |  no  |  |
 | status | number |  no  |  |
 | error | string |  no  |  |
 | exception | string |  no  |  |
 | message | string |  no  |  |
 | total_time_taken_in_millis | number |  no  |  |
 | http_status | string |  no  |  |
 | items | [[JobStepsDTO](#JobStepsDTO)] |  no  |  |
 | payload | [[JobStepsDTO](#JobStepsDTO)] |  no  |  |
 | trace_id | string |  no  |  |
 | page | [Page](#Page) |  no  |  |

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


 
 
 #### [JobHistoryDto](#JobHistoryDto)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_added_count | number |  no  |  |
 | total_updated_count | number |  no  |  |
 | total_suppressed_count | number |  no  |  |
 | total_initial_count | number |  no  |  |
 | job_id | number |  no  |  |
 | status | string |  no  |  |
 | job_code | string |  no  |  |
 | processed_on | string |  no  |  |
 | filename | [string] |  no  |  |
 | error_type | string |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [JobMetricsDto](#JobMetricsDto)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | job_code | string |  no  |  |
 | is_run_more_than_usual | string |  no  |  |
 | job_history | [[JobHistoryDto](#JobHistoryDto)] |  no  |  |
 | total_success_count | number |  no  |  |
 | total_failure_count | number |  no  |  |
 | total_warning_count | number |  no  |  |
 | total_suppressed_count | number |  no  |  |
 | total_job_runs | number |  no  |  |

---


 
 
 #### [ResponseEnvelopeJobMetricsDto](#ResponseEnvelopeJobMetricsDto)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | timestamp | string |  no  |  |
 | status | number |  no  |  |
 | error | string |  no  |  |
 | exception | string |  no  |  |
 | message | string |  no  |  |
 | total_time_taken_in_millis | number |  no  |  |
 | http_status | string |  no  |  |
 | items | [JobMetricsDto](#JobMetricsDto) |  no  |  |
 | payload | [JobMetricsDto](#JobMetricsDto) |  no  |  |
 | trace_id | string |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [JobConfigListDTO](#JobConfigListDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |
 | alias | string |  no  |  |
 | modified_by | string |  no  |  |
 | created_by | string |  no  |  |
 | modified_on | string |  no  |  |
 | created_on | string |  no  |  |
 | active | boolean |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ResponseEnvelopeListJobConfigListDTO](#ResponseEnvelopeListJobConfigListDTO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | timestamp | string |  no  |  |
 | status | number |  no  |  |
 | error | string |  no  |  |
 | exception | string |  no  |  |
 | message | string |  no  |  |
 | total_time_taken_in_millis | number |  no  |  |
 | http_status | string |  no  |  |
 | items | [[JobConfigListDTO](#JobConfigListDTO)] |  no  |  |
 | payload | [[JobConfigListDTO](#JobConfigListDTO)] |  no  |  |
 | trace_id | string |  no  |  |
 | page | [Page](#Page) |  no  |  |

---




