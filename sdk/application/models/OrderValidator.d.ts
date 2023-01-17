export = OrderValidator;
declare class OrderValidator {
    static getOrders(): any;
    static getOrderById(): any;
    static getShipmentById(): any;
    static getShipmentReasons(): any;
    static getShipmentBagReasons(): any;
    static updateShipmentStatus(): any;
    static trackShipment(): any;
    static getPosOrderById(): any;
    static getCustomerDetailsByShipmentId(): any;
    static sendOtpToShipmentCustomer(): any;
    static verifyOtpShipmentCustomer(): any;
    static getInvoiceByShipmentId(): any;
}
