const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const OrderManageValidator = require("../models/OrderManageValidator");
class OrderManage {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PlatformShipmentStatusInternal} arg.body
   * @summary:
   * @description:
   */
  statusInternalUpdate({ body } = {}) {
    const { error } = OrderManageValidator.statusInternalUpdate().validate(
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
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/shipment/status-internal`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.bagId -
   * @summary:
   * @description:
   */
  getShipmentHistory({ bagId } = {}) {
    const { error } = OrderManageValidator.getShipmentHistory().validate(
      {
        bagId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["bag_id"] = bagId;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/shipment/history`,
      query_params,
      undefined,
      xHeaders
    );
  }
}

module.exports = OrderManage;
