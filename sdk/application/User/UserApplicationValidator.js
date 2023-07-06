const Joi = require("joi");

const UserApplicationModel = require("./UserApplicationModel");

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

class UserApplicationValidator {
  /** @returns {addEmail} */
  static addEmail() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.EditEmailRequestSchema().required(),
    }).required();
  }

  /** @returns {addMobileNumber} */
  static addMobileNumber() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.EditMobileRequestSchema().required(),
    }).required();
  }

  /** @returns {deleteEmail} */
  static deleteEmail() {
    return Joi.object({
      platform: Joi.string().allow(""),
      active: Joi.boolean().required(),
      primary: Joi.boolean().required(),
      verified: Joi.boolean().required(),
      email: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deleteMobileNumber} */
  static deleteMobileNumber() {
    return Joi.object({
      platform: Joi.string().allow(""),
      active: Joi.boolean().required(),
      primary: Joi.boolean().required(),
      verified: Joi.boolean().required(),
      countryCode: Joi.string().allow("").required(),
      phone: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deleteUser} */
  static deleteUser() {
    return Joi.object({
      body: UserApplicationModel.DeleteApplicationUserRequestSchema().required(),
    }).required();
  }

  /** @returns {forgotPassword} */
  static forgotPassword() {
    return Joi.object({
      body: UserApplicationModel.ForgotPasswordRequestSchema().required(),
    }).required();
  }

  /** @returns {getListOfActiveSessions} */
  static getListOfActiveSessions() {
    return Joi.object({});
  }

  /** @returns {getLoggedInUser} */
  static getLoggedInUser() {
    return Joi.object({});
  }

  /** @returns {getPlatformConfig} */
  static getPlatformConfig() {
    return Joi.object({
      name: Joi.string().allow(""),
    });
  }

  /** @returns {hasPassword} */
  static hasPassword() {
    return Joi.object({});
  }

  /** @returns {loginWithAppleIOS} */
  static loginWithAppleIOS() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.OAuthRequestAppleSchema().required(),
    }).required();
  }

  /** @returns {loginWithEmailAndPassword} */
  static loginWithEmailAndPassword() {
    return Joi.object({
      body: UserApplicationModel.PasswordLoginRequestSchema().required(),
    }).required();
  }

  /** @returns {loginWithFacebook} */
  static loginWithFacebook() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.OAuthRequestSchema().required(),
    }).required();
  }

  /** @returns {loginWithGoogle} */
  static loginWithGoogle() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.OAuthRequestSchema().required(),
    }).required();
  }

  /** @returns {loginWithGoogleAndroid} */
  static loginWithGoogleAndroid() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.OAuthRequestSchema().required(),
    }).required();
  }

  /** @returns {loginWithGoogleIOS} */
  static loginWithGoogleIOS() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.OAuthRequestSchema().required(),
    }).required();
  }

  /** @returns {loginWithOTP} */
  static loginWithOTP() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.SendOtpRequestSchema().required(),
    }).required();
  }

  /** @returns {loginWithToken} */
  static loginWithToken() {
    return Joi.object({
      body: UserApplicationModel.TokenRequestBodySchema().required(),
    }).required();
  }

  /** @returns {logout} */
  static logout() {
    return Joi.object({});
  }

  /** @returns {registerWithForm} */
  static registerWithForm() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.FormRegisterRequestSchema().required(),
    }).required();
  }

  /** @returns {sendOTPOnEmail} */
  static sendOTPOnEmail() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.SendEmailOtpRequestSchema().required(),
    }).required();
  }

  /** @returns {sendOTPOnMobile} */
  static sendOTPOnMobile() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.SendMobileOtpRequestSchema().required(),
    }).required();
  }

  /** @returns {sendResetPasswordEmail} */
  static sendResetPasswordEmail() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.SendResetPasswordEmailRequestSchema().required(),
    }).required();
  }

  /** @returns {sendResetPasswordMobile} */
  static sendResetPasswordMobile() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.SendResetPasswordMobileRequestSchema().required(),
    }).required();
  }

  /** @returns {sendResetToken} */
  static sendResetToken() {
    return Joi.object({
      body: UserApplicationModel.CodeRequestBodySchema().required(),
    }).required();
  }

  /** @returns {sendVerificationLinkToEmail} */
  static sendVerificationLinkToEmail() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.EditEmailRequestSchema().required(),
    }).required();
  }

  /** @returns {sendVerificationLinkToMobile} */
  static sendVerificationLinkToMobile() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.SendVerificationLinkMobileRequestSchema().required(),
    }).required();
  }

  /** @returns {setEmailAsPrimary} */
  static setEmailAsPrimary() {
    return Joi.object({
      body: UserApplicationModel.EditEmailRequestSchema().required(),
    }).required();
  }

  /** @returns {setMobileNumberAsPrimary} */
  static setMobileNumberAsPrimary() {
    return Joi.object({
      body: UserApplicationModel.SendVerificationLinkMobileRequestSchema().required(),
    }).required();
  }

  /** @returns {updatePassword} */
  static updatePassword() {
    return Joi.object({
      body: UserApplicationModel.UpdatePasswordRequestSchema().required(),
    }).required();
  }

  /** @returns {updateProfile} */
  static updateProfile() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.EditProfileRequestSchema().required(),
    }).required();
  }

  /** @returns {verifyEmail} */
  static verifyEmail() {
    return Joi.object({
      body: UserApplicationModel.CodeRequestBodySchema().required(),
    }).required();
  }

  /** @returns {verifyEmailOTP} */
  static verifyEmailOTP() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.VerifyEmailOtpRequestSchema().required(),
    }).required();
  }

  /** @returns {verifyMobile} */
  static verifyMobile() {
    return Joi.object({
      body: UserApplicationModel.CodeRequestBodySchema().required(),
    }).required();
  }

  /** @returns {verifyMobileOTP} */
  static verifyMobileOTP() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.VerifyOtpRequestSchema().required(),
    }).required();
  }
}

module.exports = UserApplicationValidator;
