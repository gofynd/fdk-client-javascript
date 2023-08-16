export = Order;
declare class Order {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getCustomerDetailsByShipmentId: string;
        getInvoiceByShipmentId: string;
        getOrderById: string;
        getOrders: string;
        getPosOrderById: string;
        getShipmentBagReasons: string;
        getShipmentById: string;
        getShipmentReasons: string;
        sendOtpToShipmentCustomer: string;
        trackShipment: string;
        updateShipmentStatus: string;
        verifyOtpShipmentCustomer: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @param {string} arg.shipmentId - A unique number used for identifying and
     *   tracking your orders.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CustomerDetailsResponse>} - Success response
     * @summary: Get Customer Details by Shipment Id
     * @description: Use this API to retrieve customer details such as mobileno using Shipment ID.
     */
    getCustomerDetailsByShipmentId({ orderId, shipmentId }?: {
        orderId: string;
        shipmentId: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<CustomerDetailsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - ID of the shipment.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ResponseGetInvoiceShipment>} - Success response
     * @summary: Get Invoice of a shipment
     * @description: Use this API to retrieve shipment invoice.
     */
    getInvoiceByShipmentId({ shipmentId }?: {
        shipmentId: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<ResponseGetInvoiceShipment>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - A unique number used for identifying and
     *   tracking your orders.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderById>} - Success response
     * @summary: Get details of an order
     * @description: Use this API to retrieve order details such as tracking details, shipment, store information using Fynd Order ID.
     */
    getOrderById({ orderId }?: {
        orderId: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<OrderById>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.status] - A filter to retrieve orders by their
     *   current status such as _placed_, _delivered_, etc.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {string} [arg.fromDate] - The date from which the orders should be
     *   retrieved.
     * @param {string} [arg.toDate] - The date till which the orders should be retrieved.
     * @param {string} [arg.customMeta] - A filter and retrieve data using
     *   special fields included for special use-cases
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderList>} - Success response
     * @summary: Get all orders
     * @description: Use this API to retrieve all the orders.
     */
    getOrders({ status, pageNo, pageSize, fromDate, toDate, customMeta }?: {
        status?: number;
        pageNo?: number;
        pageSize?: number;
        fromDate?: string;
        toDate?: string;
        customMeta?: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<OrderList>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - A unique number used for identifying and
     *   tracking your orders.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderById>} - Success response
     * @summary: Get POS Order
     * @description: Use this API to retrieve a POS order and all its details such as tracking details, shipment, store information using Fynd Order ID.
     */
    getPosOrderById({ orderId }?: {
        orderId: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<OrderById>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - ID of the bag. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @param {string} arg.bagId - ID of the bag. An order may contain multiple
     *   items and may get divided into one or more shipment, each having its own ID.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShipmentBagReasons>} - Success response
     * @summary: Get reasons behind full or partial cancellation of a shipment
     * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
     */
    getShipmentBagReasons({ shipmentId, bagId }?: {
        shipmentId: string;
        bagId: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<ShipmentBagReasons>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShipmentById>} - Success response
     * @summary: Get details of a shipment
     * @description: Use this API to retrieve shipment details such as price breakup, tracking details, store information, etc. using Shipment ID.
     */
    getShipmentById({ shipmentId }?: {
        shipmentId: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<ShipmentById>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShipmentReasons>} - Success response
     * @summary: Get reasons behind full or partial cancellation of a shipment
     * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
     */
    getShipmentReasons({ shipmentId }?: {
        shipmentId: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<ShipmentReasons>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - A unique number used for identifying and
     *   tracking your orders.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SendOtpToCustomerResponse>} - Success response
     * @summary: Send and Resend Otp code to Order-Shipment customer
     * @description: Use this API to send OTP to the customer of the mapped Shipment.
     */
    sendOtpToShipmentCustomer({ orderId, shipmentId }?: {
        orderId: string;
        shipmentId: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<SendOtpToCustomerResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShipmentTrack>} - Success response
     * @summary: Track shipment
     * @description: Track Shipment by shipment id, for application based on application Id
     */
    trackShipment({ shipmentId }?: {
        shipmentId: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<ShipmentTrack>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @param {UpdateShipmentStatusRequest} arg.body
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShipmentApplicationStatusResponse>} - Success response
     * @summary: Update the shipment status
     * @description: Use this API to update the status of a shipment using its shipment ID.
     */
    updateShipmentStatus({ shipmentId, body }?: {
        shipmentId: string;
        body: UpdateShipmentStatusRequest;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<ShipmentApplicationStatusResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - A unique number used for identifying and
     *   tracking your orders.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @param {VerifyOtp} arg.body
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<VerifyOtpResponse>} - Success response
     * @summary: Verify Otp code
     * @description: Use this API to verify OTP and create a session token with custom payload.
     */
    verifyOtpShipmentCustomer({ orderId, shipmentId, body }?: {
        orderId: string;
        shipmentId: string;
        body: VerifyOtp;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<VerifyOtpResponse>;
}
