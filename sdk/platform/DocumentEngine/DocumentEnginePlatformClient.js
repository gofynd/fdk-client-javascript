const Paginator = require("../../common/Paginator");
const { FDKClientValidationError } = require("../../common/FDKError");
const PlatformAPIClient = require("../PlatformAPIClient");
const DocumentEngineValidator = require("./DocumentEnginePlatformValidator");
const DocumentEngineModel = require("./DocumentEnginePlatformModel");
const { Logger } = require("./../../common/Logger");

class DocumentEngine {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GenerateBulkBoxLabel} arg.body
   * @returns {Promise<SuccessResponseGenerateBulk>} - Success response
   * @summary: Generate Labels for Boxes which will go inside package
   * @description: Use this API to generate label for Boxes
   */
  async generateBulkBoxLabel({ body } = {}) {
    const { error } = DocumentEngineValidator.generateBulkBoxLabel().validate(
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
    } = DocumentEngineValidator.generateBulkBoxLabel().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for generateBulkBoxLabel",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/document/v1.0/company/${this.config.companyId}/generate-bulk-box-label`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = DocumentEngineModel.SuccessResponseGenerateBulk().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for generateBulkBoxLabel",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GenerateBulkPackageLabel} arg.body
   * @returns {Promise<SuccessResponseGenerateBulk>} - Success response
   * @summary: Generate Labels for Packages
   * @description: Use this API to generate label for Packages
   */
  async generateBulkPackageLabel({ body } = {}) {
    const {
      error,
    } = DocumentEngineValidator.generateBulkPackageLabel().validate(
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
    } = DocumentEngineValidator.generateBulkPackageLabel().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for generateBulkPackageLabel",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/document/v1.0/company/${this.config.companyId}/generate-bulk-package-label`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = DocumentEngineModel.SuccessResponseGenerateBulk().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for generateBulkPackageLabel",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GenerateBulkShipmentLabel} arg.body
   * @returns {Promise<SuccessResponseGenerateBulk>} - Success response
   * @summary: Generate Labels for Shipments which contains packaged
   * @description: Use this API to generate label for Shipments
   */
  async generateBulkShipmentLabel({ body } = {}) {
    const {
      error,
    } = DocumentEngineValidator.generateBulkShipmentLabel().validate(
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
    } = DocumentEngineValidator.generateBulkShipmentLabel().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for generateBulkShipmentLabel",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/document/v1.0/company/${this.config.companyId}/generate-bulk-shipment-label`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = DocumentEngineModel.SuccessResponseGenerateBulk().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for generateBulkShipmentLabel",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GenerateNoc} arg.body
   * @returns {Promise<SuccessResponseGenerateBulk>} - Success response
   * @summary: Generate NOC for Seller having access to a fullfillment center
   * @description: Use this API to generate NOC for Seller
   */
  async generateNoc({ body } = {}) {
    const { error } = DocumentEngineValidator.generateNoc().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = DocumentEngineValidator.generateNoc().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for generateNoc",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/document/v1.0/company/${this.config.companyId}/generate-noc`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = DocumentEngineModel.SuccessResponseGenerateBulk().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for generateNoc",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uid - UID given at time of generate request
   * @returns {Promise<SignedSuccessResponse>} - Success response
   * @summary: Get Presigned URL to download labels
   * @description: Use this API to generate Presigned URLs for downloading labels
   */
  async getLabelPresignedURL({ uid } = {}) {
    const { error } = DocumentEngineValidator.getLabelPresignedURL().validate(
      {
        uid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = DocumentEngineValidator.getLabelPresignedURL().validate(
      {
        uid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getLabelPresignedURL",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["uid"] = uid;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/document/v1.0/company/${this.config.companyId}/get-label-presigned-url`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = DocumentEngineModel.SignedSuccessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getLabelPresignedURL",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uid - UID given at time of generate request
   * @returns {Promise<StatusSuccessResponse>} - Success response
   * @summary: Get Staus of Label generations
   * @description: Use this API to fetch status of PDF generation of Labels
   */
  async getLabelStatus({ uid } = {}) {
    const { error } = DocumentEngineValidator.getLabelStatus().validate(
      {
        uid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = DocumentEngineValidator.getLabelStatus().validate(
      {
        uid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getLabelStatus",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["uid"] = uid;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/document/v1.0/company/${this.config.companyId}/get-label-list`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = DocumentEngineModel.StatusSuccessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getLabelStatus",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uid - UID given at time of generate request
   * @returns {Promise<SignedSuccessResponse>} - Success response
   * @summary: Get Presigned URL to download NOC Pdf
   * @description: Use this API to generate Presigned URL for downloading NOC Pdf
   */
  async getNocPresignedURL({ uid } = {}) {
    const { error } = DocumentEngineValidator.getNocPresignedURL().validate(
      {
        uid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = DocumentEngineValidator.getNocPresignedURL().validate(
      {
        uid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getNocPresignedURL",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["uid"] = uid;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/document/v1.0/company/${this.config.companyId}/get-noc-presigned-url`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = DocumentEngineModel.SignedSuccessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getNocPresignedURL",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uid - UID given at time of generate request
   * @returns {Promise<StatusSuccessResponse>} - Success response
   * @summary: Get Staus of NOC generation
   * @description: Use this API to fetch status of PDF generation of NOC
   */
  async getNocStatus({ uid } = {}) {
    const { error } = DocumentEngineValidator.getNocStatus().validate(
      {
        uid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = DocumentEngineValidator.getNocStatus().validate(
      {
        uid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getNocStatus",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["uid"] = uid;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/document/v1.0/company/${this.config.companyId}/get-noc-status`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = DocumentEngineModel.StatusSuccessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getNocStatus",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {InvoiceLabelPresignedRequestBody} arg.body
   * @returns {Promise<SignedSuccessResponse>} - Success response
   * @summary: Get Presigned URL to download PDFs
   * @description: Use this API to generate Presigned URLs for downloading PDFs
   */
  async getPresignedURL({ body } = {}) {
    const { error } = DocumentEngineValidator.getPresignedURL().validate(
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
    } = DocumentEngineValidator.getPresignedURL().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getPresignedURL",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/document/v1.0/company/${this.config.companyId}/get-single-presigned-url`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = DocumentEngineModel.SignedSuccessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getPresignedURL",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = DocumentEngine;
