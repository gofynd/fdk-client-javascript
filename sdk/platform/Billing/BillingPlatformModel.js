const Joi = require("joi");

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

class BillingPlatformModel {
  /** @returns {SubscriptionChargeRes} */
  static SubscriptionChargeRes() {
    return Joi.object({
      _id: Joi.string().allow(""),
      product_suit_id: Joi.string().allow(""),
      entity_id: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      trial_days: Joi.number(),
      activated_on: Joi.string().allow(""),
      cancelled_on: Joi.string().allow(""),
      is_test: Joi.boolean(),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      line_items: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {ChargeDetails} */
  static ChargeDetails() {
    return Joi.object({
      _id: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      entity_id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      term: Joi.string().allow(""),
      charge_type: Joi.string().allow(""),
      pricing_type: Joi.string().allow(""),
      price: BillingPlatformModel.EntityChargePrice(),
      recurring: BillingPlatformModel.ChargeRecurring(),
      status: Joi.string().allow(""),
      capped_amount: Joi.number(),
      activated_on: Joi.string().allow(""),
      cancelled_on: Joi.string().allow(""),
      billing_date: Joi.string().allow(""),
      current_period: BillingPlatformModel.SubscriptionTrialPeriod(),
      modified_at: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      is_test: Joi.boolean(),
      company_id: Joi.string().allow(""),
      meta: Joi.any(),
      __v: Joi.number(),
    });
  }

  /** @returns {ResourceNotFound} */
  static ResourceNotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
      code: Joi.any(),
      success: Joi.any(),
    });
  }

  /** @returns {CreateOneTimeCharge} */
  static CreateOneTimeCharge() {
    return Joi.object({
      name: Joi.string().allow(""),
      charge: BillingPlatformModel.OneTimeChargeItem(),
      is_test: Joi.boolean(),
      return_url: Joi.string().allow(""),
    });
  }

  /** @returns {CreateOneTimeChargeResponse} */
  static CreateOneTimeChargeResponse() {
    return Joi.object({
      charge: BillingPlatformModel.Charge(),
      confirm_url: Joi.string().allow(""),
    });
  }

  /** @returns {BadRequest} */
  static BadRequest() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CreateSubscriptionCharge} */
  static CreateSubscriptionCharge() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      trial_days: Joi.number(),
      line_items: Joi.array()
        .items(BillingPlatformModel.ChargeLineItem())
        .required(),
      is_test: Joi.boolean(),
      return_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreateSubscriptionResponse} */
  static CreateSubscriptionResponse() {
    return Joi.object({
      subscription: BillingPlatformModel.EntitySubscription(),
      confirm_url: Joi.string().allow(""),
    });
  }

  /** @returns {EntityChargePrice} */
  static EntityChargePrice() {
    return Joi.object({
      amount: Joi.number(),
      currency_code: Joi.string().allow(""),
    });
  }

  /** @returns {ChargeRecurring} */
  static ChargeRecurring() {
    return Joi.object({
      interval: Joi.string().allow(""),
      interval_time: Joi.number(),
    });
  }

  /** @returns {SubscriptionTrialPeriod} */
  static SubscriptionTrialPeriod() {
    return Joi.object({
      start_date: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
    });
  }

  /** @returns {Charge} */
  static Charge() {
    return Joi.object({
      final_charge: BillingPlatformModel.OneTimeChargeEntity(),
    });
  }

  /** @returns {OneTimeChargeItem} */
  static OneTimeChargeItem() {
    return Joi.object({
      name: Joi.string().allow(""),
      term: Joi.string().allow(""),
      pricing_type: Joi.string().allow(""),
      price: BillingPlatformModel.EntityChargePrice(),
      capped_amount: Joi.number(),
      is_test: Joi.boolean(),
      metadata: Joi.any(),
    });
  }

  /** @returns {ChargeLineItem} */
  static ChargeLineItem() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      term: Joi.string().allow("").required(),
      pricing_type: Joi.string().allow("").required(),
      price: BillingPlatformModel.EntityChargePrice().required(),
      recurring: BillingPlatformModel.EntityChargeRecurring(),
      capped_amount: Joi.number(),
      trial_days: Joi.number(),
      is_test: Joi.boolean(),
      metadata: Joi.any(),
    });
  }

  /** @returns {EntitySubscription} */
  static EntitySubscription() {
    return Joi.object({
      _id: Joi.string().allow(""),
      product_suit_id: Joi.string().allow(""),
      entity_id: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      trial_days: Joi.number(),
      is_test: Joi.boolean(),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      subscriber_id: Joi.string().allow(""),
      line_items: Joi.array().items(BillingPlatformModel.EntityChargeDetails()),
      return_url: Joi.string().allow(""),
    });
  }

  /** @returns {OneTimeChargeEntity} */
  static OneTimeChargeEntity() {
    return Joi.object({
      term: Joi.string().allow(""),
      charge_type: Joi.string().allow(""),
      capped_amount: Joi.number(),
      billing_date: Joi.string().allow("").allow(null),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      activated_on: Joi.string().allow("").allow(null),
      cancelled_on: Joi.string().allow("").allow(null),
      metadata: Joi.any(),
      return_url: Joi.string().allow(""),
      is_test: Joi.boolean(),
      pricing_type: Joi.string().allow(""),
      subscriber_id: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      entity_id: Joi.string().allow(""),
      meta: Joi.any(),
      price: BillingPlatformModel.EntityChargePrice(),
    });
  }

  /** @returns {EntityChargeRecurring} */
  static EntityChargeRecurring() {
    return Joi.object({
      interval: Joi.string().allow("").required(),
    });
  }

  /** @returns {EntityChargeDetails} */
  static EntityChargeDetails() {
    return Joi.object({
      _id: Joi.string().allow(""),
      subscription_id: Joi.string().allow(""),
      subscriber_id: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      entity_id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      term: Joi.string().allow(""),
      charge_type: Joi.string().allow(""),
      pricing_type: Joi.string().allow(""),
      price: BillingPlatformModel.EntityChargePrice(),
      recurring: BillingPlatformModel.ChargeRecurring(),
      status: Joi.string().allow(""),
      capped_amount: Joi.number(),
      activated_on: Joi.string().allow("").allow(null),
      cancelled_on: Joi.string().allow("").allow(null),
      billing_date: Joi.string().allow("").allow(null),
      current_period: BillingPlatformModel.SubscriptionTrialPeriod(),
      modified_at: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      is_test: Joi.boolean(),
      company_id: Joi.string().allow(""),
      meta: Joi.any(),
      __v: Joi.number(),
    });
  }
}
module.exports = BillingPlatformModel;
