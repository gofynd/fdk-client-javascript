export = BillingPlatformModel;
/**
 * @typedef BadRequest
 * @property {string} [message] - Failure message.
 */
/**
 * @typedef CancelSubscriptionReq
 * @property {string} [product_suite]
 * @property {string} [subscription_id]
 * @property {string} [type]
 * @property {string} [unique_id]
 */
/**
 * @typedef CancelSubscriptionRes
 * @property {Subscription} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef ChargeLineItem
 * @property {number} [capped_amount]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 * @property {string} name
 * @property {EntityChargePrice} price
 * @property {string} pricing_type
 * @property {EntityChargeRecurring} [recurring]
 * @property {string} term
 * @property {number} [trial_days]
 */
/**
 * @typedef CheckValidityResponse
 * @property {number} [discount_amount]
 * @property {boolean} [is_valid]
 */
/**
 * @typedef CreateOneTimeCharge
 * @property {OneTimeChargeItem} charge
 * @property {boolean} [is_test]
 * @property {string} name
 * @property {string} return_url
 */
/**
 * @typedef CreateOneTimeChargeResponse
 * @property {OneTimeChargeEntity} [charge]
 * @property {string} [confirm_url]
 */
/**
 * @typedef CreateSubscriptionCharge
 * @property {boolean} [is_test]
 * @property {ChargeLineItem[]} line_items
 * @property {string} name
 * @property {string} return_url
 * @property {number} [trial_days]
 */
/**
 * @typedef CreateSubscriptionResponse
 * @property {string} [confirm_url]
 * @property {EntitySubscription} [subscription]
 */
/**
 * @typedef CurrentPeriod
 * @property {string} [end_date]
 * @property {string} [start_date]
 */
/**
 * @typedef DetailedPlan
 * @property {string} [_id]
 * @property {string[]} [addons]
 * @property {number} [amount]
 * @property {DetailedPlanComponents[]} [components]
 * @property {string} [country]
 * @property {string} [created_at]
 * @property {string} [currency]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [is_trial_plan]
 * @property {boolean} [is_visible]
 * @property {string} [modified_at]
 * @property {string} [name]
 * @property {string} [plan_group]
 * @property {string} [product_suite_id]
 * @property {PlanRecurring} [recurring]
 * @property {string[]} [tag_lines]
 * @property {string[]} [tags]
 * @property {number} [trial_period]
 * @property {string} [type]
 */
/**
 * @typedef DetailedPlanComponents
 * @property {Object} [config]
 * @property {string} [description]
 * @property {string} [display_text]
 * @property {boolean} [enabled]
 * @property {string} [group]
 * @property {string} [icon]
 * @property {Object} [links]
 * @property {string} [name]
 * @property {string} [slug]
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
 * @typedef EntitySubscription
 * @property {string} [_id]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {number} [company_id]
 * @property {SubscriptionCharge[]} [line_items]
 * @property {Object} [metadata]
 * @property {string} [name]
 * @property {string} [status]
 * @property {number} [trial_days]
 * @property {SubscriptionTrialPeriod} [trial_period]
 */
/**
 * @typedef InternalServerError
 * @property {string} [code] - Error code
 * @property {string} [message] - Internal server Server error
 */
/**
 * @typedef Invoice
 * @property {InvoiceDetails} [invoice]
 * @property {InvoiceItems[]} [invoice_items]
 */
/**
 * @typedef InvoiceDetails
 * @property {string} [_id]
 * @property {number} [attemp]
 * @property {boolean} [auto_advance]
 * @property {InvoiceDetailsClient} [client]
 * @property {string} [collection_method]
 * @property {string} [created_at]
 * @property {string} [currency]
 * @property {string} [current_status]
 * @property {string} [hash_identifier]
 * @property {string} [invoice_url]
 * @property {string} [modified_at]
 * @property {string} [next_action_time]
 * @property {string} [number]
 * @property {boolean} [paid]
 * @property {InvoicePaymentMethod} [payment_method]
 * @property {InvoiceDetailsPeriod} [period]
 * @property {Object} [pg_data]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {string} [subscriber_id]
 * @property {string} [subscription]
 * @property {number} [subtotal]
 * @property {number} [total]
 */
/**
 * @typedef InvoiceDetailsClient
 * @property {string[]} [address_lines]
 * @property {string} [email]
 * @property {string} [name]
 * @property {string} [phone]
 */
/**
 * @typedef InvoiceDetailsPaymentMethods
 * @property {InvoiceDetailsPaymentMethodsData} [data]
 * @property {number} [id]
 * @property {boolean} [is_default]
 * @property {string} [pg_payment_method_id]
 * @property {string} [type]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsData
 * @property {string} [brand]
 * @property {InvoiceDetailsPaymentMethodsDataChecks} [checks]
 * @property {string} [country]
 * @property {number} [exp_month]
 * @property {number} [exp_year]
 * @property {string} [fingerprint]
 * @property {string} [funding]
 * @property {string} [generated_from]
 * @property {string} [last4]
 * @property {InvoiceDetailsPaymentMethodsDataNetworks} [networks]
 * @property {InvoiceDetailsPaymentMethodsDataThreeDSecureUsage} [three_d_secure_usage]
 * @property {string} [wallet]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsDataChecks
 * @property {string} [address_line1_check]
 * @property {string} [address_postal_code_check]
 * @property {string} [cvc_check]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsDataNetworks
 * @property {string[]} [available]
 * @property {string} [preferred]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsDataThreeDSecureUsage
 * @property {boolean} [supported]
 */
/**
 * @typedef InvoiceDetailsPeriod
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef InvoiceDetailsStatusTrail
 * @property {string} [_id]
 * @property {string} [timestamp]
 * @property {string} [value]
 */
/**
 * @typedef InvoiceItems
 * @property {string} [_id]
 * @property {number} [amount]
 * @property {string} [created_at]
 * @property {string} [currency]
 * @property {string} [description]
 * @property {string} [invoice_id]
 * @property {string} [modified_at]
 * @property {string} [name]
 * @property {InvoiceItemsPeriod} [period]
 * @property {InvoiceItemsPlan} [plan]
 * @property {number} [quantity]
 * @property {string} [type]
 * @property {number} [unit_amount]
 */
/**
 * @typedef InvoiceItemsPeriod
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef InvoiceItemsPlan
 * @property {string} [_id]
 * @property {string[]} [addons]
 * @property {number} [amount]
 * @property {string} [country]
 * @property {string} [created_at]
 * @property {string} [currency]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [is_trial_plan]
 * @property {boolean} [is_visible]
 * @property {string} [modified_at]
 * @property {string} [name]
 * @property {string} [plan_group]
 * @property {string} [product_suite_id]
 * @property {InvoiceItemsPlanRecurring} [recurring]
 * @property {string[]} [tag_lines]
 * @property {string[]} [tags]
 * @property {number} [trial_period]
 * @property {string} [type]
 */
/**
 * @typedef InvoiceItemsPlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */
/**
 * @typedef InvoicePaymentMethod
 * @property {string} [pg_payment_method_id]
 */
/**
 * @typedef Invoices
 * @property {InvoicesData[]} [data]
 * @property {number} [end]
 * @property {number} [limit]
 * @property {number} [page]
 * @property {number} [start]
 * @property {number} [total]
 */
/**
 * @typedef InvoicesData
 * @property {string} [_id]
 * @property {number} [attemp]
 * @property {boolean} [auto_advance]
 * @property {InvoicesDataClient} [client]
 * @property {string} [collection_method]
 * @property {string} [created_at]
 * @property {string} [currency]
 * @property {string} [current_status]
 * @property {string} [hash_identifier]
 * @property {InvoiceItems[]} [invoice_items]
 * @property {string} [invoice_url]
 * @property {string} [modified_at]
 * @property {string} [next_action_time]
 * @property {string} [number]
 * @property {boolean} [paid]
 * @property {InvoicesDataPaymentMethod} [payment_method]
 * @property {InvoicesDataPeriod} [period]
 * @property {Object} [pg_data]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {string} [subscriber_id]
 * @property {string} [subscription]
 * @property {number} [subtotal]
 * @property {number} [total]
 */
/**
 * @typedef InvoicesDataClient
 * @property {string[]} [address_lines]
 * @property {string} [email]
 * @property {string} [name]
 * @property {string} [phone]
 */
/**
 * @typedef InvoicesDataPaymentMethod
 * @property {string} [pg_payment_method_id]
 */
/**
 * @typedef InvoicesDataPeriod
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef OneTimeChargeEntity
 * @property {string} [_id]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 * @property {boolean} [is_test]
 * @property {Object} [meta]
 * @property {Object} [metadata]
 * @property {string} [name]
 * @property {EntityChargePrice} [price]
 * @property {string} [pricing_type]
 * @property {string} [return_url]
 * @property {string} [status]
 * @property {string} [subscriber_id]
 */
/**
 * @typedef OneTimeChargeItem
 * @property {number} [capped_amount]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 * @property {string} name
 * @property {EntityChargePrice} price
 * @property {string} pricing_type
 * @property {string} [term]
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef Phone
 * @property {string} [phone_country_code]
 * @property {string} [phone_number]
 */
/**
 * @typedef Plan
 * @property {string} [_id]
 * @property {string[]} [addons]
 * @property {number} [amount]
 * @property {string} [country]
 * @property {string} [created_at]
 * @property {string} [currency]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [is_trial_plan]
 * @property {boolean} [is_visible]
 * @property {string} [modified_at]
 * @property {string} [name]
 * @property {string} [plan_group]
 * @property {string} [product_suite_id]
 * @property {PlanRecurring} [recurring]
 * @property {string[]} [tag_lines]
 * @property {string[]} [tags]
 * @property {number} [trial_period]
 * @property {string} [type]
 */
/**
 * @typedef PlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */
/**
 * @typedef ResourceNotFound
 * @property {string} [message] - Resource not found with {id}
 */
/**
 * @typedef Subscription
 * @property {string} [_id]
 * @property {boolean} [cancel_at_period_end]
 * @property {string} [channel_type]
 * @property {string} [collection_method]
 * @property {string} [created_at]
 * @property {SubscriptionCurrentPeriod} [current_period]
 * @property {string} [current_status]
 * @property {SubscriptionInvoiceSettings} [invoice_settings]
 * @property {boolean} [is_active]
 * @property {string} [latest_invoice]
 * @property {string} [modified_at]
 * @property {SubscriptionPauseCollection} [pause_collection]
 * @property {Plan} [plan_data]
 * @property {string} [plan_id]
 * @property {string} [product_suite_id]
 * @property {string} [subscriber_id]
 * @property {SubscriptionTrial} [trial]
 */
/**
 * @typedef SubscriptionActivateReq
 * @property {string} [payment_method]
 * @property {string} [plan_id]
 * @property {string} [product_suite]
 * @property {string} [type]
 * @property {string} [unique_id]
 */
/**
 * @typedef SubscriptionActivateRes
 * @property {Subscription} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef SubscriptionBillingAddress
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [line1]
 * @property {string} [line2]
 * @property {string} [postal_code]
 * @property {string} [state]
 */
/**
 * @typedef SubscriptionCharge
 * @property {string} [_id]
 * @property {string} [activated_on]
 * @property {string} [billing_date]
 * @property {string} [cancelled_on]
 * @property {number} [capped_amount]
 * @property {CurrentPeriod} [current_period]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 * @property {string} [name]
 * @property {EntityChargePrice} [price]
 * @property {string} [pricing_type]
 * @property {EntityChargeRecurring} [recurring]
 * @property {string} [status]
 * @property {string} [term] - Brief description for a charge
 */
/**
 * @typedef SubscriptionCurrentPeriod
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef SubscriptionCustomer
 * @property {string} [_id]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [created_at]
 * @property {Object} [data]
 * @property {string} [email]
 * @property {string} [modified_at]
 * @property {string} [name]
 * @property {Phone} [phone]
 * @property {string} [type]
 * @property {string} [unique_id]
 */
/**
 * @typedef SubscriptionCustomerCreate
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [email]
 * @property {string} [name]
 * @property {Phone} [phone]
 * @property {string} [type]
 * @property {string} [unique_id]
 */
/**
 * @typedef SubscriptionInvoiceSettings
 * @property {boolean} [charging]
 * @property {boolean} [generation]
 */
/**
 * @typedef SubscriptionLimit
 * @property {SubscriptionLimitApplication} [application]
 * @property {SubscriptionLimitExtensions} [extensions]
 * @property {SubscriptionLimitIntegrations} [integrations]
 * @property {boolean} [is_trial_plan]
 * @property {SubscriptionLimitMarketplace} [marketplace]
 * @property {SubscriptionLimitOtherPlatform} [other_platform]
 * @property {SubscriptionLimitProducts} [products]
 * @property {SubscriptionLimitTeam} [team]
 */
/**
 * @typedef SubscriptionLimitApplication
 * @property {boolean} [enabled]
 * @property {number} [hard_limit]
 * @property {number} [soft_limit]
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
 * @typedef SubscriptionLimitMarketplace
 * @property {boolean} [enabled]
 */
/**
 * @typedef SubscriptionLimitOtherPlatform
 * @property {boolean} [enabled]
 */
/**
 * @typedef SubscriptionLimitProducts
 * @property {boolean} [bulk]
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimitTeam
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionPauseCollection
 * @property {string} [behavior]
 * @property {string} [resume_at]
 */
/**
 * @typedef SubscriptionStatus
 * @property {Subscription[]} [current_subscriptions]
 * @property {boolean} [is_enabled]
 * @property {InvoicesData} [latest_invoice]
 * @property {string} [mandate_amount]
 * @property {Plan} [next_plan]
 * @property {Subscription} [subscription]
 */
/**
 * @typedef SubscriptionTrial
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef SubscriptionTrialPeriod
 * @property {string} [end_date]
 * @property {string} [start_date]
 */
/**
 * @typedef UnauthenticatedApplication
 * @property {string} [message] - Failure message.
 */
/**
 * @typedef UnauthenticatedUser
 * @property {string} [message] - Failure message.
 */
declare class BillingPlatformModel {
}
declare namespace BillingPlatformModel {
    export { BadRequest, CancelSubscriptionReq, CancelSubscriptionRes, ChargeLineItem, CheckValidityResponse, CreateOneTimeCharge, CreateOneTimeChargeResponse, CreateSubscriptionCharge, CreateSubscriptionResponse, CurrentPeriod, DetailedPlan, DetailedPlanComponents, EntityChargePrice, EntityChargeRecurring, EntitySubscription, InternalServerError, Invoice, InvoiceDetails, InvoiceDetailsClient, InvoiceDetailsPaymentMethods, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPeriod, InvoiceDetailsStatusTrail, InvoiceItems, InvoiceItemsPeriod, InvoiceItemsPlan, InvoiceItemsPlanRecurring, InvoicePaymentMethod, Invoices, InvoicesData, InvoicesDataClient, InvoicesDataPaymentMethod, InvoicesDataPeriod, OneTimeChargeEntity, OneTimeChargeItem, Page, Phone, Plan, PlanRecurring, ResourceNotFound, Subscription, SubscriptionActivateReq, SubscriptionActivateRes, SubscriptionBillingAddress, SubscriptionCharge, SubscriptionCurrentPeriod, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionInvoiceSettings, SubscriptionLimit, SubscriptionLimitApplication, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitProducts, SubscriptionLimitTeam, SubscriptionPauseCollection, SubscriptionStatus, SubscriptionTrial, SubscriptionTrialPeriod, UnauthenticatedApplication, UnauthenticatedUser };
}
/** @returns {BadRequest} */
declare function BadRequest(): BadRequest;
type BadRequest = {
    /**
     * - Failure message.
     */
    message?: string;
};
/** @returns {CancelSubscriptionReq} */
declare function CancelSubscriptionReq(): CancelSubscriptionReq;
type CancelSubscriptionReq = {
    product_suite?: string;
    subscription_id?: string;
    type?: string;
    unique_id?: string;
};
/** @returns {CancelSubscriptionRes} */
declare function CancelSubscriptionRes(): CancelSubscriptionRes;
type CancelSubscriptionRes = {
    data?: Subscription;
    success?: boolean;
};
/** @returns {ChargeLineItem} */
declare function ChargeLineItem(): ChargeLineItem;
type ChargeLineItem = {
    capped_amount?: number;
    is_test?: boolean;
    metadata?: any;
    name: string;
    price: EntityChargePrice;
    pricing_type: string;
    recurring?: EntityChargeRecurring;
    term: string;
    trial_days?: number;
};
/** @returns {CheckValidityResponse} */
declare function CheckValidityResponse(): CheckValidityResponse;
type CheckValidityResponse = {
    discount_amount?: number;
    is_valid?: boolean;
};
/** @returns {CreateOneTimeCharge} */
declare function CreateOneTimeCharge(): CreateOneTimeCharge;
type CreateOneTimeCharge = {
    charge: OneTimeChargeItem;
    is_test?: boolean;
    name: string;
    return_url: string;
};
/** @returns {CreateOneTimeChargeResponse} */
declare function CreateOneTimeChargeResponse(): CreateOneTimeChargeResponse;
type CreateOneTimeChargeResponse = {
    charge?: OneTimeChargeEntity;
    confirm_url?: string;
};
/** @returns {CreateSubscriptionCharge} */
declare function CreateSubscriptionCharge(): CreateSubscriptionCharge;
type CreateSubscriptionCharge = {
    is_test?: boolean;
    line_items: ChargeLineItem[];
    name: string;
    return_url: string;
    trial_days?: number;
};
/** @returns {CreateSubscriptionResponse} */
declare function CreateSubscriptionResponse(): CreateSubscriptionResponse;
type CreateSubscriptionResponse = {
    confirm_url?: string;
    subscription?: EntitySubscription;
};
/** @returns {CurrentPeriod} */
declare function CurrentPeriod(): CurrentPeriod;
type CurrentPeriod = {
    end_date?: string;
    start_date?: string;
};
/** @returns {DetailedPlan} */
declare function DetailedPlan(): DetailedPlan;
type DetailedPlan = {
    _id?: string;
    addons?: string[];
    amount?: number;
    components?: DetailedPlanComponents[];
    country?: string;
    created_at?: string;
    currency?: string;
    description?: string;
    is_active?: boolean;
    is_trial_plan?: boolean;
    is_visible?: boolean;
    modified_at?: string;
    name?: string;
    plan_group?: string;
    product_suite_id?: string;
    recurring?: PlanRecurring;
    tag_lines?: string[];
    tags?: string[];
    trial_period?: number;
    type?: string;
};
/** @returns {DetailedPlanComponents} */
declare function DetailedPlanComponents(): DetailedPlanComponents;
type DetailedPlanComponents = {
    config?: any;
    description?: string;
    display_text?: string;
    enabled?: boolean;
    group?: string;
    icon?: string;
    links?: any;
    name?: string;
    slug?: string;
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
/** @returns {EntitySubscription} */
declare function EntitySubscription(): EntitySubscription;
type EntitySubscription = {
    _id?: string;
    activated_on?: string;
    cancelled_on?: string;
    company_id?: number;
    line_items?: SubscriptionCharge[];
    metadata?: any;
    name?: string;
    status?: string;
    trial_days?: number;
    trial_period?: SubscriptionTrialPeriod;
};
/** @returns {InternalServerError} */
declare function InternalServerError(): InternalServerError;
type InternalServerError = {
    /**
     * - Error code
     */
    code?: string;
    /**
     * - Internal server Server error
     */
    message?: string;
};
/** @returns {Invoice} */
declare function Invoice(): Invoice;
type Invoice = {
    invoice?: InvoiceDetails;
    invoice_items?: InvoiceItems[];
};
/** @returns {InvoiceDetails} */
declare function InvoiceDetails(): InvoiceDetails;
type InvoiceDetails = {
    _id?: string;
    attemp?: number;
    auto_advance?: boolean;
    client?: InvoiceDetailsClient;
    collection_method?: string;
    created_at?: string;
    currency?: string;
    current_status?: string;
    hash_identifier?: string;
    invoice_url?: string;
    modified_at?: string;
    next_action_time?: string;
    number?: string;
    paid?: boolean;
    payment_method?: InvoicePaymentMethod;
    period?: InvoiceDetailsPeriod;
    pg_data?: any;
    receipt_number?: string;
    statement_descriptor?: string;
    status_trail?: InvoiceDetailsStatusTrail[];
    subscriber_id?: string;
    subscription?: string;
    subtotal?: number;
    total?: number;
};
/** @returns {InvoiceDetailsClient} */
declare function InvoiceDetailsClient(): InvoiceDetailsClient;
type InvoiceDetailsClient = {
    address_lines?: string[];
    email?: string;
    name?: string;
    phone?: string;
};
/** @returns {InvoiceDetailsPaymentMethods} */
declare function InvoiceDetailsPaymentMethods(): InvoiceDetailsPaymentMethods;
type InvoiceDetailsPaymentMethods = {
    data?: InvoiceDetailsPaymentMethodsData;
    id?: number;
    is_default?: boolean;
    pg_payment_method_id?: string;
    type?: string;
};
/** @returns {InvoiceDetailsPaymentMethodsData} */
declare function InvoiceDetailsPaymentMethodsData(): InvoiceDetailsPaymentMethodsData;
type InvoiceDetailsPaymentMethodsData = {
    brand?: string;
    checks?: InvoiceDetailsPaymentMethodsDataChecks;
    country?: string;
    exp_month?: number;
    exp_year?: number;
    fingerprint?: string;
    funding?: string;
    generated_from?: string;
    last4?: string;
    networks?: InvoiceDetailsPaymentMethodsDataNetworks;
    three_d_secure_usage?: InvoiceDetailsPaymentMethodsDataThreeDSecureUsage;
    wallet?: string;
};
/** @returns {InvoiceDetailsPaymentMethodsDataChecks} */
declare function InvoiceDetailsPaymentMethodsDataChecks(): InvoiceDetailsPaymentMethodsDataChecks;
type InvoiceDetailsPaymentMethodsDataChecks = {
    address_line1_check?: string;
    address_postal_code_check?: string;
    cvc_check?: string;
};
/** @returns {InvoiceDetailsPaymentMethodsDataNetworks} */
declare function InvoiceDetailsPaymentMethodsDataNetworks(): InvoiceDetailsPaymentMethodsDataNetworks;
type InvoiceDetailsPaymentMethodsDataNetworks = {
    available?: string[];
    preferred?: string;
};
/** @returns {InvoiceDetailsPaymentMethodsDataThreeDSecureUsage} */
declare function InvoiceDetailsPaymentMethodsDataThreeDSecureUsage(): InvoiceDetailsPaymentMethodsDataThreeDSecureUsage;
type InvoiceDetailsPaymentMethodsDataThreeDSecureUsage = {
    supported?: boolean;
};
/** @returns {InvoiceDetailsPeriod} */
declare function InvoiceDetailsPeriod(): InvoiceDetailsPeriod;
type InvoiceDetailsPeriod = {
    end?: string;
    start?: string;
};
/** @returns {InvoiceDetailsStatusTrail} */
declare function InvoiceDetailsStatusTrail(): InvoiceDetailsStatusTrail;
type InvoiceDetailsStatusTrail = {
    _id?: string;
    timestamp?: string;
    value?: string;
};
/** @returns {InvoiceItems} */
declare function InvoiceItems(): InvoiceItems;
type InvoiceItems = {
    _id?: string;
    amount?: number;
    created_at?: string;
    currency?: string;
    description?: string;
    invoice_id?: string;
    modified_at?: string;
    name?: string;
    period?: InvoiceItemsPeriod;
    plan?: InvoiceItemsPlan;
    quantity?: number;
    type?: string;
    unit_amount?: number;
};
/** @returns {InvoiceItemsPeriod} */
declare function InvoiceItemsPeriod(): InvoiceItemsPeriod;
type InvoiceItemsPeriod = {
    end?: string;
    start?: string;
};
/** @returns {InvoiceItemsPlan} */
declare function InvoiceItemsPlan(): InvoiceItemsPlan;
type InvoiceItemsPlan = {
    _id?: string;
    addons?: string[];
    amount?: number;
    country?: string;
    created_at?: string;
    currency?: string;
    description?: string;
    is_active?: boolean;
    is_trial_plan?: boolean;
    is_visible?: boolean;
    modified_at?: string;
    name?: string;
    plan_group?: string;
    product_suite_id?: string;
    recurring?: InvoiceItemsPlanRecurring;
    tag_lines?: string[];
    tags?: string[];
    trial_period?: number;
    type?: string;
};
/** @returns {InvoiceItemsPlanRecurring} */
declare function InvoiceItemsPlanRecurring(): InvoiceItemsPlanRecurring;
type InvoiceItemsPlanRecurring = {
    interval?: string;
    interval_count?: number;
};
/** @returns {InvoicePaymentMethod} */
declare function InvoicePaymentMethod(): InvoicePaymentMethod;
type InvoicePaymentMethod = {
    pg_payment_method_id?: string;
};
/** @returns {Invoices} */
declare function Invoices(): Invoices;
type Invoices = {
    data?: InvoicesData[];
    end?: number;
    limit?: number;
    page?: number;
    start?: number;
    total?: number;
};
/** @returns {InvoicesData} */
declare function InvoicesData(): InvoicesData;
type InvoicesData = {
    _id?: string;
    attemp?: number;
    auto_advance?: boolean;
    client?: InvoicesDataClient;
    collection_method?: string;
    created_at?: string;
    currency?: string;
    current_status?: string;
    hash_identifier?: string;
    invoice_items?: InvoiceItems[];
    invoice_url?: string;
    modified_at?: string;
    next_action_time?: string;
    number?: string;
    paid?: boolean;
    payment_method?: InvoicesDataPaymentMethod;
    period?: InvoicesDataPeriod;
    pg_data?: any;
    receipt_number?: string;
    statement_descriptor?: string;
    status_trail?: InvoiceDetailsStatusTrail[];
    subscriber_id?: string;
    subscription?: string;
    subtotal?: number;
    total?: number;
};
/** @returns {InvoicesDataClient} */
declare function InvoicesDataClient(): InvoicesDataClient;
type InvoicesDataClient = {
    address_lines?: string[];
    email?: string;
    name?: string;
    phone?: string;
};
/** @returns {InvoicesDataPaymentMethod} */
declare function InvoicesDataPaymentMethod(): InvoicesDataPaymentMethod;
type InvoicesDataPaymentMethod = {
    pg_payment_method_id?: string;
};
/** @returns {InvoicesDataPeriod} */
declare function InvoicesDataPeriod(): InvoicesDataPeriod;
type InvoicesDataPeriod = {
    end?: string;
    start?: string;
};
/** @returns {OneTimeChargeEntity} */
declare function OneTimeChargeEntity(): OneTimeChargeEntity;
type OneTimeChargeEntity = {
    _id?: string;
    activated_on?: string;
    cancelled_on?: string;
    entity_id?: string;
    entity_type?: string;
    is_test?: boolean;
    meta?: any;
    metadata?: any;
    name?: string;
    price?: EntityChargePrice;
    pricing_type?: string;
    return_url?: string;
    status?: string;
    subscriber_id?: string;
};
/** @returns {OneTimeChargeItem} */
declare function OneTimeChargeItem(): OneTimeChargeItem;
type OneTimeChargeItem = {
    capped_amount?: number;
    is_test?: boolean;
    metadata?: any;
    name: string;
    price: EntityChargePrice;
    pricing_type: string;
    term?: string;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size?: number;
    type: string;
};
/** @returns {Phone} */
declare function Phone(): Phone;
type Phone = {
    phone_country_code?: string;
    phone_number?: string;
};
/** @returns {Plan} */
declare function Plan(): Plan;
type Plan = {
    _id?: string;
    addons?: string[];
    amount?: number;
    country?: string;
    created_at?: string;
    currency?: string;
    description?: string;
    is_active?: boolean;
    is_trial_plan?: boolean;
    is_visible?: boolean;
    modified_at?: string;
    name?: string;
    plan_group?: string;
    product_suite_id?: string;
    recurring?: PlanRecurring;
    tag_lines?: string[];
    tags?: string[];
    trial_period?: number;
    type?: string;
};
/** @returns {PlanRecurring} */
declare function PlanRecurring(): PlanRecurring;
type PlanRecurring = {
    interval?: string;
    interval_count?: number;
};
/** @returns {ResourceNotFound} */
declare function ResourceNotFound(): ResourceNotFound;
type ResourceNotFound = {
    /**
     * - Resource not found with {id}
     */
    message?: string;
};
/** @returns {Subscription} */
declare function Subscription(): Subscription;
type Subscription = {
    _id?: string;
    cancel_at_period_end?: boolean;
    channel_type?: string;
    collection_method?: string;
    created_at?: string;
    current_period?: SubscriptionCurrentPeriod;
    current_status?: string;
    invoice_settings?: SubscriptionInvoiceSettings;
    is_active?: boolean;
    latest_invoice?: string;
    modified_at?: string;
    pause_collection?: SubscriptionPauseCollection;
    plan_data?: Plan;
    plan_id?: string;
    product_suite_id?: string;
    subscriber_id?: string;
    trial?: SubscriptionTrial;
};
/** @returns {SubscriptionActivateReq} */
declare function SubscriptionActivateReq(): SubscriptionActivateReq;
type SubscriptionActivateReq = {
    payment_method?: string;
    plan_id?: string;
    product_suite?: string;
    type?: string;
    unique_id?: string;
};
/** @returns {SubscriptionActivateRes} */
declare function SubscriptionActivateRes(): SubscriptionActivateRes;
type SubscriptionActivateRes = {
    data?: Subscription;
    success?: boolean;
};
/** @returns {SubscriptionBillingAddress} */
declare function SubscriptionBillingAddress(): SubscriptionBillingAddress;
type SubscriptionBillingAddress = {
    city?: string;
    country?: string;
    line1?: string;
    line2?: string;
    postal_code?: string;
    state?: string;
};
/** @returns {SubscriptionCharge} */
declare function SubscriptionCharge(): SubscriptionCharge;
type SubscriptionCharge = {
    _id?: string;
    activated_on?: string;
    billing_date?: string;
    cancelled_on?: string;
    capped_amount?: number;
    current_period?: CurrentPeriod;
    is_test?: boolean;
    metadata?: any;
    name?: string;
    price?: EntityChargePrice;
    pricing_type?: string;
    recurring?: EntityChargeRecurring;
    status?: string;
    /**
     * - Brief description for a charge
     */
    term?: string;
};
/** @returns {SubscriptionCurrentPeriod} */
declare function SubscriptionCurrentPeriod(): SubscriptionCurrentPeriod;
type SubscriptionCurrentPeriod = {
    end?: string;
    start?: string;
};
/** @returns {SubscriptionCustomer} */
declare function SubscriptionCustomer(): SubscriptionCustomer;
type SubscriptionCustomer = {
    _id?: string;
    billing_address?: SubscriptionBillingAddress;
    created_at?: string;
    data?: any;
    email?: string;
    modified_at?: string;
    name?: string;
    phone?: Phone;
    type?: string;
    unique_id?: string;
};
/** @returns {SubscriptionCustomerCreate} */
declare function SubscriptionCustomerCreate(): SubscriptionCustomerCreate;
type SubscriptionCustomerCreate = {
    billing_address?: SubscriptionBillingAddress;
    email?: string;
    name?: string;
    phone?: Phone;
    type?: string;
    unique_id?: string;
};
/** @returns {SubscriptionInvoiceSettings} */
declare function SubscriptionInvoiceSettings(): SubscriptionInvoiceSettings;
type SubscriptionInvoiceSettings = {
    charging?: boolean;
    generation?: boolean;
};
/** @returns {SubscriptionLimit} */
declare function SubscriptionLimit(): SubscriptionLimit;
type SubscriptionLimit = {
    application?: SubscriptionLimitApplication;
    extensions?: SubscriptionLimitExtensions;
    integrations?: SubscriptionLimitIntegrations;
    is_trial_plan?: boolean;
    marketplace?: SubscriptionLimitMarketplace;
    other_platform?: SubscriptionLimitOtherPlatform;
    products?: SubscriptionLimitProducts;
    team?: SubscriptionLimitTeam;
};
/** @returns {SubscriptionLimitApplication} */
declare function SubscriptionLimitApplication(): SubscriptionLimitApplication;
type SubscriptionLimitApplication = {
    enabled?: boolean;
    hard_limit?: number;
    soft_limit?: number;
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
/** @returns {SubscriptionLimitProducts} */
declare function SubscriptionLimitProducts(): SubscriptionLimitProducts;
type SubscriptionLimitProducts = {
    bulk?: boolean;
    limit?: number;
};
/** @returns {SubscriptionLimitTeam} */
declare function SubscriptionLimitTeam(): SubscriptionLimitTeam;
type SubscriptionLimitTeam = {
    limit?: number;
};
/** @returns {SubscriptionPauseCollection} */
declare function SubscriptionPauseCollection(): SubscriptionPauseCollection;
type SubscriptionPauseCollection = {
    behavior?: string;
    resume_at?: string;
};
/** @returns {SubscriptionStatus} */
declare function SubscriptionStatus(): SubscriptionStatus;
type SubscriptionStatus = {
    current_subscriptions?: Subscription[];
    is_enabled?: boolean;
    latest_invoice?: InvoicesData;
    mandate_amount?: string;
    next_plan?: Plan;
    subscription?: Subscription;
};
/** @returns {SubscriptionTrial} */
declare function SubscriptionTrial(): SubscriptionTrial;
type SubscriptionTrial = {
    end?: string;
    start?: string;
};
/** @returns {SubscriptionTrialPeriod} */
declare function SubscriptionTrialPeriod(): SubscriptionTrialPeriod;
type SubscriptionTrialPeriod = {
    end_date?: string;
    start_date?: string;
};
/** @returns {UnauthenticatedApplication} */
declare function UnauthenticatedApplication(): UnauthenticatedApplication;
type UnauthenticatedApplication = {
    /**
     * - Failure message.
     */
    message?: string;
};
/** @returns {UnauthenticatedUser} */
declare function UnauthenticatedUser(): UnauthenticatedUser;
type UnauthenticatedUser = {
    /**
     * - Failure message.
     */
    message?: string;
};
