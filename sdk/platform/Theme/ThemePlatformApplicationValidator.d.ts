export = ThemePlatformApplicationValidator;
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
/**
 * @typedef getDefaultPageDetails
 * @property {string} pageValue - Value of the page to be retrieved
 */
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
declare class ThemePlatformApplicationValidator {
}
declare namespace ThemePlatformApplicationValidator {
    export { addThemeToApplicationV2, addToThemeLibrary, applyTheme, applyThemeV2, archiveTheme, checkThemeUpgradableV2, createPage, createTheme, deletePage, deleteTheme, deleteThemeV2, duplicateThemeV2, getAllPages, getApplicationThemeByIdV2, getApplicationThemesCountV2, getApplicationThemesV2, getAppliedTheme, getAppliedThemeV2, getDefaultPageDetails, getFonts, getFontsV2, getPage, getPublicThemes, getThemeById, getThemeForPreview, getThemeLastModified, getThemeLastModifiedV2, getThemeLibrary, getThemePreviewByIdV2, isUpgradable, publishTheme, unarchiveTheme, unpublishTheme, updateMultiplePages, updatePage, updateTheme, updateThemeNameV2, updateThemeV2, upgradeApplicationV2, upgradeTheme };
}
/** @returns {addThemeToApplicationV2} */
declare function addThemeToApplicationV2(): addThemeToApplicationV2;
type addThemeToApplicationV2 = {
    body: ThemePlatformModel.ApplyThemeRequestV2;
};
/** @returns {addToThemeLibrary} */
declare function addToThemeLibrary(): addToThemeLibrary;
type addToThemeLibrary = {
    body: ThemePlatformModel.AddThemeRequestSchema;
};
/** @returns {applyTheme} */
declare function applyTheme(): applyTheme;
type applyTheme = {
    body: ThemePlatformModel.AddThemeRequestSchema;
};
/** @returns {applyThemeV2} */
declare function applyThemeV2(): applyThemeV2;
type applyThemeV2 = {
    /**
     * - The ID of the apply
     */
    themeId: string;
};
/** @returns {archiveTheme} */
declare function archiveTheme(): archiveTheme;
type archiveTheme = {
    /**
     * - ID allotted to the theme.
     */
    themeId: string;
};
/** @returns {checkThemeUpgradableV2} */
declare function checkThemeUpgradableV2(): checkThemeUpgradableV2;
type checkThemeUpgradableV2 = {
    /**
     * - The ID of the theme
     */
    themeId: string;
};
/** @returns {createPage} */
declare function createPage(): createPage;
type createPage = {
    /**
     * - ID of the theme
     */
    themeId: string;
    body: ThemePlatformModel.AvailablePageSchema;
};
/** @returns {createTheme} */
declare function createTheme(): createTheme;
type createTheme = {
    body: ThemePlatformModel.ThemesSchema;
};
/** @returns {deletePage} */
declare function deletePage(): deletePage;
type deletePage = {
    /**
     * - ID of the theme
     */
    themeId: string;
    /**
     * - Value of the page to be updated
     */
    pageValue: string;
};
/** @returns {deleteTheme} */
declare function deleteTheme(): deleteTheme;
type deleteTheme = {
    /**
     * - ID allotted to the theme.
     */
    themeId: string;
};
/** @returns {deleteThemeV2} */
declare function deleteThemeV2(): deleteThemeV2;
type deleteThemeV2 = {
    /**
     * - The ID of the theme to be deleted.
     */
    themeId: string;
};
/** @returns {duplicateThemeV2} */
declare function duplicateThemeV2(): duplicateThemeV2;
type duplicateThemeV2 = {
    /**
     * - The ID of the theme to be duplicated
     */
    themeId: string;
};
/** @returns {getAllPages} */
declare function getAllPages(): getAllPages;
type getAllPages = {
    /**
     * - ID of the theme to be retrieved
     */
    themeId: string;
};
/** @returns {getApplicationThemeByIdV2} */
declare function getApplicationThemeByIdV2(): getApplicationThemeByIdV2;
type getApplicationThemeByIdV2 = {
    /**
     * - The ID of the theme
     */
    themeId: string;
};
/** @returns {getApplicationThemesCountV2} */
declare function getApplicationThemesCountV2(): any;
type getApplicationThemesCountV2 = any;
/** @returns {getApplicationThemesV2} */
declare function getApplicationThemesV2(): any;
type getApplicationThemesV2 = any;
/** @returns {getAppliedTheme} */
declare function getAppliedTheme(): any;
type getAppliedTheme = any;
/** @returns {getAppliedThemeV2} */
declare function getAppliedThemeV2(): any;
type getAppliedThemeV2 = any;
/** @returns {getDefaultPageDetails} */
declare function getDefaultPageDetails(): getDefaultPageDetails;
type getDefaultPageDetails = {
    /**
     * - Value of the page to be retrieved
     */
    pageValue: string;
};
/** @returns {getFonts} */
declare function getFonts(): any;
type getFonts = any;
/** @returns {getFontsV2} */
declare function getFontsV2(): any;
type getFontsV2 = any;
/** @returns {getPage} */
declare function getPage(): getPage;
type getPage = {
    /**
     * - ID of the theme to be retrieved
     */
    themeId: string;
    /**
     * - Value of the page to be retrieved
     */
    pageValue: string;
};
/** @returns {getPublicThemes} */
declare function getPublicThemes(): getPublicThemes;
type getPublicThemes = {
    /**
     * - The number of items to retrieve in each page.
     * Default value is 10.
     */
    pageSize?: number;
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
};
/** @returns {getThemeById} */
declare function getThemeById(): getThemeById;
type getThemeById = {
    /**
     * - ID allotted to the theme.
     */
    themeId: string;
};
/** @returns {getThemeForPreview} */
declare function getThemeForPreview(): getThemeForPreview;
type getThemeForPreview = {
    /**
     * - ID allotted to the theme.
     */
    themeId: string;
};
/** @returns {getThemeLastModified} */
declare function getThemeLastModified(): getThemeLastModified;
type getThemeLastModified = {
    /**
     * - ID allotted to the theme.
     */
    themeId: string;
};
/** @returns {getThemeLastModifiedV2} */
declare function getThemeLastModifiedV2(): getThemeLastModifiedV2;
type getThemeLastModifiedV2 = {
    /**
     * - ID allotted to the theme.
     */
    themeId: string;
};
/** @returns {getThemeLibrary} */
declare function getThemeLibrary(): getThemeLibrary;
type getThemeLibrary = {
    /**
     * - The number of items to retrieve in each page.
     * Default value is 10.
     */
    pageSize?: number;
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
};
/** @returns {getThemePreviewByIdV2} */
declare function getThemePreviewByIdV2(): getThemePreviewByIdV2;
type getThemePreviewByIdV2 = {
    /**
     * - The ID of the theme
     */
    themeId: string;
};
/** @returns {isUpgradable} */
declare function isUpgradable(): isUpgradable;
type isUpgradable = {
    /**
     * - Theme ID
     */
    themeId: string;
};
/** @returns {publishTheme} */
declare function publishTheme(): publishTheme;
type publishTheme = {
    /**
     * - ID allotted to the theme.
     */
    themeId: string;
};
/** @returns {unarchiveTheme} */
declare function unarchiveTheme(): unarchiveTheme;
type unarchiveTheme = {
    /**
     * - ID allotted to the theme.
     */
    themeId: string;
};
/** @returns {unpublishTheme} */
declare function unpublishTheme(): unpublishTheme;
type unpublishTheme = {
    /**
     * - ID allotted to the theme.
     */
    themeId: string;
};
/** @returns {updateMultiplePages} */
declare function updateMultiplePages(): updateMultiplePages;
type updateMultiplePages = {
    /**
     * - ID of the theme to be retrieved
     */
    themeId: string;
    body: ThemePlatformModel.AllAvailablePageSchema;
};
/** @returns {updatePage} */
declare function updatePage(): updatePage;
type updatePage = {
    /**
     * - ID of the theme
     */
    themeId: string;
    /**
     * - Value of the page to be updated
     */
    pageValue: string;
    body: ThemePlatformModel.AvailablePageSchema;
};
/** @returns {updateTheme} */
declare function updateTheme(): updateTheme;
type updateTheme = {
    /**
     * - ID allotted to the theme.
     */
    themeId: string;
    body: ThemePlatformModel.ThemesSchema;
};
/** @returns {updateThemeNameV2} */
declare function updateThemeNameV2(): updateThemeNameV2;
type updateThemeNameV2 = {
    /**
     * - The ID of the theme to be updated.
     */
    themeId: string;
    body: ThemePlatformModel.UpdateThemeNameRequestBodyV2;
};
/** @returns {updateThemeV2} */
declare function updateThemeV2(): updateThemeV2;
type updateThemeV2 = {
    /**
     * - The ID of the theme.
     */
    themeId: string;
    body: ThemePlatformModel.UpdateThemeRequestBodyV2;
};
/** @returns {upgradeApplicationV2} */
declare function upgradeApplicationV2(): upgradeApplicationV2;
type upgradeApplicationV2 = {
    /**
     * - The ID of the upgrade
     */
    themeId: string;
};
/** @returns {upgradeTheme} */
declare function upgradeTheme(): upgradeTheme;
type upgradeTheme = {
    /**
     * - ID allotted to the theme.
     */
    themeId: string;
};
import ThemePlatformModel = require("./ThemePlatformModel");
