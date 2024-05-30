const Joi = require("joi");

/**
 * @typedef PincodeParentsResponse
 * @property {string} [sub_type]
 * @property {string} [display_name]
 * @property {string} [name]
 * @property {string} [uid]
 */

/**
 * @typedef PincodeMetaResponse
 * @property {string} [zone]
 * @property {number} [internal_zone_id]
 */

/**
 * @typedef PincodeErrorSchemaResponse
 * @property {string} [message]
 * @property {string} [value]
 * @property {string} [type]
 */

/**
 * @typedef CountryMetaResponse
 * @property {string} [country_code]
 * @property {string} [isd_code]
 */

/**
 * @typedef PincodeLatLongData
 * @property {string} [type]
 * @property {string[]} [coordinates]
 */

/**
 * @typedef PincodeDataResponse
 * @property {PincodeParentsResponse[]} [parents]
 * @property {PincodeMetaResponse} [meta]
 * @property {string} [display_name]
 * @property {PincodeErrorSchemaResponse} error
 * @property {CountryMetaResponse} [meta_code]
 * @property {PincodeLatLongData} [lat_long]
 * @property {string} [sub_type]
 * @property {string} [name]
 * @property {string} [uid]
 */

/**
 * @typedef PincodeApiResponse
 * @property {boolean} success
 * @property {PincodeDataResponse[]} [data]
 * @property {PincodeErrorSchemaResponse} error
 */

/**
 * @typedef TATCategoryRequest
 * @property {string} [level]
 * @property {number} [id]
 */

/**
 * @typedef TATArticlesRequest
 * @property {TATCategoryRequest} [category]
 * @property {string} [manufacturing_time_unit]
 * @property {number} [manufacturing_time]
 */

/**
 * @typedef TATLocationDetailsRequest
 * @property {number} [fulfillment_id]
 * @property {string} [from_pincode]
 * @property {TATArticlesRequest[]} [articles]
 */

/**
 * @typedef TATViewRequest
 * @property {string} [to_pincode]
 * @property {string} [source]
 * @property {string} [action]
 * @property {string} [identifier]
 * @property {TATLocationDetailsRequest[]} [location_details]
 * @property {string} [journey]
 */

/**
 * @typedef TATErrorSchemaResponse
 * @property {string} [message]
 * @property {string} [value]
 * @property {string} [type]
 */

/**
 * @typedef TATTimestampResponse
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef TATFormattedResponse
 * @property {string} [min]
 * @property {string} [max]
 */

/**
 * @typedef TATPromiseResponse
 * @property {TATTimestampResponse} [timestamp]
 * @property {TATFormattedResponse} [formatted]
 */

/**
 * @typedef TATArticlesResponse
 * @property {string} [manufacturing_time_unit]
 * @property {TATErrorSchemaResponse} [error]
 * @property {boolean} [is_cod_available]
 * @property {TATPromiseResponse} [promise]
 * @property {number} [manufacturing_time]
 * @property {TATCategoryRequest} [category]
 * @property {number} [_manufacturing_time_seconds]
 */

/**
 * @typedef TATLocationDetailsResponse
 * @property {number} [fulfillment_id]
 * @property {string} [from_pincode]
 * @property {TATArticlesResponse[]} [articles]
 */

/**
 * @typedef TATViewResponse
 * @property {string} [to_pincode]
 * @property {string} [request_uuid]
 * @property {string} [payment_mode]
 * @property {boolean} [success]
 * @property {TATErrorSchemaResponse} [error]
 * @property {boolean} [is_cod_available]
 * @property {string} [source]
 * @property {string} [action]
 * @property {string} [stormbreaker_uuid]
 * @property {string} [to_city]
 * @property {string} [identifier]
 * @property {TATLocationDetailsResponse[]} [location_details]
 * @property {string} [journey]
 */

/**
 * @typedef DP
 * @property {number} fm_priority
 * @property {number} lm_priority
 * @property {number} rvp_priority
 * @property {string} payment_mode
 * @property {string[]} operations
 * @property {string} [area_code]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [internal_account_id]
 * @property {string} [external_account_id]
 * @property {string} [transport_mode]
 */

/**
 * @typedef LogisticsResponse
 * @property {Object} [dp]
 */

/**
 * @typedef CountryEntityResponse
 * @property {CountryMetaResponse} [meta]
 * @property {LogisticsResponse} [logistics]
 * @property {string} [display_name]
 * @property {string} [type]
 * @property {boolean} [is_active]
 * @property {string} [parent_id]
 * @property {string} [sub_type]
 * @property {string} [name]
 * @property {string} [uid]
 */

/**
 * @typedef CountryListResponse
 * @property {CountryEntityResponse[]} [results]
 */

/**
 * @typedef GetZoneFromPincodeViewRequest
 * @property {string} pincode
 * @property {string} country
 */

/**
 * @typedef GetZoneFromPincodeViewResponse
 * @property {string} serviceability_type
 * @property {string[]} zones
 */

/**
 * @typedef ReAssignStoreRequest
 * @property {Object} configuration
 * @property {string} to_pincode
 * @property {number[]} ignored_locations
 * @property {string} identifier
 * @property {Object[]} articles
 */

/**
 * @typedef ReAssignStoreResponse
 * @property {string} to_pincode
 * @property {string} pystormbreaker_uuid
 * @property {boolean} success
 * @property {Object} error
 * @property {Object[]} [assigned_stores]
 */

class LogisticApplicationModel {
  /** @returns {PincodeParentsResponse} */
  static PincodeParentsResponse() {
    return Joi.object({
      sub_type: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      name: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeMetaResponse} */
  static PincodeMetaResponse() {
    return Joi.object({
      zone: Joi.string().allow(""),
      internal_zone_id: Joi.number(),
    });
  }

  /** @returns {PincodeErrorSchemaResponse} */
  static PincodeErrorSchemaResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CountryMetaResponse} */
  static CountryMetaResponse() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      isd_code: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeLatLongData} */
  static PincodeLatLongData() {
    return Joi.object({
      type: Joi.string().allow(""),
      coordinates: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PincodeDataResponse} */
  static PincodeDataResponse() {
    return Joi.object({
      parents: Joi.array().items(
        LogisticApplicationModel.PincodeParentsResponse()
      ),
      meta: LogisticApplicationModel.PincodeMetaResponse(),
      display_name: Joi.string().allow(""),
      error: LogisticApplicationModel.PincodeErrorSchemaResponse().required(),
      meta_code: LogisticApplicationModel.CountryMetaResponse(),
      lat_long: LogisticApplicationModel.PincodeLatLongData(),
      sub_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeApiResponse} */
  static PincodeApiResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      data: Joi.array().items(LogisticApplicationModel.PincodeDataResponse()),
      error: LogisticApplicationModel.PincodeErrorSchemaResponse().required(),
    });
  }

  /** @returns {TATCategoryRequest} */
  static TATCategoryRequest() {
    return Joi.object({
      level: Joi.string().allow(""),
      id: Joi.number(),
    });
  }

  /** @returns {TATArticlesRequest} */
  static TATArticlesRequest() {
    return Joi.object({
      category: LogisticApplicationModel.TATCategoryRequest(),
      manufacturing_time_unit: Joi.string().allow(""),
      manufacturing_time: Joi.number(),
    });
  }

  /** @returns {TATLocationDetailsRequest} */
  static TATLocationDetailsRequest() {
    return Joi.object({
      fulfillment_id: Joi.number(),
      from_pincode: Joi.string().allow(""),
      articles: Joi.array().items(
        LogisticApplicationModel.TATArticlesRequest()
      ),
    });
  }

  /** @returns {TATViewRequest} */
  static TATViewRequest() {
    return Joi.object({
      to_pincode: Joi.string().allow(""),
      source: Joi.string().allow(""),
      action: Joi.string().allow(""),
      identifier: Joi.string().allow(""),
      location_details: Joi.array().items(
        LogisticApplicationModel.TATLocationDetailsRequest()
      ),
      journey: Joi.string().allow(""),
    });
  }

  /** @returns {TATErrorSchemaResponse} */
  static TATErrorSchemaResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {TATTimestampResponse} */
  static TATTimestampResponse() {
    return Joi.object({
      min: Joi.number(),
      max: Joi.number(),
    });
  }

  /** @returns {TATFormattedResponse} */
  static TATFormattedResponse() {
    return Joi.object({
      min: Joi.string().allow(""),
      max: Joi.string().allow(""),
    });
  }

  /** @returns {TATPromiseResponse} */
  static TATPromiseResponse() {
    return Joi.object({
      timestamp: LogisticApplicationModel.TATTimestampResponse(),
      formatted: LogisticApplicationModel.TATFormattedResponse(),
    });
  }

  /** @returns {TATArticlesResponse} */
  static TATArticlesResponse() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),
      error: LogisticApplicationModel.TATErrorSchemaResponse(),
      is_cod_available: Joi.boolean(),
      promise: LogisticApplicationModel.TATPromiseResponse(),
      manufacturing_time: Joi.number(),
      category: LogisticApplicationModel.TATCategoryRequest(),
      _manufacturing_time_seconds: Joi.number(),
    });
  }

  /** @returns {TATLocationDetailsResponse} */
  static TATLocationDetailsResponse() {
    return Joi.object({
      fulfillment_id: Joi.number(),
      from_pincode: Joi.string().allow(""),
      articles: Joi.array().items(
        LogisticApplicationModel.TATArticlesResponse()
      ),
    });
  }

  /** @returns {TATViewResponse} */
  static TATViewResponse() {
    return Joi.object({
      to_pincode: Joi.string().allow(""),
      request_uuid: Joi.string().allow(""),
      payment_mode: Joi.string().allow(""),
      success: Joi.boolean(),
      error: LogisticApplicationModel.TATErrorSchemaResponse(),
      is_cod_available: Joi.boolean(),
      source: Joi.string().allow(""),
      action: Joi.string().allow(""),
      stormbreaker_uuid: Joi.string().allow(""),
      to_city: Joi.string().allow(""),
      identifier: Joi.string().allow(""),
      location_details: Joi.array().items(
        LogisticApplicationModel.TATLocationDetailsResponse()
      ),
      journey: Joi.string().allow(""),
    });
  }

  /** @returns {DP} */
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

  /** @returns {LogisticsResponse} */
  static LogisticsResponse() {
    return Joi.object({
      dp: Joi.object().pattern(/\S/, LogisticApplicationModel.DP()),
    });
  }

  /** @returns {CountryEntityResponse} */
  static CountryEntityResponse() {
    return Joi.object({
      meta: LogisticApplicationModel.CountryMetaResponse(),
      logistics: LogisticApplicationModel.LogisticsResponse(),
      display_name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      is_active: Joi.boolean(),
      parent_id: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {CountryListResponse} */
  static CountryListResponse() {
    return Joi.object({
      results: Joi.array().items(
        LogisticApplicationModel.CountryEntityResponse()
      ),
    });
  }

  /** @returns {GetZoneFromPincodeViewRequest} */
  static GetZoneFromPincodeViewRequest() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetZoneFromPincodeViewResponse} */
  static GetZoneFromPincodeViewResponse() {
    return Joi.object({
      serviceability_type: Joi.string().allow("").required(),
      zones: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {ReAssignStoreRequest} */
  static ReAssignStoreRequest() {
    return Joi.object({
      configuration: Joi.any().required(),
      to_pincode: Joi.string().allow("").required(),
      ignored_locations: Joi.array().items(Joi.number()).required(),
      identifier: Joi.string().allow("").required(),
      articles: Joi.array().items(Joi.any()).required(),
    });
  }

  /** @returns {ReAssignStoreResponse} */
  static ReAssignStoreResponse() {
    return Joi.object({
      to_pincode: Joi.string().allow("").required(),
      pystormbreaker_uuid: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
      error: Joi.any().required(),
      assigned_stores: Joi.array().items(Joi.any()),
    });
  }
}
module.exports = LogisticApplicationModel;
