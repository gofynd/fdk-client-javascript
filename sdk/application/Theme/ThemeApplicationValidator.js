const Joi = require("joi");

const ThemeApplicationModel = require("./ThemeApplicationModel");

/**
 * @typedef getAllPages
 * @property {string} themeId - ID of the theme to be retrieved
 */

/** @typedef getAppliedTheme */

/** @typedef getAppliedThemeV2 */

/**
 * @typedef getPage
 * @property {string} themeId - ID of the theme to be retrieved
 * @property {string} pageValue - Value of the page to be retrieved
 */

/**
 * @typedef getThemeForPreview
 * @property {string} themeId - ID of the theme to be retrieved
 */

/**
 * @typedef getThemeForPreviewV2
 * @property {string} themeId - ID of the theme to be retrieved
 */

class ThemeApplicationValidator {
  /** @returns {getAllPages} */
  static getAllPages() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getAppliedTheme} */
  static getAppliedTheme() {
    return Joi.object({});
  }

  /** @returns {getAppliedThemeV2} */
  static getAppliedThemeV2() {
    return Joi.object({});
  }

  /** @returns {getPage} */
  static getPage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      pageValue: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getThemeForPreview} */
  static getThemeForPreview() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getThemeForPreviewV2} */
  static getThemeForPreviewV2() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = ThemeApplicationValidator;
