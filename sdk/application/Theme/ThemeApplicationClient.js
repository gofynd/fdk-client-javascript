const ApplicationAPIClient = require("../ApplicationAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const ThemeApplicationValidator = require("./ThemeApplicationValidator");
const ThemeApplicationModel = require("./ThemeApplicationModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Theme {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getAllPages: "/service/application/theme/v1.0/{theme_id}/page",
      getAppliedTheme: "/service/application/theme/v1.0/applied-theme",
      getAppliedThemeV2: "/service/application/theme/v2.0/applied-theme",
      getPage: "/service/application/theme/v1.0/{theme_id}/{page_value}",
      getThemeForPreview: "/service/application/theme/v1.0/{theme_id}/preview",
      getThemeForPreviewV2:
        "/service/application/theme/v2.0/{theme_id}/preview",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {ThemeApplicationValidator.getAllPages} arg - Arg object.
   * @returns {Promise<ThemeApplicationModel.AllAvailablePageSchema>} - Success response
   * @name getAllPages
   * @summary: Get all pages of a theme
   * @description: Use this API to retrieve all the available pages of a theme by its ID.
   */
  async getAllPages({ themeId } = {}) {
    const { error } = ThemeApplicationValidator.getAllPages().validate(
      { themeId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemeApplicationValidator.getAllPages().validate(
      { themeId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Theme > getAllPages \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAllPages"],
        params: { themeId },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ThemeApplicationModel.AllAvailablePageSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > Theme > getAllPages \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemeApplicationValidator.getAppliedTheme} arg - Arg object.
   * @returns {Promise<ThemeApplicationModel.ThemesSchema>} - Success response
   * @name getAppliedTheme
   * @summary: Get the theme currently applied to an application
   * @description: An application has multiple themes, but only one theme can be applied at a time. Use this API to retrieve the theme currently applied to the application.
   */
  async getAppliedTheme({} = {}) {
    const { error } = ThemeApplicationValidator.getAppliedTheme().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemeApplicationValidator.getAppliedTheme().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Theme > getAppliedTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAppliedTheme"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ThemeApplicationModel.ThemesSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > Theme > getAppliedTheme \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemeApplicationValidator.getAppliedThemeV2} arg - Arg object.
   * @returns {Promise<ThemeApplicationModel.ThemesSchema>} - Success response
   * @name getAppliedThemeV2
   * @summary: Get the theme currently applied to an application
   * @description: An application has multiple themes, but only one theme can be applied at a time. Use this API to retrieve the theme currently applied to the application.
   */
  async getAppliedThemeV2({} = {}) {
    const { error } = ThemeApplicationValidator.getAppliedThemeV2().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemeApplicationValidator.getAppliedThemeV2().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Theme > getAppliedThemeV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAppliedThemeV2"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ThemeApplicationModel.ThemesSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > Theme > getAppliedThemeV2 \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemeApplicationValidator.getPage} arg - Arg object.
   * @returns {Promise<ThemeApplicationModel.AvailablePageSchema>} - Success response
   * @name getPage
   * @summary: Get page of a theme
   * @description: Use this API to retrieve a page of a theme.
   */
  async getPage({ themeId, pageValue } = {}) {
    const { error } = ThemeApplicationValidator.getPage().validate(
      { themeId, pageValue },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ThemeApplicationValidator.getPage().validate(
      { themeId, pageValue },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Theme > getPage \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPage"],
        params: { themeId, pageValue },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ThemeApplicationModel.AvailablePageSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > Theme > getPage \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemeApplicationValidator.getThemeForPreview} arg - Arg object.
   * @returns {Promise<ThemeApplicationModel.ThemesSchema>} - Success response
   * @name getThemeForPreview
   * @summary: Get a theme for a preview
   * @description: A theme can be previewed before applying it. Use this API to retrieve the preview of a theme by its ID.
   */
  async getThemeForPreview({ themeId } = {}) {
    const { error } = ThemeApplicationValidator.getThemeForPreview().validate(
      { themeId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemeApplicationValidator.getThemeForPreview().validate(
      { themeId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Theme > getThemeForPreview \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getThemeForPreview"],
        params: { themeId },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ThemeApplicationModel.ThemesSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > Theme > getThemeForPreview \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemeApplicationValidator.getThemeForPreviewV2} arg - Arg object.
   * @returns {Promise<ThemeApplicationModel.ThemesSchema>} - Success response
   * @name getThemeForPreviewV2
   * @summary: Get a theme for a preview
   * @description: A theme can be previewed before applying it. Use this API to retrieve the preview of a theme by its ID.
   */
  async getThemeForPreviewV2({ themeId } = {}) {
    const { error } = ThemeApplicationValidator.getThemeForPreviewV2().validate(
      { themeId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemeApplicationValidator.getThemeForPreviewV2().validate(
      { themeId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Theme > getThemeForPreviewV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getThemeForPreviewV2"],
        params: { themeId },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ThemeApplicationModel.ThemesSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > Theme > getThemeForPreviewV2 \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Theme;
