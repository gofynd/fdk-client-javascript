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
    /** @returns {GetAllPagesParam} */
    static getAllPages(): GetAllPagesParam;
    /** @returns {GetAppliedThemeParam} */
    static getAppliedTheme(): any;
    /** @returns {GetAppliedThemeV2Param} */
    static getAppliedThemeV2(): any;
    /** @returns {GetPageParam} */
    static getPage(): GetPageParam;
    /** @returns {GetThemeForPreviewParam} */
    static getThemeForPreview(): GetThemeForPreviewParam;
    /** @returns {GetThemeForPreviewV2Param} */
    static getThemeForPreviewV2(): GetThemeForPreviewV2Param;
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
type GetAppliedThemeParam = any;
type GetAppliedThemeV2Param = any;
