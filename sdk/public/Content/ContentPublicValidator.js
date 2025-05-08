const Joi = require("joi");

const ContentPublicModel = require("./ContentPublicModel");

/** @typedef GetAllTagsParam */

/** @typedef GetAnalyticsTagsParam */

/** @typedef GetBasicDetailsParam */

/**
 * @typedef GetCredentialsByEntityParam
 * @property {string} entityType - Server Type
 */

/**
 * @typedef GetCustomPageParam
 * @property {string} slug - Unique identifier created for each feature object
 *   in the schema.
 */

/** @typedef GetFooterContentParam */

/**
 * @typedef GetHomePageContentParam
 * @property {string} pageType - The type of the page (e.g., pricing).
 */

/** @typedef GetMenuContentParam */

/**
 * @typedef GetMenuContentByTypeParam
 * @property {string} type - Type param is type of device
 */

/** @typedef GetNavbarParam */

/** @typedef GetPricingBannerParam */

class ContentPublicValidator {
  /** @returns {GetAllTagsParam} */
  static getAllTags() {
    return Joi.object({});
  }

  /** @returns {GetAnalyticsTagsParam} */
  static getAnalyticsTags() {
    return Joi.object({});
  }

  /** @returns {GetBasicDetailsParam} */
  static getBasicDetails() {
    return Joi.object({});
  }

  /** @returns {GetCredentialsByEntityParam} */
  static getCredentialsByEntity() {
    return Joi.object({
      entityType: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCustomPageParam} */
  static getCustomPage() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetFooterContentParam} */
  static getFooterContent() {
    return Joi.object({});
  }

  /** @returns {GetHomePageContentParam} */
  static getHomePageContent() {
    return Joi.object({
      pageType: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetMenuContentParam} */
  static getMenuContent() {
    return Joi.object({});
  }

  /** @returns {GetMenuContentByTypeParam} */
  static getMenuContentByType() {
    return Joi.object({
      type: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetNavbarParam} */
  static getNavbar() {
    return Joi.object({});
  }

  /** @returns {GetPricingBannerParam} */
  static getPricingBanner() {
    return Joi.object({});
  }
}

module.exports = ContentPublicValidator;
