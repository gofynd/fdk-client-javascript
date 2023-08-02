const Joi = require("joi");

class InventoryModel {
  static ArchiveConfig() {
    return Joi.object({
      archive: Joi.boolean(),
      archive_dir: Joi.string().allow(""),
      delete: Joi.boolean(),
    });
  }
  static Audit() {
    return Joi.object({
      created_by: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      modified_by: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
    });
  }
  static AWSS3config() {
    return Joi.object({
      access_key: Joi.string().allow(""),
      archive: Joi.boolean(),
      archive_config: InventoryModel.ArchiveConfig(),
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
  static CatalogMasterConfig() {
    return Joi.object({
      source_slug: Joi.string().allow(""),
    });
  }
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
  static DataTresholdDTO() {
    return Joi.object({
      min_price: Joi.number(),
      period_threshold: Joi.number(),
      period_threshold_type: Joi.string().allow(""),
      period_type_list: Joi.array().items(InventoryModel.GenericDTO()),
      safe_stock: Joi.number(),
    });
  }
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
  static DBConnectionProfile() {
    return Joi.object({
      inventory: Joi.string().allow(""),
    });
  }
  static DBParamConfig() {
    return Joi.object({
      params: Joi.object().pattern(/\S/, Joi.any()),
    });
  }
  static DefaultHeadersDTO() {
    return Joi.object({
      intf_article_id: InventoryModel.PropBeanDTO(),
      price_effective: InventoryModel.PropBeanDTO(),
      quantity: InventoryModel.PropBeanDTO(),
      store: InventoryModel.PropBeanDTO(),
    });
  }
  static DocMappingConfig() {
    return Joi.object({
      default_headers: InventoryModel.DefaultHeadersDTO(),
      junk_data_threshold_count: Joi.number(),
      prop_bean_configs: Joi.array().items(InventoryModel.PropBeanConfig()),
      properties: Joi.object().pattern(/\S/, Joi.any()),
      unwind_field: Joi.string().allow(""),
    });
  }
  static EmailConfig() {
    return Joi.object({
      archive_config: InventoryModel.ArchiveConfig(),
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
  static FileConfig() {
    return Joi.object({
      charset: Joi.string().allow(""),
      data_start_index: Joi.number(),
      default_headers: InventoryModel.DefaultHeadersDTO(),
      delimiter: Joi.string().allow(""),
      escape_char: Joi.string().allow(""),
      file_has_header: Joi.boolean(),
      file_type: Joi.string().allow(""),
      header_array: Joi.array().items(Joi.string().allow("")),
      header_index: Joi.number(),
      junk_data_threshold_count: Joi.number(),
      line_validity_check: Joi.boolean(),
      prop_bean_configs: Joi.array().items(InventoryModel.PropBeanConfig()),
      properties: Joi.object().pattern(/\S/, Joi.any()),
      quote_char: Joi.string().allow(""),
      read_all_sheets: Joi.boolean(),
      sheet_names: Joi.array().items(Joi.string().allow("")),
    });
  }
  static FTPConfig() {
    return Joi.object({
      archive_config: InventoryModel.ArchiveConfig(),
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
  static GCompany() {
    return Joi.object({
      _id: Joi.string().allow(""),
      integration: Joi.string().allow(""),
      level: Joi.string().allow(""),
      name: Joi.string().allow(""),
      opted: Joi.boolean(),
      permissions: Joi.array().items(Joi.string().allow("")),
      stores: Joi.array().items(InventoryModel.GStore()),
      token: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static GenericDTO() {
    return Joi.object({
      text: Joi.string().allow(""),
      value: Joi.any(),
    });
  }
  static GoogleSpreadSheetConfig() {
    return Joi.object({
      archive_config: InventoryModel.ArchiveConfig(),
      client_secret_location: Joi.string().allow(""),
      cred_storage_directory: Joi.string().allow(""),
      local_dir: Joi.string().allow(""),
      range: Joi.string().allow(""),
      sheet_id: Joi.string().allow(""),
    });
  }
  static GStore() {
    return Joi.object({
      _id: Joi.string().allow(""),
      code: Joi.string().allow(""),
      data: InventoryModel.StoreData(),
      integration: Joi.string().allow(""),
      level: Joi.string().allow(""),
      name: Joi.string().allow(""),
      opted: Joi.boolean(),
      permissions: Joi.array().items(Joi.string().allow("")),
      token: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static HttpConfig() {
    return Joi.object({
      archive_config: InventoryModel.ArchiveConfig(),
      hosturl: Joi.string().allow(""),
      http_method: Joi.string().allow(""),
      local_path: Joi.string().allow(""),
      password: Joi.string().allow(""),
      request_params: Joi.object().pattern(/\S/, Joi.string().allow("")),
      request_payload: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }
  static JobConfig() {
    return Joi.object({
      _id: Joi.number(),
      aggregator_types: Joi.array().items(Joi.string().allow("")),
      alias: Joi.string().allow(""),
      audit: InventoryModel.Audit(),
      catalog_master_config: InventoryModel.CatalogMasterConfig(),
      company_config: Joi.array().items(InventoryModel.CompanyConfig()),
      company_ids: Joi.array().items(Joi.number()),
      cron_expression: Joi.string().allow(""),
      db_connection_profile: InventoryModel.DBConnectionProfile(),
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
      process_config: InventoryModel.ProcessConfig(),
      properties: Joi.object().pattern(/\S/, Joi.string().allow("")),
      store_config: Joi.array().items(InventoryModel.StoreConfig()),
      store_filter: InventoryModel.StoreFilter(),
      sync_delay: Joi.number(),
      task_type: Joi.string().allow(""),
      tax_identifiers: Joi.array().items(Joi.string().allow("")),
      version: Joi.number(),
    });
  }
  static JobConfigDTO() {
    return Joi.object({
      alias: Joi.string().allow(""),
      company_id: Joi.number().required(),
      company_name: Joi.string().allow(""),
      integration: Joi.string().allow("").required(),
      integration_data: Joi.object().pattern(/\S/, Joi.any()),
      job_code: Joi.string().allow(""),
      task_details: InventoryModel.TaskDTO(),
      threshold_details: InventoryModel.DataTresholdDTO(),
    });
  }
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
  static JobConfigRawDTO() {
    return Joi.object({
      company_id: Joi.number().required(),
      company_name: Joi.string().allow("").required(),
      data: InventoryModel.JobConfig(),
      integration: Joi.string().allow("").required(),
    });
  }
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
  static JobMetricsDto() {
    return Joi.object({
      is_run_more_than_usual: Joi.string().allow(""),
      job_code: Joi.string().allow(""),
      job_history: Joi.array().items(InventoryModel.JobHistoryDto()),
      total_failure_count: Joi.number(),
      total_job_runs: Joi.number(),
      total_success_count: Joi.number(),
      total_suppressed_count: Joi.number(),
      total_warning_count: Joi.number(),
    });
  }
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
  static JsonDocConfig() {
    return Joi.object({
      prop_bean_configs: Joi.array().items(InventoryModel.PropBeanConfig()),
    });
  }
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
  static KafkaResponse() {
    return Joi.object({
      offset: Joi.number(),
      partition: Joi.number(),
    });
  }
  static LocalFileConfig() {
    return Joi.object({
      archive_config: InventoryModel.ArchiveConfig(),
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
  static Metum() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static MongoDocConfig() {
    return Joi.object({
      aggregate_pipeline: Joi.array().items(
        Joi.object().pattern(/\S/, Joi.any())
      ),
      collection_name: Joi.string().allow(""),
      find_query: Joi.object().pattern(/\S/, Joi.any()),
      projection_query: Joi.object().pattern(/\S/, Joi.any()),
      prop_bean_configs: Joi.array().items(InventoryModel.PropBeanConfig()),
      skip_save: Joi.boolean(),
    });
  }
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
  static ProcessConfig() {
    return Joi.object({
      aws_s3_config: InventoryModel.AWSS3config(),
      db_config: InventoryModel.DBConfig(),
      db_param_config: InventoryModel.DBParamConfig(),
      doc_mapping_config: InventoryModel.DocMappingConfig(),
      email_config: InventoryModel.EmailConfig(),
      file_config: InventoryModel.FileConfig(),
      ftp_config: InventoryModel.FTPConfig(),
      google_spreadsheet_config: InventoryModel.GoogleSpreadSheetConfig(),
      http_config: InventoryModel.HttpConfig(),
      json_doc_config: InventoryModel.JsonDocConfig(),
      local_file_config: InventoryModel.LocalFileConfig(),
      mongo_doc_config: InventoryModel.MongoDocConfig(),
      oauth_config: InventoryModel.OAuthConfig(),
      sftp_config: InventoryModel.SFTPConfig(),
      task_step_config: InventoryModel.TaskStepConfig(),
    });
  }
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
      send: InventoryModel.Send(),
      source_field: Joi.string().allow(""),
      source_fields: Joi.array().items(Joi.string().allow("")),
      sub_separator: Joi.string().allow(""),
      transformer_name: Joi.string().allow(""),
      validations: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      values: Joi.array().items(Joi.string().allow("")),
    });
  }
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
  static ResponseEnvelopeJobConfigDTO() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: InventoryModel.JobConfigDTO(),
      message: Joi.string().allow(""),
      page: InventoryModel.Page(),
      payload: InventoryModel.JobConfigDTO(),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }
  static ResponseEnvelopeJobMetricsDto() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: InventoryModel.JobMetricsDto(),
      message: Joi.string().allow(""),
      page: InventoryModel.Page(),
      payload: InventoryModel.JobMetricsDto(),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }
  static ResponseEnvelopeKafkaResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: InventoryModel.KafkaResponse(),
      message: Joi.string().allow(""),
      page: InventoryModel.Page(),
      payload: InventoryModel.KafkaResponse(),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }
  static ResponseEnvelopeListJobConfigDTO() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: Joi.array().items(InventoryModel.JobConfigDTO()),
      message: Joi.string().allow(""),
      page: InventoryModel.Page(),
      payload: Joi.array().items(InventoryModel.JobConfigDTO()),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }
  static ResponseEnvelopeListJobConfigListDTO() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: Joi.array().items(InventoryModel.JobConfigListDTO()),
      message: Joi.string().allow(""),
      page: InventoryModel.Page(),
      payload: Joi.array().items(InventoryModel.JobConfigListDTO()),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }
  static ResponseEnvelopeListJobConfigRawDTO() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: Joi.array().items(InventoryModel.JobConfigRawDTO()),
      message: Joi.string().allow(""),
      page: InventoryModel.Page(),
      payload: Joi.array().items(InventoryModel.JobConfigRawDTO()),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }
  static ResponseEnvelopeListJobStepsDTO() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: Joi.array().items(InventoryModel.JobStepsDTO()),
      message: Joi.string().allow(""),
      page: InventoryModel.Page(),
      payload: Joi.array().items(InventoryModel.JobStepsDTO()),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }
  static ResponseEnvelopeListSlingshotConfigurationDetail() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: Joi.array().items(InventoryModel.SlingshotConfigurationDetail()),
      message: Joi.string().allow(""),
      page: InventoryModel.Page(),
      payload: Joi.array().items(InventoryModel.SlingshotConfigurationDetail()),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }
  static ResponseEnvelopeString() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: Joi.string().allow(""),
      message: Joi.string().allow(""),
      page: InventoryModel.Page(),
      payload: Joi.string().allow(""),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }
  static Send() {
    return Joi.object({
      processed: Joi.boolean(),
      raw: Joi.boolean(),
    });
  }
  static SFTPConfig() {
    return Joi.object({
      archive_config: InventoryModel.ArchiveConfig(),
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
  static SlingshotConfigurationDetail() {
    return Joi.object({
      companies: Joi.array().items(InventoryModel.GCompany()),
      integration: InventoryModel.SlingshotIntegration(),
    });
  }
  static SlingshotIntegration() {
    return Joi.object({
      _id: Joi.string().allow(""),
      description: Joi.string().allow(""),
      meta: Joi.array().items(InventoryModel.Metum()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }
  static StoreConfig() {
    return Joi.object({
      job_code: Joi.string().allow(""),
      process_config: InventoryModel.ProcessConfig(),
      properties: Joi.object().pattern(/\S/, Joi.string().allow("")),
      store_alias: Joi.string().allow(""),
      store_file_name: Joi.string().allow(""),
      store_file_regex: Joi.string().allow(""),
      storeid: Joi.string().allow(""),
    });
  }
  static StoreData() {
    return Joi.object({
      location_id: Joi.string().allow(""),
    });
  }
  static StoreFilter() {
    return Joi.object({
      exclude_tags: Joi.array().items(Joi.string().allow("")),
      include_tags: Joi.array().items(Joi.string().allow("")),
      query: Joi.object().pattern(/\S/, Joi.any()),
    });
  }
  static SuppressStoreModel() {
    return Joi.object({
      stores: Joi.array().items(Joi.number()),
    });
  }
  static SuppressStorePayload() {
    return Joi.object({
      meta: InventoryModel.KafkaMetaModel(),
      payload: Joi.array().items(InventoryModel.SuppressStoreModel()),
    });
  }
  static TaskConfig() {
    return Joi.object({
      name: Joi.string().allow(""),
      task_config_id: Joi.number(),
      task_params: Joi.array().items(InventoryModel.TaskParam()),
    });
  }
  static TaskDTO() {
    return Joi.object({
      group_list: Joi.array().items(InventoryModel.GenericDTO()),
      type: Joi.number(),
    });
  }
  static TaskParam() {
    return Joi.object({
      name: Joi.string().allow(""),
      value: Joi.any(),
    });
  }
  static TaskStepConfig() {
    return Joi.object({
      task_config_group_ids: Joi.array().items(Joi.number()),
      task_config_ids: Joi.array().items(Joi.number()),
      task_configs: Joi.array().items(InventoryModel.TaskConfig()),
    });
  }
}
module.exports = InventoryModel;
