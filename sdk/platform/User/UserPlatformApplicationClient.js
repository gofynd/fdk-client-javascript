const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const UserValidator = require("./UserPlatformApplicationValidator");

class User {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {Object} [arg.q] - The search query. Mobile number or email ID of
   *   a customer.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @summary: Get a list of customers
   * @description: Use this API to retrieve a list of customers who have registered in the application.
   */
  getCustomers({ q, pageSize, pageNo } = {}) {
    const { error } = UserValidator.getCustomers().validate(
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
    const { error: warrning } = UserValidator.getCustomers().validate(
      {
        q,
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getCustomers");
      console.log(warrning);
    }

    const query_params = {};
    query_params["q"] = q;
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/list`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.q] - The search query. Mobile number or email ID of
   *   a customer.
   * @summary: Search an existing user.
   * @description: Use this API to retrieve an existing user from a list.
   */
  searchUsers({ q } = {}) {
    const { error } = UserValidator.searchUsers().validate(
      {
        q,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.searchUsers().validate(
      {
        q,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for searchUsers");
      console.log(warrning);
    }

    const query_params = {};
    query_params["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/search`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateUserRequestSchema} arg.body
   * @summary: Create user
   * @description: Create user
   */
  createUser({ body } = {}) {
    const { error } = UserValidator.createUser().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.createUser().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for createUser");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {BlockUserRequestSchema} arg.body
   * @summary: Block/Unblock user
   * @description: Block/Unblock user
   */
  blockOrUnblockUsers({ body } = {}) {
    const { error } = UserValidator.blockOrUnblockUsers().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.blockOrUnblockUsers().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for blockOrUnblockUsers");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/activation`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ArchiveUserRequestSchema} arg.body
   * @summary: archive user
   * @description: archive user
   */
  archiveUser({ body } = {}) {
    const { error } = UserValidator.archiveUser().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.archiveUser().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for archiveUser");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/archive`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UnDeleteUserRequestSchema} arg.body
   * @summary: undelete user who deleted from application and have not elapsed the platform configured delete days
   * @description: undelete user who deleted from application and have not elapsed the platform configured delete days
   */
  unDeleteUser({ body } = {}) {
    const { error } = UserValidator.unDeleteUser().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.unDeleteUser().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for unDeleteUser");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/undelete`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.userId - User ID
   * @param {UpdateUserRequestSchema} arg.body
   * @summary: Update user
   * @description: Update user
   */
  updateUser({ userId, body } = {}) {
    const { error } = UserValidator.updateUser().validate(
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
    const { error: warrning } = UserValidator.updateUser().validate(
      {
        userId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for updateUser");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/${userId}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateUserSessionRequestSchema} arg.body
   * @summary: Create user session
   * @description: Create user session
   */
  createUserSession({ body } = {}) {
    const { error } = UserValidator.createUserSession().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.createUserSession().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for createUserSession");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/session`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID of a customer.
   * @summary: Get a list of all session for a user
   * @description: Use this API to retrieve a list of session of customers who have registered in the application.
   */
  getActiveSessions({ id } = {}) {
    const { error } = UserValidator.getActiveSessions().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.getActiveSessions().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getActiveSessions");
      console.log(warrning);
    }

    const query_params = {};
    query_params["id"] = id;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/sesions`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID of a customer.
   * @summary: Delete a list of all session for a user
   * @description: Use this API to Delete a list of session of customers who have registered in the application.
   */
  deleteActiveSessions({ id } = {}) {
    const { error } = UserValidator.deleteActiveSessions().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.deleteActiveSessions().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for deleteActiveSessions");
      console.log(warrning);
    }

    const query_params = {};
    query_params["id"] = id;

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/sesions`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get platform configurations
   * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.
   */
  getPlatformConfig({} = {}) {
    const { error } = UserValidator.getPlatformConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.getPlatformConfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getPlatformConfig");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/platform/config`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PlatformSchema} arg.body
   * @summary: Update platform configurations
   * @description: Use this API to edit the existing platform configurations such as mobile image, desktop image, social logins, and all other text.
   */
  updatePlatformConfig({ body } = {}) {
    const { error } = UserValidator.updatePlatformConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = UserValidator.updatePlatformConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for updatePlatformConfig");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/platform/config`,
      query_params,
      body
    );
  }
}
module.exports = User;
