const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
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
   * @summary: Create theme in sales channel
   * @description: Include a theme in an application drafts from theme collection. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/addThemeToApplication/).
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
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}`,
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
      allowUnknown: true,
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
   * @param {ThemePlatformApplicationValidator.ApplyThemeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name applyTheme
   * @summary: Apply a theme
   * @description: Change current applied theme with new draft theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/applyTheme/).
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
      allowUnknown: true,
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
   * @param {ThemePlatformApplicationValidator.CreatePageParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.AvailablePageSchema>} - Success response
   * @name createPage
   * @summary: Create theme page
   * @description: Generate and add a new page to the selected theme of the Platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/createPage/).
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
      allowUnknown: true,
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
   * @summary: Delete a page
   * @description: Remove a page from a theme of the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/deletePage/).
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
      allowUnknown: true,
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
   * @summary: Delete theme
   * @description: Remove a theme from theme drafts of a sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/deleteTheme/).
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
      allowUnknown: true,
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
   * @summary: Duplicate a theme
   * @description: Create a new copy of an existing theme by theme Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/duplicateTheme/).
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
      allowUnknown: true,
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
   * @summary: List pages of a theme
   * @description: Retrieve a list of all available pages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getAllPages/).
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
      allowUnknown: true,
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
   * @summary: List sales channel themes
   * @description: Retrieve all draft themes added to sales channel from theme collection. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getApplicationThemes/).
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
      .validate(responseData, { abortEarly: false, allowUnknown: true });

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
   * @summary: Get sales channel themes count
   * @description: Retrieve count of all draft themes added to sales channel from theme collection. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getApplicationThemesCount/).
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
      allowUnknown: true,
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
   * @summary: Get applied theme
   * @description: Retrieve the currently applied theme of a sales channel using application Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getAppliedTheme/).
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
      allowUnknown: true,
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
  async getExtensionSections(
    { type, companyMode, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ThemePlatformApplicationValidator.getExtensionSections().validate(
      {
        type,
        companyMode,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getExtensionSections().validate(
      {
        type,
        companyMode,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getExtensionSections \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["type"] = type;
    query_params["company_mode"] = companyMode;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/extension-section`,
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
      .items(ThemePlatformModel.GetExtensionSectionRes())
      .validate(responseData, { abortEarly: false, allowUnknown: true });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > getExtensionSections \n ${res_error}`,
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
   * @summary: List theme fonts
   * @description: Retrieve a list of available fonts that can be used by themes in the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getFonts/).
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
      allowUnknown: true,
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
   * @param {ThemePlatformApplicationValidator.GetFontsV2Param} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.FontsSchema>} - Success response
   * @name getFontsV2
   * @summary: List theme fonts
   * @description: Retrieve a list of available fonts that can be used by themes in the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getFontsV2/).
   */
  async getFontsV2(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > getFontsV2 \n ${res_error}`,
        });
      }
    }

    return response;
  }

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
  async getLatestVersionOfThemeBySlug(
    { slugName, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ThemePlatformApplicationValidator.getLatestVersionOfThemeBySlug().validate(
      {
        slugName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformApplicationValidator.getLatestVersionOfThemeBySlug().validate(
      {
        slugName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getLatestVersionOfThemeBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/application/${this.applicationId}/slug/${slugName}/latest`,
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
      .items(ThemePlatformModel.MarketplaceTheme())
      .validate(responseData, { abortEarly: false, allowUnknown: true });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > getLatestVersionOfThemeBySlug \n ${res_error}`,
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
   * @summary: Get a page
   * @description: Retrieve detailed information about a specific page of a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getPage/).
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
      allowUnknown: true,
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
   * @param {ThemePlatformApplicationValidator.GetThemeByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.ThemesSchema>} - Success response
   * @name getThemeById
   * @summary: Get theme
   * @description: Retrieve a theme by its unique identifier. Response contains theme template data and data stored in theme editor. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeById/).
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
      allowUnknown: true,
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
   * @summary: Get theme for preview
   * @description: Retrieve a theme by its unique identifier. Response contains theme template data and data stored in theme editor. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeForPreview/).
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
      allowUnknown: true,
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
   * @summary: Get theme last modified date
   * @description: Retrieve the last modification of a theme used for polling and identifing cross user changes in a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getThemeLastModified/).
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
      .validate(responseData, { abortEarly: false, allowUnknown: true });

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
   * @param {ThemePlatformApplicationValidator.IsUpgradableParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.ThemeUpgradableResponse>} - Success response
   * @name isUpgradable
   * @summary: Check theme is upgradable
   * @description: Determine if a public theme is eligible for an upgrade to a new version after any new version released in marketplace. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/isUpgradable/).
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
      allowUnknown: true,
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
      allowUnknown: true,
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
   * @summary: Update a page
   * @description: Modify and update the content of a page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updatePage/).
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
      allowUnknown: true,
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
   * @summary: Update theme
   * @description: Modify and update the content and settings of a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updateTheme/).
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
      allowUnknown: true,
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
   * @summary: Update theme name
   * @description: Modify the name of the draft theme by theme Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/updateThemeName/).
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
      allowUnknown: true,
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
   * @summary: Upgrade theme
   * @description: Update a draft theme to a new version of the marketplace. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/upgradeTheme/).
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
      allowUnknown: true,
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
