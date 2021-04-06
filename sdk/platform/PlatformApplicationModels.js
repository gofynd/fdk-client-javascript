const Joi = require("joi");
class Validator {
  static TicketList() {
    return Joi.object({
      items: Joi.array().items(this.Ticket()),

      filters: this.Filter(),

      page: this.Page(),
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
      slug: Joi.string(),

      title: Joi.string(),

      inputs: Joi.array().items(Joi.object()),

      description: Joi.string(),

      headerImage: Joi.string(),

      shouldNotify: Joi.boolean(),

      successMessage: Joi.string(),

      pollForAssignment: this.PollForAssignment(),
    });
  }

  static EditCustomFormPayload() {
    return Joi.object({
      title: Joi.string(),

      inputs: Joi.array().items(Joi.object()),

      description: Joi.string(),

      headerImage: Joi.string(),

      shouldNotify: Joi.boolean(),

      loginRequired: Joi.boolean(),

      successMessage: Joi.string(),

      pollForAssignment: this.PollForAssignment(),
    });
  }

  static EditTicketPayload() {
    return Joi.object({
      content: this.TicketContent(),

      category: Joi.string(),

      source: Joi.string(),

      status: Joi.string(),

      priority: Joi.string(),

      assignedTo: this.AgentChangePayload(),

      tags: Joi.array().items(Joi.string()),
    });
  }

  static AgentChangePayload() {
    return Joi.object({
      agentId: Joi.string(),
    });
  }

  static CreateVideoRoomResponse() {
    return Joi.object({
      uniqueName: Joi.string(),
    });
  }

  static CloseVideoRoomResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static CreateVideoRoomPayload() {
    return Joi.object({
      uniqueName: Joi.string(),

      notify: Joi.array().items(Joi.object()),
    });
  }

  static Filter() {
    return Joi.object({
      priorities: Joi.array().items(this.Priority()),

      categories: Joi.array().items(this.TicketCategory()),

      statuses: Joi.array().items(this.Status()),

      assignees: Joi.array().items(Joi.object()),
    });
  }

  static TicketHistoryPayload() {
    return Joi.object({
      value: Joi.object(),

      type: Joi.string(),
    });
  }

  static CustomFormSubmissionPayload() {
    return Joi.object({
      response: Joi.array().items(this.KeyValue()),
    });
  }

  static KeyValue() {
    return Joi.object({
      key: Joi.string(),

      value: Joi.string(),
    });
  }

  static GetTokenForVideoRoomResponse() {
    return Joi.object({
      accessToken: Joi.string(),
    });
  }

  static GetParticipantsInsideVideoRoomResponse() {
    return Joi.object({
      participants: Joi.array().items(this.Participant()),
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
      firstName: Joi.string(),

      lastName: Joi.string(),

      phoneNumbers: Joi.array().items(this.PhoneNumber()),

      emails: Joi.array().items(this.Email()),

      gender: Joi.string(),

      active: Joi.boolean(),

      profilePicUrl: Joi.string(),

      username: Joi.string(),

      accountType: Joi.string(),

      uid: Joi.string(),

      debug: this.Debug(),

      hasOldPasswordHash: Joi.boolean(),

      id: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),
    });
  }

  static PhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      phone: Joi.string(),

      countryCode: Joi.number(),
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
      ticket: this.Ticket(),
    });
  }

  static TicketContext() {
    return Joi.object({
      applicationId: Joi.string(),

      companyId: Joi.string(),
    });
  }

  static CreatedOn() {
    return Joi.object({
      userAgent: Joi.string(),
    });
  }

  static TicketAsset() {
    return Joi.object({
      display: Joi.string(),

      value: Joi.string(),

      type: Joi.string(),
    });
  }

  static TicketContent() {
    return Joi.object({
      title: Joi.string(),

      description: Joi.string(),

      attachments: Joi.array().items(this.TicketAsset()),
    });
  }

  static AddTicketPayload() {
    return Joi.object({
      status: Joi.string(),

      priority: Joi.string(),

      category: Joi.string(),

      content: this.TicketContent(),
    });
  }

  static Priority() {
    return Joi.object({
      key: Joi.string(),

      display: Joi.string(),

      color: Joi.string(),
    });
  }

  static Status() {
    return Joi.object({
      key: Joi.string(),

      display: Joi.string(),

      color: Joi.string(),
    });
  }

  static TicketCategory() {
    return Joi.object({
      key: Joi.string(),

      display: Joi.string(),

      form: this.CustomForm(),
    });
  }

  static SubmitButton() {
    return Joi.object({
      title: Joi.string(),

      titleColor: Joi.string(),

      backgroundColor: Joi.string(),
    });
  }

  static PollForAssignment() {
    return Joi.object({
      duration: Joi.number(),

      message: Joi.string(),

      successMessage: Joi.string(),

      failureMessage: Joi.string(),
    });
  }

  static CustomForm() {
    return Joi.object({
      applicationId: Joi.string(),

      slug: Joi.string(),

      headerImage: Joi.string(),

      title: Joi.string(),

      description: Joi.string(),

      loginRequired: Joi.boolean(),

      shouldNotify: Joi.boolean(),

      successMessage: Joi.string(),

      submitButton: this.SubmitButton(),

      inputs: Joi.array().items(Joi.object()),

      createdOn: this.CreatedOn(),

      createdBy: Joi.object(),

      pollForAssignment: this.PollForAssignment(),

      id: Joi.string(),
    });
  }

  static TicketHistory() {
    return Joi.object({
      type: Joi.string(),

      value: Joi.object(),

      ticketId: Joi.string(),

      createdOn: this.CreatedOn(),

      createdBy: Joi.object(),

      id: Joi.string(),

      updatedAt: Joi.string(),

      createdAt: Joi.string(),
    });
  }

  static Ticket() {
    return Joi.object({
      context: this.TicketContext(),

      createdOn: this.CreatedOn(),

      responseId: Joi.string(),

      content: this.TicketContent(),

      ticketId: Joi.string(),

      category: this.TicketCategory(),

      source: Joi.string(),

      status: this.Status(),

      priority: this.Priority(),

      createdBy: Joi.object(),

      assignedTo: Joi.object(),

      tags: Joi.array().items(Joi.string()),

      customJson: Joi.object(),

      id: Joi.string(),

      updatedAt: Joi.string(),

      createdAt: Joi.string(),
    });
  }

  static PaginationSchema() {
    return Joi.object({
      size: Joi.number(),

      itemTotal: Joi.number(),

      hasNext: Joi.boolean(),

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
      themeId: Joi.string(),
    });
  }

  static UpgradableThemeSchema() {
    return Joi.object({
      parentTheme: Joi.string(),

      appliedTheme: Joi.string(),

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

      lastModified: Joi.string(),

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

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      version: Joi.string(),

      parentThemeVersion: Joi.string(),

      parentTheme: Joi.string(),

      information: this.Information(),

      tags: Joi.array().items(Joi.string()),

      src: this.Src(),

      assets: this.AssetsSchema(),

      availablePages: this.AvailablePages(),

      availableSections: Joi.array().items(this.availableSectionSchema()),

      sections: Joi.array().items(this.sectionSchema()),

      constants: Joi.object(),

      styles: Joi.object(),

      config: this.Config(),

      settings: Joi.object(),

      font: this.Font(),

      id: Joi.string(),

      v: Joi.number(),

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
      pageKey: Joi.string(),

      pageSections: this.PageSections(),
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
      umdJs: this.UmdJs(),

      commonJs: this.CommonJs(),

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

      globalSchema: this.GlobalSchema(),

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
      bgColor: Joi.string(),

      primaryColor: Joi.string(),

      secondaryColor: Joi.string(),

      accentColor: Joi.string(),

      linkColor: Joi.string(),

      buttonSecondaryColor: Joi.string(),
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

      semiBold: this.SemiBold(),

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

      exactUrl: Joi.string(),

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

      countryCode: Joi.string(),

      phone: Joi.string(),

      primary: Joi.boolean(),
    });
  }

  static EditMobileRequestSchema() {
    return Joi.object({
      countryCode: Joi.string(),

      phone: Joi.string(),
    });
  }

  static EditProfileRequestSchema() {
    return Joi.object({
      firstName: Joi.string(),

      lastName: Joi.string(),

      mobile: Joi.string(),

      email: Joi.string(),

      gender: Joi.string(),

      dob: Joi.string(),

      profilePicUrl: Joi.string(),

      androidHash: Joi.string(),

      sender: Joi.string(),

      registerToken: Joi.string(),
    });
  }

  static SendEmailOtpRequestSchema() {
    return Joi.object({
      email: Joi.string(),

      action: Joi.string(),

      token: Joi.string(),

      registerToken: Joi.string(),
    });
  }

  static VerifyOtpRequestSchema() {
    return Joi.object({
      requestId: Joi.string(),

      registerToken: Joi.string(),

      otp: Joi.string(),
    });
  }

  static SendMobileOtpRequestSchema() {
    return Joi.object({
      mobile: Joi.string(),

      countryCode: Joi.string(),

      action: Joi.string(),

      token: Joi.string(),

      androidHash: Joi.string(),

      force: Joi.string(),
    });
  }

  static UpdatePasswordRequestSchema() {
    return Joi.object({
      oldPassword: Joi.string(),

      newPassword: Joi.string(),
    });
  }

  static FormRegisterRequestSchema() {
    return Joi.object({
      firstName: Joi.string(),

      lastName: Joi.string(),

      gender: Joi.string(),

      email: Joi.string(),

      password: Joi.string(),

      phone: this.FormRegisterRequestSchemaPhone(),

      registerToken: Joi.string(),
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

      captchaCode: Joi.string(),
    });
  }

  static PasswordLoginRequestSchema() {
    return Joi.object({
      captchaCode: Joi.string(),

      password: Joi.string(),

      username: Joi.string(),
    });
  }

  static SendOtpRequestSchema() {
    return Joi.object({
      countryCode: Joi.string(),

      captchaCode: Joi.string(),

      mobile: Joi.string(),
    });
  }

  static OAuthRequestSchema() {
    return Joi.object({
      isSignedIn: Joi.boolean(),

      oauth2: this.OAuthRequestSchemaOauth2(),

      profile: this.OAuthRequestSchemaProfile(),
    });
  }

  static AuthSuccess() {
    return Joi.object({
      registerToken: Joi.string(),

      userExists: Joi.boolean(),

      user: this.AuthSuccessUser(),
    });
  }

  static SendOtpResponse() {
    return Joi.object({
      resendTimer: Joi.number(),

      resendToken: Joi.string(),

      success: Joi.boolean(),

      requestId: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      countryCode: Joi.string(),
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

      userExists: Joi.boolean(),
    });
  }

  static ResetPasswordSuccess() {
    return Joi.object({
      status: Joi.string(),
    });
  }

  static RegisterFormSuccess() {
    return Joi.object({
      resendTimer: Joi.number(),

      resendToken: Joi.string(),

      success: Joi.boolean(),

      requestId: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      countryCode: Joi.string(),
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
      resendTimer: Joi.number(),

      resendToken: Joi.string(),

      success: Joi.boolean(),

      requestId: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      countryCode: Joi.string(),
    });
  }

  static EmailOtpSuccess() {
    return Joi.object({
      resendToken: Joi.string(),
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

      verifyMobileLink: Joi.boolean(),
    });
  }

  static VerifyEmailOTPSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      verifyEmailLink: Joi.boolean(),
    });
  }

  static SendMobileVerifyLinkSuccess() {
    return Joi.object({
      verifyMobileLink: Joi.boolean(),
    });
  }

  static SendEmailVerifyLinkSuccess() {
    return Joi.object({
      verifyEmailLink: Joi.boolean(),
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

      verifyEmailOtp: Joi.boolean(),

      verifyEmailLink: Joi.boolean(),

      verifyMobileOtp: Joi.boolean(),

      user: Joi.string(),

      registerToken: Joi.string(),

      userExists: Joi.boolean(),
    });
  }

  static FormRegisterRequestSchemaPhone() {
    return Joi.object({
      countryCode: Joi.string(),

      mobile: Joi.string(),
    });
  }

  static OAuthRequestSchemaOauth2() {
    return Joi.object({
      accessToken: Joi.string(),

      expiry: Joi.number(),

      refreshToken: Joi.string(),
    });
  }

  static OAuthRequestSchemaProfile() {
    return Joi.object({
      lastName: Joi.string(),

      image: Joi.string(),

      id: Joi.string(),

      email: Joi.string(),

      fullName: Joi.string(),

      firstName: Joi.string(),
    });
  }

  static AuthSuccessUser() {
    return Joi.object({
      firstName: Joi.string(),

      lastName: Joi.string(),

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

      lookAndFeel: this.LookAndFeel(),

      updatedAt: Joi.string(),

      active: Joi.boolean(),

      forgotPassword: Joi.boolean(),

      login: this.Login(),

      skipCaptcha: Joi.boolean(),

      name: Joi.string(),

      meta: this.MetaSchema(),

      id: Joi.string(),

      social: this.Social(),

      requiredFields: this.RequiredFields(),

      registerRequiredFields: this.RegisterRequiredFields(),

      skipLogin: Joi.boolean(),

      flashCard: this.FlashCard(),

      subtext: Joi.string(),

      socialTokens: this.SocialTokens(),

      createdAt: Joi.string(),

      register: Joi.boolean(),
    });
  }

  static LookAndFeel() {
    return Joi.object({
      cardPosition: Joi.string(),

      backgroundColor: Joi.string(),
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
      fyndDefault: Joi.boolean(),
    });
  }

  static Social() {
    return Joi.object({
      accountKit: Joi.boolean(),

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
      isRequired: Joi.boolean(),

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
      isRequired: Joi.boolean(),

      level: Joi.string(),
    });
  }

  static RegisterRequiredFieldsMobile() {
    return Joi.object({
      isRequired: Joi.boolean(),

      level: Joi.string(),
    });
  }

  static FlashCard() {
    return Joi.object({
      text: Joi.string(),

      textColor: Joi.string(),

      backgroundColor: Joi.string(),
    });
  }

  static SocialTokens() {
    return Joi.object({
      facebook: this.Facebook(),

      accountKit: this.Accountkit(),

      google: this.Google(),
    });
  }

  static Facebook() {
    return Joi.object({
      appId: Joi.string(),
    });
  }

  static Accountkit() {
    return Joi.object({
      appId: Joi.string(),
    });
  }

  static Google() {
    return Joi.object({
      appId: Joi.string(),
    });
  }

  static ApplicationLegal() {
    return Joi.object({
      application: Joi.string(),

      tnc: Joi.string(),

      policy: Joi.string(),

      shipping: Joi.string(),

      faq: Joi.array().items(this.ApplicationLegalFAQ()),

      id: Joi.string(),

      updatedAt: Joi.string(),

      createdAt: Joi.string(),
    });
  }

  static ApplicationLegalFAQ() {
    return Joi.object({
      question: Joi.string(),

      answer: Joi.string(),
    });
  }

  static SeoSchema() {
    return Joi.object({
      app: Joi.string(),

      id: Joi.string(),

      robotsTxt: Joi.string(),

      sitemapEnabled: Joi.boolean(),

      customMetaTags: Joi.array().items(Joi.object()),

      details: Joi.object(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),
    });
  }

  static CustomMetaTag() {
    return Joi.object({
      name: Joi.string(),

      content: Joi.string(),

      id: Joi.string(),
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

      refreshRate: Joi.number(),

      refreshPages: Joi.array().items(Joi.string()),
    });
  }

  static AnnouncementPageSchema() {
    return Joi.object({
      pageSlug: Joi.string(),

      type: Joi.string(),
    });
  }

  static EditorMeta() {
    return Joi.object({
      foregroundColor: Joi.string(),

      backgroundColor: Joi.string(),

      contentType: Joi.string(),

      content: Joi.string(),
    });
  }

  static AnnouncementAuthorSchema() {
    return Joi.object({
      createdBy: Joi.string(),

      modifiedBy: Joi.string(),
    });
  }

  static AdminAnnouncementSchema() {
    return Joi.object({
      id: Joi.string(),

      platforms: Joi.array().items(Joi.string()),

      title: Joi.string(),

      announcement: Joi.string(),

      pages: Joi.array().items(this.AnnouncementPageSchema()),

      editorMeta: this.EditorMeta(),

      author: this.AnnouncementAuthorSchema(),

      createdAt: Joi.string(),

      app: Joi.string(),

      modifiedAt: Joi.string(),

      schedule: this.ScheduleSchema(),
    });
  }

  static ScheduleSchema() {
    return Joi.object({
      cron: Joi.string(),

      start: Joi.string(),

      end: Joi.string(),

      duration: Joi.number(),

      nextSchedule: Joi.array().items(Joi.object()),
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
      pageSlug: Joi.array().items(Joi.object()),
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

      page: Joi.object(),
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
      secureUrl: Joi.string(),
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
      id: Joi.string(),

      customJson: Joi.object(),

      application: Joi.string(),

      archived: Joi.boolean(),

      author: Joi.object(),

      content: Joi.array().items(this.ResourceContent()),

      featureImage: Joi.object(),

      published: Joi.boolean(),

      readingTime: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      seo: this.SEO(),

      schedule: this.CronSchedule(),

      title: Joi.string(),

      dateMeta: this.DateMeta(),
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
      createdOn: Joi.string(),

      modifiedOn: Joi.string(),
    });
  }

  static BlogRequest() {
    return Joi.object({
      application: Joi.string(),

      customJson: Joi.object(),

      author: Joi.object(),

      content: Joi.array().items(this.ResourceContent()),

      featureImage: Joi.object(),

      published: Joi.boolean(),

      readingTime: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      title: Joi.string(),

      seo: this.SEO(),

      schedule: this.CronSchedule(),
    });
  }

  static GetAnnouncementListSchema() {
    return Joi.object({
      items: Joi.array().items(this.AdminAnnouncementSchema()),

      page: this.Pagination(),
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

      createdBy: this.CreatedBy(),

      dateMeta: this.DateMeta(),

      id: Joi.string(),

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

      enUs: this.Language(),
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

      localeLanguage: this.LocaleLanguage(),

      image: Joi.string(),

      type: Joi.string(),

      action: this.Action(),

      active: Joi.boolean(),

      display: Joi.string(),

      sortOrder: Joi.number(),

      subNavigation: this.NavigationReference(),
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
      sleepTime: Joi.number(),

      startOnLaunch: Joi.boolean(),

      duration: Joi.number(),

      slideDirection: Joi.string(),
    });
  }

  static Media() {
    return Joi.object({
      type: Joi.string(),

      url: Joi.string(),

      bgColor: Joi.string(),

      duration: Joi.number(),

      autoDecideDuration: Joi.boolean(),

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

      refreshRate: Joi.number(),

      refreshPages: Joi.array().items(Joi.string()),
    });
  }

  static AnnouncementDataSchema() {
    return Joi.object({
      pageSlug: Joi.string(),

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

      subType: Joi.string(),

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

      subType: Joi.string(),

      id: Joi.string(),

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

      requestId: Joi.string(),

      stackTrace: Joi.string(),

      meta: Joi.object(),
    });
  }

  static CategorySchema() {
    return Joi.object({
      index: Joi.number(),

      id: Joi.string(),

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

      id: Joi.string(),
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

      id: Joi.string(),

      slug: Joi.string(),

      application: Joi.string(),

      iconUrl: Joi.string(),

      customJson: Joi.object(),
    });
  }

  static FaqSchema() {
    return Joi.object({
      slug: Joi.string(),

      application: Joi.string(),

      id: Joi.string(),

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

  static Pagination() {
    return Joi.object({
      type: Joi.string(),

      current: Joi.number(),

      size: Joi.number(),

      itemTotal: Joi.number(),

      hasNext: Joi.boolean(),
    });
  }

  static LandingPageGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Pagination(),
    });
  }

  static LandingPageSchema() {
    return Joi.object({
      slug: Joi.string(),

      action: this.Action(),

      platform: Joi.array().items(Joi.string()),

      createdBy: this.CreatedBy(),

      dateMeta: this.DateMeta(),

      id: Joi.string(),

      application: Joi.string(),

      archived: Joi.boolean(),

      customJson: Joi.object(),
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

      page: this.Pagination(),
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
      id: Joi.string(),

      application: Joi.string(),

      archived: Joi.boolean(),

      name: Joi.string(),

      slug: Joi.string(),

      platform: Joi.array().items(Joi.string()),

      createdBy: this.CreatedBy(),

      dateMeta: this.DateMeta(),

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
      id: Joi.string(),

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

      createdBy: this.CreatedBy(),

      dateMeta: this.DateMeta(),

      schedule: this.ScheduleSchema(),
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
      id: Joi.string(),

      title: Joi.string(),

      slug: Joi.string(),

      readingTime: Joi.string(),

      application: Joi.string(),

      description: Joi.string(),

      featureImage: this.FeatureImage(),

      published: Joi.boolean(),

      archived: Joi.boolean(),

      tags: Joi.array().items(Joi.string()),

      content: this.ContentSchema(),

      author: this.Author(),

      schedule: this.ScheduleSchema(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      customJson: Joi.object(),
    });
  }

  static FeatureImage() {
    return Joi.object({
      secureUrl: Joi.string(),
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

      page: Joi.object(),
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
      pageType: Joi.string(),

      displayName: Joi.string(),

      params: Joi.array().items(this.PageSpecParam()),

      query: Joi.array().items(this.PageSpecParam()),
    });
  }

  static PageSchema() {
    return Joi.object({
      id: Joi.string(),

      application: Joi.string(),

      componentIds: Joi.array().items(Joi.string()),

      content: Joi.array().items(this.PageContent()),

      createdBy: Joi.object(),

      dateMeta: Joi.object(),

      description: Joi.string(),

      featureImage: Joi.object(),

      pageMeta: Joi.array().items(this.PageMeta()),

      schedule: this.ScheduleSchema(),

      customJson: Joi.object(),

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
      schedule: this.CronSchedule(),

      application: Joi.string(),

      author: Joi.object(),

      customJson: Joi.object(),

      orientation: Joi.string(),

      content: Joi.array().items(this.ResourceContent()),

      featureImage: Joi.object(),

      published: Joi.boolean(),

      readingTime: Joi.string(),

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
      systemPages: Joi.array().items(Joi.object()),

      customPages: Joi.array().items(Joi.object()),

      applicationId: Joi.string(),
    });
  }

  static SlideshowGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Pagination(),
    });
  }

  static SlideshowSchema() {
    return Joi.object({
      id: Joi.string(),

      slug: Joi.string(),

      dateMeta: this.DateMeta(),

      application: Joi.string(),

      platform: Joi.string(),

      configuration: this.ConfigurationSchema(),

      media: Joi.array().items(this.Media()),

      active: Joi.boolean(),

      archived: Joi.boolean(),

      customJson: Joi.object(),
    });
  }

  static SlideshowRequest() {
    return Joi.object({
      slug: Joi.string(),

      platform: Joi.string(),

      configuration: this.ConfigurationSchema(),

      media: this.Media(),

      active: Joi.boolean(),
    });
  }

  static Support() {
    return Joi.object({
      created: Joi.boolean(),

      id: Joi.string(),

      configType: Joi.string(),

      application: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      contact: this.ContactSchema(),
    });
  }

  static Phone() {
    return Joi.object({
      key: Joi.string(),

      code: Joi.string(),

      number: Joi.string(),
    });
  }

  static PhoneSchema() {
    return Joi.object({
      active: Joi.boolean(),

      phone: Joi.array().items(this.Phone()),
    });
  }

  static EmailSchema() {
    return Joi.object({
      active: Joi.boolean(),

      email: Joi.array().items(this.Email()),
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

      id: Joi.string(),

      tags: Joi.array().items(this.TagSchema()),
    });
  }

  static TagSchema() {
    return Joi.object({
      name: Joi.string(),

      url: Joi.string(),

      type: Joi.string(),

      subType: Joi.string(),

      id: Joi.string(),

      position: Joi.string(),

      attributes: Joi.object(),

      content: Joi.string(),
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
      id: Joi.string(),

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

      isActive: Joi.boolean(),

      name: Joi.string(),

      fileUrl: Joi.string(),

      type: Joi.string(),

      recordsCount: Joi.number(),

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
      id: Joi.string(),

      fromName: Joi.string(),

      fromEmail: Joi.string(),
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
      recipientHeaders: this.RecipientHeaders(),

      email: this.CampaignEmail(),

      description: Joi.string(),

      tags: Joi.array().items(Joi.any()),

      isActive: Joi.boolean(),

      id: Joi.string(),

      datasource: Joi.string(),

      type: Joi.string(),

      name: Joi.string(),

      application: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      slug: Joi.string(),

      v: Joi.number(),
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
      phoneNumber: Joi.string(),

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

      isActive: Joi.boolean(),

      name: Joi.string(),

      fileUrl: Joi.string(),

      type: Joi.string(),

      recordsCount: Joi.number(),

      application: Joi.string(),
    });
  }

  static Audience() {
    return Joi.object({
      description: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      headers: Joi.array().items(Joi.string()),

      isActive: Joi.boolean(),

      id: Joi.string(),

      name: Joi.string(),

      fileUrl: Joi.string(),

      type: Joi.string(),

      recordsCount: Joi.number(),

      application: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      slug: Joi.string(),

      v: Joi.number(),
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

      isDefault: Joi.boolean(),
    });
  }

  static EmailProviderReq() {
    return Joi.object({
      name: Joi.string(),

      description: Joi.string(),

      apiKey: Joi.string(),

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

      id: Joi.string(),

      name: Joi.string(),

      description: Joi.string(),

      apiKey: Joi.string(),

      application: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      slug: Joi.string(),

      v: Joi.number(),
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

      staticTo: Joi.array().items(Joi.string()),

      staticCc: Joi.array().items(Joi.string()),

      staticBcc: Joi.array().items(Joi.string()),

      replyTo: Joi.string(),

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
      templateType: Joi.string(),

      template: Joi.string(),
    });
  }

  static EmailTemplateRes() {
    return Joi.object({
      isSystem: Joi.boolean(),

      isInternal: Joi.boolean(),

      description: Joi.string(),

      staticTo: Joi.array().items(Joi.string()),

      staticCc: Joi.array().items(Joi.string()),

      staticBcc: Joi.array().items(Joi.string()),

      tags: Joi.array().items(Joi.any()),

      priority: Joi.string(),

      published: Joi.boolean(),

      id: Joi.string(),

      name: Joi.string(),

      keys: this.EmailTemplateKeys(),

      from: Joi.string(),

      replyTo: Joi.string(),

      headers: Joi.array().items(this.EmailTemplateHeaders()),

      subject: this.TemplateAndType(),

      html: this.TemplateAndType(),

      text: this.TemplateAndType(),

      attachments: Joi.array().items(Joi.any()),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      slug: Joi.string(),

      v: Joi.number(),
    });
  }

  static EmailTemplate() {
    return Joi.object({
      isSystem: Joi.boolean(),

      isInternal: Joi.boolean(),

      description: Joi.string(),

      staticTo: Joi.array().items(Joi.any()),

      staticCc: Joi.array().items(Joi.any()),

      staticBcc: Joi.array().items(Joi.any()),

      tags: Joi.array().items(Joi.any()),

      priority: Joi.string(),

      published: Joi.boolean(),

      id: Joi.string(),

      slug: Joi.string(),

      name: Joi.string(),

      from: Joi.string(),

      fromName: Joi.string(),

      subject: this.TemplateAndType(),

      html: this.TemplateAndType(),

      text: this.TemplateAndType(),

      headers: Joi.array().items(Joi.any()),

      attachments: Joi.array().items(Joi.any()),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      v: Joi.number(),
    });
  }

  static SystemEmailTemplate() {
    return Joi.object({
      isSystem: Joi.boolean(),

      isInternal: Joi.boolean(),

      description: Joi.string(),

      staticTo: Joi.array().items(Joi.any()),

      staticCc: Joi.array().items(Joi.any()),

      staticBcc: Joi.array().items(Joi.any()),

      tags: Joi.array().items(Joi.any()),

      priority: Joi.string(),

      published: Joi.boolean(),

      id: Joi.string(),

      slug: Joi.string(),

      name: Joi.string(),

      from: Joi.string(),

      fromName: Joi.string(),

      subject: this.TemplateAndType(),

      html: this.TemplateAndType(),

      text: this.TemplateAndType(),

      headers: Joi.array().items(Joi.any()),

      attachments: Joi.array().items(Joi.any()),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      v: Joi.number(),
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

      isDefault: Joi.boolean(),

      id: Joi.string(),

      application: Joi.string(),

      event: Joi.string(),

      slug: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      v: Joi.number(),
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
      jobId: Joi.string(),
    });
  }

  static Job() {
    return Joi.object({
      completed: Joi.boolean(),

      isActive: Joi.boolean(),

      id: Joi.string(),

      campaign: Joi.string(),

      application: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      v: Joi.number(),
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

      id: Joi.string(),

      job: Joi.string(),

      campaign: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      v: Joi.number(),
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

      id: Joi.string(),

      application: Joi.string(),

      service: Joi.string(),

      step: Joi.string(),

      status: Joi.string(),

      data: Joi.any(),

      expireAt: Joi.string(),

      createdAt: Joi.string(),
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

      bundleIdentifier: Joi.string(),

      pushToken: Joi.string(),

      uniqueDeviceId: Joi.string(),
    });
  }

  static PushtokenRes() {
    return Joi.object({
      id: Joi.string(),

      bundleIdentifier: Joi.string(),

      pushToken: Joi.string(),

      uniqueDeviceId: Joi.string(),

      type: Joi.string(),

      platform: Joi.string(),

      applicationId: Joi.string(),

      userId: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      expiredAt: Joi.string(),
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

      id: Joi.string(),

      name: Joi.string(),

      description: Joi.string(),

      sender: Joi.string(),

      username: Joi.string(),

      authkey: Joi.string(),

      application: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      slug: Joi.string(),

      v: Joi.number(),
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
      templateType: Joi.string(),

      template: Joi.string(),
    });
  }

  static SmsTemplateReq() {
    return Joi.object({
      name: Joi.string(),

      description: Joi.string(),

      message: this.SmsTemplateMessage(),

      templateVariables: Joi.any(),

      attachments: Joi.array().items(Joi.any()),

      priority: Joi.string(),
    });
  }

  static SmsTemplateRes() {
    return Joi.object({
      isSystem: Joi.boolean(),

      isInternal: Joi.boolean(),

      description: Joi.string(),

      tags: Joi.array().items(Joi.any()),

      priority: Joi.string(),

      published: Joi.boolean(),

      id: Joi.string(),

      name: Joi.string(),

      message: this.SmsTemplateMessage(),

      templateVariables: Joi.any(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      slug: Joi.string(),

      v: Joi.number(),
    });
  }

  static SmsTemplate() {
    return Joi.object({
      isSystem: Joi.boolean(),

      isInternal: Joi.boolean(),

      description: Joi.string(),

      priority: Joi.string(),

      tags: Joi.array().items(Joi.any()),

      published: Joi.boolean(),

      id: Joi.string(),

      slug: Joi.string(),

      name: Joi.string(),

      message: this.SmsTemplateMessage(),

      templateVariables: Joi.any(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      v: Joi.number(),
    });
  }

  static SystemSmsTemplate() {
    return Joi.object({
      isSystem: Joi.boolean(),

      isInternal: Joi.boolean(),

      description: Joi.string(),

      tags: Joi.array().items(Joi.any()),

      priority: Joi.string(),

      published: Joi.boolean(),

      id: Joi.string(),

      slug: Joi.string(),

      name: Joi.string(),

      message: this.SmsTemplateMessage(),

      templateVariables: Joi.any(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      v: Joi.number(),
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

      clickAction: Joi.string(),
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

      timeToLive: Joi.string(),
    });
  }

  static SystemNotification() {
    return Joi.object({
      notification: this.Notification(),

      user: this.SystemNotificationUser(),

      settings: this.SystemNotificationUser(),

      id: Joi.string(),

      group: Joi.string(),

      createdAt: Joi.string(),
    });
  }

  static SystemNotificationsPage() {
    return Joi.object({
      type: Joi.string(),

      current: Joi.number(),

      size: Joi.number(),

      itemTotal: Joi.number(),

      hasNext: Joi.boolean(),
    });
  }

  static SystemNotifications() {
    return Joi.object({
      items: Joi.array().items(this.SystemNotification()),

      lastReadAnchor: Joi.number(),

      page: this.Page(),
    });
  }

  static PaymentGatewayConfigResponse() {
    return Joi.object({
      aggregators: Joi.array().items(Joi.object()),

      excludedFields: Joi.array().items(Joi.string()),

      displayFields: Joi.array().items(Joi.string()),

      appId: Joi.string(),

      created: Joi.boolean(),

      success: Joi.boolean(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      description: Joi.string(),

      success: Joi.boolean(),

      code: Joi.string(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      isActive: Joi.boolean(),

      key: Joi.string(),

      configType: Joi.string(),

      merchantSalt: Joi.string(),

      secret: Joi.string(),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      isActive: Joi.boolean(),

      aggregatorName: this.PaymentGatewayConfig(),

      appId: Joi.string(),
    });
  }

  static PaymentGatewayToBeReviewed() {
    return Joi.object({
      aggregator: Joi.array().items(Joi.string()),

      success: Joi.boolean(),
    });
  }

  static ErrorCodeAndDescription() {
    return Joi.object({
      description: Joi.string(),

      code: Joi.string(),
    });
  }

  static HttpErrorCodeAndResponse() {
    return Joi.object({
      success: Joi.boolean(),

      error: this.ErrorCodeAndDescription(),
    });
  }

  static PaymentModeLogo() {
    return Joi.object({
      large: Joi.string(),

      small: Joi.string(),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      cardType: Joi.string(),

      expired: Joi.boolean(),

      cardId: Joi.string(),

      name: Joi.string(),

      expYear: Joi.number(),

      code: Joi.string(),

      cardReference: Joi.string(),

      intentAppErrorList: Joi.array().items(Joi.string()),

      retryCount: Joi.number(),

      cardBrand: Joi.string(),

      cardBrandImage: Joi.string(),

      cardNumber: Joi.string(),

      displayName: Joi.string(),

      cardIssuer: Joi.string(),

      nickname: Joi.string(),

      cardToken: Joi.string(),

      timeout: Joi.number(),

      logoUrl: this.PaymentModeLogo(),

      aggregatorName: Joi.string(),

      cardName: Joi.string(),

      expMonth: Joi.number(),

      cardIsin: Joi.string(),

      merchantCode: Joi.string(),

      displayPriority: Joi.number(),

      intentFlow: Joi.string(),

      fyndVpa: Joi.string(),

      cardFingerprint: Joi.string(),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      anonymousEnable: Joi.boolean(),

      aggregatorName: Joi.string(),

      list: Joi.array().items(this.PaymentModeList()),

      displayPriority: Joi.number(),

      displayName: Joi.string(),

      name: Joi.string(),

      addCardEnabled: Joi.boolean(),
    });
  }

  static PaymentOptions() {
    return Joi.object({
      paymentOption: Joi.array().items(this.RootPaymentMode()),
    });
  }

  static PaymentOptionsResponse() {
    return Joi.object({
      paymentOptions: this.PaymentOptions(),

      success: Joi.boolean(),
    });
  }

  static PayoutsResponse() {
    return Joi.object({
      isActive: Joi.boolean(),

      uniqueTransferNo: Joi.object(),

      transferType: Joi.string(),

      moreAttributes: Joi.object(),

      customers: Joi.object(),

      payoutsAggregators: Joi.array().items(Joi.object()),

      isDefault: Joi.boolean(),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      aggregator: Joi.string(),

      isActive: Joi.boolean(),

      bankDetails: Joi.object(),

      users: Joi.object(),

      transferType: Joi.string(),

      uniqueExternalId: Joi.string(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      aggregator: Joi.string(),

      isActive: Joi.boolean(),

      paymentStatus: Joi.string(),

      bankDetails: Joi.object(),

      uniqueTransferNo: Joi.string(),

      users: Joi.object(),

      transferType: Joi.string(),

      payouts: Joi.object(),

      created: Joi.boolean(),

      success: Joi.boolean(),
    });
  }

  static UpdatePayoutResponse() {
    return Joi.object({
      isActive: Joi.boolean(),

      success: Joi.boolean(),

      isDefault: Joi.boolean(),
    });
  }

  static UpdatePayoutRequest() {
    return Joi.object({
      uniqueExternalId: Joi.string(),

      isActive: Joi.boolean(),

      isDefault: Joi.boolean(),
    });
  }

  static DeletePayoutResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static SubscriptionPaymentMethodResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.object()),

      success: Joi.boolean(),
    });
  }

  static DeleteSubscriptionPaymentMethodResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static SubscriptionConfigResponse() {
    return Joi.object({
      aggregator: Joi.string(),

      config: Joi.object(),

      success: Joi.boolean(),
    });
  }

  static SaveSubscriptionSetupIntentRequest() {
    return Joi.object({
      uniqueExternalId: Joi.string(),
    });
  }

  static SaveSubscriptionSetupIntentResponse() {
    return Joi.object({
      data: Joi.object(),

      success: Joi.boolean(),
    });
  }

  static GetActivityStatus() {
    return Joi.object({
      activityHistory: this.ActivityHistory(),
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
      orders: this.FailOrder(),
    });
  }

  static FailOrder() {
    return Joi.object({
      updatedAt: Joi.string(),

      id: Joi.string(),

      reason: Joi.string(),

      marketplaceOrder: this.MarketplaceOrder(),

      marketplaceOrderId: Joi.string(),

      createdAt: Joi.string(),

      appId: Joi.string(),

      marketplace: Joi.string(),

      companyId: Joi.number(),
    });
  }

  static MarketplaceOrder() {
    return Joi.object({
      orderStatusUrl: Joi.string(),

      adminGraphqlApiId: Joi.string(),

      email: Joi.string(),

      test: Joi.boolean(),

      note: Joi.string(),

      totalPrice: Joi.string(),

      appId: Joi.number(),

      totalDiscountsSet: this.TotalDiscountsSet(),

      totalPriceSet: this.TotalPriceSet(),

      totalTaxSet: this.TotalTaxSet(),

      gateway: Joi.string(),

      name: Joi.string(),

      subtotalPriceSet: this.SubtotalPriceSet(),

      number: Joi.number(),

      buyerAcceptsMarketing: Joi.boolean(),

      contactEmail: Joi.string(),

      token: Joi.string(),

      sourceName: Joi.string(),

      paymentGatewayNames: Joi.array().items(Joi.any()),

      presentmentCurrency: Joi.string(),

      subtotalPrice: Joi.string(),

      processedAt: Joi.string(),

      orderNumber: Joi.number(),

      totalTipReceived: Joi.string(),

      id: Joi.number(),

      confirmed: Joi.boolean(),

      currency: Joi.string(),

      totalLineItemsPrice: Joi.string(),

      lineItems: this.LineItems(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      totalWeight: Joi.number(),

      billingAddress: this.BillingAddress(),

      totalShippingPriceSet: this.TotalShippingPriceSet(),

      customer: this.Customer(),

      totalDiscounts: Joi.string(),

      totalLineItemsPriceSet: this.TotalLineItemsPriceSet(),

      tags: Joi.string(),

      totalPriceUsd: Joi.string(),

      userId: Joi.number(),

      totalTax: Joi.string(),

      processingMethod: Joi.string(),

      shippingAddress: this.ShippingAddress(),

      taxesIncluded: Joi.boolean(),

      financialStatus: Joi.string(),
    });
  }

  static TotalDiscountsSet() {
    return Joi.object({
      presentmentMoney: this.PresentmentMoney(),

      shopMoney: this.ShopMoney(),
    });
  }

  static PresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static ShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static TotalPriceSet() {
    return Joi.object({
      shopMoney: this.TotalPriceSetShopMoney(),

      presentmentMoney: this.TotalPriceSetPresentmentMoney(),
    });
  }

  static TotalPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static TotalPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static TotalTaxSet() {
    return Joi.object({
      shopMoney: this.TotalTaxSetShopMoney(),

      presentmentMoney: this.TotalTaxSetPresentmentMoney(),
    });
  }

  static TotalTaxSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static TotalTaxSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static SubtotalPriceSet() {
    return Joi.object({
      shopMoney: this.SubtotalPriceSetShopMoney(),

      presentmentMoney: this.SubtotalPriceSetPresentmentMoney(),
    });
  }

  static SubtotalPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static SubtotalPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static LineItems() {
    return Joi.object({
      sku: Joi.string(),

      fulfillableQuantity: Joi.number(),

      grams: Joi.number(),

      totalDiscount: Joi.string(),

      article: this.LineItemsArticle(),

      title: Joi.string(),

      variantInventoryManagement: Joi.string(),

      id: Joi.number(),

      variantId: Joi.number(),

      variantTitle: Joi.string(),

      productExists: Joi.boolean(),

      price: Joi.string(),

      adminGraphqlApiId: Joi.string(),

      quantity: Joi.number(),

      vendor: Joi.string(),

      fulfillmentService: Joi.string(),

      taxable: Joi.boolean(),

      name: Joi.string(),

      productId: Joi.number(),

      priceSet: this.PriceSet(),

      taxLines: this.TaxLines(),

      requiresShipping: Joi.boolean(),

      giftCard: Joi.boolean(),

      totalDiscountSet: this.TotalDiscountSet(),
    });
  }

  static LineItemsArticle() {
    return Joi.object({
      quantities: this.Quantities(),

      oldArticleUid: Joi.string(),

      totalQuantity: Joi.number(),

      manufacturer: this.Manufacturer(),

      price: this.ArticlePrice(),

      trackInventory: Joi.boolean(),

      company: this.Company(),

      isActive: Joi.boolean(),

      dateMeta: this.FailOrderDateMeta(),

      fragile: Joi.boolean(),

      marketplaceIdentifiers: this.MarketplaceIdentifiers(),

      size: Joi.string(),

      isSet: Joi.boolean(),

      dimension: this.Dimension(),

      weight: this.Weight(),

      store: this.Store(),

      meta: this.ArticleMeta(),

      uid: Joi.string(),

      brand: this.ArticleBrand(),

      itemId: Joi.number(),

      fyndArticleCode: Joi.string(),

      id: Joi.string(),

      identifier: this.LineItemsArticleIdentifier(),

      sellerIdentifier: Joi.string(),

      fyndItemCode: Joi.string(),

      countryOfOrigin: Joi.string(),
    });
  }

  static Quantities() {
    return Joi.object({
      notAvailable: this.NotAvailable(),

      sellable: this.Sellable(),

      orderCommitted: this.OrderCommitted(),

      damaged: this.Damaged(),
    });
  }

  static NotAvailable() {
    return Joi.object({
      count: Joi.number(),

      updatedAt: Joi.string(),
    });
  }

  static Sellable() {
    return Joi.object({
      count: Joi.number(),

      updatedAt: Joi.string(),
    });
  }

  static OrderCommitted() {
    return Joi.object({
      count: Joi.number(),

      updatedAt: Joi.string(),
    });
  }

  static Damaged() {
    return Joi.object({
      updatedAt: Joi.string(),

      count: Joi.number(),
    });
  }

  static Manufacturer() {
    return Joi.object({
      isDefault: Joi.boolean(),

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

      companyType: Joi.string(),

      businessType: Joi.string(),

      companyName: Joi.string(),

      createdOn: Joi.string(),

      panNo: Joi.string(),

      returnAllowed: Joi.boolean(),

      meta: Joi.string(),

      exchangeAllowed: Joi.boolean(),

      agreementStartDate: Joi.string(),

      exchangeWithinDays: Joi.number(),

      paymentProcesingCharge: Joi.number(),

      fyndAFitAvailable: Joi.boolean(),

      modifiedOn: Joi.string(),

      returnWithinDays: Joi.number(),
    });
  }

  static FailOrderDateMeta() {
    return Joi.object({
      addedOnStore: Joi.string(),

      inventoryUpdatedOn: Joi.string(),

      createdOn: Joi.string(),

      modifiedOn: Joi.string(),
    });
  }

  static MarketplaceIdentifiers() {
    return Joi.object({
      tatacliqLuxury: this.TatacliqLuxury(),
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

      isDefault: Joi.boolean(),
    });
  }

  static Weight() {
    return Joi.object({
      isDefault: Joi.boolean(),

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
      skuCode: Joi.string(),
    });
  }

  static PriceSet() {
    return Joi.object({
      shopMoney: this.PriceSetShopMoney(),

      presentmentMoney: this.PriceSetPresentmentMoney(),
    });
  }

  static PriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static PriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static TaxLines() {
    return Joi.object({
      title: Joi.string(),

      price: Joi.string(),

      rate: Joi.number(),

      priceSet: this.TaxLinesPriceSet(),
    });
  }

  static TaxLinesPriceSet() {
    return Joi.object({
      shopMoney: this.TaxLinesPriceSetShopMoney(),

      presentmentMoney: this.TaxLinesPriceSetPresentmentMoney(),
    });
  }

  static TaxLinesPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static TaxLinesPriceSetPresentmentMoney() {
    return Joi.object({
      currencyCode: Joi.string(),

      amount: Joi.string(),
    });
  }

  static TotalDiscountSet() {
    return Joi.object({
      presentmentMoney: this.TotalDiscountSetPresentmentMoney(),

      shopMoney: this.TotalDiscountSetShopMoney(),
    });
  }

  static TotalDiscountSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static TotalDiscountSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static BillingAddress() {
    return Joi.object({
      address1: Joi.string(),

      city: Joi.string(),

      zip: Joi.string(),

      lastName: Joi.string(),

      address2: Joi.string(),

      longitude: Joi.number(),

      provinceCode: Joi.string(),

      phone: Joi.string(),

      company: Joi.string(),

      latitude: Joi.number(),

      name: Joi.string(),

      country: Joi.string(),

      countryCode: Joi.string(),

      firstName: Joi.string(),

      province: Joi.string(),
    });
  }

  static TotalShippingPriceSet() {
    return Joi.object({
      shopMoney: this.TotalShippingPriceSetShopMoney(),

      presentmentMoney: this.TotalShippingPriceSetPresentmentMoney(),
    });
  }

  static TotalShippingPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static TotalShippingPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static Customer() {
    return Joi.object({
      createdAt: Joi.string(),

      id: Joi.number(),

      lastName: Joi.string(),

      state: Joi.string(),

      lastOrderId: Joi.number(),

      note: Joi.string(),

      verifiedEmail: Joi.boolean(),

      phone: Joi.string(),

      acceptsMarketing: Joi.boolean(),

      firstName: Joi.string(),

      tags: Joi.string(),

      lastOrderName: Joi.string(),

      ordersCount: Joi.number(),

      totalSpent: Joi.string(),

      taxExempt: Joi.boolean(),

      currency: Joi.string(),

      acceptsMarketingUpdatedAt: Joi.string(),

      email: Joi.string(),

      updatedAt: Joi.string(),

      adminGraphqlApiId: Joi.string(),

      defaultAddress: this.DefaultAddress(),
    });
  }

  static DefaultAddress() {
    return Joi.object({
      lastName: Joi.string(),

      name: Joi.string(),

      provinceCode: Joi.string(),

      countryCode: Joi.string(),

      isDefault: Joi.boolean(),

      id: Joi.number(),

      customerId: Joi.number(),

      firstName: Joi.string(),

      address1: Joi.string(),

      phone: Joi.string(),

      countryName: Joi.string(),

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
      shopMoney: this.TotalLineItemsPriceSetShopMoney(),

      presentmentMoney: this.TotalLineItemsPriceSetPresentmentMoney(),
    });
  }

  static TotalLineItemsPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static TotalLineItemsPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      address1: Joi.string(),

      zip: Joi.string(),

      address2: Joi.string(),

      countryCode: Joi.string(),

      country: Joi.string(),

      lastName: Joi.string(),

      latitude: Joi.number(),

      provinceCode: Joi.string(),

      firstName: Joi.string(),

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
      items: Joi.array().items(this.OrderItems()),

      filters: this.Filters(),

      nextOrderStatus: this.NextOrderStatus(),

      page: this.PlatformOrderPage(),

      appliedFilters: this.AppliedFilters(),
    });
  }

  static OrderItems() {
    return Joi.object({
      user: this.PlatformOrderUserInfo(),

      deliveryAddress: this.PlatformDeliveryAddress(),

      channel: this.Channel(),

      breakupValues: this.PlatformBreakupValues(),

      id: Joi.string(),

      application: this.PlatformApplication(),

      shipments: this.PlatformShipment(),

      createdAt: Joi.string(),

      totalShipmentsInOrder: Joi.number(),

      payments: this.ItemsPayments(),
    });
  }

  static PlatformOrderUserInfo() {
    return Joi.object({
      mobile: Joi.string(),

      firstName: Joi.string(),

      gender: Joi.string(),

      email: Joi.string(),

      lastName: Joi.string(),

      isAnonymousUser: Joi.boolean(),

      uid: Joi.number(),

      avisUserId: Joi.string(),
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

      updatedAt: Joi.string(),

      city: Joi.string(),

      landmark: Joi.string(),

      createdAt: Joi.string(),

      name: Joi.string(),

      address: Joi.string(),

      phone: Joi.string(),

      longitude: Joi.number(),

      addressType: Joi.string(),

      email: Joi.string(),

      pincode: Joi.string(),

      address2: Joi.string(),

      contactPerson: Joi.string(),

      addressCategory: Joi.string(),
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

      postOrderReassignment: Joi.boolean(),

      id: Joi.string(),

      description: Joi.string(),

      dpAssignment: Joi.boolean(),

      articleAssignment: this.ArticleAssignment(),

      forceReassignment: Joi.boolean(),

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

      breakupValues: this.ShipmentBreakupValues(),

      id: Joi.string(),

      dpDetails: this.DpDetails(),

      invoice: this.ShipmentInvoice(),

      fulfillingStore: this.PlatformFulfillingStore(),

      payments: this.Payments(),

      gst: this.ShipmentGst(),

      company: this.Company(),

      brand: this.PlatformShipmentBrand(),

      coupon: Joi.object(),

      orderSource: Joi.string(),

      isNotFyndSource: Joi.boolean(),

      comment: Joi.string(),

      promise: this.Promise(),

      trackingDetails: this.ShipmentTrackingDetails(),

      isFyndCoupon: Joi.boolean(),

      orderType: Joi.string(),

      user: this.ShipmentUser(),
    });
  }

  static PlatformShipmentStatus() {
    return Joi.object({
      id: Joi.number(),

      bagList: Joi.array().items(Joi.number()),

      createdAt: Joi.string(),

      status: Joi.string(),

      name: Joi.string(),

      progress: Joi.number(),

      shipmentId: Joi.string(),

      currentShipmentStatus: Joi.string(),

      colorCode: Joi.string(),
    });
  }

  static Bags() {
    return Joi.object({
      financialBreakup: Joi.array().items(this.BagFinancialBreakup()),

      status: this.BagCurrStatus(),

      item: this.BagItem(),

      article: this.BagArticle(),

      id: Joi.number(),

      prices: this.BagPrices(),

      gstDetails: this.GstDetails(),

      breakupValues: this.BagBreakupValues(),

      updateTime: Joi.number(),

      currentStatus: this.BagCurrentStatus(),

      bagStatus: this.BagStatus(),
    });
  }

  static BagFinancialBreakup() {
    return Joi.object({
      valueOfGood: Joi.number(),

      hsnCode: Joi.string(),

      priceEffective: Joi.number(),

      codCharges: Joi.number(),

      gstFee: Joi.string(),

      fyndCredits: Joi.number(),

      refundAmount: Joi.number(),

      cashbackApplied: Joi.number(),

      transferPrice: Joi.number(),

      amountPaidRoundoff: Joi.number(),

      couponValue: Joi.number(),

      amountPaid: Joi.number(),

      gstTaxPercentage: Joi.number(),

      size: Joi.string(),

      totalUnits: Joi.number(),

      discount: Joi.number(),

      couponEffectiveDiscount: Joi.number(),

      cashback: Joi.number(),

      promotionEffectiveDiscount: Joi.number(),

      gstTag: Joi.string(),

      deliveryCharge: Joi.number(),

      refundCredit: Joi.number(),

      priceMarked: Joi.number(),

      identifiers: this.Identifiers(),

      itemName: Joi.string(),

      addedToFyndCash: Joi.boolean(),

      brandCalculatedAmount: Joi.number(),
    });
  }

  static Identifiers() {
    return Joi.object({
      ean: Joi.string(),
    });
  }

  static BagCurrStatus() {
    return Joi.object({
      enableTracking: Joi.boolean(),

      isCustomerReturnAllowed: Joi.boolean(),

      isActive: Joi.boolean(),

      isReturnable: Joi.boolean(),

      canBeCancelled: Joi.boolean(),
    });
  }

  static BagItem() {
    return Joi.object({
      id: Joi.number(),

      size: Joi.string(),

      slugKey: Joi.string(),

      canReturn: Joi.boolean(),

      brandId: Joi.number(),

      l2Category: Joi.array().items(Joi.string()),

      name: Joi.string(),

      code: Joi.string(),

      canCancel: Joi.boolean(),

      attributes: this.BagItemAttributes(),

      l3CategoryName: Joi.string(),

      l3Category: Joi.number(),

      l1Category: Joi.array().items(Joi.string()),

      image: Joi.array().items(Joi.string()),

      brand: Joi.string(),

      lastUpdatedAt: Joi.string(),
    });
  }

  static BagItemAttributes() {
    return Joi.object({
      itemCode: Joi.string(),

      brandName: Joi.string(),

      countryOfOrigin: Joi.string(),
    });
  }

  static BagArticle() {
    return Joi.object({
      identifiers: this.ArticleIdentifiers(),

      espModified: Joi.boolean(),

      isSet: Joi.boolean(),

      size: Joi.string(),

      code: Joi.string(),

      set: this.Set(),

      sellerIdentifier: Joi.string(),

      returnConfig: this.BagArticleReturnConfig(),

      id: Joi.string(),

      uid: Joi.string(),

      childDetails: Joi.object(),
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

      sizeDistribution: this.SetSizeDistribution(),
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
      refundAmount: Joi.number(),

      cashbackApplied: Joi.number(),

      transferPrice: Joi.number(),

      couponValue: Joi.number(),

      amountPaid: Joi.number(),

      deliveryCharge: Joi.number(),

      couponEffectiveDiscount: Joi.number(),

      codCharges: Joi.number(),

      refundCredit: Joi.number(),

      addedToFyndCash: Joi.boolean(),

      gstTaxPercentage: Joi.number(),

      priceMarked: Joi.number(),

      priceEffective: Joi.number(),

      discount: Joi.number(),

      promotionEffectiveDiscount: Joi.number(),

      amountPaidRoundoff: Joi.number(),

      fyndCredits: Joi.number(),

      brandCalculatedAmount: Joi.number(),

      cashback: Joi.number(),

      valueOfGood: Joi.number(),
    });
  }

  static GstDetails() {
    return Joi.object({
      brandCalculatedAmount: Joi.number(),

      gstFee: Joi.string(),

      gstTag: Joi.string(),

      hsnCode: Joi.string(),

      valueOfGood: Joi.number(),

      gstTaxPercentage: Joi.number(),

      isDefaultHsnCode: Joi.boolean(),
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
      updatedAt: Joi.string(),

      bagStateMapper: this.BagStateMapper(),

      status: Joi.string(),

      stateType: Joi.string(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      appStateName: Joi.string(),

      isActive: Joi.boolean(),

      displayName: Joi.string(),

      name: Joi.string(),

      appDisplayName: Joi.string(),
    });
  }

  static BagStatus() {
    return Joi.object({
      status: Joi.string(),

      stateType: Joi.string(),

      updatedAt: Joi.string(),

      bagStateMapper: this.BagStatusBagStateMapper(),
    });
  }

  static BagStatusBagStateMapper() {
    return Joi.object({
      isActive: Joi.boolean(),

      displayName: Joi.string(),

      name: Joi.string(),

      appDisplayName: Joi.string(),

      appStateName: Joi.string(),
    });
  }

  static BagPrices() {
    return Joi.object({
      cashback: Joi.number(),

      refundCredit: Joi.number(),

      couponValue: Joi.number(),

      deliveryCharge: Joi.number(),

      fyndCredits: Joi.number(),

      priceMarked: Joi.number(),

      cashbackApplied: Joi.number(),

      valueOfGood: Joi.number(),

      amountPaidRoundoff: Joi.number(),

      amountPaid: Joi.number(),

      codCharges: Joi.number(),

      priceEffective: Joi.number(),

      refundAmount: Joi.number(),

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
      gstTag: Joi.string(),
    });
  }

  static ShipmentInvoice() {
    return Joi.object({
      paymentType: Joi.string(),

      updatedDate: Joi.string(),

      invoiceUrl: Joi.string(),

      labelUrl: Joi.string(),

      paymentMode: Joi.string(),

      amountToCollect: Joi.number(),

      rtoAddress: this.RtoAddress(),
    });
  }

  static RtoAddress() {
    return Joi.object({
      name: Joi.string(),

      id: Joi.number(),

      phone: Joi.string(),

      locationType: Joi.string(),

      storeAddressJson: this.StoreAddressJson(),

      code: Joi.string(),

      address1: Joi.string(),

      city: Joi.string(),

      country: Joi.string(),

      pincode: Joi.string(),

      companyId: Joi.number(),

      contactPerson: Joi.string(),

      state: Joi.string(),

      storeEmail: Joi.string(),

      address2: Joi.string(),
    });
  }

  static StoreAddressJson() {
    return Joi.object({
      country: Joi.string(),

      latitude: Joi.number(),

      updatedAt: Joi.string(),

      area: Joi.string(),

      state: Joi.string(),

      addressType: Joi.string(),

      city: Joi.string(),

      pincode: Joi.string(),

      address1: Joi.string(),

      address2: Joi.string(),

      longitude: Joi.number(),

      email: Joi.string(),

      phone: Joi.string(),

      createdAt: Joi.string(),

      contactPerson: Joi.string(),

      addressCategory: Joi.string(),

      version: Joi.string(),

      landmark: Joi.string(),
    });
  }

  static PlatformFulfillingStore() {
    return Joi.object({
      packagingMaterialCount: Joi.number(),

      locationType: Joi.string(),

      code: Joi.string(),

      city: Joi.string(),

      meta: this.FulfillingStoreMeta(),

      name: Joi.string(),

      isActive: Joi.boolean(),

      address1: Joi.string(),

      storeEmail: Joi.string(),

      isArchived: Joi.boolean(),

      state: Joi.string(),

      address2: Joi.string(),

      contactPerson: Joi.string(),

      phone: Joi.string(),

      isEnabledForRecon: Joi.boolean(),

      fulfillmentChannel: Joi.string(),

      createdAt: Joi.string(),

      id: Joi.number(),

      pincode: Joi.string(),

      brandStoreTags: Joi.array().items(Joi.string()),

      companyId: Joi.number(),

      storeAddressJson: this.FulfillingStoreStoreAddressJson(),

      updatedAt: Joi.string(),

      loginUsername: Joi.string(),

      country: Joi.string(),
    });
  }

  static FulfillingStoreMeta() {
    return Joi.object({
      additionalContactDetails: this.AdditionalContactDetails(),

      documents: this.Documents(),

      gstNumber: Joi.string(),

      displayName: Joi.string(),

      productReturnConfig: this.ProductReturnConfig(),

      allowDpAssignmentFromFynd: Joi.boolean(),

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
      legalName: Joi.string(),

      type: Joi.string(),

      value: Joi.string(),

      verified: Joi.boolean(),
    });
  }

  static ProductReturnConfig() {
    return Joi.object({
      onSameStore: Joi.boolean(),
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

      contactPerson: Joi.string(),

      country: Joi.string(),

      pincode: Joi.string(),

      version: Joi.string(),

      createdAt: Joi.string(),

      addressType: Joi.string(),

      city: Joi.string(),

      address1: Joi.string(),

      landmark: Joi.string(),

      latitude: Joi.number(),

      longitude: Joi.number(),

      updatedAt: Joi.string(),

      addressCategory: Joi.string(),
    });
  }

  static Payments() {
    return Joi.object({
      isActive: Joi.boolean(),

      displayName: Joi.string(),

      logo: Joi.string(),

      source: Joi.string(),

      sourceNickname: Joi.string(),

      displayPriority: Joi.number(),

      id: Joi.number(),

      mode: Joi.string(),

      paymentIdentifier: Joi.string(),
    });
  }

  static ShipmentGst() {
    return Joi.object({
      brandCalculatedAmount: Joi.number(),

      valueOfGood: Joi.number(),

      gstFee: Joi.number(),
    });
  }

  static PlatformShipmentBrand() {
    return Joi.object({
      creditNoteAllowed: Joi.boolean(),

      brandName: Joi.string(),

      modifiedOn: Joi.string(),

      id: Joi.number(),

      isVirtualInvoice: Joi.boolean(),

      createdOn: Joi.string(),

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

      isPassed: Joi.boolean(),

      isCurrent: Joi.boolean(),
    });
  }

  static ShipmentUser() {
    return Joi.object({
      email: Joi.string(),

      id: Joi.number(),

      firstName: Joi.string(),

      mobile: Joi.string(),

      gender: Joi.string(),

      lastName: Joi.string(),

      isAnonymousUser: Joi.boolean(),

      mongoUserId: Joi.string(),
    });
  }

  static ItemsPayments() {
    return Joi.object({
      displayPriority: Joi.number(),

      id: Joi.number(),

      isActive: Joi.boolean(),

      displayName: Joi.string(),

      logo: Joi.string(),

      paymentIdentifier: Joi.string(),

      sourceNickname: Joi.string(),

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

      isDefault: Joi.boolean(),

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
      bagConfirmed: this.BagConfirmed(),

      dpAssigned: this.DpAssigned(),

      returnBagDelivered: this.ReturnBagDelivered(),

      placed: this.Placed(),

      deliveryDone: this.DeliveryDone(),

      pending: this.Pending(),

      bagPacked: this.BagPacked(),
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

      hasNext: Joi.boolean(),

      itemTotal: this.ItemTotal(),
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

      fromDate: Joi.string(),

      toDate: Joi.string(),
    });
  }

  static UpdateOrderReprocessResponse() {
    return Joi.object({
      status: Joi.string(),
    });
  }

  static PlatformOrderTrack() {
    return Joi.object({
      success: Joi.boolean(),

      requestId: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      countryCode: Joi.string(),

      resendTimer: Joi.number(),

      resendToken: Joi.string(),
    });
  }

  static GetPingResponse() {
    return Joi.object({
      ping: Joi.string(),
    });
  }

  static UpdateShipmentStatusResponse() {
    return Joi.object({
      shipments: Joi.object(),

      errorShipments: Joi.array().items(any),
    });
  }

  static UpdateShipmentStatusBody() {
    return Joi.object({
      shipments: Joi.object(),

      forceTransition: Joi.boolean(),

      task: Joi.boolean(),
    });
  }

  static PlatformShipmentTrack() {
    return Joi.object({
      results: this.Results(),
    });
  }

  static Results() {
    return Joi.object({
      awb: Joi.string(),

      updatedAt: Joi.string(),

      lastLocationRecievedAt: Joi.string(),

      reason: Joi.string(),

      shipmentType: Joi.string(),

      status: Joi.string(),

      updatedTime: Joi.string(),

      accountName: Joi.string(),
    });
  }

  static UpdateProcessShipmenstRequestBody() {
    return Joi.object({
      shipmentIds: Joi.array().items(Joi.string()),

      expectedStatus: Joi.string(),
    });
  }

  static UpdateProcessShipmenstRequestResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string(),
    });
  }

  static GetVoiceCallbackResponse() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static GetClickToCallResponse() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static ApefaceApiError() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static DeleteResponse() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      meta: Joi.object(),

      errors: Joi.object(),

      message: Joi.string(),

      status: Joi.number(),

      code: Joi.string(),
    });
  }

  static SearchKeywordResult() {
    return Joi.object({
      query: Joi.object(),

      sortOn: Joi.string(),
    });
  }

  static CreateSearchKeyword() {
    return Joi.object({
      result: this.SearchKeywordResult(),

      appId: Joi.string(),

      isActive: Joi.boolean(),

      customJson: Joi.object(),

      words: Joi.array().items(Joi.string()),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      result: Joi.object(),

      uid: Joi.string(),

      appId: Joi.string(),

      customJson: Joi.object(),

      words: Joi.array().items(Joi.string()),
    });
  }

  static Page() {
    return Joi.object({
      current: Joi.number(),

      hasNext: Joi.boolean(),

      nextPageId: Joi.string(),

      itemTotal: Joi.number(),

      hasPrevious: Joi.boolean(),
    });
  }

  static GetSearchWordsDetailResponse() {
    return Joi.object({
      page: this.Page(),

      items: this.GetSearchWordsData(),
    });
  }

  static GetSearchWordsResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.GetSearchWordsData()),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      url: Joi.string(),

      query: Joi.object(),

      type: Joi.string(),

      params: Joi.object(),
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
      display: Joi.string(),

      action: this.AutocompleteAction(),

      customJson: Joi.object(),

      logo: this.Media(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      appId: Joi.string(),

      isActive: Joi.boolean(),

      customJson: Joi.object(),

      words: Joi.array().items(Joi.string()),

      results: Joi.array().items(this.AutocompleteResult()),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      uid: Joi.string(),

      appId: Joi.string(),

      customJson: Joi.object(),

      words: Joi.array().items(Joi.string()),

      results: Joi.array().items(Joi.object()),
    });
  }

  static GetAutocompleteWordsResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.GetAutocompleteWordsData()),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      customJson: Joi.object(),

      words: Joi.array().items(Joi.string()),

      appId: Joi.string(),

      results: Joi.array().items(Joi.object()),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      productUid: Joi.number(),

      autoAddToCart: Joi.boolean(),

      allowRemove: Joi.boolean(),

      minQuantity: Joi.number(),

      maxQuantity: Joi.number(),

      autoSelect: Joi.boolean(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      modifiedOn: Joi.string(),

      slug: Joi.string(),

      choice: Joi.string(),

      createdBy: Joi.object(),

      meta: Joi.object(),

      createdOn: Joi.string(),

      products: Joi.array().items(this.ProductBundleItem()),

      pageVisibility: Joi.array().items(Joi.string()),

      sameStoreAssignment: Joi.boolean(),

      isActive: Joi.boolean(),

      name: Joi.string(),

      logo: Joi.string(),

      modifiedBy: Joi.object(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      modifiedOn: Joi.string(),

      companyId: Joi.number(),

      slug: Joi.string(),

      choice: Joi.string(),

      createdBy: Joi.object(),

      meta: Joi.object(),

      id: Joi.string(),

      createdOn: Joi.string(),

      products: Joi.array().items(this.ProductBundleItem()),

      pageVisibility: Joi.array().items(Joi.string()),

      sameStoreAssignment: Joi.boolean(),

      isActive: Joi.boolean(),

      name: Joi.string(),

      logo: Joi.string(),

      modifiedBy: Joi.object(),
    });
  }

  static GetProductBundleListingResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.GetProductBundleCreateResponse()),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      modifiedOn: Joi.string(),

      slug: Joi.string(),

      choice: Joi.string(),

      meta: Joi.object(),

      products: Joi.array().items(this.ProductBundleItem()),

      pageVisibility: Joi.array().items(Joi.string()),

      sameStoreAssignment: Joi.boolean(),

      isActive: Joi.boolean(),

      name: Joi.string(),

      logo: Joi.string(),

      modifiedBy: Joi.object(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string()),

      slug: Joi.string(),

      identifier: Joi.object(),

      itemCode: Joi.string(),

      uid: Joi.number(),

      images: Joi.array().items(Joi.string()),

      shortDescription: Joi.string(),

      countryOfOrigin: Joi.string(),

      price: Joi.object(),

      quantity: Joi.number(),

      attributes: Joi.object(),

      name: Joi.string(),
    });
  }

  static Size() {
    return Joi.object({
      display: Joi.string(),

      quantity: Joi.number(),

      value: Joi.string(),

      isAvailable: Joi.boolean(),
    });
  }

  static Price() {
    return Joi.object({
      maxMarked: Joi.number(),

      minMarked: Joi.number(),

      maxEffective: Joi.number(),

      minEffective: Joi.number(),

      currency: Joi.string(),
    });
  }

  static GetProducts() {
    return Joi.object({
      productUid: Joi.number(),

      productDetails: this.LimitedProductData(),

      autoAddToCart: Joi.boolean(),

      sizes: Joi.array().items(this.Size()),

      allowRemove: Joi.boolean(),

      minQuantity: Joi.number(),

      price: this.Price(),

      maxQuantity: Joi.number(),

      autoSelect: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      companyId: Joi.number(),

      slug: Joi.string(),

      choice: Joi.string(),

      meta: Joi.object(),

      products: Joi.array().items(this.GetProducts()),

      pageVisibility: Joi.array().items(Joi.string()),

      sameStoreAssignment: Joi.boolean(),

      isActive: Joi.boolean(),

      name: Joi.string(),

      logo: Joi.string(),
    });
  }

  static Meta() {
    return Joi.object({
      values: Joi.array().items(Joi.object()),

      headers: Joi.object(),

      unit: Joi.string(),
    });
  }

  static Guide() {
    return Joi.object({
      meta: this.Meta(),
    });
  }

  static ValidateSizeGuide() {
    return Joi.object({
      brandId: Joi.number(),

      companyId: Joi.number(),

      modifiedOn: Joi.string(),

      createdBy: Joi.object(),

      active: Joi.boolean(),

      id: Joi.string(),

      title: Joi.string(),

      createdOn: Joi.string(),

      tag: Joi.string(),

      subtitle: Joi.string(),

      image: Joi.string(),

      description: Joi.string(),

      name: Joi.string(),

      guide: this.Guide(),

      modifiedBy: Joi.object(),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      uid: Joi.number(),

      success: Joi.boolean(),
    });
  }

  static ListSizeGuide() {
    return Joi.object({
      page: Joi.object(),

      items: Joi.array().items(Joi.object()),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      brandId: Joi.number(),

      modifiedOn: Joi.string(),

      companyId: Joi.number(),

      createdBy: Joi.object(),

      active: Joi.boolean(),

      id: Joi.string(),

      createdOn: Joi.string(),

      title: Joi.string(),

      tag: Joi.string(),

      subtitle: Joi.string(),

      name: Joi.string(),

      guide: Joi.object(),

      modifiedBy: Joi.object(),
    });
  }

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      similar: Joi.object(),

      detail: Joi.object(),

      compare: Joi.object(),

      variant: Joi.object(),
    });
  }

  static MetaDataListingSortMetaResponse() {
    return Joi.object({
      display: Joi.string(),

      key: Joi.string(),
    });
  }

  static MetaDataListingSortResponse() {
    return Joi.object({
      data: Joi.array().items(this.MetaDataListingSortMetaResponse()),
    });
  }

  static MetaDataListingFilterMetaResponse() {
    return Joi.object({
      display: Joi.string(),

      filterTypes: Joi.array().items(Joi.string()),

      key: Joi.string(),

      units: Joi.array().items(Joi.object()),
    });
  }

  static MetaDataListingFilterResponse() {
    return Joi.object({
      data: Joi.array().items(this.MetaDataListingFilterMetaResponse()),
    });
  }

  static MetaDataListingResponse() {
    return Joi.object({
      sort: this.MetaDataListingSortResponse(),

      filter: this.MetaDataListingFilterResponse(),
    });
  }

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      product: this.GetCatalogConfigurationDetailsProduct(),

      listing: this.MetaDataListingResponse(),
    });
  }

  static ProductSize() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static ConfigurationProductConfig() {
    return Joi.object({
      key: Joi.string(),

      size: this.ProductSize(),

      title: Joi.string(),

      subtitle: Joi.string(),

      isActive: Joi.boolean(),

      logo: Joi.string(),

      priority: Joi.number(),
    });
  }

  static ConfigurationProductSimilar() {
    return Joi.object({
      config: Joi.array().items(this.ConfigurationProductConfig()),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      key: Joi.string(),

      name: Joi.string(),

      size: this.ProductSize(),

      displayType: Joi.string(),

      isActive: Joi.boolean(),

      logo: Joi.string(),

      priority: Joi.number(),
    });
  }

  static ConfigurationProductVariant() {
    return Joi.object({
      config: Joi.array().items(this.ConfigurationProductVariantConfig()),
    });
  }

  static ConfigurationProduct() {
    return Joi.object({
      similar: this.ConfigurationProductSimilar(),

      variant: this.ConfigurationProductVariant(),
    });
  }

  static ConfigurationListingSortConfig() {
    return Joi.object({
      key: Joi.string(),

      name: Joi.string(),

      isActive: Joi.boolean(),

      logo: Joi.string(),

      priority: Joi.number(),
    });
  }

  static ConfigurationListingSort() {
    return Joi.object({
      defaultKey: Joi.string(),

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
      bucketPoints: Joi.array().items(this.ConfigurationBucketPoints()),

      value: Joi.string(),

      sort: Joi.string(),

      condition: Joi.string(),

      map: Joi.object(),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      key: Joi.string(),

      type: Joi.string(),

      valueConfig: this.ConfigurationListingFilterValue(),

      name: Joi.string(),

      isActive: Joi.boolean(),

      logo: Joi.string(),

      priority: Joi.number(),
    });
  }

  static ConfigurationListingFilter() {
    return Joi.object({
      allowSingle: Joi.boolean(),

      attributeConfig: Joi.array().items(
        this.ConfigurationListingFilterConfig()
      ),
    });
  }

  static ConfigurationListing() {
    return Joi.object({
      sort: this.ConfigurationListingSort(),

      filter: this.ConfigurationListingFilter(),
    });
  }

  static AppConfiguration() {
    return Joi.object({
      configId: Joi.string(),

      configType: Joi.string(),

      appId: Joi.string(),

      product: this.ConfigurationProduct(),

      listing: this.ConfigurationListing(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      configId: Joi.string(),

      id: Joi.string(),

      configType: Joi.string(),

      appId: Joi.string(),

      product: this.ConfigurationProduct(),

      listing: this.ConfigurationListing(),
    });
  }

  static GetAppCatalogConfiguration() {
    return Joi.object({
      isDefault: Joi.boolean(),

      data: this.AppCatalogConfiguration(),
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
      configId: Joi.string(),

      id: Joi.string(),

      configType: Joi.string(),

      appId: Joi.string(),

      product: this.GetCatalogConfigurationDetailsProduct(),

      listing: this.GetCatalogConfigurationDetailsSchemaListing(),
    });
  }

  static GetAppCatalogEntityConfiguration() {
    return Joi.object({
      isDefault: Joi.boolean(),

      data: this.EntityConfiguration(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      selectedMin: Joi.number(),

      value: Joi.string(),

      max: Joi.number(),

      selectedMax: Joi.number(),

      display: Joi.string(),

      count: Joi.number(),

      currencyCode: Joi.string(),

      displayFormat: Joi.string(),

      queryFormat: Joi.string(),

      min: Joi.number(),

      isSelected: Joi.boolean(),

      currencySymbol: Joi.string(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      display: Joi.string(),

      kind: Joi.string(),

      name: Joi.string(),

      logo: Joi.string(),
    });
  }

  static ProductFilters() {
    return Joi.object({
      values: Joi.array().items(this.ProductFiltersValue()),

      key: this.ProductFiltersKey(),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      isSelected: Joi.boolean(),

      name: Joi.string(),

      value: Joi.string(),
    });
  }

  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      filters: Joi.array().items(this.ProductFilters()),

      sortOn: Joi.array().items(this.ProductSortOn()),
    });
  }

  static CollectionImage() {
    return Joi.object({
      url: Joi.string(),

      aspectRatio: Joi.string(),
    });
  }

  static UserInfo() {
    return Joi.object({
      email: Joi.string(),

      uid: Joi.string(),

      userId: Joi.string(),

      username: Joi.string(),
    });
  }

  static Schedule() {
    return Joi.object({
      cron: Joi.string(),

      end: Joi.string(),

      start: Joi.string(),

      duration: Joi.number(),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      text: Joi.string(),

      color: Joi.string(),
    });
  }

  static SeoDetail() {
    return Joi.object({
      description: Joi.string(),

      title: Joi.string(),
    });
  }

  static CollectionBanner() {
    return Joi.object({
      landscape: this.CollectionImage(),

      portrait: this.CollectionImage(),
    });
  }

  static CreateCollection() {
    return Joi.object({
      tags: Joi.array().items(Joi.string()),

      published: Joi.boolean(),

      type: Joi.string(),

      allowFacets: Joi.boolean(),

      logo: this.CollectionImage(),

      modifiedBy: this.UserInfo(),

      slug: Joi.string(),

      createdBy: this.UserInfo(),

      allowSort: Joi.boolean(),

      localeLanguage: Joi.object(),

      description: Joi.string(),

      visibleFacetsKeys: Joi.array().items(Joi.string()),

      sortOn: Joi.string(),

      schedule: this.Schedule(),

      isActive: Joi.boolean(),

      name: Joi.string(),

      badge: this.CollectionBadge(),

      seo: this.SeoDetail(),

      meta: Joi.object(),

      query: Joi.object(),

      appId: Joi.string(),

      banners: this.CollectionBanner(),

      customJson: Joi.object(),
    });
  }

  static BannerImage() {
    return Joi.object({
      url: Joi.string(),

      aspectRatio: Joi.string(),
    });
  }

  static ImageUrls() {
    return Joi.object({
      landscape: this.BannerImage(),

      portrait: this.BannerImage(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      badge: Joi.object(),

      schedule: Joi.object(),

      type: Joi.string(),

      slug: Joi.string(),

      meta: Joi.object(),

      query: Joi.object(),

      name: Joi.string(),

      appId: Joi.string(),

      allowSort: Joi.boolean(),

      banners: this.ImageUrls(),

      tag: Joi.array().items(Joi.string()),

      isActive: Joi.boolean(),

      allowFacets: Joi.boolean(),

      cron: Joi.object(),

      visibleFacetsKeys: Joi.array().items(Joi.string()),

      description: Joi.string(),

      logo: this.BannerImage(),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      display: Joi.string(),

      isSelected: Joi.boolean(),

      name: Joi.string(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      display: Joi.string(),

      isSelected: Joi.boolean(),

      name: Joi.string(),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      tags: Joi.array().items(this.CollectionListingFilterTag()),

      type: Joi.array().items(this.CollectionListingFilterType()),
    });
  }

  static Media1() {
    return Joi.object({
      meta: Joi.object(),

      url: Joi.string(),

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

  static GetCollectionDetailNest() {
    return Joi.object({
      type: Joi.string(),

      allowFacets: Joi.boolean(),

      logo: this.Media1(),

      slug: Joi.string(),

      allowSort: Joi.boolean(),

      uid: Joi.string(),

      tag: Joi.array().items(Joi.string()),

      description: Joi.string(),

      visibleFacetsKeys: Joi.array().items(Joi.string()),

      schedule: Joi.object(),

      isActive: Joi.boolean(),

      name: Joi.string(),

      badge: Joi.object(),

      meta: Joi.object(),

      query: Joi.object(),

      action: this.ProductListingAction(),

      appId: Joi.string(),

      banners: this.ImageUrls(),

      cron: Joi.object(),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      filters: this.CollectionListingFilter(),

      page: this.Page(),

      items: Joi.array().items(this.GetCollectionDetailNest()),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      badge: Joi.object(),

      schedule: Joi.object(),

      type: Joi.string(),

      slug: Joi.string(),

      meta: Joi.object(),

      query: Joi.object(),

      name: Joi.string(),

      appId: Joi.string(),

      allowSort: Joi.boolean(),

      banners: this.ImageUrls(),

      tag: Joi.array().items(Joi.string()),

      isActive: Joi.boolean(),

      allowFacets: Joi.boolean(),

      cron: Joi.object(),

      visibleFacetsKeys: Joi.array().items(Joi.string()),

      description: Joi.string(),

      logo: this.Media1(),
    });
  }

  static CollectionItemRequest() {
    return Joi.object({
      pageNo: Joi.number(),

      pageSize: Joi.number(),
    });
  }

  static UpdatedResponse() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static Price1() {
    return Joi.object({
      currencyCode: Joi.string(),

      max: Joi.number(),

      min: Joi.number(),

      currencySymbol: Joi.string(),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      effective: this.Price1(),

      marked: this.Price1(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      productOnlineDate: Joi.string(),

      type: Joi.string(),

      sellable: Joi.boolean(),

      attributes: Joi.object(),

      color: Joi.string(),

      slug: Joi.string(),

      uid: Joi.number(),

      imageNature: Joi.string(),

      highlights: Joi.array().items(Joi.string()),

      price: this.ProductListingPrice(),

      description: Joi.string(),

      rating: Joi.number(),

      medias: Joi.array().items(this.Media1()),

      hasVariant: Joi.boolean(),

      name: Joi.string(),

      promoMeta: Joi.object(),

      ratingCount: Joi.number(),

      similars: Joi.array().items(Joi.string()),

      shortDescription: Joi.string(),

      itemType: Joi.string(),

      teaserTag: Joi.object(),

      tryouts: Joi.array().items(Joi.string()),

      discount: Joi.string(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      filters: Joi.array().items(this.ProductFilters()),

      page: this.Page(),

      sortOn: Joi.array().items(this.ProductSortOn()),

      items: Joi.array().items(this.ProductListingDetail()),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      articleFreshness: Joi.number(),

      totalArticles: Joi.number(),

      availableSizes: Joi.number(),

      totalSizes: Joi.number(),

      availableArticles: Joi.number(),

      name: Joi.string(),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      sellableCount: Joi.number(),

      count: Joi.number(),

      outOfStockCount: Joi.number(),
    });
  }

  static CatalogInsightResponse() {
    return Joi.object({
      brandDistribution: this.CatalogInsightBrand(),

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
      brandDistribution: this.CatalogInsightBrand(),

      data: this.CrossSellingData(),
    });
  }

  static OptInPostRequest() {
    return Joi.object({
      optLevel: Joi.string(),

      storeIds: Joi.array().items(Joi.number()),

      enabled: Joi.boolean(),

      brandIds: Joi.array().items(Joi.number()),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      optLevel: Joi.string(),

      companyId: Joi.number(),

      modifiedOn: Joi.number(),

      createdBy: Joi.object(),

      createdOn: Joi.number(),

      brandIds: Joi.array().items(Joi.number()),

      platform: Joi.string(),

      storeIds: Joi.array().items(Joi.number()),

      enabled: Joi.boolean(),

      modifiedBy: Joi.object(),
    });
  }

  static GetOptInPlatform() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.CompanyOptIn()),
    });
  }

  static OptinCompanyDetail() {
    return Joi.object({
      uid: Joi.number(),

      businessType: Joi.string(),

      name: Joi.string(),

      companyType: Joi.string(),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brandId: Joi.number(),

      brandName: Joi.string(),

      companyId: Joi.number(),

      totalArticle: Joi.number(),
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
      brand: Joi.number(),

      store: Joi.number(),

      company: Joi.string(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      additionalContacts: Joi.array().items(Joi.object()),

      modifiedOn: Joi.string(),

      companyId: Joi.number(),

      timing: Joi.object(),

      uid: Joi.number(),

      displayName: Joi.string(),

      createdOn: Joi.string(),

      documents: Joi.array().items(Joi.object()),

      storeType: Joi.string(),

      storeCode: Joi.string(),

      name: Joi.string(),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.StoreDetail()),
    });
  }

  static BasePage() {
    return Joi.object({
      current: Joi.number(),

      hasNext: Joi.boolean(),

      itemTotal: Joi.number(),

      hasPrevious: Joi.boolean(),

      size: Joi.number(),
    });
  }

  static MultipleCommon() {
    return Joi.object({
      uid: Joi.string(),
    });
  }

  static ProdcutTemplateCategoriesResponse() {
    return Joi.object({
      page: this.BasePage(),

      items: this.MultipleCommon(),
    });
  }

  static PTErrorResponse() {
    return Joi.object({
      meta: Joi.object(),

      errors: Joi.object(),

      message: Joi.string(),

      status: Joi.number(),

      code: Joi.string(),
    });
  }

  static BasePage1() {
    return Joi.object({
      nextPageId: Joi.string(),

      itemTotal: Joi.number(),

      hasNext: Joi.boolean(),

      hasPrevious: Joi.boolean(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      userId: Joi.string(),

      username: Joi.string(),

      contact: Joi.string(),
    });
  }

  static GetDepartment() {
    return Joi.object({
      pageSize: Joi.number(),

      modifiedOn: Joi.string(),

      slug: Joi.string(),

      createdBy: this.UserSerializer(),

      pageNo: Joi.number(),

      uid: Joi.number(),

      createdOn: Joi.string(),

      itemType: Joi.string(),

      synonyms: Joi.array().items(Joi.string()),

      search: Joi.string(),

      isActive: Joi.boolean(),

      priorityOrder: Joi.number(),

      name: Joi.string(),

      logo: Joi.string(),

      modifiedBy: this.UserSerializer(),
    });
  }

  static DepartmentsResponse() {
    return Joi.object({
      page: this.BasePage1(),

      items: Joi.array().items(this.GetDepartment()),
    });
  }

  static DepartmentErrorResponse() {
    return Joi.object({
      meta: Joi.object(),

      errors: Joi.object(),

      message: Joi.string(),

      status: Joi.number(),

      code: Joi.string(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      modifiedOn: Joi.string(),

      isPhysical: Joi.boolean(),

      slug: Joi.string(),

      createdBy: Joi.object(),

      createdOn: Joi.string(),

      tag: Joi.string(),

      departments: Joi.array().items(Joi.string()),

      modifiedBy: Joi.object(),

      isActive: Joi.boolean(),

      attributes: Joi.array().items(Joi.string()),

      description: Joi.string(),

      categories: Joi.array().items(Joi.string()),

      name: Joi.string(),

      logo: Joi.string(),

      isArchived: Joi.boolean(),
    });
  }

  static TemplatesResponse() {
    return Joi.object({
      page: this.BasePage(),

      items: this.ProductTemplate(),
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
      hsnCode: Joi.array().items(Joi.string()),

      countryOfOrigin: Joi.array().items(Joi.string()),
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

  static Media2() {
    return Joi.object({
      landscape: Joi.string(),

      logo: Joi.string(),

      portrait: Joi.string(),
    });
  }

  static CategoryMappingValues() {
    return Joi.object({
      catalogId: Joi.number(),

      name: Joi.string(),
    });
  }

  static CategoryMapping() {
    return Joi.object({
      facebook: this.CategoryMappingValues(),

      ajio: this.CategoryMappingValues(),

      google: this.CategoryMappingValues(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      l2: Joi.number(),

      department: Joi.number(),

      l1: Joi.number(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      tryouts: Joi.array().items(Joi.string()),

      slug: Joi.string(),

      synonyms: Joi.array().items(Joi.string()),

      departments: Joi.array().items(Joi.number()),

      isActive: Joi.boolean(),

      level: Joi.number(),

      media: this.Media2(),

      marketplaces: this.CategoryMapping(),

      name: Joi.string(),

      hierarchy: Joi.array().items(this.Hierarchy()),

      priority: Joi.number(),
    });
  }

  static CategoryCreateResponse() {
    return Joi.object({
      uid: Joi.number(),

      message: Joi.string(),
    });
  }

  static Category() {
    return Joi.object({
      tryouts: Joi.array().items(Joi.string()),

      modifiedOn: Joi.string(),

      slug: Joi.string(),

      createdBy: Joi.object(),

      uid: Joi.number(),

      createdOn: Joi.string(),

      synonyms: Joi.array().items(Joi.string()),

      departments: Joi.array().items(Joi.number()),

      modifiedBy: Joi.object(),

      id: Joi.string(),

      isActive: Joi.boolean(),

      level: Joi.number(),

      media: this.Media2(),

      marketplaces: this.CategoryMapping(),

      name: Joi.string(),

      hierarchy: Joi.array().items(this.Hierarchy()),

      priority: Joi.number(),
    });
  }

  static CategoryResponse() {
    return Joi.object({
      page: this.BasePage1(),

      items: Joi.array().items(this.Category()),
    });
  }

  static CategoryUpdateResponse() {
    return Joi.object({
      message: Joi.string(),

      success: Joi.boolean(),
    });
  }

  static ProductPublish() {
    return Joi.object({
      productOnlineDate: Joi.string(),

      isSet: Joi.boolean(),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturingTime: Joi.number(),

      isCustomOrder: Joi.boolean(),

      manufacturingTimeUnit: Joi.string(),
    });
  }

  static Trader() {
    return Joi.object({
      address: Joi.string(),

      name: Joi.string(),
    });
  }

  static OrderQuantity() {
    return Joi.object({
      isSet: Joi.boolean(),

      maximum: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static TeaserTag() {
    return Joi.object({
      tag: Joi.string(),

      url: Joi.string(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string(),

      time: Joi.number(),
    });
  }

  static ProductCreateUpdate() {
    return Joi.object({
      tags: Joi.array().items(Joi.string()),

      companyId: Joi.number(),

      productPublish: this.ProductPublish(),

      changeRequestId: Joi.string(),

      productGroupTag: Joi.array().items(Joi.string()),

      isDependent: Joi.boolean(),

      customOrder: this.CustomOrder(),

      sizeGuide: Joi.string(),

      noOfBoxes: Joi.number(),

      trader: this.Trader(),

      moq: this.OrderQuantity(),

      slug: Joi.string(),

      uid: Joi.number(),

      highlights: Joi.array().items(Joi.string()),

      variants: Joi.object(),

      hsnCode: Joi.string(),

      multiSize: Joi.boolean(),

      media: Joi.array().items(this.Media1()),

      description: Joi.string(),

      requester: Joi.string(),

      isImageLessProduct: Joi.boolean(),

      categorySlug: Joi.string(),

      departments: Joi.array().items(Joi.number()),

      isActive: Joi.boolean(),

      name: Joi.string(),

      traderType: Joi.string(),

      brandUid: Joi.number(),

      itemCode: Joi.string(),

      isSet: Joi.boolean(),

      shortDescription: Joi.string(),

      countryOfOrigin: Joi.string(),

      itemType: Joi.string(),

      teaserTag: this.TeaserTag(),

      templateTag: Joi.string(),

      customJson: Joi.object(),

      currency: Joi.string(),

      returnConfig: this.ReturnConfig(),
    });
  }

  static PageData() {
    return Joi.object({
      current: Joi.string(),

      hasNext: Joi.boolean(),

      itemTotal: Joi.number(),

      hasPrevious: Joi.boolean(),

      size: Joi.number(),
    });
  }

  static ProductPublished() {
    return Joi.object({
      productOnlineDate: Joi.number(),

      isSet: Joi.boolean(),
    });
  }

  static UserCommon() {
    return Joi.object({
      companyId: Joi.number(),

      userId: Joi.string(),

      username: Joi.string(),
    });
  }

  static VerifiedBy() {
    return Joi.object({
      userId: Joi.string(),

      username: Joi.string(),
    });
  }

  static Attributes() {
    return Joi.object({
      pattern: Joi.string(),

      l3Mapping: Joi.array().items(Joi.string()),

      productFit: Joi.string(),

      color: Joi.string(),

      essential: Joi.string(),

      stage: Joi.string(),

      modifiedBy: this.UserCommon(),

      verifiedBy: this.VerifiedBy(),

      material: Joi.string(),

      modifiedOn: Joi.string(),

      createdBy: this.UserCommon(),

      imageNature: Joi.string(),

      gender: Joi.array().items(Joi.string()),

      isImageLessProduct: Joi.boolean(),

      metaNature: Joi.string(),

      sleeveLength: Joi.string(),

      primaryColor: Joi.string(),

      verifiedOn: Joi.string(),

      primaryMaterial: Joi.string(),

      createdOn: Joi.string(),

      neckType: Joi.string(),
    });
  }

  static Logo() {
    return Joi.object({
      url: Joi.string(),

      aspectRatioF: Joi.number(),

      aspectRatio: Joi.string(),

      secureUrl: Joi.string(),
    });
  }

  static Brand() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string(),

      logo: this.Logo(),
    });
  }

  static Product() {
    return Joi.object({
      companyId: Joi.number(),

      productPublish: this.ProductPublished(),

      isDependent: Joi.boolean(),

      sizeGuide: Joi.string(),

      attributes: this.Attributes(),

      sizes: Joi.array().items(Joi.object()),

      slug: Joi.string(),

      uid: Joi.number(),

      highlights: Joi.string(),

      hsnCode: Joi.string(),

      multiSize: Joi.boolean(),

      media: Joi.array().items(Joi.string()),

      description: Joi.string(),

      id: Joi.string(),

      categorySlug: Joi.string(),

      departments: Joi.array().items(Joi.number()),

      isActive: Joi.boolean(),

      name: Joi.string(),

      itemCode: Joi.string(),

      isSet: Joi.boolean(),

      images: Joi.array().items(Joi.string()),

      countryOfOrigin: Joi.string(),

      allSizes: Joi.array().items(Joi.string()),

      itemType: Joi.string(),

      brand: this.Brand(),

      templateTag: Joi.string(),

      currency: Joi.string(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: this.PageData(),

      items: Joi.array().items(this.Product()),
    });
  }

  static ValidateProduct() {
    return Joi.object({
      valid: Joi.boolean(),
    });
  }

  static UserInfo1() {
    return Joi.object({
      email: Joi.string(),

      uid: Joi.string(),

      userId: Joi.string(),

      username: Joi.string(),
    });
  }

  static BulkJob() {
    return Joi.object({
      total: Joi.number(),

      modifiedOn: Joi.string(),

      companyId: Joi.number(),

      createdBy: this.UserInfo1(),

      failed: Joi.number(),

      filePath: Joi.string(),

      customTemplateTag: Joi.string(),

      createdOn: Joi.string(),

      cancelledRecords: Joi.array().items(Joi.object()),

      failedRecords: Joi.array().items(Joi.object()),

      templateTag: Joi.string(),

      isActive: Joi.boolean(),

      trackingUrl: Joi.string(),

      succeed: Joi.number(),

      stage: Joi.string(),

      modifiedBy: this.UserInfo1(),

      cancelled: Joi.number(),
    });
  }

  static UserDetail() {
    return Joi.object({
      fullName: Joi.string(),

      userId: Joi.string(),

      username: Joi.string(),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      total: Joi.number(),

      companyId: Joi.number(),

      modifiedOn: Joi.string(),

      createdBy: this.UserDetail(),

      failed: Joi.number(),

      filePath: Joi.string(),

      createdOn: Joi.string(),

      template: this.ProductTemplate(),

      cancelledRecords: Joi.array().items(Joi.string()),

      failedRecords: Joi.array().items(Joi.string()),

      templateTag: Joi.string(),

      isActive: Joi.boolean(),

      succeed: Joi.number(),

      stage: Joi.string(),

      modifiedBy: this.UserDetail(),

      cancelled: Joi.number(),
    });
  }

  static ProductBulkRequestList() {
    return Joi.object({
      page: this.PageData(),

      items: this.ProductBulkRequest(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      templateTag: Joi.string(),

      companyId: Joi.number(),

      batchId: Joi.string(),

      data: Joi.array().items(Joi.object()),
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

  static ProductBulkAssets() {
    return Joi.object({
      user: Joi.object(),

      url: Joi.string(),

      companyId: Joi.number(),
    });
  }

  static Items() {
    return Joi.object({
      total: Joi.number(),

      filePath: Joi.string(),

      modifiedOn: Joi.string(),

      createdBy: this.UserCommon(),

      failed: Joi.number(),

      retry: Joi.number(),

      companyId: Joi.number(),

      id: Joi.string(),

      createdOn: Joi.string(),

      cancelledRecords: Joi.array().items(Joi.string()),

      failedRecords: Joi.array().items(Joi.string()),

      isActive: Joi.boolean(),

      trackingUrl: Joi.string(),

      succeed: Joi.number(),

      stage: Joi.string(),

      modifiedBy: this.UserCommon(),

      cancelled: Joi.number(),
    });
  }

  static BulkAssetResponse() {
    return Joi.object({
      page: this.PageData(),

      items: Joi.array().items(this.Items()),
    });
  }

  static ItemQuery() {
    return Joi.object({
      uid: Joi.number(),

      itemCode: Joi.string(),

      brandUid: Joi.number(),
    });
  }

  static GTIN() {
    return Joi.object({
      primary: Joi.boolean(),

      gtinValue: Joi.string(),

      gtinType: Joi.string(),
    });
  }

  static SetSize() {
    return Joi.object({
      pieces: Joi.number(),

      size: Joi.string(),
    });
  }

  static SizeDistribution() {
    return Joi.object({
      sizes: Joi.array().items(this.SetSize()),
    });
  }

  static InventorySet() {
    return Joi.object({
      sizeDistribution: this.SizeDistribution(),

      quantity: Joi.number(),
    });
  }

  static InvSize() {
    return Joi.object({
      itemWeightUnitOfMeasure: Joi.string(),

      itemHeight: Joi.number(),

      identifiers: Joi.array().items(this.GTIN()),

      isSet: Joi.boolean(),

      itemDimensionsUnitOfMeasure: Joi.string(),

      itemLength: Joi.number(),

      itemWeight: Joi.number(),

      price: Joi.number(),

      itemWidth: Joi.number(),

      quantity: Joi.number(),

      storeCode: Joi.string(),

      priceTransfer: Joi.number(),

      currency: Joi.string(),

      set: this.InventorySet(),

      size: Joi.string(),

      priceEffective: Joi.number(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      item: this.ItemQuery(),

      companyId: Joi.number(),

      sizes: Joi.array().items(this.InvSize()),
    });
  }

  static InventoryRequest1() {
    return Joi.object({
      pageSize: Joi.number(),

      total: Joi.number(),

      pageNo: Joi.number(),

      search: Joi.string(),

      size: Joi.string(),
    });
  }

  static CommonResponse() {
    return Joi.object({
      success: Joi.string(),
    });
  }

  static BulkRequestGet() {
    return Joi.object({
      pageSize: Joi.number(),

      total: Joi.number(),

      customTemplateTag: Joi.string(),

      pageNo: Joi.number(),

      startDate: Joi.string(),

      endDate: Joi.string(),

      templateTag: Joi.string(),

      stage: Joi.string(),

      search: Joi.string(),
    });
  }

  static Size1() {
    return Joi.object({
      itemWeightUnitOfMeasure: Joi.string(),

      itemHeight: Joi.number(),

      identifiers: Joi.array().items(Joi.object()),

      isSet: Joi.boolean(),

      itemDimensionsUnitOfMeasure: Joi.string(),

      itemLength: Joi.number(),

      itemWeight: Joi.number(),

      price: Joi.number(),

      itemWidth: Joi.number(),

      quantity: Joi.number(),

      storeCode: Joi.string(),

      priceTransfer: Joi.number(),

      currency: Joi.string(),

      set: this.InventorySet(),

      sellerIdentifier: Joi.string(),

      size: Joi.string(),

      priceEffective: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      user: Joi.object(),

      companyId: Joi.number(),

      sizes: Joi.array().items(this.Size1()),

      batchId: Joi.string(),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      brand: Joi.array().items(Joi.number()),

      store: Joi.array().items(Joi.number()),

      type: Joi.string(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      taskId: Joi.string(),

      sellerId: Joi.number(),

      triggerOn: Joi.string(),

      completedOn: Joi.string(),

      requestParams: Joi.object(),

      url: Joi.string(),

      status: Joi.string(),
    });
  }

  static FilerList() {
    return Joi.object({
      display: Joi.string(),

      value: Joi.string(),
    });
  }

  static InventoryConfig() {
    return Joi.object({
      multivalues: Joi.boolean(),

      data: Joi.array().items(this.FilerList()),
    });
  }

  static ReferralInfo() {
    return Joi.object({
      referralCode: Joi.string(),
    });
  }

  static CompanyAddress() {
    return Joi.object({
      address2: Joi.string(),

      latitude: Joi.number(),

      landmark: Joi.string(),

      pincode: Joi.number(),

      longitude: Joi.number(),

      state: Joi.string(),

      country: Joi.string(),

      countryCode: Joi.string(),

      address1: Joi.string(),

      city: Joi.string(),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string(),

      legalName: Joi.string(),

      value: Joi.string(),

      url: Joi.string(),

      verified: Joi.boolean(),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country: Joi.string(),

      countryCode: Joi.string(),
    });
  }

  static CompanyStoreSerializerRequest() {
    return Joi.object({
      brands: Joi.array().items(Joi.number()),

      franchiseEnabled: Joi.boolean(),

      referralInfo: this.ReferralInfo(),

      name: Joi.string(),

      warnings: Joi.object(),

      address: this.CompanyAddress(),

      businessType: Joi.string(),

      notificationEmails: Joi.array().items(Joi.string()),

      uid: Joi.number(),

      document: this.Document(),

      businessInfo: Joi.string(),

      businessCountryInfo: this.BusinessCountryInfo(),
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

  static ContactDetails() {
    return Joi.object({
      phone: Joi.array().items(this.PhoneNumber()),

      emails: Joi.array().items(Joi.string()),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address2: Joi.string(),

      latitude: Joi.number(),

      landmark: Joi.string(),

      pincode: Joi.number(),

      longitude: Joi.number(),

      country: Joi.string(),

      addressType: Joi.string(),

      state: Joi.string(),

      countryCode: Joi.string(),

      address1: Joi.string(),

      city: Joi.string(),
    });
  }

  static BusinessCountryInfo1() {
    return Joi.object({
      country: Joi.string(),

      countryCode: Joi.string(),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      modifiedOn: Joi.string(),

      companyType: Joi.string(),

      businessDetails: this.BusinessDetails(),

      documents: Joi.array().items(this.Document()),

      notificationEmails: Joi.array().items(Joi.string()),

      createdBy: this.UserSerializer(),

      createdOn: Joi.string(),

      warnings: Joi.object(),

      verifiedOn: Joi.string(),

      businessType: Joi.string(),

      verifiedBy: this.UserSerializer(),

      contactDetails: this.ContactDetails(),

      franchiseEnabled: Joi.boolean(),

      addresses: Joi.array().items(this.GetAddressSerializer()),

      uid: Joi.number(),

      businessInfo: Joi.string(),

      modifiedBy: this.UserSerializer(),

      name: Joi.string(),

      stage: Joi.string(),

      businessCountryInfo: this.BusinessCountryInfo1(),
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
      brand: this.DocumentsObj(),

      stage: Joi.string(),

      companyDocuments: this.DocumentsObj(),

      uid: Joi.number(),

      storeDocuments: this.DocumentsObj(),

      product: this.DocumentsObj(),

      store: this.DocumentsObj(),
    });
  }

  static BrandBannerSerializer() {
    return Joi.object({
      landscape: Joi.string(),

      portrait: Joi.string(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string(),

      username: Joi.string(),

      userId: Joi.string(),
    });
  }

  static GetBrandResponseSerializer() {
    return Joi.object({
      modifiedOn: Joi.string(),

      banner: this.BrandBannerSerializer(),

      synonyms: Joi.array().items(Joi.string()),

      logo: Joi.string(),

      customJson: Joi.object(),

      createdOn: Joi.string(),

      name: Joi.string(),

      stage: Joi.string(),

      rejectReason: Joi.string(),

      warnings: Joi.object(),

      verifiedOn: Joi.string(),

      description: Joi.string(),

      slugKey: Joi.string(),

      localeLanguage: Joi.object(),

      verifiedBy: this.UserSerializer1(),

      uid: Joi.number(),

      createdBy: this.UserSerializer1(),

      modifiedBy: this.UserSerializer1(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      banner: this.BrandBannerSerializer(),

      synonyms: Joi.array().items(Joi.string()),

      logo: Joi.string(),

      customJson: Joi.object(),

      companyId: Joi.number(),

      brandTier: Joi.string(),

      name: Joi.string(),

      localeLanguage: Joi.object(),

      description: Joi.string(),

      uid: Joi.number(),
    });
  }

  static CompanyBrandPostRequestSerializer() {
    return Joi.object({
      brands: Joi.array().items(Joi.number()),

      company: Joi.number(),

      uid: Joi.number(),
    });
  }

  static CompanyBrandListSerializer() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: Joi.object(),
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

      closing: this.LocationTimingSerializer(),

      weekday: Joi.string(),

      open: Joi.boolean(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      storeUid: Joi.number(),

      onSameStore: Joi.boolean(),
    });
  }

  static GetAddressSerializer1() {
    return Joi.object({
      address2: Joi.string(),

      latitude: Joi.number(),

      landmark: Joi.string(),

      pincode: Joi.number(),

      longitude: Joi.number(),

      country: Joi.string(),

      addressType: Joi.string(),

      state: Joi.string(),

      countryCode: Joi.string(),

      address1: Joi.string(),

      city: Joi.string(),
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
      eWaybill: this.InvoiceCredSerializer(),

      eInvoice: this.InvoiceCredSerializer(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string(),

      mobileNo: this.PhoneNumber(),

      name: Joi.string(),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      customJson: Joi.object(),

      timing: Joi.array().items(this.LocationDayWiseSerializer()),

      company: Joi.number(),

      name: Joi.string(),

      stage: Joi.string(),

      code: Joi.string(),

      productReturnConfig: this.ProductReturnConfigSerializer(),

      displayName: Joi.string(),

      storeType: Joi.string(),

      documents: Joi.array().items(this.Document()),

      address: this.GetAddressSerializer1(),

      notificationEmails: Joi.array().items(Joi.string()),

      uid: Joi.number(),

      warnings: Joi.object(),

      gstCredentials: this.InvoiceDetailsSerializer(),

      contactNumbers: Joi.array().items(this.PhoneNumber()),

      manager: this.LocationManagerSerializer(),
    });
  }

  static LocationListSerializer() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: Joi.object(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      inventory: Joi.string(),

      order: Joi.string(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      modifiedOn: Joi.string(),

      addresses: Joi.array().items(this.GetAddressSerializer()),

      createdOn: Joi.string(),

      companyType: Joi.string(),

      name: Joi.string(),

      stage: Joi.string(),

      rejectReason: Joi.string(),

      verifiedOn: Joi.string(),

      businessType: Joi.string(),

      verifiedBy: this.UserSerializer(),

      uid: Joi.number(),

      createdBy: this.UserSerializer(),

      modifiedBy: this.UserSerializer(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      modifiedOn: Joi.string(),

      integrationType: this.LocationIntegrationType(),

      productReturnConfig: this.ProductReturnConfigSerializer(),

      documents: Joi.array().items(this.Document()),

      notificationEmails: Joi.array().items(Joi.string()),

      createdBy: this.UserSerializer1(),

      createdOn: Joi.string(),

      code: Joi.string(),

      warnings: Joi.object(),

      verifiedOn: Joi.string(),

      storeType: Joi.string(),

      address: this.GetAddressSerializer(),

      verifiedBy: this.UserSerializer1(),

      phoneNumber: Joi.string(),

      contactNumbers: Joi.array().items(this.PhoneNumber()),

      manager: this.LocationManagerSerializer(),

      customJson: Joi.object(),

      company: this.GetCompanySerializer(),

      displayName: Joi.string(),

      uid: Joi.number(),

      modifiedBy: this.UserSerializer1(),

      timing: Joi.array().items(this.LocationDayWiseSerializer()),

      name: Joi.string(),

      stage: Joi.string(),

      gstCredentials: this.InvoiceDetailsSerializer(),
    });
  }

  static FailedResponse() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static CDN() {
    return Joi.object({
      url: Joi.string(),
    });
  }

  static Upload() {
    return Joi.object({
      expiry: Joi.number(),

      url: Joi.string(),
    });
  }

  static StartResponse() {
    return Joi.object({
      fileName: Joi.string(),

      filePath: Joi.string(),

      contentType: Joi.string(),

      method: Joi.string(),

      namespace: Joi.string(),

      operation: Joi.string(),

      size: Joi.number(),

      upload: this.Upload(),

      cdn: this.CDN(),
    });
  }

  static StartRequest() {
    return Joi.object({
      fileName: Joi.string(),

      contentType: Joi.string(),

      size: Joi.number(),

      tags: Joi.array().items(Joi.string()),
    });
  }

  static CompleteResponse() {
    return Joi.object({
      id: Joi.string(),

      fileName: Joi.string(),

      filePath: Joi.string(),

      contentType: Joi.string(),

      method: Joi.string(),

      namespace: Joi.string(),

      operation: Joi.string(),

      size: Joi.number(),

      upload: this.Upload(),

      cdn: this.CDN(),

      success: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      createdOn: Joi.string(),

      modifiedOn: Joi.string(),
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
      id: Joi.string(),

      name: Joi.string(),

      data: this.BulkRequest(),

      opts: this.Opts(),

      progress: Joi.number(),

      delay: Joi.number(),

      timestamp: Joi.number(),

      attemptsMade: Joi.number(),

      stacktrace: Joi.array().items(Joi.string()),

      finishedOn: Joi.number(),

      processedOn: Joi.number(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      trackingUrl: Joi.string(),

      task: this.CopyFileTask(),
    });
  }

  static ReqConfiguration() {
    return Joi.object({
      concurrency: Joi.number(),
    });
  }

  static Destination() {
    return Joi.object({
      namespace: Joi.string(),

      rewrite: Joi.string(),

      basepath: Joi.string(),
    });
  }

  static BulkRequest() {
    return Joi.object({
      urls: Joi.array().items(Joi.string()),

      destination: this.Destination(),

      configuration: this.ReqConfiguration(),
    });
  }

  static Urls() {
    return Joi.object({
      url: Joi.string(),

      signedUrl: Joi.string(),

      expiry: Joi.number(),
    });
  }

  static SignUrlResponse() {
    return Joi.object({
      urls: Joi.array().items(this.Urls()),
    });
  }

  static SignUrlRequest() {
    return Joi.object({
      expiry: Joi.number(),

      urls: Joi.array().items(Joi.string()),
    });
  }

  static DbRecord() {
    return Joi.object({
      success: Joi.boolean(),

      tags: Joi.array().items(Joi.string()),

      id: Joi.string(),

      fileName: Joi.string(),

      operation: Joi.string(),

      namespace: Joi.string(),

      contentType: Joi.string(),

      filePath: Joi.string(),

      upload: this.Upload(),

      cdn: this.CDN(),

      createdOn: Joi.string(),

      modifiedOn: Joi.string(),
    });
  }

  static BrowseResponse() {
    return Joi.object({
      items: Joi.array().items(this.DbRecord()),

      page: this.Page(),
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

      forceWeb: Joi.boolean(),
    });
  }

  static Attribution() {
    return Joi.object({
      campaignCookieExpiry: Joi.string(),
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
      title: Joi.string(),

      url: Joi.string(),

      hash: Joi.string(),

      active: Joi.boolean(),

      expireAt: Joi.string(),

      enableTracking: Joi.boolean(),

      personalized: Joi.boolean(),

      campaign: this.Campaign(),

      redirects: this.Redirects(),

      attribution: this.Attribution(),

      socialMediaTags: this.SocialMediaTags(),

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

      createdBy: Joi.string(),

      appRedirect: Joi.boolean(),

      fallback: Joi.string(),

      active: Joi.boolean(),

      id: Joi.string(),

      enableTracking: Joi.boolean(),

      expireAt: Joi.string(),

      application: Joi.string(),

      userId: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      personalized: Joi.boolean(),

      campaign: this.Campaign(),

      redirects: this.Redirects(),

      attribution: this.Attribution(),

      socialMediaTags: this.SocialMediaTags(),

      count: Joi.number(),
    });
  }

  static ShortLinkList() {
    return Joi.object({
      items: Joi.array().items(this.ShortLinkRes()),

      page: this.Page(),
    });
  }

  static Rule() {
    return Joi.object({
      min: Joi.number(),

      discountQty: Joi.number(),

      key: Joi.number(),

      value: Joi.number(),

      max: Joi.number(),
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

  static BulkBundleRestriction() {
    return Joi.object({
      multiStoreAllowed: Joi.boolean(),
    });
  }

  static PostOrder() {
    return Joi.object({
      returnAllowed: Joi.boolean(),

      cancellationAllowed: Joi.boolean(),
    });
  }

  static PaymentAllowValue() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  static PaymentModes() {
    return Joi.object({
      networks: Joi.array().items(Joi.string()),

      codes: Joi.array().items(Joi.string()),

      uses: this.PaymentAllowValue(),

      types: Joi.array().items(Joi.string()),
    });
  }

  static PaymentCodes() {
    return Joi.object({
      wl: this.PaymentModes(),

      ps: this.PaymentModes(),

      pl: this.PaymentModes(),

      card: this.PaymentModes(),

      nb: this.PaymentModes(),

      qr: this.PaymentModes(),

      upi: this.PaymentModes(),
    });
  }

  static PriceRange() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static Restrictions() {
    return Joi.object({
      uses: this.UsesRestriction(),

      bulkBundle: this.BulkBundleRestriction(),

      postOrder: this.PostOrder(),

      payments: this.PaymentCodes(),

      priceRange: this.PriceRange(),

      platforms: Joi.array().items(Joi.string()),

      couponAllowed: Joi.boolean(),

      orderingStores: Joi.array().items(Joi.number()),
    });
  }

  static CouponAction() {
    return Joi.object({
      actionDate: Joi.string(),

      txnMode: Joi.string(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static Validation() {
    return Joi.object({
      anonymous: Joi.boolean(),

      userRegisteredAfter: Joi.string(),

      appId: Joi.array().items(Joi.string()),
    });
  }

  static State() {
    return Joi.object({
      isArchived: Joi.boolean(),

      isPublic: Joi.boolean(),

      isDisplay: Joi.boolean(),
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
      subtitle: Joi.string(),

      apply: this.DisplayMetaDict(),

      remove: this.DisplayMetaDict(),

      description: Joi.string(),

      title: Joi.string(),

      auto: this.DisplayMetaDict(),
    });
  }

  static Ownership() {
    return Joi.object({
      payableCategory: Joi.string(),

      payableBy: Joi.string(),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      duration: Joi.number(),

      end: Joi.string(),

      start: Joi.string(),

      nextSchedule: Joi.array().items(Joi.object()),

      cron: Joi.string(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      createdBy: Joi.string(),

      modifiedBy: Joi.string(),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      createdOn: Joi.string(),

      modifiedOn: Joi.string(),
    });
  }

  static Identifier() {
    return Joi.object({
      collectionId: Joi.array().items(Joi.string()),

      companyId: Joi.array().items(Joi.number()),

      articleId: Joi.array().items(Joi.string()),

      userId: Joi.array().items(Joi.string()),

      brandId: Joi.array().items(Joi.number()),

      itemId: Joi.array().items(Joi.number()),

      storeId: Joi.array().items(Joi.number()),

      categoryId: Joi.array().items(Joi.number()),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      valueType: Joi.string(),

      scope: Joi.array().items(Joi.string()),

      isExact: Joi.boolean(),

      type: Joi.string(),

      applicableOn: Joi.string(),

      currencyCode: Joi.string(),

      autoApply: Joi.boolean(),

      calculateOn: Joi.string(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      rule: Joi.array().items(this.Rule()),

      restrictions: this.Restrictions(),

      action: this.CouponAction(),

      validity: this.Validity(),

      validation: this.Validation(),

      code: Joi.string(),

      state: this.State(),

      displayMeta: this.DisplayMeta(),

      ownership: this.Ownership(),

      typeSlug: Joi.string(),

      schedule: this.CouponSchedule(),

      author: this.CouponAuthor(),

      dateMeta: this.CouponDateMeta(),

      identifiers: this.Identifier(),

      ruleDefinition: this.RuleDefinition(),

      tags: Joi.array().items(Joi.string()),
    });
  }

  static CouponsResponse() {
    return Joi.object({
      items: this.CouponAdd(),

      page: this.Pagination(),
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
      rule: Joi.array().items(this.Rule()),

      restrictions: this.Restrictions(),

      action: this.CouponAction(),

      validity: this.Validity(),

      validation: this.Validation(),

      code: Joi.string(),

      state: this.State(),

      displayMeta: this.DisplayMeta(),

      ownership: this.Ownership(),

      typeSlug: Joi.string(),

      schedule: this.CouponSchedule(),

      author: this.CouponAuthor(),

      dateMeta: this.CouponDateMeta(),

      identifiers: this.Identifier(),

      ruleDefinition: this.RuleDefinition(),

      tags: Joi.array().items(Joi.string()),
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

      marketplaceStoreId: Joi.string(),

      storeId: Joi.number(),

      meta: Joi.object(),
    });
  }

  static AllChannels() {
    return Joi.object({
      mkpName: Joi.boolean(),
    });
  }

  static MyntraPayload() {
    return Joi.object({
      merchantId: Joi.string(),

      secretKey: Joi.string(),
    });
  }

  static AmazonPayload() {
    return Joi.object({
      sellerId: Joi.string(),

      mwsAuthToken: Joi.string(),
    });
  }

  static FlipkartPayload() {
    return Joi.object({
      code: Joi.string(),
    });
  }

  static TatacliqPayload() {
    return Joi.object({
      userName: Joi.string(),

      password: Joi.string(),

      merchantId: Joi.string(),
    });
  }

  static AjioPayload() {
    return Joi.object({
      username: Joi.string(),

      password: Joi.string(),

      clientIp: Joi.string(),
    });
  }

  static StoreMappingPayload() {
    return Joi.object({
      storeMappingEnabled: Joi.boolean(),

      storeMapping: Joi.array().items(this.StoreMapping()),
    });
  }

  static StatusPayload() {
    return Joi.object({
      isActive: Joi.boolean(),
    });
  }

  static StatusResp() {
    return Joi.object({
      isActive: Joi.boolean(),
    });
  }

  static SyncPayload() {
    return Joi.object({
      modifiedSince: Joi.string(),
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

      workerAssigned: Joi.string(),

      isActive: Joi.boolean(),

      storeMappingEnabled: Joi.boolean(),

      companyId: Joi.number(),

      configuration: Joi.object(),

      storeMapping: Joi.array().items(this.StoreMapping()),
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
      propertiesCartId: Joi.string(),

      contextTraitsFirstName: Joi.string(),

      contextTraitsLastName: Joi.string(),

      contextTraitsPhoneNumber: Joi.string(),

      contextTraitsEmail: Joi.string(),

      contextAppApplicationId: Joi.string(),

      propertiesBreakupValuesRawTotal: Joi.string(),

      receivedAt: this.ReceivedAt(),
    });
  }

  static AbandonCartsList() {
    return Joi.object({
      items: Joi.array().items(this.AbandonCartsDetail()),

      cartTotal: Joi.string(),

      page: this.Page(),
    });
  }

  static AbandonCartDetail() {
    return Joi.object({
      id: Joi.string(),

      userId: Joi.string(),

      cartValue: Joi.string(),

      articles: Joi.array().items(Joi.object()),

      breakup: Joi.object(),

      address: Joi.object(),
    });
  }

  static ExportJobReq() {
    return Joi.object({
      marketplaceName: Joi.string(),

      startTime: Joi.string(),

      endTime: Joi.string(),

      eventType: Joi.string(),
    });
  }

  static ExportJobRes() {
    return Joi.object({
      status: Joi.string(),

      jobId: Joi.string(),
    });
  }

  static ExportJobStatusRes() {
    return Joi.object({
      status: Joi.string(),

      jobId: Joi.string(),

      downloadUrl: Joi.string(),
    });
  }

  static GetLogsListReq() {
    return Joi.object({
      marketplaceName: Joi.string(),

      startDate: Joi.string(),

      companyId: Joi.string(),

      endDate: Joi.string(),
    });
  }

  static MkpLogsResp() {
    return Joi.object({
      startTimeIso: Joi.string(),

      endTimeIso: Joi.string(),

      eventType: Joi.string(),

      traceId: Joi.string(),

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
      marketplaceName: Joi.string(),

      startDate: Joi.string(),

      companyId: Joi.string(),

      endDate: Joi.string(),

      identifier: Joi.string(),

      identifierValue: Joi.string(),
    });
  }

  static LogInfo() {
    return Joi.object({
      id: Joi.string(),

      status: Joi.string(),

      eventType: Joi.string(),

      marketplaceName: Joi.string(),

      event: Joi.string(),

      traceId: Joi.string(),

      companyId: Joi.number(),

      brandId: Joi.number(),

      storeCode: Joi.string(),

      storeId: Joi.number(),

      itemId: Joi.number(),

      articleId: Joi.string(),

      sellerIdentifier: Joi.string(),
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
      items: any,
      filters: any,
      q: any,
      status: any,
      priority: any,
      category: any,
    }).required();
  }

  static getTicket() {
    return Joi.object({
      ticketId: any,
    }).required();
  }

  static editTicket() {
    return Joi.object({
      ticketId: any,
      body: any,
      body: Validator.EditTicketPayload().required(),
    }).required();
  }

  static createHistory() {
    return Joi.object({
      ticketId: any,
      body: any,
      body: Validator.TicketHistoryPayload().required(),
    }).required();
  }

  static getTicketHistory() {
    return Joi.object({
      ticketId: any,
    }).required();
  }

  static getCustomForm() {
    return Joi.object({
      slug: any,
    }).required();
  }

  static editCustomForm() {
    return Joi.object({
      slug: any,
      body: any,
      body: Validator.EditCustomFormPayload().required(),
    }).required();
  }

  static getCustomForms() {
    return Joi.object({}).required();
  }

  static createCustomForm() {
    return Joi.object({
      body: any,
      body: Validator.CreateCustomFormPayload().required(),
    }).required();
  }

  static getTokenForVideoRoom() {
    return Joi.object({
      uniqueName: any,
    }).required();
  }

  static getVideoParticipants() {
    return Joi.object({
      uniqueName: any,
    }).required();
  }

  static openVideoRoom() {
    return Joi.object({
      body: any,
      body: Validator.CreateVideoRoomPayload().required(),
    }).required();
  }

  static closeVideoRoom() {
    return Joi.object({
      uniqueName: any,
    }).required();
  }
}

class ThemeValidator {
  static getThemeLibrary() {
    return Joi.object({
      pageSize: any,
      pageNo: any,
    }).required();
  }

  static addToThemeLibrary() {
    return Joi.object({
      body: any,
      body: Validator.AddThemeRequestSchema().required(),
    }).required();
  }

  static applyTheme() {
    return Joi.object({
      body: any,
      body: Validator.AddThemeRequestSchema().required(),
    }).required();
  }

  static isUpgradable() {
    return Joi.object({
      themeId: any,
    }).required();
  }

  static upgradeTheme() {
    return Joi.object({
      themeId: any,
    }).required();
  }

  static getPublicThemes() {
    return Joi.object({
      pageSize: any,
      pageNo: any,
    }).required();
  }

  static createTheme() {
    return Joi.object({
      body: any,
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
      themeId: any,
    }).required();
  }

  static updateTheme() {
    return Joi.object({
      themeId: any,
      body: any,
      body: Validator.ThemesSchema().required(),
    }).required();
  }

  static deleteTheme() {
    return Joi.object({
      themeId: any,
    }).required();
  }

  static getThemeForPreview() {
    return Joi.object({
      themeId: any,
    }).required();
  }

  static publishTheme() {
    return Joi.object({
      themeId: any,
    }).required();
  }

  static unpublishTheme() {
    return Joi.object({
      themeId: any,
    }).required();
  }

  static archiveTheme() {
    return Joi.object({
      themeId: any,
    }).required();
  }

  static unarchiveTheme() {
    return Joi.object({
      themeId: any,
    }).required();
  }
}

class UserValidator {
  static getCustomers() {
    return Joi.object({
      q: any,
      pageSize: any,
      pageNo: any,
    }).required();
  }

  static searchUsers() {
    return Joi.object({
      q: any,
    }).required();
  }

  static getPlatformConfig() {
    return Joi.object({}).required();
  }

  static updatePlatformConfig() {
    return Joi.object({
      body: any,
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
      body: any,
      body: Validator.AdminAnnouncementSchema().required(),
    }).required();
  }

  static getAnnouncementById() {
    return Joi.object({
      announcementId: any,
    }).required();
  }

  static updateAnnouncement() {
    return Joi.object({
      announcementId: any,
      body: any,
      body: Validator.AdminAnnouncementSchema().required(),
    }).required();
  }

  static updateAnnouncementSchedule() {
    return Joi.object({
      announcementId: any,
      body: any,
      body: Validator.ScheduleSchema().required(),
    }).required();
  }

  static deleteAnnouncement() {
    return Joi.object({
      announcementId: any,
    }).required();
  }

  static createBlog() {
    return Joi.object({
      body: any,
      body: Validator.BlogRequest().required(),
    }).required();
  }

  static getBlogs() {
    return Joi.object({}).required();
  }

  static updateBlog() {
    return Joi.object({
      id: any,
      body: any,
      body: Validator.BlogRequest().required(),
    }).required();
  }

  static deleteBlog() {
    return Joi.object({
      id: any,
    }).required();
  }

  static getComponentById() {
    return Joi.object({
      slug: any,
    }).required();
  }

  static getFaqCategories() {
    return Joi.object({}).required();
  }

  static getFaqCategoryBySlugOrId() {
    return Joi.object({
      idOrSlug: any,
    }).required();
  }

  static createFaqCategory() {
    return Joi.object({
      body: any,
      body: Validator.CreateFaqCategoryRequestSchema().required(),
    }).required();
  }

  static updateFaqCategory() {
    return Joi.object({
      id: any,
      body: any,
      body: Validator.UpdateFaqCategoryRequestSchema().required(),
    }).required();
  }

  static deleteFaqCategory() {
    return Joi.object({
      id: any,
    }).required();
  }

  static getFaqsByCategoryIdOrSlug() {
    return Joi.object({
      idOrSlug: any,
    }).required();
  }

  static addFaq() {
    return Joi.object({
      categoryId: any,
      body: any,
      body: Validator.CreateFaqSchema().required(),
    }).required();
  }

  static updateFaq() {
    return Joi.object({
      categoryId: any,
      faqId: any,
      body: any,
      body: Validator.CreateFaqSchema().required(),
    }).required();
  }

  static deleteFaq() {
    return Joi.object({
      categoryId: any,
      faqId: any,
    }).required();
  }

  static getFaqByIdOrSlug() {
    return Joi.object({
      idOrSlug: any,
    }).required();
  }

  static getLandingPages() {
    return Joi.object({}).required();
  }

  static createLandingPage() {
    return Joi.object({
      body: any,
      body: Validator.LandingPageSchema().required(),
    }).required();
  }

  static updateLandingPage() {
    return Joi.object({
      id: any,
      body: any,
      body: Validator.LandingPageSchema().required(),
    }).required();
  }

  static deleteLandingPage() {
    return Joi.object({
      id: any,
    }).required();
  }

  static getLegalInformation() {
    return Joi.object({}).required();
  }

  static updateLegalInformation() {
    return Joi.object({
      body: any,
      body: Validator.ApplicationLegal().required(),
    }).required();
  }

  static getNavigations() {
    return Joi.object({
      devicePlatform: any,
    }).required();
  }

  static createNavigation() {
    return Joi.object({
      body: any,
      body: Validator.NavigationRequest().required(),
    }).required();
  }

  static getDefaultNavigations() {
    return Joi.object({}).required();
  }

  static getNavigationBySlug() {
    return Joi.object({
      slug: any,
      devicePlatform: any,
    }).required();
  }

  static updateNavigation() {
    return Joi.object({
      id: any,
      body: any,
      body: Validator.NavigationRequest().required(),
    }).required();
  }

  static deleteNavigation() {
    return Joi.object({
      id: any,
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
      body: any,
      body: Validator.PageRequest().required(),
    }).required();
  }

  static getPages() {
    return Joi.object({}).required();
  }

  static createPagePreview() {
    return Joi.object({
      body: any,
      body: Validator.PageRequest().required(),
    }).required();
  }

  static updatePagePreview() {
    return Joi.object({
      slug: any,
      body: any,
      body: Validator.PagePublishRequest().required(),
    }).required();
  }

  static updatePage() {
    return Joi.object({
      id: any,
      body: any,
      body: Validator.PageSchema().required(),
    }).required();
  }

  static deletePage() {
    return Joi.object({
      id: any,
    }).required();
  }

  static getPageBySlug() {
    return Joi.object({
      slug: any,
    }).required();
  }

  static getSEOConfiguration() {
    return Joi.object({}).required();
  }

  static updateSEOConfiguration() {
    return Joi.object({
      body: any,
      body: Validator.Seo().required(),
    }).required();
  }

  static getSlideshows() {
    return Joi.object({
      devicePlatform: any,
    }).required();
  }

  static createSlideshow() {
    return Joi.object({
      body: any,
      body: Validator.SlideshowRequest().required(),
    }).required();
  }

  static getSlideshowBySlug() {
    return Joi.object({
      slug: any,
      devicePlatform: any,
    }).required();
  }

  static updateSlideshow() {
    return Joi.object({
      id: any,
      body: any,
      body: Validator.SlideshowRequest().required(),
    }).required();
  }

  static deleteSlideshow() {
    return Joi.object({
      id: any,
    }).required();
  }

  static getSupportInformation() {
    return Joi.object({}).required();
  }

  static updateSupportInformation() {
    return Joi.object({
      body: any,
      body: Validator.Support().required(),
    }).required();
  }

  static createInjectableTag() {
    return Joi.object({
      body: any,
      body: Validator.CreateTagRequestSchema().required(),
    }).required();
  }

  static updateInjectableTag() {
    return Joi.object({
      body: any,
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
      body: any,
      body: Validator.CreateTagRequestSchema().required(),
    }).required();
  }

  static removeInjectableTag() {
    return Joi.object({
      body: any,
      body: Validator.RemoveHandpickedSchema().required(),
    }).required();
  }

  static editInjectableTag() {
    return Joi.object({
      tagId: any,
      body: any,
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
      body: any,
      body: Validator.CampaignReq().required(),
    }).required();
  }

  static getCampaignById() {
    return Joi.object({
      id: any,
    }).required();
  }

  static updateCampaignById() {
    return Joi.object({
      id: any,
      body: any,
      body: Validator.CampaignReq().required(),
    }).required();
  }

  static getStatsOfCampaignById() {
    return Joi.object({
      id: any,
    }).required();
  }

  static getAudiences() {
    return Joi.object({}).required();
  }

  static createAudience() {
    return Joi.object({
      body: any,
      body: Validator.AudienceReq().required(),
    }).required();
  }

  static getBigqueryHeaders() {
    return Joi.object({
      body: any,
      body: Validator.BigqueryHeadersReq().required(),
    }).required();
  }

  static getAudienceById() {
    return Joi.object({
      id: any,
    }).required();
  }

  static updateAudienceById() {
    return Joi.object({
      id: any,
      body: any,
      body: Validator.AudienceReq().required(),
    }).required();
  }

  static getNSampleRecordsFromCsv() {
    return Joi.object({
      body: any,
      body: Validator.GetNRecordsCsvReq().required(),
    }).required();
  }

  static getEmailProviders() {
    return Joi.object({}).required();
  }

  static createEmailProvider() {
    return Joi.object({
      body: any,
      body: Validator.EmailProviderReq().required(),
    }).required();
  }

  static getEmailProviderById() {
    return Joi.object({
      id: any,
    }).required();
  }

  static updateEmailProviderById() {
    return Joi.object({
      id: any,
      body: any,
      body: Validator.EmailProviderReq().required(),
    }).required();
  }

  static getEmailTemplates() {
    return Joi.object({}).required();
  }

  static createEmailTemplate() {
    return Joi.object({
      body: any,
      body: Validator.EmailTemplateReq().required(),
    }).required();
  }

  static getSystemEmailTemplates() {
    return Joi.object({}).required();
  }

  static getEmailTemplateById() {
    return Joi.object({
      id: any,
    }).required();
  }

  static updateEmailTemplateById() {
    return Joi.object({
      id: any,
      body: any,
      body: Validator.EmailTemplateReq().required(),
    }).required();
  }

  static deleteEmailTemplateById() {
    return Joi.object({
      id: any,
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
      body: any,
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
      body: any,
      body: Validator.SmsProviderReq().required(),
    }).required();
  }

  static getSmsProviderById() {
    return Joi.object({
      id: any,
    }).required();
  }

  static updateSmsProviderById() {
    return Joi.object({
      id: any,
      body: any,
      body: Validator.SmsProviderReq().required(),
    }).required();
  }

  static getSmsTemplates() {
    return Joi.object({}).required();
  }

  static createSmsTemplate() {
    return Joi.object({
      body: any,
      body: Validator.SmsTemplateReq().required(),
    }).required();
  }

  static getSmsTemplateById() {
    return Joi.object({
      id: any,
    }).required();
  }

  static updateSmsTemplateById() {
    return Joi.object({
      id: any,
      body: any,
      body: Validator.SmsTemplateReq().required(),
    }).required();
  }

  static deleteSmsTemplateById() {
    return Joi.object({
      id: any,
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
      body: any,
      body: Validator.PaymentGatewayConfigRequest().required(),
    }).required();
  }

  static updateBrandPaymentGatewayConfig() {
    return Joi.object({
      body: any,
      body: Validator.PaymentGatewayConfigRequest().required(),
    }).required();
  }

  static getPaymentModeRoutes() {
    return Joi.object({
      refresh: any,
      requestType: any,
    }).required();
  }
}

class OrderValidator {
  static trackShipmentPlatform() {
    return Joi.object({
      shipmentId: any,
    }).required();
  }

  static trackOrder() {
    return Joi.object({
      orderId: any,
    }).required();
  }

  static failedOrders() {
    return Joi.object({}).required();
  }

  static reprocessOrder() {
    return Joi.object({
      orderId: any,
    }).required();
  }
}

class CatalogValidator {
  static deleteSearchKeywords() {
    return Joi.object({
      id: any,
    }).required();
  }

  static updateSearchKeywords() {
    return Joi.object({
      id: any,
      body: any,
      body: Validator.CreateSearchKeyword().required(),
    }).required();
  }

  static getSearchKeywords() {
    return Joi.object({
      id: any,
    }).required();
  }

  static createCustomKeyword() {
    return Joi.object({
      body: any,
      body: Validator.CreateSearchKeyword().required(),
    }).required();
  }

  static getAllSearchKeyword() {
    return Joi.object({}).required();
  }

  static deleteAutocompleteKeyword() {
    return Joi.object({
      id: any,
    }).required();
  }

  static updateAutocompleteKeyword() {
    return Joi.object({
      id: any,
      body: any,
      body: Validator.CreateAutocompleteKeyword().required(),
    }).required();
  }

  static getAutocompleteKeywordDetail() {
    return Joi.object({
      id: any,
    }).required();
  }

  static createCustomAutocompleteRule() {
    return Joi.object({
      body: any,
      body: Validator.CreateAutocompleteKeyword().required(),
    }).required();
  }

  static getAutocompleteConfig() {
    return Joi.object({}).required();
  }

  static getCatalogConfiguration() {
    return Joi.object({}).required();
  }

  static createConfigurationProductListing() {
    return Joi.object({
      body: any,
      body: Validator.AppConfiguration().required(),
    }).required();
  }

  static getConfigurations() {
    return Joi.object({}).required();
  }

  static createConfigurationByType() {
    return Joi.object({
      type: any,
      body: any,
      body: Validator.AppConfiguration().required(),
    }).required();
  }

  static getConfigurationByType() {
    return Joi.object({
      type: any,
    }).required();
  }

  static getQueryFilters() {
    return Joi.object({}).required();
  }

  static createCollection() {
    return Joi.object({
      body: any,
      body: Validator.CreateCollection().required(),
    }).required();
  }

  static getAllCollections() {
    return Joi.object({}).required();
  }

  static getCollectionDetail() {
    return Joi.object({
      slug: any,
    }).required();
  }

  static deleteCollection() {
    return Joi.object({
      id: any,
    }).required();
  }

  static updateCollection() {
    return Joi.object({
      id: any,
    }).required();
  }

  static addCollectionItems() {
    return Joi.object({
      id: any,
      body: any,
      body: Validator.CollectionItemRequest().required(),
    }).required();
  }

  static getCollectionItems() {
    return Joi.object({
      id: any,
      sortOn: any,
      pageId: any,
      pageSize: any,
    }).required();
  }

  static getCatalogInsights() {
    return Joi.object({
      brand: any,
    }).required();
  }
}

class AssetsValidator {
  static appStartUpload() {
    return Joi.object({
      namespace: any,

      body: any,
      body: Validator.StartRequest().required(),
    }).required();
  }

  static appCompleteUpload() {
    return Joi.object({
      namespace: any,

      body: any,
      body: Validator.StartResponse().required(),
    }).required();
  }

  static appCopyFiles() {
    return Joi.object({
      body: any,
      sync: any,
      body: Validator.BulkRequest().required(),
    }).required();
  }

  static appBrowse() {
    return Joi.object({
      namespace: any,
    }).required();
  }
}

class ShareValidator {
  static createShortLink() {
    return Joi.object({
      body: any,
      body: Validator.ShortLinkReq().required(),
    }).required();
  }

  static getShortLinks() {
    return Joi.object({
      pageNo: any,
      pageSize: any,
      createdBy: any,
      active: any,
      q: any,
    }).required();
  }

  static getShortLinkByHash() {
    return Joi.object({
      hash: any,
    }).required();
  }

  static updateShortLinkById() {
    return Joi.object({
      id: any,
    }).required();
  }
}

class CartValidator {
  static getCoupons() {
    return Joi.object({
      pageNo: any,
      pageSize: any,
      isArchived: any,
      title: any,
      isPublic: any,
      isDisplay: any,
      typeSlug: any,
      code: any,
    }).required();
  }

  static createCoupon() {
    return Joi.object({
      body: any,
      body: Validator.CouponAdd().required(),
    }).required();
  }

  static getCouponById() {
    return Joi.object({
      id: any,
    }).required();
  }

  static updateCoupon() {
    return Joi.object({
      id: any,
      body: any,
      body: Validator.CouponUpdate().required(),
    }).required();
  }

  static updateCouponPartially() {
    return Joi.object({
      id: any,
      body: any,
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
      groupName: any,
    }).required();
  }

  static getComponentStatsCSV() {
    return Joi.object({
      componentName: any,
    }).required();
  }

  static getComponentStatsPDF() {
    return Joi.object({
      componentName: any,
    }).required();
  }

  static getComponentStats() {
    return Joi.object({
      componentName: any,
    }).required();
  }

  static getAbandonCartList() {
    return Joi.object({
      from: any,
      to: any,
      pageNo: any,
      pageSize: any,
    }).required();
  }

  static getAbandonCartsCSV() {
    return Joi.object({
      from: any,
      to: any,
    }).required();
  }

  static getAbandonCartDetail() {
    return Joi.object({
      cartId: any,
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
  CartValidator,
  AnalyticsValidator,
};
