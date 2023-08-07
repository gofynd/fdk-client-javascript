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
   * @summary: Get organization's themes
   * @description: Get organization's themes
   */
  getOrganizationThemes({ status, pageSize, pageNo } = {}) {
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
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - The ID of the theme
   * @summary: Get theme details for an organization
   * @description: Fetches the theme details for a specific organization and theme ID
   */
  getOrganizationThemeDetails({ themeId } = {}) {
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
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - The ID of the theme
   * @param {MarketplaceTheme} arg.body
   * @summary: Update theme draft/submitted
   * @description: Update theme draft/submitted
   */
  updateDraftTheme({ themeId, body } = {}) {
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
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - The ID of the theme
   * @param {MarketplaceTheme} arg.body
   * @summary: Submit a theme
   * @description: Use this api to Submit a theme
   */
  submitOrganizationTheme({ themeId, body } = {}) {
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
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - The ID of the theme
   * @summary: Delete a theme
   * @description: This endpoint allows you to delete a theme by providing the organization and theme IDs.
   */
  deleteOrganizationTheme({ themeId } = {}) {
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
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slugName - Slug of theme
   * @summary: Get latest version of specified theme
   * @description: Use this api to get latest version of specified theme
   */
  getLatestVersionOfThemeBySlug({ slugName } = {}) {
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
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.slug] - The slug of the theme.
   * @param {MarketplaceTheme} arg.body
   * @summary: Create a new theme for the organization
   * @description: Use this api to create a new theme for the organization
   */
  createNewThemeInOrganization({ body, slug } = {}) {
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
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - The ID of the theme
   * @summary: Get theme rejection reasons
   * @description: Use this api to get theme rejection reasons
   */
  getThemeRejectionReasons({ themeId } = {}) {
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
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeSlug - The slug of the theme.
   * @param {number} [arg.pageSize] - The number of items to return per page.
   * @param {number} [arg.pageNo] - The page number to return.
   * @summary: Get theme versions
   * @description: Retrieve a list of theme versions for a specific theme in an organization.
   */
  getThemeVersions({ themeSlug, pageSize, pageNo } = {}) {
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
      undefined
    );
  }
}
module.exports = Theme;
