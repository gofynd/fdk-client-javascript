const ApplicationAPIClient = require("../ApplicationAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const ThemeValidator = require("./ThemeApplicationValidator");
const ThemeModel = require("./ThemeApplicationModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Theme {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getAllPages: "/service/application/theme/v1.0/{theme_id}/page",
      getAppliedTheme: "/service/application/theme/v1.0/applied-theme",
      getPage: "/service/application/theme/v1.0/{theme_id}/{page_value}",
      getThemeForPreview: "/service/application/theme/v1.0/{theme_id}/preview",
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID of the theme to be retrieved
   * @returns {Promise<AllAvailablePageSchema>} - Success response
   * @summary: Get all pages of a theme
   * @description: Use this API to retrieve all the available pages of a theme by its ID.
   */
  async getAllPages({ themeId } = {}) {
    const { error } = ThemeValidator.getAllPages().validate(
      { themeId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ThemeValidator.getAllPages().validate(
      { themeId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAllPages",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = ThemeModel.AllAvailablePageSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAllPages",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<ThemesSchema>} - Success response
   * @summary: Get the theme currently applied to an application
   * @description: An application has multiple themes, but only one theme can be applied at a time. Use this API to retrieve the theme currently applied to the application.
   */
  async getAppliedTheme({} = {}) {
    const { error } = ThemeValidator.getAppliedTheme().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ThemeValidator.getAppliedTheme().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAppliedTheme",
      });
      Logger({ level: "WARN", message: warrning });
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

    const { error: res_error } = ThemeModel.ThemesSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAppliedTheme",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID of the theme to be retrieved
   * @param {string} arg.pageValue - Value of the page to be retrieved
   * @returns {Promise<AvailablePageSchema>} - Success response
   * @summary: Get page of a theme
   * @description: Use this API to retrieve a page of a theme.
   */
  async getPage({ themeId, pageValue } = {}) {
    const { error } = ThemeValidator.getPage().validate(
      { themeId, pageValue },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ThemeValidator.getPage().validate(
      { themeId, pageValue },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getPage",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = ThemeModel.AvailablePageSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getPage",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID of the theme to be retrieved
   * @returns {Promise<ThemesSchema>} - Success response
   * @summary: Get a theme for a preview
   * @description: A theme can be previewed before applying it. Use this API to retrieve the preview of a theme by its ID.
   */
  async getThemeForPreview({ themeId } = {}) {
    const { error } = ThemeValidator.getThemeForPreview().validate(
      { themeId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ThemeValidator.getThemeForPreview().validate(
      { themeId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getThemeForPreview",
      });
      Logger({ level: "WARN", message: warrning });
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

    const { error: res_error } = ThemeModel.ThemesSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getThemeForPreview",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Theme;
