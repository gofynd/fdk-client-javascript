const APIClient = require("../ApplicationAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const { FDKClientValidationError } = require("../../common/FDKError");
const ShareValidator = require("./ShareApplicationValidator");

class Share {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getApplicationQRCode: "/service/application/share/v1.0/qr/",
      getProductQRCodeBySlug:
        "/service/application/share/v1.0/qr/products/{slug}/",
      getCollectionQRCodeBySlug:
        "/service/application/share/v1.0/qr/collection/{slug}/",
      getUrlQRCode: "/service/application/share/v1.0/qr/url/",
      createShortLink: "/service/application/share/v1.0/links/short-link/",
      getShortLinkByHash:
        "/service/application/share/v1.0/links/short-link/{hash}/",
      getOriginalShortLinkByHash:
        "/service/application/share/v1.0/links/short-link/{hash}/original/",
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
   * @returns {Promise<QRCodeResp>} - Success response
   * @summary: Create QR Code of an app
   * @description: Use this API to create a QR code of an app for sharing it with users who want to use the app.
   */
  getApplicationQRCode({} = {}) {
    const { error } = ShareValidator.getApplicationQRCode().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ShareValidator.getApplicationQRCode().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getApplicationQRCode");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getApplicationQRCode"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint.
   * @returns {Promise<QRCodeResp>} - Success response
   * @summary: Create QR Code of a product
   * @description: Use this API to create a QR code of a product for sharing it with users who want to view/purchase the product.
   */
  getProductQRCodeBySlug({ slug } = {}) {
    const { error } = ShareValidator.getProductQRCodeBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ShareValidator.getProductQRCodeBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getProductQRCodeBySlug");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getProductQRCodeBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a collection. You can get slug value from the endpoint.
   * @returns {Promise<QRCodeResp>} - Success response
   * @summary: Create QR Code of a collection
   * @description: Use this API to create a QR code of a collection of products for sharing it with users who want to view/purchase the collection.
   */
  getCollectionQRCodeBySlug({ slug } = {}) {
    const { error } = ShareValidator.getCollectionQRCodeBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ShareValidator.getCollectionQRCodeBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for getCollectionQRCodeBySlug"
      );
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getCollectionQRCodeBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.url - A link or a web address
   * @returns {Promise<QRCodeResp>} - Success response
   * @summary: Create QR Code of a URL
   * @description: Use this API to create a QR code of a URL for sharing it with users who want to visit the link.
   */
  getUrlQRCode({ url } = {}) {
    const { error } = ShareValidator.getUrlQRCode().validate(
      { url },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ShareValidator.getUrlQRCode().validate(
      { url },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getUrlQRCode");
      console.log(warrning);
    }

    const query_params = {};
    query_params["url"] = url;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getUrlQRCode"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ShortLinkReq} arg.body
   * @returns {Promise<ShortLinkRes>} - Success response
   * @summary: Create a short link
   * @description: Use this API to create a short link that is easy to write/share/read as compared to long URLs.
   */
  createShortLink({ body } = {}) {
    const { error } = ShareValidator.createShortLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ShareValidator.createShortLink().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for createShortLink");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createShortLink"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.hash - A string value used for converting long URL to
   *   short URL and vice-versa.
   * @returns {Promise<ShortLinkRes>} - Success response
   * @summary: Get short link by hash
   * @description: Use this API to get a short link by using a hash value.
   */
  getShortLinkByHash({ hash } = {}) {
    const { error } = ShareValidator.getShortLinkByHash().validate(
      { hash },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ShareValidator.getShortLinkByHash().validate(
      { hash },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getShortLinkByHash");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getShortLinkByHash"],
        params: { hash },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.hash - A string value used for converting long URL to
   *   short URL and vice-versa.
   * @returns {Promise<ShortLinkRes>} - Success response
   * @summary: Get original link by hash
   * @description: Use this API to retrieve the original link from a short-link by using a hash value.
   */
  getOriginalShortLinkByHash({ hash } = {}) {
    const { error } = ShareValidator.getOriginalShortLinkByHash().validate(
      { hash },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ShareValidator.getOriginalShortLinkByHash().validate(
      { hash },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for getOriginalShortLinkByHash"
      );
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOriginalShortLinkByHash"],
        params: { hash },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }
}

module.exports = Share;