const Joi = require("joi");

class LogisticModel {
  static PincodeErrorSchemaResponse() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),
    });
  }

  static PincodeMetaResponse() {
    return Joi.object({
      zone: Joi.string().allow(""),

      internal_zone_id: Joi.number(),
    });
  }

  static PincodeParentsResponse() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      name: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),
    });
  }

  static PincodeDataResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      meta: LogisticModel.PincodeMetaResponse(),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),

      parents: Joi.array().items(LogisticModel.PincodeParentsResponse()),

      display_name: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),
    });
  }

  static PincodeApiResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),

      data: Joi.array().items(LogisticModel.PincodeDataResponse()),
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

      available_quantity: Joi.number(),

      category: LogisticModel.TATCategoryRequest(),

      manufacturing_time_unit: Joi.string().allow(""),
    });
  }

  static TATLocationDetailsRequest() {
    return Joi.object({
      articles: Joi.array().items(LogisticModel.TATArticlesRequest()),

      fulfillment_id: Joi.number(),

      from_pincode: Joi.string().allow(""),
    });
  }

  static TATViewRequest() {
    return Joi.object({
      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsRequest()
      ),

      journey: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      action: Joi.string().allow(""),

      source: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),
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
      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),

      error: LogisticModel.TATErrorSchemaResponse(),

      _manufacturing_time_seconds: Joi.number(),

      promise: LogisticModel.TATPromiseResponse(),

      category: LogisticModel.TATCategoryRequest(),

      is_cod_available: Joi.boolean(),
    });
  }

  static TATLocationDetailsResponse() {
    return Joi.object({
      articles: Joi.array().items(LogisticModel.TATArticlesResponse()),

      fulfillment_id: Joi.number(),

      from_pincode: Joi.string().allow(""),
    });
  }

  static TATViewResponse() {
    return Joi.object({
      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsResponse()
      ),

      payment_mode: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      stormbreaker_uuid: Joi.string().allow(""),

      error: LogisticModel.TATErrorSchemaResponse(),

      is_cod_available: Joi.boolean(),

      request_uuid: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      success: Joi.boolean(),

      action: Joi.string().allow(""),

      source: Joi.string().allow(""),

      to_city: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),
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
