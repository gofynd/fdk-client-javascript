const Joi = require("joi");

/**
 * @typedef TicketHistoryPayload
 * @property {Object} value - Details of history event
 * @property {string} type
 */

/**
 * @typedef CustomFormSubmissionPayload
 * @property {Object[]} response - Form response
 * @property {TicketAsset[]} [attachments] - List of all attachments related to the form
 */

/**
 * @typedef GetTokenForVideoRoomResponse
 * @property {string} access_token - Access token to be used for video room
 */

/**
 * @typedef GetParticipantsInsideVideoRoomResponse
 * @property {Participant[]} participants - List of participants of the video room
 * @property {Object} [room]
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
 * @property {UserPasswordHistory[]} [password_history]
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
 * @typedef UserPasswordHistory
 * @property {string} [salt]
 * @property {string} [hash]
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
 * @typedef SubmitCustomFormResponse
 * @property {string} message - Success message for form submission
 * @property {Ticket} [ticket]
 * @property {string[]} [notified_to]
 * @property {FormResponse} [response]
 */

/**
 * @typedef FormResponse
 * @property {string} [application_id]
 * @property {string} [form_slug]
 * @property {Object[]} [response]
 * @property {string} [created_by]
 * @property {CreatedOn} [created_on]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef TicketContext
 * @property {string} [application_id] - Application ID related to the ticket
 * @property {string} company_id - Company ID related to the ticket
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
 * @property {string[]} [subscribers]
 */

/**
 * @typedef Priority
 * @property {string} key - Priority value of the ticket like urgent, low, medium, high.
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
 * @property {string[]} [available_assignees]
 * @property {string} _id - Unique identifier for the form
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {string} [created_by]
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
 * @property {string} [created_by] - User who created the history event
 * @property {string} _id - Unique identifier of the history event
 * @property {string} [updated_at] - Time of last update of the history event
 * @property {string} [created_at] - Time of creation of the history event
 * @property {number} [__v]
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
 * @property {string} [video_room_id]
 * @property {string[]} [subscribers]
 * @property {Object[]} [additional_info]
 * @property {number} [__v]
 * @property {TicketAsset[]} [attachments] - List of all attachments related to the form
 */

/**
 * @typedef NotFoundError
 * @property {string} [message]
 */

/**
 * @typedef Error4XX
 * @property {Object} [message]
 * @property {string} [stack]
 * @property {string} [sentry]
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

/** @typedef {"platform_panel" | "sales_channel"} TicketSourceEnum */

class LeadApplicationModel {
  /** @returns {TicketHistoryPayload} */
  static TicketHistoryPayload() {
    return Joi.object({
      value: Joi.any().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {CustomFormSubmissionPayload} */
  static CustomFormSubmissionPayload() {
    return Joi.object({
      response: Joi.array().items(Joi.any()).required(),
      attachments: Joi.array().items(LeadApplicationModel.TicketAsset()),
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
        .items(LeadApplicationModel.Participant())
        .required(),
      room: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {Participant} */
  static Participant() {
    return Joi.object({
      user: LeadApplicationModel.UserSchema(),
      identity: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {UserSchema} */
  static UserSchema() {
    return Joi.object({
      first_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      phone_numbers: Joi.array().items(LeadApplicationModel.PhoneNumber()),
      emails: Joi.array().items(LeadApplicationModel.Email()),
      password_history: Joi.array().items(
        LeadApplicationModel.UserPasswordHistory()
      ),
      gender: Joi.string().allow(""),
      active: Joi.boolean(),
      profile_pic_url: Joi.string().allow(""),
      username: Joi.string().allow(""),
      account_type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      debug: LeadApplicationModel.Debug(),
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

  /** @returns {UserPasswordHistory} */
  static UserPasswordHistory() {
    return Joi.object({
      salt: Joi.string().allow(""),
      hash: Joi.string().allow(""),
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

  /** @returns {SubmitCustomFormResponse} */
  static SubmitCustomFormResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      ticket: LeadApplicationModel.Ticket(),
      notified_to: Joi.array().items(Joi.string().allow("")),
      response: LeadApplicationModel.FormResponse(),
    });
  }

  /** @returns {FormResponse} */
  static FormResponse() {
    return Joi.object({
      application_id: Joi.string().allow(""),
      form_slug: Joi.string().allow(""),
      response: Joi.array().items(Joi.any()),
      created_by: Joi.string().allow(""),
      created_on: LeadApplicationModel.CreatedOn(),
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      __v: Joi.number(),
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
      platform: Joi.string().allow(""),
    });
  }

  /** @returns {TicketAsset} */
  static TicketAsset() {
    return Joi.object({
      display: Joi.string().allow(""),
      value: Joi.string().allow("").required(),
      type: LeadApplicationModel.TicketAssetTypeEnum().required(),
    });
  }

  /** @returns {TicketContent} */
  static TicketContent() {
    return Joi.object({
      title: Joi.string().allow("").required(),
      description: Joi.string().allow(""),
      attachments: Joi.array().items(LeadApplicationModel.TicketAsset()),
    });
  }

  /** @returns {AddTicketPayload} */
  static AddTicketPayload() {
    return Joi.object({
      created_by: Joi.any(),
      status: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      category: Joi.string().allow("").required(),
      content: LeadApplicationModel.TicketContent().required(),
      _custom_json: Joi.any(),
      subscribers: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {Status} */
  static Status() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      display: Joi.string().allow("").required(),
      color: Joi.string().allow("").required(),
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
      login_required: Joi.boolean().required(),
      should_notify: Joi.boolean().required(),
      success_message: Joi.string().allow(""),
      submit_button: LeadApplicationModel.SubmitButton(),
      inputs: Joi.array().items(Joi.any()).required(),
      created_on: LeadApplicationModel.CreatedOn(),
      poll_for_assignment: LeadApplicationModel.PollForAssignment(),
      available_assignees: Joi.array().items(Joi.string().allow("")),
      _id: Joi.string().allow("").required(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      __v: Joi.number(),
      created_by: Joi.string().allow(""),
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
      sub_categories: Joi.array().items(Joi.link("#TicketCategory")),
      group_id: Joi.number(),
      feedback_form: LeadApplicationModel.FeedbackForm(),
    }).id("TicketCategory");
  }

  /** @returns {TicketHistory} */
  static TicketHistory() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      value: Joi.object().pattern(/\S/, Joi.any()).required(),
      ticket_id: Joi.string().allow("").required(),
      created_on: LeadApplicationModel.CreatedOn(),
      created_by: Joi.string().allow(""),
      _id: Joi.string().allow("").required(),
      updated_at: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {Ticket} */
  static Ticket() {
    return Joi.object({
      context: LeadApplicationModel.TicketContext(),
      created_on: LeadApplicationModel.CreatedOn(),
      response_id: Joi.string().allow(""),
      content: LeadApplicationModel.TicketContent(),
      category: LeadApplicationModel.TicketCategory().required(),
      sub_category: Joi.string().allow(""),
      source: LeadApplicationModel.TicketSourceEnum().required(),
      status: LeadApplicationModel.Status().required(),
      priority: LeadApplicationModel.Priority().required(),
      created_by: Joi.any(),
      assigned_to: Joi.any(),
      tags: Joi.array().items(Joi.string().allow("")),
      _custom_json: Joi.any(),
      is_feedback_pending: Joi.boolean(),
      integration: Joi.any(),
      _id: Joi.string().allow("").required(),
      updated_at: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      video_room_id: Joi.string().allow(""),
      subscribers: Joi.array().items(Joi.string().allow("")),
      additional_info: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      __v: Joi.number(),
      attachments: Joi.array().items(LeadApplicationModel.TicketAsset()),
    });
  }

  /** @returns {NotFoundError} */
  static NotFoundError() {
    return Joi.object({
      message: Joi.string().allow(""),
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
