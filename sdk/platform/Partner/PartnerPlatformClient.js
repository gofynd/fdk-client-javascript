const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const PartnerPlatformValidator = require("./PartnerPlatformValidator");
const PartnerPlatformModel = require("./PartnerPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Partner {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {PartnerPlatformValidator.DeleteExtensionByIdParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PartnerPlatformModel.UninstallExtension>} - Success response
   * @name deleteExtensionById
   * @summary: Uninstall extension
   * @description: Use this API to remove extension from yout company or channel - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/deleteExtensionById/).
   */
  async deleteExtensionById(
    { extensionId, message, uninstallReasonType } = {},
    { headers } = { headers: false }
  ) {
    const { error } = PartnerPlatformValidator.deleteExtensionById().validate(
      {
        extensionId,
        message,
        uninstallReasonType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PartnerPlatformValidator.deleteExtensionById().validate(
      {
        extensionId,
        message,
        uninstallReasonType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Partner > deleteExtensionById \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["message"] = message;
    query_params["uninstall_reason_type"] = uninstallReasonType;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/extension/${extensionId}`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PartnerPlatformModel.UninstallExtension().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Partner > deleteExtensionById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PartnerPlatformValidator.GetExtensionByIdParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PartnerPlatformModel.ExtensionCommon>} - Success response
   * @name getExtensionById
   * @summary: Get extension details
   * @description: Use this API to get the details of extension - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/getExtensionById/).
   */
  async getExtensionById(
    { extensionId } = {},
    { headers } = { headers: false }
  ) {
    const { error } = PartnerPlatformValidator.getExtensionById().validate(
      {
        extensionId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PartnerPlatformValidator.getExtensionById().validate(
      {
        extensionId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Partner > getExtensionById \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/extension/${extensionId}`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PartnerPlatformModel.ExtensionCommon().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Partner > getExtensionById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PartnerPlatformValidator.GetExtensionsForCompanyParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PartnerPlatformModel.ExtensionList>} - Success response
   * @name getExtensionsForCompany
   * @summary: Get the list of all the extensions
   * @description: Use this API to get the the extensions for the company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/getExtensionsForCompany/).
   */
  async getExtensionsForCompany(
    { pageSize, tag, currentPage, pageNo, filterBy, query } = {},
    { headers } = { headers: false }
  ) {
    const {
      error,
    } = PartnerPlatformValidator.getExtensionsForCompany().validate(
      {
        pageSize,
        tag,
        currentPage,
        pageNo,
        filterBy,
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
    } = PartnerPlatformValidator.getExtensionsForCompany().validate(
      {
        pageSize,
        tag,
        currentPage,
        pageNo,
        filterBy,
        query,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Partner > getExtensionsForCompany \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_size"] = pageSize;
    query_params["tag"] = tag;
    query_params["current_page"] = currentPage;
    query_params["page_no"] = pageNo;
    query_params["filter_by"] = filterBy;
    query_params["query"] = query;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/extensions`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PartnerPlatformModel.ExtensionList().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Partner > getExtensionsForCompany \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PartnerPlatformValidator.GetExtensionsSuggestionsParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PartnerPlatformModel.ExtensionSuggestionList>} - Success response
   * @name getExtensionsSuggestions
   * @summary: Get the list of all the extension suggestions
   * @description: Use this API to get the the extensions suggestions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/getExtensionsSuggestions/).
   */
  async getExtensionsSuggestions(
    { pageSize } = {},
    { headers } = { headers: false }
  ) {
    const {
      error,
    } = PartnerPlatformValidator.getExtensionsSuggestions().validate(
      {
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PartnerPlatformValidator.getExtensionsSuggestions().validate(
      {
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Partner > getExtensionsSuggestions \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/extension/suggestions`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PartnerPlatformModel.ExtensionSuggestionList().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Partner > getExtensionsSuggestions \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PartnerPlatformValidator.GetPartnerInvitesParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PartnerPlatformModel.PartnerRequestList>} - Success response
   * @name getPartnerInvites
   * @summary: Get partner invites
   * @description: Use this API to get pending, accepted and rejected partner invites in platform - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/getPartnerInvites/).
   */
  async getPartnerInvites(
    { requestStatus, pageSize, pageNo } = {},
    { headers } = { headers: false }
  ) {
    const { error } = PartnerPlatformValidator.getPartnerInvites().validate(
      {
        requestStatus,
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
    } = PartnerPlatformValidator.getPartnerInvites().validate(
      {
        requestStatus,
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Partner > getPartnerInvites \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["request_status"] = requestStatus;
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/partner-request`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PartnerPlatformModel.PartnerRequestList().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Partner > getPartnerInvites \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PartnerPlatformValidator.GetPartnerRequestDetailsParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PartnerPlatformModel.PartnerInviteDetails>} - Success response
   * @name getPartnerRequestDetails
   * @summary: Get partner request details
   * @description: Use this API to get details of pending partner request - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/getPartnerRequestDetails/).
   */
  async getPartnerRequestDetails(
    { inviteId } = {},
    { headers } = { headers: false }
  ) {
    const {
      error,
    } = PartnerPlatformValidator.getPartnerRequestDetails().validate(
      {
        inviteId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PartnerPlatformValidator.getPartnerRequestDetails().validate(
      {
        inviteId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Partner > getPartnerRequestDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/partner-request/${inviteId}`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PartnerPlatformModel.PartnerInviteDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Partner > getPartnerRequestDetails \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PartnerPlatformValidator.GetPrivateExtensionsParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PartnerPlatformModel.ExtensionResponse>} - Success response
   * @name getPrivateExtensions
   * @summary: Get the list of private extensions
   * @description: Use this API to get the list of private extensions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/getPrivateExtensions/).
   */
  async getPrivateExtensions(
    { pageSize, pageNo, query } = {},
    { headers } = { headers: false }
  ) {
    const { error } = PartnerPlatformValidator.getPrivateExtensions().validate(
      {
        pageSize,
        pageNo,
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
    } = PartnerPlatformValidator.getPrivateExtensions().validate(
      {
        pageSize,
        pageNo,
        query,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Partner > getPrivateExtensions \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;
    query_params["query"] = query;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/private-extensions`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PartnerPlatformModel.ExtensionResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Partner > getPrivateExtensions \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PartnerPlatformValidator.GetPublicExtensionParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PartnerPlatformModel.PublicExtension>} - Success response
   * @name getPublicExtension
   * @summary: Get details of public extension
   * @description: Use this API to get the details of public extensions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/getPublicExtension/).
   */
  async getPublicExtension(
    { extensionId } = {},
    { headers } = { headers: false }
  ) {
    const { error } = PartnerPlatformValidator.getPublicExtension().validate(
      {
        extensionId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PartnerPlatformValidator.getPublicExtension().validate(
      {
        extensionId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Partner > getPublicExtension \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/public-extension/${extensionId}`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PartnerPlatformModel.PublicExtension().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Partner > getPublicExtension \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PartnerPlatformValidator.ModifyPartnerRequestParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PartnerPlatformModel.PartnerInviteDetails>} - Success response
   * @name modifyPartnerRequest
   * @summary: Act on the pending partner request
   * @description: Use this API to approve or reject the pending partner request - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/modifyPartnerRequest/).
   */
  async modifyPartnerRequest(
    { inviteId, body } = {},
    { headers } = { headers: false }
  ) {
    const { error } = PartnerPlatformValidator.modifyPartnerRequest().validate(
      {
        inviteId,
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
    } = PartnerPlatformValidator.modifyPartnerRequest().validate(
      {
        inviteId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Partner > modifyPartnerRequest \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/partner-request/${inviteId}`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PartnerPlatformModel.PartnerInviteDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Partner > modifyPartnerRequest \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PartnerPlatformValidator.SetupProductsParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PartnerPlatformModel.SetupProductRes>} - Success response
   * @name setupProducts
   * @summary:
   * @description: Use this API for setup - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/setupProducts/).
   */
  async setupProducts({ requestId } = {}, { headers } = { headers: false }) {
    const { error } = PartnerPlatformValidator.setupProducts().validate(
      {
        requestId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PartnerPlatformValidator.setupProducts().validate(
      {
        requestId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Partner > setupProducts \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["request_id"] = requestId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/setup`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PartnerPlatformModel.SetupProductRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Partner > setupProducts \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PartnerPlatformValidator.SubscribeExtensionParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PartnerPlatformModel.SubscriptionRes>} - Success response
   * @name subscribeExtension
   * @summary: Subscribe for extension plan
   * @description: Use this API to select plan for paid extension - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/subscribeExtension/).
   */
  async subscribeExtension(
    { entity, extensionId, entityId, body } = {},
    { headers } = { headers: false }
  ) {
    const { error } = PartnerPlatformValidator.subscribeExtension().validate(
      {
        entity,
        extensionId,
        entityId,
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
    } = PartnerPlatformValidator.subscribeExtension().validate(
      {
        entity,
        extensionId,
        entityId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Partner > subscribeExtension \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/extension/${extensionId}/${entity}/${entityId}/charge_consent`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PartnerPlatformModel.SubscriptionRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Partner > subscribeExtension \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Partner;
