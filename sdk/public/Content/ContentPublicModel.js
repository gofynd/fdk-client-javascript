const Joi = require("joi");

/**
 * @typedef CredentialSchema
 * @property {Object} [configuration]
 * @property {string} [entity_type]
 * @property {string} [type]
 * @property {boolean} [is_enable]
 */

/**
 * @typedef CredentialsSchema
 * @property {CredentialSchema[]} [items]
 */

/**
 * @typedef ContentAPIError
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {Object} [meta]
 */

class ContentPublicModel {
  /** @returns {CredentialSchema} */
  static CredentialSchema() {
    return Joi.object({
      configuration: Joi.any(),
      entity_type: Joi.string().allow(""),
      type: Joi.string().allow(""),
      is_enable: Joi.boolean(),
    });
  }

  /** @returns {CredentialsSchema} */
  static CredentialsSchema() {
    return Joi.object({
      items: Joi.array().items(ContentPublicModel.CredentialSchema()),
    });
  }

  /** @returns {ContentAPIError} */
  static ContentAPIError() {
    return Joi.object({
      message: Joi.string().allow(""),
      status: Joi.number(),
      code: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      info: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      stack_trace: Joi.string().allow(""),
      meta: Joi.any(),
    });
  }
}
module.exports = ContentPublicModel;
