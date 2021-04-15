const {
  LeadValidator,
  BillingValidator,
  CommunicationValidator,
  PaymentValidator,
  OrderValidator,
  CatalogValidator,
  CompanyProfileValidator,
  FileStorageValidator,
  ConfigurationValidator,
  MarketplacesValidator,
  AnalyticsValidator,
} = require("./PlatformModels");
const PlatformApplicationClient = require("./PlatformApplicationClient");
const Paginator = require("../common/Paginator");
const PlatformAPIClient = require("./PlatformAPIClient");

class PlatformClient {
  constructor(config) {
    this.config = config;
    this.lead = new Lead(config);
    this.billing = new Billing(config);
    this.communication = new Communication(config);
    this.payment = new Payment(config);
    this.order = new Order(config);
    this.catalog = new Catalog(config);
    this.companyProfile = new CompanyProfile(config);
    this.fileStorage = new FileStorage(config);
    this.configuration = new Configuration(config);
    this.marketplaces = new Marketplaces(config);
    this.analytics = new Analytics(config);
  }
  application(applicationId) {
    return new PlatformApplicationClient(applicationId, this.config);
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
        
        
        @property { number } [itemTotal]
        
        @property { string } [nextId]
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [current]
        
        @property { string } type
        
        @property { number } [size]
        
         
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
        @typedef SeoComponent
        
        
        @property { SeoSchema } [seo]
        
         
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
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ResourceContent
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */

/**
        @typedef Asset
        
        
        @property { string } [aspectRatio]
        
        @property { string } [id]
        
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
        
        @property { Page } [page]
        
         
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
        
        @property { CreatedBySchema } [createdBy]
        
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
        @typedef SlideshowMedia
        
        
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
        @typedef GetFaqCategoryBySlugSchema
        
        
        @property { FAQCategorySchema } [category]
        
         
    */

/**
        @typedef LandingPageGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef LandingPageSchema
        
        
        @property { string } [slug]
        
        @property { Action } [action]
        
        @property { Array<string> } [platform]
        
        @property { CreatedBySchema } [createdBy]
        
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
        
        @property { Page } [page]
        
         
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
        
        @property { CreatedBySchema } [createdBy]
        
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
        
        @property { CreatedBySchema } [createdBy]
        
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
        
        @property { Page } [page]
        
         
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
        @typedef CreatedBySchema
        
        
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
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SlideshowSchema
        
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { Array<SlideshowMedia> } [media]
        
        @property { boolean } [active]
        
        @property { boolean } [archived]
        
        @property { Object } [customJson]
        
         
    */

/**
        @typedef SlideshowRequest
        
        
        @property { string } [slug]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { SlideshowMedia } [media]
        
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
        @typedef PhoneProperties
        
        
        @property { string } [key]
        
        @property { string } [code]
        
        @property { string } [number]
        
         
    */

/**
        @typedef PhoneSchema
        
        
        @property { boolean } [active]
        
        @property { Array<PhoneProperties> } [phone]
        
         
    */

/**
        @typedef EmailProperties
        
        
        @property { string } [key]
        
        @property { string } [value]
        
         
    */

/**
        @typedef EmailSchema
        
        
        @property { boolean } [active]
        
        @property { Array<EmailProperties> } [email]
        
         
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
        @typedef UnauthenticatedUser
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef UnauthenticatedApplication
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef BadRequest
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef ResourceNotFound
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef InternalServerError
        
        
        @property { string } [message]
        
        @property { string } [code]
        
         
    */

/**
        @typedef PlanRecurring
        
        
        @property { string } [interval]
        
        @property { number } [intervalCount]
        
         
    */

/**
        @typedef Plan
        
        
        @property { PlanRecurring } [recurring]
        
        @property { boolean } [isTrialPlan]
        
        @property { string } [planGroup]
        
        @property { Array<string> } [tagLines]
        
        @property { string } [currency]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isVisible]
        
        @property { number } [trialPeriod]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [productSuiteId]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
         
    */

/**
        @typedef DetailedPlanComponents
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { string } [description]
        
        @property { string } [group]
        
        @property { string } [icon]
        
        @property { Object } [links]
        
        @property { boolean } [enabled]
        
        @property { string } [displayText]
        
         
    */

/**
        @typedef DetailedPlan
        
        
        @property { PlanRecurring } [recurring]
        
        @property { boolean } [isTrialPlan]
        
        @property { string } [planGroup]
        
        @property { Array<string> } [tagLines]
        
        @property { string } [currency]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isVisible]
        
        @property { number } [trialPeriod]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [productSuiteId]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { Array<DetailedPlanComponents> } [components]
        
         
    */

/**
        @typedef InvoiceDetailsPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef InvoiceDetailsClient
        
        
        @property { Array<string> } [addressLines]
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [phone]
        
         
    */

/**
        @typedef InvoiceDetailsStatusTrail
        
        
        @property { string } [id]
        
        @property { string } [value]
        
        @property { string } [timestamp]
        
         
    */

/**
        @typedef InvoiceDetailsPaymentMethodsDataChecks
        
        
        @property { string } [cvcCheck]
        
        @property { string } [addressLine1Check]
        
        @property { string } [addressPostalCodeCheck]
        
         
    */

/**
        @typedef InvoiceDetailsPaymentMethodsDataNetworks
        
        
        @property { Array<string> } [available]
        
        @property { string } [preferred]
        
         
    */

/**
        @typedef InvoiceDetailsPaymentMethodsDataThreeDSecureUsage
        
        
        @property { boolean } [supported]
        
         
    */

/**
        @typedef InvoiceDetailsPaymentMethodsData
        
        
        @property { string } [brand]
        
        @property { string } [last4]
        
        @property { InvoiceDetailsPaymentMethodsDataChecks } [checks]
        
        @property { string } [wallet]
        
        @property { string } [country]
        
        @property { string } [funding]
        
        @property { number } [expYear]
        
        @property { InvoiceDetailsPaymentMethodsDataNetworks } [networks]
        
        @property { number } [expMonth]
        
        @property { string } [fingerprint]
        
        @property { string } [generatedFrom]
        
        @property { InvoiceDetailsPaymentMethodsDataThreeDSecureUsage } [threeDSecureUsage]
        
         
    */

/**
        @typedef InvoiceDetailsPaymentMethods
        
        
        @property { number } [id]
        
        @property { string } [type]
        
        @property { string } [pgPaymentMethodId]
        
        @property { InvoiceDetailsPaymentMethodsData } [data]
        
        @property { boolean } [isDefault]
        
         
    */

/**
        @typedef InvoicePaymentMethod
        
        
        @property { string } [pgPaymentMethodId]
        
         
    */

/**
        @typedef InvoiceDetails
        
        
        @property { InvoiceDetailsPeriod } [period]
        
        @property { InvoiceDetailsClient } [client]
        
        @property { boolean } [autoAdvance]
        
        @property { string } [currency]
        
        @property { boolean } [paid]
        
        @property { number } [attemp]
        
        @property { string } [id]
        
        @property { string } [collectionMethod]
        
        @property { string } [subscriberId]
        
        @property { string } [invoiceUrl]
        
        @property { string } [number]
        
        @property { Object } [pgData]
        
        @property { string } [receiptNumber]
        
        @property { string } [statementDescriptor]
        
        @property { string } [currentStatus]
        
        @property { Array<InvoiceDetailsStatusTrail> } [statusTrail]
        
        @property { number } [subtotal]
        
        @property { number } [total]
        
        @property { string } [subscription]
        
        @property { string } [nextActionTime]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { string } [hashIdentifier]
        
        @property { InvoicePaymentMethod } [paymentMethod]
        
         
    */

/**
        @typedef InvoiceItemsPlanRecurring
        
        
        @property { string } [interval]
        
        @property { number } [intervalCount]
        
         
    */

/**
        @typedef InvoiceItemsPlan
        
        
        @property { InvoiceItemsPlanRecurring } [recurring]
        
        @property { boolean } [isTrialPlan]
        
        @property { string } [planGroup]
        
        @property { Array<string> } [tagLines]
        
        @property { string } [currency]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isVisible]
        
        @property { number } [trialPeriod]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [productSuiteId]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
         
    */

/**
        @typedef InvoiceItemsPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef InvoiceItems
        
        
        @property { string } [id]
        
        @property { string } [currency]
        
        @property { InvoiceItemsPlan } [plan]
        
        @property { string } [name]
        
        @property { number } [quantity]
        
        @property { string } [description]
        
        @property { InvoiceItemsPeriod } [period]
        
        @property { number } [unitAmount]
        
        @property { number } [amount]
        
        @property { string } [type]
        
        @property { string } [invoiceId]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
         
    */

/**
        @typedef Invoice
        
        
        @property { InvoiceDetails } [invoice]
        
        @property { Array<InvoiceItems> } [invoiceItems]
        
         
    */

/**
        @typedef InvoicesDataClient
        
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { Array<string> } [addressLines]
        
         
    */

/**
        @typedef InvoicesDataPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef InvoicesDataPaymentMethod
        
        
        @property { string } [pgPaymentMethodId]
        
         
    */

/**
        @typedef InvoicesData
        
        
        @property { string } [id]
        
        @property { InvoicesDataClient } [client]
        
        @property { boolean } [autoAdvance]
        
        @property { string } [currency]
        
        @property { boolean } [paid]
        
        @property { number } [attemp]
        
        @property { string } [collectionMethod]
        
        @property { string } [subscriberId]
        
        @property { string } [invoiceUrl]
        
        @property { string } [number]
        
        @property { Object } [pgData]
        
        @property { InvoicesDataPeriod } [period]
        
        @property { string } [receiptNumber]
        
        @property { string } [statementDescriptor]
        
        @property { string } [currentStatus]
        
        @property { Array<InvoiceDetailsStatusTrail> } [statusTrail]
        
        @property { number } [subtotal]
        
        @property { number } [total]
        
        @property { string } [subscription]
        
        @property { string } [nextActionTime]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { string } [hashIdentifier]
        
        @property { InvoicesDataPaymentMethod } [paymentMethod]
        
        @property { Array<InvoiceItems> } [invoiceItems]
        
         
    */

/**
        @typedef Invoices
        
        
        @property { Array<InvoicesData> } [data]
        
        @property { number } [start]
        
        @property { number } [end]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [total]
        
         
    */

/**
        @typedef Phone
        
        
        @property { string } [phoneNumber]
        
        @property { string } [phoneCountryCode]
        
         
    */

/**
        @typedef SubscriptionBillingAddress
        
        
        @property { string } [country]
        
        @property { string } [state]
        
        @property { string } [city]
        
        @property { string } [line1]
        
        @property { string } [line2]
        
        @property { string } [postalCode]
        
         
    */

/**
        @typedef SubscriptionCustomer
        
        
        @property { Phone } [phone]
        
        @property { SubscriptionBillingAddress } [billingAddress]
        
        @property { string } [id]
        
        @property { string } [uniqueId]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { Object } [data]
        
         
    */

/**
        @typedef SubscriptionCustomerCreate
        
        
        @property { Phone } [phone]
        
        @property { SubscriptionBillingAddress } [billingAddress]
        
        @property { string } [uniqueId]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [email]
        
         
    */

/**
        @typedef SubscriptionCurrentPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef SubscriptionPauseCollection
        
        
        @property { string } [behavior]
        
        @property { string } [resumeAt]
        
         
    */

/**
        @typedef SubscriptionTrial
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef SubscriptionInvoiceSettings
        
        
        @property { boolean } [generation]
        
        @property { boolean } [charging]
        
         
    */

/**
        @typedef Subscription
        
        
        @property { SubscriptionCurrentPeriod } [currentPeriod]
        
        @property { SubscriptionPauseCollection } [pauseCollection]
        
        @property { SubscriptionTrial } [trial]
        
        @property { SubscriptionInvoiceSettings } [invoiceSettings]
        
        @property { boolean } [isActive]
        
        @property { boolean } [cancelAtPeriodEnd]
        
        @property { string } [id]
        
        @property { string } [subscriberId]
        
        @property { string } [planId]
        
        @property { string } [productSuiteId]
        
        @property { Plan } [planData]
        
        @property { string } [currentStatus]
        
        @property { string } [collectionMethod]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { string } [latestInvoice]
        
         
    */

/**
        @typedef SubscriptionStatus
        
        
        @property { boolean } [isEnabled]
        
        @property { Subscription } [subscription]
        
         
    */

/**
        @typedef SubscriptionLimitApplication
        
        
        @property { boolean } [enabled]
        
        @property { number } [hardLimit]
        
        @property { number } [softLimit]
        
         
    */

/**
        @typedef SubscriptionLimitMarketplace
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef SubscriptionLimitOtherPlatform
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef SubscriptionLimitTeam
        
        
        @property { number } [limit]
        
         
    */

/**
        @typedef SubscriptionLimitProducts
        
        
        @property { boolean } [bulk]
        
        @property { number } [limit]
        
         
    */

/**
        @typedef SubscriptionLimitExtensions
        
        
        @property { boolean } [enabled]
        
        @property { number } [limit]
        
         
    */

/**
        @typedef SubscriptionLimitIntegrations
        
        
        @property { boolean } [enabled]
        
        @property { number } [limit]
        
         
    */

/**
        @typedef SubscriptionLimit
        
        
        @property { SubscriptionLimitApplication } [application]
        
        @property { SubscriptionLimitMarketplace } [marketplace]
        
        @property { SubscriptionLimitOtherPlatform } [otherPlatform]
        
        @property { SubscriptionLimitTeam } [team]
        
        @property { SubscriptionLimitProducts } [products]
        
        @property { SubscriptionLimitExtensions } [extensions]
        
        @property { SubscriptionLimitIntegrations } [integrations]
        
        @property { boolean } [isTrialPlan]
        
         
    */

/**
        @typedef SubscriptionActivateReq
        
        
        @property { string } [uniqueId]
        
        @property { string } [type]
        
        @property { string } [productSuite]
        
        @property { string } [planId]
        
        @property { string } [paymentMethod]
        
         
    */

/**
        @typedef SubscriptionActivateRes
        
        
        @property { boolean } [success]
        
        @property { Subscription } [data]
        
         
    */

/**
        @typedef CancelSubscriptionReq
        
        
        @property { string } [uniqueId]
        
        @property { string } [type]
        
        @property { string } [productSuite]
        
        @property { string } [subscriptionId]
        
         
    */

/**
        @typedef CancelSubscriptionRes
        
        
        @property { boolean } [success]
        
        @property { Subscription } [data]
        
         
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
        @typedef PaymentGatewayConfigResponse
        
        
        @property { boolean } success
        
        @property { Array<string> } displayFields
        
        @property { boolean } created
        
        @property { Array<Object> } [aggregators]
        
        @property { string } appId
        
        @property { Array<string> } excludedFields
        
         
    */

/**
        @typedef ErrorCodeDescription
        
        
        @property { boolean } success
        
        @property { string } description
        
        @property { string } code
        
         
    */

/**
        @typedef PaymentGatewayConfig
        
        
        @property { string } secret
        
        @property { string } configType
        
        @property { string } key
        
        @property { string } merchantSalt
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { PaymentGatewayConfig } [aggregatorName]
        
        @property { boolean } [isActive]
        
        @property { string } appId
        
         
    */

/**
        @typedef PaymentGatewayToBeReviewed
        
        
        @property { boolean } success
        
        @property { Array<string> } aggregator
        
         
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
        
        
        @property { Array<string> } [intentAppErrorList]
        
        @property { string } [cardToken]
        
        @property { PaymentModeLogo } [logoUrl]
        
        @property { number } [retryCount]
        
        @property { string } [cardReference]
        
        @property { number } [displayPriority]
        
        @property { string } [cardId]
        
        @property { string } [merchantCode]
        
        @property { string } [cardFingerprint]
        
        @property { number } [expMonth]
        
        @property { string } [cardIsin]
        
        @property { number } [expYear]
        
        @property { string } [code]
        
        @property { string } [cardBrandImage]
        
        @property { string } aggregatorName
        
        @property { string } [intentFlow]
        
        @property { string } [cardBrand]
        
        @property { string } [cardIssuer]
        
        @property { string } [cardNumber]
        
        @property { string } [displayName]
        
        @property { string } [cardType]
        
        @property { string } [nickname]
        
        @property { string } [name]
        
        @property { boolean } [expired]
        
        @property { string } [cardName]
        
        @property { string } [fyndVpa]
        
        @property { number } [timeout]
        
         
    */

/**
        @typedef RootPaymentMode
        
        
        @property { string } displayName
        
        @property { number } displayPriority
        
        @property { string } [aggregatorName]
        
        @property { boolean } [anonymousEnable]
        
        @property { boolean } [addCardEnabled]
        
        @property { string } name
        
        @property { Array<PaymentModeList> } [list]
        
         
    */

/**
        @typedef PaymentOptions
        
        
        @property { Array<RootPaymentMode> } paymentOption
        
         
    */

/**
        @typedef PaymentOptionsResponse
        
        
        @property { boolean } success
        
        @property { PaymentOptions } paymentOptions
        
         
    */

/**
        @typedef PayoutsResponse
        
        
        @property { string } transferType
        
        @property { Object } uniqueTransferNo
        
        @property { Object } customers
        
        @property { boolean } isDefault
        
        @property { Array<Object> } payoutsAggregators
        
        @property { Object } moreAttributes
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef PayoutRequest
        
        
        @property { string } transferType
        
        @property { string } uniqueExternalId
        
        @property { Object } users
        
        @property { string } aggregator
        
        @property { Object } bankDetails
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef PayoutResponse
        
        
        @property { string } transferType
        
        @property { string } paymentStatus
        
        @property { boolean } success
        
        @property { string } uniqueTransferNo
        
        @property { Object } users
        
        @property { Object } payouts
        
        @property { boolean } created
        
        @property { Object } bankDetails
        
        @property { string } aggregator
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef UpdatePayoutResponse
        
        
        @property { boolean } success
        
        @property { boolean } isDefault
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef UpdatePayoutRequest
        
        
        @property { boolean } isDefault
        
        @property { boolean } isActive
        
        @property { string } uniqueExternalId
        
         
    */

/**
        @typedef DeletePayoutResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef SubscriptionPaymentMethodResponse
        
        
        @property { boolean } success
        
        @property { Array<Object> } data
        
         
    */

/**
        @typedef DeleteSubscriptionPaymentMethodResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef SubscriptionConfigResponse
        
        
        @property { boolean } success
        
        @property { string } aggregator
        
        @property { Object } config
        
         
    */

/**
        @typedef SaveSubscriptionSetupIntentRequest
        
        
        @property { string } uniqueExternalId
        
         
    */

/**
        @typedef SaveSubscriptionSetupIntentResponse
        
        
        @property { boolean } success
        
        @property { Object } data
        
         
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
        
        
        @property { string } [code]
        
        @property { Object } [meta]
        
        @property { string } [message]
        
        @property { number } [status]
        
         
    */

/**
        @typedef SearchKeywordResult
        
        
        @property { Object } query
        
        @property { string } sortOn
        
         
    */

/**
        @typedef CreateSearchKeyword
        
        
        @property { Array<string> } [words]
        
        @property { boolean } [isActive]
        
        @property { SearchKeywordResult } result
        
        @property { Object } [customJson]
        
        @property { string } [appId]
        
         
    */

/**
        @typedef GetSearchWordsData
        
        
        @property { Array<string> } [words]
        
        @property { Object } [result]
        
        @property { string } [uid]
        
        @property { Object } [customJson]
        
        @property { string } [appId]
        
         
    */

/**
        @typedef GetSearchWordsDetailResponse
        
        
        @property { GetSearchWordsData } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef GetSearchWordsResponse
        
        
        @property { Array<GetSearchWordsData> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AutocompletePageAction
        
        
        @property { Object } query
        
        @property { string } [url]
        
        @property { Object } [params]
        
        @property { string } type
        
         
    */

/**
        @typedef AutocompleteAction
        
        
        @property { string } [type]
        
        @property { AutocompletePageAction } [page]
        
         
    */

/**
        @typedef Media
        
        
        @property { string } [type]
        
        @property { string } [url]
        
         
    */

/**
        @typedef AutocompleteResult
        
        
        @property { Object } [customJson]
        
        @property { string } [display]
        
        @property { AutocompleteAction } [action]
        
        @property { Media } [logo]
        
         
    */

/**
        @typedef CreateAutocompleteKeyword
        
        
        @property { Array<string> } [words]
        
        @property { boolean } [isActive]
        
        @property { Object } [customJson]
        
        @property { Array<AutocompleteResult> } [results]
        
        @property { string } [appId]
        
         
    */

/**
        @typedef GetAutocompleteWordsData
        
        
        @property { Array<string> } [words]
        
        @property { string } [uid]
        
        @property { Object } [customJson]
        
        @property { Array<Object> } [results]
        
        @property { string } [appId]
        
         
    */

/**
        @typedef GetAutocompleteWordsResponse
        
        
        @property { Array<GetAutocompleteWordsData> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef CreateAutocompleteWordsResponse
        
        
        @property { Array<string> } [words]
        
        @property { Object } [customJson]
        
        @property { Array<Object> } [results]
        
        @property { string } [appId]
        
         
    */

/**
        @typedef ProductBundleItem
        
        
        @property { number } minQuantity
        
        @property { boolean } [autoAddToCart]
        
        @property { number } productUid
        
        @property { boolean } [autoSelect]
        
        @property { boolean } [allowRemove]
        
        @property { number } maxQuantity
        
         
    */

/**
        @typedef ProductBundleRequest
        
        
        @property { string } name
        
        @property { string } slug
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } isActive
        
        @property { Object } [createdBy]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { Object } [modifiedBy]
        
        @property { string } choice
        
        @property { string } [logo]
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { Array<ProductBundleItem> } products
        
         
    */

/**
        @typedef GetProductBundleCreateResponse
        
        
        @property { string } name
        
        @property { number } [companyId]
        
        @property { string } slug
        
        @property { Array<string> } [pageVisibility]
        
        @property { string } [id]
        
        @property { boolean } isActive
        
        @property { Object } [createdBy]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { Object } [modifiedBy]
        
        @property { string } choice
        
        @property { string } [logo]
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { Array<ProductBundleItem> } products
        
         
    */

/**
        @typedef GetProductBundleListingResponse
        
        
        @property { Array<GetProductBundleCreateResponse> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ProductBundleUpdateRequest
        
        
        @property { string } name
        
        @property { string } slug
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } isActive
        
        @property { string } [modifiedOn]
        
        @property { Object } [modifiedBy]
        
        @property { string } choice
        
        @property { string } [logo]
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { Array<ProductBundleItem> } products
        
         
    */

/**
        @typedef Price
        
        
        @property { number } [minMarked]
        
        @property { string } [currency]
        
        @property { number } [maxEffective]
        
        @property { number } [maxMarked]
        
        @property { number } [minEffective]
        
         
    */

/**
        @typedef Size
        
        
        @property { string } [value]
        
        @property { number } [quantity]
        
        @property { boolean } [isAvailable]
        
        @property { string } [display]
        
         
    */

/**
        @typedef LimitedProductData
        
        
        @property { string } [name]
        
        @property { Object } [price]
        
        @property { string } [slug]
        
        @property { Object } [identifier]
        
        @property { Array<string> } [sizes]
        
        @property { Object } [attributes]
        
        @property { string } [itemCode]
        
        @property { number } [uid]
        
        @property { string } [shortDescription]
        
        @property { number } [quantity]
        
        @property { Array<string> } [images]
        
        @property { string } [countryOfOrigin]
        
         
    */

/**
        @typedef GetProducts
        
        
        @property { Price } [price]
        
        @property { number } [minQuantity]
        
        @property { boolean } [autoAddToCart]
        
        @property { number } [productUid]
        
        @property { Array<Size> } [sizes]
        
        @property { boolean } [autoSelect]
        
        @property { boolean } [allowRemove]
        
        @property { LimitedProductData } [productDetails]
        
        @property { number } [maxQuantity]
        
         
    */

/**
        @typedef GetProductBundleResponse
        
        
        @property { string } [name]
        
        @property { number } [companyId]
        
        @property { string } [slug]
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } [isActive]
        
        @property { string } [choice]
        
        @property { string } [logo]
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { Array<GetProducts> } [products]
        
         
    */

/**
        @typedef Meta
        
        
        @property { string } [unit]
        
        @property { Object } [headers]
        
        @property { Array<Object> } [values]
        
         
    */

/**
        @typedef Guide
        
        
        @property { Meta } [meta]
        
         
    */

/**
        @typedef ValidateSizeGuide
        
        
        @property { string } name
        
        @property { string } [subtitle]
        
        @property { string } [description]
        
        @property { number } [companyId]
        
        @property { string } [id]
        
        @property { Object } [createdBy]
        
        @property { string } [createdOn]
        
        @property { string } title
        
        @property { number } [brandId]
        
        @property { string } [tag]
        
        @property { Object } [modifiedBy]
        
        @property { string } [image]
        
        @property { boolean } [active]
        
        @property { string } [modifiedOn]
        
        @property { Guide } [guide]
        
         
    */

/**
        @typedef SuccessResponse
        
        
        @property { boolean } [success]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef ListSizeGuide
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */

/**
        @typedef SizeGuideResponse
        
        
        @property { string } [name]
        
        @property { number } [companyId]
        
        @property { string } [subtitle]
        
        @property { string } [id]
        
        @property { Object } [createdBy]
        
        @property { string } [createdOn]
        
        @property { number } [brandId]
        
        @property { string } [title]
        
        @property { string } [tag]
        
        @property { Object } [modifiedBy]
        
        @property { boolean } [active]
        
        @property { string } [modifiedOn]
        
        @property { Object } [guide]
        
         
    */

/**
        @typedef GetCatalogConfigurationDetailsProduct
        
        
        @property { Object } [similar]
        
        @property { Object } [detail]
        
        @property { Object } [variant]
        
        @property { Object } [compare]
        
         
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
        
        
        @property { number } min
        
        @property { number } max
        
         
    */

/**
        @typedef ConfigurationProductConfig
        
        
        @property { string } [subtitle]
        
        @property { boolean } isActive
        
        @property { number } priority
        
        @property { string } key
        
        @property { string } [title]
        
        @property { string } [logo]
        
        @property { ProductSize } [size]
        
         
    */

/**
        @typedef ConfigurationProductSimilar
        
        
        @property { Array<ConfigurationProductConfig> } [config]
        
         
    */

/**
        @typedef ConfigurationProductVariantConfig
        
        
        @property { string } name
        
        @property { boolean } isActive
        
        @property { number } priority
        
        @property { string } key
        
        @property { string } displayType
        
        @property { string } [logo]
        
        @property { ProductSize } size
        
         
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
        
        
        @property { string } [name]
        
        @property { boolean } isActive
        
        @property { number } priority
        
        @property { string } key
        
        @property { string } [logo]
        
         
    */

/**
        @typedef ConfigurationListingSort
        
        
        @property { Array<ConfigurationListingSortConfig> } [config]
        
        @property { string } defaultKey
        
         
    */

/**
        @typedef ConfigurationBucketPoints
        
        
        @property { number } [end]
        
        @property { number } [start]
        
         
    */

/**
        @typedef ConfigurationListingFilterValue
        
        
        @property { Object } [map]
        
        @property { string } [value]
        
        @property { Array<ConfigurationBucketPoints> } [bucketPoints]
        
        @property { string } [condition]
        
        @property { string } [sort]
        
         
    */

/**
        @typedef ConfigurationListingFilterConfig
        
        
        @property { string } [name]
        
        @property { string } type
        
        @property { boolean } isActive
        
        @property { number } priority
        
        @property { string } key
        
        @property { string } [logo]
        
        @property { ConfigurationListingFilterValue } [valueConfig]
        
         
    */

/**
        @typedef ConfigurationListingFilter
        
        
        @property { Array<ConfigurationListingFilterConfig> } [attributeConfig]
        
        @property { boolean } allowSingle
        
         
    */

/**
        @typedef ConfigurationListing
        
        
        @property { ConfigurationListingSort } sort
        
        @property { ConfigurationListingFilter } filter
        
         
    */

/**
        @typedef AppConfiguration
        
        
        @property { ConfigurationProduct } [product]
        
        @property { ConfigurationListing } [listing]
        
        @property { string } [configId]
        
        @property { string } configType
        
        @property { string } appId
        
         
    */

/**
        @typedef AppCatalogConfiguration
        
        
        @property { string } [id]
        
        @property { ConfigurationProduct } [product]
        
        @property { ConfigurationListing } [listing]
        
        @property { string } [configId]
        
        @property { string } configType
        
        @property { string } appId
        
         
    */

/**
        @typedef GetAppCatalogConfiguration
        
        
        @property { AppCatalogConfiguration } [data]
        
        @property { boolean } [isDefault]
        
         
    */

/**
        @typedef GetCatalogConfigurationDetailsSchemaListing
        
        
        @property { Object } [sort]
        
        @property { Object } [filter]
        
         
    */

/**
        @typedef EntityConfiguration
        
        
        @property { string } [id]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { GetCatalogConfigurationDetailsSchemaListing } [listing]
        
        @property { string } [configId]
        
        @property { string } configType
        
        @property { string } appId
        
         
    */

/**
        @typedef GetAppCatalogEntityConfiguration
        
        
        @property { EntityConfiguration } [data]
        
        @property { boolean } [isDefault]
        
         
    */

/**
        @typedef ProductFiltersValue
        
        
        @property { boolean } isSelected
        
        @property { string } [displayFormat]
        
        @property { number } [min]
        
        @property { number } [selectedMin]
        
        @property { number } [selectedMax]
        
        @property { number } [count]
        
        @property { string } value
        
        @property { string } [currencyCode]
        
        @property { number } [max]
        
        @property { string } [queryFormat]
        
        @property { string } [currencySymbol]
        
        @property { string } display
        
         
    */

/**
        @typedef ProductFiltersKey
        
        
        @property { string } name
        
        @property { string } [logo]
        
        @property { string } [kind]
        
        @property { string } display
        
         
    */

/**
        @typedef ProductFilters
        
        
        @property { Array<ProductFiltersValue> } values
        
        @property { ProductFiltersKey } key
        
         
    */

/**
        @typedef ProductSortOn
        
        
        @property { string } [name]
        
        @property { string } [value]
        
        @property { boolean } [isSelected]
        
         
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
        @typedef CollectionBanner
        
        
        @property { CollectionImage } portrait
        
        @property { CollectionImage } landscape
        
         
    */

/**
        @typedef UserInfo
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [uid]
        
        @property { string } [email]
        
         
    */

/**
        @typedef SeoDetail
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */

/**
        @typedef CollectionBadge
        
        
        @property { string } [color]
        
        @property { string } [text]
        
         
    */

/**
        @typedef Schedule
        
        
        @property { number } [duration]
        
        @property { string } [cron]
        
        @property { string } [end]
        
        @property { string } [start]
        
         
    */

/**
        @typedef CreateCollection
        
        
        @property { string } slug
        
        @property { Object } [query]
        
        @property { boolean } [allowFacets]
        
        @property { CollectionBanner } banners
        
        @property { string } [sortOn]
        
        @property { string } type
        
        @property { boolean } [published]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { UserInfo } [modifiedBy]
        
        @property { Object } [meta]
        
        @property { SeoDetail } [seo]
        
        @property { Array<string> } [tags]
        
        @property { string } name
        
        @property { string } [description]
        
        @property { CollectionBadge } [badge]
        
        @property { boolean } [allowSort]
        
        @property { Schedule } [schedule]
        
        @property { CollectionImage } logo
        
        @property { Object } [customJson]
        
        @property { boolean } [isActive]
        
        @property { Object } [localeLanguage]
        
        @property { UserInfo } [createdBy]
        
        @property { string } appId
        
         
    */

/**
        @typedef BannerImage
        
        
        @property { string } [url]
        
        @property { string } [aspectRatio]
        
         
    */

/**
        @typedef ImageUrls
        
        
        @property { BannerImage } [portrait]
        
        @property { BannerImage } [landscape]
        
         
    */

/**
        @typedef CollectionCreateResponse
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [slug]
        
        @property { string } [type]
        
        @property { Object } [badge]
        
        @property { boolean } [isActive]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [query]
        
        @property { boolean } [allowSort]
        
        @property { boolean } [allowFacets]
        
        @property { ImageUrls } [banners]
        
        @property { Array<string> } [tag]
        
        @property { Object } [schedule]
        
        @property { BannerImage } [logo]
        
        @property { Object } [meta]
        
        @property { Object } [cron]
        
        @property { string } [appId]
        
         
    */

/**
        @typedef Media1
        
        
        @property { string } url
        
        @property { Object } [meta]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ProductListingActionPage
        
        
        @property { Object } [query]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ProductListingAction
        
        
        @property { string } [type]
        
        @property { ProductListingActionPage } [page]
        
         
    */

/**
        @typedef GetCollectionDetailNest
        
        
        @property { string } [slug]
        
        @property { Object } [query]
        
        @property { boolean } [allowFacets]
        
        @property { string } [uid]
        
        @property { ImageUrls } [banners]
        
        @property { Array<string> } [tag]
        
        @property { Object } [cron]
        
        @property { string } [type]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [meta]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { Object } [badge]
        
        @property { boolean } [allowSort]
        
        @property { Object } [schedule]
        
        @property { Media1 } [logo]
        
        @property { boolean } [isActive]
        
        @property { ProductListingAction } [action]
        
        @property { string } [appId]
        
         
    */

/**
        @typedef CollectionListingFilterType
        
        
        @property { string } [name]
        
        @property { boolean } [isSelected]
        
        @property { string } [display]
        
         
    */

/**
        @typedef CollectionListingFilterTag
        
        
        @property { string } [name]
        
        @property { boolean } [isSelected]
        
        @property { string } [display]
        
         
    */

/**
        @typedef CollectionListingFilter
        
        
        @property { Array<CollectionListingFilterType> } [type]
        
        @property { Array<CollectionListingFilterTag> } [tags]
        
         
    */

/**
        @typedef GetCollectionListingResponse
        
        
        @property { Array<GetCollectionDetailNest> } [items]
        
        @property { CollectionListingFilter } [filters]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef CollectionDetailResponse
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [slug]
        
        @property { string } [type]
        
        @property { Object } [badge]
        
        @property { boolean } [isActive]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [query]
        
        @property { boolean } [allowSort]
        
        @property { boolean } [allowFacets]
        
        @property { ImageUrls } [banners]
        
        @property { Array<string> } [tag]
        
        @property { Object } [schedule]
        
        @property { Media1 } [logo]
        
        @property { Object } [meta]
        
        @property { Object } [cron]
        
        @property { string } [appId]
        
         
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
        
        
        @property { number } [min]
        
        @property { string } [currencySymbol]
        
        @property { string } [currencyCode]
        
        @property { number } [max]
        
         
    */

/**
        @typedef ProductListingPrice
        
        
        @property { Price1 } [marked]
        
        @property { Price1 } [effective]
        
         
    */

/**
        @typedef ProductListingDetail
        
        
        @property { boolean } [hasVariant]
        
        @property { string } slug
        
        @property { Object } [teaserTag]
        
        @property { string } [itemType]
        
        @property { string } [productOnlineDate]
        
        @property { string } [imageNature]
        
        @property { number } [uid]
        
        @property { boolean } [sellable]
        
        @property { string } [type]
        
        @property { ProductListingPrice } [price]
        
        @property { Object } [promoMeta]
        
        @property { Array<Media1> } [medias]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { Object } [attributes]
        
        @property { string } [shortDescription]
        
        @property { number } [ratingCount]
        
        @property { Array<string> } [highlights]
        
        @property { Array<string> } [tryouts]
        
        @property { string } [color]
        
        @property { string } [discount]
        
        @property { number } [rating]
        
        @property { Array<string> } [similars]
        
         
    */

/**
        @typedef GetCollectionItemsResponse
        
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sortOn]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef CatalogInsightBrand
        
        
        @property { string } [name]
        
        @property { number } [availableSizes]
        
        @property { number } [availableArticles]
        
        @property { number } [totalSizes]
        
        @property { number } [totalArticles]
        
        @property { number } [articleFreshness]
        
         
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
        
        
        @property { number } [articles]
        
        @property { number } [products]
        
         
    */

/**
        @typedef CrossSellingResponse
        
        
        @property { CatalogInsightBrand } [brandDistribution]
        
        @property { CrossSellingData } [data]
        
         
    */

/**
        @typedef OptInPostRequest
        
        
        @property { Array<number> } [storeIds]
        
        @property { boolean } [enabled]
        
        @property { Array<number> } [brandIds]
        
        @property { string } optLevel
        
         
    */

/**
        @typedef CompanyOptIn
        
        
        @property { number } companyId
        
        @property { Array<number> } storeIds
        
        @property { string } optLevel
        
        @property { Object } [createdBy]
        
        @property { number } createdOn
        
        @property { string } platform
        
        @property { Object } [modifiedBy]
        
        @property { number } modifiedOn
        
        @property { Array<number> } brandIds
        
        @property { boolean } enabled
        
         
    */

/**
        @typedef GetOptInPlatform
        
        
        @property { Array<CompanyOptIn> } items
        
        @property { Page } page
        
         
    */

/**
        @typedef OptinCompanyDetail
        
        
        @property { string } [name]
        
        @property { string } [businessType]
        
        @property { number } [uid]
        
        @property { string } [companyType]
        
         
    */

/**
        @typedef CompanyBrandDetail
        
        
        @property { number } [companyId]
        
        @property { number } [totalArticle]
        
        @property { string } [brandName]
        
        @property { number } [brandId]
        
         
    */

/**
        @typedef OptinCompanyBrandDetailsView
        
        
        @property { Array<CompanyBrandDetail> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef OptinCompanyMetrics
        
        
        @property { number } [brand]
        
        @property { string } [company]
        
        @property { number } [store]
        
         
    */

/**
        @typedef StoreDetail
        
        
        @property { string } [name]
        
        @property { number } [companyId]
        
        @property { Array<Object> } [additionalContacts]
        
        @property { Array<Object> } [documents]
        
        @property { string } [storeCode]
        
        @property { string } [createdOn]
        
        @property { number } [uid]
        
        @property { string } [storeType]
        
        @property { string } [displayName]
        
        @property { Object } [timing]
        
        @property { string } [modifiedOn]
        
         
    */

/**
        @typedef OptinStoreDetails
        
        
        @property { Array<StoreDetail> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ProdcutTemplateCategoriesResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef PTErrorResponse
        
        
        @property { Object } [errors]
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { string } [code]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef UserSerializer
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [contact]
        
         
    */

/**
        @typedef GetDepartment
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { string } [itemType]
        
        @property { boolean } [isActive]
        
        @property { number } [priorityOrder]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [createdOn]
        
        @property { number } [uid]
        
        @property { Array<string> } [synonyms]
        
        @property { number } [pageNo]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [logo]
        
        @property { string } [modifiedOn]
        
        @property { string } [search]
        
        @property { number } [pageSize]
        
         
    */

/**
        @typedef DepartmentsResponse
        
        
        @property { Array<GetDepartment> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef DepartmentErrorResponse
        
        
        @property { Object } [errors]
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { string } [code]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef ProductTemplate
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } slug
        
        @property { Array<string> } [categories]
        
        @property { boolean } [isActive]
        
        @property { Array<string> } [departments]
        
        @property { Object } [createdBy]
        
        @property { string } [createdOn]
        
        @property { Array<string> } [attributes]
        
        @property { boolean } isPhysical
        
        @property { string } [modifiedOn]
        
        @property { string } [tag]
        
        @property { Object } [modifiedBy]
        
        @property { string } [logo]
        
        @property { boolean } [isArchived]
        
         
    */

/**
        @typedef TemplatesResponse
        
        
        @property { ProductTemplate } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef MultipleCommon
        
        
        @property { string } [uid]
        
         
    */

/**
        @typedef TemplatesValidationResponse
        
        
        @property { MultipleCommon } [data]
        
         
    */

/**
        @typedef InventoryValidationResponse
        
        
        @property { MultipleCommon } [data]
        
        @property { string } [message]
        
         
    */

/**
        @typedef HSNData
        
        
        @property { Array<string> } [hsnCode]
        
        @property { Array<string> } [countryOfOrigin]
        
         
    */

/**
        @typedef HSNCodesResponse
        
        
        @property { HSNData } [data]
        
        @property { string } [message]
        
         
    */

/**
        @typedef ProductConfligurationDownloads
        
        
        @property { boolean } [multivalue]
        
        @property { Array<MultipleCommon> } [data]
        
         
    */

/**
        @typedef Hierarchy
        
        
        @property { number } department
        
        @property { number } l1
        
        @property { number } l2
        
         
    */

/**
        @typedef Media2
        
        
        @property { string } portrait
        
        @property { string } landscape
        
        @property { string } logo
        
         
    */

/**
        @typedef CategoryMappingValues
        
        
        @property { string } name
        
        @property { number } [catalogId]
        
         
    */

/**
        @typedef CategoryMapping
        
        
        @property { CategoryMappingValues } [google]
        
        @property { CategoryMappingValues } [facebook]
        
        @property { CategoryMappingValues } [ajio]
        
         
    */

/**
        @typedef CategoryRequestBody
        
        
        @property { string } name
        
        @property { string } [slug]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { boolean } isActive
        
        @property { Array<number> } departments
        
        @property { Media2 } [media]
        
        @property { Array<string> } [synonyms]
        
        @property { number } [priority]
        
        @property { number } level
        
        @property { CategoryMapping } [marketplaces]
        
        @property { Array<string> } [tryouts]
        
         
    */

/**
        @typedef CategoryCreateResponse
        
        
        @property { string } [message]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef Category
        
        
        @property { string } name
        
        @property { string } [slug]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { boolean } isActive
        
        @property { Array<number> } departments
        
        @property { Media2 } [media]
        
        @property { Object } [createdBy]
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
        @property { number } [uid]
        
        @property { Array<string> } [synonyms]
        
        @property { number } [priority]
        
        @property { Object } [modifiedBy]
        
        @property { number } level
        
        @property { CategoryMapping } [marketplaces]
        
        @property { Array<string> } [tryouts]
        
        @property { string } [id]
        
         
    */

/**
        @typedef CategoryResponse
        
        
        @property { Array<Category> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef CategoryUpdateResponse
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef TeaserTag
        
        
        @property { string } [url]
        
        @property { string } [tag]
        
         
    */

/**
        @typedef CustomOrder
        
        
        @property { string } [manufacturingTimeUnit]
        
        @property { boolean } [isCustomOrder]
        
        @property { number } [manufacturingTime]
        
         
    */

/**
        @typedef Trader
        
        
        @property { string } name
        
        @property { string } address
        
         
    */

/**
        @typedef ProductPublish
        
        
        @property { boolean } [isSet]
        
        @property { string } [productOnlineDate]
        
         
    */

/**
        @typedef OrderQuantity
        
        
        @property { boolean } [isSet]
        
        @property { number } [maximum]
        
        @property { number } [minimum]
        
         
    */

/**
        @typedef ReturnConfig
        
        
        @property { number } [time]
        
        @property { string } [unit]
        
        @property { boolean } [returnable]
        
         
    */

/**
        @typedef ProductCreateUpdate
        
        
        @property { TeaserTag } [teaserTag]
        
        @property { string } slug
        
        @property { string } itemType
        
        @property { number } [uid]
        
        @property { string } [sizeGuide]
        
        @property { string } templateTag
        
        @property { boolean } [isImageLessProduct]
        
        @property { number } [noOfBoxes]
        
        @property { string } categorySlug
        
        @property { CustomOrder } [customOrder]
        
        @property { Array<number> } departments
        
        @property { string } itemCode
        
        @property { string } hsnCode
        
        @property { Array<string> } [productGroupTag]
        
        @property { string } [changeRequestId]
        
        @property { Array<string> } [tags]
        
        @property { string } name
        
        @property { string } [description]
        
        @property { Object } [variants]
        
        @property { string } currency
        
        @property { Trader } [trader]
        
        @property { Array<Media1> } [media]
        
        @property { string } [requester]
        
        @property { string } [shortDescription]
        
        @property { boolean } [isSet]
        
        @property { Array<string> } [highlights]
        
        @property { ProductPublish } [productPublish]
        
        @property { Object } [customJson]
        
        @property { boolean } [isDependent]
        
        @property { string } countryOfOrigin
        
        @property { OrderQuantity } [moq]
        
        @property { number } companyId
        
        @property { boolean } [isActive]
        
        @property { number } brandUid
        
        @property { boolean } [multiSize]
        
        @property { string } [traderType]
        
        @property { ReturnConfig } [returnConfig]
        
         
    */

/**
        @typedef Logo
        
        
        @property { string } [url]
        
        @property { number } [aspectRatioF]
        
        @property { string } [secureUrl]
        
        @property { string } [aspectRatio]
        
         
    */

/**
        @typedef Brand
        
        
        @property { string } [name]
        
        @property { Logo } [logo]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef UserCommon
        
        
        @property { number } [companyId]
        
        @property { string } [username]
        
        @property { string } [userId]
        
         
    */

/**
        @typedef VerifiedBy
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
         
    */

/**
        @typedef Attributes
        
        
        @property { string } [pattern]
        
        @property { string } [productFit]
        
        @property { string } [imageNature]
        
        @property { Array<string> } [l3Mapping]
        
        @property { boolean } [isImageLessProduct]
        
        @property { Array<string> } [gender]
        
        @property { string } [essential]
        
        @property { string } [verifiedOn]
        
        @property { string } [createdOn]
        
        @property { UserCommon } [modifiedBy]
        
        @property { string } [modifiedOn]
        
        @property { string } [primaryColor]
        
        @property { string } [material]
        
        @property { VerifiedBy } [verifiedBy]
        
        @property { string } [color]
        
        @property { string } [primaryMaterial]
        
        @property { UserCommon } [createdBy]
        
        @property { string } [sleeveLength]
        
        @property { string } [metaNature]
        
        @property { string } [stage]
        
        @property { string } [neckType]
        
         
    */

/**
        @typedef ProductPublished
        
        
        @property { boolean } [isSet]
        
        @property { number } [productOnlineDate]
        
         
    */

/**
        @typedef Product
        
        
        @property { string } [slug]
        
        @property { string } [itemType]
        
        @property { number } [uid]
        
        @property { string } [sizeGuide]
        
        @property { string } [templateTag]
        
        @property { Array<string> } [images]
        
        @property { string } [categorySlug]
        
        @property { Array<number> } [departments]
        
        @property { Array<Object> } [sizes]
        
        @property { string } [itemCode]
        
        @property { string } [hsnCode]
        
        @property { Brand } [brand]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [currency]
        
        @property { Array<string> } [media]
        
        @property { Attributes } [attributes]
        
        @property { string } [highlights]
        
        @property { boolean } [isSet]
        
        @property { ProductPublished } [productPublish]
        
        @property { boolean } [isDependent]
        
        @property { string } [countryOfOrigin]
        
        @property { number } [companyId]
        
        @property { Array<string> } [allSizes]
        
        @property { boolean } [isActive]
        
        @property { boolean } [multiSize]
        
         
    */

/**
        @typedef PageData
        
        
        @property { string } [current]
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
         
    */

/**
        @typedef ProductListingResponse
        
        
        @property { Array<Product> } [items]
        
        @property { PageData } [page]
        
         
    */

/**
        @typedef ValidateProduct
        
        
        @property { boolean } [valid]
        
         
    */

/**
        @typedef UserInfo1
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [uid]
        
        @property { string } [email]
        
         
    */

/**
        @typedef BulkJob
        
        
        @property { number } [failed]
        
        @property { number } companyId
        
        @property { Array<Object> } [failedRecords]
        
        @property { boolean } [isActive]
        
        @property { string } [customTemplateTag]
        
        @property { UserInfo1 } [createdBy]
        
        @property { Array<Object> } [cancelledRecords]
        
        @property { string } createdOn
        
        @property { string } [trackingUrl]
        
        @property { string } [templateTag]
        
        @property { number } total
        
        @property { number } [cancelled]
        
        @property { UserInfo1 } [modifiedBy]
        
        @property { string } [filePath]
        
        @property { string } [stage]
        
        @property { string } [modifiedOn]
        
        @property { number } [succeed]
        
         
    */

/**
        @typedef UserDetail
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [fullName]
        
         
    */

/**
        @typedef ProductBulkRequest
        
        
        @property { number } [companyId]
        
        @property { Array<string> } [failedRecords]
        
        @property { ProductTemplate } [template]
        
        @property { boolean } [isActive]
        
        @property { UserDetail } [createdBy]
        
        @property { number } [succeed]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { string } [createdOn]
        
        @property { string } [templateTag]
        
        @property { number } [total]
        
        @property { string } [filePath]
        
        @property { number } [cancelled]
        
        @property { UserDetail } [modifiedBy]
        
        @property { string } [stage]
        
        @property { string } [modifiedOn]
        
        @property { number } [failed]
        
         
    */

/**
        @typedef ProductBulkRequestList
        
        
        @property { ProductBulkRequest } [items]
        
        @property { PageData } [page]
        
         
    */

/**
        @typedef BulkProductRequest
        
        
        @property { string } templateTag
        
        @property { number } companyId
        
        @property { Array<Object> } data
        
        @property { string } batchId
        
         
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
        
        
        @property { string } url
        
        @property { number } [companyId]
        
        @property { Object } user
        
         
    */

/**
        @typedef Items
        
        
        @property { number } [failed]
        
        @property { number } [companyId]
        
        @property { string } [id]
        
        @property { Array<string> } [failedRecords]
        
        @property { boolean } [isActive]
        
        @property { UserCommon } [createdBy]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { string } [createdOn]
        
        @property { number } [retry]
        
        @property { string } [trackingUrl]
        
        @property { string } [filePath]
        
        @property { number } [total]
        
        @property { UserCommon } [modifiedBy]
        
        @property { number } [cancelled]
        
        @property { string } [stage]
        
        @property { string } [modifiedOn]
        
        @property { number } [succeed]
        
         
    */

/**
        @typedef BulkAssetResponse
        
        
        @property { Array<Items> } [items]
        
        @property { PageData } [page]
        
         
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
        @typedef GTIN
        
        
        @property { string } gtinType
        
        @property { boolean } [primary]
        
        @property { string } gtinValue
        
         
    */

/**
        @typedef InvSize
        
        
        @property { InventorySet } [set]
        
        @property { number } price
        
        @property { number } [itemWidth]
        
        @property { number } [itemWeight]
        
        @property { number } [priceTransfer]
        
        @property { Array<GTIN> } identifiers
        
        @property { string } currency
        
        @property { number } [itemHeight]
        
        @property { number } quantity
        
        @property { string } storeCode
        
        @property { boolean } [isSet]
        
        @property { string } size
        
        @property { number } priceEffective
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { number } [itemLength]
        
         
    */

/**
        @typedef ItemQuery
        
        
        @property { string } [itemCode]
        
        @property { number } [uid]
        
        @property { number } [brandUid]
        
         
    */

/**
        @typedef InventoryRequest
        
        
        @property { number } companyId
        
        @property { Array<InvSize> } sizes
        
        @property { ItemQuery } item
        
         
    */

/**
        @typedef InventoryRequest1
        
        
        @property { number } [pageNo]
        
        @property { number } [total]
        
        @property { string } [size]
        
        @property { string } [search]
        
        @property { number } [pageSize]
        
         
    */

/**
        @typedef CommonResponse
        
        
        @property { string } [success]
        
         
    */

/**
        @typedef BulkRequestGet
        
        
        @property { string } [endDate]
        
        @property { string } [startDate]
        
        @property { number } [pageNo]
        
        @property { string } [templateTag]
        
        @property { number } [total]
        
        @property { string } [stage]
        
        @property { string } [customTemplateTag]
        
        @property { string } [search]
        
        @property { number } [pageSize]
        
         
    */

/**
        @typedef Size1
        
        
        @property { InventorySet } [set]
        
        @property { number } price
        
        @property { number } [itemWidth]
        
        @property { number } [itemWeight]
        
        @property { number } [priceTransfer]
        
        @property { Array<Object> } [identifiers]
        
        @property { string } currency
        
        @property { number } [itemHeight]
        
        @property { number } quantity
        
        @property { string } storeCode
        
        @property { boolean } [isSet]
        
        @property { string } sellerIdentifier
        
        @property { string } [size]
        
        @property { number } priceEffective
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { number } [itemLength]
        
         
    */

/**
        @typedef InventoryBulkRequest
        
        
        @property { number } companyId
        
        @property { Array<Size1> } sizes
        
        @property { string } batchId
        
        @property { Object } [user]
        
         
    */

/**
        @typedef InventoryExportRequest
        
        
        @property { string } [type]
        
        @property { Array<number> } [brand]
        
        @property { Array<number> } [store]
        
         
    */

/**
        @typedef InventoryExportJob
        
        
        @property { string } [url]
        
        @property { number } sellerId
        
        @property { Object } [requestParams]
        
        @property { string } [completedOn]
        
        @property { string } [status]
        
        @property { string } [triggerOn]
        
        @property { string } taskId
        
         
    */

/**
        @typedef FilerList
        
        
        @property { string } [value]
        
        @property { string } [display]
        
         
    */

/**
        @typedef InventoryConfig
        
        
        @property { Array<FilerList> } [data]
        
        @property { boolean } [multivalues]
        
         
    */

/**
        @typedef HsnUpsert
        
        
        @property { number } companyId
        
        @property { boolean } taxOnMrp
        
        @property { boolean } isActive
        
        @property { number } [threshold2]
        
        @property { number } [uid]
        
        @property { string } hsnCode
        
        @property { number } tax1
        
        @property { number } threshold1
        
        @property { string } hs2Code
        
        @property { boolean } [taxOnEsp]
        
        @property { number } [tax2]
        
         
    */

/**
        @typedef HsnCodesObject
        
        
        @property { number } [companyId]
        
        @property { boolean } [taxOnMrp]
        
        @property { boolean } [isActive]
        
        @property { number } [threshold2]
        
        @property { number } [uid]
        
        @property { string } [hsnCode]
        
        @property { number } [tax1]
        
        @property { number } [threshold1]
        
        @property { string } [hs2Code]
        
        @property { boolean } [taxOnEsp]
        
        @property { number } [tax2]
        
         
    */

/**
        @typedef HsnCode
        
        
        @property { HsnCodesObject } [data]
        
         
    */

/**
        @typedef PageResponse
        
        
        @property { string } [current]
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
         
    */

/**
        @typedef HsnCodesListingResponse
        
        
        @property { Array<HsnCodesObject> } [items]
        
        @property { PageResponse } [page]
        
         
    */

/**
        @typedef BulkHsnUpsert
        
        
        @property { Array<HsnUpsert> } data
        
         
    */

/**
        @typedef BulkHsnResponse
        
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef Document
        
        
        @property { boolean } [verified]
        
        @property { string } value
        
        @property { string } type
        
        @property { string } [url]
        
        @property { string } legalName
        
         
    */

/**
        @typedef ReferralInfo
        
        
        @property { string } [referralCode]
        
         
    */

/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
         
    */

/**
        @typedef CompanyAddress
        
        
        @property { string } city
        
        @property { number } longitude
        
        @property { number } latitude
        
        @property { string } [landmark]
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { number } pincode
        
        @property { string } address1
        
        @property { string } state
        
        @property { string } country
        
         
    */

/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { string } name
        
        @property { Document } document
        
        @property { Array<number> } brands
        
        @property { boolean } [franchiseEnabled]
        
        @property { Object } [warnings]
        
        @property { ReferralInfo } [referralInfo]
        
        @property { string } businessType
        
        @property { BusinessCountryInfo } businessCountryInfo
        
        @property { CompanyAddress } address
        
        @property { Array<string> } [notificationEmails]
        
        @property { string } [businessInfo]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
         
    */

/**
        @typedef SellerPhoneNumber
        
        
        @property { number } countryCode
        
        @property { string } number
        
         
    */

/**
        @typedef ContactDetails
        
        
        @property { Array<SellerPhoneNumber> } [phone]
        
        @property { Array<string> } [emails]
        
         
    */

/**
        @typedef GetAddressSerializer
        
        
        @property { string } [city]
        
        @property { number } [longitude]
        
        @property { number } [latitude]
        
        @property { string } [landmark]
        
        @property { string } [address2]
        
        @property { string } [addressType]
        
        @property { number } [pincode]
        
        @property { string } [countryCode]
        
        @property { string } [address1]
        
        @property { string } [state]
        
        @property { string } [country]
        
         
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
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { string } [name]
        
        @property { BusinessCountryInfo1 } [businessCountryInfo]
        
        @property { Array<Document> } [documents]
        
        @property { string } [createdOn]
        
        @property { string } [verifiedOn]
        
        @property { string } [businessInfo]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { string } [stage]
        
        @property { string } [modifiedOn]
        
        @property { ContactDetails } [contactDetails]
        
        @property { Array<string> } [notificationEmails]
        
        @property { boolean } [franchiseEnabled]
        
        @property { string } companyType
        
        @property { number } uid
        
        @property { UserSerializer } [modifiedBy]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { Object } [warnings]
        
        @property { BusinessDetails } [businessDetails]
        
        @property { string } businessType
        
        @property { UserSerializer } [createdBy]
        
         
    */

/**
        @typedef DocumentsObj
        
        
        @property { number } [verified]
        
        @property { number } [pending]
        
         
    */

/**
        @typedef MetricsSerializer
        
        
        @property { DocumentsObj } [storeDocuments]
        
        @property { DocumentsObj } [brand]
        
        @property { DocumentsObj } [companyDocuments]
        
        @property { DocumentsObj } [product]
        
        @property { DocumentsObj } [store]
        
        @property { string } [stage]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef UserSerializer1
        
        
        @property { string } [contact]
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */

/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [landscape]
        
        @property { string } [portrait]
        
         
    */

/**
        @typedef GetBrandResponseSerializer
        
        
        @property { string } [slugKey]
        
        @property { string } name
        
        @property { string } [createdOn]
        
        @property { string } [logo]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { string } [description]
        
        @property { string } [modifiedOn]
        
        @property { Array<string> } [synonyms]
        
        @property { Object } [customJson]
        
        @property { Object } [warnings]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { string } [rejectReason]
        
        @property { Object } [localeLanguage]
        
        @property { string } [verifiedOn]
        
        @property { string } [stage]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { string } name
        
        @property { string } logo
        
        @property { Object } [customJson]
        
        @property { string } [description]
        
        @property { Array<string> } [synonyms]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { string } [brandTier]
        
        @property { number } [companyId]
        
        @property { Object } [localeLanguage]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef GetCompanySerializer
        
        
        @property { string } [name]
        
        @property { string } [createdOn]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [modifiedOn]
        
        @property { string } [companyType]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [businessType]
        
        @property { string } [rejectReason]
        
        @property { string } [verifiedOn]
        
        @property { string } [stage]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef CompanyBrandSerializer
        
        
        @property { string } [createdOn]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { string } [modifiedOn]
        
        @property { GetBrandResponseSerializer } [brand]
        
        @property { Object } [warnings]
        
        @property { GetCompanySerializer } [company]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { string } [rejectReason]
        
        @property { string } [verifiedOn]
        
        @property { string } [stage]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Array<CompanyBrandSerializer> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { number } company
        
        @property { Array<number> } brands
        
        @property { number } [uid]
        
         
    */

/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */

/**
        @typedef LocationDayWiseSerializer
        
        
        @property { LocationTimingSerializer } [closing]
        
        @property { LocationTimingSerializer } [opening]
        
        @property { string } weekday
        
        @property { boolean } open
        
         
    */

/**
        @typedef LocationIntegrationType
        
        
        @property { string } [order]
        
        @property { string } [inventory]
        
         
    */

/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { boolean } [onSameStore]
        
        @property { number } [storeUid]
        
         
    */

/**
        @typedef LocationManagerSerializer
        
        
        @property { string } [email]
        
        @property { string } [name]
        
        @property { SellerPhoneNumber } mobileNo
        
         
    */

/**
        @typedef InvoiceCredSerializer
        
        
        @property { string } [password]
        
        @property { boolean } [enabled]
        
        @property { string } [username]
        
         
    */

/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [eWaybill]
        
        @property { InvoiceCredSerializer } [eInvoice]
        
         
    */

/**
        @typedef GetLocationSerializer
        
        
        @property { string } name
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { GetAddressSerializer } address
        
        @property { Array<Document> } [documents]
        
        @property { string } [createdOn]
        
        @property { string } [verifiedOn]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { LocationIntegrationType } [integrationType]
        
        @property { string } phoneNumber
        
        @property { string } [stage]
        
        @property { string } code
        
        @property { string } [storeType]
        
        @property { Object } [customJson]
        
        @property { string } [modifiedOn]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { Array<SellerPhoneNumber> } [contactNumbers]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { Array<string> } [notificationEmails]
        
        @property { string } displayName
        
        @property { number } [uid]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { Object } [warnings]
        
        @property { GetCompanySerializer } [company]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
         
    */

/**
        @typedef LocationListSerializer
        
        
        @property { Array<GetLocationSerializer> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef GetAddressSerializer1
        
        
        @property { string } [city]
        
        @property { number } [longitude]
        
        @property { number } [latitude]
        
        @property { string } [landmark]
        
        @property { string } [address2]
        
        @property { string } [addressType]
        
        @property { number } [pincode]
        
        @property { string } [countryCode]
        
        @property { string } [address1]
        
        @property { string } [state]
        
        @property { string } [country]
        
         
    */

/**
        @typedef LocationSerializer
        
        
        @property { string } name
        
        @property { LocationManagerSerializer } [manager]
        
        @property { string } code
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { string } [storeType]
        
        @property { Object } [customJson]
        
        @property { Object } [warnings]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { number } company
        
        @property { Array<SellerPhoneNumber> } [contactNumbers]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { GetAddressSerializer1 } address
        
        @property { Array<Document> } [documents]
        
        @property { Array<string> } [notificationEmails]
        
        @property { string } displayName
        
        @property { string } [stage]
        
        @property { number } [uid]
        
         
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
        @typedef CampaignShortLink
        
        
        @property { string } [source]
        
        @property { string } [medium]
        
         
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
        
        @property { CampaignShortLink } [campaign]
        
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
        
        @property { CampaignShortLink } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [socialMediaTags]
        
        @property { number } [count]
        
         
    */

/**
        @typedef ShortLinkList
        
        
        @property { Array<ShortLinkRes> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ErrorRes
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef ApplicationInventory
        
        
        @property { AppInventoryConfig } [inventory]
        
        @property { AuthenticationConfig } [authentication]
        
        @property { ArticleAssignmentConfig } [articleAssignment]
        
        @property { RewardPointsConfig } [rewardPoints]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { AppOrderConfig } [order]
        
        @property { AppLogisticsConfig } [logistics]
        
        @property { string } [business]
        
        @property { boolean } [commsEnabled]
        
        @property { Array<string> } [platforms]
        
        @property { string } [id]
        
        @property { LoyaltyPoints } [loyaltyPoints]
        
        @property { string } [app]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [modifiedBy]
        
         
    */

/**
        @typedef AppInventoryConfig
        
        
        @property { InventoryBrand } [brand]
        
        @property { InventoryStore } [store]
        
        @property { InventoryCategory } [category]
        
        @property { InventoryPrice } [price]
        
        @property { InventoryDiscount } [discount]
        
        @property { boolean } [outOfStock]
        
        @property { boolean } [franchiseEnabled]
        
        @property { Array<any> } [excludeCategory]
        
        @property { Array<string> } [image]
        
        @property { Array<any> } [companyStore]
        
         
    */

/**
        @typedef InventoryBrand
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [brands]
        
         
    */

/**
        @typedef InventoryStore
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [stores]
        
        @property { AppStoreRules } [rules]
        
         
    */

/**
        @typedef AppStoreRules
        
        
        @property { Array<number> } [companies]
        
        @property { Array<any> } [brands]
        
         
    */

/**
        @typedef InventoryCategory
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [categories]
        
         
    */

/**
        @typedef InventoryPrice
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */

/**
        @typedef InventoryDiscount
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */

/**
        @typedef AuthenticationConfig
        
        
        @property { boolean } [required]
        
        @property { string } [provider]
        
         
    */

/**
        @typedef ArticleAssignmentConfig
        
        
        @property { ArticleAssignmentRules } [rules]
        
        @property { boolean } [postOrderReassignment]
        
        @property { Array<any> } [enforcedStores]
        
         
    */

/**
        @typedef ArticleAssignmentRules
        
        
        @property { StorePriority } [storePriority]
        
         
    */

/**
        @typedef StorePriority
        
        
        @property { boolean } [enabled]
        
        @property { Array<any> } [storetypeOrder]
        
         
    */

/**
        @typedef RewardPointsConfig
        
        
        @property { Credit } [credit]
        
        @property { Debit } [debit]
        
         
    */

/**
        @typedef Credit
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef Debit
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [autoApply]
        
        @property { string } [strategyChannel]
        
         
    */

/**
        @typedef AppCartConfig
        
        
        @property { DeliveryCharges } [deliveryCharges]
        
        @property { boolean } [enabled]
        
        @property { number } [maxCartItems]
        
        @property { number } [minCartValue]
        
        @property { boolean } [bulkCoupons]
        
         
    */

/**
        @typedef DeliveryCharges
        
        
        @property { boolean } [enabled]
        
        @property { Charges } [charges]
        
         
    */

/**
        @typedef Charges
        
        
        @property { number } [threshold]
        
        @property { number } [charges]
        
         
    */

/**
        @typedef AppPaymentConfig
        
        
        @property { CallbackUrl } [callbackUrl]
        
        @property { Methods } [methods]
        
        @property { PaymentSelectionLock } [paymentSelectionLock]
        
        @property { string } [modeOfPayment]
        
        @property { string } [source]
        
        @property { boolean } [enabled]
        
        @property { number } [codAmountLimit]
        
        @property { number } [codCharges]
        
         
    */

/**
        @typedef CallbackUrl
        
        
        @property { string } [app]
        
        @property { string } [web]
        
         
    */

/**
        @typedef Methods
        
        
        @property { PaymentModeConfig } [pl]
        
        @property { PaymentModeConfig } [card]
        
        @property { PaymentModeConfig } [nb]
        
        @property { PaymentModeConfig } [wl]
        
        @property { PaymentModeConfig } [ps]
        
        @property { PaymentModeConfig } [upi]
        
        @property { PaymentModeConfig } [qr]
        
        @property { PaymentModeConfig } [cod]
        
        @property { PaymentModeConfig } [pp]
        
        @property { PaymentModeConfig } [jp]
        
        @property { PaymentModeConfig } [pac]
        
        @property { PaymentModeConfig } [fc]
        
        @property { PaymentModeConfig } [jiopp]
        
        @property { PaymentModeConfig } [stripepg]
        
        @property { PaymentModeConfig } [juspaypg]
        
        @property { PaymentModeConfig } [payubizpg]
        
        @property { PaymentModeConfig } [payumoneypg]
        
        @property { PaymentModeConfig } [rupifipg]
        
        @property { PaymentModeConfig } [simpl]
        
         
    */

/**
        @typedef PaymentModeConfig
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef PaymentSelectionLock
        
        
        @property { boolean } [enabled]
        
        @property { string } [defaultOptions]
        
        @property { string } [paymentIdentifier]
        
         
    */

/**
        @typedef AppOrderConfig
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [forceReassignment]
        
         
    */

/**
        @typedef AppLogisticsConfig
        
        
        @property { boolean } [logisticsBySeller]
        
        @property { boolean } [serviceabilityCheck]
        
        @property { boolean } [sameDayDelivery]
        
        @property { boolean } [dpAssignment]
        
         
    */

/**
        @typedef LoyaltyPoints
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [autoApply]
        
         
    */

/**
        @typedef AppInventoryPartialUpdate
        
        
        @property { RewardPointsConfig } [rewardPoints]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { LoyaltyPoints } [loyaltyPoints]
        
        @property { boolean } [commsEnabled]
        
         
    */

/**
        @typedef BrandCompanyInfo
        
        
        @property { string } [companyName]
        
        @property { number } [companyId]
        
         
    */

/**
        @typedef CompanyByBrandsRequest
        
        
        @property { number } brands
        
        @property { string } [searchText]
        
         
    */

/**
        @typedef CompanyByBrandsResponse
        
        
        @property { Array<BrandCompanyInfo> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef StoreByBrandsRequest
        
        
        @property { number } [companyId]
        
        @property { number } brands
        
        @property { string } [searchText]
        
         
    */

/**
        @typedef StoreByBrandsResponse
        
        
        @property { Array<BrandStoreInfo> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef BrandStoreInfo
        
        
        @property { string } [storeName]
        
        @property { number } [storeId]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { OptedStoreAddress } [storeAddress]
        
        @property { OptedCompany } [company]
        
         
    */

/**
        @typedef CompanyBrandInfo
        
        
        @property { string } [name]
        
        @property { number } [value]
        
        @property { string } [brandLogoUrl]
        
        @property { string } [brandBannerUrl]
        
        @property { string } [brandBannerPortraitUrl]
        
         
    */

/**
        @typedef BrandsByCompanyResponse
        
        
        @property { CompanyBrandInfo } [brands]
        
         
    */

/**
        @typedef CreateApplicationRequest
        
        
        @property { App } [app]
        
        @property { AppInventory } [configuration]
        
        @property { AppDomain } [domain]
        
         
    */

/**
        @typedef CreateAppResponse
        
        
        @property { Application } [app]
        
        @property { ApplicationInventory } [configuration]
        
         
    */

/**
        @typedef ApplicationsResponse
        
        
        @property { Array<Application> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef MobileAppConfiguration
        
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [appName]
        
        @property { LandingImage } [landingImage]
        
        @property { SplashImage } [splashImage]
        
        @property { string } [application]
        
        @property { string } [platformType]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
        @property { string } [packageName]
        
         
    */

/**
        @typedef LandingImage
        
        
        @property { string } [aspectRatio]
        
        @property { string } [secureUrl]
        
         
    */

/**
        @typedef SplashImage
        
        
        @property { string } [aspectRatio]
        
        @property { string } [secureUrl]
        
         
    */

/**
        @typedef MobileAppConfigRequest
        
        
        @property { string } [appName]
        
        @property { LandingImage } [landingImage]
        
        @property { SplashImage } [splashImage]
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef BuildVersionHistory
        
        
        @property { BuildVersion } [versions]
        
        @property { string } [latestAvailableVersionName]
        
         
    */

/**
        @typedef BuildVersion
        
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [platformType]
        
        @property { string } [buildStatus]
        
        @property { string } [versionName]
        
        @property { number } [versionCode]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef AppSupportedCurrency
        
        
        @property { string } [id]
        
        @property { Array<string> } [supportedCurrency]
        
        @property { string } [application]
        
        @property { DefaultCurrency } [defaultCurrency]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef DefaultCurrency
        
        
        @property { string } [ref]
        
        @property { string } [code]
        
         
    */

/**
        @typedef CurrencyConfig
        
        
        @property { string } [id]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [decimalDigits]
        
        @property { string } [symbol]
        
         
    */

/**
        @typedef DomainAdd
        
        
        @property { string } [name]
        
         
    */

/**
        @typedef DomainAddRequest
        
        
        @property { DomainAdd } [domain]
        
         
    */

/**
        @typedef DomainsResponse
        
        
        @property { Array<Domain> } [domains]
        
         
    */

/**
        @typedef UpdateDomain
        
        
        @property { string } [id]
        
         
    */

/**
        @typedef UpdateDomainTypeRequest
        
        
        @property { UpdateDomain } [domain]
        
        @property { string } [action]
        
         
    */

/**
        @typedef DomainStatusRequest
        
        
        @property { string } [domainUrl]
        
         
    */

/**
        @typedef DomainStatus
        
        
        @property { string } [display]
        
        @property { boolean } [status]
        
         
    */

/**
        @typedef DomainStatusResponse
        
        
        @property { boolean } [connected]
        
        @property { Array<DomainStatus> } [status]
        
         
    */

/**
        @typedef DomainSuggestionsRequest
        
        
        @property { string } [domainUrl]
        
        @property { boolean } [custom]
        
         
    */

/**
        @typedef DomainSuggestion
        
        
        @property { string } name
        
        @property { boolean } [unsupported]
        
        @property { boolean } isAvailable
        
        @property { number } [price]
        
        @property { string } [currency]
        
         
    */

/**
        @typedef DomainSuggestionsResponse
        
        
        @property { Array<DomainSuggestion> } [domains]
        
         
    */

/**
        @typedef GetIntegrationsOptInsResponse
        
        
        @property { IntegrationOptIn } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef IntegrationOptIn
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [descriptionHtml]
        
        @property { string } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [v]
        
         
    */

/**
        @typedef Validators
        
        
        @property { CompanyValidator } [company]
        
        @property { StoreValidator } [store]
        
        @property { InventoryValidator } [inventory]
        
        @property { OrderValidator } [order]
        
         
    */

/**
        @typedef CompanyValidator
        
        
        @property { JsonSchema } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */

/**
        @typedef JsonSchema
        
        
        @property { string } [display]
        
        @property { string } [key]
        
        @property { string } [type]
        
        @property { string } [tooltip]
        
         
    */

/**
        @typedef StoreValidator
        
        
        @property { Array<JsonSchema> } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */

/**
        @typedef InventoryValidator
        
        
        @property { Array<JsonSchema> } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */

/**
        @typedef OrderValidator
        
        
        @property { Array<JsonSchema> } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */

/**
        @typedef IntegrationMeta
        
        
        @property { boolean } [isPublic]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */

/**
        @typedef Integration
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [descriptionHtml]
        
        @property { Object } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [v]
        
         
    */

/**
        @typedef IntegrationConfigResponse
        
        
        @property { IntegrationLevel } [items]
        
         
    */

/**
        @typedef IntegrationLevel
        
        
        @property { boolean } [opted]
        
        @property { Array<Object> } [permissions]
        
        @property { Array<Object> } [lastPatch]
        
        @property { string } [id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { Array<any> } [meta]
        
        @property { string } [token]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
        @property { Object } [data]
        
         
    */

/**
        @typedef OptedStoreIntegration
        
        
        @property { boolean } [otherOpted]
        
        @property { IntegrationOptIn } [otherIntegration]
        
        @property { OtherEntity } [otherEntity]
        
         
    */

/**
        @typedef OtherEntity
        
        
        @property { boolean } [opted]
        
        @property { Array<string> } [permissions]
        
        @property { LastPatch } [lastPatch]
        
        @property { string } [id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { OtherEntityData } [data]
        
        @property { Array<Object> } [meta]
        
        @property { string } [token]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef LastPatch
        
        
        @property { string } [op]
        
        @property { string } [path]
        
        @property { string } [value]
        
         
    */

/**
        @typedef OtherEntityData
        
        
        @property { string } [articleIdentifier]
        
         
    */

/**
        @typedef App
        
        
        @property { string } [companyId]
        
        @property { string } [channelType]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [name]
        
        @property { string } [desc]
        
         
    */

/**
        @typedef AppInventory
        
        
        @property { InventoryBrandRule } [brand]
        
        @property { InventoryStoreRule } [store]
        
        @property { Array<string> } [image]
        
        @property { boolean } [franchiseEnabled]
        
        @property { boolean } [outOfStock]
        
        @property { InventoryPaymentConfig } [payment]
        
        @property { InventoryArticleAssignment } [articleAssignment]
        
         
    */

/**
        @typedef AppDomain
        
        
        @property { string } [name]
        
         
    */

/**
        @typedef CompaniesResponse
        
        
        @property { AppInventoryCompanies } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AppInventoryCompanies
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [companyType]
        
         
    */

/**
        @typedef StoresResponse
        
        
        @property { AppInventoryStores } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AppInventoryStores
        
        
        @property { string } [id]
        
        @property { string } [modifiedOn]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [displayName]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { number } [companyId]
        
         
    */

/**
        @typedef FilterOrderingStoreRequest
        
        
        @property { boolean } [allStores]
        
        @property { Array<number> } [deployedStores]
        
        @property { string } [q]
        
         
    */

/**
        @typedef DeploymentMeta
        
        
        @property { Array<number> } [deployedStores]
        
        @property { boolean } [allStores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [id]
        
        @property { string } [app]
        
        @property { number } [v]
        
         
    */

/**
        @typedef OrderingStoreConfig
        
        
        @property { DeploymentMeta } [deploymentMeta]
        
         
    */

/**
        @typedef OtherSellerCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef OtherSellerApplication
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [domain]
        
        @property { OtherSellerCompany } [company]
        
        @property { string } [optType]
        
         
    */

/**
        @typedef OtherSellerApplications
        
        
        @property { Array<OtherSellerApplication> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef OptedApplicationResponse
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [domain]
        
        @property { OptedCompany } [company]
        
        @property { OptedInventory } [optedInventory]
        
        @property { OptOutInventory } [optOutInventory]
        
         
    */

/**
        @typedef OptedCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef OptedInventory
        
        
        @property { OptType } [optType]
        
        @property { any } [items]
        
         
    */

/**
        @typedef OptType
        
        
        @property { string } [key]
        
        @property { string } [display]
        
         
    */

/**
        @typedef OptedStore
        
        
        @property { string } [name]
        
        @property { string } [storeCode]
        
        @property { string } [id]
        
        @property { string } [modifiedOn]
        
        @property { number } [uid]
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [displayName]
        
        @property { string } [storeType]
        
        @property { number } [companyId]
        
         
    */

/**
        @typedef OptOutInventory
        
        
        @property { Array<number> } store
        
        @property { Array<number> } company
        
         
    */

/**
        @typedef ProductDetailFeature
        
        
        @property { Array<string> } [similar]
        
        @property { boolean } [sellerSelection]
        
        @property { boolean } [updateProductMeta]
        
        @property { boolean } [requestProduct]
        
         
    */

/**
        @typedef LaunchPage
        
        
        @property { string } [pageType]
        
        @property { string } [params]
        
        @property { string } [query]
        
         
    */

/**
        @typedef LandingPageFeature
        
        
        @property { LaunchPage } [launchPage]
        
        @property { boolean } [continueAsGuest]
        
        @property { string } [loginBtnText]
        
        @property { boolean } [showDomainTextbox]
        
        @property { boolean } [showRegisterBtn]
        
         
    */

/**
        @typedef RegistrationPageFeature
        
        
        @property { boolean } [askStoreAddress]
        
         
    */

/**
        @typedef AppFeature
        
        
        @property { ProductDetailFeature } [productDetail]
        
        @property { LandingPageFeature } [landingPage]
        
        @property { RegistrationPageFeature } [registrationPage]
        
        @property { HomePageFeature } [homePage]
        
        @property { CommonFeature } [common]
        
        @property { CartFeature } [cart]
        
        @property { QrFeature } [qr]
        
        @property { PcrFeature } [pcr]
        
        @property { OrderFeature } [order]
        
        @property { string } [id]
        
        @property { string } [app]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef HomePageFeature
        
        
        @property { boolean } [orderProcessing]
        
         
    */

/**
        @typedef CommonFeature
        
        
        @property { CommunicationOptinDialogFeature } [communicationOptinDialog]
        
        @property { DeploymentStoreSelectionFeature } [deploymentStoreSelection]
        
        @property { ListingPriceFeature } [listingPrice]
        
        @property { ListingPageFeature } [listingPage]
        
        @property { CurrencyFeature } [currency]
        
        @property { RevenueEngineFeature } [revenueEngine]
        
        @property { FeedbackFeature } [feedback]
        
        @property { CompareProductsFeature } [compareProducts]
        
         
    */

/**
        @typedef CommunicationOptinDialogFeature
        
        
        @property { boolean } [visibility]
        
         
    */

/**
        @typedef DeploymentStoreSelectionFeature
        
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ListingPriceFeature
        
        
        @property { string } [value]
        
        @property { string } [sort]
        
         
    */

/**
        @typedef ListingPageFeature
        
        
        @property { string } [sortOn]
        
         
    */

/**
        @typedef CurrencyFeature
        
        
        @property { Array<string> } [value]
        
        @property { string } [type]
        
        @property { string } [defaultCurrency]
        
         
    */

/**
        @typedef RevenueEngineFeature
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef FeedbackFeature
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef CompareProductsFeature
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef CartFeature
        
        
        @property { boolean } [gstInput]
        
        @property { boolean } [staffSelection]
        
        @property { boolean } [placingForCustomer]
        
        @property { boolean } [googleMap]
        
         
    */

/**
        @typedef QrFeature
        
        
        @property { boolean } [application]
        
        @property { boolean } [products]
        
        @property { boolean } [collections]
        
         
    */

/**
        @typedef PcrFeature
        
        
        @property { boolean } [staffSelection]
        
         
    */

/**
        @typedef OrderFeature
        
        
        @property { boolean } [buyAgain]
        
         
    */

/**
        @typedef AppFeatureRequest
        
        
        @property { AppFeature } [feature]
        
         
    */

/**
        @typedef AppFeatureResponse
        
        
        @property { AppFeature } [feature]
        
         
    */

/**
        @typedef Currency
        
        
        @property { string } [id]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [decimalDigits]
        
        @property { string } [symbol]
        
         
    */

/**
        @typedef Domain
        
        
        @property { boolean } [verified]
        
        @property { boolean } [isPrimary]
        
        @property { boolean } [isDefault]
        
        @property { boolean } [isShortlink]
        
        @property { string } [id]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ApplicationWebsite
        
        
        @property { boolean } [enabled]
        
        @property { string } [basepath]
        
         
    */

/**
        @typedef ApplicationCors
        
        
        @property { Array<string> } [domains]
        
         
    */

/**
        @typedef ApplicationAuth
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef ApplicationRedirections
        
        
        @property { string } [from]
        
        @property { string } [redirectTo]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ApplicationMeta
        
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */

/**
        @typedef SecureUrl
        
        
        @property { string } [secureUrl]
        
         
    */

/**
        @typedef Application
        
        
        @property { ApplicationWebsite } [website]
        
        @property { ApplicationCors } [cors]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [description]
        
        @property { string } [channelType]
        
        @property { number } [cacheTtl]
        
        @property { boolean } [isInternal]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [owner]
        
        @property { number } [companyId]
        
        @property { string } [token]
        
        @property { Array<ApplicationRedirections> } [redirections]
        
        @property { Array<ApplicationMeta> } [meta]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
        @property { SecureUrl } [banner]
        
        @property { SecureUrl } [logo]
        
        @property { SecureUrl } [favicon]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [appType]
        
        @property { SecureUrl } [mobileLogo]
        
        @property { Domain } [domain]
        
         
    */

/**
        @typedef NotFound
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef UnhandledError
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef InvalidPayloadRequest
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef SuccessMessageResponse
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef InventoryBrandRule
        
        
        @property { string } [criteria]
        
        @property { Array<number> } [brands]
        
         
    */

/**
        @typedef StoreCriteriaRule
        
        
        @property { Array<number> } [companies]
        
        @property { Array<number> } [brands]
        
         
    */

/**
        @typedef InventoryStoreRule
        
        
        @property { string } [criteria]
        
        @property { Array<StoreCriteriaRule> } [rules]
        
        @property { Array<number> } [stores]
        
         
    */

/**
        @typedef InventoryPaymentConfig
        
        
        @property { string } [modeOfPayment]
        
        @property { string } [source]
        
         
    */

/**
        @typedef StorePriorityRule
        
        
        @property { boolean } [enabled]
        
        @property { Array<string> } [storetypeOrder]
        
         
    */

/**
        @typedef ArticleAssignmentRule
        
        
        @property { StorePriorityRule } [storePriority]
        
         
    */

/**
        @typedef InventoryArticleAssignment
        
        
        @property { boolean } [postOrderReassignment]
        
        @property { Array<number> } [enforcedStores]
        
        @property { ArticleAssignmentRule } [rules]
        
         
    */

/**
        @typedef CompanyAboutAddress
        
        
        @property { number } [pincode]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [state]
        
        @property { string } [country]
        
        @property { string } [addressType]
        
         
    */

/**
        @typedef UserEmail
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [email]
        
         
    */

/**
        @typedef UserPhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { number } [countryCode]
        
        @property { string } [phone]
        
         
    */

/**
        @typedef ApplicationInformation
        
        
        @property { InformationAddress } [address]
        
        @property { InformationSupport } [support]
        
        @property { SocialLinks } [socialLinks]
        
        @property { Links } [links]
        
        @property { string } [copyrightText]
        
        @property { string } [id]
        
        @property { BusinessHighlights } [businessHighlights]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef InformationAddress
        
        
        @property { string } [loc]
        
        @property { Array<string> } [addressLine]
        
        @property { InformationPhone } [phone]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { number } [pincode]
        
         
    */

/**
        @typedef InformationPhone
        
        
        @property { string } [code]
        
        @property { string } [number]
        
         
    */

/**
        @typedef InformationSupport
        
        
        @property { Array<string> } [phone]
        
        @property { Array<string> } [email]
        
        @property { string } [timing]
        
         
    */

/**
        @typedef SocialLinks
        
        
        @property { Facebook } [facebook]
        
        @property { Instagram } [instagram]
        
        @property { Twitter } [twitter]
        
        @property { Pinterest } [pinterest]
        
        @property { GooglePlus } [googlePlus]
        
        @property { Youtube } [youtube]
        
        @property { LinkedIn } [linkedIn]
        
        @property { Vimeo } [vimeo]
        
        @property { BlogLink } [blogLink]
        
         
    */

/**
        @typedef Instagram
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef Twitter
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef Pinterest
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef GooglePlus
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef Youtube
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef LinkedIn
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef Vimeo
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef BlogLink
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef Links
        
        
        @property { string } [title]
        
        @property { string } [link]
        
         
    */

/**
        @typedef BusinessHighlights
        
        
        @property { string } [id]
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [subTitle]
        
         
    */

/**
        @typedef ApplicationDetail
        
        
        @property { string } name
        
        @property { string } description
        
        @property { SecureUrl } logo
        
        @property { SecureUrl } mobileLogo
        
        @property { SecureUrl } favicon
        
        @property { SecureUrl } banner
        
        @property { Domain } [domain]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [id]
        
         
    */

/**
        @typedef CurrenciesResponse
        
        
        @property { Array<Currency> } [items]
        
         
    */

/**
        @typedef StoreLatLong
        
        
        @property { string } [type]
        
        @property { Array<number> } [coordinates]
        
         
    */

/**
        @typedef OptedStoreAddress
        
        
        @property { string } [state]
        
        @property { string } [address1]
        
        @property { StoreLatLong } [latLong]
        
        @property { string } [address2]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
        @property { string } [city]
        
         
    */

/**
        @typedef OrderingStore
        
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [id]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [displayName]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { number } [pincode]
        
        @property { string } [code]
        
         
    */

/**
        @typedef OrderingStores
        
        
        @property { Page } [page]
        
        @property { Array<OrderingStore> } [items]
        
        @property { Array<number> } [deployedStores]
        
        @property { boolean } [allStores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [id]
        
        @property { string } [app]
        
        @property { number } [v]
        
         
    */

/**
        @typedef TokenResponse
        
        
        @property { Tokens } [tokens]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef Tokens
        
        
        @property { Firebase } [firebase]
        
        @property { Moengage } [moengage]
        
        @property { Segment } [segment]
        
        @property { Gtm } [gtm]
        
        @property { Freshchat } [freshchat]
        
        @property { Safetynet } [safetynet]
        
        @property { FyndRewards } [fyndRewards]
        
        @property { Auth } [auth]
        
        @property { GoogleMap } [googleMap]
        
         
    */

/**
        @typedef Firebase
        
        
        @property { Credentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef Credentials
        
        
        @property { Ios } [ios]
        
        @property { Android } [android]
        
        @property { string } [projectId]
        
        @property { string } [gcmSenderId]
        
        @property { string } [applicationId]
        
        @property { string } [apiKey]
        
         
    */

/**
        @typedef Ios
        
        
        @property { string } [applicationId]
        
        @property { string } [apiKey]
        
         
    */

/**
        @typedef Android
        
        
        @property { string } [applicationId]
        
        @property { string } [apiKey]
        
         
    */

/**
        @typedef Moengage
        
        
        @property { MoengageCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef MoengageCredentials
        
        
        @property { string } [appId]
        
         
    */

/**
        @typedef Segment
        
        
        @property { SegmentCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef SegmentCredentials
        
        
        @property { string } [writeKey]
        
         
    */

/**
        @typedef Gtm
        
        
        @property { GtmCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef GtmCredentials
        
        
        @property { string } [apiKey]
        
         
    */

/**
        @typedef Freshchat
        
        
        @property { FreshchatCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef FreshchatCredentials
        
        
        @property { string } [appId]
        
        @property { string } [appKey]
        
        @property { string } [webToken]
        
         
    */

/**
        @typedef Safetynet
        
        
        @property { SafetynetCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef SafetynetCredentials
        
        
        @property { string } [apiKey]
        
         
    */

/**
        @typedef FyndRewards
        
        
        @property { FyndRewardsCredentials } [credentials]
        
         
    */

/**
        @typedef FyndRewardsCredentials
        
        
        @property { string } [publicKey]
        
         
    */

/**
        @typedef Auth
        
        
        @property { Google } [google]
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [accountkit]
        
         
    */

/**
        @typedef GoogleMap
        
        
        @property { GoogleMapCredentials } [credentials]
        
         
    */

/**
        @typedef GoogleMapCredentials
        
        
        @property { string } [apiKey]
        
         
    */

/**
        @typedef Identifier
        
        
        @property { Array<string> } [articleId]
        
        @property { Array<number> } [categoryId]
        
        @property { Array<string> } [userId]
        
        @property { Array<number> } [brandId]
        
        @property { Array<string> } [collectionId]
        
        @property { Array<number> } [companyId]
        
        @property { Array<number> } [storeId]
        
        @property { Array<number> } [itemId]
        
         
    */

/**
        @typedef Ownership
        
        
        @property { string } payableBy
        
        @property { string } payableCategory
        
         
    */

/**
        @typedef PriceRange
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */

/**
        @typedef PostOrder
        
        
        @property { boolean } [returnAllowed]
        
        @property { boolean } [cancellationAllowed]
        
         
    */

/**
        @typedef BulkBundleRestriction
        
        
        @property { boolean } multiStoreAllowed
        
         
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
        @typedef PaymentAllowValue
        
        
        @property { number } [max]
        
         
    */

/**
        @typedef PaymentModes
        
        
        @property { Array<string> } [networks]
        
        @property { PaymentAllowValue } [uses]
        
        @property { Array<string> } [codes]
        
        @property { Array<string> } [types]
        
         
    */

/**
        @typedef PaymentCodes
        
        
        @property { PaymentModes } [nb]
        
        @property { PaymentModes } [qr]
        
        @property { PaymentModes } [card]
        
        @property { PaymentModes } [pl]
        
        @property { PaymentModes } [wl]
        
        @property { PaymentModes } [ps]
        
        @property { PaymentModes } [upi]
        
         
    */

/**
        @typedef Restrictions
        
        
        @property { Array<string> } [platforms]
        
        @property { PriceRange } [priceRange]
        
        @property { PostOrder } [postOrder]
        
        @property { boolean } [couponAllowed]
        
        @property { Array<number> } [orderingStores]
        
        @property { BulkBundleRestriction } [bulkBundle]
        
        @property { UsesRestriction } [uses]
        
        @property { PaymentCodes } [payments]
        
         
    */

/**
        @typedef Validation
        
        
        @property { Array<string> } [appId]
        
        @property { boolean } [anonymous]
        
        @property { string } [userRegisteredAfter]
        
         
    */

/**
        @typedef CouponAction
        
        
        @property { string } [actionDate]
        
        @property { string } [txnMode]
        
         
    */

/**
        @typedef CouponSchedule
        
        
        @property { string } [cron]
        
        @property { Array<Object> } [nextSchedule]
        
        @property { number } [duration]
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef CouponDateMeta
        
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
         
    */

/**
        @typedef Validity
        
        
        @property { number } [priority]
        
         
    */

/**
        @typedef State
        
        
        @property { boolean } [isPublic]
        
        @property { boolean } [isDisplay]
        
        @property { boolean } [isArchived]
        
         
    */

/**
        @typedef Rule
        
        
        @property { number } [key]
        
        @property { number } [min]
        
        @property { number } [value]
        
        @property { number } [discountQty]
        
        @property { number } [max]
        
         
    */

/**
        @typedef DisplayMetaDict
        
        
        @property { string } [subtitle]
        
        @property { string } [title]
        
         
    */

/**
        @typedef DisplayMeta
        
        
        @property { DisplayMetaDict } [auto]
        
        @property { string } [description]
        
        @property { DisplayMetaDict } [remove]
        
        @property { string } [subtitle]
        
        @property { DisplayMetaDict } [apply]
        
        @property { string } [title]
        
         
    */

/**
        @typedef CouponAuthor
        
        
        @property { string } [modifiedBy]
        
        @property { string } [createdBy]
        
         
    */

/**
        @typedef RuleDefinition
        
        
        @property { string } [currencyCode]
        
        @property { Array<string> } [scope]
        
        @property { boolean } [isExact]
        
        @property { string } valueType
        
        @property { string } calculateOn
        
        @property { string } applicableOn
        
        @property { boolean } [autoApply]
        
        @property { string } type
        
         
    */

/**
        @typedef CouponAdd
        
        
        @property { Identifier } identifiers
        
        @property { string } typeSlug
        
        @property { Ownership } ownership
        
        @property { Restrictions } [restrictions]
        
        @property { Array<string> } [tags]
        
        @property { Validation } [validation]
        
        @property { CouponAction } [action]
        
        @property { CouponSchedule } [schedule]
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { Validity } validity
        
        @property { string } code
        
        @property { State } [state]
        
        @property { Array<Rule> } rule
        
        @property { DisplayMeta } displayMeta
        
        @property { CouponAuthor } [author]
        
        @property { RuleDefinition } ruleDefinition
        
         
    */

/**
        @typedef CouponsResponse
        
        
        @property { CouponAdd } [items]
        
        @property { Page } [page]
        
         
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
        
        
        @property { Identifier } identifiers
        
        @property { string } typeSlug
        
        @property { Ownership } ownership
        
        @property { Restrictions } [restrictions]
        
        @property { Array<string> } [tags]
        
        @property { Validation } [validation]
        
        @property { CouponAction } [action]
        
        @property { CouponSchedule } [schedule]
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { Validity } validity
        
        @property { string } code
        
        @property { State } [state]
        
        @property { Array<Rule> } rule
        
        @property { DisplayMeta } displayMeta
        
        @property { CouponAuthor } [author]
        
        @property { RuleDefinition } ruleDefinition
        
         
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
        @typedef InventorySyncConfig
        
        
        @property { boolean } [inventory]
        
        @property { boolean } [price]
        
         
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
        @typedef AppUser
        
        
        @property { string } [id]
        
        @property { boolean } [active]
        
        @property { string } [applicationId]
        
        @property { string } [blockReason]
        
        @property { string } [updatedAt]
        
        @property { string } [updatedBy]
        
        @property { string } [userId]
        
         
    */

/**
        @typedef E
        
        
        @property { Object } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [message]
        
        @property { string } [requestId]
        
        @property { string } [stackTrace]
        
        @property { number } [status]
        
         
    */

/**
        @typedef Giveaway
        
        
        @property { string } [id]
        
        @property { Schedule } [schedule]
        
        @property { boolean } [active]
        
        @property { string } [applicationId]
        
        @property { RewardsAudience } [audience]
        
        @property { Asset } [bannerImage]
        
        @property { string } [createdAt]
        
        @property { string } [description]
        
        @property { RewardsRule } [rule]
        
        @property { string } [title]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef GiveawayResponse
        
        
        @property { Array<Giveaway> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef HistoryPretty
        
        
        @property { string } [id]
        
        @property { string } [applicationId]
        
        @property { boolean } [claimed]
        
        @property { string } [createdAt]
        
        @property { string } [expiresOn]
        
        @property { number } [points]
        
        @property { number } [remainingPoints]
        
        @property { string } [text1]
        
        @property { string } [text2]
        
        @property { string } [text3]
        
        @property { string } [txnName]
        
        @property { string } [updatedAt]
        
        @property { string } [userId]
        
         
    */

/**
        @typedef HistoryRes
        
        
        @property { Array<HistoryPretty> } [items]
        
        @property { Page } [page]
        
        @property { number } [points]
        
         
    */

/**
        @typedef Offer
        
        
        @property { Schedule } [schedule]
        
        @property { boolean } [active]
        
        @property { string } [applicationId]
        
        @property { Asset } [bannerImage]
        
        @property { string } [createdAt]
        
        @property { string } [name]
        
        @property { Object } [rule]
        
        @property { ShareMessages } [share]
        
        @property { string } [subText]
        
        @property { string } [text]
        
        @property { string } [type]
        
        @property { string } [updatedAt]
        
        @property { string } [updatedBy]
        
        @property { string } [url]
        
         
    */

/**
        @typedef Points
        
        
        @property { number } [available]
        
         
    */

/**
        @typedef Referral
        
        
        @property { string } [code]
        
         
    */

/**
        @typedef RewardUser
        
        
        @property { string } [id]
        
        @property { boolean } [active]
        
        @property { string } [createdAt]
        
        @property { Referral } [referral]
        
        @property { number } [uid]
        
        @property { string } [updatedAt]
        
        @property { string } [userBlockReason]
        
        @property { string } [userId]
        
         
    */

/**
        @typedef RewardsAudience
        
        
        @property { string } [headerUserId]
        
        @property { string } [id]
        
         
    */

/**
        @typedef RewardsRule
        
        
        @property { number } [amount]
        
         
    */

/**
        @typedef ShareMessages
        
        
        @property { string } [email]
        
        @property { string } [facebook]
        
        @property { string } [fallback]
        
        @property { string } [message]
        
        @property { string } [messenger]
        
        @property { string } [sms]
        
        @property { string } [text]
        
        @property { string } [twitter]
        
        @property { string } [whatsapp]
        
         
    */

/**
        @typedef UserRes
        
        
        @property { Points } [points]
        
        @property { RewardUser } [user]
        
         
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
        
        @property { string } [traceId]
        
         
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
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
    * @description: Gets the list of company level tickets and/or ticket filters
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
    * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
    * @param {string} [arg.q] - Search through ticket titles and description
    * @param {string} [arg.status] - Filter tickets on status
    * @param {string} [arg.priority] - Filter tickets on priority
    * @param {string} [arg.category] - Filter tickets on category
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getTickets({
    items,
    filters,
    q,
    status,
    priority,
    category,
    pageNo,
    pageSize,
  } = {}) {
    const { error } = LeadValidator.getTickets().validate(
      {
        items,
        filters,
        q,
        status,
        priority,
        category,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["items"] = items;
    queryObj["filters"] = filters;
    queryObj["q"] = q;
    queryObj["status"] = status;
    queryObj["priority"] = priority;
    queryObj["category"] = category;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
    * @description: Gets the list of company level tickets and/or ticket filters
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
    * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
    * @param {string} [arg.q] - Search through ticket titles and description
    * @param {string} [arg.status] - Filter tickets on status
    * @param {string} [arg.priority] - Filter tickets on priority
    * @param {string} [arg.category] - Filter tickets on category
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getTicketsPaginator({
    items,
    filters,
    q,
    status,
    priority,
    category,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getTickets({
        items: items,
        filters: filters,
        q: q,
        status: status,
        priority: priority,
        category: category,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   *
   * @summary: Creates a company level ticket
   * @description: Creates a company level ticket
   * @param {Object} arg - arg object.
   * @param {AddTicketPayload} arg.body
   **/
  createTicket({ body } = {}) {
    const { error } = LeadValidator.createTicket().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Retreives ticket details of a company level ticket with ticket ID
    * @description: Retreives ticket details of a company level ticket
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
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${ticketId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Edits ticket details of a company level ticket
   * @description: Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
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
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${ticketId}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create history for specific company level ticket
   * @description: Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
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
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${ticketId}/history`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Gets history list for specific company level ticket
    * @description: Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
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
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${ticketId}/history`,
      queryObj,
      undefined
    );
  }
}

class Billing {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Get invoices
    * @description: Get invoices.
    * @param {Object} arg - arg object.
    
    **/
  getInvoices({} = {}) {
    const { error } = BillingValidator.getInvoices().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/invoice/list`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get invoice by id
    * @description: Get invoice by id.
    * @param {Object} arg - arg object.
    * @param {string} arg.invoiceId - Invoice id
    
    **/
  getInvoiceById({ invoiceId } = {}) {
    const { error } = BillingValidator.getInvoiceById().validate(
      {
        invoiceId,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/invoice/${invoiceId}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get subscription customer detail
    * @description: Get subscription customer detail.
    * @param {Object} arg - arg object.
    
    **/
  getCustomerDetail({} = {}) {
    const { error } = BillingValidator.getCustomerDetail().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/customer-detail`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Upsert subscription customer detail
   * @description: Upsert subscription customer detail.
   * @param {Object} arg - arg object.
   * @param {SubscriptionCustomerCreate} arg.body
   **/
  upsertCustomerDetail({ body } = {}) {
    const { error } = BillingValidator.upsertCustomerDetail().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/customer-detail`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get current subscription detail
    * @description: If subscription is active then it will return is_enabled true and return subscription object. If subscription is not active then is_enabled false and message.

    * @param {Object} arg - arg object.
    
    **/
  getSubscription({} = {}) {
    const { error } = BillingValidator.getSubscription().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/current`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get subscription subscription limits
    * @description: Get subscription subscription limits.
    * @param {Object} arg - arg object.
    
    **/
  getFeatureLimitConfig({} = {}) {
    const { error } = BillingValidator.getFeatureLimitConfig().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/current-limit`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Activate subscription
   * @description: It will activate subscription plan for customer
   * @param {Object} arg - arg object.
   * @param {SubscriptionActivateReq} arg.body
   **/
  activateSubscriptionPlan({ body } = {}) {
    const { error } = BillingValidator.activateSubscriptionPlan().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/activate`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Cancel subscription
   * @description: It will cancel current active subscription.
   * @param {Object} arg - arg object.
   * @param {CancelSubscriptionReq} arg.body
   **/
  cancelSubscriptionPlan({ body } = {}) {
    const { error } = BillingValidator.cancelSubscriptionPlan().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/cancel`,
      queryObj,
      body
    );
  }
}

class Communication {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Get system notifications
    * @description: Get system notifications
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - 
    * @param {number} [arg.pageSize] - 
    
    **/
  getSystemNotifications({ pageNo, pageSize } = {}) {
    const { error } = CommunicationValidator.getSystemNotifications().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/notification/system-notifications/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get system notifications
    * @description: Get system notifications
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - 
    
    **/
  getSystemNotificationsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getSystemNotifications({
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }
}

class Payment {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Get All Payouts
    * @description: Get All Payouts
    * @param {Object} arg - arg object.
    * @param {string} [arg.uniqueExternalId] - Fetch payouts using unique external id
    
    **/
  getAllPayouts({ uniqueExternalId } = {}) {
    const { error } = PaymentValidator.getAllPayouts().validate(
      {
        uniqueExternalId,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["unique_external_id"] = uniqueExternalId;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Save Payout
   * @description: Save Payout
   * @param {Object} arg - arg object.
   * @param {PayoutRequest} arg.body
   **/
  savePayout({ body } = {}) {
    const { error } = PaymentValidator.savePayout().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Payout
   * @description: Update Payout
   * @param {Object} arg - arg object.
   * @param {string} arg.uniqueTransferNo - Unique transfer id
   * @param {PayoutRequest} arg.body
   **/
  updatePayout({ uniqueTransferNo, body } = {}) {
    const { error } = PaymentValidator.updatePayout().validate(
      {
        uniqueTransferNo,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts/${uniqueTransferNo}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Partial Update Payout
   * @description: Partial Update Payout
   * @param {Object} arg - arg object.
   * @param {string} arg.uniqueTransferNo - Unique transfer id
   * @param {UpdatePayoutRequest} arg.body
   **/
  activateAndDectivatePayout({ uniqueTransferNo, body } = {}) {
    const { error } = PaymentValidator.activateAndDectivatePayout().validate(
      {
        uniqueTransferNo,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts/${uniqueTransferNo}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete Payout
    * @description: Delete Payout
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueTransferNo - Unique transfer id
    
    **/
  deletePayout({ uniqueTransferNo } = {}) {
    const { error } = PaymentValidator.deletePayout().validate(
      {
        uniqueTransferNo,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts/${uniqueTransferNo}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List Subscription Payment Method
    * @description: Get all  Subscription  Payment Method
    * @param {Object} arg - arg object.
    
    **/
  getSubscriptionPaymentMethod({} = {}) {
    const { error } = PaymentValidator.getSubscriptionPaymentMethod().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/subscription/methods`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Delete Subscription Payment Method
    * @description: Uses this api to Delete Subscription Payment Method
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueExternalId - 
    * @param {string} arg.paymentMethodId - 
    
    **/
  deleteSubscriptionPaymentMethod({ uniqueExternalId, paymentMethodId } = {}) {
    const {
      error,
    } = PaymentValidator.deleteSubscriptionPaymentMethod().validate(
      {
        uniqueExternalId,
        paymentMethodId,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["unique_external_id"] = uniqueExternalId;
    queryObj["payment_method_id"] = paymentMethodId;

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/subscription/methods`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List Subscription Config
    * @description: Get all  Subscription Config details
    * @param {Object} arg - arg object.
    
    **/
  getSubscriptionConfig({} = {}) {
    const { error } = PaymentValidator.getSubscriptionConfig().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/subscription/configs`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Save Subscription Setup Intent
   * @description: Uses this api to Save Subscription Setup Intent
   * @param {Object} arg - arg object.
   * @param {SaveSubscriptionSetupIntentRequest} arg.body
   **/
  saveSubscriptionSetupIntent({ body } = {}) {
    const { error } = PaymentValidator.saveSubscriptionSetupIntent().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/subscription/setup/intent`,
      queryObj,
      body
    );
  }
}

class Order {
  constructor(config) {
    this.config = config;
  }

  /**
   *
   * @summary: Update status of Shipment
   * @description: Update Shipment Status
   * @param {Object} arg - arg object.
   * @param {UpdateShipmentStatusBody} arg.body
   **/
  shipmentStatusUpdate({ body } = {}) {
    const { error } = OrderValidator.shipmentStatusUpdate().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/actions/status`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get Activity Status
    * @description: Get Activity Status
    * @param {Object} arg - arg object.
    * @param {string} arg.bagId - Bag Id
    
    **/
  activityStatus({ bagId } = {}) {
    const { error } = OrderValidator.activityStatus().validate(
      {
        bagId,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["bag_id"] = bagId;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/actions/activity/status`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update Store Process-Shipment
   * @description: Update Store Process-Shipment
   * @param {Object} arg - arg object.
   * @param {UpdateProcessShipmenstRequestBody} arg.body
   **/
  storeProcessShipmentUpdate({ body } = {}) {
    const { error } = OrderValidator.storeProcessShipmentUpdate().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/actions/store/process-shipments`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get Orders for company based on Company Id
    * @description: Get Orders
    * @param {Object} arg - arg object.
    * @param {string} [arg.pageNo] - Current page number
    * @param {string} [arg.pageSize] - Page limit
    * @param {string} [arg.fromDate] - From Date
    * @param {string} [arg.toDate] - To Date
    * @param {string} [arg.q] - Keyword for Search
    * @param {string} [arg.stage] - Specefic Order Stage
    * @param {string} [arg.salesChannels] - Selected Sales Channel
    * @param {string} [arg.orderId] - Order Id
    * @param {string} [arg.stores] - Selected Stores
    * @param {string} [arg.status] - Status of order
    * @param {boolean} [arg.shortenUrls] - Shorten URL option
    * @param {string} [arg.filterType] - Filters
    
    **/
  getOrdersByCompanyId({
    pageNo,
    pageSize,
    fromDate,
    toDate,
    q,
    stage,
    salesChannels,
    orderId,
    stores,
    status,
    shortenUrls,
    filterType,
  } = {}) {
    const { error } = OrderValidator.getOrdersByCompanyId().validate(
      {
        pageNo,
        pageSize,
        fromDate,
        toDate,
        q,
        stage,
        salesChannels,
        orderId,
        stores,
        status,
        shortenUrls,
        filterType,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["from_date"] = fromDate;
    queryObj["to_date"] = toDate;
    queryObj["q"] = q;
    queryObj["stage"] = stage;
    queryObj["sales_channels"] = salesChannels;
    queryObj["order_id"] = orderId;
    queryObj["stores"] = stores;
    queryObj["status"] = status;
    queryObj["shorten_urls"] = shortenUrls;
    queryObj["filter_type"] = filterType;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/orders`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get Ping
    * @description: Get Ping
    * @param {Object} arg - arg object.
    
    **/
  getPing({} = {}) {
    const { error } = OrderValidator.getPing().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/ping`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get Voice Callback
    * @description: Voice Callback
    * @param {Object} arg - arg object.
    
    **/
  voiceCallback({} = {}) {
    const { error } = OrderValidator.voiceCallback().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/voice/callback`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get Voice Click to Call
    * @description: Voice Click to Call
    * @param {Object} arg - arg object.
    * @param {string} arg.caller - Caller contact number
    * @param {string} arg.receiver - Receiver contact number
    
    **/
  voiceClickToCall({ caller, receiver } = {}) {
    const { error } = OrderValidator.voiceClickToCall().validate(
      {
        caller,
        receiver,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["caller"] = caller;
    queryObj["receiver"] = receiver;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/voice/click-to-call`,
      queryObj,
      undefined
    );
  }
}

class Catalog {
  constructor(config) {
    this.config = config;
  }

  /**
   *
   * @summary: Create Product Bundle
   * @description: Create Product Bundle. See `ProductBundleRequest` for the request body parameter need to create a product bundle. On successful request, returns in `ProductBundleRequest` with id
   * @param {Object} arg - arg object.
   * @param {ProductBundleRequest} arg.body
   **/
  createProductBundle({ body } = {}) {
    const { error } = CatalogValidator.createProductBundle().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-bundle/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: List all Product Bundles
    * @description: Get all product bundles for a particular company
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - A search string that is searched with product bundle name.
    
    **/
  getProductBundle({ q } = {}) {
    const { error } = CatalogValidator.getProductBundle().validate(
      {
        q,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-bundle/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update a Product Bundle
   * @description: Update a Product Bundle by its id. On successful request, returns the updated product bundle
   * @param {Object} arg - arg object.
   * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
   * @param {ProductBundleUpdateRequest} arg.body
   **/
  updateProductBundle({ id, body } = {}) {
    const { error } = CatalogValidator.updateProductBundle().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-bundle/${id}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get a particular Product Bundle details
    * @description: Get a particular Bundle details by its `id`. If successful, returns a Product bundle resource in the response body specified in `GetProductBundleResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
    
    **/
  getProductBundleDetail({ id } = {}) {
    const { error } = CatalogValidator.getProductBundleDetail().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-bundle/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create a size guide.
   * @description: This API allows to create a size guide associated to a brand.
   * @param {Object} arg - arg object.
   * @param {ValidateSizeGuide} arg.body
   **/
  createSizeGuide({ body } = {}) {
    const { error } = CatalogValidator.createSizeGuide().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/sizeguide`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get list of size guides
    * @description: This API allows to view all the size guides associated to the seller.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.active] - filter size guide on basis of active, in-active
    * @param {string} [arg.q] - Query that is to be searched.
    * @param {string} [arg.tag] - to filter size guide on basis of tag.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    
    **/
  getSizeGuides({ active, q, tag, pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getSizeGuides().validate(
      {
        active,
        q,
        tag,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["active"] = active;
    queryObj["q"] = q;
    queryObj["tag"] = tag;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/sizeguide`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Edit a size guide.
   * @description: This API allows to edit a size guide.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Mongo id of the size guide to be edited
   * @param {ValidateSizeGuide} arg.body
   **/
  updateSizeGuide({ id, body } = {}) {
    const { error } = CatalogValidator.updateSizeGuide().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/sizeguide/${id}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get a single size guide.
    * @description: This API helps to get data associated to a size guide.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Id of the size guide to be viewed.
    
    **/
  getSizeGuide({ id } = {}) {
    const { error } = CatalogValidator.getSizeGuide().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/sizeguide/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Analytics data of catalog and inventory that are being cross-selled.
    * @description: Analytics data of catalog and inventory that are being cross-selled.
    * @param {Object} arg - arg object.
    * @param {string} arg.sellerAppId - Id of the seller application which is serving the invetory/catalog of the company
    
    **/
  getSellerInsights({ sellerAppId } = {}) {
    const { error } = CatalogValidator.getSellerInsights().validate(
      {
        sellerAppId,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/cross-selling/${sellerAppId}/analytics/insights/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create/Update opt-in infomation.
   * @description: Use this API to create/update opt-in information for given platform. If successful, returns data in the response body as specified in `OptInPostResponseSchema`
   * @param {Object} arg - arg object.
   * @param {string} arg.marketplace - The marketplace for which the detail needs to be retrieved.
   * @param {OptInPostRequest} arg.body
   **/
  createMarketplaceOptin({ marketplace, body } = {}) {
    const { error } = CatalogValidator.createMarketplaceOptin().validate(
      {
        marketplace,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/${marketplace}/optin/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get opt-in infomation.
    * @description: Use this API to fetch opt-in information for all the platforms. If successful, returns a logs in the response body as specified in `GetOptInPlatformSchema`
    * @param {Object} arg - arg object.
    
    **/
  getMarketplaceOptinDetail({} = {}) {
    const { error } = CatalogValidator.getMarketplaceOptinDetail().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get the Company details.
    * @description: Get the details of the company associated with the given company_id passed.
    * @param {Object} arg - arg object.
    
    **/
  getCompanyDetail({} = {}) {
    const { error } = CatalogValidator.getCompanyDetail().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/company-details/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get the Company Brand details of Optin.
    * @description: Get the details of the Brands associated with the given company_id passed.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.isActive] - The is_active status for the optin id.
    * @param {boolean} [arg.q] - The search value to filter the list.
    * @param {number} [arg.pageNo] - The number of page for the company id.
    * @param {number} [arg.pageSize] - Number of records that can be seen on the page for the company id.
    * @param {string} [arg.marketplace] - The marketplace platform associated with the company id.
    
    **/
  getCompanyBrandDetail({ isActive, q, pageNo, pageSize, marketplace } = {}) {
    const { error } = CatalogValidator.getCompanyBrandDetail().validate(
      {
        isActive,
        q,
        pageNo,
        pageSize,
        marketplace,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["is_active"] = isActive;
    queryObj["q"] = q;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["marketplace"] = marketplace;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/company-brand-details/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get the Company metrics
    * @description: Get the Company metrics associated with the company ID passed.
    * @param {Object} arg - arg object.
    
    **/
  getCompanyMetrics({} = {}) {
    const { error } = CatalogValidator.getCompanyMetrics().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/company-metrics/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get the Store details.
    * @description: Get the details of the store associated with the company ID passed.
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - The search related the store for the company id.
    * @param {number} [arg.pageNo] - The number of page for the company id.
    * @param {number} [arg.pageSize] - Number of records that can be seen on the page for the company id.
    
    **/
  getStoreDetail({ q, pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getStoreDetail().validate(
      {
        q,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["q"] = q;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/location-details/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List Department specifiec product categories
    * @description: Allows you to list all product categories values for the departments specified
    * @param {Object} arg - arg object.
    * @param {string} arg.departments - A `department` is name of a departments whose category needs to be listed. Can specify multiple departments.
    * @param {string} arg.itemType - An `item_type` is the type of item, it can be `set`, `standard`, `digital`, etc.
    
    **/
  listProductTemplateCategories({ departments, itemType } = {}) {
    const { error } = CatalogValidator.listProductTemplateCategories().validate(
      {
        departments,
        itemType,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["departments"] = departments;
    queryObj["item_type"] = itemType;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/templates/categories/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List all Departments
    * @description: Allows you to list all departments, also can search using name and filter active and incative departments, and item type
    * @param {Object} arg - arg object.
    
    **/
  listDepartmentsData({} = {}) {
    const { error } = CatalogValidator.listDepartmentsData().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/departments/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get specific departments details by passing in unique id of the department
    * @description: Allows you to get department data, by uid
    * @param {Object} arg - arg object.
    * @param {string} arg.uid - A `uid` is a unique identifier of a department.
    
    **/
  getDepartmentData({ uid } = {}) {
    const { error } = CatalogValidator.getDepartmentData().validate(
      {
        uid,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/departments/${uid}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List all Templates
    * @description: Allows you to list all product templates, also can filter by department
    * @param {Object} arg - arg object.
    * @param {string} arg.departments - A `departments` is the name of a particular department.
    
    **/
  listProductTemplate({ departments } = {}) {
    const { error } = CatalogValidator.listProductTemplate().validate(
      {
        departments,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["departments"] = departments;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/templates/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Validate Product Template Schema
    * @description: Allows you to list all product templates validation values for all the fields present in the database
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A `slug` is a unique identifier for a particular template.
    
    **/
  validateProductTemplate({ slug } = {}) {
    const { error } = CatalogValidator.validateProductTemplate().validate(
      {
        slug,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/templates/${slug}/validation/schema/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Download Product Template View
    * @description: Allows you to download product template data
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A `slug` is a unique identifier for a particular template.
    
    **/
  downloadProductTemplateViews({ slug } = {}) {
    const { error } = CatalogValidator.downloadProductTemplateViews().validate(
      {
        slug,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/templates/${slug}/download/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Download Product Template View
    * @description: Allows you to download product template data
    * @param {Object} arg - arg object.
    * @param {string} arg.itemType - An `item_type` defines the type of item.
    
    **/
  downloadProductTemplateView({ itemType } = {}) {
    const { error } = CatalogValidator.downloadProductTemplateView().validate(
      {
        itemType,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["item_type"] = itemType;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/templates/download/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Validate Product Template Schema
    * @description: Allows you to list all product templates validation values for all the fields present in the database
    * @param {Object} arg - arg object.
    * @param {string} arg.itemType - An `item_type` defines the type of item. The default value is standard.
    
    **/
  validateProductTemplateSchema({ itemType } = {}) {
    const { error } = CatalogValidator.validateProductTemplateSchema().validate(
      {
        itemType,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["item_type"] = itemType;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/templates/validation/schema/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List HSN Codes
    * @description: Allows you to list all hsn Codes
    * @param {Object} arg - arg object.
    
    **/
  listHSNCodes({} = {}) {
    const { error } = CatalogValidator.listHSNCodes().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/hsn/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Allows you to list all product templates export list details
    * @description: Can vies details including trigger data, task id , etc.
    * @param {Object} arg - arg object.
    
    **/
  listProductTemplateExportDetails({} = {}) {
    const {
      error,
    } = CatalogValidator.listProductTemplateExportDetails().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/downloads/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Allows you to list all values for Templates, Brands or Type
    * @description: The filter type query parameter defines what type of data to return. The type of query returns the valid values for the same
    * @param {Object} arg - arg object.
    * @param {string} arg.filter - A `filter` is the unique identifier of the type of value required.
    
    **/
  listTemplateBrandTypeValues({ filter } = {}) {
    const { error } = CatalogValidator.listTemplateBrandTypeValues().validate(
      {
        filter,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["filter"] = filter;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/downloads/configuration/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create product categories
   * @description: This API lets user create product categories
   * @param {Object} arg - arg object.
   * @param {CategoryRequestBody} arg.body
   **/
  createCategories({ body } = {}) {
    const { error } = CatalogValidator.createCategories().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/category/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get product categories list
    * @description: This API gets meta associated to product categories.
    * @param {Object} arg - arg object.
    * @param {string} [arg.level] - Get category for multiple levels
    * @param {string} [arg.q] - Get multiple categories filtered by search string
    
    **/
  listCategories({ level, q } = {}) {
    const { error } = CatalogValidator.listCategories().validate(
      {
        level,
        q,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["level"] = level;
    queryObj["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/category/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update product categories
   * @description: Update a product category using this apu
   * @param {Object} arg - arg object.
   * @param {string} arg.uid - Category unique id
   * @param {CategoryRequestBody} arg.body
   **/
  updateCategory({ uid, body } = {}) {
    const { error } = CatalogValidator.updateCategory().validate(
      {
        uid,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/category/${uid}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get product category by uid
    * @description: This API gets meta associated to product categories.
    * @param {Object} arg - arg object.
    * @param {string} arg.uid - Category unique id
    
    **/
  getCategoryData({ uid } = {}) {
    const { error } = CatalogValidator.getCategoryData().validate(
      {
        uid,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/category/${uid}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create a product.
   * @description: This API allows to create product.
   * @param {Object} arg - arg object.
   * @param {ProductCreateUpdate} arg.body
   **/
  createProduct({ body } = {}) {
    const { error } = CatalogValidator.createProduct().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get product list
    * @description: This API gets meta associated to products.
    * @param {Object} arg - arg object.
    * @param {number} [arg.brandIds] - Get multiple products filtered by brand Ids
    * @param {number} [arg.categoryIds] - Get multiple products filtered by category Ids
    * @param {string} [arg.search] - Get multiple products filtered by search string
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    
    **/
  getProducts({ brandIds, categoryIds, search, pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getProducts().validate(
      {
        brandIds,
        categoryIds,
        search,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["brand_ids"] = brandIds;
    queryObj["category_ids"] = categoryIds;
    queryObj["search"] = search;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Delete a product.
    * @description: This API allows to delete product.
    * @param {Object} arg - arg object.
    * @param {number} arg.itemId - Id of the product to be updated.
    
    **/
  deleteProduct({ itemId } = {}) {
    const { error } = CatalogValidator.deleteProduct().validate(
      {
        itemId,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Edit a product.
   * @description: This API allows to edit product.
   * @param {Object} arg - arg object.
   * @param {number} arg.itemId - Id of the product to be updated.
   * @param {ProductCreateUpdate} arg.body
   **/
  editProduct({ itemId, body } = {}) {
    const { error } = CatalogValidator.editProduct().validate(
      {
        itemId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get a single product.
    * @description: This API helps to get data associated to a particular product.
    * @param {Object} arg - arg object.
    * @param {string} [arg.itemCode] - Item code of the product.
    * @param {number} arg.itemId - Item Id of the product.
    * @param {number} [arg.brandUid] - Brand Id of the product.
    * @param {number} [arg.uid] - Id of the product.
    
    **/
  getProduct({ itemId, itemCode, brandUid, uid } = {}) {
    const { error } = CatalogValidator.getProduct().validate(
      {
        itemId,
        itemCode,
        brandUid,
        uid,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["item_code"] = itemCode;
    queryObj["brand_uid"] = brandUid;
    queryObj["uid"] = uid;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Validate product/size data
    * @description: This API validates product data.
    * @param {Object} arg - arg object.
    
    **/
  getProductValidation({} = {}) {
    const { error } = CatalogValidator.getProductValidation().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/validation/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get a single product size.
    * @description: This API helps to get data associated to a particular product size.
    * @param {Object} arg - arg object.
    * @param {string} [arg.itemCode] - Item code of the product size.
    * @param {number} arg.itemId - Item Id of the product size.
    * @param {number} [arg.brandUid] - Brand Id of the product size.
    * @param {number} [arg.uid] - Id of the product size.
    
    **/
  getProductSize({ itemId, itemCode, brandUid, uid } = {}) {
    const { error } = CatalogValidator.getProductSize().validate(
      {
        itemId,
        itemCode,
        brandUid,
        uid,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["item_code"] = itemCode;
    queryObj["brand_uid"] = brandUid;
    queryObj["uid"] = uid;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/sizes/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create a Bulk asset upload Job.
   * @description: This API helps to create a bulk asset upload job.
   * @param {Object} arg - arg object.
   * @param {BulkJob} arg.body
   **/
  updateProductAssetsInBulk({ body } = {}) {
    const { error } = CatalogValidator.updateProductAssetsInBulk().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/bulk`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get a list of all bulk product upload jobs.
    * @description: This API helps to get bulk product upload jobs data.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getProductBulkUploadHistory({ pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getProductBulkUploadHistory().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/bulk`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Delete Bulk product job.
    * @description: This API allows to delete bulk product job associated with company.
    * @param {Object} arg - arg object.
    * @param {number} arg.batchId - Batch Id of the bulk product job to be deleted.
    
    **/
  deleteProductBulkJob({ batchId } = {}) {
    const { error } = CatalogValidator.deleteProductBulkJob().validate(
      {
        batchId,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/bulk/${batchId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create products in bulk associated with given batch Id.
   * @description: This API helps to create products in bulk push to kafka for approval/creation.
   * @param {Object} arg - arg object.
   * @param {string} arg.batchId - Batch Id in which assets to be uploaded.
   * @param {BulkProductRequest} arg.body
   **/
  createProductsInBulk({ batchId, body } = {}) {
    const { error } = CatalogValidator.createProductsInBulk().validate(
      {
        batchId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/bulk/${batchId}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get a list of all tags associated with company.
    * @description: This API helps to get tags data associated to a particular copmpany.
    * @param {Object} arg - arg object.
    
    **/
  getCompanyTags({} = {}) {
    const { error } = CatalogValidator.getCompanyTags().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/tags`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create a Bulk asset upload Job.
   * @description: This API helps to create a bulk asset upload job.
   * @param {Object} arg - arg object.
   * @param {ProductBulkAssets} arg.body
   **/
  createProductAssetsInBulk({ body } = {}) {
    const { error } = CatalogValidator.createProductAssetsInBulk().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/assets/bulk/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get a list of all bulk asset jobs.
    * @description: This API helps to get bulk asset jobs data associated to a particular company.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getProductAssetsInBulk({ pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getProductAssetsInBulk().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/assets/bulk/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Delete a Size associated with product.
    * @description: This API allows to delete size associated with product.
    * @param {Object} arg - arg object.
    * @param {number} arg.itemId - Item Id of the product associated with size to be deleted.
    * @param {number} arg.size - size to be deleted.
    
    **/
  deleteSize({ itemId, size } = {}) {
    const { error } = CatalogValidator.deleteSize().validate(
      {
        itemId,
        size,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/sizes/${size}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add Inventory for particular size and store.
   * @description: This API allows add Inventory for particular size and store.
   * @param {Object} arg - arg object.
   * @param {number} arg.itemId - Item of the company associated to product that is to be viewed.
   * @param {string} arg.size - Size in which inventory is to be added.
   * @param {InventoryRequest} arg.body
   **/
  addInventory({ itemId, size, body } = {}) {
    const { error } = CatalogValidator.addInventory().validate(
      {
        itemId,
        size,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/sizes/${size}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get Inventory for company
    * @description: This API allows get Inventory data for particular company grouped by size and store.
    * @param {Object} arg - arg object.
    * @param {string} arg.itemId - Item code of the product of which size is to be get.
    * @param {string} arg.size - Size of which inventory is to get.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getInventory({ itemId, size, pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getInventory().validate(
      {
        itemId,
        size,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/sizes/${size}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Delete a Inventory.
    * @description: This API allows to delete inventory of a particular product for particular company.
    * @param {Object} arg - arg object.
    * @param {number} arg.itemId - Id of the product associated with Inventory to be deleted.
    * @param {number} arg.locationId - Location ID of store of which inventory is to be deleted.
    
    **/
  deleteInventory({ itemId, locationId } = {}) {
    const { error } = CatalogValidator.deleteInventory().validate(
      {
        itemId,
        locationId,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/sizes/<size>/location/${locationId}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create a Bulk Inventory upload Job.
   * @description: This API helps to create a bulk Inventory upload job.
   * @param {Object} arg - arg object.
   * @param {BulkJob} arg.body
   **/
  createBulkInventoryJob({ body } = {}) {
    const { error } = CatalogValidator.createBulkInventoryJob().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/bulk/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get a list of all bulk Inventory upload jobs.
    * @description: This API helps to get bulk Inventory upload jobs data.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getInventoryBulkUploadHistory({ pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getInventoryBulkUploadHistory().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/bulk/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Delete Bulk Inventory job.
    * @description: This API allows to delete bulk Inventory job associated with company.
    * @param {Object} arg - arg object.
    
    **/
  deleteBulkInventoryJob({} = {}) {
    const { error } = CatalogValidator.deleteBulkInventoryJob().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/bulk/<batch_id>/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create products in bulk associated with given batch Id.
   * @description: This API helps to create products in bulk push to kafka for approval/creation.
   * @param {Object} arg - arg object.
   * @param {InventoryBulkRequest} arg.body
   **/
  createBulkInventory({ body } = {}) {
    const { error } = CatalogValidator.createBulkInventory().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/bulk/<batch_id>/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create a Inventory export Job.
   * @description: This API helps to create a Inventory export job.
   * @param {Object} arg - arg object.
   * @param {InventoryExportRequest} arg.body
   **/
  createInventoryExportJob({ body } = {}) {
    const { error } = CatalogValidator.createInventoryExportJob().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/download/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get Inventory export history.
    * @description: This API helps to get Inventory export history.
    * @param {Object} arg - arg object.
    
    **/
  getInventoryExport({} = {}) {
    const { error } = CatalogValidator.getInventoryExport().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/download/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get List of different filters for inventory export
    * @description: This API allows get List of different filters like brand, store, and type for inventory export.
    * @param {Object} arg - arg object.
    * @param {string} [arg.filterType] - filter type from any one of ['brand', 'store', 'type']
    
    **/
  exportInventoryConfig({ filterType } = {}) {
    const { error } = CatalogValidator.exportInventoryConfig().validate(
      {
        filterType,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["filter_type"] = filterType;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/download/configuration/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create Hsn Code.
   * @description: Create Hsn Code.
   * @param {Object} arg - arg object.
   * @param {HsnUpsert} arg.body
   **/
  createHsnCode({ body } = {}) {
    const { error } = CatalogValidator.createHsnCode().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/hsn/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Hsn Code List.
    * @description: Hsn Code List.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - page no
    * @param {number} [arg.pageSize] - page size
    * @param {string} [arg.q] - search using hsn code.
    
    **/
  getAllHsnCodes({ pageNo, pageSize, q } = {}) {
    const { error } = CatalogValidator.getAllHsnCodes().validate(
      {
        pageNo,
        pageSize,
        q,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/hsn/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update Hsn Code.
   * @description: Update Hsn Code.
   * @param {Object} arg - arg object.
   * @param {number} arg.uid - uid
   * @param {HsnUpsert} arg.body
   **/
  updateHsnCode({ uid, body } = {}) {
    const { error } = CatalogValidator.updateHsnCode().validate(
      {
        uid,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/hsn/${uid}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Fetch Hsn Code.
    * @description: Fetch Hsn Code.
    * @param {Object} arg - arg object.
    * @param {number} arg.uid - uid
    
    **/
  getHsnCode({ uid } = {}) {
    const { error } = CatalogValidator.getHsnCode().validate(
      {
        uid,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/hsn/${uid}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Bulk Create or Update Hsn Code.
   * @description: Bulk Create or Update Hsn Code.
   * @param {Object} arg - arg object.
   * @param {BulkHsnUpsert} arg.body
   **/
  bulkHsnCode({ body } = {}) {
    const { error } = CatalogValidator.bulkHsnCode().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/hsn/bulk/`,
      queryObj,
      body
    );
  }
}

class CompanyProfile {
  constructor(config) {
    this.config = config;
  }

  /**
   *
   * @summary: Edit company profile
   * @description: This API allows to edit the company profile of the seller account.
   * @param {Object} arg - arg object.
   * @param {CompanyStoreSerializerRequest} arg.body
   **/
  updateCompany({ body } = {}) {
    const { error } = CompanyProfileValidator.updateCompany().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get company profile
    * @description: This API allows to view the company profile of the seller account.
    * @param {Object} arg - arg object.
    
    **/
  cbsOnboardGet({} = {}) {
    const { error } = CompanyProfileValidator.cbsOnboardGet().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get company metrics
    * @description: This API allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified.
    * @param {Object} arg - arg object.
    
    **/
  getCompanyMetrics({} = {}) {
    const { error } = CompanyProfileValidator.getCompanyMetrics().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/metrics`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get a single brand.
    * @description: This API helps to get data associated to a particular brand.
    * @param {Object} arg - arg object.
    * @param {string} arg.brandId - Id of the brand to be viewed.
    
    **/
  getBrand({ brandId } = {}) {
    const { error } = CompanyProfileValidator.getBrand().validate(
      {
        brandId,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/brand/${brandId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Edit a brand.
   * @description: This API allows to edit meta of a brand.
   * @param {Object} arg - arg object.
   * @param {string} arg.brandId - Id of the brand to be viewed.
   * @param {CreateUpdateBrandRequestSerializer} arg.body
   **/
  editBrand({ brandId, body } = {}) {
    const { error } = CompanyProfileValidator.editBrand().validate(
      {
        brandId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/brand/${brandId}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create a Brand.
   * @description: This API allows to create a brand associated to a company.
   * @param {Object} arg - arg object.
   * @param {CreateUpdateBrandRequestSerializer} arg.body
   **/
  createBrand({ body } = {}) {
    const { error } = CompanyProfileValidator.createBrand().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/brand`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get brands associated to a company
    * @description: This API helps to get view brands associated to a particular company.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    
    **/
  getBrands({ pageNo, pageSize } = {}) {
    const { error } = CompanyProfileValidator.getBrands().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/company-brand`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get brands associated to a company
    * @description: This API helps to get view brands associated to a particular company.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    
    **/
  getBrandsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getBrands({
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   *
   * @summary: Create a company brand mapping.
   * @description: This API allows to create a company brand mapping, for a already existing brand in the system.
   * @param {Object} arg - arg object.
   * @param {CompanyBrandPostRequestSerializer} arg.body
   **/
  createCompanyBrandMapping({ body } = {}) {
    const {
      error,
    } = CompanyProfileValidator.createCompanyBrandMapping().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/company-brand`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get list of locations
    * @description: This API allows to view all the locations asscoiated to a company.
    * @param {Object} arg - arg object.
    * @param {string} [arg.storeType] - Helps to sort the location list on the basis of location type.
    * @param {string} [arg.q] - Query that is to be searched.
    * @param {string} [arg.stage] - to filter companies on basis of verified or unverified companies.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    
    **/
  getLocations({ storeType, q, stage, pageNo, pageSize } = {}) {
    const { error } = CompanyProfileValidator.getLocations().validate(
      {
        storeType,
        q,
        stage,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["store_type"] = storeType;
    queryObj["q"] = q;
    queryObj["stage"] = stage;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of locations
    * @description: This API allows to view all the locations asscoiated to a company.
    * @param {Object} arg - arg object.
    * @param {string} [arg.storeType] - Helps to sort the location list on the basis of location type.
    * @param {string} [arg.q] - Query that is to be searched.
    * @param {string} [arg.stage] - to filter companies on basis of verified or unverified companies.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    
    **/
  getLocationsPaginator({ storeType, q, stage, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getLocations({
        storeType: storeType,
        q: q,
        stage: stage,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   *
   * @summary: Create a location asscoiated to a company.
   * @description: This API allows to create a location associated to a company.
   * @param {Object} arg - arg object.
   * @param {LocationSerializer} arg.body
   **/
  createLocation({ body } = {}) {
    const { error } = CompanyProfileValidator.createLocation().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get details of a specific location.
    * @description: This API helps to get data associated to a specific location.
    * @param {Object} arg - arg object.
    * @param {string} arg.locationId - Id of the location which you want to view.
    
    **/
  getLocationDetail({ locationId } = {}) {
    const { error } = CompanyProfileValidator.getLocationDetail().validate(
      {
        locationId,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location/${locationId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Edit a location asscoiated to a company.
   * @description: This API allows to edit a location associated to a company.
   * @param {Object} arg - arg object.
   * @param {string} arg.locationId - Id of the location which you want to edit.
   * @param {LocationSerializer} arg.body
   **/
  updateLocation({ locationId, body } = {}) {
    const { error } = CompanyProfileValidator.updateLocation().validate(
      {
        locationId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location/${locationId}`,
      queryObj,
      body
    );
  }
}

class FileStorage {
  constructor(config) {
    this.config = config;
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
Initiates the assets upload using `startUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `completeUpload` api to complete the upload process.
This operation will return the url for the uploaded file.

    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    * @param {StartRequest} arg.body
    **/
  startUpload({ namespace, body } = {}) {
    const { error } = FileStorageValidator.startUpload().validate(
      {
        namespace,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/namespaces/${namespace}/upload/start/`,
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
Initiates the assets upload using `startUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `completeUpload` api to complete the upload process.
This operation will return the url for the uploaded file.

    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    * @param {StartResponse} arg.body
    **/
  completeUpload({ namespace, body } = {}) {
    const { error } = FileStorageValidator.completeUpload().validate(
      {
        namespace,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/namespaces/${namespace}/upload/complete/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Explain here
   * @description: Describe here
   * @param {Object} arg - arg object.
   * @param {SignUrlRequest} arg.body
   **/
  getSignUrls({ body } = {}) {
    const { error } = FileStorageValidator.getSignUrls().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/sign-urls/`,
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
  copyFiles({ body, sync } = {}) {
    const { error } = FileStorageValidator.copyFiles().validate(
      {
        body,
        sync,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["sync"] = sync;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/uploads/copy/`,
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
    * @param {number} [arg.pageNo] - page no
    
    **/
  browse({ namespace, pageNo } = {}) {
    const { error } = FileStorageValidator.browse().validate(
      {
        namespace,
        pageNo,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/namespaces/${namespace}/browse/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Browse Files
    * @description: Browse Files
    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    
    **/
  browsePaginator({ namespace } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.browse({
        namespace: namespace,
        pageNo: pageNo,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Proxy
    * @description: Proxy
    * @param {Object} arg - arg object.
    * @param {string} arg.url - url
    
    **/
  proxy({ url } = {}) {
    const { error } = FileStorageValidator.proxy().validate(
      {
        url,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["url"] = url;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/proxy/`,
      queryObj,
      undefined
    );
  }
}

class Configuration {
  constructor(config) {
    this.config = config;
  }

  /**
   *
   * @summary: Create application
   * @description: Create new application
   * @param {Object} arg - arg object.
   * @param {CreateApplicationRequest} arg.body
   **/
  createApplication({ body } = {}) {
    const { error } = ConfigurationValidator.createApplication().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get list of application under company
    * @description: Get list of application under company
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - 
    * @param {number} [arg.pageSize] - 
    * @param {string} [arg.q] - Url encoded object used as mongodb query
    
    **/
  getApplications({ pageNo, pageSize, q } = {}) {
    const { error } = ConfigurationValidator.getApplications().validate(
      {
        pageNo,
        pageSize,
        q,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of application under company
    * @description: Get list of application under company
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - 
    * @param {string} [arg.q] - Url encoded object used as mongodb query
    
    **/
  getApplicationsPaginator({ pageSize, q } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getApplications({
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Get all currencies
    * @description: Get all currencies
    * @param {Object} arg - arg object.
    
    **/
  getCurrencies({} = {}) {
    const { error } = ConfigurationValidator.getCurrencies().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/currencies`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Check domain availibility before linking to application
   * @description: Check domain availibility before linking to application. Also sends domain suggestions with similar to queried domain. \ Custom domain search is currently powered by GoDaddy provider.
   * @param {Object} arg - arg object.
   * @param {DomainSuggestionsRequest} arg.body
   **/
  getDomainAvailibility({ body } = {}) {
    const { error } = ConfigurationValidator.getDomainAvailibility().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/domain/suggestions`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get integration data
    * @description: Get integration data
    * @param {Object} arg - arg object.
    * @param {number} arg.id - Integration id
    
    **/
  getIntegrationById({ id } = {}) {
    const { error } = ConfigurationValidator.getIntegrationById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get all available integration opt-ins
    * @description: Get all available integration opt-ins
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getAvailableOptIns({ pageNo, pageSize } = {}) {
    const { error } = ConfigurationValidator.getAvailableOptIns().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/available`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get all available integration opt-ins
    * @description: Get all available integration opt-ins
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getAvailableOptInsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAvailableOptIns({
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Get company/store level integration opt-ins
    * @description: Get company/store level integration opt-ins
    * @param {Object} arg - arg object.
    * @param {string} arg.level - Integration level
    * @param {number} arg.uid - Integration level uid
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getSelectedOptIns({ level, uid, pageNo, pageSize } = {}) {
    const { error } = ConfigurationValidator.getSelectedOptIns().validate(
      {
        level,
        uid,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/selected/${level}/${uid}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get company/store level integration opt-ins
    * @description: Get company/store level integration opt-ins
    * @param {Object} arg - arg object.
    * @param {string} arg.level - Integration level
    * @param {number} arg.uid - Integration level uid
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getSelectedOptInsPaginator({ level, uid, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getSelectedOptIns({
        level: level,
        uid: uid,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Get integration level config
    * @description: Get integration level config
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Integration id
    * @param {string} arg.level - Integration level
    
    **/
  getIntegrationLevelConfig({ id, level } = {}) {
    const {
      error,
    } = ConfigurationValidator.getIntegrationLevelConfig().validate(
      {
        id,
        level,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/configuration/${id}/${level}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get level data for integration
    * @description: Get level data for integration
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Integration id
    * @param {string} arg.level - Integration level
    * @param {number} arg.uid - Integration level uid
    
    **/
  getIntegrationByLevelId({ id, level, uid } = {}) {
    const { error } = ConfigurationValidator.getIntegrationByLevelId().validate(
      {
        id,
        level,
        uid,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/configuration/${id}/${level}/${uid}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Check store has active integration
    * @description: API checks if a store is already opted in any other integrations
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Integration id
    * @param {string} arg.level - Integration level
    * @param {number} arg.uid - Integration level uid
    
    **/
  getLevelActiveIntegrations({ id, level, uid } = {}) {
    const {
      error,
    } = ConfigurationValidator.getLevelActiveIntegrations().validate(
      {
        id,
        level,
        uid,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/check/configuration/${id}/${level}/${uid}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get brands by company
    * @description: Get brands by company
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - Search text for brand name
    
    **/
  getBrandsByCompany({ q } = {}) {
    const { error } = ConfigurationValidator.getBrandsByCompany().validate(
      {
        q,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/inventory/brands-by-companies`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Get company by brand uids
   * @description: Get company by brand uids
   * @param {Object} arg - arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {CompanyByBrandsRequest} arg.body
   **/
  getCompanyByBrands({ body, pageNo, pageSize } = {}) {
    const { error } = ConfigurationValidator.getCompanyByBrands().validate(
      {
        body,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/inventory/companies-by-brands`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Get company by brand uids
   * @description: Get company by brand uids
   * @param {Object} arg - arg object.
   * @param {number} [arg.pageSize] - Current request items count
   * @param {CompanyByBrandsRequest} arg.body
   **/
  getCompanyByBrandsPaginator({ pageSize, body } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getCompanyByBrands({
        body: body,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   *
   * @summary: Get stores by brand uids
   * @description: Get stores by brand uids
   * @param {Object} arg - arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {StoreByBrandsRequest} arg.body
   **/
  getStoreByBrands({ body, pageNo, pageSize } = {}) {
    const { error } = ConfigurationValidator.getStoreByBrands().validate(
      {
        body,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/inventory/stores-by-brands`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Get stores by brand uids
   * @description: Get stores by brand uids
   * @param {Object} arg - arg object.
   * @param {number} [arg.pageSize] - Current request items count
   * @param {StoreByBrandsRequest} arg.body
   **/
  getStoreByBrandsPaginator({ pageSize, body } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getStoreByBrands({
        body: body,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Get other seller applications
    * @description: Get other seller applications who has opted current company as inventory
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getOtherSellerApplications({ pageNo, pageSize } = {}) {
    const {
      error,
    } = ConfigurationValidator.getOtherSellerApplications().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/other-seller-applications/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get other seller applications
    * @description: Get other seller applications who has opted current company as inventory
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getOtherSellerApplicationsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getOtherSellerApplications({
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Get other seller applications
    * @description: Get other seller application
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Application Id
    
    **/
  getOtherSellerApplicationById({ id } = {}) {
    const {
      error,
    } = ConfigurationValidator.getOtherSellerApplicationById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/other-seller-applications/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Opt out company or store from other seller application
   * @description: Opt out company or store from other seller application
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Application Id
   * @param {OptOutInventory} arg.body
   **/
  optOutFromApplication({ id, body } = {}) {
    const { error } = ConfigurationValidator.optOutFromApplication().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/other-seller-applications/${id}/opt_out`,
      queryObj,
      body
    );
  }
}

class Marketplaces {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Get available marketplace channels
    * @description: Get available marketplace channels
    * @param {Object} arg - arg object.
    
    **/
  getAvailableChannels({} = {}) {
    const { error } = MarketplacesValidator.getAvailableChannels().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/all-channels`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get all registered marketplace channels for a seller
    * @description: Get all registered marketplace channels for a seller
    * @param {Object} arg - arg object.
    
    **/
  getChannels({} = {}) {
    const { error } = MarketplacesValidator.getChannels().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get registered marketplace channel credential configuration for a seller
    * @description: Get registered marketplace channel credentials configuration for a seller
    * @param {Object} arg - arg object.
    * @param {string} arg.channel - Name of marketplace channel
    
    **/
  getChannel({ channel } = {}) {
    const { error } = MarketplacesValidator.getChannel().validate(
      {
        channel,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${channel}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create Myntra marketplace channel for a seller
   * @description: Create Myntra marketplace channel for a seller
   * @param {Object} arg - arg object.
   * @param {MyntraPayload} arg.body
   **/
  registerMyntraChannel({ body } = {}) {
    const { error } = MarketplacesValidator.registerMyntraChannel().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/myntra_in`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Myntra marketplace channel credentials for a seller
   * @description: Update Myntra marketplace channel credentials for a seller
   * @param {Object} arg - arg object.
   * @param {MyntraPayload} arg.body
   **/
  updateMyntraChannelCredentials({ body } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateMyntraChannelCredentials().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/myntra_in`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create Amazon marketplace channel for a seller
   * @description: Create Amazon marketplace channel for a seller
   * @param {Object} arg - arg object.
   * @param {AmazonPayload} arg.body
   **/
  registerAmazonChannel({ body } = {}) {
    const { error } = MarketplacesValidator.registerAmazonChannel().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/amazon_in`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Amazon marketplace channel credentials for a seller
   * @description: Update Amazon marketplace channel credentials for a seller
   * @param {Object} arg - arg object.
   * @param {AmazonPayload} arg.body
   **/
  updateAmazonChannelCredentials({ body } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateAmazonChannelCredentials().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/amazon_in`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create Flipkart / Flipkart Assured marketplace channel for a seller
   * @description: Create Flipkart / Flipkart Assured marketplace channel for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.flipkartChannel - Name of marketplace channel
   * @param {FlipkartPayload} arg.body
   **/
  registerFlipkartChannel({ flipkartChannel, body } = {}) {
    const { error } = MarketplacesValidator.registerFlipkartChannel().validate(
      {
        flipkartChannel,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${flipkartChannel}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Flipkart / Flipkart Assured marketplace channel credentials for a seller
   * @description: Update Flipkart / Flipkart Assured marketplace channel credentials for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.flipkartChannel - Name of marketplace channel
   * @param {FlipkartPayload} arg.body
   **/
  updateFlipkartChannelCredentials({ flipkartChannel, body } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateFlipkartChannelCredentials().validate(
      {
        flipkartChannel,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${flipkartChannel}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create Tatacliq / Tatacliq Luxury marketplace channel for a seller
   * @description: Create Tatacliq / Tatacliq Luxury marketplace channel for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.tatacliqChannel - Name of marketplace channel
   * @param {TatacliqPayload} arg.body
   **/
  registerTatacliqChannel({ tatacliqChannel, body } = {}) {
    const { error } = MarketplacesValidator.registerTatacliqChannel().validate(
      {
        tatacliqChannel,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${tatacliqChannel}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Tatacliq / Tatacliq Luxury Assured marketplace channel credentials for a seller
   * @description: Update Tatacliq / Tatacliq Luxury marketplace channel credentials for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.tatacliqChannel - Name of marketplace channel
   * @param {TatacliqPayload} arg.body
   **/
  updateTatacliqChannelCredentials({ tatacliqChannel, body } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateTatacliqChannelCredentials().validate(
      {
        tatacliqChannel,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${tatacliqChannel}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create Ajio marketplace channel for a seller
   * @description: Create Ajio marketplace channel for a seller
   * @param {Object} arg - arg object.
   * @param {AjioPayload} arg.body
   **/
  registerAjioChannel({ body } = {}) {
    const { error } = MarketplacesValidator.registerAjioChannel().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/ajio_in`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Ajio marketplace channel credentials for a seller
   * @description: Update Ajio marketplace channel credentials for a seller
   * @param {Object} arg - arg object.
   * @param {AjioPayload} arg.body
   **/
  updateAjioChannelCredentials({ body } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateAjioChannelCredentials().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/ajio_in`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update inventory sync configuration of marketplace channel for a seller
   * @description: Update inventory sync configuration of marketplace channel for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.channel - Name of marketplace channel
   * @param {string} [arg.validateCred] - Validate marketplace cred while saving inventory config
   * @param {InventorySyncConfig} arg.body
   **/
  updateChannelInventorySyncConfig({ channel, body, validateCred } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateChannelInventorySyncConfig().validate(
      {
        channel,
        body,
        validateCred,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["validate_cred"] = validateCred;

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/company/${this.config.companyId}/v1.0/channels/${channel}/inventory/config`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get marketplace channel location config for a seller
    * @description: Get marketplace channel location config for a seller
    * @param {Object} arg - arg object.
    * @param {string} arg.channel - Name of marketplace channel
    
    **/
  getChannelLocationConfig({ channel } = {}) {
    const { error } = MarketplacesValidator.getChannelLocationConfig().validate(
      {
        channel,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${channel}/location/config`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: update marketplace channel location config for a seller
   * @description: update marketplace channel location config for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.channel - Name of marketplace channel
   * @param {StoreMappingPayload} arg.body
   **/
  updateChannelLocationConfig({ channel, body } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateChannelLocationConfig().validate(
      {
        channel,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${channel}/location/config`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get marketplace channel active status for a seller
    * @description: Get marketplace channel active status for a seller
    * @param {Object} arg - arg object.
    * @param {string} arg.channel - Name of marketplace channel
    
    **/
  getChannelStatus({ channel } = {}) {
    const { error } = MarketplacesValidator.getChannelStatus().validate(
      {
        channel,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${channel}/status`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update marketplace channel active status for a seller
   * @description: Update marketplace channel active status for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.channel - Name of marketplace channel
   * @param {StatusPayload} arg.body
   **/
  updateChannelStatus({ channel, body } = {}) {
    const { error } = MarketplacesValidator.updateChannelStatus().validate(
      {
        channel,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${channel}/status`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Trigger marketplace channel inventory updates for a seller
   * @description: Trigger marketplace channel inventory updates for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.channel - Name of marketplace channel
   * @param {string} arg.updateType - Inventory update type
   * @param {SyncPayload} arg.body
   **/
  triggerChannelInventoryUpdates({ channel, updateType, body } = {}) {
    const {
      error,
    } = MarketplacesValidator.triggerChannelInventoryUpdates().validate(
      {
        channel,
        updateType,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${channel}/inventory/${updateType}/sync`,
      queryObj,
      body
    );
  }
}

class Analytics {
  constructor(config) {
    this.config = config;
  }

  /**
   *
   * @summary: Create data export job in required format
   * @description: Create data export job in required format
   * @param {Object} arg - arg object.
   * @param {string} arg.exportType - Export type / format
   * @param {ExportJobReq} arg.body
   **/
  createExportJob({ exportType, body } = {}) {
    const { error } = AnalyticsValidator.createExportJob().validate(
      {
        exportType,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/export/${exportType}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get data export job status
    * @description: Get data export job status
    * @param {Object} arg - arg object.
    * @param {string} arg.exportType - Export type / format
    * @param {string} arg.jobId - Export job id
    
    **/
  getExportJobStatus({ exportType, jobId } = {}) {
    const { error } = AnalyticsValidator.getExportJobStatus().validate(
      {
        exportType,
        jobId,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/export/${exportType}/job/${jobId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Get logs list
   * @description: Get logs list
   * @param {Object} arg - arg object.
   * @param {string} arg.logType - Log type
   * @param {number} [arg.pageNo] - Current page number
   * @param {number} [arg.pageSize] - Current page size
   * @param {GetLogsListReq} arg.body
   **/
  getLogsList({ logType, body, pageNo, pageSize } = {}) {
    const { error } = AnalyticsValidator.getLogsList().validate(
      {
        logType,
        body,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/logs/${logType}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Get logs list
   * @description: Get logs list
   * @param {Object} arg - arg object.
   * @param {string} arg.logType - Log type
   * @param {number} [arg.pageSize] - Current page size
   * @param {GetLogsListReq} arg.body
   **/
  getLogsListPaginator({ logType, pageSize, body } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getLogsList({
        logType: logType,
        body: body,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   *
   * @summary: Search logs
   * @description: Search logs
   * @param {Object} arg - arg object.
   * @param {number} [arg.pageNo] - Current page number
   * @param {number} [arg.pageSize] - Current page size
   * @param {string} arg.logType - Log type
   * @param {SearchLogReq} arg.body
   **/
  searchLogs({ logType, body, pageNo, pageSize } = {}) {
    const { error } = AnalyticsValidator.searchLogs().validate(
      {
        logType,
        body,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/logs/${logType}/search`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Search logs
   * @description: Search logs
   * @param {Object} arg - arg object.
   * @param {number} [arg.pageSize] - Current page size
   * @param {string} arg.logType - Log type
   * @param {SearchLogReq} arg.body
   **/
  searchLogsPaginator({ pageSize, logType, body } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.searchLogs({
        logType: logType,
        body: body,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }
}

module.exports = PlatformClient;
