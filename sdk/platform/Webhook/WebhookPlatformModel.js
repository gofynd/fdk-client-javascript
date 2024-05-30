const Joi = require("joi");

/**
 * @typedef CancelResponse
 * @property {number} [code] - The HTTP status code of the response (e.g., 200).
 */

/**
 * @typedef EventProcessRequest
 * @property {string} [search_text]
 * @property {string} [end_date]
 * @property {string} [start_date]
 * @property {number[]} [subscriber_ids]
 * @property {Event[]} [event]
 */

/**
 * @typedef Event
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 */

/**
 * @typedef ManualRetryFailedResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {string} [request_id]
 * @property {Object} [meta]
 * @property {string} [stack_trace]
 */

/**
 * @typedef FailedEventsCountSuccessResponse
 * @property {EventCountItem[]} [items]
 */

/**
 * @typedef EventCountItem
 * @property {string} [status] - The status of the event (e.g., "FAILED").
 * @property {number} [count] - The count of events with the specified status
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
 * @typedef EventSuccessResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef EventProcessedSuccessResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef Error
 * @property {string} [error] - Error message describing the reason for the failure.
 */

/**
 * @typedef EventProcessReportObject
 * @property {string} [event_name] - The name of the processed event.
 * @property {number} [response_code] - The response code of the event.
 * @property {string} [response_message] - The response message of the event.
 * @property {string} [data] - The data associated with the event.
 * @property {number} [attempt] - The attempt number of the event.
 * @property {number} [last_attempted_on] - The timestamp of the last attempted event.
 * @property {string} [status] - The status of the event (e.g., "FAILED").
 * @property {string} [name] - The name of the event.
 * @property {string} [webhook_url] - The webhook URL associated with the event.
 * @property {number} [response_time] - The response time of the event.
 */

/**
 * @typedef EventProcessReports
 * @property {EventProcessReportObject[]} [rows]
 * @property {Page} [page]
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
 * @typedef ReportFiltersPayload
 * @property {number[]} [subscriber_ids] - An array of subscriber IDs for
 *   filtering filters (optional).
 */

/**
 * @typedef FilterValues
 * @property {string} [text] - The display text for the filter value.
 * @property {Object} [value] - The value associated with the filter value.
 */

/**
 * @typedef FilterResponseObject
 * @property {string} [filter_name] - The name of the filter.
 * @property {FilterValues[]} [values]
 */

/**
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */

/**
 * @typedef EventConfig
 * @property {number} [id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 * @property {string} [display_name]
 * @property {string} [description]
 * @property {string} [created_on]
 */

/**
 * @typedef ReportFilterResponse
 * @property {FilterResponseObject[]} [items]
 */

/**
 * @typedef HistoryPayload
 * @property {string} [type] - The type of history report (e.g., "platform").
 * @property {number} [page_no] - The page number of the history report.
 * @property {number} [page_size] - The number of records per page.
 */

/**
 * @typedef HistoryFilters
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
 * @typedef HistoryResponseObject
 * @property {number} [id] - The ID of the history report.
 * @property {AssociationDetails} [association]
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
 * @property {HistoryResponseObject[]} [items]
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
 * @typedef AssociationDetails
 * @property {number} [company_id]
 */

/**
 * @typedef SubscriberResponse
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {SubscriberStatus} [status]
 * @property {AuthMeta} [auth_meta]
 * @property {string} [created_on]
 * @property {string} [updated_on]
 * @property {EventConfig[]} [event_configs]
 */

/**
 * @typedef AuthMeta
 * @property {string} [type]
 * @property {string} [secret]
 */

/**
 * @typedef Association
 * @property {number} [company_id]
 * @property {string[]} [application_id]
 * @property {string} [extension_id]
 * @property {string} [criteria]
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
 * @typedef SubscriberConfigList
 * @property {SubscriberResponse[]} [items]
 * @property {Page} [page]
 */

/** @typedef {"active" | "inactive" | "blocked"} SubscriberStatus */

class WebhookPlatformModel {
  /** @returns {CancelResponse} */
  static CancelResponse() {
    return Joi.object({
      code: Joi.number(),
    });
  }

  /** @returns {EventProcessRequest} */
  static EventProcessRequest() {
    return Joi.object({
      search_text: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      subscriber_ids: Joi.array().items(Joi.number()),
      event: Joi.array().items(WebhookPlatformModel.Event()),
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

  /** @returns {ManualRetryFailedResponse} */
  static ManualRetryFailedResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      meta: Joi.any(),
      stack_trace: Joi.string().allow(""),
    });
  }

  /** @returns {FailedEventsCountSuccessResponse} */
  static FailedEventsCountSuccessResponse() {
    return Joi.object({
      items: Joi.array().items(WebhookPlatformModel.EventCountItem()),
    });
  }

  /** @returns {EventCountItem} */
  static EventCountItem() {
    return Joi.object({
      status: Joi.string().allow(""),
      count: Joi.number(),
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

  /** @returns {EventSuccessResponse} */
  static EventSuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {EventProcessedSuccessResponse} */
  static EventProcessedSuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {Error} */
  static Error() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  /** @returns {EventProcessReportObject} */
  static EventProcessReportObject() {
    return Joi.object({
      event_name: Joi.string().allow(""),
      response_code: Joi.number(),
      response_message: Joi.string().allow(""),
      data: Joi.string().allow(""),
      attempt: Joi.number(),
      last_attempted_on: Joi.number(),
      status: Joi.string().allow(""),
      name: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
      response_time: Joi.number(),
    });
  }

  /** @returns {EventProcessReports} */
  static EventProcessReports() {
    return Joi.object({
      rows: Joi.array().items(WebhookPlatformModel.EventProcessReportObject()),
      page: WebhookPlatformModel.Page(),
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

  /** @returns {ReportFiltersPayload} */
  static ReportFiltersPayload() {
    return Joi.object({
      subscriber_ids: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {FilterValues} */
  static FilterValues() {
    return Joi.object({
      text: Joi.string().allow(""),
      value: Joi.any(),
    });
  }

  /** @returns {FilterResponseObject} */
  static FilterResponseObject() {
    return Joi.object({
      filter_name: Joi.string().allow(""),
      values: Joi.array().items(WebhookPlatformModel.FilterValues()),
    });
  }

  /** @returns {EventConfigResponse} */
  static EventConfigResponse() {
    return Joi.object({
      event_configs: Joi.array().items(WebhookPlatformModel.EventConfig()),
    });
  }

  /** @returns {EventConfig} */
  static EventConfig() {
    return Joi.object({
      id: Joi.number(),
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      event_category: Joi.string().allow(""),
      version: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
    });
  }

  /** @returns {ReportFilterResponse} */
  static ReportFilterResponse() {
    return Joi.object({
      items: Joi.array().items(WebhookPlatformModel.FilterResponseObject()),
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

  /** @returns {HistoryResponseObject} */
  static HistoryResponseObject() {
    return Joi.object({
      id: Joi.number(),
      association: WebhookPlatformModel.AssociationDetails(),
      filters: WebhookPlatformModel.HistoryFilters(),
      filename: Joi.string().allow(""),
      status: Joi.string().allow(""),
      upload_service_response: WebhookPlatformModel.UploadServiceObject(),
      created_on: Joi.string().allow(""),
      updated_on: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {HistoryResponse} */
  static HistoryResponse() {
    return Joi.object({
      items: Joi.array().items(WebhookPlatformModel.HistoryResponseObject()),
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

  /** @returns {AssociationDetails} */
  static AssociationDetails() {
    return Joi.object({
      company_id: Joi.number(),
    });
  }

  /** @returns {SubscriberResponse} */
  static SubscriberResponse() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
      association: WebhookPlatformModel.Association(),
      custom_headers: Joi.any(),
      email_id: Joi.string().allow(""),
      status: WebhookPlatformModel.SubscriberStatus(),
      auth_meta: WebhookPlatformModel.AuthMeta(),
      created_on: Joi.string().allow(""),
      updated_on: Joi.string().allow(""),
      event_configs: Joi.array().items(WebhookPlatformModel.EventConfig()),
    });
  }

  /** @returns {AuthMeta} */
  static AuthMeta() {
    return Joi.object({
      type: Joi.string().allow(""),
      secret: Joi.string().allow(""),
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
