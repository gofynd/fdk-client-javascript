export = OrderApplicationValidator;
/**
 * @typedef getCustomerDetailsByShipmentId
 * @property {string} orderId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 * @property {string} shipmentId - A unique number used for identifying and
 *   tracking your orders.
 */
/**
 * @typedef getInvoiceByShipmentId
 * @property {string} shipmentId - ID of the shipment.
 * @property {string} [documentType]
 */
/**
 * @typedef getOrderById
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 */
/**
 * @typedef getOrders
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
 * @typedef getPosOrderById
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 */
/**
 * @typedef getProducts
 * @property {number} [status] - A filter to retrieve orders by their current
 *   status such as _placed_, _delivered_, etc.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {string} [fromDate] - The date from which the orders should be retrieved.
 * @property {string} [toDate] - The date till which the orders should be retrieved.
 * @property {string} [searchValue]
 */
/**
 * @typedef getShipmentBagReasons
 * @property {string} shipmentId - ID of the bag. An order may contain multiple
 *   items and may get divided into one or more shipment, each having its own ID.
 * @property {string} bagId - ID of the bag. An order may contain multiple items
 *   and may get divided into one or more shipment, each having its own ID.
 */
/**
 * @typedef getShipmentById
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 */
/**
 * @typedef getShipmentReasons
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 */
/**
 * @typedef sendOtpToShipmentCustomer
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 */
/**
 * @typedef trackShipment
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 */
/**
 * @typedef updateShipmentStatus
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 * @property {OrderApplicationModel.UpdateShipmentStatusRequest} body
 */
/**
 * @typedef verifyOtpShipmentCustomer
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 * @property {OrderApplicationModel.VerifyOtp} body
 */
declare class OrderApplicationValidator {
}
declare namespace OrderApplicationValidator {
    export { getCustomerDetailsByShipmentId, getInvoiceByShipmentId, getOrderById, getOrders, getPosOrderById, getProducts, getShipmentBagReasons, getShipmentById, getShipmentReasons, sendOtpToShipmentCustomer, trackShipment, updateShipmentStatus, verifyOtpShipmentCustomer };
}
/** @returns {getCustomerDetailsByShipmentId} */
declare function getCustomerDetailsByShipmentId(): getCustomerDetailsByShipmentId;
type getCustomerDetailsByShipmentId = {
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
/** @returns {getInvoiceByShipmentId} */
declare function getInvoiceByShipmentId(): getInvoiceByShipmentId;
type getInvoiceByShipmentId = {
    /**
     * - ID of the shipment.
     */
    shipmentId: string;
    documentType?: string;
};
/** @returns {getOrderById} */
declare function getOrderById(): getOrderById;
type getOrderById = {
    /**
     * - A unique number used for identifying and
     * tracking your orders.
     */
    orderId: string;
};
/** @returns {getOrders} */
declare function getOrders(): getOrders;
type getOrders = {
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
/** @returns {getPosOrderById} */
declare function getPosOrderById(): getPosOrderById;
type getPosOrderById = {
    /**
     * - A unique number used for identifying and
     * tracking your orders.
     */
    orderId: string;
};
/** @returns {getProducts} */
declare function getProducts(): getProducts;
type getProducts = {
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
    searchValue?: string;
};
/** @returns {getShipmentBagReasons} */
declare function getShipmentBagReasons(): getShipmentBagReasons;
type getShipmentBagReasons = {
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
/** @returns {getShipmentById} */
declare function getShipmentById(): getShipmentById;
type getShipmentById = {
    /**
     * - ID of the shipment. An order may contain
     * multiple items and may get divided into one or more shipment, each having
     * its own ID.
     */
    shipmentId: string;
};
/** @returns {getShipmentReasons} */
declare function getShipmentReasons(): getShipmentReasons;
type getShipmentReasons = {
    /**
     * - ID of the shipment. An order may contain
     * multiple items and may get divided into one or more shipment, each having
     * its own ID.
     */
    shipmentId: string;
};
/** @returns {sendOtpToShipmentCustomer} */
declare function sendOtpToShipmentCustomer(): sendOtpToShipmentCustomer;
type sendOtpToShipmentCustomer = {
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
/** @returns {trackShipment} */
declare function trackShipment(): trackShipment;
type trackShipment = {
    /**
     * - ID of the shipment. An order may contain
     * multiple items and may get divided into one or more shipment, each having
     * its own ID.
     */
    shipmentId: string;
};
/** @returns {updateShipmentStatus} */
declare function updateShipmentStatus(): updateShipmentStatus;
type updateShipmentStatus = {
    /**
     * - ID of the shipment. An order may contain
     * multiple items and may get divided into one or more shipment, each having
     * its own ID.
     */
    shipmentId: string;
    body: OrderApplicationModel.UpdateShipmentStatusRequest;
};
/** @returns {verifyOtpShipmentCustomer} */
declare function verifyOtpShipmentCustomer(): verifyOtpShipmentCustomer;
type verifyOtpShipmentCustomer = {
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
