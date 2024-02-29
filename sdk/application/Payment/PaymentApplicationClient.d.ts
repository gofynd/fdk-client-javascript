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
        createPaymentOrder: string;
        customerCreditSummary: string;
        customerOnboard: string;
        deleteUserCard: string;
        delinkWallet: string;
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
        linkWallet: string;
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
        walletLinkInitate: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {PaymentApplicationValidator.AddBeneficiaryDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.RefundAccountResponse>} -
     *   Success response
     * @name addBeneficiaryDetails
     * @summary: Add beneficiary.
     * @description: Adds beneficiary details for future transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/addBeneficiaryDetails/).
     */
    addBeneficiaryDetails({ body, requestHeaders }?: PaymentApplicationValidator.AddBeneficiaryDetailsParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.RefundAccountResponse>;
    /**
     * @param {PaymentApplicationValidator.AddRefundBankAccountUsingOTPParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.RefundAccountResponse>} -
     *   Success response
     * @name addRefundBankAccountUsingOTP
     * @summary: Add refund account.
     * @description: Adds a bank account for refunds using OTP verification. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/addRefundBankAccountUsingOTP/).
     */
    addRefundBankAccountUsingOTP({ body, requestHeaders }?: PaymentApplicationValidator.AddRefundBankAccountUsingOTPParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.RefundAccountResponse>;
    /**
     * @param {PaymentApplicationValidator.AttachCardToCustomerParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.AttachCardsResponse>} - Success response
     * @name attachCardToCustomer
     * @summary: Attach card to user.
     * @description: Links a payment card to a customer's account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/attachCardToCustomer/).
     */
    attachCardToCustomer({ body, requestHeaders }?: PaymentApplicationValidator.AttachCardToCustomerParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.AttachCardsResponse>;
    /**
     * @param {PaymentApplicationValidator.CancelPaymentLinkParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CancelPaymentLinkResponse>} -
     *   Success response
     * @name cancelPaymentLink
     * @summary: Cancel link.
     * @description: Cancels a previously generated payment link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/cancelPaymentLink/).
     */
    cancelPaymentLink({ body, requestHeaders }?: PaymentApplicationValidator.CancelPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.CancelPaymentLinkResponse>;
    /**
     * @param {PaymentApplicationValidator.CardDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CardDetailsResponse>} - Success response
     * @name cardDetails
     * @summary: Fetch card details.
     * @description: Gets the details of a specified payment card. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/cardDetails/).
     */
    cardDetails({ cardInfo, aggregator, requestHeaders }?: PaymentApplicationValidator.CardDetailsParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.CardDetailsResponse>;
    /**
     * @param {PaymentApplicationValidator.CheckAndUpdatePaymentStatusParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentStatusUpdateResponse>}
     *   - Success response
     *
     * @name checkAndUpdatePaymentStatus
     * @summary: Update payment status.
     * @description: Checks and updates the current status of a payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/checkAndUpdatePaymentStatus/).
     */
    checkAndUpdatePaymentStatus({ body, requestHeaders }?: PaymentApplicationValidator.CheckAndUpdatePaymentStatusParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.PaymentStatusUpdateResponse>;
    /**
     * @param {PaymentApplicationValidator.CheckAndUpdatePaymentStatusPaymentLinkParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentStatusUpdateResponse>}
     *   - Success response
     *
     * @name checkAndUpdatePaymentStatusPaymentLink
     * @summary: Update link status.
     * @description: Checks and updates the status of payment via a link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/checkAndUpdatePaymentStatusPaymentLink/).
     */
    checkAndUpdatePaymentStatusPaymentLink({ body, requestHeaders }?: PaymentApplicationValidator.CheckAndUpdatePaymentStatusPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.PaymentStatusUpdateResponse>;
    /**
     * @param {PaymentApplicationValidator.CheckCreditParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CheckCreditResponse>} - Success response
     * @name checkCredit
     * @summary: Verify credit.
     * @description: Checks the availability and status of customer credit. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/checkCredit/).
     */
    checkCredit({ aggregator, requestHeaders }?: PaymentApplicationValidator.CheckCreditParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.CheckCreditResponse>;
    /**
     * @param {PaymentApplicationValidator.CreateOrderHandlerPaymentLinkParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CreateOrderUserResponse>} -
     *   Success response
     * @name createOrderHandlerPaymentLink
     * @summary: Order via link.
     * @description: Creates an order handler for payment through a link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/createOrderHandlerPaymentLink/).
     */
    createOrderHandlerPaymentLink({ body, requestHeaders }?: PaymentApplicationValidator.CreateOrderHandlerPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.CreateOrderUserResponse>;
    /**
     * @param {PaymentApplicationValidator.CreatePaymentLinkParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CreatePaymentLinkResponse>} -
     *   Success response
     * @name createPaymentLink
     * @summary: Create payment link.
     * @description: Generates a new payment link for transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/createPaymentLink/).
     */
    createPaymentLink({ body, requestHeaders }?: PaymentApplicationValidator.CreatePaymentLinkParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.CreatePaymentLinkResponse>;
    /**
     * @param {PaymentApplicationValidator.CreatePaymentOrderParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentOrderResponse>} - Success response
     * @name createPaymentOrder
     * @summary: Create Order
     * @description: Use this API to create a order and payment on aggregator side - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/createPaymentOrder/).
     */
    createPaymentOrder({ body, requestHeaders }?: PaymentApplicationValidator.CreatePaymentOrderParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.PaymentOrderResponse>;
    /**
     * @param {PaymentApplicationValidator.CustomerCreditSummaryParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CustomerCreditSummaryResponse>}
     *   - Success response
     *
     * @name customerCreditSummary
     * @summary: Credit summary.
     * @description: Retrieves a summary of the customer's credit details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/customerCreditSummary/).
     */
    customerCreditSummary({ aggregator, requestHeaders }?: PaymentApplicationValidator.CustomerCreditSummaryParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.CustomerCreditSummaryResponse>;
    /**
     * @param {PaymentApplicationValidator.CustomerOnboardParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CustomerOnboardingResponse>} -
     *   Success response
     * @name customerOnboard
     * @summary: Onboard customer.
     * @description: Initiates the onboarding process for payment services. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/customerOnboard/).
     */
    customerOnboard({ body, requestHeaders }?: PaymentApplicationValidator.CustomerOnboardParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.CustomerOnboardingResponse>;
    /**
     * @param {PaymentApplicationValidator.DeleteUserCardParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.DeleteCardsResponse>} - Success response
     * @name deleteUserCard
     * @summary: Remove user's card.
     * @description: Deletes a payment card from the user's account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/deleteUserCard/).
     */
    deleteUserCard({ body, requestHeaders }?: PaymentApplicationValidator.DeleteUserCardParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.DeleteCardsResponse>;
    /**
     * @param {PaymentApplicationValidator.DelinkWalletParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.WalletResponseSchema>} - Success response
     * @name delinkWallet
     * @summary: Delink the wallet
     * @description: It Removes already linked wallet - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/delinkWallet/).
     */
    delinkWallet({ body, requestHeaders }?: PaymentApplicationValidator.DelinkWalletParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.WalletResponseSchema>;
    /**
     * @param {PaymentApplicationValidator.EnableOrDisableRefundTransferModeParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.UpdateRefundTransferModeResponse>}
     *   - Success response
     *
     * @name enableOrDisableRefundTransferMode
     * @summary: Toggle refund mode.
     * @description: Enables or disables a particular refund transfer mode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/enableOrDisableRefundTransferMode/).
     */
    enableOrDisableRefundTransferMode({ body, requestHeaders }?: PaymentApplicationValidator.EnableOrDisableRefundTransferModeParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.UpdateRefundTransferModeResponse>;
    /**
     * @param {PaymentApplicationValidator.GetActiveCardAggregatorParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ActiveCardPaymentGatewayResponse>}
     *   - Success response
     *
     * @name getActiveCardAggregator
     * @summary: Active card info.
     * @description: Gets the active card aggregator for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getActiveCardAggregator/).
     */
    getActiveCardAggregator({ refresh, requestHeaders }?: PaymentApplicationValidator.GetActiveCardAggregatorParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.ActiveCardPaymentGatewayResponse>;
    /**
     * @param {PaymentApplicationValidator.GetActiveRefundTransferModesParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.TransferModeResponse>} - Success response
     * @name getActiveRefundTransferModes
     * @summary: Refund modes.
     * @description: Lists the active transfer modes for refunds. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getActiveRefundTransferModes/).
     */
    getActiveRefundTransferModes({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentApplicationModel.TransferModeResponse>;
    /**
     * @param {PaymentApplicationValidator.GetActiveUserCardsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ListCardsResponse>} - Success response
     * @name getActiveUserCards
     * @summary: List user's cards.
     * @description: Retrieves all active cards linked to a user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getActiveUserCards/).
     */
    getActiveUserCards({ forceRefresh, requestHeaders }?: PaymentApplicationValidator.GetActiveUserCardsParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.ListCardsResponse>;
    /**
     * @param {PaymentApplicationValidator.GetAggregatorsConfigParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.AggregatorsConfigDetailResponse>}
     *   - Success response
     *
     * @name getAggregatorsConfig
     * @summary: Fetch payment aggregators.
     * @description: Retrieves configuration details for available payment aggregators. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getAggregatorsConfig/).
     */
    getAggregatorsConfig({ xApiToken, refresh, requestHeaders }?: PaymentApplicationValidator.GetAggregatorsConfigParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.AggregatorsConfigDetailResponse>;
    /**
     * @param {PaymentApplicationValidator.GetEpaylaterBannerDetailsParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.EpaylaterBannerResponse>} -
     *   Success response
     * @name getEpaylaterBannerDetails
     * @summary: Epay banner info.
     * @description: Gets details for displaying the Epaylater payment banner. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getEpaylaterBannerDetails/).
     */
    getEpaylaterBannerDetails({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentApplicationModel.EpaylaterBannerResponse>;
    /**
     * @param {PaymentApplicationValidator.GetOrderBeneficiariesDetailParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.OrderBeneficiaryResponse>} -
     *   Success response
     * @name getOrderBeneficiariesDetail
     * @summary: Order beneficiaries.
     * @description: Retrieve the beneficiary details related to an order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getOrderBeneficiariesDetail/).
     */
    getOrderBeneficiariesDetail({ orderId, requestHeaders }?: PaymentApplicationValidator.GetOrderBeneficiariesDetailParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.OrderBeneficiaryResponse>;
    /**
     * @param {PaymentApplicationValidator.GetPaymentLinkParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.GetPaymentLinkResponse>} -
     *   Success response
     * @name getPaymentLink
     * @summary: Fetch payment link.
     * @description: Retrieves a generated payment link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPaymentLink/).
     */
    getPaymentLink({ paymentLinkId, requestHeaders }?: PaymentApplicationValidator.GetPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.GetPaymentLinkResponse>;
    /**
     * @param {PaymentApplicationValidator.GetPaymentModeRoutesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentModeRouteResponse>} -
     *   Success response
     * @name getPaymentModeRoutes
     * @summary: Get payment modes.
     * @description: Lists the payment mode options and their routing details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPaymentModeRoutes/).
     */
    getPaymentModeRoutes({ amount, cartId, checkoutMode, refresh, orderId, cardReference, userDetails, displaySplit, advancePayment, shipmentId, requestHeaders, }?: PaymentApplicationValidator.GetPaymentModeRoutesParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.PaymentModeRouteResponse>;
    /**
     * @param {PaymentApplicationValidator.GetPaymentModeRoutesPaymentLinkParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentModeRouteResponse>} -
     *   Success response
     * @name getPaymentModeRoutesPaymentLink
     * @summary: Payment link modes.
     * @description: Lists payment modes available for a given payment link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPaymentModeRoutesPaymentLink/).
     */
    getPaymentModeRoutesPaymentLink({ paymentLinkId, requestHeaders }?: PaymentApplicationValidator.GetPaymentModeRoutesPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.PaymentModeRouteResponse>;
    /**
     * @param {PaymentApplicationValidator.GetPosPaymentModeRoutesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentModeRouteResponse>} -
     *   Success response
     * @name getPosPaymentModeRoutes
     * @summary: POS payment modes.
     * @description: Lists payment modes available for Point-of-Sale (POS). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPosPaymentModeRoutes/).
     */
    getPosPaymentModeRoutes({ amount, pincode, orderType, cartId, checkoutMode, refresh, cardReference, userDetails, requestHeaders, }?: PaymentApplicationValidator.GetPosPaymentModeRoutesParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.PaymentModeRouteResponse>;
    /**
     * @param {PaymentApplicationValidator.GetRupifiBannerDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.RupifiBannerResponse>} - Success response
     * @name getRupifiBannerDetails
     * @summary: Rupifi banner info.
     * @description: Retrieve details for displaying the Rupifi payment banner. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getRupifiBannerDetails/).
     */
    getRupifiBannerDetails({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentApplicationModel.RupifiBannerResponse>;
    /**
     * @param {PaymentApplicationValidator.GetUserBeneficiariesDetailParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.OrderBeneficiaryResponse>} -
     *   Success response
     * @name getUserBeneficiariesDetail
     * @summary: Beneficiary info.
     * @description: Retrieves details of beneficiaries linked to the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getUserBeneficiariesDetail/).
     */
    getUserBeneficiariesDetail({ orderId, requestHeaders }?: PaymentApplicationValidator.GetUserBeneficiariesDetailParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.OrderBeneficiaryResponse>;
    /**
     * @param {PaymentApplicationValidator.InitialisePaymentParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentInitializationResponse>}
     *   - Success response
     *
     * @name initialisePayment
     * @summary: Start payment process.
     * @description: Initializes the payment procedure for an order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/initialisePayment/).
     */
    initialisePayment({ body, requestHeaders }?: PaymentApplicationValidator.InitialisePaymentParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.PaymentInitializationResponse>;
    /**
     * @param {PaymentApplicationValidator.InitialisePaymentPaymentLinkParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentInitializationResponse>}
     *   - Success response
     *
     * @name initialisePaymentPaymentLink
     * @summary: Initialise link payment.
     * @description: Initializes payment for an order via a payment link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/initialisePaymentPaymentLink/).
     */
    initialisePaymentPaymentLink({ body, requestHeaders }?: PaymentApplicationValidator.InitialisePaymentPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.PaymentInitializationResponse>;
    /**
     * @param {PaymentApplicationValidator.LinkWalletParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.WalletResponseSchema>} - Success response
     * @name linkWallet
     * @summary: OTP verification for linking of wallet
     * @description: It Verifies the linking of wallet using OTP - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/linkWallet/).
     */
    linkWallet({ body, requestHeaders }?: PaymentApplicationValidator.LinkWalletParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.WalletResponseSchema>;
    /**
     * @param {PaymentApplicationValidator.OutstandingOrderDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.OutstandingOrderDetailsResponse>}
     *   - Success response
     *
     * @name outstandingOrderDetails
     * @summary: Outstanding orders.
     * @description: Lists details of orders with outstanding payments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/outstandingOrderDetails/).
     */
    outstandingOrderDetails({ aggregator, requestHeaders }?: PaymentApplicationValidator.OutstandingOrderDetailsParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.OutstandingOrderDetailsResponse>;
    /**
     * @param {PaymentApplicationValidator.PaidOrderDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaidOrderDetailsResponse>} -
     *   Success response
     * @name paidOrderDetails
     * @summary: Paid orders.
     * @description: Retrieves details of orders that have been paid for. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/paidOrderDetails/).
     */
    paidOrderDetails({ aggregator, requestHeaders }?: PaymentApplicationValidator.PaidOrderDetailsParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.PaidOrderDetailsResponse>;
    /**
     * @param {PaymentApplicationValidator.PollingPaymentLinkParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PollingPaymentLinkResponse>} -
     *   Success response
     * @name pollingPaymentLink
     * @summary: Poll payment link.
     * @description: Polls the status of a payment link for updates. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/pollingPaymentLink/).
     */
    pollingPaymentLink({ paymentLinkId, requestHeaders }?: PaymentApplicationValidator.PollingPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.PollingPaymentLinkResponse>;
    /**
     * @param {PaymentApplicationValidator.RedirectToAggregatorParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.RedirectToAggregatorResponse>}
     *   - Success response
     *
     * @name redirectToAggregator
     * @summary: Redirect for payment.
     * @description: Redirects the user to the payment aggregator's interface. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/redirectToAggregator/).
     */
    redirectToAggregator({ source, aggregator, requestHeaders }?: PaymentApplicationValidator.RedirectToAggregatorParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.RedirectToAggregatorResponse>;
    /**
     * @param {PaymentApplicationValidator.RenderHTMLParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.renderHTMLResponse>} - Success response
     * @name renderHTML
     * @summary: Render HTML.
     * @description: Generates HTML for payment-related interfaces. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/renderHTML/).
     */
    renderHTML({ body, requestHeaders }?: PaymentApplicationValidator.RenderHTMLParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.renderHTMLResponse>;
    /**
     * @param {PaymentApplicationValidator.ResendOrCancelPaymentParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ResendOrCancelPaymentResponse>}
     *   - Success response
     *
     * @name resendOrCancelPayment
     * @summary: Manage payment.
     * @description: Resends or cancels a pending payment transaction. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/resendOrCancelPayment/).
     */
    resendOrCancelPayment({ body, requestHeaders }?: PaymentApplicationValidator.ResendOrCancelPaymentParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.ResendOrCancelPaymentResponse>;
    /**
     * @param {PaymentApplicationValidator.ResendPaymentLinkParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ResendPaymentLinkResponse>} -
     *   Success response
     * @name resendPaymentLink
     * @summary: Resend link.
     * @description: Resends an existing payment link to the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/resendPaymentLink/).
     */
    resendPaymentLink({ body, requestHeaders }?: PaymentApplicationValidator.ResendPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.ResendPaymentLinkResponse>;
    /**
     * @param {PaymentApplicationValidator.UpdateDefaultBeneficiaryParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.SetDefaultBeneficiaryResponse>}
     *   - Success response
     *
     * @name updateDefaultBeneficiary
     * @summary: Set default beneficiary.
     * @description: Updates the default beneficiary for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/updateDefaultBeneficiary/).
     */
    updateDefaultBeneficiary({ body, requestHeaders }?: PaymentApplicationValidator.UpdateDefaultBeneficiaryParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.SetDefaultBeneficiaryResponse>;
    /**
     * @param {PaymentApplicationValidator.ValidateVPAParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ValidateVPAResponse>} - Success response
     * @name validateVPA
     * @summary: Validate VPA.
     * @description: Checks the validity of a Virtual Payment Address (VPA). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/validateVPA/).
     */
    validateVPA({ body, requestHeaders }?: PaymentApplicationValidator.ValidateVPAParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.ValidateVPAResponse>;
    /**
     * @param {PaymentApplicationValidator.VerifyAndChargePaymentParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ChargeCustomerResponse>} -
     *   Success response
     * @name verifyAndChargePayment
     * @summary: Verify and charge.
     * @description: Validates and processes a payment transaction. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyAndChargePayment/).
     */
    verifyAndChargePayment({ body, requestHeaders }?: PaymentApplicationValidator.VerifyAndChargePaymentParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.ChargeCustomerResponse>;
    /**
     * @param {PaymentApplicationValidator.VerifyCustomerForPaymentParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ValidateCustomerResponse>} -
     *   Success response
     * @name verifyCustomerForPayment
     * @summary: Verify payment customer.
     * @description: Checks the user's validity for proceeding with payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyCustomerForPayment/).
     */
    verifyCustomerForPayment({ body, requestHeaders }?: PaymentApplicationValidator.VerifyCustomerForPaymentParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.ValidateCustomerResponse>;
    /**
     * @param {PaymentApplicationValidator.VerifyIfscCodeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.IfscCodeResponse>} - Success response
     * @name verifyIfscCode
     * @summary: Verify IFSC.
     * @description: Checks the validity of an IFSC code for bank transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyIfscCode/).
     */
    verifyIfscCode({ ifscCode, requestHeaders }?: PaymentApplicationValidator.VerifyIfscCodeParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.IfscCodeResponse>;
    /**
     * @param {PaymentApplicationValidator.VerifyOtpAndAddBeneficiaryForBankParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.AddBeneficiaryViaOtpVerificationResponse>}
     *   - Success response
     *
     * @name verifyOtpAndAddBeneficiaryForBank
     * @summary: Verify OTP for bank.
     * @description: Confirms OTP and adds a bank beneficiary. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyOtpAndAddBeneficiaryForBank/).
     */
    verifyOtpAndAddBeneficiaryForBank({ body, requestHeaders }?: PaymentApplicationValidator.VerifyOtpAndAddBeneficiaryForBankParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.AddBeneficiaryViaOtpVerificationResponse>;
    /**
     * @param {PaymentApplicationValidator.VerifyOtpAndAddBeneficiaryForWalletParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.WalletOtpResponse>} - Success response
     * @name verifyOtpAndAddBeneficiaryForWallet
     * @summary: Verify OTP for wallet.
     * @description: Confirms OTP and adds a wallet beneficiary. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyOtpAndAddBeneficiaryForWallet/).
     */
    verifyOtpAndAddBeneficiaryForWallet({ body, requestHeaders }?: PaymentApplicationValidator.VerifyOtpAndAddBeneficiaryForWalletParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.WalletOtpResponse>;
    /**
     * @param {PaymentApplicationValidator.WalletLinkInitateParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.WalletResponseSchema>} - Success response
     * @name walletLinkInitate
     * @summary: Initiate linking of wallet
     * @description: It will initiate linking of wallet for the aggregator. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/walletLinkInitate/).
     */
    walletLinkInitate({ body, requestHeaders }?: PaymentApplicationValidator.WalletLinkInitateParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.WalletResponseSchema>;
}
import PaymentApplicationValidator = require("./PaymentApplicationValidator");
import PaymentApplicationModel = require("./PaymentApplicationModel");
