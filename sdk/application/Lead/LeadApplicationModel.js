const Joi = require("joi");

/**
 * @typedef TicketHistoryPayload
 * @property {Object} value - Details of history event.
 * @property {HistoryTypeEnum} type
 */

/**
 * @typedef CustomFormSubmissionPayload
 * @property {Object[]} response - Custom form response.
 * @property {TicketAsset[]} [attachments] - List of all attachments related to the form.
 */

/**
 * @typedef SubmitCustomFormResponse
 * @property {string} message - Success message for form submission.
 * @property {Ticket} [ticket]
 * @property {FormFieldResponse} [response]
 */

/**
 * @typedef FormFieldResponse
 * @property {string} [_id] - Unique identifier for a custom form response.
 * @property {number} [__v] - Version of the form.
 * @property {string} [application_id] - Unique identifier for a Sales channel.
 * @property {string} [form_slug] - A short, human-readable, URL-friendly unique
 *   identifier for a custom form.
 * @property {CreatedOn} [created_on]
 * @property {FormFieldResponseValues[]} [response] - Data related to
 *   acknowledgement on submission of custom form.
 */

/**
 * @typedef FormFieldResponseValues
 * @property {string} [key] - Keyname of field against which the input was
 *   filled in custom form.
 */

/**
 * @typedef TicketContext
 * @property {string} [application_id] - Unique identifier for a Sales channel.
 * @property {string} company_id - Company ID related to the ticket.
 */

/**
 * @typedef CreatedOn
 * @property {string} user_agent - Useragent details.
 */

/**
 * @typedef TicketAsset
 * @property {string} [display] - Display text for asset.
 * @property {string} value - To be used for details.
 * @property {TicketAssetTypeEnum} type
 */

/**
 * @typedef TicketContent
 * @property {string} title - Title for ticket.
 * @property {string} [description] - Long description of issue.
 * @property {TicketAsset[]} [attachments] - List of all attachments related to
 *   the ticket.
 */

/**
 * @typedef AddTicketPayload
 * @property {Object} [created_by] - Creator of the ticket.
 * @property {string} [status] - Status of the ticket.
 * @property {PriorityEnum} [priority]
 * @property {string} category - Category of the ticket.
 * @property {TicketContent} content
 * @property {Object} [_custom_json] - Optional custom data that needs to be sent.
 * @property {string[]} [subscribers] - List of emails to be informed for ticket updates.
 */

/**
 * @typedef Priority
 * @property {PriorityEnum} key
 * @property {string} display - Display text for priority.
 * @property {string} color - Color for priority.
 */

/**
 * @typedef Status
 * @property {string} key - Key for status.
 * @property {string} display - Display text for status.
 * @property {string} color - Color for status.
 */

/**
 * @typedef SubmitButton
 * @property {string} title - Title for submit button.
 * @property {string} title_color - Title color submit button.
 * @property {string} background_color - Color for submit button.
 */

/**
 * @typedef PollForAssignment
 * @property {number} duration - Duration for polling of staff.
 * @property {string} message - Message for polling.
 * @property {string} success_message - Message for successful polling.
 * @property {string} failure_message - Message if polling failed.
 */

/**
 * @typedef CustomForm
 * @property {string} application_id - Application ID - Identifier for a Sales channel.
 * @property {string} slug - Slug for the form, which is to be used for
 *   accessing the form.
 * @property {string} [header_image] - Form header image that will be shown to the user.
 * @property {string} title - Form title that will be shown to the user.
 * @property {string} [description] - Form description that will be shown to the user.
 * @property {Priority} priority
 * @property {boolean} login_required - If login is required to make a form
 *   response submission.
 * @property {boolean} should_notify - If new response submission for the form
 *   should be notified to the assignees.
 * @property {string} [success_message] - Message that is to be shown on
 *   successful form response submission.
 * @property {SubmitButton} [submit_button]
 * @property {Object[]} inputs - List of all the form fields.
 * @property {CreatedOn} [created_on]
 * @property {PollForAssignment} [poll_for_assignment]
 * @property {string} _id - Unique identifier for the form.
 */

/**
 * @typedef FeedbackForm
 * @property {Object} [inputs] - Input details for the feedback form.
 * @property {string} [title] - Title for the feedback form.
 * @property {Object} [timestamps] - Timestamp details of feedback form.
 */

/**
 * @typedef TicketCategory
 * @property {string} display - Category display value identifier.
 * @property {string} key - Category key value identifier.
 * @property {TicketCategory} [sub_categories]
 * @property {number} [group_id] - Group id of category related data.
 * @property {FeedbackForm} [feedback_form]
 */

/**
 * @typedef TicketHistory
 * @property {string} type - Type of the history event.
 * @property {Object} value - Data of the history event.
 * @property {string} ticket_id - Readable ticket number.
 * @property {CreatedOn} [created_on]
 * @property {Object} [created_by] - User who created the history event.
 * @property {string} _id - Unique identifier of the history event.
 * @property {string} [updated_at] - Time of last update of the history event.
 * @property {string} [created_at] - Time of creation of the history event.
 */

/**
 * @typedef Ticket
 * @property {TicketContext} [context]
 * @property {CreatedOn} [created_on]
 * @property {string} [response_id] - Details of company and application related
 *   to the ticket.
 * @property {TicketContent} [content]
 * @property {TicketCategory} category
 * @property {string} [sub_category] - Sub-category assigned to the ticket.
 * @property {TicketSourceEnum} source
 * @property {Status} status
 * @property {Priority} priority
 * @property {Object} [created_by] - User details of ticket creator.
 * @property {Object} [assigned_to] - Details of support staff to whom ticket is assigned.
 * @property {string[]} [tags] - Tags relevant to ticket.
 * @property {Object} [_custom_json] - Custom json relevant to the ticket.
 * @property {boolean} [is_feedback_pending] - If feedback submission is pending
 *   for the ticket.
 * @property {Object} [integration] - Integration type and its details of the ticket.
 * @property {string} _id - Unique identifier for the ticket.
 * @property {string} [updated_at] - Time when the ticket was last updated.
 * @property {string} [created_at] - Time when the ticket was created.
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

class LeadApplicationModel {
  /** @returns {TicketHistoryPayload} */
  static TicketHistoryPayload() {
    return Joi.object({
      value: Joi.any().required(),
      type: LeadApplicationModel.HistoryTypeEnum().required(),
    });
  }

  /** @returns {CustomFormSubmissionPayload} */
  static CustomFormSubmissionPayload() {
    return Joi.object({
      response: Joi.array().items(Joi.any()).required(),
      attachments: Joi.array().items(LeadApplicationModel.TicketAsset()),
    });
  }

  /** @returns {SubmitCustomFormResponse} */
  static SubmitCustomFormResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      ticket: LeadApplicationModel.Ticket(),
      response: LeadApplicationModel.FormFieldResponse(),
    });
  }

  /** @returns {FormFieldResponse} */
  static FormFieldResponse() {
    return Joi.object({
      _id: Joi.string().allow(""),
      __v: Joi.number(),
      application_id: Joi.string().allow(""),
      form_slug: Joi.string().allow(""),
      created_on: LeadApplicationModel.CreatedOn(),
      response: Joi.array().items(
        LeadApplicationModel.FormFieldResponseValues()
      ),
    });
  }

  /** @returns {FormFieldResponseValues} */
  static FormFieldResponseValues() {
    return Joi.object({
      key: Joi.string().allow(""),
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
      priority: LeadApplicationModel.PriorityEnum(),
      category: Joi.string().allow("").required(),
      content: LeadApplicationModel.TicketContent().required(),
      _custom_json: Joi.any(),
      subscribers: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Priority} */
  static Priority() {
    return Joi.object({
      key: LeadApplicationModel.PriorityEnum().required(),
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
      priority: LeadApplicationModel.Priority().required(),
      login_required: Joi.boolean().required(),
      should_notify: Joi.boolean().required(),
      success_message: Joi.string().allow(""),
      submit_button: LeadApplicationModel.SubmitButton(),
      inputs: Joi.array().items(Joi.any()).required(),
      created_on: LeadApplicationModel.CreatedOn(),
      poll_for_assignment: LeadApplicationModel.PollForAssignment(),
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
      feedback_form: LeadApplicationModel.FeedbackForm(),
    }).id("TicketCategory");
  }

  /** @returns {TicketHistory} */
  static TicketHistory() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      value: Joi.any().required(),
      ticket_id: Joi.string().allow("").required(),
      created_on: LeadApplicationModel.CreatedOn(),
      created_by: Joi.any(),
      _id: Joi.string().allow("").required(),
      updated_at: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
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
module.exports = LeadApplicationModel;
