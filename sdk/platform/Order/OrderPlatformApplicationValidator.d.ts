export = OrderPlatformApplicationValidator;
/**
 * @typedef GetPlatformShipmentReasonsParam
 * @property {string} action
 */
/**
 * @typedef TrackShipmentPlatformParam
 * @property {string} shipmentId - Shipment Id
 */
declare class OrderPlatformApplicationValidator {
    /** @returns {getPlatformShipmentReasons} */
    static getPlatformShipmentReasons(): getPlatformShipmentReasons;
    /** @returns {trackShipmentPlatform} */
    static trackShipmentPlatform(): trackShipmentPlatform;
}
declare namespace OrderPlatformApplicationValidator {
    export { GetPlatformShipmentReasonsParam, TrackShipmentPlatformParam };
}
type GetPlatformShipmentReasonsParam = {
    action: string;
};
type TrackShipmentPlatformParam = {
    /**
     * - Shipment Id
     */
    shipmentId: string;
};
