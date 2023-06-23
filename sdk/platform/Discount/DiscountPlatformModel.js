const Joi = require("joi");

class DiscountModel {
  static BadRequestObject() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }
  static BulkDiscount() {
    return Joi.object({
      company_id: Joi.number().required(),
      items: Joi.array().items(DiscountModel.DiscountItems()).required(),
    });
  }
  static CancelJobResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }
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
      validity: DiscountModel.ValidityObject().required(),
      value: Joi.number(),
    });
  }
  static DiscountItems() {
    return Joi.object({
      brand_uid: Joi.number(),
      discount_type: Joi.string().allow("").required(),
      item_code: Joi.string().allow(""),
      seller_identifier: Joi.string().allow(""),
      value: Joi.number().required(),
    });
  }
  static DiscountJob() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      app_ids: Joi.array().items(Joi.string().allow("")),
      brand_ids: Joi.array().items(Joi.number()),
      company_id: Joi.number().required(),
      created_by: DiscountModel.UserDetails().required(),
      created_on: Joi.string().allow("").required(),
      discount_level: Joi.string().allow(""),
      discount_type: Joi.string().allow(""),
      file_path: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      job_type: Joi.string().allow(""),
      meta: Joi.any(),
      modified_by: DiscountModel.UserDetails().required(),
      modified_on: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()),
      validity: DiscountModel.ValidityObject().required(),
      value: Joi.number(),
    });
  }
  static DownloadFileJob() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),
      store_ids: Joi.array().items(Joi.number()),
    });
  }
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
      validity: DiscountModel.ValidityObject().required(),
    });
  }
  static FileJobResponse() {
    return Joi.object({
      body: Joi.any(),
      company_id: Joi.number().required(),
      failed: Joi.number().required(),
      file_type: Joi.string().allow("").required(),
      stage: Joi.string().allow("").required(),
      total: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }
  static ListOrCalender() {
    return Joi.object({
      items: Joi.array().items(DiscountModel.DiscountJob()).required(),
      page: DiscountModel.Page().required(),
    });
  }
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
  static UserDetails() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),
      username: Joi.string().allow("").required(),
    });
  }
  static ValidityObject() {
    return Joi.object({
      end: Joi.string().allow("").required(),
      start: Joi.string().allow("").required(),
    });
  }
}
module.exports = DiscountModel;
