const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");

const ApplicationAPIClient = require("../ApplicationAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const { validateRequiredParams } = require("../../common/Validator");

class Share {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      createShortLink: "/service/application/share/v1.0/links/short-link/",
      getApplicationQRCode: "/service/application/share/v1.0/qr/",
      getCollectionQRCodeBySlug:
        "/service/application/share/v1.0/qr/collection/{slug}/",
      getOriginalShortLinkByHash:
        "/service/application/share/v1.0/links/short-link/{hash}/original/",
      getProductQRCodeBySlug:
        "/service/application/share/v1.0/qr/products/{slug}/",
      getShortLinkByHash:
        "/service/application/share/v1.0/links/short-link/{hash}/",
      getUrlQRCode: "/service/application/share/v1.0/qr/url/",
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
   * @returns {Promise<ShortLinkRes>} - Success response
   * @name createShortLink
   * @summary: Shorten URL
   * @description: Creates a shortened version of a given URL for easier sharing. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/share/createShortLink/).
   */
  async createShortLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createShortLink"],
        params: {},
      }),
      query_params,
      body,
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
   * @returns {Promise<QRCodeResp>} - Success response
   * @name getApplicationQRCode
   * @summary: App QR code
   * @description: Generates a QR code for the application for easy sharing. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/share/getApplicationQRCode/).
   */
  async getApplicationQRCode(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getApplicationQRCode"],
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
   * @returns {Promise<QRCodeResp>} - Success response
   * @name getCollectionQRCodeBySlug
   * @summary: Collection QR code
   * @description: Generates a QR code for a specific product collection using its slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/share/getCollectionQRCodeBySlug/).
   */
  async getCollectionQRCodeBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["slug"]);
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
      "post",
      constructUrl({
        url: this._urls["getCollectionQRCodeBySlug"],
        params: { slug },
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
   * @returns {Promise<ShortLinkRes>} - Success response
   * @name getOriginalShortLinkByHash
   * @summary: Original URL
   * @description: Retrieve the original link from a short-link by using a hash value. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/share/getOriginalShortLinkByHash/).
   */
  async getOriginalShortLinkByHash(
    { hash, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["hash"]);
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
        url: this._urls["getOriginalShortLinkByHash"],
        params: { hash },
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
   * @returns {Promise<QRCodeResp>} - Success response
   * @name getProductQRCodeBySlug
   * @summary: Product QR code
   * @description: Creates a QR code for a specific product identified by its slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/share/getProductQRCodeBySlug/).
   */
  async getProductQRCodeBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["slug"]);
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
      "post",
      constructUrl({
        url: this._urls["getProductQRCodeBySlug"],
        params: { slug },
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
   * @returns {Promise<ShortLinkRes>} - Success response
   * @name getShortLinkByHash
   * @summary: Get short link
   * @description: Retrieves a previously created short link using its hash identifier. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/share/getShortLinkByHash/).
   */
  async getShortLinkByHash(
    { hash, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["hash"]);
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
        url: this._urls["getShortLinkByHash"],
        params: { hash },
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
   * @returns {Promise<QRCodeResp>} - Success response
   * @name getUrlQRCode
   * @summary: URL to QR code
   * @description: Converts a given URL into a scannable QR code. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/share/getUrlQRCode/).
   */
  async getUrlQRCode(
    { url, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};
    query_params["url"] = url;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getUrlQRCode"],
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
}

module.exports = Share;
