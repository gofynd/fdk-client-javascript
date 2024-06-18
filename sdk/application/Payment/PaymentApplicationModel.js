const Joi = require("joi");

/**
 * @typedef AggregatorConfigDetail
 * @property {boolean} [sdk] - SDK
 * @property {string} secret - Masked payment gateway api secret
 * @property {string} [api] - Payment gateway api endpoint
 * @property {string} [pin] - Masked pin
 * @property {string} config_type - Fynd or self payment gateway
 * @property {string} [merchant_key] - Unique merchant key
 * @property {string} [verify_api] - Payment gateway verify payment api endpoint
 * @property {string} key - Payment gateway api key
 * @property {string} [user_id] - Registered User id
 * @property {string} [merchant_id] - Unique merchant id
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
 * @property {string} env - Environment i.e Live or Test
 */

/**
 * @typedef ErrorCodeAndDescription
 * @property {string} code - Error descrption code.
 * @property {string} description - Error human understandable description.
 */

/**
 * @typedef HttpErrorCodeAndResponse
 * @property {ErrorCodeAndDescription} [error]
 * @property {boolean} success - Response is successful or not
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
 * @property {Object} data - List of cards of customer.
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
 * @property {Object} data - Payment gateway response data
 * @property {boolean} success - Response is successful or not
 * @property {string} message - Error or success message.
 */

/**
 * @typedef ChargeCustomerRequest
 * @property {boolean} [verified] - Already Verified flag from payment gateway i.e Mswipe
 * @property {string} aggregator - Payment gateway name i.e Simpl, Mswipe
 * @property {string} order_id - Unique order id.
 * @property {string} [transaction_token] - Transaction token of payment gateway.
 * @property {number} amount - Chargable amount of order.
 */

/**
 * @typedef ChargeCustomerResponse
 * @property {string} status - Status of charged payment.
 * @property {string} [cart_id] - Cart id of customer
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
 */

/**
 * @typedef PaymentStatusUpdateRequest
 * @property {string} [status] - Status of payment.
 * @property {string} [merchant_transaction_id] - Unique fynd transaction id
 * @property {string} method - Payment method
 * @property {string} [device_id] - EDC machine Unique Identifier
 * @property {string} aggregator - Payment gateway name
 * @property {string} [customer_id] - Payment gateway customer id.
 * @property {string} [contact] - Customer valid mobile number
 * @property {string} merchant_order_id - Unique fynd order id
 * @property {string} [vpa] - Customer vpa address
 * @property {string} [order_id] - Payment gateway order id
 * @property {string} [currency] - Currency code.
 * @property {number} [amount] - Payable amount.
 * @property {string} [email] - Customer valid email
 */

/**
 * @typedef PaymentStatusUpdateResponse
 * @property {string} status - Payment status
 * @property {boolean} [success] - Response is successful or not
 * @property {boolean} retry - Response is successful or not.
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
 * @typedef PaymentModeList
 * @property {string} [card_number] - Card_number
 * @property {string} [merchant_code] - Merchant code
 * @property {string} [card_reference] - Card_reference
 * @property {string} [card_issuer] - Card_issuer
 * @property {boolean} [compliant_with_tokenisation_guidelines] - If card is
 *   tokenised or not
 * @property {string} [code] - Code
 * @property {number} [cod_limit] - Cod limit
 * @property {boolean} [intent_flow] - Intent_flow
 * @property {string} [fynd_vpa] - Fynd_vpa
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list] -
 *   Intent_app_error_dict_list
 * @property {string} aggregator_name - Aggregator_name
 * @property {string} [card_fingerprint] - Card_fingerprint
 * @property {string[]} [intent_app_error_list] - Intent_app_error_list
 * @property {IntentApp[]} [intent_app] - Intent_app
 * @property {boolean} [expired] - Expired
 * @property {number} [retry_count] - Retry_count
 * @property {number} [exp_year] - Exp_year
 * @property {number} [exp_month] - Exp_month
 * @property {string} [card_id] - Card_id
 * @property {number} [remaining_limit] - Remaining limit
 * @property {number} [display_priority] - Dispaly Priority
 * @property {string} [card_brand] - Card_brand
 * @property {number} [cod_limit_per_order] - Cod limit per order
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [nickname] - Nickname
 * @property {string} [card_name] - Card_name
 * @property {string} [card_type] - Card_type
 * @property {string} [card_brand_image] - Card_brand_image
 * @property {string} [display_name] - Display name
 * @property {string} [card_isin] - Card_isin
 * @property {number} [timeout] - Timeout
 * @property {string} [card_token] - Card_token
 * @property {string} [name] - Name
 * @property {Object} [meta] - Payment methods meta
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
 * @property {AggregatorRoute} [upi_razorpay]
 */

/**
 * @typedef PaymentOptionAndFlow
 * @property {RootPaymentMode[]} payment_option - Payment options
 * @property {PaymentFlow} payment_flows
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
 * @typedef PaymentModeRouteResponse
 * @property {PaymentOptionAndFlow} payment_options
 * @property {boolean} success - Response is successful or not
 * @property {Object} [payment_breakup] - Payment Breakup for advance payment
 * @property {AdvancePaymentObject[]} [advance_payment] - Advance Payment Array
 */

/**
 * @typedef WalletLinkRequestSchema
 * @property {string} aggregator - Aggregator Name
 * @property {string} mobile - Mobile Number for Wallet
 * @property {string} wallet_code - Wallet Code
 */

/**
 * @typedef WalletVerifyRequestSchema
 * @property {string} aggregator - Aggregator Name
 * @property {string} link_token - Token for wallet linking
 * @property {number} otp - OTP received for wallet linking
 */

/**
 * @typedef WalletDelinkRequestSchema
 * @property {string} aggregator - Aggregator Name
 * @property {string} wallet_code - Wallet Code
 */

/**
 * @typedef WalletResponseSchema
 * @property {Object} data - Response received from aggregator
 * @property {boolean} success - Success/Failure of the API call
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
 * @property {string} message - Message
 * @property {boolean} [is_payment_done] - This key specifies payment done
 *   status of payment link.
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
 * @property {string} [aggregator] - Aggregator slug
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
 * @property {string} [mobile] - MObile no of User
 * @property {string} bank_name - Bank Name Of Account
 * @property {string} ifsc_code - Ifsc Code Of Account
 * @property {boolean} is_active - Boolean Flag whether Beneficiary set or not
 * @property {string} beneficiary_id - Benenficiary Id
 * @property {string} account_holder - Account Holder Name
 * @property {string} email - EMail of User
 * @property {string} [delights_user_name] - User Id Who filled the Beneficiary
 * @property {number} id -
 * @property {string} transfer_mode - Transfer Mode Of Account
 * @property {string} [branch_name] - Branch Name Of Account
 * @property {string} created_on - Creation Date of Beneficiary
 * @property {string} subtitle - SHort Title Of Account
 * @property {string} [comment] - Remarks
 * @property {string} address - Address of User
 * @property {string} title - Title Of Account
 * @property {string} display_name - Display Name Of Account
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {boolean} [show_beneficiary_details] - Show beneficiary details or not.
 * @property {OrderBeneficiaryDetails[]} [beneficiaries] - All Beneficiaries Of An Order
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
 * @typedef ErrorCodeDescription
 * @property {string} code - Error descrption code.
 * @property {string} description - Error human understandable description.
 * @property {boolean} success - Response is successful or not
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
 * @property {string} message - Aggregator Response of beneficicary
 */

/**
 * @typedef WrongOtpError
 * @property {boolean} is_verified_flag - Vefified flag.
 * @property {string} description - Wrong OTP Code
 * @property {string} success - Response is successful or not
 */

/**
 * @typedef BeneficiaryModeDetails
 * @property {string} account_no - Account NUmber of the Account Holder
 * @property {string} [address] - Address of the User
 * @property {string} mobile - Moblie Number of the User
 * @property {string} bank_name - Bank Name of the Account
 * @property {string} [comment] - Remarks added by The user
 * @property {string} ifsc_code - Ifsc Code of the Account
 * @property {string} [vpa]
 * @property {string} branch_name - Branch Name of the Account
 * @property {string} account_holder - Name of the Account Holder
 * @property {string} [wallet]
 * @property {string} email - Email of the Account Holder
 */

/**
 * @typedef AddBeneficiaryDetailsRequest
 * @property {boolean} delights - True if beneficiary to be added by delights or
 *   False if by User
 * @property {string} shipment_id - Shipment Id of the respective Merchant Order Id
 * @property {BeneficiaryModeDetails} details
 * @property {string} [otp]
 * @property {string} order_id - Merchant Order Id
 * @property {string} transfer_mode - Transfer Mode of the Beneficiary to be added
 * @property {string} [request_id]
 */

/**
 * @typedef RefundAccountResponse
 * @property {boolean} [is_verified_flag]
 * @property {Object} [data] - Refund account data.
 * @property {boolean} success - Success or failure flag.
 * @property {string} message - Response message
 */

/**
 * @typedef BankDetailsForOTP
 * @property {string} account_no
 * @property {string} bank_name
 * @property {string} ifsc_code
 * @property {string} branch_name
 * @property {string} account_holder
 */

/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {string} order_id
 * @property {BankDetailsForOTP} details
 */

/**
 * @typedef WalletOtpRequest
 * @property {string} country_code - Country Code of the Mobile Number
 * @property {string} mobile - Wallet Moblie Number of the User
 */

/**
 * @typedef WalletOtpResponse
 * @property {string} request_id - Request id
 * @property {string} is_verified_flag - Boolean Flag whether OTP Validation is
 *   already done or not
 * @property {boolean} [success] - Response is successful or not
 */

/**
 * @typedef SetDefaultBeneficiaryRequest
 * @property {string} order_id - Merchant Order Id
 * @property {string} beneficiary_id - Beneficiary Hash Id of the beneficiary added
 */

/**
 * @typedef SetDefaultBeneficiaryResponse
 * @property {boolean} is_beneficiary_set - Boolean Flag whether Beneficiary set or not
 * @property {boolean} [success] - Response is successful or not
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
 */

/**
 * @typedef ErrorResponse
 * @property {number} status_code - HTTP status code
 * @property {ErrorDescription} [error]
 * @property {string} message - Message
 * @property {boolean} success - Successful or failure
 */

/**
 * @typedef CreatePaymentLinkMeta
 * @property {string} cart_id
 * @property {string} checkout_mode
 * @property {string} [assign_card_id]
 * @property {string} amount
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
 */

/**
 * @typedef CreateOrderUserResponse
 * @property {number} status_code - HTTP status code
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
 */

/**
 * @typedef RedirectURL
 * @property {boolean} status - Aggregator's Operation is successful or not.
 * @property {string} signup_url - URL to which the user may redirect.
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
 */

/**
 * @typedef OfflineRefundOptions
 * @property {RefundOptionsDetails} items - List of all refund options.
 * @property {string[]} payment_modes - List of all offline payment options. MOP
 *   Code value
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
 * @property {OrderBeneficiaryDetails} [bank] - List of all add bank beneficiary details.
 * @property {WalletBeneficiaryDetails} [wallet] - List of all add Wallet
 *   beneficiary details.
 * @property {UpiBeneficiaryDetails} [upi] - List of all add UPI beneficiary details.
 */

/**
 * @typedef OrderBeneficiaryResponseSchemaV2
 * @property {boolean} show_beneficiary_details - Show Beneficiary details on UI or not.
 * @property {BeneficiaryRefundOptions} data - Beneficiary Data for Bank
 *   account, UPI and Wallets.
 * @property {Object} limit - Max Limit for adding bank account, UPI and wallet
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
 */

/**
 * @typedef PaymentMethodsMetaOrder
 * @property {string} merchant_code - Merchant code
 * @property {string} payment_gateway - Payment gateway name
 * @property {string} payment_identifier - Payment identifier
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
 * @property {string} [method] - Method
 */

/**
 * @typedef PaymentOrderResponse
 * @property {string} [payment_confirm_url] - Payment confirm url for aggregator
 * @property {string} [callback_url] - Callback url for aggregator
 * @property {string} [order_id] - Merchant order id
 * @property {boolean} [success] - Successful or failure
 * @property {number} status_code - HTTP status code
 * @property {PaymentOrderData} [data]
 * @property {string} message - Message
 */

/**
 * @typedef ShipmentRefundRequest
 * @property {string} shipment_id - Shipment Id of the respective Merchant Order Id
 * @property {string} order_id - Merchant Order Id
 * @property {string} transfer_mode - Transfer Mode of the Beneficiary to be added
 * @property {string} [beneficiary_id] - Beneficiary Hash Id of the beneficiary added
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
 * @property {ShipmentRefundDetail} data - Selected Shipment refund option details.
 * @property {boolean} success - Successful or not.
 * @property {string} message - Message
 */

class PaymentApplicationModel {
  /** @returns {AggregatorConfigDetail} */
  static AggregatorConfigDetail() {
    return Joi.object({
      sdk: Joi.boolean().allow(null),
      secret: Joi.string().allow("").required(),
      api: Joi.string().allow("").allow(null),
      pin: Joi.string().allow("").allow(null),
      config_type: Joi.string().allow("").required(),
      merchant_key: Joi.string().allow("").allow(null),
      verify_api: Joi.string().allow("").allow(null),
      key: Joi.string().allow("").required(),
      user_id: Joi.string().allow("").allow(null),
      merchant_id: Joi.string().allow("").allow(null),
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
      env: Joi.string().allow("").required(),
    });
  }

  /** @returns {ErrorCodeAndDescription} */
  static ErrorCodeAndDescription() {
    return Joi.object({
      code: Joi.string().allow("").required(),
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
      data: Joi.any().required(),
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
      success: Joi.boolean().required(),
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
      data: Joi.any().required(),
      success: Joi.boolean().required(),
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {ChargeCustomerRequest} */
  static ChargeCustomerRequest() {
    return Joi.object({
      verified: Joi.boolean().allow(null),
      aggregator: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      transaction_token: Joi.string().allow("").allow(null),
      amount: Joi.number().allow(null).required(),
    });
  }

  /** @returns {ChargeCustomerResponse} */
  static ChargeCustomerResponse() {
    return Joi.object({
      status: Joi.string().allow("").required(),
      cart_id: Joi.string().allow("").allow(null),
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
    });
  }

  /** @returns {PaymentStatusUpdateRequest} */
  static PaymentStatusUpdateRequest() {
    return Joi.object({
      status: Joi.string().allow(""),
      merchant_transaction_id: Joi.string().allow(""),
      method: Joi.string().allow("").required(),
      device_id: Joi.string().allow("").allow(null),
      aggregator: Joi.string().allow("").required(),
      customer_id: Joi.string().allow(""),
      contact: Joi.string().allow(""),
      merchant_order_id: Joi.string().allow("").required(),
      vpa: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      amount: Joi.number().allow(null),
      email: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentStatusUpdateResponse} */
  static PaymentStatusUpdateResponse() {
    return Joi.object({
      status: Joi.string().allow("").required(),
      success: Joi.boolean().allow(null),
      retry: Joi.boolean().required(),
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

  /** @returns {PaymentModeList} */
  static PaymentModeList() {
    return Joi.object({
      card_number: Joi.string().allow("").allow(null),
      merchant_code: Joi.string().allow("").allow(null),
      card_reference: Joi.string().allow("").allow(null),
      card_issuer: Joi.string().allow("").allow(null),
      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),
      code: Joi.string().allow("").allow(null),
      cod_limit: Joi.number().allow(null),
      intent_flow: Joi.boolean().allow(null),
      fynd_vpa: Joi.string().allow("").allow(null),
      intent_app_error_dict_list: Joi.array()
        .items(PaymentApplicationModel.IntentAppErrorList())
        .allow(null, ""),
      aggregator_name: Joi.string().allow("").required(),
      card_fingerprint: Joi.string().allow("").allow(null),
      intent_app_error_list: Joi.array()
        .items(Joi.string().allow(""))
        .allow(null, ""),
      intent_app: Joi.array()
        .items(PaymentApplicationModel.IntentApp())
        .allow(null, ""),
      expired: Joi.boolean().allow(null),
      retry_count: Joi.number().allow(null),
      exp_year: Joi.number().allow(null),
      exp_month: Joi.number().allow(null),
      card_id: Joi.string().allow("").allow(null),
      remaining_limit: Joi.number().allow(null),
      display_priority: Joi.number().allow(null),
      card_brand: Joi.string().allow("").allow(null),
      cod_limit_per_order: Joi.number().allow(null),
      logo_url: PaymentApplicationModel.PaymentModeLogo(),
      nickname: Joi.string().allow("").allow(null),
      card_name: Joi.string().allow("").allow(null),
      card_type: Joi.string().allow("").allow(null),
      card_brand_image: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow("").allow(null),
      card_isin: Joi.string().allow("").allow(null),
      timeout: Joi.number().allow(null),
      card_token: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      meta: Joi.any().allow(null),
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
    });
  }

  /** @returns {AggregatorRoute} */
  static AggregatorRoute() {
    return Joi.object({
      data: Joi.any().allow(null),
      payment_flow_data: Joi.any().allow(null),
      payment_flow: Joi.string().allow("").allow(null),
      api_link: Joi.string().allow("").allow(null),
    });
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
      upi_razorpay: PaymentApplicationModel.AggregatorRoute(),
    });
  }

  /** @returns {PaymentOptionAndFlow} */
  static PaymentOptionAndFlow() {
    return Joi.object({
      payment_option: Joi.array()
        .items(PaymentApplicationModel.RootPaymentMode())
        .required(),
      payment_flows: PaymentApplicationModel.PaymentFlow().required(),
      payment_default_selection: PaymentApplicationModel.PaymentDefaultSelection(),
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
      all_prepayment_type: Joi.array()
        .items(Joi.string().allow("").allow(null))
        .allow(null, ""),
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
      name: Joi.string().allow("").allow(null),
      display_priority: Joi.number().allow(null),
      payment_mode_id: Joi.number().allow(null),
      display_name: Joi.string().allow("").allow(null),
      list: Joi.array()
        .items(PaymentApplicationModel.PaymentModeList())
        .allow(null, ""),
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
      advance_payment: Joi.array()
        .items(PaymentApplicationModel.AdvancePaymentObject())
        .allow(null, ""),
    });
  }

  /** @returns {WalletLinkRequestSchema} */
  static WalletLinkRequestSchema() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      mobile: Joi.string().allow("").required(),
      wallet_code: Joi.string().allow("").required(),
    });
  }

  /** @returns {WalletVerifyRequestSchema} */
  static WalletVerifyRequestSchema() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      link_token: Joi.string().allow("").required(),
      otp: Joi.number().required(),
    });
  }

  /** @returns {WalletDelinkRequestSchema} */
  static WalletDelinkRequestSchema() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      wallet_code: Joi.string().allow("").required(),
    });
  }

  /** @returns {WalletResponseSchema} */
  static WalletResponseSchema() {
    return Joi.object({
      data: Joi.any().required(),
      success: Joi.boolean().required(),
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
      message: Joi.string().allow("").required(),
      is_payment_done: Joi.boolean(),
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
      aggregator: Joi.string().allow(""),
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
      mobile: Joi.string().allow(""),
      bank_name: Joi.string().allow("").required(),
      ifsc_code: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      beneficiary_id: Joi.string().allow("").required(),
      account_holder: Joi.string().allow("").required(),
      email: Joi.string().allow("").required(),
      delights_user_name: Joi.string().allow("").allow(null),
      id: Joi.number().required(),
      transfer_mode: Joi.string().allow("").required(),
      branch_name: Joi.string().allow(""),
      created_on: Joi.string().allow("").required(),
      subtitle: Joi.string().allow("").required(),
      comment: Joi.string().allow(""),
      address: Joi.string().allow("").required(),
      title: Joi.string().allow("").required(),
      display_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {OrderBeneficiaryResponse} */
  static OrderBeneficiaryResponse() {
    return Joi.object({
      show_beneficiary_details: Joi.boolean(),
      beneficiaries: Joi.array()
        .items(PaymentApplicationModel.OrderBeneficiaryDetails())
        .allow(null, ""),
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

  /** @returns {ErrorCodeDescription} */
  static ErrorCodeDescription() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      description: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
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
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {WrongOtpError} */
  static WrongOtpError() {
    return Joi.object({
      is_verified_flag: Joi.boolean().required(),
      description: Joi.string().allow("").required(),
      success: Joi.string().allow("").required(),
    });
  }

  /** @returns {BeneficiaryModeDetails} */
  static BeneficiaryModeDetails() {
    return Joi.object({
      account_no: Joi.string().allow("").required(),
      address: Joi.string().allow(""),
      mobile: Joi.string().allow("").required(),
      bank_name: Joi.string().allow("").required(),
      comment: Joi.string().allow(""),
      ifsc_code: Joi.string().allow("").required(),
      vpa: Joi.string().allow("").allow(null),
      branch_name: Joi.string().allow("").required(),
      account_holder: Joi.string().allow("").required(),
      wallet: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").required(),
    });
  }

  /** @returns {AddBeneficiaryDetailsRequest} */
  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      delights: Joi.boolean().required(),
      shipment_id: Joi.string().allow("").required(),
      details: PaymentApplicationModel.BeneficiaryModeDetails().required(),
      otp: Joi.string().allow(""),
      order_id: Joi.string().allow("").required(),
      transfer_mode: Joi.string().allow("").required(),
      request_id: Joi.string().allow(""),
    });
  }

  /** @returns {RefundAccountResponse} */
  static RefundAccountResponse() {
    return Joi.object({
      is_verified_flag: Joi.boolean(),
      data: Joi.any(),
      success: Joi.boolean().required(),
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {BankDetailsForOTP} */
  static BankDetailsForOTP() {
    return Joi.object({
      account_no: Joi.string().allow("").required(),
      bank_name: Joi.string().allow("").required(),
      ifsc_code: Joi.string().allow("").required(),
      branch_name: Joi.string().allow("").required(),
      account_holder: Joi.string().allow("").required(),
    });
  }

  /** @returns {AddBeneficiaryDetailsOTPRequest} */
  static AddBeneficiaryDetailsOTPRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
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
      request_id: Joi.string().allow("").required(),
      is_verified_flag: Joi.string().allow("").required(),
      success: Joi.boolean(),
    });
  }

  /** @returns {SetDefaultBeneficiaryRequest} */
  static SetDefaultBeneficiaryRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
      beneficiary_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {SetDefaultBeneficiaryResponse} */
  static SetDefaultBeneficiaryResponse() {
    return Joi.object({
      is_beneficiary_set: Joi.boolean().required(),
      success: Joi.boolean(),
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
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      error: PaymentApplicationModel.ErrorDescription(),
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
    });
  }

  /** @returns {CreateOrderUserResponse} */
  static CreateOrderUserResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
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
    });
  }

  /** @returns {RedirectURL} */
  static RedirectURL() {
    return Joi.object({
      status: Joi.boolean().required(),
      signup_url: Joi.string().allow("").required(),
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
      data: Joi.array().items(Joi.any()).allow(null, ""),
      success: Joi.boolean().required(),
      message: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PaidOrderDetailsResponse} */
  static PaidOrderDetailsResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      data: Joi.array().items(Joi.any()).allow(null, ""),
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
    });
  }

  /** @returns {OfflineRefundOptions} */
  static OfflineRefundOptions() {
    return Joi.object({
      items: PaymentApplicationModel.RefundOptionsDetails().required(),
      payment_modes: Joi.array().items(Joi.string().allow("")).required(),
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
      bank: PaymentApplicationModel.OrderBeneficiaryDetails(),
      wallet: PaymentApplicationModel.WalletBeneficiaryDetails(),
      upi: PaymentApplicationModel.UpiBeneficiaryDetails(),
    });
  }

  /** @returns {OrderBeneficiaryResponseSchemaV2} */
  static OrderBeneficiaryResponseSchemaV2() {
    return Joi.object({
      show_beneficiary_details: Joi.boolean().required(),
      data: PaymentApplicationModel.BeneficiaryRefundOptions().required(),
      limit: Joi.any().required(),
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
    });
  }

  /** @returns {PaymentMethodsMetaOrder} */
  static PaymentMethodsMetaOrder() {
    return Joi.object({
      merchant_code: Joi.string().allow("").required(),
      payment_gateway: Joi.string().allow("").required(),
      payment_identifier: Joi.string().allow("").required(),
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
      status_code: Joi.number().required(),
      data: PaymentApplicationModel.PaymentOrderData(),
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {ShipmentRefundRequest} */
  static ShipmentRefundRequest() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      transfer_mode: Joi.string().allow("").required(),
      beneficiary_id: Joi.string().allow("").allow(null),
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
      data: PaymentApplicationModel.ShipmentRefundDetail().required(),
      success: Joi.boolean().required(),
      message: Joi.string().allow("").allow(null).required(),
    });
  }
}
module.exports = PaymentApplicationModel;
