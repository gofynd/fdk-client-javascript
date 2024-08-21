export = PaymentApplicationModel;
/**
 * @typedef AggregatorConfigDetail
 * @property {boolean} [sdk] - SDK details.
 * @property {string} secret - Masked payment gateway api secret.
 * @property {string} [api] - Payment gateway api endpoint.
 * @property {string} [pin] - Masked pin.
 * @property {string} config_type - Fynd or self payment gateway.
 * @property {string} [merchant_key] - Unique merchant key.
 * @property {string} [verify_api] - Payment gateway verify payment api endpoint.
 * @property {string} key - Payment gateway api key.
 * @property {string} [user_id] - Registered User id.
 * @property {string} [merchant_id] - Unique merchant id.
 */
/**
 * @typedef AggregatorsConfigDetailResponse
 * @property {boolean} success - Api response was successful or not.
 * @property {AggregatorConfigDetail} [razorpay]
 * @property {AggregatorConfigDetail} [juspay]
 * @property {AggregatorConfigDetail} [simpl]
 * @property {AggregatorConfigDetail} [payumoney]
 * @property {AggregatorConfigDetail} [rupifi]
 * @property {AggregatorConfigDetail} [mswipe]
 * @property {AggregatorConfigDetail} [stripe]
 * @property {AggregatorConfigDetail} [ccavenue]
 * @property {string} env - Environment i.e Live or Test.
 */
/**
 * @typedef ErrorCodeAndDescription
 * @property {string} code - Error description code.
 * @property {string} description - Error human understandable description.
 */
/**
 * @typedef HttpErrorCodeAndResponse
 * @property {ErrorCodeAndDescription} [error]
 * @property {boolean} success - Response is successful or not.
 */
/**
 * @typedef AttachCardRequest
 * @property {string} [nickname] - Nickname of the card holder.
 * @property {boolean} [refresh] - Refresh cache flag.
 * @property {string} card_id - Card token of payment gateway.
 * @property {string} [name_on_card] - Name of the card holder.
 */
/**
 * @typedef AttachCardsResponse
 * @property {Object} data - List of cards of customer.
 * @property {boolean} success - Response is successful or not.
 * @property {string} [message] - Human readable message.
 */
/**
 * @typedef CardPaymentGateway
 * @property {string} [api] - Payment gateway CARD api endpoint.
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
 * @property {string} [card_number] - Card number mentioned on the card.
 * @property {string} [card_name] - Name mentioned on the card.
 * @property {string} [card_type] - Type of the card.
 * @property {string} [card_brand_image] - Brand image on the card.
 * @property {string} [card_reference] - Card reference.
 * @property {string} [card_issuer] - Issuer of the card.
 * @property {string} [card_brand] - Brand of the card.
 * @property {boolean} [expired] - Card expiry.
 * @property {boolean} [compliant_with_tokenisation_guidelines] - Whether card
 *   is tokenized or not.
 * @property {string} [card_isin] - International Securities Identification
 *   Number for the card.
 * @property {number} [exp_year] - Card's expiration year.
 * @property {string} [nickname] - User-defined name for the card.
 * @property {string} aggregator_name - Name of the payment aggregator.
 * @property {string} [card_fingerprint] - Unique fingerprint of the card for
 *   identification.
 * @property {string} [card_token] - Encrypted token representing the card.
 * @property {number} [exp_month] - Card's expiration month.
 * @property {string} [card_id] - Unique identifier for the card within the system.
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
 * @property {string} aggregator - Payment gateway name in camelcase i.e Simple, Rupifi.
 * @property {number} transaction_amount_in_paise - Payable amount in paise.
 * @property {string} phone_number - User mobile number without country code.
 * @property {Object} [billing_address] - Extra meta fields.
 * @property {Object[]} [order_items] - Extra meta fields.
 * @property {string} [payload] - Hashed payload string.
 * @property {Object} [merchant_params] - Extra meta fields.
 * @property {Object} [delivery_address] - Extra meta fields.
 */
/**
 * @typedef ValidateCustomerResponse
 * @property {Object} [data] - Payment gateway response data.
 * @property {boolean} success - Response is successful or not.
 * @property {string} message - Error or success message.
 */
/**
 * @typedef ChargeCustomerRequest
 * @property {boolean} [verified] - Already Verified flag from payment gateway i.e Mswipe.
 * @property {string} aggregator - Payment gateway name i.e Simpl, Mswipe.
 * @property {string} order_id - Unique order id.
 * @property {string} [transaction_token] - Transaction token of payment gateway.
 * @property {number} amount - Chargeable amount of order.
 */
/**
 * @typedef ChargeCustomerResponse
 * @property {string} status - Status of charged payment.
 * @property {string} [cart_id] - Cart id of customer.
 * @property {boolean} success - Response is successful or not.
 * @property {string} aggregator - Payment gateway name i.e Simpl, Mswipe.
 * @property {string} message - Human readable message.
 * @property {string} order_id - Unique order id.
 * @property {string} [delivery_address_id] - Delivery address id of customer.
 */
/**
 * @typedef PaymentInitializationRequest
 * @property {string} [razorpay_payment_id] - Payment gateway payment id.
 * @property {string} method - Payment method.
 * @property {string} [device_id] - EDC machine Unique Identifier.
 * @property {string} aggregator - Payment gateway name.
 * @property {string} customer_id - Payment gateway customer id.
 * @property {string} contact - Customer valid mobile number.
 * @property {string} merchant_order_id - Unique fynd order id.
 * @property {string} [vpa] - Customer vpa address.
 * @property {string} order_id - Payment gateway order id.
 * @property {string} currency - Currency code.
 * @property {number} [timeout] - Payment polling timeout if not received response.
 * @property {number} amount - Payable amount.
 * @property {string} email - Customer valid email.
 */
/**
 * @typedef PaymentInitializationResponse
 * @property {string} [status] - Status of payment.
 * @property {string} [razorpay_payment_id] - Payment id.
 * @property {string} [aggregator_order_id] - Payment order id.
 * @property {string} method - Payment method.
 * @property {boolean} success - Response is successful or not.
 * @property {string} [upi_poll_url] - UPI poll url.
 * @property {string} [virtual_id] - Payment virtual address.
 * @property {string} [device_id] - EDC machine Unique Identifier.
 * @property {string} polling_url - Polling url.
 * @property {string} aggregator - Payment gateway name.
 * @property {string} merchant_order_id - Order id.
 * @property {string} [customer_id] - Payment gateway customer id.
 * @property {string} [vpa] - Customer vpa address.
 * @property {string} [currency] - Currency code.
 * @property {number} [timeout] - Timeout.
 * @property {number} [amount] - Payable amount.
 * @property {string} [bqr_image] - Bharat qr image url.
 */
/**
 * @typedef PaymentStatusUpdateRequest
 * @property {string} [status] - Status of payment.
 * @property {string} [merchant_transaction_id] - Unique fynd transaction id.
 * @property {string} method - Payment method.
 * @property {string} [device_id] - EDC machine Unique Identifier.
 * @property {string} aggregator - Payment gateway name.
 * @property {string} [customer_id] - Payment gateway customer id.
 * @property {string} [contact] - Customer valid mobile number.
 * @property {string} merchant_order_id - Unique fynd order id.
 * @property {string} [vpa] - Customer vpa address.
 * @property {string} [order_id] - Payment gateway order id.
 * @property {string} [currency] - Currency code.
 * @property {number} [amount] - Payable amount.
 * @property {string} [email] - Customer valid email.
 */
/**
 * @typedef PaymentStatusUpdateResponse
 * @property {string} status - Payment status.
 * @property {boolean} [success] - Response is successful or not.
 * @property {boolean} retry - Response is successful or not.
 * @property {string} [redirect_url] - Redirect url.
 * @property {string} aggregator_name - Payment gateway name.
 */
/**
 * @typedef IntentAppErrorList
 * @property {string} [code] - Code of the intent App.
 * @property {string} [package_name] - Package Name of the intent App.
 */
/**
 * @typedef PaymentModeLogo
 * @property {string} large - Large Logo.
 * @property {string} small - Small Logo.
 */
/**
 * @typedef IntentApp
 * @property {string} [code] - Code of the intent App.
 * @property {string} [package_name] - Package Name of the intent App.
 * @property {PaymentModeLogo} [logos]
 * @property {string} [display_name] - Display Name of the intent App.
 */
/**
 * @typedef PaymentModeList
 * @property {string} [card_number] - Card number mentioned on the card.
 * @property {string} [merchant_code] - Unique code identifying the merchant.
 * @property {string} [card_reference] - Reference identifier for the card.
 * @property {string} [card_issuer] - Issuing bank or institution of the card.
 * @property {boolean} [compliant_with_tokenisation_guidelines] - Indicates
 *   compliance with tokenization guidelines.
 * @property {string} [code] - General code for identifying a transaction or status.
 * @property {number} [cod_limit] - Limit for Cash on Delivery (COD) transactions.
 * @property {boolean} [intent_flow] - Flow or process intended for the transaction.
 * @property {string} [fynd_vpa] - Virtual Payment Address (VPA) used by Fynd.
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list] - List of error
 *   dictionaries related to intent app.
 * @property {string} aggregator_name - Name of the payment aggregator.
 * @property {string} [card_fingerprint] - Unique fingerprint of the card for
 *   identification.
 * @property {string[]} [intent_app_error_list] - List of errors associated with
 *   the intent app.
 * @property {IntentApp[]} [intent_app] - Application intended for handling the
 *   transaction.
 * @property {boolean} [expired] - Indicates whether the card is expired.
 * @property {number} [retry_count] - Number of retry attempts.
 * @property {number} [exp_year] - Card's expiration year.
 * @property {number} [exp_month] - Card's expiration month.
 * @property {string} [card_id] - Unique identifier for the card within the system.
 * @property {number} [remaining_limit] - Remaining available limit on the card.
 * @property {number} [display_priority] - Priority of display in the user interface.
 * @property {string} [card_brand] - Brand of the card (e.g., Visa, MasterCard).
 * @property {number} [cod_limit_per_order] - Maximum limit per order for COD
 *   transactions.
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [nickname] - User-defined name for the card.
 * @property {string} [card_name] - Name printed on the card.
 * @property {string} [card_type] - Type of the card (e.g., debit, credit).
 * @property {string} [card_brand_image] - Image representing the card brand.
 * @property {string} [display_name] - Display name for the card in the user interface.
 * @property {string} [card_isin] - International Securities Identification
 *   Number for the card.
 * @property {number} [timeout] - Timeout duration for transactions.
 * @property {string} [card_token] - Encrypted token representing the card.
 * @property {string} [name] - User's name.
 * @property {Object} [meta] - Payment methods meta.
 */
/**
 * @typedef RootPaymentMode
 * @property {boolean} [is_pay_by_card_pl] - This flag will be true in case of
 *   Payment link payment through card.
 * @property {boolean} [add_card_enabled] - Anonymous card flag.
 * @property {number} display_priority - Display Priority.
 * @property {string} display_name - Payment mode display name.
 * @property {PaymentModeList[]} [list] - Payment mode.
 * @property {boolean} [save_card] - Card save or not.
 * @property {string} [aggregator_name] - Display Priority.
 * @property {string} name - Payment mode name.
 * @property {boolean} [anonymous_enable] - Anonymous card flag.
 */
/**
 * @typedef AggregatorRoute
 * @property {Object} [data] - Details about aggregator route.
 * @property {Object} [payment_flow_data] - Payment_flow_data.
 * @property {string} [payment_flow] - Payment_flow.
 * @property {string} [api_link] - API link of the aggregator.
 */
/**
 * @typedef PaymentDefaultSelection
 * @property {string} [mode] - Default Selection Payment Mode.
 * @property {string} [identifier] - Identifier for Payment Mode.
 * @property {boolean} [skip] - Decide if the default payment mode will skip the
 *   payment options page altogether or just be preferred on the Frontend.
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
 * @property {RootPaymentMode[]} payment_option - Payment options.
 * @property {PaymentFlow} payment_flows
 * @property {PaymentDefaultSelection} [payment_default_selection]
 */
/**
 * @typedef AdvanceObject
 * @property {boolean} [is_active] - Is Advance Payment active.
 * @property {number} [amount] - Amount for Payment Breakdown.
 * @property {string} [time_unit] - Time unit for refunds.
 * @property {string} [description] - The description for Advance Payment (user
 *   configured).
 * @property {string} [display_name] - The display name for Advance payment.
 * @property {string} [prepayment_type] - Type of prepayment value.
 * @property {number} [prepayment_value] - Value for prepayment in advance payment.
 * @property {string} [cancellation_type] - Type of cancellation.
 * @property {number} [refund_time_limit] - Time limit for processing refund.
 * @property {string[]} [all_prepayment_type] - All available types of prepayment.
 * @property {boolean} [allow_custom_advance_amount] - Is custom advance amount allowed?.
 */
/**
 * @typedef SplitObject
 * @property {number} [total_number_of_splits] - Maximum amount of splits allowed.
 * @property {number} [splits_remaining] - Number of splits remaining.
 * @property {number} [amount_remaining] - Amount pending to be paid.
 */
/**
 * @typedef AdvancePaymentObject
 * @property {string} [name] - Name of Advance Payment Mode.
 * @property {number} [display_priority] - Display Priority for Payment Option.
 * @property {number} [payment_mode_id] - Payment Mode ID for Advance Payment Option.
 * @property {string} [display_name] - Display name for Advance Payment Mode.
 * @property {PaymentModeList[]} [list] - Payment mode.
 * @property {SplitObject} [split]
 * @property {AdvanceObject} [advance]
 */
/**
 * @typedef PaymentModeRouteResponse
 * @property {PaymentOptionAndFlow} payment_options
 * @property {boolean} success - Response is successful or not.
 * @property {Object} [payment_breakup] - Payment Breakup for advance payment.
 * @property {AdvancePaymentObject[]} [advance_payment] - Advance Payment Array.
 */
/**
 * @typedef WalletLinkRequestSchema
 * @property {string} aggregator - Aggregator Name.
 * @property {string} mobile - Mobile Number for Wallet.
 * @property {string} wallet_code - Wallet Code.
 */
/**
 * @typedef WalletVerifyRequestSchema
 * @property {string} aggregator - Aggregator Name.
 * @property {string} link_token - Token for wallet linking.
 * @property {number} otp - OTP received for wallet linking.
 */
/**
 * @typedef WalletDelinkRequestSchema
 * @property {string} aggregator - Aggregator Name.
 * @property {string} wallet_code - Wallet Code.
 */
/**
 * @typedef WalletResponseSchema
 * @property {Object} data - Response received from aggregator.
 * @property {boolean} success - Success/Failure of the API call.
 */
/**
 * @typedef RupifiBannerData
 * @property {string} [status] - Rupifi KYC status.
 * @property {string} [kyc_url] - Rupifi KYC banner url.
 */
/**
 * @typedef RupifiBannerResponse
 * @property {RupifiBannerData} data
 * @property {boolean} success - Successful or not.
 */
/**
 * @typedef EpaylaterBannerData
 * @property {string} [status] - Epaylater KYC status.
 * @property {string} [message] - EPayLater message.
 * @property {boolean} display - Need to display banner or not.
 */
/**
 * @typedef EpaylaterBannerResponse
 * @property {EpaylaterBannerData} data
 * @property {boolean} success - Successful or not.
 */
/**
 * @typedef ResendOrCancelPaymentRequest
 * @property {string} order_id - Unique order id.
 * @property {string} [device_id] - EDC machine Unique Identifier.
 * @property {string} request_type - Either resend or cancel.
 */
/**
 * @typedef LinkStatus
 * @property {string} status - Link action status.
 * @property {string} message - Message.
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
 * @property {string} [returntype] - Return Type of API.
 * @property {string} base64_html - Base64 encoded html string.
 */
/**
 * @typedef renderHTMLResponse
 * @property {string} html - HTML string.
 */
/**
 * @typedef ValidateVPARequest
 * @property {string} upi_vpa - UPI ID.
 * @property {string} [aggregator] - Aggregator slug.
 */
/**
 * @typedef ValidateUPI
 * @property {string} status - VALID or INVALID.
 * @property {string} customer_name - Customer Bank.
 * @property {boolean} is_valid - Boolean is true or false.
 * @property {string} upi_vpa - UPI ID.
 */
/**
 * @typedef ValidateVPAResponse
 * @property {ValidateUPI} data
 * @property {boolean} success - Response is successful or not.
 */
/**
 * @typedef CardDetails
 * @property {boolean} status - Current status of the card.
 * @property {string} country - Country where the card was issued.
 * @property {string} bank_code - Code identifying the bank.
 * @property {string} id - Unique identifier for the record.
 * @property {string} [card_exp_year] - Card's expiration year.
 * @property {string} card_brand - Brand of the card (e.g., Visa, MasterCard).
 * @property {string} type - General type of the card (e.g., debit, credit).
 * @property {string} card_sub_type - Sub-type of the card (e.g., Platinum, Gold).
 * @property {boolean} is_domestic_card - Indicates whether the card is domestic.
 * @property {string} [name_on_card] - Name of the cardholder.
 * @property {string} [card_exp_month] - Card's expiration month.
 * @property {string} extended_card_type - Extended type of the card, providing
 *   more specific classification.
 * @property {string} card_object - Object representation of the card.
 * @property {string} [card_token] - Encrypted token representing the card.
 * @property {string} [user] - User associated with the card.
 * @property {string} bank - Bank associated with the card.
 */
/**
 * @typedef CardDetailsResponse
 * @property {CardDetails} data
 * @property {boolean} success - Response is successful or not.
 */
/**
 * @typedef TransferItemsDetails
 * @property {number} id - Id of the transfer item.
 * @property {string} [display_name] - Beneficiary Display Name.
 * @property {string} logo_large - Beneficiary large Logo.
 * @property {string} logo_small - Beneficiary small Logo.
 * @property {string} name - Beneficiary Name.
 */
/**
 * @typedef TransferModeDetails
 * @property {TransferItemsDetails[]} [items] - Beneficiary Mode Items.
 * @property {string} display_name - Beneficiary Mode Name.
 */
/**
 * @typedef TransferModeResponse
 * @property {TransferModeDetails[]} data - Response Object.
 */
/**
 * @typedef UpdateRefundTransferModeRequest
 * @property {boolean} enable - True for enabling the Transfer Mode.
 * @property {string} transfer_mode - Transfer Mode of the Beneficiary to be added.
 */
/**
 * @typedef UpdateRefundTransferModeResponse
 * @property {boolean} [success] - Response is successful or not.
 */
/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} modified_on - MOdification Date of Beneficiary.
 * @property {string} account_no - Account Number.
 * @property {string} [mobile] - MObile no of User.
 * @property {string} bank_name - Bank Name Of Account.
 * @property {string} ifsc_code - Ifsc Code Of Account.
 * @property {boolean} is_active - Boolean Flag whether Beneficiary set or not.
 * @property {string} beneficiary_id - Beneficiary Id.
 * @property {string} account_holder - Account Holder Name.
 * @property {string} email - EMail of User.
 * @property {string} [delights_user_name] - User Id Who filled the Beneficiary.
 * @property {number} id - Id of the Order Beneficiary.
 * @property {string} transfer_mode - Transfer Mode Of Account.
 * @property {string} [branch_name] - Branch Name Of Account.
 * @property {string} created_on - Creation Date of Beneficiary.
 * @property {string} subtitle - SHort Title Of Account.
 * @property {string} [comment] - Remarks.
 * @property {string} address - Address of User.
 * @property {string} title - Title Of Account.
 * @property {string} display_name - Display Name Of Account.
 */
/**
 * @typedef OrderBeneficiaryResponse
 * @property {boolean} [show_beneficiary_details] - Show beneficiary details or not.
 * @property {OrderBeneficiaryDetails[]} [beneficiaries] - All Beneficiaries Of An Order.
 */
/**
 * @typedef NotFoundResourceError
 * @property {string} code - Bad Request Data.
 * @property {string} description - Not Found.
 * @property {boolean} success - Response is successful or not.
 */
/**
 * @typedef IfscCodeResponse
 * @property {string} branch_name - Branch Name Of Account.
 * @property {boolean} [success] - Response is successful or not.
 * @property {string} bank_name - Bank Name Of Account.
 */
/**
 * @typedef ErrorCodeDescription
 * @property {string} code - Error description code.
 * @property {string} description - Error human understandable description.
 * @property {boolean} success - Response is successful or not.
 */
/**
 * @typedef AddBeneficiaryViaOtpVerificationRequest
 * @property {string} request_id - Request id.
 * @property {string} hash_key - Hash key of the beneficiary Id.
 * @property {string} otp - Otp sent to the given Mobile No.
 */
/**
 * @typedef AddBeneficiaryViaOtpVerificationResponse
 * @property {boolean} [success] - Response is successful or not.
 * @property {string} message - Aggregator Response of beneficiary.
 */
/**
 * @typedef WrongOtpError
 * @property {boolean} is_verified_flag - Verified flag.
 * @property {string} description - Wrong OTP Code.
 * @property {string} success - Response is successful or not.
 */
/**
 * @typedef BeneficiaryModeDetails
 * @property {string} account_no - Account Number of the Account Holder.
 * @property {string} [address] - Address of the User.
 * @property {string} mobile - Mobile Number of the User.
 * @property {string} bank_name - Bank Name of the Account.
 * @property {string} [comment] - Remarks added by The user.
 * @property {string} ifsc_code - Ifsc Code of the Account.
 * @property {string} [vpa] - VPA of the Account.
 * @property {string} branch_name - Branch Name of the Account.
 * @property {string} account_holder - Name of the Account Holder.
 * @property {string} [wallet] - Wallet of the Account.
 * @property {string} email - Email of the Account Holder.
 */
/**
 * @typedef AddBeneficiaryDetailsRequest
 * @property {boolean} delights - True if beneficiary to be added by delights or
 *   False if by User.
 * @property {string} shipment_id - Shipment Id of the respective Merchant Order Id.
 * @property {BeneficiaryModeDetails} details
 * @property {string} [otp] - OTP received by customer.
 * @property {string} order_id - Merchant Order Id.
 * @property {string} transfer_mode - Transfer Mode of the Beneficiary to be added.
 * @property {string} [request_id] - Request Id for add benificiary request.
 */
/**
 * @typedef RefundAccountResponse
 * @property {boolean} [is_verified_flag] - Flag for verification of refund.
 * @property {Object} [data] - Refund account data.
 * @property {boolean} success - Success or failure flag.
 * @property {string} message - Response message.
 */
/**
 * @typedef BankDetailsForOTP
 * @property {string} account_no - Account number of the holder.
 * @property {string} bank_name - Name of the bank.
 * @property {string} ifsc_code - IFSC code of the bank.
 * @property {string} branch_name - Branch name of the bank.
 * @property {string} account_holder - Name of the account holder.
 */
/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {string} order_id - Unique identifier for an order.
 * @property {BankDetailsForOTP} details
 */
/**
 * @typedef WalletOtpRequest
 * @property {string} country_code - Country Code of the Mobile Number.
 * @property {string} mobile - Wallet Mobile Number of the User.
 */
/**
 * @typedef WalletOtpResponse
 * @property {string} request_id - Request Id for wallet otp request.
 * @property {string} is_verified_flag - Boolean Flag whether OTP Validation is
 *   already done or not.
 * @property {boolean} [success] - Response is successful or not.
 */
/**
 * @typedef SetDefaultBeneficiaryRequest
 * @property {string} order_id - Merchant Order Id.
 * @property {string} beneficiary_id - Beneficiary Hash Id of the beneficiary added.
 */
/**
 * @typedef SetDefaultBeneficiaryResponse
 * @property {boolean} is_beneficiary_set - Boolean Flag whether Beneficiary set or not.
 * @property {boolean} [success] - Response is successful or not.
 */
/**
 * @typedef GetPaymentLinkResponse
 * @property {number} status_code - HTTP status code.
 * @property {string} [payment_link_current_status] - Status of payment link.
 * @property {boolean} success - Successful or failure.
 * @property {number} [polling_timeout] - Polling request timeout.
 * @property {string} [payment_link_url] - Url of payment link.
 * @property {string} [external_order_id] - Merchant order id.
 * @property {string} message - Detailed message.
 * @property {string} [merchant_name] - Merchant name.
 * @property {number} [amount] - Total value of order.
 */
/**
 * @typedef ErrorDescription
 * @property {string} [payment_transaction_id] - Payment transaction id.
 * @property {boolean} [expired] - Payment link expired or not.
 * @property {string} [merchant_order_id] - Merchant Order Id.
 * @property {string} [merchant_name] - Name of merchant that created payment link.
 * @property {string} [msg] - Detailed message.
 * @property {boolean} [cancelled] - Payment link is cancelled or not.
 * @property {number} [amount] - Amount paid.
 * @property {boolean} [invalid_id] - Payment link id is valid or not.
 */
/**
 * @typedef ErrorResponse
 * @property {number} status_code - HTTP status code.
 * @property {ErrorDescription} [error]
 * @property {string} message - Detailed message.
 * @property {boolean} success - Successful or failure.
 */
/**
 * @typedef CreatePaymentLinkMeta
 * @property {string} cart_id - Unique identifier for the shopping cart.
 * @property {string} checkout_mode - Mode of checkout process (e.g., guest,
 *   registered user).
 * @property {string} [assign_card_id] - Identifier for the card assigned to the
 *   transaction.
 * @property {string} amount - Total amount for the transaction.
 */
/**
 * @typedef CreatePaymentLinkRequest
 * @property {string} [description] - Merchant order id.
 * @property {string} external_order_id - Merchant order id.
 * @property {string} mobile_number - Mobile number to which the payment link is
 *   to be sent.
 * @property {number} amount - Total value of order.
 * @property {CreatePaymentLinkMeta} meta
 * @property {string} email - Email to which the payment link is to be sent.
 */
/**
 * @typedef CreatePaymentLinkResponse
 * @property {number} status_code - HTTP status code.
 * @property {boolean} success - Successful or failure.
 * @property {number} [polling_timeout] - Polling request timeout.
 * @property {string} [payment_link_url] - Url of payment link.
 * @property {string} message - Detailed message.
 * @property {string} [payment_link_id] - Unique id of payment link.
 */
/**
 * @typedef CancelOrResendPaymentLinkRequest
 * @property {string} payment_link_id - Unique id of payment link.
 */
/**
 * @typedef ResendPaymentLinkResponse
 * @property {number} status_code - HTTP status code.
 * @property {number} [polling_timeout] - Polling request timeout.
 * @property {boolean} success - Successful or failure.
 * @property {string} message - Detailed message.
 */
/**
 * @typedef CancelPaymentLinkResponse
 * @property {number} status_code - HTTP status code.
 * @property {boolean} success - Successful or failure.
 * @property {string} message - Detailed message.
 */
/**
 * @typedef PollingPaymentLinkResponse
 * @property {string} [status] - Status of payment link.
 * @property {number} [status_code] - HTTP status code.
 * @property {boolean} [success] - Successful or failure.
 * @property {number} [http_status] - HTTP status code.
 * @property {string} [message] - Detailed message.
 * @property {string} [order_id] - Fynd order id.
 * @property {string} [redirect_url] - Url to redirect to.
 * @property {string} [payment_link_id] - Payment link id.
 * @property {string} [aggregator_name] - Aggregator name.
 * @property {number} [amount] - Total amount for the transaction.
 */
/**
 * @typedef PaymentMethodsMeta
 * @property {string} merchant_code - Merchant code.
 * @property {string} payment_gateway - Payment gateway name.
 * @property {string} payment_identifier - Payment identifier.
 */
/**
 * @typedef CreateOrderUserPaymentMethods
 * @property {string} name - Payment mode name.
 * @property {string} mode - Payment mode.
 * @property {PaymentMethodsMeta} meta
 */
/**
 * @typedef CreateOrderUserRequest
 * @property {string} failure_callback_url - Failure page url.
 * @property {string} currency - Currency of the transaction.
 * @property {string} payment_link_id - Unique id of payment link.
 * @property {CreateOrderUserPaymentMethods} payment_methods
 * @property {string} success_callback_url - Success page url.
 * @property {Object} [meta] - Meta details.
 */
/**
 * @typedef CreateOrderUserData
 * @property {string} [method] - Method details.
 * @property {string} [aggregator] - Aggregator name.
 * @property {string} [customer_id] - Aggregator customer id.
 * @property {string} [contact] - Mobile number.
 * @property {string} [merchant_order_id] - Merchant order id.
 * @property {string} [order_id] - Aggregator order id.
 * @property {string} [currency] - Currency of the transaction.
 * @property {string} [callback_url] - Callback url for aggregator.
 * @property {number} [amount] - Total amount for the transaction.
 * @property {string} [email] - Email.
 */
/**
 * @typedef CreateOrderUserResponse
 * @property {number} status_code - HTTP status code.
 * @property {boolean} success - Successful or failure.
 * @property {CreateOrderUserData} [data]
 * @property {string} message - Detailed message.
 * @property {string} [order_id] - Merchant order id.
 * @property {string} [callback_url] - Callback url for aggregator.
 * @property {string} [payment_confirm_url] - Payment confirm url for aggregator.
 */
/**
 * @typedef BalanceDetails
 * @property {string} [formatted_value] - Formatted Amount with currency symbol.
 * @property {string} [currency] - Currency Code.
 * @property {number} [value] - Payment amount.
 */
/**
 * @typedef CreditSummary
 * @property {BalanceDetails} [total_due_amount]
 * @property {string} [status] - Customer Credit status.
 * @property {BalanceDetails} [limit]
 * @property {string} [credit_line_id] - ID at Credit aggregator end.
 * @property {BalanceDetails} [amount_available]
 * @property {BalanceDetails} [due_amount]
 * @property {string} [due_date] - Due date for repayment.
 * @property {BalanceDetails} [balance]
 * @property {string} [status_message] - Message to customer.
 * @property {string} [repayment_url] - Url for repayment.
 * @property {string} [soa_url] - Statement of accounts. Show payment history.
 * @property {boolean} [is_eligible_for_txn] - Eligibility flag to complete transaction.
 * @property {string} [merchant_customer_ref_id] - Unique aggregator customer id.
 * @property {string} [buyer_status] - Status from Credit aggregator end.
 * @property {string} [activation_url] - Url for activation.
 */
/**
 * @typedef CustomerCreditSummaryResponse
 * @property {CreditSummary} [data]
 * @property {boolean} success - Payment confirmation updated or not.
 */
/**
 * @typedef RedirectURL
 * @property {boolean} status - Aggregator Operation is successful or not.
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
 * @property {string} city - City of the KYC address.
 * @property {string} [addressline2] - Second line of the address.
 * @property {string} state - State of the KYC address.
 * @property {string} [ownership_type] - Type of ownership for the address
 *   (e.g., rented, owned).
 * @property {string} pincode - Postal code of the address.
 * @property {string} [land_mark] - Landmark near the address.
 * @property {string} addressline1 - First line of the address.
 */
/**
 * @typedef UserPersonalInfoInDetails
 * @property {string} first_name - First name of the individual.
 * @property {string} [voter_id] - Voter ID number.
 * @property {string} [gender] - Gender of the individual.
 * @property {string} dob - Date of birth of the individual.
 * @property {string} [passport] - Passport number.
 * @property {string} [fathers_name] - Father's name.
 * @property {string} [mothers_name] - Mother's name.
 * @property {string} [middle_name] - Middle name of the individual.
 * @property {string} [last_name] - Last name of the individual.
 * @property {string} [pan] - Permanent Account Number (PAN).
 * @property {string} [driving_license] - Driving license number.
 * @property {boolean} email_verified - Indicates whether the email is verified.
 * @property {KYCAddress} address_as_per_id
 * @property {boolean} mobile_verified - Indicates whether the mobile number is verified.
 * @property {string} phone - Phone number.
 * @property {string} [email] - Email address.
 */
/**
 * @typedef MarketplaceInfo
 * @property {string} [date_of_joining] - Date of joining.
 * @property {string} name - Name of store.
 * @property {string} membership_id - Merchant id.
 */
/**
 * @typedef BusinessDetails
 * @property {string} [business_ownership_type] - Type of business ownership
 *   (e.g., sole proprietorship, partnership).
 * @property {string} [vintage] - Age or duration of the business.
 * @property {string} [gstin] - Goods and Services Tax Identification Number.
 * @property {string} [pan] - Permanent Account Number of the business.
 * @property {string} [entity_type] - Type of legal entity (e.g., corporation, LLC).
 * @property {Object} [shop_and_establishment] - Shop and Establishment
 *   registration details.
 * @property {string} [fssai] - Food Safety and Standards Authority of India
 *   registration number.
 * @property {string} [fda] - Food and Drug Administration registration number.
 * @property {string} [business_type] - Type of business (e.g., retail, wholesale).
 * @property {string} [name] - Name of the business.
 * @property {KYCAddress} [address]
 */
/**
 * @typedef DeviceDetails
 * @property {string} [identification_number] - IP.
 * @property {string} [identifier_type] - Static value = ip.
 * @property {string} [device_model] - Device Model.
 * @property {string} [device_make] - Device maker.
 * @property {string} [device_type] - Device Type(E.g. Mobile).
 * @property {string} [os] - OS Name.
 * @property {string} [os_version] - OS Version.
 */
/**
 * @typedef CustomerOnboardingRequest
 * @property {UserPersonalInfoInDetails} [personal_info]
 * @property {string} [mcc] - Merchant Category Code, indicating the type of business.
 * @property {string} aggregator - Payment aggregator handling the transaction.
 * @property {MarketplaceInfo} [marketplace_info]
 * @property {string} source - Callback url.
 * @property {BusinessDetails} [business_info]
 * @property {DeviceDetails} [device]
 */
/**
 * @typedef OnboardSummary
 * @property {string} [redirect_url] - URL to which the user may redirect.
 * @property {Object} [session] - User Session.
 * @property {boolean} status - Transaction status.
 * @property {string} [status_remark] - Description of status.
 * @property {boolean} [is_eligible_for_txn] - Whether is eligible for transaction.
 * @property {string} [merchant_customer_ref_id] - Rupifi customer ID.
 * @property {string} [activation_url] - Url for activation.
 */
/**
 * @typedef CustomerOnboardingResponse
 * @property {OnboardSummary} data
 * @property {boolean} success - Status updated or not.
 */
/**
 * @typedef OutstandingOrderDetailsResponse
 * @property {number} status_code - HTTP Status code.
 * @property {Object[]} [data] - Dict containing the outstanding order details.
 * @property {boolean} success - Response is successful or not.
 * @property {string} [message] - Message.
 */
/**
 * @typedef PaidOrderDetailsResponse
 * @property {number} status_code - HTTP Status code.
 * @property {Object[]} [data] - Dict containing the paid order details.
 * @property {boolean} success - Response is successful or not.
 * @property {string} [message] - Message.
 */
/**
 * @typedef DeleteRefundAccountResponse
 * @property {boolean} success - Success/Failure of the deleted beneficiary.
 * @property {string} message - Message.
 */
/**
 * @typedef RefundOptionsDetails
 * @property {string} display_name - Refund option display name.
 * @property {number} id - Refund ID. It will be unique identifier.
 * @property {boolean} [is_active] - Refund option is active or not.
 * @property {string} name - Refund option name.
 */
/**
 * @typedef RefundOptions
 * @property {RefundOptionsDetails} items - List of all refund options.
 */
/**
 * @typedef OfflineRefundOptions
 * @property {RefundOptionsDetails} items - List of all refund options.
 * @property {string[]} payment_modes - List of all offline payment options. MOP
 *   Code value.
 */
/**
 * @typedef RefundOptionResponse
 * @property {OfflineRefundOptions} offline_refund_options - Available offline
 *   refund options data.
 * @property {boolean} success - Success/Failure Of response.
 * @property {RefundOptions} refund_options - Available refund options data.
 */
/**
 * @typedef SelectedRefundOptionResponse
 * @property {Object} transfer_mode - Selected transfer mode for given shipment.
 * @property {string} shipment_id - ID of the shipment.
 * @property {string} message - Detailed message.
 * @property {boolean} success - Whether refund is successful or not.
 */
/**
 * @typedef WalletBeneficiaryDetails
 * @property {string} beneficiary_id - Beneficiary Id.
 * @property {string} modified_on - MOdification Date of Beneficiary.
 * @property {string} display_name - Display Name Of Account.
 * @property {number} id - Id of the wallet beneficiary.
 * @property {string} subtitle - SHort Title Of Account.
 * @property {string} transfer_mode - Transfer Mode Of Account.
 * @property {string} [mobile] - MObile no of User.
 * @property {boolean} is_active - Boolean Flag whether Beneficiary set or not.
 * @property {string} created_on - Creation Date of Beneficiary.
 * @property {string} address - Address of User.
 * @property {string} title - Title Of Account.
 * @property {string} wallet_address - Bank Name Of Account.
 * @property {string} [comment] - Remarks.
 * @property {string} [wallet] - Branch Name Of Account.
 * @property {string} email - EMail of User.
 * @property {string} [delights_user_name] - User Id Who filled the Beneficiary.
 */
/**
 * @typedef UpiBeneficiaryDetails
 * @property {string} beneficiary_id - Beneficiary Id.
 * @property {string} modified_on - MOdification Date of Beneficiary.
 * @property {string} display_name - Display Name Of Account.
 * @property {number} id - Id of the upi beneficiary.
 * @property {string} subtitle - SHort Title Of Account.
 * @property {string} transfer_mode - Transfer Mode Of Account.
 * @property {string} [vpa] - Branch Name Of Account.
 * @property {string} [mobile] - Mobile no of User.
 * @property {string} vpa_address - Bank Name Of Account.
 * @property {string} created_on - Creation Date of Beneficiary.
 * @property {string} address - Address of User.
 * @property {string} title - Title Of Account.
 * @property {string} [comment] - Remarks.
 * @property {boolean} is_active - Boolean Flag whether Beneficiary set or not.
 * @property {string} email - EMail of User.
 * @property {string} [delights_user_name] - User Id Who filled the Beneficiary.
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
 * @property {Object} limit - Max Limit for adding bank account, UPI and wallet.
 */
/**
 * @typedef ValidateValidateAddressRequest
 * @property {string} [ifsc_code] - IFSC Code.
 * @property {string} [upi_vpa] - VPA Address.
 * @property {string} [aggregator] - Aggregator Name.
 */
/**
 * @typedef VPADetails
 * @property {boolean} is_valid - Is VPA valid or not.
 * @property {string} upi_vpa - VPA address.
 * @property {string} status - VPA validation message.
 * @property {string} customer_name - VPA Customer Name.
 */
/**
 * @typedef ValidateValidateAddressResponse
 * @property {VPADetails} [upi] - UPI validation details.
 * @property {boolean} success - Whether address validation is successful or not.
 * @property {Object} [ifsc] - IFSC details response data.
 */
/**
 * @typedef PaymentMethodsMetaOrder
 * @property {string} merchant_code - Merchant code.
 * @property {string} payment_gateway - Payment gateway name.
 * @property {string} payment_identifier - Payment identifier.
 */
/**
 * @typedef PaymentOrderMethods
 * @property {number} amount - Amount to be collected.
 * @property {string} [payment] - Payment type i.e. Required / Blocked.
 * @property {string} mode - Payment mode.
 * @property {PaymentMethodsMetaOrder} meta
 * @property {string} name - Payment mode name.
 */
/**
 * @typedef PaymentOrderRequest
 * @property {PaymentOrderMethods[]} [payment_methods] - All payment methods for order.
 * @property {string} order_id - Order id.
 * @property {string} [shipment_id] - Shipment_id.
 */
/**
 * @typedef PaymentOrderData
 * @property {number} [amount] - Amount.
 * @property {string} [aggregator] - Aggregator name.
 * @property {string} [callback_url] - Callback url for aggregator.
 * @property {string} [order_id] - Aggregator order id.
 * @property {string} [customer_id] - Aggregator customer id.
 * @property {string} [merchant_order_id] - Merchant order id.
 * @property {string} [currency] - Currency used for the order.
 * @property {string} [email] - Email address of the customer.
 * @property {string} [contact] - Contact number of the customer.
 * @property {string} [method] - Method of payment or delivery for the order.
 */
/**
 * @typedef PaymentOrderResponse
 * @property {string} [payment_confirm_url] - Payment confirm url for aggregator.
 * @property {string} [callback_url] - Callback url for aggregator.
 * @property {string} [order_id] - Merchant order id.
 * @property {boolean} [success] - Successful or failure.
 * @property {number} status_code - HTTP status code.
 * @property {PaymentOrderData} [data]
 * @property {string} message - Detailed message.
 */
/**
 * @typedef ShipmentRefundRequest
 * @property {string} shipment_id - Shipment Id of the respective Merchant Order Id.
 * @property {string} order_id - Merchant Order Id.
 * @property {string} transfer_mode - Transfer Mode of the Beneficiary to be added.
 * @property {string} [beneficiary_id] - Beneficiary Hash Id of the beneficiary added.
 */
/**
 * @typedef ShipmentRefundDetail
 * @property {string} shipment_id - ID of the shipment.
 * @property {string} order_id - ID of an order.
 * @property {string} transfer_mode - Mode of transfer for the shipment refund
 *   (e.g., bank transfer, digital wallet).
 * @property {string} beneficiary_id - Unique identifier for the beneficiary
 *   receiving the refund.
 */
/**
 * @typedef ShipmentRefundResponse
 * @property {ShipmentRefundDetail} data - Selected Shipment refund option details.
 * @property {boolean} success - Successful or not.
 * @property {string} message - Detailed message.
 */
declare class PaymentApplicationModel {
}
declare namespace PaymentApplicationModel {
    export { AggregatorConfigDetail, AggregatorsConfigDetailResponse, ErrorCodeAndDescription, HttpErrorCodeAndResponse, AttachCardRequest, AttachCardsResponse, CardPaymentGateway, ActiveCardPaymentGatewayResponse, Card, ListCardsResponse, DeletehCardRequest, DeleteCardsResponse, ValidateCustomerRequest, ValidateCustomerResponse, ChargeCustomerRequest, ChargeCustomerResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, AggregatorRoute, PaymentDefaultSelection, PaymentFlow, PaymentOptionAndFlow, AdvanceObject, SplitObject, AdvancePaymentObject, PaymentModeRouteResponse, WalletLinkRequestSchema, WalletVerifyRequestSchema, WalletDelinkRequestSchema, WalletResponseSchema, RupifiBannerData, RupifiBannerResponse, EpaylaterBannerData, EpaylaterBannerResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, renderHTMLRequest, renderHTMLResponse, ValidateVPARequest, ValidateUPI, ValidateVPAResponse, CardDetails, CardDetailsResponse, TransferItemsDetails, TransferModeDetails, TransferModeResponse, UpdateRefundTransferModeRequest, UpdateRefundTransferModeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, NotFoundResourceError, IfscCodeResponse, ErrorCodeDescription, AddBeneficiaryViaOtpVerificationRequest, AddBeneficiaryViaOtpVerificationResponse, WrongOtpError, BeneficiaryModeDetails, AddBeneficiaryDetailsRequest, RefundAccountResponse, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, WalletOtpRequest, WalletOtpResponse, SetDefaultBeneficiaryRequest, SetDefaultBeneficiaryResponse, GetPaymentLinkResponse, ErrorDescription, ErrorResponse, CreatePaymentLinkMeta, CreatePaymentLinkRequest, CreatePaymentLinkResponse, CancelOrResendPaymentLinkRequest, ResendPaymentLinkResponse, CancelPaymentLinkResponse, PollingPaymentLinkResponse, PaymentMethodsMeta, CreateOrderUserPaymentMethods, CreateOrderUserRequest, CreateOrderUserData, CreateOrderUserResponse, BalanceDetails, CreditSummary, CustomerCreditSummaryResponse, RedirectURL, RedirectToAggregatorResponse, CreditDetail, CheckCreditResponse, KYCAddress, UserPersonalInfoInDetails, MarketplaceInfo, BusinessDetails, DeviceDetails, CustomerOnboardingRequest, OnboardSummary, CustomerOnboardingResponse, OutstandingOrderDetailsResponse, PaidOrderDetailsResponse, DeleteRefundAccountResponse, RefundOptionsDetails, RefundOptions, OfflineRefundOptions, RefundOptionResponse, SelectedRefundOptionResponse, WalletBeneficiaryDetails, UpiBeneficiaryDetails, BeneficiaryRefundOptions, OrderBeneficiaryResponseSchemaV2, ValidateValidateAddressRequest, VPADetails, ValidateValidateAddressResponse, PaymentMethodsMetaOrder, PaymentOrderMethods, PaymentOrderRequest, PaymentOrderData, PaymentOrderResponse, ShipmentRefundRequest, ShipmentRefundDetail, ShipmentRefundResponse };
}
/** @returns {AggregatorConfigDetail} */
declare function AggregatorConfigDetail(): AggregatorConfigDetail;
type AggregatorConfigDetail = {
    /**
     * - SDK details.
     */
    sdk?: boolean;
    /**
     * - Masked payment gateway api secret.
     */
    secret: string;
    /**
     * - Payment gateway api endpoint.
     */
    api?: string;
    /**
     * - Masked pin.
     */
    pin?: string;
    /**
     * - Fynd or self payment gateway.
     */
    config_type: string;
    /**
     * - Unique merchant key.
     */
    merchant_key?: string;
    /**
     * - Payment gateway verify payment api endpoint.
     */
    verify_api?: string;
    /**
     * - Payment gateway api key.
     */
    key: string;
    /**
     * - Registered User id.
     */
    user_id?: string;
    /**
     * - Unique merchant id.
     */
    merchant_id?: string;
};
/** @returns {AggregatorsConfigDetailResponse} */
declare function AggregatorsConfigDetailResponse(): AggregatorsConfigDetailResponse;
type AggregatorsConfigDetailResponse = {
    /**
     * - Api response was successful or not.
     */
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
     * - Environment i.e Live or Test.
     */
    env: string;
};
/** @returns {ErrorCodeAndDescription} */
declare function ErrorCodeAndDescription(): ErrorCodeAndDescription;
type ErrorCodeAndDescription = {
    /**
     * - Error description code.
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
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {AttachCardRequest} */
declare function AttachCardRequest(): AttachCardRequest;
type AttachCardRequest = {
    /**
     * - Nickname of the card holder.
     */
    nickname?: string;
    /**
     * - Refresh cache flag.
     */
    refresh?: boolean;
    /**
     * - Card token of payment gateway.
     */
    card_id: string;
    /**
     * - Name of the card holder.
     */
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
     * - Payment gateway CARD api endpoint.
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
     * - Card number mentioned on the card.
     */
    card_number?: string;
    /**
     * - Name mentioned on the card.
     */
    card_name?: string;
    /**
     * - Type of the card.
     */
    card_type?: string;
    /**
     * - Brand image on the card.
     */
    card_brand_image?: string;
    /**
     * - Card reference.
     */
    card_reference?: string;
    /**
     * - Issuer of the card.
     */
    card_issuer?: string;
    /**
     * - Brand of the card.
     */
    card_brand?: string;
    /**
     * - Card expiry.
     */
    expired?: boolean;
    /**
     * - Whether card
     * is tokenized or not.
     */
    compliant_with_tokenisation_guidelines?: boolean;
    /**
     * - International Securities Identification
     * Number for the card.
     */
    card_isin?: string;
    /**
     * - Card's expiration year.
     */
    exp_year?: number;
    /**
     * - User-defined name for the card.
     */
    nickname?: string;
    /**
     * - Name of the payment aggregator.
     */
    aggregator_name: string;
    /**
     * - Unique fingerprint of the card for
     * identification.
     */
    card_fingerprint?: string;
    /**
     * - Encrypted token representing the card.
     */
    card_token?: string;
    /**
     * - Card's expiration month.
     */
    exp_month?: number;
    /**
     * - Unique identifier for the card within the system.
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
     * - Payment gateway name in camelcase i.e Simple, Rupifi.
     */
    aggregator: string;
    /**
     * - Payable amount in paise.
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
     * - Payment gateway response data.
     */
    data?: any;
    /**
     * - Response is successful or not.
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
     * - Already Verified flag from payment gateway i.e Mswipe.
     */
    verified?: boolean;
    /**
     * - Payment gateway name i.e Simpl, Mswipe.
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
     * - Chargeable amount of order.
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
     * - Cart id of customer.
     */
    cart_id?: string;
    /**
     * - Response is successful or not.
     */
    success: boolean;
    /**
     * - Payment gateway name i.e Simpl, Mswipe.
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
     * - Delivery address id of customer.
     */
    delivery_address_id?: string;
};
/** @returns {PaymentInitializationRequest} */
declare function PaymentInitializationRequest(): PaymentInitializationRequest;
type PaymentInitializationRequest = {
    /**
     * - Payment gateway payment id.
     */
    razorpay_payment_id?: string;
    /**
     * - Payment method.
     */
    method: string;
    /**
     * - EDC machine Unique Identifier.
     */
    device_id?: string;
    /**
     * - Payment gateway name.
     */
    aggregator: string;
    /**
     * - Payment gateway customer id.
     */
    customer_id: string;
    /**
     * - Customer valid mobile number.
     */
    contact: string;
    /**
     * - Unique fynd order id.
     */
    merchant_order_id: string;
    /**
     * - Customer vpa address.
     */
    vpa?: string;
    /**
     * - Payment gateway order id.
     */
    order_id: string;
    /**
     * - Currency code.
     */
    currency: string;
    /**
     * - Payment polling timeout if not received response.
     */
    timeout?: number;
    /**
     * - Payable amount.
     */
    amount: number;
    /**
     * - Customer valid email.
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
     * - Payment order id.
     */
    aggregator_order_id?: string;
    /**
     * - Payment method.
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
     * - EDC machine Unique Identifier.
     */
    device_id?: string;
    /**
     * - Polling url.
     */
    polling_url: string;
    /**
     * - Payment gateway name.
     */
    aggregator: string;
    /**
     * - Order id.
     */
    merchant_order_id: string;
    /**
     * - Payment gateway customer id.
     */
    customer_id?: string;
    /**
     * - Customer vpa address.
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
     * - Bharat qr image url.
     */
    bqr_image?: string;
};
/** @returns {PaymentStatusUpdateRequest} */
declare function PaymentStatusUpdateRequest(): PaymentStatusUpdateRequest;
type PaymentStatusUpdateRequest = {
    /**
     * - Status of payment.
     */
    status?: string;
    /**
     * - Unique fynd transaction id.
     */
    merchant_transaction_id?: string;
    /**
     * - Payment method.
     */
    method: string;
    /**
     * - EDC machine Unique Identifier.
     */
    device_id?: string;
    /**
     * - Payment gateway name.
     */
    aggregator: string;
    /**
     * - Payment gateway customer id.
     */
    customer_id?: string;
    /**
     * - Customer valid mobile number.
     */
    contact?: string;
    /**
     * - Unique fynd order id.
     */
    merchant_order_id: string;
    /**
     * - Customer vpa address.
     */
    vpa?: string;
    /**
     * - Payment gateway order id.
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
     * - Customer valid email.
     */
    email?: string;
};
/** @returns {PaymentStatusUpdateResponse} */
declare function PaymentStatusUpdateResponse(): PaymentStatusUpdateResponse;
type PaymentStatusUpdateResponse = {
    /**
     * - Payment status.
     */
    status: string;
    /**
     * - Response is successful or not.
     */
    success?: boolean;
    /**
     * - Response is successful or not.
     */
    retry: boolean;
    /**
     * - Redirect url.
     */
    redirect_url?: string;
    /**
     * - Payment gateway name.
     */
    aggregator_name: string;
};
/** @returns {IntentAppErrorList} */
declare function IntentAppErrorList(): IntentAppErrorList;
type IntentAppErrorList = {
    /**
     * - Code of the intent App.
     */
    code?: string;
    /**
     * - Package Name of the intent App.
     */
    package_name?: string;
};
/** @returns {PaymentModeLogo} */
declare function PaymentModeLogo(): PaymentModeLogo;
type PaymentModeLogo = {
    /**
     * - Large Logo.
     */
    large: string;
    /**
     * - Small Logo.
     */
    small: string;
};
/** @returns {IntentApp} */
declare function IntentApp(): IntentApp;
type IntentApp = {
    /**
     * - Code of the intent App.
     */
    code?: string;
    /**
     * - Package Name of the intent App.
     */
    package_name?: string;
    logos?: PaymentModeLogo;
    /**
     * - Display Name of the intent App.
     */
    display_name?: string;
};
/** @returns {PaymentModeList} */
declare function PaymentModeList(): PaymentModeList;
type PaymentModeList = {
    /**
     * - Card number mentioned on the card.
     */
    card_number?: string;
    /**
     * - Unique code identifying the merchant.
     */
    merchant_code?: string;
    /**
     * - Reference identifier for the card.
     */
    card_reference?: string;
    /**
     * - Issuing bank or institution of the card.
     */
    card_issuer?: string;
    /**
     * - Indicates
     * compliance with tokenization guidelines.
     */
    compliant_with_tokenisation_guidelines?: boolean;
    /**
     * - General code for identifying a transaction or status.
     */
    code?: string;
    /**
     * - Limit for Cash on Delivery (COD) transactions.
     */
    cod_limit?: number;
    /**
     * - Flow or process intended for the transaction.
     */
    intent_flow?: boolean;
    /**
     * - Virtual Payment Address (VPA) used by Fynd.
     */
    fynd_vpa?: string;
    /**
     * - List of error
     * dictionaries related to intent app.
     */
    intent_app_error_dict_list?: IntentAppErrorList[];
    /**
     * - Name of the payment aggregator.
     */
    aggregator_name: string;
    /**
     * - Unique fingerprint of the card for
     * identification.
     */
    card_fingerprint?: string;
    /**
     * - List of errors associated with
     * the intent app.
     */
    intent_app_error_list?: string[];
    /**
     * - Application intended for handling the
     * transaction.
     */
    intent_app?: IntentApp[];
    /**
     * - Indicates whether the card is expired.
     */
    expired?: boolean;
    /**
     * - Number of retry attempts.
     */
    retry_count?: number;
    /**
     * - Card's expiration year.
     */
    exp_year?: number;
    /**
     * - Card's expiration month.
     */
    exp_month?: number;
    /**
     * - Unique identifier for the card within the system.
     */
    card_id?: string;
    /**
     * - Remaining available limit on the card.
     */
    remaining_limit?: number;
    /**
     * - Priority of display in the user interface.
     */
    display_priority?: number;
    /**
     * - Brand of the card (e.g., Visa, MasterCard).
     */
    card_brand?: string;
    /**
     * - Maximum limit per order for COD
     * transactions.
     */
    cod_limit_per_order?: number;
    logo_url?: PaymentModeLogo;
    /**
     * - User-defined name for the card.
     */
    nickname?: string;
    /**
     * - Name printed on the card.
     */
    card_name?: string;
    /**
     * - Type of the card (e.g., debit, credit).
     */
    card_type?: string;
    /**
     * - Image representing the card brand.
     */
    card_brand_image?: string;
    /**
     * - Display name for the card in the user interface.
     */
    display_name?: string;
    /**
     * - International Securities Identification
     * Number for the card.
     */
    card_isin?: string;
    /**
     * - Timeout duration for transactions.
     */
    timeout?: number;
    /**
     * - Encrypted token representing the card.
     */
    card_token?: string;
    /**
     * - User's name.
     */
    name?: string;
    /**
     * - Payment methods meta.
     */
    meta?: any;
};
/** @returns {RootPaymentMode} */
declare function RootPaymentMode(): RootPaymentMode;
type RootPaymentMode = {
    /**
     * - This flag will be true in case of
     * Payment link payment through card.
     */
    is_pay_by_card_pl?: boolean;
    /**
     * - Anonymous card flag.
     */
    add_card_enabled?: boolean;
    /**
     * - Display Priority.
     */
    display_priority: number;
    /**
     * - Payment mode display name.
     */
    display_name: string;
    /**
     * - Payment mode.
     */
    list?: PaymentModeList[];
    /**
     * - Card save or not.
     */
    save_card?: boolean;
    /**
     * - Display Priority.
     */
    aggregator_name?: string;
    /**
     * - Payment mode name.
     */
    name: string;
    /**
     * - Anonymous card flag.
     */
    anonymous_enable?: boolean;
};
/** @returns {AggregatorRoute} */
declare function AggregatorRoute(): AggregatorRoute;
type AggregatorRoute = {
    /**
     * - Details about aggregator route.
     */
    data?: any;
    /**
     * - Payment_flow_data.
     */
    payment_flow_data?: any;
    /**
     * - Payment_flow.
     */
    payment_flow?: string;
    /**
     * - API link of the aggregator.
     */
    api_link?: string;
};
/** @returns {PaymentDefaultSelection} */
declare function PaymentDefaultSelection(): PaymentDefaultSelection;
type PaymentDefaultSelection = {
    /**
     * - Default Selection Payment Mode.
     */
    mode?: string;
    /**
     * - Identifier for Payment Mode.
     */
    identifier?: string;
    /**
     * - Decide if the default payment mode will skip the
     * payment options page altogether or just be preferred on the Frontend.
     */
    skip?: boolean;
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
    /**
     * - Payment options.
     */
    payment_option: RootPaymentMode[];
    payment_flows: PaymentFlow;
    payment_default_selection?: PaymentDefaultSelection;
};
/** @returns {AdvanceObject} */
declare function AdvanceObject(): AdvanceObject;
type AdvanceObject = {
    /**
     * - Is Advance Payment active.
     */
    is_active?: boolean;
    /**
     * - Amount for Payment Breakdown.
     */
    amount?: number;
    /**
     * - Time unit for refunds.
     */
    time_unit?: string;
    /**
     * - The description for Advance Payment (user
     * configured).
     */
    description?: string;
    /**
     * - The display name for Advance payment.
     */
    display_name?: string;
    /**
     * - Type of prepayment value.
     */
    prepayment_type?: string;
    /**
     * - Value for prepayment in advance payment.
     */
    prepayment_value?: number;
    /**
     * - Type of cancellation.
     */
    cancellation_type?: string;
    /**
     * - Time limit for processing refund.
     */
    refund_time_limit?: number;
    /**
     * - All available types of prepayment.
     */
    all_prepayment_type?: string[];
    /**
     * - Is custom advance amount allowed?.
     */
    allow_custom_advance_amount?: boolean;
};
/** @returns {SplitObject} */
declare function SplitObject(): SplitObject;
type SplitObject = {
    /**
     * - Maximum amount of splits allowed.
     */
    total_number_of_splits?: number;
    /**
     * - Number of splits remaining.
     */
    splits_remaining?: number;
    /**
     * - Amount pending to be paid.
     */
    amount_remaining?: number;
};
/** @returns {AdvancePaymentObject} */
declare function AdvancePaymentObject(): AdvancePaymentObject;
type AdvancePaymentObject = {
    /**
     * - Name of Advance Payment Mode.
     */
    name?: string;
    /**
     * - Display Priority for Payment Option.
     */
    display_priority?: number;
    /**
     * - Payment Mode ID for Advance Payment Option.
     */
    payment_mode_id?: number;
    /**
     * - Display name for Advance Payment Mode.
     */
    display_name?: string;
    /**
     * - Payment mode.
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
     * - Response is successful or not.
     */
    success: boolean;
    /**
     * - Payment Breakup for advance payment.
     */
    payment_breakup?: any;
    /**
     * - Advance Payment Array.
     */
    advance_payment?: AdvancePaymentObject[];
};
/** @returns {WalletLinkRequestSchema} */
declare function WalletLinkRequestSchema(): WalletLinkRequestSchema;
type WalletLinkRequestSchema = {
    /**
     * - Aggregator Name.
     */
    aggregator: string;
    /**
     * - Mobile Number for Wallet.
     */
    mobile: string;
    /**
     * - Wallet Code.
     */
    wallet_code: string;
};
/** @returns {WalletVerifyRequestSchema} */
declare function WalletVerifyRequestSchema(): WalletVerifyRequestSchema;
type WalletVerifyRequestSchema = {
    /**
     * - Aggregator Name.
     */
    aggregator: string;
    /**
     * - Token for wallet linking.
     */
    link_token: string;
    /**
     * - OTP received for wallet linking.
     */
    otp: number;
};
/** @returns {WalletDelinkRequestSchema} */
declare function WalletDelinkRequestSchema(): WalletDelinkRequestSchema;
type WalletDelinkRequestSchema = {
    /**
     * - Aggregator Name.
     */
    aggregator: string;
    /**
     * - Wallet Code.
     */
    wallet_code: string;
};
/** @returns {WalletResponseSchema} */
declare function WalletResponseSchema(): WalletResponseSchema;
type WalletResponseSchema = {
    /**
     * - Response received from aggregator.
     */
    data: any;
    /**
     * - Success/Failure of the API call.
     */
    success: boolean;
};
/** @returns {RupifiBannerData} */
declare function RupifiBannerData(): RupifiBannerData;
type RupifiBannerData = {
    /**
     * - Rupifi KYC status.
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
     * - Epaylater KYC status.
     */
    status?: string;
    /**
     * - EPayLater message.
     */
    message?: string;
    /**
     * - Need to display banner or not.
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
     * - Unique order id.
     */
    order_id: string;
    /**
     * - EDC machine Unique Identifier.
     */
    device_id?: string;
    /**
     * - Either resend or cancel.
     */
    request_type: string;
};
/** @returns {LinkStatus} */
declare function LinkStatus(): LinkStatus;
type LinkStatus = {
    /**
     * - Link action status.
     */
    status: string;
    /**
     * - Message.
     */
    message: string;
    /**
     * - This key specifies payment done
     * status of payment link.
     */
    is_payment_done?: boolean;
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
     * - Return Type of API.
     */
    returntype?: string;
    /**
     * - Base64 encoded html string.
     */
    base64_html: string;
};
/** @returns {renderHTMLResponse} */
declare function renderHTMLResponse(): renderHTMLResponse;
type renderHTMLResponse = {
    /**
     * - HTML string.
     */
    html: string;
};
/** @returns {ValidateVPARequest} */
declare function ValidateVPARequest(): ValidateVPARequest;
type ValidateVPARequest = {
    /**
     * - UPI ID.
     */
    upi_vpa: string;
    /**
     * - Aggregator slug.
     */
    aggregator?: string;
};
/** @returns {ValidateUPI} */
declare function ValidateUPI(): ValidateUPI;
type ValidateUPI = {
    /**
     * - VALID or INVALID.
     */
    status: string;
    /**
     * - Customer Bank.
     */
    customer_name: string;
    /**
     * - Boolean is true or false.
     */
    is_valid: boolean;
    /**
     * - UPI ID.
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
     * - Current status of the card.
     */
    status: boolean;
    /**
     * - Country where the card was issued.
     */
    country: string;
    /**
     * - Code identifying the bank.
     */
    bank_code: string;
    /**
     * - Unique identifier for the record.
     */
    id: string;
    /**
     * - Card's expiration year.
     */
    card_exp_year?: string;
    /**
     * - Brand of the card (e.g., Visa, MasterCard).
     */
    card_brand: string;
    /**
     * - General type of the card (e.g., debit, credit).
     */
    type: string;
    /**
     * - Sub-type of the card (e.g., Platinum, Gold).
     */
    card_sub_type: string;
    /**
     * - Indicates whether the card is domestic.
     */
    is_domestic_card: boolean;
    /**
     * - Name of the cardholder.
     */
    name_on_card?: string;
    /**
     * - Card's expiration month.
     */
    card_exp_month?: string;
    /**
     * - Extended type of the card, providing
     * more specific classification.
     */
    extended_card_type: string;
    /**
     * - Object representation of the card.
     */
    card_object: string;
    /**
     * - Encrypted token representing the card.
     */
    card_token?: string;
    /**
     * - User associated with the card.
     */
    user?: string;
    /**
     * - Bank associated with the card.
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
     * - Id of the transfer item.
     */
    id: number;
    /**
     * - Beneficiary Display Name.
     */
    display_name?: string;
    /**
     * - Beneficiary large Logo.
     */
    logo_large: string;
    /**
     * - Beneficiary small Logo.
     */
    logo_small: string;
    /**
     * - Beneficiary Name.
     */
    name: string;
};
/** @returns {TransferModeDetails} */
declare function TransferModeDetails(): TransferModeDetails;
type TransferModeDetails = {
    /**
     * - Beneficiary Mode Items.
     */
    items?: TransferItemsDetails[];
    /**
     * - Beneficiary Mode Name.
     */
    display_name: string;
};
/** @returns {TransferModeResponse} */
declare function TransferModeResponse(): TransferModeResponse;
type TransferModeResponse = {
    /**
     * - Response Object.
     */
    data: TransferModeDetails[];
};
/** @returns {UpdateRefundTransferModeRequest} */
declare function UpdateRefundTransferModeRequest(): UpdateRefundTransferModeRequest;
type UpdateRefundTransferModeRequest = {
    /**
     * - True for enabling the Transfer Mode.
     */
    enable: boolean;
    /**
     * - Transfer Mode of the Beneficiary to be added.
     */
    transfer_mode: string;
};
/** @returns {UpdateRefundTransferModeResponse} */
declare function UpdateRefundTransferModeResponse(): UpdateRefundTransferModeResponse;
type UpdateRefundTransferModeResponse = {
    /**
     * - Response is successful or not.
     */
    success?: boolean;
};
/** @returns {OrderBeneficiaryDetails} */
declare function OrderBeneficiaryDetails(): OrderBeneficiaryDetails;
type OrderBeneficiaryDetails = {
    /**
     * - MOdification Date of Beneficiary.
     */
    modified_on: string;
    /**
     * - Account Number.
     */
    account_no: string;
    /**
     * - MObile no of User.
     */
    mobile?: string;
    /**
     * - Bank Name Of Account.
     */
    bank_name: string;
    /**
     * - Ifsc Code Of Account.
     */
    ifsc_code: string;
    /**
     * - Boolean Flag whether Beneficiary set or not.
     */
    is_active: boolean;
    /**
     * - Beneficiary Id.
     */
    beneficiary_id: string;
    /**
     * - Account Holder Name.
     */
    account_holder: string;
    /**
     * - EMail of User.
     */
    email: string;
    /**
     * - User Id Who filled the Beneficiary.
     */
    delights_user_name?: string;
    /**
     * - Id of the Order Beneficiary.
     */
    id: number;
    /**
     * - Transfer Mode Of Account.
     */
    transfer_mode: string;
    /**
     * - Branch Name Of Account.
     */
    branch_name?: string;
    /**
     * - Creation Date of Beneficiary.
     */
    created_on: string;
    /**
     * - SHort Title Of Account.
     */
    subtitle: string;
    /**
     * - Remarks.
     */
    comment?: string;
    /**
     * - Address of User.
     */
    address: string;
    /**
     * - Title Of Account.
     */
    title: string;
    /**
     * - Display Name Of Account.
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
     * - All Beneficiaries Of An Order.
     */
    beneficiaries?: OrderBeneficiaryDetails[];
};
/** @returns {NotFoundResourceError} */
declare function NotFoundResourceError(): NotFoundResourceError;
type NotFoundResourceError = {
    /**
     * - Bad Request Data.
     */
    code: string;
    /**
     * - Not Found.
     */
    description: string;
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {IfscCodeResponse} */
declare function IfscCodeResponse(): IfscCodeResponse;
type IfscCodeResponse = {
    /**
     * - Branch Name Of Account.
     */
    branch_name: string;
    /**
     * - Response is successful or not.
     */
    success?: boolean;
    /**
     * - Bank Name Of Account.
     */
    bank_name: string;
};
/** @returns {ErrorCodeDescription} */
declare function ErrorCodeDescription(): ErrorCodeDescription;
type ErrorCodeDescription = {
    /**
     * - Error description code.
     */
    code: string;
    /**
     * - Error human understandable description.
     */
    description: string;
    /**
     * - Response is successful or not.
     */
    success: boolean;
};
/** @returns {AddBeneficiaryViaOtpVerificationRequest} */
declare function AddBeneficiaryViaOtpVerificationRequest(): AddBeneficiaryViaOtpVerificationRequest;
type AddBeneficiaryViaOtpVerificationRequest = {
    /**
     * - Request id.
     */
    request_id: string;
    /**
     * - Hash key of the beneficiary Id.
     */
    hash_key: string;
    /**
     * - Otp sent to the given Mobile No.
     */
    otp: string;
};
/** @returns {AddBeneficiaryViaOtpVerificationResponse} */
declare function AddBeneficiaryViaOtpVerificationResponse(): AddBeneficiaryViaOtpVerificationResponse;
type AddBeneficiaryViaOtpVerificationResponse = {
    /**
     * - Response is successful or not.
     */
    success?: boolean;
    /**
     * - Aggregator Response of beneficiary.
     */
    message: string;
};
/** @returns {WrongOtpError} */
declare function WrongOtpError(): WrongOtpError;
type WrongOtpError = {
    /**
     * - Verified flag.
     */
    is_verified_flag: boolean;
    /**
     * - Wrong OTP Code.
     */
    description: string;
    /**
     * - Response is successful or not.
     */
    success: string;
};
/** @returns {BeneficiaryModeDetails} */
declare function BeneficiaryModeDetails(): BeneficiaryModeDetails;
type BeneficiaryModeDetails = {
    /**
     * - Account Number of the Account Holder.
     */
    account_no: string;
    /**
     * - Address of the User.
     */
    address?: string;
    /**
     * - Mobile Number of the User.
     */
    mobile: string;
    /**
     * - Bank Name of the Account.
     */
    bank_name: string;
    /**
     * - Remarks added by The user.
     */
    comment?: string;
    /**
     * - Ifsc Code of the Account.
     */
    ifsc_code: string;
    /**
     * - VPA of the Account.
     */
    vpa?: string;
    /**
     * - Branch Name of the Account.
     */
    branch_name: string;
    /**
     * - Name of the Account Holder.
     */
    account_holder: string;
    /**
     * - Wallet of the Account.
     */
    wallet?: string;
    /**
     * - Email of the Account Holder.
     */
    email: string;
};
/** @returns {AddBeneficiaryDetailsRequest} */
declare function AddBeneficiaryDetailsRequest(): AddBeneficiaryDetailsRequest;
type AddBeneficiaryDetailsRequest = {
    /**
     * - True if beneficiary to be added by delights or
     * False if by User.
     */
    delights: boolean;
    /**
     * - Shipment Id of the respective Merchant Order Id.
     */
    shipment_id: string;
    details: BeneficiaryModeDetails;
    /**
     * - OTP received by customer.
     */
    otp?: string;
    /**
     * - Merchant Order Id.
     */
    order_id: string;
    /**
     * - Transfer Mode of the Beneficiary to be added.
     */
    transfer_mode: string;
    /**
     * - Request Id for add benificiary request.
     */
    request_id?: string;
};
/** @returns {RefundAccountResponse} */
declare function RefundAccountResponse(): RefundAccountResponse;
type RefundAccountResponse = {
    /**
     * - Flag for verification of refund.
     */
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
     * - Response message.
     */
    message: string;
};
/** @returns {BankDetailsForOTP} */
declare function BankDetailsForOTP(): BankDetailsForOTP;
type BankDetailsForOTP = {
    /**
     * - Account number of the holder.
     */
    account_no: string;
    /**
     * - Name of the bank.
     */
    bank_name: string;
    /**
     * - IFSC code of the bank.
     */
    ifsc_code: string;
    /**
     * - Branch name of the bank.
     */
    branch_name: string;
    /**
     * - Name of the account holder.
     */
    account_holder: string;
};
/** @returns {AddBeneficiaryDetailsOTPRequest} */
declare function AddBeneficiaryDetailsOTPRequest(): AddBeneficiaryDetailsOTPRequest;
type AddBeneficiaryDetailsOTPRequest = {
    /**
     * - Unique identifier for an order.
     */
    order_id: string;
    details: BankDetailsForOTP;
};
/** @returns {WalletOtpRequest} */
declare function WalletOtpRequest(): WalletOtpRequest;
type WalletOtpRequest = {
    /**
     * - Country Code of the Mobile Number.
     */
    country_code: string;
    /**
     * - Wallet Mobile Number of the User.
     */
    mobile: string;
};
/** @returns {WalletOtpResponse} */
declare function WalletOtpResponse(): WalletOtpResponse;
type WalletOtpResponse = {
    /**
     * - Request Id for wallet otp request.
     */
    request_id: string;
    /**
     * - Boolean Flag whether OTP Validation is
     * already done or not.
     */
    is_verified_flag: string;
    /**
     * - Response is successful or not.
     */
    success?: boolean;
};
/** @returns {SetDefaultBeneficiaryRequest} */
declare function SetDefaultBeneficiaryRequest(): SetDefaultBeneficiaryRequest;
type SetDefaultBeneficiaryRequest = {
    /**
     * - Merchant Order Id.
     */
    order_id: string;
    /**
     * - Beneficiary Hash Id of the beneficiary added.
     */
    beneficiary_id: string;
};
/** @returns {SetDefaultBeneficiaryResponse} */
declare function SetDefaultBeneficiaryResponse(): SetDefaultBeneficiaryResponse;
type SetDefaultBeneficiaryResponse = {
    /**
     * - Boolean Flag whether Beneficiary set or not.
     */
    is_beneficiary_set: boolean;
    /**
     * - Response is successful or not.
     */
    success?: boolean;
};
/** @returns {GetPaymentLinkResponse} */
declare function GetPaymentLinkResponse(): GetPaymentLinkResponse;
type GetPaymentLinkResponse = {
    /**
     * - HTTP status code.
     */
    status_code: number;
    /**
     * - Status of payment link.
     */
    payment_link_current_status?: string;
    /**
     * - Successful or failure.
     */
    success: boolean;
    /**
     * - Polling request timeout.
     */
    polling_timeout?: number;
    /**
     * - Url of payment link.
     */
    payment_link_url?: string;
    /**
     * - Merchant order id.
     */
    external_order_id?: string;
    /**
     * - Detailed message.
     */
    message: string;
    /**
     * - Merchant name.
     */
    merchant_name?: string;
    /**
     * - Total value of order.
     */
    amount?: number;
};
/** @returns {ErrorDescription} */
declare function ErrorDescription(): ErrorDescription;
type ErrorDescription = {
    /**
     * - Payment transaction id.
     */
    payment_transaction_id?: string;
    /**
     * - Payment link expired or not.
     */
    expired?: boolean;
    /**
     * - Merchant Order Id.
     */
    merchant_order_id?: string;
    /**
     * - Name of merchant that created payment link.
     */
    merchant_name?: string;
    /**
     * - Detailed message.
     */
    msg?: string;
    /**
     * - Payment link is cancelled or not.
     */
    cancelled?: boolean;
    /**
     * - Amount paid.
     */
    amount?: number;
    /**
     * - Payment link id is valid or not.
     */
    invalid_id?: boolean;
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    /**
     * - HTTP status code.
     */
    status_code: number;
    error?: ErrorDescription;
    /**
     * - Detailed message.
     */
    message: string;
    /**
     * - Successful or failure.
     */
    success: boolean;
};
/** @returns {CreatePaymentLinkMeta} */
declare function CreatePaymentLinkMeta(): CreatePaymentLinkMeta;
type CreatePaymentLinkMeta = {
    /**
     * - Unique identifier for the shopping cart.
     */
    cart_id: string;
    /**
     * - Mode of checkout process (e.g., guest,
     * registered user).
     */
    checkout_mode: string;
    /**
     * - Identifier for the card assigned to the
     * transaction.
     */
    assign_card_id?: string;
    /**
     * - Total amount for the transaction.
     */
    amount: string;
};
/** @returns {CreatePaymentLinkRequest} */
declare function CreatePaymentLinkRequest(): CreatePaymentLinkRequest;
type CreatePaymentLinkRequest = {
    /**
     * - Merchant order id.
     */
    description?: string;
    /**
     * - Merchant order id.
     */
    external_order_id: string;
    /**
     * - Mobile number to which the payment link is
     * to be sent.
     */
    mobile_number: string;
    /**
     * - Total value of order.
     */
    amount: number;
    meta: CreatePaymentLinkMeta;
    /**
     * - Email to which the payment link is to be sent.
     */
    email: string;
};
/** @returns {CreatePaymentLinkResponse} */
declare function CreatePaymentLinkResponse(): CreatePaymentLinkResponse;
type CreatePaymentLinkResponse = {
    /**
     * - HTTP status code.
     */
    status_code: number;
    /**
     * - Successful or failure.
     */
    success: boolean;
    /**
     * - Polling request timeout.
     */
    polling_timeout?: number;
    /**
     * - Url of payment link.
     */
    payment_link_url?: string;
    /**
     * - Detailed message.
     */
    message: string;
    /**
     * - Unique id of payment link.
     */
    payment_link_id?: string;
};
/** @returns {CancelOrResendPaymentLinkRequest} */
declare function CancelOrResendPaymentLinkRequest(): CancelOrResendPaymentLinkRequest;
type CancelOrResendPaymentLinkRequest = {
    /**
     * - Unique id of payment link.
     */
    payment_link_id: string;
};
/** @returns {ResendPaymentLinkResponse} */
declare function ResendPaymentLinkResponse(): ResendPaymentLinkResponse;
type ResendPaymentLinkResponse = {
    /**
     * - HTTP status code.
     */
    status_code: number;
    /**
     * - Polling request timeout.
     */
    polling_timeout?: number;
    /**
     * - Successful or failure.
     */
    success: boolean;
    /**
     * - Detailed message.
     */
    message: string;
};
/** @returns {CancelPaymentLinkResponse} */
declare function CancelPaymentLinkResponse(): CancelPaymentLinkResponse;
type CancelPaymentLinkResponse = {
    /**
     * - HTTP status code.
     */
    status_code: number;
    /**
     * - Successful or failure.
     */
    success: boolean;
    /**
     * - Detailed message.
     */
    message: string;
};
/** @returns {PollingPaymentLinkResponse} */
declare function PollingPaymentLinkResponse(): PollingPaymentLinkResponse;
type PollingPaymentLinkResponse = {
    /**
     * - Status of payment link.
     */
    status?: string;
    /**
     * - HTTP status code.
     */
    status_code?: number;
    /**
     * - Successful or failure.
     */
    success?: boolean;
    /**
     * - HTTP status code.
     */
    http_status?: number;
    /**
     * - Detailed message.
     */
    message?: string;
    /**
     * - Fynd order id.
     */
    order_id?: string;
    /**
     * - Url to redirect to.
     */
    redirect_url?: string;
    /**
     * - Payment link id.
     */
    payment_link_id?: string;
    /**
     * - Aggregator name.
     */
    aggregator_name?: string;
    /**
     * - Total amount for the transaction.
     */
    amount?: number;
};
/** @returns {PaymentMethodsMeta} */
declare function PaymentMethodsMeta(): PaymentMethodsMeta;
type PaymentMethodsMeta = {
    /**
     * - Merchant code.
     */
    merchant_code: string;
    /**
     * - Payment gateway name.
     */
    payment_gateway: string;
    /**
     * - Payment identifier.
     */
    payment_identifier: string;
};
/** @returns {CreateOrderUserPaymentMethods} */
declare function CreateOrderUserPaymentMethods(): CreateOrderUserPaymentMethods;
type CreateOrderUserPaymentMethods = {
    /**
     * - Payment mode name.
     */
    name: string;
    /**
     * - Payment mode.
     */
    mode: string;
    meta: PaymentMethodsMeta;
};
/** @returns {CreateOrderUserRequest} */
declare function CreateOrderUserRequest(): CreateOrderUserRequest;
type CreateOrderUserRequest = {
    /**
     * - Failure page url.
     */
    failure_callback_url: string;
    /**
     * - Currency of the transaction.
     */
    currency: string;
    /**
     * - Unique id of payment link.
     */
    payment_link_id: string;
    payment_methods: CreateOrderUserPaymentMethods;
    /**
     * - Success page url.
     */
    success_callback_url: string;
    /**
     * - Meta details.
     */
    meta?: any;
};
/** @returns {CreateOrderUserData} */
declare function CreateOrderUserData(): CreateOrderUserData;
type CreateOrderUserData = {
    /**
     * - Method details.
     */
    method?: string;
    /**
     * - Aggregator name.
     */
    aggregator?: string;
    /**
     * - Aggregator customer id.
     */
    customer_id?: string;
    /**
     * - Mobile number.
     */
    contact?: string;
    /**
     * - Merchant order id.
     */
    merchant_order_id?: string;
    /**
     * - Aggregator order id.
     */
    order_id?: string;
    /**
     * - Currency of the transaction.
     */
    currency?: string;
    /**
     * - Callback url for aggregator.
     */
    callback_url?: string;
    /**
     * - Total amount for the transaction.
     */
    amount?: number;
    /**
     * - Email.
     */
    email?: string;
};
/** @returns {CreateOrderUserResponse} */
declare function CreateOrderUserResponse(): CreateOrderUserResponse;
type CreateOrderUserResponse = {
    /**
     * - HTTP status code.
     */
    status_code: number;
    /**
     * - Successful or failure.
     */
    success: boolean;
    data?: CreateOrderUserData;
    /**
     * - Detailed message.
     */
    message: string;
    /**
     * - Merchant order id.
     */
    order_id?: string;
    /**
     * - Callback url for aggregator.
     */
    callback_url?: string;
    /**
     * - Payment confirm url for aggregator.
     */
    payment_confirm_url?: string;
};
/** @returns {BalanceDetails} */
declare function BalanceDetails(): BalanceDetails;
type BalanceDetails = {
    /**
     * - Formatted Amount with currency symbol.
     */
    formatted_value?: string;
    /**
     * - Currency Code.
     */
    currency?: string;
    /**
     * - Payment amount.
     */
    value?: number;
};
/** @returns {CreditSummary} */
declare function CreditSummary(): CreditSummary;
type CreditSummary = {
    total_due_amount?: BalanceDetails;
    /**
     * - Customer Credit status.
     */
    status?: string;
    limit?: BalanceDetails;
    /**
     * - ID at Credit aggregator end.
     */
    credit_line_id?: string;
    amount_available?: BalanceDetails;
    due_amount?: BalanceDetails;
    /**
     * - Due date for repayment.
     */
    due_date?: string;
    balance?: BalanceDetails;
    /**
     * - Message to customer.
     */
    status_message?: string;
    /**
     * - Url for repayment.
     */
    repayment_url?: string;
    /**
     * - Statement of accounts. Show payment history.
     */
    soa_url?: string;
    /**
     * - Eligibility flag to complete transaction.
     */
    is_eligible_for_txn?: boolean;
    /**
     * - Unique aggregator customer id.
     */
    merchant_customer_ref_id?: string;
    /**
     * - Status from Credit aggregator end.
     */
    buyer_status?: string;
    /**
     * - Url for activation.
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
     * - Aggregator Operation is successful or not.
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
     * - City of the KYC address.
     */
    city: string;
    /**
     * - Second line of the address.
     */
    addressline2?: string;
    /**
     * - State of the KYC address.
     */
    state: string;
    /**
     * - Type of ownership for the address
     * (e.g., rented, owned).
     */
    ownership_type?: string;
    /**
     * - Postal code of the address.
     */
    pincode: string;
    /**
     * - Landmark near the address.
     */
    land_mark?: string;
    /**
     * - First line of the address.
     */
    addressline1: string;
};
/** @returns {UserPersonalInfoInDetails} */
declare function UserPersonalInfoInDetails(): UserPersonalInfoInDetails;
type UserPersonalInfoInDetails = {
    /**
     * - First name of the individual.
     */
    first_name: string;
    /**
     * - Voter ID number.
     */
    voter_id?: string;
    /**
     * - Gender of the individual.
     */
    gender?: string;
    /**
     * - Date of birth of the individual.
     */
    dob: string;
    /**
     * - Passport number.
     */
    passport?: string;
    /**
     * - Father's name.
     */
    fathers_name?: string;
    /**
     * - Mother's name.
     */
    mothers_name?: string;
    /**
     * - Middle name of the individual.
     */
    middle_name?: string;
    /**
     * - Last name of the individual.
     */
    last_name?: string;
    /**
     * - Permanent Account Number (PAN).
     */
    pan?: string;
    /**
     * - Driving license number.
     */
    driving_license?: string;
    /**
     * - Indicates whether the email is verified.
     */
    email_verified: boolean;
    address_as_per_id: KYCAddress;
    /**
     * - Indicates whether the mobile number is verified.
     */
    mobile_verified: boolean;
    /**
     * - Phone number.
     */
    phone: string;
    /**
     * - Email address.
     */
    email?: string;
};
/** @returns {MarketplaceInfo} */
declare function MarketplaceInfo(): MarketplaceInfo;
type MarketplaceInfo = {
    /**
     * - Date of joining.
     */
    date_of_joining?: string;
    /**
     * - Name of store.
     */
    name: string;
    /**
     * - Merchant id.
     */
    membership_id: string;
};
/** @returns {BusinessDetails} */
declare function BusinessDetails(): BusinessDetails;
type BusinessDetails = {
    /**
     * - Type of business ownership
     * (e.g., sole proprietorship, partnership).
     */
    business_ownership_type?: string;
    /**
     * - Age or duration of the business.
     */
    vintage?: string;
    /**
     * - Goods and Services Tax Identification Number.
     */
    gstin?: string;
    /**
     * - Permanent Account Number of the business.
     */
    pan?: string;
    /**
     * - Type of legal entity (e.g., corporation, LLC).
     */
    entity_type?: string;
    /**
     * - Shop and Establishment
     * registration details.
     */
    shop_and_establishment?: any;
    /**
     * - Food Safety and Standards Authority of India
     * registration number.
     */
    fssai?: string;
    /**
     * - Food and Drug Administration registration number.
     */
    fda?: string;
    /**
     * - Type of business (e.g., retail, wholesale).
     */
    business_type?: string;
    /**
     * - Name of the business.
     */
    name?: string;
    address?: KYCAddress;
};
/** @returns {DeviceDetails} */
declare function DeviceDetails(): DeviceDetails;
type DeviceDetails = {
    /**
     * - IP.
     */
    identification_number?: string;
    /**
     * - Static value = ip.
     */
    identifier_type?: string;
    /**
     * - Device Model.
     */
    device_model?: string;
    /**
     * - Device maker.
     */
    device_make?: string;
    /**
     * - Device Type(E.g. Mobile).
     */
    device_type?: string;
    /**
     * - OS Name.
     */
    os?: string;
    /**
     * - OS Version.
     */
    os_version?: string;
};
/** @returns {CustomerOnboardingRequest} */
declare function CustomerOnboardingRequest(): CustomerOnboardingRequest;
type CustomerOnboardingRequest = {
    personal_info?: UserPersonalInfoInDetails;
    /**
     * - Merchant Category Code, indicating the type of business.
     */
    mcc?: string;
    /**
     * - Payment aggregator handling the transaction.
     */
    aggregator: string;
    marketplace_info?: MarketplaceInfo;
    /**
     * - Callback url.
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
     * - User Session.
     */
    session?: any;
    /**
     * - Transaction status.
     */
    status: boolean;
    /**
     * - Description of status.
     */
    status_remark?: string;
    /**
     * - Whether is eligible for transaction.
     */
    is_eligible_for_txn?: boolean;
    /**
     * - Rupifi customer ID.
     */
    merchant_customer_ref_id?: string;
    /**
     * - Url for activation.
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
     * - HTTP Status code.
     */
    status_code: number;
    /**
     * - Dict containing the outstanding order details.
     */
    data?: any[];
    /**
     * - Response is successful or not.
     */
    success: boolean;
    /**
     * - Message.
     */
    message?: string;
};
/** @returns {PaidOrderDetailsResponse} */
declare function PaidOrderDetailsResponse(): PaidOrderDetailsResponse;
type PaidOrderDetailsResponse = {
    /**
     * - HTTP Status code.
     */
    status_code: number;
    /**
     * - Dict containing the paid order details.
     */
    data?: any[];
    /**
     * - Response is successful or not.
     */
    success: boolean;
    /**
     * - Message.
     */
    message?: string;
};
/** @returns {DeleteRefundAccountResponse} */
declare function DeleteRefundAccountResponse(): DeleteRefundAccountResponse;
type DeleteRefundAccountResponse = {
    /**
     * - Success/Failure of the deleted beneficiary.
     */
    success: boolean;
    /**
     * - Message.
     */
    message: string;
};
/** @returns {RefundOptionsDetails} */
declare function RefundOptionsDetails(): RefundOptionsDetails;
type RefundOptionsDetails = {
    /**
     * - Refund option display name.
     */
    display_name: string;
    /**
     * - Refund ID. It will be unique identifier.
     */
    id: number;
    /**
     * - Refund option is active or not.
     */
    is_active?: boolean;
    /**
     * - Refund option name.
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
     * Code value.
     */
    payment_modes: string[];
};
/** @returns {RefundOptionResponse} */
declare function RefundOptionResponse(): RefundOptionResponse;
type RefundOptionResponse = {
    /**
     * - Available offline
     * refund options data.
     */
    offline_refund_options: OfflineRefundOptions;
    /**
     * - Success/Failure Of response.
     */
    success: boolean;
    /**
     * - Available refund options data.
     */
    refund_options: RefundOptions;
};
/** @returns {SelectedRefundOptionResponse} */
declare function SelectedRefundOptionResponse(): SelectedRefundOptionResponse;
type SelectedRefundOptionResponse = {
    /**
     * - Selected transfer mode for given shipment.
     */
    transfer_mode: any;
    /**
     * - ID of the shipment.
     */
    shipment_id: string;
    /**
     * - Detailed message.
     */
    message: string;
    /**
     * - Whether refund is successful or not.
     */
    success: boolean;
};
/** @returns {WalletBeneficiaryDetails} */
declare function WalletBeneficiaryDetails(): WalletBeneficiaryDetails;
type WalletBeneficiaryDetails = {
    /**
     * - Beneficiary Id.
     */
    beneficiary_id: string;
    /**
     * - MOdification Date of Beneficiary.
     */
    modified_on: string;
    /**
     * - Display Name Of Account.
     */
    display_name: string;
    /**
     * - Id of the wallet beneficiary.
     */
    id: number;
    /**
     * - SHort Title Of Account.
     */
    subtitle: string;
    /**
     * - Transfer Mode Of Account.
     */
    transfer_mode: string;
    /**
     * - MObile no of User.
     */
    mobile?: string;
    /**
     * - Boolean Flag whether Beneficiary set or not.
     */
    is_active: boolean;
    /**
     * - Creation Date of Beneficiary.
     */
    created_on: string;
    /**
     * - Address of User.
     */
    address: string;
    /**
     * - Title Of Account.
     */
    title: string;
    /**
     * - Bank Name Of Account.
     */
    wallet_address: string;
    /**
     * - Remarks.
     */
    comment?: string;
    /**
     * - Branch Name Of Account.
     */
    wallet?: string;
    /**
     * - EMail of User.
     */
    email: string;
    /**
     * - User Id Who filled the Beneficiary.
     */
    delights_user_name?: string;
};
/** @returns {UpiBeneficiaryDetails} */
declare function UpiBeneficiaryDetails(): UpiBeneficiaryDetails;
type UpiBeneficiaryDetails = {
    /**
     * - Beneficiary Id.
     */
    beneficiary_id: string;
    /**
     * - MOdification Date of Beneficiary.
     */
    modified_on: string;
    /**
     * - Display Name Of Account.
     */
    display_name: string;
    /**
     * - Id of the upi beneficiary.
     */
    id: number;
    /**
     * - SHort Title Of Account.
     */
    subtitle: string;
    /**
     * - Transfer Mode Of Account.
     */
    transfer_mode: string;
    /**
     * - Branch Name Of Account.
     */
    vpa?: string;
    /**
     * - Mobile no of User.
     */
    mobile?: string;
    /**
     * - Bank Name Of Account.
     */
    vpa_address: string;
    /**
     * - Creation Date of Beneficiary.
     */
    created_on: string;
    /**
     * - Address of User.
     */
    address: string;
    /**
     * - Title Of Account.
     */
    title: string;
    /**
     * - Remarks.
     */
    comment?: string;
    /**
     * - Boolean Flag whether Beneficiary set or not.
     */
    is_active: boolean;
    /**
     * - EMail of User.
     */
    email: string;
    /**
     * - User Id Who filled the Beneficiary.
     */
    delights_user_name?: string;
};
/** @returns {BeneficiaryRefundOptions} */
declare function BeneficiaryRefundOptions(): BeneficiaryRefundOptions;
type BeneficiaryRefundOptions = {
    /**
     * - List of all add bank beneficiary details.
     */
    bank?: OrderBeneficiaryDetails;
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
    /**
     * - Max Limit for adding bank account, UPI and wallet.
     */
    limit: any;
};
/** @returns {ValidateValidateAddressRequest} */
declare function ValidateValidateAddressRequest(): ValidateValidateAddressRequest;
type ValidateValidateAddressRequest = {
    /**
     * - IFSC Code.
     */
    ifsc_code?: string;
    /**
     * - VPA Address.
     */
    upi_vpa?: string;
    /**
     * - Aggregator Name.
     */
    aggregator?: string;
};
/** @returns {VPADetails} */
declare function VPADetails(): VPADetails;
type VPADetails = {
    /**
     * - Is VPA valid or not.
     */
    is_valid: boolean;
    /**
     * - VPA address.
     */
    upi_vpa: string;
    /**
     * - VPA validation message.
     */
    status: string;
    /**
     * - VPA Customer Name.
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
     * - Whether address validation is successful or not.
     */
    success: boolean;
    /**
     * - IFSC details response data.
     */
    ifsc?: any;
};
/** @returns {PaymentMethodsMetaOrder} */
declare function PaymentMethodsMetaOrder(): PaymentMethodsMetaOrder;
type PaymentMethodsMetaOrder = {
    /**
     * - Merchant code.
     */
    merchant_code: string;
    /**
     * - Payment gateway name.
     */
    payment_gateway: string;
    /**
     * - Payment identifier.
     */
    payment_identifier: string;
};
/** @returns {PaymentOrderMethods} */
declare function PaymentOrderMethods(): PaymentOrderMethods;
type PaymentOrderMethods = {
    /**
     * - Amount to be collected.
     */
    amount: number;
    /**
     * - Payment type i.e. Required / Blocked.
     */
    payment?: string;
    /**
     * - Payment mode.
     */
    mode: string;
    meta: PaymentMethodsMetaOrder;
    /**
     * - Payment mode name.
     */
    name: string;
};
/** @returns {PaymentOrderRequest} */
declare function PaymentOrderRequest(): PaymentOrderRequest;
type PaymentOrderRequest = {
    /**
     * - All payment methods for order.
     */
    payment_methods?: PaymentOrderMethods[];
    /**
     * - Order id.
     */
    order_id: string;
    /**
     * - Shipment_id.
     */
    shipment_id?: string;
};
/** @returns {PaymentOrderData} */
declare function PaymentOrderData(): PaymentOrderData;
type PaymentOrderData = {
    /**
     * - Amount.
     */
    amount?: number;
    /**
     * - Aggregator name.
     */
    aggregator?: string;
    /**
     * - Callback url for aggregator.
     */
    callback_url?: string;
    /**
     * - Aggregator order id.
     */
    order_id?: string;
    /**
     * - Aggregator customer id.
     */
    customer_id?: string;
    /**
     * - Merchant order id.
     */
    merchant_order_id?: string;
    /**
     * - Currency used for the order.
     */
    currency?: string;
    /**
     * - Email address of the customer.
     */
    email?: string;
    /**
     * - Contact number of the customer.
     */
    contact?: string;
    /**
     * - Method of payment or delivery for the order.
     */
    method?: string;
};
/** @returns {PaymentOrderResponse} */
declare function PaymentOrderResponse(): PaymentOrderResponse;
type PaymentOrderResponse = {
    /**
     * - Payment confirm url for aggregator.
     */
    payment_confirm_url?: string;
    /**
     * - Callback url for aggregator.
     */
    callback_url?: string;
    /**
     * - Merchant order id.
     */
    order_id?: string;
    /**
     * - Successful or failure.
     */
    success?: boolean;
    /**
     * - HTTP status code.
     */
    status_code: number;
    data?: PaymentOrderData;
    /**
     * - Detailed message.
     */
    message: string;
};
/** @returns {ShipmentRefundRequest} */
declare function ShipmentRefundRequest(): ShipmentRefundRequest;
type ShipmentRefundRequest = {
    /**
     * - Shipment Id of the respective Merchant Order Id.
     */
    shipment_id: string;
    /**
     * - Merchant Order Id.
     */
    order_id: string;
    /**
     * - Transfer Mode of the Beneficiary to be added.
     */
    transfer_mode: string;
    /**
     * - Beneficiary Hash Id of the beneficiary added.
     */
    beneficiary_id?: string;
};
/** @returns {ShipmentRefundDetail} */
declare function ShipmentRefundDetail(): ShipmentRefundDetail;
type ShipmentRefundDetail = {
    /**
     * - ID of the shipment.
     */
    shipment_id: string;
    /**
     * - ID of an order.
     */
    order_id: string;
    /**
     * - Mode of transfer for the shipment refund
     * (e.g., bank transfer, digital wallet).
     */
    transfer_mode: string;
    /**
     * - Unique identifier for the beneficiary
     * receiving the refund.
     */
    beneficiary_id: string;
};
/** @returns {ShipmentRefundResponse} */
declare function ShipmentRefundResponse(): ShipmentRefundResponse;
type ShipmentRefundResponse = {
    /**
     * - Selected Shipment refund option details.
     */
    data: ShipmentRefundDetail;
    /**
     * - Successful or not.
     */
    success: boolean;
    /**
     * - Detailed message.
     */
    message: string;
};
