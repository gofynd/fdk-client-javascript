export = OrderManage;
declare class OrderManage {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {PlatformShipmentStatusInternal} arg.body
     * @summary:
     * @description:
     */
    statusInternalUpdate({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.bagId -
     * @summary:
     * @description:
     */
    getShipmentHistory({ bagId }?: {
        bagId: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ManualStoreReassign} arg.body
     * @summary:
     * @description: Manual Store Reassignment
     */
    manualStoreReassignment({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ShipmentEDDUpdate} arg.body
     * @summary:
     * @description: Shipment EDD Update
     */
    shipmentEDDUpdate({ body }?: {
        body: any;
    }): Promise<any>;
}
