export = Theme;
declare class Theme {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {ThemePlatformApplicationValidator.AddThemeToApplicationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name addThemeToApplication
     * @summary: Add a theme to an application
     * @description: Add a theme to an application by providing the marketplace theme ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/addThemeToApplication/).
     */
    addThemeToApplication({ body, requestHeaders }?: ThemePlatformApplicationValidator.AddThemeToApplicationParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.AddToThemeLibraryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
     * @name addToThemeLibrary
     * @summary: Add a theme to the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to choose a theme and add it to the theme library. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/addToThemeLibrary/).
     */
    addToThemeLibrary({ body, requestHeaders }?: ThemePlatformApplicationValidator.AddToThemeLibraryParam, { responseHeaders }?: object): Promise<ThemePlatformModel.DummyResponse>;
    /**
     * @param {ThemePlatformApplicationValidator.ApplyThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name applyTheme
     * @summary: Apply theme to a specific application
     * @description: Apply theme to a specific application by providing company_id, application_id, and theme_id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/applyTheme/).
     */
    applyTheme({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.ApplyThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.ArchiveThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
     * @name archiveTheme
     * @summary: Archive a theme
     * @description: Use this API to store an existing theme but not delete it so that it can be used in future if required.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/archiveTheme/).
     */
    archiveTheme({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.ArchiveThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.DummyResponse>;
    /**
     * @param {ThemePlatformApplicationValidator.CreatePageParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name createPage
     * @summary: Create a page
     * @description: Use this API to create a page for a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/createPage/).
     */
    createPage({ themeId, body, requestHeaders }?: ThemePlatformApplicationValidator.CreatePageParam, { responseHeaders }?: object): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.DeletePageParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name deletePage
     * @summary: Deletes a page
     * @description: Use this API to delete a page for a theme by its ID and page_value. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/deletePage/).
     */
    deletePage({ themeId, pageValue, requestHeaders }?: ThemePlatformApplicationValidator.DeletePageParam, { responseHeaders }?: object): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.DeleteThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name deleteTheme
     * @summary: Delete a theme
     * @description: This endpoint is used to delete a theme from the specified company and application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/deleteTheme/).
     */
    deleteTheme({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.DeleteThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.DuplicateThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name duplicateTheme
     * @summary: Duplicate a Theme
     * @description: This endpoint duplicates a Theme in the specified application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/duplicateTheme/).
     */
    duplicateTheme({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.DuplicateThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetAllPagesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AllAvailablePageSchema>} - Success response
     * @name getAllPages
     * @summary: Get all pages of a theme
     * @description: Use this API to retrieve all the available pages of a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getAllPages/).
     */
    getAllPages({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.GetAllPagesParam, { responseHeaders }?: object): Promise<ThemePlatformModel.AllAvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetApplicationThemesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema[]>} - Success response
     * @name getApplicationThemes
     * @summary: Get all the themes for a specific application
     * @description: Get all the themes for a specific application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getApplicationThemes/).
     */
    getApplicationThemes({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema[]>;
    /**
     * @param {ThemePlatformApplicationValidator.GetApplicationThemesCountParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getApplicationThemesCount
     * @summary: Get the count of themes for a specific application
     * @description: Get the count of themes for a specific application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getApplicationThemesCount/).
     */
    getApplicationThemesCount({ requestHeaders }?: any, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {ThemePlatformApplicationValidator.GetAppliedThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getAppliedTheme
     * @summary: Get the Applied theme of an Application
     * @description: Get Applied Theme of an Application by Application Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getAppliedTheme/).
     */
    getAppliedTheme({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetFontsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.FontsSchema>} - Success response
     * @name getFonts
     * @summary: Get all the supported fonts in a theme
     * @description: Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getFonts/).
     */
    getFonts({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ThemePlatformModel.FontsSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetPageParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name getPage
     * @summary: Get page of a theme
     * @description: Use this API to retrieve a page of a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getPage/).
     */
    getPage({ themeId, pageValue, requestHeaders }?: ThemePlatformApplicationValidator.GetPageParam, { responseHeaders }?: object): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetPublicThemesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
     * @name getPublicThemes
     * @summary: Get all public themes
     * @description: Use this API to get a list of free themes that you can apply to your website. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getPublicThemes/).
     */
    getPublicThemes({ pageSize, pageNo, requestHeaders }?: ThemePlatformApplicationValidator.GetPublicThemesParam, { responseHeaders }?: object): Promise<ThemePlatformModel.DummyResponse>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getThemeById
     * @summary: Get Theme By Theme Id
     * @description: Get Theme By Theme Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeById/).
     */
    getThemeById({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.GetThemeByIdParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeForPreviewParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getThemeForPreview
     * @summary: Get Theme Preview By Theme Id
     * @description: Get Theme Preview By Theme Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeForPreview/).
     */
    getThemeForPreview({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.GetThemeForPreviewParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeLastModifiedParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<any>} - Success response
     * @name getThemeLastModified
     * @summary: Fetch last modified timestamp
     * @description: Use this API to fetch Last-Modified timestamp in header metadata. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeLastModified/).
     */
    getThemeLastModified({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.GetThemeLastModifiedParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeLibraryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
     * @name getThemeLibrary
     * @summary: Get a list of themes from the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to fetch a list of themes from the library along with their configuration details.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeLibrary/).
     */
    getThemeLibrary({ pageSize, pageNo, requestHeaders }?: ThemePlatformApplicationValidator.GetThemeLibraryParam, { responseHeaders }?: object): Promise<ThemePlatformModel.DummyResponse>;
    /**
     * @param {ThemePlatformApplicationValidator.IsUpgradableParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemeUpgradableResponse>} - Success response
     * @name isUpgradable
     * @summary: Check if the theme is upgradable
     * @description: This API endpoint checks if the theme is upgradable for a specific company and application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/isUpgradable/).
     */
    isUpgradable({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.IsUpgradableParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemeUpgradableResponse>;
    /**
     * @param {ThemePlatformApplicationValidator.PublishThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
     * @name publishTheme
     * @summary: Publish a theme
     * @description: Use this API to publish a theme that is either newly created or edited. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/publishTheme/).
     */
    publishTheme({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.PublishThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.DummyResponse>;
    /**
     * @param {ThemePlatformApplicationValidator.UnarchiveThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
     * @name unarchiveTheme
     * @summary: Unarchive a theme
     * @description: Use this API to restore an archived theme and bring it back for editing or publishing.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/unarchiveTheme/).
     */
    unarchiveTheme({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.UnarchiveThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.DummyResponse>;
    /**
     * @param {ThemePlatformApplicationValidator.UnpublishThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
     * @name unpublishTheme
     * @summary: Unpublish a theme
     * @description: Use this API to remove an existing theme from the list of available themes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/unpublishTheme/).
     */
    unpublishTheme({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.UnpublishThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.DummyResponse>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdateMultiplePagesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AllAvailablePageSchema>} - Success response
     * @name updateMultiplePages
     * @summary: Update multiple pages of a theme
     * @description: Use this API to update multiple pages of a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updateMultiplePages/).
     */
    updateMultiplePages({ themeId, body, requestHeaders }?: ThemePlatformApplicationValidator.UpdateMultiplePagesParam, { responseHeaders }?: object): Promise<ThemePlatformModel.AllAvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdatePageParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name updatePage
     * @summary: Updates a page
     * @description: Use this API to update a page for a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updatePage/).
     */
    updatePage({ themeId, pageValue, body, requestHeaders }?: ThemePlatformApplicationValidator.UpdatePageParam, { responseHeaders }?: object): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdateThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name updateTheme
     * @summary: Update theme for a specific company and application
     * @description: Update theme for a specific company and application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updateTheme/).
     */
    updateTheme({ themeId, body, requestHeaders }?: ThemePlatformApplicationValidator.UpdateThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdateThemeNameParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name updateThemeName
     * @summary: Update Theme Name
     * @description: Update the name of a theme for a specific company and application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updateThemeName/).
     */
    updateThemeName({ themeId, body, requestHeaders }?: ThemePlatformApplicationValidator.UpdateThemeNameParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpgradeThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name upgradeTheme
     * @summary: Upgrade an application
     * @description: This endpoint allows you to upgrade an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/upgradeTheme/).
     */
    upgradeTheme({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.UpgradeThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
}
import ThemePlatformApplicationValidator = require("sdk/output/javascript/code/sdk/platform/Theme/ThemePlatformApplicationValidator");
import ThemePlatformModel = require("sdk/output/javascript/code/sdk/platform/Theme/ThemePlatformModel");
