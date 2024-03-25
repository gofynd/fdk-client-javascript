export = UserApplicationValidator;
/**
 * @typedef AddEmailParam
 * @property {UserApplicationModel.EditEmailRequestSchema} body
 */
/**
 * @typedef AddMobileNumberParam
 * @property {UserApplicationModel.EditMobileRequestSchema} body
 */
/**
 * @typedef DeleteEmailParam
 * @property {string} [platform] - ID of the application
 * @property {boolean} active - This is a boolean value to check if email ID is
 *   active 1. True - Email ID is active 2.False - Email ID is inactive
 * @property {boolean} primary - This is a boolean value to check if email ID is
 *   primary (main email ID) 1. True - Email ID is primary 2.False - Email ID is
 *   not primary
 * @property {boolean} verified - This is a boolean value to check if email ID
 *   is verified 1. True - Email ID is verified 2.False - Email ID is not verified yet
 * @property {string} email - The email ID to delete
 */
/**
 * @typedef DeleteMobileNumberParam
 * @property {string} [platform] - ID of the application
 * @property {boolean} active - This is a boolean value to check if mobile
 *   number is active 1.True - Number is active 2. False - Number is inactive
 * @property {boolean} primary - This is a boolean value to check if mobile
 *   number is primary number (main number) 1. True - Number is primary 2. False
 *   - Number is not primary
 * @property {boolean} verified - This is a boolean value to check if mobile
 *   number is verified 1. True - Number is verified 2.False - Number is not verified yet
 * @property {string} countryCode - Country code of the phone number, e.g. 91
 * @property {string} phone - Phone number
 */
/**
 * @typedef DeleteUserParam
 * @property {UserApplicationModel.DeleteApplicationUserRequestSchema} body
 */
/**
 * @typedef ForgotPasswordParam
 * @property {UserApplicationModel.ForgotPasswordRequestSchema} body
 */
/** @typedef GetListOfActiveSessionsParam */
/** @typedef GetLoggedInUserParam */
/**
 * @typedef GetPlatformConfigParam
 * @property {string} [name] - Name of the application, e.g. Fynd
 */
/**
 * @typedef GetUserAttributesParam
 * @property {string} [slug] - Filter by attribute slug.
 */
/** @typedef HasPasswordParam */
/**
 * @typedef LoginWithAppleIOSParam
 * @property {UserApplicationModel.OAuthRequestAppleSchema} body
 */
/**
 * @typedef LoginWithEmailAndPasswordParam
 * @property {UserApplicationModel.PasswordLoginRequestSchema} body
 */
/**
 * @typedef LoginWithFacebookParam
 * @property {UserApplicationModel.OAuthRequestSchema} body
 */
/**
 * @typedef LoginWithGoogleParam
 * @property {UserApplicationModel.OAuthRequestSchema} body
 */
/**
 * @typedef LoginWithGoogleAndroidParam
 * @property {UserApplicationModel.OAuthRequestSchema} body
 */
/**
 * @typedef LoginWithGoogleIOSParam
 * @property {UserApplicationModel.OAuthRequestSchema} body
 */
/**
 * @typedef LoginWithOTPParam
 * @property {UserApplicationModel.SendOtpRequestSchema} body
 */
/**
 * @typedef LoginWithTokenParam
 * @property {UserApplicationModel.TokenRequestBodySchema} body
 */
/** @typedef LogoutParam */
/**
 * @typedef RegisterWithFormParam
 * @property {UserApplicationModel.FormRegisterRequestSchema} body
 */
/**
 * @typedef ResetForgotPasswordParam
 * @property {UserApplicationModel.ForgotPasswordRequestSchema} body
 */
/**
 * @typedef SendForgotOTPOnEmailParam
 * @property {UserApplicationModel.SendEmailForgotOtpRequestSchema} body
 */
/**
 * @typedef SendForgotOTPOnMobileParam
 * @property {UserApplicationModel.SendMobileForgotOtpRequestSchema} body
 */
/**
 * @typedef SendOTPOnEmailParam
 * @property {UserApplicationModel.SendEmailOtpRequestSchema} body
 */
/**
 * @typedef SendOTPOnMobileParam
 * @property {UserApplicationModel.SendMobileOtpRequestSchema} body
 */
/**
 * @typedef SendResetPasswordEmailParam
 * @property {UserApplicationModel.SendResetPasswordEmailRequestSchema} body
 */
/**
 * @typedef SendResetTokenParam
 * @property {UserApplicationModel.CodeRequestBodySchema} body
 */
/**
 * @typedef SendVerificationLinkToEmailParam
 * @property {UserApplicationModel.EditEmailRequestSchema} body
 */
/**
 * @typedef SendVerificationLinkToMobileParam
 * @property {UserApplicationModel.SendVerificationLinkMobileRequestSchema} body
 */
/**
 * @typedef SetEmailAsPrimaryParam
 * @property {UserApplicationModel.EditEmailRequestSchema} body
 */
/**
 * @typedef SetMobileNumberAsPrimaryParam
 * @property {UserApplicationModel.SendVerificationLinkMobileRequestSchema} body
 */
/**
 * @typedef UpdatePasswordParam
 * @property {UserApplicationModel.UpdatePasswordRequestSchema} body
 */
/**
 * @typedef UpdateProfileParam
 * @property {UserApplicationModel.EditProfileRequestSchema} body
 */
/**
 * @typedef UpdateUserAttributesParam
 * @property {UserApplicationModel.UpdateUserAttributesRequest} body
 */
/**
 * @typedef UserExistsParam
 * @property {string} q - Email id or phone number of user
 */
/**
 * @typedef VerifyEmailParam
 * @property {UserApplicationModel.CodeRequestBodySchema} body
 */
/**
 * @typedef VerifyEmailForgotOTPParam
 * @property {UserApplicationModel.VerifyEmailForgotOtpRequestSchema} body
 */
/**
 * @typedef VerifyEmailOTPParam
 * @property {UserApplicationModel.VerifyEmailOtpRequestSchema} body
 */
/**
 * @typedef VerifyMobileParam
 * @property {UserApplicationModel.CodeRequestBodySchema} body
 */
/**
 * @typedef VerifyMobileForgotOTPParam
 * @property {UserApplicationModel.VerifyMobileForgotOtpRequestSchema} body
 */
/**
 * @typedef VerifyMobileOTPParam
 * @property {UserApplicationModel.VerifyOtpRequestSchema} body
 */
declare class UserApplicationValidator {
    /** @returns {AddEmailParam} */
    static addEmail(): AddEmailParam;
    /** @returns {AddMobileNumberParam} */
    static addMobileNumber(): AddMobileNumberParam;
    /** @returns {DeleteEmailParam} */
    static deleteEmail(): DeleteEmailParam;
    /** @returns {DeleteMobileNumberParam} */
    static deleteMobileNumber(): DeleteMobileNumberParam;
    /** @returns {DeleteUserParam} */
    static deleteUser(): DeleteUserParam;
    /** @returns {ForgotPasswordParam} */
    static forgotPassword(): ForgotPasswordParam;
    /** @returns {GetListOfActiveSessionsParam} */
    static getListOfActiveSessions(): any;
    /** @returns {GetLoggedInUserParam} */
    static getLoggedInUser(): any;
    /** @returns {GetPlatformConfigParam} */
    static getPlatformConfig(): GetPlatformConfigParam;
    /** @returns {GetUserAttributesParam} */
    static getUserAttributes(): GetUserAttributesParam;
    /** @returns {HasPasswordParam} */
    static hasPassword(): any;
    /** @returns {LoginWithAppleIOSParam} */
    static loginWithAppleIOS(): LoginWithAppleIOSParam;
    /** @returns {LoginWithEmailAndPasswordParam} */
    static loginWithEmailAndPassword(): LoginWithEmailAndPasswordParam;
    /** @returns {LoginWithFacebookParam} */
    static loginWithFacebook(): LoginWithFacebookParam;
    /** @returns {LoginWithGoogleParam} */
    static loginWithGoogle(): LoginWithGoogleParam;
    /** @returns {LoginWithGoogleAndroidParam} */
    static loginWithGoogleAndroid(): LoginWithGoogleAndroidParam;
    /** @returns {LoginWithGoogleIOSParam} */
    static loginWithGoogleIOS(): LoginWithGoogleIOSParam;
    /** @returns {LoginWithOTPParam} */
    static loginWithOTP(): LoginWithOTPParam;
    /** @returns {LoginWithTokenParam} */
    static loginWithToken(): LoginWithTokenParam;
    /** @returns {LogoutParam} */
    static logout(): any;
    /** @returns {RegisterWithFormParam} */
    static registerWithForm(): RegisterWithFormParam;
    /** @returns {ResetForgotPasswordParam} */
    static resetForgotPassword(): ResetForgotPasswordParam;
    /** @returns {SendForgotOTPOnEmailParam} */
    static sendForgotOTPOnEmail(): SendForgotOTPOnEmailParam;
    /** @returns {SendForgotOTPOnMobileParam} */
    static sendForgotOTPOnMobile(): SendForgotOTPOnMobileParam;
    /** @returns {SendOTPOnEmailParam} */
    static sendOTPOnEmail(): SendOTPOnEmailParam;
    /** @returns {SendOTPOnMobileParam} */
    static sendOTPOnMobile(): SendOTPOnMobileParam;
    /** @returns {SendResetPasswordEmailParam} */
    static sendResetPasswordEmail(): SendResetPasswordEmailParam;
    /** @returns {SendResetTokenParam} */
    static sendResetToken(): SendResetTokenParam;
    /** @returns {SendVerificationLinkToEmailParam} */
    static sendVerificationLinkToEmail(): SendVerificationLinkToEmailParam;
    /** @returns {SendVerificationLinkToMobileParam} */
    static sendVerificationLinkToMobile(): SendVerificationLinkToMobileParam;
    /** @returns {SetEmailAsPrimaryParam} */
    static setEmailAsPrimary(): SetEmailAsPrimaryParam;
    /** @returns {SetMobileNumberAsPrimaryParam} */
    static setMobileNumberAsPrimary(): SetMobileNumberAsPrimaryParam;
    /** @returns {UpdatePasswordParam} */
    static updatePassword(): UpdatePasswordParam;
    /** @returns {UpdateProfileParam} */
    static updateProfile(): UpdateProfileParam;
    /** @returns {UpdateUserAttributesParam} */
    static updateUserAttributes(): UpdateUserAttributesParam;
    /** @returns {UserExistsParam} */
    static userExists(): UserExistsParam;
    /** @returns {VerifyEmailParam} */
    static verifyEmail(): VerifyEmailParam;
    /** @returns {VerifyEmailForgotOTPParam} */
    static verifyEmailForgotOTP(): VerifyEmailForgotOTPParam;
    /** @returns {VerifyEmailOTPParam} */
    static verifyEmailOTP(): VerifyEmailOTPParam;
    /** @returns {VerifyMobileParam} */
    static verifyMobile(): VerifyMobileParam;
    /** @returns {VerifyMobileForgotOTPParam} */
    static verifyMobileForgotOTP(): VerifyMobileForgotOTPParam;
    /** @returns {VerifyMobileOTPParam} */
    static verifyMobileOTP(): VerifyMobileOTPParam;
}
declare namespace UserApplicationValidator {
    export { AddEmailParam, AddMobileNumberParam, DeleteEmailParam, DeleteMobileNumberParam, DeleteUserParam, ForgotPasswordParam, GetListOfActiveSessionsParam, GetLoggedInUserParam, GetPlatformConfigParam, GetUserAttributesParam, HasPasswordParam, LoginWithAppleIOSParam, LoginWithEmailAndPasswordParam, LoginWithFacebookParam, LoginWithGoogleParam, LoginWithGoogleAndroidParam, LoginWithGoogleIOSParam, LoginWithOTPParam, LoginWithTokenParam, LogoutParam, RegisterWithFormParam, ResetForgotPasswordParam, SendForgotOTPOnEmailParam, SendForgotOTPOnMobileParam, SendOTPOnEmailParam, SendOTPOnMobileParam, SendResetPasswordEmailParam, SendResetTokenParam, SendVerificationLinkToEmailParam, SendVerificationLinkToMobileParam, SetEmailAsPrimaryParam, SetMobileNumberAsPrimaryParam, UpdatePasswordParam, UpdateProfileParam, UpdateUserAttributesParam, UserExistsParam, VerifyEmailParam, VerifyEmailForgotOTPParam, VerifyEmailOTPParam, VerifyMobileParam, VerifyMobileForgotOTPParam, VerifyMobileOTPParam };
}
type AddEmailParam = {
    body: UserApplicationModel.EditEmailRequestSchema;
};
type AddMobileNumberParam = {
    body: UserApplicationModel.EditMobileRequestSchema;
};
type DeleteEmailParam = {
    /**
     * - ID of the application
     */
    platform?: string;
    /**
     * - This is a boolean value to check if email ID is
     * active 1. True - Email ID is active 2.False - Email ID is inactive
     */
    active: boolean;
    /**
     * - This is a boolean value to check if email ID is
     * primary (main email ID) 1. True - Email ID is primary 2.False - Email ID is
     * not primary
     */
    primary: boolean;
    /**
     * - This is a boolean value to check if email ID
     * is verified 1. True - Email ID is verified 2.False - Email ID is not verified yet
     */
    verified: boolean;
    /**
     * - The email ID to delete
     */
    email: string;
};
type DeleteMobileNumberParam = {
    /**
     * - ID of the application
     */
    platform?: string;
    /**
     * - This is a boolean value to check if mobile
     * number is active 1.True - Number is active 2. False - Number is inactive
     */
    active: boolean;
    /**
     * - This is a boolean value to check if mobile
     * number is primary number (main number) 1. True - Number is primary 2. False
     * - Number is not primary
     */
    primary: boolean;
    /**
     * - This is a boolean value to check if mobile
     * number is verified 1. True - Number is verified 2.False - Number is not verified yet
     */
    verified: boolean;
    /**
     * - Country code of the phone number, e.g. 91
     */
    countryCode: string;
    /**
     * - Phone number
     */
    phone: string;
};
type DeleteUserParam = {
    body: UserApplicationModel.DeleteApplicationUserRequestSchema;
};
type ForgotPasswordParam = {
    body: UserApplicationModel.ForgotPasswordRequestSchema;
};
type GetPlatformConfigParam = {
    /**
     * - Name of the application, e.g. Fynd
     */
    name?: string;
};
type GetUserAttributesParam = {
    /**
     * - Filter by attribute slug.
     */
    slug?: string;
};
type LoginWithAppleIOSParam = {
    body: UserApplicationModel.OAuthRequestAppleSchema;
};
type LoginWithEmailAndPasswordParam = {
    body: UserApplicationModel.PasswordLoginRequestSchema;
};
type LoginWithFacebookParam = {
    body: UserApplicationModel.OAuthRequestSchema;
};
type LoginWithGoogleParam = {
    body: UserApplicationModel.OAuthRequestSchema;
};
type LoginWithGoogleAndroidParam = {
    body: UserApplicationModel.OAuthRequestSchema;
};
type LoginWithGoogleIOSParam = {
    body: UserApplicationModel.OAuthRequestSchema;
};
type LoginWithOTPParam = {
    body: UserApplicationModel.SendOtpRequestSchema;
};
type LoginWithTokenParam = {
    body: UserApplicationModel.TokenRequestBodySchema;
};
type RegisterWithFormParam = {
    body: UserApplicationModel.FormRegisterRequestSchema;
};
type ResetForgotPasswordParam = {
    body: UserApplicationModel.ForgotPasswordRequestSchema;
};
type SendForgotOTPOnEmailParam = {
    body: UserApplicationModel.SendEmailForgotOtpRequestSchema;
};
type SendForgotOTPOnMobileParam = {
    body: UserApplicationModel.SendMobileForgotOtpRequestSchema;
};
type SendOTPOnEmailParam = {
    body: UserApplicationModel.SendEmailOtpRequestSchema;
};
type SendOTPOnMobileParam = {
    body: UserApplicationModel.SendMobileOtpRequestSchema;
};
type SendResetPasswordEmailParam = {
    body: UserApplicationModel.SendResetPasswordEmailRequestSchema;
};
type SendResetTokenParam = {
    body: UserApplicationModel.CodeRequestBodySchema;
};
type SendVerificationLinkToEmailParam = {
    body: UserApplicationModel.EditEmailRequestSchema;
};
type SendVerificationLinkToMobileParam = {
    body: UserApplicationModel.SendVerificationLinkMobileRequestSchema;
};
type SetEmailAsPrimaryParam = {
    body: UserApplicationModel.EditEmailRequestSchema;
};
type SetMobileNumberAsPrimaryParam = {
    body: UserApplicationModel.SendVerificationLinkMobileRequestSchema;
};
type UpdatePasswordParam = {
    body: UserApplicationModel.UpdatePasswordRequestSchema;
};
type UpdateProfileParam = {
    body: UserApplicationModel.EditProfileRequestSchema;
};
type UpdateUserAttributesParam = {
    body: UserApplicationModel.UpdateUserAttributesRequest;
};
type UserExistsParam = {
    /**
     * - Email id or phone number of user
     */
    q: string;
};
type VerifyEmailParam = {
    body: UserApplicationModel.CodeRequestBodySchema;
};
type VerifyEmailForgotOTPParam = {
    body: UserApplicationModel.VerifyEmailForgotOtpRequestSchema;
};
type VerifyEmailOTPParam = {
    body: UserApplicationModel.VerifyEmailOtpRequestSchema;
};
type VerifyMobileParam = {
    body: UserApplicationModel.CodeRequestBodySchema;
};
type VerifyMobileForgotOTPParam = {
    body: UserApplicationModel.VerifyMobileForgotOtpRequestSchema;
};
type VerifyMobileOTPParam = {
    body: UserApplicationModel.VerifyOtpRequestSchema;
};
type GetListOfActiveSessionsParam = any;
type GetLoggedInUserParam = any;
type HasPasswordParam = any;
type LogoutParam = any;
import UserApplicationModel = require("sdk/output/javascript/code/sdk/application/User/UserApplicationModel");
