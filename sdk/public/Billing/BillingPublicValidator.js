const Joi = require("joi");

const BillingPublicModel = require("./BillingPublicModel");

/**
 * @typedef GetPlanDetailsParam
 * @property {string} planId - Plan unique id.
 */

/** @typedef GetStandardPlansParam */

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
    return Joi.object({});
  }

  /** @returns {PlanListParam} */
  static planList() {
    return Joi.object({});
  }
}

module.exports = BillingPublicValidator;
