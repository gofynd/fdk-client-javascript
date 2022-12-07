export = OrderManage;
declare class OrderManage {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {InvalidateShipmentCachePayload} arg.body
     * @summary:
     * @description: Invalidate shipment Cache
     */
    invalidateShipmentCache({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {StoreReassign} arg.body
     * @summary:
     * @description: Reassign Location
     */
    reassignLocation({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateShipmentLockPayload} arg.body
     * @summary:
     * @description: update shipment lock
     */
    updateShipmentLock({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.date] -
     * @summary:
     * @description:
     */
    getAnnouncements({ date }?: {
        date?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId -
     * @param {string} [arg.name] -
     * @param {string} [arg.address] -
     * @param {string} [arg.addressType] -
     * @param {string} [arg.pincode] -
     * @param {string} [arg.phone] -
     * @param {string} [arg.email] -
     * @param {string} [arg.landmark] -
     * @param {string} arg.addressCategory -
     * @param {string} [arg.city] -
     * @param {string} [arg.state] -
     * @param {string} [arg.country] -
     * @summary:
     * @description:
     */
    updateAddress({ shipmentId, addressCategory, name, address, addressType, pincode, phone, email, landmark, city, state, country, }?: {
        shipmentId: string;
        name?: string;
        address?: string;
        addressType?: string;
        pincode?: string;
        phone?: string;
        email?: string;
        landmark?: string;
        addressCategory: string;
        city?: string;
        state?: string;
        country?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.caller -
     * @param {string} arg.receiver -
     * @param {string} arg.bagId -
     * @param {string} [arg.callingTo] -
     * @param {string} [arg.callerId] -
     * @summary:
     * @description:
     */
    click2Call({ caller, receiver, bagId, callingTo, callerId }?: {
        caller: string;
        receiver: string;
        bagId: string;
        callingTo?: string;
        callerId?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {StatusUpdateInternalRequest} arg.body
     * @summary:
     * @description: Reassign Location
     */
    statusUpdateInternalV4({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateOrderPayload} arg.body
     * @summary:
     * @description:
     */
    processManifest({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary:
     * @description:
     */
    getRoleBasedActions({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.shipmentId] -
     * @param {number} [arg.bagId] -
     * @summary:
     * @description:
     */
    getShipmentHistory({ shipmentId, bagId }?: {
        shipmentId?: number;
        bagId?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SendSmsPayload} arg.body
     * @summary:
     * @description:
     */
    sendSmsNinja({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ManualAssignDPToShipment} arg.body
     * @summary:
     * @description:
     */
    platformManualAssignDPToShipment({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateOrderPayload} arg.body
     * @summary:
     * @description:
     */
    updatePackagingDimensions({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateOrderAPI} arg.body
     * @summary:
     * @description:
     */
    createOrder({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OrderStatus} arg.body
     * @summary:
     * @description:
     */
    checkOrderStatus({ body }?: {
        body: any;
    }): Promise<any>;
}
