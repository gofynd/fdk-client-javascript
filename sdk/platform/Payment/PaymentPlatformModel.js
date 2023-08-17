const Joi = require("joi");

/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {BankDetailsForOTP} details
 * @property {string} order_id
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
 * @typedef CODdata
 * @property {boolean} is_active - COD option is active or not
 * @property {number} limit - Total Limit of user
 * @property {number} remaining_limit - Remaining Limit for COD of User
 * @property {number} usages - Used COD limit from the user Limit
 * @property {string} user_id - Payment mode name
 */

/**
 * @typedef Code
 * @property {string} code - Payment Method Code
 * @property {string} merchant_code - Merchant Payment Code
 * @property {string} name - Name of payment method
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
 * @typedef DeletePayoutResponse
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef DeleteSubscriptionPaymentMethodResponse
 * @property {boolean} success - Success or failure.
 */

/**
 * @typedef EdcAddRequest
 * @property {number} aggregator_id - Aggregator which will accept payment
 * @property {string} [device_tag] - Device tag of edc device to identify it
 * @property {string} edc_device_serial_no - Serial number or imei of EDC device
 * @property {string} edc_model - Model of the edc machine
 * @property {number} store_id - Store at which devices is to used
 * @property {string} terminal_serial_no - Device serial number of
 *   terminal(android tablet)
 */

/**
 * @typedef EdcAggregatorAndModelListResponse
 * @property {EdcModelData[]} data - List of aggregators and their edc models
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef EdcDevice
 * @property {number} aggregator_id - Aggregator which will accept payment
 * @property {string} [aggregator_name] - Name of the corresponding aggregator
 * @property {string} application_id - Application ID
 * @property {string} device_tag - Device tag of edc device to identify it
 * @property {string} edc_device_serial_no - Serial number of EDC device
 * @property {string} [edc_model] - Name of the model
 * @property {boolean} is_active - State whether device is active or inactive
 * @property {string} [merchant_store_pos_code] - This is provided by pinelabs
 * @property {number} store_id - Store at which devices is to used
 * @property {string} terminal_serial_no - Device serial number of
 *   terminal(android tablet)
 * @property {string} terminal_unique_identifier - Genearated unique value for edc device
 */

/**
 * @typedef EdcDeviceAddResponse
 * @property {EdcDevice} data - Details of the EDC Device that is added
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef EdcDeviceDetailsResponse
 * @property {EdcDevice} data - Details of one EDC Device
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef EdcDeviceListResponse
 * @property {EdcDevice[]} items - List of all edc mapped to the application
 *   options with their Details.
 * @property {Page} page - Pagination Response
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef EdcDeviceStatsResponse
 * @property {StatisticsData} statistics - Message
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef EdcDeviceUpdateResponse
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef EdcModelData
 * @property {string} aggregator - Name of aggregator
 * @property {number} aggregator_id - ID of aggregator
 * @property {string[]} models - List of string of edc models
 */

/**
 * @typedef EdcUpdateRequest
 * @property {number} [aggregator_id] - Aggregator which will accept payment
 * @property {string} [device_tag] - Device tag of edc device to identify it
 * @property {string} [edc_device_serial_no] - Serial number or imei of EDC device
 * @property {string} [edc_model] - Model of the edc machine
 * @property {boolean} [is_active] - State whether device is active or inactive
 * @property {string} [merchant_store_pos_code] - This is provided by pinelabs
 * @property {number} [store_id] - Store at which devices is to used
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
 * @property {ErrorDescription} [error]
 * @property {string} message - Message
 * @property {number} status_code - HTTP status code
 * @property {boolean} success - Successful or failure
 */

/**
 * @typedef GetOauthUrlResponse
 * @property {boolean} success - Response is successful or not
 * @property {string} url - The url to call for authenticating
 */

/**
 * @typedef GetPaymentCode
 * @property {PaymentCode} method_code - Payment method code
 */

/**
 * @typedef GetPaymentCodeResponse
 * @property {GetPaymentCode} data - Data about Payment Code.
 * @property {boolean} success - Response is successful or not.
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
 * @typedef GetUserCODLimitResponse
 * @property {boolean} success - Response is successful or not
 * @property {CODdata} user_cod_data - User COD Data
 */

/**
 * @typedef HttpErrorCodeAndResponse
 * @property {ErrorCodeAndDescription} error
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
 * @property {PaymentModeLogo} [logos] - Logos
 * @property {string} [package_name] - Package_name
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [code] - Code
 * @property {string} [package_name] - Package_name
 */

/**
 * @typedef LinkStatus
 * @property {string} message - Message
 * @property {boolean} status - Link action status
 */

/**
 * @typedef MerchantOnBoardingRequest
 * @property {string} aggregator - Payment aggregator name
 * @property {string} app_id - Application id
 * @property {string} credit_line_id - Merchant ID at Ajiodhan's end
 * @property {string} status - Status
 * @property {string} user_id - Deadlock/Grimlock user id
 */

/**
 * @typedef MerchantOnBoardingResponse
 * @property {Object} data
 * @property {boolean} success - Success/Failure of the transaction
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [current_status]
 * @property {Object} [extra_meta]
 * @property {string} [order_id]
 * @property {string} [payment_gateway]
 * @property {string} [payment_id]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {number} amount - Payment amount
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {string} mode
 * @property {string} [name] - Payment mode name
 */

/**
 * @typedef NotFoundResourceError
 * @property {string} code - Bad Request Data
 * @property {string} description - Not Found
 * @property {boolean} success - Response is successful or not
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
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */

/**
 * @typedef PaymentCode
 * @property {Code} codes - List of dict that contains payment method data
 * @property {string} name - Name of payment name
 * @property {string} networks - Payment networks
 * @property {string} types - Type of payment mode
 */

/**
 * @typedef PaymentConfirmationRequest
 * @property {string} order_id - Unique order id
 * @property {MultiTenderPaymentMethod[]} payment_methods
 */

/**
 * @typedef PaymentConfirmationResponse
 * @property {string} message - Message
 * @property {string} order_id - Unique order id
 * @property {boolean} success - Payment confirmation updated or not.
 */

/**
 * @typedef PaymentGatewayConfig
 * @property {string} config_type - Config Type of the aggregator
 * @property {boolean} [is_active] - Enable/ Disable Flag
 * @property {string} key - Api key of the payment aggregator
 * @property {string} merchant_salt - Merchant key of the payment aggregator
 * @property {string} secret - Secret Key of the payment aggregator
 */

/**
 * @typedef PaymentGatewayConfigRequest
 * @property {PaymentGatewayConfig} [aggregator_name]
 * @property {string} app_id - Application Id to which Payment config Mapped
 * @property {boolean} [is_active] - Enable/ Disable Flag
 */

/**
 * @typedef PaymentGatewayConfigResponse
 * @property {Object[]} [aggregators] - List of all speceific Payment options
 *   with their Details.
 * @property {string} app_id - Application Id to which Payment config Mapped
 * @property {boolean} created - Response is created or not
 * @property {string[]} display_fields - List of all included options with their Details.
 * @property {string[]} excluded_fields - List of all excluded options with their Details.
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {string[]} aggregator - List of added payment gateway
 * @property {boolean} success - Response is successful or not
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
 * @property {PaymentModeLogo} [logo_url] - Logo
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
 * @typedef PaymentObjectListSerializer
 * @property {Object} [aggregator_payment_object]
 * @property {string[]} all_status
 * @property {string} amount_in_paisa
 * @property {string} application_id
 * @property {string} collected_by
 * @property {string} company_id
 * @property {string} created_on
 * @property {string} currency
 * @property {string} current_status
 * @property {string} id
 * @property {string} modified_on
 * @property {string} payment_gateway
 * @property {string} [payment_id]
 * @property {string} payment_mode
 * @property {string} payment_mode_identifier
 * @property {Object} [refund_object]
 * @property {string} refunded_by
 * @property {Object} user_object
 */

/**
 * @typedef PaymentOptions
 * @property {RootPaymentMode[]} payment_option - Payment options
 */

/**
 * @typedef PaymentOptionsResponse
 * @property {PaymentOptions} payment_options - Payment options
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef PaymentStatusBulkHandlerRequest
 * @property {string[]} merchant_order_id - List of order ids
 */

/**
 * @typedef PaymentStatusBulkHandlerResponse
 * @property {number} [count]
 * @property {PaymentStatusObject[]} [data]
 * @property {string} [error]
 * @property {number} status
 * @property {string} success
 */

/**
 * @typedef PaymentStatusObject
 * @property {string} merchant_order_id
 * @property {PaymentObjectListSerializer[]} [payment_object_list]
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
 * @typedef Payout
 * @property {PayoutCustomer} customers - Customers details object
 * @property {boolean} is_active - Enable/DIsable Flag Payout
 * @property {boolean} is_default - Default or not
 * @property {PayoutMoreAttributes} more_attributes - Bank details object
 * @property {PayoutAggregator[]} [payouts_aggregators]
 * @property {string} transfer_type - Transafer type
 * @property {string} unique_transfer_no - Display priority of the payment mode
 */

/**
 * @typedef PayoutAggregator
 * @property {number} [aggregator_fund_id] - Aggregator_fund_id
 * @property {number} [aggregator_id] - Aggregator_id
 * @property {number} [payout_details_id] - Payout_details_id
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} [account_holder]
 * @property {string} [account_no]
 * @property {string} account_type
 * @property {string} [bank_name]
 * @property {string} [branch_name]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} ifsc_code
 * @property {number} [pincode]
 * @property {string} [state]
 */

/**
 * @typedef PayoutCustomer
 * @property {string} [email] - Customer Email
 * @property {number} [id] - Customer ID
 * @property {string} [mobile] - Customer Mobile No
 * @property {string} [name] - Customer Name
 * @property {string} [unique_external_id] - Unique_external_id
 */

/**
 * @typedef PayoutMoreAttributes
 * @property {string} [account_holder] - Account Holder Name
 * @property {string} [account_no] - Account Number
 * @property {string} [account_type] - Account Type Saving/Current
 * @property {string} [bank_name] - Name of Bank
 * @property {string} [branch_name] - Branch Name
 * @property {string} [city] - City
 * @property {string} [country] - Country
 * @property {string} [ifsc_code] - IFSC Code
 * @property {string} [state] - State
 */

/**
 * @typedef PayoutRequest
 * @property {string} aggregator - Aggregator Name
 * @property {PayoutBankDetails} bank_details - Payout bank details object
 * @property {boolean} is_active - Enable/Disable Flag Payout
 * @property {string} transfer_type - Transafer type
 * @property {string} unique_external_id - Unique Id of Payout
 * @property {Object} users - Payout users object
 */

/**
 * @typedef PayoutResponse
 * @property {string} aggregator - Aggregator Name
 * @property {Object} bank_details - Payout bank_details object
 * @property {boolean} created - Created flag
 * @property {boolean} is_active - Enable/DIsable Flag Payout
 * @property {string} payment_status - Status of payment
 * @property {Object} payouts - Payout object
 * @property {boolean} success - Response is successful or not
 * @property {string} transfer_type - Transfer type
 * @property {string} unique_transfer_no - Unique transfer no
 * @property {Object} users - Users details object
 */

/**
 * @typedef PayoutsResponse
 * @property {Payout[]} items - Contains list of PayoutSchema
 * @property {boolean} success - Response is successful or not
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
 * @typedef RefundAccountResponse
 * @property {Object} [data] - Refund account data.
 * @property {boolean} [is_verified_flag]
 * @property {string} message - Response message
 * @property {boolean} success - Success or failure flag.
 */

/**
 * @typedef RepaymentDetailsSerialiserPayAll
 * @property {string} aggregator_order_id - Id of payment gateway
 * @property {string} aggregator_transaction_id - Unique Id for the transaction
 * @property {string} extension_order_id - Order id created in extension
 * @property {RepaymentRequestDetails[]} [shipment_details]
 * @property {number} total_amount - Total amount
 */

/**
 * @typedef RepaymentRequestDetails
 * @property {string} aggregator - Name of Payment Gateway
 * @property {string} aggregator_order_id - Id of payment gateway
 * @property {string} aggregator_transaction_id - Unique Id for the transaction
 * @property {number} amount - Amount to paid back
 * @property {string} current_status - Status
 * @property {string} fwd_shipment_id - Purchase Shipment Id
 * @property {string} merchant_order_id - Merchant's Order Id
 * @property {number} outstanding_details_id - Outstanding details ID
 * @property {string} payment_mode - Payment Mode
 * @property {string} payment_mode_identifier - Payment Mode Id
 */

/**
 * @typedef RepaymentResponse
 * @property {Object} data
 * @property {boolean} success - Success/Failure of the transaction
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
 * @typedef RevokeOAuthToken
 * @property {string} message - The confirmation message of the token revoke.
 * @property {boolean} success - Response is successful or not
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
 * @typedef SaveSubscriptionSetupIntentRequest
 * @property {string} unique_external_id - Unique id i.e company:id
 */

/**
 * @typedef SaveSubscriptionSetupIntentResponse
 * @property {Object} data - Subscription Payment Method Object
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef SetCODForUserRequest
 * @property {boolean} is_active - Either true or false
 * @property {string} merchant_user_id - Merchant User id
 * @property {string} mobileno - Mobile No. of User
 */

/**
 * @typedef SetCODOptionResponse
 * @property {string} message - Message
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef StatisticsData
 * @property {number} active_device_count - No of active devices
 * @property {number} inactive_device_count - No of inactive devices
 */

/**
 * @typedef SubscriptionConfigResponse
 * @property {string} aggregator - Aggregator Name
 * @property {Object} config - Aggregator Config
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef SubscriptionPaymentMethodResponse
 * @property {Object[]} data - Subscription Payment Method Object
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef UpdatePayoutRequest
 * @property {boolean} is_active - Enable/Disable Flag Payout
 * @property {boolean} is_default - Enable/Disable Default Payout
 * @property {string} unique_external_id - Unique Id of Payout
 */

/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} is_active - Enable/DIsable Flag Payout
 * @property {boolean} is_default - Enable/Disable Default Payout
 * @property {boolean} success - Response is successful or not
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

class PaymentPlatformModel {
  /** @returns {AddBeneficiaryDetailsOTPRequest} */
  static AddBeneficiaryDetailsOTPRequest() {
    return Joi.object({
      details: PaymentPlatformModel.BankDetailsForOTP().required(),
      order_id: Joi.string().allow("").required(),
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

  /** @returns {CODdata} */
  static CODdata() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      limit: Joi.number().required(),
      remaining_limit: Joi.number().required(),
      usages: Joi.number().required(),
      user_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {Code} */
  static Code() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      merchant_code: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
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
      meta: PaymentPlatformModel.CreatePaymentLinkMeta().required(),
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

  /** @returns {DeletePayoutResponse} */
  static DeletePayoutResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  /** @returns {DeleteSubscriptionPaymentMethodResponse} */
  static DeleteSubscriptionPaymentMethodResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  /** @returns {EdcAddRequest} */
  static EdcAddRequest() {
    return Joi.object({
      aggregator_id: Joi.number().required(),
      device_tag: Joi.string().allow("").allow(null),
      edc_device_serial_no: Joi.string().allow("").required(),
      edc_model: Joi.string().allow("").required(),
      store_id: Joi.number().required(),
      terminal_serial_no: Joi.string().allow("").required(),
    });
  }

  /** @returns {EdcAggregatorAndModelListResponse} */
  static EdcAggregatorAndModelListResponse() {
    return Joi.object({
      data: Joi.array().items(PaymentPlatformModel.EdcModelData()).required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {EdcDevice} */
  static EdcDevice() {
    return Joi.object({
      aggregator_id: Joi.number().required(),
      aggregator_name: Joi.string().allow(""),
      application_id: Joi.string().allow("").required(),
      device_tag: Joi.string().allow("").required(),
      edc_device_serial_no: Joi.string().allow("").required(),
      edc_model: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      merchant_store_pos_code: Joi.string().allow("").allow(null),
      store_id: Joi.number().required(),
      terminal_serial_no: Joi.string().allow("").required(),
      terminal_unique_identifier: Joi.string().allow("").required(),
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

  /** @returns {EdcDeviceListResponse} */
  static EdcDeviceListResponse() {
    return Joi.object({
      items: Joi.array().items(PaymentPlatformModel.EdcDevice()).required(),
      page: PaymentPlatformModel.Page().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {EdcDeviceStatsResponse} */
  static EdcDeviceStatsResponse() {
    return Joi.object({
      statistics: PaymentPlatformModel.StatisticsData().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {EdcDeviceUpdateResponse} */
  static EdcDeviceUpdateResponse() {
    return Joi.object({
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

  /** @returns {EdcUpdateRequest} */
  static EdcUpdateRequest() {
    return Joi.object({
      aggregator_id: Joi.number(),
      device_tag: Joi.string().allow("").allow(null),
      edc_device_serial_no: Joi.string().allow(""),
      edc_model: Joi.string().allow(""),
      is_active: Joi.boolean(),
      merchant_store_pos_code: Joi.string().allow(""),
      store_id: Joi.number(),
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
      error: PaymentPlatformModel.ErrorDescription(),
      message: Joi.string().allow("").required(),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {GetOauthUrlResponse} */
  static GetOauthUrlResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      url: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetPaymentCode} */
  static GetPaymentCode() {
    return Joi.object({
      method_code: PaymentPlatformModel.PaymentCode().required(),
    });
  }

  /** @returns {GetPaymentCodeResponse} */
  static GetPaymentCodeResponse() {
    return Joi.object({
      data: PaymentPlatformModel.GetPaymentCode().required(),
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

  /** @returns {GetUserCODLimitResponse} */
  static GetUserCODLimitResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      user_cod_data: PaymentPlatformModel.CODdata().required(),
    });
  }

  /** @returns {HttpErrorCodeAndResponse} */
  static HttpErrorCodeAndResponse() {
    return Joi.object({
      error: PaymentPlatformModel.ErrorCodeAndDescription().required(),
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
      logos: PaymentPlatformModel.PaymentModeLogo(),
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

  /** @returns {LinkStatus} */
  static LinkStatus() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      status: Joi.boolean().required(),
    });
  }

  /** @returns {MerchantOnBoardingRequest} */
  static MerchantOnBoardingRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      app_id: Joi.string().allow("").required(),
      credit_line_id: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      user_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {MerchantOnBoardingResponse} */
  static MerchantOnBoardingResponse() {
    return Joi.object({
      data: Joi.any().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {MultiTenderPaymentMeta} */
  static MultiTenderPaymentMeta() {
    return Joi.object({
      current_status: Joi.string().allow(""),
      extra_meta: Joi.any().allow(null),
      order_id: Joi.string().allow(""),
      payment_gateway: Joi.string().allow(""),
      payment_id: Joi.string().allow(""),
    });
  }

  /** @returns {MultiTenderPaymentMethod} */
  static MultiTenderPaymentMethod() {
    return Joi.object({
      amount: Joi.number().required(),
      meta: PaymentPlatformModel.MultiTenderPaymentMeta(),
      mode: Joi.string().allow("").required(),
      name: Joi.string().allow(""),
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
        PaymentPlatformModel.OrderBeneficiaryDetails()
      ),
      show_beneficiary_details: Joi.boolean(),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {PaymentCode} */
  static PaymentCode() {
    return Joi.object({
      codes: PaymentPlatformModel.Code().required(),
      name: Joi.string().allow("").required(),
      networks: Joi.string().allow("").required(),
      types: Joi.string().allow("").required(),
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
      message: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PaymentGatewayConfig} */
  static PaymentGatewayConfig() {
    return Joi.object({
      config_type: Joi.string().allow("").required(),
      is_active: Joi.boolean().allow(null),
      key: Joi.string().allow("").required(),
      merchant_salt: Joi.string().allow("").required(),
      secret: Joi.string().allow("").required(),
    });
  }

  /** @returns {PaymentGatewayConfigRequest} */
  static PaymentGatewayConfigRequest() {
    return Joi.object({
      aggregator_name: PaymentPlatformModel.PaymentGatewayConfig(),
      app_id: Joi.string().allow("").required(),
      is_active: Joi.boolean().allow(null),
    });
  }

  /** @returns {PaymentGatewayConfigResponse} */
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      aggregators: Joi.array().items(Joi.any()),
      app_id: Joi.string().allow("").required(),
      created: Joi.boolean().required(),
      display_fields: Joi.array().items(Joi.string().allow("")).required(),
      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PaymentGatewayToBeReviewed} */
  static PaymentGatewayToBeReviewed() {
    return Joi.object({
      aggregator: Joi.array().items(Joi.string().allow("")).required(),
      success: Joi.boolean().required(),
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
      intent_app: Joi.array().items(PaymentPlatformModel.IntentApp()),
      intent_app_error_dict_list: Joi.array().items(
        PaymentPlatformModel.IntentAppErrorList()
      ),
      intent_app_error_list: Joi.array().items(Joi.string().allow("")),
      intent_flow: Joi.boolean().allow(null),
      logo_url: PaymentPlatformModel.PaymentModeLogo(),
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

  /** @returns {PaymentObjectListSerializer} */
  static PaymentObjectListSerializer() {
    return Joi.object({
      aggregator_payment_object: Joi.any().allow(null),
      all_status: Joi.array().items(Joi.string().allow("")).required(),
      amount_in_paisa: Joi.string().allow("").required(),
      application_id: Joi.string().allow("").required(),
      collected_by: Joi.string().allow("").required(),
      company_id: Joi.string().allow("").required(),
      created_on: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      current_status: Joi.string().allow("").required(),
      id: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      payment_gateway: Joi.string().allow("").required(),
      payment_id: Joi.string().allow("").allow(null),
      payment_mode: Joi.string().allow("").required(),
      payment_mode_identifier: Joi.string().allow("").required(),
      refund_object: Joi.any().allow(null),
      refunded_by: Joi.string().allow("").required(),
      user_object: Joi.any().required(),
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

  /** @returns {PaymentOptionsResponse} */
  static PaymentOptionsResponse() {
    return Joi.object({
      payment_options: PaymentPlatformModel.PaymentOptions().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PaymentStatusBulkHandlerRequest} */
  static PaymentStatusBulkHandlerRequest() {
    return Joi.object({
      merchant_order_id: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {PaymentStatusBulkHandlerResponse} */
  static PaymentStatusBulkHandlerResponse() {
    return Joi.object({
      count: Joi.number(),
      data: Joi.array().items(PaymentPlatformModel.PaymentStatusObject()),
      error: Joi.string().allow(""),
      status: Joi.number().required(),
      success: Joi.string().allow("").required(),
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

  /** @returns {Payout} */
  static Payout() {
    return Joi.object({
      customers: PaymentPlatformModel.PayoutCustomer().required(),
      is_active: Joi.boolean().required(),
      is_default: Joi.boolean().required(),
      more_attributes: PaymentPlatformModel.PayoutMoreAttributes().required(),
      payouts_aggregators: Joi.array().items(
        PaymentPlatformModel.PayoutAggregator()
      ),
      transfer_type: Joi.string().allow("").required(),
      unique_transfer_no: Joi.string().allow("").required(),
    });
  }

  /** @returns {PayoutAggregator} */
  static PayoutAggregator() {
    return Joi.object({
      aggregator_fund_id: Joi.number().allow(null),
      aggregator_id: Joi.number().allow(null),
      payout_details_id: Joi.number().allow(null),
    });
  }

  /** @returns {PayoutBankDetails} */
  static PayoutBankDetails() {
    return Joi.object({
      account_holder: Joi.string().allow(""),
      account_no: Joi.string().allow(""),
      account_type: Joi.string().allow("").required(),
      bank_name: Joi.string().allow(""),
      branch_name: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      ifsc_code: Joi.string().allow("").required(),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
    });
  }

  /** @returns {PayoutCustomer} */
  static PayoutCustomer() {
    return Joi.object({
      email: Joi.string().allow("").allow(null),
      id: Joi.number().allow(null),
      mobile: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      unique_external_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PayoutMoreAttributes} */
  static PayoutMoreAttributes() {
    return Joi.object({
      account_holder: Joi.string().allow("").allow(null),
      account_no: Joi.string().allow("").allow(null),
      account_type: Joi.string().allow("").allow(null),
      bank_name: Joi.string().allow("").allow(null),
      branch_name: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").allow(null),
      country: Joi.string().allow("").allow(null),
      ifsc_code: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PayoutRequest} */
  static PayoutRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      bank_details: PaymentPlatformModel.PayoutBankDetails().required(),
      is_active: Joi.boolean().required(),
      transfer_type: Joi.string().allow("").required(),
      unique_external_id: Joi.string().allow("").required(),
      users: Joi.any().required(),
    });
  }

  /** @returns {PayoutResponse} */
  static PayoutResponse() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      bank_details: Joi.any().required(),
      created: Joi.boolean().required(),
      is_active: Joi.boolean().required(),
      payment_status: Joi.string().allow("").required(),
      payouts: Joi.any().required(),
      success: Joi.boolean().required(),
      transfer_type: Joi.string().allow("").required(),
      unique_transfer_no: Joi.string().allow("").required(),
      users: Joi.any().required(),
    });
  }

  /** @returns {PayoutsResponse} */
  static PayoutsResponse() {
    return Joi.object({
      items: Joi.array().items(PaymentPlatformModel.Payout()).required(),
      success: Joi.boolean().required(),
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

  /** @returns {RefundAccountResponse} */
  static RefundAccountResponse() {
    return Joi.object({
      data: Joi.any(),
      is_verified_flag: Joi.boolean(),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {RepaymentDetailsSerialiserPayAll} */
  static RepaymentDetailsSerialiserPayAll() {
    return Joi.object({
      aggregator_order_id: Joi.string().allow("").required(),
      aggregator_transaction_id: Joi.string().allow("").required(),
      extension_order_id: Joi.string().allow("").allow(null).required(),
      shipment_details: Joi.array().items(
        PaymentPlatformModel.RepaymentRequestDetails()
      ),
      total_amount: Joi.number().required(),
    });
  }

  /** @returns {RepaymentRequestDetails} */
  static RepaymentRequestDetails() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      aggregator_order_id: Joi.string().allow("").required(),
      aggregator_transaction_id: Joi.string().allow("").required(),
      amount: Joi.number().required(),
      current_status: Joi.string().allow("").required(),
      fwd_shipment_id: Joi.string().allow("").required(),
      merchant_order_id: Joi.string().allow("").required(),
      outstanding_details_id: Joi.number().required(),
      payment_mode: Joi.string().allow("").required(),
      payment_mode_identifier: Joi.string().allow("").required(),
    });
  }

  /** @returns {RepaymentResponse} */
  static RepaymentResponse() {
    return Joi.object({
      data: Joi.any().required(),
      success: Joi.boolean().required(),
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
      data: PaymentPlatformModel.LinkStatus().required(),
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

  /** @returns {RevokeOAuthToken} */
  static RevokeOAuthToken() {
    return Joi.object({
      message: Joi.string().allow("").required(),
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
      list: Joi.array().items(PaymentPlatformModel.PaymentModeList()),
      name: Joi.string().allow("").required(),
      save_card: Joi.boolean().allow(null),
    });
  }

  /** @returns {SaveSubscriptionSetupIntentRequest} */
  static SaveSubscriptionSetupIntentRequest() {
    return Joi.object({
      unique_external_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {SaveSubscriptionSetupIntentResponse} */
  static SaveSubscriptionSetupIntentResponse() {
    return Joi.object({
      data: Joi.any().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {SetCODForUserRequest} */
  static SetCODForUserRequest() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      merchant_user_id: Joi.string().allow("").required(),
      mobileno: Joi.string().allow("").required(),
    });
  }

  /** @returns {SetCODOptionResponse} */
  static SetCODOptionResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {StatisticsData} */
  static StatisticsData() {
    return Joi.object({
      active_device_count: Joi.number().required(),
      inactive_device_count: Joi.number().required(),
    });
  }

  /** @returns {SubscriptionConfigResponse} */
  static SubscriptionConfigResponse() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      config: Joi.any().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {SubscriptionPaymentMethodResponse} */
  static SubscriptionPaymentMethodResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {UpdatePayoutRequest} */
  static UpdatePayoutRequest() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      is_default: Joi.boolean().required(),
      unique_external_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {UpdatePayoutResponse} */
  static UpdatePayoutResponse() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      is_default: Joi.boolean().required(),
      success: Joi.boolean().required(),
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
}
module.exports = PaymentPlatformModel;
