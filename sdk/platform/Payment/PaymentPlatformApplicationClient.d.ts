export = Payment;
declare class Payment {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {PaymentPlatformApplicationValidator.AddEdcDeviceParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.EdcDeviceUpdateDetails>} - Success response
     * @name addEdcDevice
     * @summary: Create an EDC device
     * @description: Registration and addition of a new EDC device to the system - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/addEdcDevice/).
     */
    addEdcDevice({ terminalUniqueIdentifier, body, requestHeaders }?: PaymentPlatformApplicationValidator.AddEdcDeviceParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.EdcDeviceUpdateDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.AddRefundBankAccountParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.RefundAccountDetails>} - Success response
     * @name addRefundBankAccount
     * @summary: Save bank details for cancelled/returned order
     * @description: save bank details for returned/cancelled order to refund amount in his account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/addRefundBankAccount/).
     */
    addRefundBankAccount({ body, requestHeaders }?: PaymentPlatformApplicationValidator.AddRefundBankAccountParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.RefundAccountDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.AddRefundBankAccountUsingOTPParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.RefundAccountDetails>} - Success response
     * @name addRefundBankAccountUsingOTP
     * @summary: Create refund account
     * @description: The addition of a bank account specifically for refunds, employing OTP verification for security - Payment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/addRefundBankAccountUsingOTP/).
     */
    addRefundBankAccountUsingOTP({ body, requestHeaders }?: PaymentPlatformApplicationValidator.AddRefundBankAccountUsingOTPParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.RefundAccountDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.CancelPaymentLinkParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.CancelPaymentLinkDetails>} -
     *   Success response
     * @name cancelPaymentLink
     * @summary: Cancel payment link.
     * @description: Deactivate and cancel a payment link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/cancelPaymentLink/).
     */
    cancelPaymentLink({ body, requestHeaders }?: PaymentPlatformApplicationValidator.CancelPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.CancelPaymentLinkDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.CheckAndUpdatePaymentStatusParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentStatusUpdateDetails>} -
     *   Success response
     * @name checkAndUpdatePaymentStatus
     * @summary: Check and update payment status.
     * @description: Polling process to confirm the payment status. It periodically checks and updates the current status of a payment, ensuring timely and accurate confirmation of payment transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/checkAndUpdatePaymentStatus/).
     */
    checkAndUpdatePaymentStatus({ body, requestHeaders }?: PaymentPlatformApplicationValidator.CheckAndUpdatePaymentStatusParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentStatusUpdateDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.ConfirmPaymentParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentConfirmationDetails>} -
     *   Success response
     * @name confirmPayment
     * @summary: Payment confirmation
     * @description: Authentication and confirmation of a payment.It requires details such as the order ID and payment methods in the request body to authenticate and confirm the payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/confirmPayment/).
     */
    confirmPayment({ body, requestHeaders }?: PaymentPlatformApplicationValidator.ConfirmPaymentParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentConfirmationDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.CopyConfigAggPaymentModesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.AggregatorConfigDetails>} - Success response
     * @name copyConfigAggPaymentModes
     * @summary: Copy aggregator config of onc device to another.
     * @description: Copy aggregator config like Wallet, NB, paylater from one device of an aggregator like razorpay to another device. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/copyConfigAggPaymentModes/).
     */
    copyConfigAggPaymentModes({ aggregatorId, body, requestHeaders }?: PaymentPlatformApplicationValidator.CopyConfigAggPaymentModesParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.AggregatorConfigDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.CopyConfigPaymentModesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.AggregatorConfigDetails>} - Success response
     * @name copyConfigPaymentModes
     * @summary: Copy payment mode config of onc device to another.
     * @description: Copy aggregator config like Wallet, NB, paylater from one device of an aggregator like razorpay to another device. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/copyConfigPaymentModes/).
     */
    copyConfigPaymentModes({ body, requestHeaders }?: PaymentPlatformApplicationValidator.CopyConfigPaymentModesParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.AggregatorConfigDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.CreateMerchantRefundPriorityParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.RefundPriorityDetails>} - Success response
     * @name createMerchantRefundPriority
     * @summary: Create merchant refund priority
     * @description: Create merchant refund priority configurations, with the provided refund sources priority details, and return the status of the operation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/createMerchantRefundPriority/).
     */
    createMerchantRefundPriority({ configType, businessUnit, body, requestHeaders }?: PaymentPlatformApplicationValidator.CreateMerchantRefundPriorityParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.RefundPriorityDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.CreatePaymentLinkParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.CreatePaymentLinkDetails>} -
     *   Success response
     * @name createPaymentLink
     * @summary: Create payment link.
     * @description: Generate a payment link for accepting payments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/createPaymentLink/).
     */
    createPaymentLink({ body, requestHeaders }?: PaymentPlatformApplicationValidator.CreatePaymentLinkParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.CreatePaymentLinkDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.CreatePaymentOrderParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentOrderDetails>} - Success response
     * @name createPaymentOrder
     * @summary: Create Order
     * @description: Create an order and payment on the aggregator side - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/createPaymentOrder/).
     */
    createPaymentOrder({ body, requestHeaders }?: PaymentPlatformApplicationValidator.CreatePaymentOrderParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentOrderDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.DeleteBeneficiaryDetailsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.DeleteRefundAccountDetails>} -
     *   Success response
     * @name deleteBeneficiaryDetails
     * @summary: Delete saved beneficiary details of customers
     * @description: Delete the saved beneficiary details provided beneficiary Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/deleteBeneficiaryDetails/).
     */
    deleteBeneficiaryDetails({ body, requestHeaders }?: PaymentPlatformApplicationValidator.DeleteBeneficiaryDetailsParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.DeleteRefundAccountDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.EdcAggregatorsAndModelListParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.EdcAggregatorAndModelListDetails>}
     *   - Success response
     *
     * @name edcAggregatorsAndModelList
     * @summary: EDC aggregators and model list.
     * @description: Retrieve a list of EDC (Electronic Data Capture) aggregators and models. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/edcAggregatorsAndModelList/).
     */
    edcAggregatorsAndModelList({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentPlatformModel.EdcAggregatorAndModelListDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.EdcDeviceListParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.EdcDeviceListDetails>} - Success response
     * @name edcDeviceList
     * @summary: List EDC devices
     * @description: Retrieves a list of available Electronic Data Capture (EDC) devices. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/edcDeviceList/).
     */
    edcDeviceList({ pageNo, pageSize, isActive, storeId, deviceTag, requestHeaders }?: PaymentPlatformApplicationValidator.EdcDeviceListParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.EdcDeviceListDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.EdcDeviceStatsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.EdcDeviceStatsDetails>} - Success response
     * @name edcDeviceStats
     * @summary: EDC device stats.
     * @description: Information about EDC (Electronic Data Capture) devices linked to a specific application within a company. It provides statistics such as the count of active and inactive devices. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/edcDeviceStats/).
     */
    edcDeviceStats({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentPlatformModel.EdcDeviceStatsDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetAggregatorCredentialParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.AggregatorCredentialRes>} - Success response
     * @name getAggregatorCredential
     * @summary: API to get merchant refund priority
     * @description: API to get merchant refund priority - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getAggregatorCredential/).
     */
    getAggregatorCredential({ aggregator, configType, requestHeaders }?: PaymentPlatformApplicationValidator.GetAggregatorCredentialParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.AggregatorCredentialRes>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetAggregatorCredentialHistoryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.AggregatorHistoryDetails>} -
     *   Success response
     * @name getAggregatorCredentialHistory
     * @summary: Get merchant refund priority
     * @description: Get merchant refund priority. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getAggregatorCredentialHistory/).
     */
    getAggregatorCredentialHistory({ aggregator, configType, requestHeaders }?: PaymentPlatformApplicationValidator.GetAggregatorCredentialHistoryParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.AggregatorHistoryDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetBankAccountDetailsOpenAPIParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.GetRefundAccountDetails>} - Success response
     * @name getBankAccountDetailsOpenAPI
     * @summary: Get bank account details
     * @description: Retrieve bank account information - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getBankAccountDetailsOpenAPI/).
     */
    getBankAccountDetailsOpenAPI({ orderId, requestHash, requestHeaders }?: PaymentPlatformApplicationValidator.GetBankAccountDetailsOpenAPIParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.GetRefundAccountDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetBrandPaymentGatewayConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentGatewayConfigDetails>} -
     *   Success response
     * @name getBrandPaymentGatewayConfig
     * @summary: Get secrets for brand payment gateway
     * @description: Retrieve configuration settings like key, secret, webhook url, merchant salt for brand payment gateways. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getBrandPaymentGatewayConfig/).
     */
    getBrandPaymentGatewayConfig({ aggregator, configType, requestHeaders }?: PaymentPlatformApplicationValidator.GetBrandPaymentGatewayConfigParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentGatewayConfigDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetDevicesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.GetDevice>} - Success response
     * @name getDevices
     * @summary: Get all business units and it's devices.
     * @description: Get all business units and it's devices. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getDevices/).
     */
    getDevices({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentPlatformModel.GetDevice>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetEdcDeviceParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.EdcDeviceDetails>} - Success response
     * @name getEdcDevice
     * @summary: Get an EDC device
     * @description: Retrieve comprehensive details regarding an Electronic Data Capture (EDC) device associated with a particular terminal unique identifier within a company's application.Upon success, it returns the detailed information of the EDC device, including terminal serial number, EDC device serial number, merchant store POS code, store ID, aggregator ID and name, device tag, activation status, and EDC model. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getEdcDevice/).
     */
    getEdcDevice({ terminalUniqueIdentifier, requestHeaders }?: PaymentPlatformApplicationValidator.GetEdcDeviceParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.EdcDeviceDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetMerchantAggregatorAppVersionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.AggregatorVersionDetails>} -
     *   Success response
     * @name getMerchantAggregatorAppVersion
     * @summary: Get app version for  Aggregator
     * @description: Get app version required for Payment Mode or sub payment mode for an Aggregator.if merchant required any PG payment mode after certain version for mobile app. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getMerchantAggregatorAppVersion/).
     */
    getMerchantAggregatorAppVersion({ aggregatorId, businessUnit, device, paymentModeId, subPaymentMode, requestHeaders, }?: PaymentPlatformApplicationValidator.GetMerchantAggregatorAppVersionParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.AggregatorVersionDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetMerchantAggregatorPaymentModeDetailsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.AggregatorPlatformPaymentModeDetails>}
     *   - Success response
     *
     * @name getMerchantAggregatorPaymentModeDetails
     * @summary: Get merchant aggregator payment mode details.
     * @description: swagger not found. so operationId not found - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getMerchantAggregatorPaymentModeDetails/).
     */
    getMerchantAggregatorPaymentModeDetails({ aggregatorId, businessUnit, device, requestHeaders }?: PaymentPlatformApplicationValidator.GetMerchantAggregatorPaymentModeDetailsParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.AggregatorPlatformPaymentModeDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetMerchantPaymentOptionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PlatformOnlineOfflinePaymentDetails>}
     *   - Success response
     *
     * @name getMerchantPaymentOption
     * @summary: Get merchant payment option
     * @description: Retrieve available payment gateways and offline payment mode details for a merchant by providing company ID and application ID, returning a list of active payment gateways and their configurations, including online and offline options. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getMerchantPaymentOption/).
     */
    getMerchantPaymentOption({ paymentOptionType, requestHeaders }?: PaymentPlatformApplicationValidator.GetMerchantPaymentOptionParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PlatformOnlineOfflinePaymentDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetMerchantRefundPriorityParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.RefundPriorityDetails>} - Success response
     * @name getMerchantRefundPriority
     * @summary: Get merchant refund priority
     * @description: Retrieve merchant refund priority configurations, returning the status of the update and the refund sources priority with their descriptions and priorities. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getMerchantRefundPriority/).
     */
    getMerchantRefundPriority({ configType, businessUnit, requestHeaders }?: PaymentPlatformApplicationValidator.GetMerchantRefundPriorityParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.RefundPriorityDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPGConfigAggregatorsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.AggregatorConfigDetails>} - Success response
     * @name getPGConfigAggregators
     * @summary: Get merchant aggregator payment mode
     * @description: Get payment gateway and it's payment mode and it's sub payment mode details like for razorpay update active/inactive payment modes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPGConfigAggregators/).
     */
    getPGConfigAggregators({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentPlatformModel.AggregatorConfigDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPaymentCodeOptionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.GetPaymentCodeDetails>} - Success response
     * @name getPaymentCodeOption
     * @summary: Get payment mode codes
     * @description: Enables users to retrieve options for payment codes.users can access information such as payment method names, networks, and associated codes, facilitating seamless integration and management of payment modes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentCodeOption/).
     */
    getPaymentCodeOption({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentPlatformModel.GetPaymentCodeDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPaymentLinkParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.GetPaymentLinkDetails>} - Success response
     * @name getPaymentLink
     * @summary: Get payment link
     * @description: Retrieve a payment link for making payments - Payment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentLink/).
     */
    getPaymentLink({ paymentLinkId, requestHeaders }?: PaymentPlatformApplicationValidator.GetPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.GetPaymentLinkDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPaymentLinkIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.GetPaymentLinkDetails>} - Success response
     * @name getPaymentLinkId
     * @summary: Get payment link
     * @description: get a payment link - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentLinkId/).
     */
    getPaymentLinkId({ id, paymentLinkId, requestHeaders }?: PaymentPlatformApplicationValidator.GetPaymentLinkIdParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.GetPaymentLinkDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPaymentModeControlRoutesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PlatformOfflineAdvanceDetails>} -
     *   Success response
     * @name getPaymentModeControlRoutes
     * @summary: Get offline/advance payment mode
     * @description: Get details of offline / advance payment mode like for cod  offline payment mode get user level cod limit, order level cod limit, cod charge. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentModeControlRoutes/).
     */
    getPaymentModeControlRoutes({ mode, requestHeaders }?: PaymentPlatformApplicationValidator.GetPaymentModeControlRoutesParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PlatformOfflineAdvanceDetails>;
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
     * @summary: Get advance payment custom configurations
     * @description: Merchants to fetch detailed information regarding advance payment custom configurations tailored to their specific business needs. merchants can access settings such as customer restrictions, available payment modes for both pre-order and post-order transactions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentModeCustomConfig/).
     */
    getPaymentModeCustomConfig({ mode, requestHeaders }?: PaymentPlatformApplicationValidator.GetPaymentModeCustomConfigParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentCustomConfigResponseSchema>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPaymentModeRoutesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentOptionsDetails>} - Success response
     * @name getPaymentModeRoutes
     * @summary: Get payment modes
     * @description: Get available payment methods on the payment page, specifying the aggregator for each option, such as 'Netbanking powered by Juspay' and 'Card powered by Razorpay'. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentModeRoutes/).
     */
    getPaymentModeRoutes({ amount, refresh, requestType, orderId, shipmentId, requestHeaders }?: PaymentPlatformApplicationValidator.GetPaymentModeRoutesParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentOptionsDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPaymentModeSequencingParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentModeDetails>} - Success response
     * @name getPaymentModeSequencing
     * @summary: Get details for the active inactive payment modes for merchant
     * @description: get details for the given payment modes and its sequencingfor merchant - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentModeSequencing/).
     */
    getPaymentModeSequencing({ businessUnit, device, requestHeaders }?: PaymentPlatformApplicationValidator.GetPaymentModeSequencingParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentModeDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPaymentSessionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.GetPaymentSessionDetails>} -
     *   Success response
     * @name getPaymentSession
     * @summary: Get payment session
     * @description: Allows users to fetch the payment session details associated with a given order ID or transaction ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentSession/).
     */
    getPaymentSession({ gid, lineItem, requestHeaders }?: PaymentPlatformApplicationValidator.GetPaymentSessionParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.GetPaymentSessionDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPennyDropValidationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PennyDropValidationDetails>} -
     *   Success response
     * @name getPennyDropValidation
     * @summary: pennydrop validation
     * @description: get pennydrop validation for bank account - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPennyDropValidation/).
     */
    getPennyDropValidation({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentPlatformModel.PennyDropValidationDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetPosPaymentModeRoutesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentModeRouteDetails>} - Success response
     * @name getPosPaymentModeRoutes
     * @summary: List POS payment modes
     * @description: Retrieve payment options and aggregator for point-of-sale (POS). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPosPaymentModeRoutes/).
     */
    getPosPaymentModeRoutes({ amount, pincode, orderType, cartId, checkoutMode, refresh, orderId, cardReference, userDetails, displaySplit, advancePayment, shipmentId, requestHeaders, }?: PaymentPlatformApplicationValidator.GetPosPaymentModeRoutesParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentModeRouteDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetSelectedRefundOptionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.SelectedRefundOptionDetails>} -
     *   Success response
     * @name getSelectedRefundOption
     * @summary: get the selected refund options for shipment id
     * @description: get the selected refund options for shipment id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getSelectedRefundOption/).
     */
    getSelectedRefundOption({ shipmentId, orderId, requestHeaders }?: PaymentPlatformApplicationValidator.GetSelectedRefundOptionParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.SelectedRefundOptionDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetShipmentBeneficiaryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.ShipmentBeneficiaryDetailsRes>} -
     *   Success response
     * @name getShipmentBeneficiary
     * @summary: get beneficiary details
     * @description: get beneficiary details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getShipmentBeneficiary/).
     */
    getShipmentBeneficiary({ shipmentId, requestHeaders }?: PaymentPlatformApplicationValidator.GetShipmentBeneficiaryParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.ShipmentBeneficiaryDetailsRes>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetUserBeneficiariesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.OrderBeneficiaryFetchResults>} -
     *   Success response
     * @name getUserBeneficiaries
     * @summary: Get user beneficiaries.
     * @description: Retrieves information about beneficiaries associated with the user for processing refunds, based on the provided order ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getUserBeneficiaries/).
     */
    getUserBeneficiaries({ orderId, requestHeaders }?: PaymentPlatformApplicationValidator.GetUserBeneficiariesParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.OrderBeneficiaryFetchResults>;
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
     * @description: get the details of all active beneficiary added by a user for refund. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getUserBeneficiariesDetailV2/).
     */
    getUserBeneficiariesDetailV2({ orderId, shipmentId, mop, requestHeaders }?: PaymentPlatformApplicationValidator.GetUserBeneficiariesDetailV2Param, { responseHeaders }?: object): Promise<PaymentPlatformModel.OrderBeneficiaryResponseSchemaV2>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetUserCODlimitRoutesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.GetUserCODLimitDetails>} - Success response
     * @name getUserCODlimitRoutes
     * @summary: Get user COD.
     * @description: Retrieve user cod limt data of user i.e cod is active or not for user and remaining limit - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getUserCODlimitRoutes/).
     */
    getUserCODlimitRoutes({ merchantUserId, mobileNo, requestHeaders }?: PaymentPlatformApplicationValidator.GetUserCODlimitRoutesParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.GetUserCODLimitDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.GetUserOrderBeneficiariesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.OrderBeneficiaryFetchResults>} -
     *   Success response
     * @name getUserOrderBeneficiaries
     * @summary: Get user order beneficiaries
     * @description: Retrieve beneficiary details like bank name , ifsc code , branch name associated with a specific order for refund processing - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getUserOrderBeneficiaries/).
     */
    getUserOrderBeneficiaries({ orderId, requestHeaders }?: PaymentPlatformApplicationValidator.GetUserOrderBeneficiariesParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.OrderBeneficiaryFetchResults>;
    /**
     * @param {PaymentPlatformApplicationValidator.InitialisePaymentParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentInitializationDetails>} -
     *   Success response
     * @name initialisePayment
     * @summary: Start payment process
     * @description: Initiates the payment procedure for an order.Upon successful initiation, it returns a  details including the success status, aggregator information, payment method, status, merchant order ID aggregator order , polling URL, timeout, virtual ID, Razorpay payment ID, customer ID, and device ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/initialisePayment/).
     */
    initialisePayment({ body, requestHeaders }?: PaymentPlatformApplicationValidator.InitialisePaymentParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentInitializationDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.MerchantOnBoardingParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.MerchantOnBoardingDetails>} -
     *   Success response
     * @name merchantOnBoarding
     * @summary: Merchant onboarding for BNPL.
     * @description: Initiate the merchant onboarding process for Buy Now Pay Later (BNPL). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/merchantOnBoarding/).
     */
    merchantOnBoarding({ body, requestHeaders }?: PaymentPlatformApplicationValidator.MerchantOnBoardingParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.MerchantOnBoardingDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.OauthGetUrlParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.GetOauthUrlDetails>} - Success response
     * @name oauthGetUrl
     * @summary: Get OAuth URL.
     * @description: This has been used when merchant is setup their razorpay payment gateway, they will redirect to razorpay site after submitting all their secrets for authetication. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/oauthGetUrl/).
     */
    oauthGetUrl({ aggregator, successRedirectUrl, failureRedirectUrl, requestHeaders }?: PaymentPlatformApplicationValidator.OauthGetUrlParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.GetOauthUrlDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.PatchMerchantAggregatorPaymentModeDetailsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PlatformPaymentModeDetails>} -
     *   Success response
     * @name patchMerchantAggregatorPaymentModeDetails
     * @summary: Update merchant aggregator payment mode
     * @description: update payment gateway and it's payment mode and it's sub payment mode details like for razorpay update active/inactive payment modes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/patchMerchantAggregatorPaymentModeDetails/).
     */
    patchMerchantAggregatorPaymentModeDetails({ aggregatorId, body, requestHeaders }?: PaymentPlatformApplicationValidator.PatchMerchantAggregatorPaymentModeDetailsParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PlatformPaymentModeDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.PatchMerchantPaymentOptionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PatchPlatformOnlineOfflinePaymentDetails>}
     *   - Success response
     *
     * @name patchMerchantPaymentOption
     * @summary: Update payment gateways and payment mode
     * @description: Updated online/offline payment as active/inactive like disable offline payment mode will disable offline payment modes on checkout page on merchant's website - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/patchMerchantPaymentOption/).
     */
    patchMerchantPaymentOption({ body, requestHeaders }?: PaymentPlatformApplicationValidator.PatchMerchantPaymentOptionParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PatchPlatformOnlineOfflinePaymentDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.PatchMerchantPaymentOptionVersionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.AggregatorConfigDetails>} - Success response
     * @name patchMerchantPaymentOptionVersion
     * @summary: Update app version required for Aggregator.
     * @description: Update app version required for Payment Mode or sub payment mode for an Aggregator.if merchant required any PG payment mode after certain version for mobile app. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/patchMerchantPaymentOptionVersion/).
     */
    patchMerchantPaymentOptionVersion({ aggregatorId, body, requestHeaders }?: PaymentPlatformApplicationValidator.PatchMerchantPaymentOptionVersionParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.AggregatorConfigDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.PatchPaymentModeSequencingParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.AggregatorConfigDetails>} - Success response
     * @name patchPaymentModeSequencing
     * @summary: Update sequencing of payment modes for the merchant
     * @description: Update sequencing of payment modes for the merchant - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/patchPaymentModeSequencing/).
     */
    patchPaymentModeSequencing({ body, requestHeaders }?: PaymentPlatformApplicationValidator.PatchPaymentModeSequencingParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.AggregatorConfigDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.PaymentStatusBulkParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentStatusBulkHandlerDetails>}
     *   - Success response
     *
     * @name paymentStatusBulk
     * @summary: Retrieve status of multiple payments in bulk
     * @description: Retrieve status of multiple payments in bulk and returns the status of each payment along with associated details such as payment ID, amount, currency, status, payment mode, and payment gateway in the response - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/paymentStatusBulk/).
     */
    paymentStatusBulk({ body, requestHeaders }?: PaymentPlatformApplicationValidator.PaymentStatusBulkParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentStatusBulkHandlerDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.PollingPaymentLinkParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PollingPaymentLinkDetails>} -
     *   Success response
     * @name pollingPaymentLink
     * @summary: Poll status of payment link
     * @description: Periodically checks the status of a payment link to monitor for any updates or changes.retrieve real-time information about the payment link's current status, such as whether it has been processed, cancelled, or expired - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/pollingPaymentLink/).
     */
    pollingPaymentLink({ paymentLinkId, requestHeaders }?: PaymentPlatformApplicationValidator.PollingPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PollingPaymentLinkDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.RepaymentDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.RepaymentDetails>} - Success response
     * @name repaymentDetails
     * @summary: Repayment details for BNPL.
     * @description: Retrieve repayment details for Buy Now Pay Later (BNPL) payment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/repaymentDetails/).
     */
    repaymentDetails({ body, requestHeaders }?: PaymentPlatformApplicationValidator.RepaymentDetailsParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.RepaymentDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.ResendOrCancelPaymentParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.ResendOrCancelPaymentDetails>} -
     *   Success response
     * @name resendOrCancelPayment
     * @summary: Resend or cancel payment.
     * @description: Enable you to perform actions related to the resending and cancellation of payment links through SMS or EMAIL. resend or cancel payment link that have been initiated but may require modification or cancellation for various reasons, ensuring flexibility and control in payment processing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/resendOrCancelPayment/).
     */
    resendOrCancelPayment({ body, requestHeaders }?: PaymentPlatformApplicationValidator.ResendOrCancelPaymentParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.ResendOrCancelPaymentDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.ResendPaymentLinkParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.ResendPaymentLinkDetails>} -
     *   Success response
     * @name resendPaymentLink
     * @summary: Resend payment link
     * @description: Resends an existing payment link to the user to complete the payment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/resendPaymentLink/).
     */
    resendPaymentLink({ body, requestHeaders }?: PaymentPlatformApplicationValidator.ResendPaymentLinkParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.ResendPaymentLinkDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.RevokeOauthTokenParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.RevokeOAuthToken>} - Success response
     * @name revokeOauthToken
     * @summary: Revoke OAuth token.
     * @description: Revoke the creds  for payment aggregator - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/revokeOauthToken/).
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
     * @description: Store and update configuration settings for brand payment gateways i.e required for payment for a payment gateway like key, secret, merchant salt. - Payment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/saveBrandPaymentGatewayConfig/).
     */
    saveBrandPaymentGatewayConfig({ body, requestHeaders }?: PaymentPlatformApplicationValidator.SaveBrandPaymentGatewayConfigParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentGatewayToBeReviewed>;
    /**
     * @param {PaymentPlatformApplicationValidator.SetMerchantModeControlRoutesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PlatformOfflineAdvanceDetails>} -
     *   Success response
     * @name setMerchantModeControlRoutes
     * @summary: Update offline payment mode
     * @description: Update details of offline / advance payment mode like for cod  offline payment mode get user level cod limit, order level cod limit, cod charge. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/setMerchantModeControlRoutes/).
     */
    setMerchantModeControlRoutes({ mode, body, requestHeaders }?: PaymentPlatformApplicationValidator.SetMerchantModeControlRoutesParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PlatformOfflineAdvanceDetails>;
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
     * @summary: Update advance payment custom configurations
     * @description: Allows merchants to modify specific details of advance payment custom configurations tailored to their business requirements. By providing the company ID, application ID, and payment mode, merchants can update settings such as minimum order value, customer restrictions, and available payment modes for both pre-order and post-order transactions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/setPaymentModeCustomConfig/).
     */
    setPaymentModeCustomConfig({ mode, body, requestHeaders }?: PaymentPlatformApplicationValidator.SetPaymentModeCustomConfigParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentCustomConfigResponseSchema>;
    /**
     * @param {PaymentPlatformApplicationValidator.SetRefundOptionforShipmentParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.ShipmentRefundRes>} - Success response
     * @name setRefundOptionforShipment
     * @summary: Save refund source against shipment and order
     * @description: Save refund source against shipment and order - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/setRefundOptionforShipment/).
     */
    setRefundOptionforShipment({ body, requestHeaders }?: PaymentPlatformApplicationValidator.SetRefundOptionforShipmentParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.ShipmentRefundRes>;
    /**
     * @param {PaymentPlatformApplicationValidator.SetUserCODlimitRoutesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.GetUserCODLimitDetails>} - Success response
     * @name setUserCODlimitRoutes
     * @summary: Set user COD
     * @description: This allows access to seller to enable disable cod of specific user - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/setUserCODlimitRoutes/).
     */
    setUserCODlimitRoutes({ body, requestHeaders }?: PaymentPlatformApplicationValidator.SetUserCODlimitRoutesParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.GetUserCODLimitDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.UpdateAggregatorCredentialParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PatchAggregatorCredentialDetails>}
     *   - Success response
     *
     * @name updateAggregatorCredential
     * @summary: Update Aggregator Credentials
     * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updateAggregatorCredential/).
     */
    updateAggregatorCredential({ body, requestHeaders }?: PaymentPlatformApplicationValidator.UpdateAggregatorCredentialParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PatchAggregatorCredentialDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.UpdateDefaultBeneficiaryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.SetDefaultBeneficiaryDetails>} -
     *   Success response
     * @name updateDefaultBeneficiary
     * @summary: Set a default beneficiary for a refund
     * @description: set a default beneficiary for getting a refund. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updateDefaultBeneficiary/).
     */
    updateDefaultBeneficiary({ body, requestHeaders }?: PaymentPlatformApplicationValidator.UpdateDefaultBeneficiaryParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.SetDefaultBeneficiaryDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.UpdateEdcDeviceParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.EdcDeviceAddDetails>} - Success response
     * @name updateEdcDevice
     * @summary: Update EDC device.
     * @description: Enables the modification of settings and details associated with an Electronic Data Capture (EDC) device linked to a specific application within a company. Upon success, it returns the updated information of the EDC device. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updateEdcDevice/).
     */
    updateEdcDevice({ body, requestHeaders }?: PaymentPlatformApplicationValidator.UpdateEdcDeviceParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.EdcDeviceAddDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.UpdateMerchantRefundPriorityParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.RefundPriorityDetails>} - Success response
     * @name updateMerchantRefundPriority
     * @summary: Update merchant refund priority
     * @description: Update merchant refund priority configurations, with the provided refund sources priority details, and return the status of the operation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updateMerchantRefundPriority/).
     */
    updateMerchantRefundPriority({ configType, businessUnit, body, requestHeaders }?: PaymentPlatformApplicationValidator.UpdateMerchantRefundPriorityParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.RefundPriorityDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.UpdatePaymentSessionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentSessionPutDetails>} -
     *   Success response
     * @name updatePaymentSession
     * @summary: Update payment session.
     * @description: Update the details of a payment session associated with a given order ID or transaction ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updatePaymentSession/).
     */
    updatePaymentSession({ gid, body, requestHeaders }?: PaymentPlatformApplicationValidator.UpdatePaymentSessionParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentSessionPutDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.UpdatePennyDropValidationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PennyDropValidationDetails>} -
     *   Success response
     * @name updatePennyDropValidation
     * @summary: update penny drop validation for application ID
     * @description: update penny drop validation for application ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updatePennyDropValidation/).
     */
    updatePennyDropValidation({ body, requestHeaders }?: PaymentPlatformApplicationValidator.UpdatePennyDropValidationParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PennyDropValidationDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.UpdateRefundSessionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.RefundSessionDetails>} - Success response
     * @name updateRefundSession
     * @summary: Update refund session
     * @description: Allows users to update the details of a refund session associated with a specific global identifier (GID) and request ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updateRefundSession/).
     */
    updateRefundSession({ gid, requestId, body, requestHeaders }?: PaymentPlatformApplicationValidator.UpdateRefundSessionParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.RefundSessionDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.ValidateBeneficiaryAddressParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.ValidateValidateAddressDetails>}
     *   - Success response
     *
     * @name validateBeneficiaryAddress
     * @summary: Validate UPI ID and IFSC code
     * @description: Validate UPI ID and IFSC code - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/validateBeneficiaryAddress/).
     */
    validateBeneficiaryAddress({ body, requestHeaders }?: PaymentPlatformApplicationValidator.ValidateBeneficiaryAddressParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.ValidateValidateAddressDetails>;
    /**
     * @param {PaymentPlatformApplicationValidator.VerifyCustomerForPaymentParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.ValidateCustomerDetails>} - Success response
     * @name verifyCustomerForPayment
     * @summary: Validate customer for paylater
     * @description: Verify whether the user is eligible for pay-later payment from the payment aggregator's side using the customer's phone number - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/verifyCustomerForPayment/).
     */
    verifyCustomerForPayment({ body, requestHeaders }?: PaymentPlatformApplicationValidator.VerifyCustomerForPaymentParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.ValidateCustomerDetails>;
}
import PaymentPlatformApplicationValidator = require("./PaymentPlatformApplicationValidator");
import PaymentPlatformModel = require("./PaymentPlatformModel");
