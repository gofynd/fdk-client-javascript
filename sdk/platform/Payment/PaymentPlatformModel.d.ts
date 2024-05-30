export = PaymentPlatformModel;
/**
 * @typedef PaymentGatewayConfigResponse
 * @property {Object[]} [aggregators] - List of all speceific Payment options
 *   with their Details.
 * @property {string} app_id - Application Id to which Payment config Mapped
 * @property {string[]} excluded_fields - List of all excluded options with their Details.
 * @property {boolean} success - Response is successful or not
 * @property {boolean} created - Response is created or not
 * @property {string[]} display_fields - List of all included options with their Details.
 */
/**
 * @typedef ErrorCodeDescription
 * @property {string} description - Error human understandable description.
 * @property {string} code - Error descrption code.
 * @property {boolean} success - Response is successful or not
 */
/**
 * @typedef PaymentGatewayConfig
 * @property {string} secret - Secret Key of the payment aggregator
 * @property {string} config_type - Config Type of the aggregator
 * @property {boolean} [is_active] - Enable/ Disable Flag
 * @property {string} key - Api key of the payment aggregator
 * @property {string} merchant_salt - Merchant key of the payment aggregator
 */
/**
 * @typedef PaymentGatewayConfigRequest
 * @property {string} app_id - Application Id to which Payment config Mapped
 * @property {boolean} [is_active] - Enable/ Disable Flag
 * @property {PaymentGatewayConfig} [aggregator_name]
 */
/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {string[]} aggregator - List of added payment gateway
 * @property {boolean} success - Response is successful or not
 */
/**
 * @typedef ErrorCodeAndDescription
 * @property {string} description - Error human understandable description.
 * @property {string} code - Error descrption code.
 */
/**
 * @typedef HttpErrorCodeAndResponse
 * @property {ErrorCodeAndDescription} error
 * @property {boolean} success - Response is successful or not
 */
/**
 * @typedef IntentAppErrorList
 * @property {string} [package_name] - Package_name
 * @property {string} [code] - Code
 */
/**
 * @typedef ProductCODData
 * @property {Object} [items] - Item id with its cod availability.
 * @property {Object} [cod_charges] - Cod charges and its allowed limits.
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
 * @property {Object} [logos] - Logos
 */
/**
 * @typedef PaymentModeList
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
 * @property {Object} [logo_url] - Logo
 * @property {string} [card_token] - Card_token
 * @property {string} aggregator_name - Aggregator_name
 * @property {number} [cod_charges] - Cod charges to be applied on order.
 * @property {Object} [product_cod_data] - Product cod configurations.
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
 * @property {string} [aggregator_name] - Dispaly Priority
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
 * @property {string} [account_type] - Account Type Saving/Current
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
 * @property {PayoutCustomer} customers - Customers details object
 * @property {PayoutMoreAttributes} more_attributes - Bank details object
 * @property {boolean} is_default - Default or not
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
 * @typedef PayoutRequest
 * @property {string} aggregator - Aggregator Name
 * @property {Object} users - Payout users object
 * @property {string} unique_external_id - Unique Id of Payout
 * @property {boolean} is_active - Enable/Disable Flag Payout
 * @property {PayoutBankDetails} bank_details - Payout bank details object
 * @property {string} transfer_type - Transafer type
 */
/**
 * @typedef PayoutResponse
 * @property {string} payment_status - Status of payment
 * @property {Object} users - Users details object
 * @property {string} aggregator - Aggregator Name
 * @property {string} unique_transfer_no - Unique transfer no
 * @property {boolean} is_active - Enable/DIsable Flag Payout
 * @property {Object} bank_details - Payout bank_details object
 * @property {boolean} success - Response is successful or not
 * @property {string} transfer_type - Transfer type
 * @property {boolean} created - Created flag
 * @property {Object} payouts - Payout object
 */
/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} is_default - Enable/Disable Default Payout
 * @property {boolean} is_active - Enable/DIsable Flag Payout
 * @property {boolean} success - Response is successful or not
 */
/**
 * @typedef UpdatePayoutRequest
 * @property {boolean} is_default - Enable/Disable Default Payout
 * @property {boolean} is_active - Enable/Disable Flag Payout
 * @property {string} unique_external_id - Unique Id of Payout
 */
/**
 * @typedef DeletePayoutResponse
 * @property {boolean} success - Response is successful or not
 */
/**
 * @typedef SubscriptionPaymentMethodResponse
 * @property {Object[]} data - Subscription Payment Method Object
 * @property {boolean} success - Response is successful or not
 */
/**
 * @typedef DeleteSubscriptionPaymentMethodResponse
 * @property {boolean} success - Success or failure.
 */
/**
 * @typedef SubscriptionConfigResponse
 * @property {string} aggregator - Aggregator Name
 * @property {Object} config - Aggregator Config
 * @property {boolean} success - Response is successful or not
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
 * @typedef RefundAccountResponse
 * @property {boolean} [is_verified_flag]
 * @property {string} message - Response message
 * @property {Object} [data] - Refund account data.
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
 * @property {string} ifsc_code
 * @property {string} account_no
 * @property {string} branch_name
 * @property {string} bank_name
 * @property {string} account_holder
 */
/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {string} order_id
 * @property {BankDetailsForOTP} details
 */
/**
 * @typedef IfscCodeResponse
 * @property {string} branch_name - Branch Name Of Account
 * @property {boolean} [success] - Response is successful or not
 * @property {string} bank_name - Bank Name Of Account
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
 * @property {string} email - EMail of User
 * @property {boolean} is_active - Boolean Flag whether Beneficiary set or not
 * @property {string} [branch_name] - Branch Name Of Account
 * @property {string} address - Address of User
 * @property {string} modified_on - MOdification Date of Beneficiary
 * @property {string} beneficiary_id - Benenficiary Id
 * @property {string} account_no - Account Number
 * @property {string} bank_name - Bank Name Of Account
 * @property {string} [mobile] - MObile no of User
 */
/**
 * @typedef OrderBeneficiaryResponse
 * @property {OrderBeneficiaryDetails[]} [beneficiaries] - All Beneficiaries Of An Order
 * @property {boolean} [show_beneficiary_details] - Show beneficiary details or not.
 */
/**
 * @typedef MultiTenderPaymentMeta
 * @property {Object} [extra_meta]
 * @property {string} [order_id]
 * @property {string} [payment_id]
 * @property {string} [current_status]
 * @property {string} [payment_gateway]
 */
/**
 * @typedef MultiTenderPaymentMethod
 * @property {string} [name] - Payment mode name
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {number} amount - Payment amount
 * @property {string} mode
 */
/**
 * @typedef PaymentConfirmationRequest
 * @property {string} order_id - Unique order id
 * @property {MultiTenderPaymentMethod[]} payment_methods
 */
/**
 * @typedef PaymentConfirmationResponse
 * @property {string} order_id - Unique order id
 * @property {string} message - Message
 * @property {boolean} success - Payment confirmation updated or not.
 */
/**
 * @typedef CODdata
 * @property {number} remaining_limit - Remaining Limit for COD of User
 * @property {string} user_id - Payment mode name
 * @property {boolean} is_active - COD option is active or not
 * @property {number} limit - Total Limit of user
 * @property {number} usages - Used COD limit from the user Limit
 */
/**
 * @typedef GetUserCODLimitResponse
 * @property {CODdata} user_cod_data - User COD Data
 * @property {boolean} success - Response is successful or not
 */
/**
 * @typedef SetCODForUserRequest
 * @property {string} mobileno - Mobile No. of User
 * @property {boolean} is_active - Either true or false
 * @property {string} merchant_user_id - Merchant User id
 */
/**
 * @typedef SetCODOptionResponse
 * @property {string} message - Message
 * @property {boolean} success - Response is successful or not
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
 * @property {StatisticsData} statistics - Message
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
 * @property {EdcDevice} data - Details of the EDC Device that is added
 * @property {boolean} success - Response is successful or not
 */
/**
 * @typedef EdcDeviceDetailsResponse
 * @property {EdcDevice} data - Details of one EDC Device
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
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */
/**
 * @typedef EdcDeviceListResponse
 * @property {EdcDevice[]} items - List of all edc mapped to the application
 *   options with their Details.
 * @property {Page} page - Pagination Response
 * @property {boolean} success - Response is successful or not
 */
/**
 * @typedef PaymentInitializationRequest
 * @property {string} [razorpay_payment_id] - Payment gateway payment id
 * @property {string} [device_id] - EDC machine Unique Identifier
 * @property {string} email - Customer valid email
 * @property {string} customer_id - Payment gateway customer id.
 * @property {string} [vpa] - Customer vpa address
 * @property {string} aggregator - Payment gateway name
 * @property {string} order_id - Payment gateway order id
 * @property {string} currency - Currency code.
 * @property {number} amount - Payable amount.
 * @property {string} contact - Customer valid mobile number
 * @property {number} [timeout] - Payment polling timeout if not recieved response
 * @property {string} merchant_order_id - Unique fynd order id
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
 * @property {string} email - Customer valid email
 * @property {string} customer_id - Payment gateway customer id.
 * @property {string} [vpa] - Customer vpa address
 * @property {string} aggregator - Payment gateway name
 * @property {string} order_id - Payment gateway order id
 * @property {string} currency - Currency code.
 * @property {number} amount - Payable amount.
 * @property {string} contact - Customer valid mobile number
 * @property {string} merchant_order_id - Unique fynd order id
 * @property {string} status - Status of payment.
 * @property {string} method - Payment method
 * @property {string} merchant_transaction_id - Unique fynd transaction id
 */
/**
 * @typedef PaymentStatusUpdateResponse
 * @property {string} [redirect_url] - Redirect url
 * @property {boolean} retry - Response is successful or not.
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
 * @property {boolean} status - Link action status
 * @property {string} message - Message
 */
/**
 * @typedef ResendOrCancelPaymentResponse
 * @property {LinkStatus} data - Data about link action status.
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
 * @property {string} success
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
 * @property {Object} data
 * @property {boolean} success - Success/Failure of the transaction
 */
/**
 * @typedef MerchantOnBoardingRequest
 * @property {string} credit_line_id - Merchant ID at Ajiodhan's end
 * @property {string} aggregator - Payment aggregator name
 * @property {string} app_id - Application id
 * @property {string} user_id - Deadlock/Grimlock user id
 * @property {string} status - Status
 */
/**
 * @typedef MerchantOnBoardingResponse
 * @property {Object} data
 * @property {boolean} success - Success/Failure of the transaction
 */
/**
 * @typedef ValidateCustomerRequest
 * @property {string} phone_number - User mobile number without country code.
 * @property {string} aggregator - Payment gateway name in camel case i.e Simpl, Rupifi
 * @property {string} [payload] - Hashed payload string.
 * @property {Object} [delivery_address] - Extra meta fields.
 * @property {number} transaction_amount_in_paise - Payable amount in paise
 * @property {Object[]} [order_items] - Extra meta fields.
 * @property {Object} [merchant_params] - Extra meta fields.
 * @property {Object} [billing_address] - Extra meta fields.
 */
/**
 * @typedef ValidateCustomerResponse
 * @property {string} message - Error or success message.
 * @property {Object} data - Payment gateway response data
 * @property {boolean} success - Response is successful or not
 */
/**
 * @typedef GetPaymentLinkResponse
 * @property {string} message - Message
 * @property {number} status_code - HTTP status code
 * @property {number} [amount] - Total value of order
 * @property {string} [merchant_name] - Merchant name
 * @property {string} [payment_link_url] - Url of payment link
 * @property {string} [payment_link_current_status] - Status of payment link
 * @property {string} [external_order_id] - Merchant order id
 * @property {number} [polling_timeout] - Polling request timeout
 * @property {boolean} success - Successful or failure
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
 */
/**
 * @typedef ErrorResponse
 * @property {number} status_code - HTTP status code
 * @property {Object} [error]
 * @property {string} message - Message
 * @property {boolean} success - Successful or failure
 */
/**
 * @typedef CreatePaymentLinkMeta
 * @property {string} cart_id
 * @property {string} checkout_mode
 * @property {string} amount
 * @property {string} [assign_card_id]
 * @property {string} pincode
 */
/**
 * @typedef CreatePaymentLinkRequest
 * @property {string} email - Email to which the payment link is to be sent
 * @property {number} amount - Total value of order
 * @property {string} mobile_number - Mobile number to which the payment link is
 *   to be sent
 * @property {string} [description] - Merchant order id
 * @property {CreatePaymentLinkMeta} meta - Meta
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
 * @property {string} networks - Payment networks
 * @property {Code} codes - List of dict that contains payment method data
 * @property {string} name - Name of payment name
 * @property {string} types - Type of payment mode
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
 * @typedef MerchnatPaymentModeResponse
 * @property {string} [message] - Message
 * @property {Object[]} [items] - List of all aggregator and payment mode details.
 * @property {boolean} success - Response is successful or not.
 */
/**
 * @typedef MerchnatPaymentModeRequest
 * @property {Object} [offline] - Details to be updated for online payment configuration.
 * @property {Object} [online] - Details to be updated for offline payment configuration.
 */
/**
 * @typedef OrderDetail
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {number} amount - Amount paid.
 * @property {string} status - Order status created by payment gateway aggregator.
 * @property {string} currency - Currency of the payment.
 * @property {Object} aggregator_order_details - Aggregator order details
 *   generated by the payment gateway.
 * @property {string} aggregator - Name of the payment gateway aggregator.
 */
/**
 * @typedef AddressDetail
 * @property {Object} [google_map_point] - Google map point of location
 * @property {string} [landmark] - Landmark
 * @property {string} phone - Phone number
 * @property {string} country_iso_code - Country's code name e.g. `IN`, `GB`
 * @property {string} area_code - Customer pin/zip code
 * @property {string} country - Country name
 * @property {string} [expire_at] - Address expiry timestamp
 * @property {Object} [geo_location] - Location latitude and logitude
 * @property {string} state - State of the customer
 * @property {string} area - Area details
 * @property {string} g_address_id - Unique address id generated by Fynd platform
 * @property {string} area_code_slug - Area slug code, use pin/zip code if not available
 * @property {string} country_phone_code - Country's phone code
 * @property {string} name - Customer name
 * @property {string} address_type - Address type e.g. home, office
 * @property {string} address - Address details
 * @property {string} [email] - Customer email
 * @property {string} city - City name
 * @property {Object[]} [tags] - Optional address tag
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
 * @property {string} cancel_url - Cancel url sent by Fynd platform at the time
 *   of payment creation
 * @property {number} [amount_refunded]
 * @property {boolean} [captured] - Whether the payment is captured (credited to
 *   merchant account) by payment gateway.
 * @property {string} [created] - Timestamp in epoch
 * @property {string} status - Stautus of the payment
 * @property {string} [kind] - Optional kind of purchase/payment - one time
 *   payment (sale) or subcription. defaults to sale.
 * @property {string} [aggregator_customer_id] - Unique customer id generated by
 *   payment gateway, not required for standard checkout.
 * @property {Object[]} payment_methods - Method of payment
 * @property {AddressDetail} [billing_address] - Billing address
 * @property {number} amount_captured - Amount which is captured or credited to
 *   merchant account
 */
/**
 * @typedef PaymentSessionRequestSerializer
 * @property {Object} [meta] - Meta
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {OrderDetail} order_details - The details of the order.
 * @property {string} status - Status of the payment.
 * @property {string} currency - Currency of the payment.
 * @property {PaymentSessionDetail[]} payment_details - The payment details with
 *   the schema `PaymentSessionDetail`.
 * @property {number} total_amount - Amount paid.
 */
/**
 * @typedef PaymentSessionResponseSerializer
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {Object[]} platform_transaction_details - Platform transaction details.
 * @property {string} status - Status of the payment.
 * @property {string} currency - Currency of the payment.
 * @property {number} total_amount - Amount paid.
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
 * @property {string} [receipt_number] - Unique receipt for refund, generated by
 *   payment gateway, if not available can be utr.
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
 * @property {RefundSessionDetail[]} [refund_details] - Details of the refund
 * @property {number} total_amount - The total amount refunded.
 */
/**
 * @typedef RefundSessionResponseSerializer
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {string} status - The status of the refund.
 * @property {string} currency - The currency of the payment.
 * @property {Object[]} platform_refund_details - Details of the refund
 * @property {number} total_refund_amount - The total amount refunded.
 */
/**
 * @typedef RefundSourcesPriority
 * @property {string} description - Description of refund source
 * @property {number} priority - Priority of refund source, 0 being highest
 * @property {string} source - Source of refund
 */
/**
 * @typedef RefundPriorityResponseSerializer
 * @property {string} configuration - Configuration for merchant or customer
 * @property {boolean} success - Success
 * @property {boolean} apportion - Apportion refund to multiple sources
 * @property {RefundSourcesPriority[]} refund_sources_priority - Refund sources priority
 * @property {string} [message] - Message
 */
/**
 * @typedef RefundPriorityRequestSerializer
 * @property {boolean} apportion - Apportion refund to multiple sources
 * @property {RefundSourcesPriority[]} refund_sources_priority - Refund sources priority
 */
declare class PaymentPlatformModel {
}
declare namespace PaymentPlatformModel {
    export { PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, ProductCODData, CODChargesLimitsResponse, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutCustomer, PayoutMoreAttributes, PayoutAggregator, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, Page, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, PaymentStatusBulkHandlerRequest, PaymentObjectListSerializer, PaymentStatusObject, PaymentStatusBulkHandlerResponse, GetOauthUrlResponse, RevokeOAuthToken, RepaymentRequestDetails, RepaymentDetailsSerialiserPayAll, RepaymentResponse, MerchantOnBoardingRequest, MerchantOnBoardingResponse, ValidateCustomerRequest, ValidateCustomerResponse, GetPaymentLinkResponse, ErrorDescription, ErrorResponse, CreatePaymentLinkMeta, CreatePaymentLinkRequest, CreatePaymentLinkResponse, PollingPaymentLinkResponse, CancelOrResendPaymentLinkRequest, ResendPaymentLinkResponse, CancelPaymentLinkResponse, Code, PaymentCode, GetPaymentCode, GetPaymentCodeResponse, MerchnatPaymentModeResponse, MerchnatPaymentModeRequest, OrderDetail, AddressDetail, PaymentSessionDetail, PaymentSessionRequestSerializer, PaymentSessionResponseSerializer, RefundSessionDetail, RefundSessionRequestSerializer, RefundSessionResponseSerializer, RefundSourcesPriority, RefundPriorityResponseSerializer, RefundPriorityRequestSerializer };
}
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
     * - List of all excluded options with their Details.
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
     * - List of all included options with their Details.
     */
    display_fields: string[];
};
/** @returns {ErrorCodeDescription} */
declare function ErrorCodeDescription(): ErrorCodeDescription;
type ErrorCodeDescription = {
    /**
     * - Error human understandable description.
     */
    description: string;
    /**
     * - Error descrption code.
     */
    code: string;
    /**
     * - Response is successful or not
     */
    success: boolean;
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
};
/** @returns {PaymentGatewayConfigRequest} */
declare function PaymentGatewayConfigRequest(): PaymentGatewayConfigRequest;
type PaymentGatewayConfigRequest = {
    /**
     * - Application Id to which Payment config Mapped
     */
    app_id: string;
    /**
     * - Enable/ Disable Flag
     */
    is_active?: boolean;
    aggregator_name?: PaymentGatewayConfig;
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
    code: string;
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
    /**
     * - Cod charges and its allowed limits.
     */
    cod_charges?: any;
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
    /**
     * - Logos
     */
    logos?: any;
};
/** @returns {PaymentModeList} */
declare function PaymentModeList(): PaymentModeList;
type PaymentModeList = {
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
    /**
     * - Logo
     */
    logo_url?: any;
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
    /**
     * - Product cod configurations.
     */
    product_cod_data?: any;
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
     * - Dispaly Priority
     */
    aggregator_name?: string;
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
     * - Account Type Saving/Current
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
    /**
     * - Customers details object
     */
    customers: PayoutCustomer;
    /**
     * - Bank details object
     */
    more_attributes: PayoutMoreAttributes;
    /**
     * - Default or not
     */
    is_default: boolean;
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
/** @returns {PayoutRequest} */
declare function PayoutRequest(): PayoutRequest;
type PayoutRequest = {
    /**
     * - Aggregator Name
     */
    aggregator: string;
    /**
     * - Payout users object
     */
    users: any;
    /**
     * - Unique Id of Payout
     */
    unique_external_id: string;
    /**
     * - Enable/Disable Flag Payout
     */
    is_active: boolean;
    /**
     * - Payout bank details object
     */
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
    payment_status: string;
    /**
     * - Users details object
     */
    users: any;
    /**
     * - Aggregator Name
     */
    aggregator: string;
    /**
     * - Unique transfer no
     */
    unique_transfer_no: string;
    /**
     * - Enable/DIsable Flag Payout
     */
    is_active: boolean;
    /**
     * - Payout bank_details object
     */
    bank_details: any;
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
    /**
     * - Payout object
     */
    payouts: any;
};
/** @returns {UpdatePayoutResponse} */
declare function UpdatePayoutResponse(): UpdatePayoutResponse;
type UpdatePayoutResponse = {
    /**
     * - Enable/Disable Default Payout
     */
    is_default: boolean;
    /**
     * - Enable/DIsable Flag Payout
     */
    is_active: boolean;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {UpdatePayoutRequest} */
declare function UpdatePayoutRequest(): UpdatePayoutRequest;
type UpdatePayoutRequest = {
    /**
     * - Enable/Disable Default Payout
     */
    is_default: boolean;
    /**
     * - Enable/Disable Flag Payout
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
/** @returns {DeleteSubscriptionPaymentMethodResponse} */
declare function DeleteSubscriptionPaymentMethodResponse(): DeleteSubscriptionPaymentMethodResponse;
type DeleteSubscriptionPaymentMethodResponse = {
    /**
     * - Success or failure.
     */
    success: boolean;
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
/** @returns {RefundAccountResponse} */
declare function RefundAccountResponse(): RefundAccountResponse;
type RefundAccountResponse = {
    is_verified_flag?: boolean;
    /**
     * - Response message
     */
    message: string;
    /**
     * - Refund account data.
     */
    data?: any;
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
    ifsc_code: string;
    account_no: string;
    branch_name: string;
    bank_name: string;
    account_holder: string;
};
/** @returns {AddBeneficiaryDetailsOTPRequest} */
declare function AddBeneficiaryDetailsOTPRequest(): AddBeneficiaryDetailsOTPRequest;
type AddBeneficiaryDetailsOTPRequest = {
    order_id: string;
    details: BankDetailsForOTP;
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
     * - EMail of User
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
     * - MOdification Date of Beneficiary
     */
    modified_on: string;
    /**
     * - Benenficiary Id
     */
    beneficiary_id: string;
    /**
     * - Account Number
     */
    account_no: string;
    /**
     * - Bank Name Of Account
     */
    bank_name: string;
    /**
     * - MObile no of User
     */
    mobile?: string;
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
/** @returns {MultiTenderPaymentMeta} */
declare function MultiTenderPaymentMeta(): MultiTenderPaymentMeta;
type MultiTenderPaymentMeta = {
    extra_meta?: any;
    order_id?: string;
    payment_id?: string;
    current_status?: string;
    payment_gateway?: string;
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
    order_id: string;
    /**
     * - Message
     */
    message: string;
    /**
     * - Payment confirmation updated or not.
     */
    success: boolean;
};
/** @returns {CODdata} */
declare function CODdata(): CODdata;
type CODdata = {
    /**
     * - Remaining Limit for COD of User
     */
    remaining_limit: number;
    /**
     * - Payment mode name
     */
    user_id: string;
    /**
     * - COD option is active or not
     */
    is_active: boolean;
    /**
     * - Total Limit of user
     */
    limit: number;
    /**
     * - Used COD limit from the user Limit
     */
    usages: number;
};
/** @returns {GetUserCODLimitResponse} */
declare function GetUserCODLimitResponse(): GetUserCODLimitResponse;
type GetUserCODLimitResponse = {
    /**
     * - User COD Data
     */
    user_cod_data: CODdata;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {SetCODForUserRequest} */
declare function SetCODForUserRequest(): SetCODForUserRequest;
type SetCODForUserRequest = {
    /**
     * - Mobile No. of User
     */
    mobileno: string;
    /**
     * - Either true or false
     */
    is_active: boolean;
    /**
     * - Merchant User id
     */
    merchant_user_id: string;
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
    /**
     * - Message
     */
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
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    type: string;
    size?: number;
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
    email: string;
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
    aggregator: string;
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
     * - Customer valid mobile number
     */
    contact: string;
    /**
     * - Payment polling timeout if not recieved response
     */
    timeout?: number;
    /**
     * - Unique fynd order id
     */
    merchant_order_id: string;
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
    email: string;
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
    aggregator: string;
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
     * - Customer valid mobile number
     */
    contact: string;
    /**
     * - Unique fynd order id
     */
    merchant_order_id: string;
    /**
     * - Status of payment.
     */
    status: string;
    /**
     * - Payment method
     */
    method: string;
    /**
     * - Unique fynd transaction id
     */
    merchant_transaction_id: string;
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
    retry: boolean;
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
    status: boolean;
    /**
     * - Message
     */
    message: string;
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
    success: string;
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
    data: any;
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
     * - Deadlock/Grimlock user id
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
    data: any;
    /**
     * - Success/Failure of the transaction
     */
    success: boolean;
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
    /**
     * - Extra meta fields.
     */
    delivery_address?: any;
    /**
     * - Payable amount in paise
     */
    transaction_amount_in_paise: number;
    /**
     * - Extra meta fields.
     */
    order_items?: any[];
    /**
     * - Extra meta fields.
     */
    merchant_params?: any;
    /**
     * - Extra meta fields.
     */
    billing_address?: any;
};
/** @returns {ValidateCustomerResponse} */
declare function ValidateCustomerResponse(): ValidateCustomerResponse;
type ValidateCustomerResponse = {
    /**
     * - Error or success message.
     */
    message: string;
    /**
     * - Payment gateway response data
     */
    data: any;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {GetPaymentLinkResponse} */
declare function GetPaymentLinkResponse(): GetPaymentLinkResponse;
type GetPaymentLinkResponse = {
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
     * - Polling request timeout
     */
    polling_timeout?: number;
    /**
     * - Successful or failure
     */
    success: boolean;
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
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    /**
     * - HTTP status code
     */
    status_code: number;
    error?: any;
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
    amount: string;
    assign_card_id?: string;
    pincode: string;
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
     * - Merchant order id
     */
    description?: string;
    /**
     * - Meta
     */
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
    /**
     * - Payment networks
     */
    networks: string;
    /**
     * - List of dict that contains payment method data
     */
    codes: Code;
    /**
     * - Name of payment name
     */
    name: string;
    /**
     * - Type of payment mode
     */
    types: string;
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
/** @returns {MerchnatPaymentModeResponse} */
declare function MerchnatPaymentModeResponse(): MerchnatPaymentModeResponse;
type MerchnatPaymentModeResponse = {
    /**
     * - Message
     */
    message?: string;
    /**
     * - List of all aggregator and payment mode details.
     */
    items?: any[];
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {MerchnatPaymentModeRequest} */
declare function MerchnatPaymentModeRequest(): MerchnatPaymentModeRequest;
type MerchnatPaymentModeRequest = {
    /**
     * - Details to be updated for online payment configuration.
     */
    offline?: any;
    /**
     * - Details to be updated for offline payment configuration.
     */
    online?: any;
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
    /**
     * - Aggregator order details
     * generated by the payment gateway.
     */
    aggregator_order_details: any;
    /**
     * - Name of the payment gateway aggregator.
     */
    aggregator: string;
};
/** @returns {AddressDetail} */
declare function AddressDetail(): AddressDetail;
type AddressDetail = {
    /**
     * - Google map point of location
     */
    google_map_point?: any;
    /**
     * - Landmark
     */
    landmark?: string;
    /**
     * - Phone number
     */
    phone: string;
    /**
     * - Country's code name e.g. `IN`, `GB`
     */
    country_iso_code: string;
    /**
     * - Customer pin/zip code
     */
    area_code: string;
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
    area: string;
    /**
     * - Unique address id generated by Fynd platform
     */
    g_address_id: string;
    /**
     * - Area slug code, use pin/zip code if not available
     */
    area_code_slug: string;
    /**
     * - Country's phone code
     */
    country_phone_code: string;
    /**
     * - Customer name
     */
    name: string;
    /**
     * - Address type e.g. home, office
     */
    address_type: string;
    /**
     * - Address details
     */
    address: string;
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
     * - Cancel url sent by Fynd platform at the time
     * of payment creation
     */
    cancel_url: string;
    amount_refunded?: number;
    /**
     * - Whether the payment is captured (credited to
     * merchant account) by payment gateway.
     */
    captured?: boolean;
    /**
     * - Timestamp in epoch
     */
    created?: string;
    /**
     * - Stautus of the payment
     */
    status: string;
    /**
     * - Optional kind of purchase/payment - one time
     * payment (sale) or subcription. defaults to sale.
     */
    kind?: string;
    /**
     * - Unique customer id generated by
     * payment gateway, not required for standard checkout.
     */
    aggregator_customer_id?: string;
    /**
     * - Method of payment
     */
    payment_methods: any[];
    /**
     * - Billing address
     */
    billing_address?: AddressDetail;
    /**
     * - Amount which is captured or credited to
     * merchant account
     */
    amount_captured: number;
};
/** @returns {PaymentSessionRequestSerializer} */
declare function PaymentSessionRequestSerializer(): PaymentSessionRequestSerializer;
type PaymentSessionRequestSerializer = {
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
};
/** @returns {PaymentSessionResponseSerializer} */
declare function PaymentSessionResponseSerializer(): PaymentSessionResponseSerializer;
type PaymentSessionResponseSerializer = {
    /**
     * - Global identifier of the entity (e.g. order, cart
     * etc.) against which payment_session was initiated. This is generated by
     * Fynd payments platform and is unique.
     */
    gid: string;
    /**
     * - Platform transaction details.
     */
    platform_transaction_details: any[];
    /**
     * - Status of the payment.
     */
    status: string;
    /**
     * - Currency of the payment.
     */
    currency: string;
    /**
     * - Amount paid.
     */
    total_amount: number;
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
     * - Unique receipt for refund, generated by
     * payment gateway, if not available can be utr.
     */
    receipt_number?: string;
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
    /**
     * - Details of the refund
     */
    refund_details?: RefundSessionDetail[];
    /**
     * - The total amount refunded.
     */
    total_amount: number;
};
/** @returns {RefundSessionResponseSerializer} */
declare function RefundSessionResponseSerializer(): RefundSessionResponseSerializer;
type RefundSessionResponseSerializer = {
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
     * - Details of the refund
     */
    platform_refund_details: any[];
    /**
     * - The total amount refunded.
     */
    total_refund_amount: number;
};
/** @returns {RefundSourcesPriority} */
declare function RefundSourcesPriority(): RefundSourcesPriority;
type RefundSourcesPriority = {
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
     * - Apportion refund to multiple sources
     */
    apportion: boolean;
    /**
     * - Refund sources priority
     */
    refund_sources_priority: RefundSourcesPriority[];
};
