const Joi = require("joi");

const FileStorageModel = require("./FileStoragePartnerModel");
class FileStorageValidator {
  static getAllNamespaceDetails() {
    return Joi.object({});
  }

  static getAllOrganizationNamespaceDetails() {
    return Joi.object({}).required();
  }

  static getNamespaceDetail() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
    }).required();
  }

  static getOrganizationNamespaceDetail() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
    }).required();
  }

  static completeUploadFile() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      body: FileStorageModel.StartResponse().required(),
    }).required();
  }

  static completeUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      body: FileStorageModel.StartResponse().required(),
    }).required();
  }

  static startUploadFile() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      body: FileStorageModel.StartRequest().required(),
    }).required();
  }

  static startUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      body: FileStorageModel.StartRequest().required(),
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

  static fetchProxy() {
    return Joi.object({
      url: Joi.string().allow("").required(),
    }).required();
  }

  static saveProxyDetails() {
    return Joi.object({
      body: FileStorageModel.FetchProxyRequest().required(),
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
      body: FileStorageModel.FetchProxyRequest().required(),
    }).required();
  }

  static fetchProxyByOrganization() {
    return Joi.object({
      url: Joi.string().allow("").required(),
    }).required();
  }

  static saveProxyByOrganisation() {
    return Joi.object({
      body: FileStorageModel.FetchProxyRequest().required(),
    }).required();
  }
}

module.exports = FileStorageValidator;
