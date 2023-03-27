const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const ThemeValidator = require("./ThemePlatformApplicationValidator");

class Theme {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID of the theme to be retrieved
   * @summary: Get all pages of a theme
   * @description: Use this API to retrieve all the available pages of a theme by its ID.
   */
  getAllPages({ themeId } = {}) {
    const { error } = ThemeValidator.getAllPages().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/page`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID of the theme
   * @param {AvailablePageSchema} arg.body
   * @summary: Create a page
   * @description: Use this API to create a page for a theme by its ID.
   */
  createPage({ themeId, body } = {}) {
    const { error } = ThemeValidator.createPage().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/page`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID of the theme to be retrieved
   * @param {AllAvailablePageSchema} arg.body
   * @summary: Update multiple pages of a theme
   * @description: Use this API to update multiple pages of a theme by its ID.
   */
  updateMultiplePages({ themeId, body } = {}) {
    const { error } = ThemeValidator.updateMultiplePages().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/page`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID of the theme to be retrieved
   * @param {string} arg.pageValue - Value of the page to be retrieved
   * @summary: Get page of a theme
   * @description: Use this API to retrieve a page of a theme.
   */
  getPage({ themeId, pageValue } = {}) {
    const { error } = ThemeValidator.getPage().validate(
      {
        themeId,
        pageValue,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/${pageValue}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID of the theme
   * @param {string} arg.pageValue - Value of the page to be updated
   * @param {AvailablePageSchema} arg.body
   * @summary: Updates a page
   * @description: Use this API to update a page for a theme by its ID.
   */
  updatePage({ themeId, pageValue, body } = {}) {
    const { error } = ThemeValidator.updatePage().validate(
      {
        themeId,
        pageValue,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/${pageValue}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID of the theme
   * @param {string} arg.pageValue - Value of the page to be updated
   * @summary: Deletes a page
   * @description: Use this API to delete a page for a theme by its ID and page_value.
   */
  deletePage({ themeId, pageValue } = {}) {
    const { error } = ThemeValidator.deletePage().validate(
      {
        themeId,
        pageValue,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/${pageValue}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @summary: Get a list of themes from the theme library
   * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to fetch a list of themes from the library along with their configuration details.
   */
  getThemeLibrary({ pageSize, pageNo } = {}) {
    const { error } = ThemeValidator.getThemeLibrary().validate(
      {
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/library`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AddThemeRequestSchema} arg.body
   * @summary: Add a theme to the theme library
   * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to choose a theme and add it to the theme library.
   */
  addToThemeLibrary({ body } = {}) {
    const { error } = ThemeValidator.addToThemeLibrary().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/library`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AddThemeRequestSchema} arg.body
   * @summary: Apply a theme
   * @description: Use this API to apply a theme to the website.
   */
  applyTheme({ body } = {}) {
    const { error } = ThemeValidator.applyTheme().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/apply`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - Theme ID
   * @summary: Checks if theme is upgradable
   * @description: There's always a possibility that new features get added to a theme. Use this API to check if the applied theme has an upgrade available.
   */
  isUpgradable({ themeId } = {}) {
    const { error } = ThemeValidator.isUpgradable().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/upgradable`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID allotted to the theme.
   * @summary: Upgrade a theme
   * @description: Use this API to upgrade the current theme to its latest version.
   */
  upgradeTheme({ themeId } = {}) {
    const { error } = ThemeValidator.upgradeTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/upgrade`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @summary: Get all public themes
   * @description: Use this API to get a list of free themes that you can apply to your website.
   */
  getPublicThemes({ pageSize, pageNo } = {}) {
    const { error } = ThemeValidator.getPublicThemes().validate(
      {
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/list/public`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ThemesSchema} arg.body
   * @summary: Create a new theme
   * @description: Themes improve the look and appearance of a website. Use this API to create a theme.
   */
  createTheme({ body } = {}) {
    const { error } = ThemeValidator.createTheme().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get the applied theme
   * @description: Use this API to retrieve the theme that is currently applied to the website along with its details.
   */
  getAppliedTheme({} = {}) {
    const { error } = ThemeValidator.getAppliedTheme().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get all the supported fonts in a theme
   * @description: Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts.
   */
  getFonts({} = {}) {
    const { error } = ThemeValidator.getFonts().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/fonts`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID allotted to the theme.
   * @summary: Gets theme by id
   * @description: Use this API to retrieve the details of a specific theme by using its ID.
   */
  getThemeById({ themeId } = {}) {
    const { error } = ThemeValidator.getThemeById().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID allotted to the theme.
   * @param {ThemesSchema} arg.body
   * @summary: Update a theme
   * @description: Use this API to edit an existing theme. You can customize the website font, sections, images, styles, and many more.
   */
  updateTheme({ themeId, body } = {}) {
    const { error } = ThemeValidator.updateTheme().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID allotted to the theme.
   * @summary: Delete a theme
   * @description: Use this API to delete a theme from the theme library.
   */
  deleteTheme({ themeId } = {}) {
    const { error } = ThemeValidator.deleteTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID allotted to the theme.
   * @summary: Get a theme preview
   * @description: A theme can be previewed before applying it. Use this API to retrieve the theme preview by using its ID.
   */
  getThemeForPreview({ themeId } = {}) {
    const { error } = ThemeValidator.getThemeForPreview().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/preview`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID allotted to the theme.
   * @summary: Publish a theme
   * @description: Use this API to publish a theme that is either newly created or edited.
   */
  publishTheme({ themeId } = {}) {
    const { error } = ThemeValidator.publishTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/publish`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID allotted to the theme.
   * @summary: Unpublish a theme
   * @description: Use this API to remove an existing theme from the list of available themes.
   */
  unpublishTheme({ themeId } = {}) {
    const { error } = ThemeValidator.unpublishTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/unpublish`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID allotted to the theme.
   * @summary: Archive a theme
   * @description: Use this API to store an existing theme but not delete it so that it can be used in future if required.
   */
  archiveTheme({ themeId } = {}) {
    const { error } = ThemeValidator.archiveTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/archive`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID allotted to the theme.
   * @summary: Unarchive a theme
   * @description: Use this API to restore an archived theme and bring it back for editing or publishing.
   */
  unarchiveTheme({ themeId } = {}) {
    const { error } = ThemeValidator.unarchiveTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/unarchive`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID allotted to the theme.
   * @summary: Fetch last modified timestamp
   * @description: Use this API to fetch Last-Modified timestamp in header metadata.
   */
  getThemeLastModified({ themeId } = {}) {
    const { error } = ThemeValidator.getThemeLastModified().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "head",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/polling`,
      query_params,
      undefined
    );
  }
}
module.exports = Theme;
