export = Payment;
declare class Payment {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {PaymentPlatformApplicationValidator.addEdcDevice} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.EdcDeviceUpdateResponse>} - Success response
     * @name addEdcDevice
     * @summary: Update store id and device tag of edc device
     * @description: Use this API to Update store id and device tag of edc device
     */
    addEdcDevice({ terminalUniqueIdentifier, body }?: PaymentPlatformApplicationValidator.addEdcDevice): Promise<PaymentPlatformModel.EdcDeviceUpdateResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.addRefundBankAccountUsingOTP} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.RefundAccountResponse>} - Success response
     * @name addRefundBankAccountUsingOTP
     * @summary: Save bank details for cancelled/returned order
     * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
     */
    addRefundBankAccountUsingOTP({ body }?: PaymentPlatformApplicationValidator.addRefundBankAccountUsingOTP): Promise<PaymentPlatformModel.RefundAccountResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.cancelPaymentLink} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.CancelPaymentLinkResponse>} -
     *   Success response
     * @name cancelPaymentLink
     * @summary: Cancel payment link
     * @description: Use this API to cancel a payment link for the customer
     */
    cancelPaymentLink({ body }?: PaymentPlatformApplicationValidator.cancelPaymentLink): Promise<PaymentPlatformModel.CancelPaymentLinkResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.checkAndUpdatePaymentStatus} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.PaymentStatusUpdateResponse>} -
     *   Success response
     * @name checkAndUpdatePaymentStatus
     * @summary: Performs continuous polling to check status of payment on the server
     * @description: Use this API to perform continuous polling at intervals to check the status of payment until timeout.
     */
    checkAndUpdatePaymentStatus({ body }?: PaymentPlatformApplicationValidator.checkAndUpdatePaymentStatus): Promise<PaymentPlatformModel.PaymentStatusUpdateResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.confirmPayment} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.PaymentConfirmationResponse>} -
     *   Success response
     * @name confirmPayment
     * @summary: Confirm payment after successful payment from payment gateway
     * @description: Use this API to confirm payment after payment gateway accepted payment.
     */
    confirmPayment({ body }?: PaymentPlatformApplicationValidator.confirmPayment): Promise<PaymentPlatformModel.PaymentConfirmationResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.createPaymentLink} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.CreatePaymentLinkResponse>} -
     *   Success response
     * @name createPaymentLink
     * @summary: Create payment link
     * @description: Use this API to create a payment link for the customer
     */
    createPaymentLink({ body }?: PaymentPlatformApplicationValidator.createPaymentLink): Promise<PaymentPlatformModel.CreatePaymentLinkResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.edcAggregatorsAndModelList} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.EdcAggregatorAndModelListResponse>}
     *   - Success response
     *
     * @name edcAggregatorsAndModelList
     * @summary: get some information about the store and edc device
     * @description: Use this API to get info of devices linked to a particular app.
     */
    edcAggregatorsAndModelList({}?: any): Promise<PaymentPlatformModel.EdcAggregatorAndModelListResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.edcDeviceList} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.EdcDeviceListResponse>} - Success response
     * @name edcDeviceList
     * @summary: get all the device list of an app
     * @description: Use this API to get all devices linked to a particular app.
     */
    edcDeviceList({ pageNo, pageSize, isActive, storeId, deviceTag }?: PaymentPlatformApplicationValidator.edcDeviceList): Promise<PaymentPlatformModel.EdcDeviceListResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.edcDeviceStats} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.EdcDeviceStatsResponse>} - Success response
     * @name edcDeviceStats
     * @summary: get some information about the store and edc device
     * @description: Use this API to get info of devices linked to a particular app.
     */
    edcDeviceStats({}?: any): Promise<PaymentPlatformModel.EdcDeviceStatsResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.extensionPaymentUpdate} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.ExtensionPaymentUpdateResponseSerializer>}
     *   - Success response
     *
     * @name extensionPaymentUpdate
     * @summary: Extension will call this api to set the payment status of an order
     * @description: Use this API to Extension will call this api to set the payment status of an order
     */
    extensionPaymentUpdate({ body }?: PaymentPlatformApplicationValidator.extensionPaymentUpdate): Promise<PaymentPlatformModel.ExtensionPaymentUpdateResponseSerializer>;
    /**
     * @param {PaymentPlatformApplicationValidator.getBankAccountDetailsOpenAPI} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.RefundAccountResponse>} - Success response
     * @name getBankAccountDetailsOpenAPI
     * @summary: Get bank details
     * @description: Use this API to get saved bank details for returned/cancelled order using order id.
     */
    getBankAccountDetailsOpenAPI({ orderId, requestHash, }?: PaymentPlatformApplicationValidator.getBankAccountDetailsOpenAPI): Promise<PaymentPlatformModel.RefundAccountResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.getBrandPaymentGatewayConfig} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.PaymentGatewayConfigResponse>} -
     *   Success response
     * @name getBrandPaymentGatewayConfig
     * @summary: Get All Brand Payment Gateway Config Secret
     * @description: Get All Brand Payment Gateway Config Secret
     */
    getBrandPaymentGatewayConfig({}?: any): Promise<PaymentPlatformModel.PaymentGatewayConfigResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.getEdcDevice} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.EdcDeviceDetailsResponse>} -
     *   Success response
     * @name getEdcDevice
     * @summary: get details of a single edc device
     * @description: Use this API to get details of a single edc device
     */
    getEdcDevice({ terminalUniqueIdentifier }?: PaymentPlatformApplicationValidator.getEdcDevice): Promise<PaymentPlatformModel.EdcDeviceDetailsResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.getPaymentCodeOption} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.GetPaymentCodeResponse>} - Success response
     * @name getPaymentCodeOption
     * @summary: List Payment Options Method Codes
     * @description: Get all active List Payment Options Method Codes
     */
    getPaymentCodeOption({}?: any): Promise<PaymentPlatformModel.GetPaymentCodeResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.getPaymentLink} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.GetPaymentLinkResponse>} - Success response
     * @name getPaymentLink
     * @summary: Get payment link
     * @description: Use this API to get a payment link
     */
    getPaymentLink({ paymentLinkId }?: PaymentPlatformApplicationValidator.getPaymentLink): Promise<PaymentPlatformModel.GetPaymentLinkResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.getPaymentModeRoutes} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.PaymentOptionsResponse>} - Success response
     * @name getPaymentModeRoutes
     * @summary: Get All Valid Payment Options
     * @description: Use this API to get Get All Valid Payment Options for making payment
     */
    getPaymentModeRoutes({ refresh, requestType }?: PaymentPlatformApplicationValidator.getPaymentModeRoutes): Promise<PaymentPlatformModel.PaymentOptionsResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.getPosPaymentModeRoutes} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.PaymentOptionsResponse>} - Success response
     * @name getPosPaymentModeRoutes
     * @summary: Get All Valid Payment Options
     * @description: Use this API to get Get All Valid Payment Options for making payment
     */
    getPosPaymentModeRoutes({ amount, cartId, pincode, checkoutMode, orderType, refresh, cardReference, userDetails, }?: PaymentPlatformApplicationValidator.getPosPaymentModeRoutes): Promise<PaymentPlatformModel.PaymentOptionsResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.getUserBeneficiaries} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.OrderBeneficiaryResponse>} -
     *   Success response
     * @name getUserBeneficiaries
     * @summary: List User Beneficiary
     * @description: Get all active  beneficiary details added by the user for refund
     */
    getUserBeneficiaries({ orderId }?: PaymentPlatformApplicationValidator.getUserBeneficiaries): Promise<PaymentPlatformModel.OrderBeneficiaryResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.getUserCODlimitRoutes} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.GetUserCODLimitResponse>} - Success response
     * @name getUserCODlimitRoutes
     * @summary: Get COD limit for user
     * @description: Use this API to get user cod limit and reamining limit for the payment
     */
    getUserCODlimitRoutes({ merchantUserId, mobileNo }?: PaymentPlatformApplicationValidator.getUserCODlimitRoutes): Promise<PaymentPlatformModel.GetUserCODLimitResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.getUserOrderBeneficiaries} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.OrderBeneficiaryResponse>} -
     *   Success response
     * @name getUserOrderBeneficiaries
     * @summary: List Order Beneficiary
     * @description: Get all active  beneficiary details added by the user for refund
     */
    getUserOrderBeneficiaries({ orderId }?: PaymentPlatformApplicationValidator.getUserOrderBeneficiaries): Promise<PaymentPlatformModel.OrderBeneficiaryResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.initialisePayment} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.PaymentInitializationResponse>} -
     *   Success response
     * @name initialisePayment
     * @summary: Initialize a payment (server-to-server) for UPI and BharatQR
     * @description: PUse this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen.
     */
    initialisePayment({ body }?: PaymentPlatformApplicationValidator.initialisePayment): Promise<PaymentPlatformModel.PaymentInitializationResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.merchantOnBoarding} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.MerchantOnBoardingResponse>} -
     *   Success response
     * @name merchantOnBoarding
     * @summary: API to push Ajiodhan merchant data to Gringotts system
     * @description: Use this API to push Ajiodhan merchant data to Gringotts system
     */
    merchantOnBoarding({ body }?: PaymentPlatformApplicationValidator.merchantOnBoarding): Promise<PaymentPlatformModel.MerchantOnBoardingResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.oauthGetUrl} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.GetOauthUrlResponse>} - Success response
     * @name oauthGetUrl
     * @summary: API to Get the url to call for oauth
     * @description: Use this API to Get the url to call for oauth.
     */
    oauthGetUrl({ aggregator, successRedirectUrl, failureRedirectUrl, }?: PaymentPlatformApplicationValidator.oauthGetUrl): Promise<PaymentPlatformModel.GetOauthUrlResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.paymentStatusBulk} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.PaymentStatusBulkHandlerResponse>}
     *   - Success response
     *
     * @name paymentStatusBulk
     * @summary: Get Payment status and information for a list of order_ids
     * @description: Use this API to get Payment status and information for a list of order_ids
     */
    paymentStatusBulk({ body }?: PaymentPlatformApplicationValidator.paymentStatusBulk): Promise<PaymentPlatformModel.PaymentStatusBulkHandlerResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.pollingPaymentLink} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.PollingPaymentLinkResponse>} -
     *   Success response
     * @name pollingPaymentLink
     * @summary: Used for polling if payment successful or not
     * @description: Use this API to poll if payment through payment was successful or not
     */
    pollingPaymentLink({ paymentLinkId }?: PaymentPlatformApplicationValidator.pollingPaymentLink): Promise<PaymentPlatformModel.PollingPaymentLinkResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.repaymentDetails} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.RepaymentResponse>} - Success response
     * @name repaymentDetails
     * @summary: API to register repayment details
     * @description: Use this API to register any repayment record in the db and notify the aggrgator
     */
    repaymentDetails({ body }?: PaymentPlatformApplicationValidator.repaymentDetails): Promise<PaymentPlatformModel.RepaymentResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.resendOrCancelPayment} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.ResendOrCancelPaymentResponse>} -
     *   Success response
     * @name resendOrCancelPayment
     * @summary: API to resend and cancel a payment link which was already generated.
     * @description: Use this API to perform resend or cancel a payment link based on request payload.
     */
    resendOrCancelPayment({ body }?: PaymentPlatformApplicationValidator.resendOrCancelPayment): Promise<PaymentPlatformModel.ResendOrCancelPaymentResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.resendPaymentLink} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.ResendPaymentLinkResponse>} -
     *   Success response
     * @name resendPaymentLink
     * @summary: Resend payment link
     * @description: Use this API to resend a payment link for the customer
     */
    resendPaymentLink({ body }?: PaymentPlatformApplicationValidator.resendPaymentLink): Promise<PaymentPlatformModel.ResendPaymentLinkResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.revokeOauthToken} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.RevokeOAuthToken>} - Success response
     * @name revokeOauthToken
     * @summary: API to Revoke oauth for razorpay partnership
     * @description: Use this API to Revoke oauth for razorpay partnership
     */
    revokeOauthToken({ aggregator }?: PaymentPlatformApplicationValidator.revokeOauthToken): Promise<PaymentPlatformModel.RevokeOAuthToken>;
    /**
     * @param {PaymentPlatformApplicationValidator.saveBrandPaymentGatewayConfig} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.PaymentGatewayToBeReviewed>} -
     *   Success response
     * @name saveBrandPaymentGatewayConfig
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     */
    saveBrandPaymentGatewayConfig({ body }?: PaymentPlatformApplicationValidator.saveBrandPaymentGatewayConfig): Promise<PaymentPlatformModel.PaymentGatewayToBeReviewed>;
    /**
     * @param {PaymentPlatformApplicationValidator.setUserCODlimitRoutes} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.SetCODOptionResponse>} - Success response
     * @name setUserCODlimitRoutes
     * @summary: Set COD option for user for payment
     * @description: Use this API to set cod option as true or false for the payment
     */
    setUserCODlimitRoutes({ body }?: PaymentPlatformApplicationValidator.setUserCODlimitRoutes): Promise<PaymentPlatformModel.SetCODOptionResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.updateEdcDevice} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.EdcDeviceAddResponse>} - Success response
     * @name updateEdcDevice
     * @summary: map new edc device to the terminal
     * @description: Use this API to map new edc device to the terminal
     */
    updateEdcDevice({ body }?: PaymentPlatformApplicationValidator.updateEdcDevice): Promise<PaymentPlatformModel.EdcDeviceAddResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.verifyCustomerForPayment} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.ValidateCustomerResponse>} -
     *   Success response
     * @name verifyCustomerForPayment
     * @summary: Validate customer for payment
     * @description: Use this API to check if the customer is eligible to use credit-line facilities such as Simpl Pay Later and Rupifi.
     */
    verifyCustomerForPayment({ body }?: PaymentPlatformApplicationValidator.verifyCustomerForPayment): Promise<PaymentPlatformModel.ValidateCustomerResponse>;
}
import PaymentPlatformApplicationValidator = require("./PaymentPlatformApplicationValidator");
import PaymentPlatformModel = require("./PaymentPlatformModel");
