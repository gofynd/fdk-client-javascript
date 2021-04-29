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
      slug: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      inputs: Joi.array().items(Joi.object()).required(),

      description: Joi.string().allow(""),

      header_image: Joi.string().allow(""),

      should_notify: Joi.boolean(),

      success_message: Joi.string().allow(""),

      poll_for_assignment: this.PollForAssignment(),
    });
  }

  static EditCustomFormPayload() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      inputs: Joi.array().items(Joi.object()).required(),

      description: Joi.string().allow(""),

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

      source: Joi.string().allow(""),

      status: Joi.string().allow(""),

      priority: Joi.string().allow(""),

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

      type: Joi.string().allow("").required(),
    });
  }

  static CustomFormSubmissionPayload() {
    return Joi.object({
      response: Joi.array().items(this.KeyValue()).required(),
    });
  }

  static KeyValue() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
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

  static PhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      phone: Joi.string().allow(""),

      country_code: Joi.number(),
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

      type: Joi.string().allow("").required(),
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
      status: Joi.string().allow("").required(),

      priority: Joi.string().allow("").required(),

      category: Joi.string().allow("").required(),

      content: this.TicketContent().required(),
    });
  }

  static Priority() {
    return Joi.object({
      key: Joi.string().allow("").required(),

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

  static TicketCategory() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),

      form: this.CustomForm(),
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

      login_required: Joi.boolean().required(),

      should_notify: Joi.boolean().required(),

      success_message: Joi.string().allow(""),

      submit_button: this.SubmitButton(),

      inputs: Joi.array().items(Joi.object()).required(),

      created_on: this.CreatedOn(),

      created_by: Joi.object(),

      poll_for_assignment: this.PollForAssignment(),

      _id: Joi.string().allow("").required(),
    });
  }

  static TicketHistory() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      value: Joi.object().required(),

      ticket_id: Joi.string().allow("").required(),

      created_on: this.CreatedOn(),

      created_by: Joi.object(),

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

      ticket_id: Joi.string().allow("").required(),

      category: this.TicketCategory().required(),

      source: Joi.string().allow("").required(),

      status: this.Status().required(),

      priority: this.Priority().required(),

      created_by: Joi.object(),

      assigned_to: Joi.object(),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.object(),

      _id: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
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

      mobile: Joi.string().allow(""),

      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      dob: Joi.string().allow(""),

      profile_pic_url: Joi.string().allow(""),

      android_hash: Joi.string().allow(""),

      sender: Joi.string().allow(""),

      register_token: Joi.string().allow(""),
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
      register_token: Joi.string().allow(""),

      user_exists: Joi.boolean(),

      user: this.AuthSuccessUser(),
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
      status: Joi.string().allow(""),
    });
  }

  static RegisterFormSuccess() {
    return Joi.object({
      resend_timer: Joi.number(),

      resend_token: Joi.string().allow(""),

      success: Joi.boolean(),

      request_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
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

  static OtpSuccess() {
    return Joi.object({
      resend_timer: Joi.number(),

      resend_token: Joi.string().allow(""),

      success: Joi.boolean(),

      request_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static EmailOtpSuccess() {
    return Joi.object({
      resend_token: Joi.string().allow(""),
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

  static PaginationSchema() {
    return Joi.object({
      size: Joi.number(),

      item_total: Joi.number(),

      has_next: Joi.boolean(),

      type: Joi.string().allow(""),

      current: Joi.number(),
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

      meta: Joi.object(),
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

      cookie: Joi.object(),
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

      meta: Joi.object(),
    });
  }

  static UserSchema() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      meta: Joi.object(),

      last_name: Joi.string().allow(""),

      phone_numbers: Joi.array().items(this.PhoneNumber()),

      emails: Joi.array().items(this.Email()),

      gender: Joi.string().allow(""),

      dob: Joi.string().allow(""),

      active: Joi.boolean(),

      profile_pic_url: Joi.string().allow(""),

      username: Joi.string().allow(""),

      account_type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      debug: this.Debug(),

      has_old_password_hash: Joi.boolean(),

      _id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
    });
  }

  static PaymentGatewayConfigResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      app_id: Joi.string().allow("").required(),

      aggregators: Joi.array().items(Joi.object()),

      created: Joi.boolean().required(),

      display_fields: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      description: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      is_active: Joi.boolean(),

      merchant_salt: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      aggregator_name: this.PaymentGatewayConfig(),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),
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
      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
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

  static PaymentModeList() {
    return Joi.object({
      name: Joi.string().allow(""),

      card_brand: Joi.string().allow(""),

      card_id: Joi.string().allow(""),

      expired: Joi.boolean(),

      exp_year: Joi.number(),

      card_isin: Joi.string().allow(""),

      code: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      display_priority: Joi.number(),

      exp_month: Joi.number(),

      intent_flow: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      card_token: Joi.string().allow(""),

      fynd_vpa: Joi.string().allow(""),

      timeout: Joi.number(),

      card_reference: Joi.string().allow(""),

      logo_url: this.PaymentModeLogo(),

      aggregator_name: Joi.string().allow("").required(),

      card_number: Joi.string().allow(""),

      card_name: Joi.string().allow(""),

      card_fingerprint: Joi.string().allow(""),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      card_brand_image: Joi.string().allow(""),

      retry_count: Joi.number(),

      nickname: Joi.string().allow(""),

      card_issuer: Joi.string().allow(""),

      card_type: Joi.string().allow(""),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      display_priority: Joi.number().required(),

      name: Joi.string().allow("").required(),

      list: Joi.array().items(this.PaymentModeList()),

      display_name: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow(""),

      add_card_enabled: Joi.boolean(),

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
      payment_options: this.PaymentOptions().required(),

      success: Joi.boolean().required(),
    });
  }

  static PayoutsResponse() {
    return Joi.object({
      unique_transfer_no: Joi.object().required(),

      is_active: Joi.boolean().required(),

      transfer_type: Joi.string().allow("").required(),

      more_attributes: Joi.object().required(),

      payouts_aggregators: Joi.array().items(Joi.object()).required(),

      is_default: Joi.boolean().required(),

      customers: Joi.object().required(),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      bank_details: Joi.object().required(),

      is_active: Joi.boolean().required(),

      transfer_type: Joi.string().allow("").required(),

      users: Joi.object().required(),

      aggregator: Joi.string().allow("").required(),

      unique_external_id: Joi.string().allow("").required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      bank_details: Joi.object().required(),

      success: Joi.boolean().required(),

      unique_transfer_no: Joi.string().allow("").required(),

      payouts: Joi.object().required(),

      is_active: Joi.boolean().required(),

      payment_status: Joi.string().allow("").required(),

      transfer_type: Joi.string().allow("").required(),

      users: Joi.object().required(),

      aggregator: Joi.string().allow("").required(),

      created: Joi.boolean().required(),
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

      is_default: Joi.boolean().required(),

      unique_external_id: Joi.string().allow("").required(),
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

      success: Joi.boolean().required(),

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
      createdat: Joi.string().allow(""),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static FailedOrders() {
    return Joi.object({
      orders: this.FailOrder().required(),
    });
  }

  static FailOrder() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      marketplace_order: this.MarketplaceOrder(),

      marketplace_order_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      marketplace: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static MarketplaceOrder() {
    return Joi.object({
      order_status_url: Joi.string().allow(""),

      admin_graphql_api_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      test: Joi.boolean(),

      note: Joi.string().allow(""),

      total_price: Joi.string().allow(""),

      app_id: Joi.number(),

      total_discounts_set: this.TotalDiscountsSet(),

      total_price_set: this.TotalPriceSet(),

      total_tax_set: this.TotalTaxSet(),

      gateway: Joi.string().allow(""),

      name: Joi.string().allow(""),

      subtotal_price_set: this.SubtotalPriceSet(),

      number: Joi.number(),

      buyer_accepts_marketing: Joi.boolean(),

      contact_email: Joi.string().allow(""),

      token: Joi.string().allow(""),

      source_name: Joi.string().allow(""),

      payment_gateway_names: Joi.array().items(Joi.any()),

      presentment_currency: Joi.string().allow(""),

      subtotal_price: Joi.string().allow(""),

      processed_at: Joi.string().allow(""),

      order_number: Joi.number(),

      total_tip_received: Joi.string().allow(""),

      id: Joi.number(),

      confirmed: Joi.boolean(),

      currency: Joi.string().allow(""),

      total_line_items_price: Joi.string().allow(""),

      line_items: this.LineItems(),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      total_weight: Joi.number(),

      billing_address: this.BillingAddress(),

      total_shipping_price_set: this.TotalShippingPriceSet(),

      customer: this.Customer(),

      total_discounts: Joi.string().allow(""),

      total_line_items_price_set: this.TotalLineItemsPriceSet(),

      tags: Joi.string().allow(""),

      total_price_usd: Joi.string().allow(""),

      user_id: Joi.number(),

      total_tax: Joi.string().allow(""),

      processing_method: Joi.string().allow(""),

      shipping_address: this.ShippingAddress(),

      taxes_included: Joi.boolean(),

      financial_status: Joi.string().allow(""),
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
      amount: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static ShopMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
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
      amount: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static TotalPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
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
      amount: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static TotalTaxSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
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
      amount: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static SubtotalPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static LineItems() {
    return Joi.object({
      sku: Joi.string().allow(""),

      fulfillable_quantity: Joi.number(),

      grams: Joi.number(),

      total_discount: Joi.string().allow(""),

      article: this.LineItemsArticle(),

      title: Joi.string().allow(""),

      variant_inventory_management: Joi.string().allow(""),

      id: Joi.number(),

      variant_id: Joi.number(),

      variant_title: Joi.string().allow(""),

      product_exists: Joi.boolean(),

      price: Joi.string().allow(""),

      admin_graphql_api_id: Joi.string().allow(""),

      quantity: Joi.number(),

      vendor: Joi.string().allow(""),

      fulfillment_service: Joi.string().allow(""),

      taxable: Joi.boolean(),

      name: Joi.string().allow(""),

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

      old_article_uid: Joi.string().allow(""),

      total_quantity: Joi.number(),

      manufacturer: this.Manufacturer(),

      price: this.ArticlePrice(),

      track_inventory: Joi.boolean(),

      company: this.Company(),

      is_active: Joi.boolean(),

      date_meta: this.FailOrderDateMeta(),

      fragile: Joi.boolean(),

      marketplace_identifiers: this.MarketplaceIdentifiers(),

      size: Joi.string().allow(""),

      is_set: Joi.boolean(),

      dimension: this.Dimension(),

      weight: this.Weight(),

      store: this.Store(),

      meta: this.ArticleMeta(),

      uid: Joi.string().allow(""),

      brand: this.ArticleBrand(),

      item_id: Joi.number(),

      fynd_article_code: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      identifier: this.LineItemsArticleIdentifier(),

      seller_identifier: Joi.string().allow(""),

      fynd_item_code: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),
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

      updated_at: Joi.string().allow(""),
    });
  }

  static Sellable() {
    return Joi.object({
      count: Joi.number(),

      updated_at: Joi.string().allow(""),
    });
  }

  static OrderCommitted() {
    return Joi.object({
      count: Joi.number(),

      updated_at: Joi.string().allow(""),
    });
  }

  static Damaged() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      count: Joi.number(),
    });
  }

  static Manufacturer() {
    return Joi.object({
      is_default: Joi.boolean(),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ArticlePrice() {
    return Joi.object({
      marked: Joi.number(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),

      transfer: Joi.number(),
    });
  }

  static Company() {
    return Joi.object({
      id: Joi.number(),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      return_allowed: Joi.boolean(),

      meta: Joi.string().allow(""),

      exchange_allowed: Joi.boolean(),

      agreement_start_date: Joi.string().allow(""),

      exchange_within_days: Joi.number(),

      payment_procesing_charge: Joi.number(),

      fynd_a_fit_available: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      return_within_days: Joi.number(),
    });
  }

  static FailOrderDateMeta() {
    return Joi.object({
      added_on_store: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static MarketplaceIdentifiers() {
    return Joi.object({
      tatacliq_luxury: this.TatacliqLuxury(),
    });
  }

  static TatacliqLuxury() {
    return Joi.object({
      sku: Joi.string().allow(""),
    });
  }

  static Dimension() {
    return Joi.object({
      height: Joi.number(),

      width: Joi.number(),

      unit: Joi.string().allow(""),

      length: Joi.number(),

      is_default: Joi.boolean(),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean(),

      unit: Joi.string().allow(""),

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
      service: Joi.string().allow(""),
    });
  }

  static ArticleBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static LineItemsArticleIdentifier() {
    return Joi.object({
      sku_code: Joi.string().allow(""),
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
      amount: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static PriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static TaxLines() {
    return Joi.object({
      title: Joi.string().allow(""),

      price: Joi.string().allow(""),

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
      amount: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static TaxLinesPriceSetPresentmentMoney() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      amount: Joi.string().allow(""),
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
      amount: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static TotalDiscountSetShopMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static BillingAddress() {
    return Joi.object({
      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      zip: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      province_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      company: Joi.string().allow(""),

      latitude: Joi.number(),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      province: Joi.string().allow(""),
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
      amount: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static TotalShippingPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static Customer() {
    return Joi.object({
      created_at: Joi.string().allow(""),

      id: Joi.number(),

      last_name: Joi.string().allow(""),

      state: Joi.string().allow(""),

      last_order_id: Joi.number(),

      note: Joi.string().allow(""),

      verified_email: Joi.boolean(),

      phone: Joi.string().allow(""),

      accepts_marketing: Joi.boolean(),

      first_name: Joi.string().allow(""),

      tags: Joi.string().allow(""),

      last_order_name: Joi.string().allow(""),

      orders_count: Joi.number(),

      total_spent: Joi.string().allow(""),

      tax_exempt: Joi.boolean(),

      currency: Joi.string().allow(""),

      accepts_marketing_updated_at: Joi.string().allow(""),

      email: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      admin_graphql_api_id: Joi.string().allow(""),

      default_address: this.DefaultAddress(),
    });
  }

  static DefaultAddress() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      province_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      is_default: Joi.boolean(),

      id: Joi.number(),

      customer_id: Joi.number(),

      first_name: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country_name: Joi.string().allow(""),

      company: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      province: Joi.string().allow(""),

      country: Joi.string().allow(""),

      zip: Joi.string().allow(""),
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
      amount: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static TotalLineItemsPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      address1: Joi.string().allow(""),

      zip: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      latitude: Joi.number(),

      province_code: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      province: Joi.string().allow(""),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      company: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

      id: Joi.string().allow(""),

      application: this.PlatformApplication(),

      shipments: this.PlatformShipment(),

      created_at: Joi.string().allow(""),

      total_shipments_in_order: Joi.number(),

      payments: this.ItemsPayments(),
    });
  }

  static PlatformOrderUserInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      uid: Joi.number(),

      avis_user_id: Joi.string().allow(""),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      area: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      updated_at: Joi.string().allow(""),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      longitude: Joi.number(),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address_category: Joi.string().allow(""),
    });
  }

  static Channel() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static PlatformBreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static PlatformApplication() {
    return Joi.object({
      name: Joi.string().allow(""),

      owner: Joi.string().allow(""),

      post_order_reassignment: Joi.boolean(),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      dp_assignment: Joi.boolean(),

      article_assignment: this.ArticleAssignment(),

      force_reassignment: Joi.boolean(),

      token: Joi.string().allow(""),

      secret: Joi.string().allow(""),
    });
  }

  static ArticleAssignment() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      status: this.PlatformShipmentStatus(),

      bags: this.Bags(),

      prices: this.ShipmentPrices(),

      breakup_values: this.ShipmentBreakupValues(),

      id: Joi.string().allow(""),

      dp_details: this.DpDetails(),

      invoice: this.ShipmentInvoice(),

      fulfilling_store: this.PlatformFulfillingStore(),

      payments: this.Payments(),

      gst: this.ShipmentGst(),

      company: this.Company(),

      brand: this.PlatformShipmentBrand(),

      coupon: Joi.object(),

      order_source: Joi.string().allow(""),

      is_not_fynd_source: Joi.boolean(),

      comment: Joi.string().allow(""),

      promise: this.Promise(),

      tracking_details: this.ShipmentTrackingDetails(),

      is_fynd_coupon: Joi.boolean(),

      order_type: Joi.string().allow(""),

      user: this.ShipmentUser(),
    });
  }

  static PlatformShipmentStatus() {
    return Joi.object({
      id: Joi.number(),

      bag_list: Joi.array().items(Joi.number()),

      created_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      name: Joi.string().allow(""),

      progress: Joi.number(),

      shipment_id: Joi.string().allow(""),

      current_shipment_status: Joi.string().allow(""),

      color_code: Joi.string().allow(""),
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

      hsn_code: Joi.string().allow(""),

      price_effective: Joi.number(),

      cod_charges: Joi.number(),

      gst_fee: Joi.string().allow(""),

      fynd_credits: Joi.number(),

      refund_amount: Joi.number(),

      cashback_applied: Joi.number(),

      transfer_price: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid: Joi.number(),

      gst_tax_percentage: Joi.number(),

      size: Joi.string().allow(""),

      total_units: Joi.number(),

      discount: Joi.number(),

      coupon_effective_discount: Joi.number(),

      cashback: Joi.number(),

      promotion_effective_discount: Joi.number(),

      gst_tag: Joi.string().allow(""),

      delivery_charge: Joi.number(),

      refund_credit: Joi.number(),

      price_marked: Joi.number(),

      identifiers: this.Identifiers(),

      item_name: Joi.string().allow(""),

      added_to_fynd_cash: Joi.boolean(),

      brand_calculated_amount: Joi.number(),
    });
  }

  static Identifiers() {
    return Joi.object({
      ean: Joi.string().allow(""),
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

      size: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      can_return: Joi.boolean(),

      brand_id: Joi.number(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      attributes: this.BagItemAttributes(),

      l3_category_name: Joi.string().allow(""),

      l3_category: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      image: Joi.array().items(Joi.string().allow("")),

      brand: Joi.string().allow(""),

      last_updated_at: Joi.string().allow(""),
    });
  }

  static BagItemAttributes() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),
    });
  }

  static BagArticle() {
    return Joi.object({
      identifiers: this.ArticleIdentifiers(),

      esp_modified: Joi.boolean(),

      is_set: Joi.boolean(),

      size: Joi.string().allow(""),

      code: Joi.string().allow(""),

      set: this.Set(),

      seller_identifier: Joi.string().allow(""),

      return_config: this.BagArticleReturnConfig(),

      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      child_details: Joi.object(),
    });
  }

  static ArticleIdentifiers() {
    return Joi.object({
      ean: Joi.string().allow(""),
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
      size: Joi.string().allow(""),

      pieces: Joi.number(),
    });
  }

  static BagArticleReturnConfig() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

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

      gst_fee: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      value_of_good: Joi.number(),

      gst_tax_percentage: Joi.number(),

      is_default_hsn_code: Joi.boolean(),
    });
  }

  static BagBreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static BagCurrentStatus() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      bag_state_mapper: this.BagStateMapper(),

      status: Joi.string().allow(""),

      state_type: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_state_name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      display_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),
    });
  }

  static BagStatus() {
    return Joi.object({
      status: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      bag_state_mapper: this.BagStatusBagStateMapper(),
    });
  }

  static BagStatusBagStateMapper() {
    return Joi.object({
      is_active: Joi.boolean(),

      display_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      app_state_name: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static DpDetails() {
    return Joi.object({
      gst_tag: Joi.string().allow(""),
    });
  }

  static ShipmentInvoice() {
    return Joi.object({
      payment_type: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      amount_to_collect: Joi.number(),

      rto_address: this.RtoAddress(),
    });
  }

  static RtoAddress() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),

      phone: Joi.string().allow(""),

      location_type: Joi.string().allow(""),

      store_address_json: this.StoreAddressJson(),

      code: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      company_id: Joi.number(),

      contact_person: Joi.string().allow(""),

      state: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      address2: Joi.string().allow(""),
    });
  }

  static StoreAddressJson() {
    return Joi.object({
      country: Joi.string().allow(""),

      latitude: Joi.number(),

      updated_at: Joi.string().allow(""),

      area: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      email: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      version: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
    });
  }

  static PlatformFulfillingStore() {
    return Joi.object({
      packaging_material_count: Joi.number(),

      location_type: Joi.string().allow(""),

      code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      meta: this.FulfillingStoreMeta(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      address1: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      state: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      is_enabled_for_recon: Joi.boolean(),

      fulfillment_channel: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      id: Joi.number(),

      pincode: Joi.string().allow(""),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      store_address_json: this.FulfillingStoreStoreAddressJson(),

      updated_at: Joi.string().allow(""),

      login_username: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static FulfillingStoreMeta() {
    return Joi.object({
      additional_contact_details: this.AdditionalContactDetails(),

      documents: this.Documents(),

      gst_number: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      product_return_config: this.ProductReturnConfig(),

      allow_dp_assignment_from_fynd: Joi.boolean(),

      stage: Joi.string().allow(""),

      timing: this.Timing(),
    });
  }

  static AdditionalContactDetails() {
    return Joi.object({
      number: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Documents() {
    return Joi.object({
      gst: this.Gst(),
    });
  }

  static Gst() {
    return Joi.object({
      legal_name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

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

      weekday: Joi.string().allow(""),

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
      address2: Joi.string().allow(""),

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      version: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),

      longitude: Joi.number(),

      updated_at: Joi.string().allow(""),

      address_category: Joi.string().allow(""),
    });
  }

  static Payments() {
    return Joi.object({
      is_active: Joi.boolean(),

      display_name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),

      source_nickname: Joi.string().allow(""),

      display_priority: Joi.number(),

      id: Joi.number(),

      mode: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),
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

      brand_name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      id: Joi.number(),

      is_virtual_invoice: Joi.boolean(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static Promise() {
    return Joi.object({
      timestamp: this.Timestamp(),
    });
  }

  static Timestamp() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static ShipmentTrackingDetails() {
    return Joi.object({
      status: Joi.string().allow(""),

      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),
    });
  }

  static ShipmentUser() {
    return Joi.object({
      email: Joi.string().allow(""),

      id: Joi.number(),

      first_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      mongo_user_id: Joi.string().allow(""),
    });
  }

  static ItemsPayments() {
    return Joi.object({
      display_priority: Joi.number(),

      id: Joi.number(),

      is_active: Joi.boolean(),

      display_name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),

      source_nickname: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static Filters() {
    return Joi.object({
      stages: this.Stages(),
    });
  }

  static Stages() {
    return Joi.object({
      text: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_default: Joi.boolean(),

      filters: this.StagesFilters(),
    });
  }

  static StagesFilters() {
    return Joi.object({
      text: Joi.string().allow(""),

      value: Joi.string().allow(""),

      type: Joi.string().allow(""),

      options: this.Options(),
    });
  }

  static Options() {
    return Joi.object({
      text: Joi.string().allow(""),

      value: Joi.string().allow(""),
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
      text: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static DpAssigned() {
    return Joi.object({
      text: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ReturnBagDelivered() {
    return Joi.object({
      text: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static Placed() {
    return Joi.object({
      text: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static DeliveryDone() {
    return Joi.object({
      text: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static Pending() {
    return Joi.object({
      text: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static BagPacked() {
    return Joi.object({
      text: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static PlatformOrderPage() {
    return Joi.object({
      next: Joi.string().allow(""),

      previous: Joi.string().allow(""),

      type: Joi.string().allow(""),

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
      stage: Joi.string().allow(""),

      stores: Joi.array().items(Joi.string().allow("")),

      from_date: Joi.string().allow(""),

      to_date: Joi.string().allow(""),
    });
  }

  static UpdateOrderReprocessResponse() {
    return Joi.object({
      status: Joi.string().allow("").required(),
    });
  }

  static PlatformOrderTrack() {
    return Joi.object({
      success: Joi.boolean().required(),

      request_id: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      resend_timer: Joi.number().required(),

      resend_token: Joi.string().allow(""),
    });
  }

  static GetPingResponse() {
    return Joi.object({
      ping: Joi.string().allow("").required(),
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
      awb: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),
    });
  }

  static UpdateProcessShipmenstRequestBody() {
    return Joi.object({
      shipment_ids: Joi.array().items(Joi.string().allow("")).required(),

      expected_status: Joi.string().allow("").required(),
    });
  }

  static UpdateProcessShipmenstRequestResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static GetVoiceCallbackResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static GetClickToCallResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static ApefaceApiError() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      result: Joi.object(),

      _custom_json: Joi.object(),

      words: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),
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

      code: Joi.string().allow(""),

      status: Joi.number(),

      message: Joi.string().allow(""),
    });
  }

  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static SearchKeywordResult() {
    return Joi.object({
      query: Joi.object().required(),

      sort_on: Joi.string().allow("").required(),
    });
  }

  static CreateSearchKeyword() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      result: this.SearchKeywordResult().required(),

      _custom_json: Joi.object(),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),
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
      app_id: Joi.string().allow(""),

      _custom_json: Joi.object(),

      results: Joi.array().items(Joi.object()),

      words: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),
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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      params: Joi.object(),

      query: Joi.object().required(),

      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
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

      _custom_json: Joi.object(),

      display: Joi.string().allow(""),

      action: this.AutocompleteAction(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      _custom_json: Joi.object(),

      is_active: Joi.boolean(),

      results: Joi.array().items(this.AutocompleteResult()),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      _custom_json: Joi.object(),

      results: Joi.array().items(Joi.object()),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      min_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      product_uid: Joi.number().required(),

      max_quantity: Joi.number().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      modified_by: Joi.object(),

      same_store_assignment: Joi.boolean(),

      id: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      created_by: Joi.object(),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      products: Joi.array().items(this.ProductBundleItem()).required(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      meta: Joi.object(),

      logo: Joi.string().allow(""),
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
      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      modified_by: Joi.object(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean().required(),

      created_by: Joi.object(),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      products: Joi.array().items(this.ProductBundleItem()).required(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      meta: Joi.object(),

      logo: Joi.string().allow(""),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      attributes: Joi.object(),

      quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      identifier: Joi.object(),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      price: Joi.object(),

      slug: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      uid: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.string().allow(""),

      is_available: Joi.boolean(),

      quantity: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      max_marked: Joi.number(),

      min_marked: Joi.number(),

      max_effective: Joi.number(),

      min_effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static GetProducts() {
    return Joi.object({
      min_quantity: Joi.number(),

      product_details: this.LimitedProductData(),

      auto_select: Joi.boolean(),

      sizes: Joi.array().items(this.Size()),

      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      price: this.Price(),

      product_uid: Joi.number(),

      max_quantity: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean(),

      products: Joi.array().items(this.GetProducts()),

      choice: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.object(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.object(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      products: Joi.array().items(this.ProductBundleItem()).required(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      meta: Joi.object(),

      logo: Joi.string().allow(""),
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
      unit: Joi.string().allow(""),

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
      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      modified_by: Joi.object(),

      subtitle: Joi.string().allow(""),

      active: Joi.boolean(),

      id: Joi.string().allow(""),

      image: Joi.string().allow(""),

      brand_id: Joi.number(),

      created_by: Joi.object(),

      title: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      guide: this.Guide(),

      description: Joi.string().allow(""),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      uid: Joi.number(),

      success: Joi.boolean(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      modified_by: Joi.object(),

      subtitle: Joi.string().allow(""),

      active: Joi.boolean(),

      id: Joi.string().allow(""),

      brand_id: Joi.number(),

      created_by: Joi.object(),

      title: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      name: Joi.string().allow(""),

      guide: Joi.object(),
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

  static MetaDataListingFilterMetaResponse() {
    return Joi.object({
      key: Joi.string().allow(""),

      units: Joi.array().items(Joi.object()),

      filter_types: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),
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
      variant: Joi.object(),

      detail: Joi.object(),

      compare: Joi.object(),

      similar: Joi.object(),
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
      max: Joi.number().required(),

      min: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      size: this.ProductSize().required(),

      display_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
    });
  }

  static ConfigurationProductVariant() {
    return Joi.object({
      config: Joi.array().items(this.ConfigurationProductVariantConfig()),
    });
  }

  static ConfigurationProductConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      subtitle: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      title: Joi.string().allow(""),

      size: this.ProductSize(),

      logo: Joi.string().allow(""),
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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
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
      end: Joi.number(),

      start: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      sort: Joi.string().allow(""),

      condition: Joi.string().allow(""),

      bucket_points: Joi.array().items(this.ConfigurationBucketPoints()),

      value: Joi.string().allow(""),

      map: Joi.object(),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      value_config: this.ConfigurationListingFilterValue(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
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

  static ConfigurationListing() {
    return Joi.object({
      sort: this.ConfigurationListingSort().required(),

      filter: this.ConfigurationListingFilter().required(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      product: this.ConfigurationProduct(),

      id: Joi.string().allow(""),

      listing: this.ConfigurationListing(),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),
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
      app_id: Joi.string().allow("").required(),

      product: this.ConfigurationProduct(),

      listing: this.ConfigurationListing(),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),
    });
  }

  static GetCatalogConfigurationDetailsSchemaListing() {
    return Joi.object({
      sort: Joi.object(),

      filter: Joi.object(),
    });
  }

  static EntityConfiguration() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      product: this.GetCatalogConfigurationDetailsProduct(),

      id: Joi.string().allow(""),

      listing: this.GetCatalogConfigurationDetailsSchemaListing(),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),
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

      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      max: Joi.number(),

      query_format: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      count: Joi.number(),

      selected_max: Joi.number(),

      is_selected: Joi.boolean().required(),

      display: Joi.string().allow("").required(),

      selected_min: Joi.number(),

      value: Joi.string().allow("").required(),

      min: Joi.number(),

      display_format: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
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
      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      filters: Joi.array().items(this.ProductFilters()),

      sort_on: Joi.array().items(this.ProductSortOn()),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      tags: Joi.array().items(this.CollectionListingFilterTag()),

      type: Joi.array().items(this.CollectionListingFilterType()),
    });
  }

  static ProductListingActionPage() {
    return Joi.object({
      query: Joi.object(),

      type: Joi.string().allow(""),
    });
  }

  static ProductListingAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      page: this.ProductListingActionPage(),
    });
  }

  static BannerImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static ImageUrls() {
    return Joi.object({
      landscape: this.BannerImage(),

      portrait: this.BannerImage(),
    });
  }

  static Media1() {
    return Joi.object({
      meta: Joi.object(),

      url: Joi.string().allow("").required(),

      type: Joi.string().allow(""),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      action: this.ProductListingAction(),

      banners: this.ImageUrls(),

      cron: Joi.object(),

      tag: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      meta: Joi.object(),

      description: Joi.string().allow(""),

      _schedule: Joi.object(),

      query: Joi.object(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      uid: Joi.string().allow(""),

      badge: Joi.object(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      logo: this.Media1(),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      filters: this.CollectionListingFilter(),

      items: Joi.array().items(this.GetCollectionDetailNest()),

      page: this.Page(),
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
      landscape: this.CollectionImage().required(),

      portrait: this.CollectionImage().required(),
    });
  }

  static Schedule() {
    return Joi.object({
      end: Joi.string().allow(""),

      cron: Joi.string().allow(""),

      start: Joi.string().allow(""),

      duration: Joi.number(),
    });
  }

  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static SeoDetail() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      color: Joi.string().allow(""),

      text: Joi.string().allow(""),
    });
  }

  static CreateCollection() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      banners: this.CollectionBanner().required(),

      slug: Joi.string().allow("").required(),

      meta: Joi.object(),

      sort_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      published: Joi.boolean(),

      _schedule: this.Schedule(),

      created_by: this.UserInfo(),

      seo: this.SeoDetail(),

      query: Joi.object(),

      type: Joi.string().allow("").required(),

      allow_facets: Joi.boolean(),

      name: Joi.string().allow("").required(),

      allow_sort: Joi.boolean(),

      badge: this.CollectionBadge(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      _locale_language: Joi.object(),

      logo: this.CollectionImage().required(),

      modified_by: this.UserInfo(),

      _custom_json: Joi.object(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      meta: Joi.object(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.object(),

      is_active: Joi.boolean(),

      banners: this.ImageUrls(),

      cron: Joi.object(),

      query: Joi.object(),

      tag: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      logo: this.BannerImage(),

      badge: Joi.object(),

      description: Joi.string().allow(""),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      meta: Joi.object(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.object(),

      is_active: Joi.boolean(),

      banners: this.ImageUrls(),

      cron: Joi.object(),

      query: Joi.object(),

      tag: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      logo: this.Media1(),

      badge: Joi.object(),

      description: Joi.string().allow(""),
    });
  }

  static Price1() {
    return Joi.object({
      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      effective: this.Price1(),

      marked: this.Price1(),
    });
  }

  static ProductDetailAttribute() {
    return Joi.object({
      key: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(this.ProductDetailAttribute()),
    });
  }

  static ProductBrand() {
    return Joi.object({
      action: this.ProductListingAction(),

      uid: Joi.number(),

      logo: this.Media1(),

      name: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      tryouts: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.object(),

      discount: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      sellable: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      rating_count: Joi.number(),

      attributes: Joi.object(),

      item_type: Joi.string().allow(""),

      teaser_tag: Joi.object(),

      similars: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      price: this.ProductListingPrice(),

      uid: Joi.number(),

      product_online_date: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        this.ProductDetailGroupedAttribute()
      ),

      brand: this.ProductBrand(),

      has_variant: Joi.boolean(),

      medias: Joi.array().items(this.Media1()),

      highlights: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      color: Joi.string().allow(""),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      filters: Joi.array().items(this.ProductFilters()),

      sort_on: Joi.array().items(this.ProductSortOn()),

      items: Joi.array().items(this.ProductListingDetail()),

      page: this.Page(),
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
      message: Joi.string().allow(""),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      total_articles: Joi.number(),

      article_freshness: Joi.number(),

      total_sizes: Joi.number(),

      name: Joi.string().allow(""),

      available_articles: Joi.number(),

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
      brand_distribution: this.CatalogInsightBrand(),

      data: this.CrossSellingData(),
    });
  }

  static OptInPostRequest() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean(),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      created_on: Joi.number().required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      company_id: Joi.number().required(),

      modified_by: Joi.object(),

      store_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean().required(),

      modified_on: Joi.number().required(),

      created_by: Joi.object(),

      platform: Joi.string().allow("").required(),
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
      uid: Joi.number(),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_id: Joi.number(),

      brand_name: Joi.string().allow(""),

      company_id: Joi.number(),

      total_article: Joi.number(),
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

      company: Joi.string().allow(""),

      store: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      company_id: Joi.number(),

      store_code: Joi.string().allow(""),

      documents: Joi.array().items(Joi.object()),

      modified_on: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      timing: Joi.object(),

      additional_contacts: Joi.array().items(Joi.object()),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      items: Joi.array().items(this.StoreDetail()),

      page: this.Page(),
    });
  }

  static AttributeMasterDetails() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
    });
  }

  static AttributeSchemaRange() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      range: this.AttributeSchemaRange(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      format: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      mandatory: Joi.boolean(),

      multi: Joi.boolean(),
    });
  }

  static AttributeMasterMandatoryDetails() {
    return Joi.object({
      l3_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AttributeMasterMeta() {
    return Joi.object({
      mandatory_details: this.AttributeMasterMandatoryDetails().required(),

      enriched: Joi.boolean(),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      priority: Joi.number(),

      indexing: Joi.boolean().required(),

      depends_on: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GenderDetail() {
    return Joi.object({
      details: this.AttributeMasterDetails(),

      schema: this.AttributeMaster(),

      id: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      meta: this.AttributeMasterMeta(),

      enabled_for_end_consumer: Joi.boolean(),

      filters: this.AttributeMasterFilter(),

      departments: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),
    });
  }

  static ProdcutTemplateCategoriesResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Page(),
    });
  }

  static PTErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      errors: Joi.object(),

      code: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.object(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_by: this.UserSerializer(),

      priority_order: Joi.number(),

      page_no: Joi.number(),

      item_type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      created_by: this.UserSerializer(),

      modified_on: Joi.string().allow(""),

      search: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      page_size: Joi.number(),
    });
  }

  static DepartmentsResponse() {
    return Joi.object({
      items: Joi.array().items(this.GetDepartment()),

      page: this.Page(),
    });
  }

  static DepartmentErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      errors: Joi.object(),

      code: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.object(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      modified_by: Joi.object(),

      is_active: Joi.boolean(),

      created_by: Joi.object(),

      modified_on: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),
    });
  }

  static TemplatesResponse() {
    return Joi.object({
      items: this.ProductTemplate(),

      page: this.Page(),
    });
  }

  static MultipleCommon() {
    return Joi.object({
      uid: Joi.string().allow(""),
    });
  }

  static TemplatesValidationResponse() {
    return Joi.object({
      data: this.MultipleCommon(),
    });
  }

  static InventoryValidationResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      data: this.MultipleCommon(),
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
      message: Joi.string().allow(""),

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
      l2: Joi.number().required(),

      l1: Joi.number().required(),

      department: Joi.number().required(),
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
      facebook: this.CategoryMappingValues(),

      ajio: this.CategoryMappingValues(),

      google: this.CategoryMappingValues(),
    });
  }

  static Media2() {
    return Joi.object({
      landscape: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),
    });
  }

  static Category() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(this.Hierarchy()),

      modified_by: Joi.object(),

      priority: Joi.number(),

      is_active: Joi.boolean().required(),

      created_by: Joi.object(),

      modified_on: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      marketplaces: this.CategoryMapping(),

      media: this.Media2(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()).required(),

      level: Joi.number().required(),
    });
  }

  static CategoryResponse() {
    return Joi.object({
      items: Joi.array().items(this.Category()),

      page: this.Page(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      tryouts: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(this.Hierarchy()),

      level: Joi.number().required(),

      priority: Joi.number(),

      is_active: Joi.boolean().required(),

      marketplaces: this.CategoryMapping(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()).required(),

      media: this.Media2(),
    });
  }

  static CategoryCreateResponse() {
    return Joi.object({
      uid: Joi.number(),

      message: Joi.string().allow(""),
    });
  }

  static CategoryUpdateResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static UserCommon() {
    return Joi.object({
      company_id: Joi.number(),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static VerifiedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static Attributes() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      pattern: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      created_by: this.UserCommon(),

      product_fit: Joi.string().allow(""),

      material: Joi.string().allow(""),

      neck_type: Joi.string().allow(""),

      sleeve_length: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_color: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_by: this.UserCommon(),

      primary_material: Joi.string().allow(""),

      color: Joi.string().allow(""),

      meta_nature: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      verified_by: this.VerifiedBy(),
    });
  }

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static Logo() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      uid: Joi.number(),

      logo: this.Logo(),

      name: Joi.string().allow(""),
    });
  }

  static Product() {
    return Joi.object({
      company_id: Joi.number(),

      multi_size: Joi.boolean(),

      id: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      description: Joi.string().allow(""),

      attributes: this.Attributes(),

      is_dependent: Joi.boolean(),

      item_type: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.object()),

      category_slug: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      product_publish: this.ProductPublished(),

      brand: this.Brand(),

      is_active: Joi.boolean(),

      highlights: Joi.string().allow(""),

      is_set: Joi.boolean(),

      images: Joi.array().items(Joi.string().allow("")),

      media: Joi.array().items(Joi.string().allow("")),

      hsn_code: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),
    });
  }

  static PageData() {
    return Joi.object({
      current: Joi.string().allow(""),

      has_next: Joi.boolean(),

      size: Joi.number(),

      item_total: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.Product()),

      page: this.PageData(),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),

      manufacturing_time: Joi.number(),

      is_custom_order: Joi.boolean(),
    });
  }

  static TeaserTag() {
    return Joi.object({
      url: Joi.string().allow(""),

      tag: Joi.string().allow(""),
    });
  }

  static Trader() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static OrderQuantity() {
    return Joi.object({
      is_set: Joi.boolean(),

      minimum: Joi.number(),

      maximum: Joi.number(),
    });
  }

  static ProductCreateUpdate() {
    return Joi.object({
      company_id: Joi.number().required(),

      custom_order: this.CustomOrder(),

      multi_size: Joi.boolean(),

      item_code: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      variants: Joi.object(),

      description: Joi.string().allow(""),

      requester: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      no_of_boxes: Joi.number(),

      item_type: Joi.string().allow("").required(),

      category_slug: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      teaser_tag: this.TeaserTag(),

      short_description: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      change_request_id: Joi.string().allow(""),

      uid: Joi.number(),

      trader: this.Trader(),

      size_guide: Joi.string().allow(""),

      product_publish: this.ProductPublish(),

      trader_type: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      is_active: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      media: Joi.array().items(this.Media1()),

      hsn_code: Joi.string().allow("").required(),

      return_config: this.ReturnConfig(),

      brand_uid: Joi.number().required(),

      _custom_json: Joi.object(),

      moq: this.OrderQuantity(),

      template_tag: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),
    });
  }

  static ValidateProduct() {
    return Joi.object({
      valid: Joi.boolean(),
    });
  }

  static UserDetail() {
    return Joi.object({
      full_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      stage: Joi.string().allow(""),

      modified_by: this.UserDetail(),

      file_path: Joi.string().allow(""),

      total: Joi.number(),

      succeed: Joi.number(),

      is_active: Joi.boolean(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      created_by: this.UserDetail(),

      template: this.ProductTemplate(),

      failed: Joi.number(),

      template_tag: Joi.string().allow(""),

      cancelled: Joi.number(),
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
      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      cancelled_records: Joi.array().items(Joi.object()),

      custom_template_tag: Joi.string().allow(""),

      company_id: Joi.number().required(),

      stage: Joi.string().allow(""),

      modified_by: this.UserInfo1(),

      file_path: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      total: Joi.number().required(),

      succeed: Joi.number(),

      is_active: Joi.boolean(),

      created_by: this.UserInfo1(),

      modified_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.object()),

      failed: Joi.number(),

      template_tag: Joi.string().allow(""),

      cancelled: Joi.number(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      template_tag: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),

      data: Joi.array().items(Joi.object()).required(),
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

  static Items() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      stage: Joi.string().allow(""),

      modified_by: this.UserCommon(),

      file_path: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      id: Joi.string().allow(""),

      total: Joi.number(),

      succeed: Joi.number(),

      created_by: this.UserCommon(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      retry: Joi.number(),

      failed: Joi.number(),

      cancelled: Joi.number(),
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
      url: Joi.string().allow("").required(),

      company_id: Joi.number(),

      user: Joi.object().required(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      total: Joi.number(),

      page_no: Joi.number(),

      search: Joi.string().allow(""),

      size: Joi.string().allow(""),

      page_size: Joi.number(),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_type: Joi.string().allow("").required(),

      gtin_value: Joi.string().allow("").required(),

      primary: Joi.boolean(),
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

      quantity: Joi.number(),
    });
  }

  static InvSize() {
    return Joi.object({
      item_dimensions_unit_of_measure: Joi.string().allow(""),

      price_effective: Joi.number().required(),

      item_length: Joi.number(),

      store_code: Joi.string().allow("").required(),

      item_width: Joi.number(),

      quantity: Joi.number().required(),

      identifiers: Joi.array().items(this.GTIN()).required(),

      size: Joi.string().allow("").required(),

      price_transfer: Joi.number(),

      set: this.InventorySet(),

      item_weight: Joi.number(),

      price: Joi.number().required(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      item_height: Joi.number(),

      currency: Joi.string().allow("").required(),

      is_set: Joi.boolean(),
    });
  }

  static ItemQuery() {
    return Joi.object({
      brand_uid: Joi.number(),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),
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
      custom_template_tag: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      page_no: Joi.number(),

      start_date: Joi.string().allow(""),

      end_date: Joi.string().allow(""),

      search: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      page_size: Joi.number(),
    });
  }

  static CommonResponse() {
    return Joi.object({
      success: Joi.string().allow(""),
    });
  }

  static Size1() {
    return Joi.object({
      item_dimensions_unit_of_measure: Joi.string().allow(""),

      price_effective: Joi.number().required(),

      item_length: Joi.number(),

      store_code: Joi.string().allow("").required(),

      item_width: Joi.number(),

      quantity: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      identifiers: Joi.array().items(Joi.object()),

      size: Joi.string().allow(""),

      price_transfer: Joi.number(),

      set: this.InventorySet(),

      item_weight: Joi.number(),

      price: Joi.number().required(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      item_height: Joi.number(),

      currency: Joi.string().allow("").required(),

      is_set: Joi.boolean(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      company_id: Joi.number().required(),

      sizes: Joi.array().items(this.Size1()).required(),

      batch_id: Joi.string().allow("").required(),

      user: Joi.object(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      task_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      request_params: Joi.object(),

      trigger_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      store: Joi.array().items(Joi.number()),

      brand: Joi.array().items(Joi.number()),

      type: Joi.string().allow(""),
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
      multivalues: Joi.boolean(),

      data: Joi.array().items(this.FilerList()),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      company_id: Joi.number(),

      tax2: Joi.number(),

      tax1: Joi.number(),

      is_active: Joi.boolean(),

      threshold1: Joi.number(),

      threshold2: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      uid: Joi.number(),

      hs2_code: Joi.string().allow(""),

      tax_on_esp: Joi.boolean(),
    });
  }

  static PageResponse() {
    return Joi.object({
      current: Joi.string().allow(""),

      has_next: Joi.boolean(),

      size: Joi.number(),

      item_total: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static HsnCodesListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.HsnCodesObject()),

      page: this.PageResponse(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      hsn_code: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      tax2: Joi.number(),

      tax1: Joi.number().required(),

      is_active: Joi.boolean().required(),

      threshold1: Joi.number().required(),

      threshold2: Joi.number(),

      tax_on_mrp: Joi.boolean().required(),

      uid: Joi.number(),

      hs2_code: Joi.string().allow("").required(),

      tax_on_esp: Joi.boolean(),
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

  static BrandItem() {
    return Joi.object({
      action: this.ProductListingAction(),

      discount: Joi.string().allow(""),

      banners: this.ImageUrls(),

      departments: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      logo: this.Media(),
    });
  }

  static BrandListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.BrandItem()),

      page: this.Page().required(),
    });
  }

  static Department() {
    return Joi.object({
      priority_order: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      logo: this.Media(),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(this.Department()),
    });
  }

  static DepartmentIdentifier() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      action: this.ProductListingAction(),

      banners: this.ImageUrls(),

      childs: Joi.array().items(Joi.object()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      filters: Joi.array().items(this.ProductFilters()),

      sort_on: Joi.array().items(this.ProductSortOn()),

      items: Joi.array().items(this.ProductListingDetail()),

      page: this.Page().required(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      tryouts: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.object(),

      item_code: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      rating_count: Joi.number(),

      attributes: Joi.object(),

      item_type: Joi.string().allow(""),

      teaser_tag: Joi.object(),

      similars: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      product_online_date: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        this.ProductDetailGroupedAttribute()
      ),

      brand: this.ProductBrand(),

      has_variant: Joi.boolean(),

      medias: Joi.array().items(this.Media1()),

      highlights: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      color: Joi.string().allow(""),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow("").required(),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
    });
  }

  static ContactDetails() {
    return Joi.object({
      phone: Joi.array().items(this.SellerPhoneNumber()),

      emails: Joi.array().items(Joi.string().allow("")),
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

  static GetAddressSerializer() {
    return Joi.object({
      latitude: Joi.number(),

      state: Joi.string().allow(""),

      pincode: Joi.number(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      longitude: Joi.number(),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      created_by: this.UserSerializer(),

      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      business_info: Joi.string().allow(""),

      warnings: Joi.object(),

      business_country_info: this.BusinessCountryInfo(),

      uid: Joi.number().required(),

      modified_by: this.UserSerializer(),

      verified_by: this.UserSerializer(),

      documents: Joi.array().items(this.Document()),

      contact_details: this.ContactDetails(),

      verified_on: Joi.string().allow(""),

      business_details: this.BusinessDetails(),

      stage: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      addresses: Joi.array().items(this.GetAddressSerializer()),

      modified_on: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BusinessCountryInfo1() {
    return Joi.object({
      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static ReferralInfo() {
    return Joi.object({
      referral_code: Joi.string().allow(""),
    });
  }

  static CompanyAddress() {
    return Joi.object({
      latitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      country: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static CompanyStoreSerializerRequest() {
    return Joi.object({
      document: this.Document().required(),

      warnings: Joi.object(),

      brands: Joi.array().items(Joi.number()).required(),

      business_country_info: this.BusinessCountryInfo1().required(),

      name: Joi.string().allow("").required(),

      franchise_enabled: Joi.boolean(),

      referral_info: this.ReferralInfo(),

      uid: Joi.number(),

      address: this.CompanyAddress().required(),

      business_type: Joi.string().allow("").required(),

      business_info: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),
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

      stage: Joi.string().allow(""),

      store_documents: this.DocumentsObj(),

      uid: Joi.number(),

      store: this.DocumentsObj(),

      product: this.DocumentsObj(),
    });
  }

  static BrandBannerSerializer() {
    return Joi.object({
      landscape: Joi.string().allow(""),

      portrait: Joi.string().allow(""),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      brand_tier: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      _custom_json: Joi.object(),

      description: Joi.string().allow(""),

      uid: Joi.number(),

      _locale_language: Joi.object(),

      logo: Joi.string().allow("").required(),

      banner: this.BrandBannerSerializer(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetBrandResponseSerializer() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      created_by: this.UserSerializer1(),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: this.UserSerializer1(),

      warnings: Joi.object(),

      name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      description: Joi.string().allow(""),

      _custom_json: Joi.object(),

      uid: Joi.number(),

      verified_by: this.UserSerializer1(),

      _locale_language: Joi.object(),

      logo: Joi.string().allow(""),

      banner: this.BrandBannerSerializer(),
    });
  }

  static CompanyBrandPostRequestSerializer() {
    return Joi.object({
      brands: Joi.array().items(Joi.number()).required(),

      company: Joi.number().required(),

      uid: Joi.number(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      created_by: this.UserSerializer(),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: this.UserSerializer(),

      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),

      verified_by: this.UserSerializer(),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      addresses: Joi.array().items(this.GetAddressSerializer()),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      created_by: this.UserSerializer1(),

      verified_on: Joi.string().allow(""),

      brand: this.GetBrandResponseSerializer(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: this.UserSerializer1(),

      warnings: Joi.object(),

      created_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      company: this.GetCompanySerializer(),

      uid: Joi.number(),

      verified_by: this.UserSerializer1(),
    });
  }

  static CompanyBrandListSerializer() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.CompanyBrandSerializer()),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      mobile_no: this.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),
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
      weekday: Joi.string().allow("").required(),

      closing: this.LocationTimingSerializer(),

      opening: this.LocationTimingSerializer(),

      open: Joi.boolean().required(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static GetAddressSerializer1() {
    return Joi.object({
      latitude: Joi.number(),

      state: Joi.string().allow(""),

      pincode: Joi.number(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      longitude: Joi.number(),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      enabled: Joi.boolean(),

      password: Joi.string().allow(""),
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
      manager: this.LocationManagerSerializer(),

      stage: Joi.string().allow(""),

      warnings: Joi.object(),

      timing: Joi.array().items(this.LocationDayWiseSerializer()),

      code: Joi.string().allow("").required(),

      product_return_config: this.ProductReturnConfigSerializer(),

      name: Joi.string().allow("").required(),

      _custom_json: Joi.object(),

      address: this.GetAddressSerializer1().required(),

      company: Joi.number().required(),

      gst_credentials: this.InvoiceDetailsSerializer(),

      uid: Joi.number(),

      contact_numbers: Joi.array().items(this.SellerPhoneNumber()),

      documents: Joi.array().items(this.Document()),

      display_name: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      integration_type: this.LocationIntegrationType(),

      created_by: this.UserSerializer1(),

      name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      manager: this.LocationManagerSerializer(),

      warnings: Joi.object(),

      code: Joi.string().allow("").required(),

      uid: Joi.number(),

      modified_by: this.UserSerializer1(),

      verified_by: this.UserSerializer1(),

      documents: Joi.array().items(this.Document()),

      store_type: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      phone_number: Joi.string().allow("").required(),

      product_return_config: this.ProductReturnConfigSerializer(),

      company: this.GetCompanySerializer(),

      address: this.GetAddressSerializer().required(),

      contact_numbers: Joi.array().items(this.SellerPhoneNumber()),

      gst_credentials: this.InvoiceDetailsSerializer(),

      modified_on: Joi.string().allow(""),

      timing: Joi.array().items(this.LocationDayWiseSerializer()),

      display_name: Joi.string().allow("").required(),

      _custom_json: Joi.object(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static LocationListSerializer() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.GetLocationSerializer()),
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

      method: Joi.string().allow("").required(),

      namespace: Joi.string().allow("").required(),

      operation: Joi.string().allow("").required(),

      size: Joi.number().required(),

      upload: this.Upload().required(),

      cdn: this.CDN().required(),
    });
  }

  static StartRequest() {
    return Joi.object({
      file_name: Joi.string().allow("").required(),

      content_type: Joi.string().allow("").required(),

      size: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CompleteResponse() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      file_name: Joi.string().allow("").required(),

      file_path: Joi.string().allow("").required(),

      content_type: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      namespace: Joi.string().allow("").required(),

      operation: Joi.string().allow("").required(),

      size: Joi.number().required(),

      upload: this.Upload().required(),

      cdn: this.CDN().required(),

      success: Joi.string().allow("").required(),

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

  static BulkResponse() {
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

      loyalty_points: this.LoyaltyPoints(),

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

      strategy_channel: Joi.string().allow(""),
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
      items: this.IntegrationOptIn(),

      page: this.Page(),
    });
  }

  static IntegrationOptIn() {
    return Joi.object({
      validators: this.Validators(),

      description: Joi.string().allow(""),

      description_html: Joi.string().allow(""),

      constants: Joi.string().allow(""),

      companies: Joi.array().items(Joi.object()),

      support: Joi.array().items(Joi.string().allow("")),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      meta: this.IntegrationMeta(),

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
      json_schema: this.JsonSchema(),

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

      constants: Joi.object(),

      companies: Joi.array().items(Joi.object()),

      support: Joi.array().items(Joi.string().allow("")),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      meta: this.IntegrationMeta(),

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
      items: this.IntegrationLevel(),
    });
  }

  static IntegrationLevel() {
    return Joi.object({
      opted: Joi.boolean(),

      permissions: Joi.array().items(Joi.object()),

      last_patch: Joi.array().items(Joi.object()),

      _id: Joi.string().allow(""),

      integration: Joi.string().allow(""),

      level: Joi.string().allow(""),

      uid: Joi.number(),

      meta: Joi.array().items(Joi.any()),

      token: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

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

      permissions: Joi.array().items(Joi.string().allow("")),

      last_patch: this.LastPatch(),

      _id: Joi.string().allow(""),

      integration: Joi.string().allow(""),

      level: Joi.string().allow(""),

      uid: Joi.number(),

      data: this.OtherEntityData(),

      meta: Joi.array().items(Joi.object()),

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

      params: Joi.string().allow(""),

      query: Joi.string().allow(""),
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

      type: Joi.string().allow(""),
    });
  }

  static ListingPriceFeature() {
    return Joi.object({
      value: Joi.string().allow(""),

      sort: Joi.string().allow(""),
    });
  }

  static ListingPageFeature() {
    return Joi.object({
      sort_on: Joi.string().allow(""),
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

      is_default: Joi.boolean(),

      is_shortlink: Joi.boolean(),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      from: Joi.string().allow(""),

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

      enforced_stores: Joi.array().items(Joi.number()),

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
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static Twitter() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static Pinterest() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static GooglePlus() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static Youtube() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static LinkedIn() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static Vimeo() {
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
      api_key: Joi.string().allow(""),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static PriceRange() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
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

  static UsesRemaining() {
    return Joi.object({
      user: Joi.number(),

      app: Joi.number(),

      total: Joi.number(),
    });
  }

  static UsesRestriction() {
    return Joi.object({
      remaining: this.UsesRemaining(),

      maximum: this.UsesRemaining(),
    });
  }

  static PaymentAllowValue() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  static PaymentModes() {
    return Joi.object({
      codes: Joi.array().items(Joi.string().allow("")),

      networks: Joi.array().items(Joi.string().allow("")),

      types: Joi.array().items(Joi.string().allow("")),

      uses: this.PaymentAllowValue(),
    });
  }

  static PaymentCodes() {
    return Joi.object({
      pl: this.PaymentModes(),

      card: this.PaymentModes(),

      wl: this.PaymentModes(),

      ps: this.PaymentModes(),

      qr: this.PaymentModes(),

      upi: this.PaymentModes(),

      nb: this.PaymentModes(),
    });
  }

  static Restrictions() {
    return Joi.object({
      coupon_allowed: Joi.boolean(),

      price_range: this.PriceRange(),

      ordering_stores: Joi.array().items(Joi.number()),

      post_order: this.PostOrder(),

      bulk_bundle: this.BulkBundleRestriction(),

      platforms: Joi.array().items(Joi.string().allow("")),

      uses: this.UsesRestriction(),

      payments: this.PaymentCodes(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static CouponAction() {
    return Joi.object({
      txn_mode: Joi.string().allow(""),

      action_date: Joi.string().allow(""),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow(""),

      created_by: Joi.string().allow(""),
    });
  }

  static Rule() {
    return Joi.object({
      discount_qty: Joi.number(),

      max: Joi.number(),

      min: Joi.number(),

      key: Joi.number(),

      value: Joi.number(),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      duration: Joi.number(),

      next_schedule: Joi.array().items(Joi.object()),

      end: Joi.string().allow(""),

      cron: Joi.string().allow(""),

      start: Joi.string().allow(""),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      applicable_on: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      calculate_on: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      is_exact: Joi.boolean(),

      value_type: Joi.string().allow("").required(),
    });
  }

  static Identifier() {
    return Joi.object({
      item_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static State() {
    return Joi.object({
      is_public: Joi.boolean(),

      is_display: Joi.boolean(),

      is_archived: Joi.boolean(),
    });
  }

  static Validation() {
    return Joi.object({
      app_id: Joi.array().items(Joi.string().allow("")),

      anonymous: Joi.boolean(),

      user_registered_after: Joi.string().allow(""),
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
      remove: this.DisplayMetaDict(),

      title: Joi.string().allow(""),

      apply: this.DisplayMetaDict(),

      subtitle: Joi.string().allow(""),

      auto: this.DisplayMetaDict(),

      description: Joi.string().allow(""),
    });
  }

  static CouponAdd() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      ownership: this.Ownership().required(),

      restrictions: this.Restrictions(),

      validity: this.Validity().required(),

      date_meta: this.CouponDateMeta(),

      action: this.CouponAction(),

      tags: Joi.array().items(Joi.string().allow("")),

      author: this.CouponAuthor(),

      rule: Joi.array().items(this.Rule()).required(),

      _schedule: this.CouponSchedule(),

      rule_definition: this.RuleDefinition().required(),

      identifiers: this.Identifier().required(),

      state: this.State(),

      validation: this.Validation(),

      type_slug: Joi.string().allow("").required(),

      display_meta: this.DisplayMeta().required(),
    });
  }

  static CouponsResponse() {
    return Joi.object({
      page: this.Page(),

      items: this.CouponAdd(),
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
      code: Joi.string().allow("").required(),

      ownership: this.Ownership().required(),

      restrictions: this.Restrictions(),

      validity: this.Validity().required(),

      date_meta: this.CouponDateMeta(),

      action: this.CouponAction(),

      tags: Joi.array().items(Joi.string().allow("")),

      author: this.CouponAuthor(),

      rule: Joi.array().items(this.Rule()).required(),

      _schedule: this.CouponSchedule(),

      rule_definition: this.RuleDefinition().required(),

      identifiers: this.Identifier().required(),

      state: this.State(),

      validation: this.Validation(),

      type_slug: Joi.string().allow("").required(),

      display_meta: this.DisplayMeta().required(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: this.CouponSchedule(),
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
      priority: Joi.string().allow(""),
      category: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static createTicket() {
    return Joi.object({
      body: Validator.AddTicketPayload().required(),
    }).required();
  }

  static getTicket() {
    return Joi.object({
      ticketId: Joi.string().allow("").required(),
    }).required();
  }

  static editTicket() {
    return Joi.object({
      ticketId: Joi.string().allow("").required(),
      body: Validator.EditTicketPayload().required(),
    }).required();
  }

  static createHistory() {
    return Joi.object({
      ticketId: Joi.string().allow("").required(),
      body: Validator.TicketHistoryPayload().required(),
    }).required();
  }

  static getTicketHistory() {
    return Joi.object({
      ticketId: Joi.string().allow("").required(),
    }).required();
  }
}

class PaymentValidator {
  static getAllPayouts() {
    return Joi.object({
      uniqueExternalId: Joi.string().allow(""),
    }).required();
  }

  static savePayout() {
    return Joi.object({
      body: Validator.PayoutRequest().required(),
    }).required();
  }

  static updatePayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
      body: Validator.PayoutRequest().required(),
    }).required();
  }

  static activateAndDectivatePayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
      body: Validator.UpdatePayoutRequest().required(),
    }).required();
  }

  static deletePayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
    }).required();
  }

  static getSubscriptionPaymentMethod() {
    return Joi.object({}).required();
  }

  static deleteSubscriptionPaymentMethod() {
    return Joi.object({
      uniqueExternalId: Joi.string().allow("").required(),
      paymentMethodId: Joi.string().allow("").required(),
    }).required();
  }

  static getSubscriptionConfig() {
    return Joi.object({}).required();
  }

  static saveSubscriptionSetupIntent() {
    return Joi.object({
      body: Validator.SaveSubscriptionSetupIntentRequest().required(),
    }).required();
  }
}

class OrderValidator {
  static shipmentStatusUpdate() {
    return Joi.object({
      body: Validator.UpdateShipmentStatusBody().required(),
    }).required();
  }

  static activityStatus() {
    return Joi.object({
      bagId: Joi.string().allow("").required(),
    }).required();
  }

  static storeProcessShipmentUpdate() {
    return Joi.object({
      body: Validator.UpdateProcessShipmenstRequestBody().required(),
    }).required();
  }

  static getOrdersByCompanyId() {
    return Joi.object({
      pageNo: Joi.string().allow(""),
      pageSize: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      q: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      salesChannels: Joi.string().allow(""),
      orderId: Joi.string().allow(""),
      stores: Joi.string().allow(""),
      status: Joi.string().allow(""),
      shortenUrls: Joi.boolean(),
      filterType: Joi.string().allow(""),
    }).required();
  }

  static getPing() {
    return Joi.object({}).required();
  }

  static voiceCallback() {
    return Joi.object({}).required();
  }

  static voiceClickToCall() {
    return Joi.object({
      caller: Joi.string().allow("").required(),
      receiver: Joi.string().allow("").required(),
    }).required();
  }
}

class CatalogValidator {
  static getProductBundle() {
    return Joi.object({
      q: Joi.string().allow(""),
    }).required();
  }

  static createProductBundle() {
    return Joi.object({
      body: Validator.ProductBundleRequest().required(),
    }).required();
  }

  static getProductBundleDetail() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateProductBundle() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.ProductBundleUpdateRequest().required(),
    }).required();
  }

  static getSizeGuides() {
    return Joi.object({
      active: Joi.boolean(),
      q: Joi.string().allow(""),
      tag: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static createSizeGuide() {
    return Joi.object({
      body: Validator.ValidateSizeGuide().required(),
    }).required();
  }

  static getSizeGuide() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateSizeGuide() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.ValidateSizeGuide().required(),
    }).required();
  }

  static getSellerInsights() {
    return Joi.object({
      sellerAppId: Joi.string().allow("").required(),
    }).required();
  }

  static createMarketplaceOptin() {
    return Joi.object({
      marketplace: Joi.string().allow("").required(),
      body: Validator.OptInPostRequest().required(),
    }).required();
  }

  static getMarketplaceOptinDetail() {
    return Joi.object({}).required();
  }

  static getCompanyDetail() {
    return Joi.object({}).required();
  }

  static getCompanyBrandDetail() {
    return Joi.object({
      isActive: Joi.boolean(),
      q: Joi.boolean(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      marketplace: Joi.string().allow(""),
    }).required();
  }

  static getCompanyMetrics() {
    return Joi.object({}).required();
  }

  static getStoreDetail() {
    return Joi.object({
      q: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getGenderAttribute() {
    return Joi.object({
      attributeSlug: Joi.string().allow("").required(),
    }).required();
  }

  static listProductTemplateCategories() {
    return Joi.object({
      departments: Joi.string().allow("").required(),
      itemType: Joi.string().allow("").required(),
    }).required();
  }

  static listDepartmentsData() {
    return Joi.object({}).required();
  }

  static getDepartmentData() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
    }).required();
  }

  static listProductTemplate() {
    return Joi.object({
      departments: Joi.string().allow("").required(),
    }).required();
  }

  static validateProductTemplate() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static downloadProductTemplateViews() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static downloadProductTemplateView() {
    return Joi.object({
      itemType: Joi.string().allow("").required(),
    }).required();
  }

  static validateProductTemplateSchema() {
    return Joi.object({
      itemType: Joi.string().allow("").required(),
    }).required();
  }

  static listHSNCodes() {
    return Joi.object({}).required();
  }

  static listProductTemplateExportDetails() {
    return Joi.object({}).required();
  }

  static listTemplateBrandTypeValues() {
    return Joi.object({
      filter: Joi.string().allow("").required(),
    }).required();
  }

  static listCategories() {
    return Joi.object({
      level: Joi.string().allow(""),
      q: Joi.string().allow(""),
    }).required();
  }

  static createCategories() {
    return Joi.object({
      body: Validator.CategoryRequestBody().required(),
    }).required();
  }

  static getCategoryData() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
    }).required();
  }

  static updateCategory() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
      body: Validator.CategoryRequestBody().required(),
    }).required();
  }

  static getProducts() {
    return Joi.object({
      brandIds: Joi.number(),
      categoryIds: Joi.number(),
      search: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static createProduct() {
    return Joi.object({
      body: Validator.ProductCreateUpdate().required(),
    }).required();
  }

  static getProduct() {
    return Joi.object({
      itemCode: Joi.string().allow(""),
      itemId: Joi.number().required(),
      brandUid: Joi.number(),
      uid: Joi.number(),
    }).required();
  }

  static deleteProduct() {
    return Joi.object({
      itemId: Joi.number().required(),
    }).required();
  }

  static editProduct() {
    return Joi.object({
      itemId: Joi.number().required(),
      body: Validator.ProductCreateUpdate().required(),
    }).required();
  }

  static getProductValidation() {
    return Joi.object({}).required();
  }

  static getProductSize() {
    return Joi.object({
      itemCode: Joi.string().allow(""),
      itemId: Joi.number().required(),
      brandUid: Joi.number(),
      uid: Joi.number(),
    }).required();
  }

  static getProductBulkUploadHistory() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static updateProductAssetsInBulk() {
    return Joi.object({
      body: Validator.BulkJob().required(),
    }).required();
  }

  static deleteProductBulkJob() {
    return Joi.object({
      batchId: Joi.number().required(),
    }).required();
  }

  static createProductsInBulk() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
      body: Validator.BulkProductRequest().required(),
    }).required();
  }

  static getCompanyTags() {
    return Joi.object({}).required();
  }

  static getProductAssetsInBulk() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static createProductAssetsInBulk() {
    return Joi.object({
      body: Validator.ProductBulkAssets().required(),
    }).required();
  }

  static deleteSize() {
    return Joi.object({
      itemId: Joi.number().required(),
      size: Joi.number().required(),
    }).required();
  }

  static getInventory() {
    return Joi.object({
      itemId: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static addInventory() {
    return Joi.object({
      itemId: Joi.number().required(),
      size: Joi.string().allow("").required(),
      body: Validator.InventoryRequest1().required(),
    }).required();
  }

  static deleteInventory() {
    return Joi.object({
      itemId: Joi.number().required(),
      locationId: Joi.number().required(),
    }).required();
  }

  static getInventoryBulkUploadHistory() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static createBulkInventoryJob() {
    return Joi.object({
      body: Validator.BulkJob().required(),
    }).required();
  }

  static deleteBulkInventoryJob() {
    return Joi.object({}).required();
  }

  static createBulkInventory() {
    return Joi.object({
      body: Validator.InventoryBulkRequest().required(),
    }).required();
  }

  static getInventoryExport() {
    return Joi.object({}).required();
  }

  static createInventoryExportJob() {
    return Joi.object({
      body: Validator.InventoryExportRequest().required(),
    }).required();
  }

  static exportInventoryConfig() {
    return Joi.object({
      filterType: Joi.string().allow(""),
    }).required();
  }

  static getAllHsnCodes() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  static createHsnCode() {
    return Joi.object({
      body: Validator.HsnUpsert().required(),
    }).required();
  }

  static getHsnCode() {
    return Joi.object({
      uid: Joi.number().required(),
    }).required();
  }

  static updateHsnCode() {
    return Joi.object({
      uid: Joi.number().required(),
      body: Validator.HsnUpsert().required(),
    }).required();
  }

  static bulkHsnCode() {
    return Joi.object({
      body: Validator.BulkHsnUpsert().required(),
    }).required();
  }
}

class CompanyProfileValidator {
  static cbsOnboardGet() {
    return Joi.object({}).required();
  }

  static updateCompany() {
    return Joi.object({
      body: Validator.CompanyStoreSerializerRequest().required(),
    }).required();
  }

  static getCompanyMetrics() {
    return Joi.object({}).required();
  }

  static editBrand() {
    return Joi.object({
      brandId: Joi.string().allow("").required(),
      body: Validator.CreateUpdateBrandRequestSerializer().required(),
    }).required();
  }

  static getBrand() {
    return Joi.object({
      brandId: Joi.string().allow("").required(),
    }).required();
  }

  static createBrand() {
    return Joi.object({
      body: Validator.CreateUpdateBrandRequestSerializer().required(),
    }).required();
  }

  static createCompanyBrandMapping() {
    return Joi.object({
      body: Validator.CompanyBrandPostRequestSerializer().required(),
    }).required();
  }

  static getBrands() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static createLocation() {
    return Joi.object({
      body: Validator.LocationSerializer().required(),
    }).required();
  }

  static getLocations() {
    return Joi.object({
      storeType: Joi.string().allow(""),
      q: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static updateLocation() {
    return Joi.object({
      locationId: Joi.string().allow("").required(),
      body: Validator.LocationSerializer().required(),
    }).required();
  }

  static getLocationDetail() {
    return Joi.object({
      locationId: Joi.string().allow("").required(),
    }).required();
  }
}

class FileStorageValidator {
  static startUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      body: Validator.StartRequest().required(),
    }).required();
  }

  static completeUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      body: Validator.StartResponse().required(),
    }).required();
  }

  static getSignUrls() {
    return Joi.object({
      body: Validator.SignUrlRequest().required(),
    }).required();
  }

  static copyFiles() {
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

  static proxy() {
    return Joi.object({
      url: Joi.string().allow("").required(),
    }).required();
  }
}

class ConfigurationValidator {
  static createApplication() {
    return Joi.object({
      body: Validator.CreateApplicationRequest().required(),
    }).required();
  }

  static getApplications() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  static getCurrencies() {
    return Joi.object({}).required();
  }

  static getDomainAvailibility() {
    return Joi.object({
      body: Validator.DomainSuggestionsRequest().required(),
    }).required();
  }

  static getIntegrationById() {
    return Joi.object({
      id: Joi.number().required(),
    }).required();
  }

  static getAvailableOptIns() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getSelectedOptIns() {
    return Joi.object({
      level: Joi.string().allow("").required(),
      uid: Joi.number().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getIntegrationLevelConfig() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      level: Joi.string().allow("").required(),
    }).required();
  }

  static getIntegrationByLevelId() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      level: Joi.string().allow("").required(),
      uid: Joi.number().required(),
    }).required();
  }

  static getLevelActiveIntegrations() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      level: Joi.string().allow("").required(),
      uid: Joi.number().required(),
    }).required();
  }

  static getBrandsByCompany() {
    return Joi.object({
      q: Joi.string().allow(""),
    }).required();
  }

  static getCompanyByBrands() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      body: Validator.CompanyByBrandsRequest().required(),
    }).required();
  }

  static getStoreByBrands() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      body: Validator.StoreByBrandsRequest().required(),
    }).required();
  }

  static getOtherSellerApplications() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getOtherSellerApplicationById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static optOutFromApplication() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.OptOutInventory().required(),
    }).required();
  }
}

module.exports = {
  LeadValidator,
  PaymentValidator,
  OrderValidator,
  CatalogValidator,
  CompanyProfileValidator,
  FileStorageValidator,
  ConfigurationValidator,
};
