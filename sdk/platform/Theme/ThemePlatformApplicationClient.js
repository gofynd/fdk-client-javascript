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
  async addThemeToApplication(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ThemePlatformApplicationValidator.addThemeToApplication().validate(
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
    } = ThemePlatformApplicationValidator.addThemeToApplication().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > addThemeToApplication \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > addThemeToApplication \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.AddToThemeLibraryParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
   * @name addToThemeLibrary
   * @summary: Add a theme to the theme library
   * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to choose a theme and add it to the theme library. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/addToThemeLibrary/).
   */
  async addToThemeLibrary(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.DummyResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > addToThemeLibrary \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.ApplyThemeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name applyTheme
   * @summary: Apply theme to a specific application
   * @description: Apply theme to a specific application by providing company_id, application_id, and theme_id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/applyTheme/).
   */
  async applyTheme(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePlatformApplicationValidator.applyTheme().validate(
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
    } = ThemePlatformApplicationValidator.applyTheme().validate(
      {
        themeId,
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
      "patch",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/apply`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > applyTheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.ArchiveThemeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
   * @name archiveTheme
   * @summary: Archive a theme
   * @description: Use this API to store an existing theme but not delete it so that it can be used in future if required.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/archiveTheme/).
   */
  async archiveTheme(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.DummyResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > archiveTheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.CreatePageParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
   * @name createPage
   * @summary: Create a page
   * @description: Use this API to create a page for a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/createPage/).
   */
  async createPage(
    { themeId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.AvailablePageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > createPage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.DeletePageParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
   * @name deletePage
   * @summary: Deletes a page
   * @description: Use this API to delete a page for a theme by its ID and page_value. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/deletePage/).
   */
  async deletePage(
    { themeId, pageValue, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.AvailablePageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > deletePage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.DeleteThemeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name deleteTheme
   * @summary: Delete a theme
   * @description: This endpoint is used to delete a theme from the specified company and application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/deleteTheme/).
   */
  async deleteTheme(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > deleteTheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.DuplicateThemeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name duplicateTheme
   * @summary: Duplicate a Theme
   * @description: This endpoint duplicates a Theme in the specified application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/duplicateTheme/).
   */
  async duplicateTheme(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ThemePlatformApplicationValidator.duplicateTheme().validate(
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
    } = ThemePlatformApplicationValidator.duplicateTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > duplicateTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/duplicate`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > duplicateTheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetAllPagesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.AllAvailablePageSchema>} - Success response
   * @name getAllPages
   * @summary: Get all pages of a theme
   * @description: Use this API to retrieve all the available pages of a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getAllPages/).
   */
  async getAllPages(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.AllAvailablePageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > getAllPages \n ${res_error}`,
        });
      }
    }

    return response;
  }

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
  async getApplicationThemes(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ThemePlatformApplicationValidator.getApplicationThemes().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getApplicationThemes().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getApplicationThemes \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/themes`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.array()
      .items(ThemePlatformModel.ThemesSchema())
      .validate(responseData, { abortEarly: false, allowUnknown: false });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > getApplicationThemes \n ${res_error}`,
        });
      }
    }

    return response;
  }

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
  async getApplicationThemesCount(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ThemePlatformApplicationValidator.getApplicationThemesCount().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getApplicationThemesCount().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getApplicationThemesCount \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/application_themes_count`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > getApplicationThemesCount \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetAppliedThemeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name getAppliedTheme
   * @summary: Get the Applied theme of an Application
   * @description: Get Applied Theme of an Application by Application Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getAppliedTheme/).
   */
  async getAppliedTheme(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > getAppliedTheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetFontsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.FontsSchema>} - Success response
   * @name getFonts
   * @summary: Get all the supported fonts in a theme
   * @description: Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getFonts/).
   */
  async getFonts(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.FontsSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > getFonts \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetPageParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
   * @name getPage
   * @summary: Get page of a theme
   * @description: Use this API to retrieve a page of a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getPage/).
   */
  async getPage(
    { themeId, pageValue, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.AvailablePageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > getPage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetPublicThemesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
   * @name getPublicThemes
   * @summary: Get all public themes
   * @description: Use this API to get a list of free themes that you can apply to your website. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getPublicThemes/).
   */
  async getPublicThemes(
    { pageSize, pageNo, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.DummyResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > getPublicThemes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetThemeByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name getThemeById
   * @summary: Get Theme By Theme Id
   * @description: Get Theme By Theme Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeById/).
   */
  async getThemeById(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > getThemeById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetThemeForPreviewParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name getThemeForPreview
   * @summary: Get Theme Preview By Theme Id
   * @description: Get Theme Preview By Theme Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeForPreview/).
   */
  async getThemeForPreview(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/preview`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > getThemeForPreview \n ${res_error}`,
        });
      }
    }

    return response;
  }

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
  async getThemeLastModified(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/polling`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.string()
      .allow("")
      .validate(responseData, { abortEarly: false, allowUnknown: false });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > getThemeLastModified \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.GetThemeLibraryParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
   * @name getThemeLibrary
   * @summary: Get a list of themes from the theme library
   * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to fetch a list of themes from the library along with their configuration details.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeLibrary/).
   */
  async getThemeLibrary(
    { pageSize, pageNo, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.DummyResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > getThemeLibrary \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.IsUpgradableParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.ThemeUpgradableResponse>} - Success response
   * @name isUpgradable
   * @summary: Check if the theme is upgradable
   * @description: This API endpoint checks if the theme is upgradable for a specific company and application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/isUpgradable/).
   */
  async isUpgradable(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/upgradable`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.ThemeUpgradableResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > isUpgradable \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.PublishThemeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
   * @name publishTheme
   * @summary: Publish a theme
   * @description: Use this API to publish a theme that is either newly created or edited. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/publishTheme/).
   */
  async publishTheme(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.DummyResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > publishTheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.UnarchiveThemeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
   * @name unarchiveTheme
   * @summary: Unarchive a theme
   * @description: Use this API to restore an archived theme and bring it back for editing or publishing.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/unarchiveTheme/).
   */
  async unarchiveTheme(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.DummyResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > unarchiveTheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.UnpublishThemeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.DummyResponse>} - Success response
   * @name unpublishTheme
   * @summary: Unpublish a theme
   * @description: Use this API to remove an existing theme from the list of available themes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/unpublishTheme/).
   */
  async unpublishTheme(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.DummyResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > unpublishTheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

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
  async updateMultiplePages(
    { themeId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.AllAvailablePageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > updateMultiplePages \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.UpdatePageParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
   * @name updatePage
   * @summary: Updates a page
   * @description: Use this API to update a page for a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updatePage/).
   */
  async updatePage(
    { themeId, pageValue, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.AvailablePageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > updatePage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.UpdateThemeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name updateTheme
   * @summary: Update theme for a specific company and application
   * @description: Update theme for a specific company and application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updateTheme/).
   */
  async updateTheme(
    { themeId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > updateTheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.UpdateThemeNameParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name updateThemeName
   * @summary: Update Theme Name
   * @description: Update the name of a theme for a specific company and application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updateThemeName/).
   */
  async updateThemeName(
    { themeId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ThemePlatformApplicationValidator.updateThemeName().validate(
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
    } = ThemePlatformApplicationValidator.updateThemeName().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > updateThemeName \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/name`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > updateThemeName \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformApplicationValidator.UpgradeThemeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name upgradeTheme
   * @summary: Upgrade an application
   * @description: This endpoint allows you to upgrade an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/upgradeTheme/).
   */
  async upgradeTheme(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/upgrade`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.ThemesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > upgradeTheme \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Theme;
