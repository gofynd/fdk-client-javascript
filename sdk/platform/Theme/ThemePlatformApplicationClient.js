const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const ThemePlatformApplicationValidator = require("./ThemePlatformApplicationValidator");
const ThemePlatformModel = require("./ThemePlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Theme {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {ThemePlatformApplicationValidator.AddThemeToApplicationV2Param} arg
   *   - Arg object
   *
   * @returns {Promise<ThemePlatformModel.ApplyThemeResponseV2>} - Success response
   * @name addThemeToApplicationV2
   * @summary: Apply a theme to an application
   * @description: Apply a theme to an application by providing the marketplace theme ID.
   */
  async addThemeToApplicationV2({ body } = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.addThemeToApplicationV2().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.addThemeToApplicationV2().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > addThemeToApplicationV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = ThemePlatformModel.ApplyThemeResponseV2().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > addThemeToApplicationV2 \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.AddToThemeLibraryParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name addToThemeLibrary
   * @summary: Add a theme to the theme library
   * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to choose a theme and add it to the theme library.
   */
  async addToThemeLibrary({ body } = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.addToThemeLibrary().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.addToThemeLibrary().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > addToThemeLibrary \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/library`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > addToThemeLibrary \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.ApplyThemeParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name applyTheme
   * @summary: Apply a theme
   * @description: Use this API to apply a theme to the website.
   */
  async applyTheme({ body } = {}) {
    const { error } = ThemePlatformApplicationValidator.applyTheme().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.applyTheme().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > applyTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/apply`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > applyTheme \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.ApplyThemeV2Param} arg - Arg object
   * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
   *   Success response
   * @name applyThemeV2
   * @summary: Apply theme to a specific application
   * @description: Apply theme to a specific application by providing company_id, application_id, and theme_id.
   */
  async applyThemeV2({ themeId } = {}) {
    const { error } = ThemePlatformApplicationValidator.applyThemeV2().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.applyThemeV2().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > applyThemeV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/apply`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.AllThemesApplicationResponseV2().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > applyThemeV2 \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.ArchiveThemeParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name archiveTheme
   * @summary: Archive a theme
   * @description: Use this API to store an existing theme but not delete it so that it can be used in future if required.
   */
  async archiveTheme({ themeId } = {}) {
    const { error } = ThemePlatformApplicationValidator.archiveTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.archiveTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > archiveTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/archive`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > archiveTheme \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.CheckThemeUpgradableV2Param} arg
   *   - Arg object
   *
   * @returns {Promise<ThemePlatformModel.ThemeUpgradableResponseV2>} - Success response
   * @name checkThemeUpgradableV2
   * @summary: Check if the theme is upgradable
   * @description: This API endpoint checks if the theme is upgradable for a specific company and application.
   */
  async checkThemeUpgradableV2({ themeId } = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.checkThemeUpgradableV2().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.checkThemeUpgradableV2().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > checkThemeUpgradableV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/upgradable`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.ThemeUpgradableResponseV2().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > checkThemeUpgradableV2 \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.CreatePageParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
   * @name createPage
   * @summary: Create a page
   * @description: Use this API to create a page for a theme by its ID.
   */
  async createPage({ themeId, body } = {}) {
    const { error } = ThemePlatformApplicationValidator.createPage().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.createPage().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > createPage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/page`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = ThemePlatformModel.AvailablePageSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > createPage \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.CreateThemeParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name createTheme
   * @summary: Create a new theme
   * @description: Themes improve the look and appearance of a website. Use this API to create a theme.
   */
  async createTheme({ body } = {}) {
    const { error } = ThemePlatformApplicationValidator.createTheme().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.createTheme().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > createTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > createTheme \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.DeletePageParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
   * @name deletePage
   * @summary: Deletes a page
   * @description: Use this API to delete a page for a theme by its ID and page_value.
   */
  async deletePage({ themeId, pageValue } = {}) {
    const { error } = ThemePlatformApplicationValidator.deletePage().validate(
      {
        themeId,
        pageValue,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.deletePage().validate(
      {
        themeId,
        pageValue,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > deletePage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/${pageValue}`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.AvailablePageSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > deletePage \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.DeleteThemeParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name deleteTheme
   * @summary: Delete a theme
   * @description: Use this API to delete a theme from the theme library.
   */
  async deleteTheme({ themeId } = {}) {
    const { error } = ThemePlatformApplicationValidator.deleteTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.deleteTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > deleteTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > deleteTheme \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.DeleteThemeV2Param} arg - Arg object
   * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
   *   Success response
   * @name deleteThemeV2
   * @summary: Delete a theme
   * @description: This endpoint is used to delete a theme from the specified company and application.
   */
  async deleteThemeV2({ themeId } = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.deleteThemeV2().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.deleteThemeV2().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > deleteThemeV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.AllThemesApplicationResponseV2().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > deleteThemeV2 \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.DuplicateThemeV2Param} arg - Arg object
   * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
   *   Success response
   * @name duplicateThemeV2
   * @summary: Duplicate a Theme
   * @description: This endpoint duplicates a Theme in the specified application.
   */
  async duplicateThemeV2({ themeId } = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.duplicateThemeV2().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.duplicateThemeV2().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > duplicateThemeV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/duplicate`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.AllThemesApplicationResponseV2().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > duplicateThemeV2 \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetAllPagesParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.AllAvailablePageSchema>} - Success response
   * @name getAllPages
   * @summary: Get all pages of a theme
   * @description: Use this API to retrieve all the available pages of a theme by its ID.
   */
  async getAllPages({ themeId } = {}) {
    const { error } = ThemePlatformApplicationValidator.getAllPages().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getAllPages().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getAllPages \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/page`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.AllAvailablePageSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > getAllPages \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetApplicationThemeByIdV2Param} arg
   *   - Arg object
   *
   * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
   *   Success response
   * @name getApplicationThemeByIdV2
   * @summary: Get Theme By Theme Id
   * @description:
   */
  async getApplicationThemeByIdV2({ themeId } = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.getApplicationThemeByIdV2().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getApplicationThemeByIdV2().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getApplicationThemeByIdV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.AllThemesApplicationResponseV2().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > getApplicationThemeByIdV2 \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetApplicationThemesCountV2Param} arg
   *   - Arg object
   *
   * @returns {Promise<Object>} - Success response
   * @name getApplicationThemesCountV2
   * @summary: Get the count of themes for a specific application
   * @description:
   */
  async getApplicationThemesCountV2({} = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.getApplicationThemesCountV2().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getApplicationThemesCountV2().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getApplicationThemesCountV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/application_themes_count`,
      query_params,
      undefined
    );

    const { error: res_error } = Joi.any().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > getApplicationThemesCountV2 \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetApplicationThemesV2Param} arg
   *   - Arg object
   *
   * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2[]>}
   *   - Success response
   *
   * @name getApplicationThemesV2
   * @summary: Get all the themes for a specific application
   * @description:
   */
  async getApplicationThemesV2({} = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.getApplicationThemesV2().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getApplicationThemesV2().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getApplicationThemesV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/themes`,
      query_params,
      undefined
    );

    const { error: res_error } = Joi.array()
      .items(ThemePlatformModel.AllThemesApplicationResponseV2())
      .validate(response, { abortEarly: false, allowUnknown: false });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > getApplicationThemesV2 \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetAppliedThemeParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name getAppliedTheme
   * @summary: Get the applied theme
   * @description: Use this API to retrieve the theme that is currently applied to the website along with its details.
   */
  async getAppliedTheme({} = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.getAppliedTheme().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getAppliedTheme().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getAppliedTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > getAppliedTheme \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetAppliedThemeV2Param} arg - Arg object
   * @returns {Promise<ThemePlatformModel.ApplyThemeResponseV2>} - Success response
   * @name getAppliedThemeV2
   * @summary: Get the Applied theme of an Application
   * @description: Get Applied Theme of an Application by Application Id
   */
  async getAppliedThemeV2({} = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.getAppliedThemeV2().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getAppliedThemeV2().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getAppliedThemeV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.ApplyThemeResponseV2().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > getAppliedThemeV2 \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetDefaultPageDetailsParam} arg
   *   - Arg object
   *
   * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
   * @name getDefaultPageDetails
   * @summary: Get default page details of a page from page_value
   * @description: Use this API to retrieve default page details of a page.
   */
  async getDefaultPageDetails({ pageValue } = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.getDefaultPageDetails().validate(
      {
        pageValue,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getDefaultPageDetails().validate(
      {
        pageValue,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getDefaultPageDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/page/${pageValue}/default`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.AvailablePageSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > getDefaultPageDetails \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetFontsParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.FontsSchema>} - Success response
   * @name getFonts
   * @summary: Get all the supported fonts in a theme
   * @description: Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts.
   */
  async getFonts({} = {}) {
    const { error } = ThemePlatformApplicationValidator.getFonts().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getFonts().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getFonts \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/fonts`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.FontsSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > getFonts \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetFontsV2Param} arg - Arg object
   * @returns {Promise<ThemePlatformModel.FontsSchema>} - Success response
   * @name getFontsV2
   * @summary: Get all the supported fonts in a theme
   * @description: Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts.
   */
  async getFontsV2({} = {}) {
    const { error } = ThemePlatformApplicationValidator.getFontsV2().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getFontsV2().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getFontsV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/fonts`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.FontsSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > getFontsV2 \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetPageParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
   * @name getPage
   * @summary: Get page of a theme
   * @description: Use this API to retrieve a page of a theme.
   */
  async getPage({ themeId, pageValue } = {}) {
    const { error } = ThemePlatformApplicationValidator.getPage().validate(
      {
        themeId,
        pageValue,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getPage().validate(
      {
        themeId,
        pageValue,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getPage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/${pageValue}`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.AvailablePageSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > getPage \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetPublicThemesParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.ThemesListingResponseSchema>} -
   *   Success response
   * @name getPublicThemes
   * @summary: Get all public themes
   * @description: Use this API to get a list of free themes that you can apply to your website.
   */
  async getPublicThemes({ pageSize, pageNo } = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.getPublicThemes().validate(
      {
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getPublicThemes().validate(
      {
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getPublicThemes \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/list/public`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesListingResponseSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > getPublicThemes \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetThemeByIdParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name getThemeById
   * @summary: Gets theme by id
   * @description: Use this API to retrieve the details of a specific theme by using its ID.
   */
  async getThemeById({ themeId } = {}) {
    const { error } = ThemePlatformApplicationValidator.getThemeById().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getThemeById().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getThemeById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > getThemeById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetThemeForPreviewParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name getThemeForPreview
   * @summary: Get a theme preview
   * @description: A theme can be previewed before applying it. Use this API to retrieve the theme preview by using its ID.
   */
  async getThemeForPreview({ themeId } = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.getThemeForPreview().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getThemeForPreview().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getThemeForPreview \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/preview`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > getThemeForPreview \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetThemeLastModifiedParam} arg
   *   - Arg object
   *
   * @returns {Promise<any>} - Success response
   * @name getThemeLastModified
   * @summary: Fetch last modified timestamp
   * @description: Use this API to fetch Last-Modified timestamp in header metadata.
   */
  async getThemeLastModified({ themeId } = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.getThemeLastModified().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getThemeLastModified().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getThemeLastModified \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "head",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/polling`,
      query_params,
      undefined
    );

    const { error: res_error } = Joi.string()
      .allow("")
      .validate(response, { abortEarly: false, allowUnknown: false });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > getThemeLastModified \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetThemeLastModifiedV2Param} arg
   *   - Arg object
   *
   * @returns {Promise<any>} - Success response
   * @name getThemeLastModifiedV2
   * @summary: Fetch last modified timestamp
   * @description: Use this API to fetch Last-Modified timestamp in header metadata.
   */
  async getThemeLastModifiedV2({ themeId } = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.getThemeLastModifiedV2().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getThemeLastModifiedV2().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getThemeLastModifiedV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "head",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/polling`,
      query_params,
      undefined
    );

    const { error: res_error } = Joi.string()
      .allow("")
      .validate(response, { abortEarly: false, allowUnknown: false });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > getThemeLastModifiedV2 \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetThemeLibraryParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.ThemesListingResponseSchema>} -
   *   Success response
   * @name getThemeLibrary
   * @summary: Get a list of themes from the theme library
   * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to fetch a list of themes from the library along with their configuration details.
   */
  async getThemeLibrary({ pageSize, pageNo } = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.getThemeLibrary().validate(
      {
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getThemeLibrary().validate(
      {
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getThemeLibrary \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/library`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesListingResponseSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > getThemeLibrary \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetThemePreviewByIdV2Param} arg
   *   - Arg object
   *
   * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
   *   Success response
   * @name getThemePreviewByIdV2
   * @summary: Get Theme Preview By Theme Id
   * @description:
   */
  async getThemePreviewByIdV2({ themeId } = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.getThemePreviewByIdV2().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getThemePreviewByIdV2().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getThemePreviewByIdV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/preview`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.AllThemesApplicationResponseV2().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > getThemePreviewByIdV2 \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.IsUpgradableParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.UpgradableThemeSchema>} - Success response
   * @name isUpgradable
   * @summary: Checks if theme is upgradable
   * @description: There's always a possibility that new features get added to a theme. Use this API to check if the applied theme has an upgrade available.
   */
  async isUpgradable({ themeId } = {}) {
    const { error } = ThemePlatformApplicationValidator.isUpgradable().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.isUpgradable().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > isUpgradable \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/upgradable`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.UpgradableThemeSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > isUpgradable \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.PublishThemeParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name publishTheme
   * @summary: Publish a theme
   * @description: Use this API to publish a theme that is either newly created or edited.
   */
  async publishTheme({ themeId } = {}) {
    const { error } = ThemePlatformApplicationValidator.publishTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.publishTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > publishTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/publish`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > publishTheme \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.UnarchiveThemeParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name unarchiveTheme
   * @summary: Unarchive a theme
   * @description: Use this API to restore an archived theme and bring it back for editing or publishing.
   */
  async unarchiveTheme({ themeId } = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.unarchiveTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.unarchiveTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > unarchiveTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/unarchive`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > unarchiveTheme \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.UnpublishThemeParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name unpublishTheme
   * @summary: Unpublish a theme
   * @description: Use this API to remove an existing theme from the list of available themes.
   */
  async unpublishTheme({ themeId } = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.unpublishTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.unpublishTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > unpublishTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/unpublish`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > unpublishTheme \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.UpdateMultiplePagesParam} arg
   *   - Arg object
   *
   * @returns {Promise<ThemePlatformModel.AllAvailablePageSchema>} - Success response
   * @name updateMultiplePages
   * @summary: Update multiple pages of a theme
   * @description: Use this API to update multiple pages of a theme by its ID.
   */
  async updateMultiplePages({ themeId, body } = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.updateMultiplePages().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.updateMultiplePages().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > updateMultiplePages \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/page`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = ThemePlatformModel.AllAvailablePageSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > updateMultiplePages \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.UpdatePageParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
   * @name updatePage
   * @summary: Updates a page
   * @description: Use this API to update a page for a theme by its ID.
   */
  async updatePage({ themeId, pageValue, body } = {}) {
    const { error } = ThemePlatformApplicationValidator.updatePage().validate(
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

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.updatePage().validate(
      {
        themeId,
        pageValue,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > updatePage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/${pageValue}`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = ThemePlatformModel.AvailablePageSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > updatePage \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.UpdateThemeParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name updateTheme
   * @summary: Update a theme
   * @description: Use this API to edit an existing theme. You can customize the website font, sections, images, styles, and many more.
   */
  async updateTheme({ themeId, body } = {}) {
    const { error } = ThemePlatformApplicationValidator.updateTheme().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.updateTheme().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > updateTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > updateTheme \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.UpdateThemeNameV2Param} arg - Arg object
   * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
   *   Success response
   * @name updateThemeNameV2
   * @summary: Update Theme Name
   * @description: Update the name of a theme for a specific company and application.
   */
  async updateThemeNameV2({ themeId, body } = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.updateThemeNameV2().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.updateThemeNameV2().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > updateThemeNameV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/name`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = ThemePlatformModel.AllThemesApplicationResponseV2().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > updateThemeNameV2 \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.UpdateThemeV2Param} arg - Arg object
   * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
   *   Success response
   * @name updateThemeV2
   * @summary: Update theme for a specific company and application
   * @description:
   */
  async updateThemeV2({ themeId, body } = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.updateThemeV2().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.updateThemeV2().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > updateThemeV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = ThemePlatformModel.AllThemesApplicationResponseV2().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > updateThemeV2 \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.UpgradeApplicationV2Param} arg
   *   - Arg object
   *
   * @returns {Promise<ThemePlatformModel.AllThemesApplicationResponseV2>} -
   *   Success response
   * @name upgradeApplicationV2
   * @summary: Upgrade an application
   * @description: This endpoint allows you to upgrade an application.
   */
  async upgradeApplicationV2({ themeId } = {}) {
    const {
      error,
    } = ThemePlatformApplicationValidator.upgradeApplicationV2().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.upgradeApplicationV2().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > upgradeApplicationV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/upgrade`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.AllThemesApplicationResponseV2().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > upgradeApplicationV2 \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.UpgradeThemeParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name upgradeTheme
   * @summary: Upgrade a theme
   * @description: Use this API to upgrade the current theme to its latest version.
   */
  async upgradeTheme({ themeId } = {}) {
    const { error } = ThemePlatformApplicationValidator.upgradeTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.upgradeTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > upgradeTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/upgrade`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > upgradeTheme \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Theme;
