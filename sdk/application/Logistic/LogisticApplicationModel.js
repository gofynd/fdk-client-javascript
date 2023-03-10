const Joi = require("joi");

class LogisticModel {
  static PincodeMetaResponse() {
    return Joi.object({
      internal_zone_id: Joi.number(),

      zone: Joi.string().allow(""),
    });
  }

  static CountryMetaResponse() {
    return Joi.object({
      isd_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
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

  static PincodeErrorSchemaResponse() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),
    });
  }

  static PincodeDataResponse() {
    return Joi.object({
      meta: LogisticModel.PincodeMetaResponse(),

      uid: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      meta_code: LogisticModel.CountryMetaResponse(),

      parents: Joi.array().items(LogisticModel.PincodeParentsResponse()),

      display_name: Joi.string().allow(""),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),
    });
  }

  static PincodeApiResponse() {
    return Joi.object({
      data: Joi.array().items(LogisticModel.PincodeDataResponse()),

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

      manufacturing_time: Joi.number(),

      category: LogisticModel.TATCategoryRequest(),
    });
  }

  static TATLocationDetailsRequest() {
    return Joi.object({
      articles: Joi.array().items(LogisticModel.TATArticlesRequest()),

      from_pincode: Joi.string().allow(""),

      fulfillment_id: Joi.number(),
    });
  }

  static TATViewRequest() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      source: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsRequest()
      ),

      action: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),

      journey: Joi.string().allow(""),
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
      type: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),
    });
  }

  static TATArticlesResponse() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      is_cod_available: Joi.boolean(),

      manufacturing_time_unit: Joi.string().allow(""),

      category: LogisticModel.TATCategoryRequest(),

      promise: LogisticModel.TATPromiseResponse(),

      error: LogisticModel.TATErrorSchemaResponse(),

      _manufacturing_time_seconds: Joi.number(),
    });
  }

  static TATLocationDetailsResponse() {
    return Joi.object({
      articles: Joi.array().items(LogisticModel.TATArticlesResponse()),

      from_pincode: Joi.string().allow(""),

      fulfillment_id: Joi.number(),
    });
  }

  static TATViewResponse() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      source: Joi.string().allow(""),

      success: Joi.boolean(),

      is_cod_available: Joi.boolean(),

      stormbreaker_uuid: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsResponse()
      ),

      action: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),

      to_city: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      request_uuid: Joi.string().allow(""),

      error: LogisticModel.TATErrorSchemaResponse(),
    });
  }

  static DP() {
    return Joi.object({
      fm_priority: Joi.number().required(),

      lm_priority: Joi.number().required(),

      rvp_priority: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      operations: Joi.array().items(Joi.string().allow("")).required(),

      area_code: Joi.string().allow("").allow(null),

      assign_dp_from_sb: Joi.boolean(),

      internal_account_id: Joi.string().allow(""),

      external_account_id: Joi.string().allow("").allow(null),

      transport_mode: Joi.string().allow(""),
    });
  }

  static LogisticsResponse() {
    return Joi.object({
      dp: Joi.object().pattern(/\S/, this.DP()),
    });
  }

  static CountryEntityResponse() {
    return Joi.object({
      type: Joi.string().allow(""),

      meta: LogisticModel.CountryMetaResponse(),

      uid: Joi.string().allow(""),

      is_active: Joi.boolean(),

      sub_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      parent_id: Joi.string().allow(""),

      logistics: LogisticModel.LogisticsResponse(),

      display_name: Joi.string().allow(""),
    });
  }

  static CountryListResponse() {
    return Joi.object({
      results: Joi.array().items(LogisticModel.CountryEntityResponse()),
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
