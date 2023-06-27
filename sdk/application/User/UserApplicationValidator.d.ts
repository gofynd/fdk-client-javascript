export = UserApplicationValidator;
/**
 * @typedef addEmail
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.EditEmailRequestSchema} body
 */
/**
 * @typedef addMobileNumber
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.EditMobileRequestSchema} body
 */
/**
 * @typedef deleteEmail
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
 * @typedef deleteMobileNumber
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
 * @typedef deleteUser
 * @property {UserApplicationModel.DeleteApplicationUserRequestSchema} body
 */
/**
 * @typedef forgotPassword
 * @property {UserApplicationModel.ForgotPasswordRequestSchema} body
 */
/** @typedef getListOfActiveSessions */
/** @typedef getLoggedInUser */
/**
 * @typedef getPlatformConfig
 * @property {string} [name] - Name of the application, e.g. Fynd
 */
/** @typedef hasPassword */
/**
 * @typedef loginWithAppleIOS
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.OAuthRequestAppleSchema} body
 */
/**
 * @typedef loginWithEmailAndPassword
 * @property {UserApplicationModel.PasswordLoginRequestSchema} body
 */
/**
 * @typedef loginWithFacebook
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.OAuthRequestSchema} body
 */
/**
 * @typedef loginWithGoogle
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.OAuthRequestSchema} body
 */
/**
 * @typedef loginWithGoogleAndroid
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.OAuthRequestSchema} body
 */
/**
 * @typedef loginWithGoogleIOS
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.OAuthRequestSchema} body
 */
/**
 * @typedef loginWithOTP
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.SendOtpRequestSchema} body
 */
/**
 * @typedef loginWithToken
 * @property {UserApplicationModel.TokenRequestBodySchema} body
 */
/** @typedef logout */
/**
 * @typedef registerWithForm
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.FormRegisterRequestSchema} body
 */
/**
 * @typedef sendOTPOnEmail
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.SendEmailOtpRequestSchema} body
 */
/**
 * @typedef sendOTPOnMobile
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.SendMobileOtpRequestSchema} body
 */
/**
 * @typedef sendResetPasswordEmail
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.SendResetPasswordEmailRequestSchema} body
 */
/**
 * @typedef sendResetPasswordMobile
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.SendResetPasswordMobileRequestSchema} body
 */
/**
 * @typedef sendResetToken
 * @property {UserApplicationModel.CodeRequestBodySchema} body
 */
/**
 * @typedef sendVerificationLinkToEmail
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.EditEmailRequestSchema} body
 */
/**
 * @typedef sendVerificationLinkToMobile
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.SendVerificationLinkMobileRequestSchema} body
 */
/**
 * @typedef setEmailAsPrimary
 * @property {UserApplicationModel.EditEmailRequestSchema} body
 */
/**
 * @typedef setMobileNumberAsPrimary
 * @property {UserApplicationModel.SendVerificationLinkMobileRequestSchema} body
 */
/**
 * @typedef updatePassword
 * @property {UserApplicationModel.UpdatePasswordRequestSchema} body
 */
/**
 * @typedef updateProfile
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.EditProfileRequestSchema} body
 */
/**
 * @typedef verifyEmail
 * @property {UserApplicationModel.CodeRequestBodySchema} body
 */
/**
 * @typedef verifyEmailOTP
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.VerifyEmailOtpRequestSchema} body
 */
/**
 * @typedef verifyMobile
 * @property {UserApplicationModel.CodeRequestBodySchema} body
 */
/**
 * @typedef verifyMobileOTP
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.VerifyOtpRequestSchema} body
 */
declare class UserApplicationValidator {
}
declare namespace UserApplicationValidator {
    export { addEmail, addMobileNumber, deleteEmail, deleteMobileNumber, deleteUser, forgotPassword, getListOfActiveSessions, getLoggedInUser, getPlatformConfig, hasPassword, loginWithAppleIOS, loginWithEmailAndPassword, loginWithFacebook, loginWithGoogle, loginWithGoogleAndroid, loginWithGoogleIOS, loginWithOTP, loginWithToken, logout, registerWithForm, sendOTPOnEmail, sendOTPOnMobile, sendResetPasswordEmail, sendResetPasswordMobile, sendResetToken, sendVerificationLinkToEmail, sendVerificationLinkToMobile, setEmailAsPrimary, setMobileNumberAsPrimary, updatePassword, updateProfile, verifyEmail, verifyEmailOTP, verifyMobile, verifyMobileOTP };
}
/** @returns {addEmail} */
declare function addEmail(): addEmail;
type addEmail = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.EditEmailRequestSchema;
};
/** @returns {addMobileNumber} */
declare function addMobileNumber(): addMobileNumber;
type addMobileNumber = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.EditMobileRequestSchema;
};
/** @returns {deleteEmail} */
declare function deleteEmail(): deleteEmail;
type deleteEmail = {
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
/** @returns {deleteMobileNumber} */
declare function deleteMobileNumber(): deleteMobileNumber;
type deleteMobileNumber = {
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
/** @returns {deleteUser} */
declare function deleteUser(): deleteUser;
type deleteUser = {
    body: UserApplicationModel.DeleteApplicationUserRequestSchema;
};
/** @returns {forgotPassword} */
declare function forgotPassword(): forgotPassword;
type forgotPassword = {
    body: UserApplicationModel.ForgotPasswordRequestSchema;
};
/** @returns {getListOfActiveSessions} */
declare function getListOfActiveSessions(): any;
type getListOfActiveSessions = any;
/** @returns {getLoggedInUser} */
declare function getLoggedInUser(): any;
type getLoggedInUser = any;
/** @returns {getPlatformConfig} */
declare function getPlatformConfig(): getPlatformConfig;
type getPlatformConfig = {
    /**
     * - Name of the application, e.g. Fynd
     */
    name?: string;
};
/** @returns {hasPassword} */
declare function hasPassword(): any;
type hasPassword = any;
/** @returns {loginWithAppleIOS} */
declare function loginWithAppleIOS(): loginWithAppleIOS;
type loginWithAppleIOS = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.OAuthRequestAppleSchema;
};
/** @returns {loginWithEmailAndPassword} */
declare function loginWithEmailAndPassword(): loginWithEmailAndPassword;
type loginWithEmailAndPassword = {
    body: UserApplicationModel.PasswordLoginRequestSchema;
};
/** @returns {loginWithFacebook} */
declare function loginWithFacebook(): loginWithFacebook;
type loginWithFacebook = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.OAuthRequestSchema;
};
/** @returns {loginWithGoogle} */
declare function loginWithGoogle(): loginWithGoogle;
type loginWithGoogle = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.OAuthRequestSchema;
};
/** @returns {loginWithGoogleAndroid} */
declare function loginWithGoogleAndroid(): loginWithGoogleAndroid;
type loginWithGoogleAndroid = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.OAuthRequestSchema;
};
/** @returns {loginWithGoogleIOS} */
declare function loginWithGoogleIOS(): loginWithGoogleIOS;
type loginWithGoogleIOS = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.OAuthRequestSchema;
};
/** @returns {loginWithOTP} */
declare function loginWithOTP(): loginWithOTP;
type loginWithOTP = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.SendOtpRequestSchema;
};
/** @returns {loginWithToken} */
declare function loginWithToken(): loginWithToken;
type loginWithToken = {
    body: UserApplicationModel.TokenRequestBodySchema;
};
/** @returns {logout} */
declare function logout(): any;
type logout = any;
/** @returns {registerWithForm} */
declare function registerWithForm(): registerWithForm;
type registerWithForm = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.FormRegisterRequestSchema;
};
/** @returns {sendOTPOnEmail} */
declare function sendOTPOnEmail(): sendOTPOnEmail;
type sendOTPOnEmail = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.SendEmailOtpRequestSchema;
};
/** @returns {sendOTPOnMobile} */
declare function sendOTPOnMobile(): sendOTPOnMobile;
type sendOTPOnMobile = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.SendMobileOtpRequestSchema;
};
/** @returns {sendResetPasswordEmail} */
declare function sendResetPasswordEmail(): sendResetPasswordEmail;
type sendResetPasswordEmail = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.SendResetPasswordEmailRequestSchema;
};
/** @returns {sendResetPasswordMobile} */
declare function sendResetPasswordMobile(): sendResetPasswordMobile;
type sendResetPasswordMobile = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.SendResetPasswordMobileRequestSchema;
};
/** @returns {sendResetToken} */
declare function sendResetToken(): sendResetToken;
type sendResetToken = {
    body: UserApplicationModel.CodeRequestBodySchema;
};
/** @returns {sendVerificationLinkToEmail} */
declare function sendVerificationLinkToEmail(): sendVerificationLinkToEmail;
type sendVerificationLinkToEmail = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.EditEmailRequestSchema;
};
/** @returns {sendVerificationLinkToMobile} */
declare function sendVerificationLinkToMobile(): sendVerificationLinkToMobile;
type sendVerificationLinkToMobile = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.SendVerificationLinkMobileRequestSchema;
};
/** @returns {setEmailAsPrimary} */
declare function setEmailAsPrimary(): setEmailAsPrimary;
type setEmailAsPrimary = {
    body: UserApplicationModel.EditEmailRequestSchema;
};
/** @returns {setMobileNumberAsPrimary} */
declare function setMobileNumberAsPrimary(): setMobileNumberAsPrimary;
type setMobileNumberAsPrimary = {
    body: UserApplicationModel.SendVerificationLinkMobileRequestSchema;
};
/** @returns {updatePassword} */
declare function updatePassword(): updatePassword;
type updatePassword = {
    body: UserApplicationModel.UpdatePasswordRequestSchema;
};
/** @returns {updateProfile} */
declare function updateProfile(): updateProfile;
type updateProfile = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.EditProfileRequestSchema;
};
/** @returns {verifyEmail} */
declare function verifyEmail(): verifyEmail;
type verifyEmail = {
    body: UserApplicationModel.CodeRequestBodySchema;
};
/** @returns {verifyEmailOTP} */
declare function verifyEmailOTP(): verifyEmailOTP;
type verifyEmailOTP = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.VerifyEmailOtpRequestSchema;
};
/** @returns {verifyMobile} */
declare function verifyMobile(): verifyMobile;
type verifyMobile = {
    body: UserApplicationModel.CodeRequestBodySchema;
};
/** @returns {verifyMobileOTP} */
declare function verifyMobileOTP(): verifyMobileOTP;
type verifyMobileOTP = {
    /**
     * - ID of the application
     */
    platform?: string;
    body: UserApplicationModel.VerifyOtpRequestSchema;
};
import UserApplicationModel = require("./UserApplicationModel");
