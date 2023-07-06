const Joi = require("joi");

const DiscountPlatformModel = require("./DiscountPlatformModel");

/**
 * @typedef CancelDownloadJobParam
 * @property {string} id - Id
 */

/**
 * @typedef CancelValidationJobParam
 * @property {string} id - Id
 */

/**
 * @typedef CreateDiscountParam
 * @property {DiscountPlatformModel.CreateUpdateDiscount} body
 */

/**
 * @typedef DownloadDiscountFileParam
 * @property {string} type - Type
 * @property {DiscountPlatformModel.DownloadFileJob} body
 */

/**
 * @typedef GetDiscountParam
 * @property {string} id - Unique id.
 */

/**
 * @typedef GetDiscountsParam
 * @property {string} [view] - Listing or calender. Default is listing.
 * @property {string} [q] - The search query. This can be a partial or complete
 *   name of a discount.
 * @property {number} [pageNo] - Page number. Default is 1.
 * @property {number} [pageSize] - Page size. Default is 12.
 * @property {boolean} [archived] - Archived. Default is false.
 * @property {number} [month] - Month. Default is current month.
 * @property {number} [year] - Year. Default is current year.
 * @property {string} [type] - Basic or custom.
 * @property {string[]} [appIds] - Application ids.
 */

/**
 * @typedef GetDownloadJobParam
 * @property {string} id - Id
 */

/**
 * @typedef GetValidationJobParam
 * @property {string} id - Id
 */

/**
 * @typedef UpdateDiscountParam
 * @property {string} id - Id
 * @property {DiscountPlatformModel.CreateUpdateDiscount} body
 */

/**
 * @typedef UpsertDiscountItemsParam
 * @property {string} id - Job ID of the discount.
 * @property {DiscountPlatformModel.BulkDiscount} body
 */

/**
 * @typedef ValidateDiscountFileParam
 * @property {string} [discount] - Discount
 * @property {DiscountPlatformModel.FileJobRequest} body
 */

class DiscountPlatformValidator {
  /** @returns {cancelDownloadJob} */
  static cancelDownloadJob() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {cancelValidationJob} */
  static cancelValidationJob() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {createDiscount} */
  static createDiscount() {
    return Joi.object({
      body: DiscountPlatformModel.CreateUpdateDiscount().required(),
    }).required();
  }

  /** @returns {downloadDiscountFile} */
  static downloadDiscountFile() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      body: DiscountPlatformModel.DownloadFileJob().required(),
    }).required();
  }

  /** @returns {getDiscount} */
  static getDiscount() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getDiscounts} */
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

  /** @returns {getDownloadJob} */
  static getDownloadJob() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getValidationJob} */
  static getValidationJob() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {updateDiscount} */
  static updateDiscount() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: DiscountPlatformModel.CreateUpdateDiscount().required(),
    }).required();
  }

  /** @returns {upsertDiscountItems} */
  static upsertDiscountItems() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: DiscountPlatformModel.BulkDiscount().required(),
    }).required();
  }

  /** @returns {validateDiscountFile} */
  static validateDiscountFile() {
    return Joi.object({
      discount: Joi.string().allow(""),
      body: DiscountPlatformModel.FileJobRequest().required(),
    }).required();
  }
}

module.exports = DiscountPlatformValidator;
