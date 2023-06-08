const ApplicationAPIClient = require("../ApplicationAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const UserValidator = require("./UserApplicationValidator");
const UserModel = require("./UserApplicationModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class User {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      addEmail: "/service/application/user/profile/v1.0/email",
      addMobileNumber: "/service/application/user/profile/v1.0/mobile",
      deleteEmail: "/service/application/user/profile/v1.0/email",
      deleteMobileNumber: "/service/application/user/profile/v1.0/mobile",
      deleteUser: "/service/application/user/authentication/v1.0/delete",
      forgotPassword:
        "/service/application/user/authentication/v1.0/login/password/reset/forgot",
      getListOfActiveSessions:
        "/service/application/user/authentication/v1.0/sessions",
      getLoggedInUser: "/service/application/user/authentication/v1.0/session",
      getPlatformConfig: "/service/application/user/platform/v1.0/config",
      hasPassword: "/service/application/user/authentication/v1.0/has-password",
      loginWithAppleIOS:
        "/service/application/user/authentication/v1.0/login/apple-ios",
      loginWithEmailAndPassword:
        "/service/application/user/authentication/v1.0/login/password",
      loginWithFacebook:
        "/service/application/user/authentication/v1.0/login/facebook-token",
      loginWithGoogle:
        "/service/application/user/authentication/v1.0/login/google-token",
      loginWithGoogleAndroid:
        "/service/application/user/authentication/v1.0/login/google-android",
      loginWithGoogleIOS:
        "/service/application/user/authentication/v1.0/login/google-ios",
      loginWithOTP: "/service/application/user/authentication/v1.0/login/otp",
      loginWithToken:
        "/service/application/user/authentication/v1.0/login/token",
      logout: "/service/application/user/authentication/v1.0/logout",
      registerWithForm:
        "/service/application/user/authentication/v1.0/register/form",
      sendOTPOnEmail:
        "/service/application/user/authentication/v1.0/otp/email/send",
      sendOTPOnMobile:
        "/service/application/user/authentication/v1.0/otp/mobile/send",
      sendResetPasswordEmail:
        "/service/application/user/authentication/v1.0/login/password/reset",
      sendResetPasswordMobile:
        "/service/application/user/authentication/v1.0/login/password/mobile/reset",
      sendResetToken:
        "/service/application/user/authentication/v1.0/login/password/reset/token",
      sendVerificationLinkToEmail:
        "/service/application/user/profile/v1.0/email/link/send",
      sendVerificationLinkToMobile:
        "/service/application/user/profile/v1.0/mobile/link/send",
      setEmailAsPrimary: "/service/application/user/profile/v1.0/email/primary",
      setMobileNumberAsPrimary:
        "/service/application/user/profile/v1.0/mobile/primary",
      updatePassword: "/service/application/user/authentication/v1.0/password",
      updateProfile: "/service/application/user/profile/v1.0/detail",
      verifyEmail: "/service/application/user/authentication/v1.0/verify/email",
      verifyEmailOTP:
        "/service/application/user/authentication/v1.0/otp/email/verify",
      verifyMobile:
        "/service/application/user/authentication/v1.0/verify/mobile",
      verifyMobileOTP:
        "/service/application/user/authentication/v1.0/otp/mobile/verify",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {EditEmailRequestSchema} arg.body
   * @returns {Promise<VerifyEmailOTPSuccess>} - Success response
   * @summary: Add email to profile
   * @description: Use this API to add a new email address to a profile
   */
  async addEmail({ body, platform } = {}) {
    const { error } = UserValidator.addEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.addEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for addEmail",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["addEmail"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = UserModel.VerifyEmailOTPSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for addEmail",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {EditMobileRequestSchema} arg.body
   * @returns {Promise<VerifyMobileOTPSuccess>} - Success response
   * @summary: Add mobile number to profile
   * @description: Use this API to add a new mobile number to a profile.
   */
  async addMobileNumber({ body, platform } = {}) {
    const { error } = UserValidator.addMobileNumber().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.addMobileNumber().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for addMobileNumber",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["addMobileNumber"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = UserModel.VerifyMobileOTPSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for addMobileNumber",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {boolean} arg.active - This is a boolean value to check if email
   *   ID is active 1. True - Email ID is active 2.False - Email ID is inactive
   * @param {boolean} arg.primary - This is a boolean value to check if email
   *   ID is primary (main email ID) 1. True - Email ID is primary 2.False -
   *   Email ID is not primary
   * @param {boolean} arg.verified - This is a boolean value to check if email
   *   ID is verified 1. True - Email ID is verified 2.False - Email ID is not
   *   verified yet
   * @param {string} arg.email - The email ID to delete
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Delete email from profile
   * @description: Use this API to delete an email address from a profile
   */
  async deleteEmail({ active, primary, verified, email, platform } = {}) {
    const { error } = UserValidator.deleteEmail().validate(
      { active, primary, verified, email, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.deleteEmail().validate(
      { active, primary, verified, email, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for deleteEmail",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["platform"] = platform;
    query_params["active"] = active;
    query_params["primary"] = primary;
    query_params["verified"] = verified;
    query_params["email"] = email;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "delete",
      constructUrl({
        url: this._urls["deleteEmail"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = UserModel.LoginSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for deleteEmail",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {boolean} arg.active - This is a boolean value to check if mobile
   *   number is active 1.True - Number is active 2. False - Number is inactive
   * @param {boolean} arg.primary - This is a boolean value to check if mobile
   *   number is primary number (main number) 1. True - Number is primary 2.
   *   False - Number is not primary
   * @param {boolean} arg.verified - This is a boolean value to check if
   *   mobile number is verified 1. True - Number is verified 2.False - Number
   *   is not verified yet
   * @param {string} arg.countryCode - Country code of the phone number, e.g. 91
   * @param {string} arg.phone - Phone number
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Delete mobile number from profile
   * @description: Use this API to delete a mobile number from a profile.
   */
  async deleteMobileNumber({
    active,
    primary,
    verified,
    countryCode,
    phone,
    platform,
  } = {}) {
    const { error } = UserValidator.deleteMobileNumber().validate(
      { active, primary, verified, countryCode, phone, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.deleteMobileNumber().validate(
      { active, primary, verified, countryCode, phone, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for deleteMobileNumber",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["platform"] = platform;
    query_params["active"] = active;
    query_params["primary"] = primary;
    query_params["verified"] = verified;
    query_params["country_code"] = countryCode;
    query_params["phone"] = phone;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "delete",
      constructUrl({
        url: this._urls["deleteMobileNumber"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = UserModel.LoginSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for deleteMobileNumber",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {DeleteApplicationUserRequestSchema} arg.body
   * @returns {Promise<DeleteUserSuccess>} - Success response
   * @summary: verify otp and delete user
   * @description: verify otp and delete user
   */
  async deleteUser({ body } = {}) {
    const { error } = UserValidator.deleteUser().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.deleteUser().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for deleteUser",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["deleteUser"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = UserModel.DeleteUserSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for deleteUser",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ForgotPasswordRequestSchema} arg.body
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Forgot Password
   * @description: Use this API to reset a password using the code sent on email or SMS.
   */
  async forgotPassword({ body } = {}) {
    const { error } = UserValidator.forgotPassword().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.forgotPassword().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for forgotPassword",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["forgotPassword"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = UserModel.LoginSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for forgotPassword",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<SessionListSuccess>} - Success response
   * @summary: Get list of sessions
   * @description: Use this API to retrieve all active sessions of a user.
   */
  async getListOfActiveSessions({} = {}) {
    const { error } = UserValidator.getListOfActiveSessions().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserValidator.getListOfActiveSessions().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getListOfActiveSessions",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getListOfActiveSessions"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = UserModel.SessionListSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getListOfActiveSessions",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<UserObjectSchema>} - Success response
   * @summary: Get logged in user
   * @description: Use this API  to get the details of a logged in user.
   */
  async getLoggedInUser({} = {}) {
    const { error } = UserValidator.getLoggedInUser().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.getLoggedInUser().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getLoggedInUser",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLoggedInUser"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = UserModel.UserObjectSchema().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getLoggedInUser",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.name] - Name of the application, e.g. Fynd
   * @returns {Promise<PlatformSchema>} - Success response
   * @summary: Get platform configurations
   * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.
   */
  async getPlatformConfig({ name } = {}) {
    const { error } = UserValidator.getPlatformConfig().validate(
      { name },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.getPlatformConfig().validate(
      { name },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getPlatformConfig",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["name"] = name;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPlatformConfig"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = UserModel.PlatformSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getPlatformConfig",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<HasPasswordSuccess>} - Success response
   * @summary: Check password
   * @description: Use this API to check if user has created a password for login.
   */
  async hasPassword({} = {}) {
    const { error } = UserValidator.hasPassword().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.hasPassword().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for hasPassword",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["hasPassword"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = UserModel.HasPasswordSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for hasPassword",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {OAuthRequestAppleSchema} arg.body
   * @returns {Promise<AuthSuccess>} - Success response
   * @summary: Login or Register using Apple on iOS
   * @description: Use this API to login or register in iOS app using Apple Account credentials.
   */
  async loginWithAppleIOS({ body, platform } = {}) {
    const { error } = UserValidator.loginWithAppleIOS().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.loginWithAppleIOS().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for loginWithAppleIOS",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["loginWithAppleIOS"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = UserModel.AuthSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for loginWithAppleIOS",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PasswordLoginRequestSchema} arg.body
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Login or Register with password
   * @description: Use this API to login or register using an email address and password.
   */
  async loginWithEmailAndPassword({ body } = {}) {
    const { error } = UserValidator.loginWithEmailAndPassword().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserValidator.loginWithEmailAndPassword().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for loginWithEmailAndPassword",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["loginWithEmailAndPassword"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = UserModel.LoginSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for loginWithEmailAndPassword",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {OAuthRequestSchema} arg.body
   * @returns {Promise<AuthSuccess>} - Success response
   * @summary: Login or Register using Facebook
   * @description: Use this API to login or register using Facebook credentials.
   */
  async loginWithFacebook({ body, platform } = {}) {
    const { error } = UserValidator.loginWithFacebook().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.loginWithFacebook().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for loginWithFacebook",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["loginWithFacebook"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = UserModel.AuthSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for loginWithFacebook",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {OAuthRequestSchema} arg.body
   * @returns {Promise<AuthSuccess>} - Success response
   * @summary: Login or Register using Google
   * @description: Use this API to login or register using Google Account credentials.
   */
  async loginWithGoogle({ body, platform } = {}) {
    const { error } = UserValidator.loginWithGoogle().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.loginWithGoogle().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for loginWithGoogle",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["loginWithGoogle"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = UserModel.AuthSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for loginWithGoogle",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {OAuthRequestSchema} arg.body
   * @returns {Promise<AuthSuccess>} - Success response
   * @summary: Login or Register using Google on Android
   * @description: Use this API to login or register in Android app using Google Account credentials.
   */
  async loginWithGoogleAndroid({ body, platform } = {}) {
    const { error } = UserValidator.loginWithGoogleAndroid().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.loginWithGoogleAndroid().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for loginWithGoogleAndroid",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["loginWithGoogleAndroid"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = UserModel.AuthSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for loginWithGoogleAndroid",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {OAuthRequestSchema} arg.body
   * @returns {Promise<AuthSuccess>} - Success response
   * @summary: Login or Register using Google on iOS
   * @description: Use this API to login or register in iOS app using Google Account credentials.
   */
  async loginWithGoogleIOS({ body, platform } = {}) {
    const { error } = UserValidator.loginWithGoogleIOS().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.loginWithGoogleIOS().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for loginWithGoogleIOS",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["loginWithGoogleIOS"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = UserModel.AuthSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for loginWithGoogleIOS",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendOtpRequestSchema} arg.body
   * @returns {Promise<SendOtpResponse>} - Success response
   * @summary: Login or Register with OTP
   * @description: Use this API to login or register with a One-time Password (OTP) sent via Email or SMS.
   */
  async loginWithOTP({ body, platform } = {}) {
    const { error } = UserValidator.loginWithOTP().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.loginWithOTP().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for loginWithOTP",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["loginWithOTP"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = UserModel.SendOtpResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for loginWithOTP",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {TokenRequestBodySchema} arg.body
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Login or Register with token
   * @description: Use this API to login or register using a token for authentication.
   */
  async loginWithToken({ body } = {}) {
    const { error } = UserValidator.loginWithToken().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.loginWithToken().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for loginWithToken",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["loginWithToken"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = UserModel.LoginSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for loginWithToken",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<LogoutSuccess>} - Success response
   * @summary: Logs out currently logged in user
   * @description: Use this API to check to logout a user from the app.
   */
  async logout({} = {}) {
    const { error } = UserValidator.logout().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.logout().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for logout",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["logout"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = UserModel.LogoutSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for logout",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {FormRegisterRequestSchema} arg.body
   * @returns {Promise<RegisterFormSuccess>} - Success response
   * @summary: Registration using a form
   * @description: Use this API to perform user registration by sending form data in the request body.
   */
  async registerWithForm({ body, platform } = {}) {
    const { error } = UserValidator.registerWithForm().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.registerWithForm().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for registerWithForm",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["registerWithForm"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = UserModel.RegisterFormSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for registerWithForm",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendEmailOtpRequestSchema} arg.body
   * @returns {Promise<EmailOtpSuccess>} - Success response
   * @summary: Send OTP on email
   * @description: Use this API to send an OTP to an email ID.
   */
  async sendOTPOnEmail({ body, platform } = {}) {
    const { error } = UserValidator.sendOTPOnEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.sendOTPOnEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for sendOTPOnEmail",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["sendOTPOnEmail"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = UserModel.EmailOtpSuccess().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for sendOTPOnEmail",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendMobileOtpRequestSchema} arg.body
   * @returns {Promise<OtpSuccess>} - Success response
   * @summary: Send OTP on mobile
   * @description: Use this API to send an OTP to a mobile number.
   */
  async sendOTPOnMobile({ body, platform } = {}) {
    const { error } = UserValidator.sendOTPOnMobile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.sendOTPOnMobile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for sendOTPOnMobile",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["sendOTPOnMobile"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = UserModel.OtpSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for sendOTPOnMobile",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendResetPasswordEmailRequestSchema} arg.body
   * @returns {Promise<ResetPasswordSuccess>} - Success response
   * @summary: Reset Password
   * @description: Use this API to reset a password using the link sent on email.
   */
  async sendResetPasswordEmail({ body, platform } = {}) {
    const { error } = UserValidator.sendResetPasswordEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.sendResetPasswordEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for sendResetPasswordEmail",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["sendResetPasswordEmail"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = UserModel.ResetPasswordSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for sendResetPasswordEmail",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendResetPasswordMobileRequestSchema} arg.body
   * @returns {Promise<ResetPasswordSuccess>} - Success response
   * @summary: Reset Password
   * @description: Use this API to reset a password using the link sent on mobile.
   */
  async sendResetPasswordMobile({ body, platform } = {}) {
    const { error } = UserValidator.sendResetPasswordMobile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserValidator.sendResetPasswordMobile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for sendResetPasswordMobile",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["sendResetPasswordMobile"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = UserModel.ResetPasswordSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for sendResetPasswordMobile",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CodeRequestBodySchema} arg.body
   * @returns {Promise<ResetPasswordSuccess>} - Success response
   * @summary: Reset Password using token
   * @description: Use this API to send code to reset password.
   */
  async sendResetToken({ body } = {}) {
    const { error } = UserValidator.sendResetToken().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.sendResetToken().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for sendResetToken",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["sendResetToken"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = UserModel.ResetPasswordSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for sendResetToken",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {EditEmailRequestSchema} arg.body
   * @returns {Promise<SendEmailVerifyLinkSuccess>} - Success response
   * @summary: Send verification link to email
   * @description: Use this API to send verification link to an email address.
   */
  async sendVerificationLinkToEmail({ body, platform } = {}) {
    const { error } = UserValidator.sendVerificationLinkToEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserValidator.sendVerificationLinkToEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for sendVerificationLinkToEmail",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["sendVerificationLinkToEmail"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = UserModel.SendEmailVerifyLinkSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for sendVerificationLinkToEmail",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendVerificationLinkMobileRequestSchema} arg.body
   * @returns {Promise<SendMobileVerifyLinkSuccess>} - Success response
   * @summary: Send verification link to mobile
   * @description: Use this API to send a verification link to a mobile number
   */
  async sendVerificationLinkToMobile({ body, platform } = {}) {
    const { error } = UserValidator.sendVerificationLinkToMobile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserValidator.sendVerificationLinkToMobile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for sendVerificationLinkToMobile",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["sendVerificationLinkToMobile"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = UserModel.SendMobileVerifyLinkSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for sendVerificationLinkToMobile",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {EditEmailRequestSchema} arg.body
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Set email as primary
   * @description: Use this API to set an email address as primary. Primary email ID is a email address used for all future communications.
   */
  async setEmailAsPrimary({ body } = {}) {
    const { error } = UserValidator.setEmailAsPrimary().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.setEmailAsPrimary().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for setEmailAsPrimary",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["setEmailAsPrimary"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = UserModel.LoginSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for setEmailAsPrimary",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SendVerificationLinkMobileRequestSchema} arg.body
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Set mobile as primary
   * @description: Use this API to set a mobile number as primary. Primary number is a verified number used for all future communications.
   */
  async setMobileNumberAsPrimary({ body } = {}) {
    const { error } = UserValidator.setMobileNumberAsPrimary().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserValidator.setMobileNumberAsPrimary().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for setMobileNumberAsPrimary",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["setMobileNumberAsPrimary"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = UserModel.LoginSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for setMobileNumberAsPrimary",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdatePasswordRequestSchema} arg.body
   * @returns {Promise<VerifyEmailSuccess>} - Success response
   * @summary: Update user password
   * @description: Use this API to update the password.
   */
  async updatePassword({ body } = {}) {
    const { error } = UserValidator.updatePassword().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.updatePassword().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updatePassword",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["updatePassword"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = UserModel.VerifyEmailSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updatePassword",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {EditProfileRequestSchema} arg.body
   * @returns {Promise<ProfileEditSuccess>} - Success response
   * @summary: Edit Profile Details
   * @description: Use this API to update details in the user profile. Details can be first name, last name, gender, email, phone number, or profile picture.
   */
  async updateProfile({ body, platform } = {}) {
    const { error } = UserValidator.updateProfile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.updateProfile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateProfile",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["updateProfile"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = UserModel.ProfileEditSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateProfile",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CodeRequestBodySchema} arg.body
   * @returns {Promise<VerifyEmailSuccess>} - Success response
   * @summary: Verify email
   * @description: Use this API to send a verification code to verify an email.
   */
  async verifyEmail({ body } = {}) {
    const { error } = UserValidator.verifyEmail().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.verifyEmail().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for verifyEmail",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyEmail"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = UserModel.VerifyEmailSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for verifyEmail",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {VerifyEmailOtpRequestSchema} arg.body
   * @returns {Promise<VerifyOtpSuccess>} - Success response
   * @summary: Verify OTP on email
   * @description: Use this API to verify the OTP received on an email ID.
   */
  async verifyEmailOTP({ body, platform } = {}) {
    const { error } = UserValidator.verifyEmailOTP().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.verifyEmailOTP().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for verifyEmailOTP",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyEmailOTP"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = UserModel.VerifyOtpSuccess().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for verifyEmailOTP",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CodeRequestBodySchema} arg.body
   * @returns {Promise<VerifyEmailSuccess>} - Success response
   * @summary: Verify mobile
   * @description: Use this API to send a verification code to verify a mobile number.
   */
  async verifyMobile({ body } = {}) {
    const { error } = UserValidator.verifyMobile().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.verifyMobile().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for verifyMobile",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyMobile"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = UserModel.VerifyEmailSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for verifyMobile",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {VerifyOtpRequestSchema} arg.body
   * @returns {Promise<VerifyOtpSuccess>} - Success response
   * @summary: Verify OTP on mobile
   * @description: Use this API to verify the OTP received on a mobile number.
   */
  async verifyMobileOTP({ body, platform } = {}) {
    const { error } = UserValidator.verifyMobileOTP().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.verifyMobileOTP().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for verifyMobileOTP",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyMobileOTP"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = UserModel.VerifyOtpSuccess().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for verifyMobileOTP",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = User;
