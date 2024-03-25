export = Payment;
declare class Payment {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {PaymentPlatformApplicationValidator.AddEdcDeviceParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.EdcDeviceUpdateResponse>} - Success response
     * @name addEdcDevice
     * @summary: Add EDC device.
     * @description: Register and add a new EDC device. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/addEdcDevice/).
     */
    addEdcDevice({ terminalUniqueIdentifier, body, requestHeaders }?: PaymentPlatformApplicationValidator.AddEdcDeviceParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.EdcDeviceUpdateResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.AddRefundBankAccountParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.RefundAccountResponse>} - Success response
     * @name addRefundBankAccount
     * @summary: Save bank details for cancelled/returned order
     * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/addRefundBankAccount/).
     */
    addRefundBankAccount({ body, requestHeaders }?: PaymentPlatformApplicationValidator.AddRefundBankAccountParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.RefundAccountResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.AddRefundBankAccountUsingOTPParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.RefundAccountResponse>} - Success response
     * @name addRefundBankAccountUsingOTP
     * @summary: Add refund bank account using OTP.
     * @description: Register a refund bank account with OTP verification. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/addRefundBankAccountUsingOTP/).
     */
    addRefundBankAccountUsingOTP({ body, requestHeaders }?: PaymentPlatformApplicationValidator.AddRefundBankAccountUsingOTPParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.RefundAccountResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.CancelPaymentLinkParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.CancelPaymentLinkResponse>} -
     *   Success response
     * @name cancelPaymentLink
     * @summary: Cancel payment link.
     * @description: Deactivate and cancel a payment link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/cancelPaymentLink/).
     */
    cancelPaymentLink({ body, requestHeaders }?: PaymentPlatformApplicationValidator.CancelPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.CancelPaymentLinkResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.CheckAndUpdatePaymentStatusParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentStatusUpdateResponse>} -
     *   Success response
     * @name checkAndUpdatePaymentStatus
     * @summary: Check and update payment status.
     * @description: Verify and modify the status of a payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/checkAndUpdatePaymentStatus/).
     */
    checkAndUpdatePaymentStatus({ body, requestHeaders }?: PaymentPlatformApplicationValidator.CheckAndUpdatePaymentStatusParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentStatusUpdateResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.ConfirmPaymentParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentConfirmationResponse>} -
     *   Success response
     * @name confirmPayment
     * @summary: Confirm payment.
     * @description: Authenticate and confirm a payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/confirmPayment/).
     */
    confirmPayment({ body, requestHeaders }?: PaymentPlatformApplicationValidator.ConfirmPaymentParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentConfirmationResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.CopyConfigAggPaymentModesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.AggregatorConfigResponse>} -
     *   Success response
     * @name copyConfigAggPaymentModes
     * @summary: Copy aggregator config of onc device to another.
     * @description: Copy aggregator config like Wallet, NB, paylater from one device of an aggregator like razorpay to another device. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/copyConfigAggPaymentModes/).
     */
    copyConfigAggPaymentModes({ aggregatorId, body, requestHeaders }?: PaymentPlatformApplicationValidator.CopyConfigAggPaymentModesParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.AggregatorConfigResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.CopyConfigPaymentModesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.AggregatorConfigResponse>} -
     *   Success response
     * @name copyConfigPaymentModes
     * @summary: Copy payment mode config of onc device to another.
     * @description: Copy aggregator config like Wallet, NB, paylater from one device of an aggregator like razorpay to another device. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/copyConfigPaymentModes/).
     */
    copyConfigPaymentModes({ body, requestHeaders }?: PaymentPlatformApplicationValidator.CopyConfigPaymentModesParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.AggregatorConfigResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.CreateMerchantRefundPriorityParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.RefundPriorityResponseSerializer>}
     *   - Success response
     *
     * @name createMerchantRefundPriority
     * @summary: API to create merchant refund priority
     * @description: API to update merchant refund priority - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/createMerchantRefundPriority/).
     */
    createMerchantRefundPriority({ configType, body, requestHeaders }?: PaymentPlatformApplicationValidator.CreateMerchantRefundPriorityParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.RefundPriorityResponseSerializer>;
    /**
     * @param {PaymentPlatformApplicationValidator.CreatePaymentLinkParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.CreatePaymentLinkResponse>} -
     *   Success response
     * @name createPaymentLink
     * @summary: Create payment link.
     * @description: Generate a new link for accepting payments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/createPaymentLink/).
     */
    createPaymentLink({ body, requestHeaders }?: PaymentPlatformApplicationValidator.CreatePaymentLinkParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.CreatePaymentLinkResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.CreatePaymentOrderParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentOrderResponse>} - Success response
     * @name createPaymentOrder
     * @summary: Create Order
     * @description: Use this API to create a order and payment on aggregator side - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/createPaymentOrder/).
     */
    createPaymentOrder({ body, requestHeaders }?: PaymentPlatformApplicationValidator.CreatePaymentOrderParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentOrderResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.DeleteBeneficiaryDetailsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.DeleteRefundAccountResponse>} -
     *   Success response
     * @name deleteBeneficiaryDetails
     * @summary: Delete saved beneficiary details of customers
     * @description: Use this API to delete the saved beneficiary details provided beneficiary Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/deleteBeneficiaryDetails/).
     */
    deleteBeneficiaryDetails({ beneficiaryId, requestHeaders }?: PaymentPlatformApplicationValidator.DeleteBeneficiaryDetailsParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.DeleteRefundAccountResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.EdcAggregatorsAndModelListParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.EdcAggregatorAndModelListResponse>}
     *   - Success response
     *
     * @name edcAggregatorsAndModelList
     * @summary: EDC aggregators and model list.
     * @description: Retrieve a list of EDC (Electronic Data Capture) aggregators and models. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/edcAggregatorsAndModelList/).
     */
    edcAggregatorsAndModelList({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentPlatformModel.EdcAggregatorAndModelListResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.EdcDeviceListParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.EdcDeviceListResponse>} - Success response
     * @name edcDeviceList
     * @summary: EDC device list.
     * @description: Retrieve a list of available EDC devices. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/edcDeviceList/).
     */
    edcDeviceList({ pageNo, pageSize, isActive, storeId, deviceTag, requestHeaders }?: PaymentPlatformApplicationValidator.EdcDeviceListParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.EdcDeviceListResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.EdcDeviceStatsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.EdcDeviceStatsResponse>} - Success response
     * @name edcDeviceStats
     * @summary: EDC device stats.
     * @description: Get statistics and data related to EDC devices. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/edcDeviceStats/).
     */
    edcDeviceStats({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentPlatformModel.EdcDeviceStatsResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetAggregatorCredentialParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.AggregatorCredentialResponse>} -
     *   Success response
     * @name getAggregatorCredential
     * @summary: API to get merchant refund priority
     * @description: API to get merchant refund priority - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getAggregatorCredential/).
     */
    getAggregatorCredential({ aggregator, configType, requestHeaders }?: PaymentPlatformApplicationValidator.GetAggregatorCredentialParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.AggregatorCredentialResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetAggregatorCredentialHistoryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.AggregatorHistoryResponse>} -
     *   Success response
     * @name getAggregatorCredentialHistory
     * @summary: Get merchant refund priority
     * @description: Get merchant refund priority. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getAggregatorCredentialHistory/).
     */
    getAggregatorCredentialHistory({ aggregator, configType, requestHeaders }?: PaymentPlatformApplicationValidator.GetAggregatorCredentialHistoryParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.AggregatorHistoryResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetBankAccountDetailsOpenAPIParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.GetRefundAccountResponse>} -
     *   Success response
     * @name getBankAccountDetailsOpenAPI
     * @summary: Get bank account details.
     * @description: Retrieve bank account information using an open API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getBankAccountDetailsOpenAPI/).
     */
    getBankAccountDetailsOpenAPI({ orderId, requestHash, requestHeaders }?: PaymentPlatformApplicationValidator.GetBankAccountDetailsOpenAPIParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.GetRefundAccountResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetBrandPaymentGatewayConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentGatewayConfigResponse>} -
     *   Success response
     * @name getBrandPaymentGatewayConfig
     * @summary: Get brand payment gateway config
     * @description: Retrieve configuration settings for brand payment gateways. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getBrandPaymentGatewayConfig/).
     */
    getBrandPaymentGatewayConfig({ aggregator, configType, requestHeaders }?: PaymentPlatformApplicationValidator.GetBrandPaymentGatewayConfigParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentGatewayConfigResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetDevicesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.GetDeviceResponse>} - Success response
     * @name getDevices
     * @summary: Get all business units and it's devices.
     * @description: This method returns an object containing the details of a single aggregator as per the id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getDevices/).
     */
    getDevices({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentPlatformModel.GetDeviceResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetEdcDeviceParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.EdcDeviceDetailsResponse>} -
     *   Success response
     * @name getEdcDevice
     * @summary: Get EDC device.
     * @description: Retrieve detailed information about an EDC device. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getEdcDevice/).
     */
    getEdcDevice({ terminalUniqueIdentifier, requestHeaders }?: PaymentPlatformApplicationValidator.GetEdcDeviceParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.EdcDeviceDetailsResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetMerchantAggregatorAppVersionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.AggregatorVersionResponse>} -
     *   Success response
     * @name getMerchantAggregatorAppVersion
     * @summary: Get app version required for Payment Mode.
     * @description: This api provide read operations on the app version required for Payment Mode or sub payment mode for an Aggregator. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getMerchantAggregatorAppVersion/).
     */
    getMerchantAggregatorAppVersion({ aggregatorId, businessUnit, device, paymentModeId, subPaymentMode, requestHeaders, }?: PaymentPlatformApplicationValidator.GetMerchantAggregatorAppVersionParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.AggregatorVersionResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetMerchantAggregatorPaymentModeDetailsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.AggregatorPlatformPaymentModeResponse>}
     *   - Success response
     *
     * @name getMerchantAggregatorPaymentModeDetails
     * @summary: Get merchant aggregator payment mode details.
     * @description: swagger not found. so operationId not found - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getMerchantAggregatorPaymentModeDetails/).
     */
    getMerchantAggregatorPaymentModeDetails({ aggregatorId, businessUnit, device, requestHeaders }?: PaymentPlatformApplicationValidator.GetMerchantAggregatorPaymentModeDetailsParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.AggregatorPlatformPaymentModeResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetMerchantPaymentOptionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PlatformOnlineOfflinePaymentResponse>}
     *   - Success response
     *
     * @name getMerchantPaymentOption
     * @summary: Get merchant payment option
     * @description: Retrieve all the available Paymet Gateways for merchant and its offline payment mode details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getMerchantPaymentOption/).
     */
    getMerchantPaymentOption({ paymentOptionType, requestHeaders }?: PaymentPlatformApplicationValidator.GetMerchantPaymentOptionParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PlatformOnlineOfflinePaymentResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetMerchantRefundPriorityParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.RefundPriorityResponseSerializer>}
     *   - Success response
     *
     * @name getMerchantRefundPriority
     * @summary: API to get merchant refund priority
     * @description: API to get merchant refund priority - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getMerchantRefundPriority/).
     */
    getMerchantRefundPriority({ configType, requestHeaders }?: PaymentPlatformApplicationValidator.GetMerchantRefundPriorityParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.RefundPriorityResponseSerializer>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPGConfigAggregatorsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.AggregatorConfigResponse>} -
     *   Success response
     * @name getPGConfigAggregators
     * @summary: Get PG (Payment Gateway) config aggregators.
     * @description: swagger not found. so operationId not found - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPGConfigAggregators/).
     */
    getPGConfigAggregators({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentPlatformModel.AggregatorConfigResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPaymentCodeOptionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.GetPaymentCodeResponse>} - Success response
     * @name getPaymentCodeOption
     * @summary: List Payment Options Method Codes
     * @description: Get all active List Payment Options Method Codes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentCodeOption/).
     */
    getPaymentCodeOption({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentPlatformModel.GetPaymentCodeResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPaymentLinkParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.GetPaymentLinkResponse>} - Success response
     * @name getPaymentLink
     * @summary: Get payment link.
     * @description: Retrieve a link for making payments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentLink/).
     */
    getPaymentLink({ paymentLinkId, requestHeaders }?: PaymentPlatformApplicationValidator.GetPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.GetPaymentLinkResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPaymentLinkIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.GetPaymentLinkResponse>} - Success response
     * @name getPaymentLinkId
     * @summary: Get payment link
     * @description: Use this API to get a payment link - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentLinkId/).
     */
    getPaymentLinkId({ id, paymentLinkId, requestHeaders }?: PaymentPlatformApplicationValidator.GetPaymentLinkIdParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.GetPaymentLinkResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPaymentModeControlRoutesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PlatformOfflineAdvanceResponse>}
     *   - Success response
     *
     * @name getPaymentModeControlRoutes
     * @summary: Get details for the given offline / advance payment mode for merchant
     * @description: Use this API to get details for the given offline / advance payment mode for merchant - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentModeControlRoutes/).
     */
    getPaymentModeControlRoutes({ mode, requestHeaders }?: PaymentPlatformApplicationValidator.GetPaymentModeControlRoutesParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PlatformOfflineAdvanceResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPaymentModeCustomConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentCustomConfigResponseSchema>}
     *   - Success response
     *
     * @name getPaymentModeCustomConfig
     * @summary: Get details of advance payment custom configurations of merchant
     * @description: Use this API to Get details of advance payment custom configurations of merchant - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentModeCustomConfig/).
     */
    getPaymentModeCustomConfig({ mode, requestHeaders }?: PaymentPlatformApplicationValidator.GetPaymentModeCustomConfigParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentCustomConfigResponseSchema>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPaymentModeRoutesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentOptionsResponse>} - Success response
     * @name getPaymentModeRoutes
     * @summary: Get payment mode routes.
     * @description: Retrieve routes and options for payment modes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentModeRoutes/).
     */
    getPaymentModeRoutes({ refresh, amount, requestType, orderId, shipmentId, requestHeaders }?: PaymentPlatformApplicationValidator.GetPaymentModeRoutesParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentOptionsResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPaymentModeSequencingParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentModeResponse>} - Success response
     * @name getPaymentModeSequencing
     * @summary: Get details for the given  payment mode for merchant
     * @description: Use this API to get details for the given payment mode for merchant - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentModeSequencing/).
     */
    getPaymentModeSequencing({ businessUnit, device, requestHeaders }?: PaymentPlatformApplicationValidator.GetPaymentModeSequencingParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentModeResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPaymentSessionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.GetPaymentSessionResponse>} -
     *   Success response
     * @name getPaymentSession
     * @summary: Get payment session data
     * @description: Get payment session data - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentSession/).
     */
    getPaymentSession({ gid, requestHeaders }?: PaymentPlatformApplicationValidator.GetPaymentSessionParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.GetPaymentSessionResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPennyDropValidationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PennyDropValidationResponse>} -
     *   Success response
     * @name getPennyDropValidation
     * @summary: API to get pennydrop validation flag
     * @description: API to get pennydrop validation flag - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPennyDropValidation/).
     */
    getPennyDropValidation({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentPlatformModel.PennyDropValidationResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPosPaymentModeRoutesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentModeRouteResponse>} -
     *   Success response
     * @name getPosPaymentModeRoutes
     * @summary: Get POS payment mode routes.
     * @description: Retrieve payment options and aggregator for point-of-sale (POS). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPosPaymentModeRoutes/).
     */
    getPosPaymentModeRoutes({ amount, pincode, orderType, cartId, checkoutMode, refresh, orderId, cardReference, userDetails, displaySplit, advancePayment, shipmentId, requestHeaders, }?: PaymentPlatformApplicationValidator.GetPosPaymentModeRoutesParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentModeRouteResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetRefundOptionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.ShipmentRefundResponse>} - Success response
     * @name getRefundOptions
     * @summary: Refund Options Handler to fetch available refund options.
     * @description: Refund Options Handler to fetch available refund options - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getRefundOptions/).
     */
    getRefundOptions({ configuration, productType, amount, optinAppId, optinCompanyId, orderType, requestHeaders, }?: PaymentPlatformApplicationValidator.GetRefundOptionsParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.ShipmentRefundResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetSelectedRefundOptionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.SelectedRefundOptionResponse>} -
     *   Success response
     * @name getSelectedRefundOption
     * @summary: API to get the selected refund options for shipment id
     * @description: API to get the selected refund options for shipment id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getSelectedRefundOption/).
     */
    getSelectedRefundOption({ shipmentId, orderId, requestHeaders }?: PaymentPlatformApplicationValidator.GetSelectedRefundOptionParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.SelectedRefundOptionResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetUserBeneficiariesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.OrderBeneficiaryResponse>} -
     *   Success response
     * @name getUserBeneficiaries
     * @summary: Get user beneficiaries.
     * @description: Retrieve beneficiaries associated with a user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getUserBeneficiaries/).
     */
    getUserBeneficiaries({ orderId, requestHeaders }?: PaymentPlatformApplicationValidator.GetUserBeneficiariesParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.OrderBeneficiaryResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetUserBeneficiariesDetailV2Param} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.OrderBeneficiaryResponseSchemaV2>}
     *   - Success response
     *
     * @name getUserBeneficiariesDetailV2
     * @summary: Lists the beneficiary of a refund
     * @description: Use this API to get the details of all active beneficiary added by a user for refund. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getUserBeneficiariesDetailV2/).
     */
    getUserBeneficiariesDetailV2({ orderId, shipmentId, mop, requestHeaders }?: PaymentPlatformApplicationValidator.GetUserBeneficiariesDetailV2Param, { responseHeaders }?: object): Promise<PaymentPlatformModel.OrderBeneficiaryResponseSchemaV2>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetUserCODlimitRoutesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.GetUserCODLimitResponse>} - Success response
     * @name getUserCODlimitRoutes
     * @summary: Get user COD limit routes.
     * @description: Retrieve routes and limits for user cash-on-delivery (COD) transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getUserCODlimitRoutes/).
     */
    getUserCODlimitRoutes({ merchantUserId, mobileNo, requestHeaders }?: PaymentPlatformApplicationValidator.GetUserCODlimitRoutesParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.GetUserCODLimitResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetUserOrderBeneficiariesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.OrderBeneficiaryResponse>} -
     *   Success response
     * @name getUserOrderBeneficiaries
     * @summary: Get user order beneficiaries.
     * @description: Retrieve beneficiaries associated with a user orders. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getUserOrderBeneficiaries/).
     */
    getUserOrderBeneficiaries({ orderId, requestHeaders }?: PaymentPlatformApplicationValidator.GetUserOrderBeneficiariesParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.OrderBeneficiaryResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.InitialisePaymentParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentInitializationResponse>} -
     *   Success response
     * @name initialisePayment
     * @summary: Initialize payment.
     * @description: Start the payment initiation process for UPI and QR code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/initialisePayment/).
     */
    initialisePayment({ body, requestHeaders }?: PaymentPlatformApplicationValidator.InitialisePaymentParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentInitializationResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.MerchantOnBoardingParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.MerchantOnBoardingResponse>} -
     *   Success response
     * @name merchantOnBoarding
     * @summary: Merchant onboarding for BNPL.
     * @description: Initiate the onboarding process for a merchant. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/merchantOnBoarding/).
     */
    merchantOnBoarding({ body, requestHeaders }?: PaymentPlatformApplicationValidator.MerchantOnBoardingParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.MerchantOnBoardingResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.OauthGetUrlParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.GetOauthUrlResponse>} - Success response
     * @name oauthGetUrl
     * @summary: Get OAuth URL.
     * @description: Retrieve an OAuth URL for PG API authentication. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/oauthGetUrl/).
     */
    oauthGetUrl({ aggregator, successRedirectUrl, failureRedirectUrl, requestHeaders }?: PaymentPlatformApplicationValidator.OauthGetUrlParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.GetOauthUrlResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.PatchMerchantAggregatorPaymentModeDetailsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PlatformPaymentModeResponse>} -
     *   Success response
     * @name patchMerchantAggregatorPaymentModeDetails
     * @summary: Patch merchant aggregator payment mode details.
     * @description: swagger not found. so operationId not found - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/patchMerchantAggregatorPaymentModeDetails/).
     */
    patchMerchantAggregatorPaymentModeDetails({ aggregatorId, body, requestHeaders }?: PaymentPlatformApplicationValidator.PatchMerchantAggregatorPaymentModeDetailsParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PlatformPaymentModeResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.PatchMerchantPaymentOptionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PatchPlatformOnlineOfflinePaymentResponse>}
     *   - Success response
     *
     * @name patchMerchantPaymentOption
     * @summary: Patch merchant payment option
     * @description: To updated online payment as active/inactive or offline payment configuration like cod charges, anonymous cod allowed flags. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/patchMerchantPaymentOption/).
     */
    patchMerchantPaymentOption({ body, requestHeaders }?: PaymentPlatformApplicationValidator.PatchMerchantPaymentOptionParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PatchPlatformOnlineOfflinePaymentResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.PatchMerchantPaymentOptionVersionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.AggregatorConfigResponse>} -
     *   Success response
     * @name patchMerchantPaymentOptionVersion
     * @summary: Update app version required for Payment Mode.
     * @description: This api provide wrote operations on the app version required for Payment Mode or sub payment mode for an Aggregator. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/patchMerchantPaymentOptionVersion/).
     */
    patchMerchantPaymentOptionVersion({ aggregatorId, body, requestHeaders }?: PaymentPlatformApplicationValidator.PatchMerchantPaymentOptionVersionParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.AggregatorConfigResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.PatchPaymentModeSequencingParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.AggregatorConfigResponse>} -
     *   Success response
     * @name patchPaymentModeSequencing
     * @summary: Update offline payment mode details for the merchant
     * @description: Use this API to update  payment mode sequence details for the merchant - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/patchPaymentModeSequencing/).
     */
    patchPaymentModeSequencing({ body, requestHeaders }?: PaymentPlatformApplicationValidator.PatchPaymentModeSequencingParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.AggregatorConfigResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.PaymentStatusBulkParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentStatusBulkHandlerResponse>}
     *   - Success response
     *
     * @name paymentStatusBulk
     * @summary: Payment status bulk.
     * @description: Retrieve the status of multiple payments in bulk. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/paymentStatusBulk/).
     */
    paymentStatusBulk({ body, requestHeaders }?: PaymentPlatformApplicationValidator.PaymentStatusBulkParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentStatusBulkHandlerResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.PollingPaymentLinkParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PollingPaymentLinkResponse>} -
     *   Success response
     * @name pollingPaymentLink
     * @summary: Used for polling if payment successful or not
     * @description: Use this API to poll if payment through payment was successful or not - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/pollingPaymentLink/).
     */
    pollingPaymentLink({ paymentLinkId, requestHeaders }?: PaymentPlatformApplicationValidator.PollingPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PollingPaymentLinkResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.RepaymentDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.RepaymentResponse>} - Success response
     * @name repaymentDetails
     * @summary: Repayment details for BNPL.
     * @description: Retrieve information about repayment transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/repaymentDetails/).
     */
    repaymentDetails({ body, requestHeaders }?: PaymentPlatformApplicationValidator.RepaymentDetailsParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.RepaymentResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.ResendOrCancelPaymentParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.ResendOrCancelPaymentResponse>} -
     *   Success response
     * @name resendOrCancelPayment
     * @summary: Resend or cancel payment.
     * @description: Resend or cancel a payment link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/resendOrCancelPayment/).
     */
    resendOrCancelPayment({ body, requestHeaders }?: PaymentPlatformApplicationValidator.ResendOrCancelPaymentParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.ResendOrCancelPaymentResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.ResendPaymentLinkParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.ResendPaymentLinkResponse>} -
     *   Success response
     * @name resendPaymentLink
     * @summary: Resend payment link
     * @description: Use this API to resend a payment link for the customer - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/resendPaymentLink/).
     */
    resendPaymentLink({ body, requestHeaders }?: PaymentPlatformApplicationValidator.ResendPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.ResendPaymentLinkResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.RevokeOauthTokenParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.RevokeOAuthToken>} - Success response
     * @name revokeOauthToken
     * @summary: Revoke OAuth token.
     * @description: Invalidate an OAuth token. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/revokeOauthToken/).
     */
    revokeOauthToken({ aggregator, requestHeaders }?: PaymentPlatformApplicationValidator.RevokeOauthTokenParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.RevokeOAuthToken>;
    /**
     * @param {PaymentPlatformApplicationValidator.SaveBrandPaymentGatewayConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentGatewayToBeReviewed>} -
     *   Success response
     * @name saveBrandPaymentGatewayConfig
     * @summary: Save brand payment gateway config.
     * @description: Store and update configuration settings for brand payment gateways. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/saveBrandPaymentGatewayConfig/).
     */
    saveBrandPaymentGatewayConfig({ body, requestHeaders }?: PaymentPlatformApplicationValidator.SaveBrandPaymentGatewayConfigParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentGatewayToBeReviewed>;
    /**
     * @param {PaymentPlatformApplicationValidator.SetMerchantModeControlRoutesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PlatformOfflineAdvanceResponse>}
     *   - Success response
     *
     * @name setMerchantModeControlRoutes
     * @summary: Update offline payment mode details for the merchant
     * @description: Use this API to update given offline / advance payment mode details for the merchant - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/setMerchantModeControlRoutes/).
     */
    setMerchantModeControlRoutes({ mode, body, requestHeaders }?: PaymentPlatformApplicationValidator.SetMerchantModeControlRoutesParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PlatformOfflineAdvanceResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.SetPaymentModeCustomConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentCustomConfigResponseSchema>}
     *   - Success response
     *
     * @name setPaymentModeCustomConfig
     * @summary: Update details of advance payment custom configurations of merchant
     * @description: Use this API to update given details of advance payment custom configurations of merchant - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/setPaymentModeCustomConfig/).
     */
    setPaymentModeCustomConfig({ mode, body, requestHeaders }?: PaymentPlatformApplicationValidator.SetPaymentModeCustomConfigParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentCustomConfigResponseSchema>;
    /**
     * @param {PaymentPlatformApplicationValidator.SetRefundOptionforShipmentParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.ShipmentRefundResponse>} - Success response
     * @name setRefundOptionforShipment
     * @summary: Save refund source against shipment and order
     * @description: Save refund source against shipment and order - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/setRefundOptionforShipment/).
     */
    setRefundOptionforShipment({ body, requestHeaders }?: PaymentPlatformApplicationValidator.SetRefundOptionforShipmentParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.ShipmentRefundResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.SetUserCODlimitRoutesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.GetUserCODLimitResponse>} - Success response
     * @name setUserCODlimitRoutes
     * @summary: Set user COD limit routes.
     * @description: Configure routes and limits for user COD transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/setUserCODlimitRoutes/).
     */
    setUserCODlimitRoutes({ body, requestHeaders }?: PaymentPlatformApplicationValidator.SetUserCODlimitRoutesParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.GetUserCODLimitResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.UpdateAggregatorCredentialParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PatchAggregatorCredentialResponse>}
     *   - Success response
     *
     * @name updateAggregatorCredential
     * @summary: Update Aggregator Credentials
     * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updateAggregatorCredential/).
     */
    updateAggregatorCredential({ body, requestHeaders }?: PaymentPlatformApplicationValidator.UpdateAggregatorCredentialParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PatchAggregatorCredentialResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.UpdateDefaultBeneficiaryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.SetDefaultBeneficiaryResponse>} -
     *   Success response
     * @name updateDefaultBeneficiary
     * @summary: Set a default beneficiary for a refund
     * @description: Use this API to set a default beneficiary for getting a refund. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updateDefaultBeneficiary/).
     */
    updateDefaultBeneficiary({ body, requestHeaders }?: PaymentPlatformApplicationValidator.UpdateDefaultBeneficiaryParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.SetDefaultBeneficiaryResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.UpdateEdcDeviceParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.EdcDeviceAddResponse>} - Success response
     * @name updateEdcDevice
     * @summary: Update EDC device.
     * @description: Modify the settings and details of an EDC device. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updateEdcDevice/).
     */
    updateEdcDevice({ body, requestHeaders }?: PaymentPlatformApplicationValidator.UpdateEdcDeviceParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.EdcDeviceAddResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.UpdateMerchantRefundPriorityParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.RefundPriorityResponseSerializer>}
     *   - Success response
     *
     * @name updateMerchantRefundPriority
     * @summary: API to update merchant refund priority
     * @description: API to update merchant refund priority - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updateMerchantRefundPriority/).
     */
    updateMerchantRefundPriority({ configType, body, requestHeaders }?: PaymentPlatformApplicationValidator.UpdateMerchantRefundPriorityParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.RefundPriorityResponseSerializer>;
    /**
     * @param {PaymentPlatformApplicationValidator.UpdatePaymentSessionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentSessionResponseSerializer>}
     *   - Success response
     *
     * @name updatePaymentSession
     * @summary: Update payment session.
     * @description: Modify the details of a payment session. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updatePaymentSession/).
     */
    updatePaymentSession({ gid, body, requestHeaders }?: PaymentPlatformApplicationValidator.UpdatePaymentSessionParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentSessionResponseSerializer>;
    /**
     * @param {PaymentPlatformApplicationValidator.UpdatePennyDropValidationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PennyDropValidationResponse>} -
     *   Success response
     * @name updatePennyDropValidation
     * @summary: API to update penny drop validation for application ID
     * @description: API to update penny drop validation for application ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updatePennyDropValidation/).
     */
    updatePennyDropValidation({ body, requestHeaders }?: PaymentPlatformApplicationValidator.UpdatePennyDropValidationParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PennyDropValidationResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.UpdateRefundSessionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.RefundSessionResponseSerializer>}
     *   - Success response
     *
     * @name updateRefundSession
     * @summary: Update refund session.
     * @description: Modify the details of a refund session. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updateRefundSession/).
     */
    updateRefundSession({ gid, requestId, body, requestHeaders }?: PaymentPlatformApplicationValidator.UpdateRefundSessionParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.RefundSessionResponseSerializer>;
    /**
     * @param {PaymentPlatformApplicationValidator.ValidateBeneficiaryAddressParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.ValidateValidateAddressResponse>}
     *   - Success response
     *
     * @name validateBeneficiaryAddress
     * @summary: API to Validate UPI ID and IFSC code
     * @description: API to Validate UPI ID and IFSC code - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/validateBeneficiaryAddress/).
     */
    validateBeneficiaryAddress({ body, requestHeaders }?: PaymentPlatformApplicationValidator.ValidateBeneficiaryAddressParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.ValidateValidateAddressResponse>;
    /**
     * @param {PaymentPlatformApplicationValidator.VerifyCustomerForPaymentParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.ValidateCustomerResponse>} -
     *   Success response
     * @name verifyCustomerForPayment
     * @summary: Verify customer for payment.
     * @description: Retrieve a link for making payments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/verifyCustomerForPayment/).
     */
    verifyCustomerForPayment({ body, requestHeaders }?: PaymentPlatformApplicationValidator.VerifyCustomerForPaymentParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.ValidateCustomerResponse>;
}
import PaymentPlatformApplicationValidator = require("sdk/output/javascript/code/sdk/platform/Payment/PaymentPlatformApplicationValidator");
import PaymentPlatformModel = require("sdk/output/javascript/code/sdk/platform/Payment/PaymentPlatformModel");
