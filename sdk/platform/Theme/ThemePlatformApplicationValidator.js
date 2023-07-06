const Joi = require("joi");

const ThemePlatformModel = require("./ThemePlatformModel");

/**
 * @typedef AddThemeToApplicationV2Param
 * @property {ThemePlatformModel.ApplyThemeRequestV2} body
 */

/**
 * @typedef AddToThemeLibraryParam
 * @property {ThemePlatformModel.AddThemeRequestSchema} body
 */

/**
 * @typedef ApplyThemeParam
 * @property {ThemePlatformModel.AddThemeRequestSchema} body
 */

/**
 * @typedef ApplyThemeV2Param
 * @property {string} themeId - The ID of the apply
 */

/**
 * @typedef ArchiveThemeParam
 * @property {string} themeId - ID allotted to the theme.
 */

/**
 * @typedef CheckThemeUpgradableV2Param
 * @property {string} themeId - The ID of the theme
 */

/**
 * @typedef CreatePageParam
 * @property {string} themeId - ID of the theme
 * @property {ThemePlatformModel.AvailablePageSchema} body
 */

/**
 * @typedef CreateThemeParam
 * @property {ThemePlatformModel.ThemesSchema} body
 */

/**
 * @typedef DeletePageParam
 * @property {string} themeId - ID of the theme
 * @property {string} pageValue - Value of the page to be updated
 */

/**
 * @typedef DeleteThemeParam
 * @property {string} themeId - ID allotted to the theme.
 */

/**
 * @typedef DeleteThemeV2Param
 * @property {string} themeId - The ID of the theme to be deleted.
 */

/**
 * @typedef DuplicateThemeV2Param
 * @property {string} themeId - The ID of the theme to be duplicated
 */

/**
 * @typedef GetAllPagesParam
 * @property {string} themeId - ID of the theme to be retrieved
 */

/**
 * @typedef GetApplicationThemeByIdV2Param
 * @property {string} themeId - The ID of the theme
 */

/** @typedef GetApplicationThemesCountV2Param */

/** @typedef GetApplicationThemesV2Param */

/** @typedef GetAppliedThemeParam */

/** @typedef GetAppliedThemeV2Param */

/**
 * @typedef GetDefaultPageDetailsParam
 * @property {string} pageValue - Value of the page to be retrieved
 */

/** @typedef GetFontsParam */

/** @typedef GetFontsV2Param */

/**
 * @typedef GetPageParam
 * @property {string} themeId - ID of the theme to be retrieved
 * @property {string} pageValue - Value of the page to be retrieved
 */

/**
 * @typedef GetPublicThemesParam
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 */

/**
 * @typedef GetThemeByIdParam
 * @property {string} themeId - ID allotted to the theme.
 */

/**
 * @typedef GetThemeForPreviewParam
 * @property {string} themeId - ID allotted to the theme.
 */

/**
 * @typedef GetThemeLastModifiedParam
 * @property {string} themeId - ID allotted to the theme.
 */

/**
 * @typedef GetThemeLastModifiedV2Param
 * @property {string} themeId - ID allotted to the theme.
 */

/**
 * @typedef GetThemeLibraryParam
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 */

/**
 * @typedef GetThemePreviewByIdV2Param
 * @property {string} themeId - The ID of the theme
 */

/**
 * @typedef IsUpgradableParam
 * @property {string} themeId - Theme ID
 */

/**
 * @typedef PublishThemeParam
 * @property {string} themeId - ID allotted to the theme.
 */

/**
 * @typedef UnarchiveThemeParam
 * @property {string} themeId - ID allotted to the theme.
 */

/**
 * @typedef UnpublishThemeParam
 * @property {string} themeId - ID allotted to the theme.
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
 * @property {string} themeId - ID allotted to the theme.
 * @property {ThemePlatformModel.ThemesSchema} body
 */

/**
 * @typedef UpdateThemeNameV2Param
 * @property {string} themeId - The ID of the theme to be updated.
 * @property {ThemePlatformModel.UpdateThemeNameRequestBodyV2} body
 */

/**
 * @typedef UpdateThemeV2Param
 * @property {string} themeId - The ID of the theme.
 * @property {ThemePlatformModel.UpdateThemeRequestBodyV2} body
 */

/**
 * @typedef UpgradeApplicationV2Param
 * @property {string} themeId - The ID of the upgrade
 */

/**
 * @typedef UpgradeThemeParam
 * @property {string} themeId - ID allotted to the theme.
 */

class ThemePlatformApplicationValidator {
  /** @returns {AddThemeToApplicationV2Param} */
  static addThemeToApplicationV2() {
    return Joi.object({
      body: ThemePlatformModel.ApplyThemeRequestV2().required(),
    }).required();
  }

  /** @returns {AddToThemeLibraryParam} */
  static addToThemeLibrary() {
    return Joi.object({
      body: ThemePlatformModel.AddThemeRequestSchema().required(),
    }).required();
  }

  /** @returns {ApplyThemeParam} */
  static applyTheme() {
    return Joi.object({
      body: ThemePlatformModel.AddThemeRequestSchema().required(),
    }).required();
  }

  /** @returns {ApplyThemeV2Param} */
  static applyThemeV2() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {ArchiveThemeParam} */
  static archiveTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {CheckThemeUpgradableV2Param} */
  static checkThemeUpgradableV2() {
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

  /** @returns {CreateThemeParam} */
  static createTheme() {
    return Joi.object({
      body: ThemePlatformModel.ThemesSchema().required(),
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

  /** @returns {DeleteThemeV2Param} */
  static deleteThemeV2() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DuplicateThemeV2Param} */
  static duplicateThemeV2() {
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

  /** @returns {GetApplicationThemeByIdV2Param} */
  static getApplicationThemeByIdV2() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetApplicationThemesCountV2Param} */
  static getApplicationThemesCountV2() {
    return Joi.object({}).required();
  }

  /** @returns {GetApplicationThemesV2Param} */
  static getApplicationThemesV2() {
    return Joi.object({}).required();
  }

  /** @returns {GetAppliedThemeParam} */
  static getAppliedTheme() {
    return Joi.object({}).required();
  }

  /** @returns {GetAppliedThemeV2Param} */
  static getAppliedThemeV2() {
    return Joi.object({}).required();
  }

  /** @returns {GetDefaultPageDetailsParam} */
  static getDefaultPageDetails() {
    return Joi.object({
      pageValue: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetFontsParam} */
  static getFonts() {
    return Joi.object({}).required();
  }

  /** @returns {GetFontsV2Param} */
  static getFontsV2() {
    return Joi.object({}).required();
  }

  /** @returns {GetPageParam} */
  static getPage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      pageValue: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPublicThemesParam} */
  static getPublicThemes() {
    return Joi.object({
      pageSize: Joi.number(),
      pageNo: Joi.number(),
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

  /** @returns {GetThemeLastModifiedV2Param} */
  static getThemeLastModifiedV2() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetThemeLibraryParam} */
  static getThemeLibrary() {
    return Joi.object({
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  }

  /** @returns {GetThemePreviewByIdV2Param} */
  static getThemePreviewByIdV2() {
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

  /** @returns {PublishThemeParam} */
  static publishTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {UnarchiveThemeParam} */
  static unarchiveTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {UnpublishThemeParam} */
  static unpublishTheme() {
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

  /** @returns {UpdateThemeNameV2Param} */
  static updateThemeNameV2() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      body: ThemePlatformModel.UpdateThemeNameRequestBodyV2().required(),
    }).required();
  }

  /** @returns {UpdateThemeV2Param} */
  static updateThemeV2() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      body: ThemePlatformModel.UpdateThemeRequestBodyV2().required(),
    }).required();
  }

  /** @returns {UpgradeApplicationV2Param} */
  static upgradeApplicationV2() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
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
