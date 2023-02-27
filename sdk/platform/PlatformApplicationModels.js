const Joi = require("joi");

class Validator {
  static ApplicationResponse() {
    return Joi.object({
      application: this.ApplicationData(),
    });
  }

  static Currency() {
    return Joi.object({
      _id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      decimal_digits: Joi.number(),

      symbol: Joi.string().allow(""),
    });
  }

  static Domain() {
    return Joi.object({
      verified: Joi.boolean(),

      is_primary: Joi.boolean(),

      is_shortlink: Joi.boolean(),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_predefined: Joi.boolean(),
    });
  }

  static ApplicationWebsite() {
    return Joi.object({
      enabled: Joi.boolean(),

      basepath: Joi.string().allow(""),
    });
  }

  static ApplicationCors() {
    return Joi.object({
      domains: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ApplicationAuth() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static ApplicationRedirections() {
    return Joi.object({
      redirect_from: Joi.string().allow(""),

      redirect_to: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ApplicationMeta() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static SecureUrl() {
    return Joi.object({
      secure_url: Joi.string().allow(""),
    });
  }

  static ApplicationData() {
    return Joi.object({
      website: this.ApplicationWebsite(),

      cors: this.ApplicationCors(),

      auth: this.ApplicationAuth(),

      description: Joi.string().allow(""),

      channel_type: Joi.string().allow(""),

      cache_ttl: Joi.number(),

      is_internal: Joi.boolean(),

      is_active: Joi.boolean(),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      owner: Joi.string().allow(""),

      company_id: Joi.number(),

      token: Joi.string().allow(""),

      redirections: Joi.array().items(this.ApplicationRedirections()),

      meta: Joi.array().items(this.ApplicationMeta()),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),

      banner: this.SecureUrl(),

      logo: this.SecureUrl(),

      favicon: this.SecureUrl(),

      domains: Joi.array().items(this.Domain()),

      app_type: Joi.string().allow(""),

      mobile_logo: this.SecureUrl(),

      domain: this.Domain(),

      slug: Joi.string().allow(""),
    });
  }

  static NotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static BadRequest() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static LocationDefaultLanguage() {
    return Joi.object({
      name: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static LocationDefaultCurrency() {
    return Joi.object({
      name: Joi.string().allow(""),

      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static LocationCountry() {
    return Joi.object({
      capital: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      iso2: Joi.string().allow(""),

      iso3: Joi.string().allow(""),

      name: Joi.string().allow(""),

      parent: Joi.string().allow(""),

      phone_code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      uid: Joi.number(),

      __v: Joi.number(),

      _id: Joi.string().allow(""),

      default_currency: this.LocationDefaultCurrency(),

      default_language: this.LocationDefaultLanguage(),
    });
  }

  static Locations() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),
    });
  }

  static TicketList() {
    return Joi.object({
      items: Joi.array().items(this.Ticket()),

      filters: this.Filter(),

      page: this.Page(),
    });
  }

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

  static TicketHistoryList() {
    return Joi.object({
      items: Joi.array().items(this.TicketHistory()),

      page: this.Page(),
    });
  }

  static CustomFormList() {
    return Joi.object({
      items: Joi.array().items(this.CustomForm()),

      page: this.Page(),
    });
  }

  static CreateCustomFormPayload() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      inputs: Joi.array().items(Joi.any()).required(),

      description: Joi.string().allow(""),

      header_image: Joi.string().allow(""),

      priority: this.PriorityEnum().required(),

      should_notify: Joi.boolean(),

      success_message: Joi.string().allow(""),

      poll_for_assignment: this.PollForAssignment(),
    });
  }

  static EditCustomFormPayload() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      inputs: Joi.array().items(Joi.any()).required(),

      description: Joi.string().allow(""),

      priority: this.PriorityEnum().required(),

      header_image: Joi.string().allow(""),

      should_notify: Joi.boolean(),

      login_required: Joi.boolean(),

      success_message: Joi.string().allow(""),

      poll_for_assignment: this.PollForAssignment(),
    });
  }

  static EditTicketPayload() {
    return Joi.object({
      content: this.TicketContent(),

      category: Joi.string().allow(""),

      sub_category: Joi.string().allow(""),

      source: Joi.string().allow(""),

      status: Joi.string().allow(""),

      priority: this.PriorityEnum(),

      assigned_to: this.AgentChangePayload(),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AgentChangePayload() {
    return Joi.object({
      agent_id: Joi.string().allow("").required(),
    });
  }

  static CreateVideoRoomResponse() {
    return Joi.object({
      unique_name: Joi.string().allow("").required(),
    });
  }

  static CloseVideoRoomResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static CreateVideoRoomPayload() {
    return Joi.object({
      unique_name: Joi.string().allow("").required(),

      notify: Joi.array().items(this.NotifyUser()),
    });
  }

  static NotifyUser() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),

      phone_number: Joi.string().allow("").required(),
    });
  }

  static Filter() {
    return Joi.object({
      priorities: Joi.array().items(this.Priority()).required(),

      categories: Joi.array().items(this.TicketCategory()),

      statuses: Joi.array().items(this.Status()).required(),

      assignees: Joi.array().items(Joi.any()).required(),
    });
  }

  static TicketHistoryPayload() {
    return Joi.object({
      value: Joi.any().required(),

      type: this.HistoryTypeEnum().required(),
    });
  }

  static CustomFormSubmissionPayload() {
    return Joi.object({
      response: Joi.array().items(Joi.any()).required(),

      attachments: Joi.array().items(this.TicketAsset()),
    });
  }

  static GetTokenForVideoRoomResponse() {
    return Joi.object({
      access_token: Joi.string().allow("").required(),
    });
  }

  static GetParticipantsInsideVideoRoomResponse() {
    return Joi.object({
      participants: Joi.array().items(this.Participant()).required(),
    });
  }

  static Participant() {
    return Joi.object({
      user: this.UserSchema(),

      identity: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static Email() {
    return Joi.object({
      primary: Joi.boolean(),

      verified: Joi.boolean(),

      email: Joi.string().allow(""),

      active: Joi.boolean(),
    });
  }

  static Debug() {
    return Joi.object({
      source: Joi.string().allow(""),

      platform: Joi.string().allow(""),
    });
  }

  static SubmitCustomFormResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      ticket: this.Ticket(),
    });
  }

  static TicketContext() {
    return Joi.object({
      application_id: Joi.string().allow(""),

      company_id: Joi.string().allow("").required(),
    });
  }

  static CreatedOn() {
    return Joi.object({
      user_agent: Joi.string().allow("").required(),
    });
  }

  static TicketAsset() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      type: this.TicketAssetTypeEnum().required(),
    });
  }

  static TicketContent() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      attachments: Joi.array().items(this.TicketAsset()),
    });
  }

  static AddTicketPayload() {
    return Joi.object({
      created_by: Joi.any(),

      status: Joi.string().allow(""),

      priority: this.PriorityEnum(),

      category: Joi.string().allow("").required(),

      content: this.TicketContent().required(),

      _custom_json: Joi.any(),
    });
  }

  static Priority() {
    return Joi.object({
      key: this.PriorityEnum().required(),

      display: Joi.string().allow("").required(),

      color: Joi.string().allow("").required(),
    });
  }

  static Status() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),

      color: Joi.string().allow("").required(),
    });
  }

  static TicketFeedbackForm() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      display: Joi.array().items(Joi.any()),
    });
  }

  static TicketFeedbackList() {
    return Joi.object({
      items: Joi.array().items(this.TicketFeedback()),
    });
  }

  static TicketFeedbackPayload() {
    return Joi.object({
      form_response: Joi.any(),
    });
  }

  static SubmitButton() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      title_color: Joi.string().allow("").required(),

      background_color: Joi.string().allow("").required(),
    });
  }

  static PollForAssignment() {
    return Joi.object({
      duration: Joi.number().required(),

      message: Joi.string().allow("").required(),

      success_message: Joi.string().allow("").required(),

      failure_message: Joi.string().allow("").required(),
    });
  }

  static CustomForm() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      header_image: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      priority: this.Priority().required(),

      login_required: Joi.boolean().required(),

      should_notify: Joi.boolean().required(),

      success_message: Joi.string().allow(""),

      submit_button: this.SubmitButton(),

      inputs: Joi.array().items(Joi.any()).required(),

      created_on: this.CreatedOn(),

      poll_for_assignment: this.PollForAssignment(),

      _id: Joi.string().allow("").required(),
    });
  }

  static CommunicationDetails() {
    return Joi.object({
      type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      value: Joi.string().allow(""),

      description: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static SupportGeneralConfig() {
    return Joi.object({
      _id: Joi.string().allow(""),

      support_email: this.CommunicationDetails(),

      support_phone: this.CommunicationDetails(),

      support_faq: this.CommunicationDetails(),

      show_communication_info: Joi.boolean(),

      support_communication: this.CommunicationDetails(),

      show_support_dris: Joi.boolean(),

      integration: Joi.any(),
    });
  }

  static FeedbackForm() {
    return Joi.object({
      inputs: Joi.any(),

      title: Joi.string().allow(""),

      timestamps: Joi.any(),
    });
  }

  static TicketSubCategory() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),

      sub_categories: this.TicketSubCategory(),
    });
  }

  static TicketCategory() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      sub_categories: this.TicketCategory(),

      group_id: Joi.number(),

      feedback_form: this.FeedbackForm(),
    });
  }

  static CategoryData() {
    return Joi.object({
      list: this.TicketCategory(),
    });
  }

  static IntegrationConfig() {
    return Joi.object({
      _id: Joi.string().allow(""),

      integration_type: Joi.string().allow("").required(),

      base_url: Joi.string().allow(""),

      create_ticket_apikey: Joi.string().allow(""),

      update_ticket_apikey: Joi.string().allow(""),

      category_sync_apikey: Joi.string().allow(""),

      category_data: this.CategoryData(),

      webhook_apikey: Joi.string().allow(""),

      config_completed: Joi.boolean(),

      allow_ticket_creation: Joi.boolean().required(),

      show_listing: Joi.boolean().required(),
    });
  }

  static FeedbackResponseItem() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static TicketFeedback() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow("").required(),

      company_id: Joi.string().allow("").required(),

      response: Joi.array().items(this.FeedbackResponseItem()).required(),

      category: Joi.string().allow(""),

      user: Joi.any(),

      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static TicketHistory() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      value: Joi.any().required(),

      ticket_id: Joi.string().allow("").required(),

      created_on: this.CreatedOn(),

      created_by: Joi.any(),

      _id: Joi.string().allow("").required(),

      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static Ticket() {
    return Joi.object({
      context: this.TicketContext(),

      created_on: this.CreatedOn(),

      response_id: Joi.string().allow(""),

      content: this.TicketContent(),

      category: this.TicketCategory().required(),

      sub_category: Joi.string().allow(""),

      source: this.TicketSourceEnum().required(),

      status: this.Status().required(),

      priority: this.Priority().required(),

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
        Enum: TicketSourceEnum
        Used By: Lead
    */
  static TicketSourceEnum() {
    return Joi.string().valid(
      "platform_panel",

      "sales_channel"
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

  static Activity() {
    return Joi.object({
      current_state: Joi.any(),

      document_id: Joi.string().allow(""),

      previous_state: Joi.any(),
    });
  }

  static ActivityDump() {
    return Joi.object({
      activity: this.Activity(),

      created_by: this.CreatedBy(),

      date_meta: this.DateMeta(),

      id: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static AddMediaListRequest() {
    return Joi.object({
      entity_id: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      media_list: Joi.array().items(this.AddMediaRequest()),

      ref_id: Joi.string().allow(""),

      ref_type: Joi.string().allow(""),
    });
  }

  static AddMediaRequest() {
    return Joi.object({
      cloud_id: Joi.string().allow(""),

      cloud_name: Joi.string().allow(""),

      cloud_provider: Joi.string().allow(""),

      entity_id: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      media_url: Joi.string().allow(""),

      ref_id: Joi.string().allow(""),

      ref_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      thumbnail_url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ApproveRequest() {
    return Joi.object({
      approve: Joi.boolean(),

      entity_type: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      reason: Joi.string().allow(""),
    });
  }

  static Attribute() {
    return Joi.object({
      date_meta: this.DateMeta(),

      description: Joi.string().allow(""),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      tags: Joi.array().items(this.TagMeta()),
    });
  }

  static AttributeObject() {
    return Joi.object({
      description: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      title: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      value: Joi.number().required(),
    });
  }

  static CreatedBy() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tags: Joi.array().items(this.TagMeta()),
    });
  }

  static CursorGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),

      page: this.Page(),
    });
  }

  static DateMeta() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static DeviceMeta() {
    return Joi.object({
      app_version: Joi.string().allow(""),

      platform: Joi.string().allow(""),
    });
  }

  static Entity() {
    return Joi.object({
      id: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static EntityRequest() {
    return Joi.object({
      entity_id: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),
    });
  }

  static FeedbackAttributes() {
    return Joi.object({
      items: Joi.array().items(this.Attribute()),

      page: this.Page(),
    });
  }

  static FeedbackError() {
    return Joi.object({
      code: Joi.any(),

      exception: Joi.string().allow(""),

      info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      request_id: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static FeedbackState() {
    return Joi.object({
      active: Joi.boolean(),

      archive: Joi.boolean(),

      media: Joi.string().allow(""),

      qna: Joi.boolean(),

      rating: Joi.boolean(),

      review: Joi.boolean(),
    });
  }

  static GetResponse() {
    return Joi.object({
      data: Joi.any(),

      page: this.Page(),
    });
  }

  static GetReviewResponse() {
    return Joi.object({
      facets: Joi.array().items(this.ReviewFacet()),

      items: Joi.array().items(Joi.any()),

      page: this.Page(),

      sort: Joi.array().items(this.SortMethod()),
    });
  }

  static InsertResponse() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static MediaMeta() {
    return Joi.object({
      max_count: Joi.number(),

      size: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static MediaMetaRequest() {
    return Joi.object({
      max_count: Joi.number().required(),

      size: Joi.number().required(),
    });
  }

  static NumberGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),

      page: this.Page(),
    });
  }

  static PageCursor() {
    return Joi.object({
      current: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      item_total: Joi.number(),

      next_id: Joi.string().allow(""),

      size: Joi.number().required(),

      type: Joi.string().allow("").required(),
    });
  }

  static PageNumber() {
    return Joi.object({
      current: Joi.number(),

      has_next: Joi.boolean(),

      item_total: Joi.number(),

      size: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static Rating() {
    return Joi.object({
      attributes: Joi.array().items(this.Attribute()),

      attributes_slugs: Joi.array().items(Joi.string().allow("")),

      ui: this.UI(),
    });
  }

  static RatingRequest() {
    return Joi.object({
      attributes: Joi.array().items(Joi.string().allow("")).required(),

      ui: this.UI(),
    });
  }

  static ReportAbuseRequest() {
    return Joi.object({
      description: Joi.string().allow(""),

      entity_id: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),
    });
  }

  static Review() {
    return Joi.object({
      description: Joi.string().allow(""),

      header: Joi.string().allow(""),

      image_meta: this.MediaMeta(),

      title: Joi.string().allow(""),

      video_meta: this.MediaMeta(),

      vote_allowed: Joi.boolean(),
    });
  }

  static ReviewFacet() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      selected: Joi.boolean(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ReviewRequest() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      header: Joi.string().allow("").required(),

      image_meta: this.MediaMetaRequest().required(),

      is_vote_allowed: Joi.boolean().required(),

      title: Joi.string().allow("").required(),

      video_meta: this.MediaMetaRequest().required(),
    });
  }

  static SaveAttributeRequest() {
    return Joi.object({
      description: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),
    });
  }

  static SortMethod() {
    return Joi.object({
      name: Joi.string().allow(""),

      selected: Joi.boolean(),

      type: Joi.string().allow(""),
    });
  }

  static TagMeta() {
    return Joi.object({
      media: Joi.array().items(this.MediaMeta()),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static Template() {
    return Joi.object({
      date_meta: this.DateMeta(),

      entity: this.Entity(),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      rating: this.Rating(),

      review: this.Review(),

      state: this.FeedbackState(),

      tags: Joi.array().items(this.TagMeta()),
    });
  }

  static TemplateGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.Template()),

      page: this.Page(),
    });
  }

  static TemplateRequest() {
    return Joi.object({
      active: Joi.boolean().required(),

      enable_media_type: Joi.string().allow(""),

      enable_qna: Joi.boolean(),

      enable_rating: Joi.boolean().required(),

      enable_review: Joi.boolean().required(),

      entity: this.EntityRequest().required(),

      rating: this.RatingRequest().required(),

      review: this.ReviewRequest().required(),
    });
  }

  static TemplateRequestList() {
    return Joi.object({
      template_list: Joi.array().items(this.TemplateRequest()).required(),
    });
  }

  static UI() {
    return Joi.object({
      feedback_question: Joi.array().items(Joi.string().allow("")),

      icon: this.UIIcon(),

      text: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static UIIcon() {
    return Joi.object({
      active: Joi.string().allow(""),

      inactive: Joi.string().allow(""),

      selected: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UpdateAttributeRequest() {
    return Joi.object({
      description: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),
    });
  }

  static UpdateResponse() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static UpdateReviewRequest() {
    return Joi.object({
      active: Joi.boolean(),

      application: Joi.string().allow(""),

      approve: Joi.boolean(),

      archive: Joi.boolean(),

      attributes_rating: Joi.array().items(this.AttributeObject()),

      description: Joi.string().allow(""),

      device_meta: this.DeviceMeta(),

      entity_id: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      media_resource: Joi.array().items(this.MediaMeta()),

      rating: Joi.number(),

      review_id: Joi.string().allow(""),

      template_id: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static UpdateTemplateRequest() {
    return Joi.object({
      active: Joi.boolean().required(),

      enable_media_type: Joi.string().allow(""),

      enable_qna: Joi.boolean(),

      enable_rating: Joi.boolean().required(),

      enable_review: Joi.boolean().required(),

      entity: this.EntityRequest().required(),

      rating: this.RatingRequest().required(),

      review: this.ReviewRequest().required(),
    });
  }

  static UpdateTemplateStatusRequest() {
    return Joi.object({
      active: Joi.boolean(),

      archive: Joi.boolean(),
    });
  }

  static AvailablePageSchema() {
    return Joi.object({
      value: Joi.string().allow(""),

      text: Joi.string().allow(""),

      path: Joi.string().allow(""),

      type: Joi.string().allow(""),

      sections: Joi.array().items(this.AvailablePageSchemaSections()),

      sections_meta: Joi.array().items(
        this.AvailablePageSectionMetaAttributes()
      ),

      theme: Joi.string().allow(""),

      seo: this.AvailablePageSeo(),

      props: Joi.array().items(Joi.any()),

      _id: Joi.string().allow(""),
    });
  }

  static AvailablePageSectionMetaAttributes() {
    return Joi.object({
      attributes: Joi.any(),
    });
  }

  static AvailablePageSeo() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      _id: Joi.string().allow(""),
    });
  }

  static AvailablePageSchemaSections() {
    return Joi.object({
      name: Joi.string().allow(""),

      label: Joi.string().allow(""),

      props: Joi.any(),

      blocks: Joi.array().items(Joi.any()),

      preset: Joi.any(),

      predicate: this.AvailablePagePredicate(),
    });
  }

  static AvailablePageScreenPredicate() {
    return Joi.object({
      mobile: Joi.boolean(),

      desktop: Joi.boolean(),

      tablet: Joi.boolean(),
    });
  }

  static AvailablePageUserPredicate() {
    return Joi.object({
      authenticated: Joi.boolean(),

      anonymous: Joi.boolean(),
    });
  }

  static AvailablePageRoutePredicate() {
    return Joi.object({
      selected: Joi.string().allow(""),

      exact_url: Joi.string().allow(""),

      query: Joi.any(),
    });
  }

  static AvailablePagePredicate() {
    return Joi.object({
      screen: this.AvailablePageScreenPredicate(),

      user: this.AvailablePageUserPredicate(),

      route: this.AvailablePageRoutePredicate(),
    });
  }

  static AllAvailablePageSchema() {
    return Joi.object({
      pages: Joi.array().items(this.AvailablePageSchema()),
    });
  }

  static PaginationSchema() {
    return Joi.object({
      size: Joi.number(),

      item_total: Joi.number(),

      has_next: Joi.boolean(),

      type: Joi.string().allow(""),

      current: Joi.number(),
    });
  }

  static ThemesListingResponseSchema() {
    return Joi.object({
      items: Joi.array().items(this.ThemesSchema()),

      page: this.PaginationSchema(),
    });
  }

  static AddThemeRequestSchema() {
    return Joi.object({
      theme_id: Joi.string().allow(""),
    });
  }

  static UpgradableThemeSchema() {
    return Joi.object({
      parent_theme: Joi.string().allow(""),

      applied_theme: Joi.string().allow(""),

      upgrade: Joi.boolean(),
    });
  }

  static FontsSchema() {
    return Joi.object({
      items: this.FontsSchemaItems(),

      kind: Joi.string().allow(""),
    });
  }

  static BlitzkriegApiErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static BlitzkriegNotFoundSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static BlitzkriegInternalServerErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static FontsSchemaItems() {
    return Joi.object({
      family: Joi.string().allow(""),

      variants: Joi.array().items(Joi.string().allow("")),

      subsets: Joi.array().items(Joi.string().allow("")),

      version: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      files: this.FontsSchemaItemsFiles(),

      category: Joi.string().allow(""),

      kind: Joi.string().allow(""),
    });
  }

  static FontsSchemaItemsFiles() {
    return Joi.object({
      regular: Joi.string().allow(""),

      italic: Joi.string().allow(""),

      bold: Joi.string().allow(""),
    });
  }

  static ThemesSchema() {
    return Joi.object({
      application: Joi.string().allow(""),

      applied: Joi.boolean(),

      customized: Joi.boolean(),

      published: Joi.boolean(),

      archived: Joi.boolean(),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      version: Joi.string().allow(""),

      parent_theme_version: Joi.string().allow(""),

      parent_theme: Joi.string().allow(""),

      information: this.Information(),

      tags: Joi.array().items(Joi.string().allow("")),

      src: this.Src(),

      assets: this.AssetsSchema(),

      available_sections: Joi.array().items(this.availableSectionSchema()),

      styles: Joi.any(),

      config: this.Config(),

      font: this.Font(),

      _id: Joi.string().allow(""),

      __v: Joi.number(),

      colors: this.Colors(),
    });
  }

  static availableSectionSchema() {
    return Joi.object({
      blocks: Joi.array().items(this.Blocks()),

      name: Joi.string().allow(""),

      label: Joi.string().allow(""),

      props: Joi.array().items(this.BlocksProps()),
    });
  }

  static Information() {
    return Joi.object({
      images: this.Images(),

      features: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static Images() {
    return Joi.object({
      desktop: Joi.array().items(Joi.string().allow("")),

      android: Joi.array().items(Joi.string().allow("")),

      ios: Joi.array().items(Joi.string().allow("")),

      thumbnail: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Src() {
    return Joi.object({
      link: Joi.string().allow(""),
    });
  }

  static AssetsSchema() {
    return Joi.object({
      umd_js: this.UmdJs(),

      common_js: this.CommonJs(),

      css: this.Css(),
    });
  }

  static UmdJs() {
    return Joi.object({
      link: Joi.string().allow(""),

      links: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CommonJs() {
    return Joi.object({
      link: Joi.string().allow(""),
    });
  }

  static Css() {
    return Joi.object({
      link: Joi.string().allow(""),

      links: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Sections() {
    return Joi.object({
      attributes: Joi.string().allow(""),
    });
  }

  static Config() {
    return Joi.object({
      preset: this.Preset(),

      global_schema: this.GlobalSchema(),

      current: Joi.string().allow(""),

      list: Joi.array().items(this.ListSchemaItem()),
    });
  }

  static Preset() {
    return Joi.object({
      pages: Joi.array().items(this.AvailablePageSchema()),
    });
  }

  static GlobalSchema() {
    return Joi.object({
      props: Joi.array().items(this.GlobalSchemaProps()),
    });
  }

  static ListSchemaItem() {
    return Joi.object({
      global_config: Joi.any(),

      page: Joi.array().items(this.ConfigPage()),

      name: Joi.string().allow(""),
    });
  }

  static Colors() {
    return Joi.object({
      bg_color: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      secondary_color: Joi.string().allow(""),

      accent_color: Joi.string().allow(""),

      link_color: Joi.string().allow(""),

      button_secondary_color: Joi.string().allow(""),
    });
  }

  static Custom() {
    return Joi.object({
      props: Joi.any(),
    });
  }

  static ConfigPage() {
    return Joi.object({
      settings: Joi.any(),

      page: Joi.string().allow(""),
    });
  }

  static Font() {
    return Joi.object({
      family: Joi.string().allow(""),

      variants: this.Variants(),
    });
  }

  static Variants() {
    return Joi.object({
      medium: this.Medium(),

      semi_bold: this.SemiBold(),

      bold: this.Bold(),

      light: this.Light(),

      regular: this.Regular(),
    });
  }

  static Medium() {
    return Joi.object({
      name: Joi.string().allow(""),

      file: Joi.string().allow(""),
    });
  }

  static SemiBold() {
    return Joi.object({
      name: Joi.string().allow(""),

      file: Joi.string().allow(""),
    });
  }

  static Bold() {
    return Joi.object({
      name: Joi.string().allow(""),

      file: Joi.string().allow(""),
    });
  }

  static Light() {
    return Joi.object({
      name: Joi.string().allow(""),

      file: Joi.string().allow(""),
    });
  }

  static Regular() {
    return Joi.object({
      name: Joi.string().allow(""),

      file: Joi.string().allow(""),
    });
  }

  static Blocks() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      props: Joi.array().items(this.BlocksProps()),
    });
  }

  static GlobalSchemaProps() {
    return Joi.object({
      id: Joi.string().allow(""),

      label: Joi.string().allow(""),

      type: Joi.string().allow(""),

      category: Joi.string().allow(""),
    });
  }

  static BlocksProps() {
    return Joi.object({
      id: Joi.string().allow(""),

      label: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static BlockUserRequestSchema() {
    return Joi.object({
      status: Joi.boolean(),

      user_id: Joi.array().items(Joi.string().allow("")),

      reason: Joi.string().allow(""),
    });
  }

  static ArchiveUserRequestSchema() {
    return Joi.object({
      user_id: Joi.string().allow(""),
    });
  }

  static DeleteApplicationUserRequestSchema() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      reason_id: Joi.string().allow(""),

      request_id: Joi.string().allow(""),

      otp: Joi.string().allow(""),
    });
  }

  static UnDeleteUserRequestSchema() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      reason_id: Joi.string().allow(""),
    });
  }

  static EditEmailRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),
    });
  }

  static SendVerificationLinkMobileRequestSchema() {
    return Joi.object({
      verified: Joi.boolean(),

      active: Joi.boolean(),

      country_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      primary: Joi.boolean(),
    });
  }

  static EditMobileRequestSchema() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static EditProfileRequestSchema() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      mobile: this.EditProfileMobileSchema(),

      country_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      dob: Joi.string().allow(""),

      profile_pic_url: Joi.string().allow(""),

      android_hash: Joi.string().allow(""),

      sender: Joi.string().allow(""),

      register_token: Joi.string().allow(""),
    });
  }

  static EditProfileMobileSchema() {
    return Joi.object({
      phone: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static SendEmailOtpRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),

      action: Joi.string().allow(""),

      token: Joi.string().allow(""),

      register_token: Joi.string().allow(""),
    });
  }

  static VerifyEmailOtpRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),

      action: Joi.string().allow(""),

      register_token: Joi.string().allow(""),

      otp: Joi.string().allow(""),
    });
  }

  static VerifyOtpRequestSchema() {
    return Joi.object({
      request_id: Joi.string().allow(""),

      register_token: Joi.string().allow(""),

      otp: Joi.string().allow(""),
    });
  }

  static SendMobileOtpRequestSchema() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      action: Joi.string().allow(""),

      token: Joi.string().allow(""),

      android_hash: Joi.string().allow(""),

      force: Joi.string().allow(""),

      captcha_code: Joi.string().allow(""),
    });
  }

  static UpdatePasswordRequestSchema() {
    return Joi.object({
      old_password: Joi.string().allow(""),

      new_password: Joi.string().allow(""),
    });
  }

  static FormRegisterRequestSchema() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      password: Joi.string().allow(""),

      phone: this.FormRegisterRequestSchemaPhone(),

      register_token: Joi.string().allow(""),
    });
  }

  static TokenRequestBodySchema() {
    return Joi.object({
      token: Joi.string().allow(""),
    });
  }

  static ForgotPasswordRequestSchema() {
    return Joi.object({
      code: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static CodeRequestBodySchema() {
    return Joi.object({
      code: Joi.string().allow(""),
    });
  }

  static SendResetPasswordEmailRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),

      captcha_code: Joi.string().allow(""),
    });
  }

  static SendResetPasswordMobileRequestSchema() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      captcha_code: Joi.string().allow(""),
    });
  }

  static PasswordLoginRequestSchema() {
    return Joi.object({
      captcha_code: Joi.string().allow(""),

      password: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static SendOtpRequestSchema() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      captcha_code: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      android_hash: Joi.string().allow(""),
    });
  }

  static OAuthRequestSchema() {
    return Joi.object({
      is_signed_in: Joi.boolean(),

      oauth2: this.OAuthRequestSchemaOauth2(),

      profile: this.OAuthRequestSchemaProfile(),
    });
  }

  static OAuthRequestAppleSchema() {
    return Joi.object({
      user_identifier: Joi.string().allow(""),

      oauth: this.OAuthRequestAppleSchemaOauth(),

      profile: this.OAuthRequestAppleSchemaProfile(),
    });
  }

  static UserObjectSchema() {
    return Joi.object({
      user: this.UserSchema(),
    });
  }

  static AuthSuccess() {
    return Joi.object({
      register_token: Joi.string().allow(""),

      user_exists: Joi.boolean(),

      user: this.UserSchema(),
    });
  }

  static SendOtpResponse() {
    return Joi.object({
      resend_timer: Joi.number(),

      resend_token: Joi.string().allow(""),

      success: Joi.boolean(),

      request_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      resend_email_token: Joi.string().allow(""),

      register_token: Joi.string().allow(""),

      verify_email_otp: Joi.boolean(),

      verify_mobile_otp: Joi.boolean(),

      user_exists: Joi.boolean(),
    });
  }

  static ProfileEditSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      register_token: Joi.string().allow(""),

      resend_email_token: Joi.string().allow(""),

      user_exists: Joi.boolean(),

      verify_email_link: Joi.boolean(),

      verify_email_otp: Joi.boolean(),

      verify_mobile_otp: Joi.boolean(),

      email: Joi.string().allow(""),

      request_id: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      resend_timer: Joi.number(),

      resend_token: Joi.string().allow(""),
    });
  }

  static LoginSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      request_id: Joi.string().allow(""),

      register_token: Joi.string().allow(""),
    });
  }

  static VerifyOtpSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      user_exists: Joi.boolean(),

      register_token: Joi.string().allow(""),
    });
  }

  static ResetPasswordSuccess() {
    return Joi.object({
      status: Joi.string().allow(""),
    });
  }

  static RegisterFormSuccess() {
    return Joi.object({
      email: Joi.string().allow(""),

      resend_timer: Joi.number(),

      resend_token: Joi.string().allow(""),

      resend_email_token: Joi.string().allow(""),

      register_token: Joi.string().allow(""),

      success: Joi.boolean(),

      request_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      verify_email_otp: Joi.boolean(),

      verify_mobile_otp: Joi.boolean(),

      user_exists: Joi.boolean(),
    });
  }

  static VerifyEmailSuccess() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static HasPasswordSuccess() {
    return Joi.object({
      result: Joi.boolean(),
    });
  }

  static LogoutSuccess() {
    return Joi.object({
      logout: Joi.boolean(),
    });
  }

  static BlockUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static ArchiveUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static DeleteUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static UnDeleteUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static OtpSuccess() {
    return Joi.object({
      resend_timer: Joi.number(),

      resend_token: Joi.string().allow(""),

      register_token: Joi.string().allow(""),

      success: Joi.boolean(),

      request_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static EmailOtpSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static SessionListSuccess() {
    return Joi.object({
      sessions: Joi.array().items(Joi.string().allow("")),
    });
  }

  static VerifyMobileOTPSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      verify_mobile_link: Joi.boolean(),
    });
  }

  static VerifyEmailOTPSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      verify_email_link: Joi.boolean(),
    });
  }

  static SendMobileVerifyLinkSuccess() {
    return Joi.object({
      verify_mobile_link: Joi.boolean(),
    });
  }

  static SendEmailVerifyLinkSuccess() {
    return Joi.object({
      verify_email_link: Joi.boolean(),
    });
  }

  static UserSearchResponseSchema() {
    return Joi.object({
      users: Joi.array().items(this.UserSchema()),
    });
  }

  static CustomerListResponseSchema() {
    return Joi.object({
      items: Joi.array().items(this.UserSchema()),

      page: this.PaginationSchema(),
    });
  }

  static SessionListResponseSchema() {
    return Joi.object({
      items: Joi.array().items(Joi.string().allow("")),
    });
  }

  static SessionDeleteResponseSchema() {
    return Joi.object({
      items: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UnauthorizedSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static UnauthenticatedSchema() {
    return Joi.object({
      authenticated: Joi.boolean(),
    });
  }

  static NotFoundSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static AuthenticationInternalServerErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static AuthenticationApiErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProfileEditSuccessSchema() {
    return Joi.object({
      email: Joi.string().allow(""),

      verify_email_otp: Joi.boolean(),

      verify_email_link: Joi.boolean(),

      verify_mobile_otp: Joi.boolean(),

      user: Joi.string().allow(""),

      register_token: Joi.string().allow(""),

      user_exists: Joi.boolean(),
    });
  }

  static FormRegisterRequestSchemaPhone() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static OAuthRequestSchemaOauth2() {
    return Joi.object({
      access_token: Joi.string().allow(""),

      expiry: Joi.number(),

      refresh_token: Joi.string().allow(""),
    });
  }

  static OAuthRequestSchemaProfile() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      image: Joi.string().allow(""),

      id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      full_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static OAuthRequestAppleSchemaOauth() {
    return Joi.object({
      identity_token: Joi.string().allow(""),
    });
  }

  static OAuthRequestAppleSchemaProfile() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      full_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static AuthSuccessUser() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      debug: this.AuthSuccessUserDebug(),

      active: Joi.boolean(),

      emails: this.AuthSuccessUserEmails(),
    });
  }

  static AuthSuccessUserDebug() {
    return Joi.object({
      platform: Joi.string().allow(""),
    });
  }

  static AuthSuccessUserEmails() {
    return Joi.object({
      email: Joi.string().allow(""),

      verified: Joi.boolean(),

      primary: Joi.boolean(),

      active: Joi.boolean(),
    });
  }

  static CreateUserRequestSchema() {
    return Joi.object({
      phone_number: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      username: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static CreateUserResponseSchema() {
    return Joi.object({
      user: this.UserSchema(),
    });
  }

  static CreateUserSessionRequestSchema() {
    return Joi.object({
      domain: Joi.string().allow(""),

      max_age: Joi.number(),

      user_id: Joi.string().allow(""),
    });
  }

  static CreateUserSessionResponseSchema() {
    return Joi.object({
      domain: Joi.string().allow(""),

      max_age: Joi.number(),

      secure: Joi.boolean(),

      http_only: Joi.boolean(),

      cookie: Joi.any(),
    });
  }

  static PlatformSchema() {
    return Joi.object({
      display: Joi.string().allow(""),

      look_and_feel: this.LookAndFeel(),

      updated_at: Joi.string().allow(""),

      active: Joi.boolean(),

      forgot_password: Joi.boolean(),

      login: this.Login(),

      skip_captcha: Joi.boolean(),

      name: Joi.string().allow(""),

      meta: this.MetaSchema(),

      _id: Joi.string().allow(""),

      social: this.Social(),

      required_fields: this.RequiredFields(),

      register_required_fields: this.RegisterRequiredFields(),

      skip_login: Joi.boolean(),

      flash_card: this.FlashCard(),

      subtext: Joi.string().allow(""),

      social_tokens: this.SocialTokens(),

      created_at: Joi.string().allow(""),

      register: Joi.boolean(),

      mobile_image: Joi.string().allow(""),

      desktop_image: Joi.string().allow(""),

      delete_account_day: Joi.number(),

      delete_account_reasons: Joi.array().items(this.DeleteAccountReasons()),

      delete_account_consent: Joi.any(),

      session_config: Joi.any(),
    });
  }

  static LookAndFeel() {
    return Joi.object({
      card_position: Joi.string().allow(""),

      background_color: Joi.string().allow(""),
    });
  }

  static Login() {
    return Joi.object({
      password: Joi.boolean(),

      otp: Joi.boolean(),
    });
  }

  static MetaSchema() {
    return Joi.object({
      fynd_default: Joi.boolean(),
    });
  }

  static Social() {
    return Joi.object({
      account_kit: Joi.boolean(),

      facebook: Joi.boolean(),

      google: Joi.boolean(),

      apple: Joi.boolean(),
    });
  }

  static RequiredFields() {
    return Joi.object({
      email: this.PlatformEmail(),

      mobile: this.PlatformMobile(),
    });
  }

  static PlatformEmail() {
    return Joi.object({
      is_required: Joi.boolean(),

      level: Joi.string().allow(""),
    });
  }

  static PlatformMobile() {
    return Joi.object({
      is_required: Joi.boolean(),

      level: Joi.string().allow(""),
    });
  }

  static RegisterRequiredFields() {
    return Joi.object({
      email: this.RegisterRequiredFieldsEmail(),

      mobile: this.RegisterRequiredFieldsMobile(),
    });
  }

  static RegisterRequiredFieldsEmail() {
    return Joi.object({
      is_required: Joi.boolean(),

      level: Joi.string().allow(""),
    });
  }

  static RegisterRequiredFieldsMobile() {
    return Joi.object({
      is_required: Joi.boolean(),

      level: Joi.string().allow(""),
    });
  }

  static FlashCard() {
    return Joi.object({
      text: Joi.string().allow(""),

      text_color: Joi.string().allow(""),

      background_color: Joi.string().allow(""),
    });
  }

  static SocialTokens() {
    return Joi.object({
      facebook: this.Facebook(),

      account_kit: this.Accountkit(),

      google: this.Google(),
    });
  }

  static DeleteAccountReasons() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.string().allow(""),

      show_text_area: Joi.boolean(),
    });
  }

  static DeleteAccountConsent() {
    return Joi.object({
      consent_text: Joi.string().allow(""),
    });
  }

  static Facebook() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }

  static Accountkit() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }

  static Google() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }

  static SessionExpiry() {
    return Joi.object({
      duration: Joi.number(),

      type: Joi.string().allow(""),

      is_rolling: Joi.boolean(),
    });
  }

  static UpdateUserRequestSchema() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static UserSchema() {
    return Joi.object({
      application_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      meta: Joi.any(),

      last_name: Joi.string().allow(""),

      phone_numbers: Joi.array().items(this.PhoneNumber()),

      emails: Joi.array().items(this.Email()),

      gender: Joi.string().allow(""),

      dob: Joi.string().allow(""),

      active: Joi.boolean(),

      profile_pic_url: Joi.string().allow(""),

      username: Joi.string().allow(""),

      account_type: Joi.string().allow(""),

      debug: this.Debug(),

      has_old_password_hash: Joi.boolean(),

      _id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
    });
  }

  static PhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      phone: Joi.string().allow(""),

      country_code: Joi.number(),
    });
  }

  static ApplicationLegal() {
    return Joi.object({
      application: Joi.string().allow(""),

      tnc: Joi.string().allow(""),

      policy: Joi.string().allow(""),

      shipping: Joi.string().allow(""),

      returns: Joi.string().allow(""),

      faq: Joi.array().items(this.ApplicationLegalFAQ()),

      _id: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static ApplicationLegalFAQ() {
    return Joi.object({
      question: Joi.string().allow(""),

      answer: Joi.string().allow(""),
    });
  }

  static PathMappingSchema() {
    return Joi.object({
      application: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      redirect_from: Joi.string().allow(""),

      redirect_to: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      __source: this.TagSourceSchema(),
    });
  }

  static SeoComponent() {
    return Joi.object({
      seo: this.SeoSchema(),
    });
  }

  static SeoSchema() {
    return Joi.object({
      app: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      robots_txt: Joi.string().allow(""),

      sitemap_enabled: Joi.boolean(),

      custom_meta_tags: Joi.array().items(Joi.any()),

      details: this.Detail(),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
    });
  }

  static CustomMetaTag() {
    return Joi.object({
      name: Joi.string().allow(""),

      content: Joi.string().allow(""),

      _id: Joi.string().allow(""),
    });
  }

  static Detail() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static AnnouncementPageSchema() {
    return Joi.object({
      page_slug: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static EditorMeta() {
    return Joi.object({
      foreground_color: Joi.string().allow(""),

      background_color: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      content: Joi.string().allow(""),
    });
  }

  static AnnouncementAuthorSchema() {
    return Joi.object({
      created_by: Joi.string().allow(""),

      modified_by: Joi.string().allow(""),
    });
  }

  static AdminAnnouncementSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),

      platforms: Joi.array().items(Joi.string().allow("")),

      title: Joi.string().allow(""),

      announcement: Joi.string().allow(""),

      pages: Joi.array().items(this.AnnouncementPageSchema()),

      editor_meta: this.EditorMeta(),

      author: this.AnnouncementAuthorSchema(),

      created_at: Joi.string().allow(""),

      app: Joi.string().allow(""),

      modified_at: Joi.string().allow(""),

      _schedule: this.ScheduleSchema(),
    });
  }

  static ScheduleSchema() {
    return Joi.object({
      cron: Joi.string().allow(""),

      start: Joi.string().allow(""),

      end: Joi.string().allow(""),

      duration: Joi.number(),

      next_schedule: Joi.array().items(Joi.any()),
    });
  }

  static NextSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),

      end: Joi.string().allow(""),
    });
  }

  static AnnouncementSchema() {
    return Joi.object({
      announcement: Joi.string().allow(""),

      schedule: this.ScheduleStartSchema(),
    });
  }

  static ScheduleStartSchema() {
    return Joi.object({
      start: Joi.string().allow(""),

      end: Joi.string().allow(""),
    });
  }

  static BlogGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.BlogSchema()),

      page: this.Page(),
    });
  }

  static ResourceContent() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static Asset() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      id: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static Author() {
    return Joi.object({
      designation: Joi.string().allow(""),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static BlogSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      application: Joi.string().allow(""),

      archived: Joi.boolean(),

      author: this.Author(),

      content: Joi.array().items(this.ResourceContent()),

      feature_image: this.Asset(),

      published: Joi.boolean(),

      reading_time: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      seo: this.SEO(),

      _schedule: this.CronSchedule(),

      title: Joi.string().allow(""),

      date_meta: this.DateMeta(),
    });
  }

  static SEO() {
    return Joi.object({
      description: Joi.string().allow(""),

      image: this.SEOImage(),

      title: Joi.string().allow(""),
    });
  }

  static SEOImage() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }

  static BlogRequest() {
    return Joi.object({
      application: Joi.string().allow(""),

      _custom_json: Joi.any(),

      author: this.Author(),

      content: Joi.array().items(this.ResourceContent()),

      feature_image: this.Asset(),

      published: Joi.boolean(),

      reading_time: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      title: Joi.string().allow(""),

      seo: this.SEO(),

      _schedule: this.CronSchedule(),
    });
  }

  static GetAnnouncementListSchema() {
    return Joi.object({
      items: Joi.array().items(this.AdminAnnouncementSchema()),

      page: this.Page(),
    });
  }

  static CreateAnnouncementSchema() {
    return Joi.object({
      message: Joi.string().allow(""),

      data: this.AdminAnnouncementSchema(),
    });
  }

  static DataLoaderResponseSchema() {
    return Joi.object({
      application: Joi.string().allow(""),

      company: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      service: Joi.string().allow(""),

      operation_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      content: Joi.string().allow(""),

      __source: this.DataLoaderSourceSchema(),
    });
  }

  static DataLoaderResetResponseSchema() {
    return Joi.object({
      reset: Joi.string().allow(""),
    });
  }

  static Navigation() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      orientation: Joi.string().allow(""),

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      _id: Joi.string().allow(""),

      position: Joi.string().allow(""),

      application: Joi.string().allow(""),

      platform: Joi.string().allow(""),

      navigation: this.NavigationReference(),
    });
  }

  static LocaleLanguage() {
    return Joi.object({
      hi: this.Language(),

      ar: this.Language(),

      en_us: this.Language(),
    });
  }

  static Language() {
    return Joi.object({
      display: Joi.string().allow(""),
    });
  }

  static Action() {
    return Joi.object({
      page: this.ActionPage(),

      popup: this.ActionPage(),

      type: Joi.string().allow(""),
    });
  }

  static ActionPage() {
    return Joi.object({
      params: Joi.object().pattern(
        /\S/,
        Joi.array().items(Joi.string().allow(""))
      ),

      query: Joi.object().pattern(
        /\S/,
        Joi.array().items(Joi.string().allow(""))
      ),

      url: Joi.string().allow(""),

      type: this.PageType().required(),
    });
  }

  static NavigationReference() {
    return Joi.object({
      acl: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      _locale_language: this.LocaleLanguage(),

      image: Joi.string().allow(""),

      type: Joi.string().allow(""),

      action: this.Action(),

      active: Joi.boolean(),

      display: Joi.string().allow(""),

      sort_order: Joi.number(),

      sub_navigation: Joi.array().items(this.SubNavigationReference()),
    });
  }

  static SubNavigationReference() {
    return Joi.object({
      acl: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      _locale_language: this.LocaleLanguage(),

      image: Joi.string().allow(""),

      type: Joi.string().allow(""),

      action: this.Action(),

      active: Joi.boolean(),

      display: Joi.string().allow(""),

      sort_order: Joi.number(),

      sub_navigation: Joi.array().items(this.NavigationReference()),
    });
  }

  static LandingPage() {
    return Joi.object({
      data: this.LandingPageSchema(),

      success: Joi.boolean(),
    });
  }

  static ConfigurationSchema() {
    return Joi.object({
      sleep_time: Joi.number(),

      start_on_launch: Joi.boolean(),

      duration: Joi.number(),

      slide_direction: Joi.string().allow(""),
    });
  }

  static SlideshowMedia() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      bg_color: Joi.string().allow(""),

      duration: Joi.number(),

      auto_decide_duration: Joi.boolean(),

      action: this.Action(),
    });
  }

  static Slideshow() {
    return Joi.object({
      data: this.SlideshowSchema(),

      success: Joi.boolean(),
    });
  }

  static AnnouncementsResponseSchema() {
    return Joi.object({
      announcements: Joi.object().pattern(
        /\S/,
        Joi.array().items(this.AnnouncementSchema())
      ),

      refresh_rate: Joi.number(),

      refresh_pages: Joi.array().items(Joi.string().allow("")),
    });
  }

  static FaqResponseSchema() {
    return Joi.object({
      faqs: Joi.array().items(this.FaqSchema()),
    });
  }

  static UpdateHandpickedSchema() {
    return Joi.object({
      tag: this.HandpickedTagSchema(),
    });
  }

  static HandpickedTagSchema() {
    return Joi.object({
      position: Joi.string().allow(""),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      content: Joi.string().allow(""),
    });
  }

  static RemoveHandpickedSchema() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CreateTagSchema() {
    return Joi.object({
      name: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      position: Joi.string().allow(""),

      attributes: Joi.any(),

      pages: Joi.array().items(Joi.any()),

      content: Joi.string().allow(""),
    });
  }

  static CreateTagRequestSchema() {
    return Joi.object({
      tags: Joi.array().items(this.CreateTagSchema()),
    });
  }

  static DataLoaderSchema() {
    return Joi.object({
      name: Joi.string().allow(""),

      service: Joi.string().allow(""),

      operation_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      content: Joi.string().allow(""),

      __source: this.DataLoaderSourceSchema(),

      _id: Joi.string().allow(""),
    });
  }

  static DataLoaderSourceSchema() {
    return Joi.object({
      type: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static DataLoadersSchema() {
    return Joi.object({
      items: Joi.array().items(this.DataLoaderSchema()),
    });
  }

  static TagDeleteSuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static ContentAPIError() {
    return Joi.object({
      message: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      info: Joi.string().allow(""),

      request_id: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static CommonError() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CategorySchema() {
    return Joi.object({
      index: Joi.number(),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      children: Joi.array().items(Joi.string().allow("")),

      _id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      application: Joi.string().allow(""),

      icon_url: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static ChildrenSchema() {
    return Joi.object({
      question: Joi.string().allow(""),

      answer: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      application: Joi.string().allow(""),

      _id: Joi.string().allow(""),
    });
  }

  static CategoryRequestSchema() {
    return Joi.object({
      slug: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static FAQCategorySchema() {
    return Joi.object({
      index: Joi.number(),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      children: Joi.array().items(this.ChildrenSchema()),

      _id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      application: Joi.string().allow(""),

      icon_url: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static FaqSchema() {
    return Joi.object({
      slug: Joi.string().allow(""),

      application: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      question: Joi.string().allow(""),

      answer: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static FAQ() {
    return Joi.object({
      slug: Joi.string().allow(""),

      question: Joi.string().allow(""),

      answer: Joi.string().allow(""),
    });
  }

  static CreateFaqResponseSchema() {
    return Joi.object({
      faq: this.FaqSchema(),
    });
  }

  static CreateFaqSchema() {
    return Joi.object({
      faq: this.FAQ(),
    });
  }

  static GetFaqSchema() {
    return Joi.object({
      faqs: Joi.array().items(this.FaqSchema()),
    });
  }

  static UpdateFaqCategoryRequestSchema() {
    return Joi.object({
      category: this.CategorySchema(),
    });
  }

  static CreateFaqCategoryRequestSchema() {
    return Joi.object({
      category: this.CategoryRequestSchema(),
    });
  }

  static CreateFaqCategorySchema() {
    return Joi.object({
      category: this.CategorySchema(),
    });
  }

  static GetFaqCategoriesSchema() {
    return Joi.object({
      categories: Joi.array().items(this.CategorySchema()),
    });
  }

  static GetFaqCategoryBySlugSchema() {
    return Joi.object({
      category: this.FAQCategorySchema(),
    });
  }

  static LandingPageGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.LandingPageSchema()),

      page: this.Page(),
    });
  }

  static LandingPageSchema() {
    return Joi.object({
      slug: Joi.string().allow(""),

      action: this.Action(),

      platform: Joi.array().items(Joi.string().allow("")),

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      _id: Joi.string().allow(""),

      application: Joi.string().allow(""),

      archived: Joi.boolean(),

      _custom_json: Joi.any(),
    });
  }

  static DefaultNavigationResponse() {
    return Joi.object({
      items: Joi.array().items(this.NavigationSchema()),
    });
  }

  static NavigationGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.NavigationSchema()),

      page: this.Page(),
    });
  }

  static Orientation() {
    return Joi.object({
      portrait: Joi.array().items(Joi.string().allow("")),

      landscape: Joi.array().items(Joi.string().allow("")),
    });
  }

  static NavigationSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),

      application: Joi.string().allow(""),

      archived: Joi.boolean(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      platform: Joi.array().items(Joi.string().allow("")),

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      orientation: this.Orientation(),

      version: Joi.number(),

      navigation: Joi.array().items(this.NavigationReference()),
    });
  }

  static NavigationRequest() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      platform: Joi.array().items(Joi.string().allow("")),

      orientation: this.Orientation(),

      navigation: Joi.array().items(this.NavigationReference()),
    });
  }

  static CustomPageSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),

      platform: Joi.string().allow(""),

      title: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      orientation: Joi.string().allow(""),

      application: Joi.string().allow(""),

      description: Joi.string().allow(""),

      published: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      content: Joi.array().items(Joi.any()),

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      _schedule: this.ScheduleSchema(),
    });
  }

  static ContentSchema() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.any(),
    });
  }

  static CustomPage() {
    return Joi.object({
      data: this.CustomPageSchema(),
    });
  }

  static FeatureImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),
    });
  }

  static PageGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.PageSchema()),

      page: this.Page(),
    });
  }

  static PageSpec() {
    return Joi.object({
      specifications: Joi.array().items(Joi.any()),
    });
  }

  static PageSpecParam() {
    return Joi.object({
      key: Joi.string().allow(""),

      required: Joi.boolean(),
    });
  }

  static PageSpecItem() {
    return Joi.object({
      page_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      params: Joi.array().items(this.PageSpecParam()),

      query: Joi.array().items(this.PageSpecParam()),
    });
  }

  static PageSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),

      application: Joi.string().allow(""),

      component_ids: Joi.array().items(Joi.string().allow("")),

      content: Joi.array().items(Joi.any()),

      content_path: Joi.string().allow(""),

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      description: Joi.string().allow(""),

      feature_image: this.Asset(),

      page_meta: Joi.array().items(Joi.any()),

      _schedule: this.ScheduleSchema(),

      _custom_json: Joi.any(),

      orientation: Joi.string().allow(""),

      platform: Joi.string().allow(""),

      published: Joi.boolean(),

      slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      title: Joi.string().allow(""),

      type: Joi.string().allow(""),

      seo: this.SEO(),

      visibility: Joi.any(),

      archived: Joi.boolean(),
    });
  }

  static CreatedBySchema() {
    return Joi.object({
      id: Joi.string().allow(""),
    });
  }

  static PageContent() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.any(),
    });
  }

  static PageMeta() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.any(),
    });
  }

  static PageRequest() {
    return Joi.object({
      _schedule: this.CronSchedule(),

      application: Joi.string().allow(""),

      author: this.Author(),

      _custom_json: Joi.any(),

      orientation: Joi.string().allow(""),

      content: Joi.array().items(Joi.any()),

      feature_image: this.Asset(),

      published: Joi.boolean(),

      reading_time: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      seo: this.SEO(),

      title: Joi.string().allow(""),
    });
  }

  static CronSchedule() {
    return Joi.object({
      cron: Joi.string().allow(""),

      start: Joi.string().allow(""),

      end: Joi.string().allow(""),

      duration: Joi.number(),
    });
  }

  static PagePublishRequest() {
    return Joi.object({
      publish: Joi.boolean(),
    });
  }

  static PageMetaSchema() {
    return Joi.object({
      system_pages: Joi.array().items(this.NavigationSchema()),

      custom_pages: Joi.array().items(this.PageSchema()),

      application_id: Joi.string().allow(""),
    });
  }

  static SlideshowGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.SlideshowSchema()),

      page: this.Page(),
    });
  }

  static SlideshowSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      date_meta: this.DateMeta(),

      application: Joi.string().allow(""),

      platform: Joi.string().allow(""),

      configuration: this.ConfigurationSchema(),

      media: Joi.array().items(this.SlideshowMedia()),

      active: Joi.boolean(),

      archived: Joi.boolean(),

      _custom_json: Joi.any(),
    });
  }

  static SlideshowRequest() {
    return Joi.object({
      slug: Joi.string().allow(""),

      platform: Joi.string().allow(""),

      configuration: this.ConfigurationSchema(),

      media: this.SlideshowMedia(),

      active: Joi.boolean(),
    });
  }

  static Support() {
    return Joi.object({
      created: Joi.boolean(),

      _id: Joi.string().allow(""),

      config_type: Joi.string().allow(""),

      application: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      contact: this.ContactSchema(),
    });
  }

  static PhoneProperties() {
    return Joi.object({
      key: Joi.string().allow(""),

      code: Joi.string().allow(""),

      number: Joi.string().allow(""),
    });
  }

  static PhoneSchema() {
    return Joi.object({
      active: Joi.boolean(),

      phone: Joi.array().items(this.PhoneProperties()),
    });
  }

  static EmailProperties() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static EmailSchema() {
    return Joi.object({
      active: Joi.boolean(),

      email: Joi.array().items(this.EmailProperties()),
    });
  }

  static ContactSchema() {
    return Joi.object({
      phone: this.PhoneSchema(),

      email: this.EmailSchema(),
    });
  }

  static TagsSchema() {
    return Joi.object({
      application: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      tags: Joi.array().items(this.TagSchema()),
    });
  }

  static TagSchema() {
    return Joi.object({
      name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      position: Joi.string().allow(""),

      attributes: Joi.any(),

      content: Joi.string().allow(""),

      pages: Joi.array().items(Joi.any()),

      __source: this.TagSourceSchema(),
    });
  }

  static TagSourceSchema() {
    return Joi.object({
      type: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  /*
        Enum: PageType
        Used By: Content
    */
  static PageType() {
    return Joi.string().valid(
      "about-us",

      "addresses",

      "blog",

      "brands",

      "cards",

      "cart",

      "categories",

      "brand",

      "category",

      "collection",

      "collections",

      "contact-us",

      "external",

      "faq",

      "freshchat",

      "home",

      "notification-settings",

      "orders",

      "page",

      "policy",

      "product",

      "product-reviews",

      "add-product-review",

      "product-request",

      "products",

      "profile",

      "profile-order-shipment",

      "profile-basic",

      "profile-company",

      "profile-emails",

      "profile-phones",

      "rate-us",

      "refer-earn",

      "settings",

      "shared-cart",

      "tnc",

      "track-order",

      "wishlist",

      "sections",

      "form",

      "cart-delivery",

      "cart-payment",

      "cart-review",

      "login",

      "register",

      "shipping-policy",

      "return-policy"
    );
  }

  static UnauthenticatedUser() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static UnauthenticatedApplication() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ResourceNotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static InternalServerError() {
    return Joi.object({
      message: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static CheckValidityResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      discount_amount: Joi.number(),
    });
  }

  static PlanRecurring() {
    return Joi.object({
      interval: Joi.string().allow(""),

      interval_count: Joi.number(),
    });
  }

  static Plan() {
    return Joi.object({
      recurring: this.PlanRecurring(),

      is_trial_plan: Joi.boolean(),

      plan_group: Joi.string().allow(""),

      tag_lines: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      is_active: Joi.boolean(),

      is_visible: Joi.boolean(),

      trial_period: Joi.number(),

      addons: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      amount: Joi.number(),

      product_suite_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      modified_at: Joi.string().allow(""),
    });
  }

  static DetailedPlanComponents() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      group: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      links: Joi.any(),

      enabled: Joi.boolean(),

      display_text: Joi.string().allow(""),
    });
  }

  static DetailedPlan() {
    return Joi.object({
      recurring: this.PlanRecurring(),

      is_trial_plan: Joi.boolean(),

      plan_group: Joi.string().allow(""),

      tag_lines: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      is_active: Joi.boolean(),

      is_visible: Joi.boolean(),

      trial_period: Joi.number(),

      addons: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      amount: Joi.number(),

      product_suite_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      modified_at: Joi.string().allow(""),

      components: Joi.array().items(this.DetailedPlanComponents()),
    });
  }

  static SubscriptionTrialPeriod() {
    return Joi.object({
      start_date: Joi.string().allow(""),

      end_date: Joi.string().allow(""),
    });
  }

  static EntityChargePrice() {
    return Joi.object({
      amount: Joi.number().required(),

      currency_code: Joi.string().allow("").required(),
    });
  }

  static EntityChargeRecurring() {
    return Joi.object({
      interval: Joi.string().allow("").required(),
    });
  }

  static ChargeLineItem() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      term: Joi.string().allow("").required(),

      pricing_type: Joi.string().allow("").required(),

      price: this.EntityChargePrice().required(),

      recurring: this.EntityChargeRecurring(),

      capped_amount: Joi.number(),

      trial_days: Joi.number(),

      is_test: Joi.boolean(),

      metadata: Joi.any(),
    });
  }

  static CreateSubscriptionCharge() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      trial_days: Joi.number(),

      line_items: Joi.array().items(this.ChargeLineItem()).required(),

      is_test: Joi.boolean(),

      return_url: Joi.string().allow("").required(),
    });
  }

  static OneTimeChargeItem() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      term: Joi.string().allow(""),

      pricing_type: Joi.string().allow("").required(),

      price: this.EntityChargePrice().required(),

      capped_amount: Joi.number(),

      is_test: Joi.boolean(),

      metadata: Joi.any(),
    });
  }

  static CreateOneTimeCharge() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      charge: this.OneTimeChargeItem().required(),

      is_test: Joi.boolean(),

      return_url: Joi.string().allow("").required(),
    });
  }

  static CurrentPeriod() {
    return Joi.object({
      start_date: Joi.string().allow(""),

      end_date: Joi.string().allow(""),
    });
  }

  static SubscriptionCharge() {
    return Joi.object({
      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      term: Joi.string().allow(""),

      pricing_type: Joi.string().allow(""),

      price: this.EntityChargePrice(),

      recurring: this.EntityChargeRecurring(),

      capped_amount: Joi.number(),

      activated_on: Joi.string().allow(""),

      cancelled_on: Joi.string().allow(""),

      billing_date: Joi.string().allow(""),

      current_period: this.CurrentPeriod(),

      status: Joi.string().allow(""),

      is_test: Joi.boolean(),

      metadata: Joi.any(),
    });
  }

  static EntitySubscription() {
    return Joi.object({
      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      company_id: Joi.number(),

      activated_on: Joi.string().allow(""),

      cancelled_on: Joi.string().allow(""),

      trial_days: Joi.number(),

      trial_period: this.SubscriptionTrialPeriod(),

      metadata: Joi.any(),

      line_items: Joi.array().items(this.SubscriptionCharge()),
    });
  }

  static OneTimeChargeEntity() {
    return Joi.object({
      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      activated_on: Joi.string().allow(""),

      cancelled_on: Joi.string().allow(""),

      metadata: Joi.any(),

      return_url: Joi.string().allow(""),

      is_test: Joi.boolean(),

      pricing_type: Joi.string().allow(""),

      subscriber_id: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      entity_id: Joi.string().allow(""),

      meta: Joi.any(),

      price: this.EntityChargePrice(),
    });
  }

  static CreateOneTimeChargeResponse() {
    return Joi.object({
      charge: this.OneTimeChargeEntity(),

      confirm_url: Joi.string().allow(""),
    });
  }

  static CreateSubscriptionResponse() {
    return Joi.object({
      subscription: this.EntitySubscription(),

      confirm_url: Joi.string().allow(""),
    });
  }

  static InvoiceDetailsPeriod() {
    return Joi.object({
      start: Joi.string().allow(""),

      end: Joi.string().allow(""),
    });
  }

  static InvoiceDetailsClient() {
    return Joi.object({
      address_lines: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static InvoiceDetailsStatusTrail() {
    return Joi.object({
      _id: Joi.string().allow(""),

      value: Joi.string().allow(""),

      timestamp: Joi.string().allow(""),
    });
  }

  static InvoiceDetailsPaymentMethodsDataChecks() {
    return Joi.object({
      cvc_check: Joi.string().allow(""),

      address_line1_check: Joi.string().allow(""),

      address_postal_code_check: Joi.string().allow(""),
    });
  }

  static InvoiceDetailsPaymentMethodsDataNetworks() {
    return Joi.object({
      available: Joi.array().items(Joi.string().allow("")),

      preferred: Joi.string().allow(""),
    });
  }

  static InvoiceDetailsPaymentMethodsDataThreeDSecureUsage() {
    return Joi.object({
      supported: Joi.boolean(),
    });
  }

  static InvoiceDetailsPaymentMethodsData() {
    return Joi.object({
      brand: Joi.string().allow(""),

      last4: Joi.string().allow(""),

      checks: this.InvoiceDetailsPaymentMethodsDataChecks(),

      wallet: Joi.string().allow(""),

      country: Joi.string().allow(""),

      funding: Joi.string().allow(""),

      exp_year: Joi.number(),

      networks: this.InvoiceDetailsPaymentMethodsDataNetworks(),

      exp_month: Joi.number(),

      fingerprint: Joi.string().allow(""),

      generated_from: Joi.string().allow(""),

      three_d_secure_usage: this.InvoiceDetailsPaymentMethodsDataThreeDSecureUsage(),
    });
  }

  static InvoiceDetailsPaymentMethods() {
    return Joi.object({
      id: Joi.number(),

      type: Joi.string().allow(""),

      pg_payment_method_id: Joi.string().allow(""),

      data: this.InvoiceDetailsPaymentMethodsData(),

      is_default: Joi.boolean(),
    });
  }

  static InvoicePaymentMethod() {
    return Joi.object({
      pg_payment_method_id: Joi.string().allow(""),
    });
  }

  static InvoiceDetails() {
    return Joi.object({
      period: this.InvoiceDetailsPeriod(),

      client: this.InvoiceDetailsClient(),

      auto_advance: Joi.boolean(),

      currency: Joi.string().allow(""),

      paid: Joi.boolean(),

      attemp: Joi.number(),

      _id: Joi.string().allow(""),

      collection_method: Joi.string().allow(""),

      subscriber_id: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      number: Joi.string().allow(""),

      pg_data: Joi.any(),

      receipt_number: Joi.string().allow(""),

      statement_descriptor: Joi.string().allow(""),

      current_status: Joi.string().allow(""),

      status_trail: Joi.array().items(this.InvoiceDetailsStatusTrail()),

      subtotal: Joi.number(),

      total: Joi.number(),

      subscription: Joi.string().allow(""),

      next_action_time: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      modified_at: Joi.string().allow(""),

      hash_identifier: Joi.string().allow(""),

      payment_method: this.InvoicePaymentMethod(),
    });
  }

  static InvoiceItemsPlanRecurring() {
    return Joi.object({
      interval: Joi.string().allow(""),

      interval_count: Joi.number(),
    });
  }

  static InvoiceItemsPlan() {
    return Joi.object({
      recurring: this.InvoiceItemsPlanRecurring(),

      is_trial_plan: Joi.boolean(),

      plan_group: Joi.string().allow(""),

      tag_lines: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      is_active: Joi.boolean(),

      is_visible: Joi.boolean(),

      trial_period: Joi.number(),

      addons: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      amount: Joi.number(),

      product_suite_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      modified_at: Joi.string().allow(""),
    });
  }

  static InvoiceItemsPeriod() {
    return Joi.object({
      start: Joi.string().allow(""),

      end: Joi.string().allow(""),
    });
  }

  static InvoiceItems() {
    return Joi.object({
      _id: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      plan: this.InvoiceItemsPlan(),

      name: Joi.string().allow(""),

      quantity: Joi.number(),

      description: Joi.string().allow(""),

      period: this.InvoiceItemsPeriod(),

      unit_amount: Joi.number(),

      amount: Joi.number(),

      type: Joi.string().allow(""),

      invoice_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      modified_at: Joi.string().allow(""),
    });
  }

  static Invoice() {
    return Joi.object({
      invoice: this.InvoiceDetails(),

      invoice_items: Joi.array().items(this.InvoiceItems()),
    });
  }

  static InvoicesDataClient() {
    return Joi.object({
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address_lines: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InvoicesDataPeriod() {
    return Joi.object({
      start: Joi.string().allow(""),

      end: Joi.string().allow(""),
    });
  }

  static InvoicesDataPaymentMethod() {
    return Joi.object({
      pg_payment_method_id: Joi.string().allow(""),
    });
  }

  static InvoicesData() {
    return Joi.object({
      _id: Joi.string().allow(""),

      client: this.InvoicesDataClient(),

      auto_advance: Joi.boolean(),

      currency: Joi.string().allow(""),

      paid: Joi.boolean(),

      attemp: Joi.number(),

      collection_method: Joi.string().allow(""),

      subscriber_id: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      number: Joi.string().allow(""),

      pg_data: Joi.any(),

      period: this.InvoicesDataPeriod(),

      receipt_number: Joi.string().allow(""),

      statement_descriptor: Joi.string().allow(""),

      current_status: Joi.string().allow(""),

      status_trail: Joi.array().items(this.InvoiceDetailsStatusTrail()),

      subtotal: Joi.number(),

      total: Joi.number(),

      subscription: Joi.string().allow(""),

      next_action_time: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      modified_at: Joi.string().allow(""),

      hash_identifier: Joi.string().allow(""),

      payment_method: this.InvoicesDataPaymentMethod(),

      invoice_items: Joi.array().items(this.InvoiceItems()),
    });
  }

  static Invoices() {
    return Joi.object({
      data: Joi.array().items(this.InvoicesData()),

      start: Joi.number(),

      end: Joi.number(),

      limit: Joi.number(),

      page: Joi.number(),

      total: Joi.number(),
    });
  }

  static Phone() {
    return Joi.object({
      phone_number: Joi.string().allow(""),

      phone_country_code: Joi.string().allow(""),
    });
  }

  static SubscriptionBillingAddress() {
    return Joi.object({
      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      line1: Joi.string().allow(""),

      line2: Joi.string().allow(""),

      postal_code: Joi.string().allow(""),
    });
  }

  static SubscriptionCustomer() {
    return Joi.object({
      phone: this.Phone(),

      billing_address: this.SubscriptionBillingAddress(),

      _id: Joi.string().allow(""),

      unique_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      modified_at: Joi.string().allow(""),

      credit_balance: Joi.number(),

      data: Joi.any(),
    });
  }

  static SubscriptionCustomerCreate() {
    return Joi.object({
      phone: this.Phone(),

      billing_address: this.SubscriptionBillingAddress(),

      unique_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static SubscriptionCurrentPeriod() {
    return Joi.object({
      start: Joi.string().allow(""),

      end: Joi.string().allow(""),
    });
  }

  static SubscriptionPauseCollection() {
    return Joi.object({
      behavior: Joi.string().allow(""),

      resume_at: Joi.string().allow(""),
    });
  }

  static SubscriptionTrial() {
    return Joi.object({
      start: Joi.string().allow(""),

      end: Joi.string().allow(""),
    });
  }

  static SubscriptionInvoiceSettings() {
    return Joi.object({
      generation: Joi.boolean(),

      charging: Joi.boolean(),
    });
  }

  static Subscription() {
    return Joi.object({
      current_period: this.SubscriptionCurrentPeriod(),

      pause_collection: this.SubscriptionPauseCollection(),

      trial: this.SubscriptionTrial(),

      invoice_settings: this.SubscriptionInvoiceSettings(),

      is_active: Joi.boolean(),

      cancel_at_period_end: Joi.boolean(),

      _id: Joi.string().allow(""),

      subscriber_id: Joi.string().allow(""),

      plan_id: Joi.string().allow(""),

      product_suite_id: Joi.string().allow(""),

      plan_data: this.Plan(),

      current_status: Joi.string().allow(""),

      collection_method: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      modified_at: Joi.string().allow(""),

      latest_invoice: Joi.string().allow(""),
    });
  }

  static SubscriptionStatus() {
    return Joi.object({
      is_enabled: Joi.boolean(),

      subscription: this.Subscription(),
    });
  }

  static SubscriptionLimitApplication() {
    return Joi.object({
      enabled: Joi.boolean(),

      hard_limit: Joi.number(),

      soft_limit: Joi.number(),
    });
  }

  static SubscriptionLimitMarketplace() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static SubscriptionLimitOtherPlatform() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static SubscriptionLimitTeam() {
    return Joi.object({
      limit: Joi.number(),
    });
  }

  static SubscriptionLimitProducts() {
    return Joi.object({
      bulk: Joi.boolean(),

      limit: Joi.number(),
    });
  }

  static SubscriptionLimitExtensions() {
    return Joi.object({
      enabled: Joi.boolean(),

      limit: Joi.number(),
    });
  }

  static SubscriptionLimitIntegrations() {
    return Joi.object({
      enabled: Joi.boolean(),

      limit: Joi.number(),
    });
  }

  static SubscriptionLimit() {
    return Joi.object({
      application: this.SubscriptionLimitApplication(),

      marketplace: this.SubscriptionLimitMarketplace(),

      other_platform: this.SubscriptionLimitOtherPlatform(),

      team: this.SubscriptionLimitTeam(),

      products: this.SubscriptionLimitProducts(),

      extensions: this.SubscriptionLimitExtensions(),

      integrations: this.SubscriptionLimitIntegrations(),

      is_trial_plan: Joi.boolean(),
    });
  }

  static SubscriptionActivateReq() {
    return Joi.object({
      unique_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      product_suite: Joi.string().allow(""),

      plan_id: Joi.string().allow(""),

      payment_method: Joi.string().allow(""),
    });
  }

  static SubscriptionActivateRes() {
    return Joi.object({
      success: Joi.boolean(),

      data: this.Subscription(),
    });
  }

  static CancelSubscriptionReq() {
    return Joi.object({
      unique_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      product_suite: Joi.string().allow(""),

      subscription_id: Joi.string().allow(""),
    });
  }

  static CancelSubscriptionRes() {
    return Joi.object({
      success: Joi.boolean(),

      data: this.Subscription(),
    });
  }

  static StatsImported() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static StatsProcessedEmail() {
    return Joi.object({
      success: Joi.number(),

      failed: Joi.number(),

      suppressed: Joi.number(),
    });
  }

  static StatsProcessedSms() {
    return Joi.object({
      success: Joi.number(),

      failed: Joi.number(),

      suppressed: Joi.number(),
    });
  }

  static StatsProcessed() {
    return Joi.object({
      email: this.StatsProcessedEmail(),

      sms: this.StatsProcessedSms(),
    });
  }

  static Stats() {
    return Joi.object({
      _id: Joi.string().allow(""),

      imported: Joi.any(),

      processed: Joi.any(),
    });
  }

  static GetStats() {
    return Joi.object({
      items: Joi.array().items(this.Stats()),
    });
  }

  static CampaignReq() {
    return Joi.object({
      description: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      headers: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      file_url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      records_count: Joi.number(),

      application: Joi.string().allow(""),
    });
  }

  static RecipientHeaders() {
    return Joi.object({
      email: Joi.string().allow(""),
    });
  }

  static CampaignEmailTemplate() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static CampignEmailProvider() {
    return Joi.object({
      _id: Joi.string().allow(""),

      from_name: Joi.string().allow(""),

      from_email: Joi.string().allow(""),
    });
  }

  static CampaignEmail() {
    return Joi.object({
      template: this.CampaignEmailTemplate(),

      provider: this.CampignEmailProvider(),
    });
  }

  static Campaign() {
    return Joi.object({
      recipient_headers: this.RecipientHeaders(),

      email: this.CampaignEmail(),

      description: Joi.string().allow(""),

      tags: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      _id: Joi.string().allow(""),

      datasource: Joi.string().allow(""),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      application: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static Campaigns() {
    return Joi.object({
      items: Joi.array().items(this.Campaign()),

      page: this.Page(),
    });
  }

  static BadRequestSchema() {
    return Joi.object({
      status: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static BigqueryHeadersReq() {
    return Joi.object({
      query: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static BigqueryHeadersResHeaders() {
    return Joi.object({
      name: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static BigqueryHeadersRes() {
    return Joi.object({
      headers: Joi.array().items(this.BigqueryHeadersResHeaders()),
    });
  }

  static GetNRecordsCsvReq() {
    return Joi.object({
      url: Joi.string().allow(""),

      header: Joi.boolean(),

      count: Joi.number(),
    });
  }

  static GetNRecordsCsvResItems() {
    return Joi.object({
      phone_number: Joi.string().allow(""),

      email: Joi.string().allow(""),

      firstname: Joi.string().allow(""),

      lastname: Joi.string().allow(""),

      orderid: Joi.string().allow(""),
    });
  }

  static GetNRecordsCsvRes() {
    return Joi.object({
      items: Joi.array().items(this.GetNRecordsCsvResItems()),
    });
  }

  static AudienceReq() {
    return Joi.object({
      description: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      headers: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      file_url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      records_count: Joi.number(),

      application: Joi.string().allow(""),
    });
  }

  static Audience() {
    return Joi.object({
      description: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      headers: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      file_url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      records_count: Joi.number(),

      application: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static Audiences() {
    return Joi.object({
      items: Joi.array().items(this.Audience()),

      page: this.Page(),
    });
  }

  static EmailProviderReqFrom() {
    return Joi.object({
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static EmailProviderReq() {
    return Joi.object({
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      api_key: Joi.string().allow(""),

      type: Joi.string().allow(""),

      provider: Joi.string().allow(""),

      from_address: Joi.array().items(this.EmailProviderReqFrom()),
    });
  }

  static EmailProvider() {
    return Joi.object({
      type: Joi.string().allow(""),

      provider: Joi.string().allow(""),

      from_address: Joi.array().items(this.EmailProviderReqFrom()),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      api_key: Joi.string().allow(""),

      application: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static EmailProviders() {
    return Joi.object({
      items: Joi.array().items(this.EmailProvider()),

      page: this.Page(),
    });
  }

  static EmailTemplateDeleteSuccessRes() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static EmailTemplateDeleteFailureRes() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static EmailTemplateKeys() {
    return Joi.object({
      to: Joi.string().allow(""),

      cc: Joi.string().allow(""),

      bcc: Joi.string().allow(""),
    });
  }

  static EmailTemplateHeaders() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static EmailTemplateReq() {
    return Joi.object({
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      keys: this.EmailTemplateKeys(),

      static_to: Joi.array().items(Joi.string().allow("")),

      static_cc: Joi.array().items(Joi.string().allow("")),

      static_bcc: Joi.array().items(Joi.string().allow("")),

      reply_to: Joi.string().allow(""),

      headers: Joi.array().items(this.EmailTemplateHeaders()),

      subject: this.TemplateAndType(),

      html: this.TemplateAndType(),

      text: this.TemplateAndType(),

      attachments: Joi.array().items(Joi.any()),

      priority: Joi.string().allow(""),
    });
  }

  static TemplateAndType() {
    return Joi.object({
      template_type: Joi.string().allow(""),

      template: Joi.string().allow(""),
    });
  }

  static EmailTemplateRes() {
    return Joi.object({
      is_system: Joi.boolean(),

      is_internal: Joi.boolean(),

      description: Joi.string().allow(""),

      static_to: Joi.array().items(Joi.string().allow("")),

      static_cc: Joi.array().items(Joi.string().allow("")),

      static_bcc: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.any()),

      priority: Joi.string().allow(""),

      published: Joi.boolean(),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      keys: this.EmailTemplateKeys(),

      reply_to: Joi.string().allow(""),

      headers: Joi.array().items(this.EmailTemplateHeaders()),

      subject: this.TemplateAndType(),

      html: this.TemplateAndType(),

      text: this.TemplateAndType(),

      attachments: Joi.array().items(Joi.any()),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static EmailTemplate() {
    return Joi.object({
      is_system: Joi.boolean(),

      is_internal: Joi.boolean(),

      description: Joi.string().allow(""),

      static_to: Joi.array().items(Joi.any()),

      static_cc: Joi.array().items(Joi.any()),

      static_bcc: Joi.array().items(Joi.any()),

      tags: Joi.array().items(Joi.any()),

      priority: Joi.string().allow(""),

      published: Joi.boolean(),

      _id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      from_name: Joi.string().allow(""),

      subject: this.TemplateAndType(),

      html: this.TemplateAndType(),

      text: this.TemplateAndType(),

      headers: Joi.array().items(Joi.any()),

      attachments: Joi.array().items(Joi.any()),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static SystemEmailTemplate() {
    return Joi.object({
      is_system: Joi.boolean(),

      is_internal: Joi.boolean(),

      description: Joi.string().allow(""),

      static_to: Joi.array().items(Joi.any()),

      static_cc: Joi.array().items(Joi.any()),

      static_bcc: Joi.array().items(Joi.any()),

      tags: Joi.array().items(Joi.any()),

      priority: Joi.string().allow(""),

      published: Joi.boolean(),

      _id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      from_name: Joi.string().allow(""),

      subject: this.TemplateAndType(),

      html: this.TemplateAndType(),

      text: this.TemplateAndType(),

      headers: Joi.array().items(Joi.any()),

      attachments: Joi.array().items(Joi.any()),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static EmailTemplates() {
    return Joi.object({
      items: Joi.array().items(this.EmailTemplate()),

      page: this.Page(),
    });
  }

  static SystemEmailTemplates() {
    return Joi.object({
      items: Joi.array().items(this.SystemEmailTemplate()),

      page: this.Page(),
    });
  }

  static PayloadEmailTemplateStructure() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.any(),
    });
  }

  static PayloadEmailProviderStructure() {
    return Joi.object({
      _id: Joi.string().allow(""),
    });
  }

  static PayloadEmailStructure() {
    return Joi.object({
      template: this.PayloadEmailTemplateStructure(),

      provider: this.PayloadEmailProviderStructure(),
    });
  }

  static PayloadSmsTemplateStructure() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.any(),
    });
  }

  static PayloadSmsProviderStructure() {
    return Joi.object({
      _id: Joi.string().allow(""),
    });
  }

  static PayloadSmsStructure() {
    return Joi.object({
      template: this.PayloadSmsTemplateStructure(),

      provider: this.PayloadSmsProviderStructure(),
    });
  }

  static PayloadStructure() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      email: this.PayloadEmailStructure(),

      sms: this.PayloadSmsStructure(),

      application: Joi.string().allow(""),
    });
  }

  static MetaStructure() {
    return Joi.object({
      job_type: Joi.string().allow(""),

      action: Joi.string().allow(""),

      trace: Joi.string().allow(""),

      timestamp: Joi.string().allow(""),
    });
  }

  static EngineRequest() {
    return Joi.object({
      payload: this.PayloadStructure(),

      meta: this.MetaStructure(),
    });
  }

  static EngineResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static EventSubscriptionTemplateSms() {
    return Joi.object({
      subscribed: Joi.boolean(),

      template: Joi.string().allow(""),
    });
  }

  static EventSubscriptionTemplateEmail() {
    return Joi.object({
      subscribed: Joi.boolean(),

      template: Joi.string().allow(""),
    });
  }

  static EventSubscriptionTemplate() {
    return Joi.object({
      sms: this.EventSubscriptionTemplateSms(),

      email: this.EventSubscriptionTemplateEmail(),
    });
  }

  static EventSubscription() {
    return Joi.object({
      template: this.EventSubscriptionTemplate(),

      is_default: Joi.boolean(),

      _id: Joi.string().allow(""),

      application: Joi.string().allow(""),

      event: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static EventSubscriptions() {
    return Joi.object({
      items: Joi.array().items(this.EventSubscription()),

      page: this.Page(),
    });
  }

  static TriggerJobResponse() {
    return Joi.object({
      status: Joi.number(),
    });
  }

  static TriggerJobRequest() {
    return Joi.object({
      job_id: Joi.string().allow(""),
    });
  }

  static Job() {
    return Joi.object({
      completed: Joi.boolean(),

      is_active: Joi.boolean(),

      _id: Joi.string().allow(""),

      campaign: Joi.string().allow(""),

      application: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static Jobs() {
    return Joi.object({
      items: Joi.array().items(this.Job()),

      page: this.Page(),
    });
  }

  static JobLog() {
    return Joi.object({
      imported: Joi.any(),

      processed: Joi.any(),

      _id: Joi.string().allow(""),

      job: Joi.string().allow(""),

      campaign: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static JobLogs() {
    return Joi.object({
      items: Joi.array().items(this.JobLog()),

      page: this.Page(),
    });
  }

  static LogEmail() {
    return Joi.object({
      template: Joi.string().allow(""),
    });
  }

  static LogPushnotification() {
    return Joi.object({
      pushtokens: Joi.array().items(Joi.string().allow("")),
    });
  }

  static LogMeta() {
    return Joi.object({
      type: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      key: Joi.string().allow(""),

      offset: Joi.string().allow(""),

      partition: Joi.string().allow(""),

      topic: Joi.string().allow(""),
    });
  }

  static Log() {
    return Joi.object({
      email: this.LogEmail(),

      pushnotification: this.LogPushnotification(),

      meta: this.LogMeta(),

      _id: Joi.string().allow(""),

      application: Joi.string().allow(""),

      service: Joi.string().allow(""),

      step: Joi.string().allow(""),

      status: Joi.string().allow(""),

      data: Joi.any(),

      expire_at: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static Logs() {
    return Joi.object({
      items: Joi.array().items(this.Log()),

      page: this.Page(),
    });
  }

  static SendOtpSmsCommsTemplate() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.any(),
    });
  }

  static SendOtpSmsCommsProvider() {
    return Joi.object({
      slug: Joi.string().allow(""),

      _id: Joi.string().allow(""),
    });
  }

  static SendOtpEmailCommsTemplate() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.any(),
    });
  }

  static SendOtpCommsReqData() {
    return Joi.object({
      send_same_otp_to_channel: Joi.boolean(),

      mobile: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      to: Joi.string().allow(""),
    });
  }

  static SendOtpCommsReqSms() {
    return Joi.object({
      otp_length: Joi.number(),

      expiry: Joi.number(),

      template: this.SendOtpSmsCommsTemplate(),

      provider: this.SendOtpSmsCommsProvider(),
    });
  }

  static SendOtpCommsReqEmail() {
    return Joi.object({
      otp_length: Joi.number(),

      expiry: Joi.number(),

      template: this.SendOtpEmailCommsTemplate(),
    });
  }

  static SendOtpCommsResSms() {
    return Joi.object({
      success: Joi.boolean(),

      request_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      resend_timer: Joi.number(),
    });
  }

  static SendOtpCommsResEmail() {
    return Joi.object({
      success: Joi.boolean(),

      request_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      to: Joi.string().allow(""),

      resend_timer: Joi.number(),
    });
  }

  static SendOtpCommsReq() {
    return Joi.object({
      data: this.SendOtpCommsReqData(),

      sms: this.SendOtpCommsReqSms(),

      email: this.SendOtpCommsReqEmail(),
    });
  }

  static SendOtpCommsRes() {
    return Joi.object({
      sms: this.SendOtpCommsResSms(),

      email: this.SendOtpCommsResEmail(),
    });
  }

  static VerifyOtpCommsReq() {
    return Joi.object({
      request_id: Joi.string().allow(""),

      otp: Joi.string().allow(""),
    });
  }

  static VerifyOtpCommsSuccessRes() {
    return Joi.object({
      success: Joi.boolean(),

      mobile: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static VerifyOtpCommsErrorRes() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static PushtokenReq() {
    return Joi.object({
      action: Joi.string().allow(""),

      bundle_identifier: Joi.string().allow(""),

      push_token: Joi.string().allow(""),

      unique_device_id: Joi.string().allow(""),
    });
  }

  static PushtokenRes() {
    return Joi.object({
      _id: Joi.string().allow(""),

      bundle_identifier: Joi.string().allow(""),

      push_token: Joi.string().allow(""),

      unique_device_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      platform: Joi.string().allow(""),

      application_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      expired_at: Joi.string().allow(""),
    });
  }

  static SmsProviderReq() {
    return Joi.object({
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      sender: Joi.string().allow(""),

      username: Joi.string().allow(""),

      authkey: Joi.string().allow(""),

      type: Joi.string().allow(""),

      provider: Joi.string().allow(""),
    });
  }

  static SmsProvider() {
    return Joi.object({
      rpt: Joi.number(),

      type: Joi.string().allow(""),

      provider: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      sender: Joi.string().allow(""),

      username: Joi.string().allow(""),

      authkey: Joi.string().allow(""),

      application: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static SmsProviders() {
    return Joi.object({
      items: Joi.array().items(this.SmsProvider()),

      page: this.Page(),
    });
  }

  static SmsTemplateDeleteSuccessRes() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static SmsTemplateDeleteFailureRes() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static SmsTemplateMessage() {
    return Joi.object({
      template_type: Joi.string().allow(""),

      template: Joi.string().allow(""),
    });
  }

  static SmsTemplateReq() {
    return Joi.object({
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      message: this.SmsTemplateMessage(),

      template_variables: Joi.any(),

      attachments: Joi.array().items(Joi.any()),

      priority: Joi.string().allow(""),
    });
  }

  static SmsTemplateRes() {
    return Joi.object({
      is_system: Joi.boolean(),

      is_internal: Joi.boolean(),

      description: Joi.string().allow(""),

      tags: Joi.array().items(Joi.any()),

      priority: Joi.string().allow(""),

      published: Joi.boolean(),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      message: this.SmsTemplateMessage(),

      template_variables: Joi.any(),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static SmsTemplate() {
    return Joi.object({
      is_system: Joi.boolean(),

      is_internal: Joi.boolean(),

      description: Joi.string().allow(""),

      priority: Joi.string().allow(""),

      tags: Joi.array().items(Joi.any()),

      published: Joi.boolean(),

      _id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      message: this.SmsTemplateMessage(),

      template_variables: Joi.any(),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static SystemSmsTemplate() {
    return Joi.object({
      is_system: Joi.boolean(),

      is_internal: Joi.boolean(),

      description: Joi.string().allow(""),

      tags: Joi.array().items(Joi.any()),

      priority: Joi.string().allow(""),

      published: Joi.boolean(),

      _id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      message: this.SmsTemplateMessage(),

      template_variables: Joi.any(),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static SmsTemplates() {
    return Joi.object({
      items: Joi.array().items(this.SmsTemplate()),

      page: this.Page(),
    });
  }

  static SystemSmsTemplates() {
    return Joi.object({
      items: Joi.array().items(this.SystemSmsTemplate()),

      page: this.Page(),
    });
  }

  static Notification() {
    return Joi.object({
      title: Joi.string().allow(""),

      body: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      deeplink: Joi.string().allow(""),

      click_action: Joi.string().allow(""),
    });
  }

  static SystemNotificationUser() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static SystemNotificationSettings() {
    return Joi.object({
      sound: Joi.boolean(),

      priority: Joi.string().allow(""),

      time_to_live: Joi.string().allow(""),
    });
  }

  static SystemNotification() {
    return Joi.object({
      notification: this.Notification(),

      user: this.SystemNotificationUser(),

      settings: this.SystemNotificationUser(),

      _id: Joi.string().allow(""),

      group: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static SystemNotificationsPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      current: Joi.number(),

      size: Joi.number(),

      item_total: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static SystemNotifications() {
    return Joi.object({
      items: Joi.array().items(this.SystemNotification()),

      last_read_anchor: Joi.number(),

      page: this.Page(),
    });
  }

  static PaymentGatewayConfigResponse() {
    return Joi.object({
      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      app_id: Joi.string().allow("").required(),

      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      created: Joi.boolean().required(),

      aggregators: Joi.array().items(Joi.any()),

      success: Joi.boolean().required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      config_type: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      merchant_salt: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      key: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      aggregator_name: this.PaymentGatewayConfig(),
    });
  }

  static PaymentGatewayToBeReviewed() {
    return Joi.object({
      success: Joi.boolean().required(),

      aggregator: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ErrorCodeAndDescription() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static HttpErrorCodeAndResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      error: this.ErrorCodeAndDescription().required(),
    });
  }

  static PaymentModeLogo() {
    return Joi.object({
      large: Joi.string().allow("").required(),

      small: Joi.string().allow("").required(),
    });
  }

  static IntentApp() {
    return Joi.object({
      logos: this.PaymentModeLogo(),

      package_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),
    });
  }

  static IntentAppErrorList() {
    return Joi.object({
      package_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      expired: Joi.boolean().allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      intent_app: Joi.array().items(this.IntentApp()),

      card_reference: Joi.string().allow("").allow(null),

      logo_url: this.PaymentModeLogo(),

      fynd_vpa: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      nickname: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      timeout: Joi.number().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      card_name: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(this.IntentAppErrorList()),

      cod_limit: Joi.number().allow(null),

      card_id: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      display_name: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      exp_month: Joi.number().allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      list: Joi.array().items(this.PaymentModeList()),

      add_card_enabled: Joi.boolean().allow(null),

      save_card: Joi.boolean().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      display_priority: Joi.number().required(),

      name: Joi.string().allow("").required(),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      anonymous_enable: Joi.boolean().allow(null),

      display_name: Joi.string().allow("").required(),
    });
  }

  static PaymentOptions() {
    return Joi.object({
      payment_option: Joi.array().items(this.RootPaymentMode()).required(),
    });
  }

  static PaymentOptionsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      payment_options: this.PaymentOptions().required(),
    });
  }

  static Payout() {
    return Joi.object({
      customers: Joi.any().required(),

      more_attributes: Joi.any().required(),

      transfer_type: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      unique_transfer_no: Joi.any().required(),

      payouts_aggregators: Joi.array().items(Joi.any()).required(),
    });
  }

  static PayoutsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      items: Joi.array().items(this.Payout()).required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      ifsc_code: Joi.string().allow("").required(),

      account_type: Joi.string().allow("").required(),

      city: Joi.string().allow(""),

      account_holder: Joi.string().allow(""),

      branch_name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      account_no: Joi.string().allow(""),

      pincode: Joi.number(),

      bank_name: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      bank_details: this.PayoutBankDetails().required(),

      users: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),

      transfer_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      unique_external_id: Joi.string().allow("").required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      bank_details: Joi.any().required(),

      users: Joi.any().required(),

      created: Joi.boolean().required(),

      aggregator: Joi.string().allow("").required(),

      transfer_type: Joi.string().allow("").required(),

      payouts: Joi.any().required(),

      payment_status: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      unique_transfer_no: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static UpdatePayoutResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static UpdatePayoutRequest() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      unique_external_id: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static DeletePayoutResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static SubscriptionPaymentMethodResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.array().items(Joi.any()).required(),
    });
  }

  static DeleteSubscriptionPaymentMethodResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static SubscriptionConfigResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      config: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static SaveSubscriptionSetupIntentRequest() {
    return Joi.object({
      unique_external_id: Joi.string().allow("").required(),
    });
  }

  static SaveSubscriptionSetupIntentResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.any().required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      is_verified_flag: Joi.boolean(),

      data: Joi.any(),

      message: Joi.string().allow("").required(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      ifsc_code: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsOTPRequest() {
    return Joi.object({
      details: this.BankDetailsForOTP().required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static IfscCodeResponse() {
    return Joi.object({
      success: Joi.boolean(),

      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      email: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

      modified_on: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      address: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      delights_user_name: Joi.string().allow("").allow(null),

      transfer_mode: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      id: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),
    });
  }

  static OrderBeneficiaryResponse() {
    return Joi.object({
      beneficiaries: Joi.array().items(this.OrderBeneficiaryDetails()),

      show_beneficiary_details: Joi.boolean(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      extra_meta: Joi.any().allow(null),

      payment_gateway: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      current_status: Joi.string().allow(""),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      meta: this.MultiTenderPaymentMeta(),

      amount: Joi.number().required(),

      name: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),
    });
  }

  static PaymentConfirmationRequest() {
    return Joi.object({
      payment_methods: Joi.array()
        .items(this.MultiTenderPaymentMethod())
        .required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentConfirmationResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static PlatformPaymentOptions() {
    return Joi.object({
      enabled: Joi.boolean().allow(null).required(),

      mode_of_payment: Joi.string().allow("").required(),

      payment_selection_lock: Joi.any(),

      source: Joi.string().allow("").allow(null).required(),

      cod_charges: Joi.number(),

      callback_url: Joi.any(),

      methods: Joi.any().allow(null).required(),

      cod_amount_limit: Joi.number(),

      anonymous_cod: Joi.boolean(),
    });
  }

  static PlatfromPaymentConfig() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: this.PlatformPaymentOptions().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static UpdatePlatformPaymentConfig() {
    return Joi.object({
      payment_selection_lock: Joi.any(),

      cod_charges: Joi.number(),

      methods: Joi.any().allow(null).required(),

      cod_amount_limit: Joi.number(),

      anonymous_cod: Joi.boolean(),
    });
  }

  static CODdata() {
    return Joi.object({
      usages: Joi.number().required(),

      limit: Joi.number().required(),

      is_active: Joi.boolean().required(),

      remaining_limit: Joi.number().required(),

      user_id: Joi.string().allow("").required(),
    });
  }

  static GetUserCODLimitResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      user_cod_data: this.CODdata().required(),
    });
  }

  static SetCODForUserRequest() {
    return Joi.object({
      mobileno: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      merchant_user_id: Joi.string().allow("").required(),
    });
  }

  static SetCODOptionResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static EdcAggregatorAndModelListResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      edc_models: Joi.any().required(),

      aggregators: Joi.any().required(),
    });
  }

  static StatisticsData() {
    return Joi.object({
      active_device_count: Joi.number().required(),

      inactive_device_count: Joi.number().required(),

      store_count: Joi.number().required(),

      filter_options: Joi.any().required(),
    });
  }

  static EdcDeviceStatsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      statistics: this.StatisticsData().required(),
    });
  }

  static EdcDevice() {
    return Joi.object({
      aggregator_id: Joi.number().required(),

      terminal_serial_no: Joi.string().allow("").required(),

      edc_models_name: Joi.string().allow(""),

      terminal_unique_identifier: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow(""),

      store_name: Joi.string().allow("").required(),

      device_tag: Joi.string().allow("").required(),

      edc_models_id: Joi.number().required(),

      application_id: Joi.string().allow("").required(),

      is_active: Joi.string().allow("").required(),

      edc_device_serial_no: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      merchant_store_pos_code: Joi.string().allow("").allow(null),
    });
  }

  static EdcDeviceDetailsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: this.EdcDevice().required(),
    });
  }

  static EdcAddRequest() {
    return Joi.object({
      aggregator_id: Joi.number().required(),

      terminal_serial_no: Joi.string().allow("").required(),

      edc_model_id: Joi.number().required(),

      store_name: Joi.string().allow("").allow(null).required(),

      device_tag: Joi.string().allow("").allow(null),

      edc_device_serial_no: Joi.string().allow("").required(),

      store_id: Joi.number().required(),
    });
  }

  static EdcDeviceAddResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: this.EdcDevice().required(),
    });
  }

  static EdcUpdateRequest() {
    return Joi.object({
      aggregator_id: Joi.number(),

      terminal_serial_no: Joi.string().allow("").required(),

      edc_model_id: Joi.number().required(),

      store_name: Joi.string().allow("").allow(null),

      device_tag: Joi.string().allow("").allow(null),

      is_active: Joi.string().allow(""),

      edc_device_serial_no: Joi.string().allow(""),

      store_id: Joi.number(),

      merchant_store_pos_code: Joi.string().allow(""),
    });
  }

  static EdcDeviceUpdateResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static EdcDeviceListResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      items: Joi.array().items(this.EdcDevice()).required(),

      page: this.Page().required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      vpa: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      aggregator: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      device_id: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      currency: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      vpa: Joi.string().allow("").allow(null),

      polling_url: Joi.string().allow("").required(),

      aggregator_order_id: Joi.string().allow(""),

      amount: Joi.number().allow(null),

      bqr_image: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      upi_poll_url: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      merchant_order_id: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      virtual_id: Joi.string().allow("").allow(null),

      device_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      timeout: Joi.number().allow(null),

      currency: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      vpa: Joi.string().allow(""),

      email: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      aggregator: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      retry: Joi.boolean().required(),

      redirect_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().allow(null),
    });
  }

  static ResendOrCancelPaymentRequest() {
    return Joi.object({
      device_id: Joi.string().allow("").allow(null),

      request_type: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static LinkStatus() {
    return Joi.object({
      status: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static ResendOrCancelPaymentResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: this.LinkStatus().required(),
    });
  }

  static FilterInfoOption() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      text: Joi.string().allow("").required(),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      options: Joi.array().items(this.FilterInfoOption()),

      text: Joi.string().allow("").required(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      department_id: Joi.number(),

      l3_category: Joi.number(),

      size: Joi.string().allow(""),

      id: Joi.number(),

      can_return: Joi.boolean(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),
    });
  }

  static Prices() {
    return Joi.object({
      price_marked: Joi.number(),

      cashback: Joi.number(),

      coupon_value: Joi.number(),

      delivery_charge: Joi.number(),

      value_of_good: Joi.number(),

      fynd_credits: Joi.number(),

      refund_amount: Joi.number(),

      cashback_applied: Joi.number(),

      price_effective: Joi.number(),

      promotion_effective_discount: Joi.number(),

      cod_charges: Joi.number(),

      amount_paid: Joi.number(),

      tax_collected_at_source: Joi.number(),

      discount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      refund_credit: Joi.number(),
    });
  }

  static BagUnit() {
    return Joi.object({
      item: this.PlatformItem(),

      item_quantity: Joi.number().required(),

      bag_id: Joi.number().required(),

      can_return: Joi.boolean(),

      gst: this.GSTDetailsData(),

      prices: this.Prices(),

      total_shipment_bags: Joi.number().required(),

      status: Joi.any().required(),

      ordering_channel: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      uid: Joi.number(),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      company: Joi.any(),

      total_bags_count: Joi.number().required(),

      application: Joi.any(),

      id: Joi.string().allow("").required(),

      shipment_created_at: Joi.number().required(),

      channel: Joi.any(),

      payment_mode_info: this.PaymentModeInfo(),

      bags: Joi.array().items(this.BagUnit()),

      created_at: Joi.string().allow("").required(),

      prices: this.Prices(),

      fulfilling_centre: Joi.string().allow("").required(),

      fulfilling_store: this.ShipmentItemFulFillingStore(),

      total_shipments_in_order: Joi.number().required(),

      sla: Joi.any(),

      payment_methods: Joi.any(),

      shipment_status: this.ShipmentStatus(),

      user: this.UserDataInfo(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      page: Joi.any(),

      filters: Joi.array().items(this.FiltersInfo()),

      items: Joi.array().items(this.ShipmentItem()),

      applied_filters: Joi.any(),
    });
  }

  static Error() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      track_url: Joi.string().allow("").allow(null),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      id: Joi.number(),

      gst_tag: Joi.string().allow(""),

      name: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      awb_no: Joi.string().allow(""),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      order_date: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      cod_charges: Joi.string().allow(""),

      tax_details: Joi.any(),

      order_value: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.string().allow("")),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_current: Joi.boolean(),

      text: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      gst_fee: Joi.number(),

      gst_tax_percentage: Joi.number(),

      value_of_good: Joi.number(),

      hsn_code: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      gstin_code: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      transfer_price: Joi.number().required(),

      size: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      cod_charges: Joi.number().required(),

      amount_paid: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      identifiers: this.Identifier().required(),

      fynd_credits: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number(),

      discount: Joi.number().required(),

      refund_credit: Joi.number().required(),

      price_marked: Joi.number().required(),

      gst_fee: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      total_units: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      cashback: Joi.number().required(),

      coupon_value: Joi.number().required(),

      value_of_good: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      company: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any(),

      uid: Joi.string().allow(""),

      return_config: Joi.any(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      address1: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      version: Joi.string().allow(""),

      longitude: Joi.number(),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      area: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      app_facing: Joi.boolean(),

      notify_customer: Joi.boolean(),

      bs_id: Joi.number().required(),

      is_active: Joi.boolean(),

      journey_type: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      bag_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      current_status_id: Joi.number().required(),

      kafka_sync: Joi.boolean(),

      created_at: Joi.string().allow("").allow(null),

      bag_state_mapper: this.BagStateMapper(),

      status: Joi.string().allow(""),

      updated_at: Joi.number(),

      store_id: Joi.number(),

      state_type: Joi.string().allow(""),

      state_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),
    });
  }

  static DiscountRules() {
    return Joi.object({
      value: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static ItemCriterias() {
    return Joi.object({
      item_brand: Joi.array().items(Joi.number()),
    });
  }

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: this.ItemCriterias(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      discount_rules: Joi.array().items(this.DiscountRules()),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      buy_rules: Joi.array().items(this.BuyRules()),
    });
  }

  static BagConfigs() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      bag_id: Joi.number().required(),

      seller_identifier: Joi.string().allow(""),

      gst_details: this.BagGST(),

      financial_breakup: this.FinancialBreakup(),

      quantity: Joi.number(),

      can_return: Joi.boolean(),

      brand: this.OrderBrandName(),

      article: this.OrderBagArticle(),

      parent_promo_bags: Joi.any(),

      delivery_address: this.PlatformDeliveryAddress(),

      current_status: this.CurrentStatus(),

      entity_type: Joi.string().allow(""),

      applied_promos: Joi.array().items(this.AppliedPromos()),

      item: this.PlatformItem(),

      display_name: Joi.string().allow(""),

      bag_configs: this.BagConfigs(),

      line_number: Joi.number(),

      prices: this.Prices(),

      identifier: Joi.string().allow(""),

      can_cancel: Joi.boolean(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      address: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      forward: Joi.boolean().allow(null),

      display_name: Joi.string().allow(""),

      bag_id: Joi.number(),

      app_display_name: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      created_at: Joi.string().allow(""),

      bag_state_mapper: this.BagStateMapper(),

      status: Joi.string().allow("").required(),

      state_id: Joi.number(),

      updated_at: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      bsh_id: Joi.number(),

      store_id: Joi.number(),

      state_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow("").allow(null),

      delivery_partner_id: Joi.number().allow(null),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      fulfillment_channel: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      id: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      fyndstore_emp: Joi.any().required(),

      can_break: Joi.string().allow("").required(),

      pay_button: Joi.string().allow(""),

      replacement_details: Joi.string().allow(""),

      child_nodes: Joi.array().items(Joi.string().allow("")),

      dp_details: this.DPDetailsData(),

      items: Joi.array().items(Joi.any()).required(),

      delivery_slot: Joi.any(),

      user_agent: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      beneficiary_details: Joi.boolean(),

      is_fynd_coupon: Joi.boolean().required(),

      enable_tracking: Joi.boolean(),

      total_bags: Joi.number(),

      gst_details: this.GSTDetailsData(),

      enable_dp_tracking: Joi.boolean(),

      payments: this.ShipmentPayments(),

      mid: Joi.string().allow(""),

      email_id: Joi.string().allow("").required(),

      invoice: Joi.any().required(),

      priority_text: Joi.string().allow("").allow(null),

      refund_details: Joi.any(),

      coupon: Joi.any(),

      picked_date: Joi.string().allow(""),

      can_return: Joi.boolean(),

      current_shipment_status: Joi.any().required(),

      order: this.OrderDetailsData(),

      is_not_fynd_source: Joi.boolean().required(),

      credit_note_id: Joi.string().allow("").required(),

      bank_data: Joi.any(),

      status: this.ShipmentStatusData(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      tracking_list: Joi.array().items(this.TrackingList()),

      tracking_url: Joi.string().allow("").required(),

      order_status: Joi.any().required(),

      shipment_id: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow(""),

      shipment_status: Joi.string().allow(""),

      total_items: Joi.number(),

      company: Joi.any().required(),

      is_pdsr: Joi.string().allow(""),

      lock_status: Joi.string().allow("").required(),

      bags: Joi.array().items(this.OrderBags()),

      delivery_details: this.UserDetailsData(),

      journey_type: Joi.string().allow(""),

      bag_status_history: Joi.array().items(this.BagStatusHistory()),

      forward_shipment_status: Joi.array().items(Joi.any()),

      platform_logo: Joi.boolean().required(),

      forward_order_status: Joi.array().items(Joi.any()),

      user_id: Joi.string().allow("").required(),

      is_packaging_order: Joi.boolean().required(),

      is_fynd_store: Joi.string().allow(""),

      secured_delivery_flag: Joi.string().allow(""),

      is_invoiced: Joi.boolean().required(),

      go_green: Joi.boolean(),

      due_date: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      forward_tracking_list: Joi.array().items(Joi.any()),

      billing_details: this.UserDetailsData(),

      vertical: Joi.string().allow("").allow(null),

      user_info: Joi.any(),

      refund_text: Joi.string().allow(""),

      ordering_store: Joi.any().required(),

      prices: this.Prices(),

      delivery_status: Joi.array().items(Joi.any()).required(),

      order_type: Joi.string().allow("").required(),

      kirana_store_id: Joi.string().allow(""),

      escalation: Joi.any(),

      shipment_quantity: Joi.number(),

      packaging_type: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      fulfilling_store: this.FulfillingStore(),

      status_progress: Joi.number().required(),
    });
  }

  static OrderingStore() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      dp_details: this.DPDetailsData(),

      delivery_slot: Joi.any(),

      user_agent: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      total_bags: Joi.number(),

      gst_details: this.GSTDetailsData(),

      enable_dp_tracking: Joi.boolean(),

      payments: this.ShipmentPayments(),

      priority_text: Joi.string().allow("").allow(null),

      coupon: Joi.any(),

      picked_date: Joi.string().allow(""),

      order: this.OrderDetailsData(),

      status: this.ShipmentStatusData(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      tracking_list: Joi.array().items(this.TrackingList()),

      shipment_id: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow(""),

      shipment_status: Joi.string().allow(""),

      total_items: Joi.number(),

      bags: Joi.array().items(this.OrderBags()),

      delivery_details: this.UserDetailsData(),

      journey_type: Joi.string().allow(""),

      bag_status_history: Joi.array().items(this.BagStatusHistory()),

      platform_logo: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      billing_details: this.UserDetailsData(),

      vertical: Joi.string().allow("").allow(null),

      ordering_store: this.OrderingStore(),

      prices: this.Prices(),

      shipment_quantity: Joi.number(),

      packaging_type: Joi.string().allow(""),

      fulfilling_store: this.FulfillingStore(),
    });
  }

  static OrderMeta() {
    return Joi.object({
      cart_id: Joi.number(),

      customer_note: Joi.string().allow(""),

      order_platform: Joi.string().allow(""),

      ordering_store: Joi.number(),

      extra_meta: Joi.any(),

      mongo_cart_id: Joi.number(),

      payment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      currency_symbol: Joi.string().allow(""),

      staff: Joi.any(),

      comment: Joi.string().allow(""),

      employee_id: Joi.number(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      files: Joi.array().items(Joi.any()),
    });
  }

  static OrderDict() {
    return Joi.object({
      order_date: Joi.string().allow("").required(),

      fynd_order_id: Joi.string().allow("").required(),

      prices: this.Prices(),

      meta: this.OrderMeta(),

      tax_details: Joi.any(),

      payment_methods: Joi.any(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      shipments: Joi.array().items(this.PlatformShipment()),

      success: Joi.boolean().required(),

      order: this.OrderDict(),
    });
  }

  static SubLane() {
    return Joi.object({
      text: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

      index: Joi.number(),

      value: Joi.string().allow(""),

      total_items: Joi.number(),
    });
  }

  static SuperLane() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      options: Joi.array().items(this.SubLane()),

      text: Joi.string().allow("").required(),

      total_items: Joi.number(),
    });
  }

  static LaneConfigResponse() {
    return Joi.object({
      super_lanes: Joi.array().items(this.SuperLane()),
    });
  }

  static PlatformBreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static PlatformChannel() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      shipments: Joi.array().items(this.PlatformShipment()),

      total_order_value: Joi.number(),

      payment_mode: Joi.string().allow(""),

      breakup_values: Joi.array().items(this.PlatformBreakupValues()),

      user_info: this.UserDataInfo(),

      channel: this.PlatformChannel(),

      meta: Joi.any(),

      order_id: Joi.string().allow(""),

      order_value: Joi.number(),

      order_created_time: Joi.string().allow(""),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      page: this.Page(),

      items: Joi.array().items(this.PlatformOrderItems()),

      lane: Joi.string().allow(""),

      total_count: Joi.number(),
    });
  }

  static Options() {
    return Joi.object({
      value: Joi.number(),

      text: Joi.string().allow(""),
    });
  }

  static MetricsCount() {
    return Joi.object({
      value: Joi.number().required(),

      options: Joi.array().items(this.Options()),

      text: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static MetricCountResponse() {
    return Joi.object({
      items: Joi.array().items(this.MetricsCount()),
    });
  }

  static PlatformTrack() {
    return Joi.object({
      shipment_type: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      meta: Joi.any(),

      last_location_recieved_at: Joi.string().allow(""),
    });
  }

  static PlatformShipmentTrack() {
    return Joi.object({
      meta: Joi.any(),

      results: Joi.array().items(this.PlatformTrack()),
    });
  }

  static AdvanceFilterInfo() {
    return Joi.object({
      processed: Joi.array().items(this.FiltersInfo()),

      returned: Joi.array().items(this.FiltersInfo()),

      action_centre: Joi.array().items(this.FiltersInfo()),

      filters: Joi.array().items(this.FiltersInfo()),

      unfulfilled: Joi.array().items(this.FiltersInfo()),
    });
  }

  static FiltersResponse() {
    return Joi.object({
      global_filter: Joi.array().items(this.FiltersInfo()),

      advance_filter: this.AdvanceFilterInfo(),
    });
  }

  static Success() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static OmsReports() {
    return Joi.object({
      report_id: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      request_details: Joi.any(),

      report_type: Joi.string().allow(""),

      report_name: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      item_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertPayload() {
    return Joi.object({
      data: Joi.array().items(this.JioCodeUpsertDataSet()),
    });
  }

  static NestedErrorSchemaDataSet() {
    return Joi.object({
      value: Joi.string().allow(""),

      type: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      success: Joi.boolean(),

      error: Joi.array().items(this.NestedErrorSchemaDataSet()),

      trace_id: Joi.string().allow(""),

      identifier: Joi.string().allow(""),
    });
  }

  static BulkInvoicingResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow(""),
    });
  }

  static BulkInvoiceLabelResponse() {
    return Joi.object({
      data: Joi.any(),

      invoice: Joi.any(),

      store_name: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      label: Joi.any(),

      do_invoice_label_generated: Joi.boolean().required(),

      store_id: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
    });
  }

  static FileUploadResponse() {
    return Joi.object({
      expiry: Joi.number(),

      url: Joi.string().allow(""),
    });
  }

  static URL() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }

  static FileResponse() {
    return Joi.object({
      upload: this.FileUploadResponse(),

      size: Joi.number(),

      content_type: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      cdn: this.URL(),

      file_name: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      method: Joi.string().allow(""),

      file_path: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      total: Joi.number(),

      successful: Joi.number(),

      batch_id: Joi.string().allow(""),

      processing: Joi.number(),

      file_name: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      status: Joi.string().allow(""),

      store_id: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      company_id: Joi.number(),

      store_name: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      store_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      failed: Joi.number(),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      size: Joi.number(),

      has_next: Joi.boolean(),

      total: Joi.number(),

      type: Joi.string().allow(""),

      current: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      data: Joi.array().items(this.bulkListingData()),

      page: this.BulkListingPage(),

      success: Joi.boolean(),

      error: Joi.string().allow(""),
    });
  }

  static QuestionSet() {
    return Joi.object({
      id: Joi.number(),

      display_name: Joi.string().allow(""),
    });
  }

  static Reason() {
    return Joi.object({
      id: Joi.number(),

      display_name: Joi.string().allow(""),

      question_set: Joi.array().items(this.QuestionSet()),

      qc_type: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PlatformShipmentReasonsResponse() {
    return Joi.object({
      reasons: Joi.array().items(this.Reason()),

      success: Joi.boolean(),
    });
  }

  static BulkActionPayload() {
    return Joi.object({
      url: Joi.string().allow("").required(),
    });
  }

  static BulkActionResponse() {
    return Joi.object({
      status: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      successful_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      processing_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      total_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      data: Joi.array().items(this.BulkActionDetailsDataField()),

      success: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      message: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      status: Joi.boolean(),

      user_id: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      item_base_price: Joi.number(),

      total_gst_percentage: Joi.number(),

      docker_number: Joi.string().allow(""),

      po_line_amount: Joi.number(),

      po_tax_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: this.B2BPODetails(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      gst_fee: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      sgst_tax_percentage: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      igst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      tax_collected_at_source: Joi.number().required(),
    });
  }

  static Brand() {
    return Joi.object({
      company: Joi.string().allow("").required(),

      script_last_ran: Joi.string().allow("").allow(null),

      created_on: Joi.number(),

      logo: Joi.string().allow(""),

      credit_note_allowed: Joi.boolean(),

      pickup_location: Joi.string().allow("").allow(null),

      credit_note_expiry_days: Joi.number().allow(null),

      modified_on: Joi.number(),

      brand_id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      is_virtual_invoice: Joi.boolean().allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static Weight() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static Dimensions() {
    return Joi.object({
      length: Joi.number(),

      width: Joi.number(),

      height: Joi.number(),

      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static Article() {
    return Joi.object({
      a_set: Joi.any().allow(null),

      uid: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      esp_modified: Joi.any(),

      raw_meta: Joi.any(),

      return_config: this.ReturnConfig(),

      identifiers: this.Identifier().required(),

      code: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      weight: this.Weight(),

      is_set: Joi.boolean(),

      child_details: Joi.any().allow(null),

      dimensions: this.Dimensions(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_order_id: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      order_item_id: Joi.string().allow(""),

      coupon_code: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      loyalty_discount: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: this.AffiliateMeta().required(),

      employee_discount: Joi.number(),

      loyalty_discount: Joi.number(),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
    });
  }

  static Attributes() {
    return Joi.object({
      gender: Joi.array().items(Joi.string().allow("")),

      primary_color_hex: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      l3_category: Joi.number(),

      size: Joi.string().allow("").required(),

      slug_key: Joi.string().allow("").required(),

      color: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      meta: Joi.any(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      l2_category_id: Joi.number(),

      last_updated_at: Joi.string().allow(""),

      branch_url: Joi.string().allow("").allow(null),

      can_return: Joi.boolean(),

      brand: Joi.string().allow("").required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      gender: Joi.string().allow("").allow(null),

      item_id: Joi.number().required(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      attributes: this.Attributes().required(),

      department_id: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      l1_category_id: Joi.number(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      label: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      b2b: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),
    });
  }

  static EInvoice() {
    return Joi.object({
      acknowledge_no: Joi.number(),

      acknowledge_date: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      error_code: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: this.EInvoice(),

      credit_note: this.EInvoice(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static Formatted() {
    return Joi.object({
      f_max: Joi.string().allow(""),

      f_min: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      lock_message: Joi.string().allow(""),

      mto: Joi.boolean(),

      locked: Joi.boolean(),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      gstin: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      ajio_site_id: Joi.string().allow(""),

      address: Joi.string().allow("").allow(null).required(),

      name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_min: Joi.string().allow(""),

      t_max: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      einvoice_info: this.EinvoiceInfo(),

      box_type: Joi.string().allow("").allow(null),

      return_affiliate_order_id: Joi.string().allow(""),

      debug_info: this.DebugInfo(),

      dp_options: Joi.any(),

      formatted: this.Formatted(),

      assign_dp_from_sb: Joi.boolean(),

      lock_data: this.LockData(),

      b2b_buyer_details: this.BuyerDetails(),

      dp_name: Joi.string().allow(""),

      return_store_node: Joi.number(),

      packaging_name: Joi.string().allow(""),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      store_invoice_updated_date: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      po_number: Joi.string().allow(""),

      awb_number: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      timestamp: this.ShipmentTimeStamp(),

      return_details: Joi.any(),

      shipment_weight: Joi.number(),

      marketplace_store_id: Joi.string().allow(""),

      bag_weight: Joi.any(),

      external: Joi.any(),

      weight: Joi.number().required(),

      shipment_volumetric_weight: Joi.number(),

      b2c_buyer_details: Joi.any().allow(null),

      due_date: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      return_awb_number: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      dp_sort_key: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      return_affiliate_shipment_id: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: this.AffiliateMeta().required(),

      affiliate_id: Joi.string().allow(""),

      ad_id: Joi.string().allow(""),

      company_affiliate_tag: Joi.string().allow(""),

      pdf_links: this.PDFLinks(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      shipment_meta: this.ShipmentMeta().required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      latitude: Joi.number().required(),

      address_category: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      email: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address2: Joi.string().allow(""),

      phone: Joi.string().allow("").allow(null).required(),

      state: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      area: Joi.string().allow(""),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      ds_type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),
    });
  }

  static StoreDocuments() {
    return Joi.object({
      gst: this.Document(),
    });
  }

  static StoreEwaybill() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      user: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

      password: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static StoreGstCredentials() {
    return Joi.object({
      e_waybill: this.StoreEwaybill(),

      e_invoice: this.StoreEinvoice(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow("").required(),

      stage: Joi.string().allow("").required(),

      einvoice_portal_details: this.EInvoicePortalDetails(),

      timing: Joi.array().items(Joi.any()),

      ewaybill_portal_details: Joi.any(),

      documents: this.StoreDocuments(),

      additional_contact_details: Joi.any(),

      gst_number: Joi.string().allow(""),

      product_return_config: Joi.any(),

      gst_credentials: this.StoreGstCredentials().required(),
    });
  }

  static Store() {
    return Joi.object({
      latitude: Joi.number().required(),

      store_address_json: this.StoreAddress(),

      fulfillment_channel: Joi.string().allow("").required(),

      location_type: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      s_id: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      brand_id: Joi.any(),

      packaging_material_count: Joi.number(),

      meta: this.StoreMeta().required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      order_integration_id: Joi.string().allow(""),

      mall_name: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      mall_area: Joi.string().allow("").allow(null),

      is_enabled_for_recon: Joi.boolean(),

      company_id: Joi.number().required(),

      store_active_from: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      phone: Joi.number().required(),

      state: Joi.string().allow("").required(),

      vat_no: Joi.string().allow("").allow(null),

      longitude: Joi.number().required(),

      parent_store_id: Joi.number(),

      created_at: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      contact_person: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      b_id: Joi.number().required(),

      restore_promos: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      b_type: Joi.string().allow(""),

      meta: this.BagMeta(),

      gst_details: this.BagGSTDetails().required(),

      financial_breakup: Joi.array().items(this.FinancialBreakup()).required(),

      bag_update_time: Joi.number(),

      order_integration_id: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      brand: this.Brand().required(),

      original_bag_list: Joi.array().items(Joi.number()),

      article: this.Article().required(),

      parent_promo_bags: Joi.any(),

      current_status: this.BagStatusHistory().required(),

      entity_type: Joi.string().allow(""),

      applied_promos: Joi.array().items(Joi.any()),

      status: this.BagReturnableCancelableStatus().required(),

      affiliate_bag_details: this.AffiliateBagDetails().required(),

      dates: this.Dates(),

      shipment_id: Joi.string().allow(""),

      item: this.Item().required(),

      display_name: Joi.string().allow(""),

      line_number: Joi.number(),

      restore_coupon: Joi.boolean(),

      qc_required: Joi.any(),

      journey_type: Joi.string().allow("").required(),

      bag_status_history: this.BagStatusHistory(),

      reasons: Joi.array().items(Joi.any()),

      affiliate_details: this.AffiliateDetails(),

      current_operational_status: this.BagStatusHistory().required(),

      bag_status: Joi.array().items(this.BagStatusHistory()).required(),

      ordering_store: this.Store(),

      article_details: this.ArticleDetails(),

      prices: this.Prices().required(),

      no_of_bags_order: Joi.number(),

      identifier: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
    });
  }

  static Page1() {
    return Joi.object({
      size: Joi.number().required(),

      page_type: Joi.string().allow("").required(),

      has_next: Joi.boolean().required(),

      current: Joi.number().required(),

      item_total: Joi.number().required(),
    });
  }

  static GetBagsPlatformResponse() {
    return Joi.object({
      page: this.Page1().required(),

      items: Joi.array().items(this.BagDetailsPlatformResponse()).required(),
    });
  }

  static InvalidateShipmentCachePayload() {
    return Joi.object({
      shipment_ids: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static InvalidateShipmentCacheNestedResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      message: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static InvalidateShipmentCacheResponse() {
    return Joi.object({
      response: Joi.array().items(this.InvalidateShipmentCacheNestedResponse()),
    });
  }

  static ErrorResponse1() {
    return Joi.object({
      error_trace: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      status: Joi.number().required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      mongo_article_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      reason_ids: Joi.array().items(Joi.number()),

      affiliate_order_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),
    });
  }

  static StoreReassignResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static Entities() {
    return Joi.object({
      id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      entities: Joi.array().items(this.Entities()).required(),

      entity_type: Joi.string().allow("").required(),
    });
  }

  static Bags() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),

      bag_id: Joi.number(),
    });
  }

  static OriginalFilter() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      is_shipment_locked: Joi.boolean(),

      affiliate_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      shipment_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      bags: Joi.array().items(this.Bags()),

      status: Joi.string().allow(""),

      original_filter: this.OriginalFilter(),
    });
  }

  static UpdateShipmentLockResponse() {
    return Joi.object({
      check_response: Joi.array().items(this.CheckResponse()),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static AnnouncementResponse() {
    return Joi.object({
      description: Joi.string().allow(""),

      id: Joi.number().required(),

      company_id: Joi.number(),

      created_at: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),
    });
  }

  static AnnouncementsResponse() {
    return Joi.object({
      announcements: Joi.array().items(this.AnnouncementResponse()),
    });
  }

  static BaseResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static Click2CallResponse() {
    return Joi.object({
      status: Joi.boolean().required(),

      call_id: Joi.string().allow("").required(),
    });
  }

  static Products() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ProductsReasonsData() {
    return Joi.object({
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ProductsReasons() {
    return Joi.object({
      data: this.ProductsReasonsData(),

      filters: Joi.array().items(this.ProductsReasonsFilters()),
    });
  }

  static EntityReasonData() {
    return Joi.object({
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
    });
  }

  static EntitiesReasons() {
    return Joi.object({
      data: this.EntityReasonData(),

      filters: Joi.array().items(Joi.any()),
    });
  }

  static ReasonsData() {
    return Joi.object({
      products: Joi.array().items(this.ProductsReasons()),

      entities: Joi.array().items(this.EntitiesReasons()),
    });
  }

  static ProductsDataUpdatesFilters() {
    return Joi.object({
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ProductsDataUpdates() {
    return Joi.object({
      data: Joi.any(),

      filters: Joi.array().items(this.ProductsDataUpdatesFilters()),
    });
  }

  static EntitiesDataUpdates() {
    return Joi.object({
      data: Joi.any(),

      filters: Joi.array().items(Joi.any()),
    });
  }

  static DataUpdates() {
    return Joi.object({
      products: Joi.array().items(this.ProductsDataUpdates()),

      entities: Joi.array().items(this.EntitiesDataUpdates()),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      products: Joi.array().items(this.Products()),

      reasons: this.ReasonsData(),

      identifier: Joi.string().allow("").required(),

      data_updates: this.DataUpdates(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      shipments: Joi.array().items(this.ShipmentsRequest()),

      status: Joi.string().allow(""),

      exclude_bags_next_state: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      unlock_before_transition: Joi.boolean(),

      statuses: Joi.array().items(this.StatuesRequest()),

      task: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      force_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      code: Joi.string().allow(""),

      final_state: Joi.any(),

      meta: Joi.any(),

      exception: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static StatuesResponse() {
    return Joi.object({
      shipments: Joi.array().items(this.ShipmentsResponse()),
    });
  }

  static UpdateShipmentStatusResponseBody() {
    return Joi.object({
      statuses: Joi.array().items(this.StatuesResponse()),
    });
  }

  static AffiliateAppConfigMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static AffiliateAppConfig() {
    return Joi.object({
      description: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      meta: Joi.array().items(this.AffiliateAppConfigMeta()),

      owner: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),
    });
  }

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static AffiliateInventoryArticleAssignmentConfig() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryStoreConfig() {
    return Joi.object({
      store: Joi.any(),
    });
  }

  static AffiliateInventoryOrderConfig() {
    return Joi.object({
      force_reassignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryLogisticsConfig() {
    return Joi.object({
      dp_assignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      payment: this.AffiliateInventoryPaymentConfig(),

      article_assignment: this.AffiliateInventoryArticleAssignmentConfig(),

      inventory: this.AffiliateInventoryStoreConfig(),

      order: this.AffiliateInventoryOrderConfig(),

      logistics: this.AffiliateInventoryLogisticsConfig(),
    });
  }

  static AffiliateConfig() {
    return Joi.object({
      app: this.AffiliateAppConfig(),

      inventory: this.AffiliateInventoryConfig(),
    });
  }

  static Affiliate() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      config: this.AffiliateConfig(),

      token: Joi.string().allow("").required(),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      bag_end_state: Joi.string().allow(""),

      create_user: Joi.boolean(),

      affiliate: this.Affiliate().required(),

      store_lookup: Joi.string().allow(""),

      article_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(this.AffiliateStoreIdMapping())
        .required(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      affiliate_priority_code: Joi.string().allow("").allow(null),

      fulfilment_priority_text: Joi.string().allow(""),

      fulfilment_priority: Joi.number().allow(null),
    });
  }

  static OrderUser() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      address2: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static UserData() {
    return Joi.object({
      shipping_user: this.OrderUser(),

      billing_user: this.OrderUser(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      attributes: Joi.any().required(),

      category: Joi.any().required(),

      weight: Joi.any().required(),

      dimension: Joi.any().required(),

      quantity: Joi.number().required(),

      brand_id: Joi.number().required(),

      _id: Joi.string().allow("").required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      articles: Joi.array().items(this.ArticleDetails1()).required(),

      fulfillment_type: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      meta: Joi.any(),

      box_type: Joi.string().allow("").allow(null),

      dp_id: Joi.number().allow(null),

      affiliate_shipment_id: Joi.string().allow("").required(),

      articles: Joi.array().items(this.ArticleDetails1()).required(),

      shipments: Joi.number().required(),

      fulfillment_id: Joi.number().required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      journey: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      location_details: this.LocationDetails(),

      shipment: Joi.array().items(this.ShipmentDetails()).required(),

      action: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: this.ShipmentConfig().required(),
    });
  }

  static MarketPlacePdf() {
    return Joi.object({
      invoice: Joi.string().allow("").allow(null),

      label: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      transfer_price: Joi.number().required(),

      price_marked: Joi.number().required(),

      identifier: Joi.any().required(),

      unit_price: Joi.number().required(),

      quantity: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      pdf_links: this.MarketPlacePdf(),

      affiliate_store_id: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      fynd_store_id: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      discount: Joi.number().required(),

      avl_qty: Joi.number().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      payment: Joi.any(),

      order_priority: this.OrderPriority(),

      delivery_charges: Joi.number().required(),

      billing_address: this.OrderUser().required(),

      payment_mode: Joi.string().allow("").required(),

      items: Joi.any().required(),

      coupon: Joi.string().allow("").allow(null),

      user: this.UserData().required(),

      shipping_address: this.OrderUser().required(),

      shipment: this.ShipmentData(),

      order_value: Joi.number().required(),

      discount: Joi.number().required(),

      bags: Joi.array().items(this.AffiliateBag()).required(),

      affiliate_order_id: Joi.string().allow(""),

      cod_charges: Joi.number().required(),
    });
  }

  static CreateOrderPayload() {
    return Joi.object({
      affiliate_id: Joi.string().allow("").required(),

      order_config: this.OrderConfig().required(),

      order_info: this.OrderInfo().required(),
    });
  }

  static CreateOrderResponse() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  static DispatchManifest() {
    return Joi.object({
      manifest_id: Joi.string().allow("").required(),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static ActionInfo() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      id: Joi.number().required(),

      description: Joi.string().allow("").required(),

      display_text: Joi.string().allow("").required(),
    });
  }

  static GetActionsResponse() {
    return Joi.object({
      permissions: this.ActionInfo().required(),
    });
  }

  static PostHistoryData() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      user_name: Joi.string().allow("").required(),
    });
  }

  static PostHistoryFilters() {
    return Joi.object({
      line_number: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      identifier: Joi.string().allow(""),
    });
  }

  static PostActivityHistory() {
    return Joi.object({
      data: this.PostHistoryData().required(),

      filters: Joi.array().items(this.PostHistoryFilters()).required(),
    });
  }

  static PostHistoryDict() {
    return Joi.object({
      activity_history: this.PostActivityHistory().required(),
    });
  }

  static PostShipmentHistory() {
    return Joi.object({
      activity_history: Joi.array().items(this.PostHistoryDict()),
    });
  }

  static HistoryDict() {
    return Joi.object({
      l1_detail: Joi.string().allow(""),

      l3_detail: Joi.string().allow(""),

      bag_id: Joi.number(),

      ticket_id: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      message: Joi.string().allow("").required(),
    });
  }

  static ShipmentHistoryResponse() {
    return Joi.object({
      activity_history: Joi.array().items(this.HistoryDict()).required(),
    });
  }

  static ErrorDetail() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static SmsDataPayload() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      shipment_id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      data: this.SmsDataPayload(),

      bag_id: Joi.number().required(),
    });
  }

  static OrderDetails() {
    return Joi.object({
      created_at: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow(""),
    });
  }

  static Meta() {
    return Joi.object({
      kafka_emission_status: Joi.number(),

      state_manager_used: Joi.string().allow(""),
    });
  }

  static ShipmentDetail() {
    return Joi.object({
      remarks: Joi.string().allow(""),

      id: Joi.number().required(),

      meta: this.Meta().required(),

      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      status: Joi.string().allow(""),
    });
  }

  static OrderStatusData() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),

      order_details: this.OrderDetails().required(),

      shipment_details: Joi.array().items(this.ShipmentDetail()),
    });
  }

  static OrderStatusResult() {
    return Joi.object({
      result: Joi.array().items(this.OrderStatusData()),

      success: Joi.string().allow("").required(),
    });
  }

  static ManualAssignDPToShipment() {
    return Joi.object({
      order_type: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),

      dp_id: Joi.number().required(),

      qc_required: Joi.string().allow("").required(),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow("").required(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      refund_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      transaction_data: Joi.any(),

      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      collect_by: Joi.string().allow("").required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      primary_mode: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(this.PaymentMethod()),
    });
  }

  static Tax() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      rate: Joi.number().required(),

      amount: Joi.any().required(),

      breakup: Joi.array().items(Joi.any()),
    });
  }

  static Charge() {
    return Joi.object({
      tax: this.Tax(),

      code: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      type: Joi.string().allow("").required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      primary_email: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      country_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      geo_location: Joi.any(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      primary_email: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      country: Joi.string().allow("").required(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dispatch_after_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      customer_pickup_slot: Joi.any(),

      dispatch_by_date: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      custom_messasge: Joi.string().allow(""),

      quantity: Joi.number(),

      meta: Joi.any(),

      charges: Joi.array().items(this.Charge()),

      external_line_id: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),
    });
  }

  static Shipment() {
    return Joi.object({
      processing_dates: this.ProcessingDates(),

      priority: Joi.number(),

      line_items: Joi.array().items(this.LineItem()).required(),

      location_id: Joi.number().required(),

      meta: Joi.any(),

      external_shipment_id: Joi.string().allow(""),
    });
  }

  static TaxInfo() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      b2b_gstin_number: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      external_order_id: Joi.string().allow(""),

      payment_info: this.PaymentInfo().required(),

      external_creation_date: Joi.string().allow(""),

      currency_info: Joi.any(),

      meta: Joi.any(),

      charges: Joi.array().items(this.Charge()),

      shipping_info: this.ShippingInfo().required(),

      billing_info: this.BillingInfo().required(),

      shipments: Joi.array().items(this.Shipment()).required(),

      tax_info: this.TaxInfo(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      info: Joi.any(),

      code: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      request_id: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),
    });
  }

  static DpConfiguration() {
    return Joi.object({
      shipping_by: Joi.string().allow(""),
    });
  }

  static PaymentMethods() {
    return Joi.object({
      mode: Joi.string().allow(""),

      collect_by: Joi.string().allow(""),

      refund_by: Joi.string().allow(""),
    });
  }

  static CreateChannelPaymentInfo() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),

      payment_methods: Joi.array().items(this.PaymentMethods()),

      source: Joi.string().allow(""),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      dp_configuration: this.DpConfiguration(),

      payment_info: this.CreateChannelPaymentInfo(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      logo_url: Joi.any(),

      location_reassignment: Joi.boolean(),

      shipment_assignment: Joi.string().allow(""),
    });
  }

  static CreateChannelConfigData() {
    return Joi.object({
      config_data: this.CreateChannelConfig(),
    });
  }

  static CreateChannelConfigResponse() {
    return Joi.object({
      is_upserted: Joi.boolean(),

      is_inserted: Joi.boolean(),

      acknowledged: Joi.boolean(),
    });
  }

  static CreateChannelConifgErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static UploadConsent() {
    return Joi.object({
      consent_url: Joi.string().allow("").required(),

      manifest_id: Joi.string().allow("").required(),
    });
  }

  static PlatformOrderUpdate() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
    });
  }

  static ResponseDetail() {
    return Joi.object({
      message: Joi.array().items(Joi.string().allow("")),

      success: Joi.boolean(),
    });
  }

  static FyndOrderIdList() {
    return Joi.object({
      fynd_order_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static OrderStatus() {
    return Joi.object({
      mobile: Joi.number().required(),

      start_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(this.FyndOrderIdList()),

      end_date: Joi.string().allow("").required(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      result: Joi.any(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),
    });
  }

  static GetSearchWordsDetailResponse() {
    return Joi.object({
      page: this.Page(),

      items: this.GetSearchWordsData(),
    });
  }

  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static SearchKeywordResult() {
    return Joi.object({
      sort_on: Joi.string().allow("").required(),

      query: Joi.any().required(),
    });
  }

  static CreateSearchKeyword() {
    return Joi.object({
      result: this.SearchKeywordResult().required(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),
    });
  }

  static GetSearchWordsResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.GetSearchWordsData()),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),
    });
  }

  static GetAutocompleteWordsResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.GetAutocompleteWordsData()),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      url: Joi.string().allow(""),

      params: Joi.any(),

      query: Joi.any(),

      type: Joi.string().allow(""),
    });
  }

  static AutocompleteAction() {
    return Joi.object({
      page: this.AutocompletePageAction(),

      type: Joi.string().allow(""),
    });
  }

  static Media() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      action: this.AutocompleteAction(),

      _custom_json: Joi.any(),

      logo: this.Media(),

      display: Joi.string().allow(""),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(this.AutocompleteResult()),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      auto_select: Joi.boolean(),

      min_quantity: Joi.number().required(),

      max_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      product_uid: Joi.number().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      company_id: Joi.number(),

      created_by: Joi.any(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      products: Joi.array().items(this.ProductBundleItem()).required(),

      modified_by: Joi.any(),
    });
  }

  static GetProductBundleListingResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.GetProductBundleCreateResponse()),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      company_id: Joi.number(),

      created_by: Joi.any(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      products: Joi.array().items(this.ProductBundleItem()).required(),

      modified_by: Joi.any(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      price: Joi.any(),

      identifier: Joi.any(),

      name: Joi.string().allow(""),

      quantity: Joi.number(),

      short_description: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      attributes: Joi.any(),
    });
  }

  static Size() {
    return Joi.object({
      quantity: Joi.number(),

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

      is_available: Joi.boolean(),
    });
  }

  static Price() {
    return Joi.object({
      currency: Joi.string().allow(""),

      min_marked: Joi.number(),

      max_marked: Joi.number(),

      min_effective: Joi.number(),

      max_effective: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      product_details: this.LimitedProductData(),

      auto_add_to_cart: Joi.boolean(),

      sizes: Joi.array().items(this.Size()),

      price: this.Price(),

      auto_select: Joi.boolean(),

      min_quantity: Joi.number(),

      max_quantity: Joi.number(),

      allow_remove: Joi.boolean(),

      product_uid: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow(""),

      products: Joi.array().items(this.GetProducts()),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      products: Joi.array().items(this.ProductBundleItem()).required(),

      modified_by: Joi.any(),
    });
  }

  static GetMultiSizeGuide() {
    return Joi.object({
      guide: Joi.any(),

      image: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      title: Joi.string().allow(""),

      active: Joi.boolean(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      company_id: Joi.number(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      brand_id: Joi.number(),

      modified_by: Joi.any(),
    });
  }

  static ListSizeGuide() {
    return Joi.object({
      page: Joi.any(),

      items: Joi.array().items(this.GetMultiSizeGuide()),
    });
  }

  static Guide() {
    return Joi.object({
      meta: this.Meta(),
    });
  }

  static ValidateSizeGuide() {
    return Joi.object({
      guide: this.Guide(),

      image: Joi.string().allow(""),

      id: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      company_id: Joi.number(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      brand_id: Joi.number(),

      modified_by: Joi.any(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      guide: Joi.any(),

      id: Joi.string().allow(""),

      active: Joi.boolean(),

      title: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_id: Joi.number(),

      tag: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      brand_id: Joi.number(),

      modified_by: Joi.any(),
    });
  }

  static MOQData() {
    return Joi.object({
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static SEOData() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      alt_text: Joi.any(),

      is_gift: Joi.boolean(),

      moq: this.MOQData(),

      seo: this.SEOData(),

      is_cod: Joi.boolean(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static MetaFields() {
    return Joi.object({
      key: Joi.any().required(),

      value: Joi.any().required(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      alt_text: Joi.any(),

      is_gift: Joi.boolean(),

      _custom_json: Joi.any(),

      moq: this.ApplicationItemMOQ(),

      _custom_meta: Joi.array().items(this.MetaFields()),

      seo: this.ApplicationItemSEO(),

      is_cod: Joi.boolean(),
    });
  }

  static SuccessResponse1() {
    return Joi.object({
      uid: Joi.number(),

      success: Joi.boolean(),
    });
  }

  static GetConfigMetadataResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      condition: Joi.array().items(Joi.any()),

      values: Joi.array().items(Joi.any()),
    });
  }

  static PageResponseType() {
    return Joi.object({
      has_next: Joi.boolean().required(),

      current: Joi.number().required(),

      total_count: Joi.number().required(),

      next: Joi.number().required(),
    });
  }

  static GetConfigResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      page: this.PageResponseType().required(),
    });
  }

  static ConfigErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      priority: Joi.number().required(),

      display_type: Joi.string().allow("").required(),

      unit: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      key: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      priority: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow("").required(),

      attributes: Joi.array().items(this.AttributeDetailsGroup()),
    });
  }

  static ConfigSuccessResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationsSort() {
    return Joi.object({
      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      default_key: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static AllowSingleRequest() {
    return Joi.object({
      allow_single: Joi.boolean().required(),
    });
  }

  static DefaultKeyRequest() {
    return Joi.object({
      default_key: Joi.string().allow("").required(),
    });
  }

  static MetaDataListingFilterMetaResponse() {
    return Joi.object({
      units: Joi.array().items(Joi.any()),

      key: Joi.string().allow(""),

      filter_types: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),
    });
  }

  static MetaDataListingFilterResponse() {
    return Joi.object({
      data: Joi.array().items(this.MetaDataListingFilterMetaResponse()),
    });
  }

  static MetaDataListingSortMetaResponse() {
    return Joi.object({
      key: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static MetaDataListingSortResponse() {
    return Joi.object({
      data: Joi.array().items(this.MetaDataListingSortMetaResponse()),
    });
  }

  static MetaDataListingResponse() {
    return Joi.object({
      filter: this.MetaDataListingFilterResponse().required(),

      sort: this.MetaDataListingSortResponse().required(),
    });
  }

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      detail: Joi.any(),

      variant: Joi.any(),

      similar: Joi.any(),

      compare: Joi.any(),
    });
  }

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      listing: this.MetaDataListingResponse(),

      product: this.GetCatalogConfigurationDetailsProduct(),
    });
  }

  static ConfigurationBucketPoints() {
    return Joi.object({
      end: Joi.number(),

      start: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      map: Joi.any(),

      bucket_points: Joi.array().items(this.ConfigurationBucketPoints()),

      condition: Joi.string().allow(""),

      value: Joi.string().allow(""),

      sort: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      type: Joi.string().allow("").required(),

      value_config: this.ConfigurationListingFilterValue(),
    });
  }

  static ConfigurationListingFilter() {
    return Joi.object({
      attribute_config: Joi.array().items(
        this.ConfigurationListingFilterConfig()
      ),

      allow_single: Joi.boolean().required(),
    });
  }

  static ConfigurationListingSortConfig() {
    return Joi.object({
      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),
    });
  }

  static ConfigurationListingSort() {
    return Joi.object({
      config: Joi.array().items(this.ConfigurationListingSortConfig()),

      default_key: Joi.string().allow("").required(),
    });
  }

  static ConfigurationListing() {
    return Joi.object({
      filter: this.ConfigurationListingFilter().required(),

      sort: this.ConfigurationListingSort().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      min: Joi.number().required(),

      max: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      priority: Joi.number().required(),

      display_type: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      size: this.ProductSize().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static ConfigurationProductVariant() {
    return Joi.object({
      config: Joi.array().items(this.ConfigurationProductVariantConfig()),
    });
  }

  static ConfigurationProductConfig() {
    return Joi.object({
      priority: Joi.number().required(),

      title: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      subtitle: Joi.string().allow(""),

      size: this.ProductSize(),

      is_active: Joi.boolean().required(),
    });
  }

  static ConfigurationProductSimilar() {
    return Joi.object({
      config: Joi.array().items(this.ConfigurationProductConfig()),
    });
  }

  static ConfigurationProduct() {
    return Joi.object({
      variant: this.ConfigurationProductVariant().required(),

      similar: this.ConfigurationProductSimilar().required(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      listing: this.ConfigurationListing(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      product: this.ConfigurationProduct(),

      app_id: Joi.string().allow("").required(),

      type: Joi.string().allow(""),
    });
  }

  static GetAppCatalogConfiguration() {
    return Joi.object({
      is_default: Joi.boolean(),

      data: this.AppCatalogConfiguration(),
    });
  }

  static AppConfiguration() {
    return Joi.object({
      listing: this.ConfigurationListing(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      product: this.ConfigurationProduct(),

      app_id: Joi.string().allow("").required(),

      type: Joi.string().allow(""),
    });
  }

  static GetCatalogConfigurationDetailsSchemaListing() {
    return Joi.object({
      filter: Joi.any(),

      sort: Joi.any(),
    });
  }

  static EntityConfiguration() {
    return Joi.object({
      listing: this.GetCatalogConfigurationDetailsSchemaListing(),

      id: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      product: this.GetCatalogConfigurationDetailsProduct(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static GetAppCatalogEntityConfiguration() {
    return Joi.object({
      is_default: Joi.boolean(),

      data: this.EntityConfiguration(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      kind: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      selected_max: Joi.number(),

      count: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      min: Joi.number(),

      currency_code: Joi.string().allow(""),

      value: Joi.any().required(),

      display_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      max: Joi.number(),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFilters() {
    return Joi.object({
      key: this.ProductFiltersKey().required(),

      values: Joi.array().items(this.ProductFiltersValue()).required(),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      filters: Joi.array().items(this.ProductFilters()),

      sort_on: Joi.array().items(this.ProductSortOn()),

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      type: Joi.array().items(this.CollectionListingFilterType()),

      tags: Joi.array().items(this.CollectionListingFilterTag()),
    });
  }

  static BannerImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ImageUrls() {
    return Joi.object({
      portrait: this.BannerImage(),

      landscape: this.BannerImage(),
    });
  }

  static Media1() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      type: Joi.string().allow("").allow(null),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      is_active: Joi.boolean(),

      banners: this.ImageUrls(),

      app_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      logo: this.Media1(),

      name: Joi.string().allow(""),

      action: this.Action(),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(this.CollectionQuery()),

      badge: Joi.any(),

      description: Joi.string().allow(""),

      meta: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      page: this.Page(),

      filters: this.CollectionListingFilter(),

      items: Joi.array().items(this.GetCollectionDetailNest()),
    });
  }

  static CollectionSchedule() {
    return Joi.object({
      next_schedule: Joi.array().items(this.NextSchedule()),

      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static SeoDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static CollectionImage() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      aspect_ratio: Joi.string().allow("").required(),
    });
  }

  static CollectionBanner() {
    return Joi.object({
      portrait: this.CollectionImage().required(),

      landscape: this.CollectionImage().required(),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      color: Joi.string().allow(""),

      text: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static CreateCollection() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      _custom_json: Joi.any(),

      _schedule: this.CollectionSchedule(),

      is_active: Joi.boolean(),

      seo: this.SeoDetail(),

      banners: this.CollectionBanner().required(),

      published: Joi.boolean(),

      app_id: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      logo: this.CollectionImage().required(),

      is_visible: Joi.boolean(),

      name: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      priority: Joi.number(),

      slug: Joi.string().allow("").required(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(this.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      badge: this.CollectionBadge(),

      description: Joi.string().allow(""),

      meta: Joi.any(),

      created_by: this.UserInfo(),

      modified_by: this.UserInfo(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      is_active: Joi.boolean(),

      banners: this.ImageUrls(),

      app_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      logo: this.BannerImage(),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(this.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      badge: Joi.any(),

      description: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      is_active: Joi.boolean(),

      banners: this.ImageUrls(),

      app_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      logo: this.Media1(),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(this.CollectionQuery()),

      badge: Joi.any(),

      description: Joi.string().allow(""),

      meta: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      _custom_json: Joi.any(),

      _schedule: this.CollectionSchedule(),

      is_active: Joi.boolean(),

      seo: this.SeoDetail(),

      banners: this.CollectionBanner(),

      published: Joi.boolean(),

      type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      logo: this.CollectionImage(),

      is_visible: Joi.boolean(),

      name: Joi.string().allow(""),

      _locale_language: Joi.any(),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(this.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      badge: this.CollectionBadge(),

      description: Joi.string().allow(""),

      meta: Joi.any(),

      modified_by: this.UserInfo(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: this.Action(),

      uid: Joi.number(),

      logo: this.Media1(),
    });
  }

  static Price1() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      marked: this.Price1(),

      effective: this.Price1(),
    });
  }

  static ProductDetailAttribute() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(this.ProductDetailAttribute()),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      medias: Joi.array().items(this.Media1()),

      brand: this.ProductBrand(),

      color: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      attributes: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      price: this.ProductListingPrice(),

      name: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      grouped_attributes: Joi.array().items(
        this.ProductDetailGroupedAttribute()
      ),

      teaser_tag: Joi.any(),

      rating: Joi.number(),

      sellable: Joi.boolean(),

      promo_meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      rating_count: Joi.number(),

      short_description: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      page: this.Page(),

      filters: Joi.array().items(this.ProductFilters()),

      sort_on: Joi.array().items(this.ProductSortOn()),

      items: Joi.array().items(this.ProductListingDetail()),
    });
  }

  static ItemQueryForUserCollection() {
    return Joi.object({
      action: Joi.string().allow(""),

      item_id: Joi.number(),
    });
  }

  static CollectionItemRequest() {
    return Joi.object({
      query: Joi.array().items(this.CollectionQuery()),

      item: Joi.array().items(this.ItemQueryForUserCollection()),

      type: Joi.string().allow(""),
    });
  }

  static UpdatedResponse() {
    return Joi.object({
      items_not_updated: Joi.array().items(Joi.number()),

      message: Joi.string().allow(""),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      article_freshness: Joi.number(),

      total_sizes: Joi.number(),

      total_articles: Joi.number(),

      available_sizes: Joi.number(),

      name: Joi.string().allow(""),

      available_articles: Joi.number(),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      out_of_stock_count: Joi.number(),

      count: Joi.number(),

      sellable_count: Joi.number(),
    });
  }

  static CatalogInsightResponse() {
    return Joi.object({
      brand_distribution: this.CatalogInsightBrand(),

      item: this.CatalogInsightItem(),
    });
  }

  static CrossSellingData() {
    return Joi.object({
      products: Joi.number(),

      articles: Joi.number(),
    });
  }

  static CrossSellingResponse() {
    return Joi.object({
      brand_distribution: this.CatalogInsightBrand(),

      data: this.CrossSellingData(),
    });
  }

  static OptInPostRequest() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),

      enabled: Joi.boolean(),

      company_id: Joi.number(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      platform: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      company_id: Joi.number().required(),

      enabled: Joi.boolean().required(),

      created_by: Joi.any(),

      modified_on: Joi.number().required(),

      modified_by: Joi.any(),
    });
  }

  static GetOptInPlatform() {
    return Joi.object({
      page: this.Page().required(),

      items: Joi.array().items(this.CompanyOptIn()).required(),
    });
  }

  static OptinCompanyDetail() {
    return Joi.object({
      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      company_type: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      total_article: Joi.number(),

      company_id: Joi.number(),

      brand_id: Joi.number(),

      brand_name: Joi.string().allow(""),
    });
  }

  static OptinCompanyBrandDetailsView() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.CompanyBrandDetail()),
    });
  }

  static OptinCompanyMetrics() {
    return Joi.object({
      company: Joi.string().allow(""),

      store: Joi.number(),

      brand: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      manager: Joi.any(),

      address: Joi.any(),

      timing: Joi.any(),

      documents: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      company_id: Joi.number(),

      additional_contacts: Joi.array().items(Joi.any()),

      store_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      display_name: Joi.string().allow(""),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.StoreDetail()),
    });
  }

  static AttributeSchemaRange() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      mandatory: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      multi: Joi.boolean(),

      format: Joi.string().allow(""),

      range: this.AttributeSchemaRange(),

      type: Joi.string().allow("").required(),
    });
  }

  static AttributeMasterDetails() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
    });
  }

  static AttributeMasterMandatoryDetails() {
    return Joi.object({
      l3_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AttributeMasterMeta() {
    return Joi.object({
      enriched: Joi.boolean(),

      mandatory_details: this.AttributeMasterMandatoryDetails().required(),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      depends_on: Joi.array().items(Joi.string().allow("")),

      indexing: Joi.boolean().required(),

      priority: Joi.number(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      schema: this.AttributeMaster(),

      details: this.AttributeMasterDetails(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      meta: this.AttributeMasterMeta(),

      departments: Joi.array().items(Joi.string().allow("")),

      enabled_for_end_consumer: Joi.boolean(),

      filters: this.AttributeMasterFilter(),
    });
  }

  static ProdcutTemplateCategoriesResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(Joi.any()),
    });
  }

  static PTErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      errors: Joi.any(),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      priority_order: Joi.number(),

      search: Joi.string().allow(""),

      page_no: Joi.number(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_by: this.UserSerializer(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      page_size: Joi.number(),

      modified_by: this.UserSerializer(),
    });
  }

  static DepartmentsResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.GetDepartment()),
    });
  }

  static DepartmentErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      errors: Joi.any(),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      priority_order: Joi.number().required(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      platforms: Joi.any(),

      _cls: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static DepartmentCreateResponse() {
    return Joi.object({
      uid: Joi.number().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static DepartmentCreateErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static UserDetail() {
    return Joi.object({
      super_user: Joi.boolean(),

      username: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      priority_order: Joi.number().required(),

      verified_by: this.UserDetail(),

      _id: Joi.any(),

      verified_on: Joi.string().allow(""),

      slug: Joi.any(),

      _custom_json: Joi.any(),

      logo: Joi.any().required(),

      created_on: Joi.string().allow("").required(),

      name: Joi.any().required(),

      _cls: Joi.any(),

      synonyms: Joi.array().items(Joi.any()),

      created_by: this.UserDetail(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow("").required(),

      uid: Joi.number(),

      modified_by: this.UserDetail(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      categories: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean(),

      is_archived: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      modified_by: Joi.any(),

      tag: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      is_active: Joi.boolean(),

      attributes_schema: Joi.array().items(Joi.any()),

      attributes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static TemplatesResponse() {
    return Joi.object({
      page: this.Page(),

      items: this.ProductTemplate(),
    });
  }

  static Properties() {
    return Joi.object({
      custom_order: Joi.any(),

      currency: Joi.any(),

      media: Joi.any(),

      trader: Joi.any(),

      size_guide: Joi.any(),

      trader_type: Joi.any(),

      variants: Joi.any(),

      is_active: Joi.any(),

      command: Joi.any(),

      multi_size: Joi.any(),

      is_dependent: Joi.any(),

      tags: Joi.any(),

      return_config: Joi.any(),

      name: Joi.any(),

      hsn_code: Joi.any(),

      no_of_boxes: Joi.any(),

      teaser_tag: Joi.any(),

      country_of_origin: Joi.any(),

      slug: Joi.any(),

      product_group_tag: Joi.any(),

      short_description: Joi.any(),

      brand_uid: Joi.any(),

      category_slug: Joi.any(),

      highlights: Joi.any(),

      sizes: Joi.any(),

      product_publish: Joi.any(),

      item_code: Joi.any(),

      description: Joi.any(),

      item_type: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      title: Joi.string().allow(""),

      properties: this.Properties(),

      definitions: Joi.any(),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),
    });
  }

  static TemplateValidationData() {
    return Joi.object({
      template_validation: Joi.any(),

      global_validation: this.GlobalValidation(),
    });
  }

  static TemplateDetails() {
    return Joi.object({
      categories: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean(),

      is_archived: Joi.boolean(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      attributes_schema: Joi.array().items(Joi.any()),

      attributes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static TemplatesValidationResponse() {
    return Joi.object({
      data: this.TemplateValidationData(),

      template_details: this.TemplateDetails(),
    });
  }

  static InventoryValidationResponse() {
    return Joi.object({
      data: Joi.any(),

      message: Joi.string().allow(""),
    });
  }

  static HSNData() {
    return Joi.object({
      hsn_code: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.array().items(Joi.string().allow("")),
    });
  }

  static HSNCodesResponse() {
    return Joi.object({
      data: this.HSNData(),

      message: Joi.string().allow(""),
    });
  }

  static ProductDownloadItemsData() {
    return Joi.object({
      templates: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      brand: Joi.array().items(Joi.string().allow("")),
    });
  }

  static VerifiedBy() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      data: this.ProductDownloadItemsData(),

      task_id: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      id: Joi.string().allow(""),

      seller_id: Joi.number(),

      status: Joi.string().allow(""),

      template_tags: Joi.any(),

      created_by: this.VerifiedBy(),

      trigger_on: Joi.string().allow(""),
    });
  }

  static ProductDownloadsResponse() {
    return Joi.object({
      page: this.Page(),

      items: this.ProductDownloadsItems(),
    });
  }

  static ProductConfigurationDownloads() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      multivalue: Joi.boolean(),
    });
  }

  static CategoryMappingValues() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      catalog_id: Joi.number(),
    });
  }

  static CategoryMapping() {
    return Joi.object({
      ajio: this.CategoryMappingValues(),

      facebook: this.CategoryMappingValues(),

      google: this.CategoryMappingValues(),
    });
  }

  static Media2() {
    return Joi.object({
      portrait: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      department: Joi.number().required(),

      l1: Joi.number().required(),

      l2: Joi.number().required(),
    });
  }

  static Category() {
    return Joi.object({
      priority: Joi.number(),

      level: Joi.number().required(),

      marketplaces: this.CategoryMapping(),

      id: Joi.string().allow(""),

      media: this.Media2(),

      slug: Joi.string().allow(""),

      hierarchy: Joi.array().items(this.Hierarchy()),

      name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),
    });
  }

  static CategoryResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.Category()),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      priority: Joi.number(),

      level: Joi.number().required(),

      marketplaces: this.CategoryMapping(),

      media: this.Media2(),

      slug: Joi.string().allow(""),

      hierarchy: Joi.array().items(this.Hierarchy()),

      name: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      tryouts: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CategoryCreateResponse() {
    return Joi.object({
      uid: Joi.number(),

      message: Joi.string().allow(""),
    });
  }

  static SingleCategoryResponse() {
    return Joi.object({
      data: this.Category(),
    });
  }

  static CategoryUpdateResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static Logo() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static Image() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static Product() {
    return Joi.object({
      custom_order: Joi.any(),

      _custom_json: Joi.any(),

      currency: Joi.string().allow(""),

      media: Joi.array().items(this.Media1()),

      id: Joi.string().allow(""),

      trader: Joi.array().items(Joi.any()),

      is_image_less_product: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      company_id: Joi.number(),

      brand: this.Brand(),

      variants: Joi.any(),

      is_active: Joi.boolean(),

      color: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      category_uid: Joi.number(),

      multi_size: Joi.boolean(),

      is_dependent: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      return_config: this.ReturnConfigResponse(),

      is_expirable: Joi.boolean(),

      attributes: Joi.any(),

      stage: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      name: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      images: Joi.array().items(this.Image()),

      verified_on: Joi.string().allow(""),

      variant_group: Joi.any(),

      net_quantity: this.NetQuantityResponse(),

      category: Joi.any(),

      no_of_boxes: Joi.number(),

      teaser_tag: Joi.any(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      primary_color: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      short_description: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      brand_uid: Joi.number(),

      pending: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      verified_by: this.VerifiedBy(),

      tax_identifier: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      sizes: Joi.array().items(Joi.any()),

      product_publish: this.ProductPublished(),

      item_code: Joi.string().allow(""),

      is_set: Joi.boolean(),

      variant_media: Joi.any(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      moq: Joi.any(),

      item_type: Joi.string().allow(""),

      created_by: Joi.any(),

      uid: Joi.number(),

      modified_by: Joi.any(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.Product()),
    });
  }

  static CustomOrder() {
    return Joi.object({
      is_custom_order: Joi.boolean(),

      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),
    });
  }

  static Trader() {
    return Joi.object({
      name: Joi.any().required(),

      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static TeaserTag() {
    return Joi.object({
      url: Joi.string().allow("").allow(null),

      tag: Joi.string().allow("").allow(null),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),
    });
  }

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      custom_order: this.CustomOrder(),

      _custom_json: Joi.any(),

      currency: Joi.string().allow("").required(),

      media: Joi.array().items(this.Media1()),

      trader: Joi.array().items(this.Trader()).required(),

      bulk_job_id: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      company_id: Joi.number().required(),

      variants: Joi.any(),

      is_active: Joi.boolean(),

      multi_size: Joi.boolean(),

      is_dependent: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      return_config: this.ReturnConfig().required(),

      attributes: Joi.any(),

      name: Joi.string().allow("").required(),

      action: Joi.string().allow(""),

      variant_group: Joi.any(),

      net_quantity: this.NetQuantity(),

      no_of_boxes: Joi.number(),

      teaser_tag: this.TeaserTag(),

      country_of_origin: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      template_tag: Joi.string().allow("").required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()).required(),

      short_description: Joi.string().allow(""),

      brand_uid: Joi.number().required(),

      category_slug: Joi.string().allow("").required(),

      tax_identifier: this.TaxIdentifier().required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      sizes: Joi.array().items(Joi.any()).required(),

      product_publish: this.ProductPublish(),

      item_code: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      variant_media: Joi.any(),

      change_request_id: Joi.any(),

      description: Joi.string().allow(""),

      requester: Joi.string().allow(""),

      item_type: Joi.string().allow("").required(),

      uid: Joi.number().allow(null),
    });
  }

  static ProductVariants() {
    return Joi.object({
      media: Joi.array().items(this.Media1()),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand_uid: Joi.number(),

      uid: Joi.number(),

      category_uid: Joi.number(),
    });
  }

  static ProductVariantsResponse() {
    return Joi.object({
      variants: Joi.array().items(this.ProductVariants()),

      page: this.Page(),
    });
  }

  static AttributeMasterSerializer() {
    return Joi.object({
      raw_key: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      synonyms: Joi.any(),

      enabled_for_end_consumer: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      filters: this.AttributeMasterFilter().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      details: this.AttributeMasterDetails().required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      variant: Joi.boolean(),

      suggestion: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      schema: this.AttributeMaster().required(),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),
    });
  }

  static ProductAttributesResponse() {
    return Joi.object({
      items: Joi.array().items(this.AttributeMasterSerializer()).required(),
    });
  }

  static SingleProductResponse() {
    return Joi.object({
      data: this.Product(),
    });
  }

  static ProductCreateUpdate() {
    return Joi.object({
      custom_order: this.CustomOrder(),

      _custom_json: Joi.any(),

      currency: Joi.string().allow("").required(),

      media: Joi.array().items(this.Media1()),

      trader: Joi.array().items(this.Trader()).required(),

      bulk_job_id: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      company_id: Joi.number().required(),

      variants: Joi.any(),

      is_active: Joi.boolean(),

      multi_size: Joi.boolean(),

      is_dependent: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      return_config: this.ReturnConfig().required(),

      name: Joi.any().required(),

      action: Joi.string().allow(""),

      variant_group: Joi.any(),

      net_quantity: this.NetQuantity(),

      no_of_boxes: Joi.number(),

      teaser_tag: this.TeaserTag(),

      country_of_origin: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      template_tag: Joi.string().allow("").required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()).required(),

      short_description: Joi.string().allow(""),

      brand_uid: Joi.number().required(),

      category_slug: Joi.string().allow("").required(),

      tax_identifier: this.TaxIdentifier().required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      product_publish: this.ProductPublish(),

      item_code: Joi.any().required(),

      is_set: Joi.boolean(),

      variant_media: Joi.any(),

      change_request_id: Joi.any(),

      description: Joi.string().allow(""),

      requester: Joi.string().allow(""),

      item_type: Joi.string().allow("").required(),

      uid: Joi.number().allow(null),
    });
  }

  static ValidateIdentifier() {
    return Joi.object({
      gtin_type: Joi.string().allow("").required(),

      primary: Joi.boolean(),

      gtin_value: Joi.string().allow("").required(),
    });
  }

  static AllSizes() {
    return Joi.object({
      identifiers: Joi.array().items(this.ValidateIdentifier()),

      item_weight: Joi.number().required(),

      item_weight_unit_of_measure: Joi.any().required(),

      item_height: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_length: Joi.number().required(),

      size: Joi.any().required(),

      item_width: Joi.number().required(),
    });
  }

  static GetAllSizes() {
    return Joi.object({
      all_sizes: Joi.array().items(this.AllSizes()),
    });
  }

  static ValidateProduct() {
    return Joi.object({
      valid: Joi.boolean(),
    });
  }

  static UserDetail1() {
    return Joi.object({
      full_name: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      cancelled: Joi.number(),

      template: this.ProductTemplate(),

      template_tag: Joi.string().allow(""),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      succeed: Joi.number(),

      modified_by: this.UserDetail1(),

      file_path: Joi.string().allow(""),

      created_by: this.UserDetail1(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      failed: Joi.number(),
    });
  }

  static ProductBulkRequestList() {
    return Joi.object({
      page: this.Page(),

      items: this.ProductBulkRequest(),
    });
  }

  static UserInfo1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      cancelled: Joi.number(),

      tracking_url: Joi.string().allow(""),

      total: Joi.number(),

      template_tag: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      failed: Joi.number(),

      succeed: Joi.number(),

      company_id: Joi.number().required(),

      cancelled_records: Joi.array().items(Joi.any()),

      failed_records: Joi.array().items(Joi.any()),

      file_path: Joi.string().allow(""),

      created_by: this.UserInfo1(),

      is_active: Joi.boolean(),

      custom_template_tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_by: this.UserInfo1(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      created_by: this.UserInfo1(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      modified_by: this.UserInfo1(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      template_tag: Joi.string().allow("").required(),
    });
  }

  static NestedTags() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductTagsViewResponse() {
    return Joi.object({
      items: this.NestedTags(),
    });
  }

  static UserCommon() {
    return Joi.object({
      username: Joi.string().allow(""),

      company_id: Joi.number(),

      user_id: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      cancelled: Joi.number(),

      tracking_url: Joi.string().allow(""),

      retry: Joi.number(),

      id: Joi.string().allow(""),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      failed: Joi.number(),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      file_path: Joi.string().allow(""),

      created_by: this.UserCommon(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_by: this.UserCommon(),
    });
  }

  static BulkAssetResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.Items()),
    });
  }

  static ProductBulkAssets() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      company_id: Joi.number(),

      user: Joi.any().required(),
    });
  }

  static ProductSizeDeleteDataResponse() {
    return Joi.object({
      company_id: Joi.number(),

      size: Joi.string().allow(""),

      item_id: Joi.number(),
    });
  }

  static ProductSizeDeleteResponse() {
    return Joi.object({
      data: this.ProductSizeDeleteDataResponse(),

      success: Joi.boolean(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      identifiers: Joi.any(),

      store: Joi.any(),

      inventory_updated_on: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      price_transfer: Joi.number(),

      price: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      price_effective: Joi.number(),

      quantity: Joi.number(),

      item_id: Joi.number(),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      sellable_quantity: Joi.number(),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.InventoryResponse()),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_type: Joi.string().allow("").required(),

      primary: Joi.boolean(),

      gtin_value: Joi.any().required(),
    });
  }

  static SetSize() {
    return Joi.object({
      pieces: Joi.number().required(),

      size: Joi.string().allow("").required(),
    });
  }

  static SizeDistribution() {
    return Joi.object({
      sizes: Joi.array().items(this.SetSize()).required(),
    });
  }

  static InventorySet() {
    return Joi.object({
      size_distribution: this.SizeDistribution().required(),

      name: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static InvSize() {
    return Joi.object({
      identifiers: Joi.array().items(this.GTIN()).required(),

      item_weight: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      item_height: Joi.number().allow(null),

      currency: Joi.string().allow("").required(),

      price_transfer: Joi.number().allow(null),

      set: this.InventorySet(),

      price: Joi.number(),

      is_set: Joi.boolean(),

      expiration_date: Joi.string().allow(""),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      price_effective: Joi.number().required(),

      store_code: Joi.string().allow("").required(),

      size: Joi.any().required(),

      item_length: Joi.number().allow(null),

      quantity: Joi.number().required(),

      item_width: Joi.number().allow(null),
    });
  }

  static ItemQuery() {
    return Joi.object({
      brand_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      sizes: Joi.array().items(this.InvSize()).required(),

      company_id: Joi.number().required(),

      item: this.ItemQuery().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static Trader1() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),

      type: Joi.string().allow("").required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      length: Joi.number().required(),

      height: Joi.number().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      transfer: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      updated_at: Joi.string().allow(""),

      marked: Joi.number().required(),

      effective: Joi.number().required(),

      tp_notes: Joi.any(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static QuantityBase() {
    return Joi.object({
      count: Joi.number(),

      updated_at: Joi.string().allow(""),
    });
  }

  static Quantities() {
    return Joi.object({
      order_committed: this.QuantityBase(),

      not_available: this.QuantityBase(),

      damaged: this.QuantityBase(),

      sellable: this.QuantityBase(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      track_inventory: Joi.boolean(),

      manufacturer: this.ManufacturerResponse().required(),

      fynd_meta: Joi.any(),

      fynd_item_code: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      trader: Joi.array().items(this.Trader1()),

      set: this.InventorySet(),

      identifier: Joi.any().required(),

      brand: this.BrandMeta().required(),

      company: this.CompanyMeta().required(),

      is_active: Joi.boolean(),

      total_quantity: Joi.number().required(),

      stage: Joi.string().allow(""),

      return_config: this.ReturnConfig1(),

      tags: Joi.array().items(Joi.string().allow("")),

      dimension: this.DimensionResponse().required(),

      price: this.PriceMeta().required(),

      added_on_store: Joi.string().allow(""),

      country_of_origin: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      weight: this.WeightResponse().required(),

      seller_identifier: Joi.string().allow("").required(),

      fragile: Joi.boolean().required(),

      store: this.StoreMeta().required(),

      fynd_article_code: Joi.string().allow("").required(),

      tax_identifier: Joi.any(),

      raw_meta: Joi.any(),

      is_set: Joi.boolean(),

      trace_id: Joi.string().allow(""),

      meta: Joi.any().allow(null),

      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      created_by: this.UserSerializer(),

      uid: Joi.string().allow("").required(),

      quantities: this.Quantities(),

      modified_by: this.UserSerializer(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.InventorySellerResponse()),
    });
  }

  static BulkInventoryGetItems() {
    return Joi.object({
      cancelled: Joi.number(),

      id: Joi.string().allow(""),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      modified_by: Joi.any(),

      succeed: Joi.number(),

      file_path: Joi.string().allow(""),

      created_by: Joi.any(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      failed: Joi.number(),
    });
  }

  static BulkInventoryGet() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.BulkInventoryGetItems()),
    });
  }

  static InventoryJobPayload() {
    return Joi.object({
      item_weight_unit_of_measure: Joi.string().allow(""),

      price_marked: Joi.number(),

      currency: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      trace_id: Joi.string().allow("").allow(null),

      price: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      price_effective: Joi.number(),

      store_code: Joi.string().allow("").required(),

      quantity: Joi.number(),

      total_quantity: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      sizes: Joi.array().items(this.InventoryJobPayload()).required(),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      user: Joi.any(),
    });
  }

  static InventoryExportQuantityFilter() {
    return Joi.object({
      operators: Joi.string().allow("").required(),

      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static InventoryExportAdvanceOption() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),

      from_date: Joi.string().allow("").allow(null),

      store_ids: Joi.array().items(Joi.number()),

      notification: Joi.boolean(),

      quantity: this.InventoryExportQuantityFilter(),

      to_date: Joi.string().allow("").allow(null),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      task_id: Joi.string().allow("").required(),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      status: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: this.InventoryExportAdvanceOption(),

      type: Joi.string().allow("").required(),
    });
  }

  static InventoryExportFilter() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),

      from_date: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      quantity: this.InventoryExportQuantityFilter(),

      to_date: Joi.string().allow(""),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      data: Joi.array().items(Joi.string().allow("")),

      filters: this.InventoryExportFilter().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").allow(null),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      task_id: Joi.string().allow("").required(),

      _id: Joi.string().allow(""),

      request_params: Joi.any(),

      seller_id: Joi.number().required(),

      created_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      is_default: Joi.boolean(),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),
    });
  }

  static Trader2() {
    return Joi.object({
      name: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      height: Joi.number(),

      length: Joi.number(),

      width: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static PriceArticle() {
    return Joi.object({
      transfer: Joi.number(),

      currency: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),

      tp_notes: Joi.any(),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static Quantity() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static QuantitiesArticle() {
    return Joi.object({
      order_committed: this.Quantity(),

      not_available: this.Quantity(),

      damaged: this.Quantity(),

      sellable: this.Quantity(),
    });
  }

  static GetInventories() {
    return Joi.object({
      track_inventory: Joi.boolean(),

      date_meta: this.DateMeta(),

      manufacturer: this.ManufacturerResponse1(),

      id: Joi.string().allow(""),

      trader: Joi.array().items(this.Trader2()),

      identifier: Joi.any(),

      brand: this.BrandMeta1(),

      company: this.CompanyMeta1(),

      total_quantity: Joi.number(),

      stage: Joi.string().allow(""),

      return_config: this.ReturnConfig2(),

      tags: Joi.array().items(Joi.string().allow("")),

      dimension: this.DimensionResponse1(),

      price: this.PriceArticle(),

      platforms: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      weight: this.WeightResponse1(),

      seller_identifier: Joi.string().allow(""),

      store: this.ArticleStoreResponse(),

      tax_identifier: Joi.any(),

      inventory_updated_on: Joi.string().allow(""),

      is_set: Joi.boolean(),

      trace_id: Joi.string().allow(""),

      size: Joi.string().allow(""),

      item_id: Joi.number(),

      created_by: this.UserSerializer(),

      uid: Joi.string().allow(""),

      quantities: this.QuantitiesArticle(),

      modified_by: this.UserSerializer(),
    });
  }

  static GetInventoriesResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.GetInventories()),
    });
  }

  static FilerList() {
    return Joi.object({
      value: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static InventoryConfig() {
    return Joi.object({
      data: Joi.array().items(this.FilerList()),

      multivalues: Joi.boolean(),
    });
  }

  static InventoryPayload() {
    return Joi.object({
      store_id: Joi.number().required(),

      price_marked: Joi.number(),

      expiration_date: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      total_quantity: Joi.number().allow(null),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryRequestSchemaV2() {
    return Joi.object({
      payload: Joi.array().items(this.InventoryPayload()),

      meta: Joi.any(),

      company_id: Joi.number().required(),
    });
  }

  static InventoryFailedReason() {
    return Joi.object({
      errors: Joi.string().allow(""),

      message: Joi.string().allow("").required(),
    });
  }

  static InventoryResponseItem() {
    return Joi.object({
      data: this.InventoryPayload(),

      reason: this.InventoryFailedReason(),
    });
  }

  static InventoryUpdateResponse() {
    return Joi.object({
      items: Joi.array().items(this.InventoryResponseItem()),

      message: Joi.string().allow("").required(),
    });
  }

  static PageResponse() {
    return Joi.object({
      has_next: Joi.boolean(),

      item_total: Joi.number(),

      current: Joi.string().allow(""),

      size: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      tax_on_esp: Joi.boolean(),

      hs2_code: Joi.string().allow(""),

      threshold1: Joi.number(),

      id: Joi.string().allow(""),

      tax1: Joi.number(),

      hsn_code: Joi.string().allow(""),

      company_id: Joi.number(),

      threshold2: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      tax2: Joi.number(),

      modified_on: Joi.string().allow(""),
    });
  }

  static HsnCodesListingResponse() {
    return Joi.object({
      page: this.PageResponse(),

      items: Joi.array().items(this.HsnCodesObject()),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      tax_on_esp: Joi.boolean(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      threshold1: Joi.number().required(),

      tax1: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      threshold2: Joi.number(),

      tax_on_mrp: Joi.boolean().required(),

      tax2: Joi.number(),

      is_active: Joi.boolean(),

      uid: Joi.number(),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: this.HsnCodesObject(),
    });
  }

  static BulkHsnUpsert() {
    return Joi.object({
      data: Joi.array().items(this.HsnUpsert()).required(),
    });
  }

  static BulkHsnResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static TaxSlab() {
    return Joi.object({
      rate: Joi.number().required(),

      effective_date: Joi.string().allow("").required(),

      cess: Joi.number(),

      threshold: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      taxes: Joi.array().items(this.TaxSlab()).required(),

      hsn_code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow("").required(),

      created_by: Joi.any(),

      country_code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      modified_by: Joi.any(),
    });
  }

  static HsnCodesListingResponseSchemaV2() {
    return Joi.object({
      page: this.PageResponse(),

      items: Joi.array().items(this.HSNDataInsertV2()),
    });
  }

  static BrandItem() {
    return Joi.object({
      slug: Joi.string().allow(""),

      logo: this.Media(),

      name: Joi.string().allow(""),

      action: this.Action(),

      departments: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      banners: this.ImageUrls(),

      uid: Joi.number(),
    });
  }

  static BrandListingResponse() {
    return Joi.object({
      page: this.Page().required(),

      items: Joi.array().items(this.BrandItem()),
    });
  }

  static Department() {
    return Joi.object({
      priority_order: Joi.number(),

      slug: Joi.string().allow(""),

      logo: this.Media(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(this.Department()),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: this.Action(),

      childs: Joi.array().items(Joi.any()),

      banners: this.ImageUrls(),

      uid: Joi.number(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: this.Action(),

      childs: Joi.array().items(this.ThirdLevelChild()),

      banners: this.ImageUrls(),

      uid: Joi.number(),
    });
  }

  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: this.Action(),

      childs: Joi.array().items(this.SecondLevelChild()),

      banners: this.ImageUrls(),

      uid: Joi.number(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: this.Action(),

      childs: Joi.array().items(this.Child()),

      banners: this.ImageUrls(),

      uid: Joi.number(),
    });
  }

  static DepartmentCategoryTree() {
    return Joi.object({
      department: Joi.string().allow(""),

      items: Joi.array().items(this.CategoryItems()),
    });
  }

  static DepartmentIdentifier() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CategoryListingResponse() {
    return Joi.object({
      data: Joi.array().items(this.DepartmentCategoryTree()),

      departments: Joi.array().items(this.DepartmentIdentifier()),
    });
  }

  static ApplicationProductListingResponse() {
    return Joi.object({
      sort_on: Joi.array().items(this.ProductSortOn()),

      operators: Joi.any(),

      page: this.Page().required(),

      items: Joi.array().items(this.ProductListingDetail()),

      filters: Joi.array().items(this.ProductFilters()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      medias: Joi.array().items(this.Media1()),

      brand: this.ProductBrand(),

      color: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      attributes: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      name: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      grouped_attributes: Joi.array().items(
        this.ProductDetailGroupedAttribute()
      ),

      teaser_tag: Joi.any(),

      rating: Joi.number(),

      promo_meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      rating_count: Joi.number(),

      short_description: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      next_id: Joi.string().allow(""),

      has_next: Joi.boolean(),

      item_total: Joi.number().required(),

      has_previous: Joi.boolean(),

      type: Joi.string().allow("").required(),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      page: this.InventoryPage().required(),

      items: Joi.array().items(Joi.any()),
    });
  }

  static LocationTimingSerializer() {
    return Joi.object({
      minute: Joi.number(),

      hour: Joi.number(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      closing: this.LocationTimingSerializer(),

      opening: this.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),

      open: Joi.boolean().required(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      longitude: Joi.number(),

      pincode: Joi.number(),

      address2: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      verified_by: this.UserSerializer1(),

      business_type: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      created_by: this.UserSerializer1(),

      modified_on: Joi.string().allow(""),

      addresses: Joi.array().items(this.GetAddressSerializer()),

      uid: Joi.number(),

      company_type: Joi.string().allow(""),

      modified_by: this.UserSerializer1(),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      password: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_waybill: this.InvoiceCredSerializer(),

      e_invoice: this.InvoiceCredSerializer(),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile_no: this.SellerPhoneNumber().required(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      inventory: Joi.string().allow(""),

      order: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      timing: Joi.array().items(this.LocationDayWiseSerializer()),

      _custom_json: Joi.any(),

      store_code: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      company: this.GetCompanySerializer(),

      modified_on: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      address: this.GetAddressSerializer().required(),

      gst_credentials: this.InvoiceDetailsSerializer(),

      contact_numbers: Joi.array().items(this.SellerPhoneNumber()),

      name: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      manager: this.LocationManagerSerializer(),

      integration_type: this.LocationIntegrationType(),

      product_return_config: this.ProductReturnConfigSerializer(),

      documents: Joi.array().items(this.Document()),

      phone_number: Joi.string().allow(""),

      verified_by: this.UserSerializer2(),

      code: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      created_by: this.UserSerializer2(),

      warnings: Joi.any(),

      uid: Joi.number(),

      modified_by: this.UserSerializer2(),
    });
  }

  static LocationListSerializer() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.GetLocationSerializer()),
    });
  }

  static ApplicationBrandJson() {
    return Joi.object({
      _custom_json: Joi.any().required(),
    });
  }

  static ApplicationCategoryJson() {
    return Joi.object({
      _custom_json: Joi.any().required(),
    });
  }

  static ApplicationDepartment() {
    return Joi.object({
      _custom_json: Joi.any(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      uid: Joi.number().required(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static ApplicationDepartmentListingResponse() {
    return Joi.object({
      page: this.Page().required(),

      items: Joi.array().items(this.ApplicationDepartment()),
    });
  }

  static ApplicationDepartmentJson() {
    return Joi.object({
      _custom_json: Joi.any().required(),
    });
  }

  static ApplicationStoreJson() {
    return Joi.object({
      _custom_json: Joi.any().required(),
    });
  }

  static Website() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      website: this.Website(),
    });
  }

  static ContactDetails() {
    return Joi.object({
      phone: Joi.array().items(this.SellerPhoneNumber()),

      emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static CompanyTaxesSerializer() {
    return Joi.object({
      rate: Joi.number(),

      effective_date: Joi.string().allow(""),

      enable: Joi.boolean(),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      franchise_enabled: Joi.boolean(),

      business_details: this.BusinessDetails(),

      modified_by: this.UserSerializer(),

      stage: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      name: Joi.string().allow(""),

      contact_details: this.ContactDetails(),

      addresses: Joi.array().items(this.GetAddressSerializer()),

      mode: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_by: this.UserSerializer(),

      company_type: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      documents: Joi.array().items(this.Document()),

      business_country_info: this.BusinessCountryInfo(),

      warnings: Joi.any(),

      uid: Joi.number().required(),

      business_type: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_by: this.UserSerializer(),

      taxes: Joi.array().items(this.CompanyTaxesSerializer()),

      created_on: Joi.string().allow(""),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      country: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      longitude: Joi.number().required(),

      pincode: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      rate: Joi.number(),

      effective_date: Joi.string().allow(""),

      enable: Joi.boolean(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      franchise_enabled: Joi.boolean(),

      company_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      business_details: this.BusinessDetails(),

      contact_details: this.ContactDetails(),

      addresses: Joi.array().items(this.CreateUpdateAddressSerializer()),

      _custom_json: Joi.any(),

      documents: Joi.array().items(this.Document()),

      taxes: Joi.array().items(this.CompanyTaxesSerializer1()),

      business_info: Joi.string().allow(""),

      warnings: Joi.any(),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProfileSuccessResponse() {
    return Joi.object({
      uid: Joi.number(),

      success: Joi.boolean(),
    });
  }

  static DocumentsObj() {
    return Joi.object({
      verified: Joi.number(),

      pending: Joi.number(),
    });
  }

  static MetricsSerializer() {
    return Joi.object({
      company_documents: this.DocumentsObj(),

      store: this.DocumentsObj(),

      brand: this.DocumentsObj(),

      stage: Joi.string().allow(""),

      store_documents: this.DocumentsObj(),

      uid: Joi.number(),

      product: this.DocumentsObj(),
    });
  }

  static BrandBannerSerializer() {
    return Joi.object({
      landscape: Joi.string().allow(""),

      portrait: Joi.string().allow(""),
    });
  }

  static GetBrandResponseSerializer() {
    return Joi.object({
      modified_by: this.UserSerializer(),

      stage: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      banner: this.BrandBannerSerializer(),

      name: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      mode: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_by: this.UserSerializer(),

      verified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      warnings: Joi.any(),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_by: this.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      banner: this.BrandBannerSerializer(),

      brand_tier: Joi.string().allow(""),

      _locale_language: Joi.any(),

      company_id: Joi.number(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),
    });
  }

  static CompanySocialAccounts() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      socials: Joi.array().items(this.CompanySocialAccounts()),

      website_url: Joi.string().allow(""),
    });
  }

  static CompanySerializer() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      verified_by: this.UserSerializer(),

      company_type: Joi.string().allow("").required(),

      details: this.CompanyDetails(),

      created_by: this.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      reject_reason: Joi.string().allow(""),

      modified_by: this.UserSerializer(),

      addresses: Joi.array().items(this.GetAddressSerializer()),

      stage: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      business_country_info: this.BusinessCountryInfo(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      business_type: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      market_channels: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      verified_by: this.UserSerializer(),

      company: this.CompanySerializer(),

      created_by: this.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      warnings: Joi.any(),

      brand: this.GetBrandResponseSerializer(),

      modified_by: this.UserSerializer(),

      stage: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CompanyBrandListSerializer() {
    return Joi.object({
      items: Joi.array().items(this.CompanyBrandSerializer()),

      page: this.Page(),
    });
  }

  static CompanyBrandPostRequestSerializer() {
    return Joi.object({
      uid: Joi.number(),

      company: Joi.number().required(),

      brands: Joi.array().items(Joi.number()).required(),
    });
  }

  static HolidayDateSerializer() {
    return Joi.object({
      start_date: Joi.string().allow("").required(),

      end_date: Joi.string().allow("").required(),
    });
  }

  static HolidaySchemaSerializer() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      holiday_type: Joi.string().allow("").required(),

      date: this.HolidayDateSerializer().required(),
    });
  }

  static AddressSerializer() {
    return Joi.object({
      city: Joi.string().allow(""),

      latitude: Joi.number().required(),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      longitude: Joi.number().required(),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      company: Joi.number().required(),

      contact_numbers: Joi.array().items(this.SellerPhoneNumber()),

      holiday: Joi.array().items(this.HolidaySchemaSerializer()),

      product_return_config: this.ProductReturnConfigSerializer(),

      stage: Joi.string().allow(""),

      manager: this.LocationManagerSerializer(),

      _custom_json: Joi.any(),

      display_name: Joi.string().allow("").required(),

      documents: Joi.array().items(this.Document()),

      code: Joi.string().allow("").required(),

      address: this.AddressSerializer().required(),

      timing: Joi.array().items(this.LocationDayWiseSerializer()),

      warnings: Joi.any(),

      uid: Joi.number(),

      store_type: Joi.string().allow(""),

      gst_credentials: this.InvoiceDetailsSerializer(),

      name: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(this.LocationSerializer()),
    });
  }

  static _ArticleQuery() {
    return Joi.object({
      ignored_stores: Joi.array().items(Joi.number()),

      size: Joi.string().allow(""),

      item_id: Joi.number(),
    });
  }

  static _ArticleAssignment() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static _AssignStoreArticle() {
    return Joi.object({
      query: this._ArticleQuery(),

      article_assignment: this._ArticleAssignment(),

      group_id: Joi.string().allow(""),

      quantity: Joi.number(),

      meta: Joi.any(),
    });
  }

  static AssignStoreRequestValidator() {
    return Joi.object({
      articles: Joi.array().items(this._AssignStoreArticle()),

      channel_type: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      company_id: Joi.number(),

      channel_identifier: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      pincode: Joi.string().allow(""),
    });
  }

  static AssignStoreResponseSerializer() {
    return Joi.object({
      index: Joi.number(),

      price_marked: Joi.number(),

      store_id: Joi.number(),

      _id: Joi.string().allow(""),

      price_effective: Joi.number(),

      article_assignment: this._ArticleAssignment(),

      size: Joi.string().allow(""),

      store_pincode: Joi.string().allow(""),

      s_city: Joi.string().allow(""),

      company_id: Joi.number(),

      status: Joi.boolean(),

      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      item_id: Joi.number(),

      meta: Joi.any(),
    });
  }

  static FailedResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static CDN() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      absolute_url: Joi.string().allow(""),

      relative_url: Joi.string().allow(""),
    });
  }

  static Upload() {
    return Joi.object({
      expiry: Joi.number().required(),

      url: Joi.string().allow("").required(),
    });
  }

  static StartResponse() {
    return Joi.object({
      file_name: Joi.string().allow("").required(),

      file_path: Joi.string().allow("").required(),

      content_type: Joi.string().allow("").required(),

      method: Joi.string().allow(""),

      namespace: Joi.string().allow("").required(),

      operation: Joi.string().allow("").required(),

      size: Joi.number().required(),

      upload: this.Upload().required(),

      cdn: this.CDN().required(),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static StartRequest() {
    return Joi.object({
      file_name: Joi.string().allow("").required(),

      content_type: Joi.string().allow("").required(),

      size: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      params: Joi.any(),
    });
  }

  static CompleteResponse() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      file_name: Joi.string().allow("").required(),

      file_path: Joi.string().allow("").required(),

      content_type: Joi.string().allow("").required(),

      namespace: Joi.string().allow("").required(),

      operation: Joi.string().allow("").required(),

      size: Joi.number().required(),

      upload: this.Upload().required(),

      cdn: this.CDN().required(),

      success: Joi.boolean().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),
    });
  }

  static Opts() {
    return Joi.object({
      attempts: Joi.number(),

      timestamp: Joi.number(),

      delay: Joi.number(),
    });
  }

  static CopyFileTask() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      data: this.BulkRequest().required(),

      opts: this.Opts().required(),

      progress: Joi.number().required(),

      delay: Joi.number().required(),

      timestamp: Joi.number().required(),

      attempts_made: Joi.number().required(),

      stacktrace: Joi.array().items(Joi.string().allow("")),

      finished_on: Joi.number().required(),

      processed_on: Joi.number().required(),
    });
  }

  static BulkUploadResponse() {
    return Joi.object({
      tracking_url: Joi.string().allow("").required(),

      task: this.CopyFileTask().required(),
    });
  }

  static ReqConfiguration() {
    return Joi.object({
      concurrency: Joi.number(),
    });
  }

  static Destination() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      rewrite: Joi.string().allow("").required(),

      basepath: Joi.string().allow(""),
    });
  }

  static BulkRequest() {
    return Joi.object({
      urls: Joi.array().items(Joi.string().allow("")).required(),

      destination: this.Destination().required(),

      configuration: this.ReqConfiguration(),
    });
  }

  static Urls() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      signed_url: Joi.string().allow("").required(),

      expiry: Joi.number().required(),
    });
  }

  static SignUrlResponse() {
    return Joi.object({
      urls: Joi.array().items(this.Urls()).required(),
    });
  }

  static SignUrlRequest() {
    return Joi.object({
      expiry: Joi.number().required(),

      urls: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static DbRecord() {
    return Joi.object({
      success: Joi.boolean().required(),

      tags: Joi.array().items(Joi.string().allow("")).required(),

      _id: Joi.string().allow("").required(),

      file_name: Joi.string().allow("").required(),

      operation: Joi.string().allow(""),

      namespace: Joi.string().allow("").required(),

      content_type: Joi.string().allow("").required(),

      file_path: Joi.string().allow("").required(),

      upload: this.Upload().required(),

      cdn: this.CDN().required(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),
    });
  }

  static BrowseResponse() {
    return Joi.object({
      items: Joi.array().items(this.DbRecord()).required(),

      page: this.Page().required(),
    });
  }

  static RedirectDevice() {
    return Joi.object({
      link: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static WebRedirect() {
    return Joi.object({
      link: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static Redirects() {
    return Joi.object({
      ios: this.RedirectDevice(),

      android: this.RedirectDevice(),

      web: this.WebRedirect(),

      force_web: Joi.boolean(),
    });
  }

  static CampaignShortLink() {
    return Joi.object({
      source: Joi.string().allow(""),

      medium: Joi.string().allow(""),
    });
  }

  static Attribution() {
    return Joi.object({
      campaign_cookie_expiry: Joi.string().allow(""),
    });
  }

  static SocialMediaTags() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      image: Joi.string().allow(""),
    });
  }

  static ShortLinkReq() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),

      hash: Joi.string().allow(""),

      active: Joi.boolean(),

      expire_at: Joi.string().allow(""),

      enable_tracking: Joi.boolean(),

      personalized: Joi.boolean(),

      campaign: this.CampaignShortLink(),

      redirects: this.Redirects(),

      attribution: this.Attribution(),

      social_media_tags: this.SocialMediaTags(),

      count: Joi.number(),
    });
  }

  static UrlInfo() {
    return Joi.object({
      original: Joi.string().allow(""),

      short: Joi.string().allow(""),

      hash: Joi.string().allow(""),
    });
  }

  static ShortLinkRes() {
    return Joi.object({
      title: Joi.string().allow(""),

      url: this.UrlInfo(),

      created_by: Joi.string().allow(""),

      app_redirect: Joi.boolean(),

      fallback: Joi.string().allow(""),

      active: Joi.boolean(),

      _id: Joi.string().allow(""),

      enable_tracking: Joi.boolean(),

      expire_at: Joi.string().allow(""),

      application: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      meta: Joi.any(),

      updated_at: Joi.string().allow(""),

      personalized: Joi.boolean(),

      campaign: this.CampaignShortLink(),

      redirects: this.Redirects(),

      attribution: this.Attribution(),

      social_media_tags: this.SocialMediaTags(),

      count: Joi.number(),
    });
  }

  static ShortLinkList() {
    return Joi.object({
      items: Joi.array().items(this.ShortLinkRes()),

      page: this.Page(),
    });
  }

  static ErrorRes() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static DataTresholdDTO() {
    return Joi.object({
      min_price: Joi.number(),

      safe_stock: Joi.number(),

      period_threshold: Joi.number(),

      period_threshold_type: Joi.string().allow(""),

      period_type_list: Joi.array().items(this.GenericDTO()),
    });
  }

  static GenericDTO() {
    return Joi.object({
      text: Joi.string().allow(""),

      value: Joi.any(),
    });
  }

  static JobConfigDTO() {
    return Joi.object({
      integration_data: Joi.object().pattern(/\S/, Joi.any()),

      company_name: Joi.string().allow(""),

      integration: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      task_details: this.TaskDTO(),

      threshold_details: this.DataTresholdDTO(),

      job_code: Joi.string().allow(""),

      alias: Joi.string().allow(""),
    });
  }

  static TaskDTO() {
    return Joi.object({
      type: Joi.number(),

      group_list: Joi.array().items(this.GenericDTO()),
    });
  }

  static ResponseEnvelopeString() {
    return Joi.object({
      timestamp: Joi.string().allow(""),

      status: Joi.number(),

      error: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      total_time_taken_in_millis: Joi.number(),

      http_status: Joi.string().allow(""),

      items: Joi.string().allow(""),

      payload: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      page: this.Page(),
    });
  }

  static KafkaMetaModel() {
    return Joi.object({
      job_type: Joi.string().allow(""),

      batch_id: Joi.number(),

      action: Joi.string().allow(""),

      trace: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      created_timestamp: Joi.number(),
    });
  }

  static SuppressStoreModel() {
    return Joi.object({
      stores: Joi.array().items(Joi.number()),
    });
  }

  static SuppressStorePayload() {
    return Joi.object({
      payload: Joi.array().items(this.SuppressStoreModel()),

      meta: this.KafkaMetaModel(),
    });
  }

  static KafkaResponse() {
    return Joi.object({
      offset: Joi.number(),

      partition: Joi.number(),
    });
  }

  static ResponseEnvelopeKafkaResponse() {
    return Joi.object({
      timestamp: Joi.string().allow(""),

      status: Joi.number(),

      error: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      total_time_taken_in_millis: Joi.number(),

      http_status: Joi.string().allow(""),

      items: this.KafkaResponse(),

      payload: this.KafkaResponse(),

      trace_id: Joi.string().allow(""),

      page: this.Page(),
    });
  }

  static GCompany() {
    return Joi.object({
      _id: Joi.string().allow(""),

      integration: Joi.string().allow(""),

      level: Joi.string().allow(""),

      uid: Joi.number(),

      opted: Joi.boolean(),

      permissions: Joi.array().items(Joi.string().allow("")),

      token: Joi.string().allow(""),

      name: Joi.string().allow(""),

      stores: Joi.array().items(this.GStore()),
    });
  }

  static GStore() {
    return Joi.object({
      _id: Joi.string().allow(""),

      integration: Joi.string().allow(""),

      level: Joi.string().allow(""),

      uid: Joi.number(),

      opted: Joi.boolean(),

      permissions: Joi.array().items(Joi.string().allow("")),

      token: Joi.string().allow(""),

      code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      data: this.StoreData(),
    });
  }

  static Metum() {
    return Joi.object({
      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ResponseEnvelopeListSlingshotConfigurationDetail() {
    return Joi.object({
      timestamp: Joi.string().allow(""),

      status: Joi.number(),

      error: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      total_time_taken_in_millis: Joi.number(),

      http_status: Joi.string().allow(""),

      items: Joi.array().items(this.SlingshotConfigurationDetail()),

      payload: Joi.array().items(this.SlingshotConfigurationDetail()),

      trace_id: Joi.string().allow(""),

      page: this.Page(),
    });
  }

  static SlingshotConfigurationDetail() {
    return Joi.object({
      integration: this.SlingshotIntegration(),

      companies: Joi.array().items(this.GCompany()),
    });
  }

  static SlingshotIntegration() {
    return Joi.object({
      _id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      meta: Joi.array().items(this.Metum()),
    });
  }

  static StoreData() {
    return Joi.object({
      location_id: Joi.string().allow(""),
    });
  }

  static AWSS3config() {
    return Joi.object({
      bucket: Joi.string().allow(""),

      region: Joi.string().allow(""),

      dir: Joi.string().allow(""),

      access_key: Joi.string().allow(""),

      secret_key: Joi.string().allow(""),

      local_file_path: Joi.string().allow(""),

      archive_path: Joi.string().allow(""),

      archive: Joi.boolean(),

      delete: Joi.boolean(),

      unzip: Joi.boolean(),

      zip_format: Joi.string().allow(""),

      file_regex: Joi.string().allow(""),

      archive_config: this.ArchiveConfig(),
    });
  }

  static ArchiveConfig() {
    return Joi.object({
      delete: Joi.boolean(),

      archive: Joi.boolean(),

      archive_dir: Joi.string().allow(""),
    });
  }

  static Audit() {
    return Joi.object({
      created_by: Joi.string().allow(""),

      modified_by: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static CatalogMasterConfig() {
    return Joi.object({
      source_slug: Joi.string().allow(""),
    });
  }

  static CompanyConfig() {
    return Joi.object({
      company_id: Joi.number(),

      exclude_steps: Joi.array().items(Joi.number()),

      hidden_closet_keys: Joi.array().items(Joi.string().allow("")),

      open_tags: Joi.object().pattern(/\S/, Joi.any()),

      tax_identifiers: Joi.array().items(Joi.string().allow("")),

      delete_quantity_threshold: Joi.number(),
    });
  }

  static DBConfig() {
    return Joi.object({
      vendor: Joi.string().allow(""),

      host: Joi.string().allow(""),

      port: Joi.number(),

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),

      dbname: Joi.string().allow(""),

      query: Joi.string().allow(""),

      procedure: Joi.boolean(),

      driver_class: Joi.string().allow(""),

      jdbc_url: Joi.string().allow(""),

      optional_properties: Joi.object().pattern(/\S/, Joi.string().allow("")),
    });
  }

  static DBConnectionProfile() {
    return Joi.object({
      inventory: Joi.string().allow(""),
    });
  }

  static DBParamConfig() {
    return Joi.object({
      params: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  static DefaultHeadersDTO() {
    return Joi.object({
      store: this.PropBeanDTO(),

      intf_article_id: this.PropBeanDTO(),

      price_effective: this.PropBeanDTO(),

      quantity: this.PropBeanDTO(),
    });
  }

  static DocMappingConfig() {
    return Joi.object({
      properties: Joi.object().pattern(/\S/, Joi.any()),

      junk_data_threshold_count: Joi.number(),

      prop_bean_configs: Joi.array().items(this.PropBeanConfig()),

      unwind_field: Joi.string().allow(""),

      default_headers: this.DefaultHeadersDTO(),
    });
  }

  static EmailConfig() {
    return Joi.object({
      recepient: Joi.string().allow(""),

      host: Joi.string().allow(""),

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),

      unzip: Joi.boolean(),

      read_from_content: Joi.boolean(),

      filter_based_on_recepients: Joi.boolean(),

      pcol: Joi.string().allow(""),

      subject_line_regex: Joi.string().allow(""),

      sender_address: Joi.string().allow(""),

      local_dir: Joi.string().allow(""),

      folder_name_hierarchies: Joi.array().items(Joi.string().allow("")),

      attachment_regex: Joi.string().allow(""),

      body_content_regex: Joi.string().allow(""),

      password_protected: Joi.boolean(),

      zip_format: Joi.string().allow(""),

      attachment_mandate: Joi.boolean(),

      filter_files_after_extraction: Joi.boolean(),

      archive_config: this.ArchiveConfig(),

      read_all_unread_mails: Joi.boolean(),

      content_type: Joi.string().allow(""),

      downloadable_link: Joi.boolean(),

      properties: Joi.object().pattern(/\S/, Joi.string().allow("")),
    });
  }

  static FTPConfig() {
    return Joi.object({
      host: Joi.string().allow(""),

      port: Joi.number(),

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),

      unzip: Joi.boolean(),

      retries: Joi.number(),

      interval: Joi.number(),

      local_dir: Joi.string().allow(""),

      remote_dir: Joi.string().allow(""),

      zip_file_regex: Joi.string().allow(""),

      archive_config: this.ArchiveConfig(),

      file_regex: Joi.string().allow(""),

      zip_format: Joi.string().allow(""),

      read_all_files: Joi.boolean(),
    });
  }

  static FileConfig() {
    return Joi.object({
      delimiter: Joi.string().allow(""),

      charset: Joi.string().allow(""),

      properties: Joi.object().pattern(/\S/, Joi.any()),

      file_has_header: Joi.boolean(),

      header_index: Joi.number(),

      header_array: Joi.array().items(Joi.string().allow("")),

      data_start_index: Joi.number(),

      prop_bean_configs: Joi.array().items(this.PropBeanConfig()),

      junk_data_threshold_count: Joi.number(),

      file_type: Joi.string().allow(""),

      line_validity_check: Joi.boolean(),

      sheet_names: Joi.array().items(Joi.string().allow("")),

      read_all_sheets: Joi.boolean(),

      quote_char: Joi.string().allow(""),

      escape_char: Joi.string().allow(""),

      default_headers: this.DefaultHeadersDTO(),
    });
  }

  static GoogleSpreadSheetConfig() {
    return Joi.object({
      range: Joi.string().allow(""),

      sheet_id: Joi.string().allow(""),

      client_secret_location: Joi.string().allow(""),

      cred_storage_directory: Joi.string().allow(""),

      local_dir: Joi.string().allow(""),

      archive_config: this.ArchiveConfig(),
    });
  }

  static HttpConfig() {
    return Joi.object({
      hosturl: Joi.string().allow(""),

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),

      request_params: Joi.object().pattern(/\S/, Joi.string().allow("")),

      http_method: Joi.string().allow(""),

      request_payload: Joi.string().allow(""),

      local_path: Joi.string().allow(""),

      archive_config: this.ArchiveConfig(),
    });
  }

  static JobConfig() {
    return Joi.object({
      _id: Joi.number(),

      job_code: Joi.string().allow(""),

      task_type: Joi.string().allow(""),

      sync_delay: Joi.number(),

      cron_expression: Joi.string().allow(""),

      store_filter: this.StoreFilter(),

      process_config: this.ProcessConfig(),

      store_config: Joi.array().items(this.StoreConfig()),

      properties: Joi.object().pattern(/\S/, Joi.string().allow("")),

      immediate_first_run: Joi.boolean(),

      disable: Joi.boolean(),

      dependent_job_codes: Joi.array().items(Joi.string().allow("")),

      company_config: Joi.array().items(this.CompanyConfig()),

      company_ids: Joi.array().items(Joi.number()),

      tax_identifiers: Joi.array().items(Joi.string().allow("")),

      priority: Joi.string().allow(""),

      period_threshold: Joi.number(),

      period_threshold_type: Joi.string().allow(""),

      db_connection_profile: this.DBConnectionProfile(),

      params: Joi.object().pattern(/\S/, Joi.any()),

      open_tags: Joi.object().pattern(/\S/, Joi.any()),

      delete_quantity_threshold: Joi.number(),

      catalog_master_config: this.CatalogMasterConfig(),

      aggregator_types: Joi.array().items(Joi.string().allow("")),

      integration_type: Joi.string().allow(""),

      min_price: Joi.number(),

      audit: this.Audit(),

      version: Joi.number(),

      alias: Joi.string().allow(""),
    });
  }

  static JobConfigRawDTO() {
    return Joi.object({
      company_name: Joi.string().allow("").required(),

      integration: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      data: this.JobConfig(),
    });
  }

  static JsonDocConfig() {
    return Joi.object({
      prop_bean_configs: Joi.array().items(this.PropBeanConfig()),
    });
  }

  static LocalFileConfig() {
    return Joi.object({
      retries: Joi.number(),

      interval: Joi.number(),

      local_dir: Joi.string().allow(""),

      working_dir: Joi.string().allow(""),

      unzip: Joi.boolean(),

      zip_file_regex: Joi.string().allow(""),

      file_regex: Joi.string().allow(""),

      zip_format: Joi.string().allow(""),

      archive_config: this.ArchiveConfig(),

      read_all_files: Joi.boolean(),
    });
  }

  static MongoDocConfig() {
    return Joi.object({
      collection_name: Joi.string().allow(""),

      find_query: Joi.object().pattern(/\S/, Joi.any()),

      projection_query: Joi.object().pattern(/\S/, Joi.any()),

      prop_bean_configs: Joi.array().items(this.PropBeanConfig()),

      aggregate_pipeline: Joi.array().items(
        Joi.object().pattern(/\S/, Joi.any())
      ),

      skip_save: Joi.boolean(),
    });
  }

  static OAuthConfig() {
    return Joi.object({
      limit: Joi.number(),

      pages: Joi.number(),

      interval: Joi.number(),

      consumer_key: Joi.string().allow(""),

      consumer_secret: Joi.string().allow(""),

      token: Joi.string().allow(""),

      token_secret: Joi.string().allow(""),

      rest_url: Joi.string().allow(""),

      rest_base_url: Joi.string().allow(""),

      function_name: Joi.string().allow(""),
    });
  }

  static ProcessConfig() {
    return Joi.object({
      db_config: this.DBConfig(),

      db_param_config: this.DBParamConfig(),

      sftp_config: this.SFTPConfig(),

      aws_s3_config: this.AWSS3config(),

      mongo_doc_config: this.MongoDocConfig(),

      ftp_config: this.FTPConfig(),

      email_config: this.EmailConfig(),

      file_config: this.FileConfig(),

      json_doc_config: this.JsonDocConfig(),

      doc_mapping_config: this.DocMappingConfig(),

      task_step_config: this.TaskStepConfig(),

      http_config: this.HttpConfig(),

      local_file_config: this.LocalFileConfig(),

      oauth_config: this.OAuthConfig(),

      google_spreadsheet_config: this.GoogleSpreadSheetConfig(),
    });
  }

  static PropBeanConfig() {
    return Joi.object({
      required: Joi.boolean(),

      optional: Joi.boolean(),

      send: this.Send(),

      validations: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),

      values: Joi.array().items(Joi.string().allow("")),

      include: Joi.boolean(),

      source_field: Joi.string().allow(""),

      source_fields: Joi.array().items(Joi.string().allow("")),

      destination_field: Joi.string().allow(""),

      data_type: Joi.string().allow(""),

      default_value: Joi.any(),

      const_value: Joi.any(),

      concat_str: Joi.string().allow(""),

      function_name: Joi.string().allow(""),

      transformer_name: Joi.string().allow(""),

      all_param_function_name: Joi.string().allow(""),

      sub_separator: Joi.string().allow(""),

      index_field: Joi.string().allow(""),

      ignore_if_not_exists: Joi.boolean(),

      identifier_type: Joi.string().allow(""),

      projection_query: Joi.object().pattern(/\S/, Joi.any()),

      enrich_from_master: Joi.boolean(),
    });
  }

  static PropBeanDTO() {
    return Joi.object({
      required: Joi.boolean(),

      optional: Joi.boolean(),

      include: Joi.boolean(),

      source_field: Joi.string().allow(""),

      source_fields: Joi.array().items(Joi.string().allow("")),

      destination_field: Joi.string().allow(""),

      data_type: Joi.string().allow(""),

      default_value: Joi.any(),

      const_value: Joi.any(),

      concat_str: Joi.string().allow(""),

      function_name: Joi.string().allow(""),

      transformer_name: Joi.string().allow(""),

      all_param_function_name: Joi.string().allow(""),

      sub_separator: Joi.string().allow(""),

      index_field: Joi.string().allow(""),

      ignore_if_not_exists: Joi.boolean(),

      identifier_type: Joi.string().allow(""),

      projection_query: Joi.object().pattern(/\S/, Joi.any()),

      enrich_from_master: Joi.boolean(),
    });
  }

  static ResponseEnvelopeListJobConfigRawDTO() {
    return Joi.object({
      timestamp: Joi.string().allow(""),

      status: Joi.number(),

      error: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      total_time_taken_in_millis: Joi.number(),

      http_status: Joi.string().allow(""),

      items: Joi.array().items(this.JobConfigRawDTO()),

      payload: Joi.array().items(this.JobConfigRawDTO()),

      trace_id: Joi.string().allow(""),

      page: this.Page(),
    });
  }

  static SFTPConfig() {
    return Joi.object({
      host: Joi.string().allow(""),

      port: Joi.number(),

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),

      unzip: Joi.boolean(),

      retries: Joi.number(),

      interval: Joi.number(),

      private_key_path: Joi.string().allow(""),

      strict_host_key_checking: Joi.boolean(),

      local_dir: Joi.string().allow(""),

      remote_dir: Joi.string().allow(""),

      password_protected: Joi.boolean(),

      zip_file_regex: Joi.string().allow(""),

      file_regex: Joi.string().allow(""),

      zip_format: Joi.string().allow(""),

      archive_config: this.ArchiveConfig(),

      read_all_files: Joi.boolean(),
    });
  }

  static Send() {
    return Joi.object({
      raw: Joi.boolean(),

      processed: Joi.boolean(),
    });
  }

  static StoreConfig() {
    return Joi.object({
      job_code: Joi.string().allow(""),

      storeid: Joi.string().allow(""),

      store_alias: Joi.string().allow(""),

      store_file_regex: Joi.string().allow(""),

      store_file_name: Joi.string().allow(""),

      process_config: this.ProcessConfig(),

      properties: Joi.object().pattern(/\S/, Joi.string().allow("")),
    });
  }

  static StoreFilter() {
    return Joi.object({
      include_tags: Joi.array().items(Joi.string().allow("")),

      exclude_tags: Joi.array().items(Joi.string().allow("")),

      query: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  static TaskConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      task_config_id: Joi.number(),

      task_params: Joi.array().items(this.TaskParam()),
    });
  }

  static TaskParam() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.any(),
    });
  }

  static TaskStepConfig() {
    return Joi.object({
      task_configs: Joi.array().items(this.TaskConfig()),

      task_config_ids: Joi.array().items(Joi.number()),

      task_config_group_ids: Joi.array().items(Joi.number()),
    });
  }

  static JobStepsDTO() {
    return Joi.object({
      step_name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      step_execution_time: Joi.number(),

      start_count: Joi.number(),

      end_count: Joi.number(),

      deleted_count: Joi.number(),

      processed_start_time: Joi.string().allow(""),

      processed_at: Joi.string().allow(""),
    });
  }

  static ResponseEnvelopeListJobStepsDTO() {
    return Joi.object({
      timestamp: Joi.string().allow(""),

      status: Joi.number(),

      error: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      total_time_taken_in_millis: Joi.number(),

      http_status: Joi.string().allow(""),

      items: Joi.array().items(this.JobStepsDTO()),

      payload: Joi.array().items(this.JobStepsDTO()),

      trace_id: Joi.string().allow(""),

      page: this.Page(),
    });
  }

  static ResponseEnvelopeListJobConfigDTO() {
    return Joi.object({
      timestamp: Joi.string().allow(""),

      status: Joi.number(),

      error: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      total_time_taken_in_millis: Joi.number(),

      http_status: Joi.string().allow(""),

      items: Joi.array().items(this.JobConfigDTO()),

      payload: Joi.array().items(this.JobConfigDTO()),

      trace_id: Joi.string().allow(""),

      page: this.Page(),
    });
  }

  static ResponseEnvelopeJobConfigDTO() {
    return Joi.object({
      timestamp: Joi.string().allow(""),

      status: Joi.number(),

      error: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      total_time_taken_in_millis: Joi.number(),

      http_status: Joi.string().allow(""),

      items: this.JobConfigDTO(),

      payload: this.JobConfigDTO(),

      trace_id: Joi.string().allow(""),

      page: this.Page(),
    });
  }

  static JobHistoryDto() {
    return Joi.object({
      total_added_count: Joi.number(),

      total_updated_count: Joi.number(),

      total_suppressed_count: Joi.number(),

      total_initial_count: Joi.number(),

      job_id: Joi.number(),

      status: Joi.string().allow(""),

      job_code: Joi.string().allow(""),

      processed_on: Joi.string().allow(""),

      filename: Joi.array().items(Joi.string().allow("")),

      error_type: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static JobMetricsDto() {
    return Joi.object({
      job_code: Joi.string().allow(""),

      is_run_more_than_usual: Joi.string().allow(""),

      job_history: Joi.array().items(this.JobHistoryDto()),

      total_success_count: Joi.number(),

      total_failure_count: Joi.number(),

      total_warning_count: Joi.number(),

      total_suppressed_count: Joi.number(),

      total_job_runs: Joi.number(),
    });
  }

  static ResponseEnvelopeJobMetricsDto() {
    return Joi.object({
      timestamp: Joi.string().allow(""),

      status: Joi.number(),

      error: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      total_time_taken_in_millis: Joi.number(),

      http_status: Joi.string().allow(""),

      items: this.JobMetricsDto(),

      payload: this.JobMetricsDto(),

      trace_id: Joi.string().allow(""),

      page: this.Page(),
    });
  }

  static JobConfigListDTO() {
    return Joi.object({
      code: Joi.string().allow(""),

      alias: Joi.string().allow(""),

      modified_by: Joi.string().allow(""),

      created_by: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      active: Joi.boolean(),

      type: Joi.string().allow(""),
    });
  }

  static ResponseEnvelopeListJobConfigListDTO() {
    return Joi.object({
      timestamp: Joi.string().allow(""),

      status: Joi.number(),

      error: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      total_time_taken_in_millis: Joi.number(),

      http_status: Joi.string().allow(""),

      items: Joi.array().items(this.JobConfigListDTO()),

      payload: Joi.array().items(this.JobConfigListDTO()),

      trace_id: Joi.string().allow(""),

      page: this.Page(),
    });
  }

  static ApplicationInventory() {
    return Joi.object({
      inventory: this.AppInventoryConfig(),

      authentication: this.AuthenticationConfig(),

      article_assignment: this.ArticleAssignmentConfig(),

      reward_points: this.RewardPointsConfig(),

      cart: this.AppCartConfig(),

      payment: this.AppPaymentConfig(),

      order: this.AppOrderConfig(),

      logistics: this.AppLogisticsConfig(),

      business: Joi.string().allow(""),

      comms_enabled: Joi.boolean(),

      platforms: Joi.array().items(Joi.string().allow("")),

      _id: Joi.string().allow(""),

      loyalty_points: this.LoyaltyPointsConfig(),

      app: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      modified_by: Joi.string().allow(""),
    });
  }

  static AppInventoryConfig() {
    return Joi.object({
      brand: this.InventoryBrand(),

      store: this.InventoryStore(),

      category: this.InventoryCategory(),

      price: this.InventoryPrice(),

      discount: this.InventoryDiscount(),

      out_of_stock: Joi.boolean(),

      only_verified_products: Joi.boolean(),

      franchise_enabled: Joi.boolean(),

      exclude_category: Joi.array().items(Joi.any()),

      image: Joi.array().items(Joi.string().allow("")),

      company_store: Joi.array().items(Joi.any()),
    });
  }

  static InventoryBrand() {
    return Joi.object({
      criteria: Joi.string().allow(""),

      brands: Joi.array().items(Joi.any()),
    });
  }

  static InventoryStore() {
    return Joi.object({
      criteria: Joi.string().allow(""),

      stores: Joi.array().items(Joi.any()),

      rules: this.AppStoreRules(),
    });
  }

  static AppStoreRules() {
    return Joi.object({
      companies: Joi.array().items(Joi.number()),

      brands: Joi.array().items(Joi.any()),
    });
  }

  static InventoryCategory() {
    return Joi.object({
      criteria: Joi.string().allow(""),

      categories: Joi.array().items(Joi.any()),
    });
  }

  static InventoryPrice() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static InventoryDiscount() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static AuthenticationConfig() {
    return Joi.object({
      required: Joi.boolean(),

      provider: Joi.string().allow(""),
    });
  }

  static ArticleAssignmentConfig() {
    return Joi.object({
      rules: this.ArticleAssignmentRules(),

      post_order_reassignment: Joi.boolean(),
    });
  }

  static ArticleAssignmentRules() {
    return Joi.object({
      store_priority: this.StorePriority(),
    });
  }

  static StorePriority() {
    return Joi.object({
      enabled: Joi.boolean(),

      storetype_order: Joi.array().items(Joi.any()),
    });
  }

  static AppCartConfig() {
    return Joi.object({
      delivery_charges: this.DeliveryCharges(),

      enabled: Joi.boolean(),

      max_cart_items: Joi.number(),

      min_cart_value: Joi.number(),

      bulk_coupons: Joi.boolean(),

      revenue_engine_coupon: Joi.boolean(),

      empty_cart: Joi.boolean(),
    });
  }

  static DeliveryCharges() {
    return Joi.object({
      enabled: Joi.boolean(),

      charges: this.Charges(),
    });
  }

  static Charges() {
    return Joi.object({
      threshold: Joi.number(),

      charges: Joi.number(),
    });
  }

  static AppPaymentConfig() {
    return Joi.object({
      callback_url: this.CallbackUrl(),

      methods: this.Methods(),

      payment_selection_lock: this.PaymentSelectionLock(),

      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),

      enabled: Joi.boolean(),

      cod_amount_limit: Joi.number(),

      cod_charges: Joi.number(),
    });
  }

  static CallbackUrl() {
    return Joi.object({
      app: Joi.string().allow(""),

      web: Joi.string().allow(""),
    });
  }

  static Methods() {
    return Joi.object({
      pl: this.PaymentModeConfig(),

      card: this.PaymentModeConfig(),

      nb: this.PaymentModeConfig(),

      wl: this.PaymentModeConfig(),

      ps: this.PaymentModeConfig(),

      upi: this.PaymentModeConfig(),

      qr: this.PaymentModeConfig(),

      cod: this.PaymentModeConfig(),

      pp: this.PaymentModeConfig(),

      jp: this.PaymentModeConfig(),

      pac: this.PaymentModeConfig(),

      fc: this.PaymentModeConfig(),

      jiopp: this.PaymentModeConfig(),

      stripepg: this.PaymentModeConfig(),

      juspaypg: this.PaymentModeConfig(),

      payubizpg: this.PaymentModeConfig(),

      payumoneypg: this.PaymentModeConfig(),

      rupifipg: this.PaymentModeConfig(),

      simpl: this.PaymentModeConfig(),
    });
  }

  static PaymentModeConfig() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),
    });
  }

  static AppOrderConfig() {
    return Joi.object({
      enabled: Joi.boolean(),

      force_reassignment: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static AppLogisticsConfig() {
    return Joi.object({
      logistics_by_seller: Joi.boolean(),

      serviceability_check: Joi.boolean(),

      same_day_delivery: Joi.boolean(),

      dp_assignment: Joi.boolean(),
    });
  }

  static LoyaltyPointsConfig() {
    return Joi.object({
      enabled: Joi.boolean(),

      auto_apply: Joi.boolean(),
    });
  }

  static AppInventoryPartialUpdate() {
    return Joi.object({
      reward_points: this.RewardPointsConfig(),

      cart: this.AppCartConfig(),

      payment: this.AppPaymentConfig(),

      loyalty_points: this.LoyaltyPointsConfig(),

      comms_enabled: Joi.boolean(),
    });
  }

  static BrandCompanyInfo() {
    return Joi.object({
      company_name: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static CompanyByBrandsRequest() {
    return Joi.object({
      brands: Joi.number().required(),

      search_text: Joi.string().allow(""),
    });
  }

  static CompanyByBrandsResponse() {
    return Joi.object({
      items: Joi.array().items(this.BrandCompanyInfo()),

      page: this.Page(),
    });
  }

  static StoreByBrandsRequest() {
    return Joi.object({
      company_id: Joi.number(),

      brands: Joi.number().required(),

      search_text: Joi.string().allow(""),
    });
  }

  static StoreByBrandsResponse() {
    return Joi.object({
      items: Joi.array().items(this.BrandStoreInfo()),

      page: this.Page(),
    });
  }

  static BrandStoreInfo() {
    return Joi.object({
      store_name: Joi.string().allow(""),

      store_id: Joi.number(),

      store_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      store_address: this.OptedStoreAddress(),

      company: this.OptedCompany(),
    });
  }

  static CompanyBrandInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.number(),

      brand_logo_url: Joi.string().allow(""),

      brand_banner_url: Joi.string().allow(""),

      brand_banner_portrait_url: Joi.string().allow(""),
    });
  }

  static BrandsByCompanyResponse() {
    return Joi.object({
      brands: this.CompanyBrandInfo(),
    });
  }

  static CreateApplicationRequest() {
    return Joi.object({
      app: this.App(),

      configuration: this.AppInventory(),

      domain: this.AppDomain(),
    });
  }

  static CreateAppResponse() {
    return Joi.object({
      app: this.Application(),

      configuration: this.ApplicationInventory(),
    });
  }

  static ApplicationsResponse() {
    return Joi.object({
      items: Joi.array().items(this.Application()),

      page: this.Page(),
    });
  }

  static MobileAppConfiguration() {
    return Joi.object({
      is_active: Joi.boolean(),

      _id: Joi.string().allow(""),

      app_name: Joi.string().allow(""),

      landing_image: this.LandingImage(),

      splash_image: this.SplashImage(),

      application: Joi.string().allow(""),

      platform_type: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),

      package_name: Joi.string().allow(""),
    });
  }

  static LandingImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static SplashImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static MobileAppConfigRequest() {
    return Joi.object({
      app_name: Joi.string().allow(""),

      landing_image: this.LandingImage(),

      splash_image: this.SplashImage(),

      is_active: Joi.boolean(),
    });
  }

  static BuildVersionHistory() {
    return Joi.object({
      versions: this.BuildVersion(),

      latest_available_version_name: Joi.string().allow(""),
    });
  }

  static BuildVersion() {
    return Joi.object({
      _id: Joi.string().allow(""),

      application: Joi.string().allow(""),

      platform_type: Joi.string().allow(""),

      build_status: Joi.string().allow(""),

      version_name: Joi.string().allow(""),

      version_code: Joi.number(),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static AppSupportedCurrency() {
    return Joi.object({
      _id: Joi.string().allow(""),

      supported_currency: Joi.array().items(Joi.string().allow("")),

      application: Joi.string().allow(""),

      default_currency: this.DefaultCurrency(),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
    });
  }

  static DefaultCurrency() {
    return Joi.object({
      ref: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static CurrencyConfig() {
    return Joi.object({
      _id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      decimal_digits: Joi.number(),

      symbol: Joi.string().allow(""),
    });
  }

  static DomainAdd() {
    return Joi.object({
      name: Joi.string().allow(""),
    });
  }

  static DomainAddRequest() {
    return Joi.object({
      domain: this.DomainAdd(),
    });
  }

  static DomainsResponse() {
    return Joi.object({
      domains: Joi.array().items(this.Domain()),
    });
  }

  static UpdateDomain() {
    return Joi.object({
      _id: Joi.string().allow(""),
    });
  }

  static UpdateDomainTypeRequest() {
    return Joi.object({
      domain: this.UpdateDomain(),

      action: Joi.string().allow(""),
    });
  }

  static DomainStatusRequest() {
    return Joi.object({
      domain_url: Joi.string().allow(""),
    });
  }

  static DomainStatus() {
    return Joi.object({
      display: Joi.string().allow(""),

      status: Joi.boolean(),
    });
  }

  static DomainStatusResponse() {
    return Joi.object({
      connected: Joi.boolean(),

      status: Joi.array().items(this.DomainStatus()),
    });
  }

  static DomainSuggestionsRequest() {
    return Joi.object({
      domain_url: Joi.string().allow(""),

      custom: Joi.boolean(),
    });
  }

  static DomainSuggestion() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      unsupported: Joi.boolean(),

      is_available: Joi.boolean().required(),

      price: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static DomainSuggestionsResponse() {
    return Joi.object({
      domains: Joi.array().items(this.DomainSuggestion()),
    });
  }

  static GetIntegrationsOptInsResponse() {
    return Joi.object({
      items: Joi.array().items(this.IntegrationOptIn()),

      page: this.Page(),
    });
  }

  static IntegrationOptIn() {
    return Joi.object({
      validators: this.Validators(),

      description: Joi.string().allow(""),

      description_html: Joi.string().allow(""),

      constants: Joi.string().allow(""),

      companies: Joi.array().items(Joi.any()),

      support: Joi.array().items(Joi.string().allow("")),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      meta: Joi.array().items(this.IntegrationMeta()),

      icon: Joi.string().allow(""),

      owner: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      token: Joi.string().allow(""),

      secret: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static Validators() {
    return Joi.object({
      company: this.CompanyValidator(),

      store: this.StoreValidator(),

      inventory: this.InventoryValidator(),

      order: this.OrderValidator(),
    });
  }

  static CompanyValidator() {
    return Joi.object({
      json_schema: Joi.array().items(this.JsonSchema()),

      browser_script: Joi.string().allow(""),
    });
  }

  static JsonSchema() {
    return Joi.object({
      display: Joi.string().allow(""),

      key: Joi.string().allow(""),

      type: Joi.string().allow(""),

      tooltip: Joi.string().allow(""),
    });
  }

  static StoreValidator() {
    return Joi.object({
      json_schema: Joi.array().items(this.JsonSchema()),

      browser_script: Joi.string().allow(""),
    });
  }

  static InventoryValidator() {
    return Joi.object({
      json_schema: Joi.array().items(this.JsonSchema()),

      browser_script: Joi.string().allow(""),
    });
  }

  static OrderValidator() {
    return Joi.object({
      json_schema: Joi.array().items(this.JsonSchema()),

      browser_script: Joi.string().allow(""),
    });
  }

  static IntegrationMeta() {
    return Joi.object({
      is_public: Joi.boolean(),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static Integration() {
    return Joi.object({
      validators: this.Validators(),

      description: Joi.string().allow(""),

      description_html: Joi.string().allow(""),

      constants: Joi.any(),

      companies: Joi.array().items(Joi.any()),

      support: Joi.array().items(Joi.string().allow("")),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      meta: Joi.array().items(this.IntegrationMeta()),

      icon: Joi.string().allow(""),

      owner: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      token: Joi.string().allow(""),

      secret: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static IntegrationConfigResponse() {
    return Joi.object({
      items: Joi.array().items(this.IntegrationLevel()),
    });
  }

  static IntegrationLevel() {
    return Joi.object({
      opted: Joi.boolean(),

      permissions: Joi.array().items(Joi.any()),

      last_patch: Joi.array().items(this.LastPatch()),

      _id: Joi.string().allow(""),

      integration: Joi.string().allow(""),

      level: Joi.string().allow(""),

      uid: Joi.number(),

      meta: Joi.array().items(this.IntegrationMeta()),

      token: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),

      data: Joi.any(),
    });
  }

  static UpdateIntegrationLevelRequest() {
    return Joi.object({
      items: Joi.array().items(this.IntegrationLevel()),
    });
  }

  static OptedStoreIntegration() {
    return Joi.object({
      other_opted: Joi.boolean(),

      other_integration: this.IntegrationOptIn(),

      other_entity: this.OtherEntity(),
    });
  }

  static OtherEntity() {
    return Joi.object({
      opted: Joi.boolean(),

      permissions: Joi.array().items(Joi.string().allow("")),

      last_patch: Joi.array().items(this.LastPatch()),

      _id: Joi.string().allow(""),

      integration: Joi.string().allow(""),

      level: Joi.string().allow(""),

      uid: Joi.number(),

      data: this.OtherEntityData(),

      meta: Joi.array().items(Joi.any()),

      token: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static LastPatch() {
    return Joi.object({
      op: Joi.string().allow(""),

      path: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static OtherEntityData() {
    return Joi.object({
      article_identifier: Joi.string().allow(""),
    });
  }

  static App() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      channel_type: Joi.string().allow(""),

      auth: this.ApplicationAuth(),

      name: Joi.string().allow(""),

      desc: Joi.string().allow(""),
    });
  }

  static AppInventory() {
    return Joi.object({
      brand: this.InventoryBrandRule(),

      store: this.InventoryStoreRule(),

      image: Joi.array().items(Joi.string().allow("")),

      franchise_enabled: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      only_verified_products: Joi.boolean(),

      payment: this.InventoryPaymentConfig(),

      article_assignment: this.InventoryArticleAssignment(),
    });
  }

  static AppDomain() {
    return Joi.object({
      name: Joi.string().allow(""),
    });
  }

  static CompaniesResponse() {
    return Joi.object({
      items: this.AppInventoryCompanies(),

      page: this.Page(),
    });
  }

  static AppInventoryCompanies() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
    });
  }

  static StoresResponse() {
    return Joi.object({
      items: this.AppInventoryStores(),

      page: this.Page(),
    });
  }

  static AppInventoryStores() {
    return Joi.object({
      _id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static FilterOrderingStoreRequest() {
    return Joi.object({
      all_stores: Joi.boolean(),

      deployed_stores: Joi.array().items(Joi.number()),

      q: Joi.string().allow(""),

      only_deployed: Joi.boolean(),
    });
  }

  static DeploymentMeta() {
    return Joi.object({
      deployed_stores: Joi.array().items(Joi.number()),

      all_stores: Joi.boolean(),

      enabled: Joi.boolean(),

      type: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      app: Joi.string().allow(""),
    });
  }

  static OrderingStoreConfig() {
    return Joi.object({
      deployment_meta: this.DeploymentMeta(),
    });
  }

  static OtherSellerCompany() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static OtherSellerApplication() {
    return Joi.object({
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      domain: Joi.string().allow(""),

      company: this.OtherSellerCompany(),

      opt_type: Joi.string().allow(""),
    });
  }

  static OtherSellerApplications() {
    return Joi.object({
      items: Joi.array().items(this.OtherSellerApplication()),

      page: this.Page(),
    });
  }

  static OptedApplicationResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      domain: Joi.string().allow(""),

      company: this.OptedCompany(),

      opted_inventory: this.OptedInventory(),

      opt_out_inventory: this.OptOutInventory(),
    });
  }

  static OptedCompany() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static OptedInventory() {
    return Joi.object({
      opt_type: this.OptType(),

      items: Joi.any(),
    });
  }

  static OptType() {
    return Joi.object({
      key: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static OptedStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      address: this.OptedStoreAddress(),

      display_name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static OptOutInventory() {
    return Joi.object({
      store: Joi.array().items(Joi.number()).required(),

      company: Joi.array().items(Joi.number()).required(),
    });
  }

  static TokenResponse() {
    return Joi.object({
      tokens: this.Tokens(),

      _id: Joi.string().allow(""),

      application: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static Tokens() {
    return Joi.object({
      firebase: this.Firebase(),

      moengage: this.Moengage(),

      segment: this.Segment(),

      gtm: this.Gtm(),

      freshchat: this.Freshchat(),

      safetynet: this.Safetynet(),

      fynd_rewards: this.FyndRewards(),

      google_map: this.GoogleMap(),
    });
  }

  static Firebase() {
    return Joi.object({
      credentials: this.Credentials(),

      enabled: Joi.boolean(),
    });
  }

  static Credentials() {
    return Joi.object({
      ios: this.Ios(),

      android: this.Android(),

      project_id: Joi.string().allow(""),

      gcm_sender_id: Joi.string().allow(""),

      application_id: Joi.string().allow(""),

      api_key: Joi.string().allow(""),
    });
  }

  static Ios() {
    return Joi.object({
      application_id: Joi.string().allow(""),

      api_key: Joi.string().allow(""),
    });
  }

  static Android() {
    return Joi.object({
      application_id: Joi.string().allow(""),

      api_key: Joi.string().allow(""),
    });
  }

  static Moengage() {
    return Joi.object({
      credentials: this.MoengageCredentials(),

      enabled: Joi.boolean(),
    });
  }

  static MoengageCredentials() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }

  static Segment() {
    return Joi.object({
      credentials: this.SegmentCredentials(),

      enabled: Joi.boolean(),
    });
  }

  static SegmentCredentials() {
    return Joi.object({
      write_key: Joi.string().allow(""),
    });
  }

  static Gtm() {
    return Joi.object({
      credentials: this.GtmCredentials(),

      enabled: Joi.boolean(),
    });
  }

  static GtmCredentials() {
    return Joi.object({
      api_key: Joi.string().allow(""),
    });
  }

  static Freshchat() {
    return Joi.object({
      credentials: this.FreshchatCredentials(),

      enabled: Joi.boolean(),
    });
  }

  static FreshchatCredentials() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      app_key: Joi.string().allow(""),

      web_token: Joi.string().allow(""),
    });
  }

  static Safetynet() {
    return Joi.object({
      credentials: this.SafetynetCredentials(),

      enabled: Joi.boolean(),
    });
  }

  static SafetynetCredentials() {
    return Joi.object({
      api_key: Joi.string().allow(""),
    });
  }

  static FyndRewards() {
    return Joi.object({
      credentials: this.FyndRewardsCredentials(),
    });
  }

  static FyndRewardsCredentials() {
    return Joi.object({
      public_key: Joi.string().allow(""),
    });
  }

  static GoogleMap() {
    return Joi.object({
      credentials: this.GoogleMapCredentials(),
    });
  }

  static GoogleMapCredentials() {
    return Joi.object({
      api_key: Joi.string().allow(""),
    });
  }

  static RewardPointsConfig() {
    return Joi.object({
      credit: this.Credit(),

      debit: this.Debit(),
    });
  }

  static Credit() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static Debit() {
    return Joi.object({
      enabled: Joi.boolean(),

      auto_apply: Joi.boolean(),

      strategy_channel: Joi.string().allow(""),
    });
  }

  static ProductDetailFeature() {
    return Joi.object({
      similar: Joi.array().items(Joi.string().allow("")),

      seller_selection: Joi.boolean(),

      update_product_meta: Joi.boolean(),

      request_product: Joi.boolean(),
    });
  }

  static LaunchPage() {
    return Joi.object({
      page_type: Joi.string().allow(""),

      params: Joi.any(),

      query: Joi.any(),
    });
  }

  static LandingPageFeature() {
    return Joi.object({
      launch_page: this.LaunchPage(),

      continue_as_guest: Joi.boolean(),

      login_btn_text: Joi.string().allow(""),

      show_domain_textbox: Joi.boolean(),

      show_register_btn: Joi.boolean(),
    });
  }

  static RegistrationPageFeature() {
    return Joi.object({
      ask_store_address: Joi.boolean(),
    });
  }

  static AppFeature() {
    return Joi.object({
      product_detail: this.ProductDetailFeature(),

      landing_page: this.LandingPageFeature(),

      registration_page: this.RegistrationPageFeature(),

      home_page: this.HomePageFeature(),

      common: this.CommonFeature(),

      cart: this.CartFeature(),

      qr: this.QrFeature(),

      pcr: this.PcrFeature(),

      order: this.OrderFeature(),

      _id: Joi.string().allow(""),

      app: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static HomePageFeature() {
    return Joi.object({
      order_processing: Joi.boolean(),
    });
  }

  static CommonFeature() {
    return Joi.object({
      communication_optin_dialog: this.CommunicationOptinDialogFeature(),

      deployment_store_selection: this.DeploymentStoreSelectionFeature(),

      listing_price: this.ListingPriceFeature(),

      currency: this.CurrencyFeature(),

      revenue_engine: this.RevenueEngineFeature(),

      feedback: this.FeedbackFeature(),

      compare_products: this.CompareProductsFeature(),

      reward_points: this.RewardPointsConfig(),
    });
  }

  static CommunicationOptinDialogFeature() {
    return Joi.object({
      visibility: Joi.boolean(),
    });
  }

  static DeploymentStoreSelectionFeature() {
    return Joi.object({
      enabled: Joi.boolean(),

      type: Joi.string().allow(""),
    });
  }

  static ListingPriceFeature() {
    return Joi.object({
      value: Joi.string().allow(""),
    });
  }

  static CurrencyFeature() {
    return Joi.object({
      value: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      default_currency: Joi.string().allow(""),
    });
  }

  static RevenueEngineFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static FeedbackFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static CompareProductsFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static CartFeature() {
    return Joi.object({
      gst_input: Joi.boolean(),

      staff_selection: Joi.boolean(),

      placing_for_customer: Joi.boolean(),

      google_map: Joi.boolean(),

      revenue_engine_coupon: Joi.boolean(),
    });
  }

  static QrFeature() {
    return Joi.object({
      application: Joi.boolean(),

      products: Joi.boolean(),

      collections: Joi.boolean(),
    });
  }

  static PcrFeature() {
    return Joi.object({
      staff_selection: Joi.boolean(),
    });
  }

  static OrderFeature() {
    return Joi.object({
      buy_again: Joi.boolean(),
    });
  }

  static AppFeatureRequest() {
    return Joi.object({
      feature: this.AppFeature(),
    });
  }

  static AppFeatureResponse() {
    return Joi.object({
      feature: this.AppFeature(),
    });
  }

  static Application() {
    return Joi.object({
      website: this.ApplicationWebsite(),

      cors: this.ApplicationCors(),

      auth: this.ApplicationAuth(),

      description: Joi.string().allow(""),

      channel_type: Joi.string().allow(""),

      cache_ttl: Joi.number(),

      is_internal: Joi.boolean(),

      is_active: Joi.boolean(),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      owner: Joi.string().allow(""),

      company_id: Joi.number(),

      token: Joi.string().allow(""),

      redirections: Joi.array().items(this.ApplicationRedirections()),

      meta: Joi.array().items(this.ApplicationMeta()),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),

      banner: this.SecureUrl(),

      logo: this.SecureUrl(),

      favicon: this.SecureUrl(),

      domains: Joi.array().items(this.Domain()),

      app_type: Joi.string().allow(""),

      mobile_logo: this.SecureUrl(),

      domain: this.Domain(),

      slug: Joi.string().allow(""),
    });
  }

  static UnhandledError() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static InvalidPayloadRequest() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static SuccessMessageResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static InventoryBrandRule() {
    return Joi.object({
      criteria: Joi.string().allow(""),

      brands: Joi.array().items(Joi.number()),
    });
  }

  static StoreCriteriaRule() {
    return Joi.object({
      companies: Joi.array().items(Joi.number()),

      brands: Joi.array().items(Joi.number()),
    });
  }

  static InventoryStoreRule() {
    return Joi.object({
      criteria: Joi.string().allow(""),

      rules: Joi.array().items(this.StoreCriteriaRule()),

      stores: Joi.array().items(Joi.number()),
    });
  }

  static InventoryPaymentConfig() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static StorePriorityRule() {
    return Joi.object({
      enabled: Joi.boolean(),

      storetype_order: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ArticleAssignmentRule() {
    return Joi.object({
      store_priority: this.StorePriorityRule(),
    });
  }

  static InventoryArticleAssignment() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),

      rules: this.ArticleAssignmentRule(),
    });
  }

  static CompanyAboutAddress() {
    return Joi.object({
      pincode: Joi.number(),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
    });
  }

  static UserEmail() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      email: Joi.string().allow(""),
    });
  }

  static UserPhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      country_code: Joi.number(),

      phone: Joi.string().allow(""),
    });
  }

  static ApplicationInformation() {
    return Joi.object({
      address: this.InformationAddress(),

      support: this.InformationSupport(),

      social_links: this.SocialLinks(),

      links: this.Links(),

      copyright_text: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      business_highlights: this.BusinessHighlights(),

      application: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static InformationAddress() {
    return Joi.object({
      loc: Joi.string().allow(""),

      address_line: Joi.array().items(Joi.string().allow("")),

      phone: Joi.array().items(this.InformationPhone()),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static InformationPhone() {
    return Joi.object({
      code: Joi.string().allow(""),

      number: Joi.string().allow(""),
    });
  }

  static InformationSupport() {
    return Joi.object({
      phone: Joi.array().items(Joi.string().allow("")),

      email: Joi.array().items(Joi.string().allow("")),

      timing: Joi.string().allow(""),
    });
  }

  static SocialLinks() {
    return Joi.object({
      facebook: this.FacebookLink(),

      instagram: this.InstagramLink(),

      twitter: this.TwitterLink(),

      pinterest: this.PinterestLink(),

      google_plus: this.GooglePlusLink(),

      youtube: this.YoutubeLink(),

      linked_in: this.LinkedInLink(),

      vimeo: this.VimeoLink(),

      blog_link: this.BlogLink(),
    });
  }

  static FacebookLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static InstagramLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static TwitterLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static PinterestLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static GooglePlusLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static YoutubeLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static LinkedInLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static VimeoLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static BlogLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static Links() {
    return Joi.object({
      title: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static BusinessHighlights() {
    return Joi.object({
      _id: Joi.string().allow(""),

      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),
    });
  }

  static ApplicationDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: this.SecureUrl(),

      mobile_logo: this.SecureUrl(),

      favicon: this.SecureUrl(),

      banner: this.SecureUrl(),

      domain: this.Domain(),

      domains: Joi.array().items(this.Domain()),

      _id: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static CurrenciesResponse() {
    return Joi.object({
      items: Joi.array().items(this.Currency()),
    });
  }

  static AppCurrencyResponse() {
    return Joi.object({
      application: Joi.string().allow(""),

      default_currency: this.DefaultCurrency(),

      supported_currency: Joi.array().items(this.Currency()),
    });
  }

  static StoreLatLong() {
    return Joi.object({
      type: Joi.string().allow(""),

      coordinates: Joi.array().items(Joi.number()),
    });
  }

  static OptedStoreAddress() {
    return Joi.object({
      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      lat_long: this.StoreLatLong(),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),
    });
  }

  static OrderingStores() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.OrderingStore()),

      deployed_stores: Joi.array().items(Joi.number()),

      all_stores: Joi.boolean(),

      enabled: Joi.boolean(),

      type: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      app: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static OrderingStoresResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.OrderingStore()),
    });
  }

  static PostOrder() {
    return Joi.object({
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
    });
  }

  static PaymentAllowValue() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  static PaymentModes() {
    return Joi.object({
      networks: Joi.array().items(Joi.string().allow("")),

      codes: Joi.array().items(Joi.string().allow("")),

      uses: this.PaymentAllowValue(),

      types: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UsesRemaining() {
    return Joi.object({
      app: Joi.number(),

      total: Joi.number(),

      user: Joi.number(),
    });
  }

  static UsesRestriction() {
    return Joi.object({
      remaining: this.UsesRemaining(),

      maximum: this.UsesRemaining(),
    });
  }

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }

  static PriceRange() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static Restrictions() {
    return Joi.object({
      platforms: Joi.array().items(Joi.string().allow("")),

      post_order: this.PostOrder(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      uses: this.UsesRestriction(),

      bulk_bundle: this.BulkBundleRestriction(),

      user_type: Joi.string().allow(""),

      coupon_allowed: Joi.boolean(),

      ordering_stores: Joi.array().items(Joi.number()),

      user_groups: Joi.array().items(Joi.number()),

      price_range: this.PriceRange(),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      applicable_on: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      value_type: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      auto_apply: Joi.boolean(),

      currency_code: Joi.string().allow(""),

      calculate_on: Joi.string().allow("").required(),
    });
  }

  static CouponAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null),

      txn_mode: Joi.string().allow(""),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      next_schedule: Joi.array().items(Joi.any()),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      start: Joi.string().allow(""),
    });
  }

  static Validation() {
    return Joi.object({
      app_id: Joi.array().items(Joi.string().allow("")),

      anonymous: Joi.boolean(),

      user_registered_after: Joi.string().allow("").allow(null),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static Rule() {
    return Joi.object({
      value: Joi.number(),

      key: Joi.number(),

      max: Joi.number(),

      min: Joi.number(),

      discount_qty: Joi.number(),
    });
  }

  static DisplayMetaDict() {
    return Joi.object({
      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static DisplayMeta() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      auto: this.DisplayMetaDict(),

      apply: this.DisplayMetaDict(),

      subtitle: Joi.string().allow(""),

      remove: this.DisplayMetaDict(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static State() {
    return Joi.object({
      is_archived: Joi.boolean(),

      is_display: Joi.boolean(),

      is_public: Joi.boolean(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      restrictions: this.Restrictions(),

      rule_definition: this.RuleDefinition().required(),

      action: this.CouponAction(),

      identifiers: this.Identifier().required(),

      validity: this.Validity().required(),

      _schedule: this.CouponSchedule(),

      validation: this.Validation(),

      date_meta: this.CouponDateMeta(),

      code: Joi.string().allow("").required(),

      rule: Joi.array().items(this.Rule()).required(),

      display_meta: this.DisplayMeta().required(),

      author: this.CouponAuthor(),

      ownership: this.Ownership().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      state: this.State(),

      type_slug: Joi.string().allow("").required(),
    });
  }

  static CouponsResponse() {
    return Joi.object({
      items: this.CouponAdd(),

      page: this.Page(),
    });
  }

  static SuccessMessage() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static OperationErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static CouponUpdate() {
    return Joi.object({
      restrictions: this.Restrictions(),

      rule_definition: this.RuleDefinition().required(),

      action: this.CouponAction(),

      identifiers: this.Identifier().required(),

      validity: this.Validity().required(),

      _schedule: this.CouponSchedule(),

      validation: this.Validation(),

      date_meta: this.CouponDateMeta(),

      code: Joi.string().allow("").required(),

      rule: Joi.array().items(this.Rule()).required(),

      display_meta: this.DisplayMeta().required(),

      author: this.CouponAuthor(),

      ownership: this.Ownership().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      state: this.State(),

      type_slug: Joi.string().allow("").required(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: this.CouponSchedule(),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      next_schedule: Joi.array().items(Joi.any()),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      start: Joi.string().allow("").required(),

      published: Joi.boolean().required(),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static CompareObject() {
    return Joi.object({
      less_than_equals: Joi.number(),

      less_than: Joi.number(),

      equals: Joi.number(),

      greater_than: Joi.number(),

      greater_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_exclude_category: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      product_tags: Joi.array().items(Joi.string().allow("")),

      cart_quantity: this.CompareObject(),

      cart_total: this.CompareObject(),

      cart_unique_item_quantity: this.CompareObject(),

      cart_unique_item_amount: this.CompareObject(),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_category: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_store: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_brand: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_exclude_id: Joi.array().items(Joi.number()),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      max_usage_per_transaction: Joi.number(),

      discount_percentage: Joi.number(),

      discount_amount: Joi.number(),

      max_offer_quantity: Joi.number(),

      code: Joi.string().allow(""),

      max_discount_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      apportion_discount: Joi.boolean(),

      min_offer_quantity: Joi.number(),

      discount_price: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      discount_type: Joi.string().allow("").required(),

      item_criteria: this.ItemCriteria().required(),

      offer: this.DiscountOffer().required(),

      buy_condition: Joi.string().allow("").required(),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static Visibility() {
    return Joi.object({
      pdp: Joi.boolean().required(),

      coupon_list: Joi.boolean().required(),
    });
  }

  static PostOrder1() {
    return Joi.object({
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
    });
  }

  static UsesRemaining1() {
    return Joi.object({
      total: Joi.number(),

      user: Joi.number(),
    });
  }

  static UsesRestriction1() {
    return Joi.object({
      remaining: this.UsesRemaining1(),

      maximum: this.UsesRemaining1(),
    });
  }

  static PaymentAllowValue1() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  static PromotionPaymentModes() {
    return Joi.object({
      uses: this.PaymentAllowValue1(),

      codes: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),
    });
  }

  static UserRegistered() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").allow(null),
    });
  }

  static Restrictions1() {
    return Joi.object({
      platforms: Joi.array().items(Joi.string().allow("")),

      post_order: this.PostOrder1(),

      user_id: Joi.array().items(Joi.string().allow("")),

      uses: this.UsesRestriction1().required(),

      payments: Joi.array().items(this.PromotionPaymentModes()),

      order_quantity: Joi.number(),

      user_registered: this.UserRegistered(),

      user_groups: Joi.array().items(Joi.number()),

      anonymous_users: Joi.boolean(),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      offer_label: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null).required(),

      action_type: Joi.string().allow("").required(),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      _schedule: this.PromotionSchedule(),

      application_id: Joi.string().allow("").required(),

      stackable: Joi.boolean(),

      date_meta: this.PromotionDateMeta(),

      author: this.PromotionAuthor(),

      currency: Joi.string().allow(""),

      _custom_json: Joi.any(),

      mode: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      discount_rules: Joi.array().items(this.DiscountRule()).required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      code: Joi.string().allow(""),

      ownership: this.Ownership1().required(),

      visiblility: this.Visibility(),

      apply_priority: Joi.number(),

      restrictions: this.Restrictions1(),

      promo_group: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

      display_meta: this.DisplayMeta1().required(),

      post_order_action: this.PromotionAction(),

      apply_all_discount: Joi.boolean(),

      calculate_on: Joi.string().allow(""),
    });
  }

  static PromotionsResponse() {
    return Joi.object({
      items: this.PromotionListItem(),

      page: this.Page(),
    });
  }

  static PromotionAdd() {
    return Joi.object({
      _schedule: this.PromotionSchedule(),

      application_id: Joi.string().allow("").required(),

      stackable: Joi.boolean(),

      date_meta: this.PromotionDateMeta(),

      author: this.PromotionAuthor(),

      currency: Joi.string().allow(""),

      _custom_json: Joi.any(),

      mode: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      discount_rules: Joi.array().items(this.DiscountRule()).required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      code: Joi.string().allow(""),

      ownership: this.Ownership1().required(),

      visiblility: this.Visibility(),

      apply_priority: Joi.number(),

      restrictions: this.Restrictions1(),

      promo_group: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

      display_meta: this.DisplayMeta1().required(),

      post_order_action: this.PromotionAction(),

      apply_all_discount: Joi.boolean(),

      calculate_on: Joi.string().allow(""),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      _schedule: this.PromotionSchedule(),

      application_id: Joi.string().allow("").required(),

      stackable: Joi.boolean(),

      date_meta: this.PromotionDateMeta(),

      author: this.PromotionAuthor(),

      currency: Joi.string().allow(""),

      _custom_json: Joi.any(),

      mode: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      discount_rules: Joi.array().items(this.DiscountRule()).required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      code: Joi.string().allow(""),

      ownership: this.Ownership1().required(),

      visiblility: this.Visibility(),

      apply_priority: Joi.number(),

      restrictions: this.Restrictions1(),

      promo_group: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

      display_meta: this.DisplayMeta1().required(),

      post_order_action: this.PromotionAction(),

      apply_all_discount: Joi.boolean(),

      calculate_on: Joi.string().allow(""),
    });
  }

  static PromotionPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: this.PromotionSchedule(),
    });
  }

  static ActivePromosResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      entity_slug: Joi.string().allow(""),

      title: Joi.string().allow(""),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      example: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),
    });
  }

  static CartItem() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      product_id: Joi.string().allow("").required(),

      quantity: Joi.number(),
    });
  }

  static OpenapiCartDetailsRequest() {
    return Joi.object({
      cart_items: this.CartItem(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      effective: Joi.number(),

      add_on: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      selling: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: this.ProductPrice(),

      converted: this.ProductPrice(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      out_of_stock: Joi.boolean(),
    });
  }

  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductAction() {
    return Joi.object({
      url: Joi.string().allow(""),

      query: this.ActionQuery(),

      type: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      action: this.ProductAction(),

      type: Joi.string().allow(""),

      brand: this.BaseInfo(),

      slug: Joi.string().allow(""),

      net_quantity: this.NetQuantity(),

      categories: Joi.array().items(this.CategoryInfo()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      images: Joi.array().items(this.ProductImage()),
    });
  }

  static BasePrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static ArticlePriceInfo() {
    return Joi.object({
      base: this.BasePrice(),

      converted: this.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      store: this.BaseInfo(),

      quantity: Joi.number(),

      type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      size: Joi.string().allow(""),

      price: this.ArticlePriceInfo(),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      seller: this.BaseInfo(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_price_details: Joi.any(),

      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: this.FreeGiftItem(),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static Ownership2() {
    return Joi.object({
      payable_by: Joi.string().allow(""),

      payable_category: Joi.string().allow(""),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      raw_offer: Joi.any(),

      item_criteria: Joi.any(),

      offer: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      amount: Joi.number(),

      article_quantity: Joi.number(),

      buy_rules: Joi.array().items(this.BuyRules()),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(this.AppliedFreeArticles()),

      ownership: this.Ownership2(),

      promotion_group: Joi.string().allow(""),

      discount_rules: Joi.array().items(this.DiscountRulesApp()),

      promotion_name: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      promo_meta: this.PromoMeta(),

      identifiers: this.CartProductIdentifer().required(),

      key: Joi.string().allow(""),

      quantity: Joi.number(),

      discount: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      price: this.ProductPriceInfo(),

      coupon_message: Joi.string().allow(""),

      is_set: Joi.boolean(),

      availability: this.ProductAvailability(),

      product: this.CartProduct(),

      price_per_unit: this.ProductPriceInfo(),

      article: this.ProductArticle(),

      message: Joi.string().allow(""),

      promotions_applied: Joi.array().items(this.AppliedPromotion()),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      applicable: Joi.number(),

      total: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      value: Joi.number(),

      title: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      type: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      uid: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      fynd_cash: Joi.number(),

      discount: Joi.number(),

      vog: Joi.number(),

      convenience_fee: Joi.number(),

      mrp_total: Joi.number(),

      you_saved: Joi.number(),

      gst_charges: Joi.number(),

      subtotal: Joi.number(),

      total: Joi.number(),

      coupon: Joi.number(),

      cod_charge: Joi.number(),

      delivery_charge: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: this.LoyaltyPoints(),

      coupon: this.CouponBreakup(),

      display: Joi.array().items(this.DisplayBreakup()),

      raw: this.RawBreakup(),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(this.CartProductInfo()),

      breakup_values: this.CartBreakup(),

      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),
    });
  }

  static OpenApiErrorResponse() {
    return Joi.object({
      errors: Joi.any(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      phone: Joi.number(),

      landmark: Joi.string().allow(""),

      meta: Joi.any(),

      country_phone_code: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      city: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").allow(null),

      email: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      area: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      pincode: Joi.number(),

      address: Joi.string().allow(""),
    });
  }

  static OpenApiCartServiceabilityRequest() {
    return Joi.object({
      cart_items: this.CartItem(),

      shipping_address: this.ShippingAddress().required(),
    });
  }

  static PromiseTimestamp() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static PromiseFormatted() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static ShipmentPromise() {
    return Joi.object({
      timestamp: this.PromiseTimestamp(),

      formatted: this.PromiseFormatted(),
    });
  }

  static OpenApiCartServiceabilityResponse() {
    return Joi.object({
      delivery_promise: this.ShipmentPromise(),

      items: Joi.array().items(this.CartProductInfo()),

      breakup_values: this.CartBreakup(),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static OpenApiFiles() {
    return Joi.object({
      values: Joi.array().items(Joi.string().allow("")).required(),

      key: Joi.string().allow("").required(),
    });
  }

  static CartItemMeta() {
    return Joi.object({
      primary_item: Joi.boolean(),

      group_id: Joi.string().allow(""),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      product_id: Joi.number().required(),

      quantity: Joi.number(),

      discount: Joi.number().required(),

      amount_paid: Joi.number().required(),

      payment_methods: Joi.array()
        .items(this.MultiTenderPaymentMethod())
        .required(),

      loyalty_discount: Joi.number(),

      files: Joi.array().items(this.OpenApiFiles()),

      coupon_effective_discount: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      meta: this.CartItemMeta(),

      cod_charges: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      price_marked: Joi.number().required(),

      size: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      extra_meta: Joi.any(),

      price_effective: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      billing_address: this.ShippingAddress().required(),

      payment_methods: Joi.array()
        .items(this.MultiTenderPaymentMethod())
        .required(),

      loyalty_discount: Joi.number(),

      files: Joi.array().items(this.OpenApiFiles()),

      cart_items: Joi.array().items(this.OpenApiOrderItem()).required(),

      delivery_charges: Joi.number().required(),

      comment: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      cashback_applied: Joi.number().required(),

      gstin: Joi.string().allow("").allow(null),

      shipping_address: this.ShippingAddress(),

      cart_value: Joi.number().required(),

      coupon_value: Joi.number().required(),

      order_id: Joi.string().allow(""),

      cod_charges: Joi.number().required(),

      currency_code: Joi.string().allow(""),

      coupon: Joi.string().allow(""),

      employee_discount: Joi.any(),

      payment_mode: Joi.string().allow(""),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      order_ref_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      fynd_credits: Joi.any(),

      delivery_charges: Joi.any(),

      promotion: Joi.any(),

      fc_index_map: Joi.array().items(Joi.number()),

      is_default: Joi.boolean().required(),

      meta: Joi.any().allow(null),

      gstin: Joi.string().allow("").allow(null),

      pick_up_customer_details: Joi.any().allow(null),

      articles: Joi.array().items(Joi.any()).required(),

      last_modified: Joi.string().allow("").required(),

      order_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      cashback: Joi.any().required(),

      is_archive: Joi.boolean(),

      cod_charges: Joi.any(),

      expire_at: Joi.string().allow("").required(),

      buy_now: Joi.boolean(),

      bulk_coupon_discount: Joi.number().allow(null),

      payment_mode: Joi.string().allow("").allow(null),

      comment: Joi.string().allow("").allow(null),

      user_id: Joi.string().allow("").required(),

      shipments: Joi.array().items(Joi.any()),

      discount: Joi.number(),

      payment_methods: Joi.array().items(Joi.any()),

      merge_qty: Joi.boolean().allow(null),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      payments: Joi.any().allow(null),

      cart_value: Joi.number(),

      uid: Joi.number().required(),

      coupon: Joi.any().allow(null),

      _id: Joi.string().allow("").required(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      items: Joi.array().items(this.AbandonedCart()),

      success: Joi.boolean(),

      page: this.Page(),

      message: Joi.string().allow(""),

      result: Joi.any(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      items: Joi.array().items(this.CartProductInfo()),

      id: Joi.string().allow(""),

      delivery_promise: this.ShipmentPromise(),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      currency: this.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      breakup_values: this.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      gstin: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      message: Joi.string().allow(""),

      payment_selection_lock: this.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      item_id: Joi.number(),

      quantity: Joi.number(),

      seller_id: Joi.number(),

      article_assignment: Joi.any(),

      display: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      store_id: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      pos: Joi.boolean(),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      new_cart: Joi.boolean(),

      items: Joi.array().items(this.AddProductCart()),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      partial: Joi.boolean(),

      cart: this.CartDetailResponse(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      item_id: Joi.number(),

      quantity: Joi.number(),

      identifiers: this.CartProductIdentifer().required(),

      _custom_json: Joi.any(),

      article_id: Joi.string().allow(""),

      item_index: Joi.number(),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),
    });
  }

  static UpdateCartRequest() {
    return Joi.object({
      items: Joi.array().items(this.UpdateProductCart()),

      operation: Joi.string().allow("").required(),
    });
  }

  static UpdateCartDetailResponse() {
    return Joi.object({
      cart: this.CartDetailResponse(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static GetShareCartLinkRequest() {
    return Joi.object({
      id: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static GetShareCartLinkResponse() {
    return Joi.object({
      token: Joi.string().allow(""),

      share_url: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      source: Joi.any(),

      token: Joi.string().allow(""),

      meta: Joi.any(),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      cart_id: Joi.number(),

      message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      currency: this.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      shared_cart_details: this.SharedCartDetails(),

      buy_now: Joi.boolean(),

      comment: Joi.string().allow(""),

      breakup_values: this.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      payment_selection_lock: this.PaymentSelectionLock(),

      items: Joi.array().items(this.CartProductInfo()),

      delivery_promise: this.ShipmentPromise(),

      is_valid: Joi.boolean(),

      uid: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),
    });
  }

  static SharedCartResponse() {
    return Joi.object({
      cart: this.SharedCart(),

      error: Joi.string().allow(""),
    });
  }

  static CartList() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      cart_value: Joi.string().allow(""),

      item_counts: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static MultiCartResponse() {
    return Joi.object({
      data: Joi.array().items(this.CartList()),

      success: Joi.boolean(),
    });
  }

  static UpdateUserCartMapping() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      items: Joi.array().items(this.CartProductInfo()),

      id: Joi.string().allow(""),

      delivery_promise: this.ShipmentPromise(),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      currency: this.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      breakup_values: this.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      gstin: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      message: Joi.string().allow(""),

      user: this.UserInfo(),

      payment_selection_lock: this.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),
    });
  }

  static DeleteCartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      total_item_count: Joi.number(),

      total: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_value: Joi.number(),

      title: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      is_applicable: Joi.boolean(),

      is_applied: Joi.boolean(),

      coupon_code: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow(""),

      message: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      expires_on: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),
    });
  }

  static GetCouponResponse() {
    return Joi.object({
      page: this.PageCoupon(),

      available_coupon_list: Joi.array().items(this.Coupon()),
    });
  }

  static ApplyCouponRequest() {
    return Joi.object({
      coupon_code: Joi.string().allow("").required(),
    });
  }

  static GeoLocation() {
    return Joi.object({
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static PlatformAddress() {
    return Joi.object({
      id: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      meta: Joi.any(),

      cart_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      area: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      landmark: Joi.string().allow(""),

      geo_location: this.GeoLocation(),

      google_map_point: Joi.any(),
    });
  }

  static PlatformGetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(this.PlatformAddress()),
    });
  }

  static SaveAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      success: Joi.boolean(),

      is_default_address: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      success: Joi.boolean(),

      id: Joi.string().allow(""),

      is_updated: Joi.boolean(),

      is_default_address: Joi.boolean(),
    });
  }

  static DeleteAddressResponse() {
    return Joi.object({
      is_deleted: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static PlatformSelectCartAddressRequest() {
    return Joi.object({
      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      order_type: Joi.string().allow(""),

      items: Joi.array().items(this.CartProductInfo()),

      shipments: Joi.number(),

      dp_options: Joi.any().allow(null),

      shipment_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      promise: this.ShipmentPromise(),

      fulfillment_id: Joi.number(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      shipments: Joi.array().items(this.ShipmentResponse()),

      error: Joi.boolean(),

      breakup_values: this.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      gstin: Joi.string().allow(""),

      cart_id: Joi.number(),

      message: Joi.string().allow(""),

      payment_selection_lock: this.PaymentSelectionLock(),

      delivery_promise: this.ShipmentPromise(),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      currency: this.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      buy_now: Joi.boolean(),

      uid: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),
    });
  }

  static UpdateCartShipmentItem() {
    return Joi.object({
      article_uid: Joi.string().allow("").required(),

      quantity: Joi.number(),

      shipment_type: Joi.string().allow("").required(),
    });
  }

  static UpdateCartShipmentRequest() {
    return Joi.object({
      shipments: Joi.array().items(this.UpdateCartShipmentItem()).required(),
    });
  }

  static PlatformCartMetaRequest() {
    return Joi.object({
      pick_up_customer_details: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      comment: Joi.string().allow(""),
    });
  }

  static CartMetaResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartMetaMissingResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),
    });
  }

  static Files() {
    return Joi.object({
      values: Joi.array().items(Joi.string().allow("")).required(),

      key: Joi.string().allow("").required(),
    });
  }

  static PlatformCartCheckoutDetailRequest() {
    return Joi.object({
      aggregator: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      billing_address: Joi.any(),

      meta: Joi.any(),

      extra_meta: Joi.any(),

      ordering_store: Joi.number().allow(null),

      payment_mode: Joi.string().allow("").required(),

      payment_auto_confirm: Joi.boolean(),

      merchant_code: Joi.string().allow(""),

      delivery_address: Joi.any(),

      user_id: Joi.string().allow("").required(),

      billing_address_id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      pick_at_store_uid: Joi.number().allow(null),

      payment_identifier: Joi.string().allow("").allow(null),

      pos: Joi.boolean(),

      order_type: Joi.string().allow("").required(),

      payment_params: Joi.any().allow(null),

      callback_url: Joi.string().allow("").allow(null),

      staff: this.StaffCheckout(),

      files: Joi.array().items(this.Files()),
    });
  }

  static CheckCart() {
    return Joi.object({
      id: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      cod_available: Joi.boolean(),

      gstin: Joi.string().allow(""),

      cart_id: Joi.number(),

      message: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      user_type: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      currency: this.CartCurrency(),

      order_id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      success: Joi.boolean(),

      cod_charges: Joi.number(),

      buy_now: Joi.boolean(),

      comment: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      breakup_values: this.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      cod_message: Joi.string().allow(""),

      payment_selection_lock: this.PaymentSelectionLock(),

      items: Joi.array().items(this.CartProductInfo()),

      delivery_promise: this.ShipmentPromise(),

      error_message: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      is_valid: Joi.boolean(),

      uid: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      payment_confirm_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      success: Joi.boolean(),

      callback_url: Joi.string().allow(""),

      cart: this.CheckCart(),

      message: Joi.string().allow(""),

      data: Joi.any(),
    });
  }

  static CartDeliveryModesResponse() {
    return Joi.object({
      pickup_stores: Joi.array().items(Joi.number()),

      available_modes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      id: Joi.number(),

      store_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      uid: Joi.number(),

      email: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      area: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.number(),

      address: Joi.string().allow(""),
    });
  }

  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(this.PickupStoreDetail()),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      merchant_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      valid: Joi.boolean(),

      title: Joi.string().allow(""),

      discount: Joi.number(),

      code: Joi.string().allow("").allow(null),

      display_message_en: Joi.string().allow("").allow(null),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      coupon_validity: this.CouponValidity(),

      message: Joi.string().allow(""),

      success: Joi.boolean().required(),
    });
  }

  static E() {
    return Joi.object({
      code: Joi.number(),

      exception: Joi.string().allow(""),

      info: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static GiveawayResponse() {
    return Joi.object({
      items: Joi.array().items(this.Giveaway()),

      page: this.Page(),
    });
  }

  static Giveaway() {
    return Joi.object({
      _id: Joi.string().allow(""),

      _schedule: this.Schedule(),

      active: Joi.boolean(),

      application_id: Joi.string().allow(""),

      audience: this.RewardsAudience(),

      banner_image: this.Asset(),

      created_at: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      rule: this.RewardsRule(),

      title: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
    });
  }

  static Schedule() {
    return Joi.object({
      duration: Joi.number(),

      end: Joi.string().allow(""),

      start: Joi.string().allow(""),

      cron: Joi.string().allow(""),
    });
  }

  static RewardsAudience() {
    return Joi.object({
      header_user_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static RewardsRule() {
    return Joi.object({
      amount: Joi.number(),
    });
  }

  static Offer() {
    return Joi.object({
      _schedule: this.Schedule(),

      active: Joi.boolean(),

      application_id: Joi.string().allow(""),

      banner_image: this.Asset(),

      created_at: Joi.string().allow(""),

      name: Joi.string().allow(""),

      rule: Joi.any(),

      share: this.ShareMessages(),

      sub_text: Joi.string().allow(""),

      text: Joi.string().allow(""),

      type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      updated_by: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static ShareMessages() {
    return Joi.object({
      email: Joi.number(),

      facebook: Joi.string().allow(""),

      fallback: Joi.string().allow(""),

      message: Joi.string().allow(""),

      messenger: Joi.string().allow(""),

      sms: Joi.string().allow(""),

      text: Joi.string().allow(""),

      twitter: Joi.string().allow(""),

      whatsapp: Joi.string().allow(""),
    });
  }

  static UserRes() {
    return Joi.object({
      points: this.Points(),

      user: this.RewardUser(),
    });
  }

  static Points() {
    return Joi.object({
      available: Joi.number(),
    });
  }

  static RewardUser() {
    return Joi.object({
      _id: Joi.string().allow(""),

      active: Joi.boolean(),

      created_at: Joi.string().allow(""),

      referral: this.Referral(),

      uid: Joi.number(),

      updated_at: Joi.string().allow(""),

      user_block_reason: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static Referral() {
    return Joi.object({
      code: Joi.string().allow(""),
    });
  }

  static AppUser() {
    return Joi.object({
      _id: Joi.string().allow(""),

      active: Joi.boolean(),

      application_id: Joi.string().allow(""),

      block_reason: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      updated_by: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GiveawayAudience() {
    return Joi.object({
      audience_id: Joi.string().allow(""),

      current_count: Joi.number(),
    });
  }

  static HistoryRes() {
    return Joi.object({
      items: Joi.array().items(this.PointsHistory()),

      page: this.Page(),

      points: Joi.number(),
    });
  }

  static PointsHistory() {
    return Joi.object({
      _id: Joi.string().allow(""),

      application_id: Joi.string().allow(""),

      claimed: Joi.boolean(),

      created_at: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      meta: Joi.any(),

      points: Joi.number(),

      remaining_points: Joi.number(),

      text_1: Joi.string().allow(""),

      text_2: Joi.string().allow(""),

      text_3: Joi.string().allow(""),

      txn_name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ConfigurationRes() {
    return Joi.object({
      valid_android_packages: Joi.array().items(Joi.string().allow("")),

      terms_conditions_link: Joi.string().allow(""),

      application_id: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static SetConfigurationRes() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static ConfigurationRequest() {
    return Joi.object({
      valid_android_packages: Joi.array().items(Joi.string().allow("")),

      terms_conditions_link: Joi.string().allow(""),
    });
  }

  static StatGroup() {
    return Joi.object({
      key: Joi.string().allow(""),

      url: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static StatsGroups() {
    return Joi.object({
      groups: Joi.array().items(this.StatGroup()),
    });
  }

  static StatsGroupComponent() {
    return Joi.object({
      key: Joi.string().allow(""),

      url: Joi.string().allow(""),

      title: Joi.string().allow(""),

      type: Joi.string().allow(""),

      filters: Joi.any(),
    });
  }

  static StatsGroupComponents() {
    return Joi.object({
      title: Joi.string().allow(""),

      components: Joi.array().items(this.StatsGroupComponent()),
    });
  }

  static StatsRes() {
    return Joi.object({
      key: Joi.string().allow(""),

      title: Joi.string().allow(""),

      type: Joi.string().allow(""),

      data: Joi.any(),
    });
  }

  static ReceivedAt() {
    return Joi.object({
      value: Joi.string().allow(""),
    });
  }

  static AbandonCartsDetail() {
    return Joi.object({
      properties_cart_id: Joi.string().allow(""),

      context_traits_first_name: Joi.string().allow(""),

      context_traits_last_name: Joi.string().allow(""),

      context_traits_phone_number: Joi.string().allow(""),

      context_traits_email: Joi.string().allow(""),

      context_app_application_id: Joi.string().allow(""),

      properties_breakup_values_raw_total: Joi.string().allow(""),

      received_at: this.ReceivedAt(),
    });
  }

  static AbandonCartsList() {
    return Joi.object({
      items: Joi.array().items(this.AbandonCartsDetail()),

      cart_total: Joi.string().allow(""),

      page: this.Page(),
    });
  }

  static AbandonCartDetail() {
    return Joi.object({
      _id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      cart_value: Joi.string().allow(""),

      articles: Joi.array().items(Joi.any()),

      breakup: Joi.any(),

      address: Joi.any(),
    });
  }

  static ExportJobReq() {
    return Joi.object({
      marketplace_name: Joi.string().allow(""),

      start_time: Joi.string().allow(""),

      end_time: Joi.string().allow(""),

      event_type: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),
    });
  }

  static ExportJobRes() {
    return Joi.object({
      status: Joi.string().allow(""),

      job_id: Joi.string().allow(""),
    });
  }

  static ExportJobStatusRes() {
    return Joi.object({
      status: Joi.string().allow(""),

      job_id: Joi.string().allow(""),

      download_url: Joi.string().allow(""),
    });
  }

  static GetLogsListReq() {
    return Joi.object({
      marketplace_name: Joi.string().allow(""),

      start_date: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      end_date: Joi.string().allow(""),
    });
  }

  static MkpLogsResp() {
    return Joi.object({
      start_time_iso: Joi.string().allow(""),

      end_time_iso: Joi.string().allow(""),

      event_type: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      count: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static GetLogsListRes() {
    return Joi.object({
      items: Joi.array().items(this.MkpLogsResp()),

      page: this.Page(),
    });
  }

  static SearchLogReq() {
    return Joi.object({
      marketplace_name: Joi.string().allow(""),

      start_date: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      end_date: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      identifier_value: Joi.string().allow(""),
    });
  }

  static LogInfo() {
    return Joi.object({
      _id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      event_type: Joi.string().allow(""),

      marketplace_name: Joi.string().allow(""),

      event: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      company_id: Joi.number(),

      brand_id: Joi.number(),

      store_code: Joi.string().allow(""),

      store_id: Joi.number(),

      item_id: Joi.number(),

      article_id: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),
    });
  }

  static SearchLogRes() {
    return Joi.object({
      items: Joi.array().items(this.LogInfo()),

      page: this.Page(),
    });
  }

  static ValidityObject() {
    return Joi.object({
      start: Joi.string().allow("").required(),

      end: Joi.string().allow("").required(),
    });
  }

  static CreateUpdateDiscount() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      is_active: Joi.boolean().required(),

      app_ids: Joi.array().items(Joi.string().allow("")).required(),

      extension_ids: Joi.array().items(Joi.string().allow("")).required(),

      job_type: Joi.string().allow("").required(),

      discount_type: Joi.string().allow("").required(),

      discount_level: Joi.string().allow("").required(),

      value: Joi.number(),

      file_path: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()),

      validity: this.ValidityObject().required(),
    });
  }

  static DiscountJob() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      is_active: Joi.boolean().required(),

      app_ids: Joi.array().items(Joi.string().allow("")),

      job_type: Joi.string().allow(""),

      discount_type: Joi.string().allow(""),

      discount_level: Joi.string().allow(""),

      value: Joi.number(),

      file_path: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()),

      validity: this.ValidityObject().required(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      created_by: this.UserDetails().required(),

      modified_by: this.UserDetails().required(),

      meta: Joi.any(),
    });
  }

  static ListOrCalender() {
    return Joi.object({
      items: Joi.array().items(this.DiscountJob()).required(),

      page: this.Page().required(),
    });
  }

  static DiscountItems() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      brand_uid: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      discount_type: Joi.string().allow("").required(),

      value: Joi.number().required(),
    });
  }

  static BulkDiscount() {
    return Joi.object({
      company_id: Joi.number().required(),

      items: Joi.array().items(this.DiscountItems()).required(),
    });
  }

  static FileJobResponse() {
    return Joi.object({
      stage: Joi.string().allow("").required(),

      total: Joi.number().required(),

      failed: Joi.number().required(),

      company_id: Joi.number().required(),

      body: Joi.any(),

      type: Joi.string().allow("").required(),

      file_type: Joi.string().allow("").required(),
    });
  }

  static DownloadFileJob() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static CancelJobResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static UserDetails() {
    return Joi.object({
      username: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),
    });
  }

  static BadRequestObject() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static AddProxyReq() {
    return Joi.object({
      attached_path: Joi.string().allow(""),

      proxy_url: Joi.string().allow(""),
    });
  }

  static AddProxyResponse() {
    return Joi.object({
      _id: Joi.string().allow(""),

      attached_path: Joi.string().allow(""),

      proxy_url: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      application_id: Joi.string().allow(""),

      extension_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      modified_at: Joi.string().allow(""),
    });
  }

  static APIError() {
    return Joi.object({
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      info: Joi.string().allow(""),

      request_id: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static RemoveProxyResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      data: Joi.any(),
    });
  }

  static EventConfig() {
    return Joi.object({
      id: Joi.number(),

      event_name: Joi.string().allow(""),

      event_type: Joi.string().allow(""),

      event_category: Joi.string().allow(""),

      version: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
    });
  }

  static EventConfigList() {
    return Joi.object({
      items: Joi.array().items(this.EventConfig()),

      page: this.Page(),
    });
  }

  static EventConfigResponse() {
    return Joi.object({
      event_configs: Joi.array().items(this.EventConfig()),
    });
  }

  static SubscriberConfigList() {
    return Joi.object({
      items: Joi.array().items(this.SubscriberResponse()),

      page: this.Page(),
    });
  }

  static EventProcessedStatus() {
    return Joi.object({
      id: Joi.number(),

      subscriber_id: Joi.string().allow(""),

      attempt: Joi.number(),

      response_code: Joi.string().allow(""),

      response_message: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      processed_on: Joi.string().allow(""),

      status: Joi.boolean(),
    });
  }

  static EventPayload() {
    return Joi.object({
      id: Joi.number(),

      event_trace_id: Joi.string().allow(""),

      message_id: Joi.string().allow(""),

      event_name: Joi.string().allow(""),

      event_type: Joi.string().allow(""),

      version: Joi.string().allow(""),

      status: Joi.boolean(),
    });
  }

  static SubscriberConfig() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),

      webhook_url: Joi.string().allow(""),

      association: this.Association(),

      custom_headers: Joi.any(),

      status: this.SubscriberStatus(),

      email_id: Joi.string().allow(""),

      auth_meta: this.AuthMeta(),

      event_id: Joi.array().items(Joi.number()),
    });
  }

  static SubscriberResponse() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),

      webhook_url: Joi.string().allow(""),

      association: this.Association(),

      custom_headers: Joi.any(),

      email_id: Joi.string().allow(""),

      status: this.SubscriberStatus(),

      auth_meta: this.AuthMeta(),

      created_on: Joi.string().allow(""),

      updated_on: Joi.string().allow(""),

      event_configs: Joi.array().items(this.EventConfig()),
    });
  }

  static SubscriberEvent() {
    return Joi.object({
      id: Joi.number(),

      subscriber_id: Joi.number(),

      event_id: Joi.number(),

      created_date: Joi.string().allow(""),
    });
  }

  static AuthMeta() {
    return Joi.object({
      type: Joi.string().allow(""),

      secret: Joi.string().allow(""),
    });
  }

  static Association() {
    return Joi.object({
      company_id: Joi.number(),

      application_id: Joi.array().items(Joi.string().allow("")),

      extension_id: Joi.string().allow(""),

      criteria: Joi.string().allow(""),
    });
  }

  static EventConfigBase() {
    return Joi.object({
      event_name: Joi.string().allow(""),

      event_type: Joi.string().allow(""),

      event_category: Joi.string().allow(""),

      version: Joi.string().allow(""),
    });
  }

  /*
        Enum: SubscriberStatus
        Used By: Webhook
    */
  static SubscriberStatus() {
    return Joi.string().valid(
      "active",

      "inactive",

      "blocked"
    );
  }

  static RequestBodyAuditLog() {
    return Joi.object({
      log_meta: this.LogMetaObj().required(),

      log_payload: Joi.any().required(),
    });
  }

  static CreateLogResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      internal_message: Joi.string().allow(""),
    });
  }

  static LogMetaObj() {
    return Joi.object({
      modifier: Joi.any(),

      application: Joi.string().allow(""),

      entity: this.EntityObject(),

      device_info: Joi.any(),

      location: Joi.any(),
    });
  }

  static EntityObject() {
    return Joi.object({
      id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      action: Joi.string().allow(""),
    });
  }

  static LogSchemaResponse() {
    return Joi.object({
      docs: Joi.array().items(this.LogDocs()),
    });
  }

  static LogDocs() {
    return Joi.object({
      entity: this.EntityObj(),

      modifier: this.Modifier(),

      device_info: this.DeviceInfo(),

      location: this.Location(),

      _id: Joi.string().allow(""),

      company: Joi.string().allow(""),

      application: Joi.string().allow(""),

      sessions: Joi.string().allow(""),

      date: Joi.string().allow(""),

      logs: Joi.any(),
    });
  }

  static EntityObj() {
    return Joi.object({
      id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      action: Joi.string().allow(""),

      entity_details: Joi.any(),
    });
  }

  static Modifier() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      as_administrator: Joi.boolean(),

      user_details: Joi.any(),
    });
  }

  static DeviceInfo() {
    return Joi.object({
      user_agent: Joi.string().allow(""),

      extra_meta: Joi.any(),
    });
  }

  static Location() {
    return Joi.object({
      extra_meta: Joi.any(),
    });
  }

  static EntityTypesResponse() {
    return Joi.object({
      items: Joi.array().items(this.EntityTypeObj()),
    });
  }

  static EntityTypeObj() {
    return Joi.object({
      entity_value: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
    });
  }
}

class LeadValidator {
  static getTickets() {
    return Joi.object({
      items: Joi.boolean(),
      filters: Joi.boolean(),
      q: Joi.string().allow(""),
      status: Joi.string().allow(""),
      priority: Validator.PriorityEnum(),
      category: Joi.string().allow(""),
    }).required();
  }

  static getTicket() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static editTicket() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.EditTicketPayload().required(),
    }).required();
  }

  static createHistory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.TicketHistoryPayload().required(),
    }).required();
  }

  static getTicketHistory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getCustomForm() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static editCustomForm() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      body: Validator.EditCustomFormPayload().required(),
    }).required();
  }

  static getCustomForms() {
    return Joi.object({}).required();
  }

  static createCustomForm() {
    return Joi.object({
      body: Validator.CreateCustomFormPayload().required(),
    }).required();
  }

  static getTokenForVideoRoom() {
    return Joi.object({
      uniqueName: Joi.string().allow("").required(),
    }).required();
  }

  static getVideoParticipants() {
    return Joi.object({
      uniqueName: Joi.string().allow("").required(),
    }).required();
  }

  static openVideoRoom() {
    return Joi.object({
      body: Validator.CreateVideoRoomPayload().required(),
    }).required();
  }

  static closeVideoRoom() {
    return Joi.object({
      uniqueName: Joi.string().allow("").required(),
    }).required();
  }
}

class FeedbackValidator {
  static getAttributes() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getCustomerReviews() {
    return Joi.object({
      id: Joi.string().allow(""),
      entityId: Joi.string().allow(""),
      entityType: Joi.string().allow(""),
      userId: Joi.string().allow(""),
      media: Joi.string().allow(""),
      rating: Joi.array().items(Joi.number()),
      attributeRating: Joi.array().items(Joi.string().allow("")),
      facets: Joi.boolean(),
      sort: Joi.string().allow(""),
      next: Joi.string().allow(""),
      start: Joi.string().allow(""),
      limit: Joi.string().allow(""),
      count: Joi.string().allow(""),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }

  static updateApprove() {
    return Joi.object({
      reviewId: Joi.string().allow("").required(),
      body: Validator.ApproveRequest().required(),
    }).required();
  }

  static getHistory() {
    return Joi.object({
      reviewId: Joi.string().allow("").required(),
    }).required();
  }

  static getApplicationTemplates() {
    return Joi.object({
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }

  static createTemplate() {
    return Joi.object({
      body: Validator.TemplateRequestList().required(),
    }).required();
  }

  static getTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateTemplate() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.UpdateTemplateRequest().required(),
    }).required();
  }

  static updateTemplateStatus() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.UpdateTemplateStatusRequest().required(),
    }).required();
  }
}

class ThemeValidator {
  static getAllPages() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static createPage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      body: Validator.AvailablePageSchema().required(),
    }).required();
  }

  static updateMultiplePages() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      body: Validator.AllAvailablePageSchema().required(),
    }).required();
  }

  static getPage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      pageValue: Joi.string().allow("").required(),
    }).required();
  }

  static updatePage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      pageValue: Joi.string().allow("").required(),
      body: Validator.AvailablePageSchema().required(),
    }).required();
  }

  static deletePage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      pageValue: Joi.string().allow("").required(),
    }).required();
  }

  static getThemeLibrary() {
    return Joi.object({
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  }

  static addToThemeLibrary() {
    return Joi.object({
      body: Validator.AddThemeRequestSchema().required(),
    }).required();
  }

  static applyTheme() {
    return Joi.object({
      body: Validator.AddThemeRequestSchema().required(),
    }).required();
  }

  static isUpgradable() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static upgradeTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static getPublicThemes() {
    return Joi.object({
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  }

  static createTheme() {
    return Joi.object({
      body: Validator.ThemesSchema().required(),
    }).required();
  }

  static getAppliedTheme() {
    return Joi.object({}).required();
  }

  static getFonts() {
    return Joi.object({}).required();
  }

  static getThemeById() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static updateTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      body: Validator.ThemesSchema().required(),
    }).required();
  }

  static deleteTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static getThemeForPreview() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static publishTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static unpublishTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static archiveTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static unarchiveTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static getThemeLastModified() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }
}

class UserValidator {
  static getCustomers() {
    return Joi.object({
      q: Joi.any(),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  }

  static searchUsers() {
    return Joi.object({
      q: Joi.string().allow(""),
    }).required();
  }

  static createUser() {
    return Joi.object({
      body: Validator.CreateUserRequestSchema().required(),
    }).required();
  }

  static blockOrUnblockUsers() {
    return Joi.object({
      body: Validator.BlockUserRequestSchema().required(),
    }).required();
  }

  static archiveUser() {
    return Joi.object({
      body: Validator.ArchiveUserRequestSchema().required(),
    }).required();
  }

  static unDeleteUser() {
    return Joi.object({
      body: Validator.UnDeleteUserRequestSchema().required(),
    }).required();
  }

  static updateUser() {
    return Joi.object({
      userId: Joi.string().allow("").required(),
      body: Validator.UpdateUserRequestSchema().required(),
    }).required();
  }

  static createUserSession() {
    return Joi.object({
      body: Validator.CreateUserSessionRequestSchema().required(),
    }).required();
  }

  static getActiveSessions() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static deleteActiveSessions() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getPlatformConfig() {
    return Joi.object({}).required();
  }

  static updatePlatformConfig() {
    return Joi.object({
      body: Validator.PlatformSchema().required(),
    }).required();
  }
}

class ContentValidator {
  static getAnnouncementsList() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static createAnnouncement() {
    return Joi.object({
      body: Validator.AdminAnnouncementSchema().required(),
    }).required();
  }

  static getAnnouncementById() {
    return Joi.object({
      announcementId: Joi.string().allow("").required(),
    }).required();
  }

  static updateAnnouncement() {
    return Joi.object({
      announcementId: Joi.string().allow("").required(),
      body: Validator.AdminAnnouncementSchema().required(),
    }).required();
  }

  static updateAnnouncementSchedule() {
    return Joi.object({
      announcementId: Joi.string().allow("").required(),
      body: Validator.ScheduleSchema().required(),
    }).required();
  }

  static deleteAnnouncement() {
    return Joi.object({
      announcementId: Joi.string().allow("").required(),
    }).required();
  }

  static createBlog() {
    return Joi.object({
      body: Validator.BlogRequest().required(),
    }).required();
  }

  static getBlogs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static updateBlog() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.BlogRequest().required(),
    }).required();
  }

  static deleteBlog() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getComponentById() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static addDataLoader() {
    return Joi.object({
      body: Validator.DataLoaderSchema().required(),
    }).required();
  }

  static getDataLoaders() {
    return Joi.object({}).required();
  }

  static deleteDataLoader() {
    return Joi.object({
      dataLoaderId: Joi.string().allow("").required(),
    }).required();
  }

  static editDataLoader() {
    return Joi.object({
      dataLoaderId: Joi.string().allow("").required(),
      body: Validator.DataLoaderSchema().required(),
    }).required();
  }

  static selectDataLoader() {
    return Joi.object({
      dataLoaderId: Joi.string().allow("").required(),
    }).required();
  }

  static resetDataLoader() {
    return Joi.object({
      service: Joi.string().allow("").required(),
      operationId: Joi.string().allow("").required(),
    }).required();
  }

  static getFaqCategories() {
    return Joi.object({}).required();
  }

  static getFaqCategoryBySlugOrId() {
    return Joi.object({
      idOrSlug: Joi.string().allow("").required(),
    }).required();
  }

  static createFaqCategory() {
    return Joi.object({
      body: Validator.CreateFaqCategoryRequestSchema().required(),
    }).required();
  }

  static updateFaqCategory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.UpdateFaqCategoryRequestSchema().required(),
    }).required();
  }

  static deleteFaqCategory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getFaqsByCategoryIdOrSlug() {
    return Joi.object({
      idOrSlug: Joi.string().allow("").required(),
    }).required();
  }

  static addFaq() {
    return Joi.object({
      categoryId: Joi.string().allow("").required(),
      body: Validator.CreateFaqSchema().required(),
    }).required();
  }

  static updateFaq() {
    return Joi.object({
      categoryId: Joi.string().allow("").required(),
      faqId: Joi.string().allow("").required(),
      body: Validator.CreateFaqSchema().required(),
    }).required();
  }

  static deleteFaq() {
    return Joi.object({
      categoryId: Joi.string().allow("").required(),
      faqId: Joi.string().allow("").required(),
    }).required();
  }

  static getFaqByIdOrSlug() {
    return Joi.object({
      idOrSlug: Joi.string().allow("").required(),
    }).required();
  }

  static getLandingPages() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static createLandingPage() {
    return Joi.object({
      body: Validator.LandingPageSchema().required(),
    }).required();
  }

  static updateLandingPage() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.LandingPageSchema().required(),
    }).required();
  }

  static deleteLandingPage() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getLegalInformation() {
    return Joi.object({}).required();
  }

  static updateLegalInformation() {
    return Joi.object({
      body: Validator.ApplicationLegal().required(),
    }).required();
  }

  static getNavigations() {
    return Joi.object({
      devicePlatform: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static createNavigation() {
    return Joi.object({
      body: Validator.NavigationRequest().required(),
    }).required();
  }

  static getDefaultNavigations() {
    return Joi.object({}).required();
  }

  static getNavigationBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      devicePlatform: Joi.string().allow("").required(),
    }).required();
  }

  static updateNavigation() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.NavigationRequest().required(),
    }).required();
  }

  static deleteNavigation() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getPageMeta() {
    return Joi.object({}).required();
  }

  static getPageSpec() {
    return Joi.object({}).required();
  }

  static updatePagePreview() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      body: Validator.PagePublishRequest().required(),
    }).required();
  }

  static deletePage() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static addPathRedirectionRules() {
    return Joi.object({
      body: Validator.PathMappingSchema().required(),
    }).required();
  }

  static getPathRedirectionRules() {
    return Joi.object({
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  }

  static getPathRedirectionRule() {
    return Joi.object({
      pathId: Joi.string().allow("").required(),
    }).required();
  }

  static updatePathRedirectionRules() {
    return Joi.object({
      pathId: Joi.string().allow("").required(),
      body: Validator.PathMappingSchema().required(),
    }).required();
  }

  static deletePathRedirectionRules() {
    return Joi.object({
      pathId: Joi.string().allow("").required(),
    }).required();
  }

  static getSEOConfiguration() {
    return Joi.object({}).required();
  }

  static updateSEOConfiguration() {
    return Joi.object({
      body: Validator.SeoComponent().required(),
    }).required();
  }

  static getSlideshows() {
    return Joi.object({
      devicePlatform: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static createSlideshow() {
    return Joi.object({
      body: Validator.SlideshowRequest().required(),
    }).required();
  }

  static getSlideshowBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      devicePlatform: Joi.string().allow("").required(),
    }).required();
  }

  static updateSlideshow() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.SlideshowRequest().required(),
    }).required();
  }

  static deleteSlideshow() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getSupportInformation() {
    return Joi.object({}).required();
  }

  static updateSupportInformation() {
    return Joi.object({
      body: Validator.Support().required(),
    }).required();
  }

  static updateInjectableTag() {
    return Joi.object({
      body: Validator.CreateTagRequestSchema().required(),
    }).required();
  }

  static deleteAllInjectableTags() {
    return Joi.object({}).required();
  }

  static getInjectableTags() {
    return Joi.object({}).required();
  }

  static addInjectableTag() {
    return Joi.object({
      body: Validator.CreateTagRequestSchema().required(),
    }).required();
  }

  static removeInjectableTag() {
    return Joi.object({
      body: Validator.RemoveHandpickedSchema().required(),
    }).required();
  }

  static editInjectableTag() {
    return Joi.object({
      tagId: Joi.string().allow("").required(),
      body: Validator.UpdateHandpickedSchema().required(),
    }).required();
  }

  static createPage() {
    return Joi.object({
      body: Validator.PageRequest().required(),
    }).required();
  }

  static getPages() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static updatePage() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.PageSchema().required(),
    }).required();
  }

  static getPageBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }
}

class CommunicationValidator {
  static getCampaigns() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static createCampaign() {
    return Joi.object({
      body: Validator.CampaignReq().required(),
    }).required();
  }

  static getCampaignById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateCampaignById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.CampaignReq().required(),
    }).required();
  }

  static getStatsOfCampaignById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getAudiences() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static createAudience() {
    return Joi.object({
      body: Validator.AudienceReq().required(),
    }).required();
  }

  static getBigqueryHeaders() {
    return Joi.object({
      body: Validator.BigqueryHeadersReq().required(),
    }).required();
  }

  static getAudienceById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateAudienceById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.AudienceReq().required(),
    }).required();
  }

  static getNSampleRecordsFromCsv() {
    return Joi.object({
      body: Validator.GetNRecordsCsvReq().required(),
    }).required();
  }

  static getEmailProviders() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static createEmailProvider() {
    return Joi.object({
      body: Validator.EmailProviderReq().required(),
    }).required();
  }

  static getEmailProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateEmailProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.EmailProviderReq().required(),
    }).required();
  }

  static getEmailTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static createEmailTemplate() {
    return Joi.object({
      body: Validator.EmailTemplateReq().required(),
    }).required();
  }

  static getSystemEmailTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static getEmailTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateEmailTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.EmailTemplateReq().required(),
    }).required();
  }

  static deleteEmailTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static sendCommunicationSynchronously() {
    return Joi.object({
      body: Validator.EngineRequest().required(),
    }).required();
  }

  static sendCommunicationAsynchronously() {
    return Joi.object({
      body: Validator.EngineRequest().required(),
    }).required();
  }

  static getEventSubscriptions() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      populate: Joi.string().allow(""),
    }).required();
  }

  static getJobs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static triggerCampaignJob() {
    return Joi.object({
      body: Validator.TriggerJobRequest().required(),
    }).required();
  }

  static getJobLogs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static getCommunicationLogs() {
    return Joi.object({
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
      sort: Joi.any(),
      query: Joi.any(),
    }).required();
  }

  static sendOtp() {
    return Joi.object({
      body: Validator.SendOtpCommsReq().required(),
    }).required();
  }

  static verfiyOtp() {
    return Joi.object({
      body: Validator.VerifyOtpCommsReq().required(),
    }).required();
  }

  static getSmsProviders() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static createSmsProvider() {
    return Joi.object({
      body: Validator.SmsProviderReq().required(),
    }).required();
  }

  static getSmsProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateSmsProviderById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.SmsProviderReq().required(),
    }).required();
  }

  static getSmsTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  static createSmsTemplate() {
    return Joi.object({
      body: Validator.SmsTemplateReq().required(),
    }).required();
  }

  static getSmsTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateSmsTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.SmsTemplateReq().required(),
    }).required();
  }

  static deleteSmsTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getSystemSystemTemplates() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.any(),
    }).required();
  }
}

class PaymentValidator {
  static getBrandPaymentGatewayConfig() {
    return Joi.object({}).required();
  }

  static saveBrandPaymentGatewayConfig() {
    return Joi.object({
      body: Validator.PaymentGatewayConfigRequest().required(),
    }).required();
  }

  static updateBrandPaymentGatewayConfig() {
    return Joi.object({
      body: Validator.PaymentGatewayConfigRequest().required(),
    }).required();
  }

  static getPaymentModeRoutes() {
    return Joi.object({
      refresh: Joi.boolean().required(),
      requestType: Joi.string().allow("").required(),
    }).required();
  }

  static getBankAccountDetailsOpenAPI() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      requestHash: Joi.string().allow(""),
    }).required();
  }

  static addRefundBankAccountUsingOTP() {
    return Joi.object({
      body: Validator.AddBeneficiaryDetailsOTPRequest().required(),
    }).required();
  }

  static getUserOrderBeneficiaries() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static getUserBeneficiaries() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static confirmPayment() {
    return Joi.object({
      body: Validator.PaymentConfirmationRequest().required(),
    }).required();
  }

  static getPlatformPaymentConfig() {
    return Joi.object({}).required();
  }

  static updatePlatformPaymentConfig() {
    return Joi.object({
      body: Validator.UpdatePlatformPaymentConfig().required(),
    }).required();
  }

  static getUserCODlimitRoutes() {
    return Joi.object({
      merchantUserId: Joi.string().allow("").required(),
      mobileNo: Joi.string().allow("").required(),
    }).required();
  }

  static setUserCODlimitRoutes() {
    return Joi.object({
      body: Validator.SetCODForUserRequest().required(),
    }).required();
  }

  static edcAggregatorsAndModelList() {
    return Joi.object({}).required();
  }

  static edcDeviceStats() {
    return Joi.object({}).required();
  }

  static edcDevice() {
    return Joi.object({
      terminalSerialNo: Joi.string().allow("").required(),
    }).required();
  }

  static edcDevice() {
    return Joi.object({
      body: Validator.EdcAddRequest().required(),
    }).required();
  }

  static edcDevice() {
    return Joi.object({
      body: Validator.EdcUpdateRequest().required(),
    }).required();
  }

  static edcDeviceList() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      isActive: Joi.boolean(),
      storeId: Joi.number(),
      deviceTag: Joi.string().allow(""),
    }).required();
  }

  static getPosPaymentModeRoutes() {
    return Joi.object({
      amount: Joi.number().required(),
      cartId: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      checkoutMode: Joi.string().allow("").required(),
      refresh: Joi.boolean(),
      cardReference: Joi.string().allow(""),
      orderType: Joi.string().allow("").required(),
      userDetails: Joi.string().allow(""),
    }).required();
  }

  static initialisePayment() {
    return Joi.object({
      body: Validator.PaymentInitializationRequest().required(),
    }).required();
  }

  static checkAndUpdatePaymentStatus() {
    return Joi.object({
      body: Validator.PaymentStatusUpdateRequest().required(),
    }).required();
  }

  static resendOrCancelPayment() {
    return Joi.object({
      body: Validator.ResendOrCancelPaymentRequest().required(),
    }).required();
  }
}

class OrderValidator {
  static getApplicationShipments() {
    return Joi.object({
      lane: Joi.string().allow(""),
      searchType: Joi.string().allow(""),
      searchId: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      orderingCompanyId: Joi.string().allow(""),
      stores: Joi.string().allow(""),
      salesChannel: Joi.string().allow(""),
      requestByExt: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      customerId: Joi.string().allow(""),
      isPrioritySort: Joi.boolean(),
    }).required();
  }

  static getAppOrderShipmentDetails() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static trackPlatformShipment() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }
}

class CatalogValidator {
  static getSearchKeywords() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static deleteSearchKeywords() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateSearchKeywords() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.CreateSearchKeyword().required(),
    }).required();
  }

  static getAllSearchKeyword() {
    return Joi.object({}).required();
  }

  static createCustomKeyword() {
    return Joi.object({
      body: Validator.CreateSearchKeyword().required(),
    }).required();
  }

  static getAutocompleteKeywordDetail() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static deleteAutocompleteKeyword() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateAutocompleteKeyword() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.CreateAutocompleteKeyword().required(),
    }).required();
  }

  static getAutocompleteConfig() {
    return Joi.object({}).required();
  }

  static createCustomAutocompleteRule() {
    return Joi.object({
      body: Validator.CreateAutocompleteKeyword().required(),
    }).required();
  }

  static getAppProduct() {
    return Joi.object({
      itemId: Joi.string().allow("").required(),
    }).required();
  }

  static updateAppProduct() {
    return Joi.object({
      itemId: Joi.string().allow("").required(),
      body: Validator.ApplicationItemMeta().required(),
    }).required();
  }

  static getConfigurationMetadata() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      templateSlug: Joi.string().allow(""),
    }).required();
  }

  static getGroupConfigurations() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      search: Joi.string().allow(""),
      templateSlug: Joi.string().allow(""),
    }).required();
  }

  static createGroupConfiguration() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      body: Validator.AppConfigurationDetail().required(),
    }).required();
  }

  static deleteGroupConfiguration() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      groupSlug: Joi.string().allow("").required(),
    }).required();
  }

  static updateGroupConfiguration() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      groupSlug: Joi.string().allow("").required(),
      body: Validator.AppConfigurationDetail().required(),
    }).required();
  }

  static getListingConfigurations() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      search: Joi.string().allow(""),
    }).required();
  }

  static createListingConfiguration() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      body: Validator.AppConfigurationsSort().required(),
    }).required();
  }

  static deleteListingConfiguration() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      configId: Joi.string().allow("").required(),
    }).required();
  }

  static updateListingConfiguration() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      configId: Joi.string().allow("").required(),
      body: Validator.AppConfigurationsSort().required(),
    }).required();
  }

  static updateAllowSingle() {
    return Joi.object({
      body: Validator.AllowSingleRequest().required(),
    }).required();
  }

  static updateDefaultSort() {
    return Joi.object({
      body: Validator.DefaultKeyRequest().required(),
    }).required();
  }

  static getCatalogConfiguration() {
    return Joi.object({}).required();
  }

  static getConfigurations() {
    return Joi.object({}).required();
  }

  static createConfigurationProductListing() {
    return Joi.object({
      body: Validator.AppConfiguration().required(),
    }).required();
  }

  static getConfigurationByType() {
    return Joi.object({
      type: Joi.string().allow("").required(),
    }).required();
  }

  static createConfigurationByType() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      body: Validator.AppConfiguration().required(),
    }).required();
  }

  static getQueryFilters() {
    return Joi.object({}).required();
  }

  static getAllCollections() {
    return Joi.object({
      q: Joi.string().allow(""),
      scheduleStatus: Joi.string().allow(""),
      type: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      isActive: Joi.boolean(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static createCollection() {
    return Joi.object({
      body: Validator.CreateCollection().required(),
    }).required();
  }

  static getCollectionDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static deleteCollection() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateCollection() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.UpdateCollection().required(),
    }).required();
  }

  static getCollectionItems() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      sortOn: Joi.string().allow(""),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }

  static addCollectionItems() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.CollectionItemRequest().required(),
    }).required();
  }

  static getCatalogInsights() {
    return Joi.object({
      brand: Joi.string().allow(""),
    }).required();
  }

  static getDiscountedInventoryBySizeIdentifier() {
    return Joi.object({
      itemId: Joi.number().required(),
      sizeIdentifier: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      locationIds: Joi.array().items(Joi.number()),
    }).required();
  }

  static getApplicationBrands() {
    return Joi.object({
      department: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      brandId: Joi.array().items(Joi.number()),
    }).required();
  }

  static getDepartments() {
    return Joi.object({}).required();
  }

  static getCategories() {
    return Joi.object({
      department: Joi.string().allow(""),
    }).required();
  }

  static getAppicationProducts() {
    return Joi.object({
      q: Joi.string().allow(""),
      f: Joi.string().allow(""),
      c: Joi.string().allow(""),
      filters: Joi.boolean(),
      isDependent: Joi.boolean(),
      sortOn: Joi.string().allow(""),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
      pageType: Joi.string().allow(""),
      itemIds: Joi.array().items(Joi.number()),
    }).required();
  }

  static getProductDetailBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getAppProducts() {
    return Joi.object({
      brandIds: Joi.array().items(Joi.number()),
      categoryIds: Joi.array().items(Joi.number()),
      departmentIds: Joi.array().items(Joi.number()),
      tags: Joi.array().items(Joi.string().allow("")),
      isDependent: Joi.boolean(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  static getAppInventory() {
    return Joi.object({
      itemIds: Joi.array().items(Joi.number()),
      storeIds: Joi.array().items(Joi.number()),
      brandIds: Joi.array().items(Joi.number()),
      sellerIdentifiers: Joi.array().items(Joi.string().allow("")),
      timestamp: Joi.string().allow(""),
      pageSize: Joi.number(),
      pageId: Joi.string().allow(""),
    }).required();
  }

  static getAppLocations() {
    return Joi.object({
      storeType: Joi.string().allow(""),
      uid: Joi.array().items(Joi.number()),
      q: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getApplicationBrandListing() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  static updateAppBrand() {
    return Joi.object({
      brandUid: Joi.string().allow("").required(),
      body: Validator.ApplicationBrandJson().required(),
    }).required();
  }

  static getApplicationCategoryListing() {
    return Joi.object({
      departmentId: Joi.number(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  static updateAppCategory() {
    return Joi.object({
      categoryUid: Joi.string().allow("").required(),
      body: Validator.ApplicationCategoryJson().required(),
    }).required();
  }

  static getApplicationDepartmentListing() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  static updateAppDepartment() {
    return Joi.object({
      departmentUid: Joi.string().allow("").required(),
      body: Validator.ApplicationDepartmentJson().required(),
    }).required();
  }

  static updateAppLocation() {
    return Joi.object({
      storeUid: Joi.string().allow("").required(),
      body: Validator.ApplicationStoreJson().required(),
    }).required();
  }
}

class FileStorageValidator {
  static appStartUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      body: Validator.StartRequest().required(),
    }).required();
  }

  static appCompleteUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      body: Validator.StartResponse().required(),
    }).required();
  }

  static appCopyFiles() {
    return Joi.object({
      sync: Joi.boolean(),

      body: Validator.BulkRequest().required(),
    }).required();
  }

  static browse() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      pageNo: Joi.number(),
    }).required();
  }
}

class ShareValidator {
  static createShortLink() {
    return Joi.object({
      body: Validator.ShortLinkReq().required(),
    }).required();
  }

  static getShortLinks() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      createdBy: Joi.string().allow(""),
      active: Joi.string().allow(""),
      q: Joi.string().allow(""),
    }).required();
  }

  static getShortLinkByHash() {
    return Joi.object({
      hash: Joi.string().allow("").required(),
    }).required();
  }

  static updateShortLinkById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.ShortLinkReq().required(),
    }).required();
  }
}

class ConfigurationValidator {
  static getBuildConfig() {
    return Joi.object({
      platformType: Joi.string().allow("").required(),
    }).required();
  }

  static updateBuildConfig() {
    return Joi.object({
      platformType: Joi.string().allow("").required(),
      body: Validator.MobileAppConfigRequest().required(),
    }).required();
  }

  static getPreviousVersions() {
    return Joi.object({
      platformType: Joi.string().allow("").required(),
    }).required();
  }

  static getAppFeatures() {
    return Joi.object({}).required();
  }

  static updateAppFeatures() {
    return Joi.object({
      body: Validator.AppFeatureRequest().required(),
    }).required();
  }

  static getAppBasicDetails() {
    return Joi.object({}).required();
  }

  static updateAppBasicDetails() {
    return Joi.object({
      body: Validator.ApplicationDetail().required(),
    }).required();
  }

  static getAppContactInfo() {
    return Joi.object({}).required();
  }

  static updateAppContactInfo() {
    return Joi.object({
      body: Validator.ApplicationInformation().required(),
    }).required();
  }

  static getAppApiTokens() {
    return Joi.object({}).required();
  }

  static updateAppApiTokens() {
    return Joi.object({
      body: Validator.TokenResponse().required(),
    }).required();
  }

  static getAppCompanies() {
    return Joi.object({
      uid: Joi.number(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getAppStores() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getInventoryConfig() {
    return Joi.object({}).required();
  }

  static updateInventoryConfig() {
    return Joi.object({
      body: Validator.ApplicationInventory().required(),
    }).required();
  }

  static partiallyUpdateInventoryConfig() {
    return Joi.object({
      body: Validator.AppInventoryPartialUpdate().required(),
    }).required();
  }

  static getAppCurrencyConfig() {
    return Joi.object({}).required();
  }

  static updateAppCurrencyConfig() {
    return Joi.object({
      body: Validator.AppSupportedCurrency().required(),
    }).required();
  }

  static getAppSupportedCurrency() {
    return Joi.object({}).required();
  }

  static getOrderingStoresByFilter() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      body: Validator.FilterOrderingStoreRequest().required(),
    }).required();
  }

  static updateOrderingStoreConfig() {
    return Joi.object({
      body: Validator.OrderingStoreConfig().required(),
    }).required();
  }

  static getStaffOrderingStores() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  static getDomains() {
    return Joi.object({}).required();
  }

  static addDomain() {
    return Joi.object({
      body: Validator.DomainAddRequest().required(),
    }).required();
  }

  static removeDomainById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static changeDomainType() {
    return Joi.object({
      body: Validator.UpdateDomainTypeRequest().required(),
    }).required();
  }

  static getDomainStatus() {
    return Joi.object({
      body: Validator.DomainStatusRequest().required(),
    }).required();
  }

  static getApplicationById() {
    return Joi.object({}).required();
  }
}

class CartValidator {
  static getCoupons() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      isArchived: Joi.boolean(),
      title: Joi.string().allow(""),
      isPublic: Joi.boolean(),
      isDisplay: Joi.boolean(),
      typeSlug: Joi.string().allow(""),
      code: Joi.string().allow(""),
    }).required();
  }

  static createCoupon() {
    return Joi.object({
      body: Validator.CouponAdd().required(),
    }).required();
  }

  static getCouponById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateCoupon() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.CouponUpdate().required(),
    }).required();
  }

  static updateCouponPartially() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.CouponPartialUpdate().required(),
    }).required();
  }

  static getPromotions() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      status: Joi.string().allow(""),
      promoGroup: Joi.string().allow(""),
      promotionType: Joi.string().allow(""),
      fpPanel: Joi.string().allow(""),
      promotionId: Joi.string().allow(""),
    }).required();
  }

  static createPromotion() {
    return Joi.object({
      body: Validator.PromotionAdd().required(),
    }).required();
  }

  static getPromotionById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updatePromotion() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.PromotionUpdate().required(),
    }).required();
  }

  static updatePromotionPartially() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.PromotionPartialUpdate().required(),
    }).required();
  }

  static getPromosCouponConfig() {
    return Joi.object({}).required();
  }

  static fetchAndvalidateCartItems() {
    return Joi.object({
      body: Validator.OpenapiCartDetailsRequest().required(),
    }).required();
  }

  static checkCartServiceability() {
    return Joi.object({
      body: Validator.OpenApiCartServiceabilityRequest().required(),
    }).required();
  }

  static checkoutCart() {
    return Joi.object({
      body: Validator.OpenApiPlatformCheckoutReq().required(),
    }).required();
  }

  static getAbandonedCart() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      anonymousCart: Joi.boolean(),
      lastId: Joi.string().allow(""),
      sortOn: Joi.string().allow(""),
    }).required();
  }

  static getAbandonedCartDetails() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
    }).required();
  }

  static addItems() {
    return Joi.object({
      cartId: Joi.string().allow("").required(),
      b: Joi.boolean(),
      body: Validator.AddCartRequest().required(),
    }).required();
  }

  static updateCart() {
    return Joi.object({
      cartId: Joi.string().allow("").required(),
      b: Joi.boolean(),
      body: Validator.UpdateCartRequest().required(),
    }).required();
  }

  static getCartShareLink() {
    return Joi.object({
      body: Validator.GetShareCartLinkRequest().required(),
    }).required();
  }

  static getCartSharedItems() {
    return Joi.object({
      token: Joi.string().allow("").required(),
    }).required();
  }

  static updateCartWithSharedItems() {
    return Joi.object({
      token: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
    }).required();
  }

  static getCartList() {
    return Joi.object({}).required();
  }

  static updateCartUser() {
    return Joi.object({
      id: Joi.string().allow(""),
      body: Validator.UpdateUserCartMapping().required(),
    }).required();
  }

  static getCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
      assignCardId: Joi.number(),
      buyNow: Joi.boolean(),
    }).required();
  }

  static addItems() {
    return Joi.object({
      i: Joi.boolean(),
      b: Joi.boolean(),
      buyNow: Joi.boolean(),
      id: Joi.string().allow(""),
      body: Validator.AddCartRequest().required(),
    }).required();
  }

  static updateCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
      buyNow: Joi.boolean(),
      body: Validator.UpdateCartRequest().required(),
    }).required();
  }

  static deleteCart() {
    return Joi.object({
      id: Joi.number(),
    }).required();
  }

  static getItemCount() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    }).required();
  }

  static getCoupons() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    }).required();
  }

  static applyCoupon() {
    return Joi.object({
      i: Joi.boolean(),
      b: Joi.boolean(),
      p: Joi.boolean(),
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: Validator.ApplyCouponRequest().required(),
    }).required();
  }

  static removeCoupon() {
    return Joi.object({
      uid: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    }).required();
  }

  static getAddresses() {
    return Joi.object({
      cartId: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      mobileNo: Joi.string().allow(""),
      checkoutMode: Joi.string().allow(""),
      tags: Joi.string().allow(""),
      isDefault: Joi.boolean(),
      userId: Joi.string().allow(""),
    }).required();
  }

  static addAddress() {
    return Joi.object({
      body: Validator.PlatformAddress().required(),
    }).required();
  }

  static getAddressById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      cartId: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      mobileNo: Joi.string().allow(""),
      checkoutMode: Joi.string().allow(""),
      tags: Joi.string().allow(""),
      isDefault: Joi.boolean(),
      userId: Joi.string().allow(""),
    }).required();
  }

  static updateAddress() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.PlatformAddress().required(),
    }).required();
  }

  static removeAddress() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      userId: Joi.string().allow(""),
    }).required();
  }

  static selectAddress() {
    return Joi.object({
      cartId: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      i: Joi.boolean(),
      b: Joi.boolean(),
      body: Validator.PlatformSelectCartAddressRequest().required(),
    }).required();
  }

  static getShipments() {
    return Joi.object({
      pickAtStoreUid: Joi.number(),
      orderingStoreId: Joi.number(),
      p: Joi.boolean(),
      id: Joi.string().allow(""),
      addressId: Joi.string().allow(""),
      areaCode: Joi.string().allow(""),
      orderType: Joi.string().allow(""),
    }).required();
  }

  static updateShipments() {
    return Joi.object({
      i: Joi.boolean(),
      p: Joi.boolean(),
      id: Joi.string().allow(""),
      addressId: Joi.string().allow(""),
      orderType: Joi.string().allow(""),
      body: Validator.UpdateCartShipmentRequest().required(),
    }).required();
  }

  static updateCartMeta() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: Validator.PlatformCartMetaRequest().required(),
    }).required();
  }

  static checkoutCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      body: Validator.PlatformCartCheckoutDetailRequest().required(),
    }).required();
  }

  static getAvailableDeliveryModes() {
    return Joi.object({
      areaCode: Joi.string().allow("").required(),
      id: Joi.string().allow(""),
    }).required();
  }

  static getStoreAddressByUid() {
    return Joi.object({
      storeUid: Joi.number().required(),
    }).required();
  }

  static selectPaymentMode() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: Validator.UpdateCartPaymentRequest().required(),
    }).required();
  }

  static validateCouponForPayment() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      addressId: Joi.string().allow(""),
      paymentMode: Joi.string().allow(""),
      paymentIdentifier: Joi.string().allow(""),
      aggregatorName: Joi.string().allow(""),
      merchantCode: Joi.string().allow(""),
    }).required();
  }
}

class RewardsValidator {
  static showGiveaways() {
    return Joi.object({
      pageId: Joi.string().allow("").required(),
      pageSize: Joi.number().required(),
    }).required();
  }

  static saveGiveAway() {
    return Joi.object({
      body: Validator.Giveaway().required(),
    }).required();
  }

  static getGiveawayById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateGiveAway() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.Giveaway().required(),
    }).required();
  }

  static getGiveawayAudienceStatus() {
    return Joi.object({
      audienceId: Joi.string().allow("").required(),
    }).required();
  }

  static showOffers() {
    return Joi.object({}).required();
  }

  static getOfferByName() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      cookie: Joi.string().allow("").required(),
    }).required();
  }

  static updateOfferByName() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      body: Validator.Offer().required(),
    }).required();
  }

  static updateUserStatus() {
    return Joi.object({
      userId: Joi.string().allow("").required(),

      body: Validator.AppUser().required(),
    }).required();
  }

  static user() {
    return Joi.object({
      userId: Joi.string().allow("").required(),
    }).required();
  }

  static getUserPointsHistory() {
    return Joi.object({
      userId: Joi.string().allow("").required(),

      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }

  static getRewardsConfiguration() {
    return Joi.object({}).required();
  }

  static setRewardsConfiguration() {
    return Joi.object({
      body: Validator.ConfigurationRequest().required(),
    }).required();
  }
}

class AnalyticsValidator {
  static getStatiscticsGroups() {
    return Joi.object({}).required();
  }

  static getStatiscticsGroupComponents() {
    return Joi.object({
      groupName: Joi.string().allow("").required(),
    }).required();
  }

  static getComponentStatsCSV() {
    return Joi.object({
      componentName: Joi.string().allow("").required(),
    }).required();
  }

  static getComponentStatsPDF() {
    return Joi.object({
      componentName: Joi.string().allow("").required(),
    }).required();
  }

  static getComponentStats() {
    return Joi.object({
      componentName: Joi.string().allow("").required(),
    }).required();
  }

  static getAbandonCartList() {
    return Joi.object({
      fromDate: Joi.string().allow("").required(),
      toDate: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getAbandonCartsCSV() {
    return Joi.object({
      fromDate: Joi.string().allow("").required(),
      toDate: Joi.string().allow("").required(),
    }).required();
  }

  static getAbandonCartDetail() {
    return Joi.object({
      cartId: Joi.string().allow("").required(),
    }).required();
  }
}

class PartnerValidator {
  static addProxyPath() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      body: Validator.AddProxyReq().required(),
    }).required();
  }

  static removeProxyPath() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      attachedPath: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = {
  LeadValidator,
  FeedbackValidator,
  ThemeValidator,
  UserValidator,
  ContentValidator,
  CommunicationValidator,
  PaymentValidator,
  OrderValidator,
  CatalogValidator,
  FileStorageValidator,
  ShareValidator,
  ConfigurationValidator,
  CartValidator,
  RewardsValidator,
  AnalyticsValidator,
  PartnerValidator,
};
