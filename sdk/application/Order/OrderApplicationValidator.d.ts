export = OrderApplicationValidator;
/**
 * @typedef GetCustomerDetailsByShipmentIdParam
 * @property {string} orderId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 * @property {string} shipmentId - A unique number used for identifying and
 *   tracking your orders.
 */
/**
 * @typedef GetInvoiceByShipmentIdParam
 * @property {string} shipmentId - ID of the shipment.
 */
/**
 * @typedef GetOrderByIdParam
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 */
/**
 * @typedef GetOrdersParam
 * @property {number} [status] - A filter to retrieve orders by their current
 *   status such as _placed_, _delivered_, etc.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {string} [fromDate] - The date from which the orders should be retrieved.
 * @property {string} [toDate] - The date till which the orders should be retrieved.
 * @property {string} [customMeta] - A filter and retrieve data using special
 *   fields included for special use-cases
 */
/**
 * @typedef GetPosOrderByIdParam
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 */
/**
 * @typedef GetShipmentBagReasonsParam
 * @property {string} shipmentId - ID of the bag. An order may contain multiple
 *   items and may get divided into one or more shipment, each having its own ID.
 * @property {string} bagId - ID of the bag. An order may contain multiple items
 *   and may get divided into one or more shipment, each having its own ID.
 */
/**
 * @typedef GetShipmentByIdParam
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 */
/**
 * @typedef GetShipmentReasonsParam
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 */
/**
 * @typedef SendOtpToShipmentCustomerParam
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 */
/**
 * @typedef TrackShipmentParam
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 */
/**
 * @typedef UpdateShipmentStatusParam
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 * @property {OrderApplicationModel.UpdateShipmentStatusRequest} body
 */
/**
 * @typedef VerifyOtpShipmentCustomerParam
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 * @property {OrderApplicationModel.VerifyOtp} body
 */
declare class OrderApplicationValidator {
    /** @returns {GetCustomerDetailsByShipmentIdParam} */
    static getCustomerDetailsByShipmentId(): GetCustomerDetailsByShipmentIdParam;
    /** @returns {GetInvoiceByShipmentIdParam} */
    static getInvoiceByShipmentId(): GetInvoiceByShipmentIdParam;
    /** @returns {GetOrderByIdParam} */
    static getOrderById(): GetOrderByIdParam;
    /** @returns {GetOrdersParam} */
    static getOrders(): GetOrdersParam;
    /** @returns {GetPosOrderByIdParam} */
    static getPosOrderById(): GetPosOrderByIdParam;
    /** @returns {GetShipmentBagReasonsParam} */
    static getShipmentBagReasons(): GetShipmentBagReasonsParam;
    /** @returns {GetShipmentByIdParam} */
    static getShipmentById(): GetShipmentByIdParam;
    /** @returns {GetShipmentReasonsParam} */
    static getShipmentReasons(): GetShipmentReasonsParam;
    /** @returns {SendOtpToShipmentCustomerParam} */
    static sendOtpToShipmentCustomer(): SendOtpToShipmentCustomerParam;
    /** @returns {TrackShipmentParam} */
    static trackShipment(): TrackShipmentParam;
    /** @returns {UpdateShipmentStatusParam} */
    static updateShipmentStatus(): UpdateShipmentStatusParam;
    /** @returns {VerifyOtpShipmentCustomerParam} */
    static verifyOtpShipmentCustomer(): VerifyOtpShipmentCustomerParam;
}
declare namespace OrderApplicationValidator {
    export { GetCustomerDetailsByShipmentIdParam, GetInvoiceByShipmentIdParam, GetOrderByIdParam, GetOrdersParam, GetPosOrderByIdParam, GetShipmentBagReasonsParam, GetShipmentByIdParam, GetShipmentReasonsParam, SendOtpToShipmentCustomerParam, TrackShipmentParam, UpdateShipmentStatusParam, VerifyOtpShipmentCustomerParam };
}
type GetCustomerDetailsByShipmentIdParam = {
    /**
     * - ID of the shipment. An order may contain
     * multiple items and may get divided into one or more shipment, each having
     * its own ID.
     */
    orderId: string;
    /**
     * - A unique number used for identifying and
     * tracking your orders.
     */
    shipmentId: string;
};
type GetInvoiceByShipmentIdParam = {
    /**
     * - ID of the shipment.
     */
    shipmentId: string;
};
type GetOrderByIdParam = {
    /**
     * - A unique number used for identifying and
     * tracking your orders.
     */
    orderId: string;
};
type GetOrdersParam = {
    /**
     * - A filter to retrieve orders by their current
     * status such as _placed_, _delivered_, etc.
     */
    status?: number;
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 10.
     */
    pageSize?: number;
    /**
     * - The date from which the orders should be retrieved.
     */
    fromDate?: string;
    /**
     * - The date till which the orders should be retrieved.
     */
    toDate?: string;
    /**
     * - A filter and retrieve data using special
     * fields included for special use-cases
     */
    customMeta?: string;
};
type GetPosOrderByIdParam = {
    /**
     * - A unique number used for identifying and
     * tracking your orders.
     */
    orderId: string;
};
type GetShipmentBagReasonsParam = {
    /**
     * - ID of the bag. An order may contain multiple
     * items and may get divided into one or more shipment, each having its own ID.
     */
    shipmentId: string;
    /**
     * - ID of the bag. An order may contain multiple items
     * and may get divided into one or more shipment, each having its own ID.
     */
    bagId: string;
};
type GetShipmentByIdParam = {
    /**
     * - ID of the shipment. An order may contain
     * multiple items and may get divided into one or more shipment, each having
     * its own ID.
     */
    shipmentId: string;
};
type GetShipmentReasonsParam = {
    /**
     * - ID of the shipment. An order may contain
     * multiple items and may get divided into one or more shipment, each having
     * its own ID.
     */
    shipmentId: string;
};
type SendOtpToShipmentCustomerParam = {
    /**
     * - A unique number used for identifying and
     * tracking your orders.
     */
    orderId: string;
    /**
     * - ID of the shipment. An order may contain
     * multiple items and may get divided into one or more shipment, each having
     * its own ID.
     */
    shipmentId: string;
};
type TrackShipmentParam = {
    /**
     * - ID of the shipment. An order may contain
     * multiple items and may get divided into one or more shipment, each having
     * its own ID.
     */
    shipmentId: string;
};
type UpdateShipmentStatusParam = {
    /**
     * - ID of the shipment. An order may contain
     * multiple items and may get divided into one or more shipment, each having
     * its own ID.
     */
    shipmentId: string;
    body: OrderApplicationModel.UpdateShipmentStatusRequest;
};
type VerifyOtpShipmentCustomerParam = {
    /**
     * - A unique number used for identifying and
     * tracking your orders.
     */
    orderId: string;
    /**
     * - ID of the shipment. An order may contain
     * multiple items and may get divided into one or more shipment, each having
     * its own ID.
     */
    shipmentId: string;
    body: OrderApplicationModel.VerifyOtp;
};
import OrderApplicationModel = require("./OrderApplicationModel");
