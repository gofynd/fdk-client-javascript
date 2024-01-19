const Joi = require("joi");

/**
 * @typedef Association
 * @property {string[]} [application_id]
 * @property {number} [company_id]
 * @property {string} [criteria]
 * @property {string} [extension_id]
 */

/**
 * @typedef AuthMeta
 * @property {string} [secret]
 * @property {string} [type]
 */

/**
 * @typedef CancelResponse
 * @property {string} [message] - The HTTP status code of the response (e.g., 200).
 */

/**
 * @typedef CdnObject
 * @property {Url[]} [urls]
 */

/**
 * @typedef DownloadReportResponse
 * @property {string} [file_name]
 */

/**
 * @typedef Err
 * @property {string} [location]
 * @property {string} [msg]
 * @property {string} [param]
 */

/**
 * @typedef Error
 * @property {string} [error] - Error message describing the reason for the failure.
 */

/**
 * @typedef Event
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
 */

/**
 * @typedef EventConfig
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {string} [display_name]
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {Object} [event_schema]
 * @property {string} [event_type]
 * @property {number} [id]
 * @property {string} [updated_on]
 * @property {string} [version]
 */

/**
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */

/**
 * @typedef EventProcessReportObject
 * @property {number} [attempt] - The attempt number of the event.
 * @property {Object} [data] - The data associated with the event.
 * @property {string} [event_name] - The name of the processed event.
 * @property {string} [event_trace_id]
 * @property {number} [last_attempted_on] - The timestamp of the last attempted event.
 * @property {string} [message_id]
 * @property {string} [name] - The name of the event.
 * @property {number} [response_code] - The response code of the event.
 * @property {string} [response_message] - The response message of the event.
 * @property {number} [response_time] - The response time of the event.
 * @property {string} [status] - The status of the event (e.g., "FAILED").
 * @property {string} [webhook_url] - The webhook URL associated with the event.
 */

/**
 * @typedef EventProcessReports
 * @property {Page} [page]
 * @property {EventProcessReportObject[]} [rows]
 */

/**
 * @typedef EventProcessRequest
 * @property {string} [end_date]
 * @property {Event[]} [event]
 * @property {string} [search_text]
 * @property {string} [start_date]
 * @property {string} [status]
 * @property {number[]} [subscriber_ids]
 */

/**
 * @typedef HistoryAssociation
 * @property {number} [company_id]
 * @property {number[]} [subscriber_ids]
 */

/**
 * @typedef HistoryFilters
 * @property {string} [end_date] - The end date and time of the history report.
 * @property {string[]} [events]
 * @property {string} [search_text]
 * @property {string} [start_date] - The start date and time of the history report.
 * @property {string} [status] - The status of the history report (e.g., "FAILED").
 * @property {number[]} [subscribers] - An array of subscriber IDs associated
 *   with the history report.
 */

/**
 * @typedef HistoryItems
 * @property {HistoryAssociation} [association]
 * @property {string} [created_on] - The date and time when the history report
 *   was created.
 * @property {string} [filename] - The filename of the history report.
 * @property {HistoryFilters} [filters]
 * @property {number} [id] - The ID of the history report.
 * @property {string} [message] - A message related to the history report.
 * @property {string} [status] - The status of the history report (e.g., "COMPLETED").
 * @property {string} [updated_on] - The date and time when the history report
 *   was last updated.
 * @property {UploadServiceObject} [upload_service_response]
 */

/**
 * @typedef HistoryPayload
 * @property {number} [page_no] - The page number of the history report.
 * @property {number} [page_size] - The number of records per page.
 * @property {string} [type] - The type of history report (e.g., "platform").
 */

/**
 * @typedef HistoryResponse
 * @property {HistoryItems[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Item
 * @property {number} [count]
 * @property {string} [status]
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
 * @typedef PingWebhook
 * @property {Object} [auth_meta] - Authentication metadata (if required by the
 *   subscriber).
 * @property {Object} [custom_headers] - Custom headers to include in the ping request.
 * @property {string} [webhook_url] - The URL of the subscriber's webhook to ping.
 */

/**
 * @typedef PingWebhookResponse
 * @property {number} [code] - The HTTP status code of the ping response (e.g., 200).
 * @property {string} [message] - An optional message related to the ping.
 * @property {string} [status] - The status of the ping (e.g., "SUCCESS").
 */

/**
 * @typedef ReportFilterResponse
 * @property {string} [filter_name] - The name of the filter.
 * @property {Object[]} [values]
 */

/**
 * @typedef ReportFiltersPayload
 * @property {number[]} [subscriber_ids] - An array of subscriber IDs for
 *   filtering filters (optional).
 */

/**
 * @typedef RetryCountResponse
 * @property {Item[]} [items]
 */

/**
 * @typedef RetryEventRequest
 * @property {string} [end_date]
 * @property {Event[]} [event]
 * @property {string} [search_text]
 * @property {string} [start_date]
 * @property {string} [status]
 * @property {number[]} [subscriber_ids]
 */

/**
 * @typedef RetryFailureResponse
 * @property {Err[]} [err]
 */

/**
 * @typedef RetryStatusResponse
 * @property {number} [failure_count] - The count of failed retry attempts.
 * @property {string} [status] - The overall status of the retry process (e.g.,
 *   "completed").
 * @property {number} [success_count] - The count of successfully retried events.
 * @property {number} [total_event] - The total number of events that require retry.
 */

/**
 * @typedef RetrySuccessResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef SubscriberConfig
 * @property {Association} [association]
 * @property {AuthMeta} [auth_meta]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {number[]} [event_id]
 * @property {number} [id]
 * @property {string} [name]
 * @property {SubscriberStatus} [status]
 * @property {string} [webhook_url]
 */

/**
 * @typedef SubscriberConfigList
 * @property {SubscriberResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SubscriberConfigResponse
 * @property {Association} [association]
 * @property {AuthMeta} [auth_meta]
 * @property {string} [created_on]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {number[]} [event_id]
 * @property {number} [id]
 * @property {string} [modified_by]
 * @property {string} [name]
 * @property {SubscriberStatus} [status]
 * @property {string} [type]
 * @property {string} [updated_on]
 * @property {string} [webhook_url]
 */

/**
 * @typedef SubscriberResponse
 * @property {Association} [association]
 * @property {AuthMeta} [auth_meta]
 * @property {string} [created_on]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {EventConfig[]} [event_configs]
 * @property {number} [id]
 * @property {string} [modified_by]
 * @property {string} [name]
 * @property {SubscriberStatus} [status]
 * @property {string} [type]
 * @property {string} [updated_on]
 * @property {string} [webhook_url]
 */

/**
 * @typedef UploadServiceObject
 * @property {CdnObject} [cdn]
 */

/**
 * @typedef Url
 * @property {string} [name] - The name of the uploaded report file.
 * @property {string} [url] - The URL of the uploaded report file.
 */

/** @typedef {"active" | "inactive" | "blocked"} SubscriberStatus */

class WebhookPlatformModel {
  /** @returns {Association} */
  static Association() {
    return Joi.object({
      application_id: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.number(),
      criteria: Joi.string().allow(""),
      extension_id: Joi.string().allow(""),
    });
  }

  /** @returns {AuthMeta} */
  static AuthMeta() {
    return Joi.object({
      secret: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {CancelResponse} */
  static CancelResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CdnObject} */
  static CdnObject() {
    return Joi.object({
      urls: Joi.array().items(WebhookPlatformModel.Url()),
    });
  }

  /** @returns {DownloadReportResponse} */
  static DownloadReportResponse() {
    return Joi.object({
      file_name: Joi.string().allow(""),
    });
  }

  /** @returns {Err} */
  static Err() {
    return Joi.object({
      location: Joi.string().allow(""),
      msg: Joi.string().allow(""),
      param: Joi.string().allow(""),
    });
  }

  /** @returns {Error} */
  static Error() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  /** @returns {Event} */
  static Event() {
    return Joi.object({
      event_category: Joi.string().allow(""),
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {EventConfig} */
  static EventConfig() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      description: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow(""),
      event_category: Joi.string().allow(""),
      event_name: Joi.string().allow(""),
      event_schema: Joi.object().pattern(/\S/, Joi.any()),
      event_type: Joi.string().allow(""),
      id: Joi.number(),
      updated_on: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {EventConfigResponse} */
  static EventConfigResponse() {
    return Joi.object({
      event_configs: Joi.array().items(WebhookPlatformModel.EventConfig()),
    });
  }

  /** @returns {EventProcessReportObject} */
  static EventProcessReportObject() {
    return Joi.object({
      attempt: Joi.number(),
      data: Joi.object().pattern(/\S/, Joi.any()),
      event_name: Joi.string().allow(""),
      event_trace_id: Joi.string().allow(""),
      last_attempted_on: Joi.number(),
      message_id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      response_code: Joi.number(),
      response_message: Joi.string().allow(""),
      response_time: Joi.number(),
      status: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
    });
  }

  /** @returns {EventProcessReports} */
  static EventProcessReports() {
    return Joi.object({
      page: WebhookPlatformModel.Page(),
      rows: Joi.array().items(WebhookPlatformModel.EventProcessReportObject()),
    });
  }

  /** @returns {EventProcessRequest} */
  static EventProcessRequest() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      event: Joi.array().items(WebhookPlatformModel.Event()),
      search_text: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      status: Joi.string().allow(""),
      subscriber_ids: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {HistoryAssociation} */
  static HistoryAssociation() {
    return Joi.object({
      company_id: Joi.number(),
      subscriber_ids: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {HistoryFilters} */
  static HistoryFilters() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      events: Joi.array().items(Joi.string().allow("")),
      search_text: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      status: Joi.string().allow(""),
      subscribers: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {HistoryItems} */
  static HistoryItems() {
    return Joi.object({
      association: WebhookPlatformModel.HistoryAssociation(),
      created_on: Joi.string().allow(""),
      filename: Joi.string().allow(""),
      filters: WebhookPlatformModel.HistoryFilters(),
      id: Joi.number(),
      message: Joi.string().allow(""),
      status: Joi.string().allow(""),
      updated_on: Joi.string().allow("").allow(null),
      upload_service_response: WebhookPlatformModel.UploadServiceObject(),
    });
  }

  /** @returns {HistoryPayload} */
  static HistoryPayload() {
    return Joi.object({
      page_no: Joi.number(),
      page_size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {HistoryResponse} */
  static HistoryResponse() {
    return Joi.object({
      items: Joi.array().items(WebhookPlatformModel.HistoryItems()),
      page: WebhookPlatformModel.Page(),
    });
  }

  /** @returns {Item} */
  static Item() {
    return Joi.object({
      count: Joi.number(),
      status: Joi.string().allow(""),
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

  /** @returns {PingWebhook} */
  static PingWebhook() {
    return Joi.object({
      auth_meta: Joi.any(),
      custom_headers: Joi.any(),
      webhook_url: Joi.string().allow(""),
    });
  }

  /** @returns {PingWebhookResponse} */
  static PingWebhookResponse() {
    return Joi.object({
      code: Joi.number(),
      message: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {ReportFilterResponse} */
  static ReportFilterResponse() {
    return Joi.object({
      filter_name: Joi.string().allow(""),
      values: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
    });
  }

  /** @returns {ReportFiltersPayload} */
  static ReportFiltersPayload() {
    return Joi.object({
      subscriber_ids: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {RetryCountResponse} */
  static RetryCountResponse() {
    return Joi.object({
      items: Joi.array().items(WebhookPlatformModel.Item()),
    });
  }

  /** @returns {RetryEventRequest} */
  static RetryEventRequest() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      event: Joi.array().items(WebhookPlatformModel.Event()),
      search_text: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      status: Joi.string().allow(""),
      subscriber_ids: Joi.array().items(Joi.number()),
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
      failure_count: Joi.number(),
      status: Joi.string().allow(""),
      success_count: Joi.number(),
      total_event: Joi.number(),
    });
  }

  /** @returns {RetrySuccessResponse} */
  static RetrySuccessResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {SubscriberConfig} */
  static SubscriberConfig() {
    return Joi.object({
      association: WebhookPlatformModel.Association(),
      auth_meta: WebhookPlatformModel.AuthMeta(),
      custom_headers: Joi.any(),
      email_id: Joi.string().allow(""),
      event_id: Joi.array().items(Joi.number()),
      id: Joi.number(),
      name: Joi.string().allow(""),
      status: WebhookPlatformModel.SubscriberStatus(),
      webhook_url: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriberConfigList} */
  static SubscriberConfigList() {
    return Joi.object({
      items: Joi.array().items(WebhookPlatformModel.SubscriberResponse()),
      page: WebhookPlatformModel.Page(),
    });
  }

  /** @returns {SubscriberConfigResponse} */
  static SubscriberConfigResponse() {
    return Joi.object({
      association: WebhookPlatformModel.Association(),
      auth_meta: WebhookPlatformModel.AuthMeta(),
      created_on: Joi.string().allow(""),
      custom_headers: Joi.any(),
      email_id: Joi.string().allow(""),
      event_id: Joi.array().items(Joi.number()),
      id: Joi.number(),
      modified_by: Joi.string().allow(""),
      name: Joi.string().allow(""),
      status: WebhookPlatformModel.SubscriberStatus(),
      type: Joi.string().allow("").allow(null),
      updated_on: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriberResponse} */
  static SubscriberResponse() {
    return Joi.object({
      association: WebhookPlatformModel.Association(),
      auth_meta: WebhookPlatformModel.AuthMeta(),
      created_on: Joi.string().allow(""),
      custom_headers: Joi.any(),
      email_id: Joi.string().allow(""),
      event_configs: Joi.array().items(WebhookPlatformModel.EventConfig()),
      id: Joi.number(),
      modified_by: Joi.string().allow(""),
      name: Joi.string().allow(""),
      status: WebhookPlatformModel.SubscriberStatus(),
      type: Joi.string().allow("").allow(null),
      updated_on: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
    });
  }

  /** @returns {UploadServiceObject} */
  static UploadServiceObject() {
    return Joi.object({
      cdn: WebhookPlatformModel.CdnObject(),
    });
  }

  /** @returns {Url} */
  static Url() {
    return Joi.object({
      name: Joi.string().allow(""),
      url: Joi.string().allow(""),
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
