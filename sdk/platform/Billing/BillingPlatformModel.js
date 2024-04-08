const Joi = require("joi");

/**
 * @typedef PaymentCollectRes
 * @property {string} [transaction_id]
 * @property {string} [current_status]
 */

/**
 * @typedef SubscriptionChargeRes
 * @property {string} [_id]
 * @property {string} [product_suit_id]
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 * @property {string} [name]
 * @property {string} [status]
 * @property {number} [trial_days]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {boolean} [is_test]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [company_id]
 * @property {Object[]} [line_items]
 */

/**
 * @typedef PostDowngradeRes
 * @property {boolean} [success]
 * @property {DowngradeRes} [data]
 */

/**
 * @typedef DowngradeRes
 * @property {string} [_id]
 * @property {string} [status]
 * @property {string} [subscriber_id]
 * @property {boolean} [activated]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [plan_id]
 * @property {string} [reason]
 * @property {string} [request_user_id]
 * @property {string} [subscription_id]
 */

/**
 * @typedef PaymentStatusData
 * @property {string} [_id]
 * @property {string} [journey]
 * @property {Object[]} [webhook_response]
 * @property {string} [aggregator_status]
 * @property {string} [current_status]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {number} [__v]
 * @property {string} [aggregator_order_id]
 */

/**
 * @typedef PaymentStatusResponse
 * @property {string} [status]
 * @property {PaymentStatusData} [data]
 */

/**
 * @typedef BadRequest
 * @property {string} [message] - Failure message.
 */

/**
 * @typedef ResourceNotFound
 * @property {string} [message] - Resource not found with {id}
 * @property {Object} [code]
 * @property {Object} [success]
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
 * @typedef PlanMeta
 * @property {string} [seller_status]
 * @property {string} [company]
 * @property {string} [plan_platform_display_name]
 */

/**
 * @typedef Plan
 * @property {Object[]} [fee_components]
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
 * @property {Taxation} [taxation]
 * @property {OneTimeFees} [one_time_fees]
 * @property {CreditLine} [credit_line]
 * @property {string} [current_status]
 * @property {string} [channel_type]
 * @property {Object[]} [company_ids]
 * @property {string} [platform]
 * @property {string} [activated_on]
 * @property {PlanMeta} [meta]
 * @property {string} [created_by]
 */

/**
 * @typedef SubscriptionTrialPeriod
 * @property {string} [start_date]
 * @property {string} [end_date]
 */

/**
 * @typedef EntityChargePrice
 * @property {number} [amount] - Amount for price. Minimum value 1
 * @property {string} [currency_code]
 */

/**
 * @typedef EntityChargeRecurring
 * @property {string} [interval]
 */

/**
 * @typedef ChargeLineItem
 * @property {string} [name]
 * @property {string} [term]
 * @property {string} [pricing_type]
 * @property {EntityChargePrice} [price]
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount]
 * @property {number} [trial_days]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */

/**
 * @typedef CreateSubscriptionCharge
 * @property {string} [name]
 * @property {number} [trial_days]
 * @property {ChargeLineItem[]} [line_items]
 * @property {boolean} [is_test]
 * @property {string} [return_url]
 */

/**
 * @typedef OneTimeChargeItem
 * @property {string} [name]
 * @property {string} [term]
 * @property {string} [pricing_type]
 * @property {EntityChargePrice} [price]
 * @property {number} [capped_amount]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */

/**
 * @typedef CreateOneTimeCharge
 * @property {string} [name]
 * @property {OneTimeChargeItem} [charge]
 * @property {boolean} [is_test]
 * @property {string} [return_url]
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
 * @typedef ChargeRecurring
 * @property {string} [interval]
 * @property {number} [interval_time]
 */

/**
 * @typedef ChargeDetails
 * @property {string} [_id]
 * @property {string} [entity_type]
 * @property {string} [entity_id]
 * @property {string} [name]
 * @property {string} [term]
 * @property {string} [charge_type]
 * @property {string} [pricing_type]
 * @property {EntityChargePrice} [price]
 * @property {ChargeRecurring} [recurring]
 * @property {string} [status]
 * @property {number} [capped_amount]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {string} [billing_date]
 * @property {SubscriptionTrialPeriod} [current_period]
 * @property {string} [modified_at]
 * @property {string} [created_at]
 * @property {boolean} [is_test]
 * @property {string} [company_id]
 * @property {Object} [meta]
 * @property {number} [__v]
 */

/**
 * @typedef OneTimeChargeEntity
 * @property {string} [term]
 * @property {string} [charge_type]
 * @property {number} [capped_amount]
 * @property {string} [billing_date]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {number} [__v]
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
 * @property {Charge} [charge]
 * @property {string} [confirm_url]
 */

/**
 * @typedef Charge
 * @property {OneTimeChargeEntity} [final_charge]
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
 * @property {Object} [documents]
 * @property {Object} [payment]
 * @property {number} [old_settlement]
 * @property {number} [credit_balance]
 * @property {Object} [discount]
 * @property {Object} [taxation]
 * @property {number} [credit_note_amount]
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
 * @property {Object} [documents]
 * @property {boolean} [consent]
 * @property {boolean} [comms]
 * @property {number} [credit_balance]
 * @property {BusinessCountryInfo} [business_country_info]
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
 * @property {Object} [meta]
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
 * @property {boolean} [freezed]
 * @property {string} [cancel_at]
 * @property {string} [canceled_at]
 */

/**
 * @typedef SubscriptionStatus
 * @property {boolean} [is_enabled]
 * @property {Subscription} [subscription]
 * @property {InvoicesData} [latest_invoice]
 * @property {Plan} [next_plan]
 * @property {Subscription[]} [current_subscriptions]
 * @property {number} [mandate_amount]
 * @property {string} [message]
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
 * @typedef IntentReq
 * @property {string} [unique_external_id]
 * @property {string} [plan_id]
 */

/**
 * @typedef PutIntentReq
 * @property {string} [unique_external_id]
 * @property {string} [setup_intent_id]
 * @property {string} [payment_method_id]
 * @property {boolean} [set_default]
 */

/**
 * @typedef SubscriptionActivateReq
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [product_suite]
 * @property {string} [plan_id]
 * @property {string} [payment_method]
 * @property {string} [subscription_id]
 * @property {string} [coupon]
 * @property {Object} [meta]
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
 * @typedef EntityDetail
 * @property {string} [entity]
 * @property {Subscription} [item]
 */

/**
 * @typedef PaymentOptions
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [logo]
 * @property {string} [aggregator_id]
 * @property {string} [aggregator]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {number} [__v]
 */

/**
 * @typedef VerifyPaymentReq
 * @property {string} [razorpay_payment_id]
 * @property {string} [razorpay_order_id]
 * @property {string} [razorpay_signature]
 * @property {number} [status_code]
 * @property {string} [provider_type]
 */

/**
 * @typedef Documents
 * @property {string} [pan]
 * @property {string} [gst]
 */

/**
 * @typedef BillingAddress
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [line1]
 * @property {string} [line2]
 * @property {string} [postal_code]
 * @property {string} [country_code]
 */

/**
 * @typedef Currency
 * @property {string} [code]
 * @property {string} [symbol]
 * @property {string} [name]
 */

/**
 * @typedef BusinessCountryInfo
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {Currency} [currency]
 * @property {string} [timezone]
 */

/**
 * @typedef SubscriberData
 * @property {boolean} [pg_user_exists]
 * @property {Object} [id]
 * @property {string} [pg_customer_id]
 * @property {string} [default_payment_method]
 */

/**
 * @typedef Subscriber
 * @property {Documents} [documents]
 * @property {Object} [phone]
 * @property {BillingAddress} [billing_address]
 * @property {boolean} [consent]
 * @property {boolean} [comms]
 * @property {string} [_id]
 * @property {string} [type]
 * @property {string} [unique_id]
 * @property {string} [name]
 * @property {string} [email]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {number} [credit_balance]
 * @property {SubscriberData} [data]
 */

/**
 * @typedef Author
 * @property {Object} [modified_by_details]
 */

/**
 * @typedef EndingBalance
 * @property {number} [amount]
 * @property {string} [old_entry_ref]
 */

/**
 * @typedef PaymentData
 * @property {string} [transaction_id]
 * @property {string} [aggregator]
 * @property {string} [aggregator_order_id]
 */

/**
 * @typedef CreditTransaction
 * @property {Object} [entity]
 * @property {Author} [author]
 * @property {string} [_id]
 * @property {number} [amount]
 * @property {string} [currency]
 * @property {string} [subscriber_id]
 * @property {string} [description]
 * @property {Object} [is_test]
 * @property {EndingBalance} [ending_balance]
 * @property {PaymentData} [payment]
 * @property {string} [type]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef VerifyPaymentData
 * @property {boolean} [success]
 * @property {Subscriber} [subscriber]
 * @property {CreditTransaction} [credit_transaction]
 */

/**
 * @typedef VerifyPaymentRes
 * @property {string} [status]
 * @property {VerifyPaymentData} [data]
 */

/**
 * @typedef DefaultMerchants
 * @property {string} [stripe]
 */

/**
 * @typedef GlobalSettingsPayment
 * @property {DefaultMerchants} [default_merchants]
 */

/**
 * @typedef GlobalSettingsData
 * @property {GlobalSettingsPayment} [payment]
 * @property {boolean} [freeze_panel]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef GlobalSettings
 * @property {string} [status]
 * @property {GlobalSettingsData} [data]
 */

/**
 * @typedef MethodChecks
 * @property {string} [address_line1_check]
 * @property {string} [address_postal_code_check]
 * @property {string} [cvc_check]
 */

/**
 * @typedef MethodNetworks
 * @property {string[]} [available]
 * @property {string} [preferred]
 */

/**
 * @typedef MethodSecureUsage
 * @property {boolean} [supported]
 */

/**
 * @typedef MethodDetails
 * @property {string} [id]
 * @property {string} [type]
 * @property {boolean} [mandate_available]
 * @property {number} [mandate_amount]
 * @property {string} [pg_payment_method_id]
 * @property {boolean} [is_default]
 * @property {SubscriptionMethodData} [data]
 */

/**
 * @typedef SubscriptionMethodData
 * @property {string} [brand]
 * @property {MethodChecks} [checks]
 * @property {string} [country]
 * @property {number} [exp_month]
 * @property {number} [exp_year]
 * @property {string} [fingerprint]
 * @property {string} [funding]
 * @property {string} [generated_from]
 * @property {string} [last4]
 * @property {MethodNetworks} [networks]
 * @property {MethodSecureUsage} [three_d_secure_usage]
 * @property {string} [wallet]
 * @property {string} [name]
 * @property {boolean} [is_default]
 */

/**
 * @typedef SubscriptionMethods
 * @property {boolean} [success]
 * @property {MethodDetails[]} [data]
 */

/**
 * @typedef ConfigPublicKey
 * @property {string} [public_key]
 */

/**
 * @typedef ConfigRes
 * @property {boolean} [success]
 * @property {string} [aggregator]
 * @property {ConfigPublicKey} [config]
 */

/**
 * @typedef PlanChangeData
 * @property {number} [total]
 * @property {number} [credit_note_amount]
 * @property {number} [settlement]
 * @property {number} [taxable_amount]
 * @property {number} [gst_amount]
 * @property {number} [gross_total]
 * @property {number} [gst]
 */

/**
 * @typedef PlanChangeDetails
 * @property {string} [status]
 * @property {PlanChangeData} [data]
 */

/**
 * @typedef TransactionMeta
 * @property {string} [invoice_id]
 */

/**
 * @typedef PaymentTransactionDetails
 * @property {Object} [aggregator]
 * @property {string} [currency]
 * @property {string} [current_status]
 * @property {string} [_id]
 * @property {string} [subscriber_id]
 * @property {number} [amount]
 * @property {string} [entity_type]
 * @property {string} [collection_type]
 * @property {TransactionMeta} [meta]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef PaymentItems
 * @property {string} [name]
 * @property {string} [code]
 * @property {string} [aggregator]
 */

/**
 * @typedef GetPaymentOptions
 * @property {PaymentItems[]} [payment_options]
 */

/**
 * @typedef TopupReq
 * @property {number} [amount]
 * @property {string} [currency]
 * @property {string} [provider_type]
 */

/**
 * @typedef SetupMandateReq
 * @property {string} [intent_id]
 * @property {string} [payment_method_id]
 */

/**
 * @typedef SetupPaymentReq
 * @property {string} [payment_method]
 * @property {string} [payment_id]
 * @property {string} [plan_id]
 * @property {string} [invoice_id]
 */

/**
 * @typedef SubscriptionRenewReq
 * @property {string} [invoice_id]
 * @property {string} [entity_type]
 * @property {string} [collection_type]
 * @property {string} [callback_url]
 * @property {RenewMeta} [meta]
 */

/**
 * @typedef RenewMeta
 * @property {boolean} [invoice_payment]
 * @property {boolean} [renew]
 */

/**
 * @typedef SubscriptionMethodsReq
 * @property {string} [unique_external_id]
 * @property {string} [setup_intent_id]
 * @property {string} [pg_payment_method_id]
 * @property {boolean} [set_default]
 */

/**
 * @typedef CreditTransactionResponse
 * @property {number} [total] - Total number of transactions
 * @property {number} [limit] - Maximum number of transactions per page
 * @property {number} [page] - Current page number
 * @property {number} [pages] - Total number of pages
 * @property {CreditTransaction[]} [items]
 */

/**
 * @typedef DowngradePlanReq
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [product_suite]
 * @property {string} [plan_id]
 * @property {string} [reason]
 * @property {string} [platform]
 */

/**
 * @typedef Taxation
 * @property {number} [gst] - GST percentage
 */

/**
 * @typedef OneTimeFees
 * @property {number} [developement]
 * @property {number} [marketing]
 */

/**
 * @typedef CreditLine
 * @property {boolean} [is_active]
 */

/**
 * @typedef StatusMessage
 * @property {string} [status]
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {string} [code]
 */

/**
 * @typedef PaymentCollectReq
 * @property {string} [transaction_id]
 * @property {boolean} [credit_balance]
 * @property {string} [payment_mode]
 * @property {string} [payment_method]
 * @property {string} [invoice_id]
 */

/**
 * @typedef SubscriptionRenewResMeta
 * @property {boolean} [invoice_payment]
 * @property {boolean} [renew]
 */

/**
 * @typedef SubscriptionRenewRes
 * @property {string} [redirect_url]
 * @property {string} [transaction_id]
 * @property {string} [current_status]
 * @property {SubscriptionRenewResMeta} [meta]
 */

/**
 * @typedef SetupIntentRes
 * @property {boolean} [success]
 * @property {SetupIntentData} [data]
 */

/**
 * @typedef SetupIntentData
 * @property {string} [id]
 * @property {string} [client_secret]
 * @property {Object} [customer]
 * @property {string} [status]
 */

/**
 * @typedef SetupPayment
 * @property {string} [id]
 * @property {string} [status]
 * @property {Object} [customer]
 * @property {string} [client_secret]
 * @property {string} [payment_method]
 * @property {string} [mandate]
 * @property {PaymentMethodOptions} [payment_method_options]
 */

/**
 * @typedef PaymentMethodOptions
 * @property {Card} [card]
 */

/**
 * @typedef Card
 * @property {MandateOptions} [mandate_options]
 */

/**
 * @typedef MandateOptions
 * @property {number} [amount]
 */

/**
 * @typedef Message
 * @property {string} [message]
 */

/**
 * @typedef TopupRes
 * @property {string} [status]
 * @property {string} [aggregator_order_id]
 * @property {number} [amount]
 * @property {string} [currency]
 * @property {string} [transaction_id]
 */

/**
 * @typedef CancelTopupReq
 * @property {string} [order_id]
 */

/**
 * @typedef CancelTopupRes
 * @property {string} [_id]
 * @property {string} [subscriber_id]
 * @property {number} [amount]
 * @property {string} [currency]
 * @property {string} [aggregator]
 * @property {string} [aggregator_order_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {number} [__v]
 * @property {string} [aggregator_status]
 * @property {string} [current_status]
 */

/**
 * @typedef DefaultReq
 * @property {string} [payment_method_id]
 */

class BillingPlatformModel {
  /** @returns {PaymentCollectRes} */
  static PaymentCollectRes() {
    return Joi.object({
      transaction_id: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
    });
  }

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

  /** @returns {PostDowngradeRes} */
  static PostDowngradeRes() {
    return Joi.object({
      success: Joi.boolean(),
      data: BillingPlatformModel.DowngradeRes(),
    });
  }

  /** @returns {DowngradeRes} */
  static DowngradeRes() {
    return Joi.object({
      _id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      subscriber_id: Joi.string().allow(""),
      activated: Joi.boolean(),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      plan_id: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      request_user_id: Joi.string().allow(""),
      subscription_id: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentStatusData} */
  static PaymentStatusData() {
    return Joi.object({
      _id: Joi.string().allow(""),
      journey: Joi.string().allow(""),
      webhook_response: Joi.array().items(Joi.any()),
      aggregator_status: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      __v: Joi.number(),
      aggregator_order_id: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentStatusResponse} */
  static PaymentStatusResponse() {
    return Joi.object({
      status: Joi.string().allow(""),
      data: BillingPlatformModel.PaymentStatusData(),
    });
  }

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
      code: Joi.any(),
      success: Joi.any(),
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

  /** @returns {PlanMeta} */
  static PlanMeta() {
    return Joi.object({
      seller_status: Joi.string().allow(""),
      company: Joi.string().allow(""),
      plan_platform_display_name: Joi.string().allow(""),
    });
  }

  /** @returns {Plan} */
  static Plan() {
    return Joi.object({
      fee_components: Joi.array().items(Joi.any()),
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
      taxation: BillingPlatformModel.Taxation(),
      one_time_fees: BillingPlatformModel.OneTimeFees(),
      credit_line: BillingPlatformModel.CreditLine(),
      current_status: Joi.string().allow(""),
      channel_type: Joi.string().allow(""),
      company_ids: Joi.array().items(Joi.any()),
      platform: Joi.string().allow(""),
      activated_on: Joi.string().allow(""),
      meta: BillingPlatformModel.PlanMeta(),
      created_by: Joi.string().allow(""),
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
      amount: Joi.number(),
      currency_code: Joi.string().allow(""),
    });
  }

  /** @returns {EntityChargeRecurring} */
  static EntityChargeRecurring() {
    return Joi.object({
      interval: Joi.string().allow(""),
    });
  }

  /** @returns {ChargeLineItem} */
  static ChargeLineItem() {
    return Joi.object({
      name: Joi.string().allow(""),
      term: Joi.string().allow(""),
      pricing_type: Joi.string().allow(""),
      price: BillingPlatformModel.EntityChargePrice(),
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
      name: Joi.string().allow(""),
      trial_days: Joi.number(),
      line_items: Joi.array().items(BillingPlatformModel.ChargeLineItem()),
      is_test: Joi.boolean(),
      return_url: Joi.string().allow(""),
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

  /** @returns {CreateOneTimeCharge} */
  static CreateOneTimeCharge() {
    return Joi.object({
      name: Joi.string().allow(""),
      charge: BillingPlatformModel.OneTimeChargeItem(),
      is_test: Joi.boolean(),
      return_url: Joi.string().allow(""),
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

  /** @returns {ChargeRecurring} */
  static ChargeRecurring() {
    return Joi.object({
      interval: Joi.string().allow(""),
      interval_time: Joi.number(),
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

  /** @returns {CreateOneTimeChargeResponse} */
  static CreateOneTimeChargeResponse() {
    return Joi.object({
      charge: BillingPlatformModel.Charge(),
      confirm_url: Joi.string().allow(""),
    });
  }

  /** @returns {Charge} */
  static Charge() {
    return Joi.object({
      final_charge: BillingPlatformModel.OneTimeChargeEntity(),
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
      documents: Joi.any(),
      payment: Joi.any(),
      old_settlement: Joi.number().allow(null),
      credit_balance: Joi.number(),
      discount: Joi.any(),
      taxation: Joi.any(),
      credit_note_amount: Joi.number(),
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
      documents: Joi.any(),
      consent: Joi.boolean(),
      comms: Joi.boolean(),
      credit_balance: Joi.number(),
      business_country_info: BillingPlatformModel.BusinessCountryInfo(),
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
      meta: Joi.any(),
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
      freezed: Joi.boolean(),
      cancel_at: Joi.string().allow(""),
      canceled_at: Joi.string().allow(""),
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
      mandate_amount: Joi.number(),
      message: Joi.string().allow(""),
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

  /** @returns {IntentReq} */
  static IntentReq() {
    return Joi.object({
      unique_external_id: Joi.string().allow(""),
      plan_id: Joi.string().allow(""),
    });
  }

  /** @returns {PutIntentReq} */
  static PutIntentReq() {
    return Joi.object({
      unique_external_id: Joi.string().allow(""),
      setup_intent_id: Joi.string().allow(""),
      payment_method_id: Joi.string().allow(""),
      set_default: Joi.boolean(),
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
      subscription_id: Joi.string().allow(""),
      coupon: Joi.string().allow(""),
      meta: Joi.any(),
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

  /** @returns {EntityDetail} */
  static EntityDetail() {
    return Joi.object({
      entity: Joi.string().allow(""),
      item: BillingPlatformModel.Subscription(),
    });
  }

  /** @returns {PaymentOptions} */
  static PaymentOptions() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      aggregator_id: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {VerifyPaymentReq} */
  static VerifyPaymentReq() {
    return Joi.object({
      razorpay_payment_id: Joi.string().allow(""),
      razorpay_order_id: Joi.string().allow(""),
      razorpay_signature: Joi.string().allow(""),
      status_code: Joi.number(),
      provider_type: Joi.string().allow(""),
    });
  }

  /** @returns {Documents} */
  static Documents() {
    return Joi.object({
      pan: Joi.string().allow(""),
      gst: Joi.string().allow(""),
    });
  }

  /** @returns {BillingAddress} */
  static BillingAddress() {
    return Joi.object({
      country: Joi.string().allow(""),
      state: Joi.string().allow(""),
      city: Joi.string().allow(""),
      line1: Joi.string().allow(""),
      line2: Joi.string().allow(""),
      postal_code: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
    });
  }

  /** @returns {Currency} */
  static Currency() {
    return Joi.object({
      code: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {BusinessCountryInfo} */
  static BusinessCountryInfo() {
    return Joi.object({
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      currency: BillingPlatformModel.Currency(),
      timezone: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriberData} */
  static SubscriberData() {
    return Joi.object({
      pg_user_exists: Joi.boolean(),
      id: Joi.any(),
      pg_customer_id: Joi.string().allow(""),
      default_payment_method: Joi.string().allow(""),
    });
  }

  /** @returns {Subscriber} */
  static Subscriber() {
    return Joi.object({
      documents: BillingPlatformModel.Documents(),
      phone: Joi.any(),
      billing_address: BillingPlatformModel.BillingAddress(),
      consent: Joi.boolean(),
      comms: Joi.boolean(),
      _id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      unique_id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      email: Joi.string().allow(""),
      business_country_info: BillingPlatformModel.BusinessCountryInfo(),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      credit_balance: Joi.number(),
      data: BillingPlatformModel.SubscriberData(),
    });
  }

  /** @returns {Author} */
  static Author() {
    return Joi.object({
      modified_by_details: Joi.any(),
    });
  }

  /** @returns {EndingBalance} */
  static EndingBalance() {
    return Joi.object({
      amount: Joi.number(),
      old_entry_ref: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentData} */
  static PaymentData() {
    return Joi.object({
      transaction_id: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
      aggregator_order_id: Joi.string().allow(""),
    });
  }

  /** @returns {CreditTransaction} */
  static CreditTransaction() {
    return Joi.object({
      entity: Joi.any(),
      author: BillingPlatformModel.Author(),
      _id: Joi.string().allow(""),
      amount: Joi.number(),
      currency: Joi.string().allow(""),
      subscriber_id: Joi.string().allow(""),
      description: Joi.string().allow(""),
      is_test: Joi.any(),
      ending_balance: BillingPlatformModel.EndingBalance(),
      payment: BillingPlatformModel.PaymentData(),
      type: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
    });
  }

  /** @returns {VerifyPaymentData} */
  static VerifyPaymentData() {
    return Joi.object({
      success: Joi.boolean(),
      subscriber: BillingPlatformModel.Subscriber(),
      credit_transaction: BillingPlatformModel.CreditTransaction(),
    });
  }

  /** @returns {VerifyPaymentRes} */
  static VerifyPaymentRes() {
    return Joi.object({
      status: Joi.string().allow(""),
      data: BillingPlatformModel.VerifyPaymentData(),
    });
  }

  /** @returns {DefaultMerchants} */
  static DefaultMerchants() {
    return Joi.object({
      stripe: Joi.string().allow(""),
    });
  }

  /** @returns {GlobalSettingsPayment} */
  static GlobalSettingsPayment() {
    return Joi.object({
      default_merchants: BillingPlatformModel.DefaultMerchants(),
    });
  }

  /** @returns {GlobalSettingsData} */
  static GlobalSettingsData() {
    return Joi.object({
      payment: BillingPlatformModel.GlobalSettingsPayment(),
      freeze_panel: Joi.boolean(),
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
    });
  }

  /** @returns {GlobalSettings} */
  static GlobalSettings() {
    return Joi.object({
      status: Joi.string().allow(""),
      data: BillingPlatformModel.GlobalSettingsData(),
    });
  }

  /** @returns {MethodChecks} */
  static MethodChecks() {
    return Joi.object({
      address_line1_check: Joi.string().allow(""),
      address_postal_code_check: Joi.string().allow(""),
      cvc_check: Joi.string().allow(""),
    });
  }

  /** @returns {MethodNetworks} */
  static MethodNetworks() {
    return Joi.object({
      available: Joi.array().items(Joi.string().allow("")),
      preferred: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {MethodSecureUsage} */
  static MethodSecureUsage() {
    return Joi.object({
      supported: Joi.boolean(),
    });
  }

  /** @returns {MethodDetails} */
  static MethodDetails() {
    return Joi.object({
      id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      mandate_available: Joi.boolean(),
      mandate_amount: Joi.number(),
      pg_payment_method_id: Joi.string().allow(""),
      is_default: Joi.boolean(),
      data: BillingPlatformModel.SubscriptionMethodData(),
    });
  }

  /** @returns {SubscriptionMethodData} */
  static SubscriptionMethodData() {
    return Joi.object({
      brand: Joi.string().allow(""),
      checks: BillingPlatformModel.MethodChecks(),
      country: Joi.string().allow(""),
      exp_month: Joi.number(),
      exp_year: Joi.number(),
      fingerprint: Joi.string().allow(""),
      funding: Joi.string().allow(""),
      generated_from: Joi.string().allow("").allow(null),
      last4: Joi.string().allow(""),
      networks: BillingPlatformModel.MethodNetworks(),
      three_d_secure_usage: BillingPlatformModel.MethodSecureUsage(),
      wallet: Joi.string().allow("").allow(null),
      name: Joi.string().allow(""),
      is_default: Joi.boolean(),
    });
  }

  /** @returns {SubscriptionMethods} */
  static SubscriptionMethods() {
    return Joi.object({
      success: Joi.boolean(),
      data: Joi.array().items(BillingPlatformModel.MethodDetails()),
    });
  }

  /** @returns {ConfigPublicKey} */
  static ConfigPublicKey() {
    return Joi.object({
      public_key: Joi.string().allow(""),
    });
  }

  /** @returns {ConfigRes} */
  static ConfigRes() {
    return Joi.object({
      success: Joi.boolean(),
      aggregator: Joi.string().allow(""),
      config: BillingPlatformModel.ConfigPublicKey(),
    });
  }

  /** @returns {PlanChangeData} */
  static PlanChangeData() {
    return Joi.object({
      total: Joi.number(),
      credit_note_amount: Joi.number(),
      settlement: Joi.number(),
      taxable_amount: Joi.number(),
      gst_amount: Joi.number(),
      gross_total: Joi.number(),
      gst: Joi.number(),
    });
  }

  /** @returns {PlanChangeDetails} */
  static PlanChangeDetails() {
    return Joi.object({
      status: Joi.string().allow(""),
      data: BillingPlatformModel.PlanChangeData(),
    });
  }

  /** @returns {TransactionMeta} */
  static TransactionMeta() {
    return Joi.object({
      invoice_id: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentTransactionDetails} */
  static PaymentTransactionDetails() {
    return Joi.object({
      aggregator: Joi.any(),
      currency: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      subscriber_id: Joi.string().allow(""),
      amount: Joi.number(),
      entity_type: Joi.string().allow(""),
      collection_type: Joi.string().allow(""),
      meta: BillingPlatformModel.TransactionMeta(),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentItems} */
  static PaymentItems() {
    return Joi.object({
      name: Joi.string().allow(""),
      code: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
    });
  }

  /** @returns {GetPaymentOptions} */
  static GetPaymentOptions() {
    return Joi.object({
      payment_options: Joi.array().items(BillingPlatformModel.PaymentItems()),
    });
  }

  /** @returns {TopupReq} */
  static TopupReq() {
    return Joi.object({
      amount: Joi.number(),
      currency: Joi.string().allow(""),
      provider_type: Joi.string().allow(""),
    });
  }

  /** @returns {SetupMandateReq} */
  static SetupMandateReq() {
    return Joi.object({
      intent_id: Joi.string().allow(""),
      payment_method_id: Joi.string().allow(""),
    });
  }

  /** @returns {SetupPaymentReq} */
  static SetupPaymentReq() {
    return Joi.object({
      payment_method: Joi.string().allow(""),
      payment_id: Joi.string().allow(""),
      plan_id: Joi.string().allow(""),
      invoice_id: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionRenewReq} */
  static SubscriptionRenewReq() {
    return Joi.object({
      invoice_id: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      collection_type: Joi.string().allow(""),
      callback_url: Joi.string().allow(""),
      meta: BillingPlatformModel.RenewMeta(),
    });
  }

  /** @returns {RenewMeta} */
  static RenewMeta() {
    return Joi.object({
      invoice_payment: Joi.boolean(),
      renew: Joi.boolean(),
    });
  }

  /** @returns {SubscriptionMethodsReq} */
  static SubscriptionMethodsReq() {
    return Joi.object({
      unique_external_id: Joi.string().allow(""),
      setup_intent_id: Joi.string().allow(""),
      pg_payment_method_id: Joi.string().allow(""),
      set_default: Joi.boolean(),
    });
  }

  /** @returns {CreditTransactionResponse} */
  static CreditTransactionResponse() {
    return Joi.object({
      total: Joi.number(),
      limit: Joi.number(),
      page: Joi.number(),
      pages: Joi.number(),
      items: Joi.array().items(BillingPlatformModel.CreditTransaction()),
    });
  }

  /** @returns {DowngradePlanReq} */
  static DowngradePlanReq() {
    return Joi.object({
      unique_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      product_suite: Joi.string().allow(""),
      plan_id: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      platform: Joi.string().allow(""),
    });
  }

  /** @returns {Taxation} */
  static Taxation() {
    return Joi.object({
      gst: Joi.number(),
    });
  }

  /** @returns {OneTimeFees} */
  static OneTimeFees() {
    return Joi.object({
      developement: Joi.number().allow(null),
      marketing: Joi.number().allow(null),
    });
  }

  /** @returns {CreditLine} */
  static CreditLine() {
    return Joi.object({
      is_active: Joi.boolean(),
    });
  }

  /** @returns {StatusMessage} */
  static StatusMessage() {
    return Joi.object({
      status: Joi.string().allow(""),
      message: Joi.string().allow(""),
      success: Joi.boolean(),
      code: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentCollectReq} */
  static PaymentCollectReq() {
    return Joi.object({
      transaction_id: Joi.string().allow(""),
      credit_balance: Joi.boolean(),
      payment_mode: Joi.string().allow(""),
      payment_method: Joi.string().allow(""),
      invoice_id: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionRenewResMeta} */
  static SubscriptionRenewResMeta() {
    return Joi.object({
      invoice_payment: Joi.boolean(),
      renew: Joi.boolean(),
    });
  }

  /** @returns {SubscriptionRenewRes} */
  static SubscriptionRenewRes() {
    return Joi.object({
      redirect_url: Joi.string().allow(""),
      transaction_id: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      meta: BillingPlatformModel.SubscriptionRenewResMeta(),
    });
  }

  /** @returns {SetupIntentRes} */
  static SetupIntentRes() {
    return Joi.object({
      success: Joi.boolean(),
      data: BillingPlatformModel.SetupIntentData(),
    });
  }

  /** @returns {SetupIntentData} */
  static SetupIntentData() {
    return Joi.object({
      id: Joi.string().allow(""),
      client_secret: Joi.string().allow(""),
      customer: Joi.any(),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {SetupPayment} */
  static SetupPayment() {
    return Joi.object({
      id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      customer: Joi.any(),
      client_secret: Joi.string().allow(""),
      payment_method: Joi.string().allow(""),
      mandate: Joi.string().allow(""),
      payment_method_options: BillingPlatformModel.PaymentMethodOptions(),
    });
  }

  /** @returns {PaymentMethodOptions} */
  static PaymentMethodOptions() {
    return Joi.object({
      card: BillingPlatformModel.Card(),
    });
  }

  /** @returns {Card} */
  static Card() {
    return Joi.object({
      mandate_options: BillingPlatformModel.MandateOptions(),
    });
  }

  /** @returns {MandateOptions} */
  static MandateOptions() {
    return Joi.object({
      amount: Joi.number(),
    });
  }

  /** @returns {Message} */
  static Message() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {TopupRes} */
  static TopupRes() {
    return Joi.object({
      status: Joi.string().allow(""),
      aggregator_order_id: Joi.string().allow(""),
      amount: Joi.number(),
      currency: Joi.string().allow(""),
      transaction_id: Joi.string().allow(""),
    });
  }

  /** @returns {CancelTopupReq} */
  static CancelTopupReq() {
    return Joi.object({
      order_id: Joi.string().allow(""),
    });
  }

  /** @returns {CancelTopupRes} */
  static CancelTopupRes() {
    return Joi.object({
      _id: Joi.string().allow(""),
      subscriber_id: Joi.string().allow(""),
      amount: Joi.number(),
      currency: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
      aggregator_order_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      __v: Joi.number(),
      aggregator_status: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
    });
  }

  /** @returns {DefaultReq} */
  static DefaultReq() {
    return Joi.object({
      payment_method_id: Joi.string().allow(""),
    });
  }
}
module.exports = BillingPlatformModel;
