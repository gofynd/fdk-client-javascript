const Joi = require("joi");

/**
 * @typedef ActiveCardPaymentGatewayResponse
 * @property {CardPaymentGateway} cards - Card's payment gateway with customer id.
 * @property {string} message - Human readable message.
 * @property {boolean} success - Response is successful or not.
 */

/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {BankDetailsForOTP} details
 * @property {string} order_id
 */

/**
 * @typedef AddBeneficiaryDetailsRequest
 * @property {boolean} delights - True if beneficiary to be added by delights or
 *   False if by User
 * @property {BeneficiaryModeDetails} details - Beneficiary bank details
 * @property {string} order_id - Merchant Order Id
 * @property {string} [otp]
 * @property {string} [request_id]
 * @property {string} shipment_id - Shipment Id of the respective Merchant Order Id
 * @property {string} transfer_mode - Transfer Mode of the Beneficiary to be added
 */

/**
 * @typedef AddBeneficiaryViaOtpVerificationRequest
 * @property {string} hash_key - Hash key of the beneficiary Id
 * @property {string} otp - Otp sent to the given Mobile No
 * @property {string} request_id - Request Id sent in
 */

/**
 * @typedef AddBeneficiaryViaOtpVerificationResponse
 * @property {string} message - Aggregator Response of beneficicary
 * @property {boolean} [success] - Response is successful or not
 */

/**
 * @typedef AggregatorConfigDetail
 * @property {string} [api] - Payment gateway api endpoint
 * @property {string} config_type - Fynd or self payment gateway
 * @property {string} key - Payment gateway api key
 * @property {string} [merchant_id] - Unique merchant id
 * @property {string} [merchant_key] - Unique merchant key
 * @property {string} [pin] - Masked pin
 * @property {boolean} [sdk] - SDK
 * @property {string} secret - Masked payment gateway api secret
 * @property {string} [user_id] - Registered User id
 * @property {string} [verify_api] - Payment gateway verify payment api endpoint
 */

/**
 * @typedef AggregatorRoute
 * @property {string} [api_link] - Api_link
 * @property {Object} [data] - Data
 * @property {string} [payment_flow] - Payment_flow
 * @property {string} [payment_flow_data] - Payment_flow_data
 */

/**
 * @typedef AggregatorsConfigDetailResponse
 * @property {AggregatorConfigDetail} [ccavenue]
 * @property {string} env - Environment i.e Live or Test
 * @property {AggregatorConfigDetail} [juspay]
 * @property {AggregatorConfigDetail} [mswipe]
 * @property {AggregatorConfigDetail} [payumoney]
 * @property {AggregatorConfigDetail} [razorpay]
 * @property {AggregatorConfigDetail} [rupifi]
 * @property {AggregatorConfigDetail} [simpl]
 * @property {AggregatorConfigDetail} [stripe]
 * @property {boolean} success
 */

/**
 * @typedef AttachCardRequest
 * @property {string} card_id - Card token of payment gateway.
 * @property {string} [name_on_card]
 * @property {string} [nickname]
 * @property {boolean} [refresh] - Refresh cache flag.
 */

/**
 * @typedef AttachCardsResponse
 * @property {Object} data - List of cards of customer.
 * @property {string} [message] - Human readable message.
 * @property {boolean} success - Response is successful or not.
 */

/**
 * @typedef BalanceDetails
 * @property {string} [currency] - Currency Code
 * @property {string} [formatted_value] - Formated Amount with currency symbol
 * @property {number} [value] - Payment amount
 */

/**
 * @typedef BankDetailsForOTP
 * @property {string} account_holder
 * @property {string} account_no
 * @property {string} bank_name
 * @property {string} branch_name
 * @property {string} ifsc_code
 */

/**
 * @typedef BeneficiaryModeDetails
 * @property {string} account_holder - Name of the Account Holder
 * @property {string} account_no - Account NUmber of the Account Holder
 * @property {string} [address] - Address of the User
 * @property {string} bank_name - Bank Name of the Account
 * @property {string} branch_name - Branch Name of the Account
 * @property {string} [comment] - Remarks added by The user
 * @property {string} email - Email of the Account Holder
 * @property {string} ifsc_code - Ifsc Code of the Account
 * @property {string} mobile - Moblie Number of the User
 * @property {string} [vpa]
 * @property {string} [wallet]
 */

/**
 * @typedef BusinessDetails
 * @property {KYCAddress} [address] - Address details
 * @property {string} [business_ownership_type] - Business Ownershipp type(e.g Rented)
 * @property {string} [business_type] - Business Type
 * @property {string} [entity_type] - Busineess Entity Type
 * @property {string} [fda] - Driver License
 * @property {string} [fssai] - FDA License Number
 * @property {string} [gstin] - GSTIN Number
 * @property {string} [name] - Business Name
 * @property {string} [pan] - Pan Number
 * @property {Object} [shop_and_establishment] - Shop Establishment
 * @property {string} [vintage] - Vintage
 */

/**
 * @typedef CancelOrResendPaymentLinkRequest
 * @property {string} payment_link_id - Unique id of payment link
 */

/**
 * @typedef CancelPaymentLinkResponse
 * @property {string} message - Message
 * @property {number} status_code - HTTP status code
 * @property {boolean} success - Successful or failure
 */

/**
 * @typedef Card
 * @property {string} aggregator_name - Aggregator_name
 * @property {string} [card_brand] - Card_brand
 * @property {string} [card_brand_image] - Card_brand_image
 * @property {string} [card_fingerprint] - Card_fingerprint
 * @property {string} [card_id] - Card_id
 * @property {string} [card_isin] - Card_isin
 * @property {string} [card_issuer] - Card_issuer
 * @property {string} [card_name] - Card_name
 * @property {string} [card_number] - Card_number
 * @property {string} [card_reference] - Card_reference
 * @property {string} [card_token] - Card_token
 * @property {string} [card_type] - Card_type
 * @property {boolean} [compliant_with_tokenisation_guidelines] - If card is
 *   tokenised or not
 * @property {number} [exp_month] - Exp_month
 * @property {number} [exp_year] - Exp_year
 * @property {boolean} [expired] - Expired
 * @property {string} [nickname] - Nickname
 */

/**
 * @typedef CardDetails
 * @property {string} bank - Bank name
 * @property {string} bank_code - Bank Code
 * @property {string} card_brand - Card brand like VISA/RUPAY
 * @property {string} [card_exp_month] - Card Expire Month
 * @property {string} [card_exp_year] - Card Expire Year
 * @property {string} card_object - Card bin or Card refrence
 * @property {string} card_sub_type - Card Sub type
 * @property {string} [card_token] - Card Token
 * @property {string} country - Country Name
 * @property {string} extended_card_type - Extended Card Type
 * @property {string} id - Id
 * @property {boolean} is_domestic_card - Is card domestic or international
 * @property {string} [name_on_card] - Name on Card
 * @property {boolean} status - Status
 * @property {string} type - Card Type Credit/Debit
 * @property {string} [user] - Customer/User ID
 */

/**
 * @typedef CardDetailsResponse
 * @property {CardDetails} data - Saved Card Details
 * @property {boolean} success - Response is successful or not.
 */

/**
 * @typedef CardPaymentGateway
 * @property {string} aggregator - Payment gateway name.
 * @property {string} [api] - Payment gateway CARD api endpoint
 * @property {string} [customer_id] - Payment gateway customer id.
 */

/**
 * @typedef ChargeCustomerRequest
 * @property {string} aggregator - Payment gateway name i.e Simpl, Mswipe
 * @property {number} amount - Chargable amount of order.
 * @property {string} order_id - Unique order id.
 * @property {string} [transaction_token] - Transaction token of payment gateway.
 * @property {boolean} [verified] - Already Verified flag from payment gateway i.e Mswipe
 */

/**
 * @typedef ChargeCustomerResponse
 * @property {string} aggregator - Payment gateway name i.e Simpl, Mswipe
 * @property {string} [cart_id] - Cart id of customer
 * @property {string} [delivery_address_id] - Delivery adddress id of customer
 * @property {string} message - Human readable message.
 * @property {string} order_id - Unique order id.
 * @property {string} status - Status of charged payment.
 * @property {boolean} success - Response is successful or not.
 */

/**
 * @typedef CheckCreditResponse
 * @property {CreditDetail} data - Credit summary of user.
 * @property {boolean} success - Operation is successful or not.
 */

/**
 * @typedef CreateOrderUserData
 * @property {string} [aggregator] - Aggregator name
 * @property {number} [amount] - Amount
 * @property {string} [callback_url] - Callback url for aggregator
 * @property {string} [contact] - Mobile number
 * @property {string} [currency] - Currency
 * @property {string} [customer_id] - Aggregator customer id
 * @property {string} [email] - Email
 * @property {string} [merchant_order_id] - Merchant order id
 * @property {string} [method] - Method
 * @property {string} [order_id] - Aggregator order id
 */

/**
 * @typedef CreateOrderUserPaymentMethods
 * @property {PaymentMethodsMeta} meta - Meta
 * @property {string} mode - Payment mode
 * @property {string} name - Payment mode name
 */

/**
 * @typedef CreateOrderUserRequest
 * @property {string} currency - Currency
 * @property {string} failure_callback_url - Failure page url
 * @property {Object} [meta] - Meta
 * @property {string} payment_link_id - Unique id of payment link
 * @property {CreateOrderUserPaymentMethods} payment_methods - Payment method details
 * @property {string} success_callback_url - Success page url
 */

/**
 * @typedef CreateOrderUserResponse
 * @property {string} [callback_url] - Callback url for aggregator
 * @property {CreateOrderUserData} [data]
 * @property {string} message - Message
 * @property {string} [order_id] - Merchant order id
 * @property {string} [payment_confirm_url] - Payment confirm url for aggregator
 * @property {number} status_code - HTTP status code
 * @property {boolean} success - Successful or failure
 */

/**
 * @typedef CreatePaymentLinkMeta
 * @property {string} amount
 * @property {string} [assign_card_id]
 * @property {string} cart_id
 * @property {string} checkout_mode
 * @property {string} pincode
 */

/**
 * @typedef CreatePaymentLinkRequest
 * @property {number} amount - Total value of order
 * @property {string} [description] - Merchant order id
 * @property {string} email - Email to which the payment link is to be sent
 * @property {string} external_order_id - Merchant order id
 * @property {CreatePaymentLinkMeta} meta - Meta
 * @property {string} mobile_number - Mobile number to which the payment link is
 *   to be sent
 */

/**
 * @typedef CreatePaymentLinkResponse
 * @property {string} message - Message
 * @property {string} [payment_link_id] - Unique id of payment link
 * @property {string} [payment_link_url] - Url of payment link
 * @property {number} [polling_timeout] - Polling request timeout
 * @property {number} status_code - HTTP status code
 * @property {boolean} success - Successful or failure
 */

/**
 * @typedef CreditDetail
 * @property {boolean} is_registered - User is registered with aggregator or not.
 * @property {string} signup_url - URL to which the user may redirect.
 * @property {boolean} status - Operation is successful or not.
 */

/**
 * @typedef CreditSummary
 * @property {BalanceDetails} [amount_available] - Credit summary of user.
 * @property {BalanceDetails} [balance] - Credit summary of user.
 * @property {string} [buyer_status] - Status from Credit aggregator's end
 * @property {string} [credit_line_id] - ID at Credit aggregator's end
 * @property {string} [merchant_customer_ref_id] - Unique aggregator customer id
 * @property {string} [status] - Customer Credit status
 * @property {string} [status_message] - Message to customer
 */

/**
 * @typedef CustomerCreditSummaryResponse
 * @property {CreditSummary} [data] - Credit summary of user.
 * @property {boolean} success - Payment confirmation updated or not.
 */

/**
 * @typedef CustomerOnboardingRequest
 * @property {string} aggregator - Aggregator Name
 * @property {BusinessDetails} [business_info] - Business summary.
 * @property {DeviceDetails} [device] - Device Details.
 * @property {MarketplaceInfo} [marketplace_info] - Market Place info.
 * @property {string} [mcc] - Mcc
 * @property {UserPersonalInfoInDetails} personal_info - Credit summary of user.
 * @property {string} source - CallbackURL
 */

/**
 * @typedef CustomerOnboardingResponse
 * @property {OnboardSummary} data - Redirect URL.
 * @property {boolean} success - Status updated or not.
 */

/**
 * @typedef DeleteCardsResponse
 * @property {string} [message] - Human readable message.
 * @property {boolean} success - Response is successful or not.
 */

/**
 * @typedef DeletehCardRequest
 * @property {string} card_id - Card token of payment gateway.
 */

/**
 * @typedef DeviceDetails
 * @property {string} [device_make] - Device maker
 * @property {string} [device_model] - Device Model
 * @property {string} [device_type] - Device Type(E.g. Mobile)
 * @property {string} [identification_number] - IP
 * @property {string} [identifier_type] - Static value = ip
 * @property {string} [os] - OS Name
 * @property {string} [os_version] - OS Version
 */

/**
 * @typedef EpaylaterBannerData
 * @property {boolean} display - Need to display banner or not
 * @property {string} [message] - EPayLater message
 * @property {string} [status] - Epaylater KYC status
 */

/**
 * @typedef EpaylaterBannerResponse
 * @property {EpaylaterBannerData} data - Epaylater KYC banner details.
 * @property {boolean} success - Successful or not.
 */

/**
 * @typedef ErrorCodeAndDescription
 * @property {string} code - Error descrption code.
 * @property {string} description - Error human understandable description.
 */

/**
 * @typedef ErrorCodeDescription
 * @property {string} code - Error descrption code.
 * @property {string} description - Error human understandable description.
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef ErrorDescription
 * @property {number} [amount] - Amount paid
 * @property {boolean} [cancelled] - Payment link is cancelled or not
 * @property {boolean} [expired] - Payment link expired or not
 * @property {boolean} [invalid_id] - Payment link id is valid or not
 * @property {string} [merchant_name] - Name of merchant that created payment link
 * @property {string} [merchant_order_id] - Order id
 * @property {string} [msg] - Message
 * @property {string} [payment_transaction_id] - Payment transaction id
 */

/**
 * @typedef ErrorResponse
 * @property {Object} [error]
 * @property {string} message - Message
 * @property {number} status_code - HTTP status code
 * @property {boolean} success - Successful or failure
 */

/**
 * @typedef GetPaymentLinkResponse
 * @property {number} [amount] - Total value of order
 * @property {string} [external_order_id] - Merchant order id
 * @property {string} [merchant_name] - Merchant name
 * @property {string} message - Message
 * @property {string} [payment_link_current_status] - Status of payment link
 * @property {string} [payment_link_url] - Url of payment link
 * @property {number} [polling_timeout] - Polling request timeout
 * @property {number} status_code - HTTP status code
 * @property {boolean} success - Successful or failure
 */

/**
 * @typedef HttpErrorCodeAndResponse
 * @property {ErrorCodeAndDescription} [error]
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef IfscCodeResponse
 * @property {string} bank_name - Bank Name Of Account
 * @property {string} branch_name - Branch Name Of Account
 * @property {boolean} [success] - Response is successful or not
 */

/**
 * @typedef IntentApp
 * @property {string} [code] - Code
 * @property {string} [display_name] - Display_name
 * @property {Object} [logos] - Logos
 * @property {string} [package_name] - Package_name
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [code] - Code
 * @property {string} [package_name] - Package_name
 */

/**
 * @typedef KYCAddress
 * @property {string} addressline1 - Address Line 1
 * @property {string} [addressline2] - Address Line 2
 * @property {string} city - City
 * @property {string} [land_mark] - Land Mark
 * @property {string} [ownership_type] - Address Owner Type
 * @property {string} pincode - Pincode
 * @property {string} state - State
 */

/**
 * @typedef LinkStatus
 * @property {string} message - Message
 * @property {boolean} status - Link action status
 */

/**
 * @typedef ListCardsResponse
 * @property {Card[]} [data] - List of cards of customer.
 * @property {string} message - Human readable message.
 * @property {boolean} success - Response is successful or not.
 */

/**
 * @typedef MarketplaceInfo
 * @property {string} [date_of_joining] - Date of joining
 * @property {string} membership_id - Merchant id
 * @property {string} name - Name of store
 */

/**
 * @typedef NotFoundResourceError
 * @property {string} code - Bad Request Data
 * @property {string} description - Not Found
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef OnboardSummary
 * @property {string} redirect_url - URL to which the user may redirect.
 * @property {Object} session - User Session
 * @property {boolean} status - Operation Status
 */

/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} account_holder - Account Holder Name
 * @property {string} account_no - Account Number
 * @property {string} address - Address of User
 * @property {string} bank_name - Bank Name Of Account
 * @property {string} beneficiary_id - Benenficiary Id
 * @property {string} [branch_name] - Branch Name Of Account
 * @property {string} [comment] - Remarks
 * @property {string} created_on - Creation Date of Beneficiary
 * @property {string} [delights_user_name] - User Id Who filled the Beneficiary
 * @property {string} display_name - Display Name Of Account
 * @property {string} email - EMail of User
 * @property {number} id -
 * @property {string} ifsc_code - Ifsc Code Of Account
 * @property {boolean} is_active - Boolean Flag whether Beneficiary set or not
 * @property {string} [mobile] - MObile no of User
 * @property {string} modified_on - MOdification Date of Beneficiary
 * @property {string} subtitle - SHort Title Of Account
 * @property {string} title - Title Of Account
 * @property {string} transfer_mode - Transfer Mode Of Account
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {OrderBeneficiaryDetails[]} [beneficiaries] - All Beneficiaries Of An Order
 * @property {boolean} [show_beneficiary_details] - Show beneficiary details or not.
 */

/**
 * @typedef OutstandingOrderDetailsResponse
 * @property {Object[]} [data] - Dict containing the outstanding order details
 * @property {string} [message] - Message
 * @property {number} status_code - HTTP Status code
 * @property {boolean} success - Response is successful or not.
 */

/**
 * @typedef PaidOrderDetailsResponse
 * @property {Object[]} [data] - Dict containing the paid order details
 * @property {string} [message] - Message
 * @property {number} status_code - HTTP Status code
 * @property {boolean} success - Response is successful or not.
 */

/**
 * @typedef PaymentFlow
 * @property {Object} [ajiodhan] - Ajiodhan
 * @property {Object} [bqr_razorpay] - BQR_Razorpay
 * @property {Object} [ccavenue] - Ccavenue
 * @property {Object} [epaylater] - Epaylater
 * @property {Object} [fynd] - Fynd
 * @property {Object} [jiopay] - Jiopay
 * @property {Object} [juspay] - Juspay
 * @property {Object} [mswipe] - Mswipe
 * @property {Object} [payubiz] - Payubiz
 * @property {Object} [razorpay] - Razorpay
 * @property {Object} [rupifi] - Rupifi
 * @property {Object} [simpl] - Simpl
 * @property {Object} [stripe] - Stripe
 * @property {Object} [upi_razorpay] - UPI_Razorpay
 */

/**
 * @typedef PaymentInitializationRequest
 * @property {string} aggregator - Payment gateway name
 * @property {number} amount - Payable amount.
 * @property {string} contact - Customer valid mobile number
 * @property {string} currency - Currency code.
 * @property {string} customer_id - Payment gateway customer id.
 * @property {string} [device_id] - EDC machine Unique Identifier
 * @property {string} email - Customer valid email
 * @property {string} merchant_order_id - Unique fynd order id
 * @property {string} method - Payment method
 * @property {string} order_id - Payment gateway order id
 * @property {string} [razorpay_payment_id] - Payment gateway payment id
 * @property {number} [timeout] - Payment polling timeout if not recieved response
 * @property {string} [vpa] - Customer vpa address
 */

/**
 * @typedef PaymentInitializationResponse
 * @property {string} aggregator - Payment gateway name
 * @property {string} [aggregator_order_id] - Payment order id
 * @property {number} [amount] - Payable amount.
 * @property {string} [bqr_image] - Bharath qr image url.
 * @property {string} [currency] - Currency code.
 * @property {string} [customer_id] - Payment gateway customer id.
 * @property {string} [device_id] - EDC machine Unique Identifier
 * @property {string} merchant_order_id - Order id
 * @property {string} method - Payment method
 * @property {string} polling_url - Polling url.
 * @property {string} [razorpay_payment_id] - Payment id.
 * @property {string} [status] - Status of payment.
 * @property {boolean} success - Response is successful or not.
 * @property {number} [timeout] - Timeout.
 * @property {string} [upi_poll_url] - UPI poll url.
 * @property {string} [virtual_id] - Payment virtual address.
 * @property {string} [vpa] - Customer vpa address
 */

/**
 * @typedef PaymentMethodsMeta
 * @property {string} merchant_code - Merchant code
 * @property {string} payment_gateway - Payment gateway name
 * @property {string} payment_identifier - Payment identifier
 */

/**
 * @typedef PaymentModeList
 * @property {string} aggregator_name - Aggregator_name
 * @property {string} [card_brand] - Card_brand
 * @property {string} [card_brand_image] - Card_brand_image
 * @property {string} [card_fingerprint] - Card_fingerprint
 * @property {string} [card_id] - Card_id
 * @property {string} [card_isin] - Card_isin
 * @property {string} [card_issuer] - Card_issuer
 * @property {string} [card_name] - Card_name
 * @property {string} [card_number] - Card_number
 * @property {string} [card_reference] - Card_reference
 * @property {string} [card_token] - Card_token
 * @property {string} [card_type] - Card_type
 * @property {number} [cod_limit] - Cod limit
 * @property {number} [cod_limit_per_order] - Cod limit per order
 * @property {string} [code] - Code
 * @property {boolean} [compliant_with_tokenisation_guidelines] - If card is
 *   tokenised or not
 * @property {string} [display_name] - Display name
 * @property {number} [display_priority] - Dispaly Priority
 * @property {number} [exp_month] - Exp_month
 * @property {number} [exp_year] - Exp_year
 * @property {boolean} [expired] - Expired
 * @property {string} [fynd_vpa] - Fynd_vpa
 * @property {IntentApp[]} [intent_app] - Intent_app
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list] -
 *   Intent_app_error_dict_list
 * @property {string[]} [intent_app_error_list] - Intent_app_error_list
 * @property {boolean} [intent_flow] - Intent_flow
 * @property {Object} [logo_url] - Logo
 * @property {string} [merchant_code] - Merchant code
 * @property {string} [name] - Name
 * @property {string} [nickname] - Nickname
 * @property {number} [remaining_limit] - Remaining limit
 * @property {number} [retry_count] - Retry_count
 * @property {number} [timeout] - Timeout
 */

/**
 * @typedef PaymentModeLogo
 * @property {string} large - Large
 * @property {string} small - Smalll
 */

/**
 * @typedef PaymentModeRouteResponse
 * @property {PaymentOptionAndFlow} payment_options - Payment_options
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef PaymentOptionAndFlow
 * @property {PaymentFlow} payment_flows - Payment_flows
 * @property {RootPaymentMode[]} payment_option - Payment options
 */

/**
 * @typedef PaymentStatusUpdateRequest
 * @property {string} aggregator - Payment gateway name
 * @property {number} amount - Payable amount.
 * @property {string} contact - Customer valid mobile number
 * @property {string} currency - Currency code.
 * @property {string} customer_id - Payment gateway customer id.
 * @property {string} [device_id] - EDC machine Unique Identifier
 * @property {string} email - Customer valid email
 * @property {string} merchant_order_id - Unique fynd order id
 * @property {string} merchant_transaction_id - Unique fynd transaction id
 * @property {string} method - Payment method
 * @property {string} order_id - Payment gateway order id
 * @property {string} status - Status of payment.
 * @property {string} [vpa] - Customer vpa address
 */

/**
 * @typedef PaymentStatusUpdateResponse
 * @property {string} aggregator_name - Payment gateway name
 * @property {string} [redirect_url] - Redirect url
 * @property {boolean} retry - Response is successful or not.
 * @property {string} status - Payment status
 * @property {boolean} [success] - Response is successful or not
 */

/**
 * @typedef PollingPaymentLinkResponse
 * @property {string} [aggregator_name] - Aggregator name
 * @property {number} [amount] - Amount
 * @property {number} [http_status] - HTTP status code
 * @property {string} [message] - Message
 * @property {string} [order_id] - Fynd order id
 * @property {string} [payment_link_id] - Payment link id
 * @property {string} [redirect_url] - Url to redirect to
 * @property {string} [status] - Status of payment link
 * @property {number} [status_code] - HTTP status code
 * @property {boolean} [success] - Successful or failure
 */

/**
 * @typedef RedirectToAggregatorResponse
 * @property {RedirectURL} data - Redirect URL.
 * @property {boolean} success - Status updated or not.
 */

/**
 * @typedef RedirectURL
 * @property {string} signup_url - URL to which the user may redirect.
 * @property {boolean} status - Aggregator's Operation is successful or not.
 */

/**
 * @typedef RefundAccountResponse
 * @property {Object} [data] - Refund account data.
 * @property {boolean} [is_verified_flag]
 * @property {string} message - Response message
 * @property {boolean} success - Success or failure flag.
 */

/**
 * @typedef renderHTMLRequest
 * @property {string} base64_html - Base64 encoded html string
 * @property {string} [returntype] - Return Type of API
 */

/**
 * @typedef renderHTMLResponse
 * @property {string} html - HTML string
 */

/**
 * @typedef ResendOrCancelPaymentRequest
 * @property {string} [device_id] - EDC machine Unique Identifier
 * @property {string} order_id - Unique order id
 * @property {string} request_type - Either resend or cancel
 */

/**
 * @typedef ResendOrCancelPaymentResponse
 * @property {LinkStatus} data - Data about link action status.
 * @property {boolean} success - Response is successful or not.
 */

/**
 * @typedef ResendPaymentLinkResponse
 * @property {string} message - Message
 * @property {number} [polling_timeout] - Polling request timeout
 * @property {number} status_code - HTTP status code
 * @property {boolean} success - Successful or failure
 */

/**
 * @typedef RootPaymentMode
 * @property {boolean} [add_card_enabled] - Annonymous card flag
 * @property {string} [aggregator_name] - Dispaly Priority
 * @property {boolean} [anonymous_enable] - Annonymous card flag
 * @property {string} display_name - Payment mode display name
 * @property {number} display_priority - Dispaly Priority
 * @property {boolean} [is_pay_by_card_pl] - This flag will be true in case of
 *   Payment link payment through card
 * @property {PaymentModeList[]} [list] - Payment mode
 * @property {string} name - Payment mode name
 * @property {boolean} [save_card] - Card save or not
 */

/**
 * @typedef RupifiBannerData
 * @property {string} [kyc_url] - Rupifi KYC banner url.
 * @property {string} [status] - Rupifi KYC status
 */

/**
 * @typedef RupifiBannerResponse
 * @property {RupifiBannerData} data - Rupifi KYC banner details.
 * @property {boolean} success - Successful or not.
 */

/**
 * @typedef SetDefaultBeneficiaryRequest
 * @property {string} beneficiary_id - Beneficiary Hash Id of the beneficiary added
 * @property {string} order_id - Merchant Order Id
 */

/**
 * @typedef SetDefaultBeneficiaryResponse
 * @property {boolean} is_beneficiary_set - Boolean Flag whether Beneficiary set or not
 * @property {boolean} [success] - Response is successful or not
 */

/**
 * @typedef TransferItemsDetails
 * @property {string} [display_name] - Beneficiary Display Name
 * @property {number} id -
 * @property {string} logo_large - Beneficiary large Logo
 * @property {string} logo_small - Beneficiary small Logo
 * @property {string} name - Beneficiary Name
 */

/**
 * @typedef TransferModeDetails
 * @property {string} display_name - Beneficiary Mode Name
 * @property {TransferItemsDetails[]} [items] - Beneficiary Mode Items
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
 * @typedef UserPersonalInfoInDetails
 * @property {KYCAddress} address_as_per_id - Address details
 * @property {string} dob - DOB
 * @property {string} [driving_license] - Driver License
 * @property {string} [email] - Email
 * @property {boolean} email_verified - Is Email Verified or not
 * @property {string} [fathers_name] - Father's Name
 * @property {string} first_name - First Name
 * @property {string} [gender] - Gender
 * @property {string} [last_name] - Last Name
 * @property {string} [middle_name] - Middle Name
 * @property {boolean} mobile_verified - Is Mobile Verified or not
 * @property {string} [mothers_name] - Mother's Name
 * @property {string} [pan] - Pan Number
 * @property {string} [passport] - Passport
 * @property {string} phone - Email
 * @property {string} [voter_id] - Voter ID Number
 */

/**
 * @typedef ValidateCustomerRequest
 * @property {string} aggregator - Payment gateway name in camel case i.e Simpl, Rupifi
 * @property {Object} [billing_address] - Extra meta fields.
 * @property {Object} [delivery_address] - Extra meta fields.
 * @property {Object} [merchant_params] - Extra meta fields.
 * @property {Object[]} [order_items] - Extra meta fields.
 * @property {string} [payload] - Hashed payload string.
 * @property {string} phone_number - User mobile number without country code.
 * @property {number} transaction_amount_in_paise - Payable amount in paise
 */

/**
 * @typedef ValidateCustomerResponse
 * @property {Object} data - Payment gateway response data
 * @property {string} message - Error or success message.
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef ValidateUPI
 * @property {string} customer_name - Customer Bank
 * @property {boolean} is_valid - Boolean is true or false.
 * @property {string} status - VALID or INVALID
 * @property {string} upi_vpa - UPI ID
 */

/**
 * @typedef ValidateVPARequest
 * @property {string} upi_vpa - UPI ID
 */

/**
 * @typedef ValidateVPAResponse
 * @property {ValidateUPI} data - Data about UPI ID validate.
 * @property {boolean} success - Response is successful or not.
 */

/**
 * @typedef WalletOtpRequest
 * @property {string} country_code - Country Code of the Mobile Number
 * @property {string} mobile - Wallet Moblie Number of the User
 */

/**
 * @typedef WalletOtpResponse
 * @property {string} is_verified_flag - Boolean Flag whether OTP Validation is
 *   already done or not
 * @property {string} request_id - Request id
 * @property {boolean} [success] - Response is successful or not
 */

/**
 * @typedef WrongOtpError
 * @property {string} description - Wrong OTP Code
 * @property {boolean} is_verified_flag - Vefified flag.
 * @property {string} success - Response is successful or not
 */

class PaymentApplicationModel {
  /** @returns {ActiveCardPaymentGatewayResponse} */
  static ActiveCardPaymentGatewayResponse() {
    return Joi.object({
      cards: PaymentApplicationModel.CardPaymentGateway().required(),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {AddBeneficiaryDetailsOTPRequest} */
  static AddBeneficiaryDetailsOTPRequest() {
    return Joi.object({
      details: PaymentApplicationModel.BankDetailsForOTP().required(),
      order_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {AddBeneficiaryDetailsRequest} */
  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      delights: Joi.boolean().required(),
      details: PaymentApplicationModel.BeneficiaryModeDetails().required(),
      order_id: Joi.string().allow("").required(),
      otp: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      shipment_id: Joi.string().allow("").required(),
      transfer_mode: Joi.string().allow("").required(),
    });
  }

  /** @returns {AddBeneficiaryViaOtpVerificationRequest} */
  static AddBeneficiaryViaOtpVerificationRequest() {
    return Joi.object({
      hash_key: Joi.string().allow("").required(),
      otp: Joi.string().allow("").required(),
      request_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {AddBeneficiaryViaOtpVerificationResponse} */
  static AddBeneficiaryViaOtpVerificationResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      success: Joi.boolean(),
    });
  }

  /** @returns {AggregatorConfigDetail} */
  static AggregatorConfigDetail() {
    return Joi.object({
      api: Joi.string().allow("").allow(null),
      config_type: Joi.string().allow("").required(),
      key: Joi.string().allow("").required(),
      merchant_id: Joi.string().allow("").allow(null),
      merchant_key: Joi.string().allow("").allow(null),
      pin: Joi.string().allow("").allow(null),
      sdk: Joi.boolean().allow(null),
      secret: Joi.string().allow("").required(),
      user_id: Joi.string().allow("").allow(null),
      verify_api: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {AggregatorRoute} */
  static AggregatorRoute() {
    return Joi.object({
      api_link: Joi.string().allow("").allow(null),
      data: Joi.any().allow(null),
      payment_flow: Joi.string().allow("").allow(null),
      payment_flow_data: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {AggregatorsConfigDetailResponse} */
  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      ccavenue: PaymentApplicationModel.AggregatorConfigDetail(),
      env: Joi.string().allow("").required(),
      juspay: PaymentApplicationModel.AggregatorConfigDetail(),
      mswipe: PaymentApplicationModel.AggregatorConfigDetail(),
      payumoney: PaymentApplicationModel.AggregatorConfigDetail(),
      razorpay: PaymentApplicationModel.AggregatorConfigDetail(),
      rupifi: PaymentApplicationModel.AggregatorConfigDetail(),
      simpl: PaymentApplicationModel.AggregatorConfigDetail(),
      stripe: PaymentApplicationModel.AggregatorConfigDetail(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {AttachCardRequest} */
  static AttachCardRequest() {
    return Joi.object({
      card_id: Joi.string().allow("").allow(null).required(),
      name_on_card: Joi.string().allow(""),
      nickname: Joi.string().allow(""),
      refresh: Joi.boolean().allow(null),
    });
  }

  /** @returns {AttachCardsResponse} */
  static AttachCardsResponse() {
    return Joi.object({
      data: Joi.any().required(),
      message: Joi.string().allow(""),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {BalanceDetails} */
  static BalanceDetails() {
    return Joi.object({
      currency: Joi.string().allow("").allow(null),
      formatted_value: Joi.string().allow("").allow(null),
      value: Joi.number().allow(null),
    });
  }

  /** @returns {BankDetailsForOTP} */
  static BankDetailsForOTP() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),
      account_no: Joi.string().allow("").required(),
      bank_name: Joi.string().allow("").required(),
      branch_name: Joi.string().allow("").required(),
      ifsc_code: Joi.string().allow("").required(),
    });
  }

  /** @returns {BeneficiaryModeDetails} */
  static BeneficiaryModeDetails() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),
      account_no: Joi.string().allow("").required(),
      address: Joi.string().allow(""),
      bank_name: Joi.string().allow("").required(),
      branch_name: Joi.string().allow("").required(),
      comment: Joi.string().allow(""),
      email: Joi.string().allow("").required(),
      ifsc_code: Joi.string().allow("").required(),
      mobile: Joi.string().allow("").required(),
      vpa: Joi.string().allow("").allow(null),
      wallet: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {BusinessDetails} */
  static BusinessDetails() {
    return Joi.object({
      address: PaymentApplicationModel.KYCAddress(),
      business_ownership_type: Joi.string().allow("").allow(null),
      business_type: Joi.string().allow("").allow(null),
      entity_type: Joi.string().allow("").allow(null),
      fda: Joi.string().allow("").allow(null),
      fssai: Joi.string().allow("").allow(null),
      gstin: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      pan: Joi.string().allow("").allow(null),
      shop_and_establishment: Joi.any(),
      vintage: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CancelOrResendPaymentLinkRequest} */
  static CancelOrResendPaymentLinkRequest() {
    return Joi.object({
      payment_link_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {CancelPaymentLinkResponse} */
  static CancelPaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {Card} */
  static Card() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").required(),
      card_brand: Joi.string().allow("").allow(null),
      card_brand_image: Joi.string().allow("").allow(null),
      card_fingerprint: Joi.string().allow("").allow(null),
      card_id: Joi.string().allow("").allow(null),
      card_isin: Joi.string().allow("").allow(null),
      card_issuer: Joi.string().allow("").allow(null),
      card_name: Joi.string().allow("").allow(null),
      card_number: Joi.string().allow("").allow(null),
      card_reference: Joi.string().allow("").allow(null),
      card_token: Joi.string().allow("").allow(null),
      card_type: Joi.string().allow("").allow(null),
      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),
      exp_month: Joi.number().allow(null),
      exp_year: Joi.number().allow(null),
      expired: Joi.boolean().allow(null),
      nickname: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CardDetails} */
  static CardDetails() {
    return Joi.object({
      bank: Joi.string().allow("").required(),
      bank_code: Joi.string().allow("").allow(null).required(),
      card_brand: Joi.string().allow("").required(),
      card_exp_month: Joi.string().allow(""),
      card_exp_year: Joi.string().allow(""),
      card_object: Joi.string().allow("").required(),
      card_sub_type: Joi.string().allow("").allow(null).required(),
      card_token: Joi.string().allow(""),
      country: Joi.string().allow("").required(),
      extended_card_type: Joi.string().allow("").required(),
      id: Joi.string().allow("").required(),
      is_domestic_card: Joi.boolean().required(),
      name_on_card: Joi.string().allow(""),
      status: Joi.boolean().required(),
      type: Joi.string().allow("").required(),
      user: Joi.string().allow(""),
    });
  }

  /** @returns {CardDetailsResponse} */
  static CardDetailsResponse() {
    return Joi.object({
      data: PaymentApplicationModel.CardDetails().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {CardPaymentGateway} */
  static CardPaymentGateway() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      api: Joi.string().allow("").allow(null),
      customer_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ChargeCustomerRequest} */
  static ChargeCustomerRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      amount: Joi.number().allow(null).required(),
      order_id: Joi.string().allow("").required(),
      transaction_token: Joi.string().allow("").allow(null),
      verified: Joi.boolean().allow(null),
    });
  }

  /** @returns {ChargeCustomerResponse} */
  static ChargeCustomerResponse() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      cart_id: Joi.string().allow("").allow(null),
      delivery_address_id: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {CheckCreditResponse} */
  static CheckCreditResponse() {
    return Joi.object({
      data: PaymentApplicationModel.CreditDetail().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {CreateOrderUserData} */
  static CreateOrderUserData() {
    return Joi.object({
      aggregator: Joi.string().allow("").allow(null),
      amount: Joi.number().allow(null),
      callback_url: Joi.string().allow("").allow(null),
      contact: Joi.string().allow("").allow(null),
      currency: Joi.string().allow("").allow(null),
      customer_id: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").allow(null),
      merchant_order_id: Joi.string().allow("").allow(null),
      method: Joi.string().allow("").allow(null),
      order_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CreateOrderUserPaymentMethods} */
  static CreateOrderUserPaymentMethods() {
    return Joi.object({
      meta: PaymentApplicationModel.PaymentMethodsMeta().required(),
      mode: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreateOrderUserRequest} */
  static CreateOrderUserRequest() {
    return Joi.object({
      currency: Joi.string().allow("").required(),
      failure_callback_url: Joi.string().allow("").required(),
      meta: Joi.any().allow(null),
      payment_link_id: Joi.string().allow("").required(),
      payment_methods: PaymentApplicationModel.CreateOrderUserPaymentMethods().required(),
      success_callback_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreateOrderUserResponse} */
  static CreateOrderUserResponse() {
    return Joi.object({
      callback_url: Joi.string().allow("").allow(null),
      data: PaymentApplicationModel.CreateOrderUserData(),
      message: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").allow(null),
      payment_confirm_url: Joi.string().allow("").allow(null),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {CreatePaymentLinkMeta} */
  static CreatePaymentLinkMeta() {
    return Joi.object({
      amount: Joi.string().allow("").required(),
      assign_card_id: Joi.string().allow("").allow(null),
      cart_id: Joi.string().allow("").required(),
      checkout_mode: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreatePaymentLinkRequest} */
  static CreatePaymentLinkRequest() {
    return Joi.object({
      amount: Joi.number().required(),
      description: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").required(),
      external_order_id: Joi.string().allow("").required(),
      meta: PaymentApplicationModel.CreatePaymentLinkMeta().required(),
      mobile_number: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreatePaymentLinkResponse} */
  static CreatePaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      payment_link_id: Joi.string().allow("").allow(null),
      payment_link_url: Joi.string().allow("").allow(null),
      polling_timeout: Joi.number().allow(null),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {CreditDetail} */
  static CreditDetail() {
    return Joi.object({
      is_registered: Joi.boolean().required(),
      signup_url: Joi.string().allow("").required(),
      status: Joi.boolean().required(),
    });
  }

  /** @returns {CreditSummary} */
  static CreditSummary() {
    return Joi.object({
      amount_available: PaymentApplicationModel.BalanceDetails(),
      balance: PaymentApplicationModel.BalanceDetails(),
      buyer_status: Joi.string().allow("").allow(null),
      credit_line_id: Joi.string().allow("").allow(null),
      merchant_customer_ref_id: Joi.string().allow("").allow(null),
      status: Joi.string().allow("").allow(null),
      status_message: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CustomerCreditSummaryResponse} */
  static CustomerCreditSummaryResponse() {
    return Joi.object({
      data: PaymentApplicationModel.CreditSummary(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {CustomerOnboardingRequest} */
  static CustomerOnboardingRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      business_info: PaymentApplicationModel.BusinessDetails(),
      device: PaymentApplicationModel.DeviceDetails(),
      marketplace_info: PaymentApplicationModel.MarketplaceInfo(),
      mcc: Joi.string().allow("").allow(null),
      personal_info: PaymentApplicationModel.UserPersonalInfoInDetails().required(),
      source: Joi.string().allow("").required(),
    });
  }

  /** @returns {CustomerOnboardingResponse} */
  static CustomerOnboardingResponse() {
    return Joi.object({
      data: PaymentApplicationModel.OnboardSummary().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {DeleteCardsResponse} */
  static DeleteCardsResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {DeletehCardRequest} */
  static DeletehCardRequest() {
    return Joi.object({
      card_id: Joi.string().allow("").allow(null).required(),
    });
  }

  /** @returns {DeviceDetails} */
  static DeviceDetails() {
    return Joi.object({
      device_make: Joi.string().allow("").allow(null),
      device_model: Joi.string().allow("").allow(null),
      device_type: Joi.string().allow("").allow(null),
      identification_number: Joi.string().allow("").allow(null),
      identifier_type: Joi.string().allow("").allow(null),
      os: Joi.string().allow("").allow(null),
      os_version: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {EpaylaterBannerData} */
  static EpaylaterBannerData() {
    return Joi.object({
      display: Joi.boolean().required(),
      message: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {EpaylaterBannerResponse} */
  static EpaylaterBannerResponse() {
    return Joi.object({
      data: PaymentApplicationModel.EpaylaterBannerData().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ErrorCodeAndDescription} */
  static ErrorCodeAndDescription() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      description: Joi.string().allow("").required(),
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

  /** @returns {ErrorDescription} */
  static ErrorDescription() {
    return Joi.object({
      amount: Joi.number().allow(null),
      cancelled: Joi.boolean().allow(null),
      expired: Joi.boolean().allow(null),
      invalid_id: Joi.boolean().allow(null),
      merchant_name: Joi.string().allow("").allow(null),
      merchant_order_id: Joi.string().allow("").allow(null),
      msg: Joi.string().allow("").allow(null),
      payment_transaction_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      error: Joi.any().allow(null),
      message: Joi.string().allow("").required(),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {GetPaymentLinkResponse} */
  static GetPaymentLinkResponse() {
    return Joi.object({
      amount: Joi.number().allow(null),
      external_order_id: Joi.string().allow("").allow(null),
      merchant_name: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").required(),
      payment_link_current_status: Joi.string().allow("").allow(null),
      payment_link_url: Joi.string().allow("").allow(null),
      polling_timeout: Joi.number().allow(null),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {HttpErrorCodeAndResponse} */
  static HttpErrorCodeAndResponse() {
    return Joi.object({
      error: PaymentApplicationModel.ErrorCodeAndDescription(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {IfscCodeResponse} */
  static IfscCodeResponse() {
    return Joi.object({
      bank_name: Joi.string().allow("").required(),
      branch_name: Joi.string().allow("").required(),
      success: Joi.boolean(),
    });
  }

  /** @returns {IntentApp} */
  static IntentApp() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow("").allow(null),
      logos: Joi.any().allow(null),
      package_name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {IntentAppErrorList} */
  static IntentAppErrorList() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),
      package_name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {KYCAddress} */
  static KYCAddress() {
    return Joi.object({
      addressline1: Joi.string().allow("").required(),
      addressline2: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").required(),
      land_mark: Joi.string().allow("").allow(null),
      ownership_type: Joi.string().allow("").allow(null),
      pincode: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
    });
  }

  /** @returns {LinkStatus} */
  static LinkStatus() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      status: Joi.boolean().required(),
    });
  }

  /** @returns {ListCardsResponse} */
  static ListCardsResponse() {
    return Joi.object({
      data: Joi.array().items(PaymentApplicationModel.Card()),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {MarketplaceInfo} */
  static MarketplaceInfo() {
    return Joi.object({
      date_of_joining: Joi.string().allow("").allow(null),
      membership_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
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

  /** @returns {OnboardSummary} */
  static OnboardSummary() {
    return Joi.object({
      redirect_url: Joi.string().allow("").required(),
      session: Joi.any().required(),
      status: Joi.boolean().required(),
    });
  }

  /** @returns {OrderBeneficiaryDetails} */
  static OrderBeneficiaryDetails() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),
      account_no: Joi.string().allow("").required(),
      address: Joi.string().allow("").required(),
      bank_name: Joi.string().allow("").required(),
      beneficiary_id: Joi.string().allow("").required(),
      branch_name: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      created_on: Joi.string().allow("").required(),
      delights_user_name: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow("").required(),
      email: Joi.string().allow("").required(),
      id: Joi.number().required(),
      ifsc_code: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      mobile: Joi.string().allow(""),
      modified_on: Joi.string().allow("").required(),
      subtitle: Joi.string().allow("").required(),
      title: Joi.string().allow("").required(),
      transfer_mode: Joi.string().allow("").required(),
    });
  }

  /** @returns {OrderBeneficiaryResponse} */
  static OrderBeneficiaryResponse() {
    return Joi.object({
      beneficiaries: Joi.array().items(
        PaymentApplicationModel.OrderBeneficiaryDetails()
      ),
      show_beneficiary_details: Joi.boolean(),
    });
  }

  /** @returns {OutstandingOrderDetailsResponse} */
  static OutstandingOrderDetailsResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),
      message: Joi.string().allow("").allow(null),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PaidOrderDetailsResponse} */
  static PaidOrderDetailsResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),
      message: Joi.string().allow("").allow(null),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PaymentFlow} */
  static PaymentFlow() {
    return Joi.object({
      ajiodhan: Joi.any().allow(null),
      bqr_razorpay: Joi.any().allow(null),
      ccavenue: Joi.any().allow(null),
      epaylater: Joi.any().allow(null),
      fynd: Joi.any().allow(null),
      jiopay: Joi.any().allow(null),
      juspay: Joi.any().allow(null),
      mswipe: Joi.any().allow(null),
      payubiz: Joi.any().allow(null),
      razorpay: Joi.any().allow(null),
      rupifi: Joi.any().allow(null),
      simpl: Joi.any().allow(null),
      stripe: Joi.any().allow(null),
      upi_razorpay: Joi.any().allow(null),
    });
  }

  /** @returns {PaymentInitializationRequest} */
  static PaymentInitializationRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      amount: Joi.number().allow(null).required(),
      contact: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      customer_id: Joi.string().allow("").required(),
      device_id: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").required(),
      merchant_order_id: Joi.string().allow("").required(),
      method: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      razorpay_payment_id: Joi.string().allow("").allow(null),
      timeout: Joi.number().allow(null),
      vpa: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PaymentInitializationResponse} */
  static PaymentInitializationResponse() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      aggregator_order_id: Joi.string().allow(""),
      amount: Joi.number().allow(null),
      bqr_image: Joi.string().allow("").allow(null),
      currency: Joi.string().allow("").allow(null),
      customer_id: Joi.string().allow("").allow(null),
      device_id: Joi.string().allow("").allow(null),
      merchant_order_id: Joi.string().allow("").required(),
      method: Joi.string().allow("").required(),
      polling_url: Joi.string().allow("").required(),
      razorpay_payment_id: Joi.string().allow("").allow(null),
      status: Joi.string().allow(""),
      success: Joi.boolean().required(),
      timeout: Joi.number().allow(null),
      upi_poll_url: Joi.string().allow("").allow(null),
      virtual_id: Joi.string().allow("").allow(null),
      vpa: Joi.string().allow("").allow(null),
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

  /** @returns {PaymentModeList} */
  static PaymentModeList() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").required(),
      card_brand: Joi.string().allow("").allow(null),
      card_brand_image: Joi.string().allow("").allow(null),
      card_fingerprint: Joi.string().allow("").allow(null),
      card_id: Joi.string().allow("").allow(null),
      card_isin: Joi.string().allow("").allow(null),
      card_issuer: Joi.string().allow("").allow(null),
      card_name: Joi.string().allow("").allow(null),
      card_number: Joi.string().allow("").allow(null),
      card_reference: Joi.string().allow("").allow(null),
      card_token: Joi.string().allow("").allow(null),
      card_type: Joi.string().allow("").allow(null),
      cod_limit: Joi.number().allow(null),
      cod_limit_per_order: Joi.number().allow(null),
      code: Joi.string().allow("").allow(null),
      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),
      display_name: Joi.string().allow("").allow(null),
      display_priority: Joi.number().allow(null),
      exp_month: Joi.number().allow(null),
      exp_year: Joi.number().allow(null),
      expired: Joi.boolean().allow(null),
      fynd_vpa: Joi.string().allow("").allow(null),
      intent_app: Joi.array().items(PaymentApplicationModel.IntentApp()),
      intent_app_error_dict_list: Joi.array().items(
        PaymentApplicationModel.IntentAppErrorList()
      ),
      intent_app_error_list: Joi.array().items(Joi.string().allow("")),
      intent_flow: Joi.boolean().allow(null),
      logo_url: Joi.any().allow(null),
      merchant_code: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      nickname: Joi.string().allow("").allow(null),
      remaining_limit: Joi.number().allow(null),
      retry_count: Joi.number().allow(null),
      timeout: Joi.number().allow(null),
    });
  }

  /** @returns {PaymentModeLogo} */
  static PaymentModeLogo() {
    return Joi.object({
      large: Joi.string().allow("").required(),
      small: Joi.string().allow("").required(),
    });
  }

  /** @returns {PaymentModeRouteResponse} */
  static PaymentModeRouteResponse() {
    return Joi.object({
      payment_options: PaymentApplicationModel.PaymentOptionAndFlow().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PaymentOptionAndFlow} */
  static PaymentOptionAndFlow() {
    return Joi.object({
      payment_flows: PaymentApplicationModel.PaymentFlow().required(),
      payment_option: Joi.array()
        .items(PaymentApplicationModel.RootPaymentMode())
        .required(),
    });
  }

  /** @returns {PaymentStatusUpdateRequest} */
  static PaymentStatusUpdateRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      amount: Joi.number().allow(null).required(),
      contact: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      customer_id: Joi.string().allow("").required(),
      device_id: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").required(),
      merchant_order_id: Joi.string().allow("").required(),
      merchant_transaction_id: Joi.string().allow("").required(),
      method: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      vpa: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentStatusUpdateResponse} */
  static PaymentStatusUpdateResponse() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").required(),
      redirect_url: Joi.string().allow("").allow(null),
      retry: Joi.boolean().required(),
      status: Joi.string().allow("").required(),
      success: Joi.boolean().allow(null),
    });
  }

  /** @returns {PollingPaymentLinkResponse} */
  static PollingPaymentLinkResponse() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").allow(null),
      amount: Joi.number().allow(null),
      http_status: Joi.number().allow(null),
      message: Joi.string().allow("").allow(null),
      order_id: Joi.string().allow("").allow(null),
      payment_link_id: Joi.string().allow("").allow(null),
      redirect_url: Joi.string().allow("").allow(null),
      status: Joi.string().allow("").allow(null),
      status_code: Joi.number().allow(null),
      success: Joi.boolean().allow(null),
    });
  }

  /** @returns {RedirectToAggregatorResponse} */
  static RedirectToAggregatorResponse() {
    return Joi.object({
      data: PaymentApplicationModel.RedirectURL().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {RedirectURL} */
  static RedirectURL() {
    return Joi.object({
      signup_url: Joi.string().allow("").required(),
      status: Joi.boolean().required(),
    });
  }

  /** @returns {RefundAccountResponse} */
  static RefundAccountResponse() {
    return Joi.object({
      data: Joi.any(),
      is_verified_flag: Joi.boolean(),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {renderHTMLRequest} */
  static renderHTMLRequest() {
    return Joi.object({
      base64_html: Joi.string().allow("").required(),
      returntype: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {renderHTMLResponse} */
  static renderHTMLResponse() {
    return Joi.object({
      html: Joi.string().allow("").required(),
    });
  }

  /** @returns {ResendOrCancelPaymentRequest} */
  static ResendOrCancelPaymentRequest() {
    return Joi.object({
      device_id: Joi.string().allow("").allow(null),
      order_id: Joi.string().allow("").required(),
      request_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ResendOrCancelPaymentResponse} */
  static ResendOrCancelPaymentResponse() {
    return Joi.object({
      data: PaymentApplicationModel.LinkStatus().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ResendPaymentLinkResponse} */
  static ResendPaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      polling_timeout: Joi.number().allow(null),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {RootPaymentMode} */
  static RootPaymentMode() {
    return Joi.object({
      add_card_enabled: Joi.boolean().allow(null),
      aggregator_name: Joi.string().allow("").allow(null),
      anonymous_enable: Joi.boolean().allow(null),
      display_name: Joi.string().allow("").required(),
      display_priority: Joi.number().required(),
      is_pay_by_card_pl: Joi.boolean().allow(null),
      list: Joi.array().items(PaymentApplicationModel.PaymentModeList()),
      name: Joi.string().allow("").required(),
      save_card: Joi.boolean().allow(null),
    });
  }

  /** @returns {RupifiBannerData} */
  static RupifiBannerData() {
    return Joi.object({
      kyc_url: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {RupifiBannerResponse} */
  static RupifiBannerResponse() {
    return Joi.object({
      data: PaymentApplicationModel.RupifiBannerData().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {SetDefaultBeneficiaryRequest} */
  static SetDefaultBeneficiaryRequest() {
    return Joi.object({
      beneficiary_id: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {SetDefaultBeneficiaryResponse} */
  static SetDefaultBeneficiaryResponse() {
    return Joi.object({
      is_beneficiary_set: Joi.boolean().required(),
      success: Joi.boolean(),
    });
  }

  /** @returns {TransferItemsDetails} */
  static TransferItemsDetails() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      id: Joi.number().required(),
      logo_large: Joi.string().allow("").required(),
      logo_small: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {TransferModeDetails} */
  static TransferModeDetails() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),
      items: Joi.array().items(PaymentApplicationModel.TransferItemsDetails()),
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

  /** @returns {UserPersonalInfoInDetails} */
  static UserPersonalInfoInDetails() {
    return Joi.object({
      address_as_per_id: PaymentApplicationModel.KYCAddress().required(),
      dob: Joi.string().allow("").allow(null).required(),
      driving_license: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").allow(null),
      email_verified: Joi.boolean().required(),
      fathers_name: Joi.string().allow("").allow(null),
      first_name: Joi.string().allow("").required(),
      gender: Joi.string().allow("").allow(null),
      last_name: Joi.string().allow("").allow(null),
      middle_name: Joi.string().allow("").allow(null),
      mobile_verified: Joi.boolean().required(),
      mothers_name: Joi.string().allow("").allow(null),
      pan: Joi.string().allow("").allow(null),
      passport: Joi.string().allow("").allow(null),
      phone: Joi.string().allow("").required(),
      voter_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ValidateCustomerRequest} */
  static ValidateCustomerRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      billing_address: Joi.any(),
      delivery_address: Joi.any(),
      merchant_params: Joi.any(),
      order_items: Joi.array().items(Joi.any()),
      payload: Joi.string().allow("").allow(null),
      phone_number: Joi.string().allow("").required(),
      transaction_amount_in_paise: Joi.number().required(),
    });
  }

  /** @returns {ValidateCustomerResponse} */
  static ValidateCustomerResponse() {
    return Joi.object({
      data: Joi.any().required(),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ValidateUPI} */
  static ValidateUPI() {
    return Joi.object({
      customer_name: Joi.string().allow("").required(),
      is_valid: Joi.boolean().required(),
      status: Joi.string().allow("").required(),
      upi_vpa: Joi.string().allow("").required(),
    });
  }

  /** @returns {ValidateVPARequest} */
  static ValidateVPARequest() {
    return Joi.object({
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
      is_verified_flag: Joi.string().allow("").required(),
      request_id: Joi.string().allow("").required(),
      success: Joi.boolean(),
    });
  }

  /** @returns {WrongOtpError} */
  static WrongOtpError() {
    return Joi.object({
      description: Joi.string().allow("").required(),
      is_verified_flag: Joi.boolean().required(),
      success: Joi.string().allow("").required(),
    });
  }
}
module.exports = PaymentApplicationModel;
