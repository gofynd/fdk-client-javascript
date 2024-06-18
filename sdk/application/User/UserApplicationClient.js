const ApplicationAPIClient = require("../ApplicationAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
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
      getUserAttributes:
        "/service/application/user/profile/v1.0/user-attributes",
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
      resetForgotPassword:
        "/service/application/user/authentication/v1.0/login/password/forgot",
      sendForgotOTPOnEmail:
        "/service/application/user/authentication/v1.0/otp/forgot/email/send",
      sendForgotOTPOnMobile:
        "/service/application/user/authentication/v1.0/otp/forgot/mobile/send",
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
      updateUserAttributes:
        "/service/application/user/profile/v1.0/user-attributes",
      userExists: "/service/application/user/authentication/v1.0/user-exists",
      verifyEmail: "/service/application/user/authentication/v1.0/verify/email",
      verifyEmailForgotOTP:
        "/service/application/user/authentication/v1.0/otp/forgot/email/verify",
      verifyEmailOTP:
        "/service/application/user/authentication/v1.0/otp/email/verify",
      verifyMobile:
        "/service/application/user/authentication/v1.0/verify/mobile",
      verifyMobileForgotOTP:
        "/service/application/user/authentication/v1.0/otp/forgot/mobile/verify",
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
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.VerifyEmailOTPSuccess>} - Success response
   * @name addEmail
   * @summary: Add Email to Profile
   * @description: Adds a new email address to the user's profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/addEmail/).
   */
  async addEmail(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.VerifyEmailOTPSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > addEmail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.AddMobileNumberParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.VerifyMobileOTPSuccess>} - Success response
   * @name addMobileNumber
   * @summary: Add Mobile Number to Profile
   * @description: Adds a new mobile number to the user's profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/addMobileNumber/).
   */
  async addMobileNumber(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.VerifyMobileOTPSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > addMobileNumber \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.DeleteEmailParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
   * @name deleteEmail
   * @summary: Delete Email From Profile
   * @description: Delete Email From Profile - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/deleteEmail/).
   */
  async deleteEmail(
    { active, primary, verified, email, platform, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.LoginSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > deleteEmail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.DeleteMobileNumberParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
   * @name deleteMobileNumber
   * @summary: Delete Mobile Number From Profile
   * @description: Delete Mobile Number From Profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/deleteMobileNumber/).
   */
  async deleteMobileNumber(
    {
      active,
      primary,
      verified,
      countryCode,
      phone,
      platform,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.LoginSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > deleteMobileNumber \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.DeleteUserParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.DeleteUserSuccess>} - Success response
   * @name deleteUser
   * @summary: Verify OTP and Delete User
   * @description: Verify OTP sent to mobile/email and Delete the user's account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/deleteUser/).
   */
  async deleteUser(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.DeleteUserSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > deleteUser \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.ForgotPasswordParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
   * @name forgotPassword
   * @summary: Reset Password via Code and login
   * @description: Reset a password using the code sent on email or SMS the Login. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/forgotPassword/).
   */
  async forgotPassword(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.LoginSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > forgotPassword \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.GetListOfActiveSessionsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.SessionListSuccess>} - Success response
   * @name getListOfActiveSessions
   * @summary: Get List OF Active Sessions
   * @description: Retrieve all active sessions of a user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getListOfActiveSessions/).
   */
  async getListOfActiveSessions(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.SessionListSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > getListOfActiveSessions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.GetLoggedInUserParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.UserObjectSchema>} - Success response
   * @name getLoggedInUser
   * @summary: Get Logged in User
   * @description: Retrieve information about the currently logged-in user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getLoggedInUser/).
   */
  async getLoggedInUser(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.UserObjectSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > getLoggedInUser \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.GetPlatformConfigParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.PlatformSchema>} - Success response
   * @name getPlatformConfig
   * @summary: Get Platform Configuration
   * @description: Retrieve platform sales channel authentication configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getPlatformConfig/).
   */
  async getPlatformConfig(
    { name, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.PlatformSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > getPlatformConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.GetUserAttributesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.UserAttributes>} - Success response
   * @name getUserAttributes
   * @summary: Get User Attributes
   * @description: Get the list of user attributes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getUserAttributes/).
   */
  async getUserAttributes(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = UserApplicationValidator.getUserAttributes().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.getUserAttributes().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > getUserAttributes \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["slug"] = slug;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getUserAttributes"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.UserAttributes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > getUserAttributes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.HasPasswordParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.HasPasswordSuccess>} - Success response
   * @name hasPassword
   * @summary: Check Password Existence
   * @description: Check if user has set an account password - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/hasPassword/).
   */
  async hasPassword(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.HasPasswordSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > hasPassword \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.LoginWithAppleIOSParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
   * @name loginWithAppleIOS
   * @summary: iOS Login with Apple
   * @description: Enables iOS users to log in to the system using their Apple ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithAppleIOS/).
   */
  async loginWithAppleIOS(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.AuthSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > loginWithAppleIOS \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.LoginWithEmailAndPasswordParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
   * @name loginWithEmailAndPassword
   * @summary: Email and Password Login
   * @description: Allows login using an email and password combination. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithEmailAndPassword/).
   */
  async loginWithEmailAndPassword(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.LoginSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > loginWithEmailAndPassword \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.LoginWithFacebookParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
   * @name loginWithFacebook
   * @summary: Login with Facebook
   * @description: Enables users to log in to the system using their Facebook accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithFacebook/).
   */
  async loginWithFacebook(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.AuthSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > loginWithFacebook \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.LoginWithGoogleParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
   * @name loginWithGoogle
   * @summary: Login with Google
   * @description: Enables website users to log in to the system using their Google accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithGoogle/).
   */
  async loginWithGoogle(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.AuthSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > loginWithGoogle \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.LoginWithGoogleAndroidParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
   * @name loginWithGoogleAndroid
   * @summary: Android Login with Google
   * @description: Enables Android users to log in to the system using their Facebook accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithGoogleAndroid/).
   */
  async loginWithGoogleAndroid(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.AuthSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > loginWithGoogleAndroid \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.LoginWithGoogleIOSParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
   * @name loginWithGoogleIOS
   * @summary: iOS Login with Google
   * @description: Enables iOS users to log in to the system using their Facebook accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithGoogleIOS/).
   */
  async loginWithGoogleIOS(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.AuthSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > loginWithGoogleIOS \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.LoginWithOTPParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.SendOtpResponse>} - Success response
   * @name loginWithOTP
   * @summary: Login with Mobile OTP
   * @description: Allows users to log in using a one-time password sent to their mobile - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithOTP/).
   */
  async loginWithOTP(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.SendOtpResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > loginWithOTP \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.LoginWithTokenParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
   * @name loginWithToken
   * @summary: Login with Token
   * @description: Login User using a token for authentication. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithToken/).
   */
  async loginWithToken(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.LoginSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > loginWithToken \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.LogoutParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.LogoutSuccess>} - Success response
   * @name logout
   * @summary: Logout Current User
   * @description: Logout currently logged-in user - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/logout/).
   */
  async logout(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.LogoutSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > logout \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.RegisterWithFormParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.RegisterFormSuccess>} - Success response
   * @name registerWithForm
   * @summary: Register User with Form
   * @description: Enables new users to register using a form. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/registerWithForm/).
   */
  async registerWithForm(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.RegisterFormSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > registerWithForm \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.ResetForgotPasswordParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.ResetForgotPasswordSuccess>} -
   *   Success response
   * @name resetForgotPassword
   * @summary: Reset Password via Code
   * @description: Reset a password using the code sent on email or SMS. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/resetForgotPassword/).
   */
  async resetForgotPassword(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = UserApplicationValidator.resetForgotPassword().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.resetForgotPassword().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > resetForgotPassword \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["resetForgotPassword"],
        params: {},
      }),
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.ResetForgotPasswordSuccess().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > resetForgotPassword \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.SendForgotOTPOnEmailParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.EmailOtpSuccess>} - Success response
   * @name sendForgotOTPOnEmail
   * @summary: Send Email OTP for Forgot Password
   * @description: Sends a one-time password to the user's email for verification when resetting a forgotten password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendForgotOTPOnEmail/).
   */
  async sendForgotOTPOnEmail(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = UserApplicationValidator.sendForgotOTPOnEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.sendForgotOTPOnEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > sendForgotOTPOnEmail \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["sendForgotOTPOnEmail"],
        params: {},
      }),
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.EmailOtpSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > sendForgotOTPOnEmail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.SendForgotOTPOnMobileParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.OtpSuccess>} - Success response
   * @name sendForgotOTPOnMobile
   * @summary: Send mobile OTP for forgot-password
   * @description: Sends a one-time password to the user's mobile for verification when resetting a forgotten password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendForgotOTPOnMobile/).
   */
  async sendForgotOTPOnMobile(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = UserApplicationValidator.sendForgotOTPOnMobile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.sendForgotOTPOnMobile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > sendForgotOTPOnMobile \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["sendForgotOTPOnMobile"],
        params: {},
      }),
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.OtpSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > sendForgotOTPOnMobile \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.SendOTPOnEmailParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.EmailOtpSuccess>} - Success response
   * @name sendOTPOnEmail
   * @summary: Send OTP on Email
   * @description: Sends a one-time password to the user's email for verification. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendOTPOnEmail/).
   */
  async sendOTPOnEmail(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.EmailOtpSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > sendOTPOnEmail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.SendOTPOnMobileParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.OtpSuccess>} - Success response
   * @name sendOTPOnMobile
   * @summary: Send OTP on Mobile
   * @description: Sends a one-time password to the user's mobile for verification. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendOTPOnMobile/).
   */
  async sendOTPOnMobile(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.OtpSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > sendOTPOnMobile \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.SendResetPasswordEmailParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.ResetPasswordSuccess>} - Success response
   * @name sendResetPasswordEmail
   * @summary: Reset Password via Email
   * @description: Sends a password reset link to the user's email. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendResetPasswordEmail/).
   */
  async sendResetPasswordEmail(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.ResetPasswordSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > sendResetPasswordEmail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.SendResetPasswordMobileParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<any>} - Success response
   * @name sendResetPasswordMobile
   * @summary: Reset Password via Mobile
   * @description: Sends a password reset link to the user's Mobile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendResetPasswordMobile/).
   */
  async sendResetPasswordMobile(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.string()
      .allow("")
      .validate(responseData, { abortEarly: false, allowUnknown: true });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > sendResetPasswordMobile \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.SendResetTokenParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.ResetPasswordSuccess>} - Success response
   * @name sendResetToken
   * @summary: Validate Password Reset Code
   * @description: Validate Password Reset link Code - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendResetToken/).
   */
  async sendResetToken(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.ResetPasswordSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > sendResetToken \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.SendVerificationLinkToEmailParam} arg -
   *   Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.SendEmailVerifyLinkSuccess>} -
   *   Success response
   * @name sendVerificationLinkToEmail
   * @summary: Send Verification Link to Email
   * @description: Sends a verification link to a newly added email address. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendVerificationLinkToEmail/).
   */
  async sendVerificationLinkToEmail(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.SendEmailVerifyLinkSuccess().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > sendVerificationLinkToEmail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.SendVerificationLinkToMobileParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.SendMobileVerifyLinkSuccess>} -
   *   Success response
   * @name sendVerificationLinkToMobile
   * @summary: Send Verification Link to Mobile
   * @description: Sends a verification link to a newly added mobile number. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendVerificationLinkToMobile/).
   */
  async sendVerificationLinkToMobile(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.SendMobileVerifyLinkSuccess().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > sendVerificationLinkToMobile \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.SetEmailAsPrimaryParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
   * @name setEmailAsPrimary
   * @summary: Set Email as Primary
   * @description: Sets an email address as the primary contact for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/setEmailAsPrimary/).
   */
  async setEmailAsPrimary(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.LoginSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > setEmailAsPrimary \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.SetMobileNumberAsPrimaryParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
   * @name setMobileNumberAsPrimary
   * @summary: Set Mobile as Primary
   * @description: Sets a mobile number as the primary contact for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/setMobileNumberAsPrimary/).
   */
  async setMobileNumberAsPrimary(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.LoginSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > setMobileNumberAsPrimary \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.UpdatePasswordParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.VerifyEmailSuccess>} - Success response
   * @name updatePassword
   * @summary: Update Password
   * @description: Allow user to change their password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/updatePassword/).
   */
  async updatePassword(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.VerifyEmailSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > updatePassword \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.UpdateProfileParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.ProfileEditSuccess>} - Success response
   * @name updateProfile
   * @summary: Edit User Profile Details
   * @description: Allows users to modify and update their profile details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/updateProfile/).
   */
  async updateProfile(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.ProfileEditSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > updateProfile \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.UpdateUserAttributesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.UserAttributes>} - Success response
   * @name updateUserAttributes
   * @summary: Update User Attributes
   * @description: Update user attributes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/updateUserAttributes/).
   */
  async updateUserAttributes(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = UserApplicationValidator.updateUserAttributes().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.updateUserAttributes().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > updateUserAttributes \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "patch",
      constructUrl({
        url: this._urls["updateUserAttributes"],
        params: {},
      }),
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.UserAttributes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > updateUserAttributes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.UserExistsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.UserExistsResponse>} - Success response
   * @name userExists
   * @summary: Chcek User Existence
   * @description: Check whether user is already registered or not to the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/userExists/).
   */
  async userExists(
    { q, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = UserApplicationValidator.userExists().validate(
      { q },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserApplicationValidator.userExists().validate(
      { q },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > userExists \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["q"] = q;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["userExists"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.UserExistsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > userExists \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.VerifyEmailParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.VerifyEmailSuccess>} - Success response
   * @name verifyEmail
   * @summary: Verify Email with Code
   * @description: Verifies user email with a code sent within a link sent to their email. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyEmail/).
   */
  async verifyEmail(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.VerifyEmailSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > verifyEmail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.VerifyEmailForgotOTPParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.VerifyForgotOtpSuccess>} - Success response
   * @name verifyEmailForgotOTP
   * @summary: Verify Email OTP for Forgot Password
   * @description: Verify one-time password sent to user's email for resetting a forgotten password - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyEmailForgotOTP/).
   */
  async verifyEmailForgotOTP(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = UserApplicationValidator.verifyEmailForgotOTP().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.verifyEmailForgotOTP().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > verifyEmailForgotOTP \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyEmailForgotOTP"],
        params: {},
      }),
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.VerifyForgotOtpSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > verifyEmailForgotOTP \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.VerifyEmailOTPParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.VerifyOtpSuccess>} - Success response
   * @name verifyEmailOTP
   * @summary: Verify Email OTP
   * @description: Verify one-time password sent to user's email. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyEmailOTP/).
   */
  async verifyEmailOTP(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.VerifyOtpSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > verifyEmailOTP \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.VerifyMobileParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.VerifyEmailSuccess>} - Success response
   * @name verifyMobile
   * @summary: Verify Mobile with Code
   * @description: Verifies user mobile with a code sent within a link sent to their mobile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyMobile/).
   */
  async verifyMobile(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.VerifyEmailSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > verifyMobile \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.VerifyMobileForgotOTPParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.VerifyForgotOtpSuccess>} - Success response
   * @name verifyMobileForgotOTP
   * @summary: Verify Mobile OTP for Forgot Password
   * @description: Verify one-time password sent to user's mobile for resetting a forgotten password - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyMobileForgotOTP/).
   */
  async verifyMobileForgotOTP(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = UserApplicationValidator.verifyMobileForgotOTP().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserApplicationValidator.verifyMobileForgotOTP().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > User > verifyMobileForgotOTP \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyMobileForgotOTP"],
        params: {},
      }),
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.VerifyForgotOtpSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > verifyMobileForgotOTP \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserApplicationValidator.VerifyMobileOTPParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UserApplicationModel.VerifyOtpSuccess>} - Success response
   * @name verifyMobileOTP
   * @summary: Verify Mobile OTP
   * @description: Verify one-time password sent to user's mobile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyMobileOTP/).
   */
  async verifyMobileOTP(
    { body, platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserApplicationModel.VerifyOtpSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > User > verifyMobileOTP \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = User;
