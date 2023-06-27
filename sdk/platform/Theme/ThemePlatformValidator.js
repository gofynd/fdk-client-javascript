const Joi = require("joi");

const ThemePlatformModel = require("./ThemePlatformModel");

/**
 * @typedef addMarketplaceThemeToCompany
 * @property {ThemePlatformModel.ThemeReq} body
 */

/**
 * @typedef deleteCompanyTheme
 * @property {string} themeId - The ID of the theme.
 */

/** @typedef getCompanyLevelThemes */

class ThemePlatformValidator {
  /** @returns {addMarketplaceThemeToCompany} */
  static addMarketplaceThemeToCompany() {
    return Joi.object({
      body: ThemePlatformModel.ThemeReq().required(),
    }).required();
  }

  /** @returns {deleteCompanyTheme} */
  static deleteCompanyTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getCompanyLevelThemes} */
  static getCompanyLevelThemes() {
    return Joi.object({}).required();
  }
}

module.exports = ThemePlatformValidator;
