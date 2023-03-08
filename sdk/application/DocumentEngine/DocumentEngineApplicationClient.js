const APIClient = require("../ApplicationAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const { FDKClientValidationError } = require("../../common/FDKError");
const DocumentEngineValidator = require("./DocumentEngineApplicationValidator");

class DocumentEngine {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getInvoiceByShipmentId:
        "/service/application/document/v1.0/orders/shipments/{shipment_id}/invoice",
      getCreditNoteByShipmentId:
        "/service/application/document/v1.0/orders/shipments/{shipment_id}/credit-note",
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - Shiment ID
   * @param {invoiceParameter} [arg.parameters] -
   * @returns {Promise<ResponseGetInvoiceShipment>} - Success response
   * @summary: Get Presigned URL to download Invoice
   * @description: Use this API to generate Presigned URLs for downloading Invoice
   */
  getInvoiceByShipmentId({ shipmentId, parameters } = {}) {
    const { error } = DocumentEngineValidator.getInvoiceByShipmentId().validate(
      { shipmentId, parameters },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["parameters"] = parameters;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getInvoiceByShipmentId"],
        params: { shipmentId },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - Shiment ID
   * @param {creditNoteParameter} [arg.parameters] -
   * @returns {Promise<ResponseGetInvoiceShipment>} - Success response
   * @summary: Get Presigned URL to download Invoice
   * @description: Use this API to generate Presigned URLs for downloading Invoice
   */
  getCreditNoteByShipmentId({ shipmentId, parameters } = {}) {
    const {
      error,
    } = DocumentEngineValidator.getCreditNoteByShipmentId().validate(
      { shipmentId, parameters },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["parameters"] = parameters;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCreditNoteByShipmentId"],
        params: { shipmentId },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }
}

module.exports = DocumentEngine;
