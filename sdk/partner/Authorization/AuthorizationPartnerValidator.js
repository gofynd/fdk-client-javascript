const Joi = require("joi");

const AuthorizationModel = require("./AuthorizationPartnerModel");
class AuthorizationValidator {
  static createOrganizationClient() {
    return Joi.object({
      body: AuthorizationModel.ClientData().required(),
    }).required();
  }

  static getOrganizationClientList() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      isActive: Joi.boolean(),
    }).required();
  }

  static getOrganizationClientById() {
    return Joi.object({
      clientId: Joi.string().allow("").required(),
    }).required();
  }

  static updateOrganizationClientById() {
    return Joi.object({
      clientId: Joi.string().allow("").required(),
      body: AuthorizationModel.UpdateClient().required(),
    }).required();
  }

  static deleteOrganizationOAuthClientById() {
    return Joi.object({
      clientId: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = AuthorizationValidator;
