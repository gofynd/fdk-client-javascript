const Joi = require("joi");
class Validator {
  static ApplicationResponse() {
    return Joi.object({
      application: this.Application(),
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

      ticket: this.Ticket().required(),
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

      category: Joi.string().allow("").required(),

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

  static DateMeta() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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
      success: Joi.boolean().required(),

      aggregators: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow("").required(),

      created: Joi.boolean().required(),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      display_fields: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      merchant_salt: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      aggregator_name: this.PaymentGatewayConfig(),

      is_active: Joi.boolean().allow(null),
    });
  }

  static PaymentGatewayToBeReviewed() {
    return Joi.object({
      aggregator: Joi.array().items(Joi.string().allow("")).required(),

      success: Joi.boolean().required(),
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
      error: this.ErrorCodeAndDescription().required(),

      success: Joi.boolean().required(),
    });
  }

  static PaymentModeLogo() {
    return Joi.object({
      small: Joi.string().allow("").required(),

      large: Joi.string().allow("").required(),
    });
  }

  static IntentApp() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      outage: Joi.any().allow(null),

      package_name: Joi.string().allow("").allow(null),

      logos: this.PaymentModeLogo(),
    });
  }

  static IntentAppErrorList() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      card_reference: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      intent_app: Joi.array().items(this.IntentApp()),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      display_name: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      logo_url: this.PaymentModeLogo(),

      card_id: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      card_token: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      display_priority: Joi.number().allow(null),

      intent_app_error_dict_list: Joi.array().items(this.IntentAppErrorList()),

      code: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      outage: Joi.any().allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_name: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      list: Joi.array().items(this.PaymentModeList()),

      display_name: Joi.string().allow("").required(),

      anonymous_enable: Joi.boolean().allow(null),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      add_card_enabled: Joi.boolean().allow(null),

      save_card: Joi.boolean().allow(null),

      logo: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      logo_url: this.PaymentModeLogo(),

      display_priority: Joi.number().required(),
    });
  }

  static PaymentOptions() {
    return Joi.object({
      payment_option: Joi.array().items(this.RootPaymentMode()).required(),
    });
  }

  static PaymentOptionsResponse() {
    return Joi.object({
      payment_options: this.PaymentOptions().required(),

      success: Joi.boolean().required(),
    });
  }

  static PayoutsResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      customers: Joi.any().required(),

      unique_transfer_no: Joi.any().required(),

      payouts_aggregators: Joi.array().items(Joi.any()).required(),

      more_attributes: Joi.any().required(),

      transfer_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      account_no: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),

      account_holder: Joi.string().allow(""),

      branch_name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      bank_name: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      bank_details: this.PayoutBankDetails().required(),

      users: Joi.any().required(),

      unique_external_id: Joi.string().allow("").required(),

      transfer_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      payouts: Joi.any().required(),

      unique_transfer_no: Joi.string().allow("").required(),

      users: Joi.any().required(),

      payment_status: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      created: Joi.boolean().required(),

      transfer_type: Joi.string().allow("").required(),

      bank_details: Joi.any().required(),
    });
  }

  static UpdatePayoutResponse() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      success: Joi.boolean().required(),
    });
  }

  static UpdatePayoutRequest() {
    return Joi.object({
      unique_external_id: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static DeletePayoutResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static SubscriptionPaymentMethodResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      success: Joi.boolean().required(),
    });
  }

  static DeleteSubscriptionPaymentMethodResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static SubscriptionConfigResponse() {
    return Joi.object({
      config: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static SaveSubscriptionSetupIntentRequest() {
    return Joi.object({
      unique_external_id: Joi.string().allow("").required(),
    });
  }

  static SaveSubscriptionSetupIntentResponse() {
    return Joi.object({
      data: Joi.any().required(),

      success: Joi.boolean().required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      data: Joi.any(),

      is_verified_flag: Joi.boolean(),

      success: Joi.boolean().required(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      account_no: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

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
      branch_name: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      success: Joi.boolean(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      modified_on: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      beneficiary_id: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      address: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

      id: Joi.number().required(),

      transfer_mode: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      comment: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),
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

      order_id: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      current_status: Joi.string().allow(""),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      amount: Joi.number().required(),

      meta: this.MultiTenderPaymentMeta(),
    });
  }

  static PaymentConfirmationRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      payment_methods: Joi.array()
        .items(this.MultiTenderPaymentMethod())
        .required(),
    });
  }

  static PaymentConfirmationResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static Code() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static PaymentCode() {
    return Joi.object({
      codes: this.Code().required(),

      types: Joi.string().allow("").required(),

      networks: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static GetPaymentCode() {
    return Joi.object({
      method_code: this.PaymentCode().required(),
    });
  }

  static getPaymentCodeResponse() {
    return Joi.object({
      data: this.GetPaymentCode().required(),

      success: Joi.boolean().required(),
    });
  }

  static FilterInfoOption() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      text: Joi.string().allow("").required(),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      options: Joi.array().items(this.FilterInfoOption()),
    });
  }

  static Prices() {
    return Joi.object({
      refund_amount: Joi.number(),

      tax_collected_at_source: Joi.number(),

      promotion_effective_discount: Joi.number(),

      price_effective: Joi.number(),

      coupon_value: Joi.number(),

      discount: Joi.number(),

      cashback: Joi.number(),

      value_of_good: Joi.number(),

      price_marked: Joi.number(),

      refund_credit: Joi.number(),

      delivery_charge: Joi.number(),

      fynd_credits: Joi.number(),

      amount_paid: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      cashback_applied: Joi.number(),

      cod_charges: Joi.number(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      tax_collected_at_source: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      value_of_good: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      l3_category: Joi.number(),

      size: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      department_id: Joi.number(),

      can_return: Joi.boolean(),

      id: Joi.number(),

      name: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      images: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      image: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),
    });
  }

  static BagUnit() {
    return Joi.object({
      prices: this.Prices(),

      applied_promos: Joi.any(),

      group_id: Joi.string().allow(""),

      parent_promo_bags: Joi.any(),

      shipment_id: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      line_number: Joi.number().required(),

      status: Joi.any().required(),

      gst: this.GSTDetailsData(),

      item: this.PlatformItem(),

      total_shipment_bags: Joi.number().required(),

      ordering_channel: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),

      quantity: Joi.number().required(),

      identifier: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      uid: Joi.number(),

      first_name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      prices: this.Prices(),

      channel: Joi.any(),

      total_shipments_in_order: Joi.number().required(),

      total_bags_count: Joi.number().required(),

      shipment_created_at: Joi.number().required(),

      id: Joi.string().allow("").required(),

      payment_mode_info: this.PaymentModeInfo(),

      application: Joi.any(),

      shipment_status: this.ShipmentStatus(),

      fulfilling_store: this.ShipmentItemFulFillingStore(),

      payment_methods: Joi.any(),

      created_at: Joi.string().allow("").required(),

      bags: Joi.array().items(this.BagUnit()),

      user: this.UserDataInfo(),

      fulfilling_centre: Joi.string().allow("").required(),

      sla: Joi.any(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      filters: Joi.array().items(this.FiltersInfo()),

      page: Joi.any(),

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

  static UserDetailsData() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      awb_no: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      country: Joi.string().allow(""),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      pincode: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      id: Joi.number(),

      status: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      bag_list: Joi.array().items(Joi.number()),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      source: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_display_name: Joi.string().allow(""),

      bs_id: Joi.number().required(),

      app_facing: Joi.boolean(),

      is_active: Joi.boolean(),

      app_state_name: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      kafka_sync: Joi.boolean(),

      app_display_name: Joi.boolean(),

      updated_at: Joi.string().allow(""),

      store_id: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),

      forward: Joi.boolean(),

      status: Joi.string().allow("").required(),

      display_name: Joi.boolean(),

      delivery_partner_id: Joi.number().allow(null),

      bsh_id: Joi.number().required(),

      state_id: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      state_type: Joi.string().allow(""),

      bag_id: Joi.number().required(),

      reasons: Joi.array().items(Joi.any()),

      delivery_awb_number: Joi.string().allow("").allow(null),

      bag_state_mapper: this.BagStateMapper().required(),
    });
  }

  static TrackingList() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      status: Joi.string().allow("").required(),

      is_current: Joi.boolean(),

      time: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_tag: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      hsn_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      value_of_good: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gstin_code: Joi.string().allow(""),

      gst_fee: Joi.number(),
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
      promotion_name: Joi.string().allow(""),

      discount_rules: Joi.array().items(this.DiscountRules()),

      buy_rules: Joi.array().items(this.BuyRules()),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promo_id: Joi.string().allow(""),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      id: Joi.number().required(),

      company: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.number(),

      created_on: Joi.number().required(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      allow_force_return: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      uid: Joi.string().allow(""),

      return_config: Joi.any(),

      identifiers: Joi.any(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      version: Joi.string().allow(""),

      city: Joi.string().allow(""),

      longitude: Joi.number(),

      country: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      state: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      created_at: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area: Joi.string().allow(""),

      pincode: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      identifiers: this.Identifier().required(),

      price_effective: Joi.number().required(),

      discount: Joi.number().required(),

      value_of_good: Joi.number().required(),

      transfer_price: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      gst_fee: Joi.string().allow("").required(),

      cod_charges: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      tax_collected_at_source: Joi.number(),

      gst_tax_percentage: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      pm_price_split: Joi.any().required(),

      size: Joi.string().allow("").required(),

      cashback: Joi.number().required(),

      price_marked: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      coupon_value: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      amount_paid: Joi.number().required(),

      total_units: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      refund_credit: Joi.number().required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      prices: this.Prices(),

      current_status: Joi.string().allow(""),

      gst_details: this.BagGST(),

      identifier: Joi.string().allow(""),

      applied_promos: Joi.array().items(this.AppliedPromos()),

      brand: this.OrderBrandName(),

      item: this.PlatformItem(),

      display_name: Joi.string().allow(""),

      bag_configs: this.BagConfigs(),

      seller_identifier: Joi.string().allow(""),

      article: this.OrderBagArticle(),

      parent_promo_bags: Joi.any(),

      line_number: Joi.number(),

      delivery_address: this.PlatformDeliveryAddress(),

      financial_breakup: Joi.array().items(this.FinancialBreakup()),

      entity_type: Joi.string().allow(""),

      can_return: Joi.boolean(),

      bag_id: Joi.number().required(),

      quantity: Joi.number(),

      can_cancel: Joi.boolean(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      order_date: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      source: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      tax_details: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),

      order_value: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      go_green: Joi.boolean(),

      prices: this.Prices(),

      refund_text: Joi.string().allow(""),

      forward_tracking_list: Joi.array().items(Joi.any()),

      fyndstore_emp: Joi.any().required(),

      order_created_time: Joi.string().allow(""),

      total_items: Joi.number(),

      delivery_details: this.UserDetailsData(),

      company: Joi.any().required(),

      ordering_store: Joi.any().required(),

      shipment_status: Joi.string().allow(""),

      dp_details: this.DPDetailsData(),

      status: this.ShipmentStatusData(),

      operational_status: Joi.string().allow(""),

      invoice: Joi.any().required(),

      replacement_details: Joi.string().allow(""),

      enable_tracking: Joi.boolean(),

      gst_details: this.GSTDetailsData(),

      is_pdsr: Joi.string().allow(""),

      total_bags: Joi.number(),

      bank_data: Joi.any(),

      kirana_store_id: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      refund_details: Joi.any(),

      payment_mode: Joi.string().allow(""),

      is_fynd_coupon: Joi.boolean().required(),

      tracking_url: Joi.string().allow("").required(),

      secured_delivery_flag: Joi.string().allow(""),

      delivery_status: Joi.array().items(Joi.any()).required(),

      coupon: Joi.any(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      items: Joi.array().items(Joi.any()).required(),

      lock_status: Joi.string().allow("").required(),

      journey_type: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      mid: Joi.string().allow(""),

      forward_order_status: Joi.array().items(Joi.any()),

      payments: this.ShipmentPayments(),

      order_status: Joi.any().required(),

      user_agent: Joi.string().allow(""),

      beneficiary_details: Joi.boolean(),

      billing_details: this.UserDetailsData(),

      platform_logo: Joi.boolean().required(),

      escalation: Joi.any(),

      vertical: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      current_shipment_status: Joi.any().required(),

      fulfilling_store: this.FulfillingStore(),

      is_not_fynd_source: Joi.boolean().required(),

      credit_note_id: Joi.string().allow("").required(),

      user_info: Joi.any(),

      bag_status_history: Joi.array().items(this.BagStatusHistory()),

      tracking_list: Joi.array().items(this.TrackingList()),

      bags: Joi.array().items(this.OrderBags()),

      user_id: Joi.string().allow("").required(),

      due_date: Joi.string().allow(""),

      pay_button: Joi.string().allow(""),

      forward_shipment_status: Joi.array().items(Joi.any()),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      packaging_type: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      is_invoiced: Joi.boolean().required(),

      can_cancel: Joi.boolean(),

      priority_text: Joi.string().allow(""),

      can_return: Joi.boolean(),

      is_packaging_order: Joi.boolean().required(),

      shipment_quantity: Joi.number(),

      is_fynd_store: Joi.string().allow(""),

      can_break: Joi.string().allow("").required(),

      status_progress: Joi.number().required(),

      order: this.OrderDetailsData(),

      email_id: Joi.string().allow("").required(),

      order_type: Joi.string().allow("").required(),

      enable_dp_tracking: Joi.string().allow(""),

      child_nodes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      prices: this.Prices(),

      total_items: Joi.number(),

      delivery_details: this.UserDetailsData(),

      shipment_status: Joi.string().allow(""),

      dp_details: this.DPDetailsData(),

      status: this.ShipmentStatusData(),

      operational_status: Joi.string().allow(""),

      gst_details: this.GSTDetailsData(),

      total_bags: Joi.number(),

      custom_meta: Joi.array().items(Joi.any()),

      payment_mode: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      payments: this.ShipmentPayments(),

      user_agent: Joi.string().allow(""),

      billing_details: this.UserDetailsData(),

      platform_logo: Joi.string().allow(""),

      vertical: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      fulfilling_store: this.FulfillingStore(),

      bag_status_history: Joi.array().items(this.BagStatusHistory()),

      tracking_list: Joi.array().items(this.TrackingList()),

      bags: Joi.array().items(this.OrderBags()),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      packaging_type: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      priority_text: Joi.string().allow(""),

      shipment_quantity: Joi.number(),

      order: this.OrderDetailsData(),

      enable_dp_tracking: Joi.string().allow(""),
    });
  }

  static OrderDict() {
    return Joi.object({
      order_date: Joi.string().allow("").required(),

      shipment_count: Joi.number().required(),

      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      shipments: Joi.array().items(this.PlatformShipment()),

      order: this.OrderDict(),

      success: Joi.boolean().required(),

      custom_meta: Joi.array().items(Joi.any()),
    });
  }

  static SubLane() {
    return Joi.object({
      actions: Joi.array().items(Joi.any()),

      total_items: Joi.number(),

      text: Joi.string().allow(""),

      index: Joi.number(),

      value: Joi.string().allow(""),
    });
  }

  static SuperLane() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      total_items: Joi.number(),

      text: Joi.string().allow("").required(),

      options: Joi.array().items(this.SubLane()),
    });
  }

  static LaneConfigResponse() {
    return Joi.object({
      super_lanes: Joi.array().items(this.SuperLane()),
    });
  }

  static PlatformChannel() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static PlatformBreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      payment_mode: Joi.string().allow(""),

      channel: this.PlatformChannel(),

      breakup_values: Joi.array().items(this.PlatformBreakupValues()),

      order_created_time: Joi.string().allow(""),

      user_info: this.UserDataInfo(),

      order_value: Joi.number(),

      order_id: Joi.string().allow(""),

      shipments: Joi.array().items(this.PlatformShipment()),

      total_order_value: Joi.number(),

      meta: Joi.any(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      total_count: Joi.number(),

      page: this.Page(),

      success: Joi.boolean(),

      items: Joi.array().items(this.PlatformOrderItems()),

      lane: Joi.string().allow(""),

      message: Joi.string().allow(""),
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
      options: Joi.array().items(this.Options()),

      value: Joi.number().required(),

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

      updated_at: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),
    });
  }

  static PlatformShipmentTrack() {
    return Joi.object({
      results: Joi.array().items(this.PlatformTrack()),

      meta: Joi.any(),
    });
  }

  static FiltersResponse() {
    return Joi.object({
      advance: Joi.array().items(Joi.any()),
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

      report_created_at: Joi.string().allow("").allow(null),

      report_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      request_details: Joi.any(),

      status: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      report_type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      item_id: Joi.string().allow(""),

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
      trace_id: Joi.string().allow(""),

      error: Joi.array().items(this.NestedErrorSchemaDataSet()),

      data: Joi.array().items(Joi.any()),

      success: Joi.boolean(),

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

      store_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      label: Joi.any(),

      store_name: Joi.string().allow(""),

      invoice: Joi.any(),

      batch_id: Joi.string().allow("").required(),

      do_invoice_label_generated: Joi.boolean().required(),

      store_code: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),
    });
  }

  static FileUploadResponse() {
    return Joi.object({
      url: Joi.string().allow(""),

      expiry: Joi.number(),
    });
  }

  static URL() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }

  static FileResponse() {
    return Joi.object({
      size: Joi.number(),

      namespace: Joi.string().allow(""),

      upload: this.FileUploadResponse(),

      file_name: Joi.string().allow(""),

      method: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      cdn: this.URL(),

      operation: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      content_type: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      size: Joi.number(),

      total: Joi.number(),

      has_next: Joi.boolean(),

      type: Joi.string().allow(""),

      current: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      failed_shipments: Joi.array().items(Joi.any()),

      store_id: Joi.number(),

      user_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      successful: Joi.number(),

      total: Joi.number(),

      id: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      file_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      processing: Joi.number(),

      company_id: Joi.number(),

      excel_url: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      page: this.BulkListingPage(),

      success: Joi.boolean(),

      error: Joi.string().allow(""),

      data: Joi.array().items(this.bulkListingData()),
    });
  }

  static ManifestPage() {
    return Joi.object({
      size: Joi.string().allow(""),

      total: Joi.number(),

      has_next: Joi.boolean(),

      type: Joi.string().allow(""),

      current: Joi.string().allow(""),

      has_previous: Joi.boolean(),
    });
  }

  static DateRange() {
    return Joi.object({
      to_date: Joi.string().allow(""),

      from_date: Joi.string().allow(""),
    });
  }

  static ManifestFilter() {
    return Joi.object({
      dp_name: Joi.string().allow(""),

      sales_channels: Joi.string().allow(""),

      sales_channel_name: Joi.string().allow(""),

      date_range: this.DateRange(),

      store_name: Joi.string().allow(""),

      dp_ids: Joi.string().allow(""),

      stores: Joi.string().allow(""),

      lane: Joi.string().allow(""),
    });
  }

  static GeneratedManifestItem() {
    return Joi.object({
      filters: this.ManifestFilter(),

      company_id: Joi.number(),

      manifest_id: Joi.string().allow(""),

      created_by: Joi.string().allow(""),

      is_active: Joi.boolean(),

      status: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static GeneratedManifestResponse() {
    return Joi.object({
      page: this.ManifestPage(),

      items: Joi.array().items(this.GeneratedManifestItem()),
    });
  }

  static ManifestDetailTotalShipmentPricesCount() {
    return Joi.object({
      shipment_count: Joi.number(),

      total_price: Joi.number(),
    });
  }

  static ManifestDetailMeta() {
    return Joi.object({
      filters: this.ManifestFilter(),

      total_shipment_prices_count: this.ManifestDetailTotalShipmentPricesCount(),
    });
  }

  static ManifestDetail() {
    return Joi.object({
      filters: this.ManifestFilter(),

      company_id: Joi.number(),

      manifest_id: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: Joi.string().allow(""),

      id: Joi.number(),

      is_active: Joi.boolean(),

      status: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      user_id: Joi.number(),

      meta: this.ManifestDetailMeta(),
    });
  }

  static ManifestDetailItem() {
    return Joi.object({
      invoice_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      item_qty: Joi.number(),

      awb: Joi.string().allow(""),
    });
  }

  static ManifestDetailResponse() {
    return Joi.object({
      manifest_details: Joi.array().items(this.ManifestDetail()),

      page: this.ManifestPage(),

      items: Joi.array().items(this.ManifestDetailItem()),

      additional_shipment_count: Joi.number(),
    });
  }

  static QuestionSet() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static Reason() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      qc_type: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      question_set: Joi.array().items(this.QuestionSet()),
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
      processing_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      successful_shipments_count: Joi.number(),

      total_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      failed_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      error: Joi.array().items(Joi.string().allow("")),

      data: Joi.array().items(this.BulkActionDetailsDataField()),

      success: Joi.string().allow(""),

      status: Joi.boolean(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      uploaded_by: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
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

      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

      enabled: Joi.boolean().required(),
    });
  }

  static StoreGstCredentials() {
    return Joi.object({
      e_waybill: this.StoreEwaybill(),

      e_invoice: this.StoreEinvoice(),
    });
  }

  static Document() {
    return Joi.object({
      ds_type: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

      url: Joi.string().allow(""),
    });
  }

  static StoreDocuments() {
    return Joi.object({
      gst: this.Document(),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      user: Joi.string().allow(""),

      password: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      gst_credentials: this.StoreGstCredentials().required(),

      documents: this.StoreDocuments(),

      ewaybill_portal_details: Joi.any(),

      additional_contact_details: Joi.any(),

      product_return_config: Joi.any(),

      display_name: Joi.string().allow("").required(),

      einvoice_portal_details: this.EInvoicePortalDetails(),

      stage: Joi.string().allow("").required(),

      timing: Joi.array().items(Joi.any()),

      gst_number: Joi.string().allow(""),
    });
  }

  static StoreAddress() {
    return Joi.object({
      longitude: Joi.number().required(),

      country: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      phone: Joi.string().allow("").allow(null).required(),

      country_code: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      version: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      longitude: Joi.number().required(),

      country: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      phone: Joi.number().required(),

      parent_store_id: Joi.number(),

      s_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      vat_no: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      meta: this.StoreMeta().required(),

      is_active: Joi.boolean(),

      location_type: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      brand_id: Joi.any(),

      store_email: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      fulfillment_channel: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      code: Joi.string().allow(""),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      alohomora_user_id: Joi.number(),

      order_integration_id: Joi.string().allow(""),

      updated_at: Joi.string().allow("").allow(null),

      contact_person: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      latitude: Joi.number().required(),

      store_address_json: this.StoreAddress(),

      company_id: Joi.number().required(),

      is_enabled_for_recon: Joi.boolean(),

      created_at: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      employee_discount: Joi.number(),

      is_priority: Joi.boolean(),

      order_item_id: Joi.string().allow(""),

      channel_shipment_id: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      coupon_code: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      size_level_total_qty: Joi.number().allow(null),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      employee_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      loyalty_discount: Joi.number(),

      affiliate_meta: this.AffiliateMeta().required(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      label_a6: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_a4: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_min: Joi.string().allow(""),

      t_max: Joi.string().allow(""),
    });
  }

  static Formatted() {
    return Joi.object({
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
    });
  }

  static EInvoice() {
    return Joi.object({
      irn: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      error_message: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),
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

  static BuyerDetails() {
    return Joi.object({
      address: Joi.string().allow("").allow(null).required(),

      gstin: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      pincode: Joi.number().required(),
    });
  }

  static LockData() {
    return Joi.object({
      mto: Joi.boolean(),

      lock_message: Joi.string().allow(""),

      locked: Joi.boolean(),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      bag_weight: Joi.any(),

      awb_number: Joi.string().allow(""),

      dp_options: Joi.any(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      return_awb_number: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      timestamp: this.ShipmentTimeStamp(),

      return_store_node: Joi.number(),

      formatted: this.Formatted(),

      box_type: Joi.string().allow("").allow(null),

      einvoice_info: this.EinvoiceInfo(),

      ewaybill_info: Joi.any().allow(null),

      return_affiliate_shipment_id: Joi.string().allow(""),

      store_invoice_updated_date: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      shipment_weight: Joi.number(),

      debug_info: this.DebugInfo(),

      b2b_buyer_details: this.BuyerDetails(),

      b2c_buyer_details: Joi.any().allow(null),

      dp_name: Joi.string().allow(""),

      packaging_name: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      return_details: Joi.any(),

      dp_id: Joi.string().allow("").allow(null),

      assign_dp_from_sb: Joi.boolean(),

      external: Joi.any(),

      forward_affiliate_order_id: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      weight: Joi.number().required(),

      lock_data: this.LockData(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_store_id: Joi.string().allow("").required(),

      pdf_links: this.PDFLinks(),

      affiliate_bag_id: Joi.string().allow("").required(),

      shipment_meta: this.ShipmentMeta().required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_meta: this.AffiliateMeta().required(),

      ad_id: Joi.string().allow(""),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      gst_tag: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      igst_tax_percentage: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      sgst_tax_percentage: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      cgst_tax_percentage: Joi.number().required(),

      gst_fee: Joi.number().required(),
    });
  }

  static Brand() {
    return Joi.object({
      logo: Joi.string().allow(""),

      start_date: Joi.string().allow("").allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      credit_note_allowed: Joi.boolean(),

      company: Joi.string().allow("").required(),

      is_virtual_invoice: Joi.boolean().allow(null),

      pickup_location: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      modified_on: Joi.number(),

      credit_note_expiry_days: Joi.number().allow(null),

      brand_name: Joi.string().allow("").required(),

      created_on: Joi.number(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_material: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      attributes: this.Attributes().required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      branch_url: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      color: Joi.string().allow("").allow(null),

      l2_category: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      last_updated_at: Joi.string().allow(""),

      brand: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      code: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      l1_category_id: Joi.number(),

      l2_category_id: Joi.number(),

      slug_key: Joi.string().allow("").required(),

      gender: Joi.string().allow("").allow(null),

      item_id: Joi.number().required(),

      l3_category: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      department_id: Joi.number(),

      can_return: Joi.boolean(),

      meta: Joi.any(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      can_cancel: Joi.boolean(),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
    });
  }

  static Weight() {
    return Joi.object({
      unit: Joi.string().allow(""),

      shipping: Joi.number(),

      is_default: Joi.boolean(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
    });
  }

  static Dimensions() {
    return Joi.object({
      height: Joi.number(),

      unit: Joi.string().allow(""),

      width: Joi.number(),

      is_default: Joi.boolean(),

      length: Joi.number(),
    });
  }

  static Article() {
    return Joi.object({
      weight: this.Weight(),

      a_set: Joi.any().allow(null),

      size: Joi.string().allow("").required(),

      return_config: this.ReturnConfig(),

      identifiers: this.Identifier().required(),

      uid: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      esp_modified: Joi.any(),

      is_set: Joi.boolean(),

      child_details: Joi.any().allow(null),

      dimensions: this.Dimensions(),

      seller_identifier: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      code: Joi.string().allow(""),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_line_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      po_tax_amount: Joi.number(),

      total_gst_percentage: Joi.number(),

      item_base_price: Joi.number(),

      docker_number: Joi.string().allow(""),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: this.B2BPODetails(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      prices: this.Prices().required(),

      qc_required: Joi.any(),

      current_status: this.BagStatusHistory().required(),

      article_details: this.ArticleDetails(),

      tags: Joi.array().items(Joi.string().allow("")),

      ordering_store: this.Store(),

      status: this.BagReturnableCancelableStatus().required(),

      affiliate_bag_details: this.AffiliateBagDetails().required(),

      operational_status: Joi.string().allow(""),

      affiliate_details: this.AffiliateDetails(),

      gst_details: this.BagGSTDetails().required(),

      restore_coupon: Joi.boolean(),

      identifier: Joi.string().allow(""),

      applied_promos: Joi.array().items(Joi.any()),

      brand: this.Brand().required(),

      display_name: Joi.string().allow(""),

      item: this.Item().required(),

      seller_identifier: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      b_type: Joi.string().allow(""),

      dates: this.Dates(),

      reasons: Joi.array().items(Joi.any()),

      current_operational_status: this.BagStatusHistory().required(),

      article: this.Article().required(),

      parent_promo_bags: Joi.any(),

      order_integration_id: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      shipment_id: Joi.string().allow(""),

      line_number: Joi.number(),

      b_id: Joi.number().required(),

      bag_status_history: this.BagStatusHistory(),

      financial_breakup: Joi.array().items(this.FinancialBreakup()).required(),

      restore_promos: Joi.any(),

      entity_type: Joi.string().allow(""),

      bag_status: Joi.array().items(this.BagStatusHistory()).required(),

      original_bag_list: Joi.array().items(Joi.number()),

      no_of_bags_order: Joi.number(),

      bag_update_time: Joi.number(),

      meta: this.BagMeta(),
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
      page_type: Joi.string().allow("").required(),

      size: Joi.number().required(),

      has_next: Joi.boolean().required(),

      item_total: Joi.number().required(),

      current: Joi.number().required(),
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
      status: Joi.number(),

      shipment_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      error: Joi.string().allow(""),
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

      status: Joi.number().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      bag_id: Joi.number().allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      mongo_article_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      set_id: Joi.string().allow("").allow(null),
    });
  }

  static StoreReassignResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static Entities() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      entities: Joi.array().items(this.Entities()).required(),

      action: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),

      action_type: Joi.string().allow("").required(),
    });
  }

  static OriginalFilter() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      bag_id: Joi.number(),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),
    });
  }

  static CheckResponse() {
    return Joi.object({
      lock_status: Joi.boolean().allow(null),

      shipment_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      status: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      original_filter: this.OriginalFilter(),

      bags: Joi.array().items(this.Bags()),

      affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockResponse() {
    return Joi.object({
      check_response: Joi.array().items(this.CheckResponse()),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static AnnouncementResponse() {
    return Joi.object({
      platform_name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      title: Joi.string().allow(""),

      company_id: Joi.number(),

      logo_url: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      id: Joi.number().required(),
    });
  }

  static AnnouncementsResponse() {
    return Joi.object({
      announcements: Joi.array().items(this.AnnouncementResponse()),
    });
  }

  static BaseResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static Click2CallResponse() {
    return Joi.object({
      call_id: Joi.string().allow("").required(),

      status: Joi.boolean().required(),
    });
  }

  static EntitiesDataUpdates() {
    return Joi.object({
      data: Joi.any(),

      filters: Joi.array().items(Joi.any()),
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

  static DataUpdates() {
    return Joi.object({
      entities: Joi.array().items(this.EntitiesDataUpdates()),

      products: Joi.array().items(this.ProductsDataUpdates()),
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

  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(this.EntitiesReasons()),

      products: Joi.array().items(this.ProductsReasons()),
    });
  }

  static Products() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),

      data_updates: this.DataUpdates(),

      reasons: this.ReasonsData(),

      products: Joi.array().items(this.Products()),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      shipments: Joi.array().items(this.ShipmentsRequest()),

      exclude_bags_next_state: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      lock_after_transition: Joi.boolean(),

      task: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      statuses: Joi.array().items(this.StatuesRequest()),

      force_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      status: Joi.number(),

      final_state: Joi.any(),

      meta: Joi.any(),

      stack_trace: Joi.string().allow(""),

      message: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      code: Joi.string().allow(""),
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

  static OrderUser() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      city: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      phone: Joi.number().required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      attributes: Joi.any().required(),

      dimension: Joi.any().required(),

      weight: Joi.any().required(),

      quantity: Joi.number().required(),

      brand_id: Joi.number().required(),

      category: Joi.any().required(),

      _id: Joi.string().allow("").required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fulfillment_type: Joi.string().allow("").required(),

      articles: Joi.array().items(this.ArticleDetails1()).required(),

      fulfillment_id: Joi.number().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      articles: Joi.array().items(this.ArticleDetails1()).required(),

      meta: Joi.any(),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number().required(),

      shipments: Joi.number().required(),

      dp_id: Joi.number().allow(null),

      affiliate_shipment_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      location_details: this.LocationDetails(),

      source: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      shipment: Joi.array().items(this.ShipmentDetails()).required(),

      action: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: this.ShipmentConfig().required(),
    });
  }

  static UserData() {
    return Joi.object({
      billing_user: this.OrderUser(),

      shipping_user: this.OrderUser(),
    });
  }

  static MarketPlacePdf() {
    return Joi.object({
      label: Joi.string().allow("").allow(null),

      invoice: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      avl_qty: Joi.number().required(),

      unit_price: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      delivery_charge: Joi.number().required(),

      store_id: Joi.number().required(),

      amount_paid: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      price_effective: Joi.number().required(),

      identifier: Joi.any().required(),

      price_marked: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      item_size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      company_id: Joi.number().required(),

      quantity: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      sku: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      pdf_links: this.MarketPlacePdf(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      affiliate_priority_code: Joi.string().allow("").allow(null),

      fulfilment_priority: Joi.number().allow(null),

      fulfilment_priority_text: Joi.string().allow(""),
    });
  }

  static OrderInfo() {
    return Joi.object({
      order_value: Joi.number().required(),

      billing_address: this.OrderUser().required(),

      affiliate_order_id: Joi.string().allow(""),

      coupon: Joi.string().allow("").allow(null),

      shipping_address: this.OrderUser().required(),

      shipment: this.ShipmentData(),

      user: this.UserData().required(),

      discount: Joi.number().required(),

      items: Joi.any().required(),

      payment_mode: Joi.string().allow("").required(),

      delivery_charges: Joi.number().required(),

      cod_charges: Joi.number().required(),

      payment: Joi.any(),

      bags: Joi.array().items(this.AffiliateBag()).required(),

      order_priority: this.OrderPriority(),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      store_id: Joi.number().required(),

      marketplace_store_id: Joi.string().allow("").required(),
    });
  }

  static AffiliateInventoryLogisticsConfig() {
    return Joi.object({
      dp_assignment: Joi.boolean(),
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

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),
    });
  }

  static AffiliateInventoryArticleAssignmentConfig() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      logistics: this.AffiliateInventoryLogisticsConfig(),

      inventory: this.AffiliateInventoryStoreConfig(),

      order: this.AffiliateInventoryOrderConfig(),

      payment: this.AffiliateInventoryPaymentConfig(),

      article_assignment: this.AffiliateInventoryArticleAssignmentConfig(),
    });
  }

  static AffiliateAppConfigMeta() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static AffiliateAppConfig() {
    return Joi.object({
      token: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      owner: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      meta: Joi.array().items(this.AffiliateAppConfigMeta()),

      name: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
    });
  }

  static AffiliateConfig() {
    return Joi.object({
      inventory: this.AffiliateInventoryConfig(),

      app: this.AffiliateAppConfig(),
    });
  }

  static Affiliate() {
    return Joi.object({
      config: this.AffiliateConfig(),

      token: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      article_lookup: Joi.string().allow(""),

      create_user: Joi.boolean(),

      store_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(this.AffiliateStoreIdMapping())
        .required(),

      bag_end_state: Joi.string().allow(""),

      affiliate: this.Affiliate().required(),
    });
  }

  static CreateOrderPayload() {
    return Joi.object({
      order_info: this.OrderInfo().required(),

      order_config: this.OrderConfig().required(),

      affiliate_id: Joi.string().allow("").required(),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static ActionInfo() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      id: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      display_text: Joi.string().allow("").required(),
    });
  }

  static GetActionsResponse() {
    return Joi.object({
      permissions: this.ActionInfo().required(),
    });
  }

  static HistoryDict() {
    return Joi.object({
      bag_id: Joi.number(),

      createdat: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),
    });
  }

  static ShipmentHistoryResponse() {
    return Joi.object({
      activity_history: Joi.array().items(this.HistoryDict()),
    });
  }

  static ErrorDetail() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static SmsDataPayload() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      shipment_id: Joi.number().required(),

      order_id: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      bag_id: Joi.number().required(),

      data: this.SmsDataPayload(),

      slug: Joi.string().allow("").required(),
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
      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      meta: this.Meta().required(),

      bag_list: Joi.array().items(Joi.number()),

      remarks: Joi.string().allow(""),

      id: Joi.number().required(),
    });
  }

  static OrderStatusData() {
    return Joi.object({
      order_details: this.OrderDetails().required(),

      shipment_details: Joi.array().items(this.ShipmentDetail()),

      errors: Joi.array().items(Joi.string().allow("")),
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
      qc_required: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),

      dp_id: Joi.number().required(),

      order_type: Joi.string().allow("").required(),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      success: Joi.string().allow("").required(),

      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BillingInfo() {
    return Joi.object({
      address2: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      state_code: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      house_no: Joi.string().allow("").required(),

      floor_no: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      address2: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      state_code: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      title: Joi.string().allow(""),

      geo_location: Joi.any(),

      customer_code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      refund_by: Joi.string().allow("").required(),

      amount: Joi.number().required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      primary_mode: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(this.PaymentMethod()),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dispatch_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      customer_pickup_slot: Joi.any(),
    });
  }

  static Tax() {
    return Joi.object({
      breakup: Joi.array().items(Joi.any()).required(),

      amount: Joi.any().required(),

      tax_exempt: Joi.boolean().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static Charge() {
    return Joi.object({
      tax: this.Tax().required(),

      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      code: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      external_line_id: Joi.string().allow(""),

      meta: Joi.any(),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      custom_messasge: Joi.string().allow(""),

      charges: Joi.array().items(this.Charge()).required(),
    });
  }

  static Shipment() {
    return Joi.object({
      external_shipment_id: Joi.number(),

      priority: Joi.number(),

      meta: Joi.any(),

      processing_dates: this.ProcessingDates(),

      location_id: Joi.number().required(),

      line_items: Joi.array().items(this.LineItem()).required(),
    });
  }

  static TaxInfo() {
    return Joi.object({
      b2b_gstin_number: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      external_order_id: Joi.string().allow(""),

      billing_info: this.BillingInfo().required(),

      meta: Joi.any(),

      shipping_info: this.ShippingInfo().required(),

      application_id: Joi.string().allow(""),

      external_creation_date: Joi.string().allow(""),

      currency_info: Joi.any().required(),

      payment_info: this.PaymentInfo().required(),

      shipments: Joi.array().items(this.Shipment()).required(),

      tax_info: this.TaxInfo(),

      charges: Joi.array().items(this.Charge()).required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      status: Joi.number().required(),

      info: Joi.any(),

      request_id: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      exception: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
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
      payment_methods: Joi.array().items(this.PaymentMethods()),

      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      lock_states: Joi.array().items(Joi.string().allow("")),

      shipment_assignment: Joi.string().allow(""),

      dp_configuration: this.DpConfiguration(),

      logo_url: Joi.any(),

      location_reassignment: Joi.boolean(),

      payment_info: this.CreateChannelPaymentInfo(),
    });
  }

  static CreateChannelConfigData() {
    return Joi.object({
      config_data: this.CreateChannelConfig(),
    });
  }

  static CreateChannelConfigResponse() {
    return Joi.object({
      acknowledged: Joi.boolean(),

      is_upserted: Joi.boolean(),

      is_inserted: Joi.boolean(),
    });
  }

  static CreateChannelConifgErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static UploadConsent() {
    return Joi.object({
      manifest_id: Joi.string().allow("").required(),

      consent_url: Joi.string().allow("").required(),
    });
  }

  static PlatformOrderUpdate() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
    });
  }

  static ResponseDetail() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.array().items(Joi.string().allow("")),
    });
  }

  static FyndOrderIdList() {
    return Joi.object({
      fynd_order_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static OrderStatus() {
    return Joi.object({
      order_details: Joi.array().items(this.FyndOrderIdList()),

      end_date: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      result: Joi.any(),
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
      query: Joi.any().required(),

      sort_on: Joi.string().allow("").required(),
    });
  }

  static CreateSearchKeyword() {
    return Joi.object({
      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      result: this.SearchKeywordResult().required(),
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
      words: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),
    });
  }

  static GetAutocompleteWordsResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.GetAutocompleteWordsData()),
    });
  }

  static Media() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      query: Joi.any(),

      params: Joi.any(),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static AutocompleteAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      page: this.AutocompletePageAction(),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      logo: this.Media(),

      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

      action: this.AutocompleteAction(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(this.AutocompleteResult()),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      min_quantity: Joi.number().required(),

      allow_remove: Joi.boolean(),

      product_uid: Joi.number().required(),

      max_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      products: Joi.array().items(this.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      products: Joi.array().items(this.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),
    });
  }

  static GetProductBundleListingResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.GetProductBundleCreateResponse()),
    });
  }

  static Price() {
    return Joi.object({
      max_effective: Joi.number(),

      min_effective: Joi.number(),

      max_marked: Joi.number(),

      min_marked: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      slug: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      price: Joi.any(),

      item_code: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      identifier: Joi.any(),

      uid: Joi.number(),

      quantity: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      attributes: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      quantity: Joi.number(),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static GetProducts() {
    return Joi.object({
      min_quantity: Joi.number(),

      price: this.Price(),

      product_details: this.LimitedProductData(),

      allow_remove: Joi.boolean(),

      product_uid: Joi.number(),

      max_quantity: Joi.number(),

      sizes: Joi.array().items(this.Size()),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      products: Joi.array().items(this.GetProducts()),

      logo: Joi.string().allow(""),

      company_id: Joi.number(),

      name: Joi.string().allow(""),

      choice: Joi.string().allow(""),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      products: Joi.array().items(this.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),

      company_id: Joi.number(),

      name: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),
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

      title: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      image: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      subtitle: Joi.string().allow(""),

      active: Joi.boolean(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      brand_id: Joi.number(),
    });
  }

  static ListSizeGuide() {
    return Joi.object({
      page: Joi.any(),

      items: Joi.array().items(Joi.any()),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      guide: Joi.any(),

      title: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      subtitle: Joi.string().allow(""),

      active: Joi.boolean(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_by: Joi.any(),

      brand_id: Joi.number(),
    });
  }

  static MetaFields() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      _custom_meta: Joi.array().items(this.MetaFields()),

      _custom_json: Joi.any(),
    });
  }

  static SuccessResponse1() {
    return Joi.object({
      success: Joi.boolean(),

      uid: Joi.number(),
    });
  }

  static MOQ() {
    return Joi.object({
      minimum: Joi.number(),

      maximum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static ApplicationItemResponse() {
    return Joi.object({
      moq: this.MOQ(),

      seo: this.SEO(),

      alt_text: Joi.any(),
    });
  }

  static GetConfigMetadataResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      condition: Joi.array().items(Joi.any()),

      values: Joi.array().items(Joi.any()),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      slug: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      unit: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      attributes: Joi.array().items(this.AttributeDetailsGroup()),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),
    });
  }

  static ConfigErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static PageResponseType() {
    return Joi.object({
      current: Joi.number().required(),

      total_count: Joi.number().required(),

      has_next: Joi.boolean().required(),

      next: Joi.number().required(),
    });
  }

  static GetConfigResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      page: this.PageResponseType().required(),
    });
  }

  static ConfigSuccessResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationsSort() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      default_key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      name: Joi.string().allow(""),

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

  static MetaDataListingSortMetaResponse() {
    return Joi.object({
      display: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static MetaDataListingSortResponse() {
    return Joi.object({
      data: Joi.array().items(this.MetaDataListingSortMetaResponse()),
    });
  }

  static MetaDataListingFilterMetaResponse() {
    return Joi.object({
      filter_types: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),

      units: Joi.array().items(Joi.any()),
    });
  }

  static MetaDataListingFilterResponse() {
    return Joi.object({
      data: Joi.array().items(this.MetaDataListingFilterMetaResponse()),
    });
  }

  static MetaDataListingResponse() {
    return Joi.object({
      sort: this.MetaDataListingSortResponse().required(),

      filter: this.MetaDataListingFilterResponse().required(),
    });
  }

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      detail: Joi.any(),

      compare: Joi.any(),

      similar: Joi.any(),

      variant: Joi.any(),
    });
  }

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      listing: this.MetaDataListingResponse(),

      product: this.GetCatalogConfigurationDetailsProduct(),
    });
  }

  static ConfigurationListingSortConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      name: Joi.string().allow(""),
    });
  }

  static ConfigurationListingSort() {
    return Joi.object({
      default_key: Joi.string().allow("").required(),

      config: Joi.array().items(this.ConfigurationListingSortConfig()),
    });
  }

  static ConfigurationBucketPoints() {
    return Joi.object({
      start: Joi.number(),

      display: Joi.string().allow(""),

      end: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      bucket_points: Joi.array().items(this.ConfigurationBucketPoints()),

      value: Joi.string().allow(""),

      condition: Joi.string().allow(""),

      sort: Joi.string().allow(""),

      map: Joi.any(),

      map_values: Joi.array().items(Joi.any()),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      value_config: this.ConfigurationListingFilterValue(),

      display_name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilter() {
    return Joi.object({
      allow_single: Joi.boolean().required(),

      attribute_config: Joi.array().items(
        this.ConfigurationListingFilterConfig()
      ),
    });
  }

  static ConfigurationListing() {
    return Joi.object({
      sort: this.ConfigurationListingSort().required(),

      filter: this.ConfigurationListingFilter().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      min: Joi.number().required(),

      max: Joi.number().required(),
    });
  }

  static ConfigurationProductConfig() {
    return Joi.object({
      title: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      priority: Joi.number().required(),

      size: this.ProductSize(),
    });
  }

  static ConfigurationProductSimilar() {
    return Joi.object({
      config: Joi.array().items(this.ConfigurationProductConfig()),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      display_type: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      size: this.ProductSize().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ConfigurationProductVariant() {
    return Joi.object({
      config: Joi.array().items(this.ConfigurationProductVariantConfig()),
    });
  }

  static ConfigurationProduct() {
    return Joi.object({
      similar: this.ConfigurationProductSimilar().required(),

      variant: this.ConfigurationProductVariant().required(),
    });
  }

  static AppConfiguration() {
    return Joi.object({
      modified_by: Joi.any(),

      config_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      listing: this.ConfigurationListing(),

      created_by: Joi.any(),

      product: this.ConfigurationProduct(),

      created_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      modified_by: Joi.any(),

      config_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      listing: this.ConfigurationListing(),

      created_by: Joi.any(),

      product: this.ConfigurationProduct(),

      created_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static GetAppCatalogConfiguration() {
    return Joi.object({
      data: this.AppCatalogConfiguration(),

      is_default: Joi.boolean(),
    });
  }

  static GetCatalogConfigurationDetailsSchemaListing() {
    return Joi.object({
      sort: Joi.any(),

      filter: Joi.any(),
    });
  }

  static EntityConfiguration() {
    return Joi.object({
      config_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      listing: this.GetCatalogConfigurationDetailsSchemaListing(),

      product: this.GetCatalogConfigurationDetailsProduct(),

      config_type: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static GetAppCatalogEntityConfiguration() {
    return Joi.object({
      data: this.EntityConfiguration(),

      is_default: Joi.boolean(),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      value: Joi.any().required(),

      selected_max: Joi.number(),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      query_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      display_format: Joi.string().allow(""),

      count: Joi.number(),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      kind: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFilters() {
    return Joi.object({
      values: Joi.array().items(this.ProductFiltersValue()).required(),

      key: this.ProductFiltersKey().required(),
    });
  }

  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      sort_on: Joi.array().items(this.ProductSortOn()),

      filters: Joi.array().items(this.ProductFilters()),
    });
  }

  static CollectionSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(this.NextSchedule()),

      end: Joi.string().allow("").allow(null),
    });
  }

  static CollectionImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),
    });
  }

  static CollectionBanner() {
    return Joi.object({
      portrait: this.CollectionImage().required(),

      landscape: this.CollectionImage().required(),
    });
  }

  static UserInfo() {
    return Joi.object({
      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      color: Joi.string().allow(""),

      text: Joi.string().allow(""),
    });
  }

  static SeoDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),
    });
  }

  static CreateCollection() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      _schedule: this.CollectionSchedule(),

      published: Joi.boolean(),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      logo: this.CollectionImage().required(),

      type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      banners: this.CollectionBanner().required(),

      meta: Joi.any(),

      description: Joi.string().allow(""),

      _locale_language: Joi.any(),

      created_by: this.UserInfo(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow("").required(),

      badge: this.CollectionBadge(),

      seo: this.SeoDetail(),

      sort_on: Joi.string().allow(""),

      priority: Joi.number(),

      query: Joi.array().items(this.CollectionQuery()),

      name: Joi.string().allow("").required(),

      is_visible: Joi.boolean(),

      modified_by: this.UserInfo(),
    });
  }

  static BannerImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static ImageUrls() {
    return Joi.object({
      portrait: this.BannerImage(),

      landscape: this.BannerImage(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _schedule: Joi.any(),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      logo: this.BannerImage(),

      type: Joi.string().allow(""),

      banners: this.ImageUrls(),

      meta: Joi.any(),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      sort_on: Joi.string().allow(""),

      cron: Joi.any(),

      priority: Joi.number(),

      query: Joi.array().items(this.CollectionQuery()),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      type: Joi.array().items(this.CollectionListingFilterType()),

      tags: Joi.array().items(this.CollectionListingFilterTag()),
    });
  }

  static Media1() {
    return Joi.object({
      meta: Joi.any(),

      type: Joi.string().allow(""),

      url: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _schedule: Joi.any(),

      action: this.Action(),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      logo: this.Media1(),

      type: Joi.string().allow(""),

      banners: this.ImageUrls(),

      meta: Joi.any(),

      description: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      cron: Joi.any(),

      priority: Joi.number(),

      query: Joi.array().items(this.CollectionQuery()),

      name: Joi.string().allow(""),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      page: this.Page(),

      filters: this.CollectionListingFilter(),

      items: Joi.array().items(this.GetCollectionDetailNest()),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      banners: this.ImageUrls(),

      _schedule: Joi.any(),

      meta: Joi.any(),

      description: Joi.string().allow(""),

      badge: Joi.any(),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      logo: this.Media1(),

      cron: Joi.any(),

      priority: Joi.number(),

      query: Joi.array().items(this.CollectionQuery()),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _schedule: this.CollectionSchedule(),

      published: Joi.boolean(),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      logo: this.CollectionImage(),

      type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      banners: this.CollectionBanner(),

      meta: Joi.any(),

      description: Joi.string().allow(""),

      _locale_language: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: this.CollectionBadge(),

      seo: this.SeoDetail(),

      sort_on: Joi.string().allow(""),

      priority: Joi.number(),

      query: Joi.array().items(this.CollectionQuery()),

      name: Joi.string().allow(""),

      is_visible: Joi.boolean(),

      modified_by: this.UserInfo(),
    });
  }

  static ItemQueryForUserCollection() {
    return Joi.object({
      item_id: Joi.number(),

      action: Joi.string().allow(""),
    });
  }

  static CollectionItemRequest() {
    return Joi.object({
      query: Joi.array().items(this.CollectionQuery()),

      type: Joi.string().allow(""),

      item: Joi.array().items(this.ItemQueryForUserCollection()),
    });
  }

  static UpdatedResponse() {
    return Joi.object({
      items_not_updated: Joi.array().items(Joi.number()),

      message: Joi.string().allow(""),
    });
  }

  static ProductDetailAttribute() {
    return Joi.object({
      type: Joi.string().allow(""),

      key: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      details: Joi.array().items(this.ProductDetailAttribute()),

      title: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      logo: this.Media1(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      action: this.Action(),
    });
  }

  static Price1() {
    return Joi.object({
      min: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      marked: this.Price1(),

      effective: this.Price1(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      grouped_attributes: Joi.array().items(
        this.ProductDetailGroupedAttribute()
      ),

      sellable: Joi.boolean(),

      has_variant: Joi.boolean(),

      item_type: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      brand: this.ProductBrand(),

      image_nature: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      rating: Joi.number(),

      attributes: Joi.any(),

      type: Joi.string().allow(""),

      color: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      medias: Joi.array().items(this.Media1()),

      teaser_tag: Joi.any(),

      discount: Joi.string().allow(""),

      uid: Joi.number(),

      promo_meta: Joi.any(),

      price: this.ProductListingPrice(),

      rating_count: Joi.number(),

      item_code: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      page: this.Page(),

      sort_on: Joi.array().items(this.ProductSortOn()),

      filters: Joi.array().items(this.ProductFilters()),

      items: Joi.array().items(this.ProductListingDetail()),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      available_articles: Joi.number(),

      name: Joi.string().allow(""),

      article_freshness: Joi.number(),

      total_articles: Joi.number(),

      total_sizes: Joi.number(),

      available_sizes: Joi.number(),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      count: Joi.number(),

      out_of_stock_count: Joi.number(),

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
      articles: Joi.number(),

      products: Joi.number(),
    });
  }

  static CrossSellingResponse() {
    return Joi.object({
      data: this.CrossSellingData(),

      brand_distribution: this.CatalogInsightBrand(),
    });
  }

  static OptInPostRequest() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),

      enabled: Joi.boolean(),

      opt_level: Joi.string().allow("").required(),

      platform: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()).required(),

      enabled: Joi.boolean().required(),

      opt_level: Joi.string().allow("").required(),

      platform: Joi.string().allow("").required(),

      modified_on: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      created_by: Joi.any(),

      company_id: Joi.number().required(),

      created_on: Joi.number().required(),

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

      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_name: Joi.string().allow(""),

      brand_id: Joi.number(),

      total_article: Joi.number(),

      company_id: Joi.number(),
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

      brand: Joi.number(),

      store: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      timing: Joi.any(),

      manager: Joi.any(),

      documents: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      address: Joi.any(),

      additional_contacts: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.StoreDetail()),
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

  static AttributeSchemaRange() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      multi: Joi.boolean(),

      mandatory: Joi.boolean(),

      format: Joi.string().allow(""),

      range: this.AttributeSchemaRange(),

      type: Joi.string().allow("").required(),

      allowed_values: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      indexing: Joi.boolean().required(),

      depends_on: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),
    });
  }

  static AttributeMasterDetails() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      slug: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      meta: this.AttributeMasterMeta(),

      description: Joi.string().allow(""),

      schema: this.AttributeMaster(),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      filters: this.AttributeMasterFilter(),

      details: this.AttributeMasterDetails(),

      name: Joi.string().allow(""),
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
      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      errors: Joi.any(),

      code: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      platforms: Joi.any(),

      logo: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

      priority_order: Joi.number().required(),

      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),
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

  static UserSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      search: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      page_size: Joi.number(),

      created_by: this.UserSerializer(),

      logo: Joi.string().allow(""),

      uid: Joi.number(),

      priority_order: Joi.number(),

      item_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      page_no: Joi.number(),

      name: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      errors: Joi.any(),

      code: Joi.string().allow(""),
    });
  }

  static UserDetail() {
    return Joi.object({
      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),

      username: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      slug: Joi.any(),

      is_active: Joi.boolean(),

      verified_by: this.UserDetail(),

      verified_on: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow("").required(),

      _id: Joi.any(),

      created_by: this.UserDetail(),

      logo: Joi.string().allow("").required(),

      _cls: Joi.any(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      priority_order: Joi.number().required(),

      created_on: Joi.string().allow("").required(),

      name: Joi.any().required(),

      modified_by: this.UserDetail(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      created_by: Joi.any(),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      name: Joi.string().allow(""),

      modified_by: Joi.any(),
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
      slug: Joi.any(),

      command: Joi.any(),

      custom_order: Joi.any(),

      is_active: Joi.any(),

      brand_uid: Joi.any(),

      item_type: Joi.any(),

      country_of_origin: Joi.any(),

      short_description: Joi.any(),

      is_dependent: Joi.any(),

      currency: Joi.any(),

      tags: Joi.any(),

      highlights: Joi.any(),

      hsn_code: Joi.any(),

      no_of_boxes: Joi.any(),

      product_publish: Joi.any(),

      description: Joi.any(),

      variants: Joi.any(),

      category_slug: Joi.any(),

      teaser_tag: Joi.any(),

      multi_size: Joi.any(),

      trader: Joi.any(),

      product_group_tag: Joi.any(),

      media: Joi.any(),

      item_code: Joi.any(),

      return_config: Joi.any(),

      size_guide: Joi.any(),

      sizes: Joi.any(),

      name: Joi.any(),

      trader_type: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      definitions: Joi.any(),

      properties: this.Properties(),

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
      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      name: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      brand: Joi.array().items(Joi.string().allow("")),

      templates: Joi.array().items(Joi.string().allow("")),
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

      seller_id: Joi.number(),

      task_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by: this.VerifiedBy(),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      template_tags: Joi.any(),
    });
  }

  static ProductDownloadsResponse() {
    return Joi.object({
      items: this.ProductDownloadsItems(),

      page: this.Page(),
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
      catalog_id: Joi.number(),

      name: Joi.string().allow("").required(),
    });
  }

  static CategoryMapping() {
    return Joi.object({
      google: this.CategoryMappingValues(),

      ajio: this.CategoryMappingValues(),

      facebook: this.CategoryMappingValues(),
    });
  }

  static Media2() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      l2: Joi.number().required(),

      department: Joi.number().required(),

      l1: Joi.number().required(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      marketplaces: this.CategoryMapping(),

      slug: Joi.string().allow(""),

      media: this.Media2(),

      is_active: Joi.boolean().required(),

      hierarchy: Joi.array().items(this.Hierarchy()),

      synonyms: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()).required(),

      level: Joi.number().required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      name: Joi.string().allow("").required(),
    });
  }

  static CategoryCreateResponse() {
    return Joi.object({
      uid: Joi.number(),

      message: Joi.string().allow(""),
    });
  }

  static Category() {
    return Joi.object({
      marketplaces: this.CategoryMapping(),

      slug: Joi.string().allow(""),

      media: this.Media2(),

      is_active: Joi.boolean().required(),

      hierarchy: Joi.array().items(this.Hierarchy()),

      synonyms: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      departments: Joi.array().items(Joi.number()).required(),

      level: Joi.number().required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      priority: Joi.number(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      modified_by: Joi.any(),
    });
  }

  static CategoryResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.Category()),
    });
  }

  static SingleCategoryResponse() {
    return Joi.object({
      data: this.Category(),
    });
  }

  static CategoryUpdateResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),

      is_custom_order: Joi.boolean(),
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

  static TeaserTag() {
    return Joi.object({
      tag: Joi.string().allow("").allow(null),

      url: Joi.string().allow("").allow(null),
    });
  }

  static Trader() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),

      value: Joi.number(),
    });
  }

  static ProductCreateUpdate() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      custom_order: this.CustomOrder(),

      is_active: Joi.boolean(),

      variant_media: Joi.any(),

      brand_uid: Joi.number().required(),

      item_type: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      is_set: Joi.boolean(),

      action: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      requester: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      change_request_id: Joi.any(),

      currency: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      tax_identifier: this.TaxIdentifier().required(),

      no_of_boxes: Joi.number(),

      product_publish: this.ProductPublish(),

      description: Joi.string().allow(""),

      variants: Joi.any(),

      category_slug: Joi.string().allow("").required(),

      teaser_tag: this.TeaserTag(),

      multi_size: Joi.boolean(),

      bulk_job_id: Joi.string().allow(""),

      uid: Joi.number().allow(null),

      trader: Joi.array().items(this.Trader()).required(),

      template_tag: Joi.string().allow("").required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      media: Joi.array().items(this.Media1()),

      is_image_less_product: Joi.boolean(),

      item_code: Joi.any().required(),

      return_config: this.ReturnConfig().required(),

      size_guide: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      net_quantity: this.NetQuantity(),

      name: Joi.string().allow("").required(),
    });
  }

  static Logo() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
    });
  }

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static Image() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
    });
  }

  static Product() {
    return Joi.object({
      slug: Joi.string().allow(""),

      custom_order: Joi.any(),

      is_active: Joi.boolean(),

      is_expirable: Joi.boolean(),

      brand_uid: Joi.number(),

      item_type: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      brand: this.Brand(),

      image_nature: Joi.string().allow(""),

      is_set: Joi.boolean(),

      short_description: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      is_dependent: Joi.boolean(),

      is_physical: Joi.boolean(),

      currency: Joi.string().allow(""),

      _custom_json: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      hsn_code: Joi.string().allow(""),

      color: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      product_publish: this.ProductPublished(),

      description: Joi.string().allow(""),

      variants: Joi.any(),

      category_slug: Joi.string().allow(""),

      id: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      multi_size: Joi.boolean(),

      uid: Joi.number(),

      template_tag: Joi.string().allow(""),

      media: Joi.array().items(this.Media1()),

      item_code: Joi.string().allow(""),

      images: Joi.array().items(this.Image()),

      category_uid: Joi.number(),

      size_guide: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      sizes: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.Product()),
    });
  }

  static AttributeMasterSerializer() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      is_nested: Joi.boolean(),

      schema: this.AttributeMaster().required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      variant: Joi.boolean(),

      logo: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      unit: Joi.string().allow(""),

      synonyms: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      created_by: Joi.any(),

      suggestion: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      filters: this.AttributeMasterFilter().required(),

      details: this.AttributeMasterDetails().required(),

      name: Joi.string().allow(""),

      modified_by: Joi.any(),
    });
  }

  static ProductAttributesResponse() {
    return Joi.object({
      items: Joi.array().items(this.AttributeMasterSerializer()).required(),
    });
  }

  static ValidateProduct() {
    return Joi.object({
      valid: Joi.boolean(),
    });
  }

  static UserInfo1() {
    return Joi.object({
      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      stage: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      created_by: this.UserInfo1(),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.any()),

      file_path: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.any()),

      total: Joi.number().required(),

      company_id: Joi.number().required(),

      created_on: Joi.string().allow("").required(),

      succeed: Joi.number(),

      failed: Joi.number(),

      modified_by: this.UserInfo1(),

      template_tag: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      is_active: Joi.boolean(),

      batch_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_by: this.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      modified_by: this.UserInfo1(),
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
      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_by: this.UserDetail1(),

      file_path: Joi.string().allow(""),

      cancelled: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      template: this.ProductTemplate(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      succeed: Joi.number(),

      failed: Joi.number(),

      modified_by: this.UserDetail1(),

      template_tag: Joi.string().allow(""),
    });
  }

  static ProductBulkRequestList() {
    return Joi.object({
      page: this.Page(),

      items: this.ProductBulkRequest(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      template_tag: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),
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

  static ProductBulkAssets() {
    return Joi.object({
      user: Joi.any().required(),

      url: Joi.string().allow("").required(),

      company_id: Joi.number(),
    });
  }

  static UserCommon() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static Items() {
    return Joi.object({
      stage: Joi.string().allow(""),

      retry: Joi.number(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by: this.UserCommon(),

      file_path: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      succeed: Joi.number(),

      failed: Joi.number(),

      modified_by: this.UserCommon(),
    });
  }

  static BulkAssetResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.Items()),
    });
  }

  static ProductSizeDeleteDataResponse() {
    return Joi.object({
      company_id: Joi.number(),

      item_id: Joi.number(),

      size: Joi.string().allow(""),
    });
  }

  static ProductSizeDeleteResponse() {
    return Joi.object({
      success: Joi.boolean(),

      data: this.ProductSizeDeleteDataResponse(),
    });
  }

  static ItemQuery() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      brand_uid: Joi.number(),
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

  static GTIN() {
    return Joi.object({
      gtin_type: Joi.string().allow("").required(),

      primary: Joi.boolean(),

      gtin_value: Joi.string().allow("").required(),
    });
  }

  static InvSize() {
    return Joi.object({
      is_set: Joi.boolean(),

      set: this.InventorySet(),

      price: Joi.number(),

      price_effective: Joi.number().required(),

      price_transfer: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").required(),

      item_width: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      item_height: Joi.number().allow(null),

      identifiers: Joi.array().items(this.GTIN()).required(),

      store_code: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      size: Joi.string().allow("").required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      item_weight: Joi.number().allow(null),

      item_length: Joi.number().allow(null),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      item: this.ItemQuery().required(),

      sizes: Joi.array().items(this.InvSize()).required(),

      company_id: Joi.number().required(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      inventory_updated_on: Joi.string().allow(""),

      item_id: Joi.number(),

      price: Joi.number(),

      price_effective: Joi.number(),

      price_transfer: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      identifiers: Joi.any(),

      sellable_quantity: Joi.number(),

      quantity: Joi.number(),

      store: Joi.any(),

      currency: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      size: Joi.string().allow(""),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.InventoryResponse()),
    });
  }

  static WeightResponse() {
    return Joi.object({
      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      height: Joi.number().required(),

      width: Joi.number().required(),

      length: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
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
      sellable: this.QuantityBase(),

      order_committed: this.QuantityBase(),

      not_available: this.QuantityBase(),

      damaged: this.QuantityBase(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")).required(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      marked: Joi.number().required(),

      transfer: Joi.number().required(),

      tp_notes: Joi.any(),

      effective: Joi.number().required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      returnable: Joi.boolean(),

      time: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      set: this.InventorySet(),

      weight: this.WeightResponse().required(),

      trace_id: Joi.string().allow(""),

      identifier: Joi.any().required(),

      added_on_store: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      brand: this.BrandMeta().required(),

      item_id: Joi.number().required(),

      is_set: Joi.boolean(),

      dimension: this.DimensionResponse().required(),

      company: this.CompanyMeta().required(),

      expiration_date: Joi.string().allow(""),

      quantities: this.Quantities(),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      tax_identifier: Joi.any(),

      meta: Joi.any().allow(null),

      created_by: this.UserSerializer(),

      track_inventory: Joi.boolean(),

      fynd_item_code: Joi.string().allow("").required(),

      fynd_article_code: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      store: this.StoreMeta().required(),

      manufacturer: this.ManufacturerResponse().required(),

      trader: Joi.array().items(this.Trader1()),

      price: this.PriceMeta().required(),

      seller_identifier: Joi.string().allow("").required(),

      fynd_meta: Joi.any(),

      return_config: this.ReturnConfig1(),

      raw_meta: Joi.any(),

      fragile: Joi.boolean().required(),

      total_quantity: Joi.number().required(),

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
      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),

      created_by: Joi.any(),

      file_path: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      succeed: Joi.number(),

      failed: Joi.number(),

      modified_by: Joi.any(),
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
      price_marked: Joi.number(),

      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      price: Joi.number(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      trace_id: Joi.string().allow("").allow(null),

      expiration_date: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      quantity: Joi.number(),

      currency: Joi.string().allow(""),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      total_quantity: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      user: Joi.any(),

      sizes: Joi.array().items(this.InventoryJobPayload()).required(),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      brand: Joi.array().items(Joi.number()),

      store: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      request_params: Joi.any(),

      trigger_on: Joi.string().allow(""),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      request_params: Joi.any(),

      url: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),
    });
  }

  static FilerList() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.string().allow(""),
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
      price_marked: Joi.number(),

      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      store_id: Joi.number().required(),

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
      message: Joi.string().allow("").required(),

      items: Joi.array().items(this.InventoryResponseItem()),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      company_id: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      tax_on_esp: Joi.boolean(),

      uid: Joi.number(),

      tax2: Joi.number(),

      threshold1: Joi.number().required(),

      threshold2: Joi.number(),

      tax1: Joi.number().required(),

      tax_on_mrp: Joi.boolean().required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      company_id: Joi.number(),

      hsn_code: Joi.string().allow(""),

      hs2_code: Joi.string().allow(""),

      tax_on_esp: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      tax2: Joi.number(),

      threshold1: Joi.number(),

      threshold2: Joi.number(),

      tax1: Joi.number(),

      tax_on_mrp: Joi.boolean(),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: this.HsnCodesObject(),
    });
  }

  static PageResponse() {
    return Joi.object({
      current: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      size: Joi.number(),

      item_total: Joi.number(),
    });
  }

  static HsnCodesListingResponse() {
    return Joi.object({
      page: this.PageResponse(),

      items: Joi.array().items(this.HsnCodesObject()),
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
      threshold: Joi.number().required(),

      rate: Joi.number().required(),

      cess: Joi.number(),

      effective_date: Joi.string().allow("").required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      hsn_code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      taxes: Joi.array().items(this.TaxSlab()).required(),

      created_on: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

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

      banners: this.ImageUrls(),

      action: this.Action(),

      discount: Joi.string().allow(""),

      logo: this.Media(),

      departments: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      name: Joi.string().allow(""),
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
      slug: Joi.string().allow(""),

      logo: this.Media(),

      priority_order: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(this.Department()),
    });
  }

  static DepartmentIdentifier() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: this.ImageUrls(),

      action: this.Action(),

      uid: Joi.number(),

      childs: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: this.ImageUrls(),

      action: this.Action(),

      uid: Joi.number(),

      childs: Joi.array().items(this.ThirdLevelChild()),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static Child() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: this.ImageUrls(),

      action: this.Action(),

      uid: Joi.number(),

      childs: Joi.array().items(this.SecondLevelChild()),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: this.ImageUrls(),

      action: this.Action(),

      uid: Joi.number(),

      childs: Joi.array().items(this.Child()),

      name: Joi.string().allow(""),
    });
  }

  static DepartmentCategoryTree() {
    return Joi.object({
      items: Joi.array().items(this.CategoryItems()),

      department: Joi.string().allow(""),
    });
  }

  static CategoryListingResponse() {
    return Joi.object({
      departments: Joi.array().items(this.DepartmentIdentifier()),

      data: Joi.array().items(this.DepartmentCategoryTree()),
    });
  }

  static ApplicationProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.ProductListingDetail()),

      page: this.Page().required(),

      sort_on: Joi.array().items(this.ProductSortOn()),

      filters: Joi.array().items(this.ProductFilters()),

      operators: Joi.any(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      grouped_attributes: Joi.array().items(
        this.ProductDetailGroupedAttribute()
      ),

      has_variant: Joi.boolean(),

      item_type: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      brand: this.ProductBrand(),

      image_nature: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      rating: Joi.number(),

      attributes: Joi.any(),

      type: Joi.string().allow(""),

      color: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      medias: Joi.array().items(this.Media1()),

      teaser_tag: Joi.any(),

      uid: Joi.number(),

      promo_meta: Joi.any(),

      rating_count: Joi.number(),

      item_code: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      next_id: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      page: this.InventoryPage().required(),

      items: Joi.array().items(Joi.any()),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      enabled: Joi.boolean(),

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_invoice: this.InvoiceCredSerializer(),

      e_waybill: this.InvoiceCredSerializer(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      stage: Joi.string().allow(""),

      verified_by: this.UserSerializer2(),

      verified_on: Joi.string().allow(""),

      addresses: Joi.array().items(this.GetAddressSerializer()),

      modified_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      created_by: this.UserSerializer2(),

      company_type: Joi.string().allow(""),

      uid: Joi.number(),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_by: this.UserSerializer2(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile_no: this.SellerPhoneNumber().required(),
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
      opening: this.LocationTimingSerializer(),

      closing: this.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      weekday: Joi.string().allow("").required(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      stage: Joi.string().allow(""),

      contact_numbers: Joi.array().items(this.SellerPhoneNumber()),

      verified_by: this.UserSerializer1(),

      display_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      gst_credentials: this.InvoiceDetailsSerializer(),

      code: Joi.string().allow("").required(),

      integration_type: this.LocationIntegrationType(),

      created_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      company: this.GetCompanySerializer(),

      warnings: Joi.any(),

      _custom_json: Joi.any(),

      phone_number: Joi.string().allow("").required(),

      product_return_config: this.ProductReturnConfigSerializer(),

      manager: this.LocationManagerSerializer(),

      verified_on: Joi.string().allow(""),

      documents: Joi.array().items(this.Document()),

      store_type: Joi.string().allow(""),

      created_by: this.UserSerializer1(),

      uid: Joi.number(),

      timing: Joi.array().items(this.LocationDayWiseSerializer()),

      address: this.GetAddressSerializer().required(),

      name: Joi.string().allow("").required(),

      modified_by: this.UserSerializer1(),
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

  static ApplicationStoreJson() {
    return Joi.object({
      _custom_json: Joi.any().required(),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static CompanyTaxesSerializer() {
    return Joi.object({
      enable: Joi.boolean(),

      rate: Joi.number(),

      effective_date: Joi.string().allow(""),
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

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      business_type: Joi.string().allow("").required(),

      business_country_info: this.BusinessCountryInfo(),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      verified_by: this.UserSerializer(),

      mode: Joi.string().allow(""),

      taxes: Joi.array().items(this.CompanyTaxesSerializer()),

      uid: Joi.number().required(),

      addresses: Joi.array().items(this.GetAddressSerializer()),

      _custom_json: Joi.any(),

      business_details: this.BusinessDetails(),

      created_by: this.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      documents: Joi.array().items(this.Document()),

      contact_details: this.ContactDetails(),

      warnings: Joi.any(),

      franchise_enabled: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      modified_by: this.UserSerializer(),

      verified_on: Joi.string().allow(""),

      business_info: Joi.string().allow(""),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      longitude: Joi.number().required(),

      latitude: Joi.number().required(),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      enable: Joi.boolean(),

      rate: Joi.number(),

      effective_date: Joi.string().allow(""),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      addresses: Joi.array().items(this.CreateUpdateAddressSerializer()),

      _custom_json: Joi.any(),

      franchise_enabled: Joi.boolean(),

      business_details: this.BusinessDetails(),

      business_type: Joi.string().allow(""),

      taxes: Joi.array().items(this.CompanyTaxesSerializer1()),

      business_info: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      documents: Joi.array().items(this.Document()),

      name: Joi.string().allow(""),

      contact_details: this.ContactDetails(),

      warnings: Joi.any(),

      company_type: Joi.string().allow(""),
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
      pending: Joi.number(),

      verified: Joi.number(),
    });
  }

  static MetricsSerializer() {
    return Joi.object({
      company_documents: this.DocumentsObj(),

      brand: this.DocumentsObj(),

      store: this.DocumentsObj(),

      stage: Joi.string().allow(""),

      product: this.DocumentsObj(),

      store_documents: this.DocumentsObj(),

      uid: Joi.number(),
    });
  }

  static BrandBannerSerializer() {
    return Joi.object({
      portrait: Joi.string().allow(""),

      landscape: Joi.string().allow(""),
    });
  }

  static GetBrandResponseSerializer() {
    return Joi.object({
      logo: Joi.string().allow(""),

      _locale_language: Joi.any(),

      stage: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      verified_by: this.UserSerializer(),

      mode: Joi.string().allow(""),

      banner: this.BrandBannerSerializer(),

      description: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      created_by: this.UserSerializer(),

      warnings: Joi.any(),

      modified_on: Joi.string().allow(""),

      modified_by: this.UserSerializer(),

      verified_on: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      logo: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      banner: this.BrandBannerSerializer(),

      description: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      brand_tier: Joi.string().allow(""),

      company_id: Joi.number(),

      uid: Joi.number(),
    });
  }

  static CompanySocialAccounts() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),
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
      addresses: Joi.array().items(this.GetAddressSerializer()),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      verified_by: this.UserSerializer(),

      verified_on: Joi.string().allow(""),

      modified_by: this.UserSerializer(),

      created_by: this.UserSerializer(),

      business_type: Joi.string().allow("").required(),

      details: this.CompanyDetails(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      business_country_info: this.BusinessCountryInfo(),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      uid: Joi.number(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      verified_by: this.UserSerializer(),

      verified_on: Joi.string().allow(""),

      modified_by: this.UserSerializer(),

      created_by: this.UserSerializer(),

      brand: this.GetBrandResponseSerializer(),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      company: this.CompanySerializer(),

      warnings: Joi.any(),

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
      brands: Joi.array().items(Joi.number()).required(),

      company: Joi.number().required(),

      uid: Joi.number(),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      code: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      contact_numbers: Joi.array().items(this.SellerPhoneNumber()),

      documents: Joi.array().items(this.Document()),

      timing: Joi.array().items(this.LocationDayWiseSerializer()),

      display_name: Joi.string().allow("").required(),

      address: this.GetAddressSerializer().required(),

      name: Joi.string().allow("").required(),

      manager: this.LocationManagerSerializer(),

      stage: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      company: Joi.number().required(),

      gst_credentials: this.InvoiceDetailsSerializer(),

      product_return_config: this.ProductReturnConfigSerializer(),

      warnings: Joi.any(),

      uid: Joi.number(),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(this.LocationSerializer()),
    });
  }

  static _ArticleQuery() {
    return Joi.object({
      size: Joi.string().allow(""),

      item_id: Joi.number(),

      ignored_stores: Joi.array().items(Joi.number()),
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
      meta: Joi.any(),

      query: this._ArticleQuery(),

      quantity: Joi.number(),

      group_id: Joi.string().allow(""),

      article_assignment: this._ArticleAssignment(),
    });
  }

  static AssignStoreRequestValidator() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()),

      pincode: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      channel_type: Joi.string().allow(""),

      articles: Joi.array().items(this._AssignStoreArticle()),

      company_id: Joi.number(),

      channel_identifier: Joi.string().allow(""),
    });
  }

  static AssignStoreResponseSerializer() {
    return Joi.object({
      price_marked: Joi.number(),

      size: Joi.string().allow(""),

      status: Joi.boolean(),

      meta: Joi.any(),

      company_id: Joi.number(),

      quantity: Joi.number(),

      s_city: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      store_pincode: Joi.string().allow(""),

      index: Joi.number(),

      preice_effective: Joi.number(),

      article_assignment: this._ArticleAssignment(),

      item_id: Joi.number(),

      store_id: Joi.number(),

      _id: Joi.string().allow(""),
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

      gstores: Joi.array().items(this.GStore()),
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
      integration: Joi.string().allow("").required(),

      integration_data: Joi.object().pattern(/\S/, Joi.any()),

      company_name: Joi.string().allow(""),

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
      integration: Joi.string().allow("").required(),

      company_name: Joi.string().allow("").required(),

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

      mapping: Joi.object().pattern(/\S/, this.PropBeanConfig()),

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

      phone: this.InformationPhone(),

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
      name: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      logo: this.SecureUrl().required(),

      mobile_logo: this.SecureUrl().required(),

      favicon: this.SecureUrl().required(),

      banner: this.SecureUrl().required(),

      domain: this.Domain(),

      domains: Joi.array().items(this.Domain()),

      _id: Joi.string().allow(""),
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

  static OrderingStore() {
    return Joi.object({
      address: this.OptedStoreAddress(),

      _id: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      pincode: Joi.number(),

      code: Joi.string().allow(""),
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

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static CouponAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null),

      txn_mode: Joi.string().allow(""),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      value_type: Joi.string().allow("").required(),

      applicable_on: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      is_exact: Joi.boolean(),

      type: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      next_schedule: Joi.array().items(Joi.any()),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      duration: Joi.number().allow(null),
    });
  }

  static State() {
    return Joi.object({
      is_archived: Joi.boolean(),

      is_display: Joi.boolean(),

      is_public: Joi.boolean(),
    });
  }

  static DisplayMetaDict() {
    return Joi.object({
      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),
    });
  }

  static DisplayMeta() {
    return Joi.object({
      auto: this.DisplayMetaDict(),

      remove: this.DisplayMetaDict(),

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      apply: this.DisplayMetaDict(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static Validation() {
    return Joi.object({
      user_registered_after: Joi.string().allow("").allow(null),

      anonymous: Joi.boolean(),

      app_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Rule() {
    return Joi.object({
      value: Joi.number(),

      discount_qty: Joi.number(),

      key: Joi.number(),

      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static UsesRemaining() {
    return Joi.object({
      app: Joi.number(),

      user: Joi.number(),

      total: Joi.number(),
    });
  }

  static UsesRestriction() {
    return Joi.object({
      maximum: this.UsesRemaining(),

      remaining: this.UsesRemaining(),
    });
  }

  static PaymentAllowValue() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  static PaymentModes() {
    return Joi.object({
      uses: this.PaymentAllowValue(),

      iins: Joi.array().items(Joi.string().allow("")),

      networks: Joi.array().items(Joi.string().allow("")),

      types: Joi.array().items(Joi.string().allow("")),

      codes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PostOrder() {
    return Joi.object({
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
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
      uses: this.UsesRestriction(),

      platforms: Joi.array().items(Joi.string().allow("")),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      post_order: this.PostOrder(),

      bulk_bundle: this.BulkBundleRestriction(),

      user_groups: Joi.array().items(Joi.number()),

      ordering_stores: Joi.array().items(Joi.number()),

      coupon_allowed: Joi.boolean(),

      price_range: this.PriceRange(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      identifiers: this.Identifier().required(),

      ownership: this.Ownership().required(),

      author: this.CouponAuthor(),

      date_meta: this.CouponDateMeta(),

      action: this.CouponAction(),

      rule_definition: this.RuleDefinition().required(),

      _schedule: this.CouponSchedule(),

      state: this.State(),

      display_meta: this.DisplayMeta().required(),

      validity: this.Validity().required(),

      validation: this.Validation(),

      rule: Joi.array().items(this.Rule()).required(),

      type_slug: Joi.string().allow("").required(),

      restrictions: this.Restrictions(),

      code: Joi.string().allow("").required(),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static OperationErrorResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static CouponUpdate() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      identifiers: this.Identifier().required(),

      ownership: this.Ownership().required(),

      author: this.CouponAuthor(),

      date_meta: this.CouponDateMeta(),

      action: this.CouponAction(),

      rule_definition: this.RuleDefinition().required(),

      _schedule: this.CouponSchedule(),

      state: this.State(),

      display_meta: this.DisplayMeta().required(),

      validity: this.Validity().required(),

      validation: this.Validation(),

      rule: Joi.array().items(this.Rule()).required(),

      type_slug: Joi.string().allow("").required(),

      restrictions: this.Restrictions(),

      code: Joi.string().allow("").required(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      schedule: this.CouponSchedule(),

      archive: Joi.boolean(),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),
    });
  }

  static Visibility() {
    return Joi.object({
      pdp: Joi.boolean().required(),

      coupon_list: Joi.boolean().required(),
    });
  }

  static CompareObject() {
    return Joi.object({
      equals: Joi.number(),

      less_than_equals: Joi.number(),

      less_than: Joi.number(),

      greater_than_equals: Joi.number(),

      greater_than: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_exclude_id: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_brand: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_category: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),

      cart_quantity: this.CompareObject(),

      cart_unique_item_amount: this.CompareObject(),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      all_items: Joi.boolean(),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: this.CompareObject(),

      cart_total: this.CompareObject(),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null).required(),

      action_type: Joi.string().allow("").required(),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      next_schedule: Joi.array().items(Joi.any()),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),

      published: Joi.boolean().required(),

      duration: Joi.number().allow(null),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      code: Joi.string().allow(""),

      discount_percentage: Joi.number(),

      discount_amount: Joi.number(),

      max_discount_amount: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      discount_price: Joi.number(),

      apportion_discount: Joi.boolean(),

      max_offer_quantity: Joi.number(),

      partial_can_ret: Joi.boolean(),

      min_offer_quantity: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      offer: this.DiscountOffer().required(),

      item_criteria: this.ItemCriteria().required(),

      buy_condition: Joi.string().allow("").required(),

      discount_type: Joi.string().allow("").required(),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static UserRegistered() {
    return Joi.object({
      start: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),
    });
  }

  static UsesRemaining1() {
    return Joi.object({
      user: Joi.number(),

      total: Joi.number(),
    });
  }

  static UsesRestriction1() {
    return Joi.object({
      maximum: this.UsesRemaining1(),

      remaining: this.UsesRemaining1(),
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

  static PostOrder1() {
    return Joi.object({
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
    });
  }

  static Restrictions1() {
    return Joi.object({
      user_registered: this.UserRegistered(),

      uses: this.UsesRestriction1().required(),

      platforms: Joi.array().items(Joi.string().allow("")),

      payments: Joi.array().items(this.PromotionPaymentModes()),

      post_order: this.PostOrder1(),

      order_quantity: Joi.number(),

      user_id: Joi.array().items(Joi.string().allow("")),

      user_groups: Joi.array().items(Joi.number()),

      anonymous_users: Joi.boolean(),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      currency: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      ownership: this.Ownership1().required(),

      display_meta: this.DisplayMeta1().required(),

      visiblility: this.Visibility(),

      apply_all_discount: Joi.boolean(),

      code: Joi.string().allow(""),

      apply_priority: Joi.number(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      promo_group: Joi.string().allow("").required(),

      post_order_action: this.PromotionAction(),

      stackable: Joi.boolean(),

      date_meta: this.PromotionDateMeta(),

      application_id: Joi.string().allow("").required(),

      _schedule: this.PromotionSchedule(),

      _custom_json: Joi.any(),

      promotion_type: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow(""),

      discount_rules: Joi.array().items(this.DiscountRule()).required(),

      author: this.PromotionAuthor(),

      restrictions: this.Restrictions1(),

      apply_exclusive: Joi.string().allow("").allow(null),
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
      currency: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      ownership: this.Ownership1().required(),

      display_meta: this.DisplayMeta1().required(),

      visiblility: this.Visibility(),

      apply_all_discount: Joi.boolean(),

      code: Joi.string().allow(""),

      apply_priority: Joi.number(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      promo_group: Joi.string().allow("").required(),

      post_order_action: this.PromotionAction(),

      stackable: Joi.boolean(),

      date_meta: this.PromotionDateMeta(),

      application_id: Joi.string().allow("").required(),

      _schedule: this.PromotionSchedule(),

      _custom_json: Joi.any(),

      promotion_type: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow(""),

      discount_rules: Joi.array().items(this.DiscountRule()).required(),

      author: this.PromotionAuthor(),

      restrictions: this.Restrictions1(),

      apply_exclusive: Joi.string().allow("").allow(null),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      currency: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      ownership: this.Ownership1().required(),

      display_meta: this.DisplayMeta1().required(),

      visiblility: this.Visibility(),

      apply_all_discount: Joi.boolean(),

      code: Joi.string().allow(""),

      apply_priority: Joi.number(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      promo_group: Joi.string().allow("").required(),

      post_order_action: this.PromotionAction(),

      stackable: Joi.boolean(),

      date_meta: this.PromotionDateMeta(),

      application_id: Joi.string().allow("").required(),

      _schedule: this.PromotionSchedule(),

      _custom_json: Joi.any(),

      promotion_type: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow(""),

      discount_rules: Joi.array().items(this.DiscountRule()).required(),

      author: this.PromotionAuthor(),

      restrictions: this.Restrictions1(),

      apply_exclusive: Joi.string().allow("").allow(null),
    });
  }

  static PromotionPartialUpdate() {
    return Joi.object({
      schedule: this.PromotionSchedule(),

      archive: Joi.boolean(),
    });
  }

  static ActivePromosResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      type: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      entity_type: Joi.string().allow(""),

      example: Joi.string().allow(""),
    });
  }

  static CartItem() {
    return Joi.object({
      product_id: Joi.string().allow("").required(),

      quantity: Joi.number(),

      size: Joi.string().allow("").required(),
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

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      marked: Joi.number(),

      effective: Joi.number(),

      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: this.ProductPrice(),

      base: this.ProductPrice(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductAction() {
    return Joi.object({
      query: this.ActionQuery(),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      uid: Joi.number(),

      categories: Joi.array().items(this.CategoryInfo()),

      action: this.ProductAction(),

      name: Joi.string().allow(""),

      images: Joi.array().items(this.ProductImage()),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      brand: this.BaseInfo(),
    });
  }

  static BasePrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static ArticlePriceInfo() {
    return Joi.object({
      converted: this.BasePrice(),

      base: this.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      seller: this.BaseInfo(),

      store: this.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      price: this.ArticlePriceInfo(),

      size: Joi.string().allow(""),

      type: Joi.string().allow(""),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),

      offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      raw_offer: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      free_gift_item_details: this.FreeGiftItem(),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      discount_rules: Joi.array().items(this.DiscountRulesApp()),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),

      buy_rules: Joi.array().items(this.BuyRules()),

      applied_free_articles: Joi.array().items(this.AppliedFreeArticles()),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      coupon_message: Joi.string().allow(""),

      quantity: Joi.number(),

      promo_meta: this.PromoMeta(),

      message: Joi.string().allow(""),

      price_per_unit: this.ProductPriceInfo(),

      availability: this.ProductAvailability(),

      price: this.ProductPriceInfo(),

      product: this.CartProduct(),

      key: Joi.string().allow(""),

      article: this.ProductArticle(),

      is_set: Joi.boolean(),

      bulk_offer: Joi.any(),

      promotions_applied: Joi.array().items(this.AppliedPromotion()),

      discount: Joi.string().allow(""),

      identifiers: this.CartProductIdentifer().required(),

      parent_item_identifiers: Joi.any(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      mrp_total: Joi.number(),

      subtotal: Joi.number(),

      cod_charge: Joi.number(),

      fynd_cash: Joi.number(),

      total: Joi.number(),

      vog: Joi.number(),

      discount: Joi.number(),

      coupon: Joi.number(),

      you_saved: Joi.number(),

      convenience_fee: Joi.number(),

      gst_charges: Joi.number(),

      delivery_charge: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),

      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      total: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      value: Joi.number(),

      uid: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      coupon_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      type: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      raw: this.RawBreakup(),

      loyalty_points: this.LoyaltyPoints(),

      coupon: this.CouponBreakup(),

      display: Joi.array().items(this.DisplayBreakup()),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      items: Joi.array().items(this.CartProductInfo()),

      message: Joi.string().allow(""),

      breakup_values: this.CartBreakup(),
    });
  }

  static OpenApiErrorResponse() {
    return Joi.object({
      success: Joi.boolean(),

      errors: Joi.any(),

      message: Joi.string().allow(""),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      email: Joi.string().allow(""),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      area_code: Joi.string().allow("").required(),

      address: Joi.string().allow(""),

      phone: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      pincode: Joi.number(),

      area: Joi.string().allow(""),
    });
  }

  static OpenApiCartServiceabilityRequest() {
    return Joi.object({
      cart_items: this.CartItem(),

      shipping_address: this.ShippingAddress().required(),
    });
  }

  static PromiseFormatted() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static PromiseTimestamp() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static ShipmentPromise() {
    return Joi.object({
      formatted: this.PromiseFormatted(),

      timestamp: this.PromiseTimestamp(),
    });
  }

  static OpenApiCartServiceabilityResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      items: Joi.array().items(this.CartProductInfo()),

      message: Joi.string().allow(""),

      breakup_values: this.CartBreakup(),

      delivery_promise: this.ShipmentPromise(),
    });
  }

  static CartItemMeta() {
    return Joi.object({
      primary_item: Joi.boolean(),

      group_id: Joi.string().allow(""),
    });
  }

  static OpenApiFiles() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      quantity: Joi.number(),

      cod_charges: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      meta: this.CartItemMeta(),

      payment_methods: Joi.array()
        .items(this.MultiTenderPaymentMethod())
        .required(),

      coupon_effective_discount: Joi.number().required(),

      amount_paid: Joi.number().required(),

      discount: Joi.number().required(),

      employee_discount: Joi.number(),

      loyalty_discount: Joi.number(),

      size: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      files: Joi.array().items(this.OpenApiFiles()),

      extra_meta: Joi.any(),

      product_id: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      price_marked: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      billing_address: this.ShippingAddress().required(),

      gstin: Joi.string().allow("").allow(null),

      cashback_applied: Joi.number().required(),

      payment_methods: Joi.array()
        .items(this.MultiTenderPaymentMethod())
        .required(),

      cart_value: Joi.number().required(),

      coupon_value: Joi.number().required(),

      coupon: Joi.string().allow(""),

      delivery_charges: Joi.number().required(),

      cart_items: Joi.array().items(this.OpenApiOrderItem()).required(),

      shipping_address: this.ShippingAddress(),

      currency_code: Joi.string().allow(""),

      comment: Joi.string().allow("").allow(null),

      cod_charges: Joi.number().required(),

      order_id: Joi.string().allow(""),

      employee_discount: Joi.any(),

      files: Joi.array().items(this.OpenApiFiles()),

      affiliate_order_id: Joi.string().allow(""),

      loyalty_discount: Joi.number(),

      payment_mode: Joi.string().allow(""),

      coupon_code: Joi.string().allow("").required(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      order_ref_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      fynd_credits: Joi.any(),

      gstin: Joi.string().allow("").allow(null),

      articles: Joi.array().items(Joi.any()).required(),

      _id: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),

      bulk_coupon_discount: Joi.number().allow(null),

      pick_up_customer_details: Joi.any().allow(null),

      coupon: Joi.any().allow(null),

      shipments: Joi.array().items(Joi.any()),

      uid: Joi.number().required(),

      cashback: Joi.any().required(),

      cod_charges: Joi.any(),

      payments: Joi.any().allow(null),

      merge_qty: Joi.boolean().allow(null),

      user_id: Joi.string().allow("").required(),

      buy_now: Joi.boolean(),

      meta: Joi.any().allow(null),

      promotion: Joi.any(),

      last_modified: Joi.string().allow("").required(),

      delivery_charges: Joi.any(),

      is_active: Joi.boolean(),

      is_default: Joi.boolean().required(),

      comment: Joi.string().allow("").allow(null),

      is_archive: Joi.boolean(),

      expire_at: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      checkout_mode: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      fc_index_map: Joi.array().items(Joi.number()),

      discount: Joi.number(),

      payment_mode: Joi.string().allow("").allow(null),

      cart_value: Joi.number(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      success: Joi.boolean(),

      items: Joi.array().items(this.AbandonedCart()),

      message: Joi.string().allow(""),

      page: this.Page(),

      result: Joi.any(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      display: Joi.string().allow(""),

      quantity: Joi.number(),

      seller_id: Joi.number(),

      article_assignment: Joi.any(),

      article_id: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      pos: Joi.boolean(),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      store_id: Joi.number(),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(this.AddProductCart()),
    });
  }

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      currency: this.CartCurrency(),

      gstin: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: this.PaymentSelectionLock(),

      items: Joi.array().items(this.CartProductInfo()),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      breakup_values: this.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),

      comment: Joi.string().allow(""),

      delivery_promise: this.ShipmentPromise(),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      success: Joi.boolean(),

      cart: this.CartDetailResponse(),

      message: Joi.string().allow(""),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      item_index: Joi.number(),

      article_id: Joi.string().allow(""),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      identifiers: this.CartProductIdentifer().required(),

      parent_item_identifiers: Joi.any(),
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
      success: Joi.boolean(),

      cart: this.CartDetailResponse(),

      message: Joi.string().allow(""),
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
module.exports = Validator;
