export = ThemeApplicationValidator;
/**
 * @typedef GetAllPagesParam
 * @property {string} themeId - Id of the theme to be retrieved.
 */
/**
 * @typedef GetAppliedThemeParam
 * @property {boolean} [filters] - Filters on sections to be applied or not.
 */
/**
 * @typedef GetPageParam
 * @property {string} themeId - Id of the theme to be retrieved.
 * @property {string} pageValue - Value of the page to be retrieved.
 * @property {string} [filters] - Filters on sections to be applied or not.
 * @property {string} [sectionPreviewHash] - Unique hash id on sections preview.
 * @property {number} [company] - Company id of the application.
 */
/**
 * @typedef GetThemeForPreviewParam
 * @property {string} themeId - Id of the theme to be retrieved.
 * @property {boolean} [filters] - Filters on sections to be applied or not.
 */
declare class ThemeApplicationValidator {
    /** @returns {GetAllPagesParam} */
    static getAllPages(): GetAllPagesParam;
    /** @returns {GetAppliedThemeParam} */
    static getAppliedTheme(): GetAppliedThemeParam;
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
     * - Id of the theme to be retrieved.
     */
    themeId: string;
};
type GetAppliedThemeParam = {
    /**
     * - Filters on sections to be applied or not.
     */
    filters?: boolean;
};
type GetPageParam = {
    /**
     * - Id of the theme to be retrieved.
     */
    themeId: string;
    /**
     * - Value of the page to be retrieved.
     */
    pageValue: string;
    /**
     * - Filters on sections to be applied or not.
     */
    filters?: string;
    /**
     * - Unique hash id on sections preview.
     */
    sectionPreviewHash?: string;
    /**
     * - Company id of the application.
     */
    company?: number;
};
type GetThemeForPreviewParam = {
    /**
     * - Id of the theme to be retrieved.
     */
    themeId: string;
    /**
     * - Filters on sections to be applied or not.
     */
    filters?: boolean;
};
