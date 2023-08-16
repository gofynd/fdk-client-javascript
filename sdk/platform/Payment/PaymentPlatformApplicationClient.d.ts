export = Payment;
declare class Payment {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.terminalUniqueIdentifier - Terminal unique identifier
     * @param {EdcUpdateRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EdcDeviceUpdateResponse>} - Success response
     * @summary: Update store id and device tag of edc device
     * @description: Use this API to Update store id and device tag of edc device
     */
    addEdcDevice({ terminalUniqueIdentifier, body }?: {
        terminalUniqueIdentifier: string;
        body: EdcUpdateRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<EdcDeviceUpdateResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddBeneficiaryDetailsOTPRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RefundAccountResponse>} - Success response
     * @summary: Save bank details for cancelled/returned order
     * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
     */
    addRefundBankAccountUsingOTP({ body }?: {
        body: AddBeneficiaryDetailsOTPRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<RefundAccountResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CancelOrResendPaymentLinkRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CancelPaymentLinkResponse>} - Success response
     * @summary: Cancel payment link
     * @description: Use this API to cancel a payment link for the customer
     */
    cancelPaymentLink({ body }?: {
        body: CancelOrResendPaymentLinkRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CancelPaymentLinkResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentStatusUpdateRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentStatusUpdateResponse>} - Success response
     * @summary: Performs continuous polling to check status of payment on the server
     * @description: Use this API to perform continuous polling at intervals to check the status of payment until timeout.
     */
    checkAndUpdatePaymentStatus({ body }?: {
        body: PaymentStatusUpdateRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PaymentStatusUpdateResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentConfirmationRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentConfirmationResponse>} - Success response
     * @summary: Confirm payment after successful payment from payment gateway
     * @description: Use this API to confirm payment after payment gateway accepted payment.
     */
    confirmPayment({ body }?: {
        body: PaymentConfirmationRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PaymentConfirmationResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreatePaymentLinkRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CreatePaymentLinkResponse>} - Success response
     * @summary: Create payment link
     * @description: Use this API to create a payment link for the customer
     */
    createPaymentLink({ body }?: {
        body: CreatePaymentLinkRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CreatePaymentLinkResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EdcAggregatorAndModelListResponse>} - Success response
     * @summary: get some information about the store and edc device
     * @description: Use this API to get info of devices linked to a particular app.
     */
    edcAggregatorsAndModelList({ headers }?: import("../PlatformAPIClient").Options): Promise<EdcAggregatorAndModelListResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {boolean} [arg.isActive] -
     * @param {number} [arg.storeId] -
     * @param {string} [arg.deviceTag] -
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EdcDeviceListResponse>} - Success response
     * @summary: get all the device list of an app
     * @description: Use this API to get all devices linked to a particular app.
     */
    edcDeviceList({ pageNo, pageSize, isActive, storeId, deviceTag }?: {
        pageNo?: number;
        pageSize?: number;
        isActive?: boolean;
        storeId?: number;
        deviceTag?: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<EdcDeviceListResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EdcDeviceStatsResponse>} - Success response
     * @summary: get some information about the store and edc device
     * @description: Use this API to get info of devices linked to a particular app.
     */
    edcDeviceStats({ headers }?: import("../PlatformAPIClient").Options): Promise<EdcDeviceStatsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @param {string} [arg.requestHash] -
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RefundAccountResponse>} - Success response
     * @summary: Get bank details
     * @description: Use this API to get saved bank details for returned/cancelled order using order id.
     */
    getBankAccountDetailsOpenAPI({ orderId, requestHash }?: {
        orderId: string;
        requestHash?: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<RefundAccountResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentGatewayConfigResponse>} - Success response
     * @summary: Get All Brand Payment Gateway Config Secret
     * @description: Get All Brand Payment Gateway Config Secret
     */
    getBrandPaymentGatewayConfig({ headers }?: import("../PlatformAPIClient").Options): Promise<PaymentGatewayConfigResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.terminalUniqueIdentifier - Terminal unique identifier
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EdcDeviceDetailsResponse>} - Success response
     * @summary: get details of a single edc device
     * @description: Use this API to get details of a single edc device
     */
    getEdcDevice({ terminalUniqueIdentifier }?: {
        terminalUniqueIdentifier: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<EdcDeviceDetailsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.aggregatorId - Aggregators Id
     * @param {string} arg.businessUnit -
     * @param {string} arg.device -
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<MerchnatPaymentModeResponse>} - Success response
     * @summary: Get Aggregator, payment mode and sub payment mode.
     * @description: Get Aggregator, payment mode and sub payment mode details.
     */
    getMerchantAggregatorPaymentModeDetails({ aggregatorId, businessUnit, device }?: {
        aggregatorId: number;
        businessUnit: string;
        device: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<MerchnatPaymentModeResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<MerchnatPaymentModeResponse>} - Success response
     * @summary: Get Payment modes and COD details.
     * @description: This api fetches all the available PGs for merchant and its offline payment mode details.
     */
    getMerchantPaymentOption({ headers }?: import("../PlatformAPIClient").Options): Promise<MerchnatPaymentModeResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<MerchnatPaymentModeResponse>} - Success response
     * @summary: Get Aggregators available to be added as PG.
     * @description: Get Aggregators available to be added as PG.
     */
    getPGConfigAggregators({ headers }?: import("../PlatformAPIClient").Options): Promise<MerchnatPaymentModeResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<GetPaymentCodeResponse>} - Success response
     * @summary: List Payment Options Method Codes
     * @description: Get all active List Payment Options Method Codes
     */
    getPaymentCodeOption({ headers }?: import("../PlatformAPIClient").Options): Promise<GetPaymentCodeResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.paymentLinkId] -
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<GetPaymentLinkResponse>} - Success response
     * @summary: Get payment link
     * @description: Use this API to get a payment link
     */
    getPaymentLink({ paymentLinkId }?: {
        paymentLinkId?: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<GetPaymentLinkResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} arg.refresh -
     * @param {string} arg.requestType -
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentOptionsResponse>} - Success response
     * @summary: Get All Valid Payment Options
     * @description: Use this API to get Get All Valid Payment Options for making payment
     */
    getPaymentModeRoutes({ refresh, requestType }?: {
        refresh: boolean;
        requestType: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PaymentOptionsResponse>;
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
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentOptionsResponse>} - Success response
     * @summary: Get All Valid Payment Options
     * @description: Use this API to get Get All Valid Payment Options for making payment
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
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PaymentOptionsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderBeneficiaryResponse>} - Success response
     * @summary: List User Beneficiary
     * @description: Get all active  beneficiary details added by the user for refund
     */
    getUserBeneficiaries({ orderId }?: {
        orderId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderBeneficiaryResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.merchantUserId -
     * @param {string} arg.mobileNo -
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<GetUserCODLimitResponse>} - Success response
     * @summary: Get COD limit for user
     * @description: Use this API to get user cod limit and reamining limit for the payment
     */
    getUserCODlimitRoutes({ merchantUserId, mobileNo }?: {
        merchantUserId: string;
        mobileNo: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<GetUserCODLimitResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderBeneficiaryResponse>} - Success response
     * @summary: List Order Beneficiary
     * @description: Get all active  beneficiary details added by the user for refund
     */
    getUserOrderBeneficiaries({ orderId }?: {
        orderId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderBeneficiaryResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentInitializationRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentInitializationResponse>} - Success response
     * @summary: Initialize a payment (server-to-server) for UPI and BharatQR
     * @description: PUse this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen.
     */
    initialisePayment({ body }?: {
        body: PaymentInitializationRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PaymentInitializationResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {MerchantOnBoardingRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<MerchantOnBoardingResponse>} - Success response
     * @summary: API to push Ajiodhan merchant data to Gringotts system
     * @description: Use this API to push Ajiodhan merchant data to Gringotts system
     */
    merchantOnBoarding({ body }?: {
        body: MerchantOnBoardingRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<MerchantOnBoardingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.aggregator - Aggregator
     * @param {string} [arg.successRedirectUrl] -
     * @param {string} [arg.failureRedirectUrl] -
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<GetOauthUrlResponse>} - Success response
     * @summary: API to Get the url to call for oauth
     * @description: Use this API to Get the url to call for oauth.
     */
    oauthGetUrl({ aggregator, successRedirectUrl, failureRedirectUrl }?: {
        aggregator: string;
        successRedirectUrl?: string;
        failureRedirectUrl?: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<GetOauthUrlResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.aggregatorId - Aggregators Id
     * @param {MerchnatPaymentModeResponse} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<MerchnatPaymentModeResponse>} - Success response
     * @summary: Update Aggregator, payment mode and sub payment mode.
     * @description: Update Aggregator, payment mode and sub payment mode details.
     */
    patchMerchantAggregatorPaymentModeDetails({ aggregatorId, body }?: {
        aggregatorId: number;
        body: MerchnatPaymentModeResponse;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<MerchnatPaymentModeResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {MerchnatPaymentModeRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<MerchnatPaymentModeResponse>} - Success response
     * @summary: Update Payment modes and COD details.
     * @description: To updated online payment as active/inactive or offline payment configuration like cod charges, anonymous cod allowed flags.
     */
    patchMerchantPaymentOption({ body }?: {
        body: MerchnatPaymentModeRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<MerchnatPaymentModeResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentStatusBulkHandlerRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentStatusBulkHandlerResponse>} - Success response
     * @summary: Get Payment status and information for a list of order_ids
     * @description: Use this API to get Payment status and information for a list of order_ids
     */
    paymentStatusBulk({ body }?: {
        body: PaymentStatusBulkHandlerRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PaymentStatusBulkHandlerResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.paymentLinkId] -
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PollingPaymentLinkResponse>} - Success response
     * @summary: Used for polling if payment successful or not
     * @description: Use this API to poll if payment through payment was successful or not
     */
    pollingPaymentLink({ paymentLinkId }?: {
        paymentLinkId?: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PollingPaymentLinkResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {RepaymentDetailsSerialiserPayAll} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RepaymentResponse>} - Success response
     * @summary: API to register repayment details
     * @description: Use this API to register any repayment record in the db and notify the aggrgator
     */
    repaymentDetails({ body }?: {
        body: RepaymentDetailsSerialiserPayAll;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<RepaymentResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ResendOrCancelPaymentRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ResendOrCancelPaymentResponse>} - Success response
     * @summary: API to resend and cancel a payment link which was already generated.
     * @description: Use this API to perform resend or cancel a payment link based on request payload.
     */
    resendOrCancelPayment({ body }?: {
        body: ResendOrCancelPaymentRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ResendOrCancelPaymentResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CancelOrResendPaymentLinkRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ResendPaymentLinkResponse>} - Success response
     * @summary: Resend payment link
     * @description: Use this API to resend a payment link for the customer
     */
    resendPaymentLink({ body }?: {
        body: CancelOrResendPaymentLinkRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ResendPaymentLinkResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.aggregator - Aggregator_slug
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RevokeOAuthToken>} - Success response
     * @summary: API to Revoke oauth for razorpay partnership
     * @description: Use this API to Revoke oauth for razorpay partnership
     */
    revokeOauthToken({ aggregator }?: {
        aggregator: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<RevokeOAuthToken>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentGatewayConfigRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentGatewayToBeReviewed>} - Success response
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     */
    saveBrandPaymentGatewayConfig({ body }?: {
        body: PaymentGatewayConfigRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PaymentGatewayToBeReviewed>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SetCODForUserRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SetCODOptionResponse>} - Success response
     * @summary: Set COD option for user for payment
     * @description: Use this API to set cod option as true or false for the payment
     */
    setUserCODlimitRoutes({ body }?: {
        body: SetCODForUserRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SetCODOptionResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EdcAddRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<EdcDeviceAddResponse>} - Success response
     * @summary: map new edc device to the terminal
     * @description: Use this API to map new edc device to the terminal
     */
    updateEdcDevice({ body }?: {
        body: EdcAddRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<EdcDeviceAddResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.gid - Global identifier of the entity (e.g. order,
     *   cart etc.) against which payment_session was initiated. This is
     *   generated by Fynd payments platform and is unique.
     * @param {PaymentSessionRequestSerializer} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentSessionResponseSerializer>} - Success response
     * @summary: API to update status of a payment.
     * @description: A payment_session is initiated against a global identifier (gid) which is identifies the entity payment is initiated against. e.g. order_id, cart_id. This endpoint is to update the status of the said payment_session.
     */
    updatePaymentSession({ gid, body }?: {
        gid: string;
        body: PaymentSessionRequestSerializer;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PaymentSessionResponseSerializer>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.gid - Global identifier of the entity (e.g. order,
     *   cart etc.) against which payment_session was initiated. This is
     *   generated by Fynd payments platform and is unique.
     * @param {string} arg.requestId - A unique id that was used to initiate a
     *   refund session. This is generated by Fynd platform and is usually shipment_id.
     * @param {RefundSessionRequestSerializer} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RefundSessionResponseSerializer>} - Success response
     * @summary: API to update the status of a refund
     * @description: A refund_session is initiated against a refund request, and this endpoint is to update the status against the refund request_id. A gid is unique indentifier of the entity against which payment was received e.g. an order.
     */
    updateRefundSession({ gid, requestId, body }?: {
        gid: string;
        requestId: string;
        body: RefundSessionRequestSerializer;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<RefundSessionResponseSerializer>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ValidateCustomerRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ValidateCustomerResponse>} - Success response
     * @summary: Validate customer for payment
     * @description: Use this API to check if the customer is eligible to use credit-line facilities such as Simpl Pay Later and Rupifi.
     */
    verifyCustomerForPayment({ body }?: {
        body: ValidateCustomerRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ValidateCustomerResponse>;
}
