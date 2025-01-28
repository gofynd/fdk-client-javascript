const Joi = require("joi");

/**
 * @typedef UpdateSubscriberRequest
 * @property {string} [status]
 */

/**
 * @typedef UpdateSubscriberResponse
 * @property {string} [message]
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
 * @typedef SubscriberEventMapping
 * @property {number} [id]
 * @property {number} [event_id]
 * @property {number} [subscriber_id]
 * @property {string} [topic]
 * @property {string} [created_on]
 */

/**
 * @typedef EventConfigResponse
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
 * @property {string} [group]
 * @property {SubscriberEventMapping} [subscriber_event_mapping]
 */

/**
 * @typedef SubscriberConfigResponse
 * @property {ItemSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef InvalidEventsRequest
 * @property {string} [event_name]
 * @property {string} [version]
 * @property {string} [category]
 * @property {string} [start_date]
 * @property {string} [end_date]
 */

/**
 * @typedef InvalidEventsResponse
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
 * @property {string} [category]
 * @property {number} [count]
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
 * @typedef HistoryPayload
 * @property {number} [company_id]
 * @property {string} [type] - The type of history report (e.g., "platform").
 * @property {number} [page_no] - The page number of the history report.
 * @property {number} [page_size] - The number of records per page.
 */

/**
 * @typedef CancelDownloadResponse
 * @property {string} [message]
 * @property {string} [result]
 */

/**
 * @typedef FilterReportResponse
 * @property {string} [filter_name]
 * @property {Object[]} [values]
 */

/**
 * @typedef DeliveryTsResponse
 * @property {DeliveryTsSchema[]} [delivery_ts]
 */

/**
 * @typedef DeliveryTsSchema
 * @property {string} [timestamp]
 * @property {number} [failed]
 * @property {number} [removed_webhooks]
 * @property {number} [success]
 */

/**
 * @typedef DeliveryDetailsRequest
 * @property {string} [company_id]
 * @property {number} [page_no]
 * @property {number} [page_size]
 * @property {string} [start_date]
 * @property {string} [end_date]
 * @property {EventDeliveryDetailSchema[]} [event]
 * @property {string} [status]
 */

/**
 * @typedef EventDeliveryDetailSchema
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 */

/**
 * @typedef DeliveryDetailsResponse
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
 * @property {number} [total] - Total number of items.
 */

/**
 * @typedef DeliveryEventLevelSchema
 * @property {string} [event]
 * @property {number} [success]
 * @property {number} [failed]
 * @property {number} [failed_percentage]
 * @property {number} [removed_webhooks]
 * @property {number} [total]
 * @property {number} [response_time]
 */

/**
 * @typedef ResponseTimeTs
 * @property {AvgResponseTime[]} [avg_response_time_ts]
 */

/**
 * @typedef AvgResponseTime
 * @property {string} [timestamp]
 * @property {number} [response_time]
 */

/**
 * @typedef DeliverySummaryResponse
 * @property {DeliveryEventLevelSchema[]} [delivery_event_level]
 * @property {DeliverySummarySchema} [delivery_summary]
 */

/**
 * @typedef DeliverySummarySchema
 * @property {number} [success]
 * @property {number} [response_time]
 * @property {number} [failed_percentage]
 * @property {number} [removed_webhooks]
 */

/**
 * @typedef ItemSchema
 * @property {number} [id]
 * @property {string} [modified_by]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {string} [provider]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {string} [status]
 * @property {string} [email_id]
 * @property {string} [updated_on]
 * @property {string} [created_on]
 * @property {string} [type]
 * @property {AuthMeta} [auth_meta]
 * @property {EventConfigResponse[]} [event_configs]
 * @property {number[]} [event_id]
 */

class WebhookPartnerModel {
  /** @returns {UpdateSubscriberRequest} */
  static UpdateSubscriberRequest() {
    return Joi.object({
      status: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateSubscriberResponse} */
  static UpdateSubscriberResponse() {
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

  /** @returns {EventConfigResponse} */
  static EventConfigResponse() {
    return Joi.object({
      id: Joi.number(),
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      event_category: Joi.string().allow(""),
      event_schema: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      version: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      description: Joi.string().allow("").allow(null),
      created_on: Joi.string().allow(""),
      updated_on: Joi.string().allow(""),
      group: Joi.string().allow("").allow(null),
      subscriber_event_mapping: WebhookPartnerModel.SubscriberEventMapping(),
    });
  }

  /** @returns {SubscriberConfigResponse} */
  static SubscriberConfigResponse() {
    return Joi.object({
      items: Joi.array().items(WebhookPartnerModel.ItemSchema()),
      page: WebhookPartnerModel.Page(),
    });
  }

  /** @returns {InvalidEventsRequest} */
  static InvalidEventsRequest() {
    return Joi.object({
      event_name: Joi.string().allow(""),
      version: Joi.string().allow(""),
      category: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
    });
  }

  /** @returns {InvalidEventsResponse} */
  static InvalidEventsResponse() {
    return Joi.object({
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      version: Joi.string().allow(""),
      category: Joi.string().allow(""),
      count: Joi.number(),
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
      urls: Joi.array().items(WebhookPartnerModel.Url()),
    });
  }

  /** @returns {UploadServiceObject} */
  static UploadServiceObject() {
    return Joi.object({
      cdn: WebhookPartnerModel.CdnObject(),
    }).allow(null);
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
      association: WebhookPartnerModel.HistoryAssociation(),
      filters: WebhookPartnerModel.HistoryFilters(),
      filename: Joi.string().allow(""),
      status: Joi.string().allow(""),
      upload_service_response: WebhookPartnerModel.UploadServiceObject(),
      created_on: Joi.string().allow(""),
      updated_on: Joi.string().allow("").allow(null),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {HistoryResponse} */
  static HistoryResponse() {
    return Joi.object({
      items: Joi.array().items(WebhookPartnerModel.HistoryItems()),
      page: WebhookPartnerModel.Page(),
    });
  }

  /** @returns {HistoryPayload} */
  static HistoryPayload() {
    return Joi.object({
      company_id: Joi.number(),
      type: Joi.string().allow(""),
      page_no: Joi.number(),
      page_size: Joi.number(),
    });
  }

  /** @returns {CancelDownloadResponse} */
  static CancelDownloadResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      result: Joi.string().allow(""),
    });
  }

  /** @returns {FilterReportResponse} */
  static FilterReportResponse() {
    return Joi.object({
      filter_name: Joi.string().allow(""),
      values: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
    });
  }

  /** @returns {DeliveryTsResponse} */
  static DeliveryTsResponse() {
    return Joi.object({
      delivery_ts: Joi.array().items(WebhookPartnerModel.DeliveryTsSchema()),
    });
  }

  /** @returns {DeliveryTsSchema} */
  static DeliveryTsSchema() {
    return Joi.object({
      timestamp: Joi.string().allow(""),
      failed: Joi.number(),
      removed_webhooks: Joi.number(),
      success: Joi.number(),
    });
  }

  /** @returns {DeliveryDetailsRequest} */
  static DeliveryDetailsRequest() {
    return Joi.object({
      company_id: Joi.string().allow(""),
      page_no: Joi.number(),
      page_size: Joi.number(),
      start_date: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      event: Joi.array().items(WebhookPartnerModel.EventDeliveryDetailSchema()),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {EventDeliveryDetailSchema} */
  static EventDeliveryDetailSchema() {
    return Joi.object({
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      event_category: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {DeliveryDetailsResponse} */
  static DeliveryDetailsResponse() {
    return Joi.object({
      rows: Joi.array().items(WebhookPartnerModel.EventProcessReportObject()),
      page: WebhookPartnerModel.Page(),
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
      total: Joi.number(),
    });
  }

  /** @returns {DeliveryEventLevelSchema} */
  static DeliveryEventLevelSchema() {
    return Joi.object({
      event: Joi.string().allow(""),
      success: Joi.number(),
      failed: Joi.number(),
      failed_percentage: Joi.number(),
      removed_webhooks: Joi.number(),
      total: Joi.number(),
      response_time: Joi.number(),
    });
  }

  /** @returns {ResponseTimeTs} */
  static ResponseTimeTs() {
    return Joi.object({
      avg_response_time_ts: Joi.array().items(
        WebhookPartnerModel.AvgResponseTime()
      ),
    });
  }

  /** @returns {AvgResponseTime} */
  static AvgResponseTime() {
    return Joi.object({
      timestamp: Joi.string().allow(""),
      response_time: Joi.number(),
    });
  }

  /** @returns {DeliverySummaryResponse} */
  static DeliverySummaryResponse() {
    return Joi.object({
      delivery_event_level: Joi.array().items(
        WebhookPartnerModel.DeliveryEventLevelSchema()
      ),
      delivery_summary: WebhookPartnerModel.DeliverySummarySchema(),
    });
  }

  /** @returns {DeliverySummarySchema} */
  static DeliverySummarySchema() {
    return Joi.object({
      success: Joi.number(),
      response_time: Joi.number(),
      failed_percentage: Joi.number(),
      removed_webhooks: Joi.number(),
    });
  }

  /** @returns {ItemSchema} */
  static ItemSchema() {
    return Joi.object({
      id: Joi.number(),
      modified_by: Joi.string().allow(""),
      name: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
      provider: Joi.string().allow(""),
      association: WebhookPartnerModel.Association(),
      custom_headers: Joi.any(),
      status: Joi.string().allow(""),
      email_id: Joi.string().allow(""),
      updated_on: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      type: Joi.string().allow("").allow(null),
      auth_meta: WebhookPartnerModel.AuthMeta(),
      event_configs: Joi.array().items(
        WebhookPartnerModel.EventConfigResponse()
      ),
      event_id: Joi.array().items(Joi.number()),
    });
  }
}
module.exports = WebhookPartnerModel;
