export = Payment;
declare class Payment {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        addBeneficiaryDetails: string;
        addRefundBankAccountUsingOTP: string;
        attachCardToCustomer: string;
        cancelPaymentLink: string;
        cardDetails: string;
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
        outstandingOrderDetails: string;
        paidOrderDetails: string;
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
     * @param {PaymentApplicationValidator.addBeneficiaryDetails} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.RefundAccountResponse>} -
     *   Success response
     * @name addBeneficiaryDetails
     * @summary: Save bank details for cancelled/returned order
     * @description: Use this API to save the bank details for a returned or cancelled order to refund the amount.
     */
    addBeneficiaryDetails({ body }?: PaymentApplicationValidator.addBeneficiaryDetails): Promise<PaymentApplicationModel.RefundAccountResponse>;
    /**
     * @param {PaymentApplicationValidator.addRefundBankAccountUsingOTP} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.RefundAccountResponse>} -
     *   Success response
     * @name addRefundBankAccountUsingOTP
     * @summary: Save bank details for cancelled/returned order
     * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
     */
    addRefundBankAccountUsingOTP({ body }?: PaymentApplicationValidator.addRefundBankAccountUsingOTP): Promise<PaymentApplicationModel.RefundAccountResponse>;
    /**
     * @param {PaymentApplicationValidator.attachCardToCustomer} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.AttachCardsResponse>} - Success response
     * @name attachCardToCustomer
     * @summary: Attach a saved card to customer.
     * @description: Use this API to attach a customer's saved card at the payment gateway, such as Stripe, Juspay.
     */
    attachCardToCustomer({ body }?: PaymentApplicationValidator.attachCardToCustomer): Promise<PaymentApplicationModel.AttachCardsResponse>;
    /**
     * @param {PaymentApplicationValidator.cancelPaymentLink} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.CancelPaymentLinkResponse>} -
     *   Success response
     * @name cancelPaymentLink
     * @summary: Cancel payment link
     * @description: Use this API to cancel a payment link for the customer
     */
    cancelPaymentLink({ body }?: PaymentApplicationValidator.cancelPaymentLink): Promise<PaymentApplicationModel.CancelPaymentLinkResponse>;
    /**
     * @param {PaymentApplicationValidator.cardDetails} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.CardDetailsResponse>} - Success response
     * @name cardDetails
     * @summary: API to get Card info from PG
     * @description: API to get Card info from PG
     */
    cardDetails({ cardInfo, aggregator }?: PaymentApplicationValidator.cardDetails): Promise<PaymentApplicationModel.CardDetailsResponse>;
    /**
     * @param {PaymentApplicationValidator.checkAndUpdatePaymentStatus} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.PaymentStatusUpdateResponse>}
     *   - Success response
     *
     * @name checkAndUpdatePaymentStatus
     * @summary: Performs continuous polling to check status of payment on the server
     * @description: Use this API to perform continuous polling at intervals to check the status of payment until timeout.
     */
    checkAndUpdatePaymentStatus({ body }?: PaymentApplicationValidator.checkAndUpdatePaymentStatus): Promise<PaymentApplicationModel.PaymentStatusUpdateResponse>;
    /**
     * @param {PaymentApplicationValidator.checkAndUpdatePaymentStatusPaymentLink} arg
     *   - Arg object.
     *
     * @returns {Promise<PaymentApplicationModel.PaymentStatusUpdateResponse>}
     *   - Success response
     *
     * @name checkAndUpdatePaymentStatusPaymentLink
     * @summary: Performs continuous polling to check status of payment on the server
     * @description: Use this API to perform continuous polling at intervals to check the status of payment until timeout.
     */
    checkAndUpdatePaymentStatusPaymentLink({ body }?: PaymentApplicationValidator.checkAndUpdatePaymentStatusPaymentLink): Promise<PaymentApplicationModel.PaymentStatusUpdateResponse>;
    /**
     * @param {PaymentApplicationValidator.checkCredit} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.CheckCreditResponse>} - Success response
     * @name checkCredit
     * @summary: API to fetch the customer credit summary
     * @description: Use this API to fetch the customer credit summary.
     */
    checkCredit({ aggregator }?: PaymentApplicationValidator.checkCredit): Promise<PaymentApplicationModel.CheckCreditResponse>;
    /**
     * @param {PaymentApplicationValidator.createOrderHandlerPaymentLink} arg -
     *   Arg object.
     * @returns {Promise<PaymentApplicationModel.CreateOrderUserResponse>} -
     *   Success response
     * @name createOrderHandlerPaymentLink
     * @summary: Create Order user
     * @description: Use this API to create a order and payment on aggregator side
     */
    createOrderHandlerPaymentLink({ body }?: PaymentApplicationValidator.createOrderHandlerPaymentLink): Promise<PaymentApplicationModel.CreateOrderUserResponse>;
    /**
     * @param {PaymentApplicationValidator.createPaymentLink} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.CreatePaymentLinkResponse>} -
     *   Success response
     * @name createPaymentLink
     * @summary: Create payment link
     * @description: Use this API to create a payment link for the customer
     */
    createPaymentLink({ body }?: PaymentApplicationValidator.createPaymentLink): Promise<PaymentApplicationModel.CreatePaymentLinkResponse>;
    /**
     * @param {PaymentApplicationValidator.customerCreditSummary} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.CustomerCreditSummaryResponse>}
     *   - Success response
     *
     * @name customerCreditSummary
     * @summary: API to fetch the customer credit summary
     * @description: Use this API to fetch the customer credit summary.
     */
    customerCreditSummary({ aggregator }?: PaymentApplicationValidator.customerCreditSummary): Promise<PaymentApplicationModel.CustomerCreditSummaryResponse>;
    /**
     * @param {PaymentApplicationValidator.customerOnboard} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.CustomerOnboardingResponse>} -
     *   Success response
     * @name customerOnboard
     * @summary: API to fetch the customer credit summary
     * @description: Use this API to fetch the customer credit summary.
     */
    customerOnboard({ body }?: PaymentApplicationValidator.customerOnboard): Promise<PaymentApplicationModel.CustomerOnboardingResponse>;
    /**
     * @param {PaymentApplicationValidator.deleteUserCard} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.DeleteCardsResponse>} - Success response
     * @name deleteUserCard
     * @summary: Delete a card
     * @description: Use this API to delete a card added by a user on the payment gateway and clear the cache.
     */
    deleteUserCard({ body }?: PaymentApplicationValidator.deleteUserCard): Promise<PaymentApplicationModel.DeleteCardsResponse>;
    /**
     * @param {PaymentApplicationValidator.enableOrDisableRefundTransferMode} arg
     *   - Arg object.
     *
     * @returns {Promise<PaymentApplicationModel.UpdateRefundTransferModeResponse>}
     *   - Success response
     *
     * @name enableOrDisableRefundTransferMode
     * @summary: Enable/Disable a mode for transferring a refund
     * @description: Activate or Deactivate Transfer Mode to collect Beneficiary Details for Refund
     */
    enableOrDisableRefundTransferMode({ body }?: PaymentApplicationValidator.enableOrDisableRefundTransferMode): Promise<PaymentApplicationModel.UpdateRefundTransferModeResponse>;
    /**
     * @param {PaymentApplicationValidator.getActiveCardAggregator} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.ActiveCardPaymentGatewayResponse>}
     *   - Success response
     *
     * @name getActiveCardAggregator
     * @summary: Fetch active payment gateway for card payments
     * @description: Use this API to retrieve an active payment aggregator along with the Customer ID. This is applicable for cards payments only.
     */
    getActiveCardAggregator({ refresh }?: PaymentApplicationValidator.getActiveCardAggregator): Promise<PaymentApplicationModel.ActiveCardPaymentGatewayResponse>;
    /**
     * @param {PaymentApplicationValidator.getActiveRefundTransferModes} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.TransferModeResponse>} - Success response
     * @name getActiveRefundTransferModes
     * @summary: Lists the mode of refund
     * @description: Use this API to retrieve eligible refund modes (such as Netbanking) and add the beneficiary details.
     */
    getActiveRefundTransferModes({}?: any): Promise<PaymentApplicationModel.TransferModeResponse>;
    /**
     * @param {PaymentApplicationValidator.getActiveUserCards} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.ListCardsResponse>} - Success response
     * @name getActiveUserCards
     * @summary: Fetch the list of cards saved by the user
     * @description: Use this API to retrieve a list of cards stored by user from an active payment gateway.
     */
    getActiveUserCards({ forceRefresh }?: PaymentApplicationValidator.getActiveUserCards): Promise<PaymentApplicationModel.ListCardsResponse>;
    /**
     * @param {PaymentApplicationValidator.getAggregatorsConfig} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.AggregatorsConfigDetailResponse>}
     *   - Success response
     *
     * @name getAggregatorsConfig
     * @summary: Get payment gateway keys
     * @description: Use this API to retrieve the payment gateway key, secrets, merchant, SDK/API details to complete a payment at front-end.
     */
    getAggregatorsConfig({ xApiToken, refresh }?: PaymentApplicationValidator.getAggregatorsConfig): Promise<PaymentApplicationModel.AggregatorsConfigDetailResponse>;
    /**
     * @param {PaymentApplicationValidator.getEpaylaterBannerDetails} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.EpaylaterBannerResponse>} -
     *   Success response
     * @name getEpaylaterBannerDetails
     * @summary: Get Epaylater Enabled
     * @description: Get Epaylater Enabled if user is tentatively approved by epaylater
     */
    getEpaylaterBannerDetails({}?: any): Promise<PaymentApplicationModel.EpaylaterBannerResponse>;
    /**
     * @param {PaymentApplicationValidator.getOrderBeneficiariesDetail} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.OrderBeneficiaryResponse>} -
     *   Success response
     * @name getOrderBeneficiariesDetail
     * @summary: Lists the beneficiary of a refund
     * @description: Use this API to get the details of all active beneficiary added by a user for refund.
     */
    getOrderBeneficiariesDetail({ orderId }?: PaymentApplicationValidator.getOrderBeneficiariesDetail): Promise<PaymentApplicationModel.OrderBeneficiaryResponse>;
    /**
     * @param {PaymentApplicationValidator.getPaymentLink} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.GetPaymentLinkResponse>} -
     *   Success response
     * @name getPaymentLink
     * @summary: Get payment link
     * @description: Use this API to get a payment link
     */
    getPaymentLink({ paymentLinkId }?: PaymentApplicationValidator.getPaymentLink): Promise<PaymentApplicationModel.GetPaymentLinkResponse>;
    /**
     * @param {PaymentApplicationValidator.getPaymentModeRoutes} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.PaymentModeRouteResponse>} -
     *   Success response
     * @name getPaymentModeRoutes
     * @summary: Get applicable payment options
     * @description: Use this API to get all valid payment options for doing a payment.
     */
    getPaymentModeRoutes({ amount, cartId, pincode, checkoutMode, refresh, cardReference, userDetails, }?: PaymentApplicationValidator.getPaymentModeRoutes): Promise<PaymentApplicationModel.PaymentModeRouteResponse>;
    /**
     * @param {PaymentApplicationValidator.getPaymentModeRoutesPaymentLink} arg
     *   - Arg object.
     *
     * @returns {Promise<PaymentApplicationModel.PaymentModeRouteResponse>} -
     *   Success response
     * @name getPaymentModeRoutesPaymentLink
     * @summary: Get applicable payment options for payment link
     * @description: Use this API to get all valid payment options for doing a payment through payment link
     */
    getPaymentModeRoutesPaymentLink({ paymentLinkId }?: PaymentApplicationValidator.getPaymentModeRoutesPaymentLink): Promise<PaymentApplicationModel.PaymentModeRouteResponse>;
    /**
     * @param {PaymentApplicationValidator.getPosPaymentModeRoutes} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.PaymentModeRouteResponse>} -
     *   Success response
     * @name getPosPaymentModeRoutes
     * @summary: Get applicable payment options for Point-of-Sale (POS)
     * @description: Use this API to get all valid payment options for doing a payment in POS.
     */
    getPosPaymentModeRoutes({ amount, cartId, pincode, checkoutMode, orderType, refresh, cardReference, userDetails, }?: PaymentApplicationValidator.getPosPaymentModeRoutes): Promise<PaymentApplicationModel.PaymentModeRouteResponse>;
    /**
     * @param {PaymentApplicationValidator.getRupifiBannerDetails} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.RupifiBannerResponse>} - Success response
     * @name getRupifiBannerDetails
     * @summary: Get CreditLine Offer
     * @description: Get CreditLine Offer if user is tentatively approved by rupifi
     */
    getRupifiBannerDetails({}?: any): Promise<PaymentApplicationModel.RupifiBannerResponse>;
    /**
     * @param {PaymentApplicationValidator.getUserBeneficiariesDetail} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.OrderBeneficiaryResponse>} -
     *   Success response
     * @name getUserBeneficiariesDetail
     * @summary: Lists the beneficiary of a refund
     * @description: Use this API to get the details of all active beneficiary added by a user for refund.
     */
    getUserBeneficiariesDetail({ orderId }?: PaymentApplicationValidator.getUserBeneficiariesDetail): Promise<PaymentApplicationModel.OrderBeneficiaryResponse>;
    /**
     * @param {PaymentApplicationValidator.initialisePayment} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.PaymentInitializationResponse>}
     *   - Success response
     *
     * @name initialisePayment
     * @summary: Initialize a payment (server-to-server) for UPI and BharatQR
     * @description: PUse this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen.
     */
    initialisePayment({ body }?: PaymentApplicationValidator.initialisePayment): Promise<PaymentApplicationModel.PaymentInitializationResponse>;
    /**
     * @param {PaymentApplicationValidator.initialisePaymentPaymentLink} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.PaymentInitializationResponse>}
     *   - Success response
     *
     * @name initialisePaymentPaymentLink
     * @summary: Initialize a payment (server-to-server) for UPI and BharatQR
     * @description: Use this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen.
     */
    initialisePaymentPaymentLink({ body }?: PaymentApplicationValidator.initialisePaymentPaymentLink): Promise<PaymentApplicationModel.PaymentInitializationResponse>;
    /**
     * @param {PaymentApplicationValidator.outstandingOrderDetails} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.OutstandingOrderDetailsResponse>}
     *   - Success response
     *
     * @name outstandingOrderDetails
     * @summary: API to fetch the outstanding order details
     * @description: Use this API to fetch the outstanding order details.
     */
    outstandingOrderDetails({ aggregator }?: PaymentApplicationValidator.outstandingOrderDetails): Promise<PaymentApplicationModel.OutstandingOrderDetailsResponse>;
    /**
     * @param {PaymentApplicationValidator.paidOrderDetails} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.PaidOrderDetailsResponse>} -
     *   Success response
     * @name paidOrderDetails
     * @summary: API to fetch the paid order details
     * @description: Use this API to fetch the paid order details.
     */
    paidOrderDetails({ aggregator }?: PaymentApplicationValidator.paidOrderDetails): Promise<PaymentApplicationModel.PaidOrderDetailsResponse>;
    /**
     * @param {PaymentApplicationValidator.pollingPaymentLink} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.PollingPaymentLinkResponse>} -
     *   Success response
     * @name pollingPaymentLink
     * @summary: Used for polling if payment successful or not
     * @description: Use this API to poll if payment through payment was successful or not
     */
    pollingPaymentLink({ paymentLinkId }?: PaymentApplicationValidator.pollingPaymentLink): Promise<PaymentApplicationModel.PollingPaymentLinkResponse>;
    /**
     * @param {PaymentApplicationValidator.redirectToAggregator} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.RedirectToAggregatorResponse>}
     *   - Success response
     *
     * @name redirectToAggregator
     * @summary: API to get the redirect url to redirect the user to aggregator's page
     * @description: Use this API to get the redirect url to redirect the user to aggregator's page
     */
    redirectToAggregator({ source, aggregator }?: PaymentApplicationValidator.redirectToAggregator): Promise<PaymentApplicationModel.RedirectToAggregatorResponse>;
    /**
     * @param {PaymentApplicationValidator.renderHTML} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.renderHTMLResponse>} - Success response
     * @name renderHTML
     * @summary: Convert base64 string to HTML form
     * @description: Use this API to decode base64 html form to plain HTML string.
     */
    renderHTML({ body }?: PaymentApplicationValidator.renderHTML): Promise<PaymentApplicationModel.renderHTMLResponse>;
    /**
     * @param {PaymentApplicationValidator.resendOrCancelPayment} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.ResendOrCancelPaymentResponse>}
     *   - Success response
     *
     * @name resendOrCancelPayment
     * @summary: API to resend and cancel a payment link which was already generated.
     * @description: Use this API to perform resend or cancel a payment link based on request payload.
     */
    resendOrCancelPayment({ body }?: PaymentApplicationValidator.resendOrCancelPayment): Promise<PaymentApplicationModel.ResendOrCancelPaymentResponse>;
    /**
     * @param {PaymentApplicationValidator.resendPaymentLink} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.ResendPaymentLinkResponse>} -
     *   Success response
     * @name resendPaymentLink
     * @summary: Resend payment link
     * @description: Use this API to resend a payment link for the customer
     */
    resendPaymentLink({ body }?: PaymentApplicationValidator.resendPaymentLink): Promise<PaymentApplicationModel.ResendPaymentLinkResponse>;
    /**
     * @param {PaymentApplicationValidator.updateDefaultBeneficiary} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.SetDefaultBeneficiaryResponse>}
     *   - Success response
     *
     * @name updateDefaultBeneficiary
     * @summary: Set a default beneficiary for a refund
     * @description: Use this API to set a default beneficiary for getting a refund.
     */
    updateDefaultBeneficiary({ body }?: PaymentApplicationValidator.updateDefaultBeneficiary): Promise<PaymentApplicationModel.SetDefaultBeneficiaryResponse>;
    /**
     * @param {PaymentApplicationValidator.validateVPA} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.ValidateVPAResponse>} - Success response
     * @name validateVPA
     * @summary: API to Validate UPI ID
     * @description: API to Validate UPI ID
     */
    validateVPA({ body }?: PaymentApplicationValidator.validateVPA): Promise<PaymentApplicationModel.ValidateVPAResponse>;
    /**
     * @param {PaymentApplicationValidator.verifyAndChargePayment} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.ChargeCustomerResponse>} -
     *   Success response
     * @name verifyAndChargePayment
     * @summary: Verify and charge payment
     * @description: Use this API to verify and check the status of a payment transaction (server-to-server) made through aggregators like Simpl and Mswipe.
     */
    verifyAndChargePayment({ body }?: PaymentApplicationValidator.verifyAndChargePayment): Promise<PaymentApplicationModel.ChargeCustomerResponse>;
    /**
     * @param {PaymentApplicationValidator.verifyCustomerForPayment} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.ValidateCustomerResponse>} -
     *   Success response
     * @name verifyCustomerForPayment
     * @summary: Validate customer for payment
     * @description: Use this API to check if the customer is eligible to use credit-line facilities such as Simpl Pay Later and Rupifi.
     */
    verifyCustomerForPayment({ body }?: PaymentApplicationValidator.verifyCustomerForPayment): Promise<PaymentApplicationModel.ValidateCustomerResponse>;
    /**
     * @param {PaymentApplicationValidator.verifyIfscCode} arg - Arg object.
     * @returns {Promise<PaymentApplicationModel.IfscCodeResponse>} - Success response
     * @name verifyIfscCode
     * @summary: Verify IFSC Code
     * @description: Use this API to check whether the 11-digit IFSC code is valid and to fetch the bank details for refund.
     */
    verifyIfscCode({ ifscCode }?: PaymentApplicationValidator.verifyIfscCode): Promise<PaymentApplicationModel.IfscCodeResponse>;
    /**
     * @param {PaymentApplicationValidator.verifyOtpAndAddBeneficiaryForBank} arg
     *   - Arg object.
     *
     * @returns {Promise<PaymentApplicationModel.AddBeneficiaryViaOtpVerificationResponse>}
     *   - Success response
     *
     * @name verifyOtpAndAddBeneficiaryForBank
     * @summary: Verify the beneficiary details using OTP
     * @description: Use this API to perform an OTP validation before saving the beneficiary details added for a refund.
     */
    verifyOtpAndAddBeneficiaryForBank({ body }?: PaymentApplicationValidator.verifyOtpAndAddBeneficiaryForBank): Promise<PaymentApplicationModel.AddBeneficiaryViaOtpVerificationResponse>;
    /**
     * @param {PaymentApplicationValidator.verifyOtpAndAddBeneficiaryForWallet} arg
     *   - Arg object.
     *
     * @returns {Promise<PaymentApplicationModel.WalletOtpResponse>} - Success response
     * @name verifyOtpAndAddBeneficiaryForWallet
     * @summary: Send OTP on adding a wallet beneficiary
     * @description: Use this API to send an OTP while adding a wallet beneficiary by mobile no. verification.
     */
    verifyOtpAndAddBeneficiaryForWallet({ body }?: PaymentApplicationValidator.verifyOtpAndAddBeneficiaryForWallet): Promise<PaymentApplicationModel.WalletOtpResponse>;
}
import PaymentApplicationValidator = require("./PaymentApplicationValidator");
import PaymentApplicationModel = require("./PaymentApplicationModel");
