const Joi = require("joi");

/**
 * @typedef ApikeyModel
 * @property {string} [error_message]
 * @property {string} [session_id]
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
 * @typedef EmailJobMetrics
 * @property {boolean} [daily_job]
 * @property {boolean} [executed]
 * @property {string} [id]
 * @property {string} [job_code]
 * @property {string} [last_executed_on]
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
 * @typedef Metum
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [value]
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
 * @typedef ResponseEnvelopeApikeyModel
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [http_status]
 * @property {ApikeyModel} [items]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {ApikeyModel} [payload]
 * @property {number} [status]
 * @property {string} [timestamp]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [trace_id]
 */

/**
 * @typedef ResponseEnvelopeEmailJobMetrics
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [http_status]
 * @property {EmailJobMetrics} [items]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {EmailJobMetrics} [payload]
 * @property {number} [status]
 * @property {string} [timestamp]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [trace_id]
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
 * @typedef ResponseEnvelopeObject
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [http_status]
 * @property {Object} [items]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {Object} [payload]
 * @property {number} [status]
 * @property {string} [timestamp]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [trace_id]
 */

/**
 * @typedef ResponseEnvelopeSlingshotConfigurationDetail
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [http_status]
 * @property {SlingshotConfigurationDetail} [items]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {SlingshotConfigurationDetail} [payload]
 * @property {number} [status]
 * @property {string} [timestamp]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [trace_id]
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
 * @typedef StoreData
 * @property {string} [location_id]
 */

/**
 * @typedef TaskDTO
 * @property {GenericDTO[]} [group_list]
 * @property {number} [type]
 */

class InventoryPublicModel {
  /** @returns {ApikeyModel} */
  static ApikeyModel() {
    return Joi.object({
      error_message: Joi.string().allow(""),
      session_id: Joi.string().allow(""),
    });
  }

  /** @returns {DataTresholdDTO} */
  static DataTresholdDTO() {
    return Joi.object({
      min_price: Joi.number(),
      period_threshold: Joi.number(),
      period_threshold_type: Joi.string().allow(""),
      period_type_list: Joi.array().items(InventoryPublicModel.GenericDTO()),
      safe_stock: Joi.number(),
    });
  }

  /** @returns {EmailJobMetrics} */
  static EmailJobMetrics() {
    return Joi.object({
      daily_job: Joi.boolean(),
      executed: Joi.boolean(),
      id: Joi.string().allow(""),
      job_code: Joi.string().allow(""),
      last_executed_on: Joi.string().allow(""),
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
      stores: Joi.array().items(InventoryPublicModel.GStore()),
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

  /** @returns {GStore} */
  static GStore() {
    return Joi.object({
      _id: Joi.string().allow(""),
      code: Joi.string().allow(""),
      data: InventoryPublicModel.StoreData(),
      integration: Joi.string().allow(""),
      level: Joi.string().allow(""),
      name: Joi.string().allow(""),
      opted: Joi.boolean(),
      permissions: Joi.array().items(Joi.string().allow("")),
      token: Joi.string().allow(""),
      uid: Joi.number(),
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
      task_details: InventoryPublicModel.TaskDTO(),
      threshold_details: InventoryPublicModel.DataTresholdDTO(),
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

  /** @returns {ResponseEnvelopeApikeyModel} */
  static ResponseEnvelopeApikeyModel() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: InventoryPublicModel.ApikeyModel(),
      message: Joi.string().allow(""),
      page: InventoryPublicModel.Page(),
      payload: InventoryPublicModel.ApikeyModel(),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }

  /** @returns {ResponseEnvelopeEmailJobMetrics} */
  static ResponseEnvelopeEmailJobMetrics() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: InventoryPublicModel.EmailJobMetrics(),
      message: Joi.string().allow(""),
      page: InventoryPublicModel.Page(),
      payload: InventoryPublicModel.EmailJobMetrics(),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }

  /** @returns {ResponseEnvelopeJobConfigDTO} */
  static ResponseEnvelopeJobConfigDTO() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: InventoryPublicModel.JobConfigDTO(),
      message: Joi.string().allow(""),
      page: InventoryPublicModel.Page(),
      payload: InventoryPublicModel.JobConfigDTO(),
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
      items: Joi.array().items(InventoryPublicModel.JobConfigDTO()),
      message: Joi.string().allow(""),
      page: InventoryPublicModel.Page(),
      payload: Joi.array().items(InventoryPublicModel.JobConfigDTO()),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }

  /** @returns {ResponseEnvelopeObject} */
  static ResponseEnvelopeObject() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: Joi.any(),
      message: Joi.string().allow(""),
      page: InventoryPublicModel.Page(),
      payload: Joi.any(),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }

  /** @returns {ResponseEnvelopeSlingshotConfigurationDetail} */
  static ResponseEnvelopeSlingshotConfigurationDetail() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: InventoryPublicModel.SlingshotConfigurationDetail(),
      message: Joi.string().allow(""),
      page: InventoryPublicModel.Page(),
      payload: InventoryPublicModel.SlingshotConfigurationDetail(),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }

  /** @returns {SlingshotConfigurationDetail} */
  static SlingshotConfigurationDetail() {
    return Joi.object({
      companies: Joi.array().items(InventoryPublicModel.GCompany()),
      integration: InventoryPublicModel.SlingshotIntegration(),
    });
  }

  /** @returns {SlingshotIntegration} */
  static SlingshotIntegration() {
    return Joi.object({
      _id: Joi.string().allow(""),
      description: Joi.string().allow(""),
      meta: Joi.array().items(InventoryPublicModel.Metum()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {StoreData} */
  static StoreData() {
    return Joi.object({
      location_id: Joi.string().allow(""),
    });
  }

  /** @returns {TaskDTO} */
  static TaskDTO() {
    return Joi.object({
      group_list: Joi.array().items(InventoryPublicModel.GenericDTO()),
      type: Joi.number(),
    });
  }
}
module.exports = InventoryPublicModel;
