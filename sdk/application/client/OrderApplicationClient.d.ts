export = Order;
declare class Order {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getShipmentById: string;
        getCustomerDetailsByShipmentId: string;
        sendOtpToShipmentCustomer: string;
        getReasons: string;
        verifyOtp: string;
        getOrders: string;
        getOrderById: string;
        getPosOrderById: string;
        trackShipment: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId -
     * @returns {Promise<ShipmentById>} - Success response
     * @summary:
     * @description:
     */
    getShipmentById({ shipmentId }?: {
        shipmentId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @param {string} arg.shipmentId -
     * @returns {Promise<CustomerDetailsResponse>} - Success response
     * @summary:
     * @description:
     */
    getCustomerDetailsByShipmentId({ orderId, shipmentId }?: {
        orderId: string;
        shipmentId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @param {string} arg.shipmentId -
     * @returns {Promise<SendOtpToCustomerResponse>} - Success response
     * @summary:
     * @description:
     */
    sendOtpToShipmentCustomer({ orderId, shipmentId }?: {
        orderId: string;
        shipmentId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.shipmentId -
     * @param {string} arg.bagId -
     * @returns {Promise<ShipmentReasonsResponse>} - Success response
     * @summary:
     * @description:
     */
    getReasons({ shipmentId, bagId }?: {
        shipmentId: number;
        bagId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @param {number} arg.shipmentId -
     * @param {VerifyOtp} arg.body
     * @returns {Promise<VerifyOtpResponse>} - Success response
     * @summary:
     * @description:
     */
    verifyOtp({ orderId, shipmentId, body }?: {
        orderId: string;
        shipmentId: number;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.status] -
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @returns {Promise<OrderList>} - Success response
     * @summary:
     * @description:
     */
    getOrders({ status, pageNo, pageSize, fromDate, toDate }?: {
        status?: number;
        pageNo?: number;
        pageSize?: number;
        fromDate?: string;
        toDate?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - A unique number used for identifying and
     *   tracking your orders.
     * @returns {Promise<OrderList>} - Success response
     * @summary:
     * @description:
     */
    getOrderById({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - A unique number used for identifying and
     *   tracking your orders.
     * @returns {Promise<OrderList>} - Success response
     * @summary:
     * @description:
     */
    getPosOrderById({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId -
     * @returns {Promise<TrackShipmentResponse>} - Success response
     * @summary:
     * @description:
     */
    trackShipment({ shipmentId }?: {
        shipmentId: string;
    }): Promise<any>;
}
