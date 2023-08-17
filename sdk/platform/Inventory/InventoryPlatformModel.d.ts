export = InventoryPlatformModel;
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
declare class InventoryPlatformModel {
}
declare namespace InventoryPlatformModel {
    export { ArchiveConfig, Audit, AWSS3config, CatalogMasterConfig, CompanyConfig, DataTresholdDTO, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FileConfig, FTPConfig, GCompany, GenericDTO, GoogleSpreadSheetConfig, GStore, HttpConfig, JobConfig, JobConfigDTO, JobConfigListDTO, JobConfigRawDTO, JobHistoryDto, JobMetricsDto, JobStepsDTO, JsonDocConfig, KafkaMetaModel, KafkaResponse, LocalFileConfig, Metum, MongoDocConfig, OAuthConfig, Page, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeJobConfigDTO, ResponseEnvelopeJobMetricsDto, ResponseEnvelopeKafkaResponse, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeListJobConfigListDTO, ResponseEnvelopeListJobConfigRawDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListSlingshotConfigurationDetail, ResponseEnvelopeString, Send, SFTPConfig, SlingshotConfigurationDetail, SlingshotIntegration, StoreConfig, StoreData, StoreFilter, SuppressStoreModel, SuppressStorePayload, TaskConfig, TaskDTO, TaskParam, TaskStepConfig };
}
/** @returns {ArchiveConfig} */
declare function ArchiveConfig(): ArchiveConfig;
type ArchiveConfig = {
    archive?: boolean;
    archive_dir?: string;
    delete?: boolean;
};
/** @returns {Audit} */
declare function Audit(): Audit;
type Audit = {
    created_by?: string;
    created_on?: string;
    modified_by?: string;
    modified_on?: string;
};
/** @returns {AWSS3config} */
declare function AWSS3config(): AWSS3config;
type AWSS3config = {
    access_key?: string;
    archive?: boolean;
    archive_config?: ArchiveConfig;
    archive_path?: string;
    bucket?: string;
    delete?: boolean;
    dir?: string;
    file_regex?: string;
    local_file_path?: string;
    region?: string;
    secret_key?: string;
    unzip?: boolean;
    zip_format?: string;
};
/** @returns {CatalogMasterConfig} */
declare function CatalogMasterConfig(): CatalogMasterConfig;
type CatalogMasterConfig = {
    source_slug?: string;
};
/** @returns {CompanyConfig} */
declare function CompanyConfig(): CompanyConfig;
type CompanyConfig = {
    company_id?: number;
    delete_quantity_threshold?: number;
    exclude_steps?: number[];
    hidden_closet_keys?: string[];
    open_tags?: any;
    tax_identifiers?: string[];
};
/** @returns {DataTresholdDTO} */
declare function DataTresholdDTO(): DataTresholdDTO;
type DataTresholdDTO = {
    min_price?: number;
    period_threshold?: number;
    period_threshold_type?: string;
    period_type_list?: GenericDTO[];
    safe_stock?: number;
};
/** @returns {DBConfig} */
declare function DBConfig(): DBConfig;
type DBConfig = {
    dbname?: string;
    driver_class?: string;
    host?: string;
    jdbc_url?: string;
    optional_properties?: any;
    password?: string;
    port?: number;
    procedure?: boolean;
    query?: string;
    username?: string;
    vendor?: string;
};
/** @returns {DBConnectionProfile} */
declare function DBConnectionProfile(): DBConnectionProfile;
type DBConnectionProfile = {
    inventory?: string;
};
/** @returns {DBParamConfig} */
declare function DBParamConfig(): DBParamConfig;
type DBParamConfig = {
    params?: any;
};
/** @returns {DefaultHeadersDTO} */
declare function DefaultHeadersDTO(): DefaultHeadersDTO;
type DefaultHeadersDTO = {
    intf_article_id?: PropBeanDTO;
    price_effective?: PropBeanDTO;
    quantity?: PropBeanDTO;
    store?: PropBeanDTO;
};
/** @returns {DocMappingConfig} */
declare function DocMappingConfig(): DocMappingConfig;
type DocMappingConfig = {
    default_headers?: DefaultHeadersDTO;
    junk_data_threshold_count?: number;
    prop_bean_configs?: PropBeanConfig[];
    properties?: any;
    unwind_field?: string;
};
/** @returns {EmailConfig} */
declare function EmailConfig(): EmailConfig;
type EmailConfig = {
    archive_config?: ArchiveConfig;
    attachment_mandate?: boolean;
    attachment_regex?: string;
    body_content_regex?: string;
    content_type?: string;
    downloadable_link?: boolean;
    filter_based_on_recepients?: boolean;
    filter_files_after_extraction?: boolean;
    folder_name_hierarchies?: string[];
    host?: string;
    local_dir?: string;
    password?: string;
    password_protected?: boolean;
    pcol?: string;
    properties?: any;
    read_all_unread_mails?: boolean;
    read_from_content?: boolean;
    recepient?: string;
    sender_address?: string;
    subject_line_regex?: string;
    unzip?: boolean;
    username?: string;
    zip_format?: string;
};
/** @returns {FileConfig} */
declare function FileConfig(): FileConfig;
type FileConfig = {
    charset?: string;
    data_start_index?: number;
    default_headers?: DefaultHeadersDTO;
    delimiter?: string;
    escape_char?: string;
    file_has_header?: boolean;
    file_type?: string;
    header_array?: string[];
    header_index?: number;
    junk_data_threshold_count?: number;
    line_validity_check?: boolean;
    prop_bean_configs?: PropBeanConfig[];
    properties?: any;
    quote_char?: string;
    read_all_sheets?: boolean;
    sheet_names?: string[];
};
/** @returns {FTPConfig} */
declare function FTPConfig(): FTPConfig;
type FTPConfig = {
    archive_config?: ArchiveConfig;
    file_regex?: string;
    host?: string;
    interval?: number;
    local_dir?: string;
    password?: string;
    port?: number;
    read_all_files?: boolean;
    remote_dir?: string;
    retries?: number;
    unzip?: boolean;
    username?: string;
    zip_file_regex?: string;
    zip_format?: string;
};
/** @returns {GCompany} */
declare function GCompany(): GCompany;
type GCompany = {
    _id?: string;
    integration?: string;
    level?: string;
    name?: string;
    opted?: boolean;
    permissions?: string[];
    stores?: GStore[];
    token?: string;
    uid?: number;
};
/** @returns {GenericDTO} */
declare function GenericDTO(): GenericDTO;
type GenericDTO = {
    text?: string;
    value?: any;
};
/** @returns {GoogleSpreadSheetConfig} */
declare function GoogleSpreadSheetConfig(): GoogleSpreadSheetConfig;
type GoogleSpreadSheetConfig = {
    archive_config?: ArchiveConfig;
    client_secret_location?: string;
    cred_storage_directory?: string;
    local_dir?: string;
    range?: string;
    sheet_id?: string;
};
/** @returns {GStore} */
declare function GStore(): GStore;
type GStore = {
    _id?: string;
    code?: string;
    data?: StoreData;
    integration?: string;
    level?: string;
    name?: string;
    opted?: boolean;
    permissions?: string[];
    token?: string;
    uid?: number;
};
/** @returns {HttpConfig} */
declare function HttpConfig(): HttpConfig;
type HttpConfig = {
    archive_config?: ArchiveConfig;
    hosturl?: string;
    http_method?: string;
    local_path?: string;
    password?: string;
    request_params?: any;
    request_payload?: string;
    username?: string;
};
/** @returns {JobConfig} */
declare function JobConfig(): JobConfig;
type JobConfig = {
    _id?: number;
    aggregator_types?: string[];
    alias?: string;
    audit?: Audit;
    catalog_master_config?: CatalogMasterConfig;
    company_config?: CompanyConfig[];
    company_ids?: number[];
    cron_expression?: string;
    db_connection_profile?: DBConnectionProfile;
    delete_quantity_threshold?: number;
    dependent_job_codes?: string[];
    disable?: boolean;
    immediate_first_run?: boolean;
    integration_type?: string;
    job_code?: string;
    min_price?: number;
    open_tags?: any;
    params?: any;
    period_threshold?: number;
    period_threshold_type?: string;
    priority?: string;
    process_config?: ProcessConfig;
    properties?: any;
    store_config?: StoreConfig[];
    store_filter?: StoreFilter;
    sync_delay?: number;
    task_type?: string;
    tax_identifiers?: string[];
    version?: number;
};
/** @returns {JobConfigDTO} */
declare function JobConfigDTO(): JobConfigDTO;
type JobConfigDTO = {
    alias?: string;
    company_id: number;
    company_name?: string;
    integration: string;
    integration_data?: any;
    job_code?: string;
    task_details?: TaskDTO;
    threshold_details?: DataTresholdDTO;
};
/** @returns {JobConfigListDTO} */
declare function JobConfigListDTO(): JobConfigListDTO;
type JobConfigListDTO = {
    active?: boolean;
    alias?: string;
    code?: string;
    created_by?: string;
    created_on?: string;
    modified_by?: string;
    modified_on?: string;
    type?: string;
};
/** @returns {JobConfigRawDTO} */
declare function JobConfigRawDTO(): JobConfigRawDTO;
type JobConfigRawDTO = {
    company_id: number;
    company_name: string;
    data?: JobConfig;
    integration: string;
};
/** @returns {JobHistoryDto} */
declare function JobHistoryDto(): JobHistoryDto;
type JobHistoryDto = {
    error_type?: string;
    filename?: string[];
    job_code?: string;
    job_id?: number;
    message?: string;
    processed_on?: string;
    status?: string;
    total_added_count?: number;
    total_initial_count?: number;
    total_suppressed_count?: number;
    total_updated_count?: number;
};
/** @returns {JobMetricsDto} */
declare function JobMetricsDto(): JobMetricsDto;
type JobMetricsDto = {
    is_run_more_than_usual?: string;
    job_code?: string;
    job_history?: JobHistoryDto[];
    total_failure_count?: number;
    total_job_runs?: number;
    total_success_count?: number;
    total_suppressed_count?: number;
    total_warning_count?: number;
};
/** @returns {JobStepsDTO} */
declare function JobStepsDTO(): JobStepsDTO;
type JobStepsDTO = {
    deleted_count?: number;
    end_count?: number;
    processed_at?: string;
    processed_start_time?: string;
    start_count?: number;
    step_execution_time?: number;
    step_name?: string;
    type?: string;
};
/** @returns {JsonDocConfig} */
declare function JsonDocConfig(): JsonDocConfig;
type JsonDocConfig = {
    prop_bean_configs?: PropBeanConfig[];
};
/** @returns {KafkaMetaModel} */
declare function KafkaMetaModel(): KafkaMetaModel;
type KafkaMetaModel = {
    action?: string;
    batch_id?: number;
    created_on?: string;
    created_timestamp?: number;
    job_type?: string;
    trace?: string[];
};
/** @returns {KafkaResponse} */
declare function KafkaResponse(): KafkaResponse;
type KafkaResponse = {
    offset?: number;
    partition?: number;
};
/** @returns {LocalFileConfig} */
declare function LocalFileConfig(): LocalFileConfig;
type LocalFileConfig = {
    archive_config?: ArchiveConfig;
    file_regex?: string;
    interval?: number;
    local_dir?: string;
    read_all_files?: boolean;
    retries?: number;
    unzip?: boolean;
    working_dir?: string;
    zip_file_regex?: string;
    zip_format?: string;
};
/** @returns {Metum} */
declare function Metum(): Metum;
type Metum = {
    _id?: string;
    name?: string;
    value?: string;
};
/** @returns {MongoDocConfig} */
declare function MongoDocConfig(): MongoDocConfig;
type MongoDocConfig = {
    aggregate_pipeline?: any[];
    collection_name?: string;
    find_query?: any;
    projection_query?: any;
    prop_bean_configs?: PropBeanConfig[];
    skip_save?: boolean;
};
/** @returns {OAuthConfig} */
declare function OAuthConfig(): OAuthConfig;
type OAuthConfig = {
    consumer_key?: string;
    consumer_secret?: string;
    function_name?: string;
    interval?: number;
    limit?: number;
    pages?: number;
    rest_base_url?: string;
    rest_url?: string;
    token?: string;
    token_secret?: string;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size?: number;
    type: string;
};
/** @returns {ProcessConfig} */
declare function ProcessConfig(): ProcessConfig;
type ProcessConfig = {
    aws_s3_config?: AWSS3config;
    db_config?: DBConfig;
    db_param_config?: DBParamConfig;
    doc_mapping_config?: DocMappingConfig;
    email_config?: EmailConfig;
    file_config?: FileConfig;
    ftp_config?: FTPConfig;
    google_spreadsheet_config?: GoogleSpreadSheetConfig;
    http_config?: HttpConfig;
    json_doc_config?: JsonDocConfig;
    local_file_config?: LocalFileConfig;
    mongo_doc_config?: MongoDocConfig;
    oauth_config?: OAuthConfig;
    sftp_config?: SFTPConfig;
    task_step_config?: TaskStepConfig;
};
/** @returns {PropBeanConfig} */
declare function PropBeanConfig(): PropBeanConfig;
type PropBeanConfig = {
    all_param_function_name?: string;
    concat_str?: string;
    const_value?: any;
    data_type?: string;
    default_value?: any;
    destination_field?: string;
    enrich_from_master?: boolean;
    function_name?: string;
    identifier_type?: string;
    ignore_if_not_exists?: boolean;
    include?: boolean;
    index_field?: string;
    optional?: boolean;
    projection_query?: any;
    required?: boolean;
    send?: Send;
    source_field?: string;
    source_fields?: string[];
    sub_separator?: string;
    transformer_name?: string;
    validations?: any[];
    values?: string[];
};
/** @returns {PropBeanDTO} */
declare function PropBeanDTO(): PropBeanDTO;
type PropBeanDTO = {
    all_param_function_name?: string;
    concat_str?: string;
    const_value?: any;
    data_type?: string;
    default_value?: any;
    destination_field?: string;
    enrich_from_master?: boolean;
    function_name?: string;
    identifier_type?: string;
    ignore_if_not_exists?: boolean;
    include?: boolean;
    index_field?: string;
    optional?: boolean;
    projection_query?: any;
    required?: boolean;
    source_field?: string;
    source_fields?: string[];
    sub_separator?: string;
    transformer_name?: string;
};
/** @returns {ResponseEnvelopeJobConfigDTO} */
declare function ResponseEnvelopeJobConfigDTO(): ResponseEnvelopeJobConfigDTO;
type ResponseEnvelopeJobConfigDTO = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: JobConfigDTO;
    message?: string;
    page?: Page;
    payload?: JobConfigDTO;
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
/** @returns {ResponseEnvelopeJobMetricsDto} */
declare function ResponseEnvelopeJobMetricsDto(): ResponseEnvelopeJobMetricsDto;
type ResponseEnvelopeJobMetricsDto = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: JobMetricsDto;
    message?: string;
    page?: Page;
    payload?: JobMetricsDto;
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
/** @returns {ResponseEnvelopeKafkaResponse} */
declare function ResponseEnvelopeKafkaResponse(): ResponseEnvelopeKafkaResponse;
type ResponseEnvelopeKafkaResponse = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: KafkaResponse;
    message?: string;
    page?: Page;
    payload?: KafkaResponse;
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
/** @returns {ResponseEnvelopeListJobConfigDTO} */
declare function ResponseEnvelopeListJobConfigDTO(): ResponseEnvelopeListJobConfigDTO;
type ResponseEnvelopeListJobConfigDTO = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: JobConfigDTO[];
    message?: string;
    page?: Page;
    payload?: JobConfigDTO[];
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
/** @returns {ResponseEnvelopeListJobConfigListDTO} */
declare function ResponseEnvelopeListJobConfigListDTO(): ResponseEnvelopeListJobConfigListDTO;
type ResponseEnvelopeListJobConfigListDTO = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: JobConfigListDTO[];
    message?: string;
    page?: Page;
    payload?: JobConfigListDTO[];
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
/** @returns {ResponseEnvelopeListJobConfigRawDTO} */
declare function ResponseEnvelopeListJobConfigRawDTO(): ResponseEnvelopeListJobConfigRawDTO;
type ResponseEnvelopeListJobConfigRawDTO = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: JobConfigRawDTO[];
    message?: string;
    page?: Page;
    payload?: JobConfigRawDTO[];
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
/** @returns {ResponseEnvelopeListJobStepsDTO} */
declare function ResponseEnvelopeListJobStepsDTO(): ResponseEnvelopeListJobStepsDTO;
type ResponseEnvelopeListJobStepsDTO = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: JobStepsDTO[];
    message?: string;
    page?: Page;
    payload?: JobStepsDTO[];
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
/** @returns {ResponseEnvelopeListSlingshotConfigurationDetail} */
declare function ResponseEnvelopeListSlingshotConfigurationDetail(): ResponseEnvelopeListSlingshotConfigurationDetail;
type ResponseEnvelopeListSlingshotConfigurationDetail = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: SlingshotConfigurationDetail[];
    message?: string;
    page?: Page;
    payload?: SlingshotConfigurationDetail[];
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
/** @returns {ResponseEnvelopeString} */
declare function ResponseEnvelopeString(): ResponseEnvelopeString;
type ResponseEnvelopeString = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: string;
    message?: string;
    page?: Page;
    payload?: string;
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
/** @returns {Send} */
declare function Send(): Send;
type Send = {
    processed?: boolean;
    raw?: boolean;
};
/** @returns {SFTPConfig} */
declare function SFTPConfig(): SFTPConfig;
type SFTPConfig = {
    archive_config?: ArchiveConfig;
    file_regex?: string;
    host?: string;
    interval?: number;
    local_dir?: string;
    password?: string;
    password_protected?: boolean;
    port?: number;
    private_key_path?: string;
    read_all_files?: boolean;
    remote_dir?: string;
    retries?: number;
    strict_host_key_checking?: boolean;
    unzip?: boolean;
    username?: string;
    zip_file_regex?: string;
    zip_format?: string;
};
/** @returns {SlingshotConfigurationDetail} */
declare function SlingshotConfigurationDetail(): SlingshotConfigurationDetail;
type SlingshotConfigurationDetail = {
    companies?: GCompany[];
    integration?: SlingshotIntegration;
};
/** @returns {SlingshotIntegration} */
declare function SlingshotIntegration(): SlingshotIntegration;
type SlingshotIntegration = {
    _id?: string;
    description?: string;
    meta?: Metum[];
    name?: string;
    slug?: string;
};
/** @returns {StoreConfig} */
declare function StoreConfig(): StoreConfig;
type StoreConfig = {
    job_code?: string;
    process_config?: ProcessConfig;
    properties?: any;
    store_alias?: string;
    store_file_name?: string;
    store_file_regex?: string;
    storeid?: string;
};
/** @returns {StoreData} */
declare function StoreData(): StoreData;
type StoreData = {
    location_id?: string;
};
/** @returns {StoreFilter} */
declare function StoreFilter(): StoreFilter;
type StoreFilter = {
    exclude_tags?: string[];
    include_tags?: string[];
    query?: any;
};
/** @returns {SuppressStoreModel} */
declare function SuppressStoreModel(): SuppressStoreModel;
type SuppressStoreModel = {
    stores?: number[];
};
/** @returns {SuppressStorePayload} */
declare function SuppressStorePayload(): SuppressStorePayload;
type SuppressStorePayload = {
    meta?: KafkaMetaModel;
    payload?: SuppressStoreModel[];
};
/** @returns {TaskConfig} */
declare function TaskConfig(): TaskConfig;
type TaskConfig = {
    name?: string;
    task_config_id?: number;
    task_params?: TaskParam[];
};
/** @returns {TaskDTO} */
declare function TaskDTO(): TaskDTO;
type TaskDTO = {
    group_list?: GenericDTO[];
    type?: number;
};
/** @returns {TaskParam} */
declare function TaskParam(): TaskParam;
type TaskParam = {
    name?: string;
    value?: any;
};
/** @returns {TaskStepConfig} */
declare function TaskStepConfig(): TaskStepConfig;
type TaskStepConfig = {
    task_config_group_ids?: number[];
    task_config_ids?: number[];
    task_configs?: TaskConfig[];
};
