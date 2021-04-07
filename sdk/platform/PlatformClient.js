const {
  LeadValidator,
  BillingValidator,
  PaymentValidator,
  OrderValidator,
  CatalogValidator,
  CompanyProfileValidator,
  InventoryValidator,
  ConfigurationValidator,
  MarketplacesValidator,
  AnalyticsValidator,
  DiscountValidator,
} = require("./PlatformModels");
const PlatformApplicationClient = require("./PlatformApplicationClient");
const Paginator = require("../common/Paginator");
const PlatformAPIClient = require("./PlatformAPIClient");

class PlatformClient {
  constructor(config) {
    this.config = config;
    this.lead = new Lead(config);
    this.billing = new Billing(config);
    this.payment = new Payment(config);
    this.order = new Order(config);
    this.catalog = new Catalog(config);
    this.companyProfile = new CompanyProfile(config);
    this.inventory = new Inventory(config);
    this.configuration = new Configuration(config);
    this.marketplaces = new Marketplaces(config);
    this.analytics = new Analytics(config);
    this.discount = new Discount(config);
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
        @typedef GetFaqCategoryByIdOrSlugSchema
        
        
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
        @typedef PaymentGatewayConfigResponse
        
        
        @property { boolean } created
        
        @property { Array<Object> } [aggregators]
        
        @property { Array<string> } excludedFields
        
        @property { boolean } success
        
        @property { Array<string> } displayFields
        
        @property { string } appId
        
         
    */

/**
        @typedef ErrorCodeDescription
        
        
        @property { string } description
        
        @property { string } code
        
        @property { boolean } success
        
         
    */

/**
        @typedef PaymentGatewayConfig
        
        
        @property { string } configType
        
        @property { string } secret
        
        @property { string } key
        
        @property { boolean } [isActive]
        
        @property { string } merchantSalt
        
         
    */

/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { PaymentGatewayConfig } [aggregatorName]
        
        @property { boolean } [isActive]
        
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
        
        
        @property { ErrorCodeAndDescription } error
        
        @property { boolean } success
        
         
    */

/**
        @typedef PaymentModeLogo
        
        
        @property { string } large
        
        @property { string } small
        
         
    */

/**
        @typedef PaymentModeList
        
        
        @property { number } [retryCount]
        
        @property { number } [expMonth]
        
        @property { string } [intentFlow]
        
        @property { string } [cardFingerprint]
        
        @property { string } [fyndVpa]
        
        @property { string } [cardReference]
        
        @property { string } [displayName]
        
        @property { Array<string> } [intentAppErrorList]
        
        @property { string } [nickname]
        
        @property { string } [cardNumber]
        
        @property { string } [cardBrandImage]
        
        @property { string } [cardToken]
        
        @property { number } [displayPriority]
        
        @property { string } [cardId]
        
        @property { string } [cardIsin]
        
        @property { string } [code]
        
        @property { string } aggregatorName
        
        @property { string } [cardIssuer]
        
        @property { string } [cardBrand]
        
        @property { number } [expYear]
        
        @property { string } [cardType]
        
        @property { string } [merchantCode]
        
        @property { string } [name]
        
        @property { number } [timeout]
        
        @property { PaymentModeLogo } [logoUrl]
        
        @property { boolean } [expired]
        
        @property { string } [cardName]
        
         
    */

/**
        @typedef RootPaymentMode
        
        
        @property { string } name
        
        @property { string } [aggregatorName]
        
        @property { boolean } [addCardEnabled]
        
        @property { Array<PaymentModeList> } [list]
        
        @property { string } displayName
        
        @property { number } displayPriority
        
        @property { boolean } [anonymousEnable]
        
         
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
        
        
        @property { Object } uniqueTransferNo
        
        @property { string } transferType
        
        @property { Object } moreAttributes
        
        @property { Object } customers
        
        @property { boolean } isDefault
        
        @property { Array<Object> } payoutsAggregators
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef PayoutRequest
        
        
        @property { string } uniqueExternalId
        
        @property { string } transferType
        
        @property { string } aggregator
        
        @property { Object } users
        
        @property { Object } bankDetails
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef PayoutResponse
        
        
        @property { string } uniqueTransferNo
        
        @property { boolean } created
        
        @property { string } paymentStatus
        
        @property { Object } users
        
        @property { string } aggregator
        
        @property { string } transferType
        
        @property { Object } payouts
        
        @property { Object } bankDetails
        
        @property { boolean } success
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef UpdatePayoutResponse
        
        
        @property { boolean } isActive
        
        @property { boolean } success
        
        @property { boolean } isDefault
        
         
    */

/**
        @typedef UpdatePayoutRequest
        
        
        @property { boolean } isActive
        
        @property { string } uniqueExternalId
        
        @property { boolean } isDefault
        
         
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
        
        
        @property { Object } config
        
        @property { string } aggregator
        
        @property { boolean } success
        
         
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
        
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { string } [code]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef SearchKeywordResult
        
        
        @property { Object } query
        
        @property { string } sortOn
        
         
    */

/**
        @typedef CreateSearchKeyword
        
        
        @property { SearchKeywordResult } result
        
        @property { Object } [customJson]
        
        @property { boolean } [isActive]
        
        @property { string } [appId]
        
        @property { Array<string> } [words]
        
         
    */

/**
        @typedef GetSearchWordsData
        
        
        @property { string } [uid]
        
        @property { Object } [result]
        
        @property { Object } [customJson]
        
        @property { string } [appId]
        
        @property { Array<string> } [words]
        
         
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
        @typedef Media
        
        
        @property { string } [type]
        
        @property { string } [url]
        
         
    */

/**
        @typedef AutocompletePageAction
        
        
        @property { Object } query
        
        @property { Object } [params]
        
        @property { string } type
        
        @property { string } [url]
        
         
    */

/**
        @typedef AutocompleteAction
        
        
        @property { AutocompletePageAction } [page]
        
        @property { string } [type]
        
         
    */

/**
        @typedef AutocompleteResult
        
        
        @property { Media } [logo]
        
        @property { AutocompleteAction } [action]
        
        @property { Object } [customJson]
        
        @property { string } [display]
        
         
    */

/**
        @typedef CreateAutocompleteKeyword
        
        
        @property { Object } [customJson]
        
        @property { boolean } [isActive]
        
        @property { string } [appId]
        
        @property { Array<AutocompleteResult> } [results]
        
        @property { Array<string> } [words]
        
         
    */

/**
        @typedef GetAutocompleteWordsData
        
        
        @property { string } [uid]
        
        @property { Object } [customJson]
        
        @property { string } [appId]
        
        @property { Array<Object> } [results]
        
        @property { Array<string> } [words]
        
         
    */

/**
        @typedef GetAutocompleteWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetAutocompleteWordsData> } [items]
        
         
    */

/**
        @typedef CreateAutocompleteWordsResponse
        
        
        @property { Array<Object> } [results]
        
        @property { Object } [customJson]
        
        @property { string } [appId]
        
        @property { Array<string> } [words]
        
         
    */

/**
        @typedef ProductBundleItem
        
        
        @property { number } productUid
        
        @property { number } maxQuantity
        
        @property { boolean } [autoAddToCart]
        
        @property { boolean } [autoSelect]
        
        @property { boolean } [allowRemove]
        
        @property { number } minQuantity
        
         
    */

/**
        @typedef GetProductBundleCreateResponse
        
        
        @property { string } [id]
        
        @property { Array<ProductBundleItem> } products
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } isActive
        
        @property { Object } [meta]
        
        @property { string } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { string } [logo]
        
        @property { string } [modifiedOn]
        
        @property { string } name
        
        @property { string } choice
        
        @property { string } slug
        
        @property { number } [companyId]
        
        @property { Object } [modifiedBy]
        
         
    */

/**
        @typedef GetProductBundleListingResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetProductBundleCreateResponse> } [items]
        
         
    */

/**
        @typedef ProductBundleRequest
        
        
        @property { Array<ProductBundleItem> } products
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } isActive
        
        @property { Object } [meta]
        
        @property { string } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { string } [logo]
        
        @property { string } [modifiedOn]
        
        @property { string } name
        
        @property { string } choice
        
        @property { string } slug
        
        @property { Object } [modifiedBy]
        
         
    */

/**
        @typedef ProductBundleUpdateRequest
        
        
        @property { Array<ProductBundleItem> } products
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } isActive
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { string } [logo]
        
        @property { string } [modifiedOn]
        
        @property { string } name
        
        @property { string } choice
        
        @property { string } slug
        
        @property { Object } [modifiedBy]
        
         
    */

/**
        @typedef LimitedProductData
        
        
        @property { string } [itemCode]
        
        @property { Object } [identifier]
        
        @property { number } [uid]
        
        @property { number } [quantity]
        
        @property { Array<string> } [sizes]
        
        @property { Array<string> } [images]
        
        @property { string } [countryOfOrigin]
        
        @property { Object } [price]
        
        @property { string } [name]
        
        @property { string } [shortDescription]
        
        @property { Object } [attributes]
        
        @property { string } [slug]
        
         
    */

/**
        @typedef Size
        
        
        @property { number } [quantity]
        
        @property { boolean } [isAvailable]
        
        @property { string } [value]
        
        @property { string } [display]
        
         
    */

/**
        @typedef Price
        
        
        @property { number } [maxMarked]
        
        @property { number } [minMarked]
        
        @property { number } [minEffective]
        
        @property { string } [currency]
        
        @property { number } [maxEffective]
        
         
    */

/**
        @typedef GetProducts
        
        
        @property { LimitedProductData } [productDetails]
        
        @property { number } [productUid]
        
        @property { number } [maxQuantity]
        
        @property { Array<Size> } [sizes]
        
        @property { boolean } [autoAddToCart]
        
        @property { boolean } [autoSelect]
        
        @property { Price } [price]
        
        @property { boolean } [allowRemove]
        
        @property { number } [minQuantity]
        
         
    */

/**
        @typedef GetProductBundleResponse
        
        
        @property { Array<GetProducts> } [products]
        
        @property { boolean } [isActive]
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { string } [choice]
        
        @property { Array<string> } [pageVisibility]
        
        @property { string } [slug]
        
        @property { number } [companyId]
        
         
    */

/**
        @typedef ListSizeGuide
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
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
        
        
        @property { string } title
        
        @property { string } [id]
        
        @property { string } [image]
        
        @property { string } [subtitle]
        
        @property { string } [description]
        
        @property { string } [createdOn]
        
        @property { Guide } [guide]
        
        @property { boolean } [active]
        
        @property { string } [modifiedOn]
        
        @property { string } [tag]
        
        @property { string } name
        
        @property { number } [brandId]
        
        @property { Object } [createdBy]
        
        @property { number } [companyId]
        
        @property { Object } [modifiedBy]
        
         
    */

/**
        @typedef SuccessResponse
        
        
        @property { number } [uid]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef SizeGuideResponse
        
        
        @property { string } [title]
        
        @property { string } [id]
        
        @property { string } [subtitle]
        
        @property { string } [createdOn]
        
        @property { Object } [guide]
        
        @property { boolean } [active]
        
        @property { string } [modifiedOn]
        
        @property { string } [tag]
        
        @property { number } [brandId]
        
        @property { string } [name]
        
        @property { Object } [createdBy]
        
        @property { number } [companyId]
        
        @property { Object } [modifiedBy]
        
         
    */

/**
        @typedef GetCatalogConfigurationDetailsProduct
        
        
        @property { Object } [variant]
        
        @property { Object } [compare]
        
        @property { Object } [similar]
        
        @property { Object } [detail]
        
         
    */

/**
        @typedef MetaDataListingFilterMetaResponse
        
        
        @property { Array<string> } [filterTypes]
        
        @property { Array<Object> } [units]
        
        @property { string } [display]
        
        @property { string } [key]
        
         
    */

/**
        @typedef MetaDataListingFilterResponse
        
        
        @property { Array<MetaDataListingFilterMetaResponse> } [data]
        
         
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
        @typedef MetaDataListingResponse
        
        
        @property { MetaDataListingFilterResponse } filter
        
        @property { MetaDataListingSortResponse } sort
        
         
    */

/**
        @typedef GetCatalogConfigurationMetaData
        
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { MetaDataListingResponse } [listing]
        
         
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
        
        @property { Object } [map]
        
        @property { string } [condition]
        
        @property { string } [sort]
        
         
    */

/**
        @typedef ConfigurationListingFilterConfig
        
        
        @property { string } key
        
        @property { ConfigurationListingFilterValue } [valueConfig]
        
        @property { boolean } isActive
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { string } type
        
        @property { number } priority
        
         
    */

/**
        @typedef ConfigurationListingFilter
        
        
        @property { boolean } allowSingle
        
        @property { Array<ConfigurationListingFilterConfig> } [attributeConfig]
        
         
    */

/**
        @typedef ConfigurationListingSortConfig
        
        
        @property { string } key
        
        @property { boolean } isActive
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { number } priority
        
         
    */

/**
        @typedef ConfigurationListingSort
        
        
        @property { Array<ConfigurationListingSortConfig> } [config]
        
        @property { string } defaultKey
        
         
    */

/**
        @typedef ConfigurationListing
        
        
        @property { ConfigurationListingFilter } filter
        
        @property { ConfigurationListingSort } sort
        
         
    */

/**
        @typedef ProductSize
        
        
        @property { number } min
        
        @property { number } max
        
         
    */

/**
        @typedef ConfigurationProductVariantConfig
        
        
        @property { string } key
        
        @property { boolean } isActive
        
        @property { string } displayType
        
        @property { string } [logo]
        
        @property { ProductSize } size
        
        @property { string } name
        
        @property { number } priority
        
         
    */

/**
        @typedef ConfigurationProductVariant
        
        
        @property { Array<ConfigurationProductVariantConfig> } [config]
        
         
    */

/**
        @typedef ConfigurationProductConfig
        
        
        @property { string } [title]
        
        @property { string } [subtitle]
        
        @property { string } key
        
        @property { boolean } isActive
        
        @property { string } [logo]
        
        @property { ProductSize } [size]
        
        @property { number } priority
        
         
    */

/**
        @typedef ConfigurationProductSimilar
        
        
        @property { Array<ConfigurationProductConfig> } [config]
        
         
    */

/**
        @typedef ConfigurationProduct
        
        
        @property { ConfigurationProductVariant } variant
        
        @property { ConfigurationProductSimilar } similar
        
         
    */

/**
        @typedef AppCatalogConfiguration
        
        
        @property { string } [id]
        
        @property { ConfigurationListing } [listing]
        
        @property { string } appId
        
        @property { string } [configId]
        
        @property { string } configType
        
        @property { ConfigurationProduct } [product]
        
         
    */

/**
        @typedef GetAppCatalogConfiguration
        
        
        @property { boolean } [isDefault]
        
        @property { AppCatalogConfiguration } [data]
        
         
    */

/**
        @typedef AppConfiguration
        
        
        @property { ConfigurationListing } [listing]
        
        @property { string } appId
        
        @property { string } [configId]
        
        @property { string } configType
        
        @property { ConfigurationProduct } [product]
        
         
    */

/**
        @typedef GetCatalogConfigurationDetailsSchemaListing
        
        
        @property { Object } [filter]
        
        @property { Object } [sort]
        
         
    */

/**
        @typedef EntityConfiguration
        
        
        @property { string } [id]
        
        @property { GetCatalogConfigurationDetailsSchemaListing } [listing]
        
        @property { string } appId
        
        @property { string } [configId]
        
        @property { string } configType
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
         
    */

/**
        @typedef GetAppCatalogEntityConfiguration
        
        
        @property { boolean } [isDefault]
        
        @property { EntityConfiguration } [data]
        
         
    */

/**
        @typedef ProductFiltersValue
        
        
        @property { string } [queryFormat]
        
        @property { boolean } isSelected
        
        @property { number } [selectedMax]
        
        @property { number } [count]
        
        @property { string } value
        
        @property { string } [displayFormat]
        
        @property { number } [min]
        
        @property { string } display
        
        @property { number } [max]
        
        @property { string } [currencyCode]
        
        @property { string } [currencySymbol]
        
        @property { number } [selectedMin]
        
         
    */

/**
        @typedef ProductFiltersKey
        
        
        @property { string } [logo]
        
        @property { string } display
        
        @property { string } [kind]
        
        @property { string } name
        
         
    */

/**
        @typedef ProductFilters
        
        
        @property { Array<ProductFiltersValue> } values
        
        @property { ProductFiltersKey } key
        
         
    */

/**
        @typedef ProductSortOn
        
        
        @property { boolean } [isSelected]
        
        @property { string } [value]
        
        @property { string } [name]
        
         
    */

/**
        @typedef GetCollectionQueryOptionResponse
        
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sortOn]
        
         
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
        
        @property { string } [type]
        
        @property { string } url
        
         
    */

/**
        @typedef BannerImage
        
        
        @property { string } [aspectRatio]
        
        @property { string } [url]
        
         
    */

/**
        @typedef ImageUrls
        
        
        @property { BannerImage } [landscape]
        
        @property { BannerImage } [portrait]
        
         
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
        
        
        @property { Object } [query]
        
        @property { Media1 } [logo]
        
        @property { Object } [schedule]
        
        @property { Object } [cron]
        
        @property { string } [type]
        
        @property { string } [slug]
        
        @property { string } [description]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [badge]
        
        @property { boolean } [isActive]
        
        @property { boolean } [allowSort]
        
        @property { Object } [meta]
        
        @property { Array<string> } [tag]
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
        @property { string } [uid]
        
        @property { ProductListingAction } [action]
        
        @property { string } [appId]
        
        @property { boolean } [allowFacets]
        
         
    */

/**
        @typedef GetCollectionListingResponse
        
        
        @property { CollectionListingFilter } [filters]
        
        @property { Array<GetCollectionDetailNest> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef CollectionImage
        
        
        @property { string } aspectRatio
        
        @property { string } url
        
         
    */

/**
        @typedef UserInfo
        
        
        @property { string } [email]
        
        @property { string } [userId]
        
        @property { string } [uid]
        
        @property { string } [username]
        
         
    */

/**
        @typedef Schedule
        
        
        @property { string } [end]
        
        @property { number } [duration]
        
        @property { string } [cron]
        
        @property { string } [start]
        
         
    */

/**
        @typedef SeoDetail
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */

/**
        @typedef CollectionBadge
        
        
        @property { string } [text]
        
        @property { string } [color]
        
         
    */

/**
        @typedef CollectionBanner
        
        
        @property { CollectionImage } landscape
        
        @property { CollectionImage } portrait
        
         
    */

/**
        @typedef CreateCollection
        
        
        @property { Object } [query]
        
        @property { boolean } [published]
        
        @property { CollectionImage } logo
        
        @property { UserInfo } [createdBy]
        
        @property { Schedule } [schedule]
        
        @property { Array<string> } [tags]
        
        @property { string } type
        
        @property { string } slug
        
        @property { string } [description]
        
        @property { SeoDetail } [seo]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { boolean } [isActive]
        
        @property { boolean } [allowSort]
        
        @property { CollectionBadge } [badge]
        
        @property { Object } [meta]
        
        @property { CollectionBanner } banners
        
        @property { string } name
        
        @property { UserInfo } [modifiedBy]
        
        @property { Object } [customJson]
        
        @property { string } appId
        
        @property { Object } [localeLanguage]
        
        @property { string } [sortOn]
        
        @property { boolean } [allowFacets]
        
         
    */

/**
        @typedef CollectionCreateResponse
        
        
        @property { Object } [query]
        
        @property { Object } [schedule]
        
        @property { Object } [badge]
        
        @property { string } [description]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [cron]
        
        @property { string } [appId]
        
        @property { boolean } [isActive]
        
        @property { boolean } [allowSort]
        
        @property { Object } [meta]
        
        @property { BannerImage } [logo]
        
        @property { Array<string> } [tag]
        
        @property { ImageUrls } [banners]
        
        @property { boolean } [allowFacets]
        
        @property { string } [name]
        
        @property { string } [type]
        
        @property { string } [slug]
        
         
    */

/**
        @typedef CollectionDetailResponse
        
        
        @property { Object } [query]
        
        @property { Object } [schedule]
        
        @property { Object } [badge]
        
        @property { string } [description]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [cron]
        
        @property { string } [appId]
        
        @property { boolean } [isActive]
        
        @property { boolean } [allowSort]
        
        @property { Object } [meta]
        
        @property { Media1 } [logo]
        
        @property { Array<string> } [tag]
        
        @property { ImageUrls } [banners]
        
        @property { boolean } [allowFacets]
        
        @property { string } [name]
        
        @property { string } [type]
        
        @property { string } [slug]
        
         
    */

/**
        @typedef Price1
        
        
        @property { string } [currencySymbol]
        
        @property { string } [currencyCode]
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */

/**
        @typedef ProductListingPrice
        
        
        @property { Price1 } [marked]
        
        @property { Price1 } [effective]
        
         
    */

/**
        @typedef ProductListingDetail
        
        
        @property { Array<string> } [highlights]
        
        @property { ProductListingPrice } [price]
        
        @property { Array<string> } [similars]
        
        @property { Array<Media1> } [medias]
        
        @property { Object } [teaserTag]
        
        @property { string } [itemType]
        
        @property { Object } [promoMeta]
        
        @property { string } [type]
        
        @property { string } [shortDescription]
        
        @property { string } slug
        
        @property { string } [description]
        
        @property { string } [discount]
        
        @property { string } [productOnlineDate]
        
        @property { string } [name]
        
        @property { string } [color]
        
        @property { boolean } [hasVariant]
        
        @property { Object } [attributes]
        
        @property { boolean } [sellable]
        
        @property { number } [uid]
        
        @property { string } [imageNature]
        
        @property { number } [rating]
        
        @property { Array<string> } [tryouts]
        
        @property { number } [ratingCount]
        
         
    */

/**
        @typedef GetCollectionItemsResponse
        
        
        @property { Array<ProductSortOn> } [sortOn]
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Page } [page]
        
         
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
        @typedef CatalogInsightBrand
        
        
        @property { number } [totalSizes]
        
        @property { number } [totalArticles]
        
        @property { string } [name]
        
        @property { number } [articleFreshness]
        
        @property { number } [availableSizes]
        
        @property { number } [availableArticles]
        
         
    */

/**
        @typedef CatalogInsightItem
        
        
        @property { number } [count]
        
        @property { number } [outOfStockCount]
        
        @property { number } [sellableCount]
        
         
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
        
        
        @property { CrossSellingData } [data]
        
        @property { CatalogInsightBrand } [brandDistribution]
        
         
    */

/**
        @typedef OptInPostRequest
        
        
        @property { boolean } [enabled]
        
        @property { Array<number> } [storeIds]
        
        @property { Array<number> } [brandIds]
        
        @property { string } optLevel
        
         
    */

/**
        @typedef CompanyOptIn
        
        
        @property { Array<number> } brandIds
        
        @property { boolean } enabled
        
        @property { Array<number> } storeIds
        
        @property { number } createdOn
        
        @property { string } optLevel
        
        @property { number } modifiedOn
        
        @property { string } platform
        
        @property { Object } [createdBy]
        
        @property { number } companyId
        
        @property { Object } [modifiedBy]
        
         
    */

/**
        @typedef GetOptInPlatform
        
        
        @property { Page } page
        
        @property { Array<CompanyOptIn> } items
        
         
    */

/**
        @typedef OptinCompanyDetail
        
        
        @property { string } [businessType]
        
        @property { number } [uid]
        
        @property { string } [companyType]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CompanyBrandDetail
        
        
        @property { number } [totalArticle]
        
        @property { string } [brandName]
        
        @property { number } [brandId]
        
        @property { number } [companyId]
        
         
    */

/**
        @typedef OptinCompanyBrandDetailsView
        
        
        @property { Page } [page]
        
        @property { Array<CompanyBrandDetail> } [items]
        
         
    */

/**
        @typedef OptinCompanyMetrics
        
        
        @property { number } [store]
        
        @property { string } [company]
        
        @property { number } [brand]
        
         
    */

/**
        @typedef StoreDetail
        
        
        @property { number } [uid]
        
        @property { string } [storeCode]
        
        @property { string } [createdOn]
        
        @property { string } [displayName]
        
        @property { string } [modifiedOn]
        
        @property { string } [name]
        
        @property { Array<Object> } [documents]
        
        @property { Object } [timing]
        
        @property { Array<Object> } [additionalContacts]
        
        @property { number } [companyId]
        
        @property { string } [storeType]
        
         
    */

/**
        @typedef OptinStoreDetails
        
        
        @property { Page } [page]
        
        @property { Array<StoreDetail> } [items]
        
         
    */

/**
        @typedef BasePage
        
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [size]
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
         
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
        
        
        @property { number } [status]
        
        @property { Object } [errors]
        
        @property { Object } [meta]
        
        @property { string } [message]
        
        @property { string } [code]
        
         
    */

/**
        @typedef BasePage1
        
        
        @property { boolean } [hasPrevious]
        
        @property { string } [nextPageId]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
         
    */

/**
        @typedef UserSerializer
        
        
        @property { string } [userId]
        
        @property { string } [contact]
        
        @property { string } [username]
        
         
    */

/**
        @typedef GetDepartment
        
        
        @property { number } [uid]
        
        @property { string } [search]
        
        @property { boolean } [isActive]
        
        @property { string } [createdOn]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [logo]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [modifiedOn]
        
        @property { string } [name]
        
        @property { number } [pageNo]
        
        @property { number } [pageSize]
        
        @property { string } [itemType]
        
        @property { number } [priorityOrder]
        
        @property { string } [slug]
        
        @property { UserSerializer } [modifiedBy]
        
         
    */

/**
        @typedef DepartmentsResponse
        
        
        @property { BasePage1 } [page]
        
        @property { Array<GetDepartment> } [items]
        
         
    */

/**
        @typedef DepartmentErrorResponse
        
        
        @property { number } [status]
        
        @property { Object } [errors]
        
        @property { Object } [meta]
        
        @property { string } [message]
        
        @property { string } [code]
        
         
    */

/**
        @typedef ProductTemplate
        
        
        @property { string } [description]
        
        @property { boolean } [isActive]
        
        @property { string } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { boolean } [isArchived]
        
        @property { string } [logo]
        
        @property { string } [tag]
        
        @property { Array<string> } [categories]
        
        @property { Array<string> } [departments]
        
        @property { string } [name]
        
        @property { string } [modifiedOn]
        
        @property { boolean } isPhysical
        
        @property { Array<string> } [attributes]
        
        @property { string } slug
        
        @property { Object } [modifiedBy]
        
         
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
        
        
        @property { Array<MultipleCommon> } [data]
        
        @property { boolean } [multivalue]
        
         
    */

/**
        @typedef CategoryMappingValues
        
        
        @property { string } name
        
        @property { number } [catalogId]
        
         
    */

/**
        @typedef CategoryMapping
        
        
        @property { CategoryMappingValues } [google]
        
        @property { CategoryMappingValues } [ajio]
        
        @property { CategoryMappingValues } [facebook]
        
         
    */

/**
        @typedef Hierarchy
        
        
        @property { number } department
        
        @property { number } l1
        
        @property { number } l2
        
         
    */

/**
        @typedef Media2
        
        
        @property { string } logo
        
        @property { string } portrait
        
        @property { string } landscape
        
         
    */

/**
        @typedef Category
        
        
        @property { number } level
        
        @property { number } [uid]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { boolean } isActive
        
        @property { string } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { string } [modifiedOn]
        
        @property { Array<string> } [synonyms]
        
        @property { Array<number> } departments
        
        @property { string } name
        
        @property { string } [id]
        
        @property { Array<string> } [tryouts]
        
        @property { Media2 } [media]
        
        @property { number } [priority]
        
        @property { string } [slug]
        
        @property { Object } [modifiedBy]
        
         
    */

/**
        @typedef CategoryResponse
        
        
        @property { BasePage1 } [page]
        
        @property { Array<Category> } [items]
        
         
    */

/**
        @typedef CategoryRequestBody
        
        
        @property { number } level
        
        @property { CategoryMapping } [marketplaces]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { boolean } isActive
        
        @property { Array<string> } [synonyms]
        
        @property { Array<number> } departments
        
        @property { string } name
        
        @property { Array<string> } [tryouts]
        
        @property { Media2 } [media]
        
        @property { number } [priority]
        
        @property { string } [slug]
        
         
    */

/**
        @typedef CategoryCreateResponse
        
        
        @property { string } [message]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef CategoryUpdateResponse
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef PageData
        
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [size]
        
        @property { string } [current]
        
        @property { boolean } [hasNext]
        
         
    */

/**
        @typedef ProductPublished
        
        
        @property { boolean } [isSet]
        
        @property { number } [productOnlineDate]
        
         
    */

/**
        @typedef Logo
        
        
        @property { number } [aspectRatioF]
        
        @property { string } [aspectRatio]
        
        @property { string } [secureUrl]
        
        @property { string } [url]
        
         
    */

/**
        @typedef Brand
        
        
        @property { Logo } [logo]
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef UserCommon
        
        
        @property { string } [userId]
        
        @property { number } [companyId]
        
        @property { string } [username]
        
         
    */

/**
        @typedef VerifiedBy
        
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */

/**
        @typedef Attributes
        
        
        @property { string } [sleeveLength]
        
        @property { Array<string> } [gender]
        
        @property { string } [verifiedOn]
        
        @property { string } [pattern]
        
        @property { UserCommon } [createdBy]
        
        @property { boolean } [isImageLessProduct]
        
        @property { string } [essential]
        
        @property { string } [productFit]
        
        @property { string } [metaNature]
        
        @property { string } [material]
        
        @property { string } [primaryColor]
        
        @property { string } [modifiedOn]
        
        @property { string } [neckType]
        
        @property { string } [primaryMaterial]
        
        @property { string } [color]
        
        @property { UserCommon } [modifiedBy]
        
        @property { Array<string> } [l3Mapping]
        
        @property { string } [stage]
        
        @property { string } [createdOn]
        
        @property { string } [imageNature]
        
        @property { VerifiedBy } [verifiedBy]
        
         
    */

/**
        @typedef Product
        
        
        @property { Array<Object> } [sizes]
        
        @property { boolean } [isDependent]
        
        @property { string } [countryOfOrigin]
        
        @property { string } [highlights]
        
        @property { ProductPublished } [productPublish]
        
        @property { boolean } [isSet]
        
        @property { Array<string> } [media]
        
        @property { number } [companyId]
        
        @property { string } [itemCode]
        
        @property { Array<string> } [allSizes]
        
        @property { string } [slug]
        
        @property { string } [id]
        
        @property { Brand } [brand]
        
        @property { string } [description]
        
        @property { boolean } [isActive]
        
        @property { boolean } [multiSize]
        
        @property { Array<string> } [images]
        
        @property { Array<number> } [departments]
        
        @property { string } [name]
        
        @property { string } [sizeGuide]
        
        @property { string } [hsnCode]
        
        @property { Attributes } [attributes]
        
        @property { string } [templateTag]
        
        @property { number } [uid]
        
        @property { string } [categorySlug]
        
        @property { string } [currency]
        
        @property { string } [itemType]
        
         
    */

/**
        @typedef ProductListingResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Product> } [items]
        
         
    */

/**
        @typedef Trader
        
        
        @property { string } address
        
        @property { string } name
        
         
    */

/**
        @typedef ProductPublish
        
        
        @property { boolean } [isSet]
        
        @property { string } [productOnlineDate]
        
         
    */

/**
        @typedef ReturnConfig
        
        
        @property { string } [unit]
        
        @property { boolean } [returnable]
        
        @property { number } [time]
        
         
    */

/**
        @typedef TeaserTag
        
        
        @property { string } [tag]
        
        @property { string } [url]
        
         
    */

/**
        @typedef OrderQuantity
        
        
        @property { boolean } [isSet]
        
        @property { number } [minimum]
        
        @property { number } [maximum]
        
         
    */

/**
        @typedef CustomOrder
        
        
        @property { number } [manufacturingTime]
        
        @property { string } [manufacturingTimeUnit]
        
        @property { boolean } [isCustomOrder]
        
         
    */

/**
        @typedef ProductCreateUpdate
        
        
        @property { boolean } [isDependent]
        
        @property { Object } [variants]
        
        @property { string } countryOfOrigin
        
        @property { Array<string> } [highlights]
        
        @property { Trader } [trader]
        
        @property { ProductPublish } [productPublish]
        
        @property { boolean } [isSet]
        
        @property { Array<Media1> } [media]
        
        @property { number } companyId
        
        @property { ReturnConfig } [returnConfig]
        
        @property { string } itemCode
        
        @property { boolean } [isImageLessProduct]
        
        @property { Array<string> } [tags]
        
        @property { string } [traderType]
        
        @property { TeaserTag } [teaserTag]
        
        @property { string } [shortDescription]
        
        @property { OrderQuantity } [moq]
        
        @property { string } slug
        
        @property { string } [description]
        
        @property { boolean } [isActive]
        
        @property { boolean } [multiSize]
        
        @property { Array<number> } departments
        
        @property { string } name
        
        @property { string } [sizeGuide]
        
        @property { Array<string> } [productGroupTag]
        
        @property { string } hsnCode
        
        @property { string } [changeRequestId]
        
        @property { string } templateTag
        
        @property { number } [uid]
        
        @property { string } categorySlug
        
        @property { Object } [customJson]
        
        @property { string } [requester]
        
        @property { number } [noOfBoxes]
        
        @property { string } currency
        
        @property { string } itemType
        
        @property { CustomOrder } [customOrder]
        
        @property { number } brandUid
        
         
    */

/**
        @typedef ValidateProduct
        
        
        @property { boolean } [valid]
        
         
    */

/**
        @typedef UserDetail
        
        
        @property { string } [userId]
        
        @property { string } [fullName]
        
        @property { string } [username]
        
         
    */

/**
        @typedef ProductBulkRequest
        
        
        @property { Array<string> } [cancelledRecords]
        
        @property { string } [filePath]
        
        @property { string } [templateTag]
        
        @property { number } [cancelled]
        
        @property { string } [stage]
        
        @property { ProductTemplate } [template]
        
        @property { boolean } [isActive]
        
        @property { number } [failed]
        
        @property { string } [createdOn]
        
        @property { number } [succeed]
        
        @property { string } [modifiedOn]
        
        @property { Array<string> } [failedRecords]
        
        @property { number } [total]
        
        @property { UserDetail } [createdBy]
        
        @property { number } [companyId]
        
        @property { UserDetail } [modifiedBy]
        
         
    */

/**
        @typedef ProductBulkRequestList
        
        
        @property { PageData } [page]
        
        @property { ProductBulkRequest } [items]
        
         
    */

/**
        @typedef UserInfo1
        
        
        @property { string } [email]
        
        @property { string } [userId]
        
        @property { string } [uid]
        
        @property { string } [username]
        
         
    */

/**
        @typedef BulkJob
        
        
        @property { Array<Object> } [cancelledRecords]
        
        @property { string } [filePath]
        
        @property { string } [templateTag]
        
        @property { number } [cancelled]
        
        @property { string } [stage]
        
        @property { boolean } [isActive]
        
        @property { string } createdOn
        
        @property { number } [failed]
        
        @property { number } [succeed]
        
        @property { string } [trackingUrl]
        
        @property { string } [modifiedOn]
        
        @property { Array<Object> } [failedRecords]
        
        @property { string } [customTemplateTag]
        
        @property { number } total
        
        @property { UserInfo1 } [createdBy]
        
        @property { number } companyId
        
        @property { UserInfo1 } [modifiedBy]
        
         
    */

/**
        @typedef BulkProductRequest
        
        
        @property { string } batchId
        
        @property { Array<Object> } data
        
        @property { string } templateTag
        
        @property { number } companyId
        
         
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
        @typedef Items
        
        
        @property { string } [id]
        
        @property { string } [filePath]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { number } [cancelled]
        
        @property { string } [stage]
        
        @property { string } [createdOn]
        
        @property { number } [failed]
        
        @property { boolean } [isActive]
        
        @property { number } [succeed]
        
        @property { string } [trackingUrl]
        
        @property { string } [modifiedOn]
        
        @property { Array<string> } [failedRecords]
        
        @property { number } [retry]
        
        @property { number } [companyId]
        
        @property { UserCommon } [createdBy]
        
        @property { number } [total]
        
        @property { UserCommon } [modifiedBy]
        
         
    */

/**
        @typedef BulkAssetResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Items> } [items]
        
         
    */

/**
        @typedef ProductBulkAssets
        
        
        @property { Object } user
        
        @property { number } [companyId]
        
        @property { string } url
        
         
    */

/**
        @typedef InventoryRequest
        
        
        @property { string } [search]
        
        @property { string } [size]
        
        @property { number } [pageNo]
        
        @property { number } [pageSize]
        
        @property { number } [total]
        
         
    */

/**
        @typedef ItemQuery
        
        
        @property { string } [itemCode]
        
        @property { number } [uid]
        
        @property { number } [brandUid]
        
         
    */

/**
        @typedef SetSize
        
        
        @property { string } size
        
        @property { number } pieces
        
         
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
        
        @property { string } gtinValue
        
        @property { boolean } [primary]
        
         
    */

/**
        @typedef InvSize
        
        
        @property { InventorySet } [set]
        
        @property { number } [itemWidth]
        
        @property { number } quantity
        
        @property { number } [priceTransfer]
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { number } [itemWeight]
        
        @property { string } storeCode
        
        @property { string } size
        
        @property { number } price
        
        @property { number } priceEffective
        
        @property { number } [itemLength]
        
        @property { number } [itemHeight]
        
        @property { Array<GTIN> } identifiers
        
        @property { string } currency
        
        @property { boolean } [isSet]
        
        @property { string } [itemWeightUnitOfMeasure]
        
         
    */

/**
        @typedef InventoryRequest1
        
        
        @property { ItemQuery } item
        
        @property { number } companyId
        
        @property { Array<InvSize> } sizes
        
         
    */

/**
        @typedef BulkRequestGet
        
        
        @property { string } [templateTag]
        
        @property { string } [search]
        
        @property { string } [startDate]
        
        @property { string } [stage]
        
        @property { string } [endDate]
        
        @property { string } [customTemplateTag]
        
        @property { number } [pageNo]
        
        @property { number } [pageSize]
        
        @property { number } [total]
        
         
    */

/**
        @typedef CommonResponse
        
        
        @property { string } [success]
        
         
    */

/**
        @typedef Size1
        
        
        @property { InventorySet } [set]
        
        @property { number } [itemWidth]
        
        @property { number } quantity
        
        @property { number } [priceTransfer]
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { number } [itemWeight]
        
        @property { string } sellerIdentifier
        
        @property { string } storeCode
        
        @property { string } [size]
        
        @property { number } price
        
        @property { number } priceEffective
        
        @property { number } [itemLength]
        
        @property { number } [itemHeight]
        
        @property { Array<Object> } [identifiers]
        
        @property { string } currency
        
        @property { boolean } [isSet]
        
        @property { string } [itemWeightUnitOfMeasure]
        
         
    */

/**
        @typedef InventoryBulkRequest
        
        
        @property { string } batchId
        
        @property { Object } [user]
        
        @property { number } companyId
        
        @property { Array<Size1> } sizes
        
         
    */

/**
        @typedef InventoryExportJob
        
        
        @property { string } taskId
        
        @property { Object } [requestParams]
        
        @property { string } [status]
        
        @property { string } [triggerOn]
        
        @property { string } [completedOn]
        
        @property { number } sellerId
        
        @property { string } [url]
        
         
    */

/**
        @typedef InventoryExportRequest
        
        
        @property { Array<number> } [brand]
        
        @property { Array<number> } [store]
        
        @property { string } [type]
        
         
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
        @typedef PageResponse
        
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [size]
        
        @property { string } [current]
        
        @property { boolean } [hasNext]
        
         
    */

/**
        @typedef HsnCodesObject
        
        
        @property { number } [uid]
        
        @property { number } [threshold2]
        
        @property { string } [hs2Code]
        
        @property { boolean } [isActive]
        
        @property { boolean } [taxOnMrp]
        
        @property { number } [tax1]
        
        @property { string } [hsnCode]
        
        @property { number } [tax2]
        
        @property { boolean } [taxOnEsp]
        
        @property { number } [companyId]
        
        @property { number } [threshold1]
        
         
    */

/**
        @typedef HsnCodesListingResponse
        
        
        @property { PageResponse } [page]
        
        @property { Array<HsnCodesObject> } [items]
        
         
    */

/**
        @typedef HsnUpsert
        
        
        @property { number } [threshold2]
        
        @property { string } hs2Code
        
        @property { boolean } isActive
        
        @property { boolean } taxOnMrp
        
        @property { number } tax1
        
        @property { string } hsnCode
        
        @property { number } [tax2]
        
        @property { boolean } [taxOnEsp]
        
        @property { number } companyId
        
        @property { number } threshold1
        
         
    */

/**
        @typedef HsnCode
        
        
        @property { HsnCodesObject } [data]
        
         
    */

/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
         
    */

/**
        @typedef CompanyAddress
        
        
        @property { string } [landmark]
        
        @property { number } latitude
        
        @property { string } country
        
        @property { number } pincode
        
        @property { string } city
        
        @property { string } [address2]
        
        @property { string } state
        
        @property { number } longitude
        
        @property { string } [countryCode]
        
        @property { string } address1
        
         
    */

/**
        @typedef ReferralInfo
        
        
        @property { string } [referralCode]
        
         
    */

/**
        @typedef Document
        
        
        @property { boolean } [verified]
        
        @property { string } [url]
        
        @property { string } value
        
        @property { string } legalName
        
        @property { string } type
        
         
    */

/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { Object } [warnings]
        
        @property { BusinessCountryInfo } businessCountryInfo
        
        @property { CompanyAddress } address
        
        @property { Array<string> } [notificationEmails]
        
        @property { string } name
        
        @property { ReferralInfo } [referralInfo]
        
        @property { number } [uid]
        
        @property { Document } document
        
        @property { string } [businessInfo]
        
        @property { Array<number> } brands
        
        @property { string } businessType
        
        @property { boolean } [franchiseEnabled]
        
         
    */

/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
         
    */

/**
        @typedef GetAddressSerializer
        
        
        @property { string } [landmark]
        
        @property { number } [latitude]
        
        @property { string } [country]
        
        @property { number } [pincode]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [state]
        
        @property { string } [countryCode]
        
        @property { number } [longitude]
        
        @property { string } [addressType]
        
        @property { string } [address1]
        
         
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
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { Object } [warnings]
        
        @property { Array<string> } [notificationEmails]
        
        @property { string } [name]
        
        @property { string } [modifiedOn]
        
        @property { BusinessCountryInfo1 } [businessCountryInfo]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { Array<Document> } [documents]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { string } [stage]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } companyType
        
        @property { boolean } [franchiseEnabled]
        
        @property { BusinessDetails } [businessDetails]
        
        @property { string } [verifiedOn]
        
        @property { UserSerializer } [createdBy]
        
        @property { number } uid
        
        @property { ContactDetails } [contactDetails]
        
        @property { string } [businessInfo]
        
        @property { string } [createdOn]
        
        @property { string } businessType
        
         
    */

/**
        @typedef DocumentsObj
        
        
        @property { number } [verified]
        
        @property { number } [pending]
        
         
    */

/**
        @typedef MetricsSerializer
        
        
        @property { DocumentsObj } [store]
        
        @property { DocumentsObj } [brand]
        
        @property { number } [uid]
        
        @property { DocumentsObj } [product]
        
        @property { string } [stage]
        
        @property { DocumentsObj } [companyDocuments]
        
        @property { DocumentsObj } [storeDocuments]
        
         
    */

/**
        @typedef UserSerializer1
        
        
        @property { string } [contact]
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */

/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [portrait]
        
        @property { string } [landscape]
        
         
    */

/**
        @typedef GetBrandResponseSerializer
        
        
        @property { Array<string> } [synonyms]
        
        @property { string } [verifiedOn]
        
        @property { Object } [warnings]
        
        @property { string } [logo]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { string } name
        
        @property { string } [description]
        
        @property { string } [modifiedOn]
        
        @property { number } [uid]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { Object } [customJson]
        
        @property { string } [stage]
        
        @property { string } [slugKey]
        
        @property { Object } [localeLanguage]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { string } [rejectReason]
        
        @property { string } [createdOn]
        
        @property { UserSerializer1 } [verifiedBy]
        
         
    */

/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { Array<string> } [synonyms]
        
        @property { string } logo
        
        @property { string } name
        
        @property { string } [description]
        
        @property { number } [uid]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { Object } [customJson]
        
        @property { Object } [localeLanguage]
        
        @property { number } [companyId]
        
        @property { string } [brandTier]
        
         
    */

/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */

/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { Array<number> } brands
        
        @property { number } [uid]
        
        @property { number } company
        
         
    */

/**
        @typedef LocationListSerializer
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */

/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [minute]
        
        @property { number } [hour]
        
         
    */

/**
        @typedef LocationDayWiseSerializer
        
        
        @property { string } weekday
        
        @property { boolean } open
        
        @property { LocationTimingSerializer } [closing]
        
        @property { LocationTimingSerializer } [opening]
        
         
    */

/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { number } [storeUid]
        
        @property { boolean } [onSameStore]
        
         
    */

/**
        @typedef GetAddressSerializer1
        
        
        @property { string } [landmark]
        
        @property { number } [latitude]
        
        @property { string } [country]
        
        @property { number } [pincode]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [state]
        
        @property { string } [countryCode]
        
        @property { number } [longitude]
        
        @property { string } [addressType]
        
        @property { string } [address1]
        
         
    */

/**
        @typedef InvoiceCredSerializer
        
        
        @property { boolean } [enabled]
        
        @property { string } [username]
        
        @property { string } [password]
        
         
    */

/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [eInvoice]
        
        @property { InvoiceCredSerializer } [eWaybill]
        
         
    */

/**
        @typedef LocationManagerSerializer
        
        
        @property { string } [name]
        
        @property { SellerPhoneNumber } mobileNo
        
        @property { string } [email]
        
         
    */

/**
        @typedef LocationSerializer
        
        
        @property { Object } [warnings]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { string } displayName
        
        @property { GetAddressSerializer1 } address
        
        @property { Array<string> } [notificationEmails]
        
        @property { string } name
        
        @property { string } [storeType]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { number } [uid]
        
        @property { Object } [customJson]
        
        @property { Array<SellerPhoneNumber> } [contactNumbers]
        
        @property { string } [stage]
        
        @property { Array<Document> } [documents]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { number } company
        
        @property { string } code
        
         
    */

/**
        @typedef LocationIntegrationType
        
        
        @property { string } [order]
        
        @property { string } [inventory]
        
         
    */

/**
        @typedef GetCompanySerializer
        
        
        @property { string } [verifiedOn]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [name]
        
        @property { string } [modifiedOn]
        
        @property { number } [uid]
        
        @property { string } [companyType]
        
        @property { string } [stage]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [rejectReason]
        
        @property { string } [createdOn]
        
        @property { string } [businessType]
        
        @property { UserSerializer } [verifiedBy]
        
         
    */

/**
        @typedef GetLocationSerializer
        
        
        @property { Object } [warnings]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { Array<string> } [notificationEmails]
        
        @property { string } name
        
        @property { string } phoneNumber
        
        @property { string } [modifiedOn]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { Array<SellerPhoneNumber> } [contactNumbers]
        
        @property { string } displayName
        
        @property { Object } [customJson]
        
        @property { Array<Document> } [documents]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { LocationIntegrationType } [integrationType]
        
        @property { GetCompanySerializer } [company]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { string } [storeType]
        
        @property { string } [stage]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { string } [verifiedOn]
        
        @property { GetAddressSerializer } address
        
        @property { UserSerializer1 } [createdBy]
        
        @property { number } [uid]
        
        @property { string } [createdOn]
        
        @property { string } code
        
         
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
        @typedef Campaign
        
        
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
        @typedef ShortLinkList
        
        
        @property { Array<ShortLinkRes> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ErrorRes
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef DataTresholdDTO
        
        
        @property { number } [minPrice]
        
        @property { number } [safeStock]
        
        @property { number } [periodThreshold]
        
        @property { string } [periodThresholdType]
        
        @property { Array<GenericDTO> } [periodTypeList]
        
         
    */

/**
        @typedef GenericDTO
        
        
        @property { string } [text]
        
        @property { Object } [value]
        
         
    */

/**
        @typedef JobConfigDTO
        
        
        @property { string } integration
        
        @property { Object } [integrationData]
        
        @property { string } [companyName]
        
        @property { number } companyId
        
        @property { TaskDTO } [taskDetails]
        
        @property { DataTresholdDTO } [thresholdDetails]
        
        @property { string } [jobCode]
        
        @property { string } [alias]
        
         
    */

/**
        @typedef TaskDTO
        
        
        @property { number } [type]
        
        @property { Array<GenericDTO> } [groupList]
        
         
    */

/**
        @typedef ResponseEnvelopeString
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { string } [items]
        
        @property { string } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AWSS3config
        
        
        @property { string } [bucket]
        
        @property { string } [region]
        
        @property { string } [dir]
        
        @property { string } [accessKey]
        
        @property { string } [secretKey]
        
        @property { string } [localFilePath]
        
        @property { string } [archivePath]
        
        @property { boolean } [archive]
        
        @property { boolean } [delete]
        
        @property { boolean } [unzip]
        
        @property { string } [zipFormat]
        
        @property { string } [fileRegex]
        
        @property { ArchiveConfig } [archiveConfig]
        
         
    */

/**
        @typedef ArchiveConfig
        
        
        @property { boolean } [delete]
        
        @property { boolean } [archive]
        
        @property { string } [archiveDir]
        
         
    */

/**
        @typedef Audit
        
        
        @property { string } [createdBy]
        
        @property { string } [modifiedBy]
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */

/**
        @typedef CatalogMasterConfig
        
        
        @property { string } [sourceSlug]
        
         
    */

/**
        @typedef CompanyConfig
        
        
        @property { number } [companyId]
        
        @property { Array<number> } [excludeSteps]
        
        @property { Array<string> } [hiddenClosetKeys]
        
        @property { Object } [openTags]
        
        @property { Array<string> } [taxIdentifiers]
        
        @property { number } [deleteQuantityThreshold]
        
         
    */

/**
        @typedef DBConfig
        
        
        @property { string } [vendor]
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { string } [dbname]
        
        @property { string } [query]
        
        @property { boolean } [procedure]
        
        @property { string } [driverClass]
        
        @property { string } [jdbcUrl]
        
        @property { Object } [optionalProperties]
        
         
    */

/**
        @typedef DBConnectionProfile
        
        
        @property { string } [inventory]
        
         
    */

/**
        @typedef DBParamConfig
        
        
        @property { Object } [params]
        
         
    */

/**
        @typedef DefaultHeadersDTO
        
        
        @property { PropBeanDTO } [store]
        
        @property { PropBeanDTO } [intfArticleId]
        
        @property { PropBeanDTO } [priceEffective]
        
        @property { PropBeanDTO } [quantity]
        
         
    */

/**
        @typedef DocMappingConfig
        
        
        @property { Object } [properties]
        
        @property { number } [junkDataThresholdCount]
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
        @property { string } [unwindField]
        
        @property { DefaultHeadersDTO } [defaultHeaders]
        
         
    */

/**
        @typedef EmailConfig
        
        
        @property { string } [recepient]
        
        @property { string } [host]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { boolean } [readFromContent]
        
        @property { boolean } [filterBasedOnRecepients]
        
        @property { string } [pcol]
        
        @property { string } [subjectLineRegex]
        
        @property { string } [senderAddress]
        
        @property { string } [localDir]
        
        @property { Array<string> } [folderNameHierarchies]
        
        @property { string } [attachmentRegex]
        
        @property { string } [bodyContentRegex]
        
        @property { boolean } [passwordProtected]
        
        @property { string } [zipFormat]
        
        @property { boolean } [attachmentMandate]
        
        @property { boolean } [filterFilesAfterExtraction]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { boolean } [readAllUnreadMails]
        
        @property { string } [contentType]
        
        @property { boolean } [downloadableLink]
        
        @property { Object } [properties]
        
         
    */

/**
        @typedef FTPConfig
        
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [localDir]
        
        @property { string } [remoteDir]
        
        @property { string } [zipFileRegex]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { string } [fileRegex]
        
        @property { string } [zipFormat]
        
        @property { boolean } [readAllFiles]
        
         
    */

/**
        @typedef FileConfig
        
        
        @property { string } [delimiter]
        
        @property { string } [charset]
        
        @property { Object } [properties]
        
        @property { boolean } [fileHasHeader]
        
        @property { number } [headerIndex]
        
        @property { Array<string> } [headerArray]
        
        @property { number } [dataStartIndex]
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
        @property { number } [junkDataThresholdCount]
        
        @property { string } [fileType]
        
        @property { boolean } [lineValidityCheck]
        
        @property { Array<string> } [sheetNames]
        
        @property { boolean } [readAllSheets]
        
        @property { string } [quoteChar]
        
        @property { string } [escapeChar]
        
        @property { DefaultHeadersDTO } [defaultHeaders]
        
         
    */

/**
        @typedef GoogleSpreadSheetConfig
        
        
        @property { string } [range]
        
        @property { string } [sheetId]
        
        @property { string } [clientSecretLocation]
        
        @property { string } [credStorageDirectory]
        
        @property { string } [localDir]
        
        @property { ArchiveConfig } [archiveConfig]
        
         
    */

/**
        @typedef HttpConfig
        
        
        @property { string } [hosturl]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { Object } [requestParams]
        
        @property { string } [httpMethod]
        
        @property { string } [requestPayload]
        
        @property { string } [localPath]
        
        @property { ArchiveConfig } [archiveConfig]
        
         
    */

/**
        @typedef JobConfig
        
        
        @property { number } [id]
        
        @property { string } [jobCode]
        
        @property { string } [taskType]
        
        @property { number } [syncDelay]
        
        @property { string } [cronExpression]
        
        @property { StoreFilter } [storeFilter]
        
        @property { ProcessConfig } [processConfig]
        
        @property { Array<StoreConfig> } [storeConfig]
        
        @property { Object } [properties]
        
        @property { boolean } [immediateFirstRun]
        
        @property { boolean } [disable]
        
        @property { Array<string> } [dependentJobCodes]
        
        @property { Array<CompanyConfig> } [companyConfig]
        
        @property { Array<number> } [companyIds]
        
        @property { Array<string> } [taxIdentifiers]
        
        @property { string } [priority]
        
        @property { number } [periodThreshold]
        
        @property { string } [periodThresholdType]
        
        @property { DBConnectionProfile } [dbConnectionProfile]
        
        @property { Object } [params]
        
        @property { Object } [openTags]
        
        @property { number } [deleteQuantityThreshold]
        
        @property { CatalogMasterConfig } [catalogMasterConfig]
        
        @property { Array<string> } [aggregatorTypes]
        
        @property { string } [integrationType]
        
        @property { number } [minPrice]
        
        @property { Audit } [audit]
        
        @property { number } [version]
        
        @property { string } [alias]
        
         
    */

/**
        @typedef JobConfigRawDTO
        
        
        @property { string } integration
        
        @property { string } companyName
        
        @property { number } companyId
        
        @property { JobConfig } [data]
        
         
    */

/**
        @typedef JsonDocConfig
        
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
         
    */

/**
        @typedef LocalFileConfig
        
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [localDir]
        
        @property { string } [workingDir]
        
        @property { boolean } [unzip]
        
        @property { string } [zipFileRegex]
        
        @property { string } [fileRegex]
        
        @property { string } [zipFormat]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { boolean } [readAllFiles]
        
         
    */

/**
        @typedef MongoDocConfig
        
        
        @property { string } [collectionName]
        
        @property { Object } [findQuery]
        
        @property { Object } [projectionQuery]
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
        @property { Array<Object> } [aggregatePipeline]
        
        @property { boolean } [skipSave]
        
         
    */

/**
        @typedef OAuthConfig
        
        
        @property { number } [limit]
        
        @property { number } [pages]
        
        @property { number } [interval]
        
        @property { string } [consumerKey]
        
        @property { string } [consumerSecret]
        
        @property { string } [token]
        
        @property { string } [tokenSecret]
        
        @property { string } [restUrl]
        
        @property { string } [restBaseUrl]
        
        @property { string } [functionName]
        
         
    */

/**
        @typedef ProcessConfig
        
        
        @property { DBConfig } [dbConfig]
        
        @property { DBParamConfig } [dbParamConfig]
        
        @property { SFTPConfig } [sftpConfig]
        
        @property { AWSS3config } [awsS3Config]
        
        @property { MongoDocConfig } [mongoDocConfig]
        
        @property { FTPConfig } [ftpConfig]
        
        @property { EmailConfig } [emailConfig]
        
        @property { FileConfig } [fileConfig]
        
        @property { JsonDocConfig } [jsonDocConfig]
        
        @property { DocMappingConfig } [docMappingConfig]
        
        @property { TaskStepConfig } [taskStepConfig]
        
        @property { HttpConfig } [httpConfig]
        
        @property { LocalFileConfig } [localFileConfig]
        
        @property { OAuthConfig } [oauthConfig]
        
        @property { GoogleSpreadSheetConfig } [googleSpreadsheetConfig]
        
         
    */

/**
        @typedef PropBeanConfig
        
        
        @property { boolean } [required]
        
        @property { Object } [mapping]
        
        @property { boolean } [optional]
        
        @property { Send } [send]
        
        @property { Array<Object> } [validations]
        
        @property { Array<string> } [values]
        
        @property { boolean } [include]
        
        @property { string } [sourceField]
        
        @property { Array<string> } [sourceFields]
        
        @property { string } [destinationField]
        
        @property { string } [dataType]
        
        @property { Object } [defaultValue]
        
        @property { Object } [constValue]
        
        @property { string } [concatStr]
        
        @property { string } [functionName]
        
        @property { string } [transformerName]
        
        @property { string } [allParamFunctionName]
        
        @property { string } [subSeparator]
        
        @property { string } [indexField]
        
        @property { boolean } [ignoreIfNotExists]
        
        @property { string } [identifierType]
        
        @property { Object } [projectionQuery]
        
        @property { boolean } [enrichFromMaster]
        
         
    */

/**
        @typedef PropBeanDTO
        
        
        @property { boolean } [required]
        
        @property { boolean } [optional]
        
        @property { boolean } [include]
        
        @property { string } [sourceField]
        
        @property { Array<string> } [sourceFields]
        
        @property { string } [destinationField]
        
        @property { string } [dataType]
        
        @property { Object } [defaultValue]
        
        @property { Object } [constValue]
        
        @property { string } [concatStr]
        
        @property { string } [functionName]
        
        @property { string } [transformerName]
        
        @property { string } [allParamFunctionName]
        
        @property { string } [subSeparator]
        
        @property { string } [indexField]
        
        @property { boolean } [ignoreIfNotExists]
        
        @property { string } [identifierType]
        
        @property { Object } [projectionQuery]
        
        @property { boolean } [enrichFromMaster]
        
         
    */

/**
        @typedef ResponseEnvelopeListJobConfigRawDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { Array<JobConfigRawDTO> } [items]
        
        @property { Array<JobConfigRawDTO> } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SFTPConfig
        
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [privateKeyPath]
        
        @property { boolean } [strictHostKeyChecking]
        
        @property { string } [localDir]
        
        @property { string } [remoteDir]
        
        @property { boolean } [passwordProtected]
        
        @property { string } [zipFileRegex]
        
        @property { string } [fileRegex]
        
        @property { string } [zipFormat]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { boolean } [readAllFiles]
        
         
    */

/**
        @typedef Send
        
        
        @property { boolean } [raw]
        
        @property { boolean } [processed]
        
         
    */

/**
        @typedef StoreConfig
        
        
        @property { string } [jobCode]
        
        @property { string } [storeid]
        
        @property { string } [storeAlias]
        
        @property { string } [storeFileRegex]
        
        @property { string } [storeFileName]
        
        @property { ProcessConfig } [processConfig]
        
        @property { Object } [properties]
        
         
    */

/**
        @typedef StoreFilter
        
        
        @property { Array<string> } [includeTags]
        
        @property { Array<string> } [excludeTags]
        
        @property { Object } [query]
        
         
    */

/**
        @typedef TaskConfig
        
        
        @property { string } [name]
        
        @property { number } [taskConfigId]
        
        @property { Array<TaskParam> } [taskParams]
        
         
    */

/**
        @typedef TaskParam
        
        
        @property { string } [name]
        
        @property { Object } [value]
        
         
    */

/**
        @typedef TaskStepConfig
        
        
        @property { Array<TaskConfig> } [taskConfigs]
        
        @property { Array<number> } [taskConfigIds]
        
        @property { Array<number> } [taskConfigGroupIds]
        
         
    */

/**
        @typedef ResponseEnvelopeListJobConfigDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { Array<JobConfigDTO> } [items]
        
        @property { Array<JobConfigDTO> } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ResponseEnvelopeJobConfigDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { JobConfigDTO } [items]
        
        @property { JobConfigDTO } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef JobConfigListDTO
        
        
        @property { string } [code]
        
        @property { string } [alias]
        
        @property { string } [modifiedBy]
        
        @property { string } [createdBy]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { boolean } [active]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ResponseEnvelopeListJobConfigListDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { Array<JobConfigListDTO> } [items]
        
        @property { Array<JobConfigListDTO> } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
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
        @typedef RuleDefinition
        
        
        @property { string } calculateOn
        
        @property { string } type
        
        @property { string } [currencyCode]
        
        @property { string } applicableOn
        
        @property { boolean } [autoApply]
        
        @property { Array<string> } [scope]
        
        @property { string } valueType
        
        @property { boolean } [isExact]
        
         
    */

/**
        @typedef CouponDateMeta
        
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */

/**
        @typedef Validation
        
        
        @property { boolean } [anonymous]
        
        @property { string } [userRegisteredAfter]
        
        @property { Array<string> } [appId]
        
         
    */

/**
        @typedef Rule
        
        
        @property { number } [discountQty]
        
        @property { number } [max]
        
        @property { number } [key]
        
        @property { number } [value]
        
        @property { number } [min]
        
         
    */

/**
        @typedef State
        
        
        @property { boolean } [isArchived]
        
        @property { boolean } [isPublic]
        
        @property { boolean } [isDisplay]
        
         
    */

/**
        @typedef Validity
        
        
        @property { number } [priority]
        
         
    */

/**
        @typedef Ownership
        
        
        @property { string } payableBy
        
        @property { string } payableCategory
        
         
    */

/**
        @typedef CouponAuthor
        
        
        @property { string } [createdBy]
        
        @property { string } [modifiedBy]
        
         
    */

/**
        @typedef CouponAction
        
        
        @property { string } [actionDate]
        
        @property { string } [txnMode]
        
         
    */

/**
        @typedef DisplayMetaDict
        
        
        @property { string } [title]
        
        @property { string } [subtitle]
        
         
    */

/**
        @typedef DisplayMeta
        
        
        @property { string } [description]
        
        @property { DisplayMetaDict } [apply]
        
        @property { string } [subtitle]
        
        @property { DisplayMetaDict } [auto]
        
        @property { DisplayMetaDict } [remove]
        
        @property { string } [title]
        
         
    */

/**
        @typedef CouponSchedule
        
        
        @property { string } [cron]
        
        @property { Array<Object> } [nextSchedule]
        
        @property { string } [start]
        
        @property { string } [end]
        
        @property { number } [duration]
        
         
    */

/**
        @typedef PriceRange
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */

/**
        @typedef BulkBundleRestriction
        
        
        @property { boolean } multiStoreAllowed
        
         
    */

/**
        @typedef PostOrder
        
        
        @property { boolean } [cancellationAllowed]
        
        @property { boolean } [returnAllowed]
        
         
    */

/**
        @typedef UsesRemaining
        
        
        @property { number } [app]
        
        @property { number } [total]
        
        @property { number } [user]
        
         
    */

/**
        @typedef UsesRestriction
        
        
        @property { UsesRemaining } [remaining]
        
        @property { UsesRemaining } [maximum]
        
         
    */

/**
        @typedef PaymentAllowValue
        
        
        @property { number } [max]
        
         
    */

/**
        @typedef PaymentModes
        
        
        @property { Array<string> } [codes]
        
        @property { PaymentAllowValue } [uses]
        
        @property { Array<string> } [types]
        
        @property { Array<string> } [networks]
        
         
    */

/**
        @typedef PaymentCodes
        
        
        @property { PaymentModes } [qr]
        
        @property { PaymentModes } [nb]
        
        @property { PaymentModes } [pl]
        
        @property { PaymentModes } [upi]
        
        @property { PaymentModes } [card]
        
        @property { PaymentModes } [wl]
        
        @property { PaymentModes } [ps]
        
         
    */

/**
        @typedef Restrictions
        
        
        @property { PriceRange } [priceRange]
        
        @property { Array<number> } [orderingStores]
        
        @property { boolean } [couponAllowed]
        
        @property { BulkBundleRestriction } [bulkBundle]
        
        @property { PostOrder } [postOrder]
        
        @property { UsesRestriction } [uses]
        
        @property { Array<string> } [platforms]
        
        @property { PaymentCodes } [payments]
        
         
    */

/**
        @typedef Identifier
        
        
        @property { Array<string> } [userId]
        
        @property { Array<string> } [collectionId]
        
        @property { Array<number> } [storeId]
        
        @property { Array<number> } [brandId]
        
        @property { Array<number> } [itemId]
        
        @property { Array<number> } [companyId]
        
        @property { Array<string> } [articleId]
        
        @property { Array<number> } [categoryId]
        
         
    */

/**
        @typedef CouponAdd
        
        
        @property { RuleDefinition } ruleDefinition
        
        @property { string } typeSlug
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { Validation } [validation]
        
        @property { Array<string> } [tags]
        
        @property { Array<Rule> } rule
        
        @property { State } [state]
        
        @property { Validity } validity
        
        @property { string } code
        
        @property { Ownership } ownership
        
        @property { CouponAuthor } [author]
        
        @property { CouponAction } [action]
        
        @property { DisplayMeta } displayMeta
        
        @property { CouponSchedule } [schedule]
        
        @property { Restrictions } [restrictions]
        
        @property { Identifier } identifiers
        
         
    */

/**
        @typedef CouponsResponse
        
        
        @property { CouponAdd } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SuccessMessage
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef OperationErrorResponse
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef CouponUpdate
        
        
        @property { RuleDefinition } ruleDefinition
        
        @property { string } typeSlug
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { Validation } [validation]
        
        @property { Array<string> } [tags]
        
        @property { Array<Rule> } rule
        
        @property { State } [state]
        
        @property { Validity } validity
        
        @property { string } code
        
        @property { Ownership } ownership
        
        @property { CouponAuthor } [author]
        
        @property { CouponAction } [action]
        
        @property { DisplayMeta } displayMeta
        
        @property { CouponSchedule } [schedule]
        
        @property { Restrictions } [restrictions]
        
        @property { Identifier } identifiers
        
         
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
        @typedef Audience
        
        
        @property { string } [headerUserId]
        
        @property { string } [id]
        
         
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
        
        @property { Audience } [audience]
        
        @property { Asset } [bannerImage]
        
        @property { string } [createdAt]
        
        @property { string } [description]
        
        @property { Rule } [rule]
        
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

/**
        @typedef DiscountJob
        
        
        @property { string } id
        
        @property { string } name
        
        @property { number } companyId
        
        @property { boolean } isActive
        
        @property { Array<string> } [appIds]
        
        @property { string } [jobType]
        
        @property { string } [discountType]
        
        @property { string } [discountLevel]
        
        @property { number } [value]
        
        @property { string } [filePath]
        
        @property { Array<number> } [brandIds]
        
        @property { Array<number> } [storeIds]
        
        @property { Validity } validity
        
        @property { string } createdOn
        
        @property { string } modifiedOn
        
        @property { UserDetails } createdBy
        
        @property { UserDetails } modifiedBy
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef ListOrCalender
        
        
        @property { Array<DiscountJob> } items
        
        @property { Page } page
        
         
    */

/**
        @typedef CreateUpdateDiscount
        
        
        @property { string } name
        
        @property { number } companyId
        
        @property { boolean } isActive
        
        @property { Array<string> } appIds
        
        @property { string } jobType
        
        @property { string } discountType
        
        @property { string } discountLevel
        
        @property { number } [value]
        
        @property { string } [filePath]
        
        @property { Array<number> } [brandIds]
        
        @property { Array<number> } [storeIds]
        
        @property { Validity } validity
        
         
    */

/**
        @typedef FileJobResponse
        
        
        @property { string } stage
        
        @property { number } total
        
        @property { number } failed
        
        @property { number } companyId
        
        @property { Object } [body]
        
        @property { string } type
        
        @property { string } fileType
        
         
    */

/**
        @typedef DownloadFileJob
        
        
        @property { Array<number> } [brandIds]
        
        @property { Array<number> } [storeIds]
        
         
    */

/**
        @typedef CancelJobResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef UserDetails
        
        
        @property { string } username
        
        @property { string } userId
        
         
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
   * @summary: Add Inventory for particular size and store.
   * @description: This API allows add Inventory for particular size and store.
   * @param {Object} arg - arg object.
   * @param {number} arg.itemId - Item of the company associated to product that is to be viewed.
   * @param {string} arg.size - Size in which inventory is to be added.
   * @param {InventoryRequest1} arg.body
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
    
    **/
  getBrands({} = {}) {
    const { error } = CompanyProfileValidator.getBrands().validate(
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
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/company-brand`,
      queryObj,
      undefined
    );
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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

class Inventory {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Get Job Configs For A Company
    * @description: REST Endpoint that returns all job configs for a company
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Page Number
    * @param {number} [arg.pageSize] - Page Size
    
    **/
  getJobsByCompany({ pageNo, pageSize } = {}) {
    const { error } = InventoryValidator.getJobsByCompany().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Updates An Existing Job Config
   * @description: REST Endpoint that updates a job config
   * @param {Object} arg - arg object.
   * @param {string} [arg.xUserData] -
   * @param {JobConfigDTO} arg.body
   **/
  updateJob({ body, xUserData } = {}) {
    const { error } = InventoryValidator.updateJob().validate(
      {
        body,
        xUserData,
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
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Creates A New Job Config
   * @description: REST Endpoint that creates a new job config
   * @param {Object} arg - arg object.
   * @param {string} [arg.xUserData] -
   * @param {JobConfigDTO} arg.body
   **/
  createJob({ body, xUserData } = {}) {
    const { error } = InventoryValidator.createJob().validate(
      {
        body,
        xUserData,
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
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get Job Configs By Company And Integration
    * @description: REST Endpoint that returns all job configs by company And integration
    * @param {Object} arg - arg object.
    * @param {string} arg.integrationId - Integration Id
    * @param {number} [arg.pageNo] - Page Number
    * @param {number} [arg.pageSize] - Page Size
    
    **/
  getJobByCompanyAndIntegration({ integrationId, pageNo, pageSize } = {}) {
    const {
      error,
    } = InventoryValidator.getJobByCompanyAndIntegration().validate(
      {
        integrationId,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/integration/${integrationId}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get Job Configs Defaults
    * @description: REST Endpoint that returns default fields job configs by company And integration
    * @param {Object} arg - arg object.
    
    **/
  getJobConfigDefaults({} = {}) {
    const { error } = InventoryValidator.getJobConfigDefaults().validate(
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
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/defaults`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get Job Config By Code
    * @description: REST Endpoint that returns job config by code
    * @param {Object} arg - arg object.
    * @param {string} arg.code - Job Code
    
    **/
  getJobByCode({ code } = {}) {
    const { error } = InventoryValidator.getJobByCode().validate(
      {
        code,
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
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/code/${code}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get Job Codes By Company And Integration
    * @description: REST Endpoint that returns all job codes by company And integration
    * @param {Object} arg - arg object.
    * @param {string} arg.integrationId - Integration Id
    * @param {number} [arg.pageNo] - Page Number
    * @param {number} [arg.pageSize] - Page Size
    
    **/
  getJobCodesByCompanyAndIntegration({ integrationId, pageNo, pageSize } = {}) {
    const {
      error,
    } = InventoryValidator.getJobCodesByCompanyAndIntegration().validate(
      {
        integrationId,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/code/integration/${integrationId}`,
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
    * @summary: Get registered marketplace channel for a seller
    * @description: Get registered marketplace channel for a seller
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
    }

    const queryObj = {};
    queryObj["job_id"] = jobId;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/export/${exportType}`,
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
   * @param {string} [arg.pageNo] - Current page number
   * @param {string} [arg.pageSize] - Current page size
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
      throw error;
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
   * @summary: Search logs
   * @description: Search logs
   * @param {Object} arg - arg object.
   * @param {string} [arg.pageNo] - Current page number
   * @param {string} [arg.pageSize] - Current page size
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
      throw error;
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
}

class Discount {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Fetch discount list.
    * @description: Fetch discount list.
    * @param {Object} arg - arg object.
    * @param {string} [arg.view] - listing or calender.  Default is listing.
    * @param {string} [arg.q] - The search query. This can be a partial or complete name of a discount.
    * @param {number} [arg.pageNo] - page number. Default is 1.
    * @param {number} [arg.pageSize] - page size. Default is 12.
    * @param {boolean} [arg.archived] - archived. Default is false.
    * @param {number} [arg.month] - month. Default is current month.
    * @param {number} [arg.year] - year. Default is current year.
    * @param {string} [arg.type] - basic or custom.
    * @param {Array<string>} [arg.appIds] - application ids.
    
    **/
  getDiscounts({
    view,
    q,
    pageNo,
    pageSize,
    archived,
    month,
    year,
    type,
    appIds,
  } = {}) {
    const { error } = DiscountValidator.getDiscounts().validate(
      {
        view,
        q,
        pageNo,
        pageSize,
        archived,
        month,
        year,
        type,
        appIds,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["view"] = view;
    queryObj["q"] = q;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["archived"] = archived;
    queryObj["month"] = month;
    queryObj["year"] = year;
    queryObj["type"] = type;
    queryObj["app_ids"] = appIds;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/job/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create Discount.
   * @description: Create Discount.
   * @param {Object} arg - arg object.
   * @param {CreateUpdateDiscount} arg.body
   **/
  createDiscount({ body } = {}) {
    const { error } = DiscountValidator.createDiscount().validate(
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
      `/service/platform/discount/v1.0/company/${this.config.companyId}/job/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Fetch discount.
    * @description: Fetch discount.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - unique id.
    
    **/
  getDiscount({ id } = {}) {
    const { error } = DiscountValidator.getDiscount().validate(
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
      `/service/platform/discount/v1.0/company/${this.config.companyId}/job/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create Discount.
   * @description: Create Discount.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - id
   * @param {CreateUpdateDiscount} arg.body
   **/
  updateDiscount({ id, body } = {}) {
    const { error } = DiscountValidator.updateDiscount().validate(
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
      `/service/platform/discount/v1.0/company/${this.config.companyId}/job/${id}/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Validate File.
   * @description: Validate File.
   * @param {Object} arg - arg object.
   * @param {string} [arg.discount] - discount
   * @param {DiscountJob} arg.body
   **/
  validateDiscountFile({ body, discount } = {}) {
    const { error } = DiscountValidator.validateDiscountFile().validate(
      {
        body,
        discount,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["discount"] = discount;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/validation/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Validate File.
   * @description: Validate File.
   * @param {Object} arg - arg object.
   * @param {string} arg.type - type
   * @param {DownloadFileJob} arg.body
   **/
  downloadDiscountFile({ type, body } = {}) {
    const { error } = DiscountValidator.downloadDiscountFile().validate(
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
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/${type}/download/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Validate File Job.
    * @description: Validate File Job.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - id
    
    **/
  getValidationJob({ id } = {}) {
    const { error } = DiscountValidator.getValidationJob().validate(
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
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/validation/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Cancel Validation Job.
    * @description: Cancel Validation Job.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - id
    
    **/
  cancelValidationJob({ id } = {}) {
    const { error } = DiscountValidator.cancelValidationJob().validate(
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
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/validation/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Download File Job.
    * @description: Download File Job.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - id
    
    **/
  getDownloadJob({ id } = {}) {
    const { error } = DiscountValidator.getDownloadJob().validate(
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
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/download/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Cancel Download Job.
    * @description: Cancel Download Job.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - id
    
    **/
  cancelDownloadJob({ id } = {}) {
    const { error } = DiscountValidator.cancelDownloadJob().validate(
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
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/download/${id}/`,
      queryObj,
      undefined
    );
  }
}

module.exports = PlatformClient;
