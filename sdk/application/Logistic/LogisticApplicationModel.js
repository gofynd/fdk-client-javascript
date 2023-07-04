const Joi = require("joi");

class LogisticModel {
  static PincodeErrorSchemaResponse() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),
    });
  }

  static CountryMetaResponse() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      isd_code: Joi.string().allow(""),
    });
  }

  static PincodeLatLongData() {
    return Joi.object({
      type: Joi.string().allow(""),

      coordinates: Joi.array().items(Joi.string().allow("")),
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

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static PincodeDataResponse() {
    return Joi.object({
      uid: Joi.string().allow(""),

      meta_code: LogisticModel.CountryMetaResponse(),

      lat_long: LogisticModel.PincodeLatLongData(),

      meta: LogisticModel.PincodeMetaResponse(),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),

      name: Joi.string().allow(""),

      parents: Joi.array().items(LogisticModel.PincodeParentsResponse()),

      sub_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
    });
  }

  static PincodeApiResponse() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      request_uuid: Joi.string().allow("").required(),

      error: LogisticModel.PincodeErrorSchemaResponse().required(),

      data: Joi.array().items(LogisticModel.PincodeDataResponse()),
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

      manufacturing_time: Joi.number(),

      category: LogisticModel.TATCategoryRequest(),
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
      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsRequest()
      ),

      action: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      source: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),
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
      type: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),
    });
  }

  static TATArticlesResponse() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),

      _manufacturing_time_seconds: Joi.number(),

      category: LogisticModel.TATCategoryRequest(),

      promise: LogisticModel.TATPromiseResponse(),

      error: LogisticModel.TATErrorSchemaResponse(),

      manufacturing_time: Joi.number(),

      is_cod_available: Joi.boolean(),
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
      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsResponse()
      ),

      stormbreaker_uuid: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      action: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      to_city: Joi.string().allow(""),

      success: Joi.boolean(),

      request_uuid: Joi.string().allow(""),

      error: LogisticModel.TATErrorSchemaResponse(),

      is_cod_available: Joi.boolean(),

      journey: Joi.string().allow(""),

      source: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),
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
      is_active: Joi.boolean(),

      type: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      parent_id: Joi.string().allow(""),

      meta: LogisticModel.CountryMetaResponse(),

      logistics: LogisticModel.LogisticsResponse(),

      name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

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

  static ReAssignStoreRequest() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),

      configuration: Joi.any().required(),

      articles: Joi.array().items(Joi.any()).required(),

      ignored_locations: Joi.array().items(Joi.string().allow("")).required(),

      to_pincode: Joi.string().allow("").required(),
    });
  }

  static ReAssignStoreResponse() {
    return Joi.object({
      error: Joi.any().required(),

      articles: Joi.array().items(Joi.any()),

      success: Joi.boolean().required(),

      to_pincode: Joi.string().allow("").required(),
    });
  }
}
module.exports = LogisticModel;
