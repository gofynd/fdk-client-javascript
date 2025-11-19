const Joi = require("joi");

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
 * @typedef BroadcasterConfig
 * @property {string} [topic] - The name of the topic for the broadcaster configuration.
 * @property {string} [queue] - The name of the queue for the broadcaster configuration.
 * @property {string} [event_bridge_name] - The name of the event bridge
 *   associated with the broadcaster.
 * @property {string} [workflow_name] - The name of the workflow related to the
 *   broadcaster.
 * @property {string} [account_id] - The account ID associated with the broadcaster.
 * @property {string} [detail_type] - The type of detail for the broadcaster
 *   configuration.
 */

/**
 * @typedef SubscriberEventMapping
 * @property {number} [id] - The unique identifier for the subscriber event mapping.
 * @property {number} [event_id] - The ID of the event associated with the subscriber.
 * @property {number} [subscriber_id] - The ID of the subscriber.
 * @property {FilterSchema} [filters]
 * @property {Object} [reducer] - The reducer property allows users to customize
 *   the JSON structure of the webhook payload using JSONPath queries. They can
 *   also create new properties by mapping existing ones. Note that it overrides
 *   the entire JSON structure of the webhook payload sent via the webhook. See
 *   the partner documentation's filter and reducer section for details.
 * @property {BroadcasterConfig} [broadcaster_config]
 * @property {string} [created_on] - The date and time when the subscriber event
 *   mapping was created.
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
 * @typedef EventConfig
 * @property {number} [id] - The unique identifier for the event configuration.
 * @property {string} [type] - The type of event configuration, which may be null.
 * @property {string} [event_name] - The name of the event.
 * @property {string} [event_type] - The type of the event.
 * @property {string} [event_category] - The category of the event.
 * @property {string} [modified_by] - The identifier of the user who last
 *   modified the event configuration.
 * @property {SubscriberEventMapping} [subscriber_event_mapping]
 * @property {Object} [event_schema] - The schema for the event, allowing for
 *   additional properties and may be null.
 * @property {string} [group] - The group associated with the event
 *   configuration, which may be null.
 * @property {string} [version] - The version of the event configuration.
 * @property {string} [display_name] - The display name of the event configuration.
 * @property {string} [description] - A description of the event configuration,
 *   which may be null.
 * @property {string} [created_on] - The date and time when the event
 *   configuration was created.
 * @property {string} [updated_on] - The date and time when the event
 *   configuration was last updated.
 */

/**
 * @typedef EventConfigResult
 * @property {EventConfig[]} [event_configs] - List of event configurations.
 */

/**
 * @typedef Association
 * @property {string[]} [application_id] - A list of application IDs associated
 *   with the association.
 * @property {string} [extension_id] - The extension ID associated with the association.
 * @property {string} [criteria] - The criteria for the association, such as
 *   "ALL", "EMPTY", or "SPECIFIC-EVENTS".
 */

/**
 * @typedef AssociationResp
 * @property {number} [company_id] - The ID of the company associated with the response.
 * @property {string[]} [application_id] - A list of application IDs associated
 *   with the response.
 * @property {string} [extension_id] - The extension ID associated with the response.
 * @property {string} [criteria] - The criteria for the response, such as "ALL",
 *   "EMPTY", or "SPECIFIC-EVENTS".
 */

/**
 * @typedef AuthMeta
 * @property {string} [type] - The type of authentication method used.
 * @property {string} [secret] - The secret key or token used for authentication.
 */

/**
 * @typedef SubscriberDetails
 * @property {number} [id] - The unique identifier of the subscriber.
 * @property {string} [modified_by] - The identifier of the user who last
 *   modified the subscriber details.
 * @property {string} [name] - The name of the subscriber.
 * @property {string} [provider] - The provider of the subscriber.
 * @property {string} [webhook_url] - The URL for the subscriber's webhook.
 * @property {string} [source] - Source that subscriber belongs to.
 * @property {AssociationResp} [association]
 * @property {Object} [custom_headers] - Custom headers for the subscriber.
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id] - The email ID associated with the subscriber.
 * @property {string} [updated_on] - The date and time when the subscriber
 *   details were last updated.
 * @property {string} [created_on] - The date and time when the subscriber was created.
 * @property {string} [type] - The type of subscriber, which can either be passed as null.
 * @property {AuthMeta} [auth_meta]
 * @property {EventConfig[]} [event_configs] - List of event configurations.
 */

/**
 * @typedef Events
 * @property {string} [slug] - The slug or identifier for the event.
 * @property {string} [topic] - The topic associated with the event.
 * @property {string} [queue] - The queue associated with the event in case of
 *   provider as Pub/Sub.
 * @property {string} [event_bridge_name] - The name of the event bridge
 *   associated with the event in case of provider as AWS event bridge.
 * @property {string} [workflow_name] - The name of the workflow related to the
 *   event in case of provider as temporal.
 * @property {string} [detail_type] - The type of detail for the event.
 */

/**
 * @typedef SubscriberConfigPostRequestV2
 * @property {string} name - The name of the subscriber.
 * @property {string} [type] - The type of the subscriber, which may be null.
 * @property {string} [webhook_url] - The URL for the subscriber's webhook.
 * @property {string} provider - The provider of the subscriber.
 * @property {Association} association
 * @property {Object} [custom_headers] - Custom headers for the subscriber.
 * @property {SubscriberStatus} status
 * @property {string} email_id - The email ID associated with the subscriber.
 * @property {AuthMeta} [auth_meta]
 * @property {Events[]} events - The list of events associated with the subscriber.
 */

/**
 * @typedef SubscriberConfigUpdateRequestV2
 * @property {number} id - The unique identifier of the subscriber to be updated.
 * @property {string} [name] - The name of the subscriber.
 * @property {string} [type] - The type of the subscriber, which may be null.
 * @property {string} [webhook_url] - The URL for the subscriber's webhook.
 * @property {string} provider - The provider of the subscriber.
 * @property {Association} [association]
 * @property {Object} [custom_headers] - Custom headers for the subscriber.
 * @property {SubscriberStatus} status
 * @property {string} [email_id] - The email ID associated with the subscriber.
 * @property {AuthMeta} [auth_meta]
 * @property {Events[]} [events] - The list of events associated with the subscriber.
 */

/**
 * @typedef SubscriberConfigPost
 * @property {string} name - The name of the subscriber.
 * @property {string} [type] - The type of the subscriber, which can be null.
 * @property {string} webhook_url - The URL for the subscriber's webhook.
 * @property {Association} association
 * @property {Object} [custom_headers] - Custom headers for the subscriber.
 * @property {SubscriberStatus} status
 * @property {string} email_id - The email ID associated with the subscriber.
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} event_id - The list of event IDs associated with the subscriber.
 */

/**
 * @typedef SubscriberConfigUpdate
 * @property {number} id - The unique identifier of the subscriber to be updated.
 * @property {string} [name] - The name of the subscriber.
 * @property {string} [type] - The type of the subscriber, which can be null.
 * @property {string} [webhook_url] - The URL for the subscriber's webhook.
 * @property {Association} [association]
 * @property {Object} [custom_headers] - Custom headers for the subscriber.
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id] - The email ID associated with the subscriber.
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} event_id - The list of event IDs associated with the subscriber.
 */

/**
 * @typedef SubscriberConfigResult
 * @property {number} [id] - The unique identifier of the subscriber configuration.
 * @property {string} [modified_by] - The identifier of the user who last
 *   modified the subscriber configuration.
 * @property {string} [name] - The name of the subscriber.
 * @property {string} [webhook_url] - The URL for the subscriber's webhook.
 * @property {string} [provider] - The provider of the subscriber.
 * @property {AssociationResp} [association]
 * @property {Object} [custom_headers] - Custom headers for the subscriber.
 * @property {SubscriberStatus} [status]
 * @property {string} [source] - Source that subscriber belongs to.
 * @property {string} [email_id] - The email ID associated with the subscriber.
 * @property {string} [updated_on] - The date and time when the subscriber was
 *   last updated.
 * @property {string} [created_on] - The date and time when the subscriber was created.
 * @property {string} [type] - The type of the subscriber, which can be null.
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} [event_id] - The list of event IDs associated with the subscriber.
 */

/**
 * @typedef SubscriberConfigList
 * @property {SubscriberDetails[]} [items] - List of subscriber details.
 * @property {Page} [page]
 */

/**
 * @typedef RestEventData
 * @property {string} event_category - The category of the event.
 * @property {string} event_name - The name of the event.
 * @property {string} event_type - The type of the event.
 * @property {number} version - The version number of the event.
 */

/**
 * @typedef RestConfig
 * @property {string} webhook_url - The URL for the webhook.
 * @property {string} type - The type of the configuration.
 * @property {Object} [custom_headers] - Custom headers for the configuration.
 * @property {AuthMeta} [auth_meta]
 * @property {RestEventData[]} events - List of event data for configuration.
 */

/**
 * @typedef QueueEventData
 * @property {string} event_category - The category of the event.
 * @property {string} event_name - The name of the event.
 * @property {string} event_type - The type of the event.
 * @property {number} version - The version number of the event.
 * @property {string} topic - The topic associated with the event.
 */

/**
 * @typedef KafkaConfig
 * @property {string} [type] - Type of Kafka configuration (optional).
 * @property {QueueEventData[]} events - List of event data for configuration.
 */

/**
 * @typedef PubSubConfig
 * @property {string} [type] - Type of Pub/Sub configuration (optional).
 * @property {QueueEventData[]} events - List of event data for configuration.
 */

/**
 * @typedef TemporalEventData
 * @property {string} event_category - The category of the event.
 * @property {string} event_name - The name of the event.
 * @property {string} event_type - The type of the event.
 * @property {number} version - The version number of the event.
 * @property {string} [queue] - The queue associated with the event.
 * @property {string} [workflow_name] - The workflow name related to the event.
 */

/**
 * @typedef TemporalConfig
 * @property {string} [type] - Type of Temporal configuration (optional).
 * @property {TemporalEventData[]} events - List of event data for configuration.
 */

/**
 * @typedef SqsEventData
 * @property {string} event_category - The category of the event.
 * @property {string} event_name - The name of the event.
 * @property {string} event_type - The type of the event.
 * @property {number} version - The version number of the event.
 * @property {string} [queue] - The queue name associated with the event in SQS.
 */

/**
 * @typedef SqsConfig
 * @property {string} [type] - Type of SQS configuration (optional).
 * @property {SqsEventData[]} events - List of event data for configuration.
 */

/**
 * @typedef EventBridgeData
 * @property {string} event_category - The category of the event.
 * @property {string} event_name - The name of the event.
 * @property {string} event_type - The type of the event.
 * @property {number} version - The version number of the event.
 * @property {string} [event_bridge_name] - The name of the event bridge related
 *   to the event.
 */

/**
 * @typedef EventBridgeConfig
 * @property {string} [type] - Type of event configuration (optional).
 * @property {EventBridgeData[]} events - List of event data for EventBridge
 *   configuration.
 */

/**
 * @typedef EventMapBody
 * @property {RestConfig} [rest]
 * @property {KafkaConfig} [kafka]
 * @property {PubSubConfig} [pub_sub]
 * @property {TemporalConfig} [temporal]
 * @property {SqsConfig} [sqs]
 * @property {EventBridgeConfig} [event_bridge]
 */

/**
 * @typedef WebhookConfig
 * @property {string} [notification_email] - The email address for notifications.
 * @property {string} [name] - The name of the webhook configuration.
 * @property {string} [status] - The status of the webhook (e.g., active or inactive).
 * @property {Association} [association]
 * @property {EventMapBody} [event_map]
 */

/**
 * @typedef UpsertSubscriberConfig
 * @property {WebhookConfig} webhook_config
 */

/**
 * @typedef UpsertSubscriberConfigResult
 * @property {boolean} [status] - The status of the upsert operation (e.g.,
 *   success or failure).
 * @property {string} [message] - A message providing details about the upsert
 *   operation result.
 */

/** @typedef {"active" | "inactive"} SubscriberStatus */

class WebhookPlatformModel {
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
      filters: WebhookPlatformModel.FilterSchema(),
      reducer: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      broadcaster_config: WebhookPlatformModel.BroadcasterConfig(),
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

  /** @returns {EventConfig} */
  static EventConfig() {
    return Joi.object({
      id: Joi.number(),
      type: Joi.string().allow("").allow(null),
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      event_category: Joi.string().allow(""),
      modified_by: Joi.string().allow(""),
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

  /** @returns {EventConfigResult} */
  static EventConfigResult() {
    return Joi.object({
      event_configs: Joi.array().items(WebhookPlatformModel.EventConfig()),
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

  /** @returns {SubscriberDetails} */
  static SubscriberDetails() {
    return Joi.object({
      id: Joi.number(),
      modified_by: Joi.string().allow(""),
      name: Joi.string().allow(""),
      provider: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
      source: Joi.string().allow("").allow(null),
      association: WebhookPlatformModel.AssociationResp(),
      custom_headers: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      queue: Joi.string().allow(""),
      event_bridge_name: Joi.string().allow(""),
      workflow_name: Joi.string().allow(""),
      detail_type: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriberConfigPostRequestV2} */
  static SubscriberConfigPostRequestV2() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      type: Joi.string().allow("").allow(null),
      webhook_url: Joi.string().allow(""),
      provider: Joi.string().allow("").required(),
      association: WebhookPlatformModel.Association().required(),
      custom_headers: Joi.object().pattern(/\S/, Joi.any()),
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
      type: Joi.string().allow("").allow(null),
      webhook_url: Joi.string().allow(""),
      provider: Joi.string().allow("").required(),
      association: WebhookPlatformModel.Association(),
      custom_headers: Joi.object().pattern(/\S/, Joi.any()),
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
      type: Joi.string().allow("").allow(null),
      webhook_url: Joi.string().allow("").required(),
      association: WebhookPlatformModel.Association().required(),
      custom_headers: Joi.object().pattern(/\S/, Joi.any()),
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
      type: Joi.string().allow("").allow(null),
      webhook_url: Joi.string().allow(""),
      association: WebhookPlatformModel.Association(),
      custom_headers: Joi.object().pattern(/\S/, Joi.any()),
      status: WebhookPlatformModel.SubscriberStatus(),
      email_id: Joi.string().allow(""),
      auth_meta: WebhookPlatformModel.AuthMeta(),
      event_id: Joi.array().items(Joi.number()).required(),
    });
  }

  /** @returns {SubscriberConfigResult} */
  static SubscriberConfigResult() {
    return Joi.object({
      id: Joi.number(),
      modified_by: Joi.string().allow(""),
      name: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
      provider: Joi.string().allow(""),
      association: WebhookPlatformModel.AssociationResp(),
      custom_headers: Joi.object().pattern(/\S/, Joi.any()),
      status: WebhookPlatformModel.SubscriberStatus(),
      source: Joi.string().allow("").allow(null),
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
      items: Joi.array().items(WebhookPlatformModel.SubscriberDetails()),
      page: WebhookPlatformModel.Page(),
    });
  }

  /** @returns {RestEventData} */
  static RestEventData() {
    return Joi.object({
      event_category: Joi.string().allow("").required(),
      event_name: Joi.string().allow("").required(),
      event_type: Joi.string().allow("").required(),
      version: Joi.number().required(),
    });
  }

  /** @returns {RestConfig} */
  static RestConfig() {
    return Joi.object({
      webhook_url: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      custom_headers: Joi.object().pattern(/\S/, Joi.any()),
      auth_meta: WebhookPlatformModel.AuthMeta(),
      events: Joi.array()
        .items(WebhookPlatformModel.RestEventData())
        .required(),
    });
  }

  /** @returns {QueueEventData} */
  static QueueEventData() {
    return Joi.object({
      event_category: Joi.string().allow("").required(),
      event_name: Joi.string().allow("").required(),
      event_type: Joi.string().allow("").required(),
      version: Joi.number().required(),
      topic: Joi.string().allow("").required(),
    });
  }

  /** @returns {KafkaConfig} */
  static KafkaConfig() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),
      events: Joi.array()
        .items(WebhookPlatformModel.QueueEventData())
        .required(),
    });
  }

  /** @returns {PubSubConfig} */
  static PubSubConfig() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),
      events: Joi.array()
        .items(WebhookPlatformModel.QueueEventData())
        .required(),
    });
  }

  /** @returns {TemporalEventData} */
  static TemporalEventData() {
    return Joi.object({
      event_category: Joi.string().allow("").required(),
      event_name: Joi.string().allow("").required(),
      event_type: Joi.string().allow("").required(),
      version: Joi.number().required(),
      queue: Joi.string().allow(""),
      workflow_name: Joi.string().allow(""),
    });
  }

  /** @returns {TemporalConfig} */
  static TemporalConfig() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),
      events: Joi.array()
        .items(WebhookPlatformModel.TemporalEventData())
        .required(),
    });
  }

  /** @returns {SqsEventData} */
  static SqsEventData() {
    return Joi.object({
      event_category: Joi.string().allow("").required(),
      event_name: Joi.string().allow("").required(),
      event_type: Joi.string().allow("").required(),
      version: Joi.number().required(),
      queue: Joi.string().allow(""),
    });
  }

  /** @returns {SqsConfig} */
  static SqsConfig() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),
      events: Joi.array().items(WebhookPlatformModel.SqsEventData()).required(),
    });
  }

  /** @returns {EventBridgeData} */
  static EventBridgeData() {
    return Joi.object({
      event_category: Joi.string().allow("").required(),
      event_name: Joi.string().allow("").required(),
      event_type: Joi.string().allow("").required(),
      version: Joi.number().required(),
      event_bridge_name: Joi.string().allow(""),
    });
  }

  /** @returns {EventBridgeConfig} */
  static EventBridgeConfig() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),
      events: Joi.array()
        .items(WebhookPlatformModel.EventBridgeData())
        .required(),
    });
  }

  /** @returns {EventMapBody} */
  static EventMapBody() {
    return Joi.object({
      rest: WebhookPlatformModel.RestConfig(),
      kafka: WebhookPlatformModel.KafkaConfig(),
      pub_sub: WebhookPlatformModel.PubSubConfig(),
      temporal: WebhookPlatformModel.TemporalConfig(),
      sqs: WebhookPlatformModel.SqsConfig(),
      event_bridge: WebhookPlatformModel.EventBridgeConfig(),
    });
  }

  /** @returns {WebhookConfig} */
  static WebhookConfig() {
    return Joi.object({
      notification_email: Joi.string().allow(""),
      name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      association: WebhookPlatformModel.Association(),
      event_map: WebhookPlatformModel.EventMapBody(),
    });
  }

  /** @returns {UpsertSubscriberConfig} */
  static UpsertSubscriberConfig() {
    return Joi.object({
      webhook_config: WebhookPlatformModel.WebhookConfig().required(),
    });
  }

  /** @returns {UpsertSubscriberConfigResult} */
  static UpsertSubscriberConfigResult() {
    return Joi.object({
      status: Joi.boolean(),
      message: Joi.string().allow(""),
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
