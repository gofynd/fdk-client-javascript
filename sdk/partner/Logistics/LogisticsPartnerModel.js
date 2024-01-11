const Joi = require("joi");

/**
 * @typedef ArithmeticOperations
 * @property {number} [gt]
 * @property {number} [gte]
 * @property {number} [lt]
 * @property {number} [lte]
 */

/**
 * @typedef BulkRegionJobSerializer
 * @property {string} action
 * @property {string} country
 * @property {string} [file_path]
 * @property {string} region
 */

/**
 * @typedef BulkRegionResponse
 * @property {BulkRegionResponseItemData[]} items
 * @property {Page} page
 */

/**
 * @typedef BulkRegionResponseItemData
 * @property {string} action
 * @property {string} batch_id
 * @property {string} country
 * @property {string} [error_file_path]
 * @property {number} [failed]
 * @property {Object[]} [failed_records]
 * @property {string} file_path
 * @property {string} region
 * @property {string} status
 * @property {number} [success]
 * @property {number} [total]
 */

/**
 * @typedef BulkRegionServiceabilityTatRequest
 * @property {string} country
 * @property {string} region
 * @property {string} type
 */

/**
 * @typedef BulkRegionServiceabilityTatResponse
 * @property {BulkRegionServiceabilityTatResponseItemData[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BulkRegionServiceabilityTatResponseItemData
 * @property {string} [batch_id]
 * @property {string} [country]
 * @property {Object[]} [failed_records]
 * @property {string} [file_path]
 * @property {string} [region]
 * @property {string} [status]
 * @property {string} [type]
 */

/**
 * @typedef CompanyCourierPartnerAccountListResponse
 * @property {CourierAccountResponse[]} items
 * @property {Page} page
 */

/**
 * @typedef CourierAccount
 * @property {string} account_id
 * @property {string} extension_id
 * @property {boolean} is_own_account
 * @property {boolean} is_self_ship
 * @property {string} scheme_id
 * @property {string} stage
 */

/**
 * @typedef CourierAccountResponse
 * @property {string} account_id
 * @property {boolean} is_own_account
 * @property {boolean} is_self_ship
 * @property {string} scheme_id
 * @property {CourierPartnerSchemeModel} scheme_rules
 * @property {string} stage
 */

/**
 * @typedef CourierPartnerAccountFailureResponse
 * @property {ErrorResponse[]} error
 * @property {boolean} success
 */

/**
 * @typedef CourierPartnerSchemeFeatures
 * @property {boolean} [cold_storage_goods]
 * @property {boolean} [dangerous_goods]
 * @property {boolean} [doorstep_exchange]
 * @property {boolean} [doorstep_qc]
 * @property {boolean} [doorstep_return]
 * @property {boolean} [ewaybill]
 * @property {boolean} [fragile_goods]
 * @property {boolean} [mps]
 * @property {boolean} [multi_pick_multi_drop]
 * @property {boolean} [multi_pick_single_drop]
 * @property {boolean} [ndr]
 * @property {number} [ndr_attempts]
 * @property {boolean} [openbox_delivery]
 * @property {boolean} [product_installation]
 * @property {boolean} [qr]
 * @property {boolean} [restricted_goods]
 * @property {boolean} [single_pick_multi_drop]
 * @property {string} [status_updates]
 */

/**
 * @typedef CourierPartnerSchemeModel
 * @property {string} delivery_type
 * @property {string} extension_id
 * @property {CourierPartnerSchemeFeatures} feature
 * @property {string} name
 * @property {string[]} payment_mode
 * @property {string} region
 * @property {string} scheme_id
 * @property {string} stage
 * @property {string} transport_type
 * @property {ArithmeticOperations} weight
 */

/**
 * @typedef CourierPartnerSchemeUpdateRequest
 * @property {string} delivery_type
 * @property {CourierPartnerSchemeFeatures} feature
 * @property {string} name
 * @property {string[]} payment_mode
 * @property {string} region
 * @property {string} stage
 * @property {string} transport_type
 * @property {ArithmeticOperations} weight
 */

/**
 * @typedef ErrorResponse
 * @property {string} message
 * @property {string} type
 * @property {string} value
 */

/**
 * @typedef FailureResponse
 * @property {ErrorResponse[]} error
 * @property {boolean} success
 */

/**
 * @typedef GetCountries
 * @property {GetCountriesItems[]} items
 * @property {Page} page
 */

/**
 * @typedef GetCountriesItems
 * @property {string} [currency]
 * @property {string} [display_name]
 * @property {HierarchyItems[]} [hierarchy]
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
 * @typedef HierarchyItems
 * @property {string} [display_name]
 * @property {string} [slug]
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

class LogisticsPartnerModel {
  /** @returns {ArithmeticOperations} */
  static ArithmeticOperations() {
    return Joi.object({
      gt: Joi.number(),
      gte: Joi.number(),
      lt: Joi.number(),
      lte: Joi.number(),
    });
  }

  /** @returns {BulkRegionJobSerializer} */
  static BulkRegionJobSerializer() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      file_path: Joi.string().allow(""),
      region: Joi.string().allow("").required(),
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

  /** @returns {BulkRegionResponseItemData} */
  static BulkRegionResponseItemData() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      batch_id: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      error_file_path: Joi.string().allow(""),
      failed: Joi.number(),
      failed_records: Joi.array().items(Joi.any()),
      file_path: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      success: Joi.number(),
      total: Joi.number(),
    });
  }

  /** @returns {BulkRegionServiceabilityTatRequest} */
  static BulkRegionServiceabilityTatRequest() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
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

  /** @returns {BulkRegionServiceabilityTatResponseItemData} */
  static BulkRegionServiceabilityTatResponseItemData() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      country: Joi.string().allow(""),
      failed_records: Joi.array().items(Joi.any()),
      file_path: Joi.string().allow(""),
      region: Joi.string().allow(""),
      status: Joi.string().allow(""),
      type: Joi.string().allow(""),
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

  /** @returns {CourierAccount} */
  static CourierAccount() {
    return Joi.object({
      account_id: Joi.string().allow("").required(),
      extension_id: Joi.string().allow("").required(),
      is_own_account: Joi.boolean().required(),
      is_self_ship: Joi.boolean().required(),
      scheme_id: Joi.string().allow("").required(),
      stage: Joi.string().allow("").required(),
    });
  }

  /** @returns {CourierAccountResponse} */
  static CourierAccountResponse() {
    return Joi.object({
      account_id: Joi.string().allow("").required(),
      is_own_account: Joi.boolean().required(),
      is_self_ship: Joi.boolean().required(),
      scheme_id: Joi.string().allow("").required(),
      scheme_rules: LogisticsPartnerModel.CourierPartnerSchemeModel().required(),
      stage: Joi.string().allow("").required(),
    });
  }

  /** @returns {CourierPartnerAccountFailureResponse} */
  static CourierPartnerAccountFailureResponse() {
    return Joi.object({
      error: Joi.array()
        .items(LogisticsPartnerModel.ErrorResponse())
        .required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {CourierPartnerSchemeFeatures} */
  static CourierPartnerSchemeFeatures() {
    return Joi.object({
      cold_storage_goods: Joi.boolean(),
      dangerous_goods: Joi.boolean(),
      doorstep_exchange: Joi.boolean(),
      doorstep_qc: Joi.boolean(),
      doorstep_return: Joi.boolean(),
      ewaybill: Joi.boolean(),
      fragile_goods: Joi.boolean(),
      mps: Joi.boolean(),
      multi_pick_multi_drop: Joi.boolean(),
      multi_pick_single_drop: Joi.boolean(),
      ndr: Joi.boolean(),
      ndr_attempts: Joi.number(),
      openbox_delivery: Joi.boolean(),
      product_installation: Joi.boolean(),
      qr: Joi.boolean(),
      restricted_goods: Joi.boolean(),
      single_pick_multi_drop: Joi.boolean(),
      status_updates: Joi.string().allow(""),
    });
  }

  /** @returns {CourierPartnerSchemeModel} */
  static CourierPartnerSchemeModel() {
    return Joi.object({
      delivery_type: Joi.string().allow("").required(),
      extension_id: Joi.string().allow("").required(),
      feature: LogisticsPartnerModel.CourierPartnerSchemeFeatures().required(),
      name: Joi.string().allow("").required(),
      payment_mode: Joi.array().items(Joi.string().allow("")).required(),
      region: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow("").required(),
      stage: Joi.string().allow("").required(),
      transport_type: Joi.string().allow("").required(),
      weight: LogisticsPartnerModel.ArithmeticOperations().required(),
    });
  }

  /** @returns {CourierPartnerSchemeUpdateRequest} */
  static CourierPartnerSchemeUpdateRequest() {
    return Joi.object({
      delivery_type: Joi.string().allow("").required(),
      feature: LogisticsPartnerModel.CourierPartnerSchemeFeatures().required(),
      name: Joi.string().allow("").required(),
      payment_mode: Joi.array().items(Joi.string().allow("")).required(),
      region: Joi.string().allow("").required(),
      stage: Joi.string().allow("").required(),
      transport_type: Joi.string().allow("").required(),
      weight: LogisticsPartnerModel.ArithmeticOperations().required(),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {FailureResponse} */
  static FailureResponse() {
    return Joi.object({
      error: Joi.array()
        .items(LogisticsPartnerModel.ErrorResponse())
        .required(),
      success: Joi.boolean().required(),
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
      currency: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      hierarchy: Joi.array().items(LogisticsPartnerModel.HierarchyItems()),
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

  /** @returns {HierarchyItems} */
  static HierarchyItems() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
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
}
module.exports = LogisticsPartnerModel;
