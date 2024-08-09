export = BillingPlatformModel;
/**
 * @typedef SubscriptionChargeRes
 * @property {string} [_id] - Unique identifier for the subscription charge
 * @property {string} [product_suit_id] - ID of the product suit associated with
 *   the charge
 * @property {string} [entity_id] - Unique identifier for the entity
 * @property {string} [entity_type] - Type of entity (e.g., subscription, extension)
 * @property {string} [name] - Name of the subscription charge
 * @property {string} [status] - Current status of the subscription charge
 * @property {number} [trial_days] - Number of trial days provided
 * @property {string} [activated_on] - Date when the charge was activated
 * @property {string} [cancelled_on] - Date when the charge was cancelled
 * @property {boolean} [is_test] - Indicates if the charge is for testing purposes
 * @property {string} [created_at] - Timestamp when the charge was created
 * @property {string} [modified_at] - Timestamp when the charge was last modified
 * @property {string} [company_id] - Company id
 * @property {Object[]} [line_items] - List of line items associated with the charge
 */
/**
 * @typedef ChargeDetails
 * @property {string} [_id] - Unique identifier for the charge.
 * @property {string} [entity_type] - The type of entity associated with the
 *   charge (e.g., 'extension', 'subscription').
 * @property {string} [entity_id] - Unique identifier for the entity associated
 *   with the charge.
 * @property {string} [name] - The name of the charge.
 * @property {string} [term] - Description of the charge term.
 * @property {string} [charge_type] - The type of charge (e.g., 'standalone',
 *   'recurring').
 * @property {string} [pricing_type] - The pricing model for the charge (e.g.,
 *   'one_time', 'recurring').
 * @property {EntityChargePrice} [price]
 * @property {ChargeRecurring} [recurring]
 * @property {string} [status] - Current status of the charge.
 * @property {number} [capped_amount] - Maximum amount that can be charged, if applicable.
 * @property {string} [activated_on] - Date and time when the charge was activated.
 * @property {string} [cancelled_on] - Date and time when the charge was cancelled.
 * @property {string} [billing_date] - Date and time when the charge was billed.
 * @property {SubscriptionTrialPeriod} [current_period]
 * @property {string} [modified_at] - Date and time when the charge details were
 *   last modified.
 * @property {string} [created_at] - Date and time when the charge was created.
 * @property {boolean} [is_test] - Indicates whether the charge is for testing purposes.
 * @property {string} [company_id] - Company id.
 * @property {Object} [meta] - Additional metadata associated with the charge.
 * @property {number} [__v] - Internal version key for the charge record.
 */
/**
 * @typedef ResourceNotFound
 * @property {string} [message] - Resource not found with {id}
 * @property {Object} [code]
 * @property {Object} [success]
 */
/**
 * @typedef CreateOneTimeCharge
 * @property {string} [name] - The name of the one-time charge to be created.
 * @property {OneTimeChargeItem} [charge]
 * @property {boolean} [is_test] - Indicates whether the charge creation is for
 *   testing purposes.
 * @property {string} [return_url] - URL to which the user will be redirected
 *   after creating the charge.
 */
/**
 * @typedef CreateOneTimeChargeResponse
 * @property {Charge} [charge]
 * @property {string} [confirm_url] - URL to which users are redirected to
 *   confirm or complete the payment or subscription process.
 */
/**
 * @typedef BadRequest
 * @property {string} [message] - Failure message.
 */
/**
 * @typedef CreateSubscriptionCharge
 * @property {string} name - The name of the charge.
 * @property {number} [trial_days]
 * @property {ChargeLineItem[]} line_items
 * @property {boolean} [is_test] - Indicates whether the charge is for testing purposes.
 * @property {string} return_url - The URL passed in request which extension
 *   expects in return.
 */
/**
 * @typedef CreateSubscriptionResponse
 * @property {EntitySubscription} [subscription]
 * @property {string} [confirm_url] - URL to which users are redirected to
 *   confirm or complete the payment or subscription process.
 */
/**
 * @typedef EntityChargePrice
 * @property {number} [amount] - The amount for the price. The minimum value is 1.
 * @property {string} [currency_code] - The currency code for the price
 */
/**
 * @typedef ChargeRecurring
 * @property {string} [interval]
 * @property {number} [interval_time]
 */
/**
 * @typedef SubscriptionTrialPeriod
 * @property {string} [start_date] - The start date and time of the trial period.
 * @property {string} [end_date] - The end date and time of the trial period.
 */
/**
 * @typedef Charge
 * @property {OneTimeChargeEntity} [final_charge]
 */
/**
 * @typedef OneTimeChargeItem
 * @property {string} [name] - The name of the one-time charge item.
 * @property {string} [term] - The term or description of the charge.
 * @property {string} [pricing_type] - The type of pricing for the charge item.
 * @property {EntityChargePrice} [price]
 * @property {number} [capped_amount] - The maximum amount that can be charged
 *   for this item, if applicable.
 * @property {boolean} [is_test] - Indicates whether the charge item is for
 *   testing purposes.
 * @property {Object} [metadata] - Additional metadata associated with the charge item.
 */
/**
 * @typedef ChargeLineItem
 * @property {string} name - Its name of the extension plan.
 * @property {string} term - It indicates how it will be charged.
 * @property {string} pricing_type - It indicates the extension subscription
 *   will be auto renewed timely.
 * @property {EntityChargePrice} price
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount]
 * @property {number} [trial_days]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */
/**
 * @typedef EntitySubscription
 * @property {string} [_id] - Unique identifier for the subscription charge
 * @property {string} [product_suit_id] - ID of the product suit associated with
 *   the charge
 * @property {string} [entity_id] - Unique identifier for the entity
 * @property {string} [entity_type] - Type of entity (e.g., subscription, extension)
 * @property {string} [name] - Name of the subscription charge
 * @property {string} [status] - Current status of the subscription charge
 * @property {number} [trial_days] - Number of trial days provided
 * @property {boolean} [is_test] - Indicates if the charge is for testing purposes
 * @property {string} [created_at] - Timestamp when the charge was created
 * @property {string} [modified_at] - Timestamp when the charge was last modified
 * @property {string} [subscriber_id] - Unique Identifier of the company
 * @property {EntityChargeDetails[]} [line_items]
 * @property {string} [return_url] - The URL passed in request which extension
 *   expects in return.
 */
/**
 * @typedef OneTimeChargeEntity
 * @property {string} [term] - Description of the charge term or usage.
 * @property {string} [charge_type] - Type of the charge (e.g., 'subscription',
 *   'extension').
 * @property {number} [capped_amount] - Maximum amount that can be charged. If
 *   no cap, the value should be 0.
 * @property {string} [billing_date] - Date when the charge was billed. Null if
 *   not yet billed.
 * @property {string} [created_at] - Date and time when the charge entity was created.
 * @property {string} [modified_at] - Date and time when the charge entity was
 *   last modified.
 * @property {number} [__v] - Internal version key for the charge record.
 * @property {string} [_id] - Unique identifier for the charge entity.
 * @property {string} [name] - The name of the one-time charge.
 * @property {string} [status] - Current status of the charge (e.g., 'pending',
 *   'completed').
 * @property {string} [activated_on] - Date and time when the charge was
 *   activated. Null if not yet activated.
 * @property {string} [cancelled_on] - Date and time when the charge was
 *   cancelled. Null if not cancelled.
 * @property {Object} [metadata] - Additional metadata associated with the charge.
 * @property {string} [return_url] - URL to redirect to after processing the charge.
 * @property {boolean} [is_test] - Indicates whether the charge is for testing purposes.
 * @property {string} [pricing_type] - Pricing model for the charge (e.g., 'one_time').
 * @property {string} [subscriber_id] - Unique identifier for the subscriber
 *   associated with the charge.
 * @property {string} [entity_type] - Type of the entity related to the charge
 *   (e.g., 'subscription', 'user').
 * @property {string} [entity_id] - Unique identifier for the entity associated
 *   with the charge.
 * @property {Object} [meta] - Additional metadata associated with the charge.
 * @property {EntityChargePrice} [price]
 */
/**
 * @typedef EntityChargeRecurring
 * @property {string} interval - The interval of the subscription.
 */
/**
 * @typedef EntityChargeDetails
 * @property {string} [_id] - Unique identifier for the charge.
 * @property {string} [subscription_id] - Unique identifier of the extension subscription.
 * @property {string} [subscriber_id] - Unique identifier of the
 *   subscriber/company who installed extension subscription.
 * @property {string} [entity_type] - The type of entity associated with the
 *   charge (e.g., 'extension', 'subscription').
 * @property {string} [entity_id] - Unique identifier for the entity associated
 *   with the charge.
 * @property {string} [name] - The name of the charge.
 * @property {string} [term] - Description of the charge term.
 * @property {string} [charge_type] - The type of charge (e.g., 'standalone',
 *   'recurring').
 * @property {string} [pricing_type] - The pricing model for the charge (e.g.,
 *   'one_time', 'recurring').
 * @property {EntityChargePrice} [price]
 * @property {ChargeRecurring} [recurring]
 * @property {string} [status] - Current status of the charge.
 * @property {number} [capped_amount] - Maximum amount that can be charged, if applicable.
 * @property {string} [activated_on] - Date and time when the charge was activated.
 * @property {string} [cancelled_on] - Date and time when the charge was cancelled.
 * @property {string} [billing_date] - Date and time when the charge was billed.
 * @property {SubscriptionTrialPeriod} [current_period]
 * @property {string} [modified_at] - Date and time when the charge details were
 *   last modified.
 * @property {string} [created_at] - Date and time when the charge was created.
 * @property {boolean} [is_test] - Indicates whether the charge is for testing purposes.
 * @property {string} [company_id] - Company id.
 * @property {Object} [meta] - Additional metadata associated with the charge.
 * @property {number} [__v] - Internal version key for the charge record.
 */
declare class BillingPlatformModel {
}
declare namespace BillingPlatformModel {
    export { SubscriptionChargeRes, ChargeDetails, ResourceNotFound, CreateOneTimeCharge, CreateOneTimeChargeResponse, BadRequest, CreateSubscriptionCharge, CreateSubscriptionResponse, EntityChargePrice, ChargeRecurring, SubscriptionTrialPeriod, Charge, OneTimeChargeItem, ChargeLineItem, EntitySubscription, OneTimeChargeEntity, EntityChargeRecurring, EntityChargeDetails };
}
/** @returns {SubscriptionChargeRes} */
declare function SubscriptionChargeRes(): SubscriptionChargeRes;
type SubscriptionChargeRes = {
    /**
     * - Unique identifier for the subscription charge
     */
    _id?: string;
    /**
     * - ID of the product suit associated with
     * the charge
     */
    product_suit_id?: string;
    /**
     * - Unique identifier for the entity
     */
    entity_id?: string;
    /**
     * - Type of entity (e.g., subscription, extension)
     */
    entity_type?: string;
    /**
     * - Name of the subscription charge
     */
    name?: string;
    /**
     * - Current status of the subscription charge
     */
    status?: string;
    /**
     * - Number of trial days provided
     */
    trial_days?: number;
    /**
     * - Date when the charge was activated
     */
    activated_on?: string;
    /**
     * - Date when the charge was cancelled
     */
    cancelled_on?: string;
    /**
     * - Indicates if the charge is for testing purposes
     */
    is_test?: boolean;
    /**
     * - Timestamp when the charge was created
     */
    created_at?: string;
    /**
     * - Timestamp when the charge was last modified
     */
    modified_at?: string;
    /**
     * - Company id
     */
    company_id?: string;
    /**
     * - List of line items associated with the charge
     */
    line_items?: any[];
};
/** @returns {ChargeDetails} */
declare function ChargeDetails(): ChargeDetails;
type ChargeDetails = {
    /**
     * - Unique identifier for the charge.
     */
    _id?: string;
    /**
     * - The type of entity associated with the
     * charge (e.g., 'extension', 'subscription').
     */
    entity_type?: string;
    /**
     * - Unique identifier for the entity associated
     * with the charge.
     */
    entity_id?: string;
    /**
     * - The name of the charge.
     */
    name?: string;
    /**
     * - Description of the charge term.
     */
    term?: string;
    /**
     * - The type of charge (e.g., 'standalone',
     * 'recurring').
     */
    charge_type?: string;
    /**
     * - The pricing model for the charge (e.g.,
     * 'one_time', 'recurring').
     */
    pricing_type?: string;
    price?: EntityChargePrice;
    recurring?: ChargeRecurring;
    /**
     * - Current status of the charge.
     */
    status?: string;
    /**
     * - Maximum amount that can be charged, if applicable.
     */
    capped_amount?: number;
    /**
     * - Date and time when the charge was activated.
     */
    activated_on?: string;
    /**
     * - Date and time when the charge was cancelled.
     */
    cancelled_on?: string;
    /**
     * - Date and time when the charge was billed.
     */
    billing_date?: string;
    current_period?: SubscriptionTrialPeriod;
    /**
     * - Date and time when the charge details were
     * last modified.
     */
    modified_at?: string;
    /**
     * - Date and time when the charge was created.
     */
    created_at?: string;
    /**
     * - Indicates whether the charge is for testing purposes.
     */
    is_test?: boolean;
    /**
     * - Company id.
     */
    company_id?: string;
    /**
     * - Additional metadata associated with the charge.
     */
    meta?: any;
    /**
     * - Internal version key for the charge record.
     */
    __v?: number;
};
/** @returns {ResourceNotFound} */
declare function ResourceNotFound(): ResourceNotFound;
type ResourceNotFound = {
    /**
     * - Resource not found with {id}
     */
    message?: string;
    code?: any;
    success?: any;
};
/** @returns {CreateOneTimeCharge} */
declare function CreateOneTimeCharge(): CreateOneTimeCharge;
type CreateOneTimeCharge = {
    /**
     * - The name of the one-time charge to be created.
     */
    name?: string;
    charge?: OneTimeChargeItem;
    /**
     * - Indicates whether the charge creation is for
     * testing purposes.
     */
    is_test?: boolean;
    /**
     * - URL to which the user will be redirected
     * after creating the charge.
     */
    return_url?: string;
};
/** @returns {CreateOneTimeChargeResponse} */
declare function CreateOneTimeChargeResponse(): CreateOneTimeChargeResponse;
type CreateOneTimeChargeResponse = {
    charge?: Charge;
    /**
     * - URL to which users are redirected to
     * confirm or complete the payment or subscription process.
     */
    confirm_url?: string;
};
/** @returns {BadRequest} */
declare function BadRequest(): BadRequest;
type BadRequest = {
    /**
     * - Failure message.
     */
    message?: string;
};
/** @returns {CreateSubscriptionCharge} */
declare function CreateSubscriptionCharge(): CreateSubscriptionCharge;
type CreateSubscriptionCharge = {
    /**
     * - The name of the charge.
     */
    name: string;
    trial_days?: number;
    line_items: ChargeLineItem[];
    /**
     * - Indicates whether the charge is for testing purposes.
     */
    is_test?: boolean;
    /**
     * - The URL passed in request which extension
     * expects in return.
     */
    return_url: string;
};
/** @returns {CreateSubscriptionResponse} */
declare function CreateSubscriptionResponse(): CreateSubscriptionResponse;
type CreateSubscriptionResponse = {
    subscription?: EntitySubscription;
    /**
     * - URL to which users are redirected to
     * confirm or complete the payment or subscription process.
     */
    confirm_url?: string;
};
/** @returns {EntityChargePrice} */
declare function EntityChargePrice(): EntityChargePrice;
type EntityChargePrice = {
    /**
     * - The amount for the price. The minimum value is 1.
     */
    amount?: number;
    /**
     * - The currency code for the price
     */
    currency_code?: string;
};
/** @returns {ChargeRecurring} */
declare function ChargeRecurring(): ChargeRecurring;
type ChargeRecurring = {
    interval?: string;
    interval_time?: number;
};
/** @returns {SubscriptionTrialPeriod} */
declare function SubscriptionTrialPeriod(): SubscriptionTrialPeriod;
type SubscriptionTrialPeriod = {
    /**
     * - The start date and time of the trial period.
     */
    start_date?: string;
    /**
     * - The end date and time of the trial period.
     */
    end_date?: string;
};
/** @returns {Charge} */
declare function Charge(): Charge;
type Charge = {
    final_charge?: OneTimeChargeEntity;
};
/** @returns {OneTimeChargeItem} */
declare function OneTimeChargeItem(): OneTimeChargeItem;
type OneTimeChargeItem = {
    /**
     * - The name of the one-time charge item.
     */
    name?: string;
    /**
     * - The term or description of the charge.
     */
    term?: string;
    /**
     * - The type of pricing for the charge item.
     */
    pricing_type?: string;
    price?: EntityChargePrice;
    /**
     * - The maximum amount that can be charged
     * for this item, if applicable.
     */
    capped_amount?: number;
    /**
     * - Indicates whether the charge item is for
     * testing purposes.
     */
    is_test?: boolean;
    /**
     * - Additional metadata associated with the charge item.
     */
    metadata?: any;
};
/** @returns {ChargeLineItem} */
declare function ChargeLineItem(): ChargeLineItem;
type ChargeLineItem = {
    /**
     * - Its name of the extension plan.
     */
    name: string;
    /**
     * - It indicates how it will be charged.
     */
    term: string;
    /**
     * - It indicates the extension subscription
     * will be auto renewed timely.
     */
    pricing_type: string;
    price: EntityChargePrice;
    recurring?: EntityChargeRecurring;
    capped_amount?: number;
    trial_days?: number;
    is_test?: boolean;
    metadata?: any;
};
/** @returns {EntitySubscription} */
declare function EntitySubscription(): EntitySubscription;
type EntitySubscription = {
    /**
     * - Unique identifier for the subscription charge
     */
    _id?: string;
    /**
     * - ID of the product suit associated with
     * the charge
     */
    product_suit_id?: string;
    /**
     * - Unique identifier for the entity
     */
    entity_id?: string;
    /**
     * - Type of entity (e.g., subscription, extension)
     */
    entity_type?: string;
    /**
     * - Name of the subscription charge
     */
    name?: string;
    /**
     * - Current status of the subscription charge
     */
    status?: string;
    /**
     * - Number of trial days provided
     */
    trial_days?: number;
    /**
     * - Indicates if the charge is for testing purposes
     */
    is_test?: boolean;
    /**
     * - Timestamp when the charge was created
     */
    created_at?: string;
    /**
     * - Timestamp when the charge was last modified
     */
    modified_at?: string;
    /**
     * - Unique Identifier of the company
     */
    subscriber_id?: string;
    line_items?: EntityChargeDetails[];
    /**
     * - The URL passed in request which extension
     * expects in return.
     */
    return_url?: string;
};
/** @returns {OneTimeChargeEntity} */
declare function OneTimeChargeEntity(): OneTimeChargeEntity;
type OneTimeChargeEntity = {
    /**
     * - Description of the charge term or usage.
     */
    term?: string;
    /**
     * - Type of the charge (e.g., 'subscription',
     * 'extension').
     */
    charge_type?: string;
    /**
     * - Maximum amount that can be charged. If
     * no cap, the value should be 0.
     */
    capped_amount?: number;
    /**
     * - Date when the charge was billed. Null if
     * not yet billed.
     */
    billing_date?: string;
    /**
     * - Date and time when the charge entity was created.
     */
    created_at?: string;
    /**
     * - Date and time when the charge entity was
     * last modified.
     */
    modified_at?: string;
    /**
     * - Internal version key for the charge record.
     */
    __v?: number;
    /**
     * - Unique identifier for the charge entity.
     */
    _id?: string;
    /**
     * - The name of the one-time charge.
     */
    name?: string;
    /**
     * - Current status of the charge (e.g., 'pending',
     * 'completed').
     */
    status?: string;
    /**
     * - Date and time when the charge was
     * activated. Null if not yet activated.
     */
    activated_on?: string;
    /**
     * - Date and time when the charge was
     * cancelled. Null if not cancelled.
     */
    cancelled_on?: string;
    /**
     * - Additional metadata associated with the charge.
     */
    metadata?: any;
    /**
     * - URL to redirect to after processing the charge.
     */
    return_url?: string;
    /**
     * - Indicates whether the charge is for testing purposes.
     */
    is_test?: boolean;
    /**
     * - Pricing model for the charge (e.g., 'one_time').
     */
    pricing_type?: string;
    /**
     * - Unique identifier for the subscriber
     * associated with the charge.
     */
    subscriber_id?: string;
    /**
     * - Type of the entity related to the charge
     * (e.g., 'subscription', 'user').
     */
    entity_type?: string;
    /**
     * - Unique identifier for the entity associated
     * with the charge.
     */
    entity_id?: string;
    /**
     * - Additional metadata associated with the charge.
     */
    meta?: any;
    price?: EntityChargePrice;
};
/** @returns {EntityChargeRecurring} */
declare function EntityChargeRecurring(): EntityChargeRecurring;
type EntityChargeRecurring = {
    /**
     * - The interval of the subscription.
     */
    interval: string;
};
/** @returns {EntityChargeDetails} */
declare function EntityChargeDetails(): EntityChargeDetails;
type EntityChargeDetails = {
    /**
     * - Unique identifier for the charge.
     */
    _id?: string;
    /**
     * - Unique identifier of the extension subscription.
     */
    subscription_id?: string;
    /**
     * - Unique identifier of the
     * subscriber/company who installed extension subscription.
     */
    subscriber_id?: string;
    /**
     * - The type of entity associated with the
     * charge (e.g., 'extension', 'subscription').
     */
    entity_type?: string;
    /**
     * - Unique identifier for the entity associated
     * with the charge.
     */
    entity_id?: string;
    /**
     * - The name of the charge.
     */
    name?: string;
    /**
     * - Description of the charge term.
     */
    term?: string;
    /**
     * - The type of charge (e.g., 'standalone',
     * 'recurring').
     */
    charge_type?: string;
    /**
     * - The pricing model for the charge (e.g.,
     * 'one_time', 'recurring').
     */
    pricing_type?: string;
    price?: EntityChargePrice;
    recurring?: ChargeRecurring;
    /**
     * - Current status of the charge.
     */
    status?: string;
    /**
     * - Maximum amount that can be charged, if applicable.
     */
    capped_amount?: number;
    /**
     * - Date and time when the charge was activated.
     */
    activated_on?: string;
    /**
     * - Date and time when the charge was cancelled.
     */
    cancelled_on?: string;
    /**
     * - Date and time when the charge was billed.
     */
    billing_date?: string;
    current_period?: SubscriptionTrialPeriod;
    /**
     * - Date and time when the charge details were
     * last modified.
     */
    modified_at?: string;
    /**
     * - Date and time when the charge was created.
     */
    created_at?: string;
    /**
     * - Indicates whether the charge is for testing purposes.
     */
    is_test?: boolean;
    /**
     * - Company id.
     */
    company_id?: string;
    /**
     * - Additional metadata associated with the charge.
     */
    meta?: any;
    /**
     * - Internal version key for the charge record.
     */
    __v?: number;
};
