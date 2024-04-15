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
     * @param {OrderApplicationValidator.GetCustomerDetailsByShipmentIdParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.CustomerDetailsResponse>} -
     *   Success response
     * @name getCustomerDetailsByShipmentId
     * @summary: Retrieves shipment customer
     * @description: Retrieve customer details such as mobile number using Shipment ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getCustomerDetailsByShipmentId/).
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
     * @description: Retrieve the invoice corresponding to a specific shipment ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getInvoiceByShipmentId/).
     */
    getInvoiceByShipmentId({ shipmentId, requestHeaders }?: OrderApplicationValidator.GetInvoiceByShipmentIdParam, { responseHeaders }?: object): Promise<OrderApplicationModel.ResponseGetInvoiceShipment>;
    /**
     * @param {OrderApplicationValidator.GetOrderByIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.OrderById>} - Success response
     * @name getOrderById
     * @summary: Fetches order by ID
     * @description: Retrieve order details such as tracking details, shipment, store information using Fynd Order ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getOrderById/).
     */
    getOrderById({ orderId, allowInactive, requestHeaders }?: OrderApplicationValidator.GetOrderByIdParam, { responseHeaders }?: object): Promise<OrderApplicationModel.OrderById>;
    /**
     * @param {OrderApplicationValidator.GetOrdersParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.OrderList>} - Success response
     * @name getOrders
     * @summary: Lists customer orders
     * @description: Retrieves all orders associated with a customer account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getOrders/).
     */
    getOrders({ status, pageNo, pageSize, fromDate, toDate, startDate, endDate, customMeta, allowInactive, requestHeaders, }?: OrderApplicationValidator.GetOrdersParam, { responseHeaders }?: object): Promise<OrderApplicationModel.OrderList>;
    /**
     * @param {OrderApplicationValidator.GetPosOrderByIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.OrderById>} - Success response
     * @name getPosOrderById
     * @summary: Retrieves POS order details
     * @description: Retrieve a POS order and all its details such as tracking details, shipment, store information using Fynd Order ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getPosOrderById/).
     */
    getPosOrderById({ orderId, requestHeaders }?: OrderApplicationValidator.GetPosOrderByIdParam, { responseHeaders }?: object): Promise<OrderApplicationModel.OrderById>;
    /**
     * @param {OrderApplicationValidator.GetShipmentBagReasonsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.ShipmentBagReasons>} - Success response
     * @name getShipmentBagReasons
     * @summary: Lists bag reasons
     * @description: Retrieves reasons that led to the cancellation for the status of shipment bags. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getShipmentBagReasons/).
     */
    getShipmentBagReasons({ shipmentId, bagId, requestHeaders }?: OrderApplicationValidator.GetShipmentBagReasonsParam, { responseHeaders }?: object): Promise<OrderApplicationModel.ShipmentBagReasons>;
    /**
     * @param {OrderApplicationValidator.GetShipmentByIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.ShipmentById>} - Success response
     * @name getShipmentById
     * @summary: Fetches shipment by ID
     * @description: Retrieve shipment details such as price breakup, tracking details, store information, etc. using Shipment ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getShipmentById/).
     */
    getShipmentById({ shipmentId, allowInactive, requestHeaders }?: OrderApplicationValidator.GetShipmentByIdParam, { responseHeaders }?: object): Promise<OrderApplicationModel.ShipmentById>;
    /**
     * @param {OrderApplicationValidator.GetShipmentReasonsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.ShipmentReasons>} - Success response
     * @name getShipmentReasons
     * @summary: Lists shipment reasons
     * @description: Retrieve reasons explaining various shipment statuses. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getShipmentReasons/).
     */
    getShipmentReasons({ shipmentId, requestHeaders }?: OrderApplicationValidator.GetShipmentReasonsParam, { responseHeaders }?: object): Promise<OrderApplicationModel.ShipmentReasons>;
    /**
     * @param {OrderApplicationValidator.SendOtpToShipmentCustomerParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.SendOtpToCustomerResponse>} -
     *   Success response
     * @name sendOtpToShipmentCustomer
     * @summary: Sends OTP to customer
     * @description: Sends a one-time password (OTP) to the customer for shipment verification. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/sendOtpToShipmentCustomer/).
     */
    sendOtpToShipmentCustomer({ orderId, shipmentId, requestHeaders }?: OrderApplicationValidator.SendOtpToShipmentCustomerParam, { responseHeaders }?: object): Promise<OrderApplicationModel.SendOtpToCustomerResponse>;
    /**
     * @param {OrderApplicationValidator.TrackShipmentParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.ShipmentTrack>} - Success response
     * @name trackShipment
     * @summary: Tracks shipment status
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
     * @description: Modifies the current status of a specific shipment using its shipment ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/updateShipmentStatus/).
     */
    updateShipmentStatus({ shipmentId, body, requestHeaders }?: OrderApplicationValidator.UpdateShipmentStatusParam, { responseHeaders }?: object): Promise<OrderApplicationModel.ShipmentApplicationStatusResponse>;
    /**
     * @param {OrderApplicationValidator.VerifyOtpShipmentCustomerParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderApplicationModel.VerifyOtpResponse>} - Success response
     * @name verifyOtpShipmentCustomer
     * @summary: Verifies OTP
     * @description: Confirms the OTP sent to the shipment customer for verification. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/verifyOtpShipmentCustomer/).
     */
    verifyOtpShipmentCustomer({ orderId, shipmentId, body, requestHeaders }?: OrderApplicationValidator.VerifyOtpShipmentCustomerParam, { responseHeaders }?: object): Promise<OrderApplicationModel.VerifyOtpResponse>;
}
import OrderApplicationValidator = require("./OrderApplicationValidator");
import OrderApplicationModel = require("./OrderApplicationModel");
