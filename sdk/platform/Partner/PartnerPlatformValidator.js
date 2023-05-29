const Joi = require("joi");

const PartnerModel = require("./PartnerPlatformModel");
class PartnerValidator {
  static deleteExtensionById() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
      uninstallReasonType: Joi.string().allow("").required(),
    }).required();
  }

  static getExtensionById() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
    }).required();
  }

  static getExtensionsForCompany() {
    return Joi.object({
      pageSize: Joi.number(),
      tag: Joi.string().allow(""),
      currentPage: Joi.string().allow(""),
      pageNo: Joi.number(),
      filterBy: Joi.string().allow(""),
    }).required();
  }

  static getExtensionsSuggestions() {
    return Joi.object({
      pageSize: Joi.number(),
    }).required();
  }

  static getPartnerInvites() {
    return Joi.object({
      requestStatus: Joi.string().allow(""),
      pageSize: Joi.string().allow(""),
      pageNo: Joi.string().allow(""),
    }).required();
  }

  static getPartnerRequestDetails() {
    return Joi.object({
      inviteId: Joi.string().allow("").required(),
    }).required();
  }

  static getPrivateExtensions() {
    return Joi.object({
      pageSize: Joi.number(),
      pageNo: Joi.number(),
      query: Joi.string().allow(""),
    }).required();
  }

  static getPublicExtension() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
    }).required();
  }

  static modifyPartnerRequest() {
    return Joi.object({
      inviteId: Joi.string().allow("").required(),
      body: PartnerModel.ModifyPartnerReq().required(),
    }).required();
  }

  static setupProducts() {
    return Joi.object({
      requestId: Joi.string().allow(""),
    }).required();
  }

  static subscribeExtension() {
    return Joi.object({
      entity: Joi.string().allow("").required(),
      extensionId: Joi.string().allow("").required(),
      entityId: Joi.string().allow("").required(),
      body: PartnerModel.SubscriptionRequest().required(),
    }).required();
  }
}

module.exports = PartnerValidator;
