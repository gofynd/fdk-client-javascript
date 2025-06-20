export = PaymentPlatformModel;
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
 * @property {PaymentConfirmationElement[]} [payment_confirmation_elements] -
 *   List of additional fields required to confirm the payment, such as
 *   transaction ID or receipt image.
 */
/**
 * @typedef PaymentConfirmationElement
 * @property {boolean} [is_required]
 * @property {string} [display_label]
 * @property {string} [slug]
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
 * @property {number} [item_total] - The total number of all items across all pages.
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
 * @property {boolean} [send_communication] - Flag indicating whether to send
 *   communications (e.g., SMS or email) for the payment link
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
 * @typedef SkuDetails
 * @property {string} [identifier] - SKU identifier of the offer
 * @property {string} [sku_id] - Unique SKU identifier (example: GTIN, variant ID)
 * @property {string} [sku_name] - Display name of the SKU
 */
/**
 * @typedef AppliedOffer
 * @property {boolean} [is_mop] - Whether the offer is a mop or not. MOP is a
 *   discount that is applied on the total order value.
 * @property {string} [offer_type] - Type of offer. It can be either a bank or
 *   brand offer.
 * @property {string} [offer_id] - Unique identifier for the offer.
 * @property {string} [description] - Description of the offer.
 * @property {number} [amount] - Amount of the offer in paise. (Example: ₹1 = 100 paise)
 * @property {Object} [meta] - Extra meta data specific to extension
 * @property {SkuDetails[]} [sku_details] - List of sku details for which the
 *   offer is applicable. This is applicable only for brand offers.
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
 * @property {AppliedOffer[]} [applied_offers] - List of offers applied on the order.
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
/**
 * @typedef {| "storefront"
 *   | "store_os_pos"
 *   | "kiosk"
 *   | "scan_go"
 *   | "smart_trolley"
 *   | "gofynd"
 *   | "uniket"
 *   | "marketplace"
 *   | "social_commerce"
 *   | "ondc"
 *   | "nexus"
 *   | "nykaa_fashion"
 *   | "etsy"
 *   | "vuivui"
 *   | "zilingo"
 *   | "firstcry"
 *   | "bukalapak"
 *   | "myntra_ppmp"
 *   | "lazada"
 *   | "tiktok"
 *   | "sfcc"
 *   | "debenhams"
 *   | "prestomall"
 *   | "meesho"
 *   | "amazon_vdf"
 *   | "bigcommerce"
 *   | "sendo"
 *   | "storehippo"
 *   | "cdiscount"
 *   | "nykaa"
 *   | "trendyol"
 *   | "weloveshopping"
 *   | "jollee"
 *   | "wish"
 *   | "tiki"
 *   | "central_online"
 *   | "q10"
 *   | "cred"
 *   | "walmart"
 *   | "snapdeal"
 *   | "flipkart"
 *   | "blibli"
 *   | "ajio_jit"
 *   | "pharmeasy"
 *   | "ezmall"
 *   | "adobe_commerce"
 *   | "kartmax"
 *   | "shopee"
 *   | "zalora"
 *   | "prestashop"
 *   | "smytten"
 *   | "amazon_sc"
 *   | "urbanpiper"
 *   | "flipkart_quick"
 *   | "woocommerce"
 *   | "zivame"
 *   | "lelong"
 *   | "facebook"
 *   | "jiomart"
 *   | "gmc"
 *   | "robins"
 *   | "akulaku"
 *   | "noon"
 *   | "tatacliq"
 *   | "kartrocket"
 *   | "inorbit"
 *   | "ajio_business"
 *   | "swiggy"
 *   | "asos"
 *   | "tokopedia"
 *   | "limeroad"
 *   | "myntra_omni"
 *   | "spoyl"
 *   | "amazon_mlf"
 *   | "fulfilled_by_lazada"
 *   | "ebay"
 *   | "jd"
 *   | "amazon_pharmacy"
 *   | "ajio_vms"
 *   | "daraz"
 *   | "oker"
 *   | "flipkart_b2b"
 *   | "amazon_mlf_ss"
 *   | "woovly"
 *   | "tata1mg"
 *   | "zomato"
 *   | "shopify"} OrderingSource
 */
declare class PaymentPlatformModel {
}
declare namespace PaymentPlatformModel {
    export { PaymentGatewayConfigDetails, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigCreation, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorDetails, IntentAppErrorList, ProductCODData, CODChargesLimitsDetails, PaymentModeLogo, IntentApp, PaymentModeList, PaymentConfirmationElement, RootPaymentMode, PaymentOptions, AggregatorRoute, PaymentDefaultSelection, PaymentFlow, PaymentOptionAndFlow, AdvanceObject, SplitObject, AdvancePaymentObject, PaymentModeRouteDetails, PaymentOptionsDetails, PayoutCustomer, PayoutMoreAttributes, PayoutAggregator, Payout, PayoutsDetails, PayoutBankDetails, PayoutCreation, PayoutDetails, UpdatePayoutDetails, UpdatePayoutCreation, DeletePayoutDetails, SubscriptionPaymentMethodDetails, DeleteSubscriptionPaymentMethodDetails, SubscriptionConfigDetails, SaveSubscriptionSetupIntentCreation, SaveSubscriptionSetupIntentDetails, RefundAccountDetails, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPCreation, IfscCodeDetails, OrderBeneficiaryDetails, OrderBeneficiaryFetchResults, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationCreation, PaymentConfirmationDetails, CODdata, CODLimitConfig, CODPaymentLimitConfig, GetUserBULimitResponseSchema, GetUserCODLimitDetails, SetCODForUserCreation, SetCODOptionDetails, EdcModelData, EdcAggregatorAndModelListDetails, StatisticsData, EdcDeviceStatsDetails, EdcAddCreation, EdcDevice, EdcDeviceAddDetails, EdcDeviceDetails, EdcUpdate, EdcDeviceUpdateDetails, Page, EdcDeviceListDetails, PaymentInitializationCreation, PaymentInitializationDetails, PaymentStatusUpdateCreation, PaymentStatusUpdateDetails, ResendOrCancelPaymentCreation, LinkStatus, ResendOrCancelPaymentDetails, PaymentStatusBulkHandlerCreation, PaymentObjectList, PaymentStatusObject, PaymentStatusBulkHandlerDetails, GetOauthUrlDetails, RevokeOAuthToken, RepaymentRequestDetails, RepaymentDetailsSerialiserPayAll, RepaymentDetails, MerchantOnBoardingCreation, MerchantOnBoardingDetails, ValidateCustomerCreation, ValidateCustomerDetails, GetPaymentLinkDetails, ErrorDescription, ErrorDetails, CreatePaymentLinkMeta, CreatePaymentLinkCreation, CreatePaymentLinkDetails, PollingPaymentLinkDetails, CancelOrResendPaymentLinkCreation, ResendPaymentLinkDetails, CancelPaymentLinkDetails, Code, PaymentCode, GetPaymentCode, GetPaymentCodeDetails, PlatformPaymentModeDetails, MerchnatPaymentModeCreation, SkuDetails, AppliedOffer, OrderDetail, AddressDetail, ReasonDetail, PaymentSessionDetail, PaymentSessionCreation, PaymentSessionPutDetails, RefundSessionDetail, RefundSessionCreation, RefundSessionDetails, PaymentDetails, CartDetails, RefundDetails, PaymentSessionFetchDetails, RefundSourcesPriority, RefundPriorityDetails, RefundPriorityCreation, MerchantPaymentModeCreation, FromConfig, ToConfig, PlatformPaymentModeCopyConfigCreation, PaymentMethodsMetaOrder, PaymentOrderMethods, PaymentOrderCreation, PaymentOrderData, PaymentOrderDetails, AggregatorVersionItemSchema, AggregatorVersionDetails, AggregatorVersionRequestSchema, PatchAggregatorControl, PaymentModeCustomConfigSchema, PaymentCustomConfigDetailsSchema, PaymentCustomConfigCustomerSchema, PaymentCustomConfigModeSchema, PaymentCustomConfigDetailsRequestSchema, PaymentCustomConfigCustomerRequestSchema, PaymentCustomConfigRequestSchema, PaymentCustomConfigResponseSchema, CustomerValidationSchema, UserCreditSchema, CreditAccountSummary, ValidateCustomerCreditSchema, OrderingSource };
}
/** @returns {PaymentGatewayConfigDetails} */
declare function PaymentGatewayConfigDetails(): PaymentGatewayConfigDetails;
type PaymentGatewayConfigDetails = {
    /**
     * - List of all config specific to the
     * aggregator with their Details.
     */
    aggregators?: any[];
    /**
     * - Application Id to which Payment config Mapped
     */
    app_id: string;
    /**
     * - List of all excluded config with their Details.
     */
    excluded_fields: string[];
    /**
     * - Response is successful or not
     */
    success: boolean;
    /**
     * - Response is created or not
     */
    created: boolean;
    /**
     * - List of all display related configs, i.e. logo
     */
    display_fields: string[];
};
/** @returns {ErrorCodeDescription} */
declare function ErrorCodeDescription(): ErrorCodeDescription;
type ErrorCodeDescription = {
    /**
     * - Error human understandable description.
     */
    description: string;
    /**
     * - Error descrption code.
     */
    code: string;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {PaymentGatewayConfig} */
declare function PaymentGatewayConfig(): PaymentGatewayConfig;
type PaymentGatewayConfig = {
    /**
     * - Secret Key of the payment aggregator
     */
    secret: string;
    /**
     * - Config Type of the aggregator
     */
    config_type: string;
    /**
     * - Enable or Disable Flag
     */
    is_active?: boolean;
    /**
     * - Api key of the payment aggregator
     */
    key: string;
    /**
     * - The secret key or token provided by the
     * payment aggregator for the merchant.
     */
    merchant_salt: string;
};
/** @returns {PaymentGatewayConfigCreation} */
declare function PaymentGatewayConfigCreation(): PaymentGatewayConfigCreation;
type PaymentGatewayConfigCreation = {
    /**
     * - Application Id to which Payment config Mapped
     */
    app_id: string;
    /**
     * - Enable or Disable Flag
     */
    is_active?: boolean;
    aggregator_name?: PaymentGatewayConfig;
};
/** @returns {PaymentGatewayToBeReviewed} */
declare function PaymentGatewayToBeReviewed(): PaymentGatewayToBeReviewed;
type PaymentGatewayToBeReviewed = {
    /**
     * - List of added payment gateway
     */
    aggregator: string[];
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {ErrorCodeAndDescription} */
declare function ErrorCodeAndDescription(): ErrorCodeAndDescription;
type ErrorCodeAndDescription = {
    /**
     * - Error human understandable description.
     */
    description: string;
    /**
     * - Error descrption code.
     */
    code: string;
};
/** @returns {HttpErrorDetails} */
declare function HttpErrorDetails(): HttpErrorDetails;
type HttpErrorDetails = {
    error: ErrorCodeAndDescription;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {IntentAppErrorList} */
declare function IntentAppErrorList(): IntentAppErrorList;
type IntentAppErrorList = {
    /**
     * - Package_name
     */
    package_name?: string;
    /**
     * - Code
     */
    code?: string;
};
/** @returns {ProductCODData} */
declare function ProductCODData(): ProductCODData;
type ProductCODData = {
    /**
     * - Item id with its cod availability.
     */
    items?: any;
    cod_charges?: CODChargesLimitsDetails;
};
/** @returns {CODChargesLimitsDetails} */
declare function CODChargesLimitsDetails(): CODChargesLimitsDetails;
type CODChargesLimitsDetails = {
    /**
     * - Max allowed cart value for cod order.
     */
    max_cart_value?: number;
    /**
     * - Min allowed cart value for cod order.
     */
    min_cart_value?: number;
    /**
     * - Cod charges to be applied on order.
     */
    cod_charge?: number;
};
/** @returns {PaymentModeLogo} */
declare function PaymentModeLogo(): PaymentModeLogo;
type PaymentModeLogo = {
    /**
     * - Large
     */
    large: string;
    /**
     * - Smalll
     */
    small: string;
};
/** @returns {IntentApp} */
declare function IntentApp(): IntentApp;
type IntentApp = {
    /**
     * - Package_name
     */
    package_name?: string;
    /**
     * - Display_name
     */
    display_name?: string;
    /**
     * - Code
     */
    code?: string;
    logos?: PaymentModeLogo;
};
/** @returns {PaymentModeList} */
declare function PaymentModeList(): PaymentModeList;
type PaymentModeList = {
    /**
     * - Remaining limit
     */
    remaining_limit?: number;
    /**
     * - Card_brand
     */
    card_brand?: string;
    /**
     * - Card_fingerprint
     */
    card_fingerprint?: string;
    /**
     * - Merchant code
     */
    merchant_code?: string;
    /**
     * - Intent_flow
     */
    intent_flow?: boolean;
    /**
     * - Code
     */
    code?: string;
    /**
     * - Card_issuer
     */
    card_issuer?: string;
    /**
     * - Cod limit per order
     */
    cod_limit_per_order?: number;
    /**
     * - Card_reference
     */
    card_reference?: string;
    /**
     * - Card_type
     */
    card_type?: string;
    /**
     * - Card_isin
     */
    card_isin?: string;
    /**
     * - Exp_month
     */
    exp_month?: number;
    /**
     * - Fynd_vpa
     */
    fynd_vpa?: string;
    /**
     * - Card_number
     */
    card_number?: string;
    /**
     * - Dispaly Priority
     */
    display_priority?: number;
    /**
     * - Display name
     */
    display_name?: string;
    /**
     * - Card_id
     */
    card_id?: string;
    /**
     * - Retry_count
     */
    retry_count?: number;
    /**
     * - Card_name
     */
    card_name?: string;
    /**
     * - Timeout
     */
    timeout?: number;
    /**
     * -
     * Intent_app_error_dict_list
     */
    intent_app_error_dict_list?: IntentAppErrorList[];
    /**
     * - Card_brand_image
     */
    card_brand_image?: string;
    /**
     * - Expired
     */
    expired?: boolean;
    logo_url?: PaymentModeLogo;
    /**
     * - Card_token
     */
    card_token?: string;
    /**
     * - Aggregator_name
     */
    aggregator_name: string;
    /**
     * - Cod charges to be applied on order.
     */
    cod_charges?: number;
    product_cod_data?: ProductCODData;
    /**
     * - Cod limit
     */
    cod_limit?: number;
    /**
     * - Intent_app
     */
    intent_app?: IntentApp[];
    /**
     * - Nickname
     */
    nickname?: string;
    /**
     * - If card is
     * tokenised or not
     */
    compliant_with_tokenisation_guidelines?: boolean;
    /**
     * - Exp_year
     */
    exp_year?: number;
    /**
     * - Name
     */
    name?: string;
    /**
     * - Intent_app_error_list
     */
    intent_app_error_list?: string[];
    /**
     * -
     * List of additional fields required to confirm the payment, such as
     * transaction ID or receipt image.
     */
    payment_confirmation_elements?: PaymentConfirmationElement[];
};
/** @returns {PaymentConfirmationElement} */
declare function PaymentConfirmationElement(): PaymentConfirmationElement;
type PaymentConfirmationElement = {
    is_required?: boolean;
    display_label?: string;
    slug?: string;
};
/** @returns {RootPaymentMode} */
declare function RootPaymentMode(): RootPaymentMode;
type RootPaymentMode = {
    /**
     * - Payment mode
     */
    list?: PaymentModeList[];
    /**
     * - Dispaly Priority
     */
    display_priority: number;
    /**
     * - Annonymous card flag
     */
    add_card_enabled?: boolean;
    /**
     * - Card save or not
     */
    save_card?: boolean;
    /**
     * - This flag will be true in case of
     * Payment link payment through card
     */
    is_pay_by_card_pl?: boolean;
    /**
     * - Payment mode display name
     */
    display_name: string;
    /**
     * - Annonymous card flag
     */
    anonymous_enable?: boolean;
    /**
     * - Payment mode name
     */
    name: string;
    /**
     * - Dispaly Priority
     */
    aggregator_name?: string;
};
/** @returns {PaymentOptions} */
declare function PaymentOptions(): PaymentOptions;
type PaymentOptions = {
    /**
     * - Payment options
     */
    payment_option: RootPaymentMode[];
};
/** @returns {AggregatorRoute} */
declare function AggregatorRoute(): AggregatorRoute;
type AggregatorRoute = {
    /**
     * - Data
     */
    data?: any;
    /**
     * - Payment_flow_data
     */
    payment_flow_data?: any;
    /**
     * - Payment_flow
     */
    payment_flow?: string;
    /**
     * - Api_link
     */
    api_link?: string;
};
/** @returns {PaymentDefaultSelection} */
declare function PaymentDefaultSelection(): PaymentDefaultSelection;
type PaymentDefaultSelection = {
    /**
     * - Default Selection Payment Mode
     */
    mode?: string;
    /**
     * - Identifier for Payment Mode
     */
    identifier?: string;
    /**
     * - Decide if the default payment mode will skip the
     * payment options page altogether or just be preferred on the Frontend
     */
    skip?: boolean;
};
/** @returns {PaymentFlow} */
declare function PaymentFlow(): PaymentFlow;
type PaymentFlow = {
    bqr_razorpay?: AggregatorRoute;
    fynd?: AggregatorRoute;
    epaylater?: AggregatorRoute;
    razorpay?: AggregatorRoute;
    juspay?: AggregatorRoute;
    ajiodhan?: AggregatorRoute;
    simpl?: AggregatorRoute;
    rupifi?: AggregatorRoute;
    mswipe?: AggregatorRoute;
    stripe?: AggregatorRoute;
    ccavenue?: AggregatorRoute;
    payubiz?: AggregatorRoute;
    jiopay?: AggregatorRoute;
};
/** @returns {PaymentOptionAndFlow} */
declare function PaymentOptionAndFlow(): PaymentOptionAndFlow;
type PaymentOptionAndFlow = {
    /**
     * - Payment options
     */
    payment_option: RootPaymentMode[];
    payment_flows?: PaymentFlow;
    payment_default_selection?: PaymentDefaultSelection;
};
/** @returns {AdvanceObject} */
declare function AdvanceObject(): AdvanceObject;
type AdvanceObject = {
    /**
     * - Is Advance Payment active
     */
    is_active?: boolean;
    /**
     * - Amount for Payment Breakdown
     */
    amount?: number;
    /**
     * - Time unit for refunds
     */
    time_unit?: string;
    /**
     * - The description for Advance Payment (user
     * configured)
     */
    description?: string;
    /**
     * - The display name for Advance payment
     */
    display_name?: string;
    /**
     * - Type of prepayment value
     */
    prepayment_type?: string;
    /**
     * - Value for prepayment in advance payment
     */
    prepayment_value?: number;
    /**
     * - Type of cancellation
     */
    cancellation_type?: string;
    /**
     * - Time limit for processing refund
     */
    refund_time_limit?: number;
    /**
     * - All available types of prepayment
     */
    all_prepayment_type?: string[];
    /**
     * - Is custom advance amount allowed?
     */
    allow_custom_advance_amount?: boolean;
};
/** @returns {SplitObject} */
declare function SplitObject(): SplitObject;
type SplitObject = {
    /**
     * - Maximum amount of splits allowed
     */
    total_number_of_splits?: number;
    /**
     * - Number of splits remaining
     */
    splits_remaining?: number;
    /**
     * - Amount pending to be paid
     */
    amount_remaining?: number;
};
/** @returns {AdvancePaymentObject} */
declare function AdvancePaymentObject(): AdvancePaymentObject;
type AdvancePaymentObject = {
    /**
     * - Name of Advance Payment Mode
     */
    name?: string;
    /**
     * - Display Priority for Payment Option
     */
    display_priority?: number;
    /**
     * - Payment Mode ID for Advance Payment Option
     */
    payment_mode_id?: number;
    /**
     * - Display name for Advance Payment Mode
     */
    display_name?: string;
    /**
     * - Payment mode
     */
    list?: PaymentModeList[];
    split?: SplitObject;
    advance?: AdvanceObject;
};
/** @returns {PaymentModeRouteDetails} */
declare function PaymentModeRouteDetails(): PaymentModeRouteDetails;
type PaymentModeRouteDetails = {
    payment_options: PaymentOptionAndFlow;
    /**
     * - Response is successful or not
     */
    success: boolean;
    /**
     * - Payment Breakup for advance payment
     */
    payment_breakup?: any;
    /**
     * - Advance Payment Array
     */
    advance_payment?: AdvancePaymentObject[];
};
/** @returns {PaymentOptionsDetails} */
declare function PaymentOptionsDetails(): PaymentOptionsDetails;
type PaymentOptionsDetails = {
    payment_options: PaymentOptions;
    /**
     * - Response is successful or not
     */
    success: boolean;
    /**
     * - Payment Breakup for advance payment
     */
    payment_breakup?: any;
};
/** @returns {PayoutCustomer} */
declare function PayoutCustomer(): PayoutCustomer;
type PayoutCustomer = {
    /**
     * - Unique_external_id
     */
    unique_external_id?: string;
    /**
     * - Customer Mobile No
     */
    mobile?: string;
    /**
     * - Customer Name
     */
    name?: string;
    /**
     * - Customer Email
     */
    email?: string;
    /**
     * - Customer ID
     */
    id?: number;
};
/** @returns {PayoutMoreAttributes} */
declare function PayoutMoreAttributes(): PayoutMoreAttributes;
type PayoutMoreAttributes = {
    /**
     * - Branch Name
     */
    branch_name?: string;
    /**
     * - City
     */
    city?: string;
    /**
     * - Account Number
     */
    account_no?: string;
    /**
     * - Country
     */
    country?: string;
    /**
     * - State
     */
    state?: string;
    /**
     * - Account Holder Name
     */
    account_holder?: string;
    /**
     * - IFSC Code
     */
    ifsc_code?: string;
    /**
     * - Account Type Saving or Current
     */
    account_type?: string;
    /**
     * - Name of Bank
     */
    bank_name?: string;
};
/** @returns {PayoutAggregator} */
declare function PayoutAggregator(): PayoutAggregator;
type PayoutAggregator = {
    /**
     * - Aggregator_id
     */
    aggregator_id?: number;
    /**
     * - Aggregator_fund_id
     */
    aggregator_fund_id?: number;
    /**
     * - Payout_details_id
     */
    payout_details_id?: number;
};
/** @returns {Payout} */
declare function Payout(): Payout;
type Payout = {
    customers: PayoutCustomer;
    more_attributes: PayoutMoreAttributes;
    /**
     * - Default or not
     */
    is_default: boolean;
    payouts_aggregators?: PayoutAggregator[];
    /**
     * - Display priority of the payment mode
     */
    unique_transfer_no: string;
    /**
     * - Enable/DIsable Flag Payout
     */
    is_active: boolean;
    /**
     * - Transafer type
     */
    transfer_type: string;
};
/** @returns {PayoutsDetails} */
declare function PayoutsDetails(): PayoutsDetails;
type PayoutsDetails = {
    /**
     * - Response is successful or not
     */
    success: boolean;
    /**
     * - Contains list of PayoutSchema
     */
    items: Payout[];
};
/** @returns {PayoutBankDetails} */
declare function PayoutBankDetails(): PayoutBankDetails;
type PayoutBankDetails = {
    ifsc_code: string;
    account_holder?: string;
    state?: string;
    country?: string;
    account_type: string;
    account_no?: string;
    city?: string;
    bank_name?: string;
    branch_name?: string;
    pincode?: number;
};
/** @returns {PayoutCreation} */
declare function PayoutCreation(): PayoutCreation;
type PayoutCreation = {
    /**
     * - Aggregator Name
     */
    aggregator: string;
    /**
     * - Payout users object
     */
    users: any;
    /**
     * - Unique Id of Payout
     */
    unique_external_id: string;
    /**
     * - Enable or Disable Flag Payout
     */
    is_active: boolean;
    bank_details: PayoutBankDetails;
    /**
     * - Transafer type
     */
    transfer_type: string;
};
/** @returns {PayoutDetails} */
declare function PayoutDetails(): PayoutDetails;
type PayoutDetails = {
    /**
     * - Status of payment
     */
    payment_status: string;
    /**
     * - Users details object
     */
    users: any;
    /**
     * - Aggregator Name
     */
    aggregator: string;
    /**
     * - Unique transfer no
     */
    unique_transfer_no: string;
    /**
     * - Enable or DIsable Flag Payout
     */
    is_active: boolean;
    /**
     * - Payout bank_details object
     */
    bank_details: any;
    /**
     * - Response is successful or not
     */
    success: boolean;
    /**
     * - Transfer type
     */
    transfer_type: string;
    /**
     * - Created flag
     */
    created: boolean;
    /**
     * - Payout object
     */
    payouts: any;
};
/** @returns {UpdatePayoutDetails} */
declare function UpdatePayoutDetails(): UpdatePayoutDetails;
type UpdatePayoutDetails = {
    /**
     * - Enable or Disable Default Payout
     */
    is_default: boolean;
    /**
     * - Enable or DIsable Flag Payout
     */
    is_active: boolean;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {UpdatePayoutCreation} */
declare function UpdatePayoutCreation(): UpdatePayoutCreation;
type UpdatePayoutCreation = {
    /**
     * - Enable or Disable Default Payout
     */
    is_default: boolean;
    /**
     * - Enable or Disable Flag Payout
     */
    is_active: boolean;
    /**
     * - Unique Id of Payout
     */
    unique_external_id: string;
};
/** @returns {DeletePayoutDetails} */
declare function DeletePayoutDetails(): DeletePayoutDetails;
type DeletePayoutDetails = {
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {SubscriptionPaymentMethodDetails} */
declare function SubscriptionPaymentMethodDetails(): SubscriptionPaymentMethodDetails;
type SubscriptionPaymentMethodDetails = {
    /**
     * - Subscription Payment Method Object
     */
    data: any[];
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {DeleteSubscriptionPaymentMethodDetails} */
declare function DeleteSubscriptionPaymentMethodDetails(): DeleteSubscriptionPaymentMethodDetails;
type DeleteSubscriptionPaymentMethodDetails = {
    /**
     * - Success or failure.
     */
    success: boolean;
};
/** @returns {SubscriptionConfigDetails} */
declare function SubscriptionConfigDetails(): SubscriptionConfigDetails;
type SubscriptionConfigDetails = {
    /**
     * - Aggregator Name
     */
    aggregator: string;
    /**
     * - Aggregator Config
     */
    config: any;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {SaveSubscriptionSetupIntentCreation} */
declare function SaveSubscriptionSetupIntentCreation(): SaveSubscriptionSetupIntentCreation;
type SaveSubscriptionSetupIntentCreation = {
    /**
     * - Unique id i.e company:id
     */
    unique_external_id: string;
};
/** @returns {SaveSubscriptionSetupIntentDetails} */
declare function SaveSubscriptionSetupIntentDetails(): SaveSubscriptionSetupIntentDetails;
type SaveSubscriptionSetupIntentDetails = {
    /**
     * - Subscription Payment Method Object
     */
    data: any;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {RefundAccountDetails} */
declare function RefundAccountDetails(): RefundAccountDetails;
type RefundAccountDetails = {
    /**
     * - Account is verified or not
     */
    is_verified_flag?: boolean;
    /**
     * - Response message
     */
    message?: string;
    /**
     * - Refund account data.
     */
    data: any;
    /**
     * - Success or failure flag.
     */
    success: boolean;
};
/** @returns {NotFoundResourceError} */
declare function NotFoundResourceError(): NotFoundResourceError;
type NotFoundResourceError = {
    /**
     * - Not Found
     */
    description: string;
    /**
     * - Bad Request Data
     */
    code: string;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {BankDetailsForOTP} */
declare function BankDetailsForOTP(): BankDetailsForOTP;
type BankDetailsForOTP = {
    /**
     * - IFSC code of account
     */
    ifsc_code: string;
    /**
     * - Account number
     */
    account_no: string;
    /**
     * - Branch name of account
     */
    branch_name: string;
    /**
     * - Bank name of account
     */
    bank_name: string;
    /**
     * - Accountg holder name of account
     */
    account_holder: string;
};
/** @returns {AddBeneficiaryDetailsOTPCreation} */
declare function AddBeneficiaryDetailsOTPCreation(): AddBeneficiaryDetailsOTPCreation;
type AddBeneficiaryDetailsOTPCreation = {
    /**
     * - Order_id for which account will be added
     */
    order_id: string;
    details: BankDetailsForOTP;
};
/** @returns {IfscCodeDetails} */
declare function IfscCodeDetails(): IfscCodeDetails;
type IfscCodeDetails = {
    /**
     * - Branch Name Of Account
     */
    branch_name: string;
    /**
     * - Response is successful or not
     */
    success?: boolean;
    /**
     * - Bank Name Of Account
     */
    bank_name: string;
};
/** @returns {OrderBeneficiaryDetails} */
declare function OrderBeneficiaryDetails(): OrderBeneficiaryDetails;
type OrderBeneficiaryDetails = {
    /**
     * - SHort Title Of Account
     */
    subtitle: string;
    /**
     * -
     */
    id: number;
    /**
     * - Title Of Account
     */
    title: string;
    /**
     * - Account Holder Name
     */
    account_holder: string;
    /**
     * - Ifsc Code Of Account
     */
    ifsc_code: string;
    /**
     * - Remarks
     */
    comment?: string;
    /**
     * - Creation Date of Beneficiary
     */
    created_on: string;
    /**
     * - Display Name Of Account
     */
    display_name: string;
    /**
     * - User Id Who filled the Beneficiary
     */
    delights_user_name?: string;
    /**
     * - Transfer Mode Of Account
     */
    transfer_mode: string;
    /**
     * - Email of User
     */
    email: string;
    /**
     * - Boolean Flag whether Beneficiary set or not
     */
    is_active: boolean;
    /**
     * - Branch Name Of Account
     */
    branch_name?: string;
    /**
     * - Address of User
     */
    address: string;
    /**
     * - Modification Date of Beneficiary
     */
    modified_on: string;
    /**
     * - Benenficiary Id
     */
    beneficiary_id: string;
    /**
     * - Account Number
     */
    account_no: string;
    /**
     * - Bank Name Of Account
     */
    bank_name: string;
    /**
     * - MObile no of User
     */
    mobile?: string;
};
/** @returns {OrderBeneficiaryFetchResults} */
declare function OrderBeneficiaryFetchResults(): OrderBeneficiaryFetchResults;
type OrderBeneficiaryFetchResults = {
    /**
     * - All Beneficiaries Of An Order
     */
    beneficiaries?: OrderBeneficiaryDetails[];
    /**
     * - Show beneficiary details or not.
     */
    show_beneficiary_details?: boolean;
};
/** @returns {MultiTenderPaymentMeta} */
declare function MultiTenderPaymentMeta(): MultiTenderPaymentMeta;
type MultiTenderPaymentMeta = {
    /**
     * - Key value pair for extra data related to payment mode
     */
    extra_meta?: any;
    /**
     * - Fynd Platform order ID
     */
    order_id?: string;
    /**
     * - A unique identifier associated with a
     * specific payment transaction
     */
    payment_id?: string;
    /**
     * - Represents the current state or
     * condition of an object, such as an order or payment.
     */
    current_status?: string;
    /**
     * - Specifies the name or identifier of
     * the payment gateway. This will deprecated in future version. We recommend
     * switching to `payment_gateway_slug` to ensure uninterrupted payment processing.
     */
    payment_gateway?: string;
    /**
     * - A simplified, URL-friendly string
     * that represents the name of the payment gateway and it will used for refund PG.
     */
    payment_gateway_slug?: string;
};
/** @returns {MultiTenderPaymentMethod} */
declare function MultiTenderPaymentMethod(): MultiTenderPaymentMethod;
type MultiTenderPaymentMethod = {
    /**
     * - Payment mode name
     */
    name?: string;
    meta?: MultiTenderPaymentMeta;
    /**
     * - Payment amount
     */
    amount: number;
    /**
     * - Payment mode short code
     */
    mode: string;
};
/** @returns {PaymentConfirmationCreation} */
declare function PaymentConfirmationCreation(): PaymentConfirmationCreation;
type PaymentConfirmationCreation = {
    /**
     * - Unique order id
     */
    order_id: string;
    payment_methods: MultiTenderPaymentMethod[];
};
/** @returns {PaymentConfirmationDetails} */
declare function PaymentConfirmationDetails(): PaymentConfirmationDetails;
type PaymentConfirmationDetails = {
    /**
     * - Unique order id
     */
    order_id: string;
    /**
     * - Message
     */
    message: string;
    /**
     * - Payment confirmation updated or not.
     */
    success: boolean;
};
/** @returns {CODdata} */
declare function CODdata(): CODdata;
type CODdata = {
    /**
     * - Remaining Limit for COD of User
     */
    remaining_limit: number;
    /**
     * - Payment mode name
     */
    user_id: string;
    /**
     * - COD option is active or not
     */
    is_active: boolean;
    /**
     * - Total Limit of user
     */
    limit: number;
    /**
     * - Used COD limit from the user Limit
     */
    usages: number;
};
/** @returns {CODLimitConfig} */
declare function CODLimitConfig(): CODLimitConfig;
type CODLimitConfig = {
    /**
     * - Limit for storefront
     */
    storefront: number;
    /**
     * - Limit for pos
     */
    pos: number;
};
/** @returns {CODPaymentLimitConfig} */
declare function CODPaymentLimitConfig(): CODPaymentLimitConfig;
type CODPaymentLimitConfig = {
    /**
     * - Boolean flag to show the status
     */
    is_active: boolean;
    /**
     * - Used cod limit
     */
    usages: number;
    /**
     * - User_id
     */
    user_id: number;
    /**
     * - Merchant_user_id
     */
    merchant_user_id: string;
    /**
     * - Remaining COD limit
     */
    remaining_limit: number;
    limit: CODLimitConfig;
};
/** @returns {GetUserBULimitResponseSchema} */
declare function GetUserBULimitResponseSchema(): GetUserBULimitResponseSchema;
type GetUserBULimitResponseSchema = {
    /**
     * - COD limit business unit
     */
    business_unit: string;
    /**
     * - Display name for cod limit
     */
    display_name: string;
    config: CODPaymentLimitConfig;
};
/** @returns {GetUserCODLimitDetails} */
declare function GetUserCODLimitDetails(): GetUserCODLimitDetails;
type GetUserCODLimitDetails = {
    items: GetUserBULimitResponseSchema[];
    /**
     * - Response is successful or not
     */
    success: boolean;
    /**
     * - Message for cod limit
     */
    message?: string;
};
/** @returns {SetCODForUserCreation} */
declare function SetCODForUserCreation(): SetCODForUserCreation;
type SetCODForUserCreation = {
    /**
     * - Business unit
     */
    business_unit?: string;
    /**
     * - Mobile No. of User
     */
    mobileno: string;
    /**
     * - Either true or false
     */
    is_active: boolean;
    /**
     * - Merchant User id
     */
    merchant_user_id: string;
};
/** @returns {SetCODOptionDetails} */
declare function SetCODOptionDetails(): SetCODOptionDetails;
type SetCODOptionDetails = {
    /**
     * - Message
     */
    message: string;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {EdcModelData} */
declare function EdcModelData(): EdcModelData;
type EdcModelData = {
    /**
     * - Name of aggregator
     */
    aggregator: string;
    /**
     * - ID of aggregator
     */
    aggregator_id: number;
    /**
     * - List of string of edc models
     */
    models: string[];
};
/** @returns {EdcAggregatorAndModelListDetails} */
declare function EdcAggregatorAndModelListDetails(): EdcAggregatorAndModelListDetails;
type EdcAggregatorAndModelListDetails = {
    /**
     * - List of aggregators and their edc models
     */
    data: EdcModelData[];
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {StatisticsData} */
declare function StatisticsData(): StatisticsData;
type StatisticsData = {
    /**
     * - No of inactive devices
     */
    inactive_device_count: number;
    /**
     * - No of active devices
     */
    active_device_count: number;
};
/** @returns {EdcDeviceStatsDetails} */
declare function EdcDeviceStatsDetails(): EdcDeviceStatsDetails;
type EdcDeviceStatsDetails = {
    statistics: StatisticsData;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {EdcAddCreation} */
declare function EdcAddCreation(): EdcAddCreation;
type EdcAddCreation = {
    /**
     * - Model of the edc machine
     */
    edc_model: string;
    /**
     * - Store at which devices is to used
     */
    store_id: number;
    /**
     * - Aggregator which will accept payment
     */
    aggregator_id: number;
    /**
     * - Serial number or imei of EDC device
     */
    edc_device_serial_no: string;
    /**
     * - Device serial number of
     * terminal(android tablet)
     */
    terminal_serial_no: string;
    /**
     * - Device tag of edc device to identify it
     */
    device_tag?: string;
};
/** @returns {EdcDevice} */
declare function EdcDevice(): EdcDevice;
type EdcDevice = {
    /**
     * - Name of the model
     */
    edc_model?: string;
    /**
     * - Store at which devices is to used
     */
    store_id: number;
    /**
     * - Aggregator which will accept payment
     */
    aggregator_id: number;
    /**
     * - Genearated unique value for edc device
     */
    terminal_unique_identifier: string;
    /**
     * - Serial number of EDC device
     */
    edc_device_serial_no: string;
    /**
     * - State whether device is active or inactive
     */
    is_active: boolean;
    /**
     * - Name of the corresponding aggregator
     */
    aggregator_name?: string;
    /**
     * - Device serial number of
     * terminal(android tablet)
     */
    terminal_serial_no: string;
    /**
     * - This is provided by pinelabs
     */
    merchant_store_pos_code?: string;
    /**
     * - Device tag of edc device to identify it
     */
    device_tag: string;
    /**
     * - Application ID
     */
    application_id: string;
};
/** @returns {EdcDeviceAddDetails} */
declare function EdcDeviceAddDetails(): EdcDeviceAddDetails;
type EdcDeviceAddDetails = {
    data: EdcDevice;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {EdcDeviceDetails} */
declare function EdcDeviceDetails(): EdcDeviceDetails;
type EdcDeviceDetails = {
    data: EdcDevice;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {EdcUpdate} */
declare function EdcUpdate(): EdcUpdate;
type EdcUpdate = {
    /**
     * - Model of the edc machine
     */
    edc_model?: string;
    /**
     * - Store at which devices is to used
     */
    store_id?: number;
    /**
     * - Aggregator which will accept payment
     */
    aggregator_id?: number;
    /**
     * - Serial number or imei of EDC device
     */
    edc_device_serial_no?: string;
    /**
     * - State whether device is active or inactive
     */
    is_active?: boolean;
    /**
     * - This is provided by pinelabs
     */
    merchant_store_pos_code?: string;
    /**
     * - Device tag of edc device to identify it
     */
    device_tag?: string;
};
/** @returns {EdcDeviceUpdateDetails} */
declare function EdcDeviceUpdateDetails(): EdcDeviceUpdateDetails;
type EdcDeviceUpdateDetails = {
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    /**
     * - The total number of all items across all pages.
     */
    item_total?: number;
    /**
     * - The identifier for the next page.
     */
    next_id?: string;
    /**
     * - Indicates whether there is a previous page.
     */
    has_previous?: boolean;
    /**
     * - Indicates whether there is a next page.
     */
    has_next?: boolean;
    /**
     * - The current page number.
     */
    current?: number;
    /**
     * - The type of the page, such as 'PageType'.
     */
    type: string;
    /**
     * - The number of items per page.
     */
    size?: number;
    /**
     * - The number of items per page.
     */
    page_size?: number;
};
/** @returns {EdcDeviceListDetails} */
declare function EdcDeviceListDetails(): EdcDeviceListDetails;
type EdcDeviceListDetails = {
    /**
     * - List of all edc mapped to the application
     * options with their Details.
     */
    items: EdcDevice[];
    page: Page;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {PaymentInitializationCreation} */
declare function PaymentInitializationCreation(): PaymentInitializationCreation;
type PaymentInitializationCreation = {
    /**
     * - Payment gateway payment id
     */
    razorpay_payment_id?: string;
    /**
     * - EDC machine Unique Identifier
     */
    device_id?: string;
    /**
     * - Customer valid email
     */
    email: string;
    /**
     * - Payment gateway customer id.
     */
    customer_id: string;
    /**
     * - Customer vpa address
     */
    vpa?: string;
    /**
     * - Payment gateway name
     */
    aggregator: string;
    /**
     * - Payment gateway order id
     */
    order_id: string;
    /**
     * - Currency code.
     */
    currency: string;
    /**
     * - Payable amount.
     */
    amount: number;
    /**
     * - Customer valid mobile number
     */
    contact: string;
    /**
     * - Payment polling timeout if not recieved response
     */
    timeout?: number;
    /**
     * - Unique fynd order id
     */
    merchant_order_id: string;
    /**
     * - Payment method
     */
    method: string;
};
/** @returns {PaymentInitializationDetails} */
declare function PaymentInitializationDetails(): PaymentInitializationDetails;
type PaymentInitializationDetails = {
    /**
     * - Payment id.
     */
    razorpay_payment_id?: string;
    /**
     * - EDC machine Unique Identifier
     */
    device_id?: string;
    /**
     * - UPI poll url.
     */
    upi_poll_url?: string;
    /**
     * - Payment gateway customer id.
     */
    customer_id?: string;
    /**
     * - Polling url.
     */
    polling_url: string;
    /**
     * - Customer vpa address
     */
    vpa?: string;
    /**
     * - Payment gateway name
     */
    aggregator: string;
    /**
     * - Currency code.
     */
    currency?: string;
    /**
     * - Order id
     */
    merchant_order_id: string;
    /**
     * - Payable amount.
     */
    amount?: number;
    /**
     * - Timeout.
     */
    timeout?: number;
    /**
     * - Payment virtual address.
     */
    virtual_id?: string;
    /**
     * - Bharath qr image url.
     */
    bqr_image?: string;
    /**
     * - Payment order id
     */
    aggregator_order_id?: string;
    /**
     * - Response is successful or not.
     */
    success: boolean;
    /**
     * - Status of payment.
     */
    status?: string;
    /**
     * - Payment method
     */
    method: string;
};
/** @returns {PaymentStatusUpdateCreation} */
declare function PaymentStatusUpdateCreation(): PaymentStatusUpdateCreation;
type PaymentStatusUpdateCreation = {
    /**
     * - EDC machine Unique Identifier
     */
    device_id?: string;
    /**
     * - Customer valid email
     */
    email: string;
    /**
     * - Payment gateway customer id.
     */
    customer_id: string;
    /**
     * - Customer vpa address
     */
    vpa?: string;
    /**
     * - Payment gateway name
     */
    aggregator: string;
    /**
     * - Payment gateway order id
     */
    order_id: string;
    /**
     * - Currency code.
     */
    currency: string;
    /**
     * - Payable amount.
     */
    amount: number;
    /**
     * - Customer valid mobile number
     */
    contact: string;
    /**
     * - Unique fynd order id
     */
    merchant_order_id: string;
    /**
     * - Status of payment.
     */
    status: string;
    /**
     * - Payment method
     */
    method: string;
    /**
     * - Unique fynd transaction id
     */
    merchant_transaction_id: string;
};
/** @returns {PaymentStatusUpdateDetails} */
declare function PaymentStatusUpdateDetails(): PaymentStatusUpdateDetails;
type PaymentStatusUpdateDetails = {
    /**
     * - Redirect url
     */
    redirect_url?: string;
    /**
     * - Response is successful or not.
     */
    retry: boolean;
    /**
     * - Response is successful or not
     */
    success?: boolean;
    /**
     * - Payment status
     */
    status: string;
    /**
     * - Payment gateway name
     */
    aggregator_name: string;
};
/** @returns {ResendOrCancelPaymentCreation} */
declare function ResendOrCancelPaymentCreation(): ResendOrCancelPaymentCreation;
type ResendOrCancelPaymentCreation = {
    /**
     * - Unique order id
     */
    order_id: string;
    /**
     * - EDC machine Unique Identifier
     */
    device_id?: string;
    /**
     * - Either resend or cancel
     */
    request_type: string;
};
/** @returns {LinkStatus} */
declare function LinkStatus(): LinkStatus;
type LinkStatus = {
    /**
     * - Link action status
     */
    status: string;
    /**
     * - Message
     */
    message: string;
    /**
     * - This key specifies payment done
     * status of payment link.
     */
    is_payment_done?: boolean;
};
/** @returns {ResendOrCancelPaymentDetails} */
declare function ResendOrCancelPaymentDetails(): ResendOrCancelPaymentDetails;
type ResendOrCancelPaymentDetails = {
    data: LinkStatus;
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {PaymentStatusBulkHandlerCreation} */
declare function PaymentStatusBulkHandlerCreation(): PaymentStatusBulkHandlerCreation;
type PaymentStatusBulkHandlerCreation = {
    /**
     * - List of order ids
     */
    merchant_order_id: string[];
};
/** @returns {PaymentObjectList} */
declare function PaymentObjectList(): PaymentObjectList;
type PaymentObjectList = {
    user_object: any;
    modified_on: string;
    collected_by: string;
    created_on: string;
    refund_object?: any;
    id: string;
    payment_id?: string;
    currency: string;
    current_status: string;
    aggregator_payment_object?: any;
    payment_mode: string;
    refunded_by: string;
    amount_in_paisa: string;
    payment_gateway: string;
    company_id: string;
    payment_mode_identifier: string;
    application_id: string;
    all_status: string[];
};
/** @returns {PaymentStatusObject} */
declare function PaymentStatusObject(): PaymentStatusObject;
type PaymentStatusObject = {
    merchant_order_id: string;
    payment_object_list?: PaymentObjectList[];
};
/** @returns {PaymentStatusBulkHandlerDetails} */
declare function PaymentStatusBulkHandlerDetails(): PaymentStatusBulkHandlerDetails;
type PaymentStatusBulkHandlerDetails = {
    count?: number;
    data?: PaymentStatusObject[];
    success: string;
    error?: string;
    status: number;
};
/** @returns {GetOauthUrlDetails} */
declare function GetOauthUrlDetails(): GetOauthUrlDetails;
type GetOauthUrlDetails = {
    /**
     * - The url to call for authenticating
     */
    url: string;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {RevokeOAuthToken} */
declare function RevokeOAuthToken(): RevokeOAuthToken;
type RevokeOAuthToken = {
    /**
     * - The confirmation message of the token revoke.
     */
    message: string;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {RepaymentRequestDetails} */
declare function RepaymentRequestDetails(): RepaymentRequestDetails;
type RepaymentRequestDetails = {
    /**
     * - Purchase Shipment Id
     */
    fwd_shipment_id: string;
    /**
     * - Name of Payment Gateway
     */
    aggregator: string;
    /**
     * - Status
     */
    current_status: string;
    /**
     * - Merchant's Order Id
     */
    merchant_order_id: string;
    /**
     * - Amount to paid back
     */
    amount: number;
    /**
     * - Payment Mode
     */
    payment_mode: string;
    /**
     * - Outstanding details ID
     */
    outstanding_details_id: number;
    /**
     * - Unique Id for the transaction
     */
    aggregator_transaction_id: string;
    /**
     * - Id of payment gateway
     */
    aggregator_order_id: string;
    /**
     * - Payment Mode Id
     */
    payment_mode_identifier: string;
};
/** @returns {RepaymentDetailsSerialiserPayAll} */
declare function RepaymentDetailsSerialiserPayAll(): RepaymentDetailsSerialiserPayAll;
type RepaymentDetailsSerialiserPayAll = {
    /**
     * - Total amount
     */
    total_amount: number;
    /**
     * - Order id created in extension
     */
    extension_order_id: string;
    /**
     * - Unique Id for the transaction
     */
    aggregator_transaction_id: string;
    /**
     * - Id of payment gateway
     */
    aggregator_order_id: string;
    shipment_details?: RepaymentRequestDetails[];
};
/** @returns {RepaymentDetails} */
declare function RepaymentDetails(): RepaymentDetails;
type RepaymentDetails = {
    data: any;
    /**
     * - Success/Failure of the transaction
     */
    success: boolean;
};
/** @returns {MerchantOnBoardingCreation} */
declare function MerchantOnBoardingCreation(): MerchantOnBoardingCreation;
type MerchantOnBoardingCreation = {
    /**
     * - Merchant ID at Ajiodhan's end
     */
    credit_line_id: string;
    /**
     * - Payment aggregator name
     */
    aggregator: string;
    /**
     * - Application id
     */
    app_id: string;
    /**
     * - Deadlock or Grimlock user id
     */
    user_id: string;
    /**
     * - Status
     */
    status: string;
};
/** @returns {MerchantOnBoardingDetails} */
declare function MerchantOnBoardingDetails(): MerchantOnBoardingDetails;
type MerchantOnBoardingDetails = {
    data: any;
    /**
     * - Success/Failure of the transaction
     */
    success: boolean;
};
/** @returns {ValidateCustomerCreation} */
declare function ValidateCustomerCreation(): ValidateCustomerCreation;
type ValidateCustomerCreation = {
    /**
     * - User mobile number without country code.
     */
    phone_number: string;
    /**
     * - Payment gateway name in camel case i.e Simpl, Rupifi
     */
    aggregator: string;
    /**
     * - Hashed payload string.
     */
    payload?: string;
    /**
     * - Extra meta fields.
     */
    delivery_address?: any;
    /**
     * - Payable amount in paise
     */
    transaction_amount_in_paise: number;
    /**
     * - Extra meta fields.
     */
    order_items?: any[];
    /**
     * - Extra meta fields.
     */
    merchant_params?: any;
    /**
     * - Extra meta fields.
     */
    billing_address?: any;
};
/** @returns {ValidateCustomerDetails} */
declare function ValidateCustomerDetails(): ValidateCustomerDetails;
type ValidateCustomerDetails = {
    /**
     * - Error or success message.
     */
    message: string;
    /**
     * - Payment gateway response data
     */
    data?: any;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {GetPaymentLinkDetails} */
declare function GetPaymentLinkDetails(): GetPaymentLinkDetails;
type GetPaymentLinkDetails = {
    /**
     * - Message
     */
    message: string;
    /**
     * - HTTP status code
     */
    status_code: number;
    /**
     * - Total value of order
     */
    amount?: number;
    /**
     * - Merchant name
     */
    merchant_name?: string;
    /**
     * - Url of payment link
     */
    payment_link_url?: string;
    /**
     * - Status of payment link
     */
    payment_link_current_status?: string;
    /**
     * - Merchant order id
     */
    external_order_id?: string;
    /**
     * - Polling request timeout, perform
     * polling till timeout elapsed or payment status is success/failure
     */
    polling_timeout?: number;
    /**
     * - Successful or failure
     */
    success: boolean;
};
/** @returns {ErrorDescription} */
declare function ErrorDescription(): ErrorDescription;
type ErrorDescription = {
    /**
     * - Message
     */
    msg?: string;
    /**
     * - Payment transaction id
     */
    payment_transaction_id?: string;
    /**
     * - Payment link id is valid or not
     */
    invalid_id?: boolean;
    /**
     * - Order id
     */
    merchant_order_id?: string;
    /**
     * - Name of merchant that created payment link
     */
    merchant_name?: string;
    /**
     * - Amount paid
     */
    amount?: number;
    /**
     * - Payment link expired or not
     */
    expired?: boolean;
    /**
     * - Payment link is cancelled or not
     */
    cancelled?: boolean;
};
/** @returns {ErrorDetails} */
declare function ErrorDetails(): ErrorDetails;
type ErrorDetails = {
    /**
     * - HTTP status code
     */
    status_code: number;
    error?: ErrorDescription;
    /**
     * - Message
     */
    message: string;
    /**
     * - Successful or failure
     */
    success: boolean;
};
/** @returns {CreatePaymentLinkMeta} */
declare function CreatePaymentLinkMeta(): CreatePaymentLinkMeta;
type CreatePaymentLinkMeta = {
    /**
     * - Cart id for which payment link needs to be generated.
     */
    cart_id: string;
    /**
     * - Checkout mode for the payment link i.e. self
     */
    checkout_mode: string;
    /**
     * - Payment link amount to be paid by the customer
     */
    amount: string;
    /**
     * - Assigned card id against which payment
     * to be done via payment link
     */
    assign_card_id?: string;
};
/** @returns {CreatePaymentLinkCreation} */
declare function CreatePaymentLinkCreation(): CreatePaymentLinkCreation;
type CreatePaymentLinkCreation = {
    /**
     * - Email to which the payment link is to be sent
     */
    email: string;
    /**
     * - Total value of order
     */
    amount: number;
    /**
     * - Mobile number to which the payment link is
     * to be sent
     */
    mobile_number: string;
    /**
     * - Phone country code for complete mobile number
     */
    country_phone_code?: string;
    /**
     * - Merchant order id
     */
    description?: string;
    meta: CreatePaymentLinkMeta;
    /**
     * - Merchant order id
     */
    external_order_id: string;
    /**
     * - URL to which the user will be
     * redirected after a successful payment.
     */
    success_redirection_url?: string;
    /**
     * - URL to which the user will be
     * redirected if the payment fails.
     */
    failure_redirection_url?: string;
    /**
     * - Flag indicating whether to send
     * communications (e.g., SMS or email) for the payment link
     */
    send_communication?: boolean;
};
/** @returns {CreatePaymentLinkDetails} */
declare function CreatePaymentLinkDetails(): CreatePaymentLinkDetails;
type CreatePaymentLinkDetails = {
    /**
     * - Message
     */
    message: string;
    /**
     * - HTTP status code
     */
    status_code: number;
    /**
     * - Url of payment link
     */
    payment_link_url?: string;
    /**
     * - Polling request timeout
     */
    polling_timeout?: number;
    /**
     * - Successful or failure
     */
    success: boolean;
    /**
     * - Unique id of payment link
     */
    payment_link_id?: string;
};
/** @returns {PollingPaymentLinkDetails} */
declare function PollingPaymentLinkDetails(): PollingPaymentLinkDetails;
type PollingPaymentLinkDetails = {
    /**
     * - Message
     */
    message?: string;
    /**
     * - HTTP status code
     */
    http_status?: number;
    /**
     * - HTTP status code
     */
    status_code?: number;
    /**
     * - Url to redirect to
     */
    redirect_url?: string;
    /**
     * - Amount
     */
    amount?: number;
    /**
     * - Fynd order id
     */
    order_id?: string;
    /**
     * - Successful or failure
     */
    success?: boolean;
    /**
     * - Payment link id
     */
    payment_link_id?: string;
    /**
     * - Status of payment link
     */
    status?: string;
    /**
     * - Aggregator name
     */
    aggregator_name?: string;
};
/** @returns {CancelOrResendPaymentLinkCreation} */
declare function CancelOrResendPaymentLinkCreation(): CancelOrResendPaymentLinkCreation;
type CancelOrResendPaymentLinkCreation = {
    /**
     * - Unique id of payment link
     */
    payment_link_id: string;
};
/** @returns {ResendPaymentLinkDetails} */
declare function ResendPaymentLinkDetails(): ResendPaymentLinkDetails;
type ResendPaymentLinkDetails = {
    /**
     * - HTTP status code
     */
    status_code: number;
    /**
     * - Message
     */
    message: string;
    /**
     * - Polling request timeout
     */
    polling_timeout?: number;
    /**
     * - Successful or failure
     */
    success: boolean;
};
/** @returns {CancelPaymentLinkDetails} */
declare function CancelPaymentLinkDetails(): CancelPaymentLinkDetails;
type CancelPaymentLinkDetails = {
    /**
     * - HTTP status code
     */
    status_code: number;
    /**
     * - Message
     */
    message: string;
    /**
     * - Successful or failure
     */
    success: boolean;
};
/** @returns {Code} */
declare function Code(): Code;
type Code = {
    /**
     * - Name of payment method
     */
    name: string;
    /**
     * - Merchant Payment Code
     */
    merchant_code: string;
    /**
     * - Payment Method Code
     */
    code: string;
};
/** @returns {PaymentCode} */
declare function PaymentCode(): PaymentCode;
type PaymentCode = {
    /**
     * - Payment networks
     */
    networks: string;
    codes: Code;
    /**
     * - Name of payment name
     */
    name: string;
    /**
     * - Type of payment mode
     */
    types: string;
};
/** @returns {GetPaymentCode} */
declare function GetPaymentCode(): GetPaymentCode;
type GetPaymentCode = {
    method_code: PaymentCode;
};
/** @returns {GetPaymentCodeDetails} */
declare function GetPaymentCodeDetails(): GetPaymentCodeDetails;
type GetPaymentCodeDetails = {
    data: GetPaymentCode;
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {PlatformPaymentModeDetails} */
declare function PlatformPaymentModeDetails(): PlatformPaymentModeDetails;
type PlatformPaymentModeDetails = {
    /**
     * - Message
     */
    message?: string;
    /**
     * - List of all aggregator and payment mode details.
     */
    items?: any[];
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {MerchnatPaymentModeCreation} */
declare function MerchnatPaymentModeCreation(): MerchnatPaymentModeCreation;
type MerchnatPaymentModeCreation = {
    /**
     * - Details to be updated for online payment configuration.
     */
    offline?: any;
    /**
     * - Details to be updated for offline payment configuration.
     */
    online?: any;
};
/** @returns {SkuDetails} */
declare function SkuDetails(): SkuDetails;
type SkuDetails = {
    /**
     * - SKU identifier of the offer
     */
    identifier?: string;
    /**
     * - Unique SKU identifier (example: GTIN, variant ID)
     */
    sku_id?: string;
    /**
     * - Display name of the SKU
     */
    sku_name?: string;
};
/** @returns {AppliedOffer} */
declare function AppliedOffer(): AppliedOffer;
type AppliedOffer = {
    /**
     * - Whether the offer is a mop or not. MOP is a
     * discount that is applied on the total order value.
     */
    is_mop?: boolean;
    /**
     * - Type of offer. It can be either a bank or
     * brand offer.
     */
    offer_type?: string;
    /**
     * - Unique identifier for the offer.
     */
    offer_id?: string;
    /**
     * - Description of the offer.
     */
    description?: string;
    /**
     * - Amount of the offer in paise. (Example: ₹1 = 100 paise)
     */
    amount?: number;
    /**
     * - Extra meta data specific to extension
     */
    meta?: any;
    /**
     * - List of sku details for which the
     * offer is applicable. This is applicable only for brand offers.
     */
    sku_details?: SkuDetails[];
};
/** @returns {OrderDetail} */
declare function OrderDetail(): OrderDetail;
type OrderDetail = {
    /**
     * - Global identifier of the entity (e.g. order, cart
     * etc.) against which payment_session was initiated. This is generated by
     * Fynd payments platform and is unique.
     */
    gid: string;
    /**
     * - Amount paid.
     */
    amount: number;
    /**
     * - Order status created by payment gateway aggregator.
     */
    status: string;
    /**
     * - Currency of the payment.
     */
    currency: string;
    /**
     * - Aggregator order details
     * generated by the payment gateway.
     */
    aggregator_order_details: any;
    /**
     * - Name of the payment gateway aggregator.
     */
    aggregator: string;
    /**
     * - List of offers applied on the order.
     */
    applied_offers?: AppliedOffer[];
};
/** @returns {AddressDetail} */
declare function AddressDetail(): AddressDetail;
type AddressDetail = {
    /**
     * - Google map point of location
     */
    google_map_point?: any;
    /**
     * - Landmark
     */
    landmark?: string;
    /**
     * - Phone number
     */
    phone: string;
    /**
     * - Country's code name e.g. `IN`, `GB`
     */
    country_iso_code: string;
    /**
     * - Customer pin/zip code
     */
    area_code: string;
    /**
     * - Country name
     */
    country: string;
    /**
     * - Address expiry timestamp
     */
    expire_at?: string;
    /**
     * - Location latitude and logitude
     */
    geo_location?: any;
    /**
     * - State of the customer
     */
    state: string;
    /**
     * - Area details
     */
    area: string;
    /**
     * - Unique address id generated by Fynd platform
     */
    g_address_id: string;
    /**
     * - Area slug code, use pin or zip code if
     * not available
     */
    area_code_slug: string;
    /**
     * - Country's phone code
     */
    country_phone_code: string;
    /**
     * - Customer name
     */
    name: string;
    /**
     * - Address type e.g. home, office
     */
    address_type?: string;
    /**
     * - Address details
     */
    address: string;
    /**
     * - Customer email
     */
    email?: string;
    /**
     * - City name
     */
    city: string;
    /**
     * - Optional address tag
     */
    tags?: any[];
};
/** @returns {ReasonDetail} */
declare function ReasonDetail(): ReasonDetail;
type ReasonDetail = {
    /**
     * - The code indicating the type of reason.
     */
    code?: string;
    /**
     * - A detailed description of the payment
     * reason or error.
     */
    description?: string;
};
/** @returns {PaymentSessionDetail} */
declare function PaymentSessionDetail(): PaymentSessionDetail;
type PaymentSessionDetail = {
    /**
     * - Unique transaction id generated by payment gateway
     */
    payment_id: string;
    /**
     * - Test or live, test mode uses test credentials so
     * that actual payment is not created.
     */
    mode: string;
    /**
     * - Amount paid.
     */
    amount: number;
    /**
     * - Success url sent by Fynd platform at the
     * time of payment creation
     */
    success_url: string;
    /**
     * - Shipping address
     */
    shipping_address?: AddressDetail;
    /**
     * - Amount which is captured or credited to
     * merchant account
     */
    amount_captured: number;
    /**
     * - Amount refunded or credited back to
     * customer accout
     */
    amount_refunded?: number;
    /**
     * - Unique customer id generated by
     * payment gateway, not required for standard checkout.
     */
    aggregator_customer_id?: string;
    /**
     * - Cancel url sent by Fynd platform at the time
     * of payment creation
     */
    cancel_url: string;
    /**
     * - Method of payment
     */
    payment_methods: any[];
    /**
     * - Timestamp in epoch
     */
    created?: string;
    /**
     * - Global user identifier - unique user id
     * generated by Fynd platform
     */
    g_user_id: string;
    /**
     * - Currency of the payment.
     */
    currency: string;
    /**
     * - Merchant's locale
     */
    merchant_locale?: string;
    /**
     * - User's locale
     */
    locale?: string;
    /**
     * - Unique order id or payment request
     * id generated by payment gateway
     */
    aggregator_order_id: string;
    /**
     * - Global identifier of the entity (e.g. order, cart
     * etc.) against which payment_session was initiated. This is generated by
     * Fynd payments platform and is unique.
     */
    gid: string;
    /**
     * - Optional kind of purchase or payment - one time
     * payment (sale) or subcription. defaults to sale.
     */
    kind?: string;
    /**
     * - Billing address
     */
    billing_address?: AddressDetail;
    /**
     * - Whether the payment is captured (credited to
     * merchant account) by payment gateway.
     */
    captured?: boolean;
    /**
     * - Extra meta data specific to extension
     */
    meta?: any;
    /**
     * - Status of the payment
     */
    status: string;
    reason?: ReasonDetail;
};
/** @returns {PaymentSessionCreation} */
declare function PaymentSessionCreation(): PaymentSessionCreation;
type PaymentSessionCreation = {
    /**
     * - Extra meta data specific to extensions
     */
    meta?: any;
    /**
     * - Global identifier of the entity (e.g. order, cart
     * etc.) against which payment_session was initiated. This is generated by
     * Fynd payments platform and is unique.
     */
    gid: string;
    /**
     * - The details of the order.
     */
    order_details: OrderDetail;
    /**
     * - Status of the payment.
     */
    status: string;
    /**
     * - Currency of the payment.
     */
    currency: string;
    /**
     * - The payment details with
     * the schema `PaymentSessionDetail`.
     */
    payment_details: PaymentSessionDetail[];
    /**
     * - Amount paid.
     */
    total_amount: number;
    /**
     * - Checksum to verify the payload
     */
    checksum: string;
    /**
     * - Source of payment update session
     */
    source?: string;
};
/** @returns {PaymentSessionPutDetails} */
declare function PaymentSessionPutDetails(): PaymentSessionPutDetails;
type PaymentSessionPutDetails = {
    /**
     * - Global identifier of the entity (e.g. order, cart
     * etc.) against which payment_session was initiated. This is generated by
     * Fynd payments platform and is unique.
     */
    gid: string;
    /**
     * - Platform transaction details.
     */
    platform_transaction_details: any[];
    /**
     * - Status of the payment.
     */
    status: string;
    /**
     * - Currency of the payment.
     */
    currency: string;
    /**
     * - Amount paid.
     */
    total_amount: number;
};
/** @returns {RefundSessionDetail} */
declare function RefundSessionDetail(): RefundSessionDetail;
type RefundSessionDetail = {
    /**
     * - Unique refund utr generated by payment gateway.
     */
    refund_utr?: string;
    /**
     * - Refund request id, unique id generated by Fynd platform
     */
    request_id: string;
    /**
     * - Unique payment id generated by payment gateway.
     */
    payment_id: string;
    /**
     * - Amount refunded.
     */
    amount: number;
    /**
     * - Reason for refund, optional
     */
    reason?: string;
    /**
     * - Status of the refund.
     */
    status: string;
    /**
     * - Timestamp in epoch.
     */
    created: string;
    /**
     * - Description in case of
     * reversal of payment.
     */
    source_transfer_reversal?: string;
    /**
     * - Unique receipt for refund, generated by
     * payment gateway, if not available can be utr.
     */
    receipt_number?: string;
    /**
     * - Unique identifier for refund, generated
     * by payment gateway.
     */
    pg_refund_id?: string;
    /**
     * - Currency of the payment.
     */
    currency: string;
    /**
     * - Description in case of reversal of payment.
     */
    transfer_reversal?: string;
    /**
     * - Balance transaction.
     */
    balance_transaction?: string;
};
/** @returns {RefundSessionCreation} */
declare function RefundSessionCreation(): RefundSessionCreation;
type RefundSessionCreation = {
    /**
     * - Meta
     */
    meta?: any;
    /**
     * - Global identifier of the entity (e.g. order, cart
     * etc.) against which payment_session was initiated. This is generated by
     * Fynd payments platform and is unique.
     */
    gid: string;
    /**
     * - The status of the refund.
     */
    status: string;
    /**
     * - The currency of the payment.
     */
    currency: string;
    /**
     * - Details of the payment
     */
    payment_details: PaymentSessionDetail;
    /**
     * - The total amount refunded.
     */
    total_amount: number;
    /**
     * - Details of the refund
     */
    refund_details: RefundSessionDetail[];
    error?: ErrorDescription;
    /**
     * - The status of the refund.
     */
    message?: string;
    /**
     * - Checksum to verify payload
     */
    checksum: string;
};
/** @returns {RefundSessionDetails} */
declare function RefundSessionDetails(): RefundSessionDetails;
type RefundSessionDetails = {
    /**
     * - Global identifier of the entity (e.g. order, cart
     * etc.) against which payment_session was initiated. This is generated by
     * Fynd payments platform and is unique.
     */
    gid: string;
    /**
     * - The status of the refund.
     */
    status: string;
    /**
     * - The currency of the payment.
     */
    currency: string;
    /**
     * - Details of the refund
     */
    platform_refund_details: any[];
    /**
     * - The total amount refunded.
     */
    total_refund_amount: number;
};
/** @returns {PaymentDetails} */
declare function PaymentDetails(): PaymentDetails;
type PaymentDetails = {
    /**
     * - List of payment methods
     */
    payment_methods: any[];
    /**
     * - Global identifier of the entity (e.g. order, cart
     * etc.) against which payment_session was initiated. This is generated by
     * Fynd payments platform and is unique.
     */
    gid: string;
    /**
     * - Already refunded amount for the given
     * gid (global identifier for the order).
     */
    amount_refunded?: number;
    /**
     * - Currency of the payment.
     */
    currency: string;
    /**
     * - Test or live, test mode uses test credentials so
     * that actual payment is not created.
     */
    mode: string;
    /**
     * - Merchant's locale (language) i.e. en
     */
    merchant_locale?: string;
    /**
     * - Extra meta data related to the payment methods
     */
    meta?: any;
    /**
     * - Optional kind of purchase/payment - one time
     * payment (sale) or subcription. defaults to sale.
     */
    kind?: string;
    /**
     * - Success url sent by Fynd platform at the
     * time of payment creation
     */
    success_url?: string;
    /**
     * - Status of the payment
     */
    status: string;
    /**
     * - Whether the payment is captured (credited to
     * merchant account) by payment gateway.
     */
    captured?: boolean;
    /**
     * - Unique transaction id generated by payment gateway
     */
    payment_id?: string;
    /**
     * - Global user identifier - unique user id
     * generated by Fynd platform
     */
    g_user_id: string;
    /**
     * - User's locale (language), i.e. en
     */
    locale?: string;
    /**
     * - Cancel url sent by Fynd platform at the
     * time of payment creation, redirect on payment cancellation
     */
    cancel_url?: string;
    /**
     * - Timestamp in epoch
     */
    created?: string;
    /**
     * - Amount which is captured or credited to
     * merchant account
     */
    amount_captured: number;
    /**
     * - Amount paid for the order.
     */
    amount: number;
    /**
     * - Unique customer id generated by
     * payment gateway, not required for standard checkout.
     */
    aggregator_customer_id?: string;
    /**
     * - Unique order id or payment request
     * id generated by payment gateway
     */
    aggregator_order_id?: string;
};
/** @returns {CartDetails} */
declare function CartDetails(): CartDetails;
type CartDetails = {
    /**
     * - Items that are added in cart
     */
    items: any;
    /**
     * - List of articles that are added in cart
     */
    articles: any[];
    /**
     * - Total cart value i.e. amount to be paid
     */
    cart_value: number;
    /**
     * - Total number of items in cart
     */
    total_quantity?: number;
    /**
     * - This field is used to add and
     * retrieve custom data fields to cart items.
     */
    custom_cart_meta?: any;
};
/** @returns {RefundDetails} */
declare function RefundDetails(): RefundDetails;
type RefundDetails = {
    /**
     * - Refunded amount
     */
    amount: number;
    /**
     * - The currency of the payment.
     */
    currency: string;
    /**
     * - Refund request id, unique id generated by Fynd platform
     */
    request_id: string;
    /**
     * - The status of the refund.
     */
    status: string;
    /**
     * - Timestamp in epoch.
     */
    created: string;
    /**
     * - Unique refund utr generated by payment gateway.
     */
    refund_utr: string;
};
/** @returns {PaymentSessionFetchDetails} */
declare function PaymentSessionFetchDetails(): PaymentSessionFetchDetails;
type PaymentSessionFetchDetails = {
    /**
     * - Object of payment details
     */
    payment_details: any;
    /**
     * - The currency of the payment.
     */
    currency?: string;
    /**
     * - The status of the payment session.
     */
    status: string;
    /**
     * - Total amount to be paid
     */
    total_amount: number;
    /**
     * - Global identifier of the entity (e.g. order, cart
     * etc.) against which payment_session was initiated. This is generated by
     * Fynd payments platform and is unique.
     */
    gid: string;
    cart_details?: CartDetails;
    /**
     * - Object of refund details
     */
    refund_details: RefundDetails[];
};
/** @returns {RefundSourcesPriority} */
declare function RefundSourcesPriority(): RefundSourcesPriority;
type RefundSourcesPriority = {
    /**
     * - Description of refund source
     */
    description: string;
    /**
     * - Priority of refund source, 0 being highest
     */
    priority: number;
    /**
     * - Source of refund
     */
    source: string;
};
/** @returns {RefundPriorityDetails} */
declare function RefundPriorityDetails(): RefundPriorityDetails;
type RefundPriorityDetails = {
    /**
     * - Configuration for merchant or customer
     */
    configuration: string;
    /**
     * - Success
     */
    success: boolean;
    /**
     * - Apportion refund to multiple sources
     */
    apportion: boolean;
    /**
     * - Refund sources priority
     */
    refund_sources_priority: RefundSourcesPriority[];
    /**
     * - Message
     */
    message?: string;
};
/** @returns {RefundPriorityCreation} */
declare function RefundPriorityCreation(): RefundPriorityCreation;
type RefundPriorityCreation = {
    /**
     * - Apportion refund to multiple sources
     */
    apportion: boolean;
    /**
     * - Refund sources priority
     */
    refund_sources_priority: RefundSourcesPriority[];
};
/** @returns {MerchantPaymentModeCreation} */
declare function MerchantPaymentModeCreation(): MerchantPaymentModeCreation;
type MerchantPaymentModeCreation = {
    /**
     * - Business unit
     */
    business_unit: string;
    /**
     * - List of item details with respect to payment_mode
     */
    items: any[];
    /**
     * - List of devices and its activation status
     */
    device: any;
};
/** @returns {FromConfig} */
declare function FromConfig(): FromConfig;
type FromConfig = {
    /**
     * - Device name
     */
    device: string;
    /**
     * - Business unit name
     */
    business_unit: string;
};
/** @returns {ToConfig} */
declare function ToConfig(): ToConfig;
type ToConfig = {
    /**
     * - Device name to copy the config to
     */
    device: any[];
    /**
     * - Business unit name
     */
    business_unit: string;
};
/** @returns {PlatformPaymentModeCopyConfigCreation} */
declare function PlatformPaymentModeCopyConfigCreation(): PlatformPaymentModeCopyConfigCreation;
type PlatformPaymentModeCopyConfigCreation = {
    from_config: FromConfig;
    to_config: ToConfig;
};
/** @returns {PaymentMethodsMetaOrder} */
declare function PaymentMethodsMetaOrder(): PaymentMethodsMetaOrder;
type PaymentMethodsMetaOrder = {
    /**
     * - Payment identifier
     */
    payment_identifier: string;
    /**
     * - Merchant code
     */
    merchant_code: string;
    /**
     * - Payment gateway name
     */
    payment_gateway: string;
};
/** @returns {PaymentOrderMethods} */
declare function PaymentOrderMethods(): PaymentOrderMethods;
type PaymentOrderMethods = {
    /**
     * - Amount to be collected
     */
    amount: number;
    /**
     * - Payment type i.e. Required / Blocked
     */
    payment?: string;
    /**
     * - Payment mode
     */
    mode: string;
    meta: PaymentMethodsMetaOrder;
    /**
     * - Payment mode name
     */
    name: string;
};
/** @returns {PaymentOrderCreation} */
declare function PaymentOrderCreation(): PaymentOrderCreation;
type PaymentOrderCreation = {
    /**
     * - Order id
     */
    order_id: string;
    payment_methods?: PaymentOrderMethods[];
    /**
     * - Shipment_id
     */
    shipment_id?: string;
};
/** @returns {PaymentOrderData} */
declare function PaymentOrderData(): PaymentOrderData;
type PaymentOrderData = {
    /**
     * - Mobile number
     */
    contact?: string;
    /**
     * - Aggregator name
     */
    aggregator?: string;
    /**
     * - Amount
     */
    amount?: number;
    /**
     * - Aggregator customer id
     */
    customer_id?: string;
    /**
     * - Currency
     */
    currency?: string;
    /**
     * - Email
     */
    email?: string;
    /**
     * - Callback url for aggregator
     */
    callback_url?: string;
    /**
     * - Aggregator order id
     */
    order_id?: string;
    /**
     * - Method
     */
    method?: string;
    /**
     * - Merchant order id
     */
    merchant_order_id?: string;
};
/** @returns {PaymentOrderDetails} */
declare function PaymentOrderDetails(): PaymentOrderDetails;
type PaymentOrderDetails = {
    /**
     * - Message
     */
    message: string;
    /**
     * - Successful or failure
     */
    success: boolean;
    /**
     * - Payment confirm url for aggregator
     */
    payment_confirm_url?: string;
    /**
     * - Callback url for aggregator
     */
    callback_url?: string;
    /**
     * - HTTP status code
     */
    status_code: number;
    /**
     * - Merchant order id
     */
    order_id?: string;
    data?: PaymentOrderData;
};
/** @returns {AggregatorVersionItemSchema} */
declare function AggregatorVersionItemSchema(): AggregatorVersionItemSchema;
type AggregatorVersionItemSchema = {
    is_equal_to?: string;
    is_less_than?: string;
    is_greater_than?: string;
};
/** @returns {AggregatorVersionDetails} */
declare function AggregatorVersionDetails(): AggregatorVersionDetails;
type AggregatorVersionDetails = {
    /**
     * - Message
     */
    message: string;
    /**
     * - Successful or failure
     */
    success: boolean;
    items?: AggregatorVersionItemSchema;
};
/** @returns {AggregatorVersionRequestSchema} */
declare function AggregatorVersionRequestSchema(): AggregatorVersionRequestSchema;
type AggregatorVersionRequestSchema = {
    is_equal_to?: string;
    is_less_than?: string;
    is_greater_than?: string;
};
/** @returns {PatchAggregatorControl} */
declare function PatchAggregatorControl(): PatchAggregatorControl;
type PatchAggregatorControl = {
    /**
     * - Business unit
     */
    business_unit?: string;
    /**
     * - List of item details with respect to payment_mode
     */
    items?: any[];
    /**
     * - Device name
     */
    device?: string;
    version?: AggregatorVersionRequestSchema;
};
/** @returns {PaymentModeCustomConfigSchema} */
declare function PaymentModeCustomConfigSchema(): PaymentModeCustomConfigSchema;
type PaymentModeCustomConfigSchema = {
    /**
     * - The display name of the store.
     */
    display_name: string;
    /**
     * - The business unit to which the store belongs.
     */
    business_unit: string;
    custom_config: PaymentCustomConfigDetailsSchema;
};
/** @returns {PaymentCustomConfigDetailsSchema} */
declare function PaymentCustomConfigDetailsSchema(): PaymentCustomConfigDetailsSchema;
type PaymentCustomConfigDetailsSchema = {
    customer: PaymentCustomConfigCustomerSchema;
    payment_mode: PaymentCustomConfigModeSchema;
    /**
     * - The minimum order value for the store
     */
    min_order_value: number;
};
/** @returns {PaymentCustomConfigCustomerSchema} */
declare function PaymentCustomConfigCustomerSchema(): PaymentCustomConfigCustomerSchema;
type PaymentCustomConfigCustomerSchema = {
    /**
     * - Customer restriction type.
     */
    restriction: string;
    /**
     * - Customer groups.
     */
    groups?: number[];
    /**
     * - Customer types.
     */
    types?: string[];
};
/** @returns {PaymentCustomConfigModeSchema} */
declare function PaymentCustomConfigModeSchema(): PaymentCustomConfigModeSchema;
type PaymentCustomConfigModeSchema = {
    /**
     * - Indicates whether the payment mode is available.
     */
    available: boolean;
    /**
     * - Payment modes available for pre-order.
     */
    pre_order?: string[];
    /**
     * - Payment modes available for post-order.
     */
    post_order?: string[];
};
/** @returns {PaymentCustomConfigDetailsRequestSchema} */
declare function PaymentCustomConfigDetailsRequestSchema(): PaymentCustomConfigDetailsRequestSchema;
type PaymentCustomConfigDetailsRequestSchema = {
    customer: PaymentCustomConfigCustomerRequestSchema;
    payment_mode: PaymentCustomConfigModeSchema;
    /**
     * - The minimum order value for the store
     */
    min_order_value: number;
};
/** @returns {PaymentCustomConfigCustomerRequestSchema} */
declare function PaymentCustomConfigCustomerRequestSchema(): PaymentCustomConfigCustomerRequestSchema;
type PaymentCustomConfigCustomerRequestSchema = {
    /**
     * - Customer restriction type.
     */
    restriction: string;
    /**
     * - Customer groups.
     */
    groups?: number[];
};
/** @returns {PaymentCustomConfigRequestSchema} */
declare function PaymentCustomConfigRequestSchema(): PaymentCustomConfigRequestSchema;
type PaymentCustomConfigRequestSchema = {
    /**
     * - The business unit to which the store belongs.
     */
    business_unit: string;
    items: PaymentCustomConfigDetailsRequestSchema[];
};
/** @returns {PaymentCustomConfigResponseSchema} */
declare function PaymentCustomConfigResponseSchema(): PaymentCustomConfigResponseSchema;
type PaymentCustomConfigResponseSchema = {
    success: boolean;
    message: string;
    items: PaymentModeCustomConfigSchema[];
};
/** @returns {CustomerValidationSchema} */
declare function CustomerValidationSchema(): CustomerValidationSchema;
type CustomerValidationSchema = {
    /**
     * - Aggregator name of the payment gateway.
     */
    aggregator: string;
    /**
     * - Payable amount
     */
    transaction_amount: number;
    /**
     * - Unique identifier for the shopping cart.
     */
    cart_id?: string;
    /**
     * - The unique identifier of the user.
     */
    user_id?: string;
};
/** @returns {UserCreditSchema} */
declare function UserCreditSchema(): UserCreditSchema;
type UserCreditSchema = {
    /**
     * - The monetary value, which can represent available
     * balance, redeemed balance, or hold amount, depending on the context.
     */
    amount: number;
    /**
     * - The currency code (e.g., INR, USD).
     */
    currency: string;
    /**
     * - A unique identifier for the payment transaction.
     */
    unique_id?: string;
};
/** @returns {CreditAccountSummary} */
declare function CreditAccountSummary(): CreditAccountSummary;
type CreditAccountSummary = {
    /**
     * - Unique identifier associated with the
     * customer's account
     */
    account_id: string;
    /**
     * - Current state of the account, indicating whether
     * it is ACTIVE, INACTIVE, or UNREGISTERED.
     */
    status: string;
    redeemable_balance?: UserCreditSchema;
    available_balance?: UserCreditSchema;
    amount_on_hold?: UserCreditSchema[];
};
/** @returns {ValidateCustomerCreditSchema} */
declare function ValidateCustomerCreditSchema(): ValidateCustomerCreditSchema;
type ValidateCustomerCreditSchema = {
    /**
     * - Successful or failure of API
     */
    success: boolean;
    /**
     * - The customer is eligible to make a transaction or not
     */
    is_eligible: boolean;
    /**
     * - Credit is applied to the user's account or not
     */
    is_applied?: boolean;
    /**
     * - Detailed message about the user credt eligibility.
     */
    message: string;
    /**
     * - Unique identifier for the shopping cart.
     */
    cart_id?: string;
    account?: CreditAccountSummary;
};
/**
 * Enum: OrderingSource Used By: Payment
 *
 * @returns {OrderingSource}
 */
declare function OrderingSource(): OrderingSource;
type OrderingSource = "storefront" | "store_os_pos" | "kiosk" | "scan_go" | "smart_trolley" | "gofynd" | "uniket" | "marketplace" | "social_commerce" | "ondc" | "nexus" | "nykaa_fashion" | "etsy" | "vuivui" | "zilingo" | "firstcry" | "bukalapak" | "myntra_ppmp" | "lazada" | "tiktok" | "sfcc" | "debenhams" | "prestomall" | "meesho" | "amazon_vdf" | "bigcommerce" | "sendo" | "storehippo" | "cdiscount" | "nykaa" | "trendyol" | "weloveshopping" | "jollee" | "wish" | "tiki" | "central_online" | "q10" | "cred" | "walmart" | "snapdeal" | "flipkart" | "blibli" | "ajio_jit" | "pharmeasy" | "ezmall" | "adobe_commerce" | "kartmax" | "shopee" | "zalora" | "prestashop" | "smytten" | "amazon_sc" | "urbanpiper" | "flipkart_quick" | "woocommerce" | "zivame" | "lelong" | "facebook" | "jiomart" | "gmc" | "robins" | "akulaku" | "noon" | "tatacliq" | "kartrocket" | "inorbit" | "ajio_business" | "swiggy" | "asos" | "tokopedia" | "limeroad" | "myntra_omni" | "spoyl" | "amazon_mlf" | "fulfilled_by_lazada" | "ebay" | "jd" | "amazon_pharmacy" | "ajio_vms" | "daraz" | "oker" | "flipkart_b2b" | "amazon_mlf_ss" | "woovly" | "tata1mg" | "zomato" | "shopify";
