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
 * @typedef CancelDownloadResponse
 * @property {string} [message]
 * @property {string} [result]
 */

/**
 * @typedef CdnObject
 * @property {Url[]} [urls]
 */

/**
 * @typedef DeliveryDetailsRequest
 * @property {string} [company_id]
 * @property {string} [end_date]
 * @property {EventDeliveryDetailSchema[]} [event]
 * @property {number} [page_no]
 * @property {number} [page_size]
 * @property {string} [start_date]
 * @property {string} [status]
 */

/**
 * @typedef DeliveryDetailsResponse
 * @property {Page} [page]
 * @property {EventProcessReportObject[]} [rows]
 */

/**
 * @typedef DeliveryEventLevelSchema
 * @property {string} [event]
 * @property {number} [failed]
 * @property {number} [failed_percentage]
 * @property {number} [removed_webhooks]
 * @property {number} [response_time]
 * @property {number} [success]
 * @property {number} [total]
 */

/**
 * @typedef DeliverySummaryResponse
 * @property {DeliveryEventLevelSchema[]} [delivery_event_level]
 * @property {DeliverySummarySchema} [delivery_summary]
 */

/**
 * @typedef DeliverySummarySchema
 * @property {number} [failed_percentage]
 * @property {number} [removed_webhooks]
 * @property {number} [response_time]
 * @property {number} [success]
 */

/**
 * @typedef DeliveryTsResponse
 * @property {DeliveryTsSchema[]} [delivery_ts]
 */

/**
 * @typedef DeliveryTsSchema
 * @property {number} [failed]
 * @property {number} [removed_webhooks]
 * @property {number} [success]
 * @property {string} [timestamp]
 */

/**
 * @typedef DownloadReponse
 * @property {string} [file_name]
 */

/**
 * @typedef EventConfigResponse
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {string} [display_name]
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {Object} [event_schema]
 * @property {string} [event_type]
 * @property {number} [id]
 * @property {SubscriberEventMapping} [subscriber_event_mapping]
 * @property {string} [updated_on]
 * @property {string} [version]
 */

/**
 * @typedef EventDeliveryDetailSchema
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
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
 * @typedef FilterReportResponse
 * @property {string} [filter_name]
 * @property {Object[]} [values]
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
 * @property {number} [company_id]
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
 * @typedef InvalidEventsRequest
 * @property {string} [category]
 * @property {string} [end_date]
 * @property {string} [event_name]
 * @property {string} [start_date]
 * @property {string} [version]
 */

/**
 * @typedef InvalidEventsResponse
 * @property {string} [category]
 * @property {number} [count]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
 */

/**
 * @typedef ItemSchema
 * @property {Association} [association]
 * @property {AuthMeta} [auth_meta]
 * @property {string} [created_on]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {EventConfigResponse[]} [event_configs]
 * @property {number[]} [event_id]
 * @property {number} [id]
 * @property {string} [modified_by]
 * @property {string} [name]
 * @property {string} [status]
 * @property {string} [type]
 * @property {string} [updated_on]
 * @property {string} [webhook_url]
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
 * @typedef SubscriberConfigResponse
 * @property {ItemSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SubscriberEventMapping
 * @property {string} [created_on]
 * @property {number} [event_id]
 * @property {number} [id]
 * @property {number} [subscriber_id]
 */

/**
 * @typedef UpdateSubscriberRequest
 * @property {string} [status]
 */

/**
 * @typedef UpdateSubscriberResponse
 * @property {string} [message]
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

class WebhookPartnerModel {
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

  /** @returns {CancelDownloadResponse} */
  static CancelDownloadResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      result: Joi.string().allow(""),
    });
  }

  /** @returns {CdnObject} */
  static CdnObject() {
    return Joi.object({
      urls: Joi.array().items(WebhookPartnerModel.Url()),
    });
  }

  /** @returns {DeliveryDetailsRequest} */
  static DeliveryDetailsRequest() {
    return Joi.object({
      company_id: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      event: Joi.array().items(WebhookPartnerModel.EventDeliveryDetailSchema()),
      page_no: Joi.number(),
      page_size: Joi.number(),
      start_date: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {DeliveryDetailsResponse} */
  static DeliveryDetailsResponse() {
    return Joi.object({
      page: WebhookPartnerModel.Page(),
      rows: Joi.array().items(WebhookPartnerModel.EventProcessReportObject()),
    });
  }

  /** @returns {DeliveryEventLevelSchema} */
  static DeliveryEventLevelSchema() {
    return Joi.object({
      event: Joi.string().allow(""),
      failed: Joi.number(),
      failed_percentage: Joi.number(),
      removed_webhooks: Joi.number(),
      response_time: Joi.number(),
      success: Joi.number(),
      total: Joi.number(),
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
      failed_percentage: Joi.number(),
      removed_webhooks: Joi.number(),
      response_time: Joi.number(),
      success: Joi.number(),
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
      failed: Joi.number(),
      removed_webhooks: Joi.number(),
      success: Joi.number(),
      timestamp: Joi.string().allow(""),
    });
  }

  /** @returns {DownloadReponse} */
  static DownloadReponse() {
    return Joi.object({
      file_name: Joi.string().allow(""),
    });
  }

  /** @returns {EventConfigResponse} */
  static EventConfigResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      description: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow(""),
      event_category: Joi.string().allow(""),
      event_name: Joi.string().allow(""),
      event_schema: Joi.object().pattern(/\S/, Joi.any()),
      event_type: Joi.string().allow(""),
      id: Joi.number(),
      subscriber_event_mapping: WebhookPartnerModel.SubscriberEventMapping(),
      updated_on: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {EventDeliveryDetailSchema} */
  static EventDeliveryDetailSchema() {
    return Joi.object({
      event_category: Joi.string().allow(""),
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      version: Joi.string().allow(""),
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

  /** @returns {FilterReportResponse} */
  static FilterReportResponse() {
    return Joi.object({
      filter_name: Joi.string().allow(""),
      values: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
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
      association: WebhookPartnerModel.HistoryAssociation(),
      created_on: Joi.string().allow(""),
      filename: Joi.string().allow(""),
      filters: WebhookPartnerModel.HistoryFilters(),
      id: Joi.number(),
      message: Joi.string().allow(""),
      status: Joi.string().allow(""),
      updated_on: Joi.string().allow("").allow(null),
      upload_service_response: WebhookPartnerModel.UploadServiceObject(),
    });
  }

  /** @returns {HistoryPayload} */
  static HistoryPayload() {
    return Joi.object({
      company_id: Joi.number(),
      page_no: Joi.number(),
      page_size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {HistoryResponse} */
  static HistoryResponse() {
    return Joi.object({
      items: Joi.array().items(WebhookPartnerModel.HistoryItems()),
      page: WebhookPartnerModel.Page(),
    });
  }

  /** @returns {InvalidEventsRequest} */
  static InvalidEventsRequest() {
    return Joi.object({
      category: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      event_name: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {InvalidEventsResponse} */
  static InvalidEventsResponse() {
    return Joi.object({
      category: Joi.string().allow(""),
      count: Joi.number(),
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {ItemSchema} */
  static ItemSchema() {
    return Joi.object({
      association: WebhookPartnerModel.Association(),
      auth_meta: WebhookPartnerModel.AuthMeta(),
      created_on: Joi.string().allow(""),
      custom_headers: Joi.any(),
      email_id: Joi.string().allow(""),
      event_configs: Joi.array().items(
        WebhookPartnerModel.EventConfigResponse()
      ),
      event_id: Joi.array().items(Joi.number()),
      id: Joi.number(),
      modified_by: Joi.string().allow(""),
      name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      type: Joi.string().allow("").allow(null),
      updated_on: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
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

  /** @returns {SubscriberConfigResponse} */
  static SubscriberConfigResponse() {
    return Joi.object({
      items: Joi.array().items(WebhookPartnerModel.ItemSchema()),
      page: WebhookPartnerModel.Page(),
    });
  }

  /** @returns {SubscriberEventMapping} */
  static SubscriberEventMapping() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      event_id: Joi.number(),
      id: Joi.number(),
      subscriber_id: Joi.number(),
    });
  }

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

  /** @returns {UploadServiceObject} */
  static UploadServiceObject() {
    return Joi.object({
      cdn: WebhookPartnerModel.CdnObject(),
    });
  }

  /** @returns {Url} */
  static Url() {
    return Joi.object({
      name: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
}
module.exports = WebhookPartnerModel;
