const Joi = require("joi");

const PartnerPlatformModel = require("./PartnerPlatformModel");

/**
 * @typedef DeleteExtensionByIdParam
 * @property {string} extensionId - Extension id
 * @property {string} message - Message while uninstalling extension
 * @property {string} uninstallReasonType - Reason for uninstalling extension
 */

/**
 * @typedef GetExtensionByIdParam
 * @property {string} extensionId - Extension id
 */

/**
 * @typedef GetExtensionsForCompanyParam
 * @property {number} [pageSize] - Number of records you want to get in single page
 * @property {string} [tag] - Tag
 * @property {string} [currentPage] - Tag
 * @property {number} [pageNo] - Current page number
 * @property {string} [filterBy] - Filter by
 * @property {string} [query] - Query
 */

/**
 * @typedef GetExtensionsSuggestionsParam
 * @property {number} [pageSize] - Number of records you want to get in single page
 */

/**
 * @typedef GetPartnerInvitesParam
 * @property {string} [requestStatus] - Status of the request
 * @property {string} [pageSize] - Number of records per page
 * @property {string} [pageNo] - Number of page the user want to fetch
 */

/**
 * @typedef GetPartnerRequestDetailsParam
 * @property {string} inviteId - Invitation id
 */

/**
 * @typedef GetPrivateExtensionsParam
 * @property {number} [pageSize] - Number of records you want to get in single page
 * @property {number} [pageNo] - Number of page
 * @property {string} [query] - Filter query which we want to pass
 */

/**
 * @typedef GetPublicExtensionParam
 * @property {string} extensionId - Extension id
 */

/**
 * @typedef ModifyPartnerRequestParam
 * @property {string} inviteId - Invitation id
 * @property {PartnerPlatformModel.ModifyPartnerReq} body
 */

/**
 * @typedef SetupProductsParam
 * @property {string} [requestId] - Extrequest id
 */

/**
 * @typedef SubscribeExtensionParam
 * @property {string} entity - Entity
 * @property {string} extensionId - Extension id
 * @property {string} entityId - Entity id
 * @property {PartnerPlatformModel.SubscriptionRequest} body
 */

class PartnerPlatformValidator {
  /** @returns {DeleteExtensionByIdParam} */
  static deleteExtensionById() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
      uninstallReasonType: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetExtensionByIdParam} */
  static getExtensionById() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetExtensionsForCompanyParam} */
  static getExtensionsForCompany() {
    return Joi.object({
      pageSize: Joi.number(),
      tag: Joi.string().allow(""),
      currentPage: Joi.string().allow(""),
      pageNo: Joi.number(),
      filterBy: Joi.string().allow(""),
      query: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetExtensionsSuggestionsParam} */
  static getExtensionsSuggestions() {
    return Joi.object({
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetPartnerInvitesParam} */
  static getPartnerInvites() {
    return Joi.object({
      requestStatus: Joi.string().allow(""),
      pageSize: Joi.string().allow(""),
      pageNo: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetPartnerRequestDetailsParam} */
  static getPartnerRequestDetails() {
    return Joi.object({
      inviteId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPrivateExtensionsParam} */
  static getPrivateExtensions() {
    return Joi.object({
      pageSize: Joi.number(),
      pageNo: Joi.number(),
      query: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetPublicExtensionParam} */
  static getPublicExtension() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {ModifyPartnerRequestParam} */
  static modifyPartnerRequest() {
    return Joi.object({
      inviteId: Joi.string().allow("").required(),
      body: PartnerPlatformModel.ModifyPartnerReq().required(),
    }).required();
  }

  /** @returns {SetupProductsParam} */
  static setupProducts() {
    return Joi.object({
      requestId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {SubscribeExtensionParam} */
  static subscribeExtension() {
    return Joi.object({
      entity: Joi.string().allow("").required(),
      extensionId: Joi.string().allow("").required(),
      entityId: Joi.string().allow("").required(),
      body: PartnerPlatformModel.SubscriptionRequest().required(),
    }).required();
  }
}

module.exports = PartnerPlatformValidator;
