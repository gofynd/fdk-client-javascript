const Joi = require("joi");

const ThemePlatformModel = require("./ThemePlatformModel");

/**
 * @typedef AddMarketplaceThemeToCompanyParam
 * @property {ThemePlatformModel.ThemeReq} body
 */

/**
 * @typedef DeleteCompanyThemeParam
 * @property {string} themeId - The ID of the theme.
 */

/**
 * @typedef GetCompanyLevelPrivateThemesParam
 * @property {string} [searchText] - Search Text to match the Theme Names and
 *   return the response.
 */

/**
 * @typedef GetCompanyLevelThemesParam
 * @property {string} [searchText] - Search Text to match the Theme Names and
 *   return the response.
 */

class ThemePlatformValidator {
  /** @returns {AddMarketplaceThemeToCompanyParam} */
  static addMarketplaceThemeToCompany() {
    return Joi.object({
      body: ThemePlatformModel.ThemeReq().required(),
    }).required();
  }

  /** @returns {DeleteCompanyThemeParam} */
  static deleteCompanyTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCompanyLevelPrivateThemesParam} */
  static getCompanyLevelPrivateThemes() {
    return Joi.object({
      searchText: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetCompanyLevelThemesParam} */
  static getCompanyLevelThemes() {
    return Joi.object({
      searchText: Joi.string().allow(""),
    }).required();
  }
}

module.exports = ThemePlatformValidator;
