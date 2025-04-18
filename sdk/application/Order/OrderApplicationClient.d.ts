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
        getRefundOptions: string;
        getShipmentBagReasons: string;
        getShipmentById: string;
        getShipmentReasons: string;
        getShipmentRefundSummary: string;
        sendOtpToShipmentCustomer: string;
        trackShipment: string;
        updateShipmentStatus: string;
        verifyOtpShipmentCustomer: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CustomerDetailsResponse>} - Success response
     * @name getCustomerDetailsByShipmentId
     * @summary: Retrieves shipment customer.
     * @description: Get customer details such as mobile number using Shipment ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getCustomerDetailsByShipmentId/).
     */
    getCustomerDetailsByShipmentId({ orderId, shipmentId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<CustomerDetailsResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ResponseGetInvoiceShipment>} - Success response
     * @name getInvoiceByShipmentId
     * @summary: Retrieves invoice for shipment.
     * @description: Get invoice corresponding to a specific shipment ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getInvoiceByShipmentId/).
     */
    getInvoiceByShipmentId({ shipmentId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ResponseGetInvoiceShipment>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderById>} - Success response
     * @name getOrderById
     * @summary: Fetches order by ID.
     * @description: Get order details such as tracking details, shipment, store information using Fynd Order ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getOrderById/).
     */
    getOrderById({ orderId, allowInactive, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<OrderById>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderList>} - Success response
     * @name getOrders
     * @summary: Lists customer orders.
     * @description: Get all orders associated with a customer account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getOrders/).
     */
    getOrders({ status, pageNo, pageSize, fromDate, toDate, startDate, endDate, customMeta, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<OrderList>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderById>} - Success response
     * @name getPosOrderById
     * @summary: Retrieves POS order details.
     * @description: Retrieve a POS order and all its details such as tracking details, shipment, store information using Fynd Order ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getPosOrderById/).
     */
    getPosOrderById({ orderId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<OrderById>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RefundOptionsSchemaResponse>} - Success response
     * @name getRefundOptions
     * @summary: Retrieve refund options with amount breakup for  specific shipment and bags.
     * @description: This API can be used for giving the refund amount with available option of MOPs. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getRefundOptions/).
     */
    getRefundOptions({ shipmentId, bagIds, state, optinAppId, optinCompanyId, status, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<RefundOptionsSchemaResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShipmentBagReasons>} - Success response
     * @name getShipmentBagReasons
     * @summary: Lists bag reasons.
     * @description: Get reasons to perform full or partial cancellation of a bag. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getShipmentBagReasons/).
     */
    getShipmentBagReasons({ shipmentId, bagId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ShipmentBagReasons>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShipmentById>} - Success response
     * @name getShipmentById
     * @summary: Fetches shipment by ID.
     * @description: Get shipment details such as price breakup, tracking details, store information, etc. using Shipment ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getShipmentById/).
     */
    getShipmentById({ shipmentId, allowInactive, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ShipmentById>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShipmentReasons>} - Success response
     * @name getShipmentReasons
     * @summary: Lists shipment reasons.
     * @description: Get reasons to perform full or partial cancellation of a shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getShipmentReasons/).
     */
    getShipmentReasons({ shipmentId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ShipmentReasons>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShipmentRefundSummaryResponse>} - Success response
     * @name getShipmentRefundSummary
     * @summary: Retreives shipment's refund summary.
     * @description: Retreives shipment's refund summary using its shipment ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getShipmentRefundSummary/).
     */
    getShipmentRefundSummary({ shipmentId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ShipmentRefundSummaryResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SendOtpToCustomerResponse>} - Success response
     * @name sendOtpToShipmentCustomer
     * @summary: Sends OTP to customer.
     * @description: Send OTP to the customer for shipment verification. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/sendOtpToShipmentCustomer/).
     */
    sendOtpToShipmentCustomer({ orderId, shipmentId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<SendOtpToCustomerResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShipmentTrack>} - Success response
     * @name trackShipment
     * @summary: Tracks shipment status.
     * @description: Track Shipment by shipment id, for application based on application Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/trackShipment/).
     */
    trackShipment({ shipmentId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ShipmentTrack>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShipmentApplicationStatusResponse>} - Success response
     * @name updateShipmentStatus
     * @summary: Updates shipment status.
     * @description: Update current status of a specific shipment using its shipment ID. Supports both partial and full transition as per the configured settings. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/updateShipmentStatus/).
     */
    updateShipmentStatus({ shipmentId, body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ShipmentApplicationStatusResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<VerifyOtpResponse>} - Success response
     * @name verifyOtpShipmentCustomer
     * @summary: Verifies OTP.
     * @description: Verify OTP sent by customer. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/verifyOtpShipmentCustomer/).
     */
    verifyOtpShipmentCustomer({ orderId, shipmentId, body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<VerifyOtpResponse>;
}
