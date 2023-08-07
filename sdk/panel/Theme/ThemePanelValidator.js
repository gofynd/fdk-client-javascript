const Joi = require("joi");

const ThemeModel = require("./ThemePanelModel");
class ThemeValidator {
  static getMarketplaceThemeBySlug() {
    return Joi.object({
      slugName: Joi.string().allow("").required(),
    }).required();
  }

  static getMarketplaceThemeVersions() {
    return Joi.object({
      slugName: Joi.string().allow("").required(),
    }).required();
  }

  static getMarketplaceThemes() {
    return Joi.object({
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    });
  }
}

module.exports = ThemeValidator;
