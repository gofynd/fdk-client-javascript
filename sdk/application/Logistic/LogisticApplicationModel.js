const Joi = require("joi");

class LogisticModel {
  static PincodeParentsResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static PincodeMetaResponse() {
    return Joi.object({
      internal_zone_id: Joi.number(),

      zone: Joi.string().allow(""),
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
      type: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),
    });
  }

  static PincodeDataResponse() {
    return Joi.object({
      parents: Joi.array().items(LogisticModel.PincodeParentsResponse()),

      uid: Joi.string().allow(""),

      meta: LogisticModel.PincodeMetaResponse(),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      meta_code: LogisticModel.CountryMetaResponse(),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),

      sub_type: Joi.string().allow(""),
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
      fulfillment_id: Joi.number(),

      from_pincode: Joi.string().allow(""),

      articles: Joi.array().items(LogisticModel.TATArticlesRequest()),
    });
  }

  static TATViewRequest() {
    return Joi.object({
      journey: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsRequest()
      ),

      action: Joi.string().allow(""),

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
      type: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),
    });
  }

  static TATArticlesResponse() {
    return Joi.object({
      promise: LogisticModel.TATPromiseResponse(),

      category: LogisticModel.TATCategoryRequest(),

      manufacturing_time: Joi.number(),

      error: LogisticModel.TATErrorSchemaResponse(),

      is_cod_available: Joi.boolean(),

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
      stormbreaker_uuid: Joi.string().allow(""),

      success: Joi.boolean(),

      payment_mode: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsResponse()
      ),

      action: Joi.string().allow(""),

      request_uuid: Joi.string().allow(""),

      error: LogisticModel.TATErrorSchemaResponse(),

      is_cod_available: Joi.boolean(),

      identifier: Joi.string().allow(""),

      source: Joi.string().allow(""),

      to_city: Joi.string().allow(""),
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
      uid: Joi.string().allow(""),

      meta: LogisticModel.CountryMetaResponse(),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      parent_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      logistics: LogisticModel.LogisticsResponse(),

      is_active: Joi.boolean(),

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
