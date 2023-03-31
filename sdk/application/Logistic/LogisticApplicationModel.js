const Joi = require("joi");

class LogisticModel {
  static PincodeErrorSchemaResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),

      type: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),
    });
  }

  static CountryMetaResponse() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      isd_code: Joi.string().allow(""),
    });
  }

  static PincodeParentsResponse() {
    return Joi.object({
      sub_type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      meta_code: LogisticModel.CountryMetaResponse(),

      parents: Joi.array().items(LogisticModel.PincodeParentsResponse()),

      uid: Joi.string().allow(""),

      name: Joi.string().allow(""),

      meta: LogisticModel.PincodeMetaResponse(),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),

      display_name: Joi.string().allow(""),

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
      manufacturing_time_unit: Joi.string().allow(""),

      category: LogisticModel.TATCategoryRequest(),

      manufacturing_time: Joi.number(),
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
      to_pincode: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsRequest()
      ),

      action: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      source: Joi.string().allow(""),
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
      _manufacturing_time_seconds: Joi.number(),

      category: LogisticModel.TATCategoryRequest(),

      manufacturing_time_unit: Joi.string().allow(""),

      error: LogisticModel.TATErrorSchemaResponse(),

      promise: LogisticModel.TATPromiseResponse(),

      manufacturing_time: Joi.number(),

      is_cod_available: Joi.boolean(),
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
      to_pincode: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsResponse()
      ),

      action: Joi.string().allow(""),

      request_uuid: Joi.string().allow(""),

      to_city: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      error: LogisticModel.TATErrorSchemaResponse(),

      identifier: Joi.string().allow(""),

      success: Joi.boolean(),

      stormbreaker_uuid: Joi.string().allow(""),

      is_cod_available: Joi.boolean(),

      source: Joi.string().allow(""),
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

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      parent_id: Joi.string().allow(""),

      meta: LogisticModel.CountryMetaResponse(),

      logistics: LogisticModel.LogisticsResponse(),

      display_name: Joi.string().allow(""),

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
