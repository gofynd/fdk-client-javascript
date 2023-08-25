const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const OrderPlatformApplicationValidator = require("./OrderPlatformApplicationValidator");
const OrderPlatformModel = require("./OrderPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Order {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {OrderPlatformApplicationValidator.GetPlatformShipmentReasonsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.ShipmentReasonsResponse>} - Success response
   * @name getPlatformShipmentReasons
   * @summary: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
   * @description: Using action, get reasons behind full or partial cancellation of a shipment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getPlatformShipmentReasons/).
   */
  async getPlatformShipmentReasons(
    { action, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderPlatformApplicationValidator.getPlatformShipmentReasons().validate(
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
    } = OrderPlatformApplicationValidator.getPlatformShipmentReasons().validate(
      {
        action,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getPlatformShipmentReasons \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/shipments/reasons/${action}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = OrderPlatformModel.ShipmentReasonsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getPlatformShipmentReasons \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformApplicationValidator.TrackShipmentPlatformParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.PlatformShipmentTrack>} - Success response
   * @name trackShipmentPlatform
   * @summary: Track shipment
   * @description: Track Shipment by shipment id, for application based on application Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/trackShipmentPlatform/).
   */
  async trackShipmentPlatform(
    { shipmentId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderPlatformApplicationValidator.trackShipmentPlatform().validate(
      {
        shipmentId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformApplicationValidator.trackShipmentPlatform().validate(
      {
        shipmentId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > trackShipmentPlatform \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/shipments/${shipmentId}/track`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = OrderPlatformModel.PlatformShipmentTrack().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > trackShipmentPlatform \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Order;
