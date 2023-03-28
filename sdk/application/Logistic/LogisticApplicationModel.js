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
      message: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),

      type: Joi.string().allow("").allow(null),
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
      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),
    });
  }

  static PincodeDataResponse() {
    return Joi.object({
      uid: Joi.string().allow(""),

      meta_code: LogisticModel.CountryMetaResponse(),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),

      meta: LogisticModel.PincodeMetaResponse(),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      parents: Joi.array().items(LogisticModel.PincodeParentsResponse()),

      sub_type: Joi.string().allow(""),
    });
  }

  static PincodeApiResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.array().items(LogisticModel.PincodeDataResponse()),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),
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

      manufacturing_time: Joi.number(),

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
      source: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),

      action: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsRequest()
      ),
    });
  }

  static TATErrorSchemaResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),

      type: Joi.string().allow("").allow(null),
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
      manufacturing_time: Joi.number(),

      error: LogisticModel.TATErrorSchemaResponse(),

      category: LogisticModel.TATCategoryRequest(),

      _manufacturing_time_seconds: Joi.number(),

      promise: LogisticModel.TATPromiseResponse(),

      manufacturing_time_unit: Joi.string().allow(""),

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
      stormbreaker_uuid: Joi.string().allow(""),

      source: Joi.string().allow(""),

      error: LogisticModel.TATErrorSchemaResponse(),

      journey: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      success: Joi.boolean(),

      to_city: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),

      request_uuid: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      is_cod_available: Joi.boolean(),

      action: Joi.string().allow(""),

      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsResponse()
      ),
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

      logistics: LogisticModel.LogisticsResponse(),

      parent_id: Joi.string().allow(""),

      meta: LogisticModel.CountryMetaResponse(),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      type: Joi.string().allow(""),

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
