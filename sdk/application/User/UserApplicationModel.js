const Joi = require("joi");

/**
 * @typedef UpdateUserAttributesRequest
 * @property {Object} [attributes] - Describes the request structure to update
 *   the user attribute.
 */

/**
 * @typedef UserAttributes
 * @property {Object} [attributes] - Describes the structure of user attribute.
 */

/**
 * @typedef DeleteApplicationUserRequestSchema
 * @property {string} [user_id] - User id for the application user.
 * @property {string} [reason] - Reason to delete the application user.
 * @property {string} [reason_id] - Reason id of request to delete the application user .
 * @property {string} [request_id] - ID of request to delete the application user .
 * @property {string} [otp] - OTP to verify the delete application user request.
 */

/**
 * @typedef EditEmailRequestSchema
 * @property {string} [email] - Email of the user.
 */

/**
 * @typedef SendVerificationLinkMobileRequestSchema
 * @property {boolean} [verified] - Boolean to specify if the phone number is
 *   verified or not.
 * @property {boolean} [active] - Boolean to specify if the phone number is active or not.
 * @property {string} [country_code] - Country code for the phone number.
 * @property {string} [phone] - Phone number.
 * @property {boolean} [primary] - Boolean to specify if the phone number is
 *   primary or not.
 */

/**
 * @typedef EditMobileRequestSchema
 * @property {string} [country_code] - Country code for the phone number.
 * @property {string} [phone] - Phone number of user.
 */

/**
 * @typedef EditProfileRequestSchema
 * @property {boolean} [encrypt_otp] - Set to true if you want to encrypt the OTP.
 * @property {string} [first_name] - First name of the application user.
 * @property {string} [last_name] - Last name of the application user.
 * @property {EditProfileMobileSchema} [mobile]
 * @property {string} [country_code] - Country code for the phone number.
 * @property {string} [email] - Email id of user.
 * @property {string} [gender] - Gender of user.
 * @property {string} [dob] - Date of birth of user.
 * @property {string} [profile_pic_url] - Profile picture of user.
 * @property {string} [android_hash] - Unique hash value.
 * @property {string} [sender] - Identity of the sender.
 * @property {string} [register_token] - Unique temporary registration of the user.
 */

/**
 * @typedef EditProfileMobileSchema
 * @property {string} [phone] - Phone number of user.
 * @property {string} [country_code] - Country code for the phone number.
 */

/**
 * @typedef SendEmailOtpRequestSchema
 * @property {string} [email] - Email of a user to send email OTP.
 * @property {string} [action] - Action to specify if to send or resent the OTP.
 * @property {string} [token] - Token to validate the request.
 * @property {string} [register_token] - Unique temporary registration of the user.
 */

/**
 * @typedef SendEmailForgotOtpRequestSchema
 * @property {string} [email] - Email of a user to send email OTP.
 * @property {string} [action] - Action to specify if to send or resent the OTP.
 * @property {string} [token] - Token to validate the request.
 */

/**
 * @typedef VerifyEmailOtpRequestSchema
 * @property {string} [email] - Email of a user to verify OTP.
 * @property {string} [action] - Action to verify the send or resent OTP.
 * @property {string} [register_token] - Unique temporary registration of the user.
 * @property {string} [otp] - OTP for verification.
 */

/**
 * @typedef VerifyEmailForgotOtpRequestSchema
 * @property {string} [email] - Email id of user.
 * @property {string} [otp] - OTP for verification.
 */

/**
 * @typedef VerifyOtpRequestSchema
 * @property {string} [request_id] - Unique request id for the OTP sent to mobile number.
 * @property {string} [register_token] - Unique temporary registration of the user.
 * @property {string} [otp] - OTP for verification.
 */

/**
 * @typedef VerifyMobileForgotOtpRequestSchema
 * @property {string} [request_id] - Unique request id for the OTP.
 * @property {string} [otp] - OTP for verification.
 */

/**
 * @typedef SendMobileOtpRequestSchema
 * @property {boolean} [encrypt_otp] - Set to true if you want to encrypt the OTP.
 * @property {string} [mobile] - Mobile number of user.
 * @property {string} [country_code] - Country code for the phone number.
 * @property {string} [action] - Action to specify if to send or resent the OTP.
 * @property {string} [token] - Token to validate the request.
 * @property {string} [android_hash] - Unique hash value.
 * @property {string} [force] - Force verify the OTP.
 */

/**
 * @typedef SendMobileForgotOtpRequestSchema
 * @property {string} [mobile] - Phone number of user.
 * @property {string} [country_code] - Country code for the phone number.
 * @property {string} [action] - Action to specify if to send or resent the OTP.
 * @property {string} [token] - Token to validate the request.
 * @property {string} [android_hash] - Unique hash value.
 */

/**
 * @typedef UpdatePasswordRequestSchema
 * @property {string} [old_password] - Old password.
 * @property {string} [new_password] - New password.
 */

/**
 * @typedef FormRegisterRequestSchema
 * @property {string} [first_name] - First name of the application user.
 * @property {string} [last_name] - Last name of the application user.
 * @property {string} [gender] - Gender of user.
 * @property {string} [email] - Email of user.
 * @property {string} [password] - Password of user.
 * @property {FormRegisterRequestSchemaPhone} [phone]
 * @property {string} [register_token] - Unique registration token of user.
 */

/**
 * @typedef TokenRequestBodySchema
 * @property {string} [token] - Unique token.
 */

/**
 * @typedef ForgotPasswordRequestSchema
 * @property {string} [code] - Unique code to verify request.
 * @property {string} [password] - Password of user.
 */

/**
 * @typedef CodeRequestBodySchema
 * @property {string} [code] - Unique code to verify request.
 */

/**
 * @typedef SendResetPasswordEmailRequestSchema
 * @property {string} [email] - Email id of user.
 */

/**
 * @typedef SendResetPasswordMobileRequestSchema
 * @property {string} [country_code] - Country code for the phone number.
 * @property {string} [mobile] - Phone number of user.
 */

/**
 * @typedef PasswordLoginRequestSchema
 * @property {string} [password] - Password of user.
 * @property {string} [username] - Username of user.
 */

/**
 * @typedef SendOtpRequestSchema
 * @property {boolean} [encrypt_otp] - Eet to true if you want to encrypt the OTP.
 * @property {string} [country_code] - Country code for the phone number.
 * @property {string} [mobile] - Phone number.
 * @property {string} [android_hash] - Unique hash value.
 */

/**
 * @typedef OAuthRequestSchema
 * @property {boolean} [is_signed_in] - Boolean to specify if the user is signed in .
 * @property {OAuthRequestSchemaOauth2} [oauth2]
 * @property {OAuthRequestSchemaProfile} [profile]
 */

/**
 * @typedef OAuthRequestAppleSchema
 * @property {string} [user_identifier] - Unique user identifier.
 * @property {OAuthRequestAppleSchemaOauth} [oauth]
 * @property {OAuthRequestAppleSchemaProfile} [profile]
 */

/**
 * @typedef UserObjectSchema
 * @property {UserSchema} [user]
 */

/**
 * @typedef AuthSuccess
 * @property {string} [register_token] - Unique registration token for user.
 * @property {boolean} [user_exists] - Boolean which specifies if user is registered.
 * @property {UserSchema} [user]
 */

/**
 * @typedef UserExistsResponse
 * @property {boolean} [user_exists] - Boolean which specifies if user is
 *   registered or not.
 */

/**
 * @typedef SendOtpResponse
 * @property {number} [resend_timer] - Time after which opt can be resent.
 * @property {string} [resend_token] - Unique token to identify the OTP send
 *   request and resend the token.
 * @property {boolean} [success] - Specify if the OTP is successfully sent.
 * @property {string} [request_id] - Unique request id for the OTP.
 * @property {string} [message] - Message to specify the OTP send status. Eg.
 *   OTP sent, failed to send OTP etc.
 * @property {string} [mobile] - Phone number of user.
 * @property {string} [country_code] - Country code for the phone number.
 * @property {string} [email] - Email id of user.
 * @property {string} [resend_email_token] - Unique token to identify the OTP
 *   send request and resend the token on email.
 * @property {string} [register_token] - Unique registration token for user.
 * @property {boolean} [verify_email_otp] - If email OTP verification is
 *   mandatory for registration.
 * @property {boolean} [verify_mobile_otp] - If mobile OTP verification is
 *   mandatory for registration.
 * @property {boolean} [user_exists] - If user is registered or not.
 */

/**
 * @typedef ProfileEditSuccess
 * @property {UserSchema} [user]
 * @property {string} [register_token] - Unique registration token for user.
 * @property {string} [resend_email_token] - Unique token to identify the
 *   request for OTP verification in case of unverified email.
 * @property {boolean} [user_exists] - If user is registered or not.
 * @property {boolean} [verify_email_link] - Whether to send a link to verify
 *   the registered email id of the user.
 * @property {boolean} [verify_email_otp] - Whether to send a OTP to verify the
 *   registered email id of the user.
 * @property {boolean} [verify_mobile_otp] - Whether to send a OTP to verify the
 *   registered phone of the user.
 * @property {string} [email] - Email id of user.
 * @property {string} [request_id] - A random uuid string used to track the request.
 * @property {string} [country_code] - The country specific prefix for the phone number.
 * @property {string} [mobile] - The user's mobile number without the country code.
 * @property {boolean} [success] - Whether the operation was successful.
 * @property {string} [message] - Information about the operation's result.
 * @property {number} [resend_timer] - Time in seconds before an request can be resent.
 * @property {string} [resend_token] - A token used to authorize the resending of request.
 */

/**
 * @typedef LoginSuccess
 * @property {UserSchema} [user]
 * @property {string} [request_id] - A random uuid string used to track the send
 *   OTP response.
 * @property {string} [register_token] - A token used for registration purposes.
 */

/**
 * @typedef ResetForgotPasswordSuccess
 * @property {boolean} [success] - Whether the password reset operation was successful.
 */

/**
 * @typedef VerifyOtpSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [user_exists] - Whether the user already exists.
 * @property {string} [register_token] - A token used for registration purposes.
 */

/**
 * @typedef VerifyForgotOtpSuccess
 * @property {boolean} [success] - Whether the OTP verification was successful.
 * @property {string} [forgot_token] - A token used for resetting the forgotten password.
 */

/**
 * @typedef ResetPasswordSuccess
 * @property {string} [status] - Status of the password reset operation.
 */

/**
 * @typedef RegisterFormSuccess
 * @property {string} [email] - The email address provided during registration.
 * @property {number} [resend_timer] - The time in seconds before an OTP can be resent.
 * @property {string} [resend_token] - A token used to authorize the resending of an OTP.
 * @property {string} [resend_email_token] - A token used to authorize the
 *   resending of an OTP via email.
 * @property {string} [register_token] - A token used for completing the
 *   registration process.
 * @property {boolean} [success] - A boolean value indicating whether the
 *   registration operation was successful.
 * @property {string} [request_id] - A random uuid string used to track the
 *   registration response.
 * @property {string} [message] - A string containing additional information
 *   about the operation's result.
 * @property {string} [mobile] - The user's phone mobile without the country code.
 * @property {string} [country_code] - The country specific prefix for the phone number.
 * @property {boolean} [verify_email_otp] - Whether email OTP verification is required.
 * @property {boolean} [verify_mobile_otp] - Whether mobile OTP verification is required.
 * @property {boolean} [user_exists] - Whether the user already exists.
 */

/**
 * @typedef VerifyEmailSuccess
 * @property {string} [message] - Result of the email verification process.
 */

/**
 * @typedef HasPasswordSuccess
 * @property {number} [result] - An integer value indicating whether the user
 *   has set a password (1 for true, 0 for false).
 */

/**
 * @typedef LogoutSuccess
 * @property {boolean} [logout] - Whether the logout operation was successful.
 */

/**
 * @typedef DeleteUserSuccess
 * @property {boolean} [success] - Whether the user deletion operation was successful.
 */

/**
 * @typedef OtpSuccess
 * @property {number} [resend_timer] - The time in seconds before an OTP can be resent.
 * @property {string} [resend_token] - A token used to authorize the resending of an OTP.
 * @property {string} [register_token] - A token used for completing the
 *   registration process.
 * @property {boolean} [success] - Whether the OTP send operation was successful.
 * @property {string} [request_id] - A random uuid string used to track the OTP
 *   send response.
 * @property {string} [message] - Additional information about the operation's result.
 * @property {string} [mobile] - The user's mobile number without the country code.
 * @property {string} [country_code] - The country specific prefix for the phone number.
 */

/**
 * @typedef EmailOtpSuccess
 * @property {boolean} [success] - Whether the OTP send operation was successful.
 * @property {string} [resend_email_token] - A token used to authorize the
 *   resending of an OTP via email.
 */

/**
 * @typedef SessionListSuccess
 * @property {string[]} [sessions] - An array of active session identifiers.
 */

/**
 * @typedef VerifyMobileOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_mobile_link] - Whether the mobile number
 *   verification link was successful.
 */

/**
 * @typedef VerifyEmailOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_email_link] - Whether the email verification link
 *   was successful.
 */

/**
 * @typedef SendMobileVerifyLinkSuccess
 * @property {boolean} [verify_mobile_link] - Whether the mobile verification
 *   link was successfully sent.
 */

/**
 * @typedef SendEmailVerifyLinkSuccess
 * @property {boolean} [verify_email_link] - Whether the email verification link
 *   was successfully sent.
 */

/**
 * @typedef APIError
 * @property {string} [code] - The error code representing the type of error.
 * @property {string} [message] - A descriptive message providing more details
 *   about the error.
 * @property {string} [info] - A link to the error code description.
 * @property {string} [request_id] - A random uuid string used to track the api request.
 * @property {string} [error] - The error message or stack trace.
 * @property {Object} [meta] - Additional metadata associated with the error.
 * @property {boolean} [authenticated] - Whether the user is authenticated.
 */

/**
 * @typedef FormRegisterRequestSchemaPhone
 * @property {string} [country_code] - Country code for mobile number.
 * @property {string} [mobile] - The user's mobile number without the country code.
 */

/**
 * @typedef OAuthRequestSchemaOauth2
 * @property {string} [access_token] - The access token issued by the oauth2 provider.
 * @property {number} [expiry] - The expiry time of the access token in
 *   milliseconds since epoch.
 * @property {string} [refresh_token] - The refresh token issued by the oauth2 provider.
 */

/**
 * @typedef OAuthRequestSchemaProfile
 * @property {string} [last_name] - The last name of the user.
 * @property {string} [image] - The url of the user's profile picture.
 * @property {string} [id] - The unique identifier of the user.
 * @property {string} [email] - The email address of the user.
 * @property {string} [full_name] - The full name of the user.
 * @property {string} [first_name] - The first name of the user.
 */

/**
 * @typedef OAuthRequestAppleSchemaOauth
 * @property {string} [identity_token] - The identity token issued by apple.
 */

/**
 * @typedef OAuthRequestAppleSchemaProfile
 * @property {string} [last_name] - The last name of the user.
 * @property {string} [full_name] - The full name of the user.
 * @property {string} [first_name] - The first name of the user.
 */

/**
 * @typedef PlatformSchema
 * @property {string} [display] - The display name of the platform.
 * @property {LookAndFeel} [look_and_feel]
 * @property {string} [updated_at] - The date and time when the configuration
 *   was last updated.
 * @property {boolean} [active] - Is the application config active or not .
 * @property {boolean} [forgot_password] - Forgot password option to be given or
 *   not to application user.
 * @property {Login} [login]
 * @property {boolean} [skip_captcha] - Skip the captcha or not .
 * @property {string} [name] - Name of the application.
 * @property {MetaSchema} [meta]
 * @property {string} [_id] - Unique document id of the platform config.
 * @property {Social} [social]
 * @property {RequiredFields} [required_fields]
 * @property {RegisterRequiredFields} [register_required_fields]
 * @property {boolean} [skip_login] - Whether to skip the login or not .
 * @property {FlashCard} [flash_card]
 * @property {string} [subtext] - Text to be shown at the top of the flash card
 *   like login to fynd, login to tira.
 * @property {SocialTokens} [social_tokens]
 * @property {string} [created_at] - When was the application platform config
 *   document was created.
 * @property {boolean} [register] - Whether to show the registration page on
 *   landing page or not.
 * @property {string} [mobile_image] - Image to be shown on registration page
 *   for mobile devices.
 * @property {string} [desktop_image] - Image to be shown on registration page
 *   for desktop devices.
 * @property {number} [delete_account_day] - Number of days after which the user
 *   account will be deleted.
 * @property {DeleteAccountReasons[]} [delete_account_reasons] - List of reasons
 *   you can set to ask user when account is being deleted from application.
 * @property {DeleteAccountConsent} [delete_account_consent]
 * @property {SessionExpiry} [session_config]
 * @property {number} [__v] - Version of the document.
 */

/**
 * @typedef LookAndFeel
 * @property {string} [card_position] - Position of the card eg right, left,
 *   top-right etc.
 * @property {string} [background_color] - Background colour of the card.
 */

/**
 * @typedef Login
 * @property {boolean} [password] - Application is providing login with password or not.
 * @property {boolean} [otp] - Application is providing login with OTP or not.
 */

/**
 * @typedef MetaSchema
 * @property {boolean} [fynd_default] - One of the custom field that you are
 *   storing in meta.
 */

/**
 * @typedef Social
 * @property {boolean} [account_kit] - Is accountkit social login active for
 *   application or not.
 * @property {boolean} [facebook] - Is facebook social login active for
 *   application or not .
 * @property {boolean} [google] - Is google social login active for application or not .
 * @property {boolean} [apple] - Is apple social login active for application or not.
 */

/**
 * @typedef RequiredFields
 * @property {PlatformEmail} [email]
 * @property {PlatformMobile} [mobile]
 */

/**
 * @typedef PlatformEmail
 * @property {boolean} [is_required] - Is email mandatory for user to register
 *   on a application or not.
 * @property {string} [level] - Level of email mandatory hard is mandatory and
 *   soft is optional.
 */

/**
 * @typedef PlatformMobile
 * @property {boolean} [is_required] - Is mobile mandatory for user to register
 *   on a application or not.
 * @property {string} [level] - Level of mobile mandatory hard is mandatory and
 *   soft is optional.
 */

/**
 * @typedef RegisterRequiredFields
 * @property {RegisterRequiredFieldsEmail} [email]
 * @property {RegisterRequiredFieldsMobile} [mobile]
 */

/**
 * @typedef RegisterRequiredFieldsEmail
 * @property {boolean} [is_required] - Is email mandatory for user to register
 *   on a application or not.
 * @property {string} [level] - Level of email mandatory hard is mandatory and
 *   soft is optional.
 */

/**
 * @typedef RegisterRequiredFieldsMobile
 * @property {boolean} [is_required] - Is mobile mandatory for user to register
 *   on a application or not.
 * @property {string} [level] - Level of mobile mandatory hard is mandatory and
 *   soft is optional.
 */

/**
 * @typedef FlashCard
 * @property {string} [text] - Text to be shown in the flash card.
 * @property {string} [text_color] - Text colour for the text in the flash card.
 * @property {string} [background_color] - Background colour of the text to be
 *   shown on the flash card.
 */

/**
 * @typedef SocialTokens
 * @property {Facebook} [facebook]
 * @property {Accountkit} [accountkit]
 * @property {Google} [google]
 */

/**
 * @typedef DeleteAccountReasons
 * @property {string} [reason_text] - Text of the reason to be shown to user.
 * @property {string} [reason_id] - Unique id of the reason .
 * @property {boolean} [show_text_area] - A boolean whether to show text area or not.
 */

/**
 * @typedef DeleteAccountConsent
 * @property {string} [consent_text] - Consent text to be shown to user.
 */

/**
 * @typedef Facebook
 * @property {string} [app_id] - App id of the credentials facebook.
 */

/**
 * @typedef Accountkit
 * @property {string} [app_id] - App id of the credentials account kit.
 */

/**
 * @typedef Google
 * @property {string} [app_id] - App id of the credentials google.
 */

/**
 * @typedef SessionExpiry
 * @property {number} [duration] - Number of days or hours based on type till
 *   which the session can be rolled back.
 * @property {string} [type] - Days or hours the type of time for session rollback.
 * @property {boolean} [is_rolling] - Whether session needs to be rollback or not.
 */

/**
 * @typedef UserSchema
 * @property {string} [application_id] - Application id of the user.
 * @property {string} [user_id] - Unique id of the user.
 * @property {string} [first_name] - First name of the user.
 * @property {Object} [meta] - Metadata of the user, used to store details about the user
 * @property {string} [last_name] - Last name of the user
 * @property {PhoneNumber[]} [phone_numbers] - List of phone numbers of the user.
 * @property {Email[]} [emails] - List of email addresses of the user.
 * @property {string} [gender] - Gender of the user.
 * @property {string} [dob] - Date of birth of the user.
 * @property {boolean} [active] - Is the user active.
 * @property {string} [profile_pic_url] - URL of the profile picture of the user.
 * @property {string} [username] - Unique username of the user.
 * @property {string} [account_type] - Type of user (user, programmatic (created
 *   by system))
 * @property {string} [_id] - Unique id of the user.
 * @property {string} [created_at] - Date and time of user creation.
 * @property {string} [updated_at] - Date and time of user update.
 * @property {string} [external_id] - Unique id referencing any user external
 *   documents (jio).
 * @property {string} [rr_id] - Unique id referencing any user external documents.
 */

/**
 * @typedef PhoneNumber
 * @property {string} [phone] - Phone number of the user.
 * @property {number} [country_code] - Country code for mobile number.
 * @property {boolean} [active] - Is the phone number active.
 * @property {boolean} [primary] - Is it a primary phone number.
 * @property {boolean} [verified] - Is the phone number verified.
 */

/**
 * @typedef Email
 * @property {string} [email] - Email address.
 * @property {boolean} [active] - Is the email active.
 * @property {boolean} [primary] - Is it a primary email.
 * @property {boolean} [verified] - Is the email verified.
 */

class UserApplicationModel {
  /** @returns {UpdateUserAttributesRequest} */
  static UpdateUserAttributesRequest() {
    return Joi.object({
      attributes: Joi.any(),
    });
  }

  /** @returns {UserAttributes} */
  static UserAttributes() {
    return Joi.object({
      attributes: Joi.any(),
    });
  }

  /** @returns {DeleteApplicationUserRequestSchema} */
  static DeleteApplicationUserRequestSchema() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      reason_id: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      otp: Joi.string().allow(""),
    });
  }

  /** @returns {EditEmailRequestSchema} */
  static EditEmailRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),
    });
  }

  /** @returns {SendVerificationLinkMobileRequestSchema} */
  static SendVerificationLinkMobileRequestSchema() {
    return Joi.object({
      verified: Joi.boolean(),
      active: Joi.boolean(),
      country_code: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      primary: Joi.boolean(),
    });
  }

  /** @returns {EditMobileRequestSchema} */
  static EditMobileRequestSchema() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      phone: Joi.string().allow(""),
    });
  }

  /** @returns {EditProfileRequestSchema} */
  static EditProfileRequestSchema() {
    return Joi.object({
      encrypt_otp: Joi.boolean(),
      first_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      mobile: UserApplicationModel.EditProfileMobileSchema(),
      country_code: Joi.string().allow(""),
      email: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      dob: Joi.string().allow(""),
      profile_pic_url: Joi.string().allow(""),
      android_hash: Joi.string().allow(""),
      sender: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
    });
  }

  /** @returns {EditProfileMobileSchema} */
  static EditProfileMobileSchema() {
    return Joi.object({
      phone: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
    });
  }

  /** @returns {SendEmailOtpRequestSchema} */
  static SendEmailOtpRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),
      action: Joi.string().allow(""),
      token: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
    });
  }

  /** @returns {SendEmailForgotOtpRequestSchema} */
  static SendEmailForgotOtpRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),
      action: Joi.string().allow(""),
      token: Joi.string().allow(""),
    });
  }

  /** @returns {VerifyEmailOtpRequestSchema} */
  static VerifyEmailOtpRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),
      action: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
      otp: Joi.string().allow(""),
    });
  }

  /** @returns {VerifyEmailForgotOtpRequestSchema} */
  static VerifyEmailForgotOtpRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),
      otp: Joi.string().allow(""),
    });
  }

  /** @returns {VerifyOtpRequestSchema} */
  static VerifyOtpRequestSchema() {
    return Joi.object({
      request_id: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
      otp: Joi.string().allow(""),
    });
  }

  /** @returns {VerifyMobileForgotOtpRequestSchema} */
  static VerifyMobileForgotOtpRequestSchema() {
    return Joi.object({
      request_id: Joi.string().allow(""),
      otp: Joi.string().allow(""),
    });
  }

  /** @returns {SendMobileOtpRequestSchema} */
  static SendMobileOtpRequestSchema() {
    return Joi.object({
      encrypt_otp: Joi.boolean(),
      mobile: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      action: Joi.string().allow(""),
      token: Joi.string().allow(""),
      android_hash: Joi.string().allow(""),
      force: Joi.string().allow(""),
    });
  }

  /** @returns {SendMobileForgotOtpRequestSchema} */
  static SendMobileForgotOtpRequestSchema() {
    return Joi.object({
      mobile: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      action: Joi.string().allow(""),
      token: Joi.string().allow(""),
      android_hash: Joi.string().allow(""),
    });
  }

  /** @returns {UpdatePasswordRequestSchema} */
  static UpdatePasswordRequestSchema() {
    return Joi.object({
      old_password: Joi.string().allow(""),
      new_password: Joi.string().allow(""),
    });
  }

  /** @returns {FormRegisterRequestSchema} */
  static FormRegisterRequestSchema() {
    return Joi.object({
      first_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      email: Joi.string().allow(""),
      password: Joi.string().allow(""),
      phone: UserApplicationModel.FormRegisterRequestSchemaPhone(),
      register_token: Joi.string().allow(""),
    });
  }

  /** @returns {TokenRequestBodySchema} */
  static TokenRequestBodySchema() {
    return Joi.object({
      token: Joi.string().allow(""),
    });
  }

  /** @returns {ForgotPasswordRequestSchema} */
  static ForgotPasswordRequestSchema() {
    return Joi.object({
      code: Joi.string().allow(""),
      password: Joi.string().allow(""),
    });
  }

  /** @returns {CodeRequestBodySchema} */
  static CodeRequestBodySchema() {
    return Joi.object({
      code: Joi.string().allow(""),
    });
  }

  /** @returns {SendResetPasswordEmailRequestSchema} */
  static SendResetPasswordEmailRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),
    });
  }

  /** @returns {SendResetPasswordMobileRequestSchema} */
  static SendResetPasswordMobileRequestSchema() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }

  /** @returns {PasswordLoginRequestSchema} */
  static PasswordLoginRequestSchema() {
    return Joi.object({
      password: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {SendOtpRequestSchema} */
  static SendOtpRequestSchema() {
    return Joi.object({
      encrypt_otp: Joi.boolean(),
      country_code: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      android_hash: Joi.string().allow(""),
    });
  }

  /** @returns {OAuthRequestSchema} */
  static OAuthRequestSchema() {
    return Joi.object({
      is_signed_in: Joi.boolean(),
      oauth2: UserApplicationModel.OAuthRequestSchemaOauth2(),
      profile: UserApplicationModel.OAuthRequestSchemaProfile(),
    });
  }

  /** @returns {OAuthRequestAppleSchema} */
  static OAuthRequestAppleSchema() {
    return Joi.object({
      user_identifier: Joi.string().allow(""),
      oauth: UserApplicationModel.OAuthRequestAppleSchemaOauth(),
      profile: UserApplicationModel.OAuthRequestAppleSchemaProfile(),
    });
  }

  /** @returns {UserObjectSchema} */
  static UserObjectSchema() {
    return Joi.object({
      user: UserApplicationModel.UserSchema(),
    });
  }

  /** @returns {AuthSuccess} */
  static AuthSuccess() {
    return Joi.object({
      register_token: Joi.string().allow(""),
      user_exists: Joi.boolean(),
      user: UserApplicationModel.UserSchema(),
    });
  }

  /** @returns {UserExistsResponse} */
  static UserExistsResponse() {
    return Joi.object({
      user_exists: Joi.boolean(),
    });
  }

  /** @returns {SendOtpResponse} */
  static SendOtpResponse() {
    return Joi.object({
      resend_timer: Joi.number(),
      resend_token: Joi.string().allow(""),
      success: Joi.boolean(),
      request_id: Joi.string().allow(""),
      message: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      email: Joi.string().allow(""),
      resend_email_token: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
      verify_email_otp: Joi.boolean(),
      verify_mobile_otp: Joi.boolean(),
      user_exists: Joi.boolean(),
    });
  }

  /** @returns {ProfileEditSuccess} */
  static ProfileEditSuccess() {
    return Joi.object({
      user: UserApplicationModel.UserSchema(),
      register_token: Joi.string().allow(""),
      resend_email_token: Joi.string().allow(""),
      user_exists: Joi.boolean(),
      verify_email_link: Joi.boolean(),
      verify_email_otp: Joi.boolean(),
      verify_mobile_otp: Joi.boolean(),
      email: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      resend_timer: Joi.number(),
      resend_token: Joi.string().allow(""),
    });
  }

  /** @returns {LoginSuccess} */
  static LoginSuccess() {
    return Joi.object({
      user: UserApplicationModel.UserSchema(),
      request_id: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
    });
  }

  /** @returns {ResetForgotPasswordSuccess} */
  static ResetForgotPasswordSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {VerifyOtpSuccess} */
  static VerifyOtpSuccess() {
    return Joi.object({
      user: UserApplicationModel.UserSchema(),
      user_exists: Joi.boolean(),
      register_token: Joi.string().allow(""),
    });
  }

  /** @returns {VerifyForgotOtpSuccess} */
  static VerifyForgotOtpSuccess() {
    return Joi.object({
      success: Joi.boolean(),
      forgot_token: Joi.string().allow(""),
    });
  }

  /** @returns {ResetPasswordSuccess} */
  static ResetPasswordSuccess() {
    return Joi.object({
      status: Joi.string().allow(""),
    });
  }

  /** @returns {RegisterFormSuccess} */
  static RegisterFormSuccess() {
    return Joi.object({
      email: Joi.string().allow(""),
      resend_timer: Joi.number(),
      resend_token: Joi.string().allow(""),
      resend_email_token: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
      success: Joi.boolean(),
      request_id: Joi.string().allow(""),
      message: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      verify_email_otp: Joi.boolean(),
      verify_mobile_otp: Joi.boolean(),
      user_exists: Joi.boolean(),
    });
  }

  /** @returns {VerifyEmailSuccess} */
  static VerifyEmailSuccess() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {HasPasswordSuccess} */
  static HasPasswordSuccess() {
    return Joi.object({
      result: Joi.number(),
    });
  }

  /** @returns {LogoutSuccess} */
  static LogoutSuccess() {
    return Joi.object({
      logout: Joi.boolean(),
    });
  }

  /** @returns {DeleteUserSuccess} */
  static DeleteUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {OtpSuccess} */
  static OtpSuccess() {
    return Joi.object({
      resend_timer: Joi.number(),
      resend_token: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
      success: Joi.boolean(),
      request_id: Joi.string().allow(""),
      message: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
    });
  }

  /** @returns {EmailOtpSuccess} */
  static EmailOtpSuccess() {
    return Joi.object({
      success: Joi.boolean(),
      resend_email_token: Joi.string().allow(""),
    });
  }

  /** @returns {SessionListSuccess} */
  static SessionListSuccess() {
    return Joi.object({
      sessions: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {VerifyMobileOTPSuccess} */
  static VerifyMobileOTPSuccess() {
    return Joi.object({
      user: UserApplicationModel.UserSchema(),
      verify_mobile_link: Joi.boolean(),
    });
  }

  /** @returns {VerifyEmailOTPSuccess} */
  static VerifyEmailOTPSuccess() {
    return Joi.object({
      user: UserApplicationModel.UserSchema(),
      verify_email_link: Joi.boolean(),
    });
  }

  /** @returns {SendMobileVerifyLinkSuccess} */
  static SendMobileVerifyLinkSuccess() {
    return Joi.object({
      verify_mobile_link: Joi.boolean(),
    });
  }

  /** @returns {SendEmailVerifyLinkSuccess} */
  static SendEmailVerifyLinkSuccess() {
    return Joi.object({
      verify_email_link: Joi.boolean(),
    });
  }

  /** @returns {APIError} */
  static APIError() {
    return Joi.object({
      code: Joi.string().allow(""),
      message: Joi.string().allow(""),
      info: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      error: Joi.string().allow(""),
      meta: Joi.any(),
      authenticated: Joi.boolean(),
    });
  }

  /** @returns {FormRegisterRequestSchemaPhone} */
  static FormRegisterRequestSchemaPhone() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }

  /** @returns {OAuthRequestSchemaOauth2} */
  static OAuthRequestSchemaOauth2() {
    return Joi.object({
      access_token: Joi.string().allow(""),
      expiry: Joi.number(),
      refresh_token: Joi.string().allow(""),
    });
  }

  /** @returns {OAuthRequestSchemaProfile} */
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

  /** @returns {OAuthRequestAppleSchemaOauth} */
  static OAuthRequestAppleSchemaOauth() {
    return Joi.object({
      identity_token: Joi.string().allow(""),
    });
  }

  /** @returns {OAuthRequestAppleSchemaProfile} */
  static OAuthRequestAppleSchemaProfile() {
    return Joi.object({
      last_name: Joi.string().allow(""),
      full_name: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
    });
  }

  /** @returns {PlatformSchema} */
  static PlatformSchema() {
    return Joi.object({
      display: Joi.string().allow(""),
      look_and_feel: UserApplicationModel.LookAndFeel(),
      updated_at: Joi.string().allow(""),
      active: Joi.boolean(),
      forgot_password: Joi.boolean(),
      login: UserApplicationModel.Login(),
      skip_captcha: Joi.boolean(),
      name: Joi.string().allow(""),
      meta: UserApplicationModel.MetaSchema(),
      _id: Joi.string().allow(""),
      social: UserApplicationModel.Social(),
      required_fields: UserApplicationModel.RequiredFields(),
      register_required_fields: UserApplicationModel.RegisterRequiredFields(),
      skip_login: Joi.boolean(),
      flash_card: UserApplicationModel.FlashCard(),
      subtext: Joi.string().allow(""),
      social_tokens: UserApplicationModel.SocialTokens(),
      created_at: Joi.string().allow(""),
      register: Joi.boolean(),
      mobile_image: Joi.string().allow(""),
      desktop_image: Joi.string().allow(""),
      delete_account_day: Joi.number(),
      delete_account_reasons: Joi.array().items(
        UserApplicationModel.DeleteAccountReasons()
      ),
      delete_account_consent: UserApplicationModel.DeleteAccountConsent(),
      session_config: UserApplicationModel.SessionExpiry(),
      __v: Joi.number(),
    });
  }

  /** @returns {LookAndFeel} */
  static LookAndFeel() {
    return Joi.object({
      card_position: Joi.string().allow(""),
      background_color: Joi.string().allow(""),
    });
  }

  /** @returns {Login} */
  static Login() {
    return Joi.object({
      password: Joi.boolean(),
      otp: Joi.boolean(),
    });
  }

  /** @returns {MetaSchema} */
  static MetaSchema() {
    return Joi.object({
      fynd_default: Joi.boolean(),
    });
  }

  /** @returns {Social} */
  static Social() {
    return Joi.object({
      account_kit: Joi.boolean(),
      facebook: Joi.boolean(),
      google: Joi.boolean(),
      apple: Joi.boolean(),
    });
  }

  /** @returns {RequiredFields} */
  static RequiredFields() {
    return Joi.object({
      email: UserApplicationModel.PlatformEmail(),
      mobile: UserApplicationModel.PlatformMobile(),
    });
  }

  /** @returns {PlatformEmail} */
  static PlatformEmail() {
    return Joi.object({
      is_required: Joi.boolean(),
      level: Joi.string().allow(""),
    });
  }

  /** @returns {PlatformMobile} */
  static PlatformMobile() {
    return Joi.object({
      is_required: Joi.boolean(),
      level: Joi.string().allow(""),
    });
  }

  /** @returns {RegisterRequiredFields} */
  static RegisterRequiredFields() {
    return Joi.object({
      email: UserApplicationModel.RegisterRequiredFieldsEmail(),
      mobile: UserApplicationModel.RegisterRequiredFieldsMobile(),
    });
  }

  /** @returns {RegisterRequiredFieldsEmail} */
  static RegisterRequiredFieldsEmail() {
    return Joi.object({
      is_required: Joi.boolean(),
      level: Joi.string().allow(""),
    });
  }

  /** @returns {RegisterRequiredFieldsMobile} */
  static RegisterRequiredFieldsMobile() {
    return Joi.object({
      is_required: Joi.boolean(),
      level: Joi.string().allow(""),
    });
  }

  /** @returns {FlashCard} */
  static FlashCard() {
    return Joi.object({
      text: Joi.string().allow(""),
      text_color: Joi.string().allow(""),
      background_color: Joi.string().allow(""),
    });
  }

  /** @returns {SocialTokens} */
  static SocialTokens() {
    return Joi.object({
      facebook: UserApplicationModel.Facebook(),
      accountkit: UserApplicationModel.Accountkit(),
      google: UserApplicationModel.Google(),
    });
  }

  /** @returns {DeleteAccountReasons} */
  static DeleteAccountReasons() {
    return Joi.object({
      reason_text: Joi.string().allow(""),
      reason_id: Joi.string().allow(""),
      show_text_area: Joi.boolean(),
    });
  }

  /** @returns {DeleteAccountConsent} */
  static DeleteAccountConsent() {
    return Joi.object({
      consent_text: Joi.string().allow(""),
    });
  }

  /** @returns {Facebook} */
  static Facebook() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }

  /** @returns {Accountkit} */
  static Accountkit() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }

  /** @returns {Google} */
  static Google() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }

  /** @returns {SessionExpiry} */
  static SessionExpiry() {
    return Joi.object({
      duration: Joi.number(),
      type: Joi.string().allow(""),
      is_rolling: Joi.boolean(),
    });
  }

  /** @returns {UserSchema} */
  static UserSchema() {
    return Joi.object({
      application_id: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      meta: Joi.any(),
      last_name: Joi.string().allow(""),
      phone_numbers: Joi.array().items(UserApplicationModel.PhoneNumber()),
      emails: Joi.array().items(UserApplicationModel.Email()),
      gender: Joi.string().allow(""),
      dob: Joi.string().allow(""),
      active: Joi.boolean(),
      profile_pic_url: Joi.string().allow(""),
      username: Joi.string().allow(""),
      account_type: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      external_id: Joi.string().allow(""),
      rr_id: Joi.string().allow(""),
    });
  }

  /** @returns {PhoneNumber} */
  static PhoneNumber() {
    return Joi.object({
      phone: Joi.string().allow(""),
      country_code: Joi.number(),
      active: Joi.boolean(),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
    });
  }

  /** @returns {Email} */
  static Email() {
    return Joi.object({
      email: Joi.string().allow(""),
      active: Joi.boolean(),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
    });
  }
}
module.exports = UserApplicationModel;
