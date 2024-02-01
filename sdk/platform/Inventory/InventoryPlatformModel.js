const Joi = require("joi");

/**
 * @typedef DataTresholdDTO
 * @property {number} [min_price]
 * @property {number} [safe_stock]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {GenericDTO[]} [period_type_list]
 */

/**
 * @typedef GenericDTO
 * @property {string} [text]
 * @property {Object} [value]
 */

/**
 * @typedef JobConfigDTO
 * @property {Object} [integration_data]
 * @property {string} [company_name]
 * @property {string} integration
 * @property {number} company_id
 * @property {TaskDTO} [task_details]
 * @property {DataTresholdDTO} [threshold_details]
 * @property {string} [job_code]
 * @property {string} [alias]
 */

/**
 * @typedef TaskDTO
 * @property {number} [type]
 * @property {GenericDTO[]} [group_list]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef ResponseEnvelopeString
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {string} [items]
 * @property {string} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef KafkaMetaModel
 * @property {string} [job_type]
 * @property {number} [batch_id]
 * @property {string} [action]
 * @property {string[]} [trace]
 * @property {string} [created_on]
 * @property {number} [created_timestamp]
 */

/**
 * @typedef SuppressStoreModel
 * @property {number[]} [stores]
 */

/**
 * @typedef SuppressStorePayload
 * @property {SuppressStoreModel[]} [payload]
 * @property {KafkaMetaModel} [meta]
 */

/**
 * @typedef KafkaResponse
 * @property {number} [offset]
 * @property {number} [partition]
 */

/**
 * @typedef ResponseEnvelopeKafkaResponse
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {KafkaResponse} [items]
 * @property {KafkaResponse} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef GCompany
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {string} [name]
 * @property {GStore[]} [stores]
 */

/**
 * @typedef GStore
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {string} [code]
 * @property {string} [name]
 * @property {StoreData} [data]
 */

/**
 * @typedef Metum
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef ResponseEnvelopeListSlingshotConfigurationDetail
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {SlingshotConfigurationDetail[]} [items]
 * @property {SlingshotConfigurationDetail[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef SlingshotConfigurationDetail
 * @property {SlingshotIntegration} [integration]
 * @property {GCompany[]} [companies]
 */

/**
 * @typedef SlingshotIntegration
 * @property {string} [_id]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {Metum[]} [meta]
 */

/**
 * @typedef StoreData
 * @property {string} [location_id]
 */

/**
 * @typedef AWSS3config
 * @property {string} [bucket]
 * @property {string} [region]
 * @property {string} [dir]
 * @property {string} [access_key]
 * @property {string} [secret_key]
 * @property {string} [local_file_path]
 * @property {string} [archive_path]
 * @property {boolean} [archive]
 * @property {boolean} [delete]
 * @property {boolean} [unzip]
 * @property {string} [zip_format]
 * @property {string} [file_regex]
 * @property {ArchiveConfig} [archive_config]
 */

/**
 * @typedef ArchiveConfig
 * @property {boolean} [delete]
 * @property {boolean} [archive]
 * @property {string} [archive_dir]
 */

/**
 * @typedef Audit
 * @property {string} [created_by]
 * @property {string} [modified_by]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef CatalogMasterConfig
 * @property {string} [source_slug]
 */

/**
 * @typedef CompanyConfig
 * @property {number} [company_id]
 * @property {number[]} [exclude_steps]
 * @property {string[]} [hidden_closet_keys]
 * @property {Object} [open_tags]
 * @property {string[]} [tax_identifiers]
 * @property {number} [delete_quantity_threshold]
 */

/**
 * @typedef DBConfig
 * @property {string} [vendor]
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {string} [dbname]
 * @property {string} [query]
 * @property {boolean} [procedure]
 * @property {string} [driver_class]
 * @property {string} [jdbc_url]
 * @property {Object} [optional_properties]
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
 * @property {PropBeanDTO} [store]
 * @property {PropBeanDTO} [intf_article_id]
 * @property {PropBeanDTO} [price_effective]
 * @property {PropBeanDTO} [quantity]
 */

/**
 * @typedef DocMappingConfig
 * @property {Object} [properties]
 * @property {number} [junk_data_threshold_count]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {string} [unwind_field]
 * @property {DefaultHeadersDTO} [default_headers]
 */

/**
 * @typedef EmailConfig
 * @property {string} [recepient]
 * @property {string} [host]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {boolean} [read_from_content]
 * @property {boolean} [filter_based_on_recepients]
 * @property {string} [pcol]
 * @property {string} [subject_line_regex]
 * @property {string} [sender_address]
 * @property {string} [local_dir]
 * @property {string[]} [folder_name_hierarchies]
 * @property {string} [attachment_regex]
 * @property {string} [body_content_regex]
 * @property {boolean} [password_protected]
 * @property {string} [zip_format]
 * @property {boolean} [attachment_mandate]
 * @property {boolean} [filter_files_after_extraction]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_unread_mails]
 * @property {string} [content_type]
 * @property {boolean} [downloadable_link]
 * @property {Object} [properties]
 */

/**
 * @typedef FTPConfig
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {string} [remote_dir]
 * @property {string} [zip_file_regex]
 * @property {ArchiveConfig} [archive_config]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {boolean} [read_all_files]
 */

/**
 * @typedef FileConfig
 * @property {string} [delimiter]
 * @property {string} [charset]
 * @property {Object} [properties]
 * @property {boolean} [file_has_header]
 * @property {number} [header_index]
 * @property {string[]} [header_array]
 * @property {number} [data_start_index]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {number} [junk_data_threshold_count]
 * @property {string} [file_type]
 * @property {boolean} [line_validity_check]
 * @property {string[]} [sheet_names]
 * @property {boolean} [read_all_sheets]
 * @property {string} [quote_char]
 * @property {string} [escape_char]
 * @property {DefaultHeadersDTO} [default_headers]
 */

/**
 * @typedef GoogleSpreadSheetConfig
 * @property {string} [range]
 * @property {string} [sheet_id]
 * @property {string} [client_secret_location]
 * @property {string} [cred_storage_directory]
 * @property {string} [local_dir]
 * @property {ArchiveConfig} [archive_config]
 */

/**
 * @typedef HttpConfig
 * @property {string} [hosturl]
 * @property {string} [username]
 * @property {string} [password]
 * @property {Object} [request_params]
 * @property {string} [http_method]
 * @property {string} [request_payload]
 * @property {string} [local_path]
 * @property {ArchiveConfig} [archive_config]
 */

/**
 * @typedef JobConfig
 * @property {number} [_id]
 * @property {string} [job_code]
 * @property {string} [task_type]
 * @property {number} [sync_delay]
 * @property {string} [cron_expression]
 * @property {StoreFilter} [store_filter]
 * @property {ProcessConfig} [process_config]
 * @property {StoreConfig[]} [store_config]
 * @property {Object} [properties]
 * @property {boolean} [immediate_first_run]
 * @property {boolean} [disable]
 * @property {string[]} [dependent_job_codes]
 * @property {CompanyConfig[]} [company_config]
 * @property {number[]} [company_ids]
 * @property {string[]} [tax_identifiers]
 * @property {string} [priority]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {DBConnectionProfile} [db_connection_profile]
 * @property {Object} [params]
 * @property {Object} [open_tags]
 * @property {number} [delete_quantity_threshold]
 * @property {CatalogMasterConfig} [catalog_master_config]
 * @property {string[]} [aggregator_types]
 * @property {string} [integration_type]
 * @property {number} [min_price]
 * @property {Audit} [audit]
 * @property {number} [version]
 * @property {string} [alias]
 */

/**
 * @typedef JobConfigRawDTO
 * @property {string} company_name
 * @property {string} integration
 * @property {number} company_id
 * @property {JobConfig} [data]
 */

/**
 * @typedef JsonDocConfig
 * @property {PropBeanConfig[]} [prop_bean_configs]
 */

/**
 * @typedef LocalFileConfig
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {string} [working_dir]
 * @property {boolean} [unzip]
 * @property {string} [zip_file_regex]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_files]
 */

/**
 * @typedef MongoDocConfig
 * @property {string} [collection_name]
 * @property {Object} [find_query]
 * @property {Object} [projection_query]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {Object[]} [aggregate_pipeline]
 * @property {boolean} [skip_save]
 */

/**
 * @typedef OAuthConfig
 * @property {number} [limit]
 * @property {number} [pages]
 * @property {number} [interval]
 * @property {string} [consumer_key]
 * @property {string} [consumer_secret]
 * @property {string} [token]
 * @property {string} [token_secret]
 * @property {string} [rest_url]
 * @property {string} [rest_base_url]
 * @property {string} [function_name]
 */

/**
 * @typedef ProcessConfig
 * @property {DBConfig} [db_config]
 * @property {DBParamConfig} [db_param_config]
 * @property {SFTPConfig} [sftp_config]
 * @property {AWSS3config} [aws_s3_config]
 * @property {MongoDocConfig} [mongo_doc_config]
 * @property {FTPConfig} [ftp_config]
 * @property {EmailConfig} [email_config]
 * @property {FileConfig} [file_config]
 * @property {JsonDocConfig} [json_doc_config]
 * @property {DocMappingConfig} [doc_mapping_config]
 * @property {TaskStepConfig} [task_step_config]
 * @property {HttpConfig} [http_config]
 * @property {LocalFileConfig} [local_file_config]
 * @property {OAuthConfig} [oauth_config]
 * @property {GoogleSpreadSheetConfig} [google_spreadsheet_config]
 */

/**
 * @typedef PropBeanConfig
 * @property {boolean} [required]
 * @property {boolean} [optional]
 * @property {Send} [send]
 * @property {Object[]} [validations]
 * @property {string[]} [values]
 * @property {boolean} [include]
 * @property {string} [source_field]
 * @property {string[]} [source_fields]
 * @property {string} [destination_field]
 * @property {string} [data_type]
 * @property {Object} [default_value]
 * @property {Object} [const_value]
 * @property {string} [concat_str]
 * @property {string} [function_name]
 * @property {string} [transformer_name]
 * @property {string} [all_param_function_name]
 * @property {string} [sub_separator]
 * @property {string} [index_field]
 * @property {boolean} [ignore_if_not_exists]
 * @property {string} [identifier_type]
 * @property {Object} [projection_query]
 * @property {boolean} [enrich_from_master]
 */

/**
 * @typedef PropBeanDTO
 * @property {boolean} [required]
 * @property {boolean} [optional]
 * @property {boolean} [include]
 * @property {string} [source_field]
 * @property {string[]} [source_fields]
 * @property {string} [destination_field]
 * @property {string} [data_type]
 * @property {Object} [default_value]
 * @property {Object} [const_value]
 * @property {string} [concat_str]
 * @property {string} [function_name]
 * @property {string} [transformer_name]
 * @property {string} [all_param_function_name]
 * @property {string} [sub_separator]
 * @property {string} [index_field]
 * @property {boolean} [ignore_if_not_exists]
 * @property {string} [identifier_type]
 * @property {Object} [projection_query]
 * @property {boolean} [enrich_from_master]
 */

/**
 * @typedef ResponseEnvelopeListJobConfigRawDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigRawDTO[]} [items]
 * @property {JobConfigRawDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef SFTPConfig
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [private_key_path]
 * @property {boolean} [strict_host_key_checking]
 * @property {string} [local_dir]
 * @property {string} [remote_dir]
 * @property {boolean} [password_protected]
 * @property {string} [zip_file_regex]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_files]
 */

/**
 * @typedef Send
 * @property {boolean} [raw]
 * @property {boolean} [processed]
 */

/**
 * @typedef StoreConfig
 * @property {string} [job_code]
 * @property {string} [storeid]
 * @property {string} [store_alias]
 * @property {string} [store_file_regex]
 * @property {string} [store_file_name]
 * @property {ProcessConfig} [process_config]
 * @property {Object} [properties]
 */

/**
 * @typedef StoreFilter
 * @property {string[]} [include_tags]
 * @property {string[]} [exclude_tags]
 * @property {Object} [query]
 */

/**
 * @typedef TaskConfig
 * @property {string} [name]
 * @property {number} [task_config_id]
 * @property {TaskParam[]} [task_params]
 */

/**
 * @typedef TaskParam
 * @property {string} [name]
 * @property {Object} [value]
 */

/**
 * @typedef TaskStepConfig
 * @property {TaskConfig[]} [task_configs]
 * @property {number[]} [task_config_ids]
 * @property {number[]} [task_config_group_ids]
 */

/**
 * @typedef JobStepsDTO
 * @property {string} [step_name]
 * @property {string} [type]
 * @property {number} [step_execution_time]
 * @property {number} [start_count]
 * @property {number} [end_count]
 * @property {number} [deleted_count]
 * @property {string} [processed_start_time]
 * @property {string} [processed_at]
 */

/**
 * @typedef ResponseEnvelopeListJobStepsDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobStepsDTO[]} [items]
 * @property {JobStepsDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef ResponseEnvelopeListJobConfigDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigDTO[]} [items]
 * @property {JobConfigDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef ResponseEnvelopeJobConfigDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigDTO} [items]
 * @property {JobConfigDTO} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef JobHistoryDto
 * @property {number} [total_added_count]
 * @property {number} [total_updated_count]
 * @property {number} [total_suppressed_count]
 * @property {number} [total_initial_count]
 * @property {number} [job_id]
 * @property {string} [status]
 * @property {string} [job_code]
 * @property {string} [processed_on]
 * @property {string[]} [filename]
 * @property {string} [error_type]
 * @property {string} [message]
 */

/**
 * @typedef JobMetricsDto
 * @property {string} [job_code]
 * @property {string} [is_run_more_than_usual]
 * @property {JobHistoryDto[]} [job_history]
 * @property {number} [total_success_count]
 * @property {number} [total_failure_count]
 * @property {number} [total_warning_count]
 * @property {number} [total_suppressed_count]
 * @property {number} [total_job_runs]
 */

/**
 * @typedef ResponseEnvelopeJobMetricsDto
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobMetricsDto} [items]
 * @property {JobMetricsDto} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef JobConfigListDTO
 * @property {string} [code]
 * @property {string} [alias]
 * @property {string} [modified_by]
 * @property {string} [created_by]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {boolean} [active]
 * @property {string} [type]
 */

/**
 * @typedef ResponseEnvelopeListJobConfigListDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigListDTO[]} [items]
 * @property {JobConfigListDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

class InventoryPlatformModel {
  /** @returns {DataTresholdDTO} */
  static DataTresholdDTO() {
    return Joi.object({
      min_price: Joi.number(),
      safe_stock: Joi.number(),
      period_threshold: Joi.number(),
      period_threshold_type: Joi.string().allow(""),
      period_type_list: Joi.array().items(InventoryPlatformModel.GenericDTO()),
    });
  }

  /** @returns {GenericDTO} */
  static GenericDTO() {
    return Joi.object({
      text: Joi.string().allow(""),
      value: Joi.any(),
    });
  }

  /** @returns {JobConfigDTO} */
  static JobConfigDTO() {
    return Joi.object({
      integration_data: Joi.object().pattern(/\S/, Joi.any()),
      company_name: Joi.string().allow(""),
      integration: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      task_details: InventoryPlatformModel.TaskDTO(),
      threshold_details: InventoryPlatformModel.DataTresholdDTO(),
      job_code: Joi.string().allow(""),
      alias: Joi.string().allow(""),
    });
  }

  /** @returns {TaskDTO} */
  static TaskDTO() {
    return Joi.object({
      type: Joi.number(),
      group_list: Joi.array().items(InventoryPlatformModel.GenericDTO()),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      has_previous: Joi.boolean(),
      has_next: Joi.boolean(),
      current: Joi.number(),
      type: Joi.string().allow("").required(),
      size: Joi.number(),
    });
  }

  /** @returns {ResponseEnvelopeString} */
  static ResponseEnvelopeString() {
    return Joi.object({
      timestamp: Joi.string().allow(""),
      status: Joi.number(),
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      message: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      http_status: Joi.string().allow(""),
      items: Joi.string().allow(""),
      payload: Joi.string().allow(""),
      trace_id: Joi.string().allow(""),
      page: InventoryPlatformModel.Page(),
    });
  }

  /** @returns {KafkaMetaModel} */
  static KafkaMetaModel() {
    return Joi.object({
      job_type: Joi.string().allow(""),
      batch_id: Joi.number(),
      action: Joi.string().allow(""),
      trace: Joi.array().items(Joi.string().allow("")),
      created_on: Joi.string().allow(""),
      created_timestamp: Joi.number(),
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
      payload: Joi.array().items(InventoryPlatformModel.SuppressStoreModel()),
      meta: InventoryPlatformModel.KafkaMetaModel(),
    });
  }

  /** @returns {KafkaResponse} */
  static KafkaResponse() {
    return Joi.object({
      offset: Joi.number(),
      partition: Joi.number(),
    });
  }

  /** @returns {ResponseEnvelopeKafkaResponse} */
  static ResponseEnvelopeKafkaResponse() {
    return Joi.object({
      timestamp: Joi.string().allow(""),
      status: Joi.number(),
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      message: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      http_status: Joi.string().allow(""),
      items: InventoryPlatformModel.KafkaResponse(),
      payload: InventoryPlatformModel.KafkaResponse(),
      trace_id: Joi.string().allow(""),
      page: InventoryPlatformModel.Page(),
    });
  }

  /** @returns {GCompany} */
  static GCompany() {
    return Joi.object({
      _id: Joi.string().allow(""),
      integration: Joi.string().allow(""),
      level: Joi.string().allow(""),
      uid: Joi.number(),
      opted: Joi.boolean(),
      permissions: Joi.array().items(Joi.string().allow("")),
      token: Joi.string().allow(""),
      name: Joi.string().allow(""),
      stores: Joi.array().items(InventoryPlatformModel.GStore()),
    });
  }

  /** @returns {GStore} */
  static GStore() {
    return Joi.object({
      _id: Joi.string().allow(""),
      integration: Joi.string().allow(""),
      level: Joi.string().allow(""),
      uid: Joi.number(),
      opted: Joi.boolean(),
      permissions: Joi.array().items(Joi.string().allow("")),
      token: Joi.string().allow(""),
      code: Joi.string().allow(""),
      name: Joi.string().allow(""),
      data: InventoryPlatformModel.StoreData(),
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

  /** @returns {ResponseEnvelopeListSlingshotConfigurationDetail} */
  static ResponseEnvelopeListSlingshotConfigurationDetail() {
    return Joi.object({
      timestamp: Joi.string().allow(""),
      status: Joi.number(),
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      message: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      http_status: Joi.string().allow(""),
      items: Joi.array().items(
        InventoryPlatformModel.SlingshotConfigurationDetail()
      ),
      payload: Joi.array().items(
        InventoryPlatformModel.SlingshotConfigurationDetail()
      ),
      trace_id: Joi.string().allow(""),
      page: InventoryPlatformModel.Page(),
    });
  }

  /** @returns {SlingshotConfigurationDetail} */
  static SlingshotConfigurationDetail() {
    return Joi.object({
      integration: InventoryPlatformModel.SlingshotIntegration(),
      companies: Joi.array().items(InventoryPlatformModel.GCompany()),
    });
  }

  /** @returns {SlingshotIntegration} */
  static SlingshotIntegration() {
    return Joi.object({
      _id: Joi.string().allow(""),
      description: Joi.string().allow(""),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      meta: Joi.array().items(InventoryPlatformModel.Metum()),
    });
  }

  /** @returns {StoreData} */
  static StoreData() {
    return Joi.object({
      location_id: Joi.string().allow(""),
    });
  }

  /** @returns {AWSS3config} */
  static AWSS3config() {
    return Joi.object({
      bucket: Joi.string().allow(""),
      region: Joi.string().allow(""),
      dir: Joi.string().allow(""),
      access_key: Joi.string().allow(""),
      secret_key: Joi.string().allow(""),
      local_file_path: Joi.string().allow(""),
      archive_path: Joi.string().allow(""),
      archive: Joi.boolean(),
      delete: Joi.boolean(),
      unzip: Joi.boolean(),
      zip_format: Joi.string().allow(""),
      file_regex: Joi.string().allow(""),
      archive_config: InventoryPlatformModel.ArchiveConfig(),
    });
  }

  /** @returns {ArchiveConfig} */
  static ArchiveConfig() {
    return Joi.object({
      delete: Joi.boolean(),
      archive: Joi.boolean(),
      archive_dir: Joi.string().allow(""),
    });
  }

  /** @returns {Audit} */
  static Audit() {
    return Joi.object({
      created_by: Joi.string().allow(""),
      modified_by: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
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
      exclude_steps: Joi.array().items(Joi.number()),
      hidden_closet_keys: Joi.array().items(Joi.string().allow("")),
      open_tags: Joi.object().pattern(/\S/, Joi.any()),
      tax_identifiers: Joi.array().items(Joi.string().allow("")),
      delete_quantity_threshold: Joi.number(),
    });
  }

  /** @returns {DBConfig} */
  static DBConfig() {
    return Joi.object({
      vendor: Joi.string().allow(""),
      host: Joi.string().allow(""),
      port: Joi.number(),
      username: Joi.string().allow(""),
      password: Joi.string().allow(""),
      dbname: Joi.string().allow(""),
      query: Joi.string().allow(""),
      procedure: Joi.boolean(),
      driver_class: Joi.string().allow(""),
      jdbc_url: Joi.string().allow(""),
      optional_properties: Joi.object().pattern(/\S/, Joi.string().allow("")),
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
      store: InventoryPlatformModel.PropBeanDTO(),
      intf_article_id: InventoryPlatformModel.PropBeanDTO(),
      price_effective: InventoryPlatformModel.PropBeanDTO(),
      quantity: InventoryPlatformModel.PropBeanDTO(),
    });
  }

  /** @returns {DocMappingConfig} */
  static DocMappingConfig() {
    return Joi.object({
      properties: Joi.object().pattern(/\S/, Joi.any()),
      junk_data_threshold_count: Joi.number(),
      prop_bean_configs: Joi.array().items(
        InventoryPlatformModel.PropBeanConfig()
      ),
      unwind_field: Joi.string().allow(""),
      default_headers: InventoryPlatformModel.DefaultHeadersDTO(),
    });
  }

  /** @returns {EmailConfig} */
  static EmailConfig() {
    return Joi.object({
      recepient: Joi.string().allow(""),
      host: Joi.string().allow(""),
      username: Joi.string().allow(""),
      password: Joi.string().allow(""),
      unzip: Joi.boolean(),
      read_from_content: Joi.boolean(),
      filter_based_on_recepients: Joi.boolean(),
      pcol: Joi.string().allow(""),
      subject_line_regex: Joi.string().allow(""),
      sender_address: Joi.string().allow(""),
      local_dir: Joi.string().allow(""),
      folder_name_hierarchies: Joi.array().items(Joi.string().allow("")),
      attachment_regex: Joi.string().allow(""),
      body_content_regex: Joi.string().allow(""),
      password_protected: Joi.boolean(),
      zip_format: Joi.string().allow(""),
      attachment_mandate: Joi.boolean(),
      filter_files_after_extraction: Joi.boolean(),
      archive_config: InventoryPlatformModel.ArchiveConfig(),
      read_all_unread_mails: Joi.boolean(),
      content_type: Joi.string().allow(""),
      downloadable_link: Joi.boolean(),
      properties: Joi.object().pattern(/\S/, Joi.string().allow("")),
    });
  }

  /** @returns {FTPConfig} */
  static FTPConfig() {
    return Joi.object({
      host: Joi.string().allow(""),
      port: Joi.number(),
      username: Joi.string().allow(""),
      password: Joi.string().allow(""),
      unzip: Joi.boolean(),
      retries: Joi.number(),
      interval: Joi.number(),
      local_dir: Joi.string().allow(""),
      remote_dir: Joi.string().allow(""),
      zip_file_regex: Joi.string().allow(""),
      archive_config: InventoryPlatformModel.ArchiveConfig(),
      file_regex: Joi.string().allow(""),
      zip_format: Joi.string().allow(""),
      read_all_files: Joi.boolean(),
    });
  }

  /** @returns {FileConfig} */
  static FileConfig() {
    return Joi.object({
      delimiter: Joi.string().allow(""),
      charset: Joi.string().allow(""),
      properties: Joi.object().pattern(/\S/, Joi.any()),
      file_has_header: Joi.boolean(),
      header_index: Joi.number(),
      header_array: Joi.array().items(Joi.string().allow("")),
      data_start_index: Joi.number(),
      prop_bean_configs: Joi.array().items(
        InventoryPlatformModel.PropBeanConfig()
      ),
      junk_data_threshold_count: Joi.number(),
      file_type: Joi.string().allow(""),
      line_validity_check: Joi.boolean(),
      sheet_names: Joi.array().items(Joi.string().allow("")),
      read_all_sheets: Joi.boolean(),
      quote_char: Joi.string().allow(""),
      escape_char: Joi.string().allow(""),
      default_headers: InventoryPlatformModel.DefaultHeadersDTO(),
    });
  }

  /** @returns {GoogleSpreadSheetConfig} */
  static GoogleSpreadSheetConfig() {
    return Joi.object({
      range: Joi.string().allow(""),
      sheet_id: Joi.string().allow(""),
      client_secret_location: Joi.string().allow(""),
      cred_storage_directory: Joi.string().allow(""),
      local_dir: Joi.string().allow(""),
      archive_config: InventoryPlatformModel.ArchiveConfig(),
    });
  }

  /** @returns {HttpConfig} */
  static HttpConfig() {
    return Joi.object({
      hosturl: Joi.string().allow(""),
      username: Joi.string().allow(""),
      password: Joi.string().allow(""),
      request_params: Joi.object().pattern(/\S/, Joi.string().allow("")),
      http_method: Joi.string().allow(""),
      request_payload: Joi.string().allow(""),
      local_path: Joi.string().allow(""),
      archive_config: InventoryPlatformModel.ArchiveConfig(),
    });
  }

  /** @returns {JobConfig} */
  static JobConfig() {
    return Joi.object({
      _id: Joi.number(),
      job_code: Joi.string().allow(""),
      task_type: Joi.string().allow(""),
      sync_delay: Joi.number(),
      cron_expression: Joi.string().allow(""),
      store_filter: InventoryPlatformModel.StoreFilter(),
      process_config: InventoryPlatformModel.ProcessConfig(),
      store_config: Joi.array().items(InventoryPlatformModel.StoreConfig()),
      properties: Joi.object().pattern(/\S/, Joi.string().allow("")),
      immediate_first_run: Joi.boolean(),
      disable: Joi.boolean(),
      dependent_job_codes: Joi.array().items(Joi.string().allow("")),
      company_config: Joi.array().items(InventoryPlatformModel.CompanyConfig()),
      company_ids: Joi.array().items(Joi.number()),
      tax_identifiers: Joi.array().items(Joi.string().allow("")),
      priority: Joi.string().allow(""),
      period_threshold: Joi.number(),
      period_threshold_type: Joi.string().allow(""),
      db_connection_profile: InventoryPlatformModel.DBConnectionProfile(),
      params: Joi.object().pattern(/\S/, Joi.any()),
      open_tags: Joi.object().pattern(/\S/, Joi.any()),
      delete_quantity_threshold: Joi.number(),
      catalog_master_config: InventoryPlatformModel.CatalogMasterConfig(),
      aggregator_types: Joi.array().items(Joi.string().allow("")),
      integration_type: Joi.string().allow(""),
      min_price: Joi.number(),
      audit: InventoryPlatformModel.Audit(),
      version: Joi.number(),
      alias: Joi.string().allow(""),
    });
  }

  /** @returns {JobConfigRawDTO} */
  static JobConfigRawDTO() {
    return Joi.object({
      company_name: Joi.string().allow("").required(),
      integration: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      data: InventoryPlatformModel.JobConfig(),
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

  /** @returns {LocalFileConfig} */
  static LocalFileConfig() {
    return Joi.object({
      retries: Joi.number(),
      interval: Joi.number(),
      local_dir: Joi.string().allow(""),
      working_dir: Joi.string().allow(""),
      unzip: Joi.boolean(),
      zip_file_regex: Joi.string().allow(""),
      file_regex: Joi.string().allow(""),
      zip_format: Joi.string().allow(""),
      archive_config: InventoryPlatformModel.ArchiveConfig(),
      read_all_files: Joi.boolean(),
    });
  }

  /** @returns {MongoDocConfig} */
  static MongoDocConfig() {
    return Joi.object({
      collection_name: Joi.string().allow(""),
      find_query: Joi.object().pattern(/\S/, Joi.any()),
      projection_query: Joi.object().pattern(/\S/, Joi.any()),
      prop_bean_configs: Joi.array().items(
        InventoryPlatformModel.PropBeanConfig()
      ),
      aggregate_pipeline: Joi.array().items(
        Joi.object().pattern(/\S/, Joi.any())
      ),
      skip_save: Joi.boolean(),
    });
  }

  /** @returns {OAuthConfig} */
  static OAuthConfig() {
    return Joi.object({
      limit: Joi.number(),
      pages: Joi.number(),
      interval: Joi.number(),
      consumer_key: Joi.string().allow(""),
      consumer_secret: Joi.string().allow(""),
      token: Joi.string().allow(""),
      token_secret: Joi.string().allow(""),
      rest_url: Joi.string().allow(""),
      rest_base_url: Joi.string().allow(""),
      function_name: Joi.string().allow(""),
    });
  }

  /** @returns {ProcessConfig} */
  static ProcessConfig() {
    return Joi.object({
      db_config: InventoryPlatformModel.DBConfig(),
      db_param_config: InventoryPlatformModel.DBParamConfig(),
      sftp_config: InventoryPlatformModel.SFTPConfig(),
      aws_s3_config: InventoryPlatformModel.AWSS3config(),
      mongo_doc_config: InventoryPlatformModel.MongoDocConfig(),
      ftp_config: InventoryPlatformModel.FTPConfig(),
      email_config: InventoryPlatformModel.EmailConfig(),
      file_config: InventoryPlatformModel.FileConfig(),
      json_doc_config: InventoryPlatformModel.JsonDocConfig(),
      doc_mapping_config: InventoryPlatformModel.DocMappingConfig(),
      task_step_config: InventoryPlatformModel.TaskStepConfig(),
      http_config: InventoryPlatformModel.HttpConfig(),
      local_file_config: InventoryPlatformModel.LocalFileConfig(),
      oauth_config: InventoryPlatformModel.OAuthConfig(),
      google_spreadsheet_config: InventoryPlatformModel.GoogleSpreadSheetConfig(),
    });
  }

  /** @returns {PropBeanConfig} */
  static PropBeanConfig() {
    return Joi.object({
      required: Joi.boolean(),
      optional: Joi.boolean(),
      send: InventoryPlatformModel.Send(),
      validations: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      values: Joi.array().items(Joi.string().allow("")),
      include: Joi.boolean(),
      source_field: Joi.string().allow(""),
      source_fields: Joi.array().items(Joi.string().allow("")),
      destination_field: Joi.string().allow(""),
      data_type: Joi.string().allow(""),
      default_value: Joi.any(),
      const_value: Joi.any(),
      concat_str: Joi.string().allow(""),
      function_name: Joi.string().allow(""),
      transformer_name: Joi.string().allow(""),
      all_param_function_name: Joi.string().allow(""),
      sub_separator: Joi.string().allow(""),
      index_field: Joi.string().allow(""),
      ignore_if_not_exists: Joi.boolean(),
      identifier_type: Joi.string().allow(""),
      projection_query: Joi.object().pattern(/\S/, Joi.any()),
      enrich_from_master: Joi.boolean(),
    });
  }

  /** @returns {PropBeanDTO} */
  static PropBeanDTO() {
    return Joi.object({
      required: Joi.boolean(),
      optional: Joi.boolean(),
      include: Joi.boolean(),
      source_field: Joi.string().allow(""),
      source_fields: Joi.array().items(Joi.string().allow("")),
      destination_field: Joi.string().allow(""),
      data_type: Joi.string().allow(""),
      default_value: Joi.any(),
      const_value: Joi.any(),
      concat_str: Joi.string().allow(""),
      function_name: Joi.string().allow(""),
      transformer_name: Joi.string().allow(""),
      all_param_function_name: Joi.string().allow(""),
      sub_separator: Joi.string().allow(""),
      index_field: Joi.string().allow(""),
      ignore_if_not_exists: Joi.boolean(),
      identifier_type: Joi.string().allow(""),
      projection_query: Joi.object().pattern(/\S/, Joi.any()),
      enrich_from_master: Joi.boolean(),
    });
  }

  /** @returns {ResponseEnvelopeListJobConfigRawDTO} */
  static ResponseEnvelopeListJobConfigRawDTO() {
    return Joi.object({
      timestamp: Joi.string().allow(""),
      status: Joi.number(),
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      message: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      http_status: Joi.string().allow(""),
      items: Joi.array().items(InventoryPlatformModel.JobConfigRawDTO()),
      payload: Joi.array().items(InventoryPlatformModel.JobConfigRawDTO()),
      trace_id: Joi.string().allow(""),
      page: InventoryPlatformModel.Page(),
    });
  }

  /** @returns {SFTPConfig} */
  static SFTPConfig() {
    return Joi.object({
      host: Joi.string().allow(""),
      port: Joi.number(),
      username: Joi.string().allow(""),
      password: Joi.string().allow(""),
      unzip: Joi.boolean(),
      retries: Joi.number(),
      interval: Joi.number(),
      private_key_path: Joi.string().allow(""),
      strict_host_key_checking: Joi.boolean(),
      local_dir: Joi.string().allow(""),
      remote_dir: Joi.string().allow(""),
      password_protected: Joi.boolean(),
      zip_file_regex: Joi.string().allow(""),
      file_regex: Joi.string().allow(""),
      zip_format: Joi.string().allow(""),
      archive_config: InventoryPlatformModel.ArchiveConfig(),
      read_all_files: Joi.boolean(),
    });
  }

  /** @returns {Send} */
  static Send() {
    return Joi.object({
      raw: Joi.boolean(),
      processed: Joi.boolean(),
    });
  }

  /** @returns {StoreConfig} */
  static StoreConfig() {
    return Joi.object({
      job_code: Joi.string().allow(""),
      storeid: Joi.string().allow(""),
      store_alias: Joi.string().allow(""),
      store_file_regex: Joi.string().allow(""),
      store_file_name: Joi.string().allow(""),
      process_config: InventoryPlatformModel.ProcessConfig(),
      properties: Joi.object().pattern(/\S/, Joi.string().allow("")),
    });
  }

  /** @returns {StoreFilter} */
  static StoreFilter() {
    return Joi.object({
      include_tags: Joi.array().items(Joi.string().allow("")),
      exclude_tags: Joi.array().items(Joi.string().allow("")),
      query: Joi.object().pattern(/\S/, Joi.any()),
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
      task_configs: Joi.array().items(InventoryPlatformModel.TaskConfig()),
      task_config_ids: Joi.array().items(Joi.number()),
      task_config_group_ids: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {JobStepsDTO} */
  static JobStepsDTO() {
    return Joi.object({
      step_name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      step_execution_time: Joi.number(),
      start_count: Joi.number(),
      end_count: Joi.number(),
      deleted_count: Joi.number(),
      processed_start_time: Joi.string().allow(""),
      processed_at: Joi.string().allow(""),
    });
  }

  /** @returns {ResponseEnvelopeListJobStepsDTO} */
  static ResponseEnvelopeListJobStepsDTO() {
    return Joi.object({
      timestamp: Joi.string().allow(""),
      status: Joi.number(),
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      message: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      http_status: Joi.string().allow(""),
      items: Joi.array().items(InventoryPlatformModel.JobStepsDTO()),
      payload: Joi.array().items(InventoryPlatformModel.JobStepsDTO()),
      trace_id: Joi.string().allow(""),
      page: InventoryPlatformModel.Page(),
    });
  }

  /** @returns {ResponseEnvelopeListJobConfigDTO} */
  static ResponseEnvelopeListJobConfigDTO() {
    return Joi.object({
      timestamp: Joi.string().allow(""),
      status: Joi.number(),
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      message: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      http_status: Joi.string().allow(""),
      items: Joi.array().items(InventoryPlatformModel.JobConfigDTO()),
      payload: Joi.array().items(InventoryPlatformModel.JobConfigDTO()),
      trace_id: Joi.string().allow(""),
      page: InventoryPlatformModel.Page(),
    });
  }

  /** @returns {ResponseEnvelopeJobConfigDTO} */
  static ResponseEnvelopeJobConfigDTO() {
    return Joi.object({
      timestamp: Joi.string().allow(""),
      status: Joi.number(),
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      message: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      http_status: Joi.string().allow(""),
      items: InventoryPlatformModel.JobConfigDTO(),
      payload: InventoryPlatformModel.JobConfigDTO(),
      trace_id: Joi.string().allow(""),
      page: InventoryPlatformModel.Page(),
    });
  }

  /** @returns {JobHistoryDto} */
  static JobHistoryDto() {
    return Joi.object({
      total_added_count: Joi.number(),
      total_updated_count: Joi.number(),
      total_suppressed_count: Joi.number(),
      total_initial_count: Joi.number(),
      job_id: Joi.number(),
      status: Joi.string().allow(""),
      job_code: Joi.string().allow(""),
      processed_on: Joi.string().allow(""),
      filename: Joi.array().items(Joi.string().allow("")),
      error_type: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {JobMetricsDto} */
  static JobMetricsDto() {
    return Joi.object({
      job_code: Joi.string().allow(""),
      is_run_more_than_usual: Joi.string().allow(""),
      job_history: Joi.array().items(InventoryPlatformModel.JobHistoryDto()),
      total_success_count: Joi.number(),
      total_failure_count: Joi.number(),
      total_warning_count: Joi.number(),
      total_suppressed_count: Joi.number(),
      total_job_runs: Joi.number(),
    });
  }

  /** @returns {ResponseEnvelopeJobMetricsDto} */
  static ResponseEnvelopeJobMetricsDto() {
    return Joi.object({
      timestamp: Joi.string().allow(""),
      status: Joi.number(),
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      message: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      http_status: Joi.string().allow(""),
      items: InventoryPlatformModel.JobMetricsDto(),
      payload: InventoryPlatformModel.JobMetricsDto(),
      trace_id: Joi.string().allow(""),
      page: InventoryPlatformModel.Page(),
    });
  }

  /** @returns {JobConfigListDTO} */
  static JobConfigListDTO() {
    return Joi.object({
      code: Joi.string().allow(""),
      alias: Joi.string().allow(""),
      modified_by: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      active: Joi.boolean(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {ResponseEnvelopeListJobConfigListDTO} */
  static ResponseEnvelopeListJobConfigListDTO() {
    return Joi.object({
      timestamp: Joi.string().allow(""),
      status: Joi.number(),
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      message: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      http_status: Joi.string().allow(""),
      items: Joi.array().items(InventoryPlatformModel.JobConfigListDTO()),
      payload: Joi.array().items(InventoryPlatformModel.JobConfigListDTO()),
      trace_id: Joi.string().allow(""),
      page: InventoryPlatformModel.Page(),
    });
  }
}
module.exports = InventoryPlatformModel;
