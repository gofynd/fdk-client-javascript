export = Theme;
declare class Theme {
    constructor(config: any);
    config: any;
    /**
     * @param {ThemePlatformValidator.AddMarketplaceThemeToCompanyParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.CompanyThemeSchema>} - Success response
     * @name addMarketplaceThemeToCompany
     * @summary: Add a theme to a company
     * @description: Add a marketplace theme to a company by providing the theme ID and company ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/addMarketplaceThemeToCompany/).
     */
    addMarketplaceThemeToCompany({ body, requestHeaders }?: ThemePlatformValidator.AddMarketplaceThemeToCompanyParam, { responseHeaders }?: object): Promise<ThemePlatformModel.CompanyThemeSchema>;
    /**
     * @param {ThemePlatformValidator.DeleteCompanyThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.CompanyThemeSchema>} - Success response
     * @name deleteCompanyTheme
     * @summary: Delete a theme
     * @description: Delete a specific theme for a company by providing the company ID and theme ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/deleteCompanyTheme/).
     */
    deleteCompanyTheme({ themeId, requestHeaders }?: ThemePlatformValidator.DeleteCompanyThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.CompanyThemeSchema>;
    /**
     * @param {ThemePlatformValidator.GetCompanyLevelPrivateThemesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.CompanyPrivateTheme[]>} - Success response
     * @name getCompanyLevelPrivateThemes
     * @summary: Get private themes for a company
     * @description: Retrieve a list of private themes available for a specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getCompanyLevelPrivateThemes/).
     */
    getCompanyLevelPrivateThemes({ searchText, requestHeaders }?: ThemePlatformValidator.GetCompanyLevelPrivateThemesParam, { responseHeaders }?: object): Promise<ThemePlatformModel.CompanyPrivateTheme[]>;
    /**
     * @param {ThemePlatformValidator.GetCompanyLevelThemesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.CompanyThemeSchema[]>} - Success response
     * @name getCompanyLevelThemes
     * @summary: Get themes for a company
     * @description: Retrieve a list of themes available for a specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getCompanyLevelThemes/).
     */
    getCompanyLevelThemes({ searchText, requestHeaders }?: ThemePlatformValidator.GetCompanyLevelThemesParam, { responseHeaders }?: object): Promise<ThemePlatformModel.CompanyThemeSchema[]>;
}
import ThemePlatformValidator = require("./ThemePlatformValidator");
import ThemePlatformModel = require("./ThemePlatformModel");
