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
     * @summary: Create theme in sales channel
     * @description: Include a theme in an application drafts from theme collection. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/addThemeToApplication/).
     */
    addThemeToApplication({ body, requestHeaders }?: ThemePlatformApplicationValidator.AddThemeToApplicationParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.ApplyThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name applyTheme
     * @summary: Apply a theme
     * @description: Change current applied theme with new draft theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/applyTheme/).
     */
    applyTheme({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.ApplyThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.CreatePageParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name createPage
     * @summary: Create theme page
     * @description: Generate and add a new page to the selected theme of the Platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/createPage/).
     */
    createPage({ themeId, body, requestHeaders }?: ThemePlatformApplicationValidator.CreatePageParam, { responseHeaders }?: object): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.DeletePageParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name deletePage
     * @summary: Delete a page
     * @description: Remove a page from a theme of the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/deletePage/).
     */
    deletePage({ themeId, pageValue, requestHeaders }?: ThemePlatformApplicationValidator.DeletePageParam, { responseHeaders }?: object): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.DeleteThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name deleteTheme
     * @summary: Delete theme
     * @description: Remove a theme from theme drafts of a sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/deleteTheme/).
     */
    deleteTheme({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.DeleteThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.DuplicateThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name duplicateTheme
     * @summary: Duplicate a theme
     * @description: Create a new copy of an existing theme by theme Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/duplicateTheme/).
     */
    duplicateTheme({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.DuplicateThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetAllPagesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AllAvailablePageSchema>} - Success response
     * @name getAllPages
     * @summary: List pages of a theme
     * @description: Retrieve a list of all available pages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getAllPages/).
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
     * @summary: List sales channel themes
     * @description: Retrieve all draft themes added to sales channel from theme collection. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getApplicationThemes/).
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
     * @summary: Get sales channel themes count
     * @description: Retrieve count of all draft themes added to sales channel from theme collection. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getApplicationThemesCount/).
     */
    getApplicationThemesCount({ requestHeaders }?: any, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {ThemePlatformApplicationValidator.GetAppliedThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getAppliedTheme
     * @summary: Get applied theme
     * @description: Retrieve the currently applied theme of a sales channel using application Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getAppliedTheme/).
     */
    getAppliedTheme({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetExtensionSectionsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.GetExtensionSectionRes[]>} - Success response
     * @name getExtensionSections
     * @summary: Get extension sections
     * @description: Retrieve the list of extension sections for a given application in the specified company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getExtensionSections/).
     */
    getExtensionSections({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ThemePlatformModel.GetExtensionSectionRes[]>;
    /**
     * @param {ThemePlatformApplicationValidator.GetFontsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.FontsSchema>} - Success response
     * @name getFonts
     * @summary: List theme fonts
     * @description: Retrieve a list of available fonts that can be used by themes in the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getFonts/).
     */
    getFonts({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ThemePlatformModel.FontsSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetPageParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name getPage
     * @summary: Get a page
     * @description: Retrieve detailed information about a specific page of a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getPage/).
     */
    getPage({ themeId, pageValue, requestHeaders }?: ThemePlatformApplicationValidator.GetPageParam, { responseHeaders }?: object): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getThemeById
     * @summary: Get theme
     * @description: Retrieve a theme by its unique identifier. Response contains theme template data and data stored in theme editor. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeById/).
     */
    getThemeById({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.GetThemeByIdParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeForPreviewParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getThemeForPreview
     * @summary: Get theme for preview
     * @description: Retrieve a theme by its unique identifier. Response contains theme template data and data stored in theme editor. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeForPreview/).
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
     * @summary: Get theme last modified date
     * @description: Retrieve the last modification of a theme used for polling and identifing cross user changes in a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeLastModified/).
     */
    getThemeLastModified({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.GetThemeLastModifiedParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {ThemePlatformApplicationValidator.IsUpgradableParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemeUpgradableResponse>} - Success response
     * @name isUpgradable
     * @summary: Check theme is upgradable
     * @description: Determine if a public theme is eligible for an upgrade to a new version after any new version released in marketplace.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/isUpgradable/).
     */
    isUpgradable({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.IsUpgradableParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemeUpgradableResponse>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdateMultiplePagesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AllAvailablePageSchema>} - Success response
     * @name updateMultiplePages
     * @summary: Update theme pages
     * @description: Modify multiple pages simultaneously of a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updateMultiplePages/).
     */
    updateMultiplePages({ themeId, body, requestHeaders }?: ThemePlatformApplicationValidator.UpdateMultiplePagesParam, { responseHeaders }?: object): Promise<ThemePlatformModel.AllAvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdatePageParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name updatePage
     * @summary: Update a page
     * @description: Modify and update the content of a page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updatePage/).
     */
    updatePage({ themeId, pageValue, body, requestHeaders }?: ThemePlatformApplicationValidator.UpdatePageParam, { responseHeaders }?: object): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdateThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name updateTheme
     * @summary: Update theme
     * @description: Modify and update the content and settings of a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updateTheme/).
     */
    updateTheme({ themeId, body, requestHeaders }?: ThemePlatformApplicationValidator.UpdateThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdateThemeNameParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name updateThemeName
     * @summary: Update theme name
     * @description: Modify the name of the draft theme by theme Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updateThemeName/).
     */
    updateThemeName({ themeId, body, requestHeaders }?: ThemePlatformApplicationValidator.UpdateThemeNameParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpgradeThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name upgradeTheme
     * @summary: Upgrade theme
     * @description: Update a draft theme to a new version of the marketplace. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/upgradeTheme/).
     */
    upgradeTheme({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.UpgradeThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
}
import ThemePlatformApplicationValidator = require("./ThemePlatformApplicationValidator");
import ThemePlatformModel = require("./ThemePlatformModel");
