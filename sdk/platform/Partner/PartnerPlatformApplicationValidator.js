const Joi = require("joi");

const PartnerPlatformModel = require("./PartnerPlatformModel");

/**
 * @typedef AddProxyPathParam
 * @property {string} extensionId - Extension id for which proxy URL will be generated
 * @property {PartnerPlatformModel.AddProxyReq} body
 */

/**
 * @typedef GetProxyPathParam
 * @property {string} extensionId - Extension id
 */

/**
 * @typedef GetProxyPathAttachedPathParam
 * @property {string} extensionId - Extension id
 * @property {string} attachedPath - Application id
 */

/**
 * @typedef RemoveProxyPathParam
 * @property {string} extensionId - Extension id for which proxy URL needs to be removed
 * @property {string} attachedPath - Attachaed path slug
 */

class PartnerPlatformApplicationValidator {
  /** @returns {AddProxyPathParam} */
  static addProxyPath() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      body: PartnerPlatformModel.AddProxyReq().required(),
    }).required();
  }

  /** @returns {GetProxyPathParam} */
  static getProxyPath() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetProxyPathAttachedPathParam} */
  static getProxyPathAttachedPath() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      attachedPath: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {RemoveProxyPathParam} */
  static removeProxyPath() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      attachedPath: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = PartnerPlatformApplicationValidator;
