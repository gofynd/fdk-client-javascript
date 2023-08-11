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
    /** @returns {GetPlatformShipmentReasonsParam} */
    static getPlatformShipmentReasons(): GetPlatformShipmentReasonsParam;
    /** @returns {TrackShipmentPlatformParam} */
    static trackShipmentPlatform(): TrackShipmentPlatformParam;
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
