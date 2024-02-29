const Joi = require("joi");

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
 * @property {string} [source] - Denotes if the ticket was created at partner or
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
 * @typedef CreateVideoRoomResponse
 * @property {string} unique_name - Video Room's unique name
 */

/**
 * @typedef CloseVideoRoomResponse
 * @property {boolean} success - Denotes if operation was successfully
 */

/**
 * @typedef GeneralConfigResponse
 * @property {SupportCommunicationSchema[]} [support_communication]
 * @property {string} [type]
 * @property {GeneralConfigIntegrationSchema} [integration]
 * @property {string[]} [available_integration]
 */

/**
 * @typedef SupportCommunicationSchema
 * @property {string} [type]
 * @property {string} [title]
 * @property {Object} [value]
 * @property {string} [description]
 * @property {boolean} [enabled]
 */

/**
 * @typedef GeneralConfigIntegrationSchema
 * @property {string} [type]
 */

/**
 * @typedef CreateVideoRoomPayload
 * @property {string} unique_name - Ticket id
 * @property {NotifyUser[]} [notify] - List of people to be notified
 */

/**
 * @typedef NotifyUser
 * @property {string} country_code - Country code
 * @property {string} phone_number - Phone number
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
 * @typedef GetTokenForVideoRoomResponse
 * @property {string} access_token - Access token to be used for video room
 */

/**
 * @typedef GetParticipantsInsideVideoRoomResponse
 * @property {Participant[]} participants - List of participants of the video room
 */

/**
 * @typedef Participant
 * @property {UserSchema} [user]
 * @property {string} [identity] - Unique identifier of participant
 * @property {string} [status] - Status of participant
 */

/**
 * @typedef UserSchema
 * @property {string} [first_name] - First name
 * @property {string} [last_name] - Last name
 * @property {PhoneNumber[]} [phone_numbers] - List of phone numbers
 * @property {Email[]} [emails] - List of email addresses
 * @property {string} [gender] - Gender of user
 * @property {boolean} [active] - Is account active
 * @property {string} [profile_pic_url] - URL for profile pic
 * @property {string} [username] - Username of user
 * @property {string} [account_type] - Type of account
 * @property {string} [uid] - Unique identifier of user
 * @property {Debug} [debug]
 * @property {boolean} [has_old_password_hash] - Denotes if user has old password hash
 * @property {string} [_id] - Unique identifier of user
 * @property {string} [created_at] - Time of user creation
 * @property {string} [updated_at] - Last time of user details update
 */

/**
 * @typedef PhoneNumber
 * @property {boolean} [active] - Denotes if the phone number is active
 * @property {boolean} [primary] - Denotes it's the primary phone number for the account
 * @property {boolean} [verified] - Denotes it's a verified phone number
 * @property {string} [phone] - Phone number
 * @property {number} [country_code] - Country code
 */

/**
 * @typedef Email
 * @property {boolean} [primary] - Denotes it's the primary email for the account
 * @property {boolean} [verified] - Denotes it's a verified email
 * @property {string} [email] - Email Address
 * @property {boolean} [active] - Denotes if the email is active
 */

/**
 * @typedef Debug
 * @property {string} [source] - Source of user
 * @property {string} [platform] - Platform of user
 */

/**
 * @typedef TicketContext
 * @property {string} [application_id] - Application ID related to the ticket
 * @property {string} partner_id - Partner ID related to the ticket
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
 * @property {string} partner_id - Partner id for which ticket was raised
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
 * @property {string} [response_id] - Details of partner and application
 *   realated to the ticket
 * @property {TicketContent} [content]
 * @property {TicketCategory} category
 * @property {string} [sub_category] - Sub-category assigned to the ticket
 * @property {TicketSourceEnum} source
 * @property {Status} status
 * @property {Priority} priority
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

/** @typedef {"low" | "medium" | "high" | "urgent"} PriorityEnum */

/** @typedef {"rating" | "log" | "comment"} HistoryTypeEnum */

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
    });
  }

  /** @returns {TicketHistoryList} */
  static TicketHistoryList() {
    return Joi.object({
      items: Joi.array().items(LeadPartnerModel.TicketHistory()),
      page: LeadPartnerModel.Page(),
    });
  }

  /** @returns {CustomFormList} */
  static CustomFormList() {
    return Joi.object({
      items: Joi.array().items(LeadPartnerModel.CustomForm()),
      page: LeadPartnerModel.Page(),
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
      priority: LeadPartnerModel.PriorityEnum().required(),
      should_notify: Joi.boolean(),
      success_message: Joi.string().allow(""),
      poll_for_assignment: LeadPartnerModel.PollForAssignment(),
    });
  }

  /** @returns {EditCustomFormPayload} */
  static EditCustomFormPayload() {
    return Joi.object({
      title: Joi.string().allow("").required(),
      inputs: Joi.array().items(Joi.any()).required(),
      description: Joi.string().allow(""),
      priority: LeadPartnerModel.PriorityEnum().required(),
      header_image: Joi.string().allow(""),
      should_notify: Joi.boolean(),
      login_required: Joi.boolean(),
      success_message: Joi.string().allow(""),
      poll_for_assignment: LeadPartnerModel.PollForAssignment(),
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
      priority: LeadPartnerModel.PriorityEnum(),
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

  /** @returns {CreateVideoRoomResponse} */
  static CreateVideoRoomResponse() {
    return Joi.object({
      unique_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {CloseVideoRoomResponse} */
  static CloseVideoRoomResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  /** @returns {GeneralConfigResponse} */
  static GeneralConfigResponse() {
    return Joi.object({
      support_communication: Joi.array().items(
        LeadPartnerModel.SupportCommunicationSchema()
      ),
      type: Joi.string().allow(""),
      integration: LeadPartnerModel.GeneralConfigIntegrationSchema(),
      available_integration: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {SupportCommunicationSchema} */
  static SupportCommunicationSchema() {
    return Joi.object({
      type: Joi.string().allow(""),
      title: Joi.string().allow(""),
      value: Joi.any(),
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

  /** @returns {CreateVideoRoomPayload} */
  static CreateVideoRoomPayload() {
    return Joi.object({
      unique_name: Joi.string().allow("").required(),
      notify: Joi.array().items(LeadPartnerModel.NotifyUser()),
    });
  }

  /** @returns {NotifyUser} */
  static NotifyUser() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),
      phone_number: Joi.string().allow("").required(),
    });
  }

  /** @returns {Filter} */
  static Filter() {
    return Joi.object({
      priorities: Joi.array().items(LeadPartnerModel.Priority()).required(),
      categories: Joi.array().items(LeadPartnerModel.TicketCategory()),
      statuses: Joi.array().items(LeadPartnerModel.Status()).required(),
      assignees: Joi.array().items(Joi.any()).required(),
    });
  }

  /** @returns {TicketHistoryPayload} */
  static TicketHistoryPayload() {
    return Joi.object({
      value: Joi.any().required(),
      type: LeadPartnerModel.HistoryTypeEnum().required(),
    });
  }

  /** @returns {GetTokenForVideoRoomResponse} */
  static GetTokenForVideoRoomResponse() {
    return Joi.object({
      access_token: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetParticipantsInsideVideoRoomResponse} */
  static GetParticipantsInsideVideoRoomResponse() {
    return Joi.object({
      participants: Joi.array()
        .items(LeadPartnerModel.Participant())
        .required(),
    });
  }

  /** @returns {Participant} */
  static Participant() {
    return Joi.object({
      user: LeadPartnerModel.UserSchema(),
      identity: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {UserSchema} */
  static UserSchema() {
    return Joi.object({
      first_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      phone_numbers: Joi.array().items(LeadPartnerModel.PhoneNumber()),
      emails: Joi.array().items(LeadPartnerModel.Email()),
      gender: Joi.string().allow(""),
      active: Joi.boolean(),
      profile_pic_url: Joi.string().allow(""),
      username: Joi.string().allow(""),
      account_type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      debug: LeadPartnerModel.Debug(),
      has_old_password_hash: Joi.boolean(),
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {PhoneNumber} */
  static PhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
      phone: Joi.string().allow(""),
      country_code: Joi.number(),
    });
  }

  /** @returns {Email} */
  static Email() {
    return Joi.object({
      primary: Joi.boolean(),
      verified: Joi.boolean(),
      email: Joi.string().allow(""),
      active: Joi.boolean(),
    });
  }

  /** @returns {Debug} */
  static Debug() {
    return Joi.object({
      source: Joi.string().allow(""),
      platform: Joi.string().allow(""),
    });
  }

  /** @returns {TicketContext} */
  static TicketContext() {
    return Joi.object({
      application_id: Joi.string().allow(""),
      partner_id: Joi.string().allow("").required(),
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
      created_by: Joi.any(),
      status: Joi.string().allow(""),
      priority: LeadPartnerModel.PriorityEnum(),
      category: Joi.string().allow("").required(),
      content: LeadPartnerModel.TicketContent().required(),
      _custom_json: Joi.any(),
    });
  }

  /** @returns {Priority} */
  static Priority() {
    return Joi.object({
      key: LeadPartnerModel.PriorityEnum().required(),
      display: Joi.string().allow("").required(),
      color: Joi.string().allow("").required(),
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
      items: Joi.array().items(LeadPartnerModel.TicketFeedback()),
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
      priority: LeadPartnerModel.Priority().required(),
      login_required: Joi.boolean().required(),
      should_notify: Joi.boolean().required(),
      success_message: Joi.string().allow(""),
      submit_button: LeadPartnerModel.SubmitButton(),
      inputs: Joi.array().items(Joi.any()).required(),
      created_on: LeadPartnerModel.CreatedOn(),
      poll_for_assignment: LeadPartnerModel.PollForAssignment(),
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
      feedback_form: LeadPartnerModel.FeedbackForm(),
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
      partner_id: Joi.string().allow("").required(),
      response: Joi.array()
        .items(LeadPartnerModel.FeedbackResponseItem())
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
      created_on: LeadPartnerModel.CreatedOn(),
      created_by: Joi.any(),
      _id: Joi.string().allow("").required(),
      updated_at: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
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
      source: LeadPartnerModel.TicketSourceEnum().required(),
      status: LeadPartnerModel.Status().required(),
      priority: LeadPartnerModel.Priority().required(),
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

      "comment"
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
module.exports = LeadPartnerModel;
