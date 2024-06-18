const Joi = require("joi");

const BillingPublicModel = require("./BillingPublicModel");

/**
 * @typedef GetPlanDetailsParam
 * @property {string} planId - Plan unique id.
 */

/**
 * @typedef GetStandardPlansParam
 * @property {string} [platform] - The type of platform for which plans are requested.
 */

/** @typedef PlanListParam */

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
      platform: Joi.string().allow(""),
    });
  }

  /** @returns {PlanListParam} */
  static planList() {
    return Joi.object({});
  }
}

module.exports = BillingPublicValidator;