export = Theme;
declare class Theme {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.status] - The status of the theme
     * @param {number} [arg.pageSize] - Number of themes per page
     * @param {number} [arg.pageNo] - Page number to retrieve
     * @summary: Get organization's themes
     * @description: Get organization's themes
     */
    getOrganizationThemes({ status, pageSize, pageNo }?: {
        status?: string;
        pageSize?: number;
        pageNo?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - The ID of the theme
     * @summary: Get theme details for an organization
     * @description: Fetches the theme details for a specific organization and theme ID
     */
    getOrganizationThemeDetails({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - The ID of the theme
     * @param {MarketplaceTheme} arg.body
     * @summary: Update theme draft/submitted
     * @description: Update theme draft/submitted
     */
    updateDraftTheme({ themeId, body }?: {
        themeId: string;
        body: MarketplaceTheme;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - The ID of the theme
     * @param {MarketplaceTheme} arg.body
     * @summary: Submit a theme
     * @description: Use this api to Submit a theme
     */
    submitOrganizationTheme({ themeId, body }?: {
        themeId: string;
        body: MarketplaceTheme;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - The ID of the theme
     * @summary: Delete a theme
     * @description: This endpoint allows you to delete a theme by providing the organization and theme IDs.
     */
    deleteOrganizationTheme({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slugName - Slug of theme
     * @summary: Get latest version of specified theme
     * @description: Use this api to get latest version of specified theme
     */
    getLatestVersionOfThemeBySlug({ slugName }?: {
        slugName: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.slug] - The slug of the theme.
     * @param {MarketplaceTheme} arg.body
     * @summary: Create a new theme for the organization
     * @description: Use this api to create a new theme for the organization
     */
    createNewThemeInOrganization({ body, slug }?: {
        slug?: string;
        body: MarketplaceTheme;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - The ID of the theme
     * @summary: Get theme rejection reasons
     * @description: Use this api to get theme rejection reasons
     */
    getThemeRejectionReasons({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeSlug - The slug of the theme.
     * @param {number} [arg.pageSize] - The number of items to return per page.
     * @param {number} [arg.pageNo] - The page number to return.
     * @summary: Get theme versions
     * @description: Retrieve a list of theme versions for a specific theme in an organization.
     */
    getThemeVersions({ themeSlug, pageSize, pageNo }?: {
        themeSlug: string;
        pageSize?: number;
        pageNo?: number;
    }): Promise<any>;
}
