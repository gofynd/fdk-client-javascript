const {
  LeadValidator,
  PaymentValidator,
  OrderValidator,
  CatalogValidator,
  CompanyProfileValidator,
  FileStorageValidator,
  ConfigurationValidator,
} = require("./PlatformModels");
const PlatformApplicationClient = require("./PlatformApplicationClient");
const Paginator = require("../common/Paginator");
const PlatformAPIClient = require("./PlatformAPIClient");

class PlatformClient {
  constructor(config) {
    this.config = config;
    this.lead = new Lead(config);
    this.payment = new Payment(config);
    this.order = new Order(config);
    this.catalog = new Catalog(config);
    this.companyProfile = new CompanyProfile(config);
    this.fileStorage = new FileStorage(config);
    this.configuration = new Configuration(config);
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
        @typedef GetSearchWordsData
        
        
        @property { string } [app_id]
        
        @property { Object } [result]
        
        @property { Object } [_custom_json]
        
        @property { Array<string> } [words]
        
        @property { string } [uid]
        
         
    */

/**
        @typedef GetSearchWordsDetailResponse
        
        
        @property { GetSearchWordsData } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ErrorResponse
        
        
        @property { Object } [meta]
        
        @property { string } [code]
        
        @property { number } [status]
        
        @property { string } [message]
        
         
    */

/**
        @typedef DeleteResponse
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef SearchKeywordResult
        
        
        @property { Object } query
        
        @property { string } sort_on
        
         
    */

/**
        @typedef CreateSearchKeyword
        
        
        @property { string } [app_id]
        
        @property { SearchKeywordResult } result
        
        @property { Object } [_custom_json]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [words]
        
         
    */

/**
        @typedef GetSearchWordsResponse
        
        
        @property { Array<GetSearchWordsData> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef GetAutocompleteWordsData
        
        
        @property { string } [app_id]
        
        @property { Object } [_custom_json]
        
        @property { Array<Object> } [results]
        
        @property { Array<string> } [words]
        
        @property { string } [uid]
        
         
    */

/**
        @typedef GetAutocompleteWordsResponse
        
        
        @property { Array<GetAutocompleteWordsData> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef Media
        
        
        @property { string } [url]
        
        @property { string } [type]
        
         
    */

/**
        @typedef AutocompletePageAction
        
        
        @property { Object } [params]
        
        @property { Object } query
        
        @property { string } [url]
        
        @property { string } type
        
         
    */

/**
        @typedef AutocompleteAction
        
        
        @property { string } [type]
        
        @property { AutocompletePageAction } [page]
        
         
    */

/**
        @typedef AutocompleteResult
        
        
        @property { Media } [logo]
        
        @property { Object } [_custom_json]
        
        @property { string } [display]
        
        @property { AutocompleteAction } [action]
        
         
    */

/**
        @typedef CreateAutocompleteKeyword
        
        
        @property { string } [app_id]
        
        @property { Object } [_custom_json]
        
        @property { boolean } [is_active]
        
        @property { Array<AutocompleteResult> } [results]
        
        @property { Array<string> } [words]
        
         
    */

/**
        @typedef CreateAutocompleteWordsResponse
        
        
        @property { string } [app_id]
        
        @property { Object } [_custom_json]
        
        @property { Array<Object> } [results]
        
        @property { Array<string> } [words]
        
         
    */

/**
        @typedef ProductBundleItem
        
        
        @property { number } min_quantity
        
        @property { boolean } [auto_select]
        
        @property { boolean } [allow_remove]
        
        @property { boolean } [auto_add_to_cart]
        
        @property { number } product_uid
        
        @property { number } max_quantity
        
         
    */

/**
        @typedef GetProductBundleCreateResponse
        
        
        @property { Array<string> } [page_visibility]
        
        @property { string } [created_on]
        
        @property { number } [company_id]
        
        @property { Object } [modified_by]
        
        @property { boolean } [same_store_assignment]
        
        @property { string } [id]
        
        @property { boolean } is_active
        
        @property { Object } [created_by]
        
        @property { string } [modified_on]
        
        @property { string } choice
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } slug
        
        @property { string } name
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
         
    */

/**
        @typedef GetProductBundleListingResponse
        
        
        @property { Array<GetProductBundleCreateResponse> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ProductBundleRequest
        
        
        @property { Array<string> } [page_visibility]
        
        @property { string } [created_on]
        
        @property { Object } [modified_by]
        
        @property { boolean } [same_store_assignment]
        
        @property { boolean } is_active
        
        @property { Object } [created_by]
        
        @property { string } [modified_on]
        
        @property { string } choice
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } slug
        
        @property { string } name
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
         
    */

/**
        @typedef LimitedProductData
        
        
        @property { Object } [attributes]
        
        @property { number } [quantity]
        
        @property { Array<string> } [sizes]
        
        @property { string } [country_of_origin]
        
        @property { Object } [identifier]
        
        @property { string } [item_code]
        
        @property { string } [name]
        
        @property { Object } [price]
        
        @property { string } [slug]
        
        @property { string } [short_description]
        
        @property { number } [uid]
        
        @property { Array<string> } [images]
        
         
    */

/**
        @typedef Size
        
        
        @property { string } [value]
        
        @property { boolean } [is_available]
        
        @property { number } [quantity]
        
        @property { string } [display]
        
         
    */

/**
        @typedef Price
        
        
        @property { number } [max_marked]
        
        @property { number } [min_marked]
        
        @property { number } [max_effective]
        
        @property { number } [min_effective]
        
        @property { string } [currency]
        
         
    */

/**
        @typedef GetProducts
        
        
        @property { number } [min_quantity]
        
        @property { LimitedProductData } [product_details]
        
        @property { boolean } [auto_select]
        
        @property { Array<Size> } [sizes]
        
        @property { boolean } [allow_remove]
        
        @property { boolean } [auto_add_to_cart]
        
        @property { Price } [price]
        
        @property { number } [product_uid]
        
        @property { number } [max_quantity]
        
         
    */

/**
        @typedef GetProductBundleResponse
        
        
        @property { number } [company_id]
        
        @property { boolean } [same_store_assignment]
        
        @property { boolean } [is_active]
        
        @property { Array<GetProducts> } [products]
        
        @property { string } [choice]
        
        @property { string } [slug]
        
        @property { Array<string> } [page_visibility]
        
        @property { Object } [meta]
        
        @property { string } [name]
        
        @property { string } [logo]
        
         
    */

/**
        @typedef ProductBundleUpdateRequest
        
        
        @property { Array<string> } [page_visibility]
        
        @property { Object } [modified_by]
        
        @property { boolean } [same_store_assignment]
        
        @property { boolean } is_active
        
        @property { string } [modified_on]
        
        @property { string } choice
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } slug
        
        @property { string } name
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
         
    */

/**
        @typedef ListSizeGuide
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
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
        
        
        @property { string } [created_on]
        
        @property { number } [company_id]
        
        @property { Object } [modified_by]
        
        @property { string } [subtitle]
        
        @property { boolean } [active]
        
        @property { string } [id]
        
        @property { string } [image]
        
        @property { number } [brand_id]
        
        @property { Object } [created_by]
        
        @property { string } title
        
        @property { string } [modified_on]
        
        @property { string } [tag]
        
        @property { string } name
        
        @property { Guide } [guide]
        
        @property { string } [description]
        
         
    */

/**
        @typedef SuccessResponse
        
        
        @property { number } [uid]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef SizeGuideResponse
        
        
        @property { string } [created_on]
        
        @property { number } [company_id]
        
        @property { Object } [modified_by]
        
        @property { string } [subtitle]
        
        @property { boolean } [active]
        
        @property { string } [id]
        
        @property { number } [brand_id]
        
        @property { Object } [created_by]
        
        @property { string } [title]
        
        @property { string } [modified_on]
        
        @property { string } [tag]
        
        @property { string } [name]
        
        @property { Object } [guide]
        
         
    */

/**
        @typedef MetaDataListingSortMetaResponse
        
        
        @property { string } [key]
        
        @property { string } [display]
        
         
    */

/**
        @typedef MetaDataListingSortResponse
        
        
        @property { Array<MetaDataListingSortMetaResponse> } [data]
        
         
    */

/**
        @typedef MetaDataListingFilterMetaResponse
        
        
        @property { string } [key]
        
        @property { Array<Object> } [units]
        
        @property { Array<string> } [filter_types]
        
        @property { string } [display]
        
         
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
        @typedef GetCatalogConfigurationDetailsProduct
        
        
        @property { Object } [variant]
        
        @property { Object } [detail]
        
        @property { Object } [compare]
        
        @property { Object } [similar]
        
         
    */

/**
        @typedef GetCatalogConfigurationMetaData
        
        
        @property { MetaDataListingResponse } [listing]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
         
    */

/**
        @typedef ProductSize
        
        
        @property { number } max
        
        @property { number } min
        
         
    */

/**
        @typedef ConfigurationProductVariantConfig
        
        
        @property { string } key
        
        @property { number } priority
        
        @property { boolean } is_active
        
        @property { ProductSize } size
        
        @property { string } display_type
        
        @property { string } name
        
        @property { string } [logo]
        
         
    */

/**
        @typedef ConfigurationProductVariant
        
        
        @property { Array<ConfigurationProductVariantConfig> } [config]
        
         
    */

/**
        @typedef ConfigurationProductConfig
        
        
        @property { string } key
        
        @property { string } [subtitle]
        
        @property { number } priority
        
        @property { boolean } is_active
        
        @property { string } [title]
        
        @property { ProductSize } [size]
        
        @property { string } [logo]
        
         
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
        @typedef ConfigurationListingSortConfig
        
        
        @property { string } key
        
        @property { number } priority
        
        @property { boolean } is_active
        
        @property { string } [name]
        
        @property { string } [logo]
        
         
    */

/**
        @typedef ConfigurationListingSort
        
        
        @property { string } default_key
        
        @property { Array<ConfigurationListingSortConfig> } [config]
        
         
    */

/**
        @typedef ConfigurationBucketPoints
        
        
        @property { number } [end]
        
        @property { number } [start]
        
         
    */

/**
        @typedef ConfigurationListingFilterValue
        
        
        @property { string } [sort]
        
        @property { string } [condition]
        
        @property { Array<ConfigurationBucketPoints> } [bucket_points]
        
        @property { string } [value]
        
        @property { Object } [map]
        
         
    */

/**
        @typedef ConfigurationListingFilterConfig
        
        
        @property { string } key
        
        @property { number } priority
        
        @property { boolean } is_active
        
        @property { ConfigurationListingFilterValue } [value_config]
        
        @property { string } type
        
        @property { string } [name]
        
        @property { string } [logo]
        
         
    */

/**
        @typedef ConfigurationListingFilter
        
        
        @property { Array<ConfigurationListingFilterConfig> } [attribute_config]
        
        @property { boolean } allow_single
        
         
    */

/**
        @typedef ConfigurationListing
        
        
        @property { ConfigurationListingSort } sort
        
        @property { ConfigurationListingFilter } filter
        
         
    */

/**
        @typedef AppCatalogConfiguration
        
        
        @property { string } app_id
        
        @property { ConfigurationProduct } [product]
        
        @property { string } [id]
        
        @property { ConfigurationListing } [listing]
        
        @property { string } [config_id]
        
        @property { string } config_type
        
         
    */

/**
        @typedef GetAppCatalogConfiguration
        
        
        @property { boolean } [is_default]
        
        @property { AppCatalogConfiguration } [data]
        
         
    */

/**
        @typedef AppConfiguration
        
        
        @property { string } app_id
        
        @property { ConfigurationProduct } [product]
        
        @property { ConfigurationListing } [listing]
        
        @property { string } [config_id]
        
        @property { string } config_type
        
         
    */

/**
        @typedef GetCatalogConfigurationDetailsSchemaListing
        
        
        @property { Object } [sort]
        
        @property { Object } [filter]
        
         
    */

/**
        @typedef EntityConfiguration
        
        
        @property { string } app_id
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { string } [id]
        
        @property { GetCatalogConfigurationDetailsSchemaListing } [listing]
        
        @property { string } [config_id]
        
        @property { string } config_type
        
         
    */

/**
        @typedef GetAppCatalogEntityConfiguration
        
        
        @property { boolean } [is_default]
        
        @property { EntityConfiguration } [data]
        
         
    */

/**
        @typedef ProductFiltersKey
        
        
        @property { string } [kind]
        
        @property { string } [logo]
        
        @property { string } display
        
        @property { string } name
        
         
    */

/**
        @typedef ProductFiltersValue
        
        
        @property { number } [max]
        
        @property { string } [query_format]
        
        @property { string } [currency_symbol]
        
        @property { number } [count]
        
        @property { number } [selected_max]
        
        @property { boolean } is_selected
        
        @property { string } display
        
        @property { number } [selected_min]
        
        @property { string } value
        
        @property { number } [min]
        
        @property { string } [display_format]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef ProductFilters
        
        
        @property { ProductFiltersKey } key
        
        @property { Array<ProductFiltersValue> } values
        
         
    */

/**
        @typedef ProductSortOn
        
        
        @property { string } [value]
        
        @property { boolean } [is_selected]
        
        @property { string } [name]
        
         
    */

/**
        @typedef GetCollectionQueryOptionResponse
        
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sort_on]
        
         
    */

/**
        @typedef CollectionListingFilterTag
        
        
        @property { boolean } [is_selected]
        
        @property { string } [display]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CollectionListingFilterType
        
        
        @property { boolean } [is_selected]
        
        @property { string } [display]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CollectionListingFilter
        
        
        @property { Array<CollectionListingFilterTag> } [tags]
        
        @property { Array<CollectionListingFilterType> } [type]
        
         
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
        @typedef BannerImage
        
        
        @property { string } [url]
        
        @property { string } [aspect_ratio]
        
         
    */

/**
        @typedef ImageUrls
        
        
        @property { BannerImage } [landscape]
        
        @property { BannerImage } [portrait]
        
         
    */

/**
        @typedef Media1
        
        
        @property { Object } [meta]
        
        @property { string } url
        
        @property { string } [type]
        
         
    */

/**
        @typedef GetCollectionDetailNest
        
        
        @property { string } [app_id]
        
        @property { ProductListingAction } [action]
        
        @property { ImageUrls } [banners]
        
        @property { Object } [cron]
        
        @property { Array<string> } [tag]
        
        @property { string } [slug]
        
        @property { Object } [meta]
        
        @property { string } [description]
        
        @property { Object } [_schedule]
        
        @property { Object } [query]
        
        @property { string } [type]
        
        @property { boolean } [allow_sort]
        
        @property { string } [name]
        
        @property { boolean } [allow_facets]
        
        @property { string } [uid]
        
        @property { Object } [badge]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { boolean } [is_active]
        
        @property { Media1 } [logo]
        
         
    */

/**
        @typedef GetCollectionListingResponse
        
        
        @property { CollectionListingFilter } [filters]
        
        @property { Array<GetCollectionDetailNest> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef CollectionImage
        
        
        @property { string } url
        
        @property { string } aspect_ratio
        
         
    */

/**
        @typedef CollectionBanner
        
        
        @property { CollectionImage } landscape
        
        @property { CollectionImage } portrait
        
         
    */

/**
        @typedef Schedule
        
        
        @property { string } [end]
        
        @property { string } [cron]
        
        @property { string } [start]
        
        @property { number } [duration]
        
         
    */

/**
        @typedef UserInfo
        
        
        @property { string } [email]
        
        @property { string } [uid]
        
        @property { string } [user_id]
        
        @property { string } [username]
        
         
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
        @typedef CreateCollection
        
        
        @property { string } app_id
        
        @property { CollectionBanner } banners
        
        @property { string } slug
        
        @property { Object } [meta]
        
        @property { string } [sort_on]
        
        @property { string } [description]
        
        @property { boolean } [published]
        
        @property { Schedule } [_schedule]
        
        @property { UserInfo } [created_by]
        
        @property { SeoDetail } [seo]
        
        @property { Object } [query]
        
        @property { string } type
        
        @property { boolean } [allow_facets]
        
        @property { string } name
        
        @property { boolean } [allow_sort]
        
        @property { CollectionBadge } [badge]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [tags]
        
        @property { Object } [_locale_language]
        
        @property { CollectionImage } logo
        
        @property { UserInfo } [modified_by]
        
        @property { Object } [_custom_json]
        
         
    */

/**
        @typedef CollectionCreateResponse
        
        
        @property { string } [app_id]
        
        @property { Object } [meta]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { Object } [_schedule]
        
        @property { boolean } [is_active]
        
        @property { ImageUrls } [banners]
        
        @property { Object } [cron]
        
        @property { Object } [query]
        
        @property { Array<string> } [tag]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [type]
        
        @property { boolean } [allow_sort]
        
        @property { boolean } [allow_facets]
        
        @property { BannerImage } [logo]
        
        @property { Object } [badge]
        
        @property { string } [description]
        
         
    */

/**
        @typedef CollectionDetailResponse
        
        
        @property { string } [app_id]
        
        @property { Object } [meta]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { Object } [_schedule]
        
        @property { boolean } [is_active]
        
        @property { ImageUrls } [banners]
        
        @property { Object } [cron]
        
        @property { Object } [query]
        
        @property { Array<string> } [tag]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [type]
        
        @property { boolean } [allow_sort]
        
        @property { boolean } [allow_facets]
        
        @property { Media1 } [logo]
        
        @property { Object } [badge]
        
        @property { string } [description]
        
         
    */

/**
        @typedef Price1
        
        
        @property { number } [max]
        
        @property { string } [currency_code]
        
        @property { string } [currency_symbol]
        
        @property { number } [min]
        
         
    */

/**
        @typedef ProductListingPrice
        
        
        @property { Price1 } [effective]
        
        @property { Price1 } [marked]
        
         
    */

/**
        @typedef ProductDetailAttribute
        
        
        @property { string } [key]
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */

/**
        @typedef ProductDetailGroupedAttribute
        
        
        @property { string } [title]
        
        @property { Array<ProductDetailAttribute> } [details]
        
         
    */

/**
        @typedef ProductBrand
        
        
        @property { ProductListingAction } [action]
        
        @property { number } [uid]
        
        @property { Media1 } [logo]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ProductListingDetail
        
        
        @property { Array<string> } [tryouts]
        
        @property { Object } [promo_meta]
        
        @property { string } [discount]
        
        @property { string } [item_code]
        
        @property { boolean } [sellable]
        
        @property { string } [image_nature]
        
        @property { string } slug
        
        @property { string } [description]
        
        @property { number } [rating_count]
        
        @property { Object } [attributes]
        
        @property { string } [item_type]
        
        @property { Object } [teaser_tag]
        
        @property { Array<string> } [similars]
        
        @property { string } [type]
        
        @property { string } [short_description]
        
        @property { string } [name]
        
        @property { ProductListingPrice } [price]
        
        @property { number } [uid]
        
        @property { string } [product_online_date]
        
        @property { Array<ProductDetailGroupedAttribute> } [grouped_attributes]
        
        @property { ProductBrand } [brand]
        
        @property { boolean } [has_variant]
        
        @property { Array<Media1> } [medias]
        
        @property { Array<string> } [highlights]
        
        @property { number } [rating]
        
        @property { string } [color]
        
         
    */

/**
        @typedef GetCollectionItemsResponse
        
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sort_on]
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef CollectionItemRequest
        
        
        @property { number } page_no
        
        @property { number } page_size
        
         
    */

/**
        @typedef UpdatedResponse
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef CatalogInsightBrand
        
        
        @property { number } [total_articles]
        
        @property { number } [article_freshness]
        
        @property { number } [total_sizes]
        
        @property { string } [name]
        
        @property { number } [available_articles]
        
        @property { number } [available_sizes]
        
         
    */

/**
        @typedef CatalogInsightItem
        
        
        @property { number } [count]
        
        @property { number } [out_of_stock_count]
        
        @property { number } [sellable_count]
        
         
    */

/**
        @typedef CatalogInsightResponse
        
        
        @property { CatalogInsightBrand } [brand_distribution]
        
        @property { CatalogInsightItem } [item]
        
         
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
        
        
        @property { Array<number> } [brand_ids]
        
        @property { string } opt_level
        
        @property { boolean } [enabled]
        
        @property { Array<number> } [store_ids]
        
         
    */

/**
        @typedef CompanyOptIn
        
        
        @property { number } created_on
        
        @property { Array<number> } brand_ids
        
        @property { number } company_id
        
        @property { Object } [modified_by]
        
        @property { Array<number> } store_ids
        
        @property { string } opt_level
        
        @property { boolean } enabled
        
        @property { number } modified_on
        
        @property { Object } [created_by]
        
        @property { string } platform
        
         
    */

/**
        @typedef GetOptInPlatform
        
        
        @property { Array<CompanyOptIn> } items
        
        @property { Page } page
        
         
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
        
        
        @property { number } [brand_id]
        
        @property { string } [brand_name]
        
        @property { number } [company_id]
        
        @property { number } [total_article]
        
         
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
        
        
        @property { string } [created_on]
        
        @property { string } [store_type]
        
        @property { number } [company_id]
        
        @property { string } [store_code]
        
        @property { Array<Object> } [documents]
        
        @property { string } [modified_on]
        
        @property { string } [display_name]
        
        @property { string } [name]
        
        @property { number } [uid]
        
        @property { Object } [timing]
        
        @property { Array<Object> } [additional_contacts]
        
         
    */

/**
        @typedef OptinStoreDetails
        
        
        @property { Array<StoreDetail> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AttributeMasterDetails
        
        
        @property { string } display_type
        
         
    */

/**
        @typedef AttributeSchemaRange
        
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */

/**
        @typedef AttributeMaster
        
        
        @property { AttributeSchemaRange } [range]
        
        @property { Array<string> } [allowed_values]
        
        @property { string } [format]
        
        @property { string } type
        
        @property { boolean } [mandatory]
        
        @property { boolean } [multi]
        
         
    */

/**
        @typedef AttributeMasterMandatoryDetails
        
        
        @property { Array<string> } [l3_keys]
        
         
    */

/**
        @typedef AttributeMasterMeta
        
        
        @property { AttributeMasterMandatoryDetails } mandatory_details
        
        @property { boolean } [enriched]
        
         
    */

/**
        @typedef AttributeMasterFilter
        
        
        @property { number } [priority]
        
        @property { boolean } indexing
        
        @property { Array<string> } [depends_on]
        
         
    */

/**
        @typedef GenderDetail
        
        
        @property { AttributeMasterDetails } [details]
        
        @property { AttributeMaster } [schema]
        
        @property { string } [id]
        
        @property { string } [logo]
        
        @property { boolean } [is_nested]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { AttributeMasterMeta } [meta]
        
        @property { boolean } [enabled_for_end_consumer]
        
        @property { AttributeMasterFilter } [filters]
        
        @property { Array<string> } [departments]
        
        @property { string } [description]
        
         
    */

/**
        @typedef ProdcutTemplateCategoriesResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef PTErrorResponse
        
        
        @property { string } [message]
        
        @property { Object } [errors]
        
        @property { string } [code]
        
        @property { number } [status]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef UserSerializer
        
        
        @property { string } [contact]
        
        @property { string } [user_id]
        
        @property { string } [username]
        
         
    */

/**
        @typedef GetDepartment
        
        
        @property { string } [created_on]
        
        @property { UserSerializer } [modified_by]
        
        @property { number } [priority_order]
        
        @property { number } [page_no]
        
        @property { string } [item_type]
        
        @property { boolean } [is_active]
        
        @property { UserSerializer } [created_by]
        
        @property { string } [modified_on]
        
        @property { string } [search]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { number } [uid]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [logo]
        
        @property { number } [page_size]
        
         
    */

/**
        @typedef DepartmentsResponse
        
        
        @property { Array<GetDepartment> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef DepartmentErrorResponse
        
        
        @property { string } [message]
        
        @property { Object } [errors]
        
        @property { string } [code]
        
        @property { number } [status]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef ProductTemplate
        
        
        @property { string } [created_on]
        
        @property { Array<string> } [attributes]
        
        @property { boolean } [is_archived]
        
        @property { Object } [modified_by]
        
        @property { boolean } [is_active]
        
        @property { Object } [created_by]
        
        @property { string } [modified_on]
        
        @property { boolean } is_physical
        
        @property { string } [logo]
        
        @property { string } [tag]
        
        @property { string } slug
        
        @property { string } [name]
        
        @property { Array<string> } [departments]
        
        @property { Array<string> } [categories]
        
        @property { string } [description]
        
         
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
        
        
        @property { boolean } [multivalue]
        
        @property { Array<MultipleCommon> } [data]
        
         
    */

/**
        @typedef Hierarchy
        
        
        @property { number } l2
        
        @property { number } l1
        
        @property { number } department
        
         
    */

/**
        @typedef CategoryMappingValues
        
        
        @property { number } [catalog_id]
        
        @property { string } name
        
         
    */

/**
        @typedef CategoryMapping
        
        
        @property { CategoryMappingValues } [facebook]
        
        @property { CategoryMappingValues } [ajio]
        
        @property { CategoryMappingValues } [google]
        
         
    */

/**
        @typedef Media2
        
        
        @property { string } landscape
        
        @property { string } logo
        
        @property { string } portrait
        
         
    */

/**
        @typedef Category
        
        
        @property { string } [created_on]
        
        @property { Array<string> } [tryouts]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { Object } [modified_by]
        
        @property { number } [priority]
        
        @property { boolean } is_active
        
        @property { Object } [created_by]
        
        @property { string } [modified_on]
        
        @property { string } [_id]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { Media2 } [media]
        
        @property { string } [slug]
        
        @property { string } name
        
        @property { number } [uid]
        
        @property { Array<string> } [synonyms]
        
        @property { Array<number> } departments
        
        @property { number } level
        
         
    */

/**
        @typedef CategoryResponse
        
        
        @property { Array<Category> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef CategoryRequestBody
        
        
        @property { Array<string> } [tryouts]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { number } level
        
        @property { number } [priority]
        
        @property { boolean } is_active
        
        @property { CategoryMapping } [marketplaces]
        
        @property { string } [slug]
        
        @property { string } name
        
        @property { Array<string> } [synonyms]
        
        @property { Array<number> } departments
        
        @property { Media2 } [media]
        
         
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
        
        
        @property { string } [created_on]
        
        @property { string } [image_nature]
        
        @property { string } [pattern]
        
        @property { string } [verified_on]
        
        @property { UserCommon } [created_by]
        
        @property { string } [product_fit]
        
        @property { string } [material]
        
        @property { string } [neck_type]
        
        @property { string } [sleeve_length]
        
        @property { boolean } [is_image_less_product]
        
        @property { Array<string> } [gender]
        
        @property { string } [primary_color]
        
        @property { string } [essential]
        
        @property { string } [stage]
        
        @property { UserCommon } [modified_by]
        
        @property { string } [primary_material]
        
        @property { string } [color]
        
        @property { string } [meta_nature]
        
        @property { string } [modified_on]
        
        @property { Array<string> } [l3_mapping]
        
        @property { VerifiedBy } [verified_by]
        
         
    */

/**
        @typedef ProductPublished
        
        
        @property { number } [product_online_date]
        
        @property { boolean } [is_set]
        
         
    */

/**
        @typedef Logo
        
        
        @property { string } [url]
        
        @property { string } [aspect_ratio]
        
        @property { number } [aspect_ratio_f]
        
        @property { string } [secure_url]
        
         
    */

/**
        @typedef Brand
        
        
        @property { number } [uid]
        
        @property { Logo } [logo]
        
        @property { string } [name]
        
         
    */

/**
        @typedef Product
        
        
        @property { number } [company_id]
        
        @property { boolean } [multi_size]
        
        @property { string } [id]
        
        @property { Array<string> } [all_sizes]
        
        @property { string } [item_code]
        
        @property { string } [slug]
        
        @property { string } [currency]
        
        @property { string } [description]
        
        @property { Attributes } [attributes]
        
        @property { boolean } [is_dependent]
        
        @property { string } [item_type]
        
        @property { Array<Object> } [sizes]
        
        @property { string } [category_slug]
        
        @property { string } [country_of_origin]
        
        @property { string } [size_guide]
        
        @property { string } [name]
        
        @property { number } [uid]
        
        @property { ProductPublished } [product_publish]
        
        @property { Brand } [brand]
        
        @property { boolean } [is_active]
        
        @property { string } [highlights]
        
        @property { boolean } [is_set]
        
        @property { Array<string> } [images]
        
        @property { Array<string> } [media]
        
        @property { string } [hsn_code]
        
        @property { string } [template_tag]
        
        @property { Array<number> } [departments]
        
         
    */

/**
        @typedef PageData
        
        
        @property { string } [current]
        
        @property { boolean } [has_next]
        
        @property { number } [size]
        
        @property { number } [item_total]
        
        @property { boolean } [has_previous]
        
         
    */

/**
        @typedef ProductListingResponse
        
        
        @property { Array<Product> } [items]
        
        @property { PageData } [page]
        
         
    */

/**
        @typedef CustomOrder
        
        
        @property { string } [manufacturing_time_unit]
        
        @property { number } [manufacturing_time]
        
        @property { boolean } [is_custom_order]
        
         
    */

/**
        @typedef TeaserTag
        
        
        @property { string } [url]
        
        @property { string } [tag]
        
         
    */

/**
        @typedef Trader
        
        
        @property { string } address
        
        @property { string } name
        
         
    */

/**
        @typedef ProductPublish
        
        
        @property { string } [product_online_date]
        
        @property { boolean } [is_set]
        
         
    */

/**
        @typedef ReturnConfig
        
        
        @property { number } [time]
        
        @property { string } [unit]
        
        @property { boolean } [returnable]
        
         
    */

/**
        @typedef OrderQuantity
        
        
        @property { boolean } [is_set]
        
        @property { number } [minimum]
        
        @property { number } [maximum]
        
         
    */

/**
        @typedef ProductCreateUpdate
        
        
        @property { number } company_id
        
        @property { CustomOrder } [custom_order]
        
        @property { boolean } [multi_size]
        
        @property { string } item_code
        
        @property { string } slug
        
        @property { string } currency
        
        @property { Object } [variants]
        
        @property { string } [description]
        
        @property { string } [requester]
        
        @property { boolean } [is_dependent]
        
        @property { number } [no_of_boxes]
        
        @property { string } item_type
        
        @property { string } category_slug
        
        @property { string } country_of_origin
        
        @property { TeaserTag } [teaser_tag]
        
        @property { string } [short_description]
        
        @property { string } name
        
        @property { string } [change_request_id]
        
        @property { number } [uid]
        
        @property { Trader } [trader]
        
        @property { string } [size_guide]
        
        @property { ProductPublish } [product_publish]
        
        @property { string } [trader_type]
        
        @property { boolean } [is_image_less_product]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [highlights]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [product_group_tag]
        
        @property { boolean } [is_set]
        
        @property { Array<Media1> } [media]
        
        @property { string } hsn_code
        
        @property { ReturnConfig } [return_config]
        
        @property { number } brand_uid
        
        @property { Object } [_custom_json]
        
        @property { OrderQuantity } [moq]
        
        @property { string } template_tag
        
        @property { Array<number> } departments
        
         
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
        
        
        @property { string } [created_on]
        
        @property { Array<string> } [cancelled_records]
        
        @property { number } [company_id]
        
        @property { string } [stage]
        
        @property { UserDetail } [modified_by]
        
        @property { string } [file_path]
        
        @property { number } [total]
        
        @property { number } [succeed]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [failed_records]
        
        @property { string } [modified_on]
        
        @property { UserDetail } [created_by]
        
        @property { ProductTemplate } [template]
        
        @property { number } [failed]
        
        @property { string } [template_tag]
        
        @property { number } [cancelled]
        
         
    */

/**
        @typedef ProductBulkRequestList
        
        
        @property { ProductBulkRequest } [items]
        
        @property { PageData } [page]
        
         
    */

/**
        @typedef UserInfo1
        
        
        @property { string } [email]
        
        @property { string } [uid]
        
        @property { string } [user_id]
        
        @property { string } [username]
        
         
    */

/**
        @typedef BulkJob
        
        
        @property { string } created_on
        
        @property { Array<Object> } [cancelled_records]
        
        @property { string } [custom_template_tag]
        
        @property { number } company_id
        
        @property { string } [stage]
        
        @property { UserInfo1 } [modified_by]
        
        @property { string } [file_path]
        
        @property { string } [tracking_url]
        
        @property { number } total
        
        @property { number } [succeed]
        
        @property { boolean } [is_active]
        
        @property { UserInfo1 } [created_by]
        
        @property { string } [modified_on]
        
        @property { Array<Object> } [failed_records]
        
        @property { number } [failed]
        
        @property { string } [template_tag]
        
        @property { number } [cancelled]
        
         
    */

/**
        @typedef BulkProductRequest
        
        
        @property { string } template_tag
        
        @property { number } company_id
        
        @property { string } batch_id
        
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
        @typedef Items
        
        
        @property { string } [created_on]
        
        @property { Array<string> } [cancelled_records]
        
        @property { number } [company_id]
        
        @property { string } [stage]
        
        @property { UserCommon } [modified_by]
        
        @property { string } [file_path]
        
        @property { string } [tracking_url]
        
        @property { string } [id]
        
        @property { number } [total]
        
        @property { number } [succeed]
        
        @property { UserCommon } [created_by]
        
        @property { Array<string> } [failed_records]
        
        @property { string } [modified_on]
        
        @property { boolean } [is_active]
        
        @property { number } [retry]
        
        @property { number } [failed]
        
        @property { number } [cancelled]
        
         
    */

/**
        @typedef BulkAssetResponse
        
        
        @property { Array<Items> } [items]
        
        @property { PageData } [page]
        
         
    */

/**
        @typedef ProductBulkAssets
        
        
        @property { string } url
        
        @property { number } [company_id]
        
        @property { Object } user
        
         
    */

/**
        @typedef InventoryRequest
        
        
        @property { number } [total]
        
        @property { number } [page_no]
        
        @property { string } [search]
        
        @property { string } [size]
        
        @property { number } [page_size]
        
         
    */

/**
        @typedef GTIN
        
        
        @property { string } gtin_type
        
        @property { string } gtin_value
        
        @property { boolean } [primary]
        
         
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
        
        
        @property { SizeDistribution } size_distribution
        
        @property { number } [quantity]
        
         
    */

/**
        @typedef InvSize
        
        
        @property { string } [item_dimensions_unit_of_measure]
        
        @property { number } price_effective
        
        @property { number } [item_length]
        
        @property { string } store_code
        
        @property { number } [item_width]
        
        @property { number } quantity
        
        @property { Array<GTIN> } identifiers
        
        @property { string } size
        
        @property { number } [price_transfer]
        
        @property { InventorySet } [set]
        
        @property { number } [item_weight]
        
        @property { number } price
        
        @property { string } [item_weight_unit_of_measure]
        
        @property { number } [item_height]
        
        @property { string } currency
        
        @property { boolean } [is_set]
        
         
    */

/**
        @typedef ItemQuery
        
        
        @property { number } [brand_uid]
        
        @property { number } [uid]
        
        @property { string } [item_code]
        
         
    */

/**
        @typedef InventoryRequest1
        
        
        @property { number } company_id
        
        @property { Array<InvSize> } sizes
        
        @property { ItemQuery } item
        
         
    */

/**
        @typedef BulkRequestGet
        
        
        @property { string } [custom_template_tag]
        
        @property { string } [stage]
        
        @property { number } [total]
        
        @property { number } [page_no]
        
        @property { string } [start_date]
        
        @property { string } [end_date]
        
        @property { string } [search]
        
        @property { string } [template_tag]
        
        @property { number } [page_size]
        
         
    */

/**
        @typedef CommonResponse
        
        
        @property { string } [success]
        
         
    */

/**
        @typedef Size1
        
        
        @property { string } [item_dimensions_unit_of_measure]
        
        @property { number } price_effective
        
        @property { number } [item_length]
        
        @property { string } store_code
        
        @property { number } [item_width]
        
        @property { number } quantity
        
        @property { string } seller_identifier
        
        @property { Array<Object> } [identifiers]
        
        @property { string } [size]
        
        @property { number } [price_transfer]
        
        @property { InventorySet } [set]
        
        @property { number } [item_weight]
        
        @property { number } price
        
        @property { string } [item_weight_unit_of_measure]
        
        @property { number } [item_height]
        
        @property { string } currency
        
        @property { boolean } [is_set]
        
         
    */

/**
        @typedef InventoryBulkRequest
        
        
        @property { number } company_id
        
        @property { Array<Size1> } sizes
        
        @property { string } batch_id
        
        @property { Object } [user]
        
         
    */

/**
        @typedef InventoryExportJob
        
        
        @property { string } task_id
        
        @property { string } [status]
        
        @property { Object } [request_params]
        
        @property { string } [trigger_on]
        
        @property { number } seller_id
        
        @property { string } [completed_on]
        
        @property { string } [url]
        
         
    */

/**
        @typedef InventoryExportRequest
        
        
        @property { Array<number> } [store]
        
        @property { Array<number> } [brand]
        
        @property { string } [type]
        
         
    */

/**
        @typedef FilerList
        
        
        @property { string } [value]
        
        @property { string } [display]
        
         
    */

/**
        @typedef InventoryConfig
        
        
        @property { boolean } [multivalues]
        
        @property { Array<FilerList> } [data]
        
         
    */

/**
        @typedef HsnCodesObject
        
        
        @property { string } [hsn_code]
        
        @property { number } [company_id]
        
        @property { number } [tax2]
        
        @property { number } [tax1]
        
        @property { boolean } [is_active]
        
        @property { number } [threshold1]
        
        @property { number } [threshold2]
        
        @property { boolean } [tax_on_mrp]
        
        @property { number } [uid]
        
        @property { string } [hs2_code]
        
        @property { boolean } [tax_on_esp]
        
         
    */

/**
        @typedef PageResponse
        
        
        @property { string } [current]
        
        @property { boolean } [has_next]
        
        @property { number } [size]
        
        @property { number } [item_total]
        
        @property { boolean } [has_previous]
        
         
    */

/**
        @typedef HsnCodesListingResponse
        
        
        @property { Array<HsnCodesObject> } [items]
        
        @property { PageResponse } [page]
        
         
    */

/**
        @typedef HsnUpsert
        
        
        @property { string } hsn_code
        
        @property { number } company_id
        
        @property { number } [tax2]
        
        @property { number } tax1
        
        @property { boolean } is_active
        
        @property { number } threshold1
        
        @property { number } [threshold2]
        
        @property { boolean } tax_on_mrp
        
        @property { number } [uid]
        
        @property { string } hs2_code
        
        @property { boolean } [tax_on_esp]
        
         
    */

/**
        @typedef HsnCode
        
        
        @property { HsnCodesObject } [data]
        
         
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
        @typedef BrandItem
        
        
        @property { ProductListingAction } [action]
        
        @property { string } [discount]
        
        @property { ImageUrls } [banners]
        
        @property { Array<string> } [departments]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { number } [uid]
        
        @property { Media } [logo]
        
         
    */

/**
        @typedef BrandListingResponse
        
        
        @property { Array<BrandItem> } [items]
        
        @property { Page } page
        
         
    */

/**
        @typedef Department
        
        
        @property { number } [priority_order]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { number } [uid]
        
        @property { Media } [logo]
        
         
    */

/**
        @typedef DepartmentResponse
        
        
        @property { Array<Department> } [items]
        
         
    */

/**
        @typedef DepartmentIdentifier
        
        
        @property { number } [uid]
        
        @property { string } [slug]
        
         
    */

/**
        @typedef CategoryItems
        
        
        @property { ProductListingAction } [action]
        
        @property { ImageUrls } [banners]
        
        @property { Array<Object> } [childs]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef DepartmentCategoryTree
        
        
        @property { Array<CategoryItems> } [items]
        
        @property { string } [department]
        
         
    */

/**
        @typedef CategoryListingResponse
        
        
        @property { Array<DepartmentIdentifier> } [departments]
        
        @property { Array<DepartmentCategoryTree> } [data]
        
         
    */

/**
        @typedef ApplicationProductListingResponse
        
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sort_on]
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Page } page
        
         
    */

/**
        @typedef ProductDetail
        
        
        @property { Array<string> } [tryouts]
        
        @property { Object } [promo_meta]
        
        @property { string } [item_code]
        
        @property { string } [image_nature]
        
        @property { string } slug
        
        @property { string } [description]
        
        @property { number } [rating_count]
        
        @property { Object } [attributes]
        
        @property { string } [item_type]
        
        @property { Object } [teaser_tag]
        
        @property { Array<string> } [similars]
        
        @property { string } [type]
        
        @property { string } [short_description]
        
        @property { string } [name]
        
        @property { number } [uid]
        
        @property { string } [product_online_date]
        
        @property { Array<ProductDetailGroupedAttribute> } [grouped_attributes]
        
        @property { ProductBrand } [brand]
        
        @property { boolean } [has_variant]
        
        @property { Array<Media1> } [medias]
        
        @property { Array<string> } [highlights]
        
        @property { number } [rating]
        
        @property { string } [color]
        
         
    */

/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [country]
        
        @property { string } [country_code]
        
         
    */

/**
        @typedef Document
        
        
        @property { string } type
        
        @property { string } value
        
        @property { boolean } [verified]
        
        @property { string } [url]
        
        @property { string } legal_name
        
         
    */

/**
        @typedef SellerPhoneNumber
        
        
        @property { number } country_code
        
        @property { string } number
        
         
    */

/**
        @typedef ContactDetails
        
        
        @property { Array<SellerPhoneNumber> } [phone]
        
        @property { Array<string> } [emails]
        
         
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
        @typedef GetAddressSerializer
        
        
        @property { number } [latitude]
        
        @property { string } [state]
        
        @property { number } [pincode]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { number } [longitude]
        
        @property { string } [country]
        
        @property { string } [address_type]
        
        @property { string } [address1]
        
        @property { string } [landmark]
        
        @property { string } [country_code]
        
         
    */

/**
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { UserSerializer } [created_by]
        
        @property { string } [name]
        
        @property { string } [created_on]
        
        @property { string } business_type
        
        @property { string } [business_info]
        
        @property { Object } [warnings]
        
        @property { BusinessCountryInfo } [business_country_info]
        
        @property { number } uid
        
        @property { UserSerializer } [modified_by]
        
        @property { UserSerializer } [verified_by]
        
        @property { Array<Document> } [documents]
        
        @property { ContactDetails } [contact_details]
        
        @property { string } [verified_on]
        
        @property { BusinessDetails } [business_details]
        
        @property { string } [stage]
        
        @property { boolean } [franchise_enabled]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [modified_on]
        
        @property { string } company_type
        
        @property { Array<string> } [notification_emails]
        
         
    */

/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [country]
        
        @property { string } [country_code]
        
         
    */

/**
        @typedef ReferralInfo
        
        
        @property { string } [referral_code]
        
         
    */

/**
        @typedef CompanyAddress
        
        
        @property { number } latitude
        
        @property { string } state
        
        @property { number } pincode
        
        @property { string } [address2]
        
        @property { string } city
        
        @property { number } longitude
        
        @property { string } country
        
        @property { string } address1
        
        @property { string } [landmark]
        
        @property { string } [country_code]
        
         
    */

/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { Document } document
        
        @property { Object } [warnings]
        
        @property { Array<number> } brands
        
        @property { BusinessCountryInfo1 } business_country_info
        
        @property { string } name
        
        @property { boolean } [franchise_enabled]
        
        @property { ReferralInfo } [referral_info]
        
        @property { number } [uid]
        
        @property { CompanyAddress } address
        
        @property { string } business_type
        
        @property { string } [business_info]
        
        @property { Array<string> } [notification_emails]
        
         
    */

/**
        @typedef DocumentsObj
        
        
        @property { number } [pending]
        
        @property { number } [verified]
        
         
    */

/**
        @typedef MetricsSerializer
        
        
        @property { DocumentsObj } [company_documents]
        
        @property { DocumentsObj } [brand]
        
        @property { string } [stage]
        
        @property { DocumentsObj } [store_documents]
        
        @property { number } [uid]
        
        @property { DocumentsObj } [store]
        
        @property { DocumentsObj } [product]
        
         
    */

/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [landscape]
        
        @property { string } [portrait]
        
         
    */

/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { Array<string> } [synonyms]
        
        @property { string } [brand_tier]
        
        @property { string } name
        
        @property { number } [company_id]
        
        @property { Object } [_custom_json]
        
        @property { string } [description]
        
        @property { number } [uid]
        
        @property { Object } [_locale_language]
        
        @property { string } logo
        
        @property { BrandBannerSerializer } [banner]
        
         
    */

/**
        @typedef UserSerializer1
        
        
        @property { string } [username]
        
        @property { string } [contact]
        
        @property { string } [user_id]
        
         
    */

/**
        @typedef GetBrandResponseSerializer
        
        
        @property { Array<string> } [synonyms]
        
        @property { UserSerializer1 } [created_by]
        
        @property { string } [verified_on]
        
        @property { string } [stage]
        
        @property { string } [modified_on]
        
        @property { UserSerializer1 } [modified_by]
        
        @property { Object } [warnings]
        
        @property { string } name
        
        @property { string } [created_on]
        
        @property { string } [slug_key]
        
        @property { string } [reject_reason]
        
        @property { string } [description]
        
        @property { Object } [_custom_json]
        
        @property { number } [uid]
        
        @property { UserSerializer1 } [verified_by]
        
        @property { Object } [_locale_language]
        
        @property { string } [logo]
        
        @property { BrandBannerSerializer } [banner]
        
         
    */

/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { Array<number> } brands
        
        @property { number } company
        
        @property { number } [uid]
        
         
    */

/**
        @typedef GetCompanySerializer
        
        
        @property { UserSerializer } [created_by]
        
        @property { string } [verified_on]
        
        @property { string } [stage]
        
        @property { string } [modified_on]
        
        @property { UserSerializer } [modified_by]
        
        @property { string } [name]
        
        @property { string } [created_on]
        
        @property { string } [reject_reason]
        
        @property { number } [uid]
        
        @property { UserSerializer } [verified_by]
        
        @property { string } [business_type]
        
        @property { string } [company_type]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
         
    */

/**
        @typedef CompanyBrandSerializer
        
        
        @property { UserSerializer1 } [created_by]
        
        @property { string } [verified_on]
        
        @property { GetBrandResponseSerializer } [brand]
        
        @property { string } [stage]
        
        @property { string } [modified_on]
        
        @property { UserSerializer1 } [modified_by]
        
        @property { Object } [warnings]
        
        @property { string } [created_on]
        
        @property { string } [reject_reason]
        
        @property { GetCompanySerializer } [company]
        
        @property { number } [uid]
        
        @property { UserSerializer1 } [verified_by]
        
         
    */

/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Page } [page]
        
        @property { Array<CompanyBrandSerializer> } [items]
        
         
    */

/**
        @typedef LocationManagerSerializer
        
        
        @property { string } [email]
        
        @property { SellerPhoneNumber } mobile_no
        
        @property { string } [name]
        
         
    */

/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */

/**
        @typedef LocationDayWiseSerializer
        
        
        @property { string } weekday
        
        @property { LocationTimingSerializer } [closing]
        
        @property { LocationTimingSerializer } [opening]
        
        @property { boolean } open
        
         
    */

/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { boolean } [on_same_store]
        
        @property { number } [store_uid]
        
         
    */

/**
        @typedef GetAddressSerializer1
        
        
        @property { number } [latitude]
        
        @property { string } [state]
        
        @property { number } [pincode]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { number } [longitude]
        
        @property { string } [country]
        
        @property { string } [address_type]
        
        @property { string } [address1]
        
        @property { string } [landmark]
        
        @property { string } [country_code]
        
         
    */

/**
        @typedef InvoiceCredSerializer
        
        
        @property { string } [username]
        
        @property { boolean } [enabled]
        
        @property { string } [password]
        
         
    */

/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [e_waybill]
        
        @property { InvoiceCredSerializer } [e_invoice]
        
         
    */

/**
        @typedef LocationSerializer
        
        
        @property { LocationManagerSerializer } [manager]
        
        @property { string } [stage]
        
        @property { Object } [warnings]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { string } code
        
        @property { ProductReturnConfigSerializer } [product_return_config]
        
        @property { string } name
        
        @property { Object } [_custom_json]
        
        @property { GetAddressSerializer1 } address
        
        @property { number } company
        
        @property { InvoiceDetailsSerializer } [gst_credentials]
        
        @property { number } [uid]
        
        @property { Array<SellerPhoneNumber> } [contact_numbers]
        
        @property { Array<Document> } [documents]
        
        @property { string } display_name
        
        @property { string } [store_type]
        
        @property { Array<string> } [notification_emails]
        
         
    */

/**
        @typedef LocationIntegrationType
        
        
        @property { string } [order]
        
        @property { string } [inventory]
        
         
    */

/**
        @typedef GetLocationSerializer
        
        
        @property { LocationIntegrationType } [integration_type]
        
        @property { UserSerializer1 } [created_by]
        
        @property { string } name
        
        @property { string } [created_on]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { Object } [warnings]
        
        @property { string } code
        
        @property { number } [uid]
        
        @property { UserSerializer1 } [modified_by]
        
        @property { UserSerializer1 } [verified_by]
        
        @property { Array<Document> } [documents]
        
        @property { string } [store_type]
        
        @property { string } [verified_on]
        
        @property { string } [stage]
        
        @property { string } phone_number
        
        @property { ProductReturnConfigSerializer } [product_return_config]
        
        @property { GetCompanySerializer } [company]
        
        @property { GetAddressSerializer } address
        
        @property { Array<SellerPhoneNumber> } [contact_numbers]
        
        @property { InvoiceDetailsSerializer } [gst_credentials]
        
        @property { string } [modified_on]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { string } display_name
        
        @property { Object } [_custom_json]
        
        @property { Array<string> } [notification_emails]
        
         
    */

/**
        @typedef LocationListSerializer
        
        
        @property { Page } [page]
        
        @property { Array<GetLocationSerializer> } [items]
        
         
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
    * @summary: Get gender attribute details
    * @description: This API allows to view the gender attribute details.
    * @param {Object} arg - arg object.
    * @param {string} arg.attributeSlug - slug of the attribute for which you want to view the genders
    
    **/
  getGenderAttribute({ attributeSlug } = {}) {
    const { error } = CatalogValidator.getGenderAttribute().validate(
      {
        attributeSlug,
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-attributes/${attributeSlug}`,
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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
      return Promise.reject(error);
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

module.exports = PlatformClient;
