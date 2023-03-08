const Joi = require("joi");

const DocumentEngineModel = require("./DocumentEngineApplicationModel");
class DocumentEngineValidator {
  static getInvoiceByShipmentId() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      parameters: DocumentEngineModel.invoiceParameter(),
    }).required();
  }

  static getCreditNoteByShipmentId() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      parameters: DocumentEngineModel.creditNoteParameter(),
    }).required();
  }
}
module.exports = DocumentEngineValidator;
