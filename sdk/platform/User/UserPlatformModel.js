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
  static Email() {
    return Joi.object({
      active: Joi.boolean(),
      email: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
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
  static Google() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }
  static Login() {
    return Joi.object({
      otp: Joi.boolean(),
      password: Joi.boolean(),
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
  static PaginationSchema() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
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
}
module.exports = UserModel;
