export = Order;
declare class Order {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {OrderPlatformApplicationValidator.GetPlatformShipmentReasonsParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentReasonsResponse>} - Success response
     * @name getPlatformShipmentReasons
     * @summary: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
     * @description: Using action, get reasons behind full or partial cancellation of a shipment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getPlatformShipmentReasons/).
     */
    getPlatformShipmentReasons({ action }?: OrderPlatformApplicationValidator.GetPlatformShipmentReasonsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.ShipmentReasonsResponse>;
    /**
     * @param {OrderPlatformApplicationValidator.TrackShipmentPlatformParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.PlatformShipmentTrack>} - Success response
     * @name trackShipmentPlatform
     * @summary: Track shipment
     * @description: Track Shipment by shipment id, for application based on application Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/trackShipmentPlatform/).
     */
    trackShipmentPlatform({ shipmentId }?: OrderPlatformApplicationValidator.TrackShipmentPlatformParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.PlatformShipmentTrack>;
}
import OrderPlatformApplicationValidator = require("./OrderPlatformApplicationValidator");
import OrderPlatformModel = require("./OrderPlatformModel");
