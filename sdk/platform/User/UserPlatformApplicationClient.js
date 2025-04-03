const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const UserPlatformApplicationValidator = require("./UserPlatformApplicationValidator");
const UserPlatformModel = require("./UserPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class User {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {UserPlatformApplicationValidator.ArchiveUserParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.ArchiveUserSuccess>} - Success response
   * @name archiveUser
   * @summary: Archive User
   * @description: Delete user from sales channel, allowing re-registration with the same mobile/email for a new user account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/archiveUser/).
   */
  async archiveUser(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = UserPlatformApplicationValidator.archiveUser().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.archiveUser().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > archiveUser \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/archive`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.ArchiveUserSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > archiveUser \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.BlockOrUnblockUsersParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.BlockUserSuccess>} - Success response
   * @name blockOrUnblockUsers
   * @summary: Block/Unblock Users
   * @description: Manage user access by blocking or unblocking their accounts, restricting login for blocked accounts and allowing login for unblocked accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/blockOrUnblockUsers/).
   */
  async blockOrUnblockUsers(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = UserPlatformApplicationValidator.blockOrUnblockUsers().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.blockOrUnblockUsers().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > blockOrUnblockUsers \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/activation`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.BlockUserSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > blockOrUnblockUsers \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.CreateUserParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.CreateUserResponseSchema>} - Success response
   * @name createUser
   * @summary: Create User
   * @description: Register and add a new user to the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/createUser/).
   */
  async createUser(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = UserPlatformApplicationValidator.createUser().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.createUser().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > createUser \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.CreateUserResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > createUser \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.CreateUserAttributeDefinitionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.UserAttributeDefinitionResponse>} -
   *   Success response
   * @name createUserAttributeDefinition
   * @summary: Create a User Attribute Definition
   * @description: Create a new User Attribute Definition - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/createUserAttributeDefinition/).
   */
  async createUserAttributeDefinition(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = UserPlatformApplicationValidator.createUserAttributeDefinition().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.createUserAttributeDefinition().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > createUserAttributeDefinition \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/user_attribute/definition`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.UserAttributeDefinitionResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > createUserAttributeDefinition \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.CreateUserGroupParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.UserGroupResponseSchema>} - Success response
   * @name createUserGroup
   * @summary: Create User Group
   * @description: Form and add a new user group. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/createUserGroup/).
   */
  async createUserGroup(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = UserPlatformApplicationValidator.createUserGroup().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.createUserGroup().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > createUserGroup \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/user_group`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.UserGroupResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > createUserGroup \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.CreateUserSessionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.CreateUserSessionResponseSchema>} -
   *   Success response
   * @name createUserSession
   * @summary: Create User Session
   * @description: Create session for user interactions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/createUserSession/).
   */
  async createUserSession(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = UserPlatformApplicationValidator.createUserSession().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.createUserSession().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > createUserSession \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/session`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.CreateUserSessionResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > createUserSession \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.DeleteActiveSessionsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.SessionsDeleteResponseSchema>} -
   *   Success response
   * @name deleteActiveSessions
   * @summary: Delete User Active Sessions
   * @description: Terminate all active user sessions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/deleteActiveSessions/).
   */
  async deleteActiveSessions(
    { id, reason, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = UserPlatformApplicationValidator.deleteActiveSessions().validate(
      {
        id,
        reason,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.deleteActiveSessions().validate(
      {
        id,
        reason,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > deleteActiveSessions \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["reason"] = reason;

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/sessions`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.SessionsDeleteResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > deleteActiveSessions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.DeleteSessionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.SessionDeleteResponseSchema>} -
   *   Success response
   * @name deleteSession
   * @summary: Delete User Session
   * @description: Terminate an active user session. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/deleteSession/).
   */
  async deleteSession(
    { id, sessionId, reason, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = UserPlatformApplicationValidator.deleteSession().validate(
      {
        id,
        sessionId,
        reason,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.deleteSession().validate(
      {
        id,
        sessionId,
        reason,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > deleteSession \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["session_id"] = sessionId;
    query_params["reason"] = reason;

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/session`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.SessionDeleteResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > deleteSession \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.DeleteUserAttributeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.SuccessMessageResponse>} - Success response
   * @name deleteUserAttribute
   * @summary: Delete User Attribute
   * @description: Delete User Attribute - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/deleteUserAttribute/).
   */
  async deleteUserAttribute(
    { attributeDefId, userId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = UserPlatformApplicationValidator.deleteUserAttribute().validate(
      { attributeDefId, userId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.deleteUserAttribute().validate(
      { attributeDefId, userId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > deleteUserAttribute \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/user_attribute/definition/${attributeDefId}/user/${userId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.SuccessMessageResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > deleteUserAttribute \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.DeleteUserAttributeDefinitionByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.SuccessMessageResponse>} - Success response
   * @name deleteUserAttributeDefinitionById
   * @summary: Delete User Attribute Definition
   * @description: Delete a user attribute definition by its unique identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/deleteUserAttributeDefinitionById/).
   */
  async deleteUserAttributeDefinitionById(
    { attributeDefId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = UserPlatformApplicationValidator.deleteUserAttributeDefinitionById().validate(
      { attributeDefId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.deleteUserAttributeDefinitionById().validate(
      { attributeDefId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > deleteUserAttributeDefinitionById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/user_attribute/definition/${attributeDefId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.SuccessMessageResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > deleteUserAttributeDefinitionById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.GetActiveSessionsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.SessionListResponseSchema>} - Success response
   * @name getActiveSessions
   * @summary: Get User Active Sessions
   * @description: Retrieve a list of currently active user sessions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/getActiveSessions/).
   */
  async getActiveSessions(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = UserPlatformApplicationValidator.getActiveSessions().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.getActiveSessions().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > getActiveSessions \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/sessions`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.SessionListResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > getActiveSessions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.GetCustomersParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.CustomerListResponseSchema>} - Success response
   * @name getCustomers
   * @summary: Get a List of Users
   * @description: Retrieve details of users registered in the sales channel - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/getCustomers/).
   */
  async getCustomers(
    { q, pageSize, pageNo, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = UserPlatformApplicationValidator.getCustomers().validate(
      {
        q,
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.getCustomers().validate(
      {
        q,
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > getCustomers \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["q"] = q;
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/list`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.CustomerListResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > getCustomers \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.GetPlatformConfigParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.PlatformSchema>} - Success response
   * @name getPlatformConfig
   * @summary: Get Platform Config
   * @description: Retrieve platform sales channel authentication configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/getPlatformConfig/).
   */
  async getPlatformConfig(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = UserPlatformApplicationValidator.getPlatformConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.getPlatformConfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > getPlatformConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/platform/config`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.PlatformSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > getPlatformConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.GetUserAttributeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.UserAttributeResponse>} - Success response
   * @name getUserAttribute
   * @summary: Get User Attribute
   * @description: Get User Attribute - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/getUserAttribute/).
   */
  async getUserAttribute(
    { attributeDefId, userId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = UserPlatformApplicationValidator.getUserAttribute().validate(
      { attributeDefId, userId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.getUserAttribute().validate(
      { attributeDefId, userId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > getUserAttribute \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/user_attribute/definition/${attributeDefId}/user/${userId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.UserAttributeResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > getUserAttribute \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.GetUserAttributeByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.UserAttributeResponse>} - Success response
   * @name getUserAttributeById
   * @summary: Get User Attribute
   * @description: Retrieve User Attribute details by ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/getUserAttributeById/).
   */
  async getUserAttributeById(
    { attributeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = UserPlatformApplicationValidator.getUserAttributeById().validate(
      { attributeId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.getUserAttributeById().validate(
      { attributeId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > getUserAttributeById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/user_attribute/attribute/${attributeId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.UserAttributeResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > getUserAttributeById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.GetUserAttributeDefinitionByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.UserAttributeDefinition>} - Success response
   * @name getUserAttributeDefinitionById
   * @summary: Get User Attribute Definition
   * @description: Get a user attribute definition by its unique identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/getUserAttributeDefinitionById/).
   */
  async getUserAttributeDefinitionById(
    { attributeDefId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = UserPlatformApplicationValidator.getUserAttributeDefinitionById().validate(
      { attributeDefId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.getUserAttributeDefinitionById().validate(
      { attributeDefId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > getUserAttributeDefinitionById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/user_attribute/definition/${attributeDefId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.UserAttributeDefinition().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > getUserAttributeDefinitionById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.GetUserAttributeDefinitionsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name getUserAttributeDefinitions
   * @summary: Get User Attribute Definitions
   * @description: Retrieve user attribute definitions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/getUserAttributeDefinitions/).
   */
  async getUserAttributeDefinitions(
    {
      excludingIds,
      slug,
      type,
      customerEditable,
      encrypted,
      pinned,
      pinOrder,
      isLocked,
      name,
      pageSize,
      pageNo,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = UserPlatformApplicationValidator.getUserAttributeDefinitions().validate(
      {
        excludingIds,
        slug,
        type,
        customerEditable,
        encrypted,
        pinned,
        pinOrder,
        isLocked,
        name,
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.getUserAttributeDefinitions().validate(
      {
        excludingIds,
        slug,
        type,
        customerEditable,
        encrypted,
        pinned,
        pinOrder,
        isLocked,
        name,
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > getUserAttributeDefinitions \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["excluding_ids"] = excludingIds;
    query_params["slug"] = slug;
    query_params["type"] = type;
    query_params["customer_editable"] = customerEditable;
    query_params["encrypted"] = encrypted;
    query_params["pinned"] = pinned;
    query_params["pin_order"] = pinOrder;
    query_params["is_locked"] = isLocked;
    query_params["name"] = name;
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/user_attribute/definition`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > getUserAttributeDefinitions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.GetUserAttributesForUserParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name getUserAttributesForUser
   * @summary: Get All Customer Attributes
   * @description: Retrieve all user attributes for a specific user - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/getUserAttributesForUser/).
   */
  async getUserAttributesForUser(
    { userId, pageSize, pageNo, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = UserPlatformApplicationValidator.getUserAttributesForUser().validate(
      {
        userId,

        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.getUserAttributesForUser().validate(
      {
        userId,

        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > getUserAttributesForUser \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/user_attribute/user/${userId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > getUserAttributesForUser \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.GetUserGroupByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.UserGroupResponseSchema>} - Success response
   * @name getUserGroupById
   * @summary: Get User Group
   * @description: Retrieve a user group by its unique identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/getUserGroupById/).
   */
  async getUserGroupById(
    { groupId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = UserPlatformApplicationValidator.getUserGroupById().validate(
      {
        groupId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.getUserGroupById().validate(
      {
        groupId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > getUserGroupById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/user_group/${groupId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.UserGroupResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > getUserGroupById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.GetUserGroupsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.UserGroupListResponseSchema>} -
   *   Success response
   * @name getUserGroups
   * @summary: Get User Groups
   * @description: Retrieve a list of user groups. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/getUserGroups/).
   */
  async getUserGroups(
    { pageNo, pageSize, name, type, status, groupUid, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = UserPlatformApplicationValidator.getUserGroups().validate(
      {
        pageNo,
        pageSize,
        name,
        type,
        status,
        groupUid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.getUserGroups().validate(
      {
        pageNo,
        pageSize,
        name,
        type,
        status,
        groupUid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > getUserGroups \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["name"] = name;
    query_params["type"] = type;
    query_params["status"] = status;
    query_params["group_uid"] = groupUid;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/user_group`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.UserGroupListResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > getUserGroups \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.SearchUsersParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.UserSearchResponseSchema>} - Success response
   * @name searchUsers
   * @summary: Search an Existing Users
   * @description: Search and filter users details registered in the sales channel - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/searchUsers/).
   */
  async searchUsers(
    { q, query, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = UserPlatformApplicationValidator.searchUsers().validate(
      {
        q,
        query,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.searchUsers().validate(
      {
        q,
        query,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > searchUsers \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["q"] = q;
    query_params["query"] = query;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/search`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.UserSearchResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > searchUsers \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.UnDeleteUserParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.UnDeleteUserSuccess>} - Success response
   * @name unDeleteUser
   * @summary: Restore Deleted User
   * @description: Restore a previously deleted user account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/unDeleteUser/).
   */
  async unDeleteUser(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = UserPlatformApplicationValidator.unDeleteUser().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.unDeleteUser().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > unDeleteUser \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/undelete`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.UnDeleteUserSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > unDeleteUser \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.UpdatePlatformConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.PlatformSchema>} - Success response
   * @name updatePlatformConfig
   * @summary: Update Platform Config
   * @description: Modify and update platform sales channel authentication configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/updatePlatformConfig/).
   */
  async updatePlatformConfig(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = UserPlatformApplicationValidator.updatePlatformConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.updatePlatformConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > updatePlatformConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/platform/config`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.PlatformSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > updatePlatformConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.UpdateUserParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.CreateUserResponseSchema>} - Success response
   * @name updateUser
   * @summary: Update User Details
   * @description: Modify and update user profile information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/updateUser/).
   */
  async updateUser(
    { userId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = UserPlatformApplicationValidator.updateUser().validate(
      {
        userId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.updateUser().validate(
      {
        userId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > updateUser \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/${userId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.CreateUserResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > updateUser \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.UpdateUserAttributeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.UserAttributeResponse>} - Success response
   * @name updateUserAttribute
   * @summary: Update Or Create User Attribute
   * @description: Update Or Create User Attribute - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/updateUserAttribute/).
   */
  async updateUserAttribute(
    { attributeDefId, userId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = UserPlatformApplicationValidator.updateUserAttribute().validate(
      {
        attributeDefId,
        userId,

        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.updateUserAttribute().validate(
      {
        attributeDefId,
        userId,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > updateUserAttribute \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/user_attribute/definition/${attributeDefId}/user/${userId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.UserAttributeResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > updateUserAttribute \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.UpdateUserAttributeDefinitionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.UserAttributeDefinition>} - Success response
   * @name updateUserAttributeDefinition
   * @summary: Update User Attribute Definition
   * @description: Update an existing user attribute definition. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/updateUserAttributeDefinition/).
   */
  async updateUserAttributeDefinition(
    { attributeDefId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = UserPlatformApplicationValidator.updateUserAttributeDefinition().validate(
      {
        attributeDefId,

        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.updateUserAttributeDefinition().validate(
      {
        attributeDefId,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > updateUserAttributeDefinition \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/user_attribute/definition/${attributeDefId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.UserAttributeDefinition().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > updateUserAttributeDefinition \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.UpdateUserGroupParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.UserGroupResponseSchema>} - Success response
   * @name updateUserGroup
   * @summary: Update User Group
   * @description: Modify and update user group details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/updateUserGroup/).
   */
  async updateUserGroup(
    { groupId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = UserPlatformApplicationValidator.updateUserGroup().validate(
      {
        groupId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.updateUserGroup().validate(
      {
        groupId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > updateUserGroup \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/user_group/${groupId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.UserGroupResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > updateUserGroup \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.UpdateUserGroupPartiallyParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UserPlatformModel.UserGroupResponseSchema>} - Success response
   * @name updateUserGroupPartially
   * @summary: Modify User Group
   * @description: Update user group partially on the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/updateUserGroupPartially/).
   */
  async updateUserGroupPartially(
    { groupId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = UserPlatformApplicationValidator.updateUserGroupPartially().validate(
      {
        groupId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = UserPlatformApplicationValidator.updateUserGroupPartially().validate(
      {
        groupId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > User > updateUserGroupPartially \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/user_group/${groupId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = UserPlatformModel.UserGroupResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > User > updateUserGroupPartially \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = User;
