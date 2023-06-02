const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const PartnerValidator = require("./PartnerPlatformValidator");
const PartnerModel = require("./PartnerPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Partner {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.extensionId - Extension id
   * @param {string} arg.message - Message while uninstalling extension
   * @param {string} arg.uninstallReasonType - Reason for uninstalling extension
   * @returns {Promise<UninstallExtension>} - Success response
   * @summary: Uninstall extension
   * @description: Use this API to remove extension from yout company or channel
   */
  async deleteExtensionById({
    extensionId,
    message,
    uninstallReasonType,
  } = {}) {
    const { error } = PartnerValidator.deleteExtensionById().validate(
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
    const { error: warrning } = PartnerValidator.deleteExtensionById().validate(
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
        message: "Parameter Validation warrnings for deleteExtensionById",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = PartnerModel.UninstallExtension().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for deleteExtensionById",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.extensionId - Extension id
   * @returns {Promise<ExtensionCommon>} - Success response
   * @summary: Get extension details
   * @description: Use this API to get the details of extension
   */
  async getExtensionById({ extensionId } = {}) {
    const { error } = PartnerValidator.getExtensionById().validate(
      {
        extensionId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PartnerValidator.getExtensionById().validate(
      {
        extensionId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getExtensionById",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/extension/${extensionId}`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = PartnerModel.ExtensionCommon().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getExtensionById",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Number of records you want to get in single page
   * @param {string} [arg.tag] - Tag
   * @param {string} [arg.currentPage] - Tag
   * @param {number} [arg.pageNo] - Current page number
   * @param {string} [arg.filterBy] - Filter by
   * @param {string} [arg.query] - Query
   * @returns {Promise<ExtensionList>} - Success response
   * @summary: Get the list of all the extensions
   * @description: Use this API to get the the extensions for the company
   */
  async getExtensionsForCompany({
    pageSize,
    tag,
    currentPage,
    pageNo,
    filterBy,
    query,
  } = {}) {
    const { error } = PartnerValidator.getExtensionsForCompany().validate(
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
    } = PartnerValidator.getExtensionsForCompany().validate(
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
        message: "Parameter Validation warrnings for getExtensionsForCompany",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const { error: res_error } = PartnerModel.ExtensionList().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getExtensionsForCompany",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Number of records you want to get in single page
   * @returns {Promise<ExtensionSuggestionList>} - Success response
   * @summary: Get the list of all the extension suggestions
   * @description: Use this API to get the the extensions suggestions
   */
  async getExtensionsSuggestions({ pageSize } = {}) {
    const { error } = PartnerValidator.getExtensionsSuggestions().validate(
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
    } = PartnerValidator.getExtensionsSuggestions().validate(
      {
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getExtensionsSuggestions",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = PartnerModel.ExtensionSuggestionList().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getExtensionsSuggestions",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.requestStatus] - Status of the request
   * @param {string} [arg.pageSize] - Number of records per page
   * @param {string} [arg.pageNo] - Number of page the user want to fetch
   * @returns {Promise<PartnerRequestList>} - Success response
   * @summary: Get partner invites
   * @description: Use this API to get pending, accepted and rejected partner invites in platform
   */
  async getPartnerInvites({ requestStatus, pageSize, pageNo } = {}) {
    const { error } = PartnerValidator.getPartnerInvites().validate(
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
    const { error: warrning } = PartnerValidator.getPartnerInvites().validate(
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
        message: "Parameter Validation warrnings for getPartnerInvites",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = PartnerModel.PartnerRequestList().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getPartnerInvites",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.inviteId - Invitation id
   * @returns {Promise<PartnerInviteDetails>} - Success response
   * @summary: Get partner request details
   * @description: Use this API to get details of pending partner request
   */
  async getPartnerRequestDetails({ inviteId } = {}) {
    const { error } = PartnerValidator.getPartnerRequestDetails().validate(
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
    } = PartnerValidator.getPartnerRequestDetails().validate(
      {
        inviteId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getPartnerRequestDetails",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/partner-request/${inviteId}`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = PartnerModel.PartnerInviteDetails().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getPartnerRequestDetails",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Number of records you want to get in single page
   * @param {number} [arg.pageNo] - Number of page
   * @param {string} [arg.query] - Filter query which we want to pass
   * @returns {Promise<ExtensionResponse>} - Success response
   * @summary: Get the list of private extensions
   * @description: Use this API to get the list of private extensions
   */
  async getPrivateExtensions({ pageSize, pageNo, query } = {}) {
    const { error } = PartnerValidator.getPrivateExtensions().validate(
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
    } = PartnerValidator.getPrivateExtensions().validate(
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
        message: "Parameter Validation warrnings for getPrivateExtensions",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = PartnerModel.ExtensionResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getPrivateExtensions",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.extensionId - Extension id
   * @returns {Promise<PublicExtension>} - Success response
   * @summary: Get details of public extension
   * @description: Use this API to get the details of public extensions
   */
  async getPublicExtension({ extensionId } = {}) {
    const { error } = PartnerValidator.getPublicExtension().validate(
      {
        extensionId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PartnerValidator.getPublicExtension().validate(
      {
        extensionId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getPublicExtension",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/public-extension/${extensionId}`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = PartnerModel.PublicExtension().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getPublicExtension",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.inviteId - Invitation id
   * @param {ModifyPartnerReq} arg.body
   * @returns {Promise<PartnerInviteDetails>} - Success response
   * @summary: Act on the pending partner request
   * @description: Use this API to approve or reject the pending partner request
   */
  async modifyPartnerRequest({ inviteId, body } = {}) {
    const { error } = PartnerValidator.modifyPartnerRequest().validate(
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
    } = PartnerValidator.modifyPartnerRequest().validate(
      {
        inviteId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for modifyPartnerRequest",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/partner-request/${inviteId}`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = PartnerModel.PartnerInviteDetails().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for modifyPartnerRequest",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.requestId] - Extrequest id
   * @returns {Promise<SetupProductRes>} - Success response
   * @summary:
   * @description: Use this API for setup
   */
  async setupProducts({ requestId } = {}) {
    const { error } = PartnerValidator.setupProducts().validate(
      {
        requestId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PartnerValidator.setupProducts().validate(
      {
        requestId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for setupProducts",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = PartnerModel.SetupProductRes().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for setupProducts",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entity - Entity
   * @param {string} arg.extensionId - Extension id
   * @param {string} arg.entityId - Entity id
   * @param {SubscriptionRequest} arg.body
   * @returns {Promise<SubscriptionRes>} - Success response
   * @summary: Subscribe for extension plan
   * @description: Use this API to select plan for paid extension
   */
  async subscribeExtension({ entity, extensionId, entityId, body } = {}) {
    const { error } = PartnerValidator.subscribeExtension().validate(
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
    const { error: warrning } = PartnerValidator.subscribeExtension().validate(
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
        message: "Parameter Validation warrnings for subscribeExtension",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/extension/${extensionId}/${entity}/${entityId}/charge_consent`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = PartnerModel.SubscriptionRes().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for subscribeExtension",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Partner;
