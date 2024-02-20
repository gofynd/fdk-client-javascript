const Joi = require("joi");

const BillingPublicModel = require("./BillingPublicModel");

/**
 * @typedef GetPlanDetailsParam
 * @property {string} planId - Plan unique id.
 */

/**
 * @typedef GetStandardPlansParam
 * @property {string} platformType - The type of platform for which plans are requested.
 */

class BillingPublicValidator {
  /** @returns {GetPlanDetailsParam} */
  static getPlanDetails() {
    return Joi.object({
      planId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetStandardPlansParam} */
  static getStandardPlans() {
    return Joi.object({
      platformType: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = BillingPublicValidator;
