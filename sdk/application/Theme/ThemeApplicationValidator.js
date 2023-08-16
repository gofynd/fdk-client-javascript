const Joi = require("joi");

const ThemeModel = require("./ThemeApplicationModel");
class ThemeValidator {
  static getAllPages() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static getAppliedTheme() {
    return Joi.object({});
  }

  static getPage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      pageValue: Joi.string().allow("").required(),
    }).required();
  }

  static getThemeForPreview() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = ThemeValidator;
