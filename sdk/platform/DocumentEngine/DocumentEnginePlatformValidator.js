const Joi = require("joi");

const DocumentEngineModel = require("./DocumentEnginePlatformModel");
class DocumentEngineValidator {
  static generateBulkPackageLabel() {
    return Joi.object({
      body: DocumentEngineModel.GenerateBulkPackageLabel().required(),
    }).required();
  }

  static generateBulkBoxLabel() {
    return Joi.object({
      body: DocumentEngineModel.GenerateBulkBoxLabel().required(),
    }).required();
  }

  static generateBulkShipmentLabel() {
    return Joi.object({
      body: DocumentEngineModel.GenerateBulkShipmentLabel().required(),
    }).required();
  }

  static generateNoc() {
    return Joi.object({
      body: DocumentEngineModel.GenerateNoc().required(),
    }).required();
  }

  static getLabelStatus() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
    }).required();
  }

  static getNocStatus() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
    }).required();
  }

  static getPresignedURL() {
    return Joi.object({
      body: DocumentEngineModel.InvoiceLabelPresignedRequestBody().required(),
    }).required();
  }

  static getLabelPresignedURL() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
    }).required();
  }

  static getNocPresignedURL() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
    }).required();
  }

  static generatePOSReceipts() {
    return Joi.object({
      body: DocumentEngineModel.GeneratePOSReceipts().required(),
    }).required();
  }
}
module.exports = DocumentEngineValidator;
