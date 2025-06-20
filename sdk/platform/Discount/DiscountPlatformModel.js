const Joi = require("joi");

/**
 * @typedef ValidityObject
 * @property {string} start - The start date and time of the discount period.
 * @property {string} end - The end date and time of the discount period.
 */

/**
 * @typedef CreateUpdateDiscount
 * @property {string} name - The name of the discount.
 * @property {number} company_id - The unique identifier for the company.
 * @property {boolean} is_active - Indicates if the discount is currently active.
 * @property {string[]} app_ids - List of application IDs associated with the discount.
 * @property {string[]} [extension_ids] - List of extension IDs associated with
 *   the discount.
 * @property {string} job_type - The type of job associated with the discount.
 * @property {string} discount_type - The type of discount being offered.
 * @property {string} discount_level - The level at which the discount is applied.
 * @property {number} [value] - The value of the discount.
 * @property {string} [file_path] - The file path for discount file.
 * @property {number[]} [brand_ids] - List of brand IDs associated with the discount.
 * @property {number[]} [store_ids] - List of store IDs associated with the discount.
 * @property {string[]} [zone_ids] - List of zone IDs associated with the discount.
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
 * @property {string} _id - The unique identifier for the discount job.
 * @property {string} name - The name of the discount job.
 * @property {number} company_id - The unique identifier for the company.
 * @property {boolean} is_active - Indicates if the discount job is currently active.
 * @property {string[]} app_ids - List of application IDs associated with the
 *   discount job.
 * @property {string} job_type - The type of job associated with the discount job.
 * @property {string} [discount_type] - The type of discount being offered.
 * @property {string} discount_level - The level at which the discount is applied.
 * @property {number} [value] - The value of the discount.
 * @property {string} [file_path] - The file path for discount file.
 * @property {number[]} [brand_ids] - List of brand IDs associated with the discount job.
 * @property {number[]} [store_ids] - List of store IDs associated with the discount job.
 * @property {string[]} [zone_ids] - List of zone IDs associated with the discount job.
 * @property {DiscountMeta} [discount_meta]
 * @property {ValidityObject} validity
 * @property {string} created_on - The date and time when the discount job was created.
 * @property {string} modified_on - The date and time when the discount job was
 *   last modified.
 * @property {UserDetails} created_by
 * @property {UserDetails} modified_by
 * @property {Object} [meta] - Additional metadata for the discount job.
 */

/**
 * @typedef FileJobBody
 * @property {string} [name] - The name of the job.
 * @property {number} [company_id] - Unique identifier for the company.
 * @property {boolean} [is_active] - Indicates if the job is active.
 * @property {string[]} [app_ids] - List of application identifiers.
 * @property {string} [job_type] - Type of job being processed.
 * @property {string} [discount_type] - Type of discount applied.
 * @property {string} [discount_level] - Level at which the discount is applied.
 * @property {number} [value] - Value of the discount.
 * @property {string} [file_path] - Path to the discount file associated with the job.
 * @property {number[]} [brand_ids] - List of brand identifiers.
 * @property {number[]} [store_ids] - List of store identifiers.
 * @property {string[]} [extension_ids] - List of extension identifiers.
 * @property {string[]} [zone_ids] - List of zone identifiers.
 * @property {DiscountMeta} [discount_meta]
 * @property {ValidityObject} [validity]
 * @property {string} [created_on] - Timestamp when the job was created.
 * @property {string} [modified_on] - Timestamp when the job was last modified.
 * @property {UserDetails} [created_by]
 * @property {UserDetails} [modified_by]
 * @property {Object} [meta] - Additional metadata for the job.
 */

/**
 * @typedef ListOrCalender
 * @property {DiscountJob[]} items - List of discount jobs.
 * @property {Page} page
 */

/**
 * @typedef DiscountItems
 * @property {string} [item_code] - Unique code for the item.
 * @property {string} [brand_name] - Name of the brand.
 * @property {string} [seller_identifier] - Unique Identifier for the size.
 * @property {string} discount_type - Type of discount applied.
 * @property {number} value - Value of the discount.
 * @property {DiscountMeta} [discount_meta]
 */

/**
 * @typedef BulkDiscount
 * @property {number} company_id - Uinque Identifier for the company.
 * @property {DiscountItems[]} items - List of discount items.
 */

/**
 * @typedef FileJobResponseSchema
 * @property {string} stage - Current stage of the file job.
 * @property {number} total - Total number of items processed.
 * @property {number} failed - Number of items that failed processing.
 * @property {number} company_id - Identifier for the company.
 * @property {FileJobBody} [body]
 * @property {string} type - Type of file job.
 * @property {string} [file_type] - Type of file being processed.
 * @property {string} _id - A unique identifier to distinguish and identify a job.
 * @property {string} [file_path] - Path to the disocunt file.
 * @property {number} [progress] - Progress of the file job.
 * @property {string[]} [extension_ids] - List of extension identifiers.
 * @property {string[]} [zone_ids] - List of zone identifiers.
 * @property {string} [created_on] - Timestamp when the job was created.
 * @property {string} [modified_on] - Timestamp when the job was last modified.
 * @property {UserDetails} [created_by]
 */

/**
 * @typedef FileJobRequestSchema
 * @property {string} name - Name of the file job.
 * @property {boolean} is_active - Indicates if the job is active.
 * @property {number} company_id - Unique Identifier for the company.
 * @property {string[]} app_ids - List of application identifiers.
 * @property {string} job_type - Type of job.
 * @property {string} [discount_type] - Type of discount.
 * @property {string} discount_level - Level at which the discount is applied.
 * @property {string} [file_path] - Path to the disocunt file.
 * @property {number[]} [brand_ids] - List of brand identifiers.
 * @property {number[]} [store_ids] - List of store identifiers.
 * @property {ValidityObject} validity
 * @property {Object} [meta] - Additional metadata for the disocunt.
 */

/**
 * @typedef DownloadFileJob
 * @property {number[]} [brand_ids] - List of brand identifiers.
 * @property {number[]} [store_ids] - List of store identifiers.
 */

/**
 * @typedef CancelJobResponseSchema
 * @property {boolean} success - Indicates if the job cancellation was successful.
 */

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
 * @typedef UserDetails
 * @property {string} username - Username of the user.
 * @property {string} user_id - Unique identifier for the user.
 */

/**
 * @typedef BadRequestObject
 * @property {string} message - A brief description of the error encountered.
 */

/**
 * @typedef BadRequestData
 * @property {string} [message] - Detailed information about the error.
 */

/**
 * @typedef BadRequestObjectGet
 * @property {string} [message] - A brief description of the error encountered.
 * @property {string} [error] - Specific error code or identifier.
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
      app_ids: Joi.array().items(Joi.string().allow("")).required(),
      extension_ids: Joi.array().items(Joi.string().allow("")),
      job_type: Joi.string().allow("").required(),
      discount_type: Joi.string().allow("").required(),
      discount_level: Joi.string().allow("").required(),
      value: Joi.number(),
      file_path: Joi.string().allow(""),
      brand_ids: Joi.array().items(Joi.number()),
      store_ids: Joi.array().items(Joi.number()),
      zone_ids: Joi.array().items(Joi.string().allow("")),
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
      app_ids: Joi.array().items(Joi.string().allow("")).required(),
      job_type: Joi.string().allow("").required(),
      discount_type: Joi.string().allow(""),
      discount_level: Joi.string().allow("").required(),
      value: Joi.number(),
      file_path: Joi.string().allow(""),
      brand_ids: Joi.array().items(Joi.number()),
      store_ids: Joi.array().items(Joi.number()),
      zone_ids: Joi.array().items(Joi.string().allow("")),
      discount_meta: DiscountPlatformModel.DiscountMeta(),
      validity: DiscountPlatformModel.ValidityObject().required(),
      created_on: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      created_by: DiscountPlatformModel.UserDetails().required(),
      modified_by: DiscountPlatformModel.UserDetails().required(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {FileJobBody} */
  static FileJobBody() {
    return Joi.object({
      name: Joi.string().allow(""),
      company_id: Joi.number(),
      is_active: Joi.boolean(),
      app_ids: Joi.array().items(Joi.string().allow("")),
      job_type: Joi.string().allow(""),
      discount_type: Joi.string().allow(""),
      discount_level: Joi.string().allow(""),
      value: Joi.number(),
      file_path: Joi.string().allow(""),
      brand_ids: Joi.array().items(Joi.number()),
      store_ids: Joi.array().items(Joi.number()),
      extension_ids: Joi.array().items(Joi.string().allow("")),
      zone_ids: Joi.array().items(Joi.string().allow("")),
      discount_meta: DiscountPlatformModel.DiscountMeta(),
      validity: DiscountPlatformModel.ValidityObject(),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      created_by: DiscountPlatformModel.UserDetails(),
      modified_by: DiscountPlatformModel.UserDetails(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {FileJobResponseSchema} */
  static FileJobResponseSchema() {
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
      extension_ids: Joi.array().items(Joi.string().allow("")),
      zone_ids: Joi.array().items(Joi.string().allow("")),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      created_by: DiscountPlatformModel.UserDetails(),
    });
  }

  /** @returns {FileJobRequestSchema} */
  static FileJobRequestSchema() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      company_id: Joi.number().required(),
      app_ids: Joi.array().items(Joi.string().allow("")).required(),
      job_type: Joi.string().allow("").required(),
      discount_type: Joi.string().allow(""),
      discount_level: Joi.string().allow("").required(),
      file_path: Joi.string().allow(""),
      brand_ids: Joi.array().items(Joi.number()),
      store_ids: Joi.array().items(Joi.number()),
      validity: DiscountPlatformModel.ValidityObject().required(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {DownloadFileJob} */
  static DownloadFileJob() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),
      store_ids: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {CancelJobResponseSchema} */
  static CancelJobResponseSchema() {
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
      page_size: Joi.number(),
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
