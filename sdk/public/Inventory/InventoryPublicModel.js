const Joi = require("joi");

class InventoryModel {
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

      stores: Joi.array().items(InventoryModel.GStore()),

      gstores: Joi.array().items(InventoryModel.GStore()),
    });
  }

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

      data: InventoryModel.StoreData(),
    });
  }

  static Metum() {
    return Joi.object({
      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ResponseEnvelopeSlingshotConfigurationDetail() {
    return Joi.object({
      timestamp: Joi.string().allow(""),

      status: Joi.number(),

      error: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      total_time_taken_in_millis: Joi.number(),

      http_status: Joi.string().allow(""),

      items: InventoryModel.SlingshotConfigurationDetail(),

      payload: InventoryModel.SlingshotConfigurationDetail(),

      trace_id: Joi.string().allow(""),

      page: InventoryModel.Page(),
    });
  }

  static SlingshotConfigurationDetail() {
    return Joi.object({
      integration: InventoryModel.SlingshotIntegration(),

      companies: Joi.array().items(InventoryModel.GCompany()),
    });
  }

  static SlingshotIntegration() {
    return Joi.object({
      _id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      meta: Joi.array().items(InventoryModel.Metum()),
    });
  }

  static StoreData() {
    return Joi.object({
      location_id: Joi.string().allow(""),
    });
  }

  static ApikeyModel() {
    return Joi.object({
      session_id: Joi.string().allow(""),

      error_message: Joi.string().allow(""),
    });
  }

  static ResponseEnvelopeApikeyModel() {
    return Joi.object({
      timestamp: Joi.string().allow(""),

      status: Joi.number(),

      error: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      total_time_taken_in_millis: Joi.number(),

      http_status: Joi.string().allow(""),

      items: InventoryModel.ApikeyModel(),

      payload: InventoryModel.ApikeyModel(),

      trace_id: Joi.string().allow(""),

      page: InventoryModel.Page(),
    });
  }

  static DataTresholdDTO() {
    return Joi.object({
      min_price: Joi.number(),

      safe_stock: Joi.number(),

      period_threshold: Joi.number(),

      period_threshold_type: Joi.string().allow(""),

      period_type_list: Joi.array().items(InventoryModel.GenericDTO()),
    });
  }

  static GenericDTO() {
    return Joi.object({
      text: Joi.string().allow(""),

      value: Joi.any(),
    });
  }

  static JobConfigDTO() {
    return Joi.object({
      integration: Joi.string().allow("").required(),

      integration_data: Joi.object().pattern(/\S/, Joi.any()),

      company_name: Joi.string().allow(""),

      company_id: Joi.number().required(),

      task_details: InventoryModel.TaskDTO(),

      threshold_details: InventoryModel.DataTresholdDTO(),

      job_code: Joi.string().allow(""),

      alias: Joi.string().allow(""),
    });
  }

  static ResponseEnvelopeJobConfigDTO() {
    return Joi.object({
      timestamp: Joi.string().allow(""),

      status: Joi.number(),

      error: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      total_time_taken_in_millis: Joi.number(),

      http_status: Joi.string().allow(""),

      items: InventoryModel.JobConfigDTO(),

      payload: InventoryModel.JobConfigDTO(),

      trace_id: Joi.string().allow(""),

      page: InventoryModel.Page(),
    });
  }

  static TaskDTO() {
    return Joi.object({
      type: Joi.number(),

      group_list: Joi.array().items(InventoryModel.GenericDTO()),
    });
  }

  static ResponseEnvelopeListJobConfigDTO() {
    return Joi.object({
      timestamp: Joi.string().allow(""),

      status: Joi.number(),

      error: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      total_time_taken_in_millis: Joi.number(),

      http_status: Joi.string().allow(""),

      items: Joi.array().items(InventoryModel.JobConfigDTO()),

      payload: Joi.array().items(InventoryModel.JobConfigDTO()),

      trace_id: Joi.string().allow(""),

      page: InventoryModel.Page(),
    });
  }

  static EmailJobMetrics() {
    return Joi.object({
      executed: Joi.boolean(),

      id: Joi.string().allow(""),

      job_code: Joi.string().allow(""),

      daily_job: Joi.boolean(),

      last_executed_on: Joi.string().allow(""),
    });
  }

  static ResponseEnvelopeEmailJobMetrics() {
    return Joi.object({
      timestamp: Joi.string().allow(""),

      status: Joi.number(),

      error: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      total_time_taken_in_millis: Joi.number(),

      http_status: Joi.string().allow(""),

      items: InventoryModel.EmailJobMetrics(),

      payload: InventoryModel.EmailJobMetrics(),

      trace_id: Joi.string().allow(""),

      page: InventoryModel.Page(),
    });
  }

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

      page: InventoryModel.Page(),
    });
  }
}
module.exports = InventoryModel;
