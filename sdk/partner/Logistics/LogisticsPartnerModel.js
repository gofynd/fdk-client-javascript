const Joi = require("joi");

/**
 * @typedef BulkRegionServiceabilityTatRequest
 * @property {string} country
 * @property {string} region
 * @property {string} type
 */

/**
 * @typedef BulkRegionServiceabilityTatResponseItemData
 * @property {string} [country]
 * @property {string} [region]
 * @property {string} [type]
 * @property {string} [batch_id]
 * @property {string} [status]
 * @property {Object[]} [failed_records]
 * @property {string} [file_path]
 */

/**
 * @typedef ErrorResponse
 * @property {string} value
 * @property {string} message
 * @property {string} type
 */

/**
 * @typedef FailureResponse
 * @property {boolean} success
 * @property {ErrorResponse[]} error
 */

/**
 * @typedef BulkRegionServiceabilityTatResponse
 * @property {BulkRegionServiceabilityTatResponseItemData[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Page
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 */

/**
 * @typedef BulkRegionJobSerializer
 * @property {string} [file_path]
 * @property {string} country
 * @property {string} action
 * @property {string} region
 */

/**
 * @typedef BulkRegionResponseItemData
 * @property {string} file_path
 * @property {number} [failed]
 * @property {Object[]} [failed_records]
 * @property {string} action
 * @property {string} batch_id
 * @property {string} country
 * @property {number} [success]
 * @property {string} region
 * @property {string} status
 * @property {number} [total]
 * @property {string} [error_file_path]
 */

/**
 * @typedef BulkRegionResponse
 * @property {BulkRegionResponseItemData[]} items
 * @property {Page} page
 */

/**
 * @typedef CourierAccount
 * @property {string} extension_id
 * @property {string} account_id
 * @property {string} scheme_id
 * @property {boolean} is_self_ship
 * @property {string} stage
 * @property {boolean} is_own_account
 */

/**
 * @typedef CourierAccountRequestBody
 * @property {string} extension_id
 * @property {string} [account_id]
 * @property {string} scheme_id
 * @property {boolean} is_self_ship
 * @property {string} stage
 * @property {boolean} is_own_account
 */

/**
 * @typedef CourierPartnerAccountFailureResponse
 * @property {boolean} success
 * @property {ErrorResponse[]} error
 */

/**
 * @typedef CompanyCourierPartnerAccountListResponse
 * @property {CourierAccountResponse[]} items
 * @property {Page} page
 */

/**
 * @typedef CourierAccountResponse
 * @property {string} account_id
 * @property {string} scheme_id
 * @property {boolean} is_self_ship
 * @property {string} stage
 * @property {boolean} is_own_account
 * @property {CourierPartnerSchemeModel} scheme_rules
 */

/**
 * @typedef CourierPartnerSchemeModel
 * @property {string} extension_id
 * @property {string} scheme_id
 * @property {string} name
 * @property {ArithmeticOperations} weight
 * @property {string} transport_type
 * @property {string} region
 * @property {string} delivery_type
 * @property {string[]} payment_mode
 * @property {string} stage
 * @property {CourierPartnerSchemeFeatures} feature
 */

/**
 * @typedef CourierPartnerSchemeRequestModel
 * @property {string} extension_id
 * @property {string} [scheme_id]
 * @property {string} name
 * @property {ArithmeticOperations} weight
 * @property {string} transport_type
 * @property {string} region
 * @property {string} delivery_type
 * @property {string[]} payment_mode
 * @property {string} stage
 * @property {CourierPartnerSchemeFeatures} feature
 */

/**
 * @typedef CourierPartnerSchemeFeatures
 * @property {boolean} [doorstep_qc]
 * @property {boolean} [qr]
 * @property {boolean} [mps]
 * @property {boolean} [ndr]
 * @property {number} [ndr_attempts]
 * @property {boolean} [dangerous_goods]
 * @property {boolean} [fragile_goods]
 * @property {boolean} [restricted_goods]
 * @property {boolean} [cold_storage_goods]
 * @property {boolean} [doorstep_exchange]
 * @property {boolean} [doorstep_return]
 * @property {boolean} [product_installation]
 * @property {boolean} [openbox_delivery]
 * @property {string} [status_updates]
 * @property {boolean} [multi_pick_single_drop]
 * @property {boolean} [single_pick_multi_drop]
 * @property {boolean} [multi_pick_multi_drop]
 * @property {boolean} [ewaybill]
 */

/**
 * @typedef ArithmeticOperations
 * @property {number} [lt]
 * @property {number} [gt]
 * @property {number} [lte]
 * @property {number} [gte]
 */

/**
 * @typedef CourierPartnerSchemeUpdateRequest
 * @property {string} name
 * @property {ArithmeticOperations} weight
 * @property {string} transport_type
 * @property {string} region
 * @property {string} delivery_type
 * @property {string[]} payment_mode
 * @property {string} stage
 * @property {CourierPartnerSchemeFeatures} feature
 */

/**
 * @typedef GetCountries
 * @property {GetCountriesItems[]} items
 * @property {Page} page
 */

/**
 * @typedef GetCountriesItems
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string[]} [timezones]
 * @property {HierarchyItems[]} [hierarchy]
 * @property {string} [phone_code]
 * @property {string} [currency]
 * @property {string} [type]
 * @property {string} [latitude]
 * @property {string} [longitude]
 * @property {string} [display_name]
 */

/**
 * @typedef HierarchyItems
 * @property {string} [display_name]
 * @property {string} [slug]
 */

class LogisticsPartnerModel {
  /** @returns {BulkRegionServiceabilityTatRequest} */
  static BulkRegionServiceabilityTatRequest() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {BulkRegionServiceabilityTatResponseItemData} */
  static BulkRegionServiceabilityTatResponseItemData() {
    return Joi.object({
      country: Joi.string().allow(""),
      region: Joi.string().allow(""),
      type: Joi.string().allow(""),
      batch_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      failed_records: Joi.array().items(Joi.any()),
      file_path: Joi.string().allow(""),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      value: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {FailureResponse} */
  static FailureResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      error: Joi.array()
        .items(LogisticsPartnerModel.ErrorResponse())
        .required(),
    });
  }

  /** @returns {BulkRegionServiceabilityTatResponse} */
  static BulkRegionServiceabilityTatResponse() {
    return Joi.object({
      items: Joi.array().items(
        LogisticsPartnerModel.BulkRegionServiceabilityTatResponseItemData()
      ),
      page: LogisticsPartnerModel.Page(),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      has_previous: Joi.boolean(),
      has_next: Joi.boolean(),
      current: Joi.number(),
      type: Joi.string().allow("").required(),
      size: Joi.number(),
    });
  }

  /** @returns {BulkRegionJobSerializer} */
  static BulkRegionJobSerializer() {
    return Joi.object({
      file_path: Joi.string().allow(""),
      country: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
    });
  }

  /** @returns {BulkRegionResponseItemData} */
  static BulkRegionResponseItemData() {
    return Joi.object({
      file_path: Joi.string().allow("").required(),
      failed: Joi.number(),
      failed_records: Joi.array().items(Joi.any()),
      action: Joi.string().allow("").required(),
      batch_id: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      success: Joi.number(),
      region: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      total: Joi.number(),
      error_file_path: Joi.string().allow(""),
    });
  }

  /** @returns {BulkRegionResponse} */
  static BulkRegionResponse() {
    return Joi.object({
      items: Joi.array()
        .items(LogisticsPartnerModel.BulkRegionResponseItemData())
        .required(),
      page: LogisticsPartnerModel.Page().required(),
    });
  }

  /** @returns {CourierAccount} */
  static CourierAccount() {
    return Joi.object({
      extension_id: Joi.string().allow("").required(),
      account_id: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow("").required(),
      is_self_ship: Joi.boolean().required(),
      stage: Joi.string().allow("").required(),
      is_own_account: Joi.boolean().required(),
    });
  }

  /** @returns {CourierAccountRequestBody} */
  static CourierAccountRequestBody() {
    return Joi.object({
      extension_id: Joi.string().allow("").required(),
      account_id: Joi.string().allow(""),
      scheme_id: Joi.string().allow("").required(),
      is_self_ship: Joi.boolean().required(),
      stage: Joi.string().allow("").required(),
      is_own_account: Joi.boolean().required(),
    });
  }

  /** @returns {CourierPartnerAccountFailureResponse} */
  static CourierPartnerAccountFailureResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      error: Joi.array()
        .items(LogisticsPartnerModel.ErrorResponse())
        .required(),
    });
  }

  /** @returns {CompanyCourierPartnerAccountListResponse} */
  static CompanyCourierPartnerAccountListResponse() {
    return Joi.object({
      items: Joi.array()
        .items(LogisticsPartnerModel.CourierAccountResponse())
        .required(),
      page: LogisticsPartnerModel.Page().required(),
    });
  }

  /** @returns {CourierAccountResponse} */
  static CourierAccountResponse() {
    return Joi.object({
      account_id: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow("").required(),
      is_self_ship: Joi.boolean().required(),
      stage: Joi.string().allow("").required(),
      is_own_account: Joi.boolean().required(),
      scheme_rules: LogisticsPartnerModel.CourierPartnerSchemeModel().required(),
    });
  }

  /** @returns {CourierPartnerSchemeModel} */
  static CourierPartnerSchemeModel() {
    return Joi.object({
      extension_id: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      weight: LogisticsPartnerModel.ArithmeticOperations().required(),
      transport_type: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      delivery_type: Joi.string().allow("").required(),
      payment_mode: Joi.array().items(Joi.string().allow("")).required(),
      stage: Joi.string().allow("").required(),
      feature: LogisticsPartnerModel.CourierPartnerSchemeFeatures().required(),
    });
  }

  /** @returns {CourierPartnerSchemeRequestModel} */
  static CourierPartnerSchemeRequestModel() {
    return Joi.object({
      extension_id: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      weight: LogisticsPartnerModel.ArithmeticOperations().required(),
      transport_type: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      delivery_type: Joi.string().allow("").required(),
      payment_mode: Joi.array().items(Joi.string().allow("")).required(),
      stage: Joi.string().allow("").required(),
      feature: LogisticsPartnerModel.CourierPartnerSchemeFeatures().required(),
    });
  }

  /** @returns {CourierPartnerSchemeFeatures} */
  static CourierPartnerSchemeFeatures() {
    return Joi.object({
      doorstep_qc: Joi.boolean(),
      qr: Joi.boolean(),
      mps: Joi.boolean(),
      ndr: Joi.boolean(),
      ndr_attempts: Joi.number(),
      dangerous_goods: Joi.boolean(),
      fragile_goods: Joi.boolean(),
      restricted_goods: Joi.boolean(),
      cold_storage_goods: Joi.boolean(),
      doorstep_exchange: Joi.boolean(),
      doorstep_return: Joi.boolean(),
      product_installation: Joi.boolean(),
      openbox_delivery: Joi.boolean(),
      status_updates: Joi.string().allow(""),
      multi_pick_single_drop: Joi.boolean(),
      single_pick_multi_drop: Joi.boolean(),
      multi_pick_multi_drop: Joi.boolean(),
      ewaybill: Joi.boolean(),
    });
  }

  /** @returns {ArithmeticOperations} */
  static ArithmeticOperations() {
    return Joi.object({
      lt: Joi.number().allow(null),
      gt: Joi.number().allow(null),
      lte: Joi.number().allow(null),
      gte: Joi.number().allow(null),
    });
  }

  /** @returns {CourierPartnerSchemeUpdateRequest} */
  static CourierPartnerSchemeUpdateRequest() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      weight: LogisticsPartnerModel.ArithmeticOperations().required(),
      transport_type: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      delivery_type: Joi.string().allow("").required(),
      payment_mode: Joi.array().items(Joi.string().allow("")).required(),
      stage: Joi.string().allow("").required(),
      feature: LogisticsPartnerModel.CourierPartnerSchemeFeatures().required(),
    });
  }

  /** @returns {GetCountries} */
  static GetCountries() {
    return Joi.object({
      items: Joi.array()
        .items(LogisticsPartnerModel.GetCountriesItems())
        .required(),
      page: LogisticsPartnerModel.Page().required(),
    });
  }

  /** @returns {GetCountriesItems} */
  static GetCountriesItems() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      iso2: Joi.string().allow(""),
      iso3: Joi.string().allow(""),
      timezones: Joi.array().items(Joi.string().allow("")),
      hierarchy: Joi.array().items(LogisticsPartnerModel.HierarchyItems()),
      phone_code: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      type: Joi.string().allow(""),
      latitude: Joi.string().allow(""),
      longitude: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {HierarchyItems} */
  static HierarchyItems() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }
}
module.exports = LogisticsPartnerModel;
