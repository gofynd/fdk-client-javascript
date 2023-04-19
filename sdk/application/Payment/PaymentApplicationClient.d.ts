export = Payment;
declare class Payment {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        addBeneficiaryDetails: string;
        addRefundBankAccountUsingOTP: string;
        attachCardToCustomer: string;
        cancelPaymentLink: string;
        checkAndUpdatePaymentStatus: string;
        checkAndUpdatePaymentStatusPaymentLink: string;
        checkCredit: string;
        createOrderHandlerPaymentLink: string;
        createPaymentLink: string;
        customerCreditSummary: string;
        customerOnboard: string;
        deleteUserCard: string;
        enableOrDisableRefundTransferMode: string;
        getActiveCardAggregator: string;
        getActiveRefundTransferModes: string;
        getActiveUserCards: string;
        getAggregatorsConfig: string;
        getEpaylaterBannerDetails: string;
        getOrderBeneficiariesDetail: string;
        getPaymentLink: string;
        getPaymentModeRoutes: string;
        getPaymentModeRoutesPaymentLink: string;
        getPosPaymentModeRoutes: string;
        getRupifiBannerDetails: string;
        getUserBeneficiariesDetail: string;
        initialisePayment: string;
        initialisePaymentPaymentLink: string;
        pollingPaymentLink: string;
        redirectToAggregator: string;
        renderHTML: string;
        resendOrCancelPayment: string;
        resendPaymentLink: string;
        updateDefaultBeneficiary: string;
        validateVPA: string;
        verifyAndChargePayment: string;
        verifyCustomerForPayment: string;
        verifyIfscCode: string;
        verifyOtpAndAddBeneficiaryForBank: string;
        verifyOtpAndAddBeneficiaryForWallet: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddBeneficiaryDetailsRequest} arg.body
     * @returns {Promise<RefundAccountResponse>} - Success response
     * @summary: Save bank details for cancelled/returned order
     * @description: Use this API to save the bank details for a returned or cancelled order to refund the amount.
     */
    addBeneficiaryDetails({ body }?: {
        body: AddBeneficiaryDetailsRequest;
    }): Promise<RefundAccountResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddBeneficiaryDetailsOTPRequest} arg.body
     * @returns {Promise<RefundAccountResponse>} - Success response
     * @summary: Save bank details for cancelled/returned order
     * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
     */
    addRefundBankAccountUsingOTP({ body }?: {
        body: AddBeneficiaryDetailsOTPRequest;
    }): Promise<RefundAccountResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AttachCardRequest} arg.body
     * @returns {Promise<AttachCardsResponse>} - Success response
     * @summary: Attach a saved card to customer.
     * @description: Use this API to attach a customer's saved card at the payment gateway, such as Stripe, Juspay.
     */
    attachCardToCustomer({ body }?: {
        body: AttachCardRequest;
    }): Promise<AttachCardsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CancelOrResendPaymentLinkRequest} arg.body
     * @returns {Promise<CancelPaymentLinkResponse>} - Success response
     * @summary: Cancel payment link
     * @description: Use this API to cancel a payment link for the customer
     */
    cancelPaymentLink({ body }?: {
        body: CancelOrResendPaymentLinkRequest;
    }): Promise<CancelPaymentLinkResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentStatusUpdateRequest} arg.body
     * @returns {Promise<PaymentStatusUpdateResponse>} - Success response
     * @summary: Performs continuous polling to check status of payment on the server
     * @description: Use this API to perform continuous polling at intervals to check the status of payment until timeout.
     */
    checkAndUpdatePaymentStatus({ body }?: {
        body: PaymentStatusUpdateRequest;
    }): Promise<PaymentStatusUpdateResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentStatusUpdateRequest} arg.body
     * @returns {Promise<PaymentStatusUpdateResponse>} - Success response
     * @summary: Performs continuous polling to check status of payment on the server
     * @description: Use this API to perform continuous polling at intervals to check the status of payment until timeout.
     */
    checkAndUpdatePaymentStatusPaymentLink({ body }?: {
        body: PaymentStatusUpdateRequest;
    }): Promise<PaymentStatusUpdateResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.aggregator] -
     * @returns {Promise<CheckCreditResponse>} - Success response
     * @summary: API to fetch the customer credit summary
     * @description: Use this API to fetch the customer credit summary.
     */
    checkCredit({ aggregator }?: {
        aggregator?: string;
    }): Promise<CheckCreditResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateOrderUserRequest} arg.body
     * @returns {Promise<CreateOrderUserResponse>} - Success response
     * @summary: Create Order user
     * @description: Use this API to create a order and payment on aggregator side
     */
    createOrderHandlerPaymentLink({ body }?: {
        body: CreateOrderUserRequest;
    }): Promise<CreateOrderUserResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreatePaymentLinkRequest} arg.body
     * @returns {Promise<CreatePaymentLinkResponse>} - Success response
     * @summary: Create payment link
     * @description: Use this API to create a payment link for the customer
     */
    createPaymentLink({ body }?: {
        body: CreatePaymentLinkRequest;
    }): Promise<CreatePaymentLinkResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.aggregator] -
     * @returns {Promise<CustomerCreditSummaryResponse>} - Success response
     * @summary: API to fetch the customer credit summary
     * @description: Use this API to fetch the customer credit summary.
     */
    customerCreditSummary({ aggregator }?: {
        aggregator?: string;
    }): Promise<CustomerCreditSummaryResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CustomerOnboardingRequest} arg.body
     * @returns {Promise<CustomerOnboardingResponse>} - Success response
     * @summary: API to fetch the customer credit summary
     * @description: Use this API to fetch the customer credit summary.
     */
    customerOnboard({ body }?: {
        body: CustomerOnboardingRequest;
    }): Promise<CustomerOnboardingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DeletehCardRequest} arg.body
     * @returns {Promise<DeleteCardsResponse>} - Success response
     * @summary: Delete a card
     * @description: Use this API to delete a card added by a user on the payment gateway and clear the cache.
     */
    deleteUserCard({ body }?: {
        body: DeletehCardRequest;
    }): Promise<DeleteCardsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateRefundTransferModeRequest} arg.body
     * @returns {Promise<UpdateRefundTransferModeResponse>} - Success response
     * @summary: Enable/Disable a mode for transferring a refund
     * @description: Activate or Deactivate Transfer Mode to collect Beneficiary Details for Refund
     */
    enableOrDisableRefundTransferMode({ body }?: {
        body: UpdateRefundTransferModeRequest;
    }): Promise<UpdateRefundTransferModeResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.refresh] -
     * @returns {Promise<ActiveCardPaymentGatewayResponse>} - Success response
     * @summary: Fetch active payment gateway for card payments
     * @description: Use this API to retrieve an active payment aggregator along with the Customer ID. This is applicable for cards payments only.
     */
    getActiveCardAggregator({ refresh }?: {
        refresh?: boolean;
    }): Promise<ActiveCardPaymentGatewayResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<TransferModeResponse>} - Success response
     * @summary: Lists the mode of refund
     * @description: Use this API to retrieve eligible refund modes (such as Netbanking) and add the beneficiary details.
     */
    getActiveRefundTransferModes({}?: any): Promise<TransferModeResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.forceRefresh] -
     * @returns {Promise<ListCardsResponse>} - Success response
     * @summary: Fetch the list of cards saved by the user
     * @description: Use this API to retrieve a list of cards stored by user from an active payment gateway.
     */
    getActiveUserCards({ forceRefresh }?: {
        forceRefresh?: boolean;
    }): Promise<ListCardsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.xApiToken] - Used for basic authentication.
     * @param {boolean} [arg.refresh] - This is a boolean value. Select `true`
     *   to remove temporary cache files on payment gateway and replace with the
     *   latest one.
     * @returns {Promise<AggregatorsConfigDetailResponse>} - Success response
     * @summary: Get payment gateway keys
     * @description: Use this API to retrieve the payment gateway key, secrets, merchant, SDK/API details to complete a payment at front-end.
     */
    getAggregatorsConfig({ xApiToken, refresh }?: {
        xApiToken?: string;
        refresh?: boolean;
    }): Promise<AggregatorsConfigDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<EpaylaterBannerResponse>} - Success response
     * @summary: Get Epaylater Enabled
     * @description: Get Epaylater Enabled if user is tentatively approved by epaylater
     */
    getEpaylaterBannerDetails({}?: any): Promise<EpaylaterBannerResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - A unique number used for identifying and
     *   tracking your orders.
     * @returns {Promise<OrderBeneficiaryResponse>} - Success response
     * @summary: Lists the beneficiary of a refund
     * @description: Use this API to get the details of all active beneficiary added by a user for refund.
     */
    getOrderBeneficiariesDetail({ orderId }?: {
        orderId: string;
    }): Promise<OrderBeneficiaryResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.paymentLinkId] -
     * @returns {Promise<GetPaymentLinkResponse>} - Success response
     * @summary: Get payment link
     * @description: Use this API to get a payment link
     */
    getPaymentLink({ paymentLinkId }?: {
        paymentLinkId?: string;
    }): Promise<GetPaymentLinkResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.amount - Payable amount.
     * @param {string} arg.cartId - Identifier of the cart.
     * @param {string} arg.pincode - The PIN Code of the destination address, e.g. 400059
     * @param {string} arg.checkoutMode - Option to checkout for self or for others.
     * @param {boolean} [arg.refresh] - This is a boolean value. Select `true`
     *   to remove temporary cache files on payment gateway and replace with the
     *   latest one.
     * @param {string} [arg.cardReference] - Card reference id of user's debit
     *   or credit card.
     * @param {string} [arg.userDetails] - URIencoded JSON containing details of
     *   an anonymous user.
     * @returns {Promise<PaymentModeRouteResponse>} - Success response
     * @summary: Get applicable payment options
     * @description: Use this API to get all valid payment options for doing a payment.
     */
    getPaymentModeRoutes({ amount, cartId, pincode, checkoutMode, refresh, cardReference, userDetails, }?: {
        amount: number;
        cartId: string;
        pincode: string;
        checkoutMode: string;
        refresh?: boolean;
        cardReference?: string;
        userDetails?: string;
    }): Promise<PaymentModeRouteResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.paymentLinkId - Payment link id
     * @returns {Promise<PaymentModeRouteResponse>} - Success response
     * @summary: Get applicable payment options for payment link
     * @description: Use this API to get all valid payment options for doing a payment through payment link
     */
    getPaymentModeRoutesPaymentLink({ paymentLinkId }?: {
        paymentLinkId: string;
    }): Promise<PaymentModeRouteResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.amount - Payable amount.
     * @param {string} arg.cartId - Identifier of the cart.
     * @param {string} arg.pincode - The PIN Code of the destination address, e.g. 400059
     * @param {string} arg.checkoutMode - Option to checkout for self or for others.
     * @param {boolean} [arg.refresh] - This is a boolean value. Select `true`
     *   to remove temporary cache files on payment gateway and replace with the
     *   latest one.
     * @param {string} [arg.cardReference] - Card reference id of user's debit
     *   or credit card.
     * @param {string} arg.orderType - The order type of shipment * HomeDelivery
     *   - If the customer wants the order home-delivered * PickAtStore - If the
     *   customer wants the handover of an order at the store itself.
     * @param {string} [arg.userDetails] - URIencoded JSON containing details of
     *   an anonymous user.
     * @returns {Promise<PaymentModeRouteResponse>} - Success response
     * @summary: Get applicable payment options for Point-of-Sale (POS)
     * @description: Use this API to get all valid payment options for doing a payment in POS.
     */
    getPosPaymentModeRoutes({ amount, cartId, pincode, checkoutMode, orderType, refresh, cardReference, userDetails, }?: {
        amount: number;
        cartId: string;
        pincode: string;
        checkoutMode: string;
        refresh?: boolean;
        cardReference?: string;
        orderType: string;
        userDetails?: string;
    }): Promise<PaymentModeRouteResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<RupifiBannerResponse>} - Success response
     * @summary: Get CreditLine Offer
     * @description: Get CreditLine Offer if user is tentatively approved by rupifi
     */
    getRupifiBannerDetails({}?: any): Promise<RupifiBannerResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - A unique number used for identifying and
     *   tracking your orders.
     * @returns {Promise<OrderBeneficiaryResponse>} - Success response
     * @summary: Lists the beneficiary of a refund
     * @description: Use this API to get the details of all active beneficiary added by a user for refund.
     */
    getUserBeneficiariesDetail({ orderId }?: {
        orderId: string;
    }): Promise<OrderBeneficiaryResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentInitializationRequest} arg.body
     * @returns {Promise<PaymentInitializationResponse>} - Success response
     * @summary: Initialize a payment (server-to-server) for UPI and BharatQR
     * @description: PUse this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen.
     */
    initialisePayment({ body }?: {
        body: PaymentInitializationRequest;
    }): Promise<PaymentInitializationResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentInitializationRequest} arg.body
     * @returns {Promise<PaymentInitializationResponse>} - Success response
     * @summary: Initialize a payment (server-to-server) for UPI and BharatQR
     * @description: Use this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen.
     */
    initialisePaymentPaymentLink({ body }?: {
        body: PaymentInitializationRequest;
    }): Promise<PaymentInitializationResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.paymentLinkId] -
     * @returns {Promise<PollingPaymentLinkResponse>} - Success response
     * @summary: Used for polling if payment successful or not
     * @description: Use this API to poll if payment through payment was successful or not
     */
    pollingPaymentLink({ paymentLinkId }?: {
        paymentLinkId?: string;
    }): Promise<PollingPaymentLinkResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.source] - This is a String value that contains
     *   callback URL as value.
     * @param {string} [arg.aggregator] - This is a String value that contains
     *   aggregator name as value.
     * @returns {Promise<RedirectToAggregatorResponse>} - Success response
     * @summary: API to get the redirect url to redirect the user to aggregator's page
     * @description: Use this API to get the redirect url to redirect the user to aggregator's page
     */
    redirectToAggregator({ source, aggregator }?: {
        source?: string;
        aggregator?: string;
    }): Promise<RedirectToAggregatorResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {renderHTMLRequest} arg.body
     * @returns {Promise<renderHTMLResponse>} - Success response
     * @summary: Convert base64 string to HTML form
     * @description: Use this API to decode base64 html form to plain HTML string.
     */
    renderHTML({ body }?: {
        body: renderHTMLRequest;
    }): Promise<renderHTMLResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ResendOrCancelPaymentRequest} arg.body
     * @returns {Promise<ResendOrCancelPaymentResponse>} - Success response
     * @summary: API to resend and cancel a payment link which was already generated.
     * @description: Use this API to perform resend or cancel a payment link based on request payload.
     */
    resendOrCancelPayment({ body }?: {
        body: ResendOrCancelPaymentRequest;
    }): Promise<ResendOrCancelPaymentResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CancelOrResendPaymentLinkRequest} arg.body
     * @returns {Promise<ResendPaymentLinkResponse>} - Success response
     * @summary: Resend payment link
     * @description: Use this API to resend a payment link for the customer
     */
    resendPaymentLink({ body }?: {
        body: CancelOrResendPaymentLinkRequest;
    }): Promise<ResendPaymentLinkResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SetDefaultBeneficiaryRequest} arg.body
     * @returns {Promise<SetDefaultBeneficiaryResponse>} - Success response
     * @summary: Set a default beneficiary for a refund
     * @description: Use this API to set a default beneficiary for getting a refund.
     */
    updateDefaultBeneficiary({ body }?: {
        body: SetDefaultBeneficiaryRequest;
    }): Promise<SetDefaultBeneficiaryResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ValidateVPARequest} arg.body
     * @returns {Promise<ValidateVPAResponse>} - Success response
     * @summary: API to Validate UPI ID
     * @description: API to Validate UPI ID
     */
    validateVPA({ body }?: {
        body: ValidateVPARequest;
    }): Promise<ValidateVPAResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ChargeCustomerRequest} arg.body
     * @returns {Promise<ChargeCustomerResponse>} - Success response
     * @summary: Verify and charge payment
     * @description: Use this API to verify and check the status of a payment transaction (server-to-server) made through aggregators like Simpl and Mswipe.
     */
    verifyAndChargePayment({ body }?: {
        body: ChargeCustomerRequest;
    }): Promise<ChargeCustomerResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ValidateCustomerRequest} arg.body
     * @returns {Promise<ValidateCustomerResponse>} - Success response
     * @summary: Validate customer for payment
     * @description: Use this API to check if the customer is eligible to use credit-line facilities such as Simpl Pay Later and Rupifi.
     */
    verifyCustomerForPayment({ body }?: {
        body: ValidateCustomerRequest;
    }): Promise<ValidateCustomerResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.ifscCode] - A 11-digit alphanumeric code that
     *   uniquely identifies a bank branch.
     * @returns {Promise<IfscCodeResponse>} - Success response
     * @summary: Verify IFSC Code
     * @description: Use this API to check whether the 11-digit IFSC code is valid and to fetch the bank details for refund.
     */
    verifyIfscCode({ ifscCode }?: {
        ifscCode?: string;
    }): Promise<IfscCodeResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddBeneficiaryViaOtpVerificationRequest} arg.body
     * @returns {Promise<AddBeneficiaryViaOtpVerificationResponse>} - Success response
     * @summary: Verify the beneficiary details using OTP
     * @description: Use this API to perform an OTP validation before saving the beneficiary details added for a refund.
     */
    verifyOtpAndAddBeneficiaryForBank({ body }?: {
        body: AddBeneficiaryViaOtpVerificationRequest;
    }): Promise<AddBeneficiaryViaOtpVerificationResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {WalletOtpRequest} arg.body
     * @returns {Promise<WalletOtpResponse>} - Success response
     * @summary: Send OTP on adding a wallet beneficiary
     * @description: Use this API to send an OTP while adding a wallet beneficiary by mobile no. verification.
     */
    verifyOtpAndAddBeneficiaryForWallet({ body }?: {
        body: WalletOtpRequest;
    }): Promise<WalletOtpResponse>;
}
