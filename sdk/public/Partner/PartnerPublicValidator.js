const Joi = require("joi");

const PartnerPublicModel = require("./PartnerPublicModel");

/**
 * @typedef GetPanelExtensionDetailsParam
 * @property {string} slug - Pass the slug of the extension
 */

class PartnerPublicValidator {
  /** @returns {GetPanelExtensionDetailsParam} */
  static getPanelExtensionDetails() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = PartnerPublicValidator;
