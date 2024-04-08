export = BillingPlatformModel;
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
declare class BillingPlatformModel {
}
declare namespace BillingPlatformModel {
    export { PaymentCollectRes, SubscriptionChargeRes, PostDowngradeRes, DowngradeRes, PaymentStatusData, PaymentStatusResponse, BadRequest, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, PlanMeta, Plan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, ChargeRecurring, ChargeDetails, OneTimeChargeEntity, CreateOneTimeChargeResponse, Charge, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, IntentReq, PutIntentReq, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, PlanStatusUpdateReq, SunscribePlan, Meta, SubscribePlanRes, EntityDetail, PaymentOptions, VerifyPaymentReq, Documents, BillingAddress, Currency, BusinessCountryInfo, SubscriberData, Subscriber, Author, EndingBalance, PaymentData, CreditTransaction, VerifyPaymentData, VerifyPaymentRes, DefaultMerchants, GlobalSettingsPayment, GlobalSettingsData, GlobalSettings, MethodChecks, MethodNetworks, MethodSecureUsage, MethodDetails, SubscriptionMethodData, SubscriptionMethods, ConfigPublicKey, ConfigRes, PlanChangeData, PlanChangeDetails, TransactionMeta, PaymentTransactionDetails, PaymentItems, GetPaymentOptions, TopupReq, SetupMandateReq, SetupPaymentReq, SubscriptionRenewReq, RenewMeta, SubscriptionMethodsReq, CreditTransactionResponse, DowngradePlanReq, Taxation, OneTimeFees, CreditLine, StatusMessage, PaymentCollectReq, SubscriptionRenewResMeta, SubscriptionRenewRes, SetupIntentRes, SetupIntentData, SetupPayment, PaymentMethodOptions, Card, MandateOptions, Message, TopupRes, CancelTopupReq, CancelTopupRes, DefaultReq };
}
/** @returns {PaymentCollectRes} */
declare function PaymentCollectRes(): PaymentCollectRes;
type PaymentCollectRes = {
    transaction_id?: string;
    current_status?: string;
};
/** @returns {SubscriptionChargeRes} */
declare function SubscriptionChargeRes(): SubscriptionChargeRes;
type SubscriptionChargeRes = {
    _id?: string;
    product_suit_id?: string;
    entity_id?: string;
    entity_type?: string;
    name?: string;
    status?: string;
    trial_days?: number;
    activated_on?: string;
    cancelled_on?: string;
    is_test?: boolean;
    created_at?: string;
    modified_at?: string;
    company_id?: string;
    line_items?: any[];
};
/** @returns {PostDowngradeRes} */
declare function PostDowngradeRes(): PostDowngradeRes;
type PostDowngradeRes = {
    success?: boolean;
    data?: DowngradeRes;
};
/** @returns {DowngradeRes} */
declare function DowngradeRes(): DowngradeRes;
type DowngradeRes = {
    _id?: string;
    status?: string;
    subscriber_id?: string;
    activated?: boolean;
    created_at?: string;
    modified_at?: string;
    plan_id?: string;
    reason?: string;
    request_user_id?: string;
    subscription_id?: string;
};
/** @returns {PaymentStatusData} */
declare function PaymentStatusData(): PaymentStatusData;
type PaymentStatusData = {
    _id?: string;
    journey?: string;
    webhook_response?: any[];
    aggregator_status?: string;
    current_status?: string;
    created_at?: string;
    modified_at?: string;
    __v?: number;
    aggregator_order_id?: string;
};
/** @returns {PaymentStatusResponse} */
declare function PaymentStatusResponse(): PaymentStatusResponse;
type PaymentStatusResponse = {
    status?: string;
    data?: PaymentStatusData;
};
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
    code?: any;
    success?: any;
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
/** @returns {PlanMeta} */
declare function PlanMeta(): PlanMeta;
type PlanMeta = {
    seller_status?: string;
    company?: string;
    plan_platform_display_name?: string;
};
/** @returns {Plan} */
declare function Plan(): Plan;
type Plan = {
    fee_components?: any[];
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
    taxation?: Taxation;
    one_time_fees?: OneTimeFees;
    credit_line?: CreditLine;
    current_status?: string;
    channel_type?: string;
    company_ids?: any[];
    platform?: string;
    activated_on?: string;
    meta?: PlanMeta;
    created_by?: string;
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
    amount?: number;
    currency_code?: string;
};
/** @returns {EntityChargeRecurring} */
declare function EntityChargeRecurring(): EntityChargeRecurring;
type EntityChargeRecurring = {
    interval?: string;
};
/** @returns {ChargeLineItem} */
declare function ChargeLineItem(): ChargeLineItem;
type ChargeLineItem = {
    name?: string;
    term?: string;
    pricing_type?: string;
    price?: EntityChargePrice;
    recurring?: EntityChargeRecurring;
    capped_amount?: number;
    trial_days?: number;
    is_test?: boolean;
    metadata?: any;
};
/** @returns {CreateSubscriptionCharge} */
declare function CreateSubscriptionCharge(): CreateSubscriptionCharge;
type CreateSubscriptionCharge = {
    name?: string;
    trial_days?: number;
    line_items?: ChargeLineItem[];
    is_test?: boolean;
    return_url?: string;
};
/** @returns {OneTimeChargeItem} */
declare function OneTimeChargeItem(): OneTimeChargeItem;
type OneTimeChargeItem = {
    name?: string;
    term?: string;
    pricing_type?: string;
    price?: EntityChargePrice;
    capped_amount?: number;
    is_test?: boolean;
    metadata?: any;
};
/** @returns {CreateOneTimeCharge} */
declare function CreateOneTimeCharge(): CreateOneTimeCharge;
type CreateOneTimeCharge = {
    name?: string;
    charge?: OneTimeChargeItem;
    is_test?: boolean;
    return_url?: string;
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
/** @returns {ChargeRecurring} */
declare function ChargeRecurring(): ChargeRecurring;
type ChargeRecurring = {
    interval?: string;
    interval_time?: number;
};
/** @returns {ChargeDetails} */
declare function ChargeDetails(): ChargeDetails;
type ChargeDetails = {
    _id?: string;
    entity_type?: string;
    entity_id?: string;
    name?: string;
    term?: string;
    charge_type?: string;
    pricing_type?: string;
    price?: EntityChargePrice;
    recurring?: ChargeRecurring;
    status?: string;
    capped_amount?: number;
    activated_on?: string;
    cancelled_on?: string;
    billing_date?: string;
    current_period?: SubscriptionTrialPeriod;
    modified_at?: string;
    created_at?: string;
    is_test?: boolean;
    company_id?: string;
    meta?: any;
    __v?: number;
};
/** @returns {OneTimeChargeEntity} */
declare function OneTimeChargeEntity(): OneTimeChargeEntity;
type OneTimeChargeEntity = {
    term?: string;
    charge_type?: string;
    capped_amount?: number;
    billing_date?: string;
    created_at?: string;
    modified_at?: string;
    __v?: number;
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
    charge?: Charge;
    confirm_url?: string;
};
/** @returns {Charge} */
declare function Charge(): Charge;
type Charge = {
    final_charge?: OneTimeChargeEntity;
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
    documents?: any;
    payment?: any;
    old_settlement?: number;
    credit_balance?: number;
    discount?: any;
    taxation?: any;
    credit_note_amount?: number;
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
    documents?: any;
    consent?: boolean;
    comms?: boolean;
    credit_balance?: number;
    business_country_info?: BusinessCountryInfo;
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
    meta?: any;
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
    freezed?: boolean;
    cancel_at?: string;
    canceled_at?: string;
};
/** @returns {SubscriptionStatus} */
declare function SubscriptionStatus(): SubscriptionStatus;
type SubscriptionStatus = {
    is_enabled?: boolean;
    subscription?: Subscription;
    latest_invoice?: InvoicesData;
    next_plan?: Plan;
    current_subscriptions?: Subscription[];
    mandate_amount?: number;
    message?: string;
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
/** @returns {IntentReq} */
declare function IntentReq(): IntentReq;
type IntentReq = {
    unique_external_id?: string;
    plan_id?: string;
};
/** @returns {PutIntentReq} */
declare function PutIntentReq(): PutIntentReq;
type PutIntentReq = {
    unique_external_id?: string;
    setup_intent_id?: string;
    payment_method_id?: string;
    set_default?: boolean;
};
/** @returns {SubscriptionActivateReq} */
declare function SubscriptionActivateReq(): SubscriptionActivateReq;
type SubscriptionActivateReq = {
    unique_id?: string;
    type?: string;
    product_suite?: string;
    plan_id?: string;
    payment_method?: string;
    subscription_id?: string;
    coupon?: string;
    meta?: any;
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
/** @returns {EntityDetail} */
declare function EntityDetail(): EntityDetail;
type EntityDetail = {
    entity?: string;
    item?: Subscription;
};
/** @returns {PaymentOptions} */
declare function PaymentOptions(): PaymentOptions;
type PaymentOptions = {
    _id?: string;
    name?: string;
    description?: string;
    logo?: string;
    aggregator_id?: string;
    aggregator?: string;
    created_at?: string;
    modified_at?: string;
    __v?: number;
};
/** @returns {VerifyPaymentReq} */
declare function VerifyPaymentReq(): VerifyPaymentReq;
type VerifyPaymentReq = {
    razorpay_payment_id?: string;
    razorpay_order_id?: string;
    razorpay_signature?: string;
    status_code?: number;
    provider_type?: string;
};
/** @returns {Documents} */
declare function Documents(): Documents;
type Documents = {
    pan?: string;
    gst?: string;
};
/** @returns {BillingAddress} */
declare function BillingAddress(): BillingAddress;
type BillingAddress = {
    country?: string;
    state?: string;
    city?: string;
    line1?: string;
    line2?: string;
    postal_code?: string;
    country_code?: string;
};
/** @returns {Currency} */
declare function Currency(): Currency;
type Currency = {
    code?: string;
    symbol?: string;
    name?: string;
};
/** @returns {BusinessCountryInfo} */
declare function BusinessCountryInfo(): BusinessCountryInfo;
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
    currency?: Currency;
    timezone?: string;
};
/** @returns {SubscriberData} */
declare function SubscriberData(): SubscriberData;
type SubscriberData = {
    pg_user_exists?: boolean;
    id?: any;
    pg_customer_id?: string;
    default_payment_method?: string;
};
/** @returns {Subscriber} */
declare function Subscriber(): Subscriber;
type Subscriber = {
    documents?: Documents;
    phone?: any;
    billing_address?: BillingAddress;
    consent?: boolean;
    comms?: boolean;
    _id?: string;
    type?: string;
    unique_id?: string;
    name?: string;
    email?: string;
    business_country_info?: BusinessCountryInfo;
    created_at?: string;
    modified_at?: string;
    credit_balance?: number;
    data?: SubscriberData;
};
/** @returns {Author} */
declare function Author(): Author;
type Author = {
    modified_by_details?: any;
};
/** @returns {EndingBalance} */
declare function EndingBalance(): EndingBalance;
type EndingBalance = {
    amount?: number;
    old_entry_ref?: string;
};
/** @returns {PaymentData} */
declare function PaymentData(): PaymentData;
type PaymentData = {
    transaction_id?: string;
    aggregator?: string;
    aggregator_order_id?: string;
};
/** @returns {CreditTransaction} */
declare function CreditTransaction(): CreditTransaction;
type CreditTransaction = {
    entity?: any;
    author?: Author;
    _id?: string;
    amount?: number;
    currency?: string;
    subscriber_id?: string;
    description?: string;
    is_test?: any;
    ending_balance?: EndingBalance;
    payment?: PaymentData;
    type?: string;
    created_at?: string;
    modified_at?: string;
};
/** @returns {VerifyPaymentData} */
declare function VerifyPaymentData(): VerifyPaymentData;
type VerifyPaymentData = {
    success?: boolean;
    subscriber?: Subscriber;
    credit_transaction?: CreditTransaction;
};
/** @returns {VerifyPaymentRes} */
declare function VerifyPaymentRes(): VerifyPaymentRes;
type VerifyPaymentRes = {
    status?: string;
    data?: VerifyPaymentData;
};
/** @returns {DefaultMerchants} */
declare function DefaultMerchants(): DefaultMerchants;
type DefaultMerchants = {
    stripe?: string;
};
/** @returns {GlobalSettingsPayment} */
declare function GlobalSettingsPayment(): GlobalSettingsPayment;
type GlobalSettingsPayment = {
    default_merchants?: DefaultMerchants;
};
/** @returns {GlobalSettingsData} */
declare function GlobalSettingsData(): GlobalSettingsData;
type GlobalSettingsData = {
    payment?: GlobalSettingsPayment;
    freeze_panel?: boolean;
    _id?: string;
    created_at?: string;
    modified_at?: string;
};
/** @returns {GlobalSettings} */
declare function GlobalSettings(): GlobalSettings;
type GlobalSettings = {
    status?: string;
    data?: GlobalSettingsData;
};
/** @returns {MethodChecks} */
declare function MethodChecks(): MethodChecks;
type MethodChecks = {
    address_line1_check?: string;
    address_postal_code_check?: string;
    cvc_check?: string;
};
/** @returns {MethodNetworks} */
declare function MethodNetworks(): MethodNetworks;
type MethodNetworks = {
    available?: string[];
    preferred?: string;
};
/** @returns {MethodSecureUsage} */
declare function MethodSecureUsage(): MethodSecureUsage;
type MethodSecureUsage = {
    supported?: boolean;
};
/** @returns {MethodDetails} */
declare function MethodDetails(): MethodDetails;
type MethodDetails = {
    id?: string;
    type?: string;
    mandate_available?: boolean;
    mandate_amount?: number;
    pg_payment_method_id?: string;
    is_default?: boolean;
    data?: SubscriptionMethodData;
};
/** @returns {SubscriptionMethodData} */
declare function SubscriptionMethodData(): SubscriptionMethodData;
type SubscriptionMethodData = {
    brand?: string;
    checks?: MethodChecks;
    country?: string;
    exp_month?: number;
    exp_year?: number;
    fingerprint?: string;
    funding?: string;
    generated_from?: string;
    last4?: string;
    networks?: MethodNetworks;
    three_d_secure_usage?: MethodSecureUsage;
    wallet?: string;
    name?: string;
    is_default?: boolean;
};
/** @returns {SubscriptionMethods} */
declare function SubscriptionMethods(): SubscriptionMethods;
type SubscriptionMethods = {
    success?: boolean;
    data?: MethodDetails[];
};
/** @returns {ConfigPublicKey} */
declare function ConfigPublicKey(): ConfigPublicKey;
type ConfigPublicKey = {
    public_key?: string;
};
/** @returns {ConfigRes} */
declare function ConfigRes(): ConfigRes;
type ConfigRes = {
    success?: boolean;
    aggregator?: string;
    config?: ConfigPublicKey;
};
/** @returns {PlanChangeData} */
declare function PlanChangeData(): PlanChangeData;
type PlanChangeData = {
    total?: number;
    credit_note_amount?: number;
    settlement?: number;
    taxable_amount?: number;
    gst_amount?: number;
    gross_total?: number;
    gst?: number;
};
/** @returns {PlanChangeDetails} */
declare function PlanChangeDetails(): PlanChangeDetails;
type PlanChangeDetails = {
    status?: string;
    data?: PlanChangeData;
};
/** @returns {TransactionMeta} */
declare function TransactionMeta(): TransactionMeta;
type TransactionMeta = {
    invoice_id?: string;
};
/** @returns {PaymentTransactionDetails} */
declare function PaymentTransactionDetails(): PaymentTransactionDetails;
type PaymentTransactionDetails = {
    aggregator?: any;
    currency?: string;
    current_status?: string;
    _id?: string;
    subscriber_id?: string;
    amount?: number;
    entity_type?: string;
    collection_type?: string;
    meta?: TransactionMeta;
    created_at?: string;
    modified_at?: string;
};
/** @returns {PaymentItems} */
declare function PaymentItems(): PaymentItems;
type PaymentItems = {
    name?: string;
    code?: string;
    aggregator?: string;
};
/** @returns {GetPaymentOptions} */
declare function GetPaymentOptions(): GetPaymentOptions;
type GetPaymentOptions = {
    payment_options?: PaymentItems[];
};
/** @returns {TopupReq} */
declare function TopupReq(): TopupReq;
type TopupReq = {
    amount?: number;
    currency?: string;
    provider_type?: string;
};
/** @returns {SetupMandateReq} */
declare function SetupMandateReq(): SetupMandateReq;
type SetupMandateReq = {
    intent_id?: string;
    payment_method_id?: string;
};
/** @returns {SetupPaymentReq} */
declare function SetupPaymentReq(): SetupPaymentReq;
type SetupPaymentReq = {
    payment_method?: string;
    payment_id?: string;
    plan_id?: string;
    invoice_id?: string;
};
/** @returns {SubscriptionRenewReq} */
declare function SubscriptionRenewReq(): SubscriptionRenewReq;
type SubscriptionRenewReq = {
    invoice_id?: string;
    entity_type?: string;
    collection_type?: string;
    callback_url?: string;
    meta?: RenewMeta;
};
/** @returns {RenewMeta} */
declare function RenewMeta(): RenewMeta;
type RenewMeta = {
    invoice_payment?: boolean;
    renew?: boolean;
};
/** @returns {SubscriptionMethodsReq} */
declare function SubscriptionMethodsReq(): SubscriptionMethodsReq;
type SubscriptionMethodsReq = {
    unique_external_id?: string;
    setup_intent_id?: string;
    pg_payment_method_id?: string;
    set_default?: boolean;
};
/** @returns {CreditTransactionResponse} */
declare function CreditTransactionResponse(): CreditTransactionResponse;
type CreditTransactionResponse = {
    /**
     * - Total number of transactions
     */
    total?: number;
    /**
     * - Maximum number of transactions per page
     */
    limit?: number;
    /**
     * - Current page number
     */
    page?: number;
    /**
     * - Total number of pages
     */
    pages?: number;
    items?: CreditTransaction[];
};
/** @returns {DowngradePlanReq} */
declare function DowngradePlanReq(): DowngradePlanReq;
type DowngradePlanReq = {
    unique_id?: string;
    type?: string;
    product_suite?: string;
    plan_id?: string;
    reason?: string;
    platform?: string;
};
/** @returns {Taxation} */
declare function Taxation(): Taxation;
type Taxation = {
    /**
     * - GST percentage
     */
    gst?: number;
};
/** @returns {OneTimeFees} */
declare function OneTimeFees(): OneTimeFees;
type OneTimeFees = {
    developement?: number;
    marketing?: number;
};
/** @returns {CreditLine} */
declare function CreditLine(): CreditLine;
type CreditLine = {
    is_active?: boolean;
};
/** @returns {StatusMessage} */
declare function StatusMessage(): StatusMessage;
type StatusMessage = {
    status?: string;
    message?: string;
    success?: boolean;
    code?: string;
};
/** @returns {PaymentCollectReq} */
declare function PaymentCollectReq(): PaymentCollectReq;
type PaymentCollectReq = {
    transaction_id?: string;
    credit_balance?: boolean;
    payment_mode?: string;
    payment_method?: string;
    invoice_id?: string;
};
/** @returns {SubscriptionRenewResMeta} */
declare function SubscriptionRenewResMeta(): SubscriptionRenewResMeta;
type SubscriptionRenewResMeta = {
    invoice_payment?: boolean;
    renew?: boolean;
};
/** @returns {SubscriptionRenewRes} */
declare function SubscriptionRenewRes(): SubscriptionRenewRes;
type SubscriptionRenewRes = {
    redirect_url?: string;
    transaction_id?: string;
    current_status?: string;
    meta?: SubscriptionRenewResMeta;
};
/** @returns {SetupIntentRes} */
declare function SetupIntentRes(): SetupIntentRes;
type SetupIntentRes = {
    success?: boolean;
    data?: SetupIntentData;
};
/** @returns {SetupIntentData} */
declare function SetupIntentData(): SetupIntentData;
type SetupIntentData = {
    id?: string;
    client_secret?: string;
    customer?: any;
    status?: string;
};
/** @returns {SetupPayment} */
declare function SetupPayment(): SetupPayment;
type SetupPayment = {
    id?: string;
    status?: string;
    customer?: any;
    client_secret?: string;
    payment_method?: string;
    mandate?: string;
    payment_method_options?: PaymentMethodOptions;
};
/** @returns {PaymentMethodOptions} */
declare function PaymentMethodOptions(): PaymentMethodOptions;
type PaymentMethodOptions = {
    card?: Card;
};
/** @returns {Card} */
declare function Card(): Card;
type Card = {
    mandate_options?: MandateOptions;
};
/** @returns {MandateOptions} */
declare function MandateOptions(): MandateOptions;
type MandateOptions = {
    amount?: number;
};
/** @returns {Message} */
declare function Message(): Message;
type Message = {
    message?: string;
};
/** @returns {TopupRes} */
declare function TopupRes(): TopupRes;
type TopupRes = {
    status?: string;
    aggregator_order_id?: string;
    amount?: number;
    currency?: string;
    transaction_id?: string;
};
/** @returns {CancelTopupReq} */
declare function CancelTopupReq(): CancelTopupReq;
type CancelTopupReq = {
    order_id?: string;
};
/** @returns {CancelTopupRes} */
declare function CancelTopupRes(): CancelTopupRes;
type CancelTopupRes = {
    _id?: string;
    subscriber_id?: string;
    amount?: number;
    currency?: string;
    aggregator?: string;
    aggregator_order_id?: string;
    created_at?: string;
    modified_at?: string;
    __v?: number;
    aggregator_status?: string;
    current_status?: string;
};
/** @returns {DefaultReq} */
declare function DefaultReq(): DefaultReq;
type DefaultReq = {
    payment_method_id?: string;
};
