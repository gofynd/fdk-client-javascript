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
     * @param {ThemeApplicationValidator.GetAllPagesParam} arg - Arg object.
     * @returns {Promise<ThemeApplicationModel.AllAvailablePageSchema>} - Success response
     * @name getAllPages
     * @summary: Get all pages of a theme
     * @description: Use this API to retrieve all the available pages of a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getAllPages/).
     */
    getAllPages({ themeId }?: ThemeApplicationValidator.GetAllPagesParam): Promise<ThemeApplicationModel.AllAvailablePageSchema>;
    /**
     * @param {ThemeApplicationValidator.GetAppliedThemeParam} arg - Arg object.
     * @returns {Promise<ThemeApplicationModel.ThemesSchema>} - Success response
     * @name getAppliedTheme
     * @summary: Get the theme currently applied to an application
     * @description: An application has multiple themes, but only one theme can be applied at a time. Use this API to retrieve the theme currently applied to the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getAppliedTheme/).
     */
    getAppliedTheme({}?: any): Promise<ThemeApplicationModel.ThemesSchema>;
    /**
     * @param {ThemeApplicationValidator.GetPageParam} arg - Arg object.
     * @returns {Promise<ThemeApplicationModel.AvailablePageSchema>} - Success response
     * @name getPage
     * @summary: Get page of a theme
     * @description: Use this API to retrieve a page of a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getPage/).
     */
    getPage({ themeId, pageValue }?: ThemeApplicationValidator.GetPageParam): Promise<ThemeApplicationModel.AvailablePageSchema>;
    /**
     * @param {ThemeApplicationValidator.GetThemeForPreviewParam} arg - Arg object.
     * @returns {Promise<ThemeApplicationModel.ThemesSchema>} - Success response
     * @name getThemeForPreview
     * @summary: Get a theme for a preview
     * @description: A theme can be previewed before applying it. Use this API to retrieve the preview of a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getThemeForPreview/).
     */
    getThemeForPreview({ themeId }?: ThemeApplicationValidator.GetThemeForPreviewParam): Promise<ThemeApplicationModel.ThemesSchema>;
}
import ThemeApplicationValidator = require("./ThemeApplicationValidator");
import ThemeApplicationModel = require("./ThemeApplicationModel");
