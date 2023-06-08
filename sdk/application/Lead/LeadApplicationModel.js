const Joi = require("joi");

class LeadModel {
  static AddTicketPayload() {
    return Joi.object({
      _custom_json: Joi.any(),
      category: Joi.string().allow("").required(),
      content: LeadModel.TicketContent().required(),
      created_by: Joi.any(),
      priority: LeadModel.PriorityEnum(),
      status: Joi.string().allow(""),
    });
  }
  static AgentChangePayload() {
    return Joi.object({
      agent_id: Joi.string().allow("").required(),
    });
  }
  static CategoryData() {
    return Joi.object({
      list: LeadModel.TicketCategory(),
    });
  }
  static CloseVideoRoomResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }
  static CommunicationDetails() {
    return Joi.object({
      description: Joi.string().allow(""),
      enabled: Joi.boolean(),
      title: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static CreateCustomFormPayload() {
    return Joi.object({
      description: Joi.string().allow(""),
      header_image: Joi.string().allow(""),
      inputs: Joi.array().items(Joi.any()).required(),
      poll_for_assignment: LeadModel.PollForAssignment(),
      priority: LeadModel.PriorityEnum().required(),
      should_notify: Joi.boolean(),
      slug: Joi.string().allow("").required(),
      success_message: Joi.string().allow(""),
      title: Joi.string().allow("").required(),
    });
  }
  static CreatedOn() {
    return Joi.object({
      user_agent: Joi.string().allow("").required(),
    });
  }
  static CreateVideoRoomPayload() {
    return Joi.object({
      notify: Joi.array().items(LeadModel.NotifyUser()),
      unique_name: Joi.string().allow("").required(),
    });
  }
  static CreateVideoRoomResponse() {
    return Joi.object({
      unique_name: Joi.string().allow("").required(),
    });
  }
  static CustomForm() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      application_id: Joi.string().allow("").required(),
      created_on: LeadModel.CreatedOn(),
      description: Joi.string().allow(""),
      header_image: Joi.string().allow(""),
      inputs: Joi.array().items(Joi.any()).required(),
      login_required: Joi.boolean().required(),
      poll_for_assignment: LeadModel.PollForAssignment(),
      priority: LeadModel.Priority().required(),
      should_notify: Joi.boolean().required(),
      slug: Joi.string().allow("").required(),
      submit_button: LeadModel.SubmitButton(),
      success_message: Joi.string().allow(""),
      title: Joi.string().allow("").required(),
    });
  }
  static CustomFormList() {
    return Joi.object({
      items: Joi.array().items(LeadModel.CustomForm()),
      page: LeadModel.Page(),
    });
  }
  static CustomFormSubmissionPayload() {
    return Joi.object({
      attachments: Joi.array().items(LeadModel.TicketAsset()),
      response: Joi.array().items(Joi.any()).required(),
    });
  }
  static Debug() {
    return Joi.object({
      platform: Joi.string().allow(""),
      source: Joi.string().allow(""),
    });
  }
  static EditCustomFormPayload() {
    return Joi.object({
      description: Joi.string().allow(""),
      header_image: Joi.string().allow(""),
      inputs: Joi.array().items(Joi.any()).required(),
      login_required: Joi.boolean(),
      poll_for_assignment: LeadModel.PollForAssignment(),
      priority: LeadModel.PriorityEnum().required(),
      should_notify: Joi.boolean(),
      success_message: Joi.string().allow(""),
      title: Joi.string().allow("").required(),
    });
  }
  static EditTicketPayload() {
    return Joi.object({
      assigned_to: LeadModel.AgentChangePayload(),
      category: Joi.string().allow(""),
      content: LeadModel.TicketContent(),
      priority: LeadModel.PriorityEnum(),
      source: Joi.string().allow(""),
      status: Joi.string().allow(""),
      sub_category: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }
  static Email() {
    return Joi.object({
      active: Joi.boolean(),
      email: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
    });
  }
  static FeedbackForm() {
    return Joi.object({
      inputs: Joi.any(),
      timestamps: Joi.any(),
      title: Joi.string().allow(""),
    });
  }
  static FeedbackResponseItem() {
    return Joi.object({
      display: Joi.string().allow("").required(),
      key: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }
  static Filter() {
    return Joi.object({
      assignees: Joi.array().items(Joi.any()).required(),
      categories: Joi.array().items(LeadModel.TicketCategory()),
      priorities: Joi.array().items(LeadModel.Priority()).required(),
      statuses: Joi.array().items(LeadModel.Status()).required(),
    });
  }
  static GetParticipantsInsideVideoRoomResponse() {
    return Joi.object({
      participants: Joi.array().items(LeadModel.Participant()).required(),
    });
  }
  static GetTokenForVideoRoomResponse() {
    return Joi.object({
      access_token: Joi.string().allow("").required(),
    });
  }
  static IntegrationConfig() {
    return Joi.object({
      _id: Joi.string().allow(""),
      allow_ticket_creation: Joi.boolean().required(),
      base_url: Joi.string().allow(""),
      category_data: LeadModel.CategoryData(),
      category_sync_apikey: Joi.string().allow(""),
      config_completed: Joi.boolean(),
      create_ticket_apikey: Joi.string().allow(""),
      integration_type: Joi.string().allow("").required(),
      show_listing: Joi.boolean().required(),
      update_ticket_apikey: Joi.string().allow(""),
      webhook_apikey: Joi.string().allow(""),
    });
  }
  static NotifyUser() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),
      phone_number: Joi.string().allow("").required(),
    });
  }
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
  static Participant() {
    return Joi.object({
      identity: Joi.string().allow(""),
      status: Joi.string().allow(""),
      user: LeadModel.UserSchema(),
    });
  }
  static PhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),
      country_code: Joi.number(),
      phone: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
    });
  }
  static PollForAssignment() {
    return Joi.object({
      duration: Joi.number().required(),
      failure_message: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
      success_message: Joi.string().allow("").required(),
    });
  }
  static Priority() {
    return Joi.object({
      color: Joi.string().allow("").required(),
      display: Joi.string().allow("").required(),
      key: LeadModel.PriorityEnum().required(),
    });
  }
  static Status() {
    return Joi.object({
      color: Joi.string().allow("").required(),
      display: Joi.string().allow("").required(),
      key: Joi.string().allow("").required(),
    });
  }
  static SubmitButton() {
    return Joi.object({
      background_color: Joi.string().allow("").required(),
      title: Joi.string().allow("").required(),
      title_color: Joi.string().allow("").required(),
    });
  }
  static SubmitCustomFormResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      ticket: LeadModel.Ticket(),
    });
  }
  static SupportGeneralConfig() {
    return Joi.object({
      _id: Joi.string().allow(""),
      integration: Joi.any(),
      show_communication_info: Joi.boolean(),
      show_support_dris: Joi.boolean(),
      support_communication: LeadModel.CommunicationDetails(),
      support_email: LeadModel.CommunicationDetails(),
      support_faq: LeadModel.CommunicationDetails(),
      support_phone: LeadModel.CommunicationDetails(),
      type: Joi.string().allow(""),
    });
  }
  static Ticket() {
    return Joi.object({
      _custom_json: Joi.any(),
      _id: Joi.string().allow("").required(),
      assigned_to: Joi.any(),
      category: LeadModel.TicketCategory().required(),
      content: LeadModel.TicketContent(),
      context: LeadModel.TicketContext(),
      created_at: Joi.string().allow(""),
      created_by: Joi.any(),
      created_on: LeadModel.CreatedOn(),
      integration: Joi.any(),
      is_feedback_pending: Joi.boolean(),
      priority: LeadModel.Priority().required(),
      response_id: Joi.string().allow(""),
      source: LeadModel.TicketSourceEnum().required(),
      status: LeadModel.Status().required(),
      sub_category: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      updated_at: Joi.string().allow(""),
    });
  }
  static TicketAsset() {
    return Joi.object({
      display: Joi.string().allow(""),
      type: LeadModel.TicketAssetTypeEnum().required(),
      value: Joi.string().allow("").required(),
    });
  }
  static TicketCategory() {
    return Joi.object({
      display: Joi.string().allow("").required(),
      feedback_form: LeadModel.FeedbackForm(),
      group_id: Joi.number(),
      key: Joi.string().allow("").required(),
      sub_categories: Joi.link("#TicketCategory"),
    }).id("TicketCategory");
  }
  static TicketContent() {
    return Joi.object({
      attachments: Joi.array().items(LeadModel.TicketAsset()),
      description: Joi.string().allow(""),
      title: Joi.string().allow("").required(),
    });
  }
  static TicketContext() {
    return Joi.object({
      application_id: Joi.string().allow(""),
      company_id: Joi.string().allow("").required(),
    });
  }
  static TicketFeedback() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      category: Joi.string().allow(""),
      company_id: Joi.string().allow("").required(),
      created_at: Joi.string().allow(""),
      response: Joi.array().items(LeadModel.FeedbackResponseItem()).required(),
      ticket_id: Joi.string().allow("").required(),
      updated_at: Joi.string().allow(""),
      user: Joi.any(),
    });
  }
  static TicketFeedbackForm() {
    return Joi.object({
      display: Joi.array().items(Joi.any()),
      title: Joi.string().allow("").required(),
    });
  }
  static TicketFeedbackList() {
    return Joi.object({
      items: Joi.array().items(LeadModel.TicketFeedback()),
    });
  }
  static TicketFeedbackPayload() {
    return Joi.object({
      form_response: Joi.any(),
    });
  }
  static TicketHistory() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      created_at: Joi.string().allow(""),
      created_by: Joi.any(),
      created_on: LeadModel.CreatedOn(),
      ticket_id: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      updated_at: Joi.string().allow(""),
      value: Joi.any().required(),
    });
  }
  static TicketHistoryList() {
    return Joi.object({
      items: Joi.array().items(LeadModel.TicketHistory()),
      page: LeadModel.Page(),
    });
  }
  static TicketHistoryPayload() {
    return Joi.object({
      type: LeadModel.HistoryTypeEnum().required(),
      value: Joi.any().required(),
    });
  }
  static TicketList() {
    return Joi.object({
      filters: LeadModel.Filter(),
      items: Joi.array().items(LeadModel.Ticket()),
      page: LeadModel.Page(),
    });
  }
  static TicketSubCategory() {
    return Joi.object({
      display: Joi.string().allow("").required(),
      key: Joi.string().allow("").required(),
      sub_categories: Joi.link("#TicketSubCategory"),
    }).id("TicketSubCategory");
  }
  static UserSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      account_type: Joi.string().allow(""),
      active: Joi.boolean(),
      application_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      dob: Joi.string().allow(""),
      emails: Joi.array().items(LeadModel.Email()),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      meta: Joi.any(),
      phone_numbers: Joi.array().items(LeadModel.PhoneNumber()),
      profile_pic_url: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /*
        Enum: HistoryTypeEnum
        Used By: Lead
    */
  static HistoryTypeEnum() {
    return Joi.string().valid(
      "rating",

      "log",

      "comment"
    );
  }

  /*
        Enum: PriorityEnum
        Used By: Lead
    */
  static PriorityEnum() {
    return Joi.string().valid(
      "low",

      "medium",

      "high",

      "urgent"
    );
  }

  /*
        Enum: TicketAssetTypeEnum
        Used By: Lead
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

  /*
        Enum: TicketIntegrationDetails
        Used By: Lead
    */
  static TicketIntegrationDetails() {
    return Joi.string().valid(
      "default",

      "freshdesk",

      "kapture"
    );
  }

  /*
        Enum: TicketSourceEnum
        Used By: Lead
    */
  static TicketSourceEnum() {
    return Joi.string().valid(
      "platform_panel",

      "sales_channel"
    );
  }
}
module.exports = LeadModel;
