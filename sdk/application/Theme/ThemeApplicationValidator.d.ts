export = ThemeApplicationValidator;
/**
 * @typedef GetAllPagesParam
 * @property {string} themeId - ID of the theme to be retrieved
 */
/** @typedef GetAppliedThemeParam */
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
declare class ThemeApplicationValidator {
    /** @returns {GetAllPagesParam} */
    static getAllPages(): GetAllPagesParam;
    /** @returns {GetAppliedThemeParam} */
    static getAppliedTheme(): any;
    /** @returns {GetPageParam} */
    static getPage(): GetPageParam;
    /** @returns {GetThemeForPreviewParam} */
    static getThemeForPreview(): GetThemeForPreviewParam;
}
declare namespace ThemeApplicationValidator {
    export { GetAllPagesParam, GetAppliedThemeParam, GetPageParam, GetThemeForPreviewParam };
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
type GetAppliedThemeParam = any;
