const Joi = require("joi");

/**
 * @typedef PaymentGatewayConfigDetails
 * @property {Object[]} [aggregators] - List of all config specific to the
 *   aggregator with their Details.
 * @property {string} app_id - Application Id to which Payment config Mapped
 * @property {string[]} excluded_fields - List of all excluded config with their Details.
 * @property {boolean} success - Response is successful or not
 * @property {boolean} created - Response is created or not
 * @property {string[]} display_fields - List of all display related configs, i.e. logo
 */

/**
 * @typedef ErrorCodeDescription
 * @property {string} description - Error human understandable description.
 * @property {string} code - Error descrption code.
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef PaymentGatewayConfig
 * @property {string} secret - Secret Key of the payment aggregator
 * @property {string} config_type - Config Type of the aggregator
 * @property {boolean} [is_active] - Enable or Disable Flag
 * @property {string} key - Api key of the payment aggregator
 * @property {string} merchant_salt - The secret key or token provided by the
 *   payment aggregator for the merchant.
 */

/**
 * @typedef PaymentGatewayConfigCreation
 * @property {string} app_id - Application Id to which Payment config Mapped
 * @property {boolean} [is_active] - Enable or Disable Flag
 * @property {PaymentGatewayConfig} [aggregator_name]
 */

/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {string[]} aggregator - List of added payment gateway
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef ErrorCodeAndDescription
 * @property {string} description - Error human understandable description.
 * @property {string} code - Error descrption code.
 */

/**
 * @typedef HttpErrorDetails
 * @property {ErrorCodeAndDescription} error
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [package_name] - Package_name
 * @property {string} [code] - Code
 */

/**
 * @typedef ProductCODData
 * @property {Object} [items] - Item id with its cod availability.
 * @property {CODChargesLimitsDetails} [cod_charges]
 */

/**
 * @typedef CODChargesLimitsDetails
 * @property {number} [max_cart_value] - Max allowed cart value for cod order.
 * @property {number} [min_cart_value] - Min allowed cart value for cod order.
 * @property {number} [cod_charge] - Cod charges to be applied on order.
 */

/**
 * @typedef PaymentModeLogo
 * @property {string} large - Large
 * @property {string} small - Smalll
 */

/**
 * @typedef IntentApp
 * @property {string} [package_name] - Package_name
 * @property {string} [display_name] - Display_name
 * @property {string} [code] - Code
 * @property {PaymentModeLogo} [logos]
 */

/**
 * @typedef PaymentModeList
 * @property {number} [remaining_limit] - Remaining limit
 * @property {string} [card_brand] - Card_brand
 * @property {string} [card_fingerprint] - Card_fingerprint
 * @property {string} [merchant_code] - Merchant code
 * @property {boolean} [intent_flow] - Intent_flow
 * @property {string} [code] - Code
 * @property {string} [card_issuer] - Card_issuer
 * @property {number} [cod_limit_per_order] - Cod limit per order
 * @property {string} [card_reference] - Card_reference
 * @property {string} [card_type] - Card_type
 * @property {string} [card_isin] - Card_isin
 * @property {number} [exp_month] - Exp_month
 * @property {string} [fynd_vpa] - Fynd_vpa
 * @property {string} [card_number] - Card_number
 * @property {number} [display_priority] - Dispaly Priority
 * @property {string} [display_name] - Display name
 * @property {string} [card_id] - Card_id
 * @property {number} [retry_count] - Retry_count
 * @property {string} [card_name] - Card_name
 * @property {number} [timeout] - Timeout
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list] -
 *   Intent_app_error_dict_list
 * @property {string} [card_brand_image] - Card_brand_image
 * @property {boolean} [expired] - Expired
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [card_token] - Card_token
 * @property {string} aggregator_name - Aggregator_name
 * @property {number} [cod_charges] - Cod charges to be applied on order.
 * @property {ProductCODData} [product_cod_data]
 * @property {number} [cod_limit] - Cod limit
 * @property {IntentApp[]} [intent_app] - Intent_app
 * @property {string} [nickname] - Nickname
 * @property {boolean} [compliant_with_tokenisation_guidelines] - If card is
 *   tokenised or not
 * @property {number} [exp_year] - Exp_year
 * @property {string} [name] - Name
 * @property {string[]} [intent_app_error_list] - Intent_app_error_list
 */

/**
 * @typedef RootPaymentMode
 * @property {PaymentModeList[]} [list] - Payment mode
 * @property {number} display_priority - Dispaly Priority
 * @property {boolean} [add_card_enabled] - Annonymous card flag
 * @property {boolean} [save_card] - Card save or not
 * @property {boolean} [is_pay_by_card_pl] - This flag will be true in case of
 *   Payment link payment through card
 * @property {string} display_name - Payment mode display name
 * @property {boolean} [anonymous_enable] - Annonymous card flag
 * @property {string} name - Payment mode name
 * @property {string} [aggregator_name] - Dispaly Priority
 */

/**
 * @typedef PaymentOptions
 * @property {RootPaymentMode[]} payment_option - Payment options
 */

/**
 * @typedef AggregatorRoute
 * @property {Object} [data] - Data
 * @property {Object} [payment_flow_data] - Payment_flow_data
 * @property {string} [payment_flow] - Payment_flow
 * @property {string} [api_link] - Api_link
 */

/**
 * @typedef PaymentDefaultSelection
 * @property {string} [mode] - Default Selection Payment Mode
 * @property {string} [identifier] - Identifier for Payment Mode
 * @property {boolean} [skip] - Decide if the default payment mode will skip the
 *   payment options page altogether or just be preferred on the Frontend
 */

/**
 * @typedef PaymentFlow
 * @property {AggregatorRoute} [bqr_razorpay]
 * @property {AggregatorRoute} [fynd]
 * @property {AggregatorRoute} [epaylater]
 * @property {AggregatorRoute} [razorpay]
 * @property {AggregatorRoute} [juspay]
 * @property {AggregatorRoute} [ajiodhan]
 * @property {AggregatorRoute} [simpl]
 * @property {AggregatorRoute} [rupifi]
 * @property {AggregatorRoute} [mswipe]
 * @property {AggregatorRoute} [stripe]
 * @property {AggregatorRoute} [ccavenue]
 * @property {AggregatorRoute} [payubiz]
 * @property {AggregatorRoute} [jiopay]
 */

/**
 * @typedef PaymentOptionAndFlow
 * @property {RootPaymentMode[]} payment_option - Payment options
 * @property {PaymentFlow} [payment_flows]
 * @property {PaymentDefaultSelection} [payment_default_selection]
 */

/**
 * @typedef AdvanceObject
 * @property {boolean} [is_active] - Is Advance Payment active
 * @property {number} [amount] - Amount for Payment Breakdown
 * @property {string} [time_unit] - Time unit for refunds
 * @property {string} [description] - The description for Advance Payment (user
 *   configured)
 * @property {string} [display_name] - The display name for Advance payment
 * @property {string} [prepayment_type] - Type of prepayment value
 * @property {number} [prepayment_value] - Value for prepayment in advance payment
 * @property {string} [cancellation_type] - Type of cancellation
 * @property {number} [refund_time_limit] - Time limit for processing refund
 * @property {string[]} [all_prepayment_type] - All available types of prepayment
 * @property {boolean} [allow_custom_advance_amount] - Is custom advance amount allowed?
 */

/**
 * @typedef SplitObject
 * @property {number} [total_number_of_splits] - Maximum amount of splits allowed
 * @property {number} [splits_remaining] - Number of splits remaining
 * @property {number} [amount_remaining] - Amount pending to be paid
 */

/**
 * @typedef AdvancePaymentObject
 * @property {string} [name] - Name of Advance Payment Mode
 * @property {number} [display_priority] - Display Priority for Payment Option
 * @property {number} [payment_mode_id] - Payment Mode ID for Advance Payment Option
 * @property {string} [display_name] - Display name for Advance Payment Mode
 * @property {PaymentModeList[]} [list] - Payment mode
 * @property {SplitObject} [split]
 * @property {AdvanceObject} [advance]
 */

/**
 * @typedef PaymentModeRouteDetails
 * @property {PaymentOptionAndFlow} payment_options
 * @property {boolean} success - Response is successful or not
 * @property {Object} [payment_breakup] - Payment Breakup for advance payment
 * @property {AdvancePaymentObject[]} [advance_payment] - Advance Payment Array
 */

/**
 * @typedef PaymentOptionsDetails
 * @property {PaymentOptions} payment_options
 * @property {boolean} success - Response is successful or not
 * @property {Object} [payment_breakup] - Payment Breakup for advance payment
 */

/**
 * @typedef PayoutCustomer
 * @property {string} [unique_external_id] - Unique_external_id
 * @property {string} [mobile] - Customer Mobile No
 * @property {string} [name] - Customer Name
 * @property {string} [email] - Customer Email
 * @property {number} [id] - Customer ID
 */

/**
 * @typedef PayoutMoreAttributes
 * @property {string} [branch_name] - Branch Name
 * @property {string} [city] - City
 * @property {string} [account_no] - Account Number
 * @property {string} [country] - Country
 * @property {string} [state] - State
 * @property {string} [account_holder] - Account Holder Name
 * @property {string} [ifsc_code] - IFSC Code
 * @property {string} [account_type] - Account Type Saving or Current
 * @property {string} [bank_name] - Name of Bank
 */

/**
 * @typedef PayoutAggregator
 * @property {number} [aggregator_id] - Aggregator_id
 * @property {number} [aggregator_fund_id] - Aggregator_fund_id
 * @property {number} [payout_details_id] - Payout_details_id
 */

/**
 * @typedef Payout
 * @property {PayoutCustomer} customers
 * @property {PayoutMoreAttributes} more_attributes
 * @property {boolean} is_default - Default or not
 * @property {PayoutAggregator[]} [payouts_aggregators]
 * @property {string} unique_transfer_no - Display priority of the payment mode
 * @property {boolean} is_active - Enable/DIsable Flag Payout
 * @property {string} transfer_type - Transafer type
 */

/**
 * @typedef PayoutsDetails
 * @property {boolean} success - Response is successful or not
 * @property {Payout[]} items - Contains list of PayoutSchema
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} ifsc_code
 * @property {string} [account_holder]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} account_type
 * @property {string} [account_no]
 * @property {string} [city]
 * @property {string} [bank_name]
 * @property {string} [branch_name]
 * @property {number} [pincode]
 */

/**
 * @typedef PayoutCreation
 * @property {string} aggregator - Aggregator Name
 * @property {Object} users - Payout users object
 * @property {string} unique_external_id - Unique Id of Payout
 * @property {boolean} is_active - Enable or Disable Flag Payout
 * @property {PayoutBankDetails} bank_details
 * @property {string} transfer_type - Transafer type
 */

/**
 * @typedef PayoutDetails
 * @property {string} payment_status - Status of payment
 * @property {Object} users - Users details object
 * @property {string} aggregator - Aggregator Name
 * @property {string} unique_transfer_no - Unique transfer no
 * @property {boolean} is_active - Enable or DIsable Flag Payout
 * @property {Object} bank_details - Payout bank_details object
 * @property {boolean} success - Response is successful or not
 * @property {string} transfer_type - Transfer type
 * @property {boolean} created - Created flag
 * @property {Object} payouts - Payout object
 */

/**
 * @typedef UpdatePayoutDetails
 * @property {boolean} is_default - Enable or Disable Default Payout
 * @property {boolean} is_active - Enable or DIsable Flag Payout
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef UpdatePayoutCreation
 * @property {boolean} is_default - Enable or Disable Default Payout
 * @property {boolean} is_active - Enable or Disable Flag Payout
 * @property {string} unique_external_id - Unique Id of Payout
 */

/**
 * @typedef DeletePayoutDetails
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef SubscriptionPaymentMethodDetails
 * @property {Object[]} data - Subscription Payment Method Object
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef DeleteSubscriptionPaymentMethodDetails
 * @property {boolean} success - Success or failure.
 */

/**
 * @typedef SubscriptionConfigDetails
 * @property {string} aggregator - Aggregator Name
 * @property {Object} config - Aggregator Config
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef SaveSubscriptionSetupIntentCreation
 * @property {string} unique_external_id - Unique id i.e company:id
 */

/**
 * @typedef SaveSubscriptionSetupIntentDetails
 * @property {Object} data - Subscription Payment Method Object
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef RefundAccountDetails
 * @property {boolean} [is_verified_flag] - Account is verified or not
 * @property {string} [message] - Response message
 * @property {Object} data - Refund account data.
 * @property {boolean} success - Success or failure flag.
 */

/**
 * @typedef NotFoundResourceError
 * @property {string} description - Not Found
 * @property {string} code - Bad Request Data
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef BankDetailsForOTP
 * @property {string} ifsc_code - IFSC code of account
 * @property {string} account_no - Account number
 * @property {string} branch_name - Branch name of account
 * @property {string} bank_name - Bank name of account
 * @property {string} account_holder - Accountg holder name of account
 */

/**
 * @typedef AddBeneficiaryDetailsOTPCreation
 * @property {string} order_id - Order_id for which account will be added
 * @property {BankDetailsForOTP} details
 */

/**
 * @typedef IfscCodeDetails
 * @property {string} branch_name - Branch Name Of Account
 * @property {boolean} [success] - Response is successful or not
 * @property {string} bank_name - Bank Name Of Account
 */

/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} subtitle - SHort Title Of Account
 * @property {number} id -
 * @property {string} title - Title Of Account
 * @property {string} account_holder - Account Holder Name
 * @property {string} ifsc_code - Ifsc Code Of Account
 * @property {string} [comment] - Remarks
 * @property {string} created_on - Creation Date of Beneficiary
 * @property {string} display_name - Display Name Of Account
 * @property {string} [delights_user_name] - User Id Who filled the Beneficiary
 * @property {string} transfer_mode - Transfer Mode Of Account
 * @property {string} email - Email of User
 * @property {boolean} is_active - Boolean Flag whether Beneficiary set or not
 * @property {string} [branch_name] - Branch Name Of Account
 * @property {string} address - Address of User
 * @property {string} modified_on - Modification Date of Beneficiary
 * @property {string} beneficiary_id - Benenficiary Id
 * @property {string} account_no - Account Number
 * @property {string} bank_name - Bank Name Of Account
 * @property {string} [mobile] - MObile no of User
 */

/**
 * @typedef OrderBeneficiaryFetchResults
 * @property {OrderBeneficiaryDetails[]} [beneficiaries] - All Beneficiaries Of An Order
 * @property {boolean} [show_beneficiary_details] - Show beneficiary details or not.
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {Object} [extra_meta] - Key value pair for extra data related to payment mode
 * @property {string} [order_id] - Fynd Platform order ID
 * @property {string} [payment_id] - A unique identifier associated with a
 *   specific payment transaction
 * @property {string} [current_status] - Represents the current state or
 *   condition of an object, such as an order or payment.
 * @property {string} [payment_gateway] - Specifies the name or identifier of
 *   the payment gateway. This will deprecated in future version. We recommend
 *   switching to `payment_gateway_slug` to ensure uninterrupted payment processing.
 * @property {string} [payment_gateway_slug] - A simplified, URL-friendly string
 *   that represents the name of the payment gateway and it will used for refund PG.
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {string} [name] - Payment mode name
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {number} amount - Payment amount
 * @property {string} mode - Payment mode short code
 */

/**
 * @typedef PaymentConfirmationCreation
 * @property {string} order_id - Unique order id
 * @property {MultiTenderPaymentMethod[]} payment_methods
 */

/**
 * @typedef PaymentConfirmationDetails
 * @property {string} order_id - Unique order id
 * @property {string} message - Message
 * @property {boolean} success - Payment confirmation updated or not.
 */

/**
 * @typedef CODdata
 * @property {number} remaining_limit - Remaining Limit for COD of User
 * @property {string} user_id - Payment mode name
 * @property {boolean} is_active - COD option is active or not
 * @property {number} limit - Total Limit of user
 * @property {number} usages - Used COD limit from the user Limit
 */

/**
 * @typedef CODLimitConfig
 * @property {number} storefront - Limit for storefront
 * @property {number} pos - Limit for pos
 */

/**
 * @typedef CODPaymentLimitConfig
 * @property {boolean} is_active - Boolean flag to show the status
 * @property {number} usages - Used cod limit
 * @property {number} user_id - User_id
 * @property {string} merchant_user_id - Merchant_user_id
 * @property {number} remaining_limit - Remaining COD limit
 * @property {CODLimitConfig} limit
 */

/**
 * @typedef GetUserBULimitResponseSchema
 * @property {string} business_unit - COD limit business unit
 * @property {string} display_name - Display name for cod limit
 * @property {CODPaymentLimitConfig} config
 */

/**
 * @typedef GetUserCODLimitDetails
 * @property {GetUserBULimitResponseSchema[]} items
 * @property {boolean} success - Response is successful or not
 * @property {string} [message] - Message for cod limit
 */

/**
 * @typedef SetCODForUserCreation
 * @property {string} [business_unit] - Business unit
 * @property {string} mobileno - Mobile No. of User
 * @property {boolean} is_active - Either true or false
 * @property {string} merchant_user_id - Merchant User id
 */

/**
 * @typedef SetCODOptionDetails
 * @property {string} message - Message
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef EdcModelData
 * @property {string} aggregator - Name of aggregator
 * @property {number} aggregator_id - ID of aggregator
 * @property {string[]} models - List of string of edc models
 */

/**
 * @typedef EdcAggregatorAndModelListDetails
 * @property {EdcModelData[]} data - List of aggregators and their edc models
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef StatisticsData
 * @property {number} inactive_device_count - No of inactive devices
 * @property {number} active_device_count - No of active devices
 */

/**
 * @typedef EdcDeviceStatsDetails
 * @property {StatisticsData} statistics
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef EdcAddCreation
 * @property {string} edc_model - Model of the edc machine
 * @property {number} store_id - Store at which devices is to used
 * @property {number} aggregator_id - Aggregator which will accept payment
 * @property {string} edc_device_serial_no - Serial number or imei of EDC device
 * @property {string} terminal_serial_no - Device serial number of
 *   terminal(android tablet)
 * @property {string} [device_tag] - Device tag of edc device to identify it
 */

/**
 * @typedef EdcDevice
 * @property {string} [edc_model] - Name of the model
 * @property {number} store_id - Store at which devices is to used
 * @property {number} aggregator_id - Aggregator which will accept payment
 * @property {string} terminal_unique_identifier - Genearated unique value for edc device
 * @property {string} edc_device_serial_no - Serial number of EDC device
 * @property {boolean} is_active - State whether device is active or inactive
 * @property {string} [aggregator_name] - Name of the corresponding aggregator
 * @property {string} terminal_serial_no - Device serial number of
 *   terminal(android tablet)
 * @property {string} [merchant_store_pos_code] - This is provided by pinelabs
 * @property {string} device_tag - Device tag of edc device to identify it
 * @property {string} application_id - Application ID
 */

/**
 * @typedef EdcDeviceAddDetails
 * @property {EdcDevice} data
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef EdcDeviceDetails
 * @property {EdcDevice} data
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef EdcUpdate
 * @property {string} [edc_model] - Model of the edc machine
 * @property {number} [store_id] - Store at which devices is to used
 * @property {number} [aggregator_id] - Aggregator which will accept payment
 * @property {string} [edc_device_serial_no] - Serial number or imei of EDC device
 * @property {boolean} [is_active] - State whether device is active or inactive
 * @property {string} [merchant_store_pos_code] - This is provided by pinelabs
 * @property {string} [device_tag] - Device tag of edc device to identify it
 */

/**
 * @typedef EdcDeviceUpdateDetails
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef Page
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [page_size] - The number of items per page.
 */

/**
 * @typedef EdcDeviceListDetails
 * @property {EdcDevice[]} items - List of all edc mapped to the application
 *   options with their Details.
 * @property {Page} page
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef PaymentInitializationCreation
 * @property {string} [razorpay_payment_id] - Payment gateway payment id
 * @property {string} [device_id] - EDC machine Unique Identifier
 * @property {string} email - Customer valid email
 * @property {string} customer_id - Payment gateway customer id.
 * @property {string} [vpa] - Customer vpa address
 * @property {string} aggregator - Payment gateway name
 * @property {string} order_id - Payment gateway order id
 * @property {string} currency - Currency code.
 * @property {number} amount - Payable amount.
 * @property {string} contact - Customer valid mobile number
 * @property {number} [timeout] - Payment polling timeout if not recieved response
 * @property {string} merchant_order_id - Unique fynd order id
 * @property {string} method - Payment method
 */

/**
 * @typedef PaymentInitializationDetails
 * @property {string} [razorpay_payment_id] - Payment id.
 * @property {string} [device_id] - EDC machine Unique Identifier
 * @property {string} [upi_poll_url] - UPI poll url.
 * @property {string} [customer_id] - Payment gateway customer id.
 * @property {string} polling_url - Polling url.
 * @property {string} [vpa] - Customer vpa address
 * @property {string} aggregator - Payment gateway name
 * @property {string} [currency] - Currency code.
 * @property {string} merchant_order_id - Order id
 * @property {number} [amount] - Payable amount.
 * @property {number} [timeout] - Timeout.
 * @property {string} [virtual_id] - Payment virtual address.
 * @property {string} [bqr_image] - Bharath qr image url.
 * @property {string} [aggregator_order_id] - Payment order id
 * @property {boolean} success - Response is successful or not.
 * @property {string} [status] - Status of payment.
 * @property {string} method - Payment method
 */

/**
 * @typedef PaymentStatusUpdateCreation
 * @property {string} [device_id] - EDC machine Unique Identifier
 * @property {string} email - Customer valid email
 * @property {string} customer_id - Payment gateway customer id.
 * @property {string} [vpa] - Customer vpa address
 * @property {string} aggregator - Payment gateway name
 * @property {string} order_id - Payment gateway order id
 * @property {string} currency - Currency code.
 * @property {number} amount - Payable amount.
 * @property {string} contact - Customer valid mobile number
 * @property {string} merchant_order_id - Unique fynd order id
 * @property {string} status - Status of payment.
 * @property {string} method - Payment method
 * @property {string} merchant_transaction_id - Unique fynd transaction id
 */

/**
 * @typedef PaymentStatusUpdateDetails
 * @property {string} [redirect_url] - Redirect url
 * @property {boolean} retry - Response is successful or not.
 * @property {boolean} [success] - Response is successful or not
 * @property {string} status - Payment status
 * @property {string} aggregator_name - Payment gateway name
 */

/**
 * @typedef ResendOrCancelPaymentCreation
 * @property {string} order_id - Unique order id
 * @property {string} [device_id] - EDC machine Unique Identifier
 * @property {string} request_type - Either resend or cancel
 */

/**
 * @typedef LinkStatus
 * @property {string} status - Link action status
 * @property {string} message - Message
 * @property {boolean} [is_payment_done] - This key specifies payment done
 *   status of payment link.
 */

/**
 * @typedef ResendOrCancelPaymentDetails
 * @property {LinkStatus} data
 * @property {boolean} success - Response is successful or not.
 */

/**
 * @typedef PaymentStatusBulkHandlerCreation
 * @property {string[]} merchant_order_id - List of order ids
 */

/**
 * @typedef PaymentObjectList
 * @property {Object} user_object
 * @property {string} modified_on
 * @property {string} collected_by
 * @property {string} created_on
 * @property {Object} [refund_object]
 * @property {string} id
 * @property {string} [payment_id]
 * @property {string} currency
 * @property {string} current_status
 * @property {Object} [aggregator_payment_object]
 * @property {string} payment_mode
 * @property {string} refunded_by
 * @property {string} amount_in_paisa
 * @property {string} payment_gateway
 * @property {string} company_id
 * @property {string} payment_mode_identifier
 * @property {string} application_id
 * @property {string[]} all_status
 */

/**
 * @typedef PaymentStatusObject
 * @property {string} merchant_order_id
 * @property {PaymentObjectList[]} [payment_object_list]
 */

/**
 * @typedef PaymentStatusBulkHandlerDetails
 * @property {number} [count]
 * @property {PaymentStatusObject[]} [data]
 * @property {string} success
 * @property {string} [error]
 * @property {number} status
 */

/**
 * @typedef GetOauthUrlDetails
 * @property {string} url - The url to call for authenticating
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef RevokeOAuthToken
 * @property {string} message - The confirmation message of the token revoke.
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef RepaymentRequestDetails
 * @property {string} fwd_shipment_id - Purchase Shipment Id
 * @property {string} aggregator - Name of Payment Gateway
 * @property {string} current_status - Status
 * @property {string} merchant_order_id - Merchant's Order Id
 * @property {number} amount - Amount to paid back
 * @property {string} payment_mode - Payment Mode
 * @property {number} outstanding_details_id - Outstanding details ID
 * @property {string} aggregator_transaction_id - Unique Id for the transaction
 * @property {string} aggregator_order_id - Id of payment gateway
 * @property {string} payment_mode_identifier - Payment Mode Id
 */

/**
 * @typedef RepaymentDetailsSerialiserPayAll
 * @property {number} total_amount - Total amount
 * @property {string} extension_order_id - Order id created in extension
 * @property {string} aggregator_transaction_id - Unique Id for the transaction
 * @property {string} aggregator_order_id - Id of payment gateway
 * @property {RepaymentRequestDetails[]} [shipment_details]
 */

/**
 * @typedef RepaymentDetails
 * @property {Object} data
 * @property {boolean} success - Success/Failure of the transaction
 */

/**
 * @typedef MerchantOnBoardingCreation
 * @property {string} credit_line_id - Merchant ID at Ajiodhan's end
 * @property {string} aggregator - Payment aggregator name
 * @property {string} app_id - Application id
 * @property {string} user_id - Deadlock or Grimlock user id
 * @property {string} status - Status
 */

/**
 * @typedef MerchantOnBoardingDetails
 * @property {Object} data
 * @property {boolean} success - Success/Failure of the transaction
 */

/**
 * @typedef ValidateCustomerCreation
 * @property {string} phone_number - User mobile number without country code.
 * @property {string} aggregator - Payment gateway name in camel case i.e Simpl, Rupifi
 * @property {string} [payload] - Hashed payload string.
 * @property {Object} [delivery_address] - Extra meta fields.
 * @property {number} transaction_amount_in_paise - Payable amount in paise
 * @property {Object[]} [order_items] - Extra meta fields.
 * @property {Object} [merchant_params] - Extra meta fields.
 * @property {Object} [billing_address] - Extra meta fields.
 */

/**
 * @typedef ValidateCustomerDetails
 * @property {string} message - Error or success message.
 * @property {Object} [data] - Payment gateway response data
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef GetPaymentLinkDetails
 * @property {string} message - Message
 * @property {number} status_code - HTTP status code
 * @property {number} [amount] - Total value of order
 * @property {string} [merchant_name] - Merchant name
 * @property {string} [payment_link_url] - Url of payment link
 * @property {string} [payment_link_current_status] - Status of payment link
 * @property {string} [external_order_id] - Merchant order id
 * @property {number} [polling_timeout] - Polling request timeout, perform
 *   polling till timeout elapsed or payment status is success/failure
 * @property {boolean} success - Successful or failure
 */

/**
 * @typedef ErrorDescription
 * @property {string} [msg] - Message
 * @property {string} [payment_transaction_id] - Payment transaction id
 * @property {boolean} [invalid_id] - Payment link id is valid or not
 * @property {string} [merchant_order_id] - Order id
 * @property {string} [merchant_name] - Name of merchant that created payment link
 * @property {number} [amount] - Amount paid
 * @property {boolean} [expired] - Payment link expired or not
 * @property {boolean} [cancelled] - Payment link is cancelled or not
 */

/**
 * @typedef ErrorDetails
 * @property {number} status_code - HTTP status code
 * @property {ErrorDescription} [error]
 * @property {string} message - Message
 * @property {boolean} success - Successful or failure
 */

/**
 * @typedef CreatePaymentLinkMeta
 * @property {string} cart_id - Cart id for which payment link needs to be generated.
 * @property {string} checkout_mode - Checkout mode for the payment link i.e. self
 * @property {string} amount - Payment link amount to be paid by the customer
 * @property {string} [assign_card_id] - Assigned card id against which payment
 *   to be done via payment link
 */

/**
 * @typedef CreatePaymentLinkCreation
 * @property {string} email - Email to which the payment link is to be sent
 * @property {number} amount - Total value of order
 * @property {string} mobile_number - Mobile number to which the payment link is
 *   to be sent
 * @property {string} [country_phone_code] - Phone country code for complete mobile number
 * @property {string} [description] - Merchant order id
 * @property {CreatePaymentLinkMeta} meta
 * @property {string} external_order_id - Merchant order id
 * @property {string} [success_redirection_url] - URL to which the user will be
 *   redirected after a successful payment.
 * @property {string} [failure_redirection_url] - URL to which the user will be
 *   redirected if the payment fails.
 */

/**
 * @typedef CreatePaymentLinkDetails
 * @property {string} message - Message
 * @property {number} status_code - HTTP status code
 * @property {string} [payment_link_url] - Url of payment link
 * @property {number} [polling_timeout] - Polling request timeout
 * @property {boolean} success - Successful or failure
 * @property {string} [payment_link_id] - Unique id of payment link
 */

/**
 * @typedef PollingPaymentLinkDetails
 * @property {string} [message] - Message
 * @property {number} [http_status] - HTTP status code
 * @property {number} [status_code] - HTTP status code
 * @property {string} [redirect_url] - Url to redirect to
 * @property {number} [amount] - Amount
 * @property {string} [order_id] - Fynd order id
 * @property {boolean} [success] - Successful or failure
 * @property {string} [payment_link_id] - Payment link id
 * @property {string} [status] - Status of payment link
 * @property {string} [aggregator_name] - Aggregator name
 */

/**
 * @typedef CancelOrResendPaymentLinkCreation
 * @property {string} payment_link_id - Unique id of payment link
 */

/**
 * @typedef ResendPaymentLinkDetails
 * @property {number} status_code - HTTP status code
 * @property {string} message - Message
 * @property {number} [polling_timeout] - Polling request timeout
 * @property {boolean} success - Successful or failure
 */

/**
 * @typedef CancelPaymentLinkDetails
 * @property {number} status_code - HTTP status code
 * @property {string} message - Message
 * @property {boolean} success - Successful or failure
 */

/**
 * @typedef Code
 * @property {string} name - Name of payment method
 * @property {string} merchant_code - Merchant Payment Code
 * @property {string} code - Payment Method Code
 */

/**
 * @typedef PaymentCode
 * @property {string} networks - Payment networks
 * @property {Code} codes
 * @property {string} name - Name of payment name
 * @property {string} types - Type of payment mode
 */

/**
 * @typedef GetPaymentCode
 * @property {PaymentCode} method_code
 */

/**
 * @typedef GetPaymentCodeDetails
 * @property {GetPaymentCode} data
 * @property {boolean} success - Response is successful or not.
 */

/**
 * @typedef PlatformPaymentModeDetails
 * @property {string} [message] - Message
 * @property {Object[]} [items] - List of all aggregator and payment mode details.
 * @property {boolean} success - Response is successful or not.
 */

/**
 * @typedef MerchnatPaymentModeCreation
 * @property {Object} [offline] - Details to be updated for online payment configuration.
 * @property {Object} [online] - Details to be updated for offline payment configuration.
 */

/**
 * @typedef OrderDetail
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {number} amount - Amount paid.
 * @property {string} status - Order status created by payment gateway aggregator.
 * @property {string} currency - Currency of the payment.
 * @property {Object} aggregator_order_details - Aggregator order details
 *   generated by the payment gateway.
 * @property {string} aggregator - Name of the payment gateway aggregator.
 */

/**
 * @typedef AddressDetail
 * @property {Object} [google_map_point] - Google map point of location
 * @property {string} [landmark] - Landmark
 * @property {string} phone - Phone number
 * @property {string} country_iso_code - Country's code name e.g. `IN`, `GB`
 * @property {string} area_code - Customer pin/zip code
 * @property {string} country - Country name
 * @property {string} [expire_at] - Address expiry timestamp
 * @property {Object} [geo_location] - Location latitude and logitude
 * @property {string} state - State of the customer
 * @property {string} area - Area details
 * @property {string} g_address_id - Unique address id generated by Fynd platform
 * @property {string} area_code_slug - Area slug code, use pin or zip code if
 *   not available
 * @property {string} country_phone_code - Country's phone code
 * @property {string} name - Customer name
 * @property {string} [address_type] - Address type e.g. home, office
 * @property {string} address - Address details
 * @property {string} [email] - Customer email
 * @property {string} city - City name
 * @property {Object[]} [tags] - Optional address tag
 */

/**
 * @typedef ReasonDetail
 * @property {string} [code] - The code indicating the type of reason.
 * @property {string} [description] - A detailed description of the payment
 *   reason or error.
 */

/**
 * @typedef PaymentSessionDetail
 * @property {string} payment_id - Unique transaction id generated by payment gateway
 * @property {string} mode - Test or live, test mode uses test credentials so
 *   that actual payment is not created.
 * @property {number} amount - Amount paid.
 * @property {string} success_url - Success url sent by Fynd platform at the
 *   time of payment creation
 * @property {AddressDetail} [shipping_address] - Shipping address
 * @property {number} amount_captured - Amount which is captured or credited to
 *   merchant account
 * @property {number} [amount_refunded] - Amount refunded or credited back to
 *   customer accout
 * @property {string} [aggregator_customer_id] - Unique customer id generated by
 *   payment gateway, not required for standard checkout.
 * @property {string} cancel_url - Cancel url sent by Fynd platform at the time
 *   of payment creation
 * @property {Object[]} payment_methods - Method of payment
 * @property {string} [created] - Timestamp in epoch
 * @property {string} g_user_id - Global user identifier - unique user id
 *   generated by Fynd platform
 * @property {string} currency - Currency of the payment.
 * @property {string} [merchant_locale] - Merchant's locale
 * @property {string} [locale] - User's locale
 * @property {string} aggregator_order_id - Unique order id or payment request
 *   id generated by payment gateway
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {string} [kind] - Optional kind of purchase or payment - one time
 *   payment (sale) or subcription. defaults to sale.
 * @property {AddressDetail} [billing_address] - Billing address
 * @property {boolean} [captured] - Whether the payment is captured (credited to
 *   merchant account) by payment gateway.
 * @property {Object} [meta] - Extra meta data specific to extension
 * @property {string} status - Status of the payment
 * @property {ReasonDetail} [reason]
 */

/**
 * @typedef PaymentSessionCreation
 * @property {Object} [meta] - Extra meta data specific to extensions
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {OrderDetail} order_details - The details of the order.
 * @property {string} status - Status of the payment.
 * @property {string} currency - Currency of the payment.
 * @property {PaymentSessionDetail[]} payment_details - The payment details with
 *   the schema `PaymentSessionDetail`.
 * @property {number} total_amount - Amount paid.
 * @property {string} checksum - Checksum to verify the payload
 * @property {string} [source] - Source of payment update session
 */

/**
 * @typedef PaymentSessionPutDetails
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {Object[]} platform_transaction_details - Platform transaction details.
 * @property {string} status - Status of the payment.
 * @property {string} currency - Currency of the payment.
 * @property {number} total_amount - Amount paid.
 */

/**
 * @typedef RefundSessionDetail
 * @property {string} [refund_utr] - Unique refund utr generated by payment gateway.
 * @property {string} request_id - Refund request id, unique id generated by Fynd platform
 * @property {string} payment_id - Unique payment id generated by payment gateway.
 * @property {number} amount - Amount refunded.
 * @property {string} [reason] - Reason for refund, optional
 * @property {string} status - Status of the refund.
 * @property {string} created - Timestamp in epoch.
 * @property {string} [source_transfer_reversal] - Description in case of
 *   reversal of payment.
 * @property {string} [receipt_number] - Unique receipt for refund, generated by
 *   payment gateway, if not available can be utr.
 * @property {string} [pg_refund_id] - Unique identifier for refund, generated
 *   by payment gateway.
 * @property {string} currency - Currency of the payment.
 * @property {string} [transfer_reversal] - Description in case of reversal of payment.
 * @property {string} [balance_transaction] - Balance transaction.
 */

/**
 * @typedef RefundSessionCreation
 * @property {Object} [meta] - Meta
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {string} status - The status of the refund.
 * @property {string} currency - The currency of the payment.
 * @property {PaymentSessionDetail} payment_details - Details of the payment
 * @property {number} total_amount - The total amount refunded.
 * @property {RefundSessionDetail[]} refund_details - Details of the refund
 * @property {ErrorDescription} [error]
 * @property {string} [message] - The status of the refund.
 * @property {string} checksum - Checksum to verify payload
 */

/**
 * @typedef RefundSessionDetails
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {string} status - The status of the refund.
 * @property {string} currency - The currency of the payment.
 * @property {Object[]} platform_refund_details - Details of the refund
 * @property {number} total_refund_amount - The total amount refunded.
 */

/**
 * @typedef PaymentDetails
 * @property {Object[]} payment_methods - List of payment methods
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {number} [amount_refunded] - Already refunded amount for the given
 *   gid (global identifier for the order).
 * @property {string} currency - Currency of the payment.
 * @property {string} mode - Test or live, test mode uses test credentials so
 *   that actual payment is not created.
 * @property {string} [merchant_locale] - Merchant's locale (language) i.e. en
 * @property {Object} [meta] - Extra meta data related to the payment methods
 * @property {string} [kind] - Optional kind of purchase/payment - one time
 *   payment (sale) or subcription. defaults to sale.
 * @property {string} [success_url] - Success url sent by Fynd platform at the
 *   time of payment creation
 * @property {string} status - Status of the payment
 * @property {boolean} [captured] - Whether the payment is captured (credited to
 *   merchant account) by payment gateway.
 * @property {string} [payment_id] - Unique transaction id generated by payment gateway
 * @property {string} g_user_id - Global user identifier - unique user id
 *   generated by Fynd platform
 * @property {string} [locale] - User's locale (language), i.e. en
 * @property {string} [cancel_url] - Cancel url sent by Fynd platform at the
 *   time of payment creation, redirect on payment cancellation
 * @property {string} [created] - Timestamp in epoch
 * @property {number} amount_captured - Amount which is captured or credited to
 *   merchant account
 * @property {number} amount - Amount paid for the order.
 * @property {string} [aggregator_customer_id] - Unique customer id generated by
 *   payment gateway, not required for standard checkout.
 * @property {string} [aggregator_order_id] - Unique order id or payment request
 *   id generated by payment gateway
 */

/**
 * @typedef CartDetails
 * @property {Object} items - Items that are added in cart
 * @property {Object[]} articles - List of articles that are added in cart
 * @property {number} cart_value - Total cart value i.e. amount to be paid
 * @property {number} [total_quantity] - Total number of items in cart
 * @property {Object} [custom_cart_meta] - This field is used to add and
 *   retrieve custom data fields to cart items.
 */

/**
 * @typedef RefundDetails
 * @property {number} amount - Refunded amount
 * @property {string} currency - The currency of the payment.
 * @property {string} request_id - Refund request id, unique id generated by Fynd platform
 * @property {string} status - The status of the refund.
 * @property {string} created - Timestamp in epoch.
 * @property {string} refund_utr - Unique refund utr generated by payment gateway.
 */

/**
 * @typedef PaymentSessionFetchDetails
 * @property {Object} payment_details - Object of payment details
 * @property {string} [currency] - The currency of the payment.
 * @property {string} status - The status of the payment session.
 * @property {number} total_amount - Total amount to be paid
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {CartDetails} [cart_details]
 * @property {RefundDetails[]} refund_details - Object of refund details
 */

/**
 * @typedef RefundSourcesPriority
 * @property {string} description - Description of refund source
 * @property {number} priority - Priority of refund source, 0 being highest
 * @property {string} source - Source of refund
 */

/**
 * @typedef RefundPriorityDetails
 * @property {string} configuration - Configuration for merchant or customer
 * @property {boolean} success - Success
 * @property {boolean} apportion - Apportion refund to multiple sources
 * @property {RefundSourcesPriority[]} refund_sources_priority - Refund sources priority
 * @property {string} [message] - Message
 */

/**
 * @typedef RefundPriorityCreation
 * @property {boolean} apportion - Apportion refund to multiple sources
 * @property {RefundSourcesPriority[]} refund_sources_priority - Refund sources priority
 */

/**
 * @typedef MerchantPaymentModeCreation
 * @property {string} business_unit - Business unit
 * @property {Object[]} items - List of item details with respect to payment_mode
 * @property {Object} device - List of devices and its activation status
 */

/**
 * @typedef FromConfig
 * @property {string} device - Device name
 * @property {string} business_unit - Business unit name
 */

/**
 * @typedef ToConfig
 * @property {Object[]} device - Device name to copy the config to
 * @property {string} business_unit - Business unit name
 */

/**
 * @typedef PlatformPaymentModeCopyConfigCreation
 * @property {FromConfig} from_config
 * @property {ToConfig} to_config
 */

/**
 * @typedef PaymentMethodsMetaOrder
 * @property {string} payment_identifier - Payment identifier
 * @property {string} merchant_code - Merchant code
 * @property {string} payment_gateway - Payment gateway name
 */

/**
 * @typedef PaymentOrderMethods
 * @property {number} amount - Amount to be collected
 * @property {string} [payment] - Payment type i.e. Required / Blocked
 * @property {string} mode - Payment mode
 * @property {PaymentMethodsMetaOrder} meta
 * @property {string} name - Payment mode name
 */

/**
 * @typedef PaymentOrderCreation
 * @property {string} order_id - Order id
 * @property {PaymentOrderMethods[]} [payment_methods]
 * @property {string} [shipment_id] - Shipment_id
 */

/**
 * @typedef PaymentOrderData
 * @property {string} [contact] - Mobile number
 * @property {string} [aggregator] - Aggregator name
 * @property {number} [amount] - Amount
 * @property {string} [customer_id] - Aggregator customer id
 * @property {string} [currency] - Currency
 * @property {string} [email] - Email
 * @property {string} [callback_url] - Callback url for aggregator
 * @property {string} [order_id] - Aggregator order id
 * @property {string} [method] - Method
 * @property {string} [merchant_order_id] - Merchant order id
 */

/**
 * @typedef PaymentOrderDetails
 * @property {string} message - Message
 * @property {boolean} success - Successful or failure
 * @property {string} [payment_confirm_url] - Payment confirm url for aggregator
 * @property {string} [callback_url] - Callback url for aggregator
 * @property {number} status_code - HTTP status code
 * @property {string} [order_id] - Merchant order id
 * @property {PaymentOrderData} [data]
 */

/**
 * @typedef AggregatorVersionItemSchema
 * @property {string} [is_equal_to]
 * @property {string} [is_less_than]
 * @property {string} [is_greater_than]
 */

/**
 * @typedef AggregatorVersionDetails
 * @property {string} message - Message
 * @property {boolean} success - Successful or failure
 * @property {AggregatorVersionItemSchema} [items]
 */

/**
 * @typedef AggregatorVersionRequestSchema
 * @property {string} [is_equal_to]
 * @property {string} [is_less_than]
 * @property {string} [is_greater_than]
 */

/**
 * @typedef PatchAggregatorControl
 * @property {string} [business_unit] - Business unit
 * @property {Object[]} [items] - List of item details with respect to payment_mode
 * @property {string} [device] - Device name
 * @property {AggregatorVersionRequestSchema} [version]
 */

/**
 * @typedef PaymentModeCustomConfigSchema
 * @property {string} display_name - The display name of the store.
 * @property {string} business_unit - The business unit to which the store belongs.
 * @property {PaymentCustomConfigDetailsSchema} custom_config
 */

/**
 * @typedef PaymentCustomConfigDetailsSchema
 * @property {PaymentCustomConfigCustomerSchema} customer
 * @property {PaymentCustomConfigModeSchema} payment_mode
 * @property {number} min_order_value - The minimum order value for the store
 */

/**
 * @typedef PaymentCustomConfigCustomerSchema
 * @property {string} restriction - Customer restriction type.
 * @property {number[]} [groups] - Customer groups.
 * @property {string[]} [types] - Customer types.
 */

/**
 * @typedef PaymentCustomConfigModeSchema
 * @property {boolean} available - Indicates whether the payment mode is available.
 * @property {string[]} [pre_order] - Payment modes available for pre-order.
 * @property {string[]} [post_order] - Payment modes available for post-order.
 */

/**
 * @typedef PaymentCustomConfigDetailsRequestSchema
 * @property {PaymentCustomConfigCustomerRequestSchema} customer
 * @property {PaymentCustomConfigModeSchema} payment_mode
 * @property {number} min_order_value - The minimum order value for the store
 */

/**
 * @typedef PaymentCustomConfigCustomerRequestSchema
 * @property {string} restriction - Customer restriction type.
 * @property {number[]} [groups] - Customer groups.
 */

/**
 * @typedef PaymentCustomConfigRequestSchema
 * @property {string} business_unit - The business unit to which the store belongs.
 * @property {PaymentCustomConfigDetailsRequestSchema[]} items
 */

/**
 * @typedef PaymentCustomConfigResponseSchema
 * @property {boolean} success
 * @property {string} message
 * @property {PaymentModeCustomConfigSchema[]} items
 */

/**
 * @typedef CustomerValidationSchema
 * @property {string} aggregator - Aggregator name of the payment gateway.
 * @property {number} transaction_amount - Payable amount
 * @property {string} [cart_id] - Unique identifier for the shopping cart.
 * @property {string} [user_id] - The unique identifier of the user.
 */

/**
 * @typedef UserCreditSchema
 * @property {number} amount - The monetary value, which can represent available
 *   balance, redeemed balance, or hold amount, depending on the context.
 * @property {string} currency - The currency code (e.g., INR, USD).
 * @property {string} [unique_id] - A unique identifier for the payment transaction.
 */

/**
 * @typedef CreditAccountSummary
 * @property {string} account_id - Unique identifier associated with the
 *   customer's account
 * @property {string} status - Current state of the account, indicating whether
 *   it is ACTIVE, INACTIVE, or UNREGISTERED.
 * @property {UserCreditSchema} [redeemable_balance]
 * @property {UserCreditSchema} [available_balance]
 * @property {UserCreditSchema[]} [amount_on_hold]
 */

/**
 * @typedef ValidateCustomerCreditSchema
 * @property {boolean} success - Successful or failure of API
 * @property {boolean} is_eligible - The customer is eligible to make a transaction or not
 * @property {boolean} [is_applied] - Credit is applied to the user's account or not
 * @property {string} message - Detailed message about the user credt eligibility.
 * @property {string} [cart_id] - Unique identifier for the shopping cart.
 * @property {CreditAccountSummary} [account]
 */

class PaymentPlatformModel {
  /** @returns {PaymentGatewayConfigDetails} */
  static PaymentGatewayConfigDetails() {
    return Joi.object({
      aggregators: Joi.array().items(Joi.any()),
      app_id: Joi.string().allow("").required(),
      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),
      success: Joi.boolean().required(),
      created: Joi.boolean().required(),
      display_fields: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {ErrorCodeDescription} */
  static ErrorCodeDescription() {
    return Joi.object({
      description: Joi.string().allow("").required(),
      code: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PaymentGatewayConfig} */
  static PaymentGatewayConfig() {
    return Joi.object({
      secret: Joi.string().allow("").required(),
      config_type: Joi.string().allow("").required(),
      is_active: Joi.boolean().allow(null),
      key: Joi.string().allow("").required(),
      merchant_salt: Joi.string().allow("").required(),
    });
  }

  /** @returns {PaymentGatewayConfigCreation} */
  static PaymentGatewayConfigCreation() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
      is_active: Joi.boolean().allow(null),
      aggregator_name: PaymentPlatformModel.PaymentGatewayConfig(),
    });
  }

  /** @returns {PaymentGatewayToBeReviewed} */
  static PaymentGatewayToBeReviewed() {
    return Joi.object({
      aggregator: Joi.array().items(Joi.string().allow("")).required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ErrorCodeAndDescription} */
  static ErrorCodeAndDescription() {
    return Joi.object({
      description: Joi.string().allow("").required(),
      code: Joi.string().allow("").required(),
    });
  }

  /** @returns {HttpErrorDetails} */
  static HttpErrorDetails() {
    return Joi.object({
      error: PaymentPlatformModel.ErrorCodeAndDescription().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {IntentAppErrorList} */
  static IntentAppErrorList() {
    return Joi.object({
      package_name: Joi.string().allow("").allow(null),
      code: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ProductCODData} */
  static ProductCODData() {
    return Joi.object({
      items: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      cod_charges: PaymentPlatformModel.CODChargesLimitsDetails(),
    });
  }

  /** @returns {CODChargesLimitsDetails} */
  static CODChargesLimitsDetails() {
    return Joi.object({
      max_cart_value: Joi.number().allow(null),
      min_cart_value: Joi.number().allow(null),
      cod_charge: Joi.number().allow(null),
    });
  }

  /** @returns {PaymentModeLogo} */
  static PaymentModeLogo() {
    return Joi.object({
      large: Joi.string().allow("").required(),
      small: Joi.string().allow("").required(),
    });
  }

  /** @returns {IntentApp} */
  static IntentApp() {
    return Joi.object({
      package_name: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow("").allow(null),
      code: Joi.string().allow("").allow(null),
      logos: PaymentPlatformModel.PaymentModeLogo(),
    });
  }

  /** @returns {PaymentModeList} */
  static PaymentModeList() {
    return Joi.object({
      remaining_limit: Joi.number().allow(null),
      card_brand: Joi.string().allow("").allow(null),
      card_fingerprint: Joi.string().allow("").allow(null),
      merchant_code: Joi.string().allow("").allow(null),
      intent_flow: Joi.boolean().allow(null),
      code: Joi.string().allow("").allow(null),
      card_issuer: Joi.string().allow("").allow(null),
      cod_limit_per_order: Joi.number().allow(null),
      card_reference: Joi.string().allow("").allow(null),
      card_type: Joi.string().allow("").allow(null),
      card_isin: Joi.string().allow("").allow(null),
      exp_month: Joi.number().allow(null),
      fynd_vpa: Joi.string().allow("").allow(null),
      card_number: Joi.string().allow("").allow(null),
      display_priority: Joi.number().allow(null),
      display_name: Joi.string().allow("").allow(null),
      card_id: Joi.string().allow("").allow(null),
      retry_count: Joi.number().allow(null),
      card_name: Joi.string().allow("").allow(null),
      timeout: Joi.number().allow(null),
      intent_app_error_dict_list: Joi.array()
        .items(PaymentPlatformModel.IntentAppErrorList())
        .allow(null, ""),
      card_brand_image: Joi.string().allow("").allow(null),
      expired: Joi.boolean().allow(null),
      logo_url: PaymentPlatformModel.PaymentModeLogo(),
      card_token: Joi.string().allow("").allow(null),
      aggregator_name: Joi.string().allow("").required(),
      cod_charges: Joi.number().allow(null),
      product_cod_data: PaymentPlatformModel.ProductCODData(),
      cod_limit: Joi.number().allow(null),
      intent_app: Joi.array()
        .items(PaymentPlatformModel.IntentApp())
        .allow(null, ""),
      nickname: Joi.string().allow("").allow(null),
      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),
      exp_year: Joi.number().allow(null),
      name: Joi.string().allow("").allow(null),
      intent_app_error_list: Joi.array()
        .items(Joi.string().allow(""))
        .allow(null, ""),
    });
  }

  /** @returns {RootPaymentMode} */
  static RootPaymentMode() {
    return Joi.object({
      list: Joi.array().items(PaymentPlatformModel.PaymentModeList()),
      display_priority: Joi.number().required(),
      add_card_enabled: Joi.boolean().allow(null),
      save_card: Joi.boolean().allow(null),
      is_pay_by_card_pl: Joi.boolean().allow(null),
      display_name: Joi.string().allow("").required(),
      anonymous_enable: Joi.boolean().allow(null),
      name: Joi.string().allow("").required(),
      aggregator_name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PaymentOptions} */
  static PaymentOptions() {
    return Joi.object({
      payment_option: Joi.array()
        .items(PaymentPlatformModel.RootPaymentMode())
        .required(),
    });
  }

  /** @returns {AggregatorRoute} */
  static AggregatorRoute() {
    return Joi.object({
      data: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      payment_flow_data: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      payment_flow: Joi.string().allow("").allow(null),
      api_link: Joi.string().allow("").allow(null),
    }).allow(null);
  }

  /** @returns {PaymentDefaultSelection} */
  static PaymentDefaultSelection() {
    return Joi.object({
      mode: Joi.string().allow("").allow(null),
      identifier: Joi.string().allow("").allow(null),
      skip: Joi.boolean().allow(null),
    });
  }

  /** @returns {PaymentFlow} */
  static PaymentFlow() {
    return Joi.object({
      bqr_razorpay: PaymentPlatformModel.AggregatorRoute(),
      fynd: PaymentPlatformModel.AggregatorRoute(),
      epaylater: PaymentPlatformModel.AggregatorRoute(),
      razorpay: PaymentPlatformModel.AggregatorRoute(),
      juspay: PaymentPlatformModel.AggregatorRoute(),
      ajiodhan: PaymentPlatformModel.AggregatorRoute(),
      simpl: PaymentPlatformModel.AggregatorRoute(),
      rupifi: PaymentPlatformModel.AggregatorRoute(),
      mswipe: PaymentPlatformModel.AggregatorRoute(),
      stripe: PaymentPlatformModel.AggregatorRoute(),
      ccavenue: PaymentPlatformModel.AggregatorRoute(),
      payubiz: PaymentPlatformModel.AggregatorRoute(),
      jiopay: PaymentPlatformModel.AggregatorRoute(),
    });
  }

  /** @returns {PaymentOptionAndFlow} */
  static PaymentOptionAndFlow() {
    return Joi.object({
      payment_option: Joi.array()
        .items(PaymentPlatformModel.RootPaymentMode())
        .required(),
      payment_flows: PaymentPlatformModel.PaymentFlow(),
      payment_default_selection: PaymentPlatformModel.PaymentDefaultSelection(),
    });
  }

  /** @returns {AdvanceObject} */
  static AdvanceObject() {
    return Joi.object({
      is_active: Joi.boolean().allow(null),
      amount: Joi.number().allow(null),
      time_unit: Joi.string().allow("").allow(null),
      description: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow("").allow(null),
      prepayment_type: Joi.string().allow("").allow(null),
      prepayment_value: Joi.number().allow(null),
      cancellation_type: Joi.string().allow("").allow(null),
      refund_time_limit: Joi.number().allow(null),
      all_prepayment_type: Joi.array()
        .items(Joi.string().allow("").allow(null))
        .allow(null, ""),
      allow_custom_advance_amount: Joi.boolean().allow(null),
    }).allow(null);
  }

  /** @returns {SplitObject} */
  static SplitObject() {
    return Joi.object({
      total_number_of_splits: Joi.number().allow(null),
      splits_remaining: Joi.number().allow(null),
      amount_remaining: Joi.number().allow(null),
    }).allow(null);
  }

  /** @returns {AdvancePaymentObject} */
  static AdvancePaymentObject() {
    return Joi.object({
      name: Joi.string().allow("").allow(null),
      display_priority: Joi.number().allow(null),
      payment_mode_id: Joi.number().allow(null),
      display_name: Joi.string().allow("").allow(null),
      list: Joi.array()
        .items(PaymentPlatformModel.PaymentModeList())
        .allow(null, ""),
      split: PaymentPlatformModel.SplitObject(),
      advance: PaymentPlatformModel.AdvanceObject(),
    });
  }

  /** @returns {PaymentModeRouteDetails} */
  static PaymentModeRouteDetails() {
    return Joi.object({
      payment_options: PaymentPlatformModel.PaymentOptionAndFlow().required(),
      success: Joi.boolean().required(),
      payment_breakup: Joi.object().pattern(/\S/, Joi.any()),
      advance_payment: Joi.array()
        .items(PaymentPlatformModel.AdvancePaymentObject())
        .allow(null, ""),
    });
  }

  /** @returns {PaymentOptionsDetails} */
  static PaymentOptionsDetails() {
    return Joi.object({
      payment_options: PaymentPlatformModel.PaymentOptions().required(),
      success: Joi.boolean().required(),
      payment_breakup: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {PayoutCustomer} */
  static PayoutCustomer() {
    return Joi.object({
      unique_external_id: Joi.string().allow("").allow(null),
      mobile: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").allow(null),
      id: Joi.number().allow(null),
    });
  }

  /** @returns {PayoutMoreAttributes} */
  static PayoutMoreAttributes() {
    return Joi.object({
      branch_name: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").allow(null),
      account_no: Joi.string().allow("").allow(null),
      country: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").allow(null),
      account_holder: Joi.string().allow("").allow(null),
      ifsc_code: Joi.string().allow("").allow(null),
      account_type: Joi.string().allow("").allow(null),
      bank_name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PayoutAggregator} */
  static PayoutAggregator() {
    return Joi.object({
      aggregator_id: Joi.number().allow(null),
      aggregator_fund_id: Joi.number().allow(null),
      payout_details_id: Joi.number().allow(null),
    });
  }

  /** @returns {Payout} */
  static Payout() {
    return Joi.object({
      customers: PaymentPlatformModel.PayoutCustomer().required(),
      more_attributes: PaymentPlatformModel.PayoutMoreAttributes().required(),
      is_default: Joi.boolean().required(),
      payouts_aggregators: Joi.array().items(
        PaymentPlatformModel.PayoutAggregator()
      ),
      unique_transfer_no: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      transfer_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {PayoutsDetails} */
  static PayoutsDetails() {
    return Joi.object({
      success: Joi.boolean().required(),
      items: Joi.array().items(PaymentPlatformModel.Payout()).required(),
    });
  }

  /** @returns {PayoutBankDetails} */
  static PayoutBankDetails() {
    return Joi.object({
      ifsc_code: Joi.string().allow("").required(),
      account_holder: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      account_type: Joi.string().allow("").required(),
      account_no: Joi.string().allow(""),
      city: Joi.string().allow(""),
      bank_name: Joi.string().allow(""),
      branch_name: Joi.string().allow(""),
      pincode: Joi.number(),
    });
  }

  /** @returns {PayoutCreation} */
  static PayoutCreation() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      users: Joi.object().pattern(/\S/, Joi.any()).required(),
      unique_external_id: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      bank_details: PaymentPlatformModel.PayoutBankDetails().required(),
      transfer_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {PayoutDetails} */
  static PayoutDetails() {
    return Joi.object({
      payment_status: Joi.string().allow("").required(),
      users: Joi.object().pattern(/\S/, Joi.any()).required(),
      aggregator: Joi.string().allow("").required(),
      unique_transfer_no: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      bank_details: Joi.object().pattern(/\S/, Joi.any()).required(),
      success: Joi.boolean().required(),
      transfer_type: Joi.string().allow("").required(),
      created: Joi.boolean().required(),
      payouts: Joi.object().pattern(/\S/, Joi.any()).required(),
    });
  }

  /** @returns {UpdatePayoutDetails} */
  static UpdatePayoutDetails() {
    return Joi.object({
      is_default: Joi.boolean().required(),
      is_active: Joi.boolean().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {UpdatePayoutCreation} */
  static UpdatePayoutCreation() {
    return Joi.object({
      is_default: Joi.boolean().required(),
      is_active: Joi.boolean().required(),
      unique_external_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {DeletePayoutDetails} */
  static DeletePayoutDetails() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  /** @returns {SubscriptionPaymentMethodDetails} */
  static SubscriptionPaymentMethodDetails() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {DeleteSubscriptionPaymentMethodDetails} */
  static DeleteSubscriptionPaymentMethodDetails() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  /** @returns {SubscriptionConfigDetails} */
  static SubscriptionConfigDetails() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      config: Joi.object().pattern(/\S/, Joi.any()).required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {SaveSubscriptionSetupIntentCreation} */
  static SaveSubscriptionSetupIntentCreation() {
    return Joi.object({
      unique_external_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {SaveSubscriptionSetupIntentDetails} */
  static SaveSubscriptionSetupIntentDetails() {
    return Joi.object({
      data: Joi.object().pattern(/\S/, Joi.any()).required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {RefundAccountDetails} */
  static RefundAccountDetails() {
    return Joi.object({
      is_verified_flag: Joi.boolean(),
      message: Joi.string().allow(""),
      data: Joi.object().pattern(/\S/, Joi.any()).required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {NotFoundResourceError} */
  static NotFoundResourceError() {
    return Joi.object({
      description: Joi.string().allow("").required(),
      code: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {BankDetailsForOTP} */
  static BankDetailsForOTP() {
    return Joi.object({
      ifsc_code: Joi.string().allow("").required(),
      account_no: Joi.string().allow("").required(),
      branch_name: Joi.string().allow("").required(),
      bank_name: Joi.string().allow("").required(),
      account_holder: Joi.string().allow("").required(),
    });
  }

  /** @returns {AddBeneficiaryDetailsOTPCreation} */
  static AddBeneficiaryDetailsOTPCreation() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
      details: PaymentPlatformModel.BankDetailsForOTP().required(),
    });
  }

  /** @returns {IfscCodeDetails} */
  static IfscCodeDetails() {
    return Joi.object({
      branch_name: Joi.string().allow("").required(),
      success: Joi.boolean(),
      bank_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {OrderBeneficiaryDetails} */
  static OrderBeneficiaryDetails() {
    return Joi.object({
      subtitle: Joi.string().allow("").required(),
      id: Joi.number().required(),
      title: Joi.string().allow("").required(),
      account_holder: Joi.string().allow("").required(),
      ifsc_code: Joi.string().allow("").required(),
      comment: Joi.string().allow(""),
      created_on: Joi.string().allow("").required(),
      display_name: Joi.string().allow("").required(),
      delights_user_name: Joi.string().allow("").allow(null),
      transfer_mode: Joi.string().allow("").required(),
      email: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      branch_name: Joi.string().allow(""),
      address: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      beneficiary_id: Joi.string().allow("").required(),
      account_no: Joi.string().allow("").required(),
      bank_name: Joi.string().allow("").required(),
      mobile: Joi.string().allow(""),
    });
  }

  /** @returns {OrderBeneficiaryFetchResults} */
  static OrderBeneficiaryFetchResults() {
    return Joi.object({
      beneficiaries: Joi.array()
        .items(PaymentPlatformModel.OrderBeneficiaryDetails())
        .allow(null, ""),
      show_beneficiary_details: Joi.boolean(),
    });
  }

  /** @returns {MultiTenderPaymentMeta} */
  static MultiTenderPaymentMeta() {
    return Joi.object({
      extra_meta: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      order_id: Joi.string().allow(""),
      payment_id: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      payment_gateway: Joi.string().allow(""),
      payment_gateway_slug: Joi.string().allow(""),
    });
  }

  /** @returns {MultiTenderPaymentMethod} */
  static MultiTenderPaymentMethod() {
    return Joi.object({
      name: Joi.string().allow(""),
      meta: PaymentPlatformModel.MultiTenderPaymentMeta(),
      amount: Joi.number().required(),
      mode: Joi.string().allow("").required(),
    });
  }

  /** @returns {PaymentConfirmationCreation} */
  static PaymentConfirmationCreation() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
      payment_methods: Joi.array()
        .items(PaymentPlatformModel.MultiTenderPaymentMethod())
        .required(),
    });
  }

  /** @returns {PaymentConfirmationDetails} */
  static PaymentConfirmationDetails() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {CODdata} */
  static CODdata() {
    return Joi.object({
      remaining_limit: Joi.number().required(),
      user_id: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      limit: Joi.number().required(),
      usages: Joi.number().required(),
    });
  }

  /** @returns {CODLimitConfig} */
  static CODLimitConfig() {
    return Joi.object({
      storefront: Joi.number().required(),
      pos: Joi.number().required(),
    });
  }

  /** @returns {CODPaymentLimitConfig} */
  static CODPaymentLimitConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      usages: Joi.number().required(),
      user_id: Joi.number().required(),
      merchant_user_id: Joi.string().allow("").required(),
      remaining_limit: Joi.number().required(),
      limit: PaymentPlatformModel.CODLimitConfig().required(),
    });
  }

  /** @returns {GetUserBULimitResponseSchema} */
  static GetUserBULimitResponseSchema() {
    return Joi.object({
      business_unit: Joi.string().allow("").required(),
      display_name: Joi.string().allow("").required(),
      config: PaymentPlatformModel.CODPaymentLimitConfig().required(),
    });
  }

  /** @returns {GetUserCODLimitDetails} */
  static GetUserCODLimitDetails() {
    return Joi.object({
      items: Joi.array()
        .items(PaymentPlatformModel.GetUserBULimitResponseSchema())
        .required(),
      success: Joi.boolean().required(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {SetCODForUserCreation} */
  static SetCODForUserCreation() {
    return Joi.object({
      business_unit: Joi.string().allow(""),
      mobileno: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      merchant_user_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {SetCODOptionDetails} */
  static SetCODOptionDetails() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {EdcModelData} */
  static EdcModelData() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      aggregator_id: Joi.number().required(),
      models: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {EdcAggregatorAndModelListDetails} */
  static EdcAggregatorAndModelListDetails() {
    return Joi.object({
      data: Joi.array().items(PaymentPlatformModel.EdcModelData()).required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {StatisticsData} */
  static StatisticsData() {
    return Joi.object({
      inactive_device_count: Joi.number().required(),
      active_device_count: Joi.number().required(),
    });
  }

  /** @returns {EdcDeviceStatsDetails} */
  static EdcDeviceStatsDetails() {
    return Joi.object({
      statistics: PaymentPlatformModel.StatisticsData().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {EdcAddCreation} */
  static EdcAddCreation() {
    return Joi.object({
      edc_model: Joi.string().allow("").required(),
      store_id: Joi.number().required(),
      aggregator_id: Joi.number().required(),
      edc_device_serial_no: Joi.string().allow("").required(),
      terminal_serial_no: Joi.string().allow("").required(),
      device_tag: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {EdcDevice} */
  static EdcDevice() {
    return Joi.object({
      edc_model: Joi.string().allow(""),
      store_id: Joi.number().required(),
      aggregator_id: Joi.number().required(),
      terminal_unique_identifier: Joi.string().allow("").required(),
      edc_device_serial_no: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      aggregator_name: Joi.string().allow(""),
      terminal_serial_no: Joi.string().allow("").required(),
      merchant_store_pos_code: Joi.string().allow("").allow(null),
      device_tag: Joi.string().allow("").required(),
      application_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {EdcDeviceAddDetails} */
  static EdcDeviceAddDetails() {
    return Joi.object({
      data: PaymentPlatformModel.EdcDevice().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {EdcDeviceDetails} */
  static EdcDeviceDetails() {
    return Joi.object({
      data: PaymentPlatformModel.EdcDevice().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {EdcUpdate} */
  static EdcUpdate() {
    return Joi.object({
      edc_model: Joi.string().allow(""),
      store_id: Joi.number(),
      aggregator_id: Joi.number(),
      edc_device_serial_no: Joi.string().allow(""),
      is_active: Joi.boolean(),
      merchant_store_pos_code: Joi.string().allow(""),
      device_tag: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {EdcDeviceUpdateDetails} */
  static EdcDeviceUpdateDetails() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      has_previous: Joi.boolean(),
      has_next: Joi.boolean(),
      current: Joi.number(),
      type: Joi.string().allow("").required(),
      size: Joi.number(),
      page_size: Joi.number(),
    });
  }

  /** @returns {EdcDeviceListDetails} */
  static EdcDeviceListDetails() {
    return Joi.object({
      items: Joi.array().items(PaymentPlatformModel.EdcDevice()).required(),
      page: PaymentPlatformModel.Page().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PaymentInitializationCreation} */
  static PaymentInitializationCreation() {
    return Joi.object({
      razorpay_payment_id: Joi.string().allow("").allow(null),
      device_id: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").required(),
      customer_id: Joi.string().allow("").required(),
      vpa: Joi.string().allow("").allow(null),
      aggregator: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      amount: Joi.number().required(),
      contact: Joi.string().allow("").required(),
      timeout: Joi.number().allow(null),
      merchant_order_id: Joi.string().allow("").required(),
      method: Joi.string().allow("").required(),
    });
  }

  /** @returns {PaymentInitializationDetails} */
  static PaymentInitializationDetails() {
    return Joi.object({
      razorpay_payment_id: Joi.string().allow("").allow(null),
      device_id: Joi.string().allow("").allow(null),
      upi_poll_url: Joi.string().allow("").allow(null),
      customer_id: Joi.string().allow("").allow(null),
      polling_url: Joi.string().allow("").required(),
      vpa: Joi.string().allow("").allow(null),
      aggregator: Joi.string().allow("").required(),
      currency: Joi.string().allow("").allow(null),
      merchant_order_id: Joi.string().allow("").required(),
      amount: Joi.number().allow(null),
      timeout: Joi.number().allow(null),
      virtual_id: Joi.string().allow("").allow(null),
      bqr_image: Joi.string().allow("").allow(null),
      aggregator_order_id: Joi.string().allow(""),
      success: Joi.boolean().required(),
      status: Joi.string().allow(""),
      method: Joi.string().allow("").required(),
    });
  }

  /** @returns {PaymentStatusUpdateCreation} */
  static PaymentStatusUpdateCreation() {
    return Joi.object({
      device_id: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").required(),
      customer_id: Joi.string().allow("").required(),
      vpa: Joi.string().allow(""),
      aggregator: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      amount: Joi.number().required(),
      contact: Joi.string().allow("").required(),
      merchant_order_id: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      method: Joi.string().allow("").required(),
      merchant_transaction_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {PaymentStatusUpdateDetails} */
  static PaymentStatusUpdateDetails() {
    return Joi.object({
      redirect_url: Joi.string().allow("").allow(null),
      retry: Joi.boolean().required(),
      success: Joi.boolean().allow(null),
      status: Joi.string().allow("").required(),
      aggregator_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {ResendOrCancelPaymentCreation} */
  static ResendOrCancelPaymentCreation() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
      device_id: Joi.string().allow("").allow(null),
      request_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {LinkStatus} */
  static LinkStatus() {
    return Joi.object({
      status: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
      is_payment_done: Joi.boolean(),
    });
  }

  /** @returns {ResendOrCancelPaymentDetails} */
  static ResendOrCancelPaymentDetails() {
    return Joi.object({
      data: PaymentPlatformModel.LinkStatus().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PaymentStatusBulkHandlerCreation} */
  static PaymentStatusBulkHandlerCreation() {
    return Joi.object({
      merchant_order_id: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {PaymentObjectList} */
  static PaymentObjectList() {
    return Joi.object({
      user_object: Joi.object().pattern(/\S/, Joi.any()).required(),
      modified_on: Joi.string().allow("").required(),
      collected_by: Joi.string().allow("").required(),
      created_on: Joi.string().allow("").required(),
      refund_object: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      id: Joi.string().allow("").required(),
      payment_id: Joi.string().allow("").allow(null),
      currency: Joi.string().allow("").required(),
      current_status: Joi.string().allow("").required(),
      aggregator_payment_object: Joi.object()
        .pattern(/\S/, Joi.any())
        .allow(null, ""),
      payment_mode: Joi.string().allow("").required(),
      refunded_by: Joi.string().allow("").required(),
      amount_in_paisa: Joi.string().allow("").required(),
      payment_gateway: Joi.string().allow("").required(),
      company_id: Joi.string().allow("").required(),
      payment_mode_identifier: Joi.string().allow("").required(),
      application_id: Joi.string().allow("").required(),
      all_status: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {PaymentStatusObject} */
  static PaymentStatusObject() {
    return Joi.object({
      merchant_order_id: Joi.string().allow("").required(),
      payment_object_list: Joi.array().items(
        PaymentPlatformModel.PaymentObjectList()
      ),
    });
  }

  /** @returns {PaymentStatusBulkHandlerDetails} */
  static PaymentStatusBulkHandlerDetails() {
    return Joi.object({
      count: Joi.number(),
      data: Joi.array().items(PaymentPlatformModel.PaymentStatusObject()),
      success: Joi.string().allow("").required(),
      error: Joi.string().allow(""),
      status: Joi.number().required(),
    });
  }

  /** @returns {GetOauthUrlDetails} */
  static GetOauthUrlDetails() {
    return Joi.object({
      url: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {RevokeOAuthToken} */
  static RevokeOAuthToken() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {RepaymentRequestDetails} */
  static RepaymentRequestDetails() {
    return Joi.object({
      fwd_shipment_id: Joi.string().allow("").required(),
      aggregator: Joi.string().allow("").required(),
      current_status: Joi.string().allow("").required(),
      merchant_order_id: Joi.string().allow("").required(),
      amount: Joi.number().required(),
      payment_mode: Joi.string().allow("").required(),
      outstanding_details_id: Joi.number().required(),
      aggregator_transaction_id: Joi.string().allow("").required(),
      aggregator_order_id: Joi.string().allow("").required(),
      payment_mode_identifier: Joi.string().allow("").required(),
    });
  }

  /** @returns {RepaymentDetailsSerialiserPayAll} */
  static RepaymentDetailsSerialiserPayAll() {
    return Joi.object({
      total_amount: Joi.number().required(),
      extension_order_id: Joi.string().allow("").required(),
      aggregator_transaction_id: Joi.string().allow("").required(),
      aggregator_order_id: Joi.string().allow("").required(),
      shipment_details: Joi.array().items(
        PaymentPlatformModel.RepaymentRequestDetails()
      ),
    });
  }

  /** @returns {RepaymentDetails} */
  static RepaymentDetails() {
    return Joi.object({
      data: Joi.object().pattern(/\S/, Joi.any()).required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {MerchantOnBoardingCreation} */
  static MerchantOnBoardingCreation() {
    return Joi.object({
      credit_line_id: Joi.string().allow("").required(),
      aggregator: Joi.string().allow("").required(),
      app_id: Joi.string().allow("").required(),
      user_id: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
    });
  }

  /** @returns {MerchantOnBoardingDetails} */
  static MerchantOnBoardingDetails() {
    return Joi.object({
      data: Joi.object().pattern(/\S/, Joi.any()).required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ValidateCustomerCreation} */
  static ValidateCustomerCreation() {
    return Joi.object({
      phone_number: Joi.string().allow("").required(),
      aggregator: Joi.string().allow("").required(),
      payload: Joi.string().allow("").allow(null),
      delivery_address: Joi.object().pattern(/\S/, Joi.any()),
      transaction_amount_in_paise: Joi.number().required(),
      order_items: Joi.array().items(Joi.any()),
      merchant_params: Joi.object().pattern(/\S/, Joi.any()),
      billing_address: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {ValidateCustomerDetails} */
  static ValidateCustomerDetails() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      data: Joi.object().pattern(/\S/, Joi.any()),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {GetPaymentLinkDetails} */
  static GetPaymentLinkDetails() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      status_code: Joi.number().required(),
      amount: Joi.number().allow(null),
      merchant_name: Joi.string().allow("").allow(null),
      payment_link_url: Joi.string().allow("").allow(null),
      payment_link_current_status: Joi.string().allow("").allow(null),
      external_order_id: Joi.string().allow("").allow(null),
      polling_timeout: Joi.number().allow(null),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ErrorDescription} */
  static ErrorDescription() {
    return Joi.object({
      msg: Joi.string().allow("").allow(null),
      payment_transaction_id: Joi.string().allow("").allow(null),
      invalid_id: Joi.boolean().allow(null),
      merchant_order_id: Joi.string().allow("").allow(null),
      merchant_name: Joi.string().allow("").allow(null),
      amount: Joi.number().allow(null),
      expired: Joi.boolean().allow(null),
      cancelled: Joi.boolean().allow(null),
    });
  }

  /** @returns {ErrorDetails} */
  static ErrorDetails() {
    return Joi.object({
      status_code: Joi.number().required(),
      error: PaymentPlatformModel.ErrorDescription(),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {CreatePaymentLinkMeta} */
  static CreatePaymentLinkMeta() {
    return Joi.object({
      cart_id: Joi.string().allow("").required(),
      checkout_mode: Joi.string().allow("").required(),
      amount: Joi.string().allow("").required(),
      assign_card_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CreatePaymentLinkCreation} */
  static CreatePaymentLinkCreation() {
    return Joi.object({
      email: Joi.string().allow("").required(),
      amount: Joi.number().required(),
      mobile_number: Joi.string().allow("").required(),
      country_phone_code: Joi.string().allow(""),
      description: Joi.string().allow("").allow(null),
      meta: PaymentPlatformModel.CreatePaymentLinkMeta().required(),
      external_order_id: Joi.string().allow("").required(),
      success_redirection_url: Joi.string().allow(""),
      failure_redirection_url: Joi.string().allow(""),
    });
  }

  /** @returns {CreatePaymentLinkDetails} */
  static CreatePaymentLinkDetails() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      status_code: Joi.number().required(),
      payment_link_url: Joi.string().allow("").allow(null),
      polling_timeout: Joi.number().allow(null),
      success: Joi.boolean().required(),
      payment_link_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PollingPaymentLinkDetails} */
  static PollingPaymentLinkDetails() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      http_status: Joi.number().allow(null),
      status_code: Joi.number().allow(null),
      redirect_url: Joi.string().allow("").allow(null),
      amount: Joi.number().allow(null),
      order_id: Joi.string().allow("").allow(null),
      success: Joi.boolean().allow(null),
      payment_link_id: Joi.string().allow("").allow(null),
      status: Joi.string().allow("").allow(null),
      aggregator_name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CancelOrResendPaymentLinkCreation} */
  static CancelOrResendPaymentLinkCreation() {
    return Joi.object({
      payment_link_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {ResendPaymentLinkDetails} */
  static ResendPaymentLinkDetails() {
    return Joi.object({
      status_code: Joi.number().required(),
      message: Joi.string().allow("").required(),
      polling_timeout: Joi.number().allow(null),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {CancelPaymentLinkDetails} */
  static CancelPaymentLinkDetails() {
    return Joi.object({
      status_code: Joi.number().required(),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {Code} */
  static Code() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      merchant_code: Joi.string().allow("").required(),
      code: Joi.string().allow("").required(),
    });
  }

  /** @returns {PaymentCode} */
  static PaymentCode() {
    return Joi.object({
      networks: Joi.string().allow("").required(),
      codes: PaymentPlatformModel.Code().required(),
      name: Joi.string().allow("").required(),
      types: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetPaymentCode} */
  static GetPaymentCode() {
    return Joi.object({
      method_code: PaymentPlatformModel.PaymentCode().required(),
    });
  }

  /** @returns {GetPaymentCodeDetails} */
  static GetPaymentCodeDetails() {
    return Joi.object({
      data: PaymentPlatformModel.GetPaymentCode().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PlatformPaymentModeDetails} */
  static PlatformPaymentModeDetails() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      items: Joi.array().items(Joi.any()).allow(null, ""),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {MerchnatPaymentModeCreation} */
  static MerchnatPaymentModeCreation() {
    return Joi.object({
      offline: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      online: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
    });
  }

  /** @returns {OrderDetail} */
  static OrderDetail() {
    return Joi.object({
      gid: Joi.string().allow("").required(),
      amount: Joi.number().required(),
      status: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      aggregator_order_details: Joi.object()
        .pattern(/\S/, Joi.any())
        .required(),
      aggregator: Joi.string().allow("").required(),
    });
  }

  /** @returns {AddressDetail} */
  static AddressDetail() {
    return Joi.object({
      google_map_point: Joi.object().pattern(/\S/, Joi.any()),
      landmark: Joi.string().allow(""),
      phone: Joi.string().allow("").required(),
      country_iso_code: Joi.string().allow("").required(),
      area_code: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      expire_at: Joi.string().allow(""),
      geo_location: Joi.object().pattern(/\S/, Joi.any()),
      state: Joi.string().allow("").required(),
      area: Joi.string().allow("").required(),
      g_address_id: Joi.string().allow("").required(),
      area_code_slug: Joi.string().allow("").required(),
      country_phone_code: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      address_type: Joi.string().allow("").allow(null),
      address: Joi.string().allow("").required(),
      email: Joi.string().allow(""),
      city: Joi.string().allow("").required(),
      tags: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {ReasonDetail} */
  static ReasonDetail() {
    return Joi.object({
      code: Joi.string().allow(""),
      description: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentSessionDetail} */
  static PaymentSessionDetail() {
    return Joi.object({
      payment_id: Joi.string().allow("").required(),
      mode: Joi.string().allow("").required(),
      amount: Joi.number().required(),
      success_url: Joi.string().allow("").required(),
      shipping_address: PaymentPlatformModel.AddressDetail(),
      amount_captured: Joi.number().required(),
      amount_refunded: Joi.number(),
      aggregator_customer_id: Joi.string().allow(""),
      cancel_url: Joi.string().allow("").required(),
      payment_methods: Joi.array().items(Joi.any()).required(),
      created: Joi.string().allow(""),
      g_user_id: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      merchant_locale: Joi.string().allow(""),
      locale: Joi.string().allow(""),
      aggregator_order_id: Joi.string().allow("").required(),
      gid: Joi.string().allow("").required(),
      kind: Joi.string().allow(""),
      billing_address: PaymentPlatformModel.AddressDetail(),
      captured: Joi.boolean(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      status: Joi.string().allow("").required(),
      reason: PaymentPlatformModel.ReasonDetail(),
    });
  }

  /** @returns {PaymentSessionCreation} */
  static PaymentSessionCreation() {
    return Joi.object({
      meta: Joi.object().pattern(/\S/, Joi.any()),
      gid: Joi.string().allow("").required(),
      order_details: PaymentPlatformModel.OrderDetail().required(),
      status: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      payment_details: Joi.array()
        .items(PaymentPlatformModel.PaymentSessionDetail())
        .required(),
      total_amount: Joi.number().required(),
      checksum: Joi.string().allow("").required(),
      source: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentSessionPutDetails} */
  static PaymentSessionPutDetails() {
    return Joi.object({
      gid: Joi.string().allow("").required(),
      platform_transaction_details: Joi.array().items(Joi.any()).required(),
      status: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      total_amount: Joi.number().required(),
    });
  }

  /** @returns {RefundSessionDetail} */
  static RefundSessionDetail() {
    return Joi.object({
      refund_utr: Joi.string().allow(""),
      request_id: Joi.string().allow("").required(),
      payment_id: Joi.string().allow("").required(),
      amount: Joi.number().required(),
      reason: Joi.string().allow(""),
      status: Joi.string().allow("").required(),
      created: Joi.string().allow("").required(),
      source_transfer_reversal: Joi.string().allow(""),
      receipt_number: Joi.string().allow(""),
      pg_refund_id: Joi.string().allow(""),
      currency: Joi.string().allow("").required(),
      transfer_reversal: Joi.string().allow(""),
      balance_transaction: Joi.string().allow(""),
    });
  }

  /** @returns {RefundSessionCreation} */
  static RefundSessionCreation() {
    return Joi.object({
      meta: Joi.object().pattern(/\S/, Joi.any()),
      gid: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      payment_details: PaymentPlatformModel.PaymentSessionDetail().required(),
      total_amount: Joi.number().required(),
      refund_details: Joi.array()
        .items(PaymentPlatformModel.RefundSessionDetail())
        .required(),
      error: PaymentPlatformModel.ErrorDescription(),
      message: Joi.string().allow(""),
      checksum: Joi.string().allow("").required(),
    });
  }

  /** @returns {RefundSessionDetails} */
  static RefundSessionDetails() {
    return Joi.object({
      gid: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      platform_refund_details: Joi.array().items(Joi.any()).required(),
      total_refund_amount: Joi.number().required(),
    });
  }

  /** @returns {PaymentDetails} */
  static PaymentDetails() {
    return Joi.object({
      payment_methods: Joi.array().items(Joi.any()).required(),
      gid: Joi.string().allow("").required(),
      amount_refunded: Joi.number(),
      currency: Joi.string().allow("").required(),
      mode: Joi.string().allow("").required(),
      merchant_locale: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      kind: Joi.string().allow(""),
      success_url: Joi.string().allow(""),
      status: Joi.string().allow("").required(),
      captured: Joi.boolean(),
      payment_id: Joi.string().allow(""),
      g_user_id: Joi.string().allow("").required(),
      locale: Joi.string().allow(""),
      cancel_url: Joi.string().allow(""),
      created: Joi.string().allow(""),
      amount_captured: Joi.number().required(),
      amount: Joi.number().required(),
      aggregator_customer_id: Joi.string().allow(""),
      aggregator_order_id: Joi.string().allow(""),
    });
  }

  /** @returns {CartDetails} */
  static CartDetails() {
    return Joi.object({
      items: Joi.object().pattern(/\S/, Joi.any()).required(),
      articles: Joi.array().items(Joi.any()).required(),
      cart_value: Joi.number().required(),
      total_quantity: Joi.number(),
      custom_cart_meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {RefundDetails} */
  static RefundDetails() {
    return Joi.object({
      amount: Joi.number().required(),
      currency: Joi.string().allow("").required(),
      request_id: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      created: Joi.string().allow("").required(),
      refund_utr: Joi.string().allow("").required(),
    });
  }

  /** @returns {PaymentSessionFetchDetails} */
  static PaymentSessionFetchDetails() {
    return Joi.object({
      payment_details: Joi.any().required(),
      currency: Joi.string().allow("").allow(null),
      status: Joi.string().allow("").required(),
      total_amount: Joi.number().required(),
      gid: Joi.string().allow("").required(),
      cart_details: PaymentPlatformModel.CartDetails(),
      refund_details: Joi.array()
        .items(PaymentPlatformModel.RefundDetails())
        .required(),
    });
  }

  /** @returns {RefundSourcesPriority} */
  static RefundSourcesPriority() {
    return Joi.object({
      description: Joi.string().allow("").required(),
      priority: Joi.number().required(),
      source: Joi.string().allow("").required(),
    });
  }

  /** @returns {RefundPriorityDetails} */
  static RefundPriorityDetails() {
    return Joi.object({
      configuration: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
      apportion: Joi.boolean().required(),
      refund_sources_priority: Joi.array()
        .items(PaymentPlatformModel.RefundSourcesPriority())
        .required(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {RefundPriorityCreation} */
  static RefundPriorityCreation() {
    return Joi.object({
      apportion: Joi.boolean().required(),
      refund_sources_priority: Joi.array()
        .items(PaymentPlatformModel.RefundSourcesPriority())
        .required(),
    });
  }

  /** @returns {MerchantPaymentModeCreation} */
  static MerchantPaymentModeCreation() {
    return Joi.object({
      business_unit: Joi.string().allow("").required(),
      items: Joi.array().items(Joi.any()).required(),
      device: Joi.object().pattern(/\S/, Joi.any()).required(),
    });
  }

  /** @returns {FromConfig} */
  static FromConfig() {
    return Joi.object({
      device: Joi.string().allow("").required(),
      business_unit: Joi.string().allow("").required(),
    });
  }

  /** @returns {ToConfig} */
  static ToConfig() {
    return Joi.object({
      device: Joi.array().items(Joi.any()).required(),
      business_unit: Joi.string().allow("").required(),
    });
  }

  /** @returns {PlatformPaymentModeCopyConfigCreation} */
  static PlatformPaymentModeCopyConfigCreation() {
    return Joi.object({
      from_config: PaymentPlatformModel.FromConfig().required(),
      to_config: PaymentPlatformModel.ToConfig().required(),
    });
  }

  /** @returns {PaymentMethodsMetaOrder} */
  static PaymentMethodsMetaOrder() {
    return Joi.object({
      payment_identifier: Joi.string().allow("").required(),
      merchant_code: Joi.string().allow("").required(),
      payment_gateway: Joi.string().allow("").required(),
    });
  }

  /** @returns {PaymentOrderMethods} */
  static PaymentOrderMethods() {
    return Joi.object({
      amount: Joi.number().required(),
      payment: Joi.string().allow(""),
      mode: Joi.string().allow("").required(),
      meta: PaymentPlatformModel.PaymentMethodsMetaOrder().required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {PaymentOrderCreation} */
  static PaymentOrderCreation() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
      payment_methods: Joi.array().items(
        PaymentPlatformModel.PaymentOrderMethods()
      ),
      shipment_id: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentOrderData} */
  static PaymentOrderData() {
    return Joi.object({
      contact: Joi.string().allow("").allow(null),
      aggregator: Joi.string().allow("").allow(null),
      amount: Joi.number().allow(null),
      customer_id: Joi.string().allow("").allow(null),
      currency: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").allow(null),
      callback_url: Joi.string().allow("").allow(null),
      order_id: Joi.string().allow("").allow(null),
      method: Joi.string().allow("").allow(null),
      merchant_order_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PaymentOrderDetails} */
  static PaymentOrderDetails() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
      payment_confirm_url: Joi.string().allow("").allow(null),
      callback_url: Joi.string().allow("").allow(null),
      status_code: Joi.number().required(),
      order_id: Joi.string().allow("").allow(null),
      data: PaymentPlatformModel.PaymentOrderData(),
    });
  }

  /** @returns {AggregatorVersionItemSchema} */
  static AggregatorVersionItemSchema() {
    return Joi.object({
      is_equal_to: Joi.string().allow(""),
      is_less_than: Joi.string().allow(""),
      is_greater_than: Joi.string().allow(""),
    });
  }

  /** @returns {AggregatorVersionDetails} */
  static AggregatorVersionDetails() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
      items: PaymentPlatformModel.AggregatorVersionItemSchema(),
    });
  }

  /** @returns {AggregatorVersionRequestSchema} */
  static AggregatorVersionRequestSchema() {
    return Joi.object({
      is_equal_to: Joi.string().allow(""),
      is_less_than: Joi.string().allow(""),
      is_greater_than: Joi.string().allow(""),
    });
  }

  /** @returns {PatchAggregatorControl} */
  static PatchAggregatorControl() {
    return Joi.object({
      business_unit: Joi.string().allow(""),
      items: Joi.array().items(Joi.any()),
      device: Joi.string().allow(""),
      version: PaymentPlatformModel.AggregatorVersionRequestSchema(),
    });
  }

  /** @returns {PaymentModeCustomConfigSchema} */
  static PaymentModeCustomConfigSchema() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),
      business_unit: Joi.string().allow("").required(),
      custom_config: PaymentPlatformModel.PaymentCustomConfigDetailsSchema().required(),
    });
  }

  /** @returns {PaymentCustomConfigDetailsSchema} */
  static PaymentCustomConfigDetailsSchema() {
    return Joi.object({
      customer: PaymentPlatformModel.PaymentCustomConfigCustomerSchema().required(),
      payment_mode: PaymentPlatformModel.PaymentCustomConfigModeSchema().required(),
      min_order_value: Joi.number().required(),
    });
  }

  /** @returns {PaymentCustomConfigCustomerSchema} */
  static PaymentCustomConfigCustomerSchema() {
    return Joi.object({
      restriction: Joi.string().allow("").required(),
      groups: Joi.array().items(Joi.number()),
      types: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PaymentCustomConfigModeSchema} */
  static PaymentCustomConfigModeSchema() {
    return Joi.object({
      available: Joi.boolean().required(),
      pre_order: Joi.array().items(Joi.string().allow("")),
      post_order: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PaymentCustomConfigDetailsRequestSchema} */
  static PaymentCustomConfigDetailsRequestSchema() {
    return Joi.object({
      customer: PaymentPlatformModel.PaymentCustomConfigCustomerRequestSchema().required(),
      payment_mode: PaymentPlatformModel.PaymentCustomConfigModeSchema().required(),
      min_order_value: Joi.number().required(),
    });
  }

  /** @returns {PaymentCustomConfigCustomerRequestSchema} */
  static PaymentCustomConfigCustomerRequestSchema() {
    return Joi.object({
      restriction: Joi.string().allow("").required(),
      groups: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {PaymentCustomConfigRequestSchema} */
  static PaymentCustomConfigRequestSchema() {
    return Joi.object({
      business_unit: Joi.string().allow("").required(),
      items: Joi.array()
        .items(PaymentPlatformModel.PaymentCustomConfigDetailsRequestSchema())
        .required(),
    });
  }

  /** @returns {PaymentCustomConfigResponseSchema} */
  static PaymentCustomConfigResponseSchema() {
    return Joi.object({
      success: Joi.boolean().required(),
      message: Joi.string().allow("").required(),
      items: Joi.array()
        .items(PaymentPlatformModel.PaymentModeCustomConfigSchema())
        .required(),
    });
  }

  /** @returns {CustomerValidationSchema} */
  static CustomerValidationSchema() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      transaction_amount: Joi.number().required(),
      cart_id: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {UserCreditSchema} */
  static UserCreditSchema() {
    return Joi.object({
      amount: Joi.number().required(),
      currency: Joi.string().allow("").required(),
      unique_id: Joi.string().allow(""),
    });
  }

  /** @returns {CreditAccountSummary} */
  static CreditAccountSummary() {
    return Joi.object({
      account_id: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      redeemable_balance: PaymentPlatformModel.UserCreditSchema(),
      available_balance: PaymentPlatformModel.UserCreditSchema(),
      amount_on_hold: Joi.array().items(
        PaymentPlatformModel.UserCreditSchema()
      ),
    });
  }

  /** @returns {ValidateCustomerCreditSchema} */
  static ValidateCustomerCreditSchema() {
    return Joi.object({
      success: Joi.boolean().required(),
      is_eligible: Joi.boolean().required(),
      is_applied: Joi.boolean(),
      message: Joi.string().allow("").required(),
      cart_id: Joi.string().allow(""),
      account: PaymentPlatformModel.CreditAccountSummary(),
    });
  }
}
module.exports = PaymentPlatformModel;
