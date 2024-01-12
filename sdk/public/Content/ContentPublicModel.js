const Joi = require("joi");

/**
 * @typedef ContentAPIError
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {number} [status]
 */

/**
 * @typedef CredentialSchema
 * @property {Object} [configuration]
 * @property {string} [entity_type]
 * @property {boolean} [is_enable]
 * @property {string} [type]
 */

/**
 * @typedef CredentialsSchema
 * @property {CredentialSchema[]} [items]
 */

class ContentPublicModel {
  /** @returns {ContentAPIError} */
  static ContentAPIError() {
    return Joi.object({
      code: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      info: Joi.string().allow(""),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      request_id: Joi.string().allow(""),
      stack_trace: Joi.string().allow(""),
      status: Joi.number(),
    });
  }

  /** @returns {CredentialSchema} */
  static CredentialSchema() {
    return Joi.object({
      configuration: Joi.any(),
      entity_type: Joi.string().allow(""),
      is_enable: Joi.boolean(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {CredentialsSchema} */
  static CredentialsSchema() {
    return Joi.object({
      items: Joi.array().items(ContentPublicModel.CredentialSchema()),
    });
  }
}
module.exports = ContentPublicModel;
