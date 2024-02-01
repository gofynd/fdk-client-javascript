const Joi = require("joi");

/**
 * @typedef Error
 * @property {string} [error] - Error message describing the reason for the failure.
 */

/**
 * @typedef Event
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 */

/**
 * @typedef RetryEventRequest
 * @property {string} [search_text]
 * @property {string} [end_date]
 * @property {string} [start_date]
 * @property {number[]} [subscriber_ids]
 * @property {Event[]} [event]
 * @property {string} [status]
 */

/**
 * @typedef Item
 * @property {string} [status]
 * @property {number} [count]
 */

/**
 * @typedef RetryCountResponse
 * @property {Item[]} [items]
 */

/**
 * @typedef RetrySuccessResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef Err
 * @property {string} [msg]
 * @property {string} [param]
 * @property {string} [location]
 */

/**
 * @typedef RetryFailureResponse
 * @property {Err[]} [err]
 */

/**
 * @typedef RetryStatusResponse
 * @property {number} [total_event] - The total number of events that require retry.
 * @property {number} [success_count] - The count of successfully retried events.
 * @property {number} [failure_count] - The count of failed retry attempts.
 * @property {string} [status] - The overall status of the retry process (e.g.,
 *   "completed").
 */

/**
 * @typedef EventProcessRequest
 * @property {string} [search_text]
 * @property {string} [end_date]
 * @property {string} [start_date]
 * @property {number[]} [subscriber_ids]
 * @property {string} [status]
 * @property {Event[]} [event]
 */

/**
 * @typedef DownloadReportResponse
 * @property {string} [file_name]
 */

/**
 * @typedef EventProcessReports
 * @property {EventProcessReportObject[]} [rows]
 * @property {Page} [page]
 */

/**
 * @typedef EventProcessReportObject
 * @property {string} [event_name] - The name of the processed event.
 * @property {number} [response_code] - The response code of the event.
 * @property {string} [response_message] - The response message of the event.
 * @property {Object} [data] - The data associated with the event.
 * @property {number} [attempt] - The attempt number of the event.
 * @property {number} [last_attempted_on] - The timestamp of the last attempted event.
 * @property {string} [status] - The status of the event (e.g., "FAILED").
 * @property {string} [name] - The name of the event.
 * @property {string} [webhook_url] - The webhook URL associated with the event.
 * @property {number} [response_time] - The response time of the event.
 * @property {string} [message_id]
 * @property {string} [event_trace_id]
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
 * @typedef PingWebhook
 * @property {string} [webhook_url] - The URL of the subscriber's webhook to ping.
 * @property {Object} [auth_meta] - Authentication metadata (if required by the
 *   subscriber).
 * @property {Object} [custom_headers] - Custom headers to include in the ping request.
 */

/**
 * @typedef PingWebhookResponse
 * @property {string} [status] - The status of the ping (e.g., "SUCCESS").
 * @property {string} [message] - An optional message related to the ping.
 * @property {number} [code] - The HTTP status code of the ping response (e.g., 200).
 */

/**
 * @typedef EventConfig
 * @property {number} [id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {Object} [event_schema]
 * @property {string} [version]
 * @property {string} [display_name]
 * @property {string} [description]
 * @property {string} [created_on]
 * @property {string} [updated_on]
 */

/**
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */

/**
 * @typedef ReportFiltersPayload
 * @property {number[]} [subscriber_ids] - An array of subscriber IDs for
 *   filtering filters (optional).
 */

/**
 * @typedef ReportFilterResponse
 * @property {string} [filter_name] - The name of the filter.
 * @property {Object[]} [values]
 */

/**
 * @typedef HistoryPayload
 * @property {string} [type] - The type of history report (e.g., "platform").
 * @property {number} [page_no] - The page number of the history report.
 * @property {number} [page_size] - The number of records per page.
 */

/**
 * @typedef HistoryFilters
 * @property {string[]} [events]
 * @property {string} [search_text]
 * @property {string} [status] - The status of the history report (e.g., "FAILED").
 * @property {string} [end_date] - The end date and time of the history report.
 * @property {string} [start_date] - The start date and time of the history report.
 * @property {number[]} [subscribers] - An array of subscriber IDs associated
 *   with the history report.
 */

/**
 * @typedef Url
 * @property {string} [url] - The URL of the uploaded report file.
 * @property {string} [name] - The name of the uploaded report file.
 */

/**
 * @typedef CdnObject
 * @property {Url[]} [urls]
 */

/**
 * @typedef UploadServiceObject
 * @property {CdnObject} [cdn]
 */

/**
 * @typedef HistoryAssociation
 * @property {number} [company_id]
 * @property {number[]} [subscriber_ids]
 */

/**
 * @typedef HistoryItems
 * @property {number} [id] - The ID of the history report.
 * @property {HistoryAssociation} [association]
 * @property {HistoryFilters} [filters]
 * @property {string} [filename] - The filename of the history report.
 * @property {string} [status] - The status of the history report (e.g., "COMPLETED").
 * @property {UploadServiceObject} [upload_service_response]
 * @property {string} [created_on] - The date and time when the history report
 *   was created.
 * @property {string} [updated_on] - The date and time when the history report
 *   was last updated.
 * @property {string} [message] - A message related to the history report.
 */

/**
 * @typedef HistoryResponse
 * @property {HistoryItems[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CancelResponse
 * @property {string} [message] - The HTTP status code of the response (e.g., 200).
 */

/**
 * @typedef Association
 * @property {number} [company_id]
 * @property {string[]} [application_id]
 * @property {string} [extension_id]
 * @property {string} [criteria]
 */

/**
 * @typedef AuthMeta
 * @property {string} [type]
 * @property {string} [secret]
 */

/**
 * @typedef SubscriberResponse
 * @property {number} [id]
 * @property {string} [modified_by]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id]
 * @property {string} [updated_on]
 * @property {string} [created_on]
 * @property {string} [type]
 * @property {AuthMeta} [auth_meta]
 * @property {EventConfig[]} [event_configs]
 */

/**
 * @typedef SubscriberConfig
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id]
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} [event_id]
 */

/**
 * @typedef SubscriberConfigResponse
 * @property {number} [id]
 * @property {string} [modified_by]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id]
 * @property {string} [updated_on]
 * @property {string} [created_on]
 * @property {string} [type]
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} [event_id]
 */

/**
 * @typedef SubscriberConfigList
 * @property {SubscriberResponse[]} [items]
 * @property {Page} [page]
 */

/** @typedef {"active" | "inactive" | "blocked"} SubscriberStatus */

class WebhookPlatformModel {
  /** @returns {Error} */
  static Error() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  /** @returns {Event} */
  static Event() {
    return Joi.object({
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      event_category: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {RetryEventRequest} */
  static RetryEventRequest() {
    return Joi.object({
      search_text: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      subscriber_ids: Joi.array().items(Joi.number()),
      event: Joi.array().items(WebhookPlatformModel.Event()),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {Item} */
  static Item() {
    return Joi.object({
      status: Joi.string().allow(""),
      count: Joi.number(),
    });
  }

  /** @returns {RetryCountResponse} */
  static RetryCountResponse() {
    return Joi.object({
      items: Joi.array().items(WebhookPlatformModel.Item()),
    });
  }

  /** @returns {RetrySuccessResponse} */
  static RetrySuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {Err} */
  static Err() {
    return Joi.object({
      msg: Joi.string().allow(""),
      param: Joi.string().allow(""),
      location: Joi.string().allow(""),
    });
  }

  /** @returns {RetryFailureResponse} */
  static RetryFailureResponse() {
    return Joi.object({
      err: Joi.array().items(WebhookPlatformModel.Err()),
    });
  }

  /** @returns {RetryStatusResponse} */
  static RetryStatusResponse() {
    return Joi.object({
      total_event: Joi.number(),
      success_count: Joi.number(),
      failure_count: Joi.number(),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {EventProcessRequest} */
  static EventProcessRequest() {
    return Joi.object({
      search_text: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      subscriber_ids: Joi.array().items(Joi.number()),
      status: Joi.string().allow(""),
      event: Joi.array().items(WebhookPlatformModel.Event()),
    });
  }

  /** @returns {DownloadReportResponse} */
  static DownloadReportResponse() {
    return Joi.object({
      file_name: Joi.string().allow(""),
    });
  }

  /** @returns {EventProcessReports} */
  static EventProcessReports() {
    return Joi.object({
      rows: Joi.array().items(WebhookPlatformModel.EventProcessReportObject()),
      page: WebhookPlatformModel.Page(),
    });
  }

  /** @returns {EventProcessReportObject} */
  static EventProcessReportObject() {
    return Joi.object({
      event_name: Joi.string().allow(""),
      response_code: Joi.number(),
      response_message: Joi.string().allow(""),
      data: Joi.object().pattern(/\S/, Joi.any()),
      attempt: Joi.number(),
      last_attempted_on: Joi.number(),
      status: Joi.string().allow(""),
      name: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
      response_time: Joi.number(),
      message_id: Joi.string().allow(""),
      event_trace_id: Joi.string().allow(""),
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

  /** @returns {PingWebhook} */
  static PingWebhook() {
    return Joi.object({
      webhook_url: Joi.string().allow(""),
      auth_meta: Joi.any(),
      custom_headers: Joi.any(),
    });
  }

  /** @returns {PingWebhookResponse} */
  static PingWebhookResponse() {
    return Joi.object({
      status: Joi.string().allow(""),
      message: Joi.string().allow(""),
      code: Joi.number(),
    });
  }

  /** @returns {EventConfig} */
  static EventConfig() {
    return Joi.object({
      id: Joi.number(),
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      event_category: Joi.string().allow(""),
      event_schema: Joi.object().pattern(/\S/, Joi.any()),
      version: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      description: Joi.string().allow("").allow(null),
      created_on: Joi.string().allow(""),
      updated_on: Joi.string().allow(""),
    });
  }

  /** @returns {EventConfigResponse} */
  static EventConfigResponse() {
    return Joi.object({
      event_configs: Joi.array().items(WebhookPlatformModel.EventConfig()),
    });
  }

  /** @returns {ReportFiltersPayload} */
  static ReportFiltersPayload() {
    return Joi.object({
      subscriber_ids: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {ReportFilterResponse} */
  static ReportFilterResponse() {
    return Joi.object({
      filter_name: Joi.string().allow(""),
      values: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
    });
  }

  /** @returns {HistoryPayload} */
  static HistoryPayload() {
    return Joi.object({
      type: Joi.string().allow(""),
      page_no: Joi.number(),
      page_size: Joi.number(),
    });
  }

  /** @returns {HistoryFilters} */
  static HistoryFilters() {
    return Joi.object({
      events: Joi.array().items(Joi.string().allow("")),
      search_text: Joi.string().allow(""),
      status: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      subscribers: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {Url} */
  static Url() {
    return Joi.object({
      url: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {CdnObject} */
  static CdnObject() {
    return Joi.object({
      urls: Joi.array().items(WebhookPlatformModel.Url()),
    });
  }

  /** @returns {UploadServiceObject} */
  static UploadServiceObject() {
    return Joi.object({
      cdn: WebhookPlatformModel.CdnObject(),
    });
  }

  /** @returns {HistoryAssociation} */
  static HistoryAssociation() {
    return Joi.object({
      company_id: Joi.number(),
      subscriber_ids: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {HistoryItems} */
  static HistoryItems() {
    return Joi.object({
      id: Joi.number(),
      association: WebhookPlatformModel.HistoryAssociation(),
      filters: WebhookPlatformModel.HistoryFilters(),
      filename: Joi.string().allow(""),
      status: Joi.string().allow(""),
      upload_service_response: WebhookPlatformModel.UploadServiceObject(),
      created_on: Joi.string().allow(""),
      updated_on: Joi.string().allow("").allow(null),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {HistoryResponse} */
  static HistoryResponse() {
    return Joi.object({
      items: Joi.array().items(WebhookPlatformModel.HistoryItems()),
      page: WebhookPlatformModel.Page(),
    });
  }

  /** @returns {CancelResponse} */
  static CancelResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {Association} */
  static Association() {
    return Joi.object({
      company_id: Joi.number(),
      application_id: Joi.array().items(Joi.string().allow("")),
      extension_id: Joi.string().allow(""),
      criteria: Joi.string().allow(""),
    });
  }

  /** @returns {AuthMeta} */
  static AuthMeta() {
    return Joi.object({
      type: Joi.string().allow(""),
      secret: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriberResponse} */
  static SubscriberResponse() {
    return Joi.object({
      id: Joi.number(),
      modified_by: Joi.string().allow(""),
      name: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
      association: WebhookPlatformModel.Association(),
      custom_headers: Joi.any(),
      status: WebhookPlatformModel.SubscriberStatus(),
      email_id: Joi.string().allow(""),
      updated_on: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      type: Joi.string().allow("").allow(null),
      auth_meta: WebhookPlatformModel.AuthMeta(),
      event_configs: Joi.array().items(WebhookPlatformModel.EventConfig()),
    });
  }

  /** @returns {SubscriberConfig} */
  static SubscriberConfig() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
      association: WebhookPlatformModel.Association(),
      custom_headers: Joi.any(),
      status: WebhookPlatformModel.SubscriberStatus(),
      email_id: Joi.string().allow(""),
      auth_meta: WebhookPlatformModel.AuthMeta(),
      event_id: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {SubscriberConfigResponse} */
  static SubscriberConfigResponse() {
    return Joi.object({
      id: Joi.number(),
      modified_by: Joi.string().allow(""),
      name: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
      association: WebhookPlatformModel.Association(),
      custom_headers: Joi.any(),
      status: WebhookPlatformModel.SubscriberStatus(),
      email_id: Joi.string().allow(""),
      updated_on: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      type: Joi.string().allow("").allow(null),
      auth_meta: WebhookPlatformModel.AuthMeta(),
      event_id: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {SubscriberConfigList} */
  static SubscriberConfigList() {
    return Joi.object({
      items: Joi.array().items(WebhookPlatformModel.SubscriberResponse()),
      page: WebhookPlatformModel.Page(),
    });
  }

  /**
   * Enum: SubscriberStatus Used By: Webhook
   *
   * @returns {SubscriberStatus}
   */
  static SubscriberStatus() {
    return Joi.string().valid(
      "active",

      "inactive",

      "blocked"
    );
  }
}
module.exports = WebhookPlatformModel;
