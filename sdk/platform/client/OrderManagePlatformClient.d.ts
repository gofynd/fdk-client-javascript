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
     * @param {PlatformOrderUpdate} arg.body
     * @summary:
     * @description:
     */
    orderUpdate({ body }?: {
        body: any;
    }): Promise<any>;
}
