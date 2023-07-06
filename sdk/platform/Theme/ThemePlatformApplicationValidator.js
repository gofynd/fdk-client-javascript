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
  /** @returns {addThemeToApplicationV2} */
  static addThemeToApplicationV2() {
    return Joi.object({
      body: ThemePlatformModel.ApplyThemeRequestV2().required(),
    }).required();
  }

  /** @returns {addToThemeLibrary} */
  static addToThemeLibrary() {
    return Joi.object({
      body: ThemePlatformModel.AddThemeRequestSchema().required(),
    }).required();
  }

  /** @returns {applyTheme} */
  static applyTheme() {
    return Joi.object({
      body: ThemePlatformModel.AddThemeRequestSchema().required(),
    }).required();
  }

  /** @returns {applyThemeV2} */
  static applyThemeV2() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {archiveTheme} */
  static archiveTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {checkThemeUpgradableV2} */
  static checkThemeUpgradableV2() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {createPage} */
  static createPage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      body: ThemePlatformModel.AvailablePageSchema().required(),
    }).required();
  }

  /** @returns {createTheme} */
  static createTheme() {
    return Joi.object({
      body: ThemePlatformModel.ThemesSchema().required(),
    }).required();
  }

  /** @returns {deletePage} */
  static deletePage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      pageValue: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deleteTheme} */
  static deleteTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deleteThemeV2} */
  static deleteThemeV2() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {duplicateThemeV2} */
  static duplicateThemeV2() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getAllPages} */
  static getAllPages() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getApplicationThemeByIdV2} */
  static getApplicationThemeByIdV2() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getApplicationThemesCountV2} */
  static getApplicationThemesCountV2() {
    return Joi.object({}).required();
  }

  /** @returns {getApplicationThemesV2} */
  static getApplicationThemesV2() {
    return Joi.object({}).required();
  }

  /** @returns {getAppliedTheme} */
  static getAppliedTheme() {
    return Joi.object({}).required();
  }

  /** @returns {getAppliedThemeV2} */
  static getAppliedThemeV2() {
    return Joi.object({}).required();
  }

  /** @returns {getDefaultPageDetails} */
  static getDefaultPageDetails() {
    return Joi.object({
      pageValue: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getFonts} */
  static getFonts() {
    return Joi.object({}).required();
  }

  /** @returns {getFontsV2} */
  static getFontsV2() {
    return Joi.object({}).required();
  }

  /** @returns {getPage} */
  static getPage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      pageValue: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getPublicThemes} */
  static getPublicThemes() {
    return Joi.object({
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  }

  /** @returns {getThemeById} */
  static getThemeById() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getThemeForPreview} */
  static getThemeForPreview() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getThemeLastModified} */
  static getThemeLastModified() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getThemeLastModifiedV2} */
  static getThemeLastModifiedV2() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getThemeLibrary} */
  static getThemeLibrary() {
    return Joi.object({
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  }

  /** @returns {getThemePreviewByIdV2} */
  static getThemePreviewByIdV2() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {isUpgradable} */
  static isUpgradable() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {publishTheme} */
  static publishTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {unarchiveTheme} */
  static unarchiveTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {unpublishTheme} */
  static unpublishTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {updateMultiplePages} */
  static updateMultiplePages() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      body: ThemePlatformModel.AllAvailablePageSchema().required(),
    }).required();
  }

  /** @returns {updatePage} */
  static updatePage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      pageValue: Joi.string().allow("").required(),
      body: ThemePlatformModel.AvailablePageSchema().required(),
    }).required();
  }

  /** @returns {updateTheme} */
  static updateTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      body: ThemePlatformModel.ThemesSchema().required(),
    }).required();
  }

  /** @returns {updateThemeNameV2} */
  static updateThemeNameV2() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      body: ThemePlatformModel.UpdateThemeNameRequestBodyV2().required(),
    }).required();
  }

  /** @returns {updateThemeV2} */
  static updateThemeV2() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      body: ThemePlatformModel.UpdateThemeRequestBodyV2().required(),
    }).required();
  }

  /** @returns {upgradeApplicationV2} */
  static upgradeApplicationV2() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {upgradeTheme} */
  static upgradeTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = ThemePlatformApplicationValidator;
