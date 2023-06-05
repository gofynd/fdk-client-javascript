const Joi = require("joi");

class UserModel {
  static Accountkit() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }
  static ArchiveUserRequestSchema() {
    return Joi.object({
      user_id: Joi.string().allow(""),
    });
  }
  static ArchiveUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }
  static AuthenticationApiErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static AuthenticationInternalServerErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static AuthSuccess() {
    return Joi.object({
      register_token: Joi.string().allow(""),
      user: UserModel.UserSchema(),
      user_exists: Joi.boolean(),
    });
  }
  static AuthSuccessUser() {
    return Joi.object({
      active: Joi.boolean(),
      debug: UserModel.AuthSuccessUserDebug(),
      emails: UserModel.AuthSuccessUserEmails(),
      first_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
    });
  }
  static AuthSuccessUserDebug() {
    return Joi.object({
      platform: Joi.string().allow(""),
    });
  }
  static AuthSuccessUserEmails() {
    return Joi.object({
      active: Joi.boolean(),
      email: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
    });
  }
  static BlockUserRequestSchema() {
    return Joi.object({
      reason: Joi.string().allow(""),
      status: Joi.boolean(),
      user_id: Joi.array().items(Joi.string().allow("")),
    });
  }
  static BlockUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }
  static CodeRequestBodySchema() {
    return Joi.object({
      code: Joi.string().allow(""),
    });
  }
  static CreateUserGroupSchema() {
    return Joi.object({
      description: Joi.string().allow("").required(),
      file_url: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
    });
  }
  static CreateUserRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      meta: Joi.any(),
      phone_number: Joi.string().allow("").required(),
      username: Joi.string().allow("").required(),
    });
  }
  static CreateUserResponseSchema() {
    return Joi.object({
      user: UserModel.UserSchema(),
    });
  }
  static CreateUserSessionRequestSchema() {
    return Joi.object({
      domain: Joi.string().allow(""),
      max_age: Joi.number(),
      user_id: Joi.string().allow(""),
    });
  }
  static CreateUserSessionResponseSchema() {
    return Joi.object({
      cookie: Joi.any(),
      domain: Joi.string().allow(""),
      http_only: Joi.boolean(),
      max_age: Joi.number(),
      secure: Joi.boolean(),
    });
  }
  static CustomerListResponseSchema() {
    return Joi.object({
      items: Joi.array().items(UserModel.UserSchema()),
      page: UserModel.PaginationSchema(),
    });
  }
  static DeleteAccountConsent() {
    return Joi.object({
      consent_text: Joi.string().allow(""),
    });
  }
  static DeleteAccountReasons() {
    return Joi.object({
      reason_id: Joi.string().allow(""),
      reason_text: Joi.string().allow(""),
      show_text_area: Joi.boolean(),
    });
  }
  static DeleteApplicationUserRequestSchema() {
    return Joi.object({
      otp: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      reason_id: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }
  static DeleteUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }
  static EditEmailRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),
    });
  }
  static EditMobileRequestSchema() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      phone: Joi.string().allow(""),
    });
  }
  static EditProfileMobileSchema() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      phone: Joi.string().allow(""),
    });
  }
  static EditProfileRequestSchema() {
    return Joi.object({
      android_hash: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      dob: Joi.string().allow(""),
      email: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      mobile: UserModel.EditProfileMobileSchema(),
      profile_pic_url: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
      sender: Joi.string().allow(""),
    });
  }
  static Email() {
    return Joi.object({
      active: Joi.boolean(),
      email: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
    });
  }
  static EmailOtpSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }
  static Facebook() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }
  static FlashCard() {
    return Joi.object({
      background_color: Joi.string().allow(""),
      text: Joi.string().allow(""),
      text_color: Joi.string().allow(""),
    });
  }
  static ForgotPasswordRequestSchema() {
    return Joi.object({
      code: Joi.string().allow(""),
      password: Joi.string().allow(""),
    });
  }
  static FormRegisterRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      password: Joi.string().allow(""),
      phone: UserModel.FormRegisterRequestSchemaPhone(),
      register_token: Joi.string().allow(""),
    });
  }
  static FormRegisterRequestSchemaPhone() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }
  static Google() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }
  static HasPasswordSuccess() {
    return Joi.object({
      result: Joi.boolean(),
    });
  }
  static Login() {
    return Joi.object({
      otp: Joi.boolean(),
      password: Joi.boolean(),
    });
  }
  static LoginSuccess() {
    return Joi.object({
      register_token: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      user: UserModel.UserSchema(),
    });
  }
  static LogoutSuccess() {
    return Joi.object({
      logout: Joi.boolean(),
    });
  }
  static LookAndFeel() {
    return Joi.object({
      background_color: Joi.string().allow(""),
      card_position: Joi.string().allow(""),
    });
  }
  static MetaSchema() {
    return Joi.object({
      fynd_default: Joi.boolean(),
    });
  }
  static NotFoundSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static OAuthRequestAppleSchema() {
    return Joi.object({
      oauth: UserModel.OAuthRequestAppleSchemaOauth(),
      profile: UserModel.OAuthRequestAppleSchemaProfile(),
      user_identifier: Joi.string().allow(""),
    });
  }
  static OAuthRequestAppleSchemaOauth() {
    return Joi.object({
      identity_token: Joi.string().allow(""),
    });
  }
  static OAuthRequestAppleSchemaProfile() {
    return Joi.object({
      first_name: Joi.string().allow(""),
      full_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
    });
  }
  static OAuthRequestSchema() {
    return Joi.object({
      is_signed_in: Joi.boolean(),
      oauth2: UserModel.OAuthRequestSchemaOauth2(),
      profile: UserModel.OAuthRequestSchemaProfile(),
    });
  }
  static OAuthRequestSchemaOauth2() {
    return Joi.object({
      access_token: Joi.string().allow(""),
      expiry: Joi.number(),
      refresh_token: Joi.string().allow(""),
    });
  }
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
  static PaginationSchema() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }
  static PasswordLoginRequestSchema() {
    return Joi.object({
      captcha_code: Joi.string().allow(""),
      password: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }
  static PhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),
      country_code: Joi.number(),
      phone: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
    });
  }
  static PlatformEmail() {
    return Joi.object({
      is_required: Joi.boolean(),
      level: Joi.string().allow(""),
    });
  }
  static PlatformMobile() {
    return Joi.object({
      is_required: Joi.boolean(),
      level: Joi.string().allow(""),
    });
  }
  static PlatformSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      active: Joi.boolean(),
      created_at: Joi.string().allow(""),
      delete_account_consent: Joi.any(),
      delete_account_day: Joi.number(),
      delete_account_reasons: Joi.array().items(
        UserModel.DeleteAccountReasons()
      ),
      desktop_image: Joi.string().allow(""),
      display: Joi.string().allow(""),
      flash_card: UserModel.FlashCard(),
      forgot_password: Joi.boolean(),
      login: UserModel.Login(),
      look_and_feel: UserModel.LookAndFeel(),
      meta: UserModel.MetaSchema(),
      mobile_image: Joi.string().allow(""),
      name: Joi.string().allow(""),
      register: Joi.boolean(),
      register_required_fields: UserModel.RegisterRequiredFields(),
      required_fields: UserModel.RequiredFields(),
      session_config: Joi.any(),
      skip_captcha: Joi.boolean(),
      skip_login: Joi.boolean(),
      social: UserModel.Social(),
      social_tokens: UserModel.SocialTokens(),
      subtext: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }
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
      user: UserModel.UserSchema(),
      user_exists: Joi.boolean(),
      verify_email_link: Joi.boolean(),
      verify_email_otp: Joi.boolean(),
      verify_mobile_otp: Joi.boolean(),
    });
  }
  static ProfileEditSuccessSchema() {
    return Joi.object({
      email: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
      user: Joi.string().allow(""),
      user_exists: Joi.boolean(),
      verify_email_link: Joi.boolean(),
      verify_email_otp: Joi.boolean(),
      verify_mobile_otp: Joi.boolean(),
    });
  }
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
  static RegisterRequiredFields() {
    return Joi.object({
      email: UserModel.RegisterRequiredFieldsEmail(),
      mobile: UserModel.RegisterRequiredFieldsMobile(),
    });
  }
  static RegisterRequiredFieldsEmail() {
    return Joi.object({
      is_required: Joi.boolean(),
      level: Joi.string().allow(""),
    });
  }
  static RegisterRequiredFieldsMobile() {
    return Joi.object({
      is_required: Joi.boolean(),
      level: Joi.string().allow(""),
    });
  }
  static RequiredFields() {
    return Joi.object({
      email: UserModel.PlatformEmail(),
      mobile: UserModel.PlatformMobile(),
    });
  }
  static ResetPasswordSuccess() {
    return Joi.object({
      status: Joi.string().allow(""),
    });
  }
  static SendEmailOtpRequestSchema() {
    return Joi.object({
      action: Joi.string().allow(""),
      email: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
      token: Joi.string().allow(""),
    });
  }
  static SendEmailVerifyLinkSuccess() {
    return Joi.object({
      verify_email_link: Joi.boolean(),
    });
  }
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
  static SendMobileVerifyLinkSuccess() {
    return Joi.object({
      verify_mobile_link: Joi.boolean(),
    });
  }
  static SendOtpRequestSchema() {
    return Joi.object({
      android_hash: Joi.string().allow(""),
      captcha_code: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }
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
  static SendResetPasswordEmailRequestSchema() {
    return Joi.object({
      captcha_code: Joi.string().allow(""),
      email: Joi.string().allow(""),
    });
  }
  static SendResetPasswordMobileRequestSchema() {
    return Joi.object({
      captcha_code: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }
  static SendVerificationLinkMobileRequestSchema() {
    return Joi.object({
      active: Joi.boolean(),
      country_code: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
    });
  }
  static SessionDeleteResponseSchema() {
    return Joi.object({
      items: Joi.array().items(Joi.string().allow("")),
    });
  }
  static SessionExpiry() {
    return Joi.object({
      duration: Joi.number(),
      is_rolling: Joi.boolean(),
      type: Joi.string().allow(""),
    });
  }
  static SessionListResponseInfo() {
    return Joi.object({
      domain: Joi.string().allow(""),
      expire_in: Joi.string().allow(""),
      ip: Joi.string().allow(""),
      session_id: Joi.string().allow(""),
      user_agent: Joi.string().allow(""),
    });
  }
  static SessionListResponseSchema() {
    return Joi.object({
      items: Joi.array().items(UserModel.SessionListResponseInfo()),
    });
  }
  static SessionListSuccess() {
    return Joi.object({
      sessions: Joi.array().items(Joi.string().allow("")),
    });
  }
  static Social() {
    return Joi.object({
      account_kit: Joi.boolean(),
      apple: Joi.boolean(),
      facebook: Joi.boolean(),
      google: Joi.boolean(),
    });
  }
  static SocialTokens() {
    return Joi.object({
      account_kit: UserModel.Accountkit(),
      facebook: UserModel.Facebook(),
      google: UserModel.Google(),
    });
  }
  static TokenRequestBodySchema() {
    return Joi.object({
      token: Joi.string().allow(""),
    });
  }
  static UnauthenticatedSchema() {
    return Joi.object({
      authenticated: Joi.boolean(),
    });
  }
  static UnauthorizedSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static UnDeleteUserRequestSchema() {
    return Joi.object({
      reason: Joi.string().allow(""),
      reason_id: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }
  static UnDeleteUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }
  static UpdatePasswordRequestSchema() {
    return Joi.object({
      new_password: Joi.string().allow(""),
      old_password: Joi.string().allow(""),
    });
  }
  static UpdateUserGroupSchema() {
    return Joi.object({
      description: Joi.string().allow(""),
      file_url: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
  static UpdateUserRequestSchema() {
    return Joi.object({
      emails: Joi.array().items(UserModel.UserEmails()),
      external_id: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      meta: Joi.any(),
      phone_numbers: Joi.array().items(UserModel.UserPhoneNumbers()),
    });
  }
  static UserEmails() {
    return Joi.object({
      active: Joi.boolean(),
      email: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
    });
  }
  static UserGroupListResponseSchema() {
    return Joi.object({
      items: Joi.array().items(UserModel.UserGroupResponseSchema()),
      page: UserModel.PaginationSchema(),
    });
  }
  static UserGroupResponseSchema() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      file_url: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static UserObjectSchema() {
    return Joi.object({
      user: UserModel.UserSchema(),
    });
  }
  static UserPhoneNumbers() {
    return Joi.object({
      active: Joi.boolean(),
      country_code: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
    });
  }
  static UserSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      account_type: Joi.string().allow(""),
      active: Joi.boolean(),
      application_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      dob: Joi.string().allow(""),
      emails: Joi.array().items(UserModel.Email()),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      meta: Joi.any(),
      phone_numbers: Joi.array().items(UserModel.PhoneNumber()),
      profile_pic_url: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }
  static UserSearchResponseSchema() {
    return Joi.object({
      users: Joi.array().items(UserModel.UserSchema()),
    });
  }
  static VerifyEmailOtpRequestSchema() {
    return Joi.object({
      action: Joi.string().allow(""),
      email: Joi.string().allow(""),
      otp: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
    });
  }
  static VerifyEmailOTPSuccess() {
    return Joi.object({
      user: UserModel.UserSchema(),
      verify_email_link: Joi.boolean(),
    });
  }
  static VerifyEmailSuccess() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static VerifyMobileOTPSuccess() {
    return Joi.object({
      user: UserModel.UserSchema(),
      verify_mobile_link: Joi.boolean(),
    });
  }
  static VerifyOtpRequestSchema() {
    return Joi.object({
      otp: Joi.string().allow(""),
      register_token: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
    });
  }
  static VerifyOtpSuccess() {
    return Joi.object({
      register_token: Joi.string().allow(""),
      user: UserModel.UserSchema(),
      user_exists: Joi.boolean(),
    });
  }
}
module.exports = UserModel;
