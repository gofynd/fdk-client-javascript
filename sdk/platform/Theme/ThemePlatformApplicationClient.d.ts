export = Theme;
declare class Theme {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {ThemePlatformApplicationValidator.AddThemeToApplicationV2Param} arg
     *   - Arg object
     *
     * @returns {Promise<ThemePlatformModel.ApplyThemeResponseV2>} - Success response
     * @name addThemeToApplicationV2
     * @summary: Apply a theme to an application
     * @description: Apply a theme to an application by providing the marketplace theme ID.
     */
    addThemeToApplicationV2({ body }?: ThemePlatformApplicationValidator.AddThemeToApplicationV2Param): Promise<ThemePlatformModel.ApplyThemeResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.AddToThemeLibraryParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name addToThemeLibrary
     * @summary: Add a theme to the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to choose a theme and add it to the theme library.
     */
    addToThemeLibrary({ body }?: ThemePlatformApplicationValidator.AddToThemeLibraryParam): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.ApplyThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name applyTheme
     * @summary: Apply a theme
     * @description: Use this API to apply a theme to the website.
     */
    applyTheme({ body }?: ThemePlatformApplicationValidator.ApplyThemeParam): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.ApplyThemeV2Param} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
     *   Success response
     * @name applyThemeV2
     * @summary: Apply theme to a specific application
     * @description: Apply theme to a specific application by providing company_id, application_id, and theme_id.
     */
    applyThemeV2({ themeId }?: ThemePlatformApplicationValidator.ApplyThemeV2Param): Promise<ThemePlatformModel.AllThemesApplicationResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.ArchiveThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name archiveTheme
     * @summary: Archive a theme
     * @description: Use this API to store an existing theme but not delete it so that it can be used in future if required.
     */
    archiveTheme({ themeId }?: ThemePlatformApplicationValidator.ArchiveThemeParam): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.CheckThemeUpgradableV2Param} arg
     *   - Arg object
     *
     * @returns {Promise<ThemePlatformModel.ThemeUpgradableResponseV2>} - Success response
     * @name checkThemeUpgradableV2
     * @summary: Check if the theme is upgradable
     * @description: This API endpoint checks if the theme is upgradable for a specific company and application.
     */
    checkThemeUpgradableV2({ themeId }?: ThemePlatformApplicationValidator.CheckThemeUpgradableV2Param): Promise<ThemePlatformModel.ThemeUpgradableResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.CreatePageParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name createPage
     * @summary: Create a page
     * @description: Use this API to create a page for a theme by its ID.
     */
    createPage({ themeId, body }?: ThemePlatformApplicationValidator.CreatePageParam): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.CreateThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name createTheme
     * @summary: Create a new theme
     * @description: Themes improve the look and appearance of a website. Use this API to create a theme.
     */
    createTheme({ body }?: ThemePlatformApplicationValidator.CreateThemeParam): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.DeletePageParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name deletePage
     * @summary: Deletes a page
     * @description: Use this API to delete a page for a theme by its ID and page_value.
     */
    deletePage({ themeId, pageValue }?: ThemePlatformApplicationValidator.DeletePageParam): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.DeleteThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name deleteTheme
     * @summary: Delete a theme
     * @description: Use this API to delete a theme from the theme library.
     */
    deleteTheme({ themeId }?: ThemePlatformApplicationValidator.DeleteThemeParam): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.DeleteThemeV2Param} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
     *   Success response
     * @name deleteThemeV2
     * @summary: Delete a theme
     * @description: This endpoint is used to delete a theme from the specified company and application.
     */
    deleteThemeV2({ themeId }?: ThemePlatformApplicationValidator.DeleteThemeV2Param): Promise<ThemePlatformModel.AllThemesApplicationResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.DuplicateThemeV2Param} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
     *   Success response
     * @name duplicateThemeV2
     * @summary: Duplicate a Theme
     * @description: This endpoint duplicates a Theme in the specified application.
     */
    duplicateThemeV2({ themeId }?: ThemePlatformApplicationValidator.DuplicateThemeV2Param): Promise<ThemePlatformModel.AllThemesApplicationResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.GetAllPagesParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AllAvailablePageSchema>} - Success response
     * @name getAllPages
     * @summary: Get all pages of a theme
     * @description: Use this API to retrieve all the available pages of a theme by its ID.
     */
    getAllPages({ themeId }?: ThemePlatformApplicationValidator.GetAllPagesParam): Promise<ThemePlatformModel.AllAvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetApplicationThemeByIdV2Param} arg
     *   - Arg object
     *
     * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
     *   Success response
     * @name getApplicationThemeByIdV2
     * @summary: Get Theme By Theme Id
     * @description:
     */
    getApplicationThemeByIdV2({ themeId }?: ThemePlatformApplicationValidator.GetApplicationThemeByIdV2Param): Promise<ThemePlatformModel.AllThemesApplicationResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.GetApplicationThemesCountV2Param} arg
     *   - Arg object
     *
     * @returns {Promise<Object>} - Success response
     * @name getApplicationThemesCountV2
     * @summary: Get the count of themes for a specific application
     * @description:
     */
    getApplicationThemesCountV2({}?: any): Promise<any>;
    /**
     * @param {ThemePlatformApplicationValidator.GetApplicationThemesV2Param} arg
     *   - Arg object
     *
     * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2[]>}
     *   - Success response
     *
     * @name getApplicationThemesV2
     * @summary: Get all the themes for a specific application
     * @description:
     */
    getApplicationThemesV2({}?: any): Promise<ThemePlatformModel.AllThemesApplicationResponseV2[]>;
    /**
     * @param {ThemePlatformApplicationValidator.GetAppliedThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getAppliedTheme
     * @summary: Get the applied theme
     * @description: Use this API to retrieve the theme that is currently applied to the website along with its details.
     */
    getAppliedTheme({}?: any): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetAppliedThemeV2Param} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ApplyThemeResponseV2>} - Success response
     * @name getAppliedThemeV2
     * @summary: Get the Applied theme of an Application
     * @description: Get Applied Theme of an Application by Application Id
     */
    getAppliedThemeV2({}?: any): Promise<ThemePlatformModel.ApplyThemeResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.GetDefaultPageDetailsParam} arg
     *   - Arg object
     *
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name getDefaultPageDetails
     * @summary: Get default page details of a page from page_value
     * @description: Use this API to retrieve default page details of a page.
     */
    getDefaultPageDetails({ pageValue }?: ThemePlatformApplicationValidator.GetDefaultPageDetailsParam): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetFontsParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.FontsSchema>} - Success response
     * @name getFonts
     * @summary: Get all the supported fonts in a theme
     * @description: Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts.
     */
    getFonts({}?: any): Promise<ThemePlatformModel.FontsSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetFontsV2Param} arg - Arg object
     * @returns {Promise<ThemePlatformModel.FontsSchema>} - Success response
     * @name getFontsV2
     * @summary: Get all the supported fonts in a theme
     * @description: Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts.
     */
    getFontsV2({}?: any): Promise<ThemePlatformModel.FontsSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetPageParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name getPage
     * @summary: Get page of a theme
     * @description: Use this API to retrieve a page of a theme.
     */
    getPage({ themeId, pageValue }?: ThemePlatformApplicationValidator.GetPageParam): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetPublicThemesParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesListingResponseSchema>} -
     *   Success response
     * @name getPublicThemes
     * @summary: Get all public themes
     * @description: Use this API to get a list of free themes that you can apply to your website.
     */
    getPublicThemes({ pageSize, pageNo }?: ThemePlatformApplicationValidator.GetPublicThemesParam): Promise<ThemePlatformModel.ThemesListingResponseSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeByIdParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getThemeById
     * @summary: Gets theme by id
     * @description: Use this API to retrieve the details of a specific theme by using its ID.
     */
    getThemeById({ themeId }?: ThemePlatformApplicationValidator.GetThemeByIdParam): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeForPreviewParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getThemeForPreview
     * @summary: Get a theme preview
     * @description: A theme can be previewed before applying it. Use this API to retrieve the theme preview by using its ID.
     */
    getThemeForPreview({ themeId }?: ThemePlatformApplicationValidator.GetThemeForPreviewParam): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeLastModifiedParam} arg
     *   - Arg object
     *
     * @returns {Promise<any>} - Success response
     * @name getThemeLastModified
     * @summary: Fetch last modified timestamp
     * @description: Use this API to fetch Last-Modified timestamp in header metadata.
     */
    getThemeLastModified({ themeId }?: ThemePlatformApplicationValidator.GetThemeLastModifiedParam): Promise<any>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeLastModifiedV2Param} arg
     *   - Arg object
     *
     * @returns {Promise<any>} - Success response
     * @name getThemeLastModifiedV2
     * @summary: Fetch last modified timestamp
     * @description: Use this API to fetch Last-Modified timestamp in header metadata.
     */
    getThemeLastModifiedV2({ themeId }?: ThemePlatformApplicationValidator.GetThemeLastModifiedV2Param): Promise<any>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeLibraryParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesListingResponseSchema>} -
     *   Success response
     * @name getThemeLibrary
     * @summary: Get a list of themes from the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to fetch a list of themes from the library along with their configuration details.
     */
    getThemeLibrary({ pageSize, pageNo }?: ThemePlatformApplicationValidator.GetThemeLibraryParam): Promise<ThemePlatformModel.ThemesListingResponseSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemePreviewByIdV2Param} arg
     *   - Arg object
     *
     * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
     *   Success response
     * @name getThemePreviewByIdV2
     * @summary: Get Theme Preview By Theme Id
     * @description:
     */
    getThemePreviewByIdV2({ themeId }?: ThemePlatformApplicationValidator.GetThemePreviewByIdV2Param): Promise<ThemePlatformModel.AllThemesApplicationResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.IsUpgradableParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.UpgradableThemeSchema>} - Success response
     * @name isUpgradable
     * @summary: Checks if theme is upgradable
     * @description: There's always a possibility that new features get added to a theme. Use this API to check if the applied theme has an upgrade available.
     */
    isUpgradable({ themeId }?: ThemePlatformApplicationValidator.IsUpgradableParam): Promise<ThemePlatformModel.UpgradableThemeSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.PublishThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name publishTheme
     * @summary: Publish a theme
     * @description: Use this API to publish a theme that is either newly created or edited.
     */
    publishTheme({ themeId }?: ThemePlatformApplicationValidator.PublishThemeParam): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UnarchiveThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name unarchiveTheme
     * @summary: Unarchive a theme
     * @description: Use this API to restore an archived theme and bring it back for editing or publishing.
     */
    unarchiveTheme({ themeId }?: ThemePlatformApplicationValidator.UnarchiveThemeParam): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UnpublishThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name unpublishTheme
     * @summary: Unpublish a theme
     * @description: Use this API to remove an existing theme from the list of available themes.
     */
    unpublishTheme({ themeId }?: ThemePlatformApplicationValidator.UnpublishThemeParam): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdateMultiplePagesParam} arg
     *   - Arg object
     *
     * @returns {Promise<ThemePlatformModel.AllAvailablePageSchema>} - Success response
     * @name updateMultiplePages
     * @summary: Update multiple pages of a theme
     * @description: Use this API to update multiple pages of a theme by its ID.
     */
    updateMultiplePages({ themeId, body }?: ThemePlatformApplicationValidator.UpdateMultiplePagesParam): Promise<ThemePlatformModel.AllAvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdatePageParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name updatePage
     * @summary: Updates a page
     * @description: Use this API to update a page for a theme by its ID.
     */
    updatePage({ themeId, pageValue, body }?: ThemePlatformApplicationValidator.UpdatePageParam): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdateThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name updateTheme
     * @summary: Update a theme
     * @description: Use this API to edit an existing theme. You can customize the website font, sections, images, styles, and many more.
     */
    updateTheme({ themeId, body }?: ThemePlatformApplicationValidator.UpdateThemeParam): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdateThemeNameV2Param} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
     *   Success response
     * @name updateThemeNameV2
     * @summary: Update Theme Name
     * @description: Update the name of a theme for a specific company and application.
     */
    updateThemeNameV2({ themeId, body }?: ThemePlatformApplicationValidator.UpdateThemeNameV2Param): Promise<ThemePlatformModel.AllThemesApplicationResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdateThemeV2Param} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
     *   Success response
     * @name updateThemeV2
     * @summary: Update theme for a specific company and application
     * @description:
     */
    updateThemeV2({ themeId, body }?: ThemePlatformApplicationValidator.UpdateThemeV2Param): Promise<ThemePlatformModel.AllThemesApplicationResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.UpgradeApplicationV2Param} arg
     *   - Arg object
     *
     * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
     *   Success response
     * @name upgradeApplicationV2
     * @summary: Upgrade an application
     * @description: This endpoint allows you to upgrade an application.
     */
    upgradeApplicationV2({ themeId }?: ThemePlatformApplicationValidator.UpgradeApplicationV2Param): Promise<ThemePlatformModel.AllThemesApplicationResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.UpgradeThemeParam} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name upgradeTheme
     * @summary: Upgrade a theme
     * @description: Use this API to upgrade the current theme to its latest version.
     */
    upgradeTheme({ themeId }?: ThemePlatformApplicationValidator.UpgradeThemeParam): Promise<ThemePlatformModel.ThemesSchema>;
}
import ThemePlatformApplicationValidator = require("./ThemePlatformApplicationValidator");
import ThemePlatformModel = require("./ThemePlatformModel");
