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
 * @typedef CountryHierarchy
 * @property {string} [name]
 * @property {string} [slug]
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
 * @typedef CountryObject
 * @property {CurrencyObject} [currency]
 * @property {string} [display_name]
 * @property {CountryHierarchy[]} [hierarchy]
 * @property {string} [id]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string} [latitude]
 * @property {string} [longitude]
 * @property {string} [name]
 * @property {string} [phone_code]
 * @property {string[]} [timezones]
 * @property {string} [type]
 */

/**
 * @typedef CurrencyObject
 * @property {string} [code]
 * @property {string} [name]
 * @property {string} [symbol]
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
 * @typedef ErrorResponse
 * @property {string} [error]
 */

/**
 * @typedef FieldValidation
 * @property {FieldValidationRegex} [regex]
 * @property {string} [type]
 */

/**
 * @typedef FieldValidationRegex
 * @property {LengthValidation} [length]
 * @property {string} [value]
 */

/**
 * @typedef GetCountries
 * @property {CountryObject[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef GetCountry
 * @property {CurrencyObject} [currency]
 * @property {string} [display_name]
 * @property {GetCountryFields} [fields]
 * @property {CountryHierarchy[]} [hierarchy]
 * @property {string} [id]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string} [latitude]
 * @property {string} [longitude]
 * @property {string} [name]
 * @property {string} [phone_code]
 * @property {string[]} [timezones]
 * @property {string} [type]
 */

/**
 * @typedef GetCountryFields
 * @property {GetCountryFieldsAddress[]} address
 * @property {GetCountryFieldsAddressTemplate} address_template
 * @property {string[]} serviceability_fields
 */

/**
 * @typedef GetCountryFieldsAddress
 * @property {string} display_name
 * @property {boolean} [edit]
 * @property {string} [error_text]
 * @property {string} input
 * @property {boolean} required
 * @property {string} slug
 * @property {FieldValidation} [validation]
 * @property {GetCountryFieldsAddressValues} [values]
 */

/**
 * @typedef GetCountryFieldsAddressTemplate
 * @property {string} checkout_form
 * @property {string} default_display
 * @property {string} store_os_form
 */

/**
 * @typedef GetCountryFieldsAddressValues
 * @property {GetOneOrAll} [get_all]
 * @property {GetOneOrAll} [get_one]
 */

/**
 * @typedef GetLocalities
 * @property {Localities[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef GetLocality
 * @property {string} [display_name]
 * @property {string} [id]
 * @property {LocalityParent[]} [localities]
 * @property {string} [name]
 * @property {string[]} [parent_ids]
 * @property {string} [type]
 */

/**
 * @typedef GetOneOrAll
 * @property {string} [operation_id]
 * @property {GetOneOrAllParams} [params]
 */

/**
 * @typedef GetOneOrAllParams
 * @property {GetOneOrAllPath} [path]
 * @property {GetOneOrAllQuery} [query]
 */

/**
 * @typedef GetOneOrAllPath
 * @property {string} [locality_type]
 * @property {string} [locality_value]
 */

/**
 * @typedef GetOneOrAllQuery
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [sector]
 * @property {string} [state]
 */

/**
 * @typedef GetStoreResponse
 * @property {StoreItemResponse[]} [items]
 * @property {Page} [page]
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
 * @typedef LengthValidation
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef Localities
 * @property {string} [display_name]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string[]} [parent_ids]
 * @property {string} [type]
 */

/**
 * @typedef LocalityParent
 * @property {string} [display_name]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string[]} [parent_ids]
 * @property {string} [type]
 */

/**
 * @typedef LogisticsResponse
 * @property {Object} [dp]
 */

/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
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
 * @typedef StoreItemResponse
 * @property {number} [company_id]
 * @property {string} [fulfillment_type]
 * @property {number} [id]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {number} [processing_time]
 * @property {string} [store_type]
 * @property {string[]} [tags]
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

/**
 * @typedef ValidateAddressRequest
 * @property {string} [address] - A string representing the complete address,
 *   combining address line 1, address line 2, area, landmark, sector, city,
 *   state, and pincode. This provides a comprehensive view of the address details.
 * @property {string} [address1] - A string representing the first line of the
 *   address, typically containing street or building information.
 * @property {string} [address2] - A string representing the second line of the
 *   address, which can be used for additional address details if needed.
 * @property {string} [area] - A string specifying the locality or area
 *   associated with the address.
 * @property {string} [city] - A string denoting the city or municipality of the address.
 * @property {string} [email] - A string containing the recipient's email address.
 * @property {string} [landmark] - A string representing a prominent nearby
 *   landmark that aids in locating the address.
 * @property {string} [name] - A string representing the recipient's name or the
 *   organization name associated with the address.
 * @property {string} [phone] - An integer representing the recipient's contact
 *   phone number.
 * @property {string} [pincode] - A string indicating the postal code or PIN
 *   code of the address area.
 * @property {string} [sector] - A string specifying the sector or district of
 *   the address if applicable.
 * @property {string} [state] - A string indicating the state or province of the address.
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

  /** @returns {CountryHierarchy} */
  static CountryHierarchy() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
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

  /** @returns {CountryObject} */
  static CountryObject() {
    return Joi.object({
      currency: LogisticApplicationModel.CurrencyObject(),
      display_name: Joi.string().allow(""),
      hierarchy: Joi.array().items(LogisticApplicationModel.CountryHierarchy()),
      id: Joi.string().allow(""),
      iso2: Joi.string().allow(""),
      iso3: Joi.string().allow(""),
      latitude: Joi.string().allow(""),
      longitude: Joi.string().allow(""),
      name: Joi.string().allow(""),
      phone_code: Joi.string().allow(""),
      timezones: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {CurrencyObject} */
  static CurrencyObject() {
    return Joi.object({
      code: Joi.string().allow(""),
      name: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
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

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  /** @returns {FieldValidation} */
  static FieldValidation() {
    return Joi.object({
      regex: LogisticApplicationModel.FieldValidationRegex(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {FieldValidationRegex} */
  static FieldValidationRegex() {
    return Joi.object({
      length: LogisticApplicationModel.LengthValidation(),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {GetCountries} */
  static GetCountries() {
    return Joi.object({
      items: Joi.array().items(LogisticApplicationModel.CountryObject()),
      page: LogisticApplicationModel.Page(),
    });
  }

  /** @returns {GetCountry} */
  static GetCountry() {
    return Joi.object({
      currency: LogisticApplicationModel.CurrencyObject(),
      display_name: Joi.string().allow(""),
      fields: LogisticApplicationModel.GetCountryFields(),
      hierarchy: Joi.array().items(LogisticApplicationModel.CountryHierarchy()),
      id: Joi.string().allow(""),
      iso2: Joi.string().allow(""),
      iso3: Joi.string().allow(""),
      latitude: Joi.string().allow(""),
      longitude: Joi.string().allow(""),
      name: Joi.string().allow(""),
      phone_code: Joi.string().allow(""),
      timezones: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {GetCountryFields} */
  static GetCountryFields() {
    return Joi.object({
      address: Joi.array()
        .items(LogisticApplicationModel.GetCountryFieldsAddress())
        .required(),
      address_template: LogisticApplicationModel.GetCountryFieldsAddressTemplate().required(),
      serviceability_fields: Joi.array()
        .items(Joi.string().allow(""))
        .required(),
    });
  }

  /** @returns {GetCountryFieldsAddress} */
  static GetCountryFieldsAddress() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),
      edit: Joi.boolean(),
      error_text: Joi.string().allow("").allow(null),
      input: Joi.string().allow("").required(),
      required: Joi.boolean().required(),
      slug: Joi.string().allow("").required(),
      validation: LogisticApplicationModel.FieldValidation(),
      values: LogisticApplicationModel.GetCountryFieldsAddressValues(),
    });
  }

  /** @returns {GetCountryFieldsAddressTemplate} */
  static GetCountryFieldsAddressTemplate() {
    return Joi.object({
      checkout_form: Joi.string().allow("").required(),
      default_display: Joi.string().allow("").required(),
      store_os_form: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetCountryFieldsAddressValues} */
  static GetCountryFieldsAddressValues() {
    return Joi.object({
      get_all: LogisticApplicationModel.GetOneOrAll(),
      get_one: LogisticApplicationModel.GetOneOrAll(),
    });
  }

  /** @returns {GetLocalities} */
  static GetLocalities() {
    return Joi.object({
      items: Joi.array().items(LogisticApplicationModel.Localities()),
      page: LogisticApplicationModel.Page(),
    });
  }

  /** @returns {GetLocality} */
  static GetLocality() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      id: Joi.string().allow(""),
      localities: Joi.array().items(LogisticApplicationModel.LocalityParent()),
      name: Joi.string().allow(""),
      parent_ids: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {GetOneOrAll} */
  static GetOneOrAll() {
    return Joi.object({
      operation_id: Joi.string().allow(""),
      params: LogisticApplicationModel.GetOneOrAllParams(),
    });
  }

  /** @returns {GetOneOrAllParams} */
  static GetOneOrAllParams() {
    return Joi.object({
      path: LogisticApplicationModel.GetOneOrAllPath(),
      query: LogisticApplicationModel.GetOneOrAllQuery(),
    });
  }

  /** @returns {GetOneOrAllPath} */
  static GetOneOrAllPath() {
    return Joi.object({
      locality_type: Joi.string().allow(""),
      locality_value: Joi.string().allow(""),
    });
  }

  /** @returns {GetOneOrAllQuery} */
  static GetOneOrAllQuery() {
    return Joi.object({
      city: Joi.string().allow("").allow(null),
      country: Joi.string().allow("").allow(null),
      sector: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {GetStoreResponse} */
  static GetStoreResponse() {
    return Joi.object({
      items: Joi.array().items(LogisticApplicationModel.StoreItemResponse()),
      page: LogisticApplicationModel.Page(),
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

  /** @returns {LengthValidation} */
  static LengthValidation() {
    return Joi.object({
      max: Joi.number().allow(null),
      min: Joi.number().allow(null),
    });
  }

  /** @returns {Localities} */
  static Localities() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      parent_ids: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {LocalityParent} */
  static LocalityParent() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      parent_ids: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {LogisticsResponse} */
  static LogisticsResponse() {
    return Joi.object({
      dp: Joi.object().pattern(/\S/, LogisticApplicationModel.DP()),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
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

  /** @returns {StoreItemResponse} */
  static StoreItemResponse() {
    return Joi.object({
      company_id: Joi.number(),
      fulfillment_type: Joi.string().allow(""),
      id: Joi.number(),
      latitude: Joi.number(),
      longitude: Joi.number(),
      processing_time: Joi.number(),
      store_type: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {ValidateAddressRequest} */
  static ValidateAddressRequest() {
    return Joi.object({
      address: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      area: Joi.string().allow(""),
      city: Joi.string().allow(""),
      email: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      sector: Joi.string().allow(""),
      state: Joi.string().allow(""),
    });
  }
}
module.exports = LogisticApplicationModel;
