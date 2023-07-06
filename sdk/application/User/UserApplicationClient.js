const ApplicationAPIClient = require("../ApplicationAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const UserApplicationValidator = require("./UserApplicationValidator");
const UserApplicationModel = require("./UserApplicationModel");
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
   * @param {UserApplicationValidator.AddEmailParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.VerifyEmailOTPSuccess>} - Success response
   * @name addEmail
   * @summary: Add email to profile
   * @description: Use this API to add a new email address to a profile
   */
  async addEmail({ body, platform } = {}) {
    const { error } = UserApplicationValidator.addEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserApplicationValidator.addEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > addEmail \n ${warrning}`,
      });
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
    } = UserApplicationModel.VerifyEmailOTPSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > addEmail \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.AddMobileNumberParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.VerifyMobileOTPSuccess>} - Success response
   * @name addMobileNumber
   * @summary: Add mobile number to profile
   * @description: Use this API to add a new mobile number to a profile.
   */
  async addMobileNumber({ body, platform } = {}) {
    const { error } = UserApplicationValidator.addMobileNumber().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.addMobileNumber().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > addMobileNumber \n ${warrning}`,
      });
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
    } = UserApplicationModel.VerifyMobileOTPSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > addMobileNumber \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.DeleteEmailParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
   * @name deleteEmail
   * @summary: Delete email from profile
   * @description: Use this API to delete an email address from a profile
   */
  async deleteEmail({ active, primary, verified, email, platform } = {}) {
    const { error } = UserApplicationValidator.deleteEmail().validate(
      { active, primary, verified, email, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserApplicationValidator.deleteEmail().validate(
      { active, primary, verified, email, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > deleteEmail \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = UserApplicationModel.LoginSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > deleteEmail \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.DeleteMobileNumberParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
   * @name deleteMobileNumber
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
    const { error } = UserApplicationValidator.deleteMobileNumber().validate(
      { active, primary, verified, countryCode, phone, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.deleteMobileNumber().validate(
      { active, primary, verified, countryCode, phone, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > deleteMobileNumber \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = UserApplicationModel.LoginSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > deleteMobileNumber \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.DeleteUserParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.DeleteUserSuccess>} - Success response
   * @name deleteUser
   * @summary: verify otp and delete user
   * @description: verify otp and delete user
   */
  async deleteUser({ body } = {}) {
    const { error } = UserApplicationValidator.deleteUser().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserApplicationValidator.deleteUser().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > deleteUser \n ${warrning}`,
      });
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
    } = UserApplicationModel.DeleteUserSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > deleteUser \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.ForgotPasswordParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
   * @name forgotPassword
   * @summary: Forgot Password
   * @description: Use this API to reset a password using the code sent on email or SMS.
   */
  async forgotPassword({ body } = {}) {
    const { error } = UserApplicationValidator.forgotPassword().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.forgotPassword().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > forgotPassword \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = UserApplicationModel.LoginSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > forgotPassword \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.GetListOfActiveSessionsParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.SessionListSuccess>} - Success response
   * @name getListOfActiveSessions
   * @summary: Get list of sessions
   * @description: Use this API to retrieve all active sessions of a user.
   */
  async getListOfActiveSessions({} = {}) {
    const {
      error,
    } = UserApplicationValidator.getListOfActiveSessions().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.getListOfActiveSessions().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > getListOfActiveSessions \n ${warrning}`,
      });
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
    } = UserApplicationModel.SessionListSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > getListOfActiveSessions \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.GetLoggedInUserParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.UserObjectSchema>} - Success response
   * @name getLoggedInUser
   * @summary: Get logged in user
   * @description: Use this API  to get the details of a logged in user.
   */
  async getLoggedInUser({} = {}) {
    const { error } = UserApplicationValidator.getLoggedInUser().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.getLoggedInUser().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > getLoggedInUser \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = UserApplicationModel.UserObjectSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > getLoggedInUser \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.GetPlatformConfigParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.PlatformSchema>} - Success response
   * @name getPlatformConfig
   * @summary: Get platform configurations
   * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.
   */
  async getPlatformConfig({ name } = {}) {
    const { error } = UserApplicationValidator.getPlatformConfig().validate(
      { name },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.getPlatformConfig().validate(
      { name },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > getPlatformConfig \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = UserApplicationModel.PlatformSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > getPlatformConfig \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.HasPasswordParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.HasPasswordSuccess>} - Success response
   * @name hasPassword
   * @summary: Check password
   * @description: Use this API to check if user has created a password for login.
   */
  async hasPassword({} = {}) {
    const { error } = UserApplicationValidator.hasPassword().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserApplicationValidator.hasPassword().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > hasPassword \n ${warrning}`,
      });
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
    } = UserApplicationModel.HasPasswordSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > hasPassword \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.LoginWithAppleIOSParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
   * @name loginWithAppleIOS
   * @summary: Login or Register using Apple on iOS
   * @description: Use this API to login or register in iOS app using Apple Account credentials.
   */
  async loginWithAppleIOS({ body, platform } = {}) {
    const { error } = UserApplicationValidator.loginWithAppleIOS().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.loginWithAppleIOS().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > loginWithAppleIOS \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = UserApplicationModel.AuthSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > loginWithAppleIOS \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.LoginWithEmailAndPasswordParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
   * @name loginWithEmailAndPassword
   * @summary: Login or Register with password
   * @description: Use this API to login or register using an email address and password.
   */
  async loginWithEmailAndPassword({ body } = {}) {
    const {
      error,
    } = UserApplicationValidator.loginWithEmailAndPassword().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.loginWithEmailAndPassword().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > loginWithEmailAndPassword \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = UserApplicationModel.LoginSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > loginWithEmailAndPassword \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.LoginWithFacebookParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
   * @name loginWithFacebook
   * @summary: Login or Register using Facebook
   * @description: Use this API to login or register using Facebook credentials.
   */
  async loginWithFacebook({ body, platform } = {}) {
    const { error } = UserApplicationValidator.loginWithFacebook().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.loginWithFacebook().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > loginWithFacebook \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = UserApplicationModel.AuthSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > loginWithFacebook \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.LoginWithGoogleParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
   * @name loginWithGoogle
   * @summary: Login or Register using Google
   * @description: Use this API to login or register using Google Account credentials.
   */
  async loginWithGoogle({ body, platform } = {}) {
    const { error } = UserApplicationValidator.loginWithGoogle().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.loginWithGoogle().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > loginWithGoogle \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = UserApplicationModel.AuthSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > loginWithGoogle \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.LoginWithGoogleAndroidParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
   * @name loginWithGoogleAndroid
   * @summary: Login or Register using Google on Android
   * @description: Use this API to login or register in Android app using Google Account credentials.
   */
  async loginWithGoogleAndroid({ body, platform } = {}) {
    const {
      error,
    } = UserApplicationValidator.loginWithGoogleAndroid().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.loginWithGoogleAndroid().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > loginWithGoogleAndroid \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = UserApplicationModel.AuthSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > loginWithGoogleAndroid \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.LoginWithGoogleIOSParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
   * @name loginWithGoogleIOS
   * @summary: Login or Register using Google on iOS
   * @description: Use this API to login or register in iOS app using Google Account credentials.
   */
  async loginWithGoogleIOS({ body, platform } = {}) {
    const { error } = UserApplicationValidator.loginWithGoogleIOS().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.loginWithGoogleIOS().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > loginWithGoogleIOS \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = UserApplicationModel.AuthSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > loginWithGoogleIOS \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.LoginWithOTPParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.SendOtpResponse>} - Success response
   * @name loginWithOTP
   * @summary: Login or Register with OTP
   * @description: Use this API to login or register with a One-time Password (OTP) sent via Email or SMS.
   */
  async loginWithOTP({ body, platform } = {}) {
    const { error } = UserApplicationValidator.loginWithOTP().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.loginWithOTP().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > loginWithOTP \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = UserApplicationModel.SendOtpResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > loginWithOTP \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.LoginWithTokenParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
   * @name loginWithToken
   * @summary: Login or Register with token
   * @description: Use this API to login or register using a token for authentication.
   */
  async loginWithToken({ body } = {}) {
    const { error } = UserApplicationValidator.loginWithToken().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.loginWithToken().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > loginWithToken \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = UserApplicationModel.LoginSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > loginWithToken \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.LogoutParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.LogoutSuccess>} - Success response
   * @name logout
   * @summary: Logs out currently logged in user
   * @description: Use this API to check to logout a user from the app.
   */
  async logout({} = {}) {
    const { error } = UserApplicationValidator.logout().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserApplicationValidator.logout().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > logout \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = UserApplicationModel.LogoutSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > logout \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.RegisterWithFormParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.RegisterFormSuccess>} - Success response
   * @name registerWithForm
   * @summary: Registration using a form
   * @description: Use this API to perform user registration by sending form data in the request body.
   */
  async registerWithForm({ body, platform } = {}) {
    const { error } = UserApplicationValidator.registerWithForm().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.registerWithForm().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > registerWithForm \n ${warrning}`,
      });
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
    } = UserApplicationModel.RegisterFormSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > registerWithForm \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.SendOTPOnEmailParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.EmailOtpSuccess>} - Success response
   * @name sendOTPOnEmail
   * @summary: Send OTP on email
   * @description: Use this API to send an OTP to an email ID.
   */
  async sendOTPOnEmail({ body, platform } = {}) {
    const { error } = UserApplicationValidator.sendOTPOnEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.sendOTPOnEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > sendOTPOnEmail \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = UserApplicationModel.EmailOtpSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > sendOTPOnEmail \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.SendOTPOnMobileParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.OtpSuccess>} - Success response
   * @name sendOTPOnMobile
   * @summary: Send OTP on mobile
   * @description: Use this API to send an OTP to a mobile number.
   */
  async sendOTPOnMobile({ body, platform } = {}) {
    const { error } = UserApplicationValidator.sendOTPOnMobile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.sendOTPOnMobile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > sendOTPOnMobile \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = UserApplicationModel.OtpSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > sendOTPOnMobile \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.SendResetPasswordEmailParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.ResetPasswordSuccess>} - Success response
   * @name sendResetPasswordEmail
   * @summary: Reset Password
   * @description: Use this API to reset a password using the link sent on email.
   */
  async sendResetPasswordEmail({ body, platform } = {}) {
    const {
      error,
    } = UserApplicationValidator.sendResetPasswordEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.sendResetPasswordEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > sendResetPasswordEmail \n ${warrning}`,
      });
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
    } = UserApplicationModel.ResetPasswordSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > sendResetPasswordEmail \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.SendResetPasswordMobileParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.ResetPasswordSuccess>} - Success response
   * @name sendResetPasswordMobile
   * @summary: Reset Password
   * @description: Use this API to reset a password using the link sent on mobile.
   */
  async sendResetPasswordMobile({ body, platform } = {}) {
    const {
      error,
    } = UserApplicationValidator.sendResetPasswordMobile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.sendResetPasswordMobile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > sendResetPasswordMobile \n ${warrning}`,
      });
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
    } = UserApplicationModel.ResetPasswordSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > sendResetPasswordMobile \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.SendResetTokenParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.ResetPasswordSuccess>} - Success response
   * @name sendResetToken
   * @summary: Reset Password using token
   * @description: Use this API to send code to reset password.
   */
  async sendResetToken({ body } = {}) {
    const { error } = UserApplicationValidator.sendResetToken().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.sendResetToken().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > sendResetToken \n ${warrning}`,
      });
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
    } = UserApplicationModel.ResetPasswordSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > sendResetToken \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.SendVerificationLinkToEmailParam} arg -
   *   Arg object.
   * @returns {Promise<UserApplicationModel.SendEmailVerifyLinkSuccess>} -
   *   Success response
   * @name sendVerificationLinkToEmail
   * @summary: Send verification link to email
   * @description: Use this API to send verification link to an email address.
   */
  async sendVerificationLinkToEmail({ body, platform } = {}) {
    const {
      error,
    } = UserApplicationValidator.sendVerificationLinkToEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.sendVerificationLinkToEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > sendVerificationLinkToEmail \n ${warrning}`,
      });
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
    } = UserApplicationModel.SendEmailVerifyLinkSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > sendVerificationLinkToEmail \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.SendVerificationLinkToMobileParam} arg
   *   - Arg object.
   *
   * @returns {Promise<UserApplicationModel.SendMobileVerifyLinkSuccess>} -
   *   Success response
   * @name sendVerificationLinkToMobile
   * @summary: Send verification link to mobile
   * @description: Use this API to send a verification link to a mobile number
   */
  async sendVerificationLinkToMobile({ body, platform } = {}) {
    const {
      error,
    } = UserApplicationValidator.sendVerificationLinkToMobile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.sendVerificationLinkToMobile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > sendVerificationLinkToMobile \n ${warrning}`,
      });
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
    } = UserApplicationModel.SendMobileVerifyLinkSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > sendVerificationLinkToMobile \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.SetEmailAsPrimaryParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
   * @name setEmailAsPrimary
   * @summary: Set email as primary
   * @description: Use this API to set an email address as primary. Primary email ID is a email address used for all future communications.
   */
  async setEmailAsPrimary({ body } = {}) {
    const { error } = UserApplicationValidator.setEmailAsPrimary().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.setEmailAsPrimary().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > setEmailAsPrimary \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = UserApplicationModel.LoginSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > setEmailAsPrimary \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.SetMobileNumberAsPrimaryParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
   * @name setMobileNumberAsPrimary
   * @summary: Set mobile as primary
   * @description: Use this API to set a mobile number as primary. Primary number is a verified number used for all future communications.
   */
  async setMobileNumberAsPrimary({ body } = {}) {
    const {
      error,
    } = UserApplicationValidator.setMobileNumberAsPrimary().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.setMobileNumberAsPrimary().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > setMobileNumberAsPrimary \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = UserApplicationModel.LoginSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > setMobileNumberAsPrimary \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.UpdatePasswordParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.VerifyEmailSuccess>} - Success response
   * @name updatePassword
   * @summary: Update user password
   * @description: Use this API to update the password.
   */
  async updatePassword({ body } = {}) {
    const { error } = UserApplicationValidator.updatePassword().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.updatePassword().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > updatePassword \n ${warrning}`,
      });
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
    } = UserApplicationModel.VerifyEmailSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > updatePassword \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.UpdateProfileParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.ProfileEditSuccess>} - Success response
   * @name updateProfile
   * @summary: Edit Profile Details
   * @description: Use this API to update details in the user profile. Details can be first name, last name, gender, email, phone number, or profile picture.
   */
  async updateProfile({ body, platform } = {}) {
    const { error } = UserApplicationValidator.updateProfile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.updateProfile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > updateProfile \n ${warrning}`,
      });
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
    } = UserApplicationModel.ProfileEditSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > updateProfile \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.VerifyEmailParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.VerifyEmailSuccess>} - Success response
   * @name verifyEmail
   * @summary: Verify email
   * @description: Use this API to send a verification code to verify an email.
   */
  async verifyEmail({ body } = {}) {
    const { error } = UserApplicationValidator.verifyEmail().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserApplicationValidator.verifyEmail().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > verifyEmail \n ${warrning}`,
      });
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
    } = UserApplicationModel.VerifyEmailSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > verifyEmail \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.VerifyEmailOTPParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.VerifyOtpSuccess>} - Success response
   * @name verifyEmailOTP
   * @summary: Verify OTP on email
   * @description: Use this API to verify the OTP received on an email ID.
   */
  async verifyEmailOTP({ body, platform } = {}) {
    const { error } = UserApplicationValidator.verifyEmailOTP().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.verifyEmailOTP().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > verifyEmailOTP \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = UserApplicationModel.VerifyOtpSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > verifyEmailOTP \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.VerifyMobileParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.VerifyEmailSuccess>} - Success response
   * @name verifyMobile
   * @summary: Verify mobile
   * @description: Use this API to send a verification code to verify a mobile number.
   */
  async verifyMobile({ body } = {}) {
    const { error } = UserApplicationValidator.verifyMobile().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.verifyMobile().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > verifyMobile \n ${warrning}`,
      });
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
    } = UserApplicationModel.VerifyEmailSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > verifyMobile \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.VerifyMobileOTPParam} arg - Arg object.
   * @returns {Promise<UserApplicationModel.VerifyOtpSuccess>} - Success response
   * @name verifyMobileOTP
   * @summary: Verify OTP on mobile
   * @description: Use this API to verify the OTP received on a mobile number.
   */
  async verifyMobileOTP({ body, platform } = {}) {
    const { error } = UserApplicationValidator.verifyMobileOTP().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.verifyMobileOTP().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > verifyMobileOTP \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = UserApplicationModel.VerifyOtpSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > User > verifyMobileOTP \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = User;
