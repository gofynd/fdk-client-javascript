const Joi = require("joi");

/**
 * @typedef TicketList
 * @property {Ticket[]} [items] - List of tickets
 * @property {Filter} [filters]
 * @property {Page} [page]
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
 * @typedef TicketHistoryList
 * @property {TicketHistory[]} [items] - List of ticket history
 * @property {Page} [page]
 */

/**
 * @typedef EditTicketPayload
 * @property {TicketContent} [content]
 * @property {string} [category] - Category assigned to the ticket
 * @property {string} [sub_category] - Sub-category assigned to the ticket
 * @property {string} [source] - Denotes if the ticket was created at partner or
 *   application level
 * @property {string} [status] - Denotes in what state is the ticket
 * @property {string} [priority]
 * @property {AgentChangePayload} [assigned_to]
 * @property {string[]} [tags] - Tags relevant to ticket
 */

/**
 * @typedef AgentChangePayload
 * @property {string} agent_id - Agent's unique ID
 */

/**
 * @typedef GeneralConfigResponseSchema
 * @property {string} [_id]
 * @property {SupportCommunicationSchema[]} [support_communication]
 * @property {boolean} [show_communication_info]
 * @property {boolean} [show_support_dris]
 * @property {string} [type]
 * @property {GeneralConfigIntegrationSchema} [integration]
 * @property {boolean} [allow_ticket_creation]
 * @property {boolean} [show_listing]
 * @property {string[]} [available_integration]
 * @property {boolean} [enable_dris]
 * @property {SupportSchema} [support_email]
 * @property {SupportSchema} [support_phone]
 * @property {SupportSchema} [support_faq]
 */

/**
 * @typedef SupportSchema
 * @property {string} [value]
 * @property {string} [description]
 * @property {boolean} [enabled]
 */

/**
 * @typedef SupportCommunicationSchema
 * @property {string} [type]
 * @property {string} [title]
 * @property {string} [description]
 * @property {boolean} [enabled]
 */

/**
 * @typedef GeneralConfigIntegrationSchema
 * @property {string} [type]
 */

/**
 * @typedef Filter
 * @property {Priority[]} priorities - List of possible priorities for tickets
 * @property {TicketCategory[]} [categories] - List of possible categories for tickets
 * @property {Status[]} statuses - List of possible statuses for tickets
 * @property {Object[]} [assignees] - List of support staff availble for tickets
 *   assignment
 * @property {Object} [all_categories]
 */

/**
 * @typedef TicketHistoryPayload
 * @property {Object} value - Details of history event
 * @property {string} type
 */

/**
 * @typedef TicketContext
 * @property {string} [application_id] - Application ID related to the ticket
 * @property {string} organization_id - Organization ID related to the ticket
 */

/**
 * @typedef CreatedOn
 * @property {string} user_agent - Useragent details
 * @property {string} [platform]
 */

/**
 * @typedef TicketAsset
 * @property {string} [display] - Display text for asset
 * @property {string} value - To be used for details
 * @property {TicketAssetTypeEnum} type
 */

/**
 * @typedef TicketContent
 * @property {string} title - Title for ticket
 * @property {string} [description] - Long description of issue
 * @property {TicketAsset[]} [attachments] - List of all attachments related to the ticket
 */

/**
 * @typedef AddTicketPayload
 * @property {Object} [created_by] - Creator of the ticket
 * @property {string} [status] - Status of the ticket
 * @property {string} [priority]
 * @property {string} category - Category of the ticket
 * @property {TicketContent} content
 * @property {Object} [_custom_json] - Optional custom data that needs to be sent
 */

/**
 * @typedef Priority
 * @property {string} key - Priority value of the ticket like urgent, low, medium, high.
 * @property {string} display - Display text for priority
 * @property {string} color - Color for priority
 */

/**
 * @typedef SLA
 * @property {string} resolution_time
 */

/**
 * @typedef Status
 * @property {string} key - Key for status
 * @property {string} display - Display text for status
 * @property {string} color - Color for status
 */

/**
 * @typedef FeedbackForm
 * @property {Object} [inputs] - Input details for the feed back form
 * @property {string} [title] - Title for the feed back form
 * @property {Object} [timestamps] - Gives details of category releted data
 */

/**
 * @typedef TicketCategory
 * @property {string} display - Category display value identifier
 * @property {string} key - Category key value identifier
 * @property {TicketCategory[]} [sub_categories]
 * @property {number} [group_id] - Group id of category releted data
 * @property {FeedbackForm} [feedback_form]
 */

/**
 * @typedef TicketHistory
 * @property {string} type - Type of the history event
 * @property {Object} value - Data of the history event
 * @property {string} ticket_id - Readable ticket number
 * @property {CreatedOn} [created_on]
 * @property {Object} [created_by] - User who created the history event
 * @property {string} _id - Unique identifier of the history event
 * @property {string} [updated_at] - Time of last update of the history event
 * @property {string} [created_at] - Time of creation of the history event
 * @property {number} [__v]
 */

/**
 * @typedef Ticket
 * @property {TicketContext} [context]
 * @property {CreatedOn} [created_on]
 * @property {string} [response_id] - Details of partner and application
 *   realated to the ticket
 * @property {TicketContent} [content]
 * @property {TicketCategory} category
 * @property {string} [sub_category] - Sub-category assigned to the ticket
 * @property {string} source
 * @property {Status} status
 * @property {Priority} priority
 * @property {SLA} [sla]
 * @property {Object} [created_by] - User details of ticket creator
 * @property {Object} [assigned_to] - Details of support staff to whom ticket is assigned
 * @property {string[]} [tags] - Tags relevant to ticket
 * @property {string[]} [subscribers]
 * @property {Object} [_custom_json] - Custom json relevant to the ticket
 * @property {boolean} [is_feedback_pending] - Denotes if feedback submission is
 *   pending for the ticket
 * @property {Object} [integration] - Integration type and its details of the ticket
 * @property {string} _id - Unique identifier for the ticket
 * @property {string} [updated_at] - Time when the ticket was last updated
 * @property {string} [created_at] - Time when the ticket was created
 * @property {Object[]} [additional_info]
 * @property {string} [ticket_link]
 * @property {number} [__v]
 */

/**
 * @typedef Error4XX
 * @property {Object} [message]
 * @property {string} [stack]
 * @property {string} [sentry]
 */

/**
 * @typedef NotFoundError
 * @property {string} [message]
 */

/**
 * @typedef {| "image"
 *   | "video"
 *   | "file"
 *   | "youtube"
 *   | "product"
 *   | "collection"
 *   | "brand"
 *   | "shipment"
 *   | "order"} TicketAssetTypeEnum
 */

class LeadPartnerModel {
  /** @returns {TicketList} */
  static TicketList() {
    return Joi.object({
      items: Joi.array().items(LeadPartnerModel.Ticket()),
      filters: LeadPartnerModel.Filter(),
      page: LeadPartnerModel.Page(),
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

  /** @returns {TicketHistoryList} */
  static TicketHistoryList() {
    return Joi.object({
      items: Joi.array().items(LeadPartnerModel.TicketHistory()),
      page: LeadPartnerModel.Page(),
    });
  }

  /** @returns {EditTicketPayload} */
  static EditTicketPayload() {
    return Joi.object({
      content: LeadPartnerModel.TicketContent(),
      category: Joi.string().allow(""),
      sub_category: Joi.string().allow(""),
      source: Joi.string().allow(""),
      status: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      assigned_to: LeadPartnerModel.AgentChangePayload(),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {AgentChangePayload} */
  static AgentChangePayload() {
    return Joi.object({
      agent_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {GeneralConfigResponseSchema} */
  static GeneralConfigResponseSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      support_communication: Joi.array().items(
        LeadPartnerModel.SupportCommunicationSchema()
      ),
      show_communication_info: Joi.boolean(),
      show_support_dris: Joi.boolean(),
      type: Joi.string().allow(""),
      integration: LeadPartnerModel.GeneralConfigIntegrationSchema(),
      allow_ticket_creation: Joi.boolean(),
      show_listing: Joi.boolean(),
      available_integration: Joi.array().items(Joi.string().allow("")),
      enable_dris: Joi.boolean(),
      support_email: LeadPartnerModel.SupportSchema(),
      support_phone: LeadPartnerModel.SupportSchema(),
      support_faq: LeadPartnerModel.SupportSchema(),
    });
  }

  /** @returns {SupportSchema} */
  static SupportSchema() {
    return Joi.object({
      value: Joi.string().allow(""),
      description: Joi.string().allow(""),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {SupportCommunicationSchema} */
  static SupportCommunicationSchema() {
    return Joi.object({
      type: Joi.string().allow(""),
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {GeneralConfigIntegrationSchema} */
  static GeneralConfigIntegrationSchema() {
    return Joi.object({
      type: Joi.string().allow(""),
    });
  }

  /** @returns {Filter} */
  static Filter() {
    return Joi.object({
      priorities: Joi.array().items(LeadPartnerModel.Priority()).required(),
      categories: Joi.array().items(LeadPartnerModel.TicketCategory()),
      statuses: Joi.array().items(LeadPartnerModel.Status()).required(),
      assignees: Joi.array().items(Joi.any()),
      all_categories: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {TicketHistoryPayload} */
  static TicketHistoryPayload() {
    return Joi.object({
      value: Joi.object().pattern(/\S/, Joi.any()).required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {TicketContext} */
  static TicketContext() {
    return Joi.object({
      application_id: Joi.string().allow(""),
      organization_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreatedOn} */
  static CreatedOn() {
    return Joi.object({
      user_agent: Joi.string().allow("").required(),
      platform: Joi.string().allow(""),
    });
  }

  /** @returns {TicketAsset} */
  static TicketAsset() {
    return Joi.object({
      display: Joi.string().allow(""),
      value: Joi.string().allow("").required(),
      type: LeadPartnerModel.TicketAssetTypeEnum().required(),
    });
  }

  /** @returns {TicketContent} */
  static TicketContent() {
    return Joi.object({
      title: Joi.string().allow("").required(),
      description: Joi.string().allow(""),
      attachments: Joi.array().items(LeadPartnerModel.TicketAsset()),
    });
  }

  /** @returns {AddTicketPayload} */
  static AddTicketPayload() {
    return Joi.object({
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      status: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      category: Joi.string().allow("").required(),
      content: LeadPartnerModel.TicketContent().required(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {Priority} */
  static Priority() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      display: Joi.string().allow("").required(),
      color: Joi.string().allow("").required(),
    });
  }

  /** @returns {SLA} */
  static SLA() {
    return Joi.object({
      resolution_time: Joi.string().allow("").required(),
    });
  }

  /** @returns {Status} */
  static Status() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      display: Joi.string().allow("").required(),
      color: Joi.string().allow("").required(),
    });
  }

  /** @returns {FeedbackForm} */
  static FeedbackForm() {
    return Joi.object({
      inputs: Joi.object().pattern(/\S/, Joi.any()),
      title: Joi.string().allow(""),
      timestamps: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {TicketCategory} */
  static TicketCategory() {
    return Joi.object({
      display: Joi.string().allow("").required(),
      key: Joi.string().allow("").required(),
      sub_categories: Joi.array().items(Joi.link("#TicketCategory")),
      group_id: Joi.number(),
      feedback_form: LeadPartnerModel.FeedbackForm(),
    }).id("TicketCategory");
  }

  /** @returns {TicketHistory} */
  static TicketHistory() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      value: Joi.object().pattern(/\S/, Joi.any()).required(),
      ticket_id: Joi.string().allow("").required(),
      created_on: LeadPartnerModel.CreatedOn(),
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      _id: Joi.string().allow("").required(),
      updated_at: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {Ticket} */
  static Ticket() {
    return Joi.object({
      context: LeadPartnerModel.TicketContext(),
      created_on: LeadPartnerModel.CreatedOn(),
      response_id: Joi.string().allow(""),
      content: LeadPartnerModel.TicketContent(),
      category: LeadPartnerModel.TicketCategory().required(),
      sub_category: Joi.string().allow(""),
      source: Joi.string().allow("").required(),
      status: LeadPartnerModel.Status().required(),
      priority: LeadPartnerModel.Priority().required(),
      sla: LeadPartnerModel.SLA(),
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      assigned_to: Joi.object().pattern(/\S/, Joi.any()),
      tags: Joi.array().items(Joi.string().allow("")),
      subscribers: Joi.array().items(Joi.string().allow("")),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      is_feedback_pending: Joi.boolean(),
      integration: Joi.object().pattern(/\S/, Joi.any()),
      _id: Joi.string().allow("").required(),
      updated_at: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      additional_info: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      ticket_link: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {Error4XX} */
  static Error4XX() {
    return Joi.object({
      message: Joi.object().pattern(/\S/, Joi.any()),
      stack: Joi.string().allow(""),
      sentry: Joi.string().allow(""),
    });
  }

  /** @returns {NotFoundError} */
  static NotFoundError() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /**
   * Enum: TicketAssetTypeEnum Used By: Lead
   *
   * @returns {TicketAssetTypeEnum}
   */
  static TicketAssetTypeEnum() {
    return Joi.string().valid(
      "image",

      "video",

      "file",

      "youtube",

      "product",

      "collection",

      "brand",

      "shipment",

      "order"
    );
  }
}
module.exports = LeadPartnerModel;
