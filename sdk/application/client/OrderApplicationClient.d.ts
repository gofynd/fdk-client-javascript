export = Order;
declare class Order {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getOrders: string;
        getOrderById: string;
        getShipmentById: string;
        getShipmentReasons: string;
        getShipmentBagReasons: string;
        updateShipmentStatus: string;
        trackShipment: string;
        getPosOrderById: string;
        getCustomerDetailsByShipmentId: string;
        sendOtpToShipmentCustomer: string;
        verifyOtpShipmentCustomer: string;
        getInvoiceByShipmentId: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {string} [arg.fromDate] - The date from which the orders should be
     *   retrieved.
     * @param {string} [arg.toDate] - The date till which the orders should be retrieved.
     * @param {number} [arg.status] - A filter to retrieve orders by their
     *   current status such as *placed*, *delivered*, etc.
     * @returns {Promise<OrderList>} - Success response
     * @summary: Get all orders
     * @description: Use this API to retrieve all the orders.
     */
    getOrders({ pageNo, pageSize, fromDate, toDate, status }?: {
        pageNo?: number;
        pageSize?: number;
        fromDate?: string;
        toDate?: string;
        status?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - A unique number used for identifying and
     *   tracking your orders.
     * @returns {Promise<OrderById>} - Success response
     * @summary: Get details of an order
     * @description: Use this API to retrieve order details such as tracking details, shipment, store information using Fynd Order ID.
     */
    getOrderById({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @returns {Promise<ShipmentById>} - Success response
     * @summary: Get details of a shipment
     * @description: Use this API to retrieve shipment details such as price breakup, tracking details, store information, etc. using Shipment ID.
     */
    getShipmentById({ shipmentId }?: {
        shipmentId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @returns {Promise<ShipmentReasons>} - Success response
     * @summary: Get reasons behind full or partial cancellation of a shipment
     * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
     */
    getShipmentReasons({ shipmentId }?: {
        shipmentId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @param {string} arg.bagId - ID of the bag.
     * @returns {Promise<ShipmentBagReasons>} - Success response
     * @summary: Get reasons at l1,l2 and l3 for cancellation and return based on department
     * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
     */
    getShipmentBagReasons({ shipmentId, bagId }?: {
        shipmentId: string;
        bagId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @param {ShipmentStatusUpdateBody} arg.body
     * @returns {Promise<ShipmentStatusUpdate>} - Success response
     * @summary: Update the shipment status
     * @description: Use this API to update the status of a shipment using its shipment ID.
     */
    updateShipmentStatus({ shipmentId, body }?: {
        shipmentId: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @returns {Promise<ShipmentTrack>} - Success response
     * @summary: Track shipment
     * @description: Use this API to track a shipment using its shipment ID.
     */
    trackShipment({ shipmentId }?: {
        shipmentId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - A unique number used for identifying and
     *   tracking your orders.
     * @returns {Promise<PosOrderById>} - Success response
     * @summary: Get POS Order
     * @description: Use this API to retrieve a POS order and all its details such as tracking details, shipment, store information using Fynd Order ID.
     */
    getPosOrderById({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - A unique number used for identifying and
     *   tracking your orders.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @returns {Promise<CustomerDetailsByShipmentId>} - Success response
     * @summary: Get Customer Details by Shipment Id
     * @description: Use this API to retrieve customer details such as mobileno using Shipment ID.
     */
    getCustomerDetailsByShipmentId({ orderId, shipmentId }?: {
        orderId: string;
        shipmentId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - A unique number used for identifying and
     *   tracking your orders.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @returns {Promise<sendOTPApplicationResponse>} - Success response
     * @summary: Send and Resend Otp code to Order-Shipment customer
     * @description: Use this API to send OTP to the customer of the mapped Shipment.
     */
    sendOtpToShipmentCustomer({ orderId, shipmentId }?: {
        orderId: string;
        shipmentId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - A unique number used for identifying and
     *   tracking your orders.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @param {ReqBodyVerifyOTPShipment} arg.body
     * @returns {Promise<ResponseVerifyOTPShipment>} - Success response
     * @summary: Verify Otp code
     * @description: Use this API to verify OTP and create a session token with custom payload.
     */
    verifyOtpShipmentCustomer({ orderId, shipmentId, body }?: {
        orderId: string;
        shipmentId: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @returns {Promise<ResponseGetInvoiceShipment>} - Success response
     * @summary: Get Invoice URL
     * @description: Use this API to get a generated Invoice URL for viewing or download.
     */
    getInvoiceByShipmentId({ shipmentId }?: {
        shipmentId: string;
    }): Promise<any>;
}
