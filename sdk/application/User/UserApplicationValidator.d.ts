export = UserApplicationValidator;
/**
 * @typedef AddEmailParam
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.EditEmailRequestSchema} body
 */
/**
 * @typedef AddMobileNumberParam
 * @property {string} [platform] - ID of the application
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
/** @typedef HasPasswordParam */
/**
 * @typedef LoginWithAppleIOSParam
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.OAuthRequestAppleSchema} body
 */
/**
 * @typedef LoginWithEmailAndPasswordParam
 * @property {UserApplicationModel.PasswordLoginRequestSchema} body
 */
/**
 * @typedef LoginWithFacebookParam
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.OAuthRequestSchema} body
 */
/**
 * @typedef LoginWithGoogleParam
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.OAuthRequestSchema} body
 */
/**
 * @typedef LoginWithGoogleAndroidParam
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.OAuthRequestSchema} body
 */
/**
 * @typedef LoginWithGoogleIOSParam
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.OAuthRequestSchema} body
 */
/**
 * @typedef LoginWithOTPParam
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.SendOtpRequestSchema} body
 */
/**
 * @typedef LoginWithTokenParam
 * @property {UserApplicationModel.TokenRequestBodySchema} body
 */
/** @typedef LogoutParam */
/**
 * @typedef RegisterWithFormParam
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.FormRegisterRequestSchema} body
 */
/**
 * @typedef SendOTPOnEmailParam
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.SendEmailOtpRequestSchema} body
 */
/**
 * @typedef SendOTPOnMobileParam
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.SendMobileOtpRequestSchema} body
 */
/**
 * @typedef SendResetPasswordEmailParam
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.SendResetPasswordEmailRequestSchema} body
 */
/**
 * @typedef SendResetPasswordMobileParam
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.SendResetPasswordMobileRequestSchema} body
 */
/**
 * @typedef SendResetTokenParam
 * @property {UserApplicationModel.CodeRequestBodySchema} body
 */
/**
 * @typedef SendVerificationLinkToEmailParam
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.EditEmailRequestSchema} body
 */
/**
 * @typedef SendVerificationLinkToMobileParam
 * @property {string} [platform] - ID of the application
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
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.EditProfileRequestSchema} body
 */
/**
 * @typedef VerifyEmailParam
 * @property {UserApplicationModel.CodeRequestBodySchema} body
 */
/**
 * @typedef VerifyEmailOTPParam
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.VerifyEmailOtpRequestSchema} body
 */
/**
 * @typedef VerifyMobileParam
 * @property {UserApplicationModel.CodeRequestBodySchema} body
 */
/**
 * @typedef VerifyMobileOTPParam
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.VerifyOtpRequestSchema} body
 */
declare class UserApplicationValidator {
    /** @returns {addEmail} */
    static addEmail(): addEmail;
    /** @returns {addMobileNumber} */
    static addMobileNumber(): addMobileNumber;
    /** @returns {deleteEmail} */
    static deleteEmail(): deleteEmail;
    /** @returns {deleteMobileNumber} */
    static deleteMobileNumber(): deleteMobileNumber;
    /** @returns {deleteUser} */
    static deleteUser(): deleteUser;
    /** @returns {forgotPassword} */
    static forgotPassword(): forgotPassword;
    /** @returns {getListOfActiveSessions} */
    static getListOfActiveSessions(): getListOfActiveSessions;
    /** @returns {getLoggedInUser} */
    static getLoggedInUser(): getLoggedInUser;
    /** @returns {getPlatformConfig} */
    static getPlatformConfig(): getPlatformConfig;
    /** @returns {hasPassword} */
    static hasPassword(): hasPassword;
    /** @returns {loginWithAppleIOS} */
    static loginWithAppleIOS(): loginWithAppleIOS;
    /** @returns {loginWithEmailAndPassword} */
    static loginWithEmailAndPassword(): loginWithEmailAndPassword;
    /** @returns {loginWithFacebook} */
    static loginWithFacebook(): loginWithFacebook;
    /** @returns {loginWithGoogle} */
    static loginWithGoogle(): loginWithGoogle;
    /** @returns {loginWithGoogleAndroid} */
    static loginWithGoogleAndroid(): loginWithGoogleAndroid;
    /** @returns {loginWithGoogleIOS} */
    static loginWithGoogleIOS(): loginWithGoogleIOS;
    /** @returns {loginWithOTP} */
    static loginWithOTP(): loginWithOTP;
    /** @returns {loginWithToken} */
    static loginWithToken(): loginWithToken;
    /** @returns {logout} */
    static logout(): logout;
    /** @returns {registerWithForm} */
    static registerWithForm(): registerWithForm;
    /** @returns {sendOTPOnEmail} */
    static sendOTPOnEmail(): sendOTPOnEmail;
    /** @returns {sendOTPOnMobile} */
    static sendOTPOnMobile(): sendOTPOnMobile;
    /** @returns {sendResetPasswordEmail} */
    static sendResetPasswordEmail(): sendResetPasswordEmail;
    /** @returns {sendResetPasswordMobile} */
    static sendResetPasswordMobile(): sendResetPasswordMobile;
    /** @returns {sendResetToken} */
    static sendResetToken(): sendResetToken;
    /** @returns {sendVerificationLinkToEmail} */
    static sendVerificationLinkToEmail(): sendVerificationLinkToEmail;
    /** @returns {sendVerificationLinkToMobile} */
    static sendVerificationLinkToMobile(): sendVerificationLinkToMobile;
    /** @returns {setEmailAsPrimary} */
    static setEmailAsPrimary(): setEmailAsPrimary;
    /** @returns {setMobileNumberAsPrimary} */
    static setMobileNumberAsPrimary(): setMobileNumberAsPrimary;
    /** @returns {updatePassword} */
    static updatePassword(): updatePassword;
    /** @returns {updateProfile} */
    static updateProfile(): updateProfile;
    /** @returns {verifyEmail} */
    static verifyEmail(): verifyEmail;
    /** @returns {verifyEmailOTP} */
    static verifyEmailOTP(): verifyEmailOTP;
    /** @returns {verifyMobile} */
    static verifyMobile(): verifyMobile;
    /** @returns {verifyMobileOTP} */
    static verifyMobileOTP(): verifyMobileOTP;
}
declare namespace UserApplicationValidator {
    export { AddEmailParam, AddMobileNumberParam, DeleteEmailParam, DeleteMobileNumberParam, DeleteUserParam, ForgotPasswordParam, GetListOfActiveSessionsParam, GetLoggedInUserParam, GetPlatformConfigParam, HasPasswordParam, LoginWithAppleIOSParam, LoginWithEmailAndPasswordParam, LoginWithFacebookParam, LoginWithGoogleParam, LoginWithGoogleAndroidParam, LoginWithGoogleIOSParam, LoginWithOTPParam, LoginWithTokenParam, LogoutParam, RegisterWithFormParam, SendOTPOnEmailParam, SendOTPOnMobileParam, SendResetPasswordEmailParam, SendResetPasswordMobileParam, SendResetTokenParam, SendVerificationLinkToEmailParam, SendVerificationLinkToMobileParam, SetEmailAsPrimaryParam, SetMobileNumberAsPrimaryParam, UpdatePasswordParam, UpdateProfileParam, VerifyEmailParam, VerifyEmailOTPParam, VerifyMobileParam, VerifyMobileOTPParam };
}
type AddEmailParam = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.EditEmailRequestSchema;
};
type AddMobileNumberParam = {
    /**
     * - ID of the application
     */
    platform?: string;
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
type GetListOfActiveSessionsParam = any;
type GetLoggedInUserParam = any;
type GetPlatformConfigParam = {
    /**
     * - Name of the application, e.g. Fynd
     */
    name?: string;
};
type HasPasswordParam = any;
type LoginWithAppleIOSParam = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.OAuthRequestAppleSchema;
};
type LoginWithEmailAndPasswordParam = {
    body: UserApplicationModel.PasswordLoginRequestSchema;
};
type LoginWithFacebookParam = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.OAuthRequestSchema;
};
type LoginWithGoogleParam = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.OAuthRequestSchema;
};
type LoginWithGoogleAndroidParam = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.OAuthRequestSchema;
};
type LoginWithGoogleIOSParam = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.OAuthRequestSchema;
};
type LoginWithOTPParam = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.SendOtpRequestSchema;
};
type LoginWithTokenParam = {
    body: UserApplicationModel.TokenRequestBodySchema;
};
type LogoutParam = any;
type RegisterWithFormParam = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.FormRegisterRequestSchema;
};
type SendOTPOnEmailParam = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.SendEmailOtpRequestSchema;
};
type SendOTPOnMobileParam = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.SendMobileOtpRequestSchema;
};
type SendResetPasswordEmailParam = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.SendResetPasswordEmailRequestSchema;
};
type SendResetPasswordMobileParam = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.SendResetPasswordMobileRequestSchema;
};
type SendResetTokenParam = {
    body: UserApplicationModel.CodeRequestBodySchema;
};
type SendVerificationLinkToEmailParam = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.EditEmailRequestSchema;
};
type SendVerificationLinkToMobileParam = {
    /**
     * - ID of the application
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
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.EditProfileRequestSchema;
};
type VerifyEmailParam = {
    body: UserApplicationModel.CodeRequestBodySchema;
};
type VerifyEmailOTPParam = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.VerifyEmailOtpRequestSchema;
};
type VerifyMobileParam = {
    body: UserApplicationModel.CodeRequestBodySchema;
};
type VerifyMobileOTPParam = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.VerifyOtpRequestSchema;
};
import UserApplicationModel = require("./UserApplicationModel");
