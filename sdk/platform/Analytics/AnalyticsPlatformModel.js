const Joi = require("joi");

/**
 * @typedef Page
 * @property {number} [item_total] - The total number of all items across all pages.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [page_size] - The number of items per page.
 */

/**
 * @typedef FileDownloadRequestBody
 * @property {string} query - Base64 encoded SQL query to execute on ClickHouse.
 * @property {boolean} [split_files] - Flag indicating whether to split the
 *   files for larger datasets.
 */

/**
 * @typedef JobExecute
 * @property {string} query - Base64 encoded SQL query to execute on ClickHouse.
 * @property {Page} [page]
 */

/**
 * @typedef JobExecutionResult
 * @property {Object[]} [rows] - Array of rows resulting from the job execution.
 * @property {Page} [page]
 */

/**
 * @typedef JobStatus
 * @property {string} [start_date] - The start date and time of the job.
 * @property {string} [end_date] - The end date and time of the job.
 * @property {string} [status] - The current status of the job.
 * @property {string} [message] - Message providing additional details about the
 *   job status.
 * @property {Object[]} [file_metadata] - Metadata about files associated with
 *   the job, if any.
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
      page_size: Joi.number(),
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

  /** @returns {JobExecutionResult} */
  static JobExecutionResult() {
    return Joi.object({
      rows: Joi.array().items(Joi.any()),
      page: AnalyticsPlatformModel.Page(),
    });
  }

  /** @returns {JobStatus} */
  static JobStatus() {
    return Joi.object({
      start_date: Joi.string().allow(""),
      end_date: Joi.string().allow("").allow(null),
      status: Joi.string().allow(""),
      message: Joi.string().allow(""),
      file_metadata: Joi.array().items(Joi.any()).allow(null, ""),
    });
  }
}
module.exports = AnalyticsPlatformModel;
