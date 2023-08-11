export = Theme;
declare class Theme {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {ThemePlatformApplicationValidator.AddThemeToApplicationParam} arg
     *   - Arg object
     *
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name addThemeToApplication
     * @summary: Add a theme to an application
     * @description: Add a theme to an application by providing the marketplace theme ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/addThemeToApplication/).
     */
    addThemeToApplication({ body }?: ThemePlatformApplicationValidator.AddThemeToApplicationParam): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.AddToThemeLibraryParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
     * @name addToThemeLibrary
     * @summary: Add a theme to the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to choose a theme and add it to the theme library. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/addToThemeLibrary/).
     */
    addToThemeLibrary({ body }?: ThemePlatformApplicationValidator.AddToThemeLibraryParam): Promise<ThemePlatformModel.DummyResponse>;
    /**
     * @param {ThemePlatformApplicationValidator.ApplyThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name applyTheme
     * @summary: Apply theme to a specific application
     * @description: Apply theme to a specific application by providing company_id, application_id, and theme_id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/applyTheme/).
     */
    applyTheme({ themeId }?: ThemePlatformApplicationValidator.ApplyThemeParam): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.ArchiveThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
     * @name archiveTheme
     * @summary: Archive a theme
     * @description: Use this API to store an existing theme but not delete it so that it can be used in future if required.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/archiveTheme/).
     */
    archiveTheme({ themeId }?: ThemePlatformApplicationValidator.ArchiveThemeParam): Promise<ThemePlatformModel.DummyResponse>;
    /**
     * @param {ThemePlatformApplicationValidator.CreatePageParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name createPage
     * @summary: Create a page
     * @description: Use this API to create a page for a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/createPage/).
     */
    createPage({ themeId, body }?: ThemePlatformApplicationValidator.CreatePageParam): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.DeletePageParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name deletePage
     * @summary: Deletes a page
     * @description: Use this API to delete a page for a theme by its ID and page_value. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/deletePage/).
     */
    deletePage({ themeId, pageValue }?: ThemePlatformApplicationValidator.DeletePageParam): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.DeleteThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name deleteTheme
     * @summary: Delete a theme
     * @description: This endpoint is used to delete a theme from the specified company and application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/deleteTheme/).
     */
    deleteTheme({ themeId }?: ThemePlatformApplicationValidator.DeleteThemeParam): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.DuplicateThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name duplicateTheme
     * @summary: Duplicate a Theme
     * @description: This endpoint duplicates a Theme in the specified application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/duplicateTheme/).
     */
    duplicateTheme({ themeId }?: ThemePlatformApplicationValidator.DuplicateThemeParam): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetAllPagesParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AllAvailablePageSchema>} - Success response
     * @name getAllPages
     * @summary: Get all pages of a theme
     * @description: Use this API to retrieve all the available pages of a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getAllPages/).
     */
    getAllPages({ themeId }?: ThemePlatformApplicationValidator.GetAllPagesParam): Promise<ThemePlatformModel.AllAvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetApplicationThemesParam} arg
     *   - Arg object
     *
     * @returns {Promise<ThemePlatformModel.ThemesSchema[]>} - Success response
     * @name getApplicationThemes
     * @summary: Get all the themes for a specific application
     * @description: Get all the themes for a specific application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getApplicationThemes/).
     */
    getApplicationThemes({}?: any): Promise<ThemePlatformModel.ThemesSchema[]>;
    /**
     * @param {ThemePlatformApplicationValidator.GetApplicationThemesCountParam} arg
     *   - Arg object
     *
     * @returns {Promise<Object>} - Success response
     * @name getApplicationThemesCount
     * @summary: Get the count of themes for a specific application
     * @description: Get the count of themes for a specific application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getApplicationThemesCount/).
     */
    getApplicationThemesCount({}?: any): Promise<any>;
    /**
     * @param {ThemePlatformApplicationValidator.GetAppliedThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getAppliedTheme
     * @summary: Get the Applied theme of an Application
     * @description: Get Applied Theme of an Application by Application Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getAppliedTheme/).
     */
    getAppliedTheme({}?: any): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetFontsParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.FontsSchema>} - Success response
     * @name getFonts
     * @summary: Get all the supported fonts in a theme
     * @description: Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getFonts/).
     */
    getFonts({}?: any): Promise<ThemePlatformModel.FontsSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetPageParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name getPage
     * @summary: Get page of a theme
     * @description: Use this API to retrieve a page of a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getPage/).
     */
    getPage({ themeId, pageValue }?: ThemePlatformApplicationValidator.GetPageParam): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetPublicThemesParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
     * @name getPublicThemes
     * @summary: Get all public themes
     * @description: Use this API to get a list of free themes that you can apply to your website. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getPublicThemes/).
     */
    getPublicThemes({ pageSize, pageNo }?: ThemePlatformApplicationValidator.GetPublicThemesParam): Promise<ThemePlatformModel.DummyResponse>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeByIdParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getThemeById
     * @summary: Get Theme By Theme Id
     * @description: Get Theme By Theme Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeById/).
     */
    getThemeById({ themeId }?: ThemePlatformApplicationValidator.GetThemeByIdParam): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeForPreviewParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getThemeForPreview
     * @summary: Get Theme Preview By Theme Id
     * @description: Get Theme Preview By Theme Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeForPreview/).
     */
    getThemeForPreview({ themeId }?: ThemePlatformApplicationValidator.GetThemeForPreviewParam): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeLastModifiedParam} arg
     *   - Arg object
     *
     * @returns {Promise<any>} - Success response
     * @name getThemeLastModified
     * @summary: Fetch last modified timestamp
     * @description: Use this API to fetch Last-Modified timestamp in header metadata. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeLastModified/).
     */
    getThemeLastModified({ themeId }?: ThemePlatformApplicationValidator.GetThemeLastModifiedParam): Promise<any>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeLibraryParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
     * @name getThemeLibrary
     * @summary: Get a list of themes from the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to fetch a list of themes from the library along with their configuration details.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeLibrary/).
     */
    getThemeLibrary({ pageSize, pageNo }?: ThemePlatformApplicationValidator.GetThemeLibraryParam): Promise<ThemePlatformModel.DummyResponse>;
    /**
     * @param {ThemePlatformApplicationValidator.IsUpgradableParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemeUpgradableResponse>} - Success response
     * @name isUpgradable
     * @summary: Check if the theme is upgradable
     * @description: This API endpoint checks if the theme is upgradable for a specific company and application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/isUpgradable/).
     */
    isUpgradable({ themeId }?: ThemePlatformApplicationValidator.IsUpgradableParam): Promise<ThemePlatformModel.ThemeUpgradableResponse>;
    /**
     * @param {ThemePlatformApplicationValidator.PublishThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
     * @name publishTheme
     * @summary: Publish a theme
     * @description: Use this API to publish a theme that is either newly created or edited. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/publishTheme/).
     */
    publishTheme({ themeId }?: ThemePlatformApplicationValidator.PublishThemeParam): Promise<ThemePlatformModel.DummyResponse>;
    /**
     * @param {ThemePlatformApplicationValidator.UnarchiveThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
     * @name unarchiveTheme
     * @summary: Unarchive a theme
     * @description: Use this API to restore an archived theme and bring it back for editing or publishing.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/unarchiveTheme/).
     */
    unarchiveTheme({ themeId }?: ThemePlatformApplicationValidator.UnarchiveThemeParam): Promise<ThemePlatformModel.DummyResponse>;
    /**
     * @param {ThemePlatformApplicationValidator.UnpublishThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
     * @name unpublishTheme
     * @summary: Unpublish a theme
     * @description: Use this API to remove an existing theme from the list of available themes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/unpublishTheme/).
     */
    unpublishTheme({ themeId }?: ThemePlatformApplicationValidator.UnpublishThemeParam): Promise<ThemePlatformModel.DummyResponse>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdateMultiplePagesParam} arg
     *   - Arg object
     *
     * @returns {Promise<ThemePlatformModel.AllAvailablePageSchema>} - Success response
     * @name updateMultiplePages
     * @summary: Update multiple pages of a theme
     * @description: Use this API to update multiple pages of a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updateMultiplePages/).
     */
    updateMultiplePages({ themeId, body }?: ThemePlatformApplicationValidator.UpdateMultiplePagesParam): Promise<ThemePlatformModel.AllAvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdatePageParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name updatePage
     * @summary: Updates a page
     * @description: Use this API to update a page for a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updatePage/).
     */
    updatePage({ themeId, pageValue, body }?: ThemePlatformApplicationValidator.UpdatePageParam): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdateThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name updateTheme
     * @summary: Update theme for a specific company and application
     * @description: Update theme for a specific company and application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updateTheme/).
     */
    updateTheme({ themeId, body }?: ThemePlatformApplicationValidator.UpdateThemeParam): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdateThemeNameParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name updateThemeName
     * @summary: Update Theme Name
     * @description: Update the name of a theme for a specific company and application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updateThemeName/).
     */
    updateThemeName({ themeId, body }?: ThemePlatformApplicationValidator.UpdateThemeNameParam): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpgradeThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name upgradeTheme
     * @summary: Upgrade an application
     * @description: This endpoint allows you to upgrade an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/upgradeTheme/).
     */
    upgradeTheme({ themeId }?: ThemePlatformApplicationValidator.UpgradeThemeParam): Promise<ThemePlatformModel.ThemesSchema>;
}
import ThemePlatformApplicationValidator = require("./ThemePlatformApplicationValidator");
import ThemePlatformModel = require("./ThemePlatformModel");
