const Joi = require("joi");

class InventoryModel {
  static ApikeyModel() {
    return Joi.object({
      error_message: Joi.string().allow(""),
      session_id: Joi.string().allow(""),
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
  static EmailJobMetrics() {
    return Joi.object({
      daily_job: Joi.boolean(),
      executed: Joi.boolean(),
      id: Joi.string().allow(""),
      job_code: Joi.string().allow(""),
      last_executed_on: Joi.string().allow(""),
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
  static Metum() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
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
  static ResponseEnvelopeApikeyModel() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: InventoryModel.ApikeyModel(),
      message: Joi.string().allow(""),
      page: InventoryModel.Page(),
      payload: InventoryModel.ApikeyModel(),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }
  static ResponseEnvelopeEmailJobMetrics() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: InventoryModel.EmailJobMetrics(),
      message: Joi.string().allow(""),
      page: InventoryModel.Page(),
      payload: InventoryModel.EmailJobMetrics(),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
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
  static ResponseEnvelopeObject() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: Joi.any(),
      message: Joi.string().allow(""),
      page: InventoryModel.Page(),
      payload: Joi.any(),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }
  static ResponseEnvelopeSlingshotConfigurationDetail() {
    return Joi.object({
      error: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      http_status: Joi.string().allow(""),
      items: InventoryModel.SlingshotConfigurationDetail(),
      message: Joi.string().allow(""),
      page: InventoryModel.Page(),
      payload: InventoryModel.SlingshotConfigurationDetail(),
      status: Joi.number(),
      timestamp: Joi.string().allow(""),
      total_time_taken_in_millis: Joi.number(),
      trace_id: Joi.string().allow(""),
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
  static StoreData() {
    return Joi.object({
      location_id: Joi.string().allow(""),
    });
  }
  static TaskDTO() {
    return Joi.object({
      group_list: Joi.array().items(InventoryModel.GenericDTO()),
      type: Joi.number(),
    });
  }
}
module.exports = InventoryModel;
