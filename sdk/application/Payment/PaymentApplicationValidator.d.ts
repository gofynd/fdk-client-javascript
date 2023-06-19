export = PaymentValidator;
declare class PaymentValidator {
    static addBeneficiaryDetails(): any;
    static addRefundBankAccountUsingOTP(): any;
    static attachCardToCustomer(): any;
    static checkAndUpdatePaymentStatus(): any;
    static deleteUserCard(): any;
    static enableOrDisableRefundTransferMode(): any;
    static getActiveCardAggregator(): any;
    static getActiveRefundTransferModes(): any;
    static getActiveUserCards(): any;
    static getAggregatorsConfig(): any;
    static getOrderBeneficiariesDetail(): any;
    static getPaymentModeRoutes(): any;
    static getPosPaymentModeRoutes(): any;
    static getRupifiBannerDetails(): any;
    static getUserBeneficiariesDetail(): any;
    static initialisePayment(): any;
    static updateDefaultBeneficiary(): any;
    static verifyAndChargePayment(): any;
    static verifyCustomerForPayment(): any;
    static verifyIfscCode(): any;
    static verifyOtpAndAddBeneficiaryForBank(): any;
    static verifyOtpAndAddBeneficiaryForWallet(): any;
}
