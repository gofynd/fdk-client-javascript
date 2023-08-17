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
     * @param {PaymentApplicationValidator.AddBeneficiaryDetailsParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.RefundAccountResponse>} -
     *   Success response
     * @name addBeneficiaryDetails
     * @summary: Save bank details for cancelled/returned order
     * @description: Use this API to save the bank details for a returned or cancelled order to refund the amount. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/addBeneficiaryDetails/).
     */
    addBeneficiaryDetails({ body }?: PaymentApplicationValidator.AddBeneficiaryDetailsParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.RefundAccountResponse>;
    /**
     * @param {PaymentApplicationValidator.AddRefundBankAccountUsingOTPParam} arg
     *   - Arg object.
     *
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.RefundAccountResponse>} -
     *   Success response
     * @name addRefundBankAccountUsingOTP
     * @summary: Save bank details for cancelled/returned order
     * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/addRefundBankAccountUsingOTP/).
     */
    addRefundBankAccountUsingOTP({ body }?: PaymentApplicationValidator.AddRefundBankAccountUsingOTPParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.RefundAccountResponse>;
    /**
     * @param {PaymentApplicationValidator.AttachCardToCustomerParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.AttachCardsResponse>} - Success response
     * @name attachCardToCustomer
     * @summary: Attach a saved card to customer.
     * @description: Use this API to attach a customer's saved card at the payment gateway, such as Stripe, Juspay. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/attachCardToCustomer/).
     */
    attachCardToCustomer({ body }?: PaymentApplicationValidator.AttachCardToCustomerParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.AttachCardsResponse>;
    /**
     * @param {PaymentApplicationValidator.CancelPaymentLinkParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CancelPaymentLinkResponse>} -
     *   Success response
     * @name cancelPaymentLink
     * @summary: Cancel payment link
     * @description: Use this API to cancel a payment link for the customer - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/cancelPaymentLink/).
     */
    cancelPaymentLink({ body }?: PaymentApplicationValidator.CancelPaymentLinkParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.CancelPaymentLinkResponse>;
    /**
     * @param {PaymentApplicationValidator.CardDetailsParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CardDetailsResponse>} - Success response
     * @name cardDetails
     * @summary: API to get Card info from PG
     * @description: API to get Card info from PG - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/cardDetails/).
     */
    cardDetails({ cardInfo, aggregator }?: PaymentApplicationValidator.CardDetailsParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.CardDetailsResponse>;
    /**
     * @param {PaymentApplicationValidator.CheckAndUpdatePaymentStatusParam} arg
     *   - Arg object.
     *
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentStatusUpdateResponse>}
     *   - Success response
     *
     * @name checkAndUpdatePaymentStatus
     * @summary: Performs continuous polling to check status of payment on the server
     * @description: Use this API to perform continuous polling at intervals to check the status of payment until timeout. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/checkAndUpdatePaymentStatus/).
     */
    checkAndUpdatePaymentStatus({ body }?: PaymentApplicationValidator.CheckAndUpdatePaymentStatusParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.PaymentStatusUpdateResponse>;
    /**
     * @param {PaymentApplicationValidator.CheckAndUpdatePaymentStatusPaymentLinkParam} arg
     *   - Arg object.
     *
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentStatusUpdateResponse>}
     *   - Success response
     *
     * @name checkAndUpdatePaymentStatusPaymentLink
     * @summary: Performs continuous polling to check status of payment on the server
     * @description: Use this API to perform continuous polling at intervals to check the status of payment until timeout. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/checkAndUpdatePaymentStatusPaymentLink/).
     */
    checkAndUpdatePaymentStatusPaymentLink({ body }?: PaymentApplicationValidator.CheckAndUpdatePaymentStatusPaymentLinkParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.PaymentStatusUpdateResponse>;
    /**
     * @param {PaymentApplicationValidator.CheckCreditParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CheckCreditResponse>} - Success response
     * @name checkCredit
     * @summary: API to fetch the customer credit summary
     * @description: Use this API to fetch the customer credit summary. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/checkCredit/).
     */
    checkCredit({ aggregator }?: PaymentApplicationValidator.CheckCreditParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.CheckCreditResponse>;
    /**
     * @param {PaymentApplicationValidator.CreateOrderHandlerPaymentLinkParam} arg
     *   - Arg object.
     *
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CreateOrderUserResponse>} -
     *   Success response
     * @name createOrderHandlerPaymentLink
     * @summary: Create Order user
     * @description: Use this API to create a order and payment on aggregator side - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/createOrderHandlerPaymentLink/).
     */
    createOrderHandlerPaymentLink({ body }?: PaymentApplicationValidator.CreateOrderHandlerPaymentLinkParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.CreateOrderUserResponse>;
    /**
     * @param {PaymentApplicationValidator.CreatePaymentLinkParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CreatePaymentLinkResponse>} -
     *   Success response
     * @name createPaymentLink
     * @summary: Create payment link
     * @description: Use this API to create a payment link for the customer - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/createPaymentLink/).
     */
    createPaymentLink({ body }?: PaymentApplicationValidator.CreatePaymentLinkParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.CreatePaymentLinkResponse>;
    /**
     * @param {PaymentApplicationValidator.CustomerCreditSummaryParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CustomerCreditSummaryResponse>}
     *   - Success response
     *
     * @name customerCreditSummary
     * @summary: API to fetch the customer credit summary
     * @description: Use this API to fetch the customer credit summary. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/customerCreditSummary/).
     */
    customerCreditSummary({ aggregator }?: PaymentApplicationValidator.CustomerCreditSummaryParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.CustomerCreditSummaryResponse>;
    /**
     * @param {PaymentApplicationValidator.CustomerOnboardParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CustomerOnboardingResponse>} -
     *   Success response
     * @name customerOnboard
     * @summary: API to fetch the customer credit summary
     * @description: Use this API to fetch the customer credit summary. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/customerOnboard/).
     */
    customerOnboard({ body }?: PaymentApplicationValidator.CustomerOnboardParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.CustomerOnboardingResponse>;
    /**
     * @param {PaymentApplicationValidator.DeleteUserCardParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.DeleteCardsResponse>} - Success response
     * @name deleteUserCard
     * @summary: Delete a card
     * @description: Use this API to delete a card added by a user on the payment gateway and clear the cache. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/deleteUserCard/).
     */
    deleteUserCard({ body }?: PaymentApplicationValidator.DeleteUserCardParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.DeleteCardsResponse>;
    /**
     * @param {PaymentApplicationValidator.EnableOrDisableRefundTransferModeParam} arg
     *   - Arg object.
     *
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.UpdateRefundTransferModeResponse>}
     *   - Success response
     *
     * @name enableOrDisableRefundTransferMode
     * @summary: Enable/Disable a mode for transferring a refund
     * @description: Activate or Deactivate Transfer Mode to collect Beneficiary Details for Refund - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/enableOrDisableRefundTransferMode/).
     */
    enableOrDisableRefundTransferMode({ body }?: PaymentApplicationValidator.EnableOrDisableRefundTransferModeParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.UpdateRefundTransferModeResponse>;
    /**
     * @param {PaymentApplicationValidator.GetActiveCardAggregatorParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ActiveCardPaymentGatewayResponse>}
     *   - Success response
     *
     * @name getActiveCardAggregator
     * @summary: Fetch active payment gateway for card payments
     * @description: Use this API to retrieve an active payment aggregator along with the Customer ID. This is applicable for cards payments only. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getActiveCardAggregator/).
     */
    getActiveCardAggregator({ refresh }?: PaymentApplicationValidator.GetActiveCardAggregatorParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.ActiveCardPaymentGatewayResponse>;
    /**
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.TransferModeResponse>} - Success response
     * @name getActiveRefundTransferModes
     * @summary: Lists the mode of refund
     * @description: Use this API to retrieve eligible refund modes (such as Netbanking) and add the beneficiary details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getActiveRefundTransferModes/).
     */
    getActiveRefundTransferModes({ headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.TransferModeResponse>;
    /**
     * @param {PaymentApplicationValidator.GetActiveUserCardsParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ListCardsResponse>} - Success response
     * @name getActiveUserCards
     * @summary: Fetch the list of cards saved by the user
     * @description: Use this API to retrieve a list of cards stored by user from an active payment gateway. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getActiveUserCards/).
     */
    getActiveUserCards({ forceRefresh }?: PaymentApplicationValidator.GetActiveUserCardsParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.ListCardsResponse>;
    /**
     * @param {PaymentApplicationValidator.GetAggregatorsConfigParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.AggregatorsConfigDetailResponse>}
     *   - Success response
     *
     * @name getAggregatorsConfig
     * @summary: Get payment gateway keys
     * @description: Use this API to retrieve the payment gateway key, secrets, merchant, SDK/API details to complete a payment at front-end. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getAggregatorsConfig/).
     */
    getAggregatorsConfig({ xApiToken, refresh }?: PaymentApplicationValidator.GetAggregatorsConfigParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.AggregatorsConfigDetailResponse>;
    /**
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.EpaylaterBannerResponse>} -
     *   Success response
     * @name getEpaylaterBannerDetails
     * @summary: Get Epaylater Enabled
     * @description: Get Epaylater Enabled if user is tentatively approved by epaylater - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getEpaylaterBannerDetails/).
     */
    getEpaylaterBannerDetails({ headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.EpaylaterBannerResponse>;
    /**
     * @param {PaymentApplicationValidator.GetOrderBeneficiariesDetailParam} arg
     *   - Arg object.
     *
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.OrderBeneficiaryResponse>} -
     *   Success response
     * @name getOrderBeneficiariesDetail
     * @summary: Lists the beneficiary of a refund
     * @description: Use this API to get the details of all active beneficiary added by a user for refund. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getOrderBeneficiariesDetail/).
     */
    getOrderBeneficiariesDetail({ orderId }?: PaymentApplicationValidator.GetOrderBeneficiariesDetailParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.OrderBeneficiaryResponse>;
    /**
     * @param {PaymentApplicationValidator.GetPaymentLinkParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.GetPaymentLinkResponse>} -
     *   Success response
     * @name getPaymentLink
     * @summary: Get payment link
     * @description: Use this API to get a payment link - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPaymentLink/).
     */
    getPaymentLink({ paymentLinkId }?: PaymentApplicationValidator.GetPaymentLinkParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.GetPaymentLinkResponse>;
    /**
     * @param {PaymentApplicationValidator.GetPaymentModeRoutesParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentModeRouteResponse>} -
     *   Success response
     * @name getPaymentModeRoutes
     * @summary: Get applicable payment options
     * @description: Use this API to get all valid payment options for doing a payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPaymentModeRoutes/).
     */
    getPaymentModeRoutes({ amount, cartId, pincode, checkoutMode, refresh, cardReference, userDetails, }?: PaymentApplicationValidator.GetPaymentModeRoutesParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.PaymentModeRouteResponse>;
    /**
     * @param {PaymentApplicationValidator.GetPaymentModeRoutesPaymentLinkParam} arg
     *   - Arg object.
     *
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentModeRouteResponse>} -
     *   Success response
     * @name getPaymentModeRoutesPaymentLink
     * @summary: Get applicable payment options for payment link
     * @description: Use this API to get all valid payment options for doing a payment through payment link - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPaymentModeRoutesPaymentLink/).
     */
    getPaymentModeRoutesPaymentLink({ paymentLinkId }?: PaymentApplicationValidator.GetPaymentModeRoutesPaymentLinkParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.PaymentModeRouteResponse>;
    /**
     * @param {PaymentApplicationValidator.GetPosPaymentModeRoutesParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentModeRouteResponse>} -
     *   Success response
     * @name getPosPaymentModeRoutes
     * @summary: Get applicable payment options for Point-of-Sale (POS)
     * @description: Use this API to get all valid payment options for doing a payment in POS. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPosPaymentModeRoutes/).
     */
    getPosPaymentModeRoutes({ amount, cartId, pincode, checkoutMode, orderType, refresh, cardReference, userDetails, }?: PaymentApplicationValidator.GetPosPaymentModeRoutesParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.PaymentModeRouteResponse>;
    /**
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.RupifiBannerResponse>} - Success response
     * @name getRupifiBannerDetails
     * @summary: Get CreditLine Offer
     * @description: Get CreditLine Offer if user is tentatively approved by rupifi - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getRupifiBannerDetails/).
     */
    getRupifiBannerDetails({ headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.RupifiBannerResponse>;
    /**
     * @param {PaymentApplicationValidator.GetUserBeneficiariesDetailParam} arg
     *   - Arg object.
     *
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.OrderBeneficiaryResponse>} -
     *   Success response
     * @name getUserBeneficiariesDetail
     * @summary: Lists the beneficiary of a refund
     * @description: Use this API to get the details of all active beneficiary added by a user for refund. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getUserBeneficiariesDetail/).
     */
    getUserBeneficiariesDetail({ orderId }?: PaymentApplicationValidator.GetUserBeneficiariesDetailParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.OrderBeneficiaryResponse>;
    /**
     * @param {PaymentApplicationValidator.InitialisePaymentParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentInitializationResponse>}
     *   - Success response
     *
     * @name initialisePayment
     * @summary: Initialize a payment (server-to-server) for UPI and BharatQR
     * @description: PUse this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/initialisePayment/).
     */
    initialisePayment({ body }?: PaymentApplicationValidator.InitialisePaymentParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.PaymentInitializationResponse>;
    /**
     * @param {PaymentApplicationValidator.InitialisePaymentPaymentLinkParam} arg
     *   - Arg object.
     *
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentInitializationResponse>}
     *   - Success response
     *
     * @name initialisePaymentPaymentLink
     * @summary: Initialize a payment (server-to-server) for UPI and BharatQR
     * @description: Use this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/initialisePaymentPaymentLink/).
     */
    initialisePaymentPaymentLink({ body }?: PaymentApplicationValidator.InitialisePaymentPaymentLinkParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.PaymentInitializationResponse>;
    /**
     * @param {PaymentApplicationValidator.OutstandingOrderDetailsParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.OutstandingOrderDetailsResponse>}
     *   - Success response
     *
     * @name outstandingOrderDetails
     * @summary: API to fetch the outstanding order details
     * @description: Use this API to fetch the outstanding order details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/outstandingOrderDetails/).
     */
    outstandingOrderDetails({ aggregator }?: PaymentApplicationValidator.OutstandingOrderDetailsParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.OutstandingOrderDetailsResponse>;
    /**
     * @param {PaymentApplicationValidator.PaidOrderDetailsParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaidOrderDetailsResponse>} -
     *   Success response
     * @name paidOrderDetails
     * @summary: API to fetch the paid order details
     * @description: Use this API to fetch the paid order details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/paidOrderDetails/).
     */
    paidOrderDetails({ aggregator }?: PaymentApplicationValidator.PaidOrderDetailsParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.PaidOrderDetailsResponse>;
    /**
     * @param {PaymentApplicationValidator.PollingPaymentLinkParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PollingPaymentLinkResponse>} -
     *   Success response
     * @name pollingPaymentLink
     * @summary: Used for polling if payment successful or not
     * @description: Use this API to poll if payment through payment was successful or not - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/pollingPaymentLink/).
     */
    pollingPaymentLink({ paymentLinkId }?: PaymentApplicationValidator.PollingPaymentLinkParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.PollingPaymentLinkResponse>;
    /**
     * @param {PaymentApplicationValidator.RedirectToAggregatorParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.RedirectToAggregatorResponse>}
     *   - Success response
     *
     * @name redirectToAggregator
     * @summary: API to get the redirect url to redirect the user to aggregator's page
     * @description: Use this API to get the redirect url to redirect the user to aggregator's page - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/redirectToAggregator/).
     */
    redirectToAggregator({ source, aggregator }?: PaymentApplicationValidator.RedirectToAggregatorParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.RedirectToAggregatorResponse>;
    /**
     * @param {PaymentApplicationValidator.RenderHTMLParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.renderHTMLResponse>} - Success response
     * @name renderHTML
     * @summary: Convert base64 string to HTML form
     * @description: Use this API to decode base64 html form to plain HTML string. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/renderHTML/).
     */
    renderHTML({ body }?: PaymentApplicationValidator.RenderHTMLParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.renderHTMLResponse>;
    /**
     * @param {PaymentApplicationValidator.ResendOrCancelPaymentParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ResendOrCancelPaymentResponse>}
     *   - Success response
     *
     * @name resendOrCancelPayment
     * @summary: API to resend and cancel a payment link which was already generated.
     * @description: Use this API to perform resend or cancel a payment link based on request payload. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/resendOrCancelPayment/).
     */
    resendOrCancelPayment({ body }?: PaymentApplicationValidator.ResendOrCancelPaymentParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.ResendOrCancelPaymentResponse>;
    /**
     * @param {PaymentApplicationValidator.ResendPaymentLinkParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ResendPaymentLinkResponse>} -
     *   Success response
     * @name resendPaymentLink
     * @summary: Resend payment link
     * @description: Use this API to resend a payment link for the customer - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/resendPaymentLink/).
     */
    resendPaymentLink({ body }?: PaymentApplicationValidator.ResendPaymentLinkParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.ResendPaymentLinkResponse>;
    /**
     * @param {PaymentApplicationValidator.UpdateDefaultBeneficiaryParam} arg -
     *   Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.SetDefaultBeneficiaryResponse>}
     *   - Success response
     *
     * @name updateDefaultBeneficiary
     * @summary: Set a default beneficiary for a refund
     * @description: Use this API to set a default beneficiary for getting a refund. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/updateDefaultBeneficiary/).
     */
    updateDefaultBeneficiary({ body }?: PaymentApplicationValidator.UpdateDefaultBeneficiaryParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.SetDefaultBeneficiaryResponse>;
    /**
     * @param {PaymentApplicationValidator.ValidateVPAParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ValidateVPAResponse>} - Success response
     * @name validateVPA
     * @summary: API to Validate UPI ID
     * @description: API to Validate UPI ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/validateVPA/).
     */
    validateVPA({ body }?: PaymentApplicationValidator.ValidateVPAParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.ValidateVPAResponse>;
    /**
     * @param {PaymentApplicationValidator.VerifyAndChargePaymentParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ChargeCustomerResponse>} -
     *   Success response
     * @name verifyAndChargePayment
     * @summary: Verify and charge payment
     * @description: Use this API to verify and check the status of a payment transaction (server-to-server) made through aggregators like Simpl and Mswipe. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyAndChargePayment/).
     */
    verifyAndChargePayment({ body }?: PaymentApplicationValidator.VerifyAndChargePaymentParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.ChargeCustomerResponse>;
    /**
     * @param {PaymentApplicationValidator.VerifyCustomerForPaymentParam} arg -
     *   Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ValidateCustomerResponse>} -
     *   Success response
     * @name verifyCustomerForPayment
     * @summary: Validate customer for payment
     * @description: Use this API to check if the customer is eligible to use credit-line facilities such as Simpl Pay Later and Rupifi. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyCustomerForPayment/).
     */
    verifyCustomerForPayment({ body }?: PaymentApplicationValidator.VerifyCustomerForPaymentParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.ValidateCustomerResponse>;
    /**
     * @param {PaymentApplicationValidator.VerifyIfscCodeParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.IfscCodeResponse>} - Success response
     * @name verifyIfscCode
     * @summary: Verify IFSC Code
     * @description: Use this API to check whether the 11-digit IFSC code is valid and to fetch the bank details for refund. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyIfscCode/).
     */
    verifyIfscCode({ ifscCode }?: PaymentApplicationValidator.VerifyIfscCodeParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.IfscCodeResponse>;
    /**
     * @param {PaymentApplicationValidator.VerifyOtpAndAddBeneficiaryForBankParam} arg
     *   - Arg object.
     *
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.AddBeneficiaryViaOtpVerificationResponse>}
     *   - Success response
     *
     * @name verifyOtpAndAddBeneficiaryForBank
     * @summary: Verify the beneficiary details using OTP
     * @description: Use this API to perform an OTP validation before saving the beneficiary details added for a refund. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyOtpAndAddBeneficiaryForBank/).
     */
    verifyOtpAndAddBeneficiaryForBank({ body }?: PaymentApplicationValidator.VerifyOtpAndAddBeneficiaryForBankParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.AddBeneficiaryViaOtpVerificationResponse>;
    /**
     * @param {PaymentApplicationValidator.VerifyOtpAndAddBeneficiaryForWalletParam} arg
     *   - Arg object.
     *
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.WalletOtpResponse>} - Success response
     * @name verifyOtpAndAddBeneficiaryForWallet
     * @summary: Send OTP on adding a wallet beneficiary
     * @description: Use this API to send an OTP while adding a wallet beneficiary by mobile no. verification. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyOtpAndAddBeneficiaryForWallet/).
     */
    verifyOtpAndAddBeneficiaryForWallet({ body }?: PaymentApplicationValidator.VerifyOtpAndAddBeneficiaryForWalletParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentApplicationModel.WalletOtpResponse>;
}
import PaymentApplicationValidator = require("./PaymentApplicationValidator");
import PaymentApplicationModel = require("./PaymentApplicationModel");
