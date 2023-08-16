export = Theme;
declare class Theme {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {CompanyThemeSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemesSchema>} - Success response
     * @summary: Add a theme to an application
     * @description: Add a theme to an application by providing the marketplace theme ID.
     */
    addThemeToApplication({ body }?: {
        body: CompanyThemeSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemesSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddThemeRequestSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DummyResponse>} - Success response
     * @summary: Add a theme to the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to choose a theme and add it to the theme library.
     */
    addToThemeLibrary({ body }?: {
        body: AddThemeRequestSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<DummyResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - The ID of the apply
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemesSchema>} - Success response
     * @summary: Apply theme to a specific application
     * @description: Apply theme to a specific application by providing company_id, application_id, and theme_id.
     */
    applyTheme({ themeId }?: {
        themeId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemesSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DummyResponse>} - Success response
     * @summary: Archive a theme
     * @description: Use this API to store an existing theme but not delete it so that it can be used in future if required.
     */
    archiveTheme({ themeId }?: {
        themeId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<DummyResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme
     * @param {AvailablePageSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AvailablePageSchema>} - Success response
     * @summary: Create a page
     * @description: Use this API to create a page for a theme by its ID.
     */
    createPage({ themeId, body }?: {
        themeId: string;
        body: AvailablePageSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<AvailablePageSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme
     * @param {string} arg.pageValue - Value of the page to be updated
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AvailablePageSchema>} - Success response
     * @summary: Deletes a page
     * @description: Use this API to delete a page for a theme by its ID and page_value.
     */
    deletePage({ themeId, pageValue }?: {
        themeId: string;
        pageValue: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<AvailablePageSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - The ID of the theme to be deleted.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemesSchema>} - Success response
     * @summary: Delete a theme
     * @description: This endpoint is used to delete a theme from the specified company and application.
     */
    deleteTheme({ themeId }?: {
        themeId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemesSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - The ID of the theme to be duplicated
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemesSchema>} - Success response
     * @summary: Duplicate a Theme
     * @description: This endpoint duplicates a Theme in the specified application.
     */
    duplicateTheme({ themeId }?: {
        themeId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemesSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AllAvailablePageSchema>} - Success response
     * @summary: Get all pages of a theme
     * @description: Use this API to retrieve all the available pages of a theme by its ID.
     */
    getAllPages({ themeId }?: {
        themeId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<AllAvailablePageSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemesSchema[]>} - Success response
     * @summary: Get all the themes for a specific application
     * @description: Get all the themes for a specific application
     */
    getApplicationThemes({ headers }?: import("../PlatformAPIClient").Options): Promise<ThemesSchema[]>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @summary: Get the count of themes for a specific application
     * @description: Get the count of themes for a specific application
     */
    getApplicationThemesCount({ headers }?: import("../PlatformAPIClient").Options): Promise<any>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemesSchema>} - Success response
     * @summary: Get the Applied theme of an Application
     * @description: Get Applied Theme of an Application by Application Id
     */
    getAppliedTheme({ headers }?: import("../PlatformAPIClient").Options): Promise<ThemesSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FontsSchema>} - Success response
     * @summary: Get all the supported fonts in a theme
     * @description: Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts.
     */
    getFonts({ headers }?: import("../PlatformAPIClient").Options): Promise<FontsSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @param {string} arg.pageValue - Value of the page to be retrieved
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AvailablePageSchema>} - Success response
     * @summary: Get page of a theme
     * @description: Use this API to retrieve a page of a theme.
     */
    getPage({ themeId, pageValue }?: {
        themeId: string;
        pageValue: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<AvailablePageSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DummyResponse>} - Success response
     * @summary: Get all public themes
     * @description: Use this API to get a list of free themes that you can apply to your website.
     */
    getPublicThemes({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<DummyResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - The ID of the theme
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemesSchema>} - Success response
     * @summary: Get Theme By Theme Id
     * @description: Get Theme By Theme Id
     */
    getThemeById({ themeId }?: {
        themeId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemesSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - The ID of the theme
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemesSchema>} - Success response
     * @summary: Get Theme Preview By Theme Id
     * @description: Get Theme Preview By Theme Id
     */
    getThemeForPreview({ themeId }?: {
        themeId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemesSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<any>} - Success response
     * @summary: Fetch last modified timestamp
     * @description: Use this API to fetch Last-Modified timestamp in header metadata.
     */
    getThemeLastModified({ themeId }?: {
        themeId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DummyResponse>} - Success response
     * @summary: Get a list of themes from the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to fetch a list of themes from the library along with their configuration details.
     */
    getThemeLibrary({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<DummyResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - The ID of the theme
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemeUpgradableResponse>} - Success response
     * @summary: Check if the theme is upgradable
     * @description: This API endpoint checks if the theme is upgradable for a specific company and application.
     */
    isUpgradable({ themeId }?: {
        themeId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemeUpgradableResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DummyResponse>} - Success response
     * @summary: Publish a theme
     * @description: Use this API to publish a theme that is either newly created or edited.
     */
    publishTheme({ themeId }?: {
        themeId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<DummyResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DummyResponse>} - Success response
     * @summary: Unarchive a theme
     * @description: Use this API to restore an archived theme and bring it back for editing or publishing.
     */
    unarchiveTheme({ themeId }?: {
        themeId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<DummyResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DummyResponse>} - Success response
     * @summary: Unpublish a theme
     * @description: Use this API to remove an existing theme from the list of available themes.
     */
    unpublishTheme({ themeId }?: {
        themeId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<DummyResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @param {AllAvailablePageSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AllAvailablePageSchema>} - Success response
     * @summary: Update multiple pages of a theme
     * @description: Use this API to update multiple pages of a theme by its ID.
     */
    updateMultiplePages({ themeId, body }?: {
        themeId: string;
        body: AllAvailablePageSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<AllAvailablePageSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme
     * @param {string} arg.pageValue - Value of the page to be updated
     * @param {AvailablePageSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AvailablePageSchema>} - Success response
     * @summary: Updates a page
     * @description: Use this API to update a page for a theme by its ID.
     */
    updatePage({ themeId, pageValue, body }?: {
        themeId: string;
        pageValue: string;
        body: AvailablePageSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<AvailablePageSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - The ID of the theme.
     * @param {UpdateThemeRequestBody} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemesSchema>} - Success response
     * @summary: Update theme for a specific company and application
     * @description: Update theme for a specific company and application
     */
    updateTheme({ themeId, body }?: {
        themeId: string;
        body: UpdateThemeRequestBody;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemesSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - The ID of the theme to be updated.
     * @param {UpdateThemeNameRequestBody} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemesSchema>} - Success response
     * @summary: Update Theme Name
     * @description: Update the name of a theme for a specific company and application.
     */
    updateThemeName({ themeId, body }?: {
        themeId: string;
        body: UpdateThemeNameRequestBody;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemesSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - The ID of the upgrade
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemesSchema>} - Success response
     * @summary: Upgrade an application
     * @description: This endpoint allows you to upgrade an application.
     */
    upgradeTheme({ themeId }?: {
        themeId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemesSchema>;
}
