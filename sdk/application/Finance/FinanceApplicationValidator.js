const Joi = require("joi");

const FinanceApplicationModel = require("./FinanceApplicationModel");

/**
 * @typedef CustomerCreditBalanceParam
 * @property {FinanceApplicationModel.CustomerCreditBalanceRequestSchema} body
 */

/**
 * @typedef LockUnlockCreditNoteParam
 * @property {FinanceApplicationModel.LockUnlockRequestSchema} body
 */

class FinanceApplicationValidator {
  /** @returns {CustomerCreditBalanceParam} */
  static customerCreditBalance() {
    return Joi.object({
      body: FinanceApplicationModel.CustomerCreditBalanceRequestSchema().required(),
    }).required();
  }

  /** @returns {LockUnlockCreditNoteParam} */
  static lockUnlockCreditNote() {
    return Joi.object({
      body: FinanceApplicationModel.LockUnlockRequestSchema().required(),
    }).required();
  }
}

module.exports = FinanceApplicationValidator;
