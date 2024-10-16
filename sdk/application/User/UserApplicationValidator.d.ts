export = UserApplicationValidator;
/**
 * @typedef AddEmailParam
 * @property {string} [platform] - ID of the application.
 * @property {UserApplicationModel.EditEmailRequestSchema} body
 */
/**
 * @typedef AddMobileNumberParam
 * @property {string} [platform] - ID of the application.
 * @property {UserApplicationModel.EditMobileRequestSchema} body
 */
/**
 * @typedef DeleteEmailParam
 * @property {string} [platform] - ID of the application.
 * @property {boolean} active - Boolean value to check if email id is active 1.
 *   True - email id is active 2.False - email id is inactive.
 * @property {boolean} primary - Boolean value to check if email id is primary
 *   (main email id) 1. True - email id is primary 2.False - email id is not primary.
 * @property {boolean} verified - Boolean value to check if email id is verified
 *   1. True - email id is verified 2.False - email id is not verified yet.
 * @property {string} email - The email id to delete.
 */
/**
 * @typedef DeleteMobileNumberParam
 * @property {string} [platform] - ID of the application.
 * @property {boolean} active - This is a boolean value to check if mobile
 *   number is active 1.True - number is active 2. False - number is inactive.
 * @property {boolean} primary - This is a boolean value to check if mobile
 *   number is primary number (main number) 1. True - number is primary 2. False
 *   - number is not primary.
 * @property {boolean} verified - This is a boolean value to check if mobile
 *   number is verified 1. True - number is verified 2.False - number is not
 *   verified yet.
 * @property {string} countryCode - Country code of the phone number, e.g. 91.
 * @property {string} phone - Phone number.
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
 * @property {string} [name] - Name of the application, e.g. Fynd.
 */
/**
 * @typedef GetUserAttributesParam
 * @property {string} [slug] - Filter by attribute slug.
 */
/** @typedef HasPasswordParam */
/**
 * @typedef LoginWithAppleIOSParam
 * @property {string} [platform] - ID of the application.
 * @property {UserApplicationModel.OAuthRequestAppleSchema} body
 */
/**
 * @typedef LoginWithEmailAndPasswordParam
 * @property {UserApplicationModel.PasswordLoginRequestSchema} body
 */
/**
 * @typedef LoginWithFacebookParam
 * @property {string} [platform] - ID of the application.
 * @property {UserApplicationModel.OAuthRequestSchema} body
 */
/**
 * @typedef LoginWithGoogleParam
 * @property {string} [platform] - ID of the application.
 * @property {UserApplicationModel.OAuthRequestSchema} body
 */
/**
 * @typedef LoginWithGoogleAndroidParam
 * @property {string} [platform] - ID of the application.
 * @property {UserApplicationModel.OAuthRequestSchema} body
 */
/**
 * @typedef LoginWithGoogleIOSParam
 * @property {string} [platform] - ID of the application.
 * @property {UserApplicationModel.OAuthRequestSchema} body
 */
/**
 * @typedef LoginWithOTPParam
 * @property {string} [platform] - ID of the application.
 * @property {UserApplicationModel.SendOtpRequestSchema} body
 */
/**
 * @typedef LoginWithTokenParam
 * @property {UserApplicationModel.TokenRequestBodySchema} body
 */
/** @typedef LogoutParam */
/**
 * @typedef RegisterWithFormParam
 * @property {string} [platform] - ID of the application.
 * @property {UserApplicationModel.FormRegisterRequestSchema} body
 */
/**
 * @typedef ResetForgotPasswordParam
 * @property {UserApplicationModel.ForgotPasswordRequestSchema} body
 */
/**
 * @typedef SendForgotOTPOnEmailParam
 * @property {string} [platform] - ID of the application.
 * @property {UserApplicationModel.SendEmailForgotOtpRequestSchema} body
 */
/**
 * @typedef SendForgotOTPOnMobileParam
 * @property {string} [platform] - ID of the application.
 * @property {UserApplicationModel.SendMobileForgotOtpRequestSchema} body
 */
/**
 * @typedef SendOTPOnEmailParam
 * @property {string} [platform] - ID of the application.
 * @property {UserApplicationModel.SendEmailOtpRequestSchema} body
 */
/**
 * @typedef SendOTPOnMobileParam
 * @property {string} [platform] - ID of the application.
 * @property {UserApplicationModel.SendMobileOtpRequestSchema} body
 */
/**
 * @typedef SendResetPasswordEmailParam
 * @property {string} [platform] - ID of the application.
 * @property {UserApplicationModel.SendResetPasswordEmailRequestSchema} body
 */
/**
 * @typedef SendResetPasswordMobileParam
 * @property {string} [platform] - ID of the application.
 * @property {UserApplicationModel.SendResetPasswordMobileRequestSchema} body
 */
/**
 * @typedef SendResetTokenParam
 * @property {UserApplicationModel.CodeRequestBodySchema} body
 */
/**
 * @typedef SendVerificationLinkToEmailParam
 * @property {string} [platform] - ID of the application.
 * @property {UserApplicationModel.EditEmailRequestSchema} body
 */
/**
 * @typedef SendVerificationLinkToMobileParam
 * @property {string} [platform] - ID of the application.
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
 * @property {string} [platform] - ID of the application.
 * @property {UserApplicationModel.EditProfileRequestSchema} body
 */
/**
 * @typedef UpdateUserAttributesParam
 * @property {UserApplicationModel.UpdateUserAttributes} body
 */
/**
 * @typedef UserExistsParam
 * @property {string} q - Email id or phone number of user.
 */
/**
 * @typedef VerifyEmailParam
 * @property {UserApplicationModel.CodeRequestBodySchema} body
 */
/**
 * @typedef VerifyEmailForgotOTPParam
 * @property {string} [platform] - ID of the application.
 * @property {UserApplicationModel.VerifyEmailForgotOtpRequestSchema} body
 */
/**
 * @typedef VerifyEmailOTPParam
 * @property {string} [platform] - ID of the application.
 * @property {UserApplicationModel.VerifyEmailOtpRequestSchema} body
 */
/**
 * @typedef VerifyMobileParam
 * @property {UserApplicationModel.CodeRequestBodySchema} body
 */
/**
 * @typedef VerifyMobileForgotOTPParam
 * @property {string} [platform] - ID of the application.
 * @property {UserApplicationModel.VerifyMobileForgotOtpRequestSchema} body
 */
/**
 * @typedef VerifyMobileOTPParam
 * @property {string} [platform] - ID of the application.
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
    /** @returns {SendResetPasswordMobileParam} */
    static sendResetPasswordMobile(): SendResetPasswordMobileParam;
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
    export { AddEmailParam, AddMobileNumberParam, DeleteEmailParam, DeleteMobileNumberParam, DeleteUserParam, ForgotPasswordParam, GetListOfActiveSessionsParam, GetLoggedInUserParam, GetPlatformConfigParam, GetUserAttributesParam, HasPasswordParam, LoginWithAppleIOSParam, LoginWithEmailAndPasswordParam, LoginWithFacebookParam, LoginWithGoogleParam, LoginWithGoogleAndroidParam, LoginWithGoogleIOSParam, LoginWithOTPParam, LoginWithTokenParam, LogoutParam, RegisterWithFormParam, ResetForgotPasswordParam, SendForgotOTPOnEmailParam, SendForgotOTPOnMobileParam, SendOTPOnEmailParam, SendOTPOnMobileParam, SendResetPasswordEmailParam, SendResetPasswordMobileParam, SendResetTokenParam, SendVerificationLinkToEmailParam, SendVerificationLinkToMobileParam, SetEmailAsPrimaryParam, SetMobileNumberAsPrimaryParam, UpdatePasswordParam, UpdateProfileParam, UpdateUserAttributesParam, UserExistsParam, VerifyEmailParam, VerifyEmailForgotOTPParam, VerifyEmailOTPParam, VerifyMobileParam, VerifyMobileForgotOTPParam, VerifyMobileOTPParam };
}
type AddEmailParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.EditEmailRequestSchema;
};
type AddMobileNumberParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.EditMobileRequestSchema;
};
type DeleteEmailParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    /**
     * - Boolean value to check if email id is active 1.
     * True - email id is active 2.False - email id is inactive.
     */
    active: boolean;
    /**
     * - Boolean value to check if email id is primary
     * (main email id) 1. True - email id is primary 2.False - email id is not primary.
     */
    primary: boolean;
    /**
     * - Boolean value to check if email id is verified
     * 1. True - email id is verified 2.False - email id is not verified yet.
     */
    verified: boolean;
    /**
     * - The email id to delete.
     */
    email: string;
};
type DeleteMobileNumberParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    /**
     * - This is a boolean value to check if mobile
     * number is active 1.True - number is active 2. False - number is inactive.
     */
    active: boolean;
    /**
     * - This is a boolean value to check if mobile
     * number is primary number (main number) 1. True - number is primary 2. False
     * - number is not primary.
     */
    primary: boolean;
    /**
     * - This is a boolean value to check if mobile
     * number is verified 1. True - number is verified 2.False - number is not
     * verified yet.
     */
    verified: boolean;
    /**
     * - Country code of the phone number, e.g. 91.
     */
    countryCode: string;
    /**
     * - Phone number.
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
     * - Name of the application, e.g. Fynd.
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
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.OAuthRequestAppleSchema;
};
type LoginWithEmailAndPasswordParam = {
    body: UserApplicationModel.PasswordLoginRequestSchema;
};
type LoginWithFacebookParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.OAuthRequestSchema;
};
type LoginWithGoogleParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.OAuthRequestSchema;
};
type LoginWithGoogleAndroidParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.OAuthRequestSchema;
};
type LoginWithGoogleIOSParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.OAuthRequestSchema;
};
type LoginWithOTPParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.SendOtpRequestSchema;
};
type LoginWithTokenParam = {
    body: UserApplicationModel.TokenRequestBodySchema;
};
type RegisterWithFormParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.FormRegisterRequestSchema;
};
type ResetForgotPasswordParam = {
    body: UserApplicationModel.ForgotPasswordRequestSchema;
};
type SendForgotOTPOnEmailParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.SendEmailForgotOtpRequestSchema;
};
type SendForgotOTPOnMobileParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.SendMobileForgotOtpRequestSchema;
};
type SendOTPOnEmailParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.SendEmailOtpRequestSchema;
};
type SendOTPOnMobileParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.SendMobileOtpRequestSchema;
};
type SendResetPasswordEmailParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.SendResetPasswordEmailRequestSchema;
};
type SendResetPasswordMobileParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.SendResetPasswordMobileRequestSchema;
};
type SendResetTokenParam = {
    body: UserApplicationModel.CodeRequestBodySchema;
};
type SendVerificationLinkToEmailParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.EditEmailRequestSchema;
};
type SendVerificationLinkToMobileParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
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
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.EditProfileRequestSchema;
};
type UpdateUserAttributesParam = {
    body: UserApplicationModel.UpdateUserAttributes;
};
type UserExistsParam = {
    /**
     * - Email id or phone number of user.
     */
    q: string;
};
type VerifyEmailParam = {
    body: UserApplicationModel.CodeRequestBodySchema;
};
type VerifyEmailForgotOTPParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.VerifyEmailForgotOtpRequestSchema;
};
type VerifyEmailOTPParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.VerifyEmailOtpRequestSchema;
};
type VerifyMobileParam = {
    body: UserApplicationModel.CodeRequestBodySchema;
};
type VerifyMobileForgotOTPParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.VerifyMobileForgotOtpRequestSchema;
};
type VerifyMobileOTPParam = {
    /**
     * - ID of the application.
     */
    platform?: string;
    body: UserApplicationModel.VerifyOtpRequestSchema;
};
type GetListOfActiveSessionsParam = any;
type GetLoggedInUserParam = any;
type HasPasswordParam = any;
type LogoutParam = any;
import UserApplicationModel = require("./UserApplicationModel");
