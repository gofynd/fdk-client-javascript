const Joi = require("joi");

class WebhookModel {
  static Association() {
    return Joi.object({
      application_id: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.number(),
      criteria: Joi.string().allow(""),
      extension_id: Joi.string().allow(""),
    });
  }
  static AssociationDetails() {
    return Joi.object({
      company_id: Joi.number(),
    });
  }
  static AuthMeta() {
    return Joi.object({
      secret: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static CancelResponse() {
    return Joi.object({
      code: Joi.number(),
    });
  }
  static CdnObject() {
    return Joi.object({
      urls: Joi.array().items(WebhookModel.Url()),
    });
  }
  static Error() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }
  static Event() {
    return Joi.object({
      event_category: Joi.string().allow(""),
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }
  static EventConfig() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      description: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      event_category: Joi.string().allow(""),
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      id: Joi.number(),
      version: Joi.string().allow(""),
    });
  }
  static EventConfigResponse() {
    return Joi.object({
      event_configs: Joi.array().items(WebhookModel.EventConfig()),
    });
  }
  static EventCountItem() {
    return Joi.object({
      count: Joi.number(),
      status: Joi.string().allow(""),
    });
  }
  static EventProcessedSuccessResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static EventProcessReportObject() {
    return Joi.object({
      attempt: Joi.number(),
      data: Joi.string().allow(""),
      event_name: Joi.string().allow(""),
      last_attempted_on: Joi.number(),
      name: Joi.string().allow(""),
      response_code: Joi.number(),
      response_message: Joi.string().allow(""),
      response_time: Joi.number(),
      status: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
    });
  }
  static EventProcessReports() {
    return Joi.object({
      page: WebhookModel.Page(),
      rows: Joi.array().items(WebhookModel.EventProcessReportObject()),
    });
  }
  static EventProcessRequest() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      event: Joi.array().items(WebhookModel.Event()),
      search_text: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      subscriber_ids: Joi.array().items(Joi.number()),
    });
  }
  static EventSuccessResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static FailedEventsCountSuccessResponse() {
    return Joi.object({
      items: Joi.array().items(WebhookModel.EventCountItem()),
    });
  }
  static FilterResponseObject() {
    return Joi.object({
      filter_name: Joi.string().allow(""),
      values: Joi.array().items(WebhookModel.FilterValues()),
    });
  }
  static FilterValues() {
    return Joi.object({
      text: Joi.string().allow(""),
      value: Joi.any(),
    });
  }
  static HistoryFilters() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      status: Joi.string().allow(""),
      subscribers: Joi.array().items(Joi.number()),
    });
  }
  static HistoryPayload() {
    return Joi.object({
      page_no: Joi.number(),
      page_size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }
  static HistoryResponse() {
    return Joi.object({
      items: Joi.array().items(WebhookModel.HistoryResponseObject()),
    });
  }
  static HistoryResponseObject() {
    return Joi.object({
      association: WebhookModel.AssociationDetails(),
      created_on: Joi.string().allow(""),
      filename: Joi.string().allow(""),
      filters: WebhookModel.HistoryFilters(),
      id: Joi.number(),
      message: Joi.string().allow(""),
      status: Joi.string().allow(""),
      updated_on: Joi.string().allow(""),
      upload_service_response: WebhookModel.UploadServiceObject(),
    });
  }
  static ManualRetryFailedResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      meta: Joi.any(),
      request_id: Joi.string().allow(""),
      stack_trace: Joi.string().allow(""),
      success: Joi.boolean(),
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
  static PingWebhook() {
    return Joi.object({
      auth_meta: Joi.any(),
      custom_headers: Joi.any(),
      webhook_url: Joi.string().allow(""),
    });
  }
  static PingWebhookResponse() {
    return Joi.object({
      code: Joi.number(),
      message: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }
  static ReportFilterResponse() {
    return Joi.object({
      items: Joi.array().items(WebhookModel.FilterResponseObject()),
    });
  }
  static ReportFiltersPayload() {
    return Joi.object({
      subscriber_ids: Joi.array().items(Joi.number()),
    });
  }
  static RetryStatusResponse() {
    return Joi.object({
      failure_count: Joi.number(),
      status: Joi.string().allow(""),
      success_count: Joi.number(),
      total_event: Joi.number(),
    });
  }
  static SubscriberConfig() {
    return Joi.object({
      association: WebhookModel.Association(),
      auth_meta: WebhookModel.AuthMeta(),
      custom_headers: Joi.any(),
      email_id: Joi.string().allow(""),
      event_id: Joi.array().items(Joi.number()),
      id: Joi.number(),
      name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
    });
  }
  static SubscriberConfigList() {
    return Joi.object({
      items: Joi.array().items(WebhookModel.SubscriberResponse()),
      page: WebhookModel.Page(),
    });
  }
  static SubscriberResponse() {
    return Joi.object({
      association: WebhookModel.Association(),
      auth_meta: WebhookModel.AuthMeta(),
      created_on: Joi.string().allow(""),
      custom_headers: Joi.any(),
      email_id: Joi.string().allow(""),
      event_configs: Joi.array().items(WebhookModel.EventConfig()),
      id: Joi.number(),
      name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      updated_on: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
    });
  }
  static UploadServiceObject() {
    return Joi.object({
      cdn: WebhookModel.CdnObject(),
    });
  }
  static Url() {
    return Joi.object({
      name: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
}
module.exports = WebhookModel;
