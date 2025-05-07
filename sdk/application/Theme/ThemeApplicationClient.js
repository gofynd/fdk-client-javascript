const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");

const ApplicationAPIClient = require("../ApplicationAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const { validateRequiredParams } = require("../../common/Validator");

class Theme {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getAllPages: "/service/application/theme/v1.0/{theme_id}/page",
      getAppliedTheme: "/service/application/theme/v2.0/applied-theme",
      getAppliedThemeV1: "/service/application/theme/v1.0/applied-theme",
      getPage: "/service/application/theme/v1.0/{theme_id}/{page_value}",
      getThemeForPreview: "/service/application/theme/v2.0/{theme_id}/preview",
      getThemeForPreviewV1:
        "/service/application/theme/v1.0/{theme_id}/preview",
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
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<AllAvailablePageSchema>} - Success response
   * @name getAllPages
   * @summary: Fetch all pages.
   * @description: Get all page level configs, sections and seo data of a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getAllPages/).
   */
  async getAllPages(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["themeId"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ThemesSchema>} - Success response
   * @name getAppliedTheme
   * @summary: Get applied theme
   * @description: Gets the theme configuration and template details of a theme applied to the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getAppliedTheme/).
   */
  async getAppliedTheme(
    { filters, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};
    query_params["filters"] = filters;

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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ThemesSchema>} - Success response
   * @name getAppliedThemeV1
   * @summary: Current theme.
   * @description: Gets the theme currently applied to the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getAppliedThemeV1/).
   */
  async getAppliedThemeV1(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAppliedThemeV1"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<AvailablePageSchema>} - Success response
   * @name getPage
   * @summary: Get theme page
   * @description: Get page level configurations, applied sections and seo data of a page by `page_value` received from list pages api. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getPage/).
   */
  async getPage(
    {
      themeId,
      pageValue,
      filters,
      sectionPreviewHash,
      company,
      previewId,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], [
      "themeId",
      "pageValue",
    ]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["filters"] = filters;
    query_params["section_preview_hash"] = sectionPreviewHash;
    query_params["company"] = company;
    query_params["preview_id"] = previewId;

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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ThemesSchema>} - Success response
   * @name getThemeForPreview
   * @summary: Get theme for preview
   * @description: Gets the theme configuration and template details of a theme by theme id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getThemeForPreview/).
   */
  async getThemeForPreview(
    { themeId, filters, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["themeId"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["filters"] = filters;

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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ThemesSchema>} - Success response
   * @name getThemeForPreviewV1
   * @summary: Preview theme.
   * @description: Retrieves a theme for previewing before applying it to the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/theme/getThemeForPreviewV1/).
   */
  async getThemeForPreviewV1(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["themeId"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getThemeForPreviewV1"],
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

    return response;
  }
}

module.exports = Theme;
