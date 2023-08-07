export = Theme;
declare class Theme {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getMarketplaceThemeBySlug: string;
        getMarketplaceThemeVersions: string;
        getMarketplaceThemes: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slugName - Slug of marketplace theme
     * @returns {Promise<ThemeSlugResponse>} - Success response
     * @summary: Get marketplace theme by slug
     * @description: Fetches the theme details by slug
     */
    getMarketplaceThemeBySlug({ slugName }?: {
        slugName: string;
    }): Promise<ThemeSlugResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slugName - Slug of theme
     * @returns {Promise<ThemeAndUserDetailsResponse>} - Success response
     * @summary: Get theme and user details
     * @description: This API use to get list of theme published theme versions
     */
    getMarketplaceThemeVersions({ slugName }?: {
        slugName: string;
    }): Promise<ThemeAndUserDetailsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - Number of themes per page
     * @param {number} [arg.pageNo] - Page number to retrieve
     * @returns {Promise<MarketplaceThemeResponseBody>} - Success response
     * @summary: Get marketplace themes
     * @description: This API use to get list of pulished marketplace themes
     */
    getMarketplaceThemes({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }): Promise<MarketplaceThemeResponseBody>;
}
