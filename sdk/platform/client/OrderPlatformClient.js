const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const OrderValidator = require("../models/OrderValidator");
class Order {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.url -
   * @summary: emits uuid to kafka topic.
   * @description: Use this API to start processing Xlsx file.
   */
  bulkActionProcessXlsxFile({ url } = {}) {
    const { error } = OrderValidator.bulkActionProcessXlsxFile().validate(
      {
        url,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["url"] = url;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/orders/v2.0/company/${this.config.companyId}/bulk-action/`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.batchId -
   * @summary: Returns failed, processing and successfully processed shipments.
   * @description: Returns failed, processing and successfully processed shipments along with their counts and failed reasons.
   */
  bulkActionDetails({ batchId } = {}) {
    const { error } = OrderValidator.bulkActionDetails().validate(
      {
        batchId,
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
      "get",
      `/service/platform/orders/v2.0/company/${this.config.companyId}/bulk-action/${batchId}`,
      query_params,
      undefined,
      xHeaders
    );
  }
}

module.exports = Order;
