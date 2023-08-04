const Joi = require("joi");

const FileStorageModel = require("./FileStorageInternalModel");
class FileStorageValidator {
  static generateBulkPdf() {
    return Joi.object({
      body: FileStorageModel.GenerateShipmentRequestBody().required(),
    }).required();
  }
}

module.exports = FileStorageValidator;
