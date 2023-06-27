const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const OrderValidator = require("./OrderPlatformApplicationValidator");
const OrderModel = require("./OrderPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Order {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.action -
   * @returns {Promise<ShipmentReasonsResponse>} - Success response
   * @summary: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
   * @description: Using action, get reasons behind full or partial cancellation of a shipment
   */
  async getPlatformShipmentReasons({ action } = {}) {
    const { error } = OrderValidator.getPlatformShipmentReasons().validate(
      {
        action,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderValidator.getPlatformShipmentReasons().validate(
      {
        action,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for getPlatformShipmentReasons",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/shipments/reasons/${action}`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = OrderModel.ShipmentReasonsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getPlatformShipmentReasons",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - Shipment Id
   * @returns {Promise<PlatformShipmentTrack>} - Success response
   * @summary: Track shipment
   * @description: Track Shipment by shipment id, for application based on application Id
   */
  async trackShipmentPlatform({ shipmentId } = {}) {
    const { error } = OrderValidator.trackShipmentPlatform().validate(
      {
        shipmentId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.trackShipmentPlatform().validate(
      {
        shipmentId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for trackShipmentPlatform",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/shipments/${shipmentId}/track`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = OrderModel.PlatformShipmentTrack().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for trackShipmentPlatform",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Order;
