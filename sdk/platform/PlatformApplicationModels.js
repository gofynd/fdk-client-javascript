const Joi = require("joi");
class Validator {
  static TicketList = function () {
    return Joi.object({
      items: Joi.array().items(this.Ticket()),

      filters: this.Filter(),

      page: this.Page(),
    });
  };

  static Page = function () {
    return Joi.object({
      itemTotal: Joi.number(),

      nextId: Joi.string(),

      hasPrevious: Joi.boolean(),

      hasNext: Joi.boolean(),

      current: Joi.number(),

      type: Joi.string(),

      size: Joi.number(),
    });
  };

  static TicketHistoryList = function () {
    return Joi.object({
      docs: Joi.array().items(this.TicketHistory()),

      limit: Joi.number(),

      page: Joi.number(),

      pages: Joi.number(),

      total: Joi.number(),
    });
  };

  static CustomFormList = function () {
    return Joi.object({
      docs: Joi.array().items(this.CustomForm()),

      limit: Joi.number(),

      page: Joi.number(),

      pages: Joi.number(),

      total: Joi.number(),
    });
  };

  static CreateCustomFormPayload = function () {
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
  };

  static EditCustomFormPayload = function () {
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
  };

  static EditTicketPayload = function () {
    return Joi.object({
      content: this.TicketContent(),

      category: Joi.string(),

      source: Joi.string(),

      status: Joi.string(),

      priority: Joi.string(),

      assignedTo: this.AgentChangePayload(),

      tags: Joi.array().items(Joi.string()),
    });
  };

  static AgentChangePayload = function () {
    return Joi.object({
      agentId: Joi.string(),
    });
  };

  static CreateVideoRoomResponse = function () {
    return Joi.object({
      uniqueName: Joi.string(),
    });
  };

  static CloseVideoRoomResponse = function () {
    return Joi.object({
      success: Joi.boolean(),
    });
  };

  static CreateVideoRoomPayload = function () {
    return Joi.object({
      uniqueName: Joi.string(),

      notify: Joi.array().items(Joi.object()),
    });
  };

  static Filter = function () {
    return Joi.object({
      priorities: Joi.array().items(this.Priority()),

      categories: Joi.array().items(this.TicketCategory()),

      statuses: Joi.array().items(this.Status()),

      assignees: Joi.array().items(Joi.object()),
    });
  };

  static TicketHistoryPayload = function () {
    return Joi.object({
      value: Joi.object(),

      type: Joi.string(),
    });
  };

  static CustomFormSubmissionPayload = function () {
    return Joi.object({
      response: Joi.array().items(this.KeyValue()),
    });
  };

  static KeyValue = function () {
    return Joi.object({
      key: Joi.string(),

      value: Joi.string(),
    });
  };

  static GetTokenForVideoRoomResponse = function () {
    return Joi.object({
      accessToken: Joi.string(),
    });
  };

  static GetParticipantsInsideVideoRoomResponse = function () {
    return Joi.object({
      participants: Joi.array().items(this.Participant()),
    });
  };

  static Participant = function () {
    return Joi.object({
      user: this.UserSchema(),

      identity: Joi.string(),

      status: Joi.string(),
    });
  };

  static UserSchema = function () {
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
  };

  static PhoneNumber = function () {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      phone: Joi.string(),

      countryCode: Joi.number(),
    });
  };

  static Email = function () {
    return Joi.object({
      primary: Joi.boolean(),

      verified: Joi.boolean(),

      email: Joi.string(),

      active: Joi.boolean(),
    });
  };

  static Debug = function () {
    return Joi.object({
      source: Joi.string(),

      platform: Joi.string(),
    });
  };

  static SubmitCustomFormResponse = function () {
    return Joi.object({
      ticket: this.Ticket(),
    });
  };

  static TicketContext = function () {
    return Joi.object({
      applicationId: Joi.string(),

      companyId: Joi.string(),
    });
  };

  static CreatedOn = function () {
    return Joi.object({
      userAgent: Joi.string(),
    });
  };

  static TicketAsset = function () {
    return Joi.object({
      display: Joi.string(),

      value: Joi.string(),

      type: Joi.string(),
    });
  };

  static TicketContent = function () {
    return Joi.object({
      title: Joi.string(),

      description: Joi.string(),

      attachments: Joi.array().items(this.TicketAsset()),
    });
  };

  static AddTicketPayload = function () {
    return Joi.object({
      status: Joi.string(),

      priority: Joi.string(),

      category: Joi.string(),

      content: this.TicketContent(),
    });
  };

  static Priority = function () {
    return Joi.object({
      key: Joi.string(),

      display: Joi.string(),

      color: Joi.string(),
    });
  };

  static Status = function () {
    return Joi.object({
      key: Joi.string(),

      display: Joi.string(),

      color: Joi.string(),
    });
  };

  static TicketCategory = function () {
    return Joi.object({
      key: Joi.string(),

      display: Joi.string(),

      form: this.CustomForm(),
    });
  };

  static SubmitButton = function () {
    return Joi.object({
      title: Joi.string(),

      titleColor: Joi.string(),

      backgroundColor: Joi.string(),
    });
  };

  static PollForAssignment = function () {
    return Joi.object({
      duration: Joi.number(),

      message: Joi.string(),

      successMessage: Joi.string(),

      failureMessage: Joi.string(),
    });
  };

  static CustomForm = function () {
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
  };

  static TicketHistory = function () {
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
  };

  static Ticket = function () {
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
  };

  static PaginationSchema = function () {
    return Joi.object({
      size: Joi.number(),

      itemTotal: Joi.number(),

      hasNext: Joi.boolean(),

      type: Joi.string(),

      current: Joi.number(),
    });
  };

  static ThemesListingResponseSchema = function () {
    return Joi.object({
      items: Joi.array().items(this.ThemesSchema()),

      page: this.PaginationSchema(),
    });
  };

  static AddThemeRequestSchema = function () {
    return Joi.object({
      themeId: Joi.string(),
    });
  };

  static UpgradableThemeSchema = function () {
    return Joi.object({
      parentTheme: Joi.string(),

      appliedTheme: Joi.string(),

      upgrade: Joi.boolean(),
    });
  };

  static FontsSchema = function () {
    return Joi.object({
      items: this.FontsSchemaItems(),

      kind: Joi.string(),
    });
  };

  static BlitzkriegApiErrorSchema = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static BlitzkriegNotFoundSchema = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static BlitzkriegInternalServerErrorSchema = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static FontsSchemaItems = function () {
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
  };

  static FontsSchemaItemsFiles = function () {
    return Joi.object({
      regular: Joi.string(),

      italic: Joi.string(),

      bold: Joi.string(),
    });
  };

  static ThemesSchema = function () {
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

      pages: this.Pages(),

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
  };

  static pagesSchema = function () {
    return Joi.object({
      text: Joi.string(),

      path: Joi.string(),

      type: Joi.string(),

      value: Joi.string(),

      sections: this.Sections(),
    });
  };

  static availableSectionSchema = function () {
    return Joi.object({
      blocks: this.Blocks(),

      name: Joi.string(),

      label: Joi.string(),

      props: Joi.object(),
    });
  };

  static sectionSchema = function () {
    return Joi.object({
      pageKey: Joi.string(),

      pageSections: this.PageSections(),
    });
  };

  static Information = function () {
    return Joi.object({
      images: this.Images(),

      features: Joi.array().items(Joi.string()),

      name: Joi.string(),

      description: Joi.string(),
    });
  };

  static Images = function () {
    return Joi.object({
      desktop: Joi.array().items(Joi.string()),

      android: Joi.array().items(Joi.string()),

      ios: Joi.array().items(Joi.string()),

      thumbnail: Joi.array().items(Joi.string()),
    });
  };

  static Src = function () {
    return Joi.object({
      link: Joi.string(),
    });
  };

  static AssetsSchema = function () {
    return Joi.object({
      umdJs: this.UmdJs(),

      commonJs: this.CommonJs(),

      css: this.Css(),
    });
  };

  static UmdJs = function () {
    return Joi.object({
      link: Joi.string(),
    });
  };

  static CommonJs = function () {
    return Joi.object({
      link: Joi.string(),
    });
  };

  static Css = function () {
    return Joi.object({
      link: Joi.string(),
    });
  };

  static AvailablePages = function () {
    return Joi.object({
      path: Joi.string(),

      type: Joi.string(),

      text: Joi.string(),

      value: Joi.string(),

      seo: this.Seo(),

      props: Joi.object(),

      sections: this.Sections(),
    });
  };

  static Seo = function () {
    return Joi.object({
      title: Joi.string(),

      description: Joi.string(),
    });
  };

  static Sections = function () {
    return Joi.object({
      attributes: Joi.string(),
    });
  };

  static Pages = function () {
    return Joi.object({
      collectionListing: this.pagesSchema(),

      brands: this.pagesSchema(),

      cartLanding: this.pagesSchema(),

      collections: this.pagesSchema(),

      productDescription: this.pagesSchema(),

      productListing: this.pagesSchema(),

      home: this.pagesSchema(),

      categories: this.pagesSchema(),

      compareProducts: this.pagesSchema(),

      wishlist: this.pagesSchema(),
    });
  };

  static Config = function () {
    return Joi.object({
      preset: this.Preset(),

      globalSchema: this.GlobalSchema(),

      current: Joi.string(),

      list: this.ListSchema(),
    });
  };

  static Preset = function () {
    return Joi.object({
      sections: this.sectionSchema(),
    });
  };

  static GlobalSchema = function () {
    return Joi.object({
      props: Joi.object(),
    });
  };

  static ListSchema = function () {
    return Joi.object({
      global: Joi.object(),

      page: this.ConfigPage(),

      name: Joi.string(),
    });
  };

  static Colors = function () {
    return Joi.object({
      bgColor: Joi.string(),

      primaryColor: Joi.string(),

      secondaryColor: Joi.string(),

      accentColor: Joi.string(),

      linkColor: Joi.string(),

      buttonSecondaryColor: Joi.string(),
    });
  };

  static Custom = function () {
    return Joi.object({
      props: Joi.object(),
    });
  };

  static ConfigPage = function () {
    return Joi.object({
      settings: Joi.object(),

      page: Joi.string(),
    });
  };

  static Font = function () {
    return Joi.object({
      family: Joi.string(),

      variants: this.Variants(),
    });
  };

  static Variants = function () {
    return Joi.object({
      medium: this.Medium(),

      semiBold: this.SemiBold(),

      bold: this.Bold(),

      light: this.Light(),

      regular: this.Regular(),
    });
  };

  static Medium = function () {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  };

  static SemiBold = function () {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  };

  static Bold = function () {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  };

  static Light = function () {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  };

  static Regular = function () {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  };

  static Blocks = function () {
    return Joi.object({
      type: Joi.string(),

      name: Joi.string(),

      props: this.BlocksProps(),
    });
  };

  static BlocksProps = function () {
    return Joi.object({
      id: Joi.string(),

      label: Joi.string(),

      type: Joi.string(),
    });
  };

  static PageSections = function () {
    return Joi.object({
      blocks: this.PageSectionsBlocks(),

      name: Joi.string(),

      label: Joi.string(),

      props: Joi.object(),

      preset: Joi.object(),

      predicate: this.Predicate(),
    });
  };

  static PageSectionsBlocks = function () {
    return Joi.object({
      type: Joi.string(),

      name: Joi.string(),

      props: this.PageSectionsBlocksProps(),
    });
  };

  static PageSectionsBlocksProps = function () {
    return Joi.object({
      id: Joi.string(),

      label: Joi.string(),

      type: Joi.string(),
    });
  };

  static Predicate = function () {
    return Joi.object({
      screen: this.Screen(),

      user: this.PredicateUserSchema(),

      route: this.Route(),
    });
  };

  static Screen = function () {
    return Joi.object({
      mobile: Joi.boolean(),

      desktop: Joi.boolean(),

      tablet: Joi.boolean(),
    });
  };

  static PredicateUserSchema = function () {
    return Joi.object({
      authenticated: Joi.boolean(),

      anonymous: Joi.boolean(),
    });
  };

  static Route = function () {
    return Joi.object({
      selected: Joi.string(),

      exactUrl: Joi.string(),

      query: Joi.object(),
    });
  };

  static EditEmailRequestSchema = function () {
    return Joi.object({
      email: Joi.string(),
    });
  };

  static SendVerificationLinkMobileRequestSchema = function () {
    return Joi.object({
      verified: Joi.boolean(),

      active: Joi.boolean(),

      countryCode: Joi.string(),

      phone: Joi.string(),

      primary: Joi.boolean(),
    });
  };

  static EditMobileRequestSchema = function () {
    return Joi.object({
      countryCode: Joi.string(),

      phone: Joi.string(),
    });
  };

  static EditProfileRequestSchema = function () {
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
  };

  static SendEmailOtpRequestSchema = function () {
    return Joi.object({
      email: Joi.string(),

      action: Joi.string(),

      token: Joi.string(),

      registerToken: Joi.string(),
    });
  };

  static VerifyOtpRequestSchema = function () {
    return Joi.object({
      requestId: Joi.string(),

      registerToken: Joi.string(),

      otp: Joi.string(),
    });
  };

  static SendMobileOtpRequestSchema = function () {
    return Joi.object({
      mobile: Joi.string(),

      countryCode: Joi.string(),

      action: Joi.string(),

      token: Joi.string(),

      androidHash: Joi.string(),

      force: Joi.string(),
    });
  };

  static UpdatePasswordRequestSchema = function () {
    return Joi.object({
      oldPassword: Joi.string(),

      newPassword: Joi.string(),
    });
  };

  static FormRegisterRequestSchema = function () {
    return Joi.object({
      firstName: Joi.string(),

      lastName: Joi.string(),

      gender: Joi.string(),

      email: Joi.string(),

      password: Joi.string(),

      phone: this.FormRegisterRequestSchemaPhone(),

      registerToken: Joi.string(),
    });
  };

  static TokenRequestBodySchema = function () {
    return Joi.object({
      token: Joi.string(),
    });
  };

  static ForgotPasswordRequestSchema = function () {
    return Joi.object({
      code: Joi.string(),

      password: Joi.string(),
    });
  };

  static CodeRequestBodySchema = function () {
    return Joi.object({
      code: Joi.string(),
    });
  };

  static SendResetPasswordEmailRequestSchema = function () {
    return Joi.object({
      email: Joi.string(),

      gRecaptchaResponse: Joi.string(),
    });
  };

  static PasswordLoginRequestSchema = function () {
    return Joi.object({
      gRecaptchaResponse: Joi.string(),

      password: Joi.string(),

      username: Joi.string(),
    });
  };

  static SendOtpRequestSchema = function () {
    return Joi.object({
      countryCode: Joi.string(),

      gRecaptchaResponse: Joi.string(),

      mobile: Joi.string(),
    });
  };

  static OAuthRequestSchema = function () {
    return Joi.object({
      isSignedIn: Joi.boolean(),

      oauth2: this.OAuthRequestSchemaOauth2(),

      profile: this.OAuthRequestSchemaProfile(),
    });
  };

  static AuthSuccess = function () {
    return Joi.object({
      registerToken: Joi.string(),

      userExists: Joi.boolean(),

      user: this.AuthSuccessUser(),
    });
  };

  static SendOtpResponse = function () {
    return Joi.object({
      resendTimer: Joi.number(),

      resendToken: Joi.string(),

      success: Joi.boolean(),

      requestId: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      countryCode: Joi.string(),
    });
  };

  static LoginSuccess = function () {
    return Joi.object({
      user: this.UserSchema(),
    });
  };

  static VerifyOtpSuccess = function () {
    return Joi.object({
      user: this.UserSchema(),

      userExists: Joi.boolean(),
    });
  };

  static ResetPasswordSuccess = function () {
    return Joi.object({
      status: Joi.string(),
    });
  };

  static RegisterFormSuccess = function () {
    return Joi.object({
      resendTimer: Joi.number(),

      resendToken: Joi.string(),

      success: Joi.boolean(),

      requestId: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      countryCode: Joi.string(),
    });
  };

  static VerifyEmailSuccess = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static HasPasswordSuccess = function () {
    return Joi.object({
      result: Joi.boolean(),
    });
  };

  static LogoutSuccess = function () {
    return Joi.object({
      logout: Joi.boolean(),
    });
  };

  static OtpSuccess = function () {
    return Joi.object({
      resendTimer: Joi.number(),

      resendToken: Joi.string(),

      success: Joi.boolean(),

      requestId: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      countryCode: Joi.string(),
    });
  };

  static EmailOtpSuccess = function () {
    return Joi.object({
      resendToken: Joi.string(),
    });
  };

  static SessionListSuccess = function () {
    return Joi.object({
      sessions: Joi.array().items(Joi.string()),
    });
  };

  static VerifyMobileOTPSuccess = function () {
    return Joi.object({
      user: this.UserSchema(),

      verifyMobileLink: Joi.boolean(),
    });
  };

  static VerifyEmailOTPSuccess = function () {
    return Joi.object({
      user: this.UserSchema(),

      verifyEmailLink: Joi.boolean(),
    });
  };

  static SendMobileVerifyLinkSuccess = function () {
    return Joi.object({
      verifyMobileLink: Joi.boolean(),
    });
  };

  static SendEmailVerifyLinkSuccess = function () {
    return Joi.object({
      verifyEmailLink: Joi.boolean(),
    });
  };

  static UserSearchResponseSchema = function () {
    return Joi.object({
      users: Joi.array().items(this.UserSchema()),
    });
  };

  static CustomerListResponseSchema = function () {
    return Joi.object({
      items: Joi.array().items(this.UserSchema()),

      page: this.PaginationSchema(),
    });
  };

  static UnauthorizedSchema = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static UnauthenticatedSchema = function () {
    return Joi.object({
      authenticated: Joi.boolean(),
    });
  };

  static NotFoundSchema = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static AuthenticationApiErrorSchema = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static ProfileEditSuccessSchema = function () {
    return Joi.object({
      email: Joi.string(),

      verifyEmailOtp: Joi.boolean(),

      verifyEmailLink: Joi.boolean(),

      verifyMobileOtp: Joi.boolean(),

      user: Joi.string(),

      registerToken: Joi.string(),

      userExists: Joi.boolean(),
    });
  };

  static FormRegisterRequestSchemaPhone = function () {
    return Joi.object({
      countryCode: Joi.string(),

      mobile: Joi.string(),
    });
  };

  static OAuthRequestSchemaOauth2 = function () {
    return Joi.object({
      accessToken: Joi.string(),

      expiry: Joi.number(),

      refreshToken: Joi.string(),
    });
  };

  static OAuthRequestSchemaProfile = function () {
    return Joi.object({
      lastName: Joi.string(),

      image: Joi.string(),

      id: Joi.string(),

      email: Joi.string(),

      fullName: Joi.string(),

      firstName: Joi.string(),
    });
  };

  static AuthSuccessUser = function () {
    return Joi.object({
      firstName: Joi.string(),

      lastName: Joi.string(),

      debug: this.AuthSuccessUserDebug(),

      active: Joi.boolean(),

      emails: this.AuthSuccessUserEmails(),
    });
  };

  static AuthSuccessUserDebug = function () {
    return Joi.object({
      platform: Joi.string(),
    });
  };

  static AuthSuccessUserEmails = function () {
    return Joi.object({
      email: Joi.string(),

      verified: Joi.boolean(),

      primary: Joi.boolean(),

      active: Joi.boolean(),
    });
  };

  static PlatformSchema = function () {
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
  };

  static LookAndFeel = function () {
    return Joi.object({
      cardPosition: Joi.string(),

      backgroundColor: Joi.string(),
    });
  };

  static Login = function () {
    return Joi.object({
      password: Joi.boolean(),

      otp: Joi.boolean(),
    });
  };

  static MetaSchema = function () {
    return Joi.object({
      fyndDefault: Joi.boolean(),
    });
  };

  static Social = function () {
    return Joi.object({
      accountKit: Joi.boolean(),

      facebook: Joi.boolean(),

      google: Joi.boolean(),
    });
  };

  static RequiredFields = function () {
    return Joi.object({
      email: this.Email(),

      mobile: this.Mobile(),
    });
  };

  static Mobile = function () {
    return Joi.object({
      isRequired: Joi.boolean(),

      level: Joi.string(),
    });
  };

  static RegisterRequiredFields = function () {
    return Joi.object({
      email: this.RegisterRequiredFieldsEmail(),

      mobile: this.RegisterRequiredFieldsMobile(),
    });
  };

  static RegisterRequiredFieldsEmail = function () {
    return Joi.object({
      isRequired: Joi.boolean(),

      level: Joi.string(),
    });
  };

  static RegisterRequiredFieldsMobile = function () {
    return Joi.object({
      isRequired: Joi.boolean(),

      level: Joi.string(),
    });
  };

  static FlashCard = function () {
    return Joi.object({
      text: Joi.string(),

      textColor: Joi.string(),

      backgroundColor: Joi.string(),
    });
  };

  static SocialTokens = function () {
    return Joi.object({
      facebook: this.Facebook(),

      accountKit: this.Accountkit(),

      google: this.Google(),
    });
  };

  static Facebook = function () {
    return Joi.object({
      appId: Joi.string(),
    });
  };

  static Accountkit = function () {
    return Joi.object({
      appId: Joi.string(),
    });
  };

  static Google = function () {
    return Joi.object({
      appId: Joi.string(),
    });
  };

  static PaymentGatewayConfigResponse = function () {
    return Joi.object({
      success: Joi.boolean(),

      appId: Joi.string(),

      displayFields: Joi.array().items(Joi.string()),

      created: Joi.boolean(),

      aggregators: Joi.array().items(Joi.object()),

      excludedFields: Joi.array().items(Joi.string()),
    });
  };

  static ErrorCodeDescription = function () {
    return Joi.object({
      code: Joi.string(),

      success: Joi.boolean(),

      description: Joi.string(),
    });
  };

  static PaymentGatewayConfig = function () {
    return Joi.object({
      merchantSalt: Joi.string(),

      isActive: Joi.boolean(),

      configType: Joi.string(),

      key: Joi.string(),

      secret: Joi.string(),
    });
  };

  static PaymentGatewayConfigRequest = function () {
    return Joi.object({
      isActive: Joi.boolean(),

      aggregatorName: this.PaymentGatewayConfig(),

      appId: Joi.string(),
    });
  };

  static PaymentGatewayToBeReviewed = function () {
    return Joi.object({
      aggregator: Joi.array().items(Joi.string()),

      success: Joi.boolean(),
    });
  };

  static ErrorCodeAndDescription = function () {
    return Joi.object({
      code: Joi.string(),

      description: Joi.string(),
    });
  };

  static HttpErrorCodeAndResponse = function () {
    return Joi.object({
      success: Joi.boolean(),

      error: this.ErrorCodeAndDescription(),
    });
  };

  static PaymentModeLogo = function () {
    return Joi.object({
      large: Joi.string(),

      small: Joi.string(),
    });
  };

  static PaymentModeList = function () {
    return Joi.object({
      expYear: Joi.number(),

      cardIsin: Joi.string(),

      intentFlow: Joi.string(),

      cardNumber: Joi.string(),

      merchantCode: Joi.string(),

      cardBrand: Joi.string(),

      cardIssuer: Joi.string(),

      fyndVpa: Joi.string(),

      expMonth: Joi.number(),

      cardReference: Joi.string(),

      displayPriority: Joi.number(),

      cardId: Joi.string(),

      displayName: Joi.string(),

      aggregatorName: Joi.string(),

      timeout: Joi.number(),

      intentAppErrorList: Joi.array().items(Joi.string()),

      cardBrandImage: Joi.string(),

      cardType: Joi.string(),

      expired: Joi.boolean(),

      retryCount: Joi.number(),

      cardToken: Joi.string(),

      cardName: Joi.string(),

      cardFingerprint: Joi.string(),

      code: Joi.string(),

      logoUrl: this.PaymentModeLogo(),

      name: Joi.string(),

      nickname: Joi.string(),
    });
  };

  static RootPaymentMode = function () {
    return Joi.object({
      addCardEnabled: Joi.boolean(),

      list: Joi.array().items(this.PaymentModeList()),

      displayPriority: Joi.number(),

      displayName: Joi.string(),

      name: Joi.string(),

      anonymousEnable: Joi.boolean(),

      aggregatorName: Joi.string(),
    });
  };

  static PaymentOptions = function () {
    return Joi.object({
      paymentOption: Joi.array().items(this.RootPaymentMode()),
    });
  };

  static PaymentOptionsResponse = function () {
    return Joi.object({
      paymentOptions: this.PaymentOptions(),

      success: Joi.boolean(),
    });
  };

  static PayoutsResponse = function () {
    return Joi.object({
      payoutsAggregators: Joi.array().items(Joi.object()),

      isActive: Joi.boolean(),

      isDefault: Joi.boolean(),

      uniqueTransferNo: Joi.object(),

      moreAttributes: Joi.object(),

      customers: Joi.object(),

      transferType: Joi.string(),
    });
  };

  static PayoutRequest = function () {
    return Joi.object({
      aggregator: Joi.string(),

      isActive: Joi.boolean(),

      bankDetails: Joi.object(),

      users: Joi.object(),

      uniqueExternalId: Joi.string(),

      transferType: Joi.string(),
    });
  };

  static PayoutResponse = function () {
    return Joi.object({
      aggregator: Joi.string(),

      success: Joi.boolean(),

      isActive: Joi.boolean(),

      bankDetails: Joi.object(),

      payouts: Joi.object(),

      uniqueTransferNo: Joi.string(),

      users: Joi.object(),

      paymentStatus: Joi.string(),

      created: Joi.boolean(),

      transferType: Joi.string(),
    });
  };

  static UpdatePayoutResponse = function () {
    return Joi.object({
      success: Joi.boolean(),

      isActive: Joi.boolean(),

      isDefault: Joi.boolean(),
    });
  };

  static UpdatePayoutRequest = function () {
    return Joi.object({
      uniqueExternalId: Joi.string(),

      isActive: Joi.boolean(),

      isDefault: Joi.boolean(),
    });
  };

  static DeletePayoutResponse = function () {
    return Joi.object({
      success: Joi.boolean(),
    });
  };

  static SubscriptionPaymentMethodResponse = function () {
    return Joi.object({
      success: Joi.boolean(),

      data: Joi.array().items(Joi.object()),
    });
  };

  static DeleteSubscriptionPaymentMethodResponse = function () {
    return Joi.object({
      success: Joi.boolean(),
    });
  };

  static SubscriptionConfigResponse = function () {
    return Joi.object({
      aggregator: Joi.string(),

      success: Joi.boolean(),

      config: Joi.object(),
    });
  };

  static SaveSubscriptionSetupIntentRequest = function () {
    return Joi.object({
      uniqueExternalId: Joi.string(),
    });
  };

  static SaveSubscriptionSetupIntentResponse = function () {
    return Joi.object({
      success: Joi.boolean(),

      data: Joi.object(),
    });
  };

  static GetActivityStatus = function () {
    return Joi.object({
      activityHistory: this.ActivityHistory(),
    });
  };

  static ActivityHistory = function () {
    return Joi.object({
      createdat: Joi.string(),

      message: Joi.string(),

      type: Joi.string(),

      user: Joi.string(),
    });
  };

  static FailedOrders = function () {
    return Joi.object({
      orders: this.FailOrder(),
    });
  };

  static FailOrder = function () {
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
  };

  static MarketplaceOrder = function () {
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
  };

  static TotalDiscountsSet = function () {
    return Joi.object({
      presentmentMoney: this.PresentmentMoney(),

      shopMoney: this.ShopMoney(),
    });
  };

  static PresentmentMoney = function () {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  };

  static ShopMoney = function () {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  };

  static TotalPriceSet = function () {
    return Joi.object({
      shopMoney: this.TotalPriceSetShopMoney(),

      presentmentMoney: this.TotalPriceSetPresentmentMoney(),
    });
  };

  static TotalPriceSetShopMoney = function () {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  };

  static TotalPriceSetPresentmentMoney = function () {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  };

  static TotalTaxSet = function () {
    return Joi.object({
      shopMoney: this.TotalTaxSetShopMoney(),

      presentmentMoney: this.TotalTaxSetPresentmentMoney(),
    });
  };

  static TotalTaxSetShopMoney = function () {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  };

  static TotalTaxSetPresentmentMoney = function () {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  };

  static SubtotalPriceSet = function () {
    return Joi.object({
      shopMoney: this.SubtotalPriceSetShopMoney(),

      presentmentMoney: this.SubtotalPriceSetPresentmentMoney(),
    });
  };

  static SubtotalPriceSetShopMoney = function () {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  };

  static SubtotalPriceSetPresentmentMoney = function () {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  };

  static LineItems = function () {
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
  };

  static LineItemsArticle = function () {
    return Joi.object({
      quantities: this.Quantities(),

      oldArticleUid: Joi.string(),

      totalQuantity: Joi.number(),

      manufacturer: this.Manufacturer(),

      price: this.ArticlePrice(),

      trackInventory: Joi.boolean(),

      company: this.Company(),

      isActive: Joi.boolean(),

      dateMeta: this.DateMeta(),

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

      identifier: this.Identifier(),

      sellerIdentifier: Joi.string(),

      fyndItemCode: Joi.string(),

      countryOfOrigin: Joi.string(),
    });
  };

  static Quantities = function () {
    return Joi.object({
      notAvailable: this.NotAvailable(),

      sellable: this.Sellable(),

      orderCommitted: this.OrderCommitted(),

      damaged: this.Damaged(),
    });
  };

  static NotAvailable = function () {
    return Joi.object({
      count: Joi.number(),

      updatedAt: Joi.string(),
    });
  };

  static Sellable = function () {
    return Joi.object({
      count: Joi.number(),

      updatedAt: Joi.string(),
    });
  };

  static OrderCommitted = function () {
    return Joi.object({
      count: Joi.number(),

      updatedAt: Joi.string(),
    });
  };

  static Damaged = function () {
    return Joi.object({
      updatedAt: Joi.string(),

      count: Joi.number(),
    });
  };

  static Manufacturer = function () {
    return Joi.object({
      isDefault: Joi.boolean(),

      address: Joi.string(),

      name: Joi.string(),
    });
  };

  static ArticlePrice = function () {
    return Joi.object({
      marked: Joi.number(),

      currency: Joi.string(),

      effective: Joi.number(),

      transfer: Joi.number(),
    });
  };

  static Company = function () {
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
  };

  static DateMeta = function () {
    return Joi.object({
      addedOnStore: Joi.string(),

      inventoryUpdatedOn: Joi.string(),

      createdOn: Joi.string(),

      modifiedOn: Joi.string(),
    });
  };

  static MarketplaceIdentifiers = function () {
    return Joi.object({
      tatacliqLuxury: this.TatacliqLuxury(),
    });
  };

  static TatacliqLuxury = function () {
    return Joi.object({
      sku: Joi.string(),
    });
  };

  static Dimension = function () {
    return Joi.object({
      height: Joi.number(),

      width: Joi.number(),

      unit: Joi.string(),

      length: Joi.number(),

      isDefault: Joi.boolean(),
    });
  };

  static Weight = function () {
    return Joi.object({
      isDefault: Joi.boolean(),

      unit: Joi.string(),

      shipping: Joi.number(),
    });
  };

  static Store = function () {
    return Joi.object({
      id: Joi.number(),
    });
  };

  static ArticleMeta = function () {
    return Joi.object({
      service: Joi.string(),
    });
  };

  static ArticleBrand = function () {
    return Joi.object({
      name: Joi.string(),

      id: Joi.number(),
    });
  };

  static Identifier = function () {
    return Joi.object({
      skuCode: Joi.string(),
    });
  };

  static PriceSet = function () {
    return Joi.object({
      shopMoney: this.PriceSetShopMoney(),

      presentmentMoney: this.PriceSetPresentmentMoney(),
    });
  };

  static PriceSetShopMoney = function () {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  };

  static PriceSetPresentmentMoney = function () {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  };

  static TaxLines = function () {
    return Joi.object({
      title: Joi.string(),

      price: Joi.string(),

      rate: Joi.number(),

      priceSet: this.TaxLinesPriceSet(),
    });
  };

  static TaxLinesPriceSet = function () {
    return Joi.object({
      shopMoney: this.TaxLinesPriceSetShopMoney(),

      presentmentMoney: this.TaxLinesPriceSetPresentmentMoney(),
    });
  };

  static TaxLinesPriceSetShopMoney = function () {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  };

  static TaxLinesPriceSetPresentmentMoney = function () {
    return Joi.object({
      currencyCode: Joi.string(),

      amount: Joi.string(),
    });
  };

  static TotalDiscountSet = function () {
    return Joi.object({
      presentmentMoney: this.TotalDiscountSetPresentmentMoney(),

      shopMoney: this.TotalDiscountSetShopMoney(),
    });
  };

  static TotalDiscountSetPresentmentMoney = function () {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  };

  static TotalDiscountSetShopMoney = function () {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  };

  static BillingAddress = function () {
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
  };

  static TotalShippingPriceSet = function () {
    return Joi.object({
      shopMoney: this.TotalShippingPriceSetShopMoney(),

      presentmentMoney: this.TotalShippingPriceSetPresentmentMoney(),
    });
  };

  static TotalShippingPriceSetShopMoney = function () {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  };

  static TotalShippingPriceSetPresentmentMoney = function () {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  };

  static Customer = function () {
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
  };

  static DefaultAddress = function () {
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
  };

  static TotalLineItemsPriceSet = function () {
    return Joi.object({
      shopMoney: this.TotalLineItemsPriceSetShopMoney(),

      presentmentMoney: this.TotalLineItemsPriceSetPresentmentMoney(),
    });
  };

  static TotalLineItemsPriceSetShopMoney = function () {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  };

  static TotalLineItemsPriceSetPresentmentMoney = function () {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  };

  static ShippingAddress = function () {
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
  };

  static OrderListing = function () {
    return Joi.object({
      items: Joi.array().items(this.OrderItems()),

      filters: this.Filters(),

      nextOrderStatus: this.NextOrderStatus(),

      page: this.PlatformOrderPage(),

      appliedFilters: this.AppliedFilters(),
    });
  };

  static OrderItems = function () {
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
  };

  static PlatformOrderUserInfo = function () {
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
  };

  static PlatformDeliveryAddress = function () {
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
  };

  static Channel = function () {
    return Joi.object({
      name: Joi.string(),

      logo: Joi.string(),
    });
  };

  static PlatformBreakupValues = function () {
    return Joi.object({
      display: Joi.string(),

      value: Joi.number(),

      name: Joi.string(),
    });
  };

  static PlatformApplication = function () {
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
  };

  static ArticleAssignment = function () {
    return Joi.object({
      strategy: Joi.string(),

      level: Joi.string(),
    });
  };

  static PlatformShipment = function () {
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
  };

  static PlatformShipmentStatus = function () {
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
  };

  static Bags = function () {
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
  };

  static BagFinancialBreakup = function () {
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
  };

  static Identifiers = function () {
    return Joi.object({
      ean: Joi.string(),
    });
  };

  static BagCurrStatus = function () {
    return Joi.object({
      enableTracking: Joi.boolean(),

      isCustomerReturnAllowed: Joi.boolean(),

      isActive: Joi.boolean(),

      isReturnable: Joi.boolean(),

      canBeCancelled: Joi.boolean(),
    });
  };

  static BagItem = function () {
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
  };

  static BagItemAttributes = function () {
    return Joi.object({
      itemCode: Joi.string(),

      brandName: Joi.string(),

      countryOfOrigin: Joi.string(),
    });
  };

  static BagArticle = function () {
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
  };

  static ArticleIdentifiers = function () {
    return Joi.object({
      ean: Joi.string(),
    });
  };

  static Set = function () {
    return Joi.object({
      quantity: Joi.number(),

      sizeDistribution: this.SetSizeDistribution(),
    });
  };

  static SetSizeDistribution = function () {
    return Joi.object({
      sizes: this.Sizes(),
    });
  };

  static Sizes = function () {
    return Joi.object({
      size: Joi.string(),

      pieces: Joi.number(),
    });
  };

  static BagArticleReturnConfig = function () {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string(),

      returnable: Joi.boolean(),
    });
  };

  static ShipmentPrices = function () {
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
  };

  static GstDetails = function () {
    return Joi.object({
      brandCalculatedAmount: Joi.number(),

      gstFee: Joi.string(),

      gstTag: Joi.string(),

      hsnCode: Joi.string(),

      valueOfGood: Joi.number(),

      gstTaxPercentage: Joi.number(),

      isDefaultHsnCode: Joi.boolean(),
    });
  };

  static BagBreakupValues = function () {
    return Joi.object({
      name: Joi.string(),

      display: Joi.string(),

      value: Joi.number(),
    });
  };

  static BagCurrentStatus = function () {
    return Joi.object({
      updatedAt: Joi.string(),

      bagStateMapper: this.BagStateMapper(),

      status: Joi.string(),

      stateType: Joi.string(),
    });
  };

  static BagStateMapper = function () {
    return Joi.object({
      appStateName: Joi.string(),

      isActive: Joi.boolean(),

      displayName: Joi.string(),

      name: Joi.string(),

      appDisplayName: Joi.string(),
    });
  };

  static BagStatus = function () {
    return Joi.object({
      status: Joi.string(),

      stateType: Joi.string(),

      updatedAt: Joi.string(),

      bagStateMapper: this.BagStatusBagStateMapper(),
    });
  };

  static BagStatusBagStateMapper = function () {
    return Joi.object({
      isActive: Joi.boolean(),

      displayName: Joi.string(),

      name: Joi.string(),

      appDisplayName: Joi.string(),

      appStateName: Joi.string(),
    });
  };

  static BagPrices = function () {
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
  };

  static ShipmentBreakupValues = function () {
    return Joi.object({
      name: Joi.string(),

      display: Joi.string(),

      value: Joi.number(),
    });
  };

  static DpDetails = function () {
    return Joi.object({
      gstTag: Joi.string(),
    });
  };

  static ShipmentInvoice = function () {
    return Joi.object({
      paymentType: Joi.string(),

      updatedDate: Joi.string(),

      invoiceUrl: Joi.string(),

      labelUrl: Joi.string(),

      paymentMode: Joi.string(),

      amountToCollect: Joi.number(),

      rtoAddress: this.RtoAddress(),
    });
  };

  static RtoAddress = function () {
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
  };

  static StoreAddressJson = function () {
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
  };

  static PlatformFulfillingStore = function () {
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
  };

  static FulfillingStoreMeta = function () {
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
  };

  static AdditionalContactDetails = function () {
    return Joi.object({
      number: Joi.array().items(Joi.string()),
    });
  };

  static Documents = function () {
    return Joi.object({
      gst: this.Gst(),
    });
  };

  static Gst = function () {
    return Joi.object({
      legalName: Joi.string(),

      type: Joi.string(),

      value: Joi.string(),

      verified: Joi.boolean(),
    });
  };

  static ProductReturnConfig = function () {
    return Joi.object({
      onSameStore: Joi.boolean(),
    });
  };

  static Timing = function () {
    return Joi.object({
      opening: this.Opening(),

      weekday: Joi.string(),

      open: Joi.boolean(),

      closing: this.Closing(),
    });
  };

  static Opening = function () {
    return Joi.object({
      minute: Joi.number(),

      hour: Joi.number(),
    });
  };

  static Closing = function () {
    return Joi.object({
      hour: Joi.number(),

      minute: Joi.number(),
    });
  };

  static FulfillingStoreStoreAddressJson = function () {
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
  };

  static Payments = function () {
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
  };

  static ShipmentGst = function () {
    return Joi.object({
      brandCalculatedAmount: Joi.number(),

      valueOfGood: Joi.number(),

      gstFee: Joi.number(),
    });
  };

  static PlatformShipmentBrand = function () {
    return Joi.object({
      creditNoteAllowed: Joi.boolean(),

      brandName: Joi.string(),

      modifiedOn: Joi.string(),

      id: Joi.number(),

      isVirtualInvoice: Joi.boolean(),

      createdOn: Joi.string(),

      logo: Joi.string(),
    });
  };

  static Promise = function () {
    return Joi.object({
      timestamp: this.Timestamp(),
    });
  };

  static Timestamp = function () {
    return Joi.object({
      min: Joi.string(),

      max: Joi.string(),
    });
  };

  static ShipmentTrackingDetails = function () {
    return Joi.object({
      status: Joi.string(),

      time: Joi.string(),

      isPassed: Joi.boolean(),

      isCurrent: Joi.boolean(),
    });
  };

  static ShipmentUser = function () {
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
  };

  static ItemsPayments = function () {
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
  };

  static Filters = function () {
    return Joi.object({
      stages: this.Stages(),
    });
  };

  static Stages = function () {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),

      isDefault: Joi.boolean(),

      filters: this.StagesFilters(),
    });
  };

  static StagesFilters = function () {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),

      type: Joi.string(),

      options: this.Options(),
    });
  };

  static Options = function () {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  };

  static NextOrderStatus = function () {
    return Joi.object({
      bagConfirmed: this.BagConfirmed(),

      dpAssigned: this.DpAssigned(),

      returnBagDelivered: this.ReturnBagDelivered(),

      placed: this.Placed(),

      deliveryDone: this.DeliveryDone(),

      pending: this.Pending(),

      bagPacked: this.BagPacked(),
    });
  };

  static BagConfirmed = function () {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  };

  static DpAssigned = function () {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  };

  static ReturnBagDelivered = function () {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  };

  static Placed = function () {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  };

  static DeliveryDone = function () {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  };

  static Pending = function () {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  };

  static BagPacked = function () {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  };

  static PlatformOrderPage = function () {
    return Joi.object({
      next: Joi.string(),

      previous: Joi.string(),

      type: Joi.string(),

      size: Joi.number(),

      current: Joi.number(),

      hasNext: Joi.boolean(),

      itemTotal: this.ItemTotal(),
    });
  };

  static ItemTotal = function () {
    return Joi.object({
      new: Joi.number(),

      processing: Joi.number(),

      returns: Joi.number(),

      all: Joi.number(),
    });
  };

  static AppliedFilters = function () {
    return Joi.object({
      stage: Joi.string(),

      stores: Joi.array().items(Joi.string()),

      fromDate: Joi.string(),

      toDate: Joi.string(),
    });
  };

  static UpdateOrderReprocessResponse = function () {
    return Joi.object({
      status: Joi.string(),
    });
  };

  static PlatformOrderTrack = function () {
    return Joi.object({
      success: Joi.boolean(),

      requestId: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      countryCode: Joi.string(),

      resendTimer: Joi.number(),

      resendToken: Joi.string(),
    });
  };

  static GetPingResponse = function () {
    return Joi.object({
      ping: Joi.string(),
    });
  };

  static UpdateShipmentStatusResponse = function () {
    return Joi.object({
      shipments: Joi.object(),

      errorShipments: Joi.array().items(any),
    });
  };

  static UpdateShipmentStatusBody = function () {
    return Joi.object({
      shipments: Joi.object(),

      forceTransition: Joi.boolean(),

      task: Joi.boolean(),
    });
  };

  static PlatformShipmentTrack = function () {
    return Joi.object({
      results: this.Results(),
    });
  };

  static Results = function () {
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
  };

  static UpdateProcessShipmenstRequestBody = function () {
    return Joi.object({
      shipmentIds: Joi.array().items(Joi.string()),

      expectedStatus: Joi.string(),
    });
  };

  static UpdateProcessShipmenstRequestResponse = function () {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string(),
    });
  };

  static GetVoiceCallbackResponse = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static GetClickToCallResponse = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static ApefaceApiError = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static CompanyAddress = function () {
    return Joi.object({
      landmark: Joi.string(),

      pincode: Joi.number(),

      latitude: Joi.number(),

      address2: Joi.string(),

      state: Joi.string(),

      longitude: Joi.number(),

      address1: Joi.string(),

      countryCode: Joi.string(),

      city: Joi.string(),

      country: Joi.string(),
    });
  };

  static Document = function () {
    return Joi.object({
      value: Joi.string(),

      type: Joi.string(),

      verified: Joi.boolean(),

      url: Joi.string(),

      legalName: Joi.string(),
    });
  };

  static BusinessCountryInfo = function () {
    return Joi.object({
      countryCode: Joi.string(),

      country: Joi.string(),
    });
  };

  static ReferralInfo = function () {
    return Joi.object({
      referralCode: Joi.string(),
    });
  };

  static CompanyStoreSerializerRequest = function () {
    return Joi.object({
      address: this.CompanyAddress(),

      brands: Joi.array().items(Joi.number()),

      uid: Joi.number(),

      document: this.Document(),

      notificationEmails: Joi.array().items(Joi.string()),

      businessType: Joi.string(),

      businessInfo: Joi.string(),

      warnings: Joi.object(),

      businessCountryInfo: this.BusinessCountryInfo(),

      name: Joi.string(),

      franchiseEnabled: Joi.boolean(),

      referralInfo: this.ReferralInfo(),
    });
  };

  static SuccessResponse = function () {
    return Joi.object({
      success: Joi.boolean(),

      uid: Joi.number(),
    });
  };

  static ErrorResponse = function () {
    return Joi.object({
      message: Joi.string(),

      meta: Joi.object(),

      status: Joi.number(),

      errors: Joi.object(),

      code: Joi.string(),
    });
  };

  static UserSerializer = function () {
    return Joi.object({
      contact: Joi.string(),

      userId: Joi.string(),

      username: Joi.string(),
    });
  };

  static GetAddressSerializer = function () {
    return Joi.object({
      addressType: Joi.string(),

      landmark: Joi.string(),

      pincode: Joi.number(),

      latitude: Joi.number(),

      address2: Joi.string(),

      state: Joi.string(),

      longitude: Joi.number(),

      address1: Joi.string(),

      countryCode: Joi.string(),

      city: Joi.string(),

      country: Joi.string(),
    });
  };

  static Website = function () {
    return Joi.object({
      url: Joi.string(),
    });
  };

  static BusinessDetails = function () {
    return Joi.object({
      website: this.Website(),
    });
  };

  static BusinessCountryInfo1 = function () {
    return Joi.object({
      countryCode: Joi.string(),

      country: Joi.string(),
    });
  };

  static ContactDetails = function () {
    return Joi.object({
      phone: Joi.array().items(this.PhoneNumber()),

      emails: Joi.array().items(Joi.string()),
    });
  };

  static GetCompanyProfileSerializerResponse = function () {
    return Joi.object({
      stage: Joi.string(),

      createdBy: this.UserSerializer(),

      createdOn: Joi.string(),

      warnings: Joi.object(),

      name: Joi.string(),

      uid: Joi.number(),

      modifiedOn: Joi.string(),

      notificationEmails: Joi.array().items(Joi.string()),

      documents: Joi.array().items(this.Document()),

      businessType: Joi.string(),

      franchiseEnabled: Joi.boolean(),

      addresses: Joi.array().items(this.GetAddressSerializer()),

      businessDetails: this.BusinessDetails(),

      businessInfo: Joi.string(),

      businessCountryInfo: this.BusinessCountryInfo1(),

      modifiedBy: this.UserSerializer(),

      contactDetails: this.ContactDetails(),

      verifiedBy: this.UserSerializer(),

      verifiedOn: Joi.string(),

      companyType: Joi.string(),
    });
  };

  static DocumentsObj = function () {
    return Joi.object({
      pending: Joi.number(),

      verified: Joi.number(),
    });
  };

  static MetricsSerializer = function () {
    return Joi.object({
      brand: this.DocumentsObj(),

      product: this.DocumentsObj(),

      uid: Joi.number(),

      storeDocuments: this.DocumentsObj(),

      stage: Joi.string(),

      companyDocuments: this.DocumentsObj(),

      store: this.DocumentsObj(),
    });
  };

  static BrandBannerSerializer = function () {
    return Joi.object({
      portrait: Joi.string(),

      landscape: Joi.string(),
    });
  };

  static CreateUpdateBrandRequestSerializer = function () {
    return Joi.object({
      banner: this.BrandBannerSerializer(),

      uid: Joi.number(),

      localeLanguage: Joi.object(),

      customJson: Joi.object(),

      logo: Joi.string(),

      name: Joi.string(),

      companyId: Joi.number(),

      description: Joi.string(),

      brandTier: Joi.string(),

      synonyms: Joi.array().items(Joi.string()),
    });
  };

  static UserSerializer1 = function () {
    return Joi.object({
      contact: Joi.string(),

      userId: Joi.string(),

      username: Joi.string(),
    });
  };

  static GetBrandResponseSerializer = function () {
    return Joi.object({
      banner: this.BrandBannerSerializer(),

      verifiedOn: Joi.string(),

      slugKey: Joi.string(),

      uid: Joi.number(),

      stage: Joi.string(),

      modifiedOn: Joi.string(),

      createdBy: this.UserSerializer1(),

      localeLanguage: Joi.object(),

      rejectReason: Joi.string(),

      createdOn: Joi.string(),

      synonyms: Joi.array().items(Joi.string()),

      logo: Joi.string(),

      name: Joi.string(),

      customJson: Joi.object(),

      warnings: Joi.object(),

      modifiedBy: this.UserSerializer1(),

      description: Joi.string(),

      verifiedBy: this.UserSerializer1(),
    });
  };

  static CompanyBrandPostRequestSerializer = function () {
    return Joi.object({
      brands: Joi.array().items(Joi.number()),

      company: Joi.number(),

      uid: Joi.number(),
    });
  };

  static CompanyBrandListSerializer = function () {
    return Joi.object({
      page: Joi.object(),

      items: Joi.array().items(Joi.object()),
    });
  };

  static GetAddressSerializer1 = function () {
    return Joi.object({
      addressType: Joi.string(),

      landmark: Joi.string(),

      pincode: Joi.number(),

      latitude: Joi.number(),

      address2: Joi.string(),

      state: Joi.string(),

      longitude: Joi.number(),

      address1: Joi.string(),

      countryCode: Joi.string(),

      city: Joi.string(),

      country: Joi.string(),
    });
  };

  static LocationManagerSerializer = function () {
    return Joi.object({
      name: Joi.string(),

      email: Joi.string(),

      mobileNo: this.PhoneNumber(),
    });
  };

  static ProductReturnConfigSerializer = function () {
    return Joi.object({
      storeUid: Joi.number(),

      onSameStore: Joi.boolean(),
    });
  };

  static LocationTimingSerializer = function () {
    return Joi.object({
      hour: Joi.number(),

      minute: Joi.number(),
    });
  };

  static LocationDayWiseSerializer = function () {
    return Joi.object({
      closing: this.LocationTimingSerializer(),

      open: Joi.boolean(),

      opening: this.LocationTimingSerializer(),

      weekday: Joi.string(),
    });
  };

  static InvoiceCredSerializer = function () {
    return Joi.object({
      enabled: Joi.boolean(),

      password: Joi.string(),

      username: Joi.string(),
    });
  };

  static InvoiceDetailsSerializer = function () {
    return Joi.object({
      eInvoice: this.InvoiceCredSerializer(),

      eWaybill: this.InvoiceCredSerializer(),
    });
  };

  static LocationSerializer = function () {
    return Joi.object({
      address: this.GetAddressSerializer1(),

      company: Joi.number(),

      manager: this.LocationManagerSerializer(),

      uid: Joi.number(),

      stage: Joi.string(),

      notificationEmails: Joi.array().items(Joi.string()),

      documents: Joi.array().items(this.Document()),

      displayName: Joi.string(),

      productReturnConfig: this.ProductReturnConfigSerializer(),

      customJson: Joi.object(),

      contactNumbers: Joi.array().items(this.PhoneNumber()),

      name: Joi.string(),

      warnings: Joi.object(),

      storeType: Joi.string(),

      timing: Joi.array().items(this.LocationDayWiseSerializer()),

      gstCredentials: this.InvoiceDetailsSerializer(),

      code: Joi.string(),
    });
  };

  static LocationListSerializer = function () {
    return Joi.object({
      page: Joi.object(),

      items: Joi.array().items(Joi.object()),
    });
  };

  static GetCompanySerializer = function () {
    return Joi.object({
      verifiedOn: Joi.string(),

      addresses: Joi.array().items(this.GetAddressSerializer()),

      uid: Joi.number(),

      stage: Joi.string(),

      modifiedOn: Joi.string(),

      createdBy: this.UserSerializer(),

      companyType: Joi.string(),

      businessType: Joi.string(),

      createdOn: Joi.string(),

      rejectReason: Joi.string(),

      name: Joi.string(),

      modifiedBy: this.UserSerializer(),

      verifiedBy: this.UserSerializer(),
    });
  };

  static LocationIntegrationType = function () {
    return Joi.object({
      order: Joi.string(),

      inventory: Joi.string(),
    });
  };

  static GetLocationSerializer = function () {
    return Joi.object({
      stage: Joi.string(),

      createdBy: this.UserSerializer1(),

      createdOn: Joi.string(),

      warnings: Joi.object(),

      name: Joi.string(),

      address: this.GetAddressSerializer(),

      company: this.GetCompanySerializer(),

      manager: this.LocationManagerSerializer(),

      uid: Joi.number(),

      modifiedOn: Joi.string(),

      notificationEmails: Joi.array().items(Joi.string()),

      documents: Joi.array().items(this.Document()),

      productReturnConfig: this.ProductReturnConfigSerializer(),

      code: Joi.string(),

      integrationType: this.LocationIntegrationType(),

      phoneNumber: Joi.string(),

      contactNumbers: Joi.array().items(this.PhoneNumber()),

      modifiedBy: this.UserSerializer1(),

      timing: Joi.array().items(this.LocationDayWiseSerializer()),

      verifiedBy: this.UserSerializer1(),

      verifiedOn: Joi.string(),

      displayName: Joi.string(),

      customJson: Joi.object(),

      storeType: Joi.string(),

      gstCredentials: this.InvoiceDetailsSerializer(),
    });
  };

  static FailedResponse = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static CDN = function () {
    return Joi.object({
      url: Joi.string(),
    });
  };

  static Upload = function () {
    return Joi.object({
      expiry: Joi.number(),

      url: Joi.string(),
    });
  };

  static StartResponse = function () {
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
  };

  static StartRequest = function () {
    return Joi.object({
      fileName: Joi.string(),

      contentType: Joi.string(),

      size: Joi.number(),

      tags: Joi.array().items(Joi.string()),
    });
  };

  static CompleteResponse = function () {
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
  };

  static Opts = function () {
    return Joi.object({
      attempts: Joi.number(),

      timestamp: Joi.number(),

      delay: Joi.number(),
    });
  };

  static CopyFileTask = function () {
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
  };

  static BulkResponse = function () {
    return Joi.object({
      trackingUrl: Joi.string(),

      task: this.CopyFileTask(),
    });
  };

  static ReqConfiguration = function () {
    return Joi.object({
      concurrency: Joi.number(),
    });
  };

  static Destination = function () {
    return Joi.object({
      namespace: Joi.string(),

      rewrite: Joi.string(),

      basepath: Joi.string(),
    });
  };

  static BulkRequest = function () {
    return Joi.object({
      urls: Joi.array().items(Joi.string()),

      destination: this.Destination(),

      configuration: this.ReqConfiguration(),
    });
  };

  static Urls = function () {
    return Joi.object({
      url: Joi.string(),

      signedUrl: Joi.string(),

      expiry: Joi.number(),
    });
  };

  static SignUrlResponse = function () {
    return Joi.object({
      urls: Joi.array().items(this.Urls()),
    });
  };

  static SignUrlRequest = function () {
    return Joi.object({
      expiry: Joi.number(),

      urls: Joi.array().items(Joi.string()),
    });
  };

  static DbRecord = function () {
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
  };

  static BrowseResponse = function () {
    return Joi.object({
      items: Joi.array().items(this.DbRecord()),

      page: this.Page(),
    });
  };

  static RedirectDevice = function () {
    return Joi.object({
      link: Joi.string(),

      type: Joi.string(),
    });
  };

  static WebRedirect = function () {
    return Joi.object({
      link: Joi.string(),

      type: Joi.string(),
    });
  };

  static Redirects = function () {
    return Joi.object({
      ios: this.RedirectDevice(),

      android: this.RedirectDevice(),

      web: this.WebRedirect(),

      forceWeb: Joi.boolean(),
    });
  };

  static ShortLinkReq = function () {
    return Joi.object({
      title: Joi.string(),

      url: Joi.string(),

      hash: Joi.string(),

      active: Joi.string(),

      type: Joi.string(),

      expireAt: Joi.string(),

      enableTracking: Joi.boolean(),

      redirects: this.Redirects(),
    });
  };

  static UrlInfo = function () {
    return Joi.object({
      original: Joi.string(),

      short: Joi.string(),

      hash: Joi.string(),
    });
  };

  static ShortLinkRes = function () {
    return Joi.object({
      title: Joi.string(),

      url: this.UrlInfo(),

      createdBy: Joi.string(),

      personalized: Joi.string(),

      appRedirect: Joi.string(),

      fallback: Joi.string(),

      active: Joi.boolean(),

      id: Joi.string(),

      enableTracking: Joi.boolean(),

      expireAt: Joi.boolean(),

      application: Joi.string(),

      userId: Joi.boolean(),

      createdAt: Joi.boolean(),

      updatedAt: Joi.boolean(),

      redirects: this.Redirects(),
    });
  };

  static ShortLinkList = function () {
    return Joi.object({
      items: Joi.array().items(this.ShortLinkRes()),

      size: Joi.number(),

      itemTotal: Joi.number(),

      current: Joi.number(),

      hasNext: Joi.string(),

      type: Joi.string(),
    });
  };

  static DataTresholdDTO = function () {
    return Joi.object({
      minPrice: Joi.number(),

      safeStock: Joi.number(),

      periodThreshold: Joi.number(),

      periodThresholdType: Joi.string(),

      periodTypeList: Joi.array().items(this.GenericDTO()),
    });
  };

  static GenericDTO = function () {
    return Joi.object({
      text: Joi.string(),

      value: Joi.object(),
    });
  };

  static JobConfigDTO = function () {
    return Joi.object({
      integration: Joi.string(),

      integrationData: Joi.object(),

      companyName: Joi.string(),

      companyId: Joi.number(),

      taskDetails: this.TaskDTO(),

      thresholdDetails: this.DataTresholdDTO(),

      jobCode: Joi.string(),

      alias: Joi.string(),
    });
  };

  static TaskDTO = function () {
    return Joi.object({
      type: Joi.number(),

      groupList: Joi.array().items(this.GenericDTO()),
    });
  };

  static ResponseEnvelopeString = function () {
    return Joi.object({
      timestamp: Joi.string(),

      status: Joi.number(),

      error: Joi.string(),

      exception: Joi.string(),

      message: Joi.string(),

      totalTimeTakenInMillis: Joi.number(),

      httpStatus: Joi.string(),

      items: Joi.string(),

      payload: Joi.string(),

      traceId: Joi.string(),

      page: this.Page(),
    });
  };

  static AWSS3config = function () {
    return Joi.object({
      bucket: Joi.string(),

      region: Joi.string(),

      dir: Joi.string(),

      accessKey: Joi.string(),

      secretKey: Joi.string(),

      localFilePath: Joi.string(),

      archivePath: Joi.string(),

      archive: Joi.boolean(),

      delete: Joi.boolean(),

      unzip: Joi.boolean(),

      zipFormat: Joi.string(),

      fileRegex: Joi.string(),

      archiveConfig: this.ArchiveConfig(),
    });
  };

  static ArchiveConfig = function () {
    return Joi.object({
      delete: Joi.boolean(),

      archive: Joi.boolean(),

      archiveDir: Joi.string(),
    });
  };

  static Audit = function () {
    return Joi.object({
      createdBy: Joi.string(),

      modifiedBy: Joi.string(),

      createdOn: Joi.string(),

      modifiedOn: Joi.string(),
    });
  };

  static CatalogMasterConfig = function () {
    return Joi.object({
      sourceSlug: Joi.string(),
    });
  };

  static CompanyConfig = function () {
    return Joi.object({
      companyId: Joi.number(),

      excludeSteps: Joi.array().items(Joi.number()),

      hiddenClosetKeys: Joi.array().items(Joi.string()),

      openTags: Joi.object(),

      taxIdentifiers: Joi.array().items(Joi.string()),

      deleteQuantityThreshold: Joi.number(),
    });
  };

  static DBConfig = function () {
    return Joi.object({
      vendor: Joi.string(),

      host: Joi.string(),

      port: Joi.number(),

      username: Joi.string(),

      password: Joi.string(),

      dbname: Joi.string(),

      query: Joi.string(),

      procedure: Joi.boolean(),

      driverClass: Joi.string(),

      jdbcUrl: Joi.string(),

      optionalProperties: Joi.object(),
    });
  };

  static DBConnectionProfile = function () {
    return Joi.object({
      inventory: Joi.string(),
    });
  };

  static DBParamConfig = function () {
    return Joi.object({
      params: Joi.object(),
    });
  };

  static DefaultHeadersDTO = function () {
    return Joi.object({
      store: this.PropBeanDTO(),

      intfArticleId: this.PropBeanDTO(),

      priceEffective: this.PropBeanDTO(),

      quantity: this.PropBeanDTO(),
    });
  };

  static DocMappingConfig = function () {
    return Joi.object({
      properties: Joi.object(),

      junkDataThresholdCount: Joi.number(),

      propBeanConfigs: Joi.array().items(this.PropBeanConfig()),

      unwindField: Joi.string(),

      defaultHeaders: this.DefaultHeadersDTO(),
    });
  };

  static EmailConfig = function () {
    return Joi.object({
      recepient: Joi.string(),

      host: Joi.string(),

      username: Joi.string(),

      password: Joi.string(),

      unzip: Joi.boolean(),

      readFromContent: Joi.boolean(),

      filterBasedOnRecepients: Joi.boolean(),

      pcol: Joi.string(),

      subjectLineRegex: Joi.string(),

      senderAddress: Joi.string(),

      localDir: Joi.string(),

      folderNameHierarchies: Joi.array().items(Joi.string()),

      attachmentRegex: Joi.string(),

      bodyContentRegex: Joi.string(),

      passwordProtected: Joi.boolean(),

      zipFormat: Joi.string(),

      attachmentMandate: Joi.boolean(),

      filterFilesAfterExtraction: Joi.boolean(),

      archiveConfig: this.ArchiveConfig(),

      readAllUnreadMails: Joi.boolean(),

      contentType: Joi.string(),

      downloadableLink: Joi.boolean(),

      properties: Joi.object(),
    });
  };

  static FTPConfig = function () {
    return Joi.object({
      host: Joi.string(),

      port: Joi.number(),

      username: Joi.string(),

      password: Joi.string(),

      unzip: Joi.boolean(),

      retries: Joi.number(),

      interval: Joi.number(),

      localDir: Joi.string(),

      remoteDir: Joi.string(),

      zipFileRegex: Joi.string(),

      archiveConfig: this.ArchiveConfig(),

      fileRegex: Joi.string(),

      zipFormat: Joi.string(),

      readAllFiles: Joi.boolean(),
    });
  };

  static FileConfig = function () {
    return Joi.object({
      delimiter: Joi.string(),

      charset: Joi.string(),

      properties: Joi.object(),

      fileHasHeader: Joi.boolean(),

      headerIndex: Joi.number(),

      headerArray: Joi.array().items(Joi.string()),

      dataStartIndex: Joi.number(),

      propBeanConfigs: Joi.array().items(this.PropBeanConfig()),

      junkDataThresholdCount: Joi.number(),

      fileType: Joi.string(),

      lineValidityCheck: Joi.boolean(),

      sheetNames: Joi.array().items(Joi.string()),

      readAllSheets: Joi.boolean(),

      quoteChar: Joi.string(),

      escapeChar: Joi.string(),

      defaultHeaders: this.DefaultHeadersDTO(),
    });
  };

  static GoogleSpreadSheetConfig = function () {
    return Joi.object({
      range: Joi.string(),

      sheetId: Joi.string(),

      clientSecretLocation: Joi.string(),

      credStorageDirectory: Joi.string(),

      localDir: Joi.string(),

      archiveConfig: this.ArchiveConfig(),
    });
  };

  static HttpConfig = function () {
    return Joi.object({
      hosturl: Joi.string(),

      username: Joi.string(),

      password: Joi.string(),

      requestParams: Joi.object(),

      httpMethod: Joi.string(),

      requestPayload: Joi.string(),

      localPath: Joi.string(),

      archiveConfig: this.ArchiveConfig(),
    });
  };

  static JobConfig = function () {
    return Joi.object({
      id: Joi.number(),

      jobCode: Joi.string(),

      taskType: Joi.string(),

      syncDelay: Joi.number(),

      cronExpression: Joi.string(),

      storeFilter: this.StoreFilter(),

      processConfig: this.ProcessConfig(),

      storeConfig: Joi.array().items(this.StoreConfig()),

      properties: Joi.object(),

      immediateFirstRun: Joi.boolean(),

      disable: Joi.boolean(),

      dependentJobCodes: Joi.array().items(Joi.string()),

      companyConfig: Joi.array().items(this.CompanyConfig()),

      companyIds: Joi.array().items(Joi.number()),

      taxIdentifiers: Joi.array().items(Joi.string()),

      priority: Joi.string(),

      periodThreshold: Joi.number(),

      periodThresholdType: Joi.string(),

      dbConnectionProfile: this.DBConnectionProfile(),

      params: Joi.object(),

      openTags: Joi.object(),

      deleteQuantityThreshold: Joi.number(),

      catalogMasterConfig: this.CatalogMasterConfig(),

      aggregatorTypes: Joi.array().items(Joi.string()),

      integrationType: Joi.string(),

      minPrice: Joi.number(),

      audit: this.Audit(),

      version: Joi.number(),

      alias: Joi.string(),
    });
  };

  static JobConfigRawDTO = function () {
    return Joi.object({
      integration: Joi.string(),

      companyName: Joi.string(),

      companyId: Joi.number(),

      data: this.JobConfig(),
    });
  };

  static JsonDocConfig = function () {
    return Joi.object({
      propBeanConfigs: Joi.array().items(this.PropBeanConfig()),
    });
  };

  static LocalFileConfig = function () {
    return Joi.object({
      retries: Joi.number(),

      interval: Joi.number(),

      localDir: Joi.string(),

      workingDir: Joi.string(),

      unzip: Joi.boolean(),

      zipFileRegex: Joi.string(),

      fileRegex: Joi.string(),

      zipFormat: Joi.string(),

      archiveConfig: this.ArchiveConfig(),

      readAllFiles: Joi.boolean(),
    });
  };

  static MongoDocConfig = function () {
    return Joi.object({
      collectionName: Joi.string(),

      findQuery: Joi.object(),

      projectionQuery: Joi.object(),

      propBeanConfigs: Joi.array().items(this.PropBeanConfig()),

      aggregatePipeline: Joi.array().items(Joi.object()),

      skipSave: Joi.boolean(),
    });
  };

  static OAuthConfig = function () {
    return Joi.object({
      limit: Joi.number(),

      pages: Joi.number(),

      interval: Joi.number(),

      consumerKey: Joi.string(),

      consumerSecret: Joi.string(),

      token: Joi.string(),

      tokenSecret: Joi.string(),

      restUrl: Joi.string(),

      restBaseUrl: Joi.string(),

      functionName: Joi.string(),
    });
  };

  static ProcessConfig = function () {
    return Joi.object({
      dbConfig: this.DBConfig(),

      dbParamConfig: this.DBParamConfig(),

      sftpConfig: this.SFTPConfig(),

      awsS3Config: this.AWSS3config(),

      mongoDocConfig: this.MongoDocConfig(),

      ftpConfig: this.FTPConfig(),

      emailConfig: this.EmailConfig(),

      fileConfig: this.FileConfig(),

      jsonDocConfig: this.JsonDocConfig(),

      docMappingConfig: this.DocMappingConfig(),

      taskStepConfig: this.TaskStepConfig(),

      httpConfig: this.HttpConfig(),

      localFileConfig: this.LocalFileConfig(),

      oauthConfig: this.OAuthConfig(),

      googleSpreadsheetConfig: this.GoogleSpreadSheetConfig(),
    });
  };

  static PropBeanConfig = function () {
    return Joi.object({
      required: Joi.boolean(),

      mapping: Joi.object(),

      optional: Joi.boolean(),

      send: this.Send(),

      validations: Joi.array().items(Joi.object()),

      values: Joi.array().items(Joi.string()),

      include: Joi.boolean(),

      sourceField: Joi.string(),

      sourceFields: Joi.array().items(Joi.string()),

      destinationField: Joi.string(),

      dataType: Joi.string(),

      defaultValue: Joi.object(),

      constValue: Joi.object(),

      concatStr: Joi.string(),

      functionName: Joi.string(),

      transformerName: Joi.string(),

      allParamFunctionName: Joi.string(),

      subSeparator: Joi.string(),

      indexField: Joi.string(),

      ignoreIfNotExists: Joi.boolean(),

      identifierType: Joi.string(),

      projectionQuery: Joi.object(),

      enrichFromMaster: Joi.boolean(),
    });
  };

  static PropBeanDTO = function () {
    return Joi.object({
      required: Joi.boolean(),

      optional: Joi.boolean(),

      include: Joi.boolean(),

      sourceField: Joi.string(),

      sourceFields: Joi.array().items(Joi.string()),

      destinationField: Joi.string(),

      dataType: Joi.string(),

      defaultValue: Joi.object(),

      constValue: Joi.object(),

      concatStr: Joi.string(),

      functionName: Joi.string(),

      transformerName: Joi.string(),

      allParamFunctionName: Joi.string(),

      subSeparator: Joi.string(),

      indexField: Joi.string(),

      ignoreIfNotExists: Joi.boolean(),

      identifierType: Joi.string(),

      projectionQuery: Joi.object(),

      enrichFromMaster: Joi.boolean(),
    });
  };

  static ResponseEnvelopeListJobConfigRawDTO = function () {
    return Joi.object({
      timestamp: Joi.string(),

      status: Joi.number(),

      error: Joi.string(),

      exception: Joi.string(),

      message: Joi.string(),

      totalTimeTakenInMillis: Joi.number(),

      httpStatus: Joi.string(),

      items: Joi.array().items(this.JobConfigRawDTO()),

      payload: Joi.array().items(this.JobConfigRawDTO()),

      traceId: Joi.string(),

      page: this.Page(),
    });
  };

  static SFTPConfig = function () {
    return Joi.object({
      host: Joi.string(),

      port: Joi.number(),

      username: Joi.string(),

      password: Joi.string(),

      unzip: Joi.boolean(),

      retries: Joi.number(),

      interval: Joi.number(),

      privateKeyPath: Joi.string(),

      strictHostKeyChecking: Joi.boolean(),

      localDir: Joi.string(),

      remoteDir: Joi.string(),

      passwordProtected: Joi.boolean(),

      zipFileRegex: Joi.string(),

      fileRegex: Joi.string(),

      zipFormat: Joi.string(),

      archiveConfig: this.ArchiveConfig(),

      readAllFiles: Joi.boolean(),
    });
  };

  static Send = function () {
    return Joi.object({
      raw: Joi.boolean(),

      processed: Joi.boolean(),
    });
  };

  static StoreConfig = function () {
    return Joi.object({
      jobCode: Joi.string(),

      storeid: Joi.string(),

      storeAlias: Joi.string(),

      storeFileRegex: Joi.string(),

      storeFileName: Joi.string(),

      processConfig: this.ProcessConfig(),

      properties: Joi.object(),
    });
  };

  static StoreFilter = function () {
    return Joi.object({
      includeTags: Joi.array().items(Joi.string()),

      excludeTags: Joi.array().items(Joi.string()),

      query: Joi.object(),
    });
  };

  static TaskConfig = function () {
    return Joi.object({
      name: Joi.string(),

      taskConfigId: Joi.number(),

      taskParams: Joi.array().items(this.TaskParam()),
    });
  };

  static TaskParam = function () {
    return Joi.object({
      name: Joi.string(),

      value: Joi.object(),
    });
  };

  static TaskStepConfig = function () {
    return Joi.object({
      taskConfigs: Joi.array().items(this.TaskConfig()),

      taskConfigIds: Joi.array().items(Joi.number()),

      taskConfigGroupIds: Joi.array().items(Joi.number()),
    });
  };

  static ResponseEnvelopeListJobConfigDTO = function () {
    return Joi.object({
      timestamp: Joi.string(),

      status: Joi.number(),

      error: Joi.string(),

      exception: Joi.string(),

      message: Joi.string(),

      totalTimeTakenInMillis: Joi.number(),

      httpStatus: Joi.string(),

      items: Joi.array().items(this.JobConfigDTO()),

      payload: Joi.array().items(this.JobConfigDTO()),

      traceId: Joi.string(),

      page: this.Page(),
    });
  };

  static ResponseEnvelopeJobConfigDTO = function () {
    return Joi.object({
      timestamp: Joi.string(),

      status: Joi.number(),

      error: Joi.string(),

      exception: Joi.string(),

      message: Joi.string(),

      totalTimeTakenInMillis: Joi.number(),

      httpStatus: Joi.string(),

      items: this.JobConfigDTO(),

      payload: this.JobConfigDTO(),

      traceId: Joi.string(),

      page: this.Page(),
    });
  };

  static JobConfigListDTO = function () {
    return Joi.object({
      code: Joi.string(),

      alias: Joi.string(),

      modifiedBy: Joi.string(),

      createdBy: Joi.string(),

      modifiedOn: Joi.string(),

      createdOn: Joi.string(),

      active: Joi.boolean(),

      type: Joi.string(),
    });
  };

  static ResponseEnvelopeListJobConfigListDTO = function () {
    return Joi.object({
      timestamp: Joi.string(),

      status: Joi.number(),

      error: Joi.string(),

      exception: Joi.string(),

      message: Joi.string(),

      totalTimeTakenInMillis: Joi.number(),

      httpStatus: Joi.string(),

      items: Joi.array().items(this.JobConfigListDTO()),

      payload: Joi.array().items(this.JobConfigListDTO()),

      traceId: Joi.string(),

      page: this.Page(),
    });
  };

  static StoreMapping = function () {
    return Joi.object({
      enabled: Joi.string(),

      marketplaceStoreId: Joi.string(),

      storeId: Joi.number(),

      meta: Joi.object(),
    });
  };

  static AllChannels = function () {
    return Joi.object({
      mkpName: Joi.boolean(),
    });
  };

  static MyntraPayload = function () {
    return Joi.object({
      merchantId: Joi.string(),

      secretKey: Joi.string(),
    });
  };

  static AmazonPayload = function () {
    return Joi.object({
      sellerId: Joi.string(),

      mwsAuthToken: Joi.string(),
    });
  };

  static FlipkartPayload = function () {
    return Joi.object({
      code: Joi.string(),
    });
  };

  static TatacliqPayload = function () {
    return Joi.object({
      userName: Joi.string(),

      password: Joi.string(),

      merchantId: Joi.string(),
    });
  };

  static AjioPayload = function () {
    return Joi.object({
      username: Joi.string(),

      password: Joi.string(),

      clientIp: Joi.string(),
    });
  };

  static InventoryConfig = function () {
    return Joi.object({
      inventory: Joi.boolean(),

      price: Joi.boolean(),
    });
  };

  static StoreMappingPayload = function () {
    return Joi.object({
      storeMappingEnabled: Joi.boolean(),

      storeMapping: Joi.array().items(this.StoreMapping()),
    });
  };

  static StatusPayload = function () {
    return Joi.object({
      isActive: Joi.boolean(),
    });
  };

  static StatusResp = function () {
    return Joi.object({
      isActive: Joi.boolean(),
    });
  };

  static SyncPayload = function () {
    return Joi.object({
      modifiedSince: Joi.string(),
    });
  };

  static SyncResp = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static MkpResp = function () {
    return Joi.object({
      marketplace: Joi.string(),

      worker: Joi.number(),

      workerAssigned: Joi.string(),

      isActive: Joi.boolean(),

      storeMappingEnabled: Joi.string(),

      companyId: Joi.number(),

      configuration: Joi.object(),

      storeMapping: Joi.array().items(this.StoreMapping()),
    });
  };

  static StatGroup = function () {
    return Joi.object({
      key: Joi.string(),

      url: Joi.string(),

      title: Joi.string(),
    });
  };

  static StatsGroups = function () {
    return Joi.object({
      groups: Joi.array().items(this.StatGroup()),
    });
  };

  static StatsGroupComponent = function () {
    return Joi.object({
      key: Joi.string(),

      url: Joi.string(),

      title: Joi.string(),

      type: Joi.string(),

      filters: Joi.object(),
    });
  };

  static StatsGroupComponents = function () {
    return Joi.object({
      title: Joi.string(),

      components: Joi.array().items(this.StatsGroupComponent()),
    });
  };

  static StatsRes = function () {
    return Joi.object({
      key: Joi.string(),

      title: Joi.string(),

      type: Joi.string(),

      data: Joi.object(),
    });
  };

  static ReceivedAt = function () {
    return Joi.object({
      value: Joi.string(),
    });
  };

  static AbandonCartsDetail = function () {
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
  };

  static AbdCartPage = function () {
    return Joi.object({
      type: Joi.string(),

      size: Joi.string(),

      current: Joi.string(),

      hasNext: Joi.string(),

      itemTotal: Joi.string(),
    });
  };

  static AbandonCartsList = function () {
    return Joi.object({
      items: Joi.array().items(this.AbandonCartsDetail()),

      cartTotal: Joi.string(),

      page: this.AbdCartPage(),
    });
  };

  static AbandonCartDetail = function () {
    return Joi.object({
      id: Joi.string(),

      userId: Joi.string(),

      cartValue: Joi.string(),

      articles: Joi.array().items(Joi.object()),

      breakup: Joi.object(),

      address: Joi.object(),
    });
  };

  static ExportJobReq = function () {
    return Joi.object({
      marketplaceName: Joi.string(),

      startTime: Joi.string(),

      endTime: Joi.string(),

      eventType: Joi.string(),
    });
  };

  static ExportJobRes = function () {
    return Joi.object({
      status: Joi.string(),

      jobId: Joi.string(),
    });
  };

  static ExportJobStatusRes = function () {
    return Joi.object({
      status: Joi.string(),

      jobId: Joi.string(),

      downloadUrl: Joi.string(),
    });
  };

  static GetLogsListReq = function () {
    return Joi.object({
      marketplaceName: Joi.string(),

      startDate: Joi.string(),

      companyId: Joi.string(),

      endDate: Joi.string(),
    });
  };

  static MkpLogsResp = function () {
    return Joi.object({
      startTimeIso: Joi.string(),

      endTimeIso: Joi.string(),

      eventType: Joi.string(),

      traceId: Joi.string(),

      count: Joi.string(),

      status: Joi.string(),
    });
  };

  static LogsPage = function () {
    return Joi.object({
      type: Joi.string(),

      size: Joi.string(),

      current: Joi.string(),

      hasNext: Joi.string(),

      itemTotal: Joi.string(),
    });
  };

  static GetLogsListRes = function () {
    return Joi.object({
      items: Joi.array().items(this.MkpLogsResp()),

      page: this.LogsPage(),
    });
  };

  static SearchLogReq = function () {
    return Joi.object({
      marketplaceName: Joi.string(),

      startDate: Joi.string(),

      companyId: Joi.string(),

      endDate: Joi.string(),

      identifier: Joi.string(),

      identifierValue: Joi.string(),
    });
  };

  static LogInfo = function () {
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
  };

  static SearchLogRes = function () {
    return Joi.object({
      items: Joi.array().items(this.LogInfo()),

      page: this.LogsPage(),
    });
  };
}

class LeadValidator {
  static getTickets = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      items: Joi.boolean(),
      filters: Joi.boolean(),
      q: Joi.string(),
      status: Joi.string(),
      priority: Joi.string(),
      category: Joi.string(),
    }).required();
  };

  static getTicket = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      ticketId: Joi.string().required(),
    }).required();
  };

  static editTicket = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      ticketId: Joi.string().required(),
      body: Validator.EditTicketPayload().required(),
    }).required();
  };

  static createHistory = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      ticketId: Joi.string().required(),
      body: Validator.TicketHistoryPayload().required(),
    }).required();
  };

  static getTicketHistory = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      ticketId: Joi.string().required(),
    }).required();
  };

  static getCustomForm = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      slug: Joi.string().required(),
    }).required();
  };

  static editCustomForm = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      slug: Joi.string().required(),
      body: Validator.EditCustomFormPayload().required(),
    }).required();
  };

  static getCustomForms = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
    }).required();
  };

  static createCustomForm = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      body: Validator.CreateCustomFormPayload().required(),
    }).required();
  };

  static getTokenForVideoRoom = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      uniqueName: Joi.string().required(),
    }).required();
  };

  static getVideoParticipants = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      uniqueName: Joi.string().required(),
    }).required();
  };

  static openVideoRoom = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      body: Validator.CreateVideoRoomPayload().required(),
    }).required();
  };

  static closeVideoRoom = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      uniqueName: Joi.string().required(),
    }).required();
  };
}

class ThemeValidator {
  static getThemeLibrary = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  };

  static addToThemeLibrary = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      body: Validator.AddThemeRequestSchema().required(),
    }).required();
  };

  static applyTheme = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      body: Validator.AddThemeRequestSchema().required(),
    }).required();
  };

  static isUpgradable = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      themeId: Joi.string().required(),
    }).required();
  };

  static upgradeTheme = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      themeId: Joi.string().required(),
    }).required();
  };

  static getPublicThemes = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  };

  static createTheme = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      body: Validator.ThemesSchema().required(),
    }).required();
  };

  static getAppliedTheme = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
    }).required();
  };

  static getFonts = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
    }).required();
  };

  static getThemeById = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      themeId: Joi.string().required(),
    }).required();
  };

  static updateTheme = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      themeId: Joi.string().required(),
      body: Validator.ThemesSchema().required(),
    }).required();
  };

  static deleteTheme = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      themeId: Joi.string().required(),
    }).required();
  };

  static getThemeForPreview = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      themeId: Joi.string().required(),
    }).required();
  };

  static publishTheme = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      themeId: Joi.string().required(),
    }).required();
  };

  static unpublishTheme = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      themeId: Joi.string().required(),
    }).required();
  };

  static archiveTheme = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      themeId: Joi.string().required(),
    }).required();
  };

  static unarchiveTheme = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      themeId: Joi.string().required(),
    }).required();
  };
}

class UserValidator {
  static getCustomers = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      q: Joi.string(),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  };

  static searchUsers = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      q: Joi.string(),
    }).required();
  };

  static getPlatformConfig = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
    }).required();
  };

  static updatePlatformConfig = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      body: Validator.PlatformSchema().required(),
    }).required();
  };
}

class PaymentValidator {
  static getBrandPaymentGatewayConfig = function () {
    return Joi.object({
      companyId: Joi.number().required(),
      applicationId: Joi.string().required(),
    }).required();
  };

  static saveBrandPaymentGatewayConfig = function () {
    return Joi.object({
      companyId: Joi.number().required(),
      applicationId: Joi.string().required(),
      body: Validator.PaymentGatewayConfigRequest().required(),
    }).required();
  };

  static updateBrandPaymentGatewayConfig = function () {
    return Joi.object({
      companyId: Joi.number().required(),
      applicationId: Joi.string().required(),
      body: Validator.PaymentGatewayConfigRequest().required(),
    }).required();
  };

  static getPaymentModeRoutes = function () {
    return Joi.object({
      companyId: Joi.number().required(),
      applicationId: Joi.string().required(),
      refresh: Joi.boolean().required(),
      requestType: Joi.string().required(),
    }).required();
  };
}

class OrderValidator {
  static trackShipmentPlatform = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      shipmentId: Joi.string().required(),
    }).required();
  };

  static trackOrder = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      orderId: Joi.string().required(),
    }).required();
  };

  static failedOrders = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
    }).required();
  };

  static reprocessOrder = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      orderId: Joi.string().required(),
    }).required();
  };
}

class AssetsValidator {
  static appStartUpload = function () {
    return Joi.object({
      namespace: Joi.string().required(),
      companyId: Joi.number().required(),
      applicationId: Joi.string().required(),
      body: Validator.StartRequest().required(),
    }).required();
  };

  static appCompleteUpload = function () {
    return Joi.object({
      namespace: Joi.string().required(),
      companyId: Joi.number().required(),
      applicationId: Joi.string().required(),
      body: Validator.StartResponse().required(),
    }).required();
  };

  static appCopyFiles = function () {
    return Joi.object({
      sync: Joi.boolean(),
      companyId: Joi.number().required(),
      applicationId: Joi.number().required(),
      body: Validator.BulkRequest().required(),
    }).required();
  };

  static appBrowse = function () {
    return Joi.object({
      namespace: Joi.string().required(),
      companyId: Joi.number().required(),
      applicationId: Joi.number().required(),
    }).required();
  };
}

class ShareValidator {
  static createShortLink = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      body: Validator.ShortLinkReq().required(),
    }).required();
  };

  static getShortLinks = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      pageNo: Joi.string(),
      pageSize: Joi.string(),
      createdBy: Joi.string(),
      active: Joi.string(),
      q: Joi.string(),
    }).required();
  };

  static getShortLinkByHash = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      hash: Joi.string().required(),
    }).required();
  };

  static updateShortLinkById = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      id: Joi.string().required(),
    }).required();
  };
}

class AnalyticsValidator {
  static getStatiscticsGroups = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
    }).required();
  };

  static getStatiscticsGroupComponents = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      groupName: Joi.string().required(),
    }).required();
  };

  static getComponentStatsCSV = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      componentName: Joi.string().required(),
    }).required();
  };

  static getComponentStatsPDF = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      componentName: Joi.string().required(),
    }).required();
  };

  static getComponentStats = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      componentName: Joi.string().required(),
    }).required();
  };

  static getAbandonCartList = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      from: Joi.string().required(),
      to: Joi.string().required(),
      pageNo: Joi.string(),
      pageSize: Joi.string(),
    }).required();
  };

  static getAbandonCartsCSV = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      from: Joi.string().required(),
      to: Joi.string().required(),
    }).required();
  };

  static getAbandonCartDetail = function () {
    return Joi.object({
      companyId: Joi.string().required(),
      applicationId: Joi.string().required(),
      cartId: Joi.string().required(),
    }).required();
  };
}

module.exports = {
  LeadValidator,
  ThemeValidator,
  UserValidator,
  PaymentValidator,
  OrderValidator,
  AssetsValidator,
  ShareValidator,
  AnalyticsValidator,
};
