const {
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
} = require("./PlatformApplicationModels");
const PlatformAPIClient = require("./PlatformAPIClient");
const Paginator = require("../common/Paginator");

class PlatformApplicationClient {
  constructor(applicationId, config) {
    this.config = config;
    this.companyId = config.companyId;
    this.applicationId = applicationId;

    this.lead = new Lead(config, applicationId);
    this.theme = new Theme(config, applicationId);
    this.user = new User(config, applicationId);
    this.content = new Content(config, applicationId);
    this.communication = new Communication(config, applicationId);
    this.payment = new Payment(config, applicationId);
    this.order = new Order(config, applicationId);
    this.catalog = new Catalog(config, applicationId);
    this.assets = new Assets(config, applicationId);
    this.share = new Share(config, applicationId);
    this.cart = new Cart(config, applicationId);
    this.analytics = new Analytics(config, applicationId);
  }
}

/**
        @typedef TicketList
        
        
        @property { Array<Ticket> } [items]
        
        @property { Filter } [filters]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef Page
        
        
        @property { number } itemTotal
        
        @property { string } [nextId]
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [current]
        
        @property { string } type
        
        @property { number } size
        
         
    */

/**
        @typedef TicketHistoryList
        
        
        @property { Array<TicketHistory> } [docs]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [pages]
        
        @property { number } [total]
        
         
    */

/**
        @typedef CustomFormList
        
        
        @property { Array<CustomForm> } [docs]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [pages]
        
        @property { number } [total]
        
         
    */

/**
        @typedef CreateCustomFormPayload
        
        
        @property { string } slug
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [headerImage]
        
        @property { boolean } [shouldNotify]
        
        @property { string } [successMessage]
        
        @property { PollForAssignment } [pollForAssignment]
        
         
    */

/**
        @typedef EditCustomFormPayload
        
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [headerImage]
        
        @property { boolean } [shouldNotify]
        
        @property { boolean } [loginRequired]
        
        @property { string } [successMessage]
        
        @property { PollForAssignment } [pollForAssignment]
        
         
    */

/**
        @typedef EditTicketPayload
        
        
        @property { TicketContent } [content]
        
        @property { string } [category]
        
        @property { string } [source]
        
        @property { string } [status]
        
        @property { string } [priority]
        
        @property { AgentChangePayload } [assignedTo]
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef AgentChangePayload
        
        
        @property { string } agentId
        
         
    */

/**
        @typedef CreateVideoRoomResponse
        
        
        @property { string } uniqueName
        
         
    */

/**
        @typedef CloseVideoRoomResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef CreateVideoRoomPayload
        
        
        @property { string } uniqueName
        
        @property { Array<Object> } [notify]
        
         
    */

/**
        @typedef Filter
        
        
        @property { Array<Priority> } priorities
        
        @property { Array<TicketCategory> } [categories]
        
        @property { Array<Status> } statuses
        
        @property { Array<Object> } assignees
        
         
    */

/**
        @typedef TicketHistoryPayload
        
        
        @property { Object } value
        
        @property { string } type
        
         
    */

/**
        @typedef CustomFormSubmissionPayload
        
        
        @property { Array<KeyValue> } response
        
         
    */

/**
        @typedef KeyValue
        
        
        @property { string } key
        
        @property { string } value
        
         
    */

/**
        @typedef GetTokenForVideoRoomResponse
        
        
        @property { string } accessToken
        
         
    */

/**
        @typedef GetParticipantsInsideVideoRoomResponse
        
        
        @property { Array<Participant> } participants
        
         
    */

/**
        @typedef Participant
        
        
        @property { UserSchema } [user]
        
        @property { string } [identity]
        
        @property { string } [status]
        
         
    */

/**
        @typedef UserSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { Array<PhoneNumber> } [phoneNumbers]
        
        @property { Array<Email> } [emails]
        
        @property { string } [gender]
        
        @property { boolean } [active]
        
        @property { string } [profilePicUrl]
        
        @property { string } [username]
        
        @property { string } [accountType]
        
        @property { string } [uid]
        
        @property { Debug } [debug]
        
        @property { boolean } [hasOldPasswordHash]
        
        @property { string } [id]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef PhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [phone]
        
        @property { number } [countryCode]
        
         
    */

/**
        @typedef Email
        
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [email]
        
        @property { boolean } [active]
        
         
    */

/**
        @typedef Debug
        
        
        @property { string } [source]
        
        @property { string } [platform]
        
         
    */

/**
        @typedef SubmitCustomFormResponse
        
        
        @property { Ticket } ticket
        
         
    */

/**
        @typedef TicketContext
        
        
        @property { string } [applicationId]
        
        @property { string } companyId
        
         
    */

/**
        @typedef CreatedOn
        
        
        @property { string } userAgent
        
         
    */

/**
        @typedef TicketAsset
        
        
        @property { string } [display]
        
        @property { string } value
        
        @property { string } type
        
         
    */

/**
        @typedef TicketContent
        
        
        @property { string } title
        
        @property { string } [description]
        
        @property { Array<TicketAsset> } [attachments]
        
         
    */

/**
        @typedef AddTicketPayload
        
        
        @property { string } status
        
        @property { string } priority
        
        @property { string } category
        
        @property { TicketContent } content
        
         
    */

/**
        @typedef Priority
        
        
        @property { string } key
        
        @property { string } display
        
        @property { string } color
        
         
    */

/**
        @typedef Status
        
        
        @property { string } key
        
        @property { string } display
        
        @property { string } color
        
         
    */

/**
        @typedef TicketCategory
        
        
        @property { string } key
        
        @property { string } display
        
        @property { CustomForm } [form]
        
         
    */

/**
        @typedef SubmitButton
        
        
        @property { string } title
        
        @property { string } titleColor
        
        @property { string } backgroundColor
        
         
    */

/**
        @typedef PollForAssignment
        
        
        @property { number } duration
        
        @property { string } message
        
        @property { string } successMessage
        
        @property { string } failureMessage
        
         
    */

/**
        @typedef CustomForm
        
        
        @property { string } applicationId
        
        @property { string } slug
        
        @property { string } [headerImage]
        
        @property { string } title
        
        @property { string } [description]
        
        @property { boolean } loginRequired
        
        @property { boolean } shouldNotify
        
        @property { string } [successMessage]
        
        @property { SubmitButton } [submitButton]
        
        @property { Array<Object> } inputs
        
        @property { CreatedOn } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { PollForAssignment } [pollForAssignment]
        
        @property { string } id
        
         
    */

/**
        @typedef TicketHistory
        
        
        @property { string } type
        
        @property { Object } value
        
        @property { string } ticketId
        
        @property { CreatedOn } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { string } id
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
         
    */

/**
        @typedef Ticket
        
        
        @property { TicketContext } [context]
        
        @property { CreatedOn } [createdOn]
        
        @property { string } [responseId]
        
        @property { TicketContent } [content]
        
        @property { string } ticketId
        
        @property { TicketCategory } category
        
        @property { string } source
        
        @property { Status } status
        
        @property { Priority } priority
        
        @property { Object } [createdBy]
        
        @property { Object } [assignedTo]
        
        @property { Array<string> } [tags]
        
        @property { Object } [customJson]
        
        @property { string } [id]
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
         
    */

/**
        @typedef PaginationSchema
        
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
        @property { string } [type]
        
        @property { number } [current]
        
         
    */

/**
        @typedef ThemesListingResponseSchema
        
        
        @property { Array<ThemesSchema> } [items]
        
        @property { PaginationSchema } [page]
        
         
    */

/**
        @typedef AddThemeRequestSchema
        
        
        @property { string } [themeId]
        
         
    */

/**
        @typedef UpgradableThemeSchema
        
        
        @property { string } [parentTheme]
        
        @property { string } [appliedTheme]
        
        @property { boolean } [upgrade]
        
         
    */

/**
        @typedef FontsSchema
        
        
        @property { FontsSchemaItems } [items]
        
        @property { string } [kind]
        
         
    */

/**
        @typedef BlitzkriegApiErrorSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef BlitzkriegNotFoundSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef BlitzkriegInternalServerErrorSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef FontsSchemaItems
        
        
        @property { string } [family]
        
        @property { Array<string> } [variants]
        
        @property { Array<string> } [subsets]
        
        @property { string } [version]
        
        @property { string } [lastModified]
        
        @property { FontsSchemaItemsFiles } [files]
        
        @property { string } [category]
        
        @property { string } [kind]
        
         
    */

/**
        @typedef FontsSchemaItemsFiles
        
        
        @property { string } [regular]
        
        @property { string } [italic]
        
        @property { string } [bold]
        
         
    */

/**
        @typedef ThemesSchema
        
        
        @property { string } [application]
        
        @property { boolean } [applied]
        
        @property { boolean } [customized]
        
        @property { boolean } [published]
        
        @property { boolean } [archived]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [version]
        
        @property { string } [parentThemeVersion]
        
        @property { string } [parentTheme]
        
        @property { Information } [information]
        
        @property { Array<string> } [tags]
        
        @property { Src } [src]
        
        @property { AssetsSchema } [assets]
        
        @property { AvailablePages } [availablePages]
        
        @property { Array<availableSectionSchema> } [availableSections]
        
        @property { Array<sectionSchema> } [sections]
        
        @property { Object } [constants]
        
        @property { Object } [styles]
        
        @property { Config } [config]
        
        @property { Object } [settings]
        
        @property { Font } [font]
        
        @property { string } [id]
        
        @property { number } [v]
        
        @property { Colors } [colors]
        
         
    */

/**
        @typedef pagesSchema
        
        
        @property { string } [text]
        
        @property { string } [path]
        
        @property { string } [type]
        
        @property { string } [value]
        
        @property { Sections } [sections]
        
         
    */

/**
        @typedef availableSectionSchema
        
        
        @property { Blocks } [blocks]
        
        @property { string } [name]
        
        @property { string } [label]
        
        @property { Object } [props]
        
         
    */

/**
        @typedef sectionSchema
        
        
        @property { string } [pageKey]
        
        @property { PageSections } [pageSections]
        
         
    */

/**
        @typedef Information
        
        
        @property { Images } [images]
        
        @property { Array<string> } [features]
        
        @property { string } [name]
        
        @property { string } [description]
        
         
    */

/**
        @typedef Images
        
        
        @property { Array<string> } [desktop]
        
        @property { Array<string> } [android]
        
        @property { Array<string> } [ios]
        
        @property { Array<string> } [thumbnail]
        
         
    */

/**
        @typedef Src
        
        
        @property { string } [link]
        
         
    */

/**
        @typedef AssetsSchema
        
        
        @property { UmdJs } [umdJs]
        
        @property { CommonJs } [commonJs]
        
        @property { Css } [css]
        
         
    */

/**
        @typedef UmdJs
        
        
        @property { string } [link]
        
         
    */

/**
        @typedef CommonJs
        
        
        @property { string } [link]
        
         
    */

/**
        @typedef Css
        
        
        @property { string } [link]
        
         
    */

/**
        @typedef AvailablePages
        
        
        @property { string } [path]
        
        @property { string } [type]
        
        @property { string } [text]
        
        @property { string } [value]
        
        @property { Seo } [seo]
        
        @property { Object } [props]
        
        @property { Sections } [sections]
        
         
    */

/**
        @typedef Seo
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */

/**
        @typedef Sections
        
        
        @property { string } [attributes]
        
         
    */

/**
        @typedef Config
        
        
        @property { Preset } [preset]
        
        @property { GlobalSchema } [globalSchema]
        
        @property { string } [current]
        
        @property { ListSchema } [list]
        
         
    */

/**
        @typedef Preset
        
        
        @property { sectionSchema } [sections]
        
         
    */

/**
        @typedef GlobalSchema
        
        
        @property { Object } [props]
        
         
    */

/**
        @typedef ListSchema
        
        
        @property { Object } [global]
        
        @property { ConfigPage } [page]
        
        @property { string } [name]
        
         
    */

/**
        @typedef Colors
        
        
        @property { string } [bgColor]
        
        @property { string } [primaryColor]
        
        @property { string } [secondaryColor]
        
        @property { string } [accentColor]
        
        @property { string } [linkColor]
        
        @property { string } [buttonSecondaryColor]
        
         
    */

/**
        @typedef Custom
        
        
        @property { Object } [props]
        
         
    */

/**
        @typedef ConfigPage
        
        
        @property { Object } [settings]
        
        @property { string } [page]
        
         
    */

/**
        @typedef Font
        
        
        @property { string } [family]
        
        @property { Variants } [variants]
        
         
    */

/**
        @typedef Variants
        
        
        @property { Medium } [medium]
        
        @property { SemiBold } [semiBold]
        
        @property { Bold } [bold]
        
        @property { Light } [light]
        
        @property { Regular } [regular]
        
         
    */

/**
        @typedef Medium
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */

/**
        @typedef SemiBold
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */

/**
        @typedef Bold
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */

/**
        @typedef Light
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */

/**
        @typedef Regular
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */

/**
        @typedef Blocks
        
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { BlocksProps } [props]
        
         
    */

/**
        @typedef BlocksProps
        
        
        @property { string } [id]
        
        @property { string } [label]
        
        @property { string } [type]
        
         
    */

/**
        @typedef PageSections
        
        
        @property { PageSectionsBlocks } [blocks]
        
        @property { string } [name]
        
        @property { string } [label]
        
        @property { Object } [props]
        
        @property { Object } [preset]
        
        @property { Predicate } [predicate]
        
         
    */

/**
        @typedef PageSectionsBlocks
        
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { PageSectionsBlocksProps } [props]
        
         
    */

/**
        @typedef PageSectionsBlocksProps
        
        
        @property { string } [id]
        
        @property { string } [label]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Predicate
        
        
        @property { Screen } [screen]
        
        @property { PredicateUserSchema } [user]
        
        @property { Route } [route]
        
         
    */

/**
        @typedef Screen
        
        
        @property { boolean } [mobile]
        
        @property { boolean } [desktop]
        
        @property { boolean } [tablet]
        
         
    */

/**
        @typedef PredicateUserSchema
        
        
        @property { boolean } [authenticated]
        
        @property { boolean } [anonymous]
        
         
    */

/**
        @typedef Route
        
        
        @property { string } [selected]
        
        @property { string } [exactUrl]
        
        @property { Object } [query]
        
         
    */

/**
        @typedef EditEmailRequestSchema
        
        
        @property { string } [email]
        
         
    */

/**
        @typedef SendVerificationLinkMobileRequestSchema
        
        
        @property { boolean } [verified]
        
        @property { boolean } [active]
        
        @property { string } [countryCode]
        
        @property { string } [phone]
        
        @property { boolean } [primary]
        
         
    */

/**
        @typedef EditMobileRequestSchema
        
        
        @property { string } [countryCode]
        
        @property { string } [phone]
        
         
    */

/**
        @typedef EditProfileRequestSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { string } [mobile]
        
        @property { string } [email]
        
        @property { string } [gender]
        
        @property { string } [dob]
        
        @property { string } [profilePicUrl]
        
        @property { string } [androidHash]
        
        @property { string } [sender]
        
        @property { string } [registerToken]
        
         
    */

/**
        @typedef SendEmailOtpRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [registerToken]
        
         
    */

/**
        @typedef VerifyOtpRequestSchema
        
        
        @property { string } [requestId]
        
        @property { string } [registerToken]
        
        @property { string } [otp]
        
         
    */

/**
        @typedef SendMobileOtpRequestSchema
        
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [androidHash]
        
        @property { string } [force]
        
         
    */

/**
        @typedef UpdatePasswordRequestSchema
        
        
        @property { string } [oldPassword]
        
        @property { string } [newPassword]
        
         
    */

/**
        @typedef FormRegisterRequestSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [password]
        
        @property { FormRegisterRequestSchemaPhone } [phone]
        
        @property { string } [registerToken]
        
         
    */

/**
        @typedef TokenRequestBodySchema
        
        
        @property { string } [token]
        
         
    */

/**
        @typedef ForgotPasswordRequestSchema
        
        
        @property { string } [code]
        
        @property { string } [password]
        
         
    */

/**
        @typedef CodeRequestBodySchema
        
        
        @property { string } [code]
        
         
    */

/**
        @typedef SendResetPasswordEmailRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [captchaCode]
        
         
    */

/**
        @typedef PasswordLoginRequestSchema
        
        
        @property { string } [captchaCode]
        
        @property { string } [password]
        
        @property { string } [username]
        
         
    */

/**
        @typedef SendOtpRequestSchema
        
        
        @property { string } [countryCode]
        
        @property { string } [captchaCode]
        
        @property { string } [mobile]
        
         
    */

/**
        @typedef OAuthRequestSchema
        
        
        @property { boolean } [isSignedIn]
        
        @property { OAuthRequestSchemaOauth2 } [oauth2]
        
        @property { OAuthRequestSchemaProfile } [profile]
        
         
    */

/**
        @typedef AuthSuccess
        
        
        @property { string } [registerToken]
        
        @property { boolean } [userExists]
        
        @property { AuthSuccessUser } [user]
        
         
    */

/**
        @typedef SendOtpResponse
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef LoginSuccess
        
        
        @property { UserSchema } [user]
        
         
    */

/**
        @typedef VerifyOtpSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [userExists]
        
         
    */

/**
        @typedef ResetPasswordSuccess
        
        
        @property { string } [status]
        
         
    */

/**
        @typedef RegisterFormSuccess
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef VerifyEmailSuccess
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef HasPasswordSuccess
        
        
        @property { boolean } [result]
        
         
    */

/**
        @typedef LogoutSuccess
        
        
        @property { boolean } [logout]
        
         
    */

/**
        @typedef OtpSuccess
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef EmailOtpSuccess
        
        
        @property { string } [resendToken]
        
         
    */

/**
        @typedef SessionListSuccess
        
        
        @property { Array<string> } [sessions]
        
         
    */

/**
        @typedef VerifyMobileOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verifyMobileLink]
        
         
    */

/**
        @typedef VerifyEmailOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verifyEmailLink]
        
         
    */

/**
        @typedef SendMobileVerifyLinkSuccess
        
        
        @property { boolean } [verifyMobileLink]
        
         
    */

/**
        @typedef SendEmailVerifyLinkSuccess
        
        
        @property { boolean } [verifyEmailLink]
        
         
    */

/**
        @typedef UserSearchResponseSchema
        
        
        @property { Array<UserSchema> } [users]
        
         
    */

/**
        @typedef CustomerListResponseSchema
        
        
        @property { Array<UserSchema> } [items]
        
        @property { PaginationSchema } [page]
        
         
    */

/**
        @typedef UnauthorizedSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef UnauthenticatedSchema
        
        
        @property { boolean } [authenticated]
        
         
    */

/**
        @typedef NotFoundSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef AuthenticationApiErrorSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef ProfileEditSuccessSchema
        
        
        @property { string } [email]
        
        @property { boolean } [verifyEmailOtp]
        
        @property { boolean } [verifyEmailLink]
        
        @property { boolean } [verifyMobileOtp]
        
        @property { string } [user]
        
        @property { string } [registerToken]
        
        @property { boolean } [userExists]
        
         
    */

/**
        @typedef FormRegisterRequestSchemaPhone
        
        
        @property { string } [countryCode]
        
        @property { string } [mobile]
        
         
    */

/**
        @typedef OAuthRequestSchemaOauth2
        
        
        @property { string } [accessToken]
        
        @property { number } [expiry]
        
        @property { string } [refreshToken]
        
         
    */

/**
        @typedef OAuthRequestSchemaProfile
        
        
        @property { string } [lastName]
        
        @property { string } [image]
        
        @property { string } [id]
        
        @property { string } [email]
        
        @property { string } [fullName]
        
        @property { string } [firstName]
        
         
    */

/**
        @typedef AuthSuccessUser
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { AuthSuccessUserDebug } [debug]
        
        @property { boolean } [active]
        
        @property { AuthSuccessUserEmails } [emails]
        
         
    */

/**
        @typedef AuthSuccessUserDebug
        
        
        @property { string } [platform]
        
         
    */

/**
        @typedef AuthSuccessUserEmails
        
        
        @property { string } [email]
        
        @property { boolean } [verified]
        
        @property { boolean } [primary]
        
        @property { boolean } [active]
        
         
    */

/**
        @typedef PlatformSchema
        
        
        @property { string } [display]
        
        @property { LookAndFeel } [lookAndFeel]
        
        @property { string } [updatedAt]
        
        @property { boolean } [active]
        
        @property { boolean } [forgotPassword]
        
        @property { Login } [login]
        
        @property { boolean } [skipCaptcha]
        
        @property { string } [name]
        
        @property { MetaSchema } [meta]
        
        @property { string } [id]
        
        @property { Social } [social]
        
        @property { RequiredFields } [requiredFields]
        
        @property { RegisterRequiredFields } [registerRequiredFields]
        
        @property { boolean } [skipLogin]
        
        @property { FlashCard } [flashCard]
        
        @property { string } [subtext]
        
        @property { SocialTokens } [socialTokens]
        
        @property { string } [createdAt]
        
        @property { boolean } [register]
        
         
    */

/**
        @typedef LookAndFeel
        
        
        @property { string } [cardPosition]
        
        @property { string } [backgroundColor]
        
         
    */

/**
        @typedef Login
        
        
        @property { boolean } [password]
        
        @property { boolean } [otp]
        
         
    */

/**
        @typedef MetaSchema
        
        
        @property { boolean } [fyndDefault]
        
         
    */

/**
        @typedef Social
        
        
        @property { boolean } [accountKit]
        
        @property { boolean } [facebook]
        
        @property { boolean } [google]
        
         
    */

/**
        @typedef RequiredFields
        
        
        @property { Email } [email]
        
        @property { Mobile } [mobile]
        
         
    */

/**
        @typedef Mobile
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */

/**
        @typedef RegisterRequiredFields
        
        
        @property { RegisterRequiredFieldsEmail } [email]
        
        @property { RegisterRequiredFieldsMobile } [mobile]
        
         
    */

/**
        @typedef RegisterRequiredFieldsEmail
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */

/**
        @typedef RegisterRequiredFieldsMobile
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */

/**
        @typedef FlashCard
        
        
        @property { string } [text]
        
        @property { string } [textColor]
        
        @property { string } [backgroundColor]
        
         
    */

/**
        @typedef SocialTokens
        
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [accountKit]
        
        @property { Google } [google]
        
         
    */

/**
        @typedef Facebook
        
        
        @property { string } [appId]
        
         
    */

/**
        @typedef Accountkit
        
        
        @property { string } [appId]
        
         
    */

/**
        @typedef Google
        
        
        @property { string } [appId]
        
         
    */

/**
        @typedef ApplicationLegal
        
        
        @property { string } [application]
        
        @property { string } [tnc]
        
        @property { string } [policy]
        
        @property { string } [shipping]
        
        @property { Array<ApplicationLegalFAQ> } [faq]
        
        @property { string } [id]
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
         
    */

/**
        @typedef ApplicationLegalFAQ
        
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */

/**
        @typedef SeoSchema
        
        
        @property { string } [app]
        
        @property { string } [id]
        
        @property { string } [robotsTxt]
        
        @property { boolean } [sitemapEnabled]
        
        @property { Array<Object> } [customMetaTags]
        
        @property { Object } [details]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef CustomMetaTag
        
        
        @property { string } [name]
        
        @property { string } [content]
        
        @property { string } [id]
        
         
    */

/**
        @typedef Detail
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */

/**
        @typedef StorefrontAnnouncement
        
        
        @property { AnnouncementSchema } [announcements]
        
        @property { number } [refreshRate]
        
        @property { Array<string> } [refreshPages]
        
         
    */

/**
        @typedef AnnouncementPageSchema
        
        
        @property { string } [pageSlug]
        
        @property { string } [type]
        
         
    */

/**
        @typedef EditorMeta
        
        
        @property { string } [foregroundColor]
        
        @property { string } [backgroundColor]
        
        @property { string } [contentType]
        
        @property { string } [content]
        
         
    */

/**
        @typedef AnnouncementAuthorSchema
        
        
        @property { string } [createdBy]
        
        @property { string } [modifiedBy]
        
         
    */

/**
        @typedef AdminAnnouncementSchema
        
        
        @property { string } [id]
        
        @property { Array<string> } [platforms]
        
        @property { string } [title]
        
        @property { string } [announcement]
        
        @property { Array<AnnouncementPageSchema> } [pages]
        
        @property { EditorMeta } [editorMeta]
        
        @property { AnnouncementAuthorSchema } [author]
        
        @property { string } [createdAt]
        
        @property { string } [app]
        
        @property { string } [modifiedAt]
        
        @property { ScheduleSchema } [schedule]
        
         
    */

/**
        @typedef ScheduleSchema
        
        
        @property { string } [cron]
        
        @property { string } [start]
        
        @property { string } [end]
        
        @property { number } [duration]
        
        @property { Array<Object> } [nextSchedule]
        
         
    */

/**
        @typedef NextSchedule
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef AnnouncementSchema
        
        
        @property { Array<Object> } [pageSlug]
        
         
    */

/**
        @typedef announcementSchema
        
        
        @property { string } [announcement]
        
        @property { scheduleStartSchema } [schedule]
        
         
    */

/**
        @typedef scheduleStartSchema
        
        
        @property { string } [start]
        
         
    */

/**
        @typedef BlogGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */

/**
        @typedef ResourceContent
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */

/**
        @typedef Asset
        
        
        @property { string } [secureUrl]
        
         
    */

/**
        @typedef Author
        
        
        @property { string } [designation]
        
        @property { string } [id]
        
        @property { string } [name]
        
         
    */

/**
        @typedef BlogSchema
        
        
        @property { string } [id]
        
        @property { Object } [customJson]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { Object } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { SEO } [seo]
        
        @property { CronSchedule } [schedule]
        
        @property { string } [title]
        
        @property { DateMeta } [dateMeta]
        
         
    */

/**
        @typedef SEO
        
        
        @property { string } [description]
        
        @property { SEOImage } [image]
        
        @property { string } [title]
        
         
    */

/**
        @typedef SEOImage
        
        
        @property { string } [url]
        
         
    */

/**
        @typedef DateMeta
        
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */

/**
        @typedef BlogRequest
        
        
        @property { string } [application]
        
        @property { Object } [customJson]
        
        @property { Object } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
        @property { SEO } [seo]
        
        @property { CronSchedule } [schedule]
        
         
    */

/**
        @typedef GetAnnouncementListSchema
        
        
        @property { Array<AdminAnnouncementSchema> } [items]
        
        @property { Pagination } [page]
        
         
    */

/**
        @typedef CreateAnnouncementSchema
        
        
        @property { string } [message]
        
        @property { AdminAnnouncementSchema } [data]
        
         
    */

/**
        @typedef Navigation
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { string } [orientation]
        
        @property { CreatedBy } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [id]
        
        @property { string } [position]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { NavigationReference } [navigation]
        
         
    */

/**
        @typedef LocaleLanguage
        
        
        @property { Language } [hi]
        
        @property { Language } [ar]
        
        @property { Language } [enUs]
        
         
    */

/**
        @typedef Language
        
        
        @property { string } [display]
        
         
    */

/**
        @typedef Action
        
        
        @property { ActionPage } [page]
        
        @property { ActionPage } [popup]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ActionPage
        
        
        @property { Object } [params]
        
        @property { Object } [query]
        
        @property { string } [url]
        
        @property { string } [type]
        
         
    */

/**
        @typedef NavigationReference
        
        
        @property { Array<string> } [acl]
        
        @property { Array<string> } [tags]
        
        @property { LocaleLanguage } [localeLanguage]
        
        @property { string } [image]
        
        @property { string } [type]
        
        @property { Action } [action]
        
        @property { boolean } [active]
        
        @property { string } [display]
        
        @property { number } [sortOrder]
        
        @property { NavigationReference } [subNavigation]
        
         
    */

/**
        @typedef LandingPage
        
        
        @property { LandingPageSchema } [data]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef ConfigurationSchema
        
        
        @property { number } [sleepTime]
        
        @property { boolean } [startOnLaunch]
        
        @property { number } [duration]
        
        @property { string } [slideDirection]
        
         
    */

/**
        @typedef Media
        
        
        @property { string } [type]
        
        @property { string } [url]
        
        @property { string } [bgColor]
        
        @property { number } [duration]
        
        @property { boolean } [autoDecideDuration]
        
        @property { Action } [action]
        
         
    */

/**
        @typedef Slideshow
        
        
        @property { SlideshowSchema } [data]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef AnnouncementsResponseSchema
        
        
        @property { Object } [announcements]
        
        @property { number } [refreshRate]
        
        @property { Array<string> } [refreshPages]
        
         
    */

/**
        @typedef AnnouncementDataSchema
        
        
        @property { string } [pageSlug]
        
        @property { StorefrontAnnouncement } [announcement]
        
         
    */

/**
        @typedef FaqResponseSchema
        
        
        @property { Array<FAQ> } [faqs]
        
         
    */

/**
        @typedef UpdateHandpickedSchema
        
        
        @property { HandpickedTagSchema } [tag]
        
         
    */

/**
        @typedef HandpickedTagSchema
        
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [name]
        
        @property { string } [url]
        
        @property { string } [type]
        
        @property { string } [subType]
        
        @property { string } [content]
        
         
    */

/**
        @typedef RemoveHandpickedSchema
        
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef CreateTagSchema
        
        
        @property { string } [name]
        
        @property { string } [subType]
        
        @property { string } [id]
        
        @property { string } [type]
        
        @property { string } [url]
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [content]
        
         
    */

/**
        @typedef CreateTagRequestSchema
        
        
        @property { Array<CreateTagSchema> } [tags]
        
         
    */

/**
        @typedef APIError
        
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { string } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [requestId]
        
        @property { string } [stackTrace]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef CategorySchema
        
        
        @property { number } [index]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [title]
        
        @property { string } [application]
        
         
    */

/**
        @typedef ChildrenSchema
        
        
        @property { string } [question]
        
        @property { string } [answer]
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [id]
        
         
    */

/**
        @typedef CategoryRequestSchema
        
        
        @property { string } [slug]
        
        @property { string } [title]
        
         
    */

/**
        @typedef FAQCategorySchema
        
        
        @property { number } [index]
        
        @property { string } [title]
        
        @property { string } [description]
        
        @property { ChildrenSchema } [children]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [iconUrl]
        
        @property { Object } [customJson]
        
         
    */

/**
        @typedef FaqSchema
        
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [id]
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */

/**
        @typedef FAQ
        
        
        @property { string } [slug]
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */

/**
        @typedef CreateFaqResponseSchema
        
        
        @property { FaqSchema } [faq]
        
         
    */

/**
        @typedef CreateFaqSchema
        
        
        @property { FAQ } [faq]
        
         
    */

/**
        @typedef GetFaqSchema
        
        
        @property { Array<Object> } [faqs]
        
         
    */

/**
        @typedef UpdateFaqCategoryRequestSchema
        
        
        @property { CategorySchema } [category]
        
         
    */

/**
        @typedef CreateFaqCategoryRequestSchema
        
        
        @property { CategoryRequestSchema } [category]
        
         
    */

/**
        @typedef CreateFaqCategorySchema
        
        
        @property { CategorySchema } [category]
        
         
    */

/**
        @typedef GetFaqCategoriesSchema
        
        
        @property { Array<CategorySchema> } [categories]
        
         
    */

/**
        @typedef GetFaqCategoryByIdOrSlugSchema
        
        
        @property { FAQCategorySchema } [category]
        
         
    */

/**
        @typedef Pagination
        
        
        @property { string } [type]
        
        @property { number } [current]
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
         
    */

/**
        @typedef LandingPageGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Pagination } [page]
        
         
    */

/**
        @typedef LandingPageSchema
        
        
        @property { string } [slug]
        
        @property { Action } [action]
        
        @property { Array<string> } [platform]
        
        @property { CreatedBy } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { Object } [customJson]
        
         
    */

/**
        @typedef DefaultNavigationResponse
        
        
        @property { Array<Object> } [items]
        
         
    */

/**
        @typedef NavigationGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Pagination } [page]
        
         
    */

/**
        @typedef Orientation
        
        
        @property { Array<string> } [portrait]
        
        @property { Array<string> } [landscape]
        
         
    */

/**
        @typedef NavigationSchema
        
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [platform]
        
        @property { CreatedBy } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { Orientation } [orientation]
        
        @property { number } [version]
        
        @property { NavigationReference } [navigation]
        
         
    */

/**
        @typedef NavigationRequest
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [platform]
        
        @property { Orientation } [orientation]
        
        @property { NavigationReference } [navigation]
        
         
    */

/**
        @typedef CustomPageSchema
        
        
        @property { string } [id]
        
        @property { string } [platform]
        
        @property { string } [title]
        
        @property { string } [slug]
        
        @property { string } [type]
        
        @property { string } [orientation]
        
        @property { string } [application]
        
        @property { string } [description]
        
        @property { boolean } [published]
        
        @property { Array<string> } [tags]
        
        @property { Array<ContentSchema> } [content]
        
        @property { CreatedBy } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { ScheduleSchema } [schedule]
        
         
    */

/**
        @typedef ContentSchema
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */

/**
        @typedef CustomPage
        
        
        @property { CustomPageSchema } [data]
        
         
    */

/**
        @typedef CustomBlogSchema
        
        
        @property { string } [id]
        
        @property { string } [title]
        
        @property { string } [slug]
        
        @property { string } [readingTime]
        
        @property { string } [application]
        
        @property { string } [description]
        
        @property { FeatureImage } [featureImage]
        
        @property { boolean } [published]
        
        @property { boolean } [archived]
        
        @property { Array<string> } [tags]
        
        @property { ContentSchema } [content]
        
        @property { Author } [author]
        
        @property { ScheduleSchema } [schedule]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { Object } [customJson]
        
         
    */

/**
        @typedef FeatureImage
        
        
        @property { string } [secureUrl]
        
         
    */

/**
        @typedef CustomBlog
        
        
        @property { CustomBlogSchema } [data]
        
         
    */

/**
        @typedef PageGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */

/**
        @typedef PageSpec
        
        
        @property { Array<Object> } [specifications]
        
         
    */

/**
        @typedef PageSpecParam
        
        
        @property { string } [key]
        
        @property { boolean } [required]
        
         
    */

/**
        @typedef PageSpecItem
        
        
        @property { string } [pageType]
        
        @property { string } [displayName]
        
        @property { Array<PageSpecParam> } [params]
        
        @property { Array<PageSpecParam> } [query]
        
         
    */

/**
        @typedef PageSchema
        
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { Array<string> } [componentIds]
        
        @property { Array<PageContent> } [content]
        
        @property { Object } [createdBy]
        
        @property { Object } [dateMeta]
        
        @property { string } [description]
        
        @property { Object } [featureImage]
        
        @property { Array<PageMeta> } [pageMeta]
        
        @property { ScheduleSchema } [schedule]
        
        @property { Object } [customJson]
        
        @property { string } [orientation]
        
        @property { string } [platform]
        
        @property { boolean } [published]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { SEO } [seo]
        
        @property { Object } [visibility]
        
         
    */

/**
        @typedef CreatedBy
        
        
        @property { string } [id]
        
         
    */

/**
        @typedef PageContent
        
        
        @property { string } [type]
        
        @property { Object } [value]
        
         
    */

/**
        @typedef PageMeta
        
        
        @property { string } [key]
        
        @property { Object } [value]
        
         
    */

/**
        @typedef PageRequest
        
        
        @property { CronSchedule } [schedule]
        
        @property { string } [application]
        
        @property { Object } [author]
        
        @property { Object } [customJson]
        
        @property { string } [orientation]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { SEO } [seo]
        
        @property { string } [title]
        
         
    */

/**
        @typedef CronSchedule
        
        
        @property { string } [cron]
        
        @property { string } [start]
        
        @property { string } [end]
        
        @property { number } [duration]
        
         
    */

/**
        @typedef PagePublishRequest
        
        
        @property { boolean } [publish]
        
         
    */

/**
        @typedef PageMetaSchema
        
        
        @property { Array<Object> } [systemPages]
        
        @property { Array<Object> } [customPages]
        
        @property { string } [applicationId]
        
         
    */

/**
        @typedef SlideshowGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Pagination } [page]
        
         
    */

/**
        @typedef SlideshowSchema
        
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { Array<Media> } [media]
        
        @property { boolean } [active]
        
        @property { boolean } [archived]
        
        @property { Object } [customJson]
        
         
    */

/**
        @typedef SlideshowRequest
        
        
        @property { string } [slug]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { Media } [media]
        
        @property { boolean } [active]
        
         
    */

/**
        @typedef Support
        
        
        @property { boolean } [created]
        
        @property { string } [id]
        
        @property { string } [configType]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { ContactSchema } [contact]
        
         
    */

/**
        @typedef Phone
        
        
        @property { string } [key]
        
        @property { string } [code]
        
        @property { string } [number]
        
         
    */

/**
        @typedef PhoneSchema
        
        
        @property { boolean } [active]
        
        @property { Array<Phone> } [phone]
        
         
    */

/**
        @typedef EmailSchema
        
        
        @property { boolean } [active]
        
        @property { Array<Email> } [email]
        
         
    */

/**
        @typedef ContactSchema
        
        
        @property { PhoneSchema } [phone]
        
        @property { EmailSchema } [email]
        
         
    */

/**
        @typedef TagsSchema
        
        
        @property { string } [application]
        
        @property { string } [id]
        
        @property { Array<TagSchema> } [tags]
        
         
    */

/**
        @typedef TagSchema
        
        
        @property { string } [name]
        
        @property { string } [url]
        
        @property { string } [type]
        
        @property { string } [subType]
        
        @property { string } [id]
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [content]
        
         
    */

/**
        @typedef StatsImported
        
        
        @property { number } [count]
        
         
    */

/**
        @typedef StatsProcessedEmail
        
        
        @property { number } [success]
        
        @property { number } [failed]
        
        @property { number } [suppressed]
        
         
    */

/**
        @typedef StatsProcessedSms
        
        
        @property { number } [success]
        
        @property { number } [failed]
        
        @property { number } [suppressed]
        
         
    */

/**
        @typedef StatsProcessed
        
        
        @property { StatsProcessedEmail } [email]
        
        @property { StatsProcessedSms } [sms]
        
         
    */

/**
        @typedef Stats
        
        
        @property { string } [id]
        
        @property { any } [imported]
        
        @property { any } [processed]
        
         
    */

/**
        @typedef GetStats
        
        
        @property { Array<Stats> } [items]
        
         
    */

/**
        @typedef CampaignReq
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [fileUrl]
        
        @property { string } [type]
        
        @property { number } [recordsCount]
        
        @property { string } [application]
        
         
    */

/**
        @typedef RecipientHeaders
        
        
        @property { string } [email]
        
         
    */

/**
        @typedef CampaignEmailTemplate
        
        
        @property { string } [key]
        
        @property { string } [value]
        
         
    */

/**
        @typedef CampignEmailProvider
        
        
        @property { string } [id]
        
        @property { string } [fromName]
        
        @property { string } [fromEmail]
        
         
    */

/**
        @typedef CampaignEmail
        
        
        @property { CampaignEmailTemplate } [template]
        
        @property { CampignEmailProvider } [provider]
        
         
    */

/**
        @typedef Campaign
        
        
        @property { RecipientHeaders } [recipientHeaders]
        
        @property { CampaignEmail } [email]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [datasource]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */

/**
        @typedef Campaigns
        
        
        @property { Array<Campaign> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef BigqueryHeadersReq
        
        
        @property { string } [query]
        
        @property { string } [type]
        
         
    */

/**
        @typedef BigqueryHeadersResHeaders
        
        
        @property { string } [name]
        
        @property { string } [type]
        
         
    */

/**
        @typedef BigqueryHeadersRes
        
        
        @property { Array<BigqueryHeadersResHeaders> } [headers]
        
         
    */

/**
        @typedef GetNRecordsCsvReq
        
        
        @property { string } [url]
        
        @property { boolean } [header]
        
        @property { number } [count]
        
         
    */

/**
        @typedef GetNRecordsCsvResItems
        
        
        @property { string } [phoneNumber]
        
        @property { string } [email]
        
        @property { string } [firstname]
        
        @property { string } [lastname]
        
        @property { string } [orderid]
        
         
    */

/**
        @typedef GetNRecordsCsvRes
        
        
        @property { Array<GetNRecordsCsvResItems> } [items]
        
         
    */

/**
        @typedef AudienceReq
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [fileUrl]
        
        @property { string } [type]
        
        @property { number } [recordsCount]
        
        @property { string } [application]
        
         
    */

/**
        @typedef Audience
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [fileUrl]
        
        @property { string } [type]
        
        @property { number } [recordsCount]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */

/**
        @typedef Audiences
        
        
        @property { Array<Audience> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef EmailProviderReqFrom
        
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { boolean } [isDefault]
        
         
    */

/**
        @typedef EmailProviderReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [apiKey]
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { Array<EmailProviderReqFrom> } [from]
        
         
    */

/**
        @typedef EmailProvider
        
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { Array<EmailProviderReqFrom> } [from]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [apiKey]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */

/**
        @typedef EmailProviders
        
        
        @property { Array<EmailProvider> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef EmailTemplateDeleteSuccessRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */

/**
        @typedef EmailTemplateDeleteFailureRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */

/**
        @typedef EmailTemplateKeys
        
        
        @property { string } [to]
        
        @property { string } [cc]
        
        @property { string } [bcc]
        
         
    */

/**
        @typedef EmailTemplateHeaders
        
        
        @property { string } [key]
        
        @property { string } [value]
        
         
    */

/**
        @typedef EmailTemplateReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { EmailTemplateKeys } [keys]
        
        @property { string } [from]
        
        @property { Array<string> } [staticTo]
        
        @property { Array<string> } [staticCc]
        
        @property { Array<string> } [staticBcc]
        
        @property { string } [replyTo]
        
        @property { Array<EmailTemplateHeaders> } [headers]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [attachments]
        
        @property { string } [priority]
        
         
    */

/**
        @typedef TemplateAndType
        
        
        @property { string } [templateType]
        
        @property { string } [template]
        
         
    */

/**
        @typedef EmailTemplateRes
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<string> } [staticTo]
        
        @property { Array<string> } [staticCc]
        
        @property { Array<string> } [staticBcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { EmailTemplateKeys } [keys]
        
        @property { string } [from]
        
        @property { string } [replyTo]
        
        @property { Array<EmailTemplateHeaders> } [headers]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [attachments]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */

/**
        @typedef EmailTemplate
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<any> } [staticTo]
        
        @property { Array<any> } [staticCc]
        
        @property { Array<any> } [staticBcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [from]
        
        @property { string } [fromName]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [headers]
        
        @property { Array<any> } [attachments]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef SystemEmailTemplate
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<any> } [staticTo]
        
        @property { Array<any> } [staticCc]
        
        @property { Array<any> } [staticBcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [from]
        
        @property { string } [fromName]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [headers]
        
        @property { Array<any> } [attachments]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef EmailTemplates
        
        
        @property { Array<EmailTemplate> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SystemEmailTemplates
        
        
        @property { Array<SystemEmailTemplate> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef EventSubscriptionTemplateSms
        
        
        @property { boolean } [subscribed]
        
        @property { string } [template]
        
         
    */

/**
        @typedef EventSubscriptionTemplateEmail
        
        
        @property { boolean } [subscribed]
        
        @property { string } [template]
        
         
    */

/**
        @typedef EventSubscriptionTemplate
        
        
        @property { EventSubscriptionTemplateSms } [sms]
        
        @property { EventSubscriptionTemplateEmail } [email]
        
         
    */

/**
        @typedef EventSubscription
        
        
        @property { EventSubscriptionTemplate } [template]
        
        @property { boolean } [isDefault]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [event]
        
        @property { string } [slug]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef EventSubscriptions
        
        
        @property { Array<EventSubscription> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef TriggerJobResponse
        
        
        @property { number } [status]
        
         
    */

/**
        @typedef TriggerJobRequest
        
        
        @property { string } [jobId]
        
         
    */

/**
        @typedef Job
        
        
        @property { boolean } [completed]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [campaign]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef Jobs
        
        
        @property { Array<any> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef JobLog
        
        
        @property { any } [imported]
        
        @property { any } [processed]
        
        @property { string } [id]
        
        @property { string } [job]
        
        @property { string } [campaign]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef JobLogs
        
        
        @property { Array<JobLog> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef LogEmail
        
        
        @property { string } [template]
        
         
    */

/**
        @typedef LogPushnotification
        
        
        @property { Array<string> } [pushtokens]
        
         
    */

/**
        @typedef LogMeta
        
        
        @property { string } [type]
        
        @property { string } [identifier]
        
        @property { string } [key]
        
        @property { string } [offset]
        
        @property { string } [partition]
        
        @property { string } [topic]
        
         
    */

/**
        @typedef Log
        
        
        @property { LogEmail } [email]
        
        @property { LogPushnotification } [pushnotification]
        
        @property { LogMeta } [meta]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [service]
        
        @property { string } [step]
        
        @property { string } [status]
        
        @property { any } [data]
        
        @property { string } [expireAt]
        
        @property { string } [createdAt]
        
         
    */

/**
        @typedef Logs
        
        
        @property { Array<Log> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef PushtokenReq
        
        
        @property { string } [action]
        
        @property { string } [bundleIdentifier]
        
        @property { string } [pushToken]
        
        @property { string } [uniqueDeviceId]
        
         
    */

/**
        @typedef PushtokenRes
        
        
        @property { string } [id]
        
        @property { string } [bundleIdentifier]
        
        @property { string } [pushToken]
        
        @property { string } [uniqueDeviceId]
        
        @property { string } [type]
        
        @property { string } [platform]
        
        @property { string } [applicationId]
        
        @property { string } [userId]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [expiredAt]
        
         
    */

/**
        @typedef SmsProviderReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [sender]
        
        @property { string } [username]
        
        @property { string } [authkey]
        
        @property { string } [type]
        
        @property { string } [provider]
        
         
    */

/**
        @typedef SmsProvider
        
        
        @property { number } [rpt]
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [sender]
        
        @property { string } [username]
        
        @property { string } [authkey]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */

/**
        @typedef SmsProviders
        
        
        @property { Array<SmsProvider> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SmsTemplateDeleteSuccessRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */

/**
        @typedef SmsTemplateDeleteFailureRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */

/**
        @typedef SmsTemplateMessage
        
        
        @property { string } [templateType]
        
        @property { string } [template]
        
         
    */

/**
        @typedef SmsTemplateReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [templateVariables]
        
        @property { Array<any> } [attachments]
        
        @property { string } [priority]
        
         
    */

/**
        @typedef SmsTemplateRes
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [templateVariables]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */

/**
        @typedef SmsTemplate
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { string } [priority]
        
        @property { Array<any> } [tags]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [templateVariables]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef SystemSmsTemplate
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [templateVariables]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef SmsTemplates
        
        
        @property { Array<SmsTemplate> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SystemSmsTemplates
        
        
        @property { Array<SystemSmsTemplate> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef Notification
        
        
        @property { string } [title]
        
        @property { string } [body]
        
        @property { string } [subtitle]
        
        @property { string } [icon]
        
        @property { string } [deeplink]
        
        @property { string } [clickAction]
        
         
    */

/**
        @typedef SystemNotificationUser
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */

/**
        @typedef SystemNotificationSettings
        
        
        @property { boolean } [sound]
        
        @property { string } [priority]
        
        @property { string } [timeToLive]
        
         
    */

/**
        @typedef SystemNotification
        
        
        @property { Notification } [notification]
        
        @property { SystemNotificationUser } [user]
        
        @property { SystemNotificationUser } [settings]
        
        @property { string } [id]
        
        @property { string } [group]
        
        @property { string } [createdAt]
        
         
    */

/**
        @typedef SystemNotificationsPage
        
        
        @property { string } [type]
        
        @property { number } [current]
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
         
    */

/**
        @typedef SystemNotifications
        
        
        @property { Array<SystemNotification> } [items]
        
        @property { number } [lastReadAnchor]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef Page
        
        
        @property { string } [type]
        
        @property { number } [current]
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
         
    */

/**
        @typedef PaymentGatewayConfigResponse
        
        
        @property { Array<Object> } [aggregators]
        
        @property { Array<string> } excludedFields
        
        @property { Array<string> } displayFields
        
        @property { string } appId
        
        @property { boolean } created
        
        @property { boolean } success
        
         
    */

/**
        @typedef ErrorCodeDescription
        
        
        @property { string } description
        
        @property { boolean } success
        
        @property { string } code
        
         
    */

/**
        @typedef PaymentGatewayConfig
        
        
        @property { boolean } [isActive]
        
        @property { string } key
        
        @property { string } configType
        
        @property { string } merchantSalt
        
        @property { string } secret
        
         
    */

/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { boolean } [isActive]
        
        @property { PaymentGatewayConfig } [aggregatorName]
        
        @property { string } appId
        
         
    */

/**
        @typedef PaymentGatewayToBeReviewed
        
        
        @property { Array<string> } aggregator
        
        @property { boolean } success
        
         
    */

/**
        @typedef ErrorCodeAndDescription
        
        
        @property { string } description
        
        @property { string } code
        
         
    */

/**
        @typedef HttpErrorCodeAndResponse
        
        
        @property { boolean } success
        
        @property { ErrorCodeAndDescription } error
        
         
    */

/**
        @typedef PaymentModeLogo
        
        
        @property { string } large
        
        @property { string } small
        
         
    */

/**
        @typedef PaymentModeList
        
        
        @property { string } [cardType]
        
        @property { boolean } [expired]
        
        @property { string } [cardId]
        
        @property { string } [name]
        
        @property { number } [expYear]
        
        @property { string } [code]
        
        @property { string } [cardReference]
        
        @property { Array<string> } [intentAppErrorList]
        
        @property { number } [retryCount]
        
        @property { string } [cardBrand]
        
        @property { string } [cardBrandImage]
        
        @property { string } [cardNumber]
        
        @property { string } [displayName]
        
        @property { string } [cardIssuer]
        
        @property { string } [nickname]
        
        @property { string } [cardToken]
        
        @property { number } [timeout]
        
        @property { PaymentModeLogo } [logoUrl]
        
        @property { string } aggregatorName
        
        @property { string } [cardName]
        
        @property { number } [expMonth]
        
        @property { string } [cardIsin]
        
        @property { string } [merchantCode]
        
        @property { number } [displayPriority]
        
        @property { string } [intentFlow]
        
        @property { string } [fyndVpa]
        
        @property { string } [cardFingerprint]
        
         
    */

/**
        @typedef RootPaymentMode
        
        
        @property { boolean } [anonymousEnable]
        
        @property { string } [aggregatorName]
        
        @property { Array<PaymentModeList> } [list]
        
        @property { number } displayPriority
        
        @property { string } displayName
        
        @property { string } name
        
        @property { boolean } [addCardEnabled]
        
         
    */

/**
        @typedef PaymentOptions
        
        
        @property { Array<RootPaymentMode> } paymentOption
        
         
    */

/**
        @typedef PaymentOptionsResponse
        
        
        @property { PaymentOptions } paymentOptions
        
        @property { boolean } success
        
         
    */

/**
        @typedef PayoutsResponse
        
        
        @property { boolean } isActive
        
        @property { Object } uniqueTransferNo
        
        @property { string } transferType
        
        @property { Object } moreAttributes
        
        @property { Object } customers
        
        @property { Array<Object> } payoutsAggregators
        
        @property { boolean } isDefault
        
         
    */

/**
        @typedef PayoutRequest
        
        
        @property { string } aggregator
        
        @property { boolean } isActive
        
        @property { Object } bankDetails
        
        @property { Object } users
        
        @property { string } transferType
        
        @property { string } uniqueExternalId
        
         
    */

/**
        @typedef PayoutResponse
        
        
        @property { string } aggregator
        
        @property { boolean } isActive
        
        @property { string } paymentStatus
        
        @property { Object } bankDetails
        
        @property { string } uniqueTransferNo
        
        @property { Object } users
        
        @property { string } transferType
        
        @property { Object } payouts
        
        @property { boolean } created
        
        @property { boolean } success
        
         
    */

/**
        @typedef UpdatePayoutResponse
        
        
        @property { boolean } isActive
        
        @property { boolean } success
        
        @property { boolean } isDefault
        
         
    */

/**
        @typedef UpdatePayoutRequest
        
        
        @property { string } uniqueExternalId
        
        @property { boolean } isActive
        
        @property { boolean } isDefault
        
         
    */

/**
        @typedef DeletePayoutResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef SubscriptionPaymentMethodResponse
        
        
        @property { Array<Object> } data
        
        @property { boolean } success
        
         
    */

/**
        @typedef DeleteSubscriptionPaymentMethodResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef SubscriptionConfigResponse
        
        
        @property { string } aggregator
        
        @property { Object } config
        
        @property { boolean } success
        
         
    */

/**
        @typedef SaveSubscriptionSetupIntentRequest
        
        
        @property { string } uniqueExternalId
        
         
    */

/**
        @typedef SaveSubscriptionSetupIntentResponse
        
        
        @property { Object } data
        
        @property { boolean } success
        
         
    */

/**
        @typedef GetActivityStatus
        
        
        @property { ActivityHistory } activityHistory
        
         
    */

/**
        @typedef ActivityHistory
        
        
        @property { string } [createdat]
        
        @property { string } [message]
        
        @property { string } [type]
        
        @property { string } [user]
        
         
    */

/**
        @typedef FailedOrders
        
        
        @property { FailOrder } orders
        
         
    */

/**
        @typedef FailOrder
        
        
        @property { string } [updatedAt]
        
        @property { string } [id]
        
        @property { string } [reason]
        
        @property { MarketplaceOrder } [marketplaceOrder]
        
        @property { string } [marketplaceOrderId]
        
        @property { string } [createdAt]
        
        @property { string } [appId]
        
        @property { string } [marketplace]
        
        @property { number } [companyId]
        
         
    */

/**
        @typedef MarketplaceOrder
        
        
        @property { string } [orderStatusUrl]
        
        @property { string } [adminGraphqlApiId]
        
        @property { string } [email]
        
        @property { boolean } [test]
        
        @property { string } [note]
        
        @property { string } [totalPrice]
        
        @property { number } [appId]
        
        @property { TotalDiscountsSet } [totalDiscountsSet]
        
        @property { TotalPriceSet } [totalPriceSet]
        
        @property { TotalTaxSet } [totalTaxSet]
        
        @property { string } [gateway]
        
        @property { string } [name]
        
        @property { SubtotalPriceSet } [subtotalPriceSet]
        
        @property { number } [number]
        
        @property { boolean } [buyerAcceptsMarketing]
        
        @property { string } [contactEmail]
        
        @property { string } [token]
        
        @property { string } [sourceName]
        
        @property { Array<any> } [paymentGatewayNames]
        
        @property { string } [presentmentCurrency]
        
        @property { string } [subtotalPrice]
        
        @property { string } [processedAt]
        
        @property { number } [orderNumber]
        
        @property { string } [totalTipReceived]
        
        @property { number } [id]
        
        @property { boolean } [confirmed]
        
        @property { string } [currency]
        
        @property { string } [totalLineItemsPrice]
        
        @property { LineItems } [lineItems]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [totalWeight]
        
        @property { BillingAddress } [billingAddress]
        
        @property { TotalShippingPriceSet } [totalShippingPriceSet]
        
        @property { Customer } [customer]
        
        @property { string } [totalDiscounts]
        
        @property { TotalLineItemsPriceSet } [totalLineItemsPriceSet]
        
        @property { string } [tags]
        
        @property { string } [totalPriceUsd]
        
        @property { number } [userId]
        
        @property { string } [totalTax]
        
        @property { string } [processingMethod]
        
        @property { ShippingAddress } [shippingAddress]
        
        @property { boolean } [taxesIncluded]
        
        @property { string } [financialStatus]
        
         
    */

/**
        @typedef TotalDiscountsSet
        
        
        @property { PresentmentMoney } [presentmentMoney]
        
        @property { ShopMoney } [shopMoney]
        
         
    */

/**
        @typedef PresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef ShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalPriceSet
        
        
        @property { TotalPriceSetShopMoney } [shopMoney]
        
        @property { TotalPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef TotalPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalTaxSet
        
        
        @property { TotalTaxSetShopMoney } [shopMoney]
        
        @property { TotalTaxSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef TotalTaxSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalTaxSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef SubtotalPriceSet
        
        
        @property { SubtotalPriceSetShopMoney } [shopMoney]
        
        @property { SubtotalPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef SubtotalPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef SubtotalPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef LineItems
        
        
        @property { string } [sku]
        
        @property { number } [fulfillableQuantity]
        
        @property { number } [grams]
        
        @property { string } [totalDiscount]
        
        @property { LineItemsArticle } [article]
        
        @property { string } [title]
        
        @property { string } [variantInventoryManagement]
        
        @property { number } [id]
        
        @property { number } [variantId]
        
        @property { string } [variantTitle]
        
        @property { boolean } [productExists]
        
        @property { string } [price]
        
        @property { string } [adminGraphqlApiId]
        
        @property { number } [quantity]
        
        @property { string } [vendor]
        
        @property { string } [fulfillmentService]
        
        @property { boolean } [taxable]
        
        @property { string } [name]
        
        @property { number } [productId]
        
        @property { PriceSet } [priceSet]
        
        @property { TaxLines } [taxLines]
        
        @property { boolean } [requiresShipping]
        
        @property { boolean } [giftCard]
        
        @property { TotalDiscountSet } [totalDiscountSet]
        
         
    */

/**
        @typedef LineItemsArticle
        
        
        @property { Quantities } [quantities]
        
        @property { string } [oldArticleUid]
        
        @property { number } [totalQuantity]
        
        @property { Manufacturer } [manufacturer]
        
        @property { ArticlePrice } [price]
        
        @property { boolean } [trackInventory]
        
        @property { Company } [company]
        
        @property { boolean } [isActive]
        
        @property { FailOrderDateMeta } [dateMeta]
        
        @property { boolean } [fragile]
        
        @property { MarketplaceIdentifiers } [marketplaceIdentifiers]
        
        @property { string } [size]
        
        @property { boolean } [isSet]
        
        @property { Dimension } [dimension]
        
        @property { Weight } [weight]
        
        @property { Store } [store]
        
        @property { ArticleMeta } [meta]
        
        @property { string } [uid]
        
        @property { ArticleBrand } [brand]
        
        @property { number } [itemId]
        
        @property { string } [fyndArticleCode]
        
        @property { string } [id]
        
        @property { LineItemsArticleIdentifier } [identifier]
        
        @property { string } [sellerIdentifier]
        
        @property { string } [fyndItemCode]
        
        @property { string } [countryOfOrigin]
        
         
    */

/**
        @typedef Quantities
        
        
        @property { NotAvailable } [notAvailable]
        
        @property { Sellable } [sellable]
        
        @property { OrderCommitted } [orderCommitted]
        
        @property { Damaged } [damaged]
        
         
    */

/**
        @typedef NotAvailable
        
        
        @property { number } [count]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef Sellable
        
        
        @property { number } [count]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef OrderCommitted
        
        
        @property { number } [count]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef Damaged
        
        
        @property { string } [updatedAt]
        
        @property { number } [count]
        
         
    */

/**
        @typedef Manufacturer
        
        
        @property { boolean } [isDefault]
        
        @property { string } [address]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ArticlePrice
        
        
        @property { number } [marked]
        
        @property { string } [currency]
        
        @property { number } [effective]
        
        @property { number } [transfer]
        
         
    */

/**
        @typedef Company
        
        
        @property { number } [id]
        
        @property { string } [companyType]
        
        @property { string } [businessType]
        
        @property { string } [companyName]
        
        @property { string } [createdOn]
        
        @property { string } [panNo]
        
        @property { boolean } [returnAllowed]
        
        @property { string } [meta]
        
        @property { boolean } [exchangeAllowed]
        
        @property { string } [agreementStartDate]
        
        @property { number } [exchangeWithinDays]
        
        @property { number } [paymentProcesingCharge]
        
        @property { boolean } [fyndAFitAvailable]
        
        @property { string } [modifiedOn]
        
        @property { number } [returnWithinDays]
        
         
    */

/**
        @typedef FailOrderDateMeta
        
        
        @property { string } [addedOnStore]
        
        @property { string } [inventoryUpdatedOn]
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */

/**
        @typedef MarketplaceIdentifiers
        
        
        @property { TatacliqLuxury } [tatacliqLuxury]
        
         
    */

/**
        @typedef TatacliqLuxury
        
        
        @property { string } [sku]
        
         
    */

/**
        @typedef Dimension
        
        
        @property { number } [height]
        
        @property { number } [width]
        
        @property { string } [unit]
        
        @property { number } [length]
        
        @property { boolean } [isDefault]
        
         
    */

/**
        @typedef Weight
        
        
        @property { boolean } [isDefault]
        
        @property { string } [unit]
        
        @property { number } [shipping]
        
         
    */

/**
        @typedef Store
        
        
        @property { number } [id]
        
         
    */

/**
        @typedef ArticleMeta
        
        
        @property { string } [service]
        
         
    */

/**
        @typedef ArticleBrand
        
        
        @property { string } [name]
        
        @property { number } [id]
        
         
    */

/**
        @typedef LineItemsArticleIdentifier
        
        
        @property { string } [skuCode]
        
         
    */

/**
        @typedef PriceSet
        
        
        @property { PriceSetShopMoney } [shopMoney]
        
        @property { PriceSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef PriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef PriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TaxLines
        
        
        @property { string } [title]
        
        @property { string } [price]
        
        @property { number } [rate]
        
        @property { TaxLinesPriceSet } [priceSet]
        
         
    */

/**
        @typedef TaxLinesPriceSet
        
        
        @property { TaxLinesPriceSetShopMoney } [shopMoney]
        
        @property { TaxLinesPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef TaxLinesPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TaxLinesPriceSetPresentmentMoney
        
        
        @property { string } [currencyCode]
        
        @property { string } [amount]
        
         
    */

/**
        @typedef TotalDiscountSet
        
        
        @property { TotalDiscountSetPresentmentMoney } [presentmentMoney]
        
        @property { TotalDiscountSetShopMoney } [shopMoney]
        
         
    */

/**
        @typedef TotalDiscountSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalDiscountSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef BillingAddress
        
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [zip]
        
        @property { string } [lastName]
        
        @property { string } [address2]
        
        @property { number } [longitude]
        
        @property { string } [provinceCode]
        
        @property { string } [phone]
        
        @property { string } [company]
        
        @property { number } [latitude]
        
        @property { string } [name]
        
        @property { string } [country]
        
        @property { string } [countryCode]
        
        @property { string } [firstName]
        
        @property { string } [province]
        
         
    */

/**
        @typedef TotalShippingPriceSet
        
        
        @property { TotalShippingPriceSetShopMoney } [shopMoney]
        
        @property { TotalShippingPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef TotalShippingPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalShippingPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef Customer
        
        
        @property { string } [createdAt]
        
        @property { number } [id]
        
        @property { string } [lastName]
        
        @property { string } [state]
        
        @property { number } [lastOrderId]
        
        @property { string } [note]
        
        @property { boolean } [verifiedEmail]
        
        @property { string } [phone]
        
        @property { boolean } [acceptsMarketing]
        
        @property { string } [firstName]
        
        @property { string } [tags]
        
        @property { string } [lastOrderName]
        
        @property { number } [ordersCount]
        
        @property { string } [totalSpent]
        
        @property { boolean } [taxExempt]
        
        @property { string } [currency]
        
        @property { string } [acceptsMarketingUpdatedAt]
        
        @property { string } [email]
        
        @property { string } [updatedAt]
        
        @property { string } [adminGraphqlApiId]
        
        @property { DefaultAddress } [defaultAddress]
        
         
    */

/**
        @typedef DefaultAddress
        
        
        @property { string } [lastName]
        
        @property { string } [name]
        
        @property { string } [provinceCode]
        
        @property { string } [countryCode]
        
        @property { boolean } [isDefault]
        
        @property { number } [id]
        
        @property { number } [customerId]
        
        @property { string } [firstName]
        
        @property { string } [address1]
        
        @property { string } [phone]
        
        @property { string } [countryName]
        
        @property { string } [company]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [province]
        
        @property { string } [country]
        
        @property { string } [zip]
        
         
    */

/**
        @typedef TotalLineItemsPriceSet
        
        
        @property { TotalLineItemsPriceSetShopMoney } [shopMoney]
        
        @property { TotalLineItemsPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef TotalLineItemsPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalLineItemsPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef ShippingAddress
        
        
        @property { string } [address1]
        
        @property { string } [zip]
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
        @property { string } [lastName]
        
        @property { number } [latitude]
        
        @property { string } [provinceCode]
        
        @property { string } [firstName]
        
        @property { string } [phone]
        
        @property { string } [province]
        
        @property { number } [longitude]
        
        @property { string } [city]
        
        @property { string } [company]
        
        @property { string } [name]
        
         
    */

/**
        @typedef OrderListing
        
        
        @property { Array<OrderItems> } items
        
        @property { Filters } filters
        
        @property { NextOrderStatus } nextOrderStatus
        
        @property { PlatformOrderPage } page
        
        @property { AppliedFilters } appliedFilters
        
         
    */

/**
        @typedef OrderItems
        
        
        @property { PlatformOrderUserInfo } [user]
        
        @property { PlatformDeliveryAddress } [deliveryAddress]
        
        @property { Channel } [channel]
        
        @property { PlatformBreakupValues } [breakupValues]
        
        @property { string } [id]
        
        @property { PlatformApplication } [application]
        
        @property { PlatformShipment } [shipments]
        
        @property { string } [createdAt]
        
        @property { number } [totalShipmentsInOrder]
        
        @property { ItemsPayments } [payments]
        
         
    */

/**
        @typedef PlatformOrderUserInfo
        
        
        @property { string } [mobile]
        
        @property { string } [firstName]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [lastName]
        
        @property { boolean } [isAnonymousUser]
        
        @property { number } [uid]
        
        @property { string } [avisUserId]
        
         
    */

/**
        @typedef PlatformDeliveryAddress
        
        
        @property { string } [area]
        
        @property { string } [state]
        
        @property { string } [country]
        
        @property { string } [version]
        
        @property { string } [address1]
        
        @property { number } [latitude]
        
        @property { string } [updatedAt]
        
        @property { string } [city]
        
        @property { string } [landmark]
        
        @property { string } [createdAt]
        
        @property { string } [name]
        
        @property { string } [address]
        
        @property { string } [phone]
        
        @property { number } [longitude]
        
        @property { string } [addressType]
        
        @property { string } [email]
        
        @property { string } [pincode]
        
        @property { string } [address2]
        
        @property { string } [contactPerson]
        
        @property { string } [addressCategory]
        
         
    */

/**
        @typedef Channel
        
        
        @property { string } [name]
        
        @property { string } [logo]
        
         
    */

/**
        @typedef PlatformBreakupValues
        
        
        @property { string } [display]
        
        @property { number } [value]
        
        @property { string } [name]
        
         
    */

/**
        @typedef PlatformApplication
        
        
        @property { string } [name]
        
        @property { string } [owner]
        
        @property { boolean } [postOrderReassignment]
        
        @property { string } [id]
        
        @property { string } [description]
        
        @property { boolean } [dpAssignment]
        
        @property { ArticleAssignment } [articleAssignment]
        
        @property { boolean } [forceReassignment]
        
        @property { string } [token]
        
        @property { string } [secret]
        
         
    */

/**
        @typedef ArticleAssignment
        
        
        @property { string } [strategy]
        
        @property { string } [level]
        
         
    */

/**
        @typedef PlatformShipment
        
        
        @property { PlatformShipmentStatus } [status]
        
        @property { Bags } [bags]
        
        @property { ShipmentPrices } [prices]
        
        @property { ShipmentBreakupValues } [breakupValues]
        
        @property { string } [id]
        
        @property { DpDetails } [dpDetails]
        
        @property { ShipmentInvoice } [invoice]
        
        @property { PlatformFulfillingStore } [fulfillingStore]
        
        @property { Payments } [payments]
        
        @property { ShipmentGst } [gst]
        
        @property { Company } [company]
        
        @property { PlatformShipmentBrand } [brand]
        
        @property { Object } [coupon]
        
        @property { string } [orderSource]
        
        @property { boolean } [isNotFyndSource]
        
        @property { string } [comment]
        
        @property { Promise } [promise]
        
        @property { ShipmentTrackingDetails } [trackingDetails]
        
        @property { boolean } [isFyndCoupon]
        
        @property { string } [orderType]
        
        @property { ShipmentUser } [user]
        
         
    */

/**
        @typedef PlatformShipmentStatus
        
        
        @property { number } [id]
        
        @property { Array<number> } [bagList]
        
        @property { string } [createdAt]
        
        @property { string } [status]
        
        @property { string } [name]
        
        @property { number } [progress]
        
        @property { string } [shipmentId]
        
        @property { string } [currentShipmentStatus]
        
        @property { string } [colorCode]
        
         
    */

/**
        @typedef Bags
        
        
        @property { Array<BagFinancialBreakup> } [financialBreakup]
        
        @property { BagCurrStatus } [status]
        
        @property { BagItem } [item]
        
        @property { BagArticle } [article]
        
        @property { number } [id]
        
        @property { BagPrices } [prices]
        
        @property { GstDetails } [gstDetails]
        
        @property { BagBreakupValues } [breakupValues]
        
        @property { number } [updateTime]
        
        @property { BagCurrentStatus } [currentStatus]
        
        @property { BagStatus } [bagStatus]
        
         
    */

/**
        @typedef BagFinancialBreakup
        
        
        @property { number } [valueOfGood]
        
        @property { string } [hsnCode]
        
        @property { number } [priceEffective]
        
        @property { number } [codCharges]
        
        @property { string } [gstFee]
        
        @property { number } [fyndCredits]
        
        @property { number } [refundAmount]
        
        @property { number } [cashbackApplied]
        
        @property { number } [transferPrice]
        
        @property { number } [amountPaidRoundoff]
        
        @property { number } [couponValue]
        
        @property { number } [amountPaid]
        
        @property { number } [gstTaxPercentage]
        
        @property { string } [size]
        
        @property { number } [totalUnits]
        
        @property { number } [discount]
        
        @property { number } [couponEffectiveDiscount]
        
        @property { number } [cashback]
        
        @property { number } [promotionEffectiveDiscount]
        
        @property { string } [gstTag]
        
        @property { number } [deliveryCharge]
        
        @property { number } [refundCredit]
        
        @property { number } [priceMarked]
        
        @property { Identifiers } [identifiers]
        
        @property { string } [itemName]
        
        @property { boolean } [addedToFyndCash]
        
        @property { number } [brandCalculatedAmount]
        
         
    */

/**
        @typedef Identifiers
        
        
        @property { string } [ean]
        
         
    */

/**
        @typedef BagCurrStatus
        
        
        @property { boolean } [enableTracking]
        
        @property { boolean } [isCustomerReturnAllowed]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isReturnable]
        
        @property { boolean } [canBeCancelled]
        
         
    */

/**
        @typedef BagItem
        
        
        @property { number } [id]
        
        @property { string } [size]
        
        @property { string } [slugKey]
        
        @property { boolean } [canReturn]
        
        @property { number } [brandId]
        
        @property { Array<string> } [l2Category]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { boolean } [canCancel]
        
        @property { BagItemAttributes } [attributes]
        
        @property { string } [l3CategoryName]
        
        @property { number } [l3Category]
        
        @property { Array<string> } [l1Category]
        
        @property { Array<string> } [image]
        
        @property { string } [brand]
        
        @property { string } [lastUpdatedAt]
        
         
    */

/**
        @typedef BagItemAttributes
        
        
        @property { string } [itemCode]
        
        @property { string } [brandName]
        
        @property { string } [countryOfOrigin]
        
         
    */

/**
        @typedef BagArticle
        
        
        @property { ArticleIdentifiers } [identifiers]
        
        @property { boolean } [espModified]
        
        @property { boolean } [isSet]
        
        @property { string } [size]
        
        @property { string } [code]
        
        @property { Set } [set]
        
        @property { string } [sellerIdentifier]
        
        @property { BagArticleReturnConfig } [returnConfig]
        
        @property { string } [id]
        
        @property { string } [uid]
        
        @property { Object } [childDetails]
        
         
    */

/**
        @typedef ArticleIdentifiers
        
        
        @property { string } [ean]
        
         
    */

/**
        @typedef Set
        
        
        @property { number } [quantity]
        
        @property { SetSizeDistribution } [sizeDistribution]
        
         
    */

/**
        @typedef SetSizeDistribution
        
        
        @property { Sizes } [sizes]
        
         
    */

/**
        @typedef Sizes
        
        
        @property { string } [size]
        
        @property { number } [pieces]
        
         
    */

/**
        @typedef BagArticleReturnConfig
        
        
        @property { number } [time]
        
        @property { string } [unit]
        
        @property { boolean } [returnable]
        
         
    */

/**
        @typedef ShipmentPrices
        
        
        @property { number } [refundAmount]
        
        @property { number } [cashbackApplied]
        
        @property { number } [transferPrice]
        
        @property { number } [couponValue]
        
        @property { number } [amountPaid]
        
        @property { number } [deliveryCharge]
        
        @property { number } [couponEffectiveDiscount]
        
        @property { number } [codCharges]
        
        @property { number } [refundCredit]
        
        @property { boolean } [addedToFyndCash]
        
        @property { number } [gstTaxPercentage]
        
        @property { number } [priceMarked]
        
        @property { number } [priceEffective]
        
        @property { number } [discount]
        
        @property { number } [promotionEffectiveDiscount]
        
        @property { number } [amountPaidRoundoff]
        
        @property { number } [fyndCredits]
        
        @property { number } [brandCalculatedAmount]
        
        @property { number } [cashback]
        
        @property { number } [valueOfGood]
        
         
    */

/**
        @typedef GstDetails
        
        
        @property { number } [brandCalculatedAmount]
        
        @property { string } [gstFee]
        
        @property { string } [gstTag]
        
        @property { string } [hsnCode]
        
        @property { number } [valueOfGood]
        
        @property { number } [gstTaxPercentage]
        
        @property { boolean } [isDefaultHsnCode]
        
         
    */

/**
        @typedef BagBreakupValues
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { number } [value]
        
         
    */

/**
        @typedef BagCurrentStatus
        
        
        @property { string } [updatedAt]
        
        @property { BagStateMapper } [bagStateMapper]
        
        @property { string } [status]
        
        @property { string } [stateType]
        
         
    */

/**
        @typedef BagStateMapper
        
        
        @property { string } [appStateName]
        
        @property { boolean } [isActive]
        
        @property { string } [displayName]
        
        @property { string } [name]
        
        @property { string } [appDisplayName]
        
         
    */

/**
        @typedef BagStatus
        
        
        @property { string } [status]
        
        @property { string } [stateType]
        
        @property { string } [updatedAt]
        
        @property { BagStatusBagStateMapper } [bagStateMapper]
        
         
    */

/**
        @typedef BagStatusBagStateMapper
        
        
        @property { boolean } [isActive]
        
        @property { string } [displayName]
        
        @property { string } [name]
        
        @property { string } [appDisplayName]
        
        @property { string } [appStateName]
        
         
    */

/**
        @typedef BagPrices
        
        
        @property { number } [cashback]
        
        @property { number } [refundCredit]
        
        @property { number } [couponValue]
        
        @property { number } [deliveryCharge]
        
        @property { number } [fyndCredits]
        
        @property { number } [priceMarked]
        
        @property { number } [cashbackApplied]
        
        @property { number } [valueOfGood]
        
        @property { number } [amountPaidRoundoff]
        
        @property { number } [amountPaid]
        
        @property { number } [codCharges]
        
        @property { number } [priceEffective]
        
        @property { number } [refundAmount]
        
        @property { number } [discount]
        
         
    */

/**
        @typedef ShipmentBreakupValues
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { number } [value]
        
         
    */

/**
        @typedef DpDetails
        
        
        @property { string } [gstTag]
        
         
    */

/**
        @typedef ShipmentInvoice
        
        
        @property { string } [paymentType]
        
        @property { string } [updatedDate]
        
        @property { string } [invoiceUrl]
        
        @property { string } [labelUrl]
        
        @property { string } [paymentMode]
        
        @property { number } [amountToCollect]
        
        @property { RtoAddress } [rtoAddress]
        
         
    */

/**
        @typedef RtoAddress
        
        
        @property { string } [name]
        
        @property { number } [id]
        
        @property { string } [phone]
        
        @property { string } [locationType]
        
        @property { StoreAddressJson } [storeAddressJson]
        
        @property { string } [code]
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { string } [pincode]
        
        @property { number } [companyId]
        
        @property { string } [contactPerson]
        
        @property { string } [state]
        
        @property { string } [storeEmail]
        
        @property { string } [address2]
        
         
    */

/**
        @typedef StoreAddressJson
        
        
        @property { string } [country]
        
        @property { number } [latitude]
        
        @property { string } [updatedAt]
        
        @property { string } [area]
        
        @property { string } [state]
        
        @property { string } [addressType]
        
        @property { string } [city]
        
        @property { string } [pincode]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { number } [longitude]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { string } [createdAt]
        
        @property { string } [contactPerson]
        
        @property { string } [addressCategory]
        
        @property { string } [version]
        
        @property { string } [landmark]
        
         
    */

/**
        @typedef PlatformFulfillingStore
        
        
        @property { number } [packagingMaterialCount]
        
        @property { string } [locationType]
        
        @property { string } [code]
        
        @property { string } [city]
        
        @property { FulfillingStoreMeta } [meta]
        
        @property { string } [name]
        
        @property { boolean } [isActive]
        
        @property { string } [address1]
        
        @property { string } [storeEmail]
        
        @property { boolean } [isArchived]
        
        @property { string } [state]
        
        @property { string } [address2]
        
        @property { string } [contactPerson]
        
        @property { string } [phone]
        
        @property { boolean } [isEnabledForRecon]
        
        @property { string } [fulfillmentChannel]
        
        @property { string } [createdAt]
        
        @property { number } [id]
        
        @property { string } [pincode]
        
        @property { Array<string> } [brandStoreTags]
        
        @property { number } [companyId]
        
        @property { FulfillingStoreStoreAddressJson } [storeAddressJson]
        
        @property { string } [updatedAt]
        
        @property { string } [loginUsername]
        
        @property { string } [country]
        
         
    */

/**
        @typedef FulfillingStoreMeta
        
        
        @property { AdditionalContactDetails } [additionalContactDetails]
        
        @property { Documents } [documents]
        
        @property { string } [gstNumber]
        
        @property { string } [displayName]
        
        @property { ProductReturnConfig } [productReturnConfig]
        
        @property { boolean } [allowDpAssignmentFromFynd]
        
        @property { string } [stage]
        
        @property { Timing } [timing]
        
         
    */

/**
        @typedef AdditionalContactDetails
        
        
        @property { Array<string> } [number]
        
         
    */

/**
        @typedef Documents
        
        
        @property { Gst } [gst]
        
         
    */

/**
        @typedef Gst
        
        
        @property { string } [legalName]
        
        @property { string } [type]
        
        @property { string } [value]
        
        @property { boolean } [verified]
        
         
    */

/**
        @typedef ProductReturnConfig
        
        
        @property { boolean } [onSameStore]
        
         
    */

/**
        @typedef Timing
        
        
        @property { Opening } [opening]
        
        @property { string } [weekday]
        
        @property { boolean } [open]
        
        @property { Closing } [closing]
        
         
    */

/**
        @typedef Opening
        
        
        @property { number } [minute]
        
        @property { number } [hour]
        
         
    */

/**
        @typedef Closing
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */

/**
        @typedef FulfillingStoreStoreAddressJson
        
        
        @property { string } [address2]
        
        @property { string } [area]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { string } [state]
        
        @property { string } [contactPerson]
        
        @property { string } [country]
        
        @property { string } [pincode]
        
        @property { string } [version]
        
        @property { string } [createdAt]
        
        @property { string } [addressType]
        
        @property { string } [city]
        
        @property { string } [address1]
        
        @property { string } [landmark]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [updatedAt]
        
        @property { string } [addressCategory]
        
         
    */

/**
        @typedef Payments
        
        
        @property { boolean } [isActive]
        
        @property { string } [displayName]
        
        @property { string } [logo]
        
        @property { string } [source]
        
        @property { string } [sourceNickname]
        
        @property { number } [displayPriority]
        
        @property { number } [id]
        
        @property { string } [mode]
        
        @property { string } [paymentIdentifier]
        
         
    */

/**
        @typedef ShipmentGst
        
        
        @property { number } [brandCalculatedAmount]
        
        @property { number } [valueOfGood]
        
        @property { number } [gstFee]
        
         
    */

/**
        @typedef PlatformShipmentBrand
        
        
        @property { boolean } [creditNoteAllowed]
        
        @property { string } [brandName]
        
        @property { string } [modifiedOn]
        
        @property { number } [id]
        
        @property { boolean } [isVirtualInvoice]
        
        @property { string } [createdOn]
        
        @property { string } [logo]
        
         
    */

/**
        @typedef Promise
        
        
        @property { Timestamp } [timestamp]
        
         
    */

/**
        @typedef Timestamp
        
        
        @property { string } [min]
        
        @property { string } [max]
        
         
    */

/**
        @typedef ShipmentTrackingDetails
        
        
        @property { string } [status]
        
        @property { string } [time]
        
        @property { boolean } [isPassed]
        
        @property { boolean } [isCurrent]
        
         
    */

/**
        @typedef ShipmentUser
        
        
        @property { string } [email]
        
        @property { number } [id]
        
        @property { string } [firstName]
        
        @property { string } [mobile]
        
        @property { string } [gender]
        
        @property { string } [lastName]
        
        @property { boolean } [isAnonymousUser]
        
        @property { string } [mongoUserId]
        
         
    */

/**
        @typedef ItemsPayments
        
        
        @property { number } [displayPriority]
        
        @property { number } [id]
        
        @property { boolean } [isActive]
        
        @property { string } [displayName]
        
        @property { string } [logo]
        
        @property { string } [paymentIdentifier]
        
        @property { string } [sourceNickname]
        
        @property { string } [mode]
        
        @property { string } [source]
        
         
    */

/**
        @typedef Filters
        
        
        @property { Stages } [stages]
        
         
    */

/**
        @typedef Stages
        
        
        @property { string } [text]
        
        @property { string } [value]
        
        @property { boolean } [isDefault]
        
        @property { StagesFilters } [filters]
        
         
    */

/**
        @typedef StagesFilters
        
        
        @property { string } [text]
        
        @property { string } [value]
        
        @property { string } [type]
        
        @property { Options } [options]
        
         
    */

/**
        @typedef Options
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef NextOrderStatus
        
        
        @property { BagConfirmed } [bagConfirmed]
        
        @property { DpAssigned } [dpAssigned]
        
        @property { ReturnBagDelivered } [returnBagDelivered]
        
        @property { Placed } [placed]
        
        @property { DeliveryDone } [deliveryDone]
        
        @property { Pending } [pending]
        
        @property { BagPacked } [bagPacked]
        
         
    */

/**
        @typedef BagConfirmed
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef DpAssigned
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef ReturnBagDelivered
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef Placed
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef DeliveryDone
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef Pending
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef BagPacked
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef PlatformOrderPage
        
        
        @property { string } [next]
        
        @property { string } [previous]
        
        @property { string } [type]
        
        @property { number } [size]
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
        @property { ItemTotal } [itemTotal]
        
         
    */

/**
        @typedef ItemTotal
        
        
        @property { number } [new]
        
        @property { number } [processing]
        
        @property { number } [returns]
        
        @property { number } [all]
        
         
    */

/**
        @typedef AppliedFilters
        
        
        @property { string } [stage]
        
        @property { Array<string> } [stores]
        
        @property { string } [fromDate]
        
        @property { string } [toDate]
        
         
    */

/**
        @typedef UpdateOrderReprocessResponse
        
        
        @property { string } status
        
         
    */

/**
        @typedef PlatformOrderTrack
        
        
        @property { boolean } success
        
        @property { string } requestId
        
        @property { string } message
        
        @property { string } mobile
        
        @property { string } countryCode
        
        @property { number } resendTimer
        
        @property { string } [resendToken]
        
         
    */

/**
        @typedef GetPingResponse
        
        
        @property { string } ping
        
         
    */

/**
        @typedef UpdateShipmentStatusResponse
        
        
        @property { Object } shipments
        
        @property { Array<any> } [errorShipments]
        
         
    */

/**
        @typedef UpdateShipmentStatusBody
        
        
        @property { Object } shipments
        
        @property { boolean } forceTransition
        
        @property { boolean } task
        
         
    */

/**
        @typedef PlatformShipmentTrack
        
        
        @property { Results } results
        
         
    */

/**
        @typedef Results
        
        
        @property { string } [awb]
        
        @property { string } [updatedAt]
        
        @property { string } [lastLocationRecievedAt]
        
        @property { string } [reason]
        
        @property { string } [shipmentType]
        
        @property { string } [status]
        
        @property { string } [updatedTime]
        
        @property { string } [accountName]
        
         
    */

/**
        @typedef UpdateProcessShipmenstRequestBody
        
        
        @property { Array<string> } shipmentIds
        
        @property { string } expectedStatus
        
         
    */

/**
        @typedef UpdateProcessShipmenstRequestResponse
        
        
        @property { boolean } success
        
        @property { string } message
        
         
    */

/**
        @typedef GetVoiceCallbackResponse
        
        
        @property { string } message
        
         
    */

/**
        @typedef GetClickToCallResponse
        
        
        @property { string } message
        
         
    */

/**
        @typedef ApefaceApiError
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef DeleteResponse
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef ErrorResponse
        
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { string } [code]
        
         
    */

/**
        @typedef SearchKeywordResult
        
        
        @property { Object } query
        
        @property { string } sortOn
        
         
    */

/**
        @typedef CreateSearchKeyword
        
        
        @property { SearchKeywordResult } result
        
        @property { string } [appId]
        
        @property { boolean } [isActive]
        
        @property { Object } [customJson]
        
        @property { Array<string> } [words]
        
         
    */

/**
        @typedef GetSearchWordsData
        
        
        @property { Object } [result]
        
        @property { string } [uid]
        
        @property { string } [appId]
        
        @property { Object } [customJson]
        
        @property { Array<string> } [words]
        
         
    */

/**
        @typedef Page
        
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
        @property { string } [nextPageId]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasPrevious]
        
         
    */

/**
        @typedef GetSearchWordsDetailResponse
        
        
        @property { Page } [page]
        
        @property { GetSearchWordsData } [items]
        
         
    */

/**
        @typedef GetSearchWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetSearchWordsData> } [items]
        
         
    */

/**
        @typedef AutocompletePageAction
        
        
        @property { string } [url]
        
        @property { Object } query
        
        @property { string } type
        
        @property { Object } [params]
        
         
    */

/**
        @typedef AutocompleteAction
        
        
        @property { AutocompletePageAction } [page]
        
        @property { string } [type]
        
         
    */

/**
        @typedef AutocompleteResult
        
        
        @property { string } [display]
        
        @property { AutocompleteAction } [action]
        
        @property { Object } [customJson]
        
        @property { Media } [logo]
        
         
    */

/**
        @typedef CreateAutocompleteKeyword
        
        
        @property { string } [appId]
        
        @property { boolean } [isActive]
        
        @property { Object } [customJson]
        
        @property { Array<string> } [words]
        
        @property { Array<AutocompleteResult> } [results]
        
         
    */

/**
        @typedef GetAutocompleteWordsData
        
        
        @property { string } [uid]
        
        @property { string } [appId]
        
        @property { Object } [customJson]
        
        @property { Array<string> } [words]
        
        @property { Array<Object> } [results]
        
         
    */

/**
        @typedef GetAutocompleteWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetAutocompleteWordsData> } [items]
        
         
    */

/**
        @typedef CreateAutocompleteWordsResponse
        
        
        @property { Object } [customJson]
        
        @property { Array<string> } [words]
        
        @property { string } [appId]
        
        @property { Array<Object> } [results]
        
         
    */

/**
        @typedef ProductBundleItem
        
        
        @property { number } productUid
        
        @property { boolean } [autoAddToCart]
        
        @property { boolean } [allowRemove]
        
        @property { number } minQuantity
        
        @property { number } maxQuantity
        
        @property { boolean } [autoSelect]
        
         
    */

/**
        @typedef ProductBundleRequest
        
        
        @property { string } [modifiedOn]
        
        @property { string } slug
        
        @property { string } choice
        
        @property { Object } [createdBy]
        
        @property { Object } [meta]
        
        @property { string } [createdOn]
        
        @property { Array<ProductBundleItem> } products
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { boolean } isActive
        
        @property { string } name
        
        @property { string } [logo]
        
        @property { Object } [modifiedBy]
        
         
    */

/**
        @typedef GetProductBundleCreateResponse
        
        
        @property { string } [modifiedOn]
        
        @property { number } [companyId]
        
        @property { string } slug
        
        @property { string } choice
        
        @property { Object } [createdBy]
        
        @property { Object } [meta]
        
        @property { string } [id]
        
        @property { string } [createdOn]
        
        @property { Array<ProductBundleItem> } products
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { boolean } isActive
        
        @property { string } name
        
        @property { string } [logo]
        
        @property { Object } [modifiedBy]
        
         
    */

/**
        @typedef GetProductBundleListingResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetProductBundleCreateResponse> } [items]
        
         
    */

/**
        @typedef ProductBundleUpdateRequest
        
        
        @property { string } [modifiedOn]
        
        @property { string } slug
        
        @property { string } choice
        
        @property { Object } [meta]
        
        @property { Array<ProductBundleItem> } products
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { boolean } isActive
        
        @property { string } name
        
        @property { string } [logo]
        
        @property { Object } [modifiedBy]
        
         
    */

/**
        @typedef LimitedProductData
        
        
        @property { Array<string> } [sizes]
        
        @property { string } [slug]
        
        @property { Object } [identifier]
        
        @property { string } [itemCode]
        
        @property { number } [uid]
        
        @property { Array<string> } [images]
        
        @property { string } [shortDescription]
        
        @property { string } [countryOfOrigin]
        
        @property { Object } [price]
        
        @property { number } [quantity]
        
        @property { Object } [attributes]
        
        @property { string } [name]
        
         
    */

/**
        @typedef Size
        
        
        @property { string } [display]
        
        @property { number } [quantity]
        
        @property { string } [value]
        
        @property { boolean } [isAvailable]
        
         
    */

/**
        @typedef Price
        
        
        @property { number } [maxMarked]
        
        @property { number } [minMarked]
        
        @property { number } [maxEffective]
        
        @property { number } [minEffective]
        
        @property { string } [currency]
        
         
    */

/**
        @typedef GetProducts
        
        
        @property { number } [productUid]
        
        @property { LimitedProductData } [productDetails]
        
        @property { boolean } [autoAddToCart]
        
        @property { Array<Size> } [sizes]
        
        @property { boolean } [allowRemove]
        
        @property { number } [minQuantity]
        
        @property { Price } [price]
        
        @property { number } [maxQuantity]
        
        @property { boolean } [autoSelect]
        
         
    */

/**
        @typedef GetProductBundleResponse
        
        
        @property { number } [companyId]
        
        @property { string } [slug]
        
        @property { string } [choice]
        
        @property { Object } [meta]
        
        @property { Array<GetProducts> } [products]
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [logo]
        
         
    */

/**
        @typedef Meta
        
        
        @property { Array<Object> } [values]
        
        @property { Object } [headers]
        
        @property { string } [unit]
        
         
    */

/**
        @typedef Guide
        
        
        @property { Meta } [meta]
        
         
    */

/**
        @typedef ValidateSizeGuide
        
        
        @property { number } [brandId]
        
        @property { number } [companyId]
        
        @property { string } [modifiedOn]
        
        @property { Object } [createdBy]
        
        @property { boolean } [active]
        
        @property { string } [id]
        
        @property { string } title
        
        @property { string } [createdOn]
        
        @property { string } [tag]
        
        @property { string } [subtitle]
        
        @property { string } [image]
        
        @property { string } [description]
        
        @property { string } name
        
        @property { Guide } [guide]
        
        @property { Object } [modifiedBy]
        
         
    */

/**
        @typedef SuccessResponse
        
        
        @property { number } [uid]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef ListSizeGuide
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */

/**
        @typedef SizeGuideResponse
        
        
        @property { number } [brandId]
        
        @property { string } [modifiedOn]
        
        @property { number } [companyId]
        
        @property { Object } [createdBy]
        
        @property { boolean } [active]
        
        @property { string } [id]
        
        @property { string } [createdOn]
        
        @property { string } [title]
        
        @property { string } [tag]
        
        @property { string } [subtitle]
        
        @property { string } [name]
        
        @property { Object } [guide]
        
        @property { Object } [modifiedBy]
        
         
    */

/**
        @typedef GetCatalogConfigurationDetailsProduct
        
        
        @property { Object } [similar]
        
        @property { Object } [detail]
        
        @property { Object } [compare]
        
        @property { Object } [variant]
        
         
    */

/**
        @typedef MetaDataListingSortMetaResponse
        
        
        @property { string } [display]
        
        @property { string } [key]
        
         
    */

/**
        @typedef MetaDataListingSortResponse
        
        
        @property { Array<MetaDataListingSortMetaResponse> } [data]
        
         
    */

/**
        @typedef MetaDataListingFilterMetaResponse
        
        
        @property { string } [display]
        
        @property { Array<string> } [filterTypes]
        
        @property { string } [key]
        
        @property { Array<Object> } [units]
        
         
    */

/**
        @typedef MetaDataListingFilterResponse
        
        
        @property { Array<MetaDataListingFilterMetaResponse> } [data]
        
         
    */

/**
        @typedef MetaDataListingResponse
        
        
        @property { MetaDataListingSortResponse } sort
        
        @property { MetaDataListingFilterResponse } filter
        
         
    */

/**
        @typedef GetCatalogConfigurationMetaData
        
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { MetaDataListingResponse } [listing]
        
         
    */

/**
        @typedef ProductSize
        
        
        @property { number } max
        
        @property { number } min
        
         
    */

/**
        @typedef ConfigurationProductConfig
        
        
        @property { string } key
        
        @property { ProductSize } [size]
        
        @property { string } [title]
        
        @property { string } [subtitle]
        
        @property { boolean } isActive
        
        @property { string } [logo]
        
        @property { number } priority
        
         
    */

/**
        @typedef ConfigurationProductSimilar
        
        
        @property { Array<ConfigurationProductConfig> } [config]
        
         
    */

/**
        @typedef ConfigurationProductVariantConfig
        
        
        @property { string } key
        
        @property { string } name
        
        @property { ProductSize } size
        
        @property { string } displayType
        
        @property { boolean } isActive
        
        @property { string } [logo]
        
        @property { number } priority
        
         
    */

/**
        @typedef ConfigurationProductVariant
        
        
        @property { Array<ConfigurationProductVariantConfig> } [config]
        
         
    */

/**
        @typedef ConfigurationProduct
        
        
        @property { ConfigurationProductSimilar } similar
        
        @property { ConfigurationProductVariant } variant
        
         
    */

/**
        @typedef ConfigurationListingSortConfig
        
        
        @property { string } key
        
        @property { string } [name]
        
        @property { boolean } isActive
        
        @property { string } [logo]
        
        @property { number } priority
        
         
    */

/**
        @typedef ConfigurationListingSort
        
        
        @property { string } defaultKey
        
        @property { Array<ConfigurationListingSortConfig> } [config]
        
         
    */

/**
        @typedef ConfigurationBucketPoints
        
        
        @property { number } [end]
        
        @property { number } [start]
        
         
    */

/**
        @typedef ConfigurationListingFilterValue
        
        
        @property { Array<ConfigurationBucketPoints> } [bucketPoints]
        
        @property { string } [value]
        
        @property { string } [sort]
        
        @property { string } [condition]
        
        @property { Object } [map]
        
         
    */

/**
        @typedef ConfigurationListingFilterConfig
        
        
        @property { string } key
        
        @property { string } type
        
        @property { ConfigurationListingFilterValue } [valueConfig]
        
        @property { string } [name]
        
        @property { boolean } isActive
        
        @property { string } [logo]
        
        @property { number } priority
        
         
    */

/**
        @typedef ConfigurationListingFilter
        
        
        @property { boolean } allowSingle
        
        @property { Array<ConfigurationListingFilterConfig> } [attributeConfig]
        
         
    */

/**
        @typedef ConfigurationListing
        
        
        @property { ConfigurationListingSort } sort
        
        @property { ConfigurationListingFilter } filter
        
         
    */

/**
        @typedef AppConfiguration
        
        
        @property { string } [configId]
        
        @property { string } configType
        
        @property { string } appId
        
        @property { ConfigurationProduct } [product]
        
        @property { ConfigurationListing } [listing]
        
         
    */

/**
        @typedef AppCatalogConfiguration
        
        
        @property { string } [configId]
        
        @property { string } [id]
        
        @property { string } configType
        
        @property { string } appId
        
        @property { ConfigurationProduct } [product]
        
        @property { ConfigurationListing } [listing]
        
         
    */

/**
        @typedef GetAppCatalogConfiguration
        
        
        @property { boolean } [isDefault]
        
        @property { AppCatalogConfiguration } [data]
        
         
    */

/**
        @typedef GetCatalogConfigurationDetailsSchemaListing
        
        
        @property { Object } [sort]
        
        @property { Object } [filter]
        
         
    */

/**
        @typedef EntityConfiguration
        
        
        @property { string } [configId]
        
        @property { string } [id]
        
        @property { string } configType
        
        @property { string } appId
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { GetCatalogConfigurationDetailsSchemaListing } [listing]
        
         
    */

/**
        @typedef GetAppCatalogEntityConfiguration
        
        
        @property { boolean } [isDefault]
        
        @property { EntityConfiguration } [data]
        
         
    */

/**
        @typedef ProductFiltersValue
        
        
        @property { number } [selectedMin]
        
        @property { string } value
        
        @property { number } [max]
        
        @property { number } [selectedMax]
        
        @property { string } display
        
        @property { number } [count]
        
        @property { string } [currencyCode]
        
        @property { string } [displayFormat]
        
        @property { string } [queryFormat]
        
        @property { number } [min]
        
        @property { boolean } isSelected
        
        @property { string } [currencySymbol]
        
         
    */

/**
        @typedef ProductFiltersKey
        
        
        @property { string } display
        
        @property { string } [kind]
        
        @property { string } name
        
        @property { string } [logo]
        
         
    */

/**
        @typedef ProductFilters
        
        
        @property { Array<ProductFiltersValue> } values
        
        @property { ProductFiltersKey } key
        
         
    */

/**
        @typedef ProductSortOn
        
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */

/**
        @typedef GetCollectionQueryOptionResponse
        
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sortOn]
        
         
    */

/**
        @typedef CollectionImage
        
        
        @property { string } url
        
        @property { string } aspectRatio
        
         
    */

/**
        @typedef UserInfo
        
        
        @property { string } [email]
        
        @property { string } [uid]
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */

/**
        @typedef Schedule
        
        
        @property { string } [cron]
        
        @property { string } [end]
        
        @property { string } [start]
        
        @property { number } [duration]
        
         
    */

/**
        @typedef CollectionBadge
        
        
        @property { string } [text]
        
        @property { string } [color]
        
         
    */

/**
        @typedef SeoDetail
        
        
        @property { string } [description]
        
        @property { string } [title]
        
         
    */

/**
        @typedef CollectionBanner
        
        
        @property { CollectionImage } landscape
        
        @property { CollectionImage } portrait
        
         
    */

/**
        @typedef CreateCollection
        
        
        @property { Array<string> } [tags]
        
        @property { boolean } [published]
        
        @property { string } type
        
        @property { boolean } [allowFacets]
        
        @property { CollectionImage } logo
        
        @property { UserInfo } [modifiedBy]
        
        @property { string } slug
        
        @property { UserInfo } [createdBy]
        
        @property { boolean } [allowSort]
        
        @property { Object } [localeLanguage]
        
        @property { string } [description]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } [sortOn]
        
        @property { Schedule } [schedule]
        
        @property { boolean } [isActive]
        
        @property { string } name
        
        @property { CollectionBadge } [badge]
        
        @property { SeoDetail } [seo]
        
        @property { Object } [meta]
        
        @property { Object } [query]
        
        @property { string } appId
        
        @property { CollectionBanner } banners
        
        @property { Object } [customJson]
        
         
    */

/**
        @typedef BannerImage
        
        
        @property { string } [url]
        
        @property { string } [aspectRatio]
        
         
    */

/**
        @typedef ImageUrls
        
        
        @property { BannerImage } [landscape]
        
        @property { BannerImage } [portrait]
        
         
    */

/**
        @typedef CollectionCreateResponse
        
        
        @property { Object } [badge]
        
        @property { Object } [schedule]
        
        @property { string } [type]
        
        @property { string } [slug]
        
        @property { Object } [meta]
        
        @property { Object } [query]
        
        @property { string } [name]
        
        @property { string } [appId]
        
        @property { boolean } [allowSort]
        
        @property { ImageUrls } [banners]
        
        @property { Array<string> } [tag]
        
        @property { boolean } [isActive]
        
        @property { boolean } [allowFacets]
        
        @property { Object } [cron]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } [description]
        
        @property { BannerImage } [logo]
        
         
    */

/**
        @typedef CollectionListingFilterTag
        
        
        @property { string } [display]
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CollectionListingFilterType
        
        
        @property { string } [display]
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CollectionListingFilter
        
        
        @property { Array<CollectionListingFilterTag> } [tags]
        
        @property { Array<CollectionListingFilterType> } [type]
        
         
    */

/**
        @typedef Media1
        
        
        @property { Object } [meta]
        
        @property { string } url
        
        @property { string } [type]
        
         
    */

/**
        @typedef ProductListingActionPage
        
        
        @property { Object } [query]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ProductListingAction
        
        
        @property { ProductListingActionPage } [page]
        
        @property { string } [type]
        
         
    */

/**
        @typedef GetCollectionDetailNest
        
        
        @property { string } [type]
        
        @property { boolean } [allowFacets]
        
        @property { Media1 } [logo]
        
        @property { string } [slug]
        
        @property { boolean } [allowSort]
        
        @property { string } [uid]
        
        @property { Array<string> } [tag]
        
        @property { string } [description]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [schedule]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { Object } [badge]
        
        @property { Object } [meta]
        
        @property { Object } [query]
        
        @property { ProductListingAction } [action]
        
        @property { string } [appId]
        
        @property { ImageUrls } [banners]
        
        @property { Object } [cron]
        
         
    */

/**
        @typedef GetCollectionListingResponse
        
        
        @property { CollectionListingFilter } [filters]
        
        @property { Page } [page]
        
        @property { Array<GetCollectionDetailNest> } [items]
        
         
    */

/**
        @typedef CollectionDetailResponse
        
        
        @property { Object } [badge]
        
        @property { Object } [schedule]
        
        @property { string } [type]
        
        @property { string } [slug]
        
        @property { Object } [meta]
        
        @property { Object } [query]
        
        @property { string } [name]
        
        @property { string } [appId]
        
        @property { boolean } [allowSort]
        
        @property { ImageUrls } [banners]
        
        @property { Array<string> } [tag]
        
        @property { boolean } [isActive]
        
        @property { boolean } [allowFacets]
        
        @property { Object } [cron]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } [description]
        
        @property { Media1 } [logo]
        
         
    */

/**
        @typedef CollectionItemRequest
        
        
        @property { number } pageNo
        
        @property { number } pageSize
        
         
    */

/**
        @typedef UpdatedResponse
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef Price1
        
        
        @property { string } [currencyCode]
        
        @property { number } [max]
        
        @property { number } [min]
        
        @property { string } [currencySymbol]
        
         
    */

/**
        @typedef ProductListingPrice
        
        
        @property { Price1 } [effective]
        
        @property { Price1 } [marked]
        
         
    */

/**
        @typedef ProductListingDetail
        
        
        @property { string } [productOnlineDate]
        
        @property { string } [type]
        
        @property { boolean } [sellable]
        
        @property { Object } [attributes]
        
        @property { string } [color]
        
        @property { string } slug
        
        @property { number } [uid]
        
        @property { string } [imageNature]
        
        @property { Array<string> } [highlights]
        
        @property { ProductListingPrice } [price]
        
        @property { string } [description]
        
        @property { number } [rating]
        
        @property { Array<Media1> } [medias]
        
        @property { boolean } [hasVariant]
        
        @property { string } [name]
        
        @property { Object } [promoMeta]
        
        @property { number } [ratingCount]
        
        @property { Array<string> } [similars]
        
        @property { string } [shortDescription]
        
        @property { string } [itemType]
        
        @property { Object } [teaserTag]
        
        @property { Array<string> } [tryouts]
        
        @property { string } [discount]
        
         
    */

/**
        @typedef GetCollectionItemsResponse
        
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Page } [page]
        
        @property { Array<ProductSortOn> } [sortOn]
        
        @property { Array<ProductListingDetail> } [items]
        
         
    */

/**
        @typedef CatalogInsightBrand
        
        
        @property { number } [articleFreshness]
        
        @property { number } [totalArticles]
        
        @property { number } [availableSizes]
        
        @property { number } [totalSizes]
        
        @property { number } [availableArticles]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CatalogInsightItem
        
        
        @property { number } [sellableCount]
        
        @property { number } [count]
        
        @property { number } [outOfStockCount]
        
         
    */

/**
        @typedef CatalogInsightResponse
        
        
        @property { CatalogInsightBrand } [brandDistribution]
        
        @property { CatalogInsightItem } [item]
        
         
    */

/**
        @typedef CrossSellingData
        
        
        @property { number } [products]
        
        @property { number } [articles]
        
         
    */

/**
        @typedef CrossSellingResponse
        
        
        @property { CatalogInsightBrand } [brandDistribution]
        
        @property { CrossSellingData } [data]
        
         
    */

/**
        @typedef OptInPostRequest
        
        
        @property { string } optLevel
        
        @property { Array<number> } [storeIds]
        
        @property { boolean } [enabled]
        
        @property { Array<number> } [brandIds]
        
         
    */

/**
        @typedef CompanyOptIn
        
        
        @property { string } optLevel
        
        @property { number } companyId
        
        @property { number } modifiedOn
        
        @property { Object } [createdBy]
        
        @property { number } createdOn
        
        @property { Array<number> } brandIds
        
        @property { string } platform
        
        @property { Array<number> } storeIds
        
        @property { boolean } enabled
        
        @property { Object } [modifiedBy]
        
         
    */

/**
        @typedef GetOptInPlatform
        
        
        @property { Page } page
        
        @property { Array<CompanyOptIn> } items
        
         
    */

/**
        @typedef OptinCompanyDetail
        
        
        @property { number } [uid]
        
        @property { string } [businessType]
        
        @property { string } [name]
        
        @property { string } [companyType]
        
         
    */

/**
        @typedef CompanyBrandDetail
        
        
        @property { number } [brandId]
        
        @property { string } [brandName]
        
        @property { number } [companyId]
        
        @property { number } [totalArticle]
        
         
    */

/**
        @typedef OptinCompanyBrandDetailsView
        
        
        @property { Page } [page]
        
        @property { Array<CompanyBrandDetail> } [items]
        
         
    */

/**
        @typedef OptinCompanyMetrics
        
        
        @property { number } [brand]
        
        @property { number } [store]
        
        @property { string } [company]
        
         
    */

/**
        @typedef StoreDetail
        
        
        @property { Array<Object> } [additionalContacts]
        
        @property { string } [modifiedOn]
        
        @property { number } [companyId]
        
        @property { Object } [timing]
        
        @property { number } [uid]
        
        @property { string } [displayName]
        
        @property { string } [createdOn]
        
        @property { Array<Object> } [documents]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { string } [name]
        
         
    */

/**
        @typedef OptinStoreDetails
        
        
        @property { Page } [page]
        
        @property { Array<StoreDetail> } [items]
        
         
    */

/**
        @typedef BasePage
        
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [size]
        
         
    */

/**
        @typedef MultipleCommon
        
        
        @property { string } [uid]
        
         
    */

/**
        @typedef ProdcutTemplateCategoriesResponse
        
        
        @property { BasePage } [page]
        
        @property { MultipleCommon } [items]
        
         
    */

/**
        @typedef PTErrorResponse
        
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { string } [code]
        
         
    */

/**
        @typedef BasePage1
        
        
        @property { string } [nextPageId]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
        @property { boolean } [hasPrevious]
        
         
    */

/**
        @typedef UserSerializer
        
        
        @property { string } [userId]
        
        @property { string } [username]
        
        @property { string } [contact]
        
         
    */

/**
        @typedef GetDepartment
        
        
        @property { number } [pageSize]
        
        @property { string } [modifiedOn]
        
        @property { string } [slug]
        
        @property { UserSerializer } [createdBy]
        
        @property { number } [pageNo]
        
        @property { number } [uid]
        
        @property { string } [createdOn]
        
        @property { string } [itemType]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [search]
        
        @property { boolean } [isActive]
        
        @property { number } [priorityOrder]
        
        @property { string } [name]
        
        @property { string } [logo]
        
        @property { UserSerializer } [modifiedBy]
        
         
    */

/**
        @typedef DepartmentsResponse
        
        
        @property { BasePage1 } [page]
        
        @property { Array<GetDepartment> } [items]
        
         
    */

/**
        @typedef DepartmentErrorResponse
        
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { string } [code]
        
         
    */

/**
        @typedef ProductTemplate
        
        
        @property { string } [modifiedOn]
        
        @property { boolean } isPhysical
        
        @property { string } slug
        
        @property { Object } [createdBy]
        
        @property { string } [createdOn]
        
        @property { string } [tag]
        
        @property { Array<string> } [departments]
        
        @property { Object } [modifiedBy]
        
        @property { boolean } [isActive]
        
        @property { Array<string> } [attributes]
        
        @property { string } [description]
        
        @property { Array<string> } [categories]
        
        @property { string } [name]
        
        @property { string } [logo]
        
        @property { boolean } [isArchived]
        
         
    */

/**
        @typedef TemplatesResponse
        
        
        @property { BasePage } [page]
        
        @property { ProductTemplate } [items]
        
         
    */

/**
        @typedef TemplatesValidationResponse
        
        
        @property { MultipleCommon } [data]
        
         
    */

/**
        @typedef InventoryValidationResponse
        
        
        @property { string } [message]
        
        @property { MultipleCommon } [data]
        
         
    */

/**
        @typedef HSNData
        
        
        @property { Array<string> } [hsnCode]
        
        @property { Array<string> } [countryOfOrigin]
        
         
    */

/**
        @typedef HSNCodesResponse
        
        
        @property { string } [message]
        
        @property { HSNData } [data]
        
         
    */

/**
        @typedef ProductConfligurationDownloads
        
        
        @property { boolean } [multivalue]
        
        @property { Array<MultipleCommon> } [data]
        
         
    */

/**
        @typedef Media2
        
        
        @property { string } landscape
        
        @property { string } logo
        
        @property { string } portrait
        
         
    */

/**
        @typedef CategoryMappingValues
        
        
        @property { number } [catalogId]
        
        @property { string } name
        
         
    */

/**
        @typedef CategoryMapping
        
        
        @property { CategoryMappingValues } [facebook]
        
        @property { CategoryMappingValues } [ajio]
        
        @property { CategoryMappingValues } [google]
        
         
    */

/**
        @typedef Hierarchy
        
        
        @property { number } l2
        
        @property { number } department
        
        @property { number } l1
        
         
    */

/**
        @typedef CategoryRequestBody
        
        
        @property { Array<string> } [tryouts]
        
        @property { string } [slug]
        
        @property { Array<string> } [synonyms]
        
        @property { Array<number> } departments
        
        @property { boolean } isActive
        
        @property { number } level
        
        @property { Media2 } [media]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { string } name
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { number } [priority]
        
         
    */

/**
        @typedef CategoryCreateResponse
        
        
        @property { number } [uid]
        
        @property { string } [message]
        
         
    */

/**
        @typedef Category
        
        
        @property { Array<string> } [tryouts]
        
        @property { string } [modifiedOn]
        
        @property { string } [slug]
        
        @property { Object } [createdBy]
        
        @property { number } [uid]
        
        @property { string } [createdOn]
        
        @property { Array<string> } [synonyms]
        
        @property { Array<number> } departments
        
        @property { Object } [modifiedBy]
        
        @property { string } [id]
        
        @property { boolean } isActive
        
        @property { number } level
        
        @property { Media2 } [media]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { string } name
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { number } [priority]
        
         
    */

/**
        @typedef CategoryResponse
        
        
        @property { BasePage1 } [page]
        
        @property { Array<Category> } [items]
        
         
    */

/**
        @typedef CategoryUpdateResponse
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef ProductPublish
        
        
        @property { string } [productOnlineDate]
        
        @property { boolean } [isSet]
        
         
    */

/**
        @typedef CustomOrder
        
        
        @property { number } [manufacturingTime]
        
        @property { boolean } [isCustomOrder]
        
        @property { string } [manufacturingTimeUnit]
        
         
    */

/**
        @typedef Trader
        
        
        @property { string } address
        
        @property { string } name
        
         
    */

/**
        @typedef OrderQuantity
        
        
        @property { boolean } [isSet]
        
        @property { number } [maximum]
        
        @property { number } [minimum]
        
         
    */

/**
        @typedef TeaserTag
        
        
        @property { string } [tag]
        
        @property { string } [url]
        
         
    */

/**
        @typedef ReturnConfig
        
        
        @property { boolean } [returnable]
        
        @property { string } [unit]
        
        @property { number } [time]
        
         
    */

/**
        @typedef ProductCreateUpdate
        
        
        @property { Array<string> } [tags]
        
        @property { number } companyId
        
        @property { ProductPublish } [productPublish]
        
        @property { string } [changeRequestId]
        
        @property { Array<string> } [productGroupTag]
        
        @property { boolean } [isDependent]
        
        @property { CustomOrder } [customOrder]
        
        @property { string } [sizeGuide]
        
        @property { number } [noOfBoxes]
        
        @property { Trader } [trader]
        
        @property { OrderQuantity } [moq]
        
        @property { string } slug
        
        @property { number } [uid]
        
        @property { Array<string> } [highlights]
        
        @property { Object } [variants]
        
        @property { string } hsnCode
        
        @property { boolean } [multiSize]
        
        @property { Array<Media1> } [media]
        
        @property { string } [description]
        
        @property { string } [requester]
        
        @property { boolean } [isImageLessProduct]
        
        @property { string } categorySlug
        
        @property { Array<number> } departments
        
        @property { boolean } [isActive]
        
        @property { string } name
        
        @property { string } [traderType]
        
        @property { number } brandUid
        
        @property { string } itemCode
        
        @property { boolean } [isSet]
        
        @property { string } [shortDescription]
        
        @property { string } countryOfOrigin
        
        @property { string } itemType
        
        @property { TeaserTag } [teaserTag]
        
        @property { string } templateTag
        
        @property { Object } [customJson]
        
        @property { string } currency
        
        @property { ReturnConfig } [returnConfig]
        
         
    */

/**
        @typedef PageData
        
        
        @property { string } [current]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [size]
        
         
    */

/**
        @typedef ProductPublished
        
        
        @property { number } [productOnlineDate]
        
        @property { boolean } [isSet]
        
         
    */

/**
        @typedef UserCommon
        
        
        @property { number } [companyId]
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */

/**
        @typedef VerifiedBy
        
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */

/**
        @typedef Attributes
        
        
        @property { string } [pattern]
        
        @property { Array<string> } [l3Mapping]
        
        @property { string } [productFit]
        
        @property { string } [color]
        
        @property { string } [essential]
        
        @property { string } [stage]
        
        @property { UserCommon } [modifiedBy]
        
        @property { VerifiedBy } [verifiedBy]
        
        @property { string } [material]
        
        @property { string } [modifiedOn]
        
        @property { UserCommon } [createdBy]
        
        @property { string } [imageNature]
        
        @property { Array<string> } [gender]
        
        @property { boolean } [isImageLessProduct]
        
        @property { string } [metaNature]
        
        @property { string } [sleeveLength]
        
        @property { string } [primaryColor]
        
        @property { string } [verifiedOn]
        
        @property { string } [primaryMaterial]
        
        @property { string } [createdOn]
        
        @property { string } [neckType]
        
         
    */

/**
        @typedef Logo
        
        
        @property { string } [url]
        
        @property { number } [aspectRatioF]
        
        @property { string } [aspectRatio]
        
        @property { string } [secureUrl]
        
         
    */

/**
        @typedef Brand
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { Logo } [logo]
        
         
    */

/**
        @typedef Product
        
        
        @property { number } [companyId]
        
        @property { ProductPublished } [productPublish]
        
        @property { boolean } [isDependent]
        
        @property { string } [sizeGuide]
        
        @property { Attributes } [attributes]
        
        @property { Array<Object> } [sizes]
        
        @property { string } [slug]
        
        @property { number } [uid]
        
        @property { string } [highlights]
        
        @property { string } [hsnCode]
        
        @property { boolean } [multiSize]
        
        @property { Array<string> } [media]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [categorySlug]
        
        @property { Array<number> } [departments]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [itemCode]
        
        @property { boolean } [isSet]
        
        @property { Array<string> } [images]
        
        @property { string } [countryOfOrigin]
        
        @property { Array<string> } [allSizes]
        
        @property { string } [itemType]
        
        @property { Brand } [brand]
        
        @property { string } [templateTag]
        
        @property { string } [currency]
        
         
    */

/**
        @typedef ProductListingResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Product> } [items]
        
         
    */

/**
        @typedef ValidateProduct
        
        
        @property { boolean } [valid]
        
         
    */

/**
        @typedef UserInfo1
        
        
        @property { string } [email]
        
        @property { string } [uid]
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */

/**
        @typedef BulkJob
        
        
        @property { number } total
        
        @property { string } [modifiedOn]
        
        @property { number } companyId
        
        @property { UserInfo1 } [createdBy]
        
        @property { number } [failed]
        
        @property { string } [filePath]
        
        @property { string } [customTemplateTag]
        
        @property { string } createdOn
        
        @property { Array<Object> } [cancelledRecords]
        
        @property { Array<Object> } [failedRecords]
        
        @property { string } [templateTag]
        
        @property { boolean } [isActive]
        
        @property { string } [trackingUrl]
        
        @property { number } [succeed]
        
        @property { string } [stage]
        
        @property { UserInfo1 } [modifiedBy]
        
        @property { number } [cancelled]
        
         
    */

/**
        @typedef UserDetail
        
        
        @property { string } [fullName]
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */

/**
        @typedef ProductBulkRequest
        
        
        @property { number } [total]
        
        @property { number } [companyId]
        
        @property { string } [modifiedOn]
        
        @property { UserDetail } [createdBy]
        
        @property { number } [failed]
        
        @property { string } [filePath]
        
        @property { string } [createdOn]
        
        @property { ProductTemplate } [template]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { Array<string> } [failedRecords]
        
        @property { string } [templateTag]
        
        @property { boolean } [isActive]
        
        @property { number } [succeed]
        
        @property { string } [stage]
        
        @property { UserDetail } [modifiedBy]
        
        @property { number } [cancelled]
        
         
    */

/**
        @typedef ProductBulkRequestList
        
        
        @property { PageData } [page]
        
        @property { ProductBulkRequest } [items]
        
         
    */

/**
        @typedef BulkProductRequest
        
        
        @property { string } templateTag
        
        @property { number } companyId
        
        @property { string } batchId
        
        @property { Array<Object> } data
        
         
    */

/**
        @typedef NestedTags
        
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef ProductTagsViewResponse
        
        
        @property { NestedTags } [items]
        
         
    */

/**
        @typedef ProductBulkAssets
        
        
        @property { Object } user
        
        @property { string } url
        
        @property { number } [companyId]
        
         
    */

/**
        @typedef Items
        
        
        @property { number } [total]
        
        @property { string } [filePath]
        
        @property { string } [modifiedOn]
        
        @property { UserCommon } [createdBy]
        
        @property { number } [failed]
        
        @property { number } [retry]
        
        @property { number } [companyId]
        
        @property { string } [id]
        
        @property { string } [createdOn]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { Array<string> } [failedRecords]
        
        @property { boolean } [isActive]
        
        @property { string } [trackingUrl]
        
        @property { number } [succeed]
        
        @property { string } [stage]
        
        @property { UserCommon } [modifiedBy]
        
        @property { number } [cancelled]
        
         
    */

/**
        @typedef BulkAssetResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Items> } [items]
        
         
    */

/**
        @typedef ItemQuery
        
        
        @property { number } [uid]
        
        @property { string } [itemCode]
        
        @property { number } [brandUid]
        
         
    */

/**
        @typedef GTIN
        
        
        @property { boolean } [primary]
        
        @property { string } gtinValue
        
        @property { string } gtinType
        
         
    */

/**
        @typedef SetSize
        
        
        @property { number } pieces
        
        @property { string } size
        
         
    */

/**
        @typedef SizeDistribution
        
        
        @property { Array<SetSize> } sizes
        
         
    */

/**
        @typedef InventorySet
        
        
        @property { SizeDistribution } sizeDistribution
        
        @property { number } [quantity]
        
         
    */

/**
        @typedef InvSize
        
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { number } [itemHeight]
        
        @property { Array<GTIN> } identifiers
        
        @property { boolean } [isSet]
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { number } [itemLength]
        
        @property { number } [itemWeight]
        
        @property { number } price
        
        @property { number } [itemWidth]
        
        @property { number } quantity
        
        @property { string } storeCode
        
        @property { number } [priceTransfer]
        
        @property { string } currency
        
        @property { InventorySet } [set]
        
        @property { string } size
        
        @property { number } priceEffective
        
         
    */

/**
        @typedef InventoryRequest
        
        
        @property { ItemQuery } item
        
        @property { number } companyId
        
        @property { Array<InvSize> } sizes
        
         
    */

/**
        @typedef InventoryRequest1
        
        
        @property { number } [pageSize]
        
        @property { number } [total]
        
        @property { number } [pageNo]
        
        @property { string } [search]
        
        @property { string } [size]
        
         
    */

/**
        @typedef CommonResponse
        
        
        @property { string } [success]
        
         
    */

/**
        @typedef BulkRequestGet
        
        
        @property { number } [pageSize]
        
        @property { number } [total]
        
        @property { string } [customTemplateTag]
        
        @property { number } [pageNo]
        
        @property { string } [startDate]
        
        @property { string } [endDate]
        
        @property { string } [templateTag]
        
        @property { string } [stage]
        
        @property { string } [search]
        
         
    */

/**
        @typedef Size1
        
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { number } [itemHeight]
        
        @property { Array<Object> } [identifiers]
        
        @property { boolean } [isSet]
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { number } [itemLength]
        
        @property { number } [itemWeight]
        
        @property { number } price
        
        @property { number } [itemWidth]
        
        @property { number } quantity
        
        @property { string } storeCode
        
        @property { number } [priceTransfer]
        
        @property { string } currency
        
        @property { InventorySet } [set]
        
        @property { string } sellerIdentifier
        
        @property { string } [size]
        
        @property { number } priceEffective
        
         
    */

/**
        @typedef InventoryBulkRequest
        
        
        @property { Object } [user]
        
        @property { number } companyId
        
        @property { Array<Size1> } sizes
        
        @property { string } batchId
        
         
    */

/**
        @typedef InventoryExportRequest
        
        
        @property { Array<number> } [brand]
        
        @property { Array<number> } [store]
        
        @property { string } [type]
        
         
    */

/**
        @typedef InventoryExportJob
        
        
        @property { string } taskId
        
        @property { number } sellerId
        
        @property { string } [triggerOn]
        
        @property { string } [completedOn]
        
        @property { Object } [requestParams]
        
        @property { string } [url]
        
        @property { string } [status]
        
         
    */

/**
        @typedef FilerList
        
        
        @property { string } [display]
        
        @property { string } [value]
        
         
    */

/**
        @typedef InventoryConfig
        
        
        @property { boolean } [multivalues]
        
        @property { Array<FilerList> } [data]
        
         
    */

/**
        @typedef ReferralInfo
        
        
        @property { string } [referralCode]
        
         
    */

/**
        @typedef CompanyAddress
        
        
        @property { string } [address2]
        
        @property { number } latitude
        
        @property { string } [landmark]
        
        @property { number } pincode
        
        @property { number } longitude
        
        @property { string } state
        
        @property { string } country
        
        @property { string } [countryCode]
        
        @property { string } address1
        
        @property { string } city
        
         
    */

/**
        @typedef Document
        
        
        @property { string } type
        
        @property { string } legalName
        
        @property { string } value
        
        @property { string } [url]
        
        @property { boolean } [verified]
        
         
    */

/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [country]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { Array<number> } brands
        
        @property { boolean } [franchiseEnabled]
        
        @property { ReferralInfo } [referralInfo]
        
        @property { string } name
        
        @property { Object } [warnings]
        
        @property { CompanyAddress } address
        
        @property { string } businessType
        
        @property { Array<string> } [notificationEmails]
        
        @property { number } [uid]
        
        @property { Document } document
        
        @property { string } [businessInfo]
        
        @property { BusinessCountryInfo } businessCountryInfo
        
         
    */

/**
        @typedef Website
        
        
        @property { string } [url]
        
         
    */

/**
        @typedef BusinessDetails
        
        
        @property { Website } [website]
        
         
    */

/**
        @typedef ContactDetails
        
        
        @property { Array<PhoneNumber> } [phone]
        
        @property { Array<string> } [emails]
        
         
    */

/**
        @typedef GetAddressSerializer
        
        
        @property { string } [address2]
        
        @property { number } [latitude]
        
        @property { string } [landmark]
        
        @property { number } [pincode]
        
        @property { number } [longitude]
        
        @property { string } [country]
        
        @property { string } [addressType]
        
        @property { string } [state]
        
        @property { string } [countryCode]
        
        @property { string } [address1]
        
        @property { string } [city]
        
         
    */

/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [country]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { string } [modifiedOn]
        
        @property { string } companyType
        
        @property { BusinessDetails } [businessDetails]
        
        @property { Array<Document> } [documents]
        
        @property { Array<string> } [notificationEmails]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [createdOn]
        
        @property { Object } [warnings]
        
        @property { string } [verifiedOn]
        
        @property { string } businessType
        
        @property { UserSerializer } [verifiedBy]
        
        @property { ContactDetails } [contactDetails]
        
        @property { boolean } [franchiseEnabled]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { number } uid
        
        @property { string } [businessInfo]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [name]
        
        @property { string } [stage]
        
        @property { BusinessCountryInfo1 } [businessCountryInfo]
        
         
    */

/**
        @typedef DocumentsObj
        
        
        @property { number } [verified]
        
        @property { number } [pending]
        
         
    */

/**
        @typedef MetricsSerializer
        
        
        @property { DocumentsObj } [brand]
        
        @property { string } [stage]
        
        @property { DocumentsObj } [companyDocuments]
        
        @property { number } [uid]
        
        @property { DocumentsObj } [storeDocuments]
        
        @property { DocumentsObj } [product]
        
        @property { DocumentsObj } [store]
        
         
    */

/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [landscape]
        
        @property { string } [portrait]
        
         
    */

/**
        @typedef UserSerializer1
        
        
        @property { string } [contact]
        
        @property { string } [username]
        
        @property { string } [userId]
        
         
    */

/**
        @typedef GetBrandResponseSerializer
        
        
        @property { string } [modifiedOn]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [logo]
        
        @property { Object } [customJson]
        
        @property { string } [createdOn]
        
        @property { string } name
        
        @property { string } [stage]
        
        @property { string } [rejectReason]
        
        @property { Object } [warnings]
        
        @property { string } [verifiedOn]
        
        @property { string } [description]
        
        @property { string } [slugKey]
        
        @property { Object } [localeLanguage]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { number } [uid]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { UserSerializer1 } [modifiedBy]
        
         
    */

/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { BrandBannerSerializer } [banner]
        
        @property { Array<string> } [synonyms]
        
        @property { string } logo
        
        @property { Object } [customJson]
        
        @property { number } [companyId]
        
        @property { string } [brandTier]
        
        @property { string } name
        
        @property { Object } [localeLanguage]
        
        @property { string } [description]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { Array<number> } brands
        
        @property { number } company
        
        @property { number } [uid]
        
         
    */

/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */

/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */

/**
        @typedef LocationDayWiseSerializer
        
        
        @property { LocationTimingSerializer } [opening]
        
        @property { LocationTimingSerializer } [closing]
        
        @property { string } weekday
        
        @property { boolean } open
        
         
    */

/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { number } [storeUid]
        
        @property { boolean } [onSameStore]
        
         
    */

/**
        @typedef GetAddressSerializer1
        
        
        @property { string } [address2]
        
        @property { number } [latitude]
        
        @property { string } [landmark]
        
        @property { number } [pincode]
        
        @property { number } [longitude]
        
        @property { string } [country]
        
        @property { string } [addressType]
        
        @property { string } [state]
        
        @property { string } [countryCode]
        
        @property { string } [address1]
        
        @property { string } [city]
        
         
    */

/**
        @typedef InvoiceCredSerializer
        
        
        @property { string } [username]
        
        @property { boolean } [enabled]
        
        @property { string } [password]
        
         
    */

/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [eWaybill]
        
        @property { InvoiceCredSerializer } [eInvoice]
        
         
    */

/**
        @typedef LocationManagerSerializer
        
        
        @property { string } [email]
        
        @property { PhoneNumber } mobileNo
        
        @property { string } [name]
        
         
    */

/**
        @typedef LocationSerializer
        
        
        @property { Object } [customJson]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { number } company
        
        @property { string } name
        
        @property { string } [stage]
        
        @property { string } code
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { string } displayName
        
        @property { string } [storeType]
        
        @property { Array<Document> } [documents]
        
        @property { GetAddressSerializer1 } address
        
        @property { Array<string> } [notificationEmails]
        
        @property { number } [uid]
        
        @property { Object } [warnings]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { LocationManagerSerializer } [manager]
        
         
    */

/**
        @typedef LocationListSerializer
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */

/**
        @typedef LocationIntegrationType
        
        
        @property { string } [inventory]
        
        @property { string } [order]
        
         
    */

/**
        @typedef GetCompanySerializer
        
        
        @property { string } [modifiedOn]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [createdOn]
        
        @property { string } [companyType]
        
        @property { string } [name]
        
        @property { string } [stage]
        
        @property { string } [rejectReason]
        
        @property { string } [verifiedOn]
        
        @property { string } [businessType]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { number } [uid]
        
        @property { UserSerializer } [createdBy]
        
        @property { UserSerializer } [modifiedBy]
        
         
    */

/**
        @typedef GetLocationSerializer
        
        
        @property { string } [modifiedOn]
        
        @property { LocationIntegrationType } [integrationType]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { Array<Document> } [documents]
        
        @property { Array<string> } [notificationEmails]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { string } [createdOn]
        
        @property { string } code
        
        @property { Object } [warnings]
        
        @property { string } [verifiedOn]
        
        @property { string } [storeType]
        
        @property { GetAddressSerializer } address
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { string } phoneNumber
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { Object } [customJson]
        
        @property { GetCompanySerializer } [company]
        
        @property { string } displayName
        
        @property { number } [uid]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { string } name
        
        @property { string } [stage]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
         
    */

/**
        @typedef FailedResponse
        
        
        @property { string } message
        
         
    */

/**
        @typedef CDN
        
        
        @property { string } url
        
         
    */

/**
        @typedef Upload
        
        
        @property { number } expiry
        
        @property { string } url
        
         
    */

/**
        @typedef StartResponse
        
        
        @property { string } fileName
        
        @property { string } filePath
        
        @property { string } contentType
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
         
    */

/**
        @typedef StartRequest
        
        
        @property { string } fileName
        
        @property { string } contentType
        
        @property { number } size
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef CompleteResponse
        
        
        @property { string } id
        
        @property { string } fileName
        
        @property { string } filePath
        
        @property { string } contentType
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } success
        
        @property { Array<string> } [tags]
        
        @property { string } createdOn
        
        @property { string } modifiedOn
        
         
    */

/**
        @typedef Opts
        
        
        @property { number } [attempts]
        
        @property { number } [timestamp]
        
        @property { number } [delay]
        
         
    */

/**
        @typedef CopyFileTask
        
        
        @property { string } id
        
        @property { string } name
        
        @property { BulkRequest } data
        
        @property { Opts } opts
        
        @property { number } progress
        
        @property { number } delay
        
        @property { number } timestamp
        
        @property { number } attemptsMade
        
        @property { Array<string> } [stacktrace]
        
        @property { number } finishedOn
        
        @property { number } processedOn
        
         
    */

/**
        @typedef BulkResponse
        
        
        @property { string } trackingUrl
        
        @property { CopyFileTask } task
        
         
    */

/**
        @typedef ReqConfiguration
        
        
        @property { number } [concurrency]
        
         
    */

/**
        @typedef Destination
        
        
        @property { string } namespace
        
        @property { string } rewrite
        
        @property { string } [basepath]
        
         
    */

/**
        @typedef BulkRequest
        
        
        @property { Array<string> } urls
        
        @property { Destination } destination
        
        @property { ReqConfiguration } [configuration]
        
         
    */

/**
        @typedef Urls
        
        
        @property { string } url
        
        @property { string } signedUrl
        
        @property { number } expiry
        
         
    */

/**
        @typedef SignUrlResponse
        
        
        @property { Array<Urls> } urls
        
         
    */

/**
        @typedef SignUrlRequest
        
        
        @property { number } expiry
        
        @property { Array<string> } urls
        
         
    */

/**
        @typedef Page
        
        
        @property { number } current
        
        @property { number } itemTotal
        
        @property { number } type
        
        @property { boolean } hasNext
        
        @property { number } [size]
        
         
    */

/**
        @typedef DbRecord
        
        
        @property { boolean } success
        
        @property { Array<string> } tags
        
        @property { string } id
        
        @property { string } fileName
        
        @property { string } [operation]
        
        @property { string } namespace
        
        @property { string } contentType
        
        @property { string } filePath
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } createdOn
        
        @property { string } modifiedOn
        
         
    */

/**
        @typedef BrowseResponse
        
        
        @property { Array<DbRecord> } items
        
        @property { Page } page
        
         
    */

/**
        @typedef RedirectDevice
        
        
        @property { string } [link]
        
        @property { string } [type]
        
         
    */

/**
        @typedef WebRedirect
        
        
        @property { string } [link]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Redirects
        
        
        @property { RedirectDevice } [ios]
        
        @property { RedirectDevice } [android]
        
        @property { WebRedirect } [web]
        
        @property { boolean } [forceWeb]
        
         
    */

/**
        @typedef Attribution
        
        
        @property { string } [campaignCookieExpiry]
        
         
    */

/**
        @typedef SocialMediaTags
        
        
        @property { string } [title]
        
        @property { string } [description]
        
        @property { string } [image]
        
         
    */

/**
        @typedef ShortLinkReq
        
        
        @property { string } title
        
        @property { string } url
        
        @property { string } [hash]
        
        @property { boolean } [active]
        
        @property { string } [expireAt]
        
        @property { boolean } [enableTracking]
        
        @property { boolean } [personalized]
        
        @property { Campaign } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [socialMediaTags]
        
        @property { number } [count]
        
         
    */

/**
        @typedef UrlInfo
        
        
        @property { string } [original]
        
        @property { string } [short]
        
        @property { string } [hash]
        
         
    */

/**
        @typedef ShortLinkRes
        
        
        @property { string } [title]
        
        @property { UrlInfo } [url]
        
        @property { string } [createdBy]
        
        @property { boolean } [appRedirect]
        
        @property { string } [fallback]
        
        @property { boolean } [active]
        
        @property { string } [id]
        
        @property { boolean } [enableTracking]
        
        @property { string } [expireAt]
        
        @property { string } [application]
        
        @property { string } [userId]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { boolean } [personalized]
        
        @property { Campaign } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [socialMediaTags]
        
        @property { number } [count]
        
         
    */

/**
        @typedef Page
        
        
        @property { number } itemTotal
        
        @property { string } [nextId]
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [current]
        
        @property { string } type
        
        @property { number } size
        
         
    */

/**
        @typedef ShortLinkList
        
        
        @property { Array<ShortLinkRes> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef PostOrder
        
        
        @property { boolean } [cancellationAllowed]
        
        @property { boolean } [returnAllowed]
        
         
    */

/**
        @typedef BulkBundleRestriction
        
        
        @property { boolean } multiStoreAllowed
        
         
    */

/**
        @typedef PaymentAllowValue
        
        
        @property { number } [max]
        
         
    */

/**
        @typedef PaymentModes
        
        
        @property { Array<string> } [codes]
        
        @property { PaymentAllowValue } [uses]
        
        @property { Array<string> } [networks]
        
        @property { Array<string> } [types]
        
         
    */

/**
        @typedef PaymentCodes
        
        
        @property { PaymentModes } [ps]
        
        @property { PaymentModes } [wl]
        
        @property { PaymentModes } [qr]
        
        @property { PaymentModes } [upi]
        
        @property { PaymentModes } [card]
        
        @property { PaymentModes } [nb]
        
        @property { PaymentModes } [pl]
        
         
    */

/**
        @typedef UsesRemaining
        
        
        @property { number } [app]
        
        @property { number } [total]
        
        @property { number } [user]
        
         
    */

/**
        @typedef UsesRestriction
        
        
        @property { UsesRemaining } [maximum]
        
        @property { UsesRemaining } [remaining]
        
         
    */

/**
        @typedef PriceRange
        
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */

/**
        @typedef Restrictions
        
        
        @property { PostOrder } [postOrder]
        
        @property { Array<string> } [platforms]
        
        @property { boolean } [couponAllowed]
        
        @property { BulkBundleRestriction } [bulkBundle]
        
        @property { PaymentCodes } [payments]
        
        @property { Array<number> } [orderingStores]
        
        @property { UsesRestriction } [uses]
        
        @property { PriceRange } [priceRange]
        
         
    */

/**
        @typedef RuleDefinition
        
        
        @property { string } applicableOn
        
        @property { boolean } [isExact]
        
        @property { string } [currencyCode]
        
        @property { Array<string> } [scope]
        
        @property { string } valueType
        
        @property { string } type
        
        @property { boolean } [autoApply]
        
        @property { string } calculateOn
        
         
    */

/**
        @typedef CouponSchedule
        
        
        @property { string } [end]
        
        @property { string } [cron]
        
        @property { string } [start]
        
        @property { Array<Object> } [nextSchedule]
        
        @property { number } [duration]
        
         
    */

/**
        @typedef Identifier
        
        
        @property { Array<string> } [articleId]
        
        @property { Array<number> } [storeId]
        
        @property { Array<number> } [brandId]
        
        @property { Array<string> } [collectionId]
        
        @property { Array<number> } [companyId]
        
        @property { Array<string> } [userId]
        
        @property { Array<number> } [categoryId]
        
        @property { Array<number> } [itemId]
        
         
    */

/**
        @typedef Ownership
        
        
        @property { string } payableBy
        
        @property { string } payableCategory
        
         
    */

/**
        @typedef Validity
        
        
        @property { number } [priority]
        
         
    */

/**
        @typedef CouponAction
        
        
        @property { string } [txnMode]
        
        @property { string } [actionDate]
        
         
    */

/**
        @typedef DisplayMetaDict
        
        
        @property { string } [subtitle]
        
        @property { string } [title]
        
         
    */

/**
        @typedef DisplayMeta
        
        
        @property { string } [subtitle]
        
        @property { string } [description]
        
        @property { DisplayMetaDict } [apply]
        
        @property { string } [title]
        
        @property { DisplayMetaDict } [remove]
        
        @property { DisplayMetaDict } [auto]
        
         
    */

/**
        @typedef CouponDateMeta
        
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */

/**
        @typedef State
        
        
        @property { boolean } [isDisplay]
        
        @property { boolean } [isArchived]
        
        @property { boolean } [isPublic]
        
         
    */

/**
        @typedef Validation
        
        
        @property { Array<string> } [appId]
        
        @property { string } [userRegisteredAfter]
        
        @property { boolean } [anonymous]
        
         
    */

/**
        @typedef Rule
        
        
        @property { number } [min]
        
        @property { number } [discountQty]
        
        @property { number } [value]
        
        @property { number } [key]
        
        @property { number } [max]
        
         
    */

/**
        @typedef CouponAuthor
        
        
        @property { string } [modifiedBy]
        
        @property { string } [createdBy]
        
         
    */

/**
        @typedef CouponAdd
        
        
        @property { Restrictions } [restrictions]
        
        @property { string } code
        
        @property { RuleDefinition } ruleDefinition
        
        @property { CouponSchedule } [schedule]
        
        @property { string } typeSlug
        
        @property { Identifier } identifiers
        
        @property { Ownership } ownership
        
        @property { Validity } validity
        
        @property { CouponAction } [action]
        
        @property { Array<string> } [tags]
        
        @property { DisplayMeta } displayMeta
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { State } [state]
        
        @property { Validation } [validation]
        
        @property { Array<Rule> } rule
        
        @property { CouponAuthor } [author]
        
         
    */

/**
        @typedef CouponsResponse
        
        
        @property { Pagination } [page]
        
        @property { CouponAdd } [items]
        
         
    */

/**
        @typedef SuccessMessage
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */

/**
        @typedef OperationErrorResponse
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */

/**
        @typedef CouponUpdate
        
        
        @property { Restrictions } [restrictions]
        
        @property { string } code
        
        @property { RuleDefinition } ruleDefinition
        
        @property { CouponSchedule } [schedule]
        
        @property { string } typeSlug
        
        @property { Identifier } identifiers
        
        @property { Ownership } ownership
        
        @property { Validity } validity
        
        @property { CouponAction } [action]
        
        @property { Array<string> } [tags]
        
        @property { DisplayMeta } displayMeta
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { State } [state]
        
        @property { Validation } [validation]
        
        @property { Array<Rule> } rule
        
        @property { CouponAuthor } [author]
        
         
    */

/**
        @typedef CouponPartialUpdate
        
        
        @property { boolean } [archive]
        
        @property { CouponSchedule } [schedule]
        
         
    */

/**
        @typedef StoreMapping
        
        
        @property { string } [enabled]
        
        @property { string } [marketplaceStoreId]
        
        @property { number } [storeId]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef AllChannels
        
        
        @property { boolean } [mkpName]
        
         
    */

/**
        @typedef MyntraPayload
        
        
        @property { string } [merchantId]
        
        @property { string } [secretKey]
        
         
    */

/**
        @typedef AmazonPayload
        
        
        @property { string } [sellerId]
        
        @property { string } [mwsAuthToken]
        
         
    */

/**
        @typedef FlipkartPayload
        
        
        @property { string } [code]
        
         
    */

/**
        @typedef TatacliqPayload
        
        
        @property { string } [userName]
        
        @property { string } [password]
        
        @property { string } [merchantId]
        
         
    */

/**
        @typedef AjioPayload
        
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { string } [clientIp]
        
         
    */

/**
        @typedef StoreMappingPayload
        
        
        @property { boolean } [storeMappingEnabled]
        
        @property { Array<StoreMapping> } [storeMapping]
        
         
    */

/**
        @typedef StatusPayload
        
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef StatusResp
        
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef SyncPayload
        
        
        @property { string } [modifiedSince]
        
         
    */

/**
        @typedef SyncResp
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef MkpResp
        
        
        @property { string } [marketplace]
        
        @property { number } [worker]
        
        @property { string } [workerAssigned]
        
        @property { boolean } [isActive]
        
        @property { boolean } [storeMappingEnabled]
        
        @property { number } [companyId]
        
        @property { Object } [configuration]
        
        @property { Array<StoreMapping> } [storeMapping]
        
         
    */

/**
        @typedef StatGroup
        
        
        @property { string } [key]
        
        @property { string } [url]
        
        @property { string } [title]
        
         
    */

/**
        @typedef StatsGroups
        
        
        @property { Array<StatGroup> } [groups]
        
         
    */

/**
        @typedef StatsGroupComponent
        
        
        @property { string } [key]
        
        @property { string } [url]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { Object } [filters]
        
         
    */

/**
        @typedef StatsGroupComponents
        
        
        @property { string } [title]
        
        @property { Array<StatsGroupComponent> } [components]
        
         
    */

/**
        @typedef StatsRes
        
        
        @property { string } [key]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { Object } [data]
        
         
    */

/**
        @typedef ReceivedAt
        
        
        @property { string } [value]
        
         
    */

/**
        @typedef AbandonCartsDetail
        
        
        @property { string } [propertiesCartId]
        
        @property { string } [contextTraitsFirstName]
        
        @property { string } [contextTraitsLastName]
        
        @property { string } [contextTraitsPhoneNumber]
        
        @property { string } [contextTraitsEmail]
        
        @property { string } [contextAppApplicationId]
        
        @property { string } [propertiesBreakupValuesRawTotal]
        
        @property { ReceivedAt } [receivedAt]
        
         
    */

/**
        @typedef Page
        
        
        @property { number } itemTotal
        
        @property { string } [nextId]
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [current]
        
        @property { string } type
        
        @property { number } size
        
         
    */

/**
        @typedef AbandonCartsList
        
        
        @property { Array<AbandonCartsDetail> } [items]
        
        @property { string } [cartTotal]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AbandonCartDetail
        
        
        @property { string } [id]
        
        @property { string } [userId]
        
        @property { string } [cartValue]
        
        @property { Array<Object> } [articles]
        
        @property { Object } [breakup]
        
        @property { Object } [address]
        
         
    */

/**
        @typedef ExportJobReq
        
        
        @property { string } [marketplaceName]
        
        @property { string } [startTime]
        
        @property { string } [endTime]
        
        @property { string } [eventType]
        
         
    */

/**
        @typedef ExportJobRes
        
        
        @property { string } [status]
        
        @property { string } [jobId]
        
         
    */

/**
        @typedef ExportJobStatusRes
        
        
        @property { string } [status]
        
        @property { string } [jobId]
        
        @property { string } [downloadUrl]
        
         
    */

/**
        @typedef GetLogsListReq
        
        
        @property { string } [marketplaceName]
        
        @property { string } [startDate]
        
        @property { string } [companyId]
        
        @property { string } [endDate]
        
         
    */

/**
        @typedef MkpLogsResp
        
        
        @property { string } [startTimeIso]
        
        @property { string } [endTimeIso]
        
        @property { string } [eventType]
        
        @property { string } [traceId]
        
        @property { string } [count]
        
        @property { string } [status]
        
         
    */

/**
        @typedef GetLogsListRes
        
        
        @property { Array<MkpLogsResp> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SearchLogReq
        
        
        @property { string } [marketplaceName]
        
        @property { string } [startDate]
        
        @property { string } [companyId]
        
        @property { string } [endDate]
        
        @property { string } [identifier]
        
        @property { string } [identifierValue]
        
         
    */

/**
        @typedef LogInfo
        
        
        @property { string } [id]
        
        @property { string } [status]
        
        @property { string } [eventType]
        
        @property { string } [marketplaceName]
        
        @property { string } [event]
        
        @property { string } [traceId]
        
        @property { number } [companyId]
        
        @property { number } [brandId]
        
        @property { string } [storeCode]
        
        @property { number } [storeId]
        
        @property { number } [itemId]
        
        @property { string } [articleId]
        
        @property { string } [sellerIdentifier]
        
         
    */

/**
        @typedef SearchLogRes
        
        
        @property { Array<LogInfo> } [items]
        
        @property { Page } [page]
        
         
    */

class Lead {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
    * @description: Gets the list of Application level Tickets and/or ticket filters
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
    * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
    * @param {string} [arg.q] - Search through ticket titles and description
    * @param {string} [arg.status] - Filter tickets on status
    * @param {string} [arg.priority] - Filter tickets on priority
    * @param {string} [arg.category] - Filter tickets on category
    
    **/
  getTickets({ items, filters, q, status, priority, category } = {}) {
    const { error } = LeadValidator.getTickets().validate(
      {
        items,
        filters,
        q,
        status,
        priority,
        category,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["items"] = items;
    queryObj["filters"] = filters;
    queryObj["q"] = q;
    queryObj["status"] = status;
    queryObj["priority"] = priority;
    queryObj["category"] = category;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Retreives ticket details of a application level ticket
    * @description: Retreives ticket details of a application level ticket with ticket ID
    * @param {Object} arg - arg object.
    * @param {string} arg.ticketId - Tiket ID of the ticket to be fetched
    
    **/
  getTicket({ ticketId } = {}) {
    const { error } = LeadValidator.getTicket().validate(
      {
        ticketId,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket/${ticketId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Edits ticket details of a application level ticket
   * @description: Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
   * @param {Object} arg - arg object.
   * @param {string} arg.ticketId - Ticket ID of ticket to be edited
   * @param {EditTicketPayload} arg.body
   **/
  editTicket({ ticketId, body } = {}) {
    const { error } = LeadValidator.editTicket().validate(
      {
        ticketId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket/${ticketId}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create history for specific application level ticket
   * @description: Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
   * @param {Object} arg - arg object.
   * @param {string} arg.ticketId - Ticket ID for which history is created
   * @param {TicketHistoryPayload} arg.body
   **/
  createHistory({ ticketId, body } = {}) {
    const { error } = LeadValidator.createHistory().validate(
      {
        ticketId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket/${ticketId}/history`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Gets history list for specific application level ticket
    * @description: Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
    * @param {Object} arg - arg object.
    * @param {string} arg.ticketId - Ticket ID for which history is to be fetched
    
    **/
  getTicketHistory({ ticketId } = {}) {
    const { error } = LeadValidator.getTicketHistory().validate(
      {
        ticketId,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket/${ticketId}/history`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get specific custom form using it's slug
    * @description: Get specific custom form using it's slug, this is used to view the form.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - Slug of form whose response is getting submitted
    
    **/
  getCustomForm({ slug } = {}) {
    const { error } = LeadValidator.getCustomForm().validate(
      {
        slug,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/form/${slug}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Edit the given custom form
   * @description: Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
   * @param {Object} arg - arg object.
   * @param {string} arg.slug - Slug of form whose response is getting submitted
   * @param {EditCustomFormPayload} arg.body
   **/
  editCustomForm({ slug, body } = {}) {
    const { error } = LeadValidator.editCustomForm().validate(
      {
        slug,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/form/${slug}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get list of custom form
    * @description: Get list of custom form for given application
    * @param {Object} arg - arg object.
    
    **/
  getCustomForms({} = {}) {
    const { error } = LeadValidator.getCustomForms().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/form`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Creates a new custom form
   * @description: Creates a new custom form for given application
   * @param {Object} arg - arg object.
   * @param {CreateCustomFormPayload} arg.body
   **/
  createCustomForm({ body } = {}) {
    const { error } = LeadValidator.createCustomForm().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/form`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get Token to join a specific Video Room using it's unqiue name
    * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueName - Unique name of video room
    
    **/
  getTokenForVideoRoom({ uniqueName } = {}) {
    const { error } = LeadValidator.getTokenForVideoRoom().validate(
      {
        uniqueName,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/video/room/${uniqueName}/token`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get participants of a specific Video Room using it's unique name
    * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueName - Unique name of Video Room
    
    **/
  getVideoParticipants({ uniqueName } = {}) {
    const { error } = LeadValidator.getVideoParticipants().validate(
      {
        uniqueName,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/video/room/${uniqueName}/participants`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Open a video room.
   * @description: Open a video room.
   * @param {Object} arg - arg object.
   * @param {CreateVideoRoomPayload} arg.body
   **/
  openVideoRoom({ body } = {}) {
    const { error } = LeadValidator.openVideoRoom().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/video/room`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Close the video room and force all participants to leave.
    * @description: Close the video room and force all participants to leave.
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueName - Unique name of Video Room
    
    **/
  closeVideoRoom({ uniqueName } = {}) {
    const { error } = LeadValidator.closeVideoRoom().validate(
      {
        uniqueName,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/video/room/${uniqueName}`,
      queryObj,
      undefined
    );
  }
}

class Theme {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Gets list of themes in theme library
    * @description: Gets list of themes in theme library
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    * @param {number} [arg.pageNo] - Page number. Default is 1.
    
    **/
  getThemeLibrary({ pageSize, pageNo } = {}) {
    const { error } = ThemeValidator.getThemeLibrary().validate(
      {
        pageSize,
        pageNo,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["page_size"] = pageSize;
    queryObj["page_no"] = pageNo;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/library`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add theme to theme library
   * @description: Add theme to theme library
   * @param {Object} arg - arg object.
   * @param {AddThemeRequestSchema} arg.body
   **/
  addToThemeLibrary({ body } = {}) {
    const { error } = ThemeValidator.addToThemeLibrary().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/library`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Apply theme
   * @description: Apply theme
   * @param {Object} arg - arg object.
   * @param {AddThemeRequestSchema} arg.body
   **/
  applyTheme({ body } = {}) {
    const { error } = ThemeValidator.applyTheme().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/apply`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Checks if theme is upgradable
    * @description: Checks if theme is upgradable
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  isUpgradable({ themeId } = {}) {
    const { error } = ThemeValidator.isUpgradable().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/upgradable`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Upgrades theme
    * @description: Upgrades theme
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  upgradeTheme({ themeId } = {}) {
    const { error } = ThemeValidator.upgradeTheme().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/upgrade`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Gets public themes
    * @description: Gets public themes
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    * @param {number} [arg.pageNo] - Page number. Default is 1.
    
    **/
  getPublicThemes({ pageSize, pageNo } = {}) {
    const { error } = ThemeValidator.getPublicThemes().validate(
      {
        pageSize,
        pageNo,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["page_size"] = pageSize;
    queryObj["page_no"] = pageNo;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/public/library`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create new theme
   * @description: Create new theme
   * @param {Object} arg - arg object.
   * @param {ThemesSchema} arg.body
   **/
  createTheme({ body } = {}) {
    const { error } = ThemeValidator.createTheme().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get applied theme
    * @description: Get applied theme
    * @param {Object} arg - arg object.
    
    **/
  getAppliedTheme({} = {}) {
    const { error } = ThemeValidator.getAppliedTheme().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Gets fonts
    * @description: Gets fonts
    * @param {Object} arg - arg object.
    
    **/
  getFonts({} = {}) {
    const { error } = ThemeValidator.getFonts().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/fonts`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Gets theme by id
    * @description: Gets theme by id
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  getThemeById({ themeId } = {}) {
    const { error } = ThemeValidator.getThemeById().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update theme
   * @description: Update theme
   * @param {Object} arg - arg object.
   * @param {string} arg.themeId - Theme ID
   * @param {ThemesSchema} arg.body
   **/
  updateTheme({ themeId, body } = {}) {
    const { error } = ThemeValidator.updateTheme().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete theme
    * @description: Delete theme
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  deleteTheme({ themeId } = {}) {
    const { error } = ThemeValidator.deleteTheme().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Gets theme for preview
    * @description: Gets theme for preview
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  getThemeForPreview({ themeId } = {}) {
    const { error } = ThemeValidator.getThemeForPreview().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/preview`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Publish theme
    * @description: Publish theme
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  publishTheme({ themeId } = {}) {
    const { error } = ThemeValidator.publishTheme().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/publish`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Unpublish theme
    * @description: Unpublish theme
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  unpublishTheme({ themeId } = {}) {
    const { error } = ThemeValidator.unpublishTheme().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/unpublish`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Archive theme
    * @description: Archive theme
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  archiveTheme({ themeId } = {}) {
    const { error } = ThemeValidator.archiveTheme().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/archive`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Unarchive theme
    * @description: Unarchive theme
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  unarchiveTheme({ themeId } = {}) {
    const { error } = ThemeValidator.unarchiveTheme().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/unarchive`,
      queryObj,
      undefined
    );
  }
}

class User {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Gets list of customers
    * @description: Used to get application customers list
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    * @param {number} [arg.pageNo] - Page number. Default is 1.
    
    **/
  getCustomers({ q, pageSize, pageNo } = {}) {
    const { error } = UserValidator.getCustomers().validate(
      {
        q,
        pageSize,
        pageNo,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["q"] = q;
    queryObj["page_size"] = pageSize;
    queryObj["page_no"] = pageNo;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/list`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Search users
    * @description: Search users
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
    
    **/
  searchUsers({ q } = {}) {
    const { error } = UserValidator.searchUsers().validate(
      {
        q,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/search`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get platform config
    * @description: Used to get platform config
    * @param {Object} arg - arg object.
    
    **/
  getPlatformConfig({} = {}) {
    const { error } = UserValidator.getPlatformConfig().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/platform/config`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update platform config
   * @description: Used to update platform config
   * @param {Object} arg - arg object.
   * @param {PlatformSchema} arg.body
   **/
  updatePlatformConfig({ body } = {}) {
    const { error } = UserValidator.updatePlatformConfig().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/platform/config`,
      queryObj,
      body
    );
  }
}

class Content {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Get annoucements list
    * @description: Get list of announcements
    * @param {Object} arg - arg object.
    
    **/
  getAnnouncementsList({} = {}) {
    const { error } = ContentValidator.getAnnouncementsList().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create an annoucement
   * @description: Create an announcement
   * @param {Object} arg - arg object.
   * @param {AdminAnnouncementSchema} arg.body
   **/
  createAnnouncement({ body } = {}) {
    const { error } = ContentValidator.createAnnouncement().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get annoucement by id
    * @description: Get announcement by id
    * @param {Object} arg - arg object.
    * @param {string} arg.announcementId - Announcement ID
    
    **/
  getAnnouncementById({ announcementId } = {}) {
    const { error } = ContentValidator.getAnnouncementById().validate(
      {
        announcementId,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update an annoucement
   * @description: Update an announcement
   * @param {Object} arg - arg object.
   * @param {string} arg.announcementId - Announcement ID
   * @param {AdminAnnouncementSchema} arg.body
   **/
  updateAnnouncement({ announcementId, body } = {}) {
    const { error } = ContentValidator.updateAnnouncement().validate(
      {
        announcementId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update schedule or published status of an annoucement
   * @description: Update schedule or published status of an announcement
   * @param {Object} arg - arg object.
   * @param {string} arg.announcementId - Announcement ID
   * @param {ScheduleSchema} arg.body
   **/
  updateAnnouncementSchedule({ announcementId, body } = {}) {
    const { error } = ContentValidator.updateAnnouncementSchedule().validate(
      {
        announcementId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete annoucement by id
    * @description: Delete announcement by id
    * @param {Object} arg - arg object.
    * @param {string} arg.announcementId - Announcement ID
    
    **/
  deleteAnnouncement({ announcementId } = {}) {
    const { error } = ContentValidator.deleteAnnouncement().validate(
      {
        announcementId,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create blog
   * @description: Use this to create a blog.
   * @param {Object} arg - arg object.
   * @param {BlogRequest} arg.body
   **/
  createBlog({ body } = {}) {
    const { error } = ContentValidator.createBlog().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get blogs
    * @description: Use this to get blogs.
    * @param {Object} arg - arg object.
    
    **/
  getBlogs({} = {}) {
    const { error } = ContentValidator.getBlogs().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update blog
   * @description: Use this to update blog.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Blog Id
   * @param {BlogRequest} arg.body
   **/
  updateBlog({ id, body } = {}) {
    const { error } = ContentValidator.updateBlog().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete blogs
    * @description: Use this to delete blogs.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Blog Id
    
    **/
  deleteBlog({ id } = {}) {
    const { error } = ContentValidator.deleteBlog().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get components by component Id
    * @description: The endpoint fetches the component by component Id
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - slug of page to be fetched
    
    **/
  getComponentById({ slug } = {}) {
    const { error } = ContentValidator.getComponentById().validate(
      {
        slug,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/${slug}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get FAQ categories list
    * @description: Get list of FAQ categories
    * @param {Object} arg - arg object.
    
    **/
  getFaqCategories({} = {}) {
    const { error } = ContentValidator.getFaqCategories().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/categories`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get FAQ category by slug or id
    * @description: Get FAQ category by slug or id
    * @param {Object} arg - arg object.
    * @param {string} arg.idOrSlug - Slug or Id of FAQ Category
    
    **/
  getFaqCategoryBySlugOrId({ idOrSlug } = {}) {
    const { error } = ContentValidator.getFaqCategoryBySlugOrId().validate(
      {
        idOrSlug,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${idOrSlug}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Creates a FAQ category
   * @description: Add Faq Category
   * @param {Object} arg - arg object.
   * @param {CreateFaqCategoryRequestSchema} arg.body
   **/
  createFaqCategory({ body } = {}) {
    const { error } = ContentValidator.createFaqCategory().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Updates a FAQ category
   * @description: Update Faq Category
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Faq category ID
   * @param {UpdateFaqCategoryRequestSchema} arg.body
   **/
  updateFaqCategory({ id, body } = {}) {
    const { error } = ContentValidator.updateFaqCategory().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Deletes a FAQ category
    * @description: Delete Faq Category
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Faq category ID
    
    **/
  deleteFaqCategory({ id } = {}) {
    const { error } = ContentValidator.deleteFaqCategory().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get FAQs of a Faq Category id or slug
    * @description: Get FAQs of a Faq Category `id` or `slug`
    * @param {Object} arg - arg object.
    * @param {string} arg.idOrSlug - Faq category ID or slug
    
    **/
  getFaqsByCategoryIdOrSlug({ idOrSlug } = {}) {
    const { error } = ContentValidator.getFaqsByCategoryIdOrSlug().validate(
      {
        idOrSlug,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${idOrSlug}/faqs`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Creates FAQs for category whose `id` is specified
   * @description: Creates FAQs for category whose `id` is specified
   * @param {Object} arg - arg object.
   * @param {string} arg.categoryId - Faq category ID
   * @param {CreateFaqSchema} arg.body
   **/
  addFaq({ categoryId, body } = {}) {
    const { error } = ContentValidator.addFaq().validate(
      {
        categoryId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${categoryId}/faqs`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Updates FAQ
   * @description: Updates FAQ
   * @param {Object} arg - arg object.
   * @param {string} arg.categoryId - Faq category ID
   * @param {string} arg.faqId - Faq ID
   * @param {CreateFaqSchema} arg.body
   **/
  updateFaq({ categoryId, faqId, body } = {}) {
    const { error } = ContentValidator.updateFaq().validate(
      {
        categoryId,
        faqId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${categoryId}/faq/${faqId}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete FAQ
    * @description: Delete FAQ
    * @param {Object} arg - arg object.
    * @param {string} arg.categoryId - Faq category ID
    * @param {string} arg.faqId - Faq ID
    
    **/
  deleteFaq({ categoryId, faqId } = {}) {
    const { error } = ContentValidator.deleteFaq().validate(
      {
        categoryId,
        faqId,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${categoryId}/faq/${faqId}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get frequently asked question
    * @description: Get frequently asked questions list. These will be helpful for users to using website.
    * @param {Object} arg - arg object.
    * @param {string} arg.idOrSlug - Slug or Id of FAQ
    
    **/
  getFaqByIdOrSlug({ idOrSlug } = {}) {
    const { error } = ContentValidator.getFaqByIdOrSlug().validate(
      {
        idOrSlug,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/${idOrSlug}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get landing-pages
    * @description: Use this to get landing-pages.
    * @param {Object} arg - arg object.
    
    **/
  getLandingPages({} = {}) {
    const { error } = ContentValidator.getLandingPages().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create landing-page
   * @description: Use this to create landing-page.
   * @param {Object} arg - arg object.
   * @param {LandingPageSchema} arg.body
   **/
  createLandingPage({ body } = {}) {
    const { error } = ContentValidator.createLandingPage().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update landing-page
   * @description: Use this to update landing-page.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Landing page ID
   * @param {LandingPageSchema} arg.body
   **/
  updateLandingPage({ id, body } = {}) {
    const { error } = ContentValidator.updateLandingPage().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete landing-page
    * @description: Use this to delete landing-page.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Landing page ID
    
    **/
  deleteLandingPage({ id } = {}) {
    const { error } = ContentValidator.deleteLandingPage().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get legal information
    * @description: Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.
    * @param {Object} arg - arg object.
    
    **/
  getLegalInformation({} = {}) {
    const { error } = ContentValidator.getLegalInformation().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/legal`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Save legal information
   * @description: Save legal information of application, which includes Policy, Terms and Conditions, and FAQ information of application.
   * @param {Object} arg - arg object.
   * @param {ApplicationLegal} arg.body
   **/
  updateLegalInformation({ body } = {}) {
    const { error } = ContentValidator.updateLegalInformation().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/legal`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get navigations
    * @description: Use this to get navigations.
    * @param {Object} arg - arg object.
    * @param {string} arg.devicePlatform - Device platform
    
    **/
  getNavigations({ devicePlatform } = {}) {
    const { error } = ContentValidator.getNavigations().validate(
      {
        devicePlatform,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["device_platform"] = devicePlatform;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create navigation
   * @description: Use this to create navigation.
   * @param {Object} arg - arg object.
   * @param {NavigationRequest} arg.body
   **/
  createNavigation({ body } = {}) {
    const { error } = ContentValidator.createNavigation().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get default navigations
    * @description: Use this to get default navigations.
    * @param {Object} arg - arg object.
    
    **/
  getDefaultNavigations({} = {}) {
    const { error } = ContentValidator.getDefaultNavigations().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/default`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get navigation by slug
    * @description: Use this to get navigation by slug.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - Slug
    * @param {string} arg.devicePlatform - Device platform
    
    **/
  getNavigationBySlug({ slug, devicePlatform } = {}) {
    const { error } = ContentValidator.getNavigationBySlug().validate(
      {
        slug,
        devicePlatform,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["device_platform"] = devicePlatform;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/${slug}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update navigation
   * @description: Use this to update navigation.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Navigation ID
   * @param {NavigationRequest} arg.body
   **/
  updateNavigation({ id, body } = {}) {
    const { error } = ContentValidator.updateNavigation().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete navigation
    * @description: Use this to delete navigation.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Navigation ID
    
    **/
  deleteNavigation({ id } = {}) {
    const { error } = ContentValidator.deleteNavigation().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get page meta
    * @description: Use this to get Page Meta.
    * @param {Object} arg - arg object.
    
    **/
  getPageMeta({} = {}) {
    const { error } = ContentValidator.getPageMeta().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/meta`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get page spec
    * @description: Use this to get page spec.
    * @param {Object} arg - arg object.
    
    **/
  getPageSpec({} = {}) {
    const { error } = ContentValidator.getPageSpec().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/spec`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create page
   * @description: Use this to create a page.
   * @param {Object} arg - arg object.
   * @param {PageRequest} arg.body
   **/
  createPage({ body } = {}) {
    const { error } = ContentValidator.createPage().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get pages
    * @description: Use this to get pages.
    * @param {Object} arg - arg object.
    
    **/
  getPages({} = {}) {
    const { error } = ContentValidator.getPages().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create page preview
   * @description: Use this to create a page preview.
   * @param {Object} arg - arg object.
   * @param {PageRequest} arg.body
   **/
  createPagePreview({ body } = {}) {
    const { error } = ContentValidator.createPagePreview().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/preview/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update page
   * @description: Use this to update page.
   * @param {Object} arg - arg object.
   * @param {string} arg.slug - Page publish slug
   * @param {PagePublishRequest} arg.body
   **/
  updatePagePreview({ slug, body } = {}) {
    const { error } = ContentValidator.updatePagePreview().validate(
      {
        slug,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/publish/${slug}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update page
   * @description: Use this to update page.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Page Id
   * @param {PageSchema} arg.body
   **/
  updatePage({ id, body } = {}) {
    const { error } = ContentValidator.updatePage().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete page
    * @description: Use this to delete page.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Page Id
    
    **/
  deletePage({ id } = {}) {
    const { error } = ContentValidator.deletePage().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get pages by component Id
    * @description: The endpoint fetches the component by component Id
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - Slug of page to be fetched
    
    **/
  getPageBySlug({ slug } = {}) {
    const { error } = ContentValidator.getPageBySlug().validate(
      {
        slug,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/${slug}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get seo of application
    * @description: Get seo of application
    * @param {Object} arg - arg object.
    
    **/
  getSEOConfiguration({} = {}) {
    const { error } = ContentValidator.getSEOConfiguration().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update seo of application
   * @description: Update seo of application
   * @param {Object} arg - arg object.
   * @param {Seo} arg.body
   **/
  updateSEOConfiguration({ body } = {}) {
    const { error } = ContentValidator.updateSEOConfiguration().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get slideshows
    * @description: Use this to get slideshows.
    * @param {Object} arg - arg object.
    * @param {string} arg.devicePlatform - Device platform
    
    **/
  getSlideshows({ devicePlatform } = {}) {
    const { error } = ContentValidator.getSlideshows().validate(
      {
        devicePlatform,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["device_platform"] = devicePlatform;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create slideshow
   * @description: Use this to create slideshow.
   * @param {Object} arg - arg object.
   * @param {SlideshowRequest} arg.body
   **/
  createSlideshow({ body } = {}) {
    const { error } = ContentValidator.createSlideshow().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get slideshow by slug
    * @description: Use this to get slideshow by slug.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - Slug
    * @param {string} arg.devicePlatform - Device platform
    
    **/
  getSlideshowBySlug({ slug, devicePlatform } = {}) {
    const { error } = ContentValidator.getSlideshowBySlug().validate(
      {
        slug,
        devicePlatform,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["device_platform"] = devicePlatform;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/${slug}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update slideshow
   * @description: Use this to update slideshow.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Slideshow ID
   * @param {SlideshowRequest} arg.body
   **/
  updateSlideshow({ id, body } = {}) {
    const { error } = ContentValidator.updateSlideshow().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete slideshow
    * @description: Use this to delete slideshow.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Slideshow ID
    
    **/
  deleteSlideshow({ id } = {}) {
    const { error } = ContentValidator.deleteSlideshow().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get support information
    * @description: Get contact details for customer support. Including emails and phone numbers
    * @param {Object} arg - arg object.
    
    **/
  getSupportInformation({} = {}) {
    const { error } = ContentValidator.getSupportInformation().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/support`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update support data of application
   * @description: Update support data of application
   * @param {Object} arg - arg object.
   * @param {Support} arg.body
   **/
  updateSupportInformation({ body } = {}) {
    const { error } = ContentValidator.updateSupportInformation().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/support`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Creates Tag
   * @description: Create tags
   * @param {Object} arg - arg object.
   * @param {CreateTagRequestSchema} arg.body
   **/
  createInjectableTag({ body } = {}) {
    const { error } = ContentValidator.createInjectableTag().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Updates a Tag
   * @description: Update tag
   * @param {Object} arg - arg object.
   * @param {CreateTagRequestSchema} arg.body
   **/
  updateInjectableTag({ body } = {}) {
    const { error } = ContentValidator.updateInjectableTag().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete tags for application
    * @description: Delete tags for application
    * @param {Object} arg - arg object.
    
    **/
  deleteAllInjectableTags({} = {}) {
    const { error } = ContentValidator.deleteAllInjectableTags().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get tags for application
    * @description: Get tags for application
    * @param {Object} arg - arg object.
    
    **/
  getInjectableTags({} = {}) {
    const { error } = ContentValidator.getInjectableTags().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Adds a Tag
   * @description: Add tag
   * @param {Object} arg - arg object.
   * @param {CreateTagRequestSchema} arg.body
   **/
  addInjectableTag({ body } = {}) {
    const { error } = ContentValidator.addInjectableTag().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags/add`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Removes a Tag
   * @description: Remove a particular tag
   * @param {Object} arg - arg object.
   * @param {RemoveHandpickedSchema} arg.body
   **/
  removeInjectableTag({ body } = {}) {
    const { error } = ContentValidator.removeInjectableTag().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags/remove/handpicked`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Edits a Tag by Id
   * @description: Edits a particular tag
   * @param {Object} arg - arg object.
   * @param {string} arg.tagId - Tag ID
   * @param {UpdateHandpickedSchema} arg.body
   **/
  editInjectableTag({ tagId, body } = {}) {
    const { error } = ContentValidator.editInjectableTag().validate(
      {
        tagId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags/edit/handpicked/${tagId}`,
      queryObj,
      body
    );
  }
}

class Communication {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Get campaigns
    * @description: Get campaigns
    * @param {Object} arg - arg object.
    
    **/
  getCampaigns({} = {}) {
    const { error } = CommunicationValidator.getCampaigns().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create campaign
   * @description: Create campaign
   * @param {Object} arg - arg object.
   * @param {CampaignReq} arg.body
   **/
  createCampaign({ body } = {}) {
    const { error } = CommunicationValidator.createCampaign().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get campaign by id
    * @description: Get campaign by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Campaign id
    
    **/
  getCampaignById({ id } = {}) {
    const { error } = CommunicationValidator.getCampaignById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update campaign by id
   * @description: Update campaign by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Campaign id
   * @param {CampaignReq} arg.body
   **/
  updateCampaignById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateCampaignById().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get stats of campaign by id
    * @description: Get stats of campaign by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Campaign id
    
    **/
  getStatsOfCampaignById({ id } = {}) {
    const { error } = CommunicationValidator.getStatsOfCampaignById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/get-stats/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get audiences
    * @description: Get audiences
    * @param {Object} arg - arg object.
    
    **/
  getAudiences({} = {}) {
    const { error } = CommunicationValidator.getAudiences().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create audience
   * @description: Create audience
   * @param {Object} arg - arg object.
   * @param {AudienceReq} arg.body
   **/
  createAudience({ body } = {}) {
    const { error } = CommunicationValidator.createAudience().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Get bigquery headers
   * @description: Get bigquery headers
   * @param {Object} arg - arg object.
   * @param {BigqueryHeadersReq} arg.body
   **/
  getBigqueryHeaders({ body } = {}) {
    const { error } = CommunicationValidator.getBigqueryHeaders().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/bigquery-headers`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get audience by id
    * @description: Get audience by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Audience id
    
    **/
  getAudienceById({ id } = {}) {
    const { error } = CommunicationValidator.getAudienceById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update audience by id
   * @description: Update audience by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Audience id
   * @param {AudienceReq} arg.body
   **/
  updateAudienceById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateAudienceById().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources/${id}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Get n sample records from csv
   * @description: Get n sample records from csv
   * @param {Object} arg - arg object.
   * @param {GetNRecordsCsvReq} arg.body
   **/
  getNSampleRecordsFromCsv({ body } = {}) {
    const {
      error,
    } = CommunicationValidator.getNSampleRecordsFromCsv().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/get-n-records`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get email providers
    * @description: Get email providers
    * @param {Object} arg - arg object.
    
    **/
  getEmailProviders({} = {}) {
    const { error } = CommunicationValidator.getEmailProviders().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create email provider
   * @description: Create email provider
   * @param {Object} arg - arg object.
   * @param {EmailProviderReq} arg.body
   **/
  createEmailProvider({ body } = {}) {
    const { error } = CommunicationValidator.createEmailProvider().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get email provider by id
    * @description: Get email provider by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Email provider id
    
    **/
  getEmailProviderById({ id } = {}) {
    const { error } = CommunicationValidator.getEmailProviderById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update email provider by id
   * @description: Update email provider by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Email provider id
   * @param {EmailProviderReq} arg.body
   **/
  updateEmailProviderById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateEmailProviderById().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get email templates
    * @description: Get email templates
    * @param {Object} arg - arg object.
    
    **/
  getEmailTemplates({} = {}) {
    const { error } = CommunicationValidator.getEmailTemplates().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create email template
   * @description: Create email template
   * @param {Object} arg - arg object.
   * @param {EmailTemplateReq} arg.body
   **/
  createEmailTemplate({ body } = {}) {
    const { error } = CommunicationValidator.createEmailTemplate().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get system email templates
    * @description: Get system email templates
    * @param {Object} arg - arg object.
    
    **/
  getSystemEmailTemplates({} = {}) {
    const { error } = CommunicationValidator.getSystemEmailTemplates().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/system-templates`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get email template by id
    * @description: Get email template by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Email template id
    
    **/
  getEmailTemplateById({ id } = {}) {
    const { error } = CommunicationValidator.getEmailTemplateById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update email template by id
   * @description: Update email template by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Email template id
   * @param {EmailTemplateReq} arg.body
   **/
  updateEmailTemplateById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateEmailTemplateById().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete email template by id
    * @description: Delete email template by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Email template id
    
    **/
  deleteEmailTemplateById({ id } = {}) {
    const { error } = CommunicationValidator.deleteEmailTemplateById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get event subscriptions
    * @description: Get event subscriptions
    * @param {Object} arg - arg object.
    
    **/
  getEventSubscriptions({} = {}) {
    const { error } = CommunicationValidator.getEventSubscriptions().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/event/event-subscriptions`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get jobs
    * @description: Get jobs
    * @param {Object} arg - arg object.
    
    **/
  getJobs({} = {}) {
    const { error } = CommunicationValidator.getJobs().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/jobs`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Trigger campaign job
   * @description: Trigger campaign job
   * @param {Object} arg - arg object.
   * @param {TriggerJobRequest} arg.body
   **/
  triggerCampaignJob({ body } = {}) {
    const { error } = CommunicationValidator.triggerCampaignJob().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/trigger-job`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get job logs
    * @description: Get job logs
    * @param {Object} arg - arg object.
    
    **/
  getJobLogs({} = {}) {
    const { error } = CommunicationValidator.getJobLogs().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/logs`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get communication logs
    * @description: Get communication logs
    * @param {Object} arg - arg object.
    
    **/
  getCommunicationLogs({} = {}) {
    const { error } = CommunicationValidator.getCommunicationLogs().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/log`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get sms providers
    * @description: Get sms providers
    * @param {Object} arg - arg object.
    
    **/
  getSmsProviders({} = {}) {
    const { error } = CommunicationValidator.getSmsProviders().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create sms provider
   * @description: Create sms provider
   * @param {Object} arg - arg object.
   * @param {SmsProviderReq} arg.body
   **/
  createSmsProvider({ body } = {}) {
    const { error } = CommunicationValidator.createSmsProvider().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get sms provider by id
    * @description: Get sms provider by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Sms provider id
    
    **/
  getSmsProviderById({ id } = {}) {
    const { error } = CommunicationValidator.getSmsProviderById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update sms provider by id
   * @description: Update sms provider by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Sms provider id
   * @param {SmsProviderReq} arg.body
   **/
  updateSmsProviderById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateSmsProviderById().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get sms templates
    * @description: Get sms templates
    * @param {Object} arg - arg object.
    
    **/
  getSmsTemplates({} = {}) {
    const { error } = CommunicationValidator.getSmsTemplates().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create sms template
   * @description: Create sms template
   * @param {Object} arg - arg object.
   * @param {SmsTemplateReq} arg.body
   **/
  createSmsTemplate({ body } = {}) {
    const { error } = CommunicationValidator.createSmsTemplate().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get sms template by id
    * @description: Get sms template by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Sms template id
    
    **/
  getSmsTemplateById({ id } = {}) {
    const { error } = CommunicationValidator.getSmsTemplateById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update sms template by id
   * @description: Update sms template by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Sms template id
   * @param {SmsTemplateReq} arg.body
   **/
  updateSmsTemplateById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateSmsTemplateById().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete sms template by id
    * @description: Delete sms template by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Sms template id
    
    **/
  deleteSmsTemplateById({ id } = {}) {
    const { error } = CommunicationValidator.deleteSmsTemplateById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get system sms templates
    * @description: Get system sms templates
    * @param {Object} arg - arg object.
    
    **/
  getSystemSystemTemplates({} = {}) {
    const {
      error,
    } = CommunicationValidator.getSystemSystemTemplates().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/system-templates`,
      queryObj,
      undefined
    );
  }
}

class Payment {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Get All Brand Payment Gateway Config Secret
    * @description: Get All Brand Payment Gateway Config Secret
    * @param {Object} arg - arg object.
    
    **/
  getBrandPaymentGatewayConfig({} = {}) {
    const { error } = PaymentValidator.getBrandPaymentGatewayConfig().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Save Config Secret For Brand Payment Gateway
   * @description: Save Config Secret For Brand Payment Gateway
   * @param {Object} arg - arg object.
   * @param {PaymentGatewayConfigRequest} arg.body
   **/
  saveBrandPaymentGatewayConfig({ body } = {}) {
    const { error } = PaymentValidator.saveBrandPaymentGatewayConfig().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Save Config Secret For Brand Payment Gateway
   * @description: Save Config Secret For Brand Payment Gateway
   * @param {Object} arg - arg object.
   * @param {PaymentGatewayConfigRequest} arg.body
   **/
  updateBrandPaymentGatewayConfig({ body } = {}) {
    const {
      error,
    } = PaymentValidator.updateBrandPaymentGatewayConfig().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get All Valid Payment Options
    * @description: Use this API to get Get All Valid Payment Options for making payment
    * @param {Object} arg - arg object.
    * @param {boolean} arg.refresh - 
    * @param {string} arg.requestType - 
    
    **/
  getPaymentModeRoutes({ refresh, requestType } = {}) {
    const { error } = PaymentValidator.getPaymentModeRoutes().validate(
      {
        refresh,
        requestType,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["refresh"] = refresh;
    queryObj["request_type"] = requestType;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options`,
      queryObj,
      undefined
    );
  }
}

class Order {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Track Shipment by shipment id, for application based on application Id
    * @description: Shipment Track
    * @param {Object} arg - arg object.
    * @param {string} arg.shipmentId - Shipment Id
    
    **/
  trackShipmentPlatform({ shipmentId } = {}) {
    const { error } = OrderValidator.trackShipmentPlatform().validate(
      {
        shipmentId,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/shipments/${shipmentId}/track`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Track Order by order id, for application based on application Id
    * @description: Order Track
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - Order Id
    
    **/
  trackOrder({ orderId } = {}) {
    const { error } = OrderValidator.trackOrder().validate(
      {
        orderId,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/${orderId}/track`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get all failed orders application wise
    * @description: Failed Orders
    * @param {Object} arg - arg object.
    
    **/
  failedOrders({} = {}) {
    const { error } = OrderValidator.failedOrders().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/failed`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Reprocess order by order id
    * @description: Order Reprocess
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - Order Id
    
    **/
  reprocessOrder({ orderId } = {}) {
    const { error } = OrderValidator.reprocessOrder().validate(
      {
        orderId,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/${orderId}/reprocess`,
      queryObj,
      undefined
    );
  }
}

class Catalog {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Delete a Search Keywords
    * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
    
    **/
  deleteSearchKeywords({ id } = {}) {
    const { error } = CatalogValidator.deleteSearchKeywords().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update Search Keyword
   * @description: Update Search Keyword by its id. On successful request, returns the updated collection
   * @param {Object} arg - arg object.
   * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
   * @param {CreateSearchKeyword} arg.body
   **/
  updateSearchKeywords({ id, body } = {}) {
    const { error } = CatalogValidator.updateSearchKeywords().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/${id}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get a Search Keywords Details
    * @description: Get the details of a words by its `id`. If successful, returns a Collection resource in the response body specified in `GetSearchWordsDetailResponseSchema`
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
    
    **/
  getSearchKeywords({ id } = {}) {
    const { error } = CatalogValidator.getSearchKeywords().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add a Custom Search Keywords
   * @description: Create a Custom Search Keywords. See `CreateSearchKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateSearchKeywordSchema`
   * @param {Object} arg - arg object.
   * @param {CreateSearchKeyword} arg.body
   **/
  createCustomKeyword({ body } = {}) {
    const { error } = CatalogValidator.createCustomKeyword().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: List all Search Custom Keyword Listing
    * @description: Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results
    * @param {Object} arg - arg object.
    
    **/
  getAllSearchKeyword({} = {}) {
    const { error } = CatalogValidator.getAllSearchKeyword().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Delete a Autocomplete Keywords
    * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
    
    **/
  deleteAutocompleteKeyword({ id } = {}) {
    const { error } = CatalogValidator.deleteAutocompleteKeyword().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create & Update Autocomplete Keyword
   * @description: Update a mapping by it's id. On successful request, returns the updated Keyword mapping
   * @param {Object} arg - arg object.
   * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
   * @param {CreateAutocompleteKeyword} arg.body
   **/
  updateAutocompleteKeyword({ id, body } = {}) {
    const { error } = CatalogValidator.updateAutocompleteKeyword().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/${id}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get a Autocomplete Keywords Details
    * @description: Get the details of a words by its `id`. If successful, returns a keywords resource in the response body specified in `GetAutocompleteWordsResponseSchema`
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
    
    **/
  getAutocompleteKeywordDetail({ id } = {}) {
    const { error } = CatalogValidator.getAutocompleteKeywordDetail().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add a Custom Autocomplete Keywords
   * @description: Create a Custom Autocomplete Keywords. See `CreateAutocompleteKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateAutocompleteKeywordSchema`
   * @param {Object} arg - arg object.
   * @param {CreateAutocompleteKeyword} arg.body
   **/
  createCustomAutocompleteRule({ body } = {}) {
    const { error } = CatalogValidator.createCustomAutocompleteRule().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: List all Autocomplete Keyword Listing
    * @description: Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results
    * @param {Object} arg - arg object.
    
    **/
  getAutocompleteConfig({} = {}) {
    const { error } = CatalogValidator.getAutocompleteConfig().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get configuration meta  details for catalog for admin panel
    * @description: configuration meta  details for catalog.
    * @param {Object} arg - arg object.
    
    **/
  getCatalogConfiguration({} = {}) {
    const { error } = CatalogValidator.getCatalogConfiguration().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/metadata/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add configuration for products & listings
   * @description: Add configuration for products & listing.
   * @param {Object} arg - arg object.
   * @param {AppConfiguration} arg.body
   **/
  createConfigurationProductListing({ body } = {}) {
    const {
      error,
    } = CatalogValidator.createConfigurationProductListing().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get configured details for catalog
    * @description: configured details for catalog.
    * @param {Object} arg - arg object.
    
    **/
  getConfigurations({} = {}) {
    const { error } = CatalogValidator.getConfigurations().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add configuration for categories and brands
   * @description: Add configuration for categories & brands.
   * @param {Object} arg - arg object.
   * @param {string} arg.type - type can be brands, categories etc.
   * @param {AppConfiguration} arg.body
   **/
  createConfigurationByType({ type, body } = {}) {
    const { error } = CatalogValidator.createConfigurationByType().validate(
      {
        type,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${type}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get configured details for catalog
    * @description: configured details for catalog.
    * @param {Object} arg - arg object.
    * @param {string} arg.type - type can be brands, categories etc.
    
    **/
  getConfigurationByType({ type } = {}) {
    const { error } = CatalogValidator.getConfigurationByType().validate(
      {
        type,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${type}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get query filters to configure a collection
    * @description: Get query filters to configure a collection
    * @param {Object} arg - arg object.
    
    **/
  getQueryFilters({} = {}) {
    const { error } = CatalogValidator.getQueryFilters().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/query-options/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add a Collection
   * @description: Create a collection. See `CreateCollectionRequestSchema` for the list of attributes needed to create a collection and collections/query-options for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionCreateResponse`
   * @param {Object} arg - arg object.
   * @param {CreateCollection} arg.body
   **/
  createCollection({ body } = {}) {
    const { error } = CatalogValidator.createCollection().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: List all the collections
    * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections as specified in `CollectionListingSchema`
    * @param {Object} arg - arg object.
    
    **/
  getAllCollections({} = {}) {
    const { error } = CatalogValidator.getAllCollections().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get a particular collection
    * @description: Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve.
    
    **/
  getCollectionDetail({ slug } = {}) {
    const { error } = CatalogValidator.getCollectionDetail().validate(
      {
        slug,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${slug}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Delete a Collection
    * @description: Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier of a collection.
    
    **/
  deleteCollection({ id } = {}) {
    const { error } = CatalogValidator.deleteCollection().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Update a collection
    * @description: Update a collection by it's id. On successful request, returns the updated collection
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier of a collection.
    
    **/
  updateCollection({ id } = {}) {
    const { error } = CatalogValidator.updateCollection().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add items to a collection
   * @description: Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - A `id` is a unique identifier of a collection.
   * @param {CollectionItemRequest} arg.body
   **/
  addCollectionItems({ id, body } = {}) {
    const { error } = CatalogValidator.addCollectionItems().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/items/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get the items for a collection
    * @description: Get items from a collection specified by its `id`.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier of a collection.
    * @param {string} [arg.sortOn] - Each response will contain sort_on param, which should be sent back to make pagination work.
    * @param {string} [arg.pageId] - Each response will contain next_page_id param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getCollectionItems({ id, sortOn, pageId, pageSize } = {}) {
    const { error } = CatalogValidator.getCollectionItems().validate(
      {
        id,
        sortOn,
        pageId,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["sort_on"] = sortOn;
    queryObj["page_id"] = pageId;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/items/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Analytics data of catalog and inventory.
    * @description: Catalog Insights api returns the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the app.
    * @param {Object} arg - arg object.
    * @param {string} [arg.brand] - Brand slug
    
    **/
  getCatalogInsights({ brand } = {}) {
    const { error } = CatalogValidator.getCatalogInsights().validate(
      {
        brand,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["brand"] = brand;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/analytics/insights/`,
      queryObj,
      undefined
    );
  }
}

class Assets {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
    * @description: Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `appStartUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `appCompleteUpload` api to complete the upload process.
This operation will return the url for the uploaded file.

    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    * @param {StartRequest} arg.body
    **/
  appStartUpload({ namespace, body } = {}) {
    const { error } = AssetsValidator.appStartUpload().validate(
      {
        namespace,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/upload/start/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
    * @description: Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `appStartUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `appCompleteUpload` api to complete the upload process.
This operation will return the url for the uploaded file.

    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    * @param {StartResponse} arg.body
    **/
  appCompleteUpload({ namespace, body } = {}) {
    const { error } = AssetsValidator.appCompleteUpload().validate(
      {
        namespace,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/upload/complete/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Copy Files
   * @description: Copy Files
   * @param {Object} arg - arg object.
   * @param {boolean} [arg.sync] - sync
   * @param {BulkRequest} arg.body
   **/
  appCopyFiles({ body, sync } = {}) {
    const { error } = AssetsValidator.appCopyFiles().validate(
      {
        body,
        sync,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["sync"] = sync;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/uploads/copy/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Browse Files
    * @description: Browse Files
    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    
    **/
  appBrowse({ namespace } = {}) {
    const { error } = AssetsValidator.appBrowse().validate(
      {
        namespace,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/browse/`,
      queryObj,
      undefined
    );
  }
}

class Share {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   *
   * @summary: Create short link
   * @description: Create short link
   * @param {Object} arg - arg object.
   * @param {ShortLinkReq} arg.body
   **/
  createShortLink({ body } = {}) {
    const { error } = ShareValidator.createShortLink().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get short links
    * @description: Get short links
    * @param {Object} arg - arg object.
    * @param {string} [arg.pageNo] - Current page number
    * @param {string} [arg.pageSize] - Current page size
    * @param {string} [arg.createdBy] - Short link creator
    * @param {string} [arg.active] - Short link active status
    * @param {string} [arg.q] - Search text for original and short url
    
    **/
  getShortLinks({ pageNo, pageSize, createdBy, active, q } = {}) {
    const { error } = ShareValidator.getShortLinks().validate(
      {
        pageNo,
        pageSize,
        createdBy,
        active,
        q,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["created_by"] = createdBy;
    queryObj["active"] = active;
    queryObj["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get short link by hash
    * @description: Get short link by hash
    * @param {Object} arg - arg object.
    * @param {string} arg.hash - Hash of short url
    
    **/
  getShortLinkByHash({ hash } = {}) {
    const { error } = ShareValidator.getShortLinkByHash().validate(
      {
        hash,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/${hash}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Update short link by id
    * @description: Update short link by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Short link document identifier
    
    **/
  updateShortLinkById({ id } = {}) {
    const { error } = ShareValidator.updateShortLinkById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/${id}`,
      queryObj,
      undefined
    );
  }
}

class Cart {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Get with single coupon details or coupon list
    * @description: Get coupon list with pagination
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - 
    * @param {number} [arg.pageSize] - 
    * @param {boolean} [arg.isArchived] - 
    * @param {string} [arg.title] - 
    * @param {boolean} [arg.isPublic] - 
    * @param {boolean} [arg.isDisplay] - 
    * @param {string} [arg.typeSlug] - 
    * @param {string} [arg.code] - 
    
    **/
  getCoupons({
    pageNo,
    pageSize,
    isArchived,
    title,
    isPublic,
    isDisplay,
    typeSlug,
    code,
  } = {}) {
    const { error } = CartValidator.getCoupons().validate(
      {
        pageNo,
        pageSize,
        isArchived,
        title,
        isPublic,
        isDisplay,
        typeSlug,
        code,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["is_archived"] = isArchived;
    queryObj["title"] = title;
    queryObj["is_public"] = isPublic;
    queryObj["is_display"] = isDisplay;
    queryObj["type_slug"] = typeSlug;
    queryObj["code"] = code;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create new coupon
   * @description: Create new coupon
   * @param {Object} arg - arg object.
   * @param {CouponAdd} arg.body
   **/
  createCoupon({ body } = {}) {
    const { error } = CartValidator.createCoupon().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get with single coupon details or coupon list
    * @description: Get single coupon details with `id` in path param
    * @param {Object} arg - arg object.
    * @param {string} arg.id - 
    
    **/
  getCouponById({ id } = {}) {
    const { error } = CartValidator.getCouponById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update existing coupon configuration
   * @description: Update coupon with id sent in `id`
   * @param {Object} arg - arg object.
   * @param {string} arg.id -
   * @param {CouponUpdate} arg.body
   **/
  updateCoupon({ id, body } = {}) {
    const { error } = CartValidator.updateCoupon().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon/${id}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update coupon archive state and schedule
   * @description: Update archive/unarchive and change schedule for coupon
   * @param {Object} arg - arg object.
   * @param {string} arg.id -
   * @param {CouponPartialUpdate} arg.body
   **/
  updateCouponPartially({ id, body } = {}) {
    const { error } = CartValidator.updateCouponPartially().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon/${id}`,
      queryObj,
      body
    );
  }
}

class Analytics {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Get statistics groups
    * @description: Get statistics groups
    * @param {Object} arg - arg object.
    
    **/
  getStatiscticsGroups({} = {}) {
    const { error } = AnalyticsValidator.getStatiscticsGroups().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stats/group`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get statistics group components
    * @description: Get statistics group components
    * @param {Object} arg - arg object.
    * @param {string} arg.groupName - Group name
    
    **/
  getStatiscticsGroupComponents({ groupName } = {}) {
    const {
      error,
    } = AnalyticsValidator.getStatiscticsGroupComponents().validate(
      {
        groupName,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stats/group/${groupName}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get component statistics csv
    * @description: Get component statistics csv
    * @param {Object} arg - arg object.
    * @param {string} arg.componentName - Component name
    
    **/
  getComponentStatsCSV({ componentName } = {}) {
    const { error } = AnalyticsValidator.getComponentStatsCSV().validate(
      {
        componentName,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stats/component/{component_name}.csv`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get component statistics pdf
    * @description: Get component statistics pdf
    * @param {Object} arg - arg object.
    * @param {string} arg.componentName - Component name
    
    **/
  getComponentStatsPDF({ componentName } = {}) {
    const { error } = AnalyticsValidator.getComponentStatsPDF().validate(
      {
        componentName,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stats/component/{component_name}.pdf`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get component statistics
    * @description: Get component statistics
    * @param {Object} arg - arg object.
    * @param {string} arg.componentName - Component name
    
    **/
  getComponentStats({ componentName } = {}) {
    const { error } = AnalyticsValidator.getComponentStats().validate(
      {
        componentName,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stats/component/${componentName}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get abandon carts list
    * @description: Get abandon carts list
    * @param {Object} arg - arg object.
    * @param {string} arg.from - From date
    * @param {string} arg.to - To date
    * @param {string} [arg.pageNo] - Current page number
    * @param {string} [arg.pageSize] - Current page size
    
    **/
  getAbandonCartList({ from, to, pageNo, pageSize } = {}) {
    const { error } = AnalyticsValidator.getAbandonCartList().validate(
      {
        from,
        to,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["from"] = from;
    queryObj["to"] = to;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart/abandon-cart`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get abandon carts csv
    * @description: Get abandon carts csv
    * @param {Object} arg - arg object.
    * @param {string} arg.from - From date
    * @param {string} arg.to - To date
    
    **/
  getAbandonCartsCSV({ from, to } = {}) {
    const { error } = AnalyticsValidator.getAbandonCartsCSV().validate(
      {
        from,
        to,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["from"] = from;
    queryObj["to"] = to;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart/abandon-cart.csv`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get abandon carts details
    * @description: Get abandon cart details
    * @param {Object} arg - arg object.
    * @param {string} arg.cartId - Cart Id
    
    **/
  getAbandonCartDetail({ cartId } = {}) {
    const { error } = AnalyticsValidator.getAbandonCartDetail().validate(
      {
        cartId,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart/abandon-cart/${cartId}`,
      queryObj,
      undefined
    );
  }
}

module.exports = PlatformApplicationClient;
