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
     * @summary: Create a company theme
     * @description: Incorporate a marketplace theme into a company's profile. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/theme/addMarketplaceThemeToCompany/).
     */
    addMarketplaceThemeToCompany({ body, requestHeaders }?: ThemePlatformValidator.AddMarketplaceThemeToCompanyParam, { responseHeaders }?: object): Promise<ThemePlatformModel.CompanyThemeSchema>;
    /**
     * @param {ThemePlatformValidator.DeleteCompanyThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.CompanyThemeSchema>} - Success response
     * @name deleteCompanyTheme
     * @summary: Delete a company theme
     * @description: Remove a theme associated with a company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/theme/deleteCompanyTheme/).
     */
    deleteCompanyTheme({ themeId, requestHeaders }?: ThemePlatformValidator.DeleteCompanyThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.CompanyThemeSchema>;
    /**
     * @param {ThemePlatformValidator.GetCompanyLevelPrivateThemesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.CompanyPrivateTheme[]>} - Success response
     * @name getCompanyLevelPrivateThemes
     * @summary: List private company themes
     * @description: Retrieve a list of private themes added to a company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/theme/getCompanyLevelPrivateThemes/).
     */
    getCompanyLevelPrivateThemes({ searchText, requestHeaders }?: ThemePlatformValidator.GetCompanyLevelPrivateThemesParam, { responseHeaders }?: object): Promise<ThemePlatformModel.CompanyPrivateTheme[]>;
    /**
     * @param {ThemePlatformValidator.GetCompanyLevelThemesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.CompanyThemeSchema[]>} - Success response
     * @name getCompanyLevelThemes
     * @summary: List company themes
     * @description: Retrieve themes added to a company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/theme/getCompanyLevelThemes/).
     */
    getCompanyLevelThemes({ searchText, requestHeaders }?: ThemePlatformValidator.GetCompanyLevelThemesParam, { responseHeaders }?: object): Promise<ThemePlatformModel.CompanyThemeSchema[]>;
}
import ThemePlatformValidator = require("./ThemePlatformValidator");
import ThemePlatformModel = require("./ThemePlatformModel");
