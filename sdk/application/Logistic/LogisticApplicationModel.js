const Joi = require("joi");

class LogisticModel {
  static PincodeErrorSchemaResponse() {
    return Joi.object({
      value: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      type: Joi.string().allow("").allow(null),
    });
  }

  static PincodeParentsResponse() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static PincodeMetaResponse() {
    return Joi.object({
      zone: Joi.string().allow(""),

      internal_zone_id: Joi.number(),
    });
  }

  static PincodeDataResponse() {
    return Joi.object({
      sub_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),

      parents: Joi.array().items(LogisticModel.PincodeParentsResponse()),

      meta: LogisticModel.PincodeMetaResponse(),
    });
  }

  static PincodeApiResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

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
      manufacturing_time_unit: Joi.string().allow(""),

      manufacturing_time: Joi.number(),

      category: LogisticModel.TATCategoryRequest(),

      available_quantity: Joi.number(),
    });
  }

  static TATLocationDetailsRequest() {
    return Joi.object({
      fulfillment_id: Joi.number(),

      articles: Joi.array().items(LogisticModel.TATArticlesRequest()),

      from_pincode: Joi.string().allow(""),
    });
  }

  static TATViewRequest() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      source: Joi.string().allow(""),

      action: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsRequest()
      ),

      to_pincode: Joi.string().allow(""),

      journey: Joi.string().allow(""),
    });
  }

  static TATErrorSchemaResponse() {
    return Joi.object({
      value: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      type: Joi.string().allow("").allow(null),
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
      manufacturing_time: Joi.number(),

      category: LogisticModel.TATCategoryRequest(),

      _manufacturing_time_seconds: Joi.number(),

      is_cod_available: Joi.boolean(),

      error: LogisticModel.TATErrorSchemaResponse(),

      manufacturing_time_unit: Joi.string().allow(""),

      promise: LogisticModel.TATPromiseResponse(),
    });
  }

  static TATLocationDetailsResponse() {
    return Joi.object({
      fulfillment_id: Joi.number(),

      articles: Joi.array().items(LogisticModel.TATArticlesResponse()),

      from_pincode: Joi.string().allow(""),
    });
  }

  static TATViewResponse() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      source: Joi.string().allow(""),

      stormbreaker_uuid: Joi.string().allow(""),

      action: Joi.string().allow(""),

      to_city: Joi.string().allow(""),

      is_cod_available: Joi.boolean(),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsResponse()
      ),

      request_uuid: Joi.string().allow(""),

      success: Joi.boolean(),

      error: LogisticModel.TATErrorSchemaResponse(),

      to_pincode: Joi.string().allow(""),

      journey: Joi.string().allow(""),
    });
  }

  static GetZoneFromPincodeViewRequest() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static GetZoneFromPincodeViewResponse() {
    return Joi.object({
      serviceability_type: Joi.string().allow("").required(),

      zones: Joi.array().items(Joi.string().allow("")).required(),
    });
  }
}
module.exports = LogisticModel;
