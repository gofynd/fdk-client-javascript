const Joi = require("joi");

class LogisticModel {
  static CountryEntityResponse() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      is_active: Joi.boolean(),
      logistics: LogisticModel.LogisticsResponse(),
      meta: LogisticModel.CountryMetaResponse(),
      name: Joi.string().allow(""),
      parent_id: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }
  static CountryListResponse() {
    return Joi.object({
      results: Joi.array().items(LogisticModel.CountryEntityResponse()),
    });
  }
  static CountryMetaResponse() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      isd_code: Joi.string().allow(""),
    });
  }
  static DP() {
    return Joi.object({
      area_code: Joi.string().allow("").allow(null),
      assign_dp_from_sb: Joi.boolean(),
      external_account_id: Joi.string().allow("").allow(null),
      fm_priority: Joi.number().required(),
      internal_account_id: Joi.string().allow(""),
      lm_priority: Joi.number().required(),
      operations: Joi.array().items(Joi.string().allow("")).required(),
      payment_mode: Joi.string().allow("").required(),
      rvp_priority: Joi.number().required(),
      transport_mode: Joi.string().allow(""),
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
  static LogisticsResponse() {
    return Joi.object({
      dp: Joi.object().pattern(/\S/, LogisticModel.DP()),
    });
  }
  static PincodeApiResponse() {
    return Joi.object({
      data: Joi.array().items(LogisticModel.PincodeDataResponse()),
      error: LogisticModel.PincodeErrorSchemaResponse().required(),
      success: Joi.boolean().required(),
    });
  }
  static PincodeDataResponse() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      error: LogisticModel.PincodeErrorSchemaResponse().required(),
      lat_long: LogisticModel.PincodeLatLongData(),
      meta: LogisticModel.PincodeMetaResponse(),
      meta_code: LogisticModel.CountryMetaResponse(),
      name: Joi.string().allow(""),
      parents: Joi.array().items(LogisticModel.PincodeParentsResponse()),
      sub_type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }
  static PincodeErrorSchemaResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
    });
  }
  static PincodeLatLongData() {
    return Joi.object({
      coordinates: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
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
      display_name: Joi.string().allow(""),
      name: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }
  static ReAssignStoreRequest() {
    return Joi.object({
      articles: Joi.array().items(Joi.any()).required(),
      configuration: Joi.any().required(),
      identifier: Joi.string().allow("").required(),
      ignored_locations: Joi.array().items(Joi.string().allow("")).required(),
      to_pincode: Joi.string().allow("").required(),
    });
  }
  static ReAssignStoreResponse() {
    return Joi.object({
      articles: Joi.array().items(Joi.any()),
      error: Joi.any().required(),
      success: Joi.boolean().required(),
      to_pincode: Joi.string().allow("").required(),
    });
  }
  static TATArticlesRequest() {
    return Joi.object({
      category: LogisticModel.TATCategoryRequest(),
      manufacturing_time: Joi.number(),
      manufacturing_time_unit: Joi.string().allow(""),
    });
  }
  static TATArticlesResponse() {
    return Joi.object({
      _manufacturing_time_seconds: Joi.number(),
      category: LogisticModel.TATCategoryRequest(),
      error: LogisticModel.TATErrorSchemaResponse(),
      is_cod_available: Joi.boolean(),
      manufacturing_time: Joi.number(),
      manufacturing_time_unit: Joi.string().allow(""),
      promise: LogisticModel.TATPromiseResponse(),
    });
  }
  static TATCategoryRequest() {
    return Joi.object({
      id: Joi.number(),
      level: Joi.string().allow(""),
    });
  }
  static TATErrorSchemaResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
    });
  }
  static TATFormattedResponse() {
    return Joi.object({
      max: Joi.string().allow(""),
      min: Joi.string().allow(""),
    });
  }
  static TATLocationDetailsRequest() {
    return Joi.object({
      articles: Joi.array().items(LogisticModel.TATArticlesRequest()),
      from_pincode: Joi.string().allow(""),
      fulfillment_id: Joi.number(),
    });
  }
  static TATLocationDetailsResponse() {
    return Joi.object({
      articles: Joi.array().items(LogisticModel.TATArticlesResponse()),
      from_pincode: Joi.string().allow(""),
      fulfillment_id: Joi.number(),
    });
  }
  static TATPromiseResponse() {
    return Joi.object({
      formatted: LogisticModel.TATFormattedResponse(),
      timestamp: LogisticModel.TATTimestampResponse(),
    });
  }
  static TATTimestampResponse() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
    });
  }
  static TATViewRequest() {
    return Joi.object({
      action: Joi.string().allow(""),
      identifier: Joi.string().allow(""),
      journey: Joi.string().allow(""),
      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsRequest()
      ),
      source: Joi.string().allow(""),
      to_pincode: Joi.string().allow(""),
    });
  }
  static TATViewResponse() {
    return Joi.object({
      action: Joi.string().allow(""),
      error: LogisticModel.TATErrorSchemaResponse(),
      identifier: Joi.string().allow(""),
      is_cod_available: Joi.boolean(),
      journey: Joi.string().allow(""),
      location_details: Joi.array().items(
        LogisticModel.TATLocationDetailsResponse()
      ),
      payment_mode: Joi.string().allow(""),
      request_uuid: Joi.string().allow(""),
      source: Joi.string().allow(""),
      stormbreaker_uuid: Joi.string().allow(""),
      success: Joi.boolean(),
      to_city: Joi.string().allow(""),
      to_pincode: Joi.string().allow(""),
    });
  }
}
module.exports = LogisticModel;
