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
     * @param {ThemePlatformApplicationValidator.ApplyThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name applyTheme
     * @summary: Apply theme.
     * @description: Set and apply a theme to an application or page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/applyTheme/).
     */
    applyTheme({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.ApplyThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.CreatePageParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name createPage
     * @summary: Create page.
     * @description: Generate and add a new page to the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/createPage/).
     */
    createPage({ themeId, body, requestHeaders }?: ThemePlatformApplicationValidator.CreatePageParam, { responseHeaders }?: object): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.DeletePageParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name deletePage
     * @summary: Delete page.
     * @description: Remove a page from the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/deletePage/).
     */
    deletePage({ themeId, pageValue, requestHeaders }?: ThemePlatformApplicationValidator.DeletePageParam, { responseHeaders }?: object): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.DeleteThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name deleteTheme
     * @summary: Delete theme.
     * @description: Remove a theme from the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/deleteTheme/).
     */
    deleteTheme({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.DeleteThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.DuplicateThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name duplicateTheme
     * @summary: Duplicate theme.
     * @description: Create a copy of an existing theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/duplicateTheme/).
     */
    duplicateTheme({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.DuplicateThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetAllPagesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AllAvailablePageSchema>} - Success response
     * @name getAllPages
     * @summary: Get all pages.
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
     * @summary: Get application themes.
     * @description: Retrieve themes available for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getApplicationThemes/).
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
     * @summary: Get application themes count.
     * @description: Count the number of themes available for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getApplicationThemesCount/).
     */
    getApplicationThemesCount({ requestHeaders }?: any, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {ThemePlatformApplicationValidator.GetAppliedThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getAppliedTheme
     * @summary: Get applied theme.
     * @description: Retrieve the currently applied theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getAppliedTheme/).
     */
    getAppliedTheme({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetFontsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.FontsSchema>} - Success response
     * @name getFonts
     * @summary: Get fonts.
     * @description: Retrieve a list of available fonts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getFonts/).
     */
    getFonts({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ThemePlatformModel.FontsSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetFontsV2Param} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.FontsSchema>} - Success response
     * @name getFontsV2
     * @summary: Get fonts.
     * @description: Retrieve a list of available fonts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getFontsV2/).
     */
    getFontsV2({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ThemePlatformModel.FontsSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetLatestVersionOfThemeBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.MarketplaceTheme[]>} - Success response
     * @name getLatestVersionOfThemeBySlug
     * @summary: Get latest version of theme by slug.
     * @description: Retrieve the most recent version of a theme using its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getLatestVersionOfThemeBySlug/).
     */
    getLatestVersionOfThemeBySlug({ slugName, requestHeaders }?: ThemePlatformApplicationValidator.GetLatestVersionOfThemeBySlugParam, { responseHeaders }?: object): Promise<ThemePlatformModel.MarketplaceTheme[]>;
    /**
     * @param {ThemePlatformApplicationValidator.GetPageParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name getPage
     * @summary: Get page.
     * @description: Retrieve detailed information about a specific page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getPage/).
     */
    getPage({ themeId, pageValue, requestHeaders }?: ThemePlatformApplicationValidator.GetPageParam, { responseHeaders }?: object): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getThemeById
     * @summary: Get theme by ID.
     * @description: Retrieve a theme by its unique identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeById/).
     */
    getThemeById({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.GetThemeByIdParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.GetThemeForPreviewParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name getThemeForPreview
     * @summary: Get theme for preview.
     * @description: Retrieve a theme for previewing before application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeForPreview/).
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
     * @summary: Get theme last modified.
     * @description: Retrieve the last modification of a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeLastModified/).
     */
    getThemeLastModified({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.GetThemeLastModifiedParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {ThemePlatformApplicationValidator.IsUpgradableParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemeUpgradableResponse>} - Success response
     * @name isUpgradable
     * @summary: Is upgradable.
     * @description: Determine if a theme is eligible for an upgrade. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/isUpgradable/).
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
     * @summary: Update multiple pages.
     * @description: Modify multiple pages simultaneously. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updateMultiplePages/).
     */
    updateMultiplePages({ themeId, body, requestHeaders }?: ThemePlatformApplicationValidator.UpdateMultiplePagesParam, { responseHeaders }?: object): Promise<ThemePlatformModel.AllAvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdatePageParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
     * @name updatePage
     * @summary: Update page.
     * @description: Modify and update the content of a page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updatePage/).
     */
    updatePage({ themeId, pageValue, body, requestHeaders }?: ThemePlatformApplicationValidator.UpdatePageParam, { responseHeaders }?: object): Promise<ThemePlatformModel.AvailablePageSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdateThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name updateTheme
     * @summary: Update theme.
     * @description: Modify and update the content and settings of a theme - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updateTheme/).
     */
    updateTheme({ themeId, body, requestHeaders }?: ThemePlatformApplicationValidator.UpdateThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpdateThemeNameParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name updateThemeName
     * @summary: Update theme name.
     * @description: Modify the name of a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updateThemeName/).
     */
    updateThemeName({ themeId, body, requestHeaders }?: ThemePlatformApplicationValidator.UpdateThemeNameParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
    /**
     * @param {ThemePlatformApplicationValidator.UpgradeThemeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
     * @name upgradeTheme
     * @summary: Upgrade theme.
     * @description: Enhance and update a theme to a new version. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/upgradeTheme/).
     */
    upgradeTheme({ themeId, requestHeaders }?: ThemePlatformApplicationValidator.UpgradeThemeParam, { responseHeaders }?: object): Promise<ThemePlatformModel.ThemesSchema>;
}
import ThemePlatformApplicationValidator = require("sdk/output/javascript/code/sdk/platform/Theme/ThemePlatformApplicationValidator");
import ThemePlatformModel = require("sdk/output/javascript/code/sdk/platform/Theme/ThemePlatformModel");
