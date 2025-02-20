const Joi = require("joi");

const FileStorageModel = require("./FileStoragePartnerModel");
class FileStorageValidator {
  static getAllNamespaceDetails() {
    return Joi.object({}).required();
  }

  static getNamespaceDetail() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
    }).required();
  }

  static completeUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      body: FileStorageModel.FileUpload().required(),
    }).required();
  }

  static startUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      body: FileStorageModel.FileUploadStart().required(),
    }).required();
  }

  static browse() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      applicationId: Joi.string().allow("").required(),
      companyId: Joi.number().required(),
      page: Joi.number(),
      limit: Joi.number(),
    }).required();
  }

  static browseFiles() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      page: Joi.number(),
      limit: Joi.number(),
    }).required();
  }

  static organizationLevelFetchProxy() {
    return Joi.object({
      applicationId: Joi.string().allow("").required(),
      companyId: Joi.number().required(),
      url: Joi.string().allow("").required(),
    }).required();
  }

  static saveOrganizationLevelProxy() {
    return Joi.object({
      applicationId: Joi.string().allow("").required(),
      companyId: Joi.number().required(),
      body: FileStorageModel.ProxyFile().required(),
    }).required();
  }

  static fetchProxy() {
    return Joi.object({
      url: Joi.string().allow("").required(),
    }).required();
  }

  static saveProxyDetails() {
    return Joi.object({
      body: FileStorageModel.ProxyFile().required(),
    }).required();
  }
}

module.exports = FileStorageValidator;
