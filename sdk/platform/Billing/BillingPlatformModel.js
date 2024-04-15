const Joi = require("joi");

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

/**
 * @typedef Features
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {string} [group]
 * @property {boolean} [enabled]
 * @property {string} [display_text]
 */

/**
 * @typedef FeeComponents
 * @property {string[]} [brand]
 * @property {string[]} [location]
 * @property {Object[]} [channel]
 * @property {string} [business_lead]
 * @property {string} [settlement_type]
 * @property {Object} [settle_cycle_period]
 * @property {Object[]} [components]
 */

/**
 * @typedef Details
 * @property {FeeComponents[]} [fee_components]
 * @property {Features[]} [features]
 */

/**
 * @typedef EntityResponse
 * @property {boolean} [success]
 * @property {number} [page]
 * @property {number} [page_size]
 * @property {Details[]} [items]
 */

class BillingPlatformModel {
  /** @returns {BadRequest} */
  static BadRequest() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {ResourceNotFound} */
  static ResourceNotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {InternalServerError} */
  static InternalServerError() {
    return Joi.object({
      message: Joi.string().allow(""),
      code: Joi.string().allow(""),
    });
  }

  /** @returns {CheckValidityResponse} */
  static CheckValidityResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),
      discount_amount: Joi.number(),
    });
  }

  /** @returns {PlanRecurring} */
  static PlanRecurring() {
    return Joi.object({
      interval: Joi.string().allow(""),
      interval_count: Joi.number(),
    });
  }

  /** @returns {Plan} */
  static Plan() {
    return Joi.object({
      recurring: BillingPlatformModel.PlanRecurring(),
      is_trial_plan: Joi.boolean(),
      plan_group: Joi.string().allow(""),
      tag_lines: Joi.array().items(Joi.string().allow("")),
      currency: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_visible: Joi.boolean(),
      trial_period: Joi.number(),
      addons: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      country: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      amount: Joi.number(),
      product_suite_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionTrialPeriod} */
  static SubscriptionTrialPeriod() {
    return Joi.object({
      start_date: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
    });
  }

  /** @returns {EntityChargePrice} */
  static EntityChargePrice() {
    return Joi.object({
      amount: Joi.number().required(),
      currency_code: Joi.string().allow("").required(),
    });
  }

  /** @returns {EntityChargeRecurring} */
  static EntityChargeRecurring() {
    return Joi.object({
      interval: Joi.string().allow("").required(),
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

  /** @returns {OneTimeChargeItem} */
  static OneTimeChargeItem() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      term: Joi.string().allow(""),
      pricing_type: Joi.string().allow("").required(),
      price: BillingPlatformModel.EntityChargePrice().required(),
      capped_amount: Joi.number(),
      is_test: Joi.boolean(),
      metadata: Joi.any(),
    });
  }

  /** @returns {CreateOneTimeCharge} */
  static CreateOneTimeCharge() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      charge: BillingPlatformModel.OneTimeChargeItem().required(),
      is_test: Joi.boolean(),
      return_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {CurrentPeriod} */
  static CurrentPeriod() {
    return Joi.object({
      start_date: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionCharge} */
  static SubscriptionCharge() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      term: Joi.string().allow(""),
      pricing_type: Joi.string().allow(""),
      price: BillingPlatformModel.EntityChargePrice(),
      recurring: BillingPlatformModel.EntityChargeRecurring(),
      capped_amount: Joi.number(),
      activated_on: Joi.string().allow(""),
      cancelled_on: Joi.string().allow(""),
      billing_date: Joi.string().allow(""),
      current_period: BillingPlatformModel.CurrentPeriod(),
      status: Joi.string().allow(""),
      is_test: Joi.boolean(),
      metadata: Joi.any(),
    });
  }

  /** @returns {EntitySubscription} */
  static EntitySubscription() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      company_id: Joi.number(),
      activated_on: Joi.string().allow(""),
      cancelled_on: Joi.string().allow(""),
      trial_days: Joi.number(),
      trial_period: BillingPlatformModel.SubscriptionTrialPeriod(),
      metadata: Joi.any(),
      line_items: Joi.array().items(BillingPlatformModel.SubscriptionCharge()),
    });
  }

  /** @returns {OneTimeChargeEntity} */
  static OneTimeChargeEntity() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      activated_on: Joi.string().allow(""),
      cancelled_on: Joi.string().allow(""),
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

  /** @returns {CreateOneTimeChargeResponse} */
  static CreateOneTimeChargeResponse() {
    return Joi.object({
      charge: BillingPlatformModel.OneTimeChargeEntity(),
      confirm_url: Joi.string().allow(""),
    });
  }

  /** @returns {CreateSubscriptionResponse} */
  static CreateSubscriptionResponse() {
    return Joi.object({
      subscription: BillingPlatformModel.EntitySubscription(),
      confirm_url: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceDetailsPeriod} */
  static InvoiceDetailsPeriod() {
    return Joi.object({
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceDetailsClient} */
  static InvoiceDetailsClient() {
    return Joi.object({
      address_lines: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      email: Joi.string().allow(""),
      phone: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceDetailsStatusTrail} */
  static InvoiceDetailsStatusTrail() {
    return Joi.object({
      _id: Joi.string().allow(""),
      value: Joi.string().allow(""),
      timestamp: Joi.string().allow(""),
    });
  }

  /** @returns {InvoicePaymentMethod} */
  static InvoicePaymentMethod() {
    return Joi.object({
      pg_payment_method_id: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceDetails} */
  static InvoiceDetails() {
    return Joi.object({
      period: BillingPlatformModel.InvoiceDetailsPeriod(),
      client: BillingPlatformModel.InvoiceDetailsClient(),
      auto_advance: Joi.boolean(),
      currency: Joi.string().allow(""),
      paid: Joi.boolean(),
      attemp: Joi.number(),
      _id: Joi.string().allow(""),
      collection_method: Joi.string().allow(""),
      subscriber_id: Joi.string().allow(""),
      invoice_url: Joi.string().allow(""),
      number: Joi.string().allow(""),
      pg_data: Joi.any(),
      receipt_number: Joi.string().allow(""),
      statement_descriptor: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      status_trail: Joi.array().items(
        BillingPlatformModel.InvoiceDetailsStatusTrail()
      ),
      subtotal: Joi.number(),
      total: Joi.number(),
      subscription: Joi.string().allow(""),
      next_action_time: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      hash_identifier: Joi.string().allow(""),
      payment_method: BillingPlatformModel.InvoicePaymentMethod(),
    });
  }

  /** @returns {InvoiceItemsPlanRecurring} */
  static InvoiceItemsPlanRecurring() {
    return Joi.object({
      interval: Joi.string().allow(""),
      interval_count: Joi.number(),
    });
  }

  /** @returns {InvoiceItemsPlan} */
  static InvoiceItemsPlan() {
    return Joi.object({
      recurring: BillingPlatformModel.InvoiceItemsPlanRecurring(),
      is_trial_plan: Joi.boolean(),
      plan_group: Joi.string().allow(""),
      tag_lines: Joi.array().items(Joi.string().allow("")),
      currency: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_visible: Joi.boolean(),
      trial_period: Joi.number(),
      addons: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      country: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      amount: Joi.number(),
      product_suite_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceItemsPeriod} */
  static InvoiceItemsPeriod() {
    return Joi.object({
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceItems} */
  static InvoiceItems() {
    return Joi.object({
      _id: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      plan: BillingPlatformModel.InvoiceItemsPlan(),
      name: Joi.string().allow(""),
      quantity: Joi.number(),
      description: Joi.string().allow(""),
      period: BillingPlatformModel.InvoiceItemsPeriod(),
      unit_amount: Joi.number(),
      amount: Joi.number(),
      type: Joi.string().allow(""),
      invoice_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
    });
  }

  /** @returns {Invoice} */
  static Invoice() {
    return Joi.object({
      invoice: BillingPlatformModel.InvoiceDetails(),
      invoice_items: Joi.array().items(BillingPlatformModel.InvoiceItems()),
    });
  }

  /** @returns {InvoicesDataClient} */
  static InvoicesDataClient() {
    return Joi.object({
      name: Joi.string().allow(""),
      email: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      address_lines: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {InvoicesDataPeriod} */
  static InvoicesDataPeriod() {
    return Joi.object({
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
    });
  }

  /** @returns {InvoicesDataPaymentMethod} */
  static InvoicesDataPaymentMethod() {
    return Joi.object({
      pg_payment_method_id: Joi.string().allow(""),
    });
  }

  /** @returns {InvoicesData} */
  static InvoicesData() {
    return Joi.object({
      _id: Joi.string().allow(""),
      client: BillingPlatformModel.InvoicesDataClient(),
      auto_advance: Joi.boolean(),
      currency: Joi.string().allow(""),
      paid: Joi.boolean(),
      attemp: Joi.number(),
      collection_method: Joi.string().allow(""),
      subscriber_id: Joi.string().allow(""),
      invoice_url: Joi.string().allow(""),
      number: Joi.string().allow(""),
      pg_data: Joi.any(),
      period: BillingPlatformModel.InvoicesDataPeriod(),
      receipt_number: Joi.string().allow(""),
      statement_descriptor: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      status_trail: Joi.array().items(
        BillingPlatformModel.InvoiceDetailsStatusTrail()
      ),
      subtotal: Joi.number(),
      total: Joi.number(),
      subscription: Joi.string().allow(""),
      next_action_time: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      hash_identifier: Joi.string().allow(""),
      payment_method: BillingPlatformModel.InvoicesDataPaymentMethod(),
      invoice_items: Joi.array().items(BillingPlatformModel.InvoiceItems()),
    });
  }

  /** @returns {Invoices} */
  static Invoices() {
    return Joi.object({
      data: Joi.array().items(BillingPlatformModel.InvoicesData()),
      start: Joi.number(),
      end: Joi.number(),
      limit: Joi.number(),
      page: Joi.number(),
      total: Joi.number(),
    });
  }

  /** @returns {Phone} */
  static Phone() {
    return Joi.object({
      phone_number: Joi.string().allow(""),
      phone_country_code: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionBillingAddress} */
  static SubscriptionBillingAddress() {
    return Joi.object({
      country: Joi.string().allow(""),
      state: Joi.string().allow(""),
      city: Joi.string().allow(""),
      line1: Joi.string().allow(""),
      line2: Joi.string().allow(""),
      postal_code: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionCustomer} */
  static SubscriptionCustomer() {
    return Joi.object({
      phone: BillingPlatformModel.Phone(),
      billing_address: BillingPlatformModel.SubscriptionBillingAddress(),
      _id: Joi.string().allow(""),
      unique_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      email: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      data: Joi.any(),
    });
  }

  /** @returns {SubscriptionCustomerCreate} */
  static SubscriptionCustomerCreate() {
    return Joi.object({
      phone: BillingPlatformModel.Phone(),
      billing_address: BillingPlatformModel.SubscriptionBillingAddress(),
      unique_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      email: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionCurrentPeriod} */
  static SubscriptionCurrentPeriod() {
    return Joi.object({
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionPauseCollection} */
  static SubscriptionPauseCollection() {
    return Joi.object({
      behavior: Joi.string().allow(""),
      resume_at: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionTrial} */
  static SubscriptionTrial() {
    return Joi.object({
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionInvoiceSettings} */
  static SubscriptionInvoiceSettings() {
    return Joi.object({
      generation: Joi.boolean(),
      charging: Joi.boolean(),
    });
  }

  /** @returns {Subscription} */
  static Subscription() {
    return Joi.object({
      current_period: BillingPlatformModel.SubscriptionCurrentPeriod(),
      pause_collection: BillingPlatformModel.SubscriptionPauseCollection(),
      trial: BillingPlatformModel.SubscriptionTrial(),
      invoice_settings: BillingPlatformModel.SubscriptionInvoiceSettings(),
      is_active: Joi.boolean(),
      cancel_at_period_end: Joi.boolean(),
      _id: Joi.string().allow(""),
      subscriber_id: Joi.string().allow(""),
      plan_id: Joi.string().allow(""),
      product_suite_id: Joi.string().allow(""),
      plan_data: BillingPlatformModel.Plan(),
      current_status: Joi.string().allow(""),
      collection_method: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      latest_invoice: Joi.string().allow(""),
      channel_type: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionStatus} */
  static SubscriptionStatus() {
    return Joi.object({
      is_enabled: Joi.boolean(),
      subscription: BillingPlatformModel.Subscription(),
      latest_invoice: BillingPlatformModel.InvoicesData(),
      next_plan: BillingPlatformModel.Plan(),
      current_subscriptions: Joi.array().items(
        BillingPlatformModel.Subscription()
      ),
      mandate_amount: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionLimitApplication} */
  static SubscriptionLimitApplication() {
    return Joi.object({
      enabled: Joi.boolean(),
      hard_limit: Joi.number(),
      soft_limit: Joi.number(),
    });
  }

  /** @returns {SubscriptionLimitMarketplace} */
  static SubscriptionLimitMarketplace() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {SubscriptionLimitOtherPlatform} */
  static SubscriptionLimitOtherPlatform() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {SubscriptionLimitTeam} */
  static SubscriptionLimitTeam() {
    return Joi.object({
      limit: Joi.number(),
    });
  }

  /** @returns {SubscriptionLimitProducts} */
  static SubscriptionLimitProducts() {
    return Joi.object({
      bulk: Joi.boolean(),
      limit: Joi.number(),
    });
  }

  /** @returns {SubscriptionLimitExtensions} */
  static SubscriptionLimitExtensions() {
    return Joi.object({
      enabled: Joi.boolean(),
      limit: Joi.number(),
    });
  }

  /** @returns {SubscriptionLimitIntegrations} */
  static SubscriptionLimitIntegrations() {
    return Joi.object({
      enabled: Joi.boolean(),
      limit: Joi.number(),
    });
  }

  /** @returns {SubscriptionLimit} */
  static SubscriptionLimit() {
    return Joi.object({
      application: BillingPlatformModel.SubscriptionLimitApplication(),
      marketplace: BillingPlatformModel.SubscriptionLimitMarketplace(),
      other_platform: BillingPlatformModel.SubscriptionLimitOtherPlatform(),
      team: BillingPlatformModel.SubscriptionLimitTeam(),
      products: BillingPlatformModel.SubscriptionLimitProducts(),
      extensions: BillingPlatformModel.SubscriptionLimitExtensions(),
      integrations: BillingPlatformModel.SubscriptionLimitIntegrations(),
      is_trial_plan: Joi.boolean(),
    });
  }

  /** @returns {SubscriptionActivateReq} */
  static SubscriptionActivateReq() {
    return Joi.object({
      unique_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      product_suite: Joi.string().allow(""),
      plan_id: Joi.string().allow(""),
      payment_method: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionActivateRes} */
  static SubscriptionActivateRes() {
    return Joi.object({
      success: Joi.boolean(),
      data: BillingPlatformModel.Subscription(),
    });
  }

  /** @returns {CancelSubscriptionReq} */
  static CancelSubscriptionReq() {
    return Joi.object({
      unique_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      product_suite: Joi.string().allow(""),
      subscription_id: Joi.string().allow(""),
    });
  }

  /** @returns {CancelSubscriptionRes} */
  static CancelSubscriptionRes() {
    return Joi.object({
      success: Joi.boolean(),
      data: BillingPlatformModel.Subscription(),
    });
  }

  /** @returns {PlanStatusUpdateReq} */
  static PlanStatusUpdateReq() {
    return Joi.object({
      plan_id: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      seller_status: Joi.string().allow(""),
    });
  }

  /** @returns {SunscribePlan} */
  static SunscribePlan() {
    return Joi.object({
      entity_type: Joi.string().allow(""),
      collection_type: Joi.string().allow(""),
      plan_id: Joi.string().allow(""),
      callback_url: Joi.string().allow(""),
      meta: BillingPlatformModel.Meta(),
    });
  }

  /** @returns {Meta} */
  static Meta() {
    return Joi.object({
      subscribe: Joi.boolean(),
      is_custom_plan: Joi.boolean(),
      is_plan_upgrade: Joi.boolean(),
    });
  }

  /** @returns {SubscribePlanRes} */
  static SubscribePlanRes() {
    return Joi.object({
      redirect_url: Joi.string().allow(""),
      transaction_id: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      meta: BillingPlatformModel.Meta(),
    });
  }

  /** @returns {Features} */
  static Features() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      description: Joi.string().allow(""),
      group: Joi.string().allow(""),
      enabled: Joi.boolean(),
      display_text: Joi.string().allow(""),
    });
  }

  /** @returns {FeeComponents} */
  static FeeComponents() {
    return Joi.object({
      brand: Joi.array().items(Joi.string().allow("")),
      location: Joi.array().items(Joi.string().allow("")),
      channel: Joi.array().items(Joi.any()),
      business_lead: Joi.string().allow(""),
      settlement_type: Joi.string().allow(""),
      settle_cycle_period: Joi.any(),
      components: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {Details} */
  static Details() {
    return Joi.object({
      fee_components: Joi.array().items(BillingPlatformModel.FeeComponents()),
      features: Joi.array().items(BillingPlatformModel.Features()),
    });
  }

  /** @returns {EntityResponse} */
  static EntityResponse() {
    return Joi.object({
      success: Joi.boolean(),
      page: Joi.number(),
      page_size: Joi.number(),
      items: Joi.array().items(BillingPlatformModel.Details()),
    });
  }
}
module.exports = BillingPlatformModel;
