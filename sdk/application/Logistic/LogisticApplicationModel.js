const Joi = require("joi");

/**
 * @typedef ListViewResponseV2
 * @property {ListViewItemsV2[]} items
 * @property {ZoneDataItem} page
 */

/**
 * @typedef ListViewItemsV2
 * @property {string} zone_id
 * @property {string} name
 * @property {string} type
 * @property {GeoArea[]} geo_areas
 * @property {string} slug
 * @property {ListViewProductV2} stores
 * @property {boolean} is_active
 * @property {ListViewProductV2} product
 * @property {number} company_id
 * @property {string} application_id
 * @property {string} created_by
 * @property {string} created_on
 * @property {string} modified_by
 * @property {string} modified_on
 * @property {string} [stage]
 * @property {Summary} [summary]
 */

/**
 * @typedef GeoArea
 * @property {string} id
 * @property {string} [type]
 * @property {string} name
 */

/**
 * @typedef ListViewProductV2
 * @property {string} type
 * @property {string[]} values
 */

/**
 * @typedef Summary
 * @property {number} [stores_count]
 * @property {number} [products_count]
 * @property {Region[]} [regions]
 */

/**
 * @typedef ZoneDataItem
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} size
 * @property {number} current
 * @property {string} type
 */

/**
 * @typedef Region
 * @property {string} uid
 * @property {string} display_name
 * @property {string} sub_type
 * @property {string[]} parent_id
 * @property {string} parent_uid
 */

/**
 * @typedef GeoAreaGetResponseBody
 * @property {GeoAreaItemResponse[]} [items]
 * @property {Page2} [page]
 */

/**
 * @typedef GeoAreaItemResponse
 * @property {string} geoarea_id
 * @property {string} name
 * @property {string} slug
 * @property {boolean} is_active
 * @property {string} region_type
 * @property {string} [type]
 * @property {AreaExpandedV2[]} [areas]
 * @property {string} created_on
 * @property {string} modified_on
 * @property {string} created_by
 * @property {string} modified_by
 */

/**
 * @typedef Page2
 * @property {number} size
 * @property {number} item_total
 * @property {string} type
 * @property {number} current
 * @property {boolean} has_next
 */

/**
 * @typedef AreaExpandedV2
 * @property {Country} country
 * @property {RegionV2[]} regions
 */

/**
 * @typedef RegionV2
 * @property {string} [uid]
 * @property {string} [display_name]
 * @property {string} [sub_type]
 * @property {string[]} [parent_id]
 */

/**
 * @typedef Country
 * @property {string} uid
 * @property {string} display_name
 */

/**
 * @typedef ServiceabilityZoneErrorResponse
 * @property {ServiceabilityErrorResponse[]} error
 */

/**
 * @typedef ServiceabilityErrorResponse
 * @property {string} message
 * @property {string} value
 * @property {string} type
 */

/**
 * @typedef GetStoreResponse
 * @property {StoreItemResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef StoreItemResponse
 * @property {number} [id]
 * @property {string} [store_type]
 * @property {string} [fulfillment_type]
 * @property {number} [processing_time]
 * @property {string[]} [tags]
 * @property {number} [company_id]
 * @property {number} [latitude]
 * @property {number} [longitude]
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
 * @property {string} [landmark] - A string representing a prominent nearby
 *   landmark that aids in locating the address.
 * @property {string} [pincode] - A string indicating the postal code or PIN
 *   code of the address area.
 * @property {string} [sector] - A string specifying the sector or district of
 *   the address if applicable.
 * @property {string} [city] - A string denoting the city or municipality of the address.
 * @property {string} [state] - A string indicating the state or province of the address.
 * @property {string} [name] - A string representing the recipient's name or the
 *   organization name associated with the address.
 * @property {string} [phone] - An integer representing the recipient's contact
 *   phone number.
 * @property {string} [email] - A string containing the recipient's email address.
 */

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

/**
 * @typedef CountryHierarchy
 * @property {string} [name]
 * @property {string} [slug]
 */

/**
 * @typedef CurrencyObject
 * @property {string} [code]
 * @property {string} [name]
 * @property {string} [symbol]
 */

/**
 * @typedef CountryObject
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string[]} [timezones]
 * @property {CountryHierarchy[]} [hierarchy]
 * @property {string} [phone_code]
 * @property {string} [latitude]
 * @property {string} [longitude]
 * @property {CurrencyObject} [currency]
 * @property {string} [type]
 */

/**
 * @typedef GetCountries
 * @property {CountryObject[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef GetOneOrAllPath
 * @property {string} [locality_type]
 * @property {string} [locality_value]
 */

/**
 * @typedef GetOneOrAllQuery
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [sector]
 */

/**
 * @typedef GetOneOrAllParams
 * @property {GetOneOrAllPath} [path]
 * @property {GetOneOrAllQuery} [query]
 */

/**
 * @typedef GetOneOrAll
 * @property {string} [operation_id]
 * @property {GetOneOrAllParams} [params]
 */

/**
 * @typedef LengthValidation
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef FieldValidationRegex
 * @property {string} [value]
 * @property {LengthValidation} [length]
 */

/**
 * @typedef FieldValidation
 * @property {string} [type]
 * @property {FieldValidationRegex} [regex]
 */

/**
 * @typedef GetCountryFieldsAddressValues
 * @property {GetOneOrAll} [get_one]
 * @property {GetOneOrAll} [get_all]
 */

/**
 * @typedef GetCountryFieldsAddress
 * @property {string} display_name
 * @property {string} slug
 * @property {boolean} required
 * @property {boolean} [edit]
 * @property {string} input
 * @property {FieldValidation} [validation]
 * @property {GetCountryFieldsAddressValues} [values]
 * @property {string} [error_text]
 */

/**
 * @typedef GetCountryFieldsAddressTemplate
 * @property {string} checkout_form
 * @property {string} store_os_form
 * @property {string} default_display
 */

/**
 * @typedef GetCountryFields
 * @property {GetCountryFieldsAddress[]} address
 * @property {string[]} serviceability_fields
 * @property {GetCountryFieldsAddressTemplate} address_template
 */

/**
 * @typedef GetCountry
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string[]} [timezones]
 * @property {CountryHierarchy[]} [hierarchy]
 * @property {string} [phone_code]
 * @property {string} [latitude]
 * @property {string} [longitude]
 * @property {CurrencyObject} [currency]
 * @property {string} [type]
 * @property {GetCountryFields} [fields]
 */

/**
 * @typedef Page
 * @property {boolean} [has_next]
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_previous]
 * @property {number} [current]
 * @property {string} [type]
 */

/**
 * @typedef Localities
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string[]} [parent_ids]
 * @property {string} [type]
 * @property {LocalityParent[]} [localities]
 */

/**
 * @typedef LocalityParent
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string[]} [parent_ids]
 * @property {string} [type]
 */

/**
 * @typedef GetLocalities
 * @property {Localities[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef GetLocality
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string[]} [parent_ids]
 * @property {string} [type]
 * @property {LocalityParent[]} [localities]
 */

/**
 * @typedef ErrorResponse
 * @property {string} [error]
 */

class LogisticApplicationModel {
  /** @returns {ListViewResponseV2} */
  static ListViewResponseV2() {
    return Joi.object({
      items: Joi.array()
        .items(LogisticApplicationModel.ListViewItemsV2())
        .required(),
      page: LogisticApplicationModel.ZoneDataItem().required(),
    });
  }

  /** @returns {ListViewItemsV2} */
  static ListViewItemsV2() {
    return Joi.object({
      zone_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      geo_areas: Joi.array()
        .items(LogisticApplicationModel.GeoArea())
        .required(),
      slug: Joi.string().allow("").required(),
      stores: LogisticApplicationModel.ListViewProductV2().required(),
      is_active: Joi.boolean().required(),
      product: LogisticApplicationModel.ListViewProductV2().required(),
      company_id: Joi.number().required(),
      application_id: Joi.string().allow("").required(),
      created_by: Joi.string().allow("").required(),
      created_on: Joi.string().allow("").required(),
      modified_by: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      stage: Joi.string().allow(""),
      summary: LogisticApplicationModel.Summary(),
    });
  }

  /** @returns {GeoArea} */
  static GeoArea() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      type: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {ListViewProductV2} */
  static ListViewProductV2() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {Summary} */
  static Summary() {
    return Joi.object({
      stores_count: Joi.number(),
      products_count: Joi.number(),
      regions: Joi.array().items(LogisticApplicationModel.Region()),
    });
  }

  /** @returns {ZoneDataItem} */
  static ZoneDataItem() {
    return Joi.object({
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      current: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {Region} */
  static Region() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
      display_name: Joi.string().allow("").required(),
      sub_type: Joi.string().allow("").required(),
      parent_id: Joi.array().items(Joi.string().allow("")).required(),
      parent_uid: Joi.string().allow("").required(),
    });
  }

  /** @returns {GeoAreaGetResponseBody} */
  static GeoAreaGetResponseBody() {
    return Joi.object({
      items: Joi.array().items(LogisticApplicationModel.GeoAreaItemResponse()),
      page: LogisticApplicationModel.Page2(),
    });
  }

  /** @returns {GeoAreaItemResponse} */
  static GeoAreaItemResponse() {
    return Joi.object({
      geoarea_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      region_type: Joi.string().allow("").required(),
      type: Joi.string().allow(""),
      areas: Joi.array().items(LogisticApplicationModel.AreaExpandedV2()),
      created_on: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      created_by: Joi.string().allow("").required(),
      modified_by: Joi.string().allow("").required(),
    });
  }

  /** @returns {Page2} */
  static Page2() {
    return Joi.object({
      size: Joi.number().required(),
      item_total: Joi.number().required(),
      type: Joi.string().allow("").required(),
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
    });
  }

  /** @returns {AreaExpandedV2} */
  static AreaExpandedV2() {
    return Joi.object({
      country: LogisticApplicationModel.Country().required(),
      regions: Joi.array()
        .items(LogisticApplicationModel.RegionV2())
        .required(),
    });
  }

  /** @returns {RegionV2} */
  static RegionV2() {
    return Joi.object({
      uid: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      parent_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Country} */
  static Country() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
      display_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {ServiceabilityZoneErrorResponse} */
  static ServiceabilityZoneErrorResponse() {
    return Joi.object({
      error: Joi.array()
        .items(LogisticApplicationModel.ServiceabilityErrorResponse())
        .required(),
    });
  }

  /** @returns {ServiceabilityErrorResponse} */
  static ServiceabilityErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetStoreResponse} */
  static GetStoreResponse() {
    return Joi.object({
      items: Joi.array().items(LogisticApplicationModel.StoreItemResponse()),
      page: LogisticApplicationModel.Page(),
    });
  }

  /** @returns {StoreItemResponse} */
  static StoreItemResponse() {
    return Joi.object({
      id: Joi.number(),
      store_type: Joi.string().allow(""),
      fulfillment_type: Joi.string().allow(""),
      processing_time: Joi.number(),
      tags: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.number(),
      latitude: Joi.number(),
      longitude: Joi.number(),
    });
  }

  /** @returns {ValidateAddressRequest} */
  static ValidateAddressRequest() {
    return Joi.object({
      address: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      area: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      sector: Joi.string().allow(""),
      city: Joi.string().allow(""),
      state: Joi.string().allow(""),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      email: Joi.string().allow(""),
    });
  }

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

  /** @returns {CountryHierarchy} */
  static CountryHierarchy() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
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

  /** @returns {CountryObject} */
  static CountryObject() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      iso2: Joi.string().allow(""),
      iso3: Joi.string().allow(""),
      timezones: Joi.array().items(Joi.string().allow("")),
      hierarchy: Joi.array().items(LogisticApplicationModel.CountryHierarchy()),
      phone_code: Joi.string().allow(""),
      latitude: Joi.string().allow(""),
      longitude: Joi.string().allow(""),
      currency: LogisticApplicationModel.CurrencyObject(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {GetCountries} */
  static GetCountries() {
    return Joi.object({
      items: Joi.array().items(LogisticApplicationModel.CountryObject()),
      page: LogisticApplicationModel.Page(),
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
      country: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").allow(null),
      sector: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {GetOneOrAllParams} */
  static GetOneOrAllParams() {
    return Joi.object({
      path: LogisticApplicationModel.GetOneOrAllPath(),
      query: LogisticApplicationModel.GetOneOrAllQuery(),
    });
  }

  /** @returns {GetOneOrAll} */
  static GetOneOrAll() {
    return Joi.object({
      operation_id: Joi.string().allow(""),
      params: LogisticApplicationModel.GetOneOrAllParams(),
    });
  }

  /** @returns {LengthValidation} */
  static LengthValidation() {
    return Joi.object({
      min: Joi.number().allow(null),
      max: Joi.number().allow(null),
    });
  }

  /** @returns {FieldValidationRegex} */
  static FieldValidationRegex() {
    return Joi.object({
      value: Joi.string().allow(""),
      length: LogisticApplicationModel.LengthValidation(),
    });
  }

  /** @returns {FieldValidation} */
  static FieldValidation() {
    return Joi.object({
      type: Joi.string().allow(""),
      regex: LogisticApplicationModel.FieldValidationRegex(),
    });
  }

  /** @returns {GetCountryFieldsAddressValues} */
  static GetCountryFieldsAddressValues() {
    return Joi.object({
      get_one: LogisticApplicationModel.GetOneOrAll(),
      get_all: LogisticApplicationModel.GetOneOrAll(),
    });
  }

  /** @returns {GetCountryFieldsAddress} */
  static GetCountryFieldsAddress() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      required: Joi.boolean().required(),
      edit: Joi.boolean(),
      input: Joi.string().allow("").required(),
      validation: LogisticApplicationModel.FieldValidation(),
      values: LogisticApplicationModel.GetCountryFieldsAddressValues(),
      error_text: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {GetCountryFieldsAddressTemplate} */
  static GetCountryFieldsAddressTemplate() {
    return Joi.object({
      checkout_form: Joi.string().allow("").required(),
      store_os_form: Joi.string().allow("").required(),
      default_display: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetCountryFields} */
  static GetCountryFields() {
    return Joi.object({
      address: Joi.array()
        .items(LogisticApplicationModel.GetCountryFieldsAddress())
        .required(),
      serviceability_fields: Joi.array()
        .items(Joi.string().allow(""))
        .required(),
      address_template: LogisticApplicationModel.GetCountryFieldsAddressTemplate().required(),
    });
  }

  /** @returns {GetCountry} */
  static GetCountry() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      iso2: Joi.string().allow(""),
      iso3: Joi.string().allow(""),
      timezones: Joi.array().items(Joi.string().allow("")),
      hierarchy: Joi.array().items(LogisticApplicationModel.CountryHierarchy()),
      phone_code: Joi.string().allow(""),
      latitude: Joi.string().allow(""),
      longitude: Joi.string().allow(""),
      currency: LogisticApplicationModel.CurrencyObject(),
      type: Joi.string().allow(""),
      fields: LogisticApplicationModel.GetCountryFields(),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      has_next: Joi.boolean(),
      size: Joi.number(),
      item_total: Joi.number(),
      has_previous: Joi.boolean(),
      current: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {Localities} */
  static Localities() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      parent_ids: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      localities: Joi.array().items(LogisticApplicationModel.LocalityParent()),
    });
  }

  /** @returns {LocalityParent} */
  static LocalityParent() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      parent_ids: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
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
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      parent_ids: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      localities: Joi.array().items(LogisticApplicationModel.LocalityParent()),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }
}
module.exports = LogisticApplicationModel;
