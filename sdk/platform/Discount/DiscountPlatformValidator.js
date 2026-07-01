const Joi = require("joi");

const DiscountPlatformModel = require("./DiscountPlatformModel");

/**
 * @typedef CancelDownloadJobParam
 * @property {string} id - Unique identifier for the discount
 */

/**
 * @typedef CancelValidationJobParam
 * @property {string} id - Unique identifier for the discount.
 */

/**
 * @typedef CreateDiscountParam
 * @property {DiscountPlatformModel.CreateUpdateDiscount} body
 */

/**
 * @typedef DownloadDiscountFileParam
 * @property {string} type - The type of discount file to download, either
 *   'product' or 'inventory'.
 * @property {DiscountPlatformModel.DownloadFileJob} body
 */

/**
 * @typedef GetDiscountParam
 * @property {string} id - Unique identifier for the discount.
 */

/**
 * @typedef GetDiscountsParam
 * @property {string} [view] - Specifies the format in which the discounts are
 *   displayed. Options are 'listing' for a list view or 'calendar' for a
 *   calendar view. Defaults to 'listing'.
 * @property {string} [q] - The search query. This can be a partial or complete
 *   name of a discount.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default is 1.
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {boolean} [archived] - Indicates whether to include expired
 *   discounts in the results. Defaults to false.
 * @property {number} [month] - The month for which discounts is requested.
 *   Defaults to the current month if not specified.
 * @property {number} [year] - The year for which discounts is requested.
 *   Defaults to the current year if not specified.
 * @property {string} [type] - Specifies the type of disocunt to list, either
 *   'basic' or 'custom'.
 * @property {string[]} [appIds] - A `application_id` is a unique identifier for
 *   a particular sales channel.
 */

/**
 * @typedef GetDownloadJobParam
 * @property {string} id - Unique identifier for the discount.
 */

/**
 * @typedef GetValidationJobParam
 * @property {string} id - Unique identifier for the discount.
 */

/**
 * @typedef UpdateDiscountParam
 * @property {string} id - Unique identifier for the discount.
 * @property {DiscountPlatformModel.CreateUpdateDiscount} body
 */

/**
 * @typedef UpsertDiscountItemsParam
 * @property {string} id - Unique identifier for the discount.
 * @property {DiscountPlatformModel.BulkDiscount} body
 */

/**
 * @typedef ValidateDiscountFileParam
 * @property {string} [discount] - Unique identifier for the discount.
 * @property {DiscountPlatformModel.FileJobRequestSchema} body
 */

class DiscountPlatformValidator {
  /** @returns {CancelDownloadJobParam} */
  static cancelDownloadJob() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {CancelValidationJobParam} */
  static cancelValidationJob() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {CreateDiscountParam} */
  static createDiscount() {
    return Joi.object({
      body: DiscountPlatformModel.CreateUpdateDiscount().required(),
    }).required();
  }

  /** @returns {DownloadDiscountFileParam} */
  static downloadDiscountFile() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      body: DiscountPlatformModel.DownloadFileJob().required(),
    }).required();
  }

  /** @returns {GetDiscountParam} */
  static getDiscount() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetDiscountsParam} */
  static getDiscounts() {
    return Joi.object({
      view: Joi.string().allow(""),
      q: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      archived: Joi.boolean(),
      month: Joi.number(),
      year: Joi.number(),
      type: Joi.string().allow(""),
      appIds: Joi.array().items(Joi.string().allow("")),
    }).required();
  }

  /** @returns {GetDownloadJobParam} */
  static getDownloadJob() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetValidationJobParam} */
  static getValidationJob() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {UpdateDiscountParam} */
  static updateDiscount() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: DiscountPlatformModel.CreateUpdateDiscount().required(),
    }).required();
  }

  /** @returns {UpsertDiscountItemsParam} */
  static upsertDiscountItems() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: DiscountPlatformModel.BulkDiscount().required(),
    }).required();
  }

  /** @returns {ValidateDiscountFileParam} */
  static validateDiscountFile() {
    return Joi.object({
      discount: Joi.string().allow(""),
      body: DiscountPlatformModel.FileJobRequestSchema().required(),
    }).required();
  }
}

module.exports = DiscountPlatformValidator;
