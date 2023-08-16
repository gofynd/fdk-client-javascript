const Joi = require("joi");

const ThemeModel = require("./ThemePlatformModel");
class ThemeValidator {
  static addThemeToApplication() {
    return Joi.object({
      body: ThemeModel.CompanyThemeSchema().required(),
    }).required();
  }

  static addToThemeLibrary() {
    return Joi.object({
      body: ThemeModel.AddThemeRequestSchema().required(),
    }).required();
  }

  static applyTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static archiveTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static createPage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      body: ThemeModel.AvailablePageSchema().required(),
    }).required();
  }

  static deletePage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      pageValue: Joi.string().allow("").required(),
    }).required();
  }

  static deleteTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static duplicateTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static getAllPages() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static getApplicationThemes() {
    return Joi.object({}).required();
  }

  static getApplicationThemesCount() {
    return Joi.object({}).required();
  }

  static getAppliedTheme() {
    return Joi.object({}).required();
  }

  static getFonts() {
    return Joi.object({}).required();
  }

  static getPage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      pageValue: Joi.string().allow("").required(),
    }).required();
  }

  static getPublicThemes() {
    return Joi.object({
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  }

  static getThemeById() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static getThemeForPreview() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static getThemeLastModified() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static getThemeLibrary() {
    return Joi.object({
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  }

  static isUpgradable() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static publishTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static unarchiveTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static unpublishTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static updateMultiplePages() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      body: ThemeModel.AllAvailablePageSchema().required(),
    }).required();
  }

  static updatePage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      pageValue: Joi.string().allow("").required(),
      body: ThemeModel.AvailablePageSchema().required(),
    }).required();
  }

  static updateTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      body: ThemeModel.UpdateThemeRequestBody().required(),
    }).required();
  }

  static updateThemeName() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      body: ThemeModel.UpdateThemeNameRequestBody().required(),
    }).required();
  }

  static upgradeTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = ThemeValidator;
