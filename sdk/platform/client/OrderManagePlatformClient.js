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

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/shipment/status-internal`,
      query_params,
      body
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

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/shipment/history`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ManualStoreReassign} arg.body
   * @summary:
   * @description: Manual Store Reassignment
   */
  manualStoreReassignment({ body } = {}) {
    const { error } = OrderManageValidator.manualStoreReassignment().validate(
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
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/store/manual-reassign`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ShipmentEDDUpdate} arg.body
   * @summary:
   * @description: Shipment EDD Update
   */
  shipmentEDDUpdate({ body } = {}) {
    const { error } = OrderManageValidator.shipmentEDDUpdate().validate(
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
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/shipment/edd-update`,
      query_params,
      body
    );
  }
}

module.exports = OrderManage;
