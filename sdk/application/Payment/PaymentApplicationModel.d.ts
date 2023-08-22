export = PaymentApplicationModel;
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
 * @property {string} [activation_url] - Url for activation
 * @property {BalanceDetails} [amount_available] - Credit summary of user.
 * @property {BalanceDetails} [balance] - Credit summary of user.
 * @property {string} [buyer_status] - Status from Credit aggregator's end
 * @property {string} [credit_line_id] - ID at Credit aggregator's end
 * @property {BalanceDetails} [due_amount] - Amount that is due for repayment
 * @property {string} [due_date] - Due date for repayment
 * @property {boolean} [is_eligible_for_txn] - Eligiblity flag to complete transaction
 * @property {BalanceDetails} [limit] - User's credit limit
 * @property {string} [merchant_customer_ref_id] - Unique aggregator customer id
 * @property {string} [repayment_url] - Url for repayment
 * @property {string} [soa_url] - Statement of accounts. Show payment history.
 * @property {string} [status] - Customer Credit status
 * @property {string} [status_message] - Message to customer
 * @property {BalanceDetails} [total_due_amount] - Total due amount
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
 * @property {UserPersonalInfoInDetails} [personal_info] - Credit summary of user.
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
 * @property {string} [activation_url] - Url for activation
 * @property {boolean} [is_eligible_for_txn] - Whether is eligible for transaction
 * @property {string} [merchant_customer_ref_id] - Rupifi customer ID
 * @property {string} [redirect_url] - URL to which the user may redirect.
 * @property {Object} [session] - User Session
 * @property {boolean} status - Transaction status
 * @property {string} [status_remark] - Decription of status
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
declare class PaymentApplicationModel {
}
declare namespace PaymentApplicationModel {
    export { ActiveCardPaymentGatewayResponse, AddBeneficiaryDetailsOTPRequest, AddBeneficiaryDetailsRequest, AddBeneficiaryViaOtpVerificationRequest, AddBeneficiaryViaOtpVerificationResponse, AggregatorConfigDetail, AggregatorRoute, AggregatorsConfigDetailResponse, AttachCardRequest, AttachCardsResponse, BalanceDetails, BankDetailsForOTP, BeneficiaryModeDetails, BusinessDetails, CancelOrResendPaymentLinkRequest, CancelPaymentLinkResponse, Card, CardDetails, CardDetailsResponse, CardPaymentGateway, ChargeCustomerRequest, ChargeCustomerResponse, CheckCreditResponse, CreateOrderUserData, CreateOrderUserPaymentMethods, CreateOrderUserRequest, CreateOrderUserResponse, CreatePaymentLinkMeta, CreatePaymentLinkRequest, CreatePaymentLinkResponse, CreditDetail, CreditSummary, CustomerCreditSummaryResponse, CustomerOnboardingRequest, CustomerOnboardingResponse, DeleteCardsResponse, DeletehCardRequest, DeviceDetails, EpaylaterBannerData, EpaylaterBannerResponse, ErrorCodeAndDescription, ErrorCodeDescription, ErrorDescription, ErrorResponse, GetPaymentLinkResponse, HttpErrorCodeAndResponse, IfscCodeResponse, IntentApp, IntentAppErrorList, KYCAddress, LinkStatus, ListCardsResponse, MarketplaceInfo, NotFoundResourceError, OnboardSummary, OrderBeneficiaryDetails, OrderBeneficiaryResponse, OutstandingOrderDetailsResponse, PaidOrderDetailsResponse, PaymentFlow, PaymentInitializationRequest, PaymentInitializationResponse, PaymentMethodsMeta, PaymentModeList, PaymentModeLogo, PaymentModeRouteResponse, PaymentOptionAndFlow, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, PollingPaymentLinkResponse, RedirectToAggregatorResponse, RedirectURL, RefundAccountResponse, renderHTMLRequest, renderHTMLResponse, ResendOrCancelPaymentRequest, ResendOrCancelPaymentResponse, ResendPaymentLinkResponse, RootPaymentMode, RupifiBannerData, RupifiBannerResponse, SetDefaultBeneficiaryRequest, SetDefaultBeneficiaryResponse, TransferItemsDetails, TransferModeDetails, TransferModeResponse, UpdateRefundTransferModeRequest, UpdateRefundTransferModeResponse, UserPersonalInfoInDetails, ValidateCustomerRequest, ValidateCustomerResponse, ValidateUPI, ValidateVPARequest, ValidateVPAResponse, WalletOtpRequest, WalletOtpResponse, WrongOtpError };
}
/** @returns {ActiveCardPaymentGatewayResponse} */
declare function ActiveCardPaymentGatewayResponse(): ActiveCardPaymentGatewayResponse;
type ActiveCardPaymentGatewayResponse = {
    /**
     * - Card's payment gateway with customer id.
     */
    cards: CardPaymentGateway;
    /**
     * - Human readable message.
     */
    message: string;
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {AddBeneficiaryDetailsOTPRequest} */
declare function AddBeneficiaryDetailsOTPRequest(): AddBeneficiaryDetailsOTPRequest;
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
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
     * - Beneficiary bank details
     */
    details: BeneficiaryModeDetails;
    /**
     * - Merchant Order Id
     */
    order_id: string;
    otp?: string;
    request_id?: string;
    /**
     * - Shipment Id of the respective Merchant Order Id
     */
    shipment_id: string;
    /**
     * - Transfer Mode of the Beneficiary to be added
     */
    transfer_mode: string;
};
/** @returns {AddBeneficiaryViaOtpVerificationRequest} */
declare function AddBeneficiaryViaOtpVerificationRequest(): AddBeneficiaryViaOtpVerificationRequest;
type AddBeneficiaryViaOtpVerificationRequest = {
    /**
     * - Hash key of the beneficiary Id
     */
    hash_key: string;
    /**
     * - Otp sent to the given Mobile No
     */
    otp: string;
    /**
     * - Request Id sent in
     */
    request_id: string;
};
/** @returns {AddBeneficiaryViaOtpVerificationResponse} */
declare function AddBeneficiaryViaOtpVerificationResponse(): AddBeneficiaryViaOtpVerificationResponse;
type AddBeneficiaryViaOtpVerificationResponse = {
    /**
     * - Aggregator Response of beneficicary
     */
    message: string;
    /**
     * - Response is successful or not
     */
    success?: boolean;
};
/** @returns {AggregatorConfigDetail} */
declare function AggregatorConfigDetail(): AggregatorConfigDetail;
type AggregatorConfigDetail = {
    /**
     * - Payment gateway api endpoint
     */
    api?: string;
    /**
     * - Fynd or self payment gateway
     */
    config_type: string;
    /**
     * - Payment gateway api key
     */
    key: string;
    /**
     * - Unique merchant id
     */
    merchant_id?: string;
    /**
     * - Unique merchant key
     */
    merchant_key?: string;
    /**
     * - Masked pin
     */
    pin?: string;
    /**
     * - SDK
     */
    sdk?: boolean;
    /**
     * - Masked payment gateway api secret
     */
    secret: string;
    /**
     * - Registered User id
     */
    user_id?: string;
    /**
     * - Payment gateway verify payment api endpoint
     */
    verify_api?: string;
};
/** @returns {AggregatorRoute} */
declare function AggregatorRoute(): AggregatorRoute;
type AggregatorRoute = {
    /**
     * - Api_link
     */
    api_link?: string;
    /**
     * - Data
     */
    data?: any;
    /**
     * - Payment_flow
     */
    payment_flow?: string;
    /**
     * - Payment_flow_data
     */
    payment_flow_data?: string;
};
/** @returns {AggregatorsConfigDetailResponse} */
declare function AggregatorsConfigDetailResponse(): AggregatorsConfigDetailResponse;
type AggregatorsConfigDetailResponse = {
    ccavenue?: AggregatorConfigDetail;
    /**
     * - Environment i.e Live or Test
     */
    env: string;
    juspay?: AggregatorConfigDetail;
    mswipe?: AggregatorConfigDetail;
    payumoney?: AggregatorConfigDetail;
    razorpay?: AggregatorConfigDetail;
    rupifi?: AggregatorConfigDetail;
    simpl?: AggregatorConfigDetail;
    stripe?: AggregatorConfigDetail;
    success: boolean;
};
/** @returns {AttachCardRequest} */
declare function AttachCardRequest(): AttachCardRequest;
type AttachCardRequest = {
    /**
     * - Card token of payment gateway.
     */
    card_id: string;
    name_on_card?: string;
    nickname?: string;
    /**
     * - Refresh cache flag.
     */
    refresh?: boolean;
};
/** @returns {AttachCardsResponse} */
declare function AttachCardsResponse(): AttachCardsResponse;
type AttachCardsResponse = {
    /**
     * - List of cards of customer.
     */
    data: any;
    /**
     * - Human readable message.
     */
    message?: string;
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {BalanceDetails} */
declare function BalanceDetails(): BalanceDetails;
type BalanceDetails = {
    /**
     * - Currency Code
     */
    currency?: string;
    /**
     * - Formated Amount with currency symbol
     */
    formatted_value?: string;
    /**
     * - Payment amount
     */
    value?: number;
};
/** @returns {BankDetailsForOTP} */
declare function BankDetailsForOTP(): BankDetailsForOTP;
type BankDetailsForOTP = {
    account_holder: string;
    account_no: string;
    bank_name: string;
    branch_name: string;
    ifsc_code: string;
};
/** @returns {BeneficiaryModeDetails} */
declare function BeneficiaryModeDetails(): BeneficiaryModeDetails;
type BeneficiaryModeDetails = {
    /**
     * - Name of the Account Holder
     */
    account_holder: string;
    /**
     * - Account NUmber of the Account Holder
     */
    account_no: string;
    /**
     * - Address of the User
     */
    address?: string;
    /**
     * - Bank Name of the Account
     */
    bank_name: string;
    /**
     * - Branch Name of the Account
     */
    branch_name: string;
    /**
     * - Remarks added by The user
     */
    comment?: string;
    /**
     * - Email of the Account Holder
     */
    email: string;
    /**
     * - Ifsc Code of the Account
     */
    ifsc_code: string;
    /**
     * - Moblie Number of the User
     */
    mobile: string;
    vpa?: string;
    wallet?: string;
};
/** @returns {BusinessDetails} */
declare function BusinessDetails(): BusinessDetails;
type BusinessDetails = {
    /**
     * - Address details
     */
    address?: KYCAddress;
    /**
     * - Business Ownershipp type(e.g Rented)
     */
    business_ownership_type?: string;
    /**
     * - Business Type
     */
    business_type?: string;
    /**
     * - Busineess Entity Type
     */
    entity_type?: string;
    /**
     * - Driver License
     */
    fda?: string;
    /**
     * - FDA License Number
     */
    fssai?: string;
    /**
     * - GSTIN Number
     */
    gstin?: string;
    /**
     * - Business Name
     */
    name?: string;
    /**
     * - Pan Number
     */
    pan?: string;
    /**
     * - Shop Establishment
     */
    shop_and_establishment?: any;
    /**
     * - Vintage
     */
    vintage?: string;
};
/** @returns {CancelOrResendPaymentLinkRequest} */
declare function CancelOrResendPaymentLinkRequest(): CancelOrResendPaymentLinkRequest;
type CancelOrResendPaymentLinkRequest = {
    /**
     * - Unique id of payment link
     */
    payment_link_id: string;
};
/** @returns {CancelPaymentLinkResponse} */
declare function CancelPaymentLinkResponse(): CancelPaymentLinkResponse;
type CancelPaymentLinkResponse = {
    /**
     * - Message
     */
    message: string;
    /**
     * - HTTP status code
     */
    status_code: number;
    /**
     * - Successful or failure
     */
    success: boolean;
};
/** @returns {Card} */
declare function Card(): Card;
type Card = {
    /**
     * - Aggregator_name
     */
    aggregator_name: string;
    /**
     * - Card_brand
     */
    card_brand?: string;
    /**
     * - Card_brand_image
     */
    card_brand_image?: string;
    /**
     * - Card_fingerprint
     */
    card_fingerprint?: string;
    /**
     * - Card_id
     */
    card_id?: string;
    /**
     * - Card_isin
     */
    card_isin?: string;
    /**
     * - Card_issuer
     */
    card_issuer?: string;
    /**
     * - Card_name
     */
    card_name?: string;
    /**
     * - Card_number
     */
    card_number?: string;
    /**
     * - Card_reference
     */
    card_reference?: string;
    /**
     * - Card_token
     */
    card_token?: string;
    /**
     * - Card_type
     */
    card_type?: string;
    /**
     * - If card is
     * tokenised or not
     */
    compliant_with_tokenisation_guidelines?: boolean;
    /**
     * - Exp_month
     */
    exp_month?: number;
    /**
     * - Exp_year
     */
    exp_year?: number;
    /**
     * - Expired
     */
    expired?: boolean;
    /**
     * - Nickname
     */
    nickname?: string;
};
/** @returns {CardDetails} */
declare function CardDetails(): CardDetails;
type CardDetails = {
    /**
     * - Bank name
     */
    bank: string;
    /**
     * - Bank Code
     */
    bank_code: string;
    /**
     * - Card brand like VISA/RUPAY
     */
    card_brand: string;
    /**
     * - Card Expire Month
     */
    card_exp_month?: string;
    /**
     * - Card Expire Year
     */
    card_exp_year?: string;
    /**
     * - Card bin or Card refrence
     */
    card_object: string;
    /**
     * - Card Sub type
     */
    card_sub_type: string;
    /**
     * - Card Token
     */
    card_token?: string;
    /**
     * - Country Name
     */
    country: string;
    /**
     * - Extended Card Type
     */
    extended_card_type: string;
    /**
     * - Id
     */
    id: string;
    /**
     * - Is card domestic or international
     */
    is_domestic_card: boolean;
    /**
     * - Name on Card
     */
    name_on_card?: string;
    /**
     * - Status
     */
    status: boolean;
    /**
     * - Card Type Credit/Debit
     */
    type: string;
    /**
     * - Customer/User ID
     */
    user?: string;
};
/** @returns {CardDetailsResponse} */
declare function CardDetailsResponse(): CardDetailsResponse;
type CardDetailsResponse = {
    /**
     * - Saved Card Details
     */
    data: CardDetails;
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {CardPaymentGateway} */
declare function CardPaymentGateway(): CardPaymentGateway;
type CardPaymentGateway = {
    /**
     * - Payment gateway name.
     */
    aggregator: string;
    /**
     * - Payment gateway CARD api endpoint
     */
    api?: string;
    /**
     * - Payment gateway customer id.
     */
    customer_id?: string;
};
/** @returns {ChargeCustomerRequest} */
declare function ChargeCustomerRequest(): ChargeCustomerRequest;
type ChargeCustomerRequest = {
    /**
     * - Payment gateway name i.e Simpl, Mswipe
     */
    aggregator: string;
    /**
     * - Chargable amount of order.
     */
    amount: number;
    /**
     * - Unique order id.
     */
    order_id: string;
    /**
     * - Transaction token of payment gateway.
     */
    transaction_token?: string;
    /**
     * - Already Verified flag from payment gateway i.e Mswipe
     */
    verified?: boolean;
};
/** @returns {ChargeCustomerResponse} */
declare function ChargeCustomerResponse(): ChargeCustomerResponse;
type ChargeCustomerResponse = {
    /**
     * - Payment gateway name i.e Simpl, Mswipe
     */
    aggregator: string;
    /**
     * - Cart id of customer
     */
    cart_id?: string;
    /**
     * - Delivery adddress id of customer
     */
    delivery_address_id?: string;
    /**
     * - Human readable message.
     */
    message: string;
    /**
     * - Unique order id.
     */
    order_id: string;
    /**
     * - Status of charged payment.
     */
    status: string;
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {CheckCreditResponse} */
declare function CheckCreditResponse(): CheckCreditResponse;
type CheckCreditResponse = {
    /**
     * - Credit summary of user.
     */
    data: CreditDetail;
    /**
     * - Operation is successful or not.
     */
    success: boolean;
};
/** @returns {CreateOrderUserData} */
declare function CreateOrderUserData(): CreateOrderUserData;
type CreateOrderUserData = {
    /**
     * - Aggregator name
     */
    aggregator?: string;
    /**
     * - Amount
     */
    amount?: number;
    /**
     * - Callback url for aggregator
     */
    callback_url?: string;
    /**
     * - Mobile number
     */
    contact?: string;
    /**
     * - Currency
     */
    currency?: string;
    /**
     * - Aggregator customer id
     */
    customer_id?: string;
    /**
     * - Email
     */
    email?: string;
    /**
     * - Merchant order id
     */
    merchant_order_id?: string;
    /**
     * - Method
     */
    method?: string;
    /**
     * - Aggregator order id
     */
    order_id?: string;
};
/** @returns {CreateOrderUserPaymentMethods} */
declare function CreateOrderUserPaymentMethods(): CreateOrderUserPaymentMethods;
type CreateOrderUserPaymentMethods = {
    /**
     * - Meta
     */
    meta: PaymentMethodsMeta;
    /**
     * - Payment mode
     */
    mode: string;
    /**
     * - Payment mode name
     */
    name: string;
};
/** @returns {CreateOrderUserRequest} */
declare function CreateOrderUserRequest(): CreateOrderUserRequest;
type CreateOrderUserRequest = {
    /**
     * - Currency
     */
    currency: string;
    /**
     * - Failure page url
     */
    failure_callback_url: string;
    /**
     * - Meta
     */
    meta?: any;
    /**
     * - Unique id of payment link
     */
    payment_link_id: string;
    /**
     * - Payment method details
     */
    payment_methods: CreateOrderUserPaymentMethods;
    /**
     * - Success page url
     */
    success_callback_url: string;
};
/** @returns {CreateOrderUserResponse} */
declare function CreateOrderUserResponse(): CreateOrderUserResponse;
type CreateOrderUserResponse = {
    /**
     * - Callback url for aggregator
     */
    callback_url?: string;
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
     * - Payment confirm url for aggregator
     */
    payment_confirm_url?: string;
    /**
     * - HTTP status code
     */
    status_code: number;
    /**
     * - Successful or failure
     */
    success: boolean;
};
/** @returns {CreatePaymentLinkMeta} */
declare function CreatePaymentLinkMeta(): CreatePaymentLinkMeta;
type CreatePaymentLinkMeta = {
    amount: string;
    assign_card_id?: string;
    cart_id: string;
    checkout_mode: string;
    pincode: string;
};
/** @returns {CreatePaymentLinkRequest} */
declare function CreatePaymentLinkRequest(): CreatePaymentLinkRequest;
type CreatePaymentLinkRequest = {
    /**
     * - Total value of order
     */
    amount: number;
    /**
     * - Merchant order id
     */
    description?: string;
    /**
     * - Email to which the payment link is to be sent
     */
    email: string;
    /**
     * - Merchant order id
     */
    external_order_id: string;
    /**
     * - Meta
     */
    meta: CreatePaymentLinkMeta;
    /**
     * - Mobile number to which the payment link is
     * to be sent
     */
    mobile_number: string;
};
/** @returns {CreatePaymentLinkResponse} */
declare function CreatePaymentLinkResponse(): CreatePaymentLinkResponse;
type CreatePaymentLinkResponse = {
    /**
     * - Message
     */
    message: string;
    /**
     * - Unique id of payment link
     */
    payment_link_id?: string;
    /**
     * - Url of payment link
     */
    payment_link_url?: string;
    /**
     * - Polling request timeout
     */
    polling_timeout?: number;
    /**
     * - HTTP status code
     */
    status_code: number;
    /**
     * - Successful or failure
     */
    success: boolean;
};
/** @returns {CreditDetail} */
declare function CreditDetail(): CreditDetail;
type CreditDetail = {
    /**
     * - User is registered with aggregator or not.
     */
    is_registered: boolean;
    /**
     * - URL to which the user may redirect.
     */
    signup_url: string;
    /**
     * - Operation is successful or not.
     */
    status: boolean;
};
/** @returns {CreditSummary} */
declare function CreditSummary(): CreditSummary;
type CreditSummary = {
    /**
     * - Url for activation
     */
    activation_url?: string;
    /**
     * - Credit summary of user.
     */
    amount_available?: BalanceDetails;
    /**
     * - Credit summary of user.
     */
    balance?: BalanceDetails;
    /**
     * - Status from Credit aggregator's end
     */
    buyer_status?: string;
    /**
     * - ID at Credit aggregator's end
     */
    credit_line_id?: string;
    /**
     * - Amount that is due for repayment
     */
    due_amount?: BalanceDetails;
    /**
     * - Due date for repayment
     */
    due_date?: string;
    /**
     * - Eligiblity flag to complete transaction
     */
    is_eligible_for_txn?: boolean;
    /**
     * - User's credit limit
     */
    limit?: BalanceDetails;
    /**
     * - Unique aggregator customer id
     */
    merchant_customer_ref_id?: string;
    /**
     * - Url for repayment
     */
    repayment_url?: string;
    /**
     * - Statement of accounts. Show payment history.
     */
    soa_url?: string;
    /**
     * - Customer Credit status
     */
    status?: string;
    /**
     * - Message to customer
     */
    status_message?: string;
    /**
     * - Total due amount
     */
    total_due_amount?: BalanceDetails;
};
/** @returns {CustomerCreditSummaryResponse} */
declare function CustomerCreditSummaryResponse(): CustomerCreditSummaryResponse;
type CustomerCreditSummaryResponse = {
    /**
     * - Credit summary of user.
     */
    data?: CreditSummary;
    /**
     * - Payment confirmation updated or not.
     */
    success: boolean;
};
/** @returns {CustomerOnboardingRequest} */
declare function CustomerOnboardingRequest(): CustomerOnboardingRequest;
type CustomerOnboardingRequest = {
    /**
     * - Aggregator Name
     */
    aggregator: string;
    /**
     * - Business summary.
     */
    business_info?: BusinessDetails;
    /**
     * - Device Details.
     */
    device?: DeviceDetails;
    /**
     * - Market Place info.
     */
    marketplace_info?: MarketplaceInfo;
    /**
     * - Mcc
     */
    mcc?: string;
    /**
     * - Credit summary of user.
     */
    personal_info?: UserPersonalInfoInDetails;
    /**
     * - CallbackURL
     */
    source: string;
};
/** @returns {CustomerOnboardingResponse} */
declare function CustomerOnboardingResponse(): CustomerOnboardingResponse;
type CustomerOnboardingResponse = {
    /**
     * - Redirect URL.
     */
    data: OnboardSummary;
    /**
     * - Status updated or not.
     */
    success: boolean;
};
/** @returns {DeleteCardsResponse} */
declare function DeleteCardsResponse(): DeleteCardsResponse;
type DeleteCardsResponse = {
    /**
     * - Human readable message.
     */
    message?: string;
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {DeletehCardRequest} */
declare function DeletehCardRequest(): DeletehCardRequest;
type DeletehCardRequest = {
    /**
     * - Card token of payment gateway.
     */
    card_id: string;
};
/** @returns {DeviceDetails} */
declare function DeviceDetails(): DeviceDetails;
type DeviceDetails = {
    /**
     * - Device maker
     */
    device_make?: string;
    /**
     * - Device Model
     */
    device_model?: string;
    /**
     * - Device Type(E.g. Mobile)
     */
    device_type?: string;
    /**
     * - IP
     */
    identification_number?: string;
    /**
     * - Static value = ip
     */
    identifier_type?: string;
    /**
     * - OS Name
     */
    os?: string;
    /**
     * - OS Version
     */
    os_version?: string;
};
/** @returns {EpaylaterBannerData} */
declare function EpaylaterBannerData(): EpaylaterBannerData;
type EpaylaterBannerData = {
    /**
     * - Need to display banner or not
     */
    display: boolean;
    /**
     * - EPayLater message
     */
    message?: string;
    /**
     * - Epaylater KYC status
     */
    status?: string;
};
/** @returns {EpaylaterBannerResponse} */
declare function EpaylaterBannerResponse(): EpaylaterBannerResponse;
type EpaylaterBannerResponse = {
    /**
     * - Epaylater KYC banner details.
     */
    data: EpaylaterBannerData;
    /**
     * - Successful or not.
     */
    success: boolean;
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
/** @returns {ErrorDescription} */
declare function ErrorDescription(): ErrorDescription;
type ErrorDescription = {
    /**
     * - Amount paid
     */
    amount?: number;
    /**
     * - Payment link is cancelled or not
     */
    cancelled?: boolean;
    /**
     * - Payment link expired or not
     */
    expired?: boolean;
    /**
     * - Payment link id is valid or not
     */
    invalid_id?: boolean;
    /**
     * - Name of merchant that created payment link
     */
    merchant_name?: string;
    /**
     * - Order id
     */
    merchant_order_id?: string;
    /**
     * - Message
     */
    msg?: string;
    /**
     * - Payment transaction id
     */
    payment_transaction_id?: string;
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    error?: any;
    /**
     * - Message
     */
    message: string;
    /**
     * - HTTP status code
     */
    status_code: number;
    /**
     * - Successful or failure
     */
    success: boolean;
};
/** @returns {GetPaymentLinkResponse} */
declare function GetPaymentLinkResponse(): GetPaymentLinkResponse;
type GetPaymentLinkResponse = {
    /**
     * - Total value of order
     */
    amount?: number;
    /**
     * - Merchant order id
     */
    external_order_id?: string;
    /**
     * - Merchant name
     */
    merchant_name?: string;
    /**
     * - Message
     */
    message: string;
    /**
     * - Status of payment link
     */
    payment_link_current_status?: string;
    /**
     * - Url of payment link
     */
    payment_link_url?: string;
    /**
     * - Polling request timeout
     */
    polling_timeout?: number;
    /**
     * - HTTP status code
     */
    status_code: number;
    /**
     * - Successful or failure
     */
    success: boolean;
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
/** @returns {IfscCodeResponse} */
declare function IfscCodeResponse(): IfscCodeResponse;
type IfscCodeResponse = {
    /**
     * - Bank Name Of Account
     */
    bank_name: string;
    /**
     * - Branch Name Of Account
     */
    branch_name: string;
    /**
     * - Response is successful or not
     */
    success?: boolean;
};
/** @returns {IntentApp} */
declare function IntentApp(): IntentApp;
type IntentApp = {
    /**
     * - Code
     */
    code?: string;
    /**
     * - Display_name
     */
    display_name?: string;
    /**
     * - Logos
     */
    logos?: any;
    /**
     * - Package_name
     */
    package_name?: string;
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
/** @returns {KYCAddress} */
declare function KYCAddress(): KYCAddress;
type KYCAddress = {
    /**
     * - Address Line 1
     */
    addressline1: string;
    /**
     * - Address Line 2
     */
    addressline2?: string;
    /**
     * - City
     */
    city: string;
    /**
     * - Land Mark
     */
    land_mark?: string;
    /**
     * - Address Owner Type
     */
    ownership_type?: string;
    /**
     * - Pincode
     */
    pincode: string;
    /**
     * - State
     */
    state: string;
};
/** @returns {LinkStatus} */
declare function LinkStatus(): LinkStatus;
type LinkStatus = {
    /**
     * - Message
     */
    message: string;
    /**
     * - Link action status
     */
    status: boolean;
};
/** @returns {ListCardsResponse} */
declare function ListCardsResponse(): ListCardsResponse;
type ListCardsResponse = {
    /**
     * - List of cards of customer.
     */
    data?: Card[];
    /**
     * - Human readable message.
     */
    message: string;
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {MarketplaceInfo} */
declare function MarketplaceInfo(): MarketplaceInfo;
type MarketplaceInfo = {
    /**
     * - Date of joining
     */
    date_of_joining?: string;
    /**
     * - Merchant id
     */
    membership_id: string;
    /**
     * - Name of store
     */
    name: string;
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
/** @returns {OnboardSummary} */
declare function OnboardSummary(): OnboardSummary;
type OnboardSummary = {
    /**
     * - Url for activation
     */
    activation_url?: string;
    /**
     * - Whether is eligible for transaction
     */
    is_eligible_for_txn?: boolean;
    /**
     * - Rupifi customer ID
     */
    merchant_customer_ref_id?: string;
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
};
/** @returns {OrderBeneficiaryDetails} */
declare function OrderBeneficiaryDetails(): OrderBeneficiaryDetails;
type OrderBeneficiaryDetails = {
    /**
     * - Account Holder Name
     */
    account_holder: string;
    /**
     * - Account Number
     */
    account_no: string;
    /**
     * - Address of User
     */
    address: string;
    /**
     * - Bank Name Of Account
     */
    bank_name: string;
    /**
     * - Benenficiary Id
     */
    beneficiary_id: string;
    /**
     * - Branch Name Of Account
     */
    branch_name?: string;
    /**
     * - Remarks
     */
    comment?: string;
    /**
     * - Creation Date of Beneficiary
     */
    created_on: string;
    /**
     * - User Id Who filled the Beneficiary
     */
    delights_user_name?: string;
    /**
     * - Display Name Of Account
     */
    display_name: string;
    /**
     * - EMail of User
     */
    email: string;
    /**
     * -
     */
    id: number;
    /**
     * - Ifsc Code Of Account
     */
    ifsc_code: string;
    /**
     * - Boolean Flag whether Beneficiary set or not
     */
    is_active: boolean;
    /**
     * - MObile no of User
     */
    mobile?: string;
    /**
     * - MOdification Date of Beneficiary
     */
    modified_on: string;
    /**
     * - SHort Title Of Account
     */
    subtitle: string;
    /**
     * - Title Of Account
     */
    title: string;
    /**
     * - Transfer Mode Of Account
     */
    transfer_mode: string;
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
};
/** @returns {OutstandingOrderDetailsResponse} */
declare function OutstandingOrderDetailsResponse(): OutstandingOrderDetailsResponse;
type OutstandingOrderDetailsResponse = {
    /**
     * - Dict containing the outstanding order details
     */
    data?: any[];
    /**
     * - Message
     */
    message?: string;
    /**
     * - HTTP Status code
     */
    status_code: number;
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {PaidOrderDetailsResponse} */
declare function PaidOrderDetailsResponse(): PaidOrderDetailsResponse;
type PaidOrderDetailsResponse = {
    /**
     * - Dict containing the paid order details
     */
    data?: any[];
    /**
     * - Message
     */
    message?: string;
    /**
     * - HTTP Status code
     */
    status_code: number;
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {PaymentFlow} */
declare function PaymentFlow(): PaymentFlow;
type PaymentFlow = {
    /**
     * - Ajiodhan
     */
    ajiodhan?: any;
    /**
     * - BQR_Razorpay
     */
    bqr_razorpay?: any;
    /**
     * - Ccavenue
     */
    ccavenue?: any;
    /**
     * - Epaylater
     */
    epaylater?: any;
    /**
     * - Fynd
     */
    fynd?: any;
    /**
     * - Jiopay
     */
    jiopay?: any;
    /**
     * - Juspay
     */
    juspay?: any;
    /**
     * - Mswipe
     */
    mswipe?: any;
    /**
     * - Payubiz
     */
    payubiz?: any;
    /**
     * - Razorpay
     */
    razorpay?: any;
    /**
     * - Rupifi
     */
    rupifi?: any;
    /**
     * - Simpl
     */
    simpl?: any;
    /**
     * - Stripe
     */
    stripe?: any;
    /**
     * - UPI_Razorpay
     */
    upi_razorpay?: any;
};
/** @returns {PaymentInitializationRequest} */
declare function PaymentInitializationRequest(): PaymentInitializationRequest;
type PaymentInitializationRequest = {
    /**
     * - Payment gateway name
     */
    aggregator: string;
    /**
     * - Payable amount.
     */
    amount: number;
    /**
     * - Customer valid mobile number
     */
    contact: string;
    /**
     * - Currency code.
     */
    currency: string;
    /**
     * - Payment gateway customer id.
     */
    customer_id: string;
    /**
     * - EDC machine Unique Identifier
     */
    device_id?: string;
    /**
     * - Customer valid email
     */
    email: string;
    /**
     * - Unique fynd order id
     */
    merchant_order_id: string;
    /**
     * - Payment method
     */
    method: string;
    /**
     * - Payment gateway order id
     */
    order_id: string;
    /**
     * - Payment gateway payment id
     */
    razorpay_payment_id?: string;
    /**
     * - Payment polling timeout if not recieved response
     */
    timeout?: number;
    /**
     * - Customer vpa address
     */
    vpa?: string;
};
/** @returns {PaymentInitializationResponse} */
declare function PaymentInitializationResponse(): PaymentInitializationResponse;
type PaymentInitializationResponse = {
    /**
     * - Payment gateway name
     */
    aggregator: string;
    /**
     * - Payment order id
     */
    aggregator_order_id?: string;
    /**
     * - Payable amount.
     */
    amount?: number;
    /**
     * - Bharath qr image url.
     */
    bqr_image?: string;
    /**
     * - Currency code.
     */
    currency?: string;
    /**
     * - Payment gateway customer id.
     */
    customer_id?: string;
    /**
     * - EDC machine Unique Identifier
     */
    device_id?: string;
    /**
     * - Order id
     */
    merchant_order_id: string;
    /**
     * - Payment method
     */
    method: string;
    /**
     * - Polling url.
     */
    polling_url: string;
    /**
     * - Payment id.
     */
    razorpay_payment_id?: string;
    /**
     * - Status of payment.
     */
    status?: string;
    /**
     * - Response is successful or not.
     */
    success: boolean;
    /**
     * - Timeout.
     */
    timeout?: number;
    /**
     * - UPI poll url.
     */
    upi_poll_url?: string;
    /**
     * - Payment virtual address.
     */
    virtual_id?: string;
    /**
     * - Customer vpa address
     */
    vpa?: string;
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
/** @returns {PaymentModeList} */
declare function PaymentModeList(): PaymentModeList;
type PaymentModeList = {
    /**
     * - Aggregator_name
     */
    aggregator_name: string;
    /**
     * - Card_brand
     */
    card_brand?: string;
    /**
     * - Card_brand_image
     */
    card_brand_image?: string;
    /**
     * - Card_fingerprint
     */
    card_fingerprint?: string;
    /**
     * - Card_id
     */
    card_id?: string;
    /**
     * - Card_isin
     */
    card_isin?: string;
    /**
     * - Card_issuer
     */
    card_issuer?: string;
    /**
     * - Card_name
     */
    card_name?: string;
    /**
     * - Card_number
     */
    card_number?: string;
    /**
     * - Card_reference
     */
    card_reference?: string;
    /**
     * - Card_token
     */
    card_token?: string;
    /**
     * - Card_type
     */
    card_type?: string;
    /**
     * - Cod limit
     */
    cod_limit?: number;
    /**
     * - Cod limit per order
     */
    cod_limit_per_order?: number;
    /**
     * - Code
     */
    code?: string;
    /**
     * - If card is
     * tokenised or not
     */
    compliant_with_tokenisation_guidelines?: boolean;
    /**
     * - Display name
     */
    display_name?: string;
    /**
     * - Dispaly Priority
     */
    display_priority?: number;
    /**
     * - Exp_month
     */
    exp_month?: number;
    /**
     * - Exp_year
     */
    exp_year?: number;
    /**
     * - Expired
     */
    expired?: boolean;
    /**
     * - Fynd_vpa
     */
    fynd_vpa?: string;
    /**
     * - Intent_app
     */
    intent_app?: IntentApp[];
    /**
     * -
     * Intent_app_error_dict_list
     */
    intent_app_error_dict_list?: IntentAppErrorList[];
    /**
     * - Intent_app_error_list
     */
    intent_app_error_list?: string[];
    /**
     * - Intent_flow
     */
    intent_flow?: boolean;
    /**
     * - Logo
     */
    logo_url?: any;
    /**
     * - Merchant code
     */
    merchant_code?: string;
    /**
     * - Name
     */
    name?: string;
    /**
     * - Nickname
     */
    nickname?: string;
    /**
     * - Remaining limit
     */
    remaining_limit?: number;
    /**
     * - Retry_count
     */
    retry_count?: number;
    /**
     * - Timeout
     */
    timeout?: number;
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
/** @returns {PaymentModeRouteResponse} */
declare function PaymentModeRouteResponse(): PaymentModeRouteResponse;
type PaymentModeRouteResponse = {
    /**
     * - Payment_options
     */
    payment_options: PaymentOptionAndFlow;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {PaymentOptionAndFlow} */
declare function PaymentOptionAndFlow(): PaymentOptionAndFlow;
type PaymentOptionAndFlow = {
    /**
     * - Payment_flows
     */
    payment_flows: PaymentFlow;
    /**
     * - Payment options
     */
    payment_option: RootPaymentMode[];
};
/** @returns {PaymentStatusUpdateRequest} */
declare function PaymentStatusUpdateRequest(): PaymentStatusUpdateRequest;
type PaymentStatusUpdateRequest = {
    /**
     * - Payment gateway name
     */
    aggregator: string;
    /**
     * - Payable amount.
     */
    amount: number;
    /**
     * - Customer valid mobile number
     */
    contact: string;
    /**
     * - Currency code.
     */
    currency: string;
    /**
     * - Payment gateway customer id.
     */
    customer_id: string;
    /**
     * - EDC machine Unique Identifier
     */
    device_id?: string;
    /**
     * - Customer valid email
     */
    email: string;
    /**
     * - Unique fynd order id
     */
    merchant_order_id: string;
    /**
     * - Unique fynd transaction id
     */
    merchant_transaction_id: string;
    /**
     * - Payment method
     */
    method: string;
    /**
     * - Payment gateway order id
     */
    order_id: string;
    /**
     * - Status of payment.
     */
    status: string;
    /**
     * - Customer vpa address
     */
    vpa?: string;
};
/** @returns {PaymentStatusUpdateResponse} */
declare function PaymentStatusUpdateResponse(): PaymentStatusUpdateResponse;
type PaymentStatusUpdateResponse = {
    /**
     * - Payment gateway name
     */
    aggregator_name: string;
    /**
     * - Redirect url
     */
    redirect_url?: string;
    /**
     * - Response is successful or not.
     */
    retry: boolean;
    /**
     * - Payment status
     */
    status: string;
    /**
     * - Response is successful or not
     */
    success?: boolean;
};
/** @returns {PollingPaymentLinkResponse} */
declare function PollingPaymentLinkResponse(): PollingPaymentLinkResponse;
type PollingPaymentLinkResponse = {
    /**
     * - Aggregator name
     */
    aggregator_name?: string;
    /**
     * - Amount
     */
    amount?: number;
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
     * - Payment link id
     */
    payment_link_id?: string;
    /**
     * - Url to redirect to
     */
    redirect_url?: string;
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
};
/** @returns {RedirectToAggregatorResponse} */
declare function RedirectToAggregatorResponse(): RedirectToAggregatorResponse;
type RedirectToAggregatorResponse = {
    /**
     * - Redirect URL.
     */
    data: RedirectURL;
    /**
     * - Status updated or not.
     */
    success: boolean;
};
/** @returns {RedirectURL} */
declare function RedirectURL(): RedirectURL;
type RedirectURL = {
    /**
     * - URL to which the user may redirect.
     */
    signup_url: string;
    /**
     * - Aggregator's Operation is successful or not.
     */
    status: boolean;
};
/** @returns {RefundAccountResponse} */
declare function RefundAccountResponse(): RefundAccountResponse;
type RefundAccountResponse = {
    /**
     * - Refund account data.
     */
    data?: any;
    is_verified_flag?: boolean;
    /**
     * - Response message
     */
    message: string;
    /**
     * - Success or failure flag.
     */
    success: boolean;
};
/** @returns {renderHTMLRequest} */
declare function renderHTMLRequest(): renderHTMLRequest;
type renderHTMLRequest = {
    /**
     * - Base64 encoded html string
     */
    base64_html: string;
    /**
     * - Return Type of API
     */
    returntype?: string;
};
/** @returns {renderHTMLResponse} */
declare function renderHTMLResponse(): renderHTMLResponse;
type renderHTMLResponse = {
    /**
     * - HTML string
     */
    html: string;
};
/** @returns {ResendOrCancelPaymentRequest} */
declare function ResendOrCancelPaymentRequest(): ResendOrCancelPaymentRequest;
type ResendOrCancelPaymentRequest = {
    /**
     * - EDC machine Unique Identifier
     */
    device_id?: string;
    /**
     * - Unique order id
     */
    order_id: string;
    /**
     * - Either resend or cancel
     */
    request_type: string;
};
/** @returns {ResendOrCancelPaymentResponse} */
declare function ResendOrCancelPaymentResponse(): ResendOrCancelPaymentResponse;
type ResendOrCancelPaymentResponse = {
    /**
     * - Data about link action status.
     */
    data: LinkStatus;
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {ResendPaymentLinkResponse} */
declare function ResendPaymentLinkResponse(): ResendPaymentLinkResponse;
type ResendPaymentLinkResponse = {
    /**
     * - Message
     */
    message: string;
    /**
     * - Polling request timeout
     */
    polling_timeout?: number;
    /**
     * - HTTP status code
     */
    status_code: number;
    /**
     * - Successful or failure
     */
    success: boolean;
};
/** @returns {RootPaymentMode} */
declare function RootPaymentMode(): RootPaymentMode;
type RootPaymentMode = {
    /**
     * - Annonymous card flag
     */
    add_card_enabled?: boolean;
    /**
     * - Dispaly Priority
     */
    aggregator_name?: string;
    /**
     * - Annonymous card flag
     */
    anonymous_enable?: boolean;
    /**
     * - Payment mode display name
     */
    display_name: string;
    /**
     * - Dispaly Priority
     */
    display_priority: number;
    /**
     * - This flag will be true in case of
     * Payment link payment through card
     */
    is_pay_by_card_pl?: boolean;
    /**
     * - Payment mode
     */
    list?: PaymentModeList[];
    /**
     * - Payment mode name
     */
    name: string;
    /**
     * - Card save or not
     */
    save_card?: boolean;
};
/** @returns {RupifiBannerData} */
declare function RupifiBannerData(): RupifiBannerData;
type RupifiBannerData = {
    /**
     * - Rupifi KYC banner url.
     */
    kyc_url?: string;
    /**
     * - Rupifi KYC status
     */
    status?: string;
};
/** @returns {RupifiBannerResponse} */
declare function RupifiBannerResponse(): RupifiBannerResponse;
type RupifiBannerResponse = {
    /**
     * - Rupifi KYC banner details.
     */
    data: RupifiBannerData;
    /**
     * - Successful or not.
     */
    success: boolean;
};
/** @returns {SetDefaultBeneficiaryRequest} */
declare function SetDefaultBeneficiaryRequest(): SetDefaultBeneficiaryRequest;
type SetDefaultBeneficiaryRequest = {
    /**
     * - Beneficiary Hash Id of the beneficiary added
     */
    beneficiary_id: string;
    /**
     * - Merchant Order Id
     */
    order_id: string;
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
/** @returns {TransferItemsDetails} */
declare function TransferItemsDetails(): TransferItemsDetails;
type TransferItemsDetails = {
    /**
     * - Beneficiary Display Name
     */
    display_name?: string;
    /**
     * -
     */
    id: number;
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
     * - Beneficiary Mode Name
     */
    display_name: string;
    /**
     * - Beneficiary Mode Items
     */
    items?: TransferItemsDetails[];
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
/** @returns {UserPersonalInfoInDetails} */
declare function UserPersonalInfoInDetails(): UserPersonalInfoInDetails;
type UserPersonalInfoInDetails = {
    /**
     * - Address details
     */
    address_as_per_id: KYCAddress;
    /**
     * - DOB
     */
    dob: string;
    /**
     * - Driver License
     */
    driving_license?: string;
    /**
     * - Email
     */
    email?: string;
    /**
     * - Is Email Verified or not
     */
    email_verified: boolean;
    /**
     * - Father's Name
     */
    fathers_name?: string;
    /**
     * - First Name
     */
    first_name: string;
    /**
     * - Gender
     */
    gender?: string;
    /**
     * - Last Name
     */
    last_name?: string;
    /**
     * - Middle Name
     */
    middle_name?: string;
    /**
     * - Is Mobile Verified or not
     */
    mobile_verified: boolean;
    /**
     * - Mother's Name
     */
    mothers_name?: string;
    /**
     * - Pan Number
     */
    pan?: string;
    /**
     * - Passport
     */
    passport?: string;
    /**
     * - Email
     */
    phone: string;
    /**
     * - Voter ID Number
     */
    voter_id?: string;
};
/** @returns {ValidateCustomerRequest} */
declare function ValidateCustomerRequest(): ValidateCustomerRequest;
type ValidateCustomerRequest = {
    /**
     * - Payment gateway name in camel case i.e Simpl, Rupifi
     */
    aggregator: string;
    /**
     * - Extra meta fields.
     */
    billing_address?: any;
    /**
     * - Extra meta fields.
     */
    delivery_address?: any;
    /**
     * - Extra meta fields.
     */
    merchant_params?: any;
    /**
     * - Extra meta fields.
     */
    order_items?: any[];
    /**
     * - Hashed payload string.
     */
    payload?: string;
    /**
     * - User mobile number without country code.
     */
    phone_number: string;
    /**
     * - Payable amount in paise
     */
    transaction_amount_in_paise: number;
};
/** @returns {ValidateCustomerResponse} */
declare function ValidateCustomerResponse(): ValidateCustomerResponse;
type ValidateCustomerResponse = {
    /**
     * - Payment gateway response data
     */
    data: any;
    /**
     * - Error or success message.
     */
    message: string;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {ValidateUPI} */
declare function ValidateUPI(): ValidateUPI;
type ValidateUPI = {
    /**
     * - Customer Bank
     */
    customer_name: string;
    /**
     * - Boolean is true or false.
     */
    is_valid: boolean;
    /**
     * - VALID or INVALID
     */
    status: string;
    /**
     * - UPI ID
     */
    upi_vpa: string;
};
/** @returns {ValidateVPARequest} */
declare function ValidateVPARequest(): ValidateVPARequest;
type ValidateVPARequest = {
    /**
     * - UPI ID
     */
    upi_vpa: string;
};
/** @returns {ValidateVPAResponse} */
declare function ValidateVPAResponse(): ValidateVPAResponse;
type ValidateVPAResponse = {
    /**
     * - Data about UPI ID validate.
     */
    data: ValidateUPI;
    /**
     * - Response is successful or not.
     */
    success: boolean;
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
     * - Boolean Flag whether OTP Validation is
     * already done or not
     */
    is_verified_flag: string;
    /**
     * - Request id
     */
    request_id: string;
    /**
     * - Response is successful or not
     */
    success?: boolean;
};
/** @returns {WrongOtpError} */
declare function WrongOtpError(): WrongOtpError;
type WrongOtpError = {
    /**
     * - Wrong OTP Code
     */
    description: string;
    /**
     * - Vefified flag.
     */
    is_verified_flag: boolean;
    /**
     * - Response is successful or not
     */
    success: string;
};
