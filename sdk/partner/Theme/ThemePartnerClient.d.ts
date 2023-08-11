export = Theme;
declare class Theme {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - Company ID
     * @param {string} arg.applicationId - Application ID
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @summary: Get all pages of a theme
     * @description: Use this API to retrieve all the available pages of a theme by its ID.
     */
    getAllPages({ companyId, applicationId, themeId }?: {
        companyId: number;
        applicationId: string;
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - Company ID
     * @param {string} arg.applicationId - Application ID
     * @param {string} arg.themeId - ID of the theme
     * @param {AvailablePageSchema} arg.body
     * @summary: Create a page
     * @description: Use this API to create a page for a theme by its ID.
     */
    createPage({ companyId, applicationId, themeId, body }?: {
        companyId: number;
        applicationId: string;
        themeId: string;
        body: AvailablePageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - Company ID
     * @param {string} arg.applicationId - Application ID
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @param {AllAvailablePageSchema} arg.body
     * @summary: Update multiple pages of a theme
     * @description: Use this API to update multiple pages of a theme by its ID.
     */
    updateMultiplePages({ companyId, applicationId, themeId, body }?: {
        companyId: number;
        applicationId: string;
        themeId: string;
        body: AllAvailablePageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - Company ID
     * @param {string} arg.applicationId - Application ID
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @param {string} arg.pageValue - Value of the page to be retrieved
     * @summary: Get page of a theme
     * @description: Use this API to retrieve a page of a theme.
     */
    getPage({ companyId, applicationId, themeId, pageValue }?: {
        companyId: number;
        applicationId: string;
        themeId: string;
        pageValue: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - Company ID
     * @param {string} arg.applicationId - Application ID
     * @param {string} arg.themeId - ID of the theme
     * @param {string} arg.pageValue - Value of the page to be updated
     * @param {AvailablePageSchema} arg.body
     * @summary: Updates a page
     * @description: Use this API to update a page for a theme by its ID.
     */
    updatePage({ companyId, applicationId, themeId, pageValue, body }?: {
        companyId: number;
        applicationId: string;
        themeId: string;
        pageValue: string;
        body: AvailablePageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - Company ID
     * @param {string} arg.applicationId - Application ID
     * @param {string} arg.themeId - ID of the theme
     * @param {string} arg.pageValue - Value of the page to be updated
     * @summary: Deletes a page
     * @description: Use this API to delete a page for a theme by its ID and page_value.
     */
    deletePage({ companyId, applicationId, themeId, pageValue }?: {
        companyId: number;
        applicationId: string;
        themeId: string;
        pageValue: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - The ID of the company
     * @param {string} arg.applicationId - The ID of the application
     * @summary: Get all the themes for a specific application
     * @description: Use this API to get list of theme
     */
    getApplicationThemes({ companyId, applicationId }?: {
        companyId: number;
        applicationId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - The ID of the company
     * @param {string} arg.applicationId - The ID of the application
     * @param {string} arg.themeId - The ID of the theme
     * @summary: Get Theme By Theme Id
     * @description: Use this API to get theme details
     */
    getThemeById({ companyId, applicationId, themeId }?: {
        companyId: number;
        applicationId: string;
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - The ID of the company.
     * @param {string} arg.applicationId - The ID of the application.
     * @param {string} arg.themeId - The ID of the theme.
     * @param {UpdateThemeRequestBody} arg.body
     * @summary: Update theme for a specific company and application
     * @description: Update theme for a specific company and application
     */
    updateTheme({ companyId, applicationId, themeId, body }?: {
        companyId: number;
        applicationId: string;
        themeId: string;
        body: UpdateThemeRequestBody;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - The ID of the company.
     * @param {string} arg.applicationId - The ID of the application.
     * @param {string} arg.themeId - The ID of the theme to be deleted.
     * @summary: Delete a theme
     * @description: This endpoint is used to delete a theme from the specified company and application.
     */
    deleteTheme({ companyId, applicationId, themeId }?: {
        companyId: number;
        applicationId: string;
        themeId: string;
    }): Promise<any>;
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
