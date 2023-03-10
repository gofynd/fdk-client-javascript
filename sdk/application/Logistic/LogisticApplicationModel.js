const Joi = require("joi");

class LogisticModel {
  static PincodeParentsResponse() {
    return Joi.object({
      sub_type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PincodeMetaResponse() {
    return Joi.object({
      internal_zone_id: Joi.number(),

      zone: Joi.string().allow(""),
    });
  }

  static PincodeErrorSchemaResponse() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),
    });
  }

  static PincodeDataResponse() {
    return Joi.object({
      uid: Joi.string().allow(""),

      parents: Joi.array().items(LogisticModel.PincodeParentsResponse()),

      meta: LogisticModel.PincodeMetaResponse(),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),

      display_name: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PincodeApiResponse() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow("").required(),

      data: Joi.array().items(LogisticModel.PincodeDataResponse()),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),

      request_uuid: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static TATCategoryRequest() {
    return Joi.object({
      level: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static TATArticlesRequest() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),

      category: LogisticModel.TATCategoryRequest(),
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

      source: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsRequest()
      ),

      to_pincode: Joi.string().allow(""),

      action: Joi.string().allow(""),
    });
  }

  static TATFormattedResponse() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static TATTimestampResponse() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static TATPromiseResponse() {
    return Joi.object({
      formatted: LogisticModel.TATFormattedResponse(),

      timestamp: LogisticModel.TATTimestampResponse(),
    });
  }

  static TATErrorSchemaResponse() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),
    });
  }

  static TATArticlesResponse() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),

      _manufacturing_time_seconds: Joi.number(),

      promise: LogisticModel.TATPromiseResponse(),

      is_cod_available: Joi.boolean(),

      error: LogisticModel.TATErrorSchemaResponse(),

      manufacturing_time: Joi.number(),

      category: LogisticModel.TATCategoryRequest(),
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

      source: Joi.string().allow(""),

      to_city: Joi.string().allow(""),

      stormbreaker_uuid: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsResponse()
      ),

      to_pincode: Joi.string().allow(""),

      is_cod_available: Joi.boolean(),

      action: Joi.string().allow(""),

      error: LogisticModel.TATErrorSchemaResponse(),

      request_uuid: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      success: Joi.boolean(),
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
