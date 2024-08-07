const Joi = require("joi");

/**
 * @typedef TenureConfig
 * @property {string} [display_name] - Display name for the tenure
 *   configuration(like "Monthly", "Half Yearly", "Yearly")
 * @property {string} [description] - Description of the tenure configuration
 * @property {boolean} [is_active] - Indicates whether the tenure configuration is active
 * @property {string} [slug] - Slug identifier that uniquely identifies the
 *   tenure configuration
 */

/**
 * @typedef TenureConfigData
 * @property {string} [country] - Country associated with the tenure configuration
 * @property {TenureConfig[]} [tenure_config] - Array of tenure configurations
 */

/**
 * @typedef TenureConfigResponse
 * @property {boolean} [success] - Indicates whether the request was successful
 * @property {TenureConfigData} [data]
 */

/**
 * @typedef ResourceNotFound
 * @property {string} [message] - Resource not found with {id}
 */

/**
 * @typedef PlanRecurring
 * @property {string} [interval] - Interval for the recurring plan
 * @property {number} [interval_count] - Number of intervals for the recurring plan
 * @property {string} [aggregate_usage] - Aggregate usage type for the recurring plan
 * @property {string} [usage_type] - Usage type for the recurring plan (like metered etc)
 */

/**
 * @typedef PlanTypes
 * @property {PlanDetails[]} [month] - Monthly plan details
 * @property {PlanDetails[]} [quarter] - Quarterly plan details
 * @property {PlanDetails[]} [half_year] - Half-yearly plan details
 * @property {PlanDetails[]} [year] - Yearly plan details
 */

/**
 * @typedef DetailList
 * @property {PlanTypes} [plans]
 * @property {TrialPlanDetails} [trial_plan]
 */

/**
 * @typedef PlanTaxation
 * @property {number} [gst] - GST percentage applied to the plan
 */

/**
 * @typedef CountryRes
 * @property {string} [name] - Name of the country
 * @property {string} [code] - Country code
 */

/**
 * @typedef OneTimeFees
 * @property {number} [developement] - One time Development fees
 * @property {number} [marketing] - One time Marketing fees
 */

/**
 * @typedef CreditLine
 * @property {boolean} [is_active] - Indicates whether the credit line is active
 */

/**
 * @typedef PlanMeta
 * @property {string} [plan_platform_display_name] - Display name for the plan platform
 */

/**
 * @typedef FeatureConfig
 * @property {boolean} [enabled] - Indicates whether the feature is enabled
 * @property {number} [limit] - Limit for the feature
 * @property {number} [hard_limit] - Hard limit for the feature
 * @property {number} [soft_limit] - Soft limit for the feature
 */

/**
 * @typedef PlanConfig
 * @property {boolean} [is_active] - Indicates whether the plan configuration is active
 * @property {string} [display_text] - Text to display plan configuration
 * @property {boolean} [is_default] - Indicates whether the plan configuration is default
 * @property {string} [processing_type] - Type of processing for the plan configuration
 * @property {string[]} [tags] - Tags associated with the plan configuration
 * @property {FeatureConfig} [feature_config]
 * @property {string} [_id] - Unique identifier for the plan configuration
 * @property {string} [component_id] - Component identifier associated with the
 *   plan configuration
 * @property {string} [created_at] - Creation date of the plan configuration
 * @property {string} [modified_at] - Modification date of the plan configuration
 * @property {number} [__v] - Version number of the plan configuration
 * @property {string} [billing_scheme] - Billing scheme for the plan configuration
 * @property {string} [bill_type] - Billing type for the plan configuration
 * @property {string} [price_ui_type] - Price UI type for the plan configuration
 * @property {PlanRecurring} [recurring]
 * @property {TransformQuantity} [transform_quantity]
 * @property {FreeTier} [free_tier]
 * @property {string} [currency] - Currency used in the plan configuration
 * @property {number} [unit_amount] - Unit amount for the plan configuration
 * @property {number} [quantity] - Quantity for the plan configuration
 * @property {string} [price_type] - Price type for the plan configuration
 * @property {Object[]} [tiers] - An array of pricing tiers that apply based on
 *   quantity or usage. Each tier can define a maximum limit (`up_to`), an
 *   additional flat fee (`flat_amount`), and a price per unit (`unit_amount`)
 */

/**
 * @typedef FreeTier
 * @property {string} [type] - Type of the free tier
 * @property {number} [value] - Value of the free tier type
 */

/**
 * @typedef TransformQuantity
 * @property {number} [divide_by] - Divide by value for the quantity transformation
 * @property {string} [round] - Rounding method for the quantity transformation
 */

/**
 * @typedef ComponentsSchema
 * @property {string} [name] - Name of the component
 * @property {string} [slug] - Slug identifier for the component
 * @property {string} [description] - Description of the component
 * @property {string} [group] - Group to which the component belongs
 * @property {string} [icon] - Icon associated with the component
 * @property {Object} [links] - Links associated with the component
 * @property {PlanConfig} [config]
 * @property {boolean} [is_active] - Indicates whether the component is active
 * @property {string} [display_text] - Display text for the component
 */

/**
 * @typedef PlanDetails
 * @property {string} [activated_by] - ID of the user who activated the plan
 * @property {string} [updated_by] - ID of the user who updated the plan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan] - Indicates whether the plan is a trial plan
 * @property {string[]} [company_ids] - Company IDs associated with the plan
 * @property {string} [created_by] - ID of the user who created the plan
 * @property {string} [channel_type] - Ordering channel associated with the
 *   plan(e.g, ecomm, fynd)
 * @property {string} [platform] - Platform associated with the plan(e.g, web, mobile)
 * @property {string} [plan_group] - Group to which the plan belongs
 * @property {string[]} [tag_lines] - Tag lines associated with the plan
 * @property {string} [currency] - Currency of the plan
 * @property {boolean} [is_active] - Indicates whether the plan is active
 * @property {boolean} [is_visible] - Indicates whether the plan is visible on ui
 * @property {number} [trial_period] - Trial period of the plan
 * @property {string[]} [addons] - Addons associated with the plan
 * @property {string[]} [tags] - Tags associated with the plan
 * @property {string} [type] - Type of the plan
 * @property {CountryRes} [country]
 * @property {string} [_id] - Unique identifier for the plan."
 * @property {string} [name] - Name of the plan
 * @property {string} [description] - Description of the plan
 * @property {number} [amount] - Amount of the plan
 * @property {string} [product_suite_id] - Identifier of the product suite
 *   associated with the plan
 * @property {string} [created_at] - Creation date of the plan
 * @property {string} [modified_at] - Modification date of the plan
 * @property {PlanTaxation} [taxation]
 * @property {OneTimeFees} [one_time_fees]
 * @property {CreditLine} [credit_line]
 * @property {string} [current_status] - Current status of the plan
 * @property {string} [approved_by] - Id of the User who has approved the plan
 * @property {PlanMeta} [meta]
 * @property {ComponentsSchema[]} [components] - Components associated with the plan
 */

/**
 * @typedef Recurring
 * @property {string} [interval] - Interval for recurring payments
 * @property {number} [interval_count] - Number of intervals
 */

/**
 * @typedef Taxation
 * @property {number} [gst] - GST percentage applied to the plan
 */

/**
 * @typedef PlanList
 * @property {string} [approved_by] - ID of the user who approved the plan
 * @property {string} [updated_by] - ID of the user who updated the plan
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
 * @property {string} [plan_group] - Group to which plan belongs
 * @property {string} [plan_group_id] - Group id to which plan belongs
 * @property {string[]} [tag_lines] - Tag lines associated with the plan
 * @property {string} [currency] - Currency of the plan
 * @property {number} [amount] - Amount of the plan
 * @property {boolean} [is_active] - Indicates whether the plan is active
 * @property {boolean} [is_visible] - Indicates whether the plan is visible on ui
 * @property {number} [trial_period] - Trial period of the plan in days
 * @property {Object[]} [addons] - Addons associated with the plan
 * @property {string[]} [tags] - Tags associated with the plan
 * @property {string} [type] - Type of the plan (enterprise or standard)
 * @property {Object} [meta] - Additional metadata associated with the plan
 * @property {CountryRes} [country]
 * @property {string[]} [company_ids] - Company IDs associated with the plan
 * @property {string} [created_by] - ID of the user who created the plan
 * @property {string} [current_status] - Current status of the plan (active, inactive)
 * @property {string} [channel_type] - Ordering channel for which plan is
 *   created(fynd, ecomm, uniket etc)
 * @property {string} [platform] - Platform associated with the plan (web, mobile, all)
 * @property {string} [created_at] - Date and time when the plan was created
 * @property {string} [modified_at] - Date and time when the plan was last modified
 */

/**
 * @typedef TrialPlanDetails
 * @property {string} [activated_by] - ID of the user who activated the trial plan
 * @property {string} [updated_by] - ID of the user who updated the trial plan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan] - Indicates whether the plan is a trial plan
 * @property {string[]} [company_ids] - Company IDs associated with the trial plan
 * @property {string} [created_by] - ID of the user who created the trial plan
 * @property {string} [channel_type] - Ordering channel for which plan is
 *   created(ecomm, fynd etc)
 * @property {string} [platform] - Platform associated with the trial plan(web ,
 *   mobile, all)
 * @property {string} [plan_group] - Group to which the trial plan belongs
 * @property {string[]} [tag_lines] - Tag lines associated with the trial plan
 * @property {string} [currency] - Currency of the trial plan
 * @property {boolean} [is_active] - Indicates whether the trial plan is active
 * @property {boolean} [is_visible] - Indicates whether the trial plan is visible on ui
 * @property {number} [trial_period] - Trial period of the trial plan in days
 * @property {string[]} [addons] - Addons associated with the trial plan
 * @property {string[]} [tags] - Tags associated with the trial plan
 * @property {string} [type] - Type of the trial plan(public, company_specific)
 * @property {CountryRes} [country]
 * @property {string} [_id] - Unique identifier for the trial plan
 * @property {string} [name] - Name of the trial plan
 * @property {string} [description] - Description of the trial plan
 * @property {number} [amount] - Amount of the trial plan
 * @property {string} [product_suite_id] - Identifier of the product suite
 *   associated with the trial plan
 * @property {string} [created_at] - Creation date of the trial plan
 * @property {string} [modified_at] - Modification date of the trial plan
 * @property {PlanTaxation} [taxation]
 * @property {OneTimeFees} [one_time_fees]
 * @property {CreditLine} [credit_line]
 * @property {string} [current_status] - Current status of the trial plan
 * @property {PlanMeta} [meta]
 * @property {ComponentsSchema[]} [components] - Components associated with the trial plan
 */

class BillingPublicModel {
  /** @returns {TenureConfig} */
  static TenureConfig() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {TenureConfigData} */
  static TenureConfigData() {
    return Joi.object({
      country: Joi.string().allow(""),
      tenure_config: Joi.array().items(BillingPublicModel.TenureConfig()),
    });
  }

  /** @returns {TenureConfigResponse} */
  static TenureConfigResponse() {
    return Joi.object({
      success: Joi.boolean(),
      data: BillingPublicModel.TenureConfigData(),
    });
  }

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

  /** @returns {PlanTypes} */
  static PlanTypes() {
    return Joi.object({
      month: Joi.array().items(BillingPublicModel.PlanDetails()),
      quarter: Joi.array().items(BillingPublicModel.PlanDetails()),
      half_year: Joi.array().items(BillingPublicModel.PlanDetails()),
      year: Joi.array().items(BillingPublicModel.PlanDetails()),
    });
  }

  /** @returns {DetailList} */
  static DetailList() {
    return Joi.object({
      plans: BillingPublicModel.PlanTypes(),
      trial_plan: BillingPublicModel.TrialPlanDetails(),
    });
  }

  /** @returns {PlanTaxation} */
  static PlanTaxation() {
    return Joi.object({
      gst: Joi.number(),
    });
  }

  /** @returns {CountryRes} */
  static CountryRes() {
    return Joi.object({
      name: Joi.string().allow(""),
      code: Joi.string().allow(""),
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
      activated_by: Joi.string().allow(""),
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
      country: BillingPublicModel.CountryRes(),
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
      approved_by: Joi.string().allow(""),
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
      plan_group_id: Joi.string().allow(""),
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
      country: BillingPublicModel.CountryRes(),
      company_ids: Joi.array().items(Joi.string().allow("")),
      created_by: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      channel_type: Joi.string().allow(""),
      platform: Joi.string().allow("").allow(null),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
    });
  }

  /** @returns {TrialPlanDetails} */
  static TrialPlanDetails() {
    return Joi.object({
      activated_by: Joi.string().allow(""),
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
      country: BillingPublicModel.CountryRes(),
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
