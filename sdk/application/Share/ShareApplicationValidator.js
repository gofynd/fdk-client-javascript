const Joi = require("joi");

const ShareApplicationModel = require("./ShareApplicationModel");

/**
 * @typedef CreateShortLinkParam
 * @property {ShareApplicationModel.ShortLinkReq} body
 */

/** @typedef GetApplicationQRCodeParam */

/**
 * @typedef GetCollectionQRCodeBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a collection. You can get slug value from the endpoint.
 */

/**
 * @typedef GetOriginalShortLinkByHashParam
 * @property {string} hash - A string value used for converting long URL to
 *   short URL and vice-versa.
 */

/**
 * @typedef GetProductQRCodeBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a product. You can get slug value from the endpoint.
 */

/**
 * @typedef GetShortLinkByHashParam
 * @property {string} hash - A string value used for converting long URL to
 *   short URL and vice-versa.
 */

/**
 * @typedef GetUrlQRCodeParam
 * @property {string} url - A link or a web address
 */

class ShareApplicationValidator {
  /** @returns {createShortLink} */
  static createShortLink() {
    return Joi.object({
      body: ShareApplicationModel.ShortLinkReq().required(),
    }).required();
  }

  /** @returns {getApplicationQRCode} */
  static getApplicationQRCode() {
    return Joi.object({});
  }

  /** @returns {getCollectionQRCodeBySlug} */
  static getCollectionQRCodeBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getOriginalShortLinkByHash} */
  static getOriginalShortLinkByHash() {
    return Joi.object({
      hash: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getProductQRCodeBySlug} */
  static getProductQRCodeBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getShortLinkByHash} */
  static getShortLinkByHash() {
    return Joi.object({
      hash: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getUrlQRCode} */
  static getUrlQRCode() {
    return Joi.object({
      url: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = ShareApplicationValidator;
