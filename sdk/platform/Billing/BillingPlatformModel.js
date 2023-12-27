const Joi = require("joi");

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
 * @typedef Details
 * @property {Features[]} [features]
 * @property {FeeComponents[]} [fee_components]
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
 * @typedef EntityResponse
 * @property {Details[]} [items]
 * @property {number} [page]
 * @property {number} [page_size]
 * @property {boolean} [success]
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
 * @typedef Features
 * @property {string} [description]
 * @property {string} [display_text]
 * @property {boolean} [enabled]
 * @property {string} [group]
 * @property {string} [name]
 * @property {string} [slug]
 */

/**
 * @typedef FeeComponents
 * @property {string[]} [brand]
 * @property {string} [business_lead]
 * @property {Object[]} [channel]
 * @property {Object[]} [components]
 * @property {string[]} [location]
 * @property {Object} [settle_cycle_period]
 * @property {string} [settlement_type]
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
 * @typedef Meta
 * @property {boolean} [is_custom_plan]
 * @property {boolean} [is_plan_upgrade]
 * @property {boolean} [subscribe]
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
 * @typedef PlanStatusUpdateReq
 * @property {string} [plan_id]
 * @property {string} [reason]
 * @property {string} [seller_status]
 */

/**
 * @typedef ResourceNotFound
 * @property {string} [message] - Resource not found with {id}
 */

/**
 * @typedef SubscribePlanRes
 * @property {string} [current_status]
 * @property {Meta} [meta]
 * @property {string} [redirect_url]
 * @property {string} [transaction_id]
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
 * @typedef SunscribePlan
 * @property {string} [callback_url]
 * @property {string} [collection_type]
 * @property {string} [entity_type]
 * @property {Meta} [meta]
 * @property {string} [plan_id]
 */

class BillingPlatformModel {
  /** @returns {BadRequest} */
  static BadRequest() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CancelSubscriptionReq} */
  static CancelSubscriptionReq() {
    return Joi.object({
      product_suite: Joi.string().allow(""),
      subscription_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      unique_id: Joi.string().allow(""),
    });
  }

  /** @returns {CancelSubscriptionRes} */
  static CancelSubscriptionRes() {
    return Joi.object({
      data: BillingPlatformModel.Subscription(),
      success: Joi.boolean(),
    });
  }

  /** @returns {ChargeLineItem} */
  static ChargeLineItem() {
    return Joi.object({
      capped_amount: Joi.number(),
      is_test: Joi.boolean(),
      metadata: Joi.any(),
      name: Joi.string().allow("").required(),
      price: BillingPlatformModel.EntityChargePrice().required(),
      pricing_type: Joi.string().allow("").required(),
      recurring: BillingPlatformModel.EntityChargeRecurring(),
      term: Joi.string().allow("").required(),
      trial_days: Joi.number(),
    });
  }

  /** @returns {CheckValidityResponse} */
  static CheckValidityResponse() {
    return Joi.object({
      discount_amount: Joi.number(),
      is_valid: Joi.boolean(),
    });
  }

  /** @returns {CreateOneTimeCharge} */
  static CreateOneTimeCharge() {
    return Joi.object({
      charge: BillingPlatformModel.OneTimeChargeItem().required(),
      is_test: Joi.boolean(),
      name: Joi.string().allow("").required(),
      return_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreateOneTimeChargeResponse} */
  static CreateOneTimeChargeResponse() {
    return Joi.object({
      charge: BillingPlatformModel.OneTimeChargeEntity(),
      confirm_url: Joi.string().allow(""),
    });
  }

  /** @returns {CreateSubscriptionCharge} */
  static CreateSubscriptionCharge() {
    return Joi.object({
      is_test: Joi.boolean(),
      line_items: Joi.array()
        .items(BillingPlatformModel.ChargeLineItem())
        .required(),
      name: Joi.string().allow("").required(),
      return_url: Joi.string().allow("").required(),
      trial_days: Joi.number(),
    });
  }

  /** @returns {CreateSubscriptionResponse} */
  static CreateSubscriptionResponse() {
    return Joi.object({
      confirm_url: Joi.string().allow(""),
      subscription: BillingPlatformModel.EntitySubscription(),
    });
  }

  /** @returns {CurrentPeriod} */
  static CurrentPeriod() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
    });
  }

  /** @returns {Details} */
  static Details() {
    return Joi.object({
      features: Joi.array().items(BillingPlatformModel.Features()),
      fee_components: Joi.array().items(BillingPlatformModel.FeeComponents()),
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

  /** @returns {EntityResponse} */
  static EntityResponse() {
    return Joi.object({
      items: Joi.array().items(BillingPlatformModel.Details()),
      page: Joi.number(),
      page_size: Joi.number(),
      success: Joi.boolean(),
    });
  }

  /** @returns {EntitySubscription} */
  static EntitySubscription() {
    return Joi.object({
      _id: Joi.string().allow(""),
      activated_on: Joi.string().allow(""),
      cancelled_on: Joi.string().allow(""),
      company_id: Joi.number(),
      line_items: Joi.array().items(BillingPlatformModel.SubscriptionCharge()),
      metadata: Joi.any(),
      name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      trial_days: Joi.number(),
      trial_period: BillingPlatformModel.SubscriptionTrialPeriod(),
    });
  }

  /** @returns {Features} */
  static Features() {
    return Joi.object({
      description: Joi.string().allow(""),
      display_text: Joi.string().allow(""),
      enabled: Joi.boolean(),
      group: Joi.string().allow(""),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {FeeComponents} */
  static FeeComponents() {
    return Joi.object({
      brand: Joi.array().items(Joi.string().allow("")),
      business_lead: Joi.string().allow(""),
      channel: Joi.array().items(Joi.any()),
      components: Joi.array().items(Joi.any()),
      location: Joi.array().items(Joi.string().allow("")),
      settle_cycle_period: Joi.any(),
      settlement_type: Joi.string().allow(""),
    });
  }

  /** @returns {InternalServerError} */
  static InternalServerError() {
    return Joi.object({
      code: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {Invoice} */
  static Invoice() {
    return Joi.object({
      invoice: BillingPlatformModel.InvoiceDetails(),
      invoice_items: Joi.array().items(BillingPlatformModel.InvoiceItems()),
    });
  }

  /** @returns {InvoiceDetails} */
  static InvoiceDetails() {
    return Joi.object({
      _id: Joi.string().allow(""),
      attemp: Joi.number(),
      auto_advance: Joi.boolean(),
      client: BillingPlatformModel.InvoiceDetailsClient(),
      collection_method: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      hash_identifier: Joi.string().allow(""),
      invoice_url: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      next_action_time: Joi.string().allow(""),
      number: Joi.string().allow(""),
      paid: Joi.boolean(),
      payment_method: BillingPlatformModel.InvoicePaymentMethod(),
      period: BillingPlatformModel.InvoiceDetailsPeriod(),
      pg_data: Joi.any(),
      receipt_number: Joi.string().allow(""),
      statement_descriptor: Joi.string().allow(""),
      status_trail: Joi.array().items(
        BillingPlatformModel.InvoiceDetailsStatusTrail()
      ),
      subscriber_id: Joi.string().allow(""),
      subscription: Joi.string().allow(""),
      subtotal: Joi.number(),
      total: Joi.number(),
    });
  }

  /** @returns {InvoiceDetailsClient} */
  static InvoiceDetailsClient() {
    return Joi.object({
      address_lines: Joi.array().items(Joi.string().allow("")),
      email: Joi.string().allow(""),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceDetailsPeriod} */
  static InvoiceDetailsPeriod() {
    return Joi.object({
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceDetailsStatusTrail} */
  static InvoiceDetailsStatusTrail() {
    return Joi.object({
      _id: Joi.string().allow(""),
      timestamp: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceItems} */
  static InvoiceItems() {
    return Joi.object({
      _id: Joi.string().allow(""),
      amount: Joi.number(),
      created_at: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      description: Joi.string().allow(""),
      invoice_id: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      period: BillingPlatformModel.InvoiceItemsPeriod(),
      plan: BillingPlatformModel.InvoiceItemsPlan(),
      quantity: Joi.number(),
      type: Joi.string().allow(""),
      unit_amount: Joi.number(),
    });
  }

  /** @returns {InvoiceItemsPeriod} */
  static InvoiceItemsPeriod() {
    return Joi.object({
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceItemsPlan} */
  static InvoiceItemsPlan() {
    return Joi.object({
      _id: Joi.string().allow(""),
      addons: Joi.array().items(Joi.string().allow("")),
      amount: Joi.number(),
      country: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_trial_plan: Joi.boolean(),
      is_visible: Joi.boolean(),
      modified_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      plan_group: Joi.string().allow(""),
      product_suite_id: Joi.string().allow(""),
      recurring: BillingPlatformModel.InvoiceItemsPlanRecurring(),
      tag_lines: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      trial_period: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceItemsPlanRecurring} */
  static InvoiceItemsPlanRecurring() {
    return Joi.object({
      interval: Joi.string().allow(""),
      interval_count: Joi.number(),
    });
  }

  /** @returns {InvoicePaymentMethod} */
  static InvoicePaymentMethod() {
    return Joi.object({
      pg_payment_method_id: Joi.string().allow(""),
    });
  }

  /** @returns {Invoices} */
  static Invoices() {
    return Joi.object({
      data: Joi.array().items(BillingPlatformModel.InvoicesData()),
      end: Joi.number(),
      limit: Joi.number(),
      page: Joi.number(),
      start: Joi.number(),
      total: Joi.number(),
    });
  }

  /** @returns {InvoicesData} */
  static InvoicesData() {
    return Joi.object({
      _id: Joi.string().allow(""),
      attemp: Joi.number(),
      auto_advance: Joi.boolean(),
      client: BillingPlatformModel.InvoicesDataClient(),
      collection_method: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      hash_identifier: Joi.string().allow(""),
      invoice_items: Joi.array().items(BillingPlatformModel.InvoiceItems()),
      invoice_url: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      next_action_time: Joi.string().allow(""),
      number: Joi.string().allow(""),
      paid: Joi.boolean(),
      payment_method: BillingPlatformModel.InvoicesDataPaymentMethod(),
      period: BillingPlatformModel.InvoicesDataPeriod(),
      pg_data: Joi.any(),
      receipt_number: Joi.string().allow(""),
      statement_descriptor: Joi.string().allow(""),
      status_trail: Joi.array().items(
        BillingPlatformModel.InvoiceDetailsStatusTrail()
      ),
      subscriber_id: Joi.string().allow(""),
      subscription: Joi.string().allow(""),
      subtotal: Joi.number(),
      total: Joi.number(),
    });
  }

  /** @returns {InvoicesDataClient} */
  static InvoicesDataClient() {
    return Joi.object({
      address_lines: Joi.array().items(Joi.string().allow("")),
      email: Joi.string().allow(""),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
    });
  }

  /** @returns {InvoicesDataPaymentMethod} */
  static InvoicesDataPaymentMethod() {
    return Joi.object({
      pg_payment_method_id: Joi.string().allow(""),
    });
  }

  /** @returns {InvoicesDataPeriod} */
  static InvoicesDataPeriod() {
    return Joi.object({
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
    });
  }

  /** @returns {Meta} */
  static Meta() {
    return Joi.object({
      is_custom_plan: Joi.boolean(),
      is_plan_upgrade: Joi.boolean(),
      subscribe: Joi.boolean(),
    });
  }

  /** @returns {OneTimeChargeEntity} */
  static OneTimeChargeEntity() {
    return Joi.object({
      _id: Joi.string().allow(""),
      activated_on: Joi.string().allow(""),
      cancelled_on: Joi.string().allow(""),
      entity_id: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      is_test: Joi.boolean(),
      meta: Joi.any(),
      metadata: Joi.any(),
      name: Joi.string().allow(""),
      price: BillingPlatformModel.EntityChargePrice(),
      pricing_type: Joi.string().allow(""),
      return_url: Joi.string().allow(""),
      status: Joi.string().allow(""),
      subscriber_id: Joi.string().allow(""),
    });
  }

  /** @returns {OneTimeChargeItem} */
  static OneTimeChargeItem() {
    return Joi.object({
      capped_amount: Joi.number(),
      is_test: Joi.boolean(),
      metadata: Joi.any(),
      name: Joi.string().allow("").required(),
      price: BillingPlatformModel.EntityChargePrice().required(),
      pricing_type: Joi.string().allow("").required(),
      term: Joi.string().allow(""),
    });
  }

  /** @returns {Phone} */
  static Phone() {
    return Joi.object({
      phone_country_code: Joi.string().allow(""),
      phone_number: Joi.string().allow(""),
    });
  }

  /** @returns {Plan} */
  static Plan() {
    return Joi.object({
      _id: Joi.string().allow(""),
      addons: Joi.array().items(Joi.string().allow("")),
      amount: Joi.number(),
      country: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_trial_plan: Joi.boolean(),
      is_visible: Joi.boolean(),
      modified_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      plan_group: Joi.string().allow(""),
      product_suite_id: Joi.string().allow(""),
      recurring: BillingPlatformModel.PlanRecurring(),
      tag_lines: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      trial_period: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {PlanRecurring} */
  static PlanRecurring() {
    return Joi.object({
      interval: Joi.string().allow(""),
      interval_count: Joi.number(),
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

  /** @returns {ResourceNotFound} */
  static ResourceNotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {SubscribePlanRes} */
  static SubscribePlanRes() {
    return Joi.object({
      current_status: Joi.string().allow(""),
      meta: BillingPlatformModel.Meta(),
      redirect_url: Joi.string().allow(""),
      transaction_id: Joi.string().allow(""),
    });
  }

  /** @returns {Subscription} */
  static Subscription() {
    return Joi.object({
      _id: Joi.string().allow(""),
      cancel_at_period_end: Joi.boolean(),
      channel_type: Joi.string().allow(""),
      collection_method: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      current_period: BillingPlatformModel.SubscriptionCurrentPeriod(),
      current_status: Joi.string().allow(""),
      invoice_settings: BillingPlatformModel.SubscriptionInvoiceSettings(),
      is_active: Joi.boolean(),
      latest_invoice: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      pause_collection: BillingPlatformModel.SubscriptionPauseCollection(),
      plan_data: BillingPlatformModel.Plan(),
      plan_id: Joi.string().allow(""),
      product_suite_id: Joi.string().allow(""),
      subscriber_id: Joi.string().allow(""),
      trial: BillingPlatformModel.SubscriptionTrial(),
    });
  }

  /** @returns {SubscriptionActivateReq} */
  static SubscriptionActivateReq() {
    return Joi.object({
      payment_method: Joi.string().allow(""),
      plan_id: Joi.string().allow(""),
      product_suite: Joi.string().allow(""),
      type: Joi.string().allow(""),
      unique_id: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionActivateRes} */
  static SubscriptionActivateRes() {
    return Joi.object({
      data: BillingPlatformModel.Subscription(),
      success: Joi.boolean(),
    });
  }

  /** @returns {SubscriptionBillingAddress} */
  static SubscriptionBillingAddress() {
    return Joi.object({
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      line1: Joi.string().allow(""),
      line2: Joi.string().allow(""),
      postal_code: Joi.string().allow(""),
      state: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionCharge} */
  static SubscriptionCharge() {
    return Joi.object({
      _id: Joi.string().allow(""),
      activated_on: Joi.string().allow(""),
      billing_date: Joi.string().allow(""),
      cancelled_on: Joi.string().allow(""),
      capped_amount: Joi.number(),
      current_period: BillingPlatformModel.CurrentPeriod(),
      is_test: Joi.boolean(),
      metadata: Joi.any(),
      name: Joi.string().allow(""),
      price: BillingPlatformModel.EntityChargePrice(),
      pricing_type: Joi.string().allow(""),
      recurring: BillingPlatformModel.EntityChargeRecurring(),
      status: Joi.string().allow(""),
      term: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionCurrentPeriod} */
  static SubscriptionCurrentPeriod() {
    return Joi.object({
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionCustomer} */
  static SubscriptionCustomer() {
    return Joi.object({
      _id: Joi.string().allow(""),
      billing_address: BillingPlatformModel.SubscriptionBillingAddress(),
      created_at: Joi.string().allow(""),
      data: Joi.any(),
      email: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      phone: BillingPlatformModel.Phone(),
      type: Joi.string().allow(""),
      unique_id: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionCustomerCreate} */
  static SubscriptionCustomerCreate() {
    return Joi.object({
      billing_address: BillingPlatformModel.SubscriptionBillingAddress(),
      email: Joi.string().allow(""),
      name: Joi.string().allow(""),
      phone: BillingPlatformModel.Phone(),
      type: Joi.string().allow(""),
      unique_id: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionInvoiceSettings} */
  static SubscriptionInvoiceSettings() {
    return Joi.object({
      charging: Joi.boolean(),
      generation: Joi.boolean(),
    });
  }

  /** @returns {SubscriptionLimit} */
  static SubscriptionLimit() {
    return Joi.object({
      application: BillingPlatformModel.SubscriptionLimitApplication(),
      extensions: BillingPlatformModel.SubscriptionLimitExtensions(),
      integrations: BillingPlatformModel.SubscriptionLimitIntegrations(),
      is_trial_plan: Joi.boolean(),
      marketplace: BillingPlatformModel.SubscriptionLimitMarketplace(),
      other_platform: BillingPlatformModel.SubscriptionLimitOtherPlatform(),
      products: BillingPlatformModel.SubscriptionLimitProducts(),
      team: BillingPlatformModel.SubscriptionLimitTeam(),
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

  /** @returns {SubscriptionLimitProducts} */
  static SubscriptionLimitProducts() {
    return Joi.object({
      bulk: Joi.boolean(),
      limit: Joi.number(),
    });
  }

  /** @returns {SubscriptionLimitTeam} */
  static SubscriptionLimitTeam() {
    return Joi.object({
      limit: Joi.number(),
    });
  }

  /** @returns {SubscriptionPauseCollection} */
  static SubscriptionPauseCollection() {
    return Joi.object({
      behavior: Joi.string().allow(""),
      resume_at: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionStatus} */
  static SubscriptionStatus() {
    return Joi.object({
      current_subscriptions: Joi.array().items(
        BillingPlatformModel.Subscription()
      ),
      is_enabled: Joi.boolean(),
      latest_invoice: BillingPlatformModel.InvoicesData(),
      mandate_amount: Joi.string().allow(""),
      next_plan: BillingPlatformModel.Plan(),
      subscription: BillingPlatformModel.Subscription(),
    });
  }

  /** @returns {SubscriptionTrial} */
  static SubscriptionTrial() {
    return Joi.object({
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionTrialPeriod} */
  static SubscriptionTrialPeriod() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
    });
  }

  /** @returns {SunscribePlan} */
  static SunscribePlan() {
    return Joi.object({
      callback_url: Joi.string().allow(""),
      collection_type: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      meta: BillingPlatformModel.Meta(),
      plan_id: Joi.string().allow(""),
    });
  }
}
module.exports = BillingPlatformModel;
