export = PaymentApplicationModel;
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
 * @property {string} account_no - Account NUmber of the Account Holder
 * @property {string} [address] - Address of the User
 * @property {string} [mobile] - Moblie Number of the User
 * @property {string} bank_name - Bank Name of the Account
 * @property {string} [comment] - Remarks added by The user
 * @property {string} ifsc_code - Ifsc Code of the Account
 * @property {string} [email]
 * @property {string} [vpa]
 * @property {string} branch_name - Branch Name of the Account
 * @property {string} account_holder - Name of the Account Holder
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
declare class PaymentApplicationModel {
}
declare namespace PaymentApplicationModel {
    export { AggregatorConfigDetail, AggregatorsConfigDetailResponse, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentErrorCodeAndResponse, PaymentOptionErrorResponse, PaymentPOSOptionErrorResponse, OrderErrorResponse, PaymentError, AttachCardRequest, AttachCardsResponse, CardPaymentGateway, ActiveCardPaymentGatewayResponse, Card, ListCardsResponse, DeletehCardRequest, DeleteCardsResponse, ValidateCustomerRequest, ValidateCustomerResponse, ValidateCustomer, ValidateCustomerData, ChargeCustomerRequest, ChargeCustomerResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, ProductCODData, CODChargesLimitsResponse, PaymentModeList, RootPaymentMode, PaymentConfig, GatewayData, SDKDetails, SDKConfig, UserData, PaymentFlowData, AggregatorRouteData, AggregatorRoute, PaymentFlow, PaymentOptionAndFlow, AdvanceObject, SplitObject, AdvancePaymentObject, PaymentModeRouteResponse, WalletLinkRequestSchema, WalletVerifyRequestSchema, WalletDelinkRequestSchema, WalletResponseSchema, WalletResponseData, RupifiBannerData, RupifiBannerResponse, EpaylaterBannerData, EpaylaterBannerResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, renderHTMLRequest, renderHTMLResponse, ValidateVPARequest, ValidateUPI, ValidateVPAResponse, CardDetails, CardDetailsResponse, TransferItemsDetails, TransferModeDetails, TransferModeResponse, UpdateRefundTransferModeRequest, UpdateRefundTransferModeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, NotFoundResourceError, IfscCodeResponse, AddBeneficiaryViaOtpVerificationRequest, AddBeneficiaryViaOtpVerificationResponse, WrongOtpError, BeneficiaryModeDetails, AddBeneficiaryDetailsRequest, RefundAccountResponse, RefundData, AddBeneficiaryDetailsOTPResponse, PostAddBeneficiaryDetailsOTPResponse, PostBankDetailsForOTP, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, WalletOtpRequest, WalletOtpResponse, SetDefaultBeneficiaryRequest, SetDefaultBeneficiaryResponse, RefundOrderBenRequest, RefundOrderBenResponse, GetPaymentLinkResponse, ErrorDescription, ErrorResponse, PollingPaymentLinkErrorResponse, CreatePaymentLinkMeta, CreatePaymentLinkRequest, CreatePaymentLinkResponse, CancelOrResendPaymentLinkRequest, ResendPaymentLinkResponse, PaymentLinkError, CancelPaymentLinkResponse, PollingPaymentLinkResponse, PaymentMethodsMeta, CreateOrderUserPaymentMethods, CreateOrderUserRequest, CreateOrderUserData, CreateOrderUserResponse, BalanceDetails, CreditSummary, CustomerCreditSummaryResponse, RedirectURL, RedirectToAggregatorResponse, CreditDetail, CheckCreditResponse, KYCAddress, UserPersonalInfoInDetails, MarketplaceInfo, BusinessDetails, DeviceDetails, CustomerOnboardingRequest, OnboardSummary, CustomerOnboardingResponse, OutstandingOrderDetailsResponse, PaidOrderDetailsResponse, DeleteRefundAccountResponse, RefundOptionsDetails, RefundOptions, OfflineRefundOptions, RefundOptionResponse, SelectedRefundOptionResponse, WalletBeneficiaryDetails, UpiBeneficiaryDetails, BeneficiaryRefundOptions, OrderBeneficiaryResponseSchemaV2, RefundOptionsLimit, ValidateValidateAddressRequest, VPADetails, ValidateValidateAddressResponse, PaymentMethodsMetaOrder, PaymentOrderMethods, PaymentOrderRequest, PaymentOrderData, PaymentOrderResponse, ShipmentRefundRequestMeta, ShipmentRefundRequest, ShipmentRefundDetail, ShipmentRefundResponse, RefundOptionsPriority, RefundItem, Version, VersionDetails, RefundErrorCodeAndResponse, IFSCErrorData, EDCError, RefundOptionErrorCodeAndResponse, RefundOptionMessage, RefundOptionError, CardData, Account, CustomerDetails, CartData, Article, Weight, Dimension, Manufacturer, ArticleAssignment, CartUser, Affiliate, Address, PaymentMethod, CardRequest, UpdateAggregatorCardRequest, UpdateAggregatorCardResponse, AggregatorCard, UpdateCardResponse, PaymentCallbackResponse, PaymentConfirmationRequest, MultiTenderPaymentMethod, MultiTenderPaymentMeta, PaymentConfirmationResponse };
}
/** @returns {AggregatorConfigDetail} */
declare function AggregatorConfigDetail(): AggregatorConfigDetail;
type AggregatorConfigDetail = {
    /**
     * - Masked payment gateway api secret
     */
    secret?: string;
    /**
     * - Payment gateway api endpoint
     */
    api?: string;
    /**
     * - Masked pin
     */
    pin?: string;
    /**
     * - Fynd or self payment gateway
     */
    config_type?: string;
    /**
     * - Unique merchant key
     */
    merchant_key?: string;
    /**
     * - Payment gateway verify payment api endpoint
     */
    verify_api?: string;
    /**
     * - Payment gateway api key
     */
    key?: string;
    /**
     * - Registered User id
     */
    user_id?: string;
    merchant_id?: any;
    /**
     * - Payment gateway api endpoint
     */
    api_domain?: string;
    webhook_username?: string;
    webhook_password?: string;
    signature_key?: string;
    merchant_salt?: string;
    checkout_formpost_url?: string;
    refund_api_domain?: string;
    non_trxn_url?: string;
    trxn_url?: string;
    webhook_secret?: string;
    is_sub_fynd_account?: string;
    vpa?: string;
    api_key?: string;
    secret_key?: string;
    product_id?: string;
    domain?: string;
    is_active?: any;
    sdk?: any;
};
/** @returns {AggregatorsConfigDetailResponse} */
declare function AggregatorsConfigDetailResponse(): AggregatorsConfigDetailResponse;
type AggregatorsConfigDetailResponse = {
    success: boolean;
    razorpay?: AggregatorConfigDetail;
    juspay?: AggregatorConfigDetail;
    simpl?: AggregatorConfigDetail;
    payumoney?: AggregatorConfigDetail;
    rupifi?: AggregatorConfigDetail;
    mswipe?: AggregatorConfigDetail;
    stripe?: AggregatorConfigDetail;
    ccavenue?: AggregatorConfigDetail;
    ajiodhan?: AggregatorConfigDetail;
    potlee?: AggregatorConfigDetail;
    qr_refund_jiopay?: AggregatorConfigDetail;
    offerxone?: AggregatorConfigDetail;
    /**
     * - Environment i.e Live or Test
     */
    env: string;
};
/** @returns {ErrorCodeAndDescription} */
declare function ErrorCodeAndDescription(): ErrorCodeAndDescription;
type ErrorCodeAndDescription = {
    /**
     * - Error descrption code.
     */
    code?: string;
    /**
     * - Error human understandable description.
     */
    description: string;
};
/** @returns {HttpErrorCodeAndResponse} */
declare function HttpErrorCodeAndResponse(): HttpErrorCodeAndResponse;
type HttpErrorCodeAndResponse = {
    error?: ErrorCodeAndDescription;
    /**
     * - Response is successful or not
     */
    success: boolean;
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
/** @returns {PaymentOptionErrorResponse} */
declare function PaymentOptionErrorResponse(): PaymentOptionErrorResponse;
type PaymentOptionErrorResponse = {
    message?: string;
    error?: string[];
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {PaymentPOSOptionErrorResponse} */
declare function PaymentPOSOptionErrorResponse(): PaymentPOSOptionErrorResponse;
type PaymentPOSOptionErrorResponse = {
    message?: string;
    error?: PaymentError;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {OrderErrorResponse} */
declare function OrderErrorResponse(): OrderErrorResponse;
type OrderErrorResponse = {
    data?: ErrorResponse;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {PaymentError} */
declare function PaymentError(): PaymentError;
type PaymentError = {
    order_id?: string[];
    order_type?: string[];
    transaction_amount_in_paise?: string[];
};
/** @returns {AttachCardRequest} */
declare function AttachCardRequest(): AttachCardRequest;
type AttachCardRequest = {
    nickname?: string;
    /**
     * - Refresh cache flag.
     */
    refresh?: boolean;
    /**
     * - Card token of payment gateway.
     */
    card_id: string;
    name_on_card?: string;
};
/** @returns {AttachCardsResponse} */
declare function AttachCardsResponse(): AttachCardsResponse;
type AttachCardsResponse = {
    /**
     * - List of cards of customer.
     */
    data?: any;
    /**
     * - Response is successful or not.
     */
    success: boolean;
    /**
     * - Human readable message.
     */
    message?: string;
};
/** @returns {CardPaymentGateway} */
declare function CardPaymentGateway(): CardPaymentGateway;
type CardPaymentGateway = {
    /**
     * - Payment gateway CARD api endpoint
     */
    api?: string;
    /**
     * - Payment gateway name.
     */
    aggregator: string;
    /**
     * - Payment gateway customer id.
     */
    customer_id?: string;
};
/** @returns {ActiveCardPaymentGatewayResponse} */
declare function ActiveCardPaymentGatewayResponse(): ActiveCardPaymentGatewayResponse;
type ActiveCardPaymentGatewayResponse = {
    cards: CardPaymentGateway;
    /**
     * - Response is successful or not.
     */
    success: boolean;
    /**
     * - Human readable message.
     */
    message: string;
};
/** @returns {Card} */
declare function Card(): Card;
type Card = {
    /**
     * - Card_number
     */
    card_number?: string;
    /**
     * - Card_name
     */
    card_name?: string;
    /**
     * - Card_type
     */
    card_type?: string;
    /**
     * - Card_brand_image
     */
    card_brand_image?: string;
    /**
     * - Card_reference
     */
    card_reference?: string;
    /**
     * - Card_issuer
     */
    card_issuer?: string;
    /**
     * - Card_brand
     */
    card_brand?: string;
    /**
     * - Expired
     */
    expired?: boolean;
    /**
     * - If card is
     * tokenised or not
     */
    compliant_with_tokenisation_guidelines?: boolean;
    /**
     * - Card_isin
     */
    card_isin?: string;
    /**
     * - Exp_year
     */
    exp_year?: number;
    /**
     * - Nickname
     */
    nickname?: string;
    /**
     * - Aggregator_name
     */
    aggregator_name: string;
    /**
     * - Card_fingerprint
     */
    card_fingerprint?: string;
    /**
     * - Card_token
     */
    card_token?: string;
    /**
     * - Exp_month
     */
    exp_month?: number;
    /**
     * - Card_id
     */
    card_id?: string;
};
/** @returns {ListCardsResponse} */
declare function ListCardsResponse(): ListCardsResponse;
type ListCardsResponse = {
    /**
     * - List of cards of customer.
     */
    data?: Card[];
    /**
     * - Response is successful or not.
     */
    success: boolean;
    /**
     * - Human readable message.
     */
    message: string;
};
/** @returns {DeletehCardRequest} */
declare function DeletehCardRequest(): DeletehCardRequest;
type DeletehCardRequest = {
    /**
     * - Card token of payment gateway.
     */
    card_id: string;
};
/** @returns {DeleteCardsResponse} */
declare function DeleteCardsResponse(): DeleteCardsResponse;
type DeleteCardsResponse = {
    /**
     * - Response is successful or not.
     */
    success: boolean;
    /**
     * - Human readable message.
     */
    message?: string;
};
/** @returns {ValidateCustomerRequest} */
declare function ValidateCustomerRequest(): ValidateCustomerRequest;
type ValidateCustomerRequest = {
    /**
     * - Payment gateway name in camel case i.e Simpl, Rupifi
     */
    aggregator: string;
    /**
     * - Payable amount in paise
     */
    transaction_amount_in_paise: number;
    /**
     * - User mobile number without country code.
     */
    phone_number: string;
    /**
     * - Extra meta fields.
     */
    billing_address?: any;
    /**
     * - Extra meta fields.
     */
    order_items?: any[];
    /**
     * - Hashed payload string.
     */
    payload?: string;
    /**
     * - Extra meta fields.
     */
    merchant_params?: any;
    /**
     * - Extra meta fields.
     */
    delivery_address?: any;
};
/** @returns {ValidateCustomerResponse} */
declare function ValidateCustomerResponse(): ValidateCustomerResponse;
type ValidateCustomerResponse = {
    data: ValidateCustomer;
    /**
     * - Response is successful or not
     */
    success: boolean;
    /**
     * - Error or success message.
     */
    message: string;
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
};
/** @returns {ChargeCustomerRequest} */
declare function ChargeCustomerRequest(): ChargeCustomerRequest;
type ChargeCustomerRequest = {
    /**
     * - Already Verified flag from payment gateway i.e Mswipe
     */
    verified?: boolean;
    /**
     * - Payment gateway name i.e Simpl, Mswipe
     */
    aggregator: string;
    /**
     * - Unique order id.
     */
    order_id?: string;
    /**
     * - Transaction token of payment gateway.
     */
    transaction_token?: string;
    /**
     * - Chargable amount of order.
     */
    amount: number;
};
/** @returns {ChargeCustomerResponse} */
declare function ChargeCustomerResponse(): ChargeCustomerResponse;
type ChargeCustomerResponse = {
    /**
     * - Status of charged payment.
     */
    status: string;
    /**
     * - Cart id of customer
     */
    cart_id?: string[];
    /**
     * - Response is successful or not.
     */
    success: boolean;
    /**
     * - Payment gateway name i.e Simpl, Mswipe
     */
    aggregator: string;
    /**
     * - Human readable message.
     */
    message: string;
    /**
     * - Unique order id.
     */
    order_id: string;
    /**
     * - Delivery adddress id of customer
     */
    delivery_address_id?: string;
};
/** @returns {PaymentInitializationRequest} */
declare function PaymentInitializationRequest(): PaymentInitializationRequest;
type PaymentInitializationRequest = {
    /**
     * - Payment gateway payment id
     */
    razorpay_payment_id?: string;
    /**
     * - Payment method
     */
    method: string;
    /**
     * - EDC machine Unique Identifier
     */
    device_id?: string;
    /**
     * - Payment gateway name
     */
    aggregator: string;
    /**
     * - Payment gateway customer id.
     */
    customer_id: string;
    /**
     * - Customer valid mobile number
     */
    contact: string;
    /**
     * - Unique fynd order id
     */
    merchant_order_id: string;
    /**
     * - Customer vpa address
     */
    vpa?: string;
    /**
     * - Payment gateway order id
     */
    order_id: string;
    /**
     * - Currency code.
     */
    currency: string;
    /**
     * - Payment polling timeout if not recieved response
     */
    timeout?: number;
    /**
     * - Payable amount.
     */
    amount: number;
    /**
     * - Customer valid email
     */
    email: string;
    unique_link_id?: string;
};
/** @returns {PaymentInitializationResponse} */
declare function PaymentInitializationResponse(): PaymentInitializationResponse;
type PaymentInitializationResponse = {
    /**
     * - Status of payment.
     */
    status?: string;
    /**
     * - Payment id.
     */
    razorpay_payment_id?: string;
    /**
     * - Payment order id
     */
    aggregator_order_id?: string;
    /**
     * - Payment method
     */
    method: string;
    /**
     * - Response is successful or not.
     */
    success: boolean;
    /**
     * - UPI poll url.
     */
    upi_poll_url?: string;
    /**
     * - Payment virtual address.
     */
    virtual_id?: string;
    /**
     * - EDC machine Unique Identifier
     */
    device_id?: string;
    /**
     * - Polling url.
     */
    polling_url: string;
    /**
     * - Payment gateway name
     */
    aggregator: string;
    /**
     * - Order id
     */
    merchant_order_id: string;
    /**
     * - Payment gateway customer id.
     */
    customer_id?: string;
    /**
     * - Customer vpa address
     */
    vpa?: string;
    /**
     * - Currency code.
     */
    currency?: string;
    /**
     * - Timeout.
     */
    timeout?: number;
    /**
     * - Payable amount.
     */
    amount?: number;
    /**
     * - Bharath qr image url.
     */
    bqr_image?: string;
    unique_link_id?: string;
};
/** @returns {PaymentStatusUpdateRequest} */
declare function PaymentStatusUpdateRequest(): PaymentStatusUpdateRequest;
type PaymentStatusUpdateRequest = {
    aggregator_order_id?: string;
    /**
     * - Status of payment.
     */
    status: string;
    /**
     * - Unique fynd transaction id
     */
    merchant_transaction_id: string;
    /**
     * - Payment method
     */
    method: string;
    /**
     * - EDC machine Unique Identifier
     */
    device_id?: string;
    /**
     * - Payment gateway name
     */
    aggregator: string;
    /**
     * - Payment gateway customer id.
     */
    customer_id: string;
    /**
     * - Customer valid mobile number
     */
    contact: string;
    /**
     * - Unique fynd order id
     */
    merchant_order_id: string;
    /**
     * - Customer vpa address
     */
    vpa?: string;
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
     * - Customer valid email
     */
    email: string;
    unique_link_id?: string;
    razorpay_payment_id?: string;
};
/** @returns {PaymentStatusUpdateResponse} */
declare function PaymentStatusUpdateResponse(): PaymentStatusUpdateResponse;
type PaymentStatusUpdateResponse = {
    /**
     * - Payment status
     */
    status: string;
    /**
     * - Response is successful or not
     */
    success?: boolean;
    /**
     * - Response is successful or not.
     */
    retry?: boolean;
    /**
     * - Redirect url
     */
    redirect_url?: string;
    /**
     * - Payment gateway name
     */
    aggregator_name: string;
};
/** @returns {IntentAppErrorList} */
declare function IntentAppErrorList(): IntentAppErrorList;
type IntentAppErrorList = {
    /**
     * - Code
     */
    code?: string;
    /**
     * - Package_name
     */
    package_name?: string;
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
     * - Code
     */
    code?: string;
    /**
     * - Package_name
     */
    package_name?: string;
    logos?: PaymentModeLogo;
    /**
     * - Display_name
     */
    display_name?: string;
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
/** @returns {PaymentModeList} */
declare function PaymentModeList(): PaymentModeList;
type PaymentModeList = {
    meta?: any;
    collect_flow?: boolean;
    provider?: string;
    wallet_name?: string;
    wallet_code?: string;
    wallet_id?: number;
    bank_name?: string;
    bank_code?: string;
    url?: string;
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
     * - This flag will be true in case of
     * Payment link payment through card
     */
    is_pay_by_card_pl?: boolean;
    /**
     * - Annonymous card flag
     */
    add_card_enabled?: boolean;
    /**
     * - Dispaly Priority
     */
    display_priority: number;
    /**
     * - Payment mode display name
     */
    display_name: string;
    /**
     * - Payment mode
     */
    list?: PaymentModeList[];
    /**
     * - Card save or not
     */
    save_card?: boolean;
    /**
     * - Dispaly Priority
     */
    aggregator_name?: string;
    /**
     * - Payment mode name
     */
    name: string;
    /**
     * - Annonymous card flag
     */
    anonymous_enable?: boolean;
    /**
     * - Payment mode id
     */
    payment_mode_id?: number;
    logo_url?: PaymentModeLogo;
    version?: Version;
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
/** @returns {PaymentFlowData} */
declare function PaymentFlowData(): PaymentFlowData;
type PaymentFlowData = {
    is_customer_validation_required?: boolean;
    cust_validation_url?: string;
    config?: PaymentConfig;
    data?: GatewayData;
    return_url?: string;
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
    offerxone?: AggregatorRoute;
};
/** @returns {PaymentOptionAndFlow} */
declare function PaymentOptionAndFlow(): PaymentOptionAndFlow;
type PaymentOptionAndFlow = {
    /**
     * - Payment options
     */
    payment_option: RootPaymentMode[];
    payment_flows: PaymentFlow;
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
};
/** @returns {WalletLinkRequestSchema} */
declare function WalletLinkRequestSchema(): WalletLinkRequestSchema;
type WalletLinkRequestSchema = {
    /**
     * - Aggregator Name
     */
    aggregator?: string;
    /**
     * - Mobile Number for Wallet
     */
    mobile: string;
    /**
     * - Wallet Code
     */
    wallet_code: string;
};
/** @returns {WalletVerifyRequestSchema} */
declare function WalletVerifyRequestSchema(): WalletVerifyRequestSchema;
type WalletVerifyRequestSchema = {
    /**
     * - Aggregator Name
     */
    aggregator?: string;
    /**
     * - Token for wallet linking
     */
    link_token: string;
    /**
     * - OTP received for wallet linking
     */
    otp: number;
};
/** @returns {WalletDelinkRequestSchema} */
declare function WalletDelinkRequestSchema(): WalletDelinkRequestSchema;
type WalletDelinkRequestSchema = {
    /**
     * - Aggregator Name
     */
    aggregator?: string;
    /**
     * - Wallet Code
     */
    wallet_code: string;
};
/** @returns {WalletResponseSchema} */
declare function WalletResponseSchema(): WalletResponseSchema;
type WalletResponseSchema = {
    data: WalletResponseData;
    /**
     * - Success/Failure of the API call
     */
    success: boolean;
};
/** @returns {WalletResponseData} */
declare function WalletResponseData(): WalletResponseData;
type WalletResponseData = {
    message?: string;
    reason?: string;
    link_token?: string;
};
/** @returns {RupifiBannerData} */
declare function RupifiBannerData(): RupifiBannerData;
type RupifiBannerData = {
    /**
     * - Rupifi KYC status
     */
    status?: string;
    /**
     * - Rupifi KYC banner url.
     */
    kyc_url?: string;
};
/** @returns {RupifiBannerResponse} */
declare function RupifiBannerResponse(): RupifiBannerResponse;
type RupifiBannerResponse = {
    data: RupifiBannerData;
    /**
     * - Successful or not.
     */
    success: boolean;
};
/** @returns {EpaylaterBannerData} */
declare function EpaylaterBannerData(): EpaylaterBannerData;
type EpaylaterBannerData = {
    /**
     * - Epaylater KYC status
     */
    status?: string;
    /**
     * - EPayLater message
     */
    message?: string;
    /**
     * - Need to display banner or not
     */
    display: boolean;
};
/** @returns {EpaylaterBannerResponse} */
declare function EpaylaterBannerResponse(): EpaylaterBannerResponse;
type EpaylaterBannerResponse = {
    data: EpaylaterBannerData;
    /**
     * - Successful or not.
     */
    success: boolean;
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
/** @returns {renderHTMLRequest} */
declare function renderHTMLRequest(): renderHTMLRequest;
type renderHTMLRequest = {
    /**
     * - Return Type of API
     */
    returntype?: string;
    /**
     * - Base64 encoded html string
     */
    base64_html: string;
};
/** @returns {renderHTMLResponse} */
declare function renderHTMLResponse(): renderHTMLResponse;
type renderHTMLResponse = {
    /**
     * - HTML string
     */
    html: string;
};
/** @returns {ValidateVPARequest} */
declare function ValidateVPARequest(): ValidateVPARequest;
type ValidateVPARequest = {
    /**
     * - UPI ID
     */
    upi_vpa: string;
};
/** @returns {ValidateUPI} */
declare function ValidateUPI(): ValidateUPI;
type ValidateUPI = {
    /**
     * - VALID or INVALID
     */
    status: string;
    /**
     * - Customer Bank
     */
    customer_name: string;
    /**
     * - Boolean is true or false.
     */
    is_valid: boolean;
    /**
     * - UPI ID
     */
    upi_vpa: string;
};
/** @returns {ValidateVPAResponse} */
declare function ValidateVPAResponse(): ValidateVPAResponse;
type ValidateVPAResponse = {
    data: ValidateUPI;
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {CardDetails} */
declare function CardDetails(): CardDetails;
type CardDetails = {
    /**
     * - Status
     */
    status: boolean;
    /**
     * - Country Name
     */
    country: string;
    /**
     * - Bank Code
     */
    bank_code: string;
    /**
     * - Id
     */
    id: string;
    /**
     * - Card Expire Year
     */
    card_exp_year?: string;
    /**
     * - Card brand like VISA/RUPAY
     */
    card_brand: string;
    /**
     * - Card Type Credit/Debit
     */
    type: string;
    /**
     * - Card Sub type
     */
    card_sub_type: string;
    /**
     * - Is card domestic or international
     */
    is_domestic_card: boolean;
    /**
     * - Name on Card
     */
    name_on_card?: string;
    /**
     * - Card Expire Month
     */
    card_exp_month?: string;
    /**
     * - Extended Card Type
     */
    extended_card_type: string;
    /**
     * - Card bin or Card refrence
     */
    card_object: string;
    /**
     * - Card Token
     */
    card_token?: string;
    /**
     * - Customer/User ID
     */
    user?: string;
    /**
     * - Bank name
     */
    bank: string;
};
/** @returns {CardDetailsResponse} */
declare function CardDetailsResponse(): CardDetailsResponse;
type CardDetailsResponse = {
    data: CardDetails;
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {TransferItemsDetails} */
declare function TransferItemsDetails(): TransferItemsDetails;
type TransferItemsDetails = {
    /**
     * -
     */
    id: number;
    /**
     * - Beneficiary Display Name
     */
    display_name?: string;
    /**
     * - Beneficiary large Logo
     */
    logo_large: string;
    /**
     * - Beneficiary small Logo
     */
    logo_small: string;
    /**
     * - Beneficiary Name
     */
    name: string;
};
/** @returns {TransferModeDetails} */
declare function TransferModeDetails(): TransferModeDetails;
type TransferModeDetails = {
    /**
     * - Beneficiary Mode Items
     */
    items?: TransferItemsDetails[];
    /**
     * - Beneficiary Mode Name
     */
    display_name: string;
};
/** @returns {TransferModeResponse} */
declare function TransferModeResponse(): TransferModeResponse;
type TransferModeResponse = {
    /**
     * - Response Object
     */
    data: TransferModeDetails[];
};
/** @returns {UpdateRefundTransferModeRequest} */
declare function UpdateRefundTransferModeRequest(): UpdateRefundTransferModeRequest;
type UpdateRefundTransferModeRequest = {
    /**
     * - True for enabling the Transfer Mode
     */
    enable: boolean;
    /**
     * - Transfer Mode of the Beneficiary to be added
     */
    transfer_mode: string;
};
/** @returns {UpdateRefundTransferModeResponse} */
declare function UpdateRefundTransferModeResponse(): UpdateRefundTransferModeResponse;
type UpdateRefundTransferModeResponse = {
    /**
     * - Response is successful or not
     */
    success?: boolean;
};
/** @returns {OrderBeneficiaryDetails} */
declare function OrderBeneficiaryDetails(): OrderBeneficiaryDetails;
type OrderBeneficiaryDetails = {
    /**
     * - MOdification Date of Beneficiary
     */
    modified_on: string;
    /**
     * - Account Number
     */
    account_no: string;
    /**
     * - MObile no of User
     */
    mobile: string;
    /**
     * - Bank Name Of Account
     */
    bank_name: string;
    /**
     * - Ifsc Code Of Account
     */
    ifsc_code: string;
    /**
     * - Boolean Flag whether Beneficiary set or not
     */
    is_active: boolean;
    /**
     * - Benenficiary Id
     */
    beneficiary_id: string;
    /**
     * - Account Holder Name
     */
    account_holder: string;
    /**
     * - EMail of User
     */
    email: string;
    /**
     * - User Id Who filled the Beneficiary
     */
    delights_user_name?: string;
    /**
     * -
     */
    id: number;
    /**
     * - Transfer Mode Of Account
     */
    transfer_mode: string;
    /**
     * - Branch Name Of Account
     */
    branch_name: string;
    /**
     * - Creation Date of Beneficiary
     */
    created_on: string;
    /**
     * - SHort Title Of Account
     */
    subtitle: string;
    /**
     * - Remarks
     */
    comment: string;
    /**
     * - Address of User
     */
    address: string;
    /**
     * - Title Of Account
     */
    title: string;
    /**
     * - Display Name Of Account
     */
    display_name: string;
    aggregator_id?: string;
    is_verified?: boolean;
    status?: string;
    txn_id?: string;
    meta?: any;
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
/** @returns {NotFoundResourceError} */
declare function NotFoundResourceError(): NotFoundResourceError;
type NotFoundResourceError = {
    /**
     * - Bad Request Data
     */
    code: string;
    /**
     * - Not Found
     */
    description: string;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {IfscCodeResponse} */
declare function IfscCodeResponse(): IfscCodeResponse;
type IfscCodeResponse = {
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
/** @returns {AddBeneficiaryViaOtpVerificationRequest} */
declare function AddBeneficiaryViaOtpVerificationRequest(): AddBeneficiaryViaOtpVerificationRequest;
type AddBeneficiaryViaOtpVerificationRequest = {
    /**
     * - Request Id sent in
     */
    request_id: string;
    /**
     * - Hash key of the beneficiary Id
     */
    hash_key: string;
    /**
     * - Otp sent to the given Mobile No
     */
    otp: string;
};
/** @returns {AddBeneficiaryViaOtpVerificationResponse} */
declare function AddBeneficiaryViaOtpVerificationResponse(): AddBeneficiaryViaOtpVerificationResponse;
type AddBeneficiaryViaOtpVerificationResponse = {
    /**
     * - Response is successful or not
     */
    success?: boolean;
    /**
     * - Aggregator Response of beneficicary
     */
    message?: string;
};
/** @returns {WrongOtpError} */
declare function WrongOtpError(): WrongOtpError;
type WrongOtpError = {
    /**
     * - Vefified flag.
     */
    is_verified_flag?: boolean;
    /**
     * - Wrong OTP Code
     */
    description?: string;
    /**
     * - Response is successful or not
     */
    success: boolean;
    /**
     * - Response message
     */
    message?: string;
};
/** @returns {BeneficiaryModeDetails} */
declare function BeneficiaryModeDetails(): BeneficiaryModeDetails;
type BeneficiaryModeDetails = {
    /**
     * - Account NUmber of the Account Holder
     */
    account_no: string;
    /**
     * - Address of the User
     */
    address?: string;
    /**
     * - Moblie Number of the User
     */
    mobile?: string;
    /**
     * - Bank Name of the Account
     */
    bank_name: string;
    /**
     * - Remarks added by The user
     */
    comment?: string;
    /**
     * - Ifsc Code of the Account
     */
    ifsc_code: string;
    email?: string;
    vpa?: string;
    /**
     * - Branch Name of the Account
     */
    branch_name: string;
    /**
     * - Name of the Account Holder
     */
    account_holder: string;
    wallet?: string;
    beneficiary_id?: string;
};
/** @returns {AddBeneficiaryDetailsRequest} */
declare function AddBeneficiaryDetailsRequest(): AddBeneficiaryDetailsRequest;
type AddBeneficiaryDetailsRequest = {
    transfer_mode?: string;
    shipment_id?: string;
    delights?: boolean;
    order_id: string;
    details: BeneficiaryModeDetails;
};
/** @returns {RefundAccountResponse} */
declare function RefundAccountResponse(): RefundAccountResponse;
type RefundAccountResponse = {
    is_verified_flag?: boolean;
    data?: RefundData;
    /**
     * - Success or failure flag.
     */
    success: boolean;
    /**
     * - Response message
     */
    message: string;
};
/** @returns {RefundData} */
declare function RefundData(): RefundData;
type RefundData = {
    bene_name_mismatch?: boolean;
    status?: string;
    subcode?: string;
    hash_key?: string;
    message?: string;
    mobile?: string;
    request_id?: number;
};
/** @returns {AddBeneficiaryDetailsOTPResponse} */
declare function AddBeneficiaryDetailsOTPResponse(): AddBeneficiaryDetailsOTPResponse;
type AddBeneficiaryDetailsOTPResponse = {
    success?: boolean;
    data?: BankDetailsForOTP[];
    message?: string;
    is_verified_flag?: boolean;
};
/** @returns {PostAddBeneficiaryDetailsOTPResponse} */
declare function PostAddBeneficiaryDetailsOTPResponse(): PostAddBeneficiaryDetailsOTPResponse;
type PostAddBeneficiaryDetailsOTPResponse = {
    success?: boolean;
    data?: PostBankDetailsForOTP;
    message?: string;
    is_verified_flag?: boolean;
};
/** @returns {PostBankDetailsForOTP} */
declare function PostBankDetailsForOTP(): PostBankDetailsForOTP;
type PostBankDetailsForOTP = {
    status?: string;
    message?: string;
};
/** @returns {BankDetailsForOTP} */
declare function BankDetailsForOTP(): BankDetailsForOTP;
type BankDetailsForOTP = {
    account_no: string;
    bank_name: string;
    ifsc_code: string;
    branch_name: string;
    account_holder: string;
    email?: string;
    beneficiary_id?: string;
    address?: string;
    mobile?: string;
    comment?: string;
};
/** @returns {AddBeneficiaryDetailsOTPRequest} */
declare function AddBeneficiaryDetailsOTPRequest(): AddBeneficiaryDetailsOTPRequest;
type AddBeneficiaryDetailsOTPRequest = {
    order_id: string;
    request_hash?: string;
    details: BankDetailsForOTP;
};
/** @returns {WalletOtpRequest} */
declare function WalletOtpRequest(): WalletOtpRequest;
type WalletOtpRequest = {
    /**
     * - Country Code of the Mobile Number
     */
    country_code: string;
    /**
     * - Wallet Moblie Number of the User
     */
    mobile: string;
};
/** @returns {WalletOtpResponse} */
declare function WalletOtpResponse(): WalletOtpResponse;
type WalletOtpResponse = {
    /**
     * - Request id
     */
    request_id?: string;
    /**
     * - Boolean Flag whether OTP Validation is
     * already done or not
     */
    is_verified_flag: boolean;
    /**
     * - Response is successful or not
     */
    success?: boolean;
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
/** @returns {RefundOrderBenRequest} */
declare function RefundOrderBenRequest(): RefundOrderBenRequest;
type RefundOrderBenRequest = {
    /**
     * - List of order ids
     */
    order_ids: string[];
};
/** @returns {RefundOrderBenResponse} */
declare function RefundOrderBenResponse(): RefundOrderBenResponse;
type RefundOrderBenResponse = {
    data?: any;
};
/** @returns {GetPaymentLinkResponse} */
declare function GetPaymentLinkResponse(): GetPaymentLinkResponse;
type GetPaymentLinkResponse = {
    /**
     * - HTTP status code
     */
    status_code: number;
    /**
     * - Status of payment link
     */
    payment_link_current_status?: string;
    /**
     * - Successful or failure
     */
    success: boolean;
    /**
     * - Polling request timeout
     */
    polling_timeout?: number;
    /**
     * - Url of payment link
     */
    payment_link_url?: string;
    /**
     * - Merchant order id
     */
    external_order_id?: string;
    /**
     * - Message
     */
    message: string;
    /**
     * - Merchant name
     */
    merchant_name?: string;
    /**
     * - Total value of order
     */
    amount?: number;
    /**
     * - Currency
     */
    currency?: string;
    error?: ErrorDescription;
};
/** @returns {ErrorDescription} */
declare function ErrorDescription(): ErrorDescription;
type ErrorDescription = {
    /**
     * - Payment transaction id
     */
    payment_transaction_id?: string;
    /**
     * - Payment link expired or not
     */
    expired?: boolean;
    /**
     * - Order id
     */
    merchant_order_id?: string;
    /**
     * - Name of merchant that created payment link
     */
    merchant_name?: string;
    /**
     * - Message
     */
    msg?: string;
    /**
     * - Payment link is cancelled or not
     */
    cancelled?: boolean;
    /**
     * - Amount paid
     */
    amount?: number;
    /**
     * - Payment link id is valid or not
     */
    invalid_id?: boolean;
    description?: string;
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    /**
     * - HTTP status code
     */
    status_code?: number;
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
/** @returns {PollingPaymentLinkErrorResponse} */
declare function PollingPaymentLinkErrorResponse(): PollingPaymentLinkErrorResponse;
type PollingPaymentLinkErrorResponse = {
    /**
     * - HTTP status code
     */
    status_code?: number;
    error?: string;
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
    cart_id: string;
    checkout_mode: string;
    assign_card_id?: string;
    amount: string;
    pincode?: string;
};
/** @returns {CreatePaymentLinkRequest} */
declare function CreatePaymentLinkRequest(): CreatePaymentLinkRequest;
type CreatePaymentLinkRequest = {
    /**
     * - Merchant order id
     */
    description?: string;
    /**
     * - Merchant order id
     */
    external_order_id: string;
    /**
     * - Mobile number to which the payment link is
     * to be sent
     */
    mobile_number: string;
    /**
     * - Total value of order
     */
    amount: number;
    meta: CreatePaymentLinkMeta;
    /**
     * - Email to which the payment link is to be sent
     */
    email: string;
    country_phone_code?: string;
};
/** @returns {CreatePaymentLinkResponse} */
declare function CreatePaymentLinkResponse(): CreatePaymentLinkResponse;
type CreatePaymentLinkResponse = {
    /**
     * - HTTP status code
     */
    status_code: number;
    /**
     * - Successful or failure
     */
    success: boolean;
    /**
     * - Polling request timeout
     */
    polling_timeout?: number;
    /**
     * - Url of payment link
     */
    payment_link_url?: string;
    /**
     * - Message
     */
    message: string;
    /**
     * - Unique id of payment link
     */
    payment_link_id?: string;
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
     * - Polling request timeout
     */
    polling_timeout?: number;
    /**
     * - Successful or failure
     */
    success: boolean;
    /**
     * - Message
     */
    message: string;
    error?: PaymentLinkError;
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
     * - Successful or failure
     */
    success: boolean;
    /**
     * - Message
     */
    message: string;
};
/** @returns {PollingPaymentLinkResponse} */
declare function PollingPaymentLinkResponse(): PollingPaymentLinkResponse;
type PollingPaymentLinkResponse = {
    /**
     * - Status of payment link
     */
    status?: string;
    /**
     * - HTTP status code
     */
    status_code?: number;
    /**
     * - Successful or failure
     */
    success?: boolean;
    /**
     * - HTTP status code
     */
    http_status?: number;
    /**
     * - Message
     */
    message?: string;
    /**
     * - Fynd order id
     */
    order_id?: string;
    /**
     * - Url to redirect to
     */
    redirect_url?: string;
    /**
     * - Payment link id
     */
    payment_link_id?: string;
    /**
     * - Aggregator name
     */
    aggregator_name?: string;
    /**
     * - Amount
     */
    amount?: number;
};
/** @returns {PaymentMethodsMeta} */
declare function PaymentMethodsMeta(): PaymentMethodsMeta;
type PaymentMethodsMeta = {
    /**
     * - Merchant code
     */
    merchant_code: string;
    /**
     * - Payment gateway name
     */
    payment_gateway: string;
    /**
     * - Payment identifier
     */
    payment_identifier: string;
};
/** @returns {CreateOrderUserPaymentMethods} */
declare function CreateOrderUserPaymentMethods(): CreateOrderUserPaymentMethods;
type CreateOrderUserPaymentMethods = {
    /**
     * - Payment mode name
     */
    name: string;
    /**
     * - Payment mode
     */
    mode: string;
    meta: PaymentMethodsMeta;
};
/** @returns {CreateOrderUserRequest} */
declare function CreateOrderUserRequest(): CreateOrderUserRequest;
type CreateOrderUserRequest = {
    /**
     * - Failure page url
     */
    failure_callback_url: string;
    /**
     * - Currency
     */
    currency: string;
    /**
     * - Unique id of payment link
     */
    payment_link_id: string;
    payment_methods: CreateOrderUserPaymentMethods;
    /**
     * - Success page url
     */
    success_callback_url: string;
    /**
     * - Meta
     */
    meta?: any;
};
/** @returns {CreateOrderUserData} */
declare function CreateOrderUserData(): CreateOrderUserData;
type CreateOrderUserData = {
    /**
     * - Method
     */
    method?: string;
    /**
     * - Aggregator name
     */
    aggregator?: string;
    /**
     * - Aggregator customer id
     */
    customer_id?: string;
    /**
     * - Mobile number
     */
    contact?: string;
    /**
     * - Merchant order id
     */
    merchant_order_id?: string;
    /**
     * - Aggregator order id
     */
    order_id?: string;
    /**
     * - Currency
     */
    currency?: string;
    /**
     * - Callback url for aggregator
     */
    callback_url?: string;
    /**
     * - Amount
     */
    amount?: number;
    /**
     * - Email
     */
    email?: string;
    base64_html?: string;
};
/** @returns {CreateOrderUserResponse} */
declare function CreateOrderUserResponse(): CreateOrderUserResponse;
type CreateOrderUserResponse = {
    /**
     * - HTTP status code
     */
    status_code?: number;
    /**
     * - Successful or failure
     */
    success: boolean;
    data?: CreateOrderUserData;
    /**
     * - Message
     */
    message: string;
    /**
     * - Merchant order id
     */
    order_id?: string;
    /**
     * - Callback url for aggregator
     */
    callback_url?: string;
    /**
     * - Payment confirm url for aggregator
     */
    payment_confirm_url?: string;
};
/** @returns {BalanceDetails} */
declare function BalanceDetails(): BalanceDetails;
type BalanceDetails = {
    /**
     * - Formated Amount with currency symbol
     */
    formatted_value?: string;
    /**
     * - Currency Code
     */
    currency?: string;
    /**
     * - Payment amount
     */
    value?: number;
};
/** @returns {CreditSummary} */
declare function CreditSummary(): CreditSummary;
type CreditSummary = {
    total_due_amount?: BalanceDetails;
    /**
     * - Customer Credit status
     */
    status?: string;
    limit?: BalanceDetails;
    /**
     * - ID at Credit aggregator's end
     */
    credit_line_id?: string;
    amount_available?: BalanceDetails;
    due_amount?: BalanceDetails;
    /**
     * - Due date for repayment
     */
    due_date?: string;
    balance?: BalanceDetails;
    /**
     * - Message to customer
     */
    status_message?: string;
    /**
     * - Url for repayment
     */
    repayment_url?: string;
    /**
     * - Statement of accounts. Show payment history.
     */
    soa_url?: string;
    /**
     * - Eligiblity flag to complete transaction
     */
    is_eligible_for_txn?: boolean;
    /**
     * - Unique aggregator customer id
     */
    merchant_customer_ref_id?: string;
    /**
     * - Status from Credit aggregator's end
     */
    buyer_status?: string;
    /**
     * - Url for activation
     */
    activation_url?: string;
};
/** @returns {CustomerCreditSummaryResponse} */
declare function CustomerCreditSummaryResponse(): CustomerCreditSummaryResponse;
type CustomerCreditSummaryResponse = {
    data?: CreditSummary;
    /**
     * - Payment confirmation updated or not.
     */
    success: boolean;
    message?: string;
};
/** @returns {RedirectURL} */
declare function RedirectURL(): RedirectURL;
type RedirectURL = {
    /**
     * - Aggregator's Operation is successful or not.
     */
    status: boolean;
    /**
     * - URL to which the user may redirect.
     */
    signup_url?: string;
    redirect_url?: string;
    extra?: string;
};
/** @returns {RedirectToAggregatorResponse} */
declare function RedirectToAggregatorResponse(): RedirectToAggregatorResponse;
type RedirectToAggregatorResponse = {
    data: RedirectURL;
    /**
     * - Status updated or not.
     */
    success: boolean;
};
/** @returns {CreditDetail} */
declare function CreditDetail(): CreditDetail;
type CreditDetail = {
    /**
     * - Operation is successful or not.
     */
    status: boolean;
    /**
     * - User is registered with aggregator or not.
     */
    is_registered: boolean;
    /**
     * - URL to which the user may redirect.
     */
    signup_url: string;
};
/** @returns {CheckCreditResponse} */
declare function CheckCreditResponse(): CheckCreditResponse;
type CheckCreditResponse = {
    data: CreditDetail;
    /**
     * - Operation is successful or not.
     */
    success: boolean;
};
/** @returns {KYCAddress} */
declare function KYCAddress(): KYCAddress;
type KYCAddress = {
    /**
     * - City
     */
    city: string;
    /**
     * - Address Line 2
     */
    addressline2?: string;
    /**
     * - State
     */
    state: string;
    /**
     * - Address Owner Type
     */
    ownership_type?: string;
    /**
     * - Pincode
     */
    pincode: string;
    /**
     * - Land Mark
     */
    land_mark?: string;
    /**
     * - Address Line 1
     */
    addressline1: string;
};
/** @returns {UserPersonalInfoInDetails} */
declare function UserPersonalInfoInDetails(): UserPersonalInfoInDetails;
type UserPersonalInfoInDetails = {
    /**
     * - First Name
     */
    first_name: string;
    /**
     * - Voter ID Number
     */
    voter_id?: string;
    /**
     * - Gender
     */
    gender?: string;
    /**
     * - DOB
     */
    dob: string;
    /**
     * - Passport
     */
    passport?: string;
    /**
     * - Father's Name
     */
    fathers_name?: string;
    /**
     * - Mother's Name
     */
    mothers_name?: string;
    /**
     * - Middle Name
     */
    middle_name?: string;
    /**
     * - Last Name
     */
    last_name?: string;
    /**
     * - Pan Number
     */
    pan?: string;
    /**
     * - Driver License
     */
    driving_license?: string;
    /**
     * - Is Email Verified or not
     */
    email_verified: boolean;
    address_as_per_id: KYCAddress;
    /**
     * - Is Mobile Verified or not
     */
    mobile_verified: boolean;
    /**
     * - Email
     */
    phone: string;
    /**
     * - Email
     */
    email?: string;
};
/** @returns {MarketplaceInfo} */
declare function MarketplaceInfo(): MarketplaceInfo;
type MarketplaceInfo = {
    /**
     * - Date of joining
     */
    date_of_joining?: string;
    /**
     * - Name of store
     */
    name: string;
    /**
     * - Merchant id
     */
    membership_id: string;
};
/** @returns {BusinessDetails} */
declare function BusinessDetails(): BusinessDetails;
type BusinessDetails = {
    /**
     * - Business Ownershipp type(e.g Rented)
     */
    business_ownership_type?: string;
    /**
     * - Vintage
     */
    vintage?: string;
    /**
     * - GSTIN Number
     */
    gstin?: string;
    /**
     * - Pan Number
     */
    pan?: string;
    /**
     * - Busineess Entity Type
     */
    entity_type?: string;
    /**
     * - Shop Establishment
     */
    shop_and_establishment?: any;
    /**
     * - FDA License Number
     */
    fssai?: string;
    /**
     * - Driver License
     */
    fda?: string;
    /**
     * - Business Type
     */
    business_type?: string;
    /**
     * - Business Name
     */
    name?: string;
    address?: KYCAddress;
    state?: string;
};
/** @returns {DeviceDetails} */
declare function DeviceDetails(): DeviceDetails;
type DeviceDetails = {
    /**
     * - IP
     */
    identification_number?: string;
    /**
     * - Static value = ip
     */
    identifier_type?: string;
    /**
     * - Device Model
     */
    device_model?: string;
    /**
     * - Device maker
     */
    device_make?: string;
    /**
     * - Device Type(E.g. Mobile)
     */
    device_type?: string;
    /**
     * - OS Name
     */
    os?: string;
    /**
     * - OS Version
     */
    os_version?: string;
};
/** @returns {CustomerOnboardingRequest} */
declare function CustomerOnboardingRequest(): CustomerOnboardingRequest;
type CustomerOnboardingRequest = {
    personal_info?: UserPersonalInfoInDetails;
    /**
     * - Mcc
     */
    mcc?: string;
    /**
     * - Aggregator Name
     */
    aggregator: string;
    marketplace_info?: MarketplaceInfo;
    /**
     * - CallbackURL
     */
    source: string;
    business_info?: BusinessDetails;
    device?: DeviceDetails;
};
/** @returns {OnboardSummary} */
declare function OnboardSummary(): OnboardSummary;
type OnboardSummary = {
    /**
     * - URL to which the user may redirect.
     */
    redirect_url?: string;
    /**
     * - User Session
     */
    session?: any;
    /**
     * - Transaction status
     */
    status: boolean;
    /**
     * - Decription of status
     */
    status_remark?: string;
    /**
     * - Whether is eligible for transaction
     */
    is_eligible_for_txn?: boolean;
    /**
     * - Rupifi customer ID
     */
    merchant_customer_ref_id?: string;
    /**
     * - Url for activation
     */
    activation_url?: string;
    type?: string;
    reason?: string;
    code?: number;
    message?: string;
};
/** @returns {CustomerOnboardingResponse} */
declare function CustomerOnboardingResponse(): CustomerOnboardingResponse;
type CustomerOnboardingResponse = {
    data: OnboardSummary;
    /**
     * - Status updated or not.
     */
    success: boolean;
};
/** @returns {OutstandingOrderDetailsResponse} */
declare function OutstandingOrderDetailsResponse(): OutstandingOrderDetailsResponse;
type OutstandingOrderDetailsResponse = {
    /**
     * - HTTP Status code
     */
    status_code: number;
    /**
     * - Dict containing the outstanding order details
     */
    data?: any[];
    /**
     * - Response is successful or not.
     */
    success: boolean;
    /**
     * - Message
     */
    message?: string;
};
/** @returns {PaidOrderDetailsResponse} */
declare function PaidOrderDetailsResponse(): PaidOrderDetailsResponse;
type PaidOrderDetailsResponse = {
    /**
     * - HTTP Status code
     */
    status_code: number;
    /**
     * - Dict containing the paid order details
     */
    data?: any[];
    /**
     * - Response is successful or not.
     */
    success: boolean;
    /**
     * - Message
     */
    message?: string;
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
    /**
     * - Selected transfer mode for given shipment
     */
    transfer_mode: any;
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
/** @returns {PaymentMethodsMetaOrder} */
declare function PaymentMethodsMetaOrder(): PaymentMethodsMetaOrder;
type PaymentMethodsMetaOrder = {
    /**
     * - Merchant code
     */
    merchant_code?: string;
    /**
     * - Payment gateway name
     */
    payment_gateway: string;
    /**
     * - Payment identifier
     */
    payment_identifier?: string;
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
    payment_methods?: PaymentOrderMethods[];
    /**
     * - Order id
     */
    order_id: string;
    /**
     * - Shipment_id
     */
    shipment_id?: string;
};
/** @returns {PaymentOrderData} */
declare function PaymentOrderData(): PaymentOrderData;
type PaymentOrderData = {
    /**
     * - Amount
     */
    amount?: number;
    /**
     * - Aggregator name
     */
    aggregator?: string;
    /**
     * - Callback url for aggregator
     */
    callback_url?: string;
    /**
     * - Aggregator order id
     */
    order_id?: string;
    /**
     * - Aggregator customer id
     */
    customer_id?: string;
    /**
     * - Merchant order id
     */
    merchant_order_id?: string;
    /**
     * - Currency
     */
    currency?: string;
    /**
     * - Email
     */
    email?: string;
    /**
     * - Mobile number
     */
    contact?: string;
    /**
     * - Bank
     */
    bank?: string;
    /**
     * - Method
     */
    method?: string;
};
/** @returns {PaymentOrderResponse} */
declare function PaymentOrderResponse(): PaymentOrderResponse;
type PaymentOrderResponse = {
    /**
     * - Payment confirm url for aggregator
     */
    payment_confirm_url?: string;
    /**
     * - Callback url for aggregator
     */
    callback_url?: string;
    /**
     * - Merchant order id
     */
    order_id?: string;
    /**
     * - Successful or failure
     */
    success?: boolean;
    /**
     * - HTTP status code
     */
    status_code?: number;
    data?: PaymentOrderData;
    /**
     * - Message
     */
    message: string;
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
};
/** @returns {ShipmentRefundRequest} */
declare function ShipmentRefundRequest(): ShipmentRefundRequest;
type ShipmentRefundRequest = {
    /**
     * - Shipment Id of the respective Merchant Order Id
     */
    shipment_id: string;
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
    meta?: ShipmentRefundRequestMeta;
};
/** @returns {ShipmentRefundDetail} */
declare function ShipmentRefundDetail(): ShipmentRefundDetail;
type ShipmentRefundDetail = {
    /**
     * - Shipment ID
     */
    shipment_id: string;
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
};
/** @returns {RefundItem} */
declare function RefundItem(): RefundItem;
type RefundItem = {
    id?: number;
    name?: string;
    display_name?: string;
    is_active?: boolean;
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
    errors?: EDCError;
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
    /**
     * - Error descrption code.
     */
    success?: boolean;
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
/** @returns {CardData} */
declare function CardData(): CardData;
type CardData = {
    type?: string;
    number?: string;
    expiration_date?: string;
};
/** @returns {Account} */
declare function Account(): Account;
type Account = {
    type?: string;
    routing_number?: string;
    account_number?: string;
};
/** @returns {CustomerDetails} */
declare function CustomerDetails(): CustomerDetails;
type CustomerDetails = {
    name?: string;
    email?: string;
    phone?: string;
    address?: Address;
};
/** @returns {CartData} */
declare function CartData(): CartData;
type CartData = {
    _id?: string;
    uid?: number;
    gstin?: string;
    comment?: string;
    user_id?: string;
    articles?: Article[];
    cashback?: number;
    discount?: number;
    shipment?: any;
    expire_at?: string;
    cart_value?: number;
    created_on?: string;
    is_archive?: boolean;
    is_default?: boolean;
    cod_charges?: number;
    coupon_code?: string;
    coupon_value?: number;
    fc_index_map?: number[];
    fynd_credits?: number;
    payment_mode?: string;
    checkout_mode?: string;
    last_modified?: string;
    total_quantity?: number;
    cashback_applied?: number;
    delivery_charges?: number;
    applied_coupon_id?: string;
    original_cart_value?: number;
    bulk_coupon_discount?: number;
    fynd_credits_auto_applied?: boolean;
};
/** @returns {Article} */
declare function Article(): Article;
type Article = {
    set?: any;
    uid?: string;
    c_name?: string;
    is_set?: boolean;
    s_city?: string;
    weight?: Weight;
    avl_qty?: number;
    fragile?: boolean;
    item_id?: number;
    brand_id?: number;
    cashback?: number;
    discount?: number;
    hsn_code?: string;
    is_valid?: boolean;
    latitude?: number;
    quantity?: number;
    raw_meta?: any;
    store_id?: number;
    dimension?: Dimension;
    item_size?: string;
    longitude?: number;
    old_price?: number;
    article_id?: string;
    company_id?: number;
    gst_amount?: number;
    identifier?: any;
    store_name?: string;
    unit_price?: number;
    amount_paid?: number;
    bulk_margin?: number;
    cod_charges?: number;
    custom_meta?: any;
    article_code?: string;
    manufacturer?: Manufacturer;
    price_marked?: number;
    bulk_discount?: number;
    store_pincode?: number;
    value_of_good?: number;
    last_update_at?: string;
    return_allowed?: boolean;
    transfer_price?: number;
    price_effective?: number;
    valid_inventory?: boolean;
    bulk_coupon_code?: string;
    cashback_applied?: number;
    delivery_charges?: number;
    mongo_article_id?: string;
    referral_credits?: number;
    country_of_origin?: string;
    article_assignment?: ArticleAssignment;
    gst_tax_percentage?: number;
    cancellation_allowed?: boolean;
    coupon_article_count?: number;
    size_level_total_qty?: number;
    article_assign_status?: boolean;
    quantity_assign_status?: boolean;
    coupon_effective_discount?: number;
};
/** @returns {Weight} */
declare function Weight(): Weight;
type Weight = {
    unit?: string;
    shipping?: number;
    is_default?: boolean;
};
/** @returns {Dimension} */
declare function Dimension(): Dimension;
type Dimension = {
    unit?: string;
    width?: number;
    height?: number;
    length?: number;
    is_default?: boolean;
};
/** @returns {Manufacturer} */
declare function Manufacturer(): Manufacturer;
type Manufacturer = {
    name?: string;
    address?: string;
    is_default?: boolean;
};
/** @returns {ArticleAssignment} */
declare function ArticleAssignment(): ArticleAssignment;
type ArticleAssignment = {
    level?: string;
    strategy?: string;
};
/** @returns {CartUser} */
declare function CartUser(): CartUser;
type CartUser = {
    email?: string;
    gender?: string;
    mobile?: string;
    user_id?: string;
    last_name?: string;
    user_type?: string;
    first_name?: string;
    is_authenticated?: boolean;
};
/** @returns {Affiliate} */
declare function Affiliate(): Affiliate;
type Affiliate = {
    id?: string;
    token?: string;
    config?: any;
};
/** @returns {Address} */
declare function Address(): Address;
type Address = {
    street?: string;
    zip?: string;
    uid?: number;
    area?: string;
    city?: string;
    name?: string;
    email?: string;
    phone?: string;
    state?: string;
    address?: string;
    country?: string;
    pincode?: string;
    landmark?: string;
    area_code?: string;
    address_type?: string;
    country_code?: string;
    area_code_slug?: string;
    delivery_address_id?: number;
};
/** @returns {PaymentMethod} */
declare function PaymentMethod(): PaymentMethod;
type PaymentMethod = {
    mode?: string;
    amount?: number;
    name?: string;
    meta?: any;
};
/** @returns {CardRequest} */
declare function CardRequest(): CardRequest;
type CardRequest = {
    cart?: CartData;
    meta?: any;
    user?: CartUser;
    coupon?: any;
    affiliate?: Affiliate;
    billing_address?: Address;
    delivery_address?: Address;
    redemption_rules?: any;
    payment_identifier?: string;
    pick_up_customer_details?: any;
    payment_auto_confirm?: boolean;
    payment_methods?: PaymentMethod[];
    coupon_id?: string;
    aggregator?: string;
    cart_value?: number;
    order_type?: string;
    return_url?: string;
    cashback_id?: string;
    cod_charges?: number;
    employee_id?: string;
    payment_mode?: string;
    cart_id?: number;
    cashback?: number;
    merchant_code?: string;
    ordering_store?: string;
};
/** @returns {UpdateAggregatorCardRequest} */
declare function UpdateAggregatorCardRequest(): UpdateAggregatorCardRequest;
type UpdateAggregatorCardRequest = {
    refresh?: boolean;
};
/** @returns {UpdateAggregatorCardResponse} */
declare function UpdateAggregatorCardResponse(): UpdateAggregatorCardResponse;
type UpdateAggregatorCardResponse = {
    /**
     * - Indicates whether the operation was successful or not.
     */
    success?: boolean;
    /**
     * - A message providing additional information
     * about the response.
     */
    message?: string;
    cards?: AggregatorCard;
};
/** @returns {AggregatorCard} */
declare function AggregatorCard(): AggregatorCard;
type AggregatorCard = {
    /**
     * - The aggregator associated with the cards.
     */
    aggregator?: string;
    /**
     * - The API associated with the cards.
     */
    api?: string;
    /**
     * - The customer ID associated with the cards.
     */
    customer_id?: string;
};
/** @returns {UpdateCardResponse} */
declare function UpdateCardResponse(): UpdateCardResponse;
type UpdateCardResponse = {
    /**
     * - Indicates whether the operation was successful or not.
     */
    success?: boolean;
    /**
     * - A message providing additional information
     * about the response.
     */
    message?: string;
    data?: any[];
};
/** @returns {PaymentCallbackResponse} */
declare function PaymentCallbackResponse(): PaymentCallbackResponse;
type PaymentCallbackResponse = {
    /**
     * - Indicates whether the payment callback was
     * successful or not.
     */
    success?: boolean;
    /**
     * - Additional information about the payment callback.
     */
    message?: string;
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
    mode: string;
};
/** @returns {MultiTenderPaymentMeta} */
declare function MultiTenderPaymentMeta(): MultiTenderPaymentMeta;
type MultiTenderPaymentMeta = {
    extra_meta?: any;
    order_id?: string;
    payment_id?: string;
    current_status?: string;
    payment_gateway?: string;
    key?: string;
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
