const PartnerAPIClient = require("../PartnerAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const AuthorizationPartnerValidator = require("./AuthorizationPartnerValidator");
const AuthorizationPartnerModel = require("./AuthorizationPartnerModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Authorization {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {AuthorizationPartnerValidator.CreateOrganizationClientParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<AuthorizationPartnerModel.ClientResponse>} - Success response
   * @name createOrganizationClient
   * @summary: Create a new client for a specific organization
   * @description: Use this Api to create a new client for an organization - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/authorization/createOrganizationClient/).
   */
  async createOrganizationClient(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = AuthorizationPartnerValidator.createOrganizationClient().validate(
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
    } = AuthorizationPartnerValidator.createOrganizationClient().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Authorization > createOrganizationClient \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/authorization/v1.0/organization/${this.config.organizationId}/oauth/client`,
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
    } = AuthorizationPartnerModel.ClientResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Authorization > createOrganizationClient \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {AuthorizationPartnerValidator.GetOrganizationClientListParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<AuthorizationPartnerModel.ClientListSchema>} - Success response
   * @name getOrganizationClientList
   * @summary: Get organization OAuth client
   * @description: Get the list of organization OAuth Client - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/authorization/getOrganizationClientList/).
   */
  async getOrganizationClientList(
    { pageNo, pageSize, isActive, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = AuthorizationPartnerValidator.getOrganizationClientList().validate(
      {
        pageNo,
        pageSize,
        isActive,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = AuthorizationPartnerValidator.getOrganizationClientList().validate(
      {
        pageNo,
        pageSize,
        isActive,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Authorization > getOrganizationClientList \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["is_active"] = isActive;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/authorization/v1.0/organization/${this.config.organizationId}/oauth/client`,
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
    } = AuthorizationPartnerModel.ClientListSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Authorization > getOrganizationClientList \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {AuthorizationPartnerValidator.GetOrganizationClientByIdParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<AuthorizationPartnerModel.ClientResponse>} - Success response
   * @name getOrganizationClientById
   * @summary: Get organization OAuth client
   * @description: Get the organization oauth client by cliend id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/authorization/getOrganizationClientById/).
   */
  async getOrganizationClientById(
    { clientId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = AuthorizationPartnerValidator.getOrganizationClientById().validate(
      {
        clientId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = AuthorizationPartnerValidator.getOrganizationClientById().validate(
      {
        clientId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Authorization > getOrganizationClientById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/authorization/v1.0/organization/${this.config.organizationId}/oauth/client/${clientId}`,
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
    } = AuthorizationPartnerModel.ClientResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Authorization > getOrganizationClientById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {AuthorizationPartnerValidator.UpdateOrganizationClientByIdParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<AuthorizationPartnerModel.ClientResponse>} - Success response
   * @name updateOrganizationClientById
   * @summary: Update Specific Oauth client of organization
   * @description: Use this Api to Update OAuth Client name and tags description - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/authorization/updateOrganizationClientById/).
   */
  async updateOrganizationClientById(
    { clientId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = AuthorizationPartnerValidator.updateOrganizationClientById().validate(
      {
        clientId,
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
    } = AuthorizationPartnerValidator.updateOrganizationClientById().validate(
      {
        clientId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Authorization > updateOrganizationClientById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "put",
      `/service/partner/authorization/v1.0/organization/${this.config.organizationId}/oauth/client/${clientId}`,
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
    } = AuthorizationPartnerModel.ClientResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Authorization > updateOrganizationClientById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {AuthorizationPartnerValidator.DeleteOrganizationOAuthClientByIdParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<AuthorizationPartnerModel.ClientResponse>} - Success response
   * @name deleteOrganizationOAuthClientById
   * @summary: Delete Organization OAuth client
   * @description: This endpoint allows you to delete a specific Organization OAuth client. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/authorization/deleteOrganizationOAuthClientById/).
   */
  async deleteOrganizationOAuthClientById(
    { clientId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = AuthorizationPartnerValidator.deleteOrganizationOAuthClientById().validate(
      {
        clientId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = AuthorizationPartnerValidator.deleteOrganizationOAuthClientById().validate(
      {
        clientId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Authorization > deleteOrganizationOAuthClientById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "delete",
      `/service/partner/authorization/v1.0/organization/${this.config.organizationId}/oauth/client/${clientId}`,
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
    } = AuthorizationPartnerModel.ClientResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Authorization > deleteOrganizationOAuthClientById \n ${res_error}`,
        });
      }
    }

    return response;
  }
}
module.exports = Authorization;
