export = ThemeApplicationValidator;
/**
 * @typedef getAllPages
 * @property {string} themeId - ID of the theme to be retrieved
 */
/** @typedef getAppliedTheme */
/** @typedef getAppliedThemeV2 */
/**
 * @typedef getPage
 * @property {string} themeId - ID of the theme to be retrieved
 * @property {string} pageValue - Value of the page to be retrieved
 */
/**
 * @typedef getThemeForPreview
 * @property {string} themeId - ID of the theme to be retrieved
 */
/**
 * @typedef getThemeForPreviewV2
 * @property {string} themeId - ID of the theme to be retrieved
 */
declare class ThemeApplicationValidator {
}
declare namespace ThemeApplicationValidator {
    export { getAllPages, getAppliedTheme, getAppliedThemeV2, getPage, getThemeForPreview, getThemeForPreviewV2 };
}
/** @returns {getAllPages} */
declare function getAllPages(): getAllPages;
type getAllPages = {
    /**
     * - ID of the theme to be retrieved
     */
    themeId: string;
};
/** @returns {getAppliedTheme} */
declare function getAppliedTheme(): any;
type getAppliedTheme = any;
/** @returns {getAppliedThemeV2} */
declare function getAppliedThemeV2(): any;
type getAppliedThemeV2 = any;
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
/** @returns {getThemeForPreview} */
declare function getThemeForPreview(): getThemeForPreview;
type getThemeForPreview = {
    /**
     * - ID of the theme to be retrieved
     */
    themeId: string;
};
/** @returns {getThemeForPreviewV2} */
declare function getThemeForPreviewV2(): getThemeForPreviewV2;
type getThemeForPreviewV2 = {
    /**
     * - ID of the theme to be retrieved
     */
    themeId: string;
};
