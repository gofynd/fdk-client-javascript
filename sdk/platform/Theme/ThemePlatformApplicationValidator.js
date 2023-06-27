const Joi = require("joi");

const ThemePlatformModel = require("./ThemePlatformModel");

/**
 * @typedef addThemeToApplicationV2
 * @property {ThemePlatformModel.ApplyThemeRequestV2} body
 */

/**
 * @typedef addToThemeLibrary
 * @property {ThemePlatformModel.AddThemeRequestSchema} body
 */

/**
 * @typedef applyTheme
 * @property {ThemePlatformModel.AddThemeRequestSchema} body
 */

/**
 * @typedef applyThemeV2
 * @property {string} themeId - The ID of the apply
 */

/**
 * @typedef archiveTheme
 * @property {string} themeId - ID allotted to the theme.
 */

/**
 * @typedef checkThemeUpgradableV2
 * @property {string} themeId - The ID of the theme
 */

/**
 * @typedef createPage
 * @property {string} themeId - ID of the theme
 * @property {ThemePlatformModel.AvailablePageSchema} body
 */

/**
 * @typedef createTheme
 * @property {ThemePlatformModel.ThemesSchema} body
 */

/**
 * @typedef deletePage
 * @property {string} themeId - ID of the theme
 * @property {string} pageValue - Value of the page to be updated
 */

/**
 * @typedef deleteTheme
 * @property {string} themeId - ID allotted to the theme.
 */

/**
 * @typedef deleteThemeV2
 * @property {string} themeId - The ID of the theme to be deleted.
 */

/**
 * @typedef duplicateThemeV2
 * @property {string} themeId - The ID of the theme to be duplicated
 */

/**
 * @typedef getAllPages
 * @property {string} themeId - ID of the theme to be retrieved
 */

/**
 * @typedef getApplicationThemeByIdV2
 * @property {string} themeId - The ID of the theme
 */

/** @typedef getApplicationThemesCountV2 */

/** @typedef getApplicationThemesV2 */

/** @typedef getAppliedTheme */

/** @typedef getAppliedThemeV2 */

/** @typedef getFonts */

/** @typedef getFontsV2 */

/**
 * @typedef getPage
 * @property {string} themeId - ID of the theme to be retrieved
 * @property {string} pageValue - Value of the page to be retrieved
 */

/**
 * @typedef getPublicThemes
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 */

/**
 * @typedef getThemeById
 * @property {string} themeId - ID allotted to the theme.
 */

/**
 * @typedef getThemeForPreview
 * @property {string} themeId - ID allotted to the theme.
 */

/**
 * @typedef getThemeLastModified
 * @property {string} themeId - ID allotted to the theme.
 */

/**
 * @typedef getThemeLastModifiedV2
 * @property {string} themeId - ID allotted to the theme.
 */

/**
 * @typedef getThemeLibrary
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 */

/**
 * @typedef getThemePreviewByIdV2
 * @property {string} themeId - The ID of the theme
 */

/**
 * @typedef isUpgradable
 * @property {string} themeId - Theme ID
 */

/**
 * @typedef publishTheme
 * @property {string} themeId - ID allotted to the theme.
 */

/**
 * @typedef unarchiveTheme
 * @property {string} themeId - ID allotted to the theme.
 */

/**
 * @typedef unpublishTheme
 * @property {string} themeId - ID allotted to the theme.
 */

/**
 * @typedef updateMultiplePages
 * @property {string} themeId - ID of the theme to be retrieved
 * @property {ThemePlatformModel.AllAvailablePageSchema} body
 */

/**
 * @typedef updatePage
 * @property {string} themeId - ID of the theme
 * @property {string} pageValue - Value of the page to be updated
 * @property {ThemePlatformModel.AvailablePageSchema} body
 */

/**
 * @typedef updateTheme
 * @property {string} themeId - ID allotted to the theme.
 * @property {ThemePlatformModel.ThemesSchema} body
 */

/**
 * @typedef updateThemeNameV2
 * @property {string} themeId - The ID of the theme to be updated.
 * @property {ThemePlatformModel.UpdateThemeNameRequestBodyV2} body
 */

/**
 * @typedef updateThemeV2
 * @property {string} themeId - The ID of the theme.
 * @property {ThemePlatformModel.UpdateThemeRequestBodyV2} body
 */

/**
 * @typedef upgradeApplicationV2
 * @property {string} themeId - The ID of the upgrade
 */

/**
 * @typedef upgradeTheme
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
