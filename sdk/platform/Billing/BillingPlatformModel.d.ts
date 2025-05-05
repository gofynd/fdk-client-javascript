export = BillingPlatformModel;
/**
 * @typedef SubscriptionChargeRes
 * @property {string} [_id] - Unique identifier for the subscription charge
 * @property {string} [product_suit_id] - A unique identifier for a product
 *   suite, which represents a specific collection or group of products within
 *   the system.
 * @property {string} [entity_id] - Unique identifier for the entity (eg. extension)
 * @property {string} [entity_type] - Specifies the type of entity related to
 *   the operation, such as 'extension' or 'subscription'
 * @property {string} [name] - The name of the extension plan
 * @property {string} [status] - Current status of the extension subscription
 * @property {number} [trial_days] - The number of days allocated for the trial period
 * @property {string} [activated_on] - Date when the charge was activated
 * @property {string} [cancelled_on] - Date when the charge was cancelled
 * @property {boolean} [is_test] - Indicates whether the operation or data is in
 *   a test mode.
 * @property {string} [created_at] - Timestamp when the charge was created
 * @property {string} [modified_at] - Timestamp when the charge was last modified
 * @property {string} [company_id] - The unique identifier of the company.
 * @property {Object[]} [line_items] - List of line items associated with the charge
 */
/**
 * @typedef BadRequestSchema
 * @property {string} [message] - Failure message.
 */
/**
 * @typedef ResourceNotFound
 * @property {string} [message] - Resource not found with {id}
 * @property {number} [code] - The HTTP status code associated with the error
 * @property {boolean} [success] - Indicates if the request was successful
 */
/**
 * @typedef SubscriptionTrialPeriod
 * @property {string} [start_date] - The start date and time of the trial period.
 * @property {string} [end_date] - The end date and time of the trial period.
 */
/**
 * @typedef EntityChargePrice
 * @property {number} [amount] - The amount for the price. The minimum value is 1.
 * @property {string} [currency_code] - The currency code for the price
 */
/**
 * @typedef OneTimeChargeItem
 * @property {string} [name] - The name of the one-time charge item.
 * @property {string} [term] - The term or description of the charge.
 * @property {string} [pricing_type] - The type of pricing for the charge item.
 * @property {EntityChargePrice} [price]
 * @property {number} [capped_amount] - The maximum amount that can be charged
 *   for a particular service or item
 * @property {boolean} [is_test] - Indicates whether the operation or data is in
 *   a test mode.
 * @property {Object} [metadata] - Additional metadata associated with the charge item.
 */
/**
 * @typedef CreateOneTimeCharge
 * @property {string} [name] - The name of the one-time charge to be created.
 * @property {OneTimeChargeItem} [charge]
 * @property {boolean} [is_test] - Indicates whether the operation or data is in
 *   a test mode.
 * @property {string} [return_url] - URL to which the user will be redirected
 *   after creating the charge.
 */
/**
 * @typedef ChargeRecurring
 * @property {string} [interval] - The interval at which the recurring charge is
 *   applied. Examples include "month", "year", etc.
 * @property {number} [interval_time]
 */
/**
 * @typedef ChargeDetails
 * @property {string} [_id] - Unique identifier for the charge.
 * @property {string} [entity_type] - Specifies the type of entity related to
 *   the operation, such as 'extension' or 'subscription'
 * @property {string} [entity_id] - Unique identifier for the entity (eg. extension)
 * @property {string} [name] - The name of the extension plan
 * @property {string} [term] - Description of the charge term.
 * @property {string} [charge_type] - The type of charge (e.g., 'standalone',
 *   'recurring').
 * @property {string} [pricing_type] - The pricing model for the charge (e.g.,
 *   'one_time', 'recurring').
 * @property {EntityChargePrice} [price]
 * @property {ChargeRecurring} [recurring]
 * @property {string} [status] - Current status of the charge.
 * @property {number} [capped_amount] - The maximum amount that can be charged
 *   for a particular service or item
 * @property {string} [activated_on] - Date and time when the charge was activated.
 * @property {string} [cancelled_on] - Date and time when the charge was cancelled.
 * @property {string} [billing_date] - The date when the billing occurred. This
 *   field is optional and may be null if the billing date is not specified.
 * @property {SubscriptionTrialPeriod} [current_period]
 * @property {string} [modified_at] - Date and time when the charge details were
 *   last modified.
 * @property {string} [created_at] - Date and time when the charge was created.
 * @property {boolean} [is_test] - Indicates whether the operation or data is in
 *   a test mode.
 * @property {string} [company_id] - The unique identifier of the company.
 * @property {Object} [meta] - Additional metadata associated with the charge.
 * @property {number} [__v] - Internal version key for the charge record.
 */
/**
 * @typedef OneTimeChargeEntity
 * @property {string} [term] - Description of the charge term or usage.
 * @property {string} [charge_type] - Type of the charge (e.g., 'subscription',
 *   'extension').
 * @property {number} [capped_amount] - The maximum amount that can be charged
 *   for a particular service or item
 * @property {string} [billing_date] - The date when the billing occurred. This
 *   field is optional and may be null if the billing date is not specified.
 * @property {string} [created_at] - Date and time when the charge entity was created.
 * @property {string} [modified_at] - Date and time when the charge entity was
 *   last modified.
 * @property {number} [__v] - Internal version key for the charge record.
 * @property {string} [_id] - Unique identifier for the charge entity.
 * @property {string} [name] - The name of the one-time charge.
 * @property {string} [status] - Current status of the charge (e.g., 'pending').
 * @property {string} [activated_on] - Date and time when the charge was
 *   activated. Null if not yet activated.
 * @property {string} [cancelled_on] - Date and time when the charge was
 *   cancelled. Null if not cancelled.
 * @property {Object} [metadata] - Additional metadata associated with the charge.
 * @property {string} [return_url] - URL to redirect to after processing the charge.
 * @property {boolean} [is_test] - Indicates whether the operation or data is in
 *   a test mode.
 * @property {string} [pricing_type] - Pricing model for the charge (e.g., 'one_time').
 * @property {string} [subscriber_id] - The unique identifier for the company in
 *   the system.
 * @property {string} [entity_type] - Specifies the type of entity related to
 *   the operation, such as 'extension' or 'subscription'
 * @property {string} [entity_id] - Unique identifier for the entity (eg. extension)
 * @property {Object} [meta] - Additional metadata associated with the charge.
 * @property {EntityChargePrice} [price]
 */
/**
 * @typedef CreateOneTimeChargeResponseSchemas
 * @property {Charge} [charge]
 * @property {string} [confirm_url] - URL to which users are redirected to
 *   confirm or complete the payment or subscription process.
 */
/**
 * @typedef Charge
 * @property {OneTimeChargeEntity} [final_charge]
 */
/**
 * @typedef EntityChargeRecurring
 * @property {string} interval - The interval at which the recurring charge is
 *   applied. Examples include "month", "year", etc.
 */
/**
 * @typedef ChargeLineItem
 * @property {string} name - Its name of the extension plan.
 * @property {string} term - It indicates how it will be charged.
 * @property {string} pricing_type - Specifies the type of pricing for the
 *   extension subscription. It indicates whether the subscription will be
 *   automatically renewed, charged once, or based on usage.
 * @property {EntityChargePrice} price
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount] - The maximum amount that can be charged
 *   for a particular service or item
 * @property {number} [trial_days] - The number of days allocated for the trial period
 * @property {boolean} [is_test] - Indicates whether the operation or data is in
 *   a test mode.
 * @property {Object} [metadata]
 */
/**
 * @typedef CreateSubscriptionCharge
 * @property {string} name - The name of the extension plan
 * @property {number} [trial_days] - The number of days allocated for the trial period
 * @property {ChargeLineItem[]} line_items
 * @property {boolean} [is_test] - Indicates whether the operation or data is in
 *   a test mode.
 * @property {string} return_url - The URL to which the user will be redirected
 *   after the subscription process is complete.
 */
/**
 * @typedef EntityChargeDetails
 * @property {string} [_id] - The unique identifier for the charge.
 * @property {string} [subscription_id] - The unique identifier of the subscription.
 * @property {string} [subscriber_id] - The unique identifier for the company in
 *   the system.
 * @property {string} [entity_type] - Specifies the type of entity related to
 *   the operation, such as 'extension' or 'subscription'
 * @property {string} [entity_id] - Unique identifier for the entity (eg. extension)
 * @property {string} [name] - The name of the extension plan
 * @property {string} [term] - Detailed description of the terms and conditions
 *   associated with the charge.
 * @property {string} [charge_type] - The type of charge (e.g., 'standalone',
 *   'recurring').
 * @property {string} [pricing_type] - The pricing model for the charge (e.g.,
 *   'one_time', 'recurring').
 * @property {EntityChargePrice} [price]
 * @property {ChargeRecurring} [recurring]
 * @property {string} [status] - Current status of the charge.
 * @property {number} [capped_amount] - The maximum amount that can be charged
 *   for a particular service or item
 * @property {string} [activated_on] - Date and time when the charge was activated.
 * @property {string} [cancelled_on] - Date and time when the charge was cancelled.
 * @property {string} [billing_date] - The date when the billing occurred. This
 *   field is optional and may be null if the billing date is not specified.
 * @property {SubscriptionTrialPeriod} [current_period]
 * @property {string} [modified_at] - Date and time when the charge details were
 *   last modified.
 * @property {string} [created_at] - Date and time when the charge was created.
 * @property {boolean} [is_test] - Indicates whether the operation or data is in
 *   a test mode.
 * @property {string} [company_id] - The unique identifier of the company.
 * @property {Object} [meta] - Additional metadata associated with the charge.
 * @property {number} [__v] - Internal version key for the charge record.
 */
/**
 * @typedef EntitySubscription
 * @property {string} [_id] - Unique identifier for the subscription charge
 * @property {string} [product_suit_id] - A unique identifier for a product
 *   suite, which represents a specific collection or group of products within
 *   the system.
 * @property {string} [entity_id] - Unique identifier for the entity (eg. extension)
 * @property {string} [entity_type] - Specifies the type of entity related to
 *   the operation, such as 'extension' or 'subscription'
 * @property {string} [name] - The name of the extension plan
 * @property {string} [status] - Current status of the subscription charge
 * @property {number} [trial_days] - The number of days allocated for the trial period
 * @property {boolean} [is_test] - Indicates whether the operation or data is in
 *   a test mode.
 * @property {string} [created_at] - Timestamp when the charge was created
 * @property {string} [modified_at] - Timestamp when the charge was last modified
 * @property {string} [subscriber_id] - The unique identifier for the company in
 *   the system.
 * @property {EntityChargeDetails[]} [line_items]
 * @property {string} [return_url] - The URL passed in request which extension
 *   expects in return.
 */
/**
 * @typedef CreateSubscription
 * @property {EntitySubscription} [subscription]
 * @property {string} [confirm_url] - URL to which users are redirected to post
 *   initiation of extension installation.
 */
declare class BillingPlatformModel {
}
declare namespace BillingPlatformModel {
    export { SubscriptionChargeRes, BadRequestSchema, ResourceNotFound, SubscriptionTrialPeriod, EntityChargePrice, OneTimeChargeItem, CreateOneTimeCharge, ChargeRecurring, ChargeDetails, OneTimeChargeEntity, CreateOneTimeChargeResponseSchemas, Charge, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, EntityChargeDetails, EntitySubscription, CreateSubscription };
}
/** @returns {SubscriptionChargeRes} */
declare function SubscriptionChargeRes(): SubscriptionChargeRes;
type SubscriptionChargeRes = {
    /**
     * - Unique identifier for the subscription charge
     */
    _id?: string;
    /**
     * - A unique identifier for a product
     * suite, which represents a specific collection or group of products within
     * the system.
     */
    product_suit_id?: string;
    /**
     * - Unique identifier for the entity (eg. extension)
     */
    entity_id?: string;
    /**
     * - Specifies the type of entity related to
     * the operation, such as 'extension' or 'subscription'
     */
    entity_type?: string;
    /**
     * - The name of the extension plan
     */
    name?: string;
    /**
     * - Current status of the extension subscription
     */
    status?: string;
    /**
     * - The number of days allocated for the trial period
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
     * - Indicates whether the operation or data is in
     * a test mode.
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
     * - The unique identifier of the company.
     */
    company_id?: string;
    /**
     * - List of line items associated with the charge
     */
    line_items?: any[];
};
/** @returns {BadRequestSchema} */
declare function BadRequestSchema(): BadRequestSchema;
type BadRequestSchema = {
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
    /**
     * - The HTTP status code associated with the error
     */
    code?: number;
    /**
     * - Indicates if the request was successful
     */
    success?: boolean;
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
     * for a particular service or item
     */
    capped_amount?: number;
    /**
     * - Indicates whether the operation or data is in
     * a test mode.
     */
    is_test?: boolean;
    /**
     * - Additional metadata associated with the charge item.
     */
    metadata?: any;
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
     * - Indicates whether the operation or data is in
     * a test mode.
     */
    is_test?: boolean;
    /**
     * - URL to which the user will be redirected
     * after creating the charge.
     */
    return_url?: string;
};
/** @returns {ChargeRecurring} */
declare function ChargeRecurring(): ChargeRecurring;
type ChargeRecurring = {
    /**
     * - The interval at which the recurring charge is
     * applied. Examples include "month", "year", etc.
     */
    interval?: string;
    interval_time?: number;
};
/** @returns {ChargeDetails} */
declare function ChargeDetails(): ChargeDetails;
type ChargeDetails = {
    /**
     * - Unique identifier for the charge.
     */
    _id?: string;
    /**
     * - Specifies the type of entity related to
     * the operation, such as 'extension' or 'subscription'
     */
    entity_type?: string;
    /**
     * - Unique identifier for the entity (eg. extension)
     */
    entity_id?: string;
    /**
     * - The name of the extension plan
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
     * - The maximum amount that can be charged
     * for a particular service or item
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
     * - The date when the billing occurred. This
     * field is optional and may be null if the billing date is not specified.
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
     * - Indicates whether the operation or data is in
     * a test mode.
     */
    is_test?: boolean;
    /**
     * - The unique identifier of the company.
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
     * - The maximum amount that can be charged
     * for a particular service or item
     */
    capped_amount?: number;
    /**
     * - The date when the billing occurred. This
     * field is optional and may be null if the billing date is not specified.
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
     * - Current status of the charge (e.g., 'pending').
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
     * - Indicates whether the operation or data is in
     * a test mode.
     */
    is_test?: boolean;
    /**
     * - Pricing model for the charge (e.g., 'one_time').
     */
    pricing_type?: string;
    /**
     * - The unique identifier for the company in
     * the system.
     */
    subscriber_id?: string;
    /**
     * - Specifies the type of entity related to
     * the operation, such as 'extension' or 'subscription'
     */
    entity_type?: string;
    /**
     * - Unique identifier for the entity (eg. extension)
     */
    entity_id?: string;
    /**
     * - Additional metadata associated with the charge.
     */
    meta?: any;
    price?: EntityChargePrice;
};
/** @returns {CreateOneTimeChargeResponseSchemas} */
declare function CreateOneTimeChargeResponseSchemas(): CreateOneTimeChargeResponseSchemas;
type CreateOneTimeChargeResponseSchemas = {
    charge?: Charge;
    /**
     * - URL to which users are redirected to
     * confirm or complete the payment or subscription process.
     */
    confirm_url?: string;
};
/** @returns {Charge} */
declare function Charge(): Charge;
type Charge = {
    final_charge?: OneTimeChargeEntity;
};
/** @returns {EntityChargeRecurring} */
declare function EntityChargeRecurring(): EntityChargeRecurring;
type EntityChargeRecurring = {
    /**
     * - The interval at which the recurring charge is
     * applied. Examples include "month", "year", etc.
     */
    interval: string;
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
     * - Specifies the type of pricing for the
     * extension subscription. It indicates whether the subscription will be
     * automatically renewed, charged once, or based on usage.
     */
    pricing_type: string;
    price: EntityChargePrice;
    recurring?: EntityChargeRecurring;
    /**
     * - The maximum amount that can be charged
     * for a particular service or item
     */
    capped_amount?: number;
    /**
     * - The number of days allocated for the trial period
     */
    trial_days?: number;
    /**
     * - Indicates whether the operation or data is in
     * a test mode.
     */
    is_test?: boolean;
    metadata?: any;
};
/** @returns {CreateSubscriptionCharge} */
declare function CreateSubscriptionCharge(): CreateSubscriptionCharge;
type CreateSubscriptionCharge = {
    /**
     * - The name of the extension plan
     */
    name: string;
    /**
     * - The number of days allocated for the trial period
     */
    trial_days?: number;
    line_items: ChargeLineItem[];
    /**
     * - Indicates whether the operation or data is in
     * a test mode.
     */
    is_test?: boolean;
    /**
     * - The URL to which the user will be redirected
     * after the subscription process is complete.
     */
    return_url: string;
};
/** @returns {EntityChargeDetails} */
declare function EntityChargeDetails(): EntityChargeDetails;
type EntityChargeDetails = {
    /**
     * - The unique identifier for the charge.
     */
    _id?: string;
    /**
     * - The unique identifier of the subscription.
     */
    subscription_id?: string;
    /**
     * - The unique identifier for the company in
     * the system.
     */
    subscriber_id?: string;
    /**
     * - Specifies the type of entity related to
     * the operation, such as 'extension' or 'subscription'
     */
    entity_type?: string;
    /**
     * - Unique identifier for the entity (eg. extension)
     */
    entity_id?: string;
    /**
     * - The name of the extension plan
     */
    name?: string;
    /**
     * - Detailed description of the terms and conditions
     * associated with the charge.
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
     * - The maximum amount that can be charged
     * for a particular service or item
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
     * - The date when the billing occurred. This
     * field is optional and may be null if the billing date is not specified.
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
     * - Indicates whether the operation or data is in
     * a test mode.
     */
    is_test?: boolean;
    /**
     * - The unique identifier of the company.
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
/** @returns {EntitySubscription} */
declare function EntitySubscription(): EntitySubscription;
type EntitySubscription = {
    /**
     * - Unique identifier for the subscription charge
     */
    _id?: string;
    /**
     * - A unique identifier for a product
     * suite, which represents a specific collection or group of products within
     * the system.
     */
    product_suit_id?: string;
    /**
     * - Unique identifier for the entity (eg. extension)
     */
    entity_id?: string;
    /**
     * - Specifies the type of entity related to
     * the operation, such as 'extension' or 'subscription'
     */
    entity_type?: string;
    /**
     * - The name of the extension plan
     */
    name?: string;
    /**
     * - Current status of the subscription charge
     */
    status?: string;
    /**
     * - The number of days allocated for the trial period
     */
    trial_days?: number;
    /**
     * - Indicates whether the operation or data is in
     * a test mode.
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
     * - The unique identifier for the company in
     * the system.
     */
    subscriber_id?: string;
    line_items?: EntityChargeDetails[];
    /**
     * - The URL passed in request which extension
     * expects in return.
     */
    return_url?: string;
};
/** @returns {CreateSubscription} */
declare function CreateSubscription(): CreateSubscription;
type CreateSubscription = {
    subscription?: EntitySubscription;
    /**
     * - URL to which users are redirected to post
     * initiation of extension installation.
     */
    confirm_url?: string;
};
