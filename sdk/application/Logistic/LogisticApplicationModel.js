const Joi = require("joi");

class LogisticModel {
  static PincodeMetaResponse() {
    return Joi.object({
      zone: Joi.string().allow(""),

      internal_zone_id: Joi.number(),
    });
  }

  static PincodeErrorSchemaResponse() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),
    });
  }

  static PincodeParentsResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static PincodeDataResponse() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      meta: LogisticModel.PincodeMetaResponse(),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),

      name: Joi.string().allow(""),

      parents: Joi.array().items(LogisticModel.PincodeParentsResponse()),

      uid: Joi.string().allow(""),
    });
  }

  static PincodeApiResponse() {
    return Joi.object({
      data: Joi.array().items(LogisticModel.PincodeDataResponse()),

      request_uuid: Joi.string().allow("").required(),

      stormbreaker_uuid: Joi.string().allow("").required(),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),

      success: Joi.boolean().required(),
    });
  }

  static TATCategoryRequest() {
    return Joi.object({
      id: Joi.number(),

      level: Joi.string().allow(""),
    });
  }

  static TATArticlesRequest() {
    return Joi.object({
      category: LogisticModel.TATCategoryRequest(),

      manufacturing_time_unit: Joi.string().allow(""),

      manufacturing_time: Joi.number(),
    });
  }

  static TATLocationDetailsRequest() {
    return Joi.object({
      from_pincode: Joi.string().allow(""),

      articles: Joi.array().items(LogisticModel.TATArticlesRequest()),

      fulfillment_id: Joi.number(),
    });
  }

  static TATViewRequest() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsRequest()
      ),

      source: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),

      action: Joi.string().allow(""),
    });
  }

  static TATErrorSchemaResponse() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),
    });
  }

  static TATTimestampResponse() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static TATFormattedResponse() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static TATPromiseResponse() {
    return Joi.object({
      timestamp: LogisticModel.TATTimestampResponse(),

      formatted: LogisticModel.TATFormattedResponse(),
    });
  }

  static TATArticlesResponse() {
    return Joi.object({
      _manufacturing_time_seconds: Joi.number(),

      manufacturing_time: Joi.number(),

      is_cod_available: Joi.boolean(),

      error: LogisticModel.TATErrorSchemaResponse(),

      category: LogisticModel.TATCategoryRequest(),

      manufacturing_time_unit: Joi.string().allow(""),

      promise: LogisticModel.TATPromiseResponse(),
    });
  }

  static TATLocationDetailsResponse() {
    return Joi.object({
      from_pincode: Joi.string().allow(""),

      articles: Joi.array().items(LogisticModel.TATArticlesResponse()),

      fulfillment_id: Joi.number(),
    });
  }

  static TATViewResponse() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      request_uuid: Joi.string().allow(""),

      stormbreaker_uuid: Joi.string().allow(""),

      is_cod_available: Joi.boolean(),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsResponse()
      ),

      error: LogisticModel.TATErrorSchemaResponse(),

      to_city: Joi.string().allow(""),

      success: Joi.boolean(),

      payment_mode: Joi.string().allow(""),

      source: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),

      action: Joi.string().allow(""),
    });
  }

  static GetZoneFromPincodeViewRequest() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static GetZoneFromPincodeViewResponse() {
    return Joi.object({
      zones: Joi.array().items(Joi.string().allow("")).required(),

      serviceability_type: Joi.string().allow("").required(),
    });
  }
}
module.exports = LogisticModel;
