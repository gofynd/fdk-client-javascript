export = UserPlatformModel;
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
 * @typedef Conditions
 * @property {string} [key]
 * @property {string} [type]
 * @property {string} [user_attribute_definition_id]
 * @property {string} [value]
 */
/**
 * @typedef ConditionsSchema
 * @property {string} [type]
 * @property {string} [user_attribute_definition_id]
 * @property {string} [value]
 */
/**
 * @typedef CreateUserAttributeDefinition
 * @property {boolean} [customer_editable]
 * @property {string} [default_value]
 * @property {string} [description]
 * @property {boolean} [encrypted]
 * @property {boolean} [multi_value]
 * @property {string} [name]
 * @property {number} [pin_order]
 * @property {boolean} [pinned]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {Object[]} [validations]
 */
/**
 * @typedef CreateUserAttributeRequest
 * @property {Object} [attribute]
 * @property {boolean} [customer_overriden]
 */
/**
 * @typedef CreateUserGroup
 * @property {ConditionsSchema[]} [conditions]
 * @property {string} description
 * @property {string} [file_url]
 * @property {string} name
 * @property {string} [type]
 */
/**
 * @typedef CreateUserRequestSchema
 * @property {string} [email]
 * @property {string} [external_id]
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
 * @property {string} [session_id]
 * @property {string} [user_id]
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
 * @typedef SessionsDeleteResponseSchema
 * @property {string[]} [session_ids]
 * @property {string} [user_id]
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
 * @typedef SuccessMessageResponse
 * @property {string} [success]
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
 * @property {ConditionsSchema[]} [conditions]
 * @property {string} [description]
 * @property {string} [file_url]
 * @property {string} [name]
 * @property {string} [type]
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
 * @typedef UserAttributeDefinition
 * @property {number} [__v] - The version number of the attribute.
 * @property {string} [_id] - The unique identifier for the attribute definition.
 * @property {string} [application_id] - The application ID.
 * @property {string} [created_at] - The creation date of the attribute.
 * @property {boolean} [customer_editable] - Whether the attribute is customer-editable.
 * @property {string} [description] - The description of the attribute.
 * @property {boolean} [encrypted] - Whether the attribute is encrypted.
 * @property {boolean} [is_locked] - Whether the attribute is locked.
 * @property {string} [modified_at] - The modification date of the attribute.
 * @property {boolean} [multi_value] - Whether the attribute supports multiple values.
 * @property {string} [name] - The attribute name.
 * @property {number} [pin_order] - The order in which the attribute is pinned.
 * @property {boolean} [pinned] - Whether the attribute is pinned.
 * @property {string} [slug] - The attribute key.
 * @property {string} [type] - The attribute type.
 * @property {Object[]} [validations]
 */
/**
 * @typedef UserAttributeDefinitionResponse
 * @property {string} [_id] - The unique identifier for the attribute definition.
 * @property {string} [application_id] - The application ID.
 * @property {string} [created_at] - The creation date of the attribute definition.
 * @property {string} [created_by] - The user who created the attribute.
 * @property {boolean} [customer_editable] - Whether the attribute is customer-editable.
 * @property {string} [description] - The description of the attribute.
 * @property {boolean} [encrypted] - Whether the attribute is encrypted.
 * @property {boolean} [is_locked] - Whether the attribute is locked.
 * @property {string} [modified_at] - The last modification date of the
 *   attribute definition.
 * @property {boolean} [multi_value] - Whether the attribute supports multiple values.
 * @property {string} [name] - The attribute name.
 * @property {number} [pin_order] - The order in which the attribute is pinned.
 * @property {boolean} [pinned] - Whether the attribute is pinned.
 * @property {string} [slug] - The attribute key.
 * @property {string} [type] - The attribute type.
 * @property {string} [updated_by] - The user who last updated the attribute.
 * @property {UserAttributeDefinitionValidation[]} [validations]
 */
/**
 * @typedef UserAttributeDefinitionValidation
 * @property {string} [type] - The type of validation.
 * @property {Object} [value] - The validation value.
 */
/**
 * @typedef UserAttributeResponse
 * @property {string} [_id] - The unique identifier for the attribute definition.
 * @property {string} [application_id] - The application ID.
 * @property {Object} [attribute]
 * @property {boolean} [customer_overriden] - Whether the attribute is customer-editable.
 * @property {string} [name] - The name of user attribute definition.
 * @property {string} [type] - The attribute type.
 * @property {string} [updated_by]
 * @property {string} [user_id] - The unique identifier for the user.
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
 * @property {Conditions[]} [conditions]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {UserResponseErrorSchema} [error]
 * @property {string} [file_url]
 * @property {boolean} [is_active]
 * @property {string} [modified_at]
 * @property {string} [name]
 * @property {string} [status]
 * @property {string} [type]
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
 * @typedef UserResponseErrorSchema
 * @property {number} [count]
 * @property {string} [file_url]
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
 * @property {string} [external_id]
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
declare class UserPlatformModel {
}
declare namespace UserPlatformModel {
    export { Accountkit, ArchiveUserRequestSchema, ArchiveUserSuccess, AuthenticationApiErrorSchema, BlockUserRequestSchema, BlockUserSuccess, Conditions, ConditionsSchema, CreateUserAttributeDefinition, CreateUserAttributeRequest, CreateUserGroup, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, CustomerListResponseSchema, DeleteAccountConsent, DeleteAccountReasons, Email, Facebook, FlashCard, Google, Login, LookAndFeel, MetaSchema, PaginationSchema, PartialUserGroupUpdateSchema, PhoneNumber, PlatformEmail, PlatformMobile, PlatformSchema, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, RequiredFields, SessionDeleteResponseSchema, SessionExpiry, SessionListResponseInfo, SessionListResponseSchema, SessionsDeleteResponseSchema, Social, SocialTokens, SuccessMessageResponse, UnDeleteUserRequestSchema, UnDeleteUserSuccess, UpdateUserGroupSchema, UpdateUserRequestSchema, UserAttributeDefinition, UserAttributeDefinitionResponse, UserAttributeDefinitionValidation, UserAttributeResponse, UserEmails, UserGroupListResponseSchema, UserGroupResponseSchema, UserGroupUpdateData, UserPhoneNumbers, UserResponseErrorSchema, UserSchema, UserSearchResponseSchema };
}
/** @returns {Accountkit} */
declare function Accountkit(): Accountkit;
type Accountkit = {
    app_id?: string;
};
/** @returns {ArchiveUserRequestSchema} */
declare function ArchiveUserRequestSchema(): ArchiveUserRequestSchema;
type ArchiveUserRequestSchema = {
    user_id?: string;
};
/** @returns {ArchiveUserSuccess} */
declare function ArchiveUserSuccess(): ArchiveUserSuccess;
type ArchiveUserSuccess = {
    success?: boolean;
};
/** @returns {AuthenticationApiErrorSchema} */
declare function AuthenticationApiErrorSchema(): AuthenticationApiErrorSchema;
type AuthenticationApiErrorSchema = {
    message?: string;
};
/** @returns {BlockUserRequestSchema} */
declare function BlockUserRequestSchema(): BlockUserRequestSchema;
type BlockUserRequestSchema = {
    reason?: string;
    status?: boolean;
    user_id?: string[];
};
/** @returns {BlockUserSuccess} */
declare function BlockUserSuccess(): BlockUserSuccess;
type BlockUserSuccess = {
    success?: boolean;
};
/** @returns {Conditions} */
declare function Conditions(): Conditions;
type Conditions = {
    key?: string;
    type?: string;
    user_attribute_definition_id?: string;
    value?: string;
};
/** @returns {ConditionsSchema} */
declare function ConditionsSchema(): ConditionsSchema;
type ConditionsSchema = {
    type?: string;
    user_attribute_definition_id?: string;
    value?: string;
};
/** @returns {CreateUserAttributeDefinition} */
declare function CreateUserAttributeDefinition(): CreateUserAttributeDefinition;
type CreateUserAttributeDefinition = {
    customer_editable?: boolean;
    default_value?: string;
    description?: string;
    encrypted?: boolean;
    multi_value?: boolean;
    name?: string;
    pin_order?: number;
    pinned?: boolean;
    slug?: string;
    type?: string;
    validations?: any[];
};
/** @returns {CreateUserAttributeRequest} */
declare function CreateUserAttributeRequest(): CreateUserAttributeRequest;
type CreateUserAttributeRequest = {
    attribute?: any;
    customer_overriden?: boolean;
};
/** @returns {CreateUserGroup} */
declare function CreateUserGroup(): CreateUserGroup;
type CreateUserGroup = {
    conditions?: ConditionsSchema[];
    description: string;
    file_url?: string;
    name: string;
    type?: string;
};
/** @returns {CreateUserRequestSchema} */
declare function CreateUserRequestSchema(): CreateUserRequestSchema;
type CreateUserRequestSchema = {
    email?: string;
    external_id?: string;
    first_name?: string;
    gender?: string;
    last_name?: string;
    meta?: any;
    phone_number: string;
    username: string;
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
    cookie?: any;
    domain?: string;
    http_only?: boolean;
    max_age?: number;
    secure?: boolean;
};
/** @returns {CustomerListResponseSchema} */
declare function CustomerListResponseSchema(): CustomerListResponseSchema;
type CustomerListResponseSchema = {
    items?: UserSchema[];
    page?: PaginationSchema;
};
/** @returns {DeleteAccountConsent} */
declare function DeleteAccountConsent(): DeleteAccountConsent;
type DeleteAccountConsent = {
    consent_text?: string;
};
/** @returns {DeleteAccountReasons} */
declare function DeleteAccountReasons(): DeleteAccountReasons;
type DeleteAccountReasons = {
    reason_id?: string;
    reason_text?: string;
    show_text_area?: boolean;
};
/** @returns {Email} */
declare function Email(): Email;
type Email = {
    active?: boolean;
    email?: string;
    primary?: boolean;
    verified?: boolean;
};
/** @returns {Facebook} */
declare function Facebook(): Facebook;
type Facebook = {
    app_id?: string;
};
/** @returns {FlashCard} */
declare function FlashCard(): FlashCard;
type FlashCard = {
    background_color?: string;
    text?: string;
    text_color?: string;
};
/** @returns {Google} */
declare function Google(): Google;
type Google = {
    app_id?: string;
};
/** @returns {Login} */
declare function Login(): Login;
type Login = {
    otp?: boolean;
    password?: boolean;
};
/** @returns {LookAndFeel} */
declare function LookAndFeel(): LookAndFeel;
type LookAndFeel = {
    background_color?: string;
    card_position?: string;
};
/** @returns {MetaSchema} */
declare function MetaSchema(): MetaSchema;
type MetaSchema = {
    fynd_default?: boolean;
};
/** @returns {PaginationSchema} */
declare function PaginationSchema(): PaginationSchema;
type PaginationSchema = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
/** @returns {PartialUserGroupUpdateSchema} */
declare function PartialUserGroupUpdateSchema(): PartialUserGroupUpdateSchema;
type PartialUserGroupUpdateSchema = {
    description?: string;
    /**
     * - Required property when passed type file_url.
     * Internet reachable csv file url which will be used to fetch download data.
     * It must have one of columns from `phone_number``, `email`, `user_id` and
     * must have `action` column. `action` column can have `add` or `remove` value.
     */
    file_url?: string;
    name?: string;
    /**
     * - Source of update to be used to update individual
     * users. Default value is considered file_url if not passed.
     */
    type?: string;
    /**
     * - Required property when passed
     * type json. Array of user data. Must have `action` field and one of
     * `phone_number`, `email` or `user_id` field in object
     */
    user_data?: UserGroupUpdateData[];
};
/** @returns {PhoneNumber} */
declare function PhoneNumber(): PhoneNumber;
type PhoneNumber = {
    active?: boolean;
    country_code?: number;
    phone?: string;
    primary?: boolean;
    verified?: boolean;
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
/** @returns {PlatformSchema} */
declare function PlatformSchema(): PlatformSchema;
type PlatformSchema = {
    _id?: string;
    active?: boolean;
    created_at?: string;
    delete_account_consent?: any;
    delete_account_day?: number;
    delete_account_reasons?: DeleteAccountReasons[];
    desktop_image?: string;
    display?: string;
    flash_card?: FlashCard;
    forgot_password?: boolean;
    login?: Login;
    look_and_feel?: LookAndFeel;
    meta?: MetaSchema;
    mobile_image?: string;
    name?: string;
    register?: boolean;
    register_required_fields?: RegisterRequiredFields;
    required_fields?: RequiredFields;
    session_config?: any;
    skip_captcha?: boolean;
    skip_login?: boolean;
    social?: Social;
    social_tokens?: SocialTokens;
    subtext?: string;
    updated_at?: string;
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
/** @returns {RequiredFields} */
declare function RequiredFields(): RequiredFields;
type RequiredFields = {
    email?: PlatformEmail;
    mobile?: PlatformMobile;
};
/** @returns {SessionDeleteResponseSchema} */
declare function SessionDeleteResponseSchema(): SessionDeleteResponseSchema;
type SessionDeleteResponseSchema = {
    session_id?: string;
    user_id?: string;
};
/** @returns {SessionExpiry} */
declare function SessionExpiry(): SessionExpiry;
type SessionExpiry = {
    duration?: number;
    is_rolling?: boolean;
    type?: string;
};
/** @returns {SessionListResponseInfo} */
declare function SessionListResponseInfo(): SessionListResponseInfo;
type SessionListResponseInfo = {
    domain?: string;
    expire_in?: string;
    ip?: string;
    session_id?: string;
    user_agent?: string;
};
/** @returns {SessionListResponseSchema} */
declare function SessionListResponseSchema(): SessionListResponseSchema;
type SessionListResponseSchema = {
    items?: SessionListResponseInfo[];
};
/** @returns {SessionsDeleteResponseSchema} */
declare function SessionsDeleteResponseSchema(): SessionsDeleteResponseSchema;
type SessionsDeleteResponseSchema = {
    session_ids?: string[];
    user_id?: string;
};
/** @returns {Social} */
declare function Social(): Social;
type Social = {
    account_kit?: boolean;
    apple?: boolean;
    facebook?: boolean;
    google?: boolean;
};
/** @returns {SocialTokens} */
declare function SocialTokens(): SocialTokens;
type SocialTokens = {
    account_kit?: Accountkit;
    facebook?: Facebook;
    google?: Google;
};
/** @returns {SuccessMessageResponse} */
declare function SuccessMessageResponse(): SuccessMessageResponse;
type SuccessMessageResponse = {
    success?: string;
};
/** @returns {UnDeleteUserRequestSchema} */
declare function UnDeleteUserRequestSchema(): UnDeleteUserRequestSchema;
type UnDeleteUserRequestSchema = {
    reason?: string;
    reason_id?: string;
    user_id?: string;
};
/** @returns {UnDeleteUserSuccess} */
declare function UnDeleteUserSuccess(): UnDeleteUserSuccess;
type UnDeleteUserSuccess = {
    success?: boolean;
};
/** @returns {UpdateUserGroupSchema} */
declare function UpdateUserGroupSchema(): UpdateUserGroupSchema;
type UpdateUserGroupSchema = {
    conditions?: ConditionsSchema[];
    description?: string;
    file_url?: string;
    name?: string;
    type?: string;
};
/** @returns {UpdateUserRequestSchema} */
declare function UpdateUserRequestSchema(): UpdateUserRequestSchema;
type UpdateUserRequestSchema = {
    emails?: UserEmails[];
    external_id?: string;
    first_name?: string;
    gender?: string;
    last_name?: string;
    meta?: any;
    phone_numbers?: UserPhoneNumbers[];
};
/** @returns {UserAttributeDefinition} */
declare function UserAttributeDefinition(): UserAttributeDefinition;
type UserAttributeDefinition = {
    /**
     * - The version number of the attribute.
     */
    __v?: number;
    /**
     * - The unique identifier for the attribute definition.
     */
    _id?: string;
    /**
     * - The application ID.
     */
    application_id?: string;
    /**
     * - The creation date of the attribute.
     */
    created_at?: string;
    /**
     * - Whether the attribute is customer-editable.
     */
    customer_editable?: boolean;
    /**
     * - The description of the attribute.
     */
    description?: string;
    /**
     * - Whether the attribute is encrypted.
     */
    encrypted?: boolean;
    /**
     * - Whether the attribute is locked.
     */
    is_locked?: boolean;
    /**
     * - The modification date of the attribute.
     */
    modified_at?: string;
    /**
     * - Whether the attribute supports multiple values.
     */
    multi_value?: boolean;
    /**
     * - The attribute name.
     */
    name?: string;
    /**
     * - The order in which the attribute is pinned.
     */
    pin_order?: number;
    /**
     * - Whether the attribute is pinned.
     */
    pinned?: boolean;
    /**
     * - The attribute key.
     */
    slug?: string;
    /**
     * - The attribute type.
     */
    type?: string;
    validations?: any[];
};
/** @returns {UserAttributeDefinitionResponse} */
declare function UserAttributeDefinitionResponse(): UserAttributeDefinitionResponse;
type UserAttributeDefinitionResponse = {
    /**
     * - The unique identifier for the attribute definition.
     */
    _id?: string;
    /**
     * - The application ID.
     */
    application_id?: string;
    /**
     * - The creation date of the attribute definition.
     */
    created_at?: string;
    /**
     * - The user who created the attribute.
     */
    created_by?: string;
    /**
     * - Whether the attribute is customer-editable.
     */
    customer_editable?: boolean;
    /**
     * - The description of the attribute.
     */
    description?: string;
    /**
     * - Whether the attribute is encrypted.
     */
    encrypted?: boolean;
    /**
     * - Whether the attribute is locked.
     */
    is_locked?: boolean;
    /**
     * - The last modification date of the
     * attribute definition.
     */
    modified_at?: string;
    /**
     * - Whether the attribute supports multiple values.
     */
    multi_value?: boolean;
    /**
     * - The attribute name.
     */
    name?: string;
    /**
     * - The order in which the attribute is pinned.
     */
    pin_order?: number;
    /**
     * - Whether the attribute is pinned.
     */
    pinned?: boolean;
    /**
     * - The attribute key.
     */
    slug?: string;
    /**
     * - The attribute type.
     */
    type?: string;
    /**
     * - The user who last updated the attribute.
     */
    updated_by?: string;
    validations?: UserAttributeDefinitionValidation[];
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
     * - The application ID.
     */
    application_id?: string;
    attribute?: any;
    /**
     * - Whether the attribute is customer-editable.
     */
    customer_overriden?: boolean;
    /**
     * - The name of user attribute definition.
     */
    name?: string;
    /**
     * - The attribute type.
     */
    type?: string;
    updated_by?: string;
    /**
     * - The unique identifier for the user.
     */
    user_id?: string;
};
/** @returns {UserEmails} */
declare function UserEmails(): UserEmails;
type UserEmails = {
    active?: boolean;
    email?: string;
    primary?: boolean;
    verified?: boolean;
};
/** @returns {UserGroupListResponseSchema} */
declare function UserGroupListResponseSchema(): UserGroupListResponseSchema;
type UserGroupListResponseSchema = {
    items?: UserGroupResponseSchema[];
    page?: PaginationSchema;
};
/** @returns {UserGroupResponseSchema} */
declare function UserGroupResponseSchema(): UserGroupResponseSchema;
type UserGroupResponseSchema = {
    __v?: number;
    _id?: string;
    application_id?: string;
    conditions?: Conditions[];
    created_at?: string;
    description?: string;
    error?: UserResponseErrorSchema;
    file_url?: string;
    is_active?: boolean;
    modified_at?: string;
    name?: string;
    status?: string;
    type?: string;
    uid?: number;
};
/** @returns {UserGroupUpdateData} */
declare function UserGroupUpdateData(): UserGroupUpdateData;
type UserGroupUpdateData = {
    action: string;
    /**
     * - Email of registered user
     */
    email?: string;
    /**
     * - Phone number of registered user
     */
    phone_number?: string;
    /**
     * - Must be valid mongodb objectid of existing user
     */
    user_id?: string;
};
/** @returns {UserPhoneNumbers} */
declare function UserPhoneNumbers(): UserPhoneNumbers;
type UserPhoneNumbers = {
    active?: boolean;
    country_code?: string;
    phone?: string;
    primary?: boolean;
    verified?: boolean;
};
/** @returns {UserResponseErrorSchema} */
declare function UserResponseErrorSchema(): UserResponseErrorSchema;
type UserResponseErrorSchema = {
    count?: number;
    file_url?: string;
};
/** @returns {UserSchema} */
declare function UserSchema(): UserSchema;
type UserSchema = {
    _id?: string;
    account_type?: string;
    active?: boolean;
    application_id?: string;
    created_at?: string;
    dob?: string;
    emails?: Email[];
    external_id?: string;
    first_name?: string;
    gender?: string;
    last_name?: string;
    meta?: any;
    phone_numbers?: PhoneNumber[];
    profile_pic_url?: string;
    updated_at?: string;
    user_id?: string;
    username?: string;
};
/** @returns {UserSearchResponseSchema} */
declare function UserSearchResponseSchema(): UserSearchResponseSchema;
type UserSearchResponseSchema = {
    users?: UserSchema[];
};
