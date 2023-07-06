export = Theme;
declare class Theme {
    constructor(config: any);
    config: any;
    /**
     * @param {ThemePlatformValidator.AddMarketplaceThemeToCompanyParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemeSchema>} - Success response
     * @name addMarketplaceThemeToCompany
     * @summary: Apply a theme to a company
     * @description: Add a marketplace theme to a company by providing the theme ID and company ID.
     */
    addMarketplaceThemeToCompany({ body }?: ThemePlatformValidator.AddMarketplaceThemeToCompanyParam): Promise<ThemePlatformModel.ThemeSchema>;
    /**
     * @param {ThemePlatformValidator.DeleteCompanyThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemeSchema>} - Success response
     * @name deleteCompanyTheme
     * @summary: Delete a theme
     * @description: Delete a specific theme for a company by providing the company ID and theme ID.
     */
    deleteCompanyTheme({ themeId }?: ThemePlatformValidator.DeleteCompanyThemeParam): Promise<ThemePlatformModel.ThemeSchema>;
    /**
     * @param {ThemePlatformValidator.GetCompanyLevelThemesParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemeSchema[]>} - Success response
     * @name getCompanyLevelThemes
     * @summary: Get themes for a company
     * @description: Retrieve a list of themes available for a specific company.
     */
    getCompanyLevelThemes({}?: any): Promise<ThemePlatformModel.ThemeSchema[]>;
}
import ThemePlatformValidator = require("./ThemePlatformValidator");
import ThemePlatformModel = require("./ThemePlatformModel");
