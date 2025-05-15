const Joi = require("joi");

/**
 * @typedef AddProxyReq
 * @property {string} [attached_path] - Proxy path slug
 * @property {string} [proxy_url] - The external URL for which the proxy URL
 *   will be generated
 */

/**
 * @typedef ExtensionProxyPathCreation
 * @property {string} [_id] - Unique identifier for the proxy URL entry in the database.
 * @property {string} [attached_path] - The slug path appended to the base URL
 *   for creating the proxy endpoint.
 * @property {string} [proxy_url] - The external URL that the proxy endpoint
 *   will forward requests to.
 * @property {string} [company_id] - Unique identifier of the company that owns
 *   the proxy URL.
 * @property {string} [application_id] - Unique identifier of the application
 *   associated with the proxy URL.
 * @property {string} [extension_id] - Unique identifier of the extension where
 *   the proxy URL is configured.
 * @property {string} [created_at] - The timestamp indicating when the proxy URL
 *   configuration was created.
 * @property {string} [modified_at] - The timestamp indicating the last update
 *   made to the proxy URL configuration.
 */

/**
 * @typedef ExtensionProxyPathDelete
 * @property {string} [message] - Descriptive message indicating the status or
 *   result of the deletion operation.
 * @property {Object} [data] - Additional information or metadata about the
 *   deleted proxy configuration.
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
