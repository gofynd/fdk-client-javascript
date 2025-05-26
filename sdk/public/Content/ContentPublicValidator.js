const Joi = require("joi");

const ContentPublicModel = require("./ContentPublicModel");

/**
 * @typedef GetCredentialsByEntityParam
 * @property {string} entity - Server Type
 */

class ContentPublicValidator {
  /** @returns {GetCredentialsByEntityParam} */
  static getCredentialsByEntity() {
    return Joi.object({
      entity: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = ContentPublicValidator;
