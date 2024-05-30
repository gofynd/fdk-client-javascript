export = BillingPlatformModel;
/**
 * @typedef BadRequest
 * @property {string} [message] - Failure message.
 */
/**
 * @typedef ResourceNotFound
 * @property {string} [message] - Resource not found with {id}
 */
/**
 * @typedef InternalServerError
 * @property {string} [message] - Internal server Server error
 * @property {string} [code] - Error code
 */
/**
 * @typedef CheckValidityResponse
 * @property {boolean} [is_valid]
 * @property {number} [discount_amount]
 */
/**
 * @typedef PlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */
/**
 * @typedef Plan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef SubscriptionTrialPeriod
 * @property {string} [start_date]
 * @property {string} [end_date]
 */
/**
 * @typedef EntityChargePrice
 * @property {number} amount - Amount for price. Minimum value 1
 * @property {string} currency_code
 */
/**
 * @typedef EntityChargeRecurring
 * @property {string} interval
 */
/**
 * @typedef ChargeLineItem
 * @property {string} name
 * @property {string} term
 * @property {string} pricing_type
 * @property {EntityChargePrice} price
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount]
 * @property {number} [trial_days]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */
/**
 * @typedef CreateSubscriptionCharge
 * @property {string} name
 * @property {number} [trial_days]
 * @property {ChargeLineItem[]} line_items
 * @property {boolean} [is_test]
 * @property {string} return_url
 */
/**
 * @typedef OneTimeChargeItem
 * @property {string} name
 * @property {string} [term]
 * @property {string} pricing_type
 * @property {EntityChargePrice} price
 * @property {number} [capped_amount]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */
/**
 * @typedef CreateOneTimeCharge
 * @property {string} name
 * @property {OneTimeChargeItem} charge
 * @property {boolean} [is_test]
 * @property {string} return_url
 */
/**
 * @typedef CurrentPeriod
 * @property {string} [start_date]
 * @property {string} [end_date]
 */
/**
 * @typedef SubscriptionCharge
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [term] - Brief description for a charge
 * @property {string} [pricing_type]
 * @property {EntityChargePrice} [price]
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {string} [billing_date]
 * @property {CurrentPeriod} [current_period]
 * @property {string} [status]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */
/**
 * @typedef EntitySubscription
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [status]
 * @property {number} [company_id]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {number} [trial_days]
 * @property {SubscriptionTrialPeriod} [trial_period]
 * @property {Object} [metadata]
 * @property {SubscriptionCharge[]} [line_items]
 */
/**
 * @typedef OneTimeChargeEntity
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [status]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {Object} [metadata]
 * @property {string} [return_url]
 * @property {boolean} [is_test]
 * @property {string} [pricing_type]
 * @property {string} [subscriber_id]
 * @property {string} [entity_type]
 * @property {string} [entity_id]
 * @property {Object} [meta]
 * @property {EntityChargePrice} [price]
 */
/**
 * @typedef CreateOneTimeChargeResponse
 * @property {OneTimeChargeEntity} [charge]
 * @property {string} [confirm_url]
 */
/**
 * @typedef CreateSubscriptionResponse
 * @property {EntitySubscription} [subscription]
 * @property {string} [confirm_url]
 */
/**
 * @typedef InvoiceDetailsPeriod
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef InvoiceDetailsClient
 * @property {string[]} [address_lines]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [phone]
 */
/**
 * @typedef InvoiceDetailsStatusTrail
 * @property {string} [_id]
 * @property {string} [value]
 * @property {string} [timestamp]
 */
/**
 * @typedef InvoicePaymentMethod
 * @property {string} [pg_payment_method_id]
 */
/**
 * @typedef InvoiceDetails
 * @property {InvoiceDetailsPeriod} [period]
 * @property {InvoiceDetailsClient} [client]
 * @property {boolean} [auto_advance]
 * @property {string} [currency]
 * @property {boolean} [paid]
 * @property {number} [attemp]
 * @property {string} [_id]
 * @property {string} [collection_method]
 * @property {string} [subscriber_id]
 * @property {string} [invoice_url]
 * @property {string} [number]
 * @property {Object} [pg_data]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {string} [current_status]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {string} [subscription]
 * @property {string} [next_action_time]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [hash_identifier]
 * @property {InvoicePaymentMethod} [payment_method]
 */
/**
 * @typedef InvoiceItemsPlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */
/**
 * @typedef InvoiceItemsPlan
 * @property {InvoiceItemsPlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef InvoiceItemsPeriod
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef InvoiceItems
 * @property {string} [_id]
 * @property {string} [currency]
 * @property {InvoiceItemsPlan} [plan]
 * @property {string} [name]
 * @property {number} [quantity]
 * @property {string} [description]
 * @property {InvoiceItemsPeriod} [period]
 * @property {number} [unit_amount]
 * @property {number} [amount]
 * @property {string} [type]
 * @property {string} [invoice_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef Invoice
 * @property {InvoiceDetails} [invoice]
 * @property {InvoiceItems[]} [invoice_items]
 */
/**
 * @typedef InvoicesDataClient
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string[]} [address_lines]
 */
/**
 * @typedef InvoicesDataPeriod
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef InvoicesDataPaymentMethod
 * @property {string} [pg_payment_method_id]
 */
/**
 * @typedef InvoicesData
 * @property {string} [_id]
 * @property {InvoicesDataClient} [client]
 * @property {boolean} [auto_advance]
 * @property {string} [currency]
 * @property {boolean} [paid]
 * @property {number} [attemp]
 * @property {string} [collection_method]
 * @property {string} [subscriber_id]
 * @property {string} [invoice_url]
 * @property {string} [number]
 * @property {Object} [pg_data]
 * @property {InvoicesDataPeriod} [period]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {string} [current_status]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {string} [subscription]
 * @property {string} [next_action_time]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [hash_identifier]
 * @property {InvoicesDataPaymentMethod} [payment_method]
 * @property {InvoiceItems[]} [invoice_items]
 */
/**
 * @typedef Invoices
 * @property {InvoicesData[]} [data]
 * @property {number} [start]
 * @property {number} [end]
 * @property {number} [limit]
 * @property {number} [page]
 * @property {number} [total]
 */
/**
 * @typedef Phone
 * @property {string} [phone_number]
 * @property {string} [phone_country_code]
 */
/**
 * @typedef SubscriptionBillingAddress
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [line1]
 * @property {string} [line2]
 * @property {string} [postal_code]
 */
/**
 * @typedef SubscriptionCustomer
 * @property {Phone} [phone]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [_id]
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {Object} [data]
 */
/**
 * @typedef SubscriptionCustomerCreate
 * @property {Phone} [phone]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [email]
 */
/**
 * @typedef SubscriptionCurrentPeriod
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef SubscriptionPauseCollection
 * @property {string} [behavior]
 * @property {string} [resume_at]
 */
/**
 * @typedef SubscriptionTrial
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef SubscriptionInvoiceSettings
 * @property {boolean} [generation]
 * @property {boolean} [charging]
 */
/**
 * @typedef Subscription
 * @property {SubscriptionCurrentPeriod} [current_period]
 * @property {SubscriptionPauseCollection} [pause_collection]
 * @property {SubscriptionTrial} [trial]
 * @property {SubscriptionInvoiceSettings} [invoice_settings]
 * @property {boolean} [is_active]
 * @property {boolean} [cancel_at_period_end]
 * @property {string} [_id]
 * @property {string} [subscriber_id]
 * @property {string} [plan_id]
 * @property {string} [product_suite_id]
 * @property {Plan} [plan_data]
 * @property {string} [current_status]
 * @property {string} [collection_method]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [latest_invoice]
 * @property {string} [channel_type]
 */
/**
 * @typedef SubscriptionStatus
 * @property {boolean} [is_enabled]
 * @property {Subscription} [subscription]
 * @property {InvoicesData} [latest_invoice]
 * @property {Plan} [next_plan]
 * @property {Subscription[]} [current_subscriptions]
 * @property {string} [mandate_amount]
 */
/**
 * @typedef SubscriptionLimitApplication
 * @property {boolean} [enabled]
 * @property {number} [hard_limit]
 * @property {number} [soft_limit]
 */
/**
 * @typedef SubscriptionLimitMarketplace
 * @property {boolean} [enabled]
 */
/**
 * @typedef SubscriptionLimitOtherPlatform
 * @property {boolean} [enabled]
 */
/**
 * @typedef SubscriptionLimitTeam
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimitProducts
 * @property {boolean} [bulk]
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimitExtensions
 * @property {boolean} [enabled]
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimitIntegrations
 * @property {boolean} [enabled]
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimit
 * @property {SubscriptionLimitApplication} [application]
 * @property {SubscriptionLimitMarketplace} [marketplace]
 * @property {SubscriptionLimitOtherPlatform} [other_platform]
 * @property {SubscriptionLimitTeam} [team]
 * @property {SubscriptionLimitProducts} [products]
 * @property {SubscriptionLimitExtensions} [extensions]
 * @property {SubscriptionLimitIntegrations} [integrations]
 * @property {boolean} [is_trial_plan]
 */
/**
 * @typedef SubscriptionActivateReq
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [product_suite]
 * @property {string} [plan_id]
 * @property {string} [payment_method]
 */
/**
 * @typedef SubscriptionActivateRes
 * @property {boolean} [success]
 * @property {Subscription} [data]
 */
/**
 * @typedef CancelSubscriptionReq
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [product_suite]
 * @property {string} [subscription_id]
 */
/**
 * @typedef CancelSubscriptionRes
 * @property {boolean} [success]
 * @property {Subscription} [data]
 */
/**
 * @typedef PlanStatusUpdateReq
 * @property {string} [plan_id]
 * @property {string} [reason]
 * @property {string} [seller_status]
 */
/**
 * @typedef SunscribePlan
 * @property {string} [entity_type]
 * @property {string} [collection_type]
 * @property {string} [plan_id]
 * @property {string} [callback_url]
 * @property {Meta} [meta]
 */
/**
 * @typedef Meta
 * @property {boolean} [subscribe]
 * @property {boolean} [is_custom_plan]
 * @property {boolean} [is_plan_upgrade]
 */
/**
 * @typedef SubscribePlanRes
 * @property {string} [redirect_url]
 * @property {string} [transaction_id]
 * @property {string} [current_status]
 * @property {Meta} [meta]
 */
declare class BillingPlatformModel {
}
declare namespace BillingPlatformModel {
    export { BadRequest, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, PlanStatusUpdateReq, SunscribePlan, Meta, SubscribePlanRes };
}
/** @returns {BadRequest} */
declare function BadRequest(): BadRequest;
type BadRequest = {
    /**
     * - Failure message.
     */
    message?: string;
};
/** @returns {ResourceNotFound} */
declare function ResourceNotFound(): ResourceNotFound;
type ResourceNotFound = {
    /**
     * - Resource not found with {id}
     */
    message?: string;
};
/** @returns {InternalServerError} */
declare function InternalServerError(): InternalServerError;
type InternalServerError = {
    /**
     * - Internal server Server error
     */
    message?: string;
    /**
     * - Error code
     */
    code?: string;
};
/** @returns {CheckValidityResponse} */
declare function CheckValidityResponse(): CheckValidityResponse;
type CheckValidityResponse = {
    is_valid?: boolean;
    discount_amount?: number;
};
/** @returns {PlanRecurring} */
declare function PlanRecurring(): PlanRecurring;
type PlanRecurring = {
    interval?: string;
    interval_count?: number;
};
/** @returns {Plan} */
declare function Plan(): Plan;
type Plan = {
    recurring?: PlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: string[];
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: string[];
    tags?: string[];
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
};
/** @returns {SubscriptionTrialPeriod} */
declare function SubscriptionTrialPeriod(): SubscriptionTrialPeriod;
type SubscriptionTrialPeriod = {
    start_date?: string;
    end_date?: string;
};
/** @returns {EntityChargePrice} */
declare function EntityChargePrice(): EntityChargePrice;
type EntityChargePrice = {
    /**
     * - Amount for price. Minimum value 1
     */
    amount: number;
    currency_code: string;
};
/** @returns {EntityChargeRecurring} */
declare function EntityChargeRecurring(): EntityChargeRecurring;
type EntityChargeRecurring = {
    interval: string;
};
/** @returns {ChargeLineItem} */
declare function ChargeLineItem(): ChargeLineItem;
type ChargeLineItem = {
    name: string;
    term: string;
    pricing_type: string;
    price: EntityChargePrice;
    recurring?: EntityChargeRecurring;
    capped_amount?: number;
    trial_days?: number;
    is_test?: boolean;
    metadata?: any;
};
/** @returns {CreateSubscriptionCharge} */
declare function CreateSubscriptionCharge(): CreateSubscriptionCharge;
type CreateSubscriptionCharge = {
    name: string;
    trial_days?: number;
    line_items: ChargeLineItem[];
    is_test?: boolean;
    return_url: string;
};
/** @returns {OneTimeChargeItem} */
declare function OneTimeChargeItem(): OneTimeChargeItem;
type OneTimeChargeItem = {
    name: string;
    term?: string;
    pricing_type: string;
    price: EntityChargePrice;
    capped_amount?: number;
    is_test?: boolean;
    metadata?: any;
};
/** @returns {CreateOneTimeCharge} */
declare function CreateOneTimeCharge(): CreateOneTimeCharge;
type CreateOneTimeCharge = {
    name: string;
    charge: OneTimeChargeItem;
    is_test?: boolean;
    return_url: string;
};
/** @returns {CurrentPeriod} */
declare function CurrentPeriod(): CurrentPeriod;
type CurrentPeriod = {
    start_date?: string;
    end_date?: string;
};
/** @returns {SubscriptionCharge} */
declare function SubscriptionCharge(): SubscriptionCharge;
type SubscriptionCharge = {
    _id?: string;
    name?: string;
    /**
     * - Brief description for a charge
     */
    term?: string;
    pricing_type?: string;
    price?: EntityChargePrice;
    recurring?: EntityChargeRecurring;
    capped_amount?: number;
    activated_on?: string;
    cancelled_on?: string;
    billing_date?: string;
    current_period?: CurrentPeriod;
    status?: string;
    is_test?: boolean;
    metadata?: any;
};
/** @returns {EntitySubscription} */
declare function EntitySubscription(): EntitySubscription;
type EntitySubscription = {
    _id?: string;
    name?: string;
    status?: string;
    company_id?: number;
    activated_on?: string;
    cancelled_on?: string;
    trial_days?: number;
    trial_period?: SubscriptionTrialPeriod;
    metadata?: any;
    line_items?: SubscriptionCharge[];
};
/** @returns {OneTimeChargeEntity} */
declare function OneTimeChargeEntity(): OneTimeChargeEntity;
type OneTimeChargeEntity = {
    _id?: string;
    name?: string;
    status?: string;
    activated_on?: string;
    cancelled_on?: string;
    metadata?: any;
    return_url?: string;
    is_test?: boolean;
    pricing_type?: string;
    subscriber_id?: string;
    entity_type?: string;
    entity_id?: string;
    meta?: any;
    price?: EntityChargePrice;
};
/** @returns {CreateOneTimeChargeResponse} */
declare function CreateOneTimeChargeResponse(): CreateOneTimeChargeResponse;
type CreateOneTimeChargeResponse = {
    charge?: OneTimeChargeEntity;
    confirm_url?: string;
};
/** @returns {CreateSubscriptionResponse} */
declare function CreateSubscriptionResponse(): CreateSubscriptionResponse;
type CreateSubscriptionResponse = {
    subscription?: EntitySubscription;
    confirm_url?: string;
};
/** @returns {InvoiceDetailsPeriod} */
declare function InvoiceDetailsPeriod(): InvoiceDetailsPeriod;
type InvoiceDetailsPeriod = {
    start?: string;
    end?: string;
};
/** @returns {InvoiceDetailsClient} */
declare function InvoiceDetailsClient(): InvoiceDetailsClient;
type InvoiceDetailsClient = {
    address_lines?: string[];
    name?: string;
    email?: string;
    phone?: string;
};
/** @returns {InvoiceDetailsStatusTrail} */
declare function InvoiceDetailsStatusTrail(): InvoiceDetailsStatusTrail;
type InvoiceDetailsStatusTrail = {
    _id?: string;
    value?: string;
    timestamp?: string;
};
/** @returns {InvoicePaymentMethod} */
declare function InvoicePaymentMethod(): InvoicePaymentMethod;
type InvoicePaymentMethod = {
    pg_payment_method_id?: string;
};
/** @returns {InvoiceDetails} */
declare function InvoiceDetails(): InvoiceDetails;
type InvoiceDetails = {
    period?: InvoiceDetailsPeriod;
    client?: InvoiceDetailsClient;
    auto_advance?: boolean;
    currency?: string;
    paid?: boolean;
    attemp?: number;
    _id?: string;
    collection_method?: string;
    subscriber_id?: string;
    invoice_url?: string;
    number?: string;
    pg_data?: any;
    receipt_number?: string;
    statement_descriptor?: string;
    current_status?: string;
    status_trail?: InvoiceDetailsStatusTrail[];
    subtotal?: number;
    total?: number;
    subscription?: string;
    next_action_time?: string;
    created_at?: string;
    modified_at?: string;
    hash_identifier?: string;
    payment_method?: InvoicePaymentMethod;
};
/** @returns {InvoiceItemsPlanRecurring} */
declare function InvoiceItemsPlanRecurring(): InvoiceItemsPlanRecurring;
type InvoiceItemsPlanRecurring = {
    interval?: string;
    interval_count?: number;
};
/** @returns {InvoiceItemsPlan} */
declare function InvoiceItemsPlan(): InvoiceItemsPlan;
type InvoiceItemsPlan = {
    recurring?: InvoiceItemsPlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: string[];
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: string[];
    tags?: string[];
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
};
/** @returns {InvoiceItemsPeriod} */
declare function InvoiceItemsPeriod(): InvoiceItemsPeriod;
type InvoiceItemsPeriod = {
    start?: string;
    end?: string;
};
/** @returns {InvoiceItems} */
declare function InvoiceItems(): InvoiceItems;
type InvoiceItems = {
    _id?: string;
    currency?: string;
    plan?: InvoiceItemsPlan;
    name?: string;
    quantity?: number;
    description?: string;
    period?: InvoiceItemsPeriod;
    unit_amount?: number;
    amount?: number;
    type?: string;
    invoice_id?: string;
    created_at?: string;
    modified_at?: string;
};
/** @returns {Invoice} */
declare function Invoice(): Invoice;
type Invoice = {
    invoice?: InvoiceDetails;
    invoice_items?: InvoiceItems[];
};
/** @returns {InvoicesDataClient} */
declare function InvoicesDataClient(): InvoicesDataClient;
type InvoicesDataClient = {
    name?: string;
    email?: string;
    phone?: string;
    address_lines?: string[];
};
/** @returns {InvoicesDataPeriod} */
declare function InvoicesDataPeriod(): InvoicesDataPeriod;
type InvoicesDataPeriod = {
    start?: string;
    end?: string;
};
/** @returns {InvoicesDataPaymentMethod} */
declare function InvoicesDataPaymentMethod(): InvoicesDataPaymentMethod;
type InvoicesDataPaymentMethod = {
    pg_payment_method_id?: string;
};
/** @returns {InvoicesData} */
declare function InvoicesData(): InvoicesData;
type InvoicesData = {
    _id?: string;
    client?: InvoicesDataClient;
    auto_advance?: boolean;
    currency?: string;
    paid?: boolean;
    attemp?: number;
    collection_method?: string;
    subscriber_id?: string;
    invoice_url?: string;
    number?: string;
    pg_data?: any;
    period?: InvoicesDataPeriod;
    receipt_number?: string;
    statement_descriptor?: string;
    current_status?: string;
    status_trail?: InvoiceDetailsStatusTrail[];
    subtotal?: number;
    total?: number;
    subscription?: string;
    next_action_time?: string;
    created_at?: string;
    modified_at?: string;
    hash_identifier?: string;
    payment_method?: InvoicesDataPaymentMethod;
    invoice_items?: InvoiceItems[];
};
/** @returns {Invoices} */
declare function Invoices(): Invoices;
type Invoices = {
    data?: InvoicesData[];
    start?: number;
    end?: number;
    limit?: number;
    page?: number;
    total?: number;
};
/** @returns {Phone} */
declare function Phone(): Phone;
type Phone = {
    phone_number?: string;
    phone_country_code?: string;
};
/** @returns {SubscriptionBillingAddress} */
declare function SubscriptionBillingAddress(): SubscriptionBillingAddress;
type SubscriptionBillingAddress = {
    country?: string;
    state?: string;
    city?: string;
    line1?: string;
    line2?: string;
    postal_code?: string;
};
/** @returns {SubscriptionCustomer} */
declare function SubscriptionCustomer(): SubscriptionCustomer;
type SubscriptionCustomer = {
    phone?: Phone;
    billing_address?: SubscriptionBillingAddress;
    _id?: string;
    unique_id?: string;
    type?: string;
    name?: string;
    email?: string;
    created_at?: string;
    modified_at?: string;
    data?: any;
};
/** @returns {SubscriptionCustomerCreate} */
declare function SubscriptionCustomerCreate(): SubscriptionCustomerCreate;
type SubscriptionCustomerCreate = {
    phone?: Phone;
    billing_address?: SubscriptionBillingAddress;
    unique_id?: string;
    type?: string;
    name?: string;
    email?: string;
};
/** @returns {SubscriptionCurrentPeriod} */
declare function SubscriptionCurrentPeriod(): SubscriptionCurrentPeriod;
type SubscriptionCurrentPeriod = {
    start?: string;
    end?: string;
};
/** @returns {SubscriptionPauseCollection} */
declare function SubscriptionPauseCollection(): SubscriptionPauseCollection;
type SubscriptionPauseCollection = {
    behavior?: string;
    resume_at?: string;
};
/** @returns {SubscriptionTrial} */
declare function SubscriptionTrial(): SubscriptionTrial;
type SubscriptionTrial = {
    start?: string;
    end?: string;
};
/** @returns {SubscriptionInvoiceSettings} */
declare function SubscriptionInvoiceSettings(): SubscriptionInvoiceSettings;
type SubscriptionInvoiceSettings = {
    generation?: boolean;
    charging?: boolean;
};
/** @returns {Subscription} */
declare function Subscription(): Subscription;
type Subscription = {
    current_period?: SubscriptionCurrentPeriod;
    pause_collection?: SubscriptionPauseCollection;
    trial?: SubscriptionTrial;
    invoice_settings?: SubscriptionInvoiceSettings;
    is_active?: boolean;
    cancel_at_period_end?: boolean;
    _id?: string;
    subscriber_id?: string;
    plan_id?: string;
    product_suite_id?: string;
    plan_data?: Plan;
    current_status?: string;
    collection_method?: string;
    created_at?: string;
    modified_at?: string;
    latest_invoice?: string;
    channel_type?: string;
};
/** @returns {SubscriptionStatus} */
declare function SubscriptionStatus(): SubscriptionStatus;
type SubscriptionStatus = {
    is_enabled?: boolean;
    subscription?: Subscription;
    latest_invoice?: InvoicesData;
    next_plan?: Plan;
    current_subscriptions?: Subscription[];
    mandate_amount?: string;
};
/** @returns {SubscriptionLimitApplication} */
declare function SubscriptionLimitApplication(): SubscriptionLimitApplication;
type SubscriptionLimitApplication = {
    enabled?: boolean;
    hard_limit?: number;
    soft_limit?: number;
};
/** @returns {SubscriptionLimitMarketplace} */
declare function SubscriptionLimitMarketplace(): SubscriptionLimitMarketplace;
type SubscriptionLimitMarketplace = {
    enabled?: boolean;
};
/** @returns {SubscriptionLimitOtherPlatform} */
declare function SubscriptionLimitOtherPlatform(): SubscriptionLimitOtherPlatform;
type SubscriptionLimitOtherPlatform = {
    enabled?: boolean;
};
/** @returns {SubscriptionLimitTeam} */
declare function SubscriptionLimitTeam(): SubscriptionLimitTeam;
type SubscriptionLimitTeam = {
    limit?: number;
};
/** @returns {SubscriptionLimitProducts} */
declare function SubscriptionLimitProducts(): SubscriptionLimitProducts;
type SubscriptionLimitProducts = {
    bulk?: boolean;
    limit?: number;
};
/** @returns {SubscriptionLimitExtensions} */
declare function SubscriptionLimitExtensions(): SubscriptionLimitExtensions;
type SubscriptionLimitExtensions = {
    enabled?: boolean;
    limit?: number;
};
/** @returns {SubscriptionLimitIntegrations} */
declare function SubscriptionLimitIntegrations(): SubscriptionLimitIntegrations;
type SubscriptionLimitIntegrations = {
    enabled?: boolean;
    limit?: number;
};
/** @returns {SubscriptionLimit} */
declare function SubscriptionLimit(): SubscriptionLimit;
type SubscriptionLimit = {
    application?: SubscriptionLimitApplication;
    marketplace?: SubscriptionLimitMarketplace;
    other_platform?: SubscriptionLimitOtherPlatform;
    team?: SubscriptionLimitTeam;
    products?: SubscriptionLimitProducts;
    extensions?: SubscriptionLimitExtensions;
    integrations?: SubscriptionLimitIntegrations;
    is_trial_plan?: boolean;
};
/** @returns {SubscriptionActivateReq} */
declare function SubscriptionActivateReq(): SubscriptionActivateReq;
type SubscriptionActivateReq = {
    unique_id?: string;
    type?: string;
    product_suite?: string;
    plan_id?: string;
    payment_method?: string;
};
/** @returns {SubscriptionActivateRes} */
declare function SubscriptionActivateRes(): SubscriptionActivateRes;
type SubscriptionActivateRes = {
    success?: boolean;
    data?: Subscription;
};
/** @returns {CancelSubscriptionReq} */
declare function CancelSubscriptionReq(): CancelSubscriptionReq;
type CancelSubscriptionReq = {
    unique_id?: string;
    type?: string;
    product_suite?: string;
    subscription_id?: string;
};
/** @returns {CancelSubscriptionRes} */
declare function CancelSubscriptionRes(): CancelSubscriptionRes;
type CancelSubscriptionRes = {
    success?: boolean;
    data?: Subscription;
};
/** @returns {PlanStatusUpdateReq} */
declare function PlanStatusUpdateReq(): PlanStatusUpdateReq;
type PlanStatusUpdateReq = {
    plan_id?: string;
    reason?: string;
    seller_status?: string;
};
/** @returns {SunscribePlan} */
declare function SunscribePlan(): SunscribePlan;
type SunscribePlan = {
    entity_type?: string;
    collection_type?: string;
    plan_id?: string;
    callback_url?: string;
    meta?: Meta;
};
/** @returns {Meta} */
declare function Meta(): Meta;
type Meta = {
    subscribe?: boolean;
    is_custom_plan?: boolean;
    is_plan_upgrade?: boolean;
};
/** @returns {SubscribePlanRes} */
declare function SubscribePlanRes(): SubscribePlanRes;
type SubscribePlanRes = {
    redirect_url?: string;
    transaction_id?: string;
    current_status?: string;
    meta?: Meta;
};
