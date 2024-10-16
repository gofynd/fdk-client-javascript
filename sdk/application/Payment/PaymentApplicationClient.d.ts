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
        walletLinkInitiate: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {PaymentApplicationValidator.AddBeneficiaryDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.RefundAccountDetails>} - Success response
     * @name addBeneficiaryDetails
     * @summary: Add beneficiary for refund
     * @description: Add beneficiary details specifically for refund transactions, including account holder name, account number and bank details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/addBeneficiaryDetails/).
     */
    addBeneficiaryDetails({ body, requestHeaders }?: PaymentApplicationValidator.AddBeneficiaryDetailsParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.RefundAccountDetails>;
    /**
     * @param {PaymentApplicationValidator.AddRefundBankAccountUsingOTPParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.RefundAccountDetails>} - Success response
     * @name addRefundBankAccountUsingOTP
     * @summary: Add refund account using OTP verification
     * @description: Add bank account specifically for refunds, employing OTP verification for security. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/addRefundBankAccountUsingOTP/).
     */
    addRefundBankAccountUsingOTP({ body, requestHeaders }?: PaymentApplicationValidator.AddRefundBankAccountUsingOTPParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.RefundAccountDetails>;
    /**
     * @param {PaymentApplicationValidator.AttachCardToCustomerParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.AttachCardsDetails>} - Success response
     * @name attachCardToCustomer
     * @summary: Link payment card to customer
     * @description: Link payment card to a user account for seamless transactions. Upon successful linking, the card becomes associated with the user's profile, enabling secure and convenient payments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/attachCardToCustomer/).
     */
    attachCardToCustomer({ body, requestHeaders }?: PaymentApplicationValidator.AttachCardToCustomerParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.AttachCardsDetails>;
    /**
     * @param {PaymentApplicationValidator.CancelPaymentLinkParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CancelPaymentLinkDetails>} -
     *   Success response
     * @name cancelPaymentLink
     * @summary: Cancel payment link
     * @description: Cancel previously generated payment link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/cancelPaymentLink/).
     */
    cancelPaymentLink({ body, requestHeaders }?: PaymentApplicationValidator.CancelPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.CancelPaymentLinkDetails>;
    /**
     * @param {PaymentApplicationValidator.CardDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CardDetailsFetchedDetails>} -
     *   Success response
     * @name cardDetails
     * @summary: Get card details
     * @description: Get details of a specified payment card, including information such as the card type, brand, country, and expiration date. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/cardDetails/).
     */
    cardDetails({ cardInfo, aggregator, requestHeaders }?: PaymentApplicationValidator.CardDetailsParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.CardDetailsFetchedDetails>;
    /**
     * @param {PaymentApplicationValidator.CheckAndUpdatePaymentStatusParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentStatusUpdateDetails>} -
     *   Success response
     * @name checkAndUpdatePaymentStatus
     * @summary: Update payment status
     * @description: Polling process to confirm the payment status. It periodically checks and updates the current status of a payment, ensuring timely and accurate confirmation of payment transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/checkAndUpdatePaymentStatus/).
     */
    checkAndUpdatePaymentStatus({ body, requestHeaders }?: PaymentApplicationValidator.CheckAndUpdatePaymentStatusParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.PaymentStatusUpdateDetails>;
    /**
     * @param {PaymentApplicationValidator.CheckAndUpdatePaymentStatusPaymentLinkParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentStatusUpdateDetails>} -
     *   Success response
     * @name checkAndUpdatePaymentStatusPaymentLink
     * @summary: Update payment link status
     * @description: Verify and update status of a payment made through a link.Upon successful verification and update, the response includes details about the aggregator name, payment status, and whether retrying the process is required. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/checkAndUpdatePaymentStatusPaymentLink/).
     */
    checkAndUpdatePaymentStatusPaymentLink({ body, requestHeaders }?: PaymentApplicationValidator.CheckAndUpdatePaymentStatusPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.PaymentStatusUpdateDetails>;
    /**
     * @param {PaymentApplicationValidator.CheckCreditParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CheckCreditDetails>} - Success response
     * @name checkCredit
     * @summary: Verify credit availability and status
     * @description: Check the availability and status of customer credit, providing the status of payment along with registration information and signup URL if the customer is not registered. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/checkCredit/).
     */
    checkCredit({ aggregator, requestHeaders }?: PaymentApplicationValidator.CheckCreditParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.CheckCreditDetails>;
    /**
     * @param {PaymentApplicationValidator.CreateOrderHandlerPaymentLinkParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CreateOrderUserDetails>} -
     *   Success response
     * @name createOrderHandlerPaymentLink
     * @summary: Create order for payment via link
     * @description: Initiate the creation of an order handler for processing payments through a link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/createOrderHandlerPaymentLink/).
     */
    createOrderHandlerPaymentLink({ body, requestHeaders }?: PaymentApplicationValidator.CreateOrderHandlerPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.CreateOrderUserDetails>;
    /**
     * @param {PaymentApplicationValidator.CreatePaymentLinkParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CreatePaymentLinkDetails>} -
     *   Success response
     * @name createPaymentLink
     * @summary: Create payment link
     * @description: Create new payment link for transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/createPaymentLink/).
     */
    createPaymentLink({ body, requestHeaders }?: PaymentApplicationValidator.CreatePaymentLinkParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.CreatePaymentLinkDetails>;
    /**
     * @param {PaymentApplicationValidator.CreatePaymentOrderParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentOrderDetails>} - Success response
     * @name createPaymentOrder
     * @summary: Create Order
     * @description: Create an order and payment on the aggregator side. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/createPaymentOrder/).
     */
    createPaymentOrder({ body, requestHeaders }?: PaymentApplicationValidator.CreatePaymentOrderParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.PaymentOrderDetails>;
    /**
     * @param {PaymentApplicationValidator.CustomerCreditSummaryParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CustomerCreditSummaryDetails>}
     *   - Success response
     *
     * @name customerCreditSummary
     * @summary: Credit summary
     * @description: Get summary of the customer's credit information, including details such as merchant customer reference ID, status, balance, limit, due amount, used amount, due date, days overdue, total due amount, and a repayment URL. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/customerCreditSummary/).
     */
    customerCreditSummary({ aggregator, requestHeaders }?: PaymentApplicationValidator.CustomerCreditSummaryParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.CustomerCreditSummaryDetails>;
    /**
     * @param {PaymentApplicationValidator.CustomerOnboardParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.CustomerOnboardingDetails>} -
     *   Success response
     * @name customerOnboard
     * @summary: Onboard customer for payment
     * @description: Initiate the onboarding process for payment services, providing personal, business, and device information, along with marketplace details, to enable customer registration and credit availability. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/customerOnboard/).
     */
    customerOnboard({ body, requestHeaders }?: PaymentApplicationValidator.CustomerOnboardParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.CustomerOnboardingDetails>;
    /**
     * @param {PaymentApplicationValidator.DeleteUserCardParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.DeleteCardsDetails>} - Success response
     * @name deleteUserCard
     * @summary: Delete customer card
     * @description: Delete payment card from the user's account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/deleteUserCard/).
     */
    deleteUserCard({ body, requestHeaders }?: PaymentApplicationValidator.DeleteUserCardParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.DeleteCardsDetails>;
    /**
     * @param {PaymentApplicationValidator.DelinkWalletParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.WalletResponseSchema>} - Success response
     * @name delinkWallet
     * @summary: Delink the wallet
     * @description: Delink the wallet. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/delinkWallet/).
     */
    delinkWallet({ body, requestHeaders }?: PaymentApplicationValidator.DelinkWalletParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.WalletResponseSchema>;
    /**
     * @param {PaymentApplicationValidator.EnableOrDisableRefundTransferModeParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.RefundTransferModeUpdateDetails>}
     *   - Success response
     *
     * @name enableOrDisableRefundTransferMode
     * @summary: Toggle refund mode
     * @description: Enable/Disable a particular refund transfer mode based on the request body parameters, indicating whether the mode should be enabled or disabled. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/enableOrDisableRefundTransferMode/).
     */
    enableOrDisableRefundTransferMode({ body, requestHeaders }?: PaymentApplicationValidator.EnableOrDisableRefundTransferModeParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.RefundTransferModeUpdateDetails>;
    /**
     * @param {PaymentApplicationValidator.GetActiveCardAggregatorParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ActiveCardPaymentGatewayDetails>}
     *   - Success response
     *
     * @name getActiveCardAggregator
     * @summary: Retrieve active card aggregator
     * @description: Get details about the active card aggregator used by the user, including the aggregator name.You can refresh the data by setting the 'refresh' parameter to true if needed. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getActiveCardAggregator/).
     */
    getActiveCardAggregator({ refresh, requestHeaders }?: PaymentApplicationValidator.GetActiveCardAggregatorParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.ActiveCardPaymentGatewayDetails>;
    /**
     * @param {PaymentApplicationValidator.GetActiveRefundTransferModesParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.TransferModeFetchDetails>} -
     *   Success response
     * @name getActiveRefundTransferModes
     * @summary: Get refund transfer modes
     * @description: Lists available refund modes, such as UPI, providing details like display name, logo, and ID for each mode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getActiveRefundTransferModes/).
     */
    getActiveRefundTransferModes({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentApplicationModel.TransferModeFetchDetails>;
    /**
     * @param {PaymentApplicationValidator.GetActiveUserCardsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ListCardsDetails>} - Success response
     * @name getActiveUserCards
     * @summary: Get customer cards
     * @description: List all active cards saved by the user.Includes details such as the card's aggregator name, card ID, token, reference, number, expiration date, type, issuer, brand, nickname, and whether it has expired. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getActiveUserCards/).
     */
    getActiveUserCards({ forceRefresh, requestHeaders }?: PaymentApplicationValidator.GetActiveUserCardsParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.ListCardsDetails>;
    /**
     * @param {PaymentApplicationValidator.GetAggregatorsConfigParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.AggregatorsConfigDetail>} -
     *   Success response
     * @name getAggregatorsConfig
     * @summary: Get payment aggregators
     * @description: Get aggregator secret key of all payment gateways utilized for payments when using the SDK for the payment gateway. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getAggregatorsConfig/).
     */
    getAggregatorsConfig({ xApiToken, refresh, requestHeaders }?: PaymentApplicationValidator.GetAggregatorsConfigParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.AggregatorsConfigDetail>;
    /**
     * @param {PaymentApplicationValidator.GetEpaylaterBannerDetailsParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.EpaylaterBannerDetails>} -
     *   Success response
     * @name getEpaylaterBannerDetails
     * @summary: Epaylater banner info
     * @description: Get Epaylater payment banner details. It provides information about the banner's display status, along with relevant messages and the user's registration status. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getEpaylaterBannerDetails/).
     */
    getEpaylaterBannerDetails({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentApplicationModel.EpaylaterBannerDetails>;
    /**
     * @param {PaymentApplicationValidator.GetOrderBeneficiariesDetailParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.OrderBeneficiaryFetchDetails>}
     *   - Success response
     *
     * @name getOrderBeneficiariesDetail
     * @summary: Retrieve beneficiary details
     * @description: Get beneficiary details like bank name , ifsc code , branch name associated with a specific order for refund processing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getOrderBeneficiariesDetail/).
     */
    getOrderBeneficiariesDetail({ orderId, requestHeaders }?: PaymentApplicationValidator.GetOrderBeneficiariesDetailParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.OrderBeneficiaryFetchDetails>;
    /**
     * @param {PaymentApplicationValidator.GetPaymentLinkParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.GetPaymentLinkDetails>} -
     *   Success response
     * @name getPaymentLink
     * @summary: Get payment link
     * @description: Get a generated payment link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPaymentLink/).
     */
    getPaymentLink({ paymentLinkId, requestHeaders }?: PaymentApplicationValidator.GetPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.GetPaymentLinkDetails>;
    /**
     * @param {PaymentApplicationValidator.GetPaymentModeRoutesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentModeRouteDetails>} -
     *   Success response
     * @name getPaymentModeRoutes
     * @summary: Get payment modes
     * @description: Get available payment methods on the payment page, specifying the aggregator for each option, such as 'Netbanking powered by Juspay' and 'Card powered by Razorpay'. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPaymentModeRoutes/).
     */
    getPaymentModeRoutes({ amount, cartId, checkoutMode, refresh, orderId, cardReference, userDetails, displaySplit, advancePayment, shipmentId, requestHeaders, }?: PaymentApplicationValidator.GetPaymentModeRoutesParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.PaymentModeRouteDetails>;
    /**
     * @param {PaymentApplicationValidator.GetPaymentModeRoutesPaymentLinkParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentModeRouteDetails>} -
     *   Success response
     * @name getPaymentModeRoutesPaymentLink
     * @summary: Payment modes for payment link
     * @description: List payment modes available for a given payment link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPaymentModeRoutesPaymentLink/).
     */
    getPaymentModeRoutesPaymentLink({ paymentLinkId, requestHeaders }?: PaymentApplicationValidator.GetPaymentModeRoutesPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.PaymentModeRouteDetails>;
    /**
     * @param {PaymentApplicationValidator.GetPosPaymentModeRoutesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentModeRouteDetails>} -
     *   Success response
     * @name getPosPaymentModeRoutes
     * @summary: POS payment modes
     * @description: Get available payment methods on the payment page for POS, specifying the aggregator for each option, such as 'CARD powered by Juspay' and 'QR powered by Razorpay'. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPosPaymentModeRoutes/).
     */
    getPosPaymentModeRoutes({ amount, pincode, orderType, cartId, checkoutMode, refresh, cardReference, userDetails, requestHeaders, }?: PaymentApplicationValidator.GetPosPaymentModeRoutesParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.PaymentModeRouteDetails>;
    /**
     * @param {PaymentApplicationValidator.GetRupifiBannerDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.RupifiBannerDetails>} - Success response
     * @name getRupifiBannerDetails
     * @summary: Rupifi banner info
     * @description: Get Rupifi payment banner details. It provides information such as the KYC URL and the current status of the Rupifi payment banner. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getRupifiBannerDetails/).
     */
    getRupifiBannerDetails({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentApplicationModel.RupifiBannerDetails>;
    /**
     * @param {PaymentApplicationValidator.GetUserBeneficiariesDetailParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.OrderBeneficiaryFetchDetails>}
     *   - Success response
     *
     * @name getUserBeneficiariesDetail
     * @summary: Retrieve beneficiary details
     * @description: Get beneficiaries associated with the user for processing refunds, based on the provided order ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getUserBeneficiariesDetail/).
     */
    getUserBeneficiariesDetail({ orderId, requestHeaders }?: PaymentApplicationValidator.GetUserBeneficiariesDetailParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.OrderBeneficiaryFetchDetails>;
    /**
     * @param {PaymentApplicationValidator.InitialisePaymentParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentInitializationDetails>}
     *   - Success response
     *
     * @name initialisePayment
     * @summary: Start payment process
     * @description: Initiate the payment procedure for an order. Upon successful initiation, it returns a  details including the success status, aggregator information, payment method, status, merchant order ID aggregator order , polling URL, timeout, virtual ID, Razorpay payment ID, customer ID, and device ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/initialisePayment/).
     */
    initialisePayment({ body, requestHeaders }?: PaymentApplicationValidator.InitialisePaymentParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.PaymentInitializationDetails>;
    /**
     * @param {PaymentApplicationValidator.InitialisePaymentPaymentLinkParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaymentInitializationDetails>}
     *   - Success response
     *
     * @name initialisePaymentPaymentLink
     * @summary: Initialize payment link
     * @description: Begin payment process for an order by initializing it through a payment link.Upon successful initialization, the response includes details about the payment status, aggregator details, order IDs, polling URL for status updates, and other relevant information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/initialisePaymentPaymentLink/).
     */
    initialisePaymentPaymentLink({ body, requestHeaders }?: PaymentApplicationValidator.InitialisePaymentPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.PaymentInitializationDetails>;
    /**
     * @param {PaymentApplicationValidator.LinkWalletParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.WalletResponseSchema>} - Success response
     * @name linkWallet
     * @summary: OTP verification
     * @description: Verify the linking of wallet using OTP for further processing of payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/linkWallet/).
     */
    linkWallet({ body, requestHeaders }?: PaymentApplicationValidator.LinkWalletParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.WalletResponseSchema>;
    /**
     * @param {PaymentApplicationValidator.OutstandingOrderDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.OutstandingOrderDetails>} -
     *   Success response
     * @name outstandingOrderDetails
     * @summary: Outstanding orders
     * @description: Get details of orders with outstanding payments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/outstandingOrderDetails/).
     */
    outstandingOrderDetails({ aggregator, requestHeaders }?: PaymentApplicationValidator.OutstandingOrderDetailsParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.OutstandingOrderDetails>;
    /**
     * @param {PaymentApplicationValidator.PaidOrderDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PaidOrderDetails>} - Success response
     * @name paidOrderDetails
     * @summary: Retrieve details of paid orders
     * @description: Get details of orders that have been paid for, including shipment ID, order ID, due date, payment date, amount, and transaction ID, based on the aggregator merchant user ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/paidOrderDetails/).
     */
    paidOrderDetails({ aggregator, requestHeaders }?: PaymentApplicationValidator.PaidOrderDetailsParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.PaidOrderDetails>;
    /**
     * @param {PaymentApplicationValidator.PollingPaymentLinkParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.PollingPaymentLinkDetails>} -
     *   Success response
     * @name pollingPaymentLink
     * @summary: Poll status of payment link
     * @description: Get real-time information about the payment link's current status, such as whether it has been processed, cancelled, or expired. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/pollingPaymentLink/).
     */
    pollingPaymentLink({ paymentLinkId, requestHeaders }?: PaymentApplicationValidator.PollingPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.PollingPaymentLinkDetails>;
    /**
     * @param {PaymentApplicationValidator.RedirectToAggregatorParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.RedirectToAggregatorDetails>}
     *   - Success response
     *
     * @name redirectToAggregator
     * @summary: Redirects users to the payment aggregator's interface
     * @description: Get details about the active card aggregator used by the user, including the aggregator's name. You can refresh the data by setting the 'refresh' parameter to true if needed. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/redirectToAggregator/).
     */
    redirectToAggregator({ source, aggregator, requestHeaders }?: PaymentApplicationValidator.RedirectToAggregatorParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.RedirectToAggregatorDetails>;
    /**
     * @param {PaymentApplicationValidator.RenderHTMLParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.RenderHTMLDetails>} - Success response
     * @name renderHTML
     * @summary: Render HTML
     * @description: Render HTML for a payment aggregator page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/renderHTML/).
     */
    renderHTML({ body, requestHeaders }?: PaymentApplicationValidator.RenderHTMLParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.RenderHTMLDetails>;
    /**
     * @param {PaymentApplicationValidator.ResendOrCancelPaymentParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ResendOrCancelPaymentDetails>}
     *   - Success response
     *
     * @name resendOrCancelPayment
     * @summary: Resend or cancel a pending payment transaction
     * @description: Resend or cancel payment link that have been initiated but may require modification or cancellation for various reasons, ensuring flexibility and control in payment processing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/resendOrCancelPayment/).
     */
    resendOrCancelPayment({ body, requestHeaders }?: PaymentApplicationValidator.ResendOrCancelPaymentParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.ResendOrCancelPaymentDetails>;
    /**
     * @param {PaymentApplicationValidator.ResendPaymentLinkParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ResendPaymentLinkDetails>} -
     *   Success response
     * @name resendPaymentLink
     * @summary: Resend payment link
     * @description: Resend an existing payment link to the user to complete the payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/resendPaymentLink/).
     */
    resendPaymentLink({ body, requestHeaders }?: PaymentApplicationValidator.ResendPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.ResendPaymentLinkDetails>;
    /**
     * @param {PaymentApplicationValidator.UpdateDefaultBeneficiaryParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.SetDefaultBeneficiaryDetails>}
     *   - Success response
     *
     * @name updateDefaultBeneficiary
     * @summary: Set default beneficiary for refund
     * @description: Update default beneficiary for the order refund of the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/updateDefaultBeneficiary/).
     */
    updateDefaultBeneficiary({ body, requestHeaders }?: PaymentApplicationValidator.UpdateDefaultBeneficiaryParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.SetDefaultBeneficiaryDetails>;
    /**
     * @param {PaymentApplicationValidator.ValidateVPAParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ValidateVPADetails>} - Success response
     * @name validateVPA
     * @summary: Validate VPA
     * @description: Validate if a Virtual Payment Address (VPA) is valid for processing payments and returns the validation result.is_valid boolean value indicating whether the VPA is valid for payments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/validateVPA/).
     */
    validateVPA({ body, requestHeaders }?: PaymentApplicationValidator.ValidateVPAParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.ValidateVPADetails>;
    /**
     * @param {PaymentApplicationValidator.VerifyAndChargePaymentParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ChargeCustomerDetails>} -
     *   Success response
     * @name verifyAndChargePayment
     * @summary: Verify order confirmation and charge
     * @description: Verify the payment status and charge from the customer's BNPL (Buy Now, Pay Later) account after order confirmation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyAndChargePayment/).
     */
    verifyAndChargePayment({ body, requestHeaders }?: PaymentApplicationValidator.VerifyAndChargePaymentParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.ChargeCustomerDetails>;
    /**
     * @param {PaymentApplicationValidator.VerifyCustomerForPaymentParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.ValidateCustomerDetails>} -
     *   Success response
     * @name verifyCustomerForPayment
     * @summary: Verify payment customer
     * @description: Verify if the user is eligible for pay-later payment from the payment aggregator side using the customer's phone number. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyCustomerForPayment/).
     */
    verifyCustomerForPayment({ body, requestHeaders }?: PaymentApplicationValidator.VerifyCustomerForPaymentParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.ValidateCustomerDetails>;
    /**
     * @param {PaymentApplicationValidator.VerifyIfscCodeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.IfscCodeDetails>} - Success response
     * @name verifyIfscCode
     * @summary: Verify IFSC
     * @description: Validate IFSC code and returns bank details if valid. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyIfscCode/).
     */
    verifyIfscCode({ ifscCode, requestHeaders }?: PaymentApplicationValidator.VerifyIfscCodeParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.IfscCodeDetails>;
    /**
     * @param {PaymentApplicationValidator.VerifyOtpAndAddBeneficiaryForBankParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.AddBeneficiaryViaOtpVerificationDetails>}
     *   - Success response
     *
     * @name verifyOtpAndAddBeneficiaryForBank
     * @summary: Verify OTP for bank and add beneficiary
     * @description: Verify the OTP provided by the user and adds a bank beneficiary for refund processing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyOtpAndAddBeneficiaryForBank/).
     */
    verifyOtpAndAddBeneficiaryForBank({ body, requestHeaders }?: PaymentApplicationValidator.VerifyOtpAndAddBeneficiaryForBankParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.AddBeneficiaryViaOtpVerificationDetails>;
    /**
     * @param {PaymentApplicationValidator.VerifyOtpAndAddBeneficiaryForWalletParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.WalletOtpDetails>} - Success response
     * @name verifyOtpAndAddBeneficiaryForWallet
     * @summary: Verify OTP for wallet
     * @description: Verify OTP provided by the user and adds a wallet beneficiary. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyOtpAndAddBeneficiaryForWallet/).
     */
    verifyOtpAndAddBeneficiaryForWallet({ body, requestHeaders }?: PaymentApplicationValidator.VerifyOtpAndAddBeneficiaryForWalletParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.WalletOtpDetails>;
    /**
     * @param {PaymentApplicationValidator.WalletLinkInitiateParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentApplicationModel.WalletResponseSchema>} - Success response
     * @name walletLinkInitiate
     * @summary: Initiate linking of wallet
     * @description: Link wallet for the aggregator for processing of payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/walletLinkInitiate/).
     */
    walletLinkInitiate({ body, requestHeaders }?: PaymentApplicationValidator.WalletLinkInitiateParam, { responseHeaders }?: object): Promise<PaymentApplicationModel.WalletResponseSchema>;
}
import PaymentApplicationValidator = require("./PaymentApplicationValidator");
import PaymentApplicationModel = require("./PaymentApplicationModel");
