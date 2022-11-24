const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const DocumentEngineValidator = require("../models/DocumentEngineValidator");
class DocumentEngine {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GenerateBulkPackageLabel} arg.body
   * @summary: Generate Labels for Packages
   * @description: Use this API to generate label for Packages
   */
  generateBulkPackageLabel({ body } = {}) {
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

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/document/v1.0/company/${this.config.companyId}/generate-bulk-package-label`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GenerateBulkBoxLabel} arg.body
   * @summary: Generate Labels for Boxes which will go inside package
   * @description: Use this API to generate label for Boxes
   */
  generateBulkBoxLabel({ body } = {}) {
    const { error } = DocumentEngineValidator.generateBulkBoxLabel().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/document/v1.0/company/${this.config.companyId}/generate-bulk-box-label`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GenerateBulkShipmentLabel} arg.body
   * @summary: Generate Labels for Shipments which contains packaged
   * @description: Use this API to generate label for Shipments
   */
  generateBulkShipmentLabel({ body } = {}) {
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

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/document/v1.0/company/${this.config.companyId}/generate-bulk-shipment-label`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GenerateNoc} arg.body
   * @summary: Generate NOC for Seller having access to a fullfillment center
   * @description: Use this API to generate NOC for Seller
   */
  generateNoc({ body } = {}) {
    const { error } = DocumentEngineValidator.generateNoc().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/document/v1.0/company/${this.config.companyId}/generate-noc`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uid - UID given at time of generate request
   * @summary: Get Staus of Label generations
   * @description: Use this API to fetch status of PDF generation of Labels
   */
  getLabelStatus({ uid } = {}) {
    const { error } = DocumentEngineValidator.getLabelStatus().validate(
      {
        uid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["uid"] = uid;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/document/v1.0/company/${this.config.companyId}/get-label-list`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uid - UID given at time of generate request
   * @summary: Get Staus of NOC generation
   * @description: Use this API to fetch status of PDF generation of NOC
   */
  getNocStatus({ uid } = {}) {
    const { error } = DocumentEngineValidator.getNocStatus().validate(
      {
        uid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["uid"] = uid;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/document/v1.0/company/${this.config.companyId}/get-noc-status`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {InvoiceLabelPresignedRequestBody} arg.body
   * @summary: Get Presigned URL to download PDFs
   * @description: Use this API to generate Presigned URLs for downloading PDFs
   */
  getPresignedURL({ body } = {}) {
    const { error } = DocumentEngineValidator.getPresignedURL().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/document/v1.0/company/${this.config.companyId}/get-single-presigned-url`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uid - UID given at time of generate request
   * @summary: Get Presigned URL to download labels
   * @description: Use this API to generate Presigned URLs for downloading labels
   */
  getLabelPresignedURL({ uid } = {}) {
    const { error } = DocumentEngineValidator.getLabelPresignedURL().validate(
      {
        uid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["uid"] = uid;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/document/v1.0/company/${this.config.companyId}/get-label-presigned-url`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uid - UID given at time of generate request
   * @summary: Get Presigned URL to download NOC Pdf
   * @description: Use this API to generate Presigned URL for downloading NOC Pdf
   */
  getNocPresignedURL({ uid } = {}) {
    const { error } = DocumentEngineValidator.getNocPresignedURL().validate(
      {
        uid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["uid"] = uid;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/document/v1.0/company/${this.config.companyId}/get-noc-presigned-url`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.batchId - Batch_id given at time of generate request
   * @summary: Get Status of Bulk Invoice and Label generation
   * @description: Use this API to fetch status of PDF generation of Bulk Invoice and Label
   */
  getBulkShipmentStatus({ batchId } = {}) {
    const { error } = DocumentEngineValidator.getBulkShipmentStatus().validate(
      {
        batchId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["batch_id"] = batchId;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/document/v2.0/company/${this.config.companyId}/bulk-shipment-status`,
      query_params,
      undefined,
      xHeaders
    );
  }
}

module.exports = DocumentEngine;
