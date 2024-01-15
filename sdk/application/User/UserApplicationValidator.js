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

/**
 * @typedef GetUserAttributesParam
 * @property {string} [slug] - Filter by attribute slug.
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
 * @typedef ResetForgotPasswordParam
 * @property {UserApplicationModel.ForgotPasswordRequestSchema} body
 */

/**
 * @typedef SendForgotOTPOnEmailParam
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.SendEmailForgotOtpRequestSchema} body
 */

/**
 * @typedef SendForgotOTPOnMobileParam
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.SendMobileForgotOtpRequestSchema} body
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
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.VerifyEmailForgotOtpRequestSchema} body
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
 * @typedef VerifyMobileForgotOTPParam
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.VerifyMobileForgotOtpRequestSchema} body
 */

/**
 * @typedef VerifyMobileOTPParam
 * @property {string} [platform] - ID of the application
 * @property {UserApplicationModel.VerifyOtpRequestSchema} body
 */

class UserApplicationValidator {
  /** @returns {AddEmailParam} */
  static addEmail() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.EditEmailRequestSchema().required(),
    }).required();
  }

  /** @returns {AddMobileNumberParam} */
  static addMobileNumber() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.EditMobileRequestSchema().required(),
    }).required();
  }

  /** @returns {DeleteEmailParam} */
  static deleteEmail() {
    return Joi.object({
      platform: Joi.string().allow(""),
      active: Joi.boolean().required(),
      primary: Joi.boolean().required(),
      verified: Joi.boolean().required(),
      email: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteMobileNumberParam} */
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

  /** @returns {DeleteUserParam} */
  static deleteUser() {
    return Joi.object({
      body: UserApplicationModel.DeleteApplicationUserRequestSchema().required(),
    }).required();
  }

  /** @returns {ForgotPasswordParam} */
  static forgotPassword() {
    return Joi.object({
      body: UserApplicationModel.ForgotPasswordRequestSchema().required(),
    }).required();
  }

  /** @returns {GetListOfActiveSessionsParam} */
  static getListOfActiveSessions() {
    return Joi.object({});
  }

  /** @returns {GetLoggedInUserParam} */
  static getLoggedInUser() {
    return Joi.object({});
  }

  /** @returns {GetPlatformConfigParam} */
  static getPlatformConfig() {
    return Joi.object({
      name: Joi.string().allow(""),
    });
  }

  /** @returns {GetUserAttributesParam} */
  static getUserAttributes() {
    return Joi.object({
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {HasPasswordParam} */
  static hasPassword() {
    return Joi.object({});
  }

  /** @returns {LoginWithAppleIOSParam} */
  static loginWithAppleIOS() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.OAuthRequestAppleSchema().required(),
    }).required();
  }

  /** @returns {LoginWithEmailAndPasswordParam} */
  static loginWithEmailAndPassword() {
    return Joi.object({
      body: UserApplicationModel.PasswordLoginRequestSchema().required(),
    }).required();
  }

  /** @returns {LoginWithFacebookParam} */
  static loginWithFacebook() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.OAuthRequestSchema().required(),
    }).required();
  }

  /** @returns {LoginWithGoogleParam} */
  static loginWithGoogle() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.OAuthRequestSchema().required(),
    }).required();
  }

  /** @returns {LoginWithGoogleAndroidParam} */
  static loginWithGoogleAndroid() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.OAuthRequestSchema().required(),
    }).required();
  }

  /** @returns {LoginWithGoogleIOSParam} */
  static loginWithGoogleIOS() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.OAuthRequestSchema().required(),
    }).required();
  }

  /** @returns {LoginWithOTPParam} */
  static loginWithOTP() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.SendOtpRequestSchema().required(),
    }).required();
  }

  /** @returns {LoginWithTokenParam} */
  static loginWithToken() {
    return Joi.object({
      body: UserApplicationModel.TokenRequestBodySchema().required(),
    }).required();
  }

  /** @returns {LogoutParam} */
  static logout() {
    return Joi.object({});
  }

  /** @returns {RegisterWithFormParam} */
  static registerWithForm() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.FormRegisterRequestSchema().required(),
    }).required();
  }

  /** @returns {ResetForgotPasswordParam} */
  static resetForgotPassword() {
    return Joi.object({
      body: UserApplicationModel.ForgotPasswordRequestSchema().required(),
    }).required();
  }

  /** @returns {SendForgotOTPOnEmailParam} */
  static sendForgotOTPOnEmail() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.SendEmailForgotOtpRequestSchema().required(),
    }).required();
  }

  /** @returns {SendForgotOTPOnMobileParam} */
  static sendForgotOTPOnMobile() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.SendMobileForgotOtpRequestSchema().required(),
    }).required();
  }

  /** @returns {SendOTPOnEmailParam} */
  static sendOTPOnEmail() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.SendEmailOtpRequestSchema().required(),
    }).required();
  }

  /** @returns {SendOTPOnMobileParam} */
  static sendOTPOnMobile() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.SendMobileOtpRequestSchema().required(),
    }).required();
  }

  /** @returns {SendResetPasswordEmailParam} */
  static sendResetPasswordEmail() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.SendResetPasswordEmailRequestSchema().required(),
    }).required();
  }

  /** @returns {SendResetPasswordMobileParam} */
  static sendResetPasswordMobile() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.SendResetPasswordMobileRequestSchema().required(),
    }).required();
  }

  /** @returns {SendResetTokenParam} */
  static sendResetToken() {
    return Joi.object({
      body: UserApplicationModel.CodeRequestBodySchema().required(),
    }).required();
  }

  /** @returns {SendVerificationLinkToEmailParam} */
  static sendVerificationLinkToEmail() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.EditEmailRequestSchema().required(),
    }).required();
  }

  /** @returns {SendVerificationLinkToMobileParam} */
  static sendVerificationLinkToMobile() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.SendVerificationLinkMobileRequestSchema().required(),
    }).required();
  }

  /** @returns {SetEmailAsPrimaryParam} */
  static setEmailAsPrimary() {
    return Joi.object({
      body: UserApplicationModel.EditEmailRequestSchema().required(),
    }).required();
  }

  /** @returns {SetMobileNumberAsPrimaryParam} */
  static setMobileNumberAsPrimary() {
    return Joi.object({
      body: UserApplicationModel.SendVerificationLinkMobileRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdatePasswordParam} */
  static updatePassword() {
    return Joi.object({
      body: UserApplicationModel.UpdatePasswordRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateProfileParam} */
  static updateProfile() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.EditProfileRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateUserAttributesParam} */
  static updateUserAttributes() {
    return Joi.object({
      body: UserApplicationModel.UpdateUserAttributesRequest().required(),
    }).required();
  }

  /** @returns {UserExistsParam} */
  static userExists() {
    return Joi.object({
      q: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {VerifyEmailParam} */
  static verifyEmail() {
    return Joi.object({
      body: UserApplicationModel.CodeRequestBodySchema().required(),
    }).required();
  }

  /** @returns {VerifyEmailForgotOTPParam} */
  static verifyEmailForgotOTP() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.VerifyEmailForgotOtpRequestSchema().required(),
    }).required();
  }

  /** @returns {VerifyEmailOTPParam} */
  static verifyEmailOTP() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.VerifyEmailOtpRequestSchema().required(),
    }).required();
  }

  /** @returns {VerifyMobileParam} */
  static verifyMobile() {
    return Joi.object({
      body: UserApplicationModel.CodeRequestBodySchema().required(),
    }).required();
  }

  /** @returns {VerifyMobileForgotOTPParam} */
  static verifyMobileForgotOTP() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.VerifyMobileForgotOtpRequestSchema().required(),
    }).required();
  }

  /** @returns {VerifyMobileOTPParam} */
  static verifyMobileOTP() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserApplicationModel.VerifyOtpRequestSchema().required(),
    }).required();
  }
}

module.exports = UserApplicationValidator;
