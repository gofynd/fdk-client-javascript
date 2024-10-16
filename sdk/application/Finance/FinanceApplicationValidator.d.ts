export = FinanceApplicationValidator;
/**
 * @typedef CustomerCreditBalanceParam
 * @property {FinanceApplicationModel.CustomerCreditBalanceRequestSchema} body
 */
/**
 * @typedef LockUnlockCreditNoteParam
 * @property {FinanceApplicationModel.LockUnlockRequestSchema} body
 */
declare class FinanceApplicationValidator {
    /** @returns {CustomerCreditBalanceParam} */
    static customerCreditBalance(): CustomerCreditBalanceParam;
    /** @returns {LockUnlockCreditNoteParam} */
    static lockUnlockCreditNote(): LockUnlockCreditNoteParam;
}
declare namespace FinanceApplicationValidator {
    export { CustomerCreditBalanceParam, LockUnlockCreditNoteParam };
}
type CustomerCreditBalanceParam = {
    body: FinanceApplicationModel.CustomerCreditBalanceRequestSchema;
};
type LockUnlockCreditNoteParam = {
    body: FinanceApplicationModel.LockUnlockRequestSchema;
};
import FinanceApplicationModel = require("./FinanceApplicationModel");
