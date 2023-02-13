export = OrderValidator;
declare class OrderValidator {
    static getOrders(): any;
    static getOrderById(): any;
    static getPosOrderById(): any;
    static getShipmentById(): any;
    static getInvoiceByShipmentId(): any;
    static trackShipment(): any;
    static getCustomerDetailsByShipmentId(): any;
    static sendOtpToShipmentCustomer(): any;
    static verifyOtpShipmentCustomer(): any;
    static getShipmentBagReasons(): any;
    static getShipmentReasons(): any;
    static updateShipmentStatus(): any;
}
