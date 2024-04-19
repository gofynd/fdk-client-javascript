export = UserApplicationModel;
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
declare class UserApplicationModel {
}
declare namespace UserApplicationModel {
    export { Accountkit, APIError, AuthenticationApiErrorSchema, AuthenticationInternalServerErrorSchema, AuthSuccess, CodeRequestBodySchema, DeleteAccountConsent, DeleteAccountReasons, DeleteApplicationUserRequestSchema, DeleteUserSuccess, EditEmailRequestSchema, EditMobileRequestSchema, EditProfileMobileSchema, EditProfileRequestSchema, Email, EmailOtpSuccess, Facebook, FlashCard, ForgotPasswordRequestSchema, FormRegisterRequestSchema, FormRegisterRequestSchemaPhone, Google, HasPasswordSuccess, Login, LoginSuccess, LogoutSuccess, LookAndFeel, MetaSchema, OAuthRequestAppleSchema, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, OAuthRequestSchema, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OtpSuccess, PasswordLoginRequestSchema, PhoneNumber, PlatformEmail, PlatformMobile, PlatformSchema, ProfileEditSuccess, RegisterFormSuccess, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, RequiredFields, ResetForgotPasswordSuccess, ResetPasswordSuccess, SendEmailForgotOtpRequestSchema, SendEmailOtpRequestSchema, SendEmailVerifyLinkSuccess, SendMobileForgotOtpRequestSchema, SendMobileOtpRequestSchema, SendMobileVerifyLinkSuccess, SendOtpRequestSchema, SendOtpResponse, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, SendVerificationLinkMobileRequestSchema, SessionExpiry, SessionListSuccess, Social, SocialTokens, TokenRequestBodySchema, UpdatePasswordRequestSchema, UserObjectSchema, UserSchema, VerifyEmailForgotOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyEmailOTPSuccess, VerifyEmailSuccess, VerifyForgotOtpSuccess, VerifyMobileForgotOtpRequestSchema, VerifyMobileOTPSuccess, VerifyOtpRequestSchema, VerifyOtpSuccess };
}
/** @returns {Accountkit} */
declare function Accountkit(): Accountkit;
type Accountkit = {
    app_id?: string;
};
/** @returns {APIError} */
declare function APIError(): APIError;
type APIError = {
    code?: string;
    /**
     * - Error code description link
     */
    info?: string;
    message?: string;
    meta?: any;
    request_id?: string;
};
/** @returns {AuthenticationApiErrorSchema} */
declare function AuthenticationApiErrorSchema(): AuthenticationApiErrorSchema;
type AuthenticationApiErrorSchema = {
    message?: string;
};
/** @returns {AuthenticationInternalServerErrorSchema} */
declare function AuthenticationInternalServerErrorSchema(): AuthenticationInternalServerErrorSchema;
type AuthenticationInternalServerErrorSchema = {
    message?: string;
};
/** @returns {AuthSuccess} */
declare function AuthSuccess(): AuthSuccess;
type AuthSuccess = {
    register_token?: string;
    user?: UserSchema;
    user_exists?: boolean;
};
/** @returns {CodeRequestBodySchema} */
declare function CodeRequestBodySchema(): CodeRequestBodySchema;
type CodeRequestBodySchema = {
    code?: string;
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
/** @returns {DeleteApplicationUserRequestSchema} */
declare function DeleteApplicationUserRequestSchema(): DeleteApplicationUserRequestSchema;
type DeleteApplicationUserRequestSchema = {
    otp?: string;
    reason?: string;
    reason_id?: string;
    request_id?: string;
    user_id?: string;
};
/** @returns {DeleteUserSuccess} */
declare function DeleteUserSuccess(): DeleteUserSuccess;
type DeleteUserSuccess = {
    success?: boolean;
};
/** @returns {EditEmailRequestSchema} */
declare function EditEmailRequestSchema(): EditEmailRequestSchema;
type EditEmailRequestSchema = {
    email?: string;
};
/** @returns {EditMobileRequestSchema} */
declare function EditMobileRequestSchema(): EditMobileRequestSchema;
type EditMobileRequestSchema = {
    country_code?: string;
    phone?: string;
};
/** @returns {EditProfileMobileSchema} */
declare function EditProfileMobileSchema(): EditProfileMobileSchema;
type EditProfileMobileSchema = {
    country_code?: string;
    phone?: string;
};
/** @returns {EditProfileRequestSchema} */
declare function EditProfileRequestSchema(): EditProfileRequestSchema;
type EditProfileRequestSchema = {
    android_hash?: string;
    country_code?: string;
    dob?: string;
    email?: string;
    first_name?: string;
    gender?: string;
    last_name?: string;
    mobile?: EditProfileMobileSchema;
    profile_pic_url?: string;
    register_token?: string;
    sender?: string;
};
/** @returns {Email} */
declare function Email(): Email;
type Email = {
    active?: boolean;
    email?: string;
    primary?: boolean;
    verified?: boolean;
};
/** @returns {EmailOtpSuccess} */
declare function EmailOtpSuccess(): EmailOtpSuccess;
type EmailOtpSuccess = {
    success?: boolean;
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
/** @returns {ForgotPasswordRequestSchema} */
declare function ForgotPasswordRequestSchema(): ForgotPasswordRequestSchema;
type ForgotPasswordRequestSchema = {
    code?: string;
    password?: string;
};
/** @returns {FormRegisterRequestSchema} */
declare function FormRegisterRequestSchema(): FormRegisterRequestSchema;
type FormRegisterRequestSchema = {
    email?: string;
    first_name?: string;
    gender?: string;
    last_name?: string;
    password?: string;
    phone?: FormRegisterRequestSchemaPhone;
    register_token?: string;
};
/** @returns {FormRegisterRequestSchemaPhone} */
declare function FormRegisterRequestSchemaPhone(): FormRegisterRequestSchemaPhone;
type FormRegisterRequestSchemaPhone = {
    country_code?: string;
    mobile?: string;
};
/** @returns {Google} */
declare function Google(): Google;
type Google = {
    app_id?: string;
};
/** @returns {HasPasswordSuccess} */
declare function HasPasswordSuccess(): HasPasswordSuccess;
type HasPasswordSuccess = {
    result?: boolean;
};
/** @returns {Login} */
declare function Login(): Login;
type Login = {
    otp?: boolean;
    password?: boolean;
};
/** @returns {LoginSuccess} */
declare function LoginSuccess(): LoginSuccess;
type LoginSuccess = {
    register_token?: string;
    request_id?: string;
    user?: UserSchema;
};
/** @returns {LogoutSuccess} */
declare function LogoutSuccess(): LogoutSuccess;
type LogoutSuccess = {
    logout?: boolean;
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
/** @returns {OAuthRequestAppleSchema} */
declare function OAuthRequestAppleSchema(): OAuthRequestAppleSchema;
type OAuthRequestAppleSchema = {
    oauth?: OAuthRequestAppleSchemaOauth;
    profile?: OAuthRequestAppleSchemaProfile;
    user_identifier?: string;
};
/** @returns {OAuthRequestAppleSchemaOauth} */
declare function OAuthRequestAppleSchemaOauth(): OAuthRequestAppleSchemaOauth;
type OAuthRequestAppleSchemaOauth = {
    identity_token?: string;
};
/** @returns {OAuthRequestAppleSchemaProfile} */
declare function OAuthRequestAppleSchemaProfile(): OAuthRequestAppleSchemaProfile;
type OAuthRequestAppleSchemaProfile = {
    first_name?: string;
    full_name?: string;
    last_name?: string;
};
/** @returns {OAuthRequestSchema} */
declare function OAuthRequestSchema(): OAuthRequestSchema;
type OAuthRequestSchema = {
    is_signed_in?: boolean;
    oauth2?: OAuthRequestSchemaOauth2;
    profile?: OAuthRequestSchemaProfile;
};
/** @returns {OAuthRequestSchemaOauth2} */
declare function OAuthRequestSchemaOauth2(): OAuthRequestSchemaOauth2;
type OAuthRequestSchemaOauth2 = {
    access_token?: string;
    expiry?: number;
    refresh_token?: string;
};
/** @returns {OAuthRequestSchemaProfile} */
declare function OAuthRequestSchemaProfile(): OAuthRequestSchemaProfile;
type OAuthRequestSchemaProfile = {
    email?: string;
    first_name?: string;
    full_name?: string;
    id?: string;
    image?: string;
    last_name?: string;
};
/** @returns {OtpSuccess} */
declare function OtpSuccess(): OtpSuccess;
type OtpSuccess = {
    country_code?: string;
    message?: string;
    mobile?: string;
    register_token?: string;
    request_id?: string;
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
};
/** @returns {PasswordLoginRequestSchema} */
declare function PasswordLoginRequestSchema(): PasswordLoginRequestSchema;
type PasswordLoginRequestSchema = {
    captcha_code?: string;
    password?: string;
    username?: string;
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
/** @returns {ProfileEditSuccess} */
declare function ProfileEditSuccess(): ProfileEditSuccess;
type ProfileEditSuccess = {
    country_code?: string;
    email?: string;
    message?: string;
    mobile?: string;
    register_token?: string;
    request_id?: string;
    resend_email_token?: string;
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
    user?: UserSchema;
    user_exists?: boolean;
    verify_email_link?: boolean;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
};
/** @returns {RegisterFormSuccess} */
declare function RegisterFormSuccess(): RegisterFormSuccess;
type RegisterFormSuccess = {
    country_code?: string;
    email?: string;
    message?: string;
    mobile?: string;
    register_token?: string;
    request_id?: string;
    resend_email_token?: string;
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
    user_exists?: boolean;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
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
/** @returns {ResetForgotPasswordSuccess} */
declare function ResetForgotPasswordSuccess(): ResetForgotPasswordSuccess;
type ResetForgotPasswordSuccess = {
    success?: boolean;
};
/** @returns {ResetPasswordSuccess} */
declare function ResetPasswordSuccess(): ResetPasswordSuccess;
type ResetPasswordSuccess = {
    status?: string;
};
/** @returns {SendEmailForgotOtpRequestSchema} */
declare function SendEmailForgotOtpRequestSchema(): SendEmailForgotOtpRequestSchema;
type SendEmailForgotOtpRequestSchema = {
    action?: string;
    email?: string;
    token?: string;
};
/** @returns {SendEmailOtpRequestSchema} */
declare function SendEmailOtpRequestSchema(): SendEmailOtpRequestSchema;
type SendEmailOtpRequestSchema = {
    action?: string;
    captcha_code?: string;
    email?: string;
    register_token?: string;
    token?: string;
};
/** @returns {SendEmailVerifyLinkSuccess} */
declare function SendEmailVerifyLinkSuccess(): SendEmailVerifyLinkSuccess;
type SendEmailVerifyLinkSuccess = {
    verify_email_link?: boolean;
};
/** @returns {SendMobileForgotOtpRequestSchema} */
declare function SendMobileForgotOtpRequestSchema(): SendMobileForgotOtpRequestSchema;
type SendMobileForgotOtpRequestSchema = {
    action?: string;
    android_hash?: string;
    country_code?: string;
    mobile?: string;
    token?: string;
};
/** @returns {SendMobileOtpRequestSchema} */
declare function SendMobileOtpRequestSchema(): SendMobileOtpRequestSchema;
type SendMobileOtpRequestSchema = {
    action?: string;
    android_hash?: string;
    captcha_code?: string;
    country_code?: string;
    force?: string;
    mobile?: string;
    token?: string;
};
/** @returns {SendMobileVerifyLinkSuccess} */
declare function SendMobileVerifyLinkSuccess(): SendMobileVerifyLinkSuccess;
type SendMobileVerifyLinkSuccess = {
    verify_mobile_link?: boolean;
};
/** @returns {SendOtpRequestSchema} */
declare function SendOtpRequestSchema(): SendOtpRequestSchema;
type SendOtpRequestSchema = {
    android_hash?: string;
    captcha_code?: string;
    country_code?: string;
    mobile?: string;
};
/** @returns {SendOtpResponse} */
declare function SendOtpResponse(): SendOtpResponse;
type SendOtpResponse = {
    country_code?: string;
    email?: string;
    message?: string;
    mobile?: string;
    register_token?: string;
    request_id?: string;
    resend_email_token?: string;
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
    user_exists?: boolean;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
};
/** @returns {SendResetPasswordEmailRequestSchema} */
declare function SendResetPasswordEmailRequestSchema(): SendResetPasswordEmailRequestSchema;
type SendResetPasswordEmailRequestSchema = {
    captcha_code?: string;
    email?: string;
};
/** @returns {SendResetPasswordMobileRequestSchema} */
declare function SendResetPasswordMobileRequestSchema(): SendResetPasswordMobileRequestSchema;
type SendResetPasswordMobileRequestSchema = {
    captcha_code?: string;
    country_code?: string;
    mobile?: string;
};
/** @returns {SendVerificationLinkMobileRequestSchema} */
declare function SendVerificationLinkMobileRequestSchema(): SendVerificationLinkMobileRequestSchema;
type SendVerificationLinkMobileRequestSchema = {
    active?: boolean;
    country_code?: string;
    phone?: string;
    primary?: boolean;
    verified?: boolean;
};
/** @returns {SessionExpiry} */
declare function SessionExpiry(): SessionExpiry;
type SessionExpiry = {
    duration?: number;
    is_rolling?: boolean;
    type?: string;
};
/** @returns {SessionListSuccess} */
declare function SessionListSuccess(): SessionListSuccess;
type SessionListSuccess = {
    sessions?: string[];
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
/** @returns {TokenRequestBodySchema} */
declare function TokenRequestBodySchema(): TokenRequestBodySchema;
type TokenRequestBodySchema = {
    token?: string;
};
/** @returns {UpdatePasswordRequestSchema} */
declare function UpdatePasswordRequestSchema(): UpdatePasswordRequestSchema;
type UpdatePasswordRequestSchema = {
    new_password?: string;
    old_password?: string;
};
/** @returns {UserObjectSchema} */
declare function UserObjectSchema(): UserObjectSchema;
type UserObjectSchema = {
    user?: UserSchema;
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
/** @returns {VerifyEmailForgotOtpRequestSchema} */
declare function VerifyEmailForgotOtpRequestSchema(): VerifyEmailForgotOtpRequestSchema;
type VerifyEmailForgotOtpRequestSchema = {
    email?: string;
    otp?: string;
};
/** @returns {VerifyEmailOtpRequestSchema} */
declare function VerifyEmailOtpRequestSchema(): VerifyEmailOtpRequestSchema;
type VerifyEmailOtpRequestSchema = {
    action?: string;
    email?: string;
    otp?: string;
    register_token?: string;
};
/** @returns {VerifyEmailOTPSuccess} */
declare function VerifyEmailOTPSuccess(): VerifyEmailOTPSuccess;
type VerifyEmailOTPSuccess = {
    user?: UserSchema;
    verify_email_link?: boolean;
};
/** @returns {VerifyEmailSuccess} */
declare function VerifyEmailSuccess(): VerifyEmailSuccess;
type VerifyEmailSuccess = {
    message?: string;
};
/** @returns {VerifyForgotOtpSuccess} */
declare function VerifyForgotOtpSuccess(): VerifyForgotOtpSuccess;
type VerifyForgotOtpSuccess = {
    forgot_token?: string;
    success?: boolean;
};
/** @returns {VerifyMobileForgotOtpRequestSchema} */
declare function VerifyMobileForgotOtpRequestSchema(): VerifyMobileForgotOtpRequestSchema;
type VerifyMobileForgotOtpRequestSchema = {
    otp?: string;
    request_id?: string;
};
/** @returns {VerifyMobileOTPSuccess} */
declare function VerifyMobileOTPSuccess(): VerifyMobileOTPSuccess;
type VerifyMobileOTPSuccess = {
    user?: UserSchema;
    verify_mobile_link?: boolean;
};
/** @returns {VerifyOtpRequestSchema} */
declare function VerifyOtpRequestSchema(): VerifyOtpRequestSchema;
type VerifyOtpRequestSchema = {
    otp?: string;
    register_token?: string;
    request_id?: string;
};
/** @returns {VerifyOtpSuccess} */
declare function VerifyOtpSuccess(): VerifyOtpSuccess;
type VerifyOtpSuccess = {
    register_token?: string;
    user?: UserSchema;
    user_exists?: boolean;
};
