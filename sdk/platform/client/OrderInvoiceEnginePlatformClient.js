const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const OrderInvoiceEngineValidator = require("../models/OrderInvoiceEngineValidator");
class OrderInvoiceEngine {
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
    } = OrderInvoiceEngineValidator.generateBulkPackageLabel().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/invoice/v1.0/company/${this.config.companyId}/generate-bulk-package-label`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GenerateBulkBoxLabel} arg.body
   * @summary: Generate Labels for Boxes which will go inside package
   * @description: Use this API to generate label for Boxes
   */
  generateBulkBoxLabel({ body } = {}) {
    const {
      error,
    } = OrderInvoiceEngineValidator.generateBulkBoxLabel().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/invoice/v1.0/company/${this.config.companyId}/generate-bulk-box-label`,
      query_params,
      body
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
    } = OrderInvoiceEngineValidator.generateBulkShipmentLabel().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/invoice/v1.0/company/${this.config.companyId}/generate-bulk-shipment-label`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uid - UID given at time of generate request
   * @summary: Get Staus of Label generations
   * @description: Use this API to fetch status of PDF generation of Labels
   */
  getLabelStatus({ uid } = {}) {
    const { error } = OrderInvoiceEngineValidator.getLabelStatus().validate(
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

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/invoice/v1.0/company/${this.config.companyId}/get-label-list`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uid - UID given at time of generate request
   * @summary: Get Presigned URL to download labels
   * @description: Use this API to generate Presigned URLs for downloading labels
   */
  getLabelPresignedURL({ uid } = {}) {
    const {
      error,
    } = OrderInvoiceEngineValidator.getLabelPresignedURL().validate(
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

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/invoice/v1.0/company/${this.config.companyId}/get-label-presigned-url`,
      query_params,
      undefined
    );
  }
}

module.exports = OrderInvoiceEngine;
