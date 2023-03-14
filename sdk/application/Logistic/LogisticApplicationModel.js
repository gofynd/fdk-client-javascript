const Joi = require("joi");

class LogisticModel {
  static PincodeErrorSchemaResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),

      type: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),
    });
  }

  static PincodeMetaResponse() {
    return Joi.object({
      internal_zone_id: Joi.number(),

      zone: Joi.string().allow(""),
    });
  }

  static PincodeParentsResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),
    });
  }

  static PincodeDataResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      meta: LogisticModel.PincodeMetaResponse(),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),

      parents: Joi.array().items(LogisticModel.PincodeParentsResponse()),

      sub_type: Joi.string().allow(""),
    });
  }

  static PincodeApiResponse() {
    return Joi.object({
      error: LogisticModel.PincodeErrorSchemaResponse().required(),

      data: Joi.array().items(LogisticModel.PincodeDataResponse()),

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
      category: LogisticModel.TATCategoryRequest(),

      available_quantity: Joi.number(),

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
      to_pincode: Joi.string().allow(""),

      action: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      source: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsRequest()
      ),
    });
  }

  static TATErrorSchemaResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),

      type: Joi.string().allow("").allow(null),

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

      is_cod_available: Joi.boolean(),

      error: LogisticModel.TATErrorSchemaResponse(),

      category: LogisticModel.TATCategoryRequest(),

      promise: LogisticModel.TATPromiseResponse(),

      manufacturing_time_unit: Joi.string().allow(""),

      _manufacturing_time_seconds: Joi.number(),
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
      to_pincode: Joi.string().allow(""),

      action: Joi.string().allow(""),

      is_cod_available: Joi.boolean(),

      identifier: Joi.string().allow(""),

      error: LogisticModel.TATErrorSchemaResponse(),

      source: Joi.string().allow(""),

      to_city: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      request_uuid: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      stormbreaker_uuid: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsResponse()
      ),

      success: Joi.boolean(),
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
      zones: Joi.array().items(Joi.string().allow("")).required(),

      serviceability_type: Joi.string().allow("").required(),
    });
  }
}
module.exports = LogisticModel;
