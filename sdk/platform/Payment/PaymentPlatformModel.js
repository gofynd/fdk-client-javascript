const Joi = require("joi");

/**
 * @typedef PaymentGatewayConfigResponse
 * @property {AggregatorConfig[]} [aggregators] - List of all config specific to
 *   the aggregator with their Details.
 * @property {string} app_id - Application Id to which Payment config Mapped
 * @property {string[]} excluded_fields - List of all excluded config with their Details.
 * @property {boolean} success - Response is successful or not
 * @property {boolean} created - Response is created or not
 * @property {string[]} display_fields - List of all display related configs, i.e. logo
 */

/**
 * @typedef AggregatorConfig
 * @property {boolean} [is_active]
 * @property {string} [config_type]
 * @property {DisplayDetails} [display]
 * @property {string} [aggregator]
 * @property {string} [logo]
 * @property {string} [display_name]
 */

/**
 * @typedef DisplayDetails
 * @property {string} [link]
 * @property {string} [text]
 * @property {string} [description]
 * @property {string} [review_status]
 * @property {string[]} [info]
 */

/**
 * @typedef PaymentGatewayConfig
 * @property {string} secret - Secret Key of the payment aggregator
 * @property {string} config_type - Config Type of the aggregator
 * @property {boolean} [is_active] - Enable or Disable Flag
 * @property {string} key - Api key of the payment aggregator
 * @property {string} [merchant_salt] - The secret key or token provided by the
 *   payment aggregator for the merchant.
 */

/**
 * @typedef PaymentGatewayConfigRequest
 * @property {string} app_id - Application Id to which Payment config Mapped
 * @property {boolean} [is_active] - Enable or Disable Flag
 * @property {PaymentGatewayConfig} [ccavenue]
 * @property {PaymentGatewayConfig} [razorpay]
 * @property {PaymentGatewayConfig} [juspay]
 */

/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {string[]} aggregators - List of added payment gateway
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef ErrorCodeAndDescription
 * @property {string} description - Error human understandable description.
 * @property {string} [code] - Error descrption code.
 */

/**
 * @typedef HttpErrorCodeAndResponse
 * @property {ErrorCodeAndDescription} [error]
 * @property {boolean} success - Response is successful or not
 * @property {string[]} [items] - Return empty array in error response
 * @property {string} [message] - Error description message
 */

/**
 * @typedef RefundErrorCodeAndResponse
 * @property {boolean} success - Response is successful or not
 * @property {string} [message] - Response message
 * @property {IFSCErrorData} [data]
 * @property {EDCError} [error]
 */

/**
 * @typedef PaymentOptionErrorCodeAndResponse
 * @property {boolean} success - Response is successful or not
 * @property {string} [message]
 * @property {string[]} [error]
 */

/**
 * @typedef RefundOptionErrorCodeAndResponse
 * @property {boolean} success - Response is successful or not
 * @property {RefundOptionMessage} [message]
 * @property {RefundOptionError} [error]
 */

/**
 * @typedef UserCODAdvanceErrorCodeAndResponse
 * @property {boolean} success - Response is successful or not
 * @property {UserCodErrorMessage} [error]
 */

/**
 * @typedef UserCodErrorMessage
 * @property {string} [code]
 * @property {RefundOptionError} [description]
 */

/**
 * @typedef RefundOptionMessage
 * @property {number} [code]
 * @property {RefundOptionError} [description]
 * @property {string[]} [shipment_id]
 * @property {string[]} [order_id]
 */

/**
 * @typedef RefundOptionError
 * @property {number} [code]
 * @property {string[]} [shipment_id]
 * @property {string[]} [order_id]
 * @property {string[]} [merchant_user_id]
 * @property {RefundOptionError} [description]
 */

/**
 * @typedef PaymentOptionError
 * @property {string[]} [option_type]
 * @property {string[]} [order_type]
 * @property {string[]} [checksum]
 */

/**
 * @typedef PaymentSessionError
 * @property {boolean} [success]
 * @property {PaymentErrorCodeDescription} [error]
 */

/**
 * @typedef PaymentErrorCodeDescription
 * @property {PaymentOptionError} [description]
 * @property {string} [code] - Error descrption code.
 */

/**
 * @typedef EDCError
 * @property {string} [error] - Error human understandable description.
 * @property {string} [description] - Error human understandable description.
 * @property {string} [code] - Error descrption code.
 */

/**
 * @typedef IFSCErrorData
 * @property {string} [message] - Error human understandable description.
 * @property {string} [subcode] - Error descrption code.
 * @property {string} [status] - Error.
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [package_name] - Package_name
 * @property {string} [code] - Code
 */

/**
 * @typedef ProductCODData
 * @property {Object} [items] - Item id with its cod availability.
 * @property {CODChargesLimitsResponse} [cod_charges]
 */

/**
 * @typedef CODChargesLimitsResponse
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
 * @property {string} [logo]
 * @property {string} [bank_name]
 * @property {string} [bank_code]
 * @property {string} [url]
 * @property {string} [wallet_name]
 * @property {string} [wallet_code]
 * @property {number} [wallet_id]
 * @property {boolean} [collect_flow]
 * @property {string} [provider]
 * @property {Object} [meta]
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
 * @property {number} [payment_mode_id] - Payment mode id
 * @property {PaymentModeLogo} [logo_url]
 * @property {Version} [version]
 * @property {string} [aggregator_name] - Display Priority
 */

/**
 * @typedef Version
 * @property {VersionDetails[]} [razorpay]
 * @property {VersionDetails[]} [rupifi]
 * @property {VersionDetails[]} [jio]
 * @property {VersionDetails[]} [stripe]
 * @property {VersionDetails[]} [payumoney]
 * @property {VersionDetails[]} [jiopay]
 * @property {VersionDetails[]} [fynd]
 * @property {VersionDetails[]} [potlee]
 * @property {VersionDetails[]} [juspay]
 * @property {VersionDetails[]} [simpl]
 * @property {VersionDetails[]} [checkout]
 */

/**
 * @typedef VersionDetails
 * @property {string} [version]
 */

/**
 * @typedef PaymentOptions
 * @property {RootPaymentMode[]} payment_option - Payment options
 */

/**
 * @typedef PaymentFlowData
 * @property {boolean} [is_customer_validation_required]
 * @property {string} [cust_validation_url]
 * @property {PaymentConfig} [config]
 * @property {GatewayData} [data]
 * @property {string} [return_url]
 */

/**
 * @typedef PaymentConfig
 * @property {boolean} [redirect]
 * @property {string} [final_payment_action_url]
 * @property {string} [callback_url]
 * @property {string} [action_url]
 */

/**
 * @typedef GatewayData
 * @property {string} [route]
 * @property {string} [entity]
 * @property {boolean} [is_customer_validation_required]
 * @property {string} [cust_validation_url]
 * @property {SDKDetails} [sdk]
 * @property {string} [return_url]
 * @property {string} [user_email]
 * @property {string} [user_phone]
 */

/**
 * @typedef SDKDetails
 * @property {SDKConfig} [config]
 * @property {UserData} [data]
 */

/**
 * @typedef SDKConfig
 * @property {boolean} [redirect]
 * @property {string} [callback_url]
 * @property {string} [action_url]
 */

/**
 * @typedef UserData
 * @property {string} [user_phone]
 * @property {string} [user_email]
 */

/**
 * @typedef AggregatorRouteData
 * @property {GatewayData} [gateway]
 * @property {PaymentFlowData} [payment_flow_data]
 * @property {GatewayData} [data]
 * @property {string} [payment_flow]
 * @property {string} [api_link]
 * @property {string} [route]
 * @property {string} [entity]
 * @property {boolean} [is_customer_validation_required]
 * @property {string} [cust_validation_url]
 * @property {SDKDetails} [sdk]
 * @property {string} [return_url]
 * @property {string} [user_email]
 * @property {string} [user_phone]
 */

/**
 * @typedef AggregatorRoute
 * @property {AggregatorRouteData} [data]
 * @property {Object} [payment_flow_data] - Payment_flow_data
 * @property {string} [payment_flow] - Payment_flow
 * @property {string} [api_link] - Api_link
 * @property {string} [type]
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
 * @property {AggregatorRoute} [jio]
 * @property {AggregatorRoute} [payumoney]
 * @property {AggregatorRoute} [openapi]
 * @property {AggregatorRoute} [potlee]
 * @property {AggregatorRoute} [upi_razorpay]
 * @property {AggregatorRoute} [creditnote]
 * @property {AggregatorRoute} [pinelabs]
 * @property {AggregatorRoute} [checkout]
 * @property {AggregatorRoute} [cashfree]
 * @property {AggregatorRoute} [jio_extension]
 */

/**
 * @typedef PaymentOptionAndFlow
 * @property {RootPaymentMode[]} payment_option - Payment options
 * @property {PaymentFlow} [payment_flows]
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
 * @property {string[]} [all_cancellation_type] - All available types of cancellation
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
 * @property {Version} [version]
 * @property {string} [name] - Name of Advance Payment Mode
 * @property {number} [display_priority] - Display Priority for Payment Option
 * @property {number} [payment_mode_id] - Payment Mode ID for Advance Payment Option
 * @property {string} [display_name] - Display name for Advance Payment Mode
 * @property {PaymentModeList[]} [list] - Payment mode
 * @property {SplitObject} [split]
 * @property {AdvanceObject} [advance]
 */

/**
 * @typedef PaymentModeRouteResponse
 * @property {PaymentOptionAndFlow} payment_options
 * @property {boolean} success - Response is successful or not
 * @property {Object} [payment_breakup] - Payment Breakup for advance payment
 * @property {AdvancePaymentObject[]} [advance_payment] - Advance Payment Array
 * @property {number} [delivery_charges]
 * @property {string} [store_code]
 * @property {string} [order_id]
 * @property {string} [cod_message]
 * @property {DeliverySlot[]} [delivery_slots]
 * @property {string} [user_type]
 * @property {boolean} [cod_available]
 * @property {number} [cod_charges]
 * @property {number} [max_cart_value]
 * @property {number} [min_cart_value]
 * @property {string[]} [store_emp_list]
 * @property {number} [delivery_charge_order_value]
 * @property {number} [cod_limit]
 * @property {number} [remaining_limit]
 * @property {number} [cod_limit_per_order]
 * @property {Object} [product_cod_data]
 * @property {boolean} [is_product_cod_available]
 * @property {boolean} [is_pincode_cod_available]
 */

/**
 * @typedef DeliverySlot
 * @property {string} [date]
 * @property {DeliverySlotDetail[]} [delivery_slot]
 */

/**
 * @typedef DeliverySlotDetail
 * @property {string} [delivery_slot_timing]
 * @property {number} [delivery_slot_id]
 */

/**
 * @typedef PaymentOptionsResponse
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
 * @property {boolean} [is_default] - Default or not
 * @property {PayoutAggregator[]} [payouts_aggregators]
 * @property {string} unique_transfer_no - Display priority of the payment mode
 * @property {boolean} is_active - Enable/DIsable Flag Payout
 * @property {string} transfer_type - Transafer type
 */

/**
 * @typedef PayoutsResponse
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
 * @typedef PayoutUserDetails
 * @property {string} [unique_external_id]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [mobile]
 */

/**
 * @typedef PayoutRequest
 * @property {string} aggregator - Aggregator Name
 * @property {PayoutUserDetails} users
 * @property {string} unique_external_id - Unique Id of Payout
 * @property {boolean} is_active - Enable or Disable Flag Payout
 * @property {PayoutBankDetails} bank_details
 * @property {string} transfer_type - Transafer type
 */

/**
 * @typedef PayoutResponse
 * @property {string} [payment_status] - Status of payment
 * @property {PayoutUserDetails} users
 * @property {string} aggregator - Aggregator Name
 * @property {string} unique_transfer_no - Unique transfer no
 * @property {boolean} is_active - Enable or DIsable Flag Payout
 * @property {PayoutBankDetails} bank_details
 * @property {boolean} success - Response is successful or not
 * @property {string} transfer_type - Transfer type
 * @property {boolean} created - Created flag
 * @property {PayoutDetails} [payouts]
 */

/**
 * @typedef PayoutDetails
 * @property {BankDetails} [more_attributes]
 * @property {string} [aggregator_fund_id]
 */

/**
 * @typedef BankDetails
 * @property {string} [account_type]
 * @property {string} [city]
 * @property {string} [account_holder]
 * @property {string} [branch_name]
 * @property {string} [account_no]
 * @property {string} [bank_name]
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [ifsc_code]
 * @property {string} [aggregator_fund_id]
 */

/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} [is_default] - Enable or Disable Default Payout
 * @property {boolean} [is_active] - Enable or DIsable Flag Payout
 * @property {boolean} success - Response is successful or not
 * @property {PayoutBankDetails} [bank_details]
 * @property {string} [transfer_type]
 * @property {string} [aggregator]
 * @property {PayoutUserDetails} [users]
 * @property {string} [unique_transfer_no]
 * @property {boolean} [updated]
 * @property {string} [payment_status]
 * @property {Payouts} [payouts]
 */

/**
 * @typedef Payouts
 * @property {string} [aggregator_fund_id]
 */

/**
 * @typedef UpdatePayoutRequest
 * @property {boolean} [is_default] - Enable or Disable Default Payout
 * @property {boolean} is_active - Enable or Disable Flag Payout
 * @property {string} unique_external_id - Unique Id of Payout
 */

/**
 * @typedef DeletePayoutResponse
 * @property {boolean} [delete] - Delete is successful or not
 * @property {string} [unique_transfer_no] - Unique transafer no of payout
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef RefundAccountResponse
 * @property {boolean} [is_verified_flag] - Account is verified or not
 * @property {string} [message] - Response message
 * @property {Object} [data] - Refund account data.
 * @property {boolean} success - Success or failure flag.
 */

/**
 * @typedef GetRefundAccountResponse
 * @property {boolean} [is_verified_flag]
 * @property {string} [message] - Response message
 * @property {BankDetailsForOTP[]} data - Refund account data.
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
 * @property {string} [address] - Address of account
 * @property {string} [comment] - Comment for account
 * @property {string} [email] - Email address of account
 * @property {string} [mobile] - Mobile number of account
 * @property {string} [beneficiary_id] - Beneficiary id of account
 */

/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {string} [transfer_mode]
 * @property {string} [shipment_id]
 * @property {boolean} [delights]
 * @property {string} order_id - Order_id for which account will be added
 * @property {BankDetailsForOTP} details
 */

/**
 * @typedef IfscCodeResponse
 * @property {boolean} [success]
 * @property {string} branch_name
 * @property {string} bank_name
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
 * @property {number} [aggregator_id]
 * @property {boolean} [is_verified]
 * @property {string} [status]
 * @property {string} [txn_id]
 * @property {Object} [meta]
 * @property {string} bank_name
 * @property {string} account_no
 * @property {string} [mobile]
 * @property {boolean} [default_beneficiary]
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {OrderBeneficiaryDetails[]} [beneficiaries] - All Beneficiaries Of An Order
 * @property {boolean} [show_beneficiary_details] - Show beneficiary details or not.
 * @property {OrderBeneficiaryDetails[]} [bank]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {Object} [extra_meta] - Key value pair for extra data related to payment mode
 * @property {string} [order_id] - Fynd Platform order ID
 * @property {string} [payment_id] - A unique identifier associated with a
 *   specific payment transaction
 * @property {string} [current_status] - Represents the current state or
 *   condition of an object, such as an order or payment.
 * @property {string} [payment_gateway]
 * @property {string} [key] - Specifies the name or identifier of the payment
 *   gateway. This will deprecated in future version. We recommend switching to
 *   `payment_gateway_slug` to ensure uninterrupted payment processing.
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
 * @typedef PaymentConfirmationRequest
 * @property {string} order_id - Unique order id
 * @property {MultiTenderPaymentMethod[]} payment_methods
 */

/**
 * @typedef PaymentConfirmationResponse
 * @property {string} [order_id] - Unique order id
 * @property {string} message - Message
 * @property {boolean} success - Payment confirmation updated or not.
 * @property {string} [errors]
 * @property {string} [return_url]
 */

/**
 * @typedef AdvancePaymentLimitConfig
 * @property {boolean} [is_active]
 * @property {string} [prepayment_type]
 * @property {number} [prepayment_value]
 * @property {string} [cancellation_type]
 * @property {string[]} [all_cancellation_type]
 * @property {string[]} [all_prepayment_type]
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
 * @typedef GetUserBULimitResponse
 * @property {string} buisness_unit - COD limit business unit
 * @property {string} display_name - Display name for cod limit
 * @property {CODPaymentLimitConfig} config
 */

/**
 * @typedef GetUserCODLimitResponse
 * @property {GetUserBULimitResponse[]} items
 * @property {boolean} success - Response is successful or not
 * @property {string} [message] - Message for cod limit
 */

/**
 * @typedef SetAdvanceLimitConfig
 * @property {boolean} is_active
 * @property {string} prepayment_type
 * @property {number} prepayment_value
 * @property {string} [cancellation_type]
 * @property {string[]} [all_cancellation_type]
 */

/**
 * @typedef SetCODLimitConfig
 * @property {boolean} is_active
 * @property {number} [usages]
 * @property {number} [user_id]
 * @property {string} [merchant_user_id]
 * @property {CODLimitConfig} [limit]
 * @property {number} [remaining_limit]
 */

/**
 * @typedef SetUserPaymentLimitConfig
 * @property {SetAdvanceLimitConfig} advance
 * @property {SetCODLimitConfig} cod
 */

/**
 * @typedef SetBUPaymentLimit
 * @property {string} buisness_unit - Business Unit - 'storefront'/ 'pos'
 * @property {SetUserPaymentLimitConfig} config
 */

/**
 * @typedef SetCODForUserRequest
 * @property {string} [mobile_no] - Mobile No. of User
 * @property {string} merchant_user_id - Merchant User id
 * @property {SetBUPaymentLimit[]} items
 */

/**
 * @typedef EdcModelData
 * @property {string} aggregator - Name of aggregator
 * @property {number} aggregator_id - ID of aggregator
 * @property {string[]} models - List of string of edc models
 */

/**
 * @typedef EdcAggregatorAndModelListResponse
 * @property {EdcModelData[]} data - List of aggregators and their edc models
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef StatisticsData
 * @property {number} inactive_device_count - No of inactive devices
 * @property {number} active_device_count - No of active devices
 */

/**
 * @typedef EdcDeviceStatsResponse
 * @property {StatisticsData} statistics
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef EdcAddRequest
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
 * @typedef EdcDeviceAddResponse
 * @property {EdcDevice} data
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef EdcDeviceDetailsResponse
 * @property {EdcDevice} data
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef EdcUpdateRequest
 * @property {string} [edc_model] - Model of the edc machine
 * @property {number} [store_id] - Store at which devices is to used
 * @property {number} [aggregator_id] - Aggregator which will accept payment
 * @property {string} [edc_device_serial_no] - Serial number or imei of EDC device
 * @property {boolean} [is_active] - State whether device is active or inactive
 * @property {string} [merchant_store_pos_code] - This is provided by pinelabs
 * @property {string} [device_tag] - Device tag of edc device to identify it
 */

/**
 * @typedef EdcDeviceUpdateResponse
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
 * @property {number} [total] - Total number of items.
 */

/**
 * @typedef EdcDeviceListResponse
 * @property {EdcDevice[]} items - List of all edc mapped to the application
 *   options with their Details.
 * @property {Page} page
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef PaymentInitializationRequest
 * @property {string} [razorpay_payment_id] - Payment gateway payment id
 * @property {string} [device_id] - EDC machine Unique Identifier
 * @property {string} [email] - Customer valid email
 * @property {string} customer_id - Payment gateway customer id.
 * @property {string} [vpa] - Customer vpa address
 * @property {string} [aggregator] - Payment gateway name
 * @property {string} [order_id] - Payment gateway order id
 * @property {string} [currency] - Currency code.
 * @property {number} [amount] - Payable amount.
 * @property {string} [contact] - Customer valid mobile number
 * @property {number} [timeout] - Payment polling timeout if not recieved response
 * @property {string} merchant_order_id - Unique fynd order id
 * @property {string} [merchant_transaction_id] - Unique fynd transaction id
 * @property {string} method - Payment method
 */

/**
 * @typedef PaymentInitializationResponse
 * @property {string} [razorpay_payment_id] - Payment id.
 * @property {string} [device_id] - EDC machine Unique Identifier
 * @property {string} [upi_poll_url] - UPI poll url.
 * @property {string} [customer_id] - Payment gateway customer id.
 * @property {string} polling_url - Polling url.
 * @property {string} [vpa] - Customer vpa address
 * @property {string} aggregator - Payment gateway name
 * @property {string} [currency] - Currency code.
 * @property {string} merchant_order_id - Order id
 * @property {string} [merchant_transaction_id] - Unique fynd transaction id
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
 * @typedef PaymentStatusUpdateRequest
 * @property {string} [device_id] - EDC machine Unique Identifier
 * @property {string} [email] - Customer valid email
 * @property {string} [customer_id] - Payment gateway customer id.
 * @property {string} [vpa] - Customer vpa address
 * @property {string} aggregator - Payment gateway name
 * @property {string} [order_id] - Payment gateway order id
 * @property {string} [currency] - Currency code.
 * @property {number} amount - Payable amount.
 * @property {string} [contact] - Customer valid mobile number
 * @property {string} merchant_order_id - Unique fynd order id
 * @property {string} [status] - Status of payment.
 * @property {string} method - Payment method
 * @property {string} [merchant_transaction_id] - Unique fynd transaction id
 * @property {string} [unique_link_id] - Unique payment link id
 */

/**
 * @typedef PaymentStatusUpdateResponse
 * @property {string} [redirect_url] - Redirect url
 * @property {boolean} [retry] - Response is successful or not.
 * @property {boolean} [success] - Response is successful or not
 * @property {string} status - Payment status
 * @property {string} aggregator_name - Payment gateway name
 */

/**
 * @typedef ResendOrCancelPaymentRequest
 * @property {string} order_id - Unique order id
 * @property {string} [device_id] - EDC machine Unique Identifier
 * @property {string} request_type - Either resend or cancel
 */

/**
 * @typedef LinkStatus
 * @property {string} status - Link action status
 * @property {string} [message] - Message
 */

/**
 * @typedef ResendOrCancelPaymentResponse
 * @property {LinkStatus} data
 * @property {boolean} success - Response is successful or not.
 */

/**
 * @typedef PaymentStatusBulkHandlerRequest
 * @property {string[]} merchant_order_id - List of order ids
 */

/**
 * @typedef PaymentObjectListSerializer
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
 * @property {PaymentObjectListSerializer[]} [payment_object_list]
 */

/**
 * @typedef PaymentStatusBulkHandlerResponse
 * @property {number} [count]
 * @property {PaymentStatusObject[]} [data]
 * @property {boolean} success
 * @property {string} [error]
 * @property {number} status
 */

/**
 * @typedef GetOauthUrlResponse
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
 * @typedef RepaymentResponse
 * @property {Object} [data]
 * @property {boolean} success - Success/Failure of the transaction
 */

/**
 * @typedef MerchantOnBoardingRequest
 * @property {string} credit_line_id - Merchant ID at Ajiodhan's end
 * @property {string} aggregator - Payment aggregator name
 * @property {string} app_id - Application id
 * @property {string} user_id - Deadlock or Grimlock user id
 * @property {string} status - Status
 */

/**
 * @typedef MerchantOnBoardingResponse
 * @property {MerchantOnboardingData} data
 * @property {boolean} success - Success/Failure of the transaction
 */

/**
 * @typedef MerchantOnboardingData
 * @property {number} [status_code] - HTTP status code
 * @property {string} [message] - Message
 * @property {boolean} [status] - Successful or failure
 */

/**
 * @typedef ValidateCustomerRequest
 * @property {string} phone_number - User mobile number without country code.
 * @property {string} aggregator - Payment gateway name in camel case i.e Simpl, Rupifi
 * @property {string} [payload] - Hashed payload string.
 * @property {AddressDetail} [delivery_address]
 * @property {number} transaction_amount_in_paise - Payable amount in paise
 * @property {OrderItems[]} [order_items] - Extra meta fields.
 * @property {MerchantParams} [merchant_params]
 * @property {AddressDetail} [billing_address]
 */

/**
 * @typedef MerchantParams
 * @property {string} [source]
 */

/**
 * @typedef OrderItems
 * @property {string} [sku]
 * @property {number} [price]
 * @property {number} [quantity]
 */

/**
 * @typedef ValidateCustomerResponse
 * @property {string} message - Error or success message.
 * @property {ValidateCustomer} [data]
 * @property {boolean} success - Response is successful or not
 * @property {ValidateCustomer} [error]
 */

/**
 * @typedef ValidateCustomer
 * @property {ValidateCustomerData} [data]
 * @property {string} [aggregator]
 * @property {number} [api_version]
 */

/**
 * @typedef ValidateCustomerData
 * @property {boolean} [approved]
 * @property {string} [button_text]
 * @property {boolean} [first_transaction]
 * @property {string} [message]
 * @property {number} [amount]
 * @property {string} [user_id]
 * @property {string} [customer_mobile_number]
 * @property {number} [total_credited_balance]
 * @property {boolean} [is_cn_locked]
 * @property {number} [total_locked_amount]
 * @property {number} [allowed_redemption_amount]
 */

/**
 * @typedef GetPaymentLinkResponse
 * @property {string} [currency] - Currency
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
 * @property {ErrorDescription} [error]
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
 * @property {string} [description]
 */

/**
 * @typedef ErrorResponse
 * @property {number} [status_code] - HTTP status code
 * @property {string} [message] - Message
 * @property {boolean} success - Successful or failure
 * @property {ErrorDescription} [error]
 */

/**
 * @typedef CreatePaymentLinkMeta
 * @property {string} cart_id - Cart id for which payment link needs to be generated.
 * @property {string} checkout_mode - Checkout mode for the payment link i.e. self
 * @property {string} amount - Payment link amount to be paid by the customer
 * @property {string} [assign_card_id] - Assigned card id against which payment
 *   to be done via payment link
 * @property {string} [pincode] - Pincode of customer
 */

/**
 * @typedef CreatePaymentLinkRequest
 * @property {string} email - Email to which the payment link is to be sent
 * @property {number} amount - Total value of order
 * @property {string} mobile_number - Mobile number to which the payment link is
 *   to be sent
 * @property {string} [country_phone_code] - Phone country code for complete mobile number
 * @property {string} [description] - Merchant order id
 * @property {CreatePaymentLinkMeta} meta
 * @property {string} external_order_id - Merchant order id
 */

/**
 * @typedef CreatePaymentLinkResponse
 * @property {string} message - Message
 * @property {number} status_code - HTTP status code
 * @property {string} [payment_link_url] - Url of payment link
 * @property {number} [polling_timeout] - Polling request timeout
 * @property {boolean} success - Successful or failure
 * @property {string} [payment_link_id] - Unique id of payment link
 */

/**
 * @typedef PollingPaymentLinkResponse
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
 * @property {string} [error]
 */

/**
 * @typedef CancelOrResendPaymentLinkRequest
 * @property {string} payment_link_id - Unique id of payment link
 */

/**
 * @typedef ResendPaymentLinkResponse
 * @property {number} status_code - HTTP status code
 * @property {string} message - Message
 * @property {number} [polling_timeout] - Polling request timeout
 * @property {boolean} success - Successful or failure
 */

/**
 * @typedef PaymentLinkError
 * @property {boolean} [cancelled]
 * @property {string} [msg] - Message
 */

/**
 * @typedef CancelPaymentLinkResponse
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
 * @property {Code[]} codes
 * @property {string} name - Name of payment name
 * @property {string[]} networks
 * @property {string[]} types
 */

/**
 * @typedef GetPaymentCode
 * @property {PaymentCode} [cod]
 * @property {PaymentCode} [nb]
 * @property {PaymentCode} [wl]
 * @property {PaymentCode} [card]
 * @property {PaymentCode} [pl]
 * @property {PaymentCode} [ps]
 * @property {PaymentCode} [op]
 * @property {PaymentCode} [upi]
 * @property {PaymentCode} [qr]
 * @property {PaymentCode} [fc]
 * @property {PaymentCode} [pac]
 * @property {PaymentCode} [stripepg]
 * @property {PaymentCode} [payumoneypg]
 * @property {PaymentCode} [rupifipg]
 * @property {PaymentCode} [cas]
 * @property {PaymentCode} [csas]
 * @property {PaymentCode} [ccavenuepg]
 * @property {PaymentCode} [cardless_emi]
 * @property {PaymentCode} [cashback]
 * @property {PaymentCode} [loyalty]
 * @property {PaymentCode} [employee_discount]
 * @property {PaymentCode} [paymentlink]
 * @property {PaymentCode} [epaylater]
 * @property {PaymentCode} [udhaari]
 * @property {PaymentCode} [creditnote]
 * @property {PaymentCode} [checkout]
 * @property {PaymentCode} [rone]
 * @property {PaymentCode} [emi]
 * @property {PaymentCode} [sodexo]
 * @property {PaymentCode} [jm_wallet]
 */

/**
 * @typedef GetPaymentCodeResponse
 * @property {GetPaymentCode} data
 * @property {boolean} success - Response is successful or not.
 */

/**
 * @typedef PlatformOnlineOfflinePaymentResponse
 * @property {string} [message] - Message
 * @property {PlatformOnlineOfflineItem} [items]
 * @property {boolean} success - Response is successful or not.
 */

/**
 * @typedef PatchPlatformOnlineOfflinePaymentResponse
 * @property {string} [message] - Message
 * @property {PlatformOnlineOfflineItem[]} [items]
 * @property {boolean} success - Response is successful or not.
 */

/**
 * @typedef PlatformOnlineOfflineItem
 * @property {OnlinePaymentDetails} [online]
 * @property {OfflinePaymentDetails} [offline]
 * @property {PlatformOfflineAdvanceResponse} [advance]
 */

/**
 * @typedef OnlinePaymentDetails
 * @property {boolean} [is_active]
 * @property {AggregatorDetails[]} [aggregators]
 */

/**
 * @typedef OfflinePaymentDetails
 * @property {boolean} [is_active]
 * @property {CODOffline} [payment_modes]
 */

/**
 * @typedef CODOffline
 * @property {CODPaymentMode} [cod]
 */

/**
 * @typedef AggregatorDetails
 * @property {number} [id]
 * @property {string} [name]
 * @property {PaymentModeLogo} [logos]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {string[]} [payment_mode]
 * @property {string} [integration_type]
 * @property {string[]} [config]
 * @property {string} [extension_id]
 * @property {string} [status]
 * @property {boolean} [is_tnc_accepted]
 * @property {string} [label]
 */

/**
 * @typedef CODPaymentMode
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [id]
 * @property {PaymentModeLogo} [logos]
 * @property {boolean} [is_active]
 */

/**
 * @typedef PlatformPaymentModeRequest
 * @property {string} [business_unit] - Business unit identifier.
 * @property {string} [device] - Device identifier.
 * @property {boolean} [is_active] - Indicates if the payment option is active.
 * @property {PaymentModeItem[]} [items] - List of all aggregator and payment
 *   mode details.
 */

/**
 * @typedef PlatformPaymentModeResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {string} [business_unit] - Business unit identifier.
 * @property {string} [device] - Device identifier.
 * @property {boolean} [is_active] - Indicates if the payment option is active.
 * @property {PaymentOptionItem[]} [items] - List of all aggregator and payment
 *   mode details.
 */

/**
 * @typedef AggregatorPlatformPaymentModeResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {string} [business_unit] - Business unit identifier.
 * @property {string} [device] - Device identifier.
 * @property {boolean} [is_active] - Indicates if the payment option is active.
 * @property {boolean} [save_allowed] - Indicates if saving is allowed.
 * @property {string} [extension_id]
 * @property {PaymentOptionItem[]} [items] - List of all aggregator and payment
 *   mode details.
 */

/**
 * @typedef PlatformOfflineAdvanceRequest
 * @property {string} [business_unit] - Business unit identifier.
 * @property {OfflineAdvanceConfig[]} [items]
 * @property {OfflineAdvanceDevice} [device]
 */

/**
 * @typedef PlatformOfflineAdvanceResponse
 * @property {boolean} [success]
 * @property {boolean} [is_active] - Indicates if the payment option is active.
 * @property {string} [message] - Indicates if the payment option is active.
 * @property {OfflineAdvanceConfigurationItem[]} [items] - List of all
 *   aggregator and payment mode details.
 * @property {ErrorCodeAndDescription} [errors]
 * @property {ErrorCodeAndDescription} [error]
 */

/**
 * @typedef OfflineAdvanceConfigurationItem
 * @property {string} [display_name] - Display name for the payment configuration.
 * @property {string} [business_unit] - Business unit identifier.
 * @property {OfflineAdvanceConfig} [config]
 * @property {OfflineAdvanceDevice} [device]
 */

/**
 * @typedef OfflineAdvanceDevice
 * @property {boolean} [android] - Indicates if available on Android devices.
 * @property {boolean} [ios] - Indicates if available on iOS devices.
 * @property {boolean} [desktop] - Indicates if available on desktop devices.
 */

/**
 * @typedef OfflineAdvanceConfig
 * @property {boolean} [anonymous] - Indicates if the payment is anonymous.
 * @property {number} [user_limit] - User limit for the payment configuration.
 * @property {number} [charges] - Charges for the payment configuration.
 * @property {number} [charges_max_value] - Maximum value for charges.
 * @property {number} [charges_min_value] - Minimum value for charges.
 * @property {number} [max_order_value] - Maximum order value.
 * @property {number} [min_order_value] - Minimum order value.
 * @property {boolean} [is_active] - Indicates if the payment configuration is active.
 * @property {string} [name] - Name of the payment configuration.
 * @property {number} [number_of_split] - Number of split allowed for the
 *   payment configuration.
 * @property {string} [slug] - Slug for the payment configuration.
 * @property {boolean} [save_allowed] - Indicates if saving is allowed.
 * @property {string} [prepayment_type] - Indicates if Fixed or percentage amount.
 * @property {number} [prepayment_value] - Value in case of fixed amount else in
 *   percentage eg. 5% is 5 for a prepayment_value of 100
 * @property {number} [refund_time_limit] - Time limit for refund of a payment.
 * @property {string} [time_unit] - It indicates the time_unit for
 *   refund_time_limit possible values hours/days/weeks
 * @property {string} [cancellation_type] - It indicates type of cancellation
 *   for an advance payment order, possible values MANUAL / AUTO
 * @property {string[]} [all_cancellation_type] - All available types of cancellation
 * @property {boolean} [allow_custom_advance_amount] - Is custom advance amount allowed?
 * @property {string} [description] - Description of the payment configuration.
 * @property {string} [display_name] - Display name e.g Advance Payment
 */

/**
 * @typedef PaymentModeItem
 * @property {number} [id] - Identifier for the payment mode.
 * @property {string} [name] - Name of the payment mode.
 * @property {PaymentModeLogo} [logos]
 * @property {boolean} [is_active] - Indicates if the payment mode is active.
 * @property {number} [priority]
 * @property {SubPaymentMode[]} [sub_payment_mode] - List of sub-payment modes.
 */

/**
 * @typedef MerchantPaymentModeRequest
 * @property {ModeIsactive} [offline]
 * @property {ModeIsactive} [online]
 */

/**
 * @typedef ModeIsactive
 * @property {boolean} [is_active]
 */

/**
 * @typedef OfferSerializer
 * @property {number} [offer_amount] - Offer amount.
 * @property {string} [offer_code] - Offer code.
 * @property {string} [offer_description] - Offer description.
 * @property {string} [offer_id] - Offer id.
 */

/**
 * @typedef AppliedOfferSerializer
 * @property {number} [total_applied_offer_amount] - Total applied offer amount
 * @property {OfferSerializer[]} [offer_list]
 */

/**
 * @typedef OrderDetail
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {number} amount - Amount paid.
 * @property {string} status - Order status created by payment gateway aggregator.
 * @property {string} currency - Currency of the payment.
 * @property {AggregatorOrderDetail} aggregator_order_details
 * @property {string} aggregator - Name of the payment gateway aggregator.
 */

/**
 * @typedef AggregatorOrderDetail
 * @property {string} [aggregator_order_id]
 * @property {number} [amount]
 * @property {string} [currency]
 * @property {string} [aggregator]
 * @property {string} [status]
 */

/**
 * @typedef GoogleMapPoint
 * @property {string} [address]
 * @property {string} [sub_locality]
 */

/**
 * @typedef AddressDetail
 * @property {string} [line1]
 * @property {string} [line2]
 * @property {GoogleMapPoint} [google_map_point]
 * @property {string} [landmark] - Landmark
 * @property {string} [phone] - Phone number
 * @property {string} [country_iso_code] - Country's code name e.g. `IN`, `GB`
 * @property {string} [area_code] - Customer pin/zip code
 * @property {string} country - Country name
 * @property {string} [expire_at] - Address expiry timestamp
 * @property {Object} [geo_location] - Location latitude and logitude
 * @property {string} state - State of the customer
 * @property {string} [area] - Area details
 * @property {string} [g_address_id] - Unique address id generated by Fynd platform
 * @property {string} [area_code_slug] - Area slug code, use pin or zip code if
 *   not available
 * @property {string} [country_phone_code] - Country's phone code
 * @property {string} [name] - Customer name
 * @property {string} [address_type] - Address type e.g. home, office
 * @property {string} [address] - Address details
 * @property {string} [email] - Customer email
 * @property {string} city - City name
 * @property {Object[]} [tags] - Optional address tag
 * @property {string} [pincode]
 * @property {string} [type]
 */

/**
 * @typedef LatLongDetail
 * @property {string} [latitude]
 * @property {string} [longitude]
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
 * @property {PaymentMode[]} payment_methods - Method of payment
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
 */

/**
 * @typedef AmountSerializer
 * @property {number} value - Amount in integer
 * @property {string} currency - Currency in which amount is getting passed
 */

/**
 * @typedef ChargeAmountSerializer
 * @property {AmountSerializer} ordering_currency
 * @property {AmountSerializer} base_currency
 */

/**
 * @typedef CartChargesSerializer
 * @property {string} [charge_type] - Type of charge
 * @property {string} [name] - Name of the charge
 * @property {string} [code] - Unique identifier code for charge
 * @property {ChargeAmountSerializer} [amount]
 */

/**
 * @typedef GetPaymentSessionResponse
 * @property {Object} [meta] - Meta
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {AppliedOfferSerializer} [applied_payment_offers]
 * @property {string} [checksum]
 * @property {string} status - Status of the payment.
 * @property {string} currency - Currency of the payment.
 * @property {PaymentSessionDetail} payment_details
 * @property {CartDetailsSerializer} [cart_details]
 * @property {number} total_amount - Amount paid.
 * @property {RefundDetailsSerializer[]} [refund_details] - Object of refund details
 */

/**
 * @typedef PaymentSessionRequestSerializer
 * @property {Object} [meta] - Extra meta data specific to extensions
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {AppliedOfferSerializer} [applied_payment_offers]
 * @property {string} [checksum] - Checksum to verify the payload
 * @property {OrderDetail} order_details - The details of the order.
 * @property {string} status - Status of the payment.
 * @property {string} currency - Currency of the payment.
 * @property {PaymentSessionDetail[]} payment_details - The payment details with
 *   the schema `PaymentSessionDetail`.
 * @property {number} total_amount - Amount paid.
 * @property {string} [source] - Source of payment update session
 */

/**
 * @typedef TransactionDetail
 * @property {string} transaction_id - Unique identifier for the transaction
 * @property {string} payment_mode - Mode of payment used in the transaction
 * @property {number} amount - Amount involved in the transaction
 * @property {string} [payment_id] - Unique number generated by extension
 */

/**
 * @typedef PaymentSessionResponseSerializer
 * @property {string} [gid] - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {Object[]} [platform_transaction_details] - Platform transaction details.
 * @property {string} [status] - Status of the payment.
 * @property {string} [currency] - Currency of the payment.
 * @property {number} [total_amount] - Amount paid.
 * @property {string} [error]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {TransactionDetail[]} [transaction_details] - List of all payment
 *   mode and transaction id
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
 * @property {string} currency - Currency of the payment.
 * @property {string} [transfer_reversal] - Description in case of reversal of payment.
 * @property {string} [balance_transaction] - Balance transaction.
 */

/**
 * @typedef RefundSessionRequestSerializer
 * @property {Object} [meta] - Meta
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {string} status - The status of the refund.
 * @property {string} currency - The currency of the payment.
 * @property {PaymentSessionDetail} payment_details - Details of the payment
 * @property {string} [checksum]
 * @property {number} total_amount - The total amount refunded.
 * @property {RefundSessionDetail[]} [refund_details] - Details of the refund
 * @property {ErrorDescription} [error]
 * @property {string} [message] - The status of the refund.
 */

/**
 * @typedef RefundSessionResponseSerializer
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {string} [gid] - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {string} [status] - The status of the refund.
 * @property {string} [currency] - The currency of the payment.
 * @property {Object[]} [platform_refund_details] - Details of the refund
 * @property {number} [total_refund_amount] - The total amount refunded.
 */

/**
 * @typedef PaymentDetailsSerializer
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
 * @typedef CartDetailsSerializer
 * @property {Object} items - Items that are added in cart
 * @property {Object[]} articles - List of articles that are added in cart
 * @property {number} cart_value - Total cart value i.e. amount to be paid
 * @property {number} [total_quantity] - Total number of items in cart
 * @property {Object} [custom_cart_meta] - This field is used to add and
 *   retrieve custom data fields to cart items.
 * @property {Object[]} [cart_charges] - List of cart charges that are added in cart
 */

/**
 * @typedef RefundDetailsSerializer
 * @property {number} amount - Refunded amount
 * @property {string} currency - The currency of the payment.
 * @property {string} request_id - Refund request id, unique id generated by Fynd platform
 * @property {string} status - The status of the refund.
 * @property {string} created - Timestamp in epoch.
 * @property {string} refund_utr - Unique refund utr generated by payment gateway.
 */

/**
 * @typedef PaymentSessionSerializer
 * @property {Object} payment_details - Object of payment details
 * @property {string} [currency] - The currency of the payment.
 * @property {string} status - The status of the payment session.
 * @property {number} total_amount - Total amount to be paid
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {CartDetailsSerializer} [cart_details]
 * @property {RefundDetailsSerializer[]} refund_details - Object of refund details
 */

/**
 * @typedef RefundSourcesPriority
 * @property {boolean} [enabled] - Refund source is enabled or not
 * @property {string} description - Description of refund source
 * @property {number} priority - Priority of refund source, 0 being highest
 * @property {string} source - Source of refund
 */

/**
 * @typedef RefundPriorityResponseSerializer
 * @property {string} configuration - Configuration for merchant or customer
 * @property {boolean} success - Success
 * @property {boolean} apportion - Apportion refund to multiple sources
 * @property {string} business_unit - Business unit either pos or storefront
 * @property {boolean} [settle_offline] - Settle offline refund option is enabled or not
 * @property {RefundSourcesPriority[]} refund_sources_priority - Refund sources priority
 * @property {string} [message] - Message
 */

/**
 * @typedef RefundPriorityRequestSerializer
 * @property {boolean} [settle_offline] - Settle Offline flag
 * @property {boolean} apportion - Apportion refund to multiple sources
 * @property {RefundSourcesPriority[]} refund_sources_priority - Refund sources priority
 */

/**
 * @typedef FromConfig
 * @property {string} device - Device name
 * @property {string} business_unit - Business unit name
 */

/**
 * @typedef ToConfig
 * @property {string[]} device
 * @property {string} business_unit - Business unit name
 */

/**
 * @typedef PlatformPaymentModeCopyConfigRequest
 * @property {FromConfig} from_config
 * @property {ToConfig} to_config
 */

/**
 * @typedef PaymentMethodsMetaOrder
 * @property {string} [payment_identifier] - Payment identifier
 * @property {string} [merchant_code] - Merchant code
 * @property {string} payment_gateway - Payment gateway name
 * @property {Object} [payment_extra_identifiers] - Extra Payment identifiers
 * @property {PaymentModeLogo} [logo_url]
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
 * @typedef PaymentOrderRequest
 * @property {string} order_id - Order id
 * @property {PaymentOrderMethods[]} [payment_methods]
 * @property {string} [shipment_id] - Shipment_id
 * @property {CustomerDetails} [customer_details]
 */

/**
 * @typedef CustomerDetails
 * @property {string} [email] - Email of the customer
 * @property {string} [mobile] - Mobile number of the customer
 * @property {string} [name] - Name of the customer
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
 * @property {string} [url]
 * @property {string} [encdata]
 * @property {string} [checksum]
 * @property {string} [mcode]
 * @property {boolean} [success]
 * @property {string} [status]
 * @property {string} [id]
 * @property {string} [mobile]
 * @property {string} [user]
 * @property {string} [merchant_transaction_id]
 * @property {string} [payment_mode_identifier]
 * @property {string} [bank] - Bank
 */

/**
 * @typedef PaymentOrderResponse
 * @property {string} message - Message
 * @property {boolean} success - Successful or failure
 * @property {string} [payment_confirm_url] - Payment confirm url for aggregator
 * @property {string} [callback_url] - Callback url for aggregator
 * @property {number} [status_code] - HTTP status code
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
 * @typedef AggregatorVersionResponse
 * @property {string} message - Message
 * @property {boolean} success - Successful or failure
 * @property {AggregatorVersionItemSchema[]} [items]
 */

/**
 * @typedef AggregatorVersionRequestSchema
 * @property {string} [is_equal_to]
 * @property {string} [is_less_than]
 * @property {string} [is_greater_than]
 */

/**
 * @typedef AggregatorControlRequest
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
 * @property {PaymentCustomConfigCustomerSchema} [customer]
 * @property {PaymentCustomConfigDetailsSchema} [payment_mode]
 * @property {number} [min_order_value] - The minimum order value for the store
 * @property {boolean} [available]
 * @property {string[]} [pre_order]
 * @property {string[]} [post_order]
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
 * @property {string} [message]
 * @property {PaymentModeCustomConfigSchema[]} items
 */

/**
 * @typedef DeleteBeneficiaryRequest
 * @property {string} [beneficiary_id] - Saved Beneficiary ID
 */

/**
 * @typedef DeleteRefundAccountResponse
 * @property {boolean} success - Success/Failure of the deleted beneficiary
 * @property {string} message - Message
 */

/**
 * @typedef RefundOptionsDetails
 * @property {string} display_name - Refund option display name
 * @property {number} id - Refund ID. It will be unique identifier
 * @property {boolean} [is_active] - Refund option is active or not
 * @property {string} name - Refund option name
 */

/**
 * @typedef RefundOptions
 * @property {RefundOptionsDetails} items - List of all refund options.
 * @property {string[]} [offline_refund_collect_type] - List of all the Offline
 *   refund collection options.
 */

/**
 * @typedef OfflineRefundOptions
 * @property {RefundOptionsDetails} items - List of all refund options.
 * @property {string[]} payment_modes - List of all offline payment options. MOP
 *   Code value
 * @property {string[]} [offline_refund_collect_type] - List of all the Offline
 *   refund collection options.
 */

/**
 * @typedef RefundOptionResponse
 * @property {OfflineRefundOptions} offline_refund_options - Available offline
 *   refund options data
 * @property {boolean} success - Success/Failure Of response
 * @property {RefundOptions} refund_options - Available refund options data
 */

/**
 * @typedef SelectedRefundOptionResponse
 * @property {TransferMode} transfer_mode
 * @property {string} shipment_id - Shipment ID
 * @property {string} message - Message
 * @property {boolean} success - Successful or not.
 * @property {Object} [beneficiary_details] - Beneficiary Short description
 */

/**
 * @typedef TransferMode
 * @property {string} [mode]
 * @property {string} [display_name]
 */

/**
 * @typedef WalletBeneficiaryDetails
 * @property {string} beneficiary_id - Benenficiary Id
 * @property {string} modified_on - MOdification Date of Beneficiary
 * @property {string} display_name - Display Name Of Account
 * @property {number} id -
 * @property {string} subtitle - SHort Title Of Account
 * @property {string} transfer_mode - Transfer Mode Of Account
 * @property {string} [mobile] - MObile no of User
 * @property {boolean} is_active - Boolean Flag whether Beneficiary set or not
 * @property {string} created_on - Creation Date of Beneficiary
 * @property {string} address - Address of User
 * @property {string} title - Title Of Account
 * @property {string} wallet_address - Bank Name Of Account
 * @property {string} [comment] - Remarks
 * @property {string} [wallet] - Branch Name Of Account
 * @property {string} email - EMail of User
 * @property {string} [delights_user_name] - User Id Who filled the Beneficiary
 */

/**
 * @typedef UpiBeneficiaryDetails
 * @property {string} beneficiary_id - Benenficiary Id
 * @property {string} modified_on - MOdification Date of Beneficiary
 * @property {string} display_name - Display Name Of Account
 * @property {number} id -
 * @property {string} subtitle - SHort Title Of Account
 * @property {string} transfer_mode - Transfer Mode Of Account
 * @property {string} [vpa] - Branch Name Of Account
 * @property {string} [mobile] - Mobile no of User
 * @property {string} vpa_address - Bank Name Of Account
 * @property {string} created_on - Creation Date of Beneficiary
 * @property {string} address - Address of User
 * @property {string} title - Title Of Account
 * @property {string} [comment] - Remarks
 * @property {boolean} is_active - Boolean Flag whether Beneficiary set or not
 * @property {string} email - EMail of User
 * @property {string} [delights_user_name] - User Id Who filled the Beneficiary
 */

/**
 * @typedef BeneficiaryRefundOptions
 * @property {OrderBeneficiaryDetails[]} [bank] - List of all add bank
 *   beneficiary details.
 * @property {WalletBeneficiaryDetails} [wallet] - List of all add Wallet
 *   beneficiary details.
 * @property {UpiBeneficiaryDetails} [upi] - List of all add UPI beneficiary details.
 */

/**
 * @typedef OrderBeneficiaryResponseSchemaV2
 * @property {boolean} show_beneficiary_details - Show Beneficiary details on UI or not.
 * @property {BeneficiaryRefundOptions} data - Beneficiary Data for Bank
 *   account, UPI and Wallets.
 * @property {RefundOptionsLimit} limit
 */

/**
 * @typedef RefundOptionsLimit
 * @property {number} [bank]
 * @property {number} [wallet]
 * @property {number} [upi]
 */

/**
 * @typedef ValidateValidateAddressRequest
 * @property {string} [ifsc_code] - IFSC Code
 * @property {string} [upi_vpa] - VPA Address
 * @property {string} [aggregator] - Aggregator Name
 */

/**
 * @typedef VPADetails
 * @property {boolean} is_valid - Is VPA valid or not
 * @property {string} upi_vpa - VPA address
 * @property {string} status - VPA validation message
 * @property {string} customer_name - VPA Customer Name
 */

/**
 * @typedef ValidateValidateAddressResponse
 * @property {VPADetails} [upi] - UPI validation details.
 * @property {boolean} success - Successful or not.
 * @property {Object} [ifsc] - IFSC details response data
 * @property {VPADetails} [vpa] - UPI validation details.
 */

/**
 * @typedef SetDefaultBeneficiaryRequest
 * @property {string} order_id - Merchant Order Id
 * @property {string} beneficiary_id - Beneficiary Hash Id of the beneficiary added
 * @property {string} [shipment_id] - Shipment Id from respective merchant order ID
 * @property {string} [merchant_shipment_id] - Shipment Id from respective
 *   merchant order ID
 */

/**
 * @typedef SetDefaultBeneficiaryResponse
 * @property {boolean} is_beneficiary_set - Boolean Flag whether Beneficiary set or not
 * @property {boolean} [success] - Response is successful or not
 */

/**
 * @typedef ShipmentRefundRequestMeta
 * @property {string} [shipment_id] - Shipment Id of the respective Merchant Order Id
 * @property {string} [name] - Name of the Transfer Mode.
 * @property {string} [utr] - Unique Transaction Reference of the refund.
 * @property {string} [notes] - Any optional notes regarding the transaction.
 * @property {string} [billing_employee_code] - Billing Employee Code
 */

/**
 * @typedef ShipmentRefundRequest
 * @property {string} order_id - Merchant Order Id
 * @property {string} transfer_mode - Transfer Mode of the Beneficiary to be added
 * @property {string} [beneficiary_id] - Beneficiary Hash Id of the beneficiary added
 * @property {string[]} shipment_ids - Detailed list of shipment IDs for single
 *   and multi-bag return cases
 * @property {ShipmentRefundRequestMeta} [meta]
 */

/**
 * @typedef ShipmentRefundDetail
 * @property {string} order_id - Order ID
 * @property {string} transfer_mode - TransferMode
 * @property {string} beneficiary_id - Beneficiary ID
 * @property {string[]} shipment_ids - Detailed list of shipment IDs for single
 *   and multi-bag return cases
 */

/**
 * @typedef ShipmentRefundResponse
 * @property {ShipmentRefundDetail} [data] - Selected Shipment refund option details.
 * @property {boolean} [success] - Successful or not.
 * @property {string} [message] - Message
 * @property {string} [refund_options]
 * @property {RefundOptionsPriority} [refund_options_priority]
 * @property {RefundOptionsPriority} [offline_refund_options_priority]
 */

/**
 * @typedef RefundOptionsPriority
 * @property {string[]} [payment_modes]
 * @property {RefundItem[]} [items]
 * @property {string[]} [payment_gateways] - List of all offline payment gateways.
 * @property {string[]} [offline_refund_collect_type] - List of all offline
 *   Refund Collect Types.
 */

/**
 * @typedef RefundItem
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {boolean} [is_active]
 */

/**
 * @typedef PennyDropValidationResponse
 * @property {boolean} success - Successful or not.
 * @property {string} message - Message
 * @property {boolean} allow_pennydrop_validation - PennyDrop validation flag.
 */

/**
 * @typedef UpdatePennyDropValidationRequest
 * @property {boolean} allow_pennydrop_validation - Allow Penny Drop Validation flag
 */

/**
 * @typedef AggregatorConfigResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {PaymentOptionItem[]} [items]
 */

/**
 * @typedef PaymentModeResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {PaymentMode[]} [items]
 */

/**
 * @typedef PaymentOptionItem
 * @property {number} [id]
 * @property {string} [name]
 * @property {number} [priority]
 * @property {string} [display_name]
 * @property {string} [slug]
 * @property {string} [integration_type]
 * @property {PaymentModeLogo} [logos]
 * @property {boolean} [is_active]
 * @property {string[]} [config]
 * @property {PaymentMode[]} [payment_modes]
 * @property {PaymentMode[]} [payment_mode]
 * @property {string} [checkout_type]
 * @property {string[]} [country]
 * @property {string[]} [currency]
 * @property {string} [status]
 * @property {boolean} [save_allowed] - Indicates if saving is allowed.
 * @property {string} [extension_id]
 */

/**
 * @typedef PaymentMode
 * @property {number} [id]
 * @property {number} [priority]
 * @property {string} [name]
 * @property {string} [code]
 * @property {string} [display_name]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {string} [merchant_transaction_id]
 * @property {number} [amount]
 * @property {string} [payment_id]
 * @property {PaymentModeLogo} [logos]
 * @property {SubPaymentMode[]} [sub_payment_mode]
 */

/**
 * @typedef SubPaymentMode
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [code]
 * @property {number} [priority]
 * @property {boolean} [is_active]
 * @property {string} [logo]
 * @property {PaymentModeLogo} [logos]
 */

/**
 * @typedef AggregatorCredentialRequest
 * @property {boolean} [success]
 * @property {AggregatorCredential} [ccavenue]
 * @property {AggregatorCredential} [juspay]
 * @property {AggregatorCredential} [razorpay]
 * @property {AggregatorCredential} [potlee]
 * @property {AggregatorCredential} [jio]
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 */

/**
 * @typedef PatchAggregatorCredentialResponse
 * @property {boolean} [success]
 * @property {string[]} [aggregators]
 */

/**
 * @typedef AggregatorCredentialResponse
 * @property {boolean} [success]
 * @property {boolean} [created]
 * @property {string} [app_id]
 * @property {string[]} [excluded_fields]
 * @property {string[]} [display_fields]
 * @property {AggregatorCredential[]} [aggregators]
 */

/**
 * @typedef AggregatorCredential
 * @property {string} [key]
 * @property {string} [secret]
 * @property {string} [merchant_id]
 * @property {boolean} [is_active]
 * @property {string} [config_type]
 * @property {AggregatorDisplayItem} [display]
 * @property {string} [aggregator]
 * @property {string} [logo]
 * @property {string} [display_name]
 * @property {string} [integration_type]
 */

/**
 * @typedef AggregatorDisplayItem
 * @property {string[]} [info]
 * @property {string} [link]
 * @property {string} [text]
 * @property {string} [description]
 * @property {string} [review_status]
 */

/**
 * @typedef GetDeviceResponse
 * @property {string} [message] - Message
 * @property {boolean} [success] - Response is successful or not.
 * @property {BusinessUnitDevice} [items]
 */

/**
 * @typedef BusinessUnitDevice
 * @property {BusinessUnit[]} [business_unit]
 * @property {Device[]} [device] - List of devices.
 */

/**
 * @typedef BusinessUnit
 * @property {string} [name] - The name of the business unit.
 * @property {string} [slug] - The slug of the business unit.
 */

/**
 * @typedef Device
 * @property {string} [name] - The name of the device.
 * @property {string} [slug] - The slug of the device.
 */

/**
 * @typedef AggregatorHistoryResponse
 * @property {boolean} [success]
 * @property {HistoryItem[]} [items]
 */

/**
 * @typedef HistoryItem
 * @property {string} [created_on]
 * @property {string} [updated_on]
 * @property {string} [reviewer]
 * @property {string} [comments]
 * @property {string} [review_status]
 * @property {boolean} [is_active]
 * @property {string} [config_type]
 * @property {string} [public_token]
 * @property {string} [razorpay_account_id]
 * @property {string} [key]
 * @property {string} [secret]
 * @property {string} [webhook_secret]
 */

/**
 * @typedef CheckoutType
 * @property {string} [name]
 * @property {string} [slug]
 */

/**
 * @typedef Mode
 * @property {string} [name]
 * @property {string} [slug]
 */

/**
 * @typedef Country
 * @property {string} [name]
 * @property {string} [slug]
 */

/**
 * @typedef Currency
 * @property {string} [name]
 * @property {string} [slug]
 */

/**
 * @typedef RefundTo
 * @property {string} [source]
 * @property {string} [others]
 */

/**
 * @typedef PaymentMethodConfigResponse
 * @property {boolean} [success]
 * @property {RefundTo} [refund_to]
 * @property {RequiredSessionPath[]} [required_session_paths]
 * @property {PaymentMode[]} [payment_methods]
 * @property {CheckoutType[]} [checkout_type]
 * @property {boolean[]} [auto_capture]
 * @property {Mode[]} [mode]
 * @property {Country[]} [country]
 * @property {Currency[]} [currency]
 */

/**
 * @typedef RequiredSessionPath
 * @property {string} [version]
 * @property {SessionItem[]} [paths]
 */

/**
 * @typedef SessionItem
 * @property {string} [type]
 * @property {string} [uri_path]
 * @property {string} [content_type]
 * @property {string[]} [methods]
 */

/**
 * @typedef PaymentErrorCodeAndResponse
 * @property {PaymentError} [error]
 * @property {boolean} [success] - Response is successful or not
 * @property {string} [error_msg]
 * @property {string} [status]
 * @property {string} [message]
 */

/**
 * @typedef PaymentError
 * @property {string[]} [order_id]
 * @property {string[]} [order_type]
 * @property {string[]} [transaction_amount_in_paise]
 */

/**
 * @typedef ShipmentBeneficiaryDetailsResponse
 * @property {boolean} [success] - Response is successful or not.
 * @property {string} [shipment_id] - Shipment Id
 * @property {TransferMode} [transfer_mode]
 * @property {string} [message] - Message of response
 * @property {string} [beneficiary_details] - Encrypted beneficiary details
 */

class PaymentPlatformModel {
  /** @returns {PaymentGatewayConfigResponse} */
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      aggregators: Joi.array().items(PaymentPlatformModel.AggregatorConfig()),
      app_id: Joi.string().allow("").required(),
      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),
      success: Joi.boolean().required(),
      created: Joi.boolean().required(),
      display_fields: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {AggregatorConfig} */
  static AggregatorConfig() {
    return Joi.object({
      is_active: Joi.boolean(),
      config_type: Joi.string().allow(""),
      display: PaymentPlatformModel.DisplayDetails(),
      aggregator: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {DisplayDetails} */
  static DisplayDetails() {
    return Joi.object({
      link: Joi.string().allow(""),
      text: Joi.string().allow(""),
      description: Joi.string().allow("").allow(null),
      review_status: Joi.string().allow(""),
      info: Joi.array()
        .items(Joi.string().allow("").allow(null))
        .allow(null, ""),
    });
  }

  /** @returns {PaymentGatewayConfig} */
  static PaymentGatewayConfig() {
    return Joi.object({
      secret: Joi.string().allow("").required(),
      config_type: Joi.string().allow("").required(),
      is_active: Joi.boolean().allow(null),
      key: Joi.string().allow("").required(),
      merchant_salt: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentGatewayConfigRequest} */
  static PaymentGatewayConfigRequest() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
      is_active: Joi.boolean().allow(null),
      ccavenue: PaymentPlatformModel.PaymentGatewayConfig(),
      razorpay: PaymentPlatformModel.PaymentGatewayConfig(),
      juspay: PaymentPlatformModel.PaymentGatewayConfig(),
    });
  }

  /** @returns {PaymentGatewayToBeReviewed} */
  static PaymentGatewayToBeReviewed() {
    return Joi.object({
      aggregators: Joi.array().items(Joi.string().allow("")).required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ErrorCodeAndDescription} */
  static ErrorCodeAndDescription() {
    return Joi.object({
      description: Joi.string().allow("").required(),
      code: Joi.string().allow(""),
    });
  }

  /** @returns {HttpErrorCodeAndResponse} */
  static HttpErrorCodeAndResponse() {
    return Joi.object({
      error: PaymentPlatformModel.ErrorCodeAndDescription(),
      success: Joi.boolean().required(),
      items: Joi.array().items(Joi.string().allow("")),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {RefundErrorCodeAndResponse} */
  static RefundErrorCodeAndResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      message: Joi.string().allow(""),
      data: PaymentPlatformModel.IFSCErrorData(),
      error: PaymentPlatformModel.EDCError(),
    });
  }

  /** @returns {PaymentOptionErrorCodeAndResponse} */
  static PaymentOptionErrorCodeAndResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      message: Joi.string().allow(""),
      error: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {RefundOptionErrorCodeAndResponse} */
  static RefundOptionErrorCodeAndResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      message: PaymentPlatformModel.RefundOptionMessage(),
      error: PaymentPlatformModel.RefundOptionError(),
    });
  }

  /** @returns {UserCODAdvanceErrorCodeAndResponse} */
  static UserCODAdvanceErrorCodeAndResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      error: PaymentPlatformModel.UserCodErrorMessage(),
    });
  }

  /** @returns {UserCodErrorMessage} */
  static UserCodErrorMessage() {
    return Joi.object({
      code: Joi.string().allow(""),
      description: PaymentPlatformModel.RefundOptionError(),
    });
  }

  /** @returns {RefundOptionMessage} */
  static RefundOptionMessage() {
    return Joi.object({
      code: Joi.number(),
      description: PaymentPlatformModel.RefundOptionError(),
      shipment_id: Joi.array().items(Joi.string().allow("")),
      order_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {RefundOptionError} */
  static RefundOptionError() {
    return Joi.object({
      code: Joi.number(),
      shipment_id: Joi.array().items(Joi.string().allow("")),
      order_id: Joi.array().items(Joi.string().allow("")),
      merchant_user_id: Joi.array().items(Joi.string().allow("")),
      description: Joi.link("#RefundOptionError"),
    }).id("RefundOptionError");
  }

  /** @returns {PaymentOptionError} */
  static PaymentOptionError() {
    return Joi.object({
      option_type: Joi.array().items(Joi.string().allow("")),
      order_type: Joi.array().items(Joi.string().allow("")),
      checksum: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PaymentSessionError} */
  static PaymentSessionError() {
    return Joi.object({
      success: Joi.boolean(),
      error: PaymentPlatformModel.PaymentErrorCodeDescription(),
    });
  }

  /** @returns {PaymentErrorCodeDescription} */
  static PaymentErrorCodeDescription() {
    return Joi.object({
      description: PaymentPlatformModel.PaymentOptionError(),
      code: Joi.string().allow(""),
    });
  }

  /** @returns {EDCError} */
  static EDCError() {
    return Joi.object({
      error: Joi.string().allow(""),
      description: Joi.string().allow(""),
      code: Joi.string().allow(""),
    });
  }

  /** @returns {IFSCErrorData} */
  static IFSCErrorData() {
    return Joi.object({
      message: Joi.string().allow(""),
      subcode: Joi.string().allow(""),
      status: Joi.string().allow(""),
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
      items: Joi.any().allow(null),
      cod_charges: PaymentPlatformModel.CODChargesLimitsResponse(),
    }).allow(null);
  }

  /** @returns {CODChargesLimitsResponse} */
  static CODChargesLimitsResponse() {
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
      logo: Joi.string().allow(""),
      bank_name: Joi.string().allow(""),
      bank_code: Joi.string().allow(""),
      url: Joi.string().allow(""),
      wallet_name: Joi.string().allow(""),
      wallet_code: Joi.string().allow(""),
      wallet_id: Joi.number(),
      collect_flow: Joi.boolean(),
      provider: Joi.string().allow(""),
      meta: Joi.any(),
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
      payment_mode_id: Joi.number().allow(null),
      logo_url: PaymentPlatformModel.PaymentModeLogo(),
      version: PaymentPlatformModel.Version(),
      aggregator_name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Version} */
  static Version() {
    return Joi.object({
      razorpay: Joi.array().items(PaymentPlatformModel.VersionDetails()),
      rupifi: Joi.array().items(PaymentPlatformModel.VersionDetails()),
      jio: Joi.array().items(PaymentPlatformModel.VersionDetails()),
      stripe: Joi.array().items(PaymentPlatformModel.VersionDetails()),
      payumoney: Joi.array().items(PaymentPlatformModel.VersionDetails()),
      jiopay: Joi.array().items(PaymentPlatformModel.VersionDetails()),
      fynd: Joi.array().items(PaymentPlatformModel.VersionDetails()),
      potlee: Joi.array().items(PaymentPlatformModel.VersionDetails()),
      juspay: Joi.array().items(PaymentPlatformModel.VersionDetails()),
      simpl: Joi.array().items(PaymentPlatformModel.VersionDetails()),
      checkout: Joi.array().items(PaymentPlatformModel.VersionDetails()),
    });
  }

  /** @returns {VersionDetails} */
  static VersionDetails() {
    return Joi.object({
      version: Joi.string().allow(""),
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

  /** @returns {PaymentFlowData} */
  static PaymentFlowData() {
    return Joi.object({
      is_customer_validation_required: Joi.boolean(),
      cust_validation_url: Joi.string().allow("").allow(null),
      config: PaymentPlatformModel.PaymentConfig(),
      data: PaymentPlatformModel.GatewayData(),
      return_url: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PaymentConfig} */
  static PaymentConfig() {
    return Joi.object({
      redirect: Joi.boolean().allow(null),
      final_payment_action_url: Joi.string().allow("").allow(null),
      callback_url: Joi.string().allow("").allow(null),
      action_url: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {GatewayData} */
  static GatewayData() {
    return Joi.object({
      route: Joi.string().allow("").allow(null),
      entity: Joi.string().allow("").allow(null),
      is_customer_validation_required: Joi.boolean().allow(null),
      cust_validation_url: Joi.string().allow("").allow(null),
      sdk: PaymentPlatformModel.SDKDetails(),
      return_url: Joi.string().allow("").allow(null),
      user_email: Joi.string().allow("").allow(null),
      user_phone: Joi.string().allow("").allow(null),
    }).allow(null);
  }

  /** @returns {SDKDetails} */
  static SDKDetails() {
    return Joi.object({
      config: PaymentPlatformModel.SDKConfig(),
      data: PaymentPlatformModel.UserData(),
    }).allow(null);
  }

  /** @returns {SDKConfig} */
  static SDKConfig() {
    return Joi.object({
      redirect: Joi.boolean().allow(null),
      callback_url: Joi.string().allow("").allow(null),
      action_url: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {UserData} */
  static UserData() {
    return Joi.object({
      user_phone: Joi.string().allow("").allow(null),
      user_email: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {AggregatorRouteData} */
  static AggregatorRouteData() {
    return Joi.object({
      gateway: PaymentPlatformModel.GatewayData(),
      payment_flow_data: PaymentPlatformModel.PaymentFlowData(),
      data: PaymentPlatformModel.GatewayData(),
      payment_flow: Joi.string().allow("").allow(null),
      api_link: Joi.string().allow("").allow(null),
      route: Joi.string().allow("").allow(null),
      entity: Joi.string().allow("").allow(null),
      is_customer_validation_required: Joi.boolean(),
      cust_validation_url: Joi.string().allow("").allow(null),
      sdk: PaymentPlatformModel.SDKDetails(),
      return_url: Joi.string().allow("").allow(null),
      user_email: Joi.string().allow("").allow(null),
      user_phone: Joi.string().allow("").allow(null),
    }).allow(null);
  }

  /** @returns {AggregatorRoute} */
  static AggregatorRoute() {
    return Joi.object({
      data: PaymentPlatformModel.AggregatorRouteData(),
      payment_flow_data: Joi.any().allow(null),
      payment_flow: Joi.string().allow("").allow(null),
      api_link: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
    }).allow(null);
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
      jio: PaymentPlatformModel.AggregatorRoute(),
      payumoney: PaymentPlatformModel.AggregatorRoute(),
      openapi: PaymentPlatformModel.AggregatorRoute(),
      potlee: PaymentPlatformModel.AggregatorRoute(),
      upi_razorpay: PaymentPlatformModel.AggregatorRoute(),
      creditnote: PaymentPlatformModel.AggregatorRoute(),
      pinelabs: PaymentPlatformModel.AggregatorRoute(),
      checkout: PaymentPlatformModel.AggregatorRoute(),
      cashfree: PaymentPlatformModel.AggregatorRoute(),
      jio_extension: PaymentPlatformModel.AggregatorRoute(),
    }).allow(null);
  }

  /** @returns {PaymentOptionAndFlow} */
  static PaymentOptionAndFlow() {
    return Joi.object({
      payment_option: Joi.array()
        .items(PaymentPlatformModel.RootPaymentMode())
        .required(),
      payment_flows: PaymentPlatformModel.PaymentFlow(),
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
      all_cancellation_type: Joi.array()
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
      version: PaymentPlatformModel.Version(),
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

  /** @returns {PaymentModeRouteResponse} */
  static PaymentModeRouteResponse() {
    return Joi.object({
      payment_options: PaymentPlatformModel.PaymentOptionAndFlow().required(),
      success: Joi.boolean().required(),
      payment_breakup: Joi.any(),
      advance_payment: Joi.array()
        .items(PaymentPlatformModel.AdvancePaymentObject())
        .allow(null, ""),
      delivery_charges: Joi.number(),
      store_code: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      cod_message: Joi.string().allow(""),
      delivery_slots: Joi.array().items(PaymentPlatformModel.DeliverySlot()),
      user_type: Joi.string().allow(""),
      cod_available: Joi.boolean(),
      cod_charges: Joi.number(),
      max_cart_value: Joi.number(),
      min_cart_value: Joi.number(),
      store_emp_list: Joi.array().items(Joi.string().allow("")),
      delivery_charge_order_value: Joi.number(),
      cod_limit: Joi.number(),
      remaining_limit: Joi.number(),
      cod_limit_per_order: Joi.number(),
      product_cod_data: Joi.any(),
      is_product_cod_available: Joi.boolean(),
      is_pincode_cod_available: Joi.boolean(),
    });
  }

  /** @returns {DeliverySlot} */
  static DeliverySlot() {
    return Joi.object({
      date: Joi.string().allow(""),
      delivery_slot: Joi.array().items(
        PaymentPlatformModel.DeliverySlotDetail()
      ),
    });
  }

  /** @returns {DeliverySlotDetail} */
  static DeliverySlotDetail() {
    return Joi.object({
      delivery_slot_timing: Joi.string().allow(""),
      delivery_slot_id: Joi.number(),
    });
  }

  /** @returns {PaymentOptionsResponse} */
  static PaymentOptionsResponse() {
    return Joi.object({
      payment_options: PaymentPlatformModel.PaymentOptions().required(),
      success: Joi.boolean().required(),
      payment_breakup: Joi.any(),
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
      is_default: Joi.boolean(),
      payouts_aggregators: Joi.array().items(
        PaymentPlatformModel.PayoutAggregator()
      ),
      unique_transfer_no: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      transfer_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {PayoutsResponse} */
  static PayoutsResponse() {
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

  /** @returns {PayoutUserDetails} */
  static PayoutUserDetails() {
    return Joi.object({
      unique_external_id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      email: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }

  /** @returns {PayoutRequest} */
  static PayoutRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      users: PaymentPlatformModel.PayoutUserDetails().required(),
      unique_external_id: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      bank_details: PaymentPlatformModel.PayoutBankDetails().required(),
      transfer_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {PayoutResponse} */
  static PayoutResponse() {
    return Joi.object({
      payment_status: Joi.string().allow(""),
      users: PaymentPlatformModel.PayoutUserDetails().required(),
      aggregator: Joi.string().allow("").required(),
      unique_transfer_no: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      bank_details: PaymentPlatformModel.PayoutBankDetails().required(),
      success: Joi.boolean().required(),
      transfer_type: Joi.string().allow("").required(),
      created: Joi.boolean().required(),
      payouts: PaymentPlatformModel.PayoutDetails(),
    });
  }

  /** @returns {PayoutDetails} */
  static PayoutDetails() {
    return Joi.object({
      more_attributes: PaymentPlatformModel.BankDetails(),
      aggregator_fund_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {BankDetails} */
  static BankDetails() {
    return Joi.object({
      account_type: Joi.string().allow(""),
      city: Joi.string().allow(""),
      account_holder: Joi.string().allow(""),
      branch_name: Joi.string().allow(""),
      account_no: Joi.string().allow(""),
      bank_name: Joi.string().allow(""),
      country: Joi.string().allow(""),
      state: Joi.string().allow(""),
      ifsc_code: Joi.string().allow(""),
      aggregator_fund_id: Joi.string().allow(""),
    });
  }

  /** @returns {UpdatePayoutResponse} */
  static UpdatePayoutResponse() {
    return Joi.object({
      is_default: Joi.boolean(),
      is_active: Joi.boolean(),
      success: Joi.boolean().required(),
      bank_details: PaymentPlatformModel.PayoutBankDetails(),
      transfer_type: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
      users: PaymentPlatformModel.PayoutUserDetails(),
      unique_transfer_no: Joi.string().allow(""),
      updated: Joi.boolean(),
      payment_status: Joi.string().allow(""),
      payouts: PaymentPlatformModel.Payouts(),
    });
  }

  /** @returns {Payouts} */
  static Payouts() {
    return Joi.object({
      aggregator_fund_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {UpdatePayoutRequest} */
  static UpdatePayoutRequest() {
    return Joi.object({
      is_default: Joi.boolean(),
      is_active: Joi.boolean().required(),
      unique_external_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {DeletePayoutResponse} */
  static DeletePayoutResponse() {
    return Joi.object({
      delete: Joi.boolean(),
      unique_transfer_no: Joi.string().allow(""),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {RefundAccountResponse} */
  static RefundAccountResponse() {
    return Joi.object({
      is_verified_flag: Joi.boolean(),
      message: Joi.string().allow(""),
      data: Joi.any(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {GetRefundAccountResponse} */
  static GetRefundAccountResponse() {
    return Joi.object({
      is_verified_flag: Joi.boolean(),
      message: Joi.string().allow(""),
      data: Joi.array()
        .items(PaymentPlatformModel.BankDetailsForOTP())
        .required(),
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
      address: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      email: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      beneficiary_id: Joi.string().allow(""),
    });
  }

  /** @returns {AddBeneficiaryDetailsOTPRequest} */
  static AddBeneficiaryDetailsOTPRequest() {
    return Joi.object({
      transfer_mode: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      delights: Joi.boolean(),
      order_id: Joi.string().allow("").required(),
      details: PaymentPlatformModel.BankDetailsForOTP().required(),
    });
  }

  /** @returns {IfscCodeResponse} */
  static IfscCodeResponse() {
    return Joi.object({
      success: Joi.boolean(),
      branch_name: Joi.string().allow("").required(),
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
      aggregator_id: Joi.number().allow(null),
      is_verified: Joi.boolean().allow(null),
      status: Joi.string().allow("").allow(null),
      txn_id: Joi.string().allow("").allow(null),
      meta: Joi.any().allow(null),
      bank_name: Joi.string().allow("").allow(null).required(),
      account_no: Joi.string().allow("").allow(null).required(),
      mobile: Joi.string().allow("").allow(null),
      default_beneficiary: Joi.boolean().allow(null),
    });
  }

  /** @returns {OrderBeneficiaryResponse} */
  static OrderBeneficiaryResponse() {
    return Joi.object({
      beneficiaries: Joi.array()
        .items(PaymentPlatformModel.OrderBeneficiaryDetails())
        .allow(null, ""),
      show_beneficiary_details: Joi.boolean(),
      bank: Joi.array().items(PaymentPlatformModel.OrderBeneficiaryDetails()),
    });
  }

  /** @returns {MultiTenderPaymentMeta} */
  static MultiTenderPaymentMeta() {
    return Joi.object({
      extra_meta: Joi.any().allow(null),
      order_id: Joi.string().allow(""),
      payment_id: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      payment_gateway: Joi.string().allow(""),
      key: Joi.string().allow(""),
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

  /** @returns {PaymentConfirmationRequest} */
  static PaymentConfirmationRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
      payment_methods: Joi.array()
        .items(PaymentPlatformModel.MultiTenderPaymentMethod())
        .required(),
    });
  }

  /** @returns {PaymentConfirmationResponse} */
  static PaymentConfirmationResponse() {
    return Joi.object({
      order_id: Joi.string().allow(""),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
      errors: Joi.string().allow(""),
      return_url: Joi.string().allow(""),
    });
  }

  /** @returns {AdvancePaymentLimitConfig} */
  static AdvancePaymentLimitConfig() {
    return Joi.object({
      is_active: Joi.boolean(),
      prepayment_type: Joi.string().allow(""),
      prepayment_value: Joi.number(),
      cancellation_type: Joi.string().allow(""),
      all_cancellation_type: Joi.array().items(Joi.string().allow("")),
      all_prepayment_type: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {GetUserBULimitResponse} */
  static GetUserBULimitResponse() {
    return Joi.object({
      buisness_unit: Joi.string().allow("").required(),
      display_name: Joi.string().allow("").required(),
      config: PaymentPlatformModel.CODPaymentLimitConfig().required(),
    });
  }

  /** @returns {GetUserCODLimitResponse} */
  static GetUserCODLimitResponse() {
    return Joi.object({
      items: Joi.array()
        .items(PaymentPlatformModel.GetUserBULimitResponse())
        .required(),
      success: Joi.boolean().required(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {SetAdvanceLimitConfig} */
  static SetAdvanceLimitConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      prepayment_type: Joi.string().allow("").required(),
      prepayment_value: Joi.number().required(),
      cancellation_type: Joi.string().allow(""),
      all_cancellation_type: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {SetCODLimitConfig} */
  static SetCODLimitConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      usages: Joi.number(),
      user_id: Joi.number(),
      merchant_user_id: Joi.string().allow(""),
      limit: PaymentPlatformModel.CODLimitConfig(),
      remaining_limit: Joi.number(),
    });
  }

  /** @returns {SetUserPaymentLimitConfig} */
  static SetUserPaymentLimitConfig() {
    return Joi.object({
      advance: PaymentPlatformModel.SetAdvanceLimitConfig().required(),
      cod: PaymentPlatformModel.SetCODLimitConfig().required(),
    });
  }

  /** @returns {SetBUPaymentLimit} */
  static SetBUPaymentLimit() {
    return Joi.object({
      buisness_unit: Joi.string().allow("").required(),
      config: PaymentPlatformModel.SetUserPaymentLimitConfig().required(),
    });
  }

  /** @returns {SetCODForUserRequest} */
  static SetCODForUserRequest() {
    return Joi.object({
      mobile_no: Joi.string().allow(""),
      merchant_user_id: Joi.string().allow("").required(),
      items: Joi.array()
        .items(PaymentPlatformModel.SetBUPaymentLimit())
        .required(),
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

  /** @returns {EdcAggregatorAndModelListResponse} */
  static EdcAggregatorAndModelListResponse() {
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

  /** @returns {EdcDeviceStatsResponse} */
  static EdcDeviceStatsResponse() {
    return Joi.object({
      statistics: PaymentPlatformModel.StatisticsData().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {EdcAddRequest} */
  static EdcAddRequest() {
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

  /** @returns {EdcDeviceAddResponse} */
  static EdcDeviceAddResponse() {
    return Joi.object({
      data: PaymentPlatformModel.EdcDevice().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {EdcDeviceDetailsResponse} */
  static EdcDeviceDetailsResponse() {
    return Joi.object({
      data: PaymentPlatformModel.EdcDevice().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {EdcUpdateRequest} */
  static EdcUpdateRequest() {
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

  /** @returns {EdcDeviceUpdateResponse} */
  static EdcDeviceUpdateResponse() {
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
      total: Joi.number(),
    });
  }

  /** @returns {EdcDeviceListResponse} */
  static EdcDeviceListResponse() {
    return Joi.object({
      items: Joi.array().items(PaymentPlatformModel.EdcDevice()).required(),
      page: PaymentPlatformModel.Page().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PaymentInitializationRequest} */
  static PaymentInitializationRequest() {
    return Joi.object({
      razorpay_payment_id: Joi.string().allow("").allow(null),
      device_id: Joi.string().allow("").allow(null),
      email: Joi.string().allow(""),
      customer_id: Joi.string().allow("").required(),
      vpa: Joi.string().allow("").allow(null),
      aggregator: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      amount: Joi.number().allow(null),
      contact: Joi.string().allow(""),
      timeout: Joi.number().allow(null),
      merchant_order_id: Joi.string().allow("").required(),
      merchant_transaction_id: Joi.string().allow(""),
      method: Joi.string().allow("").required(),
    });
  }

  /** @returns {PaymentInitializationResponse} */
  static PaymentInitializationResponse() {
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
      merchant_transaction_id: Joi.string().allow(""),
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

  /** @returns {PaymentStatusUpdateRequest} */
  static PaymentStatusUpdateRequest() {
    return Joi.object({
      device_id: Joi.string().allow("").allow(null),
      email: Joi.string().allow(""),
      customer_id: Joi.string().allow(""),
      vpa: Joi.string().allow(""),
      aggregator: Joi.string().allow("").required(),
      order_id: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      amount: Joi.number().allow(null).required(),
      contact: Joi.string().allow(""),
      merchant_order_id: Joi.string().allow("").required(),
      status: Joi.string().allow(""),
      method: Joi.string().allow("").required(),
      merchant_transaction_id: Joi.string().allow(""),
      unique_link_id: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentStatusUpdateResponse} */
  static PaymentStatusUpdateResponse() {
    return Joi.object({
      redirect_url: Joi.string().allow("").allow(null),
      retry: Joi.boolean(),
      success: Joi.boolean().allow(null),
      status: Joi.string().allow("").required(),
      aggregator_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {ResendOrCancelPaymentRequest} */
  static ResendOrCancelPaymentRequest() {
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
      message: Joi.string().allow(""),
    });
  }

  /** @returns {ResendOrCancelPaymentResponse} */
  static ResendOrCancelPaymentResponse() {
    return Joi.object({
      data: PaymentPlatformModel.LinkStatus().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PaymentStatusBulkHandlerRequest} */
  static PaymentStatusBulkHandlerRequest() {
    return Joi.object({
      merchant_order_id: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {PaymentObjectListSerializer} */
  static PaymentObjectListSerializer() {
    return Joi.object({
      user_object: Joi.any().required(),
      modified_on: Joi.string().allow("").required(),
      collected_by: Joi.string().allow("").required(),
      created_on: Joi.string().allow("").required(),
      refund_object: Joi.any().allow(null),
      id: Joi.string().allow("").required(),
      payment_id: Joi.string().allow("").allow(null),
      currency: Joi.string().allow("").required(),
      current_status: Joi.string().allow("").required(),
      aggregator_payment_object: Joi.any().allow(null),
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
        PaymentPlatformModel.PaymentObjectListSerializer()
      ),
    });
  }

  /** @returns {PaymentStatusBulkHandlerResponse} */
  static PaymentStatusBulkHandlerResponse() {
    return Joi.object({
      count: Joi.number(),
      data: Joi.array().items(PaymentPlatformModel.PaymentStatusObject()),
      success: Joi.boolean().required(),
      error: Joi.string().allow(""),
      status: Joi.number().required(),
    });
  }

  /** @returns {GetOauthUrlResponse} */
  static GetOauthUrlResponse() {
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
      extension_order_id: Joi.string().allow("").allow(null).required(),
      aggregator_transaction_id: Joi.string().allow("").required(),
      aggregator_order_id: Joi.string().allow("").required(),
      shipment_details: Joi.array().items(
        PaymentPlatformModel.RepaymentRequestDetails()
      ),
    });
  }

  /** @returns {RepaymentResponse} */
  static RepaymentResponse() {
    return Joi.object({
      data: Joi.any(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {MerchantOnBoardingRequest} */
  static MerchantOnBoardingRequest() {
    return Joi.object({
      credit_line_id: Joi.string().allow("").required(),
      aggregator: Joi.string().allow("").required(),
      app_id: Joi.string().allow("").required(),
      user_id: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
    });
  }

  /** @returns {MerchantOnBoardingResponse} */
  static MerchantOnBoardingResponse() {
    return Joi.object({
      data: PaymentPlatformModel.MerchantOnboardingData().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {MerchantOnboardingData} */
  static MerchantOnboardingData() {
    return Joi.object({
      status_code: Joi.number(),
      message: Joi.string().allow(""),
      status: Joi.boolean(),
    });
  }

  /** @returns {ValidateCustomerRequest} */
  static ValidateCustomerRequest() {
    return Joi.object({
      phone_number: Joi.string().allow("").required(),
      aggregator: Joi.string().allow("").required(),
      payload: Joi.string().allow("").allow(null),
      delivery_address: PaymentPlatformModel.AddressDetail(),
      transaction_amount_in_paise: Joi.number().required(),
      order_items: Joi.array().items(PaymentPlatformModel.OrderItems()),
      merchant_params: PaymentPlatformModel.MerchantParams(),
      billing_address: PaymentPlatformModel.AddressDetail(),
    });
  }

  /** @returns {MerchantParams} */
  static MerchantParams() {
    return Joi.object({
      source: Joi.string().allow(""),
    });
  }

  /** @returns {OrderItems} */
  static OrderItems() {
    return Joi.object({
      sku: Joi.string().allow(""),
      price: Joi.number(),
      quantity: Joi.number(),
    });
  }

  /** @returns {ValidateCustomerResponse} */
  static ValidateCustomerResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      data: PaymentPlatformModel.ValidateCustomer(),
      success: Joi.boolean().required(),
      error: PaymentPlatformModel.ValidateCustomer(),
    });
  }

  /** @returns {ValidateCustomer} */
  static ValidateCustomer() {
    return Joi.object({
      data: PaymentPlatformModel.ValidateCustomerData(),
      aggregator: Joi.string().allow(""),
      api_version: Joi.number(),
    });
  }

  /** @returns {ValidateCustomerData} */
  static ValidateCustomerData() {
    return Joi.object({
      approved: Joi.boolean(),
      button_text: Joi.string().allow(""),
      first_transaction: Joi.boolean(),
      message: Joi.string().allow(""),
      amount: Joi.number(),
      user_id: Joi.string().allow(""),
      customer_mobile_number: Joi.string().allow(""),
      total_credited_balance: Joi.number(),
      is_cn_locked: Joi.boolean(),
      total_locked_amount: Joi.number(),
      allowed_redemption_amount: Joi.number(),
    });
  }

  /** @returns {GetPaymentLinkResponse} */
  static GetPaymentLinkResponse() {
    return Joi.object({
      currency: Joi.string().allow(""),
      message: Joi.string().allow("").required(),
      status_code: Joi.number().required(),
      amount: Joi.number().allow(null),
      merchant_name: Joi.string().allow("").allow(null),
      payment_link_url: Joi.string().allow("").allow(null),
      payment_link_current_status: Joi.string().allow("").allow(null),
      external_order_id: Joi.string().allow("").allow(null),
      polling_timeout: Joi.number().allow(null),
      success: Joi.boolean().required(),
      error: PaymentPlatformModel.ErrorDescription(),
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
      description: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      status_code: Joi.number(),
      message: Joi.string().allow(""),
      success: Joi.boolean().required(),
      error: PaymentPlatformModel.ErrorDescription(),
    });
  }

  /** @returns {CreatePaymentLinkMeta} */
  static CreatePaymentLinkMeta() {
    return Joi.object({
      cart_id: Joi.string().allow("").required(),
      checkout_mode: Joi.string().allow("").required(),
      amount: Joi.string().allow("").required(),
      assign_card_id: Joi.string().allow("").allow(null),
      pincode: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CreatePaymentLinkRequest} */
  static CreatePaymentLinkRequest() {
    return Joi.object({
      email: Joi.string().allow("").required(),
      amount: Joi.number().required(),
      mobile_number: Joi.string().allow("").required(),
      country_phone_code: Joi.string().allow(""),
      description: Joi.string().allow("").allow(null),
      meta: PaymentPlatformModel.CreatePaymentLinkMeta().required(),
      external_order_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreatePaymentLinkResponse} */
  static CreatePaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      status_code: Joi.number().required(),
      payment_link_url: Joi.string().allow("").allow(null),
      polling_timeout: Joi.number().allow(null),
      success: Joi.boolean().required(),
      payment_link_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PollingPaymentLinkResponse} */
  static PollingPaymentLinkResponse() {
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
      error: Joi.string().allow(""),
    });
  }

  /** @returns {CancelOrResendPaymentLinkRequest} */
  static CancelOrResendPaymentLinkRequest() {
    return Joi.object({
      payment_link_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {ResendPaymentLinkResponse} */
  static ResendPaymentLinkResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      message: Joi.string().allow("").required(),
      polling_timeout: Joi.number().allow(null),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PaymentLinkError} */
  static PaymentLinkError() {
    return Joi.object({
      cancelled: Joi.boolean(),
      msg: Joi.string().allow(""),
    });
  }

  /** @returns {CancelPaymentLinkResponse} */
  static CancelPaymentLinkResponse() {
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
      codes: Joi.array().items(PaymentPlatformModel.Code()).required(),
      name: Joi.string().allow("").required(),
      networks: Joi.array().items(Joi.string().allow("")).required(),
      types: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {GetPaymentCode} */
  static GetPaymentCode() {
    return Joi.object({
      cod: PaymentPlatformModel.PaymentCode(),
      nb: PaymentPlatformModel.PaymentCode(),
      wl: PaymentPlatformModel.PaymentCode(),
      card: PaymentPlatformModel.PaymentCode(),
      pl: PaymentPlatformModel.PaymentCode(),
      ps: PaymentPlatformModel.PaymentCode(),
      op: PaymentPlatformModel.PaymentCode(),
      upi: PaymentPlatformModel.PaymentCode(),
      qr: PaymentPlatformModel.PaymentCode(),
      fc: PaymentPlatformModel.PaymentCode(),
      pac: PaymentPlatformModel.PaymentCode(),
      stripepg: PaymentPlatformModel.PaymentCode(),
      payumoneypg: PaymentPlatformModel.PaymentCode(),
      rupifipg: PaymentPlatformModel.PaymentCode(),
      cas: PaymentPlatformModel.PaymentCode(),
      csas: PaymentPlatformModel.PaymentCode(),
      ccavenuepg: PaymentPlatformModel.PaymentCode(),
      cardless_emi: PaymentPlatformModel.PaymentCode(),
      cashback: PaymentPlatformModel.PaymentCode(),
      loyalty: PaymentPlatformModel.PaymentCode(),
      employee_discount: PaymentPlatformModel.PaymentCode(),
      paymentlink: PaymentPlatformModel.PaymentCode(),
      epaylater: PaymentPlatformModel.PaymentCode(),
      udhaari: PaymentPlatformModel.PaymentCode(),
      creditnote: PaymentPlatformModel.PaymentCode(),
      checkout: PaymentPlatformModel.PaymentCode(),
      rone: PaymentPlatformModel.PaymentCode(),
      emi: PaymentPlatformModel.PaymentCode(),
      sodexo: PaymentPlatformModel.PaymentCode(),
      jm_wallet: PaymentPlatformModel.PaymentCode(),
    });
  }

  /** @returns {GetPaymentCodeResponse} */
  static GetPaymentCodeResponse() {
    return Joi.object({
      data: PaymentPlatformModel.GetPaymentCode().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PlatformOnlineOfflinePaymentResponse} */
  static PlatformOnlineOfflinePaymentResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      items: PaymentPlatformModel.PlatformOnlineOfflineItem(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PatchPlatformOnlineOfflinePaymentResponse} */
  static PatchPlatformOnlineOfflinePaymentResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      items: Joi.array().items(
        PaymentPlatformModel.PlatformOnlineOfflineItem()
      ),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PlatformOnlineOfflineItem} */
  static PlatformOnlineOfflineItem() {
    return Joi.object({
      online: PaymentPlatformModel.OnlinePaymentDetails(),
      offline: PaymentPlatformModel.OfflinePaymentDetails(),
      advance: PaymentPlatformModel.PlatformOfflineAdvanceResponse(),
    });
  }

  /** @returns {OnlinePaymentDetails} */
  static OnlinePaymentDetails() {
    return Joi.object({
      is_active: Joi.boolean(),
      aggregators: Joi.array().items(PaymentPlatformModel.AggregatorDetails()),
    });
  }

  /** @returns {OfflinePaymentDetails} */
  static OfflinePaymentDetails() {
    return Joi.object({
      is_active: Joi.boolean(),
      payment_modes: PaymentPlatformModel.CODOffline(),
    });
  }

  /** @returns {CODOffline} */
  static CODOffline() {
    return Joi.object({
      cod: PaymentPlatformModel.CODPaymentMode(),
    });
  }

  /** @returns {AggregatorDetails} */
  static AggregatorDetails() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
      logos: PaymentPlatformModel.PaymentModeLogo(),
      slug: Joi.string().allow(""),
      is_active: Joi.boolean(),
      payment_mode: Joi.array().items(Joi.string().allow("")),
      integration_type: Joi.string().allow(""),
      config: Joi.array().items(Joi.string().allow("")),
      extension_id: Joi.string().allow("").allow(null),
      status: Joi.string().allow(""),
      is_tnc_accepted: Joi.boolean(),
      label: Joi.string().allow(""),
    });
  }

  /** @returns {CODPaymentMode} */
  static CODPaymentMode() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      id: Joi.number(),
      logos: PaymentPlatformModel.PaymentModeLogo(),
      is_active: Joi.boolean(),
    });
  }

  /** @returns {PlatformPaymentModeRequest} */
  static PlatformPaymentModeRequest() {
    return Joi.object({
      business_unit: Joi.string().allow(""),
      device: Joi.string().allow(""),
      is_active: Joi.boolean(),
      items: Joi.array().items(PaymentPlatformModel.PaymentModeItem()),
    });
  }

  /** @returns {PlatformPaymentModeResponse} */
  static PlatformPaymentModeResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      business_unit: Joi.string().allow(""),
      device: Joi.string().allow(""),
      is_active: Joi.boolean(),
      items: Joi.array().items(PaymentPlatformModel.PaymentOptionItem()),
    });
  }

  /** @returns {AggregatorPlatformPaymentModeResponse} */
  static AggregatorPlatformPaymentModeResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      business_unit: Joi.string().allow(""),
      device: Joi.string().allow(""),
      is_active: Joi.boolean(),
      save_allowed: Joi.boolean(),
      extension_id: Joi.string().allow("").allow(null),
      items: Joi.array().items(PaymentPlatformModel.PaymentOptionItem()),
    });
  }

  /** @returns {PlatformOfflineAdvanceRequest} */
  static PlatformOfflineAdvanceRequest() {
    return Joi.object({
      business_unit: Joi.string().allow(""),
      items: Joi.array().items(PaymentPlatformModel.OfflineAdvanceConfig()),
      device: PaymentPlatformModel.OfflineAdvanceDevice(),
    });
  }

  /** @returns {PlatformOfflineAdvanceResponse} */
  static PlatformOfflineAdvanceResponse() {
    return Joi.object({
      success: Joi.boolean(),
      is_active: Joi.boolean(),
      message: Joi.string().allow(""),
      items: Joi.array().items(
        PaymentPlatformModel.OfflineAdvanceConfigurationItem()
      ),
      errors: PaymentPlatformModel.ErrorCodeAndDescription(),
      error: PaymentPlatformModel.ErrorCodeAndDescription(),
    });
  }

  /** @returns {OfflineAdvanceConfigurationItem} */
  static OfflineAdvanceConfigurationItem() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      business_unit: Joi.string().allow(""),
      config: PaymentPlatformModel.OfflineAdvanceConfig(),
      device: PaymentPlatformModel.OfflineAdvanceDevice(),
    });
  }

  /** @returns {OfflineAdvanceDevice} */
  static OfflineAdvanceDevice() {
    return Joi.object({
      android: Joi.boolean(),
      ios: Joi.boolean(),
      desktop: Joi.boolean(),
    });
  }

  /** @returns {OfflineAdvanceConfig} */
  static OfflineAdvanceConfig() {
    return Joi.object({
      anonymous: Joi.boolean(),
      user_limit: Joi.number().allow(null),
      charges: Joi.number(),
      charges_max_value: Joi.number(),
      charges_min_value: Joi.number(),
      max_order_value: Joi.number(),
      min_order_value: Joi.number(),
      is_active: Joi.boolean().allow(null),
      name: Joi.string().allow(""),
      number_of_split: Joi.number(),
      slug: Joi.string().allow(""),
      save_allowed: Joi.boolean(),
      prepayment_type: Joi.string().allow(""),
      prepayment_value: Joi.number(),
      refund_time_limit: Joi.number(),
      time_unit: Joi.string().allow(""),
      cancellation_type: Joi.string().allow(""),
      all_cancellation_type: Joi.array().items(
        Joi.string().allow("").allow(null)
      ),
      allow_custom_advance_amount: Joi.boolean(),
      description: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentModeItem} */
  static PaymentModeItem() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
      logos: PaymentPlatformModel.PaymentModeLogo(),
      is_active: Joi.boolean(),
      priority: Joi.number(),
      sub_payment_mode: Joi.array().items(
        PaymentPlatformModel.SubPaymentMode()
      ),
    });
  }

  /** @returns {MerchantPaymentModeRequest} */
  static MerchantPaymentModeRequest() {
    return Joi.object({
      offline: PaymentPlatformModel.ModeIsactive(),
      online: PaymentPlatformModel.ModeIsactive(),
    });
  }

  /** @returns {ModeIsactive} */
  static ModeIsactive() {
    return Joi.object({
      is_active: Joi.boolean(),
    });
  }

  /** @returns {OfferSerializer} */
  static OfferSerializer() {
    return Joi.object({
      offer_amount: Joi.number(),
      offer_code: Joi.string().allow(""),
      offer_description: Joi.string().allow(""),
      offer_id: Joi.string().allow(""),
    });
  }

  /** @returns {AppliedOfferSerializer} */
  static AppliedOfferSerializer() {
    return Joi.object({
      total_applied_offer_amount: Joi.number(),
      offer_list: Joi.array().items(PaymentPlatformModel.OfferSerializer()),
    });
  }

  /** @returns {OrderDetail} */
  static OrderDetail() {
    return Joi.object({
      gid: Joi.string().allow("").required(),
      amount: Joi.number().required(),
      status: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      aggregator_order_details: PaymentPlatformModel.AggregatorOrderDetail().required(),
      aggregator: Joi.string().allow("").required(),
    });
  }

  /** @returns {AggregatorOrderDetail} */
  static AggregatorOrderDetail() {
    return Joi.object({
      aggregator_order_id: Joi.string().allow(""),
      amount: Joi.number(),
      currency: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {GoogleMapPoint} */
  static GoogleMapPoint() {
    return Joi.object({
      address: Joi.string().allow(""),
      sub_locality: Joi.string().allow(""),
    });
  }

  /** @returns {AddressDetail} */
  static AddressDetail() {
    return Joi.object({
      line1: Joi.string().allow(""),
      line2: Joi.string().allow(""),
      google_map_point: PaymentPlatformModel.GoogleMapPoint(),
      landmark: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      country_iso_code: Joi.string().allow(""),
      area_code: Joi.string().allow(""),
      country: Joi.string().allow("").required(),
      expire_at: Joi.string().allow(""),
      geo_location: Joi.any(),
      state: Joi.string().allow("").required(),
      area: Joi.string().allow(""),
      g_address_id: Joi.string().allow(""),
      area_code_slug: Joi.string().allow(""),
      country_phone_code: Joi.string().allow(""),
      name: Joi.string().allow(""),
      address_type: Joi.string().allow("").allow(null),
      address: Joi.string().allow(""),
      email: Joi.string().allow(""),
      city: Joi.string().allow("").required(),
      tags: Joi.array().items(Joi.any()),
      pincode: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {LatLongDetail} */
  static LatLongDetail() {
    return Joi.object({
      latitude: Joi.string().allow(""),
      longitude: Joi.string().allow(""),
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
      payment_methods: Joi.array()
        .items(PaymentPlatformModel.PaymentMode())
        .required(),
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
      meta: Joi.any(),
      status: Joi.string().allow("").required(),
    });
  }

  /** @returns {AmountSerializer} */
  static AmountSerializer() {
    return Joi.object({
      value: Joi.number().required(),
      currency: Joi.string().allow("").required(),
    });
  }

  /** @returns {ChargeAmountSerializer} */
  static ChargeAmountSerializer() {
    return Joi.object({
      ordering_currency: PaymentPlatformModel.AmountSerializer().required(),
      base_currency: PaymentPlatformModel.AmountSerializer().required(),
    });
  }

  /** @returns {CartChargesSerializer} */
  static CartChargesSerializer() {
    return Joi.object({
      charge_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      code: Joi.string().allow(""),
      amount: PaymentPlatformModel.ChargeAmountSerializer(),
    });
  }

  /** @returns {GetPaymentSessionResponse} */
  static GetPaymentSessionResponse() {
    return Joi.object({
      meta: Joi.any(),
      gid: Joi.string().allow("").required(),
      applied_payment_offers: PaymentPlatformModel.AppliedOfferSerializer(),
      checksum: Joi.string().allow(""),
      status: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      payment_details: PaymentPlatformModel.PaymentSessionDetail().required(),
      cart_details: PaymentPlatformModel.CartDetailsSerializer(),
      total_amount: Joi.number().required(),
      refund_details: Joi.array().items(
        PaymentPlatformModel.RefundDetailsSerializer()
      ),
    });
  }

  /** @returns {PaymentSessionRequestSerializer} */
  static PaymentSessionRequestSerializer() {
    return Joi.object({
      meta: Joi.any(),
      gid: Joi.string().allow("").required(),
      applied_payment_offers: PaymentPlatformModel.AppliedOfferSerializer(),
      checksum: Joi.string().allow(""),
      order_details: PaymentPlatformModel.OrderDetail().required(),
      status: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      payment_details: Joi.array()
        .items(PaymentPlatformModel.PaymentSessionDetail())
        .required(),
      total_amount: Joi.number().required(),
      source: Joi.string().allow(""),
    });
  }

  /** @returns {TransactionDetail} */
  static TransactionDetail() {
    return Joi.object({
      transaction_id: Joi.string().allow("").required(),
      payment_mode: Joi.string().allow("").required(),
      amount: Joi.number().required(),
      payment_id: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentSessionResponseSerializer} */
  static PaymentSessionResponseSerializer() {
    return Joi.object({
      gid: Joi.string().allow(""),
      platform_transaction_details: Joi.array().items(Joi.any()),
      status: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      total_amount: Joi.number(),
      error: Joi.string().allow(""),
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      transaction_details: Joi.array().items(
        PaymentPlatformModel.TransactionDetail()
      ),
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
      currency: Joi.string().allow("").required(),
      transfer_reversal: Joi.string().allow(""),
      balance_transaction: Joi.string().allow(""),
    });
  }

  /** @returns {RefundSessionRequestSerializer} */
  static RefundSessionRequestSerializer() {
    return Joi.object({
      meta: Joi.any(),
      gid: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      payment_details: PaymentPlatformModel.PaymentSessionDetail().required(),
      checksum: Joi.string().allow(""),
      total_amount: Joi.number().required(),
      refund_details: Joi.array().items(
        PaymentPlatformModel.RefundSessionDetail()
      ),
      error: PaymentPlatformModel.ErrorDescription(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {RefundSessionResponseSerializer} */
  static RefundSessionResponseSerializer() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      gid: Joi.string().allow(""),
      status: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      platform_refund_details: Joi.array().items(Joi.any()),
      total_refund_amount: Joi.number(),
    });
  }

  /** @returns {PaymentDetailsSerializer} */
  static PaymentDetailsSerializer() {
    return Joi.object({
      payment_methods: Joi.array().items(Joi.any()).required(),
      gid: Joi.string().allow("").required(),
      amount_refunded: Joi.number(),
      currency: Joi.string().allow("").required(),
      mode: Joi.string().allow("").required(),
      merchant_locale: Joi.string().allow(""),
      meta: Joi.any().allow(null),
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

  /** @returns {CartDetailsSerializer} */
  static CartDetailsSerializer() {
    return Joi.object({
      items: Joi.any().required(),
      articles: Joi.array().items(Joi.any()).required(),
      cart_value: Joi.number().required(),
      total_quantity: Joi.number(),
      custom_cart_meta: Joi.object().pattern(/\S/, Joi.any()),
      cart_charges: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {RefundDetailsSerializer} */
  static RefundDetailsSerializer() {
    return Joi.object({
      amount: Joi.number().required(),
      currency: Joi.string().allow("").required(),
      request_id: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      created: Joi.string().allow("").required(),
      refund_utr: Joi.string().allow("").required(),
    });
  }

  /** @returns {PaymentSessionSerializer} */
  static PaymentSessionSerializer() {
    return Joi.object({
      payment_details: Joi.any().required(),
      currency: Joi.string().allow("").allow(null),
      status: Joi.string().allow("").required(),
      total_amount: Joi.number().required(),
      gid: Joi.string().allow("").allow(null).required(),
      cart_details: PaymentPlatformModel.CartDetailsSerializer(),
      refund_details: Joi.array()
        .items(PaymentPlatformModel.RefundDetailsSerializer())
        .required(),
    });
  }

  /** @returns {RefundSourcesPriority} */
  static RefundSourcesPriority() {
    return Joi.object({
      enabled: Joi.boolean(),
      description: Joi.string().allow("").required(),
      priority: Joi.number().required(),
      source: Joi.string().allow("").required(),
    });
  }

  /** @returns {RefundPriorityResponseSerializer} */
  static RefundPriorityResponseSerializer() {
    return Joi.object({
      configuration: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
      apportion: Joi.boolean().required(),
      business_unit: Joi.string().allow("").required(),
      settle_offline: Joi.boolean(),
      refund_sources_priority: Joi.array()
        .items(PaymentPlatformModel.RefundSourcesPriority())
        .required(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {RefundPriorityRequestSerializer} */
  static RefundPriorityRequestSerializer() {
    return Joi.object({
      settle_offline: Joi.boolean(),
      apportion: Joi.boolean().required(),
      refund_sources_priority: Joi.array()
        .items(PaymentPlatformModel.RefundSourcesPriority())
        .required(),
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
      device: Joi.array().items(Joi.string().allow("")).required(),
      business_unit: Joi.string().allow("").required(),
    });
  }

  /** @returns {PlatformPaymentModeCopyConfigRequest} */
  static PlatformPaymentModeCopyConfigRequest() {
    return Joi.object({
      from_config: PaymentPlatformModel.FromConfig().required(),
      to_config: PaymentPlatformModel.ToConfig().required(),
    });
  }

  /** @returns {PaymentMethodsMetaOrder} */
  static PaymentMethodsMetaOrder() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),
      merchant_code: Joi.string().allow(""),
      payment_gateway: Joi.string().allow("").required(),
      payment_extra_identifiers: Joi.any(),
      logo_url: PaymentPlatformModel.PaymentModeLogo(),
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

  /** @returns {PaymentOrderRequest} */
  static PaymentOrderRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
      payment_methods: Joi.array().items(
        PaymentPlatformModel.PaymentOrderMethods()
      ),
      shipment_id: Joi.string().allow(""),
      customer_details: PaymentPlatformModel.CustomerDetails(),
    });
  }

  /** @returns {CustomerDetails} */
  static CustomerDetails() {
    return Joi.object({
      email: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      name: Joi.string().allow(""),
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
      url: Joi.string().allow(""),
      encdata: Joi.string().allow(""),
      checksum: Joi.string().allow(""),
      mcode: Joi.string().allow(""),
      success: Joi.boolean(),
      status: Joi.string().allow(""),
      id: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      user: Joi.string().allow(""),
      merchant_transaction_id: Joi.string().allow(""),
      payment_mode_identifier: Joi.string().allow(""),
      bank: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PaymentOrderResponse} */
  static PaymentOrderResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
      payment_confirm_url: Joi.string().allow("").allow(null),
      callback_url: Joi.string().allow("").allow(null),
      status_code: Joi.number(),
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
    }).allow(null);
  }

  /** @returns {AggregatorVersionResponse} */
  static AggregatorVersionResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
      items: Joi.array()
        .items(PaymentPlatformModel.AggregatorVersionItemSchema())
        .allow(null, ""),
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

  /** @returns {AggregatorControlRequest} */
  static AggregatorControlRequest() {
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
      customer: PaymentPlatformModel.PaymentCustomConfigCustomerSchema(),
      payment_mode: Joi.link("#PaymentCustomConfigDetailsSchema"),
      min_order_value: Joi.number(),
      available: Joi.boolean(),
      pre_order: Joi.array().items(Joi.string().allow("")),
      post_order: Joi.array().items(Joi.string().allow("")),
    }).id("PaymentCustomConfigDetailsSchema");
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
      message: Joi.string().allow(""),
      items: Joi.array()
        .items(PaymentPlatformModel.PaymentModeCustomConfigSchema())
        .required(),
    });
  }

  /** @returns {DeleteBeneficiaryRequest} */
  static DeleteBeneficiaryRequest() {
    return Joi.object({
      beneficiary_id: Joi.string().allow(""),
    });
  }

  /** @returns {DeleteRefundAccountResponse} */
  static DeleteRefundAccountResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      message: Joi.string().allow("").allow(null).required(),
    });
  }

  /** @returns {RefundOptionsDetails} */
  static RefundOptionsDetails() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),
      id: Joi.number().required(),
      is_active: Joi.boolean().allow(null),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {RefundOptions} */
  static RefundOptions() {
    return Joi.object({
      items: PaymentPlatformModel.RefundOptionsDetails().required(),
      offline_refund_collect_type: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {OfflineRefundOptions} */
  static OfflineRefundOptions() {
    return Joi.object({
      items: PaymentPlatformModel.RefundOptionsDetails().required(),
      payment_modes: Joi.array().items(Joi.string().allow("")).required(),
      offline_refund_collect_type: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {RefundOptionResponse} */
  static RefundOptionResponse() {
    return Joi.object({
      offline_refund_options: PaymentPlatformModel.OfflineRefundOptions().required(),
      success: Joi.boolean().required(),
      refund_options: PaymentPlatformModel.RefundOptions().required(),
    });
  }

  /** @returns {SelectedRefundOptionResponse} */
  static SelectedRefundOptionResponse() {
    return Joi.object({
      transfer_mode: PaymentPlatformModel.TransferMode().required(),
      shipment_id: Joi.string().allow("").allow(null).required(),
      message: Joi.string().allow("").allow(null).required(),
      success: Joi.boolean().required(),
      beneficiary_details: Joi.any(),
    });
  }

  /** @returns {TransferMode} */
  static TransferMode() {
    return Joi.object({
      mode: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {WalletBeneficiaryDetails} */
  static WalletBeneficiaryDetails() {
    return Joi.object({
      beneficiary_id: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      display_name: Joi.string().allow("").required(),
      id: Joi.number().required(),
      subtitle: Joi.string().allow("").required(),
      transfer_mode: Joi.string().allow("").required(),
      mobile: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      created_on: Joi.string().allow("").required(),
      address: Joi.string().allow("").required(),
      title: Joi.string().allow("").required(),
      wallet_address: Joi.string().allow("").required(),
      comment: Joi.string().allow(""),
      wallet: Joi.string().allow(""),
      email: Joi.string().allow("").required(),
      delights_user_name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {UpiBeneficiaryDetails} */
  static UpiBeneficiaryDetails() {
    return Joi.object({
      beneficiary_id: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      display_name: Joi.string().allow("").required(),
      id: Joi.number().required(),
      subtitle: Joi.string().allow("").required(),
      transfer_mode: Joi.string().allow("").required(),
      vpa: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      vpa_address: Joi.string().allow("").required(),
      created_on: Joi.string().allow("").required(),
      address: Joi.string().allow("").required(),
      title: Joi.string().allow("").required(),
      comment: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      email: Joi.string().allow("").required(),
      delights_user_name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {BeneficiaryRefundOptions} */
  static BeneficiaryRefundOptions() {
    return Joi.object({
      bank: Joi.array().items(PaymentPlatformModel.OrderBeneficiaryDetails()),
      wallet: PaymentPlatformModel.WalletBeneficiaryDetails(),
      upi: PaymentPlatformModel.UpiBeneficiaryDetails(),
    });
  }

  /** @returns {OrderBeneficiaryResponseSchemaV2} */
  static OrderBeneficiaryResponseSchemaV2() {
    return Joi.object({
      show_beneficiary_details: Joi.boolean().required(),
      data: PaymentPlatformModel.BeneficiaryRefundOptions().required(),
      limit: PaymentPlatformModel.RefundOptionsLimit().required(),
    });
  }

  /** @returns {RefundOptionsLimit} */
  static RefundOptionsLimit() {
    return Joi.object({
      bank: Joi.number(),
      wallet: Joi.number(),
      upi: Joi.number(),
    });
  }

  /** @returns {ValidateValidateAddressRequest} */
  static ValidateValidateAddressRequest() {
    return Joi.object({
      ifsc_code: Joi.string().allow("").allow(null),
      upi_vpa: Joi.string().allow("").allow(null),
      aggregator: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {VPADetails} */
  static VPADetails() {
    return Joi.object({
      is_valid: Joi.boolean().required(),
      upi_vpa: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      customer_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {ValidateValidateAddressResponse} */
  static ValidateValidateAddressResponse() {
    return Joi.object({
      upi: PaymentPlatformModel.VPADetails(),
      success: Joi.boolean().required(),
      ifsc: Joi.any(),
      vpa: PaymentPlatformModel.VPADetails(),
    });
  }

  /** @returns {SetDefaultBeneficiaryRequest} */
  static SetDefaultBeneficiaryRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
      beneficiary_id: Joi.string().allow("").required(),
      shipment_id: Joi.string().allow(""),
      merchant_shipment_id: Joi.string().allow(""),
    });
  }

  /** @returns {SetDefaultBeneficiaryResponse} */
  static SetDefaultBeneficiaryResponse() {
    return Joi.object({
      is_beneficiary_set: Joi.boolean().required(),
      success: Joi.boolean(),
    });
  }

  /** @returns {ShipmentRefundRequestMeta} */
  static ShipmentRefundRequestMeta() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      utr: Joi.string().allow(""),
      notes: Joi.string().allow("").allow(null),
      billing_employee_code: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ShipmentRefundRequest} */
  static ShipmentRefundRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
      transfer_mode: Joi.string().allow("").required(),
      beneficiary_id: Joi.string().allow("").allow(null),
      shipment_ids: Joi.array()
        .items(Joi.string().allow(""))
        .allow(null, "")
        .required(),
      meta: PaymentPlatformModel.ShipmentRefundRequestMeta(),
    });
  }

  /** @returns {ShipmentRefundDetail} */
  static ShipmentRefundDetail() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
      transfer_mode: Joi.string().allow("").required(),
      beneficiary_id: Joi.string().allow("").required(),
      shipment_ids: Joi.array()
        .items(Joi.string().allow(""))
        .allow(null, "")
        .required(),
    });
  }

  /** @returns {ShipmentRefundResponse} */
  static ShipmentRefundResponse() {
    return Joi.object({
      data: PaymentPlatformModel.ShipmentRefundDetail(),
      success: Joi.boolean(),
      message: Joi.string().allow("").allow(null),
      refund_options: Joi.string().allow(""),
      refund_options_priority: PaymentPlatformModel.RefundOptionsPriority(),
      offline_refund_options_priority: PaymentPlatformModel.RefundOptionsPriority(),
    });
  }

  /** @returns {RefundOptionsPriority} */
  static RefundOptionsPriority() {
    return Joi.object({
      payment_modes: Joi.array().items(Joi.string().allow("")),
      items: Joi.array().items(PaymentPlatformModel.RefundItem()),
      payment_gateways: Joi.array().items(Joi.string().allow("")),
      offline_refund_collect_type: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {RefundItem} */
  static RefundItem() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      is_active: Joi.boolean(),
    });
  }

  /** @returns {PennyDropValidationResponse} */
  static PennyDropValidationResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      message: Joi.string().allow("").allow(null).required(),
      allow_pennydrop_validation: Joi.boolean().required(),
    });
  }

  /** @returns {UpdatePennyDropValidationRequest} */
  static UpdatePennyDropValidationRequest() {
    return Joi.object({
      allow_pennydrop_validation: Joi.boolean().required(),
    });
  }

  /** @returns {AggregatorConfigResponse} */
  static AggregatorConfigResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      items: Joi.array().items(PaymentPlatformModel.PaymentOptionItem()),
    });
  }

  /** @returns {PaymentModeResponse} */
  static PaymentModeResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      items: Joi.array().items(PaymentPlatformModel.PaymentMode()),
    });
  }

  /** @returns {PaymentOptionItem} */
  static PaymentOptionItem() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
      priority: Joi.number(),
      display_name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      integration_type: Joi.string().allow(""),
      logos: PaymentPlatformModel.PaymentModeLogo(),
      is_active: Joi.boolean(),
      config: Joi.array().items(Joi.string().allow("")),
      payment_modes: Joi.array().items(PaymentPlatformModel.PaymentMode()),
      payment_mode: Joi.array().items(PaymentPlatformModel.PaymentMode()),
      checkout_type: Joi.string().allow(""),
      country: Joi.array().items(Joi.string().allow("")),
      currency: Joi.array().items(Joi.string().allow("")),
      status: Joi.string().allow(""),
      save_allowed: Joi.boolean(),
      extension_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PaymentMode} */
  static PaymentMode() {
    return Joi.object({
      id: Joi.number(),
      priority: Joi.number(),
      name: Joi.string().allow(""),
      code: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      is_active: Joi.boolean(),
      merchant_transaction_id: Joi.string().allow(""),
      amount: Joi.number(),
      payment_id: Joi.string().allow(""),
      logos: PaymentPlatformModel.PaymentModeLogo(),
      sub_payment_mode: Joi.array().items(
        PaymentPlatformModel.SubPaymentMode()
      ),
    });
  }

  /** @returns {SubPaymentMode} */
  static SubPaymentMode() {
    return Joi.object({
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      code: Joi.string().allow(""),
      priority: Joi.number(),
      is_active: Joi.boolean(),
      logo: Joi.string().allow(""),
      logos: PaymentPlatformModel.PaymentModeLogo(),
    });
  }

  /** @returns {AggregatorCredentialRequest} */
  static AggregatorCredentialRequest() {
    return Joi.object({
      success: Joi.boolean(),
      ccavenue: PaymentPlatformModel.AggregatorCredential(),
      juspay: PaymentPlatformModel.AggregatorCredential(),
      razorpay: PaymentPlatformModel.AggregatorCredential(),
      potlee: PaymentPlatformModel.AggregatorCredential(),
      jio: PaymentPlatformModel.AggregatorCredential(),
      is_active: Joi.boolean(),
      app_id: Joi.string().allow(""),
    });
  }

  /** @returns {PatchAggregatorCredentialResponse} */
  static PatchAggregatorCredentialResponse() {
    return Joi.object({
      success: Joi.boolean(),
      aggregators: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {AggregatorCredentialResponse} */
  static AggregatorCredentialResponse() {
    return Joi.object({
      success: Joi.boolean(),
      created: Joi.boolean(),
      app_id: Joi.string().allow(""),
      excluded_fields: Joi.array().items(Joi.string().allow("")),
      display_fields: Joi.array().items(Joi.string().allow("")),
      aggregators: Joi.array().items(
        PaymentPlatformModel.AggregatorCredential()
      ),
    });
  }

  /** @returns {AggregatorCredential} */
  static AggregatorCredential() {
    return Joi.object({
      key: Joi.string().allow(""),
      secret: Joi.string().allow(""),
      merchant_id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      config_type: Joi.string().allow(""),
      display: PaymentPlatformModel.AggregatorDisplayItem(),
      aggregator: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      integration_type: Joi.string().allow(""),
    });
  }

  /** @returns {AggregatorDisplayItem} */
  static AggregatorDisplayItem() {
    return Joi.object({
      info: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      link: Joi.string().allow(""),
      text: Joi.string().allow(""),
      description: Joi.string().allow("").allow(null),
      review_status: Joi.string().allow(""),
    });
  }

  /** @returns {GetDeviceResponse} */
  static GetDeviceResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      success: Joi.boolean(),
      items: PaymentPlatformModel.BusinessUnitDevice(),
    });
  }

  /** @returns {BusinessUnitDevice} */
  static BusinessUnitDevice() {
    return Joi.object({
      business_unit: Joi.array().items(PaymentPlatformModel.BusinessUnit()),
      device: Joi.array().items(PaymentPlatformModel.Device()),
    });
  }

  /** @returns {BusinessUnit} */
  static BusinessUnit() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {Device} */
  static Device() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {AggregatorHistoryResponse} */
  static AggregatorHistoryResponse() {
    return Joi.object({
      success: Joi.boolean(),
      items: Joi.array().items(PaymentPlatformModel.HistoryItem()),
    });
  }

  /** @returns {HistoryItem} */
  static HistoryItem() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      updated_on: Joi.string().allow(""),
      reviewer: Joi.string().allow(""),
      comments: Joi.string().allow(""),
      review_status: Joi.string().allow(""),
      is_active: Joi.boolean(),
      config_type: Joi.string().allow(""),
      public_token: Joi.string().allow(""),
      razorpay_account_id: Joi.string().allow(""),
      key: Joi.string().allow(""),
      secret: Joi.string().allow(""),
      webhook_secret: Joi.string().allow(""),
    });
  }

  /** @returns {CheckoutType} */
  static CheckoutType() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {Mode} */
  static Mode() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {Country} */
  static Country() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {Currency} */
  static Currency() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {RefundTo} */
  static RefundTo() {
    return Joi.object({
      source: Joi.string().allow(""),
      others: Joi.string().allow(""),
    }).allow(null);
  }

  /** @returns {PaymentMethodConfigResponse} */
  static PaymentMethodConfigResponse() {
    return Joi.object({
      success: Joi.boolean(),
      refund_to: PaymentPlatformModel.RefundTo(),
      required_session_paths: Joi.array().items(
        PaymentPlatformModel.RequiredSessionPath()
      ),
      payment_methods: Joi.array().items(PaymentPlatformModel.PaymentMode()),
      checkout_type: Joi.array().items(PaymentPlatformModel.CheckoutType()),
      auto_capture: Joi.array().items(Joi.boolean()),
      mode: Joi.array().items(PaymentPlatformModel.Mode()),
      country: Joi.array().items(PaymentPlatformModel.Country()),
      currency: Joi.array().items(PaymentPlatformModel.Currency()),
    });
  }

  /** @returns {RequiredSessionPath} */
  static RequiredSessionPath() {
    return Joi.object({
      version: Joi.string().allow(""),
      paths: Joi.array().items(PaymentPlatformModel.SessionItem()),
    });
  }

  /** @returns {SessionItem} */
  static SessionItem() {
    return Joi.object({
      type: Joi.string().allow(""),
      uri_path: Joi.string().allow(""),
      content_type: Joi.string().allow(""),
      methods: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PaymentErrorCodeAndResponse} */
  static PaymentErrorCodeAndResponse() {
    return Joi.object({
      error: PaymentPlatformModel.PaymentError(),
      success: Joi.boolean(),
      error_msg: Joi.string().allow(""),
      status: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentError} */
  static PaymentError() {
    return Joi.object({
      order_id: Joi.array().items(Joi.string().allow("")),
      order_type: Joi.array().items(Joi.string().allow("")),
      transaction_amount_in_paise: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ShipmentBeneficiaryDetailsResponse} */
  static ShipmentBeneficiaryDetailsResponse() {
    return Joi.object({
      success: Joi.boolean(),
      shipment_id: Joi.string().allow(""),
      transfer_mode: PaymentPlatformModel.TransferMode(),
      message: Joi.string().allow(""),
      beneficiary_details: Joi.string().allow(""),
    });
  }
}
module.exports = PaymentPlatformModel;
