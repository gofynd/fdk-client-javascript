const Joi = require("joi");

const ThemePlatformModel = require("./ThemePlatformModel");

/**
 * @typedef AddThemeToApplicationParam
 * @property {ThemePlatformModel.ThemesSchema} body
 */

/**
 * @typedef ApplyThemeParam
 * @property {string} themeId - The ID of the apply
 */

/**
 * @typedef CreatePageParam
 * @property {string} themeId - ID of the theme
 * @property {ThemePlatformModel.AvailablePageSchema} body
 */

/**
 * @typedef DeletePageParam
 * @property {string} themeId - ID of the theme
 * @property {string} pageValue - Value of the page to be updated
 */

/**
 * @typedef DeleteThemeParam
 * @property {string} themeId - The ID of the theme to be deleted.
 */

/**
 * @typedef DuplicateThemeParam
 * @property {string} themeId - The ID of the theme to be duplicated
 */

/**
 * @typedef GetAllPagesParam
 * @property {string} themeId - ID of the theme to be retrieved
 */

/** @typedef GetApplicationThemesParam */

/** @typedef GetApplicationThemesCountParam */

/** @typedef GetAppliedThemeParam */

/** @typedef GetFontsParam */

/** @typedef GetFontsV2Param */

/**
 * @typedef GetLatestVersionOfThemeBySlugParam
 * @property {string} slugName - Slug of theme
 */

/**
 * @typedef GetPageParam
 * @property {string} themeId - ID of the theme to be retrieved
 * @property {string} pageValue - Value of the page to be retrieved
 */

/**
 * @typedef GetThemeByIdParam
 * @property {string} themeId - The ID of the theme
 */

/**
 * @typedef GetThemeForPreviewParam
 * @property {string} themeId - The ID of the theme
 */

/**
 * @typedef GetThemeLastModifiedParam
 * @property {string} themeId - ID allotted to the theme.
 */

/**
 * @typedef IsUpgradableParam
 * @property {string} themeId - The ID of the theme
 */

/**
 * @typedef UpdateMultiplePagesParam
 * @property {string} themeId - ID of the theme to be retrieved
 * @property {ThemePlatformModel.AllAvailablePageSchema} body
 */

/**
 * @typedef UpdatePageParam
 * @property {string} themeId - ID of the theme
 * @property {string} pageValue - Value of the page to be updated
 * @property {ThemePlatformModel.AvailablePageSchema} body
 */

/**
 * @typedef UpdateThemeParam
 * @property {string} themeId - The ID of the theme.
 * @property {ThemePlatformModel.ThemesSchema} body
 */

/**
 * @typedef UpdateThemeNameParam
 * @property {string} themeId - The ID of the theme to be updated.
 * @property {ThemePlatformModel.UpdateThemeNameRequestBody} body
 */

/**
 * @typedef UpgradeThemeParam
 * @property {string} themeId - The ID of the upgrade
 */

class ThemePlatformApplicationValidator {
  /** @returns {AddThemeToApplicationParam} */
  static addThemeToApplication() {
    return Joi.object({
      body: ThemePlatformModel.ThemesSchema().required(),
    }).required();
  }

  /** @returns {ApplyThemeParam} */
  static applyTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {CreatePageParam} */
  static createPage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      body: ThemePlatformModel.AvailablePageSchema().required(),
    }).required();
  }

  /** @returns {DeletePageParam} */
  static deletePage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      pageValue: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteThemeParam} */
  static deleteTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DuplicateThemeParam} */
  static duplicateTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetAllPagesParam} */
  static getAllPages() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetApplicationThemesParam} */
  static getApplicationThemes() {
    return Joi.object({}).required();
  }

  /** @returns {GetApplicationThemesCountParam} */
  static getApplicationThemesCount() {
    return Joi.object({}).required();
  }

  /** @returns {GetAppliedThemeParam} */
  static getAppliedTheme() {
    return Joi.object({}).required();
  }

  /** @returns {GetFontsParam} */
  static getFonts() {
    return Joi.object({}).required();
  }

  /** @returns {GetFontsV2Param} */
  static getFontsV2() {
    return Joi.object({}).required();
  }

  /** @returns {GetLatestVersionOfThemeBySlugParam} */
  static getLatestVersionOfThemeBySlug() {
    return Joi.object({
      slugName: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPageParam} */
  static getPage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      pageValue: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetThemeByIdParam} */
  static getThemeById() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetThemeForPreviewParam} */
  static getThemeForPreview() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetThemeLastModifiedParam} */
  static getThemeLastModified() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {IsUpgradableParam} */
  static isUpgradable() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {UpdateMultiplePagesParam} */
  static updateMultiplePages() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      body: ThemePlatformModel.AllAvailablePageSchema().required(),
    }).required();
  }

  /** @returns {UpdatePageParam} */
  static updatePage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      pageValue: Joi.string().allow("").required(),
      body: ThemePlatformModel.AvailablePageSchema().required(),
    }).required();
  }

  /** @returns {UpdateThemeParam} */
  static updateTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      body: ThemePlatformModel.ThemesSchema().required(),
    }).required();
  }

  /** @returns {UpdateThemeNameParam} */
  static updateThemeName() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      body: ThemePlatformModel.UpdateThemeNameRequestBody().required(),
    }).required();
  }

  /** @returns {UpgradeThemeParam} */
  static upgradeTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = ThemePlatformApplicationValidator;
