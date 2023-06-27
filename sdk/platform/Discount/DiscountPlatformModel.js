const Joi = require("joi");

/**
 * @typedef BadRequestObject
 * @property {string} message
 */

/**
 * @typedef BulkDiscount
 * @property {number} company_id
 * @property {DiscountItems[]} items
 */

/**
 * @typedef CancelJobResponse
 * @property {boolean} success
 */

/**
 * @typedef CreateUpdateDiscount
 * @property {string[]} app_ids
 * @property {number[]} [brand_ids]
 * @property {number} company_id
 * @property {string} discount_level
 * @property {string} discount_type
 * @property {string[]} extension_ids
 * @property {string} [file_path]
 * @property {boolean} is_active
 * @property {string} job_type
 * @property {string} name
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 * @property {number} [value]
 */

/**
 * @typedef DiscountItems
 * @property {number} [brand_uid]
 * @property {DiscountMeta} [discount_meta]
 * @property {string} discount_type
 * @property {string} [item_code]
 * @property {string} [seller_identifier]
 * @property {number} value
 */

/**
 * @typedef DiscountJob
 * @property {string} _id
 * @property {string[]} [app_ids]
 * @property {number[]} [brand_ids]
 * @property {number} company_id
 * @property {UserDetails} created_by
 * @property {string} created_on
 * @property {string} [discount_level]
 * @property {string} [discount_type]
 * @property {string} [file_path]
 * @property {boolean} is_active
 * @property {string} [job_type]
 * @property {Object} [meta]
 * @property {UserDetails} modified_by
 * @property {string} modified_on
 * @property {string} name
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 * @property {number} [value]
 */

/**
 * @typedef DiscountMeta
 * @property {number} number_of_minutes
 * @property {boolean} timer
 */

/**
 * @typedef DownloadFileJob
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 */

/**
 * @typedef FileJobRequest
 * @property {string[]} [app_ids]
 * @property {number[]} [brand_ids]
 * @property {string} [discount_level]
 * @property {string} [discount_type]
 * @property {string} [file_path]
 * @property {boolean} is_active
 * @property {string} [job_type]
 * @property {Object} [meta]
 * @property {string} name
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 */

/**
 * @typedef FileJobResponse
 * @property {string} _id
 * @property {Object} [body]
 * @property {number} company_id
 * @property {number} failed
 * @property {string} file_type
 * @property {string} stage
 * @property {number} total
 * @property {string} type
 */

/**
 * @typedef ListOrCalender
 * @property {DiscountJob[]} items
 * @property {Page} page
 */

/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */

/**
 * @typedef UserDetails
 * @property {string} user_id
 * @property {string} username
 */

/**
 * @typedef ValidityObject
 * @property {string} end
 * @property {string} start
 */

class DiscountPlatformModel {
  /** @returns {BadRequestObject} */
  static BadRequestObject() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {BulkDiscount} */
  static BulkDiscount() {
    return Joi.object({
      company_id: Joi.number().required(),
      items: Joi.array()
        .items(DiscountPlatformModel.DiscountItems())
        .required(),
    });
  }

  /** @returns {CancelJobResponse} */
  static CancelJobResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  /** @returns {CreateUpdateDiscount} */
  static CreateUpdateDiscount() {
    return Joi.object({
      app_ids: Joi.array().items(Joi.string().allow("")).required(),
      brand_ids: Joi.array().items(Joi.number()),
      company_id: Joi.number().required(),
      discount_level: Joi.string().allow("").required(),
      discount_type: Joi.string().allow("").required(),
      extension_ids: Joi.array().items(Joi.string().allow("")).required(),
      file_path: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      job_type: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()),
      validity: DiscountPlatformModel.ValidityObject().required(),
      value: Joi.number(),
    });
  }

  /** @returns {DiscountItems} */
  static DiscountItems() {
    return Joi.object({
      brand_uid: Joi.number(),
      discount_meta: DiscountPlatformModel.DiscountMeta(),
      discount_type: Joi.string().allow("").required(),
      item_code: Joi.string().allow(""),
      seller_identifier: Joi.string().allow(""),
      value: Joi.number().required(),
    });
  }

  /** @returns {DiscountJob} */
  static DiscountJob() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      app_ids: Joi.array().items(Joi.string().allow("")),
      brand_ids: Joi.array().items(Joi.number()),
      company_id: Joi.number().required(),
      created_by: DiscountPlatformModel.UserDetails().required(),
      created_on: Joi.string().allow("").required(),
      discount_level: Joi.string().allow(""),
      discount_type: Joi.string().allow(""),
      file_path: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      job_type: Joi.string().allow(""),
      meta: Joi.any(),
      modified_by: DiscountPlatformModel.UserDetails().required(),
      modified_on: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()),
      validity: DiscountPlatformModel.ValidityObject().required(),
      value: Joi.number(),
    });
  }

  /** @returns {DiscountMeta} */
  static DiscountMeta() {
    return Joi.object({
      number_of_minutes: Joi.number().required(),
      timer: Joi.boolean().required(),
    });
  }

  /** @returns {DownloadFileJob} */
  static DownloadFileJob() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),
      store_ids: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {FileJobRequest} */
  static FileJobRequest() {
    return Joi.object({
      app_ids: Joi.array().items(Joi.string().allow("")),
      brand_ids: Joi.array().items(Joi.number()),
      discount_level: Joi.string().allow(""),
      discount_type: Joi.string().allow(""),
      file_path: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      job_type: Joi.string().allow(""),
      meta: Joi.any(),
      name: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()),
      validity: DiscountPlatformModel.ValidityObject().required(),
    });
  }

  /** @returns {FileJobResponse} */
  static FileJobResponse() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      body: Joi.any(),
      company_id: Joi.number().required(),
      failed: Joi.number().required(),
      file_type: Joi.string().allow("").required(),
      stage: Joi.string().allow("").required(),
      total: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ListOrCalender} */
  static ListOrCalender() {
    return Joi.object({
      items: Joi.array().items(DiscountPlatformModel.DiscountJob()).required(),
      page: DiscountPlatformModel.Page().required(),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {UserDetails} */
  static UserDetails() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),
      username: Joi.string().allow("").required(),
    });
  }

  /** @returns {ValidityObject} */
  static ValidityObject() {
    return Joi.object({
      end: Joi.string().allow("").required(),
      start: Joi.string().allow("").required(),
    });
  }
}
module.exports = DiscountPlatformModel;
