const Joi = require("joi");

class LogisticModel {
  static PincodeErrorSchemaResponse() {
    return Joi.object({
      value: Joi.string().allow("").allow(null),

      type: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),
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

  static CountryMetaResponse() {
    return Joi.object({
      isd_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static PincodeMetaResponse() {
    return Joi.object({
      internal_zone_id: Joi.number(),

      zone: Joi.string().allow(""),
    });
  }

  static PincodeDataResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      parents: Joi.array().items(LogisticModel.PincodeParentsResponse()),

      display_name: Joi.string().allow(""),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),

      sub_type: Joi.string().allow(""),

      meta_code: LogisticModel.CountryMetaResponse(),

      meta: LogisticModel.PincodeMetaResponse(),

      uid: Joi.string().allow(""),
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
      fulfillment_id: Joi.number(),

      articles: Joi.array().items(LogisticModel.TATArticlesRequest()),

      from_pincode: Joi.string().allow(""),
    });
  }

  static TATViewRequest() {
    return Joi.object({
      to_pincode: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      source: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsRequest()
      ),

      action: Joi.string().allow(""),
    });
  }

  static TATErrorSchemaResponse() {
    return Joi.object({
      value: Joi.string().allow("").allow(null),

      type: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),
    });
  }

  static TATFormattedResponse() {
    return Joi.object({
      max: Joi.string().allow(""),

      min: Joi.string().allow(""),
    });
  }

  static TATTimestampResponse() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static TATPromiseResponse() {
    return Joi.object({
      formatted: LogisticModel.TATFormattedResponse(),

      timestamp: LogisticModel.TATTimestampResponse(),
    });
  }

  static TATArticlesResponse() {
    return Joi.object({
      promise: LogisticModel.TATPromiseResponse(),

      _manufacturing_time_seconds: Joi.number(),

      manufacturing_time: Joi.number(),

      category: LogisticModel.TATCategoryRequest(),

      error: LogisticModel.TATErrorSchemaResponse(),

      manufacturing_time_unit: Joi.string().allow(""),

      is_cod_available: Joi.boolean(),
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
      is_cod_available: Joi.boolean(),

      stormbreaker_uuid: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),

      request_uuid: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      error: LogisticModel.TATErrorSchemaResponse(),

      source: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      success: Joi.boolean(),

      identifier: Joi.string().allow(""),

      to_city: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsResponse()
      ),

      action: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      parent_id: Joi.string().allow(""),

      logistics: LogisticModel.LogisticsResponse(),

      is_active: Joi.boolean(),

      display_name: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      meta: LogisticModel.CountryMetaResponse(),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),
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
