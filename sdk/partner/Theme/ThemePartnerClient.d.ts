export = Theme;
declare class Theme {
    constructor(config: any);
    config: any;
    /**
     * @param {ThemePartnerValidator.GetAllPagesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.AllAvailablePageSchema>} - Success response
     * @name getAllPages
     * @summary: Get all pages
     * @description: Retrieve a list of all pages available in the partner server setup. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getAllPages/).
     */
    getAllPages({ companyId, applicationId, themeId, requestHeaders }?: ThemePartnerValidator.GetAllPagesParam, { responseHeaders }?: object): Promise<ThemePartnerModel.AllAvailablePageSchema>;
    /**
     * @param {ThemePartnerValidator.CreatePageParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.AvailablePageSchema>} - Success response
     * @name createPage
     * @summary: Create page
     * @description: Add a new page to the partner server configurations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/createPage/).
     */
    createPage({ companyId, applicationId, themeId, body, requestHeaders }?: ThemePartnerValidator.CreatePageParam, { responseHeaders }?: object): Promise<ThemePartnerModel.AvailablePageSchema>;
    /**
     * @param {ThemePartnerValidator.UpdateMultiplePagesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.AllAvailablePageSchema>} - Success response
     * @name updateMultiplePages
     * @summary: Update multiple pages
     * @description: Modify and update multiple pages in the partner server setup. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/updateMultiplePages/).
     */
    updateMultiplePages({ companyId, applicationId, themeId, body, requestHeaders }?: ThemePartnerValidator.UpdateMultiplePagesParam, { responseHeaders }?: object): Promise<ThemePartnerModel.AllAvailablePageSchema>;
    /**
     * @param {ThemePartnerValidator.GetPageParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.AvailablePageSchema>} - Success response
     * @name getPage
     * @summary: Get page
     * @description: Obtain detailed information about a specific page in the partner server. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getPage/).
     */
    getPage({ companyId, applicationId, themeId, pageValue, requestHeaders }?: ThemePartnerValidator.GetPageParam, { responseHeaders }?: object): Promise<ThemePartnerModel.AvailablePageSchema>;
    /**
     * @param {ThemePartnerValidator.UpdatePageParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.AvailablePageSchema>} - Success response
     * @name updatePage
     * @summary: Update page
     * @description: Modify and update information related to a specific page in the partner server. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/updatePage/).
     */
    updatePage({ companyId, applicationId, themeId, pageValue, body, requestHeaders }?: ThemePartnerValidator.UpdatePageParam, { responseHeaders }?: object): Promise<ThemePartnerModel.AvailablePageSchema>;
    /**
     * @param {ThemePartnerValidator.DeletePageParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.AvailablePageSchema>} - Success response
     * @name deletePage
     * @summary: Delete page
     * @description: Remove a page from the partner server configurations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/deletePage/).
     */
    deletePage({ companyId, applicationId, themeId, pageValue, requestHeaders }?: ThemePartnerValidator.DeletePageParam, { responseHeaders }?: object): Promise<ThemePartnerModel.AvailablePageSchema>;
    /**
     * @param {ThemePartnerValidator.GetApplicationThemesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.ThemesSchema[]>} - Success response
     * @name getApplicationThemes
     * @summary: Get application themes
     * @description: Retrieve a list of themes available for the partner server application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getApplicationThemes/).
     */
    getApplicationThemes({ companyId, applicationId, requestHeaders }?: ThemePartnerValidator.GetApplicationThemesParam, { responseHeaders }?: object): Promise<ThemePartnerModel.ThemesSchema[]>;
    /**
     * @param {ThemePartnerValidator.GetThemeByIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.ThemesSchema>} - Success response
     * @name getThemeById
     * @summary: Get theme by ID
     * @description: Obtain detailed information about a theme using its unique ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getThemeById/).
     */
    getThemeById({ companyId, applicationId, themeId, requestHeaders }?: ThemePartnerValidator.GetThemeByIdParam, { responseHeaders }?: object): Promise<ThemePartnerModel.ThemesSchema>;
    /**
     * @param {ThemePartnerValidator.UpdateThemeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.ThemesSchema>} - Success response
     * @name updateTheme
     * @summary: Update theme
     * @description: Modify and update information related to a theme in the partner server. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/updateTheme/).
     */
    updateTheme({ companyId, applicationId, themeId, body, requestHeaders }?: ThemePartnerValidator.UpdateThemeParam, { responseHeaders }?: object): Promise<ThemePartnerModel.ThemesSchema>;
    /**
     * @param {ThemePartnerValidator.DeleteThemeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.ThemesSchema>} - Success response
     * @name deleteTheme
     * @summary: Delete theme
     * @description: Remove a theme from the partner server configurations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/deleteTheme/).
     */
    deleteTheme({ companyId, applicationId, themeId, requestHeaders }?: ThemePartnerValidator.DeleteThemeParam, { responseHeaders }?: object): Promise<ThemePartnerModel.ThemesSchema>;
    /**
     * @param {ThemePartnerValidator.GetOrganizationThemesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.MarketplaceThemeSchema>} - Success response
     * @name getOrganizationThemes
     * @summary: Get organization themes
     * @description: Retrieve a list of themes associated with partner server organizations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getOrganizationThemes/).
     */
    getOrganizationThemes({ status, pageSize, pageNo, requestHeaders }?: ThemePartnerValidator.GetOrganizationThemesParam, { responseHeaders }?: object): Promise<ThemePartnerModel.MarketplaceThemeSchema>;
    /**
     * @param {ThemePartnerValidator.GetOrganizationThemeDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.MarketplaceTheme>} - Success response
     * @name getOrganizationThemeDetails
     * @summary: Get organization theme details
     * @description: Obtain detailed information about a theme within partner server organizations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getOrganizationThemeDetails/).
     */
    getOrganizationThemeDetails({ themeId, requestHeaders }?: ThemePartnerValidator.GetOrganizationThemeDetailsParam, { responseHeaders }?: object): Promise<ThemePartnerModel.MarketplaceTheme>;
    /**
     * @param {ThemePartnerValidator.UpdateDraftThemeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.MarketplaceTheme>} - Success response
     * @name updateDraftTheme
     * @summary: Update draft theme
     * @description: Modify and update a draft theme in partner server organizations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/updateDraftTheme/).
     */
    updateDraftTheme({ themeId, body, requestHeaders }?: ThemePartnerValidator.UpdateDraftThemeParam, { responseHeaders }?: object): Promise<ThemePartnerModel.MarketplaceTheme>;
    /**
     * @param {ThemePartnerValidator.SubmitOrganizationThemeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.MarketplaceTheme>} - Success response
     * @name submitOrganizationTheme
     * @summary: Submit organization theme
     * @description: Initiate the process of submitting a theme within partner server organizations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/submitOrganizationTheme/).
     */
    submitOrganizationTheme({ themeId, body, requestHeaders }?: ThemePartnerValidator.SubmitOrganizationThemeParam, { responseHeaders }?: object): Promise<ThemePartnerModel.MarketplaceTheme>;
    /**
     * @param {ThemePartnerValidator.DeleteOrganizationThemeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.MarketplaceTheme>} - Success response
     * @name deleteOrganizationTheme
     * @summary: Delete organization theme
     * @description: Remove a theme from partner server organizations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/deleteOrganizationTheme/).
     */
    deleteOrganizationTheme({ themeId, requestHeaders }?: ThemePartnerValidator.DeleteOrganizationThemeParam, { responseHeaders }?: object): Promise<ThemePartnerModel.MarketplaceTheme>;
    /**
     * @param {ThemePartnerValidator.GetLatestVersionOfThemeBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.MarketplaceTheme[]>} - Success response
     * @name getLatestVersionOfThemeBySlug
     * @summary: Get latest version of theme by slug
     * @description: Retrieve the most recent version of a theme using its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getLatestVersionOfThemeBySlug/).
     */
    getLatestVersionOfThemeBySlug({ slugName, requestHeaders }?: ThemePartnerValidator.GetLatestVersionOfThemeBySlugParam, { responseHeaders }?: object): Promise<ThemePartnerModel.MarketplaceTheme[]>;
    /**
     * @param {ThemePartnerValidator.CreateNewThemeInOrganizationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.MarketplaceTheme>} - Success response
     * @name createNewThemeInOrganization
     * @summary: Create new theme in organization
     * @description: Add a new theme to partner server organizations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/createNewThemeInOrganization/).
     */
    createNewThemeInOrganization({ body, slug, requestHeaders }?: ThemePartnerValidator.CreateNewThemeInOrganizationParam, { responseHeaders }?: object): Promise<ThemePartnerModel.MarketplaceTheme>;
    /**
     * @param {ThemePartnerValidator.CreateExtensionSectionDraftParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.DraftExtensionSectionResponse>} -
     *   Success response
     * @name createExtensionSectionDraft
     * @summary: Draft extension section
     * @description: Create a new draft for an extension section within the specified organization. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/createExtensionSectionDraft/).
     */
    createExtensionSectionDraft({ extensionId, body, requestHeaders }?: ThemePartnerValidator.CreateExtensionSectionDraftParam, { responseHeaders }?: object): Promise<ThemePartnerModel.DraftExtensionSectionResponse>;
    /**
     * @param {ThemePartnerValidator.PublishExtensionSectionsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.PublishExtensionSectionResponse>} -
     *   Success response
     * @name publishExtensionSections
     * @summary: Publish an extension section
     * @description: Publish a draft extension section within the specified organization. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/publishExtensionSections/).
     */
    publishExtensionSections({ extensionId, body, requestHeaders }?: ThemePartnerValidator.PublishExtensionSectionsParam, { responseHeaders }?: object): Promise<ThemePartnerModel.PublishExtensionSectionResponse>;
    /**
     * @param {ThemePartnerValidator.ApplyExtensionPreviewParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.ExtensionPreviewResponse>} - Success response
     * @name applyExtensionPreview
     * @summary: Start a Preview of Extension Section
     * @description: Use this API to start a local session for previewing the extension section binding. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/applyExtensionPreview/).
     */
    applyExtensionPreview({ extensionSectionId, body, requestHeaders }?: ThemePartnerValidator.ApplyExtensionPreviewParam, { responseHeaders }?: object): Promise<ThemePartnerModel.ExtensionPreviewResponse>;
    /**
     * @param {ThemePartnerValidator.RemoveExtensionPreviewParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.ExtensionPreviewResponse>} - Success response
     * @name removeExtensionPreview
     * @summary: Close a Preview of Extension Section
     * @description: Use this API to close a local session for previewing the extension section binding - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/removeExtensionPreview/).
     */
    removeExtensionPreview({ extensionSectionId, body, requestHeaders }?: ThemePartnerValidator.RemoveExtensionPreviewParam, { responseHeaders }?: object): Promise<ThemePartnerModel.ExtensionPreviewResponse>;
    /**
     * @param {ThemePartnerValidator.GetThemeRejectionReasonsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.ThemeRejectionReasons>} - Success response
     * @name getThemeRejectionReasons
     * @summary: Get theme rejection reasons
     * @description: Retrieve reasons for the rejection of themes within partner server organizations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getThemeRejectionReasons/).
     */
    getThemeRejectionReasons({ themeId, requestHeaders }?: ThemePartnerValidator.GetThemeRejectionReasonsParam, { responseHeaders }?: object): Promise<ThemePartnerModel.ThemeRejectionReasons>;
    /**
     * @param {ThemePartnerValidator.GetThemeVersionsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.MarketplaceThemeSchema>} - Success response
     * @name getThemeVersions
     * @summary: Get theme versions
     * @description: Retrieve a list of versions available for a theme within partner server organizations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getThemeVersions/).
     */
    getThemeVersions({ themeSlug, pageSize, pageNo, requestHeaders }?: ThemePartnerValidator.GetThemeVersionsParam, { responseHeaders }?: object): Promise<ThemePartnerModel.MarketplaceThemeSchema>;
    /**
     * @param {ThemePartnerValidator.CreateThemeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.ThemesSchema>} - Success response
     * @name createTheme
     * @summary: Create a new theme
     * @description: Themes improve the look and appearance of a website. Use this API to create a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/createTheme/).
     */
    createTheme({ companyId, applicationId, body, requestHeaders }?: ThemePartnerValidator.CreateThemeParam, { responseHeaders }?: object): Promise<ThemePartnerModel.ThemesSchema>;
}
import ThemePartnerModel = require("./ThemePartnerModel");
