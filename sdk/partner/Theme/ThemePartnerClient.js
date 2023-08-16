const Paginator = require("../../common/Paginator");
const { FDKClientValidationError } = require("../../common/FDKError");
const PartnerAPIClient = require("../PartnerAPIClient");
const ThemeValidator = require("./ThemePartnerValidator");
const ThemeModel = require("./ThemePartnerModel");
const { Logger } = require("./../../common/Logger");

class Theme {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.status] - The status of the theme
   * @param {number} [arg.pageSize] - Number of themes per page
   * @param {number} [arg.pageNo] - Page number to retrieve
   * @param {import("../PartnerAPIClient").Options} - Options
   * @summary: Get organization's themes
   * @description: Get organization's themes
   */
  getOrganizationThemes(
    { status, pageSize, pageNo } = {},
    { headers } = { headers: false }
  ) {
    const { error } = ThemeValidator.getOrganizationThemes().validate(
      {
        status,
        pageSize,
        pageNo,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["status"] = status;
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;

    return PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/themes`,
      query_params,
      undefined,
      { headers }
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - The ID of the theme
   * @param {import("../PartnerAPIClient").Options} - Options
   * @summary: Get theme details for an organization
   * @description: Fetches the theme details for a specific organization and theme ID
   */
  getOrganizationThemeDetails(
    { themeId } = {},
    { headers } = { headers: false }
  ) {
    const { error } = ThemeValidator.getOrganizationThemeDetails().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/theme/${themeId}`,
      query_params,
      undefined,
      { headers }
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - The ID of the theme
   * @param {MarketplaceTheme} arg.body
   * @param {import("../PartnerAPIClient").Options} - Options
   * @summary: Update theme draft/submitted
   * @description: Update theme draft/submitted
   */
  updateDraftTheme({ themeId, body } = {}, { headers } = { headers: false }) {
    const { error } = ThemeValidator.updateDraftTheme().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PartnerAPIClient.execute(
      this.config,
      "patch",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/theme/${themeId}`,
      query_params,
      body,
      { headers }
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - The ID of the theme
   * @param {MarketplaceTheme} arg.body
   * @param {import("../PartnerAPIClient").Options} - Options
   * @summary: Submit a theme
   * @description: Use this api to Submit a theme
   */
  submitOrganizationTheme(
    { themeId, body } = {},
    { headers } = { headers: false }
  ) {
    const { error } = ThemeValidator.submitOrganizationTheme().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PartnerAPIClient.execute(
      this.config,
      "put",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/theme/${themeId}`,
      query_params,
      body,
      { headers }
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - The ID of the theme
   * @param {import("../PartnerAPIClient").Options} - Options
   * @summary: Delete a theme
   * @description: This endpoint allows you to delete a theme by providing the organization and theme IDs.
   */
  deleteOrganizationTheme({ themeId } = {}, { headers } = { headers: false }) {
    const { error } = ThemeValidator.deleteOrganizationTheme().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PartnerAPIClient.execute(
      this.config,
      "delete",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/theme/${themeId}`,
      query_params,
      undefined,
      { headers }
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slugName - Slug of theme
   * @param {import("../PartnerAPIClient").Options} - Options
   * @summary: Get latest version of specified theme
   * @description: Use this api to get latest version of specified theme
   */
  getLatestVersionOfThemeBySlug(
    { slugName } = {},
    { headers } = { headers: false }
  ) {
    const { error } = ThemeValidator.getLatestVersionOfThemeBySlug().validate(
      {
        slugName,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/${slugName}/latest`,
      query_params,
      undefined,
      { headers }
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.slug] - The slug of the theme.
   * @param {MarketplaceTheme} arg.body
   * @param {import("../PartnerAPIClient").Options} - Options
   * @summary: Create a new theme for the organization
   * @description: Use this api to create a new theme for the organization
   */
  createNewThemeInOrganization(
    { body, slug } = {},
    { headers } = { headers: false }
  ) {
    const { error } = ThemeValidator.createNewThemeInOrganization().validate(
      {
        body,
        slug,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["slug"] = slug;

    return PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/theme`,
      query_params,
      body,
      { headers }
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - The ID of the theme
   * @param {import("../PartnerAPIClient").Options} - Options
   * @summary: Get theme rejection reasons
   * @description: Use this api to get theme rejection reasons
   */
  getThemeRejectionReasons({ themeId } = {}, { headers } = { headers: false }) {
    const { error } = ThemeValidator.getThemeRejectionReasons().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/theme/${themeId}/reasons`,
      query_params,
      undefined,
      { headers }
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeSlug - The slug of the theme.
   * @param {number} [arg.pageSize] - The number of items to return per page.
   * @param {number} [arg.pageNo] - The page number to return.
   * @param {import("../PartnerAPIClient").Options} - Options
   * @summary: Get theme versions
   * @description: Retrieve a list of theme versions for a specific theme in an organization.
   */
  getThemeVersions(
    { themeSlug, pageSize, pageNo } = {},
    { headers } = { headers: false }
  ) {
    const { error } = ThemeValidator.getThemeVersions().validate(
      {
        themeSlug,
        pageSize,
        pageNo,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;

    return PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/theme/${themeSlug}/versions`,
      query_params,
      undefined,
      { headers }
    );
  }
}
module.exports = Theme;
