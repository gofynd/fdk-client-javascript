const Joi = require("joi");

const SharePlatformModel = require("./SharePlatformModel");

/**
 * @typedef CreateShortLinkParam
 * @property {SharePlatformModel.ShortLinkReq} body
 */

/**
 * @typedef GetShortLinkByHashParam
 * @property {string} hash - Hash of short url
 */

/**
 * @typedef GetShortLinkClickStatsParam
 * @property {string} surlId - Short link ID for which click statistics are to
 *   be retrieved.
 */

/**
 * @typedef GetShortLinksParam
 * @property {number} [pageNo] - Current page number
 * @property {number} [pageSize] - Current page size
 * @property {string} [createdBy] - Short link creator
 * @property {string} [active] - Short link active status
 * @property {string} [q] - Search text for original and short url
 */

/**
 * @typedef UpdateShortLinkByIdParam
 * @property {string} id - Short link document identifier
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

  /** @returns {GetShortLinkClickStatsParam} */
  static getShortLinkClickStats() {
    return Joi.object({
      surlId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetShortLinksParam} */
  static getShortLinks() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      createdBy: Joi.string().allow(""),
      active: Joi.string().allow(""),
      q: Joi.string().allow(""),
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
