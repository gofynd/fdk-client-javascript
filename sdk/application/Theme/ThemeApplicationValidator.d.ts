export = ThemeApplicationValidator;
/**
 * @typedef GetAllPagesParam
 * @property {string} themeId - ID of the theme to be retrieved
 */
/** @typedef GetAppliedThemeParam */
/** @typedef GetAppliedThemeV2Param */
/**
 * @typedef GetPageParam
 * @property {string} themeId - ID of the theme to be retrieved
 * @property {string} pageValue - Value of the page to be retrieved
 */
/**
 * @typedef GetThemeForPreviewParam
 * @property {string} themeId - ID of the theme to be retrieved
 */
/**
 * @typedef GetThemeForPreviewV2Param
 * @property {string} themeId - ID of the theme to be retrieved
 */
declare class ThemeApplicationValidator {
    /** @returns {getAllPages} */
    static getAllPages(): getAllPages;
    /** @returns {getAppliedTheme} */
    static getAppliedTheme(): getAppliedTheme;
    /** @returns {getAppliedThemeV2} */
    static getAppliedThemeV2(): getAppliedThemeV2;
    /** @returns {getPage} */
    static getPage(): getPage;
    /** @returns {getThemeForPreview} */
    static getThemeForPreview(): getThemeForPreview;
    /** @returns {getThemeForPreviewV2} */
    static getThemeForPreviewV2(): getThemeForPreviewV2;
}
declare namespace ThemeApplicationValidator {
    export { GetAllPagesParam, GetAppliedThemeParam, GetAppliedThemeV2Param, GetPageParam, GetThemeForPreviewParam, GetThemeForPreviewV2Param };
}
type GetAllPagesParam = {
    /**
     * - ID of the theme to be retrieved
     */
    themeId: string;
};
type GetAppliedThemeParam = any;
type GetAppliedThemeV2Param = any;
type GetPageParam = {
    /**
     * - ID of the theme to be retrieved
     */
    themeId: string;
    /**
     * - Value of the page to be retrieved
     */
    pageValue: string;
};
type GetThemeForPreviewParam = {
    /**
     * - ID of the theme to be retrieved
     */
    themeId: string;
};
type GetThemeForPreviewV2Param = {
    /**
     * - ID of the theme to be retrieved
     */
    themeId: string;
};
