const Joi = require("joi");

/**
 * @typedef Event
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 */

/**
 * @typedef EventProcessRequest
 * @property {string} [search_text]
 * @property {string} end_date
 * @property {string} start_date
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
 * @property {string} [data] - The data associated with the event.
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
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 */

/**
 * @typedef PingWebhook
 * @property {string} webhook_url - The URL of the subscriber's webhook to ping.
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
 * @typedef SubscriberEventMapping
 * @property {number} [id]
 * @property {number} [event_id]
 * @property {number} [subscriber_id]
 * @property {string} [topic]
 * @property {string} [created_on]
 */

/**
 * @typedef EventConfig
 * @property {number} [id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {SubscriberEventMapping} [subscriber_event_mapping]
 * @property {Object} [event_schema]
 * @property {string} [group]
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
 * @property {number[]} subscriber_ids - An array of subscriber IDs for
 *   filtering filters (optional).
 */

/**
 * @typedef ReportFilterResponse
 * @property {string} [filter_name] - The name of the filter.
 * @property {Object[]} [values]
 */

/**
 * @typedef HistoryPayload
 * @property {string} type - The type of history report (e.g., "platform").
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
 * @property {string[]} [webhook_type] - An array of webhook type to identify
 *   thetype of subscriber i.e (KAFKA or REST).
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
 * @property {string[]} [application_id]
 * @property {string} [extension_id]
 * @property {string} [criteria]
 */

/**
 * @typedef AssociationResp
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
 * @property {string} [provider]
 * @property {string} [webhook_url]
 * @property {AssociationResp} [association]
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
 * @typedef Events
 * @property {string} [slug]
 * @property {string} [topic]
 */

/**
 * @typedef SubscriberConfigPostRequestV2
 * @property {string} name
 * @property {string} [webhook_url]
 * @property {string} provider
 * @property {Association} association
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} status
 * @property {string} email_id
 * @property {AuthMeta} [auth_meta]
 * @property {Events[]} events
 */

/**
 * @typedef SubscriberConfigUpdateRequestV2
 * @property {number} id
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {string} provider
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} status
 * @property {string} [email_id]
 * @property {AuthMeta} [auth_meta]
 * @property {Events[]} [events]
 */

/**
 * @typedef SubscriberConfigPost
 * @property {string} name
 * @property {string} webhook_url
 * @property {Association} association
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} status
 * @property {string} email_id
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} event_id
 */

/**
 * @typedef SubscriberConfigUpdate
 * @property {number} id
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id]
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} event_id
 */

/**
 * @typedef SubscriberConfigResponse
 * @property {number} [id]
 * @property {string} [modified_by]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {string} [provider]
 * @property {AssociationResp} [association]
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

/** @typedef {"active" | "inactive"} SubscriberStatus */

class WebhookPlatformModel {
  /** @returns {Event} */
  static Event() {
    return Joi.object({
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      event_category: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {EventProcessRequest} */
  static EventProcessRequest() {
    return Joi.object({
      search_text: Joi.string().allow(""),
      end_date: Joi.string().allow("").required(),
      start_date: Joi.string().allow("").required(),
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
      data: Joi.string().allow(""),
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
      webhook_url: Joi.string().allow("").required(),
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

  /** @returns {SubscriberEventMapping} */
  static SubscriberEventMapping() {
    return Joi.object({
      id: Joi.number(),
      event_id: Joi.number(),
      subscriber_id: Joi.number(),
      topic: Joi.string().allow("").allow(null),
      created_on: Joi.string().allow(""),
    });
  }

  /** @returns {EventConfig} */
  static EventConfig() {
    return Joi.object({
      id: Joi.number(),
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      event_category: Joi.string().allow(""),
      subscriber_event_mapping: WebhookPlatformModel.SubscriberEventMapping(),
      event_schema: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      group: Joi.string().allow("").allow(null),
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
      subscriber_ids: Joi.array().items(Joi.number()).required(),
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
      type: Joi.string().allow("").required(),
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
      webhook_type: Joi.array().items(Joi.string().allow("")),
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
      application_id: Joi.array().items(Joi.string().allow("")),
      extension_id: Joi.string().allow(""),
      criteria: Joi.string().allow(""),
    });
  }

  /** @returns {AssociationResp} */
  static AssociationResp() {
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
      provider: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
      association: WebhookPlatformModel.AssociationResp(),
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

  /** @returns {Events} */
  static Events() {
    return Joi.object({
      slug: Joi.string().allow(""),
      topic: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriberConfigPostRequestV2} */
  static SubscriberConfigPostRequestV2() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      webhook_url: Joi.string().allow(""),
      provider: Joi.string().allow("").required(),
      association: WebhookPlatformModel.Association().required(),
      custom_headers: Joi.any(),
      status: WebhookPlatformModel.SubscriberStatus().required(),
      email_id: Joi.string().allow("").required(),
      auth_meta: WebhookPlatformModel.AuthMeta(),
      events: Joi.array().items(WebhookPlatformModel.Events()).required(),
    });
  }

  /** @returns {SubscriberConfigUpdateRequestV2} */
  static SubscriberConfigUpdateRequestV2() {
    return Joi.object({
      id: Joi.number().required(),
      name: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
      provider: Joi.string().allow("").required(),
      association: WebhookPlatformModel.Association(),
      custom_headers: Joi.any(),
      status: WebhookPlatformModel.SubscriberStatus().required(),
      email_id: Joi.string().allow(""),
      auth_meta: WebhookPlatformModel.AuthMeta(),
      events: Joi.array().items(WebhookPlatformModel.Events()),
    });
  }

  /** @returns {SubscriberConfigPost} */
  static SubscriberConfigPost() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      webhook_url: Joi.string().allow("").required(),
      association: WebhookPlatformModel.Association().required(),
      custom_headers: Joi.any(),
      status: WebhookPlatformModel.SubscriberStatus().required(),
      email_id: Joi.string().allow("").required(),
      auth_meta: WebhookPlatformModel.AuthMeta(),
      event_id: Joi.array().items(Joi.number()).required(),
    });
  }

  /** @returns {SubscriberConfigUpdate} */
  static SubscriberConfigUpdate() {
    return Joi.object({
      id: Joi.number().required(),
      name: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
      association: WebhookPlatformModel.Association(),
      custom_headers: Joi.any(),
      status: WebhookPlatformModel.SubscriberStatus(),
      email_id: Joi.string().allow(""),
      auth_meta: WebhookPlatformModel.AuthMeta(),
      event_id: Joi.array().items(Joi.number()).required(),
    });
  }

  /** @returns {SubscriberConfigResponse} */
  static SubscriberConfigResponse() {
    return Joi.object({
      id: Joi.number(),
      modified_by: Joi.string().allow(""),
      name: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
      provider: Joi.string().allow(""),
      association: WebhookPlatformModel.AssociationResp(),
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

      "inactive"
    );
  }
}
module.exports = WebhookPlatformModel;
