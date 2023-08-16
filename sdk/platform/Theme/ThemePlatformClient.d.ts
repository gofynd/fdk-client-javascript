export = Theme;
declare class Theme {
    constructor(config: any);
    config: any;
    /**
     * @param {ThemePlatformValidator.AddMarketplaceThemeToCompanyParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.CompanyThemeSchema>} - Success response
     * @name addMarketplaceThemeToCompany
     * @summary: Add a theme to a company
     * @description: Add a marketplace theme to a company by providing the theme ID and company ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/addMarketplaceThemeToCompany/).
     */
    addMarketplaceThemeToCompany({ body }?: ThemePlatformValidator.AddMarketplaceThemeToCompanyParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.CompanyThemeSchema>;
    /**
     * @param {ThemePlatformValidator.DeleteCompanyThemeParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.CompanyThemeSchema>} - Success response
     * @name deleteCompanyTheme
     * @summary: Delete a theme
     * @description: Delete a specific theme for a company by providing the company ID and theme ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/deleteCompanyTheme/).
     */
    deleteCompanyTheme({ themeId }?: ThemePlatformValidator.DeleteCompanyThemeParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.CompanyThemeSchema>;
    /**
     * @param {ThemePlatformValidator.GetCompanyLevelThemesParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.CompanyThemeSchema[]>} - Success response
     * @name getCompanyLevelThemes
     * @summary: Get themes for a company
     * @description: Retrieve a list of themes available for a specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getCompanyLevelThemes/).
     */
    getCompanyLevelThemes({ headers }?: any): Promise<ThemePlatformModel.CompanyThemeSchema[]>;
}
import ThemePlatformValidator = require("./ThemePlatformValidator");
import ThemePlatformModel = require("./ThemePlatformModel");
