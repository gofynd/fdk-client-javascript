const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
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
   * @param {UserPlatformApplicationValidator.archiveUser} arg - Arg object
   * @returns {Promise<UserPlatformModel.ArchiveUserSuccess>} - Success response
   * @name archiveUser
   * @summary: archive user
   * @description: archive user
   */
  async archiveUser({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = UserPlatformModel.ArchiveUserSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > User > archiveUser \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.blockOrUnblockUsers} arg - Arg object
   * @returns {Promise<UserPlatformModel.BlockUserSuccess>} - Success response
   * @name blockOrUnblockUsers
   * @summary: Block/Unblock user
   * @description: Block/Unblock user
   */
  async blockOrUnblockUsers({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = UserPlatformModel.BlockUserSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > User > blockOrUnblockUsers \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.createUser} arg - Arg object
   * @returns {Promise<UserPlatformModel.CreateUserResponseSchema>} - Success response
   * @name createUser
   * @summary: Create user
   * @description: Create user
   */
  async createUser({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = UserPlatformModel.CreateUserResponseSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > User > createUser \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.createUserGroup} arg - Arg object
   * @returns {Promise<UserPlatformModel.UserGroupResponseSchema>} - Success response
   * @name createUserGroup
   * @summary: Create an User Group
   * @description: Use this API to create new user Group
   */
  async createUserGroup({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = UserPlatformModel.UserGroupResponseSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > User > createUserGroup \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.createUserSession} arg - Arg object
   * @returns {Promise<UserPlatformModel.CreateUserSessionResponseSchema>} -
   *   Success response
   * @name createUserSession
   * @summary: Create user session
   * @description: Create user session
   */
  async createUserSession({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = UserPlatformModel.CreateUserSessionResponseSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > User > createUserSession \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.deleteActiveSessions} arg - Arg object
   * @returns {Promise<UserPlatformModel.SessionDeleteResponseSchema>} -
   *   Success response
   * @name deleteActiveSessions
   * @summary: Delete a list of all session for a user
   * @description: Use this API to Delete a list of session of customers who have registered in the application.
   */
  async deleteActiveSessions({ id, reason } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = UserPlatformModel.SessionDeleteResponseSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > User > deleteActiveSessions \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.deleteSession} arg - Arg object
   * @returns {Promise<UserPlatformModel.SessionDeleteResponseSchema>} -
   *   Success response
   * @name deleteSession
   * @summary: Delete a session for a user
   * @description: Use this API to Delete a session of customers who have registered in the application.
   */
  async deleteSession({ id, sessionId, reason } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = UserPlatformModel.SessionDeleteResponseSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > User > deleteSession \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.getActiveSessions} arg - Arg object
   * @returns {Promise<UserPlatformModel.SessionListResponseSchema>} - Success response
   * @name getActiveSessions
   * @summary: Get a list of all session with info for a user
   * @description: Use this API to retrieve a list of session with info of customers who have registered in the application.
   */
  async getActiveSessions({ id } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = UserPlatformModel.SessionListResponseSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > User > getActiveSessions \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.getCustomers} arg - Arg object
   * @returns {Promise<UserPlatformModel.CustomerListResponseSchema>} - Success response
   * @name getCustomers
   * @summary: Get a list of customers
   * @description: Use this API to retrieve a list of customers who have registered in the application.
   */
  async getCustomers({ q, pageSize, pageNo } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = UserPlatformModel.CustomerListResponseSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > User > getCustomers \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.getPlatformConfig} arg - Arg object
   * @returns {Promise<UserPlatformModel.PlatformSchema>} - Success response
   * @name getPlatformConfig
   * @summary: Get platform configurations
   * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.
   */
  async getPlatformConfig({} = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = UserPlatformModel.PlatformSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > User > getPlatformConfig \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.getUserGroupById} arg - Arg object
   * @returns {Promise<UserPlatformModel.UserGroupResponseSchema>} - Success response
   * @name getUserGroupById
   * @summary: Get an User Group by Id
   * @description: Use this API to get details of an existing user Group
   */
  async getUserGroupById({ groupId } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = UserPlatformModel.UserGroupResponseSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > User > getUserGroupById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.getUserGroups} arg - Arg object
   * @returns {Promise<UserPlatformModel.UserGroupListResponseSchema>} -
   *   Success response
   * @name getUserGroups
   * @summary: Get User Groups mathcing criteria
   * @description: Use this API to get User Groups mathing criteria passed in query
   */
  async getUserGroups({ pageNo, pageSize, name, status, groupUid } = {}) {
    const { error } = UserPlatformApplicationValidator.getUserGroups().validate(
      {
        pageNo,
        pageSize,
        name,
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
    query_params["status"] = status;
    query_params["group_uid"] = groupUid;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/user_group`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = UserPlatformModel.UserGroupListResponseSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > User > getUserGroups \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.searchUsers} arg - Arg object
   * @returns {Promise<UserPlatformModel.UserSearchResponseSchema>} - Success response
   * @name searchUsers
   * @summary: Search an existing user.
   * @description: Use this API to retrieve an existing user from a list.
   */
  async searchUsers({ q } = {}) {
    const { error } = UserPlatformApplicationValidator.searchUsers().validate(
      {
        q,
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/search`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = UserPlatformModel.UserSearchResponseSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > User > searchUsers \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.unDeleteUser} arg - Arg object
   * @returns {Promise<UserPlatformModel.UnDeleteUserSuccess>} - Success response
   * @name unDeleteUser
   * @summary: undelete user who deleted from application and have not elapsed the platform configured delete days
   * @description: undelete user who deleted from application and have not elapsed the platform configured delete days
   */
  async unDeleteUser({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = UserPlatformModel.UnDeleteUserSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > User > unDeleteUser \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.updatePlatformConfig} arg - Arg object
   * @returns {Promise<UserPlatformModel.PlatformSchema>} - Success response
   * @name updatePlatformConfig
   * @summary: Update platform configurations
   * @description: Use this API to edit the existing platform configurations such as mobile image, desktop image, social logins, and all other text.
   */
  async updatePlatformConfig({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = UserPlatformModel.PlatformSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > User > updatePlatformConfig \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.updateUser} arg - Arg object
   * @returns {Promise<UserPlatformModel.CreateUserResponseSchema>} - Success response
   * @name updateUser
   * @summary: Update user
   * @description: Use this API to update user details, Note: Existing emails and phone numbers of user will be replaced directly if phone_numbers or emails field sent in request data.
   */
  async updateUser({ userId, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = UserPlatformModel.CreateUserResponseSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > User > updateUser \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {UserPlatformApplicationValidator.updateUserGroup} arg - Arg object
   * @returns {Promise<UserPlatformModel.UserGroupResponseSchema>} - Success response
   * @name updateUserGroup
   * @summary: Update an User Group
   * @description: Use this API to update an existing user Group
   */
  async updateUserGroup({ groupId, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = UserPlatformModel.UserGroupResponseSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > User > updateUserGroup \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = User;
