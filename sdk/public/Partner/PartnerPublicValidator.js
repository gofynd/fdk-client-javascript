const Joi = require("joi");

const PartnerModel = require("./PartnerPublicModel");
class PartnerValidator {
  static getOrganizationList() {
    return Joi.object({});
  }

  static getPanelExtensionDetails() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = PartnerValidator;
