export = OrderApplicationModel;
/**
 * @typedef OrderPage
 * @property {string} [type]
 * @property {number} [item_total]
 * @property {number} [current]
 * @property {number} [size]
 * @property {boolean} [has_next]
 */
/**
 * @typedef UserInfo
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [name]
 * @property {string} [last_name]
 * @property {string} [mobile]
 * @property {string} [email]
 */
/**
 * @typedef BreakupValues
 * @property {number} [value]
 * @property {string} [currency_symbol]
 * @property {string} [name]
 * @property {string} [display]
 * @property {string} [currency_code]
 */
/**
 * @typedef ShipmentPayment
 * @property {string} [mop]
 * @property {string} [payment_mode]
 * @property {string} [status]
 * @property {string} [mode]
 * @property {string} [logo]
 * @property {string} [display_name]
 */
/**
 * @typedef ShipmentPaymentInfo
 * @property {string} [mop] - Stands for "Mode of Payment". This is a short code
 *   (like "COD" for Cash On Delivery) that represents the payment method used.
 * @property {string} [payment_mode] - Information about the payment mode,
 *   indicates whether COD or PREPAID
 * @property {string} [status] - Indicates the current status of the payment,
 *   Paid or Unpaid
 * @property {string} [mode] - Information about the payment source. For eg, NB_ICICI
 * @property {string} [logo] - A URL to an image representing the payment method
 * @property {string} [display_name] - The name of the payment method as it
 *   should be displayed to the user
 * @property {number} [amount] - Amount paid using this payment method
 */
/**
 * @typedef ShipmentUserInfo
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [name]
 * @property {string} [last_name]
 * @property {string} [mobile]
 * @property {string} [email]
 */
/**
 * @typedef FulfillingStore
 * @property {number} [id]
 * @property {string} [code]
 * @property {string} [name]
 * @property {string} [company_name]
 * @property {number} [company_id]
 */
/**
 * @typedef ShipmentStatus
 * @property {string} [value]
 * @property {string} [title]
 * @property {string} [hex_code]
 */
/**
 * @typedef Invoice
 * @property {string} [invoice_url]
 * @property {string} [updated_date]
 * @property {string} [label_url]
 */
/**
 * @typedef NestedTrackingDetails
 * @property {boolean} [is_passed]
 * @property {string} [time]
 * @property {boolean} [is_current]
 * @property {string} [status]
 */
/**
 * @typedef TrackingDetails
 * @property {string} [value]
 * @property {boolean} [is_current]
 * @property {boolean} [is_passed]
 * @property {string} [status]
 * @property {string} [time]
 * @property {string} [created_ts]
 * @property {NestedTrackingDetails[]} [tracking_details]
 */
/**
 * @typedef TimeStampData
 * @property {string} [min]
 * @property {string} [max]
 */
/**
 * @typedef Promise
 * @property {boolean} [show_promise]
 * @property {TimeStampData} [timestamp]
 */
/**
 * @typedef ShipmentTotalDetails
 * @property {number} [pieces]
 * @property {number} [total_price]
 * @property {number} [sizes]
 */
/**
 * @typedef Prices
 * @property {number} [delivery_charge]
 * @property {number} [coupon_value]
 * @property {number} [brand_calculated_amount]
 * @property {number} [value_of_good]
 * @property {number} [price_marked]
 * @property {number} [coupon_effective_discount]
 * @property {string} [currency_symbol]
 * @property {number} [discount]
 * @property {number} [gst_tax_percentage]
 * @property {number} [cod_charges]
 * @property {number} [amount_paid]
 * @property {boolean} [added_to_fynd_cash]
 * @property {number} [transfer_price]
 * @property {number} [cashback_applied]
 * @property {number} [price_effective]
 * @property {number} [cashback]
 * @property {number} [refund_credit]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [promotion_effective_discount]
 * @property {number} [refund_amount]
 * @property {string} [currency_code]
 * @property {number} [fynd_credits]
 * @property {number} [amount_to_be_collected]
 */
/**
 * @typedef ItemBrand
 * @property {string} [logo]
 * @property {string} [name]
 */
/**
 * @typedef Item
 * @property {string[]} [image]
 * @property {string[]} [l1_categories]
 * @property {ItemBrand} [brand]
 * @property {string} [seller_identifier]
 * @property {string} [code]
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [l3_category_name]
 * @property {string} [slug_key]
 * @property {string[]} [l2_categories]
 * @property {string} [size]
 * @property {Object} [attributes]
 */
/**
 * @typedef AppliedFreeArticles
 * @property {string} [article_id]
 * @property {Object} [free_gift_item_details]
 * @property {string} [parent_item_identifier]
 * @property {number} [quantity]
 */
/**
 * @typedef AppliedPromos
 * @property {boolean} [mrp_promotion]
 * @property {string} [promotion_name]
 * @property {number} [article_quantity]
 * @property {string} [promo_id]
 * @property {number} [amount]
 * @property {string} [promotion_type]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 */
/**
 * @typedef Identifiers
 * @property {string} [ean]
 * @property {string} [sku_code]
 */
/**
 * @typedef FinancialBreakup
 * @property {number} [coupon_value]
 * @property {number} [delivery_charge]
 * @property {number} [brand_calculated_amount]
 * @property {number} [value_of_good]
 * @property {number} [price_marked]
 * @property {number} [coupon_effective_discount]
 * @property {string} [hsn_code]
 * @property {number} [discount]
 * @property {number} [gst_tax_percentage]
 * @property {number} [cod_charges]
 * @property {number} [amount_paid]
 * @property {boolean} [added_to_fynd_cash]
 * @property {string} [size]
 * @property {number} [transfer_price]
 * @property {number} [cashback_applied]
 * @property {number} [price_effective]
 * @property {number} [cashback]
 * @property {number} [refund_credit]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [total_units]
 * @property {Identifiers} [identifiers]
 * @property {string} [gst_tag]
 * @property {string} [item_name]
 * @property {number} [promotion_effective_discount]
 * @property {number} [gst_fee]
 * @property {number} [refund_amount]
 * @property {number} [fynd_credits]
 * @property {number} [amount_to_be_collected]
 */
/**
 * @typedef CurrentStatus
 * @property {string} [updated_at]
 * @property {string} [name]
 * @property {string} [status]
 * @property {string} [journey_type]
 */
/**
 * @typedef Bags
 * @property {string} [delivery_date]
 * @property {number} [line_number]
 * @property {string} [currency_symbol]
 * @property {Item} [item]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {number} [quantity]
 * @property {Prices} [prices]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {number} [id]
 * @property {string} [returnable_date]
 * @property {FinancialBreakup[]} [financial_breakup]
 * @property {Object} [parent_promo_bags]
 * @property {Object} [meta]
 * @property {string} [currency_code]
 * @property {string} [seller_identifier]
 * @property {CurrentStatus} [current_status]
 * @property {Article} [article]
 */
/**
 * @typedef FulfillingCompany
 * @property {number} [id]
 * @property {string} [name]
 */
/**
 * @typedef Article
 * @property {string[]} [tags]
 */
/**
 * @typedef Address
 * @property {string} [pincode]
 * @property {string} [phone]
 * @property {number} [latitude]
 * @property {string} [address2]
 * @property {string} [landmark]
 * @property {string} [area]
 * @property {string} [city]
 * @property {string} [address]
 * @property {string} [address_type]
 * @property {number} [longitude]
 * @property {string} [country_iso_code]
 * @property {string} [state]
 * @property {string} [created_at]
 * @property {string} [address1]
 * @property {string} [display_address]
 * @property {string} [name]
 * @property {string} [contact_person]
 * @property {string} [address_category]
 * @property {string} [email]
 * @property {string} [country_phone_code]
 * @property {string} [version]
 * @property {string} [updated_at]
 * @property {string} [country]
 */
/**
 * @typedef Shipments
 * @property {ShipmentPayment} [payment]
 * @property {ShipmentPaymentInfo[]} [payment_info] - "Array of objects
 *   containing payment methods used for placing an order. Each object will
 *   provide information about corresponding payment method with relevant details."
 * @property {string} [order_type]
 * @property {boolean} [show_download_invoice]
 * @property {boolean} [can_cancel]
 * @property {ShipmentUserInfo} [user_info]
 * @property {string} [shipment_id]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {Object[]} [custom_meta]
 * @property {ShipmentStatus} [shipment_status]
 * @property {string} [comment]
 * @property {Invoice} [invoice]
 * @property {boolean} [show_track_link]
 * @property {Object} [refund_details]
 * @property {BreakupValues[]} [breakup_values]
 * @property {Object} [can_break]
 * @property {string} [traking_no]
 * @property {TrackingDetails[]} [tracking_details]
 * @property {Promise} [promise]
 * @property {number} [total_bags]
 * @property {ShipmentTotalDetails} [total_details]
 * @property {Prices} [prices]
 * @property {string} [returnable_date]
 * @property {string} [shipment_created_at]
 * @property {string} [shipment_created_ts]
 * @property {Object} [size_info]
 * @property {Bags[]} [bags]
 * @property {string} [dp_name]
 * @property {string} [awb_no]
 * @property {boolean} [beneficiary_details]
 * @property {FulfillingCompany} [fulfilling_company]
 * @property {boolean} [can_return]
 * @property {Address} [delivery_address]
 * @property {Address} [billing_address]
 * @property {string} [track_url]
 * @property {string} [order_id]
 * @property {string} [need_help_url]
 * @property {Object} [return_meta]
 * @property {string} [delivery_date]
 * @property {OrderRequest} [order]
 */
/**
 * @typedef BagsForReorderArticleAssignment
 * @property {string} [strategy]
 * @property {string} [level]
 */
/**
 * @typedef BagsForReorder
 * @property {string} [item_size]
 * @property {number} [quantity]
 * @property {number} [store_id]
 * @property {BagsForReorderArticleAssignment} [article_assignment]
 * @property {number} [seller_id]
 * @property {number} [item_id]
 */
/**
 * @typedef OrderSchema
 * @property {number} [total_shipments_in_order]
 * @property {string} [gstin_code]
 * @property {UserInfo} [user_info]
 * @property {BreakupValues[]} [breakup_values]
 * @property {string} [order_created_time]
 * @property {string} [order_created_ts]
 * @property {string} [order_id]
 * @property {Shipments[]} [shipments]
 * @property {BagsForReorder[]} [bags_for_reorder]
 * @property {Object} [meta]
 */
/**
 * @typedef OrderStatuses
 * @property {number} [value]
 * @property {boolean} [is_selected]
 * @property {string} [display]
 */
/**
 * @typedef OrderFilters
 * @property {OrderStatuses[]} [statuses]
 */
/**
 * @typedef OrderList
 * @property {OrderPage} [page]
 * @property {OrderSchema[]} [items]
 * @property {OrderFilters} [filters]
 */
/**
 * @typedef ApefaceApiError
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef OrderById
 * @property {OrderSchema} [order]
 */
/**
 * @typedef ShipmentById
 * @property {Shipments} [shipment]
 */
/**
 * @typedef ResponseGetInvoiceShipment
 * @property {string} presigned_type
 * @property {boolean} success
 * @property {string} shipment_id
 * @property {string} presigned_url
 */
/**
 * @typedef Track
 * @property {string} [account_name]
 * @property {string} [shipment_type]
 * @property {string} [status]
 * @property {string} [last_location_recieved_at]
 * @property {string} [updated_time]
 * @property {string} [updated_at]
 * @property {string} [reason]
 * @property {string} [awb]
 */
/**
 * @typedef ShipmentTrack
 * @property {Track[]} [results]
 */
/**
 * @typedef CustomerDetailsResponse
 * @property {string} [phone]
 * @property {string} [shipment_id]
 * @property {string} [name]
 * @property {string} [order_id]
 * @property {string} [country]
 */
/**
 * @typedef SendOtpToCustomerResponse
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {number} [resend_timer]
 */
/**
 * @typedef VerifyOtp
 * @property {string} [otp_code]
 * @property {string} [request_id]
 */
/**
 * @typedef VerifyOtpResponse
 * @property {boolean} [success]
 */
/**
 * @typedef BagReasonMeta
 * @property {boolean} [show_text_area]
 */
/**
 * @typedef QuestionSet
 * @property {number} [id]
 * @property {string} [display_name]
 */
/**
 * @typedef BagReasons
 * @property {string[]} [qc_type]
 * @property {number} [id]
 * @property {string} [display_name]
 * @property {BagReasonMeta} [meta]
 * @property {QuestionSet[]} [question_set]
 * @property {BagReasons[]} [reasons]
 */
/**
 * @typedef ShipmentBagReasons
 * @property {BagReasons[]} [reasons]
 * @property {boolean} [success]
 */
/**
 * @typedef ShipmentReason
 * @property {number} [priority]
 * @property {boolean} [show_text_area]
 * @property {number} [reason_id]
 * @property {string} [feedback_type]
 * @property {string} [reason_text]
 * @property {string} [flow]
 */
/**
 * @typedef ShipmentReasons
 * @property {ShipmentReason[]} [reasons]
 */
/**
 * @typedef ProductsReasonsData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */
/**
 * @typedef ProductsReasonsFilters
 * @property {number} [line_number]
 * @property {number} [quantity]
 * @property {string} [identifier]
 */
/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsData} [data]
 * @property {ProductsReasonsFilters[]} [filters]
 */
/**
 * @typedef EntityReasonData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */
/**
 * @typedef EntitiesReasons
 * @property {EntityReasonData} [data]
 * @property {Object[]} [filters]
 */
/**
 * @typedef ReasonsData
 * @property {ProductsReasons[]} [products]
 * @property {EntitiesReasons[]} [entities]
 */
/**
 * @typedef Products
 * @property {number} [line_number]
 * @property {number} [quantity]
 * @property {string} [identifier]
 */
/**
 * @typedef ProductsDataUpdatesFilters
 * @property {number} [line_number]
 * @property {string} [identifier]
 */
/**
 * @typedef ProductsDataUpdates
 * @property {Object} [data]
 * @property {ProductsDataUpdatesFilters[]} [filters]
 */
/**
 * @typedef EntitiesDataUpdates
 * @property {Object} [data]
 * @property {Object[]} [filters]
 */
/**
 * @typedef DataUpdates
 * @property {ProductsDataUpdates[]} [products]
 * @property {EntitiesDataUpdates[]} [entities]
 */
/**
 * @typedef ShipmentsRequest
 * @property {ReasonsData} [reasons]
 * @property {Products[]} [products]
 * @property {DataUpdates} [data_updates]
 * @property {string} identifier
 */
/**
 * @typedef StatuesRequest
 * @property {ShipmentsRequest[]} [shipments]
 * @property {string} [exclude_bags_next_state]
 * @property {string} [status]
 */
/**
 * @typedef OrderRequest
 * @property {Object} [meta]
 */
/**
 * @typedef UpdateShipmentStatusRequest
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [task]
 * @property {boolean} [lock_after_transition]
 * @property {boolean} [force_transition]
 * @property {boolean} [unlock_before_transition]
 */
/**
 * @typedef StatusesBodyResponse
 * @property {Object[]} [shipments]
 */
/**
 * @typedef ShipmentApplicationStatusResponse
 * @property {StatusesBodyResponse[]} [statuses]
 */
/**
 * @typedef ErrorResponse
 * @property {string} [code]
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [exception]
 * @property {string} [stack_trace]
 */
declare class OrderApplicationModel {
}
declare namespace OrderApplicationModel {
    export { OrderPage, UserInfo, BreakupValues, ShipmentPayment, ShipmentPaymentInfo, ShipmentUserInfo, FulfillingStore, ShipmentStatus, Invoice, NestedTrackingDetails, TrackingDetails, TimeStampData, Promise, ShipmentTotalDetails, Prices, ItemBrand, Item, AppliedFreeArticles, AppliedPromos, Identifiers, FinancialBreakup, CurrentStatus, Bags, FulfillingCompany, Article, Address, Shipments, BagsForReorderArticleAssignment, BagsForReorder, OrderSchema, OrderStatuses, OrderFilters, OrderList, ApefaceApiError, OrderById, ShipmentById, ResponseGetInvoiceShipment, Track, ShipmentTrack, CustomerDetailsResponse, SendOtpToCustomerResponse, VerifyOtp, VerifyOtpResponse, BagReasonMeta, QuestionSet, BagReasons, ShipmentBagReasons, ShipmentReason, ShipmentReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, Products, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, OrderRequest, UpdateShipmentStatusRequest, StatusesBodyResponse, ShipmentApplicationStatusResponse, ErrorResponse };
}
/** @returns {OrderPage} */
declare function OrderPage(): OrderPage;
type OrderPage = {
    type?: string;
    item_total?: number;
    current?: number;
    size?: number;
    has_next?: boolean;
};
/** @returns {UserInfo} */
declare function UserInfo(): UserInfo;
type UserInfo = {
    first_name?: string;
    gender?: string;
    name?: string;
    last_name?: string;
    mobile?: string;
    email?: string;
};
/** @returns {BreakupValues} */
declare function BreakupValues(): BreakupValues;
type BreakupValues = {
    value?: number;
    currency_symbol?: string;
    name?: string;
    display?: string;
    currency_code?: string;
};
/** @returns {ShipmentPayment} */
declare function ShipmentPayment(): ShipmentPayment;
type ShipmentPayment = {
    mop?: string;
    payment_mode?: string;
    status?: string;
    mode?: string;
    logo?: string;
    display_name?: string;
};
/** @returns {ShipmentPaymentInfo} */
declare function ShipmentPaymentInfo(): ShipmentPaymentInfo;
type ShipmentPaymentInfo = {
    /**
     * - Stands for "Mode of Payment". This is a short code
     * (like "COD" for Cash On Delivery) that represents the payment method used.
     */
    mop?: string;
    /**
     * - Information about the payment mode,
     * indicates whether COD or PREPAID
     */
    payment_mode?: string;
    /**
     * - Indicates the current status of the payment,
     * Paid or Unpaid
     */
    status?: string;
    /**
     * - Information about the payment source. For eg, NB_ICICI
     */
    mode?: string;
    /**
     * - A URL to an image representing the payment method
     */
    logo?: string;
    /**
     * - The name of the payment method as it
     * should be displayed to the user
     */
    display_name?: string;
    /**
     * - Amount paid using this payment method
     */
    amount?: number;
};
/** @returns {ShipmentUserInfo} */
declare function ShipmentUserInfo(): ShipmentUserInfo;
type ShipmentUserInfo = {
    first_name?: string;
    gender?: string;
    name?: string;
    last_name?: string;
    mobile?: string;
    email?: string;
};
/** @returns {FulfillingStore} */
declare function FulfillingStore(): FulfillingStore;
type FulfillingStore = {
    id?: number;
    code?: string;
    name?: string;
    company_name?: string;
    company_id?: number;
};
/** @returns {ShipmentStatus} */
declare function ShipmentStatus(): ShipmentStatus;
type ShipmentStatus = {
    value?: string;
    title?: string;
    hex_code?: string;
};
/** @returns {Invoice} */
declare function Invoice(): Invoice;
type Invoice = {
    invoice_url?: string;
    updated_date?: string;
    label_url?: string;
};
/** @returns {NestedTrackingDetails} */
declare function NestedTrackingDetails(): NestedTrackingDetails;
type NestedTrackingDetails = {
    is_passed?: boolean;
    time?: string;
    is_current?: boolean;
    status?: string;
};
/** @returns {TrackingDetails} */
declare function TrackingDetails(): TrackingDetails;
type TrackingDetails = {
    value?: string;
    is_current?: boolean;
    is_passed?: boolean;
    status?: string;
    time?: string;
    created_ts?: string;
    tracking_details?: NestedTrackingDetails[];
};
/** @returns {TimeStampData} */
declare function TimeStampData(): TimeStampData;
type TimeStampData = {
    min?: string;
    max?: string;
};
/** @returns {Promise} */
declare function Promise(): Promise;
type Promise = {
    show_promise?: boolean;
    timestamp?: TimeStampData;
};
/** @returns {ShipmentTotalDetails} */
declare function ShipmentTotalDetails(): ShipmentTotalDetails;
type ShipmentTotalDetails = {
    pieces?: number;
    total_price?: number;
    sizes?: number;
};
/** @returns {Prices} */
declare function Prices(): Prices;
type Prices = {
    delivery_charge?: number;
    coupon_value?: number;
    brand_calculated_amount?: number;
    value_of_good?: number;
    price_marked?: number;
    coupon_effective_discount?: number;
    currency_symbol?: string;
    discount?: number;
    gst_tax_percentage?: number;
    cod_charges?: number;
    amount_paid?: number;
    added_to_fynd_cash?: boolean;
    transfer_price?: number;
    cashback_applied?: number;
    price_effective?: number;
    cashback?: number;
    refund_credit?: number;
    amount_paid_roundoff?: number;
    promotion_effective_discount?: number;
    refund_amount?: number;
    currency_code?: string;
    fynd_credits?: number;
    amount_to_be_collected?: number;
};
/** @returns {ItemBrand} */
declare function ItemBrand(): ItemBrand;
type ItemBrand = {
    logo?: string;
    name?: string;
};
/** @returns {Item} */
declare function Item(): Item;
type Item = {
    image?: string[];
    l1_categories?: string[];
    brand?: ItemBrand;
    seller_identifier?: string;
    code?: string;
    id?: number;
    name?: string;
    l3_category_name?: string;
    slug_key?: string;
    l2_categories?: string[];
    size?: string;
    attributes?: any;
};
/** @returns {AppliedFreeArticles} */
declare function AppliedFreeArticles(): AppliedFreeArticles;
type AppliedFreeArticles = {
    article_id?: string;
    free_gift_item_details?: any;
    parent_item_identifier?: string;
    quantity?: number;
};
/** @returns {AppliedPromos} */
declare function AppliedPromos(): AppliedPromos;
type AppliedPromos = {
    mrp_promotion?: boolean;
    promotion_name?: string;
    article_quantity?: number;
    promo_id?: string;
    amount?: number;
    promotion_type?: string;
    applied_free_articles?: AppliedFreeArticles[];
};
/** @returns {Identifiers} */
declare function Identifiers(): Identifiers;
type Identifiers = {
    ean?: string;
    sku_code?: string;
};
/** @returns {FinancialBreakup} */
declare function FinancialBreakup(): FinancialBreakup;
type FinancialBreakup = {
    coupon_value?: number;
    delivery_charge?: number;
    brand_calculated_amount?: number;
    value_of_good?: number;
    price_marked?: number;
    coupon_effective_discount?: number;
    hsn_code?: string;
    discount?: number;
    gst_tax_percentage?: number;
    cod_charges?: number;
    amount_paid?: number;
    added_to_fynd_cash?: boolean;
    size?: string;
    transfer_price?: number;
    cashback_applied?: number;
    price_effective?: number;
    cashback?: number;
    refund_credit?: number;
    amount_paid_roundoff?: number;
    total_units?: number;
    identifiers?: Identifiers;
    gst_tag?: string;
    item_name?: string;
    promotion_effective_discount?: number;
    gst_fee?: number;
    refund_amount?: number;
    fynd_credits?: number;
    amount_to_be_collected?: number;
};
/** @returns {CurrentStatus} */
declare function CurrentStatus(): CurrentStatus;
type CurrentStatus = {
    updated_at?: string;
    name?: string;
    status?: string;
    journey_type?: string;
};
/** @returns {Bags} */
declare function Bags(): Bags;
type Bags = {
    delivery_date?: string;
    line_number?: number;
    currency_symbol?: string;
    item?: Item;
    applied_promos?: AppliedPromos[];
    quantity?: number;
    prices?: Prices;
    can_cancel?: boolean;
    can_return?: boolean;
    id?: number;
    returnable_date?: string;
    financial_breakup?: FinancialBreakup[];
    parent_promo_bags?: any;
    meta?: any;
    currency_code?: string;
    seller_identifier?: string;
    current_status?: CurrentStatus;
    article?: Article;
};
/** @returns {FulfillingCompany} */
declare function FulfillingCompany(): FulfillingCompany;
type FulfillingCompany = {
    id?: number;
    name?: string;
};
/** @returns {Article} */
declare function Article(): Article;
type Article = {
    tags?: string[];
};
/** @returns {Address} */
declare function Address(): Address;
type Address = {
    pincode?: string;
    phone?: string;
    latitude?: number;
    address2?: string;
    landmark?: string;
    area?: string;
    city?: string;
    address?: string;
    address_type?: string;
    longitude?: number;
    country_iso_code?: string;
    state?: string;
    created_at?: string;
    address1?: string;
    display_address?: string;
    name?: string;
    contact_person?: string;
    address_category?: string;
    email?: string;
    country_phone_code?: string;
    version?: string;
    updated_at?: string;
    country?: string;
};
/** @returns {Shipments} */
declare function Shipments(): Shipments;
type Shipments = {
    payment?: ShipmentPayment;
    /**
     * - "Array of objects
     * containing payment methods used for placing an order. Each object will
     * provide information about corresponding payment method with relevant details."
     */
    payment_info?: ShipmentPaymentInfo[];
    order_type?: string;
    show_download_invoice?: boolean;
    can_cancel?: boolean;
    user_info?: ShipmentUserInfo;
    shipment_id?: string;
    fulfilling_store?: FulfillingStore;
    custom_meta?: any[];
    shipment_status?: ShipmentStatus;
    comment?: string;
    invoice?: Invoice;
    show_track_link?: boolean;
    refund_details?: any;
    breakup_values?: BreakupValues[];
    can_break?: any;
    traking_no?: string;
    tracking_details?: TrackingDetails[];
    promise?: Promise;
    total_bags?: number;
    total_details?: ShipmentTotalDetails;
    prices?: Prices;
    returnable_date?: string;
    shipment_created_at?: string;
    shipment_created_ts?: string;
    size_info?: any;
    bags?: Bags[];
    dp_name?: string;
    awb_no?: string;
    beneficiary_details?: boolean;
    fulfilling_company?: FulfillingCompany;
    can_return?: boolean;
    delivery_address?: Address;
    billing_address?: Address;
    track_url?: string;
    order_id?: string;
    need_help_url?: string;
    return_meta?: any;
    delivery_date?: string;
    order?: OrderRequest;
};
/** @returns {BagsForReorderArticleAssignment} */
declare function BagsForReorderArticleAssignment(): BagsForReorderArticleAssignment;
type BagsForReorderArticleAssignment = {
    strategy?: string;
    level?: string;
};
/** @returns {BagsForReorder} */
declare function BagsForReorder(): BagsForReorder;
type BagsForReorder = {
    item_size?: string;
    quantity?: number;
    store_id?: number;
    article_assignment?: BagsForReorderArticleAssignment;
    seller_id?: number;
    item_id?: number;
};
/** @returns {OrderSchema} */
declare function OrderSchema(): OrderSchema;
type OrderSchema = {
    total_shipments_in_order?: number;
    gstin_code?: string;
    user_info?: UserInfo;
    breakup_values?: BreakupValues[];
    order_created_time?: string;
    order_created_ts?: string;
    order_id?: string;
    shipments?: Shipments[];
    bags_for_reorder?: BagsForReorder[];
    meta?: any;
};
/** @returns {OrderStatuses} */
declare function OrderStatuses(): OrderStatuses;
type OrderStatuses = {
    value?: number;
    is_selected?: boolean;
    display?: string;
};
/** @returns {OrderFilters} */
declare function OrderFilters(): OrderFilters;
type OrderFilters = {
    statuses?: OrderStatuses[];
};
/** @returns {OrderList} */
declare function OrderList(): OrderList;
type OrderList = {
    page?: OrderPage;
    items?: OrderSchema[];
    filters?: OrderFilters;
};
/** @returns {ApefaceApiError} */
declare function ApefaceApiError(): ApefaceApiError;
type ApefaceApiError = {
    message?: string;
    success?: boolean;
};
/** @returns {OrderById} */
declare function OrderById(): OrderById;
type OrderById = {
    order?: OrderSchema;
};
/** @returns {ShipmentById} */
declare function ShipmentById(): ShipmentById;
type ShipmentById = {
    shipment?: Shipments;
};
/** @returns {ResponseGetInvoiceShipment} */
declare function ResponseGetInvoiceShipment(): ResponseGetInvoiceShipment;
type ResponseGetInvoiceShipment = {
    presigned_type: string;
    success: boolean;
    shipment_id: string;
    presigned_url: string;
};
/** @returns {Track} */
declare function Track(): Track;
type Track = {
    account_name?: string;
    shipment_type?: string;
    status?: string;
    last_location_recieved_at?: string;
    updated_time?: string;
    updated_at?: string;
    reason?: string;
    awb?: string;
};
/** @returns {ShipmentTrack} */
declare function ShipmentTrack(): ShipmentTrack;
type ShipmentTrack = {
    results?: Track[];
};
/** @returns {CustomerDetailsResponse} */
declare function CustomerDetailsResponse(): CustomerDetailsResponse;
type CustomerDetailsResponse = {
    phone?: string;
    shipment_id?: string;
    name?: string;
    order_id?: string;
    country?: string;
};
/** @returns {SendOtpToCustomerResponse} */
declare function SendOtpToCustomerResponse(): SendOtpToCustomerResponse;
type SendOtpToCustomerResponse = {
    request_id?: string;
    message?: string;
    success?: boolean;
    resend_timer?: number;
};
/** @returns {VerifyOtp} */
declare function VerifyOtp(): VerifyOtp;
type VerifyOtp = {
    otp_code?: string;
    request_id?: string;
};
/** @returns {VerifyOtpResponse} */
declare function VerifyOtpResponse(): VerifyOtpResponse;
type VerifyOtpResponse = {
    success?: boolean;
};
/** @returns {BagReasonMeta} */
declare function BagReasonMeta(): BagReasonMeta;
type BagReasonMeta = {
    show_text_area?: boolean;
};
/** @returns {QuestionSet} */
declare function QuestionSet(): QuestionSet;
type QuestionSet = {
    id?: number;
    display_name?: string;
};
/** @returns {BagReasons} */
declare function BagReasons(): BagReasons;
type BagReasons = {
    qc_type?: string[];
    id?: number;
    display_name?: string;
    meta?: BagReasonMeta;
    question_set?: QuestionSet[];
    reasons?: BagReasons[];
};
/** @returns {ShipmentBagReasons} */
declare function ShipmentBagReasons(): ShipmentBagReasons;
type ShipmentBagReasons = {
    reasons?: BagReasons[];
    success?: boolean;
};
/** @returns {ShipmentReason} */
declare function ShipmentReason(): ShipmentReason;
type ShipmentReason = {
    priority?: number;
    show_text_area?: boolean;
    reason_id?: number;
    feedback_type?: string;
    reason_text?: string;
    flow?: string;
};
/** @returns {ShipmentReasons} */
declare function ShipmentReasons(): ShipmentReasons;
type ShipmentReasons = {
    reasons?: ShipmentReason[];
};
/** @returns {ProductsReasonsData} */
declare function ProductsReasonsData(): ProductsReasonsData;
type ProductsReasonsData = {
    reason_id?: number;
    reason_text?: string;
};
/** @returns {ProductsReasonsFilters} */
declare function ProductsReasonsFilters(): ProductsReasonsFilters;
type ProductsReasonsFilters = {
    line_number?: number;
    quantity?: number;
    identifier?: string;
};
/** @returns {ProductsReasons} */
declare function ProductsReasons(): ProductsReasons;
type ProductsReasons = {
    data?: ProductsReasonsData;
    filters?: ProductsReasonsFilters[];
};
/** @returns {EntityReasonData} */
declare function EntityReasonData(): EntityReasonData;
type EntityReasonData = {
    reason_id?: number;
    reason_text?: string;
};
/** @returns {EntitiesReasons} */
declare function EntitiesReasons(): EntitiesReasons;
type EntitiesReasons = {
    data?: EntityReasonData;
    filters?: any[];
};
/** @returns {ReasonsData} */
declare function ReasonsData(): ReasonsData;
type ReasonsData = {
    products?: ProductsReasons[];
    entities?: EntitiesReasons[];
};
/** @returns {Products} */
declare function Products(): Products;
type Products = {
    line_number?: number;
    quantity?: number;
    identifier?: string;
};
/** @returns {ProductsDataUpdatesFilters} */
declare function ProductsDataUpdatesFilters(): ProductsDataUpdatesFilters;
type ProductsDataUpdatesFilters = {
    line_number?: number;
    identifier?: string;
};
/** @returns {ProductsDataUpdates} */
declare function ProductsDataUpdates(): ProductsDataUpdates;
type ProductsDataUpdates = {
    data?: any;
    filters?: ProductsDataUpdatesFilters[];
};
/** @returns {EntitiesDataUpdates} */
declare function EntitiesDataUpdates(): EntitiesDataUpdates;
type EntitiesDataUpdates = {
    data?: any;
    filters?: any[];
};
/** @returns {DataUpdates} */
declare function DataUpdates(): DataUpdates;
type DataUpdates = {
    products?: ProductsDataUpdates[];
    entities?: EntitiesDataUpdates[];
};
/** @returns {ShipmentsRequest} */
declare function ShipmentsRequest(): ShipmentsRequest;
type ShipmentsRequest = {
    reasons?: ReasonsData;
    products?: Products[];
    data_updates?: DataUpdates;
    identifier: string;
};
/** @returns {StatuesRequest} */
declare function StatuesRequest(): StatuesRequest;
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
    status?: string;
};
/** @returns {OrderRequest} */
declare function OrderRequest(): OrderRequest;
type OrderRequest = {
    meta?: any;
};
/** @returns {UpdateShipmentStatusRequest} */
declare function UpdateShipmentStatusRequest(): UpdateShipmentStatusRequest;
type UpdateShipmentStatusRequest = {
    statuses?: StatuesRequest[];
    task?: boolean;
    lock_after_transition?: boolean;
    force_transition?: boolean;
    unlock_before_transition?: boolean;
};
/** @returns {StatusesBodyResponse} */
declare function StatusesBodyResponse(): StatusesBodyResponse;
type StatusesBodyResponse = {
    shipments?: any[];
};
/** @returns {ShipmentApplicationStatusResponse} */
declare function ShipmentApplicationStatusResponse(): ShipmentApplicationStatusResponse;
type ShipmentApplicationStatusResponse = {
    statuses?: StatusesBodyResponse[];
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    code?: string;
    message?: string;
    status?: number;
    exception?: string;
    stack_trace?: string;
};
