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
     * @summary: Get all pages of a theme
     * @description: Use this API to retrieve all the available pages of a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getAllPages/).
     */
    getAllPages({ companyId, applicationId, themeId, requestHeaders }?: ThemePartnerValidator.GetAllPagesParam, { responseHeaders }?: object): Promise<ThemePartnerModel.AllAvailablePageSchema>;
    /**
     * @param {ThemePartnerValidator.CreatePageParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.AvailablePageSchema>} - Success response
     * @name createPage
     * @summary: Create a page
     * @description: Use this API to create a page for a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/createPage/).
     */
    createPage({ companyId, applicationId, themeId, body, requestHeaders }?: ThemePartnerValidator.CreatePageParam, { responseHeaders }?: object): Promise<ThemePartnerModel.AvailablePageSchema>;
    /**
     * @param {ThemePartnerValidator.UpdateMultiplePagesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.AllAvailablePageSchema>} - Success response
     * @name updateMultiplePages
     * @summary: Update multiple pages of a theme
     * @description: Use this API to update multiple pages of a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/updateMultiplePages/).
     */
    updateMultiplePages({ companyId, applicationId, themeId, body, requestHeaders }?: ThemePartnerValidator.UpdateMultiplePagesParam, { responseHeaders }?: object): Promise<ThemePartnerModel.AllAvailablePageSchema>;
    /**
     * @param {ThemePartnerValidator.GetPageParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.AvailablePageSchema>} - Success response
     * @name getPage
     * @summary: Get page of a theme
     * @description: Use this API to retrieve a page of a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getPage/).
     */
    getPage({ companyId, applicationId, themeId, pageValue, requestHeaders }?: ThemePartnerValidator.GetPageParam, { responseHeaders }?: object): Promise<ThemePartnerModel.AvailablePageSchema>;
    /**
     * @param {ThemePartnerValidator.UpdatePageParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.AvailablePageSchema>} - Success response
     * @name updatePage
     * @summary: Updates a page
     * @description: Use this API to update a page for a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/updatePage/).
     */
    updatePage({ companyId, applicationId, themeId, pageValue, body, requestHeaders }?: ThemePartnerValidator.UpdatePageParam, { responseHeaders }?: object): Promise<ThemePartnerModel.AvailablePageSchema>;
    /**
     * @param {ThemePartnerValidator.DeletePageParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.AvailablePageSchema>} - Success response
     * @name deletePage
     * @summary: Deletes a page
     * @description: Use this API to delete a page for a theme by its ID and page_value. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/deletePage/).
     */
    deletePage({ companyId, applicationId, themeId, pageValue, requestHeaders }?: ThemePartnerValidator.DeletePageParam, { responseHeaders }?: object): Promise<ThemePartnerModel.AvailablePageSchema>;
    /**
     * @param {ThemePartnerValidator.GetApplicationThemesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.ThemesSchema[]>} - Success response
     * @name getApplicationThemes
     * @summary: Get all the themes for a specific application
     * @description: Use this API to get list of theme - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getApplicationThemes/).
     */
    getApplicationThemes({ companyId, applicationId, requestHeaders }?: ThemePartnerValidator.GetApplicationThemesParam, { responseHeaders }?: object): Promise<ThemePartnerModel.ThemesSchema[]>;
    /**
     * @param {ThemePartnerValidator.GetThemeByIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.ThemesSchema>} - Success response
     * @name getThemeById
     * @summary: Get Theme By Theme Id
     * @description: Use this API to get theme details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getThemeById/).
     */
    getThemeById({ companyId, applicationId, themeId, requestHeaders }?: ThemePartnerValidator.GetThemeByIdParam, { responseHeaders }?: object): Promise<ThemePartnerModel.ThemesSchema>;
    /**
     * @param {ThemePartnerValidator.UpdateThemeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.ThemesSchema>} - Success response
     * @name updateTheme
     * @summary: Update theme for a specific company and application
     * @description: Update theme for a specific company and application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/updateTheme/).
     */
    updateTheme({ companyId, applicationId, themeId, body, requestHeaders }?: ThemePartnerValidator.UpdateThemeParam, { responseHeaders }?: object): Promise<ThemePartnerModel.ThemesSchema>;
    /**
     * @param {ThemePartnerValidator.DeleteThemeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.ThemesSchema>} - Success response
     * @name deleteTheme
     * @summary: Delete a theme
     * @description: This endpoint is used to delete a theme from the specified company and application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/deleteTheme/).
     */
    deleteTheme({ companyId, applicationId, themeId, requestHeaders }?: ThemePartnerValidator.DeleteThemeParam, { responseHeaders }?: object): Promise<ThemePartnerModel.ThemesSchema>;
    /**
     * @param {ThemePartnerValidator.GetOrganizationThemesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.MarketplaceThemeSchema>} - Success response
     * @name getOrganizationThemes
     * @summary: Get organization's themes
     * @description: Get organization's themes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getOrganizationThemes/).
     */
    getOrganizationThemes({ status, pageSize, pageNo, requestHeaders }?: ThemePartnerValidator.GetOrganizationThemesParam, { responseHeaders }?: object): Promise<ThemePartnerModel.MarketplaceThemeSchema>;
    /**
     * @param {ThemePartnerValidator.GetOrganizationThemeDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.MarketplaceTheme>} - Success response
     * @name getOrganizationThemeDetails
     * @summary: Get theme details for an organization
     * @description: Fetches the theme details for a specific organization and theme ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getOrganizationThemeDetails/).
     */
    getOrganizationThemeDetails({ themeId, requestHeaders }?: ThemePartnerValidator.GetOrganizationThemeDetailsParam, { responseHeaders }?: object): Promise<ThemePartnerModel.MarketplaceTheme>;
    /**
     * @param {ThemePartnerValidator.UpdateDraftThemeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.MarketplaceTheme>} - Success response
     * @name updateDraftTheme
     * @summary: Update theme draft/submitted
     * @description: Update theme draft/submitted - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/updateDraftTheme/).
     */
    updateDraftTheme({ themeId, body, requestHeaders }?: ThemePartnerValidator.UpdateDraftThemeParam, { responseHeaders }?: object): Promise<ThemePartnerModel.MarketplaceTheme>;
    /**
     * @param {ThemePartnerValidator.SubmitOrganizationThemeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.MarketplaceTheme>} - Success response
     * @name submitOrganizationTheme
     * @summary: Submit a theme
     * @description: Use this api to Submit a theme - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/submitOrganizationTheme/).
     */
    submitOrganizationTheme({ themeId, body, requestHeaders }?: ThemePartnerValidator.SubmitOrganizationThemeParam, { responseHeaders }?: object): Promise<ThemePartnerModel.MarketplaceTheme>;
    /**
     * @param {ThemePartnerValidator.DeleteOrganizationThemeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.MarketplaceTheme>} - Success response
     * @name deleteOrganizationTheme
     * @summary: Delete a theme
     * @description: This endpoint allows you to delete a theme by providing the organization and theme IDs. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/deleteOrganizationTheme/).
     */
    deleteOrganizationTheme({ themeId, requestHeaders }?: ThemePartnerValidator.DeleteOrganizationThemeParam, { responseHeaders }?: object): Promise<ThemePartnerModel.MarketplaceTheme>;
    /**
     * @param {ThemePartnerValidator.GetLatestVersionOfThemeBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.MarketplaceTheme[]>} - Success response
     * @name getLatestVersionOfThemeBySlug
     * @summary: Get latest version of specified theme
     * @description: Use this api to get latest version of specified theme - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getLatestVersionOfThemeBySlug/).
     */
    getLatestVersionOfThemeBySlug({ slugName, requestHeaders }?: ThemePartnerValidator.GetLatestVersionOfThemeBySlugParam, { responseHeaders }?: object): Promise<ThemePartnerModel.MarketplaceTheme[]>;
    /**
     * @param {ThemePartnerValidator.CreateNewThemeInOrganizationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.MarketplaceTheme>} - Success response
     * @name createNewThemeInOrganization
     * @summary: Create a new theme for the organization
     * @description: Use this api to create a new theme for the organization - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/createNewThemeInOrganization/).
     */
    createNewThemeInOrganization({ body, slug, requestHeaders }?: ThemePartnerValidator.CreateNewThemeInOrganizationParam, { responseHeaders }?: object): Promise<ThemePartnerModel.MarketplaceTheme>;
    /**
     * @param {ThemePartnerValidator.GetThemeRejectionReasonsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.ThemeRejectionReasons>} - Success response
     * @name getThemeRejectionReasons
     * @summary: Get theme rejection reasons
     * @description: Use this api to get theme rejection reasons - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getThemeRejectionReasons/).
     */
    getThemeRejectionReasons({ themeId, requestHeaders }?: ThemePartnerValidator.GetThemeRejectionReasonsParam, { responseHeaders }?: object): Promise<ThemePartnerModel.ThemeRejectionReasons>;
    /**
     * @param {ThemePartnerValidator.GetThemeVersionsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<ThemePartnerModel.MarketplaceThemeSchema>} - Success response
     * @name getThemeVersions
     * @summary: Get theme versions
     * @description: Retrieve a list of theme versions for a specific theme in an organization. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getThemeVersions/).
     */
    getThemeVersions({ themeSlug, pageSize, pageNo, requestHeaders }?: ThemePartnerValidator.GetThemeVersionsParam, { responseHeaders }?: object): Promise<ThemePartnerModel.MarketplaceThemeSchema>;
}
import ThemePartnerModel = require("./ThemePartnerModel");
