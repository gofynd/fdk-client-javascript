const Joi = require("joi");

class PartnerModel {
  static AddProxyReq() {
    return Joi.object({
      attached_path: Joi.string().allow(""),
      proxy_url: Joi.string().allow(""),
    });
  }
  static AddProxyResponse() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      attached_path: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      extension_id: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      proxy_url: Joi.string().allow(""),
    });
  }
  static APIError() {
    return Joi.object({
      code: Joi.string().allow(""),
      info: Joi.string().allow(""),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      request_id: Joi.string().allow(""),
    });
  }
  static RemoveProxyResponse() {
    return Joi.object({
      data: Joi.any(),
      message: Joi.string().allow(""),
    });
  }
}
module.exports = PartnerModel;
