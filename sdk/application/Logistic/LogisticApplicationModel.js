const Joi = require("joi");

class LogisticModel {
  static PincodeMetaResponse() {
    return Joi.object({
      internal_zone_id: Joi.number(),

      zone: Joi.string().allow(""),
    });
  }

  static PincodeParentsResponse() {
    return Joi.object({
      uid: Joi.string().allow(""),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),
    });
  }

  static PincodeErrorSchemaResponse() {
    return Joi.object({
      value: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      type: Joi.string().allow("").allow(null),
    });
  }

  static PincodeDataResponse() {
    return Joi.object({
      sub_type: Joi.string().allow(""),

      meta: LogisticModel.PincodeMetaResponse(),

      parents: Joi.array().items(LogisticModel.PincodeParentsResponse()),

      name: Joi.string().allow(""),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),

      display_name: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static PincodeApiResponse() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow("").required(),

      data: Joi.array().items(LogisticModel.PincodeDataResponse()),

      request_uuid: Joi.string().allow("").required(),

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
      manufacturing_time_unit: Joi.string().allow(""),

      category: LogisticModel.TATCategoryRequest(),

      manufacturing_time: Joi.number(),
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
      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsRequest()
      ),

      action: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      source: Joi.string().allow(""),
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

  static TATErrorSchemaResponse() {
    return Joi.object({
      value: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      type: Joi.string().allow("").allow(null),
    });
  }

  static TATArticlesResponse() {
    return Joi.object({
      category: LogisticModel.TATCategoryRequest(),

      manufacturing_time: Joi.number(),

      promise: LogisticModel.TATPromiseResponse(),

      is_cod_available: Joi.boolean(),

      error: LogisticModel.TATErrorSchemaResponse(),

      _manufacturing_time_seconds: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),
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
      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsResponse()
      ),

      stormbreaker_uuid: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      action: Joi.string().allow(""),

      request_uuid: Joi.string().allow(""),

      is_cod_available: Joi.boolean(),

      error: LogisticModel.TATErrorSchemaResponse(),

      journey: Joi.string().allow(""),

      to_city: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      source: Joi.string().allow(""),

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
