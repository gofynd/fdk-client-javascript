export = Order;
declare class Order {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {OrderPlatformApplicationValidator.getAppOrderShipmentDetails} arg
     *   - Arg object
     *
     * @returns {Promise<OrderPlatformModel.OrderDetailsResponse>} - Success response
     * @name getAppOrderShipmentDetails
     * @summary:
     * @description:
     */
    getAppOrderShipmentDetails({ orderId }?: OrderPlatformApplicationValidator.getAppOrderShipmentDetails): Promise<OrderPlatformModel.OrderDetailsResponse>;
    /**
     * @param {OrderPlatformApplicationValidator.getApplicationShipments} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponse>}
     *   - Success response
     *
     * @name getApplicationShipments
     * @summary:
     * @description:
     */
    getApplicationShipments({ lane, searchType, searchId, fromDate, toDate, dpIds, orderingCompanyId, stores, salesChannels, requestByExt, pageNo, pageSize, customerId, isPrioritySort, }?: OrderPlatformApplicationValidator.getApplicationShipments): Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponse>;
    /**
     * @param {OrderPlatformApplicationValidator.getPlatformShipmentReasons} arg
     *   - Arg object
     *
     * @returns {Promise<OrderPlatformModel.ShipmentReasonsResponse>} - Success response
     * @name getPlatformShipmentReasons
     * @summary: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
     * @description: Using action, get reasons behind full or partial cancellation of a shipment
     */
    getPlatformShipmentReasons({ action }?: OrderPlatformApplicationValidator.getPlatformShipmentReasons): Promise<OrderPlatformModel.ShipmentReasonsResponse>;
    /**
     * @param {OrderPlatformApplicationValidator.trackShipmentPlatform} arg - Arg object
     * @returns {Promise<OrderPlatformModel.PlatformShipmentTrack>} - Success response
     * @name trackShipmentPlatform
     * @summary: Track shipment
     * @description: Track Shipment by shipment id, for application based on application Id
     */
    trackShipmentPlatform({ shipmentId }?: OrderPlatformApplicationValidator.trackShipmentPlatform): Promise<OrderPlatformModel.PlatformShipmentTrack>;
}
import OrderPlatformApplicationValidator = require("./OrderPlatformApplicationValidator");
import OrderPlatformModel = require("./OrderPlatformModel");
