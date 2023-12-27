const Joi = require("joi");

/**
 * @typedef BadRequestData
 * @property {string} [message]
 */

/**
 * @typedef BadRequestObject
 * @property {string} message
 */

/**
 * @typedef BadRequestObjectGet
 * @property {BadRequestData} [data]
 * @property {string} [error]
 * @property {string} [message]
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
 * @property {DiscountMeta} [discount_meta]
 * @property {string} discount_type
 * @property {string[]} [extension_ids]
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
 * @property {string} [brand_name]
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
 * @property {DiscountMeta} [discount_meta]
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
 * @property {string[]} [zone_ids]
 */

/**
 * @typedef DiscountMeta
 * @property {number} [hours] - The time in hours before the discount ends when
 *   the countdown timer should start.
 * @property {number} [minutes] - The time in minutes before the discount ends
 *   when the countdown timer should start.
 * @property {boolean} timer - Determines whether the discount countdown is
 *   visible or not.
 */

/**
 * @typedef DownloadFileJob
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 */

/**
 * @typedef FileJobBody
 * @property {string[]} [app_ids]
 * @property {number[]} [brand_ids]
 * @property {number} [company_id]
 * @property {UserDetails} [created_by]
 * @property {string} [created_on]
 * @property {string} [discount_level]
 * @property {DiscountMeta} [discount_meta]
 * @property {string} [discount_type]
 * @property {string[]} [extension_ids]
 * @property {string} [file_path]
 * @property {boolean} [is_active]
 * @property {string} [job_type]
 * @property {Object} [meta]
 * @property {UserDetails} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {number[]} [store_ids]
 * @property {ValidityObject} [validity]
 * @property {number} [value]
 * @property {string[]} [zone_ids]
 */

/**
 * @typedef FileJobRequest
 * @property {string[]} [app_ids]
 * @property {number[]} [brand_ids]
 * @property {number} company_id
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
 * @property {string} _id - A unique identifier to distinguish and identify a job.
 * @property {FileJobBody} [body]
 * @property {number} company_id
 * @property {UserDetails} [created_by]
 * @property {string} [created_on]
 * @property {string[]} [extension_ids]
 * @property {number} failed
 * @property {string} [file_path]
 * @property {string} [file_type]
 * @property {string} [modified_on]
 * @property {number} [progress]
 * @property {string} stage
 * @property {number} total
 * @property {string} type
 * @property {string[]} [zone_ids]
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
  /** @returns {BadRequestData} */
  static BadRequestData() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {BadRequestObject} */
  static BadRequestObject() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {BadRequestObjectGet} */
  static BadRequestObjectGet() {
    return Joi.object({
      data: DiscountPlatformModel.BadRequestData(),
      error: Joi.string().allow(""),
      message: Joi.string().allow(""),
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
      discount_meta: DiscountPlatformModel.DiscountMeta(),
      discount_type: Joi.string().allow("").required(),
      extension_ids: Joi.array().items(Joi.string().allow("")),
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
      brand_name: Joi.string().allow(""),
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
      discount_meta: DiscountPlatformModel.DiscountMeta(),
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
      zone_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {DiscountMeta} */
  static DiscountMeta() {
    return Joi.object({
      hours: Joi.number(),
      minutes: Joi.number(),
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

  /** @returns {FileJobBody} */
  static FileJobBody() {
    return Joi.object({
      app_ids: Joi.array().items(Joi.string().allow("")),
      brand_ids: Joi.array().items(Joi.number()),
      company_id: Joi.number(),
      created_by: DiscountPlatformModel.UserDetails(),
      created_on: Joi.string().allow(""),
      discount_level: Joi.string().allow(""),
      discount_meta: DiscountPlatformModel.DiscountMeta(),
      discount_type: Joi.string().allow(""),
      extension_ids: Joi.array().items(Joi.string().allow("")),
      file_path: Joi.string().allow(""),
      is_active: Joi.boolean(),
      job_type: Joi.string().allow(""),
      meta: Joi.any(),
      modified_by: DiscountPlatformModel.UserDetails(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      store_ids: Joi.array().items(Joi.number()),
      validity: DiscountPlatformModel.ValidityObject(),
      value: Joi.number(),
      zone_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {FileJobRequest} */
  static FileJobRequest() {
    return Joi.object({
      app_ids: Joi.array().items(Joi.string().allow("")),
      brand_ids: Joi.array().items(Joi.number()),
      company_id: Joi.number().required(),
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
      body: DiscountPlatformModel.FileJobBody(),
      company_id: Joi.number().required(),
      created_by: DiscountPlatformModel.UserDetails(),
      created_on: Joi.string().allow(""),
      extension_ids: Joi.array().items(Joi.string().allow("")),
      failed: Joi.number().required(),
      file_path: Joi.string().allow(""),
      file_type: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      progress: Joi.number(),
      stage: Joi.string().allow("").required(),
      total: Joi.number().required(),
      type: Joi.string().allow("").required(),
      zone_ids: Joi.array().items(Joi.string().allow("")),
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
