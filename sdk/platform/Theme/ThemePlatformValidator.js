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

/** @typedef GetCompanyLevelThemesParam */

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

  /** @returns {GetCompanyLevelThemesParam} */
  static getCompanyLevelThemes() {
    return Joi.object({}).required();
  }
}

module.exports = ThemePlatformValidator;
