const Joi = require("joi");

/**
 * @typedef AddTicketPayload
 * @property {Object} [_custom_json] - Optional custom data that needs to be sent
 * @property {string} category - Category of the ticket
 * @property {TicketContent} content
 * @property {Object} [created_by] - Creator of the ticket
 * @property {PriorityEnum} [priority]
 * @property {string} [status] - Status of the ticket
 */

/**
 * @typedef AgentChangePayload
 * @property {string} agent_id - Agent's unique ID
 */

/**
 * @typedef CloseVideoRoomResponse
 * @property {boolean} success - Denotes if operation was successfully
 */

/**
 * @typedef CreateCustomFormPayload
 * @property {string} [description] - Description of the form
 * @property {string} [header_image] - Header image that is to be shown for the form
 * @property {Object[]} inputs - List of all the form components
 * @property {PollForAssignment} [poll_for_assignment]
 * @property {PriorityEnum} priority
 * @property {boolean} [should_notify] - Indicates if staff should be notified
 *   when a response is received
 * @property {string} slug - Slug for the form
 * @property {string} [success_message] - Success message that will be shown on submission
 * @property {string} title - Title for the form
 */

/**
 * @typedef CreatedOn
 * @property {string} user_agent - Useragent details
 */

/**
 * @typedef CreateVideoRoomPayload
 * @property {NotifyUser[]} [notify] - List of people to be notified
 * @property {string} unique_name - Ticket id
 */

/**
 * @typedef CreateVideoRoomResponse
 * @property {string} unique_name - Video Room's unique name
 */

/**
 * @typedef CustomForm
 * @property {string} _id - Unique identifier for the form
 * @property {string} application_id - Application ID for form
 * @property {CreatedOn} [created_on]
 * @property {string} [description] - Form description that will be shown to the user
 * @property {string} [header_image] - Form header image that will be shown to the user
 * @property {Object[]} inputs - List of all the form fields
 * @property {boolean} login_required - Denotes if login is required to make a
 *   form response submission
 * @property {PollForAssignment} [poll_for_assignment]
 * @property {Priority} priority
 * @property {boolean} should_notify - Denotes if new response submission for
 *   the form should be notified to the assignees
 * @property {string} slug - Slug for the form, which is to be used for accessing the form
 * @property {SubmitButton} [submit_button]
 * @property {string} [success_message] - Message that is to be shown on
 *   succesfull form response submission
 * @property {string} title - Form title that will be shown to the user
 */

/**
 * @typedef CustomFormList
 * @property {CustomForm[]} [items] - List of forms
 * @property {Page} [page]
 */

/**
 * @typedef Debug
 * @property {string} [platform] - Platform of user
 * @property {string} [source] - Source of user
 */

/**
 * @typedef EditCustomFormPayload
 * @property {string} [description] - Description of the form
 * @property {string} [header_image] - Header image that is to be shown for the form
 * @property {Object[]} inputs - List of all the form components
 * @property {boolean} [login_required] - Denotes if login is required to make a
 *   form response submission
 * @property {PollForAssignment} [poll_for_assignment]
 * @property {PriorityEnum} priority
 * @property {boolean} [should_notify] - Indicates if staff should be notified
 *   when a response is received
 * @property {string} [success_message] - Success message that will be shown on submission
 * @property {string} title - Title for the form
 */

/**
 * @typedef EditTicketPayload
 * @property {AgentChangePayload} [assigned_to]
 * @property {string} [category] - Category assigned to the ticket
 * @property {TicketContent} [content]
 * @property {PriorityEnum} [priority]
 * @property {string} [source] - Denotes if the ticket was created at company or
 *   application level
 * @property {string} [status] - Denotes in what state is the ticket
 * @property {string} [sub_category] - Sub-category assigned to the ticket
 * @property {string[]} [tags] - Tags relevant to ticket
 */

/**
 * @typedef Email
 * @property {boolean} [active] - Denotes if the email is active
 * @property {string} [email] - Email Address
 * @property {boolean} [primary] - Denotes it's the primary email for the account
 * @property {boolean} [verified] - Denotes it's a verified email
 */

/**
 * @typedef ErrorMessage
 * @property {string} [message]
 */

/**
 * @typedef FeedbackForm
 * @property {Object} [inputs] - Input details for the feed back form
 * @property {Object} [timestamps] - Gives details of category releted data
 * @property {string} [title] - Title for the feed back form
 */

/**
 * @typedef FeedbackResponseItem
 * @property {string} display - Question/Title of the form field
 * @property {string} key - Key of the form field
 * @property {string} value - User response value for the form field
 */

/**
 * @typedef Filter
 * @property {Object[]} assignees - List of support staff availble for tickets assignment
 * @property {TicketCategory[]} [categories] - List of possible categories for tickets
 * @property {Priority[]} priorities - List of possible priorities for tickets
 * @property {Status[]} statuses - List of possible statuses for tickets
 */

/**
 * @typedef GetParticipantsInsideVideoRoomResponse
 * @property {Participant[]} participants - List of participants of the video room
 */

/**
 * @typedef GetTokenForVideoRoomResponse
 * @property {string} access_token - Access token to be used for video room
 */

/**
 * @typedef NotifyUser
 * @property {string} country_code - Country code
 * @property {string} phone_number - Phone number
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
 * @typedef Participant
 * @property {string} [identity] - Unique identifier of participant
 * @property {string} [status] - Status of participant
 * @property {UserSchema} [user]
 */

/**
 * @typedef PhoneNumber
 * @property {boolean} [active] - Denotes if the phone number is active
 * @property {number} [country_code] - Country code
 * @property {string} [phone] - Phone number
 * @property {boolean} [primary] - Denotes it's the primary phone number for the account
 * @property {boolean} [verified] - Denotes it's a verified phone number
 */

/**
 * @typedef PollForAssignment
 * @property {number} duration - Duration for polling of staff
 * @property {string} failure_message - Message if polling failed
 * @property {string} message - Message for polling
 * @property {string} success_message - Message for successful polling
 */

/**
 * @typedef Priority
 * @property {string} color - Color for priority
 * @property {string} display - Display text for priority
 * @property {PriorityEnum} key
 */

/**
 * @typedef Status
 * @property {string} color - Color for status
 * @property {string} display - Display text for status
 * @property {string} key - Key for status
 */

/**
 * @typedef SubmitButton
 * @property {string} background_color - Color for submit button
 * @property {string} title - Title for submit button
 * @property {string} title_color - Title color submit button
 */

/**
 * @typedef Ticket
 * @property {Object} [_custom_json] - Custom json relevant to the ticket
 * @property {string} _id - Unique identifier for the ticket
 * @property {Object} [assigned_to] - Details of support staff to whom ticket is assigned
 * @property {TicketCategory} category
 * @property {TicketContent} [content]
 * @property {TicketContext} [context]
 * @property {string} [created_at] - Time when the ticket was created
 * @property {Object} [created_by] - User details of ticket creator
 * @property {CreatedOn} [created_on]
 * @property {Object} [integration] - Integration type and its details of the ticket
 * @property {boolean} [is_feedback_pending] - Denotes if feedback submission is
 *   pending for the ticket
 * @property {Priority} priority
 * @property {string} [response_id] - Details of company and application
 *   realated to the ticket
 * @property {TicketSourceEnum} source
 * @property {Status} status
 * @property {string} [sub_category] - Sub-category assigned to the ticket
 * @property {string[]} [tags] - Tags relevant to ticket
 * @property {string} [updated_at] - Time when the ticket was last updated
 */

/**
 * @typedef TicketAsset
 * @property {string} [display] - Display text for asset
 * @property {TicketAssetTypeEnum} type
 * @property {string} value - To be used for details
 */

/**
 * @typedef TicketCategory
 * @property {string} display - Category display value identifier
 * @property {FeedbackForm} [feedback_form]
 * @property {number} [group_id] - Group id of category releted data
 * @property {string} key - Category key value identifier
 * @property {TicketCategory} [sub_categories]
 */

/**
 * @typedef TicketContent
 * @property {TicketAsset[]} [attachments] - List of all attachments related to the ticket
 * @property {string} [description] - Long description of issue
 * @property {string} title - Title for ticket
 */

/**
 * @typedef TicketContext
 * @property {string} [application_id] - Application ID related to the ticket
 * @property {string} company_id - Company ID related to the ticket
 */

/**
 * @typedef TicketFeedback
 * @property {string} _id - Unique identifier for the feedback
 * @property {string} [category] - Category of the ticket
 * @property {string} company_id - Company id for which ticket was raised
 * @property {string} [created_at] - Time when the feedback was created
 * @property {FeedbackResponseItem[]} response
 * @property {string} ticket_id - Readable ticket number
 * @property {string} [updated_at] - Time when the feedback was last updated
 * @property {Object} [user] - User who submitted the feedback
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
 * @typedef TicketHistory
 * @property {string} _id - Unique identifier of the history event
 * @property {string} [created_at] - Time of creation of the history event
 * @property {Object} [created_by] - User who created the history event
 * @property {CreatedOn} [created_on]
 * @property {string} ticket_id - Readable ticket number
 * @property {string} type - Type of the history event
 * @property {string} [updated_at] - Time of last update of the history event
 * @property {Object} value - Data of the history event
 */

/**
 * @typedef TicketHistoryList
 * @property {TicketHistory[]} [items] - List of ticket history
 * @property {Page} [page]
 */

/**
 * @typedef TicketHistoryPayload
 * @property {HistoryTypeEnum} type
 * @property {Object} value - Details of history event
 */

/**
 * @typedef TicketList
 * @property {Filter} [filters]
 * @property {Ticket[]} [items] - List of tickets
 * @property {Page} [page]
 */

/**
 * @typedef UserSchema
 * @property {string} [_id]
 * @property {string} [account_type]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {string} [created_at]
 * @property {string} [dob]
 * @property {Email[]} [emails]
 * @property {string} [external_id]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {Object} [meta]
 * @property {PhoneNumber[]} [phone_numbers]
 * @property {string} [profile_pic_url]
 * @property {string} [updated_at]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/** @typedef {"rating" | "log" | "comment" | "thread"} HistoryTypeEnum */

/** @typedef {"low" | "medium" | "high" | "urgent"} PriorityEnum */

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
  /** @returns {AddTicketPayload} */
  static AddTicketPayload() {
    return Joi.object({
      _custom_json: Joi.any(),
      category: Joi.string().allow("").required(),
      content: LeadPlatformModel.TicketContent().required(),
      created_by: Joi.any(),
      priority: LeadPlatformModel.PriorityEnum(),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {AgentChangePayload} */
  static AgentChangePayload() {
    return Joi.object({
      agent_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {CloseVideoRoomResponse} */
  static CloseVideoRoomResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  /** @returns {CreateCustomFormPayload} */
  static CreateCustomFormPayload() {
    return Joi.object({
      description: Joi.string().allow(""),
      header_image: Joi.string().allow(""),
      inputs: Joi.array().items(Joi.any()).required(),
      poll_for_assignment: LeadPlatformModel.PollForAssignment(),
      priority: LeadPlatformModel.PriorityEnum().required(),
      should_notify: Joi.boolean(),
      slug: Joi.string().allow("").required(),
      success_message: Joi.string().allow(""),
      title: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreatedOn} */
  static CreatedOn() {
    return Joi.object({
      user_agent: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreateVideoRoomPayload} */
  static CreateVideoRoomPayload() {
    return Joi.object({
      notify: Joi.array().items(LeadPlatformModel.NotifyUser()),
      unique_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreateVideoRoomResponse} */
  static CreateVideoRoomResponse() {
    return Joi.object({
      unique_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {CustomForm} */
  static CustomForm() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      application_id: Joi.string().allow("").required(),
      created_on: LeadPlatformModel.CreatedOn(),
      description: Joi.string().allow(""),
      header_image: Joi.string().allow(""),
      inputs: Joi.array().items(Joi.any()).required(),
      login_required: Joi.boolean().required(),
      poll_for_assignment: LeadPlatformModel.PollForAssignment(),
      priority: LeadPlatformModel.Priority().required(),
      should_notify: Joi.boolean().required(),
      slug: Joi.string().allow("").required(),
      submit_button: LeadPlatformModel.SubmitButton(),
      success_message: Joi.string().allow(""),
      title: Joi.string().allow("").required(),
    });
  }

  /** @returns {CustomFormList} */
  static CustomFormList() {
    return Joi.object({
      items: Joi.array().items(LeadPlatformModel.CustomForm()),
      page: LeadPlatformModel.Page(),
    });
  }

  /** @returns {Debug} */
  static Debug() {
    return Joi.object({
      platform: Joi.string().allow(""),
      source: Joi.string().allow(""),
    });
  }

  /** @returns {EditCustomFormPayload} */
  static EditCustomFormPayload() {
    return Joi.object({
      description: Joi.string().allow(""),
      header_image: Joi.string().allow(""),
      inputs: Joi.array().items(Joi.any()).required(),
      login_required: Joi.boolean(),
      poll_for_assignment: LeadPlatformModel.PollForAssignment(),
      priority: LeadPlatformModel.PriorityEnum().required(),
      should_notify: Joi.boolean(),
      success_message: Joi.string().allow(""),
      title: Joi.string().allow("").required(),
    });
  }

  /** @returns {EditTicketPayload} */
  static EditTicketPayload() {
    return Joi.object({
      assigned_to: LeadPlatformModel.AgentChangePayload(),
      category: Joi.string().allow(""),
      content: LeadPlatformModel.TicketContent(),
      priority: LeadPlatformModel.PriorityEnum(),
      source: Joi.string().allow(""),
      status: Joi.string().allow(""),
      sub_category: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Email} */
  static Email() {
    return Joi.object({
      active: Joi.boolean(),
      email: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
    });
  }

  /** @returns {ErrorMessage} */
  static ErrorMessage() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {FeedbackForm} */
  static FeedbackForm() {
    return Joi.object({
      inputs: Joi.any(),
      timestamps: Joi.any(),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {FeedbackResponseItem} */
  static FeedbackResponseItem() {
    return Joi.object({
      display: Joi.string().allow("").required(),
      key: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {Filter} */
  static Filter() {
    return Joi.object({
      assignees: Joi.array().items(Joi.any()).required(),
      categories: Joi.array().items(LeadPlatformModel.TicketCategory()),
      priorities: Joi.array().items(LeadPlatformModel.Priority()).required(),
      statuses: Joi.array().items(LeadPlatformModel.Status()).required(),
    });
  }

  /** @returns {GetParticipantsInsideVideoRoomResponse} */
  static GetParticipantsInsideVideoRoomResponse() {
    return Joi.object({
      participants: Joi.array()
        .items(LeadPlatformModel.Participant())
        .required(),
    });
  }

  /** @returns {GetTokenForVideoRoomResponse} */
  static GetTokenForVideoRoomResponse() {
    return Joi.object({
      access_token: Joi.string().allow("").required(),
    });
  }

  /** @returns {NotifyUser} */
  static NotifyUser() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),
      phone_number: Joi.string().allow("").required(),
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

  /** @returns {Participant} */
  static Participant() {
    return Joi.object({
      identity: Joi.string().allow(""),
      status: Joi.string().allow(""),
      user: LeadPlatformModel.UserSchema(),
    });
  }

  /** @returns {PhoneNumber} */
  static PhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),
      country_code: Joi.number(),
      phone: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
    });
  }

  /** @returns {PollForAssignment} */
  static PollForAssignment() {
    return Joi.object({
      duration: Joi.number().required(),
      failure_message: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
      success_message: Joi.string().allow("").required(),
    });
  }

  /** @returns {Priority} */
  static Priority() {
    return Joi.object({
      color: Joi.string().allow("").required(),
      display: Joi.string().allow("").required(),
      key: LeadPlatformModel.PriorityEnum().required(),
    });
  }

  /** @returns {Status} */
  static Status() {
    return Joi.object({
      color: Joi.string().allow("").required(),
      display: Joi.string().allow("").required(),
      key: Joi.string().allow("").required(),
    });
  }

  /** @returns {SubmitButton} */
  static SubmitButton() {
    return Joi.object({
      background_color: Joi.string().allow("").required(),
      title: Joi.string().allow("").required(),
      title_color: Joi.string().allow("").required(),
    });
  }

  /** @returns {Ticket} */
  static Ticket() {
    return Joi.object({
      _custom_json: Joi.any(),
      _id: Joi.string().allow("").required(),
      assigned_to: Joi.any(),
      category: LeadPlatformModel.TicketCategory().required(),
      content: LeadPlatformModel.TicketContent(),
      context: LeadPlatformModel.TicketContext(),
      created_at: Joi.string().allow(""),
      created_by: Joi.any(),
      created_on: LeadPlatformModel.CreatedOn(),
      integration: Joi.any(),
      is_feedback_pending: Joi.boolean(),
      priority: LeadPlatformModel.Priority().required(),
      response_id: Joi.string().allow(""),
      source: LeadPlatformModel.TicketSourceEnum().required(),
      status: LeadPlatformModel.Status().required(),
      sub_category: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {TicketAsset} */
  static TicketAsset() {
    return Joi.object({
      display: Joi.string().allow(""),
      type: LeadPlatformModel.TicketAssetTypeEnum().required(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {TicketCategory} */
  static TicketCategory() {
    return Joi.object({
      display: Joi.string().allow("").required(),
      feedback_form: LeadPlatformModel.FeedbackForm(),
      group_id: Joi.number(),
      key: Joi.string().allow("").required(),
      sub_categories: Joi.link("#TicketCategory"),
    }).id("TicketCategory");
  }

  /** @returns {TicketContent} */
  static TicketContent() {
    return Joi.object({
      attachments: Joi.array().items(LeadPlatformModel.TicketAsset()),
      description: Joi.string().allow(""),
      title: Joi.string().allow("").required(),
    });
  }

  /** @returns {TicketContext} */
  static TicketContext() {
    return Joi.object({
      application_id: Joi.string().allow(""),
      company_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {TicketFeedback} */
  static TicketFeedback() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      category: Joi.string().allow(""),
      company_id: Joi.string().allow("").required(),
      created_at: Joi.string().allow(""),
      response: Joi.array()
        .items(LeadPlatformModel.FeedbackResponseItem())
        .required(),
      ticket_id: Joi.string().allow("").required(),
      updated_at: Joi.string().allow(""),
      user: Joi.any(),
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

  /** @returns {TicketHistory} */
  static TicketHistory() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      created_at: Joi.string().allow(""),
      created_by: Joi.any(),
      created_on: LeadPlatformModel.CreatedOn(),
      ticket_id: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      updated_at: Joi.string().allow(""),
      value: Joi.any().required(),
    });
  }

  /** @returns {TicketHistoryList} */
  static TicketHistoryList() {
    return Joi.object({
      items: Joi.array().items(LeadPlatformModel.TicketHistory()),
      page: LeadPlatformModel.Page(),
    });
  }

  /** @returns {TicketHistoryPayload} */
  static TicketHistoryPayload() {
    return Joi.object({
      type: LeadPlatformModel.HistoryTypeEnum().required(),
      value: Joi.any().required(),
    });
  }

  /** @returns {TicketList} */
  static TicketList() {
    return Joi.object({
      filters: LeadPlatformModel.Filter(),
      items: Joi.array().items(LeadPlatformModel.Ticket()),
      page: LeadPlatformModel.Page(),
    });
  }

  /** @returns {UserSchema} */
  static UserSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      account_type: Joi.string().allow(""),
      active: Joi.boolean(),
      application_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      dob: Joi.string().allow(""),
      emails: Joi.array().items(LeadPlatformModel.Email()),
      external_id: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      meta: Joi.any(),
      phone_numbers: Joi.array().items(LeadPlatformModel.PhoneNumber()),
      profile_pic_url: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
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
