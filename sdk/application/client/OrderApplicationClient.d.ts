export = Order;
declare class Order {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getShipmentById: string;
        getCustomerDetailsByShipmentId: string;
        sendOtpToShipmentCustomer: string;
        getShipmentReasons: string;
        verifyOtpShipmentCustomer: string;
        getOrders: string;
        getOrderById: string;
        getPosOrderById: string;
        trackShipment: string;
        updateShipmentStatus: string;
        getInvoiceByShipmentId: string;
        getCreditNoteByShipmentId: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
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
     * @param {string} arg.orderId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @param {string} arg.shipmentId - A unique number used for identifying and
     *   tracking your orders.
     * @returns {Promise<CustomerDetailsResponse>} - Success response
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
     * @returns {Promise<SendOtpToCustomerResponse>} - Success response
     * @summary: Send and Resend Otp code to Order-Shipment customer
     * @description: Use this API to send OTP to the customer of the mapped Shipment.
     */
    sendOtpToShipmentCustomer({ orderId, shipmentId }?: {
        orderId: string;
        shipmentId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @param {string} arg.bagId - Bag Id of a specefic bags which will help to
     *   categorize the reasons
     * @returns {Promise<ShipmentReasonsResponse>} - Success response
     * @summary: Get reasons behind full or partial cancellation of a shipment
     * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
     */
    getShipmentReasons({ shipmentId, bagId }?: {
        shipmentId: number;
        bagId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - A unique number used for identifying and
     *   tracking your orders.
     * @param {number} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @param {VerifyOtp} arg.body
     * @returns {Promise<VerifyOtpResponse>} - Success response
     * @summary: Verify Otp code
     * @description: Use this API to verify OTP and create a session token with custom payload.
     */
    verifyOtpShipmentCustomer({ orderId, shipmentId, body }?: {
        orderId: string;
        shipmentId: number;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.status] - A filter to retrieve orders by their
     *   current status such as *placed*, *delivered*, etc.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {string} [arg.fromDate] - The date from which the orders should be
     *   retrieved.
     * @param {string} [arg.toDate] - The date till which the orders should be retrieved.
     * @returns {Promise<OrderList>} - Success response
     * @summary: Get all orders
     * @description: Use this API to retrieve all the orders.
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
     * @summary: Get details of an order
     * @description: Use this API to retrieve order details such as tracking details, shipment, store information using Fynd Order ID.
     */
    getOrderById({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - A unique number used for identifying and
     *   tracking your orders.
     * @returns {Promise<OrderList>} - Success response
     * @summary: Get POS Order
     * @description: Use this API to retrieve a POS order and all its details such as tracking details, shipment, store information using Fynd Order ID.
     */
    getPosOrderById({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @returns {Promise<TrackShipmentResponse>} - Success response
     * @summary: Track shipment
     * @description: Track Shipment by shipment id, for application based on application Id
     */
    trackShipment({ shipmentId }?: {
        shipmentId: string;
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
     * @param {string} arg.shipmentId - Shiment ID
     * @param {invoiceParameter} [arg.parameters] -
     * @returns {Promise<getInvoiceByShipmentId200Response>} - Success response
     * @summary: Get Presigned URL to download Invoice
     * @description: Use this API to generate Presigned URLs for downloading Invoice
     */
    getInvoiceByShipmentId({ shipmentId, parameters }?: {
        shipmentId: string;
        parameters?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - Shiment ID
     * @param {creditNoteParameter} [arg.parameters] -
     * @returns {Promise<getInvoiceByShipmentId200Response>} - Success response
     * @summary: Get Presigned URL to download Invoice
     * @description: Use this API to generate Presigned URLs for downloading Invoice
     */
    getCreditNoteByShipmentId({ shipmentId, parameters }?: {
        shipmentId: string;
        parameters?: any;
    }): Promise<any>;
}
