const Joi = require("joi");

/**
 * @typedef GeneralConfigResponse
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
 * @typedef SupportCommunicationSchema
 * @property {string} [type]
 * @property {string} [title]
 * @property {string} [description]
 * @property {boolean} [enabled]
 */

/**
 * @typedef SupportSchema
 * @property {string} [value]
 * @property {string} [description]
 * @property {boolean} [enabled]
 */

/**
 * @typedef GeneralConfigIntegrationSchema
 * @property {string} [type]
 */

/**
 * @typedef TicketList
 * @property {Ticket[]} [items] - List of tickets
 * @property {Filter} [filters]
 * @property {Page} [page]
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
 * @typedef TicketHistoryList
 * @property {TicketHistory[]} [items] - List of ticket history
 * @property {Page} [page]
 */

/**
 * @typedef CustomFormList
 * @property {CustomForm[]} [items] - List of forms
 * @property {Page} [page]
 */

/**
 * @typedef CreateCustomFormPayload
 * @property {string} slug - Slug for the form
 * @property {string} title - Title for the form
 * @property {Object[]} inputs - List of all the form components
 * @property {string} [description] - Description of the form
 * @property {string} [header_image] - Header image that is to be shown for the form
 * @property {PriorityEnum} priority
 * @property {boolean} [should_notify] - Indicates if staff should be notified
 *   when a response is received
 * @property {string} [success_message] - Success message that will be shown on submission
 * @property {PollForAssignment} [poll_for_assignment]
 */

/**
 * @typedef EditCustomFormPayload
 * @property {string} title - Title for the form
 * @property {Object[]} inputs - List of all the form components
 * @property {string} [description] - Description of the form
 * @property {PriorityEnum} priority
 * @property {string} [header_image] - Header image that is to be shown for the form
 * @property {boolean} [should_notify] - Indicates if staff should be notified
 *   when a response is received
 * @property {boolean} [login_required] - Denotes if login is required to make a
 *   form response submission
 * @property {string} [success_message] - Success message that will be shown on submission
 * @property {PollForAssignment} [poll_for_assignment]
 */

/**
 * @typedef EditTicketPayload
 * @property {TicketContent} [content]
 * @property {string} [category] - Category assigned to the ticket
 * @property {string} [sub_category] - Sub-category assigned to the ticket
 * @property {string} [source] - Denotes if the ticket was created at company or
 *   application level
 * @property {string} [status] - Denotes in what state is the ticket
 * @property {PriorityEnum} [priority]
 * @property {AgentChangePayload} [assigned_to]
 * @property {string[]} [tags] - Tags relevant to ticket
 */

/**
 * @typedef AgentChangePayload
 * @property {string} agent_id - Agent's unique ID
 */

/**
 * @typedef Filter
 * @property {Priority[]} priorities - List of possible priorities for tickets
 * @property {TicketCategory[]} [categories] - List of possible categories for tickets
 * @property {Status[]} statuses - List of possible statuses for tickets
 * @property {Object[]} assignees - List of support staff availble for tickets assignment
 */

/**
 * @typedef TicketHistoryPayload
 * @property {Object} value - Details of history event
 * @property {HistoryTypeEnum} type
 */

/**
 * @typedef TicketContext
 * @property {string} [application_id] - Application ID related to the ticket
 * @property {string} company_id - Company ID related to the ticket
 */

/**
 * @typedef CreatedOn
 * @property {string} user_agent - Useragent details
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
 * @property {PriorityEnum} [priority]
 * @property {string} category - Category of the ticket
 * @property {TicketContent} content
 * @property {Object} [_custom_json] - Optional custom data that needs to be sent
 */

/**
 * @typedef Priority
 * @property {PriorityEnum} key
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
 * @typedef TicketFeedbackList
 * @property {TicketFeedback[]} [items] - List of all ticket feedback for the ticket
 */

/**
 * @typedef TicketFeedbackPayload
 * @property {Object} [form_response] - Key-value pairs of all the form fields
 *   and their response
 */

/**
 * @typedef SubmitButton
 * @property {string} title - Title for submit button
 * @property {string} title_color - Title color submit button
 * @property {string} background_color - Color for submit button
 */

/**
 * @typedef PollForAssignment
 * @property {number} duration - Duration for polling of staff
 * @property {string} message - Message for polling
 * @property {string} success_message - Message for successful polling
 * @property {string} failure_message - Message if polling failed
 */

/**
 * @typedef CustomForm
 * @property {string} application_id - Application ID for form
 * @property {string} slug - Slug for the form, which is to be used for accessing the form
 * @property {string} [header_image] - Form header image that will be shown to the user
 * @property {string} title - Form title that will be shown to the user
 * @property {string} [description] - Form description that will be shown to the user
 * @property {Priority} priority
 * @property {boolean} login_required - Denotes if login is required to make a
 *   form response submission
 * @property {boolean} should_notify - Denotes if new response submission for
 *   the form should be notified to the assignees
 * @property {string} [success_message] - Message that is to be shown on
 *   succesfull form response submission
 * @property {SubmitButton} [submit_button]
 * @property {Object[]} inputs - List of all the form fields
 * @property {CreatedOn} [created_on]
 * @property {PollForAssignment} [poll_for_assignment]
 * @property {string} _id - Unique identifier for the form
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
 * @property {TicketCategory} [sub_categories]
 * @property {number} [group_id] - Group id of category releted data
 * @property {FeedbackForm} [feedback_form]
 */

/**
 * @typedef FeedbackResponseItem
 * @property {string} display - Question/Title of the form field
 * @property {string} key - Key of the form field
 * @property {string} value - User response value for the form field
 */

/**
 * @typedef TicketFeedback
 * @property {string} _id - Unique identifier for the feedback
 * @property {string} ticket_id - Readable ticket number
 * @property {string} company_id - Company id for which ticket was raised
 * @property {FeedbackResponseItem[]} response
 * @property {string} [category] - Category of the ticket
 * @property {Object} [user] - User who submitted the feedback
 * @property {string} [updated_at] - Time when the feedback was last updated
 * @property {string} [created_at] - Time when the feedback was created
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
 */

/**
 * @typedef Ticket
 * @property {TicketContext} [context]
 * @property {CreatedOn} [created_on]
 * @property {string} [response_id] - Details of company and application
 *   realated to the ticket
 * @property {TicketContent} [content]
 * @property {TicketCategory} category
 * @property {string} [sub_category] - Sub-category assigned to the ticket
 * @property {TicketSourceEnum} source
 * @property {Status} status
 * @property {Priority} priority
 * @property {SLA} [sla]
 * @property {Object} [created_by] - User details of ticket creator
 * @property {Object} [assigned_to] - Details of support staff to whom ticket is assigned
 * @property {string[]} [tags] - Tags relevant to ticket
 * @property {Object} [_custom_json] - Custom json relevant to the ticket
 * @property {boolean} [is_feedback_pending] - Denotes if feedback submission is
 *   pending for the ticket
 * @property {Object} [integration] - Integration type and its details of the ticket
 * @property {string} _id - Unique identifier for the ticket
 * @property {string} [updated_at] - Time when the ticket was last updated
 * @property {string} [created_at] - Time when the ticket was created
 */

/**
 * @typedef ErrorMessage
 * @property {string} [message]
 */

/** @typedef {"low" | "medium" | "high" | "urgent"} PriorityEnum */

/** @typedef {"rating" | "log" | "comment" | "thread"} HistoryTypeEnum */

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

/** @typedef {"platform_panel" | "sales_channel"} TicketSourceEnum */

class LeadPlatformModel {
  /** @returns {GeneralConfigResponse} */
  static GeneralConfigResponse() {
    return Joi.object({
      _id: Joi.string().allow(""),
      support_communication: Joi.array().items(
        LeadPlatformModel.SupportCommunicationSchema()
      ),
      show_communication_info: Joi.boolean(),
      show_support_dris: Joi.boolean(),
      type: Joi.string().allow(""),
      integration: LeadPlatformModel.GeneralConfigIntegrationSchema(),
      allow_ticket_creation: Joi.boolean(),
      show_listing: Joi.boolean(),
      available_integration: Joi.array().items(Joi.string().allow("")),
      enable_dris: Joi.boolean(),
      support_email: LeadPlatformModel.SupportSchema(),
      support_phone: LeadPlatformModel.SupportSchema(),
      support_faq: LeadPlatformModel.SupportSchema(),
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

  /** @returns {SupportSchema} */
  static SupportSchema() {
    return Joi.object({
      value: Joi.string().allow(""),
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

  /** @returns {TicketList} */
  static TicketList() {
    return Joi.object({
      items: Joi.array().items(LeadPlatformModel.Ticket()),
      filters: LeadPlatformModel.Filter(),
      page: LeadPlatformModel.Page(),
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

  /** @returns {TicketHistoryList} */
  static TicketHistoryList() {
    return Joi.object({
      items: Joi.array().items(LeadPlatformModel.TicketHistory()),
      page: LeadPlatformModel.Page(),
    });
  }

  /** @returns {CustomFormList} */
  static CustomFormList() {
    return Joi.object({
      items: Joi.array().items(LeadPlatformModel.CustomForm()),
      page: LeadPlatformModel.Page(),
    });
  }

  /** @returns {CreateCustomFormPayload} */
  static CreateCustomFormPayload() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      title: Joi.string().allow("").required(),
      inputs: Joi.array().items(Joi.any()).required(),
      description: Joi.string().allow(""),
      header_image: Joi.string().allow(""),
      priority: LeadPlatformModel.PriorityEnum().required(),
      should_notify: Joi.boolean(),
      success_message: Joi.string().allow(""),
      poll_for_assignment: LeadPlatformModel.PollForAssignment(),
    });
  }

  /** @returns {EditCustomFormPayload} */
  static EditCustomFormPayload() {
    return Joi.object({
      title: Joi.string().allow("").required(),
      inputs: Joi.array().items(Joi.any()).required(),
      description: Joi.string().allow(""),
      priority: LeadPlatformModel.PriorityEnum().required(),
      header_image: Joi.string().allow(""),
      should_notify: Joi.boolean(),
      login_required: Joi.boolean(),
      success_message: Joi.string().allow(""),
      poll_for_assignment: LeadPlatformModel.PollForAssignment(),
    });
  }

  /** @returns {EditTicketPayload} */
  static EditTicketPayload() {
    return Joi.object({
      content: LeadPlatformModel.TicketContent(),
      category: Joi.string().allow(""),
      sub_category: Joi.string().allow(""),
      source: Joi.string().allow(""),
      status: Joi.string().allow(""),
      priority: LeadPlatformModel.PriorityEnum(),
      assigned_to: LeadPlatformModel.AgentChangePayload(),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {AgentChangePayload} */
  static AgentChangePayload() {
    return Joi.object({
      agent_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {Filter} */
  static Filter() {
    return Joi.object({
      priorities: Joi.array().items(LeadPlatformModel.Priority()).required(),
      categories: Joi.array().items(LeadPlatformModel.TicketCategory()),
      statuses: Joi.array().items(LeadPlatformModel.Status()).required(),
      assignees: Joi.array().items(Joi.any()).required(),
    });
  }

  /** @returns {TicketHistoryPayload} */
  static TicketHistoryPayload() {
    return Joi.object({
      value: Joi.any().required(),
      type: LeadPlatformModel.HistoryTypeEnum().required(),
    });
  }

  /** @returns {TicketContext} */
  static TicketContext() {
    return Joi.object({
      application_id: Joi.string().allow(""),
      company_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreatedOn} */
  static CreatedOn() {
    return Joi.object({
      user_agent: Joi.string().allow("").required(),
    });
  }

  /** @returns {TicketAsset} */
  static TicketAsset() {
    return Joi.object({
      display: Joi.string().allow(""),
      value: Joi.string().allow("").required(),
      type: LeadPlatformModel.TicketAssetTypeEnum().required(),
    });
  }

  /** @returns {TicketContent} */
  static TicketContent() {
    return Joi.object({
      title: Joi.string().allow("").required(),
      description: Joi.string().allow(""),
      attachments: Joi.array().items(LeadPlatformModel.TicketAsset()),
    });
  }

  /** @returns {AddTicketPayload} */
  static AddTicketPayload() {
    return Joi.object({
      created_by: Joi.any(),
      status: Joi.string().allow(""),
      priority: LeadPlatformModel.PriorityEnum(),
      category: Joi.string().allow("").required(),
      content: LeadPlatformModel.TicketContent().required(),
      _custom_json: Joi.any(),
    });
  }

  /** @returns {Priority} */
  static Priority() {
    return Joi.object({
      key: LeadPlatformModel.PriorityEnum().required(),
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

  /** @returns {TicketFeedbackList} */
  static TicketFeedbackList() {
    return Joi.object({
      items: Joi.array().items(LeadPlatformModel.TicketFeedback()),
    });
  }

  /** @returns {TicketFeedbackPayload} */
  static TicketFeedbackPayload() {
    return Joi.object({
      form_response: Joi.any(),
    });
  }

  /** @returns {SubmitButton} */
  static SubmitButton() {
    return Joi.object({
      title: Joi.string().allow("").required(),
      title_color: Joi.string().allow("").required(),
      background_color: Joi.string().allow("").required(),
    });
  }

  /** @returns {PollForAssignment} */
  static PollForAssignment() {
    return Joi.object({
      duration: Joi.number().required(),
      message: Joi.string().allow("").required(),
      success_message: Joi.string().allow("").required(),
      failure_message: Joi.string().allow("").required(),
    });
  }

  /** @returns {CustomForm} */
  static CustomForm() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      header_image: Joi.string().allow(""),
      title: Joi.string().allow("").required(),
      description: Joi.string().allow(""),
      priority: LeadPlatformModel.Priority().required(),
      login_required: Joi.boolean().required(),
      should_notify: Joi.boolean().required(),
      success_message: Joi.string().allow(""),
      submit_button: LeadPlatformModel.SubmitButton(),
      inputs: Joi.array().items(Joi.any()).required(),
      created_on: LeadPlatformModel.CreatedOn(),
      poll_for_assignment: LeadPlatformModel.PollForAssignment(),
      _id: Joi.string().allow("").required(),
    });
  }

  /** @returns {FeedbackForm} */
  static FeedbackForm() {
    return Joi.object({
      inputs: Joi.any(),
      title: Joi.string().allow(""),
      timestamps: Joi.any(),
    });
  }

  /** @returns {TicketCategory} */
  static TicketCategory() {
    return Joi.object({
      display: Joi.string().allow("").required(),
      key: Joi.string().allow("").required(),
      sub_categories: Joi.link("#TicketCategory"),
      group_id: Joi.number(),
      feedback_form: LeadPlatformModel.FeedbackForm(),
    }).id("TicketCategory");
  }

  /** @returns {FeedbackResponseItem} */
  static FeedbackResponseItem() {
    return Joi.object({
      display: Joi.string().allow("").required(),
      key: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {TicketFeedback} */
  static TicketFeedback() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      ticket_id: Joi.string().allow("").required(),
      company_id: Joi.string().allow("").required(),
      response: Joi.array()
        .items(LeadPlatformModel.FeedbackResponseItem())
        .required(),
      category: Joi.string().allow(""),
      user: Joi.any(),
      updated_at: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
    });
  }

  /** @returns {TicketHistory} */
  static TicketHistory() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      value: Joi.any().required(),
      ticket_id: Joi.string().allow("").required(),
      created_on: LeadPlatformModel.CreatedOn(),
      created_by: Joi.any(),
      _id: Joi.string().allow("").required(),
      updated_at: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
    });
  }

  /** @returns {Ticket} */
  static Ticket() {
    return Joi.object({
      context: LeadPlatformModel.TicketContext(),
      created_on: LeadPlatformModel.CreatedOn(),
      response_id: Joi.string().allow(""),
      content: LeadPlatformModel.TicketContent(),
      category: LeadPlatformModel.TicketCategory().required(),
      sub_category: Joi.string().allow(""),
      source: LeadPlatformModel.TicketSourceEnum().required(),
      status: LeadPlatformModel.Status().required(),
      priority: LeadPlatformModel.Priority().required(),
      sla: LeadPlatformModel.SLA(),
      created_by: Joi.any(),
      assigned_to: Joi.any(),
      tags: Joi.array().items(Joi.string().allow("")),
      _custom_json: Joi.any(),
      is_feedback_pending: Joi.boolean(),
      integration: Joi.any(),
      _id: Joi.string().allow("").required(),
      updated_at: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
    });
  }

  /** @returns {ErrorMessage} */
  static ErrorMessage() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /**
   * Enum: PriorityEnum Used By: Lead
   *
   * @returns {PriorityEnum}
   */
  static PriorityEnum() {
    return Joi.string().valid(
      "low",

      "medium",

      "high",

      "urgent"
    );
  }

  /**
   * Enum: HistoryTypeEnum Used By: Lead
   *
   * @returns {HistoryTypeEnum}
   */
  static HistoryTypeEnum() {
    return Joi.string().valid(
      "rating",

      "log",

      "comment",

      "thread"
    );
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

  /**
   * Enum: TicketSourceEnum Used By: Lead
   *
   * @returns {TicketSourceEnum}
   */
  static TicketSourceEnum() {
    return Joi.string().valid(
      "platform_panel",

      "sales_channel"
    );
  }
}
module.exports = LeadPlatformModel;
