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
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ThemeApplicationModel.AllAvailablePageSchema>} - Success response
     * @name getAllPages
     * @summary: List pages
     * @description: Get all page level configs, sections and seo data of a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getAllPages/).
     */
    getAllPages({ themeId, requestHeaders }?: ThemeApplicationValidator.GetAllPagesParam, { responseHeaders }?: object): Promise<ThemeApplicationModel.AllAvailablePageSchema>;
    /**
     * @param {ThemeApplicationValidator.GetAppliedThemeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ThemeApplicationModel.ThemesSchema>} - Success response
     * @name getAppliedTheme
     * @summary: Get applied theme
     * @description: Gets the theme configuration and template details of a theme applied to the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getAppliedTheme/).
     */
    getAppliedTheme({ filters, requestHeaders }?: ThemeApplicationValidator.GetAppliedThemeParam, { responseHeaders }?: object): Promise<ThemeApplicationModel.ThemesSchema>;
    /**
     * @param {ThemeApplicationValidator.GetPageParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ThemeApplicationModel.AvailablePageSchema>} - Success response
     * @name getPage
     * @summary: Get theme page
     * @description: Get page level configurations, applied sections and seo data of a page by `page_value` received from list pages api. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getPage/).
     */
    getPage({ themeId, pageValue, filters, sectionPreviewHash, company, requestHeaders, }?: ThemeApplicationValidator.GetPageParam, { responseHeaders }?: object): Promise<ThemeApplicationModel.AvailablePageSchema>;
    /**
     * @param {ThemeApplicationValidator.GetThemeForPreviewParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ThemeApplicationModel.ThemesSchema>} - Success response
     * @name getThemeForPreview
     * @summary: Get theme for preview
     * @description: Gets the theme configuration and template details of a theme by theme id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getThemeForPreview/).
     */
    getThemeForPreview({ themeId, filters, requestHeaders }?: ThemeApplicationValidator.GetThemeForPreviewParam, { responseHeaders }?: object): Promise<ThemeApplicationModel.ThemesSchema>;
}
import ThemeApplicationValidator = require("./ThemeApplicationValidator");
import ThemeApplicationModel = require("./ThemeApplicationModel");
