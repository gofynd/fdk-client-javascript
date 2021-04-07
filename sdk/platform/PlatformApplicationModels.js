const Joi = require("joi");
class Validator {
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

      next_id: Joi.string(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      type: Joi.string().required(),

      size: Joi.number(),
    });
  }

  static TicketHistoryList() {
    return Joi.object({
      docs: Joi.array().items(this.TicketHistory()),

      limit: Joi.number(),

      page: Joi.number(),

      pages: Joi.number(),

      total: Joi.number(),
    });
  }

  static CustomFormList() {
    return Joi.object({
      docs: Joi.array().items(this.CustomForm()),

      limit: Joi.number(),

      page: Joi.number(),

      pages: Joi.number(),

      total: Joi.number(),
    });
  }

  static CreateCustomFormPayload() {
    return Joi.object({
      slug: Joi.string().required(),

      title: Joi.string().required(),

      inputs: Joi.array().items(Joi.object()).required(),

      description: Joi.string(),

      header_image: Joi.string(),

      should_notify: Joi.boolean(),

      success_message: Joi.string(),

      poll_for_assignment: this.PollForAssignment(),
    });
  }

  static EditCustomFormPayload() {
    return Joi.object({
      title: Joi.string().required(),

      inputs: Joi.array().items(Joi.object()).required(),

      description: Joi.string(),

      header_image: Joi.string(),

      should_notify: Joi.boolean(),

      login_required: Joi.boolean(),

      success_message: Joi.string(),

      poll_for_assignment: this.PollForAssignment(),
    });
  }

  static EditTicketPayload() {
    return Joi.object({
      content: this.TicketContent(),

      category: Joi.string(),

      source: Joi.string(),

      status: Joi.string(),

      priority: Joi.string(),

      assigned_to: this.AgentChangePayload(),

      tags: Joi.array().items(Joi.string()),
    });
  }

  static AgentChangePayload() {
    return Joi.object({
      agent_id: Joi.string().required(),
    });
  }

  static CreateVideoRoomResponse() {
    return Joi.object({
      unique_name: Joi.string().required(),
    });
  }

  static CloseVideoRoomResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static CreateVideoRoomPayload() {
    return Joi.object({
      unique_name: Joi.string().required(),

      notify: Joi.array().items(Joi.object()),
    });
  }

  static Filter() {
    return Joi.object({
      priorities: Joi.array().items(this.Priority()).required(),

      categories: Joi.array().items(this.TicketCategory()),

      statuses: Joi.array().items(this.Status()).required(),

      assignees: Joi.array().items(Joi.object()).required(),
    });
  }

  static TicketHistoryPayload() {
    return Joi.object({
      value: Joi.object().required(),

      type: Joi.string().required(),
    });
  }

  static CustomFormSubmissionPayload() {
    return Joi.object({
      response: Joi.array().items(this.KeyValue()).required(),
    });
  }

  static KeyValue() {
    return Joi.object({
      key: Joi.string().required(),

      value: Joi.string().required(),
    });
  }

  static GetTokenForVideoRoomResponse() {
    return Joi.object({
      access_token: Joi.string().required(),
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

      identity: Joi.string(),

      status: Joi.string(),
    });
  }

  static UserSchema() {
    return Joi.object({
      first_name: Joi.string(),

      last_name: Joi.string(),

      phone_numbers: Joi.array().items(this.PhoneNumber()),

      emails: Joi.array().items(this.Email()),

      gender: Joi.string(),

      active: Joi.boolean(),

      profile_pic_url: Joi.string(),

      username: Joi.string(),

      account_type: Joi.string(),

      uid: Joi.string(),

      debug: this.Debug(),

      has_old_password_hash: Joi.boolean(),

      _id: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),
    });
  }

  static PhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      phone: Joi.string(),

      country_code: Joi.number(),
    });
  }

  static Email() {
    return Joi.object({
      primary: Joi.boolean(),

      verified: Joi.boolean(),

      email: Joi.string(),

      active: Joi.boolean(),
    });
  }

  static Debug() {
    return Joi.object({
      source: Joi.string(),

      platform: Joi.string(),
    });
  }

  static SubmitCustomFormResponse() {
    return Joi.object({
      ticket: this.Ticket().required(),
    });
  }

  static TicketContext() {
    return Joi.object({
      application_id: Joi.string(),

      company_id: Joi.string().required(),
    });
  }

  static CreatedOn() {
    return Joi.object({
      user_agent: Joi.string().required(),
    });
  }

  static TicketAsset() {
    return Joi.object({
      display: Joi.string(),

      value: Joi.string().required(),

      type: Joi.string().required(),
    });
  }

  static TicketContent() {
    return Joi.object({
      title: Joi.string().required(),

      description: Joi.string(),

      attachments: Joi.array().items(this.TicketAsset()),
    });
  }

  static AddTicketPayload() {
    return Joi.object({
      status: Joi.string().required(),

      priority: Joi.string().required(),

      category: Joi.string().required(),

      content: this.TicketContent().required(),
    });
  }

  static Priority() {
    return Joi.object({
      key: Joi.string().required(),

      display: Joi.string().required(),

      color: Joi.string().required(),
    });
  }

  static Status() {
    return Joi.object({
      key: Joi.string().required(),

      display: Joi.string().required(),

      color: Joi.string().required(),
    });
  }

  static TicketCategory() {
    return Joi.object({
      key: Joi.string().required(),

      display: Joi.string().required(),

      form: this.CustomForm(),
    });
  }

  static SubmitButton() {
    return Joi.object({
      title: Joi.string().required(),

      title_color: Joi.string().required(),

      background_color: Joi.string().required(),
    });
  }

  static PollForAssignment() {
    return Joi.object({
      duration: Joi.number().required(),

      message: Joi.string().required(),

      success_message: Joi.string().required(),

      failure_message: Joi.string().required(),
    });
  }

  static CustomForm() {
    return Joi.object({
      application_id: Joi.string().required(),

      slug: Joi.string().required(),

      header_image: Joi.string(),

      title: Joi.string().required(),

      description: Joi.string(),

      login_required: Joi.boolean().required(),

      should_notify: Joi.boolean().required(),

      success_message: Joi.string(),

      submit_button: this.SubmitButton(),

      inputs: Joi.array().items(Joi.object()).required(),

      created_on: this.CreatedOn(),

      created_by: Joi.object(),

      poll_for_assignment: this.PollForAssignment(),

      _id: Joi.string().required(),
    });
  }

  static TicketHistory() {
    return Joi.object({
      type: Joi.string().required(),

      value: Joi.object().required(),

      ticket_id: Joi.string().required(),

      created_on: this.CreatedOn(),

      created_by: Joi.object(),

      _id: Joi.string().required(),

      updated_at: Joi.string(),

      created_at: Joi.string(),
    });
  }

  static Ticket() {
    return Joi.object({
      context: this.TicketContext(),

      created_on: this.CreatedOn(),

      response_id: Joi.string(),

      content: this.TicketContent(),

      ticket_id: Joi.string().required(),

      category: this.TicketCategory().required(),

      source: Joi.string().required(),

      status: this.Status().required(),

      priority: this.Priority().required(),

      created_by: Joi.object(),

      assigned_to: Joi.object(),

      tags: Joi.array().items(Joi.string()),

      _custom_json: Joi.object(),

      _id: Joi.string(),

      updated_at: Joi.string(),

      created_at: Joi.string(),
    });
  }

  static PaginationSchema() {
    return Joi.object({
      size: Joi.number(),

      item_total: Joi.number(),

      has_next: Joi.boolean(),

      type: Joi.string(),

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
      theme_id: Joi.string(),
    });
  }

  static UpgradableThemeSchema() {
    return Joi.object({
      parent_theme: Joi.string(),

      applied_theme: Joi.string(),

      upgrade: Joi.boolean(),
    });
  }

  static FontsSchema() {
    return Joi.object({
      items: this.FontsSchemaItems(),

      kind: Joi.string(),
    });
  }

  static BlitzkriegApiErrorSchema() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static BlitzkriegNotFoundSchema() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static BlitzkriegInternalServerErrorSchema() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static FontsSchemaItems() {
    return Joi.object({
      family: Joi.string(),

      variants: Joi.array().items(Joi.string()),

      subsets: Joi.array().items(Joi.string()),

      version: Joi.string(),

      last_modified: Joi.string(),

      files: this.FontsSchemaItemsFiles(),

      category: Joi.string(),

      kind: Joi.string(),
    });
  }

  static FontsSchemaItemsFiles() {
    return Joi.object({
      regular: Joi.string(),

      italic: Joi.string(),

      bold: Joi.string(),
    });
  }

  static ThemesSchema() {
    return Joi.object({
      application: Joi.string(),

      applied: Joi.boolean(),

      customized: Joi.boolean(),

      published: Joi.boolean(),

      archived: Joi.boolean(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      version: Joi.string(),

      parent_theme_version: Joi.string(),

      parent_theme: Joi.string(),

      information: this.Information(),

      tags: Joi.array().items(Joi.string()),

      src: this.Src(),

      assets: this.AssetsSchema(),

      available_pages: this.AvailablePages(),

      available_sections: Joi.array().items(this.availableSectionSchema()),

      sections: Joi.array().items(this.sectionSchema()),

      constants: Joi.object(),

      styles: Joi.object(),

      config: this.Config(),

      settings: Joi.object(),

      font: this.Font(),

      _id: Joi.string(),

      __v: Joi.number(),

      colors: this.Colors(),
    });
  }

  static pagesSchema() {
    return Joi.object({
      text: Joi.string(),

      path: Joi.string(),

      type: Joi.string(),

      value: Joi.string(),

      sections: this.Sections(),
    });
  }

  static availableSectionSchema() {
    return Joi.object({
      blocks: this.Blocks(),

      name: Joi.string(),

      label: Joi.string(),

      props: Joi.object(),
    });
  }

  static sectionSchema() {
    return Joi.object({
      page_key: Joi.string(),

      page_sections: this.PageSections(),
    });
  }

  static Information() {
    return Joi.object({
      images: this.Images(),

      features: Joi.array().items(Joi.string()),

      name: Joi.string(),

      description: Joi.string(),
    });
  }

  static Images() {
    return Joi.object({
      desktop: Joi.array().items(Joi.string()),

      android: Joi.array().items(Joi.string()),

      ios: Joi.array().items(Joi.string()),

      thumbnail: Joi.array().items(Joi.string()),
    });
  }

  static Src() {
    return Joi.object({
      link: Joi.string(),
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
      link: Joi.string(),
    });
  }

  static CommonJs() {
    return Joi.object({
      link: Joi.string(),
    });
  }

  static Css() {
    return Joi.object({
      link: Joi.string(),
    });
  }

  static AvailablePages() {
    return Joi.object({
      path: Joi.string(),

      type: Joi.string(),

      text: Joi.string(),

      value: Joi.string(),

      seo: this.Seo(),

      props: Joi.object(),

      sections: this.Sections(),
    });
  }

  static Seo() {
    return Joi.object({
      title: Joi.string(),

      description: Joi.string(),
    });
  }

  static Sections() {
    return Joi.object({
      attributes: Joi.string(),
    });
  }

  static Config() {
    return Joi.object({
      preset: this.Preset(),

      global_schema: this.GlobalSchema(),

      current: Joi.string(),

      list: this.ListSchema(),
    });
  }

  static Preset() {
    return Joi.object({
      sections: this.sectionSchema(),
    });
  }

  static GlobalSchema() {
    return Joi.object({
      props: Joi.object(),
    });
  }

  static ListSchema() {
    return Joi.object({
      global: Joi.object(),

      page: this.ConfigPage(),

      name: Joi.string(),
    });
  }

  static Colors() {
    return Joi.object({
      bg_color: Joi.string(),

      primary_color: Joi.string(),

      secondary_color: Joi.string(),

      accent_color: Joi.string(),

      link_color: Joi.string(),

      button_secondary_color: Joi.string(),
    });
  }

  static Custom() {
    return Joi.object({
      props: Joi.object(),
    });
  }

  static ConfigPage() {
    return Joi.object({
      settings: Joi.object(),

      page: Joi.string(),
    });
  }

  static Font() {
    return Joi.object({
      family: Joi.string(),

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
      name: Joi.string(),

      file: Joi.string(),
    });
  }

  static SemiBold() {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  }

  static Bold() {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  }

  static Light() {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  }

  static Regular() {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  }

  static Blocks() {
    return Joi.object({
      type: Joi.string(),

      name: Joi.string(),

      props: this.BlocksProps(),
    });
  }

  static BlocksProps() {
    return Joi.object({
      id: Joi.string(),

      label: Joi.string(),

      type: Joi.string(),
    });
  }

  static PageSections() {
    return Joi.object({
      blocks: this.PageSectionsBlocks(),

      name: Joi.string(),

      label: Joi.string(),

      props: Joi.object(),

      preset: Joi.object(),

      predicate: this.Predicate(),
    });
  }

  static PageSectionsBlocks() {
    return Joi.object({
      type: Joi.string(),

      name: Joi.string(),

      props: this.PageSectionsBlocksProps(),
    });
  }

  static PageSectionsBlocksProps() {
    return Joi.object({
      id: Joi.string(),

      label: Joi.string(),

      type: Joi.string(),
    });
  }

  static Predicate() {
    return Joi.object({
      screen: this.Screen(),

      user: this.PredicateUserSchema(),

      route: this.Route(),
    });
  }

  static Screen() {
    return Joi.object({
      mobile: Joi.boolean(),

      desktop: Joi.boolean(),

      tablet: Joi.boolean(),
    });
  }

  static PredicateUserSchema() {
    return Joi.object({
      authenticated: Joi.boolean(),

      anonymous: Joi.boolean(),
    });
  }

  static Route() {
    return Joi.object({
      selected: Joi.string(),

      exact_url: Joi.string(),

      query: Joi.object(),
    });
  }

  static EditEmailRequestSchema() {
    return Joi.object({
      email: Joi.string(),
    });
  }

  static SendVerificationLinkMobileRequestSchema() {
    return Joi.object({
      verified: Joi.boolean(),

      active: Joi.boolean(),

      country_code: Joi.string(),

      phone: Joi.string(),

      primary: Joi.boolean(),
    });
  }

  static EditMobileRequestSchema() {
    return Joi.object({
      country_code: Joi.string(),

      phone: Joi.string(),
    });
  }

  static EditProfileRequestSchema() {
    return Joi.object({
      first_name: Joi.string(),

      last_name: Joi.string(),

      mobile: Joi.string(),

      email: Joi.string(),

      gender: Joi.string(),

      dob: Joi.string(),

      profile_pic_url: Joi.string(),

      android_hash: Joi.string(),

      sender: Joi.string(),

      register_token: Joi.string(),
    });
  }

  static SendEmailOtpRequestSchema() {
    return Joi.object({
      email: Joi.string(),

      action: Joi.string(),

      token: Joi.string(),

      register_token: Joi.string(),
    });
  }

  static VerifyOtpRequestSchema() {
    return Joi.object({
      request_id: Joi.string(),

      register_token: Joi.string(),

      otp: Joi.string(),
    });
  }

  static SendMobileOtpRequestSchema() {
    return Joi.object({
      mobile: Joi.string(),

      country_code: Joi.string(),

      action: Joi.string(),

      token: Joi.string(),

      android_hash: Joi.string(),

      force: Joi.string(),
    });
  }

  static UpdatePasswordRequestSchema() {
    return Joi.object({
      old_password: Joi.string(),

      new_password: Joi.string(),
    });
  }

  static FormRegisterRequestSchema() {
    return Joi.object({
      first_name: Joi.string(),

      last_name: Joi.string(),

      gender: Joi.string(),

      email: Joi.string(),

      password: Joi.string(),

      phone: this.FormRegisterRequestSchemaPhone(),

      register_token: Joi.string(),
    });
  }

  static TokenRequestBodySchema() {
    return Joi.object({
      token: Joi.string(),
    });
  }

  static ForgotPasswordRequestSchema() {
    return Joi.object({
      code: Joi.string(),

      password: Joi.string(),
    });
  }

  static CodeRequestBodySchema() {
    return Joi.object({
      code: Joi.string(),
    });
  }

  static SendResetPasswordEmailRequestSchema() {
    return Joi.object({
      email: Joi.string(),

      captcha_code: Joi.string(),
    });
  }

  static PasswordLoginRequestSchema() {
    return Joi.object({
      captcha_code: Joi.string(),

      password: Joi.string(),

      username: Joi.string(),
    });
  }

  static SendOtpRequestSchema() {
    return Joi.object({
      country_code: Joi.string(),

      captcha_code: Joi.string(),

      mobile: Joi.string(),
    });
  }

  static OAuthRequestSchema() {
    return Joi.object({
      is_signed_in: Joi.boolean(),

      oauth2: this.OAuthRequestSchemaOauth2(),

      profile: this.OAuthRequestSchemaProfile(),
    });
  }

  static AuthSuccess() {
    return Joi.object({
      register_token: Joi.string(),

      user_exists: Joi.boolean(),

      user: this.AuthSuccessUser(),
    });
  }

  static SendOtpResponse() {
    return Joi.object({
      resend_timer: Joi.number(),

      resend_token: Joi.string(),

      success: Joi.boolean(),

      request_id: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      country_code: Joi.string(),
    });
  }

  static LoginSuccess() {
    return Joi.object({
      user: this.UserSchema(),
    });
  }

  static VerifyOtpSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      user_exists: Joi.boolean(),
    });
  }

  static ResetPasswordSuccess() {
    return Joi.object({
      status: Joi.string(),
    });
  }

  static RegisterFormSuccess() {
    return Joi.object({
      resend_timer: Joi.number(),

      resend_token: Joi.string(),

      success: Joi.boolean(),

      request_id: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      country_code: Joi.string(),
    });
  }

  static VerifyEmailSuccess() {
    return Joi.object({
      message: Joi.string(),
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

  static OtpSuccess() {
    return Joi.object({
      resend_timer: Joi.number(),

      resend_token: Joi.string(),

      success: Joi.boolean(),

      request_id: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      country_code: Joi.string(),
    });
  }

  static EmailOtpSuccess() {
    return Joi.object({
      resend_token: Joi.string(),
    });
  }

  static SessionListSuccess() {
    return Joi.object({
      sessions: Joi.array().items(Joi.string()),
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

  static UnauthorizedSchema() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static UnauthenticatedSchema() {
    return Joi.object({
      authenticated: Joi.boolean(),
    });
  }

  static NotFoundSchema() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static AuthenticationApiErrorSchema() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static ProfileEditSuccessSchema() {
    return Joi.object({
      email: Joi.string(),

      verify_email_otp: Joi.boolean(),

      verify_email_link: Joi.boolean(),

      verify_mobile_otp: Joi.boolean(),

      user: Joi.string(),

      register_token: Joi.string(),

      user_exists: Joi.boolean(),
    });
  }

  static FormRegisterRequestSchemaPhone() {
    return Joi.object({
      country_code: Joi.string(),

      mobile: Joi.string(),
    });
  }

  static OAuthRequestSchemaOauth2() {
    return Joi.object({
      access_token: Joi.string(),

      expiry: Joi.number(),

      refresh_token: Joi.string(),
    });
  }

  static OAuthRequestSchemaProfile() {
    return Joi.object({
      last_name: Joi.string(),

      image: Joi.string(),

      id: Joi.string(),

      email: Joi.string(),

      full_name: Joi.string(),

      first_name: Joi.string(),
    });
  }

  static AuthSuccessUser() {
    return Joi.object({
      first_name: Joi.string(),

      last_name: Joi.string(),

      debug: this.AuthSuccessUserDebug(),

      active: Joi.boolean(),

      emails: this.AuthSuccessUserEmails(),
    });
  }

  static AuthSuccessUserDebug() {
    return Joi.object({
      platform: Joi.string(),
    });
  }

  static AuthSuccessUserEmails() {
    return Joi.object({
      email: Joi.string(),

      verified: Joi.boolean(),

      primary: Joi.boolean(),

      active: Joi.boolean(),
    });
  }

  static PlatformSchema() {
    return Joi.object({
      display: Joi.string(),

      look_and_feel: this.LookAndFeel(),

      updated_at: Joi.string(),

      active: Joi.boolean(),

      forgot_password: Joi.boolean(),

      login: this.Login(),

      skip_captcha: Joi.boolean(),

      name: Joi.string(),

      meta: this.MetaSchema(),

      _id: Joi.string(),

      social: this.Social(),

      required_fields: this.RequiredFields(),

      register_required_fields: this.RegisterRequiredFields(),

      skip_login: Joi.boolean(),

      flash_card: this.FlashCard(),

      subtext: Joi.string(),

      social_tokens: this.SocialTokens(),

      created_at: Joi.string(),

      register: Joi.boolean(),
    });
  }

  static LookAndFeel() {
    return Joi.object({
      card_position: Joi.string(),

      background_color: Joi.string(),
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
    });
  }

  static RequiredFields() {
    return Joi.object({
      email: this.Email(),

      mobile: this.Mobile(),
    });
  }

  static Mobile() {
    return Joi.object({
      is_required: Joi.boolean(),

      level: Joi.string(),
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

      level: Joi.string(),
    });
  }

  static RegisterRequiredFieldsMobile() {
    return Joi.object({
      is_required: Joi.boolean(),

      level: Joi.string(),
    });
  }

  static FlashCard() {
    return Joi.object({
      text: Joi.string(),

      text_color: Joi.string(),

      background_color: Joi.string(),
    });
  }

  static SocialTokens() {
    return Joi.object({
      facebook: this.Facebook(),

      account_kit: this.Accountkit(),

      google: this.Google(),
    });
  }

  static Facebook() {
    return Joi.object({
      app_id: Joi.string(),
    });
  }

  static Accountkit() {
    return Joi.object({
      app_id: Joi.string(),
    });
  }

  static Google() {
    return Joi.object({
      app_id: Joi.string(),
    });
  }

  static ApplicationLegal() {
    return Joi.object({
      application: Joi.string(),

      tnc: Joi.string(),

      policy: Joi.string(),

      shipping: Joi.string(),

      faq: Joi.array().items(this.ApplicationLegalFAQ()),

      _id: Joi.string(),

      updated_at: Joi.string(),

      created_at: Joi.string(),
    });
  }

  static ApplicationLegalFAQ() {
    return Joi.object({
      question: Joi.string(),

      answer: Joi.string(),
    });
  }

  static SeoComponent() {
    return Joi.object({
      seo: this.SeoSchema(),
    });
  }

  static SeoSchema() {
    return Joi.object({
      app: Joi.string(),

      _id: Joi.string(),

      robots_txt: Joi.string(),

      sitemap_enabled: Joi.boolean(),

      custom_meta_tags: Joi.array().items(Joi.object()),

      details: Joi.object(),

      created_at: Joi.string(),

      updated_at: Joi.string(),
    });
  }

  static CustomMetaTag() {
    return Joi.object({
      name: Joi.string(),

      content: Joi.string(),

      _id: Joi.string(),
    });
  }

  static Detail() {
    return Joi.object({
      title: Joi.string(),

      description: Joi.string(),
    });
  }

  static StorefrontAnnouncement() {
    return Joi.object({
      announcements: this.AnnouncementSchema(),

      refresh_rate: Joi.number(),

      refresh_pages: Joi.array().items(Joi.string()),
    });
  }

  static AnnouncementPageSchema() {
    return Joi.object({
      page_slug: Joi.string(),

      type: Joi.string(),
    });
  }

  static EditorMeta() {
    return Joi.object({
      foreground_color: Joi.string(),

      background_color: Joi.string(),

      content_type: Joi.string(),

      content: Joi.string(),
    });
  }

  static AnnouncementAuthorSchema() {
    return Joi.object({
      created_by: Joi.string(),

      modified_by: Joi.string(),
    });
  }

  static AdminAnnouncementSchema() {
    return Joi.object({
      _id: Joi.string(),

      platforms: Joi.array().items(Joi.string()),

      title: Joi.string(),

      announcement: Joi.string(),

      pages: Joi.array().items(this.AnnouncementPageSchema()),

      editor_meta: this.EditorMeta(),

      author: this.AnnouncementAuthorSchema(),

      created_at: Joi.string(),

      app: Joi.string(),

      modified_at: Joi.string(),

      _schedule: this.ScheduleSchema(),
    });
  }

  static ScheduleSchema() {
    return Joi.object({
      cron: Joi.string(),

      start: Joi.string(),

      end: Joi.string(),

      duration: Joi.number(),

      next_schedule: Joi.array().items(Joi.object()),
    });
  }

  static NextSchedule() {
    return Joi.object({
      start: Joi.string(),

      end: Joi.string(),
    });
  }

  static AnnouncementSchema() {
    return Joi.object({
      page_slug: Joi.array().items(Joi.object()),
    });
  }

  static announcementSchema() {
    return Joi.object({
      announcement: Joi.string(),

      schedule: this.scheduleStartSchema(),
    });
  }

  static scheduleStartSchema() {
    return Joi.object({
      start: Joi.string(),
    });
  }

  static BlogGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Page(),
    });
  }

  static ResourceContent() {
    return Joi.object({
      type: Joi.string(),

      value: Joi.string(),
    });
  }

  static Asset() {
    return Joi.object({
      aspect_ratio: Joi.string(),

      id: Joi.string(),

      secure_url: Joi.string(),
    });
  }

  static Author() {
    return Joi.object({
      designation: Joi.string(),

      id: Joi.string(),

      name: Joi.string(),
    });
  }

  static BlogSchema() {
    return Joi.object({
      _id: Joi.string(),

      _custom_json: Joi.object(),

      application: Joi.string(),

      archived: Joi.boolean(),

      author: Joi.object(),

      content: Joi.array().items(this.ResourceContent()),

      feature_image: Joi.object(),

      published: Joi.boolean(),

      reading_time: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      seo: this.SEO(),

      _schedule: this.CronSchedule(),

      title: Joi.string(),

      date_meta: this.DateMeta(),
    });
  }

  static SEO() {
    return Joi.object({
      description: Joi.string(),

      image: this.SEOImage(),

      title: Joi.string(),
    });
  }

  static SEOImage() {
    return Joi.object({
      url: Joi.string(),
    });
  }

  static DateMeta() {
    return Joi.object({
      created_on: Joi.string(),

      modified_on: Joi.string(),
    });
  }

  static BlogRequest() {
    return Joi.object({
      application: Joi.string(),

      _custom_json: Joi.object(),

      author: Joi.object(),

      content: Joi.array().items(this.ResourceContent()),

      feature_image: Joi.object(),

      published: Joi.boolean(),

      reading_time: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      title: Joi.string(),

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
      message: Joi.string(),

      data: this.AdminAnnouncementSchema(),
    });
  }

  static Navigation() {
    return Joi.object({
      name: Joi.string(),

      slug: Joi.string(),

      orientation: Joi.string(),

      created_by: this.CreatedBy(),

      date_meta: this.DateMeta(),

      _id: Joi.string(),

      position: Joi.string(),

      application: Joi.string(),

      platform: Joi.string(),

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
      display: Joi.string(),
    });
  }

  static Action() {
    return Joi.object({
      page: this.ActionPage(),

      popup: this.ActionPage(),

      type: Joi.string(),
    });
  }

  static ActionPage() {
    return Joi.object({
      params: Joi.object(),

      query: Joi.object(),

      url: Joi.string(),

      type: Joi.string(),
    });
  }

  static NavigationReference() {
    return Joi.object({
      acl: Joi.array().items(Joi.string()),

      tags: Joi.array().items(Joi.string()),

      _locale_language: this.LocaleLanguage(),

      image: Joi.string(),

      type: Joi.string(),

      action: this.Action(),

      active: Joi.boolean(),

      display: Joi.string(),

      sort_order: Joi.number(),

      sub_navigation: this.NavigationReference(),
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

      slide_direction: Joi.string(),
    });
  }

  static SlideshowMedia() {
    return Joi.object({
      type: Joi.string(),

      url: Joi.string(),

      bg_color: Joi.string(),

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
      announcements: Joi.object(),

      refresh_rate: Joi.number(),

      refresh_pages: Joi.array().items(Joi.string()),
    });
  }

  static AnnouncementDataSchema() {
    return Joi.object({
      page_slug: Joi.string(),

      announcement: this.StorefrontAnnouncement(),
    });
  }

  static FaqResponseSchema() {
    return Joi.object({
      faqs: Joi.array().items(this.FAQ()),
    });
  }

  static UpdateHandpickedSchema() {
    return Joi.object({
      tag: this.HandpickedTagSchema(),
    });
  }

  static HandpickedTagSchema() {
    return Joi.object({
      position: Joi.string(),

      attributes: Joi.object(),

      name: Joi.string(),

      url: Joi.string(),

      type: Joi.string(),

      sub_type: Joi.string(),

      content: Joi.string(),
    });
  }

  static RemoveHandpickedSchema() {
    return Joi.object({
      tags: Joi.array().items(Joi.string()),
    });
  }

  static CreateTagSchema() {
    return Joi.object({
      name: Joi.string(),

      sub_type: Joi.string(),

      _id: Joi.string(),

      type: Joi.string(),

      url: Joi.string(),

      position: Joi.string(),

      attributes: Joi.object(),

      content: Joi.string(),
    });
  }

  static CreateTagRequestSchema() {
    return Joi.object({
      tags: Joi.array().items(this.CreateTagSchema()),
    });
  }

  static APIError() {
    return Joi.object({
      message: Joi.string(),

      status: Joi.number(),

      code: Joi.string(),

      exception: Joi.string(),

      info: Joi.string(),

      request_id: Joi.string(),

      stack_trace: Joi.string(),

      meta: Joi.object(),
    });
  }

  static CategorySchema() {
    return Joi.object({
      index: Joi.number(),

      _id: Joi.string(),

      slug: Joi.string(),

      title: Joi.string(),

      application: Joi.string(),
    });
  }

  static ChildrenSchema() {
    return Joi.object({
      question: Joi.string(),

      answer: Joi.string(),

      slug: Joi.string(),

      application: Joi.string(),

      _id: Joi.string(),
    });
  }

  static CategoryRequestSchema() {
    return Joi.object({
      slug: Joi.string(),

      title: Joi.string(),
    });
  }

  static FAQCategorySchema() {
    return Joi.object({
      index: Joi.number(),

      title: Joi.string(),

      description: Joi.string(),

      children: this.ChildrenSchema(),

      _id: Joi.string(),

      slug: Joi.string(),

      application: Joi.string(),

      icon_url: Joi.string(),

      _custom_json: Joi.object(),
    });
  }

  static FaqSchema() {
    return Joi.object({
      slug: Joi.string(),

      application: Joi.string(),

      _id: Joi.string(),

      question: Joi.string(),

      answer: Joi.string(),
    });
  }

  static FAQ() {
    return Joi.object({
      slug: Joi.string(),

      question: Joi.string(),

      answer: Joi.string(),
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
      faqs: Joi.array().items(Joi.object()),
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

  static GetFaqCategoryByIdOrSlugSchema() {
    return Joi.object({
      category: this.FAQCategorySchema(),
    });
  }

  static LandingPageGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Page(),
    });
  }

  static LandingPageSchema() {
    return Joi.object({
      slug: Joi.string(),

      action: this.Action(),

      platform: Joi.array().items(Joi.string()),

      created_by: this.CreatedBy(),

      date_meta: this.DateMeta(),

      _id: Joi.string(),

      application: Joi.string(),

      archived: Joi.boolean(),

      _custom_json: Joi.object(),
    });
  }

  static DefaultNavigationResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),
    });
  }

  static NavigationGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Page(),
    });
  }

  static Orientation() {
    return Joi.object({
      portrait: Joi.array().items(Joi.string()),

      landscape: Joi.array().items(Joi.string()),
    });
  }

  static NavigationSchema() {
    return Joi.object({
      _id: Joi.string(),

      application: Joi.string(),

      archived: Joi.boolean(),

      name: Joi.string(),

      slug: Joi.string(),

      platform: Joi.array().items(Joi.string()),

      created_by: this.CreatedBy(),

      date_meta: this.DateMeta(),

      orientation: this.Orientation(),

      version: Joi.number(),

      navigation: this.NavigationReference(),
    });
  }

  static NavigationRequest() {
    return Joi.object({
      name: Joi.string(),

      slug: Joi.string(),

      platform: Joi.array().items(Joi.string()),

      orientation: this.Orientation(),

      navigation: this.NavigationReference(),
    });
  }

  static CustomPageSchema() {
    return Joi.object({
      _id: Joi.string(),

      platform: Joi.string(),

      title: Joi.string(),

      slug: Joi.string(),

      type: Joi.string(),

      orientation: Joi.string(),

      application: Joi.string(),

      description: Joi.string(),

      published: Joi.boolean(),

      tags: Joi.array().items(Joi.string()),

      content: Joi.array().items(this.ContentSchema()),

      created_by: this.CreatedBy(),

      date_meta: this.DateMeta(),

      _schedule: this.ScheduleSchema(),
    });
  }

  static ContentSchema() {
    return Joi.object({
      type: Joi.string(),

      value: Joi.string(),
    });
  }

  static CustomPage() {
    return Joi.object({
      data: this.CustomPageSchema(),
    });
  }

  static CustomBlogSchema() {
    return Joi.object({
      _id: Joi.string(),

      title: Joi.string(),

      slug: Joi.string(),

      reading_time: Joi.string(),

      application: Joi.string(),

      description: Joi.string(),

      feature_image: this.FeatureImage(),

      published: Joi.boolean(),

      archived: Joi.boolean(),

      tags: Joi.array().items(Joi.string()),

      content: this.ContentSchema(),

      author: this.Author(),

      _schedule: this.ScheduleSchema(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      _custom_json: Joi.object(),
    });
  }

  static FeatureImage() {
    return Joi.object({
      secure_url: Joi.string(),
    });
  }

  static CustomBlog() {
    return Joi.object({
      data: this.CustomBlogSchema(),
    });
  }

  static PageGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Page(),
    });
  }

  static PageSpec() {
    return Joi.object({
      specifications: Joi.array().items(Joi.object()),
    });
  }

  static PageSpecParam() {
    return Joi.object({
      key: Joi.string(),

      required: Joi.boolean(),
    });
  }

  static PageSpecItem() {
    return Joi.object({
      page_type: Joi.string(),

      display_name: Joi.string(),

      params: Joi.array().items(this.PageSpecParam()),

      query: Joi.array().items(this.PageSpecParam()),
    });
  }

  static PageSchema() {
    return Joi.object({
      _id: Joi.string(),

      application: Joi.string(),

      component_ids: Joi.array().items(Joi.string()),

      content: Joi.array().items(this.PageContent()),

      created_by: Joi.object(),

      date_meta: Joi.object(),

      description: Joi.string(),

      feature_image: Joi.object(),

      page_meta: Joi.array().items(this.PageMeta()),

      _schedule: this.ScheduleSchema(),

      _custom_json: Joi.object(),

      orientation: Joi.string(),

      platform: Joi.string(),

      published: Joi.boolean(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      title: Joi.string(),

      type: Joi.string(),

      seo: this.SEO(),

      visibility: Joi.object(),
    });
  }

  static CreatedBy() {
    return Joi.object({
      id: Joi.string(),
    });
  }

  static PageContent() {
    return Joi.object({
      type: Joi.string(),

      value: Joi.object(),
    });
  }

  static PageMeta() {
    return Joi.object({
      key: Joi.string(),

      value: Joi.object(),
    });
  }

  static PageRequest() {
    return Joi.object({
      _schedule: this.CronSchedule(),

      application: Joi.string(),

      author: Joi.object(),

      _custom_json: Joi.object(),

      orientation: Joi.string(),

      content: Joi.array().items(this.ResourceContent()),

      feature_image: Joi.object(),

      published: Joi.boolean(),

      reading_time: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      seo: this.SEO(),

      title: Joi.string(),
    });
  }

  static CronSchedule() {
    return Joi.object({
      cron: Joi.string(),

      start: Joi.string(),

      end: Joi.string(),

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
      system_pages: Joi.array().items(Joi.object()),

      custom_pages: Joi.array().items(Joi.object()),

      application_id: Joi.string(),
    });
  }

  static SlideshowGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Page(),
    });
  }

  static SlideshowSchema() {
    return Joi.object({
      _id: Joi.string(),

      slug: Joi.string(),

      date_meta: this.DateMeta(),

      application: Joi.string(),

      platform: Joi.string(),

      configuration: this.ConfigurationSchema(),

      media: Joi.array().items(this.SlideshowMedia()),

      active: Joi.boolean(),

      archived: Joi.boolean(),

      _custom_json: Joi.object(),
    });
  }

  static SlideshowRequest() {
    return Joi.object({
      slug: Joi.string(),

      platform: Joi.string(),

      configuration: this.ConfigurationSchema(),

      media: this.SlideshowMedia(),

      active: Joi.boolean(),
    });
  }

  static Support() {
    return Joi.object({
      created: Joi.boolean(),

      _id: Joi.string(),

      config_type: Joi.string(),

      application: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      contact: this.ContactSchema(),
    });
  }

  static PhoneProperties() {
    return Joi.object({
      key: Joi.string(),

      code: Joi.string(),

      number: Joi.string(),
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
      key: Joi.string(),

      value: Joi.string(),
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
      application: Joi.string(),

      _id: Joi.string(),

      tags: Joi.array().items(this.TagSchema()),
    });
  }

  static TagSchema() {
    return Joi.object({
      name: Joi.string(),

      url: Joi.string(),

      type: Joi.string(),

      sub_type: Joi.string(),

      _id: Joi.string(),

      position: Joi.string(),

      attributes: Joi.object(),

      content: Joi.string(),
    });
  }

  static UnauthenticatedUser() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static UnauthenticatedApplication() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static BadRequest() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static ResourceNotFound() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static InternalServerError() {
    return Joi.object({
      message: Joi.string(),

      code: Joi.string(),
    });
  }

  static PlanRecurring() {
    return Joi.object({
      interval: Joi.string(),

      interval_count: Joi.number(),
    });
  }

  static Plan() {
    return Joi.object({
      recurring: this.PlanRecurring(),

      is_trial_plan: Joi.boolean(),

      plan_group: Joi.string(),

      tag_lines: Joi.array().items(Joi.string()),

      currency: Joi.string(),

      is_active: Joi.boolean(),

      is_visible: Joi.boolean(),

      trial_period: Joi.number(),

      addons: Joi.array().items(Joi.string()),

      tags: Joi.array().items(Joi.string()),

      type: Joi.string(),

      country: Joi.string(),

      _id: Joi.string(),

      name: Joi.string(),

      description: Joi.string(),

      amount: Joi.number(),

      product_suite_id: Joi.string(),

      created_at: Joi.string(),

      modified_at: Joi.string(),
    });
  }

  static DetailedPlanComponents() {
    return Joi.object({
      name: Joi.string(),

      slug: Joi.string(),

      description: Joi.string(),

      group: Joi.string(),

      icon: Joi.string(),

      links: Joi.object(),

      enabled: Joi.boolean(),

      display_text: Joi.string(),
    });
  }

  static DetailedPlan() {
    return Joi.object({
      recurring: this.PlanRecurring(),

      is_trial_plan: Joi.boolean(),

      plan_group: Joi.string(),

      tag_lines: Joi.array().items(Joi.string()),

      currency: Joi.string(),

      is_active: Joi.boolean(),

      is_visible: Joi.boolean(),

      trial_period: Joi.number(),

      addons: Joi.array().items(Joi.string()),

      tags: Joi.array().items(Joi.string()),

      type: Joi.string(),

      country: Joi.string(),

      _id: Joi.string(),

      name: Joi.string(),

      description: Joi.string(),

      amount: Joi.number(),

      product_suite_id: Joi.string(),

      created_at: Joi.string(),

      modified_at: Joi.string(),

      components: Joi.array().items(this.DetailedPlanComponents()),
    });
  }

  static InvoiceDetailsPeriod() {
    return Joi.object({
      start: Joi.string(),

      end: Joi.string(),
    });
  }

  static InvoiceDetailsClient() {
    return Joi.object({
      address_lines: Joi.array().items(Joi.string()),

      name: Joi.string(),

      email: Joi.string(),

      phone: Joi.string(),
    });
  }

  static InvoiceDetailsStatusTrail() {
    return Joi.object({
      _id: Joi.string(),

      value: Joi.string(),

      timestamp: Joi.string(),
    });
  }

  static InvoiceDetailsPaymentMethodsDataChecks() {
    return Joi.object({
      cvc_check: Joi.string(),

      address_line1_check: Joi.string(),

      address_postal_code_check: Joi.string(),
    });
  }

  static InvoiceDetailsPaymentMethodsDataNetworks() {
    return Joi.object({
      available: Joi.array().items(Joi.string()),

      preferred: Joi.string(),
    });
  }

  static InvoiceDetailsPaymentMethodsDataThreeDSecureUsage() {
    return Joi.object({
      supported: Joi.boolean(),
    });
  }

  static InvoiceDetailsPaymentMethodsData() {
    return Joi.object({
      brand: Joi.string(),

      last4: Joi.string(),

      checks: this.InvoiceDetailsPaymentMethodsDataChecks(),

      wallet: Joi.string(),

      country: Joi.string(),

      funding: Joi.string(),

      exp_year: Joi.number(),

      networks: this.InvoiceDetailsPaymentMethodsDataNetworks(),

      exp_month: Joi.number(),

      fingerprint: Joi.string(),

      generated_from: Joi.string(),

      three_d_secure_usage: this.InvoiceDetailsPaymentMethodsDataThreeDSecureUsage(),
    });
  }

  static InvoiceDetailsPaymentMethods() {
    return Joi.object({
      id: Joi.number(),

      type: Joi.string(),

      pg_payment_method_id: Joi.string(),

      data: this.InvoiceDetailsPaymentMethodsData(),

      is_default: Joi.boolean(),
    });
  }

  static InvoicePaymentMethod() {
    return Joi.object({
      pg_payment_method_id: Joi.string(),
    });
  }

  static InvoiceDetails() {
    return Joi.object({
      period: this.InvoiceDetailsPeriod(),

      client: this.InvoiceDetailsClient(),

      auto_advance: Joi.boolean(),

      currency: Joi.string(),

      paid: Joi.boolean(),

      attemp: Joi.number(),

      _id: Joi.string(),

      collection_method: Joi.string(),

      subscriber_id: Joi.string(),

      invoice_url: Joi.string(),

      number: Joi.string(),

      pg_data: Joi.object(),

      receipt_number: Joi.string(),

      statement_descriptor: Joi.string(),

      current_status: Joi.string(),

      status_trail: Joi.array().items(this.InvoiceDetailsStatusTrail()),

      subtotal: Joi.number(),

      total: Joi.number(),

      subscription: Joi.string(),

      next_action_time: Joi.string(),

      created_at: Joi.string(),

      modified_at: Joi.string(),

      hash_identifier: Joi.string(),

      payment_method: this.InvoicePaymentMethod(),
    });
  }

  static InvoiceItemsPlanRecurring() {
    return Joi.object({
      interval: Joi.string(),

      interval_count: Joi.number(),
    });
  }

  static InvoiceItemsPlan() {
    return Joi.object({
      recurring: this.InvoiceItemsPlanRecurring(),

      is_trial_plan: Joi.boolean(),

      plan_group: Joi.string(),

      tag_lines: Joi.array().items(Joi.string()),

      currency: Joi.string(),

      is_active: Joi.boolean(),

      is_visible: Joi.boolean(),

      trial_period: Joi.number(),

      addons: Joi.array().items(Joi.string()),

      tags: Joi.array().items(Joi.string()),

      type: Joi.string(),

      country: Joi.string(),

      _id: Joi.string(),

      name: Joi.string(),

      description: Joi.string(),

      amount: Joi.number(),

      product_suite_id: Joi.string(),

      created_at: Joi.string(),

      modified_at: Joi.string(),
    });
  }

  static InvoiceItemsPeriod() {
    return Joi.object({
      start: Joi.string(),

      end: Joi.string(),
    });
  }

  static InvoiceItems() {
    return Joi.object({
      _id: Joi.string(),

      currency: Joi.string(),

      plan: this.InvoiceItemsPlan(),

      name: Joi.string(),

      quantity: Joi.number(),

      description: Joi.string(),

      period: this.InvoiceItemsPeriod(),

      unit_amount: Joi.number(),

      amount: Joi.number(),

      type: Joi.string(),

      invoice_id: Joi.string(),

      created_at: Joi.string(),

      modified_at: Joi.string(),
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
      name: Joi.string(),

      email: Joi.string(),

      phone: Joi.string(),

      address_lines: Joi.array().items(Joi.string()),
    });
  }

  static InvoicesDataPeriod() {
    return Joi.object({
      start: Joi.string(),

      end: Joi.string(),
    });
  }

  static InvoicesDataPaymentMethod() {
    return Joi.object({
      pg_payment_method_id: Joi.string(),
    });
  }

  static InvoicesData() {
    return Joi.object({
      _id: Joi.string(),

      client: this.InvoicesDataClient(),

      auto_advance: Joi.boolean(),

      currency: Joi.string(),

      paid: Joi.boolean(),

      attemp: Joi.number(),

      collection_method: Joi.string(),

      subscriber_id: Joi.string(),

      invoice_url: Joi.string(),

      number: Joi.string(),

      pg_data: Joi.object(),

      period: this.InvoicesDataPeriod(),

      receipt_number: Joi.string(),

      statement_descriptor: Joi.string(),

      current_status: Joi.string(),

      status_trail: Joi.array().items(this.InvoiceDetailsStatusTrail()),

      subtotal: Joi.number(),

      total: Joi.number(),

      subscription: Joi.string(),

      next_action_time: Joi.string(),

      created_at: Joi.string(),

      modified_at: Joi.string(),

      hash_identifier: Joi.string(),

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
      phone_number: Joi.string(),

      phone_country_code: Joi.string(),
    });
  }

  static BillingAddress() {
    return Joi.object({
      country: Joi.string(),

      state: Joi.string(),

      city: Joi.string(),

      line1: Joi.string(),

      line2: Joi.string(),

      postal_code: Joi.string(),
    });
  }

  static SubscriptionCustomer() {
    return Joi.object({
      phone: this.Phone(),

      billing_address: this.BillingAddress(),

      _id: Joi.string(),

      unique_id: Joi.string(),

      type: Joi.string(),

      name: Joi.string(),

      email: Joi.string(),

      created_at: Joi.string(),

      modified_at: Joi.string(),

      data: Joi.object(),
    });
  }

  static SubscriptionCustomerCreate() {
    return Joi.object({
      phone: this.Phone(),

      billing_address: this.BillingAddress(),

      unique_id: Joi.string(),

      type: Joi.string(),

      name: Joi.string(),

      email: Joi.string(),
    });
  }

  static SubscriptionCurrentPeriod() {
    return Joi.object({
      start: Joi.string(),

      end: Joi.string(),
    });
  }

  static SubscriptionPauseCollection() {
    return Joi.object({
      behavior: Joi.string(),

      resume_at: Joi.string(),
    });
  }

  static SubscriptionTrial() {
    return Joi.object({
      start: Joi.string(),

      end: Joi.string(),
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

      _id: Joi.string(),

      subscriber_id: Joi.string(),

      plan_id: Joi.string(),

      product_suite_id: Joi.string(),

      plan_data: this.Plan(),

      current_status: Joi.string(),

      collection_method: Joi.string(),

      created_at: Joi.string(),

      modified_at: Joi.string(),

      latest_invoice: Joi.string(),
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
      unique_id: Joi.string(),

      type: Joi.string(),

      product_suite: Joi.string(),

      plan_id: Joi.string(),

      payment_method: Joi.string(),
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
      unique_id: Joi.string(),

      type: Joi.string(),

      product_suite: Joi.string(),

      subscription_id: Joi.string(),
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
      _id: Joi.string(),

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
      description: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      headers: Joi.array().items(Joi.string()),

      is_active: Joi.boolean(),

      name: Joi.string(),

      file_url: Joi.string(),

      type: Joi.string(),

      records_count: Joi.number(),

      application: Joi.string(),
    });
  }

  static RecipientHeaders() {
    return Joi.object({
      email: Joi.string(),
    });
  }

  static CampaignEmailTemplate() {
    return Joi.object({
      key: Joi.string(),

      value: Joi.string(),
    });
  }

  static CampignEmailProvider() {
    return Joi.object({
      _id: Joi.string(),

      from_name: Joi.string(),

      from_email: Joi.string(),
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

      description: Joi.string(),

      tags: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      _id: Joi.string(),

      datasource: Joi.string(),

      type: Joi.string(),

      name: Joi.string(),

      application: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      slug: Joi.string(),

      __v: Joi.number(),
    });
  }

  static Campaigns() {
    return Joi.object({
      items: Joi.array().items(this.Campaign()),

      page: this.Page(),
    });
  }

  static BigqueryHeadersReq() {
    return Joi.object({
      query: Joi.string(),

      type: Joi.string(),
    });
  }

  static BigqueryHeadersResHeaders() {
    return Joi.object({
      name: Joi.string(),

      type: Joi.string(),
    });
  }

  static BigqueryHeadersRes() {
    return Joi.object({
      headers: Joi.array().items(this.BigqueryHeadersResHeaders()),
    });
  }

  static GetNRecordsCsvReq() {
    return Joi.object({
      url: Joi.string(),

      header: Joi.boolean(),

      count: Joi.number(),
    });
  }

  static GetNRecordsCsvResItems() {
    return Joi.object({
      phone_number: Joi.string(),

      email: Joi.string(),

      firstname: Joi.string(),

      lastname: Joi.string(),

      orderid: Joi.string(),
    });
  }

  static GetNRecordsCsvRes() {
    return Joi.object({
      items: Joi.array().items(this.GetNRecordsCsvResItems()),
    });
  }

  static AudienceReq() {
    return Joi.object({
      description: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      headers: Joi.array().items(Joi.string()),

      is_active: Joi.boolean(),

      name: Joi.string(),

      file_url: Joi.string(),

      type: Joi.string(),

      records_count: Joi.number(),

      application: Joi.string(),
    });
  }

  static Audience() {
    return Joi.object({
      description: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      headers: Joi.array().items(Joi.string()),

      is_active: Joi.boolean(),

      _id: Joi.string(),

      name: Joi.string(),

      file_url: Joi.string(),

      type: Joi.string(),

      records_count: Joi.number(),

      application: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      slug: Joi.string(),

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
      name: Joi.string(),

      email: Joi.string(),

      is_default: Joi.boolean(),
    });
  }

  static EmailProviderReq() {
    return Joi.object({
      name: Joi.string(),

      description: Joi.string(),

      api_key: Joi.string(),

      type: Joi.string(),

      provider: Joi.string(),

      from: Joi.array().items(this.EmailProviderReqFrom()),
    });
  }

  static EmailProvider() {
    return Joi.object({
      type: Joi.string(),

      provider: Joi.string(),

      from: Joi.array().items(this.EmailProviderReqFrom()),

      _id: Joi.string(),

      name: Joi.string(),

      description: Joi.string(),

      api_key: Joi.string(),

      application: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      slug: Joi.string(),

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

      message: Joi.string(),
    });
  }

  static EmailTemplateDeleteFailureRes() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string(),
    });
  }

  static EmailTemplateKeys() {
    return Joi.object({
      to: Joi.string(),

      cc: Joi.string(),

      bcc: Joi.string(),
    });
  }

  static EmailTemplateHeaders() {
    return Joi.object({
      key: Joi.string(),

      value: Joi.string(),
    });
  }

  static EmailTemplateReq() {
    return Joi.object({
      name: Joi.string(),

      description: Joi.string(),

      keys: this.EmailTemplateKeys(),

      from: Joi.string(),

      static_to: Joi.array().items(Joi.string()),

      static_cc: Joi.array().items(Joi.string()),

      static_bcc: Joi.array().items(Joi.string()),

      reply_to: Joi.string(),

      headers: Joi.array().items(this.EmailTemplateHeaders()),

      subject: this.TemplateAndType(),

      html: this.TemplateAndType(),

      text: this.TemplateAndType(),

      attachments: Joi.array().items(Joi.any()),

      priority: Joi.string(),
    });
  }

  static TemplateAndType() {
    return Joi.object({
      template_type: Joi.string(),

      template: Joi.string(),
    });
  }

  static EmailTemplateRes() {
    return Joi.object({
      is_system: Joi.boolean(),

      is_internal: Joi.boolean(),

      description: Joi.string(),

      static_to: Joi.array().items(Joi.string()),

      static_cc: Joi.array().items(Joi.string()),

      static_bcc: Joi.array().items(Joi.string()),

      tags: Joi.array().items(Joi.any()),

      priority: Joi.string(),

      published: Joi.boolean(),

      _id: Joi.string(),

      name: Joi.string(),

      keys: this.EmailTemplateKeys(),

      from: Joi.string(),

      reply_to: Joi.string(),

      headers: Joi.array().items(this.EmailTemplateHeaders()),

      subject: this.TemplateAndType(),

      html: this.TemplateAndType(),

      text: this.TemplateAndType(),

      attachments: Joi.array().items(Joi.any()),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      slug: Joi.string(),

      __v: Joi.number(),
    });
  }

  static EmailTemplate() {
    return Joi.object({
      is_system: Joi.boolean(),

      is_internal: Joi.boolean(),

      description: Joi.string(),

      static_to: Joi.array().items(Joi.any()),

      static_cc: Joi.array().items(Joi.any()),

      static_bcc: Joi.array().items(Joi.any()),

      tags: Joi.array().items(Joi.any()),

      priority: Joi.string(),

      published: Joi.boolean(),

      _id: Joi.string(),

      slug: Joi.string(),

      name: Joi.string(),

      from: Joi.string(),

      from_name: Joi.string(),

      subject: this.TemplateAndType(),

      html: this.TemplateAndType(),

      text: this.TemplateAndType(),

      headers: Joi.array().items(Joi.any()),

      attachments: Joi.array().items(Joi.any()),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
    });
  }

  static SystemEmailTemplate() {
    return Joi.object({
      is_system: Joi.boolean(),

      is_internal: Joi.boolean(),

      description: Joi.string(),

      static_to: Joi.array().items(Joi.any()),

      static_cc: Joi.array().items(Joi.any()),

      static_bcc: Joi.array().items(Joi.any()),

      tags: Joi.array().items(Joi.any()),

      priority: Joi.string(),

      published: Joi.boolean(),

      _id: Joi.string(),

      slug: Joi.string(),

      name: Joi.string(),

      from: Joi.string(),

      from_name: Joi.string(),

      subject: this.TemplateAndType(),

      html: this.TemplateAndType(),

      text: this.TemplateAndType(),

      headers: Joi.array().items(Joi.any()),

      attachments: Joi.array().items(Joi.any()),

      created_at: Joi.string(),

      updated_at: Joi.string(),

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

  static EventSubscriptionTemplateSms() {
    return Joi.object({
      subscribed: Joi.boolean(),

      template: Joi.string(),
    });
  }

  static EventSubscriptionTemplateEmail() {
    return Joi.object({
      subscribed: Joi.boolean(),

      template: Joi.string(),
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

      _id: Joi.string(),

      application: Joi.string(),

      event: Joi.string(),

      slug: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

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
      job_id: Joi.string(),
    });
  }

  static Job() {
    return Joi.object({
      completed: Joi.boolean(),

      is_active: Joi.boolean(),

      _id: Joi.string(),

      campaign: Joi.string(),

      application: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
    });
  }

  static Jobs() {
    return Joi.object({
      items: Joi.array().items(any),

      page: this.Page(),
    });
  }

  static JobLog() {
    return Joi.object({
      imported: Joi.any(),

      processed: Joi.any(),

      _id: Joi.string(),

      job: Joi.string(),

      campaign: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

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
      template: Joi.string(),
    });
  }

  static LogPushnotification() {
    return Joi.object({
      pushtokens: Joi.array().items(Joi.string()),
    });
  }

  static LogMeta() {
    return Joi.object({
      type: Joi.string(),

      identifier: Joi.string(),

      key: Joi.string(),

      offset: Joi.string(),

      partition: Joi.string(),

      topic: Joi.string(),
    });
  }

  static Log() {
    return Joi.object({
      email: this.LogEmail(),

      pushnotification: this.LogPushnotification(),

      meta: this.LogMeta(),

      _id: Joi.string(),

      application: Joi.string(),

      service: Joi.string(),

      step: Joi.string(),

      status: Joi.string(),

      data: Joi.any(),

      expire_at: Joi.string(),

      created_at: Joi.string(),
    });
  }

  static Logs() {
    return Joi.object({
      items: Joi.array().items(this.Log()),

      page: this.Page(),
    });
  }

  static PushtokenReq() {
    return Joi.object({
      action: Joi.string(),

      bundle_identifier: Joi.string(),

      push_token: Joi.string(),

      unique_device_id: Joi.string(),
    });
  }

  static PushtokenRes() {
    return Joi.object({
      _id: Joi.string(),

      bundle_identifier: Joi.string(),

      push_token: Joi.string(),

      unique_device_id: Joi.string(),

      type: Joi.string(),

      platform: Joi.string(),

      application_id: Joi.string(),

      user_id: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      expired_at: Joi.string(),
    });
  }

  static SmsProviderReq() {
    return Joi.object({
      name: Joi.string(),

      description: Joi.string(),

      sender: Joi.string(),

      username: Joi.string(),

      authkey: Joi.string(),

      type: Joi.string(),

      provider: Joi.string(),
    });
  }

  static SmsProvider() {
    return Joi.object({
      rpt: Joi.number(),

      type: Joi.string(),

      provider: Joi.string(),

      _id: Joi.string(),

      name: Joi.string(),

      description: Joi.string(),

      sender: Joi.string(),

      username: Joi.string(),

      authkey: Joi.string(),

      application: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      slug: Joi.string(),

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

      message: Joi.string(),
    });
  }

  static SmsTemplateDeleteFailureRes() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string(),
    });
  }

  static SmsTemplateMessage() {
    return Joi.object({
      template_type: Joi.string(),

      template: Joi.string(),
    });
  }

  static SmsTemplateReq() {
    return Joi.object({
      name: Joi.string(),

      description: Joi.string(),

      message: this.SmsTemplateMessage(),

      template_variables: Joi.any(),

      attachments: Joi.array().items(Joi.any()),

      priority: Joi.string(),
    });
  }

  static SmsTemplateRes() {
    return Joi.object({
      is_system: Joi.boolean(),

      is_internal: Joi.boolean(),

      description: Joi.string(),

      tags: Joi.array().items(Joi.any()),

      priority: Joi.string(),

      published: Joi.boolean(),

      _id: Joi.string(),

      name: Joi.string(),

      message: this.SmsTemplateMessage(),

      template_variables: Joi.any(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      slug: Joi.string(),

      __v: Joi.number(),
    });
  }

  static SmsTemplate() {
    return Joi.object({
      is_system: Joi.boolean(),

      is_internal: Joi.boolean(),

      description: Joi.string(),

      priority: Joi.string(),

      tags: Joi.array().items(Joi.any()),

      published: Joi.boolean(),

      _id: Joi.string(),

      slug: Joi.string(),

      name: Joi.string(),

      message: this.SmsTemplateMessage(),

      template_variables: Joi.any(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
    });
  }

  static SystemSmsTemplate() {
    return Joi.object({
      is_system: Joi.boolean(),

      is_internal: Joi.boolean(),

      description: Joi.string(),

      tags: Joi.array().items(Joi.any()),

      priority: Joi.string(),

      published: Joi.boolean(),

      _id: Joi.string(),

      slug: Joi.string(),

      name: Joi.string(),

      message: this.SmsTemplateMessage(),

      template_variables: Joi.any(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

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
      title: Joi.string(),

      body: Joi.string(),

      subtitle: Joi.string(),

      icon: Joi.string(),

      deeplink: Joi.string(),

      click_action: Joi.string(),
    });
  }

  static SystemNotificationUser() {
    return Joi.object({
      type: Joi.string(),

      value: Joi.string(),
    });
  }

  static SystemNotificationSettings() {
    return Joi.object({
      sound: Joi.boolean(),

      priority: Joi.string(),

      time_to_live: Joi.string(),
    });
  }

  static SystemNotification() {
    return Joi.object({
      notification: this.Notification(),

      user: this.SystemNotificationUser(),

      settings: this.SystemNotificationUser(),

      _id: Joi.string(),

      group: Joi.string(),

      created_at: Joi.string(),
    });
  }

  static SystemNotificationsPage() {
    return Joi.object({
      type: Joi.string(),

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
      created: Joi.boolean().required(),

      aggregators: Joi.array().items(Joi.object()),

      excluded_fields: Joi.array().items(Joi.string()).required(),

      success: Joi.boolean().required(),

      display_fields: Joi.array().items(Joi.string()).required(),

      app_id: Joi.string().required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      description: Joi.string().required(),

      code: Joi.string().required(),

      success: Joi.boolean().required(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      config_type: Joi.string().required(),

      secret: Joi.string().required(),

      key: Joi.string().required(),

      is_active: Joi.boolean(),

      merchant_salt: Joi.string().required(),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      aggregator_name: this.PaymentGatewayConfig(),

      is_active: Joi.boolean(),

      app_id: Joi.string().required(),
    });
  }

  static PaymentGatewayToBeReviewed() {
    return Joi.object({
      aggregator: Joi.array().items(Joi.string()).required(),

      success: Joi.boolean().required(),
    });
  }

  static ErrorCodeAndDescription() {
    return Joi.object({
      description: Joi.string().required(),

      code: Joi.string().required(),
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
      large: Joi.string().required(),

      small: Joi.string().required(),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      retry_count: Joi.number(),

      exp_month: Joi.number(),

      intent_flow: Joi.string(),

      card_fingerprint: Joi.string(),

      fynd_vpa: Joi.string(),

      card_reference: Joi.string(),

      display_name: Joi.string(),

      intent_app_error_list: Joi.array().items(Joi.string()),

      nickname: Joi.string(),

      card_number: Joi.string(),

      card_brand_image: Joi.string(),

      card_token: Joi.string(),

      display_priority: Joi.number(),

      card_id: Joi.string(),

      card_isin: Joi.string(),

      code: Joi.string(),

      aggregator_name: Joi.string().required(),

      card_issuer: Joi.string(),

      card_brand: Joi.string(),

      exp_year: Joi.number(),

      card_type: Joi.string(),

      merchant_code: Joi.string(),

      name: Joi.string(),

      timeout: Joi.number(),

      logo_url: this.PaymentModeLogo(),

      expired: Joi.boolean(),

      card_name: Joi.string(),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      name: Joi.string().required(),

      aggregator_name: Joi.string(),

      add_card_enabled: Joi.boolean(),

      list: Joi.array().items(this.PaymentModeList()),

      display_name: Joi.string().required(),

      display_priority: Joi.number().required(),

      anonymous_enable: Joi.boolean(),
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

  static PayoutsResponse() {
    return Joi.object({
      unique_transfer_no: Joi.object().required(),

      transfer_type: Joi.string().required(),

      more_attributes: Joi.object().required(),

      customers: Joi.object().required(),

      is_default: Joi.boolean().required(),

      payouts_aggregators: Joi.array().items(Joi.object()).required(),

      is_active: Joi.boolean().required(),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      unique_external_id: Joi.string().required(),

      transfer_type: Joi.string().required(),

      aggregator: Joi.string().required(),

      users: Joi.object().required(),

      bank_details: Joi.object().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      unique_transfer_no: Joi.string().required(),

      created: Joi.boolean().required(),

      payment_status: Joi.string().required(),

      users: Joi.object().required(),

      aggregator: Joi.string().required(),

      transfer_type: Joi.string().required(),

      payouts: Joi.object().required(),

      bank_details: Joi.object().required(),

      success: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static UpdatePayoutResponse() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      success: Joi.boolean().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static UpdatePayoutRequest() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      unique_external_id: Joi.string().required(),

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

      data: Joi.array().items(Joi.object()).required(),
    });
  }

  static DeleteSubscriptionPaymentMethodResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static SubscriptionConfigResponse() {
    return Joi.object({
      config: Joi.object().required(),

      aggregator: Joi.string().required(),

      success: Joi.boolean().required(),
    });
  }

  static SaveSubscriptionSetupIntentRequest() {
    return Joi.object({
      unique_external_id: Joi.string().required(),
    });
  }

  static SaveSubscriptionSetupIntentResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.object().required(),
    });
  }

  static GetActivityStatus() {
    return Joi.object({
      activity_history: this.ActivityHistory().required(),
    });
  }

  static ActivityHistory() {
    return Joi.object({
      createdat: Joi.string(),

      message: Joi.string(),

      type: Joi.string(),

      user: Joi.string(),
    });
  }

  static FailedOrders() {
    return Joi.object({
      orders: this.FailOrder().required(),
    });
  }

  static FailOrder() {
    return Joi.object({
      updated_at: Joi.string(),

      _id: Joi.string(),

      reason: Joi.string(),

      marketplace_order: this.MarketplaceOrder(),

      marketplace_order_id: Joi.string(),

      created_at: Joi.string(),

      app_id: Joi.string(),

      marketplace: Joi.string(),

      company_id: Joi.number(),
    });
  }

  static MarketplaceOrder() {
    return Joi.object({
      order_status_url: Joi.string(),

      admin_graphql_api_id: Joi.string(),

      email: Joi.string(),

      test: Joi.boolean(),

      note: Joi.string(),

      total_price: Joi.string(),

      app_id: Joi.number(),

      total_discounts_set: this.TotalDiscountsSet(),

      total_price_set: this.TotalPriceSet(),

      total_tax_set: this.TotalTaxSet(),

      gateway: Joi.string(),

      name: Joi.string(),

      subtotal_price_set: this.SubtotalPriceSet(),

      number: Joi.number(),

      buyer_accepts_marketing: Joi.boolean(),

      contact_email: Joi.string(),

      token: Joi.string(),

      source_name: Joi.string(),

      payment_gateway_names: Joi.array().items(Joi.any()),

      presentment_currency: Joi.string(),

      subtotal_price: Joi.string(),

      processed_at: Joi.string(),

      order_number: Joi.number(),

      total_tip_received: Joi.string(),

      id: Joi.number(),

      confirmed: Joi.boolean(),

      currency: Joi.string(),

      total_line_items_price: Joi.string(),

      line_items: this.LineItems(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      total_weight: Joi.number(),

      billing_address: this.BillingAddress(),

      total_shipping_price_set: this.TotalShippingPriceSet(),

      customer: this.Customer(),

      total_discounts: Joi.string(),

      total_line_items_price_set: this.TotalLineItemsPriceSet(),

      tags: Joi.string(),

      total_price_usd: Joi.string(),

      user_id: Joi.number(),

      total_tax: Joi.string(),

      processing_method: Joi.string(),

      shipping_address: this.ShippingAddress(),

      taxes_included: Joi.boolean(),

      financial_status: Joi.string(),
    });
  }

  static TotalDiscountsSet() {
    return Joi.object({
      presentment_money: this.PresentmentMoney(),

      shop_money: this.ShopMoney(),
    });
  }

  static PresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static ShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static TotalPriceSet() {
    return Joi.object({
      shop_money: this.TotalPriceSetShopMoney(),

      presentment_money: this.TotalPriceSetPresentmentMoney(),
    });
  }

  static TotalPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static TotalPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static TotalTaxSet() {
    return Joi.object({
      shop_money: this.TotalTaxSetShopMoney(),

      presentment_money: this.TotalTaxSetPresentmentMoney(),
    });
  }

  static TotalTaxSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static TotalTaxSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static SubtotalPriceSet() {
    return Joi.object({
      shop_money: this.SubtotalPriceSetShopMoney(),

      presentment_money: this.SubtotalPriceSetPresentmentMoney(),
    });
  }

  static SubtotalPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static SubtotalPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static LineItems() {
    return Joi.object({
      sku: Joi.string(),

      fulfillable_quantity: Joi.number(),

      grams: Joi.number(),

      total_discount: Joi.string(),

      article: this.LineItemsArticle(),

      title: Joi.string(),

      variant_inventory_management: Joi.string(),

      id: Joi.number(),

      variant_id: Joi.number(),

      variant_title: Joi.string(),

      product_exists: Joi.boolean(),

      price: Joi.string(),

      admin_graphql_api_id: Joi.string(),

      quantity: Joi.number(),

      vendor: Joi.string(),

      fulfillment_service: Joi.string(),

      taxable: Joi.boolean(),

      name: Joi.string(),

      product_id: Joi.number(),

      price_set: this.PriceSet(),

      tax_lines: this.TaxLines(),

      requires_shipping: Joi.boolean(),

      gift_card: Joi.boolean(),

      total_discount_set: this.TotalDiscountSet(),
    });
  }

  static LineItemsArticle() {
    return Joi.object({
      quantities: this.Quantities(),

      old_article_uid: Joi.string(),

      total_quantity: Joi.number(),

      manufacturer: this.Manufacturer(),

      price: this.ArticlePrice(),

      track_inventory: Joi.boolean(),

      company: this.Company(),

      is_active: Joi.boolean(),

      date_meta: this.FailOrderDateMeta(),

      fragile: Joi.boolean(),

      marketplace_identifiers: this.MarketplaceIdentifiers(),

      size: Joi.string(),

      is_set: Joi.boolean(),

      dimension: this.Dimension(),

      weight: this.Weight(),

      store: this.Store(),

      meta: this.ArticleMeta(),

      uid: Joi.string(),

      brand: this.ArticleBrand(),

      item_id: Joi.number(),

      fynd_article_code: Joi.string(),

      _id: Joi.string(),

      identifier: this.LineItemsArticleIdentifier(),

      seller_identifier: Joi.string(),

      fynd_item_code: Joi.string(),

      country_of_origin: Joi.string(),
    });
  }

  static Quantities() {
    return Joi.object({
      not_available: this.NotAvailable(),

      sellable: this.Sellable(),

      order_committed: this.OrderCommitted(),

      damaged: this.Damaged(),
    });
  }

  static NotAvailable() {
    return Joi.object({
      count: Joi.number(),

      updated_at: Joi.string(),
    });
  }

  static Sellable() {
    return Joi.object({
      count: Joi.number(),

      updated_at: Joi.string(),
    });
  }

  static OrderCommitted() {
    return Joi.object({
      count: Joi.number(),

      updated_at: Joi.string(),
    });
  }

  static Damaged() {
    return Joi.object({
      updated_at: Joi.string(),

      count: Joi.number(),
    });
  }

  static Manufacturer() {
    return Joi.object({
      is_default: Joi.boolean(),

      address: Joi.string(),

      name: Joi.string(),
    });
  }

  static ArticlePrice() {
    return Joi.object({
      marked: Joi.number(),

      currency: Joi.string(),

      effective: Joi.number(),

      transfer: Joi.number(),
    });
  }

  static Company() {
    return Joi.object({
      id: Joi.number(),

      company_type: Joi.string(),

      business_type: Joi.string(),

      company_name: Joi.string(),

      created_on: Joi.string(),

      pan_no: Joi.string(),

      return_allowed: Joi.boolean(),

      meta: Joi.string(),

      exchange_allowed: Joi.boolean(),

      agreement_start_date: Joi.string(),

      exchange_within_days: Joi.number(),

      payment_procesing_charge: Joi.number(),

      fynd_a_fit_available: Joi.boolean(),

      modified_on: Joi.string(),

      return_within_days: Joi.number(),
    });
  }

  static FailOrderDateMeta() {
    return Joi.object({
      added_on_store: Joi.string(),

      inventory_updated_on: Joi.string(),

      created_on: Joi.string(),

      modified_on: Joi.string(),
    });
  }

  static MarketplaceIdentifiers() {
    return Joi.object({
      tatacliq_luxury: this.TatacliqLuxury(),
    });
  }

  static TatacliqLuxury() {
    return Joi.object({
      sku: Joi.string(),
    });
  }

  static Dimension() {
    return Joi.object({
      height: Joi.number(),

      width: Joi.number(),

      unit: Joi.string(),

      length: Joi.number(),

      is_default: Joi.boolean(),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean(),

      unit: Joi.string(),

      shipping: Joi.number(),
    });
  }

  static Store() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static ArticleMeta() {
    return Joi.object({
      service: Joi.string(),
    });
  }

  static ArticleBrand() {
    return Joi.object({
      name: Joi.string(),

      id: Joi.number(),
    });
  }

  static LineItemsArticleIdentifier() {
    return Joi.object({
      sku_code: Joi.string(),
    });
  }

  static PriceSet() {
    return Joi.object({
      shop_money: this.PriceSetShopMoney(),

      presentment_money: this.PriceSetPresentmentMoney(),
    });
  }

  static PriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static PriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static TaxLines() {
    return Joi.object({
      title: Joi.string(),

      price: Joi.string(),

      rate: Joi.number(),

      price_set: this.TaxLinesPriceSet(),
    });
  }

  static TaxLinesPriceSet() {
    return Joi.object({
      shop_money: this.TaxLinesPriceSetShopMoney(),

      presentment_money: this.TaxLinesPriceSetPresentmentMoney(),
    });
  }

  static TaxLinesPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static TaxLinesPriceSetPresentmentMoney() {
    return Joi.object({
      currency_code: Joi.string(),

      amount: Joi.string(),
    });
  }

  static TotalDiscountSet() {
    return Joi.object({
      presentment_money: this.TotalDiscountSetPresentmentMoney(),

      shop_money: this.TotalDiscountSetShopMoney(),
    });
  }

  static TotalDiscountSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static TotalDiscountSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static TotalShippingPriceSet() {
    return Joi.object({
      shop_money: this.TotalShippingPriceSetShopMoney(),

      presentment_money: this.TotalShippingPriceSetPresentmentMoney(),
    });
  }

  static TotalShippingPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static TotalShippingPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static Customer() {
    return Joi.object({
      created_at: Joi.string(),

      id: Joi.number(),

      last_name: Joi.string(),

      state: Joi.string(),

      last_order_id: Joi.number(),

      note: Joi.string(),

      verified_email: Joi.boolean(),

      phone: Joi.string(),

      accepts_marketing: Joi.boolean(),

      first_name: Joi.string(),

      tags: Joi.string(),

      last_order_name: Joi.string(),

      orders_count: Joi.number(),

      total_spent: Joi.string(),

      tax_exempt: Joi.boolean(),

      currency: Joi.string(),

      accepts_marketing_updated_at: Joi.string(),

      email: Joi.string(),

      updated_at: Joi.string(),

      admin_graphql_api_id: Joi.string(),

      default_address: this.DefaultAddress(),
    });
  }

  static DefaultAddress() {
    return Joi.object({
      last_name: Joi.string(),

      name: Joi.string(),

      province_code: Joi.string(),

      country_code: Joi.string(),

      is_default: Joi.boolean(),

      id: Joi.number(),

      customer_id: Joi.number(),

      first_name: Joi.string(),

      address1: Joi.string(),

      phone: Joi.string(),

      country_name: Joi.string(),

      company: Joi.string(),

      address2: Joi.string(),

      city: Joi.string(),

      province: Joi.string(),

      country: Joi.string(),

      zip: Joi.string(),
    });
  }

  static TotalLineItemsPriceSet() {
    return Joi.object({
      shop_money: this.TotalLineItemsPriceSetShopMoney(),

      presentment_money: this.TotalLineItemsPriceSetPresentmentMoney(),
    });
  }

  static TotalLineItemsPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static TotalLineItemsPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      address1: Joi.string(),

      zip: Joi.string(),

      address2: Joi.string(),

      country_code: Joi.string(),

      country: Joi.string(),

      last_name: Joi.string(),

      latitude: Joi.number(),

      province_code: Joi.string(),

      first_name: Joi.string(),

      phone: Joi.string(),

      province: Joi.string(),

      longitude: Joi.number(),

      city: Joi.string(),

      company: Joi.string(),

      name: Joi.string(),
    });
  }

  static OrderListing() {
    return Joi.object({
      items: Joi.array().items(this.OrderItems()).required(),

      filters: this.Filters().required(),

      next_order_status: this.NextOrderStatus().required(),

      page: this.PlatformOrderPage().required(),

      applied_filters: this.AppliedFilters().required(),
    });
  }

  static OrderItems() {
    return Joi.object({
      user: this.PlatformOrderUserInfo(),

      delivery_address: this.PlatformDeliveryAddress(),

      channel: this.Channel(),

      breakup_values: this.PlatformBreakupValues(),

      id: Joi.string(),

      application: this.PlatformApplication(),

      shipments: this.PlatformShipment(),

      created_at: Joi.string(),

      total_shipments_in_order: Joi.number(),

      payments: this.ItemsPayments(),
    });
  }

  static PlatformOrderUserInfo() {
    return Joi.object({
      mobile: Joi.string(),

      first_name: Joi.string(),

      gender: Joi.string(),

      email: Joi.string(),

      last_name: Joi.string(),

      is_anonymous_user: Joi.boolean(),

      uid: Joi.number(),

      avis_user_id: Joi.string(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      area: Joi.string(),

      state: Joi.string(),

      country: Joi.string(),

      version: Joi.string(),

      address1: Joi.string(),

      latitude: Joi.number(),

      updated_at: Joi.string(),

      city: Joi.string(),

      landmark: Joi.string(),

      created_at: Joi.string(),

      name: Joi.string(),

      address: Joi.string(),

      phone: Joi.string(),

      longitude: Joi.number(),

      address_type: Joi.string(),

      email: Joi.string(),

      pincode: Joi.string(),

      address2: Joi.string(),

      contact_person: Joi.string(),

      address_category: Joi.string(),
    });
  }

  static Channel() {
    return Joi.object({
      name: Joi.string(),

      logo: Joi.string(),
    });
  }

  static PlatformBreakupValues() {
    return Joi.object({
      display: Joi.string(),

      value: Joi.number(),

      name: Joi.string(),
    });
  }

  static PlatformApplication() {
    return Joi.object({
      name: Joi.string(),

      owner: Joi.string(),

      post_order_reassignment: Joi.boolean(),

      id: Joi.string(),

      description: Joi.string(),

      dp_assignment: Joi.boolean(),

      article_assignment: this.ArticleAssignment(),

      force_reassignment: Joi.boolean(),

      token: Joi.string(),

      secret: Joi.string(),
    });
  }

  static ArticleAssignment() {
    return Joi.object({
      strategy: Joi.string(),

      level: Joi.string(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      status: this.PlatformShipmentStatus(),

      bags: this.Bags(),

      prices: this.ShipmentPrices(),

      breakup_values: this.ShipmentBreakupValues(),

      id: Joi.string(),

      dp_details: this.DpDetails(),

      invoice: this.ShipmentInvoice(),

      fulfilling_store: this.PlatformFulfillingStore(),

      payments: this.Payments(),

      gst: this.ShipmentGst(),

      company: this.Company(),

      brand: this.PlatformShipmentBrand(),

      coupon: Joi.object(),

      order_source: Joi.string(),

      is_not_fynd_source: Joi.boolean(),

      comment: Joi.string(),

      promise: this.Promise(),

      tracking_details: this.ShipmentTrackingDetails(),

      is_fynd_coupon: Joi.boolean(),

      order_type: Joi.string(),

      user: this.ShipmentUser(),
    });
  }

  static PlatformShipmentStatus() {
    return Joi.object({
      id: Joi.number(),

      bag_list: Joi.array().items(Joi.number()),

      created_at: Joi.string(),

      status: Joi.string(),

      name: Joi.string(),

      progress: Joi.number(),

      shipment_id: Joi.string(),

      current_shipment_status: Joi.string(),

      color_code: Joi.string(),
    });
  }

  static Bags() {
    return Joi.object({
      financial_breakup: Joi.array().items(this.BagFinancialBreakup()),

      status: this.BagCurrStatus(),

      item: this.BagItem(),

      article: this.BagArticle(),

      id: Joi.number(),

      prices: this.BagPrices(),

      gst_details: this.GstDetails(),

      breakup_values: this.BagBreakupValues(),

      update_time: Joi.number(),

      current_status: this.BagCurrentStatus(),

      bag_status: this.BagStatus(),
    });
  }

  static BagFinancialBreakup() {
    return Joi.object({
      value_of_good: Joi.number(),

      hsn_code: Joi.string(),

      price_effective: Joi.number(),

      cod_charges: Joi.number(),

      gst_fee: Joi.string(),

      fynd_credits: Joi.number(),

      refund_amount: Joi.number(),

      cashback_applied: Joi.number(),

      transfer_price: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid: Joi.number(),

      gst_tax_percentage: Joi.number(),

      size: Joi.string(),

      total_units: Joi.number(),

      discount: Joi.number(),

      coupon_effective_discount: Joi.number(),

      cashback: Joi.number(),

      promotion_effective_discount: Joi.number(),

      gst_tag: Joi.string(),

      delivery_charge: Joi.number(),

      refund_credit: Joi.number(),

      price_marked: Joi.number(),

      identifiers: this.Identifiers(),

      item_name: Joi.string(),

      added_to_fynd_cash: Joi.boolean(),

      brand_calculated_amount: Joi.number(),
    });
  }

  static Identifiers() {
    return Joi.object({
      ean: Joi.string(),
    });
  }

  static BagCurrStatus() {
    return Joi.object({
      enable_tracking: Joi.boolean(),

      is_customer_return_allowed: Joi.boolean(),

      is_active: Joi.boolean(),

      is_returnable: Joi.boolean(),

      can_be_cancelled: Joi.boolean(),
    });
  }

  static BagItem() {
    return Joi.object({
      id: Joi.number(),

      size: Joi.string(),

      slug_key: Joi.string(),

      can_return: Joi.boolean(),

      brand_id: Joi.number(),

      l2_category: Joi.array().items(Joi.string()),

      name: Joi.string(),

      code: Joi.string(),

      can_cancel: Joi.boolean(),

      attributes: this.BagItemAttributes(),

      l3_category_name: Joi.string(),

      l3_category: Joi.number(),

      l1_category: Joi.array().items(Joi.string()),

      image: Joi.array().items(Joi.string()),

      brand: Joi.string(),

      last_updated_at: Joi.string(),
    });
  }

  static BagItemAttributes() {
    return Joi.object({
      item_code: Joi.string(),

      brand_name: Joi.string(),

      country_of_origin: Joi.string(),
    });
  }

  static BagArticle() {
    return Joi.object({
      identifiers: this.ArticleIdentifiers(),

      esp_modified: Joi.boolean(),

      is_set: Joi.boolean(),

      size: Joi.string(),

      code: Joi.string(),

      set: this.Set(),

      seller_identifier: Joi.string(),

      return_config: this.BagArticleReturnConfig(),

      _id: Joi.string(),

      uid: Joi.string(),

      child_details: Joi.object(),
    });
  }

  static ArticleIdentifiers() {
    return Joi.object({
      ean: Joi.string(),
    });
  }

  static Set() {
    return Joi.object({
      quantity: Joi.number(),

      size_distribution: this.SetSizeDistribution(),
    });
  }

  static SetSizeDistribution() {
    return Joi.object({
      sizes: this.Sizes(),
    });
  }

  static Sizes() {
    return Joi.object({
      size: Joi.string(),

      pieces: Joi.number(),
    });
  }

  static BagArticleReturnConfig() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string(),

      returnable: Joi.boolean(),
    });
  }

  static ShipmentPrices() {
    return Joi.object({
      refund_amount: Joi.number(),

      cashback_applied: Joi.number(),

      transfer_price: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid: Joi.number(),

      delivery_charge: Joi.number(),

      coupon_effective_discount: Joi.number(),

      cod_charges: Joi.number(),

      refund_credit: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      gst_tax_percentage: Joi.number(),

      price_marked: Joi.number(),

      price_effective: Joi.number(),

      discount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      fynd_credits: Joi.number(),

      brand_calculated_amount: Joi.number(),

      cashback: Joi.number(),

      value_of_good: Joi.number(),
    });
  }

  static GstDetails() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),

      gst_fee: Joi.string(),

      gst_tag: Joi.string(),

      hsn_code: Joi.string(),

      value_of_good: Joi.number(),

      gst_tax_percentage: Joi.number(),

      is_default_hsn_code: Joi.boolean(),
    });
  }

  static BagBreakupValues() {
    return Joi.object({
      name: Joi.string(),

      display: Joi.string(),

      value: Joi.number(),
    });
  }

  static BagCurrentStatus() {
    return Joi.object({
      updated_at: Joi.string(),

      bag_state_mapper: this.BagStateMapper(),

      status: Joi.string(),

      state_type: Joi.string(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_state_name: Joi.string(),

      is_active: Joi.boolean(),

      display_name: Joi.string(),

      name: Joi.string(),

      app_display_name: Joi.string(),
    });
  }

  static BagStatus() {
    return Joi.object({
      status: Joi.string(),

      state_type: Joi.string(),

      updated_at: Joi.string(),

      bag_state_mapper: this.BagStatusBagStateMapper(),
    });
  }

  static BagStatusBagStateMapper() {
    return Joi.object({
      is_active: Joi.boolean(),

      display_name: Joi.string(),

      name: Joi.string(),

      app_display_name: Joi.string(),

      app_state_name: Joi.string(),
    });
  }

  static BagPrices() {
    return Joi.object({
      cashback: Joi.number(),

      refund_credit: Joi.number(),

      coupon_value: Joi.number(),

      delivery_charge: Joi.number(),

      fynd_credits: Joi.number(),

      price_marked: Joi.number(),

      cashback_applied: Joi.number(),

      value_of_good: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      amount_paid: Joi.number(),

      cod_charges: Joi.number(),

      price_effective: Joi.number(),

      refund_amount: Joi.number(),

      discount: Joi.number(),
    });
  }

  static ShipmentBreakupValues() {
    return Joi.object({
      name: Joi.string(),

      display: Joi.string(),

      value: Joi.number(),
    });
  }

  static DpDetails() {
    return Joi.object({
      gst_tag: Joi.string(),
    });
  }

  static ShipmentInvoice() {
    return Joi.object({
      payment_type: Joi.string(),

      updated_date: Joi.string(),

      invoice_url: Joi.string(),

      label_url: Joi.string(),

      payment_mode: Joi.string(),

      amount_to_collect: Joi.number(),

      rto_address: this.RtoAddress(),
    });
  }

  static RtoAddress() {
    return Joi.object({
      name: Joi.string(),

      id: Joi.number(),

      phone: Joi.string(),

      location_type: Joi.string(),

      store_address_json: this.StoreAddressJson(),

      code: Joi.string(),

      address1: Joi.string(),

      city: Joi.string(),

      country: Joi.string(),

      pincode: Joi.string(),

      company_id: Joi.number(),

      contact_person: Joi.string(),

      state: Joi.string(),

      store_email: Joi.string(),

      address2: Joi.string(),
    });
  }

  static StoreAddressJson() {
    return Joi.object({
      country: Joi.string(),

      latitude: Joi.number(),

      updated_at: Joi.string(),

      area: Joi.string(),

      state: Joi.string(),

      address_type: Joi.string(),

      city: Joi.string(),

      pincode: Joi.string(),

      address1: Joi.string(),

      address2: Joi.string(),

      longitude: Joi.number(),

      email: Joi.string(),

      phone: Joi.string(),

      created_at: Joi.string(),

      contact_person: Joi.string(),

      address_category: Joi.string(),

      version: Joi.string(),

      landmark: Joi.string(),
    });
  }

  static PlatformFulfillingStore() {
    return Joi.object({
      packaging_material_count: Joi.number(),

      location_type: Joi.string(),

      code: Joi.string(),

      city: Joi.string(),

      meta: this.FulfillingStoreMeta(),

      name: Joi.string(),

      is_active: Joi.boolean(),

      address1: Joi.string(),

      store_email: Joi.string(),

      is_archived: Joi.boolean(),

      state: Joi.string(),

      address2: Joi.string(),

      contact_person: Joi.string(),

      phone: Joi.string(),

      is_enabled_for_recon: Joi.boolean(),

      fulfillment_channel: Joi.string(),

      created_at: Joi.string(),

      id: Joi.number(),

      pincode: Joi.string(),

      brand_store_tags: Joi.array().items(Joi.string()),

      company_id: Joi.number(),

      store_address_json: this.FulfillingStoreStoreAddressJson(),

      updated_at: Joi.string(),

      login_username: Joi.string(),

      country: Joi.string(),
    });
  }

  static FulfillingStoreMeta() {
    return Joi.object({
      additional_contact_details: this.AdditionalContactDetails(),

      documents: this.Documents(),

      gst_number: Joi.string(),

      display_name: Joi.string(),

      product_return_config: this.ProductReturnConfig(),

      allow_dp_assignment_from_fynd: Joi.boolean(),

      stage: Joi.string(),

      timing: this.Timing(),
    });
  }

  static AdditionalContactDetails() {
    return Joi.object({
      number: Joi.array().items(Joi.string()),
    });
  }

  static Documents() {
    return Joi.object({
      gst: this.Gst(),
    });
  }

  static Gst() {
    return Joi.object({
      legal_name: Joi.string(),

      type: Joi.string(),

      value: Joi.string(),

      verified: Joi.boolean(),
    });
  }

  static ProductReturnConfig() {
    return Joi.object({
      on_same_store: Joi.boolean(),
    });
  }

  static Timing() {
    return Joi.object({
      opening: this.Opening(),

      weekday: Joi.string(),

      open: Joi.boolean(),

      closing: this.Closing(),
    });
  }

  static Opening() {
    return Joi.object({
      minute: Joi.number(),

      hour: Joi.number(),
    });
  }

  static Closing() {
    return Joi.object({
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static FulfillingStoreStoreAddressJson() {
    return Joi.object({
      address2: Joi.string(),

      area: Joi.string(),

      email: Joi.string(),

      phone: Joi.string(),

      state: Joi.string(),

      contact_person: Joi.string(),

      country: Joi.string(),

      pincode: Joi.string(),

      version: Joi.string(),

      created_at: Joi.string(),

      address_type: Joi.string(),

      city: Joi.string(),

      address1: Joi.string(),

      landmark: Joi.string(),

      latitude: Joi.number(),

      longitude: Joi.number(),

      updated_at: Joi.string(),

      address_category: Joi.string(),
    });
  }

  static Payments() {
    return Joi.object({
      is_active: Joi.boolean(),

      display_name: Joi.string(),

      logo: Joi.string(),

      source: Joi.string(),

      source_nickname: Joi.string(),

      display_priority: Joi.number(),

      id: Joi.number(),

      mode: Joi.string(),

      payment_identifier: Joi.string(),
    });
  }

  static ShipmentGst() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),

      value_of_good: Joi.number(),

      gst_fee: Joi.number(),
    });
  }

  static PlatformShipmentBrand() {
    return Joi.object({
      credit_note_allowed: Joi.boolean(),

      brand_name: Joi.string(),

      modified_on: Joi.string(),

      id: Joi.number(),

      is_virtual_invoice: Joi.boolean(),

      created_on: Joi.string(),

      logo: Joi.string(),
    });
  }

  static Promise() {
    return Joi.object({
      timestamp: this.Timestamp(),
    });
  }

  static Timestamp() {
    return Joi.object({
      min: Joi.string(),

      max: Joi.string(),
    });
  }

  static ShipmentTrackingDetails() {
    return Joi.object({
      status: Joi.string(),

      time: Joi.string(),

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),
    });
  }

  static ShipmentUser() {
    return Joi.object({
      email: Joi.string(),

      id: Joi.number(),

      first_name: Joi.string(),

      mobile: Joi.string(),

      gender: Joi.string(),

      last_name: Joi.string(),

      is_anonymous_user: Joi.boolean(),

      mongo_user_id: Joi.string(),
    });
  }

  static ItemsPayments() {
    return Joi.object({
      display_priority: Joi.number(),

      id: Joi.number(),

      is_active: Joi.boolean(),

      display_name: Joi.string(),

      logo: Joi.string(),

      payment_identifier: Joi.string(),

      source_nickname: Joi.string(),

      mode: Joi.string(),

      source: Joi.string(),
    });
  }

  static Filters() {
    return Joi.object({
      stages: this.Stages(),
    });
  }

  static Stages() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),

      is_default: Joi.boolean(),

      filters: this.StagesFilters(),
    });
  }

  static StagesFilters() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),

      type: Joi.string(),

      options: this.Options(),
    });
  }

  static Options() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  }

  static NextOrderStatus() {
    return Joi.object({
      bag_confirmed: this.BagConfirmed(),

      dp_assigned: this.DpAssigned(),

      return_bag_delivered: this.ReturnBagDelivered(),

      placed: this.Placed(),

      delivery_done: this.DeliveryDone(),

      pending: this.Pending(),

      bag_packed: this.BagPacked(),
    });
  }

  static BagConfirmed() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  }

  static DpAssigned() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  }

  static ReturnBagDelivered() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  }

  static Placed() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  }

  static DeliveryDone() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  }

  static Pending() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  }

  static BagPacked() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  }

  static PlatformOrderPage() {
    return Joi.object({
      next: Joi.string(),

      previous: Joi.string(),

      type: Joi.string(),

      size: Joi.number(),

      current: Joi.number(),

      has_next: Joi.boolean(),

      item_total: this.ItemTotal(),
    });
  }

  static ItemTotal() {
    return Joi.object({
      new: Joi.number(),

      processing: Joi.number(),

      returns: Joi.number(),

      all: Joi.number(),
    });
  }

  static AppliedFilters() {
    return Joi.object({
      stage: Joi.string(),

      stores: Joi.array().items(Joi.string()),

      from_date: Joi.string(),

      to_date: Joi.string(),
    });
  }

  static UpdateOrderReprocessResponse() {
    return Joi.object({
      status: Joi.string().required(),
    });
  }

  static PlatformOrderTrack() {
    return Joi.object({
      success: Joi.boolean().required(),

      request_id: Joi.string().required(),

      message: Joi.string().required(),

      mobile: Joi.string().required(),

      country_code: Joi.string().required(),

      resend_timer: Joi.number().required(),

      resend_token: Joi.string(),
    });
  }

  static GetPingResponse() {
    return Joi.object({
      ping: Joi.string().required(),
    });
  }

  static UpdateShipmentStatusResponse() {
    return Joi.object({
      shipments: Joi.object().required(),

      error_shipments: Joi.array().items(any),
    });
  }

  static UpdateShipmentStatusBody() {
    return Joi.object({
      shipments: Joi.object().required(),

      force_transition: Joi.boolean().required(),

      task: Joi.boolean().required(),
    });
  }

  static PlatformShipmentTrack() {
    return Joi.object({
      results: this.Results().required(),
    });
  }

  static Results() {
    return Joi.object({
      awb: Joi.string(),

      updated_at: Joi.string(),

      last_location_recieved_at: Joi.string(),

      reason: Joi.string(),

      shipment_type: Joi.string(),

      status: Joi.string(),

      updated_time: Joi.string(),

      account_name: Joi.string(),
    });
  }

  static UpdateProcessShipmenstRequestBody() {
    return Joi.object({
      shipment_ids: Joi.array().items(Joi.string()).required(),

      expected_status: Joi.string().required(),
    });
  }

  static UpdateProcessShipmenstRequestResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().required(),
    });
  }

  static GetVoiceCallbackResponse() {
    return Joi.object({
      message: Joi.string().required(),
    });
  }

  static GetClickToCallResponse() {
    return Joi.object({
      message: Joi.string().required(),
    });
  }

  static ApefaceApiError() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      _custom_json: Joi.object(),

      result: Joi.object(),

      app_id: Joi.string(),

      uid: Joi.string(),

      words: Joi.array().items(Joi.string()),
    });
  }

  static GetSearchWordsDetailResponse() {
    return Joi.object({
      items: this.GetSearchWordsData(),

      page: this.Page(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      meta: Joi.object(),

      errors: Joi.object(),

      message: Joi.string(),

      code: Joi.string(),

      status: Joi.number(),
    });
  }

  static SearchKeywordResult() {
    return Joi.object({
      query: Joi.object().required(),

      sort_on: Joi.string().required(),
    });
  }

  static CreateSearchKeyword() {
    return Joi.object({
      _custom_json: Joi.object(),

      result: this.SearchKeywordResult().required(),

      app_id: Joi.string(),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string()),
    });
  }

  static DeleteResponse() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static GetSearchWordsResponse() {
    return Joi.object({
      items: Joi.array().items(this.GetSearchWordsData()),

      page: this.Page(),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      _custom_json: Joi.object(),

      app_id: Joi.string(),

      uid: Joi.string(),

      words: Joi.array().items(Joi.string()),

      results: Joi.array().items(Joi.object()),
    });
  }

  static GetAutocompleteWordsResponse() {
    return Joi.object({
      items: Joi.array().items(this.GetAutocompleteWordsData()),

      page: this.Page(),
    });
  }

  static Media() {
    return Joi.object({
      url: Joi.string(),

      type: Joi.string(),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      query: Joi.object().required(),

      params: Joi.object(),

      url: Joi.string(),

      type: Joi.string().required(),
    });
  }

  static AutocompleteAction() {
    return Joi.object({
      page: this.AutocompletePageAction(),

      type: Joi.string(),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      logo: this.Media(),

      _custom_json: Joi.object(),

      display: Joi.string(),

      action: this.AutocompleteAction(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      _custom_json: Joi.object(),

      app_id: Joi.string(),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string()),

      results: Joi.array().items(this.AutocompleteResult()),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      results: Joi.array().items(Joi.object()),

      _custom_json: Joi.object(),

      words: Joi.array().items(Joi.string()),

      app_id: Joi.string(),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      product_uid: Joi.number().required(),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number().required(),

      max_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      logo: Joi.string(),

      page_visibility: Joi.array().items(Joi.string()),

      modified_on: Joi.string(),

      products: Joi.array().items(this.ProductBundleItem()).required(),

      company_id: Joi.number(),

      meta: Joi.object(),

      same_store_assignment: Joi.boolean(),

      created_by: Joi.object(),

      is_active: Joi.boolean().required(),

      created_on: Joi.string(),

      id: Joi.string(),

      name: Joi.string().required(),

      modified_by: Joi.object(),

      slug: Joi.string().required(),

      choice: Joi.string().required(),
    });
  }

  static GetProductBundleListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.GetProductBundleCreateResponse()),

      page: this.Page(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      logo: Joi.string(),

      page_visibility: Joi.array().items(Joi.string()),

      modified_on: Joi.string(),

      products: Joi.array().items(this.ProductBundleItem()).required(),

      meta: Joi.object(),

      same_store_assignment: Joi.boolean(),

      created_by: Joi.object(),

      is_active: Joi.boolean().required(),

      created_on: Joi.string(),

      name: Joi.string().required(),

      modified_by: Joi.object(),

      slug: Joi.string().required(),

      choice: Joi.string().required(),
    });
  }

  static Price() {
    return Joi.object({
      max_effective: Joi.number(),

      max_marked: Joi.number(),

      min_marked: Joi.number(),

      min_effective: Joi.number(),

      currency: Joi.string(),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      value: Joi.string(),

      quantity: Joi.number(),

      display: Joi.string(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      identifier: Joi.object(),

      attributes: Joi.object(),

      quantity: Joi.number(),

      price: Joi.object(),

      short_description: Joi.string(),

      country_of_origin: Joi.string(),

      uid: Joi.number(),

      item_code: Joi.string(),

      name: Joi.string(),

      slug: Joi.string(),

      images: Joi.array().items(Joi.string()),

      sizes: Joi.array().items(Joi.string()),
    });
  }

  static GetProducts() {
    return Joi.object({
      product_uid: Joi.number(),

      price: this.Price(),

      min_quantity: Joi.number(),

      max_quantity: Joi.number(),

      auto_select: Joi.boolean(),

      sizes: Joi.array().items(this.Size()),

      product_details: this.LimitedProductData(),

      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.string()),

      logo: Joi.string(),

      company_id: Joi.number(),

      products: Joi.array().items(this.GetProducts()),

      meta: Joi.object(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean(),

      name: Joi.string(),

      slug: Joi.string(),

      choice: Joi.string(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      logo: Joi.string(),

      page_visibility: Joi.array().items(Joi.string()),

      modified_on: Joi.string(),

      products: Joi.array().items(this.ProductBundleItem()).required(),

      meta: Joi.object(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean().required(),

      name: Joi.string().required(),

      modified_by: Joi.object(),

      slug: Joi.string().required(),

      choice: Joi.string().required(),
    });
  }

  static ListSizeGuide() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: Joi.object(),
    });
  }

  static Meta() {
    return Joi.object({
      unit: Joi.string(),

      headers: Joi.object(),

      values: Joi.array().items(Joi.object()),
    });
  }

  static Guide() {
    return Joi.object({
      meta: this.Meta(),
    });
  }

  static ValidateSizeGuide() {
    return Joi.object({
      company_id: Joi.number(),

      modified_on: Joi.string(),

      title: Joi.string().required(),

      active: Joi.boolean(),

      brand_id: Joi.number(),

      created_by: Joi.object(),

      subtitle: Joi.string(),

      created_on: Joi.string(),

      name: Joi.string().required(),

      description: Joi.string(),

      modified_by: Joi.object(),

      id: Joi.string(),

      image: Joi.string(),

      tag: Joi.string(),

      guide: this.Guide(),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),

      uid: Joi.number(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      modified_on: Joi.string(),

      company_id: Joi.number(),

      title: Joi.string(),

      active: Joi.boolean(),

      brand_id: Joi.number(),

      created_by: Joi.object(),

      subtitle: Joi.string(),

      created_on: Joi.string(),

      name: Joi.string(),

      modified_by: Joi.object(),

      id: Joi.string(),

      tag: Joi.string(),

      guide: Joi.object(),
    });
  }

  static MetaDataListingFilterMetaResponse() {
    return Joi.object({
      units: Joi.array().items(Joi.object()),

      key: Joi.string(),

      display: Joi.string(),

      filter_types: Joi.array().items(Joi.string()),
    });
  }

  static MetaDataListingFilterResponse() {
    return Joi.object({
      data: Joi.array().items(this.MetaDataListingFilterMetaResponse()),
    });
  }

  static MetaDataListingSortMetaResponse() {
    return Joi.object({
      key: Joi.string(),

      display: Joi.string(),
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
      similar: Joi.object(),

      compare: Joi.object(),

      detail: Joi.object(),

      variant: Joi.object(),
    });
  }

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      listing: this.MetaDataListingResponse(),

      product: this.GetCatalogConfigurationDetailsProduct(),
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
      logo: Joi.string(),

      title: Joi.string(),

      key: Joi.string().required(),

      is_active: Joi.boolean().required(),

      size: this.ProductSize(),

      priority: Joi.number().required(),

      subtitle: Joi.string(),
    });
  }

  static ConfigurationProductSimilar() {
    return Joi.object({
      config: Joi.array().items(this.ConfigurationProductConfig()),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      logo: Joi.string(),

      display_type: Joi.string().required(),

      key: Joi.string().required(),

      is_active: Joi.boolean().required(),

      size: this.ProductSize().required(),

      name: Joi.string().required(),

      priority: Joi.number().required(),
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

  static ConfigurationBucketPoints() {
    return Joi.object({
      end: Joi.number(),

      start: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      bucket_points: Joi.array().items(this.ConfigurationBucketPoints()),

      value: Joi.string(),

      sort: Joi.string(),

      condition: Joi.string(),

      map: Joi.object(),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      logo: Joi.string(),

      key: Joi.string().required(),

      type: Joi.string().required(),

      is_active: Joi.boolean().required(),

      name: Joi.string(),

      priority: Joi.number().required(),

      value_config: this.ConfigurationListingFilterValue(),
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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      logo: Joi.string(),

      key: Joi.string().required(),

      is_active: Joi.boolean().required(),

      name: Joi.string(),

      priority: Joi.number().required(),
    });
  }

  static ConfigurationListingSort() {
    return Joi.object({
      default_key: Joi.string().required(),

      config: Joi.array().items(this.ConfigurationListingSortConfig()),
    });
  }

  static ConfigurationListing() {
    return Joi.object({
      filter: this.ConfigurationListingFilter().required(),

      sort: this.ConfigurationListingSort().required(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      config_id: Joi.string(),

      product: this.ConfigurationProduct(),

      app_id: Joi.string().required(),

      config_type: Joi.string().required(),

      listing: this.ConfigurationListing(),

      id: Joi.string(),
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
      config_id: Joi.string(),

      product: this.ConfigurationProduct(),

      app_id: Joi.string().required(),

      config_type: Joi.string().required(),

      listing: this.ConfigurationListing(),
    });
  }

  static GetCatalogConfigurationDetailsSchemaListing() {
    return Joi.object({
      filter: Joi.object(),

      sort: Joi.object(),
    });
  }

  static EntityConfiguration() {
    return Joi.object({
      config_id: Joi.string(),

      product: this.GetCatalogConfigurationDetailsProduct(),

      app_id: Joi.string().required(),

      config_type: Joi.string().required(),

      listing: this.GetCatalogConfigurationDetailsSchemaListing(),

      id: Joi.string(),
    });
  }

  static GetAppCatalogEntityConfiguration() {
    return Joi.object({
      is_default: Joi.boolean(),

      data: this.EntityConfiguration(),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      value: Joi.string(),

      is_selected: Joi.boolean(),

      name: Joi.string(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      logo: Joi.string(),

      kind: Joi.string(),

      display: Joi.string().required(),

      name: Joi.string().required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      display: Joi.string().required(),

      selected_max: Joi.number(),

      min: Joi.number(),

      display_format: Joi.string(),

      query_format: Joi.string(),

      is_selected: Joi.boolean().required(),

      count: Joi.number(),

      selected_min: Joi.number(),

      value: Joi.string().required(),

      currency_code: Joi.string(),

      currency_symbol: Joi.string(),

      max: Joi.number(),
    });
  }

  static ProductFilters() {
    return Joi.object({
      key: this.ProductFiltersKey().required(),

      values: Joi.array().items(this.ProductFiltersValue()).required(),
    });
  }

  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      sort_on: Joi.array().items(this.ProductSortOn()),

      filters: Joi.array().items(this.ProductFilters()),
    });
  }

  static Media1() {
    return Joi.object({
      url: Joi.string().required(),

      meta: Joi.object(),

      type: Joi.string(),
    });
  }

  static ProductListingActionPage() {
    return Joi.object({
      query: Joi.object(),

      type: Joi.string(),
    });
  }

  static ProductListingAction() {
    return Joi.object({
      page: this.ProductListingActionPage(),

      type: Joi.string(),
    });
  }

  static BannerImage() {
    return Joi.object({
      url: Joi.string(),

      aspect_ratio: Joi.string(),
    });
  }

  static ImageUrls() {
    return Joi.object({
      landscape: this.BannerImage(),

      portrait: this.BannerImage(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      app_id: Joi.string(),

      badge: Joi.object(),

      visible_facets_keys: Joi.array().items(Joi.string()),

      query: Joi.object(),

      logo: this.Media1(),

      action: this.ProductListingAction(),

      allow_sort: Joi.boolean(),

      tag: Joi.array().items(Joi.string()),

      _schedule: Joi.object(),

      cron: Joi.object(),

      banners: this.ImageUrls(),

      allow_facets: Joi.boolean(),

      meta: Joi.object(),

      type: Joi.string(),

      is_active: Joi.boolean(),

      name: Joi.string(),

      description: Joi.string(),

      uid: Joi.string(),

      slug: Joi.string(),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      is_selected: Joi.boolean(),

      display: Joi.string(),

      name: Joi.string(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      is_selected: Joi.boolean(),

      display: Joi.string(),

      name: Joi.string(),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      tags: Joi.array().items(this.CollectionListingFilterTag()),

      type: Joi.array().items(this.CollectionListingFilterType()),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.GetCollectionDetailNest()),

      filters: this.CollectionListingFilter(),

      page: this.Page(),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      text: Joi.string(),

      color: Joi.string(),
    });
  }

  static CollectionImage() {
    return Joi.object({
      url: Joi.string().required(),

      aspect_ratio: Joi.string().required(),
    });
  }

  static SeoDetail() {
    return Joi.object({
      title: Joi.string(),

      description: Joi.string(),
    });
  }

  static UserInfo() {
    return Joi.object({
      email: Joi.string(),

      user_id: Joi.string(),

      uid: Joi.string(),

      username: Joi.string(),
    });
  }

  static Schedule() {
    return Joi.object({
      end: Joi.string(),

      start: Joi.string(),

      duration: Joi.number(),

      cron: Joi.string(),
    });
  }

  static CollectionBanner() {
    return Joi.object({
      landscape: this.CollectionImage().required(),

      portrait: this.CollectionImage().required(),
    });
  }

  static CreateCollection() {
    return Joi.object({
      app_id: Joi.string().required(),

      badge: this.CollectionBadge(),

      visible_facets_keys: Joi.array().items(Joi.string()),

      query: Joi.object(),

      logo: this.CollectionImage().required(),

      published: Joi.boolean(),

      _locale_language: Joi.object(),

      seo: this.SeoDetail(),

      sort_on: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      modified_by: this.UserInfo(),

      allow_sort: Joi.boolean(),

      _schedule: this.Schedule(),

      _custom_json: Joi.object(),

      banners: this.CollectionBanner().required(),

      allow_facets: Joi.boolean(),

      meta: Joi.object(),

      created_by: this.UserInfo(),

      type: Joi.string().required(),

      is_active: Joi.boolean(),

      name: Joi.string().required(),

      description: Joi.string(),

      slug: Joi.string().required(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      logo: this.BannerImage(),

      meta: Joi.object(),

      cron: Joi.object(),

      banners: this.ImageUrls(),

      app_id: Joi.string(),

      type: Joi.string(),

      badge: Joi.object(),

      is_active: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string()),

      name: Joi.string(),

      description: Joi.string(),

      query: Joi.object(),

      slug: Joi.string(),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      tag: Joi.array().items(Joi.string()),

      _schedule: Joi.object(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      logo: this.Media1(),

      meta: Joi.object(),

      cron: Joi.object(),

      banners: this.ImageUrls(),

      app_id: Joi.string(),

      type: Joi.string(),

      badge: Joi.object(),

      is_active: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string()),

      name: Joi.string(),

      description: Joi.string(),

      query: Joi.object(),

      slug: Joi.string(),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      tag: Joi.array().items(Joi.string()),

      _schedule: Joi.object(),
    });
  }

  static Price1() {
    return Joi.object({
      currency_symbol: Joi.string(),

      currency_code: Joi.string(),

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

  static ProductListingDetail() {
    return Joi.object({
      highlights: Joi.array().items(Joi.string()),

      attributes: Joi.object(),

      discount: Joi.string(),

      price: this.ProductListingPrice(),

      medias: Joi.array().items(this.Media1()),

      rating_count: Joi.number(),

      image_nature: Joi.string(),

      promo_meta: Joi.object(),

      item_type: Joi.string(),

      short_description: Joi.string(),

      product_online_date: Joi.string(),

      sellable: Joi.boolean(),

      description: Joi.string(),

      teaser_tag: Joi.object(),

      rating: Joi.number(),

      has_variant: Joi.boolean(),

      color: Joi.string(),

      type: Joi.string(),

      similars: Joi.array().items(Joi.string()),

      uid: Joi.number(),

      tryouts: Joi.array().items(Joi.string()),

      name: Joi.string(),

      slug: Joi.string().required(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      items: Joi.array().items(this.ProductListingDetail()),

      filters: Joi.array().items(this.ProductFilters()),

      page: this.Page(),

      sort_on: Joi.array().items(this.ProductSortOn()),
    });
  }

  static CollectionItemRequest() {
    return Joi.object({
      page_no: Joi.number().required(),

      page_size: Joi.number().required(),
    });
  }

  static UpdatedResponse() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      out_of_stock_count: Joi.number(),

      count: Joi.number(),

      sellable_count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      available_articles: Joi.number(),

      article_freshness: Joi.number(),

      available_sizes: Joi.number(),

      total_articles: Joi.number(),

      name: Joi.string(),

      total_sizes: Joi.number(),
    });
  }

  static CatalogInsightResponse() {
    return Joi.object({
      item: this.CatalogInsightItem(),

      brand_distribution: this.CatalogInsightBrand(),
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
      opt_level: Joi.string().required(),

      enabled: Joi.boolean(),

      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      company_id: Joi.number().required(),

      enabled: Joi.boolean().required(),

      modified_on: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().required(),

      created_by: Joi.object(),

      platform: Joi.string().required(),

      created_on: Joi.number().required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      modified_by: Joi.object(),
    });
  }

  static GetOptInPlatform() {
    return Joi.object({
      items: Joi.array().items(this.CompanyOptIn()).required(),

      page: this.Page().required(),
    });
  }

  static OptinCompanyDetail() {
    return Joi.object({
      company_type: Joi.string(),

      name: Joi.string(),

      business_type: Joi.string(),

      uid: Joi.number(),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_id: Joi.number(),

      company_id: Joi.number(),

      total_article: Joi.number(),

      brand_name: Joi.string(),
    });
  }

  static OptinCompanyBrandDetailsView() {
    return Joi.object({
      items: Joi.array().items(this.CompanyBrandDetail()),

      page: this.Page(),
    });
  }

  static OptinCompanyMetrics() {
    return Joi.object({
      brand: Joi.number(),

      company: Joi.string(),

      store: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      timing: Joi.object(),

      modified_on: Joi.string(),

      company_id: Joi.number(),

      store_code: Joi.string(),

      store_type: Joi.string(),

      created_on: Joi.string(),

      display_name: Joi.string(),

      additional_contacts: Joi.array().items(Joi.object()),

      uid: Joi.number(),

      name: Joi.string(),

      documents: Joi.array().items(Joi.object()),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      items: Joi.array().items(this.StoreDetail()),

      page: this.Page(),
    });
  }

  static MultipleCommon() {
    return Joi.object({
      uid: Joi.string(),
    });
  }

  static BasePage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      size: Joi.number(),

      item_total: Joi.number(),

      current: Joi.number(),
    });
  }

  static ProdcutTemplateCategoriesResponse() {
    return Joi.object({
      items: this.MultipleCommon(),

      page: this.BasePage(),
    });
  }

  static PTErrorResponse() {
    return Joi.object({
      meta: Joi.object(),

      errors: Joi.object(),

      message: Joi.string(),

      code: Joi.string(),

      status: Joi.number(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      contact: Joi.string(),

      user_id: Joi.string(),

      username: Joi.string(),
    });
  }

  static GetDepartment() {
    return Joi.object({
      logo: Joi.string(),

      modified_on: Joi.string(),

      created_by: this.UserSerializer(),

      priority_order: Joi.number(),

      page_size: Joi.number(),

      is_active: Joi.boolean(),

      search: Joi.string(),

      synonyms: Joi.array().items(Joi.string()),

      created_on: Joi.string(),

      modified_by: this.UserSerializer(),

      name: Joi.string(),

      uid: Joi.number(),

      page_no: Joi.number(),

      slug: Joi.string(),

      item_type: Joi.string(),
    });
  }

  static BasePage1() {
    return Joi.object({
      next_page_id: Joi.string(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      item_total: Joi.number(),
    });
  }

  static DepartmentsResponse() {
    return Joi.object({
      items: Joi.array().items(this.GetDepartment()),

      page: this.BasePage1(),
    });
  }

  static DepartmentErrorResponse() {
    return Joi.object({
      meta: Joi.object(),

      errors: Joi.object(),

      message: Joi.string(),

      code: Joi.string(),

      status: Joi.number(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      logo: Joi.string(),

      departments: Joi.array().items(Joi.string()),

      modified_on: Joi.string(),

      is_archived: Joi.boolean(),

      categories: Joi.array().items(Joi.string()),

      attributes: Joi.array().items(Joi.string()),

      is_physical: Joi.boolean().required(),

      created_by: Joi.object(),

      is_active: Joi.boolean(),

      created_on: Joi.string(),

      name: Joi.string(),

      description: Joi.string(),

      modified_by: Joi.object(),

      slug: Joi.string().required(),

      tag: Joi.string(),
    });
  }

  static TemplatesResponse() {
    return Joi.object({
      items: this.ProductTemplate(),

      page: this.BasePage(),
    });
  }

  static TemplatesValidationResponse() {
    return Joi.object({
      data: this.MultipleCommon(),
    });
  }

  static InventoryValidationResponse() {
    return Joi.object({
      message: Joi.string(),

      data: this.MultipleCommon(),
    });
  }

  static HSNData() {
    return Joi.object({
      country_of_origin: Joi.array().items(Joi.string()),

      hsn_code: Joi.array().items(Joi.string()),
    });
  }

  static HSNCodesResponse() {
    return Joi.object({
      message: Joi.string(),

      data: this.HSNData(),
    });
  }

  static ProductConfligurationDownloads() {
    return Joi.object({
      multivalue: Joi.boolean(),

      data: Joi.array().items(this.MultipleCommon()),
    });
  }

  static Hierarchy() {
    return Joi.object({
      department: Joi.number().required(),

      l1: Joi.number().required(),

      l2: Joi.number().required(),
    });
  }

  static Media2() {
    return Joi.object({
      logo: Joi.string().required(),

      landscape: Joi.string().required(),

      portrait: Joi.string().required(),
    });
  }

  static CategoryMappingValues() {
    return Joi.object({
      name: Joi.string().required(),

      catalog_id: Joi.number(),
    });
  }

  static CategoryMapping() {
    return Joi.object({
      google: this.CategoryMappingValues(),

      ajio: this.CategoryMappingValues(),

      facebook: this.CategoryMappingValues(),
    });
  }

  static Category() {
    return Joi.object({
      departments: Joi.array().items(Joi.number()).required(),

      modified_on: Joi.string(),

      level: Joi.number().required(),

      hierarchy: Joi.array().items(this.Hierarchy()),

      created_by: Joi.object(),

      media: this.Media2(),

      _id: Joi.string(),

      is_active: Joi.boolean().required(),

      created_on: Joi.string(),

      tryouts: Joi.array().items(Joi.string()),

      synonyms: Joi.array().items(Joi.string()),

      name: Joi.string().required(),

      uid: Joi.number(),

      modified_by: Joi.object(),

      slug: Joi.string(),

      marketplaces: this.CategoryMapping(),

      priority: Joi.number(),
    });
  }

  static CategoryResponse() {
    return Joi.object({
      items: Joi.array().items(this.Category()),

      page: this.BasePage1(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      departments: Joi.array().items(Joi.number()).required(),

      level: Joi.number().required(),

      hierarchy: Joi.array().items(this.Hierarchy()),

      media: this.Media2(),

      is_active: Joi.boolean().required(),

      synonyms: Joi.array().items(Joi.string()),

      name: Joi.string().required(),

      tryouts: Joi.array().items(Joi.string()),

      slug: Joi.string(),

      marketplaces: this.CategoryMapping(),

      priority: Joi.number(),
    });
  }

  static CategoryCreateResponse() {
    return Joi.object({
      message: Joi.string(),

      uid: Joi.number(),
    });
  }

  static CategoryUpdateResponse() {
    return Joi.object({
      message: Joi.string(),

      success: Joi.boolean(),
    });
  }

  static VerifiedBy() {
    return Joi.object({
      user_id: Joi.string(),

      username: Joi.string(),
    });
  }

  static UserCommon() {
    return Joi.object({
      company_id: Joi.number(),

      user_id: Joi.string(),

      username: Joi.string(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_color: Joi.string(),

      verified_by: this.VerifiedBy(),

      essential: Joi.string(),

      verified_on: Joi.string(),

      created_on: Joi.string(),

      sleeve_length: Joi.string(),

      meta_nature: Joi.string(),

      image_nature: Joi.string(),

      l3_mapping: Joi.array().items(Joi.string()),

      neck_type: Joi.string(),

      modified_by: this.UserCommon(),

      modified_on: Joi.string(),

      product_fit: Joi.string(),

      pattern: Joi.string(),

      stage: Joi.string(),

      material: Joi.string(),

      is_image_less_product: Joi.boolean(),

      color: Joi.string(),

      created_by: this.UserCommon(),

      primary_material: Joi.string(),

      gender: Joi.array().items(Joi.string()),
    });
  }

  static Logo() {
    return Joi.object({
      secure_url: Joi.string(),

      url: Joi.string(),

      aspect_ratio: Joi.string(),

      aspect_ratio_f: Joi.number(),
    });
  }

  static Brand() {
    return Joi.object({
      logo: this.Logo(),

      uid: Joi.number(),

      name: Joi.string(),
    });
  }

  static ProductPublished() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.number(),
    });
  }

  static Product() {
    return Joi.object({
      highlights: Joi.string(),

      attributes: this.Attributes(),

      all_sizes: Joi.array().items(Joi.string()),

      category_slug: Joi.string(),

      country_of_origin: Joi.string(),

      images: Joi.array().items(Joi.string()),

      sizes: Joi.array().items(Joi.object()),

      company_id: Joi.number(),

      is_dependent: Joi.boolean(),

      brand: this.Brand(),

      item_type: Joi.string(),

      id: Joi.string(),

      description: Joi.string(),

      currency: Joi.string(),

      media: Joi.array().items(Joi.string()),

      product_publish: this.ProductPublished(),

      size_guide: Joi.string(),

      item_code: Joi.string(),

      departments: Joi.array().items(Joi.number()),

      hsn_code: Joi.string(),

      is_set: Joi.boolean(),

      is_active: Joi.boolean(),

      template_tag: Joi.string(),

      name: Joi.string(),

      uid: Joi.number(),

      multi_size: Joi.boolean(),

      slug: Joi.string(),
    });
  }

  static PageData() {
    return Joi.object({
      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      size: Joi.number(),

      item_total: Joi.number(),

      current: Joi.string(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.Product()),

      page: this.PageData(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string(),

      returnable: Joi.boolean(),
    });
  }

  static Trader() {
    return Joi.object({
      address: Joi.string().required(),

      name: Joi.string().required(),
    });
  }

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string(),
    });
  }

  static OrderQuantity() {
    return Joi.object({
      minimum: Joi.number(),

      maximum: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static TeaserTag() {
    return Joi.object({
      url: Joi.string(),

      tag: Joi.string(),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string(),

      is_custom_order: Joi.boolean(),
    });
  }

  static ProductCreateUpdate() {
    return Joi.object({
      highlights: Joi.array().items(Joi.string()),

      product_group_tag: Joi.array().items(Joi.string()),

      return_config: this.ReturnConfig(),

      category_slug: Joi.string().required(),

      country_of_origin: Joi.string().required(),

      company_id: Joi.number().required(),

      change_request_id: Joi.string(),

      multi_size: Joi.boolean(),

      is_dependent: Joi.boolean(),

      tags: Joi.array().items(Joi.string()),

      short_description: Joi.string(),

      trader: this.Trader(),

      item_type: Joi.string().required(),

      no_of_boxes: Joi.number(),

      currency: Joi.string().required(),

      _custom_json: Joi.object(),

      variants: Joi.object(),

      media: Joi.array().items(this.Media1()),

      brand_uid: Joi.number().required(),

      product_publish: this.ProductPublish(),

      moq: this.OrderQuantity(),

      size_guide: Joi.string(),

      item_code: Joi.string().required(),

      is_image_less_product: Joi.boolean(),

      teaser_tag: this.TeaserTag(),

      departments: Joi.array().items(Joi.number()).required(),

      hsn_code: Joi.string().required(),

      trader_type: Joi.string(),

      is_set: Joi.boolean(),

      custom_order: this.CustomOrder(),

      is_active: Joi.boolean(),

      template_tag: Joi.string().required(),

      name: Joi.string().required(),

      description: Joi.string(),

      uid: Joi.number(),

      slug: Joi.string().required(),

      requester: Joi.string(),
    });
  }

  static ValidateProduct() {
    return Joi.object({
      valid: Joi.boolean(),
    });
  }

  static UserDetail() {
    return Joi.object({
      full_name: Joi.string(),

      user_id: Joi.string(),

      username: Joi.string(),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      company_id: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string()),

      modified_on: Joi.string(),

      template: this.ProductTemplate(),

      created_by: this.UserDetail(),

      cancelled: Joi.number(),

      is_active: Joi.boolean(),

      created_on: Joi.string(),

      total: Joi.number(),

      template_tag: Joi.string(),

      modified_by: this.UserDetail(),

      failed: Joi.number(),

      stage: Joi.string(),

      succeed: Joi.number(),

      failed_records: Joi.array().items(Joi.string()),

      file_path: Joi.string(),
    });
  }

  static ProductBulkRequestList() {
    return Joi.object({
      items: this.ProductBulkRequest(),

      page: this.PageData(),
    });
  }

  static UserInfo1() {
    return Joi.object({
      email: Joi.string(),

      user_id: Joi.string(),

      uid: Joi.string(),

      username: Joi.string(),
    });
  }

  static BulkJob() {
    return Joi.object({
      modified_on: Joi.string(),

      company_id: Joi.number().required(),

      cancelled_records: Joi.array().items(Joi.object()),

      succeed: Joi.number(),

      custom_template_tag: Joi.string(),

      created_by: this.UserInfo1(),

      file_path: Joi.string(),

      is_active: Joi.boolean(),

      created_on: Joi.string().required(),

      total: Joi.number().required(),

      template_tag: Joi.string(),

      failed: Joi.number(),

      stage: Joi.string(),

      modified_by: this.UserInfo1(),

      failed_records: Joi.array().items(Joi.object()),

      cancelled: Joi.number(),

      tracking_url: Joi.string(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      company_id: Joi.number().required(),

      template_tag: Joi.string().required(),

      batch_id: Joi.string().required(),

      data: Joi.array().items(Joi.object()).required(),
    });
  }

  static NestedTags() {
    return Joi.object({
      tags: Joi.array().items(Joi.string()),
    });
  }

  static ProductTagsViewResponse() {
    return Joi.object({
      items: this.NestedTags(),
    });
  }

  static Items() {
    return Joi.object({
      modified_on: Joi.string(),

      cancelled_records: Joi.array().items(Joi.string()),

      company_id: Joi.number(),

      succeed: Joi.number(),

      retry: Joi.number(),

      created_by: this.UserCommon(),

      cancelled: Joi.number(),

      created_on: Joi.string(),

      is_active: Joi.boolean(),

      total: Joi.number(),

      failed: Joi.number(),

      stage: Joi.string(),

      modified_by: this.UserCommon(),

      id: Joi.string(),

      failed_records: Joi.array().items(Joi.string()),

      file_path: Joi.string(),

      tracking_url: Joi.string(),
    });
  }

  static BulkAssetResponse() {
    return Joi.object({
      items: Joi.array().items(this.Items()),

      page: this.PageData(),
    });
  }

  static ProductBulkAssets() {
    return Joi.object({
      user: Joi.object().required(),

      company_id: Joi.number(),

      url: Joi.string().required(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      page_size: Joi.number(),

      search: Joi.string(),

      total: Joi.number(),

      size: Joi.string(),

      page_no: Joi.number(),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_value: Joi.string().required(),

      gtin_type: Joi.string().required(),

      primary: Joi.boolean(),
    });
  }

  static SetSize() {
    return Joi.object({
      pieces: Joi.number().required(),

      size: Joi.string().required(),
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

      quantity: Joi.number(),
    });
  }

  static InvSize() {
    return Joi.object({
      item_weight_unit_of_measure: Joi.string(),

      item_length: Joi.number(),

      price_effective: Joi.number().required(),

      price_transfer: Joi.number(),

      store_code: Joi.string().required(),

      quantity: Joi.number().required(),

      identifiers: Joi.array().items(this.GTIN()).required(),

      is_set: Joi.boolean(),

      price: Joi.number().required(),

      set: this.InventorySet(),

      size: Joi.string().required(),

      item_dimensions_unit_of_measure: Joi.string(),

      item_height: Joi.number(),

      item_weight: Joi.number(),

      currency: Joi.string().required(),

      item_width: Joi.number(),
    });
  }

  static ItemQuery() {
    return Joi.object({
      brand_uid: Joi.number(),

      uid: Joi.number(),

      item_code: Joi.string(),
    });
  }

  static InventoryRequest1() {
    return Joi.object({
      company_id: Joi.number().required(),

      sizes: Joi.array().items(this.InvSize()).required(),

      item: this.ItemQuery().required(),
    });
  }

  static BulkRequestGet() {
    return Joi.object({
      start_date: Joi.string(),

      end_date: Joi.string(),

      custom_template_tag: Joi.string(),

      page_size: Joi.number(),

      search: Joi.string(),

      total: Joi.number(),

      template_tag: Joi.string(),

      stage: Joi.string(),

      page_no: Joi.number(),
    });
  }

  static CommonResponse() {
    return Joi.object({
      success: Joi.string(),
    });
  }

  static Size1() {
    return Joi.object({
      item_weight_unit_of_measure: Joi.string(),

      item_length: Joi.number(),

      price_effective: Joi.number().required(),

      price_transfer: Joi.number(),

      store_code: Joi.string().required(),

      quantity: Joi.number().required(),

      identifiers: Joi.array().items(Joi.object()),

      is_set: Joi.boolean(),

      price: Joi.number().required(),

      set: this.InventorySet(),

      size: Joi.string(),

      seller_identifier: Joi.string().required(),

      item_dimensions_unit_of_measure: Joi.string(),

      item_height: Joi.number(),

      item_weight: Joi.number(),

      currency: Joi.string().required(),

      item_width: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      user: Joi.object(),

      company_id: Joi.number().required(),

      sizes: Joi.array().items(this.Size1()).required(),

      batch_id: Joi.string().required(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      task_id: Joi.string().required(),

      url: Joi.string(),

      status: Joi.string(),

      completed_on: Joi.string(),

      seller_id: Joi.number().required(),

      trigger_on: Joi.string(),

      request_params: Joi.object(),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      brand: Joi.array().items(Joi.number()),

      store: Joi.array().items(Joi.number()),

      type: Joi.string(),
    });
  }

  static FilerList() {
    return Joi.object({
      value: Joi.string(),

      display: Joi.string(),
    });
  }

  static InventoryConfig() {
    return Joi.object({
      multivalues: Joi.boolean(),

      data: Joi.array().items(this.FilerList()),
    });
  }

  static CompanyAddress() {
    return Joi.object({
      country_code: Joi.string(),

      longitude: Joi.number().required(),

      state: Joi.string().required(),

      pincode: Joi.number().required(),

      city: Joi.string().required(),

      landmark: Joi.string(),

      address1: Joi.string().required(),

      address2: Joi.string(),

      country: Joi.string().required(),

      latitude: Joi.number().required(),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().required(),

      value: Joi.string().required(),

      verified: Joi.boolean(),

      type: Joi.string().required(),

      url: Joi.string(),
    });
  }

  static ReferralInfo() {
    return Joi.object({
      referral_code: Joi.string(),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country_code: Joi.string(),

      country: Joi.string(),
    });
  }

  static CompanyStoreSerializerRequest() {
    return Joi.object({
      address: this.CompanyAddress().required(),

      franchise_enabled: Joi.boolean(),

      notification_emails: Joi.array().items(Joi.string()),

      warnings: Joi.object(),

      document: this.Document().required(),

      business_type: Joi.string().required(),

      name: Joi.string().required(),

      referral_info: this.ReferralInfo(),

      business_country_info: this.BusinessCountryInfo().required(),

      brands: Joi.array().items(Joi.number()).required(),

      business_info: Joi.string(),

      uid: Joi.number(),
    });
  }

  static Website() {
    return Joi.object({
      url: Joi.string(),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      website: this.Website(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      country_code: Joi.string(),

      longitude: Joi.number(),

      state: Joi.string(),

      pincode: Joi.number(),

      city: Joi.string(),

      landmark: Joi.string(),

      address1: Joi.string(),

      address_type: Joi.string(),

      address2: Joi.string(),

      country: Joi.string(),

      latitude: Joi.number(),
    });
  }

  static BusinessCountryInfo1() {
    return Joi.object({
      country_code: Joi.string(),

      country: Joi.string(),
    });
  }

  static ContactDetails() {
    return Joi.object({
      phone: Joi.array().items(this.PhoneNumber()),

      emails: Joi.array().items(Joi.string()),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      modified_by: this.UserSerializer(),

      warnings: Joi.object(),

      business_type: Joi.string().required(),

      business_details: this.BusinessDetails(),

      uid: Joi.number().required(),

      verified_on: Joi.string(),

      company_type: Joi.string().required(),

      business_info: Joi.string(),

      created_on: Joi.string(),

      verified_by: this.UserSerializer(),

      addresses: Joi.array().items(this.GetAddressSerializer()),

      stage: Joi.string(),

      created_by: this.UserSerializer(),

      business_country_info: this.BusinessCountryInfo1(),

      contact_details: this.ContactDetails(),

      franchise_enabled: Joi.boolean(),

      notification_emails: Joi.array().items(Joi.string()),

      documents: Joi.array().items(this.Document()),

      modified_on: Joi.string(),

      name: Joi.string(),
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
      product: this.DocumentsObj(),

      store: this.DocumentsObj(),

      store_documents: this.DocumentsObj(),

      company_documents: this.DocumentsObj(),

      uid: Joi.number(),

      brand: this.DocumentsObj(),

      stage: Joi.string(),
    });
  }

  static BrandBannerSerializer() {
    return Joi.object({
      landscape: Joi.string(),

      portrait: Joi.string(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      description: Joi.string(),

      company_id: Joi.number(),

      synonyms: Joi.array().items(Joi.string()),

      _custom_json: Joi.object(),

      _locale_language: Joi.object(),

      brand_tier: Joi.string(),

      logo: Joi.string().required(),

      name: Joi.string().required(),

      banner: this.BrandBannerSerializer(),

      uid: Joi.number(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      username: Joi.string(),

      user_id: Joi.string(),

      contact: Joi.string(),
    });
  }

  static GetBrandResponseSerializer() {
    return Joi.object({
      description: Joi.string(),

      created_by: this.UserSerializer1(),

      modified_by: this.UserSerializer1(),

      synonyms: Joi.array().items(Joi.string()),

      reject_reason: Joi.string(),

      slug_key: Joi.string(),

      _custom_json: Joi.object(),

      warnings: Joi.object(),

      _locale_language: Joi.object(),

      banner: this.BrandBannerSerializer(),

      logo: Joi.string(),

      name: Joi.string().required(),

      created_on: Joi.string(),

      verified_by: this.UserSerializer1(),

      modified_on: Joi.string(),

      uid: Joi.number(),

      verified_on: Joi.string(),

      stage: Joi.string(),
    });
  }

  static CompanyBrandListSerializer() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: Joi.object(),
    });
  }

  static CompanyBrandPostRequestSerializer() {
    return Joi.object({
      company: Joi.number().required(),

      uid: Joi.number(),

      brands: Joi.array().items(Joi.number()).required(),
    });
  }

  static LocationListSerializer() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: Joi.object(),
    });
  }

  static GetAddressSerializer1() {
    return Joi.object({
      country_code: Joi.string(),

      longitude: Joi.number(),

      state: Joi.string(),

      pincode: Joi.number(),

      city: Joi.string(),

      landmark: Joi.string(),

      address1: Joi.string(),

      address_type: Joi.string(),

      address2: Joi.string(),

      country: Joi.string(),

      latitude: Joi.number(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      mobile_no: this.PhoneNumber().required(),

      name: Joi.string(),

      email: Joi.string(),
    });
  }

  static LocationTimingSerializer() {
    return Joi.object({
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      opening: this.LocationTimingSerializer(),

      weekday: Joi.string().required(),

      closing: this.LocationTimingSerializer(),

      open: Joi.boolean().required(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      username: Joi.string(),

      enabled: Joi.boolean(),

      password: Joi.string(),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_waybill: this.InvoiceCredSerializer(),

      e_invoice: this.InvoiceCredSerializer(),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      address: this.GetAddressSerializer1().required(),

      manager: this.LocationManagerSerializer(),

      notification_emails: Joi.array().items(Joi.string()),

      _custom_json: Joi.object(),

      warnings: Joi.object(),

      code: Joi.string().required(),

      company: Joi.number().required(),

      documents: Joi.array().items(this.Document()),

      contact_numbers: Joi.array().items(this.PhoneNumber()),

      timing: Joi.array().items(this.LocationDayWiseSerializer()),

      display_name: Joi.string().required(),

      stage: Joi.string(),

      name: Joi.string().required(),

      product_return_config: this.ProductReturnConfigSerializer(),

      gst_credentials: this.InvoiceDetailsSerializer(),

      uid: Joi.number(),

      store_type: Joi.string(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      created_by: this.UserSerializer(),

      modified_by: this.UserSerializer(),

      reject_reason: Joi.string(),

      company_type: Joi.string(),

      business_type: Joi.string(),

      name: Joi.string(),

      created_on: Joi.string(),

      verified_by: this.UserSerializer(),

      modified_on: Joi.string(),

      uid: Joi.number(),

      verified_on: Joi.string(),

      addresses: Joi.array().items(this.GetAddressSerializer()),

      stage: Joi.string(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      inventory: Joi.string(),

      order: Joi.string(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      modified_by: this.UserSerializer1(),

      warnings: Joi.object(),

      gst_credentials: this.InvoiceDetailsSerializer(),

      uid: Joi.number(),

      verified_on: Joi.string(),

      address: this.GetAddressSerializer().required(),

      company: this.GetCompanySerializer(),

      timing: Joi.array().items(this.LocationDayWiseSerializer()),

      product_return_config: this.ProductReturnConfigSerializer(),

      created_on: Joi.string(),

      verified_by: this.UserSerializer1(),

      integration_type: this.LocationIntegrationType(),

      stage: Joi.string(),

      store_type: Joi.string(),

      created_by: this.UserSerializer1(),

      phone_number: Joi.string().required(),

      display_name: Joi.string().required(),

      manager: this.LocationManagerSerializer(),

      notification_emails: Joi.array().items(Joi.string()),

      _custom_json: Joi.object(),

      code: Joi.string().required(),

      documents: Joi.array().items(this.Document()),

      contact_numbers: Joi.array().items(this.PhoneNumber()),

      modified_on: Joi.string(),

      name: Joi.string().required(),
    });
  }

  static FailedResponse() {
    return Joi.object({
      message: Joi.string().required(),
    });
  }

  static CDN() {
    return Joi.object({
      url: Joi.string().required(),
    });
  }

  static Upload() {
    return Joi.object({
      expiry: Joi.number().required(),

      url: Joi.string().required(),
    });
  }

  static StartResponse() {
    return Joi.object({
      file_name: Joi.string().required(),

      file_path: Joi.string().required(),

      content_type: Joi.string().required(),

      method: Joi.string().required(),

      namespace: Joi.string().required(),

      operation: Joi.string().required(),

      size: Joi.number().required(),

      upload: this.Upload().required(),

      cdn: this.CDN().required(),
    });
  }

  static StartRequest() {
    return Joi.object({
      file_name: Joi.string().required(),

      content_type: Joi.string().required(),

      size: Joi.number().required(),

      tags: Joi.array().items(Joi.string()),
    });
  }

  static CompleteResponse() {
    return Joi.object({
      _id: Joi.string().required(),

      file_name: Joi.string().required(),

      file_path: Joi.string().required(),

      content_type: Joi.string().required(),

      method: Joi.string().required(),

      namespace: Joi.string().required(),

      operation: Joi.string().required(),

      size: Joi.number().required(),

      upload: this.Upload().required(),

      cdn: this.CDN().required(),

      success: Joi.string().required(),

      tags: Joi.array().items(Joi.string()),

      created_on: Joi.string().required(),

      modified_on: Joi.string().required(),
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
      id: Joi.string().required(),

      name: Joi.string().required(),

      data: this.BulkRequest().required(),

      opts: this.Opts().required(),

      progress: Joi.number().required(),

      delay: Joi.number().required(),

      timestamp: Joi.number().required(),

      attempts_made: Joi.number().required(),

      stacktrace: Joi.array().items(Joi.string()),

      finished_on: Joi.number().required(),

      processed_on: Joi.number().required(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      tracking_url: Joi.string().required(),

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
      namespace: Joi.string().required(),

      rewrite: Joi.string().required(),

      basepath: Joi.string(),
    });
  }

  static BulkRequest() {
    return Joi.object({
      urls: Joi.array().items(Joi.string()).required(),

      destination: this.Destination().required(),

      configuration: this.ReqConfiguration(),
    });
  }

  static Urls() {
    return Joi.object({
      url: Joi.string().required(),

      signed_url: Joi.string().required(),

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

      urls: Joi.array().items(Joi.string()).required(),
    });
  }

  static DbRecord() {
    return Joi.object({
      success: Joi.boolean().required(),

      tags: Joi.array().items(Joi.string()).required(),

      _id: Joi.string().required(),

      file_name: Joi.string().required(),

      operation: Joi.string(),

      namespace: Joi.string().required(),

      content_type: Joi.string().required(),

      file_path: Joi.string().required(),

      upload: this.Upload().required(),

      cdn: this.CDN().required(),

      created_on: Joi.string().required(),

      modified_on: Joi.string().required(),
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
      link: Joi.string(),

      type: Joi.string(),
    });
  }

  static WebRedirect() {
    return Joi.object({
      link: Joi.string(),

      type: Joi.string(),
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

  static Attribution() {
    return Joi.object({
      campaign_cookie_expiry: Joi.string(),
    });
  }

  static SocialMediaTags() {
    return Joi.object({
      title: Joi.string(),

      description: Joi.string(),

      image: Joi.string(),
    });
  }

  static ShortLinkReq() {
    return Joi.object({
      title: Joi.string().required(),

      url: Joi.string().required(),

      hash: Joi.string(),

      active: Joi.boolean(),

      expire_at: Joi.string(),

      enable_tracking: Joi.boolean(),

      personalized: Joi.boolean(),

      campaign: this.Campaign(),

      redirects: this.Redirects(),

      attribution: this.Attribution(),

      social_media_tags: this.SocialMediaTags(),

      count: Joi.number(),
    });
  }

  static UrlInfo() {
    return Joi.object({
      original: Joi.string(),

      short: Joi.string(),

      hash: Joi.string(),
    });
  }

  static ShortLinkRes() {
    return Joi.object({
      title: Joi.string(),

      url: this.UrlInfo(),

      created_by: Joi.string(),

      app_redirect: Joi.boolean(),

      fallback: Joi.string(),

      active: Joi.boolean(),

      _id: Joi.string(),

      enable_tracking: Joi.boolean(),

      expire_at: Joi.string(),

      application: Joi.string(),

      user_id: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      personalized: Joi.boolean(),

      campaign: this.Campaign(),

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

      business: Joi.string(),

      comms_enabled: Joi.boolean(),

      platforms: Joi.array().items(Joi.string()),

      _id: Joi.string(),

      loyalty_points: this.LoyaltyPoints(),

      app: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      modified_by: Joi.string(),
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

      franchise_enabled: Joi.boolean(),

      exclude_category: Joi.array().items(Joi.any()),

      image: Joi.array().items(Joi.string()),

      company_store: Joi.array().items(Joi.any()),
    });
  }

  static InventoryBrand() {
    return Joi.object({
      criteria: Joi.string(),

      brands: Joi.array().items(Joi.any()),
    });
  }

  static InventoryStore() {
    return Joi.object({
      criteria: Joi.string(),

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
      criteria: Joi.string(),

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

      provider: Joi.string(),
    });
  }

  static ArticleAssignmentConfig() {
    return Joi.object({
      rules: this.ArticleAssignmentRules(),

      post_order_reassignment: Joi.boolean(),

      enforced_stores: Joi.array().items(Joi.any()),
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

      strategy_channel: Joi.string(),
    });
  }

  static AppCartConfig() {
    return Joi.object({
      delivery_charges: this.DeliveryCharges(),

      enabled: Joi.boolean(),

      max_cart_items: Joi.number(),

      min_cart_value: Joi.number(),

      bulk_coupons: Joi.boolean(),
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

      mode_of_payment: Joi.string(),

      source: Joi.string(),

      enabled: Joi.boolean(),

      cod_amount_limit: Joi.number(),

      cod_charges: Joi.number(),
    });
  }

  static CallbackUrl() {
    return Joi.object({
      app: Joi.string(),

      web: Joi.string(),
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

      default_options: Joi.string(),

      payment_identifier: Joi.string(),
    });
  }

  static AppOrderConfig() {
    return Joi.object({
      enabled: Joi.boolean(),

      force_reassignment: Joi.boolean(),
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

  static LoyaltyPoints() {
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

      loyalty_points: this.LoyaltyPoints(),

      comms_enabled: Joi.boolean(),
    });
  }

  static BrandCompanyInfo() {
    return Joi.object({
      company_name: Joi.string(),

      company_id: Joi.number(),
    });
  }

  static CompanyByBrandsRequest() {
    return Joi.object({
      brands: Joi.number().required(),

      search_text: Joi.string(),
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

      search_text: Joi.string(),
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
      store_name: Joi.string(),

      store_id: Joi.number(),

      store_type: Joi.string(),

      store_code: Joi.string(),

      store_address: this.OptedStoreAddress(),

      company: this.OptedCompany(),
    });
  }

  static CompanyBrandInfo() {
    return Joi.object({
      name: Joi.string(),

      value: Joi.number(),

      brand_logo_url: Joi.string(),

      brand_banner_url: Joi.string(),

      brand_banner_portrait_url: Joi.string(),
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

      _id: Joi.string(),

      app_name: Joi.string(),

      landing_image: this.LandingImage(),

      splash_image: this.SplashImage(),

      application: Joi.string(),

      platform_type: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),

      package_name: Joi.string(),
    });
  }

  static LandingImage() {
    return Joi.object({
      aspect_ratio: Joi.string(),

      secure_url: Joi.string(),
    });
  }

  static SplashImage() {
    return Joi.object({
      aspect_ratio: Joi.string(),

      secure_url: Joi.string(),
    });
  }

  static MobileAppConfigRequest() {
    return Joi.object({
      app_name: Joi.string(),

      landing_image: this.LandingImage(),

      splash_image: this.SplashImage(),

      is_active: Joi.boolean(),
    });
  }

  static BuildVersionHistory() {
    return Joi.object({
      versions: this.BuildVersion(),

      latest_available_version_name: Joi.string(),
    });
  }

  static BuildVersion() {
    return Joi.object({
      _id: Joi.string(),

      application: Joi.string(),

      platform_type: Joi.string(),

      build_status: Joi.string(),

      version_name: Joi.string(),

      version_code: Joi.number(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
    });
  }

  static AppSupportedCurrency() {
    return Joi.object({
      _id: Joi.string(),

      supported_currency: Joi.array().items(Joi.string()),

      application: Joi.string(),

      default_currency: this.DefaultCurrency(),

      created_at: Joi.string(),

      updated_at: Joi.string(),
    });
  }

  static DefaultCurrency() {
    return Joi.object({
      ref: Joi.string(),

      code: Joi.string(),
    });
  }

  static CurrencyConfig() {
    return Joi.object({
      _id: Joi.string(),

      is_active: Joi.boolean(),

      name: Joi.string(),

      code: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      decimal_digits: Joi.number(),

      symbol: Joi.string(),
    });
  }

  static DomainAdd() {
    return Joi.object({
      name: Joi.string(),
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
      _id: Joi.string(),
    });
  }

  static UpdateDomainTypeRequest() {
    return Joi.object({
      domain: this.UpdateDomain(),

      action: Joi.string(),
    });
  }

  static DomainStatusRequest() {
    return Joi.object({
      domain_url: Joi.string(),
    });
  }

  static DomainStatus() {
    return Joi.object({
      display: Joi.string(),

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
      domain_url: Joi.string(),

      custom: Joi.boolean(),
    });
  }

  static DomainSuggestion() {
    return Joi.object({
      name: Joi.string().required(),

      unsupported: Joi.boolean(),

      is_available: Joi.boolean().required(),

      price: Joi.number(),

      currency: Joi.string(),
    });
  }

  static DomainSuggestionsResponse() {
    return Joi.object({
      domains: Joi.array().items(this.DomainSuggestion()),
    });
  }

  static GetIntegrationsOptInsResponse() {
    return Joi.object({
      items: this.IntegrationOptIn(),

      page: this.Page(),
    });
  }

  static IntegrationOptIn() {
    return Joi.object({
      validators: this.Validators(),

      description: Joi.string(),

      description_html: Joi.string(),

      constants: Joi.string(),

      companies: Joi.array().items(Joi.object()),

      support: Joi.array().items(Joi.string()),

      _id: Joi.string(),

      name: Joi.string(),

      meta: this.IntegrationMeta(),

      icon: Joi.string(),

      owner: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      token: Joi.string(),

      secret: Joi.string(),

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
      json_schema: this.JsonSchema(),

      browser_script: Joi.string(),
    });
  }

  static JsonSchema() {
    return Joi.object({
      display: Joi.string(),

      key: Joi.string(),

      type: Joi.string(),

      tooltip: Joi.string(),
    });
  }

  static StoreValidator() {
    return Joi.object({
      json_schema: Joi.array().items(this.JsonSchema()),

      browser_script: Joi.string(),
    });
  }

  static InventoryValidator() {
    return Joi.object({
      json_schema: Joi.array().items(this.JsonSchema()),

      browser_script: Joi.string(),
    });
  }

  static OrderValidator() {
    return Joi.object({
      json_schema: Joi.array().items(this.JsonSchema()),

      browser_script: Joi.string(),
    });
  }

  static IntegrationMeta() {
    return Joi.object({
      is_public: Joi.boolean(),

      _id: Joi.string(),

      name: Joi.string(),

      value: Joi.string(),
    });
  }

  static Integration() {
    return Joi.object({
      validators: this.Validators(),

      description: Joi.string(),

      description_html: Joi.string(),

      constants: Joi.object(),

      companies: Joi.array().items(Joi.object()),

      support: Joi.array().items(Joi.string()),

      _id: Joi.string(),

      name: Joi.string(),

      meta: this.IntegrationMeta(),

      icon: Joi.string(),

      owner: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      token: Joi.string(),

      secret: Joi.string(),

      __v: Joi.number(),
    });
  }

  static IntegrationConfigResponse() {
    return Joi.object({
      items: this.IntegrationLevel(),
    });
  }

  static IntegrationLevel() {
    return Joi.object({
      opted: Joi.boolean(),

      permissions: Joi.array().items(Joi.object()),

      last_patch: Joi.array().items(Joi.object()),

      _id: Joi.string(),

      integration: Joi.string(),

      level: Joi.string(),

      uid: Joi.number(),

      meta: Joi.array().items(Joi.any()),

      token: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),

      data: Joi.object(),
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

      permissions: Joi.array().items(Joi.string()),

      last_patch: this.LastPatch(),

      _id: Joi.string(),

      integration: Joi.string(),

      level: Joi.string(),

      uid: Joi.number(),

      data: this.OtherEntityData(),

      meta: Joi.array().items(Joi.object()),

      token: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
    });
  }

  static LastPatch() {
    return Joi.object({
      op: Joi.string(),

      path: Joi.string(),

      value: Joi.string(),
    });
  }

  static OtherEntityData() {
    return Joi.object({
      article_identifier: Joi.string(),
    });
  }

  static App() {
    return Joi.object({
      company_id: Joi.string(),

      channel_type: Joi.string(),

      auth: this.ApplicationAuth(),

      name: Joi.string(),

      desc: Joi.string(),
    });
  }

  static AppInventory() {
    return Joi.object({
      brand: this.InventoryBrandRule(),

      store: this.InventoryStoreRule(),

      image: Joi.array().items(Joi.string()),

      franchise_enabled: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      payment: this.InventoryPaymentConfig(),

      article_assignment: this.InventoryArticleAssignment(),
    });
  }

  static AppDomain() {
    return Joi.object({
      name: Joi.string(),
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

      name: Joi.string(),

      company_type: Joi.string(),
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
      _id: Joi.string(),

      modified_on: Joi.string(),

      uid: Joi.number(),

      name: Joi.string(),

      display_name: Joi.string(),

      store_type: Joi.string(),

      store_code: Joi.string(),

      company_id: Joi.number(),
    });
  }

  static FilterOrderingStoreRequest() {
    return Joi.object({
      all_stores: Joi.boolean(),

      deployed_stores: Joi.array().items(Joi.number()),

      q: Joi.string(),

      page_no: Joi.number(),

      page_size: Joi.number(),
    });
  }

  static DeploymentMeta() {
    return Joi.object({
      deployed_stores: Joi.array().items(Joi.number()),

      all_stores: Joi.boolean(),

      enabled: Joi.boolean(),

      type: Joi.string(),

      _id: Joi.string(),

      app: Joi.string(),

      __v: Joi.number(),
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

      name: Joi.string(),
    });
  }

  static OtherSellerApplication() {
    return Joi.object({
      name: Joi.string(),

      description: Joi.string(),

      _id: Joi.string(),

      domain: Joi.string(),

      company: this.OtherSellerCompany(),

      opt_type: Joi.string(),
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
      name: Joi.string(),

      description: Joi.string(),

      _id: Joi.string(),

      domain: Joi.string(),

      company: this.OptedCompany(),

      opted_inventory: this.OptedInventory(),

      opt_out_inventory: this.OptOutInventory(),
    });
  }

  static OptedCompany() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string(),
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
      key: Joi.string(),

      display: Joi.string(),
    });
  }

  static OptedStore() {
    return Joi.object({
      name: Joi.string(),

      store_code: Joi.string(),

      _id: Joi.string(),

      modified_on: Joi.string(),

      uid: Joi.number(),

      address: this.OptedStoreAddress(),

      display_name: Joi.string(),

      store_type: Joi.string(),

      company_id: Joi.number(),
    });
  }

  static OptOutInventory() {
    return Joi.object({
      store: Joi.array().items(Joi.number()).required(),

      company: Joi.array().items(Joi.number()).required(),
    });
  }

  static ProductDetailFeature() {
    return Joi.object({
      similar: Joi.array().items(Joi.string()),

      seller_selection: Joi.boolean(),

      update_product_meta: Joi.boolean(),

      request_product: Joi.boolean(),
    });
  }

  static LaunchPage() {
    return Joi.object({
      page_type: Joi.string(),

      params: Joi.string(),

      query: Joi.string(),
    });
  }

  static LandingPageFeature() {
    return Joi.object({
      launch_page: this.LaunchPage(),

      continue_as_guest: Joi.boolean(),

      login_btn_text: Joi.string(),

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

      _id: Joi.string(),

      app: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

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

      listing_page: this.ListingPageFeature(),

      currency: this.CurrencyFeature(),

      revenue_engine: this.RevenueEngineFeature(),

      feedback: this.FeedbackFeature(),

      compare_products: this.CompareProductsFeature(),
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

      type: Joi.string(),
    });
  }

  static ListingPriceFeature() {
    return Joi.object({
      value: Joi.string(),

      sort: Joi.string(),
    });
  }

  static ListingPageFeature() {
    return Joi.object({
      sort_on: Joi.string(),
    });
  }

  static CurrencyFeature() {
    return Joi.object({
      value: Joi.array().items(Joi.string()),

      type: Joi.string(),

      default_currency: Joi.string(),
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

  static Currency() {
    return Joi.object({
      _id: Joi.string(),

      is_active: Joi.boolean(),

      name: Joi.string(),

      code: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      decimal_digits: Joi.number(),

      symbol: Joi.string(),
    });
  }

  static Domain() {
    return Joi.object({
      verified: Joi.boolean(),

      is_primary: Joi.boolean(),

      is_default: Joi.boolean(),

      is_shortlink: Joi.boolean(),

      _id: Joi.string(),

      name: Joi.string(),
    });
  }

  static ApplicationWebsite() {
    return Joi.object({
      enabled: Joi.boolean(),

      basepath: Joi.string(),
    });
  }

  static ApplicationCors() {
    return Joi.object({
      domains: Joi.array().items(Joi.string()),
    });
  }

  static ApplicationAuth() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static ApplicationRedirections() {
    return Joi.object({
      from: Joi.string(),

      redirect_to: Joi.string(),

      type: Joi.string(),
    });
  }

  static ApplicationMeta() {
    return Joi.object({
      name: Joi.string(),

      value: Joi.string(),
    });
  }

  static SecureUrl() {
    return Joi.object({
      secure_url: Joi.string(),
    });
  }

  static Application() {
    return Joi.object({
      website: this.ApplicationWebsite(),

      cors: this.ApplicationCors(),

      auth: this.ApplicationAuth(),

      description: Joi.string(),

      channel_type: Joi.string(),

      cache_ttl: Joi.number(),

      is_internal: Joi.boolean(),

      is_active: Joi.boolean(),

      _id: Joi.string(),

      name: Joi.string(),

      owner: Joi.string(),

      company_id: Joi.number(),

      token: Joi.string(),

      redirections: Joi.array().items(this.ApplicationRedirections()),

      meta: Joi.array().items(this.ApplicationMeta()),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),

      banner: this.SecureUrl(),

      logo: this.SecureUrl(),

      favicon: this.SecureUrl(),

      domains: Joi.array().items(this.Domain()),

      app_type: Joi.string(),

      mobile_logo: this.SecureUrl(),

      domain: this.Domain(),
    });
  }

  static NotFound() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static UnhandledError() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static InvalidPayloadRequest() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static SuccessMessageResponse() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static InventoryBrandRule() {
    return Joi.object({
      criteria: Joi.string(),

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
      criteria: Joi.string(),

      rules: Joi.array().items(this.StoreCriteriaRule()),

      stores: Joi.array().items(Joi.number()),
    });
  }

  static InventoryPaymentConfig() {
    return Joi.object({
      mode_of_payment: Joi.string(),

      source: Joi.string(),
    });
  }

  static StorePriorityRule() {
    return Joi.object({
      enabled: Joi.boolean(),

      storetype_order: Joi.array().items(Joi.string()),
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

      enforced_stores: Joi.array().items(Joi.number()),

      rules: this.ArticleAssignmentRule(),
    });
  }

  static CompanyAboutAddress() {
    return Joi.object({
      pincode: Joi.number(),

      address1: Joi.string(),

      address2: Joi.string(),

      city: Joi.string(),

      state: Joi.string(),

      country: Joi.string(),

      address_type: Joi.string(),
    });
  }

  static UserEmail() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      email: Joi.string(),
    });
  }

  static UserPhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      country_code: Joi.number(),

      phone: Joi.string(),
    });
  }

  static Page() {
    return Joi.object({
      type: Joi.string().required(),

      size: Joi.number(),

      current: Joi.number(),

      has_next: Joi.boolean(),

      item_total: Joi.number(),

      next_id: Joi.string(),

      has_previous: Joi.boolean(),
    });
  }

  static ApplicationInformation() {
    return Joi.object({
      address: this.InformationAddress(),

      support: this.InformationSupport(),

      social_links: this.SocialLinks(),

      links: this.Links(),

      copyright_text: Joi.string(),

      _id: Joi.string(),

      business_highlights: this.BusinessHighlights(),

      application: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
    });
  }

  static InformationAddress() {
    return Joi.object({
      loc: Joi.string(),

      address_line: Joi.array().items(Joi.string()),

      phone: this.InformationPhone(),

      city: Joi.string(),

      country: Joi.string(),

      pincode: Joi.number(),
    });
  }

  static InformationPhone() {
    return Joi.object({
      code: Joi.string(),

      number: Joi.string(),
    });
  }

  static InformationSupport() {
    return Joi.object({
      phone: Joi.array().items(Joi.string()),

      email: Joi.array().items(Joi.string()),

      timing: Joi.string(),
    });
  }

  static SocialLinks() {
    return Joi.object({
      facebook: this.Facebook(),

      instagram: this.Instagram(),

      twitter: this.Twitter(),

      pinterest: this.Pinterest(),

      google_plus: this.GooglePlus(),

      youtube: this.Youtube(),

      linked_in: this.LinkedIn(),

      vimeo: this.Vimeo(),

      blog_link: this.BlogLink(),
    });
  }

  static Instagram() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static Twitter() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static Pinterest() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static GooglePlus() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static Youtube() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static LinkedIn() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static Vimeo() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static BlogLink() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static Links() {
    return Joi.object({
      title: Joi.string(),

      link: Joi.string(),
    });
  }

  static BusinessHighlights() {
    return Joi.object({
      _id: Joi.string(),

      title: Joi.string(),

      icon: Joi.string(),

      sub_title: Joi.string(),
    });
  }

  static ApplicationDetail() {
    return Joi.object({
      name: Joi.string().required(),

      description: Joi.string().required(),

      logo: this.SecureUrl().required(),

      mobile_logo: this.SecureUrl().required(),

      favicon: this.SecureUrl().required(),

      banner: this.SecureUrl().required(),

      domain: this.Domain(),

      domains: Joi.array().items(this.Domain()),

      _id: Joi.string(),
    });
  }

  static CurrenciesResponse() {
    return Joi.object({
      items: Joi.array().items(this.Currency()),
    });
  }

  static StoreLatLong() {
    return Joi.object({
      type: Joi.string(),

      coordinates: Joi.array().items(Joi.number()),
    });
  }

  static OptedStoreAddress() {
    return Joi.object({
      state: Joi.string(),

      address1: Joi.string(),

      lat_long: this.StoreLatLong(),

      address2: Joi.string(),

      pincode: Joi.number(),

      country: Joi.string(),

      city: Joi.string(),
    });
  }

  static OrderingStore() {
    return Joi.object({
      address: this.OptedStoreAddress(),

      _id: Joi.string(),

      uid: Joi.number(),

      name: Joi.string(),

      display_name: Joi.string(),

      store_type: Joi.string(),

      store_code: Joi.string(),

      pincode: Joi.number(),

      code: Joi.string(),
    });
  }

  static OrderingStores() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.OrderingStore()),

      deployed_stores: Joi.array().items(Joi.number()),

      all_stores: Joi.boolean(),

      enabled: Joi.boolean(),

      type: Joi.string(),

      _id: Joi.string(),

      app: Joi.string(),

      __v: Joi.number(),
    });
  }

  static TokenResponse() {
    return Joi.object({
      tokens: this.Tokens(),

      _id: Joi.string(),

      application: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

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

      auth: this.Auth(),

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

      project_id: Joi.string(),

      gcm_sender_id: Joi.string(),

      application_id: Joi.string(),

      api_key: Joi.string(),
    });
  }

  static Ios() {
    return Joi.object({
      application_id: Joi.string(),

      api_key: Joi.string(),
    });
  }

  static Android() {
    return Joi.object({
      application_id: Joi.string(),

      api_key: Joi.string(),
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
      app_id: Joi.string(),
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
      write_key: Joi.string(),
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
      api_key: Joi.string(),
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
      app_id: Joi.string(),

      app_key: Joi.string(),

      web_token: Joi.string(),
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
      api_key: Joi.string(),
    });
  }

  static FyndRewards() {
    return Joi.object({
      credentials: this.FyndRewardsCredentials(),
    });
  }

  static FyndRewardsCredentials() {
    return Joi.object({
      public_key: Joi.string(),
    });
  }

  static Auth() {
    return Joi.object({
      google: this.Google(),

      facebook: this.Facebook(),

      accountkit: this.Accountkit(),
    });
  }

  static GoogleMap() {
    return Joi.object({
      credentials: this.GoogleMapCredentials(),
    });
  }

  static GoogleMapCredentials() {
    return Joi.object({
      api_key: Joi.string(),
    });
  }

  static Rule() {
    return Joi.object({
      min: Joi.number(),

      value: Joi.number(),

      discount_qty: Joi.number(),

      max: Joi.number(),

      key: Joi.number(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().required(),

      payable_by: Joi.string().required(),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      modified_on: Joi.string(),

      created_on: Joi.string(),
    });
  }

  static DisplayMetaDict() {
    return Joi.object({
      title: Joi.string(),

      subtitle: Joi.string(),
    });
  }

  static DisplayMeta() {
    return Joi.object({
      auto: this.DisplayMetaDict(),

      apply: this.DisplayMetaDict(),

      remove: this.DisplayMetaDict(),

      title: Joi.string(),

      description: Joi.string(),

      subtitle: Joi.string(),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      end: Joi.string(),

      cron: Joi.string(),

      duration: Joi.number(),

      start: Joi.string(),

      next_schedule: Joi.array().items(Joi.object()),
    });
  }

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }

  static UsesRemaining() {
    return Joi.object({
      total: Joi.number(),

      user: Joi.number(),

      app: Joi.number(),
    });
  }

  static UsesRestriction() {
    return Joi.object({
      remaining: this.UsesRemaining(),

      maximum: this.UsesRemaining(),
    });
  }

  static PostOrder() {
    return Joi.object({
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
    });
  }

  static PriceRange() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static PaymentAllowValue() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  static PaymentModes() {
    return Joi.object({
      codes: Joi.array().items(Joi.string()),

      types: Joi.array().items(Joi.string()),

      uses: this.PaymentAllowValue(),

      networks: Joi.array().items(Joi.string()),
    });
  }

  static PaymentCodes() {
    return Joi.object({
      upi: this.PaymentModes(),

      qr: this.PaymentModes(),

      pl: this.PaymentModes(),

      wl: this.PaymentModes(),

      ps: this.PaymentModes(),

      nb: this.PaymentModes(),

      card: this.PaymentModes(),
    });
  }

  static Restrictions() {
    return Joi.object({
      coupon_allowed: Joi.boolean(),

      ordering_stores: Joi.array().items(Joi.number()),

      bulk_bundle: this.BulkBundleRestriction(),

      uses: this.UsesRestriction(),

      platforms: Joi.array().items(Joi.string()),

      post_order: this.PostOrder(),

      price_range: this.PriceRange(),

      payments: this.PaymentCodes(),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      scope: Joi.array().items(Joi.string()),

      calculate_on: Joi.string().required(),

      currency_code: Joi.string(),

      is_exact: Joi.boolean(),

      auto_apply: Joi.boolean(),

      type: Joi.string().required(),

      applicable_on: Joi.string().required(),

      value_type: Joi.string().required(),
    });
  }

  static State() {
    return Joi.object({
      is_display: Joi.boolean(),

      is_public: Joi.boolean(),

      is_archived: Joi.boolean(),
    });
  }

  static Validation() {
    return Joi.object({
      anonymous: Joi.boolean(),

      app_id: Joi.array().items(Joi.string()),

      user_registered_after: Joi.string(),
    });
  }

  static Identifier() {
    return Joi.object({
      collection_id: Joi.array().items(Joi.string()),

      article_id: Joi.array().items(Joi.string()),

      item_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string()),

      store_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static CouponAction() {
    return Joi.object({
      action_date: Joi.string(),

      txn_mode: Joi.string(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string(),

      created_by: Joi.string(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      code: Joi.string().required(),

      rule: Joi.array().items(this.Rule()).required(),

      type_slug: Joi.string().required(),

      ownership: this.Ownership().required(),

      date_meta: this.CouponDateMeta(),

      tags: Joi.array().items(Joi.string()),

      display_meta: this.DisplayMeta().required(),

      _schedule: this.CouponSchedule(),

      restrictions: this.Restrictions(),

      rule_definition: this.RuleDefinition().required(),

      state: this.State(),

      validation: this.Validation(),

      identifiers: this.Identifier().required(),

      validity: this.Validity().required(),

      action: this.CouponAction(),

      author: this.CouponAuthor(),
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

      message: Joi.string(),
    });
  }

  static OperationErrorResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string(),
    });
  }

  static CouponUpdate() {
    return Joi.object({
      code: Joi.string().required(),

      rule: Joi.array().items(this.Rule()).required(),

      type_slug: Joi.string().required(),

      ownership: this.Ownership().required(),

      date_meta: this.CouponDateMeta(),

      tags: Joi.array().items(Joi.string()),

      display_meta: this.DisplayMeta().required(),

      _schedule: this.CouponSchedule(),

      restrictions: this.Restrictions(),

      rule_definition: this.RuleDefinition().required(),

      state: this.State(),

      validation: this.Validation(),

      identifiers: this.Identifier().required(),

      validity: this.Validity().required(),

      action: this.CouponAction(),

      author: this.CouponAuthor(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: this.CouponSchedule(),
    });
  }

  static StoreMapping() {
    return Joi.object({
      enabled: Joi.string(),

      marketplace_store_id: Joi.string(),

      store_id: Joi.number(),

      meta: Joi.object(),
    });
  }

  static AllChannels() {
    return Joi.object({
      mkp_name: Joi.boolean(),
    });
  }

  static MyntraPayload() {
    return Joi.object({
      merchant_id: Joi.string(),

      secret_key: Joi.string(),
    });
  }

  static AmazonPayload() {
    return Joi.object({
      seller_id: Joi.string(),

      mws_auth_token: Joi.string(),
    });
  }

  static FlipkartPayload() {
    return Joi.object({
      code: Joi.string(),
    });
  }

  static TatacliqPayload() {
    return Joi.object({
      user_name: Joi.string(),

      password: Joi.string(),

      merchant_id: Joi.string(),
    });
  }

  static AjioPayload() {
    return Joi.object({
      username: Joi.string(),

      password: Joi.string(),

      client_ip: Joi.string(),
    });
  }

  static InventorySyncConfig() {
    return Joi.object({
      inventory: Joi.boolean(),

      price: Joi.boolean(),
    });
  }

  static StoreMappingPayload() {
    return Joi.object({
      store_mapping_enabled: Joi.boolean(),

      store_mapping: Joi.array().items(this.StoreMapping()),
    });
  }

  static StatusPayload() {
    return Joi.object({
      is_active: Joi.boolean(),
    });
  }

  static StatusResp() {
    return Joi.object({
      is_active: Joi.boolean(),
    });
  }

  static SyncPayload() {
    return Joi.object({
      modified_since: Joi.string(),
    });
  }

  static SyncResp() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static MkpResp() {
    return Joi.object({
      marketplace: Joi.string(),

      worker: Joi.number(),

      worker_assigned: Joi.string(),

      is_active: Joi.boolean(),

      store_mapping_enabled: Joi.boolean(),

      company_id: Joi.number(),

      configuration: Joi.object(),

      store_mapping: Joi.array().items(this.StoreMapping()),
    });
  }

  static StatGroup() {
    return Joi.object({
      key: Joi.string(),

      url: Joi.string(),

      title: Joi.string(),
    });
  }

  static StatsGroups() {
    return Joi.object({
      groups: Joi.array().items(this.StatGroup()),
    });
  }

  static StatsGroupComponent() {
    return Joi.object({
      key: Joi.string(),

      url: Joi.string(),

      title: Joi.string(),

      type: Joi.string(),

      filters: Joi.object(),
    });
  }

  static StatsGroupComponents() {
    return Joi.object({
      title: Joi.string(),

      components: Joi.array().items(this.StatsGroupComponent()),
    });
  }

  static StatsRes() {
    return Joi.object({
      key: Joi.string(),

      title: Joi.string(),

      type: Joi.string(),

      data: Joi.object(),
    });
  }

  static ReceivedAt() {
    return Joi.object({
      value: Joi.string(),
    });
  }

  static AbandonCartsDetail() {
    return Joi.object({
      properties_cart_id: Joi.string(),

      context_traits_first_name: Joi.string(),

      context_traits_last_name: Joi.string(),

      context_traits_phone_number: Joi.string(),

      context_traits_email: Joi.string(),

      context_app_application_id: Joi.string(),

      properties_breakup_values_raw_total: Joi.string(),

      received_at: this.ReceivedAt(),
    });
  }

  static AbandonCartsList() {
    return Joi.object({
      items: Joi.array().items(this.AbandonCartsDetail()),

      cart_total: Joi.string(),

      page: this.Page(),
    });
  }

  static AbandonCartDetail() {
    return Joi.object({
      _id: Joi.string(),

      user_id: Joi.string(),

      cart_value: Joi.string(),

      articles: Joi.array().items(Joi.object()),

      breakup: Joi.object(),

      address: Joi.object(),
    });
  }

  static ExportJobReq() {
    return Joi.object({
      marketplace_name: Joi.string(),

      start_time: Joi.string(),

      end_time: Joi.string(),

      event_type: Joi.string(),
    });
  }

  static ExportJobRes() {
    return Joi.object({
      status: Joi.string(),

      job_id: Joi.string(),
    });
  }

  static ExportJobStatusRes() {
    return Joi.object({
      status: Joi.string(),

      job_id: Joi.string(),

      download_url: Joi.string(),
    });
  }

  static GetLogsListReq() {
    return Joi.object({
      marketplace_name: Joi.string(),

      start_date: Joi.string(),

      company_id: Joi.string(),

      end_date: Joi.string(),
    });
  }

  static MkpLogsResp() {
    return Joi.object({
      start_time_iso: Joi.string(),

      end_time_iso: Joi.string(),

      event_type: Joi.string(),

      trace_id: Joi.string(),

      count: Joi.string(),

      status: Joi.string(),
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
      marketplace_name: Joi.string(),

      start_date: Joi.string(),

      company_id: Joi.string(),

      end_date: Joi.string(),

      identifier: Joi.string(),

      identifier_value: Joi.string(),
    });
  }

  static LogInfo() {
    return Joi.object({
      _id: Joi.string(),

      status: Joi.string(),

      event_type: Joi.string(),

      marketplace_name: Joi.string(),

      event: Joi.string(),

      trace_id: Joi.string(),

      company_id: Joi.number(),

      brand_id: Joi.number(),

      store_code: Joi.string(),

      store_id: Joi.number(),

      item_id: Joi.number(),

      article_id: Joi.string(),

      seller_identifier: Joi.string(),
    });
  }

  static SearchLogRes() {
    return Joi.object({
      items: Joi.array().items(this.LogInfo()),

      page: this.Page(),
    });
  }
}

class LeadValidator {
  static getTickets() {
    return Joi.object({
      items: Joi.boolean(),
      filters: Joi.boolean(),
      q: Joi.string(),
      status: Joi.string(),
      priority: Joi.string(),
      category: Joi.string(),
    }).required();
  }

  static getTicket() {
    return Joi.object({
      ticketId: Joi.string().required(),
    }).required();
  }

  static editTicket() {
    return Joi.object({
      ticketId: Joi.string().required(),
      body: Validator.EditTicketPayload().required(),
    }).required();
  }

  static createHistory() {
    return Joi.object({
      ticketId: Joi.string().required(),
      body: Validator.TicketHistoryPayload().required(),
    }).required();
  }

  static getTicketHistory() {
    return Joi.object({
      ticketId: Joi.string().required(),
    }).required();
  }

  static getCustomForm() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static editCustomForm() {
    return Joi.object({
      slug: Joi.string().required(),
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
      uniqueName: Joi.string().required(),
    }).required();
  }

  static getVideoParticipants() {
    return Joi.object({
      uniqueName: Joi.string().required(),
    }).required();
  }

  static openVideoRoom() {
    return Joi.object({
      body: Validator.CreateVideoRoomPayload().required(),
    }).required();
  }

  static closeVideoRoom() {
    return Joi.object({
      uniqueName: Joi.string().required(),
    }).required();
  }
}

class ThemeValidator {
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
      themeId: Joi.string().required(),
    }).required();
  }

  static upgradeTheme() {
    return Joi.object({
      themeId: Joi.string().required(),
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
      themeId: Joi.string().required(),
    }).required();
  }

  static updateTheme() {
    return Joi.object({
      themeId: Joi.string().required(),
      body: Validator.ThemesSchema().required(),
    }).required();
  }

  static deleteTheme() {
    return Joi.object({
      themeId: Joi.string().required(),
    }).required();
  }

  static getThemeForPreview() {
    return Joi.object({
      themeId: Joi.string().required(),
    }).required();
  }

  static publishTheme() {
    return Joi.object({
      themeId: Joi.string().required(),
    }).required();
  }

  static unpublishTheme() {
    return Joi.object({
      themeId: Joi.string().required(),
    }).required();
  }

  static archiveTheme() {
    return Joi.object({
      themeId: Joi.string().required(),
    }).required();
  }

  static unarchiveTheme() {
    return Joi.object({
      themeId: Joi.string().required(),
    }).required();
  }
}

class UserValidator {
  static getCustomers() {
    return Joi.object({
      q: Joi.string(),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  }

  static searchUsers() {
    return Joi.object({
      q: Joi.string(),
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
    return Joi.object({}).required();
  }

  static createAnnouncement() {
    return Joi.object({
      body: Validator.AdminAnnouncementSchema().required(),
    }).required();
  }

  static getAnnouncementById() {
    return Joi.object({
      announcementId: Joi.string().required(),
    }).required();
  }

  static updateAnnouncement() {
    return Joi.object({
      announcementId: Joi.string().required(),
      body: Validator.AdminAnnouncementSchema().required(),
    }).required();
  }

  static updateAnnouncementSchedule() {
    return Joi.object({
      announcementId: Joi.string().required(),
      body: Validator.ScheduleSchema().required(),
    }).required();
  }

  static deleteAnnouncement() {
    return Joi.object({
      announcementId: Joi.string().required(),
    }).required();
  }

  static createBlog() {
    return Joi.object({
      body: Validator.BlogRequest().required(),
    }).required();
  }

  static getBlogs() {
    return Joi.object({}).required();
  }

  static updateBlog() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.BlogRequest().required(),
    }).required();
  }

  static deleteBlog() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static getComponentById() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static getFaqCategories() {
    return Joi.object({}).required();
  }

  static getFaqCategoryBySlugOrId() {
    return Joi.object({
      idOrSlug: Joi.string().required(),
    }).required();
  }

  static createFaqCategory() {
    return Joi.object({
      body: Validator.CreateFaqCategoryRequestSchema().required(),
    }).required();
  }

  static updateFaqCategory() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.UpdateFaqCategoryRequestSchema().required(),
    }).required();
  }

  static deleteFaqCategory() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static getFaqsByCategoryIdOrSlug() {
    return Joi.object({
      idOrSlug: Joi.string().required(),
    }).required();
  }

  static addFaq() {
    return Joi.object({
      categoryId: Joi.string().required(),
      body: Validator.CreateFaqSchema().required(),
    }).required();
  }

  static updateFaq() {
    return Joi.object({
      categoryId: Joi.string().required(),
      faqId: Joi.string().required(),
      body: Validator.CreateFaqSchema().required(),
    }).required();
  }

  static deleteFaq() {
    return Joi.object({
      categoryId: Joi.string().required(),
      faqId: Joi.string().required(),
    }).required();
  }

  static getFaqByIdOrSlug() {
    return Joi.object({
      idOrSlug: Joi.string().required(),
    }).required();
  }

  static getLandingPages() {
    return Joi.object({}).required();
  }

  static createLandingPage() {
    return Joi.object({
      body: Validator.LandingPageSchema().required(),
    }).required();
  }

  static updateLandingPage() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.LandingPageSchema().required(),
    }).required();
  }

  static deleteLandingPage() {
    return Joi.object({
      id: Joi.string().required(),
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
      devicePlatform: Joi.string().required(),
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
      slug: Joi.string().required(),
      devicePlatform: Joi.string().required(),
    }).required();
  }

  static updateNavigation() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.NavigationRequest().required(),
    }).required();
  }

  static deleteNavigation() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static getPageMeta() {
    return Joi.object({}).required();
  }

  static getPageSpec() {
    return Joi.object({}).required();
  }

  static createPage() {
    return Joi.object({
      body: Validator.PageRequest().required(),
    }).required();
  }

  static getPages() {
    return Joi.object({}).required();
  }

  static createPagePreview() {
    return Joi.object({
      body: Validator.PageRequest().required(),
    }).required();
  }

  static updatePagePreview() {
    return Joi.object({
      slug: Joi.string().required(),
      body: Validator.PagePublishRequest().required(),
    }).required();
  }

  static updatePage() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.PageSchema().required(),
    }).required();
  }

  static deletePage() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static getPageBySlug() {
    return Joi.object({
      slug: Joi.string().required(),
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
      devicePlatform: Joi.string().required(),
    }).required();
  }

  static createSlideshow() {
    return Joi.object({
      body: Validator.SlideshowRequest().required(),
    }).required();
  }

  static getSlideshowBySlug() {
    return Joi.object({
      slug: Joi.string().required(),
      devicePlatform: Joi.string().required(),
    }).required();
  }

  static updateSlideshow() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.SlideshowRequest().required(),
    }).required();
  }

  static deleteSlideshow() {
    return Joi.object({
      id: Joi.string().required(),
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

  static createInjectableTag() {
    return Joi.object({
      body: Validator.CreateTagRequestSchema().required(),
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
      tagId: Joi.string().required(),
      body: Validator.UpdateHandpickedSchema().required(),
    }).required();
  }
}

class CommunicationValidator {
  static getCampaigns() {
    return Joi.object({}).required();
  }

  static createCampaign() {
    return Joi.object({
      body: Validator.CampaignReq().required(),
    }).required();
  }

  static getCampaignById() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static updateCampaignById() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.CampaignReq().required(),
    }).required();
  }

  static getStatsOfCampaignById() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static getAudiences() {
    return Joi.object({}).required();
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
      id: Joi.string().required(),
    }).required();
  }

  static updateAudienceById() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.AudienceReq().required(),
    }).required();
  }

  static getNSampleRecordsFromCsv() {
    return Joi.object({
      body: Validator.GetNRecordsCsvReq().required(),
    }).required();
  }

  static getEmailProviders() {
    return Joi.object({}).required();
  }

  static createEmailProvider() {
    return Joi.object({
      body: Validator.EmailProviderReq().required(),
    }).required();
  }

  static getEmailProviderById() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static updateEmailProviderById() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.EmailProviderReq().required(),
    }).required();
  }

  static getEmailTemplates() {
    return Joi.object({}).required();
  }

  static createEmailTemplate() {
    return Joi.object({
      body: Validator.EmailTemplateReq().required(),
    }).required();
  }

  static getSystemEmailTemplates() {
    return Joi.object({}).required();
  }

  static getEmailTemplateById() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static updateEmailTemplateById() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.EmailTemplateReq().required(),
    }).required();
  }

  static deleteEmailTemplateById() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static getEventSubscriptions() {
    return Joi.object({}).required();
  }

  static getJobs() {
    return Joi.object({}).required();
  }

  static triggerCampaignJob() {
    return Joi.object({
      body: Validator.TriggerJobRequest().required(),
    }).required();
  }

  static getJobLogs() {
    return Joi.object({}).required();
  }

  static getCommunicationLogs() {
    return Joi.object({}).required();
  }

  static getSmsProviders() {
    return Joi.object({}).required();
  }

  static createSmsProvider() {
    return Joi.object({
      body: Validator.SmsProviderReq().required(),
    }).required();
  }

  static getSmsProviderById() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static updateSmsProviderById() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.SmsProviderReq().required(),
    }).required();
  }

  static getSmsTemplates() {
    return Joi.object({}).required();
  }

  static createSmsTemplate() {
    return Joi.object({
      body: Validator.SmsTemplateReq().required(),
    }).required();
  }

  static getSmsTemplateById() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static updateSmsTemplateById() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.SmsTemplateReq().required(),
    }).required();
  }

  static deleteSmsTemplateById() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static getSystemSystemTemplates() {
    return Joi.object({}).required();
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
      requestType: Joi.string().required(),
    }).required();
  }
}

class OrderValidator {
  static trackShipmentPlatform() {
    return Joi.object({
      shipmentId: Joi.string().required(),
    }).required();
  }

  static trackOrder() {
    return Joi.object({
      orderId: Joi.string().required(),
    }).required();
  }

  static failedOrders() {
    return Joi.object({}).required();
  }

  static reprocessOrder() {
    return Joi.object({
      orderId: Joi.string().required(),
    }).required();
  }
}

class CatalogValidator {
  static getSearchKeywords() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static updateSearchKeywords() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.CreateSearchKeyword().required(),
    }).required();
  }

  static deleteSearchKeywords() {
    return Joi.object({
      id: Joi.string().required(),
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
      id: Joi.string().required(),
    }).required();
  }

  static updateAutocompleteKeyword() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.CreateAutocompleteKeyword().required(),
    }).required();
  }

  static deleteAutocompleteKeyword() {
    return Joi.object({
      id: Joi.string().required(),
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
      type: Joi.string().required(),
    }).required();
  }

  static createConfigurationByType() {
    return Joi.object({
      type: Joi.string().required(),
      body: Validator.AppConfiguration().required(),
    }).required();
  }

  static getQueryFilters() {
    return Joi.object({}).required();
  }

  static getAllCollections() {
    return Joi.object({}).required();
  }

  static createCollection() {
    return Joi.object({
      body: Validator.CreateCollection().required(),
    }).required();
  }

  static getCollectionDetail() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static updateCollection() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static deleteCollection() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static getCollectionItems() {
    return Joi.object({
      id: Joi.string().required(),
      sortOn: Joi.string(),
      pageId: Joi.string(),
      pageSize: Joi.number(),
    }).required();
  }

  static addCollectionItems() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.CollectionItemRequest().required(),
    }).required();
  }

  static getCatalogInsights() {
    return Joi.object({
      brand: Joi.string(),
    }).required();
  }
}

class AssetsValidator {
  static appStartUpload() {
    return Joi.object({
      namespace: Joi.string().required(),

      body: Validator.StartRequest().required(),
    }).required();
  }

  static appCompleteUpload() {
    return Joi.object({
      namespace: Joi.string().required(),

      body: Validator.StartResponse().required(),
    }).required();
  }

  static appCopyFiles() {
    return Joi.object({
      sync: Joi.boolean(),

      body: Validator.BulkRequest().required(),
    }).required();
  }

  static appBrowse() {
    return Joi.object({
      namespace: Joi.string().required(),
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
      pageNo: Joi.string(),
      pageSize: Joi.string(),
      createdBy: Joi.string(),
      active: Joi.string(),
      q: Joi.string(),
    }).required();
  }

  static getShortLinkByHash() {
    return Joi.object({
      hash: Joi.string().required(),
    }).required();
  }

  static updateShortLinkById() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }
}

class ConfigurationValidator {
  static getBuildConfig() {
    return Joi.object({
      platformType: Joi.string().required(),
    }).required();
  }

  static updateBuildConfig() {
    return Joi.object({
      platformType: Joi.string().required(),
      body: Validator.MobileAppConfigRequest().required(),
    }).required();
  }

  static getPreviousVersions() {
    return Joi.object({
      platformType: Joi.string().required(),
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
    return Joi.object({}).required();
  }

  static getAppStores() {
    return Joi.object({}).required();
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

  static getOrderingStoresByFilter() {
    return Joi.object({
      body: Validator.FilterOrderingStoreRequest().required(),
    }).required();
  }

  static updateOrderingStoreConfig() {
    return Joi.object({
      body: Validator.OrderingStoreConfig().required(),
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
      id: Joi.string().required(),
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
      title: Joi.string(),
      isPublic: Joi.boolean(),
      isDisplay: Joi.boolean(),
      typeSlug: Joi.string(),
      code: Joi.string(),
    }).required();
  }

  static createCoupon() {
    return Joi.object({
      body: Validator.CouponAdd().required(),
    }).required();
  }

  static getCouponById() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static updateCoupon() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.CouponUpdate().required(),
    }).required();
  }

  static updateCouponPartially() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.CouponPartialUpdate().required(),
    }).required();
  }
}

class AnalyticsValidator {
  static getStatiscticsGroups() {
    return Joi.object({}).required();
  }

  static getStatiscticsGroupComponents() {
    return Joi.object({
      groupName: Joi.string().required(),
    }).required();
  }

  static getComponentStatsCSV() {
    return Joi.object({
      componentName: Joi.string().required(),
    }).required();
  }

  static getComponentStatsPDF() {
    return Joi.object({
      componentName: Joi.string().required(),
    }).required();
  }

  static getComponentStats() {
    return Joi.object({
      componentName: Joi.string().required(),
    }).required();
  }

  static getAbandonCartList() {
    return Joi.object({
      from: Joi.string().required(),
      to: Joi.string().required(),
      pageNo: Joi.string(),
      pageSize: Joi.string(),
    }).required();
  }

  static getAbandonCartsCSV() {
    return Joi.object({
      from: Joi.string().required(),
      to: Joi.string().required(),
    }).required();
  }

  static getAbandonCartDetail() {
    return Joi.object({
      cartId: Joi.string().required(),
    }).required();
  }
}

module.exports = {
  LeadValidator,
  ThemeValidator,
  UserValidator,
  ContentValidator,
  CommunicationValidator,
  PaymentValidator,
  OrderValidator,
  CatalogValidator,
  AssetsValidator,
  ShareValidator,
  ConfigurationValidator,
  CartValidator,
  AnalyticsValidator,
};
