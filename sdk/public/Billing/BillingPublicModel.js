const Joi = require("joi");

/**
 * @typedef InternalServerError
 * @property {string} [message] - Internal server Server error
 * @property {string} [code] - Error code
 */

/**
 * @typedef PlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */

/**
 * @typedef Plan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef DetailList
 * @property {Plan[]} [plans]
 * @property {Plan} [trial_plan]
 * @property {string[]} [component_groups]
 */

/**
 * @typedef PlanTaxation
 * @property {number} [gst]
 */

/**
 * @typedef OneTimeFees
 * @property {number} [developement]
 * @property {number} [marketing]
 */

/**
 * @typedef CreditLine
 * @property {boolean} [is_active]
 */

/**
 * @typedef PlanMeta
 * @property {string} [plan_platform_display_name]
 */

/**
 * @typedef FeatureConfig
 * @property {boolean} [enabled]
 */

/**
 * @typedef PlanConfig
 * @property {boolean} [is_active]
 * @property {string} [display_text]
 * @property {boolean} [is_default]
 * @property {string} [processing_type]
 * @property {string[]} [tags]
 * @property {FeatureConfig} [feature_config]
 * @property {string} [_id]
 * @property {string} [component_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef ComponentsSchema
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {string} [group]
 * @property {string} [icon]
 * @property {Object} [links]
 * @property {PlanConfig} [config]
 * @property {boolean} [is_active]
 * @property {string} [display_text]
 */

/**
 * @typedef PlanDetails
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {PlanTaxation} [taxation]
 * @property {OneTimeFees} [one_time_fees]
 * @property {CreditLine} [credit_line]
 * @property {string} [current_status]
 * @property {PlanMeta} [meta]
 * @property {ComponentsSchema[]} [components]
 */

class BillingPublicModel {
  /** @returns {InternalServerError} */
  static InternalServerError() {
    return Joi.object({
      message: Joi.string().allow(""),
      code: Joi.string().allow(""),
    });
  }

  /** @returns {PlanRecurring} */
  static PlanRecurring() {
    return Joi.object({
      interval: Joi.string().allow(""),
      interval_count: Joi.number(),
    });
  }

  /** @returns {Plan} */
  static Plan() {
    return Joi.object({
      recurring: BillingPublicModel.PlanRecurring(),
      is_trial_plan: Joi.boolean(),
      plan_group: Joi.string().allow(""),
      tag_lines: Joi.array().items(Joi.string().allow("")),
      currency: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_visible: Joi.boolean(),
      trial_period: Joi.number(),
      addons: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      country: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      amount: Joi.number(),
      product_suite_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
    });
  }

  /** @returns {DetailList} */
  static DetailList() {
    return Joi.object({
      plans: Joi.array().items(BillingPublicModel.Plan()),
      trial_plan: BillingPublicModel.Plan(),
      component_groups: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PlanTaxation} */
  static PlanTaxation() {
    return Joi.object({
      gst: Joi.number(),
    });
  }

  /** @returns {OneTimeFees} */
  static OneTimeFees() {
    return Joi.object({
      developement: Joi.number().allow(null),
      marketing: Joi.number().allow(null),
    });
  }

  /** @returns {CreditLine} */
  static CreditLine() {
    return Joi.object({
      is_active: Joi.boolean(),
    });
  }

  /** @returns {PlanMeta} */
  static PlanMeta() {
    return Joi.object({
      plan_platform_display_name: Joi.string().allow(""),
    });
  }

  /** @returns {FeatureConfig} */
  static FeatureConfig() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {PlanConfig} */
  static PlanConfig() {
    return Joi.object({
      is_active: Joi.boolean(),
      display_text: Joi.string().allow(""),
      is_default: Joi.boolean(),
      processing_type: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      feature_config: BillingPublicModel.FeatureConfig(),
      _id: Joi.string().allow(""),
      component_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
    });
  }

  /** @returns {ComponentsSchema} */
  static ComponentsSchema() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      description: Joi.string().allow(""),
      group: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      links: Joi.any(),
      config: BillingPublicModel.PlanConfig(),
      is_active: Joi.boolean(),
      display_text: Joi.string().allow(""),
    });
  }

  /** @returns {PlanDetails} */
  static PlanDetails() {
    return Joi.object({
      recurring: BillingPublicModel.PlanRecurring(),
      is_trial_plan: Joi.boolean(),
      plan_group: Joi.string().allow(""),
      tag_lines: Joi.array().items(Joi.string().allow("")),
      currency: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_visible: Joi.boolean(),
      trial_period: Joi.number(),
      addons: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      country: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      amount: Joi.number(),
      product_suite_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      taxation: BillingPublicModel.PlanTaxation(),
      one_time_fees: BillingPublicModel.OneTimeFees(),
      credit_line: BillingPublicModel.CreditLine(),
      current_status: Joi.string().allow(""),
      meta: BillingPublicModel.PlanMeta(),
      components: Joi.array().items(BillingPublicModel.ComponentsSchema()),
    });
  }
}
module.exports = BillingPublicModel;
