const Joi = require("joi");

class AnalyticsModel {
  static AbandonCartDetail() {
    return Joi.object({
      _id: Joi.string().allow(""),
      address: Joi.any(),
      articles: Joi.array().items(Joi.any()),
      breakup: Joi.any(),
      cart_value: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }
  static AbandonCartsDetail() {
    return Joi.object({
      context_app_application_id: Joi.string().allow(""),
      context_traits_email: Joi.string().allow(""),
      context_traits_first_name: Joi.string().allow(""),
      context_traits_last_name: Joi.string().allow(""),
      context_traits_phone_number: Joi.string().allow(""),
      properties_breakup_values_raw_total: Joi.string().allow(""),
      properties_cart_id: Joi.string().allow(""),
      received_at: AnalyticsModel.ReceivedAt(),
    });
  }
  static AbandonCartsList() {
    return Joi.object({
      cart_total: Joi.string().allow(""),
      items: Joi.array().items(AnalyticsModel.AbandonCartsDetail()),
      page: AnalyticsModel.Page(),
    });
  }
  static ErrorRes() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static ExportJobReq() {
    return Joi.object({
      end_time: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      marketplace_name: Joi.string().allow(""),
      start_time: Joi.string().allow(""),
      trace_id: Joi.string().allow(""),
    });
  }
  static ExportJobRes() {
    return Joi.object({
      job_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }
  static ExportJobStatusRes() {
    return Joi.object({
      download_url: Joi.string().allow(""),
      job_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }
  static GetLogsListReq() {
    return Joi.object({
      company_id: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      marketplace_name: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
    });
  }
  static GetLogsListRes() {
    return Joi.object({
      items: Joi.array().items(AnalyticsModel.MkpLogsResp()),
      page: AnalyticsModel.Page(),
    });
  }
  static LogInfo() {
    return Joi.object({
      _id: Joi.string().allow(""),
      article_id: Joi.string().allow(""),
      brand_id: Joi.number(),
      company_id: Joi.number(),
      event: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      item_id: Joi.number(),
      marketplace_name: Joi.string().allow(""),
      seller_identifier: Joi.string().allow(""),
      status: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      store_id: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }
  static MkpLogsResp() {
    return Joi.object({
      count: Joi.string().allow(""),
      end_time_iso: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      start_time_iso: Joi.string().allow(""),
      status: Joi.string().allow(""),
      trace_id: Joi.string().allow(""),
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
  static ReceivedAt() {
    return Joi.object({
      value: Joi.string().allow(""),
    });
  }
  static SearchLogReq() {
    return Joi.object({
      company_id: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      identifier: Joi.string().allow(""),
      identifier_value: Joi.string().allow(""),
      marketplace_name: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
    });
  }
  static SearchLogRes() {
    return Joi.object({
      items: Joi.array().items(AnalyticsModel.LogInfo()),
      page: AnalyticsModel.Page(),
    });
  }
  static StatGroup() {
    return Joi.object({
      key: Joi.string().allow(""),
      title: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static StatsGroupComponent() {
    return Joi.object({
      filters: Joi.any(),
      key: Joi.string().allow(""),
      title: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static StatsGroupComponents() {
    return Joi.object({
      components: Joi.array().items(AnalyticsModel.StatsGroupComponent()),
      title: Joi.string().allow(""),
    });
  }
  static StatsGroups() {
    return Joi.object({
      groups: Joi.array().items(AnalyticsModel.StatGroup()),
    });
  }
  static StatsRes() {
    return Joi.object({
      data: Joi.any(),
      key: Joi.string().allow(""),
      title: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
}
module.exports = AnalyticsModel;
