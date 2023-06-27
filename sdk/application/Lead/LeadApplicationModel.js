const Joi = require("joi");

/**
 * @typedef AddTicketPayload
 * @property {Object} [_custom_json] - Optional custom data that needs to be sent
 * @property {string} category - Category of the ticket
 * @property {TicketContent} content - Content for the ticket
 * @property {Object} [created_by] - Creator of the ticket
 * @property {PriorityEnum} [priority] - Priority of the ticket
 * @property {string} [status] - Status of the ticket
 */

/**
 * @typedef AgentChangePayload
 * @property {string} agent_id - Agent's unique ID
 */

/**
 * @typedef CategoryData
 * @property {TicketCategory} [list]
 */

/**
 * @typedef CloseVideoRoomResponse
 * @property {boolean} success - Denotes if operation was successfully
 */

/**
 * @typedef CommunicationDetails
 * @property {string} [description] - Short description for the communication method
 * @property {boolean} [enabled] - Denotes if this communication method has to be shown
 * @property {string} [title] - Title for the communication method
 * @property {string} [type] - Enum type for the communication method
 * @property {string} [value] - Value for the communication method
 */

/**
 * @typedef CreateCustomFormPayload
 * @property {string} [description] - Description of the form
 * @property {string} [header_image] - Header image that is to be shown for the form
 * @property {Object[]} inputs - List of all the form components
 * @property {PollForAssignment} [poll_for_assignment] - Describes how polling
 *   will be done for the tickets createds
 * @property {PriorityEnum} priority - Describes the priority of the tickets
 *   created by the form
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
 * @property {CreatedOn} [created_on] - Gives details of when the form was created
 * @property {string} [description] - Form description that will be shown to the user
 * @property {string} [header_image] - Form header image that will be shown to the user
 * @property {Object[]} inputs - List of all the form fields
 * @property {boolean} login_required - Denotes if login is required to make a
 *   form response submission
 * @property {PollForAssignment} [poll_for_assignment] - Details of how polling
 *   should be done for support
 * @property {Priority} priority - Sets priority of tickets created by form response
 * @property {boolean} should_notify - Denotes if new response submission for
 *   the form should be notified to the assignees
 * @property {string} slug - Slug for the form, which is to be used for accessing the form
 * @property {SubmitButton} [submit_button] - Details for submit button
 * @property {string} [success_message] - Message that is to be shown on
 *   succesfull form response submission
 * @property {string} title - Form title that will be shown to the user
 */

/**
 * @typedef CustomFormList
 * @property {CustomForm[]} [items] - List of forms
 * @property {Page} [page] - Describes the pagination state
 */

/**
 * @typedef CustomFormSubmissionPayload
 * @property {TicketAsset[]} [attachments] - List of all attachments related to the form
 * @property {Object[]} response - Form response
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
 * @property {PollForAssignment} [poll_for_assignment] - Describes how polling
 *   will be done for the tickets createds
 * @property {PriorityEnum} priority - Describes the priority of the tickets
 *   created by the form
 * @property {boolean} [should_notify] - Indicates if staff should be notified
 *   when a response is received
 * @property {string} [success_message] - Success message that will be shown on submission
 * @property {string} title - Title for the form
 */

/**
 * @typedef EditTicketPayload
 * @property {AgentChangePayload} [assigned_to] - Details of support staff to
 *   whom ticket is assigned
 * @property {string} [category] - Category assigned to the ticket
 * @property {TicketContent} [content] - Ticket conetent details
 * @property {PriorityEnum} [priority] - Denotes the priority of ticket
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
 * @typedef IntegrationConfig
 * @property {string} [_id] - Unique id
 * @property {boolean} allow_ticket_creation - Denotes ticket creation enable or
 *   disable on platform
 * @property {string} [base_url] - Integration base url for validate and create ticket
 * @property {CategoryData} [category_data] - Support category array list details
 * @property {string} [category_sync_apikey] - Integration apikey to sync
 *   category of selected type
 * @property {boolean} [config_completed] - Denotes the current intergration is
 *   completed or partially done
 * @property {string} [create_ticket_apikey] - Integration apikey to validate
 *   and create ticket
 * @property {string} integration_type - Enum string values for integration
 * @property {boolean} show_listing - Denotes ticket listing enable or disable on platform
 * @property {string} [update_ticket_apikey] - Integration apikey to update ticket
 * @property {string} [webhook_apikey] - Integration webhook apikey to got
 *   callbacks from integration type dashboard like freshdesk, etc
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
 * @property {UserSchema} [user] - Details of participant
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
 * @property {PriorityEnum} key - Key for priority
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
 * @typedef SubmitCustomFormResponse
 * @property {string} message - Success message for form submission
 * @property {Ticket} [ticket] - Ticket created on form submission
 */

/**
 * @typedef SupportGeneralConfig
 * @property {string} [_id] - Unique id
 * @property {Object} [integration] - Contains integrations basic information
 * @property {boolean} [show_communication_info] - Denotes if support
 *   communication info should be shown
 * @property {boolean} [show_support_dris] - Denotes if support DRIS info should be shown
 * @property {CommunicationDetails} [support_communication] - Support
 *   communication array list details
 * @property {CommunicationDetails} [support_email] - Support e-mail details
 * @property {CommunicationDetails} [support_faq] - Support FAQ details
 * @property {CommunicationDetails} [support_phone] - Support Phone number details
 * @property {string} [type] - The enity/platform for which the config is stored
 */

/**
 * @typedef Ticket
 * @property {Object} [_custom_json] - Custom json relevant to the ticket
 * @property {string} _id - Unique identifier for the ticket
 * @property {Object} [assigned_to] - Details of support staff to whom ticket is assigned
 * @property {TicketCategory} category - Category assigned to the ticket
 * @property {TicketContent} [content] - Ticket conetent details
 * @property {TicketContext} [context] - Details of company and application
 *   realated to the ticket
 * @property {string} [created_at] - Time when the ticket was created
 * @property {Object} [created_by] - User details of ticket creator
 * @property {CreatedOn} [created_on] - Details of company and application
 *   realated to the ticket
 * @property {Object} [integration] - Integration type and its details of the ticket
 * @property {boolean} [is_feedback_pending] - Denotes if feedback submission is
 *   pending for the ticket
 * @property {Priority} priority - Denotes the priority of ticket
 * @property {string} [response_id] - Details of company and application
 *   realated to the ticket
 * @property {TicketSourceEnum} source - Denotes if the ticket was created at
 *   company or application level
 * @property {Status} status - Denotes in what state is the ticket
 * @property {string} [sub_category] - Sub-category assigned to the ticket
 * @property {string[]} [tags] - Tags relevant to ticket
 * @property {string} [updated_at] - Time when the ticket was last updated
 */

/**
 * @typedef TicketAsset
 * @property {string} [display] - Display text for asset
 * @property {TicketAssetTypeEnum} type - Type of asset
 * @property {string} value - To be used for details
 */

/**
 * @typedef TicketCategory
 * @property {string} display - Category display value identifier
 * @property {FeedbackForm} [feedback_form] - Support category array list details
 * @property {number} [group_id] - Group id of category releted data
 * @property {string} key - Category key value identifier
 * @property {TicketCategory} [sub_categories] - Support category array list details
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
 * @typedef TicketFeedbackForm
 * @property {Object[]} [display] - List of all the form fields
 * @property {string} title - Feedback form title that will be shown to the user
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
 * @property {CreatedOn} [created_on] - Time of creation of the history event
 * @property {string} ticket_id - Readable ticket number
 * @property {string} type - Type of the history event
 * @property {string} [updated_at] - Time of last update of the history event
 * @property {Object} value - Data of the history event
 */

/**
 * @typedef TicketHistoryList
 * @property {TicketHistory[]} [items] - List of ticket history
 * @property {Page} [page] - Describes the pagination state
 */

/**
 * @typedef TicketHistoryPayload
 * @property {HistoryTypeEnum} type - Type of history event
 * @property {Object} value - Details of history event
 */

/**
 * @typedef TicketList
 * @property {Filter} [filters] - All the filters available for tickets
 * @property {Ticket[]} [items] - List of tickets
 * @property {Page} [page] - Describes the pagination state
 */

/**
 * @typedef TicketSubCategory
 * @property {string} display - Display text for sub-category
 * @property {string} key - Key for sub-category
 * @property {TicketSubCategory} [sub_categories]
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

/** @typedef {"rating" | "log" | "comment"} HistoryTypeEnum */

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

/** @typedef {"default" | "freshdesk" | "kapture"} TicketIntegrationDetails */

/** @typedef {"platform_panel" | "sales_channel"} TicketSourceEnum */

class LeadApplicationModel {
  /** @returns {AddTicketPayload} */
  static AddTicketPayload() {
    return Joi.object({
      _custom_json: Joi.any(),
      category: Joi.string().allow("").required(),
      content: LeadApplicationModel.TicketContent().required(),
      created_by: Joi.any(),
      priority: LeadApplicationModel.PriorityEnum(),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {AgentChangePayload} */
  static AgentChangePayload() {
    return Joi.object({
      agent_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {CategoryData} */
  static CategoryData() {
    return Joi.object({
      list: LeadApplicationModel.TicketCategory(),
    });
  }

  /** @returns {CloseVideoRoomResponse} */
  static CloseVideoRoomResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  /** @returns {CommunicationDetails} */
  static CommunicationDetails() {
    return Joi.object({
      description: Joi.string().allow(""),
      enabled: Joi.boolean(),
      title: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {CreateCustomFormPayload} */
  static CreateCustomFormPayload() {
    return Joi.object({
      description: Joi.string().allow(""),
      header_image: Joi.string().allow(""),
      inputs: Joi.array().items(Joi.any()).required(),
      poll_for_assignment: LeadApplicationModel.PollForAssignment(),
      priority: LeadApplicationModel.PriorityEnum().required(),
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
      notify: Joi.array().items(LeadApplicationModel.NotifyUser()),
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
      created_on: LeadApplicationModel.CreatedOn(),
      description: Joi.string().allow(""),
      header_image: Joi.string().allow(""),
      inputs: Joi.array().items(Joi.any()).required(),
      login_required: Joi.boolean().required(),
      poll_for_assignment: LeadApplicationModel.PollForAssignment(),
      priority: LeadApplicationModel.Priority().required(),
      should_notify: Joi.boolean().required(),
      slug: Joi.string().allow("").required(),
      submit_button: LeadApplicationModel.SubmitButton(),
      success_message: Joi.string().allow(""),
      title: Joi.string().allow("").required(),
    });
  }

  /** @returns {CustomFormList} */
  static CustomFormList() {
    return Joi.object({
      items: Joi.array().items(LeadApplicationModel.CustomForm()),
      page: LeadApplicationModel.Page(),
    });
  }

  /** @returns {CustomFormSubmissionPayload} */
  static CustomFormSubmissionPayload() {
    return Joi.object({
      attachments: Joi.array().items(LeadApplicationModel.TicketAsset()),
      response: Joi.array().items(Joi.any()).required(),
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
      poll_for_assignment: LeadApplicationModel.PollForAssignment(),
      priority: LeadApplicationModel.PriorityEnum().required(),
      should_notify: Joi.boolean(),
      success_message: Joi.string().allow(""),
      title: Joi.string().allow("").required(),
    });
  }

  /** @returns {EditTicketPayload} */
  static EditTicketPayload() {
    return Joi.object({
      assigned_to: LeadApplicationModel.AgentChangePayload(),
      category: Joi.string().allow(""),
      content: LeadApplicationModel.TicketContent(),
      priority: LeadApplicationModel.PriorityEnum(),
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
      categories: Joi.array().items(LeadApplicationModel.TicketCategory()),
      priorities: Joi.array().items(LeadApplicationModel.Priority()).required(),
      statuses: Joi.array().items(LeadApplicationModel.Status()).required(),
    });
  }

  /** @returns {GetParticipantsInsideVideoRoomResponse} */
  static GetParticipantsInsideVideoRoomResponse() {
    return Joi.object({
      participants: Joi.array()
        .items(LeadApplicationModel.Participant())
        .required(),
    });
  }

  /** @returns {GetTokenForVideoRoomResponse} */
  static GetTokenForVideoRoomResponse() {
    return Joi.object({
      access_token: Joi.string().allow("").required(),
    });
  }

  /** @returns {IntegrationConfig} */
  static IntegrationConfig() {
    return Joi.object({
      _id: Joi.string().allow(""),
      allow_ticket_creation: Joi.boolean().required(),
      base_url: Joi.string().allow(""),
      category_data: LeadApplicationModel.CategoryData(),
      category_sync_apikey: Joi.string().allow(""),
      config_completed: Joi.boolean(),
      create_ticket_apikey: Joi.string().allow(""),
      integration_type: Joi.string().allow("").required(),
      show_listing: Joi.boolean().required(),
      update_ticket_apikey: Joi.string().allow(""),
      webhook_apikey: Joi.string().allow(""),
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
      user: LeadApplicationModel.UserSchema(),
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
      key: LeadApplicationModel.PriorityEnum().required(),
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

  /** @returns {SubmitCustomFormResponse} */
  static SubmitCustomFormResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      ticket: LeadApplicationModel.Ticket(),
    });
  }

  /** @returns {SupportGeneralConfig} */
  static SupportGeneralConfig() {
    return Joi.object({
      _id: Joi.string().allow(""),
      integration: Joi.any(),
      show_communication_info: Joi.boolean(),
      show_support_dris: Joi.boolean(),
      support_communication: LeadApplicationModel.CommunicationDetails(),
      support_email: LeadApplicationModel.CommunicationDetails(),
      support_faq: LeadApplicationModel.CommunicationDetails(),
      support_phone: LeadApplicationModel.CommunicationDetails(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {Ticket} */
  static Ticket() {
    return Joi.object({
      _custom_json: Joi.any(),
      _id: Joi.string().allow("").required(),
      assigned_to: Joi.any(),
      category: LeadApplicationModel.TicketCategory().required(),
      content: LeadApplicationModel.TicketContent(),
      context: LeadApplicationModel.TicketContext(),
      created_at: Joi.string().allow(""),
      created_by: Joi.any(),
      created_on: LeadApplicationModel.CreatedOn(),
      integration: Joi.any(),
      is_feedback_pending: Joi.boolean(),
      priority: LeadApplicationModel.Priority().required(),
      response_id: Joi.string().allow(""),
      source: LeadApplicationModel.TicketSourceEnum().required(),
      status: LeadApplicationModel.Status().required(),
      sub_category: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {TicketAsset} */
  static TicketAsset() {
    return Joi.object({
      display: Joi.string().allow(""),
      type: LeadApplicationModel.TicketAssetTypeEnum().required(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {TicketCategory} */
  static TicketCategory() {
    return Joi.object({
      display: Joi.string().allow("").required(),
      feedback_form: LeadApplicationModel.FeedbackForm(),
      group_id: Joi.number(),
      key: Joi.string().allow("").required(),
      sub_categories: Joi.link("#TicketCategory"),
    }).id("TicketCategory");
  }

  /** @returns {TicketContent} */
  static TicketContent() {
    return Joi.object({
      attachments: Joi.array().items(LeadApplicationModel.TicketAsset()),
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
        .items(LeadApplicationModel.FeedbackResponseItem())
        .required(),
      ticket_id: Joi.string().allow("").required(),
      updated_at: Joi.string().allow(""),
      user: Joi.any(),
    });
  }

  /** @returns {TicketFeedbackForm} */
  static TicketFeedbackForm() {
    return Joi.object({
      display: Joi.array().items(Joi.any()),
      title: Joi.string().allow("").required(),
    });
  }

  /** @returns {TicketFeedbackList} */
  static TicketFeedbackList() {
    return Joi.object({
      items: Joi.array().items(LeadApplicationModel.TicketFeedback()),
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
      created_on: LeadApplicationModel.CreatedOn(),
      ticket_id: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      updated_at: Joi.string().allow(""),
      value: Joi.any().required(),
    });
  }

  /** @returns {TicketHistoryList} */
  static TicketHistoryList() {
    return Joi.object({
      items: Joi.array().items(LeadApplicationModel.TicketHistory()),
      page: LeadApplicationModel.Page(),
    });
  }

  /** @returns {TicketHistoryPayload} */
  static TicketHistoryPayload() {
    return Joi.object({
      type: LeadApplicationModel.HistoryTypeEnum().required(),
      value: Joi.any().required(),
    });
  }

  /** @returns {TicketList} */
  static TicketList() {
    return Joi.object({
      filters: LeadApplicationModel.Filter(),
      items: Joi.array().items(LeadApplicationModel.Ticket()),
      page: LeadApplicationModel.Page(),
    });
  }

  /** @returns {TicketSubCategory} */
  static TicketSubCategory() {
    return Joi.object({
      display: Joi.string().allow("").required(),
      key: Joi.string().allow("").required(),
      sub_categories: Joi.link("#TicketSubCategory"),
    }).id("TicketSubCategory");
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
      emails: Joi.array().items(LeadApplicationModel.Email()),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      meta: Joi.any(),
      phone_numbers: Joi.array().items(LeadApplicationModel.PhoneNumber()),
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

      "comment"
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
   * Enum: TicketIntegrationDetails Used By: Lead
   *
   * @returns {TicketIntegrationDetails}
   */
  static TicketIntegrationDetails() {
    return Joi.string().valid(
      "default",

      "freshdesk",

      "kapture"
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
module.exports = LeadApplicationModel;
