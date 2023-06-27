const Joi = require("joi");

const SharePlatformModel = require("./SharePlatformModel");

/**
 * @typedef createShortLink
 * @property {SharePlatformModel.ShortLinkReq} body
 */

/**
 * @typedef getShortLinkByHash
 * @property {string} hash - Hash of short url
 */

/**
 * @typedef getShortLinkClickStats
 * @property {string} surlId - Short link ID for which click statistics are to
 *   be retrieved.
 */

/**
 * @typedef getShortLinks
 * @property {number} [pageNo] - Current page number
 * @property {number} [pageSize] - Current page size
 * @property {string} [createdBy] - Short link creator
 * @property {string} [active] - Short link active status
 * @property {string} [q] - Search text for original and short url
 */

/**
 * @typedef updateShortLinkById
 * @property {string} id - Short link document identifier
 * @property {SharePlatformModel.ShortLinkReq} body
 */

class SharePlatformApplicationValidator {
  /** @returns {createShortLink} */
  static createShortLink() {
    return Joi.object({
      body: SharePlatformModel.ShortLinkReq().required(),
    }).required();
  }

  /** @returns {getShortLinkByHash} */
  static getShortLinkByHash() {
    return Joi.object({
      hash: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getShortLinkClickStats} */
  static getShortLinkClickStats() {
    return Joi.object({
      surlId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getShortLinks} */
  static getShortLinks() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      createdBy: Joi.string().allow(""),
      active: Joi.string().allow(""),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {updateShortLinkById} */
  static updateShortLinkById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: SharePlatformModel.ShortLinkReq().required(),
    }).required();
  }
}

module.exports = SharePlatformApplicationValidator;
