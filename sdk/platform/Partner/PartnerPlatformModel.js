const Joi = require("joi");

/**
 * @typedef AddProxyReq
 * @property {string} [attached_path] - Proxy path slug
 * @property {string} [proxy_url] - The external URL for which the proxy URL
 *   will be generated
 */

/**
 * @typedef AddProxyResponse
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {string} [attached_path]
 * @property {string} [company_id]
 * @property {string} [created_at]
 * @property {string} [extension_id]
 * @property {string} [modified_at]
 * @property {string} [proxy_url]
 */

/**
 * @typedef APIError
 * @property {string} [code]
 * @property {string} [info] - Error code description link
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [request_id]
 */

/**
 * @typedef RemoveProxyResponse
 * @property {Object} [data]
 * @property {string} [message]
 */

class PartnerPlatformModel {
  /** @returns {AddProxyReq} */
  static AddProxyReq() {
    return Joi.object({
      attached_path: Joi.string().allow(""),
      proxy_url: Joi.string().allow(""),
    });
  }

  /** @returns {AddProxyResponse} */
  static AddProxyResponse() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      attached_path: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      extension_id: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      proxy_url: Joi.string().allow(""),
    });
  }

  /** @returns {APIError} */
  static APIError() {
    return Joi.object({
      code: Joi.string().allow(""),
      info: Joi.string().allow(""),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      request_id: Joi.string().allow(""),
    });
  }

  /** @returns {RemoveProxyResponse} */
  static RemoveProxyResponse() {
    return Joi.object({
      data: Joi.any(),
      message: Joi.string().allow(""),
    });
  }
}
module.exports = PartnerPlatformModel;
