export = UserPlatformModel;
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
 * @property {UserSearchSchema[]} [users]
 */
/**
 * @typedef CustomerListResponseSchema
 * @property {UserSearchSchema[]} [items]
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
 * @property {string} [rr_id]
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
declare class UserPlatformModel {
}
declare namespace UserPlatformModel {
    export { SuccessMessageResponse, UserAttributeDefinition, UserAttributeDefinitionResponse, UserAttributeDefinitionValidation, UserAttributeResponse, CreateUserAttributeRequest, CreateUserAttributeDefinition, BlockUserRequestSchema, ArchiveUserRequestSchema, UnDeleteUserRequestSchema, BlockUserSuccess, ArchiveUserSuccess, UnDeleteUserSuccess, UserSearchResponseSchema, CustomerListResponseSchema, PaginationSchema, SessionListResponseSchema, SessionDeleteResponseSchema, SessionsDeleteResponseSchema, APIError, SessionListResponseInfo, Conditions, UserResponseErrorSchema, UserGroupResponseSchema, UserGroupListResponseSchema, ConditionsSchema, CreateUserGroup, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserGroupSchema, PartialUserGroupUpdateSchema, UserGroupUpdateData, UpdateUserRequestSchema, UserEmails, UserPhoneNumbers, UserSchema, UserSearchSchema, PhoneNumber, Email };
}
/** @returns {SuccessMessageResponse} */
declare function SuccessMessageResponse(): SuccessMessageResponse;
type SuccessMessageResponse = {
    success?: string;
};
/** @returns {UserAttributeDefinition} */
declare function UserAttributeDefinition(): UserAttributeDefinition;
type UserAttributeDefinition = {
    /**
     * - The unique identifier for the attribute definition.
     */
    _id?: string;
    /**
     * - The attribute name.
     */
    name?: string;
    /**
     * - The attribute key.
     */
    slug?: string;
    /**
     * - The description of the attribute.
     */
    description?: string;
    /**
     * - The application ID.
     */
    application_id?: string;
    /**
     * - The attribute type.
     */
    type?: string;
    /**
     * - Whether the attribute supports multiple values.
     */
    multi_value?: boolean;
    /**
     * - Whether the attribute is customer-editable.
     */
    customer_editable?: boolean;
    /**
     * - Whether the attribute is encrypted.
     */
    encrypted?: boolean;
    /**
     * - Whether the attribute is pinned.
     */
    pinned?: boolean;
    /**
     * - The order in which the attribute is pinned.
     */
    pin_order?: number;
    validations?: any[];
    /**
     * - Whether the attribute is locked.
     */
    is_locked?: boolean;
    /**
     * - The creation date of the attribute.
     */
    created_at?: string;
    /**
     * - The modification date of the attribute.
     */
    modified_at?: string;
    /**
     * - The version number of the attribute.
     */
    __v?: number;
};
/** @returns {UserAttributeDefinitionResponse} */
declare function UserAttributeDefinitionResponse(): UserAttributeDefinitionResponse;
type UserAttributeDefinitionResponse = {
    /**
     * - The unique identifier for the attribute definition.
     */
    _id?: string;
    /**
     * - The attribute name.
     */
    name?: string;
    /**
     * - The attribute key.
     */
    slug?: string;
    /**
     * - The description of the attribute.
     */
    description?: string;
    /**
     * - The application ID.
     */
    application_id?: string;
    /**
     * - The attribute type.
     */
    type?: string;
    /**
     * - Whether the attribute supports multiple values.
     */
    multi_value?: boolean;
    /**
     * - Whether the attribute is customer-editable.
     */
    customer_editable?: boolean;
    /**
     * - Whether the attribute is encrypted.
     */
    encrypted?: boolean;
    /**
     * - Whether the attribute is pinned.
     */
    pinned?: boolean;
    /**
     * - The order in which the attribute is pinned.
     */
    pin_order?: number;
    validations?: UserAttributeDefinitionValidation[];
    /**
     * - Whether the attribute is locked.
     */
    is_locked?: boolean;
    /**
     * - The user who created the attribute.
     */
    created_by?: string;
    /**
     * - The user who last updated the attribute.
     */
    updated_by?: string;
    /**
     * - The creation date of the attribute definition.
     */
    created_at?: string;
    /**
     * - The last modification date of the
     * attribute definition.
     */
    modified_at?: string;
};
/** @returns {UserAttributeDefinitionValidation} */
declare function UserAttributeDefinitionValidation(): UserAttributeDefinitionValidation;
type UserAttributeDefinitionValidation = {
    /**
     * - The type of validation.
     */
    type?: string;
    /**
     * - The validation value.
     */
    value?: any;
};
/** @returns {UserAttributeResponse} */
declare function UserAttributeResponse(): UserAttributeResponse;
type UserAttributeResponse = {
    /**
     * - The unique identifier for the attribute definition.
     */
    _id?: string;
    /**
     * - The name of user attribute definition.
     */
    name?: string;
    /**
     * - The unique identifier for the user.
     */
    user_id?: string;
    /**
     * - The application ID.
     */
    application_id?: string;
    /**
     * - The attribute type.
     */
    type?: string;
    /**
     * - Whether the attribute is customer-editable.
     */
    customer_overriden?: boolean;
    attribute?: any;
    updated_by?: string;
};
/** @returns {CreateUserAttributeRequest} */
declare function CreateUserAttributeRequest(): CreateUserAttributeRequest;
type CreateUserAttributeRequest = {
    customer_overriden?: boolean;
    attribute?: any;
};
/** @returns {CreateUserAttributeDefinition} */
declare function CreateUserAttributeDefinition(): CreateUserAttributeDefinition;
type CreateUserAttributeDefinition = {
    name?: string;
    slug?: string;
    description?: string;
    type?: string;
    multi_value?: boolean;
    customer_editable?: boolean;
    encrypted?: boolean;
    pinned?: boolean;
    pin_order?: number;
    default_value?: string;
    validations?: any[];
};
/** @returns {BlockUserRequestSchema} */
declare function BlockUserRequestSchema(): BlockUserRequestSchema;
type BlockUserRequestSchema = {
    status?: boolean;
    user_id?: string[];
    reason?: string;
};
/** @returns {ArchiveUserRequestSchema} */
declare function ArchiveUserRequestSchema(): ArchiveUserRequestSchema;
type ArchiveUserRequestSchema = {
    user_id?: string;
};
/** @returns {UnDeleteUserRequestSchema} */
declare function UnDeleteUserRequestSchema(): UnDeleteUserRequestSchema;
type UnDeleteUserRequestSchema = {
    user_id?: string;
    reason?: string;
    reason_id?: string;
};
/** @returns {BlockUserSuccess} */
declare function BlockUserSuccess(): BlockUserSuccess;
type BlockUserSuccess = {
    success?: boolean;
};
/** @returns {ArchiveUserSuccess} */
declare function ArchiveUserSuccess(): ArchiveUserSuccess;
type ArchiveUserSuccess = {
    success?: boolean;
};
/** @returns {UnDeleteUserSuccess} */
declare function UnDeleteUserSuccess(): UnDeleteUserSuccess;
type UnDeleteUserSuccess = {
    success?: boolean;
};
/** @returns {UserSearchResponseSchema} */
declare function UserSearchResponseSchema(): UserSearchResponseSchema;
type UserSearchResponseSchema = {
    users?: UserSearchSchema[];
};
/** @returns {CustomerListResponseSchema} */
declare function CustomerListResponseSchema(): CustomerListResponseSchema;
type CustomerListResponseSchema = {
    items?: UserSearchSchema[];
    page?: PaginationSchema;
};
/** @returns {PaginationSchema} */
declare function PaginationSchema(): PaginationSchema;
type PaginationSchema = {
    size?: number;
    item_total?: number;
    has_next?: boolean;
    type?: string;
    current?: number;
};
/** @returns {SessionListResponseSchema} */
declare function SessionListResponseSchema(): SessionListResponseSchema;
type SessionListResponseSchema = {
    items?: SessionListResponseInfo[];
};
/** @returns {SessionDeleteResponseSchema} */
declare function SessionDeleteResponseSchema(): SessionDeleteResponseSchema;
type SessionDeleteResponseSchema = {
    user_id?: string;
    session_id?: string;
};
/** @returns {SessionsDeleteResponseSchema} */
declare function SessionsDeleteResponseSchema(): SessionsDeleteResponseSchema;
type SessionsDeleteResponseSchema = {
    user_id?: string;
    session_ids?: string[];
};
/** @returns {APIError} */
declare function APIError(): APIError;
type APIError = {
    code?: string;
    message?: string;
    /**
     * - Error code description link
     */
    info?: string;
    request_id?: string;
    error?: string;
    meta?: any;
    authenticated?: boolean;
};
/** @returns {SessionListResponseInfo} */
declare function SessionListResponseInfo(): SessionListResponseInfo;
type SessionListResponseInfo = {
    session_id?: string;
    user_agent?: string;
    ip?: string;
    domain?: string;
    expire_in?: string;
    location?: string;
};
/** @returns {Conditions} */
declare function Conditions(): Conditions;
type Conditions = {
    user_attribute_definition_id?: string;
    type?: string;
    value?: string;
    key?: string;
};
/** @returns {UserResponseErrorSchema} */
declare function UserResponseErrorSchema(): UserResponseErrorSchema;
type UserResponseErrorSchema = {
    count?: number;
    file_url?: string;
};
/** @returns {UserGroupResponseSchema} */
declare function UserGroupResponseSchema(): UserGroupResponseSchema;
type UserGroupResponseSchema = {
    conditions?: Conditions[];
    error?: UserResponseErrorSchema;
    name?: string;
    description?: string;
    file_url?: string;
    _id?: string;
    status?: string;
    is_active?: boolean;
    type?: string;
    uid?: number;
    application_id?: string;
    created_at?: string;
    modified_at?: string;
    __v?: number;
};
/** @returns {UserGroupListResponseSchema} */
declare function UserGroupListResponseSchema(): UserGroupListResponseSchema;
type UserGroupListResponseSchema = {
    items?: UserGroupResponseSchema[];
    page?: PaginationSchema;
};
/** @returns {ConditionsSchema} */
declare function ConditionsSchema(): ConditionsSchema;
type ConditionsSchema = {
    user_attribute_definition_id?: string;
    type?: string;
    value?: string;
};
/** @returns {CreateUserGroup} */
declare function CreateUserGroup(): CreateUserGroup;
type CreateUserGroup = {
    conditions?: ConditionsSchema[];
    type?: string;
    name: string;
    description: string;
    file_url?: string;
};
/** @returns {CreateUserRequestSchema} */
declare function CreateUserRequestSchema(): CreateUserRequestSchema;
type CreateUserRequestSchema = {
    phone_number: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    gender?: string;
    username: string;
    meta?: any;
    external_id?: string;
    rr_id?: string;
};
/** @returns {CreateUserResponseSchema} */
declare function CreateUserResponseSchema(): CreateUserResponseSchema;
type CreateUserResponseSchema = {
    user?: UserSchema;
};
/** @returns {CreateUserSessionRequestSchema} */
declare function CreateUserSessionRequestSchema(): CreateUserSessionRequestSchema;
type CreateUserSessionRequestSchema = {
    domain?: string;
    max_age?: number;
    user_id?: string;
};
/** @returns {CreateUserSessionResponseSchema} */
declare function CreateUserSessionResponseSchema(): CreateUserSessionResponseSchema;
type CreateUserSessionResponseSchema = {
    domain?: string;
    max_age?: number;
    secure?: boolean;
    http_only?: boolean;
    cookie?: any;
};
/** @returns {PlatformSchema} */
declare function PlatformSchema(): PlatformSchema;
type PlatformSchema = {
    display?: string;
    look_and_feel?: LookAndFeel;
    updated_at?: string;
    active?: boolean;
    forgot_password?: boolean;
    login?: Login;
    skip_captcha?: boolean;
    name?: string;
    meta?: MetaSchema;
    _id?: string;
    social?: Social;
    required_fields?: RequiredFields;
    register_required_fields?: RegisterRequiredFields;
    skip_login?: boolean;
    flash_card?: FlashCard;
    subtext?: string;
    social_tokens?: SocialTokens;
    created_at?: string;
    register?: boolean;
    mobile_image?: string;
    desktop_image?: string;
    delete_account_day?: number;
    delete_account_reasons?: DeleteAccountReasons[];
    delete_account_consent?: DeleteAccountConsent;
    session_config?: SessionExpiry;
    __v?: number;
};
/** @returns {LookAndFeel} */
declare function LookAndFeel(): LookAndFeel;
type LookAndFeel = {
    card_position?: string;
    background_color?: string;
};
/** @returns {Login} */
declare function Login(): Login;
type Login = {
    password?: boolean;
    otp?: boolean;
};
/** @returns {MetaSchema} */
declare function MetaSchema(): MetaSchema;
type MetaSchema = {
    fynd_default?: boolean;
};
/** @returns {Social} */
declare function Social(): Social;
type Social = {
    account_kit?: boolean;
    facebook?: boolean;
    google?: boolean;
    apple?: boolean;
};
/** @returns {RequiredFields} */
declare function RequiredFields(): RequiredFields;
type RequiredFields = {
    email?: PlatformEmail;
    mobile?: PlatformMobile;
};
/** @returns {PlatformEmail} */
declare function PlatformEmail(): PlatformEmail;
type PlatformEmail = {
    is_required?: boolean;
    level?: string;
};
/** @returns {PlatformMobile} */
declare function PlatformMobile(): PlatformMobile;
type PlatformMobile = {
    is_required?: boolean;
    level?: string;
};
/** @returns {RegisterRequiredFields} */
declare function RegisterRequiredFields(): RegisterRequiredFields;
type RegisterRequiredFields = {
    email?: RegisterRequiredFieldsEmail;
    mobile?: RegisterRequiredFieldsMobile;
};
/** @returns {RegisterRequiredFieldsEmail} */
declare function RegisterRequiredFieldsEmail(): RegisterRequiredFieldsEmail;
type RegisterRequiredFieldsEmail = {
    is_required?: boolean;
    level?: string;
};
/** @returns {RegisterRequiredFieldsMobile} */
declare function RegisterRequiredFieldsMobile(): RegisterRequiredFieldsMobile;
type RegisterRequiredFieldsMobile = {
    is_required?: boolean;
    level?: string;
};
/** @returns {FlashCard} */
declare function FlashCard(): FlashCard;
type FlashCard = {
    text?: string;
    text_color?: string;
    background_color?: string;
};
/** @returns {SocialTokens} */
declare function SocialTokens(): SocialTokens;
type SocialTokens = {
    facebook?: Facebook;
    account_kit?: Accountkit;
    google?: Google;
};
/** @returns {DeleteAccountReasons} */
declare function DeleteAccountReasons(): DeleteAccountReasons;
type DeleteAccountReasons = {
    reason_text?: string;
    reason_id?: string;
    show_text_area?: boolean;
};
/** @returns {DeleteAccountConsent} */
declare function DeleteAccountConsent(): DeleteAccountConsent;
type DeleteAccountConsent = {
    consent_text?: string;
};
/** @returns {Facebook} */
declare function Facebook(): Facebook;
type Facebook = {
    app_id?: string;
    app_secret?: string;
};
/** @returns {Accountkit} */
declare function Accountkit(): Accountkit;
type Accountkit = {
    app_id?: string;
    app_secret?: string;
};
/** @returns {Google} */
declare function Google(): Google;
type Google = {
    app_id?: string;
    app_secret?: string;
};
/** @returns {SessionExpiry} */
declare function SessionExpiry(): SessionExpiry;
type SessionExpiry = {
    duration?: number;
    type?: string;
    is_rolling?: boolean;
};
/** @returns {UpdateUserGroupSchema} */
declare function UpdateUserGroupSchema(): UpdateUserGroupSchema;
type UpdateUserGroupSchema = {
    conditions?: ConditionsSchema[];
    type?: string;
    name?: string;
    description?: string;
    file_url?: string;
};
/** @returns {PartialUserGroupUpdateSchema} */
declare function PartialUserGroupUpdateSchema(): PartialUserGroupUpdateSchema;
type PartialUserGroupUpdateSchema = {
    /**
     * - Source of update to be used to update individual
     * users. Default value is considered file_url if not passed.
     */
    type?: string;
    name?: string;
    description?: string;
    /**
     * - Required property when passed type file_url.
     * Internet reachable csv file url which will be used to fetch download data.
     * It must have one of columns from `phone_number``, `email`, `user_id` and
     * must have `action` column. `action` column can have `add` or `remove` value.
     */
    file_url?: string;
    /**
     * - Required property when passed
     * type json. Array of user data. Must have `action` field and one of
     * `phone_number`, `email` or `user_id` field in object
     */
    user_data?: UserGroupUpdateData[];
};
/** @returns {UserGroupUpdateData} */
declare function UserGroupUpdateData(): UserGroupUpdateData;
type UserGroupUpdateData = {
    /**
     * - Must be valid mongodb objectid of existing user
     */
    user_id?: string;
    /**
     * - Phone number of registered user
     */
    phone_number?: string;
    /**
     * - Email of registered user
     */
    email?: string;
    action: string;
};
/** @returns {UpdateUserRequestSchema} */
declare function UpdateUserRequestSchema(): UpdateUserRequestSchema;
type UpdateUserRequestSchema = {
    first_name?: string;
    last_name?: string;
    gender?: string;
    external_id?: string;
    rr_id?: string;
    meta?: any;
    phone_numbers?: UserPhoneNumbers[];
    emails?: UserEmails[];
};
/** @returns {UserEmails} */
declare function UserEmails(): UserEmails;
type UserEmails = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    email?: string;
};
/** @returns {UserPhoneNumbers} */
declare function UserPhoneNumbers(): UserPhoneNumbers;
type UserPhoneNumbers = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    phone?: string;
    country_code?: string;
};
/** @returns {UserSchema} */
declare function UserSchema(): UserSchema;
type UserSchema = {
    application_id?: string;
    user_id?: string;
    first_name?: string;
    meta?: any;
    last_name?: string;
    phone_numbers?: PhoneNumber[];
    emails?: Email[];
    gender?: string;
    dob?: string;
    active?: boolean;
    profile_pic_url?: string;
    username?: string;
    account_type?: string;
    _id?: string;
    created_at?: string;
    updated_at?: string;
    external_id?: string;
    rr_id?: string;
};
/** @returns {UserSearchSchema} */
declare function UserSearchSchema(): UserSearchSchema;
type UserSearchSchema = {
    application_id?: string;
    user_id?: string;
    first_name?: string;
    meta?: any;
    last_name?: string;
    phone_numbers?: PhoneNumber[];
    emails?: Email[];
    gender?: string;
    dob?: string;
    active?: boolean;
    profile_pic_url?: string;
    username?: string;
    account_type?: string;
    _id?: string;
    created_at?: string;
    updated_at?: string;
    external_id?: string;
    rr_id?: string;
    archive?: boolean;
    status?: string;
};
/** @returns {PhoneNumber} */
declare function PhoneNumber(): PhoneNumber;
type PhoneNumber = {
    /**
     * - Phone number
     */
    phone?: string;
    /**
     * - Country code
     */
    country_code?: number;
    /**
     * - Is the phone number active
     */
    active?: boolean;
    /**
     * - Is it a primary phone number
     */
    primary?: boolean;
    /**
     * - Is the phone number verified
     */
    verified?: boolean;
};
/** @returns {Email} */
declare function Email(): Email;
type Email = {
    /**
     * - Email address
     */
    email?: string;
    /**
     * - Is the email active
     */
    active?: boolean;
    /**
     * - Is it a primary email
     */
    primary?: boolean;
    /**
     * - Is the email verified
     */
    verified?: boolean;
};
