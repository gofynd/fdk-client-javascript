export = PaymentApplicationModel;
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
 * @property {string} [payment_flow_data] - Payment_flow_data
 * @property {string} [payment_flow] - Payment_flow
 * @property {string} [api_link] - Api_link
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
 * @property {RootPaymentMode} payment_option
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
 * @property {boolean} status - Link action status
 * @property {string} message - Message
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
 * @property {boolean} success - Successful or failure
 * @property {number} status_code - HTTP status code
 * @property {PaymentOrderData} [data]
 * @property {string} message - Message
 */
declare class PaymentApplicationModel {
}
declare namespace PaymentApplicationModel {
    export { AggregatorConfigDetail, AggregatorsConfigDetailResponse, ErrorCodeAndDescription, HttpErrorCodeAndResponse, AttachCardRequest, AttachCardsResponse, CardPaymentGateway, ActiveCardPaymentGatewayResponse, Card, ListCardsResponse, DeletehCardRequest, DeleteCardsResponse, ValidateCustomerRequest, ValidateCustomerResponse, ChargeCustomerRequest, ChargeCustomerResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, AggregatorRoute, PaymentFlow, PaymentOptionAndFlow, AdvanceObject, SplitObject, AdvancePaymentObject, PaymentModeRouteResponse, WalletLinkRequestSchema, WalletVerifyRequestSchema, WalletDelinkRequestSchema, WalletResponseSchema, RupifiBannerData, RupifiBannerResponse, EpaylaterBannerData, EpaylaterBannerResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, renderHTMLRequest, renderHTMLResponse, ValidateVPARequest, ValidateUPI, ValidateVPAResponse, CardDetails, CardDetailsResponse, TransferItemsDetails, TransferModeDetails, TransferModeResponse, UpdateRefundTransferModeRequest, UpdateRefundTransferModeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, NotFoundResourceError, IfscCodeResponse, ErrorCodeDescription, AddBeneficiaryViaOtpVerificationRequest, AddBeneficiaryViaOtpVerificationResponse, WrongOtpError, BeneficiaryModeDetails, AddBeneficiaryDetailsRequest, RefundAccountResponse, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, WalletOtpRequest, WalletOtpResponse, SetDefaultBeneficiaryRequest, SetDefaultBeneficiaryResponse, GetPaymentLinkResponse, ErrorDescription, ErrorResponse, CreatePaymentLinkMeta, CreatePaymentLinkRequest, CreatePaymentLinkResponse, CancelOrResendPaymentLinkRequest, ResendPaymentLinkResponse, CancelPaymentLinkResponse, PollingPaymentLinkResponse, PaymentMethodsMeta, CreateOrderUserPaymentMethods, CreateOrderUserRequest, CreateOrderUserData, CreateOrderUserResponse, BalanceDetails, CreditSummary, CustomerCreditSummaryResponse, RedirectURL, RedirectToAggregatorResponse, CreditDetail, CheckCreditResponse, KYCAddress, UserPersonalInfoInDetails, MarketplaceInfo, BusinessDetails, DeviceDetails, CustomerOnboardingRequest, OnboardSummary, CustomerOnboardingResponse, OutstandingOrderDetailsResponse, PaidOrderDetailsResponse, PaymentMethodsMetaOrder, PaymentOrderMethods, PaymentOrderRequest, PaymentOrderData, PaymentOrderResponse };
}
/** @returns {AggregatorConfigDetail} */
declare function AggregatorConfigDetail(): AggregatorConfigDetail;
type AggregatorConfigDetail = {
    /**
     * - SDK
     */
    sdk?: boolean;
    /**
     * - Masked payment gateway api secret
     */
    secret: string;
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
    config_type: string;
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
    key: string;
    /**
     * - Registered User id
     */
    user_id?: string;
    /**
     * - Unique merchant id
     */
    merchant_id?: string;
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
    code: string;
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
    data: any;
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
    /**
     * - Payment gateway response data
     */
    data: any;
    /**
     * - Response is successful or not
     */
    success: boolean;
    /**
     * - Error or success message.
     */
    message: string;
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
    order_id: string;
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
    cart_id?: string;
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
};
/** @returns {PaymentStatusUpdateRequest} */
declare function PaymentStatusUpdateRequest(): PaymentStatusUpdateRequest;
type PaymentStatusUpdateRequest = {
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
    retry: boolean;
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
/** @returns {PaymentModeList} */
declare function PaymentModeList(): PaymentModeList;
type PaymentModeList = {
    /**
     * - Card_number
     */
    card_number?: string;
    /**
     * - Merchant code
     */
    merchant_code?: string;
    /**
     * - Card_reference
     */
    card_reference?: string;
    /**
     * - Card_issuer
     */
    card_issuer?: string;
    /**
     * - If card is
     * tokenised or not
     */
    compliant_with_tokenisation_guidelines?: boolean;
    /**
     * - Code
     */
    code?: string;
    /**
     * - Cod limit
     */
    cod_limit?: number;
    /**
     * - Intent_flow
     */
    intent_flow?: boolean;
    /**
     * - Fynd_vpa
     */
    fynd_vpa?: string;
    /**
     * -
     * Intent_app_error_dict_list
     */
    intent_app_error_dict_list?: IntentAppErrorList[];
    /**
     * - Aggregator_name
     */
    aggregator_name: string;
    /**
     * - Card_fingerprint
     */
    card_fingerprint?: string;
    /**
     * - Intent_app_error_list
     */
    intent_app_error_list?: string[];
    /**
     * - Intent_app
     */
    intent_app?: IntentApp[];
    /**
     * - Expired
     */
    expired?: boolean;
    /**
     * - Retry_count
     */
    retry_count?: number;
    /**
     * - Exp_year
     */
    exp_year?: number;
    /**
     * - Exp_month
     */
    exp_month?: number;
    /**
     * - Card_id
     */
    card_id?: string;
    /**
     * - Remaining limit
     */
    remaining_limit?: number;
    /**
     * - Dispaly Priority
     */
    display_priority?: number;
    /**
     * - Card_brand
     */
    card_brand?: string;
    /**
     * - Cod limit per order
     */
    cod_limit_per_order?: number;
    logo_url?: PaymentModeLogo;
    /**
     * - Nickname
     */
    nickname?: string;
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
     * - Display name
     */
    display_name?: string;
    /**
     * - Card_isin
     */
    card_isin?: string;
    /**
     * - Timeout
     */
    timeout?: number;
    /**
     * - Card_token
     */
    card_token?: string;
    /**
     * - Name
     */
    name?: string;
    /**
     * - Payment methods meta
     */
    meta?: any;
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
    payment_flow_data?: string;
    /**
     * - Payment_flow
     */
    payment_flow?: string;
    /**
     * - Api_link
     */
    api_link?: string;
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
    upi_razorpay?: AggregatorRoute;
};
/** @returns {PaymentOptionAndFlow} */
declare function PaymentOptionAndFlow(): PaymentOptionAndFlow;
type PaymentOptionAndFlow = {
    payment_option: RootPaymentMode;
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
    aggregator: string;
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
    aggregator: string;
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
    aggregator: string;
    /**
     * - Wallet Code
     */
    wallet_code: string;
};
/** @returns {WalletResponseSchema} */
declare function WalletResponseSchema(): WalletResponseSchema;
type WalletResponseSchema = {
    /**
     * - Response received from aggregator
     */
    data: any;
    /**
     * - Success/Failure of the API call
     */
    success: boolean;
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
    status: boolean;
    /**
     * - Message
     */
    message: string;
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
    /**
     * - Aggregator slug
     */
    aggregator?: string;
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
    mobile?: string;
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
    branch_name?: string;
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
    comment?: string;
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
};
/** @returns {OrderBeneficiaryResponse} */
declare function OrderBeneficiaryResponse(): OrderBeneficiaryResponse;
type OrderBeneficiaryResponse = {
    /**
     * - Show beneficiary details or not.
     */
    show_beneficiary_details?: boolean;
    /**
     * - All Beneficiaries Of An Order
     */
    beneficiaries?: OrderBeneficiaryDetails[];
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
/** @returns {ErrorCodeDescription} */
declare function ErrorCodeDescription(): ErrorCodeDescription;
type ErrorCodeDescription = {
    /**
     * - Error descrption code.
     */
    code: string;
    /**
     * - Error human understandable description.
     */
    description: string;
    /**
     * - Response is successful or not
     */
    success: boolean;
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
    message: string;
};
/** @returns {WrongOtpError} */
declare function WrongOtpError(): WrongOtpError;
type WrongOtpError = {
    /**
     * - Vefified flag.
     */
    is_verified_flag: boolean;
    /**
     * - Wrong OTP Code
     */
    description: string;
    /**
     * - Response is successful or not
     */
    success: string;
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
    mobile: string;
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
    /**
     * - Email of the Account Holder
     */
    email: string;
};
/** @returns {AddBeneficiaryDetailsRequest} */
declare function AddBeneficiaryDetailsRequest(): AddBeneficiaryDetailsRequest;
type AddBeneficiaryDetailsRequest = {
    /**
     * - True if beneficiary to be added by delights or
     * False if by User
     */
    delights: boolean;
    /**
     * - Shipment Id of the respective Merchant Order Id
     */
    shipment_id: string;
    details: BeneficiaryModeDetails;
    otp?: string;
    /**
     * - Merchant Order Id
     */
    order_id: string;
    /**
     * - Transfer Mode of the Beneficiary to be added
     */
    transfer_mode: string;
    request_id?: string;
};
/** @returns {RefundAccountResponse} */
declare function RefundAccountResponse(): RefundAccountResponse;
type RefundAccountResponse = {
    is_verified_flag?: boolean;
    /**
     * - Refund account data.
     */
    data?: any;
    /**
     * - Success or failure flag.
     */
    success: boolean;
    /**
     * - Response message
     */
    message: string;
};
/** @returns {BankDetailsForOTP} */
declare function BankDetailsForOTP(): BankDetailsForOTP;
type BankDetailsForOTP = {
    account_no: string;
    bank_name: string;
    ifsc_code: string;
    branch_name: string;
    account_holder: string;
};
/** @returns {AddBeneficiaryDetailsOTPRequest} */
declare function AddBeneficiaryDetailsOTPRequest(): AddBeneficiaryDetailsOTPRequest;
type AddBeneficiaryDetailsOTPRequest = {
    order_id: string;
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
    request_id: string;
    /**
     * - Boolean Flag whether OTP Validation is
     * already done or not
     */
    is_verified_flag: string;
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
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
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
    cart_id: string;
    checkout_mode: string;
    assign_card_id?: string;
    amount: string;
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
};
/** @returns {CreateOrderUserResponse} */
declare function CreateOrderUserResponse(): CreateOrderUserResponse;
type CreateOrderUserResponse = {
    /**
     * - HTTP status code
     */
    status_code: number;
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
    signup_url: string;
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
/** @returns {PaymentMethodsMetaOrder} */
declare function PaymentMethodsMetaOrder(): PaymentMethodsMetaOrder;
type PaymentMethodsMetaOrder = {
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
    success: boolean;
    /**
     * - HTTP status code
     */
    status_code: number;
    data?: PaymentOrderData;
    /**
     * - Message
     */
    message: string;
};
