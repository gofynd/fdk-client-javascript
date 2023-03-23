const Joi = require("joi");

class LogisticModel {
  static PincodeMetaResponse() {
    return Joi.object({
      zone: Joi.string().allow(""),

      internal_zone_id: Joi.number(),
    });
  }

  static CountryMetaResponse() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      isd_code: Joi.string().allow(""),
    });
  }

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

      uid: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),
    });
  }

  static PincodeDataResponse() {
    return Joi.object({
      meta: LogisticModel.PincodeMetaResponse(),

      display_name: Joi.string().allow(""),

      meta_code: LogisticModel.CountryMetaResponse(),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),

      name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      parents: Joi.array().items(LogisticModel.PincodeParentsResponse()),
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
      manufacturing_time: Joi.number(),

      category: LogisticModel.TATCategoryRequest(),

      manufacturing_time_unit: Joi.string().allow(""),
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
      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsRequest()
      ),

      identifier: Joi.string().allow(""),

      source: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      action: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),
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

  static TATArticlesResponse() {
    return Joi.object({
      _manufacturing_time_seconds: Joi.number(),

      category: LogisticModel.TATCategoryRequest(),

      is_cod_available: Joi.boolean(),

      error: LogisticModel.TATErrorSchemaResponse(),

      manufacturing_time: Joi.number(),

      promise: LogisticModel.TATPromiseResponse(),

      manufacturing_time_unit: Joi.string().allow(""),
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
      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsResponse()
      ),

      is_cod_available: Joi.boolean(),

      identifier: Joi.string().allow(""),

      source: Joi.string().allow(""),

      to_city: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      error: LogisticModel.TATErrorSchemaResponse(),

      action: Joi.string().allow(""),

      success: Joi.boolean(),

      payment_mode: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),

      request_uuid: Joi.string().allow(""),

      stormbreaker_uuid: Joi.string().allow(""),
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
      meta: LogisticModel.CountryMetaResponse(),

      display_name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      parent_id: Joi.string().allow(""),

      logistics: LogisticModel.LogisticsResponse(),

      name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),
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
      serviceability_type: Joi.string().allow("").required(),

      zones: Joi.array().items(Joi.string().allow("")).required(),
    });
  }
}
module.exports = LogisticModel;
