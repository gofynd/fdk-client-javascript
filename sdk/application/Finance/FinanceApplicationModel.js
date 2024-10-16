const Joi = require("joi");

/**
 * @typedef CustomerCreditBalanceRequestSchema
 * @property {CustomerCreditBalanceReqData} [data]
 */

/**
 * @typedef CustomerCreditBalanceReqData
 * @property {number} seller_id - Unique identifier for the seller requesting
 *   the credit balance.
 * @property {string} affiliate_id - The unique identifier of sale channels or
 *   application as affiliate_id associated with the seller.
 * @property {string} [customer_mobile_number] - Mobile number of the customer
 *   whose credit balance is being requested.
 * @property {string} [customer_email] - Email of the customer whose credit
 *   balance is being requested.
 */

/**
 * @typedef CustomerCreditBalanceResponseSchema
 * @property {boolean} [success] - Indicates whether the credit note balance
 *   request was successful.
 * @property {CustomerCreditBalanceResData} [data]
 */

/**
 * @typedef CustomerCreditBalanceResData
 * @property {string} [customer_mobile_number] - Mobile number of the customer
 *   whose credit balance information is being returned.
 * @property {string} [customer_email] - Email of the customer whose credit
 *   balance information is being returned.
 * @property {number} [total_credited_balance] - Total amount of credit
 *   available to the customer.
 * @property {number} [total_locked_amount] - Total amount of credit balance
 *   that is currently locked and unavailable for use.
 * @property {number} [allowed_redemption_amount] - Total amount of credit
 *   balance that the customer is allowed to redeem.
 */

/**
 * @typedef Error
 * @property {number} [status] - The HTTP status code associated with the error.
 * @property {string} [reason] - A brief explanation of the error.
 * @property {boolean} [success] - Indicates whether the request was successful.
 * @property {string} [message] - A detailed message describing the error.
 * @property {string} [code] - A specific code representing the error.
 * @property {string} [exception] - The exception that caused the error.
 * @property {string} [info] - Additional information about the error.
 * @property {string} [request_id] - The unique identifier for the request that
 *   caused the error.
 * @property {string} [stack_trace] - The stack trace of the error for debugging purposes.
 * @property {ErrorMeta} [meta]
 */

/**
 * @typedef ErrorMeta
 * @property {ErrorMetaItems[]} [columns_errors] - A list of errors related to
 *   specific columns.
 */

/**
 * @typedef ErrorMetaItems
 * @property {number} [code] - The error code for the specific column error.
 * @property {string} [message] - The error message for the specific column error.
 */

/**
 * @typedef LockUnlockRequestData
 * @property {number} seller_id - The unique identifier for the seller.
 * @property {string} affiliate_id - The unique identifier of sale channels or
 *   application as affiliate_id associated with the seller.
 * @property {string} ordering_channel - The channel through which the order was placed.
 * @property {string} credit_note_number - A unique identifier for the credit note.
 * @property {number} amount - The total amount of credit originally available
 *   in the note.
 * @property {string} request_type - Type of request for which api is called.
 *   Either to lock credit note or unlock.
 * @property {string} order_id - A unique identifier of the order against which
 *   credit note is generated.
 */

/**
 * @typedef LockUnlockRequestSchema
 * @property {LockUnlockRequestData} [data]
 */

/**
 * @typedef LockUnlockResponseData
 * @property {string} [credit_note_number] - A unique identifier for the credit note.
 * @property {number} [amount] - The total amount of credit originally available
 *   in the note.
 */

/**
 * @typedef LockUnlockResponseSchema
 * @property {boolean} [success] - Indicates whether the credit note lock/unlock
 *   request was successful.
 * @property {LockUnlockResponseData} [data]
 */

class FinanceApplicationModel {
  /** @returns {CustomerCreditBalanceRequestSchema} */
  static CustomerCreditBalanceRequestSchema() {
    return Joi.object({
      data: FinanceApplicationModel.CustomerCreditBalanceReqData(),
    });
  }

  /** @returns {CustomerCreditBalanceReqData} */
  static CustomerCreditBalanceReqData() {
    return Joi.object({
      seller_id: Joi.number().required(),
      affiliate_id: Joi.string().allow("").required(),
      customer_mobile_number: Joi.string().allow(""),
      customer_email: Joi.string().allow(""),
    });
  }

  /** @returns {CustomerCreditBalanceResponseSchema} */
  static CustomerCreditBalanceResponseSchema() {
    return Joi.object({
      success: Joi.boolean(),
      data: FinanceApplicationModel.CustomerCreditBalanceResData(),
    });
  }

  /** @returns {CustomerCreditBalanceResData} */
  static CustomerCreditBalanceResData() {
    return Joi.object({
      customer_mobile_number: Joi.string().allow(""),
      customer_email: Joi.string().allow(""),
      total_credited_balance: Joi.number(),
      total_locked_amount: Joi.number(),
      allowed_redemption_amount: Joi.number(),
    });
  }

  /** @returns {Error} */
  static Error() {
    return Joi.object({
      status: Joi.number(),
      reason: Joi.string().allow(""),
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      code: Joi.string().allow("").allow(null),
      exception: Joi.string().allow(""),
      info: Joi.string().allow("").allow(null),
      request_id: Joi.string().allow("").allow(null),
      stack_trace: Joi.string().allow("").allow(null),
      meta: FinanceApplicationModel.ErrorMeta(),
    });
  }

  /** @returns {ErrorMeta} */
  static ErrorMeta() {
    return Joi.object({
      columns_errors: Joi.array().items(
        FinanceApplicationModel.ErrorMetaItems()
      ),
    });
  }

  /** @returns {ErrorMetaItems} */
  static ErrorMetaItems() {
    return Joi.object({
      code: Joi.number().allow(null),
      message: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {LockUnlockRequestData} */
  static LockUnlockRequestData() {
    return Joi.object({
      seller_id: Joi.number().required(),
      affiliate_id: Joi.string().allow("").required(),
      ordering_channel: Joi.string().allow("").required(),
      credit_note_number: Joi.string().allow("").required(),
      amount: Joi.number().required(),
      request_type: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {LockUnlockRequestSchema} */
  static LockUnlockRequestSchema() {
    return Joi.object({
      data: FinanceApplicationModel.LockUnlockRequestData(),
    });
  }

  /** @returns {LockUnlockResponseData} */
  static LockUnlockResponseData() {
    return Joi.object({
      credit_note_number: Joi.string().allow(""),
      amount: Joi.number(),
    });
  }

  /** @returns {LockUnlockResponseSchema} */
  static LockUnlockResponseSchema() {
    return Joi.object({
      success: Joi.boolean(),
      data: FinanceApplicationModel.LockUnlockResponseData(),
    });
  }
}
module.exports = FinanceApplicationModel;
