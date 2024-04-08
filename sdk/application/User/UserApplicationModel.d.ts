export = UserApplicationModel;
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
 * @property {string} user_id
 * @property {string} reason
 * @property {string} reason_id
 * @property {string} [request_id]
 * @property {string} otp
 */
/**
 * @typedef EditEmailRequestSchema
 * @property {string} email
 */
/**
 * @typedef SendVerificationLinkMobileRequestSchema
 * @property {boolean} [verified]
 * @property {boolean} [active]
 * @property {string} country_code
 * @property {string} phone
 * @property {boolean} [primary]
 */
/**
 * @typedef EditMobileRequestSchema
 * @property {string} country_code
 * @property {string} phone
 */
/**
 * @typedef EditProfileRequestSchema
 * @property {boolean} [ci] - Set to true if you want to encrypt the OTP.
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
 * @property {string} email
 * @property {string} action
 * @property {string} [token]
 * @property {string} [register_token]
 */
/**
 * @typedef SendEmailForgotOtpRequestSchema
 * @property {string} email
 * @property {string} action
 * @property {string} [token]
 */
/**
 * @typedef VerifyEmailOtpRequestSchema
 * @property {string} email
 * @property {string} [request_id]
 * @property {string} action
 * @property {string} [register_token]
 * @property {string} otp
 */
/**
 * @typedef VerifyEmailForgotOtpRequestSchema
 * @property {string} email
 * @property {string} otp
 * @property {string} [request_id]
 */
/**
 * @typedef VerifyOtpRequestSchema
 * @property {string} request_id
 * @property {string} [register_token]
 * @property {string} otp
 */
/**
 * @typedef VerifyMobileForgotOtpRequestSchema
 * @property {string} request_id
 * @property {string} otp
 */
/**
 * @typedef SendMobileOtpRequestSchema
 * @property {boolean} [ci] - Set to true if you want to encrypt the OTP.
 * @property {string} mobile
 * @property {string} country_code
 * @property {string} action
 * @property {string} [token]
 * @property {string} [android_hash]
 * @property {string} [force]
 */
/**
 * @typedef SendMobileForgotOtpRequestSchema
 * @property {string} mobile
 * @property {string} country_code
 * @property {string} action
 * @property {string} [token]
 * @property {string} [android_hash]
 */
/**
 * @typedef UpdatePasswordRequestSchema
 * @property {string} old_password
 * @property {string} new_password
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
 * @property {string} token
 */
/**
 * @typedef ForgotPasswordRequestSchema
 * @property {string} code
 * @property {string} password
 */
/**
 * @typedef CodeRequestBodySchema
 * @property {string} code
 */
/**
 * @typedef SendResetPasswordEmailRequestSchema
 * @property {string} email
 */
/**
 * @typedef PasswordLoginRequestSchema
 * @property {string} password
 * @property {string} username
 */
/**
 * @typedef SendOtpRequestSchema
 * @property {boolean} [ci] - Set to true if you want to encrypt the OTP.
 * @property {string} country_code
 * @property {string} mobile
 * @property {string} [android_hash]
 */
/**
 * @typedef OAuthRequestSchema
 * @property {boolean} [is_signed_in]
 * @property {OAuthRequestSchemaOauth2} oauth2
 * @property {OAuthRequestSchemaProfile} profile
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
 * @typedef EmailOtp
 * @property {string} [request_id]
 * @property {number} [resend_timer]
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
 * @property {EmailOtp} [email_otp]
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
 * @property {EmailOtp} [email_otp]
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
 * @property {EmailOtp} [email_otp]
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
 * @property {string} access_token
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
 * @property {AccountLockout} [account_lockout]
 * @property {PasswordSettings} [password_settings]
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
 * @typedef PasswordConfigs
 * @property {number} [length]
 * @property {boolean} [require_special_character]
 * @property {boolean} [require_number]
 * @property {boolean} [require_capital_character]
 */
/**
 * @typedef PasswordHistory
 * @property {boolean} [required]
 * @property {number} [count]
 */
/**
 * @typedef PasswordExpiry
 * @property {boolean} [required]
 * @property {number} [duration]
 */
/**
 * @typedef PasswordSettings
 * @property {PasswordConfigs} [configs]
 * @property {PasswordHistory} [history]
 * @property {PasswordExpiry} [expiry]
 */
/**
 * @typedef AccountLockout
 * @property {boolean} [enable]
 * @property {number} [attempts]
 * @property {number} [duration]
 */
/**
 * @typedef Login
 * @property {boolean} [password]
 * @property {boolean} [otp]
 * @property {string} [via]
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
 * @property {PlatformPassword} [password]
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
 * @typedef PlatformPassword
 * @property {boolean} [is_required]
 */
/**
 * @typedef RegisterRequiredFields
 * @property {RegisterRequiredFieldsEmail} [email]
 * @property {RegisterRequiredFieldsMobile} [mobile]
 * @property {PlatformPassword} [password]
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
 * @typedef UserPasswordHistory
 * @property {string} [salt]
 * @property {string} [hash]
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
declare class UserApplicationModel {
}
declare namespace UserApplicationModel {
    export { UpdateUserAttributesRequest, UserAttributes, DeleteApplicationUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, SendEmailForgotOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyEmailForgotOtpRequestSchema, VerifyOtpRequestSchema, VerifyMobileForgotOtpRequestSchema, SendMobileOtpRequestSchema, SendMobileForgotOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, UserExistsResponse, SendOtpResponse, EmailOtp, ProfileEditSuccess, LoginSuccess, ResetForgotPasswordSuccess, VerifyOtpSuccess, VerifyForgotOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, DeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, APIError, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, PlatformSchema, LookAndFeel, PasswordConfigs, PasswordHistory, PasswordExpiry, PasswordSettings, AccountLockout, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, PlatformPassword, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UserPasswordHistory, UserSchema, PhoneNumber, Email };
}
/** @returns {UpdateUserAttributesRequest} */
declare function UpdateUserAttributesRequest(): UpdateUserAttributesRequest;
type UpdateUserAttributesRequest = {
    attributes?: any;
};
/** @returns {UserAttributes} */
declare function UserAttributes(): UserAttributes;
type UserAttributes = {
    attributes?: any;
};
/** @returns {DeleteApplicationUserRequestSchema} */
declare function DeleteApplicationUserRequestSchema(): DeleteApplicationUserRequestSchema;
type DeleteApplicationUserRequestSchema = {
    user_id: string;
    reason: string;
    reason_id: string;
    request_id?: string;
    otp: string;
};
/** @returns {EditEmailRequestSchema} */
declare function EditEmailRequestSchema(): EditEmailRequestSchema;
type EditEmailRequestSchema = {
    email: string;
};
/** @returns {SendVerificationLinkMobileRequestSchema} */
declare function SendVerificationLinkMobileRequestSchema(): SendVerificationLinkMobileRequestSchema;
type SendVerificationLinkMobileRequestSchema = {
    verified?: boolean;
    active?: boolean;
    country_code: string;
    phone: string;
    primary?: boolean;
};
/** @returns {EditMobileRequestSchema} */
declare function EditMobileRequestSchema(): EditMobileRequestSchema;
type EditMobileRequestSchema = {
    country_code: string;
    phone: string;
};
/** @returns {EditProfileRequestSchema} */
declare function EditProfileRequestSchema(): EditProfileRequestSchema;
type EditProfileRequestSchema = {
    /**
     * - Set to true if you want to encrypt the OTP.
     */
    ci?: boolean;
    first_name?: string;
    last_name?: string;
    mobile?: EditProfileMobileSchema;
    country_code?: string;
    email?: string;
    gender?: string;
    dob?: string;
    profile_pic_url?: string;
    android_hash?: string;
    sender?: string;
    register_token?: string;
};
/** @returns {EditProfileMobileSchema} */
declare function EditProfileMobileSchema(): EditProfileMobileSchema;
type EditProfileMobileSchema = {
    phone?: string;
    country_code?: string;
};
/** @returns {SendEmailOtpRequestSchema} */
declare function SendEmailOtpRequestSchema(): SendEmailOtpRequestSchema;
type SendEmailOtpRequestSchema = {
    email: string;
    action: string;
    token?: string;
    register_token?: string;
};
/** @returns {SendEmailForgotOtpRequestSchema} */
declare function SendEmailForgotOtpRequestSchema(): SendEmailForgotOtpRequestSchema;
type SendEmailForgotOtpRequestSchema = {
    email: string;
    action: string;
    token?: string;
};
/** @returns {VerifyEmailOtpRequestSchema} */
declare function VerifyEmailOtpRequestSchema(): VerifyEmailOtpRequestSchema;
type VerifyEmailOtpRequestSchema = {
    email: string;
    request_id?: string;
    action: string;
    register_token?: string;
    otp: string;
};
/** @returns {VerifyEmailForgotOtpRequestSchema} */
declare function VerifyEmailForgotOtpRequestSchema(): VerifyEmailForgotOtpRequestSchema;
type VerifyEmailForgotOtpRequestSchema = {
    email: string;
    otp: string;
    request_id?: string;
};
/** @returns {VerifyOtpRequestSchema} */
declare function VerifyOtpRequestSchema(): VerifyOtpRequestSchema;
type VerifyOtpRequestSchema = {
    request_id: string;
    register_token?: string;
    otp: string;
};
/** @returns {VerifyMobileForgotOtpRequestSchema} */
declare function VerifyMobileForgotOtpRequestSchema(): VerifyMobileForgotOtpRequestSchema;
type VerifyMobileForgotOtpRequestSchema = {
    request_id: string;
    otp: string;
};
/** @returns {SendMobileOtpRequestSchema} */
declare function SendMobileOtpRequestSchema(): SendMobileOtpRequestSchema;
type SendMobileOtpRequestSchema = {
    /**
     * - Set to true if you want to encrypt the OTP.
     */
    ci?: boolean;
    mobile: string;
    country_code: string;
    action: string;
    token?: string;
    android_hash?: string;
    force?: string;
};
/** @returns {SendMobileForgotOtpRequestSchema} */
declare function SendMobileForgotOtpRequestSchema(): SendMobileForgotOtpRequestSchema;
type SendMobileForgotOtpRequestSchema = {
    mobile: string;
    country_code: string;
    action: string;
    token?: string;
    android_hash?: string;
};
/** @returns {UpdatePasswordRequestSchema} */
declare function UpdatePasswordRequestSchema(): UpdatePasswordRequestSchema;
type UpdatePasswordRequestSchema = {
    old_password: string;
    new_password: string;
};
/** @returns {FormRegisterRequestSchema} */
declare function FormRegisterRequestSchema(): FormRegisterRequestSchema;
type FormRegisterRequestSchema = {
    first_name?: string;
    last_name?: string;
    gender?: string;
    email?: string;
    password?: string;
    phone?: FormRegisterRequestSchemaPhone;
    register_token?: string;
};
/** @returns {TokenRequestBodySchema} */
declare function TokenRequestBodySchema(): TokenRequestBodySchema;
type TokenRequestBodySchema = {
    token: string;
};
/** @returns {ForgotPasswordRequestSchema} */
declare function ForgotPasswordRequestSchema(): ForgotPasswordRequestSchema;
type ForgotPasswordRequestSchema = {
    code: string;
    password: string;
};
/** @returns {CodeRequestBodySchema} */
declare function CodeRequestBodySchema(): CodeRequestBodySchema;
type CodeRequestBodySchema = {
    code: string;
};
/** @returns {SendResetPasswordEmailRequestSchema} */
declare function SendResetPasswordEmailRequestSchema(): SendResetPasswordEmailRequestSchema;
type SendResetPasswordEmailRequestSchema = {
    email: string;
};
/** @returns {PasswordLoginRequestSchema} */
declare function PasswordLoginRequestSchema(): PasswordLoginRequestSchema;
type PasswordLoginRequestSchema = {
    password: string;
    username: string;
};
/** @returns {SendOtpRequestSchema} */
declare function SendOtpRequestSchema(): SendOtpRequestSchema;
type SendOtpRequestSchema = {
    /**
     * - Set to true if you want to encrypt the OTP.
     */
    ci?: boolean;
    country_code: string;
    mobile: string;
    android_hash?: string;
};
/** @returns {OAuthRequestSchema} */
declare function OAuthRequestSchema(): OAuthRequestSchema;
type OAuthRequestSchema = {
    is_signed_in?: boolean;
    oauth2: OAuthRequestSchemaOauth2;
    profile: OAuthRequestSchemaProfile;
};
/** @returns {OAuthRequestAppleSchema} */
declare function OAuthRequestAppleSchema(): OAuthRequestAppleSchema;
type OAuthRequestAppleSchema = {
    user_identifier?: string;
    oauth?: OAuthRequestAppleSchemaOauth;
    profile?: OAuthRequestAppleSchemaProfile;
};
/** @returns {UserObjectSchema} */
declare function UserObjectSchema(): UserObjectSchema;
type UserObjectSchema = {
    user?: UserSchema;
};
/** @returns {AuthSuccess} */
declare function AuthSuccess(): AuthSuccess;
type AuthSuccess = {
    register_token?: string;
    user_exists?: boolean;
    user?: UserSchema;
};
/** @returns {UserExistsResponse} */
declare function UserExistsResponse(): UserExistsResponse;
type UserExistsResponse = {
    user_exists?: boolean;
};
/** @returns {SendOtpResponse} */
declare function SendOtpResponse(): SendOtpResponse;
type SendOtpResponse = {
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
    email?: string;
    resend_email_token?: string;
    register_token?: string;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    user_exists?: boolean;
};
/** @returns {EmailOtp} */
declare function EmailOtp(): EmailOtp;
type EmailOtp = {
    request_id?: string;
    resend_timer?: number;
};
/** @returns {ProfileEditSuccess} */
declare function ProfileEditSuccess(): ProfileEditSuccess;
type ProfileEditSuccess = {
    user?: UserSchema;
    register_token?: string;
    resend_email_token?: string;
    user_exists?: boolean;
    verify_email_link?: boolean;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    email?: string;
    email_otp?: EmailOtp;
    request_id?: string;
    country_code?: string;
    mobile?: string;
    success?: boolean;
    message?: string;
    resend_timer?: number;
    resend_token?: string;
};
/** @returns {LoginSuccess} */
declare function LoginSuccess(): LoginSuccess;
type LoginSuccess = {
    user?: UserSchema;
    request_id?: string;
    register_token?: string;
};
/** @returns {ResetForgotPasswordSuccess} */
declare function ResetForgotPasswordSuccess(): ResetForgotPasswordSuccess;
type ResetForgotPasswordSuccess = {
    success?: boolean;
};
/** @returns {VerifyOtpSuccess} */
declare function VerifyOtpSuccess(): VerifyOtpSuccess;
type VerifyOtpSuccess = {
    user?: UserSchema;
    user_exists?: boolean;
    register_token?: string;
};
/** @returns {VerifyForgotOtpSuccess} */
declare function VerifyForgotOtpSuccess(): VerifyForgotOtpSuccess;
type VerifyForgotOtpSuccess = {
    success?: boolean;
    forgot_token?: string;
};
/** @returns {ResetPasswordSuccess} */
declare function ResetPasswordSuccess(): ResetPasswordSuccess;
type ResetPasswordSuccess = {
    status?: string;
};
/** @returns {RegisterFormSuccess} */
declare function RegisterFormSuccess(): RegisterFormSuccess;
type RegisterFormSuccess = {
    email?: string;
    email_otp?: EmailOtp;
    resend_timer?: number;
    resend_token?: string;
    resend_email_token?: string;
    register_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    user_exists?: boolean;
};
/** @returns {VerifyEmailSuccess} */
declare function VerifyEmailSuccess(): VerifyEmailSuccess;
type VerifyEmailSuccess = {
    message?: string;
};
/** @returns {HasPasswordSuccess} */
declare function HasPasswordSuccess(): HasPasswordSuccess;
type HasPasswordSuccess = {
    result?: number;
};
/** @returns {LogoutSuccess} */
declare function LogoutSuccess(): LogoutSuccess;
type LogoutSuccess = {
    logout?: boolean;
};
/** @returns {DeleteUserSuccess} */
declare function DeleteUserSuccess(): DeleteUserSuccess;
type DeleteUserSuccess = {
    success?: boolean;
};
/** @returns {OtpSuccess} */
declare function OtpSuccess(): OtpSuccess;
type OtpSuccess = {
    resend_timer?: number;
    resend_token?: string;
    register_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
};
/** @returns {EmailOtpSuccess} */
declare function EmailOtpSuccess(): EmailOtpSuccess;
type EmailOtpSuccess = {
    success?: boolean;
    resend_email_token?: string;
    email_otp?: EmailOtp;
};
/** @returns {SessionListSuccess} */
declare function SessionListSuccess(): SessionListSuccess;
type SessionListSuccess = {
    sessions?: string[];
};
/** @returns {VerifyMobileOTPSuccess} */
declare function VerifyMobileOTPSuccess(): VerifyMobileOTPSuccess;
type VerifyMobileOTPSuccess = {
    user?: UserSchema;
    verify_mobile_link?: boolean;
};
/** @returns {VerifyEmailOTPSuccess} */
declare function VerifyEmailOTPSuccess(): VerifyEmailOTPSuccess;
type VerifyEmailOTPSuccess = {
    user?: UserSchema;
    verify_email_link?: boolean;
};
/** @returns {SendMobileVerifyLinkSuccess} */
declare function SendMobileVerifyLinkSuccess(): SendMobileVerifyLinkSuccess;
type SendMobileVerifyLinkSuccess = {
    verify_mobile_link?: boolean;
};
/** @returns {SendEmailVerifyLinkSuccess} */
declare function SendEmailVerifyLinkSuccess(): SendEmailVerifyLinkSuccess;
type SendEmailVerifyLinkSuccess = {
    verify_email_link?: boolean;
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
/** @returns {FormRegisterRequestSchemaPhone} */
declare function FormRegisterRequestSchemaPhone(): FormRegisterRequestSchemaPhone;
type FormRegisterRequestSchemaPhone = {
    country_code?: string;
    mobile?: string;
};
/** @returns {OAuthRequestSchemaOauth2} */
declare function OAuthRequestSchemaOauth2(): OAuthRequestSchemaOauth2;
type OAuthRequestSchemaOauth2 = {
    access_token: string;
    expiry?: number;
    refresh_token?: string;
};
/** @returns {OAuthRequestSchemaProfile} */
declare function OAuthRequestSchemaProfile(): OAuthRequestSchemaProfile;
type OAuthRequestSchemaProfile = {
    last_name?: string;
    image?: string;
    id?: string;
    email?: string;
    full_name?: string;
    first_name?: string;
};
/** @returns {OAuthRequestAppleSchemaOauth} */
declare function OAuthRequestAppleSchemaOauth(): OAuthRequestAppleSchemaOauth;
type OAuthRequestAppleSchemaOauth = {
    identity_token?: string;
};
/** @returns {OAuthRequestAppleSchemaProfile} */
declare function OAuthRequestAppleSchemaProfile(): OAuthRequestAppleSchemaProfile;
type OAuthRequestAppleSchemaProfile = {
    last_name?: string;
    full_name?: string;
    first_name?: string;
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
    account_lockout?: AccountLockout;
    password_settings?: PasswordSettings;
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
/** @returns {PasswordConfigs} */
declare function PasswordConfigs(): PasswordConfigs;
type PasswordConfigs = {
    length?: number;
    require_special_character?: boolean;
    require_number?: boolean;
    require_capital_character?: boolean;
};
/** @returns {PasswordHistory} */
declare function PasswordHistory(): PasswordHistory;
type PasswordHistory = {
    required?: boolean;
    count?: number;
};
/** @returns {PasswordExpiry} */
declare function PasswordExpiry(): PasswordExpiry;
type PasswordExpiry = {
    required?: boolean;
    duration?: number;
};
/** @returns {PasswordSettings} */
declare function PasswordSettings(): PasswordSettings;
type PasswordSettings = {
    configs?: PasswordConfigs;
    history?: PasswordHistory;
    expiry?: PasswordExpiry;
};
/** @returns {AccountLockout} */
declare function AccountLockout(): AccountLockout;
type AccountLockout = {
    enable?: boolean;
    attempts?: number;
    duration?: number;
};
/** @returns {Login} */
declare function Login(): Login;
type Login = {
    password?: boolean;
    otp?: boolean;
    via?: string;
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
    password?: PlatformPassword;
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
/** @returns {PlatformPassword} */
declare function PlatformPassword(): PlatformPassword;
type PlatformPassword = {
    is_required?: boolean;
};
/** @returns {RegisterRequiredFields} */
declare function RegisterRequiredFields(): RegisterRequiredFields;
type RegisterRequiredFields = {
    email?: RegisterRequiredFieldsEmail;
    mobile?: RegisterRequiredFieldsMobile;
    password?: PlatformPassword;
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
    accountkit?: Accountkit;
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
};
/** @returns {Accountkit} */
declare function Accountkit(): Accountkit;
type Accountkit = {
    app_id?: string;
};
/** @returns {Google} */
declare function Google(): Google;
type Google = {
    app_id?: string;
};
/** @returns {SessionExpiry} */
declare function SessionExpiry(): SessionExpiry;
type SessionExpiry = {
    duration?: number;
    type?: string;
    is_rolling?: boolean;
};
/** @returns {UserPasswordHistory} */
declare function UserPasswordHistory(): UserPasswordHistory;
type UserPasswordHistory = {
    salt?: string;
    hash?: string;
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
