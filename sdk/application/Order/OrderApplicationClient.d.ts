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
        submitDeliveryReattemptRequest: string;
        trackShipment: string;
        updateShipmentStatus: string;
        verifyOtpShipmentCustomer: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CustomerDetailsResponseSchema>} - Success response
     * @name getCustomerDetailsByShipmentId
     * @summary: Get shipment's customer
     * @description: Get customer details such as mobile number using Shipment ID. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/getCustomerDetailsByShipmentId/).
     */
    getCustomerDetailsByShipmentId({ orderId, shipmentId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<CustomerDetailsResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ResponseGetInvoiceShipment>} - Success response
     * @name getInvoiceByShipmentId
     * @summary: Retrieves invoice for shipment
     * @description: Get invoice corresponding to a specific shipment ID. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/getInvoiceByShipmentId/).
     */
    getInvoiceByShipmentId({ shipmentId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ResponseGetInvoiceShipment>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderById>} - Success response
     * @name getOrderById
     * @summary: Get an order
     * @description: Get order details such as tracking details, shipment, store information using Fynd Order ID. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/getOrderById/).
     */
    getOrderById({ orderId, allowInactive, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<OrderById>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderList>} - Success response
     * @name getOrders
     * @summary: List customer orders
     * @description: Get all orders associated with a customer account. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/getOrders/).
     */
    getOrders({ status, pageNo, pageSize, fromDate, toDate, startDate, endDate, customMeta, allowInactive, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<OrderList>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderById>} - Success response
     * @name getPosOrderById
     * @summary: Retrieves POS order details
     * @description: Retrieve a POS order and all its details such as tracking details, shipment, store information using Fynd Order ID. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/getPosOrderById/).
     */
    getPosOrderById({ orderId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<OrderById>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShipmentBagReasons>} - Success response
     * @name getShipmentBagReasons
     * @summary: Retrieve Reasons for Cancellation and Return journey
     * @description: Allows users to retrieve a comprehensive list of reasons for cancellation  or returning a shipment. It provides both cancellation and return reasons, with an emphasis  on Quality Control (QC) evaluations. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/getShipmentBagReasons/).
     */
    getShipmentBagReasons({ shipmentId, bagId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ShipmentBagReasons>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShipmentById>} - Success response
     * @name getShipmentById
     * @summary: Get a Shipment
     * @description: Get shipment details such as price breakup, tracking details, store information, etc. using Shipment ID. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/getShipmentById/).
     */
    getShipmentById({ shipmentId, allowInactive, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ShipmentById>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShipmentReasons>} - Success response
     * @name getShipmentReasons
     * @summary: List shipment cancellation reasons
     * @description: Get reasons to perform full or partial cancellation of a shipment. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/getShipmentReasons/).
     */
    getShipmentReasons({ shipmentId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ShipmentReasons>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SendOtpToCustomerResponseSchema>} - Success response
     * @name sendOtpToShipmentCustomer
     * @summary: Send OTP to customer
     * @description: Send OTP to the customer for shipment verification. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/sendOtpToShipmentCustomer/).
     */
    sendOtpToShipmentCustomer({ orderId, shipmentId, eventType, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<SendOtpToCustomerResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<DeliveryReattemptSuccessResponseSchema>} - Success response
     * @name submitDeliveryReattemptRequest
     * @summary: Initiates a delivery reattempt request for a given shipment
     * @description: This operation allows customers to submit a request for reattempting the delivery of a specific shipment  with optional address updates and a new delivery date. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/submitDeliveryReattemptRequest/).
     */
    submitDeliveryReattemptRequest({ shipmentId, body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<DeliveryReattemptSuccessResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShipmentTrack>} - Success response
     * @name trackShipment
     * @summary: Track shipment status
     * @description: Track Shipment by shipment id, for application based on application Id. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/trackShipment/).
     */
    trackShipment({ shipmentId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ShipmentTrack>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShipmentApplicationStatusResponseSchema>} - Success response
     * @name updateShipmentStatus
     * @summary: Updates shipment status
     * @description: This operation allows for updating the status and properties of a shipment.  For example, it allows users to initiate a return by providing reasons and  uploading quality check images. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/updateShipmentStatus/).
     */
    updateShipmentStatus({ shipmentId, body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ShipmentApplicationStatusResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<VerifyOtpResponseSchema>} - Success response
     * @name verifyOtpShipmentCustomer
     * @summary: Verifies OTP
     * @description: Verify OTP for getting shipment details - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/verifyOtpShipmentCustomer/).
     */
    verifyOtpShipmentCustomer({ orderId, shipmentId, body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<VerifyOtpResponseSchema>;
}
