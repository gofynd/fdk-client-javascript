const Joi = require("joi");

const SharePlatformModel = require("./SharePlatformModel");

/**
 * @typedef CreateShortLinkParam
 * @property {SharePlatformModel.ShortLinkReq} body
 */

/**
 * @typedef GetShortLinkByHashParam
 * @property {string} hash
 */

/**
 * @typedef GetShortLinksParam
 * @property {number} [pageNo] - Current page number
 * @property {number} [pageSize] - Number of items displayed per page
 * @property {string} [createdBy] - Short link creator
 * @property {string} [active] - Short link active status
 * @property {string} [shortUrl] - Search for short url
 * @property {string} [originalUrl] - Search for original url
 * @property {string} [title] - Search text for title
 */

/**
 * @typedef UpdateShortLinkByIdParam
 * @property {string} id - Document Id
 * @property {SharePlatformModel.ShortLinkReq} body
 */

class SharePlatformApplicationValidator {
  /** @returns {CreateShortLinkParam} */
  static createShortLink() {
    return Joi.object({
      body: SharePlatformModel.ShortLinkReq().required(),
    }).required();
  }

  /** @returns {GetShortLinkByHashParam} */
  static getShortLinkByHash() {
    return Joi.object({
      hash: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetShortLinksParam} */
  static getShortLinks() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      createdBy: Joi.string().allow(""),
      active: Joi.string().allow(""),
      shortUrl: Joi.string().allow(""),
      originalUrl: Joi.string().allow(""),
      title: Joi.string().allow(""),
    }).required();
  }

  /** @returns {UpdateShortLinkByIdParam} */
  static updateShortLinkById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: SharePlatformModel.ShortLinkReq().required(),
    }).required();
  }
}

module.exports = SharePlatformApplicationValidator;
