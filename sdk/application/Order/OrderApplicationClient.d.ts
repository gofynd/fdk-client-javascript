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
        getProducts: string;
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
     * @param {OrderApplicationValidator.getCustomerDetailsByShipmentId} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.CustomerDetailsResponse>} -
     *   Success response
     * @name getCustomerDetailsByShipmentId
     * @summary: Get Customer Details by Shipment Id
     * @description: Use this API to retrieve customer details such as mobileno using Shipment ID.
     */
    getCustomerDetailsByShipmentId({ orderId, shipmentId }?: OrderApplicationValidator.getCustomerDetailsByShipmentId): Promise<OrderApplicationModel.CustomerDetailsResponse>;
    /**
     * @param {OrderApplicationValidator.getInvoiceByShipmentId} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.ResponseGetInvoiceShipment>} -
     *   Success response
     * @name getInvoiceByShipmentId
     * @summary: Get Invoice of a shipment
     * @description: Use this API to retrieve shipment invoice.
     */
    getInvoiceByShipmentId({ shipmentId, documentType }?: OrderApplicationValidator.getInvoiceByShipmentId): Promise<OrderApplicationModel.ResponseGetInvoiceShipment>;
    /**
     * @param {OrderApplicationValidator.getOrderById} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.OrderById>} - Success response
     * @name getOrderById
     * @summary: Get details of an order
     * @description: Use this API to retrieve order details such as tracking details, shipment, store information using Fynd Order ID.
     */
    getOrderById({ orderId }?: OrderApplicationValidator.getOrderById): Promise<OrderApplicationModel.OrderById>;
    /**
     * @param {OrderApplicationValidator.getOrders} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.OrderList>} - Success response
     * @name getOrders
     * @summary: Get all orders
     * @description: Use this API to retrieve all the orders.
     */
    getOrders({ status, pageNo, pageSize, fromDate, toDate, customMeta, }?: OrderApplicationValidator.getOrders): Promise<OrderApplicationModel.OrderList>;
    /**
     * @param {OrderApplicationValidator.getPosOrderById} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.OrderById>} - Success response
     * @name getPosOrderById
     * @summary: Get POS Order
     * @description: Use this API to retrieve a POS order and all its details such as tracking details, shipment, store information using Fynd Order ID.
     */
    getPosOrderById({ orderId }?: OrderApplicationValidator.getPosOrderById): Promise<OrderApplicationModel.OrderById>;
    /**
     * @param {OrderApplicationValidator.getProducts} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.ProductListResponse>} - Success response
     * @name getProducts
     * @summary:
     * @description:
     */
    getProducts({ status, pageNo, pageSize, fromDate, toDate, searchValue, }?: OrderApplicationValidator.getProducts): Promise<OrderApplicationModel.ProductListResponse>;
    /**
     * @param {OrderApplicationValidator.getShipmentBagReasons} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.ShipmentBagReasons>} - Success response
     * @name getShipmentBagReasons
     * @summary: Get reasons behind full or partial cancellation of a shipment
     * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
     */
    getShipmentBagReasons({ shipmentId, bagId }?: OrderApplicationValidator.getShipmentBagReasons): Promise<OrderApplicationModel.ShipmentBagReasons>;
    /**
     * @param {OrderApplicationValidator.getShipmentById} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.ShipmentById>} - Success response
     * @name getShipmentById
     * @summary: Get details of a shipment
     * @description: Use this API to retrieve shipment details such as price breakup, tracking details, store information, etc. using Shipment ID.
     */
    getShipmentById({ shipmentId }?: OrderApplicationValidator.getShipmentById): Promise<OrderApplicationModel.ShipmentById>;
    /**
     * @param {OrderApplicationValidator.getShipmentReasons} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.ShipmentReasons>} - Success response
     * @name getShipmentReasons
     * @summary: Get reasons behind full or partial cancellation of a shipment
     * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
     */
    getShipmentReasons({ shipmentId }?: OrderApplicationValidator.getShipmentReasons): Promise<OrderApplicationModel.ShipmentReasons>;
    /**
     * @param {OrderApplicationValidator.sendOtpToShipmentCustomer} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.SendOtpToCustomerResponse>} -
     *   Success response
     * @name sendOtpToShipmentCustomer
     * @summary: Send and Resend Otp code to Order-Shipment customer
     * @description: Use this API to send OTP to the customer of the mapped Shipment.
     */
    sendOtpToShipmentCustomer({ orderId, shipmentId }?: OrderApplicationValidator.sendOtpToShipmentCustomer): Promise<OrderApplicationModel.SendOtpToCustomerResponse>;
    /**
     * @param {OrderApplicationValidator.trackShipment} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.ShipmentTrack>} - Success response
     * @name trackShipment
     * @summary: Track shipment
     * @description: Track Shipment by shipment id, for application based on application Id
     */
    trackShipment({ shipmentId }?: OrderApplicationValidator.trackShipment): Promise<OrderApplicationModel.ShipmentTrack>;
    /**
     * @param {OrderApplicationValidator.updateShipmentStatus} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.ShipmentApplicationStatusResponse>}
     *   - Success response
     *
     * @name updateShipmentStatus
     * @summary: Update the shipment status
     * @description: Use this API to update the status of a shipment using its shipment ID.
     */
    updateShipmentStatus({ shipmentId, body }?: OrderApplicationValidator.updateShipmentStatus): Promise<OrderApplicationModel.ShipmentApplicationStatusResponse>;
    /**
     * @param {OrderApplicationValidator.verifyOtpShipmentCustomer} arg - Arg object.
     * @returns {Promise<OrderApplicationModel.VerifyOtpResponse>} - Success response
     * @name verifyOtpShipmentCustomer
     * @summary: Verify Otp code
     * @description: Use this API to verify OTP and create a session token with custom payload.
     */
    verifyOtpShipmentCustomer({ orderId, shipmentId, body }?: OrderApplicationValidator.verifyOtpShipmentCustomer): Promise<OrderApplicationModel.VerifyOtpResponse>;
}
import OrderApplicationValidator = require("./OrderApplicationValidator");
import OrderApplicationModel = require("./OrderApplicationModel");
