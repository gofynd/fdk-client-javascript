const Joi = require("joi");

/**
 * @typedef UpdateUserAttributesRequest
 * @property {Object} [attributes]
 */

/**
 * @typedef UserAttributes
 * @property {Object} [attributes]
 */

/**
 * @typedef DeleteApplicationUserRequestSchema
 * @property {string} [user_id]
 * @property {string} [reason]
 * @property {string} [reason_id]
 * @property {string} [request_id]
 * @property {string} [otp]
 */

/**
 * @typedef EditEmailRequestSchema
 * @property {string} [email]
 */

/**
 * @typedef SendVerificationLinkMobileRequestSchema
 * @property {boolean} [verified]
 * @property {boolean} [active]
 * @property {string} [country_code]
 * @property {string} [phone]
 * @property {boolean} [primary]
 */

/**
 * @typedef EditMobileRequestSchema
 * @property {string} [country_code]
 * @property {string} [phone]
 */

/**
 * @typedef EditProfileRequestSchema
 * @property {boolean} [encrypt_otp] - Set to true if you want to encrypt the OTP.
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {EditProfileMobileSchema} [mobile]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {string} [profile_pic_url]
 * @property {string} [android_hash]
 * @property {string} [sender]
 * @property {string} [register_token]
 */

/**
 * @typedef EditProfileMobileSchema
 * @property {string} [phone]
 * @property {string} [country_code]
 */

/**
 * @typedef SendEmailOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [token]
 * @property {string} [register_token]
 */

/**
 * @typedef SendEmailForgotOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [token]
 */

/**
 * @typedef VerifyEmailOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [register_token]
 * @property {string} [otp]
 */

/**
 * @typedef VerifyEmailForgotOtpRequestSchema
 * @property {string} [email]
 * @property {string} [otp]
 */

/**
 * @typedef VerifyOtpRequestSchema
 * @property {string} [request_id]
 * @property {string} [register_token]
 * @property {string} [otp]
 */

/**
 * @typedef VerifyMobileForgotOtpRequestSchema
 * @property {string} [request_id]
 * @property {string} [otp]
 */

/**
 * @typedef SendMobileOtpRequestSchema
 * @property {boolean} [encrypt_otp] - Set to true if you want to encrypt the OTP.
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [action]
 * @property {string} [token]
 * @property {string} [android_hash]
 * @property {string} [force]
 */

/**
 * @typedef SendMobileForgotOtpRequestSchema
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [action]
 * @property {string} [token]
 * @property {string} [android_hash]
 */

/**
 * @typedef UpdatePasswordRequestSchema
 * @property {string} [old_password]
 * @property {string} [new_password]
 */

/**
 * @typedef FormRegisterRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [email]
 * @property {string} [password]
 * @property {FormRegisterRequestSchemaPhone} [phone]
 * @property {string} [register_token]
 */

/**
 * @typedef TokenRequestBodySchema
 * @property {string} [token]
 */

/**
 * @typedef ForgotPasswordRequestSchema
 * @property {string} [code]
 * @property {string} [password]
 */

/**
 * @typedef CodeRequestBodySchema
 * @property {string} [code]
 */

/**
 * @typedef SendResetPasswordEmailRequestSchema
 * @property {string} [email]
 */

/**
 * @typedef SendResetPasswordMobileRequestSchema
 * @property {string} [country_code]
 * @property {string} [mobile]
 */

/**
 * @typedef PasswordLoginRequestSchema
 * @property {string} [password]
 * @property {string} [username]
 */

/**
 * @typedef SendOtpRequestSchema
 * @property {boolean} [encrypt_otp] - Set to true if you want to encrypt the OTP.
 * @property {string} [country_code]
 * @property {string} [mobile]
 * @property {string} [android_hash]
 */

/**
 * @typedef OAuthRequestSchema
 * @property {boolean} [is_signed_in]
 * @property {OAuthRequestSchemaOauth2} [oauth2]
 * @property {OAuthRequestSchemaProfile} [profile]
 */

/**
 * @typedef OAuthRequestAppleSchema
 * @property {string} [user_identifier]
 * @property {OAuthRequestAppleSchemaOauth} [oauth]
 * @property {OAuthRequestAppleSchemaProfile} [profile]
 */

/**
 * @typedef UserObjectSchema
 * @property {UserSchema} [user]
 */

/**
 * @typedef AuthSuccess
 * @property {string} [register_token]
 * @property {boolean} [user_exists]
 * @property {UserSchema} [user]
 */

/**
 * @typedef UserExistsResponse
 * @property {boolean} [user_exists]
 */

/**
 * @typedef SendOtpResponse
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [resend_email_token]
 * @property {string} [register_token]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {boolean} [user_exists]
 */

/**
 * @typedef ProfileEditSuccess
 * @property {UserSchema} [user]
 * @property {string} [register_token]
 * @property {string} [resend_email_token]
 * @property {boolean} [user_exists]
 * @property {boolean} [verify_email_link]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {string} [email]
 * @property {string} [request_id]
 * @property {string} [country_code]
 * @property {string} [mobile]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 */

/**
 * @typedef LoginSuccess
 * @property {UserSchema} [user]
 * @property {string} [request_id]
 * @property {string} [register_token]
 */

/**
 * @typedef ResetForgotPasswordSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef VerifyOtpSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [user_exists]
 * @property {string} [register_token]
 */

/**
 * @typedef VerifyForgotOtpSuccess
 * @property {boolean} [success]
 * @property {string} [forgot_token]
 */

/**
 * @typedef ResetPasswordSuccess
 * @property {string} [status]
 */

/**
 * @typedef RegisterFormSuccess
 * @property {string} [email]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {string} [resend_email_token]
 * @property {string} [register_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {boolean} [user_exists]
 */

/**
 * @typedef VerifyEmailSuccess
 * @property {string} [message]
 */

/**
 * @typedef HasPasswordSuccess
 * @property {number} [result]
 */

/**
 * @typedef LogoutSuccess
 * @property {boolean} [logout]
 */

/**
 * @typedef DeleteUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef OtpSuccess
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {string} [register_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 */

/**
 * @typedef EmailOtpSuccess
 * @property {boolean} [success]
 * @property {string} [resend_email_token]
 */

/**
 * @typedef SessionListSuccess
 * @property {string[]} [sessions]
 */

/**
 * @typedef VerifyMobileOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_mobile_link]
 */

/**
 * @typedef VerifyEmailOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_email_link]
 */

/**
 * @typedef SendMobileVerifyLinkSuccess
 * @property {boolean} [verify_mobile_link]
 */

/**
 * @typedef SendEmailVerifyLinkSuccess
 * @property {boolean} [verify_email_link]
 */

/**
 * @typedef APIError
 * @property {string} [code]
 * @property {string} [message]
 * @property {string} [info] - Error code description link
 * @property {string} [request_id]
 * @property {string} [error]
 * @property {Object} [meta]
 * @property {boolean} [authenticated]
 */

/**
 * @typedef FormRegisterRequestSchemaPhone
 * @property {string} [country_code]
 * @property {string} [mobile]
 */

/**
 * @typedef OAuthRequestSchemaOauth2
 * @property {string} [access_token]
 * @property {number} [expiry]
 * @property {string} [refresh_token]
 */

/**
 * @typedef OAuthRequestSchemaProfile
 * @property {string} [last_name]
 * @property {string} [image]
 * @property {string} [id]
 * @property {string} [email]
 * @property {string} [full_name]
 * @property {string} [first_name]
 */

/**
 * @typedef OAuthRequestAppleSchemaOauth
 * @property {string} [identity_token]
 */

/**
 * @typedef OAuthRequestAppleSchemaProfile
 * @property {string} [last_name]
 * @property {string} [full_name]
 * @property {string} [first_name]
 */

/**
 * @typedef PlatformSchema
 * @property {string} [display]
 * @property {LookAndFeel} [look_and_feel]
 * @property {string} [updated_at]
 * @property {boolean} [active]
 * @property {boolean} [forgot_password]
 * @property {Login} [login]
 * @property {boolean} [skip_captcha]
 * @property {string} [name]
 * @property {MetaSchema} [meta]
 * @property {string} [_id]
 * @property {Social} [social]
 * @property {RequiredFields} [required_fields]
 * @property {RegisterRequiredFields} [register_required_fields]
 * @property {boolean} [skip_login]
 * @property {FlashCard} [flash_card]
 * @property {string} [subtext]
 * @property {SocialTokens} [social_tokens]
 * @property {string} [created_at]
 * @property {boolean} [register]
 * @property {string} [mobile_image]
 * @property {string} [desktop_image]
 * @property {number} [delete_account_day]
 * @property {DeleteAccountReasons[]} [delete_account_reasons]
 * @property {DeleteAccountConsent} [delete_account_consent]
 * @property {SessionExpiry} [session_config]
 * @property {number} [__v]
 */

/**
 * @typedef LookAndFeel
 * @property {string} [card_position]
 * @property {string} [background_color]
 */

/**
 * @typedef Login
 * @property {boolean} [password]
 * @property {boolean} [otp]
 */

/**
 * @typedef MetaSchema
 * @property {boolean} [fynd_default]
 */

/**
 * @typedef Social
 * @property {boolean} [account_kit]
 * @property {boolean} [facebook]
 * @property {boolean} [google]
 * @property {boolean} [apple]
 */

/**
 * @typedef RequiredFields
 * @property {PlatformEmail} [email]
 * @property {PlatformMobile} [mobile]
 */

/**
 * @typedef PlatformEmail
 * @property {boolean} [is_required]
 * @property {string} [level]
 */

/**
 * @typedef PlatformMobile
 * @property {boolean} [is_required]
 * @property {string} [level]
 */

/**
 * @typedef RegisterRequiredFields
 * @property {RegisterRequiredFieldsEmail} [email]
 * @property {RegisterRequiredFieldsMobile} [mobile]
 */

/**
 * @typedef RegisterRequiredFieldsEmail
 * @property {boolean} [is_required]
 * @property {string} [level]
 */

/**
 * @typedef RegisterRequiredFieldsMobile
 * @property {boolean} [is_required]
 * @property {string} [level]
 */

/**
 * @typedef FlashCard
 * @property {string} [text]
 * @property {string} [text_color]
 * @property {string} [background_color]
 */

/**
 * @typedef SocialTokens
 * @property {Facebook} [facebook]
 * @property {Accountkit} [accountkit]
 * @property {Google} [google]
 */

/**
 * @typedef DeleteAccountReasons
 * @property {string} [reason_text]
 * @property {string} [reason_id]
 * @property {boolean} [show_text_area]
 */

/**
 * @typedef DeleteAccountConsent
 * @property {string} [consent_text]
 */

/**
 * @typedef Facebook
 * @property {string} [app_id]
 */

/**
 * @typedef Accountkit
 * @property {string} [app_id]
 */

/**
 * @typedef Google
 * @property {string} [app_id]
 */

/**
 * @typedef SessionExpiry
 * @property {number} [duration]
 * @property {string} [type]
 * @property {boolean} [is_rolling]
 */

/**
 * @typedef UserSchema
 * @property {string} [application_id]
 * @property {string} [user_id]
 * @property {string} [first_name]
 * @property {Object} [meta]
 * @property {string} [last_name]
 * @property {PhoneNumber[]} [phone_numbers]
 * @property {Email[]} [emails]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {boolean} [active]
 * @property {string} [profile_pic_url]
 * @property {string} [username]
 * @property {string} [account_type]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [external_id]
 * @property {string} [rr_id]
 */

/**
 * @typedef PhoneNumber
 * @property {string} [phone] - Phone number
 * @property {number} [country_code] - Country code
 * @property {boolean} [active] - Is the phone number active
 * @property {boolean} [primary] - Is it a primary phone number
 * @property {boolean} [verified] - Is the phone number verified
 */

/**
 * @typedef Email
 * @property {string} [email] - Email address
 * @property {boolean} [active] - Is the email active
 * @property {boolean} [primary] - Is it a primary email
 * @property {boolean} [verified] - Is the email verified
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
