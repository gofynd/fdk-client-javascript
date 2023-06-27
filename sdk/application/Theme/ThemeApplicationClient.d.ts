export = Theme;
declare class Theme {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getAllPages: string;
        getAppliedTheme: string;
        getAppliedThemeV2: string;
        getPage: string;
        getThemeForPreview: string;
        getThemeForPreviewV2: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {ThemeApplicationValidator.getAllPages} arg - Arg object.
     * @returns {Promise<ThemeApplicationModel.AllAvailablePageSchema>} - Success response
     * @name getAllPages
     * @summary: Get all pages of a theme
     * @description: Use this API to retrieve all the available pages of a theme by its ID.
     */
    getAllPages({ themeId }?: ThemeApplicationValidator.getAllPages): Promise<ThemeApplicationModel.AllAvailablePageSchema>;
    /**
     * @param {ThemeApplicationValidator.getAppliedTheme} arg - Arg object.
     * @returns {Promise<ThemeApplicationModel.ThemesSchema>} - Success response
     * @name getAppliedTheme
     * @summary: Get the theme currently applied to an application
     * @description: An application has multiple themes, but only one theme can be applied at a time. Use this API to retrieve the theme currently applied to the application.
     */
    getAppliedTheme({}?: any): Promise<ThemeApplicationModel.ThemesSchema>;
    /**
     * @param {ThemeApplicationValidator.getAppliedThemeV2} arg - Arg object.
     * @returns {Promise<ThemeApplicationModel.ThemesSchema>} - Success response
     * @name getAppliedThemeV2
     * @summary: Get the theme currently applied to an application
     * @description: An application has multiple themes, but only one theme can be applied at a time. Use this API to retrieve the theme currently applied to the application.
     */
    getAppliedThemeV2({}?: any): Promise<ThemeApplicationModel.ThemesSchema>;
    /**
     * @param {ThemeApplicationValidator.getPage} arg - Arg object.
     * @returns {Promise<ThemeApplicationModel.AvailablePageSchema>} - Success response
     * @name getPage
     * @summary: Get page of a theme
     * @description: Use this API to retrieve a page of a theme.
     */
    getPage({ themeId, pageValue }?: ThemeApplicationValidator.getPage): Promise<ThemeApplicationModel.AvailablePageSchema>;
    /**
     * @param {ThemeApplicationValidator.getThemeForPreview} arg - Arg object.
     * @returns {Promise<ThemeApplicationModel.ThemesSchema>} - Success response
     * @name getThemeForPreview
     * @summary: Get a theme for a preview
     * @description: A theme can be previewed before applying it. Use this API to retrieve the preview of a theme by its ID.
     */
    getThemeForPreview({ themeId }?: ThemeApplicationValidator.getThemeForPreview): Promise<ThemeApplicationModel.ThemesSchema>;
    /**
     * @param {ThemeApplicationValidator.getThemeForPreviewV2} arg - Arg object.
     * @returns {Promise<ThemeApplicationModel.ThemesSchema>} - Success response
     * @name getThemeForPreviewV2
     * @summary: Get a theme for a preview
     * @description: A theme can be previewed before applying it. Use this API to retrieve the preview of a theme by its ID.
     */
    getThemeForPreviewV2({ themeId }?: ThemeApplicationValidator.getThemeForPreviewV2): Promise<ThemeApplicationModel.ThemesSchema>;
}
import ThemeApplicationValidator = require("./ThemeApplicationValidator");
import ThemeApplicationModel = require("./ThemeApplicationModel");
