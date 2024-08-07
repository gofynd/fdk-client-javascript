export = BillingPlatformModel;
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
/**
 * @typedef EntityChargeRecurring
 * @property {string} interval - The interval of the subscription.
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
 * @typedef CreateSubscriptionCharge
 * @property {string} name - The name of the charge.
 * @property {number} [trial_days]
 * @property {ChargeLineItem[]} line_items
 * @property {boolean} [is_test] - Indicates whether the charge is for testing purposes.
 * @property {string} return_url - The URL passed in request which extension
 *   expects in return.
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
 * @typedef CreateSubscriptionResponse
 * @property {EntitySubscription} [subscription]
 * @property {string} [confirm_url] - URL to which users are redirected to
 *   confirm or complete the payment or subscription process.
 */
declare class BillingPlatformModel {
}
declare namespace BillingPlatformModel {
    export { CompanyInfo, AddressDetails, InvoiceData, InvoiceDetailsData, Client, Period, StatusTrail, PaymentCollectRes, SubscriptionChargeRes, PostDowngradeRes, DowngradeRes, PaymentStatusData, PaymentStatusResponse, BadRequest, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, PlanMeta, CountryRes, Plan, SubscriptionTrialPeriod, EntityChargePrice, OneTimeChargeItem, CreateOneTimeCharge, ChargeRecurring, ChargeDetails, OneTimeChargeEntity, CreateOneTimeChargeResponse, Charge, InvoiceDetailsStatusTrail, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, IntentReq, PutIntentReq, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, PlanStatusUpdateReq, SubscribePlan, Meta, SubscribePlanRes, EntityDetail, PaymentOptions, VerifyPaymentReq, Documents, BillingAddress, Currency, BusinessCountryInfo, SubscriberData, Subscriber, AuthorModifiedDetails, Author, EndingBalance, PaymentData, CreditTransaction, VerifyPaymentData, VerifyPaymentRes, DefaultMerchants, GlobalSettingsPayment, GlobalSettingsData, GlobalSettings, MethodChecks, MethodNetworks, MethodSecureUsage, MethodDetails, SubscriptionMethodData, SubscriptionMethods, ConfigPublicKey, ConfigRes, PlanChangeData, PlanChangeDetails, TransactionMeta, PaymentTransactionDetails, PaymentItems, GetPaymentOptions, TopupReq, SetupMandateReq, SetupPaymentReq, SubscriptionRenewReq, RenewMeta, SubscriptionMethodsReq, CreditTransactionResponse, DowngradePlanReq, Taxation, OneTimeFees, CreditLine, StatusMessage, PaymentCollectReq, SubscriptionRenewResMeta, SubscriptionRenewRes, SetupIntentRes, SetupIntentData, SetupPayment, PaymentMethodOptions, Card, MandateOptions, Message, TopupRes, CancelTopupReq, CancelTopupRes, DefaultReq, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, EntityChargeDetails, EntitySubscription, CreateSubscriptionResponse };
}
/** @returns {CompanyInfo} */
declare function CompanyInfo(): CompanyInfo;
type CompanyInfo = {
    /**
     * - Name of the company
     */
    company_name?: string;
    /**
     * - Goods and Services Tax Identification Number
     */
    gstin?: string;
    /**
     * - Main address of the company
     */
    address?: string;
    address_details?: AddressDetails;
    /**
     * - Permanent Account Number of the company
     */
    pan?: string;
    /**
     * - Contact phone number for the company
     */
    phone?: string;
    /**
     * - Contact email address for the company
     */
    email?: string;
    /**
     * - Corporate Identification Number
     */
    cin?: string;
};
/** @returns {AddressDetails} */
declare function AddressDetails(): AddressDetails;
type AddressDetails = {
    /**
     * - First line of the address
     */
    address_line_1?: string;
    /**
     * - Second line of the address (optional)
     */
    address_line_2?: string;
    /**
     * - Company city
     */
    city?: string;
    /**
     * - Company pincode
     */
    pincode?: string;
    /**
     * - Company state
     */
    state?: string;
    /**
     * - Company country
     */
    country?: string;
};
/** @returns {InvoiceData} */
declare function InvoiceData(): InvoiceData;
type InvoiceData = {
    invoice?: InvoiceDetailsData;
    invoice_items?: InvoiceItems[];
    shopsense_details?: CompanyInfo;
};
/** @returns {InvoiceDetailsData} */
declare function InvoiceDetailsData(): InvoiceDetailsData;
type InvoiceDetailsData = {
    /**
     * - Number of attempts made to collect the invoice payment
     */
    attemp?: number;
    /**
     * - Documents associated with the invoice
     */
    documents?: any;
    /**
     * - Payment details related to the invoice
     */
    payment?: any;
    period?: Period;
    client?: Client;
    /**
     * - Discount applied to the invoice
     */
    discount?: any;
    /**
     * - Taxation applied to the invoice
     */
    taxation?: any;
    /**
     * - Unique identifier for the invoice
     */
    _id?: string;
    /**
     * - Indicates if the invoice will
     * automatically advance to the next stage of collection
     */
    auto_advance?: boolean;
    /**
     * - Method of collection (e.g.,
     * charge_automatically, send_invoice)
     */
    collection_method?: string;
    /**
     * - Identifier for the subscriber associated
     * with the invoice
     */
    subscriber_id?: string;
    /**
     * - Currency in which the invoice is issued
     */
    currency?: string;
    /**
     * - URL to view the invoice pdf
     */
    invoice_url?: string;
    /**
     * - Invoice number
     */
    number?: string;
    /**
     * - Indicates if the invoice has been paid
     */
    paid?: boolean;
    /**
     * - Payment gateway data related to the invoice
     */
    pg_data?: any;
    /**
     * - Receipt number for the invoice payment
     */
    receipt_number?: string;
    /**
     * - Statement descriptor for the invoice
     */
    statement_descriptor?: string;
    /**
     * - Current status of the invoice (e.g., paid, open)
     */
    current_status?: string;
    /**
     * - Trail of status changes for the invoice
     */
    status_trail?: StatusTrail[];
    /**
     * - Subtotal amount of the invoice
     */
    subtotal?: number;
    /**
     * - Total amount of the invoice
     */
    total?: number;
    /**
     * - Previous settlement amount (if any)
     */
    old_settlement?: number;
    /**
     * - Credit balance applied to the invoice
     */
    credit_balance?: number;
    /**
     * - Subscription associated with the invoice
     */
    subscription?: string;
    /**
     * - Number of attempts made to pay the invoice
     */
    attempt?: number;
    /**
     * - Timestamp for the next action on the invoice
     */
    next_action_time?: string;
    /**
     * - Amount of credit notes applied to the invoice
     */
    credit_note_amount?: number;
    /**
     * - Timestamp when the invoice was created
     */
    created_at?: string;
    /**
     * - Timestamp when the invoice was last modified
     */
    modified_at?: string;
    /**
     * - Type of invoice (e.g., subscription, extension)
     */
    invoice_type?: string;
};
/** @returns {Client} */
declare function Client(): Client;
type Client = {
    /**
     * - Name of the client
     */
    name?: string;
    /**
     * - Email address of the client
     */
    email?: string;
    /**
     * - Phone number of the client
     */
    phone?: string;
    /**
     * - List of address lines for the client's address
     */
    address_lines?: string[];
};
/** @returns {Period} */
declare function Period(): Period;
type Period = {
    /**
     * - Start date of the period
     */
    start?: string;
    /**
     * - End date of the period
     */
    end?: string;
};
/** @returns {StatusTrail} */
declare function StatusTrail(): StatusTrail;
type StatusTrail = {
    /**
     * - The status value of the invoice at a particular
     * timestamp (e.g., open, paid, payment_due)
     */
    value?: string;
    /**
     * - The date and time when the status was
     * recorded, in ISO 8601 format
     */
    timestamp?: string;
    /**
     * - Unique identifier for the status trail entry
     */
    _id?: string;
};
/** @returns {PaymentCollectRes} */
declare function PaymentCollectRes(): PaymentCollectRes;
type PaymentCollectRes = {
    /**
     * - Unique identifier for the transaction
     */
    transaction_id?: string;
    /**
     * - Current status of the payment
     * collection (e.g., pending, completed, failed)
     */
    current_status?: string;
};
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
/** @returns {PostDowngradeRes} */
declare function PostDowngradeRes(): PostDowngradeRes;
type PostDowngradeRes = {
    success?: boolean;
    data?: DowngradeRes;
};
/** @returns {DowngradeRes} */
declare function DowngradeRes(): DowngradeRes;
type DowngradeRes = {
    /**
     * - Unique identifier for the downgrade request
     */
    _id?: string;
    /**
     * - Current status of the downgrade request (e.g.,
     * pending, completed)
     */
    status?: string;
    /**
     * - Unique identifier for the subscriber
     * making the downgrade request
     */
    subscriber_id?: string;
    /**
     * - Indicates if the downgrade has been activated
     */
    activated?: boolean;
    /**
     * - Timestamp when the downgrade request was created
     */
    created_at?: string;
    /**
     * - Timestamp when the downgrade request was
     * last modified
     */
    modified_at?: string;
    /**
     * - ID of the plan to which the subscriber is downgrading
     */
    plan_id?: string;
    /**
     * - Reason provided for the downgrade request
     */
    reason?: string;
    /**
     * - ID of the user who initiated the
     * downgrade request
     */
    request_user_id?: string;
    /**
     * - ID of the subscription associated with
     * the downgrade request
     */
    subscription_id?: string;
};
/** @returns {PaymentStatusData} */
declare function PaymentStatusData(): PaymentStatusData;
type PaymentStatusData = {
    /**
     * - Unique identifier for the payment status data
     */
    _id?: string;
    /**
     * - Payment journey status, such as 'forward' or 'backward'
     */
    journey?: string;
    /**
     * - List of responses received from
     * webhooks related to the payment
     */
    webhook_response?: any[];
    /**
     * - Status of the payment as provided by
     * the aggregator (e.g., succeeded, failed)
     */
    aggregator_status?: string;
    /**
     * - Current status of the payment (e.g.,
     * paid, pending)
     */
    current_status?: string;
    /**
     * - Timestamp when the payment status data was created
     */
    created_at?: string;
    /**
     * - Timestamp when the payment status data was
     * last modified
     */
    modified_at?: string;
    /**
     * - Version key for the payment status data (typically
     * used for versioning in databases)
     */
    __v?: number;
    /**
     * - Unique identifier for the order
     * provided by the payment aggregator
     */
    aggregator_order_id?: string;
};
/** @returns {PaymentStatusResponse} */
declare function PaymentStatusResponse(): PaymentStatusResponse;
type PaymentStatusResponse = {
    /**
     * - The status of the payment.
     */
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
     * - Internal server error
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
    /**
     * - Indicates whether the request is valid.
     */
    is_valid?: boolean;
    /**
     * - The amount of discount applicable.
     */
    discount_amount?: number;
};
/** @returns {PlanRecurring} */
declare function PlanRecurring(): PlanRecurring;
type PlanRecurring = {
    /**
     * - The interval at which the plan recurs.
     */
    interval?: string;
    interval_count?: number;
};
/** @returns {PlanMeta} */
declare function PlanMeta(): PlanMeta;
type PlanMeta = {
    /**
     * - Status of the seller associated with the plan.
     */
    seller_status?: string;
    /**
     * - Name of the company offering the plan.
     */
    company?: string;
    /**
     * - Display name for platform slug.
     */
    plan_platform_display_name?: string;
    /**
     * - Tags associated with the plan for
     * categorization or identification.
     */
    tags?: string[];
};
/** @returns {CountryRes} */
declare function CountryRes(): CountryRes;
type CountryRes = {
    /**
     * - Name of the country.
     */
    name?: string;
    /**
     * - Country code.
     */
    code?: string;
};
/** @returns {Plan} */
declare function Plan(): Plan;
type Plan = {
    /**
     * - List of fee components associated
     * with the plan. Each component may be represented as a string or an object.
     */
    fee_components?: any[];
    recurring?: PlanRecurring;
    /**
     * - Indicates whether the plan is a trial plan.
     */
    is_trial_plan?: boolean;
    /**
     * - Group or category of the plan.
     */
    plan_group?: string;
    /**
     * - List of tag lines or descriptions
     * associated with the plan.
     */
    tag_lines?: string[];
    /**
     * - Currency code used for the plan's pricing.
     */
    currency?: string;
    /**
     * - Identifier of the user or system that
     * approved the plan.
     */
    approved_by?: string;
    /**
     * - Indicates if the plan is currently active.
     */
    is_active?: boolean;
    /**
     * - Indicates if the plan is visible to users.
     */
    is_visible?: boolean;
    /**
     * - Number of days for the trial period, if applicable.
     */
    trial_period?: number;
    /**
     * - List of add-ons available for the plan.
     */
    addons?: string[];
    /**
     * - List of tags associated with the plan.
     */
    tags?: string[];
    /**
     * - Type of the plan (e.g., public, private).
     */
    type?: string;
    country?: CountryRes;
    /**
     * - Unique identifier for the plan.
     */
    _id?: string;
    /**
     * - Name of the plan.
     */
    name?: string;
    /**
     * - Description of the plan.
     */
    description?: string;
    /**
     * - Amount to be charged for the plan.
     */
    amount?: number;
    /**
     * - Identifier of the product suite to
     * which the plan belongs.
     */
    product_suite_id?: string;
    /**
     * - Timestamp when the plan was created.
     */
    created_at?: string;
    /**
     * - Timestamp when the plan was last modified.
     */
    modified_at?: string;
    taxation?: Taxation;
    one_time_fees?: OneTimeFees;
    credit_line?: CreditLine;
    /**
     * - Current status of the plan (e.g.,
     * active, inactive).
     */
    current_status?: string;
    /**
     * - Type of channel where the plan is offered
     * (e.g., ecomm, retail).
     */
    channel_type?: string;
    /**
     * - List of company IDs associated with the
     * plan. Can be null.
     */
    company_ids?: string[];
    /**
     * - Platform where the plan is available (e.g.,
     * web, mobile). Can be null.
     */
    platform?: string;
    /**
     * - Timestamp when the plan was activated.
     */
    activated_on?: string;
    meta?: PlanMeta;
    /**
     * - Identifier of the user who created the plan.
     */
    created_by?: string;
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
/** @returns {ChargeRecurring} */
declare function ChargeRecurring(): ChargeRecurring;
type ChargeRecurring = {
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
/** @returns {Charge} */
declare function Charge(): Charge;
type Charge = {
    final_charge?: OneTimeChargeEntity;
};
/** @returns {InvoiceDetailsStatusTrail} */
declare function InvoiceDetailsStatusTrail(): InvoiceDetailsStatusTrail;
type InvoiceDetailsStatusTrail = {
    /**
     * - Unique identifier for the status trail entry.
     */
    _id?: string;
    /**
     * - The status value of the invoice at a particular
     * point in time.
     */
    value?: string;
    /**
     * - The date and time when this status was recorded.
     */
    timestamp?: string;
};
/** @returns {InvoiceItemsPlanRecurring} */
declare function InvoiceItemsPlanRecurring(): InvoiceItemsPlanRecurring;
type InvoiceItemsPlanRecurring = {
    /**
     * - The interval at which the plan recurs (e.g.,
     * month, year).
     */
    interval?: string;
    /**
     * - The number of intervals for the recurring plan.
     */
    interval_count?: number;
};
/** @returns {InvoiceItemsPlan} */
declare function InvoiceItemsPlan(): InvoiceItemsPlan;
type InvoiceItemsPlan = {
    recurring?: InvoiceItemsPlanRecurring;
    /**
     * - Indicates whether the plan is a trial plan.
     */
    is_trial_plan?: boolean;
    /**
     * - Group or category to which the plan belongs.
     */
    plan_group?: string;
    /**
     * - List of tag lines or short descriptions
     * for the plan.
     */
    tag_lines?: string[];
    /**
     * - Currency code for the pricing of the plan.
     */
    currency?: string;
    /**
     * - Indicates whether the plan is currently active.
     */
    is_active?: boolean;
    /**
     * - Indicates whether the plan is visible to users.
     */
    is_visible?: boolean;
    /**
     * - The number of days for the trial period.
     */
    trial_period?: number;
    /**
     * - List of add-ons available with the plan.
     */
    addons?: string[];
    /**
     * - Tags associated with the plan for categorization.
     */
    tags?: string[];
    /**
     * - Type of the plan (e.g., public, private).
     */
    type?: string;
    /**
     * - Country for which plan is created
     */
    country?: string;
    /**
     * - Unique identifier for the plan.
     */
    _id?: string;
    /**
     * - Name of the plan.
     */
    name?: string;
    /**
     * - Detailed description of the plan.
     */
    description?: string;
    /**
     * - Price of the plan in the specified currency.
     */
    amount?: number;
    /**
     * - Identifier for the product suite to
     * which the plan belongs.
     */
    product_suite_id?: string;
    /**
     * - Timestamp when the plan was created.
     */
    created_at?: string;
    /**
     * - Timestamp when the plan was last modified.
     */
    modified_at?: string;
};
/** @returns {InvoiceItemsPeriod} */
declare function InvoiceItemsPeriod(): InvoiceItemsPeriod;
type InvoiceItemsPeriod = {
    /**
     * - Start date of the invoice period.
     */
    start?: string;
    /**
     * - End date of the invoice period.
     */
    end?: string;
};
/** @returns {InvoiceItems} */
declare function InvoiceItems(): InvoiceItems;
type InvoiceItems = {
    /**
     * - Unique identifier for the invoice item.
     */
    _id?: string;
    /**
     * - Currency for the amount.
     */
    currency?: string;
    plan?: InvoiceItemsPlan;
    /**
     * - Name of the invoice item.
     */
    name?: string;
    /**
     * - Number of units of the invoice item.
     */
    quantity?: number;
    /**
     * - Description of the invoice item.
     */
    description?: string;
    period?: InvoiceItemsPeriod;
    /**
     * - Amount per unit of the invoice item.
     */
    unit_amount?: number;
    /**
     * - Total amount for the invoice item.
     */
    amount?: number;
    /**
     * - Type of the invoice item (e.g., subscription, extension).
     */
    type?: string;
    /**
     * - Identifier for the invoice to which the item belongs.
     */
    invoice_id?: string;
    /**
     * - Timestamp when the invoice item was created.
     */
    created_at?: string;
    /**
     * - Timestamp when the invoice item was last modified.
     */
    modified_at?: string;
};
/** @returns {InvoicesDataClient} */
declare function InvoicesDataClient(): InvoicesDataClient;
type InvoicesDataClient = {
    /**
     * - Name of the client.
     */
    name?: string;
    /**
     * - Email address of the client.
     */
    email?: string;
    /**
     * - Phone number of the client.
     */
    phone?: string;
    /**
     * - Array of address lines for the client’s address.
     */
    address_lines?: string[];
};
/** @returns {InvoicesDataPeriod} */
declare function InvoicesDataPeriod(): InvoicesDataPeriod;
type InvoicesDataPeriod = {
    /**
     * - The start date and time of the invoice period.
     */
    start?: string;
    /**
     * - The end date and time of the invoice period.
     */
    end?: string;
};
/** @returns {InvoicesDataPaymentMethod} */
declare function InvoicesDataPaymentMethod(): InvoicesDataPaymentMethod;
type InvoicesDataPaymentMethod = {
    /**
     * - Payment gateway-specific payment
     * method identifier. Nullable if not applicable.
     */
    pg_payment_method_id?: string;
};
/** @returns {InvoicesData} */
declare function InvoicesData(): InvoicesData;
type InvoicesData = {
    /**
     * - Unique identifier for the invoice.
     */
    _id?: string;
    /**
     * - Associated documents related to the invoice.
     */
    documents?: any;
    /**
     * - Payment details for the invoice.
     */
    payment?: any;
    /**
     * - Previous settlement amount, if applicable.
     */
    old_settlement?: number;
    /**
     * - Remaining credit balance applied to the
     * invoice, if any.
     */
    credit_balance?: number;
    /**
     * - Details of any discounts applied to the invoice.
     */
    discount?: any;
    /**
     * - Taxation details associated with the invoice.
     */
    taxation?: any;
    /**
     * - Amount covered by credit notes, if any.
     */
    credit_note_amount?: number;
    client?: InvoicesDataClient;
    /**
     * - Indicates if the invoice should be
     * auto-advanced in the billing process.
     */
    auto_advance?: boolean;
    /**
     * - Currency code used for the invoice amount.
     */
    currency?: string;
    /**
     * - Indicates if the invoice has been paid.
     */
    paid?: boolean;
    /**
     * - Number of payment attempts made for the invoice.
     */
    attemp?: number;
    /**
     * - Method used to collect payment for
     * the invoice.
     */
    collection_method?: string;
    /**
     * - Identifier for the subscriber associated
     * with the invoice.
     */
    subscriber_id?: string;
    /**
     * - URL to view or download the invoice.
     * "null" if not available.
     */
    invoice_url?: string;
    /**
     * - Unique invoice number.
     */
    number?: string;
    /**
     * - Payment gateway-related data for the invoice.
     */
    pg_data?: any;
    period?: InvoicesDataPeriod;
    /**
     * - Receipt number for the invoice payment.
     */
    receipt_number?: string;
    /**
     * - Descriptor that appears on the
     * client's statement for the invoice.
     */
    statement_descriptor?: string;
    /**
     * - Current status of the invoice (e.g.,
     * paid, pending).
     */
    current_status?: string;
    /**
     * - History of status
     * changes for the invoice.
     */
    status_trail?: InvoiceDetailsStatusTrail[];
    /**
     * - Subtotal amount before taxes and discounts.
     */
    subtotal?: number;
    /**
     * - Total amount including taxes and discounts.
     */
    total?: number;
    /**
     * - Identifier for the subscription
     * associated with the invoice.
     */
    subscription?: string;
    /**
     * - Scheduled time for the next action
     * related to the invoice.
     */
    next_action_time?: string;
    /**
     * - Timestamp when the invoice was created.
     */
    created_at?: string;
    /**
     * - Timestamp when the invoice was last modified.
     */
    modified_at?: string;
    /**
     * - Unique hash identifier for the invoice.
     */
    hash_identifier?: string;
    payment_method?: InvoicesDataPaymentMethod;
    /**
     * - List of items included in the invoice.
     */
    invoice_items?: InvoiceItems[];
    /**
     * - Type of invoice (e.g., extension, subscription).
     */
    invoice_type?: string;
};
/** @returns {Invoices} */
declare function Invoices(): Invoices;
type Invoices = {
    data?: InvoicesData[];
    /**
     * - Index of the first item in the results.
     */
    start?: number;
    /**
     * - Index of the last item in the results.
     */
    end?: number;
    /**
     * - Number of items per page.
     */
    limit?: number;
    /**
     * - Page number of the results.
     */
    page?: number;
    /**
     * - Total number of items available.
     */
    total?: number;
};
/** @returns {Phone} */
declare function Phone(): Phone;
type Phone = {
    /**
     * - The phone number of the contact.
     */
    phone_number?: string;
    /**
     * - The country code of the phone number.
     */
    phone_country_code?: string;
};
/** @returns {SubscriptionBillingAddress} */
declare function SubscriptionBillingAddress(): SubscriptionBillingAddress;
type SubscriptionBillingAddress = {
    /**
     * - Name of the country for the billing address.
     */
    country?: string;
    /**
     * - ISO country code for the billing address.
     */
    country_code?: string;
    /**
     * - State or province for the billing address.
     */
    state?: string;
    /**
     * - City for the billing address.
     */
    city?: string;
    /**
     * - First line of the street address.
     */
    line1?: string;
    /**
     * - Second line of the street address (optional).
     */
    line2?: string;
    /**
     * - Postal or ZIP code for the billing address.
     */
    postal_code?: string;
};
/** @returns {SubscriptionCustomer} */
declare function SubscriptionCustomer(): SubscriptionCustomer;
type SubscriptionCustomer = {
    phone?: Phone;
    billing_address?: SubscriptionBillingAddress;
    /**
     * - Unique identifier for the subscriber.
     */
    _id?: string;
    /**
     * - Identifier specific to the company.
     */
    unique_id?: string;
    /**
     * - Type of the customer (e.g., developer, company).
     */
    type?: string;
    /**
     * - Name of the customer.
     */
    name?: string;
    /**
     * - Email address of the customer.
     */
    email?: string;
    /**
     * - Timestamp when the customer record was created.
     */
    created_at?: string;
    /**
     * - Timestamp when the customer record was
     * last modified.
     */
    modified_at?: string;
    /**
     * - Additional data related to the customer.
     */
    data?: any;
    /**
     * - Associated documents related to the customer.
     */
    documents?: any;
    /**
     * - Indicates whether the customer has given consent.
     */
    consent?: boolean;
    /**
     * - Indicates whether the customer has opted in for
     * communications.
     */
    comms?: boolean;
    /**
     * - Current credit balance for the customer, if any.
     */
    credit_balance?: number;
    business_country_info?: BusinessCountryInfo;
};
/** @returns {SubscriptionCustomerCreate} */
declare function SubscriptionCustomerCreate(): SubscriptionCustomerCreate;
type SubscriptionCustomerCreate = {
    phone?: Phone;
    billing_address?: SubscriptionBillingAddress;
    /**
     * - Company id for the customer, generated by the client.
     */
    unique_id?: string;
    /**
     * - Type of company
     */
    type?: string;
    /**
     * - Name of the company
     */
    name?: string;
    /**
     * - Email address of the company
     */
    email?: string;
};
/** @returns {SubscriptionCurrentPeriod} */
declare function SubscriptionCurrentPeriod(): SubscriptionCurrentPeriod;
type SubscriptionCurrentPeriod = {
    /**
     * - The start date and time of the current
     * subscription period.
     */
    start?: string;
    /**
     * - The end date and time of the current subscription period.
     */
    end?: string;
};
/** @returns {SubscriptionPauseCollection} */
declare function SubscriptionPauseCollection(): SubscriptionPauseCollection;
type SubscriptionPauseCollection = {
    /**
     * - Defines the behavior of the subscription when
     * it is paused. Possible values could include `keep_as_draft` or `cancel`.
     */
    behavior?: string;
    /**
     * - The date and time when the paused
     * subscription is scheduled to resume.
     */
    resume_at?: string;
};
/** @returns {SubscriptionTrial} */
declare function SubscriptionTrial(): SubscriptionTrial;
type SubscriptionTrial = {
    /**
     * - The start date and time of the subscription trial period.
     */
    start?: string;
    /**
     * - The end date and time of the subscription trial period.
     */
    end?: string;
};
/** @returns {SubscriptionInvoiceSettings} */
declare function SubscriptionInvoiceSettings(): SubscriptionInvoiceSettings;
type SubscriptionInvoiceSettings = {
    /**
     * - Indicates whether invoices are
     * automatically generated for the subscription.
     */
    generation?: boolean;
    /**
     * - Indicates whether charging is enabled for
     * the subscription. This setting determines if charges are applied based on
     * the invoice settings.
     */
    charging?: boolean;
};
/** @returns {Subscription} */
declare function Subscription(): Subscription;
type Subscription = {
    /**
     * - Additional metadata related to the subscription.
     */
    meta?: any;
    current_period?: SubscriptionCurrentPeriod;
    pause_collection?: SubscriptionPauseCollection;
    trial?: SubscriptionTrial;
    invoice_settings?: SubscriptionInvoiceSettings;
    /**
     * - Indicates whether the subscription is
     * currently active.
     */
    is_active?: boolean;
    /**
     * - Indicates whether the
     * subscription will be canceled at the end of the current period.
     */
    cancel_at_period_end?: boolean;
    /**
     * - Unique identifier for the subscription.
     */
    _id?: string;
    /**
     * - Unique identifier for the subscriber
     * associated with the subscription.
     */
    subscriber_id?: string;
    /**
     * - Unique identifier for the plan associated with
     * the subscription.
     */
    plan_id?: string;
    /**
     * - Unique identifier for the product
     * suite associated with the subscription.
     */
    product_suite_id?: string;
    /**
     * - Indicates whether the
     * subscriber is eligible to change their subscription plan.
     */
    is_eligible_for_plan_change?: boolean;
    plan_data?: Plan;
    /**
     * - The current status of the subscription
     * (e.g., active, canceled).
     */
    current_status?: string;
    /**
     * - Method used to collect payments for
     * the subscription (e.g., charge_automatically, invoice).
     */
    collection_method?: string;
    /**
     * - The date and time when the subscription was created.
     */
    created_at?: string;
    /**
     * - The date and time when the subscription
     * was last modified.
     */
    modified_at?: string;
    /**
     * - Unique identifier for the most recent
     * invoice related to the subscription.
     */
    latest_invoice?: string;
    /**
     * - Ordering channel for which the
     * subscription was created (e.g., ecomm, fynd).
     */
    channel_type?: string;
    /**
     * - Indicates whether the subscription is
     * currently freezed.
     */
    freezed?: boolean;
    /**
     * - The date and time when the subscription is
     * scheduled to be canceled, if applicable.
     */
    cancel_at?: string;
    /**
     * - The date and time when the subscription
     * was actually canceled.
     */
    canceled_at?: string;
};
/** @returns {SubscriptionStatus} */
declare function SubscriptionStatus(): SubscriptionStatus;
type SubscriptionStatus = {
    /**
     * - Indicates whether the subscription status
     * is enabled.
     */
    is_enabled?: boolean;
    subscription?: Subscription;
    latest_invoice?: InvoicesData;
    next_plan?: Plan;
    /**
     * - List of current
     * subscriptions associated with the user.
     */
    current_subscriptions?: Subscription[];
    /**
     * - The amount mandated for the
     * subscription or service.
     */
    mandate_amount?: number;
    /**
     * - A message providing additional context or
     * information about the subscription status.
     */
    message?: string;
};
/** @returns {SubscriptionLimitApplication} */
declare function SubscriptionLimitApplication(): SubscriptionLimitApplication;
type SubscriptionLimitApplication = {
    /**
     * - Indicates whether the application limit is enabled.
     */
    enabled?: boolean;
    /**
     * - The maximum number of applications allowed.
     */
    hard_limit?: number;
    /**
     * - The soft limit of applications allowed,
     * typically a warning threshold before reaching the hard limit.
     */
    soft_limit?: number;
};
/** @returns {SubscriptionLimitMarketplace} */
declare function SubscriptionLimitMarketplace(): SubscriptionLimitMarketplace;
type SubscriptionLimitMarketplace = {
    /**
     * - Indicates whether the marketplace limit is enabled.
     */
    enabled?: boolean;
};
/** @returns {SubscriptionLimitOtherPlatform} */
declare function SubscriptionLimitOtherPlatform(): SubscriptionLimitOtherPlatform;
type SubscriptionLimitOtherPlatform = {
    /**
     * - Indicates whether the other platform limit is enabled.
     */
    enabled?: boolean;
};
/** @returns {SubscriptionLimitTeam} */
declare function SubscriptionLimitTeam(): SubscriptionLimitTeam;
type SubscriptionLimitTeam = {
    /**
     * - The limit for team-related features.
     */
    limit?: number;
};
/** @returns {SubscriptionLimitProducts} */
declare function SubscriptionLimitProducts(): SubscriptionLimitProducts;
type SubscriptionLimitProducts = {
    /**
     * - Indicates whether bulk product limits are enabled.
     */
    bulk?: boolean;
    /**
     * - The limit for products.
     */
    limit?: number;
};
/** @returns {SubscriptionLimitExtensions} */
declare function SubscriptionLimitExtensions(): SubscriptionLimitExtensions;
type SubscriptionLimitExtensions = {
    /**
     * - Indicates whether the extensions limit is enabled.
     */
    enabled?: boolean;
    /**
     * - The limit for extensions.
     */
    limit?: number;
};
/** @returns {SubscriptionLimitIntegrations} */
declare function SubscriptionLimitIntegrations(): SubscriptionLimitIntegrations;
type SubscriptionLimitIntegrations = {
    /**
     * - Indicates whether the integrations limit is enabled.
     */
    enabled?: boolean;
    /**
     * - The limit for integrations. A value of `-1`
     * usually indicates no limit.
     */
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
    /**
     * - Indicates whether the subscription is
     * for a trial plan.
     */
    is_trial_plan?: boolean;
};
/** @returns {IntentReq} */
declare function IntentReq(): IntentReq;
type IntentReq = {
    /**
     * - A unique identifier for the
     * external resource, used to track and reference the request like company id.
     */
    unique_external_id?: string;
    /**
     * - The identifier for the plan associated with the intent.
     */
    plan_id?: string;
};
/** @returns {PutIntentReq} */
declare function PutIntentReq(): PutIntentReq;
type PutIntentReq = {
    /**
     * - A unique identifier for the
     * external resource, used to track and reference the request like company id.
     */
    unique_external_id?: string;
    /**
     * - The ID of the setup intent for payment
     * methods, if applicable.
     */
    setup_intent_id?: string;
    /**
     * - The ID of the payment method to use
     * for the intent.
     */
    payment_method_id?: string;
    /**
     * - Indicates whether the payment method
     * should be set as default.
     */
    set_default?: boolean;
};
/** @returns {SubscriptionActivateReq} */
declare function SubscriptionActivateReq(): SubscriptionActivateReq;
type SubscriptionActivateReq = {
    /**
     * - A unique identifier for the subscription
     * activation request.
     */
    unique_id?: string;
    /**
     * - The type of subscriber account, e.g., company or developer.
     */
    type?: string;
    /**
     * - The product suite associated with the
     * subscription.
     */
    product_suite?: string;
    /**
     * - The ID of the plan to be activated for the subscription.
     */
    plan_id?: string;
    /**
     * - The payment method ID to be used for
     * this subscription.
     */
    payment_method?: string;
    /**
     * - The ID of the subscription to be
     * activated, if applicable.
     */
    subscription_id?: string;
    /**
     * - A coupon code for applying discounts, if applicable.
     */
    coupon?: string;
    /**
     * - Additional metadata related to the subscription
     * activation request.
     */
    meta?: any;
};
/** @returns {SubscriptionActivateRes} */
declare function SubscriptionActivateRes(): SubscriptionActivateRes;
type SubscriptionActivateRes = {
    /**
     * - Indicates whether the subscription activation
     * was successful.
     */
    success?: boolean;
    data?: Subscription;
};
/** @returns {CancelSubscriptionReq} */
declare function CancelSubscriptionReq(): CancelSubscriptionReq;
type CancelSubscriptionReq = {
    /**
     * - A unique identifier for the subscription
     * cancellation request like company id.
     */
    unique_id?: string;
    /**
     * - The type of subscription to be canceled, e.g.,
     * company or developer.
     */
    type?: string;
    /**
     * - The product suite associated with the
     * subscription to be canceled.
     */
    product_suite?: string;
    /**
     * - The ID of the subscription to be canceled.
     */
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
    /**
     * - The identifier of the plan whose status is
     * being updated.
     */
    plan_id?: string;
    /**
     * - The reason for updating the plan status.
     */
    reason?: string;
    /**
     * - The new status of the plan as set by the
     * seller (e.g., approved, rejected, pending).
     */
    seller_status?: string;
};
/** @returns {SubscribePlan} */
declare function SubscribePlan(): SubscribePlan;
type SubscribePlan = {
    /**
     * - The type of entity for which the plan is
     * being subscribed (e.g., subscription, extension).
     */
    entity_type?: string;
    /**
     * - The method of collection for the
     * subscription (e.g., online, offline).
     */
    collection_type?: string;
    /**
     * - The identifier of the plan to subscribe to.
     */
    plan_id?: string;
    /**
     * - URL to which the payment result will be sent
     */
    callback_url?: string;
    meta?: Meta;
};
/** @returns {Meta} */
declare function Meta(): Meta;
type Meta = {
    /**
     * - Indicates whether the subscription is being
     * initiated.
     */
    subscribe?: boolean;
    /**
     * - Indicates if the plan is a custom plan
     * rather than a standard one.
     */
    is_custom_plan?: boolean;
    /**
     * - Indicates whether this subscription
     * is an upgrade from a previous plan.
     */
    is_plan_upgrade?: boolean;
};
/** @returns {SubscribePlanRes} */
declare function SubscribePlanRes(): SubscribePlanRes;
type SubscribePlanRes = {
    /**
     * - The URL to which the user should be
     * redirected after completion of subscription process.
     */
    redirect_url?: string;
    /**
     * - The unique identifier for the
     * subscription transaction.
     */
    transaction_id?: string;
    /**
     * - The current status of the subscription
     * process (e.g., initiated, success, failed).
     */
    current_status?: string;
    meta?: Meta;
};
/** @returns {EntityDetail} */
declare function EntityDetail(): EntityDetail;
type EntityDetail = {
    /**
     * - Specifies the type of entity (e.g., subscription, user).
     */
    entity?: string;
    item?: Subscription;
};
/** @returns {PaymentOptions} */
declare function PaymentOptions(): PaymentOptions;
type PaymentOptions = {
    /**
     * - Unique identifier for the payment option.
     */
    _id?: string;
    /**
     * - Name of the payment option.
     */
    name?: string;
    /**
     * - Brief description of the payment option's
     * functionality.
     */
    description?: string;
    /**
     * - URL of the payment option's logo like upi logo.
     */
    logo?: string;
    /**
     * - Unique identifier for the payment aggregator.
     */
    aggregator_id?: string;
    /**
     * - Identifier for the payment aggregator system.
     */
    aggregator?: string;
    /**
     * - Date and time when the payment option was created.
     */
    created_at?: string;
    /**
     * - Date and time when the payment option was
     * last modified.
     */
    modified_at?: string;
    /**
     * - Version key for document revision control.
     */
    __v?: number;
};
/** @returns {VerifyPaymentReq} */
declare function VerifyPaymentReq(): VerifyPaymentReq;
type VerifyPaymentReq = {
    /**
     * - Unique identifier for the Razorpay payment.
     */
    razorpay_payment_id?: string;
    /**
     * - Unique identifier for the Razorpay order.
     */
    razorpay_order_id?: string;
    /**
     * - Signature generated by Razorpay to
     * verify the payment.
     */
    razorpay_signature?: string;
    /**
     * - HTTP status code of the payment
     * verification response.
     */
    status_code?: number;
    /**
     * - The payment provider used for the transaction.
     */
    provider_type?: string;
};
/** @returns {Documents} */
declare function Documents(): Documents;
type Documents = {
    /**
     * - Permanent Account Number (PAN) used for tax purposes.
     */
    pan?: string;
    /**
     * - Goods and Services Tax (GST) number for business taxation.
     */
    gst?: string;
};
/** @returns {BillingAddress} */
declare function BillingAddress(): BillingAddress;
type BillingAddress = {
    /**
     * - The country where the billing address is located.
     */
    country?: string;
    /**
     * - The state or region within the country.
     */
    state?: string;
    /**
     * - The city of the billing address.
     */
    city?: string;
    /**
     * - The first line of the billing address.
     */
    line1?: string;
    /**
     * - The second line of the billing address (if applicable).
     */
    line2?: string;
    /**
     * - The ZIP code of the billing address.
     */
    postal_code?: string;
    /**
     * - ISO country code for the country of the
     * billing address.
     */
    country_code?: string;
};
/** @returns {Currency} */
declare function Currency(): Currency;
type Currency = {
    /**
     * - Currency code as per ISO 4217.
     */
    code?: string;
    /**
     * - Symbol representing the currency.
     */
    symbol?: string;
    /**
     * - Full name of the currency.
     */
    name?: string;
};
/** @returns {BusinessCountryInfo} */
declare function BusinessCountryInfo(): BusinessCountryInfo;
type BusinessCountryInfo = {
    /**
     * - The country where the business is registered.
     */
    country?: string;
    /**
     * - ISO country code for the business's country.
     */
    country_code?: string;
    currency?: Currency;
    /**
     * - Timezone in which the business operates.
     */
    timezone?: string;
};
/** @returns {SubscriberData} */
declare function SubscriberData(): SubscriberData;
type SubscriberData = {
    /**
     * - Indicates if the user exists in the
     * payment gateway system.
     */
    pg_user_exists?: boolean;
    /**
     * - Unique identifier for the subscriber.
     */
    id?: string;
    /**
     * - Unique customer ID assigned by the
     * payment gateway.
     */
    pg_customer_id?: string;
    /**
     * - Identifier for the default
     * payment method used by the subscriber.
     */
    default_payment_method?: string;
};
/** @returns {Subscriber} */
declare function Subscriber(): Subscriber;
type Subscriber = {
    documents?: Documents;
    /**
     * - Contact information for the subscriber, such as
     * phone number.
     */
    phone?: any;
    billing_address?: BillingAddress;
    /**
     * - Indicates whether the subscriber has given
     * consent for processing.
     */
    consent?: boolean;
    /**
     * - Indicates whether the subscriber has opted in
     * for communications.
     */
    comms?: boolean;
    /**
     * - Unique identifier for the subscriber in the system.
     */
    _id?: string;
    /**
     * - The type of the subscriber, such as 'individual'
     * or 'company'.
     */
    type?: string;
    /**
     * - A unique identifier assigned to the subscriber.
     */
    unique_id?: string;
    /**
     * - The name of the subscriber.
     */
    name?: string;
    /**
     * - Email address of the subscriber.
     */
    email?: string;
    business_country_info?: BusinessCountryInfo;
    /**
     * - The date and time when the subscriber was created.
     */
    created_at?: string;
    /**
     * - The date and time when the subscriber
     * details were last modified.
     */
    modified_at?: string;
    /**
     * - The current credit balance for the
     * subscriber, if any.
     */
    credit_balance?: number;
    data?: SubscriberData;
};
/** @returns {AuthorModifiedDetails} */
declare function AuthorModifiedDetails(): AuthorModifiedDetails;
type AuthorModifiedDetails = {
    /**
     * - The first name of the author who made modifications.
     */
    first_name?: string;
    /**
     * - The last name of the author who made modifications.
     */
    last_name?: string;
    /**
     * - Indicates whether the author has
     * administrative privileges.
     */
    is_admin?: boolean;
};
/** @returns {Author} */
declare function Author(): Author;
type Author = {
    modified_by_details?: AuthorModifiedDetails;
    /**
     * - Identifier of the user who created the record.
     */
    created_by?: string;
    /**
     * - Identifier of the user who last modified the record.
     */
    modified_by?: string;
};
/** @returns {EndingBalance} */
declare function EndingBalance(): EndingBalance;
type EndingBalance = {
    /**
     * - The ending balance amount.
     */
    amount?: number;
    /**
     * - Reference to the previous entry if applicable.
     */
    old_entry_ref?: string;
};
/** @returns {PaymentData} */
declare function PaymentData(): PaymentData;
type PaymentData = {
    /**
     * - The unique identifier for the transaction.
     */
    transaction_id?: string;
    /**
     * - The payment aggregator used for the transaction.
     */
    aggregator?: string;
    /**
     * - The order ID generated by the
     * payment aggregator.
     */
    aggregator_order_id?: string;
    /**
     * - The date and time when the receipt was generated.
     */
    receipt_date?: string;
    /**
     * - A unique reference for
     * the transaction.
     */
    unique_transaction_reference?: string;
};
/** @returns {CreditTransaction} */
declare function CreditTransaction(): CreditTransaction;
type CreditTransaction = {
    /**
     * - The entity associated with the transaction.
     */
    entity?: any;
    author?: Author;
    /**
     * - The unique identifier for the credit transaction.
     */
    _id?: string;
    /**
     * - The amount credited in the transaction.
     */
    amount?: number;
    /**
     * - The currency of the transaction amount.
     */
    currency?: string;
    /**
     * - The unique identifier of the subscriber
     * involved in the transaction.
     */
    subscriber_id?: string;
    /**
     * - A brief description of the transaction.
     */
    description?: string;
    /**
     * - Indicates if the transaction is a test transaction.
     */
    is_test?: string;
    ending_balance?: EndingBalance;
    payment?: PaymentData;
    /**
     * - The type of credit transaction.
     */
    type?: string;
    /**
     * - The date and time when the transaction was created.
     */
    created_at?: string;
    /**
     * - The date and time when the transaction was
     * last modified.
     */
    modified_at?: string;
};
/** @returns {VerifyPaymentData} */
declare function VerifyPaymentData(): VerifyPaymentData;
type VerifyPaymentData = {
    /**
     * - Indicates if the payment verification was successful.
     */
    success?: boolean;
    subscriber?: Subscriber;
    credit_transaction?: CreditTransaction;
};
/** @returns {VerifyPaymentRes} */
declare function VerifyPaymentRes(): VerifyPaymentRes;
type VerifyPaymentRes = {
    /**
     * - The status of the payment verification.
     */
    status?: string;
    data?: VerifyPaymentData;
};
/** @returns {DefaultMerchants} */
declare function DefaultMerchants(): DefaultMerchants;
type DefaultMerchants = {
    /**
     * - The default Stripe merchant identifier.
     */
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
    /**
     * - Indicates if the panel is frozen.
     */
    freeze_panel?: boolean;
    /**
     * - Unique identifier for the global settings.
     */
    _id?: string;
    /**
     * - The date and time when the global settings
     * were created.
     */
    created_at?: string;
    /**
     * - The date and time when the global settings
     * were last modified.
     */
    modified_at?: string;
};
/** @returns {GlobalSettings} */
declare function GlobalSettings(): GlobalSettings;
type GlobalSettings = {
    /**
     * - The status of the global settings retrieval.
     */
    status?: string;
    data?: GlobalSettingsData;
};
/** @returns {MethodChecks} */
declare function MethodChecks(): MethodChecks;
type MethodChecks = {
    /**
     * - Result of the address line 1 check.
     */
    address_line1_check?: string;
    /**
     * - Result of the address postal
     * code check.
     */
    address_postal_code_check?: string;
    /**
     * - Result of the CVC check.
     */
    cvc_check?: string;
};
/** @returns {MethodNetworks} */
declare function MethodNetworks(): MethodNetworks;
type MethodNetworks = {
    /**
     * - List of available networks for the payment method.
     */
    available?: string[];
    /**
     * - Preferred network for the payment method.
     */
    preferred?: string;
};
/** @returns {MethodSecureUsage} */
declare function MethodSecureUsage(): MethodSecureUsage;
type MethodSecureUsage = {
    /**
     * - Indicates if 3D Secure is supported for the
     * payment method.
     */
    supported?: boolean;
};
/** @returns {MethodDetails} */
declare function MethodDetails(): MethodDetails;
type MethodDetails = {
    /**
     * - Unique identifier for the payment method.
     */
    id?: string;
    /**
     * - Type of payment method.
     */
    type?: string;
    /**
     * - Indicates if a mandate is available
     * for the payment method.
     */
    mandate_available?: boolean;
    /**
     * - Mandate amount for the payment method.
     */
    mandate_amount?: number;
    /**
     * - Payment gateway's payment method
     * identifier.
     */
    pg_payment_method_id?: string;
    /**
     * - Indicates if the payment method is the default.
     */
    is_default?: boolean;
    data?: SubscriptionMethodData;
};
/** @returns {SubscriptionMethodData} */
declare function SubscriptionMethodData(): SubscriptionMethodData;
type SubscriptionMethodData = {
    /**
     * - Brand of the payment method.
     */
    brand?: string;
    checks?: MethodChecks;
    /**
     * - Country of the payment method.
     */
    country?: string;
    /**
     * - Expiration month of the payment method.
     */
    exp_month?: number;
    /**
     * - Expiration year of the payment method.
     */
    exp_year?: number;
    /**
     * - Fingerprint of the payment method.
     */
    fingerprint?: string;
    /**
     * - Funding type of the payment method.
     */
    funding?: string;
    /**
     * - Source from which the payment method
     * was generated.
     */
    generated_from?: string;
    /**
     * - Last 4 digits of the payment method.
     */
    last4?: string;
    networks?: MethodNetworks;
    three_d_secure_usage?: MethodSecureUsage;
    /**
     * - Wallet associated with the payment method.
     */
    wallet?: string;
    /**
     * - Name associated with the payment method.
     */
    name?: string;
    /**
     * - Indicates if the payment method is the default.
     */
    is_default?: boolean;
};
/** @returns {SubscriptionMethods} */
declare function SubscriptionMethods(): SubscriptionMethods;
type SubscriptionMethods = {
    /**
     * - Indicates if the retrieval of subscription
     * methods was successful.
     */
    success?: boolean;
    /**
     * - List of subscription methods.
     */
    data?: MethodDetails[];
};
/** @returns {ConfigPublicKey} */
declare function ConfigPublicKey(): ConfigPublicKey;
type ConfigPublicKey = {
    /**
     * - Public key for the payment aggregator.
     */
    public_key?: string;
};
/** @returns {ConfigRes} */
declare function ConfigRes(): ConfigRes;
type ConfigRes = {
    /**
     * - Indicates if the retrieval of configuration
     * was successful.
     */
    success?: boolean;
    /**
     * - The payment aggregator.
     */
    aggregator?: string;
    config?: ConfigPublicKey;
};
/** @returns {PlanChangeData} */
declare function PlanChangeData(): PlanChangeData;
type PlanChangeData = {
    /**
     * - The total amount after the plan change.
     */
    total?: number;
    /**
     * - The amount credited due to the plan change.
     */
    credit_note_amount?: number;
    /**
     * - The settlement amount for the plan change.
     */
    settlement?: number;
    /**
     * - The taxable amount for the plan change.
     */
    taxable_amount?: number;
    /**
     * - The GST amount for the plan change.
     */
    gst_amount?: number;
    /**
     * - The gross total amount for the plan change.
     */
    gross_total?: number;
    /**
     * - The GST for the plan change.
     */
    gst?: number;
    /**
     * - The discount amount applied to the plan change.
     */
    discount?: number;
};
/** @returns {PlanChangeDetails} */
declare function PlanChangeDetails(): PlanChangeDetails;
type PlanChangeDetails = {
    /**
     * - Status of the plan change.
     */
    status?: string;
    data?: PlanChangeData;
};
/** @returns {TransactionMeta} */
declare function TransactionMeta(): TransactionMeta;
type TransactionMeta = {
    /**
     * - Invoice ID associated with the transaction.
     */
    invoice_id?: string;
};
/** @returns {PaymentTransactionDetails} */
declare function PaymentTransactionDetails(): PaymentTransactionDetails;
type PaymentTransactionDetails = {
    /**
     * - Payment aggregator details.
     */
    aggregator?: any;
    /**
     * - Currency used in the transaction.
     */
    currency?: string;
    /**
     * - Current status of the transaction.
     */
    current_status?: string;
    /**
     * - Unique identifier for the payment transaction.
     */
    _id?: string;
    /**
     * - Unique identifier for the subscriber.
     */
    subscriber_id?: string;
    /**
     * - Amount involved in the transaction.
     */
    amount?: number;
    /**
     * - Type of entity involved in the transaction.
     */
    entity_type?: string;
    /**
     * - Type of collection for the transaction.
     */
    collection_type?: string;
    meta?: TransactionMeta;
    /**
     * - Timestamp when the transaction was created.
     */
    created_at?: string;
    /**
     * - Timestamp when the transaction was last modified.
     */
    modified_at?: string;
};
/** @returns {PaymentItems} */
declare function PaymentItems(): PaymentItems;
type PaymentItems = {
    /**
     * - Name of the payment option.
     */
    name?: string;
    /**
     * - Code for the payment option
     */
    code?: string;
    /**
     * - Aggregator used for the payment option.
     */
    aggregator?: string;
};
/** @returns {GetPaymentOptions} */
declare function GetPaymentOptions(): GetPaymentOptions;
type GetPaymentOptions = {
    /**
     * - List of available payment options.
     */
    payment_options?: PaymentItems[];
};
/** @returns {TopupReq} */
declare function TopupReq(): TopupReq;
type TopupReq = {
    /**
     * - Amount to be topped up.
     */
    amount?: number;
    /**
     * - Currency in which the top-up is made.
     */
    currency?: string;
    /**
     * - Provider type for the top-up.
     */
    provider_type?: string;
};
/** @returns {SetupMandateReq} */
declare function SetupMandateReq(): SetupMandateReq;
type SetupMandateReq = {
    /**
     * - ID of the setup intent.
     */
    intent_id?: string;
    /**
     * - ID of the payment method.
     */
    payment_method_id?: string;
};
/** @returns {SetupPaymentReq} */
declare function SetupPaymentReq(): SetupPaymentReq;
type SetupPaymentReq = {
    /**
     * - Payment method to be used.
     */
    payment_method?: string;
    /**
     * - ID of the payment.
     */
    payment_id?: string;
    /**
     * - ID of the plan.
     */
    plan_id?: string;
    /**
     * - ID of the invoice.
     */
    invoice_id?: string;
};
/** @returns {SubscriptionRenewReq} */
declare function SubscriptionRenewReq(): SubscriptionRenewReq;
type SubscriptionRenewReq = {
    /**
     * - ID of the invoice for renewal.
     */
    invoice_id?: string;
    /**
     * - Type of entity for the renewal.
     */
    entity_type?: string;
    /**
     * - Collection type for the renewal.
     */
    collection_type?: string;
    /**
     * - URL to which the payment result will be sent
     */
    callback_url?: string;
    meta?: RenewMeta;
};
/** @returns {RenewMeta} */
declare function RenewMeta(): RenewMeta;
type RenewMeta = {
    /**
     * - Indicates whether the invoice payment
     * is involved in the renewal.
     */
    invoice_payment?: boolean;
    /**
     * - Indicates whether the subscription is being renewed.
     */
    renew?: boolean;
};
/** @returns {SubscriptionMethodsReq} */
declare function SubscriptionMethodsReq(): SubscriptionMethodsReq;
type SubscriptionMethodsReq = {
    /**
     * - The unique external identifier for
     * the subscription method.
     */
    unique_external_id?: string;
    /**
     * - The setup intent ID for the subscription method.
     */
    setup_intent_id?: string;
    /**
     * - The payment gateway payment method ID.
     */
    pg_payment_method_id?: string;
    /**
     * - Indicates whether this payment method
     * should be set as the default.
     */
    set_default?: boolean;
};
/** @returns {CreditTransactionResponse} */
declare function CreditTransactionResponse(): CreditTransactionResponse;
type CreditTransactionResponse = {
    /**
     * - Total number of transactions.
     */
    total?: number;
    /**
     * - Maximum number of transactions per page.
     */
    limit?: number;
    /**
     * - Current page number.
     */
    page?: number;
    /**
     * - Total number of pages.
     */
    pages?: number;
    /**
     * - List of credit transactions.
     */
    items?: CreditTransaction[];
};
/** @returns {DowngradePlanReq} */
declare function DowngradePlanReq(): DowngradePlanReq;
type DowngradePlanReq = {
    /**
     * - Unique identifier for the request.
     */
    unique_id?: string;
    /**
     * - Type of entity requesting the downgrade.
     */
    type?: string;
    /**
     * - Product suite for the plan.
     */
    product_suite?: string;
    /**
     * - Plan ID for the downgrade request.
     */
    plan_id?: string;
    /**
     * - Reason for downgrading the plan.
     */
    reason?: string;
    /**
     * - Platform from which the request is made.
     */
    platform?: string;
};
/** @returns {Taxation} */
declare function Taxation(): Taxation;
type Taxation = {
    /**
     * - GST percentage.
     */
    gst?: number;
};
/** @returns {OneTimeFees} */
declare function OneTimeFees(): OneTimeFees;
type OneTimeFees = {
    /**
     * - One-time development fee.
     */
    developement?: number;
    /**
     * - One-time marketing fee.
     */
    marketing?: number;
};
/** @returns {CreditLine} */
declare function CreditLine(): CreditLine;
type CreditLine = {
    /**
     * - Indicates whether the credit line is active.
     */
    is_active?: boolean;
};
/** @returns {StatusMessage} */
declare function StatusMessage(): StatusMessage;
type StatusMessage = {
    /**
     * - Status of the request.
     */
    status?: string;
    /**
     * - Detailed message regarding the status.
     */
    message?: string;
    /**
     * - Indicates whether the operation was successful.
     */
    success?: boolean;
    /**
     * - Status code of the operation.
     */
    code?: string;
};
/** @returns {PaymentCollectReq} */
declare function PaymentCollectReq(): PaymentCollectReq;
type PaymentCollectReq = {
    /**
     * - ID of the transaction to collect payment for.
     */
    transaction_id?: string;
    /**
     * - Indicates whether to use credit
     * balance for the payment.
     */
    credit_balance?: boolean;
    /**
     * - Mode of payment.
     */
    payment_mode?: string;
    /**
     * - Payment method to be used.
     */
    payment_method?: string;
    /**
     * - ID of the invoice for which the payment is collected.
     */
    invoice_id?: string;
};
/** @returns {SubscriptionRenewResMeta} */
declare function SubscriptionRenewResMeta(): SubscriptionRenewResMeta;
type SubscriptionRenewResMeta = {
    /**
     * - Indicates whether the invoice payment
     * is involved in the renewal.
     */
    invoice_payment?: boolean;
    /**
     * - Indicates whether the subscription is being renewed.
     */
    renew?: boolean;
};
/** @returns {SubscriptionRenewRes} */
declare function SubscriptionRenewRes(): SubscriptionRenewRes;
type SubscriptionRenewRes = {
    /**
     * - URL to redirect the user for completing
     * the renewal.
     */
    redirect_url?: string;
    /**
     * - ID of the renewal transaction.
     */
    transaction_id?: string;
    /**
     * - Current status of the renewal process.
     */
    current_status?: string;
    meta?: SubscriptionRenewResMeta;
};
/** @returns {SetupIntentRes} */
declare function SetupIntentRes(): SetupIntentRes;
type SetupIntentRes = {
    /**
     * - Indicates if the setup intent was successful.
     */
    success?: boolean;
    data?: SetupIntentData;
};
/** @returns {SetupIntentData} */
declare function SetupIntentData(): SetupIntentData;
type SetupIntentData = {
    /**
     * - The ID of the setup intent.
     */
    id?: string;
    /**
     * - The client secret of the setup intent.
     */
    client_secret?: string;
    /**
     * - The customer associated with the setup intent.
     */
    customer?: string;
    /**
     * - The status of the setup intent.
     */
    status?: string;
};
/** @returns {SetupPayment} */
declare function SetupPayment(): SetupPayment;
type SetupPayment = {
    /**
     * - The ID of the setup payment.
     */
    id?: string;
    /**
     * - The status of the setup payment.
     */
    status?: string;
    /**
     * - The customer associated with the setup payment.
     */
    customer?: string;
    /**
     * - The client secret of the setup payment.
     */
    client_secret?: string;
    /**
     * - The payment method used for the setup payment.
     */
    payment_method?: string;
    /**
     * - The mandate ID associated with the setup payment.
     */
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
    /**
     * - The mandate amount.
     */
    amount?: number;
};
/** @returns {Message} */
declare function Message(): Message;
type Message = {
    /**
     * - A message providing details about the operation status.
     */
    message?: string;
};
/** @returns {TopupRes} */
declare function TopupRes(): TopupRes;
type TopupRes = {
    /**
     * - The status of the top-up request.
     */
    status?: string;
    /**
     * - The order ID from the aggregator.
     */
    aggregator_order_id?: string;
    /**
     * - The amount of the top-up.
     */
    amount?: number;
    /**
     * - The currency of the top-up.
     */
    currency?: string;
    /**
     * - The transaction ID for the top-up.
     */
    transaction_id?: string;
};
/** @returns {CancelTopupReq} */
declare function CancelTopupReq(): CancelTopupReq;
type CancelTopupReq = {
    /**
     * - The order ID of the top-up to cancel.
     */
    order_id?: string;
};
/** @returns {CancelTopupRes} */
declare function CancelTopupRes(): CancelTopupRes;
type CancelTopupRes = {
    /**
     * - The ID of the canceled top-up.
     */
    _id?: string;
    /**
     * - The subscriber ID associated with the top-up.
     */
    subscriber_id?: string;
    /**
     * - The amount of the canceled top-up.
     */
    amount?: number;
    /**
     * - The currency of the canceled top-up.
     */
    currency?: string;
    /**
     * - The aggregator used for the top-up.
     */
    aggregator?: string;
    /**
     * - The order ID from the aggregator.
     */
    aggregator_order_id?: string;
    /**
     * - The date and time when the top-up was created.
     */
    created_at?: string;
    /**
     * - The date and time when the top-up was modified.
     */
    modified_at?: string;
    /**
     * - The version key, used for internal purposes.
     */
    __v?: number;
    /**
     * - The status of the top-up with the aggregator.
     */
    aggregator_status?: string;
    /**
     * - The current status of the top-up.
     */
    current_status?: string;
};
/** @returns {DefaultReq} */
declare function DefaultReq(): DefaultReq;
type DefaultReq = {
    /**
     * - The ID of the payment method to set
     * as default.
     */
    payment_method_id?: string;
};
/** @returns {EntityChargeRecurring} */
declare function EntityChargeRecurring(): EntityChargeRecurring;
type EntityChargeRecurring = {
    /**
     * - The interval of the subscription.
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
