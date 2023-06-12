const Joi = require("joi");

class LogisticModel {
  static ApefaceApiError() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static Formatted() {
    return Joi.object({
      max: Joi.string().allow(""),
      min: Joi.string().allow(""),
    });
  }
  static GetPincodeCityResponse() {
    return Joi.object({
      data: Joi.array().items(LogisticModel.LogisticPincodeData()).required(),
      request_uuid: Joi.string().allow(""),
      stormbreaker_uuid: Joi.string().allow(""),
      success: Joi.boolean().required(),
    });
  }
  static GetPincodeZonesReqBody() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
    });
  }
  static GetPincodeZonesResponse() {
    return Joi.object({
      serviceability_type: Joi.string().allow("").required(),
      zones: Joi.array().items(Joi.string().allow("")).required(),
    });
  }
  static GetTatProductReqBody() {
    return Joi.object({
      action: Joi.string().allow(""),
      location_details: Joi.array()
        .items(LogisticModel.LocationDetailsReq())
        .required(),
      to_pincode: Joi.string().allow("").required(),
    });
  }
  static GetTatProductResponse() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      error: Joi.any().required(),
      identifier: Joi.string().allow("").required(),
      journey: Joi.string().allow("").required(),
      location_details: Joi.array()
        .items(LogisticModel.LocationDetails())
        .required(),
      request_uuid: Joi.string().allow(""),
      source: Joi.string().allow("").required(),
      stormbreaker_uuid: Joi.string().allow(""),
      success: Joi.boolean().required(),
      to_city: Joi.string().allow("").required(),
      to_pincode: Joi.string().allow("").required(),
    });
  }
  static LocationDetails() {
    return Joi.object({
      articles: Joi.array().items(LogisticModel.TatProductArticles()),
      from_pincode: Joi.string().allow(""),
      fulfillment_id: Joi.number(),
    });
  }
  static LocationDetailsReq() {
    return Joi.object({
      articles: Joi.array().items(LogisticModel.TatReqProductArticles()),
      from_pincode: Joi.string().allow(""),
      fulfillment_id: Joi.number(),
    });
  }
  static LogisticError() {
    return Joi.object({
      message: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static LogisticMeta() {
    return Joi.object({
      deliverables: Joi.array().items(Joi.any()),
      zone: Joi.string().allow(""),
    });
  }
  static LogisticParents() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      name: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }
  static LogisticPincodeData() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      error: LogisticModel.LogisticError(),
      meta: LogisticModel.LogisticMeta(),
      name: Joi.string().allow(""),
      parents: Joi.array().items(LogisticModel.LogisticParents()),
      sub_type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }
  static LogisticPromise() {
    return Joi.object({
      formatted: LogisticModel.Formatted(),
      timestamp: LogisticModel.LogisticTimestamp(),
    });
  }
  static LogisticRequestCategory() {
    return Joi.object({
      id: Joi.number(),
      level: Joi.string().allow(""),
    });
  }
  static LogisticResponseCategory() {
    return Joi.object({
      id: Joi.number(),
      level: Joi.string().allow(""),
    });
  }
  static LogisticTimestamp() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
    });
  }
  static TatProductArticles() {
    return Joi.object({
      category: LogisticModel.LogisticResponseCategory(),
      error: Joi.any(),
      promise: LogisticModel.LogisticPromise(),
    });
  }
  static TatReqProductArticles() {
    return Joi.object({
      category: LogisticModel.LogisticRequestCategory(),
      manufacturing_time: Joi.number(),
      manufacturing_time_unit: Joi.string().allow(""),
    });
  }
}
module.exports = LogisticModel;
