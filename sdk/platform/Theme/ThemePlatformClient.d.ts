export = Theme;
declare class Theme {
    constructor(config: any);
    config: any;
    /**
     * @param {ThemePlatformValidator.AddMarketplaceThemeToCompanyParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.CompanyThemeResponse>} - Success response
     * @name addMarketplaceThemeToCompany
     * @summary: Add marketplace theme to company.
     * @description: Incorporate a marketplace theme into a company's profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/addMarketplaceThemeToCompany/).
     */
    addMarketplaceThemeToCompany({ body, requestHeaders }?: ThemePlatformValidator.AddMarketplaceThemeToCompanyParam, { responseHeaders }?: object): Promise<ThemePlatformModel.CompanyThemeResponse>;
    /**
     * @param {ThemePlatformValidator.DeleteCompanyThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.CompanyThemeResponse>} - Success response
     * @name deleteCompanyTheme
     * @summary: Delete company theme.
     * @description: Remove a theme associated with a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/deleteCompanyTheme/).
     */
    deleteCompanyTheme({ themeId, requestHeaders }?: ThemePlatformValidator.DeleteCompanyThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.CompanyThemeResponse>;
    /**
     * @param {ThemePlatformValidator.GetCompanyLevelPrivateThemesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.CompanyThemeResponse[]>} - Success response
     * @name getCompanyLevelPrivateThemes
     * @summary: Get private themes for a company
     * @description: Retrieve a list of private themes available for a specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getCompanyLevelPrivateThemes/).
     */
    getCompanyLevelPrivateThemes({ searchText, requestHeaders }?: ThemePlatformValidator.GetCompanyLevelPrivateThemesParam, { responseHeaders }?: object): Promise<ThemePlatformModel.CompanyThemeResponse[]>;
    /**
     * @param {ThemePlatformValidator.GetCompanyLevelThemesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.CompanyThemeSchema[]>} - Success response
     * @name getCompanyLevelThemes
     * @summary: Get company-level themes.
     * @description: Retrieve themes specific to a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getCompanyLevelThemes/).
     */
    getCompanyLevelThemes({ searchText, requestHeaders }?: ThemePlatformValidator.GetCompanyLevelThemesParam, { responseHeaders }?: object): Promise<ThemePlatformModel.CompanyThemeSchema[]>;
    /**
     * @param {ThemePlatformValidator.GetDefaultMarketplaceThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.MarketplaceTheme>} - Success response
     * @name getDefaultMarketplaceTheme
     * @summary: Get default marketplace theme.
     * @description: Retrieve the most recent version of a theme using its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getDefaultMarketplaceTheme/).
     */
    getDefaultMarketplaceTheme({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ThemePlatformModel.MarketplaceTheme>;
}
import ThemePlatformValidator = require("sdk/output/javascript/code/sdk/platform/Theme/ThemePlatformValidator");
import ThemePlatformModel = require("sdk/output/javascript/code/sdk/platform/Theme/ThemePlatformModel");
