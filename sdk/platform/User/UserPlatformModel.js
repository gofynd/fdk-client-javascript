const Joi = require("joi");

/**
 * @typedef SuccessMessage
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
 * @property {string} [icon] - Optional icon representation for this attribute.
 *   Defaults to an empty string.
 * @property {string[]} [ordering_channels] - Ordering Channels where this
 *   attribute should be visible.
 * @property {AttributeMaskingProperties} [masking]
 * @property {AttributeRegistrationProperties} [registration]
 * @property {boolean} [is_multi_value] - Indicates if this attribute can accept
 *   multiple values.
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
 * @typedef UserAttributeDefinitionDetails
 * @property {string} [_id] - The unique identifier for the attribute definition.
 * @property {string} [name] - The attribute name.
 * @property {string} [slug] - The attribute key.
 * @property {string} [description] - The description of the attribute.
 * @property {string} [application_id] - The application ID.
 * @property {string} [type] - The attribute type.
 * @property {string} [icon] - Optional icon representation for this attribute.
 *   Defaults to an empty string.
 * @property {string[]} [ordering_channels] - Ordering Channels where this
 *   attribute should be visible.
 * @property {AttributeMaskingProperties} [masking]
 * @property {AttributeRegistrationProperties} [registration]
 * @property {boolean} [is_multi_value] - Indicates if this attribute can accept
 *   multiple values.
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
 * @typedef AttributeMaskingProperties
 * @property {boolean} [enabled] - Indicates if PII masking is editable for this
 *   attribute.
 * @property {string} [type] - Indicates the PII masking options available
 *   default or others
 */

/**
 * @typedef AttributeRegistrationProperties
 * @property {boolean} [enabled] - Indicates if an attribute is editable when
 *   customer registers for a storefront.
 * @property {string} [type] - Indicates if this attribute is mandatory or
 *   optional when customer registers for a storefront.
 */

/**
 * @typedef UserAttributeDefinitionValidation
 * @property {string} [type] - The type of validation.
 * @property {Object} [value] - The validation value.
 */

/**
 * @typedef BulkUserAttribute
 * @property {boolean} [success] - This describes the status of the API response
 * @property {UserAttribute[]} [attributes]
 */

/**
 * @typedef UserAttribute
 * @property {string} [_id] - The unique identifier for the attribute definition.
 * @property {string} [name] - The name of user attribute definition.
 * @property {string} [user_id] - The unique identifier for the user.
 * @property {string} [application_id] - The application ID.
 * @property {string} [user_attribute_definition_id] - The unique id of the
 *   attribute definition.
 * @property {string} [created_at] - The time when attribute value is created
 *   for a user in ISO format.
 * @property {string} [updated_at] - The time when attribute value is updated
 *   for a user in ISO format.
 * @property {string} [type] - The attribute type.
 * @property {boolean} [customer_overridden] - Whether the attribute is customer-editable.
 * @property {Object} [attribute]
 * @property {string} [updated_by]
 */

/**
 * @typedef CreateBulkUserAttribute
 * @property {BulkUserAttributeRequestBody[]} attributes - This is an array of
 *   objects containing id of attribute definitions and the respective values to
 *   created or updated
 */

/**
 * @typedef BulkUserAttributeRequestBody
 * @property {string} definition_id - Theis is an unique id of user attribute definition
 * @property {Object} value - Attribute values to be create or updated. Can be a
 *   single value or an array of values. Types supported: string, number, array
 *   of string, or array of number.
 */

/**
 * @typedef CreateUserAttribute
 * @property {boolean} [customer_overridden]
 * @property {Object} [attribute]
 */

/**
 * @typedef CreateUserAttributeDefinition
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {string} [type] - The attribute type.
 * @property {string} [icon] - Optional icon representation for this attribute.
 *   Defaults to an empty string.
 * @property {string[]} [ordering_channels] - Ordering Channels where this
 *   attribute should be visible.
 * @property {AttributeMaskingProperties} [masking]
 * @property {AttributeRegistrationProperties} [registration]
 * @property {boolean} [is_multi_value] - Indicates if this attribute can accept
 *   multiple values.
 * @property {boolean} [customer_editable]
 * @property {boolean} [encrypted]
 * @property {boolean} [pinned]
 * @property {number} [pin_order]
 * @property {string} [default_value]
 * @property {Object[]} [validations]
 */

/**
 * @typedef CreateStoreFrontUsersPayload
 * @property {string} absolute_url - A valid URL linking to the file containing
 *   user data to be imported.
 * @property {string} file_format - The format of the file containing the user's
 *   data. Supported formats are CSV and XLSX.
 * @property {string} relative_url - A valid relative path to the file within
 *   the storage system. This path should not include the base URL or domain and
 *   must conform to the storage structure
 */

/**
 * @typedef BulkUserExportSchema
 * @property {string} file_format - The format of the file in which you want to
 *   export data. Supported formats are CSV and XLSX.
 */

/**
 * @typedef BulkActionModel
 * @property {string} _id - The Job ID associated with an Import or Export Job
 * @property {string} file_name - The name of the file
 * @property {string} file_format - The format of the uploaded file (e.g., CSV, XLSX).
 * @property {string} action_type - The type of bulk action being performed
 *   (e.g., import, export).
 * @property {CreatedBySchema} created_by
 * @property {BulkActionCountSchema} [count]
 * @property {string} [status] - The current status of the bulk action.
 * @property {BulkActionLinkSchema} [links]
 * @property {string} application_id - The unique identifier of the associated
 *   application.
 * @property {string} company_id - The unique identifier of the company
 *   associated with the bulk action.
 * @property {string} [created_at] - The timestamp when the bulk action was created.
 * @property {string} [updated_at] - The timestamp when the bulk action was last updated.
 */

/**
 * @typedef CreatedBySchema
 * @property {string} name - The name of the user who initiated the operation.
 * @property {string} user_id - A unique identifier for the user who initiated
 *   the operation.
 */

/**
 * @typedef BulkActionLinkSchema
 * @property {FileLinks} [file]
 * @property {FileLinks} [error]
 */

/**
 * @typedef FileLinks
 * @property {string} [absolute_url] - The full URL of the file, including the
 *   domain and protocol, allowing direct access to the file from any location.
 * @property {string} [relative_url] - The relative path to the file within the
 *   storage system, excluding the base URL or domain. This path is specific to
 *   the storage structure.
 */

/**
 * @typedef BulkActionCountSchema
 * @property {number} [total] - The total number of items to be processed.
 * @property {number} [success] - The number of successfully processed items.
 * @property {number} [error] - The number of items that failed to process.
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
 * @property {UserSearchSchema[]} [users]
 */

/**
 * @typedef CustomerListResponseSchema
 * @property {UserSearchSchema[]} [items]
 * @property {PaginationSchema} [page]
 */

/**
 * @typedef BulkActionPaginationSchema
 * @property {BulkActionModel[]} [items] - Array of Bulk Action Documents
 * @property {PaginationSchema} [page]
 */

/**
 * @typedef PaginationSchema
 * @property {number} [size] - The number of items per page.
 * @property {number} [total] - The total number of items across all pages.
 * @property {number} [item_total] - The total number of items across all pages.
 * @property {boolean} [has_next] - Indicates whether there are more pages to retrieve.
 * @property {string} [type] - The type of pagination used (eg Number).
 * @property {number} [current] - The current page number.
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
 * @typedef SessionListResponseInfo
 * @property {string} [session_id]
 * @property {string} [user_agent]
 * @property {string} [ip]
 * @property {string} [domain]
 * @property {string} [expire_in]
 * @property {string} [location]
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
 * @typedef DeleteBulkUserAttribute
 * @property {string[]} [definition_ids] - List of user attribute definition IDs
 *   for which the corresponding values should be deleted.
 */

/**
 * @typedef UserAttributeFilter
 * @property {UserAttributeFilterQuery} [query]
 */

/**
 * @typedef UserAttributeFilterQuery
 * @property {string} type - Logical condition type to apply between multiple
 *   attribute filters.
 * @property {number} limit - Number of results to return per page.
 * @property {number} page - Page number to fetch.
 * @property {string} [email] - Filter users by their exact email address.
 * @property {string} [phone] - Filter users by their exact phone number.
 * @property {string[]} [definition_ids] - List of user attribute definition IDs
 *   to fetch attributes values available for each user.
 * @property {UserAttributeFilterRequestConditions[]} conditions - List of
 *   filtering conditions to apply on user attributes.
 */

/**
 * @typedef UserAttributeFilterRequestConditions
 * @property {string} definition_id - ID of the user attribute definition to filter on.
 * @property {string} type - Filter operation to apply on the attribute value.
 *   Supported operations include:
 *
 *   - `eq`: Equal to - `ne`: Not equal to - `gt`: Greater than (or is after for
 *       dates) - `lt`: Less than (or is before for dates) - `gte`: Greater than
 *       or equal to - `lte`: Less than or equal to - `cnt`: Contains (for
 *       strings) - `nct`: Does not contain (for strings) - `is`: Matches
 *       exactly (for strings) - `nis`: Does not match exactly (for strings) -
 *       `sw`: Starts with (for strings) - `ew`: Ends with (for strings) -
 *       `btw`: Between two values (for date and datetime types) - `in`: Value
 *       exists in given list - `nin`: Value does not exist in given list
 *
 * @property {Object} value - Values to be used in filtering the attribute. Can
 *   be a single value or an array of values. Types supported: string, number,
 *   array of string, or array of number.
 */

/**
 * @typedef UserAttributeFiltered
 * @property {UserAttributeFilteredList[]} [items] - List of user objects that
 *   match the filter criteria.
 * @property {PaginationSchema} [page]
 */

/**
 * @typedef UserAttributeFilteredList
 * @property {string} [_id] - Unique ID of the user.
 * @property {string} [username] - Generated username for the user.
 * @property {UserPhoneNumbers[]} [phone_numbers] - List of phone numbers
 *   associated with the user.
 * @property {UserEmails[]} [emails] - List of emails associated with the user.
 * @property {string} [gender] - Gender of the user.
 * @property {boolean} [active] - Whether the user account is active.
 * @property {boolean} [archive] - Whether the user account is archived.
 * @property {string} [status] - Status of the user account.
 * @property {UserAttribute[]} [attributes]
 * @property {string} [first_name] - First name of the user.
 * @property {string} [last_name] - Last name of the user.
 * @property {string} [account_type] - Type of user account.
 * @property {string} [profile_pic_url] - URL to user's profile picture.
 * @property {boolean} [has_old_password_hash] - Whether user has legacy password format.
 * @property {string} [user_id] - Unique user ID.
 * @property {string} [application_id] - Application ID associated with the user.
 * @property {boolean} [is_encrypted] - Whether the user data is encrypted.
 * @property {string} [created_at] - Timestamp of user creation.
 * @property {string} [updated_at] - Timestamp of last update.
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
 * @property {string} [phone_number]
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [username]
 * @property {Object} [meta]
 * @property {string} [external_id]
 * @property {string} [rr_id]
 */

/**
 * @typedef CreateUserResponseSchema
 * @property {UserSchema} [user]
 */

/**
 * @typedef CreateUserSessionRequestSchema
 * @property {string} [domain]
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
 * @typedef GetUserTimeline
 * @property {string} [delete_on] - Denotes the date on which the user will be deleted
 * @property {UserTimeline[]} [timeline] - List of user timeline events
 */

/**
 * @typedef UserTimeline
 * @property {string} [date] - Denotes the date at which this event occured
 * @property {string} [title] - Title of the timeline event
 * @property {string} [type] - Type of the event, indicating its status
 * @property {boolean} [visible] - Indicates whether the event should be shown on the UI
 * @property {string} [sub_title] - Additional information about the event
 */

/**
 * @typedef Facebook
 * @property {string} [app_id]
 * @property {string} [app_secret]
 */

/**
 * @typedef Accountkit
 * @property {string} [app_id]
 * @property {string} [app_secret]
 */

/**
 * @typedef Google
 * @property {string} [app_id]
 * @property {string} [app_secret]
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
 * @property {string} [user_id] - Must be valid ID of existing user
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
 * @property {string} [rr_id]
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
 * @property {string} [rr_id]
 * @property {UserConsent} [consent]
 */

/**
 * @typedef UserSearchSchema
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
 * @property {boolean} [archive]
 * @property {string} [status]
 * @property {string} [deleted_on]
 * @property {UserConsent} [consent]
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

/**
 * @typedef UserConsent
 * @property {PrivacyPolicyConsentSchema} [privacy_policy]
 */

/**
 * @typedef PrivacyPolicyConsentSchema
 * @property {boolean} [value] - Whether the user has consented to the privacy policy
 * @property {string} [updated_at] - When the consent was last updated
 */

class UserPlatformModel {
  /** @returns {SuccessMessage} */
  static SuccessMessage() {
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
      icon: Joi.string().allow(""),
      ordering_channels: Joi.array().items(Joi.string().allow("")),
      masking: UserPlatformModel.AttributeMaskingProperties(),
      registration: UserPlatformModel.AttributeRegistrationProperties(),
      is_multi_value: Joi.boolean(),
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

  /** @returns {UserAttributeDefinitionDetails} */
  static UserAttributeDefinitionDetails() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      description: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      ordering_channels: Joi.array().items(Joi.string().allow("")),
      masking: UserPlatformModel.AttributeMaskingProperties(),
      registration: UserPlatformModel.AttributeRegistrationProperties(),
      is_multi_value: Joi.boolean(),
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

  /** @returns {AttributeMaskingProperties} */
  static AttributeMaskingProperties() {
    return Joi.object({
      enabled: Joi.boolean(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {AttributeRegistrationProperties} */
  static AttributeRegistrationProperties() {
    return Joi.object({
      enabled: Joi.boolean(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {UserAttributeDefinitionValidation} */
  static UserAttributeDefinitionValidation() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.any(),
    });
  }

  /** @returns {BulkUserAttribute} */
  static BulkUserAttribute() {
    return Joi.object({
      success: Joi.boolean(),
      attributes: Joi.array().items(UserPlatformModel.UserAttribute()),
    });
  }

  /** @returns {UserAttribute} */
  static UserAttribute() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      user_attribute_definition_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      type: Joi.string().allow(""),
      customer_overridden: Joi.boolean(),
      attribute: Joi.object().pattern(/\S/, Joi.any()),
      updated_by: Joi.string().allow(""),
    });
  }

  /** @returns {CreateBulkUserAttribute} */
  static CreateBulkUserAttribute() {
    return Joi.object({
      attributes: Joi.array()
        .items(UserPlatformModel.BulkUserAttributeRequestBody())
        .required(),
    });
  }

  /** @returns {BulkUserAttributeRequestBody} */
  static BulkUserAttributeRequestBody() {
    return Joi.object({
      definition_id: Joi.string().allow("").required(),
      value: Joi.any().required(),
    });
  }

  /** @returns {CreateUserAttribute} */
  static CreateUserAttribute() {
    return Joi.object({
      customer_overridden: Joi.boolean(),
      attribute: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {CreateUserAttributeDefinition} */
  static CreateUserAttributeDefinition() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      description: Joi.string().allow(""),
      type: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      ordering_channels: Joi.array().items(Joi.string().allow("")),
      masking: UserPlatformModel.AttributeMaskingProperties(),
      registration: UserPlatformModel.AttributeRegistrationProperties(),
      is_multi_value: Joi.boolean(),
      customer_editable: Joi.boolean(),
      encrypted: Joi.boolean(),
      pinned: Joi.boolean(),
      pin_order: Joi.number(),
      default_value: Joi.string().allow(""),
      validations: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {CreateStoreFrontUsersPayload} */
  static CreateStoreFrontUsersPayload() {
    return Joi.object({
      absolute_url: Joi.string().allow("").required(),
      file_format: Joi.string().allow("").required(),
      relative_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {BulkUserExportSchema} */
  static BulkUserExportSchema() {
    return Joi.object({
      file_format: Joi.string().allow("").required(),
    });
  }

  /** @returns {BulkActionModel} */
  static BulkActionModel() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      file_name: Joi.string().allow("").required(),
      file_format: Joi.string().allow("").required(),
      action_type: Joi.string().allow("").required(),
      created_by: UserPlatformModel.CreatedBySchema().required(),
      count: UserPlatformModel.BulkActionCountSchema(),
      status: Joi.string().allow(""),
      links: UserPlatformModel.BulkActionLinkSchema(),
      application_id: Joi.string().allow("").required(),
      company_id: Joi.string().allow("").required(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {CreatedBySchema} */
  static CreatedBySchema() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      user_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {BulkActionLinkSchema} */
  static BulkActionLinkSchema() {
    return Joi.object({
      file: UserPlatformModel.FileLinks(),
      error: UserPlatformModel.FileLinks(),
    });
  }

  /** @returns {FileLinks} */
  static FileLinks() {
    return Joi.object({
      absolute_url: Joi.string().allow(""),
      relative_url: Joi.string().allow(""),
    });
  }

  /** @returns {BulkActionCountSchema} */
  static BulkActionCountSchema() {
    return Joi.object({
      total: Joi.number(),
      success: Joi.number(),
      error: Joi.number(),
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
      users: Joi.array().items(UserPlatformModel.UserSearchSchema()),
    });
  }

  /** @returns {CustomerListResponseSchema} */
  static CustomerListResponseSchema() {
    return Joi.object({
      items: Joi.array().items(UserPlatformModel.UserSearchSchema()),
      page: UserPlatformModel.PaginationSchema(),
    });
  }

  /** @returns {BulkActionPaginationSchema} */
  static BulkActionPaginationSchema() {
    return Joi.object({
      items: Joi.array().items(UserPlatformModel.BulkActionModel()),
      page: UserPlatformModel.PaginationSchema(),
    });
  }

  /** @returns {PaginationSchema} */
  static PaginationSchema() {
    return Joi.object({
      size: Joi.number(),
      total: Joi.number(),
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

  /** @returns {APIError} */
  static APIError() {
    return Joi.object({
      code: Joi.string().allow(""),
      message: Joi.string().allow(""),
      info: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      error: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      authenticated: Joi.boolean(),
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
      location: Joi.string().allow(""),
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

  /** @returns {DeleteBulkUserAttribute} */
  static DeleteBulkUserAttribute() {
    return Joi.object({
      definition_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {UserAttributeFilter} */
  static UserAttributeFilter() {
    return Joi.object({
      query: UserPlatformModel.UserAttributeFilterQuery(),
    });
  }

  /** @returns {UserAttributeFilterQuery} */
  static UserAttributeFilterQuery() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      limit: Joi.number().required(),
      page: Joi.number().required(),
      email: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      definition_ids: Joi.array().items(Joi.string().allow("")),
      conditions: Joi.array()
        .items(UserPlatformModel.UserAttributeFilterRequestConditions())
        .required(),
    });
  }

  /** @returns {UserAttributeFilterRequestConditions} */
  static UserAttributeFilterRequestConditions() {
    return Joi.object({
      definition_id: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      value: Joi.any().required(),
    });
  }

  /** @returns {UserAttributeFiltered} */
  static UserAttributeFiltered() {
    return Joi.object({
      items: Joi.array().items(UserPlatformModel.UserAttributeFilteredList()),
      page: UserPlatformModel.PaginationSchema(),
    });
  }

  /** @returns {UserAttributeFilteredList} */
  static UserAttributeFilteredList() {
    return Joi.object({
      _id: Joi.string().allow(""),
      username: Joi.string().allow(""),
      phone_numbers: Joi.array().items(UserPlatformModel.UserPhoneNumbers()),
      emails: Joi.array().items(UserPlatformModel.UserEmails()),
      gender: Joi.string().allow(""),
      active: Joi.boolean(),
      archive: Joi.boolean(),
      status: Joi.string().allow(""),
      attributes: Joi.array().items(UserPlatformModel.UserAttribute()),
      first_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      account_type: Joi.string().allow(""),
      profile_pic_url: Joi.string().allow(""),
      has_old_password_hash: Joi.boolean(),
      user_id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      is_encrypted: Joi.boolean(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
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
      phone_number: Joi.string().allow(""),
      email: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      username: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      external_id: Joi.string().allow(""),
      rr_id: Joi.string().allow(""),
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
      cookie: Joi.object().pattern(/\S/, Joi.any()),
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
      delete_account_consent: UserPlatformModel.DeleteAccountConsent(),
      session_config: UserPlatformModel.SessionExpiry(),
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

  /** @returns {GetUserTimeline} */
  static GetUserTimeline() {
    return Joi.object({
      delete_on: Joi.string().allow(""),
      timeline: Joi.array().items(UserPlatformModel.UserTimeline()),
    });
  }

  /** @returns {UserTimeline} */
  static UserTimeline() {
    return Joi.object({
      date: Joi.string().allow(""),
      title: Joi.string().allow(""),
      type: Joi.string().allow(""),
      visible: Joi.boolean(),
      sub_title: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Facebook} */
  static Facebook() {
    return Joi.object({
      app_id: Joi.string().allow(""),
      app_secret: Joi.string().allow(""),
    });
  }

  /** @returns {Accountkit} */
  static Accountkit() {
    return Joi.object({
      app_id: Joi.string().allow(""),
      app_secret: Joi.string().allow(""),
    });
  }

  /** @returns {Google} */
  static Google() {
    return Joi.object({
      app_id: Joi.string().allow(""),
      app_secret: Joi.string().allow(""),
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
      rr_id: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
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
      meta: Joi.object().pattern(/\S/, Joi.any()),
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
      rr_id: Joi.string().allow(""),
      consent: UserPlatformModel.UserConsent(),
    });
  }

  /** @returns {UserSearchSchema} */
  static UserSearchSchema() {
    return Joi.object({
      application_id: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
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
      rr_id: Joi.string().allow(""),
      archive: Joi.boolean(),
      status: Joi.string().allow(""),
      deleted_on: Joi.string().allow(""),
      consent: UserPlatformModel.UserConsent(),
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

  /** @returns {UserConsent} */
  static UserConsent() {
    return Joi.object({
      privacy_policy: UserPlatformModel.PrivacyPolicyConsentSchema(),
    });
  }

  /** @returns {PrivacyPolicyConsentSchema} */
  static PrivacyPolicyConsentSchema() {
    return Joi.object({
      value: Joi.boolean(),
      updated_at: Joi.string().allow(""),
    });
  }
}
module.exports = UserPlatformModel;
