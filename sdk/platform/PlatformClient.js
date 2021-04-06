const {
  LeadValidator,
  CommunicationValidator,
  PaymentValidator,
  OrderValidator,
  CatalogValidator,
  CompanyProfileValidator,
  AssetsValidator,
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
    this.communication = new Communication(config);
    this.payment = new Payment(config);
    this.order = new Order(config);
    this.catalog = new Catalog(config);
    this.companyProfile = new CompanyProfile(config);
    this.assets = new Assets(config);
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

class Communication {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Get system notifications
    * @description: Get system notifications
    * @param {Object} arg - arg object.
    * @param {Object} [arg.query] - 
    * @param {number} [arg.pageNo] - 
    * @param {number} [arg.pageSize] - 
    
    **/
  getSystemNotifications({ query, pageNo, pageSize } = {}) {
    const { error } = CommunicationValidator.getSystemNotifications().validate(
      {
        query,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["query"] = query;
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
    * @param {Object} [arg.query] - 
    * @param {number} [arg.pageSize] - 
    
    **/
  getSystemNotificationsPaginator({ query, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getSystemNotifications({
        query: query,
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
   * @summary: Create a company brand mapping.
   * @description: This API allows to create a company brand mapping, for a already existing brand in the system.
   * @param {Object} arg - arg object.
   * @param {CompanyBrandPostRequestSerializer} arg.body
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
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/company-brand`,
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

class Assets {
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
    const { error } = AssetsValidator.startUpload().validate(
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
    const { error } = AssetsValidator.completeUpload().validate(
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
    const { error } = AssetsValidator.getSignUrls().validate(
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
    const { error } = AssetsValidator.copyFiles().validate(
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
    
    **/
  browse({ namespace } = {}) {
    const { error } = AssetsValidator.browse().validate(
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
    const { error } = AssetsValidator.proxy().validate(
      {
        url,
      },
      { abortEarly: false }
    );
    if (error) {
      throw error;
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
   * @param {InventoryConfig} arg.body
   **/
  updateChannelInventoryConfig({ channel, body, validateCred } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateChannelInventoryConfig().validate(
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

module.exports = PlatformClient;
