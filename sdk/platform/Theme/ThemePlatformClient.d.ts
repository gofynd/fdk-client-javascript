export = Theme;
declare class Theme {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {ThemeReq} arg.body
     * @returns {Promise<ThemeSchema>} - Success response
     * @summary: Apply a theme to a company
     * @description: Add a marketplace theme to a company by providing the theme ID and company ID.
     */
    addMarketplaceThemeToCompany({ body }?: {
        body: ThemeReq;
    }): Promise<ThemeSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - The ID of the theme.
     * @returns {Promise<ThemeSchema>} - Success response
     * @summary: Delete a theme
     * @description: Delete a specific theme for a company by providing the company ID and theme ID.
     */
    deleteCompanyTheme({ themeId }?: {
        themeId: string;
    }): Promise<ThemeSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<ThemeSchema[]>} - Success response
     * @summary: Get themes for a company
     * @description: Retrieve a list of themes available for a specific company.
     */
    getCompanyLevelThemes({}?: any): Promise<ThemeSchema[]>;
}