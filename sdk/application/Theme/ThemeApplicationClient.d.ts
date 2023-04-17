export = Theme;
declare class Theme {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getAllPages: string;
        getAppliedTheme: string;
        getPage: string;
        getThemeForPreview: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @returns {Promise<AllAvailablePageSchema>} - Success response
     * @summary: Get all pages of a theme
     * @description: Use this API to retrieve all the available pages of a theme by its ID.
     */
    getAllPages({ themeId }?: {
        themeId: string;
    }): Promise<AllAvailablePageSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<ThemesSchema>} - Success response
     * @summary: Get the theme currently applied to an application
     * @description: An application has multiple themes, but only one theme can be applied at a time. Use this API to retrieve the theme currently applied to the application.
     */
    getAppliedTheme({}?: any): Promise<ThemesSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @param {string} arg.pageValue - Value of the page to be retrieved
     * @returns {Promise<AvailablePageSchema>} - Success response
     * @summary: Get page of a theme
     * @description: Use this API to retrieve a page of a theme.
     */
    getPage({ themeId, pageValue }?: {
        themeId: string;
        pageValue: string;
    }): Promise<AvailablePageSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @returns {Promise<ThemesSchema>} - Success response
     * @summary: Get a theme for a preview
     * @description: A theme can be previewed before applying it. Use this API to retrieve the preview of a theme by its ID.
     */
    getThemeForPreview({ themeId }?: {
        themeId: string;
    }): Promise<ThemesSchema>;
}
