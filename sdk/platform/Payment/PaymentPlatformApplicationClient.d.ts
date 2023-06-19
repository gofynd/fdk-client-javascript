export = Payment;
declare class Payment {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
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
     * @param {PaymentConfirmationRequest} arg.body
     * @returns {Promise<PaymentConfirmationResponse>} - Success response
     * @summary: Confirm payment after successful payment from payment gateway
     * @description: Use this API to confirm payment after payment gateway accepted payment.
     */
    confirmPayment({ body }?: {
        body: PaymentConfirmationRequest;
    }): Promise<PaymentConfirmationResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @param {string} [arg.requestHash] -
     * @returns {Promise<RefundAccountResponse>} - Success response
     * @summary: Get bank details
     * @description: Use this API to get saved bank details for returned/cancelled order using order id.
     */
    getBankAccountDetailsOpenAPI({ orderId, requestHash, }?: {
        orderId: string;
        requestHash?: string;
    }): Promise<RefundAccountResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<PaymentGatewayConfigResponse>} - Success response
     * @summary: Get All Brand Payment Gateway Config Secret
     * @description: Get All Brand Payment Gateway Config Secret
     */
    getBrandPaymentGatewayConfig({}?: any): Promise<PaymentGatewayConfigResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<GetPaymentCodeResponse>} - Success response
     * @summary: List Payment Options Method Codes
     * @description: Get all active List Payment Options Method Codes
     */
    getPaymentCodeOption({}?: any): Promise<GetPaymentCodeResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} arg.refresh -
     * @param {string} arg.requestType -
     * @returns {Promise<PaymentOptionsResponse>} - Success response
     * @summary: Get All Valid Payment Options
     * @description: Use this API to get Get All Valid Payment Options for making payment
     */
    getPaymentModeRoutes({ refresh, requestType }?: {
        refresh: boolean;
        requestType: string;
    }): Promise<PaymentOptionsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @returns {Promise<OrderBeneficiaryResponse>} - Success response
     * @summary: List User Beneficiary
     * @description: Get all active  beneficiary details added by the user for refund
     */
    getUserBeneficiaries({ orderId }?: {
        orderId: string;
    }): Promise<OrderBeneficiaryResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.merchantUserId -
     * @param {string} arg.mobileNo -
     * @returns {Promise<GetUserCODLimitResponse>} - Success response
     * @summary: Get COD limit for user
     * @description: Use this API to get user cod limit and reamining limit for the payment
     */
    getUserCODlimitRoutes({ merchantUserId, mobileNo }?: {
        merchantUserId: string;
        mobileNo: string;
    }): Promise<GetUserCODLimitResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @returns {Promise<OrderBeneficiaryResponse>} - Success response
     * @summary: List Order Beneficiary
     * @description: Get all active  beneficiary details added by the user for refund
     */
    getUserOrderBeneficiaries({ orderId }?: {
        orderId: string;
    }): Promise<OrderBeneficiaryResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {MerchantOnBoardingRequest} arg.body
     * @returns {Promise<MerchantOnBoardingResponse>} - Success response
     * @summary: API to push Ajiodhan merchant data to Gringotts system
     * @description: Use this API to push Ajiodhan merchant data to Gringotts system
     */
    merchantOnBoarding({ body }?: {
        body: MerchantOnBoardingRequest;
    }): Promise<MerchantOnBoardingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.aggregator - Aggregator
     * @param {string} [arg.successRedirectUrl] -
     * @param {string} [arg.failureRedirectUrl] -
     * @returns {Promise<GetOauthUrlResponse>} - Success response
     * @summary: API to Get the url to call for oauth
     * @description: Use this API to Get the url to call for oauth.
     */
    oauthGetUrl({ aggregator, successRedirectUrl, failureRedirectUrl, }?: {
        aggregator: string;
        successRedirectUrl?: string;
        failureRedirectUrl?: string;
    }): Promise<GetOauthUrlResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {RepaymentDetailsSerialiserPayAll} arg.body
     * @returns {Promise<RepaymentResponse>} - Success response
     * @summary: API to register repayment details
     * @description: Use this API to register any repayment record in the db and notify the aggrgator
     */
    repaymentDetails({ body }?: {
        body: RepaymentDetailsSerialiserPayAll;
    }): Promise<RepaymentResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.aggregator - Aggregator_slug
     * @returns {Promise<RevokeOAuthToken>} - Success response
     * @summary: API to Revoke oauth for razorpay partnership
     * @description: Use this API to Revoke oauth for razorpay partnership
     */
    revokeOauthToken({ aggregator }?: {
        aggregator: string;
    }): Promise<RevokeOAuthToken>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentGatewayConfigRequest} arg.body
     * @returns {Promise<PaymentGatewayToBeReviewed>} - Success response
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     */
    saveBrandPaymentGatewayConfig({ body }?: {
        body: PaymentGatewayConfigRequest;
    }): Promise<PaymentGatewayToBeReviewed>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SetCODForUserRequest} arg.body
     * @returns {Promise<SetCODOptionResponse>} - Success response
     * @summary: Set COD option for user for payment
     * @description: Use this API to set cod option as true or false for the payment
     */
    setUserCODlimitRoutes({ body }?: {
        body: SetCODForUserRequest;
    }): Promise<SetCODOptionResponse>;
}
