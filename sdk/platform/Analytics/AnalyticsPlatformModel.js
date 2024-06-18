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
 * @typedef FileDownloadRequestBody
 * @property {string} query - Base64 encoded query to execute on clickhouse.
 * @property {boolean} [split_files] - Flag to indicate whether to split files
 *   for larger data.
 */

/**
 * @typedef JobExecute
 * @property {string} query - Base64 encoded query to execute on clickhouse.
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

  /** @returns {FileDownloadRequestBody} */
  static FileDownloadRequestBody() {
    return Joi.object({
      query: Joi.string().allow("").required(),
      split_files: Joi.boolean(),
    });
  }

  /** @returns {JobExecute} */
  static JobExecute() {
    return Joi.object({
      query: Joi.string().allow("").required(),
      page: AnalyticsPlatformModel.Page(),
    });
  }
}
module.exports = AnalyticsPlatformModel;
