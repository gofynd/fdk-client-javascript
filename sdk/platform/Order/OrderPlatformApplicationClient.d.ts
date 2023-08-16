export = Order;
declare class Order {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.action -
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ShipmentReasonsResponse>} - Success response
     * @summary: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
     * @description: Using action, get reasons behind full or partial cancellation of a shipment
     */
    getPlatformShipmentReasons({ action }?: {
        action: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ShipmentReasonsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - Shipment Id
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PlatformShipmentTrack>} - Success response
     * @summary: Track shipment
     * @description: Track Shipment by shipment id, for application based on application Id
     */
    trackShipmentPlatform({ shipmentId }?: {
        shipmentId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PlatformShipmentTrack>;
}
