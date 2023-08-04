const Joi = require("joi");

const FileStorageModel = require("./FileStoragePlatformModel");
class FileStorageValidator {
  static appCompleteUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      body: FileStorageModel.StartResponse().required(),
    }).required();
  }

  static appCopyFiles() {
    return Joi.object({
      sync: Joi.boolean(),

      body: FileStorageModel.CopyFiles().required(),
    }).required();
  }

  static appStartUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      body: FileStorageModel.StartRequest().required(),
    }).required();
  }

  static appbrowse() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      page: Joi.number(),
      limit: Joi.number(),
    }).required();
  }

  static getDefaultHtmlTemplate() {
    return Joi.object({
      pdfTypeId: Joi.number().required(),
      format: Joi.string().allow("").required(),
    }).required();
  }

  static getDefaultPdfData() {
    return Joi.object({
      pdfTypeId: Joi.number().required(),
    }).required();
  }

  static getDefaultPdfTemplate() {
    return Joi.object({
      pdfTypeId: Joi.number().required(),
      format: Joi.string().allow("").required(),
    }).required();
  }

  static getPdfTypes() {
    return Joi.object({}).required();
  }

  static previewTemplate() {
    return Joi.object({
      body: FileStorageModel.pdfRender().required(),
    }).required();
  }

  static saveHtmlTemplate() {
    return Joi.object({
      id: Joi.number().required(),
      body: FileStorageModel.pdfConfig().required(),
    }).required();
  }
}

module.exports = FileStorageValidator;
