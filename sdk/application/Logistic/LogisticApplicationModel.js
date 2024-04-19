const Joi = require("joi");

/**
 * @typedef CountryEntityResponse
 * @property {string} [display_name]
 * @property {boolean} [is_active]
 * @property {LogisticsResponse} [logistics]
 * @property {CountryMetaResponse} [meta]
 * @property {string} [name]
 * @property {string} [parent_id]
 * @property {string} [sub_type]
 * @property {string} [type]
 * @property {string} [uid]
 */

/**
 * @typedef CountryListResponse
 * @property {CountryEntityResponse[]} [results]
 */

/**
 * @typedef CountryMetaResponse
 * @property {string} [country_code]
 * @property {string} [isd_code]
 */

/**
 * @typedef DP
 * @property {string} [area_code]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [external_account_id]
 * @property {number} fm_priority
 * @property {string} [internal_account_id]
 * @property {number} lm_priority
 * @property {string[]} operations
 * @property {string} payment_mode
 * @property {number} rvp_priority
 * @property {string} [transport_mode]
 */

/**
 * @typedef GetZoneFromPincodeViewRequest
 * @property {string} country
 * @property {string} pincode
 */

/**
 * @typedef GetZoneFromPincodeViewResponse
 * @property {string} serviceability_type
 * @property {string[]} zones
 */

/**
 * @typedef LogisticsResponse
 * @property {Object} [dp]
 */

/**
 * @typedef PincodeApiResponse
 * @property {PincodeDataResponse[]} [data]
 * @property {PincodeErrorSchemaResponse} error
 * @property {boolean} success
 */

/**
 * @typedef PincodeDataResponse
 * @property {string} [display_name]
 * @property {PincodeErrorSchemaResponse} error
 * @property {PincodeLatLongData} [lat_long]
 * @property {PincodeMetaResponse} [meta]
 * @property {CountryMetaResponse} [meta_code]
 * @property {string} [name]
 * @property {PincodeParentsResponse[]} [parents]
 * @property {string} [sub_type]
 * @property {string} [uid]
 */

/**
 * @typedef PincodeErrorSchemaResponse
 * @property {string} [message]
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef PincodeLatLongData
 * @property {string[]} [coordinates]
 * @property {string} [type]
 */

/**
 * @typedef PincodeMetaResponse
 * @property {number} [internal_zone_id]
 * @property {string} [zone]
 */

/**
 * @typedef PincodeParentsResponse
 * @property {string} [display_name]
 * @property {string} [name]
 * @property {string} [sub_type]
 * @property {string} [uid]
 */

/**
 * @typedef ReAssignStoreRequest
 * @property {Object[]} articles
 * @property {Object} configuration
 * @property {string} identifier
 * @property {number[]} ignored_locations
 * @property {string} to_pincode
 */

/**
 * @typedef ReAssignStoreResponse
 * @property {Object[]} [assigned_stores]
 * @property {Object} error
 * @property {string} pystormbreaker_uuid
 * @property {boolean} success
 * @property {string} to_pincode
 */

/**
 * @typedef TATArticlesRequest
 * @property {TATCategoryRequest} [category]
 * @property {number} [manufacturing_time]
 * @property {string} [manufacturing_time_unit]
 */

/**
 * @typedef TATArticlesResponse
 * @property {number} [_manufacturing_time_seconds]
 * @property {TATCategoryRequest} [category]
 * @property {TATErrorSchemaResponse} [error]
 * @property {boolean} [is_cod_available]
 * @property {number} [manufacturing_time]
 * @property {string} [manufacturing_time_unit]
 * @property {TATPromiseResponse} [promise]
 */

/**
 * @typedef TATCategoryRequest
 * @property {number} [id]
 * @property {string} [level]
 */

/**
 * @typedef TATErrorSchemaResponse
 * @property {string} [message]
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef TATFormattedResponse
 * @property {string} [max]
 * @property {string} [min]
 */

/**
 * @typedef TATLocationDetailsRequest
 * @property {TATArticlesRequest[]} [articles]
 * @property {string} [from_pincode]
 * @property {number} [fulfillment_id]
 */

/**
 * @typedef TATLocationDetailsResponse
 * @property {TATArticlesResponse[]} [articles]
 * @property {string} [from_pincode]
 * @property {number} [fulfillment_id]
 */

/**
 * @typedef TATPromiseResponse
 * @property {TATFormattedResponse} [formatted]
 * @property {TATTimestampResponse} [timestamp]
 */

/**
 * @typedef TATTimestampResponse
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef TATViewRequest
 * @property {string} [action]
 * @property {string} [identifier]
 * @property {string} [journey]
 * @property {TATLocationDetailsRequest[]} [location_details]
 * @property {string} [source]
 * @property {string} [to_pincode]
 */

/**
 * @typedef TATViewResponse
 * @property {string} [action]
 * @property {TATErrorSchemaResponse} [error]
 * @property {string} [identifier]
 * @property {boolean} [is_cod_available]
 * @property {string} [journey]
 * @property {TATLocationDetailsResponse[]} [location_details]
 * @property {string} [payment_mode]
 * @property {string} [request_uuid]
 * @property {string} [source]
 * @property {string} [stormbreaker_uuid]
 * @property {boolean} [success]
 * @property {string} [to_city]
 * @property {string} [to_pincode]
 */

class LogisticApplicationModel {
  /** @returns {CountryEntityResponse} */
  static CountryEntityResponse() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      is_active: Joi.boolean(),
      logistics: LogisticApplicationModel.LogisticsResponse(),
      meta: LogisticApplicationModel.CountryMetaResponse(),
      name: Joi.string().allow(""),
      parent_id: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      type: Joi.string().allow(""),
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

  /** @returns {CountryMetaResponse} */
  static CountryMetaResponse() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      isd_code: Joi.string().allow(""),
    });
  }

  /** @returns {DP} */
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

  /** @returns {GetZoneFromPincodeViewRequest} */
  static GetZoneFromPincodeViewRequest() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetZoneFromPincodeViewResponse} */
  static GetZoneFromPincodeViewResponse() {
    return Joi.object({
      serviceability_type: Joi.string().allow("").required(),
      zones: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {LogisticsResponse} */
  static LogisticsResponse() {
    return Joi.object({
      dp: Joi.object().pattern(/\S/, LogisticApplicationModel.DP()),
    });
  }

  /** @returns {PincodeApiResponse} */
  static PincodeApiResponse() {
    return Joi.object({
      data: Joi.array().items(LogisticApplicationModel.PincodeDataResponse()),
      error: LogisticApplicationModel.PincodeErrorSchemaResponse().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PincodeDataResponse} */
  static PincodeDataResponse() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      error: LogisticApplicationModel.PincodeErrorSchemaResponse().required(),
      lat_long: LogisticApplicationModel.PincodeLatLongData(),
      meta: LogisticApplicationModel.PincodeMetaResponse(),
      meta_code: LogisticApplicationModel.CountryMetaResponse(),
      name: Joi.string().allow(""),
      parents: Joi.array().items(
        LogisticApplicationModel.PincodeParentsResponse()
      ),
      sub_type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeErrorSchemaResponse} */
  static PincodeErrorSchemaResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PincodeLatLongData} */
  static PincodeLatLongData() {
    return Joi.object({
      coordinates: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeMetaResponse} */
  static PincodeMetaResponse() {
    return Joi.object({
      internal_zone_id: Joi.number(),
      zone: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeParentsResponse} */
  static PincodeParentsResponse() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      name: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {ReAssignStoreRequest} */
  static ReAssignStoreRequest() {
    return Joi.object({
      articles: Joi.array().items(Joi.any()).required(),
      configuration: Joi.any().required(),
      identifier: Joi.string().allow("").required(),
      ignored_locations: Joi.array().items(Joi.number()).required(),
      to_pincode: Joi.string().allow("").required(),
    });
  }

  /** @returns {ReAssignStoreResponse} */
  static ReAssignStoreResponse() {
    return Joi.object({
      assigned_stores: Joi.array().items(Joi.any()),
      error: Joi.any().required(),
      pystormbreaker_uuid: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
      to_pincode: Joi.string().allow("").required(),
    });
  }

  /** @returns {TATArticlesRequest} */
  static TATArticlesRequest() {
    return Joi.object({
      category: LogisticApplicationModel.TATCategoryRequest(),
      manufacturing_time: Joi.number(),
      manufacturing_time_unit: Joi.string().allow(""),
    });
  }

  /** @returns {TATArticlesResponse} */
  static TATArticlesResponse() {
    return Joi.object({
      _manufacturing_time_seconds: Joi.number(),
      category: LogisticApplicationModel.TATCategoryRequest(),
      error: LogisticApplicationModel.TATErrorSchemaResponse(),
      is_cod_available: Joi.boolean(),
      manufacturing_time: Joi.number(),
      manufacturing_time_unit: Joi.string().allow(""),
      promise: LogisticApplicationModel.TATPromiseResponse(),
    });
  }

  /** @returns {TATCategoryRequest} */
  static TATCategoryRequest() {
    return Joi.object({
      id: Joi.number(),
      level: Joi.string().allow(""),
    });
  }

  /** @returns {TATErrorSchemaResponse} */
  static TATErrorSchemaResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {TATFormattedResponse} */
  static TATFormattedResponse() {
    return Joi.object({
      max: Joi.string().allow(""),
      min: Joi.string().allow(""),
    });
  }

  /** @returns {TATLocationDetailsRequest} */
  static TATLocationDetailsRequest() {
    return Joi.object({
      articles: Joi.array().items(
        LogisticApplicationModel.TATArticlesRequest()
      ),
      from_pincode: Joi.string().allow(""),
      fulfillment_id: Joi.number(),
    });
  }

  /** @returns {TATLocationDetailsResponse} */
  static TATLocationDetailsResponse() {
    return Joi.object({
      articles: Joi.array().items(
        LogisticApplicationModel.TATArticlesResponse()
      ),
      from_pincode: Joi.string().allow(""),
      fulfillment_id: Joi.number(),
    });
  }

  /** @returns {TATPromiseResponse} */
  static TATPromiseResponse() {
    return Joi.object({
      formatted: LogisticApplicationModel.TATFormattedResponse(),
      timestamp: LogisticApplicationModel.TATTimestampResponse(),
    });
  }

  /** @returns {TATTimestampResponse} */
  static TATTimestampResponse() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
    });
  }

  /** @returns {TATViewRequest} */
  static TATViewRequest() {
    return Joi.object({
      action: Joi.string().allow(""),
      identifier: Joi.string().allow(""),
      journey: Joi.string().allow(""),
      location_details: Joi.array().items(
        LogisticApplicationModel.TATLocationDetailsRequest()
      ),
      source: Joi.string().allow(""),
      to_pincode: Joi.string().allow(""),
    });
  }

  /** @returns {TATViewResponse} */
  static TATViewResponse() {
    return Joi.object({
      action: Joi.string().allow(""),
      error: LogisticApplicationModel.TATErrorSchemaResponse(),
      identifier: Joi.string().allow(""),
      is_cod_available: Joi.boolean(),
      journey: Joi.string().allow(""),
      location_details: Joi.array().items(
        LogisticApplicationModel.TATLocationDetailsResponse()
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
module.exports = LogisticApplicationModel;
