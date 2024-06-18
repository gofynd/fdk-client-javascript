const Joi = require("joi");

/**
 * @typedef ResourceNotFound
 * @property {string} [message] - Resource not found with {id}
 */

/**
 * @typedef PlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 * @property {string} [aggregate_usage]
 * @property {string} [usage_type]
 */

/**
 * @typedef DetailList
 * @property {PlanDetails[]} [plans]
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
 * @property {number} [limit]
 * @property {number} [hard_limit]
 * @property {number} [soft_limit]
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
 * @property {number} [__v]
 * @property {string} [billing_scheme]
 * @property {string} [bill_type]
 * @property {string} [price_ui_type]
 * @property {PlanRecurring} [recurring]
 * @property {TransformQuantity} [transform_quantity]
 * @property {FreeTier} [free_tier]
 * @property {string} [currency]
 * @property {number} [unit_amount]
 * @property {number} [quantity]
 * @property {string} [price_type]
 * @property {Object[]} [tiers]
 */

/**
 * @typedef FreeTier
 * @property {string} [type]
 * @property {number} [value]
 */

/**
 * @typedef TransformQuantity
 * @property {number} [divide_by]
 * @property {string} [round]
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
 * @property {string} [approved_by]
 * @property {string} [updated_by]
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string[]} [company_ids]
 * @property {string} [created_by]
 * @property {string} [channel_type]
 * @property {string} [platform]
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

/**
 * @typedef Recurring
 * @property {string} [interval] - Interval for recurring payments
 * @property {number} [interval_count] - Number of intervals
 */

/**
 * @typedef Taxation
 * @property {number} [gst] - GST percentage
 */

/**
 * @typedef PlanList
 * @property {string} [approved_by]
 * @property {string} [updated_by]
 * @property {Recurring} [recurring]
 * @property {Taxation} [taxation]
 * @property {OneTimeFees} [one_time_fees]
 * @property {CreditLine} [credit_line]
 * @property {string} [_id] - Unique identifier of the plan
 * @property {string} [product_suite_id] - Identifier of the product suite
 *   associated with the plan
 * @property {boolean} [is_trial_plan] - Indicates whether the plan is a trial plan
 * @property {string} [name] - Name of the plan
 * @property {string} [description] - Description of the plan
 * @property {string} [plan_group] - Group to which the plan belongs
 * @property {string[]} [tag_lines] - Tag lines associated with the plan
 * @property {string} [currency] - Currency of the plan
 * @property {number} [amount] - Amount of the plan
 * @property {boolean} [is_active] - Indicates whether the plan is active
 * @property {boolean} [is_visible] - Indicates whether the plan is visible
 * @property {number} [trial_period] - Trial period of the plan
 * @property {Object[]} [addons] - Addons associated with the plan
 * @property {string[]} [tags] - Tags associated with the plan
 * @property {string} [type] - Type of the plan
 * @property {Object} [meta] - Additional metadata associated with the plan
 * @property {string} [country] - Country associated with the plan
 * @property {string[]} [company_ids] - Company IDs associated with the plan
 * @property {string} [created_by] - ID of the user who created the plan
 * @property {string} [current_status] - Current status of the plan
 * @property {string} [channel_type] - Type of channel associated with the plan
 * @property {string} [platform] - Platform associated with the plan
 * @property {string} [created_at] - Date and time when the plan was created
 * @property {string} [modified_at] - Date and time when the plan was last modified
 */

class BillingPublicModel {
  /** @returns {ResourceNotFound} */
  static ResourceNotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {PlanRecurring} */
  static PlanRecurring() {
    return Joi.object({
      interval: Joi.string().allow(""),
      interval_count: Joi.number(),
      aggregate_usage: Joi.string().allow(""),
      usage_type: Joi.string().allow(""),
    });
  }

  /** @returns {DetailList} */
  static DetailList() {
    return Joi.object({
      plans: Joi.array().items(BillingPublicModel.PlanDetails()),
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
      plan_platform_display_name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {FeatureConfig} */
  static FeatureConfig() {
    return Joi.object({
      enabled: Joi.boolean(),
      limit: Joi.number(),
      hard_limit: Joi.number(),
      soft_limit: Joi.number(),
    });
  }

  /** @returns {PlanConfig} */
  static PlanConfig() {
    return Joi.object({
      is_active: Joi.boolean(),
      display_text: Joi.string().allow("").allow(null),
      is_default: Joi.boolean(),
      processing_type: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      feature_config: BillingPublicModel.FeatureConfig(),
      _id: Joi.string().allow(""),
      component_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      __v: Joi.number(),
      billing_scheme: Joi.string().allow(""),
      bill_type: Joi.string().allow(""),
      price_ui_type: Joi.string().allow(""),
      recurring: BillingPublicModel.PlanRecurring(),
      transform_quantity: BillingPublicModel.TransformQuantity(),
      free_tier: BillingPublicModel.FreeTier(),
      currency: Joi.string().allow(""),
      unit_amount: Joi.number(),
      quantity: Joi.number(),
      price_type: Joi.string().allow(""),
      tiers: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {FreeTier} */
  static FreeTier() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.number(),
    });
  }

  /** @returns {TransformQuantity} */
  static TransformQuantity() {
    return Joi.object({
      divide_by: Joi.number(),
      round: Joi.string().allow(""),
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
      display_text: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PlanDetails} */
  static PlanDetails() {
    return Joi.object({
      approved_by: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
      recurring: BillingPublicModel.PlanRecurring(),
      is_trial_plan: Joi.boolean(),
      company_ids: Joi.array().items(Joi.string().allow("")),
      created_by: Joi.string().allow(""),
      channel_type: Joi.string().allow(""),
      platform: Joi.string().allow("").allow(null),
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

  /** @returns {Recurring} */
  static Recurring() {
    return Joi.object({
      interval: Joi.string().allow(""),
      interval_count: Joi.number(),
    });
  }

  /** @returns {Taxation} */
  static Taxation() {
    return Joi.object({
      gst: Joi.number(),
    });
  }

  /** @returns {PlanList} */
  static PlanList() {
    return Joi.object({
      approved_by: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
      recurring: BillingPublicModel.Recurring(),
      taxation: BillingPublicModel.Taxation(),
      one_time_fees: BillingPublicModel.OneTimeFees(),
      credit_line: BillingPublicModel.CreditLine(),
      _id: Joi.string().allow(""),
      product_suite_id: Joi.string().allow(""),
      is_trial_plan: Joi.boolean(),
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      plan_group: Joi.string().allow(""),
      tag_lines: Joi.array().items(Joi.string().allow("")),
      currency: Joi.string().allow(""),
      amount: Joi.number(),
      is_active: Joi.boolean(),
      is_visible: Joi.boolean(),
      trial_period: Joi.number(),
      addons: Joi.array().items(Joi.any()),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      meta: Joi.any(),
      country: Joi.string().allow(""),
      company_ids: Joi.array().items(Joi.string().allow("")),
      created_by: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      channel_type: Joi.string().allow(""),
      platform: Joi.string().allow("").allow(null),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
    });
  }
}
module.exports = BillingPublicModel;
