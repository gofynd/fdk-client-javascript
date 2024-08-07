export = Order;
declare class Order {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getCustomerDetailsByShipmentId: string;
        getInvoiceByShipmentId: string;
        getOrderById: string;
        getOrders: string;
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
     * @param {OrderApplicationValidator.GetCustomerDetailsByShipmentIdParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.CustomerDetailsResponse>} -
     *   Success response
     * @name getCustomerDetailsByShipmentId
     * @summary: Get shipment's customer
     * @description: Get customer details such as mobile number using Shipment ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getCustomerDetailsByShipmentId/).
     */
    getCustomerDetailsByShipmentId({ orderId, shipmentId, requestHeaders }?: OrderApplicationValidator.GetCustomerDetailsByShipmentIdParam, { responseHeaders }?: object): Promise<OrderApplicationModel.CustomerDetailsResponse>;
    /**
     * @param {OrderApplicationValidator.GetInvoiceByShipmentIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.ResponseGetInvoiceShipment>} -
     *   Success response
     * @name getInvoiceByShipmentId
     * @summary: Retrieves invoice for shipment
     * @description: Get invoice corresponding to a specific shipment ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getInvoiceByShipmentId/).
     */
    getInvoiceByShipmentId({ shipmentId, requestHeaders }?: OrderApplicationValidator.GetInvoiceByShipmentIdParam, { responseHeaders }?: object): Promise<OrderApplicationModel.ResponseGetInvoiceShipment>;
    /**
     * @param {OrderApplicationValidator.GetOrderByIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.OrderById>} - Success response
     * @name getOrderById
     * @summary: Get an order
     * @description: Get order details such as tracking details, shipment, store information using Fynd Order ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getOrderById/).
     */
    getOrderById({ orderId, allowInactive, requestHeaders }?: OrderApplicationValidator.GetOrderByIdParam, { responseHeaders }?: object): Promise<OrderApplicationModel.OrderById>;
    /**
     * @param {OrderApplicationValidator.GetOrdersParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.OrderList>} - Success response
     * @name getOrders
     * @summary: List customer orders
     * @description: Get all orders associated with a customer account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getOrders/).
     */
    getOrders({ status, pageNo, pageSize, fromDate, toDate, startDate, endDate, customMeta, allowInactive, requestHeaders, }?: OrderApplicationValidator.GetOrdersParam, { responseHeaders }?: object): Promise<OrderApplicationModel.OrderList>;
    /**
     * @param {OrderApplicationValidator.GetShipmentBagReasonsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.ShipmentBagReasons>} - Success response
     * @name getShipmentBagReasons
     * @summary: List bag cancellation reasons
     * @description: Get reasons to perform full or partial cancellation of a bag. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getShipmentBagReasons/).
     */
    getShipmentBagReasons({ shipmentId, bagId, requestHeaders }?: OrderApplicationValidator.GetShipmentBagReasonsParam, { responseHeaders }?: object): Promise<OrderApplicationModel.ShipmentBagReasons>;
    /**
     * @param {OrderApplicationValidator.GetShipmentByIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.ShipmentById>} - Success response
     * @name getShipmentById
     * @summary: Get a Shipment
     * @description: Get shipment details such as price breakup, tracking details, store information, etc. using Shipment ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getShipmentById/).
     */
    getShipmentById({ shipmentId, allowInactive, requestHeaders }?: OrderApplicationValidator.GetShipmentByIdParam, { responseHeaders }?: object): Promise<OrderApplicationModel.ShipmentById>;
    /**
     * @param {OrderApplicationValidator.GetShipmentReasonsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.ShipmentReasons>} - Success response
     * @name getShipmentReasons
     * @summary: List shipment cancellation reasons
     * @description: Get reasons to perform full or partial cancellation of a shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getShipmentReasons/).
     */
    getShipmentReasons({ shipmentId, requestHeaders }?: OrderApplicationValidator.GetShipmentReasonsParam, { responseHeaders }?: object): Promise<OrderApplicationModel.ShipmentReasons>;
    /**
     * @param {OrderApplicationValidator.SendOtpToShipmentCustomerParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.SendOtpToCustomerResponse>} -
     *   Success response
     * @name sendOtpToShipmentCustomer
     * @summary: Send OTP to customer
     * @description: Send OTP to the customer for shipment verification. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/sendOtpToShipmentCustomer/).
     */
    sendOtpToShipmentCustomer({ orderId, shipmentId, requestHeaders }?: OrderApplicationValidator.SendOtpToShipmentCustomerParam, { responseHeaders }?: object): Promise<OrderApplicationModel.SendOtpToCustomerResponse>;
    /**
     * @param {OrderApplicationValidator.TrackShipmentParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.ShipmentTrack>} - Success response
     * @name trackShipment
     * @summary: Track shipment status
     * @description: Track Shipment by shipment id, for application based on application Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/trackShipment/).
     */
    trackShipment({ shipmentId, requestHeaders }?: OrderApplicationValidator.TrackShipmentParam, { responseHeaders }?: object): Promise<OrderApplicationModel.ShipmentTrack>;
    /**
     * @param {OrderApplicationValidator.UpdateShipmentStatusParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.ShipmentApplicationStatusResponse>}
     *   - Success response
     *
     * @name updateShipmentStatus
     * @summary: Updates shipment status
     * @description: Update current status of a specific shipment using its shipment ID. Supports both partial and full transition as per the configured settings. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/updateShipmentStatus/).
     */
    updateShipmentStatus({ shipmentId, body, requestHeaders }?: OrderApplicationValidator.UpdateShipmentStatusParam, { responseHeaders }?: object): Promise<OrderApplicationModel.ShipmentApplicationStatusResponse>;
    /**
     * @param {OrderApplicationValidator.VerifyOtpShipmentCustomerParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.VerifyOtpResponse>} - Success response
     * @name verifyOtpShipmentCustomer
     * @summary: Verifies OTP
     * @description: Verify OTP sent by customer. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/verifyOtpShipmentCustomer/).
     */
    verifyOtpShipmentCustomer({ orderId, shipmentId, body, requestHeaders }?: OrderApplicationValidator.VerifyOtpShipmentCustomerParam, { responseHeaders }?: object): Promise<OrderApplicationModel.VerifyOtpResponse>;
}
import OrderApplicationValidator = require("./OrderApplicationValidator");
import OrderApplicationModel = require("./OrderApplicationModel");
