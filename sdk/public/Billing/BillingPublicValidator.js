const Joi = require("joi");

const BillingPublicModel = require("./BillingPublicModel");

/**
 * @typedef GetStandardPlansParam
 * @property {string} platform - The type of platform for which plans are requested.
 */

class BillingPublicValidator {
  /** @returns {GetStandardPlansParam} */
  static getStandardPlans() {
    return Joi.object({
      platform: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = BillingPublicValidator;
