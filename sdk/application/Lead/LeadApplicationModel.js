const Joi = require("joi");

/**
 * @typedef AddTicketPayload
 * @property {Object} [_custom_json] - Optional custom data that needs to be sent
 * @property {string} category - Category of the ticket
 * @property {TicketContent} content
 * @property {Object} [created_by] - Creator of the ticket
 * @property {PriorityEnum} [priority]
 * @property {string} [status] - Status of the ticket
 * @property {string[]} [subscribers]
 */

/**
 * @typedef CreatedOn
 * @property {string} user_agent - Useragent details
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
 * @typedef GetParticipantsInsideVideoRoomResponse
 * @property {Participant[]} participants - List of participants of the video room
 */

/**
 * @typedef GetTokenForVideoRoomResponse
 * @property {string} access_token - Access token to be used for video room
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
 * @typedef SubmitCustomFormResponse
 * @property {string} message - Success message for form submission
 * @property {Ticket} [ticket]
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
 * @typedef TicketHistoryPayload
 * @property {HistoryTypeEnum} type
 * @property {Object} value - Details of history event
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
      subscribers: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CreatedOn} */
  static CreatedOn() {
    return Joi.object({
      user_agent: Joi.string().allow("").required(),
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

  /** @returns {TicketHistoryPayload} */
  static TicketHistoryPayload() {
    return Joi.object({
      type: LeadApplicationModel.HistoryTypeEnum().required(),
      value: Joi.any().required(),
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
module.exports = LeadApplicationModel;
