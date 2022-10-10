const Joi = require("joi");
const { Validator } = require("../ApplicationModels");
class DocumentEngineValidator {
  static getInvoiceByShipmentId() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      parameters: Validator.invoiceParameter(),
    }).required();
  }

  static getCreditNoteByShipmentId() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      parameters: Validator.creditNoteParameter(),
    }).required();
  }
}
module.exports = DocumentEngineValidator;
