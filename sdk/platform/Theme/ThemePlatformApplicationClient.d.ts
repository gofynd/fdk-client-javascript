export = Theme;
declare class Theme {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {ThemePlatformApplicationValidator.AddToThemeLibraryParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name addToThemeLibrary
     * @summary: Add a theme to the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to choose a theme and add it to the theme library. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/addToThemeLibrary/).
     */
    addToThemeLibrary({ body }?: ThemePlatformApplicationValidator.AddToThemeLibraryParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.ApplyThemeParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name applyTheme
     * @summary: Apply a theme
     * @description: Use this API to apply a theme to the website. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/applyTheme/).
     */
    applyTheme({ body }?: ThemePlatformApplicationValidator.ApplyThemeParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.ArchiveThemeParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name archiveTheme
     * @summary: Archive a theme
     * @description: Use this API to store an existing theme but not delete it so that it can be used in future if required.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/archiveTheme/).
     */
    archiveTheme({ themeId }?: ThemePlatformApplicationValidator.ArchiveThemeParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.CreatePageParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name createPage
     * @summary: Create a page
     * @description: Use this API to create a page for a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/createPage/).
     */
    createPage({ themeId, body }?: ThemePlatformApplicationValidator.CreatePageParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.CreateThemeParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name createTheme
     * @summary: Create a new theme
     * @description: Themes improve the look and appearance of a website. Use this API to create a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/createTheme/).
     */
    createTheme({ body }?: ThemePlatformApplicationValidator.CreateThemeParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.DeletePageParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name deletePage
     * @summary: Deletes a page
     * @description: Use this API to delete a page for a theme by its ID and page_value. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/deletePage/).
     */
    deletePage({ themeId, pageValue }?: ThemePlatformApplicationValidator.DeletePageParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.DeleteThemeParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name deleteTheme
     * @summary: Delete a theme
     * @description: Use this API to delete a theme from the theme library. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/deleteTheme/).
     */
    deleteTheme({ themeId }?: ThemePlatformApplicationValidator.DeleteThemeParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetAllPagesParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AllAvailablePageSchema>} - Success response
     * @name getAllPages
     * @summary: Get all pages of a theme
     * @description: Use this API to retrieve all the available pages of a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getAllPages/).
     */
    getAllPages({ themeId }?: ThemePlatformApplicationValidator.GetAllPagesParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.AllAvailablePageSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getAppliedTheme
     * @summary: Get the applied theme
     * @description: Use this API to retrieve the theme that is currently applied to the website along with its details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getAppliedTheme/).
     */
    getAppliedTheme({ headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.FontsSchema>} - Success response
     * @name getFonts
     * @summary: Get all the supported fonts in a theme
     * @description: Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getFonts/).
     */
    getFonts({ headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.FontsSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetPageParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name getPage
     * @summary: Get page of a theme
     * @description: Use this API to retrieve a page of a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getPage/).
     */
    getPage({ themeId, pageValue }?: ThemePlatformApplicationValidator.GetPageParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetPublicThemesParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesListingResponseSchema>} -
     *   Success response
     * @name getPublicThemes
     * @summary: Get all public themes
     * @description: Use this API to get a list of free themes that you can apply to your website. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getPublicThemes/).
     */
    getPublicThemes({ pageSize, pageNo }?: ThemePlatformApplicationValidator.GetPublicThemesParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.ThemesListingResponseSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeByIdParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getThemeById
     * @summary: Gets theme by id
     * @description: Use this API to retrieve the details of a specific theme by using its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeById/).
     */
    getThemeById({ themeId }?: ThemePlatformApplicationValidator.GetThemeByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeForPreviewParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getThemeForPreview
     * @summary: Get a theme preview
     * @description: A theme can be previewed before applying it. Use this API to retrieve the theme preview by using its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeForPreview/).
     */
    getThemeForPreview({ themeId }?: ThemePlatformApplicationValidator.GetThemeForPreviewParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeLastModifiedParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<any>} - Success response
     * @name getThemeLastModified
     * @summary: Fetch last modified timestamp
     * @description: Use this API to fetch Last-Modified timestamp in header metadata. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeLastModified/).
     */
    getThemeLastModified({ themeId }?: ThemePlatformApplicationValidator.GetThemeLastModifiedParam, { headers }?: import("../PlatformAPIClient").Options): Promise<any>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeLibraryParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesListingResponseSchema>} -
     *   Success response
     * @name getThemeLibrary
     * @summary: Get a list of themes from the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to fetch a list of themes from the library along with their configuration details.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeLibrary/).
     */
    getThemeLibrary({ pageSize, pageNo }?: ThemePlatformApplicationValidator.GetThemeLibraryParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.ThemesListingResponseSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.IsUpgradableParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.UpgradableThemeSchema>} - Success response
     * @name isUpgradable
     * @summary: Checks if theme is upgradable
     * @description: There's always a possibility that new features get added to a theme. Use this API to check if the applied theme has an upgrade available. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/isUpgradable/).
     */
    isUpgradable({ themeId }?: ThemePlatformApplicationValidator.IsUpgradableParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.UpgradableThemeSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.PublishThemeParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name publishTheme
     * @summary: Publish a theme
     * @description: Use this API to publish a theme that is either newly created or edited. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/publishTheme/).
     */
    publishTheme({ themeId }?: ThemePlatformApplicationValidator.PublishThemeParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UnarchiveThemeParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name unarchiveTheme
     * @summary: Unarchive a theme
     * @description: Use this API to restore an archived theme and bring it back for editing or publishing.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/unarchiveTheme/).
     */
    unarchiveTheme({ themeId }?: ThemePlatformApplicationValidator.UnarchiveThemeParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UnpublishThemeParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name unpublishTheme
     * @summary: Unpublish a theme
     * @description: Use this API to remove an existing theme from the list of available themes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/unpublishTheme/).
     */
    unpublishTheme({ themeId }?: ThemePlatformApplicationValidator.UnpublishThemeParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdateMultiplePagesParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AllAvailablePageSchema>} - Success response
     * @name updateMultiplePages
     * @summary: Update multiple pages of a theme
     * @description: Use this API to update multiple pages of a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updateMultiplePages/).
     */
    updateMultiplePages({ themeId, body }?: ThemePlatformApplicationValidator.UpdateMultiplePagesParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.AllAvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdatePageParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name updatePage
     * @summary: Updates a page
     * @description: Use this API to update a page for a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updatePage/).
     */
    updatePage({ themeId, pageValue, body }?: ThemePlatformApplicationValidator.UpdatePageParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdateThemeParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name updateTheme
     * @summary: Update a theme
     * @description: Use this API to edit an existing theme. You can customize the website font, sections, images, styles, and many more. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updateTheme/).
     */
    updateTheme({ themeId, body }?: ThemePlatformApplicationValidator.UpdateThemeParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpgradeThemeParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name upgradeTheme
     * @summary: Upgrade a theme
     * @description: Use this API to upgrade the current theme to its latest version. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/upgradeTheme/).
     */
    upgradeTheme({ themeId }?: ThemePlatformApplicationValidator.UpgradeThemeParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ThemePlatformModel.ThemesSchema>;
}
import ThemePlatformApplicationValidator = require("./ThemePlatformApplicationValidator");
import ThemePlatformModel = require("./ThemePlatformModel");
