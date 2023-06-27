export = Theme;
declare class Theme {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {ThemePlatformApplicationValidator.addThemeToApplicationV2} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ApplyThemeResponseV2>} - Success response
     * @name addThemeToApplicationV2
     * @summary: Apply a theme to an application
     * @description: Apply a theme to an application by providing the marketplace theme ID.
     */
    addThemeToApplicationV2({ body }?: ThemePlatformApplicationValidator.addThemeToApplicationV2): Promise<ThemePlatformModel.ApplyThemeResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.addToThemeLibrary} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name addToThemeLibrary
     * @summary: Add a theme to the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to choose a theme and add it to the theme library.
     */
    addToThemeLibrary({ body }?: ThemePlatformApplicationValidator.addToThemeLibrary): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.applyTheme} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name applyTheme
     * @summary: Apply a theme
     * @description: Use this API to apply a theme to the website.
     */
    applyTheme({ body }?: ThemePlatformApplicationValidator.applyTheme): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.applyThemeV2} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
     *   Success response
     * @name applyThemeV2
     * @summary: Apply theme to a specific application
     * @description: Apply theme to a specific application by providing company_id, application_id, and theme_id.
     */
    applyThemeV2({ themeId }?: ThemePlatformApplicationValidator.applyThemeV2): Promise<ThemePlatformModel.AllThemesApplicationResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.archiveTheme} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name archiveTheme
     * @summary: Archive a theme
     * @description: Use this API to store an existing theme but not delete it so that it can be used in future if required.
     */
    archiveTheme({ themeId }?: ThemePlatformApplicationValidator.archiveTheme): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.checkThemeUpgradableV2} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemeUpgradableResponseV2>} - Success response
     * @name checkThemeUpgradableV2
     * @summary: Check if the theme is upgradable
     * @description: This API endpoint checks if the theme is upgradable for a specific company and application.
     */
    checkThemeUpgradableV2({ themeId }?: ThemePlatformApplicationValidator.checkThemeUpgradableV2): Promise<ThemePlatformModel.ThemeUpgradableResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.createPage} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name createPage
     * @summary: Create a page
     * @description: Use this API to create a page for a theme by its ID.
     */
    createPage({ themeId, body }?: ThemePlatformApplicationValidator.createPage): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.createTheme} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name createTheme
     * @summary: Create a new theme
     * @description: Themes improve the look and appearance of a website. Use this API to create a theme.
     */
    createTheme({ body }?: ThemePlatformApplicationValidator.createTheme): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.deletePage} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name deletePage
     * @summary: Deletes a page
     * @description: Use this API to delete a page for a theme by its ID and page_value.
     */
    deletePage({ themeId, pageValue }?: ThemePlatformApplicationValidator.deletePage): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.deleteTheme} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name deleteTheme
     * @summary: Delete a theme
     * @description: Use this API to delete a theme from the theme library.
     */
    deleteTheme({ themeId }?: ThemePlatformApplicationValidator.deleteTheme): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.deleteThemeV2} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
     *   Success response
     * @name deleteThemeV2
     * @summary: Delete a theme
     * @description: This endpoint is used to delete a theme from the specified company and application.
     */
    deleteThemeV2({ themeId }?: ThemePlatformApplicationValidator.deleteThemeV2): Promise<ThemePlatformModel.AllThemesApplicationResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.duplicateThemeV2} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
     *   Success response
     * @name duplicateThemeV2
     * @summary: Duplicate a Theme
     * @description: This endpoint duplicates a Theme in the specified application.
     */
    duplicateThemeV2({ themeId }?: ThemePlatformApplicationValidator.duplicateThemeV2): Promise<ThemePlatformModel.AllThemesApplicationResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.getAllPages} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AllAvailablePageSchema>} - Success response
     * @name getAllPages
     * @summary: Get all pages of a theme
     * @description: Use this API to retrieve all the available pages of a theme by its ID.
     */
    getAllPages({ themeId }?: ThemePlatformApplicationValidator.getAllPages): Promise<ThemePlatformModel.AllAvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.getApplicationThemeByIdV2} arg
     *   - Arg object
     *
     * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
     *   Success response
     * @name getApplicationThemeByIdV2
     * @summary: Get Theme By Theme Id
     * @description:
     */
    getApplicationThemeByIdV2({ themeId }?: ThemePlatformApplicationValidator.getApplicationThemeByIdV2): Promise<ThemePlatformModel.AllThemesApplicationResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.getApplicationThemesCountV2} arg
     *   - Arg object
     *
     * @returns {Promise<Object>} - Success response
     * @name getApplicationThemesCountV2
     * @summary: Get the count of themes for a specific application
     * @description:
     */
    getApplicationThemesCountV2({}?: any): Promise<any>;
    /**
     * @param {ThemePlatformApplicationValidator.getApplicationThemesV2} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2[]>}
     *   - Success response
     *
     * @name getApplicationThemesV2
     * @summary: Get all the themes for a specific application
     * @description:
     */
    getApplicationThemesV2({}?: any): Promise<ThemePlatformModel.AllThemesApplicationResponseV2[]>;
    /**
     * @param {ThemePlatformApplicationValidator.getAppliedTheme} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getAppliedTheme
     * @summary: Get the applied theme
     * @description: Use this API to retrieve the theme that is currently applied to the website along with its details.
     */
    getAppliedTheme({}?: any): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.getAppliedThemeV2} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ApplyThemeResponseV2>} - Success response
     * @name getAppliedThemeV2
     * @summary: Get the Applied theme of an Application
     * @description: Get Applied Theme of an Application by Application Id
     */
    getAppliedThemeV2({}?: any): Promise<ThemePlatformModel.ApplyThemeResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.getFonts} arg - Arg object
     * @returns {Promise<ThemePlatformModel.FontsSchema>} - Success response
     * @name getFonts
     * @summary: Get all the supported fonts in a theme
     * @description: Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts.
     */
    getFonts({}?: any): Promise<ThemePlatformModel.FontsSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.getFontsV2} arg - Arg object
     * @returns {Promise<ThemePlatformModel.FontsSchema>} - Success response
     * @name getFontsV2
     * @summary: Get all the supported fonts in a theme
     * @description: Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts.
     */
    getFontsV2({}?: any): Promise<ThemePlatformModel.FontsSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.getPage} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name getPage
     * @summary: Get page of a theme
     * @description: Use this API to retrieve a page of a theme.
     */
    getPage({ themeId, pageValue }?: ThemePlatformApplicationValidator.getPage): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.getPublicThemes} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesListingResponseSchema>} -
     *   Success response
     * @name getPublicThemes
     * @summary: Get all public themes
     * @description: Use this API to get a list of free themes that you can apply to your website.
     */
    getPublicThemes({ pageSize, pageNo }?: ThemePlatformApplicationValidator.getPublicThemes): Promise<ThemePlatformModel.ThemesListingResponseSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.getThemeById} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getThemeById
     * @summary: Gets theme by id
     * @description: Use this API to retrieve the details of a specific theme by using its ID.
     */
    getThemeById({ themeId }?: ThemePlatformApplicationValidator.getThemeById): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.getThemeForPreview} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getThemeForPreview
     * @summary: Get a theme preview
     * @description: A theme can be previewed before applying it. Use this API to retrieve the theme preview by using its ID.
     */
    getThemeForPreview({ themeId }?: ThemePlatformApplicationValidator.getThemeForPreview): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.getThemeLastModified} arg - Arg object
     * @returns {Promise<any>} - Success response
     * @name getThemeLastModified
     * @summary: Fetch last modified timestamp
     * @description: Use this API to fetch Last-Modified timestamp in header metadata.
     */
    getThemeLastModified({ themeId }?: ThemePlatformApplicationValidator.getThemeLastModified): Promise<any>;
    /**
     * @param {ThemePlatformApplicationValidator.getThemeLastModifiedV2} arg - Arg object
     * @returns {Promise<any>} - Success response
     * @name getThemeLastModifiedV2
     * @summary: Fetch last modified timestamp
     * @description: Use this API to fetch Last-Modified timestamp in header metadata.
     */
    getThemeLastModifiedV2({ themeId }?: ThemePlatformApplicationValidator.getThemeLastModifiedV2): Promise<any>;
    /**
     * @param {ThemePlatformApplicationValidator.getThemeLibrary} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesListingResponseSchema>} -
     *   Success response
     * @name getThemeLibrary
     * @summary: Get a list of themes from the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to fetch a list of themes from the library along with their configuration details.
     */
    getThemeLibrary({ pageSize, pageNo }?: ThemePlatformApplicationValidator.getThemeLibrary): Promise<ThemePlatformModel.ThemesListingResponseSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.getThemePreviewByIdV2} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
     *   Success response
     * @name getThemePreviewByIdV2
     * @summary: Get Theme Preview By Theme Id
     * @description:
     */
    getThemePreviewByIdV2({ themeId }?: ThemePlatformApplicationValidator.getThemePreviewByIdV2): Promise<ThemePlatformModel.AllThemesApplicationResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.isUpgradable} arg - Arg object
     * @returns {Promise<ThemePlatformModel.UpgradableThemeSchema>} - Success response
     * @name isUpgradable
     * @summary: Checks if theme is upgradable
     * @description: There's always a possibility that new features get added to a theme. Use this API to check if the applied theme has an upgrade available.
     */
    isUpgradable({ themeId }?: ThemePlatformApplicationValidator.isUpgradable): Promise<ThemePlatformModel.UpgradableThemeSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.publishTheme} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name publishTheme
     * @summary: Publish a theme
     * @description: Use this API to publish a theme that is either newly created or edited.
     */
    publishTheme({ themeId }?: ThemePlatformApplicationValidator.publishTheme): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.unarchiveTheme} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name unarchiveTheme
     * @summary: Unarchive a theme
     * @description: Use this API to restore an archived theme and bring it back for editing or publishing.
     */
    unarchiveTheme({ themeId }?: ThemePlatformApplicationValidator.unarchiveTheme): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.unpublishTheme} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name unpublishTheme
     * @summary: Unpublish a theme
     * @description: Use this API to remove an existing theme from the list of available themes.
     */
    unpublishTheme({ themeId }?: ThemePlatformApplicationValidator.unpublishTheme): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.updateMultiplePages} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AllAvailablePageSchema>} - Success response
     * @name updateMultiplePages
     * @summary: Update multiple pages of a theme
     * @description: Use this API to update multiple pages of a theme by its ID.
     */
    updateMultiplePages({ themeId, body }?: ThemePlatformApplicationValidator.updateMultiplePages): Promise<ThemePlatformModel.AllAvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.updatePage} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name updatePage
     * @summary: Updates a page
     * @description: Use this API to update a page for a theme by its ID.
     */
    updatePage({ themeId, pageValue, body }?: ThemePlatformApplicationValidator.updatePage): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.updateTheme} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name updateTheme
     * @summary: Update a theme
     * @description: Use this API to edit an existing theme. You can customize the website font, sections, images, styles, and many more.
     */
    updateTheme({ themeId, body }?: ThemePlatformApplicationValidator.updateTheme): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.updateThemeNameV2} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
     *   Success response
     * @name updateThemeNameV2
     * @summary: Update Theme Name
     * @description: Update the name of a theme for a specific company and application.
     */
    updateThemeNameV2({ themeId, body }?: ThemePlatformApplicationValidator.updateThemeNameV2): Promise<ThemePlatformModel.AllThemesApplicationResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.updateThemeV2} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
     *   Success response
     * @name updateThemeV2
     * @summary: Update theme for a specific company and application
     * @description:
     */
    updateThemeV2({ themeId, body }?: ThemePlatformApplicationValidator.updateThemeV2): Promise<ThemePlatformModel.AllThemesApplicationResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.upgradeApplicationV2} arg - Arg object
     * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
     *   Success response
     * @name upgradeApplicationV2
     * @summary: Upgrade an application
     * @description: This endpoint allows you to upgrade an application.
     */
    upgradeApplicationV2({ themeId }?: ThemePlatformApplicationValidator.upgradeApplicationV2): Promise<ThemePlatformModel.AllThemesApplicationResponseV2>;
    /**
     * @param {ThemePlatformApplicationValidator.upgradeTheme} arg - Arg object
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name upgradeTheme
     * @summary: Upgrade a theme
     * @description: Use this API to upgrade the current theme to its latest version.
     */
    upgradeTheme({ themeId }?: ThemePlatformApplicationValidator.upgradeTheme): Promise<ThemePlatformModel.ThemesSchema>;
}
import ThemePlatformApplicationValidator = require("./ThemePlatformApplicationValidator");
import ThemePlatformModel = require("./ThemePlatformModel");
