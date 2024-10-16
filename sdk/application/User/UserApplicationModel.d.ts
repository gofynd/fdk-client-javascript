export = UserApplicationModel;
/**
 * @typedef UpdateUserAttributes
 * @property {Object} [attributes] - Describes the request structure to update
 *   the user attribute.
 */
/**
 * @typedef UserAttributes
 * @property {Object} [attributes] - Describes the structure of user attribute.
 */
/**
 * @typedef DeleteApplicationUserRequestSchema
 * @property {string} [user_id] - User id for the application user.
 * @property {string} [reason] - Reason to delete the application user.
 * @property {string} [reason_id] - Reason id of request to delete the application user .
 * @property {string} [request_id] - ID of request to delete the application user .
 * @property {string} [otp] - OTP to verify the delete application user request.
 */
/**
 * @typedef EditEmailRequestSchema
 * @property {string} [email] - Email of the user.
 */
/**
 * @typedef SendVerificationLinkMobileRequestSchema
 * @property {boolean} [verified] - Boolean to specify if the phone number is
 *   verified or not.
 * @property {boolean} [active] - Boolean to specify if the phone number is active or not.
 * @property {string} [country_code] - Country code for the phone number.
 * @property {string} [phone] - Phone number.
 * @property {boolean} [primary] - Boolean to specify if the phone number is
 *   primary or not.
 */
/**
 * @typedef EditMobileRequestSchema
 * @property {string} [country_code] - Country code for the phone number.
 * @property {string} [phone] - Phone number of user.
 */
/**
 * @typedef EditProfileRequestSchema
 * @property {boolean} [encrypt_otp] - Set to true if you want to encrypt the OTP.
 * @property {string} [first_name] - First name of the application user.
 * @property {string} [last_name] - Last name of the application user.
 * @property {EditProfileMobileSchema} [mobile]
 * @property {string} [country_code] - Country code for the phone number.
 * @property {string} [email] - Email id of user.
 * @property {string} [gender] - Gender of user.
 * @property {string} [dob] - Date of birth of user.
 * @property {string} [profile_pic_url] - Profile picture of user.
 * @property {string} [android_hash] - Unique hash value.
 * @property {string} [sender] - Identity of the sender.
 * @property {string} [register_token] - Unique temporary registration of the user.
 */
/**
 * @typedef EditProfileMobileSchema
 * @property {string} [phone] - Phone number of user.
 * @property {string} [country_code] - Country code for the phone number.
 */
/**
 * @typedef SendEmailOtpRequestSchema
 * @property {string} [email] - Email of a user to send email OTP.
 * @property {string} [action] - Action to specify if to send or resent the OTP.
 * @property {string} [token] - Token to validate the request.
 * @property {string} [register_token] - Unique temporary registration of the user.
 */
/**
 * @typedef SendEmailForgotOtpRequestSchema
 * @property {string} [email] - Email of a user to send email OTP.
 * @property {string} [action] - Action to specify if to send or resent the OTP.
 * @property {string} [token] - Token to validate the request.
 */
/**
 * @typedef VerifyEmailOtpRequestSchema
 * @property {string} [email] - Email of a user to verify OTP.
 * @property {string} [action] - Action to verify the send or resent OTP.
 * @property {string} [register_token] - Unique temporary registration of the user.
 * @property {string} [otp] - OTP for verification.
 */
/**
 * @typedef VerifyEmailForgotOtpRequestSchema
 * @property {string} [email] - Email id of user.
 * @property {string} [otp] - OTP for verification.
 */
/**
 * @typedef VerifyOtpRequestSchema
 * @property {string} [request_id] - Unique request id for the OTP sent to mobile number.
 * @property {string} [register_token] - Unique temporary registration of the user.
 * @property {string} [otp] - OTP for verification.
 */
/**
 * @typedef VerifyMobileForgotOtpRequestSchema
 * @property {string} [request_id] - Unique request id for the OTP.
 * @property {string} [otp] - OTP for verification.
 */
/**
 * @typedef SendMobileOtpRequestSchema
 * @property {boolean} [encrypt_otp] - Set to true if you want to encrypt the OTP.
 * @property {string} [mobile] - Mobile number of user.
 * @property {string} [country_code] - Country code for the phone number.
 * @property {string} [action] - Action to specify if to send or resent the OTP.
 * @property {string} [token] - Token to validate the request.
 * @property {string} [android_hash] - Unique hash value.
 * @property {string} [force] - Force verify the OTP.
 */
/**
 * @typedef SendMobileForgotOtpRequestSchema
 * @property {string} [mobile] - Phone number of user.
 * @property {string} [country_code] - Country code for the phone number.
 * @property {string} [action] - Action to specify if to send or resent the OTP.
 * @property {string} [token] - Token to validate the request.
 * @property {string} [android_hash] - Unique hash value.
 */
/**
 * @typedef UpdatePasswordRequestSchema
 * @property {string} [old_password] - Old password.
 * @property {string} [new_password] - New password.
 */
/**
 * @typedef FormRegisterRequestSchema
 * @property {string} [first_name] - First name of the application user.
 * @property {string} [last_name] - Last name of the application user.
 * @property {string} [gender] - Gender of user.
 * @property {string} [email] - Email of user.
 * @property {string} [password] - Password of user.
 * @property {FormRegisterRequestSchemaPhone} [phone]
 * @property {string} [register_token] - Unique registration token of user.
 */
/**
 * @typedef TokenRequestBodySchema
 * @property {string} [token] - Unique token.
 */
/**
 * @typedef ForgotPasswordRequestSchema
 * @property {string} [code] - Unique code to verify request.
 * @property {string} [password] - Password of user.
 */
/**
 * @typedef CodeRequestBodySchema
 * @property {string} [code] - Unique code to verify request.
 */
/**
 * @typedef SendResetPasswordEmailRequestSchema
 * @property {string} [email] - Email id of user.
 */
/**
 * @typedef SendResetPasswordMobileRequestSchema
 * @property {string} [country_code] - Country code for the phone number.
 * @property {string} [mobile] - Phone number of user.
 */
/**
 * @typedef PasswordLoginRequestSchema
 * @property {string} [password] - Password of user.
 * @property {string} [username] - Username of user.
 */
/**
 * @typedef SendOtpRequestSchema
 * @property {boolean} [encrypt_otp] - Eet to true if you want to encrypt the OTP.
 * @property {string} [country_code] - Country code for the phone number.
 * @property {string} [mobile] - Phone number.
 * @property {string} [android_hash] - Unique hash value.
 */
/**
 * @typedef OAuthRequestSchema
 * @property {boolean} [is_signed_in] - Boolean to specify if the user is signed in .
 * @property {OAuthRequestSchemaOauth2} [oauth2]
 * @property {OAuthRequestSchemaProfile} [profile]
 */
/**
 * @typedef OAuthRequestAppleSchema
 * @property {string} [user_identifier] - Unique user identifier.
 * @property {OAuthRequestAppleSchemaOauth} [oauth]
 * @property {OAuthRequestAppleSchemaProfile} [profile]
 */
/**
 * @typedef UserObjectSchema
 * @property {UserSchema} [user]
 */
/**
 * @typedef AuthSuccess
 * @property {string} [register_token] - Unique registration token for user.
 * @property {boolean} [user_exists] - Boolean which specifies if user is registered.
 * @property {UserSchema} [user]
 */
/**
 * @typedef UserExistsDetails
 * @property {boolean} [user_exists] - Boolean which specifies if user is
 *   registered or not.
 */
/**
 * @typedef SendOtp
 * @property {number} [resend_timer] - Time after which opt can be resent.
 * @property {string} [resend_token] - Unique token to identify the OTP send
 *   request and resend the token.
 * @property {boolean} [success] - Specify if the OTP is successfully sent.
 * @property {string} [request_id] - Unique request id for the OTP.
 * @property {string} [message] - Message to specify the OTP send status. Eg.
 *   OTP sent, failed to send OTP etc.
 * @property {string} [mobile] - Phone number of user.
 * @property {string} [country_code] - Country code for the phone number.
 * @property {string} [email] - Email id of user.
 * @property {string} [resend_email_token] - Unique token to identify the OTP
 *   send request and resend the token on email.
 * @property {string} [register_token] - Unique registration token for user.
 * @property {boolean} [verify_email_otp] - If email OTP verification is
 *   mandatory for registration.
 * @property {boolean} [verify_mobile_otp] - If mobile OTP verification is
 *   mandatory for registration.
 * @property {boolean} [user_exists] - If user is registered or not.
 */
/**
 * @typedef ProfileEditSuccess
 * @property {UserSchema} [user]
 * @property {string} [register_token] - Unique registration token for user.
 * @property {string} [resend_email_token] - Unique token to identify the
 *   request for OTP verification in case of unverified email.
 * @property {boolean} [user_exists] - If user is registered or not.
 * @property {boolean} [verify_email_link] - Whether to send a link to verify
 *   the registered email id of the user.
 * @property {boolean} [verify_email_otp] - Whether to send a OTP to verify the
 *   registered email id of the user.
 * @property {boolean} [verify_mobile_otp] - Whether to send a OTP to verify the
 *   registered phone of the user.
 * @property {string} [email] - Email id of user.
 * @property {string} [request_id] - A random uuid string used to track the request.
 * @property {string} [country_code] - The country specific prefix for the phone number.
 * @property {string} [mobile] - The user's mobile number without the country code.
 * @property {boolean} [success] - Whether the operation was successful.
 * @property {string} [message] - Information about the operation's result.
 * @property {number} [resend_timer] - Time in seconds before an request can be resent.
 * @property {string} [resend_token] - A token used to authorize the resending of request.
 */
/**
 * @typedef LoginSuccess
 * @property {UserSchema} [user]
 * @property {string} [request_id] - A random uuid string used to track the send
 *   OTP response.
 * @property {string} [register_token] - A token used for registration purposes.
 */
/**
 * @typedef ResetForgotPasswordSuccess
 * @property {boolean} [success] - Whether the password reset operation was successful.
 */
/**
 * @typedef VerifyOtpSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [user_exists] - Whether the user already exists.
 * @property {string} [register_token] - A token used for registration purposes.
 */
/**
 * @typedef VerifyForgotOtpSuccess
 * @property {boolean} [success] - Whether the OTP verification was successful.
 * @property {string} [forgot_token] - A token used for resetting the forgotten password.
 */
/**
 * @typedef ResetPasswordSuccess
 * @property {string} [status] - Status of the password reset operation.
 */
/**
 * @typedef RegisterFormSuccess
 * @property {string} [email] - The email address provided during registration.
 * @property {number} [resend_timer] - The time in seconds before an OTP can be resent.
 * @property {string} [resend_token] - A token used to authorize the resending of an OTP.
 * @property {string} [resend_email_token] - A token used to authorize the
 *   resending of an OTP via email.
 * @property {string} [register_token] - A token used for completing the
 *   registration process.
 * @property {boolean} [success] - A boolean value indicating whether the
 *   registration operation was successful.
 * @property {string} [request_id] - A random uuid string used to track the
 *   registration response.
 * @property {string} [message] - A string containing additional information
 *   about the operation's result.
 * @property {string} [mobile] - The user's phone mobile without the country code.
 * @property {string} [country_code] - The country specific prefix for the phone number.
 * @property {boolean} [verify_email_otp] - Whether email OTP verification is required.
 * @property {boolean} [verify_mobile_otp] - Whether mobile OTP verification is required.
 * @property {boolean} [user_exists] - Whether the user already exists.
 */
/**
 * @typedef VerifyEmailSuccess
 * @property {string} [message] - Result of the email verification process.
 */
/**
 * @typedef HasPasswordSuccess
 * @property {number} [result] - An integer value indicating whether the user
 *   has set a password (1 for true, 0 for false).
 */
/**
 * @typedef LogoutSuccess
 * @property {boolean} [logout] - Whether the logout operation was successful.
 */
/**
 * @typedef DeleteUserSuccess
 * @property {boolean} [success] - Whether the user deletion operation was successful.
 */
/**
 * @typedef SendOtpSuccess
 * @property {number} [resend_timer] - The time in seconds before an OTP can be resent.
 * @property {string} [resend_token] - A token used to authorize the resending of an OTP.
 * @property {string} [register_token] - A token used for completing the
 *   registration process.
 * @property {boolean} [success] - Whether the OTP send operation was successful.
 * @property {string} [request_id] - A random uuid string used to track the OTP
 *   send response.
 * @property {string} [message] - Additional information about the operation's result.
 * @property {string} [mobile] - The user's mobile number without the country code.
 * @property {string} [country_code] - The country specific prefix for the phone number.
 */
/**
 * @typedef EmailOtpSuccess
 * @property {boolean} [success] - Whether the OTP send operation was successful.
 * @property {string} [resend_email_token] - A token used to authorize the
 *   resending of an OTP via email.
 */
/**
 * @typedef SessionListSuccess
 * @property {string[]} [sessions] - An array of active session identifiers.
 */
/**
 * @typedef VerifyMobileOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_mobile_link] - Whether the mobile number
 *   verification link was successful.
 */
/**
 * @typedef VerifyEmailOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_email_link] - Whether the email verification link
 *   was successful.
 */
/**
 * @typedef SendMobileVerifyLinkSuccess
 * @property {boolean} [verify_mobile_link] - Whether the mobile verification
 *   link was successfully sent.
 */
/**
 * @typedef SendEmailVerifyLinkSuccess
 * @property {boolean} [verify_email_link] - Whether the email verification link
 *   was successfully sent.
 */
/**
 * @typedef APIError
 * @property {string} [code] - The error code representing the type of error.
 * @property {string} [message] - A descriptive message providing more details
 *   about the error.
 * @property {string} [info] - A link to the error code description.
 * @property {string} [request_id] - A random uuid string used to track the api request.
 * @property {string} [error] - The error message or stack trace.
 * @property {Object} [meta] - Additional metadata associated with the error.
 * @property {boolean} [authenticated] - Whether the user is authenticated.
 */
/**
 * @typedef FormRegisterRequestSchemaPhone
 * @property {string} [country_code] - Country code for mobile number.
 * @property {string} [mobile] - The user's mobile number without the country code.
 */
/**
 * @typedef OAuthRequestSchemaOauth2
 * @property {string} [access_token] - The access token issued by the oauth2 provider.
 * @property {number} [expiry] - The expiry time of the access token in
 *   milliseconds since epoch.
 * @property {string} [refresh_token] - The refresh token issued by the oauth2 provider.
 */
/**
 * @typedef OAuthRequestSchemaProfile
 * @property {string} [last_name] - The last name of the user.
 * @property {string} [image] - The url of the user's profile picture.
 * @property {string} [id] - The unique identifier of the user.
 * @property {string} [email] - The email address of the user.
 * @property {string} [full_name] - The full name of the user.
 * @property {string} [first_name] - The first name of the user.
 */
/**
 * @typedef OAuthRequestAppleSchemaOauth
 * @property {string} [identity_token] - The identity token issued by apple.
 */
/**
 * @typedef OAuthRequestAppleSchemaProfile
 * @property {string} [last_name] - The last name of the user.
 * @property {string} [full_name] - The full name of the user.
 * @property {string} [first_name] - The first name of the user.
 */
/**
 * @typedef PlatformSchema
 * @property {string} [display] - The display name of the platform.
 * @property {LookAndFeel} [look_and_feel]
 * @property {string} [updated_at] - The date and time when the configuration
 *   was last updated.
 * @property {boolean} [active] - Is the application config active or not .
 * @property {boolean} [forgot_password] - Forgot password option to be given or
 *   not to application user.
 * @property {Login} [login]
 * @property {boolean} [skip_captcha] - Skip the captcha or not .
 * @property {string} [name] - Name of the application.
 * @property {MetaSchema} [meta]
 * @property {string} [_id] - Unique document id of the platform config.
 * @property {Social} [social]
 * @property {RequiredFields} [required_fields]
 * @property {RegisterRequiredFields} [register_required_fields]
 * @property {boolean} [skip_login] - Whether to skip the login or not .
 * @property {FlashCard} [flash_card]
 * @property {string} [subtext] - Text to be shown at the top of the flash card
 *   like login to fynd, login to tira.
 * @property {SocialTokens} [social_tokens]
 * @property {string} [created_at] - When was the application platform config
 *   document was created.
 * @property {boolean} [register] - Whether to show the registration page on
 *   landing page or not.
 * @property {string} [mobile_image] - Image to be shown on registration page
 *   for mobile devices.
 * @property {string} [desktop_image] - Image to be shown on registration page
 *   for desktop devices.
 * @property {number} [delete_account_day] - Number of days after which the user
 *   account will be deleted.
 * @property {DeleteAccountReasons[]} [delete_account_reasons] - List of reasons
 *   you can set to ask user when account is being deleted from application.
 * @property {DeleteAccountConsent} [delete_account_consent]
 * @property {SessionExpiry} [session_config]
 * @property {number} [__v] - Version of the document.
 */
/**
 * @typedef LookAndFeel
 * @property {string} [card_position] - Position of the card eg right, left,
 *   top-right etc.
 * @property {string} [background_color] - Background colour of the card.
 */
/**
 * @typedef Login
 * @property {boolean} [password] - Application is providing login with password or not.
 * @property {boolean} [otp] - Application is providing login with OTP or not.
 */
/**
 * @typedef MetaSchema
 * @property {boolean} [fynd_default] - One of the custom field that you are
 *   storing in meta.
 */
/**
 * @typedef Social
 * @property {boolean} [account_kit] - Is accountkit social login active for
 *   application or not.
 * @property {boolean} [facebook] - Is facebook social login active for
 *   application or not .
 * @property {boolean} [google] - Is google social login active for application or not .
 * @property {boolean} [apple] - Is apple social login active for application or not.
 */
/**
 * @typedef RequiredFields
 * @property {PlatformEmail} [email]
 * @property {PlatformMobile} [mobile]
 */
/**
 * @typedef PlatformEmail
 * @property {boolean} [is_required] - Is email mandatory for user to register
 *   on a application or not.
 * @property {string} [level] - Level of email mandatory hard is mandatory and
 *   soft is optional.
 */
/**
 * @typedef PlatformMobile
 * @property {boolean} [is_required] - Is mobile mandatory for user to register
 *   on a application or not.
 * @property {string} [level] - Level of mobile mandatory hard is mandatory and
 *   soft is optional.
 */
/**
 * @typedef RegisterRequiredFields
 * @property {RegisterRequiredFieldsEmail} [email]
 * @property {RegisterRequiredFieldsMobile} [mobile]
 */
/**
 * @typedef RegisterRequiredFieldsEmail
 * @property {boolean} [is_required] - Is email mandatory for user to register
 *   on a application or not.
 * @property {string} [level] - Level of email mandatory hard is mandatory and
 *   soft is optional.
 */
/**
 * @typedef RegisterRequiredFieldsMobile
 * @property {boolean} [is_required] - Is mobile mandatory for user to register
 *   on a application or not.
 * @property {string} [level] - Level of mobile mandatory hard is mandatory and
 *   soft is optional.
 */
/**
 * @typedef FlashCard
 * @property {string} [text] - Text to be shown in the flash card.
 * @property {string} [text_color] - Text colour for the text in the flash card.
 * @property {string} [background_color] - Background colour of the text to be
 *   shown on the flash card.
 */
/**
 * @typedef SocialTokens
 * @property {Facebook} [facebook]
 * @property {Accountkit} [accountkit]
 * @property {Google} [google]
 */
/**
 * @typedef DeleteAccountReasons
 * @property {string} [reason_text] - Text of the reason to be shown to user.
 * @property {string} [reason_id] - Unique id of the reason .
 * @property {boolean} [show_text_area] - A boolean whether to show text area or not.
 */
/**
 * @typedef DeleteAccountConsent
 * @property {string} [consent_text] - Consent text to be shown to user.
 */
/**
 * @typedef Facebook
 * @property {string} [app_id] - App id of the credentials facebook.
 */
/**
 * @typedef Accountkit
 * @property {string} [app_id] - App id of the credentials account kit.
 */
/**
 * @typedef Google
 * @property {string} [app_id] - App id of the credentials google.
 */
/**
 * @typedef SessionExpiry
 * @property {number} [duration] - Number of days or hours based on type till
 *   which the session can be rolled back.
 * @property {string} [type] - Days or hours the type of time for session rollback.
 * @property {boolean} [is_rolling] - Whether session needs to be rollback or not.
 */
/**
 * @typedef UserSchema
 * @property {string} [application_id] - Application id of the user.
 * @property {string} [user_id] - Unique id of the user.
 * @property {string} [first_name] - First name of the user.
 * @property {Object} [meta] - Metadata of the user, used to store details about the user
 * @property {string} [last_name] - Last name of the user
 * @property {PhoneNumber[]} [phone_numbers] - List of phone numbers of the user.
 * @property {Email[]} [emails] - List of email addresses of the user.
 * @property {string} [gender] - Gender of the user.
 * @property {string} [dob] - Date of birth of the user.
 * @property {boolean} [active] - Is the user active.
 * @property {string} [profile_pic_url] - URL of the profile picture of the user.
 * @property {string} [username] - Unique username of the user.
 * @property {string} [account_type] - Type of user (user, programmatic (created
 *   by system))
 * @property {string} [_id] - Unique id of the user.
 * @property {string} [created_at] - Date and time of user creation.
 * @property {string} [updated_at] - Date and time of user update.
 * @property {string} [external_id] - Unique id referencing any user external
 *   documents (jio).
 * @property {string} [rr_id] - Unique id referencing any user external documents.
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
declare class UserApplicationModel {
}
declare namespace UserApplicationModel {
    export { UpdateUserAttributes, UserAttributes, DeleteApplicationUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, SendEmailForgotOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyEmailForgotOtpRequestSchema, VerifyOtpRequestSchema, VerifyMobileForgotOtpRequestSchema, SendMobileOtpRequestSchema, SendMobileForgotOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, UserExistsDetails, SendOtp, ProfileEditSuccess, LoginSuccess, ResetForgotPasswordSuccess, VerifyOtpSuccess, VerifyForgotOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, DeleteUserSuccess, SendOtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, APIError, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UserSchema, PhoneNumber, Email };
}
/** @returns {UpdateUserAttributes} */
declare function UpdateUserAttributes(): UpdateUserAttributes;
type UpdateUserAttributes = {
    /**
     * - Describes the request structure to update
     * the user attribute.
     */
    attributes?: any;
};
/** @returns {UserAttributes} */
declare function UserAttributes(): UserAttributes;
type UserAttributes = {
    /**
     * - Describes the structure of user attribute.
     */
    attributes?: any;
};
/** @returns {DeleteApplicationUserRequestSchema} */
declare function DeleteApplicationUserRequestSchema(): DeleteApplicationUserRequestSchema;
type DeleteApplicationUserRequestSchema = {
    /**
     * - User id for the application user.
     */
    user_id?: string;
    /**
     * - Reason to delete the application user.
     */
    reason?: string;
    /**
     * - Reason id of request to delete the application user .
     */
    reason_id?: string;
    /**
     * - ID of request to delete the application user .
     */
    request_id?: string;
    /**
     * - OTP to verify the delete application user request.
     */
    otp?: string;
};
/** @returns {EditEmailRequestSchema} */
declare function EditEmailRequestSchema(): EditEmailRequestSchema;
type EditEmailRequestSchema = {
    /**
     * - Email of the user.
     */
    email?: string;
};
/** @returns {SendVerificationLinkMobileRequestSchema} */
declare function SendVerificationLinkMobileRequestSchema(): SendVerificationLinkMobileRequestSchema;
type SendVerificationLinkMobileRequestSchema = {
    /**
     * - Boolean to specify if the phone number is
     * verified or not.
     */
    verified?: boolean;
    /**
     * - Boolean to specify if the phone number is active or not.
     */
    active?: boolean;
    /**
     * - Country code for the phone number.
     */
    country_code?: string;
    /**
     * - Phone number.
     */
    phone?: string;
    /**
     * - Boolean to specify if the phone number is
     * primary or not.
     */
    primary?: boolean;
};
/** @returns {EditMobileRequestSchema} */
declare function EditMobileRequestSchema(): EditMobileRequestSchema;
type EditMobileRequestSchema = {
    /**
     * - Country code for the phone number.
     */
    country_code?: string;
    /**
     * - Phone number of user.
     */
    phone?: string;
};
/** @returns {EditProfileRequestSchema} */
declare function EditProfileRequestSchema(): EditProfileRequestSchema;
type EditProfileRequestSchema = {
    /**
     * - Set to true if you want to encrypt the OTP.
     */
    encrypt_otp?: boolean;
    /**
     * - First name of the application user.
     */
    first_name?: string;
    /**
     * - Last name of the application user.
     */
    last_name?: string;
    mobile?: EditProfileMobileSchema;
    /**
     * - Country code for the phone number.
     */
    country_code?: string;
    /**
     * - Email id of user.
     */
    email?: string;
    /**
     * - Gender of user.
     */
    gender?: string;
    /**
     * - Date of birth of user.
     */
    dob?: string;
    /**
     * - Profile picture of user.
     */
    profile_pic_url?: string;
    /**
     * - Unique hash value.
     */
    android_hash?: string;
    /**
     * - Identity of the sender.
     */
    sender?: string;
    /**
     * - Unique temporary registration of the user.
     */
    register_token?: string;
};
/** @returns {EditProfileMobileSchema} */
declare function EditProfileMobileSchema(): EditProfileMobileSchema;
type EditProfileMobileSchema = {
    /**
     * - Phone number of user.
     */
    phone?: string;
    /**
     * - Country code for the phone number.
     */
    country_code?: string;
};
/** @returns {SendEmailOtpRequestSchema} */
declare function SendEmailOtpRequestSchema(): SendEmailOtpRequestSchema;
type SendEmailOtpRequestSchema = {
    /**
     * - Email of a user to send email OTP.
     */
    email?: string;
    /**
     * - Action to specify if to send or resent the OTP.
     */
    action?: string;
    /**
     * - Token to validate the request.
     */
    token?: string;
    /**
     * - Unique temporary registration of the user.
     */
    register_token?: string;
};
/** @returns {SendEmailForgotOtpRequestSchema} */
declare function SendEmailForgotOtpRequestSchema(): SendEmailForgotOtpRequestSchema;
type SendEmailForgotOtpRequestSchema = {
    /**
     * - Email of a user to send email OTP.
     */
    email?: string;
    /**
     * - Action to specify if to send or resent the OTP.
     */
    action?: string;
    /**
     * - Token to validate the request.
     */
    token?: string;
};
/** @returns {VerifyEmailOtpRequestSchema} */
declare function VerifyEmailOtpRequestSchema(): VerifyEmailOtpRequestSchema;
type VerifyEmailOtpRequestSchema = {
    /**
     * - Email of a user to verify OTP.
     */
    email?: string;
    /**
     * - Action to verify the send or resent OTP.
     */
    action?: string;
    /**
     * - Unique temporary registration of the user.
     */
    register_token?: string;
    /**
     * - OTP for verification.
     */
    otp?: string;
};
/** @returns {VerifyEmailForgotOtpRequestSchema} */
declare function VerifyEmailForgotOtpRequestSchema(): VerifyEmailForgotOtpRequestSchema;
type VerifyEmailForgotOtpRequestSchema = {
    /**
     * - Email id of user.
     */
    email?: string;
    /**
     * - OTP for verification.
     */
    otp?: string;
};
/** @returns {VerifyOtpRequestSchema} */
declare function VerifyOtpRequestSchema(): VerifyOtpRequestSchema;
type VerifyOtpRequestSchema = {
    /**
     * - Unique request id for the OTP sent to mobile number.
     */
    request_id?: string;
    /**
     * - Unique temporary registration of the user.
     */
    register_token?: string;
    /**
     * - OTP for verification.
     */
    otp?: string;
};
/** @returns {VerifyMobileForgotOtpRequestSchema} */
declare function VerifyMobileForgotOtpRequestSchema(): VerifyMobileForgotOtpRequestSchema;
type VerifyMobileForgotOtpRequestSchema = {
    /**
     * - Unique request id for the OTP.
     */
    request_id?: string;
    /**
     * - OTP for verification.
     */
    otp?: string;
};
/** @returns {SendMobileOtpRequestSchema} */
declare function SendMobileOtpRequestSchema(): SendMobileOtpRequestSchema;
type SendMobileOtpRequestSchema = {
    /**
     * - Set to true if you want to encrypt the OTP.
     */
    encrypt_otp?: boolean;
    /**
     * - Mobile number of user.
     */
    mobile?: string;
    /**
     * - Country code for the phone number.
     */
    country_code?: string;
    /**
     * - Action to specify if to send or resent the OTP.
     */
    action?: string;
    /**
     * - Token to validate the request.
     */
    token?: string;
    /**
     * - Unique hash value.
     */
    android_hash?: string;
    /**
     * - Force verify the OTP.
     */
    force?: string;
};
/** @returns {SendMobileForgotOtpRequestSchema} */
declare function SendMobileForgotOtpRequestSchema(): SendMobileForgotOtpRequestSchema;
type SendMobileForgotOtpRequestSchema = {
    /**
     * - Phone number of user.
     */
    mobile?: string;
    /**
     * - Country code for the phone number.
     */
    country_code?: string;
    /**
     * - Action to specify if to send or resent the OTP.
     */
    action?: string;
    /**
     * - Token to validate the request.
     */
    token?: string;
    /**
     * - Unique hash value.
     */
    android_hash?: string;
};
/** @returns {UpdatePasswordRequestSchema} */
declare function UpdatePasswordRequestSchema(): UpdatePasswordRequestSchema;
type UpdatePasswordRequestSchema = {
    /**
     * - Old password.
     */
    old_password?: string;
    /**
     * - New password.
     */
    new_password?: string;
};
/** @returns {FormRegisterRequestSchema} */
declare function FormRegisterRequestSchema(): FormRegisterRequestSchema;
type FormRegisterRequestSchema = {
    /**
     * - First name of the application user.
     */
    first_name?: string;
    /**
     * - Last name of the application user.
     */
    last_name?: string;
    /**
     * - Gender of user.
     */
    gender?: string;
    /**
     * - Email of user.
     */
    email?: string;
    /**
     * - Password of user.
     */
    password?: string;
    phone?: FormRegisterRequestSchemaPhone;
    /**
     * - Unique registration token of user.
     */
    register_token?: string;
};
/** @returns {TokenRequestBodySchema} */
declare function TokenRequestBodySchema(): TokenRequestBodySchema;
type TokenRequestBodySchema = {
    /**
     * - Unique token.
     */
    token?: string;
};
/** @returns {ForgotPasswordRequestSchema} */
declare function ForgotPasswordRequestSchema(): ForgotPasswordRequestSchema;
type ForgotPasswordRequestSchema = {
    /**
     * - Unique code to verify request.
     */
    code?: string;
    /**
     * - Password of user.
     */
    password?: string;
};
/** @returns {CodeRequestBodySchema} */
declare function CodeRequestBodySchema(): CodeRequestBodySchema;
type CodeRequestBodySchema = {
    /**
     * - Unique code to verify request.
     */
    code?: string;
};
/** @returns {SendResetPasswordEmailRequestSchema} */
declare function SendResetPasswordEmailRequestSchema(): SendResetPasswordEmailRequestSchema;
type SendResetPasswordEmailRequestSchema = {
    /**
     * - Email id of user.
     */
    email?: string;
};
/** @returns {SendResetPasswordMobileRequestSchema} */
declare function SendResetPasswordMobileRequestSchema(): SendResetPasswordMobileRequestSchema;
type SendResetPasswordMobileRequestSchema = {
    /**
     * - Country code for the phone number.
     */
    country_code?: string;
    /**
     * - Phone number of user.
     */
    mobile?: string;
};
/** @returns {PasswordLoginRequestSchema} */
declare function PasswordLoginRequestSchema(): PasswordLoginRequestSchema;
type PasswordLoginRequestSchema = {
    /**
     * - Password of user.
     */
    password?: string;
    /**
     * - Username of user.
     */
    username?: string;
};
/** @returns {SendOtpRequestSchema} */
declare function SendOtpRequestSchema(): SendOtpRequestSchema;
type SendOtpRequestSchema = {
    /**
     * - Eet to true if you want to encrypt the OTP.
     */
    encrypt_otp?: boolean;
    /**
     * - Country code for the phone number.
     */
    country_code?: string;
    /**
     * - Phone number.
     */
    mobile?: string;
    /**
     * - Unique hash value.
     */
    android_hash?: string;
};
/** @returns {OAuthRequestSchema} */
declare function OAuthRequestSchema(): OAuthRequestSchema;
type OAuthRequestSchema = {
    /**
     * - Boolean to specify if the user is signed in .
     */
    is_signed_in?: boolean;
    oauth2?: OAuthRequestSchemaOauth2;
    profile?: OAuthRequestSchemaProfile;
};
/** @returns {OAuthRequestAppleSchema} */
declare function OAuthRequestAppleSchema(): OAuthRequestAppleSchema;
type OAuthRequestAppleSchema = {
    /**
     * - Unique user identifier.
     */
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
    /**
     * - Unique registration token for user.
     */
    register_token?: string;
    /**
     * - Boolean which specifies if user is registered.
     */
    user_exists?: boolean;
    user?: UserSchema;
};
/** @returns {UserExistsDetails} */
declare function UserExistsDetails(): UserExistsDetails;
type UserExistsDetails = {
    /**
     * - Boolean which specifies if user is
     * registered or not.
     */
    user_exists?: boolean;
};
/** @returns {SendOtp} */
declare function SendOtp(): SendOtp;
type SendOtp = {
    /**
     * - Time after which opt can be resent.
     */
    resend_timer?: number;
    /**
     * - Unique token to identify the OTP send
     * request and resend the token.
     */
    resend_token?: string;
    /**
     * - Specify if the OTP is successfully sent.
     */
    success?: boolean;
    /**
     * - Unique request id for the OTP.
     */
    request_id?: string;
    /**
     * - Message to specify the OTP send status. Eg.
     * OTP sent, failed to send OTP etc.
     */
    message?: string;
    /**
     * - Phone number of user.
     */
    mobile?: string;
    /**
     * - Country code for the phone number.
     */
    country_code?: string;
    /**
     * - Email id of user.
     */
    email?: string;
    /**
     * - Unique token to identify the OTP
     * send request and resend the token on email.
     */
    resend_email_token?: string;
    /**
     * - Unique registration token for user.
     */
    register_token?: string;
    /**
     * - If email OTP verification is
     * mandatory for registration.
     */
    verify_email_otp?: boolean;
    /**
     * - If mobile OTP verification is
     * mandatory for registration.
     */
    verify_mobile_otp?: boolean;
    /**
     * - If user is registered or not.
     */
    user_exists?: boolean;
};
/** @returns {ProfileEditSuccess} */
declare function ProfileEditSuccess(): ProfileEditSuccess;
type ProfileEditSuccess = {
    user?: UserSchema;
    /**
     * - Unique registration token for user.
     */
    register_token?: string;
    /**
     * - Unique token to identify the
     * request for OTP verification in case of unverified email.
     */
    resend_email_token?: string;
    /**
     * - If user is registered or not.
     */
    user_exists?: boolean;
    /**
     * - Whether to send a link to verify
     * the registered email id of the user.
     */
    verify_email_link?: boolean;
    /**
     * - Whether to send a OTP to verify the
     * registered email id of the user.
     */
    verify_email_otp?: boolean;
    /**
     * - Whether to send a OTP to verify the
     * registered phone of the user.
     */
    verify_mobile_otp?: boolean;
    /**
     * - Email id of user.
     */
    email?: string;
    /**
     * - A random uuid string used to track the request.
     */
    request_id?: string;
    /**
     * - The country specific prefix for the phone number.
     */
    country_code?: string;
    /**
     * - The user's mobile number without the country code.
     */
    mobile?: string;
    /**
     * - Whether the operation was successful.
     */
    success?: boolean;
    /**
     * - Information about the operation's result.
     */
    message?: string;
    /**
     * - Time in seconds before an request can be resent.
     */
    resend_timer?: number;
    /**
     * - A token used to authorize the resending of request.
     */
    resend_token?: string;
};
/** @returns {LoginSuccess} */
declare function LoginSuccess(): LoginSuccess;
type LoginSuccess = {
    user?: UserSchema;
    /**
     * - A random uuid string used to track the send
     * OTP response.
     */
    request_id?: string;
    /**
     * - A token used for registration purposes.
     */
    register_token?: string;
};
/** @returns {ResetForgotPasswordSuccess} */
declare function ResetForgotPasswordSuccess(): ResetForgotPasswordSuccess;
type ResetForgotPasswordSuccess = {
    /**
     * - Whether the password reset operation was successful.
     */
    success?: boolean;
};
/** @returns {VerifyOtpSuccess} */
declare function VerifyOtpSuccess(): VerifyOtpSuccess;
type VerifyOtpSuccess = {
    user?: UserSchema;
    /**
     * - Whether the user already exists.
     */
    user_exists?: boolean;
    /**
     * - A token used for registration purposes.
     */
    register_token?: string;
};
/** @returns {VerifyForgotOtpSuccess} */
declare function VerifyForgotOtpSuccess(): VerifyForgotOtpSuccess;
type VerifyForgotOtpSuccess = {
    /**
     * - Whether the OTP verification was successful.
     */
    success?: boolean;
    /**
     * - A token used for resetting the forgotten password.
     */
    forgot_token?: string;
};
/** @returns {ResetPasswordSuccess} */
declare function ResetPasswordSuccess(): ResetPasswordSuccess;
type ResetPasswordSuccess = {
    /**
     * - Status of the password reset operation.
     */
    status?: string;
};
/** @returns {RegisterFormSuccess} */
declare function RegisterFormSuccess(): RegisterFormSuccess;
type RegisterFormSuccess = {
    /**
     * - The email address provided during registration.
     */
    email?: string;
    /**
     * - The time in seconds before an OTP can be resent.
     */
    resend_timer?: number;
    /**
     * - A token used to authorize the resending of an OTP.
     */
    resend_token?: string;
    /**
     * - A token used to authorize the
     * resending of an OTP via email.
     */
    resend_email_token?: string;
    /**
     * - A token used for completing the
     * registration process.
     */
    register_token?: string;
    /**
     * - A boolean value indicating whether the
     * registration operation was successful.
     */
    success?: boolean;
    /**
     * - A random uuid string used to track the
     * registration response.
     */
    request_id?: string;
    /**
     * - A string containing additional information
     * about the operation's result.
     */
    message?: string;
    /**
     * - The user's phone mobile without the country code.
     */
    mobile?: string;
    /**
     * - The country specific prefix for the phone number.
     */
    country_code?: string;
    /**
     * - Whether email OTP verification is required.
     */
    verify_email_otp?: boolean;
    /**
     * - Whether mobile OTP verification is required.
     */
    verify_mobile_otp?: boolean;
    /**
     * - Whether the user already exists.
     */
    user_exists?: boolean;
};
/** @returns {VerifyEmailSuccess} */
declare function VerifyEmailSuccess(): VerifyEmailSuccess;
type VerifyEmailSuccess = {
    /**
     * - Result of the email verification process.
     */
    message?: string;
};
/** @returns {HasPasswordSuccess} */
declare function HasPasswordSuccess(): HasPasswordSuccess;
type HasPasswordSuccess = {
    /**
     * - An integer value indicating whether the user
     * has set a password (1 for true, 0 for false).
     */
    result?: number;
};
/** @returns {LogoutSuccess} */
declare function LogoutSuccess(): LogoutSuccess;
type LogoutSuccess = {
    /**
     * - Whether the logout operation was successful.
     */
    logout?: boolean;
};
/** @returns {DeleteUserSuccess} */
declare function DeleteUserSuccess(): DeleteUserSuccess;
type DeleteUserSuccess = {
    /**
     * - Whether the user deletion operation was successful.
     */
    success?: boolean;
};
/** @returns {SendOtpSuccess} */
declare function SendOtpSuccess(): SendOtpSuccess;
type SendOtpSuccess = {
    /**
     * - The time in seconds before an OTP can be resent.
     */
    resend_timer?: number;
    /**
     * - A token used to authorize the resending of an OTP.
     */
    resend_token?: string;
    /**
     * - A token used for completing the
     * registration process.
     */
    register_token?: string;
    /**
     * - Whether the OTP send operation was successful.
     */
    success?: boolean;
    /**
     * - A random uuid string used to track the OTP
     * send response.
     */
    request_id?: string;
    /**
     * - Additional information about the operation's result.
     */
    message?: string;
    /**
     * - The user's mobile number without the country code.
     */
    mobile?: string;
    /**
     * - The country specific prefix for the phone number.
     */
    country_code?: string;
};
/** @returns {EmailOtpSuccess} */
declare function EmailOtpSuccess(): EmailOtpSuccess;
type EmailOtpSuccess = {
    /**
     * - Whether the OTP send operation was successful.
     */
    success?: boolean;
    /**
     * - A token used to authorize the
     * resending of an OTP via email.
     */
    resend_email_token?: string;
};
/** @returns {SessionListSuccess} */
declare function SessionListSuccess(): SessionListSuccess;
type SessionListSuccess = {
    /**
     * - An array of active session identifiers.
     */
    sessions?: string[];
};
/** @returns {VerifyMobileOTPSuccess} */
declare function VerifyMobileOTPSuccess(): VerifyMobileOTPSuccess;
type VerifyMobileOTPSuccess = {
    user?: UserSchema;
    /**
     * - Whether the mobile number
     * verification link was successful.
     */
    verify_mobile_link?: boolean;
};
/** @returns {VerifyEmailOTPSuccess} */
declare function VerifyEmailOTPSuccess(): VerifyEmailOTPSuccess;
type VerifyEmailOTPSuccess = {
    user?: UserSchema;
    /**
     * - Whether the email verification link
     * was successful.
     */
    verify_email_link?: boolean;
};
/** @returns {SendMobileVerifyLinkSuccess} */
declare function SendMobileVerifyLinkSuccess(): SendMobileVerifyLinkSuccess;
type SendMobileVerifyLinkSuccess = {
    /**
     * - Whether the mobile verification
     * link was successfully sent.
     */
    verify_mobile_link?: boolean;
};
/** @returns {SendEmailVerifyLinkSuccess} */
declare function SendEmailVerifyLinkSuccess(): SendEmailVerifyLinkSuccess;
type SendEmailVerifyLinkSuccess = {
    /**
     * - Whether the email verification link
     * was successfully sent.
     */
    verify_email_link?: boolean;
};
/** @returns {APIError} */
declare function APIError(): APIError;
type APIError = {
    /**
     * - The error code representing the type of error.
     */
    code?: string;
    /**
     * - A descriptive message providing more details
     * about the error.
     */
    message?: string;
    /**
     * - A link to the error code description.
     */
    info?: string;
    /**
     * - A random uuid string used to track the api request.
     */
    request_id?: string;
    /**
     * - The error message or stack trace.
     */
    error?: string;
    /**
     * - Additional metadata associated with the error.
     */
    meta?: any;
    /**
     * - Whether the user is authenticated.
     */
    authenticated?: boolean;
};
/** @returns {FormRegisterRequestSchemaPhone} */
declare function FormRegisterRequestSchemaPhone(): FormRegisterRequestSchemaPhone;
type FormRegisterRequestSchemaPhone = {
    /**
     * - Country code for mobile number.
     */
    country_code?: string;
    /**
     * - The user's mobile number without the country code.
     */
    mobile?: string;
};
/** @returns {OAuthRequestSchemaOauth2} */
declare function OAuthRequestSchemaOauth2(): OAuthRequestSchemaOauth2;
type OAuthRequestSchemaOauth2 = {
    /**
     * - The access token issued by the oauth2 provider.
     */
    access_token?: string;
    /**
     * - The expiry time of the access token in
     * milliseconds since epoch.
     */
    expiry?: number;
    /**
     * - The refresh token issued by the oauth2 provider.
     */
    refresh_token?: string;
};
/** @returns {OAuthRequestSchemaProfile} */
declare function OAuthRequestSchemaProfile(): OAuthRequestSchemaProfile;
type OAuthRequestSchemaProfile = {
    /**
     * - The last name of the user.
     */
    last_name?: string;
    /**
     * - The url of the user's profile picture.
     */
    image?: string;
    /**
     * - The unique identifier of the user.
     */
    id?: string;
    /**
     * - The email address of the user.
     */
    email?: string;
    /**
     * - The full name of the user.
     */
    full_name?: string;
    /**
     * - The first name of the user.
     */
    first_name?: string;
};
/** @returns {OAuthRequestAppleSchemaOauth} */
declare function OAuthRequestAppleSchemaOauth(): OAuthRequestAppleSchemaOauth;
type OAuthRequestAppleSchemaOauth = {
    /**
     * - The identity token issued by apple.
     */
    identity_token?: string;
};
/** @returns {OAuthRequestAppleSchemaProfile} */
declare function OAuthRequestAppleSchemaProfile(): OAuthRequestAppleSchemaProfile;
type OAuthRequestAppleSchemaProfile = {
    /**
     * - The last name of the user.
     */
    last_name?: string;
    /**
     * - The full name of the user.
     */
    full_name?: string;
    /**
     * - The first name of the user.
     */
    first_name?: string;
};
/** @returns {PlatformSchema} */
declare function PlatformSchema(): PlatformSchema;
type PlatformSchema = {
    /**
     * - The display name of the platform.
     */
    display?: string;
    look_and_feel?: LookAndFeel;
    /**
     * - The date and time when the configuration
     * was last updated.
     */
    updated_at?: string;
    /**
     * - Is the application config active or not .
     */
    active?: boolean;
    /**
     * - Forgot password option to be given or
     * not to application user.
     */
    forgot_password?: boolean;
    login?: Login;
    /**
     * - Skip the captcha or not .
     */
    skip_captcha?: boolean;
    /**
     * - Name of the application.
     */
    name?: string;
    meta?: MetaSchema;
    /**
     * - Unique document id of the platform config.
     */
    _id?: string;
    social?: Social;
    required_fields?: RequiredFields;
    register_required_fields?: RegisterRequiredFields;
    /**
     * - Whether to skip the login or not .
     */
    skip_login?: boolean;
    flash_card?: FlashCard;
    /**
     * - Text to be shown at the top of the flash card
     * like login to fynd, login to tira.
     */
    subtext?: string;
    social_tokens?: SocialTokens;
    /**
     * - When was the application platform config
     * document was created.
     */
    created_at?: string;
    /**
     * - Whether to show the registration page on
     * landing page or not.
     */
    register?: boolean;
    /**
     * - Image to be shown on registration page
     * for mobile devices.
     */
    mobile_image?: string;
    /**
     * - Image to be shown on registration page
     * for desktop devices.
     */
    desktop_image?: string;
    /**
     * - Number of days after which the user
     * account will be deleted.
     */
    delete_account_day?: number;
    /**
     * - List of reasons
     * you can set to ask user when account is being deleted from application.
     */
    delete_account_reasons?: DeleteAccountReasons[];
    delete_account_consent?: DeleteAccountConsent;
    session_config?: SessionExpiry;
    /**
     * - Version of the document.
     */
    __v?: number;
};
/** @returns {LookAndFeel} */
declare function LookAndFeel(): LookAndFeel;
type LookAndFeel = {
    /**
     * - Position of the card eg right, left,
     * top-right etc.
     */
    card_position?: string;
    /**
     * - Background colour of the card.
     */
    background_color?: string;
};
/** @returns {Login} */
declare function Login(): Login;
type Login = {
    /**
     * - Application is providing login with password or not.
     */
    password?: boolean;
    /**
     * - Application is providing login with OTP or not.
     */
    otp?: boolean;
};
/** @returns {MetaSchema} */
declare function MetaSchema(): MetaSchema;
type MetaSchema = {
    /**
     * - One of the custom field that you are
     * storing in meta.
     */
    fynd_default?: boolean;
};
/** @returns {Social} */
declare function Social(): Social;
type Social = {
    /**
     * - Is accountkit social login active for
     * application or not.
     */
    account_kit?: boolean;
    /**
     * - Is facebook social login active for
     * application or not .
     */
    facebook?: boolean;
    /**
     * - Is google social login active for application or not .
     */
    google?: boolean;
    /**
     * - Is apple social login active for application or not.
     */
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
    /**
     * - Is email mandatory for user to register
     * on a application or not.
     */
    is_required?: boolean;
    /**
     * - Level of email mandatory hard is mandatory and
     * soft is optional.
     */
    level?: string;
};
/** @returns {PlatformMobile} */
declare function PlatformMobile(): PlatformMobile;
type PlatformMobile = {
    /**
     * - Is mobile mandatory for user to register
     * on a application or not.
     */
    is_required?: boolean;
    /**
     * - Level of mobile mandatory hard is mandatory and
     * soft is optional.
     */
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
    /**
     * - Is email mandatory for user to register
     * on a application or not.
     */
    is_required?: boolean;
    /**
     * - Level of email mandatory hard is mandatory and
     * soft is optional.
     */
    level?: string;
};
/** @returns {RegisterRequiredFieldsMobile} */
declare function RegisterRequiredFieldsMobile(): RegisterRequiredFieldsMobile;
type RegisterRequiredFieldsMobile = {
    /**
     * - Is mobile mandatory for user to register
     * on a application or not.
     */
    is_required?: boolean;
    /**
     * - Level of mobile mandatory hard is mandatory and
     * soft is optional.
     */
    level?: string;
};
/** @returns {FlashCard} */
declare function FlashCard(): FlashCard;
type FlashCard = {
    /**
     * - Text to be shown in the flash card.
     */
    text?: string;
    /**
     * - Text colour for the text in the flash card.
     */
    text_color?: string;
    /**
     * - Background colour of the text to be
     * shown on the flash card.
     */
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
    /**
     * - Text of the reason to be shown to user.
     */
    reason_text?: string;
    /**
     * - Unique id of the reason .
     */
    reason_id?: string;
    /**
     * - A boolean whether to show text area or not.
     */
    show_text_area?: boolean;
};
/** @returns {DeleteAccountConsent} */
declare function DeleteAccountConsent(): DeleteAccountConsent;
type DeleteAccountConsent = {
    /**
     * - Consent text to be shown to user.
     */
    consent_text?: string;
};
/** @returns {Facebook} */
declare function Facebook(): Facebook;
type Facebook = {
    /**
     * - App id of the credentials facebook.
     */
    app_id?: string;
};
/** @returns {Accountkit} */
declare function Accountkit(): Accountkit;
type Accountkit = {
    /**
     * - App id of the credentials account kit.
     */
    app_id?: string;
};
/** @returns {Google} */
declare function Google(): Google;
type Google = {
    /**
     * - App id of the credentials google.
     */
    app_id?: string;
};
/** @returns {SessionExpiry} */
declare function SessionExpiry(): SessionExpiry;
type SessionExpiry = {
    /**
     * - Number of days or hours based on type till
     * which the session can be rolled back.
     */
    duration?: number;
    /**
     * - Days or hours the type of time for session rollback.
     */
    type?: string;
    /**
     * - Whether session needs to be rollback or not.
     */
    is_rolling?: boolean;
};
/** @returns {UserSchema} */
declare function UserSchema(): UserSchema;
type UserSchema = {
    /**
     * - Application id of the user.
     */
    application_id?: string;
    /**
     * - Unique id of the user.
     */
    user_id?: string;
    /**
     * - First name of the user.
     */
    first_name?: string;
    /**
     * - Metadata of the user, used to store details about the user
     */
    meta?: any;
    /**
     * - Last name of the user
     */
    last_name?: string;
    /**
     * - List of phone numbers of the user.
     */
    phone_numbers?: PhoneNumber[];
    /**
     * - List of email addresses of the user.
     */
    emails?: Email[];
    /**
     * - Gender of the user.
     */
    gender?: string;
    /**
     * - Date of birth of the user.
     */
    dob?: string;
    /**
     * - Is the user active.
     */
    active?: boolean;
    /**
     * - URL of the profile picture of the user.
     */
    profile_pic_url?: string;
    /**
     * - Unique username of the user.
     */
    username?: string;
    /**
     * - Type of user (user, programmatic (created
     * by system))
     */
    account_type?: string;
    /**
     * - Unique id of the user.
     */
    _id?: string;
    /**
     * - Date and time of user creation.
     */
    created_at?: string;
    /**
     * - Date and time of user update.
     */
    updated_at?: string;
    /**
     * - Unique id referencing any user external
     * documents (jio).
     */
    external_id?: string;
    /**
     * - Unique id referencing any user external documents.
     */
    rr_id?: string;
};
/** @returns {PhoneNumber} */
declare function PhoneNumber(): PhoneNumber;
type PhoneNumber = {
    /**
     * - Phone number of the user.
     */
    phone?: string;
    /**
     * - Country code for mobile number.
     */
    country_code?: number;
    /**
     * - Is the phone number active.
     */
    active?: boolean;
    /**
     * - Is it a primary phone number.
     */
    primary?: boolean;
    /**
     * - Is the phone number verified.
     */
    verified?: boolean;
};
/** @returns {Email} */
declare function Email(): Email;
type Email = {
    /**
     * - Email address.
     */
    email?: string;
    /**
     * - Is the email active.
     */
    active?: boolean;
    /**
     * - Is it a primary email.
     */
    primary?: boolean;
    /**
     * - Is the email verified.
     */
    verified?: boolean;
};
