const Joi = require("joi");

/**
 * @typedef SubscriberUpdate
 * @property {string} [status] - Represents the status of the subscriber update operation.
 */

/**
 * @typedef SubscriberUpdateResult
 * @property {string} [message] - Provides a message describing the result of
 *   the subscriber update operation.
 */

/**
 * @typedef Association
 * @property {number} [company_id] - The identifier for the company associated
 *   with the configuration.
 * @property {string[]} [application_id] - A list of application identifiers
 *   associated with the configuration.
 * @property {string} [extension_id] - The identifier for the extension related
 *   to the configuration.
 * @property {string} [criteria] - Defines the criteria for the association,
 *   including options for all events, empty criteria, or specific events.
 */

/**
 * @typedef AuthMeta
 * @property {string} [type] - Specifies the type of authentication used.
 * @property {string} [secret] - Contains the key or token used for authentication.
 */

/**
 * @typedef BroadcasterConfig
 * @property {string} [topic] - The topic associated with the broadcaster configuration.
 * @property {string} [queue] - The queue name used by the broadcaster.
 * @property {string} [event_bridge_name] - The name of the event bridge used in
 *   the broadcaster configuration.
 * @property {string} [workflow_name] - The name of the workflow related to the
 *   broadcaster.
 * @property {string} [account_id] - The account ID associated with the
 *   broadcaster configuration.
 * @property {string} [detail_type] - Specifies the type of detail for the
 *   broadcaster, allowing for custom or non-enumerated values.
 */

/**
 * @typedef SubscriberEventMapping
 * @property {number} [id] - The unique identifier for the subscriber event mapping.
 * @property {number} [event_id] - The identifier for the event associated with
 *   the subscriber.
 * @property {number} [subscriber_id] - The identifier for the subscriber
 *   involved in the mapping.
 * @property {FilterSchema} [filters]
 * @property {Object} [reducer] - The reducer property allows users to customize
 *   the JSON structure of the webhook payload using JSONPath queries. They can
 *   also create new properties by mapping existing ones. Note that it overrides
 *   the entire JSON structure of the webhook payload sent via the webhook. See
 *   the partner documentation's filter and reducer section for details.
 * @property {BroadcasterConfig} [broadcaster_config]
 * @property {string} [created_on] - The timestamp indicating when the
 *   subscriber event mapping was created.
 */

/**
 * @typedef FilterSchema
 * @property {string} [query] - JSONPath expression that specifies the property
 *   in the webhook payload to filter on. This enables targeting specific data
 *   within the payload.
 * @property {string} [condition] - JavaScript function used to evaluate the
 *   specified property in the webhook payload against a condition. This
 *   function determines whether the filter passes based on its return value.
 * @property {string} [logic] - Logical operator used to combine multiple
 *   conditions in the `conditions` array. Supported values are `AND` and `OR`.
 * @property {Object[]} [conditions] - An array of filter objects to be
 *   evaluated using the specified logical operator. This array will contain
 *   more filters including a combination of single condition mode and logical
 *   group mode filters.
 */

/**
 * @typedef EventConfigDetails
 * @property {number} [id] - The unique identifier for the event configuration.
 * @property {string} [event_name] - The name assigned to the event configuration.
 * @property {string} [event_type] - Specifies the type of event, allowing for
 *   custom or non-enumerated values.
 * @property {string} [event_category] - Defines the category of the event,
 *   allowing for custom or non-enumerated values.
 * @property {Object} [event_schema] - Contains the schema details for the
 *   event, allowing for flexible or dynamic schemas.
 * @property {string} [version] - The version number of the event configuration.
 * @property {string} [display_name] - The display name for the event configuration.
 * @property {string} [description] - A description of the event configuration,
 *   if provided.
 * @property {string} [created_on] - The timestamp indicating when the event
 *   configuration was created.
 * @property {string} [updated_on] - The timestamp indicating when the event
 *   configuration was last updated.
 * @property {string} [group] - The group to which the event configuration
 *   belongs, if applicable.
 * @property {SubscriberEventMapping} [subscriber_event_mapping]
 */

/**
 * @typedef SubscriberConfigDetails
 * @property {ItemSchema[]} [items] - A list of items representing subscriber
 *   configurations.
 * @property {Page} [page]
 */

/**
 * @typedef InvalidEventsPayload
 * @property {string} [event_name] - The name of the event that is considered invalid.
 * @property {string} [version] - The version of the event that is considered invalid.
 * @property {string} [category] - The category of the event that is considered invalid.
 * @property {string} [start_date] - The start date and time for the period
 *   during which events were considered invalid.
 * @property {string} [end_date] - The end date and time for the period during
 *   which events were considered invalid.
 */

/**
 * @typedef InvalidEventsResult
 * @property {string} [event_name] - The name of the event that was found to be invalid.
 * @property {string} [event_type] - The type of the invalid event, allowing for
 *   custom or non-enumerated values.
 * @property {string} [version] - The version of the invalid event.
 * @property {string} [category] - The category of the invalid event.
 * @property {number} [count] - The number of occurrences of the invalid event.
 */

/**
 * @typedef HistoryFilters
 * @property {string[]} [events] - A list of event types to filter the history report.
 * @property {string} [search_text] - Text used for searching within the history report.
 * @property {string} [status] - The status of the history report (e.g., "FAILED").
 * @property {string} [end_date] - The end date and time of the history report.
 * @property {string} [start_date] - The start date and time of the history report.
 * @property {number[]} [subscribers] - An array of subscriber IDs associated
 *   with the history report.
 * @property {string[]} [webhook_type] - An array of webhook types to identify
 *   the type of subscriber.
 */

/**
 * @typedef Url
 * @property {string} [url] - The URL of the uploaded report file.
 * @property {string} [name] - The name of the uploaded report file.
 */

/**
 * @typedef CdnObject
 * @property {Url[]} [urls] - A list of URLs for CDN objects, including the
 *   location of the uploaded report files.
 */

/**
 * @typedef UploadServiceObject
 * @property {CdnObject} [cdn]
 */

/**
 * @typedef HistoryAssociation
 * @property {number} [company_id] - The identifier for the company associated
 *   with the history report.
 * @property {number[]} [subscriber_ids] - A list of subscriber IDs related to
 *   the history report.
 */

/**
 * @typedef HistoryItems
 * @property {number} [id] - The unique identifier for the history report.
 * @property {HistoryAssociation} [association]
 * @property {HistoryFilters} [filters]
 * @property {string} [filename] - The name of the file containing the history report.
 * @property {string} [status] - The current status of the history report (e.g.,
 *   "COMPLETED").
 * @property {UploadServiceObject} [upload_service_response]
 * @property {string} [created_on] - The date and time when the history report
 *   was generated.
 * @property {string} [updated_on] - The date and time when the history report
 *   was last updated.
 * @property {string} [message] - A message related to the history report.
 */

/**
 * @typedef HistoryResult
 * @property {HistoryItems[]} [items] - A list of history report items.
 * @property {Page} [page]
 */

/**
 * @typedef HistoryPayload
 * @property {number} [company_id] - The identifier for the company requesting
 *   the history report.
 * @property {string} [type] - Specifies the type of history report requested
 *   (e.g., "platform").
 * @property {number} [page_no] - The page number of the history report results.
 * @property {number} [page_size] - The number of records to display per page in
 *   the history report.
 */

/**
 * @typedef CancelDownloadResult
 * @property {string} [message] - A message indicating the result of the cancel
 *   download request.
 * @property {string} [result] - The outcome of the cancel download operation.
 */

/**
 * @typedef FilterReportResult
 * @property {string} [filter_name] - The name of the filter applied in the report.
 * @property {Object[]} [values] - A list of values resulting from the applied filter.
 */

/**
 * @typedef DeliveryTsResult
 * @property {DeliveryTsSchema[]} [delivery_ts] - List of delivery timestamps.
 */

/**
 * @typedef DeliveryTsSchema
 * @property {string} [timestamp] - The timestamp of the delivery event.
 * @property {number} [failed] - The count of failed delivery attempts.
 * @property {number} [removed_webhooks] - The count of removed webhooks during delivery.
 * @property {number} [success] - The count of successful delivery attempts.
 */

/**
 * @typedef DeliveryDetailsPayload
 * @property {string} [company_id] - The identifier for the company requesting
 *   delivery details.
 * @property {number} [page_no] - The page number for the delivery details results.
 * @property {number} [page_size] - The number of records per page for delivery details.
 * @property {string} [start_date] - The start date and time for filtering
 *   delivery details.
 * @property {string} [end_date] - The end date and time for filtering delivery details.
 * @property {EventDeliveryDetailSchema[]} [event] - A list of event delivery details.
 * @property {string} [status] - The status of the delivery details request.
 */

/**
 * @typedef EventDeliveryDetailSchema
 * @property {string} [event_name] - The name of the event related to the
 *   delivery details.
 * @property {string} [event_type] - The type of the event, allowing for custom
 *   or non-enumerated values.
 * @property {string} [event_category] - The category of the event, allowing for
 *   custom or non-enumerated values.
 * @property {string} [version] - The version of the event related to the
 *   delivery details.
 */

/**
 * @typedef DeliveryDetailsResult
 * @property {EventProcessReportObject[]} [rows] - A list of processed event
 *   reports with delivery details.
 * @property {Page} [page]
 */

/**
 * @typedef EventProcessReportObject
 * @property {string} [event_name] - The name of the processed event.
 * @property {number} [response_code] - The response code returned for the
 *   event, allowing for custom or non-enumerated values.
 * @property {string} [response_message] - The response message associated with the event.
 * @property {string} [data] - The data payload associated with the event.
 * @property {number} [attempt] - The attempt number for processing the event.
 * @property {number} [last_attempted_on] - The timestamp of the last attempt to
 *   process the event.
 * @property {string} [status] - The status of the event processing (e.g., "FAILED").
 * @property {string} [name] - The name of the event.
 * @property {string} [webhook_url] - The URL of the webhook associated with the event.
 * @property {number} [response_time] - The time taken to respond to the event.
 * @property {string} [message_id] - The identifier for the event message.
 * @property {string} [event_trace_id] - The trace ID associated with the event.
 */

/**
 * @typedef Page
 * @property {number} [item_total] - The total number of all items across all pages.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, can be 'cursor' or 'number'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [page_size] - The number of items per page.
 */

/**
 * @typedef DeliveryEventLevelSchema
 * @property {string} [event] - The name or identifier of the event.
 * @property {number} [success] - The count of successful deliveries for the event.
 * @property {number} [failed] - The count of failed deliveries for the event.
 * @property {number} [failed_percentage] - The percentage of failed deliveries
 *   relative to the total.
 * @property {number} [removed_webhooks] - The count of webhooks that were
 *   removed during the delivery.
 * @property {number} [total] - The total number of delivery attempts for the event.
 * @property {number} [response_time] - The average response time for the event
 *   deliveries.
 */

/**
 * @typedef ResponseTimeTs
 * @property {AvgResponseTime[]} [avg_response_time_ts] - List of average
 *   response time timestamps.
 */

/**
 * @typedef AvgResponseTime
 * @property {string} [last_attempted_on] - The timestamp of the last attempt,
 *   formatted as a string.
 * @property {number} [response_code] - The response code returned for the
 *   delivery attempt, allowing for custom or non-enumerated values.
 * @property {string} [response_time] - The response time for the delivery
 *   attempt, formatted as a string.
 * @property {number} [attempt] - The attempt number for the delivery.
 * @property {number} [total] - The total count of deliveries attempted.
 */

/**
 * @typedef DeliverySummaryResult
 * @property {DeliveryEventLevelSchema[]} [delivery_event_level] - List of
 *   delivery event levels.
 * @property {DeliverySummarySchema} [delivery_summary]
 */

/**
 * @typedef DeliverySummarySchema
 * @property {number} [success] - The total count of successful deliveries.
 * @property {number} [response_time] - The average response time for deliveries.
 * @property {number} [failed_percentage] - The percentage of failed deliveries.
 * @property {number} [removed_webhooks] - The count of webhooks removed during delivery.
 */

/**
 * @typedef ItemSchema
 * @property {number} [id] - The unique identifier for the item.
 * @property {string} [modified_by] - The user or system that last modified the item.
 * @property {string} [name] - The name of the item.
 * @property {string} [webhook_url] - The URL of the webhook associated with the item.
 * @property {string} [provider] - The provider of the item.
 * @property {string} [source] - Source that subscriber belongs to.
 * @property {Association} [association]
 * @property {Object} [custom_headers] - Custom headers associated with the item, if any.
 * @property {string} [status] - The current status of the item.
 * @property {string} [email_id] - The email ID associated with the item, if applicable.
 * @property {string} [updated_on] - The date and time when the item was last updated.
 * @property {string} [created_on] - The date and time when the item was created.
 * @property {string} [type] - The type of the item, if applicable.
 * @property {AuthMeta} [auth_meta]
 * @property {EventConfigDetails[]} [event_configs] - A list of event
 *   configurations associated with the item.
 * @property {number[]} [event_id] - A list of event IDs associated with the item.
 */

class WebhookPartnerModel {
  /** @returns {SubscriberUpdate} */
  static SubscriberUpdate() {
    return Joi.object({
      status: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriberUpdateResult} */
  static SubscriberUpdateResult() {
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

  /** @returns {BroadcasterConfig} */
  static BroadcasterConfig() {
    return Joi.object({
      topic: Joi.string().allow(""),
      queue: Joi.string().allow(""),
      event_bridge_name: Joi.string().allow(""),
      workflow_name: Joi.string().allow(""),
      account_id: Joi.string().allow(""),
      detail_type: Joi.string().allow(""),
    }).allow(null);
  }

  /** @returns {SubscriberEventMapping} */
  static SubscriberEventMapping() {
    return Joi.object({
      id: Joi.number(),
      event_id: Joi.number(),
      subscriber_id: Joi.number(),
      filters: WebhookPartnerModel.FilterSchema(),
      reducer: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      broadcaster_config: WebhookPartnerModel.BroadcasterConfig(),
      created_on: Joi.string().allow(""),
    });
  }

  /** @returns {FilterSchema} */
  static FilterSchema() {
    return Joi.object({
      query: Joi.string().allow(""),
      condition: Joi.string().allow(""),
      logic: Joi.string().allow(""),
      conditions: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
    }).allow(null);
  }

  /** @returns {EventConfigDetails} */
  static EventConfigDetails() {
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

  /** @returns {SubscriberConfigDetails} */
  static SubscriberConfigDetails() {
    return Joi.object({
      items: Joi.array().items(WebhookPartnerModel.ItemSchema()),
      page: WebhookPartnerModel.Page(),
    });
  }

  /** @returns {InvalidEventsPayload} */
  static InvalidEventsPayload() {
    return Joi.object({
      event_name: Joi.string().allow(""),
      version: Joi.string().allow(""),
      category: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
    });
  }

  /** @returns {InvalidEventsResult} */
  static InvalidEventsResult() {
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

  /** @returns {HistoryResult} */
  static HistoryResult() {
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

  /** @returns {CancelDownloadResult} */
  static CancelDownloadResult() {
    return Joi.object({
      message: Joi.string().allow(""),
      result: Joi.string().allow(""),
    });
  }

  /** @returns {FilterReportResult} */
  static FilterReportResult() {
    return Joi.object({
      filter_name: Joi.string().allow(""),
      values: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
    });
  }

  /** @returns {DeliveryTsResult} */
  static DeliveryTsResult() {
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

  /** @returns {DeliveryDetailsPayload} */
  static DeliveryDetailsPayload() {
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

  /** @returns {DeliveryDetailsResult} */
  static DeliveryDetailsResult() {
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
      page_size: Joi.number(),
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
      last_attempted_on: Joi.string().allow(""),
      response_code: Joi.number(),
      response_time: Joi.string().allow(""),
      attempt: Joi.number(),
      total: Joi.number(),
    });
  }

  /** @returns {DeliverySummaryResult} */
  static DeliverySummaryResult() {
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
      source: Joi.string().allow("").allow(null),
      association: WebhookPartnerModel.Association(),
      custom_headers: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      status: Joi.string().allow(""),
      email_id: Joi.string().allow(""),
      updated_on: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      type: Joi.string().allow("").allow(null),
      auth_meta: WebhookPartnerModel.AuthMeta(),
      event_configs: Joi.array().items(
        WebhookPartnerModel.EventConfigDetails()
      ),
      event_id: Joi.array().items(Joi.number()),
    });
  }
}
module.exports = WebhookPartnerModel;
