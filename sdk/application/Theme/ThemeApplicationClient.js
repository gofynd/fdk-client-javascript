const ApplicationAPIClient = require("../ApplicationAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
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
      getAppliedTheme: "/service/application/theme/v2.0/applied-theme",
      getPage: "/service/application/theme/v1.0/{theme_id}/{page_value}",
      getThemeForPreview: "/service/application/theme/v2.0/{theme_id}/preview",
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
   * @param {ThemeApplicationValidator.GetAllPagesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ThemeApplicationModel.AllAvailablePageSchema>} - Success response
   * @name getAllPages
   * @summary: List pages
   * @description: Get all page level configs, sections and SEO data of a theme - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getAllPages/).
   */
  async getAllPages(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemeApplicationModel.AllAvailablePageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Theme > getAllPages \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemeApplicationValidator.GetAppliedThemeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ThemeApplicationModel.ThemesSchema>} - Success response
   * @name getAppliedTheme
   * @summary: Get applied theme
   * @description: Gets the theme configuration and template details of a theme applied to the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getAppliedTheme/).
   */
  async getAppliedTheme(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemeApplicationModel.ThemesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Theme > getAppliedTheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemeApplicationValidator.GetPageParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ThemeApplicationModel.AvailablePageSchema>} - Success response
   * @name getPage
   * @summary: Get theme page
   * @description: Get page level configurations, applied sections and SEO data of a page by `page_value` received from list pages API - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getPage/).
   */
  async getPage(
    { themeId, pageValue, filters, company, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemeApplicationValidator.getPage().validate(
      { themeId, pageValue, filters, company },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ThemeApplicationValidator.getPage().validate(
      { themeId, pageValue, filters, company },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Theme > getPage \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["filters"] = filters;
    query_params["company"] = company;

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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemeApplicationModel.AvailablePageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Theme > getPage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemeApplicationValidator.GetThemeForPreviewParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ThemeApplicationModel.ThemesSchema>} - Success response
   * @name getThemeForPreview
   * @summary: Get theme for preview
   * @description: Gets the theme configuration and template details of a theme by theme Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getThemeForPreview/).
   */
  async getThemeForPreview(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemeApplicationModel.ThemesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Theme > getThemeForPreview \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Theme;
