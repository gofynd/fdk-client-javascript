const Joi = require("joi");

/**
 * @typedef ValidityObject
 * @property {string} start
 * @property {string} end
 */

/**
 * @typedef CreateUpdateDiscount
 * @property {string} name
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string} app_id
 * @property {string} job_type
 * @property {string} discount_type
 * @property {string} discount_level
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {string[]} [factory_type_ids]
 * @property {ValidityObject} validity
 * @property {DiscountMeta} [discount_meta]
 */

/**
 * @typedef DiscountMeta
 * @property {boolean} timer - Determines whether the discount countdown is
 *   visible or not.
 * @property {number} [hours] - The time in hours before the discount ends when
 *   the countdown timer should start.
 * @property {number} [minutes] - The time in minutes before the discount ends
 *   when the countdown timer should start.
 */

/**
 * @typedef DiscountJob
 * @property {string} _id
 * @property {string} name
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string} app_id
 * @property {string} job_type
 * @property {string} [discount_type]
 * @property {string} discount_level
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {string[]} [factory_type_ids]
 * @property {DiscountMeta} [discount_meta]
 * @property {ValidityObject} validity
 * @property {string} created_on
 * @property {string} modified_on
 * @property {UserDetails} created_by
 * @property {UserDetails} modified_by
 * @property {Object} [meta]
 */

/**
 * @typedef FileJobBody
 * @property {string} [name]
 * @property {number} [company_id]
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {string} [job_type]
 * @property {string} [discount_type]
 * @property {string} [discount_level]
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {string[]} [factory_type_ids]
 * @property {DiscountMeta} [discount_meta]
 * @property {ValidityObject} [validity]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {UserDetails} [created_by]
 * @property {UserDetails} [modified_by]
 * @property {Object} [meta]
 */

/**
 * @typedef ListOrCalender
 * @property {DiscountJob[]} items
 * @property {Page} page
 */

/**
 * @typedef DiscountItems
 * @property {string} [item_code]
 * @property {string} [brand_name]
 * @property {string} [seller_identifier]
 * @property {string} [store_code]
 * @property {string} [price_zone]
 * @property {string} discount_type
 * @property {number} value
 * @property {DiscountMeta} [discount_meta]
 */

/**
 * @typedef BulkDiscount
 * @property {number} company_id
 * @property {DiscountItems[]} items
 */

/**
 * @typedef FileJobResponse
 * @property {string} stage
 * @property {number} total
 * @property {number} failed
 * @property {number} company_id
 * @property {FileJobBody} [body]
 * @property {string} type
 * @property {string} [file_type]
 * @property {string} _id - A unique identifier to distinguish and identify a job.
 * @property {string} [file_path]
 * @property {number} [progress]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {UserDetails} [created_by]
 */

/**
 * @typedef FileJobRequest
 * @property {string} name
 * @property {boolean} is_active
 * @property {number} company_id
 * @property {string} app_id
 * @property {string} job_type
 * @property {string} [discount_type]
 * @property {string} discount_level
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 * @property {Object} [meta]
 */

/**
 * @typedef DownloadFileJob
 * @property {string} app_id
 */

/**
 * @typedef CancelJobResponse
 * @property {boolean} success
 */

/**
 * @typedef Page
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [total] - Total number of items.
 */

/**
 * @typedef UserDetails
 * @property {string} username
 * @property {string} user_id
 */

/**
 * @typedef BadRequestObject
 * @property {string} message
 */

/**
 * @typedef BadRequestData
 * @property {string} [message]
 */

/**
 * @typedef BadRequestObjectGet
 * @property {string} [message]
 * @property {string} [error]
 * @property {BadRequestData} [data]
 */

class DiscountPlatformModel {
  /** @returns {ValidityObject} */
  static ValidityObject() {
    return Joi.object({
      start: Joi.string().allow("").required(),
      end: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreateUpdateDiscount} */
  static CreateUpdateDiscount() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      is_active: Joi.boolean().required(),
      app_id: Joi.string().allow("").required(),
      job_type: Joi.string().allow("").required(),
      discount_type: Joi.string().allow("").required(),
      discount_level: Joi.string().allow("").required(),
      value: Joi.number(),
      file_path: Joi.string().allow(""),
      brand_ids: Joi.array().items(Joi.number()),
      store_ids: Joi.array().items(Joi.number()),
      factory_type_ids: Joi.array().items(Joi.string().allow("")),
      validity: DiscountPlatformModel.ValidityObject().required(),
      discount_meta: DiscountPlatformModel.DiscountMeta(),
    });
  }

  /** @returns {DiscountMeta} */
  static DiscountMeta() {
    return Joi.object({
      timer: Joi.boolean().required(),
      hours: Joi.number(),
      minutes: Joi.number(),
    });
  }

  /** @returns {DiscountJob} */
  static DiscountJob() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      is_active: Joi.boolean().required(),
      app_id: Joi.string().allow("").required(),
      job_type: Joi.string().allow("").required(),
      discount_type: Joi.string().allow(""),
      discount_level: Joi.string().allow("").required(),
      value: Joi.number(),
      file_path: Joi.string().allow(""),
      brand_ids: Joi.array().items(Joi.number()),
      store_ids: Joi.array().items(Joi.number()),
      factory_type_ids: Joi.array().items(Joi.string().allow("")),
      discount_meta: DiscountPlatformModel.DiscountMeta(),
      validity: DiscountPlatformModel.ValidityObject().required(),
      created_on: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      created_by: DiscountPlatformModel.UserDetails().required(),
      modified_by: DiscountPlatformModel.UserDetails().required(),
      meta: Joi.any(),
    });
  }

  /** @returns {FileJobBody} */
  static FileJobBody() {
    return Joi.object({
      name: Joi.string().allow(""),
      company_id: Joi.number(),
      is_active: Joi.boolean(),
      app_id: Joi.string().allow(""),
      job_type: Joi.string().allow(""),
      discount_type: Joi.string().allow(""),
      discount_level: Joi.string().allow(""),
      value: Joi.number(),
      file_path: Joi.string().allow(""),
      brand_ids: Joi.array().items(Joi.number()),
      store_ids: Joi.array().items(Joi.number()),
      factory_type_ids: Joi.array().items(Joi.string().allow("")),
      discount_meta: DiscountPlatformModel.DiscountMeta(),
      validity: DiscountPlatformModel.ValidityObject(),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      created_by: DiscountPlatformModel.UserDetails(),
      modified_by: DiscountPlatformModel.UserDetails(),
      meta: Joi.any(),
    });
  }

  /** @returns {ListOrCalender} */
  static ListOrCalender() {
    return Joi.object({
      items: Joi.array().items(DiscountPlatformModel.DiscountJob()).required(),
      page: DiscountPlatformModel.Page().required(),
    });
  }

  /** @returns {DiscountItems} */
  static DiscountItems() {
    return Joi.object({
      item_code: Joi.string().allow(""),
      brand_name: Joi.string().allow(""),
      seller_identifier: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      price_zone: Joi.string().allow(""),
      discount_type: Joi.string().allow("").required(),
      value: Joi.number().required(),
      discount_meta: DiscountPlatformModel.DiscountMeta(),
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

  /** @returns {FileJobResponse} */
  static FileJobResponse() {
    return Joi.object({
      stage: Joi.string().allow("").required(),
      total: Joi.number().required(),
      failed: Joi.number().required(),
      company_id: Joi.number().required(),
      body: DiscountPlatformModel.FileJobBody(),
      type: Joi.string().allow("").required(),
      file_type: Joi.string().allow(""),
      _id: Joi.string().allow("").required(),
      file_path: Joi.string().allow(""),
      progress: Joi.number(),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      created_by: DiscountPlatformModel.UserDetails(),
    });
  }

  /** @returns {FileJobRequest} */
  static FileJobRequest() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      company_id: Joi.number().required(),
      app_id: Joi.string().allow("").required(),
      job_type: Joi.string().allow("").required(),
      discount_type: Joi.string().allow(""),
      discount_level: Joi.string().allow("").required(),
      file_path: Joi.string().allow(""),
      brand_ids: Joi.array().items(Joi.number()),
      store_ids: Joi.array().items(Joi.number()),
      validity: DiscountPlatformModel.ValidityObject().required(),
      meta: Joi.any(),
    });
  }

  /** @returns {DownloadFileJob} */
  static DownloadFileJob() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {CancelJobResponse} */
  static CancelJobResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

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
      total: Joi.number(),
    });
  }

  /** @returns {UserDetails} */
  static UserDetails() {
    return Joi.object({
      username: Joi.string().allow("").required(),
      user_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {BadRequestObject} */
  static BadRequestObject() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {BadRequestData} */
  static BadRequestData() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {BadRequestObjectGet} */
  static BadRequestObjectGet() {
    return Joi.object({
      message: Joi.string().allow(""),
      error: Joi.string().allow(""),
      data: DiscountPlatformModel.BadRequestData(),
    });
  }
}
module.exports = DiscountPlatformModel;
