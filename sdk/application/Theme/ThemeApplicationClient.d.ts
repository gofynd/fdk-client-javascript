export = Theme;
declare class Theme {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getAllPages: string;
        getAppliedTheme: string;
        getAppliedThemeV1: string;
        getPage: string;
        getThemeForPreview: string;
        getThemeForPreviewV1: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {ThemeApplicationValidator.GetAllPagesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ThemeApplicationModel.AllAvailablePageSchema>} - Success response
     * @name getAllPages
     * @summary: Fetch all pages.
     * @description: Retrieves a list of all the pages available within the applied theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getAllPages/).
     */
    getAllPages({ themeId, requestHeaders }?: ThemeApplicationValidator.GetAllPagesParam, { responseHeaders }?: object): Promise<ThemeApplicationModel.AllAvailablePageSchema>;
    /**
     * @param {ThemeApplicationValidator.GetAppliedThemeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ThemeApplicationModel.ThemesSchema>} - Success response
     * @name getAppliedTheme
     * @summary: Current theme.
     * @description: Gets the theme currently applied to the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getAppliedTheme/).
     */
    getAppliedTheme({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ThemeApplicationModel.ThemesSchema>;
    /**
     * @param {ThemeApplicationValidator.GetAppliedThemeV1Param} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ThemeApplicationModel.ThemesSchema>} - Success response
     * @name getAppliedThemeV1
     * @summary: Current theme.
     * @description: Gets the theme currently applied to the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getAppliedThemeV1/).
     */
    getAppliedThemeV1({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ThemeApplicationModel.ThemesSchema>;
    /**
     * @param {ThemeApplicationValidator.GetPageParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ThemeApplicationModel.AvailablePageSchema>} - Success response
     * @name getPage
     * @summary: Single page details.
     * @description: Retrieve detailed information for a specific page within the theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getPage/).
     */
    getPage({ themeId, pageValue, filters, company, requestHeaders }?: ThemeApplicationValidator.GetPageParam, { responseHeaders }?: object): Promise<ThemeApplicationModel.AvailablePageSchema>;
    /**
     * @param {ThemeApplicationValidator.GetThemeForPreviewParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ThemeApplicationModel.ThemesSchema>} - Success response
     * @name getThemeForPreview
     * @summary: Preview theme.
     * @description: Retrieves a theme for previewing before applying it to the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getThemeForPreview/).
     */
    getThemeForPreview({ themeId, requestHeaders }?: ThemeApplicationValidator.GetThemeForPreviewParam, { responseHeaders }?: object): Promise<ThemeApplicationModel.ThemesSchema>;
    /**
     * @param {ThemeApplicationValidator.GetThemeForPreviewV1Param} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ThemeApplicationModel.ThemesSchema>} - Success response
     * @name getThemeForPreviewV1
     * @summary: Preview theme.
     * @description: Retrieves a theme for previewing before applying it to the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getThemeForPreviewV1/).
     */
    getThemeForPreviewV1({ themeId, requestHeaders }?: ThemeApplicationValidator.GetThemeForPreviewV1Param, { responseHeaders }?: object): Promise<ThemeApplicationModel.ThemesSchema>;
}
import ThemeApplicationValidator = require("sdk/output/javascript/code/sdk/application/Theme/ThemeApplicationValidator");
import ThemeApplicationModel = require("sdk/output/javascript/code/sdk/application/Theme/ThemeApplicationModel");
