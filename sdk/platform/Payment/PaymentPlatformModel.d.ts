export = PaymentPlatformModel;
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
declare class PaymentPlatformModel {
}
declare namespace PaymentPlatformModel {
    export { PaymentGatewayConfigResponse, AggregatorConfig, DisplayDetails, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, RefundErrorCodeAndResponse, PaymentOptionErrorCodeAndResponse, RefundOptionErrorCodeAndResponse, UserCODAdvanceErrorCodeAndResponse, UserCodErrorMessage, RefundOptionMessage, RefundOptionError, PaymentOptionError, PaymentSessionError, PaymentErrorCodeDescription, EDCError, IFSCErrorData, IntentAppErrorList, ProductCODData, CODChargesLimitsResponse, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, Version, VersionDetails, PaymentOptions, PaymentFlowData, PaymentConfig, GatewayData, SDKDetails, SDKConfig, UserData, AggregatorRouteData, AggregatorRoute, PaymentFlow, PaymentOptionAndFlow, AdvanceObject, SplitObject, AdvancePaymentObject, PaymentModeRouteResponse, DeliverySlot, DeliverySlotDetail, PaymentOptionsResponse, PayoutCustomer, PayoutMoreAttributes, PayoutAggregator, Payout, PayoutsResponse, PayoutBankDetails, PayoutUserDetails, PayoutRequest, PayoutResponse, PayoutDetails, BankDetails, UpdatePayoutResponse, Payouts, UpdatePayoutRequest, DeletePayoutResponse, RefundAccountResponse, GetRefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, AdvancePaymentLimitConfig, CODLimitConfig, CODPaymentLimitConfig, GetUserBULimitResponse, GetUserCODLimitResponse, SetAdvanceLimitConfig, SetCODLimitConfig, SetUserPaymentLimitConfig, SetBUPaymentLimit, SetCODForUserRequest, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, Page, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, PaymentStatusBulkHandlerRequest, PaymentObjectListSerializer, PaymentStatusObject, PaymentStatusBulkHandlerResponse, GetOauthUrlResponse, RevokeOAuthToken, RepaymentRequestDetails, RepaymentDetailsSerialiserPayAll, RepaymentResponse, MerchantOnBoardingRequest, MerchantOnBoardingResponse, MerchantOnboardingData, ValidateCustomerRequest, MerchantParams, OrderItems, ValidateCustomerResponse, ValidateCustomer, ValidateCustomerData, GetPaymentLinkResponse, ErrorDescription, ErrorResponse, CreatePaymentLinkMeta, CreatePaymentLinkRequest, CreatePaymentLinkResponse, PollingPaymentLinkResponse, CancelOrResendPaymentLinkRequest, ResendPaymentLinkResponse, PaymentLinkError, CancelPaymentLinkResponse, Code, PaymentCode, GetPaymentCode, GetPaymentCodeResponse, PlatformOnlineOfflinePaymentResponse, PatchPlatformOnlineOfflinePaymentResponse, PlatformOnlineOfflineItem, OnlinePaymentDetails, OfflinePaymentDetails, CODOffline, AggregatorDetails, CODPaymentMode, PlatformPaymentModeRequest, PlatformPaymentModeResponse, AggregatorPlatformPaymentModeResponse, PlatformOfflineAdvanceRequest, PlatformOfflineAdvanceResponse, OfflineAdvanceConfigurationItem, OfflineAdvanceDevice, OfflineAdvanceConfig, PaymentModeItem, MerchantPaymentModeRequest, ModeIsactive, OfferSerializer, AppliedOfferSerializer, OrderDetail, AggregatorOrderDetail, GoogleMapPoint, AddressDetail, LatLongDetail, PaymentSessionDetail, AmountSerializer, ChargeAmountSerializer, CartChargesSerializer, GetPaymentSessionResponse, PaymentSessionRequestSerializer, TransactionDetail, PaymentSessionResponseSerializer, RefundSessionDetail, RefundSessionRequestSerializer, RefundSessionResponseSerializer, PaymentDetailsSerializer, CartDetailsSerializer, RefundDetailsSerializer, PaymentSessionSerializer, RefundSourcesPriority, RefundPriorityResponseSerializer, RefundPriorityRequestSerializer, FromConfig, ToConfig, PlatformPaymentModeCopyConfigRequest, PaymentMethodsMetaOrder, PaymentOrderMethods, PaymentOrderRequest, CustomerDetails, PaymentOrderData, PaymentOrderResponse, AggregatorVersionItemSchema, AggregatorVersionResponse, AggregatorVersionRequestSchema, AggregatorControlRequest, PaymentModeCustomConfigSchema, PaymentCustomConfigDetailsSchema, PaymentCustomConfigCustomerSchema, PaymentCustomConfigModeSchema, PaymentCustomConfigDetailsRequestSchema, PaymentCustomConfigCustomerRequestSchema, PaymentCustomConfigRequestSchema, PaymentCustomConfigResponseSchema, DeleteBeneficiaryRequest, DeleteRefundAccountResponse, RefundOptionsDetails, RefundOptions, OfflineRefundOptions, RefundOptionResponse, SelectedRefundOptionResponse, TransferMode, WalletBeneficiaryDetails, UpiBeneficiaryDetails, BeneficiaryRefundOptions, OrderBeneficiaryResponseSchemaV2, RefundOptionsLimit, ValidateValidateAddressRequest, VPADetails, ValidateValidateAddressResponse, SetDefaultBeneficiaryRequest, SetDefaultBeneficiaryResponse, ShipmentRefundRequestMeta, ShipmentRefundRequest, ShipmentRefundDetail, ShipmentRefundResponse, RefundOptionsPriority, RefundItem, PennyDropValidationResponse, UpdatePennyDropValidationRequest, AggregatorConfigResponse, PaymentModeResponse, PaymentOptionItem, PaymentMode, SubPaymentMode, AggregatorCredentialRequest, PatchAggregatorCredentialResponse, AggregatorCredentialResponse, AggregatorCredential, AggregatorDisplayItem, GetDeviceResponse, BusinessUnitDevice, BusinessUnit, Device, AggregatorHistoryResponse, HistoryItem, CheckoutType, Mode, Country, Currency, RefundTo, PaymentMethodConfigResponse, RequiredSessionPath, SessionItem, PaymentErrorCodeAndResponse, PaymentError, ShipmentBeneficiaryDetailsResponse };
}
/** @returns {PaymentGatewayConfigResponse} */
declare function PaymentGatewayConfigResponse(): PaymentGatewayConfigResponse;
type PaymentGatewayConfigResponse = {
    /**
     * - List of all config specific to
     * the aggregator with their Details.
     */
    aggregators?: AggregatorConfig[];
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
/** @returns {AggregatorConfig} */
declare function AggregatorConfig(): AggregatorConfig;
type AggregatorConfig = {
    is_active?: boolean;
    config_type?: string;
    display?: DisplayDetails;
    aggregator?: string;
    logo?: string;
    display_name?: string;
};
/** @returns {DisplayDetails} */
declare function DisplayDetails(): DisplayDetails;
type DisplayDetails = {
    link?: string;
    text?: string;
    description?: string;
    review_status?: string;
    info?: string[];
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
    merchant_salt?: string;
};
/** @returns {PaymentGatewayConfigRequest} */
declare function PaymentGatewayConfigRequest(): PaymentGatewayConfigRequest;
type PaymentGatewayConfigRequest = {
    /**
     * - Application Id to which Payment config Mapped
     */
    app_id: string;
    /**
     * - Enable or Disable Flag
     */
    is_active?: boolean;
    ccavenue?: PaymentGatewayConfig;
    razorpay?: PaymentGatewayConfig;
    juspay?: PaymentGatewayConfig;
};
/** @returns {PaymentGatewayToBeReviewed} */
declare function PaymentGatewayToBeReviewed(): PaymentGatewayToBeReviewed;
type PaymentGatewayToBeReviewed = {
    /**
     * - List of added payment gateway
     */
    aggregators: string[];
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
    code?: string;
};
/** @returns {HttpErrorCodeAndResponse} */
declare function HttpErrorCodeAndResponse(): HttpErrorCodeAndResponse;
type HttpErrorCodeAndResponse = {
    error?: ErrorCodeAndDescription;
    /**
     * - Response is successful or not
     */
    success: boolean;
    /**
     * - Return empty array in error response
     */
    items?: string[];
    /**
     * - Error description message
     */
    message?: string;
};
/** @returns {RefundErrorCodeAndResponse} */
declare function RefundErrorCodeAndResponse(): RefundErrorCodeAndResponse;
type RefundErrorCodeAndResponse = {
    /**
     * - Response is successful or not
     */
    success: boolean;
    /**
     * - Response message
     */
    message?: string;
    data?: IFSCErrorData;
    error?: EDCError;
};
/** @returns {PaymentOptionErrorCodeAndResponse} */
declare function PaymentOptionErrorCodeAndResponse(): PaymentOptionErrorCodeAndResponse;
type PaymentOptionErrorCodeAndResponse = {
    /**
     * - Response is successful or not
     */
    success: boolean;
    message?: string;
    error?: string[];
};
/** @returns {RefundOptionErrorCodeAndResponse} */
declare function RefundOptionErrorCodeAndResponse(): RefundOptionErrorCodeAndResponse;
type RefundOptionErrorCodeAndResponse = {
    /**
     * - Response is successful or not
     */
    success: boolean;
    message?: RefundOptionMessage;
    error?: RefundOptionError;
};
/** @returns {UserCODAdvanceErrorCodeAndResponse} */
declare function UserCODAdvanceErrorCodeAndResponse(): UserCODAdvanceErrorCodeAndResponse;
type UserCODAdvanceErrorCodeAndResponse = {
    /**
     * - Response is successful or not
     */
    success: boolean;
    error?: UserCodErrorMessage;
};
/** @returns {UserCodErrorMessage} */
declare function UserCodErrorMessage(): UserCodErrorMessage;
type UserCodErrorMessage = {
    code?: string;
    description?: RefundOptionError;
};
/** @returns {RefundOptionMessage} */
declare function RefundOptionMessage(): RefundOptionMessage;
type RefundOptionMessage = {
    code?: number;
    description?: RefundOptionError;
    shipment_id?: string[];
    order_id?: string[];
};
/** @returns {RefundOptionError} */
declare function RefundOptionError(): RefundOptionError;
type RefundOptionError = {
    code?: number;
    shipment_id?: string[];
    order_id?: string[];
    merchant_user_id?: string[];
    description?: RefundOptionError;
};
/** @returns {PaymentOptionError} */
declare function PaymentOptionError(): PaymentOptionError;
type PaymentOptionError = {
    option_type?: string[];
    order_type?: string[];
    checksum?: string[];
};
/** @returns {PaymentSessionError} */
declare function PaymentSessionError(): PaymentSessionError;
type PaymentSessionError = {
    success?: boolean;
    error?: PaymentErrorCodeDescription;
};
/** @returns {PaymentErrorCodeDescription} */
declare function PaymentErrorCodeDescription(): PaymentErrorCodeDescription;
type PaymentErrorCodeDescription = {
    description?: PaymentOptionError;
    /**
     * - Error descrption code.
     */
    code?: string;
};
/** @returns {EDCError} */
declare function EDCError(): EDCError;
type EDCError = {
    /**
     * - Error human understandable description.
     */
    error?: string;
    /**
     * - Error human understandable description.
     */
    description?: string;
    /**
     * - Error descrption code.
     */
    code?: string;
};
/** @returns {IFSCErrorData} */
declare function IFSCErrorData(): IFSCErrorData;
type IFSCErrorData = {
    /**
     * - Error human understandable description.
     */
    message?: string;
    /**
     * - Error descrption code.
     */
    subcode?: string;
    /**
     * - Error.
     */
    status?: string;
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
    cod_charges?: CODChargesLimitsResponse;
};
/** @returns {CODChargesLimitsResponse} */
declare function CODChargesLimitsResponse(): CODChargesLimitsResponse;
type CODChargesLimitsResponse = {
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
    logo?: string;
    bank_name?: string;
    bank_code?: string;
    url?: string;
    wallet_name?: string;
    wallet_code?: string;
    wallet_id?: number;
    collect_flow?: boolean;
    provider?: string;
    meta?: any;
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
     * - Payment mode id
     */
    payment_mode_id?: number;
    logo_url?: PaymentModeLogo;
    version?: Version;
    /**
     * - Display Priority
     */
    aggregator_name?: string;
};
/** @returns {Version} */
declare function Version(): Version;
type Version = {
    razorpay?: VersionDetails[];
    rupifi?: VersionDetails[];
    jio?: VersionDetails[];
    stripe?: VersionDetails[];
    payumoney?: VersionDetails[];
    jiopay?: VersionDetails[];
    fynd?: VersionDetails[];
    potlee?: VersionDetails[];
    juspay?: VersionDetails[];
    simpl?: VersionDetails[];
    checkout?: VersionDetails[];
};
/** @returns {VersionDetails} */
declare function VersionDetails(): VersionDetails;
type VersionDetails = {
    version?: string;
};
/** @returns {PaymentOptions} */
declare function PaymentOptions(): PaymentOptions;
type PaymentOptions = {
    /**
     * - Payment options
     */
    payment_option: RootPaymentMode[];
};
/** @returns {PaymentFlowData} */
declare function PaymentFlowData(): PaymentFlowData;
type PaymentFlowData = {
    is_customer_validation_required?: boolean;
    cust_validation_url?: string;
    config?: PaymentConfig;
    data?: GatewayData;
    return_url?: string;
};
/** @returns {PaymentConfig} */
declare function PaymentConfig(): PaymentConfig;
type PaymentConfig = {
    redirect?: boolean;
    final_payment_action_url?: string;
    callback_url?: string;
    action_url?: string;
};
/** @returns {GatewayData} */
declare function GatewayData(): GatewayData;
type GatewayData = {
    route?: string;
    entity?: string;
    is_customer_validation_required?: boolean;
    cust_validation_url?: string;
    sdk?: SDKDetails;
    return_url?: string;
    user_email?: string;
    user_phone?: string;
};
/** @returns {SDKDetails} */
declare function SDKDetails(): SDKDetails;
type SDKDetails = {
    config?: SDKConfig;
    data?: UserData;
};
/** @returns {SDKConfig} */
declare function SDKConfig(): SDKConfig;
type SDKConfig = {
    redirect?: boolean;
    callback_url?: string;
    action_url?: string;
};
/** @returns {UserData} */
declare function UserData(): UserData;
type UserData = {
    user_phone?: string;
    user_email?: string;
};
/** @returns {AggregatorRouteData} */
declare function AggregatorRouteData(): AggregatorRouteData;
type AggregatorRouteData = {
    gateway?: GatewayData;
    payment_flow_data?: PaymentFlowData;
    data?: GatewayData;
    payment_flow?: string;
    api_link?: string;
    route?: string;
    entity?: string;
    is_customer_validation_required?: boolean;
    cust_validation_url?: string;
    sdk?: SDKDetails;
    return_url?: string;
    user_email?: string;
    user_phone?: string;
};
/** @returns {AggregatorRoute} */
declare function AggregatorRoute(): AggregatorRoute;
type AggregatorRoute = {
    data?: AggregatorRouteData;
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
    type?: string;
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
    jio?: AggregatorRoute;
    payumoney?: AggregatorRoute;
    openapi?: AggregatorRoute;
    potlee?: AggregatorRoute;
    upi_razorpay?: AggregatorRoute;
    creditnote?: AggregatorRoute;
    pinelabs?: AggregatorRoute;
    checkout?: AggregatorRoute;
    cashfree?: AggregatorRoute;
    jio_extension?: AggregatorRoute;
};
/** @returns {PaymentOptionAndFlow} */
declare function PaymentOptionAndFlow(): PaymentOptionAndFlow;
type PaymentOptionAndFlow = {
    /**
     * - Payment options
     */
    payment_option: RootPaymentMode[];
    payment_flows?: PaymentFlow;
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
     * - All available types of cancellation
     */
    all_cancellation_type?: string[];
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
    version?: Version;
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
/** @returns {PaymentModeRouteResponse} */
declare function PaymentModeRouteResponse(): PaymentModeRouteResponse;
type PaymentModeRouteResponse = {
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
    delivery_charges?: number;
    store_code?: string;
    order_id?: string;
    cod_message?: string;
    delivery_slots?: DeliverySlot[];
    user_type?: string;
    cod_available?: boolean;
    cod_charges?: number;
    max_cart_value?: number;
    min_cart_value?: number;
    store_emp_list?: string[];
    delivery_charge_order_value?: number;
    cod_limit?: number;
    remaining_limit?: number;
    cod_limit_per_order?: number;
    product_cod_data?: any;
    is_product_cod_available?: boolean;
    is_pincode_cod_available?: boolean;
};
/** @returns {DeliverySlot} */
declare function DeliverySlot(): DeliverySlot;
type DeliverySlot = {
    date?: string;
    delivery_slot?: DeliverySlotDetail[];
};
/** @returns {DeliverySlotDetail} */
declare function DeliverySlotDetail(): DeliverySlotDetail;
type DeliverySlotDetail = {
    delivery_slot_timing?: string;
    delivery_slot_id?: number;
};
/** @returns {PaymentOptionsResponse} */
declare function PaymentOptionsResponse(): PaymentOptionsResponse;
type PaymentOptionsResponse = {
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
    is_default?: boolean;
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
/** @returns {PayoutsResponse} */
declare function PayoutsResponse(): PayoutsResponse;
type PayoutsResponse = {
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
/** @returns {PayoutUserDetails} */
declare function PayoutUserDetails(): PayoutUserDetails;
type PayoutUserDetails = {
    unique_external_id?: string;
    name?: string;
    email?: string;
    mobile?: string;
};
/** @returns {PayoutRequest} */
declare function PayoutRequest(): PayoutRequest;
type PayoutRequest = {
    /**
     * - Aggregator Name
     */
    aggregator: string;
    users: PayoutUserDetails;
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
/** @returns {PayoutResponse} */
declare function PayoutResponse(): PayoutResponse;
type PayoutResponse = {
    /**
     * - Status of payment
     */
    payment_status?: string;
    users: PayoutUserDetails;
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
    bank_details: PayoutBankDetails;
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
    payouts?: PayoutDetails;
};
/** @returns {PayoutDetails} */
declare function PayoutDetails(): PayoutDetails;
type PayoutDetails = {
    more_attributes?: BankDetails;
    aggregator_fund_id?: string;
};
/** @returns {BankDetails} */
declare function BankDetails(): BankDetails;
type BankDetails = {
    account_type?: string;
    city?: string;
    account_holder?: string;
    branch_name?: string;
    account_no?: string;
    bank_name?: string;
    country?: string;
    state?: string;
    ifsc_code?: string;
    aggregator_fund_id?: string;
};
/** @returns {UpdatePayoutResponse} */
declare function UpdatePayoutResponse(): UpdatePayoutResponse;
type UpdatePayoutResponse = {
    /**
     * - Enable or Disable Default Payout
     */
    is_default?: boolean;
    /**
     * - Enable or DIsable Flag Payout
     */
    is_active?: boolean;
    /**
     * - Response is successful or not
     */
    success: boolean;
    bank_details?: PayoutBankDetails;
    transfer_type?: string;
    aggregator?: string;
    users?: PayoutUserDetails;
    unique_transfer_no?: string;
    updated?: boolean;
    payment_status?: string;
    payouts?: Payouts;
};
/** @returns {Payouts} */
declare function Payouts(): Payouts;
type Payouts = {
    aggregator_fund_id?: string;
};
/** @returns {UpdatePayoutRequest} */
declare function UpdatePayoutRequest(): UpdatePayoutRequest;
type UpdatePayoutRequest = {
    /**
     * - Enable or Disable Default Payout
     */
    is_default?: boolean;
    /**
     * - Enable or Disable Flag Payout
     */
    is_active: boolean;
    /**
     * - Unique Id of Payout
     */
    unique_external_id: string;
};
/** @returns {DeletePayoutResponse} */
declare function DeletePayoutResponse(): DeletePayoutResponse;
type DeletePayoutResponse = {
    /**
     * - Delete is successful or not
     */
    delete?: boolean;
    /**
     * - Unique transafer no of payout
     */
    unique_transfer_no?: string;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {RefundAccountResponse} */
declare function RefundAccountResponse(): RefundAccountResponse;
type RefundAccountResponse = {
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
    data?: any;
    /**
     * - Success or failure flag.
     */
    success: boolean;
};
/** @returns {GetRefundAccountResponse} */
declare function GetRefundAccountResponse(): GetRefundAccountResponse;
type GetRefundAccountResponse = {
    is_verified_flag?: boolean;
    /**
     * - Response message
     */
    message?: string;
    /**
     * - Refund account data.
     */
    data: BankDetailsForOTP[];
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
    /**
     * - Address of account
     */
    address?: string;
    /**
     * - Comment for account
     */
    comment?: string;
    /**
     * - Email address of account
     */
    email?: string;
    /**
     * - Mobile number of account
     */
    mobile?: string;
    /**
     * - Beneficiary id of account
     */
    beneficiary_id?: string;
};
/** @returns {AddBeneficiaryDetailsOTPRequest} */
declare function AddBeneficiaryDetailsOTPRequest(): AddBeneficiaryDetailsOTPRequest;
type AddBeneficiaryDetailsOTPRequest = {
    transfer_mode?: string;
    shipment_id?: string;
    delights?: boolean;
    /**
     * - Order_id for which account will be added
     */
    order_id: string;
    details: BankDetailsForOTP;
};
/** @returns {IfscCodeResponse} */
declare function IfscCodeResponse(): IfscCodeResponse;
type IfscCodeResponse = {
    success?: boolean;
    branch_name: string;
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
    aggregator_id?: number;
    is_verified?: boolean;
    status?: string;
    txn_id?: string;
    meta?: any;
    bank_name: string;
    account_no: string;
    mobile?: string;
    default_beneficiary?: boolean;
};
/** @returns {OrderBeneficiaryResponse} */
declare function OrderBeneficiaryResponse(): OrderBeneficiaryResponse;
type OrderBeneficiaryResponse = {
    /**
     * - All Beneficiaries Of An Order
     */
    beneficiaries?: OrderBeneficiaryDetails[];
    /**
     * - Show beneficiary details or not.
     */
    show_beneficiary_details?: boolean;
    bank?: OrderBeneficiaryDetails[];
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
    payment_gateway?: string;
    /**
     * - Specifies the name or identifier of the payment
     * gateway. This will deprecated in future version. We recommend switching to
     * `payment_gateway_slug` to ensure uninterrupted payment processing.
     */
    key?: string;
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
/** @returns {PaymentConfirmationRequest} */
declare function PaymentConfirmationRequest(): PaymentConfirmationRequest;
type PaymentConfirmationRequest = {
    /**
     * - Unique order id
     */
    order_id: string;
    payment_methods: MultiTenderPaymentMethod[];
};
/** @returns {PaymentConfirmationResponse} */
declare function PaymentConfirmationResponse(): PaymentConfirmationResponse;
type PaymentConfirmationResponse = {
    /**
     * - Unique order id
     */
    order_id?: string;
    /**
     * - Message
     */
    message: string;
    /**
     * - Payment confirmation updated or not.
     */
    success: boolean;
    errors?: string;
    return_url?: string;
};
/** @returns {AdvancePaymentLimitConfig} */
declare function AdvancePaymentLimitConfig(): AdvancePaymentLimitConfig;
type AdvancePaymentLimitConfig = {
    is_active?: boolean;
    prepayment_type?: string;
    prepayment_value?: number;
    cancellation_type?: string;
    all_cancellation_type?: string[];
    all_prepayment_type?: string[];
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
/** @returns {GetUserBULimitResponse} */
declare function GetUserBULimitResponse(): GetUserBULimitResponse;
type GetUserBULimitResponse = {
    /**
     * - COD limit business unit
     */
    buisness_unit: string;
    /**
     * - Display name for cod limit
     */
    display_name: string;
    config: CODPaymentLimitConfig;
};
/** @returns {GetUserCODLimitResponse} */
declare function GetUserCODLimitResponse(): GetUserCODLimitResponse;
type GetUserCODLimitResponse = {
    items: GetUserBULimitResponse[];
    /**
     * - Response is successful or not
     */
    success: boolean;
    /**
     * - Message for cod limit
     */
    message?: string;
};
/** @returns {SetAdvanceLimitConfig} */
declare function SetAdvanceLimitConfig(): SetAdvanceLimitConfig;
type SetAdvanceLimitConfig = {
    is_active: boolean;
    prepayment_type: string;
    prepayment_value: number;
    cancellation_type?: string;
    all_cancellation_type?: string[];
};
/** @returns {SetCODLimitConfig} */
declare function SetCODLimitConfig(): SetCODLimitConfig;
type SetCODLimitConfig = {
    is_active: boolean;
    usages?: number;
    user_id?: number;
    merchant_user_id?: string;
    limit?: CODLimitConfig;
    remaining_limit?: number;
};
/** @returns {SetUserPaymentLimitConfig} */
declare function SetUserPaymentLimitConfig(): SetUserPaymentLimitConfig;
type SetUserPaymentLimitConfig = {
    advance: SetAdvanceLimitConfig;
    cod: SetCODLimitConfig;
};
/** @returns {SetBUPaymentLimit} */
declare function SetBUPaymentLimit(): SetBUPaymentLimit;
type SetBUPaymentLimit = {
    /**
     * - Business Unit - 'storefront'/ 'pos'
     */
    buisness_unit: string;
    config: SetUserPaymentLimitConfig;
};
/** @returns {SetCODForUserRequest} */
declare function SetCODForUserRequest(): SetCODForUserRequest;
type SetCODForUserRequest = {
    /**
     * - Mobile No. of User
     */
    mobile_no?: string;
    /**
     * - Merchant User id
     */
    merchant_user_id: string;
    items: SetBUPaymentLimit[];
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
/** @returns {EdcAggregatorAndModelListResponse} */
declare function EdcAggregatorAndModelListResponse(): EdcAggregatorAndModelListResponse;
type EdcAggregatorAndModelListResponse = {
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
/** @returns {EdcDeviceStatsResponse} */
declare function EdcDeviceStatsResponse(): EdcDeviceStatsResponse;
type EdcDeviceStatsResponse = {
    statistics: StatisticsData;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {EdcAddRequest} */
declare function EdcAddRequest(): EdcAddRequest;
type EdcAddRequest = {
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
/** @returns {EdcDeviceAddResponse} */
declare function EdcDeviceAddResponse(): EdcDeviceAddResponse;
type EdcDeviceAddResponse = {
    data: EdcDevice;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {EdcDeviceDetailsResponse} */
declare function EdcDeviceDetailsResponse(): EdcDeviceDetailsResponse;
type EdcDeviceDetailsResponse = {
    data: EdcDevice;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {EdcUpdateRequest} */
declare function EdcUpdateRequest(): EdcUpdateRequest;
type EdcUpdateRequest = {
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
/** @returns {EdcDeviceUpdateResponse} */
declare function EdcDeviceUpdateResponse(): EdcDeviceUpdateResponse;
type EdcDeviceUpdateResponse = {
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    /**
     * - The total number of items on the page.
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
     * - Total number of items.
     */
    total?: number;
};
/** @returns {EdcDeviceListResponse} */
declare function EdcDeviceListResponse(): EdcDeviceListResponse;
type EdcDeviceListResponse = {
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
/** @returns {PaymentInitializationRequest} */
declare function PaymentInitializationRequest(): PaymentInitializationRequest;
type PaymentInitializationRequest = {
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
    email?: string;
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
    aggregator?: string;
    /**
     * - Payment gateway order id
     */
    order_id?: string;
    /**
     * - Currency code.
     */
    currency?: string;
    /**
     * - Payable amount.
     */
    amount?: number;
    /**
     * - Customer valid mobile number
     */
    contact?: string;
    /**
     * - Payment polling timeout if not recieved response
     */
    timeout?: number;
    /**
     * - Unique fynd order id
     */
    merchant_order_id: string;
    /**
     * - Unique fynd transaction id
     */
    merchant_transaction_id?: string;
    /**
     * - Payment method
     */
    method: string;
};
/** @returns {PaymentInitializationResponse} */
declare function PaymentInitializationResponse(): PaymentInitializationResponse;
type PaymentInitializationResponse = {
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
     * - Unique fynd transaction id
     */
    merchant_transaction_id?: string;
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
/** @returns {PaymentStatusUpdateRequest} */
declare function PaymentStatusUpdateRequest(): PaymentStatusUpdateRequest;
type PaymentStatusUpdateRequest = {
    /**
     * - EDC machine Unique Identifier
     */
    device_id?: string;
    /**
     * - Customer valid email
     */
    email?: string;
    /**
     * - Payment gateway customer id.
     */
    customer_id?: string;
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
    order_id?: string;
    /**
     * - Currency code.
     */
    currency?: string;
    /**
     * - Payable amount.
     */
    amount: number;
    /**
     * - Customer valid mobile number
     */
    contact?: string;
    /**
     * - Unique fynd order id
     */
    merchant_order_id: string;
    /**
     * - Status of payment.
     */
    status?: string;
    /**
     * - Payment method
     */
    method: string;
    /**
     * - Unique fynd transaction id
     */
    merchant_transaction_id?: string;
    /**
     * - Unique payment link id
     */
    unique_link_id?: string;
};
/** @returns {PaymentStatusUpdateResponse} */
declare function PaymentStatusUpdateResponse(): PaymentStatusUpdateResponse;
type PaymentStatusUpdateResponse = {
    /**
     * - Redirect url
     */
    redirect_url?: string;
    /**
     * - Response is successful or not.
     */
    retry?: boolean;
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
/** @returns {ResendOrCancelPaymentRequest} */
declare function ResendOrCancelPaymentRequest(): ResendOrCancelPaymentRequest;
type ResendOrCancelPaymentRequest = {
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
    message?: string;
};
/** @returns {ResendOrCancelPaymentResponse} */
declare function ResendOrCancelPaymentResponse(): ResendOrCancelPaymentResponse;
type ResendOrCancelPaymentResponse = {
    data: LinkStatus;
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {PaymentStatusBulkHandlerRequest} */
declare function PaymentStatusBulkHandlerRequest(): PaymentStatusBulkHandlerRequest;
type PaymentStatusBulkHandlerRequest = {
    /**
     * - List of order ids
     */
    merchant_order_id: string[];
};
/** @returns {PaymentObjectListSerializer} */
declare function PaymentObjectListSerializer(): PaymentObjectListSerializer;
type PaymentObjectListSerializer = {
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
    payment_object_list?: PaymentObjectListSerializer[];
};
/** @returns {PaymentStatusBulkHandlerResponse} */
declare function PaymentStatusBulkHandlerResponse(): PaymentStatusBulkHandlerResponse;
type PaymentStatusBulkHandlerResponse = {
    count?: number;
    data?: PaymentStatusObject[];
    success: boolean;
    error?: string;
    status: number;
};
/** @returns {GetOauthUrlResponse} */
declare function GetOauthUrlResponse(): GetOauthUrlResponse;
type GetOauthUrlResponse = {
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
/** @returns {RepaymentResponse} */
declare function RepaymentResponse(): RepaymentResponse;
type RepaymentResponse = {
    data?: any;
    /**
     * - Success/Failure of the transaction
     */
    success: boolean;
};
/** @returns {MerchantOnBoardingRequest} */
declare function MerchantOnBoardingRequest(): MerchantOnBoardingRequest;
type MerchantOnBoardingRequest = {
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
/** @returns {MerchantOnBoardingResponse} */
declare function MerchantOnBoardingResponse(): MerchantOnBoardingResponse;
type MerchantOnBoardingResponse = {
    data: MerchantOnboardingData;
    /**
     * - Success/Failure of the transaction
     */
    success: boolean;
};
/** @returns {MerchantOnboardingData} */
declare function MerchantOnboardingData(): MerchantOnboardingData;
type MerchantOnboardingData = {
    /**
     * - HTTP status code
     */
    status_code?: number;
    /**
     * - Message
     */
    message?: string;
    /**
     * - Successful or failure
     */
    status?: boolean;
};
/** @returns {ValidateCustomerRequest} */
declare function ValidateCustomerRequest(): ValidateCustomerRequest;
type ValidateCustomerRequest = {
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
    delivery_address?: AddressDetail;
    /**
     * - Payable amount in paise
     */
    transaction_amount_in_paise: number;
    /**
     * - Extra meta fields.
     */
    order_items?: OrderItems[];
    merchant_params?: MerchantParams;
    billing_address?: AddressDetail;
};
/** @returns {MerchantParams} */
declare function MerchantParams(): MerchantParams;
type MerchantParams = {
    source?: string;
};
/** @returns {OrderItems} */
declare function OrderItems(): OrderItems;
type OrderItems = {
    sku?: string;
    price?: number;
    quantity?: number;
};
/** @returns {ValidateCustomerResponse} */
declare function ValidateCustomerResponse(): ValidateCustomerResponse;
type ValidateCustomerResponse = {
    /**
     * - Error or success message.
     */
    message: string;
    data?: ValidateCustomer;
    /**
     * - Response is successful or not
     */
    success: boolean;
    error?: ValidateCustomer;
};
/** @returns {ValidateCustomer} */
declare function ValidateCustomer(): ValidateCustomer;
type ValidateCustomer = {
    data?: ValidateCustomerData;
    aggregator?: string;
    api_version?: number;
};
/** @returns {ValidateCustomerData} */
declare function ValidateCustomerData(): ValidateCustomerData;
type ValidateCustomerData = {
    approved?: boolean;
    button_text?: string;
    first_transaction?: boolean;
    message?: string;
    amount?: number;
    user_id?: string;
    customer_mobile_number?: string;
    total_credited_balance?: number;
    is_cn_locked?: boolean;
    total_locked_amount?: number;
    allowed_redemption_amount?: number;
};
/** @returns {GetPaymentLinkResponse} */
declare function GetPaymentLinkResponse(): GetPaymentLinkResponse;
type GetPaymentLinkResponse = {
    /**
     * - Currency
     */
    currency?: string;
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
    error?: ErrorDescription;
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
    description?: string;
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    /**
     * - HTTP status code
     */
    status_code?: number;
    /**
     * - Message
     */
    message?: string;
    /**
     * - Successful or failure
     */
    success: boolean;
    error?: ErrorDescription;
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
    /**
     * - Pincode of customer
     */
    pincode?: string;
};
/** @returns {CreatePaymentLinkRequest} */
declare function CreatePaymentLinkRequest(): CreatePaymentLinkRequest;
type CreatePaymentLinkRequest = {
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
};
/** @returns {CreatePaymentLinkResponse} */
declare function CreatePaymentLinkResponse(): CreatePaymentLinkResponse;
type CreatePaymentLinkResponse = {
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
/** @returns {PollingPaymentLinkResponse} */
declare function PollingPaymentLinkResponse(): PollingPaymentLinkResponse;
type PollingPaymentLinkResponse = {
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
    error?: string;
};
/** @returns {CancelOrResendPaymentLinkRequest} */
declare function CancelOrResendPaymentLinkRequest(): CancelOrResendPaymentLinkRequest;
type CancelOrResendPaymentLinkRequest = {
    /**
     * - Unique id of payment link
     */
    payment_link_id: string;
};
/** @returns {ResendPaymentLinkResponse} */
declare function ResendPaymentLinkResponse(): ResendPaymentLinkResponse;
type ResendPaymentLinkResponse = {
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
/** @returns {PaymentLinkError} */
declare function PaymentLinkError(): PaymentLinkError;
type PaymentLinkError = {
    cancelled?: boolean;
    /**
     * - Message
     */
    msg?: string;
};
/** @returns {CancelPaymentLinkResponse} */
declare function CancelPaymentLinkResponse(): CancelPaymentLinkResponse;
type CancelPaymentLinkResponse = {
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
    codes: Code[];
    /**
     * - Name of payment name
     */
    name: string;
    networks: string[];
    types: string[];
};
/** @returns {GetPaymentCode} */
declare function GetPaymentCode(): GetPaymentCode;
type GetPaymentCode = {
    cod?: PaymentCode;
    nb?: PaymentCode;
    wl?: PaymentCode;
    card?: PaymentCode;
    pl?: PaymentCode;
    ps?: PaymentCode;
    op?: PaymentCode;
    upi?: PaymentCode;
    qr?: PaymentCode;
    fc?: PaymentCode;
    pac?: PaymentCode;
    stripepg?: PaymentCode;
    payumoneypg?: PaymentCode;
    rupifipg?: PaymentCode;
    cas?: PaymentCode;
    csas?: PaymentCode;
    ccavenuepg?: PaymentCode;
    cardless_emi?: PaymentCode;
    cashback?: PaymentCode;
    loyalty?: PaymentCode;
    employee_discount?: PaymentCode;
    paymentlink?: PaymentCode;
    epaylater?: PaymentCode;
    udhaari?: PaymentCode;
    creditnote?: PaymentCode;
    checkout?: PaymentCode;
    rone?: PaymentCode;
    emi?: PaymentCode;
    sodexo?: PaymentCode;
    jm_wallet?: PaymentCode;
};
/** @returns {GetPaymentCodeResponse} */
declare function GetPaymentCodeResponse(): GetPaymentCodeResponse;
type GetPaymentCodeResponse = {
    data: GetPaymentCode;
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {PlatformOnlineOfflinePaymentResponse} */
declare function PlatformOnlineOfflinePaymentResponse(): PlatformOnlineOfflinePaymentResponse;
type PlatformOnlineOfflinePaymentResponse = {
    /**
     * - Message
     */
    message?: string;
    items?: PlatformOnlineOfflineItem;
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {PatchPlatformOnlineOfflinePaymentResponse} */
declare function PatchPlatformOnlineOfflinePaymentResponse(): PatchPlatformOnlineOfflinePaymentResponse;
type PatchPlatformOnlineOfflinePaymentResponse = {
    /**
     * - Message
     */
    message?: string;
    items?: PlatformOnlineOfflineItem[];
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {PlatformOnlineOfflineItem} */
declare function PlatformOnlineOfflineItem(): PlatformOnlineOfflineItem;
type PlatformOnlineOfflineItem = {
    online?: OnlinePaymentDetails;
    offline?: OfflinePaymentDetails;
    advance?: PlatformOfflineAdvanceResponse;
};
/** @returns {OnlinePaymentDetails} */
declare function OnlinePaymentDetails(): OnlinePaymentDetails;
type OnlinePaymentDetails = {
    is_active?: boolean;
    aggregators?: AggregatorDetails[];
};
/** @returns {OfflinePaymentDetails} */
declare function OfflinePaymentDetails(): OfflinePaymentDetails;
type OfflinePaymentDetails = {
    is_active?: boolean;
    payment_modes?: CODOffline;
};
/** @returns {CODOffline} */
declare function CODOffline(): CODOffline;
type CODOffline = {
    cod?: CODPaymentMode;
};
/** @returns {AggregatorDetails} */
declare function AggregatorDetails(): AggregatorDetails;
type AggregatorDetails = {
    id?: number;
    name?: string;
    logos?: PaymentModeLogo;
    slug?: string;
    is_active?: boolean;
    payment_mode?: string[];
    integration_type?: string;
    config?: string[];
    extension_id?: string;
    status?: string;
    is_tnc_accepted?: boolean;
    label?: string;
};
/** @returns {CODPaymentMode} */
declare function CODPaymentMode(): CODPaymentMode;
type CODPaymentMode = {
    name?: string;
    slug?: string;
    id?: number;
    logos?: PaymentModeLogo;
    is_active?: boolean;
};
/** @returns {PlatformPaymentModeRequest} */
declare function PlatformPaymentModeRequest(): PlatformPaymentModeRequest;
type PlatformPaymentModeRequest = {
    /**
     * - Business unit identifier.
     */
    business_unit?: string;
    /**
     * - Device identifier.
     */
    device?: string;
    /**
     * - Indicates if the payment option is active.
     */
    is_active?: boolean;
    /**
     * - List of all aggregator and payment
     * mode details.
     */
    items?: PaymentModeItem[];
};
/** @returns {PlatformPaymentModeResponse} */
declare function PlatformPaymentModeResponse(): PlatformPaymentModeResponse;
type PlatformPaymentModeResponse = {
    success?: boolean;
    message?: string;
    /**
     * - Business unit identifier.
     */
    business_unit?: string;
    /**
     * - Device identifier.
     */
    device?: string;
    /**
     * - Indicates if the payment option is active.
     */
    is_active?: boolean;
    /**
     * - List of all aggregator and payment
     * mode details.
     */
    items?: PaymentOptionItem[];
};
/** @returns {AggregatorPlatformPaymentModeResponse} */
declare function AggregatorPlatformPaymentModeResponse(): AggregatorPlatformPaymentModeResponse;
type AggregatorPlatformPaymentModeResponse = {
    success?: boolean;
    message?: string;
    /**
     * - Business unit identifier.
     */
    business_unit?: string;
    /**
     * - Device identifier.
     */
    device?: string;
    /**
     * - Indicates if the payment option is active.
     */
    is_active?: boolean;
    /**
     * - Indicates if saving is allowed.
     */
    save_allowed?: boolean;
    extension_id?: string;
    /**
     * - List of all aggregator and payment
     * mode details.
     */
    items?: PaymentOptionItem[];
};
/** @returns {PlatformOfflineAdvanceRequest} */
declare function PlatformOfflineAdvanceRequest(): PlatformOfflineAdvanceRequest;
type PlatformOfflineAdvanceRequest = {
    /**
     * - Business unit identifier.
     */
    business_unit?: string;
    items?: OfflineAdvanceConfig[];
    device?: OfflineAdvanceDevice;
};
/** @returns {PlatformOfflineAdvanceResponse} */
declare function PlatformOfflineAdvanceResponse(): PlatformOfflineAdvanceResponse;
type PlatformOfflineAdvanceResponse = {
    success?: boolean;
    /**
     * - Indicates if the payment option is active.
     */
    is_active?: boolean;
    /**
     * - Indicates if the payment option is active.
     */
    message?: string;
    /**
     * - List of all
     * aggregator and payment mode details.
     */
    items?: OfflineAdvanceConfigurationItem[];
    errors?: ErrorCodeAndDescription;
    error?: ErrorCodeAndDescription;
};
/** @returns {OfflineAdvanceConfigurationItem} */
declare function OfflineAdvanceConfigurationItem(): OfflineAdvanceConfigurationItem;
type OfflineAdvanceConfigurationItem = {
    /**
     * - Display name for the payment configuration.
     */
    display_name?: string;
    /**
     * - Business unit identifier.
     */
    business_unit?: string;
    config?: OfflineAdvanceConfig;
    device?: OfflineAdvanceDevice;
};
/** @returns {OfflineAdvanceDevice} */
declare function OfflineAdvanceDevice(): OfflineAdvanceDevice;
type OfflineAdvanceDevice = {
    /**
     * - Indicates if available on Android devices.
     */
    android?: boolean;
    /**
     * - Indicates if available on iOS devices.
     */
    ios?: boolean;
    /**
     * - Indicates if available on desktop devices.
     */
    desktop?: boolean;
};
/** @returns {OfflineAdvanceConfig} */
declare function OfflineAdvanceConfig(): OfflineAdvanceConfig;
type OfflineAdvanceConfig = {
    /**
     * - Indicates if the payment is anonymous.
     */
    anonymous?: boolean;
    /**
     * - User limit for the payment configuration.
     */
    user_limit?: number;
    /**
     * - Charges for the payment configuration.
     */
    charges?: number;
    /**
     * - Maximum value for charges.
     */
    charges_max_value?: number;
    /**
     * - Minimum value for charges.
     */
    charges_min_value?: number;
    /**
     * - Maximum order value.
     */
    max_order_value?: number;
    /**
     * - Minimum order value.
     */
    min_order_value?: number;
    /**
     * - Indicates if the payment configuration is active.
     */
    is_active?: boolean;
    /**
     * - Name of the payment configuration.
     */
    name?: string;
    /**
     * - Number of split allowed for the
     * payment configuration.
     */
    number_of_split?: number;
    /**
     * - Slug for the payment configuration.
     */
    slug?: string;
    /**
     * - Indicates if saving is allowed.
     */
    save_allowed?: boolean;
    /**
     * - Indicates if Fixed or percentage amount.
     */
    prepayment_type?: string;
    /**
     * - Value in case of fixed amount else in
     * percentage eg. 5% is 5 for a prepayment_value of 100
     */
    prepayment_value?: number;
    /**
     * - Time limit for refund of a payment.
     */
    refund_time_limit?: number;
    /**
     * - It indicates the time_unit for
     * refund_time_limit possible values hours/days/weeks
     */
    time_unit?: string;
    /**
     * - It indicates type of cancellation
     * for an advance payment order, possible values MANUAL / AUTO
     */
    cancellation_type?: string;
    /**
     * - All available types of cancellation
     */
    all_cancellation_type?: string[];
    /**
     * - Is custom advance amount allowed?
     */
    allow_custom_advance_amount?: boolean;
    /**
     * - Description of the payment configuration.
     */
    description?: string;
    /**
     * - Display name e.g Advance Payment
     */
    display_name?: string;
};
/** @returns {PaymentModeItem} */
declare function PaymentModeItem(): PaymentModeItem;
type PaymentModeItem = {
    /**
     * - Identifier for the payment mode.
     */
    id?: number;
    /**
     * - Name of the payment mode.
     */
    name?: string;
    logos?: PaymentModeLogo;
    /**
     * - Indicates if the payment mode is active.
     */
    is_active?: boolean;
    priority?: number;
    /**
     * - List of sub-payment modes.
     */
    sub_payment_mode?: SubPaymentMode[];
};
/** @returns {MerchantPaymentModeRequest} */
declare function MerchantPaymentModeRequest(): MerchantPaymentModeRequest;
type MerchantPaymentModeRequest = {
    offline?: ModeIsactive;
    online?: ModeIsactive;
};
/** @returns {ModeIsactive} */
declare function ModeIsactive(): ModeIsactive;
type ModeIsactive = {
    is_active?: boolean;
};
/** @returns {OfferSerializer} */
declare function OfferSerializer(): OfferSerializer;
type OfferSerializer = {
    /**
     * - Offer amount.
     */
    offer_amount?: number;
    /**
     * - Offer code.
     */
    offer_code?: string;
    /**
     * - Offer description.
     */
    offer_description?: string;
    /**
     * - Offer id.
     */
    offer_id?: string;
};
/** @returns {AppliedOfferSerializer} */
declare function AppliedOfferSerializer(): AppliedOfferSerializer;
type AppliedOfferSerializer = {
    /**
     * - Total applied offer amount
     */
    total_applied_offer_amount?: number;
    offer_list?: OfferSerializer[];
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
    aggregator_order_details: AggregatorOrderDetail;
    /**
     * - Name of the payment gateway aggregator.
     */
    aggregator: string;
};
/** @returns {AggregatorOrderDetail} */
declare function AggregatorOrderDetail(): AggregatorOrderDetail;
type AggregatorOrderDetail = {
    aggregator_order_id?: string;
    amount?: number;
    currency?: string;
    aggregator?: string;
    status?: string;
};
/** @returns {GoogleMapPoint} */
declare function GoogleMapPoint(): GoogleMapPoint;
type GoogleMapPoint = {
    address?: string;
    sub_locality?: string;
};
/** @returns {AddressDetail} */
declare function AddressDetail(): AddressDetail;
type AddressDetail = {
    line1?: string;
    line2?: string;
    google_map_point?: GoogleMapPoint;
    /**
     * - Landmark
     */
    landmark?: string;
    /**
     * - Phone number
     */
    phone?: string;
    /**
     * - Country's code name e.g. `IN`, `GB`
     */
    country_iso_code?: string;
    /**
     * - Customer pin/zip code
     */
    area_code?: string;
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
    area?: string;
    /**
     * - Unique address id generated by Fynd platform
     */
    g_address_id?: string;
    /**
     * - Area slug code, use pin or zip code if
     * not available
     */
    area_code_slug?: string;
    /**
     * - Country's phone code
     */
    country_phone_code?: string;
    /**
     * - Customer name
     */
    name?: string;
    /**
     * - Address type e.g. home, office
     */
    address_type?: string;
    /**
     * - Address details
     */
    address?: string;
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
    pincode?: string;
    type?: string;
};
/** @returns {LatLongDetail} */
declare function LatLongDetail(): LatLongDetail;
type LatLongDetail = {
    latitude?: string;
    longitude?: string;
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
    payment_methods: PaymentMode[];
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
};
/** @returns {AmountSerializer} */
declare function AmountSerializer(): AmountSerializer;
type AmountSerializer = {
    /**
     * - Amount in integer
     */
    value: number;
    /**
     * - Currency in which amount is getting passed
     */
    currency: string;
};
/** @returns {ChargeAmountSerializer} */
declare function ChargeAmountSerializer(): ChargeAmountSerializer;
type ChargeAmountSerializer = {
    ordering_currency: AmountSerializer;
    base_currency: AmountSerializer;
};
/** @returns {CartChargesSerializer} */
declare function CartChargesSerializer(): CartChargesSerializer;
type CartChargesSerializer = {
    /**
     * - Type of charge
     */
    charge_type?: string;
    /**
     * - Name of the charge
     */
    name?: string;
    /**
     * - Unique identifier code for charge
     */
    code?: string;
    amount?: ChargeAmountSerializer;
};
/** @returns {GetPaymentSessionResponse} */
declare function GetPaymentSessionResponse(): GetPaymentSessionResponse;
type GetPaymentSessionResponse = {
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
    applied_payment_offers?: AppliedOfferSerializer;
    checksum?: string;
    /**
     * - Status of the payment.
     */
    status: string;
    /**
     * - Currency of the payment.
     */
    currency: string;
    payment_details: PaymentSessionDetail;
    cart_details?: CartDetailsSerializer;
    /**
     * - Amount paid.
     */
    total_amount: number;
    /**
     * - Object of refund details
     */
    refund_details?: RefundDetailsSerializer[];
};
/** @returns {PaymentSessionRequestSerializer} */
declare function PaymentSessionRequestSerializer(): PaymentSessionRequestSerializer;
type PaymentSessionRequestSerializer = {
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
    applied_payment_offers?: AppliedOfferSerializer;
    /**
     * - Checksum to verify the payload
     */
    checksum?: string;
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
     * - Source of payment update session
     */
    source?: string;
};
/** @returns {TransactionDetail} */
declare function TransactionDetail(): TransactionDetail;
type TransactionDetail = {
    /**
     * - Unique identifier for the transaction
     */
    transaction_id: string;
    /**
     * - Mode of payment used in the transaction
     */
    payment_mode: string;
    /**
     * - Amount involved in the transaction
     */
    amount: number;
    /**
     * - Unique number generated by extension
     */
    payment_id?: string;
};
/** @returns {PaymentSessionResponseSerializer} */
declare function PaymentSessionResponseSerializer(): PaymentSessionResponseSerializer;
type PaymentSessionResponseSerializer = {
    /**
     * - Global identifier of the entity (e.g. order, cart
     * etc.) against which payment_session was initiated. This is generated by
     * Fynd payments platform and is unique.
     */
    gid?: string;
    /**
     * - Platform transaction details.
     */
    platform_transaction_details?: any[];
    /**
     * - Status of the payment.
     */
    status?: string;
    /**
     * - Currency of the payment.
     */
    currency?: string;
    /**
     * - Amount paid.
     */
    total_amount?: number;
    error?: string;
    success?: boolean;
    message?: string;
    /**
     * - List of all payment
     * mode and transaction id
     */
    transaction_details?: TransactionDetail[];
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
/** @returns {RefundSessionRequestSerializer} */
declare function RefundSessionRequestSerializer(): RefundSessionRequestSerializer;
type RefundSessionRequestSerializer = {
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
    checksum?: string;
    /**
     * - The total amount refunded.
     */
    total_amount: number;
    /**
     * - Details of the refund
     */
    refund_details?: RefundSessionDetail[];
    error?: ErrorDescription;
    /**
     * - The status of the refund.
     */
    message?: string;
};
/** @returns {RefundSessionResponseSerializer} */
declare function RefundSessionResponseSerializer(): RefundSessionResponseSerializer;
type RefundSessionResponseSerializer = {
    success?: boolean;
    message?: string;
    /**
     * - Global identifier of the entity (e.g. order, cart
     * etc.) against which payment_session was initiated. This is generated by
     * Fynd payments platform and is unique.
     */
    gid?: string;
    /**
     * - The status of the refund.
     */
    status?: string;
    /**
     * - The currency of the payment.
     */
    currency?: string;
    /**
     * - Details of the refund
     */
    platform_refund_details?: any[];
    /**
     * - The total amount refunded.
     */
    total_refund_amount?: number;
};
/** @returns {PaymentDetailsSerializer} */
declare function PaymentDetailsSerializer(): PaymentDetailsSerializer;
type PaymentDetailsSerializer = {
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
/** @returns {CartDetailsSerializer} */
declare function CartDetailsSerializer(): CartDetailsSerializer;
type CartDetailsSerializer = {
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
    /**
     * - List of cart charges that are added in cart
     */
    cart_charges?: any[];
};
/** @returns {RefundDetailsSerializer} */
declare function RefundDetailsSerializer(): RefundDetailsSerializer;
type RefundDetailsSerializer = {
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
/** @returns {PaymentSessionSerializer} */
declare function PaymentSessionSerializer(): PaymentSessionSerializer;
type PaymentSessionSerializer = {
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
    cart_details?: CartDetailsSerializer;
    /**
     * - Object of refund details
     */
    refund_details: RefundDetailsSerializer[];
};
/** @returns {RefundSourcesPriority} */
declare function RefundSourcesPriority(): RefundSourcesPriority;
type RefundSourcesPriority = {
    /**
     * - Refund source is enabled or not
     */
    enabled?: boolean;
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
/** @returns {RefundPriorityResponseSerializer} */
declare function RefundPriorityResponseSerializer(): RefundPriorityResponseSerializer;
type RefundPriorityResponseSerializer = {
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
     * - Business unit either pos or storefront
     */
    business_unit: string;
    /**
     * - Settle offline refund option is enabled or not
     */
    settle_offline?: boolean;
    /**
     * - Refund sources priority
     */
    refund_sources_priority: RefundSourcesPriority[];
    /**
     * - Message
     */
    message?: string;
};
/** @returns {RefundPriorityRequestSerializer} */
declare function RefundPriorityRequestSerializer(): RefundPriorityRequestSerializer;
type RefundPriorityRequestSerializer = {
    /**
     * - Settle Offline flag
     */
    settle_offline?: boolean;
    /**
     * - Apportion refund to multiple sources
     */
    apportion: boolean;
    /**
     * - Refund sources priority
     */
    refund_sources_priority: RefundSourcesPriority[];
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
    device: string[];
    /**
     * - Business unit name
     */
    business_unit: string;
};
/** @returns {PlatformPaymentModeCopyConfigRequest} */
declare function PlatformPaymentModeCopyConfigRequest(): PlatformPaymentModeCopyConfigRequest;
type PlatformPaymentModeCopyConfigRequest = {
    from_config: FromConfig;
    to_config: ToConfig;
};
/** @returns {PaymentMethodsMetaOrder} */
declare function PaymentMethodsMetaOrder(): PaymentMethodsMetaOrder;
type PaymentMethodsMetaOrder = {
    /**
     * - Payment identifier
     */
    payment_identifier?: string;
    /**
     * - Merchant code
     */
    merchant_code?: string;
    /**
     * - Payment gateway name
     */
    payment_gateway: string;
    /**
     * - Extra Payment identifiers
     */
    payment_extra_identifiers?: any;
    logo_url?: PaymentModeLogo;
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
/** @returns {PaymentOrderRequest} */
declare function PaymentOrderRequest(): PaymentOrderRequest;
type PaymentOrderRequest = {
    /**
     * - Order id
     */
    order_id: string;
    payment_methods?: PaymentOrderMethods[];
    /**
     * - Shipment_id
     */
    shipment_id?: string;
    customer_details?: CustomerDetails;
};
/** @returns {CustomerDetails} */
declare function CustomerDetails(): CustomerDetails;
type CustomerDetails = {
    /**
     * - Email of the customer
     */
    email?: string;
    /**
     * - Mobile number of the customer
     */
    mobile?: string;
    /**
     * - Name of the customer
     */
    name?: string;
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
    url?: string;
    encdata?: string;
    checksum?: string;
    mcode?: string;
    success?: boolean;
    status?: string;
    id?: string;
    mobile?: string;
    user?: string;
    merchant_transaction_id?: string;
    payment_mode_identifier?: string;
    /**
     * - Bank
     */
    bank?: string;
};
/** @returns {PaymentOrderResponse} */
declare function PaymentOrderResponse(): PaymentOrderResponse;
type PaymentOrderResponse = {
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
    status_code?: number;
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
/** @returns {AggregatorVersionResponse} */
declare function AggregatorVersionResponse(): AggregatorVersionResponse;
type AggregatorVersionResponse = {
    /**
     * - Message
     */
    message: string;
    /**
     * - Successful or failure
     */
    success: boolean;
    items?: AggregatorVersionItemSchema[];
};
/** @returns {AggregatorVersionRequestSchema} */
declare function AggregatorVersionRequestSchema(): AggregatorVersionRequestSchema;
type AggregatorVersionRequestSchema = {
    is_equal_to?: string;
    is_less_than?: string;
    is_greater_than?: string;
};
/** @returns {AggregatorControlRequest} */
declare function AggregatorControlRequest(): AggregatorControlRequest;
type AggregatorControlRequest = {
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
    customer?: PaymentCustomConfigCustomerSchema;
    payment_mode?: PaymentCustomConfigDetailsSchema;
    /**
     * - The minimum order value for the store
     */
    min_order_value?: number;
    available?: boolean;
    pre_order?: string[];
    post_order?: string[];
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
    message?: string;
    items: PaymentModeCustomConfigSchema[];
};
/** @returns {DeleteBeneficiaryRequest} */
declare function DeleteBeneficiaryRequest(): DeleteBeneficiaryRequest;
type DeleteBeneficiaryRequest = {
    /**
     * - Saved Beneficiary ID
     */
    beneficiary_id?: string;
};
/** @returns {DeleteRefundAccountResponse} */
declare function DeleteRefundAccountResponse(): DeleteRefundAccountResponse;
type DeleteRefundAccountResponse = {
    /**
     * - Success/Failure of the deleted beneficiary
     */
    success: boolean;
    /**
     * - Message
     */
    message: string;
};
/** @returns {RefundOptionsDetails} */
declare function RefundOptionsDetails(): RefundOptionsDetails;
type RefundOptionsDetails = {
    /**
     * - Refund option display name
     */
    display_name: string;
    /**
     * - Refund ID. It will be unique identifier
     */
    id: number;
    /**
     * - Refund option is active or not
     */
    is_active?: boolean;
    /**
     * - Refund option name
     */
    name: string;
};
/** @returns {RefundOptions} */
declare function RefundOptions(): RefundOptions;
type RefundOptions = {
    /**
     * - List of all refund options.
     */
    items: RefundOptionsDetails;
    /**
     * - List of all the Offline
     * refund collection options.
     */
    offline_refund_collect_type?: string[];
};
/** @returns {OfflineRefundOptions} */
declare function OfflineRefundOptions(): OfflineRefundOptions;
type OfflineRefundOptions = {
    /**
     * - List of all refund options.
     */
    items: RefundOptionsDetails;
    /**
     * - List of all offline payment options. MOP
     * Code value
     */
    payment_modes: string[];
    /**
     * - List of all the Offline
     * refund collection options.
     */
    offline_refund_collect_type?: string[];
};
/** @returns {RefundOptionResponse} */
declare function RefundOptionResponse(): RefundOptionResponse;
type RefundOptionResponse = {
    /**
     * - Available offline
     * refund options data
     */
    offline_refund_options: OfflineRefundOptions;
    /**
     * - Success/Failure Of response
     */
    success: boolean;
    /**
     * - Available refund options data
     */
    refund_options: RefundOptions;
};
/** @returns {SelectedRefundOptionResponse} */
declare function SelectedRefundOptionResponse(): SelectedRefundOptionResponse;
type SelectedRefundOptionResponse = {
    transfer_mode: TransferMode;
    /**
     * - Shipment ID
     */
    shipment_id: string;
    /**
     * - Message
     */
    message: string;
    /**
     * - Successful or not.
     */
    success: boolean;
    /**
     * - Beneficiary Short description
     */
    beneficiary_details?: any;
};
/** @returns {TransferMode} */
declare function TransferMode(): TransferMode;
type TransferMode = {
    mode?: string;
    display_name?: string;
};
/** @returns {WalletBeneficiaryDetails} */
declare function WalletBeneficiaryDetails(): WalletBeneficiaryDetails;
type WalletBeneficiaryDetails = {
    /**
     * - Benenficiary Id
     */
    beneficiary_id: string;
    /**
     * - MOdification Date of Beneficiary
     */
    modified_on: string;
    /**
     * - Display Name Of Account
     */
    display_name: string;
    /**
     * -
     */
    id: number;
    /**
     * - SHort Title Of Account
     */
    subtitle: string;
    /**
     * - Transfer Mode Of Account
     */
    transfer_mode: string;
    /**
     * - MObile no of User
     */
    mobile?: string;
    /**
     * - Boolean Flag whether Beneficiary set or not
     */
    is_active: boolean;
    /**
     * - Creation Date of Beneficiary
     */
    created_on: string;
    /**
     * - Address of User
     */
    address: string;
    /**
     * - Title Of Account
     */
    title: string;
    /**
     * - Bank Name Of Account
     */
    wallet_address: string;
    /**
     * - Remarks
     */
    comment?: string;
    /**
     * - Branch Name Of Account
     */
    wallet?: string;
    /**
     * - EMail of User
     */
    email: string;
    /**
     * - User Id Who filled the Beneficiary
     */
    delights_user_name?: string;
};
/** @returns {UpiBeneficiaryDetails} */
declare function UpiBeneficiaryDetails(): UpiBeneficiaryDetails;
type UpiBeneficiaryDetails = {
    /**
     * - Benenficiary Id
     */
    beneficiary_id: string;
    /**
     * - MOdification Date of Beneficiary
     */
    modified_on: string;
    /**
     * - Display Name Of Account
     */
    display_name: string;
    /**
     * -
     */
    id: number;
    /**
     * - SHort Title Of Account
     */
    subtitle: string;
    /**
     * - Transfer Mode Of Account
     */
    transfer_mode: string;
    /**
     * - Branch Name Of Account
     */
    vpa?: string;
    /**
     * - Mobile no of User
     */
    mobile?: string;
    /**
     * - Bank Name Of Account
     */
    vpa_address: string;
    /**
     * - Creation Date of Beneficiary
     */
    created_on: string;
    /**
     * - Address of User
     */
    address: string;
    /**
     * - Title Of Account
     */
    title: string;
    /**
     * - Remarks
     */
    comment?: string;
    /**
     * - Boolean Flag whether Beneficiary set or not
     */
    is_active: boolean;
    /**
     * - EMail of User
     */
    email: string;
    /**
     * - User Id Who filled the Beneficiary
     */
    delights_user_name?: string;
};
/** @returns {BeneficiaryRefundOptions} */
declare function BeneficiaryRefundOptions(): BeneficiaryRefundOptions;
type BeneficiaryRefundOptions = {
    /**
     * - List of all add bank
     * beneficiary details.
     */
    bank?: OrderBeneficiaryDetails[];
    /**
     * - List of all add Wallet
     * beneficiary details.
     */
    wallet?: WalletBeneficiaryDetails;
    /**
     * - List of all add UPI beneficiary details.
     */
    upi?: UpiBeneficiaryDetails;
};
/** @returns {OrderBeneficiaryResponseSchemaV2} */
declare function OrderBeneficiaryResponseSchemaV2(): OrderBeneficiaryResponseSchemaV2;
type OrderBeneficiaryResponseSchemaV2 = {
    /**
     * - Show Beneficiary details on UI or not.
     */
    show_beneficiary_details: boolean;
    /**
     * - Beneficiary Data for Bank
     * account, UPI and Wallets.
     */
    data: BeneficiaryRefundOptions;
    limit: RefundOptionsLimit;
};
/** @returns {RefundOptionsLimit} */
declare function RefundOptionsLimit(): RefundOptionsLimit;
type RefundOptionsLimit = {
    bank?: number;
    wallet?: number;
    upi?: number;
};
/** @returns {ValidateValidateAddressRequest} */
declare function ValidateValidateAddressRequest(): ValidateValidateAddressRequest;
type ValidateValidateAddressRequest = {
    /**
     * - IFSC Code
     */
    ifsc_code?: string;
    /**
     * - VPA Address
     */
    upi_vpa?: string;
    /**
     * - Aggregator Name
     */
    aggregator?: string;
};
/** @returns {VPADetails} */
declare function VPADetails(): VPADetails;
type VPADetails = {
    /**
     * - Is VPA valid or not
     */
    is_valid: boolean;
    /**
     * - VPA address
     */
    upi_vpa: string;
    /**
     * - VPA validation message
     */
    status: string;
    /**
     * - VPA Customer Name
     */
    customer_name: string;
};
/** @returns {ValidateValidateAddressResponse} */
declare function ValidateValidateAddressResponse(): ValidateValidateAddressResponse;
type ValidateValidateAddressResponse = {
    /**
     * - UPI validation details.
     */
    upi?: VPADetails;
    /**
     * - Successful or not.
     */
    success: boolean;
    /**
     * - IFSC details response data
     */
    ifsc?: any;
    /**
     * - UPI validation details.
     */
    vpa?: VPADetails;
};
/** @returns {SetDefaultBeneficiaryRequest} */
declare function SetDefaultBeneficiaryRequest(): SetDefaultBeneficiaryRequest;
type SetDefaultBeneficiaryRequest = {
    /**
     * - Merchant Order Id
     */
    order_id: string;
    /**
     * - Beneficiary Hash Id of the beneficiary added
     */
    beneficiary_id: string;
    /**
     * - Shipment Id from respective merchant order ID
     */
    shipment_id?: string;
    /**
     * - Shipment Id from respective
     * merchant order ID
     */
    merchant_shipment_id?: string;
};
/** @returns {SetDefaultBeneficiaryResponse} */
declare function SetDefaultBeneficiaryResponse(): SetDefaultBeneficiaryResponse;
type SetDefaultBeneficiaryResponse = {
    /**
     * - Boolean Flag whether Beneficiary set or not
     */
    is_beneficiary_set: boolean;
    /**
     * - Response is successful or not
     */
    success?: boolean;
};
/** @returns {ShipmentRefundRequestMeta} */
declare function ShipmentRefundRequestMeta(): ShipmentRefundRequestMeta;
type ShipmentRefundRequestMeta = {
    /**
     * - Shipment Id of the respective Merchant Order Id
     */
    shipment_id?: string;
    /**
     * - Name of the Transfer Mode.
     */
    name?: string;
    /**
     * - Unique Transaction Reference of the refund.
     */
    utr?: string;
    /**
     * - Any optional notes regarding the transaction.
     */
    notes?: string;
    /**
     * - Billing Employee Code
     */
    billing_employee_code?: string;
};
/** @returns {ShipmentRefundRequest} */
declare function ShipmentRefundRequest(): ShipmentRefundRequest;
type ShipmentRefundRequest = {
    /**
     * - Merchant Order Id
     */
    order_id: string;
    /**
     * - Transfer Mode of the Beneficiary to be added
     */
    transfer_mode: string;
    /**
     * - Beneficiary Hash Id of the beneficiary added
     */
    beneficiary_id?: string;
    /**
     * - Detailed list of shipment IDs for single
     * and multi-bag return cases
     */
    shipment_ids: string[];
    meta?: ShipmentRefundRequestMeta;
};
/** @returns {ShipmentRefundDetail} */
declare function ShipmentRefundDetail(): ShipmentRefundDetail;
type ShipmentRefundDetail = {
    /**
     * - Order ID
     */
    order_id: string;
    /**
     * - TransferMode
     */
    transfer_mode: string;
    /**
     * - Beneficiary ID
     */
    beneficiary_id: string;
    /**
     * - Detailed list of shipment IDs for single
     * and multi-bag return cases
     */
    shipment_ids: string[];
};
/** @returns {ShipmentRefundResponse} */
declare function ShipmentRefundResponse(): ShipmentRefundResponse;
type ShipmentRefundResponse = {
    /**
     * - Selected Shipment refund option details.
     */
    data?: ShipmentRefundDetail;
    /**
     * - Successful or not.
     */
    success?: boolean;
    /**
     * - Message
     */
    message?: string;
    refund_options?: string;
    refund_options_priority?: RefundOptionsPriority;
    offline_refund_options_priority?: RefundOptionsPriority;
};
/** @returns {RefundOptionsPriority} */
declare function RefundOptionsPriority(): RefundOptionsPriority;
type RefundOptionsPriority = {
    payment_modes?: string[];
    items?: RefundItem[];
    /**
     * - List of all offline payment gateways.
     */
    payment_gateways?: string[];
    /**
     * - List of all offline
     * Refund Collect Types.
     */
    offline_refund_collect_type?: string[];
};
/** @returns {RefundItem} */
declare function RefundItem(): RefundItem;
type RefundItem = {
    id?: number;
    name?: string;
    display_name?: string;
    is_active?: boolean;
};
/** @returns {PennyDropValidationResponse} */
declare function PennyDropValidationResponse(): PennyDropValidationResponse;
type PennyDropValidationResponse = {
    /**
     * - Successful or not.
     */
    success: boolean;
    /**
     * - Message
     */
    message: string;
    /**
     * - PennyDrop validation flag.
     */
    allow_pennydrop_validation: boolean;
};
/** @returns {UpdatePennyDropValidationRequest} */
declare function UpdatePennyDropValidationRequest(): UpdatePennyDropValidationRequest;
type UpdatePennyDropValidationRequest = {
    /**
     * - Allow Penny Drop Validation flag
     */
    allow_pennydrop_validation: boolean;
};
/** @returns {AggregatorConfigResponse} */
declare function AggregatorConfigResponse(): AggregatorConfigResponse;
type AggregatorConfigResponse = {
    success?: boolean;
    message?: string;
    items?: PaymentOptionItem[];
};
/** @returns {PaymentModeResponse} */
declare function PaymentModeResponse(): PaymentModeResponse;
type PaymentModeResponse = {
    success?: boolean;
    message?: string;
    items?: PaymentMode[];
};
/** @returns {PaymentOptionItem} */
declare function PaymentOptionItem(): PaymentOptionItem;
type PaymentOptionItem = {
    id?: number;
    name?: string;
    priority?: number;
    display_name?: string;
    slug?: string;
    integration_type?: string;
    logos?: PaymentModeLogo;
    is_active?: boolean;
    config?: string[];
    payment_modes?: PaymentMode[];
    payment_mode?: PaymentMode[];
    checkout_type?: string;
    country?: string[];
    currency?: string[];
    status?: string;
    /**
     * - Indicates if saving is allowed.
     */
    save_allowed?: boolean;
    extension_id?: string;
};
/** @returns {PaymentMode} */
declare function PaymentMode(): PaymentMode;
type PaymentMode = {
    id?: number;
    priority?: number;
    name?: string;
    code?: string;
    display_name?: string;
    slug?: string;
    is_active?: boolean;
    merchant_transaction_id?: string;
    amount?: number;
    payment_id?: string;
    logos?: PaymentModeLogo;
    sub_payment_mode?: SubPaymentMode[];
};
/** @returns {SubPaymentMode} */
declare function SubPaymentMode(): SubPaymentMode;
type SubPaymentMode = {
    name?: string;
    display_name?: string;
    code?: string;
    priority?: number;
    is_active?: boolean;
    logo?: string;
    logos?: PaymentModeLogo;
};
/** @returns {AggregatorCredentialRequest} */
declare function AggregatorCredentialRequest(): AggregatorCredentialRequest;
type AggregatorCredentialRequest = {
    success?: boolean;
    ccavenue?: AggregatorCredential;
    juspay?: AggregatorCredential;
    razorpay?: AggregatorCredential;
    potlee?: AggregatorCredential;
    jio?: AggregatorCredential;
    is_active?: boolean;
    app_id?: string;
};
/** @returns {PatchAggregatorCredentialResponse} */
declare function PatchAggregatorCredentialResponse(): PatchAggregatorCredentialResponse;
type PatchAggregatorCredentialResponse = {
    success?: boolean;
    aggregators?: string[];
};
/** @returns {AggregatorCredentialResponse} */
declare function AggregatorCredentialResponse(): AggregatorCredentialResponse;
type AggregatorCredentialResponse = {
    success?: boolean;
    created?: boolean;
    app_id?: string;
    excluded_fields?: string[];
    display_fields?: string[];
    aggregators?: AggregatorCredential[];
};
/** @returns {AggregatorCredential} */
declare function AggregatorCredential(): AggregatorCredential;
type AggregatorCredential = {
    key?: string;
    secret?: string;
    merchant_id?: string;
    is_active?: boolean;
    config_type?: string;
    display?: AggregatorDisplayItem;
    aggregator?: string;
    logo?: string;
    display_name?: string;
    integration_type?: string;
};
/** @returns {AggregatorDisplayItem} */
declare function AggregatorDisplayItem(): AggregatorDisplayItem;
type AggregatorDisplayItem = {
    info?: string[];
    link?: string;
    text?: string;
    description?: string;
    review_status?: string;
};
/** @returns {GetDeviceResponse} */
declare function GetDeviceResponse(): GetDeviceResponse;
type GetDeviceResponse = {
    /**
     * - Message
     */
    message?: string;
    /**
     * - Response is successful or not.
     */
    success?: boolean;
    items?: BusinessUnitDevice;
};
/** @returns {BusinessUnitDevice} */
declare function BusinessUnitDevice(): BusinessUnitDevice;
type BusinessUnitDevice = {
    business_unit?: BusinessUnit[];
    /**
     * - List of devices.
     */
    device?: Device[];
};
/** @returns {BusinessUnit} */
declare function BusinessUnit(): BusinessUnit;
type BusinessUnit = {
    /**
     * - The name of the business unit.
     */
    name?: string;
    /**
     * - The slug of the business unit.
     */
    slug?: string;
};
/** @returns {Device} */
declare function Device(): Device;
type Device = {
    /**
     * - The name of the device.
     */
    name?: string;
    /**
     * - The slug of the device.
     */
    slug?: string;
};
/** @returns {AggregatorHistoryResponse} */
declare function AggregatorHistoryResponse(): AggregatorHistoryResponse;
type AggregatorHistoryResponse = {
    success?: boolean;
    items?: HistoryItem[];
};
/** @returns {HistoryItem} */
declare function HistoryItem(): HistoryItem;
type HistoryItem = {
    created_on?: string;
    updated_on?: string;
    reviewer?: string;
    comments?: string;
    review_status?: string;
    is_active?: boolean;
    config_type?: string;
    public_token?: string;
    razorpay_account_id?: string;
    key?: string;
    secret?: string;
    webhook_secret?: string;
};
/** @returns {CheckoutType} */
declare function CheckoutType(): CheckoutType;
type CheckoutType = {
    name?: string;
    slug?: string;
};
/** @returns {Mode} */
declare function Mode(): Mode;
type Mode = {
    name?: string;
    slug?: string;
};
/** @returns {Country} */
declare function Country(): Country;
type Country = {
    name?: string;
    slug?: string;
};
/** @returns {Currency} */
declare function Currency(): Currency;
type Currency = {
    name?: string;
    slug?: string;
};
/** @returns {RefundTo} */
declare function RefundTo(): RefundTo;
type RefundTo = {
    source?: string;
    others?: string;
};
/** @returns {PaymentMethodConfigResponse} */
declare function PaymentMethodConfigResponse(): PaymentMethodConfigResponse;
type PaymentMethodConfigResponse = {
    success?: boolean;
    refund_to?: RefundTo;
    required_session_paths?: RequiredSessionPath[];
    payment_methods?: PaymentMode[];
    checkout_type?: CheckoutType[];
    auto_capture?: boolean[];
    mode?: Mode[];
    country?: Country[];
    currency?: Currency[];
};
/** @returns {RequiredSessionPath} */
declare function RequiredSessionPath(): RequiredSessionPath;
type RequiredSessionPath = {
    version?: string;
    paths?: SessionItem[];
};
/** @returns {SessionItem} */
declare function SessionItem(): SessionItem;
type SessionItem = {
    type?: string;
    uri_path?: string;
    content_type?: string;
    methods?: string[];
};
/** @returns {PaymentErrorCodeAndResponse} */
declare function PaymentErrorCodeAndResponse(): PaymentErrorCodeAndResponse;
type PaymentErrorCodeAndResponse = {
    error?: PaymentError;
    /**
     * - Response is successful or not
     */
    success?: boolean;
    error_msg?: string;
    status?: string;
    message?: string;
};
/** @returns {PaymentError} */
declare function PaymentError(): PaymentError;
type PaymentError = {
    order_id?: string[];
    order_type?: string[];
    transaction_amount_in_paise?: string[];
};
/** @returns {ShipmentBeneficiaryDetailsResponse} */
declare function ShipmentBeneficiaryDetailsResponse(): ShipmentBeneficiaryDetailsResponse;
type ShipmentBeneficiaryDetailsResponse = {
    /**
     * - Response is successful or not.
     */
    success?: boolean;
    /**
     * - Shipment Id
     */
    shipment_id?: string;
    transfer_mode?: TransferMode;
    /**
     * - Message of response
     */
    message?: string;
    /**
     * - Encrypted beneficiary details
     */
    beneficiary_details?: string;
};
