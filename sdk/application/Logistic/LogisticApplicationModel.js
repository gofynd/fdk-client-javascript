const Joi = require("joi");

class LogisticModel {
  static PincodeErrorSchemaResponse() {
    return Joi.object({
      value: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      type: Joi.string().allow("").allow(null),
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

  static PincodeParentsResponse() {
    return Joi.object({
      sub_type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PincodeDataResponse() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      meta: LogisticModel.PincodeMetaResponse(),

      name: Joi.string().allow(""),

      meta_code: LogisticModel.CountryMetaResponse(),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),

      uid: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      parents: Joi.array().items(LogisticModel.PincodeParentsResponse()),
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
      from_pincode: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      articles: Joi.array().items(LogisticModel.TATArticlesRequest()),
    });
  }

  static TATViewRequest() {
    return Joi.object({
      to_pincode: Joi.string().allow(""),

      action: Joi.string().allow(""),

      source: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsRequest()
      ),

      journey: Joi.string().allow(""),

      identifier: Joi.string().allow(""),
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

  static TATErrorSchemaResponse() {
    return Joi.object({
      value: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      type: Joi.string().allow("").allow(null),
    });
  }

  static TATArticlesResponse() {
    return Joi.object({
      is_cod_available: Joi.boolean(),

      category: LogisticModel.TATCategoryRequest(),

      manufacturing_time_unit: Joi.string().allow(""),

      _manufacturing_time_seconds: Joi.number(),

      promise: LogisticModel.TATPromiseResponse(),

      error: LogisticModel.TATErrorSchemaResponse(),

      manufacturing_time: Joi.number(),
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
      is_cod_available: Joi.boolean(),

      stormbreaker_uuid: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),

      action: Joi.string().allow(""),

      source: Joi.string().allow(""),

      success: Joi.boolean(),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsResponse()
      ),

      error: LogisticModel.TATErrorSchemaResponse(),

      request_uuid: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

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
      display_name: Joi.string().allow(""),

      meta: LogisticModel.CountryMetaResponse(),

      name: Joi.string().allow(""),

      parent_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      logistics: LogisticModel.LogisticsResponse(),
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
      serviceability_type: Joi.string().allow("").required(),

      zones: Joi.array().items(Joi.string().allow("")).required(),
    });
  }
}
module.exports = LogisticModel;
