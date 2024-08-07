const Joi = require("joi");

const ThemeApplicationModel = require("./ThemeApplicationModel");

/**
 * @typedef GetAllPagesParam
 * @property {string} themeId - Id of the theme to be retrieved.
 */

/** @typedef GetAppliedThemeParam */

/**
 * @typedef GetPageParam
 * @property {string} themeId - Id of the theme to be retrieved.
 * @property {string} pageValue - Value of the page to be retrieved.
 * @property {string} [filters] - Filters on sections to be applied or not.
 * @property {string} [sectionPreviewHash] - Unique hash id on sections preview.
 * @property {number} [company] - Company id of the application.
 */

/**
 * @typedef GetThemeForPreviewParam
 * @property {string} themeId - Id of the theme to be retrieved.
 */

class ThemeApplicationValidator {
  /** @returns {GetAllPagesParam} */
  static getAllPages() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetAppliedThemeParam} */
  static getAppliedTheme() {
    return Joi.object({});
  }

  /** @returns {GetPageParam} */
  static getPage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      pageValue: Joi.string().allow("").required(),
      filters: Joi.string().allow(""),
      sectionPreviewHash: Joi.string().allow(""),
      company: Joi.number(),
    }).required();
  }

  /** @returns {GetThemeForPreviewParam} */
  static getThemeForPreview() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = ThemeApplicationValidator;
