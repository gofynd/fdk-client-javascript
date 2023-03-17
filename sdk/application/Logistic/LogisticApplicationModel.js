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
      message: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),

      type: Joi.string().allow("").allow(null),
    });
  }

  static PincodeParentsResponse() {
    return Joi.object({
      sub_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PincodeDataResponse() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      meta: LogisticModel.PincodeMetaResponse(),

      sub_type: Joi.string().allow(""),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),

      parents: Joi.array().items(LogisticModel.PincodeParentsResponse()),

      name: Joi.string().allow(""),
    });
  }

  static PincodeApiResponse() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      request_uuid: Joi.string().allow("").required(),

      data: Joi.array().items(LogisticModel.PincodeDataResponse()),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),
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
      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),

      category: LogisticModel.TATCategoryRequest(),
    });
  }

  static TATLocationDetailsRequest() {
    return Joi.object({
      fulfillment_id: Joi.number(),

      from_pincode: Joi.string().allow(""),

      articles: Joi.array().items(LogisticModel.TATArticlesRequest()),
    });
  }

  static TATViewRequest() {
    return Joi.object({
      to_pincode: Joi.string().allow(""),

      source: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      action: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsRequest()
      ),

      journey: Joi.string().allow(""),
    });
  }

  static TATErrorSchemaResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),

      type: Joi.string().allow("").allow(null),
    });
  }

  static TATTimestampResponse() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static TATFormattedResponse() {
    return Joi.object({
      max: Joi.string().allow(""),

      min: Joi.string().allow(""),
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
      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),

      promise: LogisticModel.TATPromiseResponse(),

      category: LogisticModel.TATCategoryRequest(),

      _manufacturing_time_seconds: Joi.number(),

      is_cod_available: Joi.boolean(),

      error: LogisticModel.TATErrorSchemaResponse(),
    });
  }

  static TATLocationDetailsResponse() {
    return Joi.object({
      fulfillment_id: Joi.number(),

      from_pincode: Joi.string().allow(""),

      articles: Joi.array().items(LogisticModel.TATArticlesResponse()),
    });
  }

  static TATViewResponse() {
    return Joi.object({
      to_pincode: Joi.string().allow(""),

      stormbreaker_uuid: Joi.string().allow(""),

      error: LogisticModel.TATErrorSchemaResponse(),

      request_uuid: Joi.string().allow(""),

      success: Joi.boolean(),

      to_city: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      source: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      is_cod_available: Joi.boolean(),

      action: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsResponse()
      ),

      journey: Joi.string().allow(""),
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
