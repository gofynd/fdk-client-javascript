const Joi = require("joi");

const CatalogModel = require("./CatalogPartnerModel");
class CatalogValidator {
  static partnerCompanyDetails() {
    return Joi.object({
      body: CatalogModel.PartnerCompanyDetailsRequestSchema().required(),
    }).required();
  }

  static getCompanies() {
    return Joi.object({
      q: Joi.string().allow(""),
      stage: Joi.string().allow(""),
    });
  }
}

module.exports = CatalogValidator;
