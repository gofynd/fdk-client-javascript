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
   * @returns {Promise<ThemeApplicationModel.AllAvailablePageSchema>} - Success response
   * @name getAllPages
   * @summary: Get all pages of a theme
   * @description: Use this API to retrieve all the available pages of a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getAllPages/).
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
   * @param {ThemeApplicationValidator.GetAppliedThemeParam} arg - Arg object.
   * @returns {Promise<ThemeApplicationModel.ThemesSchema>} - Success response
   * @name getAppliedTheme
   * @summary: Get the theme currently applied to an application
   * @description: An application has multiple themes, but only one theme can be applied at a time. Use this API to retrieve the theme currently applied to the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getAppliedTheme/).
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
   * @param {ThemeApplicationValidator.GetPageParam} arg - Arg object.
   * @returns {Promise<ThemeApplicationModel.AvailablePageSchema>} - Success response
   * @name getPage
   * @summary: Get page of a theme
   * @description: Use this API to retrieve a page of a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getPage/).
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
   * @param {ThemeApplicationValidator.GetThemeForPreviewParam} arg - Arg object.
   * @returns {Promise<ThemeApplicationModel.ThemesSchema>} - Success response
   * @name getThemeForPreview
   * @summary: Get a theme for a preview
   * @description: A theme can be previewed before applying it. Use this API to retrieve the preview of a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getThemeForPreview/).
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
}

module.exports = Theme;
