const Joi = require("joi");

const UserModel = require("./UserApplicationModel");
class UserValidator {
  static addEmail() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserModel.EditEmailRequestSchema().required(),
    }).required();
  }

  static addMobileNumber() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserModel.EditMobileRequestSchema().required(),
    }).required();
  }

  static deleteEmail() {
    return Joi.object({
      platform: Joi.string().allow(""),
      active: Joi.boolean().required(),
      primary: Joi.boolean().required(),
      verified: Joi.boolean().required(),
      email: Joi.string().allow("").required(),
    }).required();
  }

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

  static deleteUser() {
    return Joi.object({
      body: UserModel.DeleteApplicationUserRequestSchema().required(),
    }).required();
  }

  static forgotPassword() {
    return Joi.object({
      body: UserModel.ForgotPasswordRequestSchema().required(),
    }).required();
  }

  static getListOfActiveSessions() {
    return Joi.object({});
  }

  static getLoggedInUser() {
    return Joi.object({});
  }

  static getPlatformConfig() {
    return Joi.object({
      name: Joi.string().allow(""),
    });
  }

  static hasPassword() {
    return Joi.object({});
  }

  static loginWithAppleIOS() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserModel.OAuthRequestAppleSchema().required(),
    }).required();
  }

  static loginWithEmailAndPassword() {
    return Joi.object({
      body: UserModel.PasswordLoginRequestSchema().required(),
    }).required();
  }

  static loginWithFacebook() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserModel.OAuthRequestSchema().required(),
    }).required();
  }

  static loginWithGoogle() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserModel.OAuthRequestSchema().required(),
    }).required();
  }

  static loginWithGoogleAndroid() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserModel.OAuthRequestSchema().required(),
    }).required();
  }

  static loginWithGoogleIOS() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserModel.OAuthRequestSchema().required(),
    }).required();
  }

  static loginWithOTP() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserModel.SendOtpRequestSchema().required(),
    }).required();
  }

  static loginWithToken() {
    return Joi.object({
      body: UserModel.TokenRequestBodySchema().required(),
    }).required();
  }

  static logout() {
    return Joi.object({});
  }

  static registerWithForm() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserModel.FormRegisterRequestSchema().required(),
    }).required();
  }

  static sendOTPOnEmail() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserModel.SendEmailOtpRequestSchema().required(),
    }).required();
  }

  static sendOTPOnMobile() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserModel.SendMobileOtpRequestSchema().required(),
    }).required();
  }

  static sendResetPasswordEmail() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserModel.SendResetPasswordEmailRequestSchema().required(),
    }).required();
  }

  static sendResetPasswordMobile() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserModel.SendResetPasswordMobileRequestSchema().required(),
    }).required();
  }

  static sendResetToken() {
    return Joi.object({
      body: UserModel.CodeRequestBodySchema().required(),
    }).required();
  }

  static sendVerificationLinkToEmail() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserModel.EditEmailRequestSchema().required(),
    }).required();
  }

  static sendVerificationLinkToMobile() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserModel.SendVerificationLinkMobileRequestSchema().required(),
    }).required();
  }

  static setEmailAsPrimary() {
    return Joi.object({
      body: UserModel.EditEmailRequestSchema().required(),
    }).required();
  }

  static setMobileNumberAsPrimary() {
    return Joi.object({
      body: UserModel.SendVerificationLinkMobileRequestSchema().required(),
    }).required();
  }

  static updatePassword() {
    return Joi.object({
      body: UserModel.UpdatePasswordRequestSchema().required(),
    }).required();
  }

  static updateProfile() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserModel.EditProfileRequestSchema().required(),
    }).required();
  }

  static verifyEmail() {
    return Joi.object({
      body: UserModel.CodeRequestBodySchema().required(),
    }).required();
  }

  static verifyEmailOTP() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserModel.VerifyEmailOtpRequestSchema().required(),
    }).required();
  }

  static verifyMobile() {
    return Joi.object({
      body: UserModel.CodeRequestBodySchema().required(),
    }).required();
  }

  static verifyMobileOTP() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: UserModel.VerifyOtpRequestSchema().required(),
    }).required();
  }
}

module.exports = UserValidator;
