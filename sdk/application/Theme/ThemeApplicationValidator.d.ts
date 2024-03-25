export = ThemeApplicationValidator;
/**
 * @typedef GetAllPagesParam
 * @property {string} themeId - ID of the theme to be retrieved
 */
/** @typedef GetAppliedThemeParam */
/** @typedef GetAppliedThemeV1Param */
/**
 * @typedef GetPageParam
 * @property {string} themeId - ID of the theme to be retrieved
 * @property {string} pageValue - Value of the page to be retrieved
 * @property {string} [filters] - Filters on sections to be applied or not
 * @property {number} [company] - Company id of the application
 */
/**
 * @typedef GetThemeForPreviewParam
 * @property {string} themeId - ID of the theme to be retrieved
 */
/**
 * @typedef GetThemeForPreviewV1Param
 * @property {string} themeId - ID of the theme to be retrieved
 */
declare class ThemeApplicationValidator {
    /** @returns {GetAllPagesParam} */
    static getAllPages(): GetAllPagesParam;
    /** @returns {GetAppliedThemeParam} */
    static getAppliedTheme(): any;
    /** @returns {GetAppliedThemeV1Param} */
    static getAppliedThemeV1(): any;
    /** @returns {GetPageParam} */
    static getPage(): GetPageParam;
    /** @returns {GetThemeForPreviewParam} */
    static getThemeForPreview(): GetThemeForPreviewParam;
    /** @returns {GetThemeForPreviewV1Param} */
    static getThemeForPreviewV1(): GetThemeForPreviewV1Param;
}
declare namespace ThemeApplicationValidator {
    export { GetAllPagesParam, GetAppliedThemeParam, GetAppliedThemeV1Param, GetPageParam, GetThemeForPreviewParam, GetThemeForPreviewV1Param };
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
    /**
     * - Filters on sections to be applied or not
     */
    filters?: string;
    /**
     * - Company id of the application
     */
    company?: number;
};
type GetThemeForPreviewParam = {
    /**
     * - ID of the theme to be retrieved
     */
    themeId: string;
};
type GetThemeForPreviewV1Param = {
    /**
     * - ID of the theme to be retrieved
     */
    themeId: string;
};
type GetAppliedThemeParam = any;
type GetAppliedThemeV1Param = any;
