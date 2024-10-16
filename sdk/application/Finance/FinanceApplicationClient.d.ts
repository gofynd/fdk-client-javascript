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
     * @param {FinanceApplicationValidator.CustomerCreditBalanceParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FinanceApplicationModel.CustomerCreditBalanceResponseSchema>}
     *   - Success response
     *
     * @name customerCreditBalance
     * @summary: This API will provide customer's credit balance against phone number or email and seller*affiliate id
     * @description: This API will provide customer's credit balance against phone number or email and seller*affiliate id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/finance/customerCreditBalance/).
     */
    customerCreditBalance({ body, requestHeaders }?: FinanceApplicationValidator.CustomerCreditBalanceParam, { responseHeaders }?: object): Promise<FinanceApplicationModel.CustomerCreditBalanceResponseSchema>;
    /**
     * @param {FinanceApplicationValidator.LockUnlockCreditNoteParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FinanceApplicationModel.LockUnlockResponseSchema>} -
     *   Success response
     * @name lockUnlockCreditNote
     * @summary: Lock or Unlock requested credit note.
     * @description: Used to lock or unlock requested credit note. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/finance/lockUnlockCreditNote/).
     */
    lockUnlockCreditNote({ body, requestHeaders }?: FinanceApplicationValidator.LockUnlockCreditNoteParam, { responseHeaders }?: object): Promise<FinanceApplicationModel.LockUnlockResponseSchema>;
}
import FinanceApplicationValidator = require("./FinanceApplicationValidator");
import FinanceApplicationModel = require("./FinanceApplicationModel");
