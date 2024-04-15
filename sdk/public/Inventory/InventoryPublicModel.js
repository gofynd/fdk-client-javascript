const Joi = require("joi");

/**
 * @typedef EmailJobMetrics
 * @property {boolean} [executed]
 * @property {string} [id]
 * @property {string} [job_code]
 * @property {boolean} [daily_job]
 * @property {string} [last_executed_on]
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
 * @typedef ResponseEnvelopeEmailJobMetrics
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {EmailJobMetrics} [items]
 * @property {EmailJobMetrics} [payload]
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
 * @typedef ResponseEnvelopeSlingshotConfigurationDetail
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {SlingshotConfigurationDetail} [items]
 * @property {SlingshotConfigurationDetail} [payload]
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
 * @typedef ApikeyModel
 * @property {string} [session_id]
 * @property {string} [error_message]
 */

/**
 * @typedef ResponseEnvelopeApikeyModel
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {ApikeyModel} [items]
 * @property {ApikeyModel} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

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
 * @typedef TaskDTO
 * @property {number} [type]
 * @property {GenericDTO[]} [group_list]
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
 * @typedef ResponseEnvelopeObject
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {Object} [items]
 * @property {Object} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

class InventoryPublicModel {
  /** @returns {EmailJobMetrics} */
  static EmailJobMetrics() {
    return Joi.object({
      executed: Joi.boolean(),
      id: Joi.string().allow(""),
      job_code: Joi.string().allow(""),
      daily_job: Joi.boolean(),
      last_executed_on: Joi.string().allow(""),
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

  /** @returns {ResponseEnvelopeEmailJobMetrics} */
  static ResponseEnvelopeEmailJobMetrics() {
    return Joi.object({
      timestamp: Joi.string().allow(""),
      status: Joi.number(),
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      message: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      http_status: Joi.string().allow(""),
      items: InventoryPublicModel.EmailJobMetrics(),
      payload: InventoryPublicModel.EmailJobMetrics(),
      trace_id: Joi.string().allow(""),
      page: InventoryPublicModel.Page(),
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
      stores: Joi.array().items(InventoryPublicModel.GStore()),
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
      data: InventoryPublicModel.StoreData(),
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

  /** @returns {ResponseEnvelopeSlingshotConfigurationDetail} */
  static ResponseEnvelopeSlingshotConfigurationDetail() {
    return Joi.object({
      timestamp: Joi.string().allow(""),
      status: Joi.number(),
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      message: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      http_status: Joi.string().allow(""),
      items: InventoryPublicModel.SlingshotConfigurationDetail(),
      payload: InventoryPublicModel.SlingshotConfigurationDetail(),
      trace_id: Joi.string().allow(""),
      page: InventoryPublicModel.Page(),
    });
  }

  /** @returns {SlingshotConfigurationDetail} */
  static SlingshotConfigurationDetail() {
    return Joi.object({
      integration: InventoryPublicModel.SlingshotIntegration(),
      companies: Joi.array().items(InventoryPublicModel.GCompany()),
    });
  }

  /** @returns {SlingshotIntegration} */
  static SlingshotIntegration() {
    return Joi.object({
      _id: Joi.string().allow(""),
      description: Joi.string().allow(""),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      meta: Joi.array().items(InventoryPublicModel.Metum()),
    });
  }

  /** @returns {StoreData} */
  static StoreData() {
    return Joi.object({
      location_id: Joi.string().allow(""),
    });
  }

  /** @returns {ApikeyModel} */
  static ApikeyModel() {
    return Joi.object({
      session_id: Joi.string().allow(""),
      error_message: Joi.string().allow(""),
    });
  }

  /** @returns {ResponseEnvelopeApikeyModel} */
  static ResponseEnvelopeApikeyModel() {
    return Joi.object({
      timestamp: Joi.string().allow(""),
      status: Joi.number(),
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      message: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      http_status: Joi.string().allow(""),
      items: InventoryPublicModel.ApikeyModel(),
      payload: InventoryPublicModel.ApikeyModel(),
      trace_id: Joi.string().allow(""),
      page: InventoryPublicModel.Page(),
    });
  }

  /** @returns {DataTresholdDTO} */
  static DataTresholdDTO() {
    return Joi.object({
      min_price: Joi.number(),
      safe_stock: Joi.number(),
      period_threshold: Joi.number(),
      period_threshold_type: Joi.string().allow(""),
      period_type_list: Joi.array().items(InventoryPublicModel.GenericDTO()),
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
      task_details: InventoryPublicModel.TaskDTO(),
      threshold_details: InventoryPublicModel.DataTresholdDTO(),
      job_code: Joi.string().allow(""),
      alias: Joi.string().allow(""),
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
      items: InventoryPublicModel.JobConfigDTO(),
      payload: InventoryPublicModel.JobConfigDTO(),
      trace_id: Joi.string().allow(""),
      page: InventoryPublicModel.Page(),
    });
  }

  /** @returns {TaskDTO} */
  static TaskDTO() {
    return Joi.object({
      type: Joi.number(),
      group_list: Joi.array().items(InventoryPublicModel.GenericDTO()),
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
      items: Joi.array().items(InventoryPublicModel.JobConfigDTO()),
      payload: Joi.array().items(InventoryPublicModel.JobConfigDTO()),
      trace_id: Joi.string().allow(""),
      page: InventoryPublicModel.Page(),
    });
  }

  /** @returns {ResponseEnvelopeObject} */
  static ResponseEnvelopeObject() {
    return Joi.object({
      timestamp: Joi.string().allow(""),
      status: Joi.number(),
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      message: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      http_status: Joi.string().allow(""),
      items: Joi.any(),
      payload: Joi.any(),
      trace_id: Joi.string().allow(""),
      page: InventoryPublicModel.Page(),
    });
  }
}
module.exports = InventoryPublicModel;
