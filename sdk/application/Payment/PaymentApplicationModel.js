const Joi = require("joi");

/**
 * @typedef AggregatorConfigDetail
 * @property {string} [secret] - Masked payment gateway api secret
 * @property {string} [api] - Payment gateway api endpoint
 * @property {string} [pin] - Masked pin
 * @property {string} [config_type] - Fynd or self payment gateway
 * @property {string} [merchant_key] - Unique merchant key
 * @property {string} [verify_api] - Payment gateway verify payment api endpoint
 * @property {string} [key] - Payment gateway api key
 * @property {string} [user_id] - Registered User id
 * @property {Object} [merchant_id]
 * @property {string} [api_domain] - Payment gateway api endpoint
 * @property {string} [webhook_username]
 * @property {string} [webhook_password]
 * @property {string} [signature_key]
 * @property {string} [merchant_salt]
 * @property {string} [checkout_formpost_url]
 * @property {string} [refund_api_domain]
 * @property {string} [non_trxn_url]
 * @property {string} [trxn_url]
 * @property {string} [webhook_secret]
 * @property {string} [is_sub_fynd_account]
 * @property {string} [vpa]
 * @property {string} [api_key]
 * @property {string} [secret_key]
 * @property {string} [product_id]
 * @property {string} [domain]
 * @property {Object} [is_active]
 * @property {Object} [sdk]
 */

/**
 * @typedef AggregatorsConfigDetailResponse
 * @property {boolean} success
 * @property {AggregatorConfigDetail} [razorpay]
 * @property {AggregatorConfigDetail} [juspay]
 * @property {AggregatorConfigDetail} [simpl]
 * @property {AggregatorConfigDetail} [payumoney]
 * @property {AggregatorConfigDetail} [rupifi]
 * @property {AggregatorConfigDetail} [mswipe]
 * @property {AggregatorConfigDetail} [stripe]
 * @property {AggregatorConfigDetail} [ccavenue]
 * @property {AggregatorConfigDetail} [ajiodhan]
 * @property {AggregatorConfigDetail} [potlee]
 * @property {AggregatorConfigDetail} [qr_refund_jiopay]
 * @property {AggregatorConfigDetail} [offerxone]
 * @property {string} env - Environment i.e Live or Test
 */

/**
 * @typedef ErrorCodeAndDescription
 * @property {string} [code] - Error descrption code.
 * @property {string} description - Error human understandable description.
 */

/**
 * @typedef HttpErrorCodeAndResponse
 * @property {ErrorCodeAndDescription} [error]
 * @property {boolean} success - Response is successful or not
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
 * @typedef PaymentOptionErrorResponse
 * @property {string} [message]
 * @property {string[]} [error]
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef PaymentPOSOptionErrorResponse
 * @property {string} [message]
 * @property {PaymentError} [error]
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef OrderErrorResponse
 * @property {ErrorResponse} [data]
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef PaymentError
 * @property {string[]} [order_id]
 * @property {string[]} [order_type]
 * @property {string[]} [transaction_amount_in_paise]
 */

/**
 * @typedef AttachCardRequest
 * @property {string} [nickname]
 * @property {boolean} [refresh] - Refresh cache flag.
 * @property {string} card_id - Card token of payment gateway.
 * @property {string} [name_on_card]
 */

/**
 * @typedef AttachCardsResponse
 * @property {Object} [data] - List of cards of customer.
 * @property {boolean} success - Response is successful or not.
 * @property {string} [message] - Human readable message.
 */

/**
 * @typedef CardPaymentGateway
 * @property {string} [api] - Payment gateway CARD api endpoint
 * @property {string} aggregator - Payment gateway name.
 * @property {string} [customer_id] - Payment gateway customer id.
 */

/**
 * @typedef ActiveCardPaymentGatewayResponse
 * @property {CardPaymentGateway} cards
 * @property {boolean} success - Response is successful or not.
 * @property {string} message - Human readable message.
 */

/**
 * @typedef Card
 * @property {string} [card_number] - Card_number
 * @property {string} [card_name] - Card_name
 * @property {string} [card_type] - Card_type
 * @property {string} [card_brand_image] - Card_brand_image
 * @property {string} [card_reference] - Card_reference
 * @property {string} [card_issuer] - Card_issuer
 * @property {string} [card_brand] - Card_brand
 * @property {boolean} [expired] - Expired
 * @property {boolean} [compliant_with_tokenisation_guidelines] - If card is
 *   tokenised or not
 * @property {string} [card_isin] - Card_isin
 * @property {number} [exp_year] - Exp_year
 * @property {string} [nickname] - Nickname
 * @property {string} aggregator_name - Aggregator_name
 * @property {string} [card_fingerprint] - Card_fingerprint
 * @property {string} [card_token] - Card_token
 * @property {number} [exp_month] - Exp_month
 * @property {string} [card_id] - Card_id
 */

/**
 * @typedef ListCardsResponse
 * @property {Card[]} [data] - List of cards of customer.
 * @property {boolean} success - Response is successful or not.
 * @property {string} message - Human readable message.
 */

/**
 * @typedef DeletehCardRequest
 * @property {string} card_id - Card token of payment gateway.
 */

/**
 * @typedef DeleteCardsResponse
 * @property {boolean} success - Response is successful or not.
 * @property {string} [message] - Human readable message.
 */

/**
 * @typedef ValidateCustomerRequest
 * @property {string} aggregator - Payment gateway name in camel case i.e Simpl, Rupifi
 * @property {number} transaction_amount_in_paise - Payable amount in paise
 * @property {string} phone_number - User mobile number without country code.
 * @property {Object} [billing_address] - Extra meta fields.
 * @property {Object[]} [order_items] - Extra meta fields.
 * @property {string} [payload] - Hashed payload string.
 * @property {Object} [merchant_params] - Extra meta fields.
 * @property {Object} [delivery_address] - Extra meta fields.
 */

/**
 * @typedef ValidateCustomerResponse
 * @property {ValidateCustomer} data
 * @property {boolean} success - Response is successful or not
 * @property {string} message - Error or success message.
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
 * @typedef ChargeCustomerRequest
 * @property {boolean} [verified] - Already Verified flag from payment gateway i.e Mswipe
 * @property {string} aggregator - Payment gateway name i.e Simpl, Mswipe
 * @property {string} [order_id] - Unique order id.
 * @property {string} [transaction_token] - Transaction token of payment gateway.
 * @property {number} amount - Chargable amount of order.
 */

/**
 * @typedef ChargeCustomerResponse
 * @property {string} status - Status of charged payment.
 * @property {string[]} [cart_id] - Cart id of customer
 * @property {boolean} success - Response is successful or not.
 * @property {string} aggregator - Payment gateway name i.e Simpl, Mswipe
 * @property {string} message - Human readable message.
 * @property {string} order_id - Unique order id.
 * @property {string} [delivery_address_id] - Delivery adddress id of customer
 */

/**
 * @typedef PaymentInitializationRequest
 * @property {string} [razorpay_payment_id] - Payment gateway payment id
 * @property {string} method - Payment method
 * @property {string} [device_id] - EDC machine Unique Identifier
 * @property {string} aggregator - Payment gateway name
 * @property {string} customer_id - Payment gateway customer id.
 * @property {string} contact - Customer valid mobile number
 * @property {string} merchant_order_id - Unique fynd order id
 * @property {string} [vpa] - Customer vpa address
 * @property {string} order_id - Payment gateway order id
 * @property {string} currency - Currency code.
 * @property {number} [timeout] - Payment polling timeout if not recieved response
 * @property {number} amount - Payable amount.
 * @property {string} email - Customer valid email
 * @property {string} [unique_link_id]
 */

/**
 * @typedef PaymentInitializationResponse
 * @property {string} [status] - Status of payment.
 * @property {string} [razorpay_payment_id] - Payment id.
 * @property {string} [aggregator_order_id] - Payment order id
 * @property {string} method - Payment method
 * @property {boolean} success - Response is successful or not.
 * @property {string} [upi_poll_url] - UPI poll url.
 * @property {string} [virtual_id] - Payment virtual address.
 * @property {string} [device_id] - EDC machine Unique Identifier
 * @property {string} polling_url - Polling url.
 * @property {string} aggregator - Payment gateway name
 * @property {string} merchant_order_id - Order id
 * @property {string} [customer_id] - Payment gateway customer id.
 * @property {string} [vpa] - Customer vpa address
 * @property {string} [currency] - Currency code.
 * @property {number} [timeout] - Timeout.
 * @property {number} [amount] - Payable amount.
 * @property {string} [bqr_image] - Bharath qr image url.
 * @property {string} [unique_link_id]
 */

/**
 * @typedef PaymentStatusUpdateRequest
 * @property {string} [aggregator_order_id]
 * @property {string} status - Status of payment.
 * @property {string} merchant_transaction_id - Unique fynd transaction id
 * @property {string} method - Payment method
 * @property {string} [device_id] - EDC machine Unique Identifier
 * @property {string} aggregator - Payment gateway name
 * @property {string} customer_id - Payment gateway customer id.
 * @property {string} contact - Customer valid mobile number
 * @property {string} merchant_order_id - Unique fynd order id
 * @property {string} [vpa] - Customer vpa address
 * @property {string} order_id - Payment gateway order id
 * @property {string} currency - Currency code.
 * @property {number} amount - Payable amount.
 * @property {string} email - Customer valid email
 * @property {string} [unique_link_id]
 * @property {string} [razorpay_payment_id]
 */

/**
 * @typedef PaymentStatusUpdateResponse
 * @property {string} status - Payment status
 * @property {boolean} [success] - Response is successful or not
 * @property {boolean} [retry] - Response is successful or not.
 * @property {string} [redirect_url] - Redirect url
 * @property {string} aggregator_name - Payment gateway name
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [code] - Code
 * @property {string} [package_name] - Package_name
 */

/**
 * @typedef PaymentModeLogo
 * @property {string} large - Large
 * @property {string} small - Smalll
 */

/**
 * @typedef IntentApp
 * @property {string} [code] - Code
 * @property {string} [package_name] - Package_name
 * @property {PaymentModeLogo} [logos]
 * @property {string} [display_name] - Display_name
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
 * @typedef PaymentModeList
 * @property {Object} [meta]
 * @property {boolean} [collect_flow]
 * @property {string} [provider]
 * @property {string} [wallet_name]
 * @property {string} [wallet_code]
 * @property {number} [wallet_id]
 * @property {string} [bank_name]
 * @property {string} [bank_code]
 * @property {string} [url]
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
 * @property {boolean} [is_pay_by_card_pl] - This flag will be true in case of
 *   Payment link payment through card
 * @property {boolean} [add_card_enabled] - Annonymous card flag
 * @property {number} display_priority - Dispaly Priority
 * @property {string} display_name - Payment mode display name
 * @property {PaymentModeList[]} [list] - Payment mode
 * @property {boolean} [save_card] - Card save or not
 * @property {string} [aggregator_name] - Dispaly Priority
 * @property {string} name - Payment mode name
 * @property {boolean} [anonymous_enable] - Annonymous card flag
 * @property {number} [payment_mode_id] - Payment mode id
 * @property {PaymentModeLogo} [logo_url]
 * @property {Version} [version]
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
 * @typedef PaymentFlowData
 * @property {boolean} [is_customer_validation_required]
 * @property {string} [cust_validation_url]
 * @property {PaymentConfig} [config]
 * @property {GatewayData} [data]
 * @property {string} [return_url]
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
 * @property {AggregatorRoute} [offerxone]
 */

/**
 * @typedef PaymentOptionAndFlow
 * @property {RootPaymentMode[]} payment_option - Payment options
 * @property {PaymentFlow} payment_flows
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
 */

/**
 * @typedef WalletLinkRequestSchema
 * @property {string} [aggregator] - Aggregator Name
 * @property {string} mobile - Mobile Number for Wallet
 * @property {string} wallet_code - Wallet Code
 */

/**
 * @typedef WalletVerifyRequestSchema
 * @property {string} [aggregator] - Aggregator Name
 * @property {string} link_token - Token for wallet linking
 * @property {number} otp - OTP received for wallet linking
 */

/**
 * @typedef WalletDelinkRequestSchema
 * @property {string} [aggregator] - Aggregator Name
 * @property {string} wallet_code - Wallet Code
 */

/**
 * @typedef WalletResponseSchema
 * @property {WalletResponseData} data
 * @property {boolean} success - Success/Failure of the API call
 */

/**
 * @typedef WalletResponseData
 * @property {string} [message]
 * @property {string} [reason]
 * @property {string} [link_token]
 */

/**
 * @typedef RupifiBannerData
 * @property {string} [status] - Rupifi KYC status
 * @property {string} [kyc_url] - Rupifi KYC banner url.
 */

/**
 * @typedef RupifiBannerResponse
 * @property {RupifiBannerData} data
 * @property {boolean} success - Successful or not.
 */

/**
 * @typedef EpaylaterBannerData
 * @property {string} [status] - Epaylater KYC status
 * @property {string} [message] - EPayLater message
 * @property {boolean} display - Need to display banner or not
 */

/**
 * @typedef EpaylaterBannerResponse
 * @property {EpaylaterBannerData} data
 * @property {boolean} success - Successful or not.
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
 * @typedef renderHTMLRequest
 * @property {string} [returntype] - Return Type of API
 * @property {string} base64_html - Base64 encoded html string
 */

/**
 * @typedef renderHTMLResponse
 * @property {string} html - HTML string
 */

/**
 * @typedef ValidateVPARequest
 * @property {string} upi_vpa - UPI ID
 */

/**
 * @typedef ValidateUPI
 * @property {string} status - VALID or INVALID
 * @property {string} customer_name - Customer Bank
 * @property {boolean} is_valid - Boolean is true or false.
 * @property {string} upi_vpa - UPI ID
 */

/**
 * @typedef ValidateVPAResponse
 * @property {ValidateUPI} data
 * @property {boolean} success - Response is successful or not.
 */

/**
 * @typedef CardDetails
 * @property {boolean} status - Status
 * @property {string} country - Country Name
 * @property {string} bank_code - Bank Code
 * @property {string} id - Id
 * @property {string} [card_exp_year] - Card Expire Year
 * @property {string} card_brand - Card brand like VISA/RUPAY
 * @property {string} type - Card Type Credit/Debit
 * @property {string} card_sub_type - Card Sub type
 * @property {boolean} is_domestic_card - Is card domestic or international
 * @property {string} [name_on_card] - Name on Card
 * @property {string} [card_exp_month] - Card Expire Month
 * @property {string} extended_card_type - Extended Card Type
 * @property {string} card_object - Card bin or Card refrence
 * @property {string} [card_token] - Card Token
 * @property {string} [user] - Customer/User ID
 * @property {string} bank - Bank name
 */

/**
 * @typedef CardDetailsResponse
 * @property {CardDetails} data
 * @property {boolean} success - Response is successful or not.
 */

/**
 * @typedef TransferItemsDetails
 * @property {number} id -
 * @property {string} [display_name] - Beneficiary Display Name
 * @property {string} logo_large - Beneficiary large Logo
 * @property {string} logo_small - Beneficiary small Logo
 * @property {string} name - Beneficiary Name
 */

/**
 * @typedef TransferModeDetails
 * @property {TransferItemsDetails[]} [items] - Beneficiary Mode Items
 * @property {string} display_name - Beneficiary Mode Name
 */

/**
 * @typedef TransferModeResponse
 * @property {TransferModeDetails[]} data - Response Object
 */

/**
 * @typedef UpdateRefundTransferModeRequest
 * @property {boolean} enable - True for enabling the Transfer Mode
 * @property {string} transfer_mode - Transfer Mode of the Beneficiary to be added
 */

/**
 * @typedef UpdateRefundTransferModeResponse
 * @property {boolean} [success] - Response is successful or not
 */

/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} modified_on - MOdification Date of Beneficiary
 * @property {string} account_no - Account Number
 * @property {string} mobile - MObile no of User
 * @property {string} bank_name - Bank Name Of Account
 * @property {string} ifsc_code - Ifsc Code Of Account
 * @property {boolean} is_active - Boolean Flag whether Beneficiary set or not
 * @property {string} beneficiary_id - Benenficiary Id
 * @property {string} account_holder - Account Holder Name
 * @property {string} email - EMail of User
 * @property {string} [delights_user_name] - User Id Who filled the Beneficiary
 * @property {number} id -
 * @property {string} transfer_mode - Transfer Mode Of Account
 * @property {string} branch_name - Branch Name Of Account
 * @property {string} created_on - Creation Date of Beneficiary
 * @property {string} subtitle - SHort Title Of Account
 * @property {string} comment - Remarks
 * @property {string} address - Address of User
 * @property {string} title - Title Of Account
 * @property {string} display_name - Display Name Of Account
 * @property {string} [aggregator_id]
 * @property {boolean} [is_verified]
 * @property {string} [status]
 * @property {string} [txn_id]
 * @property {Object} [meta]
 * @property {boolean} [default_beneficiary]
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {OrderBeneficiaryDetails[]} [beneficiaries] - All Beneficiaries Of An Order
 * @property {boolean} [show_beneficiary_details] - Show beneficiary details or not.
 * @property {OrderBeneficiaryDetails[]} [bank]
 */

/**
 * @typedef NotFoundResourceError
 * @property {string} code - Bad Request Data
 * @property {string} description - Not Found
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef IfscCodeResponse
 * @property {string} branch_name - Branch Name Of Account
 * @property {boolean} [success] - Response is successful or not
 * @property {string} bank_name - Bank Name Of Account
 */

/**
 * @typedef AddBeneficiaryViaOtpVerificationRequest
 * @property {string} request_id - Request Id sent in
 * @property {string} hash_key - Hash key of the beneficiary Id
 * @property {string} otp - Otp sent to the given Mobile No
 */

/**
 * @typedef AddBeneficiaryViaOtpVerificationResponse
 * @property {boolean} [success] - Response is successful or not
 * @property {string} [message] - Aggregator Response of beneficicary
 */

/**
 * @typedef WrongOtpError
 * @property {boolean} [is_verified_flag] - Vefified flag.
 * @property {string} [description] - Wrong OTP Code
 * @property {boolean} success - Response is successful or not
 * @property {string} [message] - Response message
 */

/**
 * @typedef BeneficiaryModeDetails
 * @property {string} [account_no] - Account NUmber of the Account Holder
 * @property {string} [address] - Address of the User
 * @property {string} [mobile] - Moblie Number of the User
 * @property {string} [bank_name] - Bank Name of the Account
 * @property {string} [comment] - Remarks added by The user
 * @property {string} [ifsc_code] - Ifsc Code of the Account
 * @property {string} [email]
 * @property {string} [vpa]
 * @property {string} [branch_name] - Branch Name of the Account
 * @property {string} [account_holder] - Name of the Account Holder
 * @property {string} [wallet]
 * @property {string} [beneficiary_id]
 */

/**
 * @typedef AddBeneficiaryDetailsRequest
 * @property {string} [transfer_mode]
 * @property {string} [shipment_id]
 * @property {boolean} [delights]
 * @property {string} order_id
 * @property {BeneficiaryModeDetails} details
 */

/**
 * @typedef RefundAccountResponse
 * @property {boolean} [is_verified_flag]
 * @property {RefundData} [data]
 * @property {boolean} success - Success or failure flag.
 * @property {string} message - Response message
 */

/**
 * @typedef RefundData
 * @property {boolean} [bene_name_mismatch]
 * @property {string} [status]
 * @property {string} [subcode]
 * @property {string} [hash_key]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {number} [request_id]
 */

/**
 * @typedef AddBeneficiaryDetailsOTPResponse
 * @property {boolean} [success]
 * @property {BankDetailsForOTP[]} [data]
 * @property {string} [message]
 * @property {boolean} [is_verified_flag]
 */

/**
 * @typedef PostAddBeneficiaryDetailsOTPResponse
 * @property {boolean} [success]
 * @property {PostBankDetailsForOTP} [data]
 * @property {string} [message]
 * @property {boolean} [is_verified_flag]
 */

/**
 * @typedef PostBankDetailsForOTP
 * @property {string} [status]
 * @property {string} [message]
 */

/**
 * @typedef BankDetailsForOTP
 * @property {string} account_no
 * @property {string} bank_name
 * @property {string} ifsc_code
 * @property {string} branch_name
 * @property {string} account_holder
 * @property {string} [email]
 * @property {string} [beneficiary_id]
 * @property {string} [address]
 * @property {string} [mobile]
 * @property {string} [comment]
 */

/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {string} order_id
 * @property {string} [request_hash]
 * @property {BankDetailsForOTP} details
 */

/**
 * @typedef WalletOtpRequest
 * @property {string} country_code - Country Code of the Mobile Number
 * @property {string} mobile - Wallet Moblie Number of the User
 */

/**
 * @typedef WalletOtpResponse
 * @property {string} [request_id] - Request id
 * @property {boolean} is_verified_flag - Boolean Flag whether OTP Validation is
 *   already done or not
 * @property {boolean} [success] - Response is successful or not
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
 * @typedef RefundOrderBenRequest
 * @property {string[]} order_ids - List of order ids
 */

/**
 * @typedef RefundOrderBenResponse
 * @property {Object} [data]
 */

/**
 * @typedef GetPaymentLinkResponse
 * @property {number} status_code - HTTP status code
 * @property {string} [payment_link_current_status] - Status of payment link
 * @property {boolean} success - Successful or failure
 * @property {number} [polling_timeout] - Polling request timeout
 * @property {string} [payment_link_url] - Url of payment link
 * @property {string} [external_order_id] - Merchant order id
 * @property {string} message - Message
 * @property {string} [merchant_name] - Merchant name
 * @property {number} [amount] - Total value of order
 * @property {string} [currency] - Currency
 * @property {ErrorDescription} [error]
 */

/**
 * @typedef ErrorDescription
 * @property {string} [payment_transaction_id] - Payment transaction id
 * @property {boolean} [expired] - Payment link expired or not
 * @property {string} [merchant_order_id] - Order id
 * @property {string} [merchant_name] - Name of merchant that created payment link
 * @property {string} [msg] - Message
 * @property {boolean} [cancelled] - Payment link is cancelled or not
 * @property {number} [amount] - Amount paid
 * @property {boolean} [invalid_id] - Payment link id is valid or not
 * @property {string} [description]
 */

/**
 * @typedef ErrorResponse
 * @property {number} [status_code] - HTTP status code
 * @property {ErrorDescription} [error]
 * @property {string} message - Message
 * @property {boolean} success - Successful or failure
 */

/**
 * @typedef PollingPaymentLinkErrorResponse
 * @property {number} [status_code] - HTTP status code
 * @property {string} [error]
 * @property {string} message - Message
 * @property {boolean} success - Successful or failure
 */

/**
 * @typedef CreatePaymentLinkMeta
 * @property {string} cart_id
 * @property {string} checkout_mode
 * @property {string} [assign_card_id]
 * @property {string} amount
 * @property {string} [pincode]
 */

/**
 * @typedef CreatePaymentLinkRequest
 * @property {string} [description] - Merchant order id
 * @property {string} external_order_id - Merchant order id
 * @property {string} mobile_number - Mobile number to which the payment link is
 *   to be sent
 * @property {number} amount - Total value of order
 * @property {CreatePaymentLinkMeta} meta
 * @property {string} email - Email to which the payment link is to be sent
 * @property {string} [country_phone_code]
 */

/**
 * @typedef CreatePaymentLinkResponse
 * @property {number} status_code - HTTP status code
 * @property {boolean} success - Successful or failure
 * @property {number} [polling_timeout] - Polling request timeout
 * @property {string} [payment_link_url] - Url of payment link
 * @property {string} message - Message
 * @property {string} [payment_link_id] - Unique id of payment link
 */

/**
 * @typedef CancelOrResendPaymentLinkRequest
 * @property {string} payment_link_id - Unique id of payment link
 */

/**
 * @typedef ResendPaymentLinkResponse
 * @property {number} status_code - HTTP status code
 * @property {number} [polling_timeout] - Polling request timeout
 * @property {boolean} success - Successful or failure
 * @property {string} message - Message
 * @property {PaymentLinkError} [error]
 */

/**
 * @typedef PaymentLinkError
 * @property {boolean} [cancelled]
 * @property {string} [msg] - Message
 */

/**
 * @typedef CancelPaymentLinkResponse
 * @property {number} status_code - HTTP status code
 * @property {boolean} success - Successful or failure
 * @property {string} message - Message
 */

/**
 * @typedef PollingPaymentLinkResponse
 * @property {string} [status] - Status of payment link
 * @property {number} [status_code] - HTTP status code
 * @property {boolean} [success] - Successful or failure
 * @property {number} [http_status] - HTTP status code
 * @property {string} [message] - Message
 * @property {string} [order_id] - Fynd order id
 * @property {string} [redirect_url] - Url to redirect to
 * @property {string} [payment_link_id] - Payment link id
 * @property {string} [aggregator_name] - Aggregator name
 * @property {number} [amount] - Amount
 */

/**
 * @typedef PaymentMethodsMeta
 * @property {string} merchant_code - Merchant code
 * @property {string} payment_gateway - Payment gateway name
 * @property {string} payment_identifier - Payment identifier
 */

/**
 * @typedef CreateOrderUserPaymentMethods
 * @property {string} name - Payment mode name
 * @property {string} mode - Payment mode
 * @property {PaymentMethodsMeta} meta
 */

/**
 * @typedef CreateOrderUserRequest
 * @property {string} failure_callback_url - Failure page url
 * @property {string} currency - Currency
 * @property {string} payment_link_id - Unique id of payment link
 * @property {CreateOrderUserPaymentMethods} payment_methods
 * @property {string} success_callback_url - Success page url
 * @property {Object} [meta] - Meta
 */

/**
 * @typedef CreateOrderUserData
 * @property {string} [method] - Method
 * @property {string} [aggregator] - Aggregator name
 * @property {string} [customer_id] - Aggregator customer id
 * @property {string} [contact] - Mobile number
 * @property {string} [merchant_order_id] - Merchant order id
 * @property {string} [order_id] - Aggregator order id
 * @property {string} [currency] - Currency
 * @property {string} [callback_url] - Callback url for aggregator
 * @property {number} [amount] - Amount
 * @property {string} [email] - Email
 * @property {string} [base64_html]
 */

/**
 * @typedef CreateOrderUserResponse
 * @property {number} [status_code] - HTTP status code
 * @property {boolean} success - Successful or failure
 * @property {CreateOrderUserData} [data]
 * @property {string} message - Message
 * @property {string} [order_id] - Merchant order id
 * @property {string} [callback_url] - Callback url for aggregator
 * @property {string} [payment_confirm_url] - Payment confirm url for aggregator
 */

/**
 * @typedef BalanceDetails
 * @property {string} [formatted_value] - Formated Amount with currency symbol
 * @property {string} [currency] - Currency Code
 * @property {number} [value] - Payment amount
 */

/**
 * @typedef CreditSummary
 * @property {BalanceDetails} [total_due_amount]
 * @property {string} [status] - Customer Credit status
 * @property {BalanceDetails} [limit]
 * @property {string} [credit_line_id] - ID at Credit aggregator's end
 * @property {BalanceDetails} [amount_available]
 * @property {BalanceDetails} [due_amount]
 * @property {string} [due_date] - Due date for repayment
 * @property {BalanceDetails} [balance]
 * @property {string} [status_message] - Message to customer
 * @property {string} [repayment_url] - Url for repayment
 * @property {string} [soa_url] - Statement of accounts. Show payment history.
 * @property {boolean} [is_eligible_for_txn] - Eligiblity flag to complete transaction
 * @property {string} [merchant_customer_ref_id] - Unique aggregator customer id
 * @property {string} [buyer_status] - Status from Credit aggregator's end
 * @property {string} [activation_url] - Url for activation
 */

/**
 * @typedef CustomerCreditSummaryResponse
 * @property {CreditSummary} [data]
 * @property {boolean} success - Payment confirmation updated or not.
 * @property {string} [message]
 */

/**
 * @typedef RedirectURL
 * @property {boolean} status - Aggregator's Operation is successful or not.
 * @property {string} [signup_url] - URL to which the user may redirect.
 * @property {string} [redirect_url]
 * @property {string} [extra]
 */

/**
 * @typedef RedirectToAggregatorResponse
 * @property {RedirectURL} data
 * @property {boolean} success - Status updated or not.
 */

/**
 * @typedef CreditDetail
 * @property {boolean} status - Operation is successful or not.
 * @property {boolean} is_registered - User is registered with aggregator or not.
 * @property {string} signup_url - URL to which the user may redirect.
 */

/**
 * @typedef CheckCreditResponse
 * @property {CreditDetail} data
 * @property {boolean} success - Operation is successful or not.
 */

/**
 * @typedef KYCAddress
 * @property {string} city - City
 * @property {string} [addressline2] - Address Line 2
 * @property {string} state - State
 * @property {string} [ownership_type] - Address Owner Type
 * @property {string} pincode - Pincode
 * @property {string} [land_mark] - Land Mark
 * @property {string} addressline1 - Address Line 1
 */

/**
 * @typedef UserPersonalInfoInDetails
 * @property {string} first_name - First Name
 * @property {string} [voter_id] - Voter ID Number
 * @property {string} [gender] - Gender
 * @property {string} dob - DOB
 * @property {string} [passport] - Passport
 * @property {string} [fathers_name] - Father's Name
 * @property {string} [mothers_name] - Mother's Name
 * @property {string} [middle_name] - Middle Name
 * @property {string} [last_name] - Last Name
 * @property {string} [pan] - Pan Number
 * @property {string} [driving_license] - Driver License
 * @property {boolean} email_verified - Is Email Verified or not
 * @property {KYCAddress} address_as_per_id
 * @property {boolean} mobile_verified - Is Mobile Verified or not
 * @property {string} phone - Email
 * @property {string} [email] - Email
 */

/**
 * @typedef MarketplaceInfo
 * @property {string} [date_of_joining] - Date of joining
 * @property {string} name - Name of store
 * @property {string} membership_id - Merchant id
 */

/**
 * @typedef BusinessDetails
 * @property {string} [business_ownership_type] - Business Ownershipp type(e.g Rented)
 * @property {string} [vintage] - Vintage
 * @property {string} [gstin] - GSTIN Number
 * @property {string} [pan] - Pan Number
 * @property {string} [entity_type] - Busineess Entity Type
 * @property {Object} [shop_and_establishment] - Shop Establishment
 * @property {string} [fssai] - FDA License Number
 * @property {string} [fda] - Driver License
 * @property {string} [business_type] - Business Type
 * @property {string} [name] - Business Name
 * @property {KYCAddress} [address]
 * @property {string} [state]
 */

/**
 * @typedef DeviceDetails
 * @property {string} [identification_number] - IP
 * @property {string} [identifier_type] - Static value = ip
 * @property {string} [device_model] - Device Model
 * @property {string} [device_make] - Device maker
 * @property {string} [device_type] - Device Type(E.g. Mobile)
 * @property {string} [os] - OS Name
 * @property {string} [os_version] - OS Version
 */

/**
 * @typedef CustomerOnboardingRequest
 * @property {UserPersonalInfoInDetails} [personal_info]
 * @property {string} [mcc] - Mcc
 * @property {string} aggregator - Aggregator Name
 * @property {MarketplaceInfo} [marketplace_info]
 * @property {string} source - CallbackURL
 * @property {BusinessDetails} [business_info]
 * @property {DeviceDetails} [device]
 */

/**
 * @typedef OnboardSummary
 * @property {string} [redirect_url] - URL to which the user may redirect.
 * @property {Object} [session] - User Session
 * @property {boolean} status - Transaction status
 * @property {string} [status_remark] - Decription of status
 * @property {boolean} [is_eligible_for_txn] - Whether is eligible for transaction
 * @property {string} [merchant_customer_ref_id] - Rupifi customer ID
 * @property {string} [activation_url] - Url for activation
 * @property {string} [type]
 * @property {string} [reason]
 * @property {number} [code]
 * @property {string} [message]
 */

/**
 * @typedef CustomerOnboardingResponse
 * @property {OnboardSummary} data
 * @property {boolean} success - Status updated or not.
 */

/**
 * @typedef OutstandingOrderDetailsResponse
 * @property {number} status_code - HTTP Status code
 * @property {Object[]} [data] - Dict containing the outstanding order details
 * @property {boolean} success - Response is successful or not.
 * @property {string} [message] - Message
 */

/**
 * @typedef PaidOrderDetailsResponse
 * @property {number} status_code - HTTP Status code
 * @property {Object[]} [data] - Dict containing the paid order details
 * @property {boolean} success - Response is successful or not.
 * @property {string} [message] - Message
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
 * @property {Object} transfer_mode - Selected transfer mode for given shipment
 * @property {string} shipment_id - Shipment ID
 * @property {string} message - Message
 * @property {boolean} success - Successful or not.
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
 * @typedef PaymentMethodsMetaOrder
 * @property {string} [merchant_code] - Merchant code
 * @property {string} payment_gateway - Payment gateway name
 * @property {string} [payment_identifier] - Payment identifier
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
 * @property {PaymentOrderMethods[]} [payment_methods]
 * @property {string} order_id - Order id
 * @property {string} [shipment_id] - Shipment_id
 */

/**
 * @typedef PaymentOrderData
 * @property {number} [amount] - Amount
 * @property {string} [aggregator] - Aggregator name
 * @property {string} [callback_url] - Callback url for aggregator
 * @property {string} [order_id] - Aggregator order id
 * @property {string} [customer_id] - Aggregator customer id
 * @property {string} [merchant_order_id] - Merchant order id
 * @property {string} [currency] - Currency
 * @property {string} [email] - Email
 * @property {string} [contact] - Mobile number
 * @property {string} [bank] - Bank
 * @property {string} [method] - Method
 */

/**
 * @typedef PaymentOrderResponse
 * @property {string} [payment_confirm_url] - Payment confirm url for aggregator
 * @property {string} [callback_url] - Callback url for aggregator
 * @property {string} [order_id] - Merchant order id
 * @property {boolean} [success] - Successful or failure
 * @property {number} [status_code] - HTTP status code
 * @property {PaymentOrderData} [data]
 * @property {string} message - Message
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
 * @property {string} shipment_id - Shipment Id of the respective Merchant Order Id
 * @property {string} order_id - Merchant Order Id
 * @property {string} transfer_mode - Transfer Mode of the Beneficiary to be added
 * @property {string} [beneficiary_id] - Beneficiary Hash Id of the beneficiary added
 * @property {ShipmentRefundRequestMeta} [meta]
 */

/**
 * @typedef ShipmentRefundDetail
 * @property {string} shipment_id - Shipment ID
 * @property {string} order_id - Order ID
 * @property {string} transfer_mode - TransferMode
 * @property {string} beneficiary_id - Beneficiary ID
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
 * @typedef RefundErrorCodeAndResponse
 * @property {boolean} success - Response is successful or not
 * @property {string} [message] - Response message
 * @property {IFSCErrorData} [data]
 * @property {EDCError} [error]
 * @property {EDCError} [errors]
 */

/**
 * @typedef IFSCErrorData
 * @property {string} [message] - Error human understandable description.
 * @property {string} [subcode] - Error descrption code.
 * @property {string} [status] - Error.
 */

/**
 * @typedef EDCError
 * @property {string} [error] - Error human understandable description.
 * @property {string} [description] - Error human understandable description.
 * @property {string} [code] - Error descrption code.
 * @property {boolean} [success] - Error descrption code.
 */

/**
 * @typedef RefundOptionErrorCodeAndResponse
 * @property {boolean} success - Response is successful or not
 * @property {RefundOptionMessage} [message]
 * @property {RefundOptionError} [error]
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
 * @typedef CardData
 * @property {string} [type]
 * @property {string} [number]
 * @property {string} [expiration_date]
 */

/**
 * @typedef Account
 * @property {string} [type]
 * @property {string} [routing_number]
 * @property {string} [account_number]
 */

/**
 * @typedef CustomerDetails
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {Address} [address]
 */

/**
 * @typedef CartData
 * @property {string} [_id]
 * @property {number} [uid]
 * @property {string} [gstin]
 * @property {string} [comment]
 * @property {string} [user_id]
 * @property {Article[]} [articles]
 * @property {number} [cashback]
 * @property {number} [discount]
 * @property {Object} [shipment]
 * @property {string} [expire_at]
 * @property {number} [cart_value]
 * @property {string} [created_on]
 * @property {boolean} [is_archive]
 * @property {boolean} [is_default]
 * @property {number} [cod_charges]
 * @property {string} [coupon_code]
 * @property {number} [coupon_value]
 * @property {number[]} [fc_index_map]
 * @property {number} [fynd_credits]
 * @property {string} [payment_mode]
 * @property {string} [checkout_mode]
 * @property {string} [last_modified]
 * @property {number} [total_quantity]
 * @property {number} [cashback_applied]
 * @property {number} [delivery_charges]
 * @property {string} [applied_coupon_id]
 * @property {number} [original_cart_value]
 * @property {number} [bulk_coupon_discount]
 * @property {boolean} [fynd_credits_auto_applied]
 */

/**
 * @typedef Article
 * @property {Object} [set]
 * @property {string} [uid]
 * @property {string} [c_name]
 * @property {boolean} [is_set]
 * @property {string} [s_city]
 * @property {Weight} [weight]
 * @property {number} [avl_qty]
 * @property {boolean} [fragile]
 * @property {number} [item_id]
 * @property {number} [brand_id]
 * @property {number} [cashback]
 * @property {number} [discount]
 * @property {string} [hsn_code]
 * @property {boolean} [is_valid]
 * @property {number} [latitude]
 * @property {number} [quantity]
 * @property {Object} [raw_meta]
 * @property {number} [store_id]
 * @property {Dimension} [dimension]
 * @property {string} [item_size]
 * @property {number} [longitude]
 * @property {number} [old_price]
 * @property {string} [article_id]
 * @property {number} [company_id]
 * @property {number} [gst_amount]
 * @property {Object} [identifier]
 * @property {string} [store_name]
 * @property {number} [unit_price]
 * @property {number} [amount_paid]
 * @property {number} [bulk_margin]
 * @property {number} [cod_charges]
 * @property {Object} [custom_meta]
 * @property {string} [article_code]
 * @property {Manufacturer} [manufacturer]
 * @property {number} [price_marked]
 * @property {number} [bulk_discount]
 * @property {number} [store_pincode]
 * @property {number} [value_of_good]
 * @property {string} [last_update_at]
 * @property {boolean} [return_allowed]
 * @property {number} [transfer_price]
 * @property {number} [price_effective]
 * @property {boolean} [valid_inventory]
 * @property {string} [bulk_coupon_code]
 * @property {number} [cashback_applied]
 * @property {number} [delivery_charges]
 * @property {string} [mongo_article_id]
 * @property {number} [referral_credits]
 * @property {string} [country_of_origin]
 * @property {ArticleAssignment} [article_assignment]
 * @property {number} [gst_tax_percentage]
 * @property {boolean} [cancellation_allowed]
 * @property {number} [coupon_article_count]
 * @property {number} [size_level_total_qty]
 * @property {boolean} [article_assign_status]
 * @property {boolean} [quantity_assign_status]
 * @property {number} [coupon_effective_discount]
 */

/**
 * @typedef Weight
 * @property {string} [unit]
 * @property {number} [shipping]
 * @property {boolean} [is_default]
 */

/**
 * @typedef Dimension
 * @property {string} [unit]
 * @property {number} [width]
 * @property {number} [height]
 * @property {number} [length]
 * @property {boolean} [is_default]
 */

/**
 * @typedef Manufacturer
 * @property {string} [name]
 * @property {string} [address]
 * @property {boolean} [is_default]
 */

/**
 * @typedef ArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy]
 */

/**
 * @typedef CartUser
 * @property {string} [email]
 * @property {string} [gender]
 * @property {string} [mobile]
 * @property {string} [user_id]
 * @property {string} [last_name]
 * @property {string} [user_type]
 * @property {string} [first_name]
 * @property {boolean} [is_authenticated]
 */

/**
 * @typedef Affiliate
 * @property {string} [id]
 * @property {string} [token]
 * @property {Object} [config]
 */

/**
 * @typedef Address
 * @property {string} [street]
 * @property {string} [zip]
 * @property {number} [uid]
 * @property {string} [area]
 * @property {string} [city]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string} [state]
 * @property {string} [address]
 * @property {string} [country]
 * @property {string} [pincode]
 * @property {string} [landmark]
 * @property {string} [area_code]
 * @property {string} [address_type]
 * @property {string} [country_code]
 * @property {string} [area_code_slug]
 * @property {number} [delivery_address_id]
 */

/**
 * @typedef PaymentMethod
 * @property {string} [mode]
 * @property {number} [amount]
 * @property {string} [name]
 * @property {Object} [meta]
 */

/**
 * @typedef CardRequest
 * @property {CartData} [cart]
 * @property {Object} [meta]
 * @property {CartUser} [user]
 * @property {Object} [coupon]
 * @property {Affiliate} [affiliate]
 * @property {Address} [billing_address]
 * @property {Address} [delivery_address]
 * @property {Object} [redemption_rules]
 * @property {string} [payment_identifier]
 * @property {Object} [pick_up_customer_details]
 * @property {boolean} [payment_auto_confirm]
 * @property {PaymentMethod[]} [payment_methods]
 * @property {string} [coupon_id]
 * @property {string} [aggregator]
 * @property {number} [cart_value]
 * @property {string} [order_type]
 * @property {string} [return_url]
 * @property {string} [cashback_id]
 * @property {number} [cod_charges]
 * @property {string} [employee_id]
 * @property {string} [payment_mode]
 * @property {number} [cart_id]
 * @property {number} [cashback]
 * @property {string} [merchant_code]
 * @property {string} [ordering_store]
 */

/**
 * @typedef UpdateAggregatorCardRequest
 * @property {boolean} [refresh]
 */

/**
 * @typedef UpdateAggregatorCardResponse
 * @property {boolean} [success] - Indicates whether the operation was successful or not.
 * @property {string} [message] - A message providing additional information
 *   about the response.
 * @property {AggregatorCard} [cards]
 */

/**
 * @typedef AggregatorCard
 * @property {string} [aggregator] - The aggregator associated with the cards.
 * @property {string} [api] - The API associated with the cards.
 * @property {string} [customer_id] - The customer ID associated with the cards.
 */

/**
 * @typedef UpdateCardResponse
 * @property {boolean} [success] - Indicates whether the operation was successful or not.
 * @property {string} [message] - A message providing additional information
 *   about the response.
 * @property {Object[]} [data]
 */

/**
 * @typedef PaymentCallbackResponse
 * @property {boolean} [success] - Indicates whether the payment callback was
 *   successful or not.
 * @property {string} [message] - Additional information about the payment callback.
 */

/**
 * @typedef PaymentConfirmationRequest
 * @property {string} order_id - Unique order id
 * @property {MultiTenderPaymentMethod[]} payment_methods
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {string} [name] - Payment mode name
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {number} amount - Payment amount
 * @property {string} mode
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {Object} [extra_meta]
 * @property {string} [order_id]
 * @property {string} [payment_id]
 * @property {string} [current_status]
 * @property {string} [payment_gateway]
 * @property {string} [key]
 */

/**
 * @typedef PaymentConfirmationResponse
 * @property {string} [order_id] - Unique order id
 * @property {string} message - Message
 * @property {boolean} success - Payment confirmation updated or not.
 * @property {string} [errors]
 * @property {string} [return_url]
 */

class PaymentApplicationModel {
  /** @returns {AggregatorConfigDetail} */
  static AggregatorConfigDetail() {
    return Joi.object({
      secret: Joi.string().allow(""),
      api: Joi.string().allow("").allow(null),
      pin: Joi.string().allow("").allow(null),
      config_type: Joi.string().allow(""),
      merchant_key: Joi.string().allow("").allow(null),
      verify_api: Joi.string().allow("").allow(null),
      key: Joi.string().allow(""),
      user_id: Joi.string().allow("").allow(null),
      merchant_id: Joi.any(),
      api_domain: Joi.string().allow("").allow(null),
      webhook_username: Joi.string().allow(""),
      webhook_password: Joi.string().allow(""),
      signature_key: Joi.string().allow(""),
      merchant_salt: Joi.string().allow(""),
      checkout_formpost_url: Joi.string().allow(""),
      refund_api_domain: Joi.string().allow(""),
      non_trxn_url: Joi.string().allow(""),
      trxn_url: Joi.string().allow(""),
      webhook_secret: Joi.string().allow(""),
      is_sub_fynd_account: Joi.string().allow("").allow(null),
      vpa: Joi.string().allow(""),
      api_key: Joi.string().allow(""),
      secret_key: Joi.string().allow(""),
      product_id: Joi.string().allow(""),
      domain: Joi.string().allow(""),
      is_active: Joi.any(),
      sdk: Joi.any(),
    });
  }

  /** @returns {AggregatorsConfigDetailResponse} */
  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      razorpay: PaymentApplicationModel.AggregatorConfigDetail(),
      juspay: PaymentApplicationModel.AggregatorConfigDetail(),
      simpl: PaymentApplicationModel.AggregatorConfigDetail(),
      payumoney: PaymentApplicationModel.AggregatorConfigDetail(),
      rupifi: PaymentApplicationModel.AggregatorConfigDetail(),
      mswipe: PaymentApplicationModel.AggregatorConfigDetail(),
      stripe: PaymentApplicationModel.AggregatorConfigDetail(),
      ccavenue: PaymentApplicationModel.AggregatorConfigDetail(),
      ajiodhan: PaymentApplicationModel.AggregatorConfigDetail(),
      potlee: PaymentApplicationModel.AggregatorConfigDetail(),
      qr_refund_jiopay: PaymentApplicationModel.AggregatorConfigDetail(),
      offerxone: PaymentApplicationModel.AggregatorConfigDetail(),
      env: Joi.string().allow("").required(),
    });
  }

  /** @returns {ErrorCodeAndDescription} */
  static ErrorCodeAndDescription() {
    return Joi.object({
      code: Joi.string().allow(""),
      description: Joi.string().allow("").required(),
    });
  }

  /** @returns {HttpErrorCodeAndResponse} */
  static HttpErrorCodeAndResponse() {
    return Joi.object({
      error: PaymentApplicationModel.ErrorCodeAndDescription(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PaymentErrorCodeAndResponse} */
  static PaymentErrorCodeAndResponse() {
    return Joi.object({
      error: PaymentApplicationModel.PaymentError(),
      success: Joi.boolean(),
      error_msg: Joi.string().allow(""),
      status: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentOptionErrorResponse} */
  static PaymentOptionErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      error: Joi.array().items(Joi.string().allow("")),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PaymentPOSOptionErrorResponse} */
  static PaymentPOSOptionErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      error: PaymentApplicationModel.PaymentError(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {OrderErrorResponse} */
  static OrderErrorResponse() {
    return Joi.object({
      data: PaymentApplicationModel.ErrorResponse(),
      success: Joi.boolean().required(),
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

  /** @returns {AttachCardRequest} */
  static AttachCardRequest() {
    return Joi.object({
      nickname: Joi.string().allow(""),
      refresh: Joi.boolean().allow(null),
      card_id: Joi.string().allow("").allow(null).required(),
      name_on_card: Joi.string().allow(""),
    });
  }

  /** @returns {AttachCardsResponse} */
  static AttachCardsResponse() {
    return Joi.object({
      data: Joi.any(),
      success: Joi.boolean().required(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CardPaymentGateway} */
  static CardPaymentGateway() {
    return Joi.object({
      api: Joi.string().allow("").allow(null),
      aggregator: Joi.string().allow("").required(),
      customer_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ActiveCardPaymentGatewayResponse} */
  static ActiveCardPaymentGatewayResponse() {
    return Joi.object({
      cards: PaymentApplicationModel.CardPaymentGateway().required(),
      success: Joi.boolean().required(),
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {Card} */
  static Card() {
    return Joi.object({
      card_number: Joi.string().allow("").allow(null),
      card_name: Joi.string().allow("").allow(null),
      card_type: Joi.string().allow("").allow(null),
      card_brand_image: Joi.string().allow("").allow(null),
      card_reference: Joi.string().allow("").allow(null),
      card_issuer: Joi.string().allow("").allow(null),
      card_brand: Joi.string().allow("").allow(null),
      expired: Joi.boolean().allow(null),
      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),
      card_isin: Joi.string().allow("").allow(null),
      exp_year: Joi.number().allow(null),
      nickname: Joi.string().allow("").allow(null),
      aggregator_name: Joi.string().allow("").required(),
      card_fingerprint: Joi.string().allow("").allow(null),
      card_token: Joi.string().allow("").allow(null),
      exp_month: Joi.number().allow(null),
      card_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ListCardsResponse} */
  static ListCardsResponse() {
    return Joi.object({
      data: Joi.array().items(PaymentApplicationModel.Card()),
      success: Joi.boolean().required(),
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {DeletehCardRequest} */
  static DeletehCardRequest() {
    return Joi.object({
      card_id: Joi.string().allow("").allow(null).required(),
    });
  }

  /** @returns {DeleteCardsResponse} */
  static DeleteCardsResponse() {
    return Joi.object({
      success: Joi.boolean().allow(null).required(),
      message: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ValidateCustomerRequest} */
  static ValidateCustomerRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      transaction_amount_in_paise: Joi.number().required(),
      phone_number: Joi.string().allow("").required(),
      billing_address: Joi.any(),
      order_items: Joi.array().items(Joi.any()),
      payload: Joi.string().allow("").allow(null),
      merchant_params: Joi.any(),
      delivery_address: Joi.any(),
    });
  }

  /** @returns {ValidateCustomerResponse} */
  static ValidateCustomerResponse() {
    return Joi.object({
      data: PaymentApplicationModel.ValidateCustomer().required(),
      success: Joi.boolean().required(),
      message: Joi.string().allow("").required(),
      error: PaymentApplicationModel.ValidateCustomer(),
    });
  }

  /** @returns {ValidateCustomer} */
  static ValidateCustomer() {
    return Joi.object({
      data: PaymentApplicationModel.ValidateCustomerData(),
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

  /** @returns {ChargeCustomerRequest} */
  static ChargeCustomerRequest() {
    return Joi.object({
      verified: Joi.boolean().allow(null),
      aggregator: Joi.string().allow("").required(),
      order_id: Joi.string().allow(""),
      transaction_token: Joi.string().allow("").allow(null),
      amount: Joi.number().allow(null).required(),
    });
  }

  /** @returns {ChargeCustomerResponse} */
  static ChargeCustomerResponse() {
    return Joi.object({
      status: Joi.string().allow("").required(),
      cart_id: Joi.array().items(Joi.string().allow("").allow(null)),
      success: Joi.boolean().required(),
      aggregator: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      delivery_address_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PaymentInitializationRequest} */
  static PaymentInitializationRequest() {
    return Joi.object({
      razorpay_payment_id: Joi.string().allow("").allow(null),
      method: Joi.string().allow("").required(),
      device_id: Joi.string().allow("").allow(null),
      aggregator: Joi.string().allow("").required(),
      customer_id: Joi.string().allow("").required(),
      contact: Joi.string().allow("").required(),
      merchant_order_id: Joi.string().allow("").required(),
      vpa: Joi.string().allow("").allow(null),
      order_id: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      timeout: Joi.number().allow(null),
      amount: Joi.number().allow(null).required(),
      email: Joi.string().allow("").required(),
      unique_link_id: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentInitializationResponse} */
  static PaymentInitializationResponse() {
    return Joi.object({
      status: Joi.string().allow(""),
      razorpay_payment_id: Joi.string().allow("").allow(null),
      aggregator_order_id: Joi.string().allow(""),
      method: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
      upi_poll_url: Joi.string().allow("").allow(null),
      virtual_id: Joi.string().allow("").allow(null),
      device_id: Joi.string().allow("").allow(null),
      polling_url: Joi.string().allow("").required(),
      aggregator: Joi.string().allow("").required(),
      merchant_order_id: Joi.string().allow("").required(),
      customer_id: Joi.string().allow("").allow(null),
      vpa: Joi.string().allow("").allow(null),
      currency: Joi.string().allow("").allow(null),
      timeout: Joi.number().allow(null),
      amount: Joi.number().allow(null),
      bqr_image: Joi.string().allow("").allow(null),
      unique_link_id: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentStatusUpdateRequest} */
  static PaymentStatusUpdateRequest() {
    return Joi.object({
      aggregator_order_id: Joi.string().allow(""),
      status: Joi.string().allow("").required(),
      merchant_transaction_id: Joi.string().allow("").required(),
      method: Joi.string().allow("").required(),
      device_id: Joi.string().allow("").allow(null),
      aggregator: Joi.string().allow("").required(),
      customer_id: Joi.string().allow("").required(),
      contact: Joi.string().allow("").required(),
      merchant_order_id: Joi.string().allow("").required(),
      vpa: Joi.string().allow(""),
      order_id: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      amount: Joi.number().allow(null).required(),
      email: Joi.string().allow("").required(),
      unique_link_id: Joi.string().allow(""),
      razorpay_payment_id: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentStatusUpdateResponse} */
  static PaymentStatusUpdateResponse() {
    return Joi.object({
      status: Joi.string().allow("").required(),
      success: Joi.boolean().allow(null),
      retry: Joi.boolean(),
      redirect_url: Joi.string().allow("").allow(null),
      aggregator_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {IntentAppErrorList} */
  static IntentAppErrorList() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),
      package_name: Joi.string().allow("").allow(null),
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
      code: Joi.string().allow("").allow(null),
      package_name: Joi.string().allow("").allow(null),
      logos: PaymentApplicationModel.PaymentModeLogo(),
      display_name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ProductCODData} */
  static ProductCODData() {
    return Joi.object({
      items: Joi.any().allow(null),
      cod_charges: PaymentApplicationModel.CODChargesLimitsResponse(),
    });
  }

  /** @returns {CODChargesLimitsResponse} */
  static CODChargesLimitsResponse() {
    return Joi.object({
      max_cart_value: Joi.number().allow(null),
      min_cart_value: Joi.number().allow(null),
      cod_charge: Joi.number().allow(null),
    });
  }

  /** @returns {PaymentModeList} */
  static PaymentModeList() {
    return Joi.object({
      meta: Joi.any().allow(null),
      collect_flow: Joi.boolean(),
      provider: Joi.string().allow("").allow(null),
      wallet_name: Joi.string().allow("").allow(null),
      wallet_code: Joi.string().allow("").allow(null),
      wallet_id: Joi.number().allow(null),
      bank_name: Joi.string().allow("").allow(null),
      bank_code: Joi.string().allow("").allow(null),
      url: Joi.string().allow("").allow(null),
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
      intent_app_error_dict_list: Joi.array().items(
        PaymentApplicationModel.IntentAppErrorList()
      ),
      card_brand_image: Joi.string().allow("").allow(null),
      expired: Joi.boolean().allow(null),
      logo_url: PaymentApplicationModel.PaymentModeLogo(),
      card_token: Joi.string().allow("").allow(null),
      aggregator_name: Joi.string().allow("").required(),
      cod_charges: Joi.number().allow(null),
      product_cod_data: PaymentApplicationModel.ProductCODData(),
      cod_limit: Joi.number().allow(null),
      intent_app: Joi.array().items(PaymentApplicationModel.IntentApp()),
      nickname: Joi.string().allow("").allow(null),
      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),
      exp_year: Joi.number().allow(null),
      name: Joi.string().allow("").allow(null),
      intent_app_error_list: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {RootPaymentMode} */
  static RootPaymentMode() {
    return Joi.object({
      is_pay_by_card_pl: Joi.boolean().allow(null),
      add_card_enabled: Joi.boolean().allow(null),
      display_priority: Joi.number().required(),
      display_name: Joi.string().allow("").required(),
      list: Joi.array().items(PaymentApplicationModel.PaymentModeList()),
      save_card: Joi.boolean().allow(null),
      aggregator_name: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").required(),
      anonymous_enable: Joi.boolean().allow(null),
      payment_mode_id: Joi.number().allow(null),
      logo_url: PaymentApplicationModel.PaymentModeLogo(),
      version: PaymentApplicationModel.Version(),
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
      sdk: PaymentApplicationModel.SDKDetails(),
      return_url: Joi.string().allow("").allow(null),
      user_email: Joi.string().allow("").allow(null),
      user_phone: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {SDKDetails} */
  static SDKDetails() {
    return Joi.object({
      config: PaymentApplicationModel.SDKConfig(),
      data: PaymentApplicationModel.UserData(),
    });
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

  /** @returns {PaymentFlowData} */
  static PaymentFlowData() {
    return Joi.object({
      is_customer_validation_required: Joi.boolean(),
      cust_validation_url: Joi.string().allow("").allow(null),
      config: PaymentApplicationModel.PaymentConfig(),
      data: PaymentApplicationModel.GatewayData(),
      return_url: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {AggregatorRouteData} */
  static AggregatorRouteData() {
    return Joi.object({
      gateway: PaymentApplicationModel.GatewayData(),
      payment_flow_data: PaymentApplicationModel.PaymentFlowData(),
      data: PaymentApplicationModel.GatewayData(),
      payment_flow: Joi.string().allow("").allow(null),
      api_link: Joi.string().allow("").allow(null),
      route: Joi.string().allow("").allow(null),
      entity: Joi.string().allow("").allow(null),
      is_customer_validation_required: Joi.boolean(),
      cust_validation_url: Joi.string().allow("").allow(null),
      sdk: PaymentApplicationModel.SDKDetails(),
      return_url: Joi.string().allow("").allow(null),
      user_email: Joi.string().allow("").allow(null),
      user_phone: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {AggregatorRoute} */
  static AggregatorRoute() {
    return Joi.object({
      data: PaymentApplicationModel.AggregatorRouteData(),
      payment_flow_data: Joi.any().allow(null),
      payment_flow: Joi.string().allow("").allow(null),
      api_link: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PaymentFlow} */
  static PaymentFlow() {
    return Joi.object({
      bqr_razorpay: PaymentApplicationModel.AggregatorRoute(),
      fynd: PaymentApplicationModel.AggregatorRoute(),
      epaylater: PaymentApplicationModel.AggregatorRoute(),
      razorpay: PaymentApplicationModel.AggregatorRoute(),
      juspay: PaymentApplicationModel.AggregatorRoute(),
      ajiodhan: PaymentApplicationModel.AggregatorRoute(),
      simpl: PaymentApplicationModel.AggregatorRoute(),
      rupifi: PaymentApplicationModel.AggregatorRoute(),
      mswipe: PaymentApplicationModel.AggregatorRoute(),
      stripe: PaymentApplicationModel.AggregatorRoute(),
      ccavenue: PaymentApplicationModel.AggregatorRoute(),
      payubiz: PaymentApplicationModel.AggregatorRoute(),
      jiopay: PaymentApplicationModel.AggregatorRoute(),
      jio: PaymentApplicationModel.AggregatorRoute(),
      payumoney: PaymentApplicationModel.AggregatorRoute(),
      openapi: PaymentApplicationModel.AggregatorRoute(),
      potlee: PaymentApplicationModel.AggregatorRoute(),
      upi_razorpay: PaymentApplicationModel.AggregatorRoute(),
      creditnote: PaymentApplicationModel.AggregatorRoute(),
      pinelabs: PaymentApplicationModel.AggregatorRoute(),
      checkout: PaymentApplicationModel.AggregatorRoute(),
      cashfree: PaymentApplicationModel.AggregatorRoute(),
      jio_extension: PaymentApplicationModel.AggregatorRoute(),
      offerxone: PaymentApplicationModel.AggregatorRoute(),
    });
  }

  /** @returns {PaymentOptionAndFlow} */
  static PaymentOptionAndFlow() {
    return Joi.object({
      payment_option: Joi.array()
        .items(PaymentApplicationModel.RootPaymentMode())
        .required(),
      payment_flows: PaymentApplicationModel.PaymentFlow().required(),
    });
  }

  /** @returns {AdvanceObject} */
  static AdvanceObject() {
    return Joi.object({
      is_active: Joi.boolean().allow(null),
      amount: Joi.number(),
      time_unit: Joi.string().allow("").allow(null),
      description: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow("").allow(null),
      prepayment_type: Joi.string().allow("").allow(null),
      prepayment_value: Joi.number().allow(null),
      cancellation_type: Joi.string().allow("").allow(null),
      refund_time_limit: Joi.number().allow(null),
      all_prepayment_type: Joi.array().items(
        Joi.string().allow("").allow(null)
      ),
      allow_custom_advance_amount: Joi.boolean().allow(null),
    });
  }

  /** @returns {SplitObject} */
  static SplitObject() {
    return Joi.object({
      total_number_of_splits: Joi.number().allow(null),
      splits_remaining: Joi.number().allow(null),
      amount_remaining: Joi.number().allow(null),
    });
  }

  /** @returns {AdvancePaymentObject} */
  static AdvancePaymentObject() {
    return Joi.object({
      version: PaymentApplicationModel.Version(),
      name: Joi.string().allow("").allow(null),
      display_priority: Joi.number().allow(null),
      payment_mode_id: Joi.number().allow(null),
      display_name: Joi.string().allow("").allow(null),
      list: Joi.array().items(PaymentApplicationModel.PaymentModeList()),
      split: PaymentApplicationModel.SplitObject(),
      advance: PaymentApplicationModel.AdvanceObject(),
    });
  }

  /** @returns {PaymentModeRouteResponse} */
  static PaymentModeRouteResponse() {
    return Joi.object({
      payment_options: PaymentApplicationModel.PaymentOptionAndFlow().required(),
      success: Joi.boolean().required(),
      payment_breakup: Joi.any(),
      advance_payment: Joi.array().items(
        PaymentApplicationModel.AdvancePaymentObject()
      ),
    });
  }

  /** @returns {WalletLinkRequestSchema} */
  static WalletLinkRequestSchema() {
    return Joi.object({
      aggregator: Joi.string().allow(""),
      mobile: Joi.string().allow("").required(),
      wallet_code: Joi.string().allow("").required(),
    });
  }

  /** @returns {WalletVerifyRequestSchema} */
  static WalletVerifyRequestSchema() {
    return Joi.object({
      aggregator: Joi.string().allow(""),
      link_token: Joi.string().allow("").required(),
      otp: Joi.number().required(),
    });
  }

  /** @returns {WalletDelinkRequestSchema} */
  static WalletDelinkRequestSchema() {
    return Joi.object({
      aggregator: Joi.string().allow(""),
      wallet_code: Joi.string().allow("").required(),
    });
  }

  /** @returns {WalletResponseSchema} */
  static WalletResponseSchema() {
    return Joi.object({
      data: PaymentApplicationModel.WalletResponseData().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {WalletResponseData} */
  static WalletResponseData() {
    return Joi.object({
      message: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      link_token: Joi.string().allow(""),
    });
  }

  /** @returns {RupifiBannerData} */
  static RupifiBannerData() {
    return Joi.object({
      status: Joi.string().allow(""),
      kyc_url: Joi.string().allow(""),
    });
  }

  /** @returns {RupifiBannerResponse} */
  static RupifiBannerResponse() {
    return Joi.object({
      data: PaymentApplicationModel.RupifiBannerData().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {EpaylaterBannerData} */
  static EpaylaterBannerData() {
    return Joi.object({
      status: Joi.string().allow(""),
      message: Joi.string().allow(""),
      display: Joi.boolean().required(),
    });
  }

  /** @returns {EpaylaterBannerResponse} */
  static EpaylaterBannerResponse() {
    return Joi.object({
      data: PaymentApplicationModel.EpaylaterBannerData().required(),
      success: Joi.boolean().required(),
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
      data: PaymentApplicationModel.LinkStatus().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {renderHTMLRequest} */
  static renderHTMLRequest() {
    return Joi.object({
      returntype: Joi.string().allow("").allow(null),
      base64_html: Joi.string().allow("").required(),
    });
  }

  /** @returns {renderHTMLResponse} */
  static renderHTMLResponse() {
    return Joi.object({
      html: Joi.string().allow("").required(),
    });
  }

  /** @returns {ValidateVPARequest} */
  static ValidateVPARequest() {
    return Joi.object({
      upi_vpa: Joi.string().allow("").required(),
    });
  }

  /** @returns {ValidateUPI} */
  static ValidateUPI() {
    return Joi.object({
      status: Joi.string().allow("").required(),
      customer_name: Joi.string().allow("").required(),
      is_valid: Joi.boolean().required(),
      upi_vpa: Joi.string().allow("").required(),
    });
  }

  /** @returns {ValidateVPAResponse} */
  static ValidateVPAResponse() {
    return Joi.object({
      data: PaymentApplicationModel.ValidateUPI().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {CardDetails} */
  static CardDetails() {
    return Joi.object({
      status: Joi.boolean().required(),
      country: Joi.string().allow("").required(),
      bank_code: Joi.string().allow("").allow(null).required(),
      id: Joi.string().allow("").required(),
      card_exp_year: Joi.string().allow(""),
      card_brand: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      card_sub_type: Joi.string().allow("").allow(null).required(),
      is_domestic_card: Joi.boolean().required(),
      name_on_card: Joi.string().allow(""),
      card_exp_month: Joi.string().allow(""),
      extended_card_type: Joi.string().allow("").required(),
      card_object: Joi.string().allow("").required(),
      card_token: Joi.string().allow(""),
      user: Joi.string().allow(""),
      bank: Joi.string().allow("").required(),
    });
  }

  /** @returns {CardDetailsResponse} */
  static CardDetailsResponse() {
    return Joi.object({
      data: PaymentApplicationModel.CardDetails().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {TransferItemsDetails} */
  static TransferItemsDetails() {
    return Joi.object({
      id: Joi.number().required(),
      display_name: Joi.string().allow(""),
      logo_large: Joi.string().allow("").required(),
      logo_small: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {TransferModeDetails} */
  static TransferModeDetails() {
    return Joi.object({
      items: Joi.array().items(PaymentApplicationModel.TransferItemsDetails()),
      display_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {TransferModeResponse} */
  static TransferModeResponse() {
    return Joi.object({
      data: Joi.array()
        .items(PaymentApplicationModel.TransferModeDetails())
        .required(),
    });
  }

  /** @returns {UpdateRefundTransferModeRequest} */
  static UpdateRefundTransferModeRequest() {
    return Joi.object({
      enable: Joi.boolean().required(),
      transfer_mode: Joi.string().allow("").required(),
    });
  }

  /** @returns {UpdateRefundTransferModeResponse} */
  static UpdateRefundTransferModeResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {OrderBeneficiaryDetails} */
  static OrderBeneficiaryDetails() {
    return Joi.object({
      modified_on: Joi.string().allow("").required(),
      account_no: Joi.string().allow("").required(),
      mobile: Joi.string().allow("").required(),
      bank_name: Joi.string().allow("").required(),
      ifsc_code: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      beneficiary_id: Joi.string().allow("").required(),
      account_holder: Joi.string().allow("").required(),
      email: Joi.string().allow("").required(),
      delights_user_name: Joi.string().allow("").allow(null),
      id: Joi.number().required(),
      transfer_mode: Joi.string().allow("").required(),
      branch_name: Joi.string().allow("").required(),
      created_on: Joi.string().allow("").required(),
      subtitle: Joi.string().allow("").required(),
      comment: Joi.string().allow("").required(),
      address: Joi.string().allow("").required(),
      title: Joi.string().allow("").required(),
      display_name: Joi.string().allow("").required(),
      aggregator_id: Joi.string().allow("").allow(null),
      is_verified: Joi.boolean().allow(null),
      status: Joi.string().allow("").allow(null),
      txn_id: Joi.string().allow("").allow(null),
      meta: Joi.any().allow(null),
      default_beneficiary: Joi.boolean().allow(null),
    });
  }

  /** @returns {OrderBeneficiaryResponse} */
  static OrderBeneficiaryResponse() {
    return Joi.object({
      beneficiaries: Joi.array().items(
        PaymentApplicationModel.OrderBeneficiaryDetails()
      ),
      show_beneficiary_details: Joi.boolean(),
      bank: Joi.array().items(
        PaymentApplicationModel.OrderBeneficiaryDetails()
      ),
    });
  }

  /** @returns {NotFoundResourceError} */
  static NotFoundResourceError() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      description: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {IfscCodeResponse} */
  static IfscCodeResponse() {
    return Joi.object({
      branch_name: Joi.string().allow("").required(),
      success: Joi.boolean(),
      bank_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {AddBeneficiaryViaOtpVerificationRequest} */
  static AddBeneficiaryViaOtpVerificationRequest() {
    return Joi.object({
      request_id: Joi.string().allow("").required(),
      hash_key: Joi.string().allow("").required(),
      otp: Joi.string().allow("").required(),
    });
  }

  /** @returns {AddBeneficiaryViaOtpVerificationResponse} */
  static AddBeneficiaryViaOtpVerificationResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {WrongOtpError} */
  static WrongOtpError() {
    return Joi.object({
      is_verified_flag: Joi.boolean(),
      description: Joi.string().allow(""),
      success: Joi.boolean().required(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {BeneficiaryModeDetails} */
  static BeneficiaryModeDetails() {
    return Joi.object({
      account_no: Joi.string().allow(""),
      address: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      bank_name: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      ifsc_code: Joi.string().allow(""),
      email: Joi.string().allow("").allow(null),
      vpa: Joi.string().allow(""),
      branch_name: Joi.string().allow(""),
      account_holder: Joi.string().allow(""),
      wallet: Joi.string().allow("").allow(null),
      beneficiary_id: Joi.string().allow(""),
    });
  }

  /** @returns {AddBeneficiaryDetailsRequest} */
  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      transfer_mode: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      delights: Joi.boolean(),
      order_id: Joi.string().allow("").required(),
      details: PaymentApplicationModel.BeneficiaryModeDetails().required(),
    });
  }

  /** @returns {RefundAccountResponse} */
  static RefundAccountResponse() {
    return Joi.object({
      is_verified_flag: Joi.boolean(),
      data: PaymentApplicationModel.RefundData(),
      success: Joi.boolean().required(),
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {RefundData} */
  static RefundData() {
    return Joi.object({
      bene_name_mismatch: Joi.boolean(),
      status: Joi.string().allow(""),
      subcode: Joi.string().allow("").allow(null),
      hash_key: Joi.string().allow(""),
      message: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      request_id: Joi.number().allow(null),
    });
  }

  /** @returns {AddBeneficiaryDetailsOTPResponse} */
  static AddBeneficiaryDetailsOTPResponse() {
    return Joi.object({
      success: Joi.boolean(),
      data: Joi.array().items(PaymentApplicationModel.BankDetailsForOTP()),
      message: Joi.string().allow(""),
      is_verified_flag: Joi.boolean(),
    });
  }

  /** @returns {PostAddBeneficiaryDetailsOTPResponse} */
  static PostAddBeneficiaryDetailsOTPResponse() {
    return Joi.object({
      success: Joi.boolean(),
      data: PaymentApplicationModel.PostBankDetailsForOTP(),
      message: Joi.string().allow(""),
      is_verified_flag: Joi.boolean(),
    });
  }

  /** @returns {PostBankDetailsForOTP} */
  static PostBankDetailsForOTP() {
    return Joi.object({
      status: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {BankDetailsForOTP} */
  static BankDetailsForOTP() {
    return Joi.object({
      account_no: Joi.string().allow("").allow(null).required(),
      bank_name: Joi.string().allow("").allow(null).required(),
      ifsc_code: Joi.string().allow("").allow(null).required(),
      branch_name: Joi.string().allow("").allow(null).required(),
      account_holder: Joi.string().allow("").allow(null).required(),
      email: Joi.string().allow(""),
      beneficiary_id: Joi.string().allow(""),
      address: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      comment: Joi.string().allow(""),
    });
  }

  /** @returns {AddBeneficiaryDetailsOTPRequest} */
  static AddBeneficiaryDetailsOTPRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
      request_hash: Joi.string().allow(""),
      details: PaymentApplicationModel.BankDetailsForOTP().required(),
    });
  }

  /** @returns {WalletOtpRequest} */
  static WalletOtpRequest() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),
      mobile: Joi.string().allow("").required(),
    });
  }

  /** @returns {WalletOtpResponse} */
  static WalletOtpResponse() {
    return Joi.object({
      request_id: Joi.string().allow("").allow(null),
      is_verified_flag: Joi.boolean().required(),
      success: Joi.boolean(),
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

  /** @returns {RefundOrderBenRequest} */
  static RefundOrderBenRequest() {
    return Joi.object({
      order_ids: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {RefundOrderBenResponse} */
  static RefundOrderBenResponse() {
    return Joi.object({
      data: Joi.any().allow(null),
    });
  }

  /** @returns {GetPaymentLinkResponse} */
  static GetPaymentLinkResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      payment_link_current_status: Joi.string().allow("").allow(null),
      success: Joi.boolean().required(),
      polling_timeout: Joi.number().allow(null),
      payment_link_url: Joi.string().allow("").allow(null),
      external_order_id: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").required(),
      merchant_name: Joi.string().allow("").allow(null),
      amount: Joi.number().allow(null),
      currency: Joi.string().allow(""),
      error: PaymentApplicationModel.ErrorDescription(),
    });
  }

  /** @returns {ErrorDescription} */
  static ErrorDescription() {
    return Joi.object({
      payment_transaction_id: Joi.string().allow("").allow(null),
      expired: Joi.boolean().allow(null),
      merchant_order_id: Joi.string().allow("").allow(null),
      merchant_name: Joi.string().allow("").allow(null),
      msg: Joi.string().allow("").allow(null),
      cancelled: Joi.boolean().allow(null),
      amount: Joi.number().allow(null),
      invalid_id: Joi.boolean().allow(null),
      description: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      status_code: Joi.number(),
      error: PaymentApplicationModel.ErrorDescription(),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PollingPaymentLinkErrorResponse} */
  static PollingPaymentLinkErrorResponse() {
    return Joi.object({
      status_code: Joi.number(),
      error: Joi.string().allow(""),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {CreatePaymentLinkMeta} */
  static CreatePaymentLinkMeta() {
    return Joi.object({
      cart_id: Joi.string().allow("").required(),
      checkout_mode: Joi.string().allow("").required(),
      assign_card_id: Joi.string().allow("").allow(null),
      amount: Joi.string().allow("").required(),
      pincode: Joi.string().allow(""),
    });
  }

  /** @returns {CreatePaymentLinkRequest} */
  static CreatePaymentLinkRequest() {
    return Joi.object({
      description: Joi.string().allow("").allow(null),
      external_order_id: Joi.string().allow("").required(),
      mobile_number: Joi.string().allow("").required(),
      amount: Joi.number().required(),
      meta: PaymentApplicationModel.CreatePaymentLinkMeta().required(),
      email: Joi.string().allow("").required(),
      country_phone_code: Joi.string().allow(""),
    });
  }

  /** @returns {CreatePaymentLinkResponse} */
  static CreatePaymentLinkResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
      polling_timeout: Joi.number().allow(null),
      payment_link_url: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").required(),
      payment_link_id: Joi.string().allow("").allow(null),
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
      polling_timeout: Joi.number().allow(null),
      success: Joi.boolean().required(),
      message: Joi.string().allow("").required(),
      error: PaymentApplicationModel.PaymentLinkError(),
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
      success: Joi.boolean().required(),
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {PollingPaymentLinkResponse} */
  static PollingPaymentLinkResponse() {
    return Joi.object({
      status: Joi.string().allow("").allow(null),
      status_code: Joi.number().allow(null),
      success: Joi.boolean().allow(null),
      http_status: Joi.number().allow(null),
      message: Joi.string().allow("").allow(null),
      order_id: Joi.string().allow("").allow(null),
      redirect_url: Joi.string().allow("").allow(null),
      payment_link_id: Joi.string().allow("").allow(null),
      aggregator_name: Joi.string().allow("").allow(null),
      amount: Joi.number().allow(null),
    });
  }

  /** @returns {PaymentMethodsMeta} */
  static PaymentMethodsMeta() {
    return Joi.object({
      merchant_code: Joi.string().allow("").required(),
      payment_gateway: Joi.string().allow("").required(),
      payment_identifier: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreateOrderUserPaymentMethods} */
  static CreateOrderUserPaymentMethods() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      mode: Joi.string().allow("").required(),
      meta: PaymentApplicationModel.PaymentMethodsMeta().required(),
    });
  }

  /** @returns {CreateOrderUserRequest} */
  static CreateOrderUserRequest() {
    return Joi.object({
      failure_callback_url: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      payment_link_id: Joi.string().allow("").required(),
      payment_methods: PaymentApplicationModel.CreateOrderUserPaymentMethods().required(),
      success_callback_url: Joi.string().allow("").required(),
      meta: Joi.any().allow(null),
    });
  }

  /** @returns {CreateOrderUserData} */
  static CreateOrderUserData() {
    return Joi.object({
      method: Joi.string().allow("").allow(null),
      aggregator: Joi.string().allow("").allow(null),
      customer_id: Joi.string().allow("").allow(null),
      contact: Joi.string().allow("").allow(null),
      merchant_order_id: Joi.string().allow("").allow(null),
      order_id: Joi.string().allow("").allow(null),
      currency: Joi.string().allow("").allow(null),
      callback_url: Joi.string().allow("").allow(null),
      amount: Joi.number().allow(null),
      email: Joi.string().allow("").allow(null),
      base64_html: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CreateOrderUserResponse} */
  static CreateOrderUserResponse() {
    return Joi.object({
      status_code: Joi.number(),
      success: Joi.boolean().required(),
      data: PaymentApplicationModel.CreateOrderUserData(),
      message: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").allow(null),
      callback_url: Joi.string().allow("").allow(null),
      payment_confirm_url: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {BalanceDetails} */
  static BalanceDetails() {
    return Joi.object({
      formatted_value: Joi.string().allow("").allow(null),
      currency: Joi.string().allow("").allow(null),
      value: Joi.number().allow(null),
    });
  }

  /** @returns {CreditSummary} */
  static CreditSummary() {
    return Joi.object({
      total_due_amount: PaymentApplicationModel.BalanceDetails(),
      status: Joi.string().allow("").allow(null),
      limit: PaymentApplicationModel.BalanceDetails(),
      credit_line_id: Joi.string().allow("").allow(null),
      amount_available: PaymentApplicationModel.BalanceDetails(),
      due_amount: PaymentApplicationModel.BalanceDetails(),
      due_date: Joi.string().allow("").allow(null),
      balance: PaymentApplicationModel.BalanceDetails(),
      status_message: Joi.string().allow("").allow(null),
      repayment_url: Joi.string().allow("").allow(null),
      soa_url: Joi.string().allow("").allow(null),
      is_eligible_for_txn: Joi.boolean().allow(null),
      merchant_customer_ref_id: Joi.string().allow("").allow(null),
      buyer_status: Joi.string().allow("").allow(null),
      activation_url: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CustomerCreditSummaryResponse} */
  static CustomerCreditSummaryResponse() {
    return Joi.object({
      data: PaymentApplicationModel.CreditSummary(),
      success: Joi.boolean().required(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {RedirectURL} */
  static RedirectURL() {
    return Joi.object({
      status: Joi.boolean().required(),
      signup_url: Joi.string().allow(""),
      redirect_url: Joi.string().allow(""),
      extra: Joi.string().allow(""),
    });
  }

  /** @returns {RedirectToAggregatorResponse} */
  static RedirectToAggregatorResponse() {
    return Joi.object({
      data: PaymentApplicationModel.RedirectURL().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {CreditDetail} */
  static CreditDetail() {
    return Joi.object({
      status: Joi.boolean().required(),
      is_registered: Joi.boolean().required(),
      signup_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {CheckCreditResponse} */
  static CheckCreditResponse() {
    return Joi.object({
      data: PaymentApplicationModel.CreditDetail().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {KYCAddress} */
  static KYCAddress() {
    return Joi.object({
      city: Joi.string().allow("").required(),
      addressline2: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").required(),
      ownership_type: Joi.string().allow("").allow(null),
      pincode: Joi.string().allow("").required(),
      land_mark: Joi.string().allow("").allow(null),
      addressline1: Joi.string().allow("").required(),
    });
  }

  /** @returns {UserPersonalInfoInDetails} */
  static UserPersonalInfoInDetails() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),
      voter_id: Joi.string().allow("").allow(null),
      gender: Joi.string().allow("").allow(null),
      dob: Joi.string().allow("").allow(null).required(),
      passport: Joi.string().allow("").allow(null),
      fathers_name: Joi.string().allow("").allow(null),
      mothers_name: Joi.string().allow("").allow(null),
      middle_name: Joi.string().allow("").allow(null),
      last_name: Joi.string().allow("").allow(null),
      pan: Joi.string().allow("").allow(null),
      driving_license: Joi.string().allow("").allow(null),
      email_verified: Joi.boolean().required(),
      address_as_per_id: PaymentApplicationModel.KYCAddress().required(),
      mobile_verified: Joi.boolean().required(),
      phone: Joi.string().allow("").required(),
      email: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {MarketplaceInfo} */
  static MarketplaceInfo() {
    return Joi.object({
      date_of_joining: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").required(),
      membership_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {BusinessDetails} */
  static BusinessDetails() {
    return Joi.object({
      business_ownership_type: Joi.string().allow("").allow(null),
      vintage: Joi.string().allow("").allow(null),
      gstin: Joi.string().allow("").allow(null),
      pan: Joi.string().allow("").allow(null),
      entity_type: Joi.string().allow("").allow(null),
      shop_and_establishment: Joi.any(),
      fssai: Joi.string().allow("").allow(null),
      fda: Joi.string().allow("").allow(null),
      business_type: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      address: PaymentApplicationModel.KYCAddress(),
      state: Joi.string().allow(""),
    });
  }

  /** @returns {DeviceDetails} */
  static DeviceDetails() {
    return Joi.object({
      identification_number: Joi.string().allow("").allow(null),
      identifier_type: Joi.string().allow("").allow(null),
      device_model: Joi.string().allow("").allow(null),
      device_make: Joi.string().allow("").allow(null),
      device_type: Joi.string().allow("").allow(null),
      os: Joi.string().allow("").allow(null),
      os_version: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CustomerOnboardingRequest} */
  static CustomerOnboardingRequest() {
    return Joi.object({
      personal_info: PaymentApplicationModel.UserPersonalInfoInDetails(),
      mcc: Joi.string().allow("").allow(null),
      aggregator: Joi.string().allow("").required(),
      marketplace_info: PaymentApplicationModel.MarketplaceInfo(),
      source: Joi.string().allow("").required(),
      business_info: PaymentApplicationModel.BusinessDetails(),
      device: PaymentApplicationModel.DeviceDetails(),
    });
  }

  /** @returns {OnboardSummary} */
  static OnboardSummary() {
    return Joi.object({
      redirect_url: Joi.string().allow(""),
      session: Joi.any(),
      status: Joi.boolean().required(),
      status_remark: Joi.string().allow(""),
      is_eligible_for_txn: Joi.boolean(),
      merchant_customer_ref_id: Joi.string().allow(""),
      activation_url: Joi.string().allow(""),
      type: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      code: Joi.number(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CustomerOnboardingResponse} */
  static CustomerOnboardingResponse() {
    return Joi.object({
      data: PaymentApplicationModel.OnboardSummary().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {OutstandingOrderDetailsResponse} */
  static OutstandingOrderDetailsResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      data: Joi.array().items(Joi.any()),
      success: Joi.boolean().required(),
      message: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PaidOrderDetailsResponse} */
  static PaidOrderDetailsResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      data: Joi.array().items(Joi.any()),
      success: Joi.boolean().required(),
      message: Joi.string().allow("").allow(null),
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
      items: PaymentApplicationModel.RefundOptionsDetails().required(),
      offline_refund_collect_type: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {OfflineRefundOptions} */
  static OfflineRefundOptions() {
    return Joi.object({
      items: PaymentApplicationModel.RefundOptionsDetails().required(),
      payment_modes: Joi.array().items(Joi.string().allow("")).required(),
      offline_refund_collect_type: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {RefundOptionResponse} */
  static RefundOptionResponse() {
    return Joi.object({
      offline_refund_options: PaymentApplicationModel.OfflineRefundOptions().required(),
      success: Joi.boolean().required(),
      refund_options: PaymentApplicationModel.RefundOptions().required(),
    });
  }

  /** @returns {SelectedRefundOptionResponse} */
  static SelectedRefundOptionResponse() {
    return Joi.object({
      transfer_mode: Joi.any().required(),
      shipment_id: Joi.string().allow("").allow(null).required(),
      message: Joi.string().allow("").allow(null).required(),
      success: Joi.boolean().required(),
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
      bank: Joi.array().items(
        PaymentApplicationModel.OrderBeneficiaryDetails()
      ),
      wallet: PaymentApplicationModel.WalletBeneficiaryDetails(),
      upi: PaymentApplicationModel.UpiBeneficiaryDetails(),
    });
  }

  /** @returns {OrderBeneficiaryResponseSchemaV2} */
  static OrderBeneficiaryResponseSchemaV2() {
    return Joi.object({
      show_beneficiary_details: Joi.boolean().required(),
      data: PaymentApplicationModel.BeneficiaryRefundOptions().required(),
      limit: PaymentApplicationModel.RefundOptionsLimit().required(),
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
      upi: PaymentApplicationModel.VPADetails(),
      success: Joi.boolean().required(),
      ifsc: Joi.any(),
      vpa: PaymentApplicationModel.VPADetails(),
    });
  }

  /** @returns {PaymentMethodsMetaOrder} */
  static PaymentMethodsMetaOrder() {
    return Joi.object({
      merchant_code: Joi.string().allow(""),
      payment_gateway: Joi.string().allow("").required(),
      payment_identifier: Joi.string().allow(""),
      logo_url: PaymentApplicationModel.PaymentModeLogo(),
    });
  }

  /** @returns {PaymentOrderMethods} */
  static PaymentOrderMethods() {
    return Joi.object({
      amount: Joi.number().required(),
      payment: Joi.string().allow(""),
      mode: Joi.string().allow("").required(),
      meta: PaymentApplicationModel.PaymentMethodsMetaOrder().required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {PaymentOrderRequest} */
  static PaymentOrderRequest() {
    return Joi.object({
      payment_methods: Joi.array().items(
        PaymentApplicationModel.PaymentOrderMethods()
      ),
      order_id: Joi.string().allow("").required(),
      shipment_id: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentOrderData} */
  static PaymentOrderData() {
    return Joi.object({
      amount: Joi.number().allow(null),
      aggregator: Joi.string().allow("").allow(null),
      callback_url: Joi.string().allow("").allow(null),
      order_id: Joi.string().allow("").allow(null),
      customer_id: Joi.string().allow("").allow(null),
      merchant_order_id: Joi.string().allow("").allow(null),
      currency: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").allow(null),
      contact: Joi.string().allow("").allow(null),
      bank: Joi.string().allow("").allow(null),
      method: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PaymentOrderResponse} */
  static PaymentOrderResponse() {
    return Joi.object({
      payment_confirm_url: Joi.string().allow("").allow(null),
      callback_url: Joi.string().allow("").allow(null),
      order_id: Joi.string().allow("").allow(null),
      success: Joi.boolean(),
      status_code: Joi.number(),
      data: PaymentApplicationModel.PaymentOrderData(),
      message: Joi.string().allow("").required(),
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
      shipment_id: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      transfer_mode: Joi.string().allow("").required(),
      beneficiary_id: Joi.string().allow("").allow(null),
      meta: PaymentApplicationModel.ShipmentRefundRequestMeta(),
    });
  }

  /** @returns {ShipmentRefundDetail} */
  static ShipmentRefundDetail() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      transfer_mode: Joi.string().allow("").required(),
      beneficiary_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {ShipmentRefundResponse} */
  static ShipmentRefundResponse() {
    return Joi.object({
      data: PaymentApplicationModel.ShipmentRefundDetail(),
      success: Joi.boolean(),
      message: Joi.string().allow("").allow(null),
      refund_options: Joi.string().allow(""),
      refund_options_priority: PaymentApplicationModel.RefundOptionsPriority(),
      offline_refund_options_priority: PaymentApplicationModel.RefundOptionsPriority(),
    });
  }

  /** @returns {RefundOptionsPriority} */
  static RefundOptionsPriority() {
    return Joi.object({
      payment_modes: Joi.array().items(Joi.string().allow("")),
      items: Joi.array().items(PaymentApplicationModel.RefundItem()),
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

  /** @returns {Version} */
  static Version() {
    return Joi.object({
      razorpay: Joi.array().items(PaymentApplicationModel.VersionDetails()),
      rupifi: Joi.array().items(PaymentApplicationModel.VersionDetails()),
      jio: Joi.array().items(PaymentApplicationModel.VersionDetails()),
      stripe: Joi.array().items(PaymentApplicationModel.VersionDetails()),
      payumoney: Joi.array().items(PaymentApplicationModel.VersionDetails()),
      jiopay: Joi.array().items(PaymentApplicationModel.VersionDetails()),
      fynd: Joi.array().items(PaymentApplicationModel.VersionDetails()),
      potlee: Joi.array().items(PaymentApplicationModel.VersionDetails()),
      juspay: Joi.array().items(PaymentApplicationModel.VersionDetails()),
      simpl: Joi.array().items(PaymentApplicationModel.VersionDetails()),
      checkout: Joi.array().items(PaymentApplicationModel.VersionDetails()),
    });
  }

  /** @returns {VersionDetails} */
  static VersionDetails() {
    return Joi.object({
      version: Joi.string().allow(""),
    });
  }

  /** @returns {RefundErrorCodeAndResponse} */
  static RefundErrorCodeAndResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      message: Joi.string().allow(""),
      data: PaymentApplicationModel.IFSCErrorData(),
      error: PaymentApplicationModel.EDCError(),
      errors: PaymentApplicationModel.EDCError(),
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

  /** @returns {EDCError} */
  static EDCError() {
    return Joi.object({
      error: Joi.string().allow(""),
      description: Joi.string().allow(""),
      code: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {RefundOptionErrorCodeAndResponse} */
  static RefundOptionErrorCodeAndResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      message: PaymentApplicationModel.RefundOptionMessage(),
      error: PaymentApplicationModel.RefundOptionError(),
    });
  }

  /** @returns {RefundOptionMessage} */
  static RefundOptionMessage() {
    return Joi.object({
      code: Joi.number(),
      description: PaymentApplicationModel.RefundOptionError(),
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

  /** @returns {CardData} */
  static CardData() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),
      number: Joi.string().allow("").allow(null),
      expiration_date: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Account} */
  static Account() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),
      routing_number: Joi.string().allow("").allow(null),
      account_number: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CustomerDetails} */
  static CustomerDetails() {
    return Joi.object({
      name: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").allow(null),
      phone: Joi.string().allow("").allow(null),
      address: PaymentApplicationModel.Address(),
    });
  }

  /** @returns {CartData} */
  static CartData() {
    return Joi.object({
      _id: Joi.string().allow("").allow(null),
      uid: Joi.number().allow(null),
      gstin: Joi.string().allow("").allow(null),
      comment: Joi.string().allow("").allow(null),
      user_id: Joi.string().allow("").allow(null),
      articles: Joi.array().items(PaymentApplicationModel.Article()),
      cashback: Joi.number().allow(null),
      discount: Joi.number().allow(null),
      shipment: Joi.any().allow(null),
      expire_at: Joi.string().allow("").allow(null),
      cart_value: Joi.number().allow(null),
      created_on: Joi.string().allow("").allow(null),
      is_archive: Joi.boolean().allow(null),
      is_default: Joi.boolean().allow(null),
      cod_charges: Joi.number().allow(null),
      coupon_code: Joi.string().allow("").allow(null),
      coupon_value: Joi.number().allow(null),
      fc_index_map: Joi.array().items(Joi.number()),
      fynd_credits: Joi.number().allow(null),
      payment_mode: Joi.string().allow("").allow(null),
      checkout_mode: Joi.string().allow("").allow(null),
      last_modified: Joi.string().allow("").allow(null),
      total_quantity: Joi.number().allow(null),
      cashback_applied: Joi.number().allow(null),
      delivery_charges: Joi.number().allow(null),
      applied_coupon_id: Joi.string().allow("").allow(null),
      original_cart_value: Joi.number().allow(null),
      bulk_coupon_discount: Joi.number().allow(null),
      fynd_credits_auto_applied: Joi.boolean().allow(null),
    });
  }

  /** @returns {Article} */
  static Article() {
    return Joi.object({
      set: Joi.any().allow(null),
      uid: Joi.string().allow("").allow(null),
      c_name: Joi.string().allow("").allow(null),
      is_set: Joi.boolean().allow(null),
      s_city: Joi.string().allow("").allow(null),
      weight: PaymentApplicationModel.Weight(),
      avl_qty: Joi.number().allow(null),
      fragile: Joi.boolean().allow(null),
      item_id: Joi.number().allow(null),
      brand_id: Joi.number().allow(null),
      cashback: Joi.number().allow(null),
      discount: Joi.number().allow(null),
      hsn_code: Joi.string().allow("").allow(null),
      is_valid: Joi.boolean().allow(null),
      latitude: Joi.number().allow(null),
      quantity: Joi.number().allow(null),
      raw_meta: Joi.any().allow(null),
      store_id: Joi.number().allow(null),
      dimension: PaymentApplicationModel.Dimension(),
      item_size: Joi.string().allow("").allow(null),
      longitude: Joi.number().allow(null),
      old_price: Joi.number().allow(null),
      article_id: Joi.string().allow("").allow(null),
      company_id: Joi.number().allow(null),
      gst_amount: Joi.number().allow(null),
      identifier: Joi.any().allow(null),
      store_name: Joi.string().allow("").allow(null),
      unit_price: Joi.number().allow(null),
      amount_paid: Joi.number().allow(null),
      bulk_margin: Joi.number().allow(null),
      cod_charges: Joi.number().allow(null),
      custom_meta: Joi.any().allow(null),
      article_code: Joi.string().allow("").allow(null),
      manufacturer: PaymentApplicationModel.Manufacturer(),
      price_marked: Joi.number().allow(null),
      bulk_discount: Joi.number().allow(null),
      store_pincode: Joi.number().allow(null),
      value_of_good: Joi.number().allow(null),
      last_update_at: Joi.string().allow("").allow(null),
      return_allowed: Joi.boolean().allow(null),
      transfer_price: Joi.number().allow(null),
      price_effective: Joi.number().allow(null),
      valid_inventory: Joi.boolean().allow(null),
      bulk_coupon_code: Joi.string().allow("").allow(null),
      cashback_applied: Joi.number().allow(null),
      delivery_charges: Joi.number().allow(null),
      mongo_article_id: Joi.string().allow("").allow(null),
      referral_credits: Joi.number().allow(null),
      country_of_origin: Joi.string().allow("").allow(null),
      article_assignment: PaymentApplicationModel.ArticleAssignment(),
      gst_tax_percentage: Joi.number().allow(null),
      cancellation_allowed: Joi.boolean().allow(null),
      coupon_article_count: Joi.number().allow(null),
      size_level_total_qty: Joi.number().allow(null),
      article_assign_status: Joi.boolean().allow(null),
      quantity_assign_status: Joi.boolean().allow(null),
      coupon_effective_discount: Joi.number().allow(null),
    });
  }

  /** @returns {Weight} */
  static Weight() {
    return Joi.object({
      unit: Joi.string().allow("").allow(null),
      shipping: Joi.number().allow(null),
      is_default: Joi.boolean().allow(null),
    });
  }

  /** @returns {Dimension} */
  static Dimension() {
    return Joi.object({
      unit: Joi.string().allow("").allow(null),
      width: Joi.number().allow(null),
      height: Joi.number().allow(null),
      length: Joi.number().allow(null),
      is_default: Joi.boolean().allow(null),
    });
  }

  /** @returns {Manufacturer} */
  static Manufacturer() {
    return Joi.object({
      name: Joi.string().allow("").allow(null),
      address: Joi.string().allow("").allow(null),
      is_default: Joi.boolean().allow(null),
    });
  }

  /** @returns {ArticleAssignment} */
  static ArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow("").allow(null),
      strategy: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CartUser} */
  static CartUser() {
    return Joi.object({
      email: Joi.string().allow("").allow(null),
      gender: Joi.string().allow("").allow(null),
      mobile: Joi.string().allow("").allow(null),
      user_id: Joi.string().allow("").allow(null),
      last_name: Joi.string().allow("").allow(null),
      user_type: Joi.string().allow("").allow(null),
      first_name: Joi.string().allow("").allow(null),
      is_authenticated: Joi.boolean().allow(null),
    });
  }

  /** @returns {Affiliate} */
  static Affiliate() {
    return Joi.object({
      id: Joi.string().allow("").allow(null),
      token: Joi.string().allow("").allow(null),
      config: Joi.any().allow(null),
    });
  }

  /** @returns {Address} */
  static Address() {
    return Joi.object({
      street: Joi.string().allow("").allow(null),
      zip: Joi.string().allow("").allow(null),
      uid: Joi.number().allow(null),
      area: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").allow(null),
      phone: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").allow(null),
      address: Joi.string().allow("").allow(null),
      country: Joi.string().allow("").allow(null),
      pincode: Joi.string().allow("").allow(null),
      landmark: Joi.string().allow("").allow(null),
      area_code: Joi.string().allow("").allow(null),
      address_type: Joi.string().allow("").allow(null),
      country_code: Joi.string().allow("").allow(null),
      area_code_slug: Joi.string().allow("").allow(null),
      delivery_address_id: Joi.number().allow(null),
    });
  }

  /** @returns {PaymentMethod} */
  static PaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").allow(null),
      amount: Joi.number().allow(null),
      name: Joi.string().allow("").allow(null),
      meta: Joi.any().allow(null),
    });
  }

  /** @returns {CardRequest} */
  static CardRequest() {
    return Joi.object({
      cart: PaymentApplicationModel.CartData(),
      meta: Joi.any().allow(null),
      user: PaymentApplicationModel.CartUser(),
      coupon: Joi.any(),
      affiliate: PaymentApplicationModel.Affiliate(),
      billing_address: PaymentApplicationModel.Address(),
      delivery_address: PaymentApplicationModel.Address(),
      redemption_rules: Joi.any().allow(null),
      payment_identifier: Joi.string().allow("").allow(null),
      pick_up_customer_details: Joi.any().allow(null),
      payment_auto_confirm: Joi.boolean().allow(null),
      payment_methods: Joi.array().items(
        PaymentApplicationModel.PaymentMethod()
      ),
      coupon_id: Joi.string().allow("").allow(null),
      aggregator: Joi.string().allow(""),
      cart_value: Joi.number(),
      order_type: Joi.string().allow(""),
      return_url: Joi.string().allow(""),
      cashback_id: Joi.string().allow("").allow(null),
      cod_charges: Joi.number(),
      employee_id: Joi.string().allow("").allow(null),
      payment_mode: Joi.string().allow(""),
      cart_id: Joi.number(),
      cashback: Joi.number(),
      merchant_code: Joi.string().allow(""),
      ordering_store: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {UpdateAggregatorCardRequest} */
  static UpdateAggregatorCardRequest() {
    return Joi.object({
      refresh: Joi.boolean(),
    });
  }

  /** @returns {UpdateAggregatorCardResponse} */
  static UpdateAggregatorCardResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      cards: PaymentApplicationModel.AggregatorCard(),
    });
  }

  /** @returns {AggregatorCard} */
  static AggregatorCard() {
    return Joi.object({
      aggregator: Joi.string().allow(""),
      api: Joi.string().allow("").allow(null),
      customer_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {UpdateCardResponse} */
  static UpdateCardResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      data: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {PaymentCallbackResponse} */
  static PaymentCallbackResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentConfirmationRequest} */
  static PaymentConfirmationRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
      payment_methods: Joi.array()
        .items(PaymentApplicationModel.MultiTenderPaymentMethod())
        .required(),
    });
  }

  /** @returns {MultiTenderPaymentMethod} */
  static MultiTenderPaymentMethod() {
    return Joi.object({
      name: Joi.string().allow(""),
      meta: PaymentApplicationModel.MultiTenderPaymentMeta(),
      amount: Joi.number().required(),
      mode: Joi.string().allow("").required(),
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
}
module.exports = PaymentApplicationModel;
