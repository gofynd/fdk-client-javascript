const Joi = require("joi");

/**
 * @typedef AddProxyReq
 * @property {string} [attached_path] - Proxy path slug
 * @property {string} [proxy_url] - The external URL for which the proxy URL
 *   will be generated
 */

/**
 * @typedef ExtensionProxyPathCreation
 * @property {string} [_id]
 * @property {string} [attached_path]
 * @property {string} [proxy_url]
 * @property {string} [company_id]
 * @property {string} [application_id]
 * @property {string} [extension_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef ExtensionProxyPathDelete
 * @property {string} [message]
 * @property {Object} [data]
 */

/**
 * @typedef APIError
 * @property {string} [code]
 * @property {string} [message]
 * @property {string} [info] - Error code description link
 * @property {string} [request_id]
 * @property {Object} [meta]
 */

class PartnerPlatformModel {
  /** @returns {AddProxyReq} */
  static AddProxyReq() {
    return Joi.object({
      attached_path: Joi.string().allow(""),
      proxy_url: Joi.string().allow(""),
    });
  }

  /** @returns {ExtensionProxyPathCreation} */
  static ExtensionProxyPathCreation() {
    return Joi.object({
      _id: Joi.string().allow(""),
      attached_path: Joi.string().allow(""),
      proxy_url: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      extension_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
    });
  }

  /** @returns {ExtensionProxyPathDelete} */
  static ExtensionProxyPathDelete() {
    return Joi.object({
      message: Joi.string().allow(""),
      data: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {APIError} */
  static APIError() {
    return Joi.object({
      code: Joi.string().allow(""),
      message: Joi.string().allow(""),
      info: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }
}
module.exports = PartnerPlatformModel;
