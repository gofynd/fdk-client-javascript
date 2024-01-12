const Joi = require("joi");

/**
 * @typedef DetailList
 * @property {string[]} [component_groups]
 * @property {Plan[]} [plans]
 * @property {Plan} [trial_plan]
 */

/**
 * @typedef InternalServerError
 * @property {string} [code] - Error code
 * @property {string} [message] - Internal server Server error
 */

/**
 * @typedef Plan
 * @property {string} [_id]
 * @property {string[]} [addons]
 * @property {number} [amount]
 * @property {string} [country]
 * @property {string} [created_at]
 * @property {string} [currency]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [is_trial_plan]
 * @property {boolean} [is_visible]
 * @property {string} [modified_at]
 * @property {string} [name]
 * @property {string} [plan_group]
 * @property {string} [product_suite_id]
 * @property {PlanRecurring} [recurring]
 * @property {string[]} [tag_lines]
 * @property {string[]} [tags]
 * @property {number} [trial_period]
 * @property {string} [type]
 */

/**
 * @typedef PlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */

class BillingPublicModel {
  /** @returns {DetailList} */
  static DetailList() {
    return Joi.object({
      component_groups: Joi.array().items(Joi.string().allow("")),
      plans: Joi.array().items(BillingPublicModel.Plan()),
      trial_plan: BillingPublicModel.Plan(),
    });
  }

  /** @returns {InternalServerError} */
  static InternalServerError() {
    return Joi.object({
      code: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {Plan} */
  static Plan() {
    return Joi.object({
      _id: Joi.string().allow(""),
      addons: Joi.array().items(Joi.string().allow("")),
      amount: Joi.number(),
      country: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_trial_plan: Joi.boolean(),
      is_visible: Joi.boolean(),
      modified_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      plan_group: Joi.string().allow(""),
      product_suite_id: Joi.string().allow(""),
      recurring: BillingPublicModel.PlanRecurring(),
      tag_lines: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      trial_period: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {PlanRecurring} */
  static PlanRecurring() {
    return Joi.object({
      interval: Joi.string().allow(""),
      interval_count: Joi.number(),
    });
  }
}
module.exports = BillingPublicModel;
