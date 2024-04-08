const Joi = require("joi");

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef ConditionsSchema
 * @property {string} [column_name]
 * @property {string} [conditional_operator]
 * @property {string} [type]
 */

/**
 * @typedef WhereSchema
 * @property {ConditionsSchema[]} [conditions]
 */

/**
 * @typedef SortBySchema
 * @property {string} [column]
 * @property {string} [order]
 */

/**
 * @typedef JobExecute
 * @property {string} [query]
 * @property {string} [encoding]
 * @property {Page} [page]
 */

class AnalyticsPlatformModel {
  /** @returns {Page} */
  static Page() {
    return Joi.object({
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      has_previous: Joi.boolean(),
      has_next: Joi.boolean(),
      current: Joi.number(),
      type: Joi.string().allow("").required(),
      size: Joi.number(),
    });
  }

  /** @returns {ConditionsSchema} */
  static ConditionsSchema() {
    return Joi.object({
      column_name: Joi.string().allow(""),
      conditional_operator: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {WhereSchema} */
  static WhereSchema() {
    return Joi.object({
      conditions: Joi.array().items(AnalyticsPlatformModel.ConditionsSchema()),
    });
  }

  /** @returns {SortBySchema} */
  static SortBySchema() {
    return Joi.object({
      column: Joi.string().allow(""),
      order: Joi.string().allow(""),
    });
  }

  /** @returns {JobExecute} */
  static JobExecute() {
    return Joi.object({
      query: Joi.string().allow(""),
      encoding: Joi.string().allow(""),
      page: AnalyticsPlatformModel.Page(),
    });
  }
}
module.exports = AnalyticsPlatformModel;
