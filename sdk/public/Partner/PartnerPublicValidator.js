const Joi = require("joi");

const PartnerPublicModel = require("./PartnerPublicModel");

/** @typedef getOrganizationList */

/**
 * @typedef getPanelExtensionDetails
 * @property {string} slug - Pass the slug of the extension
 */

class PartnerPublicValidator {
  /** @returns {getOrganizationList} */
  static getOrganizationList() {
    return Joi.object({});
  }

  /** @returns {getPanelExtensionDetails} */
  static getPanelExtensionDetails() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = PartnerPublicValidator;
