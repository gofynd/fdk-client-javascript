export = PaymentPlatformModel;
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
 * @typedef ExtensionPaymentUpdateRequestSerializer
 * @property {string} currency
 * @property {string} gid
 * @property {Object} order_details
 * @property {Object} payment_details
 * @property {string} status
 * @property {number} total_amount
 */
/**
 * @typedef ExtensionPaymentUpdateResponseSerializer
 * @property {string} currency
 * @property {string} gid
 * @property {Object} platform_transaction_details
 * @property {string} status
 * @property {number} total_amount
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
 * @property {Object} customers - Customers details object
 * @property {boolean} is_active - Enable/DIsable Flag Payout
 * @property {boolean} is_default - Default or not
 * @property {Object} more_attributes - Bank details object
 * @property {Object[]} payouts_aggregators - Payout aggregator object
 * @property {string} transfer_type - Transafer type
 * @property {Object} unique_transfer_no - Display priority of the payment mode
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
declare class PaymentPlatformModel {
}
declare namespace PaymentPlatformModel {
    export { AddBeneficiaryDetailsOTPRequest, BankDetailsForOTP, CancelOrResendPaymentLinkRequest, CancelPaymentLinkResponse, CODdata, Code, CreatePaymentLinkMeta, CreatePaymentLinkRequest, CreatePaymentLinkResponse, DeletePayoutResponse, DeleteSubscriptionPaymentMethodResponse, EdcAddRequest, EdcAggregatorAndModelListResponse, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcDeviceListResponse, EdcDeviceStatsResponse, EdcDeviceUpdateResponse, EdcModelData, EdcUpdateRequest, ErrorCodeAndDescription, ErrorCodeDescription, ErrorDescription, ErrorResponse, ExtensionPaymentUpdateRequestSerializer, ExtensionPaymentUpdateResponseSerializer, GetOauthUrlResponse, GetPaymentCode, GetPaymentCodeResponse, GetPaymentLinkResponse, GetUserCODLimitResponse, HttpErrorCodeAndResponse, IfscCodeResponse, IntentApp, IntentAppErrorList, LinkStatus, MerchantOnBoardingRequest, MerchantOnBoardingResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, NotFoundResourceError, OrderBeneficiaryDetails, OrderBeneficiaryResponse, Page, PaymentCode, PaymentConfirmationRequest, PaymentConfirmationResponse, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayConfigResponse, PaymentGatewayToBeReviewed, PaymentInitializationRequest, PaymentInitializationResponse, PaymentModeList, PaymentModeLogo, PaymentObjectListSerializer, PaymentOptions, PaymentOptionsResponse, PaymentStatusBulkHandlerRequest, PaymentStatusBulkHandlerResponse, PaymentStatusObject, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, PayoutsResponse, PollingPaymentLinkResponse, RefundAccountResponse, RepaymentDetailsSerialiserPayAll, RepaymentRequestDetails, RepaymentResponse, ResendOrCancelPaymentRequest, ResendOrCancelPaymentResponse, ResendPaymentLinkResponse, RevokeOAuthToken, RootPaymentMode, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, SetCODForUserRequest, SetCODOptionResponse, StatisticsData, SubscriptionConfigResponse, SubscriptionPaymentMethodResponse, UpdatePayoutRequest, UpdatePayoutResponse, ValidateCustomerRequest, ValidateCustomerResponse };
}
/** @returns {AddBeneficiaryDetailsOTPRequest} */
declare function AddBeneficiaryDetailsOTPRequest(): AddBeneficiaryDetailsOTPRequest;
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
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
/** @returns {CODdata} */
declare function CODdata(): CODdata;
type CODdata = {
    /**
     * - COD option is active or not
     */
    is_active: boolean;
    /**
     * - Total Limit of user
     */
    limit: number;
    /**
     * - Remaining Limit for COD of User
     */
    remaining_limit: number;
    /**
     * - Used COD limit from the user Limit
     */
    usages: number;
    /**
     * - Payment mode name
     */
    user_id: string;
};
/** @returns {Code} */
declare function Code(): Code;
type Code = {
    /**
     * - Payment Method Code
     */
    code: string;
    /**
     * - Merchant Payment Code
     */
    merchant_code: string;
    /**
     * - Name of payment method
     */
    name: string;
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
/** @returns {DeletePayoutResponse} */
declare function DeletePayoutResponse(): DeletePayoutResponse;
type DeletePayoutResponse = {
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {DeleteSubscriptionPaymentMethodResponse} */
declare function DeleteSubscriptionPaymentMethodResponse(): DeleteSubscriptionPaymentMethodResponse;
type DeleteSubscriptionPaymentMethodResponse = {
    /**
     * - Success or failure.
     */
    success: boolean;
};
/** @returns {EdcAddRequest} */
declare function EdcAddRequest(): EdcAddRequest;
type EdcAddRequest = {
    /**
     * - Aggregator which will accept payment
     */
    aggregator_id: number;
    /**
     * - Device tag of edc device to identify it
     */
    device_tag?: string;
    /**
     * - Serial number or imei of EDC device
     */
    edc_device_serial_no: string;
    /**
     * - Model of the edc machine
     */
    edc_model: string;
    /**
     * - Store at which devices is to used
     */
    store_id: number;
    /**
     * - Device serial number of
     * terminal(android tablet)
     */
    terminal_serial_no: string;
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
/** @returns {EdcDevice} */
declare function EdcDevice(): EdcDevice;
type EdcDevice = {
    /**
     * - Aggregator which will accept payment
     */
    aggregator_id: number;
    /**
     * - Name of the corresponding aggregator
     */
    aggregator_name?: string;
    /**
     * - Application ID
     */
    application_id: string;
    /**
     * - Device tag of edc device to identify it
     */
    device_tag: string;
    /**
     * - Serial number of EDC device
     */
    edc_device_serial_no: string;
    /**
     * - Name of the model
     */
    edc_model?: string;
    /**
     * - State whether device is active or inactive
     */
    is_active: boolean;
    /**
     * - This is provided by pinelabs
     */
    merchant_store_pos_code?: string;
    /**
     * - Store at which devices is to used
     */
    store_id: number;
    /**
     * - Device serial number of
     * terminal(android tablet)
     */
    terminal_serial_no: string;
    /**
     * - Genearated unique value for edc device
     */
    terminal_unique_identifier: string;
};
/** @returns {EdcDeviceAddResponse} */
declare function EdcDeviceAddResponse(): EdcDeviceAddResponse;
type EdcDeviceAddResponse = {
    /**
     * - Details of the EDC Device that is added
     */
    data: EdcDevice;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {EdcDeviceDetailsResponse} */
declare function EdcDeviceDetailsResponse(): EdcDeviceDetailsResponse;
type EdcDeviceDetailsResponse = {
    /**
     * - Details of one EDC Device
     */
    data: EdcDevice;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {EdcDeviceListResponse} */
declare function EdcDeviceListResponse(): EdcDeviceListResponse;
type EdcDeviceListResponse = {
    /**
     * - List of all edc mapped to the application
     * options with their Details.
     */
    items: EdcDevice[];
    /**
     * - Pagination Response
     */
    page: Page;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {EdcDeviceStatsResponse} */
declare function EdcDeviceStatsResponse(): EdcDeviceStatsResponse;
type EdcDeviceStatsResponse = {
    /**
     * - Message
     */
    statistics: StatisticsData;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {EdcDeviceUpdateResponse} */
declare function EdcDeviceUpdateResponse(): EdcDeviceUpdateResponse;
type EdcDeviceUpdateResponse = {
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
/** @returns {EdcUpdateRequest} */
declare function EdcUpdateRequest(): EdcUpdateRequest;
type EdcUpdateRequest = {
    /**
     * - Aggregator which will accept payment
     */
    aggregator_id?: number;
    /**
     * - Device tag of edc device to identify it
     */
    device_tag?: string;
    /**
     * - Serial number or imei of EDC device
     */
    edc_device_serial_no?: string;
    /**
     * - Model of the edc machine
     */
    edc_model?: string;
    /**
     * - State whether device is active or inactive
     */
    is_active?: boolean;
    /**
     * - This is provided by pinelabs
     */
    merchant_store_pos_code?: string;
    /**
     * - Store at which devices is to used
     */
    store_id?: number;
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
    error?: ErrorDescription;
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
/** @returns {ExtensionPaymentUpdateRequestSerializer} */
declare function ExtensionPaymentUpdateRequestSerializer(): ExtensionPaymentUpdateRequestSerializer;
type ExtensionPaymentUpdateRequestSerializer = {
    currency: string;
    gid: string;
    order_details: any;
    payment_details: any;
    status: string;
    total_amount: number;
};
/** @returns {ExtensionPaymentUpdateResponseSerializer} */
declare function ExtensionPaymentUpdateResponseSerializer(): ExtensionPaymentUpdateResponseSerializer;
type ExtensionPaymentUpdateResponseSerializer = {
    currency: string;
    gid: string;
    platform_transaction_details: any;
    status: string;
    total_amount: number;
};
/** @returns {GetOauthUrlResponse} */
declare function GetOauthUrlResponse(): GetOauthUrlResponse;
type GetOauthUrlResponse = {
    /**
     * - Response is successful or not
     */
    success: boolean;
    /**
     * - The url to call for authenticating
     */
    url: string;
};
/** @returns {GetPaymentCode} */
declare function GetPaymentCode(): GetPaymentCode;
type GetPaymentCode = {
    /**
     * - Payment method code
     */
    method_code: PaymentCode;
};
/** @returns {GetPaymentCodeResponse} */
declare function GetPaymentCodeResponse(): GetPaymentCodeResponse;
type GetPaymentCodeResponse = {
    /**
     * - Data about Payment Code.
     */
    data: GetPaymentCode;
    /**
     * - Response is successful or not.
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
/** @returns {GetUserCODLimitResponse} */
declare function GetUserCODLimitResponse(): GetUserCODLimitResponse;
type GetUserCODLimitResponse = {
    /**
     * - Response is successful or not
     */
    success: boolean;
    /**
     * - User COD Data
     */
    user_cod_data: CODdata;
};
/** @returns {HttpErrorCodeAndResponse} */
declare function HttpErrorCodeAndResponse(): HttpErrorCodeAndResponse;
type HttpErrorCodeAndResponse = {
    error: ErrorCodeAndDescription;
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
    logos?: PaymentModeLogo;
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
/** @returns {MerchantOnBoardingRequest} */
declare function MerchantOnBoardingRequest(): MerchantOnBoardingRequest;
type MerchantOnBoardingRequest = {
    /**
     * - Payment aggregator name
     */
    aggregator: string;
    /**
     * - Application id
     */
    app_id: string;
    /**
     * - Merchant ID at Ajiodhan's end
     */
    credit_line_id: string;
    /**
     * - Status
     */
    status: string;
    /**
     * - Deadlock/Grimlock user id
     */
    user_id: string;
};
/** @returns {MerchantOnBoardingResponse} */
declare function MerchantOnBoardingResponse(): MerchantOnBoardingResponse;
type MerchantOnBoardingResponse = {
    data: any;
    /**
     * - Success/Failure of the transaction
     */
    success: boolean;
};
/** @returns {MultiTenderPaymentMeta} */
declare function MultiTenderPaymentMeta(): MultiTenderPaymentMeta;
type MultiTenderPaymentMeta = {
    current_status?: string;
    extra_meta?: any;
    order_id?: string;
    payment_gateway?: string;
    payment_id?: string;
};
/** @returns {MultiTenderPaymentMethod} */
declare function MultiTenderPaymentMethod(): MultiTenderPaymentMethod;
type MultiTenderPaymentMethod = {
    /**
     * - Payment amount
     */
    amount: number;
    meta?: MultiTenderPaymentMeta;
    mode: string;
    /**
     * - Payment mode name
     */
    name?: string;
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
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size?: number;
    type: string;
};
/** @returns {PaymentCode} */
declare function PaymentCode(): PaymentCode;
type PaymentCode = {
    /**
     * - List of dict that contains payment method data
     */
    codes: Code;
    /**
     * - Name of payment name
     */
    name: string;
    /**
     * - Payment networks
     */
    networks: string;
    /**
     * - Type of payment mode
     */
    types: string;
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
     * - Message
     */
    message: string;
    /**
     * - Unique order id
     */
    order_id: string;
    /**
     * - Payment confirmation updated or not.
     */
    success: boolean;
};
/** @returns {PaymentGatewayConfig} */
declare function PaymentGatewayConfig(): PaymentGatewayConfig;
type PaymentGatewayConfig = {
    /**
     * - Config Type of the aggregator
     */
    config_type: string;
    /**
     * - Enable/ Disable Flag
     */
    is_active?: boolean;
    /**
     * - Api key of the payment aggregator
     */
    key: string;
    /**
     * - Merchant key of the payment aggregator
     */
    merchant_salt: string;
    /**
     * - Secret Key of the payment aggregator
     */
    secret: string;
};
/** @returns {PaymentGatewayConfigRequest} */
declare function PaymentGatewayConfigRequest(): PaymentGatewayConfigRequest;
type PaymentGatewayConfigRequest = {
    aggregator_name?: PaymentGatewayConfig;
    /**
     * - Application Id to which Payment config Mapped
     */
    app_id: string;
    /**
     * - Enable/ Disable Flag
     */
    is_active?: boolean;
};
/** @returns {PaymentGatewayConfigResponse} */
declare function PaymentGatewayConfigResponse(): PaymentGatewayConfigResponse;
type PaymentGatewayConfigResponse = {
    /**
     * - List of all speceific Payment options
     * with their Details.
     */
    aggregators?: any[];
    /**
     * - Application Id to which Payment config Mapped
     */
    app_id: string;
    /**
     * - Response is created or not
     */
    created: boolean;
    /**
     * - List of all included options with their Details.
     */
    display_fields: string[];
    /**
     * - List of all excluded options with their Details.
     */
    excluded_fields: string[];
    /**
     * - Response is successful or not
     */
    success: boolean;
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
    logo_url?: PaymentModeLogo;
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
/** @returns {PaymentObjectListSerializer} */
declare function PaymentObjectListSerializer(): PaymentObjectListSerializer;
type PaymentObjectListSerializer = {
    aggregator_payment_object?: any;
    all_status: string[];
    amount_in_paisa: string;
    application_id: string;
    collected_by: string;
    company_id: string;
    created_on: string;
    currency: string;
    current_status: string;
    id: string;
    modified_on: string;
    payment_gateway: string;
    payment_id?: string;
    payment_mode: string;
    payment_mode_identifier: string;
    refund_object?: any;
    refunded_by: string;
    user_object: any;
};
/** @returns {PaymentOptions} */
declare function PaymentOptions(): PaymentOptions;
type PaymentOptions = {
    /**
     * - Payment options
     */
    payment_option: RootPaymentMode[];
};
/** @returns {PaymentOptionsResponse} */
declare function PaymentOptionsResponse(): PaymentOptionsResponse;
type PaymentOptionsResponse = {
    /**
     * - Payment options
     */
    payment_options: PaymentOptions;
    /**
     * - Response is successful or not
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
/** @returns {PaymentStatusBulkHandlerResponse} */
declare function PaymentStatusBulkHandlerResponse(): PaymentStatusBulkHandlerResponse;
type PaymentStatusBulkHandlerResponse = {
    count?: number;
    data?: PaymentStatusObject[];
    error?: string;
    status: number;
    success: string;
};
/** @returns {PaymentStatusObject} */
declare function PaymentStatusObject(): PaymentStatusObject;
type PaymentStatusObject = {
    merchant_order_id: string;
    payment_object_list?: PaymentObjectListSerializer[];
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
/** @returns {PayoutBankDetails} */
declare function PayoutBankDetails(): PayoutBankDetails;
type PayoutBankDetails = {
    account_holder?: string;
    account_no?: string;
    account_type: string;
    bank_name?: string;
    branch_name?: string;
    city?: string;
    country?: string;
    ifsc_code: string;
    pincode?: number;
    state?: string;
};
/** @returns {PayoutRequest} */
declare function PayoutRequest(): PayoutRequest;
type PayoutRequest = {
    /**
     * - Aggregator Name
     */
    aggregator: string;
    /**
     * - Payout bank details object
     */
    bank_details: PayoutBankDetails;
    /**
     * - Enable/Disable Flag Payout
     */
    is_active: boolean;
    /**
     * - Transafer type
     */
    transfer_type: string;
    /**
     * - Unique Id of Payout
     */
    unique_external_id: string;
    /**
     * - Payout users object
     */
    users: any;
};
/** @returns {PayoutResponse} */
declare function PayoutResponse(): PayoutResponse;
type PayoutResponse = {
    /**
     * - Aggregator Name
     */
    aggregator: string;
    /**
     * - Payout bank_details object
     */
    bank_details: any;
    /**
     * - Created flag
     */
    created: boolean;
    /**
     * - Enable/DIsable Flag Payout
     */
    is_active: boolean;
    /**
     * - Status of payment
     */
    payment_status: string;
    /**
     * - Payout object
     */
    payouts: any;
    /**
     * - Response is successful or not
     */
    success: boolean;
    /**
     * - Transfer type
     */
    transfer_type: string;
    /**
     * - Unique transfer no
     */
    unique_transfer_no: string;
    /**
     * - Users details object
     */
    users: any;
};
/** @returns {PayoutsResponse} */
declare function PayoutsResponse(): PayoutsResponse;
type PayoutsResponse = {
    /**
     * - Customers details object
     */
    customers: any;
    /**
     * - Enable/DIsable Flag Payout
     */
    is_active: boolean;
    /**
     * - Default or not
     */
    is_default: boolean;
    /**
     * - Bank details object
     */
    more_attributes: any;
    /**
     * - Payout aggregator object
     */
    payouts_aggregators: any[];
    /**
     * - Transafer type
     */
    transfer_type: string;
    /**
     * - Display priority of the payment mode
     */
    unique_transfer_no: any;
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
/** @returns {RepaymentDetailsSerialiserPayAll} */
declare function RepaymentDetailsSerialiserPayAll(): RepaymentDetailsSerialiserPayAll;
type RepaymentDetailsSerialiserPayAll = {
    /**
     * - Id of payment gateway
     */
    aggregator_order_id: string;
    /**
     * - Unique Id for the transaction
     */
    aggregator_transaction_id: string;
    /**
     * - Order id created in extension
     */
    extension_order_id: string;
    shipment_details?: RepaymentRequestDetails[];
    /**
     * - Total amount
     */
    total_amount: number;
};
/** @returns {RepaymentRequestDetails} */
declare function RepaymentRequestDetails(): RepaymentRequestDetails;
type RepaymentRequestDetails = {
    /**
     * - Name of Payment Gateway
     */
    aggregator: string;
    /**
     * - Id of payment gateway
     */
    aggregator_order_id: string;
    /**
     * - Unique Id for the transaction
     */
    aggregator_transaction_id: string;
    /**
     * - Amount to paid back
     */
    amount: number;
    /**
     * - Status
     */
    current_status: string;
    /**
     * - Purchase Shipment Id
     */
    fwd_shipment_id: string;
    /**
     * - Merchant's Order Id
     */
    merchant_order_id: string;
    /**
     * - Outstanding details ID
     */
    outstanding_details_id: number;
    /**
     * - Payment Mode
     */
    payment_mode: string;
    /**
     * - Payment Mode Id
     */
    payment_mode_identifier: string;
};
/** @returns {RepaymentResponse} */
declare function RepaymentResponse(): RepaymentResponse;
type RepaymentResponse = {
    data: any;
    /**
     * - Success/Failure of the transaction
     */
    success: boolean;
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
/** @returns {SaveSubscriptionSetupIntentRequest} */
declare function SaveSubscriptionSetupIntentRequest(): SaveSubscriptionSetupIntentRequest;
type SaveSubscriptionSetupIntentRequest = {
    /**
     * - Unique id i.e company:id
     */
    unique_external_id: string;
};
/** @returns {SaveSubscriptionSetupIntentResponse} */
declare function SaveSubscriptionSetupIntentResponse(): SaveSubscriptionSetupIntentResponse;
type SaveSubscriptionSetupIntentResponse = {
    /**
     * - Subscription Payment Method Object
     */
    data: any;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {SetCODForUserRequest} */
declare function SetCODForUserRequest(): SetCODForUserRequest;
type SetCODForUserRequest = {
    /**
     * - Either true or false
     */
    is_active: boolean;
    /**
     * - Merchant User id
     */
    merchant_user_id: string;
    /**
     * - Mobile No. of User
     */
    mobileno: string;
};
/** @returns {SetCODOptionResponse} */
declare function SetCODOptionResponse(): SetCODOptionResponse;
type SetCODOptionResponse = {
    /**
     * - Message
     */
    message: string;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {StatisticsData} */
declare function StatisticsData(): StatisticsData;
type StatisticsData = {
    /**
     * - No of active devices
     */
    active_device_count: number;
    /**
     * - No of inactive devices
     */
    inactive_device_count: number;
};
/** @returns {SubscriptionConfigResponse} */
declare function SubscriptionConfigResponse(): SubscriptionConfigResponse;
type SubscriptionConfigResponse = {
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
/** @returns {SubscriptionPaymentMethodResponse} */
declare function SubscriptionPaymentMethodResponse(): SubscriptionPaymentMethodResponse;
type SubscriptionPaymentMethodResponse = {
    /**
     * - Subscription Payment Method Object
     */
    data: any[];
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {UpdatePayoutRequest} */
declare function UpdatePayoutRequest(): UpdatePayoutRequest;
type UpdatePayoutRequest = {
    /**
     * - Enable/Disable Flag Payout
     */
    is_active: boolean;
    /**
     * - Enable/Disable Default Payout
     */
    is_default: boolean;
    /**
     * - Unique Id of Payout
     */
    unique_external_id: string;
};
/** @returns {UpdatePayoutResponse} */
declare function UpdatePayoutResponse(): UpdatePayoutResponse;
type UpdatePayoutResponse = {
    /**
     * - Enable/DIsable Flag Payout
     */
    is_active: boolean;
    /**
     * - Enable/Disable Default Payout
     */
    is_default: boolean;
    /**
     * - Response is successful or not
     */
    success: boolean;
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
