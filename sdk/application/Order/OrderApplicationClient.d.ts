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
     * @returns {Promise<OrderApplicationModel.CustomerDetailsResponse>} -
     *   Success response
     * @name getCustomerDetailsByShipmentId
     * @summary: Get Customer Details by Shipment Id
     * @description: Use this API to retrieve customer details such as mobileno using Shipment ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getCustomerDetailsByShipmentId/).
     */
    getCustomerDetailsByShipmentId({ orderId, shipmentId }?: OrderApplicationValidator.GetCustomerDetailsByShipmentIdParam): Promise<OrderApplicationModel.CustomerDetailsResponse>;
    /**
     * @param {OrderApplicationValidator.GetInvoiceByShipmentIdParam} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.ResponseGetInvoiceShipment>} -
     *   Success response
     * @name getInvoiceByShipmentId
     * @summary: Get Invoice of a shipment
     * @description: Use this API to retrieve shipment invoice. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getInvoiceByShipmentId/).
     */
    getInvoiceByShipmentId({ shipmentId }?: OrderApplicationValidator.GetInvoiceByShipmentIdParam): Promise<OrderApplicationModel.ResponseGetInvoiceShipment>;
    /**
     * @param {OrderApplicationValidator.GetOrderByIdParam} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.OrderById>} - Success response
     * @name getOrderById
     * @summary: Get details of an order
     * @description: Use this API to retrieve order details such as tracking details, shipment, store information using Fynd Order ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getOrderById/).
     */
    getOrderById({ orderId }?: OrderApplicationValidator.GetOrderByIdParam): Promise<OrderApplicationModel.OrderById>;
    /**
     * @param {OrderApplicationValidator.GetOrdersParam} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.OrderList>} - Success response
     * @name getOrders
     * @summary: Get all orders
     * @description: Use this API to retrieve all the orders. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getOrders/).
     */
    getOrders({ status, pageNo, pageSize, fromDate, toDate, customMeta, }?: OrderApplicationValidator.GetOrdersParam): Promise<OrderApplicationModel.OrderList>;
    /**
     * @param {OrderApplicationValidator.GetPosOrderByIdParam} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.OrderById>} - Success response
     * @name getPosOrderById
     * @summary: Get POS Order
     * @description: Use this API to retrieve a POS order and all its details such as tracking details, shipment, store information using Fynd Order ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getPosOrderById/).
     */
    getPosOrderById({ orderId }?: OrderApplicationValidator.GetPosOrderByIdParam): Promise<OrderApplicationModel.OrderById>;
    /**
     * @param {OrderApplicationValidator.GetShipmentBagReasonsParam} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.ShipmentBagReasons>} - Success response
     * @name getShipmentBagReasons
     * @summary: Get reasons behind full or partial cancellation of a shipment
     * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getShipmentBagReasons/).
     */
    getShipmentBagReasons({ shipmentId, bagId }?: OrderApplicationValidator.GetShipmentBagReasonsParam): Promise<OrderApplicationModel.ShipmentBagReasons>;
    /**
     * @param {OrderApplicationValidator.GetShipmentByIdParam} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.ShipmentById>} - Success response
     * @name getShipmentById
     * @summary: Get details of a shipment
     * @description: Use this API to retrieve shipment details such as price breakup, tracking details, store information, etc. using Shipment ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getShipmentById/).
     */
    getShipmentById({ shipmentId }?: OrderApplicationValidator.GetShipmentByIdParam): Promise<OrderApplicationModel.ShipmentById>;
    /**
     * @param {OrderApplicationValidator.GetShipmentReasonsParam} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.ShipmentReasons>} - Success response
     * @name getShipmentReasons
     * @summary: Get reasons behind full or partial cancellation of a shipment
     * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getShipmentReasons/).
     */
    getShipmentReasons({ shipmentId }?: OrderApplicationValidator.GetShipmentReasonsParam): Promise<OrderApplicationModel.ShipmentReasons>;
    /**
     * @param {OrderApplicationValidator.SendOtpToShipmentCustomerParam} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.SendOtpToCustomerResponse>} -
     *   Success response
     * @name sendOtpToShipmentCustomer
     * @summary: Send and Resend Otp code to Order-Shipment customer
     * @description: Use this API to send OTP to the customer of the mapped Shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/sendOtpToShipmentCustomer/).
     */
    sendOtpToShipmentCustomer({ orderId, shipmentId }?: OrderApplicationValidator.SendOtpToShipmentCustomerParam): Promise<OrderApplicationModel.SendOtpToCustomerResponse>;
    /**
     * @param {OrderApplicationValidator.TrackShipmentParam} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.ShipmentTrack>} - Success response
     * @name trackShipment
     * @summary: Track shipment
     * @description: Track Shipment by shipment id, for application based on application Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/trackShipment/).
     */
    trackShipment({ shipmentId }?: OrderApplicationValidator.TrackShipmentParam): Promise<OrderApplicationModel.ShipmentTrack>;
    /**
     * @param {OrderApplicationValidator.UpdateShipmentStatusParam} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.ShipmentApplicationStatusResponse>}
     *   - Success response
     *
     * @name updateShipmentStatus
     * @summary: Update the shipment status
     * @description: Use this API to update the status of a shipment using its shipment ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/updateShipmentStatus/).
     */
    updateShipmentStatus({ shipmentId, body }?: OrderApplicationValidator.UpdateShipmentStatusParam): Promise<OrderApplicationModel.ShipmentApplicationStatusResponse>;
    /**
     * @param {OrderApplicationValidator.VerifyOtpShipmentCustomerParam} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.VerifyOtpResponse>} - Success response
     * @name verifyOtpShipmentCustomer
     * @summary: Verify Otp code
     * @description: Use this API to verify OTP and create a session token with custom payload. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/verifyOtpShipmentCustomer/).
     */
    verifyOtpShipmentCustomer({ orderId, shipmentId, body }?: OrderApplicationValidator.VerifyOtpShipmentCustomerParam): Promise<OrderApplicationModel.VerifyOtpResponse>;
}
import OrderApplicationValidator = require("./OrderApplicationValidator");
import OrderApplicationModel = require("./OrderApplicationModel");
