const Joi = require("joi");

/**
 * @typedef Page
 * @property {number} [current]
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {number} [total_page]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {string} [type]
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
      current: Joi.number(),
      size: Joi.number(),
      item_total: Joi.number(),
      total_page: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      type: Joi.string().allow(""),
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
