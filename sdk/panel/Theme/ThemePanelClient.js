const PanelAPIClient = require("../PanelAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const ThemeValidator = require("./ThemePanelValidator");
const ThemeModel = require("./ThemePanelModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Theme {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getMarketplaceThemeBySlug:
        "/service/panel/theme/v1.0/marketplace/theme/{slug_name}",
      getMarketplaceThemeVersions:
        "/service/panel/theme/v1.0/marketplace/theme/{slug_name}/versions",
      getMarketplaceThemes: "/service/panel/theme/v1.0/marketplace/themes",
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
   * @param {string} arg.slugName - Slug of marketplace theme
   * @returns {Promise<ThemeSlugResponse>} - Success response
   * @summary: Get marketplace theme by slug
   * @description: Fetches the theme details by slug
   */
  async getMarketplaceThemeBySlug({ slugName } = {}) {
    const { error } = ThemeValidator.getMarketplaceThemeBySlug().validate(
      { slugName },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemeValidator.getMarketplaceThemeBySlug().validate(
      { slugName },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getMarketplaceThemeBySlug",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PanelAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getMarketplaceThemeBySlug"],
        params: { slugName },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ThemeModel.ThemeSlugResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getMarketplaceThemeBySlug",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slugName - Slug of theme
   * @returns {Promise<ThemeAndUserDetailsResponse>} - Success response
   * @summary: Get theme and user details
   * @description: This API use to get list of theme published theme versions
   */
  async getMarketplaceThemeVersions({ slugName } = {}) {
    const { error } = ThemeValidator.getMarketplaceThemeVersions().validate(
      { slugName },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemeValidator.getMarketplaceThemeVersions().validate(
      { slugName },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for getMarketplaceThemeVersions",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PanelAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getMarketplaceThemeVersions"],
        params: { slugName },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ThemeModel.ThemeAndUserDetailsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for getMarketplaceThemeVersions",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Number of themes per page
   * @param {number} [arg.pageNo] - Page number to retrieve
   * @returns {Promise<MarketplaceThemeResponseBody>} - Success response
   * @summary: Get marketplace themes
   * @description: This API use to get list of pulished marketplace themes
   */
  async getMarketplaceThemes({ pageSize, pageNo } = {}) {
    const { error } = ThemeValidator.getMarketplaceThemes().validate(
      { pageSize, pageNo },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ThemeValidator.getMarketplaceThemes().validate(
      { pageSize, pageNo },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getMarketplaceThemes",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;

    const xHeaders = {};

    const response = await PanelAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getMarketplaceThemes"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ThemeModel.MarketplaceThemeResponseBody().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getMarketplaceThemes",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Theme;
