const Joi = require("joi");

/**
 * @typedef Accountkit
 * @property {string} [app_id]
 */

/**
 * @typedef ArchiveUserRequestSchema
 * @property {string} [user_id]
 */

/**
 * @typedef ArchiveUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef AuthenticationApiErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef BlockUserRequestSchema
 * @property {string} [reason]
 * @property {boolean} [status]
 * @property {string[]} [user_id]
 */

/**
 * @typedef BlockUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef CreateUserGroupSchema
 * @property {string} description
 * @property {string} file_url
 * @property {string} name
 */

/**
 * @typedef CreateUserRequestSchema
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {Object} [meta]
 * @property {string} phone_number
 * @property {string} username
 */

/**
 * @typedef CreateUserResponseSchema
 * @property {UserSchema} [user]
 */

/**
 * @typedef CreateUserSessionRequestSchema
 * @property {string} [domain]
 * @property {number} [max_age]
 * @property {string} [user_id]
 */

/**
 * @typedef CreateUserSessionResponseSchema
 * @property {Object} [cookie]
 * @property {string} [domain]
 * @property {boolean} [http_only]
 * @property {number} [max_age]
 * @property {boolean} [secure]
 */

/**
 * @typedef CustomerListResponseSchema
 * @property {UserSchema[]} [items]
 * @property {PaginationSchema} [page]
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
 * @typedef Email
 * @property {boolean} [active]
 * @property {string} [email]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
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
 * @typedef Google
 * @property {string} [app_id]
 */

/**
 * @typedef Login
 * @property {boolean} [otp]
 * @property {boolean} [password]
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
 * @typedef PaginationSchema
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */

/**
 * @typedef PartialUserGroupUpdateSchema
 * @property {string} [description]
 * @property {string} [file_url] - Required property when passed type file_url.
 *   Internet reachable csv file url which will be used to fetch download data.
 *   It must have one of columns from `phone_number``, `email`, `user_id` and
 *   must have `action` column. `action` column can have `add` or `remove` value.
 * @property {string} [name]
 * @property {string} [type] - Source of update to be used to update individual
 *   users. Default value is considered file_url if not passed.
 * @property {UserGroupUpdateData[]} [user_data] - Required property when passed
 *   type json. Array of user data. Must have `action` field and one of
 *   `phone_number`, `email` or `user_id` field in object
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
 * @typedef SessionDeleteResponseSchema
 * @property {string[]} [items]
 */

/**
 * @typedef SessionExpiry
 * @property {number} [duration]
 * @property {boolean} [is_rolling]
 * @property {string} [type]
 */

/**
 * @typedef SessionListResponseInfo
 * @property {string} [domain]
 * @property {string} [expire_in]
 * @property {string} [ip]
 * @property {string} [session_id]
 * @property {string} [user_agent]
 */

/**
 * @typedef SessionListResponseSchema
 * @property {SessionListResponseInfo[]} [items]
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
 * @typedef UnDeleteUserRequestSchema
 * @property {string} [reason]
 * @property {string} [reason_id]
 * @property {string} [user_id]
 */

/**
 * @typedef UnDeleteUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef UpdateUserGroupSchema
 * @property {string} [description]
 * @property {string} [file_url]
 * @property {string} [name]
 */

/**
 * @typedef UpdateUserRequestSchema
 * @property {UserEmails[]} [emails]
 * @property {string} [external_id]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {Object} [meta]
 * @property {UserPhoneNumbers[]} [phone_numbers]
 */

/**
 * @typedef UserEmails
 * @property {boolean} [active]
 * @property {string} [email]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 */

/**
 * @typedef UserGroupListResponseSchema
 * @property {UserGroupResponseSchema[]} [items]
 * @property {PaginationSchema} [page]
 */

/**
 * @typedef UserGroupResponseSchema
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [file_url]
 * @property {string} [modified_at]
 * @property {string} [name]
 * @property {string} [status]
 * @property {number} [uid]
 */

/**
 * @typedef UserGroupUpdateData
 * @property {string} action
 * @property {string} [email] - Email of registered user
 * @property {string} [phone_number] - Phone number of registered user
 * @property {string} [user_id] - Must be valid mongodb objectid of existing user
 */

/**
 * @typedef UserPhoneNumbers
 * @property {boolean} [active]
 * @property {string} [country_code]
 * @property {string} [phone]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
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
 * @typedef UserSearchResponseSchema
 * @property {UserSchema[]} [users]
 */

class UserPlatformModel {
  /** @returns {Accountkit} */
  static Accountkit() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }

  /** @returns {ArchiveUserRequestSchema} */
  static ArchiveUserRequestSchema() {
    return Joi.object({
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {ArchiveUserSuccess} */
  static ArchiveUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {AuthenticationApiErrorSchema} */
  static AuthenticationApiErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {BlockUserRequestSchema} */
  static BlockUserRequestSchema() {
    return Joi.object({
      reason: Joi.string().allow(""),
      status: Joi.boolean(),
      user_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {BlockUserSuccess} */
  static BlockUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {CreateUserGroupSchema} */
  static CreateUserGroupSchema() {
    return Joi.object({
      description: Joi.string().allow("").required(),
      file_url: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreateUserRequestSchema} */
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

  /** @returns {CreateUserResponseSchema} */
  static CreateUserResponseSchema() {
    return Joi.object({
      user: UserPlatformModel.UserSchema(),
    });
  }

  /** @returns {CreateUserSessionRequestSchema} */
  static CreateUserSessionRequestSchema() {
    return Joi.object({
      domain: Joi.string().allow(""),
      max_age: Joi.number(),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {CreateUserSessionResponseSchema} */
  static CreateUserSessionResponseSchema() {
    return Joi.object({
      cookie: Joi.any(),
      domain: Joi.string().allow(""),
      http_only: Joi.boolean(),
      max_age: Joi.number(),
      secure: Joi.boolean(),
    });
  }

  /** @returns {CustomerListResponseSchema} */
  static CustomerListResponseSchema() {
    return Joi.object({
      items: Joi.array().items(UserPlatformModel.UserSchema()),
      page: UserPlatformModel.PaginationSchema(),
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

  /** @returns {Email} */
  static Email() {
    return Joi.object({
      active: Joi.boolean(),
      email: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
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

  /** @returns {Google} */
  static Google() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }

  /** @returns {Login} */
  static Login() {
    return Joi.object({
      otp: Joi.boolean(),
      password: Joi.boolean(),
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

  /** @returns {PaginationSchema} */
  static PaginationSchema() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {PartialUserGroupUpdateSchema} */
  static PartialUserGroupUpdateSchema() {
    return Joi.object({
      description: Joi.string().allow(""),
      file_url: Joi.string().allow(""),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      user_data: Joi.array().items(UserPlatformModel.UserGroupUpdateData()),
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
        UserPlatformModel.DeleteAccountReasons()
      ),
      desktop_image: Joi.string().allow(""),
      display: Joi.string().allow(""),
      flash_card: UserPlatformModel.FlashCard(),
      forgot_password: Joi.boolean(),
      login: UserPlatformModel.Login(),
      look_and_feel: UserPlatformModel.LookAndFeel(),
      meta: UserPlatformModel.MetaSchema(),
      mobile_image: Joi.string().allow(""),
      name: Joi.string().allow(""),
      register: Joi.boolean(),
      register_required_fields: UserPlatformModel.RegisterRequiredFields(),
      required_fields: UserPlatformModel.RequiredFields(),
      session_config: Joi.any(),
      skip_captcha: Joi.boolean(),
      skip_login: Joi.boolean(),
      social: UserPlatformModel.Social(),
      social_tokens: UserPlatformModel.SocialTokens(),
      subtext: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {RegisterRequiredFields} */
  static RegisterRequiredFields() {
    return Joi.object({
      email: UserPlatformModel.RegisterRequiredFieldsEmail(),
      mobile: UserPlatformModel.RegisterRequiredFieldsMobile(),
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
      email: UserPlatformModel.PlatformEmail(),
      mobile: UserPlatformModel.PlatformMobile(),
    });
  }

  /** @returns {SessionDeleteResponseSchema} */
  static SessionDeleteResponseSchema() {
    return Joi.object({
      items: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {SessionListResponseInfo} */
  static SessionListResponseInfo() {
    return Joi.object({
      domain: Joi.string().allow(""),
      expire_in: Joi.string().allow(""),
      ip: Joi.string().allow(""),
      session_id: Joi.string().allow(""),
      user_agent: Joi.string().allow(""),
    });
  }

  /** @returns {SessionListResponseSchema} */
  static SessionListResponseSchema() {
    return Joi.object({
      items: Joi.array().items(UserPlatformModel.SessionListResponseInfo()),
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
      account_kit: UserPlatformModel.Accountkit(),
      facebook: UserPlatformModel.Facebook(),
      google: UserPlatformModel.Google(),
    });
  }

  /** @returns {UnDeleteUserRequestSchema} */
  static UnDeleteUserRequestSchema() {
    return Joi.object({
      reason: Joi.string().allow(""),
      reason_id: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {UnDeleteUserSuccess} */
  static UnDeleteUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {UpdateUserGroupSchema} */
  static UpdateUserGroupSchema() {
    return Joi.object({
      description: Joi.string().allow(""),
      file_url: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateUserRequestSchema} */
  static UpdateUserRequestSchema() {
    return Joi.object({
      emails: Joi.array().items(UserPlatformModel.UserEmails()),
      external_id: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      meta: Joi.any(),
      phone_numbers: Joi.array().items(UserPlatformModel.UserPhoneNumbers()),
    });
  }

  /** @returns {UserEmails} */
  static UserEmails() {
    return Joi.object({
      active: Joi.boolean(),
      email: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
    });
  }

  /** @returns {UserGroupListResponseSchema} */
  static UserGroupListResponseSchema() {
    return Joi.object({
      items: Joi.array().items(UserPlatformModel.UserGroupResponseSchema()),
      page: UserPlatformModel.PaginationSchema(),
    });
  }

  /** @returns {UserGroupResponseSchema} */
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

  /** @returns {UserGroupUpdateData} */
  static UserGroupUpdateData() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      email: Joi.string().allow(""),
      phone_number: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {UserPhoneNumbers} */
  static UserPhoneNumbers() {
    return Joi.object({
      active: Joi.boolean(),
      country_code: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
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
      emails: Joi.array().items(UserPlatformModel.Email()),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      meta: Joi.any(),
      phone_numbers: Joi.array().items(UserPlatformModel.PhoneNumber()),
      profile_pic_url: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {UserSearchResponseSchema} */
  static UserSearchResponseSchema() {
    return Joi.object({
      users: Joi.array().items(UserPlatformModel.UserSchema()),
    });
  }
}
module.exports = UserPlatformModel;
