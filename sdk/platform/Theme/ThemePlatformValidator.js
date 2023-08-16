const Joi = require("joi");

const ThemeModel = require("./ThemePlatformModel");
class ThemeValidator {
  static addMarketplaceThemeToCompany() {
    return Joi.object({
      body: ThemeModel.ThemeReq().required(),
    }).required();
  }

  static deleteCompanyTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static getCompanyLevelThemes() {
    return Joi.object({}).required();
  }
}

module.exports = ThemeValidator;
