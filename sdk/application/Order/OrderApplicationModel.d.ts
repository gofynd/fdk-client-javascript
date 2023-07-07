export = OrderApplicationModel;
/**
 * @typedef ApefaceApiError
 * @property {string} [message]
 * @property {boolean} [success]
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
 * @property {number} [amount]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 * @property {number} [article_quantity]
 * @property {boolean} [mrp_promotion]
 * @property {string} [promo_id]
 * @property {string} [promotion_name]
 * @property {string} [promotion_type]
 */
/**
 * @typedef BagReasonMeta
 * @property {boolean} [show_text_area]
 */
/**
 * @typedef BagReasons
 * @property {string} [display_name]
 * @property {number} [id]
 * @property {BagReasonMeta} [meta]
 * @property {string[]} [qc_type]
 * @property {QuestionSet[]} [question_set]
 * @property {BagReasons[]} [reasons]
 */
/**
 * @typedef Bags
 * @property {AppliedPromos[]} [applied_promos]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {CurrentStatus} [current_status]
 * @property {string} [delivery_date]
 * @property {FinancialBreakup[]} [financial_breakup]
 * @property {number} [id]
 * @property {Item} [item]
 * @property {number} [line_number]
 * @property {Object} [meta]
 * @property {Object} [parent_promo_bags]
 * @property {Prices} [prices]
 * @property {number} [quantity]
 * @property {string} [returnable_date]
 * @property {string} [seller_identifier]
 */
/**
 * @typedef BagsForReorder
 * @property {BagsForReorderArticleAssignment} [article_assignment]
 * @property {number} [item_id]
 * @property {string} [item_size]
 * @property {number} [quantity]
 * @property {number} [seller_id]
 * @property {number} [store_id]
 */
/**
 * @typedef BagsForReorderArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy]
 */
/**
 * @typedef BreakupValues
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {string} [display]
 * @property {string} [name]
 * @property {number} [value]
 */
/**
 * @typedef Coupon
 * @property {string} [code]
 * @property {string} [coupon_type]
 * @property {number} [id]
 * @property {string} [payable_category]
 * @property {number} [value]
 */
/**
 * @typedef CurrentStatus
 * @property {string} [created_at]
 * @property {string} [journey_type]
 * @property {string} [name]
 * @property {string} [status]
 * @property {string} [updated_at]
 */
/**
 * @typedef CustomerDetailsResponse
 * @property {string} [country]
 * @property {string} [name]
 * @property {string} [order_id]
 * @property {string} [phone]
 * @property {string} [shipment_id]
 */
/**
 * @typedef DataUpdates
 * @property {EntitiesDataUpdates[]} [entities]
 * @property {ProductsDataUpdates[]} [products]
 */
/**
 * @typedef DeliveryAddress
 * @property {string} [address]
 * @property {string} [address_category]
 * @property {string} [address_type]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [area]
 * @property {string} [city]
 * @property {string} [contact_person]
 * @property {string} [country]
 * @property {string} [country_iso_code]
 * @property {string} [country_phone_code]
 * @property {string} [created_at]
 * @property {string} [email]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [name]
 * @property {string} [phone]
 * @property {string} [pincode]
 * @property {string} [state]
 * @property {string} [updated_at]
 * @property {string} [version]
 */
/**
 * @typedef EntitiesDataUpdates
 * @property {Object} [data]
 * @property {Object[]} [filters]
 */
/**
 * @typedef EntitiesReasons
 * @property {EntityReasonData} [data]
 * @property {Object[]} [filters]
 */
/**
 * @typedef EntityReasonData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */
/**
 * @typedef ErrorResponse
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {string} [stack_trace]
 * @property {number} [status]
 */
/**
 * @typedef FinancialBreakup
 * @property {boolean} [added_to_fynd_cash]
 * @property {number} [amount_paid]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [brand_calculated_amount]
 * @property {number} [cashback]
 * @property {number} [cashback_applied]
 * @property {number} [cod_charges]
 * @property {number} [coupon_effective_discount]
 * @property {number} [coupon_value]
 * @property {number} [delivery_charge]
 * @property {number} [discount]
 * @property {number} [fynd_credits]
 * @property {number} [gst_fee]
 * @property {string} [gst_tag]
 * @property {number} [gst_tax_percentage]
 * @property {string} [hsn_code]
 * @property {Identifiers} [identifiers]
 * @property {string} [item_name]
 * @property {number} [price_effective]
 * @property {number} [price_marked]
 * @property {number} [promotion_effective_discount]
 * @property {number} [refund_amount]
 * @property {number} [refund_credit]
 * @property {string} [size]
 * @property {number} [total_units]
 * @property {number} [transfer_price]
 * @property {number} [value_of_good]
 */
/**
 * @typedef FulfillingCompany
 * @property {number} [id]
 * @property {string} [name]
 */
/**
 * @typedef FulfillingStore
 * @property {string} [code]
 * @property {number} [company_id]
 * @property {string} [company_name]
 * @property {number} [id]
 * @property {string} [name]
 */
/**
 * @typedef Identifiers
 * @property {string} [ean]
 * @property {string} [sku_code]
 */
/**
 * @typedef Invoice
 * @property {string} [invoice_url]
 * @property {string} [label_url]
 * @property {string} [updated_date]
 */
/**
 * @typedef Item
 * @property {ItemBrand} [brand]
 * @property {string} [code]
 * @property {number} [id]
 * @property {string[]} [image]
 * @property {string[]} [l1_categories]
 * @property {string[]} [l2_categories]
 * @property {string} [l3_category_name]
 * @property {string} [name]
 * @property {string} [seller_identifier]
 * @property {string} [size]
 * @property {string} [slug_key]
 */
/**
 * @typedef ItemBrand
 * @property {string} [logo]
 * @property {string} [name]
 */
/**
 * @typedef NestedTrackingDetails
 * @property {boolean} [is_current]
 * @property {boolean} [is_passed]
 * @property {string} [status]
 * @property {string} [time]
 */
/**
 * @typedef OrderById
 * @property {OrderSchema} [order]
 */
/**
 * @typedef OrderFilters
 * @property {OrderStatuses[]} [statuses]
 */
/**
 * @typedef OrderList
 * @property {OrderFilters} [filters]
 * @property {OrderSchema[]} [items]
 * @property {OrderPage} [page]
 */
/**
 * @typedef OrderPage
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */
/**
 * @typedef OrderSchema
 * @property {BagsForReorder[]} [bags_for_reorder]
 * @property {BreakupValues[]} [breakup_values]
 * @property {string} [order_created_time]
 * @property {string} [order_id]
 * @property {Shipments[]} [shipments]
 * @property {number} [total_shipments_in_order]
 * @property {UserInfo} [user_info]
 */
/**
 * @typedef OrderStatuses
 * @property {string} [display]
 * @property {boolean} [is_selected]
 * @property {number} [value]
 */
/**
 * @typedef Prices
 * @property {boolean} [added_to_fynd_cash]
 * @property {number} [amount_paid]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [brand_calculated_amount]
 * @property {number} [cashback]
 * @property {number} [cashback_applied]
 * @property {number} [cod_charges]
 * @property {number} [coupon_effective_discount]
 * @property {number} [coupon_value]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [delivery_charge]
 * @property {number} [discount]
 * @property {number} [fynd_credits]
 * @property {number} [gst_tax_percentage]
 * @property {number} [price_effective]
 * @property {number} [price_marked]
 * @property {number} [promotion_effective_discount]
 * @property {number} [refund_amount]
 * @property {number} [refund_credit]
 * @property {number} [transfer_price]
 * @property {number} [value_of_good]
 */
/**
 * @typedef Product
 * @property {AppliedPromos[]} [applied_promos]
 * @property {ProductStatus} [bag_status]
 * @property {ProductBrand} [brand]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {Coupon} [coupon]
 * @property {string} [delivery_date]
 * @property {string} docket_number
 * @property {Item} [item]
 * @property {number} [line_number]
 * @property {string} order_id
 * @property {Object} [parent_promo_bags]
 * @property {ShipmentPayment} [payment]
 * @property {number} [quantity]
 * @property {string} [returnable_date]
 * @property {string} [seller_identifier]
 */
/**
 * @typedef ProductBrand
 * @property {string} [brand_name]
 * @property {number} [id]
 */
/**
 * @typedef ProductListResponse
 * @property {OrderFilters} [filters]
 * @property {Product[]} [items]
 * @property {string} [message]
 * @property {OrderPage} [page]
 * @property {boolean} [success]
 */
/**
 * @typedef Products
 * @property {string} [identifier]
 * @property {number} [line_number]
 * @property {number} [quantity]
 */
/**
 * @typedef ProductsDataUpdates
 * @property {Object} [data]
 * @property {ProductsDataUpdatesFilters[]} [filters]
 */
/**
 * @typedef ProductsDataUpdatesFilters
 * @property {string} [identifier]
 * @property {number} [line_number]
 */
/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsData} [data]
 * @property {ProductsReasonsFilters[]} [filters]
 */
/**
 * @typedef ProductsReasonsData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */
/**
 * @typedef ProductsReasonsFilters
 * @property {string} [identifier]
 * @property {number} [line_number]
 * @property {number} [quantity]
 */
/**
 * @typedef ProductStatus
 * @property {string} [created_at]
 * @property {string} [hex_code]
 * @property {string} [title]
 * @property {string} [value]
 */
/**
 * @typedef Promise
 * @property {boolean} [show_promise]
 * @property {TimeStampData} [timestamp]
 */
/**
 * @typedef QuestionSet
 * @property {string} [display_name]
 * @property {number} [id]
 */
/**
 * @typedef ReasonsData
 * @property {EntitiesReasons[]} [entities]
 * @property {ProductsReasons[]} [products]
 */
/**
 * @typedef ResponseGetInvoiceShipment
 * @property {string} presigned_type
 * @property {string} presigned_url
 * @property {string} shipment_id
 * @property {boolean} success
 */
/**
 * @typedef SendOtpToCustomerResponse
 * @property {string} [message]
 * @property {string} [request_id]
 * @property {number} [resend_timer]
 * @property {boolean} [success]
 */
/**
 * @typedef ShipmentApplicationStatusResponse
 * @property {StatusesBodyResponse[]} [statuses]
 */
/**
 * @typedef ShipmentBagReasons
 * @property {BagReasons[]} [reasons]
 * @property {boolean} [success]
 */
/**
 * @typedef ShipmentById
 * @property {Shipments} [shipment]
 */
/**
 * @typedef ShipmentPayment
 * @property {string} [display_name]
 * @property {string} [logo]
 * @property {string} [mode]
 * @property {string} [mop]
 * @property {string} [payment_mode]
 * @property {string} [status]
 */
/**
 * @typedef ShipmentReason
 * @property {string} [feedback_type]
 * @property {string} [flow]
 * @property {number} [priority]
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 * @property {boolean} [show_text_area]
 */
/**
 * @typedef ShipmentReasons
 * @property {ShipmentReason[]} [reasons]
 */
/**
 * @typedef Shipments
 * @property {string} [awb_no]
 * @property {Bags[]} [bags]
 * @property {boolean} [beneficiary_details]
 * @property {BreakupValues[]} [breakup_values]
 * @property {Object} [can_break]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {string} [comment]
 * @property {Object[]} [custom_meta]
 * @property {DeliveryAddress} [delivery_address]
 * @property {string} [delivery_date]
 * @property {string} [dp_name]
 * @property {FulfillingCompany} [fulfilling_company]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {Invoice} [invoice]
 * @property {string} [need_help_url]
 * @property {string} [order_id]
 * @property {string} [order_type]
 * @property {ShipmentPayment} [payment]
 * @property {Prices} [prices]
 * @property {Promise} [promise]
 * @property {Object} [refund_details]
 * @property {Object} [return_meta]
 * @property {string} [returnable_date]
 * @property {string} [shipment_created_at]
 * @property {string} [shipment_id]
 * @property {ShipmentStatus} [shipment_status]
 * @property {boolean} [show_download_invoice]
 * @property {boolean} [show_track_link]
 * @property {Object} [size_info]
 * @property {number} [total_bags]
 * @property {ShipmentTotalDetails} [total_details]
 * @property {string} [track_url]
 * @property {TrackingDetails[]} [tracking_details]
 * @property {string} [traking_no]
 * @property {ShipmentUserInfo} [user_info]
 */
/**
 * @typedef ShipmentsRequest
 * @property {DataUpdates} [data_updates]
 * @property {string} identifier
 * @property {Products[]} [products]
 * @property {ReasonsData} [reasons]
 */
/**
 * @typedef ShipmentStatus
 * @property {string} [hex_code]
 * @property {string} [title]
 * @property {string} [value]
 */
/**
 * @typedef ShipmentTotalDetails
 * @property {number} [pieces]
 * @property {number} [sizes]
 * @property {number} [total_price]
 */
/**
 * @typedef ShipmentTrack
 * @property {Track[]} [results]
 */
/**
 * @typedef ShipmentUserInfo
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {string} [mobile]
 * @property {string} [name]
 */
/**
 * @typedef StatuesRequest
 * @property {string} [exclude_bags_next_state]
 * @property {ShipmentsRequest[]} [shipments]
 * @property {string} [status]
 */
/**
 * @typedef StatusesBodyResponse
 * @property {Object[]} [shipments]
 */
/**
 * @typedef TimeStampData
 * @property {string} [max]
 * @property {string} [min]
 */
/**
 * @typedef Track
 * @property {string} [account_name]
 * @property {string} [awb]
 * @property {string} [last_location_recieved_at]
 * @property {string} [reason]
 * @property {string} [shipment_type]
 * @property {string} [status]
 * @property {string} [updated_at]
 * @property {string} [updated_time]
 */
/**
 * @typedef TrackingDetails
 * @property {boolean} [is_current]
 * @property {boolean} [is_passed]
 * @property {string} [status]
 * @property {string} [time]
 * @property {NestedTrackingDetails[]} [tracking_details]
 * @property {string} [value]
 */
/**
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [force_transition]
 * @property {boolean} [lock_after_transition]
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [task]
 * @property {boolean} [unlock_before_transition]
 */
/**
 * @typedef UserInfo
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {string} [mobile]
 * @property {string} [name]
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
declare class OrderApplicationModel {
}
declare namespace OrderApplicationModel {
    export { ApefaceApiError, AppliedFreeArticles, AppliedPromos, BagReasonMeta, BagReasons, Bags, BagsForReorder, BagsForReorderArticleAssignment, BreakupValues, Coupon, CurrentStatus, CustomerDetailsResponse, DataUpdates, DeliveryAddress, EntitiesDataUpdates, EntitiesReasons, EntityReasonData, ErrorResponse, FinancialBreakup, FulfillingCompany, FulfillingStore, Identifiers, Invoice, Item, ItemBrand, NestedTrackingDetails, OrderById, OrderFilters, OrderList, OrderPage, OrderSchema, OrderStatuses, Prices, Product, ProductBrand, ProductListResponse, Products, ProductsDataUpdates, ProductsDataUpdatesFilters, ProductsReasons, ProductsReasonsData, ProductsReasonsFilters, ProductStatus, Promise, QuestionSet, ReasonsData, ResponseGetInvoiceShipment, SendOtpToCustomerResponse, ShipmentApplicationStatusResponse, ShipmentBagReasons, ShipmentById, ShipmentPayment, ShipmentReason, ShipmentReasons, Shipments, ShipmentsRequest, ShipmentStatus, ShipmentTotalDetails, ShipmentTrack, ShipmentUserInfo, StatuesRequest, StatusesBodyResponse, TimeStampData, Track, TrackingDetails, UpdateShipmentStatusRequest, UserInfo, VerifyOtp, VerifyOtpResponse };
}
/** @returns {ApefaceApiError} */
declare function ApefaceApiError(): ApefaceApiError;
type ApefaceApiError = {
    message?: string;
    success?: boolean;
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
    amount?: number;
    applied_free_articles?: AppliedFreeArticles[];
    article_quantity?: number;
    mrp_promotion?: boolean;
    promo_id?: string;
    promotion_name?: string;
    promotion_type?: string;
};
/** @returns {BagReasonMeta} */
declare function BagReasonMeta(): BagReasonMeta;
type BagReasonMeta = {
    show_text_area?: boolean;
};
/** @returns {BagReasons} */
declare function BagReasons(): BagReasons;
type BagReasons = {
    display_name?: string;
    id?: number;
    meta?: BagReasonMeta;
    qc_type?: string[];
    question_set?: QuestionSet[];
    reasons?: BagReasons[];
};
/** @returns {Bags} */
declare function Bags(): Bags;
type Bags = {
    applied_promos?: AppliedPromos[];
    can_cancel?: boolean;
    can_return?: boolean;
    currency_code?: string;
    currency_symbol?: string;
    current_status?: CurrentStatus;
    delivery_date?: string;
    financial_breakup?: FinancialBreakup[];
    id?: number;
    item?: Item;
    line_number?: number;
    meta?: any;
    parent_promo_bags?: any;
    prices?: Prices;
    quantity?: number;
    returnable_date?: string;
    seller_identifier?: string;
};
/** @returns {BagsForReorder} */
declare function BagsForReorder(): BagsForReorder;
type BagsForReorder = {
    article_assignment?: BagsForReorderArticleAssignment;
    item_id?: number;
    item_size?: string;
    quantity?: number;
    seller_id?: number;
    store_id?: number;
};
/** @returns {BagsForReorderArticleAssignment} */
declare function BagsForReorderArticleAssignment(): BagsForReorderArticleAssignment;
type BagsForReorderArticleAssignment = {
    level?: string;
    strategy?: string;
};
/** @returns {BreakupValues} */
declare function BreakupValues(): BreakupValues;
type BreakupValues = {
    currency_code?: string;
    currency_symbol?: string;
    display?: string;
    name?: string;
    value?: number;
};
/** @returns {Coupon} */
declare function Coupon(): Coupon;
type Coupon = {
    code?: string;
    coupon_type?: string;
    id?: number;
    payable_category?: string;
    value?: number;
};
/** @returns {CurrentStatus} */
declare function CurrentStatus(): CurrentStatus;
type CurrentStatus = {
    created_at?: string;
    journey_type?: string;
    name?: string;
    status?: string;
    updated_at?: string;
};
/** @returns {CustomerDetailsResponse} */
declare function CustomerDetailsResponse(): CustomerDetailsResponse;
type CustomerDetailsResponse = {
    country?: string;
    name?: string;
    order_id?: string;
    phone?: string;
    shipment_id?: string;
};
/** @returns {DataUpdates} */
declare function DataUpdates(): DataUpdates;
type DataUpdates = {
    entities?: EntitiesDataUpdates[];
    products?: ProductsDataUpdates[];
};
/** @returns {DeliveryAddress} */
declare function DeliveryAddress(): DeliveryAddress;
type DeliveryAddress = {
    address?: string;
    address_category?: string;
    address_type?: string;
    address1?: string;
    address2?: string;
    area?: string;
    city?: string;
    contact_person?: string;
    country?: string;
    country_iso_code?: string;
    country_phone_code?: string;
    created_at?: string;
    email?: string;
    landmark?: string;
    latitude?: number;
    longitude?: number;
    name?: string;
    phone?: string;
    pincode?: string;
    state?: string;
    updated_at?: string;
    version?: string;
};
/** @returns {EntitiesDataUpdates} */
declare function EntitiesDataUpdates(): EntitiesDataUpdates;
type EntitiesDataUpdates = {
    data?: any;
    filters?: any[];
};
/** @returns {EntitiesReasons} */
declare function EntitiesReasons(): EntitiesReasons;
type EntitiesReasons = {
    data?: EntityReasonData;
    filters?: any[];
};
/** @returns {EntityReasonData} */
declare function EntityReasonData(): EntityReasonData;
type EntityReasonData = {
    reason_id?: number;
    reason_text?: string;
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    code?: string;
    exception?: string;
    message?: string;
    stack_trace?: string;
    status?: number;
};
/** @returns {FinancialBreakup} */
declare function FinancialBreakup(): FinancialBreakup;
type FinancialBreakup = {
    added_to_fynd_cash?: boolean;
    amount_paid?: number;
    amount_paid_roundoff?: number;
    brand_calculated_amount?: number;
    cashback?: number;
    cashback_applied?: number;
    cod_charges?: number;
    coupon_effective_discount?: number;
    coupon_value?: number;
    delivery_charge?: number;
    discount?: number;
    fynd_credits?: number;
    gst_fee?: number;
    gst_tag?: string;
    gst_tax_percentage?: number;
    hsn_code?: string;
    identifiers?: Identifiers;
    item_name?: string;
    price_effective?: number;
    price_marked?: number;
    promotion_effective_discount?: number;
    refund_amount?: number;
    refund_credit?: number;
    size?: string;
    total_units?: number;
    transfer_price?: number;
    value_of_good?: number;
};
/** @returns {FulfillingCompany} */
declare function FulfillingCompany(): FulfillingCompany;
type FulfillingCompany = {
    id?: number;
    name?: string;
};
/** @returns {FulfillingStore} */
declare function FulfillingStore(): FulfillingStore;
type FulfillingStore = {
    code?: string;
    company_id?: number;
    company_name?: string;
    id?: number;
    name?: string;
};
/** @returns {Identifiers} */
declare function Identifiers(): Identifiers;
type Identifiers = {
    ean?: string;
    sku_code?: string;
};
/** @returns {Invoice} */
declare function Invoice(): Invoice;
type Invoice = {
    invoice_url?: string;
    label_url?: string;
    updated_date?: string;
};
/** @returns {Item} */
declare function Item(): Item;
type Item = {
    brand?: ItemBrand;
    code?: string;
    id?: number;
    image?: string[];
    l1_categories?: string[];
    l2_categories?: string[];
    l3_category_name?: string;
    name?: string;
    seller_identifier?: string;
    size?: string;
    slug_key?: string;
};
/** @returns {ItemBrand} */
declare function ItemBrand(): ItemBrand;
type ItemBrand = {
    logo?: string;
    name?: string;
};
/** @returns {NestedTrackingDetails} */
declare function NestedTrackingDetails(): NestedTrackingDetails;
type NestedTrackingDetails = {
    is_current?: boolean;
    is_passed?: boolean;
    status?: string;
    time?: string;
};
/** @returns {OrderById} */
declare function OrderById(): OrderById;
type OrderById = {
    order?: OrderSchema;
};
/** @returns {OrderFilters} */
declare function OrderFilters(): OrderFilters;
type OrderFilters = {
    statuses?: OrderStatuses[];
};
/** @returns {OrderList} */
declare function OrderList(): OrderList;
type OrderList = {
    filters?: OrderFilters;
    items?: OrderSchema[];
    page?: OrderPage;
};
/** @returns {OrderPage} */
declare function OrderPage(): OrderPage;
type OrderPage = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
/** @returns {OrderSchema} */
declare function OrderSchema(): OrderSchema;
type OrderSchema = {
    bags_for_reorder?: BagsForReorder[];
    breakup_values?: BreakupValues[];
    order_created_time?: string;
    order_id?: string;
    shipments?: Shipments[];
    total_shipments_in_order?: number;
    user_info?: UserInfo;
};
/** @returns {OrderStatuses} */
declare function OrderStatuses(): OrderStatuses;
type OrderStatuses = {
    display?: string;
    is_selected?: boolean;
    value?: number;
};
/** @returns {Prices} */
declare function Prices(): Prices;
type Prices = {
    added_to_fynd_cash?: boolean;
    amount_paid?: number;
    amount_paid_roundoff?: number;
    brand_calculated_amount?: number;
    cashback?: number;
    cashback_applied?: number;
    cod_charges?: number;
    coupon_effective_discount?: number;
    coupon_value?: number;
    currency_code?: string;
    currency_symbol?: string;
    delivery_charge?: number;
    discount?: number;
    fynd_credits?: number;
    gst_tax_percentage?: number;
    price_effective?: number;
    price_marked?: number;
    promotion_effective_discount?: number;
    refund_amount?: number;
    refund_credit?: number;
    transfer_price?: number;
    value_of_good?: number;
};
/** @returns {Product} */
declare function Product(): Product;
type Product = {
    applied_promos?: AppliedPromos[];
    bag_status?: ProductStatus;
    brand?: ProductBrand;
    can_cancel?: boolean;
    can_return?: boolean;
    coupon?: Coupon;
    delivery_date?: string;
    docket_number: string;
    item?: Item;
    line_number?: number;
    order_id: string;
    parent_promo_bags?: any;
    payment?: ShipmentPayment;
    quantity?: number;
    returnable_date?: string;
    seller_identifier?: string;
};
/** @returns {ProductBrand} */
declare function ProductBrand(): ProductBrand;
type ProductBrand = {
    brand_name?: string;
    id?: number;
};
/** @returns {ProductListResponse} */
declare function ProductListResponse(): ProductListResponse;
type ProductListResponse = {
    filters?: OrderFilters;
    items?: Product[];
    message?: string;
    page?: OrderPage;
    success?: boolean;
};
/** @returns {Products} */
declare function Products(): Products;
type Products = {
    identifier?: string;
    line_number?: number;
    quantity?: number;
};
/** @returns {ProductsDataUpdates} */
declare function ProductsDataUpdates(): ProductsDataUpdates;
type ProductsDataUpdates = {
    data?: any;
    filters?: ProductsDataUpdatesFilters[];
};
/** @returns {ProductsDataUpdatesFilters} */
declare function ProductsDataUpdatesFilters(): ProductsDataUpdatesFilters;
type ProductsDataUpdatesFilters = {
    identifier?: string;
    line_number?: number;
};
/** @returns {ProductsReasons} */
declare function ProductsReasons(): ProductsReasons;
type ProductsReasons = {
    data?: ProductsReasonsData;
    filters?: ProductsReasonsFilters[];
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
    identifier?: string;
    line_number?: number;
    quantity?: number;
};
/** @returns {ProductStatus} */
declare function ProductStatus(): ProductStatus;
type ProductStatus = {
    created_at?: string;
    hex_code?: string;
    title?: string;
    value?: string;
};
/** @returns {Promise} */
declare function Promise(): Promise;
type Promise = {
    show_promise?: boolean;
    timestamp?: TimeStampData;
};
/** @returns {QuestionSet} */
declare function QuestionSet(): QuestionSet;
type QuestionSet = {
    display_name?: string;
    id?: number;
};
/** @returns {ReasonsData} */
declare function ReasonsData(): ReasonsData;
type ReasonsData = {
    entities?: EntitiesReasons[];
    products?: ProductsReasons[];
};
/** @returns {ResponseGetInvoiceShipment} */
declare function ResponseGetInvoiceShipment(): ResponseGetInvoiceShipment;
type ResponseGetInvoiceShipment = {
    presigned_type: string;
    presigned_url: string;
    shipment_id: string;
    success: boolean;
};
/** @returns {SendOtpToCustomerResponse} */
declare function SendOtpToCustomerResponse(): SendOtpToCustomerResponse;
type SendOtpToCustomerResponse = {
    message?: string;
    request_id?: string;
    resend_timer?: number;
    success?: boolean;
};
/** @returns {ShipmentApplicationStatusResponse} */
declare function ShipmentApplicationStatusResponse(): ShipmentApplicationStatusResponse;
type ShipmentApplicationStatusResponse = {
    statuses?: StatusesBodyResponse[];
};
/** @returns {ShipmentBagReasons} */
declare function ShipmentBagReasons(): ShipmentBagReasons;
type ShipmentBagReasons = {
    reasons?: BagReasons[];
    success?: boolean;
};
/** @returns {ShipmentById} */
declare function ShipmentById(): ShipmentById;
type ShipmentById = {
    shipment?: Shipments;
};
/** @returns {ShipmentPayment} */
declare function ShipmentPayment(): ShipmentPayment;
type ShipmentPayment = {
    display_name?: string;
    logo?: string;
    mode?: string;
    mop?: string;
    payment_mode?: string;
    status?: string;
};
/** @returns {ShipmentReason} */
declare function ShipmentReason(): ShipmentReason;
type ShipmentReason = {
    feedback_type?: string;
    flow?: string;
    priority?: number;
    reason_id?: number;
    reason_text?: string;
    show_text_area?: boolean;
};
/** @returns {ShipmentReasons} */
declare function ShipmentReasons(): ShipmentReasons;
type ShipmentReasons = {
    reasons?: ShipmentReason[];
};
/** @returns {Shipments} */
declare function Shipments(): Shipments;
type Shipments = {
    awb_no?: string;
    bags?: Bags[];
    beneficiary_details?: boolean;
    breakup_values?: BreakupValues[];
    can_break?: any;
    can_cancel?: boolean;
    can_return?: boolean;
    comment?: string;
    custom_meta?: any[];
    delivery_address?: DeliveryAddress;
    delivery_date?: string;
    dp_name?: string;
    fulfilling_company?: FulfillingCompany;
    fulfilling_store?: FulfillingStore;
    invoice?: Invoice;
    need_help_url?: string;
    order_id?: string;
    order_type?: string;
    payment?: ShipmentPayment;
    prices?: Prices;
    promise?: Promise;
    refund_details?: any;
    return_meta?: any;
    returnable_date?: string;
    shipment_created_at?: string;
    shipment_id?: string;
    shipment_status?: ShipmentStatus;
    show_download_invoice?: boolean;
    show_track_link?: boolean;
    size_info?: any;
    total_bags?: number;
    total_details?: ShipmentTotalDetails;
    track_url?: string;
    tracking_details?: TrackingDetails[];
    traking_no?: string;
    user_info?: ShipmentUserInfo;
};
/** @returns {ShipmentsRequest} */
declare function ShipmentsRequest(): ShipmentsRequest;
type ShipmentsRequest = {
    data_updates?: DataUpdates;
    identifier: string;
    products?: Products[];
    reasons?: ReasonsData;
};
/** @returns {ShipmentStatus} */
declare function ShipmentStatus(): ShipmentStatus;
type ShipmentStatus = {
    hex_code?: string;
    title?: string;
    value?: string;
};
/** @returns {ShipmentTotalDetails} */
declare function ShipmentTotalDetails(): ShipmentTotalDetails;
type ShipmentTotalDetails = {
    pieces?: number;
    sizes?: number;
    total_price?: number;
};
/** @returns {ShipmentTrack} */
declare function ShipmentTrack(): ShipmentTrack;
type ShipmentTrack = {
    results?: Track[];
};
/** @returns {ShipmentUserInfo} */
declare function ShipmentUserInfo(): ShipmentUserInfo;
type ShipmentUserInfo = {
    email?: string;
    first_name?: string;
    gender?: string;
    last_name?: string;
    mobile?: string;
    name?: string;
};
/** @returns {StatuesRequest} */
declare function StatuesRequest(): StatuesRequest;
type StatuesRequest = {
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
    status?: string;
};
/** @returns {StatusesBodyResponse} */
declare function StatusesBodyResponse(): StatusesBodyResponse;
type StatusesBodyResponse = {
    shipments?: any[];
};
/** @returns {TimeStampData} */
declare function TimeStampData(): TimeStampData;
type TimeStampData = {
    max?: string;
    min?: string;
};
/** @returns {Track} */
declare function Track(): Track;
type Track = {
    account_name?: string;
    awb?: string;
    last_location_recieved_at?: string;
    reason?: string;
    shipment_type?: string;
    status?: string;
    updated_at?: string;
    updated_time?: string;
};
/** @returns {TrackingDetails} */
declare function TrackingDetails(): TrackingDetails;
type TrackingDetails = {
    is_current?: boolean;
    is_passed?: boolean;
    status?: string;
    time?: string;
    tracking_details?: NestedTrackingDetails[];
    value?: string;
};
/** @returns {UpdateShipmentStatusRequest} */
declare function UpdateShipmentStatusRequest(): UpdateShipmentStatusRequest;
type UpdateShipmentStatusRequest = {
    force_transition?: boolean;
    lock_after_transition?: boolean;
    statuses?: StatuesRequest[];
    task?: boolean;
    unlock_before_transition?: boolean;
};
/** @returns {UserInfo} */
declare function UserInfo(): UserInfo;
type UserInfo = {
    email?: string;
    first_name?: string;
    gender?: string;
    last_name?: string;
    mobile?: string;
    name?: string;
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
