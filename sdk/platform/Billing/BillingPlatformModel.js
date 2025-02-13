const Joi = require("joi");

/**
 * @typedef CompanyInfo
 * @property {string} [company_name] - Name of the company
 * @property {string} [gstin] - Goods and Services Tax Identification Number
 * @property {string} [address] - Main address of the company
 * @property {AddressDetails} [address_details]
 * @property {string} [pan] - Permanent Account Number of the company
 * @property {string} [phone] - Contact phone number for the company
 * @property {string} [email] - Contact email address for the company
 * @property {string} [cin] - Corporate Identification Number
 */

/**
 * @typedef AddressDetails
 * @property {string} [address_line_1] - First line of the address
 * @property {string} [address_line_2] - Second line of the address (optional)
 * @property {string} [city] - Company city
 * @property {string} [pincode] - Company pincode
 * @property {string} [state] - Company state
 * @property {string} [country] - Company country
 */

/**
 * @typedef InvoiceData
 * @property {InvoiceDetailsData} [invoice]
 * @property {InvoiceItems[]} [invoice_items]
 * @property {CompanyInfo} [shopsense_details]
 */

/**
 * @typedef InvoiceDetailsData
 * @property {number} [attemp] - Number of attempts made to collect the invoice payment
 * @property {Object} [documents] - Documents associated with the invoice
 * @property {Object} [payment] - Payment details related to the invoice
 * @property {Period} [period]
 * @property {Client} [client]
 * @property {Object} [discount] - Discount applied to the invoice
 * @property {Object} [taxation] - Taxation applied to the invoice
 * @property {string} [_id] - Unique identifier for the invoice
 * @property {boolean} [auto_advance] - Indicates if the invoice will
 *   automatically advance to the next stage of collection
 * @property {string} [collection_method] - Method of collection (e.g.,
 *   charge_automatically, send_invoice)
 * @property {string} [subscriber_id] - Identifier for the subscriber associated
 *   with the invoice
 * @property {string} [currency] - Currency in which the invoice is issued
 * @property {string} [invoice_url] - URL to view the invoice pdf
 * @property {string} [number] - Invoice number
 * @property {boolean} [paid] - Indicates if the invoice has been paid
 * @property {Object} [pg_data] - Payment gateway data related to the invoice
 * @property {string} [receipt_number] - Receipt number for the invoice payment
 * @property {string} [statement_descriptor] - Statement descriptor for the invoice
 * @property {string} [current_status] - Current status of the invoice (e.g., paid, open)
 * @property {StatusTrail[]} [status_trail] - Trail of status changes for the invoice
 * @property {number} [subtotal] - Subtotal amount of the invoice
 * @property {number} [total] - Total amount of the invoice
 * @property {number} [old_settlement] - Previous settlement amount (if any)
 * @property {number} [credit_balance] - Credit balance applied to the invoice
 * @property {string} [subscription] - Subscription associated with the invoice
 * @property {number} [attempt] - Number of attempts made to pay the invoice
 * @property {string} [next_action_time] - Timestamp for the next action on the invoice
 * @property {number} [credit_note_amount] - Amount of credit notes applied to the invoice
 * @property {string} [created_at] - Timestamp when the invoice was created
 * @property {string} [modified_at] - Timestamp when the invoice was last modified
 * @property {string} [invoice_type] - Type of invoice (e.g., subscription, extension)
 */

/**
 * @typedef Client
 * @property {string} [name] - Name of the client
 * @property {string} [email] - Email address of the client
 * @property {string} [phone] - Phone number of the client
 * @property {string[]} [address_lines] - List of address lines for the client's address
 */

/**
 * @typedef Period
 * @property {string} [start] - Start date of the period
 * @property {string} [end] - End date of the period
 */

/**
 * @typedef StatusTrail
 * @property {string} [value] - The status value of the invoice at a particular
 *   timestamp (e.g., open, paid, payment_due)
 * @property {string} [timestamp] - The date and time when the status was
 *   recorded, in ISO 8601 format
 * @property {string} [_id] - Unique identifier for the status trail entry
 */

/**
 * @typedef PaymentCollectRes
 * @property {string} [transaction_id] - Unique identifier for the transaction
 * @property {string} [current_status] - Current status of the payment
 *   collection (e.g., pending, completed, failed)
 */

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
 * @typedef PostDowngradeRes
 * @property {boolean} [success]
 * @property {DowngradeRes} [data]
 */

/**
 * @typedef DowngradeRes
 * @property {string} [_id] - Unique identifier for the downgrade request
 * @property {string} [status] - Current status of the downgrade request (e.g.,
 *   pending, completed)
 * @property {string} [subscriber_id] - Unique identifier for the subscriber
 *   making the downgrade request
 * @property {boolean} [activated] - Indicates if the downgrade has been activated
 * @property {string} [created_at] - Timestamp when the downgrade request was created
 * @property {string} [modified_at] - Timestamp when the downgrade request was
 *   last modified
 * @property {string} [plan_id] - ID of the plan to which the subscriber is downgrading
 * @property {string} [reason] - Reason provided for the downgrade request
 * @property {string} [request_user_id] - ID of the user who initiated the
 *   downgrade request
 * @property {string} [subscription_id] - ID of the subscription associated with
 *   the downgrade request
 */

/**
 * @typedef PaymentStatusData
 * @property {string} [_id] - Unique identifier for the payment status data
 * @property {string} [journey] - Payment journey status, such as 'forward' or 'backward'
 * @property {Object[]} [webhook_response] - List of responses received from
 *   webhooks related to the payment
 * @property {string} [aggregator_status] - Status of the payment as provided by
 *   the aggregator (e.g., succeeded, failed)
 * @property {string} [current_status] - Current status of the payment (e.g.,
 *   paid, pending)
 * @property {string} [created_at] - Timestamp when the payment status data was created
 * @property {string} [modified_at] - Timestamp when the payment status data was
 *   last modified
 * @property {number} [__v] - Version key for the payment status data (typically
 *   used for versioning in databases)
 * @property {string} [aggregator_order_id] - Unique identifier for the order
 *   provided by the payment aggregator
 */

/**
 * @typedef PaymentStatusResponse
 * @property {string} [status] - The status of the payment.
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
 * @property {string} [message] - Internal server error
 * @property {string} [code] - Error code
 */

/**
 * @typedef CheckValidityResponse
 * @property {boolean} [is_valid] - Indicates whether the request is valid.
 * @property {number} [discount_amount] - The amount of discount applicable.
 */

/**
 * @typedef PlanRecurring
 * @property {string} [interval] - The interval at which the plan recurs.
 * @property {number} [interval_count]
 */

/**
 * @typedef PlanMeta
 * @property {string} [seller_status] - Status of the seller associated with the plan.
 * @property {string} [company] - Name of the company offering the plan.
 * @property {string} [plan_platform_display_name] - Display name for platform slug.
 * @property {string[]} [tags] - Tags associated with the plan for
 *   categorization or identification.
 */

/**
 * @typedef CountryRes
 * @property {string} [name] - Name of the country.
 * @property {string} [code] - Country code.
 */

/**
 * @typedef Plan
 * @property {Object[]} [fee_components] - List of fee components associated
 *   with the plan. Each component may be represented as a string or an object.
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan] - Indicates whether the plan is a trial plan.
 * @property {string} [plan_group] - Group or category of the plan.
 * @property {string[]} [tag_lines] - List of tag lines or descriptions
 *   associated with the plan.
 * @property {string} [currency] - Currency code used for the plan's pricing.
 * @property {string} [approved_by] - Identifier of the user or system that
 *   approved the plan.
 * @property {boolean} [is_active] - Indicates if the plan is currently active.
 * @property {boolean} [is_visible] - Indicates if the plan is visible to users.
 * @property {number} [trial_period] - Number of days for the trial period, if applicable.
 * @property {string[]} [addons] - List of add-ons available for the plan.
 * @property {string[]} [tags] - List of tags associated with the plan.
 * @property {string} [type] - Type of the plan (e.g., public, private).
 * @property {CountryRes} [country]
 * @property {string} [_id] - Unique identifier for the plan.
 * @property {string} [name] - Name of the plan.
 * @property {string} [description] - Description of the plan.
 * @property {number} [amount] - Amount to be charged for the plan.
 * @property {string} [product_suite_id] - Identifier of the product suite to
 *   which the plan belongs.
 * @property {string} [created_at] - Timestamp when the plan was created.
 * @property {string} [modified_at] - Timestamp when the plan was last modified.
 * @property {Taxation} [taxation]
 * @property {OneTimeFees} [one_time_fees]
 * @property {CreditLine} [credit_line]
 * @property {string} [current_status] - Current status of the plan (e.g.,
 *   active, inactive).
 * @property {string} [channel_type] - Type of channel where the plan is offered
 *   (e.g., ecomm, retail).
 * @property {string[]} [company_ids] - List of company IDs associated with the
 *   plan. Can be null.
 * @property {string} [platform] - Platform where the plan is available (e.g.,
 *   web, mobile). Can be null.
 * @property {string} [activated_on] - Timestamp when the plan was activated.
 * @property {PlanMeta} [meta]
 * @property {string} [created_by] - Identifier of the user who created the plan.
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
 *   for this item, if applicable.
 * @property {boolean} [is_test] - Indicates whether the charge item is for
 *   testing purposes.
 * @property {Object} [metadata] - Additional metadata associated with the charge item.
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
 * @typedef ChargeRecurring
 * @property {string} [interval]
 * @property {number} [interval_time]
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
 * @typedef CreateOneTimeChargeResponse
 * @property {Charge} [charge]
 * @property {string} [confirm_url] - URL to which users are redirected to
 *   confirm or complete the payment or subscription process.
 */

/**
 * @typedef Charge
 * @property {OneTimeChargeEntity} [final_charge]
 */

/**
 * @typedef InvoiceDetailsStatusTrail
 * @property {string} [_id] - Unique identifier for the status trail entry.
 * @property {string} [value] - The status value of the invoice at a particular
 *   point in time.
 * @property {string} [timestamp] - The date and time when this status was recorded.
 */

/**
 * @typedef InvoiceItemsPlanRecurring
 * @property {string} [interval] - The interval at which the plan recurs (e.g.,
 *   month, year).
 * @property {number} [interval_count] - The number of intervals for the recurring plan.
 */

/**
 * @typedef InvoiceItemsPlan
 * @property {InvoiceItemsPlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan] - Indicates whether the plan is a trial plan.
 * @property {string} [plan_group] - Group or category to which the plan belongs.
 * @property {string[]} [tag_lines] - List of tag lines or short descriptions
 *   for the plan.
 * @property {string} [currency] - Currency code for the pricing of the plan.
 * @property {boolean} [is_active] - Indicates whether the plan is currently active.
 * @property {boolean} [is_visible] - Indicates whether the plan is visible to users.
 * @property {number} [trial_period] - The number of days for the trial period.
 * @property {string[]} [addons] - List of add-ons available with the plan.
 * @property {string[]} [tags] - Tags associated with the plan for categorization.
 * @property {string} [type] - Type of the plan (e.g., public, private).
 * @property {string} [country] - Country for which plan is created
 * @property {string} [_id] - Unique identifier for the plan.
 * @property {string} [name] - Name of the plan.
 * @property {string} [description] - Detailed description of the plan.
 * @property {number} [amount] - Price of the plan in the specified currency.
 * @property {string} [product_suite_id] - Identifier for the product suite to
 *   which the plan belongs.
 * @property {string} [created_at] - Timestamp when the plan was created.
 * @property {string} [modified_at] - Timestamp when the plan was last modified.
 */

/**
 * @typedef InvoiceItemsPeriod
 * @property {string} [start] - Start date of the invoice period.
 * @property {string} [end] - End date of the invoice period.
 */

/**
 * @typedef InvoiceItems
 * @property {string} [_id] - Unique identifier for the invoice item.
 * @property {string} [currency] - Currency for the amount.
 * @property {InvoiceItemsPlan} [plan]
 * @property {string} [name] - Name of the invoice item.
 * @property {number} [quantity] - Number of units of the invoice item.
 * @property {string} [description] - Description of the invoice item.
 * @property {InvoiceItemsPeriod} [period]
 * @property {number} [unit_amount] - Amount per unit of the invoice item.
 * @property {number} [amount] - Total amount for the invoice item.
 * @property {string} [type] - Type of the invoice item (e.g., subscription, extension).
 * @property {string} [invoice_id] - Identifier for the invoice to which the item belongs.
 * @property {string} [created_at] - Timestamp when the invoice item was created.
 * @property {string} [modified_at] - Timestamp when the invoice item was last modified.
 */

/**
 * @typedef InvoicesDataClient
 * @property {string} [name] - Name of the client.
 * @property {string} [email] - Email address of the client.
 * @property {string} [phone] - Phone number of the client.
 * @property {string[]} [address_lines] - Array of address lines for the client’s address.
 */

/**
 * @typedef InvoicesDataPeriod
 * @property {string} [start] - The start date and time of the invoice period.
 * @property {string} [end] - The end date and time of the invoice period.
 */

/**
 * @typedef InvoicesDataPaymentMethod
 * @property {string} [pg_payment_method_id] - Payment gateway-specific payment
 *   method identifier. Nullable if not applicable.
 */

/**
 * @typedef InvoicesData
 * @property {string} [_id] - Unique identifier for the invoice.
 * @property {Object} [documents] - Associated documents related to the invoice.
 * @property {Object} [payment] - Payment details for the invoice.
 * @property {number} [old_settlement] - Previous settlement amount, if applicable.
 * @property {number} [credit_balance] - Remaining credit balance applied to the
 *   invoice, if any.
 * @property {Object} [discount] - Details of any discounts applied to the invoice.
 * @property {Object} [taxation] - Taxation details associated with the invoice.
 * @property {number} [credit_note_amount] - Amount covered by credit notes, if any.
 * @property {InvoicesDataClient} [client]
 * @property {boolean} [auto_advance] - Indicates if the invoice should be
 *   auto-advanced in the billing process.
 * @property {string} [currency] - Currency code used for the invoice amount.
 * @property {boolean} [paid] - Indicates if the invoice has been paid.
 * @property {number} [attemp] - Number of payment attempts made for the invoice.
 * @property {string} [collection_method] - Method used to collect payment for
 *   the invoice.
 * @property {string} [subscriber_id] - Identifier for the subscriber associated
 *   with the invoice.
 * @property {string} [invoice_url] - URL to view or download the invoice.
 *   "null" if not available.
 * @property {string} [number] - Unique invoice number.
 * @property {Object} [pg_data] - Payment gateway-related data for the invoice.
 * @property {InvoicesDataPeriod} [period]
 * @property {string} [receipt_number] - Receipt number for the invoice payment.
 * @property {string} [statement_descriptor] - Descriptor that appears on the
 *   client's statement for the invoice.
 * @property {string} [current_status] - Current status of the invoice (e.g.,
 *   paid, pending).
 * @property {InvoiceDetailsStatusTrail[]} [status_trail] - History of status
 *   changes for the invoice.
 * @property {number} [subtotal] - Subtotal amount before taxes and discounts.
 * @property {number} [total] - Total amount including taxes and discounts.
 * @property {string} [subscription] - Identifier for the subscription
 *   associated with the invoice.
 * @property {string} [next_action_time] - Scheduled time for the next action
 *   related to the invoice.
 * @property {string} [created_at] - Timestamp when the invoice was created.
 * @property {string} [modified_at] - Timestamp when the invoice was last modified.
 * @property {string} [hash_identifier] - Unique hash identifier for the invoice.
 * @property {InvoicesDataPaymentMethod} [payment_method]
 * @property {InvoiceItems[]} [invoice_items] - List of items included in the invoice.
 * @property {string} [invoice_type] - Type of invoice (e.g., extension, subscription).
 */

/**
 * @typedef Invoices
 * @property {InvoicesData[]} [data]
 * @property {number} [start] - Index of the first item in the results.
 * @property {number} [end] - Index of the last item in the results.
 * @property {number} [limit] - Number of items per page.
 * @property {number} [page] - Page number of the results.
 * @property {number} [total] - Total number of items available.
 */

/**
 * @typedef Phone
 * @property {string} [phone_number] - The phone number of the contact.
 * @property {string} [phone_country_code] - The country code of the phone number.
 */

/**
 * @typedef SubscriptionBillingAddress
 * @property {string} [country] - Name of the country for the billing address.
 * @property {string} [country_code] - ISO country code for the billing address.
 * @property {string} [state] - State or province for the billing address.
 * @property {string} [city] - City for the billing address.
 * @property {string} [line1] - First line of the street address.
 * @property {string} [line2] - Second line of the street address (optional).
 * @property {string} [postal_code] - Postal or ZIP code for the billing address.
 */

/**
 * @typedef SubscriptionCustomer
 * @property {Phone} [phone]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [_id] - Unique identifier for the subscriber.
 * @property {string} [unique_id] - Identifier specific to the company.
 * @property {string} [type] - Type of the customer (e.g., developer, company).
 * @property {string} [name] - Name of the customer.
 * @property {string} [email] - Email address of the customer.
 * @property {string} [created_at] - Timestamp when the customer record was created.
 * @property {string} [modified_at] - Timestamp when the customer record was
 *   last modified.
 * @property {Object} [data] - Additional data related to the customer.
 * @property {Object} [documents] - Associated documents related to the customer.
 * @property {boolean} [consent] - Indicates whether the customer has given consent.
 * @property {boolean} [comms] - Indicates whether the customer has opted in for
 *   communications.
 * @property {number} [credit_balance] - Current credit balance for the customer, if any.
 * @property {BusinessCountryInfo} [business_country_info]
 */

/**
 * @typedef SubscriptionCustomerCreate
 * @property {Phone} [phone]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [unique_id] - Company id for the customer, generated by the client.
 * @property {string} [type] - Type of company
 * @property {string} [name] - Name of the company
 * @property {string} [email] - Email address of the company
 */

/**
 * @typedef SubscriptionCurrentPeriod
 * @property {string} [start] - The start date and time of the current
 *   subscription period.
 * @property {string} [end] - The end date and time of the current subscription period.
 */

/**
 * @typedef SubscriptionPauseCollection
 * @property {string} [behavior] - Defines the behavior of the subscription when
 *   it is paused. Possible values could include `keep_as_draft` or `cancel`.
 * @property {string} [resume_at] - The date and time when the paused
 *   subscription is scheduled to resume.
 */

/**
 * @typedef SubscriptionTrial
 * @property {string} [start] - The start date and time of the subscription trial period.
 * @property {string} [end] - The end date and time of the subscription trial period.
 */

/**
 * @typedef SubscriptionInvoiceSettings
 * @property {boolean} [generation] - Indicates whether invoices are
 *   automatically generated for the subscription.
 * @property {boolean} [charging] - Indicates whether charging is enabled for
 *   the subscription. This setting determines if charges are applied based on
 *   the invoice settings.
 */

/**
 * @typedef Subscription
 * @property {Object} [meta] - Additional metadata related to the subscription.
 * @property {SubscriptionCurrentPeriod} [current_period]
 * @property {SubscriptionPauseCollection} [pause_collection]
 * @property {SubscriptionTrial} [trial]
 * @property {SubscriptionInvoiceSettings} [invoice_settings]
 * @property {boolean} [is_active] - Indicates whether the subscription is
 *   currently active.
 * @property {boolean} [cancel_at_period_end] - Indicates whether the
 *   subscription will be canceled at the end of the current period.
 * @property {string} [_id] - Unique identifier for the subscription.
 * @property {string} [subscriber_id] - Unique identifier for the subscriber
 *   associated with the subscription.
 * @property {string} [plan_id] - Unique identifier for the plan associated with
 *   the subscription.
 * @property {string} [product_suite_id] - Unique identifier for the product
 *   suite associated with the subscription.
 * @property {boolean} [is_eligible_for_plan_change] - Indicates whether the
 *   subscriber is eligible to change their subscription plan.
 * @property {Plan} [plan_data]
 * @property {string} [current_status] - The current status of the subscription
 *   (e.g., active, canceled).
 * @property {string} [collection_method] - Method used to collect payments for
 *   the subscription (e.g., charge_automatically, invoice).
 * @property {string} [created_at] - The date and time when the subscription was created.
 * @property {string} [modified_at] - The date and time when the subscription
 *   was last modified.
 * @property {string} [latest_invoice] - Unique identifier for the most recent
 *   invoice related to the subscription.
 * @property {string} [channel_type] - Ordering channel for which the
 *   subscription was created (e.g., ecomm, fynd).
 * @property {boolean} [freezed] - Indicates whether the subscription is
 *   currently freezed.
 * @property {string} [cancel_at] - The date and time when the subscription is
 *   scheduled to be canceled, if applicable.
 * @property {string} [canceled_at] - The date and time when the subscription
 *   was actually canceled.
 */

/**
 * @typedef SubscriptionStatus
 * @property {boolean} [is_enabled] - Indicates whether the subscription status
 *   is enabled.
 * @property {Subscription} [subscription]
 * @property {InvoicesData} [latest_invoice]
 * @property {Plan} [next_plan]
 * @property {Subscription[]} [current_subscriptions] - List of current
 *   subscriptions associated with the user.
 * @property {number} [mandate_amount] - The amount mandated for the
 *   subscription or service.
 * @property {string} [message] - A message providing additional context or
 *   information about the subscription status.
 */

/**
 * @typedef SubscriptionLimitApplication
 * @property {boolean} [enabled] - Indicates whether the application limit is enabled.
 * @property {number} [hard_limit] - The maximum number of applications allowed.
 * @property {number} [soft_limit] - The soft limit of applications allowed,
 *   typically a warning threshold before reaching the hard limit.
 */

/**
 * @typedef SubscriptionLimitMarketplace
 * @property {boolean} [enabled] - Indicates whether the marketplace limit is enabled.
 */

/**
 * @typedef SubscriptionLimitOtherPlatform
 * @property {boolean} [enabled] - Indicates whether the other platform limit is enabled.
 */

/**
 * @typedef SubscriptionLimitTeam
 * @property {number} [limit] - The limit for team-related features.
 */

/**
 * @typedef SubscriptionLimitProducts
 * @property {boolean} [bulk] - Indicates whether bulk product limits are enabled.
 * @property {number} [limit] - The limit for products.
 */

/**
 * @typedef SubscriptionLimitExtensions
 * @property {boolean} [enabled] - Indicates whether the extensions limit is enabled.
 * @property {number} [limit] - The limit for extensions.
 */

/**
 * @typedef SubscriptionLimitIntegrations
 * @property {boolean} [enabled] - Indicates whether the integrations limit is enabled.
 * @property {number} [limit] - The limit for integrations. A value of `-1`
 *   usually indicates no limit.
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
 * @property {boolean} [is_trial_plan] - Indicates whether the subscription is
 *   for a trial plan.
 */

/**
 * @typedef IntentReq
 * @property {string} [unique_external_id] - A unique identifier for the
 *   external resource, used to track and reference the request like company id.
 * @property {string} [plan_id] - The identifier for the plan associated with the intent.
 */

/**
 * @typedef PutIntentReq
 * @property {string} [unique_external_id] - A unique identifier for the
 *   external resource, used to track and reference the request like company id.
 * @property {string} [setup_intent_id] - The ID of the setup intent for payment
 *   methods, if applicable.
 * @property {string} [payment_method_id] - The ID of the payment method to use
 *   for the intent.
 * @property {boolean} [set_default] - Indicates whether the payment method
 *   should be set as default.
 */

/**
 * @typedef SubscriptionActivateReq
 * @property {string} [unique_id] - A unique identifier for the subscription
 *   activation request.
 * @property {string} [type] - The type of subscriber account, e.g., company or developer.
 * @property {string} [product_suite] - The product suite associated with the
 *   subscription.
 * @property {string} [plan_id] - The ID of the plan to be activated for the subscription.
 * @property {string} [payment_method] - The payment method ID to be used for
 *   this subscription.
 * @property {string} [subscription_id] - The ID of the subscription to be
 *   activated, if applicable.
 * @property {string} [coupon] - A coupon code for applying discounts, if applicable.
 * @property {Object} [meta] - Additional metadata related to the subscription
 *   activation request.
 */

/**
 * @typedef SubscriptionActivateRes
 * @property {boolean} [success] - Indicates whether the subscription activation
 *   was successful.
 * @property {Subscription} [data]
 */

/**
 * @typedef CancelSubscriptionReq
 * @property {string} [unique_id] - A unique identifier for the subscription
 *   cancellation request like company id.
 * @property {string} [type] - The type of subscription to be canceled, e.g.,
 *   company or developer.
 * @property {string} [product_suite] - The product suite associated with the
 *   subscription to be canceled.
 * @property {string} [subscription_id] - The ID of the subscription to be canceled.
 */

/**
 * @typedef CancelSubscriptionRes
 * @property {boolean} [success]
 * @property {Subscription} [data]
 */

/**
 * @typedef PlanStatusUpdateReq
 * @property {string} [plan_id] - The identifier of the plan whose status is
 *   being updated.
 * @property {string} [reason] - The reason for updating the plan status.
 * @property {string} [seller_status] - The new status of the plan as set by the
 *   seller (e.g., approved, rejected, pending).
 */

/**
 * @typedef SubscribePlan
 * @property {string} [entity_type] - The type of entity for which the plan is
 *   being subscribed (e.g., subscription, extension).
 * @property {string} [collection_type] - The method of collection for the
 *   subscription (e.g., online, offline).
 * @property {string} [plan_id] - The identifier of the plan to subscribe to.
 * @property {string} [callback_url] - URL to which the payment result will be sent
 * @property {Meta} [meta]
 */

/**
 * @typedef Meta
 * @property {boolean} [subscribe] - Indicates whether the subscription is being
 *   initiated.
 * @property {boolean} [is_custom_plan] - Indicates if the plan is a custom plan
 *   rather than a standard one.
 * @property {boolean} [is_plan_upgrade] - Indicates whether this subscription
 *   is an upgrade from a previous plan.
 */

/**
 * @typedef SubscribePlanRes
 * @property {string} [redirect_url] - The URL to which the user should be
 *   redirected after completion of subscription process.
 * @property {string} [transaction_id] - The unique identifier for the
 *   subscription transaction.
 * @property {string} [current_status] - The current status of the subscription
 *   process (e.g., initiated, success, failed).
 * @property {Meta} [meta]
 */

/**
 * @typedef EntityDetail
 * @property {string} [entity] - Specifies the type of entity (e.g., subscription, user).
 * @property {Subscription} [item]
 */

/**
 * @typedef PaymentOptions
 * @property {string} [_id] - Unique identifier for the payment option.
 * @property {string} [name] - Name of the payment option.
 * @property {string} [description] - Brief description of the payment option's
 *   functionality.
 * @property {string} [logo] - URL of the payment option's logo like upi logo.
 * @property {string} [aggregator_id] - Unique identifier for the payment aggregator.
 * @property {string} [aggregator] - Identifier for the payment aggregator system.
 * @property {string} [created_at] - Date and time when the payment option was created.
 * @property {string} [modified_at] - Date and time when the payment option was
 *   last modified.
 * @property {number} [__v] - Version key for document revision control.
 */

/**
 * @typedef VerifyPaymentReq
 * @property {string} [razorpay_payment_id] - Unique identifier for the Razorpay payment.
 * @property {string} [razorpay_order_id] - Unique identifier for the Razorpay order.
 * @property {string} [razorpay_signature] - Signature generated by Razorpay to
 *   verify the payment.
 * @property {number} [status_code] - HTTP status code of the payment
 *   verification response.
 * @property {string} [provider_type] - The payment provider used for the transaction.
 */

/**
 * @typedef Documents
 * @property {string} [pan] - Permanent Account Number (PAN) used for tax purposes.
 * @property {string} [gst] - Goods and Services Tax (GST) number for business taxation.
 */

/**
 * @typedef BillingAddress
 * @property {string} [country] - The country where the billing address is located.
 * @property {string} [state] - The state or region within the country.
 * @property {string} [city] - The city of the billing address.
 * @property {string} [line1] - The first line of the billing address.
 * @property {string} [line2] - The second line of the billing address (if applicable).
 * @property {string} [postal_code] - The ZIP code of the billing address.
 * @property {string} [country_code] - ISO country code for the country of the
 *   billing address.
 */

/**
 * @typedef Currency
 * @property {string} [code] - Currency code as per ISO 4217.
 * @property {string} [symbol] - Symbol representing the currency.
 * @property {string} [name] - Full name of the currency.
 */

/**
 * @typedef BusinessCountryInfo
 * @property {string} [country] - The country where the business is registered.
 * @property {string} [country_code] - ISO country code for the business's country.
 * @property {Currency} [currency]
 * @property {string} [timezone] - Timezone in which the business operates.
 */

/**
 * @typedef SubscriberData
 * @property {boolean} [pg_user_exists] - Indicates if the user exists in the
 *   payment gateway system.
 * @property {string} [id] - Unique identifier for the subscriber.
 * @property {string} [pg_customer_id] - Unique customer ID assigned by the
 *   payment gateway.
 * @property {string} [default_payment_method] - Identifier for the default
 *   payment method used by the subscriber.
 */

/**
 * @typedef Subscriber
 * @property {Documents} [documents]
 * @property {Object} [phone] - Contact information for the subscriber, such as
 *   phone number.
 * @property {BillingAddress} [billing_address]
 * @property {boolean} [consent] - Indicates whether the subscriber has given
 *   consent for processing.
 * @property {boolean} [comms] - Indicates whether the subscriber has opted in
 *   for communications.
 * @property {string} [_id] - Unique identifier for the subscriber in the system.
 * @property {string} [type] - The type of the subscriber, such as 'individual'
 *   or 'company'.
 * @property {string} [unique_id] - A unique identifier assigned to the subscriber.
 * @property {string} [name] - The name of the subscriber.
 * @property {string} [email] - Email address of the subscriber.
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [created_at] - The date and time when the subscriber was created.
 * @property {string} [modified_at] - The date and time when the subscriber
 *   details were last modified.
 * @property {number} [credit_balance] - The current credit balance for the
 *   subscriber, if any.
 * @property {SubscriberData} [data]
 */

/**
 * @typedef AuthorModifiedDetails
 * @property {string} [first_name] - The first name of the author who made modifications.
 * @property {string} [last_name] - The last name of the author who made modifications.
 * @property {boolean} [is_admin] - Indicates whether the author has
 *   administrative privileges.
 */

/**
 * @typedef Author
 * @property {AuthorModifiedDetails} [modified_by_details]
 * @property {string} [created_by] - Identifier of the user who created the record.
 * @property {string} [modified_by] - Identifier of the user who last modified the record.
 */

/**
 * @typedef EndingBalance
 * @property {number} [amount] - The ending balance amount.
 * @property {string} [old_entry_ref] - Reference to the previous entry if applicable.
 */

/**
 * @typedef PaymentData
 * @property {string} [transaction_id] - The unique identifier for the transaction.
 * @property {string} [aggregator] - The payment aggregator used for the transaction.
 * @property {string} [aggregator_order_id] - The order ID generated by the
 *   payment aggregator.
 * @property {string} [receipt_date] - The date and time when the receipt was generated.
 * @property {string} [unique_transaction_reference] - A unique reference for
 *   the transaction.
 */

/**
 * @typedef CreditTransaction
 * @property {Object} [entity] - The entity associated with the transaction.
 * @property {Author} [author]
 * @property {string} [_id] - The unique identifier for the credit transaction.
 * @property {number} [amount] - The amount credited in the transaction.
 * @property {string} [currency] - The currency of the transaction amount.
 * @property {string} [subscriber_id] - The unique identifier of the subscriber
 *   involved in the transaction.
 * @property {string} [description] - A brief description of the transaction.
 * @property {string} [is_test] - Indicates if the transaction is a test transaction.
 * @property {EndingBalance} [ending_balance]
 * @property {PaymentData} [payment]
 * @property {string} [type] - The type of credit transaction.
 * @property {string} [created_at] - The date and time when the transaction was created.
 * @property {string} [modified_at] - The date and time when the transaction was
 *   last modified.
 */

/**
 * @typedef VerifyPaymentData
 * @property {boolean} [success] - Indicates if the payment verification was successful.
 * @property {Subscriber} [subscriber]
 * @property {CreditTransaction} [credit_transaction]
 */

/**
 * @typedef VerifyPaymentRes
 * @property {string} [status] - The status of the payment verification.
 * @property {VerifyPaymentData} [data]
 */

/**
 * @typedef DefaultMerchants
 * @property {string} [stripe] - The default Stripe merchant identifier.
 */

/**
 * @typedef GlobalSettingsPayment
 * @property {DefaultMerchants} [default_merchants]
 */

/**
 * @typedef GlobalSettingsData
 * @property {GlobalSettingsPayment} [payment]
 * @property {boolean} [freeze_panel] - Indicates if the panel is frozen.
 * @property {string} [_id] - Unique identifier for the global settings.
 * @property {string} [created_at] - The date and time when the global settings
 *   were created.
 * @property {string} [modified_at] - The date and time when the global settings
 *   were last modified.
 */

/**
 * @typedef GlobalSettings
 * @property {string} [status] - The status of the global settings retrieval.
 * @property {GlobalSettingsData} [data]
 */

/**
 * @typedef MethodChecks
 * @property {string} [address_line1_check] - Result of the address line 1 check.
 * @property {string} [address_postal_code_check] - Result of the address postal
 *   code check.
 * @property {string} [cvc_check] - Result of the CVC check.
 */

/**
 * @typedef MethodNetworks
 * @property {string[]} [available] - List of available networks for the payment method.
 * @property {string} [preferred] - Preferred network for the payment method.
 */

/**
 * @typedef MethodSecureUsage
 * @property {boolean} [supported] - Indicates if 3D Secure is supported for the
 *   payment method.
 */

/**
 * @typedef MethodDetails
 * @property {string} [id] - Unique identifier for the payment method.
 * @property {string} [type] - Type of payment method.
 * @property {boolean} [mandate_available] - Indicates if a mandate is available
 *   for the payment method.
 * @property {number} [mandate_amount] - Mandate amount for the payment method.
 * @property {string} [pg_payment_method_id] - Payment gateway's payment method
 *   identifier.
 * @property {boolean} [is_default] - Indicates if the payment method is the default.
 * @property {SubscriptionMethodData} [data]
 */

/**
 * @typedef SubscriptionMethodData
 * @property {string} [brand] - Brand of the payment method.
 * @property {MethodChecks} [checks]
 * @property {string} [country] - Country of the payment method.
 * @property {number} [exp_month] - Expiration month of the payment method.
 * @property {number} [exp_year] - Expiration year of the payment method.
 * @property {string} [fingerprint] - Fingerprint of the payment method.
 * @property {string} [funding] - Funding type of the payment method.
 * @property {string} [generated_from] - Source from which the payment method
 *   was generated.
 * @property {string} [last4] - Last 4 digits of the payment method.
 * @property {MethodNetworks} [networks]
 * @property {MethodSecureUsage} [three_d_secure_usage]
 * @property {string} [wallet] - Wallet associated with the payment method.
 * @property {string} [name] - Name associated with the payment method.
 * @property {boolean} [is_default] - Indicates if the payment method is the default.
 */

/**
 * @typedef SubscriptionMethods
 * @property {boolean} [success] - Indicates if the retrieval of subscription
 *   methods was successful.
 * @property {MethodDetails[]} [data] - List of subscription methods.
 */

/**
 * @typedef ConfigPublicKey
 * @property {string} [public_key] - Public key for the payment aggregator.
 */

/**
 * @typedef ConfigRes
 * @property {boolean} [success] - Indicates if the retrieval of configuration
 *   was successful.
 * @property {string} [aggregator] - The payment aggregator.
 * @property {ConfigPublicKey} [config]
 */

/**
 * @typedef PlanChangeData
 * @property {number} [total] - The total amount after the plan change.
 * @property {number} [credit_note_amount] - The amount credited due to the plan change.
 * @property {number} [settlement] - The settlement amount for the plan change.
 * @property {number} [taxable_amount] - The taxable amount for the plan change.
 * @property {number} [gst_amount] - The GST amount for the plan change.
 * @property {number} [gross_total] - The gross total amount for the plan change.
 * @property {number} [gst] - The GST for the plan change.
 * @property {number} [discount] - The discount amount applied to the plan change.
 */

/**
 * @typedef PlanChangeDetails
 * @property {string} [status] - Status of the plan change.
 * @property {PlanChangeData} [data]
 */

/**
 * @typedef TransactionMeta
 * @property {string} [invoice_id] - Invoice ID associated with the transaction.
 */

/**
 * @typedef PaymentTransactionDetails
 * @property {Object} [aggregator] - Payment aggregator details.
 * @property {string} [currency] - Currency used in the transaction.
 * @property {string} [current_status] - Current status of the transaction.
 * @property {string} [_id] - Unique identifier for the payment transaction.
 * @property {string} [subscriber_id] - Unique identifier for the subscriber.
 * @property {number} [amount] - Amount involved in the transaction.
 * @property {string} [entity_type] - Type of entity involved in the transaction.
 * @property {string} [collection_type] - Type of collection for the transaction.
 * @property {TransactionMeta} [meta]
 * @property {string} [created_at] - Timestamp when the transaction was created.
 * @property {string} [modified_at] - Timestamp when the transaction was last modified.
 */

/**
 * @typedef PaymentItems
 * @property {string} [name] - Name of the payment option.
 * @property {string} [code] - Code for the payment option
 * @property {string} [aggregator] - Aggregator used for the payment option.
 */

/**
 * @typedef GetPaymentOptions
 * @property {PaymentItems[]} [payment_options] - List of available payment options.
 */

/**
 * @typedef TopupReq
 * @property {number} [amount] - Amount to be topped up.
 * @property {string} [currency] - Currency in which the top-up is made.
 * @property {string} [provider_type] - Provider type for the top-up.
 */

/**
 * @typedef SetupMandateReq
 * @property {string} [intent_id] - ID of the setup intent.
 * @property {string} [payment_method_id] - ID of the payment method.
 */

/**
 * @typedef SetupPaymentReq
 * @property {string} [payment_method] - Payment method to be used.
 * @property {string} [payment_id] - ID of the payment.
 * @property {string} [plan_id] - ID of the plan.
 * @property {string} [invoice_id] - ID of the invoice.
 */

/**
 * @typedef SubscriptionRenewReq
 * @property {string} [invoice_id] - ID of the invoice for renewal.
 * @property {string} [entity_type] - Type of entity for the renewal.
 * @property {string} [collection_type] - Collection type for the renewal.
 * @property {string} [callback_url] - URL to which the payment result will be sent
 * @property {RenewMeta} [meta]
 */

/**
 * @typedef RenewMeta
 * @property {boolean} [invoice_payment] - Indicates whether the invoice payment
 *   is involved in the renewal.
 * @property {boolean} [renew] - Indicates whether the subscription is being renewed.
 */

/**
 * @typedef SubscriptionMethodsReq
 * @property {string} [unique_external_id] - The unique external identifier for
 *   the subscription method.
 * @property {string} [setup_intent_id] - The setup intent ID for the subscription method.
 * @property {string} [pg_payment_method_id] - The payment gateway payment method ID.
 * @property {boolean} [set_default] - Indicates whether this payment method
 *   should be set as the default.
 */

/**
 * @typedef CreditTransactionResponse
 * @property {number} [total] - Total number of transactions.
 * @property {number} [limit] - Maximum number of transactions per page.
 * @property {number} [page] - Current page number.
 * @property {number} [pages] - Total number of pages.
 * @property {CreditTransaction[]} [items] - List of credit transactions.
 */

/**
 * @typedef DowngradePlanReq
 * @property {string} [unique_id] - Unique identifier for the request.
 * @property {string} [type] - Type of entity requesting the downgrade.
 * @property {string} [product_suite] - Product suite for the plan.
 * @property {string} [plan_id] - Plan ID for the downgrade request.
 * @property {string} [reason] - Reason for downgrading the plan.
 * @property {string} [platform] - Platform from which the request is made.
 */

/**
 * @typedef Taxation
 * @property {number} [gst] - GST percentage.
 */

/**
 * @typedef OneTimeFees
 * @property {number} [developement] - One-time development fee.
 * @property {number} [marketing] - One-time marketing fee.
 */

/**
 * @typedef CreditLine
 * @property {boolean} [is_active] - Indicates whether the credit line is active.
 */

/**
 * @typedef StatusMessage
 * @property {string} [status] - Status of the request.
 * @property {string} [message] - Detailed message regarding the status.
 * @property {boolean} [success] - Indicates whether the operation was successful.
 * @property {string} [code] - Status code of the operation.
 */

/**
 * @typedef PaymentCollectReq
 * @property {string} [transaction_id] - ID of the transaction to collect payment for.
 * @property {boolean} [credit_balance] - Indicates whether to use credit
 *   balance for the payment.
 * @property {string} [payment_mode] - Mode of payment.
 * @property {string} [payment_method] - Payment method to be used.
 * @property {string} [invoice_id] - ID of the invoice for which the payment is collected.
 */

/**
 * @typedef SubscriptionRenewResMeta
 * @property {boolean} [invoice_payment] - Indicates whether the invoice payment
 *   is involved in the renewal.
 * @property {boolean} [renew] - Indicates whether the subscription is being renewed.
 */

/**
 * @typedef SubscriptionRenewRes
 * @property {string} [redirect_url] - URL to redirect the user for completing
 *   the renewal.
 * @property {string} [transaction_id] - ID of the renewal transaction.
 * @property {string} [current_status] - Current status of the renewal process.
 * @property {SubscriptionRenewResMeta} [meta]
 */

/**
 * @typedef SetupIntentRes
 * @property {boolean} [success] - Indicates if the setup intent was successful.
 * @property {SetupIntentData} [data]
 */

/**
 * @typedef SetupIntentData
 * @property {string} [id] - The ID of the setup intent.
 * @property {string} [client_secret] - The client secret of the setup intent.
 * @property {string} [customer] - The customer associated with the setup intent.
 * @property {string} [status] - The status of the setup intent.
 */

/**
 * @typedef SetupPayment
 * @property {string} [id] - The ID of the setup payment.
 * @property {string} [status] - The status of the setup payment.
 * @property {string} [customer] - The customer associated with the setup payment.
 * @property {string} [client_secret] - The client secret of the setup payment.
 * @property {string} [payment_method] - The payment method used for the setup payment.
 * @property {string} [mandate] - The mandate ID associated with the setup payment.
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
 * @property {number} [amount] - The mandate amount.
 */

/**
 * @typedef Message
 * @property {string} [message] - A message providing details about the operation status.
 */

/**
 * @typedef TopupRes
 * @property {string} [status] - The status of the top-up request.
 * @property {string} [aggregator_order_id] - The order ID from the aggregator.
 * @property {number} [amount] - The amount of the top-up.
 * @property {string} [currency] - The currency of the top-up.
 * @property {string} [transaction_id] - The transaction ID for the top-up.
 */

/**
 * @typedef CancelTopupReq
 * @property {string} [order_id] - The order ID of the top-up to cancel.
 */

/**
 * @typedef CancelTopupRes
 * @property {string} [_id] - The ID of the canceled top-up.
 * @property {string} [subscriber_id] - The subscriber ID associated with the top-up.
 * @property {number} [amount] - The amount of the canceled top-up.
 * @property {string} [currency] - The currency of the canceled top-up.
 * @property {string} [aggregator] - The aggregator used for the top-up.
 * @property {string} [aggregator_order_id] - The order ID from the aggregator.
 * @property {string} [created_at] - The date and time when the top-up was created.
 * @property {string} [modified_at] - The date and time when the top-up was modified.
 * @property {number} [__v] - The version key, used for internal purposes.
 * @property {string} [aggregator_status] - The status of the top-up with the aggregator.
 * @property {string} [current_status] - The current status of the top-up.
 */

/**
 * @typedef DefaultReq
 * @property {string} [payment_method_id] - The ID of the payment method to set
 *   as default.
 */

class BillingPlatformModel {
  /** @returns {CompanyInfo} */
  static CompanyInfo() {
    return Joi.object({
      company_name: Joi.string().allow(""),
      gstin: Joi.string().allow(""),
      address: Joi.string().allow(""),
      address_details: BillingPlatformModel.AddressDetails(),
      pan: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      email: Joi.string().allow(""),
      cin: Joi.string().allow(""),
    });
  }

  /** @returns {AddressDetails} */
  static AddressDetails() {
    return Joi.object({
      address_line_1: Joi.string().allow(""),
      address_line_2: Joi.string().allow(""),
      city: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceData} */
  static InvoiceData() {
    return Joi.object({
      invoice: BillingPlatformModel.InvoiceDetailsData(),
      invoice_items: Joi.array().items(BillingPlatformModel.InvoiceItems()),
      shopsense_details: BillingPlatformModel.CompanyInfo(),
    });
  }

  /** @returns {InvoiceDetailsData} */
  static InvoiceDetailsData() {
    return Joi.object({
      attemp: Joi.number().allow(null),
      documents: Joi.any(),
      payment: Joi.any(),
      period: BillingPlatformModel.Period(),
      client: BillingPlatformModel.Client(),
      discount: Joi.any(),
      taxation: Joi.any(),
      _id: Joi.string().allow(""),
      auto_advance: Joi.boolean(),
      collection_method: Joi.string().allow(""),
      subscriber_id: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      invoice_url: Joi.string().allow(""),
      number: Joi.string().allow(""),
      paid: Joi.boolean(),
      pg_data: Joi.any(),
      receipt_number: Joi.string().allow(""),
      statement_descriptor: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      status_trail: Joi.array().items(BillingPlatformModel.StatusTrail()),
      subtotal: Joi.number(),
      total: Joi.number(),
      old_settlement: Joi.number().allow(null),
      credit_balance: Joi.number().allow(null),
      subscription: Joi.string().allow(""),
      attempt: Joi.number(),
      next_action_time: Joi.string().allow(""),
      credit_note_amount: Joi.number(),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      invoice_type: Joi.string().allow(""),
    });
  }

  /** @returns {Client} */
  static Client() {
    return Joi.object({
      name: Joi.string().allow(""),
      email: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      address_lines: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Period} */
  static Period() {
    return Joi.object({
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
    });
  }

  /** @returns {StatusTrail} */
  static StatusTrail() {
    return Joi.object({
      value: Joi.string().allow(""),
      timestamp: Joi.string().allow(""),
      _id: Joi.string().allow(""),
    });
  }

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
      plan_platform_display_name: Joi.string().allow("").allow(null),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CountryRes} */
  static CountryRes() {
    return Joi.object({
      name: Joi.string().allow(""),
      code: Joi.string().allow(""),
    });
  }

  /** @returns {Plan} */
  static Plan() {
    return Joi.object({
      fee_components: Joi.array().items(Joi.any()).allow(null, ""),
      recurring: BillingPlatformModel.PlanRecurring(),
      is_trial_plan: Joi.boolean(),
      plan_group: Joi.string().allow(""),
      tag_lines: Joi.array().items(Joi.string().allow("")),
      currency: Joi.string().allow(""),
      approved_by: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_visible: Joi.boolean(),
      trial_period: Joi.number(),
      addons: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      country: BillingPlatformModel.CountryRes(),
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
      company_ids: Joi.array().items(Joi.string().allow("").allow(null)),
      platform: Joi.string().allow("").allow(null),
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

  /** @returns {InvoiceDetailsStatusTrail} */
  static InvoiceDetailsStatusTrail() {
    return Joi.object({
      _id: Joi.string().allow(""),
      value: Joi.string().allow(""),
      timestamp: Joi.string().allow(""),
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
      credit_balance: Joi.number().allow(null),
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
      invoice_type: Joi.string().allow(""),
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
      country_code: Joi.string().allow(""),
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
      credit_balance: Joi.number().allow(null),
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
      is_eligible_for_plan_change: Joi.boolean(),
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

  /** @returns {SubscribePlan} */
  static SubscribePlan() {
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
      id: Joi.string().allow(""),
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
      credit_balance: Joi.number().allow(null),
      data: BillingPlatformModel.SubscriberData(),
    });
  }

  /** @returns {AuthorModifiedDetails} */
  static AuthorModifiedDetails() {
    return Joi.object({
      first_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      is_admin: Joi.boolean(),
    });
  }

  /** @returns {Author} */
  static Author() {
    return Joi.object({
      modified_by_details: BillingPlatformModel.AuthorModifiedDetails(),
      created_by: Joi.string().allow(""),
      modified_by: Joi.string().allow(""),
    });
  }

  /** @returns {EndingBalance} */
  static EndingBalance() {
    return Joi.object({
      amount: Joi.number(),
      old_entry_ref: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PaymentData} */
  static PaymentData() {
    return Joi.object({
      transaction_id: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
      aggregator_order_id: Joi.string().allow(""),
      receipt_date: Joi.string().allow(""),
      unique_transaction_reference: Joi.string().allow(""),
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
      is_test: Joi.string().allow(""),
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
    }).allow(null);
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
      discount: Joi.number(),
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
      platform: Joi.string().allow("").allow(null),
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
      credit_balance: Joi.boolean().allow(null),
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
      customer: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {SetupPayment} */
  static SetupPayment() {
    return Joi.object({
      id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      customer: Joi.string().allow(""),
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
