const {
  LeadValidator,
  UserValidator,
  PaymentValidator,
  OrderValidator,
  CatalogValidator,
  FileStorageValidator,
  ShareValidator,
  ConfigurationValidator,
  CartValidator,
} = require("./PlatformApplicationModels");
const PlatformAPIClient = require("./PlatformAPIClient");
const Paginator = require("../common/Paginator");

class PlatformApplicationClient {
  constructor(applicationId, config) {
    this.config = config;
    this.companyId = config.companyId;
    this.applicationId = applicationId;

    this.lead = new Lead(config, applicationId);
    this.user = new User(config, applicationId);
    this.payment = new Payment(config, applicationId);
    this.order = new Order(config, applicationId);
    this.catalog = new Catalog(config, applicationId);
    this.fileStorage = new FileStorage(config, applicationId);
    this.share = new Share(config, applicationId);
    this.configuration = new Configuration(config, applicationId);
    this.cart = new Cart(config, applicationId);
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
        
        
        @property { number } [item_total]
        
        @property { string } [next_id]
        
        @property { boolean } [has_previous]
        
        @property { boolean } [has_next]
        
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
        
        @property { string } [header_image]
        
        @property { boolean } [should_notify]
        
        @property { string } [success_message]
        
        @property { PollForAssignment } [poll_for_assignment]
        
         
    */

/**
        @typedef EditCustomFormPayload
        
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [header_image]
        
        @property { boolean } [should_notify]
        
        @property { boolean } [login_required]
        
        @property { string } [success_message]
        
        @property { PollForAssignment } [poll_for_assignment]
        
         
    */

/**
        @typedef EditTicketPayload
        
        
        @property { TicketContent } [content]
        
        @property { string } [category]
        
        @property { string } [source]
        
        @property { string } [status]
        
        @property { string } [priority]
        
        @property { AgentChangePayload } [assigned_to]
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef AgentChangePayload
        
        
        @property { string } agent_id
        
         
    */

/**
        @typedef CreateVideoRoomResponse
        
        
        @property { string } unique_name
        
         
    */

/**
        @typedef CloseVideoRoomResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef CreateVideoRoomPayload
        
        
        @property { string } unique_name
        
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
        
        
        @property { string } access_token
        
         
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
        @typedef PhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [phone]
        
        @property { number } [country_code]
        
         
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
        
        
        @property { string } [application_id]
        
        @property { string } company_id
        
         
    */

/**
        @typedef CreatedOn
        
        
        @property { string } user_agent
        
         
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
        
        @property { string } title_color
        
        @property { string } background_color
        
         
    */

/**
        @typedef PollForAssignment
        
        
        @property { number } duration
        
        @property { string } message
        
        @property { string } success_message
        
        @property { string } failure_message
        
         
    */

/**
        @typedef CustomForm
        
        
        @property { string } application_id
        
        @property { string } slug
        
        @property { string } [header_image]
        
        @property { string } title
        
        @property { string } [description]
        
        @property { boolean } login_required
        
        @property { boolean } should_notify
        
        @property { string } [success_message]
        
        @property { SubmitButton } [submit_button]
        
        @property { Array<Object> } inputs
        
        @property { CreatedOn } [created_on]
        
        @property { Object } [created_by]
        
        @property { PollForAssignment } [poll_for_assignment]
        
        @property { string } _id
        
         
    */

/**
        @typedef TicketHistory
        
        
        @property { string } type
        
        @property { Object } value
        
        @property { string } ticket_id
        
        @property { CreatedOn } [created_on]
        
        @property { Object } [created_by]
        
        @property { string } _id
        
        @property { string } [updated_at]
        
        @property { string } [created_at]
        
         
    */

/**
        @typedef Ticket
        
        
        @property { TicketContext } [context]
        
        @property { CreatedOn } [created_on]
        
        @property { string } [response_id]
        
        @property { TicketContent } [content]
        
        @property { string } ticket_id
        
        @property { TicketCategory } category
        
        @property { string } source
        
        @property { Status } status
        
        @property { Priority } priority
        
        @property { Object } [created_by]
        
        @property { Object } [assigned_to]
        
        @property { Array<string> } [tags]
        
        @property { Object } [_custom_json]
        
        @property { string } [_id]
        
        @property { string } [updated_at]
        
        @property { string } [created_at]
        
         
    */

/**
        @typedef EditEmailRequestSchema
        
        
        @property { string } [email]
        
         
    */

/**
        @typedef SendVerificationLinkMobileRequestSchema
        
        
        @property { boolean } [verified]
        
        @property { boolean } [active]
        
        @property { string } [country_code]
        
        @property { string } [phone]
        
        @property { boolean } [primary]
        
         
    */

/**
        @typedef EditMobileRequestSchema
        
        
        @property { string } [country_code]
        
        @property { string } [phone]
        
         
    */

/**
        @typedef EditProfileRequestSchema
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { string } [mobile]
        
        @property { string } [email]
        
        @property { string } [gender]
        
        @property { string } [dob]
        
        @property { string } [profile_pic_url]
        
        @property { string } [android_hash]
        
        @property { string } [sender]
        
        @property { string } [register_token]
        
         
    */

/**
        @typedef SendEmailOtpRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [register_token]
        
         
    */

/**
        @typedef VerifyOtpRequestSchema
        
        
        @property { string } [request_id]
        
        @property { string } [register_token]
        
        @property { string } [otp]
        
         
    */

/**
        @typedef SendMobileOtpRequestSchema
        
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [android_hash]
        
        @property { string } [force]
        
         
    */

/**
        @typedef UpdatePasswordRequestSchema
        
        
        @property { string } [old_password]
        
        @property { string } [new_password]
        
         
    */

/**
        @typedef FormRegisterRequestSchema
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [password]
        
        @property { FormRegisterRequestSchemaPhone } [phone]
        
        @property { string } [register_token]
        
         
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
        
        @property { string } [captcha_code]
        
         
    */

/**
        @typedef PasswordLoginRequestSchema
        
        
        @property { string } [captcha_code]
        
        @property { string } [password]
        
        @property { string } [username]
        
         
    */

/**
        @typedef SendOtpRequestSchema
        
        
        @property { string } [country_code]
        
        @property { string } [captcha_code]
        
        @property { string } [mobile]
        
         
    */

/**
        @typedef OAuthRequestSchema
        
        
        @property { boolean } [is_signed_in]
        
        @property { OAuthRequestSchemaOauth2 } [oauth2]
        
        @property { OAuthRequestSchemaProfile } [profile]
        
         
    */

/**
        @typedef AuthSuccess
        
        
        @property { string } [register_token]
        
        @property { boolean } [user_exists]
        
        @property { AuthSuccessUser } [user]
        
         
    */

/**
        @typedef SendOtpResponse
        
        
        @property { number } [resend_timer]
        
        @property { string } [resend_token]
        
        @property { boolean } [success]
        
        @property { string } [request_id]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
         
    */

/**
        @typedef LoginSuccess
        
        
        @property { UserSchema } [user]
        
         
    */

/**
        @typedef VerifyOtpSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [user_exists]
        
         
    */

/**
        @typedef ResetPasswordSuccess
        
        
        @property { string } [status]
        
         
    */

/**
        @typedef RegisterFormSuccess
        
        
        @property { number } [resend_timer]
        
        @property { string } [resend_token]
        
        @property { boolean } [success]
        
        @property { string } [request_id]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
         
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
        
        
        @property { number } [resend_timer]
        
        @property { string } [resend_token]
        
        @property { boolean } [success]
        
        @property { string } [request_id]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
         
    */

/**
        @typedef EmailOtpSuccess
        
        
        @property { string } [resend_token]
        
         
    */

/**
        @typedef SessionListSuccess
        
        
        @property { Array<string> } [sessions]
        
         
    */

/**
        @typedef VerifyMobileOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verify_mobile_link]
        
         
    */

/**
        @typedef VerifyEmailOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verify_email_link]
        
         
    */

/**
        @typedef SendMobileVerifyLinkSuccess
        
        
        @property { boolean } [verify_mobile_link]
        
         
    */

/**
        @typedef SendEmailVerifyLinkSuccess
        
        
        @property { boolean } [verify_email_link]
        
         
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
        @typedef PaginationSchema
        
        
        @property { number } [size]
        
        @property { number } [item_total]
        
        @property { boolean } [has_next]
        
        @property { string } [type]
        
        @property { number } [current]
        
         
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
        
        @property { boolean } [verify_email_otp]
        
        @property { boolean } [verify_email_link]
        
        @property { boolean } [verify_mobile_otp]
        
        @property { string } [user]
        
        @property { string } [register_token]
        
        @property { boolean } [user_exists]
        
         
    */

/**
        @typedef FormRegisterRequestSchemaPhone
        
        
        @property { string } [country_code]
        
        @property { string } [mobile]
        
         
    */

/**
        @typedef OAuthRequestSchemaOauth2
        
        
        @property { string } [access_token]
        
        @property { number } [expiry]
        
        @property { string } [refresh_token]
        
         
    */

/**
        @typedef OAuthRequestSchemaProfile
        
        
        @property { string } [last_name]
        
        @property { string } [image]
        
        @property { string } [id]
        
        @property { string } [email]
        
        @property { string } [full_name]
        
        @property { string } [first_name]
        
         
    */

/**
        @typedef AuthSuccessUser
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
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
        @typedef CreateUserRequestSchema
        
        
        @property { string } phone_number
        
        @property { string } [email]
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { string } [gender]
        
        @property { string } username
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef CreateUserResponseSchema
        
        
        @property { UserSchema } [user]
        
         
    */

/**
        @typedef CreateUserSessionRequestSchema
        
        
        @property { string } [domain]
        
        @property { number } [max_age]
        
        @property { string } [user_id]
        
         
    */

/**
        @typedef CreateUserSessionResponseSchema
        
        
        @property { string } [domain]
        
        @property { number } [max_age]
        
        @property { boolean } [secure]
        
        @property { boolean } [http_only]
        
        @property { Object } [cookie]
        
         
    */

/**
        @typedef PlatformSchema
        
        
        @property { string } [display]
        
        @property { LookAndFeel } [look_and_feel]
        
        @property { string } [updated_at]
        
        @property { boolean } [active]
        
        @property { boolean } [forgot_password]
        
        @property { Login } [login]
        
        @property { boolean } [skip_captcha]
        
        @property { string } [name]
        
        @property { MetaSchema } [meta]
        
        @property { string } [_id]
        
        @property { Social } [social]
        
        @property { RequiredFields } [required_fields]
        
        @property { RegisterRequiredFields } [register_required_fields]
        
        @property { boolean } [skip_login]
        
        @property { FlashCard } [flash_card]
        
        @property { string } [subtext]
        
        @property { SocialTokens } [social_tokens]
        
        @property { string } [created_at]
        
        @property { boolean } [register]
        
        @property { string } [mobile_image]
        
        @property { string } [desktop_image]
        
         
    */

/**
        @typedef LookAndFeel
        
        
        @property { string } [card_position]
        
        @property { string } [background_color]
        
         
    */

/**
        @typedef Login
        
        
        @property { boolean } [password]
        
        @property { boolean } [otp]
        
         
    */

/**
        @typedef MetaSchema
        
        
        @property { boolean } [fynd_default]
        
         
    */

/**
        @typedef Social
        
        
        @property { boolean } [account_kit]
        
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
        
        
        @property { boolean } [is_required]
        
        @property { string } [level]
        
         
    */

/**
        @typedef RegisterRequiredFields
        
        
        @property { RegisterRequiredFieldsEmail } [email]
        
        @property { RegisterRequiredFieldsMobile } [mobile]
        
         
    */

/**
        @typedef RegisterRequiredFieldsEmail
        
        
        @property { boolean } [is_required]
        
        @property { string } [level]
        
         
    */

/**
        @typedef RegisterRequiredFieldsMobile
        
        
        @property { boolean } [is_required]
        
        @property { string } [level]
        
         
    */

/**
        @typedef FlashCard
        
        
        @property { string } [text]
        
        @property { string } [text_color]
        
        @property { string } [background_color]
        
         
    */

/**
        @typedef SocialTokens
        
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [account_kit]
        
        @property { Google } [google]
        
         
    */

/**
        @typedef Facebook
        
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef Accountkit
        
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef Google
        
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef UpdateUserRequestSchema
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { string } [gender]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef UserSchema
        
        
        @property { string } [first_name]
        
        @property { Object } [meta]
        
        @property { string } [last_name]
        
        @property { Array<PhoneNumber> } [phone_numbers]
        
        @property { Array<Email> } [emails]
        
        @property { string } [gender]
        
        @property { string } [dob]
        
        @property { boolean } [active]
        
        @property { string } [profile_pic_url]
        
        @property { string } [username]
        
        @property { string } [account_type]
        
        @property { string } [uid]
        
        @property { Debug } [debug]
        
        @property { boolean } [has_old_password_hash]
        
        @property { string } [_id]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
         
    */

/**
        @typedef PaymentGatewayConfigResponse
        
        
        @property { boolean } success
        
        @property { Array<string> } excluded_fields
        
        @property { string } app_id
        
        @property { Array<Object> } [aggregators]
        
        @property { boolean } created
        
        @property { Array<string> } display_fields
        
         
    */

/**
        @typedef ErrorCodeDescription
        
        
        @property { string } code
        
        @property { boolean } success
        
        @property { string } description
        
         
    */

/**
        @typedef PaymentGatewayConfig
        
        
        @property { boolean } [is_active]
        
        @property { string } merchant_salt
        
        @property { string } key
        
        @property { string } secret
        
        @property { string } config_type
        
         
    */

/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { PaymentGatewayConfig } [aggregator_name]
        
        @property { string } app_id
        
        @property { boolean } [is_active]
        
         
    */

/**
        @typedef PaymentGatewayToBeReviewed
        
        
        @property { boolean } success
        
        @property { Array<string> } aggregator
        
         
    */

/**
        @typedef ErrorCodeAndDescription
        
        
        @property { string } code
        
        @property { string } description
        
         
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
        
        
        @property { string } [name]
        
        @property { string } [card_brand]
        
        @property { string } [card_id]
        
        @property { boolean } [expired]
        
        @property { number } [exp_year]
        
        @property { string } [card_isin]
        
        @property { string } [code]
        
        @property { string } [merchant_code]
        
        @property { number } [display_priority]
        
        @property { number } [exp_month]
        
        @property { string } [intent_flow]
        
        @property { string } [display_name]
        
        @property { string } [card_token]
        
        @property { string } [fynd_vpa]
        
        @property { number } [timeout]
        
        @property { string } [card_reference]
        
        @property { PaymentModeLogo } [logo_url]
        
        @property { string } aggregator_name
        
        @property { string } [card_number]
        
        @property { string } [card_name]
        
        @property { string } [card_fingerprint]
        
        @property { Array<string> } [intent_app_error_list]
        
        @property { string } [card_brand_image]
        
        @property { number } [retry_count]
        
        @property { string } [nickname]
        
        @property { string } [card_issuer]
        
        @property { string } [card_type]
        
         
    */

/**
        @typedef RootPaymentMode
        
        
        @property { number } display_priority
        
        @property { string } name
        
        @property { Array<PaymentModeList> } [list]
        
        @property { string } display_name
        
        @property { string } [aggregator_name]
        
        @property { boolean } [add_card_enabled]
        
        @property { boolean } [anonymous_enable]
        
         
    */

/**
        @typedef PaymentOptions
        
        
        @property { Array<RootPaymentMode> } payment_option
        
         
    */

/**
        @typedef PaymentOptionsResponse
        
        
        @property { PaymentOptions } payment_options
        
        @property { boolean } success
        
         
    */

/**
        @typedef PayoutsResponse
        
        
        @property { Object } unique_transfer_no
        
        @property { boolean } is_active
        
        @property { string } transfer_type
        
        @property { Object } more_attributes
        
        @property { Array<Object> } payouts_aggregators
        
        @property { boolean } is_default
        
        @property { Object } customers
        
         
    */

/**
        @typedef PayoutRequest
        
        
        @property { Object } bank_details
        
        @property { boolean } is_active
        
        @property { string } transfer_type
        
        @property { Object } users
        
        @property { string } aggregator
        
        @property { string } unique_external_id
        
         
    */

/**
        @typedef PayoutResponse
        
        
        @property { Object } bank_details
        
        @property { boolean } success
        
        @property { string } unique_transfer_no
        
        @property { Object } payouts
        
        @property { boolean } is_active
        
        @property { string } payment_status
        
        @property { string } transfer_type
        
        @property { Object } users
        
        @property { string } aggregator
        
        @property { boolean } created
        
         
    */

/**
        @typedef UpdatePayoutResponse
        
        
        @property { boolean } success
        
        @property { boolean } is_active
        
        @property { boolean } is_default
        
         
    */

/**
        @typedef UpdatePayoutRequest
        
        
        @property { boolean } is_active
        
        @property { boolean } is_default
        
        @property { string } unique_external_id
        
         
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
        
        @property { boolean } success
        
        @property { string } aggregator
        
         
    */

/**
        @typedef SaveSubscriptionSetupIntentRequest
        
        
        @property { string } unique_external_id
        
         
    */

/**
        @typedef SaveSubscriptionSetupIntentResponse
        
        
        @property { boolean } success
        
        @property { Object } data
        
         
    */

/**
        @typedef GetActivityStatus
        
        
        @property { ActivityHistory } activity_history
        
         
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
        
        
        @property { string } [updated_at]
        
        @property { string } [_id]
        
        @property { string } [reason]
        
        @property { MarketplaceOrder } [marketplace_order]
        
        @property { string } [marketplace_order_id]
        
        @property { string } [created_at]
        
        @property { string } [app_id]
        
        @property { string } [marketplace]
        
        @property { number } [company_id]
        
         
    */

/**
        @typedef MarketplaceOrder
        
        
        @property { string } [order_status_url]
        
        @property { string } [admin_graphql_api_id]
        
        @property { string } [email]
        
        @property { boolean } [test]
        
        @property { string } [note]
        
        @property { string } [total_price]
        
        @property { number } [app_id]
        
        @property { TotalDiscountsSet } [total_discounts_set]
        
        @property { TotalPriceSet } [total_price_set]
        
        @property { TotalTaxSet } [total_tax_set]
        
        @property { string } [gateway]
        
        @property { string } [name]
        
        @property { SubtotalPriceSet } [subtotal_price_set]
        
        @property { number } [number]
        
        @property { boolean } [buyer_accepts_marketing]
        
        @property { string } [contact_email]
        
        @property { string } [token]
        
        @property { string } [source_name]
        
        @property { Array<any> } [payment_gateway_names]
        
        @property { string } [presentment_currency]
        
        @property { string } [subtotal_price]
        
        @property { string } [processed_at]
        
        @property { number } [order_number]
        
        @property { string } [total_tip_received]
        
        @property { number } [id]
        
        @property { boolean } [confirmed]
        
        @property { string } [currency]
        
        @property { string } [total_line_items_price]
        
        @property { LineItems } [line_items]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [total_weight]
        
        @property { BillingAddress } [billing_address]
        
        @property { TotalShippingPriceSet } [total_shipping_price_set]
        
        @property { Customer } [customer]
        
        @property { string } [total_discounts]
        
        @property { TotalLineItemsPriceSet } [total_line_items_price_set]
        
        @property { string } [tags]
        
        @property { string } [total_price_usd]
        
        @property { number } [user_id]
        
        @property { string } [total_tax]
        
        @property { string } [processing_method]
        
        @property { ShippingAddress } [shipping_address]
        
        @property { boolean } [taxes_included]
        
        @property { string } [financial_status]
        
         
    */

/**
        @typedef TotalDiscountsSet
        
        
        @property { PresentmentMoney } [presentment_money]
        
        @property { ShopMoney } [shop_money]
        
         
    */

/**
        @typedef PresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef ShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef TotalPriceSet
        
        
        @property { TotalPriceSetShopMoney } [shop_money]
        
        @property { TotalPriceSetPresentmentMoney } [presentment_money]
        
         
    */

/**
        @typedef TotalPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef TotalPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef TotalTaxSet
        
        
        @property { TotalTaxSetShopMoney } [shop_money]
        
        @property { TotalTaxSetPresentmentMoney } [presentment_money]
        
         
    */

/**
        @typedef TotalTaxSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef TotalTaxSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef SubtotalPriceSet
        
        
        @property { SubtotalPriceSetShopMoney } [shop_money]
        
        @property { SubtotalPriceSetPresentmentMoney } [presentment_money]
        
         
    */

/**
        @typedef SubtotalPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef SubtotalPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef LineItems
        
        
        @property { string } [sku]
        
        @property { number } [fulfillable_quantity]
        
        @property { number } [grams]
        
        @property { string } [total_discount]
        
        @property { LineItemsArticle } [article]
        
        @property { string } [title]
        
        @property { string } [variant_inventory_management]
        
        @property { number } [id]
        
        @property { number } [variant_id]
        
        @property { string } [variant_title]
        
        @property { boolean } [product_exists]
        
        @property { string } [price]
        
        @property { string } [admin_graphql_api_id]
        
        @property { number } [quantity]
        
        @property { string } [vendor]
        
        @property { string } [fulfillment_service]
        
        @property { boolean } [taxable]
        
        @property { string } [name]
        
        @property { number } [product_id]
        
        @property { PriceSet } [price_set]
        
        @property { TaxLines } [tax_lines]
        
        @property { boolean } [requires_shipping]
        
        @property { boolean } [gift_card]
        
        @property { TotalDiscountSet } [total_discount_set]
        
         
    */

/**
        @typedef LineItemsArticle
        
        
        @property { Quantities } [quantities]
        
        @property { string } [old_article_uid]
        
        @property { number } [total_quantity]
        
        @property { Manufacturer } [manufacturer]
        
        @property { ArticlePrice } [price]
        
        @property { boolean } [track_inventory]
        
        @property { Company } [company]
        
        @property { boolean } [is_active]
        
        @property { FailOrderDateMeta } [date_meta]
        
        @property { boolean } [fragile]
        
        @property { MarketplaceIdentifiers } [marketplace_identifiers]
        
        @property { string } [size]
        
        @property { boolean } [is_set]
        
        @property { Dimension } [dimension]
        
        @property { Weight } [weight]
        
        @property { Store } [store]
        
        @property { ArticleMeta } [meta]
        
        @property { string } [uid]
        
        @property { ArticleBrand } [brand]
        
        @property { number } [item_id]
        
        @property { string } [fynd_article_code]
        
        @property { string } [_id]
        
        @property { LineItemsArticleIdentifier } [identifier]
        
        @property { string } [seller_identifier]
        
        @property { string } [fynd_item_code]
        
        @property { string } [country_of_origin]
        
         
    */

/**
        @typedef Quantities
        
        
        @property { NotAvailable } [not_available]
        
        @property { Sellable } [sellable]
        
        @property { OrderCommitted } [order_committed]
        
        @property { Damaged } [damaged]
        
         
    */

/**
        @typedef NotAvailable
        
        
        @property { number } [count]
        
        @property { string } [updated_at]
        
         
    */

/**
        @typedef Sellable
        
        
        @property { number } [count]
        
        @property { string } [updated_at]
        
         
    */

/**
        @typedef OrderCommitted
        
        
        @property { number } [count]
        
        @property { string } [updated_at]
        
         
    */

/**
        @typedef Damaged
        
        
        @property { string } [updated_at]
        
        @property { number } [count]
        
         
    */

/**
        @typedef Manufacturer
        
        
        @property { boolean } [is_default]
        
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
        
        @property { string } [company_type]
        
        @property { string } [business_type]
        
        @property { string } [company_name]
        
        @property { string } [created_on]
        
        @property { string } [pan_no]
        
        @property { boolean } [return_allowed]
        
        @property { string } [meta]
        
        @property { boolean } [exchange_allowed]
        
        @property { string } [agreement_start_date]
        
        @property { number } [exchange_within_days]
        
        @property { number } [payment_procesing_charge]
        
        @property { boolean } [fynd_a_fit_available]
        
        @property { string } [modified_on]
        
        @property { number } [return_within_days]
        
         
    */

/**
        @typedef FailOrderDateMeta
        
        
        @property { string } [added_on_store]
        
        @property { string } [inventory_updated_on]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */

/**
        @typedef MarketplaceIdentifiers
        
        
        @property { TatacliqLuxury } [tatacliq_luxury]
        
         
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
        
        @property { boolean } [is_default]
        
         
    */

/**
        @typedef Weight
        
        
        @property { boolean } [is_default]
        
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
        
        
        @property { string } [sku_code]
        
         
    */

/**
        @typedef PriceSet
        
        
        @property { PriceSetShopMoney } [shop_money]
        
        @property { PriceSetPresentmentMoney } [presentment_money]
        
         
    */

/**
        @typedef PriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef PriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef TaxLines
        
        
        @property { string } [title]
        
        @property { string } [price]
        
        @property { number } [rate]
        
        @property { TaxLinesPriceSet } [price_set]
        
         
    */

/**
        @typedef TaxLinesPriceSet
        
        
        @property { TaxLinesPriceSetShopMoney } [shop_money]
        
        @property { TaxLinesPriceSetPresentmentMoney } [presentment_money]
        
         
    */

/**
        @typedef TaxLinesPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef TaxLinesPriceSetPresentmentMoney
        
        
        @property { string } [currency_code]
        
        @property { string } [amount]
        
         
    */

/**
        @typedef TotalDiscountSet
        
        
        @property { TotalDiscountSetPresentmentMoney } [presentment_money]
        
        @property { TotalDiscountSetShopMoney } [shop_money]
        
         
    */

/**
        @typedef TotalDiscountSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef TotalDiscountSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef BillingAddress
        
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [zip]
        
        @property { string } [last_name]
        
        @property { string } [address2]
        
        @property { number } [longitude]
        
        @property { string } [province_code]
        
        @property { string } [phone]
        
        @property { string } [company]
        
        @property { number } [latitude]
        
        @property { string } [name]
        
        @property { string } [country]
        
        @property { string } [country_code]
        
        @property { string } [first_name]
        
        @property { string } [province]
        
         
    */

/**
        @typedef TotalShippingPriceSet
        
        
        @property { TotalShippingPriceSetShopMoney } [shop_money]
        
        @property { TotalShippingPriceSetPresentmentMoney } [presentment_money]
        
         
    */

/**
        @typedef TotalShippingPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef TotalShippingPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef Customer
        
        
        @property { string } [created_at]
        
        @property { number } [id]
        
        @property { string } [last_name]
        
        @property { string } [state]
        
        @property { number } [last_order_id]
        
        @property { string } [note]
        
        @property { boolean } [verified_email]
        
        @property { string } [phone]
        
        @property { boolean } [accepts_marketing]
        
        @property { string } [first_name]
        
        @property { string } [tags]
        
        @property { string } [last_order_name]
        
        @property { number } [orders_count]
        
        @property { string } [total_spent]
        
        @property { boolean } [tax_exempt]
        
        @property { string } [currency]
        
        @property { string } [accepts_marketing_updated_at]
        
        @property { string } [email]
        
        @property { string } [updated_at]
        
        @property { string } [admin_graphql_api_id]
        
        @property { DefaultAddress } [default_address]
        
         
    */

/**
        @typedef DefaultAddress
        
        
        @property { string } [last_name]
        
        @property { string } [name]
        
        @property { string } [province_code]
        
        @property { string } [country_code]
        
        @property { boolean } [is_default]
        
        @property { number } [id]
        
        @property { number } [customer_id]
        
        @property { string } [first_name]
        
        @property { string } [address1]
        
        @property { string } [phone]
        
        @property { string } [country_name]
        
        @property { string } [company]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [province]
        
        @property { string } [country]
        
        @property { string } [zip]
        
         
    */

/**
        @typedef TotalLineItemsPriceSet
        
        
        @property { TotalLineItemsPriceSetShopMoney } [shop_money]
        
        @property { TotalLineItemsPriceSetPresentmentMoney } [presentment_money]
        
         
    */

/**
        @typedef TotalLineItemsPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef TotalLineItemsPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef ShippingAddress
        
        
        @property { string } [address1]
        
        @property { string } [zip]
        
        @property { string } [address2]
        
        @property { string } [country_code]
        
        @property { string } [country]
        
        @property { string } [last_name]
        
        @property { number } [latitude]
        
        @property { string } [province_code]
        
        @property { string } [first_name]
        
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
        
        @property { NextOrderStatus } next_order_status
        
        @property { PlatformOrderPage } page
        
        @property { AppliedFilters } applied_filters
        
         
    */

/**
        @typedef OrderItems
        
        
        @property { PlatformOrderUserInfo } [user]
        
        @property { PlatformDeliveryAddress } [delivery_address]
        
        @property { Channel } [channel]
        
        @property { PlatformBreakupValues } [breakup_values]
        
        @property { string } [id]
        
        @property { PlatformApplication } [application]
        
        @property { PlatformShipment } [shipments]
        
        @property { string } [created_at]
        
        @property { number } [total_shipments_in_order]
        
        @property { ItemsPayments } [payments]
        
         
    */

/**
        @typedef PlatformOrderUserInfo
        
        
        @property { string } [mobile]
        
        @property { string } [first_name]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [last_name]
        
        @property { boolean } [is_anonymous_user]
        
        @property { number } [uid]
        
        @property { string } [avis_user_id]
        
         
    */

/**
        @typedef PlatformDeliveryAddress
        
        
        @property { string } [area]
        
        @property { string } [state]
        
        @property { string } [country]
        
        @property { string } [version]
        
        @property { string } [address1]
        
        @property { number } [latitude]
        
        @property { string } [updated_at]
        
        @property { string } [city]
        
        @property { string } [landmark]
        
        @property { string } [created_at]
        
        @property { string } [name]
        
        @property { string } [address]
        
        @property { string } [phone]
        
        @property { number } [longitude]
        
        @property { string } [address_type]
        
        @property { string } [email]
        
        @property { string } [pincode]
        
        @property { string } [address2]
        
        @property { string } [contact_person]
        
        @property { string } [address_category]
        
         
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
        
        @property { boolean } [post_order_reassignment]
        
        @property { string } [id]
        
        @property { string } [description]
        
        @property { boolean } [dp_assignment]
        
        @property { ArticleAssignment } [article_assignment]
        
        @property { boolean } [force_reassignment]
        
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
        
        @property { ShipmentBreakupValues } [breakup_values]
        
        @property { string } [id]
        
        @property { DpDetails } [dp_details]
        
        @property { ShipmentInvoice } [invoice]
        
        @property { PlatformFulfillingStore } [fulfilling_store]
        
        @property { Payments } [payments]
        
        @property { ShipmentGst } [gst]
        
        @property { Company } [company]
        
        @property { PlatformShipmentBrand } [brand]
        
        @property { Object } [coupon]
        
        @property { string } [order_source]
        
        @property { boolean } [is_not_fynd_source]
        
        @property { string } [comment]
        
        @property { Promise } [promise]
        
        @property { ShipmentTrackingDetails } [tracking_details]
        
        @property { boolean } [is_fynd_coupon]
        
        @property { string } [order_type]
        
        @property { ShipmentUser } [user]
        
         
    */

/**
        @typedef PlatformShipmentStatus
        
        
        @property { number } [id]
        
        @property { Array<number> } [bag_list]
        
        @property { string } [created_at]
        
        @property { string } [status]
        
        @property { string } [name]
        
        @property { number } [progress]
        
        @property { string } [shipment_id]
        
        @property { string } [current_shipment_status]
        
        @property { string } [color_code]
        
         
    */

/**
        @typedef Bags
        
        
        @property { Array<BagFinancialBreakup> } [financial_breakup]
        
        @property { BagCurrStatus } [status]
        
        @property { BagItem } [item]
        
        @property { BagArticle } [article]
        
        @property { number } [id]
        
        @property { BagPrices } [prices]
        
        @property { GstDetails } [gst_details]
        
        @property { BagBreakupValues } [breakup_values]
        
        @property { number } [update_time]
        
        @property { BagCurrentStatus } [current_status]
        
        @property { BagStatus } [bag_status]
        
         
    */

/**
        @typedef BagFinancialBreakup
        
        
        @property { number } [value_of_good]
        
        @property { string } [hsn_code]
        
        @property { number } [price_effective]
        
        @property { number } [cod_charges]
        
        @property { string } [gst_fee]
        
        @property { number } [fynd_credits]
        
        @property { number } [refund_amount]
        
        @property { number } [cashback_applied]
        
        @property { number } [transfer_price]
        
        @property { number } [amount_paid_roundoff]
        
        @property { number } [coupon_value]
        
        @property { number } [amount_paid]
        
        @property { number } [gst_tax_percentage]
        
        @property { string } [size]
        
        @property { number } [total_units]
        
        @property { number } [discount]
        
        @property { number } [coupon_effective_discount]
        
        @property { number } [cashback]
        
        @property { number } [promotion_effective_discount]
        
        @property { string } [gst_tag]
        
        @property { number } [delivery_charge]
        
        @property { number } [refund_credit]
        
        @property { number } [price_marked]
        
        @property { Identifiers } [identifiers]
        
        @property { string } [item_name]
        
        @property { boolean } [added_to_fynd_cash]
        
        @property { number } [brand_calculated_amount]
        
         
    */

/**
        @typedef Identifiers
        
        
        @property { string } [ean]
        
         
    */

/**
        @typedef BagCurrStatus
        
        
        @property { boolean } [enable_tracking]
        
        @property { boolean } [is_customer_return_allowed]
        
        @property { boolean } [is_active]
        
        @property { boolean } [is_returnable]
        
        @property { boolean } [can_be_cancelled]
        
         
    */

/**
        @typedef BagItem
        
        
        @property { number } [id]
        
        @property { string } [size]
        
        @property { string } [slug_key]
        
        @property { boolean } [can_return]
        
        @property { number } [brand_id]
        
        @property { Array<string> } [l2_category]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { boolean } [can_cancel]
        
        @property { BagItemAttributes } [attributes]
        
        @property { string } [l3_category_name]
        
        @property { number } [l3_category]
        
        @property { Array<string> } [l1_category]
        
        @property { Array<string> } [image]
        
        @property { string } [brand]
        
        @property { string } [last_updated_at]
        
         
    */

/**
        @typedef BagItemAttributes
        
        
        @property { string } [item_code]
        
        @property { string } [brand_name]
        
        @property { string } [country_of_origin]
        
         
    */

/**
        @typedef BagArticle
        
        
        @property { ArticleIdentifiers } [identifiers]
        
        @property { boolean } [esp_modified]
        
        @property { boolean } [is_set]
        
        @property { string } [size]
        
        @property { string } [code]
        
        @property { Set } [set]
        
        @property { string } [seller_identifier]
        
        @property { BagArticleReturnConfig } [return_config]
        
        @property { string } [_id]
        
        @property { string } [uid]
        
        @property { Object } [child_details]
        
         
    */

/**
        @typedef ArticleIdentifiers
        
        
        @property { string } [ean]
        
         
    */

/**
        @typedef Set
        
        
        @property { number } [quantity]
        
        @property { SetSizeDistribution } [size_distribution]
        
         
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
        
        
        @property { number } [refund_amount]
        
        @property { number } [cashback_applied]
        
        @property { number } [transfer_price]
        
        @property { number } [coupon_value]
        
        @property { number } [amount_paid]
        
        @property { number } [delivery_charge]
        
        @property { number } [coupon_effective_discount]
        
        @property { number } [cod_charges]
        
        @property { number } [refund_credit]
        
        @property { boolean } [added_to_fynd_cash]
        
        @property { number } [gst_tax_percentage]
        
        @property { number } [price_marked]
        
        @property { number } [price_effective]
        
        @property { number } [discount]
        
        @property { number } [promotion_effective_discount]
        
        @property { number } [amount_paid_roundoff]
        
        @property { number } [fynd_credits]
        
        @property { number } [brand_calculated_amount]
        
        @property { number } [cashback]
        
        @property { number } [value_of_good]
        
         
    */

/**
        @typedef GstDetails
        
        
        @property { number } [brand_calculated_amount]
        
        @property { string } [gst_fee]
        
        @property { string } [gst_tag]
        
        @property { string } [hsn_code]
        
        @property { number } [value_of_good]
        
        @property { number } [gst_tax_percentage]
        
        @property { boolean } [is_default_hsn_code]
        
         
    */

/**
        @typedef BagBreakupValues
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { number } [value]
        
         
    */

/**
        @typedef BagCurrentStatus
        
        
        @property { string } [updated_at]
        
        @property { BagStateMapper } [bag_state_mapper]
        
        @property { string } [status]
        
        @property { string } [state_type]
        
         
    */

/**
        @typedef BagStateMapper
        
        
        @property { string } [app_state_name]
        
        @property { boolean } [is_active]
        
        @property { string } [display_name]
        
        @property { string } [name]
        
        @property { string } [app_display_name]
        
         
    */

/**
        @typedef BagStatus
        
        
        @property { string } [status]
        
        @property { string } [state_type]
        
        @property { string } [updated_at]
        
        @property { BagStatusBagStateMapper } [bag_state_mapper]
        
         
    */

/**
        @typedef BagStatusBagStateMapper
        
        
        @property { boolean } [is_active]
        
        @property { string } [display_name]
        
        @property { string } [name]
        
        @property { string } [app_display_name]
        
        @property { string } [app_state_name]
        
         
    */

/**
        @typedef BagPrices
        
        
        @property { number } [cashback]
        
        @property { number } [refund_credit]
        
        @property { number } [coupon_value]
        
        @property { number } [delivery_charge]
        
        @property { number } [fynd_credits]
        
        @property { number } [price_marked]
        
        @property { number } [cashback_applied]
        
        @property { number } [value_of_good]
        
        @property { number } [amount_paid_roundoff]
        
        @property { number } [amount_paid]
        
        @property { number } [cod_charges]
        
        @property { number } [price_effective]
        
        @property { number } [refund_amount]
        
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
        
        
        @property { string } [gst_tag]
        
         
    */

/**
        @typedef ShipmentInvoice
        
        
        @property { string } [payment_type]
        
        @property { string } [updated_date]
        
        @property { string } [invoice_url]
        
        @property { string } [label_url]
        
        @property { string } [payment_mode]
        
        @property { number } [amount_to_collect]
        
        @property { RtoAddress } [rto_address]
        
         
    */

/**
        @typedef RtoAddress
        
        
        @property { string } [name]
        
        @property { number } [id]
        
        @property { string } [phone]
        
        @property { string } [location_type]
        
        @property { StoreAddressJson } [store_address_json]
        
        @property { string } [code]
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { string } [pincode]
        
        @property { number } [company_id]
        
        @property { string } [contact_person]
        
        @property { string } [state]
        
        @property { string } [store_email]
        
        @property { string } [address2]
        
         
    */

/**
        @typedef StoreAddressJson
        
        
        @property { string } [country]
        
        @property { number } [latitude]
        
        @property { string } [updated_at]
        
        @property { string } [area]
        
        @property { string } [state]
        
        @property { string } [address_type]
        
        @property { string } [city]
        
        @property { string } [pincode]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { number } [longitude]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { string } [created_at]
        
        @property { string } [contact_person]
        
        @property { string } [address_category]
        
        @property { string } [version]
        
        @property { string } [landmark]
        
         
    */

/**
        @typedef PlatformFulfillingStore
        
        
        @property { number } [packaging_material_count]
        
        @property { string } [location_type]
        
        @property { string } [code]
        
        @property { string } [city]
        
        @property { FulfillingStoreMeta } [meta]
        
        @property { string } [name]
        
        @property { boolean } [is_active]
        
        @property { string } [address1]
        
        @property { string } [store_email]
        
        @property { boolean } [is_archived]
        
        @property { string } [state]
        
        @property { string } [address2]
        
        @property { string } [contact_person]
        
        @property { string } [phone]
        
        @property { boolean } [is_enabled_for_recon]
        
        @property { string } [fulfillment_channel]
        
        @property { string } [created_at]
        
        @property { number } [id]
        
        @property { string } [pincode]
        
        @property { Array<string> } [brand_store_tags]
        
        @property { number } [company_id]
        
        @property { FulfillingStoreStoreAddressJson } [store_address_json]
        
        @property { string } [updated_at]
        
        @property { string } [login_username]
        
        @property { string } [country]
        
         
    */

/**
        @typedef FulfillingStoreMeta
        
        
        @property { AdditionalContactDetails } [additional_contact_details]
        
        @property { Documents } [documents]
        
        @property { string } [gst_number]
        
        @property { string } [display_name]
        
        @property { ProductReturnConfig } [product_return_config]
        
        @property { boolean } [allow_dp_assignment_from_fynd]
        
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
        
        
        @property { string } [legal_name]
        
        @property { string } [type]
        
        @property { string } [value]
        
        @property { boolean } [verified]
        
         
    */

/**
        @typedef ProductReturnConfig
        
        
        @property { boolean } [on_same_store]
        
         
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
        
        @property { string } [contact_person]
        
        @property { string } [country]
        
        @property { string } [pincode]
        
        @property { string } [version]
        
        @property { string } [created_at]
        
        @property { string } [address_type]
        
        @property { string } [city]
        
        @property { string } [address1]
        
        @property { string } [landmark]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [updated_at]
        
        @property { string } [address_category]
        
         
    */

/**
        @typedef Payments
        
        
        @property { boolean } [is_active]
        
        @property { string } [display_name]
        
        @property { string } [logo]
        
        @property { string } [source]
        
        @property { string } [source_nickname]
        
        @property { number } [display_priority]
        
        @property { number } [id]
        
        @property { string } [mode]
        
        @property { string } [payment_identifier]
        
         
    */

/**
        @typedef ShipmentGst
        
        
        @property { number } [brand_calculated_amount]
        
        @property { number } [value_of_good]
        
        @property { number } [gst_fee]
        
         
    */

/**
        @typedef PlatformShipmentBrand
        
        
        @property { boolean } [credit_note_allowed]
        
        @property { string } [brand_name]
        
        @property { string } [modified_on]
        
        @property { number } [id]
        
        @property { boolean } [is_virtual_invoice]
        
        @property { string } [created_on]
        
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
        
        @property { boolean } [is_passed]
        
        @property { boolean } [is_current]
        
         
    */

/**
        @typedef ShipmentUser
        
        
        @property { string } [email]
        
        @property { number } [id]
        
        @property { string } [first_name]
        
        @property { string } [mobile]
        
        @property { string } [gender]
        
        @property { string } [last_name]
        
        @property { boolean } [is_anonymous_user]
        
        @property { string } [mongo_user_id]
        
         
    */

/**
        @typedef ItemsPayments
        
        
        @property { number } [display_priority]
        
        @property { number } [id]
        
        @property { boolean } [is_active]
        
        @property { string } [display_name]
        
        @property { string } [logo]
        
        @property { string } [payment_identifier]
        
        @property { string } [source_nickname]
        
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
        
        @property { boolean } [is_default]
        
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
        
        
        @property { BagConfirmed } [bag_confirmed]
        
        @property { DpAssigned } [dp_assigned]
        
        @property { ReturnBagDelivered } [return_bag_delivered]
        
        @property { Placed } [placed]
        
        @property { DeliveryDone } [delivery_done]
        
        @property { Pending } [pending]
        
        @property { BagPacked } [bag_packed]
        
         
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
        
        @property { boolean } [has_next]
        
        @property { ItemTotal } [item_total]
        
         
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
        
        @property { string } [from_date]
        
        @property { string } [to_date]
        
         
    */

/**
        @typedef UpdateOrderReprocessResponse
        
        
        @property { string } status
        
         
    */

/**
        @typedef PlatformOrderTrack
        
        
        @property { boolean } success
        
        @property { string } request_id
        
        @property { string } message
        
        @property { string } mobile
        
        @property { string } country_code
        
        @property { number } resend_timer
        
        @property { string } [resend_token]
        
         
    */

/**
        @typedef GetPingResponse
        
        
        @property { string } ping
        
         
    */

/**
        @typedef UpdateShipmentStatusResponse
        
        
        @property { Object } shipments
        
        @property { Array<any> } [error_shipments]
        
         
    */

/**
        @typedef UpdateShipmentStatusBody
        
        
        @property { Object } shipments
        
        @property { boolean } force_transition
        
        @property { boolean } task
        
         
    */

/**
        @typedef PlatformShipmentTrack
        
        
        @property { Results } results
        
         
    */

/**
        @typedef Results
        
        
        @property { string } [awb]
        
        @property { string } [updated_at]
        
        @property { string } [last_location_recieved_at]
        
        @property { string } [reason]
        
        @property { string } [shipment_type]
        
        @property { string } [status]
        
        @property { string } [updated_time]
        
        @property { string } [account_name]
        
         
    */

/**
        @typedef UpdateProcessShipmenstRequestBody
        
        
        @property { Array<string> } shipment_ids
        
        @property { string } expected_status
        
         
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
        
        
        @property { number } [status]
        
        @property { string } [message]
        
        @property { string } [code]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef GetSearchWordsData
        
        
        @property { string } [uid]
        
        @property { Array<string> } [words]
        
        @property { Object } [result]
        
        @property { Object } [_custom_json]
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef GetSearchWordsDetailResponse
        
        
        @property { Page } [page]
        
        @property { GetSearchWordsData } [items]
        
         
    */

/**
        @typedef SearchKeywordResult
        
        
        @property { Object } query
        
        @property { string } sort_on
        
         
    */

/**
        @typedef CreateSearchKeyword
        
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [words]
        
        @property { SearchKeywordResult } result
        
        @property { Object } [_custom_json]
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef GetSearchWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetSearchWordsData> } [items]
        
         
    */

/**
        @typedef GetAutocompleteWordsData
        
        
        @property { string } [uid]
        
        @property { Array<string> } [words]
        
        @property { Array<Object> } [results]
        
        @property { Object } [_custom_json]
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef GetAutocompleteWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetAutocompleteWordsData> } [items]
        
         
    */

/**
        @typedef AutocompletePageAction
        
        
        @property { Object } query
        
        @property { string } type
        
        @property { Object } [params]
        
        @property { string } [url]
        
         
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
        
        
        @property { Object } [_custom_json]
        
        @property { string } [display]
        
        @property { AutocompleteAction } [action]
        
        @property { Media } [logo]
        
         
    */

/**
        @typedef CreateAutocompleteKeyword
        
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [words]
        
        @property { Array<AutocompleteResult> } [results]
        
        @property { Object } [_custom_json]
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef CreateAutocompleteWordsResponse
        
        
        @property { Array<string> } [words]
        
        @property { Object } [_custom_json]
        
        @property { string } [app_id]
        
        @property { Array<Object> } [results]
        
         
    */

/**
        @typedef ProductBundleItem
        
        
        @property { boolean } [auto_add_to_cart]
        
        @property { boolean } [allow_remove]
        
        @property { number } product_uid
        
        @property { boolean } [auto_select]
        
        @property { number } max_quantity
        
        @property { number } min_quantity
        
         
    */

/**
        @typedef GetProductBundleCreateResponse
        
        
        @property { string } choice
        
        @property { string } slug
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { boolean } [same_store_assignment]
        
        @property { Object } [created_by]
        
        @property { string } name
        
        @property { Object } [modified_by]
        
        @property { boolean } is_active
        
        @property { string } [id]
        
        @property { Array<string> } [page_visibility]
        
        @property { Array<ProductBundleItem> } products
        
        @property { number } [company_id]
        
        @property { string } [modified_on]
        
        @property { string } [created_on]
        
         
    */

/**
        @typedef GetProductBundleListingResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetProductBundleCreateResponse> } [items]
        
         
    */

/**
        @typedef ProductBundleRequest
        
        
        @property { string } choice
        
        @property { string } slug
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { boolean } [same_store_assignment]
        
        @property { Object } [created_by]
        
        @property { string } name
        
        @property { Object } [modified_by]
        
        @property { boolean } is_active
        
        @property { Array<string> } [page_visibility]
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } [modified_on]
        
        @property { string } [created_on]
        
         
    */

/**
        @typedef Size
        
        
        @property { number } [quantity]
        
        @property { string } [display]
        
        @property { boolean } [is_available]
        
        @property { string } [value]
        
         
    */

/**
        @typedef LimitedProductData
        
        
        @property { Object } [attributes]
        
        @property { number } [uid]
        
        @property { Array<string> } [sizes]
        
        @property { string } [slug]
        
        @property { Object } [identifier]
        
        @property { number } [quantity]
        
        @property { string } [name]
        
        @property { string } [short_description]
        
        @property { string } [country_of_origin]
        
        @property { string } [item_code]
        
        @property { Array<string> } [images]
        
        @property { Object } [price]
        
         
    */

/**
        @typedef Price
        
        
        @property { number } [max_effective]
        
        @property { number } [min_marked]
        
        @property { number } [min_effective]
        
        @property { string } [currency]
        
        @property { number } [max_marked]
        
         
    */

/**
        @typedef GetProducts
        
        
        @property { Array<Size> } [sizes]
        
        @property { boolean } [allow_remove]
        
        @property { boolean } [auto_add_to_cart]
        
        @property { number } [product_uid]
        
        @property { LimitedProductData } [product_details]
        
        @property { boolean } [auto_select]
        
        @property { number } [max_quantity]
        
        @property { number } [min_quantity]
        
        @property { Price } [price]
        
         
    */

/**
        @typedef GetProductBundleResponse
        
        
        @property { string } [choice]
        
        @property { string } [slug]
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { boolean } [same_store_assignment]
        
        @property { string } [name]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [page_visibility]
        
        @property { Array<GetProducts> } [products]
        
        @property { number } [company_id]
        
         
    */

/**
        @typedef ProductBundleUpdateRequest
        
        
        @property { string } choice
        
        @property { string } slug
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { boolean } [same_store_assignment]
        
        @property { string } name
        
        @property { Object } [modified_by]
        
        @property { boolean } is_active
        
        @property { Array<string> } [page_visibility]
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } [modified_on]
        
         
    */

/**
        @typedef ListSizeGuide
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */

/**
        @typedef Meta
        
        
        @property { string } [unit]
        
        @property { Array<Object> } [values]
        
        @property { Object } [headers]
        
         
    */

/**
        @typedef Guide
        
        
        @property { Meta } [meta]
        
         
    */

/**
        @typedef ValidateSizeGuide
        
        
        @property { string } [id]
        
        @property { string } name
        
        @property { string } [subtitle]
        
        @property { Object } [modified_by]
        
        @property { string } title
        
        @property { boolean } [active]
        
        @property { string } [description]
        
        @property { number } [brand_id]
        
        @property { string } [modified_on]
        
        @property { number } [company_id]
        
        @property { Object } [created_by]
        
        @property { string } [tag]
        
        @property { string } [created_on]
        
        @property { Guide } [guide]
        
        @property { string } [image]
        
         
    */

/**
        @typedef SuccessResponse
        
        
        @property { number } [uid]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef SizeGuideResponse
        
        
        @property { Object } [created_by]
        
        @property { string } [id]
        
        @property { Object } [modified_by]
        
        @property { string } [name]
        
        @property { string } [subtitle]
        
        @property { string } [title]
        
        @property { boolean } [active]
        
        @property { number } [brand_id]
        
        @property { number } [company_id]
        
        @property { string } [modified_on]
        
        @property { string } [tag]
        
        @property { string } [created_on]
        
        @property { Object } [guide]
        
         
    */

/**
        @typedef MetaDataListingFilterMetaResponse
        
        
        @property { string } [display]
        
        @property { string } [key]
        
        @property { Array<string> } [filter_types]
        
        @property { Array<Object> } [units]
        
         
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
        @typedef GetCatalogConfigurationDetailsProduct
        
        
        @property { Object } [variant]
        
        @property { Object } [compare]
        
        @property { Object } [similar]
        
        @property { Object } [detail]
        
         
    */

/**
        @typedef GetCatalogConfigurationMetaData
        
        
        @property { MetaDataListingResponse } [listing]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
         
    */

/**
        @typedef ProductSize
        
        
        @property { number } min
        
        @property { number } max
        
         
    */

/**
        @typedef ConfigurationProductVariantConfig
        
        
        @property { string } [logo]
        
        @property { string } name
        
        @property { boolean } is_active
        
        @property { string } key
        
        @property { ProductSize } size
        
        @property { number } priority
        
        @property { string } display_type
        
         
    */

/**
        @typedef ConfigurationProductVariant
        
        
        @property { Array<ConfigurationProductVariantConfig> } [config]
        
         
    */

/**
        @typedef ConfigurationProductConfig
        
        
        @property { string } [logo]
        
        @property { string } [subtitle]
        
        @property { boolean } is_active
        
        @property { string } key
        
        @property { string } [title]
        
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
        @typedef ConfigurationBucketPoints
        
        
        @property { number } [end]
        
        @property { number } [start]
        
         
    */

/**
        @typedef ConfigurationListingFilterValue
        
        
        @property { Object } [map]
        
        @property { string } [sort]
        
        @property { Array<ConfigurationBucketPoints> } [bucket_points]
        
        @property { string } [value]
        
        @property { string } [condition]
        
         
    */

/**
        @typedef ConfigurationListingFilterConfig
        
        
        @property { string } type
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { boolean } is_active
        
        @property { string } key
        
        @property { number } priority
        
        @property { ConfigurationListingFilterValue } [value_config]
        
         
    */

/**
        @typedef ConfigurationListingFilter
        
        
        @property { boolean } allow_single
        
        @property { Array<ConfigurationListingFilterConfig> } [attribute_config]
        
         
    */

/**
        @typedef ConfigurationListingSortConfig
        
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { boolean } is_active
        
        @property { string } key
        
        @property { number } priority
        
         
    */

/**
        @typedef ConfigurationListingSort
        
        
        @property { string } default_key
        
        @property { Array<ConfigurationListingSortConfig> } [config]
        
         
    */

/**
        @typedef ConfigurationListing
        
        
        @property { ConfigurationListingFilter } filter
        
        @property { ConfigurationListingSort } sort
        
         
    */

/**
        @typedef AppCatalogConfiguration
        
        
        @property { string } [config_id]
        
        @property { string } config_type
        
        @property { string } [id]
        
        @property { ConfigurationProduct } [product]
        
        @property { ConfigurationListing } [listing]
        
        @property { string } app_id
        
         
    */

/**
        @typedef GetAppCatalogConfiguration
        
        
        @property { boolean } [is_default]
        
        @property { AppCatalogConfiguration } [data]
        
         
    */

/**
        @typedef AppConfiguration
        
        
        @property { string } [config_id]
        
        @property { string } config_type
        
        @property { ConfigurationProduct } [product]
        
        @property { ConfigurationListing } [listing]
        
        @property { string } app_id
        
         
    */

/**
        @typedef GetCatalogConfigurationDetailsSchemaListing
        
        
        @property { Object } [filter]
        
        @property { Object } [sort]
        
         
    */

/**
        @typedef EntityConfiguration
        
        
        @property { string } [config_id]
        
        @property { string } config_type
        
        @property { string } [id]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { GetCatalogConfigurationDetailsSchemaListing } [listing]
        
        @property { string } app_id
        
         
    */

/**
        @typedef GetAppCatalogEntityConfiguration
        
        
        @property { boolean } [is_default]
        
        @property { EntityConfiguration } [data]
        
         
    */

/**
        @typedef ProductSortOn
        
        
        @property { string } [name]
        
        @property { boolean } [is_selected]
        
        @property { string } [value]
        
         
    */

/**
        @typedef ProductFiltersKey
        
        
        @property { string } name
        
        @property { string } display
        
        @property { string } [logo]
        
        @property { string } [kind]
        
         
    */

/**
        @typedef ProductFiltersValue
        
        
        @property { number } [count]
        
        @property { string } display
        
        @property { number } [min]
        
        @property { string } [display_format]
        
        @property { string } [currency_symbol]
        
        @property { string } [currency_code]
        
        @property { number } [selected_max]
        
        @property { boolean } is_selected
        
        @property { string } [query_format]
        
        @property { string } value
        
        @property { number } [selected_min]
        
        @property { number } [max]
        
         
    */

/**
        @typedef ProductFilters
        
        
        @property { ProductFiltersKey } key
        
        @property { Array<ProductFiltersValue> } values
        
         
    */

/**
        @typedef GetCollectionQueryOptionResponse
        
        
        @property { Array<ProductSortOn> } [sort_on]
        
        @property { Array<ProductFilters> } [filters]
        
         
    */

/**
        @typedef BannerImage
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [url]
        
         
    */

/**
        @typedef ImageUrls
        
        
        @property { BannerImage } [portrait]
        
        @property { BannerImage } [landscape]
        
         
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
        @typedef Media1
        
        
        @property { string } [type]
        
        @property { Object } [meta]
        
        @property { string } url
        
         
    */

/**
        @typedef GetCollectionDetailNest
        
        
        @property { Object } [meta]
        
        @property { Object } [cron]
        
        @property { boolean } [is_active]
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { Object } [_schedule]
        
        @property { string } [description]
        
        @property { ProductListingAction } [action]
        
        @property { string } [type]
        
        @property { boolean } [allow_sort]
        
        @property { Object } [badge]
        
        @property { Array<string> } [tag]
        
        @property { string } [app_id]
        
        @property { string } [uid]
        
        @property { string } [slug]
        
        @property { Media1 } [logo]
        
        @property { Object } [query]
        
        @property { boolean } [allow_facets]
        
         
    */

/**
        @typedef CollectionListingFilterType
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { boolean } [is_selected]
        
         
    */

/**
        @typedef CollectionListingFilterTag
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { boolean } [is_selected]
        
         
    */

/**
        @typedef CollectionListingFilter
        
        
        @property { Array<CollectionListingFilterType> } [type]
        
        @property { Array<CollectionListingFilterTag> } [tags]
        
         
    */

/**
        @typedef GetCollectionListingResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetCollectionDetailNest> } [items]
        
        @property { CollectionListingFilter } [filters]
        
         
    */

/**
        @typedef CollectionImage
        
        
        @property { string } aspect_ratio
        
        @property { string } url
        
         
    */

/**
        @typedef CollectionBanner
        
        
        @property { CollectionImage } portrait
        
        @property { CollectionImage } landscape
        
         
    */

/**
        @typedef SeoDetail
        
        
        @property { string } [description]
        
        @property { string } [title]
        
         
    */

/**
        @typedef Schedule
        
        
        @property { string } [cron]
        
        @property { number } [duration]
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef UserInfo
        
        
        @property { string } [username]
        
        @property { string } [uid]
        
        @property { string } [user_id]
        
        @property { string } [email]
        
         
    */

/**
        @typedef CollectionBadge
        
        
        @property { string } [text]
        
        @property { string } [color]
        
         
    */

/**
        @typedef CreateCollection
        
        
        @property { Object } [meta]
        
        @property { Array<string> } [tags]
        
        @property { boolean } [is_active]
        
        @property { CollectionBanner } banners
        
        @property { SeoDetail } [seo]
        
        @property { string } name
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { Schedule } [_schedule]
        
        @property { string } [description]
        
        @property { string } [sort_on]
        
        @property { Object } [_custom_json]
        
        @property { boolean } [published]
        
        @property { string } type
        
        @property { boolean } [allow_sort]
        
        @property { UserInfo } [created_by]
        
        @property { CollectionBadge } [badge]
        
        @property { Object } [_locale_language]
        
        @property { string } app_id
        
        @property { string } slug
        
        @property { CollectionImage } logo
        
        @property { UserInfo } [modified_by]
        
        @property { Object } [query]
        
        @property { boolean } [allow_facets]
        
         
    */

/**
        @typedef CollectionCreateResponse
        
        
        @property { string } [app_id]
        
        @property { string } [type]
        
        @property { string } [slug]
        
        @property { Object } [meta]
        
        @property { BannerImage } [logo]
        
        @property { Object } [cron]
        
        @property { string } [name]
        
        @property { boolean } [allow_sort]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { Object } [badge]
        
        @property { Object } [query]
        
        @property { Object } [_schedule]
        
        @property { boolean } [allow_facets]
        
        @property { string } [description]
        
        @property { Array<string> } [tag]
        
        @property { ImageUrls } [banners]
        
         
    */

/**
        @typedef CollectionDetailResponse
        
        
        @property { string } [app_id]
        
        @property { string } [type]
        
        @property { string } [slug]
        
        @property { Object } [meta]
        
        @property { Media1 } [logo]
        
        @property { Object } [cron]
        
        @property { string } [name]
        
        @property { boolean } [allow_sort]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { Object } [badge]
        
        @property { Object } [query]
        
        @property { Object } [_schedule]
        
        @property { boolean } [allow_facets]
        
        @property { string } [description]
        
        @property { Array<string> } [tag]
        
        @property { ImageUrls } [banners]
        
         
    */

/**
        @typedef Price1
        
        
        @property { string } [currency_symbol]
        
        @property { number } [min]
        
        @property { string } [currency_code]
        
        @property { number } [max]
        
         
    */

/**
        @typedef ProductListingPrice
        
        
        @property { Price1 } [effective]
        
        @property { Price1 } [marked]
        
         
    */

/**
        @typedef ProductListingDetail
        
        
        @property { Object } [attributes]
        
        @property { Array<string> } [tryouts]
        
        @property { number } [rating_count]
        
        @property { string } [image_nature]
        
        @property { ProductListingPrice } [price]
        
        @property { boolean } [sellable]
        
        @property { string } [name]
        
        @property { Object } [promo_meta]
        
        @property { string } [short_description]
        
        @property { string } [description]
        
        @property { number } [rating]
        
        @property { boolean } [has_variant]
        
        @property { string } [type]
        
        @property { Array<Media1> } [medias]
        
        @property { string } [discount]
        
        @property { string } [product_online_date]
        
        @property { string } [color]
        
        @property { Array<string> } [similars]
        
        @property { number } [uid]
        
        @property { string } slug
        
        @property { Object } [teaser_tag]
        
        @property { string } [item_type]
        
        @property { Array<string> } [highlights]
        
         
    */

/**
        @typedef GetCollectionItemsResponse
        
        
        @property { Array<ProductSortOn> } [sort_on]
        
        @property { Page } [page]
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Array<ProductFilters> } [filters]
        
         
    */

/**
        @typedef CollectionItemRequest
        
        
        @property { number } page_size
        
        @property { number } page_no
        
         
    */

/**
        @typedef UpdatedResponse
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef CatalogInsightItem
        
        
        @property { number } [sellable_count]
        
        @property { number } [count]
        
        @property { number } [out_of_stock_count]
        
         
    */

/**
        @typedef CatalogInsightBrand
        
        
        @property { number } [available_sizes]
        
        @property { string } [name]
        
        @property { number } [total_articles]
        
        @property { number } [article_freshness]
        
        @property { number } [total_sizes]
        
        @property { number } [available_articles]
        
         
    */

/**
        @typedef CatalogInsightResponse
        
        
        @property { CatalogInsightItem } [item]
        
        @property { CatalogInsightBrand } [brand_distribution]
        
         
    */

/**
        @typedef CrossSellingData
        
        
        @property { number } [articles]
        
        @property { number } [products]
        
         
    */

/**
        @typedef CrossSellingResponse
        
        
        @property { CatalogInsightBrand } [brand_distribution]
        
        @property { CrossSellingData } [data]
        
         
    */

/**
        @typedef OptInPostRequest
        
        
        @property { boolean } [enabled]
        
        @property { Array<number> } [brand_ids]
        
        @property { string } opt_level
        
        @property { Array<number> } [store_ids]
        
         
    */

/**
        @typedef CompanyOptIn
        
        
        @property { Array<number> } store_ids
        
        @property { Object } [created_by]
        
        @property { Object } [modified_by]
        
        @property { number } created_on
        
        @property { string } platform
        
        @property { boolean } enabled
        
        @property { number } company_id
        
        @property { number } modified_on
        
        @property { Array<number> } brand_ids
        
        @property { string } opt_level
        
         
    */

/**
        @typedef GetOptInPlatform
        
        
        @property { Page } page
        
        @property { Array<CompanyOptIn> } items
        
         
    */

/**
        @typedef OptinCompanyDetail
        
        
        @property { number } [uid]
        
        @property { string } [company_type]
        
        @property { string } [business_type]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CompanyBrandDetail
        
        
        @property { number } [company_id]
        
        @property { number } [brand_id]
        
        @property { number } [total_article]
        
        @property { string } [brand_name]
        
         
    */

/**
        @typedef OptinCompanyBrandDetailsView
        
        
        @property { Page } [page]
        
        @property { Array<CompanyBrandDetail> } [items]
        
         
    */

/**
        @typedef OptinCompanyMetrics
        
        
        @property { string } [company]
        
        @property { number } [store]
        
        @property { number } [brand]
        
         
    */

/**
        @typedef StoreDetail
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { Array<Object> } [additional_contacts]
        
        @property { Array<Object> } [documents]
        
        @property { string } [store_type]
        
        @property { string } [store_code]
        
        @property { string } [display_name]
        
        @property { number } [company_id]
        
        @property { string } [modified_on]
        
        @property { string } [created_on]
        
        @property { Object } [timing]
        
         
    */

/**
        @typedef OptinStoreDetails
        
        
        @property { Page } [page]
        
        @property { Array<StoreDetail> } [items]
        
         
    */

/**
        @typedef BasePage
        
        
        @property { string } [type]
        
        @property { string } [next_id]
        
        @property { number } [item_total]
        
        @property { boolean } [has_next]
        
        @property { boolean } [has_previous]
        
        @property { number } [size]
        
        @property { number } [current]
        
         
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
        
        @property { string } [code]
        
        @property { number } [status]
        
        @property { string } [message]
        
        @property { Object } [errors]
        
         
    */

/**
        @typedef BasePage1
        
        
        @property { string } [type]
        
        @property { string } [next_id]
        
        @property { number } [item_total]
        
        @property { boolean } [has_next]
        
        @property { boolean } [has_previous]
        
        @property { number } [size]
        
        @property { number } [current]
        
         
    */

/**
        @typedef UserSerializer
        
        
        @property { string } [contact]
        
        @property { string } [user_id]
        
        @property { string } [username]
        
         
    */

/**
        @typedef GetDepartment
        
        
        @property { number } [uid]
        
        @property { string } [slug]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [logo]
        
        @property { UserSerializer } [created_by]
        
        @property { string } [name]
        
        @property { UserSerializer } [modified_by]
        
        @property { boolean } [is_active]
        
        @property { string } [item_type]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
        @property { number } [page_size]
        
        @property { string } [search]
        
        @property { number } [priority_order]
        
        @property { number } [page_no]
        
         
    */

/**
        @typedef DepartmentsResponse
        
        
        @property { BasePage1 } [page]
        
        @property { Array<GetDepartment> } [items]
        
         
    */

/**
        @typedef DepartmentErrorResponse
        
        
        @property { Object } [meta]
        
        @property { string } [code]
        
        @property { number } [status]
        
        @property { string } [message]
        
        @property { Object } [errors]
        
         
    */

/**
        @typedef ProductTemplate
        
        
        @property { Array<string> } [attributes]
        
        @property { boolean } is_physical
        
        @property { string } slug
        
        @property { Array<string> } [departments]
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { Object } [modified_by]
        
        @property { boolean } [is_active]
        
        @property { boolean } [is_archived]
        
        @property { string } [description]
        
        @property { string } [modified_on]
        
        @property { Array<string> } [categories]
        
        @property { Object } [created_by]
        
        @property { string } [tag]
        
        @property { string } [created_on]
        
         
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
        
        
        @property { Array<string> } [hsn_code]
        
        @property { Array<string> } [country_of_origin]
        
         
    */

/**
        @typedef HSNCodesResponse
        
        
        @property { string } [message]
        
        @property { HSNData } [data]
        
         
    */

/**
        @typedef ProductConfligurationDownloads
        
        
        @property { Array<MultipleCommon> } [data]
        
        @property { boolean } [multivalue]
        
         
    */

/**
        @typedef CategoryMappingValues
        
        
        @property { string } name
        
        @property { number } [catalog_id]
        
         
    */

/**
        @typedef CategoryMapping
        
        
        @property { CategoryMappingValues } [facebook]
        
        @property { CategoryMappingValues } [google]
        
        @property { CategoryMappingValues } [ajio]
        
         
    */

/**
        @typedef Media2
        
        
        @property { string } portrait
        
        @property { string } landscape
        
        @property { string } logo
        
         
    */

/**
        @typedef Hierarchy
        
        
        @property { number } l2
        
        @property { number } department
        
        @property { number } l1
        
         
    */

/**
        @typedef Category
        
        
        @property { number } [uid]
        
        @property { Array<string> } [tryouts]
        
        @property { Array<number> } departments
        
        @property { string } [slug]
        
        @property { Array<string> } [synonyms]
        
        @property { string } name
        
        @property { CategoryMapping } [marketplaces]
        
        @property { boolean } is_active
        
        @property { Object } [modified_by]
        
        @property { Media2 } [media]
        
        @property { string } [created_on]
        
        @property { number } [priority]
        
        @property { number } level
        
        @property { string } [modified_on]
        
        @property { Object } [created_by]
        
        @property { string } [_id]
        
        @property { Array<Hierarchy> } [hierarchy]
        
         
    */

/**
        @typedef CategoryResponse
        
        
        @property { BasePage1 } [page]
        
        @property { Array<Category> } [items]
        
         
    */

/**
        @typedef CategoryRequestBody
        
        
        @property { Array<string> } [tryouts]
        
        @property { Array<number> } departments
        
        @property { string } [slug]
        
        @property { Array<string> } [synonyms]
        
        @property { string } name
        
        @property { CategoryMapping } [marketplaces]
        
        @property { boolean } is_active
        
        @property { Media2 } [media]
        
        @property { number } [priority]
        
        @property { number } level
        
        @property { Array<Hierarchy> } [hierarchy]
        
         
    */

/**
        @typedef CategoryCreateResponse
        
        
        @property { number } [uid]
        
        @property { string } [message]
        
         
    */

/**
        @typedef CategoryUpdateResponse
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef PageData
        
        
        @property { boolean } [has_previous]
        
        @property { boolean } [has_next]
        
        @property { number } [item_total]
        
        @property { number } [size]
        
        @property { string } [current]
        
         
    */

/**
        @typedef UserCommon
        
        
        @property { number } [company_id]
        
        @property { string } [user_id]
        
        @property { string } [username]
        
         
    */

/**
        @typedef VerifiedBy
        
        
        @property { string } [user_id]
        
        @property { string } [username]
        
         
    */

/**
        @typedef Attributes
        
        
        @property { Array<string> } [l3_mapping]
        
        @property { string } [material]
        
        @property { string } [meta_nature]
        
        @property { string } [verified_on]
        
        @property { string } [image_nature]
        
        @property { string } [product_fit]
        
        @property { string } [stage]
        
        @property { Array<string> } [gender]
        
        @property { string } [sleeve_length]
        
        @property { string } [modified_on]
        
        @property { string } [neck_type]
        
        @property { string } [color]
        
        @property { boolean } [is_image_less_product]
        
        @property { UserCommon } [created_by]
        
        @property { string } [created_on]
        
        @property { string } [pattern]
        
        @property { string } [essential]
        
        @property { string } [primary_color]
        
        @property { UserCommon } [modified_by]
        
        @property { string } [primary_material]
        
        @property { VerifiedBy } [verified_by]
        
         
    */

/**
        @typedef Logo
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [secure_url]
        
        @property { number } [aspect_ratio_f]
        
        @property { string } [url]
        
         
    */

/**
        @typedef Brand
        
        
        @property { string } [name]
        
        @property { number } [uid]
        
        @property { Logo } [logo]
        
         
    */

/**
        @typedef ProductPublished
        
        
        @property { number } [product_online_date]
        
        @property { boolean } [is_set]
        
         
    */

/**
        @typedef Product
        
        
        @property { Attributes } [attributes]
        
        @property { Array<number> } [departments]
        
        @property { boolean } [is_active]
        
        @property { number } [company_id]
        
        @property { string } [item_code]
        
        @property { string } [size_guide]
        
        @property { boolean } [multi_size]
        
        @property { Brand } [brand]
        
        @property { Array<string> } [images]
        
        @property { string } [name]
        
        @property { Array<string> } [media]
        
        @property { string } [category_slug]
        
        @property { string } [description]
        
        @property { string } [currency]
        
        @property { string } [template_tag]
        
        @property { boolean } [is_set]
        
        @property { ProductPublished } [product_publish]
        
        @property { string } [hsn_code]
        
        @property { number } [uid]
        
        @property { Array<Object> } [sizes]
        
        @property { string } [slug]
        
        @property { string } [id]
        
        @property { string } [item_type]
        
        @property { Array<string> } [all_sizes]
        
        @property { string } [highlights]
        
        @property { string } [country_of_origin]
        
        @property { boolean } [is_dependent]
        
         
    */

/**
        @typedef ProductListingResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Product> } [items]
        
         
    */

/**
        @typedef ReturnConfig
        
        
        @property { boolean } [returnable]
        
        @property { string } [unit]
        
        @property { number } [time]
        
         
    */

/**
        @typedef CustomOrder
        
        
        @property { boolean } [is_custom_order]
        
        @property { string } [manufacturing_time_unit]
        
        @property { number } [manufacturing_time]
        
         
    */

/**
        @typedef OrderQuantity
        
        
        @property { number } [maximum]
        
        @property { number } [minimum]
        
        @property { boolean } [is_set]
        
         
    */

/**
        @typedef ProductPublish
        
        
        @property { string } [product_online_date]
        
        @property { boolean } [is_set]
        
         
    */

/**
        @typedef Trader
        
        
        @property { string } name
        
        @property { string } address
        
         
    */

/**
        @typedef TeaserTag
        
        
        @property { string } [tag]
        
        @property { string } [url]
        
         
    */

/**
        @typedef ProductCreateUpdate
        
        
        @property { string } [requester]
        
        @property { Array<number> } departments
        
        @property { string } [change_request_id]
        
        @property { Array<string> } [tags]
        
        @property { Object } [variants]
        
        @property { ReturnConfig } [return_config]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [product_group_tag]
        
        @property { number } company_id
        
        @property { string } item_code
        
        @property { string } [size_guide]
        
        @property { CustomOrder } [custom_order]
        
        @property { boolean } [multi_size]
        
        @property { string } name
        
        @property { string } [short_description]
        
        @property { Array<Media1> } [media]
        
        @property { string } category_slug
        
        @property { string } [description]
        
        @property { string } currency
        
        @property { Object } [_custom_json]
        
        @property { string } template_tag
        
        @property { number } brand_uid
        
        @property { OrderQuantity } [moq]
        
        @property { boolean } [is_set]
        
        @property { ProductPublish } [product_publish]
        
        @property { string } hsn_code
        
        @property { Trader } [trader]
        
        @property { boolean } [is_image_less_product]
        
        @property { number } [uid]
        
        @property { string } slug
        
        @property { TeaserTag } [teaser_tag]
        
        @property { string } item_type
        
        @property { Array<string> } [highlights]
        
        @property { string } [trader_type]
        
        @property { string } country_of_origin
        
        @property { boolean } [is_dependent]
        
        @property { number } [no_of_boxes]
        
         
    */

/**
        @typedef ValidateProduct
        
        
        @property { boolean } [valid]
        
         
    */

/**
        @typedef UserDetail
        
        
        @property { string } [full_name]
        
        @property { string } [user_id]
        
        @property { string } [username]
        
         
    */

/**
        @typedef ProductBulkRequest
        
        
        @property { string } [stage]
        
        @property { number } [total]
        
        @property { UserDetail } [created_by]
        
        @property { ProductTemplate } [template]
        
        @property { string } [file_path]
        
        @property { number } [cancelled]
        
        @property { UserDetail } [modified_by]
        
        @property { boolean } [is_active]
        
        @property { number } [succeed]
        
        @property { Array<string> } [cancelled_records]
        
        @property { Array<string> } [failed_records]
        
        @property { string } [modified_on]
        
        @property { number } [company_id]
        
        @property { number } [failed]
        
        @property { string } [created_on]
        
        @property { string } [template_tag]
        
         
    */

/**
        @typedef ProductBulkRequestList
        
        
        @property { PageData } [page]
        
        @property { ProductBulkRequest } [items]
        
         
    */

/**
        @typedef UserInfo1
        
        
        @property { string } [username]
        
        @property { string } [uid]
        
        @property { string } [user_id]
        
        @property { string } [email]
        
         
    */

/**
        @typedef BulkJob
        
        
        @property { string } [stage]
        
        @property { number } total
        
        @property { string } [custom_template_tag]
        
        @property { string } [file_path]
        
        @property { UserInfo1 } [modified_by]
        
        @property { number } [cancelled]
        
        @property { boolean } [is_active]
        
        @property { number } [failed]
        
        @property { string } [tracking_url]
        
        @property { number } [succeed]
        
        @property { Array<Object> } [cancelled_records]
        
        @property { Array<Object> } [failed_records]
        
        @property { string } [modified_on]
        
        @property { number } company_id
        
        @property { UserInfo1 } [created_by]
        
        @property { string } created_on
        
        @property { string } [template_tag]
        
         
    */

/**
        @typedef BulkProductRequest
        
        
        @property { number } company_id
        
        @property { string } batch_id
        
        @property { Array<Object> } data
        
        @property { string } template_tag
        
         
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
        
        
        @property { string } [stage]
        
        @property { number } [total]
        
        @property { string } [id]
        
        @property { string } [file_path]
        
        @property { UserCommon } [modified_by]
        
        @property { number } [cancelled]
        
        @property { number } [failed]
        
        @property { boolean } [is_active]
        
        @property { string } [tracking_url]
        
        @property { number } [succeed]
        
        @property { Array<string> } [cancelled_records]
        
        @property { Array<string> } [failed_records]
        
        @property { string } [modified_on]
        
        @property { number } [company_id]
        
        @property { UserCommon } [created_by]
        
        @property { number } [retry]
        
        @property { string } [created_on]
        
         
    */

/**
        @typedef BulkAssetResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Items> } [items]
        
         
    */

/**
        @typedef ProductBulkAssets
        
        
        @property { number } [company_id]
        
        @property { Object } user
        
        @property { string } url
        
         
    */

/**
        @typedef InventoryRequest
        
        
        @property { number } [total]
        
        @property { string } [size]
        
        @property { number } [page_size]
        
        @property { string } [search]
        
        @property { number } [page_no]
        
         
    */

/**
        @typedef ItemQuery
        
        
        @property { string } [item_code]
        
        @property { number } [uid]
        
        @property { number } [brand_uid]
        
         
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
        
        
        @property { number } [quantity]
        
        @property { SizeDistribution } size_distribution
        
         
    */

/**
        @typedef GTIN
        
        
        @property { boolean } [primary]
        
        @property { string } gtin_value
        
        @property { string } gtin_type
        
         
    */

/**
        @typedef InvSize
        
        
        @property { number } [price_transfer]
        
        @property { string } [item_weight_unit_of_measure]
        
        @property { number } [item_width]
        
        @property { boolean } [is_set]
        
        @property { string } [item_dimensions_unit_of_measure]
        
        @property { number } quantity
        
        @property { InventorySet } [set]
        
        @property { string } size
        
        @property { string } store_code
        
        @property { number } [item_weight]
        
        @property { number } price_effective
        
        @property { string } currency
        
        @property { Array<GTIN> } identifiers
        
        @property { number } [item_length]
        
        @property { number } [item_height]
        
        @property { number } price
        
         
    */

/**
        @typedef InventoryRequest1
        
        
        @property { number } company_id
        
        @property { ItemQuery } item
        
        @property { Array<InvSize> } sizes
        
         
    */

/**
        @typedef BulkRequestGet
        
        
        @property { string } [stage]
        
        @property { string } [start_date]
        
        @property { number } [total]
        
        @property { string } [custom_template_tag]
        
        @property { string } [end_date]
        
        @property { number } [page_size]
        
        @property { string } [search]
        
        @property { number } [page_no]
        
        @property { string } [template_tag]
        
         
    */

/**
        @typedef CommonResponse
        
        
        @property { string } [success]
        
         
    */

/**
        @typedef Size1
        
        
        @property { number } [price_transfer]
        
        @property { string } [item_weight_unit_of_measure]
        
        @property { number } [item_width]
        
        @property { boolean } [is_set]
        
        @property { string } [item_dimensions_unit_of_measure]
        
        @property { number } quantity
        
        @property { string } seller_identifier
        
        @property { InventorySet } [set]
        
        @property { string } [size]
        
        @property { string } store_code
        
        @property { number } [item_weight]
        
        @property { number } price_effective
        
        @property { string } currency
        
        @property { Array<Object> } [identifiers]
        
        @property { number } [item_length]
        
        @property { number } [item_height]
        
        @property { number } price
        
         
    */

/**
        @typedef InventoryBulkRequest
        
        
        @property { number } company_id
        
        @property { Object } [user]
        
        @property { Array<Size1> } sizes
        
        @property { string } batch_id
        
         
    */

/**
        @typedef InventoryExportJob
        
        
        @property { string } task_id
        
        @property { string } [completed_on]
        
        @property { number } seller_id
        
        @property { string } [url]
        
        @property { Object } [request_params]
        
        @property { string } [trigger_on]
        
        @property { string } [status]
        
         
    */

/**
        @typedef InventoryExportRequest
        
        
        @property { string } [type]
        
        @property { Array<number> } [store]
        
        @property { Array<number> } [brand]
        
         
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
        
        
        @property { string } file_name
        
        @property { string } file_path
        
        @property { string } content_type
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
         
    */

/**
        @typedef StartRequest
        
        
        @property { string } file_name
        
        @property { string } content_type
        
        @property { number } size
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef CompleteResponse
        
        
        @property { string } _id
        
        @property { string } file_name
        
        @property { string } file_path
        
        @property { string } content_type
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } success
        
        @property { Array<string> } [tags]
        
        @property { string } created_on
        
        @property { string } modified_on
        
         
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
        
        @property { number } attempts_made
        
        @property { Array<string> } [stacktrace]
        
        @property { number } finished_on
        
        @property { number } processed_on
        
         
    */

/**
        @typedef BulkResponse
        
        
        @property { string } tracking_url
        
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
        
        @property { string } signed_url
        
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
        
        @property { string } _id
        
        @property { string } file_name
        
        @property { string } [operation]
        
        @property { string } namespace
        
        @property { string } content_type
        
        @property { string } file_path
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } created_on
        
        @property { string } modified_on
        
         
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
        
        @property { boolean } [force_web]
        
         
    */

/**
        @typedef CampaignShortLink
        
        
        @property { string } [source]
        
        @property { string } [medium]
        
         
    */

/**
        @typedef Attribution
        
        
        @property { string } [campaign_cookie_expiry]
        
         
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
        
        @property { string } [expire_at]
        
        @property { boolean } [enable_tracking]
        
        @property { boolean } [personalized]
        
        @property { CampaignShortLink } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [social_media_tags]
        
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
        
        @property { string } [created_by]
        
        @property { boolean } [app_redirect]
        
        @property { string } [fallback]
        
        @property { boolean } [active]
        
        @property { string } [_id]
        
        @property { boolean } [enable_tracking]
        
        @property { string } [expire_at]
        
        @property { string } [application]
        
        @property { string } [user_id]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { boolean } [personalized]
        
        @property { CampaignShortLink } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [social_media_tags]
        
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
        
        @property { ArticleAssignmentConfig } [article_assignment]
        
        @property { RewardPointsConfig } [reward_points]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { AppOrderConfig } [order]
        
        @property { AppLogisticsConfig } [logistics]
        
        @property { string } [business]
        
        @property { boolean } [comms_enabled]
        
        @property { Array<string> } [platforms]
        
        @property { string } [_id]
        
        @property { LoyaltyPoints } [loyalty_points]
        
        @property { string } [app]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [modified_by]
        
         
    */

/**
        @typedef AppInventoryConfig
        
        
        @property { InventoryBrand } [brand]
        
        @property { InventoryStore } [store]
        
        @property { InventoryCategory } [category]
        
        @property { InventoryPrice } [price]
        
        @property { InventoryDiscount } [discount]
        
        @property { boolean } [out_of_stock]
        
        @property { boolean } [franchise_enabled]
        
        @property { Array<any> } [exclude_category]
        
        @property { Array<string> } [image]
        
        @property { Array<any> } [company_store]
        
         
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
        
        @property { boolean } [post_order_reassignment]
        
        @property { Array<any> } [enforced_stores]
        
         
    */

/**
        @typedef ArticleAssignmentRules
        
        
        @property { StorePriority } [store_priority]
        
         
    */

/**
        @typedef StorePriority
        
        
        @property { boolean } [enabled]
        
        @property { Array<any> } [storetype_order]
        
         
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
        
        @property { boolean } [auto_apply]
        
        @property { string } [strategy_channel]
        
         
    */

/**
        @typedef AppCartConfig
        
        
        @property { DeliveryCharges } [delivery_charges]
        
        @property { boolean } [enabled]
        
        @property { number } [max_cart_items]
        
        @property { number } [min_cart_value]
        
        @property { boolean } [bulk_coupons]
        
         
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
        
        
        @property { CallbackUrl } [callback_url]
        
        @property { Methods } [methods]
        
        @property { PaymentSelectionLock } [payment_selection_lock]
        
        @property { string } [mode_of_payment]
        
        @property { string } [source]
        
        @property { boolean } [enabled]
        
        @property { number } [cod_amount_limit]
        
        @property { number } [cod_charges]
        
         
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
        
        @property { string } [default_options]
        
        @property { string } [payment_identifier]
        
         
    */

/**
        @typedef AppOrderConfig
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [force_reassignment]
        
         
    */

/**
        @typedef AppLogisticsConfig
        
        
        @property { boolean } [logistics_by_seller]
        
        @property { boolean } [serviceability_check]
        
        @property { boolean } [same_day_delivery]
        
        @property { boolean } [dp_assignment]
        
         
    */

/**
        @typedef LoyaltyPoints
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [auto_apply]
        
         
    */

/**
        @typedef AppInventoryPartialUpdate
        
        
        @property { RewardPointsConfig } [reward_points]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { LoyaltyPoints } [loyalty_points]
        
        @property { boolean } [comms_enabled]
        
         
    */

/**
        @typedef BrandCompanyInfo
        
        
        @property { string } [company_name]
        
        @property { number } [company_id]
        
         
    */

/**
        @typedef CompanyByBrandsRequest
        
        
        @property { number } brands
        
        @property { string } [search_text]
        
         
    */

/**
        @typedef CompanyByBrandsResponse
        
        
        @property { Array<BrandCompanyInfo> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef StoreByBrandsRequest
        
        
        @property { number } [company_id]
        
        @property { number } brands
        
        @property { string } [search_text]
        
         
    */

/**
        @typedef StoreByBrandsResponse
        
        
        @property { Array<BrandStoreInfo> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef BrandStoreInfo
        
        
        @property { string } [store_name]
        
        @property { number } [store_id]
        
        @property { string } [store_type]
        
        @property { string } [store_code]
        
        @property { OptedStoreAddress } [store_address]
        
        @property { OptedCompany } [company]
        
         
    */

/**
        @typedef CompanyBrandInfo
        
        
        @property { string } [name]
        
        @property { number } [value]
        
        @property { string } [brand_logo_url]
        
        @property { string } [brand_banner_url]
        
        @property { string } [brand_banner_portrait_url]
        
         
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
        
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [app_name]
        
        @property { LandingImage } [landing_image]
        
        @property { SplashImage } [splash_image]
        
        @property { string } [application]
        
        @property { string } [platform_type]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
        @property { string } [package_name]
        
         
    */

/**
        @typedef LandingImage
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [secure_url]
        
         
    */

/**
        @typedef SplashImage
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [secure_url]
        
         
    */

/**
        @typedef MobileAppConfigRequest
        
        
        @property { string } [app_name]
        
        @property { LandingImage } [landing_image]
        
        @property { SplashImage } [splash_image]
        
        @property { boolean } [is_active]
        
         
    */

/**
        @typedef BuildVersionHistory
        
        
        @property { BuildVersion } [versions]
        
        @property { string } [latest_available_version_name]
        
         
    */

/**
        @typedef BuildVersion
        
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { string } [platform_type]
        
        @property { string } [build_status]
        
        @property { string } [version_name]
        
        @property { number } [version_code]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef AppSupportedCurrency
        
        
        @property { string } [_id]
        
        @property { Array<string> } [supported_currency]
        
        @property { string } [application]
        
        @property { DefaultCurrency } [default_currency]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
         
    */

/**
        @typedef DefaultCurrency
        
        
        @property { string } [ref]
        
        @property { string } [code]
        
         
    */

/**
        @typedef CurrencyConfig
        
        
        @property { string } [_id]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [decimal_digits]
        
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
        
        
        @property { string } [_id]
        
         
    */

/**
        @typedef UpdateDomainTypeRequest
        
        
        @property { UpdateDomain } [domain]
        
        @property { string } [action]
        
         
    */

/**
        @typedef DomainStatusRequest
        
        
        @property { string } [domain_url]
        
         
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
        
        
        @property { string } [domain_url]
        
        @property { boolean } [custom]
        
         
    */

/**
        @typedef DomainSuggestion
        
        
        @property { string } name
        
        @property { boolean } [unsupported]
        
        @property { boolean } is_available
        
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
        
        @property { string } [description_html]
        
        @property { string } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [__v]
        
         
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
        
        
        @property { JsonSchema } [json_schema]
        
        @property { string } [browser_script]
        
         
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
        
        
        @property { Array<JsonSchema> } [json_schema]
        
        @property { string } [browser_script]
        
         
    */

/**
        @typedef InventoryValidator
        
        
        @property { Array<JsonSchema> } [json_schema]
        
        @property { string } [browser_script]
        
         
    */

/**
        @typedef OrderValidator
        
        
        @property { Array<JsonSchema> } [json_schema]
        
        @property { string } [browser_script]
        
         
    */

/**
        @typedef IntegrationMeta
        
        
        @property { boolean } [is_public]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */

/**
        @typedef Integration
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [description_html]
        
        @property { Object } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef IntegrationConfigResponse
        
        
        @property { IntegrationLevel } [items]
        
         
    */

/**
        @typedef IntegrationLevel
        
        
        @property { boolean } [opted]
        
        @property { Array<Object> } [permissions]
        
        @property { Array<Object> } [last_patch]
        
        @property { string } [_id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { Array<any> } [meta]
        
        @property { string } [token]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
        @property { Object } [data]
        
         
    */

/**
        @typedef OptedStoreIntegration
        
        
        @property { boolean } [other_opted]
        
        @property { IntegrationOptIn } [other_integration]
        
        @property { OtherEntity } [other_entity]
        
         
    */

/**
        @typedef OtherEntity
        
        
        @property { boolean } [opted]
        
        @property { Array<string> } [permissions]
        
        @property { LastPatch } [last_patch]
        
        @property { string } [_id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { OtherEntityData } [data]
        
        @property { Array<Object> } [meta]
        
        @property { string } [token]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef LastPatch
        
        
        @property { string } [op]
        
        @property { string } [path]
        
        @property { string } [value]
        
         
    */

/**
        @typedef OtherEntityData
        
        
        @property { string } [article_identifier]
        
         
    */

/**
        @typedef App
        
        
        @property { string } [company_id]
        
        @property { string } [channel_type]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [name]
        
        @property { string } [desc]
        
         
    */

/**
        @typedef AppInventory
        
        
        @property { InventoryBrandRule } [brand]
        
        @property { InventoryStoreRule } [store]
        
        @property { Array<string> } [image]
        
        @property { boolean } [franchise_enabled]
        
        @property { boolean } [out_of_stock]
        
        @property { InventoryPaymentConfig } [payment]
        
        @property { InventoryArticleAssignment } [article_assignment]
        
         
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
        
        @property { string } [company_type]
        
         
    */

/**
        @typedef StoresResponse
        
        
        @property { AppInventoryStores } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AppInventoryStores
        
        
        @property { string } [_id]
        
        @property { string } [modified_on]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [display_name]
        
        @property { string } [store_type]
        
        @property { string } [store_code]
        
        @property { number } [company_id]
        
         
    */

/**
        @typedef FilterOrderingStoreRequest
        
        
        @property { boolean } [all_stores]
        
        @property { Array<number> } [deployed_stores]
        
        @property { string } [q]
        
         
    */

/**
        @typedef DeploymentMeta
        
        
        @property { Array<number> } [deployed_stores]
        
        @property { boolean } [all_stores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [_id]
        
        @property { string } [app]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef OrderingStoreConfig
        
        
        @property { DeploymentMeta } [deployment_meta]
        
         
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
        
        @property { string } [_id]
        
        @property { string } [domain]
        
        @property { OtherSellerCompany } [company]
        
        @property { string } [opt_type]
        
         
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
        
        @property { string } [_id]
        
        @property { string } [domain]
        
        @property { OptedCompany } [company]
        
        @property { OptedInventory } [opted_inventory]
        
        @property { OptOutInventory } [opt_out_inventory]
        
         
    */

/**
        @typedef OptedCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef OptedInventory
        
        
        @property { OptType } [opt_type]
        
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
        
        @property { string } [store_code]
        
        @property { string } [_id]
        
        @property { string } [modified_on]
        
        @property { number } [uid]
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [display_name]
        
        @property { string } [store_type]
        
        @property { number } [company_id]
        
         
    */

/**
        @typedef OptOutInventory
        
        
        @property { Array<number> } store
        
        @property { Array<number> } company
        
         
    */

/**
        @typedef ProductDetailFeature
        
        
        @property { Array<string> } [similar]
        
        @property { boolean } [seller_selection]
        
        @property { boolean } [update_product_meta]
        
        @property { boolean } [request_product]
        
         
    */

/**
        @typedef LaunchPage
        
        
        @property { string } [page_type]
        
        @property { string } [params]
        
        @property { string } [query]
        
         
    */

/**
        @typedef LandingPageFeature
        
        
        @property { LaunchPage } [launch_page]
        
        @property { boolean } [continue_as_guest]
        
        @property { string } [login_btn_text]
        
        @property { boolean } [show_domain_textbox]
        
        @property { boolean } [show_register_btn]
        
         
    */

/**
        @typedef RegistrationPageFeature
        
        
        @property { boolean } [ask_store_address]
        
         
    */

/**
        @typedef AppFeature
        
        
        @property { ProductDetailFeature } [product_detail]
        
        @property { LandingPageFeature } [landing_page]
        
        @property { RegistrationPageFeature } [registration_page]
        
        @property { HomePageFeature } [home_page]
        
        @property { CommonFeature } [common]
        
        @property { CartFeature } [cart]
        
        @property { QrFeature } [qr]
        
        @property { PcrFeature } [pcr]
        
        @property { OrderFeature } [order]
        
        @property { string } [_id]
        
        @property { string } [app]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef HomePageFeature
        
        
        @property { boolean } [order_processing]
        
         
    */

/**
        @typedef CommonFeature
        
        
        @property { CommunicationOptinDialogFeature } [communication_optin_dialog]
        
        @property { DeploymentStoreSelectionFeature } [deployment_store_selection]
        
        @property { ListingPriceFeature } [listing_price]
        
        @property { ListingPageFeature } [listing_page]
        
        @property { CurrencyFeature } [currency]
        
        @property { RevenueEngineFeature } [revenue_engine]
        
        @property { FeedbackFeature } [feedback]
        
        @property { CompareProductsFeature } [compare_products]
        
         
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
        
        
        @property { string } [sort_on]
        
         
    */

/**
        @typedef CurrencyFeature
        
        
        @property { Array<string> } [value]
        
        @property { string } [type]
        
        @property { string } [default_currency]
        
         
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
        
        
        @property { boolean } [gst_input]
        
        @property { boolean } [staff_selection]
        
        @property { boolean } [placing_for_customer]
        
        @property { boolean } [google_map]
        
         
    */

/**
        @typedef QrFeature
        
        
        @property { boolean } [application]
        
        @property { boolean } [products]
        
        @property { boolean } [collections]
        
         
    */

/**
        @typedef PcrFeature
        
        
        @property { boolean } [staff_selection]
        
         
    */

/**
        @typedef OrderFeature
        
        
        @property { boolean } [buy_again]
        
         
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
        
        
        @property { string } [_id]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [decimal_digits]
        
        @property { string } [symbol]
        
         
    */

/**
        @typedef Domain
        
        
        @property { boolean } [verified]
        
        @property { boolean } [is_primary]
        
        @property { boolean } [is_default]
        
        @property { boolean } [is_shortlink]
        
        @property { string } [_id]
        
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
        
        @property { string } [redirect_to]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ApplicationMeta
        
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */

/**
        @typedef SecureUrl
        
        
        @property { string } [secure_url]
        
         
    */

/**
        @typedef Application
        
        
        @property { ApplicationWebsite } [website]
        
        @property { ApplicationCors } [cors]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [description]
        
        @property { string } [channel_type]
        
        @property { number } [cache_ttl]
        
        @property { boolean } [is_internal]
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [owner]
        
        @property { number } [company_id]
        
        @property { string } [token]
        
        @property { Array<ApplicationRedirections> } [redirections]
        
        @property { Array<ApplicationMeta> } [meta]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
        @property { SecureUrl } [banner]
        
        @property { SecureUrl } [logo]
        
        @property { SecureUrl } [favicon]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [app_type]
        
        @property { SecureUrl } [mobile_logo]
        
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
        
        
        @property { string } [mode_of_payment]
        
        @property { string } [source]
        
         
    */

/**
        @typedef StorePriorityRule
        
        
        @property { boolean } [enabled]
        
        @property { Array<string> } [storetype_order]
        
         
    */

/**
        @typedef ArticleAssignmentRule
        
        
        @property { StorePriorityRule } [store_priority]
        
         
    */

/**
        @typedef InventoryArticleAssignment
        
        
        @property { boolean } [post_order_reassignment]
        
        @property { Array<number> } [enforced_stores]
        
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
        
        @property { string } [address_type]
        
         
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
        
        @property { number } [country_code]
        
        @property { string } [phone]
        
         
    */

/**
        @typedef ApplicationInformation
        
        
        @property { InformationAddress } [address]
        
        @property { InformationSupport } [support]
        
        @property { SocialLinks } [social_links]
        
        @property { Links } [links]
        
        @property { string } [copyright_text]
        
        @property { string } [_id]
        
        @property { BusinessHighlights } [business_highlights]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef InformationAddress
        
        
        @property { string } [loc]
        
        @property { Array<string> } [address_line]
        
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
        
        @property { GooglePlus } [google_plus]
        
        @property { Youtube } [youtube]
        
        @property { LinkedIn } [linked_in]
        
        @property { Vimeo } [vimeo]
        
        @property { BlogLink } [blog_link]
        
         
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
        
        
        @property { string } [_id]
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [sub_title]
        
         
    */

/**
        @typedef ApplicationDetail
        
        
        @property { string } name
        
        @property { string } description
        
        @property { SecureUrl } logo
        
        @property { SecureUrl } mobile_logo
        
        @property { SecureUrl } favicon
        
        @property { SecureUrl } banner
        
        @property { Domain } [domain]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [_id]
        
         
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
        
        @property { StoreLatLong } [lat_long]
        
        @property { string } [address2]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
        @property { string } [city]
        
         
    */

/**
        @typedef OrderingStore
        
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [_id]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [display_name]
        
        @property { string } [store_type]
        
        @property { string } [store_code]
        
        @property { number } [pincode]
        
        @property { string } [code]
        
         
    */

/**
        @typedef OrderingStores
        
        
        @property { Page } [page]
        
        @property { Array<OrderingStore> } [items]
        
        @property { Array<number> } [deployed_stores]
        
        @property { boolean } [all_stores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [_id]
        
        @property { string } [app]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef TokenResponse
        
        
        @property { Tokens } [tokens]
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef Tokens
        
        
        @property { Firebase } [firebase]
        
        @property { Moengage } [moengage]
        
        @property { Segment } [segment]
        
        @property { Gtm } [gtm]
        
        @property { Freshchat } [freshchat]
        
        @property { Safetynet } [safetynet]
        
        @property { FyndRewards } [fynd_rewards]
        
        @property { Auth } [auth]
        
        @property { GoogleMap } [google_map]
        
         
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
        
        @property { string } [project_id]
        
        @property { string } [gcm_sender_id]
        
        @property { string } [application_id]
        
        @property { string } [api_key]
        
         
    */

/**
        @typedef Ios
        
        
        @property { string } [application_id]
        
        @property { string } [api_key]
        
         
    */

/**
        @typedef Android
        
        
        @property { string } [application_id]
        
        @property { string } [api_key]
        
         
    */

/**
        @typedef Moengage
        
        
        @property { MoengageCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef MoengageCredentials
        
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef Segment
        
        
        @property { SegmentCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef SegmentCredentials
        
        
        @property { string } [write_key]
        
         
    */

/**
        @typedef Gtm
        
        
        @property { GtmCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef GtmCredentials
        
        
        @property { string } [api_key]
        
         
    */

/**
        @typedef Freshchat
        
        
        @property { FreshchatCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef FreshchatCredentials
        
        
        @property { string } [app_id]
        
        @property { string } [app_key]
        
        @property { string } [web_token]
        
         
    */

/**
        @typedef Safetynet
        
        
        @property { SafetynetCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef SafetynetCredentials
        
        
        @property { string } [api_key]
        
         
    */

/**
        @typedef FyndRewards
        
        
        @property { FyndRewardsCredentials } [credentials]
        
         
    */

/**
        @typedef FyndRewardsCredentials
        
        
        @property { string } [public_key]
        
         
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
        
        
        @property { string } [api_key]
        
         
    */

/**
        @typedef Ownership
        
        
        @property { string } payable_by
        
        @property { string } payable_category
        
         
    */

/**
        @typedef PriceRange
        
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */

/**
        @typedef PostOrder
        
        
        @property { boolean } [return_allowed]
        
        @property { boolean } [cancellation_allowed]
        
         
    */

/**
        @typedef BulkBundleRestriction
        
        
        @property { boolean } multi_store_allowed
        
         
    */

/**
        @typedef UsesRemaining
        
        
        @property { number } [user]
        
        @property { number } [app]
        
        @property { number } [total]
        
         
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
        
        @property { Array<string> } [networks]
        
        @property { Array<string> } [types]
        
        @property { PaymentAllowValue } [uses]
        
         
    */

/**
        @typedef PaymentCodes
        
        
        @property { PaymentModes } [pl]
        
        @property { PaymentModes } [card]
        
        @property { PaymentModes } [wl]
        
        @property { PaymentModes } [ps]
        
        @property { PaymentModes } [qr]
        
        @property { PaymentModes } [upi]
        
        @property { PaymentModes } [nb]
        
         
    */

/**
        @typedef Restrictions
        
        
        @property { boolean } [coupon_allowed]
        
        @property { PriceRange } [price_range]
        
        @property { Array<number> } [ordering_stores]
        
        @property { PostOrder } [post_order]
        
        @property { BulkBundleRestriction } [bulk_bundle]
        
        @property { Array<string> } [platforms]
        
        @property { UsesRestriction } [uses]
        
        @property { PaymentCodes } [payments]
        
         
    */

/**
        @typedef Validity
        
        
        @property { number } [priority]
        
         
    */

/**
        @typedef CouponDateMeta
        
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */

/**
        @typedef CouponAction
        
        
        @property { string } [txn_mode]
        
        @property { string } [action_date]
        
         
    */

/**
        @typedef CouponAuthor
        
        
        @property { string } [modified_by]
        
        @property { string } [created_by]
        
         
    */

/**
        @typedef Rule
        
        
        @property { number } [discount_qty]
        
        @property { number } [max]
        
        @property { number } [min]
        
        @property { number } [key]
        
        @property { number } [value]
        
         
    */

/**
        @typedef CouponSchedule
        
        
        @property { number } [duration]
        
        @property { Array<Object> } [next_schedule]
        
        @property { string } [end]
        
        @property { string } [cron]
        
        @property { string } [start]
        
         
    */

/**
        @typedef RuleDefinition
        
        
        @property { string } applicable_on
        
        @property { Array<string> } [scope]
        
        @property { string } type
        
        @property { boolean } [auto_apply]
        
        @property { string } calculate_on
        
        @property { string } [currency_code]
        
        @property { boolean } [is_exact]
        
        @property { string } value_type
        
         
    */

/**
        @typedef Identifier
        
        
        @property { Array<number> } [item_id]
        
        @property { Array<string> } [collection_id]
        
        @property { Array<number> } [category_id]
        
        @property { Array<string> } [article_id]
        
        @property { Array<number> } [company_id]
        
        @property { Array<number> } [brand_id]
        
        @property { Array<number> } [store_id]
        
        @property { Array<string> } [user_id]
        
         
    */

/**
        @typedef State
        
        
        @property { boolean } [is_public]
        
        @property { boolean } [is_display]
        
        @property { boolean } [is_archived]
        
         
    */

/**
        @typedef Validation
        
        
        @property { Array<string> } [app_id]
        
        @property { boolean } [anonymous]
        
        @property { string } [user_registered_after]
        
         
    */

/**
        @typedef DisplayMetaDict
        
        
        @property { string } [subtitle]
        
        @property { string } [title]
        
         
    */

/**
        @typedef DisplayMeta
        
        
        @property { DisplayMetaDict } [remove]
        
        @property { string } [title]
        
        @property { DisplayMetaDict } [apply]
        
        @property { string } [subtitle]
        
        @property { DisplayMetaDict } [auto]
        
        @property { string } [description]
        
         
    */

/**
        @typedef CouponAdd
        
        
        @property { string } code
        
        @property { Ownership } ownership
        
        @property { Restrictions } [restrictions]
        
        @property { Validity } validity
        
        @property { CouponDateMeta } [date_meta]
        
        @property { CouponAction } [action]
        
        @property { Array<string> } [tags]
        
        @property { CouponAuthor } [author]
        
        @property { Array<Rule> } rule
        
        @property { CouponSchedule } [_schedule]
        
        @property { RuleDefinition } rule_definition
        
        @property { Identifier } identifiers
        
        @property { State } [state]
        
        @property { Validation } [validation]
        
        @property { string } type_slug
        
        @property { DisplayMeta } display_meta
        
         
    */

/**
        @typedef CouponsResponse
        
        
        @property { Page } [page]
        
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
        
        
        @property { string } code
        
        @property { Ownership } ownership
        
        @property { Restrictions } [restrictions]
        
        @property { Validity } validity
        
        @property { CouponDateMeta } [date_meta]
        
        @property { CouponAction } [action]
        
        @property { Array<string> } [tags]
        
        @property { CouponAuthor } [author]
        
        @property { Array<Rule> } rule
        
        @property { CouponSchedule } [_schedule]
        
        @property { RuleDefinition } rule_definition
        
        @property { Identifier } identifiers
        
        @property { State } [state]
        
        @property { Validation } [validation]
        
        @property { string } type_slug
        
        @property { DisplayMeta } display_meta
        
         
    */

/**
        @typedef CouponPartialUpdate
        
        
        @property { boolean } [archive]
        
        @property { CouponSchedule } [schedule]
        
         
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
   * @summary: Create user
   * @description: Create user
   * @param {Object} arg - arg object.
   * @param {CreateUserRequestSchema} arg.body
   **/
  createUser({ body } = {}) {
    const { error } = UserValidator.createUser().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update user
   * @description: Update user
   * @param {Object} arg - arg object.
   * @param {string} arg.userId - User ID
   * @param {UpdateUserRequestSchema} arg.body
   **/
  updateUser({ userId, body } = {}) {
    const { error } = UserValidator.updateUser().validate(
      {
        userId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/${userId}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create user session
   * @description: Create user session
   * @param {Object} arg - arg object.
   * @param {CreateUserSessionRequestSchema} arg.body
   **/
  createUserSession({ body } = {}) {
    const { error } = UserValidator.createUserSession().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/session`,
      queryObj,
      body
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
    * @summary: Get the items for a collection
    * @description: Get items from a collection specified by its `id`.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier of a collection.
    * @param {string} [arg.sortOn] - Each response will contain sort_on param, which should be sent back to make pagination work.
    * @param {string} [arg.pageId] - Each response will contain next_id param, which should be sent back to make pagination work.
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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

class FileStorage {
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
    const { error } = FileStorageValidator.appStartUpload().validate(
      {
        namespace,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
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
    const { error } = FileStorageValidator.appCompleteUpload().validate(
      {
        namespace,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
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
    const { error } = FileStorageValidator.appCopyFiles().validate(
      {
        body,
        sync,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
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
    * @param {number} [arg.pageNo] - page no
    
    **/
  appBrowse({ namespace, pageNo } = {}) {
    const { error } = FileStorageValidator.appBrowse().validate(
      {
        namespace,
        pageNo,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/browse/`,
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
    * @param {number} arg.companyId - company_id
    * @param {number} arg.applicationId - application_id
    
    **/
  appBrowsePaginator({ namespace, companyId, applicationId } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.appBrowse({
        namespace: namespace,
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
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
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get short links
    * @description: Get short links
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page number
    * @param {number} [arg.pageSize] - Current page size
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
      return Promise.reject(error);
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
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get short links
    * @description: Get short links
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company Id
    * @param {string} arg.applicationId - Application Id
    * @param {number} [arg.pageSize] - Current page size
    * @param {string} [arg.createdBy] - Short link creator
    * @param {string} [arg.active] - Short link active status
    * @param {string} [arg.q] - Search text for original and short url
    
    **/
  getShortLinksPaginator({
    companyId,
    applicationId,
    pageSize,
    createdBy,
    active,
    q,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getShortLinks({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        createdBy: createdBy,
        active: active,
        q: q,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
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
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/${hash}/`,
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
   * @param {ShortLinkReq} arg.body
   **/
  updateShortLinkById({ id, body } = {}) {
    const { error } = ShareValidator.updateShortLinkById().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/${id}/`,
      queryObj,
      body
    );
  }
}

class Configuration {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Get latest build config
    * @description: Get latest build config
    * @param {Object} arg - arg object.
    * @param {string} arg.platformType - Current platform name
    
    **/
  getBuildConfig({ platformType } = {}) {
    const { error } = ConfigurationValidator.getBuildConfig().validate(
      {
        platformType,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/build/${platformType}/configuration`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update build config for next build
   * @description: Update build config for next build
   * @param {Object} arg - arg object.
   * @param {string} arg.platformType - Current platform name
   * @param {MobileAppConfigRequest} arg.body
   **/
  updateBuildConfig({ platformType, body } = {}) {
    const { error } = ConfigurationValidator.updateBuildConfig().validate(
      {
        platformType,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/build/${platformType}/configuration`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get previous versions
    * @description: Get previous versions
    * @param {Object} arg - arg object.
    * @param {string} arg.platformType - Current platform name
    
    **/
  getPreviousVersions({ platformType } = {}) {
    const { error } = ConfigurationValidator.getPreviousVersions().validate(
      {
        platformType,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/build/${platformType}/versions`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get features of application
    * @description: Get features of application
    * @param {Object} arg - arg object.
    
    **/
  getAppFeatures({} = {}) {
    const { error } = ConfigurationValidator.getAppFeatures().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/feature`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update features of application
   * @description: Update features of application
   * @param {Object} arg - arg object.
   * @param {AppFeatureRequest} arg.body
   **/
  updateAppFeatures({ body } = {}) {
    const { error } = ConfigurationValidator.updateAppFeatures().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/feature`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get basic application details
    * @description: Get basic application details like name
    * @param {Object} arg - arg object.
    
    **/
  getAppBasicDetails({} = {}) {
    const { error } = ConfigurationValidator.getAppBasicDetails().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/detail`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add or update application's basic details
   * @description: Add or update application's basic details
   * @param {Object} arg - arg object.
   * @param {ApplicationDetail} arg.body
   **/
  updateAppBasicDetails({ body } = {}) {
    const { error } = ConfigurationValidator.updateAppBasicDetails().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/detail`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get application information
    * @description: Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.
    * @param {Object} arg - arg object.
    
    **/
  getAppContactInfo({} = {}) {
    const { error } = ConfigurationValidator.getAppContactInfo().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/information`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Get application information
   * @description: Save Application Current Information. This includes information about social links, address and contact information of an application.
   * @param {Object} arg - arg object.
   * @param {ApplicationInformation} arg.body
   **/
  updateAppContactInfo({ body } = {}) {
    const { error } = ConfigurationValidator.updateAppContactInfo().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/information`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get social tokens
    * @description: Get social tokens.
    * @param {Object} arg - arg object.
    
    **/
  getAppApiTokens({} = {}) {
    const { error } = ConfigurationValidator.getAppApiTokens().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/token`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add social tokens
   * @description: Add social tokens.
   * @param {Object} arg - arg object.
   * @param {TokenResponse} arg.body
   **/
  updateAppApiTokens({ body } = {}) {
    const { error } = ConfigurationValidator.updateAppApiTokens().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/token`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Application inventory enabled companies
    * @description: Application inventory enabled companies.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getAppCompanies({ pageNo, pageSize } = {}) {
    const { error } = ConfigurationValidator.getAppCompanies().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/companies`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Application inventory enabled companies
    * @description: Application inventory enabled companies.
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Current company id
    * @param {string} arg.applicationId - Current application id
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getAppCompaniesPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAppCompanies({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
    *
    * @summary: Application inventory enabled stores
    * @description: Application inventory enabled stores.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getAppStores({ pageNo, pageSize } = {}) {
    const { error } = ConfigurationValidator.getAppStores().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stores`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Application inventory enabled stores
    * @description: Application inventory enabled stores.
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Current company id
    * @param {string} arg.applicationId - Current application id
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getAppStoresPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAppStores({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
    *
    * @summary: Get application configuration
    * @description: Get application configuration for various features and data
    * @param {Object} arg - arg object.
    
    **/
  getInventoryConfig({} = {}) {
    const { error } = ConfigurationValidator.getInventoryConfig().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/configuration`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update application configuration
   * @description: Update application configuration for various features and data
   * @param {Object} arg - arg object.
   * @param {ApplicationInventory} arg.body
   **/
  updateInventoryConfig({ body } = {}) {
    const { error } = ConfigurationValidator.updateInventoryConfig().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/configuration`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Partially update application configuration
   * @description: Partially update application configuration for various features and data
   * @param {Object} arg - arg object.
   * @param {AppInventoryPartialUpdate} arg.body
   **/
  partiallyUpdateInventoryConfig({ body } = {}) {
    const {
      error,
    } = ConfigurationValidator.partiallyUpdateInventoryConfig().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/configuration`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get application enabled currency list
    * @description: Get application enabled currency list
    * @param {Object} arg - arg object.
    
    **/
  getAppCurrencyConfig({} = {}) {
    const { error } = ConfigurationValidator.getAppCurrencyConfig().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/currency`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add initial application supported currency
   * @description: Add initial application supported currency for various features and data. Default INR will be enabled.
   * @param {Object} arg - arg object.
   * @param {AppSupportedCurrency} arg.body
   **/
  updateAppCurrencyConfig({ body } = {}) {
    const { error } = ConfigurationValidator.updateAppCurrencyConfig().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/currency`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Get ordering store by filter
   * @description: Get ordering store by filter
   * @param {Object} arg - arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {FilterOrderingStoreRequest} arg.body
   **/
  getOrderingStoresByFilter({ body, pageNo, pageSize } = {}) {
    const {
      error,
    } = ConfigurationValidator.getOrderingStoresByFilter().validate(
      {
        body,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ordering-store/stores/filter`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Get ordering store by filter
   * @description: Get ordering store by filter
   * @param {Object} arg - arg object.
   * @param {string} arg.companyId - Current company id
   * @param {string} arg.applicationId - Current application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {FilterOrderingStoreRequest} arg.body
   **/
  getOrderingStoresByFilterPaginator({
    companyId,
    applicationId,
    pageSize,
    body,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getOrderingStoresByFilter({
        companyId: companyId,
        applicationId: applicationId,
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
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   *
   * @summary: Add/Update ordering store config
   * @description: Add/Update ordering store config.
   * @param {Object} arg - arg object.
   * @param {OrderingStoreConfig} arg.body
   **/
  updateOrderingStoreConfig({ body } = {}) {
    const {
      error,
    } = ConfigurationValidator.updateOrderingStoreConfig().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ordering-store`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get attached domain list
    * @description: Get attached domain list.
    * @param {Object} arg - arg object.
    
    **/
  getDomains({} = {}) {
    const { error } = ConfigurationValidator.getDomains().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/domain`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add new domain to application
   * @description: Add new domain to application.
   * @param {Object} arg - arg object.
   * @param {DomainAddRequest} arg.body
   **/
  addDomain({ body } = {}) {
    const { error } = ConfigurationValidator.addDomain().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/domain`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Remove attached domain
    * @description: Remove attached domain.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Domain _id
    
    **/
  removeDomainById({ id } = {}) {
    const { error } = ConfigurationValidator.removeDomainById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/domain/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Change domain type
   * @description: Change a domain to Primary or Shortlink domain
   * @param {Object} arg - arg object.
   * @param {UpdateDomainTypeRequest} arg.body
   **/
  changeDomainType({ body } = {}) {
    const { error } = ConfigurationValidator.changeDomainType().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/domain/set-domain`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Get domain connected status.
   * @description: Get domain connected status. Check if domain is live and mapped to appropriate IP to fynd servers.
   * @param {Object} arg - arg object.
   * @param {DomainStatusRequest} arg.body
   **/
  getDomainStatus({ body } = {}) {
    const { error } = ConfigurationValidator.getDomainStatus().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/domain/domain-status`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get application data from id
    * @description: Get application data from id
    * @param {Object} arg - arg object.
    
    **/
  getApplicationById({} = {}) {
    const { error } = ConfigurationValidator.getApplicationById().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}`,
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
      return Promise.reject(error);
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
    * @summary: Get with single coupon details or coupon list
    * @description: Get coupon list with pagination
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Current company id
    * @param {string} arg.applicationId - Current Application _id
    * @param {number} [arg.pageSize] - 
    * @param {boolean} [arg.isArchived] - 
    * @param {string} [arg.title] - 
    * @param {boolean} [arg.isPublic] - 
    * @param {boolean} [arg.isDisplay] - 
    * @param {string} [arg.typeSlug] - 
    * @param {string} [arg.code] - 
    
    **/
  getCouponsPaginator({
    companyId,
    applicationId,
    pageSize,
    isArchived,
    title,
    isPublic,
    isDisplay,
    typeSlug,
    code,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getCoupons({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        isArchived: isArchived,
        title: title,
        isPublic: isPublic,
        isDisplay: isDisplay,
        typeSlug: typeSlug,
        code: code,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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

module.exports = PlatformApplicationClient;
