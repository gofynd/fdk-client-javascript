export = Finance;
declare class Finance {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        customerCreditBalance: string;
        lockUnlockCreditNote: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CustomerCreditBalanceResponseSchema>} - Success response
     * @name customerCreditBalance
     * @summary: This API will provide customer's credit balance against phone number or email and seller*affiliate id
     * @description: This API will provide customer's credit balance against phone number or email and seller*affiliate id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/finance/customerCreditBalance/).
     */
    customerCreditBalance({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CustomerCreditBalanceResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LockUnlockResponseSchema>} - Success response
     * @name lockUnlockCreditNote
     * @summary: Lock or Unlock requested credit note.
     * @description: Used to lock or unlock requested credit note. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/finance/lockUnlockCreditNote/).
     */
    lockUnlockCreditNote({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<LockUnlockResponseSchema>;
}
