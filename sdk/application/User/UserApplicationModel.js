const Joi = require("joi");

/**
 * @typedef Accountkit
 * @property {string} [app_id]
 */

/**
 * @typedef APIError
 * @property {string} [code]
 * @property {string} [info] - Error code description link
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [request_id]
 */

/**
 * @typedef AuthenticationApiErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef AuthenticationInternalServerErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef AuthSuccess
 * @property {string} [register_token]
 * @property {UserSchema} [user]
 * @property {boolean} [user_exists]
 */

/**
 * @typedef CodeRequestBodySchema
 * @property {string} [code]
 */

/**
 * @typedef DeleteAccountConsent
 * @property {string} [consent_text]
 */

/**
 * @typedef DeleteAccountReasons
 * @property {string} [reason_id]
 * @property {string} [reason_text]
 * @property {boolean} [show_text_area]
 */

/**
 * @typedef DeleteApplicationUserRequestSchema
 * @property {string} [otp]
 * @property {string} [reason]
 * @property {string} [reason_id]
 * @property {string} [request_id]
 * @property {string} [user_id]
 */

/**
 * @typedef DeleteUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef EditEmailRequestSchema
 * @property {string} [email]
 */

/**
 * @typedef EditMobileRequestSchema
 * @property {string} [country_code]
 * @property {string} [phone]
 */

/**
 * @typedef EditProfileMobileSchema
 * @property {string} [country_code]
 * @property {string} [phone]
 */

/**
 * @typedef EditProfileRequestSchema
 * @property {string} [android_hash]
 * @property {string} [country_code]
 * @property {string} [dob]
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {EditProfileMobileSchema} [mobile]
 * @property {string} [profile_pic_url]
 * @property {string} [register_token]
 * @property {string} [sender]
 */

/**
 * @typedef Email
 * @property {boolean} [active]
 * @property {string} [email]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 */

/**
 * @typedef EmailOtpSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef Facebook
 * @property {string} [app_id]
 */

/**
 * @typedef FlashCard
 * @property {string} [background_color]
 * @property {string} [text]
 * @property {string} [text_color]
 */

/**
 * @typedef ForgotPasswordRequestSchema
 * @property {string} [code]
 * @property {string} [password]
 */

/**
 * @typedef FormRegisterRequestSchema
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {string} [password]
 * @property {FormRegisterRequestSchemaPhone} [phone]
 * @property {string} [register_token]
 */

/**
 * @typedef FormRegisterRequestSchemaPhone
 * @property {string} [country_code]
 * @property {string} [mobile]
 */

/**
 * @typedef Google
 * @property {string} [app_id]
 */

/**
 * @typedef HasPasswordSuccess
 * @property {boolean} [result]
 */

/**
 * @typedef Login
 * @property {boolean} [otp]
 * @property {boolean} [password]
 */

/**
 * @typedef LoginSuccess
 * @property {string} [register_token]
 * @property {string} [request_id]
 * @property {UserSchema} [user]
 */

/**
 * @typedef LogoutSuccess
 * @property {boolean} [logout]
 */

/**
 * @typedef LookAndFeel
 * @property {string} [background_color]
 * @property {string} [card_position]
 */

/**
 * @typedef MetaSchema
 * @property {boolean} [fynd_default]
 */

/**
 * @typedef OAuthRequestAppleSchema
 * @property {OAuthRequestAppleSchemaOauth} [oauth]
 * @property {OAuthRequestAppleSchemaProfile} [profile]
 * @property {string} [user_identifier]
 */

/**
 * @typedef OAuthRequestAppleSchemaOauth
 * @property {string} [identity_token]
 */

/**
 * @typedef OAuthRequestAppleSchemaProfile
 * @property {string} [first_name]
 * @property {string} [full_name]
 * @property {string} [last_name]
 */

/**
 * @typedef OAuthRequestSchema
 * @property {boolean} [is_signed_in]
 * @property {OAuthRequestSchemaOauth2} [oauth2]
 * @property {OAuthRequestSchemaProfile} [profile]
 */

/**
 * @typedef OAuthRequestSchemaOauth2
 * @property {string} [access_token]
 * @property {number} [expiry]
 * @property {string} [refresh_token]
 */

/**
 * @typedef OAuthRequestSchemaProfile
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [full_name]
 * @property {string} [id]
 * @property {string} [image]
 * @property {string} [last_name]
 */

/**
 * @typedef OtpSuccess
 * @property {string} [country_code]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [register_token]
 * @property {string} [request_id]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {boolean} [success]
 */

/**
 * @typedef PasswordLoginRequestSchema
 * @property {string} [captcha_code]
 * @property {string} [password]
 * @property {string} [username]
 */

/**
 * @typedef PhoneNumber
 * @property {boolean} [active]
 * @property {number} [country_code]
 * @property {string} [phone]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
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
 * @typedef PlatformSchema
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [created_at]
 * @property {Object} [delete_account_consent]
 * @property {number} [delete_account_day]
 * @property {DeleteAccountReasons[]} [delete_account_reasons]
 * @property {string} [desktop_image]
 * @property {string} [display]
 * @property {FlashCard} [flash_card]
 * @property {boolean} [forgot_password]
 * @property {Login} [login]
 * @property {LookAndFeel} [look_and_feel]
 * @property {MetaSchema} [meta]
 * @property {string} [mobile_image]
 * @property {string} [name]
 * @property {boolean} [register]
 * @property {RegisterRequiredFields} [register_required_fields]
 * @property {RequiredFields} [required_fields]
 * @property {Object} [session_config]
 * @property {boolean} [skip_captcha]
 * @property {boolean} [skip_login]
 * @property {Social} [social]
 * @property {SocialTokens} [social_tokens]
 * @property {string} [subtext]
 * @property {string} [updated_at]
 */

/**
 * @typedef ProfileEditSuccess
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [register_token]
 * @property {string} [request_id]
 * @property {string} [resend_email_token]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {boolean} [success]
 * @property {UserSchema} [user]
 * @property {boolean} [user_exists]
 * @property {boolean} [verify_email_link]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 */

/**
 * @typedef RegisterFormSuccess
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [register_token]
 * @property {string} [request_id]
 * @property {string} [resend_email_token]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {boolean} [success]
 * @property {boolean} [user_exists]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
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
 * @typedef RequiredFields
 * @property {PlatformEmail} [email]
 * @property {PlatformMobile} [mobile]
 */

/**
 * @typedef ResetForgotPasswordSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef ResetPasswordSuccess
 * @property {string} [status]
 */

/**
 * @typedef SendEmailForgotOtpRequestSchema
 * @property {string} [action]
 * @property {string} [email]
 * @property {string} [token]
 */

/**
 * @typedef SendEmailOtpRequestSchema
 * @property {string} [action]
 * @property {string} [captcha_code]
 * @property {string} [email]
 * @property {string} [register_token]
 * @property {string} [token]
 */

/**
 * @typedef SendEmailVerifyLinkSuccess
 * @property {boolean} [verify_email_link]
 */

/**
 * @typedef SendMobileForgotOtpRequestSchema
 * @property {string} [action]
 * @property {string} [android_hash]
 * @property {string} [country_code]
 * @property {string} [mobile]
 * @property {string} [token]
 */

/**
 * @typedef SendMobileOtpRequestSchema
 * @property {string} [action]
 * @property {string} [android_hash]
 * @property {string} [captcha_code]
 * @property {string} [country_code]
 * @property {string} [force]
 * @property {string} [mobile]
 * @property {string} [token]
 */

/**
 * @typedef SendMobileVerifyLinkSuccess
 * @property {boolean} [verify_mobile_link]
 */

/**
 * @typedef SendOtpRequestSchema
 * @property {string} [android_hash]
 * @property {string} [captcha_code]
 * @property {string} [country_code]
 * @property {string} [mobile]
 */

/**
 * @typedef SendOtpResponse
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [register_token]
 * @property {string} [request_id]
 * @property {string} [resend_email_token]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {boolean} [success]
 * @property {boolean} [user_exists]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 */

/**
 * @typedef SendResetPasswordEmailRequestSchema
 * @property {string} [captcha_code]
 * @property {string} [email]
 */

/**
 * @typedef SendResetPasswordMobileRequestSchema
 * @property {string} [captcha_code]
 * @property {string} [country_code]
 * @property {string} [mobile]
 */

/**
 * @typedef SendVerificationLinkMobileRequestSchema
 * @property {boolean} [active]
 * @property {string} [country_code]
 * @property {string} [phone]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 */

/**
 * @typedef SessionExpiry
 * @property {number} [duration]
 * @property {boolean} [is_rolling]
 * @property {string} [type]
 */

/**
 * @typedef SessionListSuccess
 * @property {string[]} [sessions]
 */

/**
 * @typedef Social
 * @property {boolean} [account_kit]
 * @property {boolean} [apple]
 * @property {boolean} [facebook]
 * @property {boolean} [google]
 */

/**
 * @typedef SocialTokens
 * @property {Accountkit} [account_kit]
 * @property {Facebook} [facebook]
 * @property {Google} [google]
 */

/**
 * @typedef TokenRequestBodySchema
 * @property {string} [token]
 */

/**
 * @typedef UpdatePasswordRequestSchema
 * @property {string} [new_password]
 * @property {string} [old_password]
 */

/**
 * @typedef UserObjectSchema
 * @property {UserSchema} [user]
 */

/**
 * @typedef UserSchema
 * @property {string} [_id]
 * @property {string} [account_type]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {string} [created_at]
 * @property {string} [dob]
 * @property {Email[]} [emails]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {Object} [meta]
 * @property {PhoneNumber[]} [phone_numbers]
 * @property {string} [profile_pic_url]
 * @property {string} [updated_at]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef VerifyEmailForgotOtpRequestSchema
 * @property {string} [email]
 * @property {string} [otp]
 */

/**
 * @typedef VerifyEmailOtpRequestSchema
 * @property {string} [action]
 * @property {string} [email]
 * @property {string} [otp]
 * @property {string} [register_token]
 */

/**
 * @typedef VerifyEmailOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_email_link]
 */

/**
 * @typedef VerifyEmailSuccess
 * @property {string} [message]
 */

/**
 * @typedef VerifyForgotOtpSuccess
 * @property {string} [forgot_token]
 * @property {boolean} [success]
 */

/**
 * @typedef VerifyMobileForgotOtpRequestSchema
 * @property {string} [otp]
 * @property {string} [request_id]
 */

/**
 * @typedef VerifyMobileOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_mobile_link]
 */

/**
 * @typedef VerifyOtpRequestSchema
 * @property {string} [otp]
 * @property {string} [register_token]
 * @property {string} [request_id]
 */

/**
 * @typedef VerifyOtpSuccess
 * @property {string} [register_token]
 * @property {UserSchema} [user]
 * @property {boolean} [user_exists]
 */

class UserApplicationModel {
  /** @returns {Accountkit} */
  static Accountkit() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }

  /** @returns {APIError} */
  static APIError() {
    return Joi.object({
      code: Joi.string().allow(""),
      info: Joi.string().allow(""),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      request_id: Joi.string().allow(""),
    });
  }

  /** @returns {AuthenticationApiErrorSchema} */
  static AuthenticationApiErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {AuthenticationInternalServerErrorSchema} */
  static AuthenticationInternalServerErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {AuthSuccess} */
  static AuthSuccess() {
    return Joi.object({
      register_token: Joi.string().allow(""),
      user: UserApplicationModel.UserSchema(),
      user_exists: Joi.boolean(),
    });
  }

  /** @returns {CodeRequestBodySchema} */
  static CodeRequestBodySchema() {
    return Joi.object({
      code: Joi.string().allow(""),
    });
  }

  /** @returns {DeleteAccountConsent} */
  static DeleteAccountConsent() {
    return Joi.object({
      consent_text: Joi.string().allow(""),
    });
  }

  /** @returns {DeleteAccountReasons} */
  static DeleteAccountReasons() {
    return Joi.object({
      reason_id: Joi.string().allow(""),
      reason_text: Joi.string().allow(""),
      show_text_area: Joi.boolean(),
    });
  }

  /** @returns {DeleteApplicationUserRequestSchema} */
  static DeleteApplicationUserRequestSchema() {
    return Joi.object({
      otp: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      reason_id: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {DeleteUserSuccess} */
  static DeleteUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {EditEmailRequestSchema} */
  static EditEmailRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),
    });
  }

  /** @returns {EditMobileRequestSchema} */
  static EditMobileRequestSchema() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      phone: Joi.string().allow(""),
    });
  }

  /** @returns {EditProfileMobileSchema} */
  static EditProfileMobileSchema() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      phone: Joi.string().allow(""),
    });
  }

  /** @returns {EditProfileRequestSchema} */
  static EditProfileRequestSchema() {
    return Joi.object({
      android_hash: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      dob: Joi.string().allow(""),
      email: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      mobile: UserApplicationModel.EditProfileMobileSchema(),
      profile_pic_url: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
      sender: Joi.string().allow(""),
    });
  }

  /** @returns {Email} */
  static Email() {
    return Joi.object({
      active: Joi.boolean(),
      email: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
    });
  }

  /** @returns {EmailOtpSuccess} */
  static EmailOtpSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {Facebook} */
  static Facebook() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }

  /** @returns {FlashCard} */
  static FlashCard() {
    return Joi.object({
      background_color: Joi.string().allow(""),
      text: Joi.string().allow(""),
      text_color: Joi.string().allow(""),
    });
  }

  /** @returns {ForgotPasswordRequestSchema} */
  static ForgotPasswordRequestSchema() {
    return Joi.object({
      code: Joi.string().allow(""),
      password: Joi.string().allow(""),
    });
  }

  /** @returns {FormRegisterRequestSchema} */
  static FormRegisterRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      password: Joi.string().allow(""),
      phone: UserApplicationModel.FormRegisterRequestSchemaPhone(),
      register_token: Joi.string().allow(""),
    });
  }

  /** @returns {FormRegisterRequestSchemaPhone} */
  static FormRegisterRequestSchemaPhone() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }

  /** @returns {Google} */
  static Google() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }

  /** @returns {HasPasswordSuccess} */
  static HasPasswordSuccess() {
    return Joi.object({
      result: Joi.boolean(),
    });
  }

  /** @returns {Login} */
  static Login() {
    return Joi.object({
      otp: Joi.boolean(),
      password: Joi.boolean(),
    });
  }

  /** @returns {LoginSuccess} */
  static LoginSuccess() {
    return Joi.object({
      register_token: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      user: UserApplicationModel.UserSchema(),
    });
  }

  /** @returns {LogoutSuccess} */
  static LogoutSuccess() {
    return Joi.object({
      logout: Joi.boolean(),
    });
  }

  /** @returns {LookAndFeel} */
  static LookAndFeel() {
    return Joi.object({
      background_color: Joi.string().allow(""),
      card_position: Joi.string().allow(""),
    });
  }

  /** @returns {MetaSchema} */
  static MetaSchema() {
    return Joi.object({
      fynd_default: Joi.boolean(),
    });
  }

  /** @returns {OAuthRequestAppleSchema} */
  static OAuthRequestAppleSchema() {
    return Joi.object({
      oauth: UserApplicationModel.OAuthRequestAppleSchemaOauth(),
      profile: UserApplicationModel.OAuthRequestAppleSchemaProfile(),
      user_identifier: Joi.string().allow(""),
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
      first_name: Joi.string().allow(""),
      full_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
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
      email: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      full_name: Joi.string().allow(""),
      id: Joi.string().allow(""),
      image: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
    });
  }

  /** @returns {OtpSuccess} */
  static OtpSuccess() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      message: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      resend_timer: Joi.number(),
      resend_token: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {PasswordLoginRequestSchema} */
  static PasswordLoginRequestSchema() {
    return Joi.object({
      captcha_code: Joi.string().allow(""),
      password: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {PhoneNumber} */
  static PhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),
      country_code: Joi.number(),
      phone: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
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

  /** @returns {PlatformSchema} */
  static PlatformSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      active: Joi.boolean(),
      created_at: Joi.string().allow(""),
      delete_account_consent: Joi.any(),
      delete_account_day: Joi.number(),
      delete_account_reasons: Joi.array().items(
        UserApplicationModel.DeleteAccountReasons()
      ),
      desktop_image: Joi.string().allow(""),
      display: Joi.string().allow(""),
      flash_card: UserApplicationModel.FlashCard(),
      forgot_password: Joi.boolean(),
      login: UserApplicationModel.Login(),
      look_and_feel: UserApplicationModel.LookAndFeel(),
      meta: UserApplicationModel.MetaSchema(),
      mobile_image: Joi.string().allow(""),
      name: Joi.string().allow(""),
      register: Joi.boolean(),
      register_required_fields: UserApplicationModel.RegisterRequiredFields(),
      required_fields: UserApplicationModel.RequiredFields(),
      session_config: Joi.any(),
      skip_captcha: Joi.boolean(),
      skip_login: Joi.boolean(),
      social: UserApplicationModel.Social(),
      social_tokens: UserApplicationModel.SocialTokens(),
      subtext: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {ProfileEditSuccess} */
  static ProfileEditSuccess() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      email: Joi.string().allow(""),
      message: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      resend_email_token: Joi.string().allow(""),
      resend_timer: Joi.number(),
      resend_token: Joi.string().allow(""),
      success: Joi.boolean(),
      user: UserApplicationModel.UserSchema(),
      user_exists: Joi.boolean(),
      verify_email_link: Joi.boolean(),
      verify_email_otp: Joi.boolean(),
      verify_mobile_otp: Joi.boolean(),
    });
  }

  /** @returns {RegisterFormSuccess} */
  static RegisterFormSuccess() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      email: Joi.string().allow(""),
      message: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      resend_email_token: Joi.string().allow(""),
      resend_timer: Joi.number(),
      resend_token: Joi.string().allow(""),
      success: Joi.boolean(),
      user_exists: Joi.boolean(),
      verify_email_otp: Joi.boolean(),
      verify_mobile_otp: Joi.boolean(),
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

  /** @returns {RequiredFields} */
  static RequiredFields() {
    return Joi.object({
      email: UserApplicationModel.PlatformEmail(),
      mobile: UserApplicationModel.PlatformMobile(),
    });
  }

  /** @returns {ResetForgotPasswordSuccess} */
  static ResetForgotPasswordSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {ResetPasswordSuccess} */
  static ResetPasswordSuccess() {
    return Joi.object({
      status: Joi.string().allow(""),
    });
  }

  /** @returns {SendEmailForgotOtpRequestSchema} */
  static SendEmailForgotOtpRequestSchema() {
    return Joi.object({
      action: Joi.string().allow(""),
      email: Joi.string().allow(""),
      token: Joi.string().allow(""),
    });
  }

  /** @returns {SendEmailOtpRequestSchema} */
  static SendEmailOtpRequestSchema() {
    return Joi.object({
      action: Joi.string().allow(""),
      captcha_code: Joi.string().allow(""),
      email: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
      token: Joi.string().allow(""),
    });
  }

  /** @returns {SendEmailVerifyLinkSuccess} */
  static SendEmailVerifyLinkSuccess() {
    return Joi.object({
      verify_email_link: Joi.boolean(),
    });
  }

  /** @returns {SendMobileForgotOtpRequestSchema} */
  static SendMobileForgotOtpRequestSchema() {
    return Joi.object({
      action: Joi.string().allow(""),
      android_hash: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      token: Joi.string().allow(""),
    });
  }

  /** @returns {SendMobileOtpRequestSchema} */
  static SendMobileOtpRequestSchema() {
    return Joi.object({
      action: Joi.string().allow(""),
      android_hash: Joi.string().allow(""),
      captcha_code: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      force: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      token: Joi.string().allow(""),
    });
  }

  /** @returns {SendMobileVerifyLinkSuccess} */
  static SendMobileVerifyLinkSuccess() {
    return Joi.object({
      verify_mobile_link: Joi.boolean(),
    });
  }

  /** @returns {SendOtpRequestSchema} */
  static SendOtpRequestSchema() {
    return Joi.object({
      android_hash: Joi.string().allow(""),
      captcha_code: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }

  /** @returns {SendOtpResponse} */
  static SendOtpResponse() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      email: Joi.string().allow(""),
      message: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      resend_email_token: Joi.string().allow(""),
      resend_timer: Joi.number(),
      resend_token: Joi.string().allow(""),
      success: Joi.boolean(),
      user_exists: Joi.boolean(),
      verify_email_otp: Joi.boolean(),
      verify_mobile_otp: Joi.boolean(),
    });
  }

  /** @returns {SendResetPasswordEmailRequestSchema} */
  static SendResetPasswordEmailRequestSchema() {
    return Joi.object({
      captcha_code: Joi.string().allow(""),
      email: Joi.string().allow(""),
    });
  }

  /** @returns {SendResetPasswordMobileRequestSchema} */
  static SendResetPasswordMobileRequestSchema() {
    return Joi.object({
      captcha_code: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }

  /** @returns {SendVerificationLinkMobileRequestSchema} */
  static SendVerificationLinkMobileRequestSchema() {
    return Joi.object({
      active: Joi.boolean(),
      country_code: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
    });
  }

  /** @returns {SessionExpiry} */
  static SessionExpiry() {
    return Joi.object({
      duration: Joi.number(),
      is_rolling: Joi.boolean(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {SessionListSuccess} */
  static SessionListSuccess() {
    return Joi.object({
      sessions: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Social} */
  static Social() {
    return Joi.object({
      account_kit: Joi.boolean(),
      apple: Joi.boolean(),
      facebook: Joi.boolean(),
      google: Joi.boolean(),
    });
  }

  /** @returns {SocialTokens} */
  static SocialTokens() {
    return Joi.object({
      account_kit: UserApplicationModel.Accountkit(),
      facebook: UserApplicationModel.Facebook(),
      google: UserApplicationModel.Google(),
    });
  }

  /** @returns {TokenRequestBodySchema} */
  static TokenRequestBodySchema() {
    return Joi.object({
      token: Joi.string().allow(""),
    });
  }

  /** @returns {UpdatePasswordRequestSchema} */
  static UpdatePasswordRequestSchema() {
    return Joi.object({
      new_password: Joi.string().allow(""),
      old_password: Joi.string().allow(""),
    });
  }

  /** @returns {UserObjectSchema} */
  static UserObjectSchema() {
    return Joi.object({
      user: UserApplicationModel.UserSchema(),
    });
  }

  /** @returns {UserSchema} */
  static UserSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      account_type: Joi.string().allow(""),
      active: Joi.boolean(),
      application_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      dob: Joi.string().allow(""),
      emails: Joi.array().items(UserApplicationModel.Email()),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      meta: Joi.any(),
      phone_numbers: Joi.array().items(UserApplicationModel.PhoneNumber()),
      profile_pic_url: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {VerifyEmailForgotOtpRequestSchema} */
  static VerifyEmailForgotOtpRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),
      otp: Joi.string().allow(""),
    });
  }

  /** @returns {VerifyEmailOtpRequestSchema} */
  static VerifyEmailOtpRequestSchema() {
    return Joi.object({
      action: Joi.string().allow(""),
      email: Joi.string().allow(""),
      otp: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
    });
  }

  /** @returns {VerifyEmailOTPSuccess} */
  static VerifyEmailOTPSuccess() {
    return Joi.object({
      user: UserApplicationModel.UserSchema(),
      verify_email_link: Joi.boolean(),
    });
  }

  /** @returns {VerifyEmailSuccess} */
  static VerifyEmailSuccess() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {VerifyForgotOtpSuccess} */
  static VerifyForgotOtpSuccess() {
    return Joi.object({
      forgot_token: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {VerifyMobileForgotOtpRequestSchema} */
  static VerifyMobileForgotOtpRequestSchema() {
    return Joi.object({
      otp: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
    });
  }

  /** @returns {VerifyMobileOTPSuccess} */
  static VerifyMobileOTPSuccess() {
    return Joi.object({
      user: UserApplicationModel.UserSchema(),
      verify_mobile_link: Joi.boolean(),
    });
  }

  /** @returns {VerifyOtpRequestSchema} */
  static VerifyOtpRequestSchema() {
    return Joi.object({
      otp: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
    });
  }

  /** @returns {VerifyOtpSuccess} */
  static VerifyOtpSuccess() {
    return Joi.object({
      register_token: Joi.string().allow(""),
      user: UserApplicationModel.UserSchema(),
      user_exists: Joi.boolean(),
    });
  }
}
module.exports = UserApplicationModel;
