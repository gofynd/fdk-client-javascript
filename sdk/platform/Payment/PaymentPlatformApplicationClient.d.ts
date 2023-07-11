export = Payment;
declare class Payment {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {PaymentPlatformApplicationValidator.AddEdcDeviceParam} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.EdcDeviceUpdateResponse>} - Success response
     * @name addEdcDevice
     * @summary: Update store id and device tag of edc device
     * @description: Use this API to Update store id and device tag of edc device
     */
    addEdcDevice({ terminalUniqueIdentifier, body }?: PaymentPlatformApplicationValidator.AddEdcDeviceParam): Promise<PaymentPlatformModel.EdcDeviceUpdateResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.AddRefundBankAccountUsingOTPParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.RefundAccountResponse>} - Success response
     * @name addRefundBankAccountUsingOTP
     * @summary: Save bank details for cancelled/returned order
     * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
     */
    addRefundBankAccountUsingOTP({ body }?: PaymentPlatformApplicationValidator.AddRefundBankAccountUsingOTPParam): Promise<PaymentPlatformModel.RefundAccountResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.CancelPaymentLinkParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.CancelPaymentLinkResponse>} -
     *   Success response
     * @name cancelPaymentLink
     * @summary: Cancel payment link
     * @description: Use this API to cancel a payment link for the customer
     */
    cancelPaymentLink({ body }?: PaymentPlatformApplicationValidator.CancelPaymentLinkParam): Promise<PaymentPlatformModel.CancelPaymentLinkResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.CheckAndUpdatePaymentStatusParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.PaymentStatusUpdateResponse>} -
     *   Success response
     * @name checkAndUpdatePaymentStatus
     * @summary: Performs continuous polling to check status of payment on the server
     * @description: Use this API to perform continuous polling at intervals to check the status of payment until timeout.
     */
    checkAndUpdatePaymentStatus({ body }?: PaymentPlatformApplicationValidator.CheckAndUpdatePaymentStatusParam): Promise<PaymentPlatformModel.PaymentStatusUpdateResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.ConfirmPaymentParam} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.PaymentConfirmationResponse>} -
     *   Success response
     * @name confirmPayment
     * @summary: Confirm payment after successful payment from payment gateway
     * @description: Use this API to confirm payment after payment gateway accepted payment.
     */
    confirmPayment({ body }?: PaymentPlatformApplicationValidator.ConfirmPaymentParam): Promise<PaymentPlatformModel.PaymentConfirmationResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.CreatePaymentLinkParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.CreatePaymentLinkResponse>} -
     *   Success response
     * @name createPaymentLink
     * @summary: Create payment link
     * @description: Use this API to create a payment link for the customer
     */
    createPaymentLink({ body }?: PaymentPlatformApplicationValidator.CreatePaymentLinkParam): Promise<PaymentPlatformModel.CreatePaymentLinkResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.EdcAggregatorsAndModelListParam} arg
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
     * @param {PaymentPlatformApplicationValidator.EdcDeviceListParam} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.EdcDeviceListResponse>} - Success response
     * @name edcDeviceList
     * @summary: get all the device list of an app
     * @description: Use this API to get all devices linked to a particular app.
     */
    edcDeviceList({ pageNo, pageSize, isActive, storeId, deviceTag }?: PaymentPlatformApplicationValidator.EdcDeviceListParam): Promise<PaymentPlatformModel.EdcDeviceListResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.EdcDeviceStatsParam} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.EdcDeviceStatsResponse>} - Success response
     * @name edcDeviceStats
     * @summary: get some information about the store and edc device
     * @description: Use this API to get info of devices linked to a particular app.
     */
    edcDeviceStats({}?: any): Promise<PaymentPlatformModel.EdcDeviceStatsResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetBankAccountDetailsOpenAPIParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.RefundAccountResponse>} - Success response
     * @name getBankAccountDetailsOpenAPI
     * @summary: Get bank details
     * @description: Use this API to get saved bank details for returned/cancelled order using order id.
     */
    getBankAccountDetailsOpenAPI({ orderId, requestHash, }?: PaymentPlatformApplicationValidator.GetBankAccountDetailsOpenAPIParam): Promise<PaymentPlatformModel.RefundAccountResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetBrandPaymentGatewayConfigParam} arg
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
     * @param {PaymentPlatformApplicationValidator.GetEdcDeviceParam} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.EdcDeviceDetailsResponse>} -
     *   Success response
     * @name getEdcDevice
     * @summary: get details of a single edc device
     * @description: Use this API to get details of a single edc device
     */
    getEdcDevice({ terminalUniqueIdentifier }?: PaymentPlatformApplicationValidator.GetEdcDeviceParam): Promise<PaymentPlatformModel.EdcDeviceDetailsResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPaymentCodeOptionParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.GetPaymentCodeResponse>} - Success response
     * @name getPaymentCodeOption
     * @summary: List Payment Options Method Codes
     * @description: Get all active List Payment Options Method Codes
     */
    getPaymentCodeOption({}?: any): Promise<PaymentPlatformModel.GetPaymentCodeResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPaymentLinkParam} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.GetPaymentLinkResponse>} - Success response
     * @name getPaymentLink
     * @summary: Get payment link
     * @description: Use this API to get a payment link
     */
    getPaymentLink({ paymentLinkId }?: PaymentPlatformApplicationValidator.GetPaymentLinkParam): Promise<PaymentPlatformModel.GetPaymentLinkResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPaymentModeRoutesParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.PaymentOptionsResponse>} - Success response
     * @name getPaymentModeRoutes
     * @summary: Get All Valid Payment Options
     * @description: Use this API to get Get All Valid Payment Options for making payment
     */
    getPaymentModeRoutes({ refresh, requestType }?: PaymentPlatformApplicationValidator.GetPaymentModeRoutesParam): Promise<PaymentPlatformModel.PaymentOptionsResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPosPaymentModeRoutesParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.PaymentOptionsResponse>} - Success response
     * @name getPosPaymentModeRoutes
     * @summary: Get All Valid Payment Options
     * @description: Use this API to get Get All Valid Payment Options for making payment
     */
    getPosPaymentModeRoutes({ amount, cartId, pincode, checkoutMode, orderType, refresh, cardReference, userDetails, }?: PaymentPlatformApplicationValidator.GetPosPaymentModeRoutesParam): Promise<PaymentPlatformModel.PaymentOptionsResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetUserBeneficiariesParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.OrderBeneficiaryResponse>} -
     *   Success response
     * @name getUserBeneficiaries
     * @summary: List User Beneficiary
     * @description: Get all active  beneficiary details added by the user for refund
     */
    getUserBeneficiaries({ orderId }?: PaymentPlatformApplicationValidator.GetUserBeneficiariesParam): Promise<PaymentPlatformModel.OrderBeneficiaryResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetUserCODlimitRoutesParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.GetUserCODLimitResponse>} - Success response
     * @name getUserCODlimitRoutes
     * @summary: Get COD limit for user
     * @description: Use this API to get user cod limit and reamining limit for the payment
     */
    getUserCODlimitRoutes({ merchantUserId, mobileNo }?: PaymentPlatformApplicationValidator.GetUserCODlimitRoutesParam): Promise<PaymentPlatformModel.GetUserCODLimitResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetUserOrderBeneficiariesParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.OrderBeneficiaryResponse>} -
     *   Success response
     * @name getUserOrderBeneficiaries
     * @summary: List Order Beneficiary
     * @description: Get all active  beneficiary details added by the user for refund
     */
    getUserOrderBeneficiaries({ orderId }?: PaymentPlatformApplicationValidator.GetUserOrderBeneficiariesParam): Promise<PaymentPlatformModel.OrderBeneficiaryResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.InitialisePaymentParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.PaymentInitializationResponse>} -
     *   Success response
     * @name initialisePayment
     * @summary: Initialize a payment (server-to-server) for UPI and BharatQR
     * @description: PUse this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen.
     */
    initialisePayment({ body }?: PaymentPlatformApplicationValidator.InitialisePaymentParam): Promise<PaymentPlatformModel.PaymentInitializationResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.MerchantOnBoardingParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.MerchantOnBoardingResponse>} -
     *   Success response
     * @name merchantOnBoarding
     * @summary: API to push Ajiodhan merchant data to Gringotts system
     * @description: Use this API to push Ajiodhan merchant data to Gringotts system
     */
    merchantOnBoarding({ body }?: PaymentPlatformApplicationValidator.MerchantOnBoardingParam): Promise<PaymentPlatformModel.MerchantOnBoardingResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.OauthGetUrlParam} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.GetOauthUrlResponse>} - Success response
     * @name oauthGetUrl
     * @summary: API to Get the url to call for oauth
     * @description: Use this API to Get the url to call for oauth.
     */
    oauthGetUrl({ aggregator, successRedirectUrl, failureRedirectUrl, }?: PaymentPlatformApplicationValidator.OauthGetUrlParam): Promise<PaymentPlatformModel.GetOauthUrlResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.PaymentStatusBulkParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.PaymentStatusBulkHandlerResponse>}
     *   - Success response
     *
     * @name paymentStatusBulk
     * @summary: Get Payment status and information for a list of order_ids
     * @description: Use this API to get Payment status and information for a list of order_ids
     */
    paymentStatusBulk({ body }?: PaymentPlatformApplicationValidator.PaymentStatusBulkParam): Promise<PaymentPlatformModel.PaymentStatusBulkHandlerResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.PollingPaymentLinkParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.PollingPaymentLinkResponse>} -
     *   Success response
     * @name pollingPaymentLink
     * @summary: Used for polling if payment successful or not
     * @description: Use this API to poll if payment through payment was successful or not
     */
    pollingPaymentLink({ paymentLinkId }?: PaymentPlatformApplicationValidator.PollingPaymentLinkParam): Promise<PaymentPlatformModel.PollingPaymentLinkResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.RepaymentDetailsParam} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.RepaymentResponse>} - Success response
     * @name repaymentDetails
     * @summary: API to register repayment details
     * @description: Use this API to register any repayment record in the db and notify the aggrgator
     */
    repaymentDetails({ body }?: PaymentPlatformApplicationValidator.RepaymentDetailsParam): Promise<PaymentPlatformModel.RepaymentResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.ResendOrCancelPaymentParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.ResendOrCancelPaymentResponse>} -
     *   Success response
     * @name resendOrCancelPayment
     * @summary: API to resend and cancel a payment link which was already generated.
     * @description: Use this API to perform resend or cancel a payment link based on request payload.
     */
    resendOrCancelPayment({ body }?: PaymentPlatformApplicationValidator.ResendOrCancelPaymentParam): Promise<PaymentPlatformModel.ResendOrCancelPaymentResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.ResendPaymentLinkParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.ResendPaymentLinkResponse>} -
     *   Success response
     * @name resendPaymentLink
     * @summary: Resend payment link
     * @description: Use this API to resend a payment link for the customer
     */
    resendPaymentLink({ body }?: PaymentPlatformApplicationValidator.ResendPaymentLinkParam): Promise<PaymentPlatformModel.ResendPaymentLinkResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.RevokeOauthTokenParam} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.RevokeOAuthToken>} - Success response
     * @name revokeOauthToken
     * @summary: API to Revoke oauth for razorpay partnership
     * @description: Use this API to Revoke oauth for razorpay partnership
     */
    revokeOauthToken({ aggregator }?: PaymentPlatformApplicationValidator.RevokeOauthTokenParam): Promise<PaymentPlatformModel.RevokeOAuthToken>;
    /**
     * @param {PaymentPlatformApplicationValidator.SaveBrandPaymentGatewayConfigParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.PaymentGatewayToBeReviewed>} -
     *   Success response
     * @name saveBrandPaymentGatewayConfig
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     */
    saveBrandPaymentGatewayConfig({ body }?: PaymentPlatformApplicationValidator.SaveBrandPaymentGatewayConfigParam): Promise<PaymentPlatformModel.PaymentGatewayToBeReviewed>;
    /**
     * @param {PaymentPlatformApplicationValidator.SetUserCODlimitRoutesParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.SetCODOptionResponse>} - Success response
     * @name setUserCODlimitRoutes
     * @summary: Set COD option for user for payment
     * @description: Use this API to set cod option as true or false for the payment
     */
    setUserCODlimitRoutes({ body }?: PaymentPlatformApplicationValidator.SetUserCODlimitRoutesParam): Promise<PaymentPlatformModel.SetCODOptionResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.UpdateEdcDeviceParam} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.EdcDeviceAddResponse>} - Success response
     * @name updateEdcDevice
     * @summary: map new edc device to the terminal
     * @description: Use this API to map new edc device to the terminal
     */
    updateEdcDevice({ body }?: PaymentPlatformApplicationValidator.UpdateEdcDeviceParam): Promise<PaymentPlatformModel.EdcDeviceAddResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.VerifyCustomerForPaymentParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.ValidateCustomerResponse>} -
     *   Success response
     * @name verifyCustomerForPayment
     * @summary: Validate customer for payment
     * @description: Use this API to check if the customer is eligible to use credit-line facilities such as Simpl Pay Later and Rupifi.
     */
    verifyCustomerForPayment({ body }?: PaymentPlatformApplicationValidator.VerifyCustomerForPaymentParam): Promise<PaymentPlatformModel.ValidateCustomerResponse>;
}
import PaymentPlatformApplicationValidator = require("./PaymentPlatformApplicationValidator");
import PaymentPlatformModel = require("./PaymentPlatformModel");
