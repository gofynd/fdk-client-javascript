const Joi = require("joi");

class LogisticModel {
  static CountryMetaResponse() {
    return Joi.object({
      isd_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

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
      sub_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PincodeDataResponse() {
    return Joi.object({
      meta_code: LogisticModel.CountryMetaResponse(),

      sub_type: Joi.string().allow(""),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),

      display_name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      meta: LogisticModel.PincodeMetaResponse(),

      parents: Joi.array().items(LogisticModel.PincodeParentsResponse()),

      name: Joi.string().allow(""),
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
      level: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static TATArticlesRequest() {
    return Joi.object({
      category: LogisticModel.TATCategoryRequest(),

      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),
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
      journey: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),

      action: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      source: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsRequest()
      ),
    });
  }

  static TATErrorSchemaResponse() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),
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
      category: LogisticModel.TATCategoryRequest(),

      error: LogisticModel.TATErrorSchemaResponse(),

      promise: LogisticModel.TATPromiseResponse(),

      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),

      _manufacturing_time_seconds: Joi.number(),

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
      journey: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      success: Joi.boolean(),

      stormbreaker_uuid: Joi.string().allow(""),

      error: LogisticModel.TATErrorSchemaResponse(),

      action: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      to_city: Joi.string().allow(""),

      source: Joi.string().allow(""),

      request_uuid: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsResponse()
      ),

      is_cod_available: Joi.boolean(),
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
      parent_id: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      logistics: LogisticModel.LogisticsResponse(),

      type: Joi.string().allow(""),

      meta: LogisticModel.CountryMetaResponse(),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),
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
