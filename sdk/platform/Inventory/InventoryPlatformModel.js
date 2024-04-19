const Joi = require("joi");

/**
 * @typedef ArchiveConfig
 * @property {boolean} [archive]
 * @property {string} [archive_dir]
 * @property {boolean} [delete]
 */

/**
 * @typedef Audit
 * @property {string} [created_by]
 * @property {string} [created_on]
 * @property {string} [modified_by]
 * @property {string} [modified_on]
 */

/**
 * @typedef AWSS3config
 * @property {string} [access_key]
 * @property {boolean} [archive]
 * @property {ArchiveConfig} [archive_config]
 * @property {string} [archive_path]
 * @property {string} [bucket]
 * @property {boolean} [delete]
 * @property {string} [dir]
 * @property {string} [file_regex]
 * @property {string} [local_file_path]
 * @property {string} [region]
 * @property {string} [secret_key]
 * @property {boolean} [unzip]
 * @property {string} [zip_format]
 */

/**
 * @typedef CatalogMasterConfig
 * @property {string} [source_slug]
 */

/**
 * @typedef CompanyConfig
 * @property {number} [company_id]
 * @property {number} [delete_quantity_threshold]
 * @property {number[]} [exclude_steps]
 * @property {string[]} [hidden_closet_keys]
 * @property {Object} [open_tags]
 * @property {string[]} [tax_identifiers]
 */

/**
 * @typedef DataTresholdDTO
 * @property {number} [min_price]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {GenericDTO[]} [period_type_list]
 * @property {number} [safe_stock]
 */

/**
 * @typedef DBConfig
 * @property {string} [dbname]
 * @property {string} [driver_class]
 * @property {string} [host]
 * @property {string} [jdbc_url]
 * @property {Object} [optional_properties]
 * @property {string} [password]
 * @property {number} [port]
 * @property {boolean} [procedure]
 * @property {string} [query]
 * @property {string} [username]
 * @property {string} [vendor]
 */

/**
 * @typedef DBConnectionProfile
 * @property {string} [inventory]
 */

/**
 * @typedef DBParamConfig
 * @property {Object} [params]
 */

/**
 * @typedef DefaultHeadersDTO
 * @property {PropBeanDTO} [intf_article_id]
 * @property {PropBeanDTO} [price_effective]
 * @property {PropBeanDTO} [quantity]
 * @property {PropBeanDTO} [store]
 */

/**
 * @typedef DocMappingConfig
 * @property {DefaultHeadersDTO} [default_headers]
 * @property {number} [junk_data_threshold_count]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {Object} [properties]
 * @property {string} [unwind_field]
 */

/**
 * @typedef EmailConfig
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [attachment_mandate]
 * @property {string} [attachment_regex]
 * @property {string} [body_content_regex]
 * @property {string} [content_type]
 * @property {boolean} [downloadable_link]
 * @property {boolean} [filter_based_on_recepients]
 * @property {boolean} [filter_files_after_extraction]
 * @property {string[]} [folder_name_hierarchies]
 * @property {string} [host]
 * @property {string} [local_dir]
 * @property {string} [password]
 * @property {boolean} [password_protected]
 * @property {string} [pcol]
 * @property {Object} [properties]
 * @property {boolean} [read_all_unread_mails]
 * @property {boolean} [read_from_content]
 * @property {string} [recepient]
 * @property {string} [sender_address]
 * @property {string} [subject_line_regex]
 * @property {boolean} [unzip]
 * @property {string} [username]
 * @property {string} [zip_format]
 */

/**
 * @typedef FileConfig
 * @property {string} [charset]
 * @property {number} [data_start_index]
 * @property {DefaultHeadersDTO} [default_headers]
 * @property {string} [delimiter]
 * @property {string} [escape_char]
 * @property {boolean} [file_has_header]
 * @property {string} [file_type]
 * @property {string[]} [header_array]
 * @property {number} [header_index]
 * @property {number} [junk_data_threshold_count]
 * @property {boolean} [line_validity_check]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {Object} [properties]
 * @property {string} [quote_char]
 * @property {boolean} [read_all_sheets]
 * @property {string[]} [sheet_names]
 */

/**
 * @typedef FTPConfig
 * @property {ArchiveConfig} [archive_config]
 * @property {string} [file_regex]
 * @property {string} [host]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {string} [password]
 * @property {number} [port]
 * @property {boolean} [read_all_files]
 * @property {string} [remote_dir]
 * @property {number} [retries]
 * @property {boolean} [unzip]
 * @property {string} [username]
 * @property {string} [zip_file_regex]
 * @property {string} [zip_format]
 */

/**
 * @typedef GCompany
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {string} [name]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {GStore[]} [stores]
 * @property {string} [token]
 * @property {number} [uid]
 */

/**
 * @typedef GenericDTO
 * @property {string} [text]
 * @property {Object} [value]
 */

/**
 * @typedef GoogleSpreadSheetConfig
 * @property {ArchiveConfig} [archive_config]
 * @property {string} [client_secret_location]
 * @property {string} [cred_storage_directory]
 * @property {string} [local_dir]
 * @property {string} [range]
 * @property {string} [sheet_id]
 */

/**
 * @typedef GStore
 * @property {string} [_id]
 * @property {string} [code]
 * @property {StoreData} [data]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {string} [name]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {number} [uid]
 */

/**
 * @typedef HttpConfig
 * @property {ArchiveConfig} [archive_config]
 * @property {string} [hosturl]
 * @property {string} [http_method]
 * @property {string} [local_path]
 * @property {string} [password]
 * @property {Object} [request_params]
 * @property {string} [request_payload]
 * @property {string} [username]
 */

/**
 * @typedef JobConfig
 * @property {number} [_id]
 * @property {string[]} [aggregator_types]
 * @property {string} [alias]
 * @property {Audit} [audit]
 * @property {CatalogMasterConfig} [catalog_master_config]
 * @property {CompanyConfig[]} [company_config]
 * @property {number[]} [company_ids]
 * @property {string} [cron_expression]
 * @property {DBConnectionProfile} [db_connection_profile]
 * @property {number} [delete_quantity_threshold]
 * @property {string[]} [dependent_job_codes]
 * @property {boolean} [disable]
 * @property {boolean} [immediate_first_run]
 * @property {string} [integration_type]
 * @property {string} [job_code]
 * @property {number} [min_price]
 * @property {Object} [open_tags]
 * @property {Object} [params]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {string} [priority]
 * @property {ProcessConfig} [process_config]
 * @property {Object} [properties]
 * @property {StoreConfig[]} [store_config]
 * @property {StoreFilter} [store_filter]
 * @property {number} [sync_delay]
 * @property {string} [task_type]
 * @property {string[]} [tax_identifiers]
 * @property {number} [version]
 */

/**
 * @typedef JobConfigDTO
 * @property {string} [alias]
 * @property {number} company_id
 * @property {string} [company_name]
 * @property {string} integration
 * @property {Object} [integration_data]
 * @property {string} [job_code]
 * @property {TaskDTO} [task_details]
 * @property {DataTresholdDTO} [threshold_details]
 */

/**
 * @typedef JobConfigListDTO
 * @property {boolean} [active]
 * @property {string} [alias]
 * @property {string} [code]
 * @property {string} [created_by]
 * @property {string} [created_on]
 * @property {string} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [type]
 */

/**
 * @typedef JobConfigRawDTO
 * @property {number} company_id
 * @property {string} company_name
 * @property {JobConfig} [data]
 * @property {string} integration
 */

/**
 * @typedef JobHistoryDto
 * @property {string} [error_type]
 * @property {string[]} [filename]
 * @property {string} [job_code]
 * @property {number} [job_id]
 * @property {string} [message]
 * @property {string} [processed_on]
 * @property {string} [status]
 * @property {number} [total_added_count]
 * @property {number} [total_initial_count]
 * @property {number} [total_suppressed_count]
 * @property {number} [total_updated_count]
 */

/**
 * @typedef JobMetricsDto
 * @property {string} [is_run_more_than_usual]
 * @property {string} [job_code]
 * @property {JobHistoryDto[]} [job_history]
 * @property {number} [total_failure_count]
 * @property {number} [total_job_runs]
 * @property {number} [total_success_count]
 * @property {number} [total_suppressed_count]
 * @property {number} [total_warning_count]
 */

/**
 * @typedef JobStepsDTO
 * @property {number} [deleted_count]
 * @property {number} [end_count]
 * @property {string} [processed_at]
 * @property {string} [processed_start_time]
 * @property {number} [start_count]
 * @property {number} [step_execution_time]
 * @property {string} [step_name]
 * @property {string} [type]
 */

/**
 * @typedef JsonDocConfig
 * @property {PropBeanConfig[]} [prop_bean_configs]
 */

/**
 * @typedef KafkaMetaModel
 * @property {string} [action]
 * @property {number} [batch_id]
 * @property {string} [created_on]
 * @property {number} [created_timestamp]
 * @property {string} [job_type]
 * @property {string[]} [trace]
 */

/**
 * @typedef KafkaResponse
 * @property {number} [offset]
 * @property {number} [partition]
 */

/**
 * @typedef LocalFileConfig
 * @property {ArchiveConfig} [archive_config]
 * @property {string} [file_regex]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {boolean} [read_all_files]
 * @property {number} [retries]
 * @property {boolean} [unzip]
 * @property {string} [working_dir]
 * @property {string} [zip_file_regex]
 * @property {string} [zip_format]
 */

/**
 * @typedef Metum
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef MongoDocConfig
 * @property {Object[]} [aggregate_pipeline]
 * @property {string} [collection_name]
 * @property {Object} [find_query]
 * @property {Object} [projection_query]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {boolean} [skip_save]
 */

/**
 * @typedef OAuthConfig
 * @property {string} [consumer_key]
 * @property {string} [consumer_secret]
 * @property {string} [function_name]
 * @property {number} [interval]
 * @property {number} [limit]
 * @property {number} [pages]
 * @property {string} [rest_base_url]
 * @property {string} [rest_url]
 * @property {string} [token]
 * @property {string} [token_secret]
 */

/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */

/**
 * @typedef ProcessConfig
 * @property {AWSS3config} [aws_s3_config]
 * @property {DBConfig} [db_config]
 * @property {DBParamConfig} [db_param_config]
 * @property {DocMappingConfig} [doc_mapping_config]
 * @property {EmailConfig} [email_config]
 * @property {FileConfig} [file_config]
 * @property {FTPConfig} [ftp_config]
 * @property {GoogleSpreadSheetConfig} [google_spreadsheet_config]
 * @property {HttpConfig} [http_config]
 * @property {JsonDocConfig} [json_doc_config]
 * @property {LocalFileConfig} [local_file_config]
 * @property {MongoDocConfig} [mongo_doc_config]
 * @property {OAuthConfig} [oauth_config]
 * @property {SFTPConfig} [sftp_config]
 * @property {TaskStepConfig} [task_step_config]
 */

/**
 * @typedef PropBeanConfig
 * @property {string} [all_param_function_name]
 * @property {string} [concat_str]
 * @property {Object} [const_value]
 * @property {string} [data_type]
 * @property {Object} [default_value]
 * @property {string} [destination_field]
 * @property {boolean} [enrich_from_master]
 * @property {string} [function_name]
 * @property {string} [identifier_type]
 * @property {boolean} [ignore_if_not_exists]
 * @property {boolean} [include]
 * @property {string} [index_field]
 * @property {boolean} [optional]
 * @property {Object} [projection_query]
 * @property {boolean} [required]
 * @property {Send} [send]
 * @property {string} [source_field]
 * @property {string[]} [source_fields]
 * @property {string} [sub_separator]
 * @property {string} [transformer_name]
 * @property {Object[]} [validations]
 * @property {string[]} [values]
 */

/**
 * @typedef PropBeanDTO
 * @property {string} [all_param_function_name]
 * @property {string} [concat_str]
 * @property {Object} [const_value]
 * @property {string} [data_type]
 * @property {Object} [default_value]
 * @property {string} [destination_field]
 * @property {boolean} [enrich_from_master]
 * @property {string} [function_name]
 * @property {string} [identifier_type]
 * @property {boolean} [ignore_if_not_exists]
 * @property {boolean} [include]
 * @property {string} [index_field]
 * @property {boolean} [optional]
 * @property {Object} [projection_query]
 * @property {boolean} [required]
 * @property {string} [source_field]
 * @property {string[]} [source_fields]
 * @property {string} [sub_separator]
 * @property {string} [transformer_name]
 */

/**
 * @typedef ResponseEnvelopeJobConfigDTO
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [http_status]
 * @property {JobConfigDTO} [items]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {JobConfigDTO} [payload]
 * @property {number} [status]
 * @property {string} [timestamp]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [trace_id]
 */

/**
 * @typedef ResponseEnvelopeJobMetricsDto
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [http_status]
 * @property {JobMetricsDto} [items]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {JobMetricsDto} [payload]
 * @property {number} [status]
 * @property {string} [timestamp]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [trace_id]
 */

/**
 * @typedef ResponseEnvelopeKafkaResponse
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [http_status]
 * @property {KafkaResponse} [items]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {KafkaResponse} [payload]
 * @property {number} [status]
 * @property {string} [timestamp]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [trace_id]
 */

/**
 * @typedef ResponseEnvelopeListJobConfigDTO
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [http_status]
 * @property {JobConfigDTO[]} [items]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {JobConfigDTO[]} [payload]
 * @property {number} [status]
 * @property {string} [timestamp]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [trace_id]
 */

/**
 * @typedef ResponseEnvelopeListJobConfigListDTO
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [http_status]
 * @property {JobConfigListDTO[]} [items]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {JobConfigListDTO[]} [payload]
 * @property {number} [status]
 * @property {string} [timestamp]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [trace_id]
 */

/**
 * @typedef ResponseEnvelopeListJobConfigRawDTO
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [http_status]
 * @property {JobConfigRawDTO[]} [items]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {JobConfigRawDTO[]} [payload]
 * @property {number} [status]
 * @property {string} [timestamp]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [trace_id]
 */

/**
 * @typedef ResponseEnvelopeListJobStepsDTO
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [http_status]
 * @property {JobStepsDTO[]} [items]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {JobStepsDTO[]} [payload]
 * @property {number} [status]
 * @property {string} [timestamp]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [trace_id]
 */

/**
 * @typedef ResponseEnvelopeListSlingshotConfigurationDetail
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [http_status]
 * @property {SlingshotConfigurationDetail[]} [items]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {SlingshotConfigurationDetail[]} [payload]
 * @property {number} [status]
 * @property {string} [timestamp]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [trace_id]
 */

/**
 * @typedef ResponseEnvelopeString
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [http_status]
 * @property {string} [items]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {string} [payload]
 * @property {number} [status]
 * @property {string} [timestamp]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [trace_id]
 */

/**
 * @typedef Send
 * @property {boolean} [processed]
 * @property {boolean} [raw]
 */

/**
 * @typedef SFTPConfig
 * @property {ArchiveConfig} [archive_config]
 * @property {string} [file_regex]
 * @property {string} [host]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {string} [password]
 * @property {boolean} [password_protected]
 * @property {number} [port]
 * @property {string} [private_key_path]
 * @property {boolean} [read_all_files]
 * @property {string} [remote_dir]
 * @property {number} [retries]
 * @property {boolean} [strict_host_key_checking]
 * @property {boolean} [unzip]
 * @property {string} [username]
 * @property {string} [zip_file_regex]
 * @property {string} [zip_format]
 */

/**
 * @typedef SlingshotConfigurationDetail
 * @property {GCompany[]} [companies]
 * @property {SlingshotIntegration} [integration]
 */

/**
 * @typedef SlingshotIntegration
 * @property {string} [_id]
 * @property {string} [description]
 * @property {Metum[]} [meta]
 * @property {string} [name]
 * @property {string} [slug]
 */

/**
 * @typedef StoreConfig
 * @property {string} [job_code]
 * @property {ProcessConfig} [process_config]
 * @property {Object} [properties]
 * @property {string} [store_alias]
 * @property {string} [store_file_name]
 * @property {string} [store_file_regex]
 * @property {string} [storeid]
 */

/**
 * @typedef StoreData
 * @property {string} [location_id]
 */

/**
 * @typedef StoreFilter
 * @property {string[]} [exclude_tags]
 * @property {string[]} [include_tags]
 * @property {Object} [query]
 */

/**
 * @typedef SuppressStoreModel
 * @property {number[]} [stores]
 */

/**
 * @typedef SuppressStorePayload
 * @property {KafkaMetaModel} [meta]
 * @property {SuppressStoreModel[]} [payload]
 */

/**
 * @typedef TaskConfig
 * @property {string} [name]
 * @property {number} [task_config_id]
 * @property {TaskParam[]} [task_params]
 */

/**
 * @typedef TaskDTO
 * @property {GenericDTO[]} [group_list]
 * @property {number} [type]
 */

/**
 * @typedef TaskParam
 * @property {string} [name]
 * @property {Object} [value]
 */

/**
 * @typedef TaskStepConfig
 * @property {number[]} [task_config_group_ids]
 * @property {number[]} [task_config_ids]
 * @property {TaskConfig[]} [task_configs]
 */

class InventoryPlatformModel {
  /** @returns {ArchiveConfig} */
  static ArchiveConfig() {
    return Joi.object({
      archive: Joi.boolean(),
      archive_dir: Joi.string().allow(""),
      delete: Joi.boolean(),
    });
  }

  /** @returns {Audit} */
  static Audit() {
    return Joi.object({
      created_by: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      modified_by: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
    });
  }

  /** @returns {AWSS3config} */
  static AWSS3config() {
    return Joi.object({
      access_key: Joi.string().allow(""),
      archive: Joi.boolean(),
      archive_config: InventoryPlatformModel.ArchiveConfig(),
      archive_path: Joi.string().allow(""),
      bucket: Joi.string().allow(""),
      delete: Joi.boolean(),
      dir: Joi.string().allow(""),
      file_regex: Joi.string().allow(""),
      local_file_path: Joi.string().allow(""),
      region: Joi.string().allow(""),
      secret_key: Joi.string().allow(""),
      unzip: Joi.boolean(),
      zip_format: Joi.string().allow(""),
    });
  }

  /** @returns {CatalogMasterConfig} */
  static CatalogMasterConfig() {
    return Joi.object({
      source_slug: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyConfig} */
  static CompanyConfig() {
    return Joi.object({
      company_id: Joi.number(),
      delete_quantity_threshold: Joi.number(),
      exclude_steps: Joi.array().items(Joi.number()),
      hidden_closet_keys: Joi.array().items(Joi.string().allow("")),
      open_tags: Joi.object().pattern(/\S/, Joi.any()),
      tax_identifiers: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {DataTresholdDTO} */
  static DataTresholdDTO() {
    return Joi.object({
      min_price: Joi.number(),
      period_threshold: Joi.number(),
      period_threshold_type: Joi.string().allow(""),
      period_type_list: Joi.array().items(InventoryPlatformModel.GenericDTO()),
      safe_stock: Joi.number(),
    });
  }

  /** @returns {DBConfig} */
  static DBConfig() {
    return Joi.object({
      dbname: Joi.string().allow(""),
      driver_class: Joi.string().allow(""),
      host: Joi.string().allow(""),
      jdbc_url: Joi.string().allow(""),
      optional_properties: Joi.object().pattern(/\S/, Joi.string().allow("")),
      password: Joi.string().allow(""),
      port: Joi.number(),
      procedure: Joi.boolean(),
      query: Joi.string().allow(""),
      username: Joi.string().allow(""),
      vendor: Joi.string().allow(""),
    });
  }

  /** @returns {DBConnectionProfile} */
  static DBConnectionProfile() {
    return Joi.object({
      inventory: Joi.string().allow(""),
    });
  }

  /** @returns {DBParamConfig} */
  static DBParamConfig() {
    return Joi.object({
      params: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {DefaultHeadersDTO} */
  static DefaultHeadersDTO() {
    return Joi.object({
      intf_article_id: InventoryPlatformModel.PropBeanDTO(),
      price_effective: InventoryPlatformModel.PropBeanDTO(),
      quantity: InventoryPlatformModel.PropBeanDTO(),
      store: InventoryPlatformModel.PropBeanDTO(),
    });
  }

  /** @returns {DocMappingConfig} */
  static DocMappingConfig() {
    return Joi.object({
      default_headers: InventoryPlatformModel.DefaultHeadersDTO(),
      junk_data_threshold_count: Joi.number(),
      prop_bean_configs: Joi.array().items(
        InventoryPlatformModel.PropBeanConfig()
      ),
      properties: Joi.object().pattern(/\S/, Joi.any()),
      unwind_field: Joi.string().allow(""),
    });
  }

  /** @returns {EmailConfig} */
  static EmailConfig() {
    return Joi.object({
      archive_config: InventoryPlatformModel.ArchiveConfig(),
      attachment_mandate: Joi.boolean(),
      attachment_regex: Joi.string().allow(""),
      body_content_regex: Joi.string().allow(""),
      content_type: Joi.string().allow(""),
      downloadable_link: Joi.boolean(),
      filter_based_on_recepients: Joi.boolean(),
      filter_files_after_extraction: Joi.boolean(),
      folder_name_hierarchies: Joi.array().items(Joi.string().allow("")),
      host: Joi.string().allow(""),
      local_dir: Joi.string().allow(""),
      password: Joi.string().allow(""),
      password_protected: Joi.boolean(),
      pcol: Joi.string().allow(""),
      properties: Joi.object().pattern(/\S/, Joi.string().allow("")),
      read_all_unread_mails: Joi.boolean(),
      read_from_content: Joi.boolean(),
      recepient: Joi.string().allow(""),
      sender_address: Joi.string().allow(""),
      subject_line_regex: Joi.string().allow(""),
      unzip: Joi.boolean(),
      username: Joi.string().allow(""),
      zip_format: Joi.string().allow(""),
    });
  }

  /** @returns {FileConfig} */
  static FileConfig() {
    return Joi.object({
      charset: Joi.string().allow(""),
      data_start_index: Joi.number(),
      default_headers: InventoryPlatformModel.DefaultHeadersDTO(),
      delimiter: Joi.string().allow(""),
      escape_char: Joi.string().allow(""),
      file_has_header: Joi.boolean(),
      file_type: Joi.string().allow(""),
      header_array: Joi.array().items(Joi.string().allow("")),
      header_index: Joi.number(),
      junk_data_threshold_count: Joi.number(),
      line_validity_check: Joi.boolean(),
      prop_bean_configs: Joi.array().items(
        InventoryPlatformModel.PropBeanConfig()
      ),
      properties: Joi.object().pattern(/\S/, Joi.any()),
      quote_char: Joi.string().allow(""),
      read_all_sheets: Joi.boolean(),
      sheet_names: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {FTPConfig} */
  static FTPConfig() {
    return Joi.object({
      archive_config: InventoryPlatformModel.ArchiveConfig(),
      file_regex: Joi.string().allow(""),
      host: Joi.string().allow(""),
      interval: Joi.number(),
      local_dir: Joi.string().allow(""),
      password: Joi.string().allow(""),
      port: Joi.number(),
      read_all_files: Joi.boolean(),
      remote_dir: Joi.string().allow(""),
      retries: Joi.number(),
      unzip: Joi.boolean(),
      username: Joi.string().allow(""),
      zip_file_regex: Joi.string().allow(""),
      zip_format: Joi.string().allow(""),
    });
  }

  /** @returns {GCompany} */
  static GCompany() {
    return Joi.object({
      _id: Joi.string().allow(""),
      integration: Joi.string().allow(""),
      level: Joi.string().allow(""),
      name: Joi.string().allow(""),
      opted: Joi.boolean(),
      permissions: Joi.array().items(Joi.string().allow("")),
      stores: Joi.array().items(InventoryPlatformModel.GStore()),
      token: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {GenericDTO} */
  static GenericDTO() {
    return Joi.object({
      text: Joi.string().allow(""),
      value: Joi.any(),
    });
  }

  /** @returns {GoogleSpreadSheetConfig} */
  static GoogleSpreadSheetConfig() {
    return Joi.object({
      archive_config: InventoryPlatformModel.ArchiveConfig(),
      client_secret_location: Joi.string().allow(""),
      cred_storage_directory: Joi.string().allow(""),
      local_dir: Joi.string().allow(""),
      range: Joi.string().allow(""),
      sheet_id: Joi.string().allow(""),
    });
  }

  /** @returns {GStore} */
  static GStore() {
    return Joi.object({
      _id: Joi.string().allow(""),
      code: Joi.string().allow(""),
      data: InventoryPlatformModel.StoreData(),
      integration: Joi.string().allow(""),
      level: Joi.string().allow(""),
      name: Joi.string().allow(""),
      opted: Joi.boolean(),
      permissions: Joi.array().items(Joi.string().allow("")),
      token: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {HttpConfig} */
  static HttpConfig() {
    return Joi.object({
      archive_config: InventoryPlatformModel.ArchiveConfig(),
      hosturl: Joi.string().allow(""),
      http_method: Joi.string().allow(""),
      local_path: Joi.string().allow(""),
      password: Joi.string().allow(""),
      request_params: Joi.object().pattern(/\S/, Joi.string().allow("")),
      request_payload: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {JobConfig} */
  static JobConfig() {
    return Joi.object({
      _id: Joi.number(),
      aggregator_types: Joi.array().items(Joi.string().allow("")),
      alias: Joi.string().allow(""),
      audit: InventoryPlatformModel.Audit(),
      catalog_master_config: InventoryPlatformModel.CatalogMasterConfig(),
      company_config: Joi.array().items(InventoryPlatformModel.CompanyConfig()),
      company_ids: Joi.array().items(Joi.number()),
      cron_expression: Joi.string().allow(""),
      db_connection_profile: InventoryPlatformModel.DBConnectionProfile(),
      delete_quantity_threshold: Joi.number(),
      dependent_job_codes: Joi.array().items(Joi.string().allow("")),
      disable: Joi.boolean(),
      immediate_first_run: Joi.boolean(),
      integration_type: Joi.string().allow(""),
      job_code: Joi.string().allow(""),
      min_price: Joi.number(),
      open_tags: Joi.object().pattern(/\S/, Joi.any()),
      params: Joi.object().pattern(/\S/, Joi.any()),
      period_threshold: Joi.number(),
      period_threshold_type: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      process_config: InventoryPlatformModel.ProcessConfig(),
      properties: Joi.object().pattern(/\S/, Joi.string().allow("")),
      store_config: Joi.array().items(InventoryPlatformModel.StoreConfig()),
      store_filter: InventoryPlatformModel.StoreFilter(),
      sync_delay: Joi.number(),
      task_type: Joi.string().allow(""),
      tax_identifiers: Joi.array().items(Joi.string().allow("")),
      version: Joi.number(),
    });
  }

  /** @returns {JobConfigDTO} */
  static JobConfigDTO() {
    return Joi.object({
      alias: Joi.string().allow(""),
      company_id: Joi.number().required(),
      company_name: Joi.string().allow(""),
      integration: Joi.string().allow("").required(),
      integration_data: Joi.object().pattern(/\S/, Joi.any()),
      job_code: Joi.string().allow(""),
      task_details: InventoryPlatformModel.TaskDTO(),
      threshold_details: InventoryPlatformModel.DataTresholdDTO(),
    });
  }

  /** @returns {JobConfigListDTO} */
  static JobConfigListDTO() {
    return Joi.object({
      active: Joi.boolean(),
      alias: Joi.string().allow(""),
      code: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      modified_by: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {JobConfigRawDTO} */
  static JobConfigRawDTO() {
    return Joi.object({
      company_id: Joi.number().required(),
      company_name: Joi.string().allow("").required(),
      data: InventoryPlatformModel.JobConfig(),
      integration: Joi.string().allow("").required(),
    });
  }

  /** @returns {JobHistoryDto} */
  static JobHistoryDto() {
    return Joi.object({
      error_type: Joi.string().allow(""),
      filename: Joi.array().items(Joi.string().allow("")),
      job_code: Joi.string().allow(""),
      job_id: Joi.number(),
      message: Joi.string().allow(""),
      processed_on: Joi.string().allow(""),
      status: Joi.string().allow(""),
      total_added_count: Joi.number(),
      total_initial_count: Joi.number(),
      total_suppressed_count: Joi.number(),
      total_updated_count: Joi.number(),
    });
  }

  /** @returns {JobMetricsDto} */
  static JobMetricsDto() {
    return Joi.object({
      is_run_more_than_usual: Joi.string().allow(""),
      job_code: Joi.string().allow(""),
      job_history: Joi.array().items(InventoryPlatformModel.JobHistoryDto()),
      total_failure_count: Joi.number(),
      total_job_runs: Joi.number(),
      total_success_count: Joi.number(),
      total_suppressed_count: Joi.number(),
      total_warning_count: Joi.number(),
    });
  }

  /** @returns {JobStepsDTO} */
  static JobStepsDTO() {
    return Joi.object({
      deleted_count: Joi.number(),
      end_count: Joi.number(),
      processed_at: Joi.string().allow(""),
      processed_start_time: Joi.string().allow(""),
      start_count: Joi.number(),
      step_execution_time: Joi.number(),
      step_name: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {JsonDocConfig} */
  static JsonDocConfig() {
    return Joi.object({
      prop_bean_configs: Joi.array().items(
        InventoryPlatformModel.PropBeanConfig()
      ),
    });
  }

  /** @returns {KafkaMetaModel} */
  static KafkaMetaModel() {
    return Joi.object({
      action: Joi.string().allow(""),
      batch_id: Joi.number(),
      created_on: Joi.string().allow(""),
      created_timestamp: Joi.number(),
      job_type: Joi.string().allow(""),
      trace: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {KafkaResponse} */
  static KafkaResponse() {
    return Joi.object({
      offset: Joi.number(),
      partition: Joi.number(),
    });
  }

  /** @returns {LocalFileConfig} */
  static LocalFileConfig() {
    return Joi.object({
      archive_config: InventoryPlatformModel.ArchiveConfig(),
      file_regex: Joi.string().allow(""),
      interval: Joi.number(),
      local_dir: Joi.string().allow(""),
      read_all_files: Joi.boolean(),
      retries: Joi.number(),
      unzip: Joi.boolean(),
      working_dir: Joi.string().allow(""),
      zip_file_regex: Joi.string().allow(""),
      zip_format: Joi.string().allow(""),
    });
  }

  /** @returns {Metum} */
  static Metum() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {MongoDocConfig} */
  static MongoDocConfig() {
    return Joi.object({
      aggregate_pipeline: Joi.array().items(
        Joi.object().pattern(/\S/, Joi.any())
      ),
      collection_name: Joi.string().allow(""),
      find_query: Joi.object().pattern(/\S/, Joi.any()),
      projection_query: Joi.object().pattern(/\S/, Joi.any()),
      prop_bean_configs: Joi.array().items(
        InventoryPlatformModel.PropBeanConfig()
      ),
      skip_save: Joi.boolean(),
    });
  }

  /** @returns {OAuthConfig} */
  static OAuthConfig() {
    return Joi.object({
      consumer_key: Joi.string().allow(""),
      consumer_secret: Joi.string().allow(""),
      function_name: Joi.string().allow(""),
      interval: Joi.number(),
      limit: Joi.number(),
      pages: Joi.number(),
      rest_base_url: Joi.string().allow(""),
      rest_url: Joi.string().allow(""),
      token: Joi.string().allow(""),
      token_secret: Joi.string().allow(""),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ProcessConfig} */
  static ProcessConfig() {
    return Joi.object({
      aws_s3_config: InventoryPlatformModel.AWSS3config(),
      db_config: InventoryPlatformModel.DBConfig(),
      db_param_config: InventoryPlatformModel.DBParamConfig(),
      doc_mapping_config: InventoryPlatformModel.DocMappingConfig(),
      email_config: InventoryPlatformModel.EmailConfig(),
      file_config: InventoryPlatformModel.FileConfig(),
      ftp_config: InventoryPlatformModel.FTPConfig(),
      google_spreadsheet_config: InventoryPlatformModel.GoogleSpreadSheetConfig(),
      http_config: InventoryPlatformModel.HttpConfig(),
      json_doc_config: InventoryPlatformModel.JsonDocConfig(),
      local_file_config: InventoryPlatformModel.LocalFileConfig(),
      mongo_doc_config: InventoryPlatformModel.MongoDocConfig(),
      oauth_config: InventoryPlatformModel.OAuthConfig(),
      sftp_config: InventoryPlatformModel.SFTPConfig(),
      task_step_config: InventoryPlatformModel.TaskStepConfig(),
    });
  }

  /** @returns {PropBeanConfig} */
  static PropBeanConfig() {
    return Joi.object({
      all_param_function_name: Joi.string().allow(""),
      concat_str: Joi.string().allow(""),
      const_value: Joi.any(),
      data_type: Joi.string().allow(""),
      default_value: Joi.any(),
      destination_field: Joi.string().allow(""),
      enrich_from_master: Joi.boolean(),
      function_name: Joi.string().allow(""),
      identifier_type: Joi.string().allow(""),
      ignore_if_not_exists: Joi.boolean(),
      include: Joi.boolean(),
      index_field: Joi.string().allow(""),
      optional: Joi.boolean(),
      projection_query: Joi.object().pattern(/\S/, Joi.any()),
      required: Joi.boolean(),
      send: InventoryPlatformModel.Send(),
      source_field: Joi.string().allow(""),
      source_fields: Joi.array().items(Joi.string().allow("")),
      sub_separator: Joi.string().allow(""),
      transformer_name: Joi.string().allow(""),
      validations: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      values: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PropBeanDTO} */
  static PropBeanDTO() {
    return Joi.object({
      all_param_function_name: Joi.string().allow(""),
      concat_str: Joi.string().allow(""),
      const_value: Joi.any(),
      data_type: Joi.string().allow(""),
      default_value: Joi.any(),
      destination_field: Joi.string().allow(""),
      enrich_from_master: Joi.boolean(),
      function_name: Joi.string().allow(""),
      identifier_type: Joi.string().allow(""),
      ignore_if_not_exists: Joi.boolean(),
      include: Joi.boolean(),
      index_field: Joi.string().allow(""),
      optional: Joi.boolean(),
      projection_query: Joi.object().pattern(/\S/, Joi.any()),
      required: Joi.boolean(),
      source_field: Joi.string().allow(""),
      source_fields: Joi.array().items(Joi.string().allow("")),
      sub_separator: Joi.string().allow(""),
      transformer_name: Joi.string().allow(""),
    });
  }

  /** @returns {ResponseEnvelopeJobConfigDTO} */
  static ResponseEnvelopeJobConfigDTO() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: InventoryPlatformModel.JobConfigDTO(),
      message: Joi.string().allow(""),
      page: InventoryPlatformModel.Page(),
      payload: InventoryPlatformModel.JobConfigDTO(),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }

  /** @returns {ResponseEnvelopeJobMetricsDto} */
  static ResponseEnvelopeJobMetricsDto() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: InventoryPlatformModel.JobMetricsDto(),
      message: Joi.string().allow(""),
      page: InventoryPlatformModel.Page(),
      payload: InventoryPlatformModel.JobMetricsDto(),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }

  /** @returns {ResponseEnvelopeKafkaResponse} */
  static ResponseEnvelopeKafkaResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: InventoryPlatformModel.KafkaResponse(),
      message: Joi.string().allow(""),
      page: InventoryPlatformModel.Page(),
      payload: InventoryPlatformModel.KafkaResponse(),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }

  /** @returns {ResponseEnvelopeListJobConfigDTO} */
  static ResponseEnvelopeListJobConfigDTO() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: Joi.array().items(InventoryPlatformModel.JobConfigDTO()),
      message: Joi.string().allow(""),
      page: InventoryPlatformModel.Page(),
      payload: Joi.array().items(InventoryPlatformModel.JobConfigDTO()),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }

  /** @returns {ResponseEnvelopeListJobConfigListDTO} */
  static ResponseEnvelopeListJobConfigListDTO() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: Joi.array().items(InventoryPlatformModel.JobConfigListDTO()),
      message: Joi.string().allow(""),
      page: InventoryPlatformModel.Page(),
      payload: Joi.array().items(InventoryPlatformModel.JobConfigListDTO()),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }

  /** @returns {ResponseEnvelopeListJobConfigRawDTO} */
  static ResponseEnvelopeListJobConfigRawDTO() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: Joi.array().items(InventoryPlatformModel.JobConfigRawDTO()),
      message: Joi.string().allow(""),
      page: InventoryPlatformModel.Page(),
      payload: Joi.array().items(InventoryPlatformModel.JobConfigRawDTO()),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }

  /** @returns {ResponseEnvelopeListJobStepsDTO} */
  static ResponseEnvelopeListJobStepsDTO() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: Joi.array().items(InventoryPlatformModel.JobStepsDTO()),
      message: Joi.string().allow(""),
      page: InventoryPlatformModel.Page(),
      payload: Joi.array().items(InventoryPlatformModel.JobStepsDTO()),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }

  /** @returns {ResponseEnvelopeListSlingshotConfigurationDetail} */
  static ResponseEnvelopeListSlingshotConfigurationDetail() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: Joi.array().items(
        InventoryPlatformModel.SlingshotConfigurationDetail()
      ),
      message: Joi.string().allow(""),
      page: InventoryPlatformModel.Page(),
      payload: Joi.array().items(
        InventoryPlatformModel.SlingshotConfigurationDetail()
      ),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }

  /** @returns {ResponseEnvelopeString} */
  static ResponseEnvelopeString() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: Joi.string().allow(""),
      message: Joi.string().allow(""),
      page: InventoryPlatformModel.Page(),
      payload: Joi.string().allow(""),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }

  /** @returns {Send} */
  static Send() {
    return Joi.object({
      processed: Joi.boolean(),
      raw: Joi.boolean(),
    });
  }

  /** @returns {SFTPConfig} */
  static SFTPConfig() {
    return Joi.object({
      archive_config: InventoryPlatformModel.ArchiveConfig(),
      file_regex: Joi.string().allow(""),
      host: Joi.string().allow(""),
      interval: Joi.number(),
      local_dir: Joi.string().allow(""),
      password: Joi.string().allow(""),
      password_protected: Joi.boolean(),
      port: Joi.number(),
      private_key_path: Joi.string().allow(""),
      read_all_files: Joi.boolean(),
      remote_dir: Joi.string().allow(""),
      retries: Joi.number(),
      strict_host_key_checking: Joi.boolean(),
      unzip: Joi.boolean(),
      username: Joi.string().allow(""),
      zip_file_regex: Joi.string().allow(""),
      zip_format: Joi.string().allow(""),
    });
  }

  /** @returns {SlingshotConfigurationDetail} */
  static SlingshotConfigurationDetail() {
    return Joi.object({
      companies: Joi.array().items(InventoryPlatformModel.GCompany()),
      integration: InventoryPlatformModel.SlingshotIntegration(),
    });
  }

  /** @returns {SlingshotIntegration} */
  static SlingshotIntegration() {
    return Joi.object({
      _id: Joi.string().allow(""),
      description: Joi.string().allow(""),
      meta: Joi.array().items(InventoryPlatformModel.Metum()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {StoreConfig} */
  static StoreConfig() {
    return Joi.object({
      job_code: Joi.string().allow(""),
      process_config: InventoryPlatformModel.ProcessConfig(),
      properties: Joi.object().pattern(/\S/, Joi.string().allow("")),
      store_alias: Joi.string().allow(""),
      store_file_name: Joi.string().allow(""),
      store_file_regex: Joi.string().allow(""),
      storeid: Joi.string().allow(""),
    });
  }

  /** @returns {StoreData} */
  static StoreData() {
    return Joi.object({
      location_id: Joi.string().allow(""),
    });
  }

  /** @returns {StoreFilter} */
  static StoreFilter() {
    return Joi.object({
      exclude_tags: Joi.array().items(Joi.string().allow("")),
      include_tags: Joi.array().items(Joi.string().allow("")),
      query: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {SuppressStoreModel} */
  static SuppressStoreModel() {
    return Joi.object({
      stores: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {SuppressStorePayload} */
  static SuppressStorePayload() {
    return Joi.object({
      meta: InventoryPlatformModel.KafkaMetaModel(),
      payload: Joi.array().items(InventoryPlatformModel.SuppressStoreModel()),
    });
  }

  /** @returns {TaskConfig} */
  static TaskConfig() {
    return Joi.object({
      name: Joi.string().allow(""),
      task_config_id: Joi.number(),
      task_params: Joi.array().items(InventoryPlatformModel.TaskParam()),
    });
  }

  /** @returns {TaskDTO} */
  static TaskDTO() {
    return Joi.object({
      group_list: Joi.array().items(InventoryPlatformModel.GenericDTO()),
      type: Joi.number(),
    });
  }

  /** @returns {TaskParam} */
  static TaskParam() {
    return Joi.object({
      name: Joi.string().allow(""),
      value: Joi.any(),
    });
  }

  /** @returns {TaskStepConfig} */
  static TaskStepConfig() {
    return Joi.object({
      task_config_group_ids: Joi.array().items(Joi.number()),
      task_config_ids: Joi.array().items(Joi.number()),
      task_configs: Joi.array().items(InventoryPlatformModel.TaskConfig()),
    });
  }
}
module.exports = InventoryPlatformModel;
