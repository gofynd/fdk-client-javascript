const Joi = require("joi");

/**
 * @typedef SuccessMessageResponse
 * @property {string} [success]
 */

/**
 * @typedef UserAttributeDefinition
 * @property {string} [_id] - The unique identifier for the attribute definition.
 * @property {string} [name] - The attribute name.
 * @property {string} [slug] - The attribute key.
 * @property {string} [description] - The description of the attribute.
 * @property {string} [application_id] - The application ID.
 * @property {string} [type] - The attribute type.
 * @property {boolean} [multi_value] - Whether the attribute supports multiple values.
 * @property {boolean} [customer_editable] - Whether the attribute is customer-editable.
 * @property {boolean} [encrypted] - Whether the attribute is encrypted.
 * @property {boolean} [pinned] - Whether the attribute is pinned.
 * @property {number} [pin_order] - The order in which the attribute is pinned.
 * @property {Object[]} [validations]
 * @property {boolean} [is_locked] - Whether the attribute is locked.
 * @property {string} [created_at] - The creation date of the attribute.
 * @property {string} [modified_at] - The modification date of the attribute.
 * @property {number} [__v] - The version number of the attribute.
 */

/**
 * @typedef UserAttributeDefinitionResponse
 * @property {string} [_id] - The unique identifier for the attribute definition.
 * @property {string} [name] - The attribute name.
 * @property {string} [slug] - The attribute key.
 * @property {string} [description] - The description of the attribute.
 * @property {string} [application_id] - The application ID.
 * @property {string} [type] - The attribute type.
 * @property {boolean} [multi_value] - Whether the attribute supports multiple values.
 * @property {boolean} [customer_editable] - Whether the attribute is customer-editable.
 * @property {boolean} [encrypted] - Whether the attribute is encrypted.
 * @property {boolean} [pinned] - Whether the attribute is pinned.
 * @property {number} [pin_order] - The order in which the attribute is pinned.
 * @property {UserAttributeDefinitionValidation[]} [validations]
 * @property {boolean} [is_locked] - Whether the attribute is locked.
 * @property {string} [created_by] - The user who created the attribute.
 * @property {string} [updated_by] - The user who last updated the attribute.
 * @property {string} [created_at] - The creation date of the attribute definition.
 * @property {string} [modified_at] - The last modification date of the
 *   attribute definition.
 */

/**
 * @typedef UserAttributeDefinitionValidation
 * @property {string} [type] - The type of validation.
 * @property {Object} [value] - The validation value.
 */

/**
 * @typedef UserAttributeResponse
 * @property {string} [_id] - The unique identifier for the attribute definition.
 * @property {string} [name] - The name of user attribute definition.
 * @property {string} [user_id] - The unique identifier for the user.
 * @property {string} [application_id] - The application ID.
 * @property {string} [type] - The attribute type.
 * @property {boolean} [customer_overriden] - Whether the attribute is customer-editable.
 * @property {Object} [attribute]
 * @property {string} [updated_by]
 */

/**
 * @typedef CreateUserAttributeRequest
 * @property {boolean} [customer_overriden]
 * @property {Object} [attribute]
 */

/**
 * @typedef CreateUserAttributeDefinition
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {string} [type]
 * @property {boolean} [multi_value]
 * @property {boolean} [customer_editable]
 * @property {boolean} [encrypted]
 * @property {boolean} [pinned]
 * @property {number} [pin_order]
 * @property {string} [default_value]
 * @property {Object[]} [validations]
 */

/**
 * @typedef BlockUserRequestSchema
 * @property {boolean} [status]
 * @property {string[]} [user_id]
 * @property {string} [reason]
 */

/**
 * @typedef ArchiveUserRequestSchema
 * @property {string} [user_id]
 */

/**
 * @typedef UnDeleteUserRequestSchema
 * @property {string} [user_id]
 * @property {string} [reason]
 * @property {string} [reason_id]
 */

/**
 * @typedef BlockUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef ArchiveUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef UnDeleteUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef UserSearchResponseSchema
 * @property {UserSchema[]} [users]
 */

/**
 * @typedef CustomerListResponseSchema
 * @property {UserSchema[]} [items]
 * @property {PaginationSchema} [page]
 */

/**
 * @typedef PaginationSchema
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 * @property {string} [type]
 * @property {number} [current]
 */

/**
 * @typedef SessionListResponseSchema
 * @property {SessionListResponseInfo[]} [items]
 */

/**
 * @typedef SessionDeleteResponseSchema
 * @property {string} [user_id]
 * @property {string} [session_id]
 */

/**
 * @typedef SessionsDeleteResponseSchema
 * @property {string} [user_id]
 * @property {string[]} [session_ids]
 */

/**
 * @typedef AuthenticationApiErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef SessionListResponseInfo
 * @property {string} [session_id]
 * @property {string} [user_agent]
 * @property {string} [ip]
 * @property {string} [domain]
 * @property {string} [expire_in]
 */

/**
 * @typedef Conditions
 * @property {string} [user_attribute_definition_id]
 * @property {string} [type]
 * @property {string} [value]
 * @property {string} [key]
 */

/**
 * @typedef UserResponseErrorSchema
 * @property {number} [count]
 * @property {string} [file_url]
 */

/**
 * @typedef UserGroupResponseSchema
 * @property {Conditions[]} [conditions]
 * @property {UserResponseErrorSchema} [error]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [file_url]
 * @property {string} [_id]
 * @property {string} [status]
 * @property {boolean} [is_active]
 * @property {string} [type]
 * @property {number} [uid]
 * @property {string} [application_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {number} [__v]
 */

/**
 * @typedef UserGroupListResponseSchema
 * @property {UserGroupResponseSchema[]} [items]
 * @property {PaginationSchema} [page]
 */

/**
 * @typedef ConditionsSchema
 * @property {string} [user_attribute_definition_id]
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef CreateUserGroup
 * @property {ConditionsSchema[]} [conditions]
 * @property {string} [type]
 * @property {string} name
 * @property {string} description
 * @property {string} [file_url]
 */

/**
 * @typedef CreateUserRequestSchema
 * @property {string} phone_number
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} username
 * @property {Object} [meta]
 * @property {string} [external_id]
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
 * @property {string} [domain]
 * @property {number} [max_age]
 * @property {boolean} [secure]
 * @property {boolean} [http_only]
 * @property {Object} [cookie]
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
 * @property {Object} [delete_account_consent]
 * @property {Object} [session_config]
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
 * @property {Accountkit} [account_kit]
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
 * @typedef UpdateUserGroupSchema
 * @property {ConditionsSchema[]} [conditions]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [file_url]
 */

/**
 * @typedef PartialUserGroupUpdateSchema
 * @property {string} [type] - Source of update to be used to update individual
 *   users. Default value is considered file_url if not passed.
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [file_url] - Required property when passed type file_url.
 *   Internet reachable csv file url which will be used to fetch download data.
 *   It must have one of columns from `phone_number``, `email`, `user_id` and
 *   must have `action` column. `action` column can have `add` or `remove` value.
 * @property {UserGroupUpdateData[]} [user_data] - Required property when passed
 *   type json. Array of user data. Must have `action` field and one of
 *   `phone_number`, `email` or `user_id` field in object
 */

/**
 * @typedef UserGroupUpdateData
 * @property {string} [user_id] - Must be valid mongodb objectid of existing user
 * @property {string} [phone_number] - Phone number of registered user
 * @property {string} [email] - Email of registered user
 * @property {string} action
 */

/**
 * @typedef UpdateUserRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [external_id]
 * @property {Object} [meta]
 * @property {UserPhoneNumbers[]} [phone_numbers]
 * @property {UserEmails[]} [emails]
 */

/**
 * @typedef UserEmails
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [email]
 */

/**
 * @typedef UserPhoneNumbers
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [phone]
 * @property {string} [country_code]
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
 */

/**
 * @typedef PhoneNumber
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [phone]
 * @property {number} [country_code]
 */

/**
 * @typedef Email
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [email]
 * @property {boolean} [active]
 */

class UserPlatformModel {
  /** @returns {SuccessMessageResponse} */
  static SuccessMessageResponse() {
    return Joi.object({
      success: Joi.string().allow(""),
    });
  }

  /** @returns {UserAttributeDefinition} */
  static UserAttributeDefinition() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      description: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      customer_editable: Joi.boolean(),
      encrypted: Joi.boolean(),
      pinned: Joi.boolean(),
      pin_order: Joi.number(),
      validations: Joi.array().items(Joi.any()),
      is_locked: Joi.boolean(),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {UserAttributeDefinitionResponse} */
  static UserAttributeDefinitionResponse() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      description: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      customer_editable: Joi.boolean(),
      encrypted: Joi.boolean(),
      pinned: Joi.boolean(),
      pin_order: Joi.number(),
      validations: Joi.array().items(
        UserPlatformModel.UserAttributeDefinitionValidation()
      ),
      is_locked: Joi.boolean(),
      created_by: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
    });
  }

  /** @returns {UserAttributeDefinitionValidation} */
  static UserAttributeDefinitionValidation() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.any(),
    });
  }

  /** @returns {UserAttributeResponse} */
  static UserAttributeResponse() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      customer_overriden: Joi.boolean(),
      attribute: Joi.any(),
      updated_by: Joi.string().allow(""),
    });
  }

  /** @returns {CreateUserAttributeRequest} */
  static CreateUserAttributeRequest() {
    return Joi.object({
      customer_overriden: Joi.boolean(),
      attribute: Joi.any(),
    });
  }

  /** @returns {CreateUserAttributeDefinition} */
  static CreateUserAttributeDefinition() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      description: Joi.string().allow(""),
      type: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      customer_editable: Joi.boolean(),
      encrypted: Joi.boolean(),
      pinned: Joi.boolean(),
      pin_order: Joi.number(),
      default_value: Joi.string().allow(""),
      validations: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {BlockUserRequestSchema} */
  static BlockUserRequestSchema() {
    return Joi.object({
      status: Joi.boolean(),
      user_id: Joi.array().items(Joi.string().allow("")),
      reason: Joi.string().allow(""),
    });
  }

  /** @returns {ArchiveUserRequestSchema} */
  static ArchiveUserRequestSchema() {
    return Joi.object({
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {UnDeleteUserRequestSchema} */
  static UnDeleteUserRequestSchema() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      reason_id: Joi.string().allow(""),
    });
  }

  /** @returns {BlockUserSuccess} */
  static BlockUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {ArchiveUserSuccess} */
  static ArchiveUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {UnDeleteUserSuccess} */
  static UnDeleteUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {UserSearchResponseSchema} */
  static UserSearchResponseSchema() {
    return Joi.object({
      users: Joi.array().items(UserPlatformModel.UserSchema()),
    });
  }

  /** @returns {CustomerListResponseSchema} */
  static CustomerListResponseSchema() {
    return Joi.object({
      items: Joi.array().items(UserPlatformModel.UserSchema()),
      page: UserPlatformModel.PaginationSchema(),
    });
  }

  /** @returns {PaginationSchema} */
  static PaginationSchema() {
    return Joi.object({
      size: Joi.number(),
      item_total: Joi.number(),
      has_next: Joi.boolean(),
      type: Joi.string().allow(""),
      current: Joi.number(),
    });
  }

  /** @returns {SessionListResponseSchema} */
  static SessionListResponseSchema() {
    return Joi.object({
      items: Joi.array().items(UserPlatformModel.SessionListResponseInfo()),
    });
  }

  /** @returns {SessionDeleteResponseSchema} */
  static SessionDeleteResponseSchema() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      session_id: Joi.string().allow(""),
    });
  }

  /** @returns {SessionsDeleteResponseSchema} */
  static SessionsDeleteResponseSchema() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      session_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {AuthenticationApiErrorSchema} */
  static AuthenticationApiErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {SessionListResponseInfo} */
  static SessionListResponseInfo() {
    return Joi.object({
      session_id: Joi.string().allow(""),
      user_agent: Joi.string().allow(""),
      ip: Joi.string().allow(""),
      domain: Joi.string().allow(""),
      expire_in: Joi.string().allow(""),
    });
  }

  /** @returns {Conditions} */
  static Conditions() {
    return Joi.object({
      user_attribute_definition_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
      key: Joi.string().allow(""),
    });
  }

  /** @returns {UserResponseErrorSchema} */
  static UserResponseErrorSchema() {
    return Joi.object({
      count: Joi.number(),
      file_url: Joi.string().allow(""),
    });
  }

  /** @returns {UserGroupResponseSchema} */
  static UserGroupResponseSchema() {
    return Joi.object({
      conditions: Joi.array().items(UserPlatformModel.Conditions()),
      error: UserPlatformModel.UserResponseErrorSchema(),
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      file_url: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      is_active: Joi.boolean(),
      type: Joi.string().allow(""),
      uid: Joi.number(),
      application_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {UserGroupListResponseSchema} */
  static UserGroupListResponseSchema() {
    return Joi.object({
      items: Joi.array().items(UserPlatformModel.UserGroupResponseSchema()),
      page: UserPlatformModel.PaginationSchema(),
    });
  }

  /** @returns {ConditionsSchema} */
  static ConditionsSchema() {
    return Joi.object({
      user_attribute_definition_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {CreateUserGroup} */
  static CreateUserGroup() {
    return Joi.object({
      conditions: Joi.array().items(UserPlatformModel.ConditionsSchema()),
      type: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      description: Joi.string().allow("").required(),
      file_url: Joi.string().allow(""),
    });
  }

  /** @returns {CreateUserRequestSchema} */
  static CreateUserRequestSchema() {
    return Joi.object({
      phone_number: Joi.string().allow("").required(),
      email: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      username: Joi.string().allow("").required(),
      meta: Joi.any(),
      external_id: Joi.string().allow(""),
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
      domain: Joi.string().allow(""),
      max_age: Joi.number(),
      secure: Joi.boolean(),
      http_only: Joi.boolean(),
      cookie: Joi.any(),
    });
  }

  /** @returns {PlatformSchema} */
  static PlatformSchema() {
    return Joi.object({
      display: Joi.string().allow(""),
      look_and_feel: UserPlatformModel.LookAndFeel(),
      updated_at: Joi.string().allow(""),
      active: Joi.boolean(),
      forgot_password: Joi.boolean(),
      login: UserPlatformModel.Login(),
      skip_captcha: Joi.boolean(),
      name: Joi.string().allow(""),
      meta: UserPlatformModel.MetaSchema(),
      _id: Joi.string().allow(""),
      social: UserPlatformModel.Social(),
      required_fields: UserPlatformModel.RequiredFields(),
      register_required_fields: UserPlatformModel.RegisterRequiredFields(),
      skip_login: Joi.boolean(),
      flash_card: UserPlatformModel.FlashCard(),
      subtext: Joi.string().allow(""),
      social_tokens: UserPlatformModel.SocialTokens(),
      created_at: Joi.string().allow(""),
      register: Joi.boolean(),
      mobile_image: Joi.string().allow(""),
      desktop_image: Joi.string().allow(""),
      delete_account_day: Joi.number(),
      delete_account_reasons: Joi.array().items(
        UserPlatformModel.DeleteAccountReasons()
      ),
      delete_account_consent: Joi.any(),
      session_config: Joi.any(),
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
      email: UserPlatformModel.PlatformEmail(),
      mobile: UserPlatformModel.PlatformMobile(),
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
      facebook: UserPlatformModel.Facebook(),
      account_kit: UserPlatformModel.Accountkit(),
      google: UserPlatformModel.Google(),
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

  /** @returns {UpdateUserGroupSchema} */
  static UpdateUserGroupSchema() {
    return Joi.object({
      conditions: Joi.array().items(UserPlatformModel.ConditionsSchema()),
      type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      file_url: Joi.string().allow(""),
    });
  }

  /** @returns {PartialUserGroupUpdateSchema} */
  static PartialUserGroupUpdateSchema() {
    return Joi.object({
      type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      file_url: Joi.string().allow(""),
      user_data: Joi.array().items(UserPlatformModel.UserGroupUpdateData()),
    });
  }

  /** @returns {UserGroupUpdateData} */
  static UserGroupUpdateData() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      phone_number: Joi.string().allow(""),
      email: Joi.string().allow(""),
      action: Joi.string().allow("").required(),
    });
  }

  /** @returns {UpdateUserRequestSchema} */
  static UpdateUserRequestSchema() {
    return Joi.object({
      first_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      external_id: Joi.string().allow(""),
      meta: Joi.any(),
      phone_numbers: Joi.array().items(UserPlatformModel.UserPhoneNumbers()),
      emails: Joi.array().items(UserPlatformModel.UserEmails()),
    });
  }

  /** @returns {UserEmails} */
  static UserEmails() {
    return Joi.object({
      active: Joi.boolean(),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
      email: Joi.string().allow(""),
    });
  }

  /** @returns {UserPhoneNumbers} */
  static UserPhoneNumbers() {
    return Joi.object({
      active: Joi.boolean(),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
      phone: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
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
      phone_numbers: Joi.array().items(UserPlatformModel.PhoneNumber()),
      emails: Joi.array().items(UserPlatformModel.Email()),
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
    });
  }

  /** @returns {PhoneNumber} */
  static PhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
      phone: Joi.string().allow(""),
      country_code: Joi.number(),
    });
  }

  /** @returns {Email} */
  static Email() {
    return Joi.object({
      primary: Joi.boolean(),
      verified: Joi.boolean(),
      email: Joi.string().allow(""),
      active: Joi.boolean(),
    });
  }
}
module.exports = UserPlatformModel;
