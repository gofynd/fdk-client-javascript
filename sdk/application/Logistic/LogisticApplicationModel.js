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
      name: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      uid: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      meta: LogisticModel.PincodeMetaResponse(),

      sub_type: Joi.string().allow(""),

      parents: Joi.array().items(LogisticModel.PincodeParentsResponse()),

      uid: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),
    });
  }

  static PincodeApiResponse() {
    return Joi.object({
      data: Joi.array().items(LogisticModel.PincodeDataResponse()),

      success: Joi.boolean().required(),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),
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
      manufacturing_time_unit: Joi.string().allow(""),

      category: LogisticModel.TATCategoryRequest(),

      manufacturing_time: Joi.number(),

      available_quantity: Joi.number(),
    });
  }

  static TATLocationDetailsRequest() {
    return Joi.object({
      from_pincode: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

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

      identifier: Joi.string().allow(""),

      source: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),
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

      promise: LogisticModel.TATPromiseResponse(),

      is_cod_available: Joi.boolean(),

      manufacturing_time_unit: Joi.string().allow(""),

      manufacturing_time: Joi.number(),

      _manufacturing_time_seconds: Joi.number(),

      error: LogisticModel.TATErrorSchemaResponse(),
    });
  }

  static TATLocationDetailsResponse() {
    return Joi.object({
      from_pincode: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      articles: Joi.array().items(LogisticModel.TATArticlesResponse()),
    });
  }

  static TATViewResponse() {
    return Joi.object({
      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsResponse()
      ),

      action: Joi.string().allow(""),

      stormbreaker_uuid: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      success: Joi.boolean(),

      is_cod_available: Joi.boolean(),

      source: Joi.string().allow(""),

      request_uuid: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      to_city: Joi.string().allow(""),

      error: LogisticModel.TATErrorSchemaResponse(),
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
